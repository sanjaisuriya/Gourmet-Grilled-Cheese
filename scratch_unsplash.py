import urllib.request
import re

def get_unsplash_img(page_url):
    req = urllib.request.Request(page_url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        with urllib.request.urlopen(req) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            m = re.findall(r'https://images\.unsplash\.com/photo-[a-zA-Z0-9\-_]+', html)
            return list(dict.fromkeys(m))
    except Exception as e:
        print(f"Error fetching {page_url}: {e}")
        return []

urls = [
    'https://unsplash.com/photos/a-close-up-of-a-sandwich-and-fries-on-a-plate-Q591xZz2d7U',
    'https://unsplash.com/photos/a-delicious-sandwich-with-melted-cheese-and-toppings-wQd4aE41F3w',
    'https://unsplash.com/photos/sandwich-with-fries-in-tray-G2_vB9tqN98'
]

for u in urls:
    print('Testing:', u)
    imgs = get_unsplash_img(u)
    for img in imgs[:3]:
        print('  Found:', img)
