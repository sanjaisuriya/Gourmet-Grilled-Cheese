import urllib.request, urllib.parse, re

def search_ddg(query):
    url = 'https://html.duckduckgo.com/html/?q=' + urllib.parse.quote(query)
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            matches = re.findall(r'unsplash\.com/photos/([a-zA-Z0-9_\-]+)', html)
            return list(dict.fromkeys(matches))
    except Exception as e:
        print('Error:', e)
        return []

print('Patrycja:', search_ddg('site:unsplash.com/photos patrycja jadach grilled cheese'))
print('Pull:', search_ddg('site:unsplash.com/photos grilled cheese melted cheese pull'))
print('Sourdough:', search_ddg('site:unsplash.com/photos gourmet sourdough grilled cheese'))
