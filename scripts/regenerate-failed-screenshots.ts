import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.join(__dirname, '..');
const DIFF_DIR = path.join(ROOT_DIR, '.screenshots-temp', 'diff');

async function findFailedBaselines(): Promise<string[]> {
  const diffFiles = await glob('**/*.png', {
    cwd: DIFF_DIR,
    absolute: false,
    nodir: true,
  });

  // Diff paths mirror baseline paths — strip the diff prefix to recover them
  return diffFiles.map((relativeDiff) => path.join(ROOT_DIR, relativeDiff));
}

function deleteBaselines(files: string[]): { deleted: number; failed: string[] } {
  console.log(`Deleting ${files.length} failing baseline(s)...`);

  let deleted = 0;
  const failed: string[] = [];

  for (const file of files) {
    try {
      fs.unlinkSync(file);
      console.log(`  Deleted: ${path.relative(ROOT_DIR, file)}`);
      deleted++;
    } catch (error) {
      console.error(`  Failed to delete ${file}:`, error);
      failed.push(file);
    }
  }

  return { deleted, failed };
}

function runScreenshotTests(): void {
  execSync('pnpm test:screenshots', { stdio: 'inherit', cwd: ROOT_DIR });
}

function showSummary(regeneratedCount: number): void {
  console.log('');
  console.log('═══════════════════════════════════════');
  console.log('Regeneration complete!');
  console.log(`   Regenerated ${regeneratedCount} baseline(s)`);
  console.log('');
  console.log('Next steps:');
  console.log('  1. Review changes: git diff');
  console.log('  2. Commit if satisfied: git add . && git commit');
  console.log('═══════════════════════════════════════');
}

async function main(): Promise<void> {
  console.log('Step 1/3: Running screenshot tests to identify failures...');
  console.log('');

  try {
    runScreenshotTests();
    console.log('');
    console.log('All screenshots are already passing! Nothing to regenerate.');
    process.exit(0);
  } catch {
    // Expected when screenshots fail — continue to regenerate
    console.log('');
  }

  console.log('Step 2/3: Identifying and deleting failing baselines...');
  console.log('');

  const diffDirExists = await fs.promises
    .access(DIFF_DIR)
    .then(() => true)
    .catch(() => false);

  if (!diffDirExists) {
    console.error('No diff directory found. The failure may not be screenshot-related (check test output above).');
    process.exit(1);
  }

  const failedBaselines = await findFailedBaselines();

  if (failedBaselines.length === 0) {
    console.error('No diff images found. The failure may not be screenshot-related (check test output above).');
    process.exit(1);
  }

  console.log(`Found ${failedBaselines.length} failed screenshot(s)`);
  console.log('');

  const { deleted, failed } = deleteBaselines(failedBaselines);

  if (failed.length > 0) {
    console.error(`Failed to delete ${failed.length} file(s). Aborting.`);
    process.exit(1);
  }

  console.log('');
  console.log('Step 3/3: Regenerating baselines for failed screenshots...');
  console.log('');

  try {
    runScreenshotTests();
  } catch (error) {
    console.error('');
    console.error('Regeneration failed — some screenshots are still failing after baseline deletion.');
    console.error('This may indicate a rendering issue. Check the diff images in .screenshots-temp/diff/');
    throw error;
  }

  showSummary(deleted);
}

main().catch((error) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error('');
  console.error('Fatal error:', message);
  process.exit(1);
});
