import{i as a,S as l}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const d="43257853-194068c59ee252fa44b7d008e";function u(n){const o=`https://pixabay.com/api/?key=${d}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>e.hits).catch(e=>(console.error("Error fetching images:",e),[]))}function f(){const n=document.getElementById("gallery");n.innerHTML=""}function m(n){const o=document.getElementById("gallery");n.forEach(e=>{const s=document.createElement("div");s.classList.add("card"),s.innerHTML=`
      <a href="${e.largeImageURL}" data-lightbox="gallery-item">
        <img class="contentCard" src="${e.webformatURL}" alt="${e.tags}">
      </a>
      <div class = imgCard>
      <p><b>Likes:</b> ${e.likes}</p>
      <p><b>Views:</b> ${e.views}</p>
      <p><b>Comments:</b> ${e.comments}</p>
      <p><b>Downloads:</b> ${e.downloads}</p>
      </div>
    `,o.appendChild(s)})}const h=document.getElementById("search-form"),p=document.getElementById("search-input"),c=document.querySelector(".loader");h.addEventListener("submit",n=>{n.preventDefault();const o=p.value.trim();if(!o){a.error({position:"topRight",title:"Error",message:"Please enter a keyword for search."});return}c.style.display="block",f(),u(o).then(e=>{e.length===0?a.info({position:"topRight",title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}):(m(e),new l("[data-lightbox]").refresh())}).catch(e=>{console.error("Error fetching images:",e),a.error({position:"topRight",title:"Error",message:"An error occurred while fetching images. Please try again later."})}).finally(()=>{c.style.display="none"})});
//# sourceMappingURL=commonHelpers.js.map
