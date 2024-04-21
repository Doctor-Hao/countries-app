(function(){"use strict";var e={4574:function(e,t,n){var r=n(8355),o=n(76);t.A={async getCountries(){try{const e=await r.A.get("./data.json"),t=e.data;return t.forEach((e=>{e.population=o.A.formatPopulation(e.population)})),t}catch(e){console.error("Error: ",e)}},async getCountryDetails(e){try{const t=await r.A.get("./data.json"),n=t.data;n.forEach((e=>{e.population=o.A.formatPopulation(e.population)}));const i=n.find((t=>t.name===e));return i}catch(t){console.error("Error: ",t)}}}},76:function(e,t,n){var r=n(8355);t.A={async getCountryName(e){try{const t=await r.A.get("./data.json"),n=t.data,o=e.map((e=>{const t=n.find((t=>t.alpha3Code===e));return t?t.name:null}));return o.filter((e=>null!==e))}catch(t){console.error("Error: ",t)}},formatPopulation(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}},7973:function(e,t,n){var r=n(5130),o=n(6768);function i(e,t,n,r,i,a){const u=(0,o.g2)("base-header"),s=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(u),(0,o.bF)(s)],64)}const a={class:"bg-white shadow lg:mb-12 lg:px-3 lg:py-5 px-2 py-2 mb-6",style:{"box-shadow":"0 2px 10px rgba(152, 152, 152, 0.5)"}},u={class:"xl:container mx-auto"};function s(e,t,n,r,i,s){const l=(0,o.g2)("base-text"),c=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",a,[(0,o.Lk)("div",u,[(0,o.bF)(c,{to:"/"},{default:(0,o.k6)((()=>[(0,o.bF)(l,{class:"inline-block transition duration-300 ease-in-out hover:text-blue-500",size:24,"adaptive-size":10,weight:"800",text:i.text,tag:"h1"},null,8,["text"])])),_:1})])])}var l=n(5297),c={name:"HelloWorld",components:{BaseText:l.A},props:{msg:String},data(){return{text:"Where in the world?"}}},p=n(1241);const d=(0,p.A)(c,[["render",s]]);var f=d,g={name:"AppView",components:{BaseHeader:f}};const h=(0,p.A)(g,[["render",i]]);var m=h,v=n(1387);const b={class:"xl:container mx-auto px-2 mb-10"},y={key:0,class:"grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:mx-0 md:mx-0 mx-5 lg:gap-16 gap-12"},x={key:1,class:"flex justify-center"};function w(e,t,n,r,i,a){const u=(0,o.g2)("base-search"),s=(0,o.g2)("base-card"),l=(0,o.g2)("base-text");return(0,o.uX)(),(0,o.CE)("section",b,[(0,o.bF)(u,{onInputValue:a.handleInput},null,8,["onInputValue"]),a.countriesList.length?((0,o.uX)(),(0,o.CE)("div",y,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.countriesList,((e,t)=>((0,o.uX)(),(0,o.Wv)(s,{key:t,"img-url":e.flag,title:e.name,population:e.population,region:e.region,capital:e.capital,onCardClicked:a.moreInfo},null,8,["img-url","title","population","region","capital","onCardClicked"])))),128))])):((0,o.uX)(),(0,o.CE)("div",x,[(0,o.bF)(l,{size:20,weight:"600",text:"Нет данных "+i.searchValue,tag:"p"},null,8,["text"])]))])}n(4114);const C={class:"relative w-full max-w-md"},k=(0,o.Lk)("span",{class:"absolute lg:left-8 lg:top-4 left-4 top-3"},[(0,o.Lk)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,o.Lk)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z",fill:"#848484"})])],-1);function A(e,t,n,r,i,a){return(0,o.uX)(),(0,o.CE)("div",C,[(0,o.Lk)("input",{type:"search",placeholder:"Search for a country…",class:"w-full w-max-480 lg:pl-16 lg:mb-12 lg:py-4 mb-6 pl-10 pr-4 py-3 text-sm text-gray-700 bg-white border-none rounded-md shadow-md",onInput:t[0]||(t[0]=(...e)=>a.handleInput&&a.handleInput(...e))},null,32),k])}var E={methods:{handleInput(e){this.$emit("inputValue",e.target.value)}}};const S=(0,p.A)(E,[["render",A]]);var z=S;const L={class:"w-full h-40 object-cover mx-auto mb-5 shadow-sm"},N=["src","alt"],j={class:"lg:px-6 px-3"},F={class:"lg:pt-6 lg:pb-4 pt-3 pb-3"},D={class:"flex flex-col gap-1"};function O(e,t,n,r,i,a){const u=(0,o.g2)("base-text"),s=(0,o.g2)("base-description");return(0,o.uX)(),(0,o.CE)("div",{onClick:t[0]||(t[0]=(...e)=>a.handleClick&&a.handleClick(...e)),class:"cursor-pointer w-full bg-white border-none rounded-sm shadow-sm g-white shadow-md hover:shadow-lg transition duration-300 ease-in-out lg:pb-12 pb-6 hover:scale-105"},[(0,o.Lk)("div",L,[(0,o.Lk)("img",{src:n.imgUrl,alt:n.title,class:"w-full h-40 object-cover"},null,8,N)]),(0,o.Lk)("div",j,[(0,o.Lk)("div",F,[(0,o.bF)(u,{size:18,weight:"800",text:n.title,tag:"p"},null,8,["text"])]),(0,o.Lk)("ul",D,[(0,o.bF)(s,{name:"Population:","size-name":14,description:n.population,"size-description":14},null,8,["description"]),(0,o.bF)(s,{name:"Region:","size-name":14,description:n.region,"size-description":14},null,8,["description"]),(0,o.bF)(s,{name:"Capital:","size-name":14,description:n.capital,"size-description":14},null,8,["description"])])])])}var B=n(7830),T={components:{BaseText:l.A,BaseDescription:B.A},props:{imgUrl:String,title:String,population:[String,Number],region:String,capital:String},methods:{handleClick(){this.$emit("cardClicked",{title:this.title})}}};const X=(0,p.A)(T,[["render",O]]);var I=X,_=n(4574),P={components:{BaseText:l.A,BaseCard:I,BaseSearch:z},data(){return{searchValue:"",countriesData:[]}},created(){this.getCountries()},mounted(){},computed:{countriesList(){return this.searchValue.trim().length>0?this.countriesData.filter((e=>e.name.toLowerCase().includes(this.searchValue.trim().toLowerCase()))):this.countriesData}},methods:{async getCountries(){try{this.countriesData=await _.A.getCountries()}catch(e){console.error("Error: ",e)}},moreInfo(e){H.push({name:"CountryDetails",params:{id:e.title}})},handleInput(e){this.searchValue=e}}};const V=(0,p.A)(P,[["render",w]]);var W=V;const M=[{path:"/",name:"home",component:W},{path:"/:id",name:"CountryDetails",component:()=>n.e(579).then(n.bind(n,5484))}],$=(0,v.aE)({history:(0,v.LA)("/countries-app/"),routes:M});var H=$;(0,r.Ef)(m).use(H).mount("#app")},7830:function(e,t,n){n.d(t,{A:function(){return c}});var r=n(6768);const o={class:"flex gap-1"};function i(e,t,n,i,a,u){const s=(0,r.g2)("base-text");return(0,r.uX)(),(0,r.CE)("div",o,[(0,r.bF)(s,{size:n.sizeName,weight:"600",text:n.name,tag:"p"},null,8,["size","text"]),Array.isArray(n.description)?((0,r.uX)(!0),(0,r.CE)(r.FK,{key:1},(0,r.pI)(n.description,((e,t)=>((0,r.uX)(),(0,r.Wv)(s,{key:t,size:n.sizeDescription,weight:"300",text:e.name?e.name:e,tag:"p"},null,8,["size","text"])))),128)):((0,r.uX)(),(0,r.Wv)(s,{key:0,size:n.sizeDescription,weight:"300",text:n.description,tag:"p"},null,8,["size","text"]))])}var a=n(5297),u={components:{BaseText:a.A},props:{sizeName:Number,sizeDescription:Number,name:String,description:[String,Number,Array]}},s=n(1241);const l=(0,s.A)(u,[["render",i]]);var c=l},5297:function(e,t,n){n.d(t,{A:function(){return l}});var r=n(6768),o=n(4232);function i(e,t,n,i,a,u){return(0,r.uX)(),(0,r.Wv)((0,r.$y)(n.tag),{style:(0,o.Tr)({fontSize:u.calcSize,fontWeight:n.weight})},{default:(0,r.k6)((()=>[(0,r.eW)((0,o.v_)(n.text),1)])),_:1},8,["style"])}var a={props:{size:{type:Number,default:16},adaptiveSize:{type:Number,default:0,required:!1},weight:{type:String,default:"300"},text:{type:[String,Number],default:""},tag:{type:String,default:"div"}},computed:{calcSize(){return`calc(${this.size-this.adaptiveSize}px + ${this.adaptiveSize} * ((100vw - 320px) / 1920))`}}},u=n(1241);const s=(0,u.A)(a,[["render",i]]);var l=s}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],i=e[c][2];for(var u=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(u=!1,i<a&&(a=i));if(u){e.splice(c--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/CountryDetails.b458ab05.js"}}(),function(){n.miniCssF=function(e){return"css/CountryDetails.839ea55f.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="countries-app:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,s;if(void 0!==i)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var p=l[c];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==t+i){u=p;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=r),e[r]=[o];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/countries-app/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,o,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",n.nc&&(a.nonce=n.nc);var u=function(n){if(a.onerror=a.onload=null,"load"===n.type)o();else{var r=n&&n.type,u=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+u+")");s.name="ChunkLoadError",s.code="CSS_CHUNK_LOAD_FAILED",s.type=r,s.request=u,a.parentNode&&a.parentNode.removeChild(a),i(s)}};return a.onerror=a.onload=u,a.href=t,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),u=n.p+a;if(t(a,u))return o();e(r,u,null,o,i)}))},o={524:0};n.f.miniCss=function(e,t){var n={579:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),u=new Error,s=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],s=r[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var c=s(n)}for(t&&t(r);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},r=self["webpackChunkcountries_app"]=self["webpackChunkcountries_app"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(7973)}));r=n.O(r)})();
//# sourceMappingURL=app.e0a8f7a9.js.map