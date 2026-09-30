
const PRODUCTS = window.MORRO_PRODUCTS || [];
const CART_KEY = "morro-chess-cart";

function rootPrefix(){ return location.pathname.includes("/pages/") ? "../" : ""; }
function money(v){ return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(v); }
function imagePath(file){ return rootPrefix() + "assets/images/products/" + file; }
function getCart(){ try{return JSON.parse(localStorage.getItem(CART_KEY)) || []}catch(e){return []} }
function setCart(c){localStorage.setItem(CART_KEY,JSON.stringify(c)); renderCart(); updateCount();}
function updateCount(){const el=document.getElementById("cartCount"); if(el) el.textContent=getCart().reduce((s,x)=>s+x.qty,0);}
function addToCart(id){
  const p=PRODUCTS.find(x=>x.id===id); if(!p)return;
  const cart=getCart(); const item=cart.find(x=>x.id===id);
  if(item)item.qty++; else cart.push({id,qty:1});
  setCart(cart); openCart();
}
function removeFromCart(id){setCart(getCart().filter(x=>x.id!==id))}
function openCart(){const d=document.getElementById("cartDrawer"),s=document.getElementById("scrim"); if(d){d.classList.add("open");d.setAttribute("aria-hidden","false");s?.classList.add("show")}}
function closeCart(){const d=document.getElementById("cartDrawer"),s=document.getElementById("scrim"); if(d){d.classList.remove("open");d.setAttribute("aria-hidden","true");s?.classList.remove("show")}}
function productCard(p){
 return `<article class="product-card">
  <div class="product-image"><img src="${imagePath(p.image)}" alt="${p.name}" loading="lazy"><span class="badge">${p.tag}</span></div>
  <div class="product-copy"><span class="category">${p.category}</span><h3>${p.name}</h3><p>${p.details}</p>
   <div class="product-bottom"><span class="price">${money(p.price)}</span><div class="mini-actions"><button onclick="quickView(${p.id})">View</button><button class="add" onclick="addToCart(${p.id})">Add</button></div></div>
  </div>
 </article>`;
}
function renderFeatured(){
 const grid=document.getElementById("featuredGrid"); if(!grid)return;
 grid.innerHTML=PRODUCTS.slice(0,8).map(productCard).join("");
}
function renderShop(){
 const grid=document.getElementById("shopGrid"); if(!grid)return;
 const cat=document.getElementById("categoryFilter")?.value || "All";
 const sort=document.getElementById("sortFilter")?.value || "featured";
 let list=PRODUCTS.filter(p=>cat==="All"||p.category===cat);
 if(sort==="price-low")list.sort((a,b)=>a.price-b.price);
 if(sort==="price-high")list.sort((a,b)=>b.price-a.price);
 if(sort==="name")list.sort((a,b)=>a.name.localeCompare(b.name));
 grid.innerHTML=list.map(productCard).join("");
 const count=document.getElementById("resultCount"); if(count)count.textContent=`${list.length} products`;
}
function renderCart(){
 const wrap=document.getElementById("cartItems"), totalEl=document.getElementById("cartTotal"); if(!wrap)return;
 const cart=getCart(); if(!cart.length){wrap.innerHTML='<div class="empty-cart">Your bag is empty. Add a piece from the collection to begin.</div>'; if(totalEl)totalEl.textContent="$0.00"; return;}
 let total=0;
 wrap.innerHTML=cart.map(item=>{
  const p=PRODUCTS.find(x=>x.id===item.id); if(!p)return "";
  total+=p.price*item.qty;
  return `<div class="cart-row"><img src="${imagePath(p.image)}" alt="${p.name}"><div><h4>${p.name}</h4><small>${item.qty} × ${money(p.price)}</small><br><button onclick="removeFromCart(${p.id})">Remove</button></div><strong>${money(p.price*item.qty)}</strong></div>`;
 }).join("");
 if(totalEl)totalEl.textContent=money(total);
}
function quickView(id){
 const p=PRODUCTS.find(x=>x.id===id); if(!p)return;
 const modal=document.getElementById("productModal"), content=document.getElementById("modalContent"); if(!modal||!content)return;
 content.innerHTML=`<div class="modal-product"><img src="${imagePath(p.image)}" alt="${p.name}"><div class="modal-copy"><span class="kicker dark">${p.category}</span><h2>${p.name}</h2><p>${p.details}</p><div class="modal-price">${money(p.price)}</div><button class="btn btn-gold" onclick="addToCart(${p.id}); closeModal()">Add to bag</button></div></div>`;
 modal.classList.add("open"); modal.setAttribute("aria-hidden","false");
}
function closeModal(){const m=document.getElementById("productModal");if(m){m.classList.remove("open");m.setAttribute("aria-hidden","true")}}
function setupNav(){
 const t=document.getElementById("navToggle"), n=document.getElementById("navLinks"); t?.addEventListener("click",()=>n?.classList.toggle("open"));
}
function setupFilters(){document.getElementById("categoryFilter")?.addEventListener("change",renderShop);document.getElementById("sortFilter")?.addEventListener("change",renderShop)}
document.addEventListener("DOMContentLoaded",()=>{
 setupNav(); updateCount(); renderCart(); renderFeatured(); renderShop(); setupFilters();
 document.getElementById("cartButton")?.addEventListener("click",openCart);
 document.getElementById("closeCart")?.addEventListener("click",closeCart);
 document.getElementById("scrim")?.addEventListener("click",closeCart);
 document.getElementById("modalClose")?.addEventListener("click",closeModal);
 document.getElementById("productModal")?.addEventListener("click",e=>{if(e.target.id==="productModal")closeModal()});
 document.getElementById("checkoutButton")?.addEventListener("click",()=>alert("Demo checkout: connect this action to your payment provider before launch."));
});
