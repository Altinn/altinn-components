import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';

export interface ComparisonResult {
  match: boolean;
  mismatchedPixels: number;
  totalPixels: number;
  percentage: number;
  error?: string;
  baselineCreated?: boolean;
}

/**
 * Helper function to create error results with consistent formatting.
 */
function createErrorResult(error: unknown, context?: string): ComparisonResult {
  const errorMessage = error instanceof Error ? error.message : String(error);
  return {
    match: false,
    mismatchedPixels: 0,
    totalPixels: 0,
    percentage: 100,
    error: context ? `${context}: ${errorMessage}` : errorMessage,
  };
}

/**
 * Auto-creates a baseline screenshot from the actual screenshot when baseline doesn't exist.
 * This allows tests to pass on first run and creates the reference image for future comparisons.
 */
async function createBaselineFromActual(actualPath: string, baselinePath: string): Promise<ComparisonResult> {
  try {
    const actualBuffer = await fs.readFile(actualPath);
    await fs.mkdir(path.dirname(baselinePath), { recursive: true });
    await fs.writeFile(baselinePath, actualBuffer);

    return {
      match: true,
      mismatchedPixels: 0,
      totalPixels: 0,
      percentage: 0,
      baselineCreated: true,
    };
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return {
        match: false,
        mismatchedPixels: 0,
        totalPixels: 0,
        percentage: 100,
        error: `Actual screenshot not found at ${actualPath}. This is likely a test infrastructure issue.`,
      };
    }
    return createErrorResult(error, 'Failed to create baseline');
  }
}

/**
 * Compare two PNG screenshots pixel-by-pixel.
 * - If baseline doesn't exist: auto-creates it from actual (first run)
 * - If baseline exists: compares pixel-by-pixel and generates diff image on mismatch
 *
 * @param actualPath - Screenshot captured during test run (.screenshots-temp/actual/)
 * @param baselinePath - Reference screenshot (lib/components/.../\_\_screenshots\_\_/)
 * @param diffPath - Where to save diff image on mismatch (.screenshots-temp/diff/)
 * @param threshold - Pixel matching threshold (0-1), defaults to 0.1
 * @returns Comparison result with match status and pixel difference details
 */
export async function compareScreenshots(
  actualPath: string,
  baselinePath: string,
  diffPath: string,
  threshold = 0.1,
): Promise<ComparisonResult> {
  const baselineExists = await fs
    .access(baselinePath)
    .then(() => true)
    .catch(() => false);

  if (!baselineExists) {
    return await createBaselineFromActual(actualPath, baselinePath);
  }

  try {
    // Read both files in parallel
    const [baselineBuffer, actualBuffer] = await Promise.all([fs.readFile(baselinePath), fs.readFile(actualPath)]);

    const actualImg = PNG.sync.read(actualBuffer);
    const baselineImg = PNG.sync.read(baselineBuffer);

    // Check dimensions match
    if (actualImg.width !== baselineImg.width || actualImg.height !== baselineImg.height) {
      return {
        match: false,
        mismatchedPixels: 0,
        totalPixels: actualImg.width * actualImg.height,
        percentage: 100,
        error: `Image dimensions don't match. Baseline: ${baselineImg.width}x${baselineImg.height}, Actual: ${actualImg.width}x${actualImg.height}`,
      };
    }

    const { width, height } = actualImg;
    const totalPixels = width * height;

    // Create diff image
    const diff = new PNG({ width, height });

    // Perform pixel comparison
    const mismatchedPixels = pixelmatch(baselineImg.data, actualImg.data, diff.data, width, height, { threshold });

    const percentage = (mismatchedPixels / totalPixels) * 100;
    const match = mismatchedPixels === 0;

    // Only save diff image if there's a mismatch
    if (!match) {
      await fs.mkdir(path.dirname(diffPath), { recursive: true });
      await fs.writeFile(diffPath, PNG.sync.write(diff));
    }

    return {
      match,
      mismatchedPixels,
      totalPixels,
      percentage,
    };
  } catch (error) {
    return createErrorResult(error, 'Screenshot comparison failed');
  }
}

/**
 * Clean up temporary screenshot directories created during testing.
 */
export async function cleanupTemporaryFiles(): Promise<void> {
  try {
    await fs.rm('.screenshots-temp', { recursive: true, force: true });
  } catch {
    // Ignore errors if directory doesn't exist
  }
}

interface ComparisonFailure {
  testName: string;
  actualPath: string;
  baselinePath: string;
  diffPath: string;
  percentage: number;
  mismatchedPixels: number;
  totalPixels: number;
  error?: string;
}

/**
 * Compare all captured screenshots against baselines.
 * - Baselines are stored in component-local \_\_screenshots\_\_ directories
 * - If baseline doesn't exist, it's auto-created from the actual screenshot
 * - Diff images are saved to .screenshots-temp/diff/ for failed comparisons
 *
 * @param filterPattern - Optional pattern to filter screenshots (e.g., "Button")
 * @returns Summary of passed tests, failures, and newly created baselines
 */
export async function compareAllScreenshots(filterPattern?: string): Promise<{
  passed: number;
  failed: ComparisonFailure[];
  baselinesCreated: number;
}> {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const rootDir = path.join(__dirname, '..', '..');
  const tempDir = path.join(rootDir, '.screenshots-temp');
  const actualDir = path.join(tempDir, 'actual');

  try {
    await fs.access(actualDir);
  } catch {
    console.error('No screenshots captured! Make sure SCREENSHOT_MODE=test is set when running tests.');
    process.exit(1);
  }

  let actualScreenshots = await glob('**/*.png', {
    cwd: actualDir,
    absolute: false,
  });

  // Filter if pattern provided
  if (filterPattern) {
    actualScreenshots = actualScreenshots.filter((screenshot) => screenshot.includes(filterPattern));
    console.log(`\nFiltering by: "${filterPattern}"`);
  }

  if (actualScreenshots.length === 0) {
    if (filterPattern) {
      console.error(`No screenshots found matching filter: "${filterPattern}"`);
    } else {
      console.error('No screenshots were captured!');
    }
    process.exit(1);
  }

  console.log(`\nComparing ${actualScreenshots.length} screenshot(s)...\n`);

  const failures: ComparisonFailure[] = [];
  let passedCount = 0;
  let baselinesCreated = 0;

  // Compare each screenshot
  for (const relativePath of actualScreenshots) {
    const actualPath = path.join(actualDir, relativePath);
    const baselinePath = path.join(rootDir, relativePath);
    const diffPath = path.join(tempDir, 'diff', relativePath);

    const result = await compareScreenshots(actualPath, baselinePath, diffPath);

    if (result.baselineCreated) {
      baselinesCreated++;
      console.log(`  Screenshot baseline created - ${relativePath}`);
    } else if (!result.match) {
      failures.push({
        testName: relativePath,
        actualPath,
        baselinePath,
        diffPath,
        percentage: result.percentage,
        mismatchedPixels: result.mismatchedPixels,
        totalPixels: result.totalPixels,
        error: result.error,
      });
      console.log(`  test failed - ${relativePath}`);
      if (result.error) {
        console.log(`     Error: ${result.error}`);
      } else {
        console.log(
          `     ${result.percentage.toFixed(2)}% different (${result.mismatchedPixels}/${result.totalPixels} pixels)`,
        );
      }
    } else {
      passedCount++;
    }
  }

  console.log('');

  // Clean up actual screenshots (only keep diffs for debugging failures)
  await fs.rm(actualDir, { recursive: true, force: true });

  return {
    passed: passedCount,
    failed: failures,
    baselinesCreated,
  };
}

// CLI entry point (only runs when executed directly)
if (import.meta.url === `file://${process.argv[1]}`) {
  (async () => {
    try {
      // Get optional filter pattern from command line args
      const filterPattern = process.argv[2];
      const results = await compareAllScreenshots(filterPattern);

      if (results.failed.length > 0) {
        console.error(`Screenshot comparison FAILED`);
        console.error(`   Passed: ${results.passed}`);
        console.error(`   Failed: ${results.failed.length}`);
        if (results.baselinesCreated > 0) {
          console.error(`   New screenshots baselines: ${results.baselinesCreated}`);
        }
        console.error('');
        console.error('Diff images saved in .screenshots-temp/diff/ for review');
        process.exit(1);
      } else {
        if (results.baselinesCreated > 0) {
          console.log(`Created ${results.baselinesCreated} new baseline(s)`);
          console.log(`All ${results.passed} existing screenshot(s) passed`);
          console.log('');
          console.log('NOTE: New baselines were created. Review them with git diff and commit if correct.');
        } else {
          console.log(`All ${results.passed} screenshot(s) match the baseline`);
          console.log('');
        }
        console.log('Cleaning up temporary files...');
        await cleanupTemporaryFiles();
        process.exit(0);
      }
    } catch (error) {
      console.error('Error during screenshot comparison:', error);
      process.exit(1);
    }
  })();
}
