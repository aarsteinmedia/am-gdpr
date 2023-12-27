(function(t){"use strict";/**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */let e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap,r=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(i&&void 0===t){let i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}},n=t=>new r("string"==typeof t?t:t+"",void 0,s),a=(t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let i of s){let s=document.createElement("style"),o=e.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}},l=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return n(e)})(t):t,{is:h,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:p,getOwnPropertySymbols:u,getPrototypeOf:g}=Object,m=globalThis,f=m.trustedTypes,b=f?f.emptyScript:"",y=m.reactiveElementPolyfillSupport,$=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?b:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},_=(t,e)=>!h(t,e),w={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:_};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;class x extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){let{get:s,set:o}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){let r=s?.call(this);o.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;let t=g(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){let t=this.properties;for(let e of[...p(t),...u(t)])this.createProperty(e,t[e])}let t=this[Symbol.metadata];if(null!==t){let e=litPropertyMetadata.get(t);if(void 0!==e)for(let[t,i]of e)this.elementProperties.set(t,i)}for(let[t,e]of(this._$Eh=new Map,this.elementProperties)){let i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t))for(let i of new Set(t.flat(1/0).reverse()))e.unshift(l(i));else void 0!==t&&e.push(l(t));return e}static _$Eu(t,e){let i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$E_?.delete(t)}_$ES(){let t=new Map;for(let e of this.constructor.elementProperties.keys())this.hasOwnProperty(e)&&(t.set(e,this[e]),delete this[e]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return a(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){let i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){let o=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){let i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){let t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=s,this[s]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i,s=!1,o){if(void 0!==t){if(!((i??=this.constructor.getPropertyOptions(t)).hasChanged??_)(s?o:this[t],e))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],i)}let t=!1,e=this._$AL;try{(t=this.shouldUpdate(e))?(this.willUpdate(e),this._$E_?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$E_?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(t=>this._$EO(t,this[t])),this._$ET()}updated(t){}firstUpdated(t){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[$("elementProperties")]=new Map,x[$("finalized")]=new Map,y?.({ReactiveElement:x}),(m.reactiveElementVersions??=[]).push("2.0.2");/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */let A=globalThis,k=A.trustedTypes,C=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",E=`lit$${(Math.random()+"").slice(9)}$`,U="?"+E,P=`<${U}>`,z=document,O=()=>z.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,L=t=>R(t)||"function"==typeof t?.[Symbol.iterator],N="[ 	\n\f\r]",D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,M=/>/g,I=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,j=/"/g,W=/^(?:script|style|textarea|title)$/i,F=(t,...e)=>({_$litType$:1,strings:t,values:e}),G=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),q=new WeakMap,Y=z.createTreeWalker(z,129);function J(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}let X=(t,e)=>{let i=t.length-1,s=[],o,r=2===e?"<svg>":"",n=D;for(let e=0;e<i;e++){let i=t[e],a,l,h=-1,c=0;for(;c<i.length&&(n.lastIndex=c,null!==(l=n.exec(i)));)c=n.lastIndex,n===D?"!--"===l[1]?n=H:void 0!==l[1]?n=M:void 0!==l[2]?(W.test(l[2])&&(o=RegExp("</"+l[2],"g")),n=I):void 0!==l[3]&&(n=I):n===I?">"===l[0]?(n=o??D,h=-1):void 0===l[1]?h=-2:(h=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?I:'"'===l[3]?j:B):n===j||n===B?n=I:n===H||n===M?n=D:(n=I,o=void 0);let d=n===I&&t[e+1].startsWith("/>")?" ":"";r+=n===D?i+P:h>=0?(s.push(a),i.slice(0,h)+S+i.slice(h)+E+d):i+E+(-2===h?e:d)}return[J(t,r+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class K{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0,n=t.length-1,a=this.parts,[l,h]=X(t,e);if(this.el=K.createElement(l,i),Y.currentNode=this.el.content,2===e){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=Y.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(let t of s.getAttributeNames())if(t.endsWith(S)){let e=h[r++],i=s.getAttribute(t).split(E),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:n[2],strings:i,ctor:"."===n[1]?ti:"?"===n[1]?ts:"@"===n[1]?to:te}),s.removeAttribute(t)}else t.startsWith(E)&&(a.push({type:6,index:o}),s.removeAttribute(t));if(W.test(s.tagName)){let t=s.textContent.split(E),e=t.length-1;if(e>0){s.textContent=k?k.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],O()),Y.nextNode(),a.push({type:2,index:++o});s.append(t[e],O())}}}else if(8===s.nodeType){if(s.data===U)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(E,t+1));)a.push({type:7,index:o}),t+=E.length-1}}o++}}static createElement(t,e){let i=z.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,s){if(e===G)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl,r=T(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t))._$AT(t,i,s),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(e=Z(t,o._$AS(t,e.values),o,s)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??z).importNode(e,!0);Y.currentNode=s;let o=Y.nextNode(),r=0,n=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new tt(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new tr(o,this,t)),this._$AV.push(e),a=i[++n]}r!==a?.index&&(o=Y.nextNode(),r++)}return Y.currentNode=z,s}p(t){let e=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){T(t=Z(this,t,e))?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==G&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):L(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==V&&T(this._$AH)?this._$AA.nextSibling.data=t:this.$(z.createTextNode(t)),this._$AH=t}g(t){let{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{let t=new Q(s,this),i=t.u(this.options);t.p(e),this.$(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new K(t)),e}T(t){R(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let o of t)s===e.length?e.push(i=new tt(this.k(O()),this.k(O()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class te{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(t,e=this,i,s){let o=this.strings,r=!1;if(void 0===o)(r=!T(t=Z(this,t,e,0))||t!==this._$AH&&t!==G)&&(this._$AH=t);else{let s,n;let a=t;for(t=o[0],s=0;s<o.length-1;s++)(n=Z(this,a[i+s],e,s))===G&&(n=this._$AH[s]),r||=!T(n)||n!==this._$AH[s],n===V?t=V:t!==V&&(t+=(n??"")+o[s+1]),this._$AH[s]=n}r&&!s&&this.O(t)}O(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ti extends te{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===V?void 0:t}}class ts extends te{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class to extends te{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??V)===G)return;let i=this._$AH,s=t===V&&i!==V||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==V&&(i===V||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class tr{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}let tn=A.litHtmlPolyfillSupport;tn?.(K,tt),(A.litHtmlVersions??=[]).push("3.1.0");let ta=(t,e,i)=>{let s=i?.renderBefore??e,o=s._$litPart$;if(void 0===o){let t=i?.renderBefore??null;s._$litPart$=o=new tt(e.insertBefore(O(),t),t,void 0,i??{})}return o._$AI(t),o};/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */class tl extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ta(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return G}}tl._$litElement$=!0,tl["finalized"]=!0,globalThis.litElementHydrateSupport?.({LitElement:tl});let th=globalThis.litElementPolyfillSupport;th?.({LitElement:tl}),(globalThis.litElementVersions??=[]).push("4.0.2");/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */let tc={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:_},td=(t=tc,e,i)=>{let{kind:s,metadata:o}=i,r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),r.set(i.name,t),"accessor"===s){let{name:s}=i;return{set(i){let o=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,o,t)},init(e){return void 0!==e&&this.C(s,void 0,t),e}}}if("setter"===s){let{name:s}=i;return function(i){let o=this[s];e.call(this,i),this.requestUpdate(s,o,t)}}throw Error("Unsupported decorator location: "+s)};function tp(t){return(e,i)=>"object"==typeof i?td(t,e,i):((t,e,i)=>{let s=e.hasOwnProperty(i);return e.constructor.createProperty(i,s?{...t,wrapped:!0}:t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function tu(t){return tp({...t,state:!0,attribute:!1})}/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */let tg=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,i);/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function tm(t,e){return(i,s,o)=>{let r=e=>e.renderRoot?.querySelector(t)??null;if(e){let{get:t,set:e}="object"==typeof s?i:o??(()=>{let t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return tg(i,s,{get(){let i=t.call(this);return void 0===i&&(null!==(i=r(this))||this.hasUpdated)&&e.call(this,i),i}})}return tg(i,s,{get(){return r(this)}})}}/*! js-cookie v3.0.5 | MIT */function tf(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)t[s]=i[s]}return t}var tb,ty=function t(e,i){function s(t,s,o){if("undefined"!=typeof document){"number"==typeof(o=tf({},i,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var r="";for(var n in o)o[n]&&(r+="; "+n,!0!==o[n]&&(r+="="+o[n].split(";")[0]));return document.cookie=t+"="+e.write(s,t)+r}}return Object.create({set:s,get:function(t){if(!("undefined"==typeof document||arguments.length&&!t)){for(var i=document.cookie?document.cookie.split("; "):[],s={},o=0;o<i.length;o++){var r=i[o].split("="),n=r.slice(1).join("=");try{var a=decodeURIComponent(r[0]);if(s[a]=e.read(n,a),t===a)break}catch(t){}}return t?s[t]:s}},remove:function(t,e){s(t,"",tf({},e,{expires:-1}))},withAttributes:function(e){return t(this.converter,tf({},this.attributes,e))},withConverter:function(e){return t(tf({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(i)},converter:{value:Object.freeze(e)}})}({read:function(t){return'"'===t[0]&&(t=t.slice(1,-1)),t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(t){return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"}),t$=function(t){return t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim().replace(/\s/g,"-").replace(/\n/g,"-").toLowerCase()};function tv(t){return!("object"!=typeof t||Array.isArray(t))&&null!=t}var t_=function(){return(t_=Object.assign||function(t){for(var e,i=1,s=arguments.length;i<s;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},tw=function(){function t(t){this.initialized=!1;var e=t.gtmId,i=t.serverSideDomain,s=t.resetDataLayerObjects,o=t.sanitizeDataLayerObjects,r=t.defer;this.gtmId="string"==typeof e?e.trim():"",this.serverSideDomain="string"==typeof i?i.trim():"",this.resetDataLayer="boolean"==typeof s&&s,this.sanitizeDataLayer="boolean"==typeof o&&o,this.defer="boolean"==typeof r&&r}return t.prototype.initialize=function(){if(this.initialized)console.warn("Google Tag Manager was already loaded");else if(this.gtmId){var t=window.document.querySelector("#gtm-snippet"),e=!1;if(t&&(e=-1!==t.src.indexOf("id=".concat(this.gtmId))),!e){var i=document.createElement("script"),s="(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.id='gtm-snippet';j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-ID');".replace("GTM-ID",this.gtmId);if(this.serverSideDomain){var o=this.serverSideDomain.replace(/http(|s):\/\/|\/$/g,"");s=s.replace("www.googletagmanager.com",o)}this.defer&&(s=s.replace("async","defer")),i.innerHTML=s,window.document.head.appendChild(i),this.initialized=!0}}else console.error("No Google Tag Manager ID was assigned")},t.prototype.dataLayerPush=function(e,i){if(window.dataLayer=window.dataLayer||[],this.sanitizeDataLayer&&function(t){if(tv(t)){var e=t_({},t);try{!function t(e){Object.keys(e).forEach(function(i){"string"==typeof e[i]?e[i]=t$(e[i]):tv(e[i])&&t(e[i])})}(t)}catch(i){console.warn("Could not sanitize string properties of the dataLayer"),t=e}}}(e),window.dataLayer.push(e),"boolean"==typeof i){if(i){var s=JSON.parse(JSON.stringify(e));t.resetPush(s)}}else if(this.resetDataLayer){var o=JSON.parse(JSON.stringify(e));t.resetPush(o)}},t.resetPush=function(t){(function(t){if(tv(t))try{return function t(e){Object.keys(e).forEach(function(i){tv(e[i])?t(e[i]):e[i]=null})}(t),!0}catch(t){return console.warn("Could not reset dataLayer"),!1}})(t)&&window.dataLayer.push(t)},t}(),tx=((t,...e)=>new r(1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]),t,s))`@keyframes fadeInUp{0%{transform:translateY(1em);opacity:0}100%{transform:translateY(0);opacity:1}}@keyframes popIn{0%{transform:translateY(100%) translateX(-100%)}100%{transform:translate(0)}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeUp{0%{opacity:0;transform:translateY(0)}100%{opacity:1;transform:translateY(-50%)}}:host{font-family:"Helvetica Neue",Helvetica,sans-serif;line-height:1.3em;display:block;width:100%;height:100%}:host .cookieOverlay{position:fixed;left:0;top:0;width:100%;height:100%;z-index:99999;background-color:rgba(0,0,0,.3);-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}:host .cookieContainer{padding:20px 30px;transform-origin:bottom;align-items:center;display:flex;flex-direction:column;position:fixed;z-index:999999;right:30px;bottom:30px;border:solid var(--border-width) currentColor;border-radius:.25em;animation:fadeInUp .3s ease-in-out}:host .cookieContainer .content{margin:0;font-size:.9em}:host .button{border:solid var(--border-width);font-size:.9em;font-weight:700;padding:5px 15px;margin:15px;margin-left:0;border-radius:1.5em;border-color:currentColor;display:inline-flex;align-items:baseline}:host .button:last-of-type{margin-right:0}:host .buttonWrapper{display:flex;justify-content:space-around}:host .miniGDPR{position:fixed;width:40px;height:40px;border-radius:0 66% 0 0;z-index:99999;bottom:0;left:0;display:flex;justify-content:center;align-items:center;border-top:solid var(--border-width);border-right:solid var(--border-width);transform-origin:bottom left;transition:transform .2s ease-in-out;animation:popIn .3s ease-in-out}:host .miniGDPR svg{height:1em}:host .miniGDPR[data-hide=true]{transform:translateY(100%) translateX(-100%)}:host .miniGDPR:active,:host .miniGDPR:hover{transform:scale(1.1)}@media only screen and (max-width:760px){:host .cookieContainer{left:30px;display:block}}:host .popUp{position:fixed;width:100vw;height:100vh;top:0;left:0;overflow:hidden;z-index:999999;animation-duration:.4s;animation-name:fadeIn;background-color:rgba(0,0,0,.3)}:host .popUp dialog{position:absolute;width:600px;height:90%;max-width:90%;min-height:0;max-height:0;border-radius:.25em;border:solid var(--border-width);left:0;right:0;margin:auto;top:50%;transform:translateY(-50%);padding:40px;overflow:hidden;transition:max-height .2s ease-in-out,min-height .2s ease-in-out;width:600px;box-shadow:0 10px 20px rgba(0,0,0,.2)}:host .popUp dialog .closeButton{top:14px;right:14px;width:25px}:host .popUp dialog[data-animate=up]{animation:fadeUp .3s ease-in-out}:host .popUp[data-gallery=true] dialog{padding:0}:host .innerWrapper{width:100%;float:left;position:relative;display:flex;align-items:center;overflow:hidden}:host .row{display:flex;flex-direction:row;gap:1em;align-items:flex-start;margin:0}:host .column{display:flex;flex:1 1;flex-direction:column;align-items:flex-start}@media only screen and (max-width:760px){:host .popUp .popUpElement{padding:25px}:host .popUp .popUpElement .closeButton{width:20px;top:5px;right:5px}:host .row{overflow-x:auto;overflow-y:hidden;scroll-snap-points-x:repeat(100%);scroll-snap-type:x mandatory;flex:1 1;-webkit-overflow-scrolling:touch;scrollbar-width:none}:host .row::-webkit-scrollbar{display:none}:host .column{width:100%;height:100%;position:relative;flex:0 0 100%;scroll-snap-align:start}}:host .container{display:inline-flex;flex-direction:column;margin-right:.5em;margin-top:.5em;font-size:.9em}:host .textLabel{margin-bottom:.5em}:host .label{position:relative;display:inline-block;width:3em;height:1.5em}:host .label .input{opacity:0;width:0;height:0;margin:0;padding:0}:host .slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;transition:.4s;border-radius:1em;border:solid var(--border-width);appearance:none}:host .slider::before{position:absolute;border-radius:50%;content:"";height:1em;width:1em;left:.2em;bottom:0;top:0;margin:auto;background-color:currentColor;transition:.4s}:host .input:focus+.slider{box-shadow:0 0 1px}:host .input:checked+.slider:before{transform:translateX(1.4em)}:host .input:disabled+.slider{opacity:.5}:host .menuButton{position:absolute;width:40px;max-width:100%;padding:0;margin:0;line-height:0;z-index:999;cursor:pointer;transition:transform .2s ease-in-out,color .2s ease-in-out;background-color:transparent;display:block;border-color:unset;outline-color:unset}:host .menuButton .hamburger{width:100%;display:inline-block;vertical-align:middle}:host .menuButton .hamburger::after,:host .menuButton .hamburger::before,:host .menuButton .hamburger>span{background-color:currentColor;border-color:currentColor;outline-color:currentColor;display:block;height:2px;margin:10px 0;transition:transform .3s cubic-bezier(.175,.885,.32,1.275),opacity .2s ease-in-out}:host .menuButton .hamburger::after,:host .menuButton .hamburger::before{content:""}:host .menuButton .hamburger::before{margin-top:0}:host .menuButton .hamburger::after{margin-bottom:0}:host .menuButton[data-open=true] .hamburger::before{transform:translateY(12px) rotate(135deg)}:host .menuButton[data-open=true] .hamburger>span{transform:translateY(0) rotate(-135deg);opacity:0}:host .menuButton[data-open=true] .hamburger::after{transform:translateY(-12px) rotate(-135deg)}:host *{box-sizing:border-box}:host button,:host input,:host textarea{color:inherit;font-size:inherit;font-family:inherit;font-weight:inherit;border:0;outline:0;background-color:transparent}:host button,:host input[type=button],:host input[type=reset],:host input[type=submit]{appearance:none}:host button:not([disabled]),:host input[type=button]:not([disabled]),:host input[type=reset]:not([disabled]),:host input[type=submit]:not([disabled]){cursor:pointer}:host button *,:host input[type=button] *,:host input[type=reset] *,:host input[type=submit] *{pointer-events:none}:host a{color:var(--accent-color)}:host svg{width:auto;height:auto;display:inline-block}:host p{margin:0;padding:.5em 0 .7em}:host .h1,:host .h2,:host .h3,:host h1,:host h2,:host h3{font-weight:700;font-size:2.2em;padding:0;margin:0;margin-top:.5em}:host .h2,:host h2{font-size:1.7em}:host .h3,:host h3{font-size:1.5em}:host .h3 svg,:host h3 svg{height:1.2em;display:inline-block;vertical-align:bottom}:host .icon-cookies{display:inline-block;margin:0;padding:0}`,tA={settings:"Cookie Settings",customize:{header:"Your data, your choice",label:"Customize",text:"We use <strong>functional cookies</strong> for navigation, etc. In addition, we use <strong>statistical cookies</strong> to see how users interact with the website.",retargetingText:"We also use cookies for marketing.",link:'See our <a href="/%URL%">privacy policy</a>'},header:"This website uses",accept:"I understand",acceptAll:"Accept all",decline:"Only functional",close:"Close",save:"Save preferences",functional:{label:"Functional"},statistical:{label:"Statistical"},marketing:{label:"Marketing"},policyUrl:"privacy"},tk={settings:"Param\xe8tres des cookies",customize:{header:"Vos donn\xe9es, votre choix",label:"Personnaliser",text:"Nous utilisons des <strong>cookies fonctionnels</strong> pour la navigation, etc. De plus, nous utilisons des <strong>cookies statistiques</strong> pour voir comment les utilisateurs interagissent avec le site Web.",retargetingText:"Nous utilisons \xe9galement des cookies \xe0 des fins de marketing.",link:'Consultez notre <a href="/%URL%">politique de confidentialit\xe9</a>'},header:"Ce site Web est utilis\xe9",accept:"Je comprends",acceptAll:"Accepter tout",decline:"Uniquement fonctionnel",close:"Fermer",save:"Enregistrer les pr\xe9f\xe9rences",functional:{label:"Fonctionnel"},statistical:{label:"Calcul statistique"},marketing:{label:"Commercialisation"},policyUrl:"confidentialite"},tC={settings:"Cookieinnstillinger",customize:{header:"Dine data, ditt valg",label:"Tilpass",text:"Vi bruker <strong>funksjonelle cookies</strong> til navigering og lignende. I tillegg bruker vi <strong>statistiske cookies</strong> til \xe5 se hvordan brukere interagerer med nettsiden.",retargetingText:"Vi bruker ogs\xe5 cookies til markedsf\xf8ring.",link:'Les mer p\xe5 v\xe5r <a href="/%URL%">personvernserkl\xe6ring</a>'},header:"Denne nettsida bruker",accept:"Jeg forst\xe5r",acceptAll:"Godta alle",decline:"Bare funksjonelle",close:"Lukk",save:"Lagre innstillinger",functional:{label:"Funksjonell"},statistical:{label:"Statistisk"},marketing:{label:"Markedsf\xf8ring"},policyUrl:"personvern"};let tS=document.documentElement.lang.toLowerCase()||"en",tE=["en","fr","nb","no"].find(t=>tS.includes(t))||"en",tU=t=>t??V;var tP=F`<svg xmlns="http://www.w3.org/2000/svg" width="992" height="1024" viewBox="0 0 992 1024"><path d="M810.112 4.992c-27.232 0-49.28 22.112-49.344 49.344 0 27.232 22.112 49.344 49.344 49.344s49.344-22.112 49.344-49.344c0-27.232-22.112-49.344-49.344-49.344zm13.184 429.728c-167.424 54.048-292.352-63.52-236.384-243.232-61.728-22.944-82.24-90.368-58.016-166.24C255.36 11.456 14.336 224.416.672 498.048c-13.792 273.536 196.896 506.432 470.368 520.32 273.6 13.792 506.528-196.896 520.32-470.464 1.248-24.736.672-49.184-1.664-73.088-69.952 43.008-123.84 23.52-166.432-40.032zm-575.52-35.392c40.992 0 74.176 33.248 74.176 74.176s-33.248 74.176-74.176 74.176c-40.992 0-74.176-33.248-74.176-74.176s33.248-74.176 74.176-74.176zm233.696 94.56c23.616 0 42.752 19.136 42.752 42.752s-19.136 42.752-42.752 42.752c-23.616 0-42.752-19.136-42.752-42.752-.096-23.616 19.072-42.752 42.752-42.752zM295.968 669.952c28.8 0 52.16 23.36 52.16 52.16s-23.36 52.16-52.16 52.16c-28.8 0-52.16-23.36-52.16-52.16 0-28.864 23.36-52.16 52.16-52.16zm112.384-399.008c22.624 0 40.832 18.304 40.832 40.832 0 22.624-18.304 40.832-40.832 40.832-22.624 0-40.832-18.304-40.832-40.832s18.304-40.832 40.832-40.832zm221.952 417.28c37.856 0 68.48 30.688 68.48 68.48 0 37.856-30.688 68.48-68.48 68.48-37.856 0-68.48-30.688-68.48-68.48s30.688-68.48 68.48-68.48zm144.224-492.608c25.408 0 46.048 20.64 46.048 46.048s-20.64 46.048-46.048 46.048-46.048-20.64-46.048-46.048 20.64-46.048 46.048-46.048z"/></svg>`;function tz(){return F`<button class="miniGDPR" @click="${this.setVisible}" style="background-color:${this.accentColor}" data-hide="false"><figure aria-label="${tU(this.text?.settings)}" class="icon-cookies">${tP}</figure></button>`}class tO{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */class tT extends tO{constructor(t){if(super(t),this.et=V,2!==t.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===V||null==t)return this.vt=void 0,this.et=t;if(t===G)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.vt;this.et=t;let e=[t];return e.raw=e,this.vt={_$litType$:this.constructor.resultType,strings:e,values:[]}}}tT.directiveName="unsafeHTML",tT.resultType=1;let tR=(...t)=>({_$litDirective$:tT,values:t});function tL(){let t=!!this.customize;return F`<div class="popUp fadeIn"><dialog ?open="${t}" style="color:${this.color};background-color:${this.backgroundColor}">${function({className:t,onClick:e,isOpen:i}){return F`<button @click="${e}" class="menuButton ${t??V}" data-open="${i}"><span class="hamburger"><span></span></span></button>`}({className:"closeButton",isOpen:t,onClick:()=>this.setCustomize(!t)})}<div class="dialog-inner-box" style="display:flex;flex-direction:column"><h3><figure aria-label="cookies" class="icon-cookies">${tP}</figure>${" "}${this.text?.customize.header}</h3><p>${tR(this.text?.customize.text)}</p><p>${tR(this.text?.customize.link.replace("%URL%",this.text?.policyUrl))}</p><div class="buttonWrapper"><button aria-label="${tU(this.text?.decline)}" class="button bg-hover gdpr" @click="${this.declineAll}">${this.text?.decline}</button> <button aria-label="${tU(this.text?.accept)}" class="button dark-bg bg-hover gdpr" @click="${this.acceptAll}" style="background-color:${this.accentColor}">${this.statistical||this.retargeting?this.text?.save:this.text?.acceptAll}</button></div><div class="buttonWrapper">${this.switchButton({label:this.text?.functional.label,value:!0})} ${this.switchButton({label:this.text?.statistical.label,name:"statistical",onChangeHandler:this.handleChange,value:!!this.statistical})} ${this.hasRetargeting?this.switchButton({label:this.text?.marketing.label,name:"retargeting",onChangeHandler:this.handleChange,value:!!this.retargeting}):V}</div></div></dialog></div>`}function tN(){return F`<div class="cookieContainer" style="color:${this.color};background-color:${this.backgroundColor}"><div class="content"><div aria-describedby="cookieWarningText" aria-labelledby="cookieWarningText" aria-modal="false" role="dialog"><p class="h3" id="cookieWarningText" lang="${document.documentElement.lang}">${this.text?.header}${" "}${tP}</p></div><div class="buttonWrapper"><button aria-label="${tU(this.text?.customize.label)}" class="button gdpr" @click="${this.setCustomize}" style="background-color:${this.accentColor}">${this.text?.customize.label}</button> <button aria-label="${tU(this.text?.accept)}" class="button gdpr" @click="${this.acceptAll}" style="backgroundColor:${this.accentColor}">${this.text?.accept}</button></div></div></div>`}let tD=t=>{let e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${t??`:${e()}`}-${e()}`};function tH({name:t,label:e,onChangeHandler:i,value:s}){let o=tD();return F`<div class="container">${e?F`<label class="textLabel" for="${o}">${e}</label>`:V} <label class="label"><input ?checked="${s}" class="input" ?disabled="${!i}" id="${o}" name="${tU(t)}" type="checkbox" @change="${i}" value="${s}"> <span class="slider" style="color:${this.color};background-color:${this.accentColor}"></span></label></div>`}function tM(t,e,i,s){for(var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n}class tI extends tl{_getConsent(){let t=ty.get("CookieConsent");if(t)return JSON.parse(decodeURIComponent(t))}save(){let t={functionality_storage:!0,analytics_storage:this.statistical,ad_storage:this.retargeting,personalization_storage:this.retargeting,security_storage:!0};for(let e of(ty.set("CookieConsent",encodeURIComponent(JSON.stringify(t)),{sameSite:"lax",expires:365,secure:!0}),this._consentListeners))e(t)}acceptAll(){let t={statistical:this.statistical,retargeting:this.retargeting};this.statistical=!0,this.retargeting=!0,setTimeout(()=>{this._visible=!1,this.customize=!1},this.customize&&(!t.statistical||!t.retargeting)?800:0),window.dataLayer&&window.google_tag_data||this._gtm?.initialize(),this.save()}declineAll(){this._visible=!1,this.customize=!1,this.statistical=!1,this.retargeting=!1,(window.dataLayer||window.google_tag_data)&&location.reload(),this.save()}esc({key:t}){this.customize&&"Escape"===t&&this.setCustomize(!1)}setCustomize(t){this.customize=!!t,this._visible=!t,this.statistical=!!this.statistical,this.retargeting=!!this.retargeting,t&&setTimeout(()=>{let t=`${(this.dialogInner?.offsetHeight??0)+80}px`;this.dialog&&Object.assign(this.dialog.style,{minHeight:t,maxHeight:t})},10)}handleChange({target:t}){if(t instanceof HTMLInputElement){let{checked:e,name:i}=t;i in this&&(this[i]=e)}}setVisible(){ty.remove("CookieConsent"),this.statistical=null,this.retargeting=null,this._visible=!this._visible}hideOnScroll(){let t=document.body.getBoundingClientRect();this.mini&&(this.mini.dataset.hide=(t.top<this._scrollPos&&t.top<-20).toString()),this._scrollPos=t.top}static get styles(){return tx}connectedCallback(){super.connectedCallback(),this.statistical=this._getConsent()?.analytics_storage??null,this.retargeting=this._getConsent()?.ad_storage??null,this.text=function(){switch(tE){case"fr":return tk;case"no":case"nb":return tC;default:return tA}}();let t=this.shadowRoot?.adoptedStyleSheets[0];t?.insertRule(`:host{--border-width:${this.borderWidth}px;h1,.h1,h2,.h2,h3,.h3{font-family:${this.fontFamily};}}`),this._gtm=new tw({gtmId:this.gtmId}),(this.statistical||this.retargeting)&&this._gtm.initialize(),window.addGDPRConsent=t=>{this._consentListeners.push(t)},document.addEventListener("keydown",this.esc,{passive:!0,capture:!0}),document.addEventListener("scroll",this.hideOnScroll,{passive:!0,capture:!0})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.esc),document.removeEventListener("scroll",this.hideOnScroll)}render(){return(this.customize||this.statistical||!1===this.statistical)&&!this._visible?this.customize?this._popUp():this._miniGDPR():this._cookieWarning()}constructor(){super(),this.color="#000",this.backgroundColor="#FFF",this.accentColor="#FFF",this.fontFamily='"Helvetica Neue", Helvetica, sans-serif',this.borderWidth=2,this.hasRetargeting=!1,this.statistical=null,this.retargeting=null,this._visible=!1,this.customize=null,this._scrollPos=0,this._consentListeners=[],this._popUp=tL,this._cookieWarning=tN,this._miniGDPR=tz,this.switchButton=tH,this.esc=this.esc.bind(this),this.hideOnScroll=this.hideOnScroll.bind(this)}}tM([tp()],tI.prototype,"gtmId",void 0),tM([tp()],tI.prototype,"color",void 0),tM([tp()],tI.prototype,"backgroundColor",void 0),tM([tp()],tI.prototype,"accentColor",void 0),tM([tp()],tI.prototype,"fontFamily",void 0),tM([tp({type:Number})],tI.prototype,"borderWidth",void 0),tM([tp({type:Boolean})],tI.prototype,"hasRetargeting",void 0),tM([tp({type:Object})],tI.prototype,"text",void 0),tM([tu()],tI.prototype,"statistical",void 0),tM([tu()],tI.prototype,"retargeting",void 0),tM([tm("dialog")],tI.prototype,"dialog",void 0),tM([tm(".dialog-inner-box")],tI.prototype,"dialogInner",void 0),tM([tm(".miniGDPR")],tI.prototype,"mini",void 0),tM([tu()],tI.prototype,"_visible",void 0),tM([tu()],tI.prototype,"customize",void 0),tI=tM([(tb="am-gdpr",(t,e)=>{void 0!==e?e.addInitializer(()=>{customElements.define(tb,t)}):customElements.define(tb,t)})],tI),t.AMGDPR=tI})(this["am-gdpr"]=this["am-gdpr"]||{});
