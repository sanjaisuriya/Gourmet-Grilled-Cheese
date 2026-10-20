import urllib.request
import urllib.parse
import re

def search_ddg(query):
    url = 'https://html.duckduckgo.com/html/?q=' + urllib.parse.quote(query)
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            matches = re.findall(r'unsplash\.com/photos/([a-zA-Z0-9_\-]+)', html)
            return list(set(matches))
    except Exception as e:
        print('Error:', e)
        return []

print('Gio Bartlett:', search_ddg('site:unsplash.com/photos "gio bartlett" sandwich'))
print('Griddle:', search_ddg('site:unsplash.com/photos "griddle" grilled cheese'))
print('Food truck window:', search_ddg('site:unsplash.com/photos "food truck" customer window'))
print('Beer garden:', search_ddg('site:unsplash.com/photos "beer garden" "lights"'))
