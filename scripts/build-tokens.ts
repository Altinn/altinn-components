import { type ExecSyncOptions, execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const TOKENS_DIR = './lib/css/tokens';
const ALTINN_METADATA_PATH = path.join(TOKENS_DIR, 'altinn-design-tokens/$metadata.json');
const DESIGN_TOKENS_METADATA_PATH = path.join(TOKENS_DIR, 'design-tokens/$metadata.json');

type Metadata = {
  tokenSetOrder?: string[];
  [key: string]: unknown;
};

function runCommand(command: string, cwd: string): void {
  console.log(`Running: ${command} in ${cwd}`);

  const options: ExecSyncOptions = {
    cwd,
    stdio: 'inherit',
  };

  try {
    execSync(command, options);
  } catch (error) {
    console.error(`Error running command: ${command}`);
    throw error;
  }
}
function readJsonFile<T extends object>(filePath: string): T {
  const raw = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(raw) as T;
}

function writeJsonFile(filePath: string, data: unknown): void {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function mergeTokenSetOrder(): void {
  console.log('Merging tokenSetOrder from altinn-design-tokens to design-tokens...');

  if (!fs.existsSync(ALTINN_METADATA_PATH)) {
    console.log('No altinn-design-tokens/$metadata.json found, skipping merge');
    return;
  }

  const altinnMetadata = readJsonFile<Metadata>(ALTINN_METADATA_PATH);

  let designTokensMetadata: Metadata = {};
  if (fs.existsSync(DESIGN_TOKENS_METADATA_PATH)) {
    designTokensMetadata = readJsonFile<Metadata>(DESIGN_TOKENS_METADATA_PATH);
  }

  const existingTokenSetOrder = designTokensMetadata.tokenSetOrder ?? [];
  const altinnTokenSetOrder = altinnMetadata.tokenSetOrder ?? [];

  const mergedTokenSetOrder = [...existingTokenSetOrder];
  for (const token of altinnTokenSetOrder) {
    if (!mergedTokenSetOrder.includes(token)) {
      mergedTokenSetOrder.push(token);
    }
  }

  designTokensMetadata.tokenSetOrder = mergedTokenSetOrder;

  writeJsonFile(DESIGN_TOKENS_METADATA_PATH, designTokensMetadata);
  console.log('Successfully merged tokenSetOrder');
}

function main(): void {
  try {
    console.log('Starting token build process...');
    console.log('Step 1: Creating design tokens...');
    runCommand(
      'pnpm dlx @digdir/designsystemet@latest tokens create --config ./designsystemet.config.json',
      TOKENS_DIR,
    );

    console.log('Step 2: Merging tokenSetOrder...');
    mergeTokenSetOrder();

    console.log('Step 3: Building tokens...');
    runCommand('pnpm dlx @digdir/designsystemet@latest tokens build', TOKENS_DIR);

    console.log('Token build process completed successfully!');
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('Token build process failed:', message);
    process.exit(1);
  }
}

main();
