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

## 3. Folders on the website  - ෆෝල්ඩර
The "My work" part shows 3 main folders: **LEO Club** (`leo`), **Department of Marketing Management** (`dept`), **Other Design** (`other`).
Inside each folder the website makes **Images**, **Videos** and **Websites** by itself (from the `type` of the work).
The filter buttons work on folders: choose **Videos** and only folders that have videos stay.
The folder tree is `FOLDERS` in `script.js` (PART 2). Real folders for your files are in `assets/works/` (same names).

### 3a. MOVE an image or video to a folder  (easiest way)
1. Open `script.js`, find the block of the work in `WORKS`.
2. Write ONE word in it:  `folder:"mpl"`  (copy the name from the list in the QUICK GUIDE just above `WORKS`).
3. Save. Done. Nothing else to change.

| Write this | It goes to |
|---|---|
| `folder:"leo"` | LEO Club |
| `folder:"clean-water"` / `"clean-water-2"` / `"religion-culture"` / `"wildlife"` | LEO Club > that avenue |
| `folder:"dept"` | Department |
| `folder:"assignment"` / `"talent-show"` / `"mpl"` / `"stylish-marketer"` / `"other-design"` | Department > that folder |
| `folder:"other"` (or no folder) | Other Design |

Example: `{type:"video", title:"MPL Promo", note:"Cricket promo", folder:"mpl", file:"https://youtu.be/XXXXXXXXXXX", icon:"🏏", c:["#1b5e20","#9ccc65"]},`
Wrong folder name? The work goes to Other Design and the browser console (F12) lists every name you can use.

### 3b. Make a NEW folder or a folder INSIDE a folder
Open `FOLDERS` in `script.js`. Copy one block and give it a NEW `id` (small letters, no spaces, use `-`).
For a folder inside another folder, put `sub:[ ... ]` inside the parent block (see `clean-water` > `clean-water-2`).
If the page goes blank: check the commas, the brackets `[ ]` `{ }`, and that the id has no spaces. Delete a folder = delete its block.

### 3c. Add a work  - වැඩක් එකතු කිරීම
Find **PART 2** in `script.js`. One `{ ... },` block = one card. Copy a template from the notes there, change the words and the `file:` link, add `folder:"..."`.
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
- **Achievements / goals (CV > Summary tab):** one card shows at a time. Text is on the LEFT and types itself; the picture is on the RIGHT and comes, moves and goes with random animations. Edit `ACHIEVEMENTS`, `GOALS` and the speed numbers (`SECONDS`, `TITLE_TYPE`, `TEXT_TYPE`) at the END of `script.js`. Put certificate pictures in `assets/achievements/` (small .jpg, under 500 KB) and write the path in `img:`.
- **Footer:** the words are in `index.html` (search `FOOTER`). Add a link by copying one `<li>` line. The year and WhatsApp link update by themselves.
