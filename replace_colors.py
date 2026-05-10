import re

with open('src/styles.css', 'r') as f:
    css = f.read()

# Replace variables
css = re.sub(r'--gold: #[a-zA-Z0-9]+;', '--gold: #d4af37;', css)
css = re.sub(r'--gold-light: #[a-zA-Z0-9]+;', '--gold-light: #f3e5ab;', css)
css = re.sub(r'--gold-pale: rgba\([^)]+\);', '--gold-pale: rgba(212, 175, 55, 0.12);', css)
css = re.sub(r'--gold-border: rgba\([^)]+\);', '--gold-border: rgba(212, 175, 55, 0.3);', css)

css = re.sub(r'--black: #[a-zA-Z0-9]+;', '--black: #0a0a0a;', css)
css = re.sub(r'--black2: #[a-zA-Z0-9]+;', '--black2: #141414;', css)
css = re.sub(r'--black3: #[a-zA-Z0-9]+;', '--black3: #1f1f1f;', css)

css = re.sub(r'--white: #[a-zA-Z0-9]+;', '--white: #E8E3D9;', css)
css = re.sub(r'--white-dim: rgba\([^)]+\);', '--white-dim: rgba(232, 227, 217, 0.6);', css)
css = re.sub(r'--white-faint: rgba\([^)]+\);', '--white-faint: rgba(232, 227, 217, 0.12);', css)

# Replace RGB values
css = css.replace('250,248,245', '10,10,10')
css = css.replace('243,239,233', '20,20,20')
css = css.replace('236,231,223', '31,31,31')
css = css.replace('44,36,24', '232,227,217')
css = css.replace('212,168,50', '212,175,55')

with open('src/styles.css', 'w') as f:
    f.write(css)
