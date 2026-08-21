document.querySelector('.menu-toggle').addEventListener('click',()=>document.querySelector('.nav-links').classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.nav-links').classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

function submitForm(e){
  e.preventDefault();
  const f=e.target, data=new FormData(f);
  const message =
`Hi Cargo Uncle, I need a quotation.

Name: ${data.get('name')}
Mobile: ${data.get('phone')}
Pickup: ${data.get('pickup')}
Drop: ${data.get('drop')}
Service: ${data.get('service')}
Details: ${data.get('message') || 'Not provided'}`;

  // Replace 919999999999 below with your actual WhatsApp number (country code + number, no + or spaces).
  const whatsappNumber='918700345722';
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,'_blank');
  document.getElementById('form-message').textContent='Opening WhatsApp with your enquiry…';
  f.reset();
  return false;
}
