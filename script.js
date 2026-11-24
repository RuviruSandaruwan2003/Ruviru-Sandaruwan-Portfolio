/* =====================================================================
   SCRIPT.JS   (Ruviru Sandaruwan - Portfolio)

   THIS FILE HAS 3 PARTS:
     PART 1  -  YOUR SETTINGS   (WhatsApp, CV, Photos, Roles, Skills)
     PART 2  -  YOUR WORKS      (all designs, videos, websites)  <-- you edit this most
     PART 3  -  THE CODE        (do not change anything here)
   ===================================================================== */


/* =====================================================================
   PART 1 - YOUR SETTINGS
   ===================================================================== */

/* WhatsApp number for the contact form.
   Country code + number, no "+" and no spaces.  (077 427 8450  ->  94774278450) */
const WHATSAPP_NUMBER = "94774278450";

/* CV file. Replace the PDF in assets/ (same name) or change the path.
   Change CV_VERSION (1, 2, 3 ...) so browsers load the new file. */
const CV_FILE = "assets/Ruviru_Sandaruwan_CV.pdf";
const CV_VERSION = 1;

/* Photos on the home page (they change every few seconds). */
const PHOTOS = ["assets/img/1.png", "assets/img/2.png", "assets/img/3.png", "assets/img/4.png", "assets/img/5.png", "assets/img/6.png"];
const PHOTO_SECONDS = 4;

/* Words that type on the home page. */
const ROLES = ["Digital Marketing Undergraduate", "Graphic Designer", "Video Editor", "PR & Marketing Coordinator"];

/* Skills: [name, percent] */
const SKILLS = [["Graphic Design",90],["Video Editing",88],["Adobe Photoshop",90],["WordPress & HTML",75],["MS Office",95],["Leadership & Communication",92]];


/* =====================================================================
   PART 2 - YOUR WORKS
   ONE BLOCK = ONE WORK.   Nothing was removed: every old work is still here.

   ---------- THE FIELDS ----------
   type   "post"  = image or PDF design
          "video" = video
          "web"   = website link (opens in a new tab)
   title  name shown on the card
   note   small text under the title
   file   ONE file or ONE link (see "WHICH LINKS WORK" below)
   pages  MANY files / links that open one after another, top to bottom (use instead of "file").
          Example:  pages:[ "assets/works/a.png", {file:"assets/works/b.png", label:"Back Page"} ]
   icon   emoji on the card
   c      two card colours (the preview background also uses them)
   thumb  (optional) small picture for the card
   as     (optional) "video" or "post" - only if the code guessed wrong for a link

   folder  (optional) which folder it lives in, e.g. folder:"leo/clean-water"  (see FOLDERS above).
           No folder = it goes to "Other Design".

   ---------- BIG FILES (GitHub does not accept files over about 25 MB) ----------
   VIDEO   -> upload to YouTube, choose "Unlisted", paste the link in "file".  (best: fast, free, any size)
   FLYER   -> run shrink-images.py (makes it under 1 MB), or paste a Google Drive link.
   TikTok / Instagram / Facebook -> the post must be Public. Paste the LONG link.

   ---------- WHICH LINKS WORK (paste the normal share link in "file") ----------
   Your own files      "assets/works/photo.jpg", "assets/works/video.mp4"
   YouTube             watch link, youtu.be link, Shorts link, playlist link
   Vimeo               normal link
   Google Drive        share link (Drive > Share > "Anyone with the link")
   OneDrive/SharePoint the link, or better the "Embed" code:  file:'<iframe src="..."></iframe>'
   Facebook            public video / reel / post link
   Instagram           public post / reel link
   TikTok              full link that has /video/numbers  (short vm.tiktok.com links cannot be shown)
   Dropbox             share link
   Any photo/video     direct link ending .jpg .png .mp4 ...
   Any other website   the code tries; if the website refuses, the "Open original" button always works

   IMPORTANT: a website decides itself who may show its video. Private videos, and sites
   that forbid showing them inside another page, can NOT be forced open by any code.
   Public / Unlisted links work. If a box stays empty, press "Open original".

   ---------- OPTIONAL: SIZE (ratio) ----------
   If you do not write ratio, the design shows in its ORIGINAL size.
   ratio:"a4p"   A4 Portrait          ratio:"a4l"   A4 Landscape
   ratio:"a3p"   A3 Portrait          ratio:"a3l"   A3 Landscape
   ratio:"f1350" Flyer 1080 x 1350    ratio:"f1080" Flyer 1080 x 1080
   ratio:"v169"  Video 16:9           ratio:"v916"  Video 9:16

   ---------- OPTIONAL: BORDER ----------
   border:"none"            no border, only your design (shows with a soft shadow)
   border:"soft-shadow"     rounded corners + shadow  (default for designs)
   border:"film-strip"      cinema edge               (default for videos)
   border:"phone-frame"     phone screen              (default for 9:16 videos)
   border:"gold-luxury"     shiny gold frame + cream mat + gold studs
   border:"gold-corners"    dark luxury + gold corner brackets
   border:"classic-gold"    thick gold frame
   border:"royal-double"    cream + double gold line
   border:"wedding-ornate"  cream + gold line + flower marks
   border:"clean-white"     white gallery mat
   border:"polaroid"        photo print
   border:"minimal-line"    thin line
   border:"gradient-edge"   colourful edge
   border:"neon-glow"       glowing line
   border:"dashed-ticket"   dashed line
   border:"blueprint"       blue grid paper
   accent:"#c9a227"         (optional) colour for some borders

   ---------- COPY-PASTE TEMPLATES ----------
   A) One design, original look, no border:
      {type:"post", title:"My Flyer", note:"Event flyer", file:"assets/works/flyer.jpg", border:"none", icon:"🎨", c:["#ff3d6e","#6a1b9a"]},

   B) A design with many pages (opens one by one, top to bottom):
      {type:"post", title:"My Card", note:"3 pages", border:"none",
       pages:["assets/works/card-1.png", "assets/works/card-2.png", "assets/works/card-3.png"],
       icon:"💌", c:["#283593","#ad1457"]},

   C) A video from your folder:
      {type:"video", title:"My Video", note:"Promo", file:"assets/works/my-video.mp4", icon:"🎬", c:["#6a1b9a","#ff3d6e"]},

   D) A video from YouTube / Drive / Facebook / TikTok / OneDrive (just paste the link):
      {type:"video", title:"My Video", note:"Promo", file:"https://www.youtube.com/watch?v=XXXXXXXXXXX", icon:"🎬", c:["#6a1b9a","#ff3d6e"]},

   E) A photo from a link (Drive, Dropbox, any direct link):
      {type:"post", title:"My Photo", note:"Photo", file:"https://drive.google.com/file/d/XXXXXXXX/view?usp=sharing", border:"none", icon:"📷", c:["#0288d1","#00695c"]},

   F) A work inside a folder (any type: post, video or web):
      {type:"video", title:"Opening Day", note:"Leo Club", folder:"leo/wildlife", file:"https://youtu.be/XXXXXXXXXXX", icon:"🎬", c:["#6a1b9a","#ff3d6e"]},

   RULES:  keep every path / link inside quotes " "  -  put a comma after each block (not after the last one).
   ===================================================================== */
/* =====================================================================
   FOLDER ICONS  -  CHANGE THE PICTURE OF ANY FOLDER HERE   (the easiest place)
   ---------------------------------------------------------------------
   STEP 1  Put your picture in the folder   assets/icons/
           (a .png with a transparent background is best. Keep it under 200 KB.)
   STEP 2  Write its file name after the folder name below, inside quotes.
   STEP 3  Save and refresh the website.  That is all.

   To change a picture later: put the NEW file in assets/icons/ and change the file name here.
   Or keep the same file name and just replace the old file (then nothing here changes).
   Write ""  (two quotes, nothing inside) = no picture, the little emoji of the folder shows.
   Capital and small letters must match the real file name:  "LEO.png"  is not  "leo.png".
   Keep a comma after every line except the last one.
   ===================================================================== */
const FOLDER_ICONS = {
  /* ---- the 3 main folders ---- */
  "leo":              "LEO.png",     // LEO Club
  "dept":             "DMM.png",     // Department of Marketing Management
  "other":            "Other.png",            // Other Design        (put a file name here, e.g. "Other.png")

  /* ---- folders inside LEO Club ---- */
  "clean-water":      "CW.png",            // Clean Water & Energy Conservation Avenue
  "religion-culture": "R&C.png",            // Religion & Culture Avenue
  "wildlife":         "WL.png",            // Wildlife & Animal Conservation Avenue

  /* ---- folders inside Department ---- */
  "assignment":       "ASG.png",            // Assignment
  "talent-show":      "TS2.png",            // Inbetween - Talent Show
  "mpl":              "MPL2.png",            // MPL Cricket Tournament
  "stylish-marketer": "SM2.png",            // Stylish Marketer - Fashion Show
  "other-design":     "DOD.png"             // Other Design (inside Department)
};

/* Folder cards: what do they show?
     false  =  the ICON picture from above (clean and always the same)      <-- now
     true   =  pictures of your works inside the folder, changing at random (the icon becomes a small round badge) */
const SHOW_WORK_PICTURES = false;

/* =====================================================================
   FOLDERS  -  the folder tree on the "My work" part of the website
   ONE BLOCK = ONE FOLDER.     "sub" = the folders inside it.
     id      short name, small letters, NO SPACES (use - instead).  Example: "clean-water-2"
     name    name shown on the folder card          note  small text under the name
     icon    the small EMOJI shown when no picture is found (🦁).  The real PICTURES are set in FOLDER_ICONS just above.
             (Advanced: icon:"LEO.png" here also works. Never write <img ...> here.)      c  two colours
     covers  (optional) your own pictures for the folder card, e.g. covers:["assets/img/leo1.jpg"]
             If you do not write covers, the website takes pictures from the works inside the folder
             and changes them at random.

   THE 3 MAIN FOLDERS:   leo  =  LEO Club      dept  =  Department      other  =  Other Design
   Inside every folder the website makes the folders "Images" (type "post"), "Videos" (type "video")
   and "Websites" (type "web") BY ITSELF.

   ---------- HOW TO ADD A NEW FOLDER ----------
   A) A folder next to the others:   copy one block, give it a NEW id, change name / note / icon.
   B) A folder INSIDE another folder (sub-folder): inside that folder's block, write  sub:[ ... ]
      after c:[...]  - like "clean-water" below, which has "clean-water-2" inside it.
      You can go as deep as you want.

        {id:"clean-water", name:"...", note:"...", icon:"💧", c:["#0288d1","#00695c"], sub:[
          {id:"clean-water-2", name:"...", note:"...", icon:"💧", c:["#0288d1","#00695c"]}
        ]},

   THE 4 THINGS THAT GO WRONG (check these if the page goes blank):
     1. a comma "," after every block except the LAST one in a list
     2. every  [  has a  ]   and every  {  has a  }   (count them)
     3. the id has no spaces
     4. every text is inside quotes " "
   To DELETE a folder: delete its whole block (works inside it move to "other").
   Do NOT delete the folder with id "other".
   ===================================================================== */
const FOLDERS = [
  {id:"leo", name:"LEO Club", note:"Leo Club of University of Kelaniya", icon:"🦁", c:["#ffc857","#b71c1c"], sub:[
    {id:"clean-water",      name:"Clean Water & Energy Conservation Avenue", note:"Projects and campaigns", icon:"💧", c:["#0288d1","#00695c"]},
    {id:"religion-culture", name:"Religion & Culture Avenue",                note:"Dirgayu, Ekaloka and more", icon:"🪷", c:["#ad1457","#ffc857"]},
    {id:"wildlife",         name:"Wildlife & Animal Conservation Avenue",    note:"Prayama 2.0 and more", icon:"🐘", c:["#2e7d32","#ffd54f"]}
  ]},
  {id:"dept", name:"Department of Marketing Management", note:"University of Kelaniya", icon:"🎓", c:["#283593","#ad1457"], sub:[
    {id:"assignment",       name:"Assignment",                                   note:"Class assignments", icon:"📝", c:["#00838f","#283593"]},
    {id:"talent-show",      name:"Inbetween - Talent Show",                      note:"Talent show designs and videos", icon:"🎤", c:["#6a1b9a","#ff3d6e"]},
    {id:"mpl",              name:"MPL - Marketing Premier League Cricket Tournament", note:"Cricket tournament", icon:"🏏", c:["#1b5e20","#9ccc65"]},
    {id:"stylish-marketer", name:"Stylish Marketer - Fashion Show",              note:"Fashion show", icon:"👗", c:["#4a148c","#ffc857"]},
    {id:"other-design",     name:"Other Design",                                 note:"More department work", icon:"🎨", c:["#37474f","#ff3d6e"]}
  ]},
  {id:"other", name:"Other Design", note:"Cards, labels, mockups and videos", icon:"🎨", c:["#ff3d6e","#6a1b9a"]}
];


/* =====================================================================
   QUICK GUIDE  -  MOVE ANY IMAGE OR VIDEO TO A FOLDER   (the easy way)
   In the block of the work, write ONE word:   folder:"..."
   Copy a line from this list (the short name on the left is enough):

     folder:"leo"                     ->  LEO Club (main folder)
     folder:"clean-water"             ->  LEO Club > Clean Water & Energy Conservation Avenue
     folder:"clean-water-2"           ->  LEO Club > Clean Water ... > Clean Water ... 2
     folder:"religion-culture"        ->  LEO Club > Religion & Culture Avenue
     folder:"wildlife"                ->  LEO Club > Wildlife & Animal Conservation Avenue

     folder:"dept"                    ->  Department (main folder)
     folder:"assignment"              ->  Department > Assignment
     folder:"talent-show"             ->  Department > Inbetween - Talent Show
     folder:"mpl"                     ->  Department > MPL Cricket Tournament
     folder:"stylish-marketer"        ->  Department > Stylish Marketer - Fashion Show
     folder:"other-design"            ->  Department > Other Design

     folder:"other"   (or no folder)  ->  Other Design (main folder)

   The long way also works:  folder:"leo/wildlife".   A new folder you make in FOLDERS works the same way.
   You do NOT choose Images or Videos: the website puts a work in "Images" when type is "post",
   and in "Videos" when type is "video". Only change  type  and  folder.

   EXAMPLE - move a video to the Department > MPL folder:
     {type:"video", title:"MPL Promo", note:"Cricket promo", folder:"mpl", file:"https://youtu.be/XXXXXXXXXXX", icon:"🏏", c:["#1b5e20","#9ccc65"]},

   If you write a folder name that does not exist, the work goes to "Other Design" and the browser
   console (press F12) shows a message with every name you can use.
   ===================================================================== */


/* =====================================================================
   EASY GUIDE  -  ADD IMAGES AND VIDEOS  (two ways: UPLOAD or LINK)   <-- read this first
   ---------------------------------------------------------------------
   Every work = ONE block in WORKS below. Write  folder:"..."  to choose where it lives.
   A folder can hold as many works as you like (images AND videos together).

   WAY 1 - UPLOAD (small files only, GitHub limit ~25 MB)
     Put the file in  assets/works/  (images: .jpg .png .webp   videos: .mp4 .webm)
     then write its path:   file:"assets/works/my-photo.jpg"

   WAY 2 - LINK (big files, GitHub cannot take them)
     Video  -> YouTube (Unlisted) / Google Drive / Vimeo / Facebook / Instagram / TikTok link
     Image  -> Google Drive / Dropbox / any direct image link
     Just paste the normal share link:   file:"https://..."
     Google Drive: Share > General access > "Anyone with the link".

   ONE IMAGE or ONE VIDEO in a folder:
     {type:"post",  title:"Poster",  note:"Leo Club", folder:"leo", file:"assets/works/poster.jpg", icon:"🎨", c:["#ff3d6e","#6a1b9a"]},
     {type:"video", title:"Promo",   note:"Leo Club", folder:"leo", file:"https://youtu.be/XXXXXXXXXXX", icon:"🎬", c:["#6a1b9a","#ff3d6e"]},

   MANY IMAGES (or many videos) inside ONE card - they open one after another, top to bottom.
   Mix upload + link in the same list if you want:
     {type:"post", title:"Event Photos", note:"5 photos", folder:"mpl", border:"none",
      pages:[
        "assets/works/photo-1.jpg",
        "https://drive.google.com/file/d/XXXXXXXX/view?usp=sharing",
        {file:"https://www.dropbox.com/s/xxxx/photo-3.jpg?dl=0", label:"Photo 3"}
      ],
      icon:"📷", c:["#1b5e20","#9ccc65"]},

   IMAGES + VIDEOS TOGETHER in ONE card (add  as:"video"  to the video pages):
     {type:"post", title:"Full Event", note:"Photos and videos", folder:"wildlife",
      pages:[
        "assets/works/day-1.jpg",
        {file:"https://youtu.be/XXXXXXXXXXX", as:"video", label:"Opening video"},
        {file:"assets/works/recap.mp4", as:"video", label:"Recap"}
      ],
      icon:"🐘", c:["#2e7d32","#ffd54f"]},

   A Google Drive link is a VIDEO but the card says "post"?  Add  as:"video"  to that page (or make the card type:"video").
   Photo not showing from a link?  Check the sharing is "Anyone with the link", or upload a small .jpg instead.

   ACHIEVEMENT PICTURES (CV > Summary tab) - at the END of this file, in ACHIEVEMENTS:
     img:"assets/achievements/award.jpg"                      (upload)
     img:"https://drive.google.com/file/d/XXXX/view?usp=sharing"   (link)

   FOLDER PICTURES: in FOLDER_ICONS you can write a file name ("LEO.png") OR a link ("https://...").
   ===================================================================== */

const WORKS = [

  /* ----- DESIGNS ----- */
  {type:"post", title:"Meetup Flyer", note:"Event flyer", file:"assets/works/2.png", icon:"🎨", c:["#ff3d6e","#6a1b9a"]},
  {type:"post", title:"Clean Water & Energy Avenue", note:"Leo Club campaign post", folder:"leo/clean-water", file:"assets/works/Clean Water and Energy Conservation avenue.png", icon:"💧", c:["#0288d1","#00695c"]},
  {type:"post", title:"Leadership Body Announcement", note:"Countdown series (Open Soon / Open Now / Closed)", file:"assets/works/2.png", icon:"📣", c:["#ffc857","#b71c1c"]},

  /* INVITATION: 3 pages, opens one by one from top to bottom, NO border, original design only.
     Save your 3 images in assets/works/ with these names (or change the names / paste links here).
     Only 1 image?  Delete the other two "{file:...}" lines. */
  {type:"post", title:"Invitation", note:"Formal invitation design", border:"none",
   pages:[
     {file:"assets/works/invitation-1.png", label:"Front Page"},
     {file:"assets/works/invitation-2.png", label:"Details Page"},
     {file:"assets/works/invitation-3.png", label:"Back Page"}
   ],
   icon:"💌", c:["#283593","#ad1457"]},

  /* WEDDING CARD: NO border, original design only.
     More pages?  Use:  pages:["assets/works/weding Card Sinhala Final.jpg", "assets/works/wedding-2.jpg"]  instead of file */
  {type:"post", title:"Wedding Card (Sinhala)", note:"Print-ready card", border:"none",
    pages:[
      {file:"https://drive.google.com/file/d/1wDc0LqTofy-5YMdysrVaVt9E8BOwzJP3/view?usp=sharing", label:"Front Page"},
     {file:"https://drive.google.com/file/d/1wDc0LqTofy-5YMdysrVaVt9E8BOwzJP3/view?usp=sharing", label:"Details Page"},
     {file:"https://drive.google.com/file/d/1wDc0LqTofy-5YMdysrVaVt9E8BOwzJP3/view?usp=sharing", label:"Back Page"}
   ],
   icon:"💍", c:["#8d6e63","#ffb74d"]},

  {type:"post", title:"Nutrition Program Flyer", note:"Today / Tomorrow / Happening series", file:"assets/works/Final Today.jpg", icon:"🥗", c:["#2e7d32","#ffd54f"]},
  {type:"post", title:"Midori Jelly Label", note:"Product label and packaging design", file:"assets/works/Final NDP Under Lable.jpg", icon:"🍃", c:["#1b5e20","#9ccc65"]},
  {type:"post", title:"Polo T-shirt Mockup", note:"Free Polo Strip Collar mockup", file:"assets/works/Free Polo Strip Collar Mockup Template.jpg", icon:"👕", c:["#1a237e","#e53935"]},

  /* ----- VIDEOS (16:9 + film-strip edge by default) ----- */
  /* This one is a Google Drive link. Drive > Share > "Anyone with the link" is required.
     If Drive keeps showing an error, upload the video to YouTube as "Unlisted" and paste that link instead. */
  {type:"video", title:"Ruviru BBV", note:"Brand video", file:"https://drive.google.com/file/d/17rGwr9Bf0vkJu0CUc5vTupWykUskaZ7f/view?usp=sharing", icon:"🎬", c:["#6a1b9a","#ff3d6e"]},
  {type:"video", title:"Entrepreneurship & Innovation", note:"Promo video",folder:"dept/assignment", file:"https://drive.google.com/file/d/1BHVgqdrcvWowr6rKAQal5D-9wmqj39z5/view?usp=sharing", icon:"💡", c:["#00838f","#283593"]},
  {type:"video", title:"Coming Soon Teaser", note:"Event teaser video", file:"assets/works/Final Coming Soon Video.mp4", icon:"⏳", c:["#212121","#ff3d6e"]},
  {type:"video", title:"Stylish Maketer First Recap", note:"Event recap video", file:"assets/works/Stylish Maketer First Recap Video.mp4", icon:"🎞️", c:["#4a148c","#ffc857"]},

  /* ----- WEBSITES (open in a new tab) ----- */
  {type:"web", title:"Website Project 1", note:"Replace with your website link", file:"https://example.com", icon:"🌐", c:["#0d47a1","#00bcd4"]},
  {type:"web", title:"Website Project 2", note:"Replace with your website link", file:"https://example.com", icon:"💻", c:["#37474f","#ff3d6e"]}

  /* ADD A NEW WORK HERE: put a comma after the block above, then paste a template. */
];


/* =====================================================================
   PART 3 - THE CODE   (you do not need to change anything below)
   ===================================================================== */


/* ---------- 3.1  Small helper tools ---------- */

// Short name for document.getElementById
const $ = id => document.getElementById(id);

// Makes text safe to put inside HTML
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

// Makes a file path safe for the browser (spaces become %20). Safe to use twice.
const enc = f => { try { return encodeURI(decodeURI(f)); } catch (e) { return encodeURI(f); } };

// Turns ANY picture link (Google Drive, Dropbox, direct link) or own file path into an address a <img> can show.
// Your own file paths are returned unchanged. Used by achievements, folder icons and folder covers.
function imgUrl(u){
  u = String(u || '').trim();
  if (!/^https?:\/\//i.test(u)) return u;
  const r = resolveLink(u, 'post');
  return (r.kind === 'image' && r.src) ? r.src : u;
}

// Random helpers (used by the animated background)
const rnd  = (a, b) => a + Math.random() * (b - a);
const pick = arr => arr[Math.floor(Math.random() * arr.length)];

// A work can have one "file" or many "pages". This always returns a list of pages.
const pagesOf = w => ((w.pages && w.pages.length) ? w.pages : [w.file]).map(p => typeof p === 'string' ? {file: p} : p);

// Box sizes:  r = shape,  w = maximum width in pixels,  l = name shown in the caption
const RATIOS = {
  auto:  {l:"Original size",   r:null,        w:720},
  a4p:   {l:"A4 Portrait",     r:"210/297",   w:560},
  a4l:   {l:"A4 Landscape",    r:"297/210",   w:900},
  a3p:   {l:"A3 Portrait",     r:"297/420",   w:600},
  a3l:   {l:"A3 Landscape",    r:"420/297",   w:960},
  f1350: {l:"Flyer 1080×1350", r:"1080/1350", w:540},
  f1080: {l:"Flyer 1080×1080", r:"1/1",       w:620},
  v169:  {l:"Video 16:9",      r:"16/9",      w:960},
  v916:  {l:"Video 9:16",      r:"9/16",      w:380}
};

// Border names shown in the caption
const BORDER_NAMES = {
  "none":"No border", "soft-shadow":"Soft Shadow", "film-strip":"Film Strip",
  "gold-luxury":"Gold Luxury", "gold-corners":"Gold Corners", "classic-gold":"Classic Gold",
  "royal-double":"Royal Double", "wedding-ornate":"Wedding Ornate", "clean-white":"Clean White",
  "polaroid":"Polaroid", "minimal-line":"Minimal Line", "gradient-edge":"Gradient Edge",
  "neon-glow":"Neon Glow", "dashed-ticket":"Dashed Ticket", "blueprint":"Blueprint", "phone-frame":"Phone Frame"
};

// Helpful messages shown under linked videos / photos
const TIPS = {
  drive:    'Not playing? In Google Drive press Share → set “Anyone with the link”. Long videos need time to process. If you use several Google accounts, press “Open original”.',
  onedrive: 'OneDrive / SharePoint: Share → Embed → paste the &lt;iframe …&gt; code as the file. School accounts often block outside viewing - then press “Open original”.',
  social:   'The post / video must be Public. If the box is empty, press “Open original”.',
  youtube:  'The video must be Public or Unlisted. If you open this page as a file on your computer, YouTube may refuse - it works on your real website.',
  other:    'Some websites do not allow outside viewing. If the box is empty, press “Open original”.'
};


/* ---------- 3.2  SECURITY: only safe links are used ---------- */

/* Allows only normal web links (http / https) or files in your own folder.
   Anything dangerous (javascript:, data:, file: ...) is refused and returns "". */
function safeUrl(u){
  u = String(u || '').trim();
  if (!u || u.startsWith('//')) return '';
  if (/^[a-z][a-z0-9+.-]*:/i.test(u) && !/^https?:\/\//i.test(u)) return '';
  return u;
}

// What kind of file is it (by its ending)?  strict = true returns "" when the ending is unknown.
function fileKind(f, type, strict){
  const ext = ((String(f).split(/[?#]/)[0].match(/\.([a-z0-9]+)$/i) || [])[1] || '').toLowerCase();
  if (/^(mp4|webm|mov|m4v|ogv)$/.test(ext)) return 'video';
  if (ext === 'pdf') return 'pdf';
  if (/^(jpe?g|png|gif|webp|svg|avif|bmp)$/.test(ext)) return 'image';
  return strict ? '' : (type === 'video' ? 'video' : 'image');
}


/* ---------- 3.3  SMART LINKS: turns ANY link into something that can be shown ----------
   resolveLink() returns an object:
     kind   "image" | "video" | "pdf" | "embed" (a player inside a safe frame) | "link" | "bad"
     src    what is shown          open   the original link      dl   download link
     video  true if it is a video  ratio  best box shape         tip  which help message to show
     fallback  a second way to show it if the first one fails                          */
function resolveLink(input, type){
  let raw = String(input || '').trim();

  // Pasted embed code like  <iframe src="https://..."></iframe>  -> use its src
  const code = raw.match(/<iframe[^>]*\ssrc\s*=\s*["']([^"']+)["']/i);
  if (code) raw = code[1].replace(/&amp;/g, '&');

  raw = safeUrl(raw);
  if (!raw) return {kind: 'bad'};

  // 1) A file in your own folder
  if (!/^https?:\/\//i.test(raw)){
    const kind = fileKind(raw, type);
    return {kind, src: enc(raw), open: enc(raw), dl: enc(raw), video: kind === 'video'};
  }

  // 2) A web link
  let u;
  try { u = new URL(raw); } catch (e) { return {kind: 'bad'}; }
  const host  = u.hostname.toLowerCase().replace(/^(www|m|mobile|web)\./, '');
  const parts = u.pathname.split('/').filter(Boolean);
  const done  = o => Object.assign({open: raw}, o);

  // --- YouTube ---
  if (host === 'youtu.be' || host.endsWith('youtube.com') || host.endsWith('youtube-nocookie.com')){
    const id   = host === 'youtu.be' ? parts[0]
               : (u.searchParams.get('v') || (['shorts','live','embed','v'].includes(parts[0]) ? parts[1] : ''));
    const list = u.searchParams.get('list');
    const base = 'https://www.youtube-nocookie.com/embed/';
    if (/^[\w-]{6,15}$/.test(id || ''))
      return done({kind:'embed', video:true, yt:id, tip:'youtube', ratio: parts[0] === 'shorts' ? 'v916' : 'v169',
                   src: base + id + '?rel=0&modestbranding=1&playsinline=1'});
    if (list && /^[\w-]+$/.test(list))
      return done({kind:'embed', video:true, tip:'youtube', ratio:'v169', src: base + 'videoseries?list=' + list});
  }

  // --- Vimeo ---
  if (host === 'vimeo.com' || host === 'player.vimeo.com'){
    const id = parts.find(p => /^\d+$/.test(p));
    if (id){
      const h = u.searchParams.get('h');
      return done({kind:'embed', video:true, tip:'youtube', ratio:'v169',
                   src: 'https://player.vimeo.com/video/' + id + (h ? '?h=' + encodeURIComponent(h) : '')});
    }
  }

  // --- Google Drive ---
  if (host === 'drive.google.com'){
    const id = (u.pathname.match(/\/file\/d\/([\w-]+)/) || [])[1] || u.searchParams.get('id') || '';
    if (/^[\w-]+$/.test(id)){
      const preview = 'https://drive.google.com/file/d/' + id + '/preview';
      const dl      = 'https://drive.google.com/uc?export=download&id=' + id;
      if (type === 'video') return done({kind:'embed', video:true, tip:'drive', ratio:'v169', src: preview, dl});
      // a photo: show it directly, and if that fails show Drive's own viewer
      return done({kind:'image', tip:'drive', src: 'https://lh3.googleusercontent.com/d/' + id + '=w1600', fallback: preview, dl});
    }
    return done({kind:'link', tip:'drive'});               // folders and other Drive pages
  }

  // --- OneDrive / SharePoint ---
  if (host === '1drv.ms') return done({kind:'link', tip:'onedrive'});     // short links cannot be converted
  if (host === 'onedrive.live.com'){
    if (parts[0] !== 'embed'){ u.pathname = '/embed'; }
    return done({kind:'embed', video: type === 'video', tip:'onedrive', src: u.href});
  }
  if (host.endsWith('sharepoint.com')){
    u.searchParams.set('action', 'embedview');
    return done({kind:'embed', video: type === 'video', tip:'onedrive', src: u.href});
  }

  // --- Facebook ---
  if (host.endsWith('facebook.com') || host === 'fb.watch' || host === 'fb.com'){
    const isVideo = host === 'fb.watch' || /\/(videos?|reel|watch)(\/|$|\?)/.test(u.pathname + u.search);
    const href = encodeURIComponent(raw);
    return isVideo
      ? done({kind:'embed', video:true, tip:'social', ratio: /\/reel\//.test(u.pathname) ? 'v916' : 'v169',
              src: 'https://www.facebook.com/plugins/video.php?height=476&href=' + href + '&show_text=false&t=0'})
      : done({kind:'embed', tip:'social', ratio:'a4p',
              src: 'https://www.facebook.com/plugins/post.php?href=' + href + '&show_text=true'});
  }

  // --- Instagram ---
  if (host === 'instagram.com'){
    const m = u.pathname.match(/^\/(?:[^/]+\/)?(p|reel|reels|tv)\/([\w-]+)/);
    if (m){
      const t = m[1] === 'reels' ? 'reel' : m[1];
      return done({kind:'embed', video: t !== 'p', tip:'social', ratio: t === 'p' ? 'f1350' : 'v916',
                   src: 'https://www.instagram.com/' + t + '/' + m[2] + '/embed'});
    }
  }

  // --- TikTok ---
  if (host.endsWith('tiktok.com')){
    const id = (u.pathname.match(/\/video\/(\d+)/) || [])[1];
    if (id) return done({kind:'embed', video:true, tip:'social', ratio:'v916', src: 'https://www.tiktok.com/embed/v2/' + id});
    return done({kind:'link', tip:'social'});              // short links (vm.tiktok.com) cannot be converted
  }

  // --- Dropbox (turn a share link into a direct file) ---
  if (host.endsWith('dropbox.com')){
    u.searchParams.delete('dl'); u.searchParams.set('raw', '1');
    const kind = fileKind(u.pathname, type);
    return done({kind, src: u.href, dl: u.href, video: kind === 'video'});
  }

  // --- A direct photo / video / PDF link (ends with .jpg .mp4 ...) ---
  const direct = fileKind(u.pathname, type, true);
  if (direct) return done({kind: direct, src: raw, dl: raw, video: direct === 'video'});

  // --- Any other link ---
  if (type === 'video') return done({kind:'embed', video:true, tip:'other', ratio:'v169', src: raw});
  // a photo link without ".jpg": try as a picture first, and if it is a web page show it in a safe frame
  return done({kind:'image', tip:'other', src: raw, fallback: raw});
}


/* ---------- 3.4  Home page effects ---------- */

// Typing effect: types a word, waits, deletes it, then the next word
(function(){
  const el = $('role'); if (!el) return;
  let w = 0, i = 0, del = false;
  (function tick(){
    const word = ROLES[w];
    el.textContent = word.slice(0, i);
    if (!del && i === word.length){ del = true; return setTimeout(tick, 1400); }
    if (del && i === 0){ del = false; w = (w + 1) % ROLES.length; }
    i += del ? -1 : 1;
    setTimeout(tick, del ? 40 : 80);
  })();
})();

// Count-up numbers
document.querySelectorAll('[data-count]').forEach(n => {
  const to = +n.dataset.count; let c = 0; const step = Math.ceil(to / 40);
  const t = setInterval(() => {
    c = Math.min(c + step, to);
    n.textContent = c + (c === to && n.hasAttribute('data-plus') ? '+' : '');
    if (c === to) clearInterval(t);
  }, 40);
});

// Skill bars (they fill when you scroll to them)
const skillsBox = $('skills');
if (skillsBox) skillsBox.innerHTML = SKILLS.map(([n, p]) =>
  `<div><span>${n}<b>${p}%</b></span><div class="bar"><i data-w="${p}"></i></div></div>`).join('');

// Photo frame on the home page (fades to the next photo automatically)
const sl = $('slider'), dots = $('dots');
if (sl && dots){
  sl.innerHTML   = PHOTOS.map((p, i) => `<img class="slide${i ? '' : ' on'}" src="${esc(p)}" alt="Ruviru Sandaruwan photo ${i + 1}">`).join('');
  dots.innerHTML = PHOTOS.map((p, i) => `<i class="${i ? '' : 'on'}"></i>`).join('');
  let ph = 0;
  if (PHOTOS.length > 1) setInterval(() => {
    const s = sl.children, d = dots.children;
    s[ph].classList.remove('on'); d[ph].classList.remove('on');
    ph = (ph + 1) % PHOTOS.length;
    s[ph].classList.add('on'); d[ph].classList.add('on');
  }, PHOTO_SECONDS * 1000);
}


/* ---------- 3.5  Work cards and filter buttons ---------- */

const view   = $('view');      // where folders and cards are drawn
const crumbs = $('crumbs');    // the path line:  My work > LEO Club > ...
let FILTER = 'all';            // all | post | video | web   (set by the filter buttons)
let PATH   = [];               // the folder we are inside now, e.g. ["leo","clean-water"]

// --- 1) Folder helpers ---
// Finds a folder from its ids, e.g. ["leo","wildlife"]. Returns null if it does not exist.
const findFolder = ids => { let list = FOLDERS, node = null; for (const id of ids) { node = (list || []).find(f => f.id === id); if (!node) return null; list = node.sub; } return node; };

// Finds the full path from just the short name, e.g. "wildlife" -> "leo/wildlife". Returns "" if there is none.
const pathOfId = (id, list = FOLDERS, base = []) => { for (const f of list) { const p = base.concat(f.id); if (f.id === id) return p.join('/'); const r = f.sub ? pathOfId(id, f.sub, p) : ''; if (r) return r; } return ''; };
// Every folder path that exists (shown in the console when a folder name is wrong)
const allPaths = (list = FOLDERS, base = []) => list.flatMap(f => { const p = base.concat(f.id); return [p.join('/')].concat(f.sub ? allPaths(f.sub, p) : []); });

// Every work gets its folder path in w._f.  You may write the long path ("leo/wildlife") or just the short name ("wildlife").
WORKS.forEach(w => {
  let p = String(w.folder || '').trim().replace(/^\/+|\/+$/g, '').split('/').filter(Boolean);
  if (p.length && !findFolder(p)) { const full = pathOfId(p[p.length - 1]); if (full) p = full.split('/'); }   // short name -> full path
  if (w.folder && !findFolder(p)) console.warn('Unknown folder "' + w.folder + '" for the work: ' + w.title + '. Folders you can use: ' + allPaths().join('  |  '));
  w._f = findFolder(p) ? p.join('/') : (findFolder(['other']) ? 'other' : '');
});
const inFolder = (w, path) => w._f === path || w._f.startsWith(path + '/');       // inside this folder or deeper
const countIn  = path => { const c = {post:0, video:0, web:0}; WORKS.forEach(w => { if (inFolder(w, path)) c[w.type] = (c[w.type] || 0) + 1; }); return c; };

// --- 2) Pictures ---
// Small preview address of a work: your own "thumb", or taken from a YouTube / Google Drive link
function thumbSrc(w){
  const first = (w.pages && w.pages.length) ? w.pages[0] : w.file;
  const link  = String((first && first.file) || first || '');
  let src = w.thumb || '';
  let m;
  if (!src && (m = link.match(/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?(?:[^#]*&)?v=|shorts\/|embed\/|live\/))([\w-]{6,15})/i)))
    src = 'https://i.ytimg.com/vi/' + m[1] + '/hqdefault.jpg';
  if (!src && /drive\.google\.com/i.test(link) && (m = link.match(/\/file\/d\/([\w-]+)|[?&]id=([\w-]+)/)))
    src = w.type === 'video' ? 'https://drive.google.com/thumbnail?id=' + (m[1] || m[2]) + '&sz=w640'
                             : 'https://lh3.googleusercontent.com/d/' + (m[1] || m[2]) + '=w480';
  return src;
}
function thumbImg(w){
  const src = thumbSrc(w);
  return src ? `<img src="${esc(src)}" alt="${esc(w.title)}" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">` : '';
}

// All pictures that can be shown on a folder card (your "covers" + pictures of the works inside)
function coverSrcs(path){
  const node = findFolder(path.split('/'));
  const out  = ((node && node.covers) || []).map(imgUrl);
  WORKS.forEach(w => {
    if (!inFolder(w, path) || w.type === 'web') return;
    let src = thumbSrc(w);
    if (!src){ const f = pagesOf(w)[0], r = resolveLink(f.file, f.as || w.type); if (r.kind === 'image') src = r.src; }   // your own picture file
    if (src) out.push(src);
  });
  return out;
}

// --- 3) The cards ---
const plural = (n, one, many) => n + ' ' + (n === 1 ? one : many);

// One work card (same as before)
function cardHtml(w, i){
  const count = w.type === 'web' ? 1 : pagesOf(w).length;
  return `
  <button class="card" data-t="${w.type}" data-i="${i}">
    <div class="thumb" style="--c1:${w.c[0]};--c2:${w.c[1]}"><span class="ico">${w.icon}</span>${thumbImg(w)}${w.type === 'video' ? '<i class="play">▶</i>' : ''}</div>
    <h3>${w.title}</h3><p>${w.note}${count > 1 ? ` · ${count} pages` : ''}</p>
  </button>`;
}

/* Folder icon.  In FOLDERS you can write:
     icon:"🦁"              an emoji.  (If a picture  assets/icons/<id>.png  exists, e.g. assets/icons/leo.png, it is used instead - automatic)
     icon:"LEO.png"         a picture.  A name without "/" is looked for in  assets/icons/
     icon:"assets/img/x.png"  a picture with its full path
   The picture shows in the middle of the folder card, and as a round badge in the corner when the card shows work pictures.
   If the picture file is missing, the emoji (or 📁) shows. Optional:  emoji:"🦁"  = the emoji used when the picture is missing. */
const ICON_DIR = 'assets/icons/';
const IMG_EXT  = /\.(png|jpe?g|svg|webp|gif|avif)(\?.*)?$/i;
function iconInfo(f){
  // The picture is chosen in this order:
  //   1) FOLDER_ICONS (the list above)   2) icon:"x.png" inside the FOLDERS block   3) assets/icons/<id>.png (automatic)   4) emoji
  const ic    = String(f.icon || '').trim();
  const pic   = String((typeof FOLDER_ICONS === 'object' && FOLDER_ICONS[f.id]) || '').trim();
  const isPic = n => IMG_EXT.test(n) || /^https?:\/\//i.test(n);              // a file name OR a web link (Drive, Dropbox ...)
  const emoji = isPic(ic) ? (f.emoji || '📁') : (ic || '📁');
  const path  = n => (/^https?:\/\//i.test(n) ? imgUrl(n) : n.includes('/') ? n : ICON_DIR + n);   // no "/" in the name = look in assets/icons/
  if (isPic(pic)) return {src: path(pic), emoji};
  if (isPic(ic))  return {src: path(ic),  emoji};
  return {src: ICON_DIR + f.id + '.png', emoji};
}
function iconMain(f){            // big icon in the middle of the card
  const i = iconInfo(f);
  return `<img class="ico-img" src="${esc(enc(i.src))}" data-e="${esc(i.emoji)}" alt="" onerror="this.replaceWith(document.createTextNode(this.dataset.e))">`;
}
function iconBadge(f){           // small round badge in the corner (stays on top of the changing pictures)
  return `<img class="fold-badge" src="${esc(enc(iconInfo(f).src))}" alt="" onerror="this.remove()">`;
}

// One folder card
function folderCard(f, path){
  const n = countIn(path), c = f.c || ['#283593', '#ad1457'];
  const bits = [];
  if (f.sub && f.sub.length)                           bits.push(`<b>📁 ${plural(f.sub.length, 'folder', 'folders')}</b>`);
  if ((FILTER === 'all' || FILTER === 'post')  && n.post)  bits.push(`<b>🖼️ ${plural(n.post, 'image', 'images')}</b>`);
  if ((FILTER === 'all' || FILTER === 'video') && n.video) bits.push(`<b>🎬 ${plural(n.video, 'video', 'videos')}</b>`);
  if ((FILTER === 'all' || FILTER === 'web')   && n.web)   bits.push(`<b>🌐 ${plural(n.web, 'website', 'websites')}</b>`);
  if (!n.post && !n.video && !n.web && !(f.sub && f.sub.length)) bits.push('<b>Coming soon</b>');
  return `
  <button class="fold" data-p="${esc(path)}" style="--c1:${c[0]};--c2:${c[1]}">
    <div class="fold-cover"><span class="ico">${iconMain(f)}</span>${iconBadge(f)}</div>
    <div class="fold-info"><h3>${f.name}</h3><p>${f.note || ''}</p><div class="fold-badges">${bits.join('')}</div></div>
  </button>`;
}

// --- 4) Folder pictures that change at random ---
let coverTimer = null;
function setCover(el){
  const s = el._srcs; if (!s || !s.length) return;
  let src; do { src = pick(s); } while (s.length > 1 && src === el._cur);            // a random picture, never the same twice
  el._cur = src;
  const box = el.querySelector('.fold-cover'), im = new Image();
  im.alt = ''; im.referrerPolicy = 'no-referrer';
  im.onload = () => { box.querySelectorAll('img').forEach(o => o.remove()); im.className = 'cv ' + pick(['c1','c2','c3','c4']); box.appendChild(im); };   // random animation
  im.src = src;                                                                        // if it cannot load, the icon stays
}
function startCovers(){
  clearInterval(coverTimer);
  if (!SHOW_WORK_PICTURES) return;                       // icon only - no changing work pictures
  const els = [...view.querySelectorAll('.fold')];
  els.forEach(el => { el._srcs = coverSrcs(el.dataset.p); el._cur = ''; setCover(el); });
  if (els.length) coverTimer = setInterval(() => { if (!document.hidden) els.forEach(el => { if (Math.random() < 0.6) setCover(el); }); }, 3500);
}

// --- 5) Draw the page: folders first, then the Images / Videos / Websites of the open folder ---
function render(){
  const here = PATH.join('/'), node = findFolder(PATH), kids = node ? (node.sub || []) : FOLDERS;

  // path line with a Back button
  crumbs.innerHTML = PATH.length
    ? `<button class="crumb-back" data-p="${esc(PATH.slice(0, -1).join('/'))}">← Back</button><button data-p="">📁 My work</button>`
      + PATH.map((id, k) => { const f = findFolder(PATH.slice(0, k + 1)); const last = k === PATH.length - 1;
          return ' › ' + (last ? `<b>${f.name}</b>` : `<button data-p="${esc(PATH.slice(0, k + 1).join('/'))}">${f.name}</button>`); }).join('')
    : '<b>📁 My work</b>';

  let html = '';
  // folders (when a filter is on, only folders that have that kind of work)
  const shown = kids.filter(f => FILTER === 'all' || countIn((here ? here + '/' : '') + f.id)[FILTER] > 0);
  if (shown.length) html += `<div class="fold-grid">${shown.map(f => folderCard(f, (here ? here + '/' : '') + f.id)).join('')}</div>`;

  // works that live directly in this folder: Images / Videos / Websites
  const direct = WORKS.map((w, i) => [w, i]).filter(([w]) => w._f === here && (FILTER === 'all' || w.type === FILTER));
  [['post', '🖼️', 'Images'], ['video', '🎬', 'Videos'], ['web', '🌐', 'Websites']].forEach(([t, ic, label]) => {
    const items = direct.filter(([w]) => w.type === t);
    if (items.length) html += `<div class="fsec"><h4 class="fsec-h"><span>📁</span> ${ic} ${label} <em>${items.length}</em></h4><div class="grid">${items.map(([w, i]) => cardHtml(w, i)).join('')}</div></div>`;
  });

  if (!html) html = `<div class="fempty"><span>📂</span><p>${FILTER === 'all'
    ? 'This folder is empty for now. New work is coming soon.'
    : 'Nothing of this kind in this folder yet.'}</p></div>`;

  view.className = ''; void view.offsetWidth;                                         // restart the entrance animation
  view.className = 'v-' + pick(['fade', 'up', 'zoom', 'left']);                       // a random entrance animation
  view.innerHTML = html;
  startCovers();
}

// Open a folder (p = "leo/wildlife", or "" for the top)
function openFolder(p){
  PATH = p ? p.split('/') : [];
  render();
  crumbs.scrollIntoView({behavior: 'smooth', block: 'start'});
}
if (view){
  view.addEventListener('click',   e => { const f = e.target.closest('.fold');   if (f) openFolder(f.dataset.p); });
  crumbs.addEventListener('click', e => { const b = e.target.closest('button');  if (b) openFolder(b.dataset.p); });
}

// Filter buttons: All / Posts / Videos / Websites
const filters = $('filters');
if (filters) filters.addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  document.querySelectorAll('#filters button').forEach(x => x.classList.toggle('on', x === b));
  FILTER = b.dataset.f;
  render();
});
if (view) render();


/* ---------- 3.6  Open-box viewer: the styles (looks) ---------- */

const GOLD  = "linear-gradient(135deg,#fff1a8,#d4af37 22%,#8a6a12 48%,#f6dc7a 72%,#b8860b)";        // shiny gold
const STUD  = "radial-gradient(circle,#fff6c4 0 2px,#7a5a00 3px 5px,transparent 6px)";               // gold corner stud

document.head.insertAdjacentHTML('beforeend', `<style id="vw-css">

/* Colours that can fade smoothly from one colour to the next (animated background) */
@property --c{syntax:'<color>';inherits:false;initial-value:#6a1b9a}
@property --pc{syntax:'<color>';inherits:false;initial-value:#ffc857}

/* The full-screen box */
.vw{position:fixed;inset:0;z-index:9999;display:none;flex-direction:column;overflow:hidden;color:#fff;background:radial-gradient(circle at 50% 0,#1d1738 0,#0a0a14 70%)}
.vw.open{display:flex;animation:vwIn .35s ease}
@keyframes vwIn{from{opacity:0}to{opacity:1}}
.vw-top,.vw-prog,.vw-scroll{position:relative;z-index:1}

/* ===== ANIMATED BACKGROUND (stays behind the designs, never covers them) ===== */
.vw-bg{position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none}
.vw-bg::after{content:"";position:absolute;inset:-20%;background:linear-gradient(115deg,transparent 42%,rgba(255,255,255,.055) 50%,transparent 58%);background-size:260% 100%;animation:vwSweep 14s linear infinite}
@keyframes vwSweep{from{background-position:140% 0}to{background-position:-140% 0}}
.vw-blob{position:absolute;border-radius:50%;background:radial-gradient(circle,var(--c) 0,transparent 68%);opacity:.34;transition:--c 3.5s ease;animation:vwDrift ease-in-out infinite alternate;will-change:transform}
@keyframes vwDrift{0%{transform:translate(0,0) scale(1)}50%{transform:translate(9vw,-7vh) scale(1.18)}100%{transform:translate(-7vw,9vh) scale(.9)}}
.vw-fx{position:absolute;top:100%;opacity:.2;color:var(--pc);line-height:1;transition:--pc 3.5s ease;animation:vwFloat linear infinite;will-change:transform}
@keyframes vwFloat{from{transform:translate3d(0,0,0) rotate(0)}to{transform:translate3d(var(--dx,30px),-135vh,0) rotate(360deg)}}
.vw-ring{border:2px solid var(--pc);border-radius:50%}
.vw-square{border:2px solid var(--pc);border-radius:4px}
.vw-tri{background:var(--pc);clip-path:polygon(50% 0,100% 100%,0 100%);opacity:.14}
.vw-dot{background:var(--pc);border-radius:50%;opacity:.16}
.vw-star::before{content:"✦"}
.vw-plus::before{content:"+"}
.vw-emo{opacity:.28;filter:saturate(1.2)}
@media(prefers-reduced-motion:reduce){.vw-bg *,.vw-bg::after{animation:none!important}}

/* Top bar: title + buttons */
.vw-top{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 18px;background:rgba(10,10,20,.85);backdrop-filter:blur(10px);border-bottom:1px solid rgba(255,255,255,.1)}
.vw-ttl{min-width:0}
.vw-ttl small{display:block;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#ffc857}
.vw-ttl h2{margin:2px 0;font-size:clamp(17px,2.4vw,24px);line-height:1.2}
.vw-ttl p{margin:0;font-size:13px;opacity:.7}
.vw-btns{display:flex;gap:8px;flex:none}
.vw-btns a,.vw-btns button{width:40px;height:40px;border-radius:50%;border:1px solid rgba(255,255,255,.25);background:rgba(255,255,255,.08);color:#fff;font-size:18px;cursor:pointer;display:grid;place-items:center;text-decoration:none;transition:.2s}
.vw-btns a:hover,.vw-btns button:hover{background:#ff3d6e;border-color:#ff3d6e}

/* Scroll progress line */
.vw-prog{height:3px;background:rgba(255,255,255,.1)}
.vw-prog i{display:block;height:100%;width:0;background:linear-gradient(90deg,#ff3d6e,#ffc857)}

/* The scrolling area (pages go top to bottom) */
.vw-scroll{flex:1;overflow-y:auto;padding:26px 16px 40px;scroll-behavior:smooth;outline:none}
.vw-hint{text-align:center;font-size:13px;opacity:.75;margin-bottom:22px;animation:vwBob 1.6s ease-in-out infinite}
@keyframes vwBob{50%{transform:translateY(6px)}}

/* One page = one design (fades in while you scroll) */
.vw-page{margin:0 auto 56px;width:min(100%,var(--w,720px));opacity:0;transform:translateY(42px);transition:opacity .7s ease,transform .7s ease}
.vw-page.in{opacity:1;transform:none}
.vw-frame{position:relative;width:100%}
.vw-media{position:relative;width:100%;background:#0d0d14;overflow:hidden}
.vw-media img,.vw-media video,.vw-media iframe{display:block;width:100%;border:0}
.vw-media img{height:auto}
.vw-page.ratio .vw-media{aspect-ratio:var(--r)}
.vw-page.ratio .vw-media>*{height:100%;object-fit:var(--fit,contain)}

/* Small loading circle while a photo / video is loading */
.vw-media.loading{min-height:150px}
.vw-media.loading::after{content:"";position:absolute;left:50%;top:50%;width:34px;height:34px;margin:-17px 0 0 -17px;border:3px solid rgba(255,255,255,.25);border-top-color:#ffc857;border-radius:50%;animation:vwSpin .8s linear infinite;z-index:2;pointer-events:none}
@keyframes vwSpin{to{transform:rotate(360deg)}}

/* Caption under every page */
.vw-cap{display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;margin-top:16px;font-size:13px;opacity:.95}
.vw-cap b{color:#ffc857}
.vw-cap .vw-links{display:flex;gap:8px;flex-wrap:wrap}
.vw-cap a{color:#fff;text-decoration:none;border:1px solid rgba(255,255,255,.3);padding:5px 14px;border-radius:99px;font-size:12px;background:rgba(10,10,20,.35)}
.vw-cap a:hover{background:#ff3d6e;border-color:#ff3d6e}
.vw-tip{margin-top:10px;font-size:12px;opacity:.7;line-height:1.5}

/* Message box (missing file, link that cannot be shown) */
.vw-miss{display:grid;place-items:center;text-align:center;padding:30px;min-height:200px;height:100%;color:#fff;font-size:14px;line-height:1.7}
.vw-miss a{color:#ffc857}
.vw-miss .vw-big{display:inline-block;margin-top:10px;padding:8px 20px;border:1px solid #ffc857;border-radius:99px;text-decoration:none}
.vw-miss .vw-big:hover{background:#ffc857;color:#111}

/* Previous / Next design buttons */
.vw-end{display:flex;justify-content:center;gap:12px;flex-wrap:wrap;padding:6px 0 30px}
.vw-end button{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.25);color:#fff;padding:10px 20px;border-radius:99px;cursor:pointer;font-size:14px}
.vw-end button:hover{background:#ff3d6e;border-color:#ff3d6e}
.vw-nav{position:fixed;top:50%;transform:translateY(-50%);width:46px;height:46px;border-radius:50%;border:1px solid rgba(255,255,255,.25);background:rgba(10,10,20,.7);color:#fff;font-size:24px;cursor:pointer;z-index:3}
.vw-nav:hover{background:#ff3d6e}
.vw-prev{left:14px}.vw-next{right:14px}
@media(max-width:700px){.vw-nav{display:none}.vw-top{padding:10px 12px}}


/* ===== BORDER DESIGNS ===== */

/* none: only your design, with a soft shadow (no border) */
.fr-none .vw-media{box-shadow:0 20px 60px rgba(0,0,0,.55)}

/* soft-shadow (default for designs) */
.fr-soft-shadow .vw-frame{border-radius:12px;overflow:hidden;box-shadow:0 24px 70px rgba(0,0,0,.6)}

/* film-strip (default for videos) */
.fr-film-strip .vw-frame{background:#111;padding:14px 38px;border-radius:6px;box-shadow:0 20px 60px rgba(0,0,0,.6)}
.fr-film-strip .vw-frame::before,.fr-film-strip .vw-frame::after{content:"";position:absolute;top:8px;bottom:8px;width:14px;background:repeating-linear-gradient(180deg,#e9e9e9 0 10px,transparent 10px 22px);border-radius:2px}
.fr-film-strip .vw-frame::before{left:12px}
.fr-film-strip .vw-frame::after{right:12px}

/* gold-luxury */
.fr-gold-luxury .vw-frame{padding:28px;background:${GOLD};border-radius:4px;box-shadow:inset 0 0 0 2px rgba(255,255,255,.6),0 24px 64px rgba(0,0,0,.6)}
.fr-gold-luxury .vw-media{box-shadow:0 0 0 10px #fff9ec,0 0 0 12px #8a6a12,0 0 0 13px #ffe58a}
.fr-gold-luxury .vw-frame::before{content:"";position:absolute;inset:6px;border:1px solid rgba(255,246,196,.95);box-shadow:0 0 0 1px rgba(92,63,0,.5);pointer-events:none;z-index:2}
.fr-gold-luxury .vw-frame::after{content:"";position:absolute;inset:0;pointer-events:none;z-index:2;background:${STUD} 0 0/16px 16px no-repeat,${STUD} 100% 0/16px 16px no-repeat,${STUD} 0 100%/16px 16px no-repeat,${STUD} 100% 100%/16px 16px no-repeat}

/* gold-corners */
.fr-gold-corners .vw-frame{padding:24px;background:#120d05;border:1px solid rgba(212,175,55,.6);box-shadow:0 22px 60px rgba(0,0,0,.6),0 0 30px rgba(212,175,55,.18)}
.fr-gold-corners .vw-frame::before{content:"";position:absolute;inset:7px;pointer-events:none;z-index:2;background:linear-gradient(#e8c75a,#e8c75a) 0 0/38px 3px no-repeat,linear-gradient(#e8c75a,#e8c75a) 0 0/3px 38px no-repeat,linear-gradient(#e8c75a,#e8c75a) 100% 0/38px 3px no-repeat,linear-gradient(#e8c75a,#e8c75a) 100% 0/3px 38px no-repeat,linear-gradient(#e8c75a,#e8c75a) 0 100%/38px 3px no-repeat,linear-gradient(#e8c75a,#e8c75a) 0 100%/3px 38px no-repeat,linear-gradient(#e8c75a,#e8c75a) 100% 100%/38px 3px no-repeat,linear-gradient(#e8c75a,#e8c75a) 100% 100%/3px 38px no-repeat}
.fr-gold-corners .vw-frame::after{content:"";position:absolute;inset:13px;border:1px solid rgba(232,199,90,.45);pointer-events:none;z-index:2}

/* classic-gold */
.fr-classic-gold .vw-frame{padding:18px;background:${GOLD};border-radius:4px;box-shadow:inset 0 0 0 2px rgba(255,255,255,.6),inset 0 0 0 6px rgba(92,63,0,.55),0 22px 60px rgba(0,0,0,.6)}
.fr-classic-gold .vw-media{box-shadow:0 0 0 3px #5c3f00,0 0 0 4px #ffe58a}

/* royal-double */
.fr-royal-double .vw-frame{padding:26px;background:#fff9ec;border:5px solid;border-image:${GOLD} 1;box-shadow:0 22px 60px rgba(0,0,0,.6)}
.fr-royal-double .vw-frame::before{content:"";position:absolute;inset:9px;border:2px solid;border-image:${GOLD} 1;pointer-events:none;z-index:2}
.fr-royal-double .vw-media{box-shadow:0 0 0 2px #fff9ec,0 0 0 3px #b8860b}

/* wedding-ornate */
.fr-wedding-ornate .vw-frame{padding:30px;background:#fff7ee;border:5px solid;border-image:${GOLD} 1;box-shadow:inset 0 0 0 9px #fff7ee,inset 0 0 0 11px var(--accent,#b8860b),0 22px 60px rgba(0,0,0,.55)}
.fr-wedding-ornate .vw-media{box-shadow:0 0 0 2px #fff7ee,0 0 0 3px #b8860b}
.fr-wedding-ornate .vw-frame::before,.fr-wedding-ornate .vw-frame::after{content:"❦";position:absolute;left:50%;transform:translateX(-50%);padding:0 10px;background:#fff7ee;color:var(--accent,#b8860b);font-size:20px;line-height:1;z-index:2}
.fr-wedding-ornate .vw-frame::before{top:-13px}
.fr-wedding-ornate .vw-frame::after{bottom:-13px}

/* other borders */
.fr-minimal-line .vw-frame{border:1px solid rgba(255,255,255,.55);padding:10px}
.fr-clean-white .vw-frame{background:#fff;padding:14px;border-radius:6px;box-shadow:0 18px 50px rgba(0,0,0,.5)}
.fr-polaroid .vw-frame{background:#fbfbf8;padding:14px 14px 60px;border-radius:3px;box-shadow:0 18px 50px rgba(0,0,0,.55)}
.fr-neon-glow .vw-frame{padding:6px;background:#06060f;border:2px solid var(--accent,#ffc857);border-radius:10px;box-shadow:0 0 14px var(--accent,#ffc857),0 0 50px color-mix(in srgb,var(--accent,#ffc857) 55%,transparent)}
.fr-gradient-edge .vw-frame{padding:6px;border-radius:16px;background:linear-gradient(135deg,var(--accent,#ff3d6e),#7c4dff,#00bcd4);box-shadow:0 20px 60px rgba(0,0,0,.55)}
.fr-gradient-edge .vw-media{border-radius:11px}
.fr-dashed-ticket .vw-frame{padding:10px;border:3px dashed var(--accent,#ffc857);border-radius:12px}
.fr-blueprint .vw-frame{padding:14px;border:2px solid #4fc3f7;background-color:#0b2a4a;background-image:linear-gradient(rgba(79,195,247,.18) 1px,transparent 1px),linear-gradient(90deg,rgba(79,195,247,.18) 1px,transparent 1px);background-size:22px 22px;box-shadow:0 20px 60px rgba(0,0,0,.55)}
.fr-phone-frame .vw-frame{border:10px solid #1b1b1f;border-radius:36px;overflow:hidden;background:#000;box-shadow:0 0 0 2px #555,0 24px 70px rgba(0,0,0,.65)}
.fr-phone-frame .vw-frame::before{content:"";position:absolute;top:8px;left:50%;transform:translateX(-50%);width:28%;height:16px;border-radius:99px;background:#1b1b1f;z-index:3}

/* YouTube picture + play button (fast: the real player loads after the click) */
.yt-face{display:grid;place-items:center;width:100%;height:100%;min-height:220px;border:0;cursor:pointer;position:relative;background:#000 center/cover no-repeat}
.yt-face span{width:78px;height:78px;border-radius:50%;background:rgba(255,61,110,.92);color:#fff;font-size:30px;display:grid;place-items:center;padding-left:6px;box-shadow:0 10px 40px rgba(0,0,0,.55);transition:transform .25s}
.yt-face:hover span{transform:scale(1.14)}
.yt-face::after{content:"Tap to play";position:absolute;bottom:12px;left:0;right:0;text-align:center;font-size:12px;color:#fff;text-shadow:0 1px 6px #000}
/* FIX: a backup frame (when a picture link fails) was only 150px tall and looked empty */
.vw-page:not(.ratio) .vw-media iframe{height:72vh;min-height:420px}
</style>`);


/* ---------- 3.7  Open-box viewer: the box itself ---------- */

document.body.insertAdjacentHTML('beforeend', `
<div class="vw" id="vw" role="dialog" aria-modal="true">
  <div class="vw-bg" id="vw-bg" aria-hidden="true"></div>
  <div class="vw-top">
    <div class="vw-ttl"><small id="vw-k"></small><h2 id="vw-h"></h2><p id="vw-n"></p></div>
    <div class="vw-btns"><a id="vw-o" href="#" target="_blank" rel="noopener noreferrer" title="Open original in new tab">↗</a><button id="vw-x" title="Close (Esc)">✕</button></div>
  </div>
  <div class="vw-prog"><i id="vw-bar"></i></div>
  <div class="vw-scroll" id="vw-sc" tabindex="0">
    <div class="vw-hint" id="vw-hint">Scroll down ↓</div>
    <div id="vw-pages"></div>
    <div class="vw-end"><button id="vw-pv">← Previous design</button><button id="vw-nx">Next design →</button></div>
  </div>
  <button class="vw-nav vw-prev" id="vw-p" title="Previous design">‹</button>
  <button class="vw-nav vw-next" id="vw-nn" title="Next design">›</button>
</div>`);

const vw = $('vw'), vsc = $('vw-sc'), vpages = $('vw-pages');
let cur = 0;          // which design is open (position in "list")
let list = [];        // the designs that can be opened right now
let vio = null;       // the "fade in while scrolling" watcher


/* ---------- 3.8  ANIMATED BACKGROUND ----------
   Soft colour clouds + floating design shapes. Colours change by themselves every few
   seconds and are different every time. It stays BEHIND your designs and never touches them. */

const PALETTES = [
  ['#ff3d6e','#6a1b9a','#ffc857','#00bcd4'],
  ['#7c4dff','#ff3d6e','#00bcd4','#ffd54f'],
  ['#ffc857','#b71c1c','#6a1b9a','#ff3d6e'],
  ['#00bcd4','#283593','#ad1457','#ffc857'],
  ['#2e7d32','#ffd54f','#00838f','#6a1b9a'],
  ['#ff9800','#e91e63','#3f51b5','#00e5ff']
];
const EMOJIS = ['🎨','✨','📣','🎬','💡','📈','🖌️','📷'];     // design + marketing + video theme
let bgTimer = null, lastPalette = -1;

// Picks a new random colour set (the first two colours come from the open work's own card colours)
function nextPalette(work){
  let k;
  do { k = Math.floor(Math.random() * PALETTES.length); } while (k === lastPalette);
  lastPalette = k;
  const pal = PALETTES[k].slice();
  if (work && work.c){ pal[0] = work.c[0]; pal[1] = work.c[1]; }
  return pal;
}

// Gives every cloud and shape a colour (they fade smoothly to it)
function paintBg(pal){
  const bg = $('vw-bg');
  bg.querySelectorAll('.vw-blob').forEach((b, i) => b.style.setProperty('--c', pal[i % pal.length]));
  bg.querySelectorAll('.vw-fx').forEach((f, i) => f.style.setProperty('--pc', pal[(i + 1) % pal.length]));
}

function startBg(work){
  stopBg();
  let html = '';
  // 4 big soft colour clouds that drift slowly
  for (let i = 0; i < 4; i++){
    const s = rnd(45, 75).toFixed(0);
    html += `<i class="vw-blob" style="left:${rnd(-15,65).toFixed(0)}%;top:${rnd(-15,65).toFixed(0)}%;width:${s}vmax;height:${s}vmax;animation-duration:${rnd(16,30).toFixed(1)}s;animation-delay:-${rnd(0,16).toFixed(1)}s"></i>`;
  }
  // 18 small shapes that float upwards (rings, squares, triangles, dots, stars, plus)
  const shapes = ['ring','square','tri','dot','star','plus'];
  for (let i = 0; i < 18; i++){
    const s = rnd(10, 34).toFixed(0);
    html += `<span class="vw-fx vw-${pick(shapes)}" style="left:${rnd(0,98).toFixed(1)}%;width:${s}px;height:${s}px;font-size:${s}px;--dx:${rnd(-70,70).toFixed(0)}px;animation-duration:${rnd(16,38).toFixed(1)}s;animation-delay:-${rnd(0,30).toFixed(1)}s"></span>`;
  }
  // 6 theme emojis that float up slowly
  for (let i = 0; i < 6; i++){
    html += `<span class="vw-fx vw-emo" style="left:${rnd(0,95).toFixed(1)}%;font-size:${rnd(20,34).toFixed(0)}px;--dx:${rnd(-60,60).toFixed(0)}px;animation-duration:${rnd(22,44).toFixed(1)}s;animation-delay:-${rnd(0,36).toFixed(1)}s">${pick(EMOJIS)}</span>`;
  }
  $('vw-bg').innerHTML = html;
  paintBg(nextPalette(work));
  // New random colours every 9 seconds (skipped if the visitor asked for less motion)
  if (!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches))
    bgTimer = setInterval(() => paintBg(nextPalette(work)), 9000);
}

function stopBg(){
  if (bgTimer){ clearInterval(bgTimer); bgTimer = null; }
  $('vw-bg').innerHTML = '';
}


/* ---------- 3.9  Building one page ---------- */

// A safe frame for players and web pages (limited permissions = more security)
function frameHtml(src, title){
  return `<iframe src="${esc(src)}" title="${esc(title)}" loading="lazy" allowfullscreen
    sandbox="allow-scripts allow-same-origin allow-presentation allow-popups allow-popups-to-escape-sandbox allow-forms"
    allow="autoplay; fullscreen; picture-in-picture; encrypted-media; clipboard-write"
    referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
}

// Message box used when a link cannot be shown inside the page
function messageHtml(text, openUrl){
  const btn = openUrl ? `<br><a class="vw-big" href="${esc(openUrl)}" target="_blank" rel="noopener noreferrer">Open original ↗</a>` : '';
  return `<div class="vw-miss"><div>${text}${btn}</div></div>`;
}

// The picture / video / player itself
function mediaHtml(r, title){
  // YouTube: show a picture + play button first (fast). The real player loads when clicked.
  if (r.yt) return `<button type="button" class="yt-face" data-src="${esc(r.src)}" data-title="${esc(title)}"
    style="background-image:url('https://i.ytimg.com/vi/${esc(r.yt)}/hqdefault.jpg')" aria-label="Play video: ${esc(title)}"><span>▶</span></button>`;
  // Social short links (like vm.tiktok.com) cannot be shown: tell the owner how to fix it
  if (r.kind === 'link' && r.tip === 'social')
    return messageHtml('This is a <b>short link</b>, so it cannot play here.<br>Open the video in your <b>web browser</b>, copy the LONG link (TikTok: it has <b>/video/123456…</b>) and paste it in WORKS.', r.open);
  if (r.kind === 'image') return `<img src="${esc(r.src)}" alt="${esc(title)}" decoding="async" referrerpolicy="no-referrer">`;
  if (r.kind === 'video') return `<video controls playsinline preload="metadata" src="${esc(r.src)}"></video>`;
  if (r.kind === 'pdf')   return `<iframe src="${esc(r.src)}#view=FitH" title="${esc(title)}"></iframe>`;
  if (r.kind === 'embed') return frameHtml(r.src, title);
  if (r.kind === 'link')  return messageHtml('This link cannot be shown inside the page.<br>Press the button to open it.', r.open);
  return messageHtml('This link is empty or not allowed (only normal web links and your own files work).');
}

// Shows the loading circle until the media is ready
function watchLoad(box){
  const el = box.querySelector('img, video, iframe');
  if (!el) return;
  box.classList.add('loading');
  const stop = () => box.classList.remove('loading');
  el.addEventListener('load', stop, {once: true});
  el.addEventListener('loadeddata', stop, {once: true});
  el.addEventListener('error', stop, {once: true});
  setTimeout(stop, 12000);
}

function buildPage(w, p, index, total){

  // 1) Understand the link
  const hint    = p.as || w.type;
  const r       = resolveLink(p.file, hint);
  const isVideo = !!r.video || (hint === 'video' && (r.kind === 'video' || r.kind === 'embed'));

  // 2) Size, border, colour  (a page can override the work, the work overrides the default)
  const ratioKey = p.ratio || w.ratio || r.ratio || (isVideo ? 'v169' : (r.kind === 'embed' || r.kind === 'pdf') ? 'a4p' : 'auto');
  const R        = RATIOS[ratioKey] || RATIOS.auto;
  const useRatio = R.r && r.kind !== 'link' && r.kind !== 'bad';
  const border   = p.border || w.border || (isVideo ? (ratioKey === 'v916' ? 'phone-frame' : 'film-strip') : 'soft-shadow');
  const accent   = p.accent || w.accent || '#ffc857';
  const fit      = p.fit    || w.fit    || 'contain';

  // 3) Caption: name, and buttons
  const label = p.label || (total > 1 ? `Page ${index + 1} of ${total}` : 'Preview');
  const isWeb = u => /^https?:\/\//i.test(u || '');
  let links = '';
  if (isWeb(r.open)) links += `<a href="${esc(r.open)}" target="_blank" rel="noopener noreferrer">↗ Open original</a>`;
  if (r.dl)          links += `<a href="${esc(r.dl)}" ${isWeb(r.dl) ? '' : 'download '}target="_blank" rel="noopener noreferrer">⬇ Download</a>`;
  const tip = r.tip ? `<div class="vw-tip">${TIPS[r.tip]}</div>` : '';

  // 4) Put it all together
  const fig = document.createElement('figure');
  fig.className = `vw-page fr-${border}${useRatio ? ' ratio' : ''}`;
  fig.style.setProperty('--w', R.w + 'px');
  if (useRatio) fig.style.setProperty('--r', R.r);
  fig.style.setProperty('--accent', accent);
  fig.style.setProperty('--fit', fit);
  fig.innerHTML = `
    <div class="vw-frame"><div class="vw-media">${mediaHtml(r, w.title)}</div></div>
    <figcaption class="vw-cap">
      <span><b>${esc(label)}</b> · ${R.l} · ${BORDER_NAMES[border] || esc(border)}</span>
      <span class="vw-links">${links}</span>
    </figcaption>${tip}`;

  // 5) If a photo / video fails: use the second way, or show a clear message
  const box = fig.querySelector('.vw-media');
  watchLoad(box);
  const item = box.querySelector('img, video');
  if (item){
    item.addEventListener('error', () => {
      if (r.fallback){
        box.innerHTML = frameHtml(r.fallback, w.title);                 // show it in the safe frame instead
        watchLoad(box);
      } else {
        box.innerHTML = messageHtml(`File could not be loaded:<br><b>${esc(p.file)}</b><br>Check the file name / folder (assets/works/) or the link.`, isWeb(r.open) ? r.open : '');
      }
    }, {once: true});

    // A video that is alone on the page starts by itself (muted if the browser needs it)
    if (r.kind === 'video' && total === 1 && index === 0){
      item.autoplay = true;
      item.addEventListener('loadedmetadata', () => {
        item.play().catch(() => { item.muted = true; item.play().catch(() => {}); });
      }, {once: true});
    }
  }
  return fig;
}


/* ---------- 3.10  Open a design, close it, buttons ---------- */

// Open a design (all its pages are listed top to bottom)
function show(k){
  cur = (k + list.length) % list.length;
  const w  = WORKS[list[cur]];
  const ps = pagesOf(w);

  vpages.innerHTML = '';
  ps.forEach((p, i) => {
    try { vpages.appendChild(buildPage(w, p, i, ps.length)); }
    catch (err) {                                   // one bad page never breaks the others
      const f = document.createElement('figure');
      f.className = 'vw-page'; f.style.setProperty('--w', '560px');
      f.innerHTML = `<div class="vw-media">${messageHtml('This page could not be built. Check its link / file name in WORKS.')}</div>`;
      vpages.appendChild(f);
      console.error('Portfolio page error:', err);
    }
  });

  $('vw-k').textContent = (w.type === 'video' ? '🎬 Video' : '🎨 Design') + (list.length > 1 ? `  ·  ${cur + 1} / ${list.length}` : '');
  $('vw-h').textContent = w.title;
  $('vw-n').textContent = w.note;
  const first = resolveLink(ps[0].file, ps[0].as || w.type);
  $('vw-o').href = first.open || '#';
  $('vw-hint').style.display = ps.length > 1 ? 'block' : 'none';

  vw.classList.add('open');
  document.body.style.overflow = 'hidden';
  vsc.scrollTop = 0;
  $('vw-bar').style.width = '0';
  vsc.focus({preventScroll: true});
  startBg(w);

  // Pages fade in one by one while you scroll down
  if (vio) vio.disconnect();
  vio = new IntersectionObserver(es => es.forEach(x => {
    if (x.isIntersecting){ x.target.classList.add('in'); vio.unobserve(x.target); }
  }), {root: vsc, threshold: .08});
  vpages.querySelectorAll('.vw-page').forEach(el => vio.observe(el));

  // A work with ONE YouTube video starts playing at once (the visitor already clicked the card)
  const faces = vpages.querySelectorAll('.yt-face');
  if (faces.length === 1 && ps.length === 1) faces[0].click();
}

// Close the box (also stops any playing video)
function closeVw(){
  vpages.querySelectorAll('video').forEach(v => v.pause());
  vw.classList.remove('open');
  vpages.innerHTML = '';            // this also stops YouTube / Drive / Facebook players
  document.body.style.overflow = '';
  stopBg();
  if (vio){ vio.disconnect(); vio = null; }
}

// Click on a YouTube picture -> load the real player and play
document.addEventListener('click', e => {
  const b = e.target.closest && e.target.closest('.yt-face');
  if (!b) return;
  const box = b.parentElement;
  box.innerHTML = frameHtml(b.dataset.src + (b.dataset.src.includes('?') ? '&' : '?') + 'autoplay=1', b.dataset.title);
  watchLoad(box);                      // small loading circle
});

// Progress line while scrolling
vsc.addEventListener('scroll', () => {
  const max = vsc.scrollHeight - vsc.clientHeight;
  $('vw-bar').style.width = (max > 0 ? vsc.scrollTop / max * 100 : 0) + '%';
});

// Click a card: websites open in a new tab, everything else opens in the box
if (view) view.addEventListener('click', e => {
  const card = e.target.closest('.card'); if (!card) return;
  const w = WORKS[card.dataset.i];
  if (w.type === 'web'){
    const url = safeUrl(w.file);
    if (/^https?:\/\//i.test(url)) window.open(url, '_blank', 'noopener,noreferrer');
    return;
  }
  list = [...view.querySelectorAll('.card')]
           .filter(c => WORKS[c.dataset.i].type !== 'web')
           .map(c => +c.dataset.i);
  show(list.indexOf(+card.dataset.i));
});

$('vw-x').onclick  = closeVw;
$('vw-p').onclick  = $('vw-pv').onclick = () => show(cur - 1);
$('vw-nn').onclick = $('vw-nx').onclick = () => show(cur + 1);

// Keyboard: Esc = close, left / right arrows = previous / next design
document.addEventListener('keydown', e => {
  if (!vw.classList.contains('open')) return;
  if (e.key === 'Escape')     closeVw();
  if (e.key === 'ArrowLeft')  show(cur - 1);
  if (e.key === 'ArrowRight') show(cur + 1);
});


/* ---------- 3.11  CV, menu, contact form ---------- */

// CV: every link marked data-cv and the PDF viewer use CV_FILE
const cvUrl = CV_FILE + '?v=' + CV_VERSION;
document.querySelectorAll('[data-cv]').forEach(a => a.href = cvUrl);
if ($('cvframe')) $('cvframe').src = cvUrl + '#view=FitH';
if ($('tabs')) $('tabs').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  document.querySelectorAll('#tabs button').forEach(x => x.classList.toggle('on', x === b));
  document.querySelectorAll('.pane').forEach(p => p.classList.toggle('on', p.id === b.dataset.p));
});

// Mobile menu button
if ($('burger')) $('burger').onclick = () => document.querySelector('nav ul').classList.toggle('open');
document.querySelectorAll('nav ul a').forEach(a => a.onclick = () => document.querySelector('nav ul').classList.remove('open'));

// Contact form: opens WhatsApp with the message ready, then shows the Thank-you section
if ($('form')) $('form').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target;
  const text = `Hello Ruviru, I am ${f.name.value}.\n\n${f.message.value}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  f.reset();
  if ($('thx-h')) $('thx-h').textContent = 'Thank you! Almost done';
  if ($('thx-p')) $('thx-p').textContent = 'WhatsApp opened with your message. Press send there and I will reply soon.';
  if ($('thanks')) $('thanks').scrollIntoView({behavior: 'smooth'});
});

// Scroll reveal for the page sections and skill bars
const io = new IntersectionObserver(es => es.forEach(x => {
  if (!x.isIntersecting) return;
  x.target.classList.add('in');
  x.target.querySelectorAll('.bar i').forEach(b => b.style.width = b.dataset.w + '%');
  io.unobserve(x.target);
}), {threshold: .2});
document.querySelectorAll('.rv').forEach(el => io.observe(el));


/* =====================================================================
   ACHIEVEMENTS + GOALS  (cards in the CV > Summary tab)
   ONE card at a time:  text on the LEFT (types itself),  picture on the RIGHT.
   You only edit the 2 lists (ACHIEVEMENTS and GOALS) and the 3 numbers under them.
   ===================================================================== */
(function () {

  /* ---------- YOUR ACHIEVEMENTS: one line = one slide ----------
     tag   small word on top          title / text  the words that type on the left
     img   your picture (certificate or photo) shown on the RIGHT. Put the file in assets/achievements/
           (small .jpg, under 500 KB).   Example:  img:"assets/achievements/prayama.jpg"
           OR paste a LINK instead of a file:  img:"https://drive.google.com/file/d/XXXX/view?usp=sharing"
           (Google Drive "Anyone with the link", Dropbox, or any direct .jpg/.png link all work).
           No picture yet? Write img:""  and the colour + icon shows instead.
     icon  emoji          c  two background colours
     TO ADD A NEW ONE: copy one line, change the words, put a comma after the line above it.   */
  const ACHIEVEMENTS = [
    {tag:"🏆 Award", title:"Best Project for Hunger", text:"Prayama 2.0, Leo Club of University of Kelaniya, Term 2024/25. I worked as PR & Marketing Coordinator.", img:"assets/achievements/BP01.png", icon:"🏆", c:["#ffc857","#b71c1c"]},
    {tag:"⭐ Recognition", title:"LB Member of the Month: December", text:"Leo Club of University of Kelaniya, Term 2025/26.", img:"", icon:"⭐", c:["#6a1b9a","#ff3d6e"]},
    {tag:"🎓 Certificate", title:"Graphic Design", text:"ICT Centre, University of Kelaniya, Jul 2026.", img:"", icon:"🎨", c:["#0288d1","#00695c"]},
    {tag:"🎓 Certificate", title:"Information Technology", text:"ICT Centre, University of Kelaniya, Nov 2025.", img:"", icon:"💻", c:["#283593","#00838f"]},
    {tag:"👏 Appreciation", title:"Certificate of Appreciation: LED KLN", text:"Organizing Team, University of Kelaniya.", img:"", icon:"👏", c:["#2e7d32","#ffd54f"]},
    {tag:"🎤 Leadership", title:"Leadership Conference 2025", text:"Certificate of Participation.", img:"", icon:"🎤", c:["#ad1457","#ffc857"]}
  ];

  /* ---------- WHAT I WANT TO ACHIEVE: change the words to your own goals ---------- */
  const GOALS = [
    {title:"B.B.Mgt Digital Marketing (Honours)", text:"Finish my degree at the University of Kelaniya in 2028.",img:"assets/achievements/DH.png", icon:"🎓", c:["#283593","#ad1457"]},
    {title:"Diploma in ICT (DIT)", text:"Complete my diploma at IMBS Green Campus.", img:"assets/achievements/IMBS.png", icon:"💻", c:["#00838f","#283593"]},
    {title:"Grow in digital marketing", text:"Use my design, video and leadership skills in the digital marketing industry.",img:"assets/achievements/DM.png", icon:"📈", c:["#2e7d32","#ffd54f"]},
    {title:"Lead bigger projects", text:"Serve as Co-Director of Clean Water & Energy Conservation Avenue, 2026/27.", img:"assets/achievements/BP03.png", icon:"🌍", c:["#0288d1","#00695c"]}
  ];

  const SECONDS    = 5;                    // seconds a slide stays AFTER its words finished typing
  const TITLE_TYPE = 45;                   // typing speed of the title   (milliseconds per letter, smaller = faster)
  const TEXT_TYPE  = 18;                   // typing speed of the text under it
  const ENTER = ['zoom', 'flip', 'slide', 'reveal', 'drop'];   // ways the picture COMES (names from the CSS)
  const LEAVE = ['fade', 'left', 'zoom', 'spin'];              // ways the picture GOES (names from the CSS)

  /* ---------- THE CODE (no need to change) ---------- */
  const REDUCED = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const wait = ms => new Promise(r => setTimeout(r, ms));
  const pad  = n => String(n).padStart(2, '0');
  const other = (list, not) => { let v; do { v = pick(list); } while (list.length > 1 && v === not); return v; };   // random, never the same twice

  // The picture on the right: colour + icon first, your image on top (blurred copy behind, so nothing is cut off)
  function drawPic(box, it) {
    box.innerHTML = '';
    const st = document.createElement('div'); st.className = 'pic-stage';
    const ic = document.createElement('span'); ic.className = 'pic-ico'; ic.textContent = it.icon; st.appendChild(ic);
    if (it.img) ['pic-bg', 'pic-fg'].forEach(cls => {
      const im = new Image(); im.className = cls; im.alt = cls === 'pic-fg' ? it.title : '';
      im.referrerPolicy = 'no-referrer';                                         // needed for some link hosts (Google Drive)
      im.onerror = () => st.querySelectorAll('img').forEach(x => x.remove());   // picture file / link missing -> the icon stays
      im.src = enc(imgUrl(it.img)); st.appendChild(im);                          // img can be a file path OR a link
    });
    const sh = document.createElement('span'); sh.className = 'pic-shine'; st.appendChild(sh);
    box.appendChild(st);
    ['tl', 'tr', 'bl', 'br'].forEach(c => { const k = document.createElement('i'); k.className = 'pic-c ' + c; box.appendChild(k); });
  }

  // Keeps the space of the full text, so the card does not jump while letters appear
  function reserve(el, str) {
    el.classList.remove('typing'); el.style.minHeight = '';
    el.textContent = str; el.style.minHeight = el.offsetHeight + 'px'; el.textContent = '';
  }

  // The typing effect: one letter at a time. Stops by itself when a newer slide starts (id no longer matches)
  async function typeInto(el, str, speed, id, isOld) {
    if (REDUCED) { el.textContent = str; return; }
    const letters = Array.from(str);
    el.classList.add('typing');
    for (let k = 1; k <= letters.length; k++) {
      if (isOld(id)) return;
      el.textContent = letters.slice(0, k).join('');
      await wait(speed + (/[,.:]/.test(letters[k - 1]) ? 110 : 0));   // a short rest after , . :
    }
    el.classList.remove('typing');
  }

  // One card with its own timer, arrows and dots
  function rotator(p, items) {
    const card = $(p + 'Card'); if (!card || !items.length) return;
    const el = {tag: $(p + 'Tag'), count: $(p + 'Count'), title: $(p + 'Title'), text: $(p + 'Text'),
                pic: $(p + 'Pic'), time: $(p + 'Time'), prev: $(p + 'Prev'), next: $(p + 'Next'), dots: $(p + 'Dots')};
    let now = -1, token = 0, leaving = false, typed = false, paused = false, inView = false, started = false, elapsed = 0, lastFx = '';
    const isOld = id => id !== token;

    el.dots.innerHTML = items.map((_, k) => `<button type="button" aria-label="Show ${k + 1}"></button>`).join('');
    el.dots.querySelectorAll('button').forEach((d, k) => d.onclick = () => { if (k !== now) go(k); });
    el.prev.onclick = () => go((now - 1 + items.length) % items.length);
    el.next.onclick = () => go((now + 1) % items.length);

    async function go(i) {
      if (leaving) return;
      const id = ++token;
      typed = false; elapsed = 0; el.time.style.width = '0';

      // GOING: the old slide leaves first
      if (now >= 0 && !REDUCED) {
        leaving = true;
        card.dataset.out = other(LEAVE, card.dataset.out);
        card.classList.add('is-out');
        await wait(560);
        leaving = false;
        if (isOld(id)) return;
      }

      // COMING: the new slide arrives
      card.classList.remove('is-out');
      now = i; const it = items[i];
      card.style.setProperty('--a1', it.c[0]); card.style.setProperty('--a2', it.c[1]);
      lastFx = other(ENTER, lastFx); card.dataset.fx = lastFx;
      drawPic(el.pic, it);
      if (el.tag && it.tag) el.tag.textContent = it.tag;
      el.count.innerHTML = `<b>${pad(i + 1)}</b> / ${pad(items.length)}`;
      el.dots.querySelectorAll('button').forEach((d, k) => d.classList.toggle('on', k === i));

      // HAPPENING: the words type themselves while the picture slowly moves
      reserve(el.title, it.title); reserve(el.text, it.text);
      await typeInto(el.title, it.title, TITLE_TYPE, id, isOld);
      if (isOld(id)) return;
      await wait(150);
      await typeInto(el.text, it.text, TEXT_TYPE, id, isOld);
      if (isOld(id)) return;
      typed = true; elapsed = 0;
    }

    // Timer: counts only when the words are finished, the mouse is away, the tab is open and the card is on screen
    setInterval(() => {
      if (!typed || paused || leaving || document.hidden || !inView || card.offsetParent === null) return;
      elapsed += 0.1;
      el.time.style.width = Math.min(100, elapsed / SECONDS * 100) + '%';
      if (elapsed >= SECONDS) go(other(items.map((_, k) => k), now));
    }, 100);

    card.addEventListener('mouseenter', () => paused = true);
    card.addEventListener('mouseleave', () => paused = false);
    card.addEventListener('focusin',    () => paused = true);
    card.addEventListener('focusout',   () => paused = false);

    // The first slide starts when the card is really seen (so the visitor sees the first animation)
    new IntersectionObserver(es => es.forEach(x => {
      inView = x.isIntersecting;
      if (inView && !started) { started = true; go(Math.floor(Math.random() * items.length)); }
    }), {threshold: .25}).observe(card);
  }

  rotator('ach',  ACHIEVEMENTS);
  rotator('goal', GOALS);
})();


/* =====================================================================
   FOOTER  (year, WhatsApp links, back-to-top buttons)
   ===================================================================== */
(function () {
  document.querySelectorAll('[data-year]').forEach(n => n.textContent = new Date().getFullYear());
  document.querySelectorAll('[data-wa]').forEach(a => a.href = 'https://wa.me/' + WHATSAPP_NUMBER);
  const up = $('toTop'), top = () => window.scrollTo({top: 0, behavior: 'smooth'});
  if ($('toTopBtn')) $('toTopBtn').onclick = top;
  if (!up) return;
  up.onclick = top;
  const check = () => up.classList.toggle('show', window.scrollY > 700);
  addEventListener('scroll', check, {passive: true}); check();
})();
