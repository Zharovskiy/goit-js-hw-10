import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                    */import{f as b,i as y}from"./assets/vendor-5e03c1f1.js";function f(e){const n=Math.floor(e/864e5),l=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:n,hours:l,minutes:m,seconds:h}}function F(e){if(r>Date.now()){const s=r-Date.now(),{days:a,hours:i,minutes:u,seconds:n}=f(s);p.textContent=o(a),S.textContent=o(i),g.textContent=o(u),v.textContent=o(n)}else clearInterval(d),c.removeAttribute("disabled")}function o(e){return e.toString().padStart(2,"0")}let r,d=null;const c=document.querySelector("#datetime-picker");let p=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),g=document.querySelector("[data-minutes]"),v=document.querySelector("[data-seconds]");const t=document.querySelector("[data-start]");t.setAttribute("disabled",!0);t.addEventListener("click",()=>{t.setAttribute("disabled",!0),c.setAttribute("disabled",!0),d=setInterval(F,1e3)});b("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]>Date.now()?(r=e[0],t.removeAttribute("disabled")):(t.setAttribute("disabled",!0),y.show({title:"Error",titleColor:"#FFFFFF",message:"Please choose a date in the future",messageColor:"#FFFFFF",messageSize:"16px",backgroundColor:"#EF4040",iconUrl:"errorIcon",position:"topRight"}))}});
//# sourceMappingURL=commonHelpers.js.map
