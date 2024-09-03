!function(t){"use strict";/*! js-cookie v3.0.5 | MIT */function e(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)t[i]=n[i]}return t}!function(){let t={NODE_ENV:"production"};try{if(process){process.env=Object.assign({},process.env),Object.assign(process.env,t);return}}catch(t){}globalThis.process={env:t}}();var n,i,o,s,a=function t(n,i){function o(t,o,s){if("undefined"!=typeof document){"number"==typeof(s=e({},i,s)).expires&&(s.expires=new Date(Date.now()+864e5*s.expires)),s.expires&&(s.expires=s.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var r in s)s[r]&&(a+="; "+r,!0!==s[r]&&(a+="="+s[r].split(";")[0]));return document.cookie=t+"="+n.write(o,t)+a}}return Object.create({set:o,get:function(t){if("undefined"!=typeof document&&(!arguments.length||t)){for(var e=document.cookie?document.cookie.split("; "):[],i={},o=0;o<e.length;o++){var s=e[o].split("="),a=s.slice(1).join("=");try{var r=decodeURIComponent(s[0]);if(i[r]=n.read(a,r),t===r)break}catch(t){}}return t?i[t]:i}},remove:function(t,n){o(t,"",e({},n,{expires:-1}))},withAttributes:function(n){return t(this.converter,e({},this.attributes,n))},withConverter:function(n){return t(e({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(i)},converter:{value:Object.freeze(n)}})}({read:function(t){return'"'===t[0]&&(t=t.slice(1,-1)),t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(t){return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"}),r={settings:"Cookie Settings",customize:{header:"Your data, your choice",label:"Customize",text:"We use <strong>functional cookies</strong> for navigation, etc. In addition, we use <strong>statistical cookies</strong> to see how users interact with the website.",retargeting:"We also use <strong>cookies for marketing.</strong>",link:'See our <a href="/%URL%">privacy policy</a>'},header:"This website uses",miniGDPR:"Cookie settings",accept:"I understand",acceptAll:"Accept all",decline:"Only functional",close:"Close",save:"Save preferences",functional:{label:"Functional"},statistical:{label:"Statistical"},marketing:{label:"Marketing"},policyUrl:"privacy"},l={settings:"Param\xe8tres des cookies",customize:{header:"Vos donn\xe9es, votre choix",label:"Personnaliser",text:"Nous utilisons des <strong>cookies fonctionnels</strong> pour la navigation, etc. De plus, nous utilisons des <strong>cookies statistiques</strong> pour voir comment les utilisateurs interagissent avec le site Web.",retargeting:"Nous utilisons \xe9galement <strong>des cookies \xe0 des fins de marketing.</strong>",link:'Consultez notre <a href="/%URL%">politique de confidentialit\xe9</a>'},header:"Ce site Web est utilis\xe9",miniGDPR:"Param\xe8tres des cookies",accept:"Je comprends",acceptAll:"Accepter tout",decline:"Uniquement fonctionnel",close:"Fermer",save:"Enregistrer les pr\xe9f\xe9rences",functional:{label:"Fonctionnel"},statistical:{label:"Calcul statistique"},marketing:{label:"Commercialisation"},policyUrl:"confidentialite"},c={settings:"Cookieinnstillinger",customize:{header:"Dine data, ditt valg",label:"Tilpass",text:"Vi bruker <strong>funksjonelle cookies</strong> til navigering og lignende. I tillegg bruker vi <strong>statistiske cookies</strong> til \xe5 se hvordan brukere interagerer med nettsiden.",retargeting:"Vi bruker ogs\xe5 <strong>cookies til markedsf\xf8ring.</strong>",link:'Les mer p\xe5 v\xe5r <a href="/%URL%">personvernserkl\xe6ring</a>'},header:"Denne nettsida bruker",miniGDPR:"Innstillinger for cookies",accept:"Jeg forst\xe5r",acceptAll:"Godta alle",decline:"Bare funksjonelle",close:"Lukk",save:"Lagre innstillinger",functional:{label:"Funksjonell"},statistical:{label:"Statistisk"},marketing:{label:"Markedsf\xf8ring"},policyUrl:"personvern"};let h=document.documentElement.lang.toLowerCase()||"en",d=["en","fr","nb","no"].find(t=>h.includes(t))||"en",g=(t,e,n)=>`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.id='gtm-snippet';j.${e?"defer":"async"}=true;j.src='https://${n}/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${t}');`,u=class{initialize(){if(gtag("consent","default",this.consentParams),this._initialized){console.warn("Google Tag Manager is already loaded");return}if(!this.gtmId){console.error("No Google Tag Manager ID was assigned");return}let t=document.getElementById("gtm-snippet");if(!(t&&"src"in t&&"string"==typeof t.src&&t.src.includes(`id=${this.gtmId}`))){let t=document.createElement("script"),e=g(this.gtmId,this.defer,this.serverSideDomain?this.serverSideDomain.replace(/http(|s):\/\/|\/$/g,""):"www.googletagmanager.com");t.innerHTML=e,document.head.appendChild(t),t.insertAdjacentHTML("beforebegin","<!-- Google Tag Manager -->"),t.insertAdjacentHTML("afterend","<!-- End Google Tag Manager -->"),this._initialized=!0}}updateConsent({consentParams:t}){try{window.gtag("consent","update",t)}catch(t){console.error(t)}}constructor({gtmId:t,serverSideDomain:e=null,consentParams:n,defer:i=!1}){this._initialized=!1,this.gtmId=null,this.serverSideDomain=null,this.defer=!1,this.gtmId=t?t.trim():null,this.serverSideDomain=e?e.trim():null,this.defer=!!i,this.consentParams=n,window.gtag||(window.gtag=function(){window.dataLayer=window.dataLayer||[],window.dataLayer.push(arguments)})}},p=class{initialize(){gtag("consent","default",this.consentParams);let t="ga-gtag";if(!document.getElementById(t)&&!this._initialized)try{if(!this.googleID)throw Error("No Google Tag ID was assigned");let e=document.createElement("script");e.id=t,e.async=!0,e.src=`https://www.googletagmanager.com/gtag/js?id=${this.googleID}`,document.head.appendChild(e),e.insertAdjacentHTML("beforebegin","<!-- Google Analytics -->"),e.insertAdjacentHTML("afterend","<!-- End Google Analytics -->"),gtag("js",new Date),gtag("config",this.googleID,this.config),this._initialized=!0}catch(t){console.error(t)}}updateConsent({consentParams:t}){try{window.gtag("consent","update",t)}catch(t){console.error(t)}}constructor({googleID:t,config:e={},consentParams:n}){this._initialized=!1,this.config={},this.googleID=t,this.config=e,this.consentParams=n,window.gtag||(window.gtag=function(){window.dataLayer=window.dataLayer||[],window.dataLayer.push(arguments)})}},m=class{initialize(){let t="meta-pixel";if(!document.getElementById(t)&&!this._initialized)try{if(!this.metaPixelID)throw Error("No Meta Pixel ID was assigned");let e=document.createElement("script");e.id=t,e.innerHTML=`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/${this.locale}/fbevents.js');fbq('init', '${this.metaPixelID}');fbq('track', 'PageView');`,document.head.appendChild(e),e.insertAdjacentHTML("beforebegin","<!-- Meta Pixel Code -->"),e.insertAdjacentHTML("afterend","<!-- End Meta Pixel Code -->")}catch(t){console.error(t)}}constructor({metaPixelID:t,locale:e="en_US"}){this._initialized=!1,this.metaPixelID=t,this.locale=e.replaceAll("-","_")}},f=class{initialize(){let t="snap-pixel";if(!document.getElementById(t)&&!this._initialized)try{if(!this.snapChatPixelID)throw Error("No SnapChat Pixel ID was assigned");let e=document.createElement("script");e.id=t,e.innerHTML=`(function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function() {a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};a.queue=[];var s='script';r=t.createElement(s);r.async=!0;r.src=n;var u=t.getElementsByTagName(s)[0];u.parentNode.insertBefore(r,u);})(window,document,'https://sc-static.net/scevent.min.js');snaptr('init', '${this.snapChatPixelID}', { 'user_email': '__INSERT_USER_EMAIL__' });snaptr('track', 'PAGE_VIEW');`,document.head.appendChild(e),e.insertAdjacentHTML("beforebegin","<!-- Snap Pixel Code -->"),e.insertAdjacentHTML("afterend","<!-- End Snap Pixel Code -->")}catch(t){console.error(t)}}constructor({snapChatPixelID:t}){this._initialized=!1,this.snapChatPixelID=t}},b=class{initialize(){let t="snap-pixel";if(!document.getElementById(t)&&!this._initialized)try{if(!this.tiktokPixelID)throw Error("No TikTok Pixel ID was assigned");let e=document.createElement("script");e.id=t,e.innerHTML=`!function (w, d, t) {w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};ttq.load('${this.tiktokPixelID}');ttq.page();}(window, document, 'ttq');`,document.head.appendChild(e),e.insertAdjacentHTML("beforebegin","<!-- TikTok Pixel Code -->"),e.insertAdjacentHTML("afterend","<!-- End TikTok Pixel Code -->")}catch(t){console.error(t)}}constructor({tiktokPixelID:t}){this._initialized=!1,this.tiktokPixelID=t}};function w(){if(!this.gdprContainer)return;this.gdprContainer.innerHTML=`<div class="cookie-container ${this.alignPrompt} ${this.format}-format" lang="${document.documentElement.lang}"><div class="content"><div aria-describedby="cookie-warning-text" aria-labelledby="cookie-warning-text" aria-modal="false" role="dialog"><p class="h3" id="cookie-warning-text"></p></div><div class="button-wrapper"><button class="button gdpr customize" style="background-color:transparent"></button> <button class="button gdpr accept"></button></div></div></div>`,this.text&&this.setText(this.text);let t=this.gdprContainer.querySelector(".accept");t instanceof HTMLButtonElement&&(t.onclick=this.acceptAll);let e=this.gdprContainer.querySelector(".customize");e instanceof HTMLButtonElement&&(e.onclick=()=>this.setCustomize(!0))}var k='<svg xmlns="http://www.w3.org/2000/svg" width="992" height="1024" viewBox="0 0 992 1024"><path d="M810.112 4.992c-27.232 0-49.28 22.112-49.344 49.344 0 27.232 22.112 49.344 49.344 49.344s49.344-22.112 49.344-49.344c0-27.232-22.112-49.344-49.344-49.344zm13.184 429.728c-167.424 54.048-292.352-63.52-236.384-243.232-61.728-22.944-82.24-90.368-58.016-166.24C255.36 11.456 14.336 224.416.672 498.048c-13.792 273.536 196.896 506.432 470.368 520.32 273.6 13.792 506.528-196.896 520.32-470.464 1.248-24.736.672-49.184-1.664-73.088-69.952 43.008-123.84 23.52-166.432-40.032zm-575.52-35.392c40.992 0 74.176 33.248 74.176 74.176s-33.248 74.176-74.176 74.176c-40.992 0-74.176-33.248-74.176-74.176s33.248-74.176 74.176-74.176zm233.696 94.56c23.616 0 42.752 19.136 42.752 42.752s-19.136 42.752-42.752 42.752c-23.616 0-42.752-19.136-42.752-42.752-.096-23.616 19.072-42.752 42.752-42.752zM295.968 669.952c28.8 0 52.16 23.36 52.16 52.16s-23.36 52.16-52.16 52.16c-28.8 0-52.16-23.36-52.16-52.16 0-28.864 23.36-52.16 52.16-52.16zm112.384-399.008c22.624 0 40.832 18.304 40.832 40.832 0 22.624-18.304 40.832-40.832 40.832-22.624 0-40.832-18.304-40.832-40.832s18.304-40.832 40.832-40.832zm221.952 417.28c37.856 0 68.48 30.688 68.48 68.48 0 37.856-30.688 68.48-68.48 68.48-37.856 0-68.48-30.688-68.48-68.48s30.688-68.48 68.48-68.48zm144.224-492.608c25.408 0 46.048 20.64 46.048 46.048s-20.64 46.048-46.048 46.048-46.048-20.64-46.048-46.048 20.64-46.048 46.048-46.048z"/></svg>';function y(){if(!this.gdprContainer)return;this.gdprContainer.innerHTML=`<button class="mini-gdpr ${this.alignMiniPrompt}" data-hide="false" aria-label="${this.text?.miniGDPR||"Cookie settings"}"><figure class="icon-cookies settings">${k}</figure></button>`;let t=this.gdprContainer.querySelector(".mini-gdpr");t instanceof HTMLButtonElement&&(t.onclick=this.setVisible)}function x(){if(!this.gdprContainer)return;this.gdprContainer.innerHTML=`<div class="pop-up fadeIn" lang="${document.documentElement.lang}"><dialog open>${function({className:t,isOpen:e}){return`<button class="menu-button ${t}" data-open="${e}"><span class="hamburger"><span></span></span></button>`}({className:"close-button",isOpen:!0})}<div class="dialog-inner-box" style="display:flex;flex-direction:column"><h3><figure aria-label="cookies" class="icon-cookies" style="display:inline-flex;margin-right:.5em">${k}</figure><slot id="customize-header"></slot></h3><p id="customize-text"></p><p id="customize-link"></p><div id="save-wrapper" class="button-wrapper"><button class="button gdpr decline-all" style="background-color:transparent"></button> <button class="button gdpr accept-all"></button></div><div class="button-wrapper">${this.switchButton({label:this.text?.functional.label,name:"functional",value:!0,disabled:!0})} ${this.switchButton({label:this.text?.statistical.label,name:"allowStatistical",value:!!this.allowStatistical})} ${this.hasRetargeting?this.switchButton({label:this.text?.marketing.label,name:"allowRetargeting",value:!!this.allowRetargeting}):""}</div></div></dialog></div>`,this.setText(this.text);let t=this.gdprContainer.querySelector("#save-wrapper"),e=document.createElement("button");e.innerText=this.text?.save??"Save preferences",e.className="button gdpr save",e.onclick=()=>{this.save(),this.isCustomize=!1,this.isVisible=!1};let n=this.gdprContainer.querySelector('[name="allowStatistical"]');n instanceof HTMLInputElement&&(n.onchange=n=>{t?.replaceChildren(e),this.handleChange(n,this)});let i=this.gdprContainer.querySelector('[name="allowRetargeting"]');i instanceof HTMLInputElement&&(i.onchange=n=>{t?.replaceChildren(e),this.handleChange(n,this)});let o=this.gdprContainer.querySelector(".accept-all");o instanceof HTMLButtonElement&&(o.onclick=this.acceptAll);let s=this.gdprContainer.querySelector(".decline-all");s instanceof HTMLButtonElement&&(s.onclick=this.declineAll);let a=this.gdprContainer.querySelector(".close-button");a instanceof HTMLButtonElement&&(a.onclick=()=>this.setCustomize(!1)),setTimeout(()=>{let t=this.gdprContainer?.querySelector("dialog"),e=this.gdprContainer?.querySelector(".dialog-inner-box");if(!(t instanceof HTMLDialogElement)||!(e instanceof HTMLElement))return;let n=`${(e.offsetHeight??0)+80}px`;Object.assign(t.style,{minHeight:n,maxHeight:n})},10)}(o=n||(n={})).BottomLeft="bottom-left",o.BottomRight="bottom-right",o.TopLeft="top-left",o.TopRight="top-right",(s=i||(i={})).Banner="banner",s.Box="box";let v=t=>{if(null!=t)return t?"granted":"denied"},C=t=>null==t?null:"granted"===t,_=()=>{let t=a.get("CookieConsent");return t?JSON.parse(decodeURIComponent(t)):{functionality_storage:"granted",analytics_storage:"denied",ad_user_data:"denied",ad_storage:"denied",ad_personalization:"denied",personalization_storage:"denied",security_storage:"granted",wait_for_update:500}},T=t=>{let e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${t??`:${e()}`}-${e()}`};function L({disabled:t=!1,name:e,label:n,value:i}){let o=T();return`<div class="container">${n?`<label class="textLabel" for="${o}">${n}</label>`:""} <label class="label"><input ${i?"checked":""} class="input" ${t?"disabled":""} id="${o}" name="${e}" type="checkbox" value="${i}"> <span class="slider"></span></label></div>`}let z=Symbol("UPDATE_ON_CONNECTED");"undefined"!=typeof window&&window.document||(global.HTMLElement=class{});let I=class extends HTMLElement{connectedCallback(){let t=[];for(let e of(z in this&&Array.isArray(this[z])&&(t=this[z]),t))"propertyChangedCallback"in this&&"function"==typeof this.propertyChangedCallback&&e in this&&this.propertyChangedCallback(e,void 0,this[e])}constructor(){super();let{observedProperties:t=[]}=this.constructor;if(z in this&&(this[z]=[]),"propertyChangedCallback"in this&&"function"==typeof this.propertyChangedCallback)for(let e of t){let t=this[e],n=Symbol(e);this[n]=t,Object.defineProperty(this,e,{get(){return this[n]},set(t){let i=this[n];this[n]=t,this.propertyChangedCallback(e,i,t)}}),void 0!==t&&z in this&&Array.isArray(this[z])&&this[z].push(e)}}};class S extends I{connectedCallback(){super.connectedCallback(),this.render(),this._addEventListeners(),this.allowStatistical=C(_().analytics_storage),this.allowRetargeting=C(_().ad_storage),this.gdprContainer=this.shadow.querySelector("#gdpr-container"),(this.isCustomize||this.allowStatistical||!1===this.allowStatistical)&&!this.isVisible&&a.get("CookieConsent")?this.isCustomize?this._popUp():this._miniGDPR():this._cookieWarning(),this.text=function(){switch(d){case"fr":return l;case"no":case"nb":return c;default:return r}}(),this.googleID?.startsWith("GTM-")?(this._gtm=new u({gtmId:this.googleID,consentParams:_()}),this.hasRetargeting=!0):this.googleID?.startsWith("G-")&&(this._gTag=new p({googleID:this.googleID,consentParams:_()}),this.metaPixelID&&(this._meta=new m({metaPixelID:this.metaPixelID,locale:navigator.language}),this.hasRetargeting=!0),this.snapChatPixelID&&(this._snapChat=new f({snapChatPixelID:this.snapChatPixelID}),this.hasRetargeting=!0),this.tiktokPixelID&&(this._tikTok=new b({tiktokPixelID:this.tiktokPixelID}),this.hasRetargeting=!0)),this._gtm?.initialize(),this._gTag?.initialize(),this.allowRetargeting&&(this._meta?.initialize(),this._snapChat?.initialize(),this._tikTok?.initialize()),this._gtm||this._gTag||this._meta||this._snapChat||this._tikTok||console.warn("No tracking is enabled"),this._gtm&&(this._meta||this._snapChat||this._tikTok)&&console.warn("Consider moving tags into Google Tag Manager"),window.addGDPRConsent=t=>{this._consentListeners.push(t)};let t=this.shadowRoot?.adoptedStyleSheets[0];setTimeout(()=>{t?.insertRule(`:host{--border-width: ${this.borderWidth}px;--font-family: ${this.fontFamily};--color: ${this.color};--background-color: ${this.backgroundColor};--accent-color: ${this.accentColor};}`)},0),this.debug()}disconnectedCallback(){this._removeEventListeners()}static get observedProperties(){return["allowStatistical","allowRetargeting","isVisible","isCustomize","isSaving"]}propertyChangedCallback(t,e,n){if(this.shadow&&this.gdprContainer)switch(t){case"isCustomize":n&&this._popUp();break;case"isSaving":{let t=this.gdprContainer.querySelector(".accept-all");n&&t instanceof HTMLButtonElement&&(t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="currentColor"><style>@keyframes spinner_zKoa{to{transform:rotate(360deg)}}@keyframes spinner_YpZS{0%{stroke-dasharray:0 150;stroke-dashoffset:0}47.5%{stroke-dasharray:42 150;stroke-dashoffset:-16}95%,to{stroke-dasharray:42 150;stroke-dashoffset:-59}}</style><g style="transform-origin:center;animation:spinner_zKoa 2s linear infinite"><circle cx="12" cy="12" r="9.5" fill="none" stroke-width="3" style="stroke-linecap:round;animation:spinner_YpZS 1.5s ease-in-out infinite"/></g></svg>');break}case"allowStatistical":{let t=this.gdprContainer.querySelector('[name="allowStatistical"]');t instanceof HTMLInputElement&&(t.checked=!!n);break}case"allowRetargeting":{let t=this.gdprContainer.querySelector('[name="allowRetargeting"]');t instanceof HTMLInputElement&&(t.checked=!!n);break}case"isVisible":if(this.isCustomize)break;n?this._cookieWarning():this._miniGDPR()}}set googleID(t){this.setAttribute("googleID",t||"")}get googleID(){return this.getAttribute("googleID")}set metaPixelID(t){this.setAttribute("metaPixelID",t||"")}get metaPixelID(){return this.getAttribute("metaPixelID")}set snapChatPixelID(t){this.setAttribute("snapChatPixelID",t||"")}get snapChatPixelID(){return this.getAttribute("snapChatPixelID")}set tiktokPixelID(t){this.setAttribute("tiktokPixelID",t||"")}get tiktokPixelID(){return this.getAttribute("tiktokPixelID")}set color(t){this.setAttribute("color",t)}get color(){return this.getAttribute("color")||"#000"}set backgroundColor(t){this.setAttribute("backgroundColor",t)}get backgroundColor(){return this.getAttribute("backgroundColor")||"#FFF"}set accentColor(t){this.setAttribute("accentColor",t)}get accentColor(){return this.getAttribute("accentColor")||"#FFF"}set fontFamily(t){this.setAttribute("fontFamily",t)}get fontFamily(){return this.getAttribute("fontFamily")||'"Helvetica Neue", Helvetica, sans-serif'}set borderWidth(t){this.setAttribute("borderWidth",t.toString())}get borderWidth(){return Number(this.getAttribute("borderWidth")??2)}set alignPrompt(t){this.setAttribute("alignPrompt",t)}get alignPrompt(){let t=this.getAttribute("alignPrompt");return t&&Object.values(n).includes(t)?t:n.BottomLeft}set alignMiniPrompt(t){this.setAttribute("alignMiniPrompt",t)}get alignMiniPrompt(){let t=this.getAttribute("alignMiniPrompt");return t&&Object.values(n).includes(t)?t:n.BottomLeft}set format(t){this.setAttribute("format",t)}get format(){let t=this.getAttribute("format");return t&&Object.values(i).includes(t)?t:i.Box}set text(t){this.setText(t),this.setAttribute("text",JSON.stringify(t))}get text(){return JSON.parse(this.getAttribute("text")||"null")}set privacyPolicyURL(t){this.setAttribute("privacyPolicyURL",t||"privacy")}get privacyPolicyURL(){return this.getAttribute("privacyPolicyURL")}save(){let t={functionality_storage:"granted",analytics_storage:v(this.allowStatistical),ad_user_data:v(this.allowStatistical),ad_storage:v(this.allowRetargeting),ad_personalization:v(this.allowRetargeting),personalization_storage:v(this.allowRetargeting),security_storage:"granted"};for(let e of(a.set("CookieConsent",encodeURIComponent(JSON.stringify(t)),{sameSite:"Lax",expires:365,secure:"development"!==process.env.NODE_ENV}),this._gtm?.updateConsent({consentParams:_()}),this._gTag?.updateConsent({consentParams:_()}),this.allowRetargeting&&(this._meta?.initialize(),this._snapChat?.initialize(),this._tikTok?.initialize()),this._consentListeners))e(t)}acceptAll(){let t={statistical:this.allowStatistical,retargeting:!!this.hasRetargeting&&this.allowRetargeting};this.allowStatistical=!0,this.allowRetargeting=this.hasRetargeting,this.isSaving=!0,setTimeout(()=>{this.isCustomize=!1,this.isVisible=!1,this.isSaving=!1},!this.isCustomize||t.statistical&&t.retargeting?0:800),window.dataLayer&&window.google_tag_data||(this._gtm?.initialize(),this._gTag?.initialize()),this.save(),this.debug()}declineAll(){this.isCustomize=!1,this.isVisible=!1,this.allowStatistical=!1,this.allowRetargeting=!1,this.debug(),(window.dataLayer||window.google_tag_data)&&location.reload(),this.save()}esc({key:t}){this.isCustomize&&"Escape"===t&&this.setCustomize(!1)}setCustomize(t){this.isCustomize=!!t,this.isVisible=!t,this.allowStatistical=!!this.allowStatistical,this.allowRetargeting=!!this.allowRetargeting,this.debug()}handleChange({target:t},e){if(t instanceof HTMLInputElement){let{checked:n,name:i}=t;i in e&&(e[i]=n)}this.debug()}setVisible(){a.remove("CookieConsent"),this.allowStatistical=null,this.allowRetargeting=null,this.isVisible=!0,this.debug()}hideOnScroll(){let t=document.body.getBoundingClientRect(),e=this.gdprContainer?.querySelector(".mini-gdpr");e instanceof HTMLButtonElement&&(e.dataset.hide=(t.top<this._scrollPos&&t.top<-20).toString(),this._scrollPos=t.top)}setText(t){if(!t)return;let e=this.shadow.querySelector("#cookie-warning-text");e&&(e.innerHTML=`${t.header} ${k}`);let n=this.shadow.querySelector(".customize");n instanceof HTMLButtonElement&&(n.ariaLabel=t.customize.label,n.innerText=t.customize.label);let i=this.shadow.querySelector(".accept");i instanceof HTMLButtonElement&&(i.ariaLabel=t.accept,i.innerText=t.accept);let o=this.shadow.querySelector(".accept-all");o instanceof HTMLButtonElement&&(o.ariaLabel=t.acceptAll,o.innerText=t.acceptAll);let s=this.shadow.querySelector(".settings");s instanceof HTMLElement&&(s.ariaLabel=t.settings);let a=this.shadow.querySelector(".decline-all");a instanceof HTMLButtonElement&&(a.ariaLabel=t.decline,a.innerText=t.decline);let r=this.shadow.querySelector("#customize-header");r instanceof HTMLSlotElement&&(r.innerText=t.customize.header);let l=this.shadow.querySelector("#customize-text");l instanceof HTMLElement&&(l.innerHTML=`${t.customize.text}${this.hasRetargeting?` ${t.customize.retargeting}`:""}`);let c=this.shadow.querySelector("#customize-link");c instanceof HTMLElement&&(c.innerHTML=t.customize.link.replace("%URL%",this.privacyPolicyURL||t.policyUrl));let h=this.shadow.querySelector(".mini-gdpr");h instanceof HTMLButtonElement&&(h.ariaLabel=t.miniGDPR)}_addEventListeners(){document.addEventListener("keydown",this.esc,{passive:!0,capture:!0}),document.addEventListener("scroll",this.hideOnScroll,{passive:!0,capture:!0})}_removeEventListeners(){document.removeEventListener("keydown",this.esc),document.removeEventListener("scroll",this.hideOnScroll)}static get styles(){let t=new CSSStyleSheet;return t.replace('\n  @keyframes fadeInUp {\n    0% {\n      transform: translateY(1em);\n      opacity: 0;\n    }\n    100% {\n      transform: translateY(0);\n      opacity: 1;\n    }\n  }\n  @keyframes fadeInDown {\n    0% {\n      transform: translateY(-1em);\n      opacity: 0;\n    }\n    100% {\n      transform: translateY(0);\n      opacity: 1;\n    }\n  }\n  @keyframes popInBottomLeft {\n    0% {\n      transform: translateY(100%) translateX(-100%);\n    }\n    100% {\n      transform: translate(0);\n    }\n  }\n  @keyframes popInBottomRight {\n    0% {\n      transform: translateY(100%) translateX(100%);\n    }\n    100% {\n      transform: translate(0);\n    }\n  }\n  @keyframes popInTopLeft {\n    0% {\n      transform: translateY(-100%) translateX(-100%);\n    }\n    100% {\n      transform: translate(0);\n    }\n  }\n  @keyframes popInTopRight {\n    0% {\n      transform: translateY(-100%) translateX(100%);\n    }\n    100% {\n      transform: translate(0);\n    }\n  }\n  @keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  @keyframes fadeUp {\n    0% {\n      opacity: 0;\n      transform: translateY(0);\n    }\n    100% {\n      opacity: 1;\n      transform: translateY(-50%);\n    }\n  }:host {\n    font-family: var(--font-family);\n    font-size: 16px;\n    color: var(--color);\n    line-height: 1.3em;\n    display: block;\n    width: 100%;\n    height: 100%;\n    cursor: default;\n  }:host *::selection {\n    background-color: var(--color);\n    color: var(--background-color);\n  }:host .cookie-overlay {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 99999;\n    background-color: rgba(0, 0, 0, 0.3);\n    -webkit-backdrop-filter: blur(2px);\n            backdrop-filter: blur(2px);\n  }:host #cookie-warning-text {\n    margin: 0;\n  }:host .cookie-container {\n    padding: 20px 30px;\n    transform-origin: bottom;\n    align-items: center;\n    display: flex;\n    position: fixed;\n    z-index: 999999;\n    background-color: var(--background-color);\n  }:host .cookie-container.bottom-left, :host .cookie-container.bottom-right {\n    animation: fadeInUp 0.3s ease-in-out;\n  }:host .cookie-container.top-left, :host .cookie-container.top-right {\n    animation: fadeInDown 0.3s ease-in-out;\n  }:host .cookie-container.box-format {\n    flex-direction: column;\n    border: solid var(--border-width) currentColor;\n    border-radius: 0.25em;\n  }:host .cookie-container.box-format.bottom-left {\n    left: 30px;\n    bottom: 30px;\n  }:host .cookie-container.box-format.bottom-right {\n    right: 30px;\n    bottom: 30px;\n  }:host .cookie-container.box-format.top-left {\n    left: 30px;\n    top: 30px;\n  }:host .cookie-container.box-format.top-right {\n    right: 30px;\n    top: 30px;\n  }:host .cookie-container.box-format .content {\n    flex-direction: column;\n  }:host .cookie-container.banner-format {\n    flex-direction: row;\n    left: 0;\n    right: 0;\n  }:host .cookie-container.banner-format.bottom-left, :host .cookie-container.banner-format.bottom-right {\n    bottom: 0;\n    border-top: solid var(--border-width) currentColor;\n  }:host .cookie-container.banner-format.top-left, :host .cookie-container.banner-format.top-right {\n    top: 0;\n    border-bottom: solid var(--border-width) currentColor;\n  }:host .cookie-container.banner-format .content {\n    flex-direction: row;\n    justify-content: space-between;\n    width: 100%;\n  }:host .cookie-container .content {\n    display: flex;\n    align-items: center;\n    margin: 0;\n    font-size: 0.9em;\n    gap: 1em;\n  }:host .button {\n    border: solid var(--border-width);\n    font-size: 0.9em;\n    line-height: 0.9em;\n    font-weight: bold;\n    padding: 10px 15px;\n    margin: 0;\n    border-radius: 1.5em;\n    border-color: currentColor;\n    display: inline-flex;\n    align-items: center;\n  }:host .button-wrapper {\n    display: flex;\n    gap: 0.5em;\n  }:host .mini-gdpr {\n    position: fixed;\n    width: 40px;\n    height: 40px;\n    z-index: 99999;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: transform 0.2s ease-in-out;\n  }:host .mini-gdpr.bottom-left, :host .mini-gdpr.bottom-right {\n    bottom: 0;\n    border-top: solid var(--border-width);\n  }:host .mini-gdpr.top-left, :host .mini-gdpr.top-right {\n    top: 0;\n    border-bottom: solid var(--border-width);\n  }:host .mini-gdpr.bottom-left, :host .mini-gdpr.top-left {\n    left: 0;\n    border-right: solid var(--border-width);\n  }:host .mini-gdpr.bottom-right, :host .mini-gdpr.top-right {\n    right: 0;\n    border-left: solid var(--border-width);\n  }:host .mini-gdpr.bottom-left {\n    border-radius: 0 66% 0 0;\n    transform-origin: bottom left;\n    animation: popInBottomLeft 0.3s ease-in-out;\n  }:host .mini-gdpr.bottom-left[data-hide=true] {\n    transform: translateY(100%) translateX(-100%);\n  }:host .mini-gdpr.bottom-right {\n    border-radius: 66% 0 0 0;\n    transform-origin: bottom right;\n    animation: popInBottomRight 0.3s ease-in-out;\n  }:host .mini-gdpr.bottom-right[data-hide=true] {\n    transform: translateY(100%) translateX(100%);\n  }:host .mini-gdpr.top-left {\n    border-radius: 0 0 66% 0;\n    transform-origin: top left;\n    animation: popInTopLeft 0.3s ease-in-out;\n  }:host .mini-gdpr.top-left[data-hide=true] {\n    transform: translateY(-100%) translateX(-100%);\n  }:host .mini-gdpr.top-right {\n    border-radius: 0 0 0 66%;\n    transform-origin: top right;\n    animation: popInTopRight 0.3s ease-in-out;\n  }:host .mini-gdpr.top-right[data-hide=true] {\n    transform: translateY(-100%) translateX(100%);\n  }:host .mini-gdpr svg {\n    height: 1em;\n  }:host .mini-gdpr:hover, :host .mini-gdpr:active {\n    transform: scale(1.1);\n  }@media only screen and (max-width: 760px) {\n    :host .cookie-container {\n      padding: 15px;\n    }\n    :host .cookie-container.box-format {\n      left: 20px;\n      right: 20px;\n    }\n    :host .cookie-container.banner-format .content {\n      flex-direction: column;\n    }\n    :host .cookie-container.banner-format.top-left, :host .cookie-container.banner-format.top-right {\n      padding-bottom: 10px;\n    }\n    :host .cookie-container.banner-format.bottom-left, :host .cookie-container.banner-format.bottom-right {\n      padding-top: 10px;\n    }\n  }:host .pop-up {\n    position: fixed;\n    width: 100vw;\n    height: 100vh;\n    top: 0;\n    left: 0;\n    overflow: hidden;\n    z-index: 999999;\n    animation-duration: 0.4s;\n    animation-name: fadeIn;\n    background-color: rgba(0, 0, 0, 0.3);\n  }:host .pop-up dialog {\n    position: absolute;\n    width: 600px;\n    height: 90%;\n    max-width: 90%;\n    min-height: 0;\n    max-height: 0;\n    border-radius: 0.25em;\n    border: solid var(--border-width);\n    left: 0;\n    right: 0;\n    margin: auto;\n    top: 50%;\n    transform: translateY(-50%);\n    padding: 40px;\n    overflow: hidden;\n    transition: max-height 0.2s ease-in-out, min-height 0.2s ease-in-out;\n    width: 600px;\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\n    color: var(--color);\n    background-color: var(--background-color);\n  }:host .pop-up dialog .close-button {\n    top: 14px;\n    right: 14px;\n    width: 25px;\n  }:host .pop-up dialog[data-animate=up] {\n    animation: fadeUp 0.3s ease-in-out;\n  }:host .pop-up[data-gallery=true] dialog {\n    padding: 0;\n  }:host .inner-wrapper {\n    width: 100%;\n    float: left;\n    position: relative;\n    display: flex;\n    align-items: center;\n    overflow: hidden;\n  }:host .row {\n    display: flex;\n    flex-direction: row;\n    gap: 1em;\n    align-items: flex-start;\n    margin: 0;\n  }:host .column {\n    display: flex;\n    flex: 1 1;\n    flex-direction: column;\n    align-items: flex-start;\n  }@media only screen and (max-width: 760px) {\n    :host .pop-up .pop-up-element {\n      padding: 25px;\n    }\n    :host .pop-up .pop-up-element .close-button {\n      width: 20px;\n      top: 5px;\n      right: 5px;\n    }\n    :host .row {\n      overflow-x: auto;\n      overflow-y: hidden;\n      scroll-snap-points-x: repeat(100%);\n      scroll-snap-type: x mandatory;\n      flex: 1 1;\n      -webkit-overflow-scrolling: touch;\n      scrollbar-width: none;\n    }\n    :host .row::-webkit-scrollbar {\n      display: none;\n    }\n    :host .column {\n      width: 100%;\n      height: 100%;\n      position: relative;\n      flex: 0 0 100%;\n      scroll-snap-align: start;\n    }\n  }:host .container {\n    display: inline-flex;\n    flex-direction: column;\n    margin-right: 0.5em;\n    margin-top: 0.5em;\n    font-size: 0.9em;\n  }:host .textLabel {\n    margin-bottom: 0.5em;\n  }:host .label {\n    position: relative;\n    display: inline-block;\n    width: 3em;\n    height: 1.5em;\n  }:host .label .input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n    margin: 0;\n    padding: 0;\n  }:host .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    transition: 0.4s;\n    border-radius: 1em;\n    border: solid var(--border-width);\n    appearance: none;\n    transition: background-color 0.2s;\n  }:host .slider::before {\n    position: absolute;\n    border-radius: 50%;\n    content: "";\n    height: 1em;\n    width: 1em;\n    left: 0.2em;\n    bottom: 0;\n    top: 0;\n    margin: auto;\n    background-color: currentColor;\n    transition: 0.4s;\n  }:host .input:focus + .slider {\n    box-shadow: 0 0 1px;\n  }:host .input:checked + .slider {\n    background-color: var(--accent-color);\n  }:host .input:checked + .slider:before {\n    transform: translateX(1.4em);\n  }:host .input:disabled + .slider {\n    opacity: 0.5;\n  }:host .menu-button {\n    position: absolute;\n    width: 40px;\n    max-width: 100%;\n    padding: 0;\n    margin: 0;\n    line-height: 0;\n    z-index: 999;\n    cursor: pointer;\n    transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;\n    background-color: transparent;\n    display: block;\n    border-color: unset;\n    outline-color: unset;\n  }:host .menu-button .hamburger {\n    width: 100%;\n    display: inline-block;\n    vertical-align: middle;\n  }:host .menu-button .hamburger::before,\n  :host .menu-button .hamburger > span,\n  :host .menu-button .hamburger::after {\n    background-color: currentColor;\n    border-color: currentColor;\n    outline-color: currentColor;\n    display: block;\n    height: 2px;\n    margin: 10px 0;\n    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.2s ease-in-out;\n  }:host .menu-button .hamburger::before, :host .menu-button .hamburger::after {\n    content: "";\n  }:host .menu-button .hamburger::before {\n    margin-top: 0;\n  }:host .menu-button .hamburger::after {\n    margin-bottom: 0;\n  }:host .menu-button[data-open=true] .hamburger::before {\n    transform: translateY(12px) rotate(135deg);\n  }:host .menu-button[data-open=true] .hamburger > span {\n    transform: translateY(0) rotate(-135deg);\n    opacity: 0;\n  }:host .menu-button[data-open=true] .hamburger::after {\n    transform: translateY(-12px) rotate(-135deg);\n  }:host * {\n    box-sizing: border-box;\n  }:host input,\n  :host textarea,\n  :host button {\n    color: inherit;\n    font-size: inherit;\n    font-family: inherit;\n    font-weight: inherit;\n    border: 0;\n    outline: 0;\n    background-color: transparent;\n  }:host button,\n  :host input[type=submit],\n  :host input[type=button],\n  :host input[type=reset] {\n    appearance: none;\n  }:host button *,\n  :host input[type=submit] *,\n  :host input[type=button] *,\n  :host input[type=reset] * {\n    pointer-events: none;\n  }:host button:not([disabled]),\n  :host input[type=submit]:not([disabled]),\n  :host input[type=button]:not([disabled]),\n  :host input[type=reset]:not([disabled]) {\n    cursor: pointer;\n  }:host button {\n    background-color: var(--accent-color);\n    transition: transform 0.2s ease-in-out;\n  }:host button:hover {\n    transform: scale(1.02);\n  }:host a {\n    color: inherit;\n    font-weight: bold;\n    text-decoration: none;\n    position: relative;\n  }:host a::after {\n    content: "";\n    border-bottom: solid var(--border-width) var(--accent-color);\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n    left: 0;\n    z-index: -1;\n  }:host a:hover:after {\n    opacity: 0;\n  }:host svg {\n    width: auto;\n    height: auto;\n    display: inline-block;\n  }:host svg path {\n    fill: currentColor;\n  }:host p {\n    margin: 0;\n    padding: 0.5em 0 0.7em;\n  }:host h1,\n  :host .h1,\n  :host h2,\n  :host .h2,\n  :host h3,\n  :host .h3 {\n    font-weight: bold;\n    font-size: 2.2em;\n    padding: 0;\n    margin: 0;\n    margin-top: 0.5em;\n  }:host h2,\n  :host .h2 {\n    font-size: 1.7em;\n  }:host h3,\n  :host .h3 {\n    font-size: 1.5em;\n  }:host h3 svg,\n  :host .h3 svg {\n    height: 1.2em;\n    display: inline-block;\n    vertical-align: bottom;\n  }:host .icon-cookies {\n    display: flex;\n    margin: 0;\n    padding: 0;\n  }'),t}debug(){"development"===process.env.NODE_ENV&&console.debug({googleID:this.googleID,customize:this.isCustomize,statistical:this.allowStatistical,retargeting:this.allowRetargeting,visible:this.isVisible},this._gtm||this._gTag)}render(){this.template.innerHTML='<slot id="gdpr-container"></slot>',this.shadow.adoptedStyleSheets=[S.styles],this.shadow.appendChild(this.template.content.cloneNode(!0))}constructor(){super(),this.allowStatistical=null,this.allowRetargeting=null,this.isVisible=!1,this.isCustomize=null,this.isSaving=!1,this._scrollPos=0,this._consentListeners=[],this.hasRetargeting=!1,this._popUp=x,this._cookieWarning=w,this._miniGDPR=y,this.switchButton=L,this.acceptAll=this.acceptAll.bind(this),this.declineAll=this.declineAll.bind(this),this.esc=this.esc.bind(this),this.hideOnScroll=this.hideOnScroll.bind(this),this.setVisible=this.setVisible.bind(this),this.template=document.createElement("template"),this.shadow=this.attachShadow({mode:"open"})}}"undefined"!=typeof window&&window.document&&customElements.define("am-gdpr",S),t.default=S,t.tagName="am-gdpr",Object.defineProperty(t,"__esModule",{value:!0})}(this["am-gdpr"]=this["am-gdpr"]||{});
