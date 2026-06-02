# Redeploy portfolio to GitHub Pages (gh-pages branch).
# Usage:  .\deploy.ps1 -Token ghp_xxx
param([Parameter(Mandatory = $true)][string]$Token)

$ErrorActionPreference = 'Stop'
$root = $PSScriptRoot
$src  = Join-Path $root 'dist\portfolio\browser'
$pub  = Join-Path (Split-Path $root) '_ghpages'

Write-Host '==> Building (base-href=/portfolio/)...' -ForegroundColor Cyan
& ng build --base-href=/portfolio/

if (Test-Path $pub) { Remove-Item $pub -Recurse -Force }
New-Item -ItemType Directory -Force $pub | Out-Null
Copy-Item "$src\*" $pub -Recurse -Force
New-Item -ItemType File "$pub\.nojekyll" | Out-Null
Copy-Item "$pub\index.html" "$pub\404.html" -Force

Write-Host '==> Pushing gh-pages...' -ForegroundColor Cyan
Push-Location $pub
git init -b gh-pages | Out-Null
git add -A
git -c user.name='Jesus Callisaya' -c user.email='jesuscallisayasalinas@gmail.com' commit -m 'deploy: portfolio static build' | Out-Null
git remote add origin "https://$Token@github.com/arthasjoshimar/portfolio.git"
git push -f origin gh-pages
git remote set-url origin 'https://github.com/arthasjoshimar/portfolio.git'
Pop-Location

Write-Host '==> Done. Live at https://arthasjoshimar.github.io/portfolio/' -ForegroundColor Green
