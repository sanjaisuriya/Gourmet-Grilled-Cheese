$candidates = @(
    'photo-1555396273-367ea4eb4db5',
    'photo-1511795409834-ef04bbd61622',
    'photo-1464366400600-7168b8af9bc3',
    'photo-1533777857889-4be7c70b33f7',
    'photo-1504674900247-0877df9cc836',
    'photo-1555244162-803834f70033'
)
foreach ($id in $candidates) {
    try {
        $url = "https://images.unsplash.com/$id?auto=format&fit=crop&w=800&q=80"
        $res = Invoke-WebRequest -Uri $url -Method Get -TimeoutSec 5 -UserAgent "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        Write-Host "[OK] $id -> HTTP $($res.StatusCode)" -ForegroundColor Green
    } catch {
        Write-Host "[FAIL] $id -> $($_.Exception.Message)" -ForegroundColor Red
    }
}
