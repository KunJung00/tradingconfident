/**
 * @license lucide v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=(e,n,t=[])=>{const o=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(n).forEach(s=>{o.setAttribute(s,String(n[s]))}),t.length&&t.forEach(s=>{const l=y(...s);o.appendChild(l)}),o};var j=([e,n,t])=>y(e,n,t);/**
 * @license lucide v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=e=>Array.from(e.attributes).reduce((n,t)=>(n[t.name]=t.value,n),{}),M=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",q=e=>e.flatMap(M).map(t=>t.trim()).filter(Boolean).filter((t,o,s)=>s.indexOf(t)===o).join(" "),N=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(n,t,o)=>t.toUpperCase()+o.toLowerCase()),v=(e,{nameAttr:n,icons:t,attrs:o})=>{const s=e.getAttribute(n);if(s==null)return;const l=N(s),m=t[l];if(!m)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const h=$(e),[A,k,C]=m,x={...k,"data-lucide":s,...o,...h},w=q(["lucide",`lucide-${s}`,h,o]);w&&Object.assign(x,{class:w});const E=j([A,x,C]);return e.parentNode?.replaceChild(E,e)};/**
 * @license lucide v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=["svg",d,[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]]];/**
 * @license lucide v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=["svg",d,[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]]];/**
 * @license lucide v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=["svg",d,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]]];/**
 * @license lucide v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=["svg",d,[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]]];/**
 * @license lucide v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=({icons:e={},nameAttr:n="data-lucide",attrs:t={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const o=document.querySelectorAll(`[${n}]`);if(Array.from(o).forEach(s=>v(s,{nameAttr:n,icons:e,attrs:t})),n==="data-lucide"){const s=document.querySelectorAll("[icon-name]");s.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(s).forEach(l=>v(l,{nameAttr:"icon-name",icons:e,attrs:t})))}},b={CheckCircle:L,XCircle:T,RefreshCw:O,ArrowRight:I},c=[{question:"ตอนนี้เรากำลัง 'อยากเทรด' หรือ 'พร้อมเทรด'?",detail:"ต่างกันตรงที่อันหนึ่งมาจากความอยาก อีกอันมาจากความนิ่ง",warning:"อยากเทรด เพราะว่าง เพราะเบื่อ หรือเพราะเมื่อวานแพ้ — ไม่ใช่สัญญาณที่ดี",encouragement:"ถ้าคำตอบคือ 'อยากเทรด' ให้พักสักหน่อย ยอมให้ตัวเองเบื่อโดยไม่ต้องทำอะไรบ้างก็ได้ เพราะใจที่นิ่งจะเห็นโอกาสได้ชัดกว่าใจที่หิว"},{question:"ตอนนี้ใจเราสงบหรือพยายามควบคุมตลาด?",detail:"รู้สึกว่าต้อง 'ทำให้มันเกิด' หรือ 'รอดูให้มันเกิดเอง'?",warning:"ความพยายามควบคุมคืออีโก้ในคราบแผน",encouragement:"ถ้าเริ่มรู้สึกอยากบังคับให้ตลาดวิ่งตามใจ นั่นคือสัญญาณว่าควรถอยออกมาหนึ่งก้าว เปิดเพลงเบาๆ หรือเดินสั้นๆ ก่อนกลับมาใหม่"},{question:"วันนี้เรามีเป้าหมายที่ชัดหรือแค่หวังจะได้กำไร?",detail:"เป้าหมายคือกระบวนการ ส่วนความหวังคืออารมณ์",warning:"ถ้าไม่มีเป้าหมายชัด มันจะกลายเป็นการไล่ตามความรู้สึก",encouragement:"ลองถามตัวเองใหม่อีกที — วันนี้อยากเทรดเพื่อฝึกสติ ฝึกวินัย หรือเพื่อพิสูจน์บางอย่าง? ถ้ายังตอบไม่ได้ ให้ปิดจอไว้ก่อน ตลาดยังไม่หนีไปไหน"},{question:"ตอนนี้ร่างกายบอกอะไรเรา?",detail:"ไหล่เกร็ง มือเย็น หรือใจเต้นแรง?",warning:"ถ้าร่างกายตึง สมองจะมองภาพผิด",encouragement:"หายใจลึกๆ 5 ครั้ง วางมือจากเมาส์ ปล่อยให้อากาศไหลผ่านตัว ถ้ารู้สึกเบาขึ้นเมื่อไหร่ ค่อยกลับมาคิดใหม่อีกที"},{question:"เรากำลังเทรดเพื่อชนะ หรือเพื่อเข้าใจตลาด?",detail:"การเทรดเพื่อชนะคือการแข่ง การเทรดเพื่อเข้าใจคือการเติบโต",warning:"ถ้าตอนนี้มีแต่คำว่า 'ต้องได้' ในหัว — หยุดก่อน มันไม่ใช่ตลาด มันคืออีโก้",encouragement:"เทรดเดอร์ที่ดีไม่ได้ชนะเพราะเขารู้เยอะกว่า แต่เพราะเขายอมรับความไม่แน่นอนได้เร็วกว่า ถ้าวันนี้ใจยังแข็ง อย่าฝืน เทรดเมื่อใจอ่อน"}];let r=0,i=[],g=!1,p=!1;const f=document.getElementById("app");function a(){if(p){f.innerHTML=`
      <div class="text-center">
        <svg data-lucide="check-circle" class="w-24 h-24 text-green-500 mx-auto mb-4"></svg>
        <h1 class="text-4xl font-bold text-green-600 mb-4">✨ อนุญาตให้เทรด ✨</h1>
        <div class="bg-green-50 rounded-xl p-6 mb-6 text-left">
          <p class="text-lg text-gray-700 mb-2">คุณผ่านการเช็กสติทั้ง 5 ข้อแล้ว</p>
          <p class="text-lg text-gray-700 mb-2">ตอนนี้คุณมีความชัดเจนในสิ่งที่จะทำ มีสติที่ดี และพร้อมรับมือกับผลลัพธ์</p>
          <p class="text-xl font-semibold text-green-700">
            เทรดด้วยแผน ไม่ใช่ด้วยอารมณ์<br>
            เทรดด้วยความมั่นใจ ไม่ใช่ความหวัง<br>
            เทรดด้วยสติ ไม่ใช่ความเร่งรีบ
          </p>
        </div>
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 text-left text-sm text-blue-800">
          💡 <strong>จำไว้:</strong> ถ้าระหว่างเทรดรู้สึกว่าสติเริ่มหลุด ให้กลับมาทำแบบทดสอบนี้ใหม่ได้เสมอ
        </div>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button onclick="resetAll()" class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg flex items-center justify-center gap-2">
            <svg data-lucide="refresh-cw" class="w-5 h-5"></svg> เริ่มใหม่
          </button>
          <button onclick="openTradingView()" class="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg flex items-center justify-center gap-2">
            <svg data-lucide='arrow-right' class='w-5 h-5'></svg> ไปที่กราฟ XAUUSD
          </button>
        </div>
      </div>
    `,u({icons:b});return}if(g){const o=c[r];f.innerHTML=`
      <div class="text-center">
        <svg data-lucide="x-circle" class="w-20 h-20 text-orange-500 mx-auto mb-4"></svg>
        <h2 class="text-2xl font-bold text-gray-800 mb-2">ไม่เป็นไร ให้พักสักครู่</h2>
        <p class="text-gray-600 mb-4">ข้อ ${r+1}: ${o.question}</p>
        <div class="bg-orange-50 rounded-xl p-6 mb-6 text-left text-lg text-gray-700">${o.encouragement}</div>
        <div class="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6 text-left text-sm text-amber-800">
          <strong>💭 จำไว้:</strong> การยอมรับว่ายังไม่พร้อมนั้นดีกว่าการบังคับเข้าเทรดและเสียเงิน
        </div>
        <div class="flex gap-4">
          <button onclick="resetAll()" class="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg">เริ่มใหม่ทั้งหมด</button>
          <button onclick="continueAfterEncouragement()" class="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg">กลับไปตอบใหม่</button>
        </div>
      </div>
    `,u({icons:b});return}const e=c[r],n=r/c.length*100,t=i.map(()=>'<div class="w-3 h-3 rounded-full bg-green-500"></div>').join("");f.innerHTML=`
    <div>
      <div class="mb-8">
        <div class="flex justify-between items-center mb-2">
          <span class="text-sm font-semibold text-gray-600">ความคืบหน้า</span>
          <span class="text-sm font-semibold text-indigo-600">${r}/${c.length}</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-3">
          <div class="bg-indigo-500 h-3 rounded-full transition-all duration-500" style="width: ${n}%"></div>
        </div>
      </div>

      <div class="bg-indigo-50 rounded-xl p-6 mb-6">
        <h2 class="text-2xl font-bold text-gray-800 mb-3">${r+1}. ${e.question}</h2>
        <p class="text-gray-600 mb-2">${e.detail}</p>
        <p class="text-sm text-red-600 font-semibold">⚠️ ${e.warning}</p>
      </div>

      <div class="grid grid-cols-2 gap-4 mb-6">
        <button onclick="answer(true)" class="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
          <svg data-lucide='check-circle' class='w-6 h-6'></svg> ตอบได้
        </button>
        <button onclick="answer(false)" class="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
          <svg data-lucide='x-circle' class='w-6 h-6'></svg> ตอบไม่ได้
        </button>
      </div>

      <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded text-sm text-blue-800">
        <strong>💡 เคล็ดลับ:</strong> คำถามเหล่านี้ไม่ใช่ไว้เช็กแผน แต่ไว้เช็ก "สติ" ก่อนแผน
        ตอบได้ครบ ใจจะนิ่งพอให้เห็นกราฟอย่างที่มันเป็น ไม่ใช่อย่างที่เราอยากให้เป็น
      </div>

      ${i.length>0?`<div class="mt-6 flex gap-2 justify-center">${t}</div>`:""}
    </div>
  `,u({icons:b})}function S(e){if(!e){g=!0,a();return}i.push(!0),r<c.length-1?r++:p=!0,a()}function H(){r=0,i=[],g=!1,p=!1,a()}function B(){g=!1,a()}function X(){window.open("https://th.tradingview.com/chart/f56qMsI3/?symbol=COMEX_MINI%3AMGC1%21","_blank")}Object.assign(window,{answer:S,resetAll:H,continueAfterEncouragement:B,openTradingView:X});a();
