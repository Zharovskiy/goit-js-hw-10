import{e as b}from"./assets/err-cb81c40e.js";/* empty css                    */import{f,i as y}from"./assets/vendor-5e03c1f1.js";function F(e){const r=Math.floor(e/864e5),l=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:r,hours:l,minutes:m,seconds:h}}function p(e){if(n>Date.now()){const s=n-Date.now(),{days:a,hours:i,minutes:u,seconds:r}=F(s);S.textContent=o(a),g.textContent=o(i),v.textContent=o(u),C.textContent=o(r)}else clearInterval(d),c.removeAttribute("disabled")}function o(e){return e.toString().padStart(2,"0")}let n,d=null;const c=document.querySelector("#datetime-picker");let S=document.querySelector("[data-days]"),g=document.querySelector("[data-hours]"),v=document.querySelector("[data-minutes]"),C=document.querySelector("[data-seconds]");const t=document.querySelector("[data-start]");t.setAttribute("disabled",!0);t.addEventListener("click",()=>{t.setAttribute("disabled",!0),c.setAttribute("disabled",!0),d=setInterval(p,1e3)});f("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]>Date.now()?(n=e[0],t.removeAttribute("disabled")):(t.setAttribute("disabled",!0),y.show({title:"Error",titleColor:"#FFFFFF",message:"Please choose a date in the future",messageColor:"#FFFFFF",messageSize:"16px",backgroundColor:"#EF4040",iconUrl:b,position:"topRight"}))}});
//# sourceMappingURL=commonHelpers.js.map