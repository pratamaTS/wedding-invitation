var Ll=Object.defineProperty,$l=Object.defineProperties;var Fl=Object.getOwnPropertyDescriptors;var oi=Object.getOwnPropertySymbols;var Bl=Object.prototype.hasOwnProperty,Ul=Object.prototype.propertyIsEnumerable;var ai=(e,t,n)=>t in e?Ll(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,li=(e,t)=>{for(var n in t||(t={}))Bl.call(t,n)&&ai(e,n,t[n]);if(oi)for(var n of oi(t))Ul.call(t,n)&&ai(e,n,t[n]);return e},ui=(e,t)=>$l(e,Fl(t));import{_ as Ye,r as L,u as Vl,o as Gn,a as jl,b as A,c as C,d,n as qt,p as Wn,e as Xn,f as Hl,g as ql,t as st,h as In,w as Ce,v as zl,i as Kl,j as Ct,k as ci,l as $,m as se,F as zt,q as fe,s as go,x as Gl,y as Cn,z as _s,A as Wl,B as Xl}from"./index.6237400f.js";var Ql="/assets/Vancouver Sleep Clinic - Someone to Stay (Audio).a42551ce.mp3";const Yl=e=>(Wn("data-v-0d020d4a"),e=e(),Xn(),e),Jl={class:"fixed bottom-24 pl-2"},Zl=Yl(()=>d("i",{class:"fa-solid fa-gift"},null,-1)),tu=[Zl],eu={setup(e){const t=L(!1);Vl();const n=L("fa-solid fa-volume-off"),s=L(!1),r=new Audio(Ql),i=3,o=255,a=()=>setTimeout(()=>{document.querySelector("#envelope").scrollIntoView({behavior:"smooth"})},300),l=async()=>{if(!t.value)try{r.currentTime=i,r.muted=!1,await r.play(),n.value="fa-solid fa-volume-high",s.value=!0,t.value=!0}catch(u){console.error("Playback failed:",u),r.muted=!0}},c=()=>{s.value?(r.pause(),n.value="fa-solid fa-volume-off"):t.value?(r.currentTime=i,r.play(),n.value="fa-solid fa-volume-high"):l(),s.value=!s.value};return r.addEventListener("timeupdate",()=>{r.currentTime>=o&&(r.currentTime=i,r.play())}),Gn(()=>{r.muted=!0,window.addEventListener("click",l,{once:!0})}),jl(()=>{r.pause(),r.removeEventListener("timeupdate",handleTimeUpdate),window.removeEventListener("click",l)}),(u,h)=>(A(),C("section",Jl,[d("button",{onClick:c,class:"button"},[d("i",{class:qt(n.value)},null,2)]),d("button",{onClick:a,class:"button"},tu)]))}};var nu=Ye(eu,[["__scopeId","data-v-0d020d4a"]]),Je="/assets/flores.02d10ca5.png",su="/assets/prewedding-couple.004ef60e.jpg";const pe=e=>(Wn("data-v-539088fa"),e=e(),Xn(),e),ru={class:"absolute inset-0 flex items-center justify-center"},iu={class:"overlay-box p-8 text-center rounded-lg"},ou=pe(()=>d("h2",{class:"text-lg font-bold"},"Pernikahan",-1)),au={class:"tangerine-font text-title font-bold"},lu=pe(()=>d("p",{class:"font-medium text-lg my-2",style:{color:"gray"}},"#aYOGAsforeverwithNANDA",-1)),uu=pe(()=>d("div",{class:"my-4"},[d("img",{src:Je,class:"w-12 sm:w-16 mx-auto"})],-1)),cu={class:"text-sm"},hu=pe(()=>d("p",{class:"font-medium"},"Kepada Bapak/Ibu Yang Terhormat",-1)),du={class:"font-medium text-lg my-2"},fu=pe(()=>d("p",{class:"font-medium my-2"},"Izinkan kami turut mengundang anda dalam acara kami",-1)),pu={class:"mt-12 text-center"},mu=pe(()=>d("i",{class:"fa-regular fa-envelope"},null,-1)),gu=Ct(" Open "),yu=[mu,gu],vu={emits:["open"],setup(e,{emit:t}){const n=["Youga","Nanda"],s=Hl();let r=ql(()=>s.query);s.query.guest===void 0&&(r={guest:""});const i=L(!0),o=()=>{t("open"),setTimeout(()=>{document.querySelector("#firstSight").scrollIntoView({behavior:"smooth"})},300)};return(a,l)=>(A(),C("section",{class:"w-full h-screen relative bg-cover bg-center",style:Kl({backgroundImage:`url(${In(su)})`})},[d("section",ru,[d("div",iu,[ou,d("h1",au,st(n.join(" & ")),1),lu,uu,d("div",cu,[hu,d("p",du,"Saudara/i "+st(In(r).guest),1),fu]),Ce(d("div",pu,[d("button",{onClick:l[0]||(l[0]=c=>o()),variant:"outline-secondary",class:"px-5 py-2 rounded-lg bg-gray-800 text-gray-100 mx-auto"},yu)],512),[[zl,i.value]])])])],4))}};var wu=Ye(vu,[["__scopeId","data-v-539088fa"]]),Eu="/assets/first-sight.290e30f2.jpg";const bu=d("img",{src:Je,class:"w-6/12 md:w-6/12 mx-auto"},null,-1),_u={class:"satisfy-font text-4xl font-medium mb-5"},Tu=["innerHTML"],Ze={props:{title:{type:String,default:"The Section"},subtitle:{type:String,default:"Duis splople autem vel eum iriure Dapibus sit amet, tincidunt eu, nibh."},textColor:{type:String,default:"text-slate-800"}},setup(e){const t=e;return(n,s)=>(A(),C("section",{"data-aos":"fade-up",class:qt([t.textColor,"sm:w-full w-9/12 px-4 mb-6 text-center flex justify-center flex-col items-center ml-auto mr-auto"])},[bu,d("h1",_u,st(t.title),1),d("p",{class:"text-sm",innerHTML:e.subtitle},null,8,Tu)],2))}},Au={"data-aos":"fade-up"},Su={"data-aos":"fade-up"},yo={props:{bgColor:{type:String,default:"bg-gray-50"}},setup(e){const t=e;return(n,s)=>(A(),C("section",{"data-aos":"zoom-in",class:qt([t.bgColor,"w-9/12 mx-auto rounded-tl-[2rem] rounded-br-[2rem] shadow-xl overflow-hidden border border-gray-200"])},[d("div",Au,[ci(n.$slots,"body")]),d("div",Su,[ci(n.$slots,"footer")])],2))}},Iu={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"},Cu=d("path",{d:"m0 224 80-10.7c80-10.3 240-32.3 400-42.6C640 160 800 160 960 181.3c160 21.7 320 63.7 400 85.4l80 21.3V0H0Z"},null,-1),Du=[Cu];function xu(e,t){return A(),C("svg",Iu,Du)}var Nu={render:xu};const ku={class:"w-full mb-12"},Ru={class:"container-section"},Ou=d("section",{"data-aos":"fade-up",class:"sm:w-full w-9/12 px-4 mb-6 text-center flex justify-center flex-col items-center ml-auto mr-auto"},[d("img",{src:Je,class:"w-6/12 md:w-6/12 mx-auto"})],-1),Pu=d("p",{class:"text-sm p-6 text-justify",style:{color:"black"}},[Ct(" \u201CDan di antara tanda-tanda kekuasaan-Nya ialah diciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.\u201D"),d("br"),Ct(" (QS. Ar-Rum : 21) "),d("br"),d("br")],-1),Mu=d("img",{src:Eu,class:"w-full",alt:""},null,-1),Lu={setup(e){return(t,n)=>(A(),C("section",ku,[$(In(Nu),{class:"fill-gray-800"}),d("section",Ru,[Ou,$(yo,{title:""},{body:se(()=>[Pu]),footer:se(()=>[Mu]),_:1})])]))}};var hr={exports:{}},vo=function(t,n){return function(){for(var r=new Array(arguments.length),i=0;i<r.length;i++)r[i]=arguments[i];return t.apply(n,r)}},$u=vo,dr=Object.prototype.toString,fr=function(e){return function(t){var n=dr.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())}}(Object.create(null));function Kt(e){return e=e.toLowerCase(),function(n){return fr(n)===e}}function pr(e){return Array.isArray(e)}function Dn(e){return typeof e=="undefined"}function Fu(e){return e!==null&&!Dn(e)&&e.constructor!==null&&!Dn(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}var wo=Kt("ArrayBuffer");function Bu(e){var t;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&wo(e.buffer),t}function Uu(e){return typeof e=="string"}function Vu(e){return typeof e=="number"}function Eo(e){return e!==null&&typeof e=="object"}function _n(e){if(fr(e)!=="object")return!1;var t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}var ju=Kt("Date"),Hu=Kt("File"),qu=Kt("Blob"),zu=Kt("FileList");function mr(e){return dr.call(e)==="[object Function]"}function Ku(e){return Eo(e)&&mr(e.pipe)}function Gu(e){var t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||dr.call(e)===t||mr(e.toString)&&e.toString()===t)}var Wu=Kt("URLSearchParams");function Xu(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function Qu(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function gr(e,t){if(!(e===null||typeof e=="undefined"))if(typeof e!="object"&&(e=[e]),pr(e))for(var n=0,s=e.length;n<s;n++)t.call(null,e[n],n,e);else for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.call(null,e[r],r,e)}function Vs(){var e={};function t(r,i){_n(e[i])&&_n(r)?e[i]=Vs(e[i],r):_n(r)?e[i]=Vs({},r):pr(r)?e[i]=r.slice():e[i]=r}for(var n=0,s=arguments.length;n<s;n++)gr(arguments[n],t);return e}function Yu(e,t,n){return gr(t,function(r,i){n&&typeof r=="function"?e[i]=$u(r,n):e[i]=r}),e}function Ju(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function Zu(e,t,n,s){e.prototype=Object.create(t.prototype,s),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)}function tc(e,t,n){var s,r,i,o={};t=t||{};do{for(s=Object.getOwnPropertyNames(e),r=s.length;r-- >0;)i=s[r],o[i]||(t[i]=e[i],o[i]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t}function ec(e,t,n){e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;var s=e.indexOf(t,n);return s!==-1&&s===n}function nc(e){if(!e)return null;var t=e.length;if(Dn(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n}var sc=function(e){return function(t){return e&&t instanceof e}}(typeof Uint8Array!="undefined"&&Object.getPrototypeOf(Uint8Array)),Q={isArray:pr,isArrayBuffer:wo,isBuffer:Fu,isFormData:Gu,isArrayBufferView:Bu,isString:Uu,isNumber:Vu,isObject:Eo,isPlainObject:_n,isUndefined:Dn,isDate:ju,isFile:Hu,isBlob:qu,isFunction:mr,isStream:Ku,isURLSearchParams:Wu,isStandardBrowserEnv:Qu,forEach:gr,merge:Vs,extend:Yu,trim:Xu,stripBOM:Ju,inherits:Zu,toFlatObject:tc,kindOf:fr,kindOfTest:Kt,endsWith:ec,toArray:nc,isTypedArray:sc,isFileList:zu},Qt=Q;function hi(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var bo=function(t,n,s){if(!n)return t;var r;if(s)r=s(n);else if(Qt.isURLSearchParams(n))r=n.toString();else{var i=[];Qt.forEach(n,function(l,c){l===null||typeof l=="undefined"||(Qt.isArray(l)?c=c+"[]":l=[l],Qt.forEach(l,function(h){Qt.isDate(h)?h=h.toISOString():Qt.isObject(h)&&(h=JSON.stringify(h)),i.push(hi(c)+"="+hi(h))}))}),r=i.join("&")}if(r){var o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+r}return t},rc=Q;function Qn(){this.handlers=[]}Qn.prototype.use=function(t,n,s){return this.handlers.push({fulfilled:t,rejected:n,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1};Qn.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)};Qn.prototype.forEach=function(t){rc.forEach(this.handlers,function(s){s!==null&&t(s)})};var ic=Qn,oc=Q,ac=function(t,n){oc.forEach(t,function(r,i){i!==n&&i.toUpperCase()===n.toUpperCase()&&(t[n]=r,delete t[i])})},_o=Q;function re(e,t,n,s,r){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),s&&(this.request=s),r&&(this.response=r)}_o.inherits(re,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var To=re.prototype,Ao={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(e){Ao[e]={value:e}});Object.defineProperties(re,Ao);Object.defineProperty(To,"isAxiosError",{value:!0});re.from=function(e,t,n,s,r,i){var o=Object.create(To);return _o.toFlatObject(e,o,function(l){return l!==Error.prototype}),re.call(o,e.message,t,n,s,r),o.name=e.name,i&&Object.assign(o,i),o};var me=re,So={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ft=Q;function lc(e,t){t=t||new FormData;var n=[];function s(i){return i===null?"":ft.isDate(i)?i.toISOString():ft.isArrayBuffer(i)||ft.isTypedArray(i)?typeof Blob=="function"?new Blob([i]):Buffer.from(i):i}function r(i,o){if(ft.isPlainObject(i)||ft.isArray(i)){if(n.indexOf(i)!==-1)throw Error("Circular reference detected in "+o);n.push(i),ft.forEach(i,function(l,c){if(!ft.isUndefined(l)){var u=o?o+"."+c:c,h;if(l&&!o&&typeof l=="object"){if(ft.endsWith(c,"{}"))l=JSON.stringify(l);else if(ft.endsWith(c,"[]")&&(h=ft.toArray(l))){h.forEach(function(m){!ft.isUndefined(m)&&t.append(u,s(m))});return}}r(l,u)}}),n.pop()}else t.append(o,s(i))}return r(e),t}var Io=lc,Ts=me,uc=function(t,n,s){var r=s.config.validateStatus;!s.status||!r||r(s.status)?t(s):n(new Ts("Request failed with status code "+s.status,[Ts.ERR_BAD_REQUEST,Ts.ERR_BAD_RESPONSE][Math.floor(s.status/100)-4],s.config,s.request,s))},pn=Q,cc=pn.isStandardBrowserEnv()?function(){return{write:function(n,s,r,i,o,a){var l=[];l.push(n+"="+encodeURIComponent(s)),pn.isNumber(r)&&l.push("expires="+new Date(r).toGMTString()),pn.isString(i)&&l.push("path="+i),pn.isString(o)&&l.push("domain="+o),a===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){var s=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return s?decodeURIComponent(s[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),hc=function(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)},dc=function(t,n){return n?t.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):t},fc=hc,pc=dc,Co=function(t,n){return t&&!fc(n)?pc(t,n):n},As=Q,mc=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],gc=function(t){var n={},s,r,i;return t&&As.forEach(t.split(`
`),function(a){if(i=a.indexOf(":"),s=As.trim(a.substr(0,i)).toLowerCase(),r=As.trim(a.substr(i+1)),s){if(n[s]&&mc.indexOf(s)>=0)return;s==="set-cookie"?n[s]=(n[s]?n[s]:[]).concat([r]):n[s]=n[s]?n[s]+", "+r:r}}),n},di=Q,yc=di.isStandardBrowserEnv()?function(){var t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a"),s;function r(i){var o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return s=r(window.location.href),function(o){var a=di.isString(o)?r(o):o;return a.protocol===s.protocol&&a.host===s.host}}():function(){return function(){return!0}}(),js=me,vc=Q;function Do(e){js.call(this,e==null?"canceled":e,js.ERR_CANCELED),this.name="CanceledError"}vc.inherits(Do,js,{__CANCEL__:!0});var Yn=Do,wc=function(t){var n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return n&&n[1]||""},Se=Q,Ec=uc,bc=cc,_c=bo,Tc=Co,Ac=gc,Sc=yc,Ic=So,vt=me,Cc=Yn,Dc=wc,fi=function(t){return new Promise(function(s,r){var i=t.data,o=t.headers,a=t.responseType,l;function c(){t.cancelToken&&t.cancelToken.unsubscribe(l),t.signal&&t.signal.removeEventListener("abort",l)}Se.isFormData(i)&&Se.isStandardBrowserEnv()&&delete o["Content-Type"];var u=new XMLHttpRequest;if(t.auth){var h=t.auth.username||"",m=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";o.Authorization="Basic "+btoa(h+":"+m)}var y=Tc(t.baseURL,t.url);u.open(t.method.toUpperCase(),_c(y,t.params,t.paramsSerializer),!0),u.timeout=t.timeout;function _(){if(!!u){var S="getAllResponseHeaders"in u?Ac(u.getAllResponseHeaders()):null,P=!a||a==="text"||a==="json"?u.responseText:u.response,mt={data:P,status:u.status,statusText:u.statusText,headers:S,config:t,request:u};Ec(function(Xt){s(Xt),c()},function(Xt){r(Xt),c()},mt),u=null}}if("onloadend"in u?u.onloadend=_:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(_)},u.onabort=function(){!u||(r(new vt("Request aborted",vt.ECONNABORTED,t,u)),u=null)},u.onerror=function(){r(new vt("Network Error",vt.ERR_NETWORK,t,u,u)),u=null},u.ontimeout=function(){var P=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",mt=t.transitional||Ic;t.timeoutErrorMessage&&(P=t.timeoutErrorMessage),r(new vt(P,mt.clarifyTimeoutError?vt.ETIMEDOUT:vt.ECONNABORTED,t,u)),u=null},Se.isStandardBrowserEnv()){var x=(t.withCredentials||Sc(y))&&t.xsrfCookieName?bc.read(t.xsrfCookieName):void 0;x&&(o[t.xsrfHeaderName]=x)}"setRequestHeader"in u&&Se.forEach(o,function(P,mt){typeof i=="undefined"&&mt.toLowerCase()==="content-type"?delete o[mt]:u.setRequestHeader(mt,P)}),Se.isUndefined(t.withCredentials)||(u.withCredentials=!!t.withCredentials),a&&a!=="json"&&(u.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&u.addEventListener("progress",t.onDownloadProgress),typeof t.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",t.onUploadProgress),(t.cancelToken||t.signal)&&(l=function(S){!u||(r(!S||S&&S.type?new Cc:S),u.abort(),u=null)},t.cancelToken&&t.cancelToken.subscribe(l),t.signal&&(t.signal.aborted?l():t.signal.addEventListener("abort",l))),i||(i=null);var T=Dc(y);if(T&&["http","https","file"].indexOf(T)===-1){r(new vt("Unsupported protocol "+T+":",vt.ERR_BAD_REQUEST,t));return}u.send(i)})},xc=null,j=Q,pi=ac,mi=me,Nc=So,kc=Io,Rc={"Content-Type":"application/x-www-form-urlencoded"};function gi(e,t){!j.isUndefined(e)&&j.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function Oc(){var e;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(e=fi),e}function Pc(e,t,n){if(j.isString(e))try{return(t||JSON.parse)(e),j.trim(e)}catch(s){if(s.name!=="SyntaxError")throw s}return(n||JSON.stringify)(e)}var Jn={transitional:Nc,adapter:Oc(),transformRequest:[function(t,n){if(pi(n,"Accept"),pi(n,"Content-Type"),j.isFormData(t)||j.isArrayBuffer(t)||j.isBuffer(t)||j.isStream(t)||j.isFile(t)||j.isBlob(t))return t;if(j.isArrayBufferView(t))return t.buffer;if(j.isURLSearchParams(t))return gi(n,"application/x-www-form-urlencoded;charset=utf-8"),t.toString();var s=j.isObject(t),r=n&&n["Content-Type"],i;if((i=j.isFileList(t))||s&&r==="multipart/form-data"){var o=this.env&&this.env.FormData;return kc(i?{"files[]":t}:t,o&&new o)}else if(s||r==="application/json")return gi(n,"application/json"),Pc(t);return t}],transformResponse:[function(t){var n=this.transitional||Jn.transitional,s=n&&n.silentJSONParsing,r=n&&n.forcedJSONParsing,i=!s&&this.responseType==="json";if(i||r&&j.isString(t)&&t.length)try{return JSON.parse(t)}catch(o){if(i)throw o.name==="SyntaxError"?mi.from(o,mi.ERR_BAD_RESPONSE,this,null,this.response):o}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:xc},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};j.forEach(["delete","get","head"],function(t){Jn.headers[t]={}});j.forEach(["post","put","patch"],function(t){Jn.headers[t]=j.merge(Rc)});var yr=Jn,Mc=Q,Lc=yr,$c=function(t,n,s){var r=this||Lc;return Mc.forEach(s,function(o){t=o.call(r,t,n)}),t},xo=function(t){return!!(t&&t.__CANCEL__)},yi=Q,Ss=$c,Fc=xo,Bc=yr,Uc=Yn;function Is(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Uc}var Vc=function(t){Is(t),t.headers=t.headers||{},t.data=Ss.call(t,t.data,t.headers,t.transformRequest),t.headers=yi.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),yi.forEach(["delete","get","head","post","put","patch","common"],function(r){delete t.headers[r]});var n=t.adapter||Bc.adapter;return n(t).then(function(r){return Is(t),r.data=Ss.call(t,r.data,r.headers,t.transformResponse),r},function(r){return Fc(r)||(Is(t),r&&r.response&&(r.response.data=Ss.call(t,r.response.data,r.response.headers,t.transformResponse))),Promise.reject(r)})},ct=Q,No=function(t,n){n=n||{};var s={};function r(u,h){return ct.isPlainObject(u)&&ct.isPlainObject(h)?ct.merge(u,h):ct.isPlainObject(h)?ct.merge({},h):ct.isArray(h)?h.slice():h}function i(u){if(ct.isUndefined(n[u])){if(!ct.isUndefined(t[u]))return r(void 0,t[u])}else return r(t[u],n[u])}function o(u){if(!ct.isUndefined(n[u]))return r(void 0,n[u])}function a(u){if(ct.isUndefined(n[u])){if(!ct.isUndefined(t[u]))return r(void 0,t[u])}else return r(void 0,n[u])}function l(u){if(u in n)return r(t[u],n[u]);if(u in t)return r(void 0,t[u])}var c={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l};return ct.forEach(Object.keys(t).concat(Object.keys(n)),function(h){var m=c[h]||i,y=m(h);ct.isUndefined(y)&&m!==l||(s[h]=y)}),s},ko={version:"0.27.2"},jc=ko.version,At=me,vr={};["object","boolean","number","function","string","symbol"].forEach(function(e,t){vr[e]=function(s){return typeof s===e||"a"+(t<1?"n ":" ")+e}});var vi={};vr.transitional=function(t,n,s){function r(i,o){return"[Axios v"+jc+"] Transitional option '"+i+"'"+o+(s?". "+s:"")}return function(i,o,a){if(t===!1)throw new At(r(o," has been removed"+(n?" in "+n:"")),At.ERR_DEPRECATED);return n&&!vi[o]&&(vi[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,a):!0}};function Hc(e,t,n){if(typeof e!="object")throw new At("options must be an object",At.ERR_BAD_OPTION_VALUE);for(var s=Object.keys(e),r=s.length;r-- >0;){var i=s[r],o=t[i];if(o){var a=e[i],l=a===void 0||o(a,i,e);if(l!==!0)throw new At("option "+i+" must be "+l,At.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new At("Unknown option "+i,At.ERR_BAD_OPTION)}}var qc={assertOptions:Hc,validators:vr},Ro=Q,zc=bo,wi=ic,Ei=Vc,Zn=No,Kc=Co,Oo=qc,Yt=Oo.validators;function ie(e){this.defaults=e,this.interceptors={request:new wi,response:new wi}}ie.prototype.request=function(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Zn(this.defaults,n),n.method?n.method=n.method.toLowerCase():this.defaults.method?n.method=this.defaults.method.toLowerCase():n.method="get";var s=n.transitional;s!==void 0&&Oo.assertOptions(s,{silentJSONParsing:Yt.transitional(Yt.boolean),forcedJSONParsing:Yt.transitional(Yt.boolean),clarifyTimeoutError:Yt.transitional(Yt.boolean)},!1);var r=[],i=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(i=i&&y.synchronous,r.unshift(y.fulfilled,y.rejected))});var o=[];this.interceptors.response.forEach(function(y){o.push(y.fulfilled,y.rejected)});var a;if(!i){var l=[Ei,void 0];for(Array.prototype.unshift.apply(l,r),l=l.concat(o),a=Promise.resolve(n);l.length;)a=a.then(l.shift(),l.shift());return a}for(var c=n;r.length;){var u=r.shift(),h=r.shift();try{c=u(c)}catch(m){h(m);break}}try{a=Ei(c)}catch(m){return Promise.reject(m)}for(;o.length;)a=a.then(o.shift(),o.shift());return a};ie.prototype.getUri=function(t){t=Zn(this.defaults,t);var n=Kc(t.baseURL,t.url);return zc(n,t.params,t.paramsSerializer)};Ro.forEach(["delete","get","head","options"],function(t){ie.prototype[t]=function(n,s){return this.request(Zn(s||{},{method:t,url:n,data:(s||{}).data}))}});Ro.forEach(["post","put","patch"],function(t){function n(s){return function(i,o,a){return this.request(Zn(a||{},{method:t,headers:s?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}ie.prototype[t]=n(),ie.prototype[t+"Form"]=n(!0)});var Gc=ie,Wc=Yn;function oe(e){if(typeof e!="function")throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(r){t=r});var n=this;this.promise.then(function(s){if(!!n._listeners){var r,i=n._listeners.length;for(r=0;r<i;r++)n._listeners[r](s);n._listeners=null}}),this.promise.then=function(s){var r,i=new Promise(function(o){n.subscribe(o),r=o}).then(s);return i.cancel=function(){n.unsubscribe(r)},i},e(function(r){n.reason||(n.reason=new Wc(r),t(n.reason))})}oe.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};oe.prototype.subscribe=function(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]};oe.prototype.unsubscribe=function(t){if(!!this._listeners){var n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}};oe.source=function(){var t,n=new oe(function(r){t=r});return{token:n,cancel:t}};var Xc=oe,Qc=function(t){return function(s){return t.apply(null,s)}},Yc=Q,Jc=function(t){return Yc.isObject(t)&&t.isAxiosError===!0},bi=Q,Zc=vo,Tn=Gc,th=No,eh=yr;function Po(e){var t=new Tn(e),n=Zc(Tn.prototype.request,t);return bi.extend(n,Tn.prototype,t),bi.extend(n,t),n.create=function(r){return Po(th(e,r))},n}var lt=Po(eh);lt.Axios=Tn;lt.CanceledError=Yn;lt.CancelToken=Xc;lt.isCancel=xo;lt.VERSION=ko.version;lt.toFormData=Io;lt.AxiosError=me;lt.Cancel=lt.CanceledError;lt.all=function(t){return Promise.all(t)};lt.spread=Qc;lt.isAxiosError=Jc;hr.exports=lt;hr.exports.default=lt;var wr=hr.exports;const nh={class:"w-full mb-6","data-aos":"slide-up"},sh=["src","alt"],rh={class:"mt-10 w-full text-center text-slate-800 text-sm"},ih={class:"text-black text-[2rem] font-semibold tangerine-font"},oh={class:"text-black mb-3 mt-1 font-semibold"},ah={class:"flex gap-3 justify-center mt-3"},lh=["href"],uh={props:{source:{type:Object,default:{name:"fulan"}}},setup(e){return(t,n)=>(A(),C("section",nh,[d("img",{class:"w-9/12 shadow-lg border border-gray-200 mx-auto rounded-tr-3xl rounded-bl-3xl",src:e.source.thumb,alt:e.source.thumb},null,8,sh),d("div",rh,[d("p",ih,st(e.source.name),1),d("p",oh,st(e.source.description),1),d("div",ah,[(A(!0),C(zt,null,fe(e.source.social,(s,r)=>(A(),C("a",{key:r,target:"_blank",class:"text-amber-500",href:s.link},[d("i",{class:qt([s.icon,"text-xl"])},null,2)],8,lh))),128))])])]))}},ch={class:"w-10/12 mx-auto flex flex-wrap justify-center items-center gap-5 mt-6"},hh={setup(e){const t=L(null);return Gn(()=>{wr.get("contents/couples.json").then(n=>t.value=n.data.couples).catch(n=>alert(n))}),(n,s)=>(A(),C("section",ch,[(A(!0),C(zt,null,fe(t.value,(r,i)=>(A(),go(uh,{key:i,source:r},null,8,["source"]))),128))]))}};var dh="/assets/couples.0af6e0f8.jpg";const fh={class:"px-2 py-4"},ph=d("p",{class:"mx-auto text-center text-sm text-black w-10/12 mb-2"},"Menuju acara kami",-1),mh={class:"flex justify-center gap-3"},gh={class:"text-3xl font-medium text-amber-500 mb-2"},yh={class:"text-black text-sm font-medium"},vh={setup(e){const t=L(null),n=(r,i,o)=>{const a=new Date().getTime(),l=r-a;if(l>0){const c=Math.floor(l/864e5),u=Math.floor(l%(1e3*60*60*24)/(1e3*60*60)),h=Math.floor(l%(1e3*60*60)/(1e3*60)),m=Math.floor(l%(1e3*60)/1e3);i.value={days:c,hours:u,minutes:h,seconds:m},c===0&&u===0&&h===0&&m===0&&o()}else i.value={days:0,hours:0,minutes:0,seconds:0}},s=setInterval(()=>{n(new Date("2024-11-10 08:30").getTime(),t,()=>{clearInterval(s)})},1e3);return(r,i)=>(A(),C("div",fh,[ph,d("section",mh,[(A(!0),C(zt,null,fe(t.value,(o,a,l)=>(A(),C("div",{key:l,"data-aos":"zoom-in",class:"text-center w-3/12"},[d("p",gh,st(o),1),d("p",yh,st(a),1)]))),128))])]))}};const ge=e=>(Wn("data-v-fd2e874a"),e=e(),Xn(),e),wh={class:"w-full bg-cream"},Eh={class:"container-section pb-12"},bh={"data-aos":"fade-up"},_h={class:"text-xl satisfy-font text-amber-400"},Th={class:"font-medium text-black"},Ah={class:"font-medium text-black"},Sh=ge(()=>d("img",{src:Je,class:"w-4/12 md:w-4/12 mx-auto rotate-180"},null,-1)),Ih={class:"text-amber-500"},Ch={class:"text-black"},Dh=["href"],xh=ge(()=>d("i",{class:"fa-solid fa-map"},null,-1)),Nh=Ct(" Lihat Peta "),kh=[xh,Nh],Rh=ge(()=>d("img",{src:Je,class:"w-4/12 md:w-4/12 mx-auto"},null,-1)),Oh={class:""},Ph=ge(()=>d("p",{class:"text-sm text-black"},"Konfirmasi kehadiran anda pada buku tamu",-1)),Mh=ge(()=>d("i",{class:"fa-solid fa-clipboard-check"},null,-1)),Lh=Ct(" Konfirmasi "),$h=[Mh,Lh],Fh=ge(()=>d("img",{src:dh,alt:""},null,-1)),Bh={emits:["goToGuestBook"],setup(e,{emit:t}){const n=L(null);Gn(()=>{wr.get("contents/timelines.json").then(r=>n.value=r.data.timelines).catch(r=>alert(r))});const s=()=>setTimeout(()=>{t("goToGuestBook")},300);return(r,i)=>(A(),C("section",wh,[d("section",Eh,[$(Ze,{"text-color":"text-black",subtitle:"Dengan tidak mengurangi rasa hormat, kami mengajak para tamu undangan agar bisa berhadir pada serangkaian acara kami",title:"Runtutan Acara"}),$(yo,null,{body:se(()=>[(A(!0),C(zt,null,fe(n.value,(o,a)=>(A(),C("div",{class:"px-6 py-8 text-center text-sm font-medium",key:a},[d("section",bh,[d("h1",_h,st(o.title),1),d("p",Th,st(o.date),1),d("p",Ah,st(o.time),1),Sh,d("p",Ih,st(o.location),1),d("p",Ch,st(o.address),1),d("a",{class:"btn bg-gray-800 text-amber-500",href:o.mapUrl,target:"_blank"},kh,8,Dh),Rh])]))),128))]),footer:se(()=>[d("section",Oh,[$(vh),d("div",{class:"px-6 pt-5 pb-8 text-center"},[Ph,d("button",{onClick:s,class:"btn bg-gray-800 text-amber-500"},$h)]),Fh])]),_:1})])]))}};var Uh=Ye(Bh,[["__scopeId","data-v-fd2e874a"]]);const Vh={class:"w-full bg-cream"},jh={class:"container-section"},Hh={setup(e){return(t,n)=>(A(),C("section",Vh,[d("section",jh,[$(Ze,{"text-color":"text-black",title:"Mempelai Pria dan Wanita",subtitle:"Ya Allah dengan mengharap ridha dan karunia-Mu, Izinkanlah kami mempersatukan dua insan dari dua keluarga ini agar menjadi pasangan yang selalu mendapatkan rahmat-Mu"}),$(hh)])]))}};const qh={class:"w-full xl:bg-slate-100"},zh={class:"w-full px-0"},Kh={class:"flex flex-wrap"},Gh={"data-aos":"fade-up",class:"w-full"},Wh=["src"],Xh=["src","alt"],Qh={key:1,class:"text-center"},Yh={setup(e){const t=L(null);return Gn(()=>{wr.get("contents/galleries.json").then(n=>{t.value=n.data.galleries}).catch(n=>{console.error(n),alert("Failed to load gallery images.")})}),(n,s)=>{const r=Gl("viewer");return A(),C("section",qh,[d("section",zh,[t.value&&t.value.length>0?(A(),go(r,{key:0,images:t.value},{default:se(()=>[d("div",Kh,[d("div",Gh,[d("img",{src:t.value[0],class:"w-full h-auto",alt:"Landscape Photo"},null,8,Wh)]),(A(!0),C(zt,null,fe(t.value.slice(1),(i,o)=>(A(),C("div",{key:o,"data-aos":"fade-up",class:"w-4/12"},[d("img",{src:i,class:"w-full h-auto",alt:`Portrait Photo ${o+1}`},null,8,Xh)]))),128))])]),_:1},8,["images"])):(A(),C("div",Qh," Loading images... "))])])}}};var Jh=Ye(Yh,[["__scopeId","data-v-75fe364a"]]);const Zh={class:"w-full xl:bg-slate-100 pt-12 pb-5"},td={class:"section-container"},ed={setup(e){const t="https://www.youtube.com/embed/auKi1IHzn1Q";return(n,s)=>(A(),C("section",Zh,[d("section",td,[$(Ze,{class:"max-w-9/12",title:"Video Kami",subtitle:""})]),d("div",{"data-aos":"zoom-in",class:"w-10/12 mx-auto"},[d("iframe",{class:"w-full aspect-video",src:t,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})])]))}},nd={key:0,class:"text-black font-regular mb-2",style:{"font-size":"small"}},sd={props:{content:{type:String,default:"Example"},header:{type:String,required:!1,default:null}},setup(e){const t=e,n=L(t.content),s=()=>{navigator.clipboard&&navigator.clipboard.writeText(t.content).then(r=>n.value="Copied!").catch(r=>console.log(r))};return(r,i)=>(A(),C(zt,null,[e.header?(A(),C("p",nd,st(e.header),1)):Cn("",!0),d("button",{onClick:s,class:"active:scale-95 duration-300 bg-gray-800 text-sm text-gray-50 py-2 px-4 rounded-lg inline-block mt-1 mb-3"},[Ct(st(n.value)+" ",1),d("i",{class:qt([n.value==="Copied!"?"fa-check":"fa-copy","fa-solid ml-2"])},null,2)])],64))}},rd={class:"w-full xl:bg-slate-100 pt-12 pb-5"},id={class:"section-container"},od={class:""},ad=["src","alt"],ld={setup(e){const t=[{thumb:"wallets/bca.png",platform:"Bank BCA",number:"0885770946",alias:"PRISMA.MAMA.LANA"}];return(n,s)=>(A(),C("section",rd,[d("section",id,[$(Ze,{class:"max-w-9/12",title:"Amplop Digital",subtitle:"Doa restu anda merupakan karunia yang sangat berarti bagi kami dan jika memberi adalah ungkapan tanda terima kasih anda, anda dapat memberi kado secara cashless"}),d("section",od,[(A(),C(zt,null,fe(t,(r,i)=>d("div",{key:i,"data-aos":"zoom-in",class:"w-8/12 text-center border border-gray-200 mx-auto p-5 mb-5 bg-gray-100 shadow-lg rounded-tl-3xl rounded-br-3xl"},[d("img",{src:r.thumb,alt:r.platform,class:"w-4/12 mx-auto mb-0"},null,8,ad),$(sd,{header:"Silahkan untuk melakukan transfer melalui rekening dibawah ini a.n. Hardianto Jouga Pratama",content:r.number},null,8,["content"])])),64))])])]))}},ud={key:0,class:"flex gap-2 mb-6"},cd=d("i",{class:"fa fa-times"},null,-1),hd=[cd],dd={props:{statusResponse:{type:Boolean,default:!1},showAlert:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:t}){return(n,s)=>e.showAlert?(A(),C("section",ud,[d("div",{class:qt([e.statusResponse?"bg-green-500":"bg-red-500","w-10/12 text-gray-100 p-2 text-center rounded-lg duration-300"])},st(e.statusResponse?"Mensaje enviado con exito":"El mensaje no se pudo enviar"),3),d("button",{onClick:s[0]||(s[0]=r=>t("close")),class:"text-black px-1 w-2/12 grid place-items-center border border-gray-600 rounded-lg"},hd)])):Cn("",!0)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},fd=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(l>>10)),t[s++]=String.fromCharCode(56320+(l&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},pd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,l=r+2<e.length,c=l?e[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let m=(a&15)<<2|c>>6,y=c&63;l||(y=64,o||(m=64)),s.push(n[u],n[h],n[m],n[y])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Mo(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):fd(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const c=r<e.length?n[e.charAt(r)]:64;++r;const h=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||c==null||h==null)throw Error();const m=i<<2|a>>4;if(s.push(m),c!==64){const y=a<<4&240|c>>2;if(s.push(y),h!==64){const _=c<<6&192|h;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},md=function(e){const t=Mo(e);return pd.encodeByteArray(t,!0)},Lo=function(e){return md(e).replace(/\./g,"")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yd(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ts())}function vd(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function wd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ed(){return ts().indexOf("Electron/")>=0}function bd(){const e=ts();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function _d(){return ts().indexOf("MSAppHost/")>=0}function Td(){return typeof indexedDB=="object"}function Ad(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="FirebaseError";class ye extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=Sd,Object.setPrototypeOf(this,ye.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$o.prototype.create)}}class $o{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?Id(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ye(r,a,s)}}function Id(e,t){return e.replace(Cd,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const Cd=/\{\$([^}]+)}/g;function Hs(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(_i(i)&&_i(o)){if(!Hs(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function _i(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(e){return e&&e._delegate?e._delegate:e}class Le{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new gd;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Nd(t))try{this.getOrInitializeService({instanceIdentifier:Rt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=Rt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Rt){return this.instances.has(t)}getOptions(t=Rt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:xd(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Rt){return this.component?this.component.multipleInstances?t:Rt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xd(e){return e===Rt?void 0:e}function Nd(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Dd(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(N||(N={}));const Rd={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},Od=N.INFO,Pd={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},Md=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=Pd[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Fo{constructor(t){this.name=t,this._logLevel=Od,this._logHandler=Md,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in N))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Rd[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...t),this._logHandler(this,N.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...t),this._logHandler(this,N.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,N.INFO,...t),this._logHandler(this,N.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,N.WARN,...t),this._logHandler(this,N.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...t),this._logHandler(this,N.ERROR,...t)}}const Ld=(e,t)=>t.some(n=>e instanceof n);let Ti,Ai;function $d(){return Ti||(Ti=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fd(){return Ai||(Ai=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bo=new WeakMap,qs=new WeakMap,Uo=new WeakMap,Cs=new WeakMap,Er=new WeakMap;function Bd(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(St(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Bo.set(n,e)}).catch(()=>{}),Er.set(t,e),t}function Ud(e){if(qs.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});qs.set(e,t)}let zs={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return qs.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Uo.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return St(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Vd(e){zs=e(zs)}function jd(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(Ds(this),t,...n);return Uo.set(s,t.sort?t.sort():[t]),St(s)}:Fd().includes(e)?function(...t){return e.apply(Ds(this),t),St(Bo.get(this))}:function(...t){return St(e.apply(Ds(this),t))}}function Hd(e){return typeof e=="function"?jd(e):(e instanceof IDBTransaction&&Ud(e),Ld(e,$d())?new Proxy(e,zs):e)}function St(e){if(e instanceof IDBRequest)return Bd(e);if(Cs.has(e))return Cs.get(e);const t=Hd(e);return t!==e&&(Cs.set(e,t),Er.set(t,e)),t}const Ds=e=>Er.get(e);function qd(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=St(o);return s&&o.addEventListener("upgradeneeded",l=>{s(St(o.result),l.oldVersion,l.newVersion,St(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const zd=["get","getKey","getAll","getAllKeys","count"],Kd=["put","add","delete","clear"],xs=new Map;function Si(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(xs.get(t))return xs.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=Kd.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||zd.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return xs.set(t,i),i}Vd(e=>ui(li({},e),{get:(t,n,s)=>Si(t,n)||e.get(t,n,s),has:(t,n)=>!!Si(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Wd(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Wd(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ks="@firebase/app",Ii="0.7.31";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t=new Fo("@firebase/app"),Xd="@firebase/app-compat",Qd="@firebase/analytics-compat",Yd="@firebase/analytics",Jd="@firebase/app-check-compat",Zd="@firebase/app-check",tf="@firebase/auth",ef="@firebase/auth-compat",nf="@firebase/database",sf="@firebase/database-compat",rf="@firebase/functions",of="@firebase/functions-compat",af="@firebase/installations",lf="@firebase/installations-compat",uf="@firebase/messaging",cf="@firebase/messaging-compat",hf="@firebase/performance",df="@firebase/performance-compat",ff="@firebase/remote-config",pf="@firebase/remote-config-compat",mf="@firebase/storage",gf="@firebase/storage-compat",yf="@firebase/firestore",vf="@firebase/firestore-compat",wf="firebase",Ef="9.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo="[DEFAULT]",bf={[Ks]:"fire-core",[Xd]:"fire-core-compat",[Yd]:"fire-analytics",[Qd]:"fire-analytics-compat",[Zd]:"fire-app-check",[Jd]:"fire-app-check-compat",[tf]:"fire-auth",[ef]:"fire-auth-compat",[nf]:"fire-rtdb",[sf]:"fire-rtdb-compat",[rf]:"fire-fn",[of]:"fire-fn-compat",[af]:"fire-iid",[lf]:"fire-iid-compat",[uf]:"fire-fcm",[cf]:"fire-fcm-compat",[hf]:"fire-perf",[df]:"fire-perf-compat",[ff]:"fire-rc",[pf]:"fire-rc-compat",[mf]:"fire-gcs",[gf]:"fire-gcs-compat",[yf]:"fire-fst",[vf]:"fire-fst-compat","fire-js":"fire-js",[wf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=new Map,Gs=new Map;function _f(e,t){try{e.container.addComponent(t)}catch(n){$t.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Nn(e){const t=e.name;if(Gs.has(t))return $t.debug(`There were multiple attempts to register component ${t}.`),!1;Gs.set(t,e);for(const n of xn.values())_f(n,e);return!0}function Tf(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ft=new $o("app","Firebase",Af);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Le("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If=Ef;function Cf(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:Vo,automaticDataCollectionEnabled:!1},t),s=n.name;if(typeof s!="string"||!s)throw Ft.create("bad-app-name",{appName:String(s)});const r=xn.get(s);if(r){if(Hs(e,r.options)&&Hs(n,r.config))return r;throw Ft.create("duplicate-app",{appName:s})}const i=new kd(s);for(const a of Gs.values())i.addComponent(a);const o=new Sf(e,n,i);return xn.set(s,o),o}function Df(e=Vo){const t=xn.get(e);if(!t)throw Ft.create("no-app",{appName:e});return t}function te(e,t,n){var s;let r=(s=bf[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$t.warn(a.join(" "));return}Nn(new Le(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf="firebase-heartbeat-database",Nf=1,$e="firebase-heartbeat-store";let Ns=null;function jo(){return Ns||(Ns=qd(xf,Nf,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore($e)}}}).catch(e=>{throw Ft.create("idb-open",{originalErrorMessage:e.message})})),Ns}async function kf(e){var t;try{return(await jo()).transaction($e).objectStore($e).get(Ho(e))}catch(n){if(n instanceof ye)$t.warn(n.message);else{const s=Ft.create("idb-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});$t.warn(s.message)}}}async function Ci(e,t){var n;try{const r=(await jo()).transaction($e,"readwrite");return await r.objectStore($e).put(t,Ho(e)),r.done}catch(s){if(s instanceof ye)$t.warn(s.message);else{const r=Ft.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});$t.warn(r.message)}}}function Ho(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf=1024,Of=30*24*60*60*1e3;class Pf{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Lf(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Di();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Of}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Di(),{heartbeatsToSend:n,unsentEntries:s}=Mf(this._heartbeatsCache.heartbeats),r=Lo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Di(){return new Date().toISOString().substring(0,10)}function Mf(e,t=Rf){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),xi(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),xi(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Lf{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Td()?Ad().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await kf(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ci(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ci(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function xi(e){return Lo(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(e){Nn(new Le("platform-logger",t=>new Gd(t),"PRIVATE")),Nn(new Le("heartbeat",t=>new Pf(t),"PRIVATE")),te(Ks,Ii,e),te(Ks,Ii,"esm2017"),te("fire-js","")}$f("");var Ff=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},g,br=br||{},w=Ff||self;function kn(){}function Ws(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function tn(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Bf(e){return Object.prototype.hasOwnProperty.call(e,ks)&&e[ks]||(e[ks]=++Uf)}var ks="closure_uid_"+(1e9*Math.random()>>>0),Uf=0;function Vf(e,t,n){return e.call.apply(e.bind,arguments)}function jf(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function W(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?W=Vf:W=jf,W.apply(null,arguments)}function mn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function Y(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(s,o)}}function Nt(){this.s=this.s,this.o=this.o}var Hf=0,qf={};Nt.prototype.s=!1;Nt.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),Hf!=0)){var e=Bf(this);delete qf[e]}};Nt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const qo=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},zo=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const s=e.length,r=typeof e=="string"?e.split(""):e;for(let i=0;i<s;i++)i in r&&t.call(n,r[i],i,e)};function zf(e){t:{var t=Lp;const n=e.length,s=typeof e=="string"?e.split(""):e;for(let r=0;r<n;r++)if(r in s&&t.call(void 0,s[r],r,e)){t=r;break t}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function Ni(e){return Array.prototype.concat.apply([],arguments)}function _r(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Rn(e){return/^[\s\xa0]*$/.test(e)}var ki=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function et(e,t){return e.indexOf(t)!=-1}function Rs(e,t){return e<t?-1:e>t?1:0}var nt;t:{var Ri=w.navigator;if(Ri){var Oi=Ri.userAgent;if(Oi){nt=Oi;break t}}nt=""}function Tr(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function Ko(e){const t={};for(const n in e)t[n]=e[n];return t}var Pi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Go(e,t){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)e[n]=s[n];for(let i=0;i<Pi.length;i++)n=Pi[i],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Ar(e){return Ar[" "](e),e}Ar[" "]=kn;function Kf(e){var t=Xf;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Gf=et(nt,"Opera"),ae=et(nt,"Trident")||et(nt,"MSIE"),Wo=et(nt,"Edge"),Xs=Wo||ae,Xo=et(nt,"Gecko")&&!(et(nt.toLowerCase(),"webkit")&&!et(nt,"Edge"))&&!(et(nt,"Trident")||et(nt,"MSIE"))&&!et(nt,"Edge"),Wf=et(nt.toLowerCase(),"webkit")&&!et(nt,"Edge");function Qo(){var e=w.document;return e?e.documentMode:void 0}var On;t:{var Os="",Ps=function(){var e=nt;if(Xo)return/rv:([^\);]+)(\)|;)/.exec(e);if(Wo)return/Edge\/([\d\.]+)/.exec(e);if(ae)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Wf)return/WebKit\/(\S+)/.exec(e);if(Gf)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Ps&&(Os=Ps?Ps[1]:""),ae){var Ms=Qo();if(Ms!=null&&Ms>parseFloat(Os)){On=String(Ms);break t}}On=Os}var Xf={};function Qf(){return Kf(function(){let e=0;const t=ki(String(On)).split("."),n=ki("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var r=t[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;e=Rs(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Rs(r[2].length==0,i[2].length==0)||Rs(r[2],i[2]),r=r[3],i=i[3]}while(e==0)}return 0<=e})}var Qs;if(w.document&&ae){var Mi=Qo();Qs=Mi||parseInt(On,10)||void 0}else Qs=void 0;var Yf=Qs,Jf=function(){if(!w.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{w.addEventListener("test",kn,t),w.removeEventListener("test",kn,t)}catch{}return e}();function tt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};function Fe(e,t){if(tt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Xo){t:{try{Ar(t.nodeName);var r=!0;break t}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Zf[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Fe.Z.h.call(this)}}Y(Fe,tt);var Zf={2:"touch",3:"pen",4:"mouse"};Fe.prototype.h=function(){Fe.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var en="closure_listenable_"+(1e6*Math.random()|0),tp=0;function ep(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ia=r,this.key=++tp,this.ca=this.fa=!1}function es(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function ns(e){this.src=e,this.g={},this.h=0}ns.prototype.add=function(e,t,n,s,r){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Js(e,t,s,r);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new ep(t,this.src,i,!!s,r),t.fa=n,e.push(t)),t};function Ys(e,t){var n=t.type;if(n in e.g){var s=e.g[n],r=qo(s,t),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(es(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Js(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.ca&&i.listener==t&&i.capture==!!n&&i.ia==s)return r}return-1}var Sr="closure_lm_"+(1e6*Math.random()|0),Ls={};function Yo(e,t,n,s,r){if(s&&s.once)return Zo(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Yo(e,t[i],n,s,r);return null}return n=Dr(n),e&&e[en]?e.N(t,n,tn(s)?!!s.capture:!!s,r):Jo(e,t,n,!1,s,r)}function Jo(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=tn(r)?!!r.capture:!!r,a=Cr(e);if(a||(e[Sr]=a=new ns(e)),n=a.add(t,n,s,o,i),n.proxy)return n;if(s=np(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Jf||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(ea(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function np(){function e(n){return t.call(e.src,e.listener,n)}var t=sp;return e}function Zo(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Zo(e,t[i],n,s,r);return null}return n=Dr(n),e&&e[en]?e.O(t,n,tn(s)?!!s.capture:!!s,r):Jo(e,t,n,!0,s,r)}function ta(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)ta(e,t[i],n,s,r);else s=tn(s)?!!s.capture:!!s,n=Dr(n),e&&e[en]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Js(i,n,s,r),-1<n&&(es(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Cr(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Js(t,n,s,r)),(n=-1<e?t[e]:null)&&Ir(n))}function Ir(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[en])Ys(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(ea(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Cr(t))?(Ys(n,e),n.h==0&&(n.src=null,t[Sr]=null)):es(e)}}}function ea(e){return e in Ls?Ls[e]:Ls[e]="on"+e}function sp(e,t){if(e.ca)e=!0;else{t=new Fe(t,this);var n=e.listener,s=e.ia||e.src;e.fa&&Ir(e),e=n.call(s,t)}return e}function Cr(e){return e=e[Sr],e instanceof ns?e:null}var $s="__closure_events_fn_"+(1e9*Math.random()>>>0);function Dr(e){return typeof e=="function"?e:(e[$s]||(e[$s]=function(t){return e.handleEvent(t)}),e[$s])}function z(){Nt.call(this),this.i=new ns(this),this.P=this,this.I=null}Y(z,Nt);z.prototype[en]=!0;z.prototype.removeEventListener=function(e,t,n,s){ta(this,e,t,n,s)};function X(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new tt(t,e);else if(t instanceof tt)t.target=t.target||e;else{var r=t;t=new tt(s,e),Go(t,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=gn(o,s,!0,t)&&r}if(o=t.g=e,r=gn(o,s,!0,t)&&r,r=gn(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)o=t.g=n[i],r=gn(o,s,!1,t)&&r}z.prototype.M=function(){if(z.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)es(n[s]);delete e.g[t],e.h--}}this.I=null};z.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};z.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function gn(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&Ys(e.i,o),r=a.call(l,s)!==!1&&r}}return r&&!s.defaultPrevented}var xr=w.JSON.stringify;function rp(){var e=sa;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class ip{constructor(){this.h=this.g=null}add(t,n){const s=na.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var na=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new op,e=>e.reset());class op{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function ap(e){w.setTimeout(()=>{throw e},0)}function Nr(e,t){Zs||lp(),tr||(Zs(),tr=!0),sa.add(e,t)}var Zs;function lp(){var e=w.Promise.resolve(void 0);Zs=function(){e.then(up)}}var tr=!1,sa=new ip;function up(){for(var e;e=rp();){try{e.h.call(e.g)}catch(n){ap(n)}var t=na;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}tr=!1}function ss(e,t){z.call(this),this.h=e||1,this.g=t||w,this.j=W(this.kb,this),this.l=Date.now()}Y(ss,z);g=ss.prototype;g.da=!1;g.S=null;g.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),X(this,"tick"),this.da&&(kr(this),this.start()))}};g.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function kr(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}g.M=function(){ss.Z.M.call(this),kr(this),delete this.g};function Rr(e,t,n){if(typeof e=="function")n&&(e=W(e,n));else if(e&&typeof e.handleEvent=="function")e=W(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:w.setTimeout(e,t||0)}function ra(e){e.g=Rr(()=>{e.g=null,e.i&&(e.i=!1,ra(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class cp extends Nt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:ra(this)}M(){super.M(),this.g&&(w.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Be(e){Nt.call(this),this.h=e,this.g={}}Y(Be,Nt);var Li=[];function ia(e,t,n,s){Array.isArray(n)||(n&&(Li[0]=n.toString()),n=Li);for(var r=0;r<n.length;r++){var i=Yo(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function oa(e){Tr(e.g,function(t,n){this.g.hasOwnProperty(n)&&Ir(t)},e),e.g={}}Be.prototype.M=function(){Be.Z.M.call(this),oa(this)};Be.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function rs(){this.g=!0}rs.prototype.Aa=function(){this.g=!1};function hp(e,t,n,s,r,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function dp(e,t,n,s,r,i,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+`
`+n+`
`+i+" "+o})}function Jt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+pp(e,n)+(s?" "+s:"")})}function fp(e,t){e.info(function(){return"TIMEOUT: "+t})}rs.prototype.info=function(){};function pp(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return xr(n)}catch{return t}}var Gt={},$i=null;function is(){return $i=$i||new z}Gt.Ma="serverreachability";function aa(e){tt.call(this,Gt.Ma,e)}Y(aa,tt);function Ue(e){const t=is();X(t,new aa(t,e))}Gt.STAT_EVENT="statevent";function la(e,t){tt.call(this,Gt.STAT_EVENT,e),this.stat=t}Y(la,tt);function rt(e){const t=is();X(t,new la(t,e))}Gt.Na="timingevent";function ua(e,t){tt.call(this,Gt.Na,e),this.size=t}Y(ua,tt);function nn(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return w.setTimeout(function(){e()},t)}var os={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ca={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Or(){}Or.prototype.h=null;function Fi(e){return e.h||(e.h=e.i())}function ha(){}var sn={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Pr(){tt.call(this,"d")}Y(Pr,tt);function Mr(){tt.call(this,"c")}Y(Mr,tt);var er;function as(){}Y(as,Or);as.prototype.g=function(){return new XMLHttpRequest};as.prototype.i=function(){return{}};er=new as;function rn(e,t,n,s){this.l=e,this.j=t,this.m=n,this.X=s||1,this.V=new Be(this),this.P=mp,e=Xs?125:void 0,this.W=new ss(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new da}function da(){this.i=null,this.g="",this.h=!1}var mp=45e3,nr={},Pn={};g=rn.prototype;g.setTimeout=function(e){this.P=e};function sr(e,t,n){e.K=1,e.v=us(_t(t)),e.s=n,e.U=!0,fa(e,null)}function fa(e,t){e.F=Date.now(),on(e),e.A=_t(e.v);var n=e.A,s=e.X;Array.isArray(s)||(s=[String(s)]),Ea(n.h,"t",s),e.C=0,n=e.l.H,e.h=new da,e.g=Ua(e.l,n?t:null,!e.s),0<e.O&&(e.L=new cp(W(e.Ia,e,e.g),e.O)),ia(e.V,e.g,"readystatechange",e.gb),t=e.H?Ko(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Ue(1),hp(e.j,e.u,e.A,e.m,e.X,e.s)}g.gb=function(e){e=e.target;const t=this.L;t&&wt(e)==3?t.l():this.Ia(e)};g.Ia=function(e){try{if(e==this.g)t:{const u=wt(this.g);var t=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||Xs||this.g&&(this.h.h||this.g.ga()||ji(this.g)))){this.I||u!=4||t==7||(t==8||0>=h?Ue(3):Ue(2)),ls(this);var n=this.g.ba();this.N=n;e:if(pa(this)){var s=ji(this.g);e="";var r=s.length,i=wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Ot(this),xe(this);var o="";break e}this.h.i=new w.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,dp(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Rn(a)){var c=a;break e}}c=null}if(n=c)Jt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,rr(this,n);else{this.i=!1,this.o=3,rt(12),Ot(this),xe(this);break t}}this.U?(ma(this,u,o),Xs&&this.i&&u==3&&(ia(this.V,this.W,"tick",this.fb),this.W.start())):(Jt(this.j,this.m,o,null),rr(this,o)),u==4&&Ot(this),this.i&&!this.I&&(u==4?La(this.l,this):(this.i=!1,on(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,rt(12)):(this.o=0,rt(13)),Ot(this),xe(this)}}}catch{}finally{}};function pa(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function ma(e,t,n){let s=!0,r;for(;!e.I&&e.C<n.length;)if(r=gp(e,n),r==Pn){t==4&&(e.o=4,rt(14),s=!1),Jt(e.j,e.m,null,"[Incomplete Response]");break}else if(r==nr){e.o=4,rt(15),Jt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Jt(e.j,e.m,r,null),rr(e,r);pa(e)&&r!=Pn&&r!=nr&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,rt(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),qr(t),t.L=!0,rt(11))):(Jt(e.j,e.m,n,"[Invalid Chunked Response]"),Ot(e),xe(e))}g.fb=function(){if(this.g){var e=wt(this.g),t=this.g.ga();this.C<t.length&&(ls(this),ma(this,e,t),this.i&&e!=4&&on(this))}};function gp(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?Pn:(n=Number(t.substring(n,s)),isNaN(n)?nr:(s+=1,s+n>t.length?Pn:(t=t.substr(s,n),e.C=s+n,t)))}g.cancel=function(){this.I=!0,Ot(this)};function on(e){e.Y=Date.now()+e.P,ga(e,e.P)}function ga(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=nn(W(e.eb,e),t)}function ls(e){e.B&&(w.clearTimeout(e.B),e.B=null)}g.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(fp(this.j,this.A),this.K!=2&&(Ue(3),rt(17)),Ot(this),this.o=2,xe(this)):ga(this,this.Y-e)};function xe(e){e.l.G==0||e.I||La(e.l,e)}function Ot(e){ls(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,kr(e.W),oa(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function rr(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||ir(n.i,e))){if(n.I=e.N,!e.J&&ir(n.i,e)&&n.G==3){try{var s=n.Ca.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)Fn(n),ds(n);else break t;Hr(n),rt(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=nn(W(n.ab,n),6e3));if(1>=Ta(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Pt(n,11)}else if((e.J||n.g==e)&&Fn(n),!Rn(t))for(r=n.Ca.g.parse(t),t=0;t<r.length;t++){let c=r[t];if(n.U=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.J=c[1],n.la=c[2];const u=c[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=c[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const m=c[5];m!=null&&typeof m=="number"&&0<m&&(s=1.5*m,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const y=e.g;if(y){const _=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var i=s.i;!i.g&&(et(_,"spdy")||et(_,"quic")||et(_,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Fr(i,i.h),i.h=null))}if(s.D){const x=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;x&&(s.sa=x,O(s.F,s.D,x))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=e;if(s.oa=Ba(s,s.H?s.la:null,s.W),o.J){Aa(s.i,o);var a=o,l=s.K;l&&a.setTimeout(l),a.B&&(ls(a),on(a)),s.g=o}else Pa(s);0<n.l.length&&fs(n)}else c[0]!="stop"&&c[0]!="close"||Pt(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Pt(n,7):jr(n):c[0]!="noop"&&n.j&&n.j.wa(c),n.A=0)}}Ue(4)}catch{}}function yp(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(Ws(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Lr(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Ws(e)||typeof e=="string")zo(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(Ws(e)||typeof e=="string"){n=[];for(var s=e.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,e)n[s++]=r;s=yp(e),r=s.length;for(var i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}}function ve(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(e)if(e instanceof ve)for(n=e.T(),s=0;s<n.length;s++)this.set(n[s],e.get(n[s]));else for(s in e)this.set(s,e[s])}g=ve.prototype;g.R=function(){$r(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};g.T=function(){return $r(this),this.g.concat()};function $r(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var s=e.g[t];Bt(e.h,s)&&(e.g[n++]=s),t++}e.g.length=n}if(e.i!=e.g.length){var r={};for(n=t=0;t<e.g.length;)s=e.g[t],Bt(r,s)||(e.g[n++]=s,r[s]=1),t++;e.g.length=n}}g.get=function(e,t){return Bt(this.h,e)?this.h[e]:t};g.set=function(e,t){Bt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};g.forEach=function(e,t){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);e.call(t,i,r,this)}};function Bt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var ya=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function vp(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ut(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Ut){this.g=t!==void 0?t:e.g,Mn(this,e.j),this.s=e.s,Ln(this,e.i),$n(this,e.m),this.l=e.l,t=e.h;var n=new Ve;n.i=t.i,t.g&&(n.g=new ve(t.g),n.h=t.h),Bi(this,n),this.o=e.o}else e&&(n=String(e).match(ya))?(this.g=!!t,Mn(this,n[1]||"",!0),this.s=Ne(n[2]||""),Ln(this,n[3]||"",!0),$n(this,n[4]),this.l=Ne(n[5]||"",!0),Bi(this,n[6]||"",!0),this.o=Ne(n[7]||"")):(this.g=!!t,this.h=new Ve(null,this.g))}Ut.prototype.toString=function(){var e=[],t=this.j;t&&e.push(De(t,Ui,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(De(t,Ui,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(De(n,n.charAt(0)=="/"?Tp:_p,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",De(n,Sp)),e.join("")};function _t(e){return new Ut(e)}function Mn(e,t,n){e.j=n?Ne(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ln(e,t,n){e.i=n?Ne(t,!0):t}function $n(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Bi(e,t,n){t instanceof Ve?(e.h=t,Ip(e.h,e.g)):(n||(t=De(t,Ap)),e.h=new Ve(t,e.g))}function O(e,t,n){e.h.set(t,n)}function us(e){return O(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function wp(e){return e instanceof Ut?_t(e):new Ut(e,void 0)}function Ep(e,t,n,s){var r=new Ut(null,void 0);return e&&Mn(r,e),t&&Ln(r,t),n&&$n(r,n),s&&(r.l=s),r}function Ne(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function De(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,bp),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function bp(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Ui=/[#\/\?@]/g,_p=/[#\?:]/g,Tp=/[#\?]/g,Ap=/[#\?@]/g,Sp=/#/g;function Ve(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function kt(e){e.g||(e.g=new ve,e.h=0,e.i&&vp(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}g=Ve.prototype;g.add=function(e,t){kt(this),this.i=null,e=we(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function va(e,t){kt(e),t=we(e,t),Bt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Bt(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&$r(e)))}function wa(e,t){return kt(e),t=we(e,t),Bt(e.g.h,t)}g.forEach=function(e,t){kt(this),this.g.forEach(function(n,s){zo(n,function(r){e.call(t,r,s,this)},this)},this)};g.T=function(){kt(this);for(var e=this.g.R(),t=this.g.T(),n=[],s=0;s<t.length;s++)for(var r=e[s],i=0;i<r.length;i++)n.push(t[s]);return n};g.R=function(e){kt(this);var t=[];if(typeof e=="string")wa(this,e)&&(t=Ni(t,this.g.get(we(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=Ni(t,e[n])}return t};g.set=function(e,t){return kt(this),this.i=null,e=we(this,e),wa(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};g.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function Ea(e,t,n){va(e,t),0<n.length&&(e.i=null,e.g.set(we(e,t),_r(n)),e.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var s=t[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),e.push(o)}}return this.i=e.join("&")};function we(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Ip(e,t){t&&!e.j&&(kt(e),e.i=null,e.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(va(this,s),Ea(this,r,n))},e)),e.j=t}var Cp=class{constructor(e,t){this.h=e,this.g=t}};function ba(e){this.l=e||Dp,w.PerformanceNavigationTiming?(e=w.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(w.g&&w.g.Ea&&w.g.Ea()&&w.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Dp=10;function _a(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Ta(e){return e.h?1:e.g?e.g.size:0}function ir(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Fr(e,t){e.g?e.g.add(t):e.h=t}function Aa(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}ba.prototype.cancel=function(){if(this.i=Sa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Sa(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return _r(e.i)}function Br(){}Br.prototype.stringify=function(e){return w.JSON.stringify(e,void 0)};Br.prototype.parse=function(e){return w.JSON.parse(e,void 0)};function xp(){this.g=new Br}function Np(e,t,n){const s=n||"";try{Lr(e,function(r,i){let o=r;tn(r)&&(o=xr(r)),t.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw t.push(s+"type="+encodeURIComponent("_badmap")),r}}function kp(e,t){const n=new rs;if(w.Image){const s=new Image;s.onload=mn(yn,n,s,"TestLoadImage: loaded",!0,t),s.onerror=mn(yn,n,s,"TestLoadImage: error",!1,t),s.onabort=mn(yn,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=mn(yn,n,s,"TestLoadImage: timeout",!1,t),w.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function yn(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch{}}function an(e){this.l=e.$b||null,this.j=e.ib||!1}Y(an,Or);an.prototype.g=function(){return new cs(this.l,this.j)};an.prototype.i=function(e){return function(){return e}}({});function cs(e,t){z.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Ur,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Y(cs,z);var Ur=0;g=cs.prototype;g.open=function(e,t){if(this.readyState!=Ur)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,je(this)};g.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||w).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ln(this)),this.readyState=Ur};g.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,je(this)),this.g&&(this.readyState=3,je(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof w.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ia(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function Ia(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}g.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ln(this):je(this),this.readyState==3&&Ia(this)}};g.Ua=function(e){this.g&&(this.response=this.responseText=e,ln(this))};g.Ta=function(e){this.g&&(this.response=e,ln(this))};g.ha=function(){this.g&&ln(this)};function ln(e){e.readyState=4,e.l=null,e.j=null,e.A=null,je(e)}g.setRequestHeader=function(e,t){this.v.append(e,t)};g.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function je(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(cs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Rp=w.JSON.parse;function B(e){z.call(this),this.headers=new ve,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ca,this.K=this.L=!1}Y(B,z);var Ca="",Op=/^https?$/i,Pp=["POST","PUT"];g=B.prototype;g.ea=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():er.g(),this.C=this.u?Fi(this.u):Fi(er),this.g.onreadystatechange=W(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){Vi(this,i);return}e=n||"";const r=new ve(this.headers);s&&Lr(s,function(i,o){r.set(o,i)}),s=zf(r.T()),n=w.FormData&&e instanceof w.FormData,!(0<=qo(Pp,t))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Na(this),0<this.B&&((this.K=Mp(this.g))?(this.g.timeout=this.B,this.g.ontimeout=W(this.pa,this)):this.A=Rr(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Vi(this,i)}};function Mp(e){return ae&&Qf()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function Lp(e){return e.toLowerCase()=="content-type"}g.pa=function(){typeof br!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,X(this,"timeout"),this.abort(8))};function Vi(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Da(e),hs(e)}function Da(e){e.D||(e.D=!0,X(e,"complete"),X(e,"error"))}g.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,X(this,"complete"),X(this,"abort"),hs(this))};g.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),hs(this,!0)),B.Z.M.call(this)};g.Fa=function(){this.s||(this.F||this.v||this.l?xa(this):this.cb())};g.cb=function(){xa(this)};function xa(e){if(e.h&&typeof br!="undefined"&&(!e.C[1]||wt(e)!=4||e.ba()!=2)){if(e.v&&wt(e)==4)Rr(e.Fa,0,e);else if(X(e,"readystatechange"),wt(e)==4){e.h=!1;try{const a=e.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var r=String(e.H).match(ya)[1]||null;if(!r&&w.self&&w.self.location){var i=w.self.location.protocol;r=i.substr(0,i.length-1)}s=!Op.test(r?r.toLowerCase():"")}n=s}if(n)X(e,"complete"),X(e,"success");else{e.m=6;try{var o=2<wt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.ba()+"]",Da(e)}}finally{hs(e)}}}}function hs(e,t){if(e.g){Na(e);const n=e.g,s=e.C[0]?kn:null;e.g=null,e.C=null,t||X(e,"ready");try{n.onreadystatechange=s}catch{}}}function Na(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(w.clearTimeout(e.A),e.A=null)}function wt(e){return e.g?e.g.readyState:0}g.ba=function(){try{return 2<wt(this)?this.g.status:-1}catch{return-1}};g.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Rp(t)}};function ji(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Ca:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}g.Da=function(){return this.m};g.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function $p(e){let t="";return Tr(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Vr(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=$p(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):O(e,t,n))}function Ie(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function ka(e){this.za=0,this.l=[],this.h=new rs,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ie("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ie("baseRetryDelayMs",5e3,e),this.$a=Ie("retryDelaySeedMs",1e4,e),this.Ya=Ie("forwardChannelMaxRetries",2,e),this.ra=Ie("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new ba(e&&e.concurrentRequestLimit),this.Ca=new xp,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}g=ka.prototype;g.ma=8;g.G=1;function jr(e){if(Ra(e),e.G==3){var t=e.V++,n=_t(e.F);O(n,"SID",e.J),O(n,"RID",t),O(n,"TYPE","terminate"),un(e,n),t=new rn(e,e.h,t,void 0),t.K=2,t.v=us(_t(n)),n=!1,w.navigator&&w.navigator.sendBeacon&&(n=w.navigator.sendBeacon(t.v.toString(),"")),!n&&w.Image&&(new Image().src=t.v,n=!0),n||(t.g=Ua(t.l,null),t.g.ea(t.v)),t.F=Date.now(),on(t)}Fa(e)}g.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function ds(e){e.g&&(qr(e),e.g.cancel(),e.g=null)}function Ra(e){ds(e),e.u&&(w.clearTimeout(e.u),e.u=null),Fn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&w.clearTimeout(e.m),e.m=null)}function Fs(e,t){e.l.push(new Cp(e.Za++,t)),e.G==3&&fs(e)}function fs(e){_a(e.i)||e.m||(e.m=!0,Nr(e.Ha,e),e.C=0)}function Fp(e,t){return Ta(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=nn(W(e.Ha,e,t),$a(e,e.C)),e.C++,!0)}g.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const r=new rn(this,this.h,e,void 0);let i=this.s;if(this.P&&(i?(i=Ko(i),Go(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)t:{for(var t=0,n=0;n<this.l.length;n++){e:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.l.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Oa(this,r,t),n=_t(this.F),O(n,"RID",e),O(n,"CVER",22),this.D&&O(n,"X-HTTP-Session-Id",this.D),un(this,n),this.o&&i&&Vr(n,this.o,i),Fr(this.i,r),this.Ra&&O(n,"TYPE","init"),this.ja?(O(n,"$req",t),O(n,"SID","null"),r.$=!0,sr(r,n,null)):sr(r,n,t),this.G=2}}else this.G==3&&(e?Hi(this,e):this.l.length==0||_a(this.i)||Hi(this))};function Hi(e,t){var n;t?n=t.m:n=e.V++;const s=_t(e.F);O(s,"SID",e.J),O(s,"RID",n),O(s,"AID",e.U),un(e,s),e.o&&e.s&&Vr(s,e.o,e.s),n=new rn(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Oa(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Fr(e.i,n),sr(n,s,t)}function un(e,t){e.j&&Lr({},function(n,s){O(t,s,n)})}function Oa(e,t,n){n=Math.min(e.l.length,n);var s=e.j?W(e.j.Oa,e.j,e):null;t:{var r=e.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=r[l].h;const u=r[l].g;if(c-=i,0>c)i=Math.max(0,r[l].h-100),a=!1;else try{Np(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break t}}}return e=e.l.splice(0,n),t.D=e,s}function Pa(e){e.g||e.u||(e.Y=1,Nr(e.Ga,e),e.A=0)}function Hr(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=nn(W(e.Ga,e),$a(e,e.A)),e.A++,!0)}g.Ga=function(){if(this.u=null,Ma(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=nn(W(this.bb,this),e)}};g.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,rt(10),ds(this),Ma(this))};function qr(e){e.B!=null&&(w.clearTimeout(e.B),e.B=null)}function Ma(e){e.g=new rn(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=_t(e.oa);O(t,"RID","rpc"),O(t,"SID",e.J),O(t,"CI",e.N?"0":"1"),O(t,"AID",e.U),un(e,t),O(t,"TYPE","xmlhttp"),e.o&&e.s&&Vr(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=us(_t(t)),n.s=null,n.U=!0,fa(n,e)}g.ab=function(){this.v!=null&&(this.v=null,ds(this),Hr(this),rt(19))};function Fn(e){e.v!=null&&(w.clearTimeout(e.v),e.v=null)}function La(e,t){var n=null;if(e.g==t){Fn(e),qr(e),e.g=null;var s=2}else if(ir(e.i,t))n=t.D,Aa(e.i,t),s=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;s=is(),X(s,new ua(s,n,t,r)),fs(e)}else Pa(e);else if(r=t.o,r==3||r==0&&0<e.I||!(s==1&&Fp(e,t)||s==2&&Hr(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),r){case 1:Pt(e,5);break;case 4:Pt(e,10);break;case 3:Pt(e,6);break;default:Pt(e,2)}}}function $a(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function Pt(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var s=W(e.jb,e);n||(n=new Ut("//www.google.com/images/cleardot.gif"),w.location&&w.location.protocol=="http"||Mn(n,"https"),us(n)),kp(n.toString(),s)}else rt(2);e.G=0,e.j&&e.j.va(t),Fa(e),Ra(e)}g.jb=function(e){e?(this.h.info("Successfully pinged google.com"),rt(2)):(this.h.info("Failed to ping google.com"),rt(1))};function Fa(e){e.G=0,e.I=-1,e.j&&((Sa(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,_r(e.l),e.l.length=0),e.j.ua())}function Ba(e,t,n){let s=wp(n);if(s.i!="")t&&Ln(s,t+"."+s.i),$n(s,s.m);else{const r=w.location;s=Ep(r.protocol,t?t+"."+r.hostname:r.hostname,+r.port,n)}return e.aa&&Tr(e.aa,function(r,i){O(s,i,r)}),t=e.D,n=e.sa,t&&n&&O(s,t,n),O(s,"VER",e.ma),un(e,s),s}function Ua(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new B(new an({ib:!0})):new B(e.qa),t.L=e.H,t}function Va(){}g=Va.prototype;g.xa=function(){};g.wa=function(){};g.va=function(){};g.ua=function(){};g.Oa=function(){};function Bn(){if(ae&&!(10<=Number(Yf)))throw Error("Environmental error: no available transport.")}Bn.prototype.g=function(e,t){return new ht(e,t)};function ht(e,t){z.call(this),this.g=new ka(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!Rn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Rn(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Ee(this)}Y(ht,z);ht.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Nr(W(e.hb,e,t))),rt(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Ba(e,null,e.W),fs(e)};ht.prototype.close=function(){jr(this.g)};ht.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,Fs(this.g,t)}else this.v?(t={},t.__data__=xr(e),Fs(this.g,t)):Fs(this.g,e)};ht.prototype.M=function(){this.g.j=null,delete this.j,jr(this.g),delete this.g,ht.Z.M.call(this)};function ja(e){Pr.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Y(ja,Pr);function Ha(){Mr.call(this),this.status=1}Y(Ha,Mr);function Ee(e){this.g=e}Y(Ee,Va);Ee.prototype.xa=function(){X(this.g,"a")};Ee.prototype.wa=function(e){X(this.g,new ja(e))};Ee.prototype.va=function(e){X(this.g,new Ha(e))};Ee.prototype.ua=function(){X(this.g,"b")};Bn.prototype.createWebChannel=Bn.prototype.g;ht.prototype.send=ht.prototype.u;ht.prototype.open=ht.prototype.m;ht.prototype.close=ht.prototype.close;os.NO_ERROR=0;os.TIMEOUT=8;os.HTTP_ERROR=6;ca.COMPLETE="complete";ha.EventType=sn;sn.OPEN="a";sn.CLOSE="b";sn.ERROR="c";sn.MESSAGE="d";z.prototype.listen=z.prototype.N;B.prototype.listenOnce=B.prototype.O;B.prototype.getLastError=B.prototype.La;B.prototype.getLastErrorCode=B.prototype.Da;B.prototype.getStatus=B.prototype.ba;B.prototype.getResponseJson=B.prototype.Qa;B.prototype.getResponseText=B.prototype.ga;B.prototype.send=B.prototype.ea;var Bp=function(){return new Bn},Up=function(){return is()},Bs=os,Vp=ca,jp=Gt,qi={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Hp=an,vn=ha,qp=B;const zi="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let be="9.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt=new Fo("@firebase/firestore");function Ki(){return Vt.logLevel}function v(e,...t){if(Vt.logLevel<=N.DEBUG){const n=t.map(zr);Vt.debug(`Firestore (${be}): ${e}`,...n)}}function jt(e,...t){if(Vt.logLevel<=N.ERROR){const n=t.map(zr);Vt.error(`Firestore (${be}): ${e}`,...n)}}function Gi(e,...t){if(Vt.logLevel<=N.WARN){const n=t.map(zr);Vt.warn(`Firestore (${be}): ${e}`,...n)}}function zr(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e="Unexpected state"){const t=`FIRESTORE (${be}) INTERNAL ASSERTION FAILED: `+e;throw jt(t),new Error(t)}function V(e,t){e||D()}function R(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends ye{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Kp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class Gp{constructor(t){this.t=t,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const r=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let i=new Lt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Lt,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=i;t.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Lt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(V(typeof s.accessToken=="string"),new zp(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return V(t===null||typeof t=="string"),new ot(t)}}class Wp{constructor(t,n,s){this.type="FirstParty",this.user=ot.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class Xp{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new Wp(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Qp{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Yp{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,n){const s=i=>{i.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(V(typeof n.token=="string"),this.p=n.token,new Qp(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=Jp(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=t.charAt(r[i]%t.length))}return s}}function k(e,t){return e<t?-1:e>t?1:0}function le(e,t,n){return e.length===t.length&&e.every((s,r)=>n(s,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new E(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new E(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new E(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new E(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return q.fromMillis(Date.now())}static fromDate(t){return q.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new q(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?k(this.nanoseconds,t.nanoseconds):k(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t){this.timestamp=t}static fromTimestamp(t){return new U(t)}static min(){return new U(new q(0,0))}static max(){return new U(new q(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(t,n,s){n===void 0?n=0:n>t.length&&D(),s===void 0?s=t.length-n:s>t.length-n&&D(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return He.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof He?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let r=0;r<s;r++){const i=t.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class M extends He{construct(t,n,s){return new M(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new E(p.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new M(n)}static emptyPath(){return new M([])}}const Zp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Z extends He{construct(t,n,s){return new Z(t,n,s)}static isValidIdentifier(t){return Zp.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Z.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Z(["__name__"])}static fromServerFormat(t){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new E(p.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new E(p.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new E(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new E(p.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Z(n)}static emptyPath(){return new Z([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(t){this.path=t}static fromPath(t){return new b(M.fromString(t))}static fromName(t){return new b(M.fromString(t).popFirst(5))}static empty(){return new b(M.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&M.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return M.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new b(new M(t.slice()))}}function tm(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=U.fromTimestamp(s===1e9?new q(n+1,0):new q(n,s));return new Dt(r,b.empty(),t)}function em(e){return new Dt(e.readTime,e.key,-1)}class Dt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Dt(U.min(),b.empty(),-1)}static max(){return new Dt(U.max(),b.empty(),-1)}}function nm(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=b.comparator(e.documentKey,t.documentKey),n!==0?n:k(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function za(e){if(e.code!==p.FAILED_PRECONDITION||e.message!==sm)throw e;v("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&D(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new f((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof f?n:f.resolve(n)}catch(n){return f.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):f.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):f.reject(n)}static resolve(t){return new f((n,s)=>{n(t)})}static reject(t){return new f((n,s)=>{s(t)})}static waitFor(t){return new f((n,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},l=>s(l))}),o=!0,i===r&&n()})}static or(t){let n=f.resolve(!1);for(const s of t)n=n.next(r=>r?f.resolve(r):s());return n}static forEach(t,n){const s=[];return t.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(t,n){return new f((s,r)=>{const i=t.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(t[c]).next(u=>{o[c]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(t,n){return new f((s,r)=>{const i=()=>{t()===!0?n().next(()=>{i()},r):s()};i()})}}function ps(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.it(s),this.rt=s=>n.writeSequenceNumber(s))}it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function cn(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ga(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ka.ot=-1;class ut{constructor(t,n){this.comparator=t,this.root=n||K.EMPTY}insert(t,n){return new ut(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,K.BLACK,null,null))}remove(t){return new ut(this.comparator,this.root.remove(t,this.comparator).copy(null,null,K.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new wn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new wn(this.root,t,this.comparator,!1)}getReverseIterator(){return new wn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new wn(this.root,t,this.comparator,!0)}}class wn{constructor(t,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?s(t.key,n):1,n&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class K{constructor(t,n,s,r,i){this.key=t,this.value=n,this.color=s!=null?s:K.RED,this.left=r!=null?r:K.EMPTY,this.right=i!=null?i:K.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,r,i){return new K(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return K.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return K.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,K.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,K.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw D();const t=this.left.check();if(t!==this.right.check())throw D();return t+(this.isRed()?0:1)}}K.EMPTY=null,K.RED=!0,K.BLACK=!1;K.EMPTY=new class{constructor(){this.size=0}get key(){throw D()}get value(){throw D()}get color(){throw D()}get left(){throw D()}get right(){throw D()}copy(e,t,n,s,r){return this}insert(e,t,n){return new K(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.comparator=t,this.data=new ut(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Xi(this.data.getIterator())}getIteratorFrom(t){return new Xi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof it)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new it(this.comparator);return n.data=t,n}}class Xi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.fields=t,t.sort(Z.comparator)}static empty(){return new gt([])}unionWith(t){let n=new it(Z.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new gt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return le(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new Tt(n)}static fromUint8Array(t){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(t);return new Tt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return k(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Tt.EMPTY_BYTE_STRING=new Tt("");const im=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ht(e){if(V(!!e),typeof e=="string"){let t=0;const n=im.exec(e);if(V(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:G(e.seconds),nanos:G(e.nanos)}}function G(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function qe(e){return typeof e=="string"?Tt.fromBase64String(e):Tt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Un(e){const t=Ht(e.mapValue.fields.__local_write_time__.timestampValue);return new q(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(t,n,s,r,i,o,a,l){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class ze{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new ze("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ze&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(e){return e==null}function Vn(e){return e===0&&1/e==-1/0}function lm(e){return typeof e=="number"&&Number.isInteger(e)&&!Vn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ue(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?om(e)?4:um(e)?9007199254740991:10:D()}function yt(e,t){if(e===t)return!0;const n=ue(e);if(n!==ue(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Un(e).isEqual(Un(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Ht(s.timestampValue),o=Ht(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return qe(s.bytesValue).isEqual(qe(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return G(s.geoPointValue.latitude)===G(r.geoPointValue.latitude)&&G(s.geoPointValue.longitude)===G(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return G(s.integerValue)===G(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=G(s.doubleValue),o=G(r.doubleValue);return i===o?Vn(i)===Vn(o):isNaN(i)&&isNaN(o)}return!1}(e,t);case 9:return le(e.arrayValue.values||[],t.arrayValue.values||[],yt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Wi(i)!==Wi(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!yt(i[a],o[a])))return!1;return!0}(e,t);default:return D()}}function Ke(e,t){return(e.values||[]).find(n=>yt(n,t))!==void 0}function ce(e,t){if(e===t)return 0;const n=ue(e),s=ue(t);if(n!==s)return k(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return k(e.booleanValue,t.booleanValue);case 2:return function(r,i){const o=G(r.integerValue||r.doubleValue),a=G(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Qi(e.timestampValue,t.timestampValue);case 4:return Qi(Un(e),Un(t));case 5:return k(e.stringValue,t.stringValue);case 6:return function(r,i){const o=qe(r),a=qe(i);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=k(o[l],a[l]);if(c!==0)return c}return k(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,i){const o=k(G(r.latitude),G(i.latitude));return o!==0?o:k(G(r.longitude),G(i.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=ce(o[l],a[l]);if(c)return c}return k(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(r,i){if(r===En.mapValue&&i===En.mapValue)return 0;if(r===En.mapValue)return 1;if(i===En.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),l=i.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=k(a[u],c[u]);if(h!==0)return h;const m=ce(o[a[u]],l[c[u]]);if(m!==0)return m}return k(a.length,c.length)}(e.mapValue,t.mapValue);default:throw D()}}function Qi(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return k(e,t);const n=Ht(e),s=Ht(t),r=k(n.seconds,s.seconds);return r!==0?r:k(n.nanos,s.nanos)}function ee(e){return or(e)}function or(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const r=Ht(s);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?qe(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,b.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=or(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${or(s.fields[a])}`;return i+"}"}(e.mapValue):D();var t,n}function ar(e){return!!e&&"integerValue"in e}function Gr(e){return!!e&&"arrayValue"in e}function An(e){return!!e&&"mapValue"in e}function ke(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return cn(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=ke(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ke(e.arrayValue.values[n]);return t}return Object.assign({},e)}function um(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.value=t}static empty(){return new pt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!An(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=ke(n)}setAll(t){let n=Z.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=ke(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(t){const n=this.field(t.popLast());An(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return yt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=n.mapValue.fields[t.get(s)];An(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,s){cn(n,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new pt(ke(this.value))}}function Wa(e){const t=[];return cn(e.fields,(n,s)=>{const r=new Z([n]);if(An(s)){const i=Wa(s.mapValue).fields;if(i.length===0)t.push(r);else for(const o of i)t.push(r.child(o))}else t.push(r)}),new gt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t,n,s,r,i,o){this.key=t,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(t){return new dt(t,0,U.min(),U.min(),pt.empty(),0)}static newFoundDocument(t,n,s){return new dt(t,1,n,U.min(),s,0)}static newNoDocument(t,n){return new dt(t,2,n,U.min(),pt.empty(),0)}static newUnknownDocument(t,n){return new dt(t,3,n,U.min(),pt.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof dt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(t,n=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ut=null}}function Yi(e,t=null,n=[],s=[],r=null,i=null,o=null){return new cm(e,t,n,s,r,i,o)}function Wr(e){const t=R(e);if(t.ut===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+ee(r.value);var r}).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Kr(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>ee(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>ee(s)).join(",")),t.ut=n}return t.ut}function hm(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${ee(s.value)}`;var s}).join(", ")}]`),Kr(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>ee(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>ee(n)).join(",")),`Target(${t})`}function Xr(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let r=0;r<e.orderBy.length;r++)if(!wm(e.orderBy[r],t.orderBy[r]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(n=e.filters[r],s=t.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!yt(n.value,s.value))return!1;var n,s;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Zi(e.startAt,t.startAt)&&Zi(e.endAt,t.endAt)}class at extends class{}{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.ct(t,n,s):new dm(t,n,s):n==="array-contains"?new mm(t,s):n==="in"?new gm(t,s):n==="not-in"?new ym(t,s):n==="array-contains-any"?new vm(t,s):new at(t,n,s)}static ct(t,n,s){return n==="in"?new fm(t,s):new pm(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.at(ce(n,this.value)):n!==null&&ue(this.value)===ue(n)&&this.at(ce(n,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return D()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class dm extends at{constructor(t,n,s){super(t,n,s),this.key=b.fromName(s.referenceValue)}matches(t){const n=b.comparator(t.key,this.key);return this.at(n)}}class fm extends at{constructor(t,n){super(t,"in",n),this.keys=Xa("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class pm extends at{constructor(t,n){super(t,"not-in",n),this.keys=Xa("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Xa(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>b.fromName(s.referenceValue))}class mm extends at{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Gr(n)&&Ke(n.arrayValue,this.value)}}class gm extends at{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ke(this.value.arrayValue,n)}}class ym extends at{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ke(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Ke(this.value.arrayValue,n)}}class vm extends at{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Gr(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ke(this.value.arrayValue,s))}}class jn{constructor(t,n){this.position=t,this.inclusive=n}}class Re{constructor(t,n="asc"){this.field=t,this.dir=n}}function wm(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Ji(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(i.field.isKeyField()?s=b.comparator(b.fromName(o.referenceValue),n.key):s=ce(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Zi(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!yt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(t,n=null,s=[],r=[],i=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.lt=null,this.ft=null,this.startAt,this.endAt}}function Em(e,t,n,s,r,i,o,a){return new ms(e,t,n,s,r,i,o,a)}function bm(e){return new ms(e)}function to(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function _m(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Tm(e){for(const t of e.filters)if(t.ht())return t.field;return null}function Am(e){return e.collectionGroup!==null}function Ge(e){const t=R(e);if(t.lt===null){t.lt=[];const n=Tm(t),s=_m(t);if(n!==null&&s===null)n.isKeyField()||t.lt.push(new Re(n)),t.lt.push(new Re(Z.keyField(),"asc"));else{let r=!1;for(const i of t.explicitOrderBy)t.lt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.lt.push(new Re(Z.keyField(),i))}}}return t.lt}function he(e){const t=R(e);if(!t.ft)if(t.limitType==="F")t.ft=Yi(t.path,t.collectionGroup,Ge(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of Ge(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new Re(i.field,o))}const s=t.endAt?new jn(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new jn(t.startAt.position,t.startAt.inclusive):null;t.ft=Yi(t.path,t.collectionGroup,n,t.filters,t.limit,s,r)}return t.ft}function lr(e,t,n){return new ms(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Qa(e,t){return Xr(he(e),he(t))&&e.limitType===t.limitType}function Ya(e){return`${Wr(he(e))}|lt:${e.limitType}`}function eo(e){return`Query(target=${hm(he(e))}; limitType=${e.limitType})`}function Ja(e,t){return t.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):b.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(e,t)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Ji(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Ge(n),s)||n.endAt&&!function(r,i,o){const a=Ji(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Ge(n),s))}(e,t)}function Sm(e){return(t,n)=>{let s=!1;for(const r of Ge(e)){const i=Im(r,t,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Im(e,t,n){const s=e.field.isKeyField()?b.comparator(t.key,n.key):function(r,i,o){const a=i.data.field(r),l=o.data.field(r);return a!==null&&l!==null?ce(a,l):D()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return D()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(e,t){if(e.dt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vn(t)?"-0":t}}function tl(e){return{integerValue:""+e}}function Cm(e,t){return lm(t)?tl(t):Za(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(){this._=void 0}}function Dm(e,t,n){return e instanceof Hn?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,t):e instanceof We?nl(e,t):e instanceof Xe?sl(e,t):function(s,r){const i=el(s,r),o=no(i)+no(s._t);return ar(i)&&ar(s._t)?tl(o):Za(s.wt,o)}(e,t)}function xm(e,t,n){return e instanceof We?nl(e,t):e instanceof Xe?sl(e,t):n}function el(e,t){return e instanceof qn?ar(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class Hn extends gs{}class We extends gs{constructor(t){super(),this.elements=t}}function nl(e,t){const n=rl(t);for(const s of e.elements)n.some(r=>yt(r,s))||n.push(s);return{arrayValue:{values:n}}}class Xe extends gs{constructor(t){super(),this.elements=t}}function sl(e,t){let n=rl(t);for(const s of e.elements)n=n.filter(r=>!yt(r,s));return{arrayValue:{values:n}}}class qn extends gs{constructor(t,n){super(),this.wt=t,this._t=n}}function no(e){return G(e.integerValue||e.doubleValue)}function rl(e){return Gr(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Nm(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof We&&s instanceof We||n instanceof Xe&&s instanceof Xe?le(n.elements,s.elements,yt):n instanceof qn&&s instanceof qn?yt(n._t,s._t):n instanceof Hn&&s instanceof Hn}(e.transform,t.transform)}class km{constructor(t,n){this.version=t,this.transformResults=n}}class Et{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Et}static exists(t){return new Et(void 0,t)}static updateTime(t){return new Et(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Sn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class ys{}function il(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new al(e.key,Et.none()):new hn(e.key,e.data,Et.none());{const n=e.data,s=pt.empty();let r=new it(Z.comparator);for(let i of t.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Wt(e.key,s,new gt(r.toArray()),Et.none())}}function Rm(e,t,n){e instanceof hn?function(s,r,i){const o=s.value.clone(),a=ro(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Wt?function(s,r,i){if(!Sn(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=ro(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(ol(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(e,t,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,n)}function Oe(e,t,n,s){return e instanceof hn?function(r,i,o,a){if(!Sn(r.precondition,i))return o;const l=r.value.clone(),c=io(r.fieldTransforms,a,i);return l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),null}(e,t,n,s):e instanceof Wt?function(r,i,o,a){if(!Sn(r.precondition,i))return o;const l=io(r.fieldTransforms,a,i),c=i.data;return c.setAll(ol(r)),c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(e,t,n,s):function(r,i,o){return Sn(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(e,t,n)}function Om(e,t){let n=null;for(const s of e.fieldTransforms){const r=t.data.field(s.field),i=el(s.transform,r||null);i!=null&&(n===null&&(n=pt.empty()),n.set(s.field,i))}return n||null}function so(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&le(n,s,(r,i)=>Nm(r,i))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class hn extends ys{constructor(t,n,s,r=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Wt extends ys{constructor(t,n,s,r,i=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ol(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function ro(e,t,n){const s=new Map;V(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,xm(o,a,n[r]))}return s}function io(e,t,n){const s=new Map;for(const r of e){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Dm(i,o,t))}return s}class al extends ys{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Pm extends ys{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F,I;function Mm(e){switch(e){default:return D();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function Lm(e){if(e===void 0)return jt("GRPC error has no .code"),p.UNKNOWN;switch(e){case F.OK:return p.OK;case F.CANCELLED:return p.CANCELLED;case F.UNKNOWN:return p.UNKNOWN;case F.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case F.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case F.INTERNAL:return p.INTERNAL;case F.UNAVAILABLE:return p.UNAVAILABLE;case F.UNAUTHENTICATED:return p.UNAUTHENTICATED;case F.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case F.NOT_FOUND:return p.NOT_FOUND;case F.ALREADY_EXISTS:return p.ALREADY_EXISTS;case F.PERMISSION_DENIED:return p.PERMISSION_DENIED;case F.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case F.ABORTED:return p.ABORTED;case F.OUT_OF_RANGE:return p.OUT_OF_RANGE;case F.UNIMPLEMENTED:return p.UNIMPLEMENTED;case F.DATA_LOSS:return p.DATA_LOSS;default:return D()}}(I=F||(F={}))[I.OK=0]="OK",I[I.CANCELLED=1]="CANCELLED",I[I.UNKNOWN=2]="UNKNOWN",I[I.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",I[I.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",I[I.NOT_FOUND=5]="NOT_FOUND",I[I.ALREADY_EXISTS=6]="ALREADY_EXISTS",I[I.PERMISSION_DENIED=7]="PERMISSION_DENIED",I[I.UNAUTHENTICATED=16]="UNAUTHENTICATED",I[I.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",I[I.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",I[I.ABORTED=10]="ABORTED",I[I.OUT_OF_RANGE=11]="OUT_OF_RANGE",I[I.UNIMPLEMENTED=12]="UNIMPLEMENTED",I[I.INTERNAL=13]="INTERNAL",I[I.UNAVAILABLE=14]="UNAVAILABLE",I[I.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){cn(this.inner,(n,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return Ga(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m=new ut(b.comparator);function zn(){return $m}const ll=new ut(b.comparator);function bn(...e){let t=ll;for(const n of e)t=t.insert(n.key,n);return t}function ul(e){let t=ll;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Mt(){return Pe()}function cl(){return Pe()}function Pe(){return new _e(e=>e.toString(),(e,t)=>e.isEqual(t))}const Fm=new ut(b.comparator),Bm=new it(b.comparator);function J(...e){let t=Bm;for(const n of e)t=t.add(n);return t}const Um=new it(k);function Vm(){return Um}class jm{constructor(t,n){this.databaseId=t,this.dt=n}}function ur(e,t){return e.dt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Hm(e,t){return e.dt?t.toBase64():t.toUint8Array()}function qm(e,t){return ur(e,t.toTimestamp())}function ne(e){return V(!!e),U.fromTimestamp(function(t){const n=Ht(t);return new q(n.seconds,n.nanos)}(e))}function hl(e,t){return function(n){return new M(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function zm(e){const t=M.fromString(e);return V(eg(t)),t}function cr(e,t){return hl(e.databaseId,t.path)}function Km(e){const t=zm(e);return t.length===4?M.emptyPath():Wm(t)}function Gm(e){return new M(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Wm(e){return V(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function oo(e,t,n){return{name:cr(e,t),fields:n.value.mapValue.fields}}function Xm(e,t){let n;if(t instanceof hn)n={update:oo(e,t.key,t.value)};else if(t instanceof al)n={delete:cr(e,t.key)};else if(t instanceof Wt)n={update:oo(e,t.key,t.data),updateMask:tg(t.fieldMask)};else{if(!(t instanceof Pm))return D();n={verify:cr(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Hn)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof We)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Xe)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof qn)return{fieldPath:i.field.canonicalString(),increment:o._t};throw D()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:qm(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:D()}(e,t.precondition)),n}function Qm(e,t){return e&&e.length>0?(V(t!==void 0),e.map(n=>function(s,r){let i=s.updateTime?ne(s.updateTime):ne(r);return i.isEqual(U.min())&&(i=ne(r)),new km(i,s.transformResults||[])}(n,t))):[]}function Ym(e){let t=Km(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){V(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:t=t.child(u.collectionId)}let i=[];n.where&&(i=dl(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Re(Zt(h.field),function(m){switch(m){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Kr(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,m=u.values||[];return new jn(m,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,m=u.values||[];return new jn(m,h)}(n.endAt)),Em(t,r,o,i,a,"F",l,c)}function dl(e){return e?e.unaryFilter!==void 0?[Zm(e)]:e.fieldFilter!==void 0?[Jm(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>dl(t)).reduce((t,n)=>t.concat(n)):D():[]}function Zt(e){return Z.fromServerFormat(e.fieldPath)}function Jm(e){return at.create(Zt(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return D()}}(e.fieldFilter.op),e.fieldFilter.value)}function Zm(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Zt(e.unaryFilter.field);return at.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Zt(e.unaryFilter.field);return at.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Zt(e.unaryFilter.field);return at.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Zt(e.unaryFilter.field);return at.create(r,"!=",{nullValue:"NULL_VALUE"});default:return D()}}function tg(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function eg(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(t,n,s,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&Rm(i,t,s[r])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Oe(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Oe(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=cl();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const l=il(o,a);l!==null&&s.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(U.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),J())}isEqual(t){return this.batchId===t.batchId&&le(this.mutations,t.mutations,(n,s)=>so(n,s))&&le(this.baseMutations,t.baseMutations,(n,s)=>so(n,s))}}class Qr{constructor(t,n,s,r){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(t,n,s){V(t.mutations.length===s.length);let r=Fm;const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Qr(t,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(t){this.ne=t}}function ig(e){const t=Ym({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?lr(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(){this.ze=new ag}addToCollectionParentIndex(t,n){return this.ze.add(n),f.resolve()}getCollectionParents(t,n){return f.resolve(this.ze.getEntries(n))}addFieldIndex(t,n){return f.resolve()}deleteFieldIndex(t,n){return f.resolve()}getDocumentsMatchingTarget(t,n){return f.resolve(null)}getIndexType(t,n){return f.resolve(0)}getFieldIndexes(t,n){return f.resolve([])}getNextCollectionGroupToUpdate(t){return f.resolve(null)}getMinOffset(t,n){return f.resolve(Dt.min())}getMinOffsetFromCollectionGroup(t,n){return f.resolve(Dt.min())}updateCollectionGroup(t,n,s){return f.resolve()}updateIndexEntries(t,n){return f.resolve()}}class ag{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n]||new it(M.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(t){return(this.index[t]||new it(M.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t){this.En=t}next(){return this.En+=2,this.En}static An(){return new de(0)}static Rn(){return new de(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(){this.changes=new _e(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,dt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?f.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(t,n,s,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(s=r,this.getBaseDocument(t,n,s))).next(r=>(s!==null&&Oe(s.mutation,r,gt.empty(),q.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,J()).next(()=>s))}getLocalViewOfDocuments(t,n,s=J()){const r=Mt();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,s).next(i=>{let o=bn();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=Mt();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,J()))}populateOverlays(t,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,r){let i=zn();const o=Pe(),a=Pe();return n.forEach((l,c)=>{const u=s.get(c.key);r.has(c.key)&&(u===void 0||u.mutation instanceof Wt)?i=i.insert(c.key,c):u!==void 0&&(o.set(c.key,u.mutation.getFieldMask()),Oe(u.mutation,c,u.mutation.getFieldMask(),q.now()))}),this.recalculateAndSaveOverlays(t,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new ug(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const s=Pe();let r=new ut((o,a)=>o-a),i=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||gt.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(r.get(a.batchId)||J()).add(l);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=cl();u.forEach(m=>{if(!i.has(m)){const y=il(n.get(m),s.get(m));y!==null&&h.set(m,y),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,h))}return f.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(r){return b.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Am(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,r-i.size):f.resolve(Mt());let a=-1,l=i;return o.next(c=>f.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?f.resolve():this.getBaseDocument(t,u,h).next(m=>{l=l.insert(u,m)}))).next(()=>this.populateOverlays(t,c,i)).next(()=>this.computeViews(t,l,c,J())).next(u=>({batchId:a,changes:ul(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new b(n)).next(s=>{let r=bn();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const r=n.collectionGroup;let i=bn();return this.indexManager.getCollectionParents(t,r).next(o=>f.forEach(o,a=>{const l=function(c,u){return new ms(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(t,l,s).next(c=>{c.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(t,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId))).next(i=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,dt.newInvalidDocument(c)))});let o=bn();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&Oe(c.mutation,l,gt.empty(),q.now()),Ja(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(t,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(t,n):f.resolve(dt.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(t,n){return f.resolve(this.Jn.get(n))}saveBundleMetadata(t,n){var s;return this.Jn.set(n.id,{id:(s=n).id,version:s.version,createTime:ne(s.createTime)}),f.resolve()}getNamedQuery(t,n){return f.resolve(this.Yn.get(n))}saveNamedQuery(t,n){return this.Yn.set(n.name,function(s){return{name:s.name,query:ig(s.bundledQuery),readTime:ne(s.readTime)}}(n)),f.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(){this.overlays=new ut(b.comparator),this.Xn=new Map}getOverlay(t,n){return f.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Mt();return f.forEach(n,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((r,i)=>{this.ie(t,n,i)}),f.resolve()}removeOverlaysForBatchId(t,n,s){const r=this.Xn.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Xn.delete(s)),f.resolve()}getOverlaysForCollection(t,n,s){const r=Mt(),i=n.length+1,o=new b(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>s&&r.set(l.getKey(),l)}return f.resolve(r)}getOverlaysForCollectionGroup(t,n,s,r){let i=new ut((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=i.get(c.largestBatchId);u===null&&(u=Mt(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Mt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=r)););return f.resolve(a)}ie(t,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Xn.get(r.largestBatchId).delete(s.key);this.Xn.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new sg(n,s));let i=this.Xn.get(n);i===void 0&&(i=J(),this.Xn.set(n,i)),this.Xn.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){this.Zn=new it(H.ts),this.es=new it(H.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,n){const s=new H(t,n);this.Zn=this.Zn.add(s),this.es=this.es.add(s)}ss(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.rs(new H(t,n))}os(t,n){t.forEach(s=>this.removeReference(s,n))}us(t){const n=new b(new M([])),s=new H(n,t),r=new H(n,t+1),i=[];return this.es.forEachInRange([s,r],o=>{this.rs(o),i.push(o.key)}),i}cs(){this.Zn.forEach(t=>this.rs(t))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const n=new b(new M([])),s=new H(n,t),r=new H(n,t+1);let i=J();return this.es.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new H(t,0),s=this.Zn.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class H{constructor(t,n){this.key=t,this.ls=n}static ts(t,n){return b.comparator(t.key,n.key)||k(t.ls,n.ls)}static ns(t,n){return k(t.ls,n.ls)||b.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new it(H.ts)}checkEmpty(t){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,r){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ng(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ds=this.ds.add(new H(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(t,n){return f.resolve(this._s(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,r=this.ws(s),i=r<0?0:r;return f.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(t){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new H(n,0),r=new H(n,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([s,r],o=>{const a=this._s(o.ls);i.push(a)}),f.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new it(k);return n.forEach(r=>{const i=new H(r,0),o=new H(r,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{s=s.add(a.ls)})}),f.resolve(this.gs(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,r=s.length+1;let i=s;b.isDocumentKey(i)||(i=i.child(""));const o=new H(new b(i),0);let a=new it(k);return this.ds.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===r&&(a=a.add(l.ls)),!0)},o),f.resolve(this.gs(a))}gs(t){const n=[];return t.forEach(s=>{const r=this._s(s);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){V(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ds;return f.forEach(n.mutations,r=>{const i=new H(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.ds=s})}In(t){}containsKey(t,n){const s=new H(n,0),r=this.ds.firstAfterOrEqual(s);return f.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,f.resolve()}ys(t,n){return this.ws(t)}ws(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}_s(t){const n=this.ws(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(t){this.ps=t,this.docs=new ut(b.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.ps(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return f.resolve(s?s.document.mutableCopy():dt.newInvalidDocument(n))}getEntries(t,n){let s=zn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():dt.newInvalidDocument(r))}),f.resolve(s)}getAllFromCollection(t,n,s){let r=zn();const i=new b(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||nm(em(l),s)<=0||(r=r.insert(l.key,l.mutableCopy()))}return f.resolve(r)}getAllFromCollectionGroup(t,n,s,r){D()}Is(t,n){return f.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new mg(this)}getSize(t){return f.resolve(this.size)}}class mg extends lg{constructor(t){super(),this.zn=t}applyChanges(t){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.zn.addEntry(t,r)):this.zn.removeEntry(s)}),f.waitFor(n)}getFromCache(t,n){return this.zn.getEntry(t,n)}getAllFromCache(t,n){return this.zn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(t){this.persistence=t,this.Ts=new _e(n=>Wr(n),Xr),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Es=0,this.As=new Yr,this.targetCount=0,this.Rs=de.An()}forEachTarget(t,n){return this.Ts.forEach((s,r)=>n(r)),f.resolve()}getLastRemoteSnapshotVersion(t){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return f.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Es&&(this.Es=n),f.resolve()}vn(t){this.Ts.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Rs=new de(n),this.highestTargetId=n),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,n){return this.vn(n),this.targetCount+=1,f.resolve()}updateTargetData(t,n){return this.vn(n),f.resolve()}removeTargetData(t,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,f.resolve()}removeTargets(t,n,s){let r=0;const i=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Ts.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),f.waitFor(i).next(()=>r)}getTargetCount(t){return f.resolve(this.targetCount)}getTargetData(t,n){const s=this.Ts.get(n)||null;return f.resolve(s)}addMatchingKeys(t,n,s){return this.As.ss(n,s),f.resolve()}removeMatchingKeys(t,n,s){this.As.os(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),f.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.As.us(n),f.resolve()}getMatchingKeysForTargetId(t,n){const s=this.As.hs(n);return f.resolve(s)}containsKey(t,n){return f.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(t,n){this.bs={},this.overlays={},this.Ps=new Ka(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new gg(this),this.indexManager=new og,this.remoteDocumentCache=function(s){return new pg(s)}(s=>this.referenceDelegate.Ss(s)),this.wt=new rg(n),this.Ds=new hg(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new dg,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.bs[t.toKey()];return s||(s=new fg(n,this.referenceDelegate),this.bs[t.toKey()]=s),s}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,n,s){v("MemoryPersistence","Starting transaction:",t);const r=new vg(this.Ps.next());return this.referenceDelegate.Cs(),s(r).next(i=>this.referenceDelegate.xs(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ns(t,n){return f.or(Object.values(this.bs).map(s=>()=>s.containsKey(t,n)))}}class vg extends rm{constructor(t){super(),this.currentSequenceNumber=t}}class Jr{constructor(t){this.persistence=t,this.ks=new Yr,this.Ms=null}static Os(t){return new Jr(t)}get Fs(){if(this.Ms)return this.Ms;throw D()}addReference(t,n,s){return this.ks.addReference(s,n),this.Fs.delete(s.toString()),f.resolve()}removeReference(t,n,s){return this.ks.removeReference(s,n),this.Fs.add(s.toString()),f.resolve()}markPotentiallyOrphaned(t,n){return this.Fs.add(n.toString()),f.resolve()}removeTarget(t,n){this.ks.us(n.targetId).forEach(r=>this.Fs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(i=>this.Fs.add(i.toString()))}).next(()=>s.removeTargetData(t,n))}Cs(){this.Ms=new Set}xs(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Fs,s=>{const r=b.fromPath(s);return this.$s(t,r).next(i=>{i||n.removeEntry(r,U.min())})}).next(()=>(this.Ms=null,n.apply(t)))}updateLimboDocument(t,n){return this.$s(t,n).next(s=>{s?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(t){return 0}$s(t,n){return f.or([()=>f.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ns(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(t,n,s,r){this.targetId=t,this.fromCache=n,this.Pi=s,this.vi=r}static Vi(t,n){let s=J(),r=J();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Zr(t,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(){this.Si=!1}initialize(t,n){this.Di=t,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(t,n,s,r){return this.Ci(t,n).next(i=>i||this.xi(t,n,r,s)).next(i=>i||this.Ni(t,n))}Ci(t,n){if(to(n))return f.resolve(null);let s=he(n);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=lr(n,null,"F"),s=he(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=J(...i);return this.Di.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(l=>{const c=this.ki(n,a);return this.Mi(n,c,o,l.readTime)?this.Ci(t,lr(n,null,"F")):this.Oi(t,c,n,l)}))})))}xi(t,n,s,r){return to(n)||r.isEqual(U.min())?this.Ni(t,n):this.Di.getDocuments(t,s).next(i=>{const o=this.ki(n,i);return this.Mi(n,o,s,r)?this.Ni(t,n):(Ki()<=N.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),eo(n)),this.Oi(t,o,n,tm(r,-1)))})}ki(t,n){let s=new it(Sm(t));return n.forEach((r,i)=>{Ja(t,i)&&(s=s.add(i))}),s}Mi(t,n,s,r){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ni(t,n){return Ki()<=N.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",eo(n)),this.Di.getDocumentsMatchingQuery(t,n,Dt.min())}Oi(t,n,s,r){return this.Di.getDocumentsMatchingQuery(t,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(t,n,s,r){this.persistence=t,this.Fi=n,this.wt=r,this.$i=new ut(k),this.Bi=new _e(i=>Wr(i),Xr),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(s)}qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new cg(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.$i))}}function bg(e,t,n,s){return new Eg(e,t,n,s)}async function fl(e,t){const n=R(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.qi(t),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let l=J();for(const c of r){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({Ki:c,removedBatchIds:o,addedBatchIds:a}))})})}function _g(e,t){const n=R(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=t.batch.keys(),i=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let m=f.resolve();return h.forEach(y=>{m=m.next(()=>c.getEntry(a,y)).next(_=>{const x=l.docVersions.get(y);V(x!==null),_.version.compareTo(x)<0&&(u.applyToRemoteDocument(_,l),_.isValidDocument()&&(_.setReadTime(l.commitVersion),c.addEntry(_)))})}),m.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,t,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=J();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,r))})}function Tg(e){const t=R(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Vs.getLastRemoteSnapshotVersion(n))}function Ag(e,t){const n=R(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}class ao{constructor(){this.activeTargetIds=Vm()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Sg{constructor(){this.Fr=new ao,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,n,s){this.$r[t]=n}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new ao,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{Br(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(t){this.jr=t.jr,this.Wr=t.Wr}zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.so=n+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,n,s,r,i){const o=this.oo(t,n);v("RestConnection","Sending: ",o,s);const a={};return this.uo(a,r,i),this.co(t,o,a,s).then(l=>(v("RestConnection","Received: ",l),l),l=>{throw Gi("RestConnection",`${t} failed with error: `,l,"url: ",o,"request:",s),l})}ao(t,n,s,r,i,o){return this.ro(t,n,s,r,i)}uo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+be,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>t[i]=r),s&&s.headers.forEach((r,i)=>t[i]=r)}oo(t,n){const s=Cg[t];return`${this.so}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,n,s,r){return new Promise((i,o)=>{const a=new qp;a.listenOnce(Vp.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Bs.NO_ERROR:const c=a.getResponseJson();v("Connection","XHR received:",JSON.stringify(c)),i(c);break;case Bs.TIMEOUT:v("Connection",'RPC "'+t+'" timed out'),o(new E(p.DEADLINE_EXCEEDED,"Request time out"));break;case Bs.HTTP_ERROR:const u=a.getStatus();if(v("Connection",'RPC "'+t+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const m=function(y){const _=y.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(_)>=0?_:p.UNKNOWN}(h.status);o(new E(m,h.message))}else o(new E(p.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new E(p.UNAVAILABLE,"Connection failed."));break;default:D()}}finally{v("Connection",'RPC "'+t+'" completed.')}});const l=JSON.stringify(r);a.send(n,"POST",l,s,15)})}ho(t,n,s){const r=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Bp(),o=Up(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Hp({})),this.uo(a.initMessageHeaders,n,s),yd()||wd()||Ed()||bd()||_d()||vd()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=r.join("");v("Connection","Creating WebChannel: "+l,a);const c=i.createWebChannel(l,a);let u=!1,h=!1;const m=new Dg({jr:_=>{h?v("Connection","Not sending because WebChannel is closed:",_):(u||(v("Connection","Opening WebChannel transport."),c.open(),u=!0),v("Connection","WebChannel sending:",_),c.send(_))},Wr:()=>c.close()}),y=(_,x,T)=>{_.listen(x,S=>{try{T(S)}catch(P){setTimeout(()=>{throw P},0)}})};return y(c,vn.EventType.OPEN,()=>{h||v("Connection","WebChannel transport opened.")}),y(c,vn.EventType.CLOSE,()=>{h||(h=!0,v("Connection","WebChannel transport closed"),m.eo())}),y(c,vn.EventType.ERROR,_=>{h||(h=!0,Gi("Connection","WebChannel transport errored:",_),m.eo(new E(p.UNAVAILABLE,"The operation could not be completed")))}),y(c,vn.EventType.MESSAGE,_=>{var x;if(!h){const T=_.data[0];V(!!T);const S=T,P=S.error||((x=S[0])===null||x===void 0?void 0:x.error);if(P){v("Connection","WebChannel received error:",P);const mt=P.status;let Ae=function(Ml){const ii=F[Ml];if(ii!==void 0)return Lm(ii)}(mt),Xt=P.message;Ae===void 0&&(Ae=p.INTERNAL,Xt="Unknown error status: "+mt+" with message "+P.message),h=!0,m.eo(new E(Ae,Xt)),c.close()}else v("Connection","WebChannel received:",T),m.no(T)}}),y(o,jp.STAT_EVENT,_=>{_.stat===qi.PROXY?v("Connection","Detected buffering proxy"):_.stat===qi.NOPROXY&&v("Connection","Detected no buffering proxy")}),setTimeout(()=>{m.Zr()},0),m}}function Us(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(e){return new jm(e,!0)}class pl{constructor(t,n,s=1e3,r=1.5,i=6e4){this.js=t,this.timerId=n,this.lo=s,this.fo=r,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const n=Math.floor(this.wo+this.To()),s=Math.max(0,Date.now()-this.yo),r=Math.max(0,n-s);r>0&&v("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,()=>(this.yo=Date.now(),t())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(t,n,s,r,i,o,a,l){this.js=t,this.Ao=s,this.Ro=r,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new pl(t,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(t){this.Fo(),this.stream.send(t)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,t!==4?this.So.reset():n&&n.code===p.RESOURCE_EXHAUSTED?(jt(n.toString()),jt("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Po===n&&this.Uo(s,r)},s=>{t(()=>{const r=new E(p.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(r)})})}Uo(t,n){const s=this.Lo(this.Po);this.stream=this.Ko(t,n),this.stream.zr(()=>{s(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(r=>{s(()=>this.qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(t){return v("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return n=>{this.js.enqueueAndForget(()=>this.Po===t?n():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kg extends Ng{constructor(t,n,s,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.wt=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(t,n){return this.bo.ho("Write",t,n)}onMessage(t){if(V(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const n=Qm(t.writeResults,t.commitTime),s=ne(t.commitTime);return this.listener.Jo(s,n)}return V(!t.writeResults||t.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=Gm(this.wt),this.Oo(t)}Ho(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>Xm(this.wt,s))};this.Oo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg extends class{}{constructor(t,n,s,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.bo=s,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new E(p.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.ro(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new E(p.UNKNOWN,r.toString())})}ao(t,n,s,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.bo.ao(t,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new E(p.UNKNOWN,i.toString())})}terminate(){this.Zo=!0}}class Og{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(t){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,t==="Online"&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(jt(n),this.su=!1):v("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(t,n,s,r,i){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br(o=>{s.enqueueAndForget(async()=>{fn(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=R(a);l.lu.add(4),await dn(l),l._u.set("Unknown"),l.lu.delete(4),await ws(l)}(this))})}),this._u=new Og(s,r)}}async function ws(e){if(fn(e))for(const t of e.fu)await t(!0)}async function dn(e){for(const t of e.fu)await t(!1)}function fn(e){return R(e).lu.size===0}async function ml(e,t,n){if(!ps(t))throw t;e.lu.add(1),await dn(e),e._u.set("Offline"),n||(n=()=>Tg(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await n(),e.lu.delete(1),await ws(e)})}function gl(e,t){return t().catch(n=>ml(e,n,t))}async function Es(e){const t=R(e),n=xt(t);let s=t.au.length>0?t.au[t.au.length-1].batchId:-1;for(;Mg(t);)try{const r=await Ag(t.localStore,s);if(r===null){t.au.length===0&&n.ko();break}s=r.batchId,Lg(t,r)}catch(r){await ml(t,r)}yl(t)&&vl(t)}function Mg(e){return fn(e)&&e.au.length<10}function Lg(e,t){e.au.push(t);const n=xt(e);n.Co()&&n.zo&&n.Ho(t.mutations)}function yl(e){return fn(e)&&!xt(e).Do()&&e.au.length>0}function vl(e){xt(e).start()}async function $g(e){xt(e).Xo()}async function Fg(e){const t=xt(e);for(const n of e.au)t.Ho(n.mutations)}async function Bg(e,t,n){const s=e.au.shift(),r=Qr.from(s,t,n);await gl(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await Es(e)}async function Ug(e,t){t&&xt(e).zo&&await async function(n,s){if(r=s.code,Mm(r)&&r!==p.ABORTED){const i=n.au.shift();xt(n).No(),await gl(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Es(n)}var r}(e,t),yl(e)&&vl(e)}async function uo(e,t){const n=R(e);n.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const s=fn(n);n.lu.add(3),await dn(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.lu.delete(3),await ws(n)}async function Vg(e,t){const n=R(e);t?(n.lu.delete(2),await ws(n)):t||(n.lu.add(2),await dn(n),n._u.set("Unknown"))}function xt(e){return e.gu||(e.gu=function(t,n,s){const r=R(t);return r.tu(),new kg(n,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,s)}(e.datastore,e.asyncQueue,{zr:$g.bind(null,e),Jr:Ug.bind(null,e),Yo:Fg.bind(null,e),Jo:Bg.bind(null,e)}),e.fu.push(async t=>{t?(e.gu.No(),await Es(e)):(await e.gu.stop(),e.au.length>0&&(v("RemoteStore",`Stopping write stream with ${e.au.length} pending writes`),e.au=[]))})),e.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(t,n,s,r,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Lt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,r,i){const o=Date.now()+s,a=new ti(t,n,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new E(p.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wl(e,t){if(jt("AsyncQueue",`${t}: ${e}`),ps(e))return new E(p.UNAVAILABLE,`${t}: ${e}`);throw e}class jg{constructor(){this.queries=new _e(t=>Ya(t),Qa),this.onlineState="Unknown",this.Tu=new Set}}function Hg(e){e.Tu.forEach(t=>{t.next()})}class qg{constructor(t,n,s,r,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new _e(a=>Ya(a),Qa),this.ec=new Map,this.nc=new Set,this.sc=new ut(b.comparator),this.ic=new Map,this.rc=new Yr,this.oc={},this.uc=new Map,this.cc=de.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function zg(e,t,n){const s=Xg(e);try{const r=await function(i,o){const a=R(i),l=q.now(),c=o.reduce((m,y)=>m.add(y.key),J());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",m=>{let y=zn(),_=J();return a.Ui.getEntries(m,c).next(x=>{y=x,y.forEach((T,S)=>{S.isValidDocument()||(_=_.add(T))})}).next(()=>a.localDocuments.getOverlayedDocuments(m,y)).next(x=>{u=x;const T=[];for(const S of o){const P=Om(S,u.get(S.key).overlayedDocument);P!=null&&T.push(new Wt(S.key,P,Wa(P.value.mapValue),Et.exists(!0)))}return a.mutationQueue.addMutationBatch(m,l,T,o)}).next(x=>{h=x;const T=x.applyToLocalDocumentSet(u,_);return a.documentOverlayCache.saveOverlays(m,x.batchId,T)})}).then(()=>({batchId:h.batchId,changes:ul(u)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let l=i.oc[i.currentUser.toKey()];l||(l=new ut(k)),l=l.insert(o,a),i.oc[i.currentUser.toKey()]=l}(s,r.batchId,n),await bs(s,r.changes),await Es(s.remoteStore)}catch(r){const i=wl(r,"Failed to persist write");n.reject(i)}}function co(e,t,n){const s=R(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.tc.forEach((i,o)=>{const a=o.view.Eu(t);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=R(i);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Eu(o)&&(l=!0)}),l&&Hg(a)}(s.eventManager,t),r.length&&s.Zu.Go(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Kg(e,t){const n=R(e),s=t.batch.batchId;try{const r=await _g(n.localStore,t);bl(n,s,null),El(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await bs(n,r)}catch(r){await za(r)}}async function Gg(e,t,n){const s=R(e);try{const r=await function(i,o){const a=R(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(V(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,t);bl(s,t,n),El(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await bs(s,r)}catch(r){await za(r)}}function El(e,t){(e.uc.get(t)||[]).forEach(n=>{n.resolve()}),e.uc.delete(t)}function bl(e,t,n){const s=R(e);let r=s.oc[s.currentUser.toKey()];if(r){const i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),s.oc[s.currentUser.toKey()]=r}}async function bs(e,t,n){const s=R(e),r=[],i=[],o=[];s.tc.isEmpty()||(s.tc.forEach((a,l)=>{o.push(s.hc(l,t,n).then(c=>{if(c){s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c.fromCache?"not-current":"current"),r.push(c);const u=Zr.Vi(l.targetId,c);i.push(u)}}))}),await Promise.all(o),s.Zu.Go(r),await async function(a,l){const c=R(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>f.forEach(l,h=>f.forEach(h.Pi,m=>c.persistence.referenceDelegate.addReference(u,h.targetId,m)).next(()=>f.forEach(h.vi,m=>c.persistence.referenceDelegate.removeReference(u,h.targetId,m)))))}catch(u){if(!ps(u))throw u;v("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const m=c.$i.get(h),y=m.snapshotVersion,_=m.withLastLimboFreeSnapshotVersion(y);c.$i=c.$i.insert(h,_)}}}(s.localStore,i))}async function Wg(e,t){const n=R(e);if(!n.currentUser.isEqual(t)){v("SyncEngine","User change. New user:",t.toKey());const s=await fl(n.localStore,t);n.currentUser=t,function(r,i){r.uc.forEach(o=>{o.forEach(a=>{a.reject(new E(p.CANCELLED,i))})}),r.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await bs(n,s.Ki)}}function Xg(e){const t=R(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Kg.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Gg.bind(null,t),t}class Qg{constructor(){this.synchronizeTabs=!1}async initialize(t){this.wt=vs(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,n){return null}gc(t,n){return null}wc(t){return bg(this.persistence,new wg,t.initialUser,this.wt)}_c(t){return new yg(Jr.Os,this.wt)}dc(t){return new Sg}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Yg{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>co(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Wg.bind(null,this.syncEngine),await Vg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new jg}createDatastore(t){const n=vs(t.databaseInfo.databaseId),s=(r=t.databaseInfo,new xg(r));var r;return function(i,o,a,l){return new Rg(i,o,a,l)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,r=t.asyncQueue,i=a=>co(this.syncEngine,a,0),o=lo.V()?new lo:new Ig,new Pg(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(t,n){return function(s,r,i,o,a,l,c){const u=new qg(s,r,i,o,a,l);return c&&(u.ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=R(t);v("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await dn(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(t,n,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=ot.UNAUTHENTICATED,this.clientId=qa.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{v("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(v("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Lt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=wl(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Zg(e,t){e.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async r=>{s.isEqual(r)||(await fl(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function ty(e,t){e.asyncQueue.verifyOperationInProgress();const n=await ey(e);v("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(r=>uo(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>uo(t.remoteStore,i)),e.onlineComponents=t}async function ey(e){return e.offlineComponents||(v("FirestoreClient","Using default OfflineComponentProvider"),await Zg(e,new Qg)),e.offlineComponents}async function ny(e){return e.onlineComponents||(v("FirestoreClient","Using default OnlineComponentProvider"),await ty(e,new Yg)),e.onlineComponents}function sy(e){return ny(e).then(t=>t.syncEngine)}const ho=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(e,t,n){if(!n)throw new E(p.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function ry(e,t,n,s){if(t===!0&&s===!0)throw new E(p.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function fo(e){if(!b.isDocumentKey(e))throw new E(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function po(e){if(b.isDocumentKey(e))throw new E(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ei(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":D()}function iy(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new E(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ei(e);throw new E(p.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new E(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new E(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,ry("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mo({}),this._settingsFrozen=!1,t instanceof ze?this._databaseId=t:(this._app=t,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new E(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ze(r.options.projectId)}(t))}get app(){if(!this._app)throw new E(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new E(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mo(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Kp;switch(n.type){case"gapi":const s=n.client;return V(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new Xp(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new E(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=ho.get(t);n&&(v("ComponentProvider","Removing Datastore"),ho.delete(t),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new It(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new bt(this.firestore,t,this._key)}}class si{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new si(this.firestore,t,this._query)}}class It extends si{constructor(t,n,s){super(t,n,bm(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new bt(this.firestore,null,new b(t))}withConverter(t){return new It(this.firestore,t,this._path)}}function oy(e,t,...n){if(e=Me(e),_l("collection","path",t),e instanceof ni){const s=M.fromString(t,...n);return po(s),new It(e,null,s)}{if(!(e instanceof bt||e instanceof It))throw new E(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(M.fromString(t,...n));return po(s),new It(e.firestore,null,s)}}function ay(e,t,...n){if(e=Me(e),arguments.length===1&&(t=qa.I()),_l("doc","path",t),e instanceof ni){const s=M.fromString(t,...n);return fo(s),new bt(e,null,new b(s))}{if(!(e instanceof bt||e instanceof It))throw new E(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(M.fromString(t,...n));return fo(s),new bt(e.firestore,e instanceof It?e.converter:null,new b(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new pl(this,"async_queue_retry"),this.Kc=()=>{const n=Us();n&&v("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const t=Us();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const n=Us();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new Lt;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Oc.push(t),this.jc()))}async jc(){if(this.Oc.length!==0){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(t){if(!ps(t))throw t;v("AsyncQueue","Operation failed with retryable error: "+t)}this.Oc.length>0&&this.So.Io(()=>this.jc())}}Qc(t){const n=this.Mc.then(()=>(this.Lc=!0,t().catch(s=>{this.Bc=s,this.Lc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw jt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Lc=!1,s))));return this.Mc=n,n}enqueueAfterDelay(t,n,s){this.Gc(),this.qc.indexOf(t)>-1&&(n=0);const r=ti.createAndSchedule(this,t,n,s,i=>this.Wc(i));return this.$c.push(r),r}Gc(){this.Bc&&D()}verifyOperationInProgress(){}async zc(){let t;do t=this.Mc,await t;while(t!==this.Mc)}Hc(t){for(const n of this.$c)if(n.timerId===t)return!0;return!1}Jc(t){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.zc()})}Yc(t){this.qc.push(t)}Wc(t){const n=this.$c.indexOf(t);this.$c.splice(n,1)}}class Tl extends ni{constructor(t,n,s){super(t,n,s),this.type="firestore",this._queue=new ly,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Al(this),this._firestoreClient.terminate()}}function uy(e=Df()){return Tf(e,"firestore").getImmediate()}function cy(e){return e._firestoreClient||Al(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Al(e){var t;const n=e._freezeSettings(),s=function(r,i,o,a){return new am(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Jg(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new E(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Z(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Qe(Tt.fromBase64String(t))}catch(n){throw new E(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Qe(Tt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new E(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new E(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return k(this._lat,t._lat)||k(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy=/^__.*__$/;class dy{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Wt(t,this.data,this.fieldMask,n,this.fieldTransforms):new hn(t,this.data,n,this.fieldTransforms)}}function Dl(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw D()}}class ri{constructor(t,n,s,r,i,o){this.settings=t,this.databaseId=n,this.wt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(t){return new ri(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.ta({path:s,na:!1});return r.sa(t),r}ia(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.ta({path:s,na:!1});return r.Xc(),r}ra(t){return this.ta({path:void 0,na:!0})}oa(t){return Kn(t,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.sa(this.path.get(t))}sa(t){if(t.length===0)throw this.oa("Document fields must not be empty");if(Dl(this.Zc)&&hy.test(t))throw this.oa('Document fields cannot begin and end with "__"')}}class fy{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.wt=s||vs(t)}aa(t,n,s,r=!1){return new ri({Zc:t,methodName:n,ca:s,path:Z.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function py(e){const t=e._freezeSettings(),n=vs(e._databaseId);return new fy(e._databaseId,!!t.ignoreUndefinedProperties,n)}function my(e,t,n,s,r,i={}){const o=e.aa(i.merge||i.mergeFields?2:0,t,n,r);Rl("Data must be an object, but it was:",o,s);const a=Nl(s,o);let l,c;if(i.merge)l=new gt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const m=gy(t,h,n);if(!o.contains(m))throw new E(p.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);wy(u,m)||u.push(m)}l=new gt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new dy(new pt(a),l,c)}function xl(e,t){if(kl(e=Me(e)))return Rl("Unsupported field value:",t,e),Nl(e,t);if(e instanceof Il)return function(n,s){if(!Dl(s.Zc))throw s.oa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.oa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.na&&t.Zc!==4)throw t.oa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=xl(o,s.ra(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(e,t)}return function(n,s){if((n=Me(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Cm(s.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=q.fromDate(n);return{timestampValue:ur(s.wt,r)}}if(n instanceof q){const r=new q(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ur(s.wt,r)}}if(n instanceof Cl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Qe)return{bytesValue:Hm(s.wt,n._byteString)};if(n instanceof bt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.oa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:hl(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.oa(`Unsupported field value: ${ei(n)}`)}(e,t)}function Nl(e,t){const n={};return Ga(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):cn(e,(s,r)=>{const i=xl(r,t.ea(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function kl(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof q||e instanceof Cl||e instanceof Qe||e instanceof bt||e instanceof Il)}function Rl(e,t,n){if(!kl(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ei(n);throw s==="an object"?t.oa(e+" a custom object"):t.oa(e+" "+s)}}function gy(e,t,n){if((t=Me(t))instanceof Sl)return t._internalPath;if(typeof t=="string")return vy(e,t);throw Kn("Field path arguments must be of type string or ",e,!1,void 0,n)}const yy=new RegExp("[~\\*/\\[\\]]");function vy(e,t,n){if(t.search(yy)>=0)throw Kn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Sl(...t.split("."))._internalPath}catch{throw Kn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Kn(e,t,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${s}`),o&&(l+=` in document ${r}`),l+=")"),new E(p.INVALID_ARGUMENT,a+e+l)}function wy(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}function by(e,t){const n=iy(e.firestore,Tl),s=ay(e),r=Ey(e.converter,t);return _y(n,[my(py(e.firestore),"addDoc",s._key,r,e.converter!==null,{}).toMutation(s._key,Et.exists(!1))]).then(()=>s)}function _y(e,t){return function(n,s){const r=new Lt;return n.asyncQueue.enqueueAndForget(async()=>zg(await sy(n),s,r)),r.promise}(cy(e),t)}(function(e,t=!0){(function(n){be=n})(If),Nn(new Le("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new Tl(r,new Gp(n.getProvider("auth-internal")),new Yp(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:t},s),i._setSettings(s),i},"PUBLIC")),te(zi,"3.4.14",e),te(zi,"3.4.14","esm2017")})();var Ty="firebase",Ay="9.9.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */te(Ty,Ay,"app");const Sy={apiKey:"AIzaSyA4z7iojD9k9VOG81xJrGdgzHr4-wyGAko",authDomain:"asistencia-casamiento.firebaseapp.com",projectId:"asistencia-casamiento",storageBucket:"asistencia-casamiento.appspot.com",messagingSenderId:"13406005698",appId:"1:13406005698:web:6942fcb12fdbec2ff90e5b"},Ol=Cf(Sy),Pl=uy(Ol);window.app=Ol;window.firestore=Pl;const Te=e=>(Wn("data-v-3bd25f46"),e=e(),Xn(),e),Iy={class:"w-full xl:bg-slate-100 pt-5"},Cy={class:"container-section xl:bg-slate-100"},Dy={class:"text-center"},xy={class:"input-wrapper","data-aos":"zoom-in"},Ny=Te(()=>d("label",{class:"w-full",for:"Nama"},"Nama",-1)),ky={class:"input-wrapper","data-aos":"zoom-in"},Ry=Te(()=>d("label",{class:"w-full",for:"Kehadiran"},"Kehadiran",-1)),Oy=Te(()=>d("option",{value:"Hadir"},"Hadir",-1)),Py=Te(()=>d("option",{value:"Tidak Hadir"},"Tidak Hadir",-1)),My=[Oy,Py],Ly={class:"input-wrapper","data-aos":"zoom-in"},$y=Te(()=>d("label",{class:"w-full",for:"Pesan"},"Pesan",-1)),Fy=["disabled"],By={key:0,class:"fa fa-paper-plane mr-1"},Uy={key:1,class:"fa fa-spinner fa-spin mr-1"},Vy=Ct(" Kirim Pesan "),jy=Te(()=>d("div",{class:"w-full text-center pb-12 mt-12"},[d("p",{class:"text-sm text-amber-600 font-medium"},"Harjonan \xA9 2024")],-1)),Hy={setup(e){const t=L(null),n=L(null),s=L(null);var r=L("Hadir");const i=L(new Date);var o=L([]);L(["Vegetariano","Kosher","Celiaco","Sin Sal","Menu Infantil (Menor a 5 a\xF1os)","Otro (Agregar en comentarios)"]);const a=L(!1),l=L(!1),c=L(!1),u=L(!1),h=()=>new Promise((x,T)=>{console.log("Sending 1");const S={Nama:n.value,Fecha:new Date,Kehadiran:r.value,Pesan:s.value,Dieta:o.value};by(oy(Pl,"asistencia-casamiento"),S).then(P=>x(P)).catch(P=>T(P))}),m=()=>{n.value=null,s.value=null,o=[],r="Hadir"},y=x=>{c.value||(x.preventDefault(),c.value=!0,Promise.allSettled([h(),_()]).then(T=>{T[1].status=="fulfilled"?(c.value=!1,a.value=!0,l.value=!0,u.value=!0,m()):(c.value=!0,a.value=!1,l.value=!0)}))},_=async()=>{const x="https://script.google.com/macros/s/AKfycby1ovbqWQ5T5wkb8zGGA7oK8Qv3nMUtLz1us1SwIAF7H0H0NwQtaoB7N3RptNZElaqP/exec",T=new FormData(t.value);T.append("Dieta",o.value.join(", ")),await fetch(x,{method:"POST",body:T})};return(x,T)=>(A(),C("section",Iy,[d("section",Cy,[$(Ze,{title:"Buku Tamu",subtitle:"Demi kelancaran acara dimohon untuk para tamu undangan untuk memastikan kehadirannya pada acara kami"}),$(dd,{statusResponse:a.value,showAlert:l.value,onClose:T[0]||(T[0]=S=>l.value=!1)},null,8,["statusResponse","showAlert"]),d("div",Dy,[u.value?(A(),C("button",{key:0,class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",onClick:T[1]||(T[1]=S=>u.value=!1)},"Enviar otro")):Cn("",!0)]),u.value?Cn("",!0):(A(),C("form",{key:0,ref_key:"form",ref:t,onSubmit:y,class:"w-10/12 mx-auto mt-6"},[d("div",xy,[Ny,Ce(d("input",{class:"w-full","onUpdate:modelValue":T[2]||(T[2]=S=>n.value=S),placeholder:"Nama Lengkap Anda",name:"Nama",id:"Nama",type:"text",required:""},null,512),[[_s,n.value]])]),Ce(d("input",{type:"hidden",id:"Fecha",name:"Fecha","onUpdate:modelValue":T[3]||(T[3]=S=>i.value=S)},null,512),[[_s,i.value]]),d("div",ky,[Ry,Ce(d("select",{class:"w-full","onUpdate:modelValue":T[4]||(T[4]=S=>Xl(r)?r.value=S:r=S),name:"Kehadiran",id:"Kehadiran",required:""},My,512),[[Wl,In(r)]])]),d("div",Ly,[$y,Ce(d("textarea",{class:"w-full",placeholder:"Tuliskan pesan anda disini","onUpdate:modelValue":T[5]||(T[5]=S=>s.value=S),name:"Pesan",id:"Pesan",cols:"30",rows:"5"},null,512),[[_s,s.value]])]),d("button",{disabled:c.value,"data-aos":"zoom-in",class:"w-full bg-gray-800 text-gray-100 mt-6 rounded-lg py-2 font-medium pointer active:scale-90 border-gray-500 duration-300",type:"submit"},[c.value?(A(),C("i",Uy)):(A(),C("i",By)),Vy],8,Fy)],544)),jy])]))}};var qy=Ye(Hy,[["__scopeId","data-v-3bd25f46"]]);const zy=Ct(" Scroll to the top "),Wy={setup(e){const t=L(!1),n=()=>{t.value=!0},s=r=>{document.querySelector(r).scrollIntoView({behavior:"smooth"})};return(r,i)=>(A(),C("section",{class:qt({"no-scroll":!t.value})},[$(wu,{id:"mainCover",onOpen:n}),$(nu,{onClick:i[0]||(i[0]=()=>s("#main-cover"))},{default:se(()=>[zy]),_:1}),$(Lu,{id:"firstSight"}),$(Hh),$(Uh,{onGoToGuestBook:i[1]||(i[1]=o=>s("#guest-book"))}),$(Jh),$(ed),$(ld,{id:"envelope"}),$(qy,{id:"guest-book"})],2))}};export{Wy as default};
