import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const t=document.querySelector(".data-start"),a=document.querySelector(".data-stop");let r=null,e=!1;t.addEventListener("click",()=>{e||(e=!0,t.disabled=!0,r=setInterval(()=>{const o=n();document.querySelector("body").style.backgroundColor=o},1e3))});a.addEventListener("click",()=>{clearInterval(r),e=!1,t.disabled=!1});function n(){return`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,0)}`}
//# sourceMappingURL=commonHelpers.js.map