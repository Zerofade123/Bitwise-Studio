#!/usr/bin/env bash
if [ -z "$1" ]; then
  echo "Usage: ./publish.sh git@github.com:YourUser/bitwise-studio.git"
  exit 1
fi
REPO=$1

git init
git add .
git commit -m "Initial commit"
git branch -M main

git remote add origin "$REPO"
git push -u origin main

echo "Pushed to $REPO. Configure Pages in repo settings and enable HTTPS when ready."