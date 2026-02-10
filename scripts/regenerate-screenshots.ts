import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline';
import { glob } from 'glob';

const LIB_DIR = './lib';
const SCREENSHOT_PATTERN = '**/__screenshots__/**/*.png';

async function findAllBaselineScreenshots(): Promise<string[]> {
  console.log('Finding all baseline screenshots...');

  const pattern = path.join(LIB_DIR, SCREENSHOT_PATTERN);
  const files = await glob(pattern, {
    absolute: false,
    nodir: true,
  });

  return files;
}

async function promptConfirmation(): Promise<boolean> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(
      'WARNING: This will delete ALL screenshot baselines and regenerate them. Are you sure? (yes/no): ',
      (answer) => {
        rl.close();
        resolve(answer.toLowerCase() === 'yes');
      },
    );
  });
}

function deleteBaselineScreenshots(files: string[]): { deleted: number; failed: string[] } {
  console.log(`Deleting ${files.length} baseline screenshot(s)...`);

  let deleted = 0;
  const failed: string[] = [];

  for (const file of files) {
    try {
      fs.unlinkSync(file);
      deleted++;
    } catch (error) {
      console.error(`Failed to delete ${file}:`, error);
      failed.push(file);
    }
  }

  return { deleted, failed };
}

function cleanupEmptyDirectories(basePath: string): void {
  console.log('Cleaning up empty directories...');

  // Find all __screenshots__ directories
  const screenshotDirs: string[] = [];

  function findScreenshotDirs(dir: string): void {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const fullPath = path.join(dir, entry.name);

        if (entry.name === '__screenshots__') {
          screenshotDirs.push(fullPath);
        } else {
          findScreenshotDirs(fullPath);
        }
      }
    }
  }

  findScreenshotDirs(basePath);

  // Sort by depth (deepest first) to remove nested empty dirs first
  screenshotDirs.sort((a, b) => b.split(path.sep).length - a.split(path.sep).length);

  for (const dir of screenshotDirs) {
    try {
      if (fs.existsSync(dir)) {
        const entries = fs.readdirSync(dir);
        if (entries.length === 0) {
          fs.rmdirSync(dir);
          console.log(`  Removed empty directory: ${dir}`);
        }
      }
    } catch (error) {
      // Ignore errors for non-empty directories
    }
  }
}

function regenerateScreenshots(): void {
  console.log('Regenerating screenshots...');
  console.log('');

  try {
    execSync('pnpm test:screenshots', {
      stdio: 'inherit',
    });
  } catch (error) {
    console.error('');
    console.error('Screenshot regeneration failed');
    throw error;
  }
}

function showSummary(deletedCount: number, failedFiles: string[]): void {
  console.log('');
  console.log('═══════════════════════════════════════');

  if (failedFiles.length > 0) {
    console.log('.  Screenshot regeneration completed with warnings');
    console.log(`   Deleted: ${deletedCount} baseline(s)`);
    console.log(`   Failed: ${failedFiles.length} file(s)`);
    console.log('');
    console.log('Failed files:');
    for (const file of failedFiles) {
      console.log(`  - ${file}`);
    }
  } else {
    console.log('Screenshot regeneration complete!');
    console.log(`   Regenerated ${deletedCount} baseline(s)`);
  }

  console.log('');
  console.log('Next steps:');
  console.log('  1. Run: pnpm test:screenshots');
  console.log('  2. Review changes: git diff');
  console.log('  3. Commit if satisfied: git add . && git commit');
  console.log('═══════════════════════════════════════');
}

async function main(): Promise<void> {
  try {
    const args = process.argv.slice(2);
    const noConfirm = args.includes('--no-confirm');

    // Find all baseline screenshots
    const files = await findAllBaselineScreenshots();

    if (files.length === 0) {
      console.log('No baseline screenshots found');
      process.exit(0);
    }

    console.log(`Found ${files.length} baseline screenshot(s)`);
    console.log('');

    // Prompt for confirmation unless --no-confirm flag is used
    if (!noConfirm) {
      const confirmed = await promptConfirmation();

      if (!confirmed) {
        console.log('Operation cancelled');
        process.exit(0);
      }
    }

    console.log('');

    // Delete baseline screenshots
    const { deleted, failed } = deleteBaselineScreenshots(files);

    // Clean up empty directories
    cleanupEmptyDirectories(LIB_DIR);

    console.log('');

    // Regenerate screenshots
    regenerateScreenshots();

    // Show summary
    showSummary(deleted, failed);

    process.exit(failed.length > 0 ? 1 : 0);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('');
    console.error('Fatal error:', message);
    process.exit(1);
  }
}

main();
