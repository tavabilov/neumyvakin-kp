(() => {
const stage=document.querySelector('.brand-stage');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const play=()=>{if(reduced.matches)return;stage.classList.remove('play');requestAnimationFrame(()=>requestAnimationFrame(()=>stage.classList.add('play')))};
document.querySelector('.stage-replay').addEventListener('click',play);play();
const dialog=document.querySelector('.image-viewer');let opener;
document.querySelectorAll('.market-pictures a,.client-shot').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();opener=a;const img=a.querySelector('img');dialog.querySelector('img').src=a.href;dialog.querySelector('img').alt=img.alt;dialog.querySelector('p').textContent=img.alt;dialog.showModal()}));
document.querySelector('.viewer-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});dialog.addEventListener('close',()=>opener?.focus());
})();
(() => { const header=document.querySelector('.head'); const size=()=>document.documentElement.style.setProperty('--cover-header',header.getBoundingClientRect().height+'px');size();new ResizeObserver(size).observe(header);})();
