#!/bin/bash
# Screenshot testing with filtering
# Usage: pnpm test:screenshots:filter "ComponentName"

FILTER="$1"

if [ -z "$FILTER" ]; then
  echo "Error: Please provide a filter pattern"
  echo ""
  echo "Usage: pnpm test:screenshots:filter \"ComponentName\""
  echo ""
  echo "Examples:"
  echo "  pnpm test:screenshots:filter \"Button\""
  exit 1
fi

echo "Testing screenshots matching: \"$FILTER\""
echo ""

# Clean up old screenshots from previous runs
rm -rf .screenshots-temp/actual

# Run filtered tests
echo "Capturing screenshots..."
SCREENSHOT_MODE=test pnpm vitest --run --project=storybook -t "$FILTER" --reporter=dot

# Check if tests ran successfully
if [ $? -ne 0 ]; then
  echo ""
  echo "Tests failed"
  exit 1
fi

# Compare screenshots (also filtered)
echo ""
node --import tsx lib/test-utils/screenshot-compare.ts "$FILTER"
