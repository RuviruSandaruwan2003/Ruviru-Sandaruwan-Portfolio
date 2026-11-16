/* =====================================================
   SCRIPT.JS  -  EDIT ONLY THE 3 BLUE BLOCKS BELOW
   1) ROLES   2) SKILLS   3) WORKS
   ===================================================== */

/* 00) WHATSAPP: messages from the contact form go to this number.
   Use country code + number, no + and no spaces. (Sri Lanka 077 427 8450 = 94774278450) */
const WHATSAPP_NUMBER = "94774278450";

/* 0) CV FILE: to update your CV, replace the PDF in assets/ with the new one
   (same name) OR change this path. Change CV_VERSION (1,2,3...) so browsers show the new file. */
const CV_FILE = "assets/Ruviru_Sandaruwan_CV.pdf";
const CV_VERSION = 1;

/* 0b) PHOTOS: pictures in the home-page frame. They change every few seconds.
   Add as many as you like: put the file in assets/img/ and add its path here. */
const PHOTOS = ["assets/img/ruviru.jpg", "assets/img/ruviru-2.jpg"];
const PHOTO_SECONDS = 4;

/* 1) ROLES: words that type on the home page. Add or remove lines. */
const ROLES = ["Digital Marketing Undergraduate", "Graphic Designer", "Video Editor", "PR & Marketing Coordinator"];

/* 2) SKILLS: [name, percent]. Change the numbers any time. */
const SKILLS = [["Graphic Design",90],["Video Editing",88],["Adobe Photoshop",90],["WordPress & HTML",75],["MS Office",95],["Leadership & Communication",92]];

/* 3) WORKS: ONE LINE = ONE WORK. How to add a new work:
   - type  : "post" (image), "video" (mp4) or "web" (website link)
   - title : name shown on the card
   - note  : small text under the title
   - file  : path to your file. Put images/videos in assets/works/
             e.g. "assets/works/flyer1.jpg"  (for "web" type put the website URL)
   - icon  : emoji shown until you add a real thumbnail
   - thumb : (optional) small image shown on the card
   Names below come from your "Design Final Output" folder.     */
const WORKS = [
  {type:"post", title:"Meetup Flyer", note:"Event flyer", file:"assets/works/2.png", icon:"🎨", c:["#ff3d6e","#6a1b9a"]},
  {type:"post", title:"Clean Water & Energy Avenue", note:"Leo Club campaign post", file:"assets/works/Clean Water and Energy Conservation avenue.png", icon:"💧", c:["#0288d1","#00695c"]},
  {type:"post", title:"Leadership Body Announcement", note:"Countdown series (Open Soon / Open Now / Closed)", file:"assets/works/2.png", icon:"📣", c:["#ffc857","#b71c1c"]},
  {type:"post", title:"Invitation", note:"Formal invitation design", file:"assets/works/Invitation.png", icon:"💌", c:["#283593","#ad1457"]},
  {type:"post", title:"Wedding Card (Sinhala)", note:"Print-ready card", file:"assets/works/weding Card Sinhala Final.jpg", icon:"💍", c:["#8d6e63","#ffb74d"]},
  {type:"post", title:"Nutrition Program Flyer", note:"Today / Tomorrow / Happening series", file:"assets/works/Final Today.jpg", icon:"🥗", c:["#2e7d32","#ffd54f"]},
  {type:"post", title:"Midori Jelly Label", note:"Product label and packaging design", file:"assets/works/Final NDP Under Lable.jpg", icon:"🍃", c:["#1b5e20","#9ccc65"]},
  {type:"post", title:"Polo T-shirt Mockup", note:"Free Polo Strip Collar mockup", file:"assets/works/Free Polo Strip Collar Mockup Template.jpg", icon:"👕", c:["#1a237e","#e53935"]},
  {type:"video", title:"Ruviru BBV", note:"Brand video", file:"assets/works/30 min Loop .mp4", icon:"🎬", c:["#6a1b9a","#ff3d6e"]},
  {type:"video", title:"Entrepreneurship & Innovation", note:"Promo video", file:"assets/works/Audition 2.mp4", icon:"💡", c:["#00838f","#283593"]},
  {type:"video", title:"Coming Soon Teaser", note:"Event teaser video", file:"assets/works/Final Coming Soon Video.mp4", icon:"⏳", c:["#212121","#ff3d6e"]},
  {type:"video", title:"Stylish Maketer First Recap", note:"Event recap video", file:"assets/works/Stylish Maketer First Recap Video.mp4", icon:"🎞️", c:["#4a148c","#ffc857"]},
  {type:"web", title:"Website Project 1", note:"Replace with your website link", file:"https://example.com", icon:"🌐", c:["#0d47a1","#00bcd4"]},
  {type:"web", title:"Website Project 2", note:"Replace with your website link", file:"https://example.com", icon:"💻", c:["#37474f","#ff3d6e"]}
];

/* ------------- CODE BELOW: you do not need to change it ------------- */

// Typing effect on the home page (types a word, waits, deletes it, next word)
(function(){
  const el=document.getElementById('role'); let w=0,i=0,del=false;
  (function tick(){
    const word=ROLES[w];
    el.textContent=word.slice(0,i);
    if(!del&&i===word.length){del=true;return setTimeout(tick,1400)}
    if(del&&i===0){del=false;w=(w+1)%ROLES.length}
    i+=del?-1:1; setTimeout(tick,del?40:80);
  })();
})();

// Count-up numbers on the home page
document.querySelectorAll('[data-count]').forEach(n=>{
  const to=+n.dataset.count; let c=0; const s=Math.ceil(to/40);
  const t=setInterval(()=>{c=Math.min(c+s,to);n.textContent=c+(c===to&&n.hasAttribute('data-plus')?'+':'');if(c===to)clearInterval(t)},40);
});

// Skill bars: built from SKILLS, they fill when you scroll to them
const sk=document.getElementById('skills');
sk.innerHTML=SKILLS.map(([n,p])=>`<div><span>${n}<b>${p}%</b></span><div class="bar"><i data-w="${p}"></i></div></div>`).join('');

// Work cards: built from WORKS
const grid=document.getElementById('grid');
grid.innerHTML=WORKS.map((w,i)=>`
  <button class="card" data-t="${w.type}" data-i="${i}">
    <div class="thumb" style="--c1:${w.c[0]};--c2:${w.c[1]}">${w.thumb?`<img src="${w.thumb}" alt="${w.title}" loading="lazy">`:w.icon}</div>
    <h3>${w.title}</h3><p>${w.note}</p>
  </button>`).join('');

// Filter buttons (All / Posts / Videos / Websites)
document.getElementById('filters').addEventListener('click',e=>{
  const b=e.target.closest('button'); if(!b)return;
  document.querySelectorAll('#filters button').forEach(x=>x.classList.toggle('on',x===b));
  grid.querySelectorAll('.card').forEach(c=>c.classList.toggle('hide',b.dataset.f!=='all'&&c.dataset.t!==b.dataset.f));
});

// Pop-up viewer: framed image/video, caption below, previous / next / download icons
const lb=document.getElementById('lb'),lbc=document.getElementById('lbc'),$=id=>document.getElementById(id);
let cur=0,list=[];
function show(k){
  cur=(k+list.length)%list.length; const w=WORKS[list[cur]];
  lbc.innerHTML=w.type==='video'?`<video src="${encodeURI(w.file)}" controls autoplay></video>`:`<img src="${encodeURI(w.file)}" alt="${w.title}">`;
  $('lbk').textContent=w.type==='video'?'🎬 Video':'🎨 Design'; $('lbh').textContent=w.title; $('lbt').textContent=w.note;
  $('lbd').href=encodeURI(w.file); lb.classList.add('open');
}
const close=()=>{lb.classList.remove('open');lbc.innerHTML=''};
grid.addEventListener('click',e=>{
  const c=e.target.closest('.card'); if(!c)return; const w=WORKS[c.dataset.i];
  if(w.type==='web'){window.open(w.file,'_blank','noopener');return}
  list=[...grid.querySelectorAll('.card:not(.hide)')].filter(x=>WORKS[x.dataset.i].type!=='web').map(x=>+x.dataset.i);
  show(list.indexOf(+c.dataset.i));
});
$('lbp').onclick=()=>show(cur-1); $('lbn').onclick=()=>show(cur+1);
lb.addEventListener('click',e=>{if(e.target===lb||e.target.classList.contains('x'))close()});
document.addEventListener('keydown',e=>{if(!lb.classList.contains('open'))return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)});

// Home photo frame: builds slides from PHOTOS and fades to the next one automatically
const sl=$('slider'),dots=$('dots');
sl.innerHTML=PHOTOS.map((p,i)=>`<img class="slide${i?'':' on'}" src="${p}" alt="Ruviru Sandaruwan photo ${i+1}">`).join('');
dots.innerHTML=PHOTOS.map((p,i)=>`<i class="${i?'':'on'}"></i>`).join(''); let ph=0;
if(PHOTOS.length>1)setInterval(()=>{
  const s=sl.children,d=dots.children; s[ph].classList.remove('on');d[ph].classList.remove('on');
  ph=(ph+1)%PHOTOS.length; s[ph].classList.add('on');d[ph].classList.add('on');
},PHOTO_SECONDS*1000);

// CV: every link marked data-cv and the PDF viewer use CV_FILE
const cvUrl=CV_FILE+'?v='+CV_VERSION;
document.querySelectorAll('[data-cv]').forEach(a=>a.href=cvUrl);
$('cvframe').src=cvUrl+'#view=FitH';
$('tabs').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;
  document.querySelectorAll('#tabs button').forEach(x=>x.classList.toggle('on',x===b));
  document.querySelectorAll('.pane').forEach(p=>p.classList.toggle('on',p.id===b.dataset.p))});

// Mobile menu button
$('burger').onclick=()=>document.querySelector('nav ul').classList.toggle('open');
document.querySelectorAll('nav ul a').forEach(a=>a.onclick=()=>document.querySelector('nav ul').classList.remove('open'));

// Contact form: opens WhatsApp with the typed message ready, then shows the Thank-you section
$('form').addEventListener('submit',e=>{
  e.preventDefault(); const f=e.target;
  const text=`Hello Ruviru, I am ${f.name.value}.\n\n${f.message.value}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,'_blank','noopener');
  f.reset(); $('thx-h').textContent='Thank you! Almost done';
  $('thx-p').textContent='WhatsApp opened with your message. Press send there and I will reply soon.';
  $('thanks').scrollIntoView({behavior:'smooth'});
});

// Scroll reveal: headings fade in once, skill bars fill
const io=new IntersectionObserver(es=>es.forEach(x=>{
  if(!x.isIntersecting)return; x.target.classList.add('in');
  x.target.querySelectorAll('.bar i').forEach(b=>b.style.width=b.dataset.w+'%'); io.unobserve(x.target);
}),{threshold:.2});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
