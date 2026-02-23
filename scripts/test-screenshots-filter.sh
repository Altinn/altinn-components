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

# Run filtered tests by file path (searches in lib/components and lib/stories)
# This allows filtering by component name (e.g., "Button", "Snackbar")
echo "Capturing screenshots..."

# Try to find matching story files in common locations
COMPONENT_PATH="lib/components/$FILTER"
STORIES_PATH="lib/stories/$FILTER"

# Check which paths exist and run tests for them
if [ -d "$COMPONENT_PATH" ]; then
  SCREENSHOT_MODE=test pnpm vitest --run --project=storybook "$COMPONENT_PATH" --reporter=dot
elif [ -d "$STORIES_PATH" ]; then
  SCREENSHOT_MODE=test pnpm vitest --run --project=storybook "$STORIES_PATH" --reporter=dot
else
  # Fallback: search for any path containing the filter string
  SCREENSHOT_MODE=test pnpm vitest --run --project=storybook -t "$FILTER" --reporter=dot
fi

# Check if tests ran successfully
if [ $? -ne 0 ]; then
  echo ""
  echo "Tests failed"
  exit 1
fi

# Compare screenshots (also filtered)
echo ""
node --import tsx lib/test-utils/screenshot-compare.ts "$FILTER"
