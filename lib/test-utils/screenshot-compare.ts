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
}

/**
 * Compare two PNG screenshots pixel-by-pixel and generate a diff image if they don't match.
 *
 * @param actualPath - Path to the actual screenshot captured during testing
 * @param baselinePath - Path to the baseline screenshot (committed to git)
 * @param diffPath - Path where the diff image should be saved (only on mismatch)
 * @param threshold - Matching threshold (0-1), defaults to 0.1
 * @returns Comparison result with match status and pixel difference information
 */
export async function compareScreenshots(
  actualPath: string,
  baselinePath: string,
  diffPath: string,
  threshold = 0.1,
): Promise<ComparisonResult> {
  try {
    // Check if baseline exists
    try {
      await fs.access(baselinePath);
    } catch {
      return {
        match: false,
        mismatchedPixels: 0,
        totalPixels: 0,
        percentage: 100,
        error: `No baseline found at ${baselinePath}. Run 'pnpm test:screenshots-update' to generate baseline screenshots.`,
      };
    }

    // Check if actual screenshot exists
    try {
      await fs.access(actualPath);
    } catch {
      return {
        match: false,
        mismatchedPixels: 0,
        totalPixels: 0,
        percentage: 100,
        error: `Actual screenshot not found at ${actualPath}. This is likely a test infrastructure issue.`,
      };
    }

    // Read both images
    const [actualBuffer, baselineBuffer] = await Promise.all([fs.readFile(actualPath), fs.readFile(baselinePath)]);

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
    return {
      match: false,
      mismatchedPixels: 0,
      totalPixels: 0,
      percentage: 100,
      error: `Screenshot comparison failed: ${error instanceof Error ? error.message : String(error)}`,
    };
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
 * Compare all screenshots in the temporary directory against the baseline.
 * Returns the number of passed tests and details about any failures.
 *
 * @param filterPattern - Optional pattern to filter which screenshots to compare (e.g., "Button" or "VirtualizedMenu")
 */
export async function compareAllScreenshots(filterPattern?: string): Promise<{
  passed: number;
  failed: ComparisonFailure[];
}> {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const rootDir = path.join(__dirname, '..', '..');
  const baselineDir = path.join(rootDir, '__screenshots__');
  const tempDir = path.join(rootDir, '.screenshots-temp');
  const actualDir = path.join(tempDir, 'actual');

  // Check if baseline exists
  try {
    await fs.access(baselineDir);
  } catch {
    console.error('No baseline screenshots found!');
    console.error('');
    console.error('Generate baseline first: pnpm test:screenshots-update');
    process.exit(1);
  }

  // Check if actual screenshots were generated
  try {
    await fs.access(actualDir);
  } catch {
    console.error('No actual screenshots found! This likely means screenshot capture failed.');
    process.exit(1);
  }

  // Find all actual screenshots
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

  // Compare each screenshot
  for (const relativePath of actualScreenshots) {
    const actualPath = path.join(actualDir, relativePath);
    const baselinePath = path.join(baselineDir, relativePath);
    const diffPath = path.join(tempDir, 'diff', relativePath);

    const result = await compareScreenshots(actualPath, baselinePath, diffPath);

    if (!result.match) {
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

  // Clean up actual screenshots (we only need diffs for failed tests)
  await fs.rm(actualDir, { recursive: true, force: true });

  return {
    passed: passedCount,
    failed: failures,
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
        console.error('');
        console.error('Diff images saved in .screenshots-temp/diff/ for review');
        process.exit(1);
      } else {
        console.log(`All ${results.passed} screenshot(s) match the baseline!`);
        console.log('');
        // Tests passed - clean up temp files
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
