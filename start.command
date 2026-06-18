#!/bin/bash
# Double-click to launch the Bit2Sky website locally.
# Installs dependencies if needed, starts the dev server, and opens your browser.

cd "$(dirname "$0")" || exit 1
clear
echo "============================================"
echo "  Bit2Sky Technologies — local dev server"
echo "============================================"
echo

# 1. Check Node.js
if ! command -v node >/dev/null 2>&1; then
  echo "❌ Node.js is not installed."
  echo "   Install it from https://nodejs.org (LTS) or run: brew install node"
  echo
  read -n 1 -s -r -p "Press any key to close..."
  exit 1
fi
echo "✓ Node $(node -v) detected"

# 2. Install dependencies (only if missing)
if [ ! -d "node_modules" ]; then
  echo "→ Installing dependencies (first run only, ~1 min)..."
  npm install || { echo "❌ npm install failed"; read -n 1 -s -r -p "Press any key to close..."; exit 1; }
else
  echo "✓ Dependencies already installed"
fi

# 3. Open the browser shortly after the server starts
( sleep 6; open "http://localhost:3000" ) &

echo
echo "→ Starting server at http://localhost:3000"
echo "  (Keep this window open. Press Ctrl+C to stop.)"
echo
npm run dev
