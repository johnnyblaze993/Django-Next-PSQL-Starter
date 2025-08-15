#!/bin/sh
# If node_modules is missing (because of bind mount), install dependencies
if [ ! -d "node_modules" ]; then
  echo "node_modules missing, running npm install..."
  npm install
fi

# Start the Next.js dev server
npm run dev
