import subprocess
import re

res = subprocess.run([
    r'C:\Program Files\Google\Chrome\Application\chrome.exe',
    '--headless=new',
    '--dump-dom',
    'https://unsplash.com/photos/a-small-food-trailer-with-an-open-service-window-and-seating-jMiuyRZw6nE'
], capture_output=True, text=True, encoding='utf-8')

print('Return code:', res.returncode)
print('Stdout length:', len(res.stdout))
imgs = re.findall(r'https://images\.unsplash\.com/photo-[^\s"\'<>]+', res.stdout)
for img in set(imgs):
    print('Found:', img[:80])
