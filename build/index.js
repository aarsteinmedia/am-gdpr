
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function (exports) {
  'use strict';

  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$3=globalThis,e$6=t$3.ShadowRoot&&(void 0===t$3.ShadyCSS||t$3.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$5=new WeakMap;let n$3 = class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$6&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$5.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$5.set(s,t));}return t}toString(){return this.cssText}};const r$5=t=>new n$3("string"==typeof t?t:t+"",void 0,s$2),i$3=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n$3(o,t,s$2)},S$1=(s,o)=>{if(e$6)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$3.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$6?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$5(e)})(t):t;

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const{is:i$2,defineProperty:e$5,getOwnPropertyDescriptor:r$4,getOwnPropertyNames:h$1,getOwnPropertySymbols:o$4,getPrototypeOf:n$2}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$2(t,s),y$1={attribute:!0,type:String,converter:u$1,reflect:!1,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=y$1){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,s);void 0!==r&&e$5(this.prototype,t,r);}}static getPropertyDescriptor(t,s,i){const{get:e,set:h}=r$4(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get(){return e?.call(this)},set(s){const r=e?.call(this);h.call(this,s),this.requestUpdate(t,r,i);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$2(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...h$1(t),...o$4(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return !1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$EC(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==r?this.removeAttribute(e):this.setAttribute(e,r),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e,this[e]=r.fromAttribute(s,t.type),this._$Em=null;}}requestUpdate(t,s,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??f$1)(this[t],s))return;this.P(t,s,i);}!1===this.isUpdatePending&&(this._$ES=this._$ET());}P(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t);}async _$ET(){this.isUpdatePending=!0;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t)!0!==i.wrapped||this._$AL.has(s)||void 0===this[s]||this.P(s,this[s],i);}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EU();}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return !0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU();}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[d$1("elementProperties")]=new Map,b[d$1("finalized")]=new Map,p$1?.({ReactiveElement:b}),(a$1.reactiveElementVersions??=[]).push("2.0.4");

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$2=globalThis,i$1=t$2.trustedTypes,s$1=i$1?i$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$4="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o$3="?"+h,n$1=`<${o$3}>`,r$3=document,l=()=>r$3.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r$3.createTreeWalker(r$3,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$1?s$1.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n$1:d>=0?(o.push(a),s.slice(0,d)+e$4+s.slice(d)+h+x):s+h+(-2===d?i:x);}return [C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e$4)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t);}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i$1?i$1.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l());}}}else if(8===r.nodeType)if(r.data===o$3)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1;}c++;}}static createElement(t,i){const s=r$3.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$3).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=E.nextNode(),o++);}return E.currentNode=r$3,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u(t)?this.k(t):this._(t);}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t));}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.T(r$3.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new S(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}k(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.S(l()),this.S(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T;}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class k extends R{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===T?void 0:t;}}class H extends R{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==T);}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t);}}const Z=t$2.litHtmlPolyfillSupport;Z?.(V,M),(t$2.litHtmlVersions??=[]).push("3.1.2");const j=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new M(i.insertBefore(l(),t),t,void 0,s??{});}return h._$AI(t),h};

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */class s extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=j(i,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1);}render(){return w}}s._$litElement$=!0,s[("finalized")]=!0,globalThis.litElementHydrateSupport?.({LitElement:s});const r$2=globalThis.litElementPolyfillSupport;r$2?.({LitElement:s});(globalThis.litElementVersions??=[]).push("4.0.4");

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$1=t=>(e,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(t,e);})):customElements.define(t,e);};

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const o$2={attribute:!0,type:String,converter:u$1,reflect:!1,hasChanged:f$1},r$1=(t=o$2,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t);},init(e){return void 0!==e&&this.P(o,void 0,t),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t);}}throw Error("Unsupported decorator location: "+n)};function n(t){return (e,o)=>"object"==typeof o?r$1(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function r(r){return n({...r,state:!0,attribute:!1})}

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const e$3=(e,t,c)=>(c.configurable=!0,c.enumerable=!0,c);

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function e$2(e,r){return (n,s,i)=>{const o=t=>t.renderRoot?.querySelector(e)??null;if(r){const{get:e,set:r}="object"==typeof s?n:i??(()=>{const t=Symbol();return {get(){return this[t]},set(e){this[t]=e;}}})();return e$3(n,s,{get(){let t=e.call(this);return void 0===t&&(t=o(this),(null!==t||this.hasUpdated)&&r.call(this,t)),t}})}return e$3(n,s,{get(){return o(this)}})}}

  /*! js-cookie v3.0.5 | MIT */
  /* eslint-disable no-var */
  function assign (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        target[key] = source[key];
      }
    }
    return target
  }
  /* eslint-enable no-var */

  /* eslint-disable no-var */
  var defaultConverter = {
    read: function (value) {
      if (value[0] === '"') {
        value = value.slice(1, -1);
      }
      return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    },
    write: function (value) {
      return encodeURIComponent(value).replace(
        /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
        decodeURIComponent
      )
    }
  };
  /* eslint-enable no-var */

  /* eslint-disable no-var */

  function init (converter, defaultAttributes) {
    function set (name, value, attributes) {
      if (typeof document === 'undefined') {
        return
      }

      attributes = assign({}, defaultAttributes, attributes);

      if (typeof attributes.expires === 'number') {
        attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
      }
      if (attributes.expires) {
        attributes.expires = attributes.expires.toUTCString();
      }

      name = encodeURIComponent(name)
        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
        .replace(/[()]/g, escape);

      var stringifiedAttributes = '';
      for (var attributeName in attributes) {
        if (!attributes[attributeName]) {
          continue
        }

        stringifiedAttributes += '; ' + attributeName;

        if (attributes[attributeName] === true) {
          continue
        }

        // Considers RFC 6265 section 5.2:
        // ...
        // 3.  If the remaining unparsed-attributes contains a %x3B (";")
        //     character:
        // Consume the characters of the unparsed-attributes up to,
        // not including, the first %x3B (";") character.
        // ...
        stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
      }

      return (document.cookie =
        name + '=' + converter.write(value, name) + stringifiedAttributes)
    }

    function get (name) {
      if (typeof document === 'undefined' || (arguments.length && !name)) {
        return
      }

      // To prevent the for loop in the first place assign an empty array
      // in case there are no cookies at all.
      var cookies = document.cookie ? document.cookie.split('; ') : [];
      var jar = {};
      for (var i = 0; i < cookies.length; i++) {
        var parts = cookies[i].split('=');
        var value = parts.slice(1).join('=');

        try {
          var found = decodeURIComponent(parts[0]);
          jar[found] = converter.read(value, found);

          if (name === found) {
            break
          }
        } catch (e) {}
      }

      return name ? jar[name] : jar
    }

    return Object.create(
      {
        set,
        get,
        remove: function (name, attributes) {
          set(
            name,
            '',
            assign({}, attributes, {
              expires: -1
            })
          );
        },
        withAttributes: function (attributes) {
          return init(this.converter, assign({}, this.attributes, attributes))
        },
        withConverter: function (converter) {
          return init(assign({}, this.converter, converter), this.attributes)
        }
      },
      {
        attributes: { value: Object.freeze(defaultAttributes) },
        converter: { value: Object.freeze(converter) }
      }
    )
  }

  var api = init(defaultConverter, { path: '/' });

  var css_248z = i$3`@keyframes fadeInUp{0%{transform:translateY(1em);opacity:0}100%{transform:translateY(0);opacity:1}}@keyframes popIn{0%{transform:translateY(100%) translateX(-100%)}100%{transform:translate(0)}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeUp{0%{opacity:0;transform:translateY(0)}100%{opacity:1;transform:translateY(-50%)}}:host{font-family:"Helvetica Neue",Helvetica,sans-serif;line-height:1.3em;display:block;width:100%;height:100%}:host .cookieOverlay{position:fixed;left:0;top:0;width:100%;height:100%;z-index:99999;background-color:rgba(0,0,0,.3);-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}:host .cookieContainer{padding:20px 30px;transform-origin:bottom;align-items:center;display:flex;flex-direction:column;position:fixed;z-index:999999;right:30px;bottom:30px;border:solid var(--border-width) currentColor;border-radius:.25em;animation:fadeInUp .3s ease-in-out}:host .cookieContainer .content{margin:0;font-size:.9em}:host .button{border:solid var(--border-width);font-size:.9em;font-weight:700;padding:5px 15px;margin:15px;margin-left:0;border-radius:1.5em;border-color:currentColor;display:inline-flex;align-items:baseline}:host .button:last-of-type{margin-right:0}:host .buttonWrapper{display:flex;gap:.5em}:host .miniGDPR{position:fixed;width:40px;height:40px;border-radius:0 66% 0 0;z-index:99999;bottom:0;left:0;display:flex;justify-content:center;align-items:center;border-top:solid var(--border-width);border-right:solid var(--border-width);transform-origin:bottom left;transition:transform .2s ease-in-out;animation:popIn .3s ease-in-out}:host .miniGDPR svg{height:1em}:host .miniGDPR[data-hide=true]{transform:translateY(100%) translateX(-100%)}:host .miniGDPR:active,:host .miniGDPR:hover{transform:scale(1.1)}@media only screen and (max-width:760px){:host .cookieContainer{left:30px;display:block}}:host .popUp{position:fixed;width:100vw;height:100vh;top:0;left:0;overflow:hidden;z-index:999999;animation-duration:.4s;animation-name:fadeIn;background-color:rgba(0,0,0,.3)}:host .popUp dialog{position:absolute;width:600px;height:90%;max-width:90%;min-height:0;max-height:0;border-radius:.25em;border:solid var(--border-width);left:0;right:0;margin:auto;top:50%;transform:translateY(-50%);padding:40px;overflow:hidden;transition:max-height .2s ease-in-out,min-height .2s ease-in-out;width:600px;box-shadow:0 10px 20px rgba(0,0,0,.2)}:host .popUp dialog .closeButton{top:14px;right:14px;width:25px}:host .popUp dialog[data-animate=up]{animation:fadeUp .3s ease-in-out}:host .popUp[data-gallery=true] dialog{padding:0}:host .innerWrapper{width:100%;float:left;position:relative;display:flex;align-items:center;overflow:hidden}:host .row{display:flex;flex-direction:row;gap:1em;align-items:flex-start;margin:0}:host .column{display:flex;flex:1 1;flex-direction:column;align-items:flex-start}@media only screen and (max-width:760px){:host .popUp .popUpElement{padding:25px}:host .popUp .popUpElement .closeButton{width:20px;top:5px;right:5px}:host .row{overflow-x:auto;overflow-y:hidden;scroll-snap-points-x:repeat(100%);scroll-snap-type:x mandatory;flex:1 1;-webkit-overflow-scrolling:touch;scrollbar-width:none}:host .row::-webkit-scrollbar{display:none}:host .column{width:100%;height:100%;position:relative;flex:0 0 100%;scroll-snap-align:start}}:host .container{display:inline-flex;flex-direction:column;margin-right:.5em;margin-top:.5em;font-size:.9em}:host .textLabel{margin-bottom:.5em}:host .label{position:relative;display:inline-block;width:3em;height:1.5em}:host .label .input{opacity:0;width:0;height:0;margin:0;padding:0}:host .slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;transition:.4s;border-radius:1em;border:solid var(--border-width);appearance:none}:host .slider::before{position:absolute;border-radius:50%;content:"";height:1em;width:1em;left:.2em;bottom:0;top:0;margin:auto;background-color:currentColor;transition:.4s}:host .input:focus+.slider{box-shadow:0 0 1px}:host .input:checked+.slider:before{transform:translateX(1.4em)}:host .input:disabled+.slider{opacity:.5}:host .menuButton{position:absolute;width:40px;max-width:100%;padding:0;margin:0;line-height:0;z-index:999;cursor:pointer;transition:transform .2s ease-in-out,color .2s ease-in-out;background-color:transparent;display:block;border-color:unset;outline-color:unset}:host .menuButton .hamburger{width:100%;display:inline-block;vertical-align:middle}:host .menuButton .hamburger::after,:host .menuButton .hamburger::before,:host .menuButton .hamburger>span{background-color:currentColor;border-color:currentColor;outline-color:currentColor;display:block;height:2px;margin:10px 0;transition:transform .3s cubic-bezier(.175,.885,.32,1.275),opacity .2s ease-in-out}:host .menuButton .hamburger::after,:host .menuButton .hamburger::before{content:""}:host .menuButton .hamburger::before{margin-top:0}:host .menuButton .hamburger::after{margin-bottom:0}:host .menuButton[data-open=true] .hamburger::before{transform:translateY(12px) rotate(135deg)}:host .menuButton[data-open=true] .hamburger>span{transform:translateY(0) rotate(-135deg);opacity:0}:host .menuButton[data-open=true] .hamburger::after{transform:translateY(-12px) rotate(-135deg)}:host *{box-sizing:border-box}:host button,:host input,:host textarea{color:inherit;font-size:inherit;font-family:inherit;font-weight:inherit;border:0;outline:0;background-color:transparent}:host button,:host input[type=button],:host input[type=reset],:host input[type=submit]{appearance:none}:host button:not([disabled]),:host input[type=button]:not([disabled]),:host input[type=reset]:not([disabled]),:host input[type=submit]:not([disabled]){cursor:pointer}:host button *,:host input[type=button] *,:host input[type=reset] *,:host input[type=submit] *{pointer-events:none}:host a{color:var(--accent-color)}:host svg{width:auto;height:auto;display:inline-block}:host svg path{fill:currentColor}:host p{margin:0;padding:.5em 0 .7em}:host .h1,:host .h2,:host .h3,:host h1,:host h2,:host h3{font-weight:700;font-size:2.2em;padding:0;margin:0;margin-top:.5em}:host .h2,:host h2{font-size:1.7em}:host .h3,:host h3{font-size:1.5em}:host .h3 svg,:host h3 svg{height:1.2em;display:inline-block;vertical-align:bottom}:host .icon-cookies{display:inline-block;margin:0;padding:0}`;

  var settings$2="Cookie Settings";var customize$2={header:"Your data, your choice",label:"Customize",text:"We use <strong>functional cookies</strong> for navigation, etc. In addition, we use <strong>statistical cookies</strong> to see how users interact with the website.",retargetingText:"We also use cookies for marketing.",link:"See our <a href=\"/%URL%\">privacy policy</a>"};var header$2="This website uses";var accept$2="I understand";var acceptAll$2="Accept all";var decline$2="Only functional";var close$2="Close";var save$2="Save preferences";var functional$2={label:"Functional"};var statistical$2={label:"Statistical"};var marketing$2={label:"Marketing"};var policyUrl$2="privacy";var en = {settings:settings$2,customize:customize$2,header:header$2,accept:accept$2,acceptAll:acceptAll$2,decline:decline$2,close:close$2,save:save$2,functional:functional$2,statistical:statistical$2,marketing:marketing$2,policyUrl:policyUrl$2};

  var settings$1="Paramètres des cookies";var customize$1={header:"Vos données, votre choix",label:"Personnaliser",text:"Nous utilisons des <strong>cookies fonctionnels</strong> pour la navigation, etc. De plus, nous utilisons des <strong>cookies statistiques</strong> pour voir comment les utilisateurs interagissent avec le site Web.",retargetingText:"Nous utilisons également des cookies à des fins de marketing.",link:"Consultez notre <a href=\"/%URL%\">politique de confidentialité</a>"};var header$1="Ce site Web est utilisé";var accept$1="Je comprends";var acceptAll$1="Accepter tout";var decline$1="Uniquement fonctionnel";var close$1="Fermer";var save$1="Enregistrer les préférences";var functional$1={label:"Fonctionnel"};var statistical$1={label:"Calcul statistique"};var marketing$1={label:"Commercialisation"};var policyUrl$1="confidentialite";var fr = {settings:settings$1,customize:customize$1,header:header$1,accept:accept$1,acceptAll:acceptAll$1,decline:decline$1,close:close$1,save:save$1,functional:functional$1,statistical:statistical$1,marketing:marketing$1,policyUrl:policyUrl$1};

  var settings="Cookieinnstillinger";var customize={header:"Dine data, ditt valg",label:"Tilpass",text:"Vi bruker <strong>funksjonelle cookies</strong> til navigering og lignende. I tillegg bruker vi <strong>statistiske cookies</strong> til å se hvordan brukere interagerer med nettsiden.",retargetingText:"Vi bruker også cookies til markedsføring.",link:"Les mer på vår <a href=\"/%URL%\">personvernserklæring</a>"};var header="Denne nettsida bruker";var accept="Jeg forstår";var acceptAll="Godta alle";var decline="Bare funksjonelle";var close="Lukk";var save="Lagre innstillinger";var functional={label:"Funksjonell"};var statistical={label:"Statistisk"};var marketing={label:"Markedsføring"};var policyUrl="personvern";var no = {settings:settings,customize:customize,header:header,accept:accept,acceptAll:acceptAll,decline:decline,close:close,save:save,functional:functional,statistical:statistical,marketing:marketing,policyUrl:policyUrl};

  const languages = [
      'en',
      'fr',
      'nb',
      'no'
  ], fallbackLanguage = 'en', browserLanguage = document.documentElement.lang.toLowerCase() || fallbackLanguage, translation = languages.find((lang)=>browserLanguage.includes(lang)) || fallbackLanguage;
  function getTranslation() {
      switch(translation){
          case 'fr':
              return fr;
          case 'no':
          case 'nb':
              return no;
          default:
              return en;
      }
  }

  const gtmCode = (gtmId, defer, domain)=>`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.id='gtm-snippet';j.${defer ? 'defer' : 'async'}=true;j.src=\n'https://${domain}/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','${gtmId}');`, hasKey = (obj, key)=>{
      return key in obj;
  }, resetDataLayer = (obj)=>{
      try {
          if (!(obj instanceof Object)) {
              return false;
          }
          for (const key of Object.keys(obj)){
              if (obj[key] instanceof Object) {
                  resetDataLayer(obj[key]);
                  continue;
              }
              obj[key] = null;
          }
          return true;
      } catch (err) {
          console.warn('Could not reset dataLayer');
          return false;
      }
  }, sanitize = (str)=>str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().replace(/\s/g, '-').replace(/\n/gm, '-').toLowerCase(), sanitizeObject = (obj)=>{
      try {
          for (const key of Object.keys(obj)){
              if (hasKey(obj, key)) {
                  if (typeof obj[key] === 'string') {
                      obj[key] = sanitize(obj[key]);
                      continue;
                  }
                  sanitizeObject(obj[key]);
              }
          }
      } catch (err) {
          console.error('Could not sanitize dataLayer properties');
      }
  }, useId = (prefix)=>{
      const s4 = ()=>{
          return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
      };
      return `${prefix ?? `:${s4()}`}-${s4()}`;
  };

  let GTM = class GTM {
      initialize() {
          if (this._initialized) {
              console.warn('Google Tag Manager is already loaded');
              return;
          }
          if (!this.gtmId) {
              console.error('No Google Tag Manager ID was assigned');
              return;
          }
          const isAlreadyLoaded = document.getElementById('gtm-snippet');
          if (!(isAlreadyLoaded && 'src' in isAlreadyLoaded && typeof isAlreadyLoaded.src === 'string' && isAlreadyLoaded.src.includes(`id=${this.gtmId}`))) {
              const script = document.createElement('script'), innerHTML = gtmCode(this.gtmId, this.defer, this.serverSideDomain ? this.serverSideDomain.replace(/http(|s):\/\/|\/$/g, '') : 'www.googletagmanager.com');
              script.innerHTML = innerHTML;
              document.head.appendChild(script);
              this._initialized = true;
          }
      }
      dataLayerPush(obj, reset = false) {
          window.dataLayer = window.dataLayer || [];
          if (this.sanitizeDataLayer) {
              sanitizeObject(obj);
          }
          window.dataLayer.push(obj);
          if (reset || this.resetDataLayer) {
              this._reset(JSON.parse(JSON.stringify(obj)));
          }
      }
      _reset(obj) {
          window.dataLayer = window.dataLayer || [];
          if (resetDataLayer(obj)) {
              window.dataLayer.push(obj);
          }
      }
      constructor({ gtmId = null, resetDataLayer = false, sanitizeDataLayer = false, serverSideDomain = null, defer = false }){
          this._initialized = false;
          this.gtmId = null;
          this.resetDataLayer = false;
          this.sanitizeDataLayer = false;
          this.serverSideDomain = null;
          this.defer = false;
          this.gtmId = gtmId ? gtmId.trim() : null;
          this.resetDataLayer = !!resetDataLayer;
          this.sanitizeDataLayer = !!sanitizeDataLayer;
          this.serverSideDomain = serverSideDomain ? serverSideDomain.trim() : null;
          this.defer = !!defer;
      }
  };

  /**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const o$1=o=>o??T;

  var icon = x`<svg xmlns="http://www.w3.org/2000/svg" width="992" height="1024" viewBox="0 0 992 1024"><path d="M810.112 4.992c-27.232 0-49.28 22.112-49.344 49.344 0 27.232 22.112 49.344 49.344 49.344s49.344-22.112 49.344-49.344c0-27.232-22.112-49.344-49.344-49.344zm13.184 429.728c-167.424 54.048-292.352-63.52-236.384-243.232-61.728-22.944-82.24-90.368-58.016-166.24C255.36 11.456 14.336 224.416.672 498.048c-13.792 273.536 196.896 506.432 470.368 520.32 273.6 13.792 506.528-196.896 520.32-470.464 1.248-24.736.672-49.184-1.664-73.088-69.952 43.008-123.84 23.52-166.432-40.032zm-575.52-35.392c40.992 0 74.176 33.248 74.176 74.176s-33.248 74.176-74.176 74.176c-40.992 0-74.176-33.248-74.176-74.176s33.248-74.176 74.176-74.176zm233.696 94.56c23.616 0 42.752 19.136 42.752 42.752s-19.136 42.752-42.752 42.752c-23.616 0-42.752-19.136-42.752-42.752-.096-23.616 19.072-42.752 42.752-42.752zM295.968 669.952c28.8 0 52.16 23.36 52.16 52.16s-23.36 52.16-52.16 52.16c-28.8 0-52.16-23.36-52.16-52.16 0-28.864 23.36-52.16 52.16-52.16zm112.384-399.008c22.624 0 40.832 18.304 40.832 40.832 0 22.624-18.304 40.832-40.832 40.832-22.624 0-40.832-18.304-40.832-40.832s18.304-40.832 40.832-40.832zm221.952 417.28c37.856 0 68.48 30.688 68.48 68.48 0 37.856-30.688 68.48-68.48 68.48-37.856 0-68.48-30.688-68.48-68.48s30.688-68.48 68.48-68.48zm144.224-492.608c25.408 0 46.048 20.64 46.048 46.048s-20.64 46.048-46.048 46.048-46.048-20.64-46.048-46.048 20.64-46.048 46.048-46.048z"/></svg>`;

  function miniGDPR() {
      return x`<button class="miniGDPR" @click="${this.setVisible}" style="color:${this.color};background-color:${this.accentColor}" data-hide="false"><figure aria-label="${o$1(this.text?.settings)}" class="icon-cookies">${icon}</figure></button>`;
  }

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$1=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */class e extends i{constructor(i){if(super(i),this.it=T,i.type!==t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===T||null==r)return this._t=void 0,this.it=r;if(r===w)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;const s=[r];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;const o=e$1(e);

  function uiButton({ className, onClick, isOpen }) {
      return x`<button @click="${onClick}" class="menuButton ${className ?? T}" data-open="${isOpen}"><span class="hamburger"><span></span></span></button>`;
  }

  var loading = x`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="currentColor"><style>@keyframes spinner_zKoa{to{transform:rotate(360deg)}}@keyframes spinner_YpZS{0%{stroke-dasharray:0 150;stroke-dashoffset:0}47.5%{stroke-dasharray:42 150;stroke-dashoffset:-16}95%,to{stroke-dasharray:42 150;stroke-dashoffset:-59}}</style><g style="transform-origin:center;animation:spinner_zKoa 2s linear infinite"><circle cx="12" cy="12" r="9.5" fill="none" stroke-width="3" style="stroke-linecap:round;animation:spinner_YpZS 1.5s ease-in-out infinite"/></g></svg>`;

  function popUp() {
      const isOpen = !!this.customize;
      return x`<div class="popUp fadeIn"><dialog ?open="${isOpen}" style="color:${this.color};background-color:${this.backgroundColor}">${uiButton({
        className: 'closeButton',
        isOpen,
        onClick: ()=>this.setCustomize(!isOpen)
    })}<div class="dialog-inner-box" style="display:flex;flex-direction:column"><h3><figure aria-label="cookies" class="icon-cookies">${icon}</figure>${' '}${this.text?.customize.header}</h3><p>${o(this.text?.customize.text)}</p><p>${o(this.text?.customize.link.replace('%URL%', this.text?.policyUrl))}</p><div class="buttonWrapper"><button aria-label="${o$1(this.text?.decline)}" class="button bg-hover gdpr" @click="${this.declineAll}">${this.text?.decline}</button> <button aria-label="${o$1(this.text?.accept)}" class="button dark-bg bg-hover gdpr" @click="${this.acceptAll}" style="background-color:${this.accentColor}">${this.saving ? loading : this.statistical || this.retargeting ? this.text?.save : this.text?.acceptAll}</button></div><div class="buttonWrapper">${this.switchButton({
        label: this.text?.functional.label,
        value: true
    })} ${this.switchButton({
        label: this.text?.statistical.label,
        name: 'statistical',
        onChangeHandler: this.handleChange,
        value: !!this.statistical
    })} ${this.hasRetargeting ? this.switchButton({
        label: this.text?.marketing.label,
        name: 'retargeting',
        onChangeHandler: this.handleChange,
        value: !!this.retargeting
    }) : T}</div></div></dialog></div>`;
  }

  function cookieWarning() {
      return x`<div class="cookieContainer" style="color:${this.color};background-color:${this.backgroundColor}"><div class="content"><div aria-describedby="cookieWarningText" aria-labelledby="cookieWarningText" aria-modal="false" role="dialog"><p class="h3" id="cookieWarningText" lang="${document.documentElement.lang}">${this.text?.header}${' '}${icon}</p></div><div class="buttonWrapper"><button aria-label="${o$1(this.text?.customize.label)}" class="button gdpr" @click="${this.setCustomize}" style="background-color:${this.accentColor}">${this.text?.customize.label}</button> <button aria-label="${o$1(this.text?.accept)}" class="button gdpr" @click="${this.acceptAll}" style="backgroundColor:${this.accentColor}">${this.text?.accept}</button></div></div></div>`;
  }

  function switchButton({ name, label, onChangeHandler, value }) {
      const id = useId();
      return x`<div class="container">${label ? x`<label class="textLabel" for="${id}">${label}</label>` : T} <label class="label"><input ?checked="${value}" class="input" ?disabled="${!onChangeHandler}" id="${id}" name="${o$1(name)}" type="checkbox" @change="${onChangeHandler}" value="${value}"> <span class="slider" style="color:${this.color};background-color:${value ? this.accentColor : 'transparent'};transition:background-color .2s"></span></label></div>`;
  }

  function _ts_decorate(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof undefined === "function") r = undefined(decorators, target, key, desc);
      else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  }
  class AMGDPR extends s {
      _getConsent() {
          const cookie = api.get('CookieConsent');
          if (cookie) return JSON.parse(decodeURIComponent(cookie));
          return;
      }
      _boolToConsentParams(bool) {
          if (bool === undefined || bool === null) {
              return undefined;
          }
          return bool ? 'granted' : 'denied';
      }
      _consentParamsToBool(param) {
          if (param === undefined || param === null) {
              return null;
          }
          return param === 'granted';
      }
      save() {
          const consent = {
              functionality_storage: 'granted',
              analytics_storage: this._boolToConsentParams(this.statistical),
              ad_user_data: this._boolToConsentParams(this.statistical),
              ad_storage: this._boolToConsentParams(this.retargeting),
              ad_personalization: this._boolToConsentParams(this.retargeting),
              personalization_storage: this._boolToConsentParams(this.retargeting),
              security_storage: 'granted'
          };
          api.set('CookieConsent', encodeURIComponent(JSON.stringify(consent)), {
              sameSite: 'Lax',
              expires: 365,
              secure: "development" !== 'development'
          });
          for (const callback of this._consentListeners){
              callback(consent);
          }
      }
      acceptAll() {
          const prev = {
              statistical: this.statistical,
              retargeting: this.retargeting
          };
          this.statistical = true;
          this.retargeting = true;
          this.saving = true;
          setTimeout(()=>{
              this.saving = false;
              this._visible = false;
              this.customize = false;
          }, this.customize && (!prev.statistical || !prev.retargeting) ? 800 : 0);
          if (!window.dataLayer || !window.google_tag_data) {
              this._gtm?.initialize();
          }
          this.save();
      }
      declineAll() {
          this._visible = false;
          this.customize = false;
          this.statistical = false;
          this.retargeting = false;
          if (!!window.dataLayer || !!window.google_tag_data) {
              location.reload();
          }
          this.save();
      }
      esc({ key }) {
          if (this.customize && key === 'Escape') this.setCustomize(false);
      }
      setCustomize(value) {
          this.customize = !!value;
          this._visible = !value;
          this.statistical = !!this.statistical;
          this.retargeting = !!this.retargeting;
          if (value) {
              setTimeout(()=>{
                  const height = `${(this.dialogInner?.offsetHeight ?? 0) + 80}px`;
                  if (this.dialog) Object.assign(this.dialog.style, {
                      minHeight: height,
                      maxHeight: height
                  });
              }, 10);
          }
      }
      handleChange({ target }) {
          if (target instanceof HTMLInputElement) {
              const { checked, name } = target;
              if (name in this) this[name] = checked;
          }
      }
      setVisible() {
          api.remove('CookieConsent');
          this.statistical = null;
          this.retargeting = null;
          this._visible = !this._visible;
      }
      hideOnScroll() {
          const bcr = document.body.getBoundingClientRect();
          if (this.mini) {
              this.mini.dataset.hide = (bcr.top < this._scrollPos && bcr.top < -20).toString();
          }
          this._scrollPos = bcr.top;
      }
      static get styles() {
          return css_248z;
      }
      connectedCallback() {
          super.connectedCallback();
          this.statistical = this._consentParamsToBool(this._getConsent()?.analytics_storage);
          this.retargeting = this._consentParamsToBool(this._getConsent()?.ad_storage);
          this.text = getTranslation();
          const sheet = this.shadowRoot?.adoptedStyleSheets[0];
          sheet?.insertRule(`:host{--border-width:${this.borderWidth}px;h1,.h1,h2,.h2,h3,.h3{font-family:${this.fontFamily};}}`);
          this._gtm = new GTM({
              gtmId: this.gtmId
          });
          if (this.statistical || this.retargeting) {
              this._gtm.initialize();
          }
          window.addGDPRConsent = (callback)=>{
              this._consentListeners.push(callback);
          };
          document.addEventListener('keydown', this.esc, {
              passive: true,
              capture: true
          });
          document.addEventListener('scroll', this.hideOnScroll, {
              passive: true,
              capture: true
          });
      }
      disconnectedCallback() {
          super.disconnectedCallback();
          document.removeEventListener('keydown', this.esc);
          document.removeEventListener('scroll', this.hideOnScroll);
      }
      render() {
          return !this.customize && !this.statistical && this.statistical !== false || !!this._visible ? this._cookieWarning() : !this.customize ? this._miniGDPR() : this._popUp();
      }
      constructor(){
          super();
          this.color = '#000';
          this.backgroundColor = '#FFF';
          this.accentColor = '#FFF';
          this.fontFamily = '"Helvetica Neue", Helvetica, sans-serif';
          this.borderWidth = 2;
          this.hasRetargeting = false;
          this.statistical = null;
          this.retargeting = null;
          this._visible = false;
          this.customize = null;
          this.saving = false;
          this._scrollPos = 0;
          this._consentListeners = [];
          this._popUp = popUp;
          this._cookieWarning = cookieWarning;
          this._miniGDPR = miniGDPR;
          this.switchButton = switchButton;
          this.esc = this.esc.bind(this);
          this.hideOnScroll = this.hideOnScroll.bind(this);
      }
  }
  _ts_decorate([
      n()
  ], AMGDPR.prototype, "gtmId", void 0);
  _ts_decorate([
      n()
  ], AMGDPR.prototype, "color", void 0);
  _ts_decorate([
      n()
  ], AMGDPR.prototype, "backgroundColor", void 0);
  _ts_decorate([
      n()
  ], AMGDPR.prototype, "accentColor", void 0);
  _ts_decorate([
      n()
  ], AMGDPR.prototype, "fontFamily", void 0);
  _ts_decorate([
      n({
          type: Number
      })
  ], AMGDPR.prototype, "borderWidth", void 0);
  _ts_decorate([
      n({
          type: Boolean
      })
  ], AMGDPR.prototype, "hasRetargeting", void 0);
  _ts_decorate([
      n({
          type: Object
      })
  ], AMGDPR.prototype, "text", void 0);
  _ts_decorate([
      r()
  ], AMGDPR.prototype, "statistical", void 0);
  _ts_decorate([
      r()
  ], AMGDPR.prototype, "retargeting", void 0);
  _ts_decorate([
      e$2('dialog')
  ], AMGDPR.prototype, "dialog", void 0);
  _ts_decorate([
      e$2('.dialog-inner-box')
  ], AMGDPR.prototype, "dialogInner", void 0);
  _ts_decorate([
      e$2('.miniGDPR')
  ], AMGDPR.prototype, "mini", void 0);
  _ts_decorate([
      r()
  ], AMGDPR.prototype, "_visible", void 0);
  _ts_decorate([
      r()
  ], AMGDPR.prototype, "customize", void 0);
  _ts_decorate([
      r()
  ], AMGDPR.prototype, "saving", void 0);
  AMGDPR = _ts_decorate([
      t$1('am-gdpr')
  ], AMGDPR);

  exports.AMGDPR = AMGDPR;

})(this["am-gdpr"] = this["am-gdpr"] || {});
