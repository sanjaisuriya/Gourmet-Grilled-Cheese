import glob, re

all_imgs = {}
for f in glob.glob('*.html'):
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    for img in re.findall(r'assets/images/([a-zA-Z0-9_\-\.]+)', c):
        all_imgs.setdefault(img, set()).add(f)

for k, v in sorted(all_imgs.items()):
    if len(v) > 1 or 'toit' in k or 'brisket' in k or 'panini' in k or 'melt' in k:
        print(f'{k}: {sorted(list(v))}')

