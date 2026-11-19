"""
SHRINK-IMAGES.PY  -  makes big flyers small (under 1 MB) so GitHub accepts them and your site loads FAST.

HOW TO USE
  1) Install once:   pip install pillow
  2) Make a folder named  big-flyers  next to this file and copy your big flyers into it.
  3) Run:            python shrink-images.py
  4) Small .jpg files appear in  assets/works/   -> upload that folder to GitHub.
Videos cannot be made small by this file. Put videos on YouTube (Unlisted) and paste the link.
"""
import os
from PIL import Image

SOURCE = "big-flyers"                 # folder with your big images
DEST   = os.path.join("assets", "works")
MAX_SIDE_W, MAX_SIDE_H = 1600, 2400   # biggest size (enough for phones and big screens)
TARGET_KB = 900                       # goal: every file under this size

os.makedirs(DEST, exist_ok=True)
for name in sorted(os.listdir(SOURCE)):
    base, ext = os.path.splitext(name)
    if ext.lower() not in (".png", ".jpg", ".jpeg", ".webp"):
        continue
    im = Image.open(os.path.join(SOURCE, name))
    if im.mode in ("RGBA", "LA", "P"):                      # PNG with see-through parts -> white background
        im = im.convert("RGBA")
        bg = Image.new("RGB", im.size, "white")
        bg.paste(im, mask=im.split()[3])
        im = bg
    else:
        im = im.convert("RGB")
    im.thumbnail((MAX_SIDE_W, MAX_SIDE_H))
    out = os.path.join(DEST, base + ".jpg")
    for quality in (88, 82, 76, 70, 62):                    # try better quality first, go lower if still too big
        im.save(out, "JPEG", quality=quality, optimize=True, progressive=True)
        if os.path.getsize(out) <= TARGET_KB * 1024:
            break
    print(f"{name}  ->  {base}.jpg   {os.path.getsize(out)//1024} KB")
print("Done. Use these file names in WORKS, for example:  file:\"assets/works/" + "NAME.jpg\"")
