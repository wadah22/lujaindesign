import re

with open('src/styles.css', 'r') as f:
    css = f.read()

# Fix modal-bg which was light but should be dark overlay
css = re.sub(r'\.modal-bg \{ position: fixed; inset: 0; z-index: 800; background: rgba\(232,227,217,\.6\);',
             '.modal-bg { position: fixed; inset: 0; z-index: 800; background: rgba(0,0,0,.8);', css)

# Fix modal-zoom-hint which was light but should be dark
css = re.sub(r'\.modal-zoom-hint \{([^}]*)background: rgba\(232,227,217,\.7\);([^}]*)\}',
             r'.modal-zoom-hint {\1background: rgba(0,0,0,.8);\2}', css)

with open('src/styles.css', 'w') as f:
    f.write(css)
