import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as l,i as d}from"./assets/vendor-651d7991.js";function m(e){const s=Math.floor(e/864e5),o=Math.floor(e%864e5/36e5),t=Math.floor(e%864e5%36e5/6e4),u=Math.floor(e%864e5%36e5%6e4/1e3);return{days:s,hours:o,minutes:t,seconds:u}}function r(e){return e.toString().padStart(2,"0")}document.querySelector("[data-start]").addEventListener("click",()=>{const e=document.getElementById("datetime-picker").value,n=new Date(e).getTime(),c=1e3,a=()=>{const s=new Date().getTime(),o=n-s;if(o<=0)clearInterval(i),d.show({title:"Timer Expired!",message:"",position:"topRight",timeout:3e3,backgroundColor:"#ff5733",color:"white"}),document.querySelector("[data-start]").disabled=!1;else{const t=m(o);document.querySelector("[data-days]").textContent=r(t.days),document.querySelector("[data-hours]").textContent=r(t.hours),document.querySelector("[data-minutes]").textContent=r(t.minutes),document.querySelector("[data-seconds]").textContent=r(t.seconds)}};a();const i=setInterval(a,c)});l("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]<new Date?(d.error({title:"Error",message:"Please choose a date in the future",position:"topRight",timeout:3e3,backgroundColor:"#ff5733",color:"white"}),document.querySelector("[data-start]").disabled=!0):document.querySelector("[data-start]").disabled=!1}});
//# sourceMappingURL=commonHelpers2.js.map
