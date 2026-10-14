"""Fill in the site's {{PLACEHOLDERS}} from site-config.json.

Usage:  python configure.py

Edit site-config.json first. This replaces every {{KEY}} in the site's
.html/.xml/.txt files with its value. It's a one-time step: once a
placeholder is replaced, change that value later with find-and-replace.
"""
import json
import pathlib
import re

root = pathlib.Path(__file__).parent
config = json.loads((root / "site-config.json").read_text(encoding="utf-8"))

files = [p for ext in ("*.html", "*.xml", "*.txt") for p in root.glob(ext)]
for path in files:
    text = path.read_text(encoding="utf-8")
    new = text
    for key, value in config.items():
        new = new.replace("{{" + key + "}}", value)
    if new != text:
        path.write_text(new, encoding="utf-8", newline="\n")
        print("updated", path.name)

left = sorted({m for p in files for m in re.findall(r"\{\{[A-Z_]+\}\}", p.read_text(encoding="utf-8"))})
print("Placeholders still unfilled:", ", ".join(left) if left else "none")
