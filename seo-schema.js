/* CargoUncle structured-data layer. Include on index/service/location/blog pages. */
(function(){
  const host=window.location.hostname;
  if(host!=='cargouncle.com'&&host!=='www.cargouncle.com') return;
  const path=window.location.pathname.replace(/\/$/,'')||'/';
  const data=[
    {"@context":"https://schema.org","@type":"Organization","name":"CargoUncle","url":"https://cargouncle.com/","logo":"https://cargouncle.com/assets/images/logo.png","telephone":"+91-8700345722","sameAs":["https://www.instagram.com/cargouncle.off/"]},
    {"@context":"https://schema.org","@type":"WebSite","name":"CargoUncle","url":"https://cargouncle.com/","potentialAction":{"@type":"SearchAction","target":"https://cargouncle.com/?s={search_term_string}","query-input":"required name=search_term_string"}}
  ];
  if(path==='/'||path==='/index.html') data.push({"@context":"https://schema.org","@type":"WebPage","name":"CargoUncle - Logistics & Transportation Services","url":"https://cargouncle.com/","description":"Goods transportation, full truckload, part truckload, packers and movers and intercity logistics services across India."});
  data.forEach(x=>{const s=document.createElement('script');s.type='application/ld+json';s.textContent=JSON.stringify(x);document.head.appendChild(s)});
})();
