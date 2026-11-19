# Ruviru Sandaruwan - Portfolio  (GitHub Pages ready)

## 1. Put it online (free)  - ඔන්ලයින් දැමීම
1. Make a GitHub account, then a new **Public** repository named `yourusername.github.io`.
2. Upload ALL files from this folder (keep the same folders). `.nojekyll` must go too.
3. Repository > **Settings > Pages** > Source: *Deploy from a branch* > `main` > `/ (root)` > Save.
4. Wait 1-2 minutes, then open `https://yourusername.github.io`.
Do NOT test by double-clicking index.html (YouTube / Google refuse on a local file). Test on GitHub, or run `python -m http.server` and open http://localhost:8000

## 2. What is each file?
| File | What it does | Do you edit it? |
|---|---|---|
| `index.html` | page text (about, CV summary, contact) | sometimes |
| `script.js`  | PART 1 settings, PART 2 your works, PART 3 code | PART 1 and 2 only |
| `style.css`  | colours and looks (change colours at the top) | rarely |
| `thank-you.html` | spare thank-you page | no |
| `shrink-images.py` | makes big flyers small | run it |
| `assets/` | CV PDF, photos, small work files | add files |

## 3. Add a work  - වැඩක් එකතු කිරීම
Open `script.js`, find **PART 2**. One `{ ... },` block = one card. Copy a template from the notes there, change the words and the `file:` link.
**Delete a work** = delete its whole block. No comma after the last block.

## 4. Big files (GitHub does not accept files over ~25 MB)
- **Video** -> upload to **YouTube**, Visibility = *Unlisted*, paste the link in `file:`. (fast, free, any size)
- **Flyer** -> put it in `big-flyers/`, run `python shrink-images.py` (needs `pip install pillow`). Small .jpg files appear in `assets/works/`.
- **TikTok / Instagram / Facebook** -> post must be Public. Use the LONG link (TikTok: has `/video/123...`).
- **Google Drive** -> Share > "Anyone with the link". If it does not show, use YouTube (videos) or the small .jpg (flyers).
- Every preview has an **Open original** button that always works.

## 5. Other updates
- **CV:** replace `assets/Ruviru_Sandaruwan_CV.pdf` (same name), then in `script.js` change `CV_VERSION` 1 -> 2.
- **Home photos:** put pictures in `assets/img/`, add them to `PHOTOS` in `script.js`.
- **WhatsApp number:** `WHATSAPP_NUMBER` in `script.js`.
- **Typing words / skills:** `ROLES` and `SKILLS` in `script.js`.
- **Colours:** top of `style.css`.
