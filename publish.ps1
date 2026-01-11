param(
  [string]$repo
)
if (-not $repo) {
  Write-Host "Usage: .\publish.ps1 -repo 'git@github.com:YourUser/bitwise-studio.git'"
  exit 1
}

git init
git add .
git commit -m "Initial commit"
git branch -M main
# Use SSH or HTTPS repo URL
git remote add origin $repo
git push -u origin main

Write-Host "Pushed to $repo. Now configure Pages in the repo settings and wait for HTTPS certificate."