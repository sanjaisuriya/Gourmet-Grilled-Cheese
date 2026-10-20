$files = Get-ChildItem -Filter '*.html'
$allIds = @()
foreach ($f in $files) {
    $content = Get-Content $f.FullName -Raw
    $m = [regex]::Matches($content, 'photo-([a-zA-Z0-9_-]+)')
    foreach ($match in $m) {
        $allIds += [PSCustomObject]@{ File = $f.Name; Id = 'photo-' + $match.Groups[1].Value }
    }
}
$allIds | Select-Object -Unique Id, File | Format-Table -AutoSize
