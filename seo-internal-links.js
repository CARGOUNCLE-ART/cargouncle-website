/* Contextual internal links using only pages that currently exist. */
document.addEventListener('DOMContentLoaded',()=>{
  const path=location.pathname;
  if(!/^\/blog\//.test(path)) return;
  const links=[
    ['/','CargoUncle Home'],
    ['/areas-we-serve.html','Areas We Serve'],
    ['/about.html','About CargoUncle'],
    ['/contact.html','Contact CargoUncle'],
    ['/faq.html','Frequently Asked Questions'],
    ['/blog/index.html','Logistics Guides'],
    ['/blog/ftl-transport-charges-india.html','FTL Transport Charges in India'],
    ['/blog/ftl-vs-ptl.html','FTL vs PTL Transport'],
    ['/blog/goods-transport-services-india.html','Goods Transport Services in India'],
    ['/blog/house-shifting-checklist.html','House Shifting Checklist'],
    ['/blog/how-to-book-truck.html','How to Book a Truck'],
    ['/blog/office-shifting-guide.html','Office Shifting Guide'],
    ['/blog/packers-movers-india-guide.html','Packers & Movers Guide']
  ];
  const current=location.pathname;
  const box=document.createElement('section');
  box.className='cu-section cu-seo-links';
  box.innerHTML='<div class="cu-container"><h2>Explore CargoUncle Guides</h2><div class="cu-grid cu-grid-4">'+links.filter(([u])=>u!==current).map(([u,t])=>`<a class="cu-card" style="padding:16px;text-decoration:none;color:inherit" href="${u}">${t}</a>`).join('')+'</div></div>';
  document.querySelector('main')?.appendChild(box);
});
