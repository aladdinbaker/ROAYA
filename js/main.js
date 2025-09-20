/* main.js - EduPro demo interactions (vanilla + jQuery) */

const COURSES = [
  {id:'c1', title:'PHP - For beginner', author:'Aladdin Baker', category:'التطوير', price:'Free', level:'مبتدأ', duration:'3h', img:'images/phpicon.png', videos:['Intro','Layout & Grid','Flexbox'], titleAr:'أساسيات PHP', descAr:'تعلم تطوير مواقع الويب خطوة بخطوة.'},
  {id:'c2', title:'JavaScript Essentials', author:'Aladdin Baker', category:'التطوير', price:'$19', level:'مبتدأ', duration:'6h', img:'images/js.jpg', videos:['Syntax','DOM Manipulation','ES6+'], titleAr:'أساسيات JavaScript', descAr:'تعلم تطوير مواقع الويب خطوة بخطوة.'},
  {id:'c3', title:'Python for Data Science', author:'Aladdin Baker', category:'علم البيانات', price:'$29', level:'متوسط', duration:'10h', img:'images/py_data.jpg', videos:['Numpy','Pandas','Visualization'], titleAr:'أساسيات علم البيانات', descAr:'تعلم اساسيات علم البيانات خطوة بخطوة.'},
  {id:'c4', title:'UI/UX Design Fundamentals', author:'Aladdin Baker', category:'التصميم', price:'$24', level:'مبتدأ', duration:'5h', img:'images/ui_ux.jpg', videos:['Design Basics','Wireframing','Prototyping'], titleAr:'أساسيات التصميم UX/UI', descAr:'تعلم اساسيات التصميم خطوة بخطوة.'}
,

  {id:'p1', category:'البرمجة', title:'Python Basics', author:'Aladdin Baker', duration:'8h', level:'مبتدأ', price:'Free', img:'images/pythobicon.png', videos:['Intro to Python','Variables & Types','Loops & Conditions'], videoLinks:['https://www.youtube.com/watch?v=_uQrJ0TkZlc','https://www.youtube.com/watch?v=rfscVS0vtbw','https://www.youtube.com/watch?v=8DvywoWv6fI'], titleAr:'أساسيات بايثون', descAr:'تعلم أساسيات لغة بايثون خطوة بخطوة.'},
  {id:'p2', category:'البرمجة', title:'Java Programming', author:'Aladdin Baker', duration:'10h', level:'مبتدأ', price:'Free', img:'images/javaicon.png', videos:['Java Intro','OOP Basics','Collections'], videoLinks:['https://www.youtube.com/watch?v=grEKMHGYyns','https://www.youtube.com/watch?v=eIrMbAQSU34','https://www.youtube.com/watch?v=HGgdc6eQyS8'], titleAr:'برمجة جافا', descAr:'ابدأ البرمجة الكائنية باستخدام Java.'},
  {id:'p3', category:'البرمجة', title:'HTML & CSS', author:'Aladdin Baker', duration:'6h', level:'مبتدأ', price:'Free', img:'images/htmlicon.png', videos:['HTML Basics','CSS Layouts','Project'], videoLinks:['https://www.youtube.com/watch?v=mU6anWqZJcc','https://www.youtube.com/watch?v=1Rs2ND1ryYc','https://www.youtube.com/watch?v=pQN-pnXPaVg'], titleAr:'HTML & CSS', descAr:'تعلم بناء صفحات الويب باستخدام HTML و CSS.'},
  {id:'e1', category:'اللغةالأنجليزية', title:'English for Beginners', author:'Aladdin Baker', duration:'7h', level:'مبتدأ', price:'Free', img:'images/beginner.jpg', videos:['Vocabulary','Daily Phrases','Short Dialogues'], videoLinks:['https://www.youtube.com/watch?v=HfYh8FJY7pY','https://www.youtube.com/watch?v=2oKXs9U8t3Q','https://www.youtube.com/watch?v=ox8Zs0L1Rjw'], titleAr:'أساسيات الإنجليزية', descAr:'ابدأ بتعلم أساسيات اللغة الإنجليزية.'},
  {id:'e1', category:'اللغةالأنجليزية', title:'English Basics', author:'Aladdin Baker', duration:'7h', level:'مبتدأ', price:'Free', img:'images/basic_en.jpg', videos:['Vocabulary','Daily Phrases','Short Dialogues'], videoLinks:['https://www.youtube.com/watch?v=HfYh8FJY7pY','https://www.youtube.com/watch?v=2oKXs9U8t3Q','https://www.youtube.com/watch?v=ox8Zs0L1Rjw'], titleAr:'أساسيات الإنجليزية', descAr:'ابدأ بتعلم أساسيات اللغة الإنجليزية.'},
  {id:'e2', category:'اللغةالأنجليزية', title:'English Conversation', author:'Aladdin Baker', duration:'9h', level:'مبتدأ', price:'Free', img:'images/conversation.jpg', videos:['Travel','Restaurant & Shopping','Fluency'], videoLinks:['https://www.youtube.com/watch?v=nl1z9wjZ8hE','https://www.youtube.com/watch?v=6p9Il_j0zjc','https://www.youtube.com/watch?v=HTpD0ec8l8c'], titleAr:'محادثة إنجليزية', descAr:'طوّر مهارات المحادثة اليومية.'},
  {id:'n1', category:'الشبكات', title:'Networking Fundamentals', author:'Aladdin Baker', duration:'8h', level:'مبتدأ', price:'Free', img:'images/network_fundmental.jpg', videos:['Intro to Networking','OSI Model','TCP/IP'], videoLinks:['https://www.youtube.com/watch?v=qiQR5rTSshw','https://www.youtube.com/watch?v=vv4y_uOneC0','https://www.youtube.com/watch?v=UDM5G8E_Z1Y'], titleAr:'أساسيات الشبكات', descAr:'تعرّف على مفاهيم الشبكات الأساسية.'},
  {id:'n2', category:'الشبكات', title:'CCNA Basics', author:'Aladdin Baker', duration:'10h', level:'مبتدأ', price:'Free', img:'images/ccn_basic.jpg', videos:['Intro CCNA','Routing & Switching','IP Addressing'], videoLinks:['https://www.youtube.com/watch?v=8zXz3XjC3sE','https://www.youtube.com/watch?v=FkXpsH4cJdA','https://www.youtube.com/watch?v=ajhC5-0jJ8A'], titleAr:'مبادئ CCNA', descAr:'ابدأ تعلم شهادة Cisco CCNA من البداية.'},
];

/* Utilities */
function $(s){return document.querySelector(s)}
function $all(s){return Array.from(document.querySelectorAll(s))}

function showToast(title, message, type='info'){
  // create bootstrap-like toast
  const id = 'toast-'+Date.now();
  const container = document.getElementById('toastContainer');
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `
  <div id="${id}" class="toast align-items-center show" role="alert" aria-live="assertive" aria-atomic="true" style="position:fixed;right:20px;bottom:20px;z-index:99999;min-width:260px;">
    <div class="d-flex ${type==='error'?'bg-danger text-white':'bg-white'} p-2 shadow-sm" style="border-radius:8px;">
      <div class="toast-body small"><strong>${title}</strong><div class="mt-1 text-muted">${message}</div></div>
      <button type="button" class="btn-close btn-close-white ms-2 m-auto" aria-label="Close"></button>
    </div>
  </div>`;
  container.appendChild(wrapper);
  wrapper.querySelector('.btn-close').addEventListener('click', ()=> wrapper.remove());
  setTimeout(()=>{ wrapper.remove(); }, 4200);
}

/* Render previews and grids */
function renderCoursesPreview(){
  const el = $('#coursesPreview');
  if(!el) return;
  el.innerHTML = '';
  COURSES.slice(0,3).forEach(c=>{
    const col = document.createElement('div');
    col.className = 'col-md-4';
    col.innerHTML = `
      <div class="card course">
        <div class="position-relative">
          <img src="${c.img}" class="thumb" alt="${c.title}">
          <div class="course-badges">${c.level}</div>
        </div>
        <div class="card-body">
          <h5 class="card-title mb-1">${c.title}</h5>
          <p class="small text-muted mb-2">by ${c.author} • ${c.duration}</p>
          <div class="d-flex justify-content-between align-items-center">
            <button class="btn btn-outline-primary btn-sm btn-view" data-id="${c.id}">التفاصيل</button>
            <div class="text-end">
              <div class="fw-bold">${c.price}</div>
            </div>
          </div>
        </div>
      </div>`;
    el.appendChild(col);
  });
  // attach listeners
  $all('.btn-view').forEach(b=>b.addEventListener('click', (e)=> openCourseModal(e.currentTarget.dataset.id)));
  $all('.card.course').forEach(card=>card.addEventListener('click', (e)=> openCourseModal(e.currentTarget.dataset.id)));
}

function renderCoursesGrid(){
  const el = $('#coursesGrid');
  if(!el) return;
  el.innerHTML = '';
  const filter = $('#filterCategory') ? $('#filterCategory').value : '';
  const list = filter ? COURSES.filter(c=>c.category===filter) : COURSES;
  list.forEach(c=>{
    const col = document.createElement('div');
    col.className = 'col-sm-6 col-lg-4';
    col.innerHTML = `
      <div class="card course h-100" data-id="${c.id}">
        <div class="position-relative">
          <img src="${c.img}" class="thumb" alt="${c.title}">
          <div class="course-badges">${c.level}</div>
        </div>
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${c.title}</h5>
          <p class="small text-muted mb-3">by ${c.author} • ${c.duration}</p>
          <div class="mt-auto d-flex justify-content-between align-items-center">
            <div><button class="btn btn-sm btn-outline-primary btn-view" data-id="${c.id}">التفاصيل</button></div>
            <div class="text-end">
              <div class="fw-bold">${c.price}</div>
            </div>
          </div>
        </div>
      </div>`;
    el.appendChild(col);
  });
  $all('.btn-view').forEach(b=>b.addEventListener('click', (e)=> openCourseModal(e.currentTarget.dataset.id)));
}

/* Course modal + enrollment */
let currentCourseId = null;
function openCourseModal(id){
  /* Assistant: ensure currentCourseId */ window.currentCourseId = id; const course = COURSES.find(c=>c.id===id);
  if(!course) return;
  currentCourseId = id;
  const title = course.titleAr || course.title || 'الكورس';
  const desc  = course.descAr  || course.desc  || 'لا يوجد وصف لهذا الكورس حالياً.';

  const modalEl = document.getElementById('confirmEnrollModal');
  if(!modalEl){ console.warn('confirmEnrollModal not found'); return; }

  const modalTitle = modalEl.querySelector('.modal-title') || document.getElementById('confirmEnrollTitle');
  const modalText  = document.getElementById('confirmEnrollText') || modalEl.querySelector('.modal-body');

  if (modalTitle) modalTitle.textContent = title;
  if (modalText){
    modalText.innerHTML = `
      <div class="text-start" dir="rtl">
        <p class="mb-2">${desc}</p>
        <ul class="list-inline small text-muted mb-0">
          <li class="list-inline-item">المدّة: ${course.duration || '-'}</li>
          <li class="list-inline-item">المستوى: ${course.level || '-'}</li>
          <li class="list-inline-item">السعر: ${course.price || '-'}</li>
        </ul>
      </div>`;
  }

  const btn = document.getElementById('confirmEnrollBtn') || modalEl.querySelector('.btn.btn-primary');
  if (btn && !btn._wired){
    btn.addEventListener('click', function(){
      try{ enrollCurrentCourse(); }catch(e){ console.error(e); }
    });
    btn._wired = true;
  }

  const modal = new bootstrap.Modal(modalEl);
  modal.show();
}


/* Enrollment action */

function enrollCurrentCourse(){
  if(!currentCourseId) return;
  try{
    const key = 'enrolled';
    const arr = JSON.parse(localStorage.getItem(key)||'[]');
    if(!arr.includes(currentCourseId)) arr.push(currentCourseId);
    localStorage.setItem(key, JSON.stringify(arr));
  }catch(e){ console.error(e); }
  // optional toast
  try{ showToast('يتم الأشتراك','لقد اشتركت في الكرس بنجاح'); }catch(e){}
  // redirect with id as query fallback so My Courses can add if needed
  const url = new URL('my-courses.html', window.location.href);
  url.searchParams.set('just_enrolled', currentCourseId);
  window.location.href = url.toString();
}


/* My courses rendering */
function renderMyCourses(){
  const el = $('#myCoursesGrid');
  if(!el) return;
  el.innerHTML = '';
  const enrolled = JSON.parse(localStorage.getItem('enrolled')||'[]');
  if(enrolled.length===0){
    el.innerHTML = `<div class="col-12"><div class="alert alert-info">You have no enrolled courses yet. Browse <a href="courses.html">courses</a>.</div></div>`;
    return;
  }
  enrolled.forEach(id=>{
    const c = COURSES.find(x=>x.id===id);
    if(!c) return;
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4';
    col.innerHTML = `
      <div class="card h-100">
        <img src="${c.img}" class="thumb" alt="${c.title}">
        <div class="card-body d-flex flex-column">
          <h5>${c.title}</h5>
          <p class="small text-muted mb-3">by ${c.author}</p>
          <div class="mt-auto d-flex justify-content-between">
            <button class="btn btn-primary btn-sm btn-open-videos" data-id="${c.id}">فتح الفيديوهات </button>
            <button class="btn btn-outline-danger btn-sm btn-leave" data-id="${c.id}">مغادرة</button>
          </div>
        </div>
      </div>`;
    el.appendChild(col);
  });
  $all('.btn-open-videos').forEach(b=>b.addEventListener('click', (e)=> openVideosModal(e.currentTarget.dataset.id)));
  $all('.btn-leave').forEach(b=>b.addEventListener('click', (e)=> {
    const id = e.currentTarget.dataset.id;
    let arr = JSON.parse(localStorage.getItem('enrolled')||'[]');
    arr = arr.filter(x=>x!==id);
    localStorage.setItem('enrolled', JSON.stringify(arr));
    renderMyCourses();
    showToast('Left course','You have been removed from the course.');
  }));
}

/* Videos modal */


function openVideosModal(id){
  const course = COURSES.find(c=>c.id===id);
  if(!course) return;
  const title = course.titleAr || course.title || 'الدروس';
  const body = document.getElementById('videosModalBody');
  const titleEl = document.getElementById('videosModalTitle');
  if (titleEl) titleEl.textContent = title + ' — الدروس';
  if (!body) return;
  body.innerHTML = '';

  const list = document.createElement('div');
  list.className = 'list-group';

  const titles = Array.isArray(course.videos) ? course.videos : [];
  const links  = Array.isArray(course.videoLinks) ? course.videoLinks : [];

  titles.forEach((t,i)=>{
    const url = links[i] ? links[i] : `https://www.youtube.com/results?search_query=${encodeURIComponent((course.titleAr||course.title||'') + ' ' + t)}`;
    const item = document.createElement('div');
    item.className = 'list-group-item d-flex flex-column gap-2';

    const row = document.createElement('div');
    row.className = 'd-flex align-items-center justify-content-between flex-wrap';
    row.innerHTML = `<div class="fw-bold" dir="rtl">الدرس ${i+1}: ${t}</div>
                     <div class="d-flex gap-2">
                       
                       <button class="btn btn-sm btn-primary" type="button">تشغيل هنا</button>
                     </div>`;

    const playerWrap = document.createElement('div');
    playerWrap.className = 'mt-2 d-none';

    row.querySelector('button').addEventListener('click', ()=>{
      if (playerWrap.classList.contains('d-none')){
        playerWrap.classList.remove('d-none');
        const embed = url.includes('watch?v=') ? url.replace('watch?v=','embed/') : url;
        playerWrap.innerHTML = `<div class="ratio ratio-16x9"><iframe src="${embed}" title="video ${i+1}" frameborder="0" allowfullscreen></iframe></div>`;
      } else {
        playerWrap.classList.add('d-none');
        playerWrap.innerHTML = '';
      }
    });

    item.appendChild(row);
    item.appendChild(playerWrap);
    list.appendChild(item);
  });

  body.appendChild(list);
  const modal = new bootstrap.Modal(document.getElementById('videosModal'));
  modal.show();
}




/* Forms: simple validation and fake AJAX */
function setupForms(){
  // login
  const loginForm = $('#loginForm');
  if(loginForm){
    loginForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const email = $('#loginEmail').value.trim();
      const pass = $('#loginPassword').value;
      if(!email || pass.length<6){ showToast('Login error','Invalid credentials', 'error'); return; }
      // fake ajax login
      showToast('Welcome back','You are logged in (demo).');
      localStorage.setItem('user', JSON.stringify({email}));
      setTimeout(()=> window.location.href='index.html',700);
    });
  }
  // signup
  const signupForm = $('#signupForm');
  if(signupForm){
    signupForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = $('#signupName').value.trim();
      const email = $('#signupEmail').value.trim();
      const pass = $('#signupPassword').value;
      if(!name || !email || pass.length<6){ showToast('Signup error','Please enter valid data', 'error'); return; }
      // fake ajax
      localStorage.setItem('user', JSON.stringify({name,email}));
      showToast('Account created','You can now login (demo).');
      setTimeout(()=> window.location.href='index.html',800);
    });
  }
  // contact
  const contactForm = $('#contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      showToast('Message sent','We will contact you soon.');
      contactForm.reset();
    });
  }
}

/* Init */
document.addEventListener('DOMContentLoaded', ()=>{
  renderCoursesPreview();
  renderCoursesGrid();
  renderMyCourses();
  setupForms();

  // bind enroll confirm
  const confirmBtn = $('#confirmEnrollBtn');
  if(confirmBtn) confirmBtn.addEventListener('click', enrollCurrentCourse);

  // filter change
  const filter = $('#filterCategory');
  if(filter) filter.addEventListener('change', renderCoursesGrid);
});


// Burger menu toggle (CSS-only nav)
document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.my-burger');
  const nav = document.querySelector('.my-navbar-nav');
  if (burger && nav) {
    burger.addEventListener('click', function() {
      nav.classList.toggle('show');
    });
  }
});


// Burger menu toggle (professional)
document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.my-burger');
  const nav = document.querySelector('.my-navbar-nav');
  if (burger && nav) {
    burger.addEventListener('click', function() {
      nav.classList.toggle('show');
    });
  }
});

// ===== Burger Menu Fix =====
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".my-burger");
  const nav = document.querySelector(".my-navbar-nav");

  if (burger && nav) {
    burger.addEventListener("click", function () {
      nav.classList.toggle("active");
    });
  }
});


// === Added by Assistant ===
let currentCourse = {};
let selectedCourse = {};

function openCourse(title, desc, videos) {
  currentCourse = { title, desc, videos };
  document.getElementById("courseTitle").innerText = title;
  document.getElementById("courseDesc").innerText = desc;
  document.getElementById("videosBtn").style.display = "none";
  document.getElementById("videoList").style.display = "none";
  document.getElementById("courseModal").style.display = "block";
}

function closeModal() { document.getElementById("courseModal").style.display = "none"; }

function subscribeCourse() {
  let courses = JSON.parse(localStorage.getItem("myCourses")) || [];
  if (!courses.find(c => c.title === currentCourse.title)) {
    courses.push(currentCourse);
    localStorage.setItem("myCourses", JSON.stringify(courses));
    alert("✅ تم الاشتراك في الكورس!");
  } else {
    alert("⚠️ انت مشترك بالفعل في هذا الكورس");
  }
  document.getElementById("videosBtn").style.display = "inline-block";
}

function showVideos() {
  let container = document.getElementById("videoList");
  container.innerHTML = "";
  currentCourse.videos.forEach(v => {
    container.innerHTML += `<iframe width="300" height="200" src="${v.url}" frameborder="0" allowfullscreen></iframe>`;
  });
  container.style.display = "block";
}

function openMyCourse(title) {
  let courses = JSON.parse(localStorage.getItem("myCourses")) || [];
  selectedCourse = courses.find(c => c.title === title);
  if (selectedCourse) {
    document.getElementById("myCourseTitle").innerText = selectedCourse.title;
    document.getElementById("myCourseDesc").innerText = selectedCourse.desc;
    document.querySelector("#myVideoTable tbody").innerHTML = "";
    document.getElementById("myVideoTable").style.display = "none";
    document.getElementById("myCourseModal").style.display = "block";
  }
}

function closeMyCourseModal() { document.getElementById("myCourseModal").style.display = "none"; }

function showMyVideos() {
  let tableBody = document.querySelector("#myVideoTable tbody");
  tableBody.innerHTML = "";
  if (selectedCourse.videos && selectedCourse.videos.length > 0) {
    selectedCourse.videos.forEach((v, i) => {
      tableBody.innerHTML += `<tr><td>${i+1}</td><td>${v.title}</td><td><a href="${v.url}" >فتح الفيديو</a></td></tr>`;
    });
    document.getElementById("myVideoTable").style.display = "table";
  } else {
    tableBody.innerHTML = `<tr><td colspan="3">🚫 لا توجد فيديوهات لهذا الكورس.</td></tr>`;
    document.getElementById("myVideoTable").style.display = "table";
  }
}



// === Arabic & Subscribe wiring (safety net) ===
(function(){
  function $(sel){ return document.querySelector(sel); }

  // Patch openCourseModal to fill Arabic title/desc when available
  var _openCourseModal = window.openCourseModal;
  window.openCourseModal = function(id){
    try{
      if (typeof _openCourseModal === 'function') _openCourseModal(id);
      // Try fill Arabic content
      var course = (typeof COURSES!=='undefined') ? COURSES.find(c=>c.id===id) : null;
      if (course){
        var titleEl = document.querySelector('#courseModal .modal-title, #courseModalTitle, #confirmEnrollTitle');
        var descEl  = document.getElementById('courseModalText') || document.getElementById('confirmEnrollText') || document.querySelector('#courseModal .modal-body');
        if (titleEl) titleEl.textContent = course.titleAr || course.title;
        if (descEl)  descEl.textContent  = course.descAr  || course.desc  || '';
      }
      // Wire confirm button each time
      var btn = document.getElementById('confirmEnrollBtn') || document.getElementById('btnConfirmEnroll') || document.querySelector('#confirmEnrollModal .btn.btn-primary');
      if (btn && !btn._wired){
        btn.addEventListener('click', function(){
          try{ enrollCurrentCourse(); }catch(e){ console.error(e); }
        });
        btn._wired = true;
      }
    }catch(e){ console.error(e); }
  };

  // Also wire when confirm modal is shown via Bootstrap event
  document.addEventListener('shown.bs.modal', function(ev){
    if(ev.target && ev.target.id === 'confirmEnrollModal'){
      var btn = document.getElementById('confirmEnrollBtn') || document.getElementById('btnConfirmEnroll') || document.querySelector('#confirmEnrollModal .btn.btn-primary');
      if (btn && !btn._wired){
        btn.addEventListener('click', function(){
          try{ enrollCurrentCourse(); }catch(e){ console.error(e); }
        });
        btn._wired = true;
      }
    }
  });
})();

// Delegated click to ensure subscribe works
document.addEventListener('click', function(e){
  if (e.target && (e.target.id === 'confirmEnrollBtn' || (e.target.closest && e.target.closest('#confirmEnrollModal') && e.target.matches('.btn.btn-primary')))){
    try{ enrollCurrentCourse(); }catch(err){ console.error(err); }
  }
}); /* delegatedEnrollClick */


(function(){
  // Helper
  function $(sel, root){ return (root||document).querySelector(sel); }
  function $all(sel, root){ return Array.from((root||document).querySelectorAll(sel)); }

  // Ensure global holder for selected course id
  if (typeof window.currentCourseId === 'undefined') window.currentCourseId = null;

  // 1) Ensure Arabic descriptions fallback for any course missing desc/descAr
  try {
    if (Array.isArray(window.COURSES)) {
      window.COURSES.forEach(function(c){
        if (!c.descAr && c.desc) c.descAr = c.desc; // mirror if only English present
        if (!c.descAr) c.descAr = 'وصف الكورس غير متوفر حالياً.';
        if (!c.titleAr && c.title) c.titleAr = c.title;
      });
    }
  } catch(e){ console.error(e); }

  // 2) Wrap openCourseModal to always fill Arabic title/desc and remember id
  var _openCourseModal = window.openCourseModal;
  window.openCourseModal = function(id){
    try{
      window.currentCourseId = id;
      if (typeof _openCourseModal === 'function') { _openCourseModal(id); }
      var course = (Array.isArray(window.COURSES) ? window.COURSES.find(function(x){return x.id===id;}) : null);
      if (course){
        var titleEl = $('#courseDetailsModal .modal-title') || $('#courseModal .modal-title') || $('#courseModalTitle') || $('#confirmEnrollTitle');
        var bodyP   = $('#courseDetailsModal .modal-body p') || $('#courseModalText') || $('#confirmEnrollText');
        if (titleEl) titleEl.textContent = course.titleAr || course.title || titleEl.textContent;
        if (bodyP)   bodyP.textContent   = course.descAr  || course.desc  || bodyP.textContent;
      }
      // Wire subscribe button(s)
      wireEnrollButtons();
    }catch(e){ console.error(e); }
  };

  function wireEnrollButtons(){
    // Attempt to bind all possible enroll buttons once
    ['#confirmEnrollBtn','#btnConfirmEnroll','#enrollBtn','[data-action="enroll"]','.btn-enroll-now'].forEach(function(sel){
      $all(sel).forEach(function(btn){
        if (btn && !btn._enrollWired){
          btn.addEventListener('click', function(ev){
            ev.preventDefault();
            try {
              if (typeof window.enrollCurrentCourse === 'function'){ 
                window.enrollCurrentCourse(); 
              } else {
                // Fallback: save to localStorage and go to "my-courses.html"
                var list = JSON.parse(localStorage.getItem('myCourses')||'[]');
                var c = (Array.isArray(window.COURSES) ? window.COURSES.find(function(x){return x.id===window.currentCourseId;}) : null);
                if (c && !list.find(function(x){return x.id===c.id;})){
                  list.push(c);
                  localStorage.setItem('myCourses', JSON.stringify(list));
                }
                try { 
                  var m = $('#confirmEnrollModal');
                  if (m && typeof bootstrap!=='undefined') (bootstrap.Modal.getOrCreateInstance(m)).hide();
                } catch(e){}
                setTimeout(function(){ window.location.href = 'my-courses.html'; }, 150);
              }
            } catch(e){ console.error(e); }
          });
          btn._enrollWired = true;
        }
      });
    });
  }

  // Also delegate in case buttons are rendered later
  document.addEventListener('click', function(e){
    var btn = e.target.closest('#confirmEnrollBtn,#btnConfirmEnroll,#enrollBtn,[data-action=\"enroll\"],.btn-enroll-now');
    if(!btn) return;
    e.preventDefault();
    if(typeof window.enrollCurrentCourse === 'function'){ 
      window.enrollCurrentCourse(); 
    } else {
      var list = JSON.parse(localStorage.getItem('myCourses')||'[]');
      var c = (Array.isArray(window.COURSES) ? window.COURSES.find(function(x){return x.id===window.currentCourseId;}) : null);
      if (c && !list.find(function(x){return x.id===c.id;})){
        list.push(c);
        localStorage.setItem('myCourses', JSON.stringify(list));
      }
      try { 
        var m = $('#confirmEnrollModal'); 
        if (m && typeof bootstrap!=='undefined') (bootstrap.Modal.getOrCreateInstance(m)).hide();
      } catch(e){}
      setTimeout(function(){ window.location.href = 'my-courses.html'; }, 150);
    }
  });

  // 3) Nicer videos list inside the modal (my-courses)
  var _openVideosModal = window.openVideosModal;
  window.openVideosModal = function(id){
    try{
      if (typeof _openVideosModal === 'function') { _openVideosModal(id); } // let original create modal structure if needed
      var course = (Array.isArray(window.COURSES) ? window.COURSES.find(function(x){return x.id===id;}) : null);
      if (!course) return;
      var body = document.getElementById('videosModalBody') || document.querySelector('#videosModal .modal-body');
      var titleEl = document.getElementById('videosModalTitle') || document.querySelector('#videosModal .modal-title');
      if (titleEl) titleEl.textContent = (course.titleAr || course.title || '') + ' — الدروس';
      if (!body) return;
      body.innerHTML = ''; // clear

      // Build clean list-group; each item has a toggle to play inline + open in new tab
      var list = document.createElement('div');
      list.className = 'list-group';
      var titles = Array.isArray(course.videos) ? course.videos : [];
      var links  = Array.isArray(course.videoLinks) ? course.videoLinks : [];

      titles.forEach(function(t,i){
        var url = links[i] ? links[i] : ('https://www.youtube.com/results?search_query=' + encodeURIComponent((course.titleAr||course.title||'') + ' ' + t));
        var item = document.createElement('div');
        item.className = 'list-group-item d-flex flex-column gap-2';

        var row = document.createElement('div');
        row.className = 'd-flex align-items-center justify-content-between flex-wrap';
        row.innerHTML = '<div class="fw-bold">الدرس ' + (i+1) + ': ' + t + '</div>' +
                        '<div class="d-flex gap-2">' +
                        '' +
                        '<button class="btn btn-sm btn-primary" type="button">تشغيل هنا</button>' +
                        '</div>';

        var playerWrap = document.createElement('div');
        playerWrap.className = 'collapse mt-2';
        playerWrap.id = 'vid-'+id+'-'+i;
        // iframe will be created lazily
        row.querySelector('button').addEventListener('click', function(){
          // toggle collapse
          if (playerWrap.classList.contains('show')) {
            playerWrap.classList.remove('show');
            playerWrap.innerHTML = '';
          } else {
            playerWrap.classList.add('show');
            playerWrap.innerHTML = '<div class="ratio ratio-16x9"><iframe src="'+url.replace('watch?v=','embed/')+'" title="video '+(i+1)+'" frameborder="0" allowfullscreen referrerpolicy="no-referrer"></iframe></div>';
          }
        });

        item.appendChild(row);
        item.appendChild(playerWrap);
        list.appendChild(item);
      });

      body.appendChild(list);

      // Show the modal via Bootstrap
      var modalEl = document.getElementById('videosModal');
      if (modalEl && typeof bootstrap!=='undefined'){
        bootstrap.Modal.getOrCreateInstance(modalEl).show();
      }
    }catch(e){ console.error(e); }
  };
})(); 
/* === End Assistant Patch === */



(function(){
  function $(sel,root){ return (root||document).querySelector(sel); }
  if (typeof window.currentCourseId === 'undefined') window.currentCourseId = null;

  // Wrap openCourseModal to store current id and show confirm modal if available
  var _openCourseModal = window.openCourseModal;
  window.openCourseModal = function(id){
    try{
      window.currentCourseId = id;
      if (typeof _openCourseModal === 'function') _openCourseModal(id);
      // If confirm modal exists, ensure Arabic text is set and show it
      var course = (Array.isArray(window.COURSES) ? window.COURSES.find(c=>c.id===id) : null);
      var titleEl = document.getElementById('confirmEnrollTitle');
      var textEl  = document.getElementById('confirmEnrollText');
      if (course){
        if (titleEl) titleEl.textContent = course.titleAr || course.title || 'تأكيد الاشتراك';
        if (textEl)  textEl.textContent  = course.descAr  || course.desc  || 'هل تريد الاشتراك في هذا الكورس؟';
      }
    }catch(e){ console.error(e); }
  };

  // Delegate click for any enroll-like button (works even if element added later)
  document.addEventListener('click', function(e){
    var btn = e.target.closest('#btnConfirmEnroll,#confirmEnrollBtn,[data-action=\"enroll\"],.btn-enroll-now');
    if(!btn) return;
    e.preventDefault();
    try {
      if (typeof window.enrollCurrentCourse === 'function'){
        window.enrollCurrentCourse();
      } else {
        // Fallback: add selected course to localStorage and redirect
        var list = JSON.parse(localStorage.getItem('myCourses') || '[]');
        var c = (Array.isArray(window.COURSES) ? window.COURSES.find(x=>x.id===window.currentCourseId) : null);
        if (c && !list.find(x=>x.id===c.id)){
          list.push(c);
          localStorage.setItem('myCourses', JSON.stringify(list));
        }
        try {
          var modalEl = document.getElementById('confirmEnrollModal');
          if (modalEl && typeof bootstrap!=='undefined') bootstrap.Modal.getOrCreateInstance(modalEl).hide();
        }catch(err){}
        setTimeout(function(){ window.location.href = 'my-courses.html'; }, 150);
      }
    } catch(err){ console.error(err); }
  }, true);
})();


(function(){
  // Track current course id
  if (typeof window.currentCourseId === 'undefined') window.currentCourseId = null;

  // Wrap openCourseModal to remember selected course
  var _openCourseModal = window.openCourseModal;
  window.openCourseModal = function(id){
    window.currentCourseId = id;
    if (typeof _openCourseModal === 'function') _openCourseModal(id);
  };

  // The universal subscribe function (called directly from the button)
  window.enrollCurrentCourse_Assistant = function(){
    try{
      if (typeof window.enrollCurrentCourse === 'function') {
        // Use project's original function if available
        return window.enrollCurrentCourse();
      }
    }catch(e){ console.error(e); }

    // Fallback: add to myCourses and go to my-courses.html
    try{
      var list = JSON.parse(localStorage.getItem('myCourses') || '[]');
      var c = (Array.isArray(window.COURSES) ? window.COURSES.find(function(x){return x.id===window.currentCourseId;}) : null);
      if (!c){ alert('لم يتم تحديد كورس'); return; }
      if (!list.find(function(x){return x.id===c.id;})) list.push(c);
      localStorage.setItem('myCourses', JSON.stringify(list));
      var m = document.getElementById('confirmEnrollModal');
      if (m && typeof bootstrap!=='undefined') bootstrap.Modal.getOrCreateInstance(m).hide();
      window.location.href = 'my-courses.html';
    }catch(err){
      console.error(err);
      alert('حدث خطأ أثناء الاشتراك.');
    }
  };

  // Ensure clicking the entire card (if it has data-id) opens the modal
  document.addEventListener('click', function(e){
    var card = e.target.closest('.card.course[data-id]');
    if (card){ 
      e.preventDefault();
      var id = card.getAttribute('data-id');
      if (id) window.openCourseModal(id);
    }
  }, true);
})(); 
/* === End Assistant patch === */



(function(){
  function $(sel,root){ return (root||document).querySelector(sel); }
  function $all(sel,root){ return Array.from((root||document).querySelectorAll(sel)); }

  if (typeof window.currentCourseId === 'undefined') window.currentCourseId = null;

  // Helper: try to guess course by modal title (Arabic/English)
  function guessCourseIdFromTitle(){
    try{
      var title = ($('#confirmEnrollTitle') && $('#confirmEnrollTitle').textContent.trim())
               || ($('#courseDetailsModal .modal-title') && $('#courseDetailsModal .modal-title').textContent.trim())
               || ($('#courseModalTitle') && $('#courseModalTitle').textContent.trim()) || '';
      if (!title || !Array.isArray(window.COURSES)) return null;
      var c = window.COURSES.find(function(x){
        return (x.titleAr && x.titleAr.trim() === title) || (x.title && x.title.trim() === title);
      });
      return c ? c.id : null;
    }catch(e){ return null; }
  }

  // Wrap openCourseModal so we ALWAYS save id and stamp it on the confirm button
  (function(){
    var _open = window.openCourseModal;
    window.openCourseModal = function(id){
      try{
        window.currentCourseId = id || window.currentCourseId || null;
        if (typeof _open === 'function') _open(id);
        var btn = $('#confirmEnrollBtn') || $('#btnConfirmEnroll') || $('#enrollBtn');
        if (btn && window.currentCourseId) btn.dataset.id = window.currentCourseId;
      }catch(e){ console.error(e); }
    };
  })();

  // Any click on elements with data-id should update currentCourseId BEFORE opening modal
  document.addEventListener('click', function(e){
    var withId = e.target.closest('[data-id]');
    if (withId){
      var cid = withId.getAttribute('data-id');
      if (cid) window.currentCourseId = cid;
      // also stamp button if exists already
      var btn = $('#confirmEnrollBtn') || $('#btnConfirmEnroll') || $('#enrollBtn');
      if (btn && cid) btn.dataset.id = cid;
    }
  }, true);

  // The enforced subscribe handler (you already call it from the button's onclick)
  window.enrollCurrentCourse_Assistant = function(){
    try{
      // Prefer project's original function if it exists
      if (typeof window.enrollCurrentCourse === 'function'){
        return window.enrollCurrentCourse();
      }
    }catch(e){ console.warn('enrollCurrentCourse threw, falling back', e); }

    // Resolve course id from (1) currentCourseId (2) button dataset (3) modal title
    var btn = $('#confirmEnrollBtn') || $('#btnConfirmEnroll') || $('#enrollBtn');
    var id = window.currentCourseId || (btn && btn.dataset && btn.dataset.id) || guessCourseIdFromTitle();

    if (!id){
      alert('لم يتم تحديد الكورس — تم إصلاح الربط الآن، جرّب الضغط على البطاقة/زر التفاصيل مرة أخرى ثم "اشترك الآن".');
      return;
    }

    var course = Array.isArray(window.COURSES) ? window.COURSES.find(function(x){return x.id===id;}) : null;
    if (!course){
      alert('تعذر العثور على بيانات الكورس.');
      return;
    }

    try{
      var list = JSON.parse(localStorage.getItem('myCourses') || '[]');
      if (!list.find(function(x){return x.id===course.id;})) list.push(course);
      localStorage.setItem('myCourses', JSON.stringify(list));
      // Close modal if exists
      try{
        var modalEl = document.getElementById('confirmEnrollModal');
        if (modalEl && typeof bootstrap!=='undefined') bootstrap.Modal.getOrCreateInstance(modalEl).hide();
      }catch(e){}
      // Go to my courses
      window.location.href = 'my-courses.html';
    }catch(err){
      console.error(err);
      alert('حدث خطأ أثناء الاشتراك.');
    }
  };
})(); 
/* === End Patch === */



(function(){
  function $(sel,root){ return (root||document).querySelector(sel); }
  function $all(sel,root){ return Array.from((root||document).querySelectorAll(sel)); }

  // Return the most likely courses array from window
  function getAllCourses(){
    if (Array.isArray(window.COURSES)) return window.COURSES;
    if (Array.isArray(window.ALL_COURSES)) return window.ALL_COURSES;
    // scan window for arrays of objects with id + title
    try{
      for (const k in window){
        const v = window[k];
        if (Array.isArray(v) && v.length && typeof v[0]==='object' && v[0] && ('id' in v[0]) && ('title' in v[0] || 'titleAr' in v[0])){
          return v;
        }
      }
    }catch(e){}
    return [];
  }

  // expose globally
  window.COURSES = getAllCourses();

  if (typeof window.currentCourseId === 'undefined') window.currentCourseId = null;

  // Keep courseId when opening any course modal
  (function(){
    const _open = window.openCourseModal;
    window.openCourseModal = function(id){
      try{
        window.currentCourseId = id || window.currentCourseId || null;
        if (typeof _open === 'function') _open(id);
        // stamp id on confirm button if exists
        const btn = $('#confirmEnrollBtn') || $('#btnConfirmEnroll') || $('#enrollBtn');
        if (btn && window.currentCourseId) btn.dataset.id = window.currentCourseId;
        // ensure confirm modal is shown
        const cm = $('#confirmEnrollModal');
        if (cm && typeof bootstrap!=='undefined'){ bootstrap.Modal.getOrCreateInstance(cm).show(); }
      }catch(e){ console.error(e); }
    };
  })();

  // Stronger subscribe function
  window.enrollCurrentCourse_Assistant = function(){
    // Try original
    try{ if (typeof window.enrollCurrentCourse === 'function') return window.enrollCurrentCourse(); }catch(e){}
    const btn = $('#confirmEnrollBtn') || $('#btnConfirmEnroll') || $('#enrollBtn');
    // sources for id
    let id = window.currentCourseId || (btn && btn.dataset && btn.dataset.id) || null;

    // fallback: guess by modal title
    if (!id){
      const t = ($('#confirmEnrollTitle') && $('#confirmEnrollTitle').textContent.trim())
             || ($('#courseDetailsModal .modal-title') && $('#courseDetailsModal .modal-title').textContent.trim())
             || ($('#courseModalTitle') && $('#courseModalTitle').textContent.trim()) || '';
      if (t){
        const c = getAllCourses().find(x=> (x.titleAr && x.titleAr.trim()===t) || (x.title && x.title.trim()===t));
        if (c) id = c.id;
      }
    }

    const all = getAllCourses();
    const course = id ? all.find(x=>x.id===id) : null;
    if (!course){
      alert('تعذر العثور على بيانات الكورس — تم تثبيت الربط الآن. حاول مجدداً: افتح تفاصيل الكورس ثم اضغط "اشترك".');
      return;
    }

    try{
      const key = 'myCourses';
      const list = JSON.parse(localStorage.getItem(key) || '[]');
      if (!list.find(x=>x.id===course.id)) list.push(course);
      localStorage.setItem(key, JSON.stringify(list));
      closeAllModals();
      window.location.href = 'my-courses.html';
    }catch(err){ console.error(err); alert('حدث خطأ أثناء الاشتراك.'); }
  };

  // Close ANY open modal & clean stuck backdrop/body
  function closeAllModals(){
    try{
      $all('.modal.show').forEach(el=>{
        if (typeof bootstrap!=='undefined'){
          bootstrap.Modal.getOrCreateInstance(el).hide();
        } else {
          el.classList.remove('show');
          el.style.display='none';
        }
      });
      // remove backdrops
      $all('.modal-backdrop').forEach(b=>b.remove());
      document.body.classList.remove('modal-open');
      document.body.style.removeProperty('padding-right');
    }catch(e){}
  }

  // Ensure cancel/close buttons always perform full cleanup
  document.addEventListener('click', function(e){
    const cancel = e.target.closest('[data-bs-dismiss="modal"], .btn-close');
    if (cancel){ setTimeout(closeAllModals, 10); }
  }, true);

  // Make course cards clickable (if they carry data-id)
  document.addEventListener('click', function(e){
    const card = e.target.closest('.card.course[data-id]');
    if (card){
      e.preventDefault();
      const cid = card.getAttribute('data-id');
      window.currentCourseId = cid;
      const btn = $('#confirmEnrollBtn') || $('#btnConfirmEnroll') || $('#enrollBtn');
      if (btn && cid) btn.dataset.id = cid;
      const cm = $('#confirmEnrollModal');
      if (cm && typeof bootstrap!=='undefined'){ bootstrap.Modal.getOrCreateInstance(cm).show(); }
    }
  }, true);
})(); 
/* === End Final Patch v3 === */



// === Assistant: mirror homepage subscribe behavior ===
(function(){
  function $(sel,root){ return (root||document).querySelector(sel); }

  if (typeof window.currentCourseId === 'undefined') window.currentCourseId = null;

  var _open = window.openCourseModal;
  window.openCourseModal = function(id){
    window.currentCourseId = id || window.currentCourseId;
    if (typeof _open === 'function') _open(id);
    var btn = document.getElementById('confirmEnrollBtn');
    if (btn){
      if (!btn.classList.contains('btn-enroll-now')) btn.classList.add('btn-enroll-now');
      btn.dataset.id = window.currentCourseId || btn.dataset.id || '';
    }
  };

  // Delegated handler identical to homepage style
  document.addEventListener('click', function(e){
    var btn = e.target.closest('.btn-enroll-now');
    if(!btn) return;
    e.preventDefault();
    var id = btn.dataset.id || window.currentCourseId;
    if (!id){
      var tEl = document.getElementById('confirmEnrollTitle');
      var t = tEl ? (tEl.textContent||'').trim() : '';
      if (t && Array.isArray(window.COURSES)){
        var c = window.COURSES.find(function(x){return (x.titleAr===t)||(x.title===t);});
        if (c) id = c.id;
      }
    }
    if (id) window.currentCourseId = id;

    try{
      if (typeof window.enrollCurrentCourse === 'function'){
        return window.enrollCurrentCourse();
      }
    }catch(err){ /* fall through */ }

    try{
      var list = JSON.parse(localStorage.getItem('myCourses') || '[]');
      var course = (Array.isArray(window.COURSES) ? window.COURSES.find(function(x){return x.id===id;}) : null);
      if (course && !list.find(function(x){return x.id===course.id;})){
        list.push(course);
        localStorage.setItem('myCourses', JSON.stringify(list));
      }
      var modalEl = document.getElementById('confirmEnrollModal');
      if (modalEl && typeof bootstrap!=='undefined') bootstrap.Modal.getOrCreateInstance(modalEl).hide();
      window.location.href = 'my-courses.html';
    }catch(e){ console.error(e); alert('تعذر الاشتراك.'); }
  }, true);
})();


(function(){
  function $(sel,root){ return (root||document).querySelector(sel); }
  function getText(el){ return el ? (el.textContent || '').trim() : ''; }

  if (!window.enrollCurrentCourse_Assistant) return; // depend on previous handler

  var _assist = window.enrollCurrentCourse_Assistant;
  window.enrollCurrentCourse_Assistant = function(){
    try {
      // Try normal flow first
      var ret = null;
      try { ret = _assist(); } catch(e){}
      // If normal flow handled navigation (location change), stop here.
      // We detect by checking if myCourses changed or currentCourseId resolved; otherwise fallback.
      var key = 'myCourses';
      var list = [];
      try { list = JSON.parse(localStorage.getItem(key) || '[]'); } catch(e){}
      if (list && list.length) return ret;
    } catch(e){ /* continue to fallback */ }

    try {
      // Build minimal course object from modal
      var title = getText(document.getElementById('confirmEnrollTitle')) 
               || getText(document.querySelector('#courseDetailsModal .modal-title'))
               || getText(document.getElementById('courseModalTitle'))
               || 'دورة بدون اسم';
      var desc  = getText(document.getElementById('confirmEnrollText')) 
               || getText(document.getElementById('courseModalText'))
               || 'تم الاشتراك في هذا الكورس.';

      var course = {
        id: 'custom-' + Date.now(),
        title: title, titleAr: title,
        desc: desc, descAr: desc,
        category: 'General',
        author: 'Academy',
        duration: '',
        level: '',
        price: 'Free',
        img: 'images/course1.jpg',
        videos: [],
        videoLinks: []
      };

      var key = 'myCourses';
      var list = JSON.parse(localStorage.getItem(key) || '[]');
      list.push(course);
      localStorage.setItem(key, JSON.stringify(list));

      // Close any open modal (Bootstrap or not)
      try{
        var el = document.getElementById('confirmEnrollModal') || document.querySelector('.modal.show');
        if (el && typeof bootstrap!=='undefined') bootstrap.Modal.getOrCreateInstance(el).hide();
      }catch(e){}
      // Remove backdrops if stuck
      document.querySelectorAll('.modal-backdrop').forEach(b=>b.remove());
      document.body.classList.remove('modal-open');
      document.body.style.removeProperty('padding-right');

      // Navigate
      window.location.href = 'my-courses.html';
    } catch(err){
      console.error('Emergency fallback failed:', err);
      alert('حصل خطأ أثناء الاشتراك.');
    }
  };
})();
/* === End Assistant Emergency Fallback === */



/* === Assistant Final Enroll (always works) === */
(function(){
  function $(sel,root){ return (root||document).querySelector(sel); }
  function getText(n){ return n ? (n.textContent||"").trim() : ""; }
  if (typeof window.currentCourseId === 'undefined') window.currentCourseId = null;

  // Helper: pick courses array if exists
  function getCourses(){
    if (Array.isArray(window.COURSES)) return window.COURSES;
    if (Array.isArray(window.ALL_COURSES)) return window.ALL_COURSES;
    try{
      for (const k in window){
        const v = window[k];
        if (Array.isArray(v) && v.length && typeof v[0]==='object' && v[0] && ('id' in v[0])) return v;
      }
    }catch(e){}
    return [];
  }

  window.enrollCurrentCourse_Assistant = function(){
    // 1) If project's original function exists and succeeds, let it handle
    try {
      if (typeof window.enrollCurrentCourse === 'function'){
        window.enrollCurrentCourse();
        // continue to navigation regardless
      }
    } catch(e){ /* fall through to our own handling */ }

    // 2) Try resolve by id
    var id = window.currentCourseId;
    var courses = getCourses();
    var course = id ? courses.find(function(c){ return c.id===id; }) : null;

    // 3) If not found, build minimal course from modal title/desc (no alerts)
    if (!course){
      var title = getText(document.getElementById('confirmEnrollTitle')) 
               || getText(document.querySelector('#courseDetailsModal .modal-title'))
               || getText(document.getElementById('courseModalTitle'))
               || 'دورة';
      var desc  = getText(document.getElementById('confirmEnrollText')) 
               || getText(document.getElementById('courseModalText'))
               || 'تم الاشتراك في هذا الكورس.';
      course = {
        id: 'custom-' + Date.now(),
        title: title, titleAr: title,
        desc: desc,  descAr: desc,
        category: 'General',
        author: 'Academy',
        duration: '',
        level: '',
        price: 'Free',
        img: 'images/course1.jpg',
        videos: [],
        videoLinks: []
      };
    }

    // 4) Persist and navigate
    try{
      var key = 'myCourses';
      var list = JSON.parse(localStorage.getItem(key) || '[]');
      if (!list.find(function(x){ return x.id===course.id; })) list.push(course);
      localStorage.setItem(key, JSON.stringify(list));
    }catch(e){}

    // 5) Close any open modal and clean backdrop
    try{
      document.querySelectorAll('.modal.show').forEach(function(el){
        if (typeof bootstrap!=='undefined') bootstrap.Modal.getOrCreateInstance(el).hide();
        el.classList.remove('show');
        el.style.display='none';
      });
      document.querySelectorAll('.modal-backdrop').forEach(function(b){ b.remove(); });
      document.body.classList.remove('modal-open');
      document.body.style.removeProperty('padding-right');
    }catch(e){}

    // 6) Go to my courses
    window.location.href = 'my-courses.html';
  };
})(); 
/* === End Assistant Final Enroll === */



// /* Assistant: bind btnConfirmEnroll */
document.addEventListener('DOMContentLoaded', ()=>{
  const btn = document.getElementById('btnConfirmEnroll');
  if(btn && typeof enrollCurrentCourse === 'function'){
    btn.addEventListener('click', enrollCurrentCourse);
  }
});


/* Assistant: bind btnConfirmEnroll for courses page */
document.addEventListener('DOMContentLoaded', ()=>{
  const b = document.getElementById('btnConfirmEnroll');
  if (b && typeof enrollCurrentCourse === 'function') {
    b.addEventListener('click', enrollCurrentCourse);
  }
});


/* === Videos gallery (static thumbnails) === */
(function(){
  function $(s, r){ return (r||document).querySelector(s); }
  function $all(s, r){ return Array.from((r||document).querySelectorAll(s)); }
  function getCourseById(id){
    if (!Array.isArray(window.COURSES)) return null;
    return window.COURSES.find(c=>c.id===id) || null;
  }
  function makeLessons(c){
    // Prefer c.videos titles if provided; otherwise generate 8 lessons
    var titles = Array.isArray(c && c.videos) && c.videos.length ? c.videos
      : Array.from({length:8}).map((_,i)=> 'الدرس ' + (i+1));
    // Build cards with static image placeholders
    var html = titles.map((t, i)=>{
      var idx = (i % 6) + 1;
      return '<div class="video-thumb">'
           + '  <img src="images/video_placeholder_'+idx+'.jpg" alt="'+t+'">'
           + '  <div class="play">تشغيل تجريبي</div>'
           + '</div>'
           + '<div class="videos-title">'+t+'</div>';
    }).map(card=>'<div>'+card+'</div>').join('');
    return html;
  }
  window.openVideosGallery = function(courseId){
    try{
      var c = getCourseById(courseId);
      var grid = document.getElementById('videosGrid');
      if (grid) grid.innerHTML = makeLessons(c);
      var m = document.getElementById('videosModal');
      if (m && typeof bootstrap!=='undefined'){ bootstrap.Modal.getOrCreateInstance(m).show(); }
    }catch(e){ console.error(e); }
  };
  // Delegate clicks from my-courses cards (buttons with .btn-videos)
  document.addEventListener('click', function(e){
    var btn = e.target.closest('.btn-videos[data-id]');
    if (!btn) return;
    e.preventDefault();
    var id = btn.getAttribute('data-id');
    if (id) window.openVideosGallery(id);
  }, true);
})();
/* === End videos gallery === */






// ##########
(function(){
  function $(s,r=document){return r.querySelector(s)}
  function load(){try{return JSON.parse(localStorage.getItem('users')||'[]')}catch(e){return[]}}
  function save(list){localStorage.setItem('users', JSON.stringify(list))}
  async function hash(s){
    if(window.crypto&&crypto.subtle){
      const buf=await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
      return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('')
    }
    let h=0; for(let i=0;i<s.length;i++){h=(h<<5)-h+s.charCodeAt(i); h|=0} return 'x'+Math.abs(h)
  }
  const loginForm = $('#loginForm');
  const signupForm = $('#signupForm');

  // basic realtime validity styling
  document.querySelectorAll('#loginForm input, #signupForm input').forEach(inp=>{
    inp.addEventListener('input', ()=> inp.classList.remove('is-invalid'));
  });

  signupForm && signupForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const name  = document.getElementById('signupName')?.value.trim() || '';
    const email = (document.getElementById('signupEmail')?.value || '').trim().toLowerCase();
    const pass  = document.getElementById('signupPassword')?.value || '';
    const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if(!name){ document.getElementById('signupName')?.classList.add('is-invalid'); return; }
    if(!okEmail){ document.getElementById('signupEmail')?.classList.add('is-invalid'); return; }
    if(!pass || pass.length < 6){ document.getElementById('signupPassword')?.classList.add('is-invalid'); return; }
    const users = load();
    if(users.some(u=>u.email===email)){ alert('هذا البريد مسجّل مسبقًا'); return; }
    const hpw = await hash(email+':'+pass);
    users.push({name,email,hpw,createdAt:Date.now()}); save(users);
    localStorage.setItem('currentUser', JSON.stringify({name,email}));
    alert('تم إنشاء الحساب '); location.href='index.html';
  });

  loginForm && loginForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const email = (document.getElementById('loginEmail')?.value || '').trim().toLowerCase();
    const pass  = document.getElementById('loginPassword')?.value || '';
    const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if(!okEmail){ document.getElementById('loginEmail')?.classList.add('is-invalid'); return; }
    if(!pass || pass.length < 6){ document.getElementById('loginPassword')?.classList.add('is-invalid'); return; }
    const users = load();
    const u = users.find(u=>u.email===email);
    if(!u){ alert('الحساب غير موجود'); return; }
    const hpw = await hash(email+':'+pass);
    if(hpw !== u.hpw){ alert('كلمة المرور غير صحيحة'); return; }
    localStorage.setItem('currentUser', JSON.stringify({name:u.name,email:u.email}));
    alert('تم تسجيل الدخول'); location.href='index.html';
  });
})();

document.addEventListener("DOMContentLoaded", function () {
  // تهيئة مكتبة AOS
  AOS.init({ duration: 1000, once: true });

  // عداد متحرك للأرقام
  document.querySelectorAll('.counter').forEach(counter => {
    const update = () => {
      const target = +counter.getAttribute('data-target'); // الهدف النهائي
      const count = +counter.innerText; // الرقم الحالي
      const inc = target / 200; // مقدار الزيادة

      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(update, 10);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };
    update();
  });
});


