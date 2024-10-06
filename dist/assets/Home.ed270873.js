var $l=Object.defineProperty,Fl=Object.defineProperties;var Bl=Object.getOwnPropertyDescriptors;var oi=Object.getOwnPropertySymbols;var Ul=Object.prototype.hasOwnProperty,Vl=Object.prototype.propertyIsEnumerable;var ai=(e,t,n)=>t in e?$l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,li=(e,t)=>{for(var n in t||(t={}))Ul.call(t,n)&&ai(e,n,t[n]);if(oi)for(var n of oi(t))Vl.call(t,n)&&ai(e,n,t[n]);return e},ui=(e,t)=>Fl(e,Bl(t));import{_ as Qe,r as B,u as jl,o as Kn,a as Hl,b as A,c as C,d as f,n as he,p as Gn,e as Wn,f as ql,g as zl,t as st,h as Sn,i as Kl,j as ci,k as L,w as ee,l as de,F as Ht,m as fe,q as go,s as Gl,v as In,x as dn,y as _s,z as Wl,A as Xl}from"./index.b4f61ec3.js";var Ql="/assets/Vancouver Sleep Clinic - Someone to Stay (Audio).a42551ce.mp3";const Yl=e=>(Gn("data-v-7eba3d5c"),e=e(),Wn(),e),Jl={class:"fixed bottom-24 pl-2"},Zl=Yl(()=>f("i",{class:"fa-solid fa-gift"},null,-1)),tu=[Zl],eu={setup(e){const t=B(!1);jl();const n=B("fa-solid fa-volume-high"),s=B(!0),r=new Audio(Ql),i=0,o=255,a=()=>setTimeout(()=>{document.querySelector("#envelope").scrollIntoView({behavior:"smooth"})},300),l=()=>{s.value?(r.pause(),n.value="fa-solid fa-volume-off"):(r.currentTime=i,r.play(),n.value="fa-solid fa-volume-high"),s.value=!s.value};r.addEventListener("timeupdate",()=>{r.currentTime>=o&&(r.currentTime=i,r.play())});const c=async()=>{if(!t.value)try{r.currentTime=i,await r.play(),n.value="fa-solid fa-volume-high",s.value=!0,t.value=!0,h()}catch(m){console.error("Playback failed after interaction:",m)}},u=()=>{window.addEventListener("click",c),window.addEventListener("scroll",c),window.addEventListener("keydown",c)},h=()=>{window.removeEventListener("click",c),window.removeEventListener("scroll",c),window.removeEventListener("keydown",c)};return Kn(()=>{r.currentTime=i,u()}),Hl(()=>{h()}),(m,y)=>(A(),C("section",Jl,[f("button",{onClick:l,class:"button"},[f("i",{class:he(n.value)},null,2)]),f("button",{onClick:a,class:"button"},tu)]))}};var nu=Qe(eu,[["__scopeId","data-v-7eba3d5c"]]),Xn="/assets/flores.02d10ca5.png",su="/assets/prewedding-couple.004ef60e.jpg";const Ye=e=>(Gn("data-v-280a3b02"),e=e(),Wn(),e),ru={class:"absolute inset-0 flex items-center justify-center"},iu={class:"overlay-box p-8 text-center rounded-lg"},ou=Ye(()=>f("h2",{class:"text-lg font-bold"},"Pernikahan",-1)),au={class:"tangerine-font text-title font-bold"},lu=Ye(()=>f("p",{class:"font-medium text-lg my-2",style:{color:"gray"}},"#aYOGAsforeverwithNANDA",-1)),uu=Ye(()=>f("div",{class:"my-4"},[f("img",{src:Xn,class:"w-12 sm:w-16 mx-auto"})],-1)),cu={class:"text-sm"},hu=Ye(()=>f("p",{class:"font-medium"},"Kepada Bapak/Ibu Yang Terhormat",-1)),du={class:"font-medium text-lg my-2"},fu=Ye(()=>f("p",{class:"font-medium my-2"},"Izinkan kami turut mengundang anda dalam acara kami",-1)),pu={setup(e){const t=["Youga","Nanda"],n=ql();let s=zl(()=>n.query);return n.query.first===void 0&&(s={first:""}),(r,i)=>(A(),C("section",{class:"w-full h-screen relative bg-cover bg-center",style:Kl({backgroundImage:`url(${Sn(su)})`})},[f("section",ru,[f("div",iu,[ou,f("h1",au,st(t.join(" & ")),1),lu,uu,f("div",cu,[hu,f("p",du,"Saudara/i "+st(Sn(s).first),1),fu])])])],4))}};var mu=Qe(pu,[["__scopeId","data-v-280a3b02"]]),yo="/assets/couples.0af6e0f8.jpg";const gu=f("img",{src:Xn,class:"w-6/12 md:w-6/12 mx-auto"},null,-1),yu={class:"satisfy-font text-4xl font-medium mb-5"},vu=["innerHTML"],pe={props:{title:{type:String,default:"The Section"},subtitle:{type:String,default:"Duis splople autem vel eum iriure Dapibus sit amet, tincidunt eu, nibh."},textColor:{type:String,default:"text-slate-800"}},setup(e){const t=e;return(n,s)=>(A(),C("section",{"data-aos":"fade-up",class:he([t.textColor,"sm:w-full w-9/12 px-4 mb-6 text-center flex justify-center flex-col items-center ml-auto mr-auto"])},[gu,f("h1",yu,st(t.title),1),f("p",{class:"text-sm",innerHTML:e.subtitle},null,8,vu)],2))}},wu={"data-aos":"fade-up"},Eu={"data-aos":"fade-up"},vo={props:{bgColor:{type:String,default:"bg-gray-50"}},setup(e){const t=e;return(n,s)=>(A(),C("section",{"data-aos":"zoom-in",class:he([t.bgColor,"w-9/12 mx-auto rounded-tl-[2rem] rounded-br-[2rem] shadow-xl overflow-hidden border border-gray-200"])},[f("div",wu,[ci(n.$slots,"body")]),f("div",Eu,[ci(n.$slots,"footer")])],2))}},bu={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"},_u=f("path",{d:"m0 224 80-10.7c80-10.3 240-32.3 400-42.6C640 160 800 160 960 181.3c160 21.7 320 63.7 400 85.4l80 21.3V0H0Z"},null,-1),Tu=[_u];function Au(e,t){return A(),C("svg",bu,Tu)}var Su={render:Au};const Iu={class:"w-full mb-12"},Cu={class:"container-section"},Du=f("p",{class:"text-sm p-6 text-justify",style:{color:"black"}},[de(" In faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum hendrerit malesuada odio. Fusce ut elit ut augue sollicitudin blandit. Phasellus volutpat lorem. Duis non pede et neque luctus tincidunt. Duis interdum tempus elit. Aenean metus. Vestibulum ac lacus. Vivamus porttitor, massa ut hendrerit bibendum, metus. "),f("br"),f("br")],-1),xu=f("img",{src:yo,class:"w-full",alt:""},null,-1),Nu={setup(e){return(t,n)=>(A(),C("section",Iu,[L(Sn(Su),{class:"fill-gray-800"}),f("section",Cu,[L(pe,{title:"Pandangan Pertama"}),L(vo,{title:"Kisah kami berawal dari"},{body:ee(()=>[Du]),footer:ee(()=>[xu]),_:1})])]))}};var hr={exports:{}},wo=function(t,n){return function(){for(var r=new Array(arguments.length),i=0;i<r.length;i++)r[i]=arguments[i];return t.apply(n,r)}},ku=wo,dr=Object.prototype.toString,fr=function(e){return function(t){var n=dr.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())}}(Object.create(null));function qt(e){return e=e.toLowerCase(),function(n){return fr(n)===e}}function pr(e){return Array.isArray(e)}function Cn(e){return typeof e=="undefined"}function Ru(e){return e!==null&&!Cn(e)&&e.constructor!==null&&!Cn(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}var Eo=qt("ArrayBuffer");function Ou(e){var t;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Eo(e.buffer),t}function Pu(e){return typeof e=="string"}function Lu(e){return typeof e=="number"}function bo(e){return e!==null&&typeof e=="object"}function bn(e){if(fr(e)!=="object")return!1;var t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}var Mu=qt("Date"),$u=qt("File"),Fu=qt("Blob"),Bu=qt("FileList");function mr(e){return dr.call(e)==="[object Function]"}function Uu(e){return bo(e)&&mr(e.pipe)}function Vu(e){var t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||dr.call(e)===t||mr(e.toString)&&e.toString()===t)}var ju=qt("URLSearchParams");function Hu(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function qu(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function gr(e,t){if(!(e===null||typeof e=="undefined"))if(typeof e!="object"&&(e=[e]),pr(e))for(var n=0,s=e.length;n<s;n++)t.call(null,e[n],n,e);else for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.call(null,e[r],r,e)}function Vs(){var e={};function t(r,i){bn(e[i])&&bn(r)?e[i]=Vs(e[i],r):bn(r)?e[i]=Vs({},r):pr(r)?e[i]=r.slice():e[i]=r}for(var n=0,s=arguments.length;n<s;n++)gr(arguments[n],t);return e}function zu(e,t,n){return gr(t,function(r,i){n&&typeof r=="function"?e[i]=ku(r,n):e[i]=r}),e}function Ku(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function Gu(e,t,n,s){e.prototype=Object.create(t.prototype,s),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)}function Wu(e,t,n){var s,r,i,o={};t=t||{};do{for(s=Object.getOwnPropertyNames(e),r=s.length;r-- >0;)i=s[r],o[i]||(t[i]=e[i],o[i]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t}function Xu(e,t,n){e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;var s=e.indexOf(t,n);return s!==-1&&s===n}function Qu(e){if(!e)return null;var t=e.length;if(Cn(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n}var Yu=function(e){return function(t){return e&&t instanceof e}}(typeof Uint8Array!="undefined"&&Object.getPrototypeOf(Uint8Array)),Q={isArray:pr,isArrayBuffer:Eo,isBuffer:Ru,isFormData:Vu,isArrayBufferView:Ou,isString:Pu,isNumber:Lu,isObject:bo,isPlainObject:bn,isUndefined:Cn,isDate:Mu,isFile:$u,isBlob:Fu,isFunction:mr,isStream:Uu,isURLSearchParams:ju,isStandardBrowserEnv:qu,forEach:gr,merge:Vs,extend:zu,trim:Hu,stripBOM:Ku,inherits:Gu,toFlatObject:Wu,kindOf:fr,kindOfTest:qt,endsWith:Xu,toArray:Qu,isTypedArray:Yu,isFileList:Bu},Wt=Q;function hi(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var _o=function(t,n,s){if(!n)return t;var r;if(s)r=s(n);else if(Wt.isURLSearchParams(n))r=n.toString();else{var i=[];Wt.forEach(n,function(l,c){l===null||typeof l=="undefined"||(Wt.isArray(l)?c=c+"[]":l=[l],Wt.forEach(l,function(h){Wt.isDate(h)?h=h.toISOString():Wt.isObject(h)&&(h=JSON.stringify(h)),i.push(hi(c)+"="+hi(h))}))}),r=i.join("&")}if(r){var o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+r}return t},Ju=Q;function Qn(){this.handlers=[]}Qn.prototype.use=function(t,n,s){return this.handlers.push({fulfilled:t,rejected:n,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1};Qn.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)};Qn.prototype.forEach=function(t){Ju.forEach(this.handlers,function(s){s!==null&&t(s)})};var Zu=Qn,tc=Q,ec=function(t,n){tc.forEach(t,function(r,i){i!==n&&i.toUpperCase()===n.toUpperCase()&&(t[n]=r,delete t[i])})},To=Q;function ne(e,t,n,s,r){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),s&&(this.request=s),r&&(this.response=r)}To.inherits(ne,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Ao=ne.prototype,So={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(e){So[e]={value:e}});Object.defineProperties(ne,So);Object.defineProperty(Ao,"isAxiosError",{value:!0});ne.from=function(e,t,n,s,r,i){var o=Object.create(Ao);return To.toFlatObject(e,o,function(l){return l!==Error.prototype}),ne.call(o,e.message,t,n,s,r),o.name=e.name,i&&Object.assign(o,i),o};var me=ne,Io={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ft=Q;function nc(e,t){t=t||new FormData;var n=[];function s(i){return i===null?"":ft.isDate(i)?i.toISOString():ft.isArrayBuffer(i)||ft.isTypedArray(i)?typeof Blob=="function"?new Blob([i]):Buffer.from(i):i}function r(i,o){if(ft.isPlainObject(i)||ft.isArray(i)){if(n.indexOf(i)!==-1)throw Error("Circular reference detected in "+o);n.push(i),ft.forEach(i,function(l,c){if(!ft.isUndefined(l)){var u=o?o+"."+c:c,h;if(l&&!o&&typeof l=="object"){if(ft.endsWith(c,"{}"))l=JSON.stringify(l);else if(ft.endsWith(c,"[]")&&(h=ft.toArray(l))){h.forEach(function(m){!ft.isUndefined(m)&&t.append(u,s(m))});return}}r(l,u)}}),n.pop()}else t.append(o,s(i))}return r(e),t}var Co=nc,Ts=me,sc=function(t,n,s){var r=s.config.validateStatus;!s.status||!r||r(s.status)?t(s):n(new Ts("Request failed with status code "+s.status,[Ts.ERR_BAD_REQUEST,Ts.ERR_BAD_RESPONSE][Math.floor(s.status/100)-4],s.config,s.request,s))},fn=Q,rc=fn.isStandardBrowserEnv()?function(){return{write:function(n,s,r,i,o,a){var l=[];l.push(n+"="+encodeURIComponent(s)),fn.isNumber(r)&&l.push("expires="+new Date(r).toGMTString()),fn.isString(i)&&l.push("path="+i),fn.isString(o)&&l.push("domain="+o),a===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){var s=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return s?decodeURIComponent(s[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),ic=function(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)},oc=function(t,n){return n?t.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):t},ac=ic,lc=oc,Do=function(t,n){return t&&!ac(n)?lc(t,n):n},As=Q,uc=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],cc=function(t){var n={},s,r,i;return t&&As.forEach(t.split(`
`),function(a){if(i=a.indexOf(":"),s=As.trim(a.substr(0,i)).toLowerCase(),r=As.trim(a.substr(i+1)),s){if(n[s]&&uc.indexOf(s)>=0)return;s==="set-cookie"?n[s]=(n[s]?n[s]:[]).concat([r]):n[s]=n[s]?n[s]+", "+r:r}}),n},di=Q,hc=di.isStandardBrowserEnv()?function(){var t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a"),s;function r(i){var o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return s=r(window.location.href),function(o){var a=di.isString(o)?r(o):o;return a.protocol===s.protocol&&a.host===s.host}}():function(){return function(){return!0}}(),js=me,dc=Q;function xo(e){js.call(this,e==null?"canceled":e,js.ERR_CANCELED),this.name="CanceledError"}dc.inherits(xo,js,{__CANCEL__:!0});var Yn=xo,fc=function(t){var n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return n&&n[1]||""},Se=Q,pc=sc,mc=rc,gc=_o,yc=Do,vc=cc,wc=hc,Ec=Io,vt=me,bc=Yn,_c=fc,fi=function(t){return new Promise(function(s,r){var i=t.data,o=t.headers,a=t.responseType,l;function c(){t.cancelToken&&t.cancelToken.unsubscribe(l),t.signal&&t.signal.removeEventListener("abort",l)}Se.isFormData(i)&&Se.isStandardBrowserEnv()&&delete o["Content-Type"];var u=new XMLHttpRequest;if(t.auth){var h=t.auth.username||"",m=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";o.Authorization="Basic "+btoa(h+":"+m)}var y=yc(t.baseURL,t.url);u.open(t.method.toUpperCase(),gc(y,t.params,t.paramsSerializer),!0),u.timeout=t.timeout;function _(){if(!!u){var S="getAllResponseHeaders"in u?vc(u.getAllResponseHeaders()):null,P=!a||a==="text"||a==="json"?u.responseText:u.response,mt={data:P,status:u.status,statusText:u.statusText,headers:S,config:t,request:u};pc(function(Gt){s(Gt),c()},function(Gt){r(Gt),c()},mt),u=null}}if("onloadend"in u?u.onloadend=_:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(_)},u.onabort=function(){!u||(r(new vt("Request aborted",vt.ECONNABORTED,t,u)),u=null)},u.onerror=function(){r(new vt("Network Error",vt.ERR_NETWORK,t,u,u)),u=null},u.ontimeout=function(){var P=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",mt=t.transitional||Ec;t.timeoutErrorMessage&&(P=t.timeoutErrorMessage),r(new vt(P,mt.clarifyTimeoutError?vt.ETIMEDOUT:vt.ECONNABORTED,t,u)),u=null},Se.isStandardBrowserEnv()){var x=(t.withCredentials||wc(y))&&t.xsrfCookieName?mc.read(t.xsrfCookieName):void 0;x&&(o[t.xsrfHeaderName]=x)}"setRequestHeader"in u&&Se.forEach(o,function(P,mt){typeof i=="undefined"&&mt.toLowerCase()==="content-type"?delete o[mt]:u.setRequestHeader(mt,P)}),Se.isUndefined(t.withCredentials)||(u.withCredentials=!!t.withCredentials),a&&a!=="json"&&(u.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&u.addEventListener("progress",t.onDownloadProgress),typeof t.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",t.onUploadProgress),(t.cancelToken||t.signal)&&(l=function(S){!u||(r(!S||S&&S.type?new bc:S),u.abort(),u=null)},t.cancelToken&&t.cancelToken.subscribe(l),t.signal&&(t.signal.aborted?l():t.signal.addEventListener("abort",l))),i||(i=null);var T=_c(y);if(T&&["http","https","file"].indexOf(T)===-1){r(new vt("Unsupported protocol "+T+":",vt.ERR_BAD_REQUEST,t));return}u.send(i)})},Tc=null,j=Q,pi=ec,mi=me,Ac=Io,Sc=Co,Ic={"Content-Type":"application/x-www-form-urlencoded"};function gi(e,t){!j.isUndefined(e)&&j.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function Cc(){var e;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(e=fi),e}function Dc(e,t,n){if(j.isString(e))try{return(t||JSON.parse)(e),j.trim(e)}catch(s){if(s.name!=="SyntaxError")throw s}return(n||JSON.stringify)(e)}var Jn={transitional:Ac,adapter:Cc(),transformRequest:[function(t,n){if(pi(n,"Accept"),pi(n,"Content-Type"),j.isFormData(t)||j.isArrayBuffer(t)||j.isBuffer(t)||j.isStream(t)||j.isFile(t)||j.isBlob(t))return t;if(j.isArrayBufferView(t))return t.buffer;if(j.isURLSearchParams(t))return gi(n,"application/x-www-form-urlencoded;charset=utf-8"),t.toString();var s=j.isObject(t),r=n&&n["Content-Type"],i;if((i=j.isFileList(t))||s&&r==="multipart/form-data"){var o=this.env&&this.env.FormData;return Sc(i?{"files[]":t}:t,o&&new o)}else if(s||r==="application/json")return gi(n,"application/json"),Dc(t);return t}],transformResponse:[function(t){var n=this.transitional||Jn.transitional,s=n&&n.silentJSONParsing,r=n&&n.forcedJSONParsing,i=!s&&this.responseType==="json";if(i||r&&j.isString(t)&&t.length)try{return JSON.parse(t)}catch(o){if(i)throw o.name==="SyntaxError"?mi.from(o,mi.ERR_BAD_RESPONSE,this,null,this.response):o}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Tc},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};j.forEach(["delete","get","head"],function(t){Jn.headers[t]={}});j.forEach(["post","put","patch"],function(t){Jn.headers[t]=j.merge(Ic)});var yr=Jn,xc=Q,Nc=yr,kc=function(t,n,s){var r=this||Nc;return xc.forEach(s,function(o){t=o.call(r,t,n)}),t},No=function(t){return!!(t&&t.__CANCEL__)},yi=Q,Ss=kc,Rc=No,Oc=yr,Pc=Yn;function Is(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Pc}var Lc=function(t){Is(t),t.headers=t.headers||{},t.data=Ss.call(t,t.data,t.headers,t.transformRequest),t.headers=yi.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),yi.forEach(["delete","get","head","post","put","patch","common"],function(r){delete t.headers[r]});var n=t.adapter||Oc.adapter;return n(t).then(function(r){return Is(t),r.data=Ss.call(t,r.data,r.headers,t.transformResponse),r},function(r){return Rc(r)||(Is(t),r&&r.response&&(r.response.data=Ss.call(t,r.response.data,r.response.headers,t.transformResponse))),Promise.reject(r)})},ct=Q,ko=function(t,n){n=n||{};var s={};function r(u,h){return ct.isPlainObject(u)&&ct.isPlainObject(h)?ct.merge(u,h):ct.isPlainObject(h)?ct.merge({},h):ct.isArray(h)?h.slice():h}function i(u){if(ct.isUndefined(n[u])){if(!ct.isUndefined(t[u]))return r(void 0,t[u])}else return r(t[u],n[u])}function o(u){if(!ct.isUndefined(n[u]))return r(void 0,n[u])}function a(u){if(ct.isUndefined(n[u])){if(!ct.isUndefined(t[u]))return r(void 0,t[u])}else return r(void 0,n[u])}function l(u){if(u in n)return r(t[u],n[u]);if(u in t)return r(void 0,t[u])}var c={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l};return ct.forEach(Object.keys(t).concat(Object.keys(n)),function(h){var m=c[h]||i,y=m(h);ct.isUndefined(y)&&m!==l||(s[h]=y)}),s},Ro={version:"0.27.2"},Mc=Ro.version,At=me,vr={};["object","boolean","number","function","string","symbol"].forEach(function(e,t){vr[e]=function(s){return typeof s===e||"a"+(t<1?"n ":" ")+e}});var vi={};vr.transitional=function(t,n,s){function r(i,o){return"[Axios v"+Mc+"] Transitional option '"+i+"'"+o+(s?". "+s:"")}return function(i,o,a){if(t===!1)throw new At(r(o," has been removed"+(n?" in "+n:"")),At.ERR_DEPRECATED);return n&&!vi[o]&&(vi[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,a):!0}};function $c(e,t,n){if(typeof e!="object")throw new At("options must be an object",At.ERR_BAD_OPTION_VALUE);for(var s=Object.keys(e),r=s.length;r-- >0;){var i=s[r],o=t[i];if(o){var a=e[i],l=a===void 0||o(a,i,e);if(l!==!0)throw new At("option "+i+" must be "+l,At.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new At("Unknown option "+i,At.ERR_BAD_OPTION)}}var Fc={assertOptions:$c,validators:vr},Oo=Q,Bc=_o,wi=Zu,Ei=Lc,Zn=ko,Uc=Do,Po=Fc,Xt=Po.validators;function se(e){this.defaults=e,this.interceptors={request:new wi,response:new wi}}se.prototype.request=function(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Zn(this.defaults,n),n.method?n.method=n.method.toLowerCase():this.defaults.method?n.method=this.defaults.method.toLowerCase():n.method="get";var s=n.transitional;s!==void 0&&Po.assertOptions(s,{silentJSONParsing:Xt.transitional(Xt.boolean),forcedJSONParsing:Xt.transitional(Xt.boolean),clarifyTimeoutError:Xt.transitional(Xt.boolean)},!1);var r=[],i=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(i=i&&y.synchronous,r.unshift(y.fulfilled,y.rejected))});var o=[];this.interceptors.response.forEach(function(y){o.push(y.fulfilled,y.rejected)});var a;if(!i){var l=[Ei,void 0];for(Array.prototype.unshift.apply(l,r),l=l.concat(o),a=Promise.resolve(n);l.length;)a=a.then(l.shift(),l.shift());return a}for(var c=n;r.length;){var u=r.shift(),h=r.shift();try{c=u(c)}catch(m){h(m);break}}try{a=Ei(c)}catch(m){return Promise.reject(m)}for(;o.length;)a=a.then(o.shift(),o.shift());return a};se.prototype.getUri=function(t){t=Zn(this.defaults,t);var n=Uc(t.baseURL,t.url);return Bc(n,t.params,t.paramsSerializer)};Oo.forEach(["delete","get","head","options"],function(t){se.prototype[t]=function(n,s){return this.request(Zn(s||{},{method:t,url:n,data:(s||{}).data}))}});Oo.forEach(["post","put","patch"],function(t){function n(s){return function(i,o,a){return this.request(Zn(a||{},{method:t,headers:s?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}se.prototype[t]=n(),se.prototype[t+"Form"]=n(!0)});var Vc=se,jc=Yn;function re(e){if(typeof e!="function")throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(r){t=r});var n=this;this.promise.then(function(s){if(!!n._listeners){var r,i=n._listeners.length;for(r=0;r<i;r++)n._listeners[r](s);n._listeners=null}}),this.promise.then=function(s){var r,i=new Promise(function(o){n.subscribe(o),r=o}).then(s);return i.cancel=function(){n.unsubscribe(r)},i},e(function(r){n.reason||(n.reason=new jc(r),t(n.reason))})}re.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};re.prototype.subscribe=function(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]};re.prototype.unsubscribe=function(t){if(!!this._listeners){var n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}};re.source=function(){var t,n=new re(function(r){t=r});return{token:n,cancel:t}};var Hc=re,qc=function(t){return function(s){return t.apply(null,s)}},zc=Q,Kc=function(t){return zc.isObject(t)&&t.isAxiosError===!0},bi=Q,Gc=wo,_n=Vc,Wc=ko,Xc=yr;function Lo(e){var t=new _n(e),n=Gc(_n.prototype.request,t);return bi.extend(n,_n.prototype,t),bi.extend(n,t),n.create=function(r){return Lo(Wc(e,r))},n}var lt=Lo(Xc);lt.Axios=_n;lt.CanceledError=Yn;lt.CancelToken=Hc;lt.isCancel=No;lt.VERSION=Ro.version;lt.toFormData=Co;lt.AxiosError=me;lt.Cancel=lt.CanceledError;lt.all=function(t){return Promise.all(t)};lt.spread=qc;lt.isAxiosError=Kc;hr.exports=lt;hr.exports.default=lt;var wr=hr.exports;const Qc={class:"w-full mb-6","data-aos":"slide-up"},Yc=["src","alt"],Jc={class:"mt-10 w-full text-center text-slate-800 text-sm"},Zc={class:"text-black text-[2rem] font-semibold tangerine-font"},th={class:"text-black mb-3 mt-1 font-semibold"},eh={class:"flex gap-3 justify-center mt-3"},nh=["href"],sh={props:{source:{type:Object,default:{name:"fulan"}}},setup(e){return(t,n)=>(A(),C("section",Qc,[f("img",{class:"w-9/12 shadow-lg border border-gray-200 mx-auto rounded-tr-3xl rounded-bl-3xl",src:e.source.thumb,alt:e.source.thumb},null,8,Yc),f("div",Jc,[f("p",Zc,st(e.source.name),1),f("p",th,st(e.source.description),1),f("div",eh,[(A(!0),C(Ht,null,fe(e.source.social,(s,r)=>(A(),C("a",{key:r,target:"_blank",class:"text-amber-500",href:s.link},[f("i",{class:he([s.icon,"text-xl"])},null,2)],8,nh))),128))])])]))}},rh={class:"w-10/12 mx-auto flex flex-wrap justify-center items-center gap-5 mt-6"},ih={setup(e){const t=B(null);return Kn(()=>{wr.get("contents/couples.json").then(n=>t.value=n.data.couples).catch(n=>alert(n))}),(n,s)=>(A(),C("section",rh,[(A(!0),C(Ht,null,fe(t.value,(r,i)=>(A(),go(sh,{key:i,source:r},null,8,["source"]))),128))]))}},oh={class:"px-2 py-4"},ah=f("p",{class:"mx-auto text-center text-sm text-black w-10/12 mb-2"},"Menuju acara kami",-1),lh={class:"flex justify-center gap-3"},uh={class:"text-3xl font-medium text-amber-500 mb-2"},ch={class:"text-black text-sm font-medium"},hh={setup(e){const t=B(null),n=(r,i,o)=>{const a=new Date().getTime(),l=r-a;if(l>0){const c=Math.floor(l/864e5),u=Math.floor(l%(1e3*60*60*24)/(1e3*60*60)),h=Math.floor(l%(1e3*60*60)/(1e3*60)),m=Math.floor(l%(1e3*60)/1e3);i.value={days:c,hours:u,minutes:h,seconds:m},c===0&&u===0&&h===0&&m===0&&o()}else i.value={days:0,hours:0,minutes:0,seconds:0}},s=setInterval(()=>{n(new Date("2024-11-10 08:30").getTime(),t,()=>{clearInterval(s)})},1e3);return(r,i)=>(A(),C("div",oh,[ah,f("section",lh,[(A(!0),C(Ht,null,fe(t.value,(o,a,l)=>(A(),C("div",{key:l,"data-aos":"zoom-in",class:"text-center w-3/12"},[f("p",uh,st(o),1),f("p",ch,st(a),1)]))),128))])]))}};const ge=e=>(Gn("data-v-fd2e874a"),e=e(),Wn(),e),dh={class:"w-full bg-cream"},fh={class:"container-section pb-12"},ph={"data-aos":"fade-up"},mh={class:"text-xl satisfy-font text-amber-400"},gh={class:"font-medium text-black"},yh={class:"font-medium text-black"},vh=ge(()=>f("img",{src:Xn,class:"w-4/12 md:w-4/12 mx-auto rotate-180"},null,-1)),wh={class:"text-amber-500"},Eh={class:"text-black"},bh=["href"],_h=ge(()=>f("i",{class:"fa-solid fa-map"},null,-1)),Th=de(" Lihat Peta "),Ah=[_h,Th],Sh=ge(()=>f("img",{src:Xn,class:"w-4/12 md:w-4/12 mx-auto"},null,-1)),Ih={class:""},Ch=ge(()=>f("p",{class:"text-sm text-black"},"Konfirmasi kehadiran anda pada buku tamu",-1)),Dh=ge(()=>f("i",{class:"fa-solid fa-clipboard-check"},null,-1)),xh=de(" Konfirmasi "),Nh=[Dh,xh],kh=ge(()=>f("img",{src:yo,alt:""},null,-1)),Rh={emits:["goToGuestBook"],setup(e,{emit:t}){const n=B(null);Kn(()=>{wr.get("contents/timelines.json").then(r=>n.value=r.data.timelines).catch(r=>alert(r))});const s=()=>setTimeout(()=>{t("goToGuestBook")},300);return(r,i)=>(A(),C("section",dh,[f("section",fh,[L(pe,{"text-color":"text-black",subtitle:"Dengan tidak mengurangi rasa hormat, kami mengajak para tamu undangan agar bisa berhadir pada serangkaian acara kami",title:"Runtutan Acara"}),L(vo,null,{body:ee(()=>[(A(!0),C(Ht,null,fe(n.value,(o,a)=>(A(),C("div",{class:"px-6 py-8 text-center text-sm font-medium",key:a},[f("section",ph,[f("h1",mh,st(o.title),1),f("p",gh,st(o.date),1),f("p",yh,st(o.time),1),vh,f("p",wh,st(o.location),1),f("p",Eh,st(o.address),1),f("a",{class:"btn bg-gray-800 text-amber-500",href:o.mapUrl,target:"_blank"},Ah,8,bh),Sh])]))),128))]),footer:ee(()=>[f("section",Ih,[L(hh),f("div",{class:"px-6 pt-5 pb-8 text-center"},[Ch,f("button",{onClick:s,class:"btn bg-gray-800 text-amber-500"},Nh)]),kh])]),_:1})])]))}};var Oh=Qe(Rh,[["__scopeId","data-v-fd2e874a"]]);const Ph={class:"w-full bg-cream"},Lh={class:"container-section"},Mh={setup(e){return(t,n)=>(A(),C("section",Ph,[f("section",Lh,[L(pe,{"text-color":"text-black",title:"Mempelai Pria dan Wanita",subtitle:"Ya Allah dengan mengharap ridha dan karunia-Mu, Izinkanlah kami mempersatukan dua insan dari dua keluarga ini agar menjadi pasangan yang selalu mendapakan rahmat-Mu"}),L(ih)])]))}};const $h={class:"w-full xl:bg-slate-100"},Fh={class:"w-full px-0"},Bh={class:"flex flex-wrap"},Uh={"data-aos":"fade-up",class:"w-full"},Vh=["src"],jh=["src","alt"],Hh={key:1,class:"text-center"},qh={setup(e){const t=B(null);return Kn(()=>{wr.get("contents/galleries.json").then(n=>{t.value=n.data.galleries}).catch(n=>{console.error(n),alert("Failed to load gallery images.")})}),(n,s)=>{const r=Gl("viewer");return A(),C("section",$h,[f("section",Fh,[t.value&&t.value.length>0?(A(),go(r,{key:0,images:t.value},{default:ee(()=>[f("div",Bh,[f("div",Uh,[f("img",{src:t.value[0],class:"w-full h-auto",alt:"Landscape Photo"},null,8,Vh)]),(A(!0),C(Ht,null,fe(t.value.slice(1),(i,o)=>(A(),C("div",{key:o,"data-aos":"fade-up",class:"w-4/12"},[f("img",{src:i,class:"w-full h-auto",alt:`Portrait Photo ${o+1}`},null,8,jh)]))),128))])]),_:1},8,["images"])):(A(),C("div",Hh," Loading images... "))])])}}};var zh=Qe(qh,[["__scopeId","data-v-75fe364a"]]);const Kh={class:"w-full xl:bg-slate-100 pt-12 pb-5"},Gh={class:"section-container"},Wh={setup(e){const t="https://www.youtube.com/embed/wHqYL6p0rO8";return(n,s)=>(A(),C("section",Kh,[f("section",Gh,[L(pe,{class:"max-w-9/12",title:"Video Kami",subtitle:""})]),f("div",{"data-aos":"zoom-in",class:"w-10/12 mx-auto"},[f("iframe",{class:"w-full aspect-video",src:t,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})])]))}},Xh={key:0,class:"text-black font-regular mb-2",style:{"font-size":"small"}},Qh={props:{content:{type:String,default:"Example"},header:{type:String,required:!1,default:null}},setup(e){const t=e,n=B(t.content),s=()=>{navigator.clipboard&&navigator.clipboard.writeText(t.content).then(r=>n.value="Copied!").catch(r=>console.log(r))};return(r,i)=>(A(),C(Ht,null,[e.header?(A(),C("p",Xh,st(e.header),1)):In("",!0),f("button",{onClick:s,class:"active:scale-95 duration-300 bg-gray-800 text-sm text-gray-50 py-2 px-4 rounded-lg inline-block mt-1 mb-3"},[de(st(n.value)+" ",1),f("i",{class:he([n.value==="Copied!"?"fa-check":"fa-copy","fa-solid ml-2"])},null,2)])],64))}},Yh={class:"w-full xl:bg-slate-100 pt-12 pb-5"},Jh={class:"section-container"},Zh={class:""},td=["src","alt"],ed={setup(e){const t=[{thumb:"wallets/bca.png",platform:"Bank BCA",number:"0885770946",alias:"PRISMA.MAMA.LANA"}];return(n,s)=>(A(),C("section",Yh,[f("section",Jh,[L(pe,{class:"max-w-9/12",title:"Amplop Digital",subtitle:"Doa restu anda merupakan karunia yang sangat berarti bagi kami dan jika memberi adalah ungkapan tanda terima kasih anda, anda dapat memberi kado secara cashless"}),f("section",Zh,[(A(),C(Ht,null,fe(t,(r,i)=>f("div",{key:i,"data-aos":"zoom-in",class:"w-8/12 text-center border border-gray-200 mx-auto p-5 mb-5 bg-gray-100 shadow-lg rounded-tl-3xl rounded-br-3xl"},[f("img",{src:r.thumb,alt:r.platform,class:"w-4/12 mx-auto mb-0"},null,8,td),L(Qh,{header:"Silahkan untuk melakukan transfer melalui rekening dibawah ini a.n. Hardianto Jouga Pratama",content:r.number},null,8,["content"])])),64))])])]))}},nd={key:0,class:"flex gap-2 mb-6"},sd=f("i",{class:"fa fa-times"},null,-1),rd=[sd],id={props:{statusResponse:{type:Boolean,default:!1},showAlert:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:t}){return(n,s)=>e.showAlert?(A(),C("section",nd,[f("div",{class:he([e.statusResponse?"bg-green-500":"bg-red-500","w-10/12 text-gray-100 p-2 text-center rounded-lg duration-300"])},st(e.statusResponse?"Mensaje enviado con exito":"El mensaje no se pudo enviar"),3),f("button",{onClick:s[0]||(s[0]=r=>t("close")),class:"text-black px-1 w-2/12 grid place-items-center border border-gray-600 rounded-lg"},rd)])):In("",!0)}};/**
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
 */const Mo=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},od=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(l>>10)),t[s++]=String.fromCharCode(56320+(l&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},ad={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,l=r+2<e.length,c=l?e[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let m=(a&15)<<2|c>>6,y=c&63;l||(y=64,o||(m=64)),s.push(n[u],n[h],n[m],n[y])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Mo(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):od(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const c=r<e.length?n[e.charAt(r)]:64;++r;const h=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||c==null||h==null)throw Error();const m=i<<2|a>>4;if(s.push(m),c!==64){const y=a<<4&240|c>>2;if(s.push(y),h!==64){const _=c<<6&192|h;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},ld=function(e){const t=Mo(e);return ad.encodeByteArray(t,!0)},$o=function(e){return ld(e).replace(/\./g,"")};/**
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
 */class ud{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function ts(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cd(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ts())}function hd(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function dd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fd(){return ts().indexOf("Electron/")>=0}function pd(){const e=ts();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function md(){return ts().indexOf("MSAppHost/")>=0}function gd(){return typeof indexedDB=="object"}function yd(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
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
 */const vd="FirebaseError";class ye extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=vd,Object.setPrototypeOf(this,ye.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fo.prototype.create)}}class Fo{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?wd(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ye(r,a,s)}}function wd(e,t){return e.replace(Ed,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const Ed=/\{\$([^}]+)}/g;function Hs(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(_i(i)&&_i(o)){if(!Hs(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function _i(e){return e!==null&&typeof e=="object"}/**
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
 */function Pe(e){return e&&e._delegate?e._delegate:e}class Le{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const kt="[DEFAULT]";/**
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
 */class bd{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new ud;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Td(t))try{this.getOrInitializeService({instanceIdentifier:kt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=kt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=kt){return this.instances.has(t)}getOptions(t=kt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:_d(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=kt){return this.component?this.component.multipleInstances?t:kt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _d(e){return e===kt?void 0:e}function Td(e){return e.instantiationMode==="EAGER"}/**
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
 */class Ad{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new bd(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var N;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(N||(N={}));const Sd={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},Id=N.INFO,Cd={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},Dd=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=Cd[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Bo{constructor(t){this.name=t,this._logLevel=Id,this._logHandler=Dd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in N))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Sd[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...t),this._logHandler(this,N.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...t),this._logHandler(this,N.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,N.INFO,...t),this._logHandler(this,N.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,N.WARN,...t),this._logHandler(this,N.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...t),this._logHandler(this,N.ERROR,...t)}}const xd=(e,t)=>t.some(n=>e instanceof n);let Ti,Ai;function Nd(){return Ti||(Ti=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kd(){return Ai||(Ai=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Uo=new WeakMap,qs=new WeakMap,Vo=new WeakMap,Cs=new WeakMap,Er=new WeakMap;function Rd(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(St(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Uo.set(n,e)}).catch(()=>{}),Er.set(t,e),t}function Od(e){if(qs.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});qs.set(e,t)}let zs={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return qs.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Vo.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return St(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Pd(e){zs=e(zs)}function Ld(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(Ds(this),t,...n);return Vo.set(s,t.sort?t.sort():[t]),St(s)}:kd().includes(e)?function(...t){return e.apply(Ds(this),t),St(Uo.get(this))}:function(...t){return St(e.apply(Ds(this),t))}}function Md(e){return typeof e=="function"?Ld(e):(e instanceof IDBTransaction&&Od(e),xd(e,Nd())?new Proxy(e,zs):e)}function St(e){if(e instanceof IDBRequest)return Rd(e);if(Cs.has(e))return Cs.get(e);const t=Md(e);return t!==e&&(Cs.set(e,t),Er.set(t,e)),t}const Ds=e=>Er.get(e);function $d(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=St(o);return s&&o.addEventListener("upgradeneeded",l=>{s(St(o.result),l.oldVersion,l.newVersion,St(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Fd=["get","getKey","getAll","getAllKeys","count"],Bd=["put","add","delete","clear"],xs=new Map;function Si(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(xs.get(t))return xs.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=Bd.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Fd.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return xs.set(t,i),i}Pd(e=>ui(li({},e),{get:(t,n,s)=>Si(t,n)||e.get(t,n,s),has:(t,n)=>!!Si(t,n)||e.has(t,n)}));/**
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
 */class Ud{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Vd(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Vd(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ks="@firebase/app",Ii="0.7.31";/**
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
 */const Mt=new Bo("@firebase/app"),jd="@firebase/app-compat",Hd="@firebase/analytics-compat",qd="@firebase/analytics",zd="@firebase/app-check-compat",Kd="@firebase/app-check",Gd="@firebase/auth",Wd="@firebase/auth-compat",Xd="@firebase/database",Qd="@firebase/database-compat",Yd="@firebase/functions",Jd="@firebase/functions-compat",Zd="@firebase/installations",tf="@firebase/installations-compat",ef="@firebase/messaging",nf="@firebase/messaging-compat",sf="@firebase/performance",rf="@firebase/performance-compat",of="@firebase/remote-config",af="@firebase/remote-config-compat",lf="@firebase/storage",uf="@firebase/storage-compat",cf="@firebase/firestore",hf="@firebase/firestore-compat",df="firebase",ff="9.9.3";/**
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
 */const jo="[DEFAULT]",pf={[Ks]:"fire-core",[jd]:"fire-core-compat",[qd]:"fire-analytics",[Hd]:"fire-analytics-compat",[Kd]:"fire-app-check",[zd]:"fire-app-check-compat",[Gd]:"fire-auth",[Wd]:"fire-auth-compat",[Xd]:"fire-rtdb",[Qd]:"fire-rtdb-compat",[Yd]:"fire-fn",[Jd]:"fire-fn-compat",[Zd]:"fire-iid",[tf]:"fire-iid-compat",[ef]:"fire-fcm",[nf]:"fire-fcm-compat",[sf]:"fire-perf",[rf]:"fire-perf-compat",[of]:"fire-rc",[af]:"fire-rc-compat",[lf]:"fire-gcs",[uf]:"fire-gcs-compat",[cf]:"fire-fst",[hf]:"fire-fst-compat","fire-js":"fire-js",[df]:"fire-js-all"};/**
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
 */const Dn=new Map,Gs=new Map;function mf(e,t){try{e.container.addComponent(t)}catch(n){Mt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function xn(e){const t=e.name;if(Gs.has(t))return Mt.debug(`There were multiple attempts to register component ${t}.`),!1;Gs.set(t,e);for(const n of Dn.values())mf(n,e);return!0}function gf(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const yf={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},$t=new Fo("app","Firebase",yf);/**
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
 */class vf{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Le("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw $t.create("app-deleted",{appName:this._name})}}/**
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
 */const wf=ff;function Ef(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:jo,automaticDataCollectionEnabled:!1},t),s=n.name;if(typeof s!="string"||!s)throw $t.create("bad-app-name",{appName:String(s)});const r=Dn.get(s);if(r){if(Hs(e,r.options)&&Hs(n,r.config))return r;throw $t.create("duplicate-app",{appName:s})}const i=new Ad(s);for(const a of Gs.values())i.addComponent(a);const o=new vf(e,n,i);return Dn.set(s,o),o}function bf(e=jo){const t=Dn.get(e);if(!t)throw $t.create("no-app",{appName:e});return t}function Jt(e,t,n){var s;let r=(s=pf[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Mt.warn(a.join(" "));return}xn(new Le(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const _f="firebase-heartbeat-database",Tf=1,Me="firebase-heartbeat-store";let Ns=null;function Ho(){return Ns||(Ns=$d(_f,Tf,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Me)}}}).catch(e=>{throw $t.create("idb-open",{originalErrorMessage:e.message})})),Ns}async function Af(e){var t;try{return(await Ho()).transaction(Me).objectStore(Me).get(qo(e))}catch(n){if(n instanceof ye)Mt.warn(n.message);else{const s=$t.create("idb-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});Mt.warn(s.message)}}}async function Ci(e,t){var n;try{const r=(await Ho()).transaction(Me,"readwrite");return await r.objectStore(Me).put(t,qo(e)),r.done}catch(s){if(s instanceof ye)Mt.warn(s.message);else{const r=$t.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Mt.warn(r.message)}}}function qo(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Sf=1024,If=30*24*60*60*1e3;class Cf{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xf(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Di();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=If}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Di(),{heartbeatsToSend:n,unsentEntries:s}=Df(this._heartbeatsCache.heartbeats),r=$o(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Di(){return new Date().toISOString().substring(0,10)}function Df(e,t=Sf){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),xi(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),xi(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class xf{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gd()?yd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Af(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ci(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ci(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function xi(e){return $o(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Nf(e){xn(new Le("platform-logger",t=>new Ud(t),"PRIVATE")),xn(new Le("heartbeat",t=>new Cf(t),"PRIVATE")),Jt(Ks,Ii,e),Jt(Ks,Ii,"esm2017"),Jt("fire-js","")}Nf("");var kf=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},g,br=br||{},w=kf||self;function Nn(){}function Ws(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Je(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Rf(e){return Object.prototype.hasOwnProperty.call(e,ks)&&e[ks]||(e[ks]=++Of)}var ks="closure_uid_"+(1e9*Math.random()>>>0),Of=0;function Pf(e,t,n){return e.call.apply(e.bind,arguments)}function Lf(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function W(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?W=Pf:W=Lf,W.apply(null,arguments)}function pn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function Y(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(s,o)}}function xt(){this.s=this.s,this.o=this.o}var Mf=0,$f={};xt.prototype.s=!1;xt.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),Mf!=0)){var e=Rf(this);delete $f[e]}};xt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const zo=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},Ko=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const s=e.length,r=typeof e=="string"?e.split(""):e;for(let i=0;i<s;i++)i in r&&t.call(n,r[i],i,e)};function Ff(e){t:{var t=xp;const n=e.length,s=typeof e=="string"?e.split(""):e;for(let r=0;r<n;r++)if(r in s&&t.call(void 0,s[r],r,e)){t=r;break t}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function Ni(e){return Array.prototype.concat.apply([],arguments)}function _r(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function kn(e){return/^[\s\xa0]*$/.test(e)}var ki=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function et(e,t){return e.indexOf(t)!=-1}function Rs(e,t){return e<t?-1:e>t?1:0}var nt;t:{var Ri=w.navigator;if(Ri){var Oi=Ri.userAgent;if(Oi){nt=Oi;break t}}nt=""}function Tr(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function Go(e){const t={};for(const n in e)t[n]=e[n];return t}var Pi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wo(e,t){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)e[n]=s[n];for(let i=0;i<Pi.length;i++)n=Pi[i],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Ar(e){return Ar[" "](e),e}Ar[" "]=Nn;function Bf(e){var t=jf;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Uf=et(nt,"Opera"),ie=et(nt,"Trident")||et(nt,"MSIE"),Xo=et(nt,"Edge"),Xs=Xo||ie,Qo=et(nt,"Gecko")&&!(et(nt.toLowerCase(),"webkit")&&!et(nt,"Edge"))&&!(et(nt,"Trident")||et(nt,"MSIE"))&&!et(nt,"Edge"),Vf=et(nt.toLowerCase(),"webkit")&&!et(nt,"Edge");function Yo(){var e=w.document;return e?e.documentMode:void 0}var Rn;t:{var Os="",Ps=function(){var e=nt;if(Qo)return/rv:([^\);]+)(\)|;)/.exec(e);if(Xo)return/Edge\/([\d\.]+)/.exec(e);if(ie)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Vf)return/WebKit\/(\S+)/.exec(e);if(Uf)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Ps&&(Os=Ps?Ps[1]:""),ie){var Ls=Yo();if(Ls!=null&&Ls>parseFloat(Os)){Rn=String(Ls);break t}}Rn=Os}var jf={};function Hf(){return Bf(function(){let e=0;const t=ki(String(Rn)).split("."),n=ki("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var r=t[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;e=Rs(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Rs(r[2].length==0,i[2].length==0)||Rs(r[2],i[2]),r=r[3],i=i[3]}while(e==0)}return 0<=e})}var Qs;if(w.document&&ie){var Li=Yo();Qs=Li||parseInt(Rn,10)||void 0}else Qs=void 0;var qf=Qs,zf=function(){if(!w.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{w.addEventListener("test",Nn,t),w.removeEventListener("test",Nn,t)}catch{}return e}();function tt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};function $e(e,t){if(tt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Qo){t:{try{Ar(t.nodeName);var r=!0;break t}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Kf[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&$e.Z.h.call(this)}}Y($e,tt);var Kf={2:"touch",3:"pen",4:"mouse"};$e.prototype.h=function(){$e.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ze="closure_listenable_"+(1e6*Math.random()|0),Gf=0;function Wf(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ia=r,this.key=++Gf,this.ca=this.fa=!1}function es(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function ns(e){this.src=e,this.g={},this.h=0}ns.prototype.add=function(e,t,n,s,r){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Js(e,t,s,r);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new Wf(t,this.src,i,!!s,r),t.fa=n,e.push(t)),t};function Ys(e,t){var n=t.type;if(n in e.g){var s=e.g[n],r=zo(s,t),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(es(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Js(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.ca&&i.listener==t&&i.capture==!!n&&i.ia==s)return r}return-1}var Sr="closure_lm_"+(1e6*Math.random()|0),Ms={};function Jo(e,t,n,s,r){if(s&&s.once)return ta(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Jo(e,t[i],n,s,r);return null}return n=Dr(n),e&&e[Ze]?e.N(t,n,Je(s)?!!s.capture:!!s,r):Zo(e,t,n,!1,s,r)}function Zo(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=Je(r)?!!r.capture:!!r,a=Cr(e);if(a||(e[Sr]=a=new ns(e)),n=a.add(t,n,s,o,i),n.proxy)return n;if(s=Xf(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)zf||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(na(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Xf(){function e(n){return t.call(e.src,e.listener,n)}var t=Qf;return e}function ta(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)ta(e,t[i],n,s,r);return null}return n=Dr(n),e&&e[Ze]?e.O(t,n,Je(s)?!!s.capture:!!s,r):Zo(e,t,n,!0,s,r)}function ea(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)ea(e,t[i],n,s,r);else s=Je(s)?!!s.capture:!!s,n=Dr(n),e&&e[Ze]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Js(i,n,s,r),-1<n&&(es(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Cr(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Js(t,n,s,r)),(n=-1<e?t[e]:null)&&Ir(n))}function Ir(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[Ze])Ys(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(na(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Cr(t))?(Ys(n,e),n.h==0&&(n.src=null,t[Sr]=null)):es(e)}}}function na(e){return e in Ms?Ms[e]:Ms[e]="on"+e}function Qf(e,t){if(e.ca)e=!0;else{t=new $e(t,this);var n=e.listener,s=e.ia||e.src;e.fa&&Ir(e),e=n.call(s,t)}return e}function Cr(e){return e=e[Sr],e instanceof ns?e:null}var $s="__closure_events_fn_"+(1e9*Math.random()>>>0);function Dr(e){return typeof e=="function"?e:(e[$s]||(e[$s]=function(t){return e.handleEvent(t)}),e[$s])}function z(){xt.call(this),this.i=new ns(this),this.P=this,this.I=null}Y(z,xt);z.prototype[Ze]=!0;z.prototype.removeEventListener=function(e,t,n,s){ea(this,e,t,n,s)};function X(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new tt(t,e);else if(t instanceof tt)t.target=t.target||e;else{var r=t;t=new tt(s,e),Wo(t,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=mn(o,s,!0,t)&&r}if(o=t.g=e,r=mn(o,s,!0,t)&&r,r=mn(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)o=t.g=n[i],r=mn(o,s,!1,t)&&r}z.prototype.M=function(){if(z.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)es(n[s]);delete e.g[t],e.h--}}this.I=null};z.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};z.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function mn(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&Ys(e.i,o),r=a.call(l,s)!==!1&&r}}return r&&!s.defaultPrevented}var xr=w.JSON.stringify;function Yf(){var e=ra;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Jf{constructor(){this.h=this.g=null}add(t,n){const s=sa.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var sa=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Zf,e=>e.reset());class Zf{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function tp(e){w.setTimeout(()=>{throw e},0)}function Nr(e,t){Zs||ep(),tr||(Zs(),tr=!0),ra.add(e,t)}var Zs;function ep(){var e=w.Promise.resolve(void 0);Zs=function(){e.then(np)}}var tr=!1,ra=new Jf;function np(){for(var e;e=Yf();){try{e.h.call(e.g)}catch(n){tp(n)}var t=sa;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}tr=!1}function ss(e,t){z.call(this),this.h=e||1,this.g=t||w,this.j=W(this.kb,this),this.l=Date.now()}Y(ss,z);g=ss.prototype;g.da=!1;g.S=null;g.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),X(this,"tick"),this.da&&(kr(this),this.start()))}};g.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function kr(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}g.M=function(){ss.Z.M.call(this),kr(this),delete this.g};function Rr(e,t,n){if(typeof e=="function")n&&(e=W(e,n));else if(e&&typeof e.handleEvent=="function")e=W(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:w.setTimeout(e,t||0)}function ia(e){e.g=Rr(()=>{e.g=null,e.i&&(e.i=!1,ia(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class sp extends xt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:ia(this)}M(){super.M(),this.g&&(w.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fe(e){xt.call(this),this.h=e,this.g={}}Y(Fe,xt);var Mi=[];function oa(e,t,n,s){Array.isArray(n)||(n&&(Mi[0]=n.toString()),n=Mi);for(var r=0;r<n.length;r++){var i=Jo(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function aa(e){Tr(e.g,function(t,n){this.g.hasOwnProperty(n)&&Ir(t)},e),e.g={}}Fe.prototype.M=function(){Fe.Z.M.call(this),aa(this)};Fe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function rs(){this.g=!0}rs.prototype.Aa=function(){this.g=!1};function rp(e,t,n,s,r,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function ip(e,t,n,s,r,i,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+`
`+n+`
`+i+" "+o})}function Qt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+ap(e,n)+(s?" "+s:"")})}function op(e,t){e.info(function(){return"TIMEOUT: "+t})}rs.prototype.info=function(){};function ap(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return xr(n)}catch{return t}}var zt={},$i=null;function is(){return $i=$i||new z}zt.Ma="serverreachability";function la(e){tt.call(this,zt.Ma,e)}Y(la,tt);function Be(e){const t=is();X(t,new la(t,e))}zt.STAT_EVENT="statevent";function ua(e,t){tt.call(this,zt.STAT_EVENT,e),this.stat=t}Y(ua,tt);function rt(e){const t=is();X(t,new ua(t,e))}zt.Na="timingevent";function ca(e,t){tt.call(this,zt.Na,e),this.size=t}Y(ca,tt);function tn(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return w.setTimeout(function(){e()},t)}var os={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ha={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Or(){}Or.prototype.h=null;function Fi(e){return e.h||(e.h=e.i())}function da(){}var en={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Pr(){tt.call(this,"d")}Y(Pr,tt);function Lr(){tt.call(this,"c")}Y(Lr,tt);var er;function as(){}Y(as,Or);as.prototype.g=function(){return new XMLHttpRequest};as.prototype.i=function(){return{}};er=new as;function nn(e,t,n,s){this.l=e,this.j=t,this.m=n,this.X=s||1,this.V=new Fe(this),this.P=lp,e=Xs?125:void 0,this.W=new ss(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new fa}function fa(){this.i=null,this.g="",this.h=!1}var lp=45e3,nr={},On={};g=nn.prototype;g.setTimeout=function(e){this.P=e};function sr(e,t,n){e.K=1,e.v=us(_t(t)),e.s=n,e.U=!0,pa(e,null)}function pa(e,t){e.F=Date.now(),sn(e),e.A=_t(e.v);var n=e.A,s=e.X;Array.isArray(s)||(s=[String(s)]),ba(n.h,"t",s),e.C=0,n=e.l.H,e.h=new fa,e.g=Va(e.l,n?t:null,!e.s),0<e.O&&(e.L=new sp(W(e.Ia,e,e.g),e.O)),oa(e.V,e.g,"readystatechange",e.gb),t=e.H?Go(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Be(1),rp(e.j,e.u,e.A,e.m,e.X,e.s)}g.gb=function(e){e=e.target;const t=this.L;t&&wt(e)==3?t.l():this.Ia(e)};g.Ia=function(e){try{if(e==this.g)t:{const u=wt(this.g);var t=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||Xs||this.g&&(this.h.h||this.g.ga()||ji(this.g)))){this.I||u!=4||t==7||(t==8||0>=h?Be(3):Be(2)),ls(this);var n=this.g.ba();this.N=n;e:if(ma(this)){var s=ji(this.g);e="";var r=s.length,i=wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Rt(this),De(this);var o="";break e}this.h.i=new w.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,ip(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!kn(a)){var c=a;break e}}c=null}if(n=c)Qt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,rr(this,n);else{this.i=!1,this.o=3,rt(12),Rt(this),De(this);break t}}this.U?(ga(this,u,o),Xs&&this.i&&u==3&&(oa(this.V,this.W,"tick",this.fb),this.W.start())):(Qt(this.j,this.m,o,null),rr(this,o)),u==4&&Rt(this),this.i&&!this.I&&(u==4?$a(this.l,this):(this.i=!1,sn(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,rt(12)):(this.o=0,rt(13)),Rt(this),De(this)}}}catch{}finally{}};function ma(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function ga(e,t,n){let s=!0,r;for(;!e.I&&e.C<n.length;)if(r=up(e,n),r==On){t==4&&(e.o=4,rt(14),s=!1),Qt(e.j,e.m,null,"[Incomplete Response]");break}else if(r==nr){e.o=4,rt(15),Qt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Qt(e.j,e.m,r,null),rr(e,r);ma(e)&&r!=On&&r!=nr&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,rt(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),qr(t),t.L=!0,rt(11))):(Qt(e.j,e.m,n,"[Invalid Chunked Response]"),Rt(e),De(e))}g.fb=function(){if(this.g){var e=wt(this.g),t=this.g.ga();this.C<t.length&&(ls(this),ga(this,e,t),this.i&&e!=4&&sn(this))}};function up(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?On:(n=Number(t.substring(n,s)),isNaN(n)?nr:(s+=1,s+n>t.length?On:(t=t.substr(s,n),e.C=s+n,t)))}g.cancel=function(){this.I=!0,Rt(this)};function sn(e){e.Y=Date.now()+e.P,ya(e,e.P)}function ya(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=tn(W(e.eb,e),t)}function ls(e){e.B&&(w.clearTimeout(e.B),e.B=null)}g.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(op(this.j,this.A),this.K!=2&&(Be(3),rt(17)),Rt(this),this.o=2,De(this)):ya(this,this.Y-e)};function De(e){e.l.G==0||e.I||$a(e.l,e)}function Rt(e){ls(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,kr(e.W),aa(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function rr(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||ir(n.i,e))){if(n.I=e.N,!e.J&&ir(n.i,e)&&n.G==3){try{var s=n.Ca.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)$n(n),ds(n);else break t;Hr(n),rt(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=tn(W(n.ab,n),6e3));if(1>=Aa(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Ot(n,11)}else if((e.J||n.g==e)&&$n(n),!kn(t))for(r=n.Ca.g.parse(t),t=0;t<r.length;t++){let c=r[t];if(n.U=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.J=c[1],n.la=c[2];const u=c[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=c[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const m=c[5];m!=null&&typeof m=="number"&&0<m&&(s=1.5*m,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const y=e.g;if(y){const _=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var i=s.i;!i.g&&(et(_,"spdy")||et(_,"quic")||et(_,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Fr(i,i.h),i.h=null))}if(s.D){const x=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;x&&(s.sa=x,O(s.F,s.D,x))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=e;if(s.oa=Ua(s,s.H?s.la:null,s.W),o.J){Sa(s.i,o);var a=o,l=s.K;l&&a.setTimeout(l),a.B&&(ls(a),sn(a)),s.g=o}else La(s);0<n.l.length&&fs(n)}else c[0]!="stop"&&c[0]!="close"||Ot(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ot(n,7):jr(n):c[0]!="noop"&&n.j&&n.j.wa(c),n.A=0)}}Be(4)}catch{}}function cp(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(Ws(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Mr(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Ws(e)||typeof e=="string")Ko(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(Ws(e)||typeof e=="string"){n=[];for(var s=e.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,e)n[s++]=r;s=cp(e),r=s.length;for(var i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}}function ve(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(e)if(e instanceof ve)for(n=e.T(),s=0;s<n.length;s++)this.set(n[s],e.get(n[s]));else for(s in e)this.set(s,e[s])}g=ve.prototype;g.R=function(){$r(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};g.T=function(){return $r(this),this.g.concat()};function $r(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var s=e.g[t];Ft(e.h,s)&&(e.g[n++]=s),t++}e.g.length=n}if(e.i!=e.g.length){var r={};for(n=t=0;t<e.g.length;)s=e.g[t],Ft(r,s)||(e.g[n++]=s,r[s]=1),t++;e.g.length=n}}g.get=function(e,t){return Ft(this.h,e)?this.h[e]:t};g.set=function(e,t){Ft(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};g.forEach=function(e,t){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);e.call(t,i,r,this)}};function Ft(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var va=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function hp(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Bt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Bt){this.g=t!==void 0?t:e.g,Pn(this,e.j),this.s=e.s,Ln(this,e.i),Mn(this,e.m),this.l=e.l,t=e.h;var n=new Ue;n.i=t.i,t.g&&(n.g=new ve(t.g),n.h=t.h),Bi(this,n),this.o=e.o}else e&&(n=String(e).match(va))?(this.g=!!t,Pn(this,n[1]||"",!0),this.s=xe(n[2]||""),Ln(this,n[3]||"",!0),Mn(this,n[4]),this.l=xe(n[5]||"",!0),Bi(this,n[6]||"",!0),this.o=xe(n[7]||"")):(this.g=!!t,this.h=new Ue(null,this.g))}Bt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ce(t,Ui,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Ce(t,Ui,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(Ce(n,n.charAt(0)=="/"?gp:mp,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ce(n,vp)),e.join("")};function _t(e){return new Bt(e)}function Pn(e,t,n){e.j=n?xe(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ln(e,t,n){e.i=n?xe(t,!0):t}function Mn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Bi(e,t,n){t instanceof Ue?(e.h=t,wp(e.h,e.g)):(n||(t=Ce(t,yp)),e.h=new Ue(t,e.g))}function O(e,t,n){e.h.set(t,n)}function us(e){return O(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function dp(e){return e instanceof Bt?_t(e):new Bt(e,void 0)}function fp(e,t,n,s){var r=new Bt(null,void 0);return e&&Pn(r,e),t&&Ln(r,t),n&&Mn(r,n),s&&(r.l=s),r}function xe(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ce(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,pp),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function pp(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Ui=/[#\/\?@]/g,mp=/[#\?:]/g,gp=/[#\?]/g,yp=/[#\?@]/g,vp=/#/g;function Ue(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Nt(e){e.g||(e.g=new ve,e.h=0,e.i&&hp(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}g=Ue.prototype;g.add=function(e,t){Nt(this),this.i=null,e=we(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function wa(e,t){Nt(e),t=we(e,t),Ft(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Ft(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&$r(e)))}function Ea(e,t){return Nt(e),t=we(e,t),Ft(e.g.h,t)}g.forEach=function(e,t){Nt(this),this.g.forEach(function(n,s){Ko(n,function(r){e.call(t,r,s,this)},this)},this)};g.T=function(){Nt(this);for(var e=this.g.R(),t=this.g.T(),n=[],s=0;s<t.length;s++)for(var r=e[s],i=0;i<r.length;i++)n.push(t[s]);return n};g.R=function(e){Nt(this);var t=[];if(typeof e=="string")Ea(this,e)&&(t=Ni(t,this.g.get(we(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=Ni(t,e[n])}return t};g.set=function(e,t){return Nt(this),this.i=null,e=we(this,e),Ea(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};g.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function ba(e,t,n){wa(e,t),0<n.length&&(e.i=null,e.g.set(we(e,t),_r(n)),e.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var s=t[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),e.push(o)}}return this.i=e.join("&")};function we(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function wp(e,t){t&&!e.j&&(Nt(e),e.i=null,e.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(wa(this,s),ba(this,r,n))},e)),e.j=t}var Ep=class{constructor(e,t){this.h=e,this.g=t}};function _a(e){this.l=e||bp,w.PerformanceNavigationTiming?(e=w.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(w.g&&w.g.Ea&&w.g.Ea()&&w.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var bp=10;function Ta(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Aa(e){return e.h?1:e.g?e.g.size:0}function ir(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Fr(e,t){e.g?e.g.add(t):e.h=t}function Sa(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}_a.prototype.cancel=function(){if(this.i=Ia(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Ia(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return _r(e.i)}function Br(){}Br.prototype.stringify=function(e){return w.JSON.stringify(e,void 0)};Br.prototype.parse=function(e){return w.JSON.parse(e,void 0)};function _p(){this.g=new Br}function Tp(e,t,n){const s=n||"";try{Mr(e,function(r,i){let o=r;Je(r)&&(o=xr(r)),t.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw t.push(s+"type="+encodeURIComponent("_badmap")),r}}function Ap(e,t){const n=new rs;if(w.Image){const s=new Image;s.onload=pn(gn,n,s,"TestLoadImage: loaded",!0,t),s.onerror=pn(gn,n,s,"TestLoadImage: error",!1,t),s.onabort=pn(gn,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=pn(gn,n,s,"TestLoadImage: timeout",!1,t),w.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function gn(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch{}}function rn(e){this.l=e.$b||null,this.j=e.ib||!1}Y(rn,Or);rn.prototype.g=function(){return new cs(this.l,this.j)};rn.prototype.i=function(e){return function(){return e}}({});function cs(e,t){z.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Ur,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Y(cs,z);var Ur=0;g=cs.prototype;g.open=function(e,t){if(this.readyState!=Ur)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ve(this)};g.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||w).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,on(this)),this.readyState=Ur};g.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ve(this)),this.g&&(this.readyState=3,Ve(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof w.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ca(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function Ca(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}g.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?on(this):Ve(this),this.readyState==3&&Ca(this)}};g.Ua=function(e){this.g&&(this.response=this.responseText=e,on(this))};g.Ta=function(e){this.g&&(this.response=e,on(this))};g.ha=function(){this.g&&on(this)};function on(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ve(e)}g.setRequestHeader=function(e,t){this.v.append(e,t)};g.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Ve(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(cs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Sp=w.JSON.parse;function F(e){z.call(this),this.headers=new ve,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Da,this.K=this.L=!1}Y(F,z);var Da="",Ip=/^https?$/i,Cp=["POST","PUT"];g=F.prototype;g.ea=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():er.g(),this.C=this.u?Fi(this.u):Fi(er),this.g.onreadystatechange=W(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){Vi(this,i);return}e=n||"";const r=new ve(this.headers);s&&Mr(s,function(i,o){r.set(o,i)}),s=Ff(r.T()),n=w.FormData&&e instanceof w.FormData,!(0<=zo(Cp,t))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ka(this),0<this.B&&((this.K=Dp(this.g))?(this.g.timeout=this.B,this.g.ontimeout=W(this.pa,this)):this.A=Rr(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Vi(this,i)}};function Dp(e){return ie&&Hf()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function xp(e){return e.toLowerCase()=="content-type"}g.pa=function(){typeof br!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,X(this,"timeout"),this.abort(8))};function Vi(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,xa(e),hs(e)}function xa(e){e.D||(e.D=!0,X(e,"complete"),X(e,"error"))}g.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,X(this,"complete"),X(this,"abort"),hs(this))};g.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),hs(this,!0)),F.Z.M.call(this)};g.Fa=function(){this.s||(this.F||this.v||this.l?Na(this):this.cb())};g.cb=function(){Na(this)};function Na(e){if(e.h&&typeof br!="undefined"&&(!e.C[1]||wt(e)!=4||e.ba()!=2)){if(e.v&&wt(e)==4)Rr(e.Fa,0,e);else if(X(e,"readystatechange"),wt(e)==4){e.h=!1;try{const a=e.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var r=String(e.H).match(va)[1]||null;if(!r&&w.self&&w.self.location){var i=w.self.location.protocol;r=i.substr(0,i.length-1)}s=!Ip.test(r?r.toLowerCase():"")}n=s}if(n)X(e,"complete"),X(e,"success");else{e.m=6;try{var o=2<wt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.ba()+"]",xa(e)}}finally{hs(e)}}}}function hs(e,t){if(e.g){ka(e);const n=e.g,s=e.C[0]?Nn:null;e.g=null,e.C=null,t||X(e,"ready");try{n.onreadystatechange=s}catch{}}}function ka(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(w.clearTimeout(e.A),e.A=null)}function wt(e){return e.g?e.g.readyState:0}g.ba=function(){try{return 2<wt(this)?this.g.status:-1}catch{return-1}};g.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Sp(t)}};function ji(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Da:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}g.Da=function(){return this.m};g.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Np(e){let t="";return Tr(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Vr(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Np(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):O(e,t,n))}function Ie(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Ra(e){this.za=0,this.l=[],this.h=new rs,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ie("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ie("baseRetryDelayMs",5e3,e),this.$a=Ie("retryDelaySeedMs",1e4,e),this.Ya=Ie("forwardChannelMaxRetries",2,e),this.ra=Ie("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new _a(e&&e.concurrentRequestLimit),this.Ca=new _p,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}g=Ra.prototype;g.ma=8;g.G=1;function jr(e){if(Oa(e),e.G==3){var t=e.V++,n=_t(e.F);O(n,"SID",e.J),O(n,"RID",t),O(n,"TYPE","terminate"),an(e,n),t=new nn(e,e.h,t,void 0),t.K=2,t.v=us(_t(n)),n=!1,w.navigator&&w.navigator.sendBeacon&&(n=w.navigator.sendBeacon(t.v.toString(),"")),!n&&w.Image&&(new Image().src=t.v,n=!0),n||(t.g=Va(t.l,null),t.g.ea(t.v)),t.F=Date.now(),sn(t)}Ba(e)}g.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function ds(e){e.g&&(qr(e),e.g.cancel(),e.g=null)}function Oa(e){ds(e),e.u&&(w.clearTimeout(e.u),e.u=null),$n(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&w.clearTimeout(e.m),e.m=null)}function Fs(e,t){e.l.push(new Ep(e.Za++,t)),e.G==3&&fs(e)}function fs(e){Ta(e.i)||e.m||(e.m=!0,Nr(e.Ha,e),e.C=0)}function kp(e,t){return Aa(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=tn(W(e.Ha,e,t),Fa(e,e.C)),e.C++,!0)}g.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const r=new nn(this,this.h,e,void 0);let i=this.s;if(this.P&&(i?(i=Go(i),Wo(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)t:{for(var t=0,n=0;n<this.l.length;n++){e:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.l.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Pa(this,r,t),n=_t(this.F),O(n,"RID",e),O(n,"CVER",22),this.D&&O(n,"X-HTTP-Session-Id",this.D),an(this,n),this.o&&i&&Vr(n,this.o,i),Fr(this.i,r),this.Ra&&O(n,"TYPE","init"),this.ja?(O(n,"$req",t),O(n,"SID","null"),r.$=!0,sr(r,n,null)):sr(r,n,t),this.G=2}}else this.G==3&&(e?Hi(this,e):this.l.length==0||Ta(this.i)||Hi(this))};function Hi(e,t){var n;t?n=t.m:n=e.V++;const s=_t(e.F);O(s,"SID",e.J),O(s,"RID",n),O(s,"AID",e.U),an(e,s),e.o&&e.s&&Vr(s,e.o,e.s),n=new nn(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Pa(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Fr(e.i,n),sr(n,s,t)}function an(e,t){e.j&&Mr({},function(n,s){O(t,s,n)})}function Pa(e,t,n){n=Math.min(e.l.length,n);var s=e.j?W(e.j.Oa,e.j,e):null;t:{var r=e.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=r[l].h;const u=r[l].g;if(c-=i,0>c)i=Math.max(0,r[l].h-100),a=!1;else try{Tp(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break t}}}return e=e.l.splice(0,n),t.D=e,s}function La(e){e.g||e.u||(e.Y=1,Nr(e.Ga,e),e.A=0)}function Hr(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=tn(W(e.Ga,e),Fa(e,e.A)),e.A++,!0)}g.Ga=function(){if(this.u=null,Ma(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=tn(W(this.bb,this),e)}};g.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,rt(10),ds(this),Ma(this))};function qr(e){e.B!=null&&(w.clearTimeout(e.B),e.B=null)}function Ma(e){e.g=new nn(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=_t(e.oa);O(t,"RID","rpc"),O(t,"SID",e.J),O(t,"CI",e.N?"0":"1"),O(t,"AID",e.U),an(e,t),O(t,"TYPE","xmlhttp"),e.o&&e.s&&Vr(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=us(_t(t)),n.s=null,n.U=!0,pa(n,e)}g.ab=function(){this.v!=null&&(this.v=null,ds(this),Hr(this),rt(19))};function $n(e){e.v!=null&&(w.clearTimeout(e.v),e.v=null)}function $a(e,t){var n=null;if(e.g==t){$n(e),qr(e),e.g=null;var s=2}else if(ir(e.i,t))n=t.D,Sa(e.i,t),s=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;s=is(),X(s,new ca(s,n,t,r)),fs(e)}else La(e);else if(r=t.o,r==3||r==0&&0<e.I||!(s==1&&kp(e,t)||s==2&&Hr(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),r){case 1:Ot(e,5);break;case 4:Ot(e,10);break;case 3:Ot(e,6);break;default:Ot(e,2)}}}function Fa(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function Ot(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var s=W(e.jb,e);n||(n=new Bt("//www.google.com/images/cleardot.gif"),w.location&&w.location.protocol=="http"||Pn(n,"https"),us(n)),Ap(n.toString(),s)}else rt(2);e.G=0,e.j&&e.j.va(t),Ba(e),Oa(e)}g.jb=function(e){e?(this.h.info("Successfully pinged google.com"),rt(2)):(this.h.info("Failed to ping google.com"),rt(1))};function Ba(e){e.G=0,e.I=-1,e.j&&((Ia(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,_r(e.l),e.l.length=0),e.j.ua())}function Ua(e,t,n){let s=dp(n);if(s.i!="")t&&Ln(s,t+"."+s.i),Mn(s,s.m);else{const r=w.location;s=fp(r.protocol,t?t+"."+r.hostname:r.hostname,+r.port,n)}return e.aa&&Tr(e.aa,function(r,i){O(s,i,r)}),t=e.D,n=e.sa,t&&n&&O(s,t,n),O(s,"VER",e.ma),an(e,s),s}function Va(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new F(new rn({ib:!0})):new F(e.qa),t.L=e.H,t}function ja(){}g=ja.prototype;g.xa=function(){};g.wa=function(){};g.va=function(){};g.ua=function(){};g.Oa=function(){};function Fn(){if(ie&&!(10<=Number(qf)))throw Error("Environmental error: no available transport.")}Fn.prototype.g=function(e,t){return new ht(e,t)};function ht(e,t){z.call(this),this.g=new Ra(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!kn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!kn(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Ee(this)}Y(ht,z);ht.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Nr(W(e.hb,e,t))),rt(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Ua(e,null,e.W),fs(e)};ht.prototype.close=function(){jr(this.g)};ht.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,Fs(this.g,t)}else this.v?(t={},t.__data__=xr(e),Fs(this.g,t)):Fs(this.g,e)};ht.prototype.M=function(){this.g.j=null,delete this.j,jr(this.g),delete this.g,ht.Z.M.call(this)};function Ha(e){Pr.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Y(Ha,Pr);function qa(){Lr.call(this),this.status=1}Y(qa,Lr);function Ee(e){this.g=e}Y(Ee,ja);Ee.prototype.xa=function(){X(this.g,"a")};Ee.prototype.wa=function(e){X(this.g,new Ha(e))};Ee.prototype.va=function(e){X(this.g,new qa(e))};Ee.prototype.ua=function(){X(this.g,"b")};Fn.prototype.createWebChannel=Fn.prototype.g;ht.prototype.send=ht.prototype.u;ht.prototype.open=ht.prototype.m;ht.prototype.close=ht.prototype.close;os.NO_ERROR=0;os.TIMEOUT=8;os.HTTP_ERROR=6;ha.COMPLETE="complete";da.EventType=en;en.OPEN="a";en.CLOSE="b";en.ERROR="c";en.MESSAGE="d";z.prototype.listen=z.prototype.N;F.prototype.listenOnce=F.prototype.O;F.prototype.getLastError=F.prototype.La;F.prototype.getLastErrorCode=F.prototype.Da;F.prototype.getStatus=F.prototype.ba;F.prototype.getResponseJson=F.prototype.Qa;F.prototype.getResponseText=F.prototype.ga;F.prototype.send=F.prototype.ea;var Rp=function(){return new Fn},Op=function(){return is()},Bs=os,Pp=ha,Lp=zt,qi={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Mp=rn,yn=da,$p=F;const zi="@firebase/firestore";/**
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
 */const Ut=new Bo("@firebase/firestore");function Ki(){return Ut.logLevel}function v(e,...t){if(Ut.logLevel<=N.DEBUG){const n=t.map(zr);Ut.debug(`Firestore (${be}): ${e}`,...n)}}function Vt(e,...t){if(Ut.logLevel<=N.ERROR){const n=t.map(zr);Ut.error(`Firestore (${be}): ${e}`,...n)}}function Gi(e,...t){if(Ut.logLevel<=N.WARN){const n=t.map(zr);Ut.warn(`Firestore (${be}): ${e}`,...n)}}function zr(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
 */function D(e="Unexpected state"){const t=`FIRESTORE (${be}) INTERNAL ASSERTION FAILED: `+e;throw Vt(t),new Error(t)}function V(e,t){e||D()}function R(e,t){return e}/**
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
 */class Fp{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Bp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class Up{constructor(t){this.t=t,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const r=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let i=new Lt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Lt,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=i;t.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Lt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(V(typeof s.accessToken=="string"),new Fp(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return V(t===null||typeof t=="string"),new ot(t)}}class Vp{constructor(t,n,s){this.type="FirstParty",this.user=ot.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class jp{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new Vp(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Hp{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qp{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,n){const s=i=>{i.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(V(typeof n.token=="string"),this.p=n.token,new Hp(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function zp(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class za{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=zp(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=t.charAt(r[i]%t.length))}return s}}function k(e,t){return e<t?-1:e>t?1:0}function oe(e,t,n){return e.length===t.length&&e.every((s,r)=>n(s,t[r]))}/**
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
 */class je{constructor(t,n,s){n===void 0?n=0:n>t.length&&D(),s===void 0?s=t.length-n:s>t.length-n&&D(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return je.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof je?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let r=0;r<s;r++){const i=t.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class M extends je{construct(t,n,s){return new M(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new E(p.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new M(n)}static emptyPath(){return new M([])}}const Kp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Z extends je{construct(t,n,s){return new Z(t,n,s)}static isValidIdentifier(t){return Kp.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Z.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Z(["__name__"])}static fromServerFormat(t){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new E(p.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new E(p.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new E(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new E(p.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Z(n)}static emptyPath(){return new Z([])}}/**
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
 */class b{constructor(t){this.path=t}static fromPath(t){return new b(M.fromString(t))}static fromName(t){return new b(M.fromString(t).popFirst(5))}static empty(){return new b(M.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&M.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return M.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new b(new M(t.slice()))}}function Gp(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=U.fromTimestamp(s===1e9?new q(n+1,0):new q(n,s));return new Ct(r,b.empty(),t)}function Wp(e){return new Ct(e.readTime,e.key,-1)}class Ct{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Ct(U.min(),b.empty(),-1)}static max(){return new Ct(U.max(),b.empty(),-1)}}function Xp(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=b.comparator(e.documentKey,t.documentKey),n!==0?n:k(e.largestBatchId,t.largestBatchId))}/**
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
 */const Qp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Yp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Ka(e){if(e.code!==p.FAILED_PRECONDITION||e.message!==Qp)throw e;v("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class d{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&D(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new d((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof d?n:d.resolve(n)}catch(n){return d.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):d.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):d.reject(n)}static resolve(t){return new d((n,s)=>{n(t)})}static reject(t){return new d((n,s)=>{s(t)})}static waitFor(t){return new d((n,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},l=>s(l))}),o=!0,i===r&&n()})}static or(t){let n=d.resolve(!1);for(const s of t)n=n.next(r=>r?d.resolve(r):s());return n}static forEach(t,n){const s=[];return t.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(t,n){return new d((s,r)=>{const i=t.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(t[c]).next(u=>{o[c]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(t,n){return new d((s,r)=>{const i=()=>{t()===!0?n().next(()=>{i()},r):s()};i()})}}function ps(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Ga{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.it(s),this.rt=s=>n.writeSequenceNumber(s))}it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}}/**
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
 */function Wi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ln(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Wa(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */Ga.ot=-1;class ut{constructor(t,n){this.comparator=t,this.root=n||K.EMPTY}insert(t,n){return new ut(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,K.BLACK,null,null))}remove(t){return new ut(this.comparator,this.root.remove(t,this.comparator).copy(null,null,K.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new vn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new vn(this.root,t,this.comparator,!1)}getReverseIterator(){return new vn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new vn(this.root,t,this.comparator,!0)}}class vn{constructor(t,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?s(t.key,n):1,n&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class K{constructor(t,n,s,r,i){this.key=t,this.value=n,this.color=s!=null?s:K.RED,this.left=r!=null?r:K.EMPTY,this.right=i!=null?i:K.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,r,i){return new K(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return K.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return K.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,K.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,K.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw D();const t=this.left.check();if(t!==this.right.check())throw D();return t+(this.isRed()?0:1)}}K.EMPTY=null,K.RED=!0,K.BLACK=!1;K.EMPTY=new class{constructor(){this.size=0}get key(){throw D()}get value(){throw D()}get color(){throw D()}get left(){throw D()}get right(){throw D()}copy(e,t,n,s,r){return this}insert(e,t,n){return new K(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class gt{constructor(t){this.fields=t,t.sort(Z.comparator)}static empty(){return new gt([])}unionWith(t){let n=new it(Z.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new gt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return oe(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Tt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new Tt(n)}static fromUint8Array(t){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(t);return new Tt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return k(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Tt.EMPTY_BYTE_STRING=new Tt("");const Jp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jt(e){if(V(!!e),typeof e=="string"){let t=0;const n=Jp.exec(e);if(V(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:G(e.seconds),nanos:G(e.nanos)}}function G(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function He(e){return typeof e=="string"?Tt.fromBase64String(e):Tt.fromUint8Array(e)}/**
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
 */function Zp(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Bn(e){const t=jt(e.mapValue.fields.__local_write_time__.timestampValue);return new q(t.seconds,t.nanos)}/**
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
 */class tm{constructor(t,n,s,r,i,o,a,l){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class qe{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new qe("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof qe&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */function Kr(e){return e==null}function Un(e){return e===0&&1/e==-1/0}function em(e){return typeof e=="number"&&Number.isInteger(e)&&!Un(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */const wn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ae(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Zp(e)?4:nm(e)?9007199254740991:10:D()}function yt(e,t){if(e===t)return!0;const n=ae(e);if(n!==ae(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Bn(e).isEqual(Bn(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=jt(s.timestampValue),o=jt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return He(s.bytesValue).isEqual(He(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return G(s.geoPointValue.latitude)===G(r.geoPointValue.latitude)&&G(s.geoPointValue.longitude)===G(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return G(s.integerValue)===G(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=G(s.doubleValue),o=G(r.doubleValue);return i===o?Un(i)===Un(o):isNaN(i)&&isNaN(o)}return!1}(e,t);case 9:return oe(e.arrayValue.values||[],t.arrayValue.values||[],yt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Wi(i)!==Wi(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!yt(i[a],o[a])))return!1;return!0}(e,t);default:return D()}}function ze(e,t){return(e.values||[]).find(n=>yt(n,t))!==void 0}function le(e,t){if(e===t)return 0;const n=ae(e),s=ae(t);if(n!==s)return k(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return k(e.booleanValue,t.booleanValue);case 2:return function(r,i){const o=G(r.integerValue||r.doubleValue),a=G(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Qi(e.timestampValue,t.timestampValue);case 4:return Qi(Bn(e),Bn(t));case 5:return k(e.stringValue,t.stringValue);case 6:return function(r,i){const o=He(r),a=He(i);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=k(o[l],a[l]);if(c!==0)return c}return k(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,i){const o=k(G(r.latitude),G(i.latitude));return o!==0?o:k(G(r.longitude),G(i.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=le(o[l],a[l]);if(c)return c}return k(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(r,i){if(r===wn.mapValue&&i===wn.mapValue)return 0;if(r===wn.mapValue)return 1;if(i===wn.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),l=i.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=k(a[u],c[u]);if(h!==0)return h;const m=le(o[a[u]],l[c[u]]);if(m!==0)return m}return k(a.length,c.length)}(e.mapValue,t.mapValue);default:throw D()}}function Qi(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return k(e,t);const n=jt(e),s=jt(t),r=k(n.seconds,s.seconds);return r!==0?r:k(n.nanos,s.nanos)}function Zt(e){return or(e)}function or(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const r=jt(s);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?He(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,b.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=or(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${or(s.fields[a])}`;return i+"}"}(e.mapValue):D();var t,n}function ar(e){return!!e&&"integerValue"in e}function Gr(e){return!!e&&"arrayValue"in e}function Tn(e){return!!e&&"mapValue"in e}function Ne(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return ln(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Ne(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ne(e.arrayValue.values[n]);return t}return Object.assign({},e)}function nm(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class pt{constructor(t){this.value=t}static empty(){return new pt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Tn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ne(n)}setAll(t){let n=Z.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Ne(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(t){const n=this.field(t.popLast());Tn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return yt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=n.mapValue.fields[t.get(s)];Tn(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,s){ln(n,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new pt(Ne(this.value))}}function Xa(e){const t=[];return ln(e.fields,(n,s)=>{const r=new Z([n]);if(Tn(s)){const i=Xa(s.mapValue).fields;if(i.length===0)t.push(r);else for(const o of i)t.push(r.child(o))}else t.push(r)}),new gt(t)}/**
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
 */class sm{constructor(t,n=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ut=null}}function Yi(e,t=null,n=[],s=[],r=null,i=null,o=null){return new sm(e,t,n,s,r,i,o)}function Wr(e){const t=R(e);if(t.ut===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+Zt(r.value);var r}).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Kr(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Zt(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Zt(s)).join(",")),t.ut=n}return t.ut}function rm(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Zt(s.value)}`;var s}).join(", ")}]`),Kr(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Zt(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Zt(n)).join(",")),`Target(${t})`}function Xr(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let r=0;r<e.orderBy.length;r++)if(!dm(e.orderBy[r],t.orderBy[r]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(n=e.filters[r],s=t.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!yt(n.value,s.value))return!1;var n,s;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Zi(e.startAt,t.startAt)&&Zi(e.endAt,t.endAt)}class at extends class{}{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.ct(t,n,s):new im(t,n,s):n==="array-contains"?new lm(t,s):n==="in"?new um(t,s):n==="not-in"?new cm(t,s):n==="array-contains-any"?new hm(t,s):new at(t,n,s)}static ct(t,n,s){return n==="in"?new om(t,s):new am(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.at(le(n,this.value)):n!==null&&ae(this.value)===ae(n)&&this.at(le(n,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return D()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class im extends at{constructor(t,n,s){super(t,n,s),this.key=b.fromName(s.referenceValue)}matches(t){const n=b.comparator(t.key,this.key);return this.at(n)}}class om extends at{constructor(t,n){super(t,"in",n),this.keys=Qa("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class am extends at{constructor(t,n){super(t,"not-in",n),this.keys=Qa("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Qa(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>b.fromName(s.referenceValue))}class lm extends at{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Gr(n)&&ze(n.arrayValue,this.value)}}class um extends at{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&ze(this.value.arrayValue,n)}}class cm extends at{constructor(t,n){super(t,"not-in",n)}matches(t){if(ze(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!ze(this.value.arrayValue,n)}}class hm extends at{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Gr(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ze(this.value.arrayValue,s))}}class Vn{constructor(t,n){this.position=t,this.inclusive=n}}class ke{constructor(t,n="asc"){this.field=t,this.dir=n}}function dm(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Ji(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(i.field.isKeyField()?s=b.comparator(b.fromName(o.referenceValue),n.key):s=le(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Zi(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!yt(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class ms{constructor(t,n=null,s=[],r=[],i=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.lt=null,this.ft=null,this.startAt,this.endAt}}function fm(e,t,n,s,r,i,o,a){return new ms(e,t,n,s,r,i,o,a)}function pm(e){return new ms(e)}function to(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function mm(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function gm(e){for(const t of e.filters)if(t.ht())return t.field;return null}function ym(e){return e.collectionGroup!==null}function Ke(e){const t=R(e);if(t.lt===null){t.lt=[];const n=gm(t),s=mm(t);if(n!==null&&s===null)n.isKeyField()||t.lt.push(new ke(n)),t.lt.push(new ke(Z.keyField(),"asc"));else{let r=!1;for(const i of t.explicitOrderBy)t.lt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.lt.push(new ke(Z.keyField(),i))}}}return t.lt}function ue(e){const t=R(e);if(!t.ft)if(t.limitType==="F")t.ft=Yi(t.path,t.collectionGroup,Ke(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of Ke(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new ke(i.field,o))}const s=t.endAt?new Vn(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Vn(t.startAt.position,t.startAt.inclusive):null;t.ft=Yi(t.path,t.collectionGroup,n,t.filters,t.limit,s,r)}return t.ft}function lr(e,t,n){return new ms(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ya(e,t){return Xr(ue(e),ue(t))&&e.limitType===t.limitType}function Ja(e){return`${Wr(ue(e))}|lt:${e.limitType}`}function eo(e){return`Query(target=${rm(ue(e))}; limitType=${e.limitType})`}function Za(e,t){return t.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):b.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(e,t)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Ji(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Ke(n),s)||n.endAt&&!function(r,i,o){const a=Ji(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Ke(n),s))}(e,t)}function vm(e){return(t,n)=>{let s=!1;for(const r of Ke(e)){const i=wm(r,t,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function wm(e,t,n){const s=e.field.isKeyField()?b.comparator(t.key,n.key):function(r,i,o){const a=i.data.field(r),l=o.data.field(r);return a!==null&&l!==null?le(a,l):D()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return D()}}/**
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
 */function tl(e,t){if(e.dt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Un(t)?"-0":t}}function el(e){return{integerValue:""+e}}function Em(e,t){return em(t)?el(t):tl(e,t)}/**
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
 */class gs{constructor(){this._=void 0}}function bm(e,t,n){return e instanceof jn?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,t):e instanceof Ge?sl(e,t):e instanceof We?rl(e,t):function(s,r){const i=nl(s,r),o=no(i)+no(s._t);return ar(i)&&ar(s._t)?el(o):tl(s.wt,o)}(e,t)}function _m(e,t,n){return e instanceof Ge?sl(e,t):e instanceof We?rl(e,t):n}function nl(e,t){return e instanceof Hn?ar(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class jn extends gs{}class Ge extends gs{constructor(t){super(),this.elements=t}}function sl(e,t){const n=il(t);for(const s of e.elements)n.some(r=>yt(r,s))||n.push(s);return{arrayValue:{values:n}}}class We extends gs{constructor(t){super(),this.elements=t}}function rl(e,t){let n=il(t);for(const s of e.elements)n=n.filter(r=>!yt(r,s));return{arrayValue:{values:n}}}class Hn extends gs{constructor(t,n){super(),this.wt=t,this._t=n}}function no(e){return G(e.integerValue||e.doubleValue)}function il(e){return Gr(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Tm(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof Ge&&s instanceof Ge||n instanceof We&&s instanceof We?oe(n.elements,s.elements,yt):n instanceof Hn&&s instanceof Hn?yt(n._t,s._t):n instanceof jn&&s instanceof jn}(e.transform,t.transform)}class Am{constructor(t,n){this.version=t,this.transformResults=n}}class Et{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Et}static exists(t){return new Et(void 0,t)}static updateTime(t){return new Et(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function An(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class ys{}function ol(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new ll(e.key,Et.none()):new un(e.key,e.data,Et.none());{const n=e.data,s=pt.empty();let r=new it(Z.comparator);for(let i of t.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Kt(e.key,s,new gt(r.toArray()),Et.none())}}function Sm(e,t,n){e instanceof un?function(s,r,i){const o=s.value.clone(),a=ro(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Kt?function(s,r,i){if(!An(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=ro(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(al(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(e,t,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,n)}function Re(e,t,n,s){return e instanceof un?function(r,i,o,a){if(!An(r.precondition,i))return o;const l=r.value.clone(),c=io(r.fieldTransforms,a,i);return l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),null}(e,t,n,s):e instanceof Kt?function(r,i,o,a){if(!An(r.precondition,i))return o;const l=io(r.fieldTransforms,a,i),c=i.data;return c.setAll(al(r)),c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(e,t,n,s):function(r,i,o){return An(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(e,t,n)}function Im(e,t){let n=null;for(const s of e.fieldTransforms){const r=t.data.field(s.field),i=nl(s.transform,r||null);i!=null&&(n===null&&(n=pt.empty()),n.set(s.field,i))}return n||null}function so(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&oe(n,s,(r,i)=>Tm(r,i))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class un extends ys{constructor(t,n,s,r=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Kt extends ys{constructor(t,n,s,r,i=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function al(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function ro(e,t,n){const s=new Map;V(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,_m(o,a,n[r]))}return s}function io(e,t,n){const s=new Map;for(const r of e){const i=r.transform,o=n.data.field(r.field);s.set(r.field,bm(i,o,t))}return s}class ll extends ys{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Cm extends ys{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */var $,I;function Dm(e){switch(e){default:return D();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function xm(e){if(e===void 0)return Vt("GRPC error has no .code"),p.UNKNOWN;switch(e){case $.OK:return p.OK;case $.CANCELLED:return p.CANCELLED;case $.UNKNOWN:return p.UNKNOWN;case $.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case $.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case $.INTERNAL:return p.INTERNAL;case $.UNAVAILABLE:return p.UNAVAILABLE;case $.UNAUTHENTICATED:return p.UNAUTHENTICATED;case $.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case $.NOT_FOUND:return p.NOT_FOUND;case $.ALREADY_EXISTS:return p.ALREADY_EXISTS;case $.PERMISSION_DENIED:return p.PERMISSION_DENIED;case $.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case $.ABORTED:return p.ABORTED;case $.OUT_OF_RANGE:return p.OUT_OF_RANGE;case $.UNIMPLEMENTED:return p.UNIMPLEMENTED;case $.DATA_LOSS:return p.DATA_LOSS;default:return D()}}(I=$||($={}))[I.OK=0]="OK",I[I.CANCELLED=1]="CANCELLED",I[I.UNKNOWN=2]="UNKNOWN",I[I.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",I[I.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",I[I.NOT_FOUND=5]="NOT_FOUND",I[I.ALREADY_EXISTS=6]="ALREADY_EXISTS",I[I.PERMISSION_DENIED=7]="PERMISSION_DENIED",I[I.UNAUTHENTICATED=16]="UNAUTHENTICATED",I[I.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",I[I.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",I[I.ABORTED=10]="ABORTED",I[I.OUT_OF_RANGE=11]="OUT_OF_RANGE",I[I.UNIMPLEMENTED=12]="UNIMPLEMENTED",I[I.INTERNAL=13]="INTERNAL",I[I.UNAVAILABLE=14]="UNAVAILABLE",I[I.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class _e{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){ln(this.inner,(n,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return Wa(this.inner)}size(){return this.innerSize}}/**
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
 */const Nm=new ut(b.comparator);function qn(){return Nm}const ul=new ut(b.comparator);function En(...e){let t=ul;for(const n of e)t=t.insert(n.key,n);return t}function cl(e){let t=ul;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Pt(){return Oe()}function hl(){return Oe()}function Oe(){return new _e(e=>e.toString(),(e,t)=>e.isEqual(t))}const km=new ut(b.comparator),Rm=new it(b.comparator);function J(...e){let t=Rm;for(const n of e)t=t.add(n);return t}const Om=new it(k);function Pm(){return Om}class Lm{constructor(t,n){this.databaseId=t,this.dt=n}}function ur(e,t){return e.dt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Mm(e,t){return e.dt?t.toBase64():t.toUint8Array()}function $m(e,t){return ur(e,t.toTimestamp())}function te(e){return V(!!e),U.fromTimestamp(function(t){const n=jt(t);return new q(n.seconds,n.nanos)}(e))}function dl(e,t){return function(n){return new M(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Fm(e){const t=M.fromString(e);return V(Wm(t)),t}function cr(e,t){return dl(e.databaseId,t.path)}function Bm(e){const t=Fm(e);return t.length===4?M.emptyPath():Vm(t)}function Um(e){return new M(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Vm(e){return V(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function oo(e,t,n){return{name:cr(e,t),fields:n.value.mapValue.fields}}function jm(e,t){let n;if(t instanceof un)n={update:oo(e,t.key,t.value)};else if(t instanceof ll)n={delete:cr(e,t.key)};else if(t instanceof Kt)n={update:oo(e,t.key,t.data),updateMask:Gm(t.fieldMask)};else{if(!(t instanceof Cm))return D();n={verify:cr(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof jn)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ge)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof We)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Hn)return{fieldPath:i.field.canonicalString(),increment:o._t};throw D()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:$m(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:D()}(e,t.precondition)),n}function Hm(e,t){return e&&e.length>0?(V(t!==void 0),e.map(n=>function(s,r){let i=s.updateTime?te(s.updateTime):te(r);return i.isEqual(U.min())&&(i=te(r)),new Am(i,s.transformResults||[])}(n,t))):[]}function qm(e){let t=Bm(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){V(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:t=t.child(u.collectionId)}let i=[];n.where&&(i=fl(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new ke(Yt(h.field),function(m){switch(m){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Kr(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,m=u.values||[];return new Vn(m,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,m=u.values||[];return new Vn(m,h)}(n.endAt)),fm(t,r,o,i,a,"F",l,c)}function fl(e){return e?e.unaryFilter!==void 0?[Km(e)]:e.fieldFilter!==void 0?[zm(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>fl(t)).reduce((t,n)=>t.concat(n)):D():[]}function Yt(e){return Z.fromServerFormat(e.fieldPath)}function zm(e){return at.create(Yt(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return D()}}(e.fieldFilter.op),e.fieldFilter.value)}function Km(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Yt(e.unaryFilter.field);return at.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Yt(e.unaryFilter.field);return at.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Yt(e.unaryFilter.field);return at.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Yt(e.unaryFilter.field);return at.create(r,"!=",{nullValue:"NULL_VALUE"});default:return D()}}function Gm(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Wm(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class Xm{constructor(t,n,s,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&Sm(i,t,s[r])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Re(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Re(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=hl();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const l=ol(o,a);l!==null&&s.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(U.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),J())}isEqual(t){return this.batchId===t.batchId&&oe(this.mutations,t.mutations,(n,s)=>so(n,s))&&oe(this.baseMutations,t.baseMutations,(n,s)=>so(n,s))}}class Qr{constructor(t,n,s,r){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(t,n,s){V(t.mutations.length===s.length);let r=km;const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Qr(t,n,s,r)}}/**
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
 */class Qm{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Ym{constructor(t){this.ne=t}}function Jm(e){const t=qm({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?lr(t,t.limit,"L"):t}/**
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
 */class Zm{constructor(){this.ze=new tg}addToCollectionParentIndex(t,n){return this.ze.add(n),d.resolve()}getCollectionParents(t,n){return d.resolve(this.ze.getEntries(n))}addFieldIndex(t,n){return d.resolve()}deleteFieldIndex(t,n){return d.resolve()}getDocumentsMatchingTarget(t,n){return d.resolve(null)}getIndexType(t,n){return d.resolve(0)}getFieldIndexes(t,n){return d.resolve([])}getNextCollectionGroupToUpdate(t){return d.resolve(null)}getMinOffset(t,n){return d.resolve(Ct.min())}getMinOffsetFromCollectionGroup(t,n){return d.resolve(Ct.min())}updateCollectionGroup(t,n,s){return d.resolve()}updateIndexEntries(t,n){return d.resolve()}}class tg{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n]||new it(M.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(t){return(this.index[t]||new it(M.comparator)).toArray()}}/**
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
 */class ce{constructor(t){this.En=t}next(){return this.En+=2,this.En}static An(){return new ce(0)}static Rn(){return new ce(-1)}}/**
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
 */class eg{constructor(){this.changes=new _e(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,dt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?d.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class ng{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class sg{constructor(t,n,s,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(s=r,this.getBaseDocument(t,n,s))).next(r=>(s!==null&&Re(s.mutation,r,gt.empty(),q.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,J()).next(()=>s))}getLocalViewOfDocuments(t,n,s=J()){const r=Pt();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,s).next(i=>{let o=En();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=Pt();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,J()))}populateOverlays(t,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,r){let i=qn();const o=Oe(),a=Oe();return n.forEach((l,c)=>{const u=s.get(c.key);r.has(c.key)&&(u===void 0||u.mutation instanceof Kt)?i=i.insert(c.key,c):u!==void 0&&(o.set(c.key,u.mutation.getFieldMask()),Re(u.mutation,c,u.mutation.getFieldMask(),q.now()))}),this.recalculateAndSaveOverlays(t,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new ng(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const s=Oe();let r=new ut((o,a)=>o-a),i=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||gt.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(r.get(a.batchId)||J()).add(l);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=hl();u.forEach(m=>{if(!i.has(m)){const y=ol(n.get(m),s.get(m));y!==null&&h.set(m,y),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,h))}return d.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(r){return b.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):ym(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,r-i.size):d.resolve(Pt());let a=-1,l=i;return o.next(c=>d.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?d.resolve():this.getBaseDocument(t,u,h).next(m=>{l=l.insert(u,m)}))).next(()=>this.populateOverlays(t,c,i)).next(()=>this.computeViews(t,l,c,J())).next(u=>({batchId:a,changes:cl(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new b(n)).next(s=>{let r=En();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const r=n.collectionGroup;let i=En();return this.indexManager.getCollectionParents(t,r).next(o=>d.forEach(o,a=>{const l=function(c,u){return new ms(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(t,l,s).next(c=>{c.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(t,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId))).next(i=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,dt.newInvalidDocument(c)))});let o=En();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&Re(c.mutation,l,gt.empty(),q.now()),Za(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(t,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(t,n):d.resolve(dt.newInvalidDocument(n))}}/**
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
 */class rg{constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(t,n){return d.resolve(this.Jn.get(n))}saveBundleMetadata(t,n){var s;return this.Jn.set(n.id,{id:(s=n).id,version:s.version,createTime:te(s.createTime)}),d.resolve()}getNamedQuery(t,n){return d.resolve(this.Yn.get(n))}saveNamedQuery(t,n){return this.Yn.set(n.name,function(s){return{name:s.name,query:Jm(s.bundledQuery),readTime:te(s.readTime)}}(n)),d.resolve()}}/**
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
 */class ig{constructor(){this.overlays=new ut(b.comparator),this.Xn=new Map}getOverlay(t,n){return d.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Pt();return d.forEach(n,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((r,i)=>{this.ie(t,n,i)}),d.resolve()}removeOverlaysForBatchId(t,n,s){const r=this.Xn.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Xn.delete(s)),d.resolve()}getOverlaysForCollection(t,n,s){const r=Pt(),i=n.length+1,o=new b(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>s&&r.set(l.getKey(),l)}return d.resolve(r)}getOverlaysForCollectionGroup(t,n,s,r){let i=new ut((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=i.get(c.largestBatchId);u===null&&(u=Pt(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Pt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=r)););return d.resolve(a)}ie(t,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Xn.get(r.largestBatchId).delete(s.key);this.Xn.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Qm(n,s));let i=this.Xn.get(n);i===void 0&&(i=J(),this.Xn.set(n,i)),this.Xn.set(n,i.add(s.key))}}/**
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
 */class og{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new it(H.ts)}checkEmpty(t){return d.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,r){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Xm(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ds=this.ds.add(new H(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return d.resolve(o)}lookupMutationBatch(t,n){return d.resolve(this._s(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,r=this.ws(s),i=r<0?0:r;return d.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return d.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(t){return d.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new H(n,0),r=new H(n,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([s,r],o=>{const a=this._s(o.ls);i.push(a)}),d.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new it(k);return n.forEach(r=>{const i=new H(r,0),o=new H(r,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{s=s.add(a.ls)})}),d.resolve(this.gs(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,r=s.length+1;let i=s;b.isDocumentKey(i)||(i=i.child(""));const o=new H(new b(i),0);let a=new it(k);return this.ds.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===r&&(a=a.add(l.ls)),!0)},o),d.resolve(this.gs(a))}gs(t){const n=[];return t.forEach(s=>{const r=this._s(s);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){V(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ds;return d.forEach(n.mutations,r=>{const i=new H(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.ds=s})}In(t){}containsKey(t,n){const s=new H(n,0),r=this.ds.firstAfterOrEqual(s);return d.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,d.resolve()}ys(t,n){return this.ws(t)}ws(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}_s(t){const n=this.ws(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class ag{constructor(t){this.ps=t,this.docs=new ut(b.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.ps(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return d.resolve(s?s.document.mutableCopy():dt.newInvalidDocument(n))}getEntries(t,n){let s=qn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():dt.newInvalidDocument(r))}),d.resolve(s)}getAllFromCollection(t,n,s){let r=qn();const i=new b(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Xp(Wp(l),s)<=0||(r=r.insert(l.key,l.mutableCopy()))}return d.resolve(r)}getAllFromCollectionGroup(t,n,s,r){D()}Is(t,n){return d.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new lg(this)}getSize(t){return d.resolve(this.size)}}class lg extends eg{constructor(t){super(),this.zn=t}applyChanges(t){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.zn.addEntry(t,r)):this.zn.removeEntry(s)}),d.waitFor(n)}getFromCache(t,n){return this.zn.getEntry(t,n)}getAllFromCache(t,n){return this.zn.getEntries(t,n)}}/**
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
 */class ug{constructor(t){this.persistence=t,this.Ts=new _e(n=>Wr(n),Xr),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Es=0,this.As=new Yr,this.targetCount=0,this.Rs=ce.An()}forEachTarget(t,n){return this.Ts.forEach((s,r)=>n(r)),d.resolve()}getLastRemoteSnapshotVersion(t){return d.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return d.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),d.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Es&&(this.Es=n),d.resolve()}vn(t){this.Ts.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Rs=new ce(n),this.highestTargetId=n),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,n){return this.vn(n),this.targetCount+=1,d.resolve()}updateTargetData(t,n){return this.vn(n),d.resolve()}removeTargetData(t,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,d.resolve()}removeTargets(t,n,s){let r=0;const i=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Ts.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),d.waitFor(i).next(()=>r)}getTargetCount(t){return d.resolve(this.targetCount)}getTargetData(t,n){const s=this.Ts.get(n)||null;return d.resolve(s)}addMatchingKeys(t,n,s){return this.As.ss(n,s),d.resolve()}removeMatchingKeys(t,n,s){this.As.os(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),d.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.As.us(n),d.resolve()}getMatchingKeysForTargetId(t,n){const s=this.As.hs(n);return d.resolve(s)}containsKey(t,n){return d.resolve(this.As.containsKey(n))}}/**
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
 */class cg{constructor(t,n){this.bs={},this.overlays={},this.Ps=new Ga(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new ug(this),this.indexManager=new Zm,this.remoteDocumentCache=function(s){return new ag(s)}(s=>this.referenceDelegate.Ss(s)),this.wt=new Ym(n),this.Ds=new rg(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new ig,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.bs[t.toKey()];return s||(s=new og(n,this.referenceDelegate),this.bs[t.toKey()]=s),s}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,n,s){v("MemoryPersistence","Starting transaction:",t);const r=new hg(this.Ps.next());return this.referenceDelegate.Cs(),s(r).next(i=>this.referenceDelegate.xs(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ns(t,n){return d.or(Object.values(this.bs).map(s=>()=>s.containsKey(t,n)))}}class hg extends Yp{constructor(t){super(),this.currentSequenceNumber=t}}class Jr{constructor(t){this.persistence=t,this.ks=new Yr,this.Ms=null}static Os(t){return new Jr(t)}get Fs(){if(this.Ms)return this.Ms;throw D()}addReference(t,n,s){return this.ks.addReference(s,n),this.Fs.delete(s.toString()),d.resolve()}removeReference(t,n,s){return this.ks.removeReference(s,n),this.Fs.add(s.toString()),d.resolve()}markPotentiallyOrphaned(t,n){return this.Fs.add(n.toString()),d.resolve()}removeTarget(t,n){this.ks.us(n.targetId).forEach(r=>this.Fs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(i=>this.Fs.add(i.toString()))}).next(()=>s.removeTargetData(t,n))}Cs(){this.Ms=new Set}xs(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return d.forEach(this.Fs,s=>{const r=b.fromPath(s);return this.$s(t,r).next(i=>{i||n.removeEntry(r,U.min())})}).next(()=>(this.Ms=null,n.apply(t)))}updateLimboDocument(t,n){return this.$s(t,n).next(s=>{s?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(t){return 0}$s(t,n){return d.or([()=>d.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ns(t,n)])}}/**
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
 */class dg{constructor(){this.Si=!1}initialize(t,n){this.Di=t,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(t,n,s,r){return this.Ci(t,n).next(i=>i||this.xi(t,n,r,s)).next(i=>i||this.Ni(t,n))}Ci(t,n){if(to(n))return d.resolve(null);let s=ue(n);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=lr(n,null,"F"),s=ue(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=J(...i);return this.Di.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(l=>{const c=this.ki(n,a);return this.Mi(n,c,o,l.readTime)?this.Ci(t,lr(n,null,"F")):this.Oi(t,c,n,l)}))})))}xi(t,n,s,r){return to(n)||r.isEqual(U.min())?this.Ni(t,n):this.Di.getDocuments(t,s).next(i=>{const o=this.ki(n,i);return this.Mi(n,o,s,r)?this.Ni(t,n):(Ki()<=N.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),eo(n)),this.Oi(t,o,n,Gp(r,-1)))})}ki(t,n){let s=new it(vm(t));return n.forEach((r,i)=>{Za(t,i)&&(s=s.add(i))}),s}Mi(t,n,s,r){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ni(t,n){return Ki()<=N.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",eo(n)),this.Di.getDocumentsMatchingQuery(t,n,Ct.min())}Oi(t,n,s,r){return this.Di.getDocumentsMatchingQuery(t,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class fg{constructor(t,n,s,r){this.persistence=t,this.Fi=n,this.wt=r,this.$i=new ut(k),this.Bi=new _e(i=>Wr(i),Xr),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(s)}qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new sg(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.$i))}}function pg(e,t,n,s){return new fg(e,t,n,s)}async function pl(e,t){const n=R(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.qi(t),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let l=J();for(const c of r){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({Ki:c,removedBatchIds:o,addedBatchIds:a}))})})}function mg(e,t){const n=R(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=t.batch.keys(),i=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let m=d.resolve();return h.forEach(y=>{m=m.next(()=>c.getEntry(a,y)).next(_=>{const x=l.docVersions.get(y);V(x!==null),_.version.compareTo(x)<0&&(u.applyToRemoteDocument(_,l),_.isValidDocument()&&(_.setReadTime(l.commitVersion),c.addEntry(_)))})}),m.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,t,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=J();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,r))})}function gg(e){const t=R(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Vs.getLastRemoteSnapshotVersion(n))}function yg(e,t){const n=R(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}class ao{constructor(){this.activeTargetIds=Pm()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class vg{constructor(){this.Fr=new ao,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,n,s){this.$r[t]=n}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new ao,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class wg{Br(t){}shutdown(){}}/**
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
 */const Eg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class bg{constructor(t){this.jr=t.jr,this.Wr=t.Wr}zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}}/**
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
 */class _g extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.so=n+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,n,s,r,i){const o=this.oo(t,n);v("RestConnection","Sending: ",o,s);const a={};return this.uo(a,r,i),this.co(t,o,a,s).then(l=>(v("RestConnection","Received: ",l),l),l=>{throw Gi("RestConnection",`${t} failed with error: `,l,"url: ",o,"request:",s),l})}ao(t,n,s,r,i,o){return this.ro(t,n,s,r,i)}uo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+be,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>t[i]=r),s&&s.headers.forEach((r,i)=>t[i]=r)}oo(t,n){const s=Eg[t];return`${this.so}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,n,s,r){return new Promise((i,o)=>{const a=new $p;a.listenOnce(Pp.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Bs.NO_ERROR:const c=a.getResponseJson();v("Connection","XHR received:",JSON.stringify(c)),i(c);break;case Bs.TIMEOUT:v("Connection",'RPC "'+t+'" timed out'),o(new E(p.DEADLINE_EXCEEDED,"Request time out"));break;case Bs.HTTP_ERROR:const u=a.getStatus();if(v("Connection",'RPC "'+t+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const m=function(y){const _=y.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(_)>=0?_:p.UNKNOWN}(h.status);o(new E(m,h.message))}else o(new E(p.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new E(p.UNAVAILABLE,"Connection failed."));break;default:D()}}finally{v("Connection",'RPC "'+t+'" completed.')}});const l=JSON.stringify(r);a.send(n,"POST",l,s,15)})}ho(t,n,s){const r=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Rp(),o=Op(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Mp({})),this.uo(a.initMessageHeaders,n,s),cd()||dd()||fd()||pd()||md()||hd()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=r.join("");v("Connection","Creating WebChannel: "+l,a);const c=i.createWebChannel(l,a);let u=!1,h=!1;const m=new bg({jr:_=>{h?v("Connection","Not sending because WebChannel is closed:",_):(u||(v("Connection","Opening WebChannel transport."),c.open(),u=!0),v("Connection","WebChannel sending:",_),c.send(_))},Wr:()=>c.close()}),y=(_,x,T)=>{_.listen(x,S=>{try{T(S)}catch(P){setTimeout(()=>{throw P},0)}})};return y(c,yn.EventType.OPEN,()=>{h||v("Connection","WebChannel transport opened.")}),y(c,yn.EventType.CLOSE,()=>{h||(h=!0,v("Connection","WebChannel transport closed"),m.eo())}),y(c,yn.EventType.ERROR,_=>{h||(h=!0,Gi("Connection","WebChannel transport errored:",_),m.eo(new E(p.UNAVAILABLE,"The operation could not be completed")))}),y(c,yn.EventType.MESSAGE,_=>{var x;if(!h){const T=_.data[0];V(!!T);const S=T,P=S.error||((x=S[0])===null||x===void 0?void 0:x.error);if(P){v("Connection","WebChannel received error:",P);const mt=P.status;let Ae=function(Ml){const ii=$[Ml];if(ii!==void 0)return xm(ii)}(mt),Gt=P.message;Ae===void 0&&(Ae=p.INTERNAL,Gt="Unknown error status: "+mt+" with message "+P.message),h=!0,m.eo(new E(Ae,Gt)),c.close()}else v("Connection","WebChannel received:",T),m.no(T)}}),y(o,Lp.STAT_EVENT,_=>{_.stat===qi.PROXY?v("Connection","Detected buffering proxy"):_.stat===qi.NOPROXY&&v("Connection","Detected no buffering proxy")}),setTimeout(()=>{m.Zr()},0),m}}function Us(){return typeof document!="undefined"?document:null}/**
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
 */function vs(e){return new Lm(e,!0)}class ml{constructor(t,n,s=1e3,r=1.5,i=6e4){this.js=t,this.timerId=n,this.lo=s,this.fo=r,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const n=Math.floor(this.wo+this.To()),s=Math.max(0,Date.now()-this.yo),r=Math.max(0,n-s);r>0&&v("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,()=>(this.yo=Date.now(),t())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
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
 */class Tg{constructor(t,n,s,r,i,o,a,l){this.js=t,this.Ao=s,this.Ro=r,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new ml(t,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(t){this.Fo(),this.stream.send(t)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,t!==4?this.So.reset():n&&n.code===p.RESOURCE_EXHAUSTED?(Vt(n.toString()),Vt("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Po===n&&this.Uo(s,r)},s=>{t(()=>{const r=new E(p.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(r)})})}Uo(t,n){const s=this.Lo(this.Po);this.stream=this.Ko(t,n),this.stream.zr(()=>{s(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(r=>{s(()=>this.qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(t){return v("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return n=>{this.js.enqueueAndForget(()=>this.Po===t?n():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ag extends Tg{constructor(t,n,s,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.wt=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(t,n){return this.bo.ho("Write",t,n)}onMessage(t){if(V(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const n=Hm(t.writeResults,t.commitTime),s=te(t.commitTime);return this.listener.Jo(s,n)}return V(!t.writeResults||t.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=Um(this.wt),this.Oo(t)}Ho(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>jm(this.wt,s))};this.Oo(n)}}/**
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
 */class Sg extends class{}{constructor(t,n,s,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.bo=s,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new E(p.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.ro(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new E(p.UNKNOWN,r.toString())})}ao(t,n,s,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.bo.ao(t,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new E(p.UNKNOWN,i.toString())})}terminate(){this.Zo=!0}}class Ig{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(t){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,t==="Online"&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Vt(n),this.su=!1):v("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
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
 */class Cg{constructor(t,n,s,r,i){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br(o=>{s.enqueueAndForget(async()=>{hn(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=R(a);l.lu.add(4),await cn(l),l._u.set("Unknown"),l.lu.delete(4),await ws(l)}(this))})}),this._u=new Ig(s,r)}}async function ws(e){if(hn(e))for(const t of e.fu)await t(!0)}async function cn(e){for(const t of e.fu)await t(!1)}function hn(e){return R(e).lu.size===0}async function gl(e,t,n){if(!ps(t))throw t;e.lu.add(1),await cn(e),e._u.set("Offline"),n||(n=()=>gg(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await n(),e.lu.delete(1),await ws(e)})}function yl(e,t){return t().catch(n=>gl(e,n,t))}async function Es(e){const t=R(e),n=Dt(t);let s=t.au.length>0?t.au[t.au.length-1].batchId:-1;for(;Dg(t);)try{const r=await yg(t.localStore,s);if(r===null){t.au.length===0&&n.ko();break}s=r.batchId,xg(t,r)}catch(r){await gl(t,r)}vl(t)&&wl(t)}function Dg(e){return hn(e)&&e.au.length<10}function xg(e,t){e.au.push(t);const n=Dt(e);n.Co()&&n.zo&&n.Ho(t.mutations)}function vl(e){return hn(e)&&!Dt(e).Do()&&e.au.length>0}function wl(e){Dt(e).start()}async function Ng(e){Dt(e).Xo()}async function kg(e){const t=Dt(e);for(const n of e.au)t.Ho(n.mutations)}async function Rg(e,t,n){const s=e.au.shift(),r=Qr.from(s,t,n);await yl(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await Es(e)}async function Og(e,t){t&&Dt(e).zo&&await async function(n,s){if(r=s.code,Dm(r)&&r!==p.ABORTED){const i=n.au.shift();Dt(n).No(),await yl(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Es(n)}var r}(e,t),vl(e)&&wl(e)}async function uo(e,t){const n=R(e);n.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const s=hn(n);n.lu.add(3),await cn(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.lu.delete(3),await ws(n)}async function Pg(e,t){const n=R(e);t?(n.lu.delete(2),await ws(n)):t||(n.lu.add(2),await cn(n),n._u.set("Unknown"))}function Dt(e){return e.gu||(e.gu=function(t,n,s){const r=R(t);return r.tu(),new Ag(n,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,s)}(e.datastore,e.asyncQueue,{zr:Ng.bind(null,e),Jr:Og.bind(null,e),Yo:kg.bind(null,e),Jo:Rg.bind(null,e)}),e.fu.push(async t=>{t?(e.gu.No(),await Es(e)):(await e.gu.stop(),e.au.length>0&&(v("RemoteStore",`Stopping write stream with ${e.au.length} pending writes`),e.au=[]))})),e.gu}/**
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
 */class ti{constructor(t,n,s,r,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Lt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,r,i){const o=Date.now()+s,a=new ti(t,n,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new E(p.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function El(e,t){if(Vt("AsyncQueue",`${t}: ${e}`),ps(e))return new E(p.UNAVAILABLE,`${t}: ${e}`);throw e}class Lg{constructor(){this.queries=new _e(t=>Ja(t),Ya),this.onlineState="Unknown",this.Tu=new Set}}function Mg(e){e.Tu.forEach(t=>{t.next()})}class $g{constructor(t,n,s,r,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new _e(a=>Ja(a),Ya),this.ec=new Map,this.nc=new Set,this.sc=new ut(b.comparator),this.ic=new Map,this.rc=new Yr,this.oc={},this.uc=new Map,this.cc=ce.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function Fg(e,t,n){const s=jg(e);try{const r=await function(i,o){const a=R(i),l=q.now(),c=o.reduce((m,y)=>m.add(y.key),J());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",m=>{let y=qn(),_=J();return a.Ui.getEntries(m,c).next(x=>{y=x,y.forEach((T,S)=>{S.isValidDocument()||(_=_.add(T))})}).next(()=>a.localDocuments.getOverlayedDocuments(m,y)).next(x=>{u=x;const T=[];for(const S of o){const P=Im(S,u.get(S.key).overlayedDocument);P!=null&&T.push(new Kt(S.key,P,Xa(P.value.mapValue),Et.exists(!0)))}return a.mutationQueue.addMutationBatch(m,l,T,o)}).next(x=>{h=x;const T=x.applyToLocalDocumentSet(u,_);return a.documentOverlayCache.saveOverlays(m,x.batchId,T)})}).then(()=>({batchId:h.batchId,changes:cl(u)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let l=i.oc[i.currentUser.toKey()];l||(l=new ut(k)),l=l.insert(o,a),i.oc[i.currentUser.toKey()]=l}(s,r.batchId,n),await bs(s,r.changes),await Es(s.remoteStore)}catch(r){const i=El(r,"Failed to persist write");n.reject(i)}}function co(e,t,n){const s=R(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.tc.forEach((i,o)=>{const a=o.view.Eu(t);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=R(i);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Eu(o)&&(l=!0)}),l&&Mg(a)}(s.eventManager,t),r.length&&s.Zu.Go(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Bg(e,t){const n=R(e),s=t.batch.batchId;try{const r=await mg(n.localStore,t);_l(n,s,null),bl(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await bs(n,r)}catch(r){await Ka(r)}}async function Ug(e,t,n){const s=R(e);try{const r=await function(i,o){const a=R(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(V(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,t);_l(s,t,n),bl(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await bs(s,r)}catch(r){await Ka(r)}}function bl(e,t){(e.uc.get(t)||[]).forEach(n=>{n.resolve()}),e.uc.delete(t)}function _l(e,t,n){const s=R(e);let r=s.oc[s.currentUser.toKey()];if(r){const i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),s.oc[s.currentUser.toKey()]=r}}async function bs(e,t,n){const s=R(e),r=[],i=[],o=[];s.tc.isEmpty()||(s.tc.forEach((a,l)=>{o.push(s.hc(l,t,n).then(c=>{if(c){s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c.fromCache?"not-current":"current"),r.push(c);const u=Zr.Vi(l.targetId,c);i.push(u)}}))}),await Promise.all(o),s.Zu.Go(r),await async function(a,l){const c=R(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>d.forEach(l,h=>d.forEach(h.Pi,m=>c.persistence.referenceDelegate.addReference(u,h.targetId,m)).next(()=>d.forEach(h.vi,m=>c.persistence.referenceDelegate.removeReference(u,h.targetId,m)))))}catch(u){if(!ps(u))throw u;v("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const m=c.$i.get(h),y=m.snapshotVersion,_=m.withLastLimboFreeSnapshotVersion(y);c.$i=c.$i.insert(h,_)}}}(s.localStore,i))}async function Vg(e,t){const n=R(e);if(!n.currentUser.isEqual(t)){v("SyncEngine","User change. New user:",t.toKey());const s=await pl(n.localStore,t);n.currentUser=t,function(r,i){r.uc.forEach(o=>{o.forEach(a=>{a.reject(new E(p.CANCELLED,i))})}),r.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await bs(n,s.Ki)}}function jg(e){const t=R(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Bg.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ug.bind(null,t),t}class Hg{constructor(){this.synchronizeTabs=!1}async initialize(t){this.wt=vs(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,n){return null}gc(t,n){return null}wc(t){return pg(this.persistence,new dg,t.initialUser,this.wt)}_c(t){return new cg(Jr.Os,this.wt)}dc(t){return new vg}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class qg{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>co(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Vg.bind(null,this.syncEngine),await Pg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Lg}createDatastore(t){const n=vs(t.databaseInfo.databaseId),s=(r=t.databaseInfo,new _g(r));var r;return function(i,o,a,l){return new Sg(i,o,a,l)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,r=t.asyncQueue,i=a=>co(this.syncEngine,a,0),o=lo.V()?new lo:new wg,new Cg(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(t,n){return function(s,r,i,o,a,l,c){const u=new $g(s,r,i,o,a,l);return c&&(u.ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=R(t);v("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await cn(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
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
 */class zg{constructor(t,n,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=ot.UNAUTHENTICATED,this.clientId=za.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{v("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(v("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Lt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=El(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Kg(e,t){e.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async r=>{s.isEqual(r)||(await pl(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function Gg(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Wg(e);v("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(r=>uo(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>uo(t.remoteStore,i)),e.onlineComponents=t}async function Wg(e){return e.offlineComponents||(v("FirestoreClient","Using default OfflineComponentProvider"),await Kg(e,new Hg)),e.offlineComponents}async function Xg(e){return e.onlineComponents||(v("FirestoreClient","Using default OnlineComponentProvider"),await Gg(e,new qg)),e.onlineComponents}function Qg(e){return Xg(e).then(t=>t.syncEngine)}const ho=new Map;/**
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
 */function Tl(e,t,n){if(!n)throw new E(p.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Yg(e,t,n,s){if(t===!0&&s===!0)throw new E(p.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function fo(e){if(!b.isDocumentKey(e))throw new E(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function po(e){if(b.isDocumentKey(e))throw new E(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ei(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":D()}function Jg(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new E(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ei(e);throw new E(p.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class mo{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new E(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new E(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Yg("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class ni{constructor(t,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mo({}),this._settingsFrozen=!1,t instanceof qe?this._databaseId=t:(this._app=t,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new E(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qe(r.options.projectId)}(t))}get app(){if(!this._app)throw new E(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new E(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mo(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Bp;switch(n.type){case"gapi":const s=n.client;return V(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new jp(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new E(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=ho.get(t);n&&(v("ComponentProvider","Removing Datastore"),ho.delete(t),n.terminate())}(this),Promise.resolve()}}/**
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
 */class bt{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new It(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new bt(this.firestore,t,this._key)}}class si{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new si(this.firestore,t,this._query)}}class It extends si{constructor(t,n,s){super(t,n,pm(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new bt(this.firestore,null,new b(t))}withConverter(t){return new It(this.firestore,t,this._path)}}function Zg(e,t,...n){if(e=Pe(e),Tl("collection","path",t),e instanceof ni){const s=M.fromString(t,...n);return po(s),new It(e,null,s)}{if(!(e instanceof bt||e instanceof It))throw new E(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(M.fromString(t,...n));return po(s),new It(e.firestore,null,s)}}function ty(e,t,...n){if(e=Pe(e),arguments.length===1&&(t=za.I()),Tl("doc","path",t),e instanceof ni){const s=M.fromString(t,...n);return fo(s),new bt(e,null,new b(s))}{if(!(e instanceof bt||e instanceof It))throw new E(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(M.fromString(t,...n));return fo(s),new bt(e.firestore,e instanceof It?e.converter:null,new b(s))}}/**
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
 */class ey{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new ml(this,"async_queue_retry"),this.Kc=()=>{const n=Us();n&&v("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const t=Us();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const n=Us();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new Lt;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Oc.push(t),this.jc()))}async jc(){if(this.Oc.length!==0){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(t){if(!ps(t))throw t;v("AsyncQueue","Operation failed with retryable error: "+t)}this.Oc.length>0&&this.So.Io(()=>this.jc())}}Qc(t){const n=this.Mc.then(()=>(this.Lc=!0,t().catch(s=>{this.Bc=s,this.Lc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Vt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Lc=!1,s))));return this.Mc=n,n}enqueueAfterDelay(t,n,s){this.Gc(),this.qc.indexOf(t)>-1&&(n=0);const r=ti.createAndSchedule(this,t,n,s,i=>this.Wc(i));return this.$c.push(r),r}Gc(){this.Bc&&D()}verifyOperationInProgress(){}async zc(){let t;do t=this.Mc,await t;while(t!==this.Mc)}Hc(t){for(const n of this.$c)if(n.timerId===t)return!0;return!1}Jc(t){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.zc()})}Yc(t){this.qc.push(t)}Wc(t){const n=this.$c.indexOf(t);this.$c.splice(n,1)}}class Al extends ni{constructor(t,n,s){super(t,n,s),this.type="firestore",this._queue=new ey,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Sl(this),this._firestoreClient.terminate()}}function ny(e=bf()){return gf(e,"firestore").getImmediate()}function sy(e){return e._firestoreClient||Sl(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Sl(e){var t;const n=e._freezeSettings(),s=function(r,i,o,a){return new tm(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new zg(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
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
 */class Il{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new E(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Z(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Xe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Xe(Tt.fromBase64String(t))}catch(n){throw new E(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Xe(Tt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Cl{constructor(t){this._methodName=t}}/**
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
 */class Dl{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new E(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new E(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return k(this._lat,t._lat)||k(this._long,t._long)}}/**
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
 */const ry=/^__.*__$/;class iy{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Kt(t,this.data,this.fieldMask,n,this.fieldTransforms):new un(t,this.data,n,this.fieldTransforms)}}function xl(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw D()}}class ri{constructor(t,n,s,r,i,o){this.settings=t,this.databaseId=n,this.wt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(t){return new ri(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.ta({path:s,na:!1});return r.sa(t),r}ia(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.ta({path:s,na:!1});return r.Xc(),r}ra(t){return this.ta({path:void 0,na:!0})}oa(t){return zn(t,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.sa(this.path.get(t))}sa(t){if(t.length===0)throw this.oa("Document fields must not be empty");if(xl(this.Zc)&&ry.test(t))throw this.oa('Document fields cannot begin and end with "__"')}}class oy{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.wt=s||vs(t)}aa(t,n,s,r=!1){return new ri({Zc:t,methodName:n,ca:s,path:Z.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function ay(e){const t=e._freezeSettings(),n=vs(e._databaseId);return new oy(e._databaseId,!!t.ignoreUndefinedProperties,n)}function ly(e,t,n,s,r,i={}){const o=e.aa(i.merge||i.mergeFields?2:0,t,n,r);Ol("Data must be an object, but it was:",o,s);const a=kl(s,o);let l,c;if(i.merge)l=new gt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const m=uy(t,h,n);if(!o.contains(m))throw new E(p.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);dy(u,m)||u.push(m)}l=new gt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new iy(new pt(a),l,c)}function Nl(e,t){if(Rl(e=Pe(e)))return Ol("Unsupported field value:",t,e),kl(e,t);if(e instanceof Cl)return function(n,s){if(!xl(s.Zc))throw s.oa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.oa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.na&&t.Zc!==4)throw t.oa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Nl(o,s.ra(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(e,t)}return function(n,s){if((n=Pe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Em(s.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=q.fromDate(n);return{timestampValue:ur(s.wt,r)}}if(n instanceof q){const r=new q(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ur(s.wt,r)}}if(n instanceof Dl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Xe)return{bytesValue:Mm(s.wt,n._byteString)};if(n instanceof bt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.oa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:dl(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.oa(`Unsupported field value: ${ei(n)}`)}(e,t)}function kl(e,t){const n={};return Wa(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ln(e,(s,r)=>{const i=Nl(r,t.ea(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Rl(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof q||e instanceof Dl||e instanceof Xe||e instanceof bt||e instanceof Cl)}function Ol(e,t,n){if(!Rl(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ei(n);throw s==="an object"?t.oa(e+" a custom object"):t.oa(e+" "+s)}}function uy(e,t,n){if((t=Pe(t))instanceof Il)return t._internalPath;if(typeof t=="string")return hy(e,t);throw zn("Field path arguments must be of type string or ",e,!1,void 0,n)}const cy=new RegExp("[~\\*/\\[\\]]");function hy(e,t,n){if(t.search(cy)>=0)throw zn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Il(...t.split("."))._internalPath}catch{throw zn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function zn(e,t,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${s}`),o&&(l+=` in document ${r}`),l+=")"),new E(p.INVALID_ARGUMENT,a+e+l)}function dy(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */function fy(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}function py(e,t){const n=Jg(e.firestore,Al),s=ty(e),r=fy(e.converter,t);return my(n,[ly(ay(e.firestore),"addDoc",s._key,r,e.converter!==null,{}).toMutation(s._key,Et.exists(!1))]).then(()=>s)}function my(e,t){return function(n,s){const r=new Lt;return n.asyncQueue.enqueueAndForget(async()=>Fg(await Qg(n),s,r)),r.promise}(sy(e),t)}(function(e,t=!0){(function(n){be=n})(wf),xn(new Le("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new Al(r,new Up(n.getProvider("auth-internal")),new qp(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:t},s),i._setSettings(s),i},"PUBLIC")),Jt(zi,"3.4.14",e),Jt(zi,"3.4.14","esm2017")})();var gy="firebase",yy="9.9.3";/**
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
 */Jt(gy,yy,"app");const vy={apiKey:"AIzaSyA4z7iojD9k9VOG81xJrGdgzHr4-wyGAko",authDomain:"asistencia-casamiento.firebaseapp.com",projectId:"asistencia-casamiento",storageBucket:"asistencia-casamiento.appspot.com",messagingSenderId:"13406005698",appId:"1:13406005698:web:6942fcb12fdbec2ff90e5b"},Pl=Ef(vy),Ll=ny(Pl);window.app=Pl;window.firestore=Ll;const Te=e=>(Gn("data-v-3bd25f46"),e=e(),Wn(),e),wy={class:"w-full xl:bg-slate-100 pt-5"},Ey={class:"container-section xl:bg-slate-100"},by={class:"text-center"},_y={class:"input-wrapper","data-aos":"zoom-in"},Ty=Te(()=>f("label",{class:"w-full",for:"Nama"},"Nama",-1)),Ay={class:"input-wrapper","data-aos":"zoom-in"},Sy=Te(()=>f("label",{class:"w-full",for:"Kehadiran"},"Kehadiran",-1)),Iy=Te(()=>f("option",{value:"Hadir"},"Hadir",-1)),Cy=Te(()=>f("option",{value:"Tidak Hadir"},"Tidak Hadir",-1)),Dy=[Iy,Cy],xy={class:"input-wrapper","data-aos":"zoom-in"},Ny=Te(()=>f("label",{class:"w-full",for:"Pesan"},"Pesan",-1)),ky=["disabled"],Ry={key:0,class:"fa fa-paper-plane mr-1"},Oy={key:1,class:"fa fa-spinner fa-spin mr-1"},Py=de(" Kirim Pesan "),Ly=Te(()=>f("div",{class:"w-full text-center pb-12 mt-12"},[f("p",{class:"text-sm text-amber-600 font-medium"},"Harjonan \xA9 2024")],-1)),My={setup(e){const t=B(null),n=B(null),s=B(null);var r=B("Hadir");const i=B(new Date);var o=B([]);B(["Vegetariano","Kosher","Celiaco","Sin Sal","Menu Infantil (Menor a 5 a\xF1os)","Otro (Agregar en comentarios)"]);const a=B(!1),l=B(!1),c=B(!1),u=B(!1),h=()=>new Promise((x,T)=>{console.log("Sending 1");const S={Nama:n.value,Fecha:new Date,Kehadiran:r.value,Pesan:s.value,Dieta:o.value};py(Zg(Ll,"asistencia-casamiento"),S).then(P=>x(P)).catch(P=>T(P))}),m=()=>{n.value=null,s.value=null,o=[],r="Hadir"},y=x=>{c.value||(x.preventDefault(),c.value=!0,Promise.allSettled([h(),_()]).then(T=>{T[1].status=="fulfilled"?(c.value=!1,a.value=!0,l.value=!0,u.value=!0,m()):(c.value=!0,a.value=!1,l.value=!0)}))},_=async()=>{const x="https://script.google.com/macros/s/AKfycby1ovbqWQ5T5wkb8zGGA7oK8Qv3nMUtLz1us1SwIAF7H0H0NwQtaoB7N3RptNZElaqP/exec",T=new FormData(t.value);T.append("Dieta",o.value.join(", ")),await fetch(x,{method:"POST",body:T})};return(x,T)=>(A(),C("section",wy,[f("section",Ey,[L(pe,{title:"Buku Tamu",subtitle:"Demi kelancaran acara dimohon untuk para tamu undangan untuk memastikan kehadirannya pada acara kami"}),L(id,{statusResponse:a.value,showAlert:l.value,onClose:T[0]||(T[0]=S=>l.value=!1)},null,8,["statusResponse","showAlert"]),f("div",by,[u.value?(A(),C("button",{key:0,class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",onClick:T[1]||(T[1]=S=>u.value=!1)},"Enviar otro")):In("",!0)]),u.value?In("",!0):(A(),C("form",{key:0,ref_key:"form",ref:t,onSubmit:y,class:"w-10/12 mx-auto mt-6"},[f("div",_y,[Ty,dn(f("input",{class:"w-full","onUpdate:modelValue":T[2]||(T[2]=S=>n.value=S),placeholder:"Nama Lengkap Anda",name:"Nama",id:"Nama",type:"text",required:""},null,512),[[_s,n.value]])]),dn(f("input",{type:"hidden",id:"Fecha",name:"Fecha","onUpdate:modelValue":T[3]||(T[3]=S=>i.value=S)},null,512),[[_s,i.value]]),f("div",Ay,[Sy,dn(f("select",{class:"w-full","onUpdate:modelValue":T[4]||(T[4]=S=>Xl(r)?r.value=S:r=S),name:"Kehadiran",id:"Kehadiran",required:""},Dy,512),[[Wl,Sn(r)]])]),f("div",xy,[Ny,dn(f("textarea",{class:"w-full",placeholder:"Tuliskan pesan anda disini","onUpdate:modelValue":T[5]||(T[5]=S=>s.value=S),name:"Pesan",id:"Pesan",cols:"30",rows:"5"},null,512),[[_s,s.value]])]),f("button",{disabled:c.value,"data-aos":"zoom-in",class:"w-full bg-gray-800 text-gray-100 mt-6 rounded-lg py-2 font-medium pointer active:scale-90 border-gray-500 duration-300",type:"submit"},[c.value?(A(),C("i",Oy)):(A(),C("i",Ry)),Py],8,ky)],544)),Ly])]))}};var $y=Qe(My,[["__scopeId","data-v-3bd25f46"]]);const Fy=de(" Scroll to the top "),Vy={setup(e){const t=n=>{document.querySelector(n).scrollIntoView({behavior:"smooth"})};return(n,s)=>(A(),C("section",null,[L(mu,{id:"mainCover"}),L(nu,{onClick:s[0]||(s[0]=()=>t("#main-cover"))},{default:ee(()=>[Fy]),_:1}),L(Nu),L(Mh),L(Oh,{onGoToGuestBook:s[1]||(s[1]=r=>t("#guest-book"))}),L(zh),L(Wh),L(ed,{id:"envelope"}),L($y,{id:"guest-book"})]))}};export{Vy as default};
