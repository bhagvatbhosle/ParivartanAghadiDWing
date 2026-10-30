param(
  [string]$CommitMessage = "Build and deploy latest website changes"
)

$ErrorActionPreference = "Stop"
$repoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $repoRoot

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
  throw "Git is not installed or is not available in PATH."
}

Write-Host "Installing dependencies..."
npm ci

Write-Host "Building production website..."
npm run build

if (-not (Test-Path "$repoRoot\dist\index.html")) {
  throw "Build failed: dist\index.html was not created."
}

Write-Host "Updating production build folder..."
Remove-Item "$repoRoot\build\assets" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item "$repoRoot\build\photos" -Recurse -Force -ErrorAction SilentlyContinue

Copy-Item "$repoRoot\dist\*" "$repoRoot\build" -Recurse -Force

git add -A

$changesPending = git diff --cached --quiet
if ($LASTEXITCODE -eq 0) {
  Write-Host "No changes to commit."
  exit 0
}

git -c user.name="bhagvatbhosle" -c user.email="bhagvatbhosle@users.noreply.github.com" commit -m $CommitMessage -m "Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
git push origin main

Write-Host "Changes pushed. GitHub Pages deployment should start automatically."
