import urllib.request
import urllib.parse
import json

queries = [
    'brisket',
    'reuben sandwich',
    'cheesesteak fries',
    'craft beer food',
    'beer garden patio',
    'brewery food',
    'pulled pork fries',
    'gourmet sandwich fries'
]

for q in queries:
    params = {
        'action': 'query',
        'generator': 'search',
        'gsrsearch': f'file:{q}',
        'gsrnamespace': '6',
        'gsrlimit': '6',
        'prop': 'imageinfo',
        'iiprop': 'url|mime|size',
        'format': 'json'
    }
    url = 'https://commons.wikimedia.org/w/api.php?' + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={'User-Agent': 'GriledSite/1.0 (contact@griled.com)'})
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            pages = data.get('query', {}).get('pages', {})
            print(f'=== {q} ({len(pages)}) ===')
            for pid, p in pages.items():
                title = p.get('title', '')
                ii = p.get('imageinfo', [{}])[0]
                url_img = ii.get('url', '')
                mime = ii.get('mime', '')
                if 'image' in mime and ('jpg' in url_img.lower() or 'jpeg' in url_img.lower()):
                    print(f'{title}: {url_img}')
    except Exception as e:
        print('Error:', e)
