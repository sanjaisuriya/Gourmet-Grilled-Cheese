try {
    $url = "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80"
    $res = Invoke-WebRequest -Uri $url -Method Get -TimeoutSec 10 -UserAgent "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    Write-Host "STATUS:" $res.StatusCode
} catch {
    Write-Host "ERROR:" $_.Exception.ToString()
}
