import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as c}from"./assets/vendor-651d7991.js";document.addEventListener("DOMContentLoaded",function(){const a=document.querySelector(".form");a.addEventListener("submit",function(t){t.preventDefault();const e=new FormData(a),n=parseInt(e.get("delay")),s=parseInt(e.get("step")),i=parseInt(e.get("amount"));for(let o=0;o<i;o++)u(o+1,n+o*s).then(({position:r,delay:m})=>{c.success({title:"Fulfilled",message:`Promise ${r} fulfilled in ${m}ms`,position:"topRight"})}).catch(({position:r,delay:m})=>{c.error({title:"Rejected",message:`Promise ${r} rejected in ${m}ms`,position:"topRight"})})});function u(t,e){return new Promise((n,s)=>{const i=Math.random()>.3;setTimeout(()=>{i?n({position:t,delay:e}):s({position:t,delay:e})},e)})}});
//# sourceMappingURL=commonHelpers3.js.map
