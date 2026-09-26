const texts=['DevOps Engineer','Azure & AWS Specialist','Kubernetes | CI/CD'];
let i=0,j=0; const typing=document.getElementById('typing');
function type(){ if(j<texts[i].length){ typing.textContent+=texts[i][j++]; setTimeout(type,100);} else setTimeout(erase,1500); }
function erase(){ if(j>0){ typing.textContent=texts[i].substring(0,--j); setTimeout(erase,50);} else{ i=(i+1)%texts.length; setTimeout(type,500);} }
type();
document.addEventListener('scroll',()=>{ document.querySelectorAll('.fade').forEach(el=>{ if(el.getBoundingClientRect().top<window.innerHeight-100){ el.classList.add('show'); }}); });
