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
| `assets/` | CV PDF, photos, `icons/` (folder pictures), small work files | add files |

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

### 3b-2. Folder ICONS (your own picture)  - ෆෝල්ඩර අයිකන
All folder pictures live in ONE place: `FOLDER_ICONS` in `script.js` (just above `FOLDERS`).
1. Put your picture in `assets/icons/` (square or wide .png, transparent background, under 200 KB).
2. In `FOLDER_ICONS`, write the file name after the folder name:  `"leo": "LEO.png",`
3. Save and refresh. Done.
- **Change a picture later:** put the new file in `assets/icons/` and change the file name, OR replace the old file with a new one of the SAME name.
- **No picture for a folder:** write `""` and its emoji shows (the emoji is the `icon:` of that folder in `FOLDERS`).
- Capital letters must match the real file name (`LEO.png` is not `leo.png`).
- Already set: `leo` = `assets/icons/LEO.png`, `dept` = `assets/icons/DMM.png`. `other` has no picture yet: save one as `assets/icons/Other.png` and write `"other": "Other.png",`.
- `SHOW_WORK_PICTURES` (just under `FOLDER_ICONS`): `false` = folder cards show the icon (now). `true` = cards show your work pictures changing at random, and the icon becomes a small round badge.

### 3c. Add a work  - වැඩක් එකතු කිරීම
Find **PART 2** in `script.js`. One `{ ... },` block = one card. Copy a template from the notes there, change the words and the `file:` link, add `folder:"..."`.
**Delete a work** = delete its whole block. No comma after the last block.

### 3d. EASY GUIDE - images and videos, by UPLOAD or by LINK
Every work is one block in `WORKS` (`script.js`). `folder:"..."` chooses the folder. One folder can hold any number of images and videos.

| I want | Write |
|---|---|
| Upload a small image | put it in `assets/works/`, then `file:"assets/works/photo.jpg"` |
| Upload a small video | put it in `assets/works/`, then `file:"assets/works/video.mp4"` |
| Big video | upload to YouTube (Unlisted), then `file:"https://youtu.be/XXXXXXXXXXX"` |
| Image from Google Drive / Dropbox | `file:"https://drive.google.com/file/d/XXXX/view?usp=sharing"` |
| Many images in ONE card | use `pages:[ "a.jpg", "https://...", "c.jpg" ]` instead of `file` |
| Images + videos in ONE card | in `pages`, add `as:"video"` to the video items: `{file:"https://youtu.be/XXXX", as:"video"}` |

Google Drive needs *Share > Anyone with the link*. Full copy-paste examples are in the **EASY GUIDE** comment just above `const WORKS` in `script.js`.

### 3e. Achievement pictures and folder pictures: upload OR link
- Achievements (CV > Summary): in `ACHIEVEMENTS` (end of `script.js`) write `img:"assets/achievements/award.jpg"` **or** `img:"https://drive.google.com/file/d/XXXX/view?usp=sharing"`.
- Folder icons: in `FOLDER_ICONS` write a file name (`"LEO.png"`) **or** a link (`"https://..."`).
- Empty folders are not kept by GitHub, so `assets/works/` and `assets/achievements/` each contain a small `README.txt`. Upload your files next to it.

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
