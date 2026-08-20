document.querySelector('.menu-toggle').addEventListener('click',()=>document.querySelector('.nav-links').classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.nav-links').classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
function submitForm(e){
  e.preventDefault();
  const f=e.target, msg=document.getElementById('form-message');
  msg.textContent='Thank you! Your enquiry has been recorded on this demo form. Connect your email/WhatsApp to receive real enquiries.';
  f.reset();
  return false;
}