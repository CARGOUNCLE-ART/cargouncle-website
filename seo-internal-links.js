/* Adds a lightweight contextual SEO navigation block without changing existing navigation. */
document.addEventListener('DOMContentLoaded',()=>{
  const path=location.pathname;
  if(!/^\/(services|locations|blog)\//.test(path)) return;
  const links=[
    ['/services/transportation.html','Goods Transportation'],
    ['/services/full-truckload-ftl.html','FTL Transport'],
    ['/services/part-truckload-ptl.html','PTL Transport'],
    ['/services/packers-and-movers.html','Packers & Movers'],
    ['/services/house-shifting.html','House Shifting'],
    ['/services/car-transport.html','Car Transport'],
    ['/services/bike-transport.html','Bike Transport'],
    ['/locations/delhi.html','Delhi'],
    ['/locations/noida.html','Noida'],
    ['/locations/gurgaon.html','Gurgaon'],
    ['/locations/ghaziabad.html','Ghaziabad'],
    ['/locations/mumbai.html','Mumbai'],
    ['/locations/bangalore.html','Bangalore']
  ];
  const current=location.pathname;
  const box=document.createElement('section');box.className='cu-section cu-seo-links';
  box.innerHTML='<div class="cu-container"><h2>Explore CargoUncle Services & Locations</h2><div class="cu-grid cu-grid-4">'+links.filter(([u])=>u!==current).map(([u,t])=>`<a class="cu-card" style="padding:16px;text-decoration:none;color:inherit" href="${u}">${t}</a>`).join('')+'</div></div>';
  document.querySelector('main')?.appendChild(box);
});
