$testList = @(
    'photo-1565123409695-7b5ef63a2efb', # food truck
    'photo-1567129937968-cdab8f8dd2ed', # food truck festival
    'photo-1565299624946-b28f40a0ae38', # food pizza / burger
    'photo-1552590635-27c2c2128abf', # food event
    'photo-1528735602780-2552fd46c7af',
    'photo-1561758033-d89a9ad46330', # burger/melt
    'photo-1550547660-d9450f859349',
    'photo-1544025162-d76694265947', # food truck / street food
    'photo-1565895405138-6c3a1555da6a', # food truck burger/melt
    'photo-1512152272829-e3139592d56f'  # food truck / fast food
)

foreach ($id in $testList) {
    try {
        $url = "https://images.unsplash.com/$id?auto=format&fit=crop&w=800&q=80"
        $res = Invoke-WebRequest -Uri $url -Method Get -TimeoutSec 4 -UserAgent "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        Write-Host "[OK] $id -> HTTP $($res.StatusCode)" -ForegroundColor Green
    } catch {
        Write-Host "[FAIL] $id" -ForegroundColor Red
    }
}
