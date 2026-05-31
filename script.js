document.addEventListener('DOMContentLoaded',()=>{
    const nb=document.getElementById('navbar');window.addEventListener('scroll',()=>nb.classList.toggle('scrolled',window.scrollY>50));
    const h=document.getElementById('hamburger'),l=document.getElementById('navLinks');
    h.addEventListener('click',()=>{h.classList.toggle('active');l.classList.toggle('active')});
    l.querySelectorAll('.nav-link').forEach(a=>a.addEventListener('click',()=>{h.classList.remove('active');l.classList.remove('active')}));
    
    document.getElementById('contactForm').addEventListener('submit',e=>{
        e.preventDefault();const d=Object.fromEntries(new FormData(e.target));d.id=Date.now();d.submittedAt=new Date().toISOString();d.status='New Brief';
        const all=JSON.parse(localStorage.getItem('studiopxl_briefs')||'[]');all.push(d);localStorage.setItem('studiopxl_briefs',JSON.stringify(all));
        e.target.reset();showToast('BRIEF RECEIVED. LET\'S CREATE SOMETHING SICK.');
    });
});
function showToast(m){const t=document.getElementById('toast');t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),4000)}
