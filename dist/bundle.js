!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var o=n(1),r=n(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var c={insert:"head",singleton:!1},i=(o(e.i,r,c),r.locals?r.locals:{});e.exports=i},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},c=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i={};function a(e,t,n){for(var o=0;o<t.length;o++){var r={css:t[o][1],media:t[o][2],sourceMap:t[o][3]};i[e][o]?i[e][o](r):i[e].push(h(r,n))}}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var i=c(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var d,s=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function u(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=s(t,r);else{var c=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(c,i[t]):e.appendChild(c)}}function p(e,t,n){var o=n.css,r=n.media,c=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),c&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,f=0;function h(e,t){var n,o,r;if(t.singleton){var c=f++;n=m||(m=l(t)),o=u.bind(null,n,c,!1),r=u.bind(null,n,c,!0)}else n=l(t),o=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t,n){return(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r()),e=n.base?e+n.base:e,t=t||[],i[e]||(i[e]=[]),a(e,t,n),function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){i[e]||(i[e]=[]),a(e,t,n);for(var o=t.length;o<i[e].length;o++)i[e][o]();i[e].length=t.length,0===i[e].length&&delete i[e]}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,"html {\n  height: 100%;\n}\n\nhtml main {\n  height: 100%;\n}\n\nhtml body {\n  background-color: #181818;\n  color: #fff;\n  font-family: 'Courier Prime', monospace;\n}\n\nhtml body nav {\n  color: #04a026;\n  background-color: #0f0f0f;\n}\n\nhtml body h1 {\n  font-size: 30px;\n  font-weight: 500;\n  font-family: 'Orbitron', sans-serif;\n  width: 100%;\n  text-align: center;\n}\n\nhtml body .container {\n  max-width: 100%;\n  margin: 0;\n}\n\nhtml body .container .col-10 {\n  margin: 0 0;\n}\n\nhtml body .task-div {\n  width: 100%;\n  height: 36px;\n  margin: 2px 0;\n  padding: 5px;\n  font-size: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\nhtml body .project-header {\n  margin-top: 22px;\n  margin-bottom: 22px;\n  min-height: 200px;\n}\n\nhtml body .project-header .input {\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #383838;\n  min-height: 35px;\n  width: 100%;\n  color: #fff;\n}\n\nhtml body .project-header .title {\n  font-size: 2rem;\n  width: 50%;\n  margin-bottom: 10px;\n}\n\nhtml body .project-nav {\n  background-color: #0f0f0f;\n  height: 100%;\n}\n\nhtml body .project-nav .project-button {\n  width: 100%;\n  height: 40px;\n  margin: 2px 0;\n  font-family: 'Orbitron', sans-serif;\n  background-color: #04a026;\n  color: #fff;\n  border: 0;\n}",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(i=o,a=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),c=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot).concat(e," */")}));return[n].concat(c).concat([r]).join("\n")}var i,a,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o=0;o<e.length;o++){var r=[].concat(e[o]);n&&(r[2]?r[2]="".concat(n," and ").concat(r[2]):r[2]=n),t.push(r)}},t}},function(e,t,n){"use strict";n.r(t);var o=e=>{const{title:t}=e,{description:n}=e;let o=[];const r=()=>{let e;return Array.from(localStorage).forEach(n=>{let o=JSON.parse(n);o.title===t&&(e=o)}),e};return{title:t,description:n,tasks:o,addTask:e=>{let t=(()=>{let e=r();return Array.from(localStorage).indexOf(JSON.stringify(e))})(),n=r();n.tasks.push(e),localStorage[t]=JSON.stringify(n)},deleteTask:e=>delete o[e],projectCompleted:()=>e.hasOwnProperty("completed")?e.completed:(o.forEach(t=>{!1===t.completed?e.completed=!1:e.completed=!0}),e.completed)}};var r=e=>{const{title:t}=e;return{title:t,completed:(()=>!!e.hasOwnProperty("completed")&&e.completed)()}},c=(n(0),0);const i=e=>{const t=document.getElementById("add-task-form");t.innerHTML="";const n=document.createElement("input"),o=document.createElement("label");o.setAttribute("for","task-title"),o.innerHTML="Task: ";const r=document.createElement("input");r.type="checkbox",r.setAttribute("id","completed");const c=document.createElement("label");c.setAttribute("for","completed"),c.innerHTML="Task done?";const i=document.createElement("button");return i.innerHTML="Add",i.onclick=()=>{l(e,n,r),p(),t.innerHTML=" ",u(JSON.parse(localStorage[e.index]))},t.appendChild(o),t.appendChild(n),t.appendChild(c),t.appendChild(r),t.appendChild(i),t},a=()=>{const e=document.getElementById("project-head-div");e.innerHTML=" ";const t=document.getElementById("project-dec");t.innerHTML=" ";const n=document.createElement("input");n.setAttribute("class","input title"),n.placeholder="Project Name";const r=document.createElement("textarea");r.setAttribute("rows","4"),r.setAttribute("class","input desc"),r.placeholder="Project Description";const i=document.createElement("input");i.setAttribute("type","checkbox");const a=document.createElement("button");a.innerHTML="Add Project",a.setAttribute("class","btn btn-primary"),a.onclick=()=>{(e=>{e.index=c;const t=JSON.stringify(e);localStorage.setItem(c,t),c+=1})(o({title:`${n.value}`,description:`${r.value}`,completed:i.checked})),p()},e.appendChild(n),t.appendChild(r),t.appendChild(i),t.appendChild(a)},l=(e,t,n)=>o(e).addTask(r({title:`${t.value}`,completed:n.checked})),d=e=>{let t=[];return e.tasks.forEach(n=>{const o=document.createElement("div"),r=document.createElement("span"),c=document.createElement("span"),i=document.createTextNode(`${n.title}`),a=document.createElement("input");a.setAttribute("type","checkbox"),a.setAttribute("id",`${n.title}`),a.checked=n.completed,a.checked?o.setAttribute("class","task-div bg-success text-white"):o.setAttribute("class","task-div bg-warning text-dark"),a.onclick=()=>{n.completed=!n.completed,u(e)};const l=document.createElement("button");l.innerHTML="Delete",l.onclick=()=>{const t=e.tasks.indexOf(n);e.tasks.splice(t,1),u(e)},r.appendChild(i),c.appendChild(a),o.appendChild(r),o.appendChild(c),o.appendChild(l),t.push(o)}),t},s=e=>{const t=document.createElement("button");return t.setAttribute("id",`${e.title}`),t.setAttribute("class","project-button"),t.innerHTML=`${e.title}`,t.onclick=()=>u(e),c+=1,t},u=e=>{const t=document.getElementById("project-head-div");t.innerHTML=" ";const n=document.createElement("h2");n.setAttribute("id","project-head"),n.innerHTML=`${e.title}`,t.appendChild(n);const o=document.getElementById("project-dec"),r=document.createElement("p");r.textContent=`${e.description}`,o.innerHTML=r.outerHTML;const c=d(e),a=document.getElementById("project-tasks");a.innerHTML=" ",c.forEach(e=>{a.appendChild(e)}),document.getElementById("add-task-form").innerHTML=" ";const l=document.createElement("button");l.innerHTML="Add a task",l.onclick=()=>i(e);const s=document.getElementById("project-add-task");s.innerHTML=" ",s.appendChild(l)},p=()=>{c=0,(()=>{const e=document.getElementById("add-project-div");e.innerHTML=" ";const t=document.createElement("button");t.setAttribute("class","project-button bg-primary text-white"),t.innerHTML="New To-do",t.onclick=()=>{document.getElementById("project-tasks").innerHTML=" ",document.getElementById("project-add-task").innerHTML=" ",a()},e.appendChild(t)})();const e=(()=>{const e=JSON.parse(JSON.stringify(localStorage));let t=[];for(let n in e){const o=JSON.parse(e[n]);t.push(s(o,t))}return t})(),t=document.getElementById("project-list");t.innerHTML=" ",e.forEach(e=>{t.appendChild(e)})};p()}]);