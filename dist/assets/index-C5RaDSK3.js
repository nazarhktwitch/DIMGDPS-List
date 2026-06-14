(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}})();const x={demonlist:"https://docs.google.com/spreadsheets/d/1fPdeRx__uwcYhE8Fo8-gxah-pcHwFU-G1kj71hrq7Dc/export?format=csv",impossible:"https://docs.google.com/spreadsheets/d/1R4Euoc5fVRknKKlJkyCjZbgCvOrqXPkM59ufcrYlBsQ/export?format=csv",slayers:"https://docs.google.com/spreadsheets/d/1ra2WMQXr7NpC3zKkkGmCPBbFFxR6SYJHDLB3O4KfPBs/export?format=csv",future:"https://docs.google.com/spreadsheets/d/1WhgXIuoCEbBgLMfYW9qwYH0uQ7g0o053TyxawIH_SH4/export?format=csv"},H={demonlist:[{Level:"P I G",Top:"1",Author:"AngryBanana1212",Verifer:"AngryBanana1212","Level Difficulty":"Hard Extreme Demon",Progresses:"No",Points:"150"},{Level:"PIGAZAN",Top:"2",Author:"AngryBanana1212",Verifer:"AngryBanana1212","Level Difficulty":"Hell Extreme Demon",Progresses:"No",Points:"125"},{Level:"PigWave",Top:"3",Author:"AngryBanana1212",Verifer:"AngryBanana1212","Level Difficulty":"Hell Extreme Demon",Progresses:"No",Points:"100"},{Level:"The Blade of Bamboo",Top:"4",Author:"AngryBanana1212",Verifer:"AngryBanana1212","Level Difficulty":"High Extreme Demon",Progresses:"No",Points:"97.5"},{Level:"Ultra pig poop level",Top:"5",Author:"AngryBanana1212",Verifer:"AngryBanana1212","Level Difficulty":"Extreme Demon",Progresses:"pro100nubikcl - 48% - 98%",Points:"95"}],impossible:[{Levels:"sakupen dih","Top Impossible":"top 1",Author:"NazarHK",CPS:"High",ID:"183","Использование Tps bypass":"Разрешено","Рекорд сервера":"No"},{Levels:"help god","Top Impossible":"top 2",Author:"techopro9",CPS:"High",ID:"224","Использование Tps bypass":"Запрещено","Рекорд сервера":"No"},{Levels:"silent sakupen lvl2","Top Impossible":"top 3",Author:"TheUNrealKorben(pro100nubikcl)",CPS:"Ultra High",ID:"165","Использование Tps bypass":"Запрещено","Рекорд сервера":"TheUNrealkorben - 5.67%"}],slayers:[{Slayers:"AngryBanana1212",Tops:"1"},{Slayers:"TheUNrealkorben",Tops:"2"},{Slayers:"techopro9",Tops:"3"},{Slayers:"DimStrem",Tops:"4"}],future:[{Levels:"CoLIMBO","Upcoming Top":"TOP 2",Author:"techopro9",Verifer:"?????",Difficulty:"Fire Extreme Demon"},{Levels:"orbit","Upcoming Top":"top 7-8",Author:"techopro9, pro100nubikcl",Verifer:"pro100nubikcl",Difficulty:"cruel insane"},{Levels:"Sakupen Disco (Disco series)","Upcoming Top":"TOP 5-6",Author:"techopro9",Verifer:"techopro9",Difficulty:"Super Easy Extreme Demon"}]},p={activeTab:"home",data:{demonlist:[],impossible:[],slayers:[],future:[]},filters:{demonlist:{search:"",difficulty:"all",sort:"rank-asc"},impossible:{search:"",cps:"all",tps:"all",sort:"rank-asc"},slayers:{search:""},future:{search:"",difficulty:"all"}},selectedLevel:{demonlist:null,impossible:null},loading:{demonlist:!0,impossible:!0,slayers:!0,future:!0},errors:{demonlist:null,impossible:null,slayers:null,future:null}};let I="";document.addEventListener("DOMContentLoaded",()=>{M(),R(),Y(),_(),O(),window.addEventListener("hashchange",T)});function T(){const n=window.location.hash||"#home",t=n.split("?")[0],l=P(n),o=t.replace("#","");if(!["home","demonlist","impossible","slayers","future","rules"].includes(o)){h("home");return}if(p.activeTab=o,N(o),l.level){const s=decodeURIComponent(l.level);D(o,s)}}function h(n,t=null){let l=`#${n}`;if(t){const o=encodeURIComponent,e=Object.keys(t).map(s=>`${o(s)}=${o(t[s])}`).join("&");e&&(l+=`?${e}`)}window.location.hash=l}function P(n){const t={};if(!n.includes("?"))return t;const o=n.split("?")[1].split("&");for(const e of o){const[s,r]=e.split("=");s&&(t[decodeURIComponent(s)]=decodeURIComponent(r||""))}return t}function D(n,t){if(p.loading[n]){setTimeout(()=>D(n,t),100);return}const l=p.data[n];if(!l)return;const o=l.find(e=>(e.Level||e.Levels||"").trim().toLowerCase()===t.trim().toLowerCase());o&&C(n,o,!1)}function M(){const n=document.querySelectorAll(".nav-link"),t=document.getElementById("logo-link"),l=document.getElementById("menu-toggle"),o=document.getElementById("main-nav");n.forEach(e=>{e.addEventListener("click",()=>{const s=e.getAttribute("data-target");h(s),o.classList.remove("active")})}),t.addEventListener("click",()=>{h("home")}),l.addEventListener("click",()=>{o.classList.toggle("active")}),document.getElementById("hero-view-demons").addEventListener("click",()=>h("demonlist")),document.getElementById("home-btn-all-demons").addEventListener("click",()=>h("demonlist")),document.getElementById("home-btn-all-impossible").addEventListener("click",()=>h("impossible")),T()}function N(n){document.querySelectorAll(".nav-link").forEach(o=>{o.getAttribute("data-target")===n?o.classList.add("active"):o.classList.remove("active")}),document.querySelectorAll(".page-section").forEach(o=>{o.id===`page-${n}`?o.classList.add("active"):o.classList.remove("active")}),I!==n&&(window.scrollTo({top:0,behavior:"smooth"}),I=n)}async function O(){const n=Object.keys(x).map(t=>U(t));await Promise.all(n),Q()}async function U(n){try{p.loading[n]=!0,p.errors[n]=null;const t=await fetch(x[n]);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const l=await t.text(),o=q(l);if(o.length===0)throw new Error("Empty CSV data");p.data[n]=o,p.loading[n]=!1}catch(t){console.warn(`Fetch failed for ${n}. Using local data fallback: ${t.message}`),p.data[n]=H[n],p.errors[n]=t.message,p.loading[n]=!1}g(n)}function q(n){const t=[];let l=[""],o=!1;for(let r=0;r<n.length;r++){const i=n[r],u=n[r+1];i==='"'?o&&u==='"'?(l[l.length-1]+='"',r++):o=!o:i===","&&!o?l.push(""):(i==="\r"||i===`
`)&&!o?(i==="\r"&&u===`
`&&r++,t.push(l),l=[""]):l[l.length-1]+=i}if((l.length>1||l[0]!=="")&&t.push(l),t.length===0)return[];const e=t[0].map(r=>r.trim()),s=[];for(let r=1;r<t.length;r++){const i=t[r];if(i.length===1&&i[0].trim()==="")continue;const u={};for(let c=0;c<e.length;c++){const d=e[c],f=i[c]!==void 0?i[c].trim():"";d&&(u[d]=f)}s.push(u)}return s}function a(n,t){const l=Object.keys(n);for(const o of t){const e=l.find(s=>s.toLowerCase().replace(/\s+/g,"")===o.toLowerCase().replace(/\s+/g,""));if(e)return n[e]}for(const o of t){const e=l.find(s=>s.toLowerCase().replace(/\s+/g,"").includes(o.toLowerCase().replace(/\s+/g,"")));if(e)return n[e]}return""}function R(){const n=document.getElementById("demonlist-search"),t=document.getElementById("demonlist-filter-diff"),l=document.getElementById("demonlist-sort");n.addEventListener("input",d=>{p.filters.demonlist.search=d.target.value,g("demonlist")}),t.addEventListener("change",d=>{p.filters.demonlist.difficulty=d.target.value,g("demonlist")}),l.addEventListener("change",d=>{p.filters.demonlist.sort=d.target.value,g("demonlist")});const o=document.getElementById("impossible-search"),e=document.getElementById("impossible-filter-cps"),s=document.getElementById("impossible-filter-tps"),r=document.getElementById("impossible-sort");o.addEventListener("input",d=>{p.filters.impossible.search=d.target.value,g("impossible")}),e.addEventListener("change",d=>{p.filters.impossible.cps=d.target.value,g("impossible")}),s.addEventListener("change",d=>{p.filters.impossible.tps=d.target.value,g("impossible")}),r.addEventListener("change",d=>{p.filters.impossible.sort=d.target.value,g("impossible")}),document.getElementById("slayers-search").addEventListener("input",d=>{p.filters.slayers.search=d.target.value,g("slayers")});const u=document.getElementById("future-search"),c=document.getElementById("future-filter-diff");u.addEventListener("input",d=>{p.filters.future.search=d.target.value,g("future")}),c.addEventListener("change",d=>{p.filters.future.difficulty=d.target.value,g("future")})}function g(n){if(p.loading[n])return;const t=p.data[n];n==="demonlist"?F(t):n==="impossible"?V(t):n==="slayers"?j(t):n==="future"&&K(t)}function F(n){const t=document.getElementById("demonlist-table"),l=document.getElementById("demonlist-filter-diff");if(l.options.length<=1){const s=new Set;n.forEach(r=>{const i=a(r,["leveldifficulty","difficulty","diff"]);i&&s.add(i.trim())}),s.forEach(r=>{const i=document.createElement("option");i.value=r,i.textContent=r,l.appendChild(i)})}let o=[...n];const e=p.filters.demonlist;if(e.search){const s=e.search.toLowerCase();o=o.filter(r=>{const i=a(r,["level","name"]).toLowerCase(),u=a(r,["author","creator"]).toLowerCase(),c=a(r,["verifier","verifer"]).toLowerCase();return i.includes(s)||u.includes(s)||c.includes(s)})}if(e.difficulty&&e.difficulty!=="all"&&(o=o.filter(s=>a(s,["leveldifficulty","difficulty","diff"]).trim()===e.difficulty)),o.sort((s,r)=>{const i=parseInt(a(s,["top","rank"]))||9999,u=parseInt(a(r,["top","rank"]))||9999;if(e.sort==="rank-asc")return i-u;if(e.sort==="rank-desc")return u-i;if(e.sort==="name-asc"){const c=a(s,["level","name"]).toLowerCase(),d=a(r,["level","name"]).toLowerCase();return c.localeCompare(d,"ru")}if(e.sort==="points-desc"){const c=parseFloat(a(s,["points","pts"]))||0;return(parseFloat(a(r,["points","pts"]))||0)-c}return i-u}),o.length===0){t.innerHTML='<div style="padding: 30px; text-align: center; color: var(--text-secondary);">Ничего не найдено</div>';return}t.innerHTML="",o.forEach(s=>{const r=a(s,["top","rank"]),i=a(s,["level","name"]),u=a(s,["author","creator"]),c=a(s,["verifier","verifer"]),d=a(s,["points","pts"]),f=a(s,["leveldifficulty","difficulty"]),y=B(f),m=E(f),b=p.selectedLevel.demonlist&&a(p.selectedLevel.demonlist,["level","name"])===i,v=document.createElement("div");v.className=`leaderboard-row grid-demonlist ${b?"active":""}`,v.innerHTML=`
      <div class="cell-rank">#${r}</div>
      <div class="cell-name-block">
        <div class="cell-name">${i}</div>
        <div class="cell-badge"><span class="badge ${y}" style="margin-top: 4px; padding: 2px 6px; font-size: 0.65rem;">${m}</span></div>
      </div>
      <div class="cell-author cell-sub">${u}</div>
      <div class="cell-verifer cell-sub">${c}</div>
      <div class="cell-points" style="font-weight: 600; color: var(--accent-cyan);">${d}</div>
    `,v.addEventListener("click",()=>{C("demonlist",s),document.querySelectorAll("#demonlist-table .leaderboard-row").forEach(L=>L.classList.remove("active")),v.classList.add("active")}),t.appendChild(v)})}function V(n){const t=document.getElementById("impossible-table");let l=[...n];const o=p.filters.impossible;if(o.search){const e=o.search.toLowerCase();l=l.filter(s=>{const r=a(s,["levels","level","name"]).toLowerCase(),i=a(s,["author","creator"]).toLowerCase();return r.includes(e)||i.includes(e)})}if(o.cps&&o.cps!=="all"&&(l=l.filter(e=>a(e,["cps"]).toLowerCase().includes(o.cps.toLowerCase()))),o.tps&&o.tps!=="all"&&(l=l.filter(e=>a(e,["использование tps bypass","tps bypass","tps"])===o.tps)),l.sort((e,s)=>{const r=a(e,["top impossible","top","rank"]),i=a(s,["top impossible","top","rank"]),u=parseInt(r.replace(/\D/g,""))||9999,c=parseInt(i.replace(/\D/g,""))||9999;if(o.sort==="rank-asc")return u-c;if(o.sort==="rank-desc")return c-u;if(o.sort==="name-asc"){const d=a(e,["levels","level","name"]).toLowerCase(),f=a(s,["levels","level","name"]).toLowerCase();return d.localeCompare(f,"ru")}return u-c}),l.length===0){t.innerHTML='<div style="padding: 30px; text-align: center; color: var(--text-secondary);">Ничего не найдено</div>';return}t.innerHTML="",l.forEach(e=>{const r=a(e,["top impossible","top","rank"]).replace(/\D/g,""),i=a(e,["levels","level","name"]),u=a(e,["author","creator"]),c=a(e,["cps"]),d=a(e,["id"]),f=a(e,["использование tps bypass","tps bypass","tps"]),y=S(c),m=f==="Разрешено"?"badge-tps-allowed":"badge-tps-disallowed",b=p.selectedLevel.impossible&&a(p.selectedLevel.impossible,["levels","level","name"])===i,v=document.createElement("div");v.className=`leaderboard-row grid-impossible ${b?"active":""}`,v.innerHTML=`
      <div class="cell-rank">#${r}</div>
      <div class="cell-name">${i}</div>
      <div class="cell-author cell-sub">${u}</div>
      <div class="cell-cps">${y}</div>
      <div class="cell-id cell-sub">${d}</div>
      <div class="cell-tps"><span class="badge ${m}">${f}</span></div>
    `,v.addEventListener("click",()=>{C("impossible",e),document.querySelectorAll("#impossible-table .leaderboard-row").forEach(L=>L.classList.remove("active")),v.classList.add("active")}),t.appendChild(v)})}function j(n){const t=document.getElementById("slayers-table");let l=[...n];if(p.filters.slayers.search){const o=p.filters.slayers.search.toLowerCase();l=l.filter(e=>a(e,["slayers","slayer","player"]).toLowerCase().includes(o))}if(l.sort((o,e)=>{const s=parseInt(a(o,["tops","completed"]))||0,r=parseInt(a(e,["tops","completed"]))||0;return s-r}),l.length===0){t.innerHTML='<div style="padding: 30px; text-align: center; color: var(--text-secondary);">Ничего не найдено</div>';return}t.innerHTML="",l.forEach((o,e)=>{const s=e+1,r=a(o,["slayers","slayer","player"]),i=a(o,["tops","completed"]);let u="";s===1?u="cell-rank-gold":s===2?u="cell-rank-silver":s===3&&(u="cell-rank-bronze");const c=document.createElement("div");c.className="leaderboard-row grid-slayers",c.innerHTML=`
      <div class="cell-rank ${u}">#${s}</div>
      <div class="cell-name">${r}</div>
      <div class="cell-tops" style="font-weight: 700; color: var(--accent-purple); font-size: 1.1rem;">${i}</div>
    `,t.appendChild(c)})}function K(n){const t=document.getElementById("future-container"),l=document.getElementById("future-filter-diff");if(l.options.length<=1){const s=new Set;n.forEach(r=>{const i=a(r,["difficulty","diff"]);i&&s.add(i.trim())}),s.forEach(r=>{const i=document.createElement("option");i.value=r,i.textContent=r,l.appendChild(i)})}let o=[...n];const e=p.filters.future;if(e.search){const s=e.search.toLowerCase();o=o.filter(r=>{const i=a(r,["levels","level","name"]).toLowerCase(),u=a(r,["author","creator"]).toLowerCase(),c=a(r,["verifier","verifer"]).toLowerCase();return i.includes(s)||u.includes(s)||c.includes(s)})}if(e.difficulty&&e.difficulty!=="all"&&(o=o.filter(s=>a(s,["difficulty","diff"]).trim()===e.difficulty)),o.length===0){t.innerHTML='<div style="padding: 30px; text-align: center; color: var(--text-secondary); grid-column: 1/-1;">Ничего не найдено</div>';return}t.innerHTML="",o.forEach(s=>{const r=a(s,["levels","level","name"]);if(!r)return;const i=a(s,["upcoming top","top"]),u=a(s,["author","creator"]);let c=a(s,["verifier","verifer"]);const d=a(s,["difficulty","diff"]);(c.includes("?????")||c.trim()==="")&&(c='<span style="color: var(--text-muted);">Неизвестно</span>');const f=B(d),y=E(d),m=document.createElement("div");m.className="future-card",m.innerHTML=`
      <div class="future-rank-badge">${i}</div>
      <div class="future-name">${r}</div>
      
      <div class="future-detail-item">
        <span class="future-detail-label" style="color: var(--text-secondary);">Сложность:</span>
        <span class="badge ${f}" style="padding: 2px 6px; font-size: 0.7rem;">${y}</span>
      </div>
      
      <div class="future-detail-item" style="margin-top: 8px;">
        <span class="future-detail-label" style="color: var(--text-secondary);">Создатель:</span>
        <span style="font-weight: 500;">${u}</span>
      </div>
      
      <div class="future-detail-item">
        <span class="future-detail-label" style="color: var(--text-secondary);">Верификатор:</span>
        <span style="font-weight: 500;">${c}</span>
      </div>
    `,t.appendChild(m)})}function C(n,t,l=!0){p.selectedLevel[n]=t;const o=a(t,["level","levels","name"]);l&&h(n,{level:o}),window.innerWidth<=1024?G(n,t):z(n,t)}function z(n,t){const l=document.getElementById(`${n}-details-content`),o=document.getElementById(`${n}-details-placeholder`);o.style.display="none",l.style.display="block",l.innerHTML=A(n,t)}function A(n,t){const l=a(t,["level","levels","name"]),o=a(t,["author","creator"]);if(n==="demonlist"){const e=a(t,["top","rank"]),s=a(t,["verifier","verifer"]),r=a(t,["points","pts"]),i=a(t,["leveldifficulty","difficulty"]),u=a(t,["progresses","progress"]),c=B(i),d=E(i),f=X(u);let y='<div class="progress-item" style="color: var(--text-secondary);">Нет прогрессов</div>';return f.length>0&&(y=f.map(m=>{const b=m.lastIndexOf("-");let v=m,L="100%";if(b!==-1)v=m.substring(0,b).trim(),L=m.substring(b+1).trim();else{const $=m.indexOf("%");if($!==-1){const w=m.lastIndexOf(" ",$);w!==-1&&(v=m.substring(0,w).trim(),L=m.substring(w+1).trim())}}return`
          <div class="progress-item">
            <span class="progress-player">${v}</span>
            <span class="progress-percentage">${L}</span>
          </div>
        `}).join("")),`
      <div class="detail-title-wrapper">
        <div class="detail-rank">Топ #${e}</div>
        <h2 class="detail-title">${l}</h2>
      </div>
      
      <div class="detail-meta-list">
        <div class="detail-meta-item">
          <span class="detail-meta-label">Сложность</span>
          <span class="badge ${c}">${d}</span>
        </div>
        <div class="detail-meta-item">
          <span class="detail-meta-label">Создатель</span>
          <span class="detail-meta-val">${o}</span>
        </div>
        <div class="detail-meta-item">
          <span class="detail-meta-label">Верификатор</span>
          <span class="detail-meta-val">${s}</span>
        </div>
        <div class="detail-meta-item">
          <span class="detail-meta-label">Очки за прохождение</span>
          <span class="detail-meta-val" style="color: var(--accent-cyan); font-weight: 700;">${r} pts</span>
        </div>
      </div>
      
      <div class="detail-progress-section">
        <div class="progress-section-title">Рекорды игроков</div>
        <div class="progress-list">
          ${y}
        </div>
      </div>
      
      <button class="btn btn-secondary" style="width: 100%;" onclick="navigateTo('rules')">Подать свой рекорд</button>
    `}else if(n==="impossible"){const s=a(t,["top impossible","top","rank"]).replace(/\D/g,""),r=a(t,["cps"]),i=a(t,["id"]),u=a(t,["использование tps bypass","tps bypass","tps"]),c=a(t,["рекорд сервера","рекорд","record"]),d=S(r);return`
      <div class="detail-title-wrapper">
        <div class="detail-rank">Impossible Топ #${s}</div>
        <h2 class="detail-title">${l}</h2>
      </div>
      
      <div class="detail-meta-list">
        <div class="detail-meta-item">
          <span class="detail-meta-label">Категория CPS</span>
          <span>${d}</span>
        </div>
        <div class="detail-meta-item">
          <span class="detail-meta-label">Создатель</span>
          <span class="detail-meta-val">${o}</span>
        </div>
        <div class="detail-meta-item">
          <span class="detail-meta-label">ID Уровня</span>
          <span class="detail-meta-val" style="color: var(--text-secondary); font-family: monospace;">${i}</span>
        </div>
        <div class="detail-meta-item">
          <span class="detail-meta-label">TPS Bypass</span>
          <span class="badge ${u==="Разрешено"?"badge-tps-allowed":"badge-tps-disallowed"}">${u}</span>
        </div>
      </div>
      
      <div class="detail-progress-section">
        <div class="progress-section-title">Лучший результат сервера</div>
        <div class="progress-list">
          <div class="progress-item" style="border: none; padding: 4px 0;">
            <span class="progress-player" style="font-weight: 500;">
              ${c&&c.toLowerCase()!=="no"?c:'<span style="color: var(--text-muted);">Нет рекордов</span>'}
            </span>
          </div>
        </div>
      </div>
      
      <a class="btn btn-secondary" style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px;" href="https://discord.gg/vBkthNt2N" target="_blank">
        <svg width="16" height="16" viewBox="0 0 24 24"><use href="#icon-discord"/></svg>
        Обсудить в Discord
      </a>
    `}return""}function _(){const n=document.getElementById("details-modal");document.getElementById("modal-close").addEventListener("click",k),n.addEventListener("click",l=>{l.target===n&&k()})}function G(n,t){const l=document.getElementById("details-modal"),o=document.getElementById("modal-content");o.innerHTML=A(n,t),l.classList.add("active")}function k(){document.getElementById("details-modal").classList.remove("active");const l=(window.location.hash||"#home").split("?")[0];window.location.hash=l}function Q(){if(document.getElementById("stat-verified-count").textContent=p.data.demonlist.length||"-",document.getElementById("stat-impossible-count").textContent=p.data.impossible.length||"-",document.getElementById("stat-future-count").textContent=p.data.future.length||"-",p.data.slayers.length>0){const e=[...p.data.slayers];e.sort((u,c)=>{const d=parseInt(a(u,["tops","completed"]))||0,f=parseInt(a(c,["tops","completed"]))||0;return d-f});const s=e[0],r=a(s,["slayers","slayer","player"]),i=a(s,["tops","completed"]);document.getElementById("stat-top-slayer").textContent=`${r} (${i})`}else document.getElementById("stat-top-slayer").textContent="-";const n=document.getElementById("home-top-demons-container");n.innerHTML="",p.data.demonlist.slice(0,3).forEach((e,s)=>{const r=a(e,["level","name"]),i=a(e,["author","creator"]),u=a(e,["leveldifficulty","difficulty"]),c=a(e,["points","pts"]),d=document.createElement("div");d.className=`top3-card rank-${s+1}`,d.innerHTML=`
      <div class="top3-badge">${s+1}</div>
      <div class="top3-name">${r}</div>
      <div class="top3-author">by ${i}</div>
      <div class="top3-metric">${c} pts (${E(u)})</div>
    `,d.addEventListener("click",()=>{h("demonlist",{level:r})}),n.appendChild(d)});const l=document.getElementById("home-top-impossible-container");l.innerHTML="",p.data.impossible.slice(0,3).forEach((e,s)=>{const r=a(e,["levels","level","name"]),i=a(e,["author","creator"]),u=a(e,["cps"]),c=document.createElement("div");c.className=`top3-card rank-${s+1}`,c.innerHTML=`
      <div class="top3-badge">${s+1}</div>
      <div class="top3-name">${r}</div>
      <div class="top3-author">by ${i}</div>
      <div class="top3-metric" style="color: var(--accent-purple); font-weight: 600;">${u} CPS</div>
    `,c.addEventListener("click",()=>{h("impossible",{level:r})}),l.appendChild(c)}),W()}function W(){const n=document.getElementById("home-updates-list");n.innerHTML="";const t=[],l="14.06.2026";if(p.data.demonlist.length>0){const e=p.data.demonlist[0];t.push({author:"DIMGDPS",date:l,text:`Уровень "${a(e,["level","name"])}" от ${a(e,["author","creator"])} удерживает позицию Топ-1 сложнейших демонов сервера.`})}const o=p.data.impossible.find(e=>{const s=a(e,["рекорд сервера","record"]);return s&&s.toLowerCase()!=="no"&&s.includes("%")});if(o&&t.push({author:"Рекорд",date:l,text:`Установлен рекорд сервера на Impossible-уровне "${a(o,["levels","name"])}": ${a(o,["рекорд сервера","record"])}.`}),p.data.slayers.length>0){const e=p.data.slayers[0];t.push({author:"Топ слеер",date:l,text:`${a(e,["slayers","player"])} занимает лидирующее место в рейтинге слееров с результатом в ${a(e,["tops"])} пройденных топов.`})}if(p.data.future.length>0){const e=p.data.future[0];t.push({author:"Анонс",date:l,text:`Анонсирован будущий уровень "${a(e,["levels","name"])}" (предположительно ${a(e,["upcoming top","top"])}). Верификатор: ${a(e,["verifier","verifer"])}.`})}t.forEach(e=>{const s=document.createElement("div");s.className="update-item",s.innerHTML=`
      <div class="update-icon">
        <svg viewBox="0 0 24 24"><use href="#icon-info"/></svg>
      </div>
      <div class="update-details">
        <div class="update-meta">
          <span>${e.author}</span>
          <span>${e.date}</span>
        </div>
        <div class="update-text">${e.text}</div>
      </div>
    `,n.appendChild(s)})}function Y(){const n=document.getElementById("record-form"),t=document.getElementById("form-success-msg"),l=document.getElementById("formatted-record-text"),o=document.getElementById("copy-record-btn");n&&(n.addEventListener("submit",e=>{e.preventDefault();const s=document.getElementById("frm-nickname").value,r=document.getElementById("frm-level").value,i=document.getElementById("frm-progress").value,u=document.getElementById("frm-video").value,c=document.getElementById("frm-notes").value||"нет",d=`!submit
Игрок: ${s}
Уровень: ${r}
Прогресс: ${i}%
Видео: ${u}
Комментарий: ${c}`;l&&(l.value=d),t.style.display="block",n.reset()}),o&&l&&o.addEventListener("click",e=>{e.preventDefault(),l.select(),navigator.clipboard.writeText(l.value);const s=o.textContent;o.textContent="Скопировано!",setTimeout(()=>{o.textContent=s},2e3)}))}function X(n){if(!n||n.toLowerCase()==="no")return[];const t=n.split(/\r?\n/),l=[];for(const o of t){const e=o.trim();if(!e)continue;const s=e.split(new RegExp("(?<=%)\\s+"));for(const r of s)r.trim()&&l.push(r.trim())}return l}function E(n){let t=n||"Extreme Demon";const l=t.toLowerCase();return l.includes("extreme")?"Extreme Demon":l.includes("insane")?"Insane Demon":l.includes("hard")?"Hard Demon":l.includes("medium")?"Medium Demon":l.includes("easy")?"Easy Demon":t}function B(n){const t=(n||"").toLowerCase();return t.includes("extreme")?"badge-diff-extreme":t.includes("insane")?"badge-diff-insane":t.includes("hard")?"badge-diff-hard":t.includes("medium")?"badge-diff-medium":t.includes("easy")||t.includes("free")?"badge-diff-easy":"badge-diff-extreme"}function S(n){const t=(n||"").toLowerCase().replace(/\s+/g,"");return t.includes("low")?'<span class="badge badge-cps-low">Low CPS (&lt;5)</span>':t.includes("medium")?'<span class="badge badge-cps-medium">Medium CPS (5-10)</span>':t.includes("high")&&!t.includes("ultra")?'<span class="badge badge-cps-high">High CPS (10-15)</span>':t.includes("ultra")||t.includes("15+")?'<span class="badge badge-cps-ultra">Ultra CPS (15+)</span>':`<span class="badge badge-cps-high">${n}</span>`}
