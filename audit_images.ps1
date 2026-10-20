$pages = @('index.html', 'about.html', 'menu.html', 'contact.html', 'home-2.html')
$results = @()

foreach ($p in $pages) {
    if (Test-Path $p) {
        $content = Get-Content $p -Raw
        $regexMatches = [regex]::Matches($content, 'photo-([a-zA-Z0-9_-]+)')
        foreach ($m in $regexMatches) {
            $results += [PSCustomObject]@{
                Page = $p
                PhotoId = $m.Groups[1].Value
            }
        }
    }
}

Write-Host "Total Unsplash photo references found:" $results.Count

$dupes = $results | Group-Object PhotoId | Where-Object { $_.Count -gt 1 }
if ($dupes) {
    Write-Host "DUPLICATES FOUND:" -ForegroundColor Yellow
    foreach ($d in $dupes) {
        $pageList = ($d.Group.Page | Select-Object -Unique) -join ', '
        Write-Host "Photo ID $($d.Name) used in: $pageList"
    }
} else {
    Write-Host "NO DUPLICATES! Every image across all pages is 100% unique." -ForegroundColor Green
}
