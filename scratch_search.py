import urllib.request, urllib.parse, json

queries = ['cheese pull', 'melted cheese sandwich', 'toasted cheese sandwich', 'gourmet grilled cheese', 'sourdough grilled cheese', 'cheese toastie']
for q in queries:
    params = {
        'action': 'query',
        'generator': 'search',
        'gsrsearch': f'file:{q}',
        'gsrnamespace': '6',
        'gsrlimit': '25',
        'prop': 'imageinfo',
        'iiprop': 'url|size',
        'format': 'json'
    }
    url = 'https://commons.wikimedia.org/w/api.php?' + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={'User-Agent': 'GriledBot/1.0 (contact@griled.com)'})
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            pages = data.get('query', {}).get('pages', {})
            print(f'=== {q} ({len(pages)}) ===')
            for pid, p in pages.items():
                t = p.get('title')
                ii = p.get('imageinfo', [{}])[0]
                w = ii.get('width', 0)
                h = ii.get('height', 0)
                u = ii.get('url', '')
                if w >= 1200 and ('jpg' in u.lower() or 'jpeg' in u.lower()):
                    print(f'{t} | {w}x{h} | {u}')
    except Exception as e:
        print('Error:', e)
