import Cookies from 'js-cookie';

(function() {
    const env = {"NODE_ENV":"production"};
    try {
        if (process) {
            process.env = Object.assign({}, process.env);
            Object.assign(process.env, env);
            return;
        }
    } catch (e) {} // avoid ReferenceError: process is not defined
    globalThis.process = { env:env };
})();

const _isServer = ()=>!(typeof window !== 'undefined' && window.document), s4 = ()=>((1 + Math.random()) * 0x10000 | 0).toString(16).slice(1);
const boolToConsentParams = (bool)=>{
    if (bool === undefined || bool === null) {
        return undefined;
    }
    return bool ? 'granted' : 'denied';
}, consentParamsToBool = (param)=>{
    if (param === undefined || param === null) {
        return null;
    }
    return param === 'granted';
}, getConsent = ()=>{
    const cookie = Cookies.get('CookieConsent');
    if (cookie) {
        return JSON.parse(decodeURIComponent(cookie));
    }
    return {
        ad_personalization: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        analytics_storage: 'denied',
        functionality_storage: 'granted',
        personalization_storage: 'denied',
        security_storage: 'granted',
        wait_for_update: 500
    };
}, isServer = _isServer(), isText = (text)=>{
    return !(!text || typeof text !== 'object' || !('settings' in text) || !('customize' in text) || !('header' in text));
}, useId = (prefix)=>{
    return `:${s4()}-${s4()}`;
};

/**
 * Credit to: Leonardo Favre https://github.com/leofavre/observed-properties.
 */ const updateOnConnected = Symbol('UPDATE_ON_CONNECTED');
if (isServer) {
    // Mock HTMLElement for server-side rendering
    global.HTMLElement = // eslint-disable-next-line @typescript-eslint/no-extraneous-class
    class EmptyHTMLElement {
    };
}
/**
 * HTMLElement enhanced to track property changes.
 */ class PropertyCallbackElement extends HTMLElement {
    constructor(){
        super();
        if (updateOnConnected in this) {
            this[updateOnConnected] = [];
        }
        const { observedProperties } = this.constructor;
        const { length } = observedProperties;
        for(let i = 0; i < length; i++){
            const initialValue = this[observedProperties[i]], cachedValue = Symbol(observedProperties[i]);
            this[cachedValue] = initialValue;
            Object.defineProperty(this, observedProperties[i], {
                get () {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                    return this[cachedValue];
                },
                set (value) {
                    const oldValue = this[cachedValue];
                    this[cachedValue] = value;
                    this.propertyChangedCallback(observedProperties[i], oldValue, value);
                }
            });
            if (typeof initialValue !== 'undefined' && updateOnConnected in this && Array.isArray(this[updateOnConnected])) {
                this[updateOnConnected].push(observedProperties[i]);
            }
        }
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async connectedCallback() {
        let arr = [];
        if (updateOnConnected in this && Array.isArray(this[updateOnConnected])) {
            arr = this[updateOnConnected];
        }
        const { length } = arr;
        for(let i = 0; i < length; i++){
            if (!('propertyChangedCallback' in this) || typeof this.propertyChangedCallback !== 'function') {
                continue;
            }
            if (arr[i] in this) {
                this.propertyChangedCallback(arr[i], undefined, this[arr[i]]);
            }
        }
    }
    propertyChangedCallback(_name, _oldValue, _value) {
        throw new Error(`${this.constructor.name}: Method propertyChangedCallback is not implemented`);
    }
}

var Align = /*#__PURE__*/ function(Align) {
    Align["BottomLeft"] = "bottom-left";
    Align["BottomRight"] = "bottom-right";
    Align["TopLeft"] = "top-left";
    Align["TopRight"] = "top-right";
    return Align;
}({});
var Format = /*#__PURE__*/ function(Format) {
    Format["Banner"] = "banner";
    Format["Box"] = "box";
    return Format;
}({});

var settings$7="Cookie-Einstellungen";var customize$7={header:"Ihre Daten, Ihre Wahl",label:"Anpassen",text:"Wir verwenden <strong>funktionale Cookies</strong> für die Navigation usw. Außerdem verwenden wir <strong>statistische Cookies</strong>, um zu sehen, wie Benutzer mit der Website interagieren.",retargeting:"Wir verwenden auch <strong>Cookies für Marketing.</strong>",link:"Siehe unsere <a href=\"/%URL%\">Datenschutzrichtlinie</a>"};var header$7="Diese Website verwendet";var miniGDPR$8="Cookie-Einstellungen";var accept$7="Ich verstehe";var acceptAll$7="Alle akzeptieren";var decline$7="Nur funktionale";var close$7="Schließen";var save$7="Einstellungen speichern";var functional$7={label:"Funktional"};var statistical$7={label:"Statistisch"};var marketing$7={label:"Marketing"};var policyUrl$7="datenschutz";var de = {settings:settings$7,customize:customize$7,header:header$7,miniGDPR:miniGDPR$8,accept:accept$7,acceptAll:acceptAll$7,decline:decline$7,close:close$7,save:save$7,functional:functional$7,statistical:statistical$7,marketing:marketing$7,policyUrl:policyUrl$7};

var settings$6="Cookie-indstillinger";var customize$6={header:"Dine data, dit valg",label:"Tilpas",text:"Vi bruger <strong>funktionelle cookies</strong> til navigation osv. Derudover bruger vi <strong>statistiske cookies</strong> til at se, hvordan brugere interagerer med websitet.",retargeting:"Vi bruger også <strong>cookies til marketing.</strong>",link:"Se vores <a href=\"/%URL%\">privatlivspolitik</a>"};var header$6="Denne hjemmeside bruger";var miniGDPR$7="Cookie-indstillinger";var accept$6="Jeg forstår";var acceptAll$6="Accepter alle";var decline$6="Kun funktionelle";var close$6="Luk";var save$6="Gem præferencer";var functional$6={label:"Funktionel"};var statistical$6={label:"Statistisk"};var marketing$6={label:"Marketing"};var policyUrl$6="privatliv";var dk = {settings:settings$6,customize:customize$6,header:header$6,miniGDPR:miniGDPR$7,accept:accept$6,acceptAll:acceptAll$6,decline:decline$6,close:close$6,save:save$6,functional:functional$6,statistical:statistical$6,marketing:marketing$6,policyUrl:policyUrl$6};

var settings$5="Cookie Settings";var customize$5={header:"Your data, your choice",label:"Customize",text:"We use <strong>functional cookies</strong> for navigation, etc. In addition, we use <strong>statistical cookies</strong> to see how users interact with the website.",retargeting:"We also use <strong>cookies for marketing.</strong>",link:"See our <a href=\"/%URL%\">privacy policy</a>"};var header$5="This website uses";var miniGDPR$6="Cookie settings";var accept$5="I understand";var acceptAll$5="Accept all";var decline$5="Only functional";var close$5="Close";var save$5="Save preferences";var functional$5={label:"Functional"};var statistical$5={label:"Statistical"};var marketing$5={label:"Marketing"};var policyUrl$5="privacy";var en = {settings:settings$5,customize:customize$5,header:header$5,miniGDPR:miniGDPR$6,accept:accept$5,acceptAll:acceptAll$5,decline:decline$5,close:close$5,save:save$5,functional:functional$5,statistical:statistical$5,marketing:marketing$5,policyUrl:policyUrl$5};

var settings$4="Configuración de cookies";var customize$4={header:"Tus datos, tu elección",label:"Personalizar",text:"Utilizamos <strong>cookies funcionales</strong> para la navegación, etc. Además, utilizamos <strong>cookies estadísticas</strong> para ver cómo los usuarios interactúan con el sitio web.",retargeting:"También usamos <strong>cookies para marketing.</strong>",link:"Consulta nuestra <a href=\"/%URL%\">política de privacidad</a>"};var header$4="Este sitio web utiliza";var miniGDPR$5="Configuración de cookies";var accept$4="Entiendo";var acceptAll$4="Aceptar todo";var decline$4="Solo funcional";var close$4="Cerrar";var save$4="Guardar preferencias";var functional$4={label:"Funcional"};var statistical$4={label:"Estadístico"};var marketing$4={label:"Marketing"};var policyUrl$4="privacidad";var es = {settings:settings$4,customize:customize$4,header:header$4,miniGDPR:miniGDPR$5,accept:accept$4,acceptAll:acceptAll$4,decline:decline$4,close:close$4,save:save$4,functional:functional$4,statistical:statistical$4,marketing:marketing$4,policyUrl:policyUrl$4};

var settings$3="Evästeasetukset";var customize$3={header:"Tietosi, valintasi",label:"Mukauttaa",text:"Käytämme <strong>toiminnallisia evästeitä</strong> navigointiin jne. Lisäksi käytämme <strong>tilastollisia evästeitä</strong> nähdäksesi, miten käyttäjät vuorovaikuttavat verkkosivuston kanssa.",retargeting:"Käytämme myös <strong>markkinointievästeitä.</strong>",link:"Katso <a href=\"/%URL%\">tietosuojakäytäntömme</a>"};var header$3="Tämä verkkosivusto käyttää";var miniGDPR$4="Evästeasetukset";var accept$3="Ymmärrän";var acceptAll$3="Hyväksy kaikki";var decline$3="Vain toiminnalliset";var close$3="Sulje";var save$3="Tallenna asetukset";var functional$3={label:"Toiminnallinen"};var statistical$3={label:"Tilastollinen"};var marketing$3={label:"Markkinointi"};var policyUrl$3="tietosuoja";var fin = {settings:settings$3,customize:customize$3,header:header$3,miniGDPR:miniGDPR$4,accept:accept$3,acceptAll:acceptAll$3,decline:decline$3,close:close$3,save:save$3,functional:functional$3,statistical:statistical$3,marketing:marketing$3,policyUrl:policyUrl$3};

var settings$2="Paramètres des cookies";var customize$2={header:"Vos données, votre choix",label:"Personnaliser",text:"Nous utilisons des <strong>cookies fonctionnels</strong> pour la navigation, etc. De plus, nous utilisons des <strong>cookies statistiques</strong> pour voir comment les utilisateurs interagissent avec le site Web.",retargeting:"Nous utilisons également <strong>des cookies à des fins de marketing.</strong>",link:"Consultez notre <a href=\"/%URL%\">politique de confidentialité</a>"};var header$2="Ce site Web est utilisé";var miniGDPR$3="Paramètres des cookies";var accept$2="Je comprends";var acceptAll$2="Accepter tout";var decline$2="Uniquement fonctionnel";var close$2="Fermer";var save$2="Enregistrer les préférences";var functional$2={label:"Fonctionnel"};var statistical$2={label:"Calcul statistique"};var marketing$2={label:"Commercialisation"};var policyUrl$2="confidentialite";var fr = {settings:settings$2,customize:customize$2,header:header$2,miniGDPR:miniGDPR$3,accept:accept$2,acceptAll:acceptAll$2,decline:decline$2,close:close$2,save:save$2,functional:functional$2,statistical:statistical$2,marketing:marketing$2,policyUrl:policyUrl$2};

var settings$1="Cookieinnstillinger";var customize$1={header:"Dine data, ditt valg",label:"Tilpass",text:"Vi bruker <strong>funksjonelle cookies</strong> til navigering og lignende. I tillegg bruker vi <strong>statistiske cookies</strong> til å se hvordan brukere interagerer med nettsiden.",retargeting:"Vi bruker også <strong>cookies til markedsføring.</strong>",link:"Les mer på vår <a href=\"/%URL%\">personvernserklæring</a>"};var header$1="Denne nettsida bruker";var miniGDPR$2="Innstillinger for cookies";var accept$1="Jeg forstår";var acceptAll$1="Godta alle";var decline$1="Bare funksjonelle";var close$1="Lukk";var save$1="Lagre innstillinger";var functional$1={label:"Funksjonell"};var statistical$1={label:"Statistisk"};var marketing$1={label:"Markedsføring"};var policyUrl$1="personvern";var no = {settings:settings$1,customize:customize$1,header:header$1,miniGDPR:miniGDPR$2,accept:accept$1,acceptAll:acceptAll$1,decline:decline$1,close:close$1,save:save$1,functional:functional$1,statistical:statistical$1,marketing:marketing$1,policyUrl:policyUrl$1};

var settings="Cookie-inställningar";var customize={header:"Dina uppgifter, ditt val",label:"Anpassa",text:"Vi använder <strong>funktionella cookies</strong> för navigering, etc. Dessutom använder vi <strong>statistiska cookies</strong> för att se hur användare interagerar med webbplatsen.",retargeting:"Vi använder också <strong>cookies för marknadsföring.</strong>",link:"Se vår <a href=\"/%URL%\">integritetspolicy</a>"};var header="Denna webbplats använder";var miniGDPR$1="Cookie-inställningar";var accept="Jag förstår";var acceptAll="Acceptera allt";var decline="Endast funktionella";var close="Stäng";var save="Spara inställningar";var functional={label:"Funktionell"};var statistical={label:"Statistisk"};var marketing={label:"Marknadsföring"};var policyUrl="integritet";var sv = {settings:settings,customize:customize,header:header,miniGDPR:miniGDPR$1,accept:accept,acceptAll:acceptAll,decline:decline,close:close,save:save,functional:functional,statistical:statistical,marketing:marketing,policyUrl:policyUrl};

const languages = [
    'de',
    'dk',
    'en',
    'es',
    'fin',
    'fr',
    'nb',
    'no',
    'sv'
], fallbackLanguage = 'en', browserLanguage = document.documentElement.lang.toLowerCase() || fallbackLanguage, translation = languages.find((lang)=>browserLanguage.includes(lang)) || fallbackLanguage;
function getTranslation() {
    switch(translation){
        case 'de':
            {
                return de;
            }
        case 'dk':
            {
                return dk;
            }
        case 'es':
            {
                return es;
            }
        case 'fin':
            {
                return fin;
            }
        case 'fr':
            {
                return fr;
            }
        case 'no':
        case 'nb':
            {
                return no;
            }
        case 'sv':
            {
                return sv;
            }
        default:
            {
                return en;
            }
    }
}

var css_248z$4 = ":host{.cookie-overlay{position:fixed;left:0;top:0;width:100%;height:100%;z-index:99999;background-color:rgb(0 0 0/30%);backdrop-filter:blur(2px)}#cookie-warning-text{margin:0;display:inline-flex;gap:0.5rem;align-items:baseline}.cookie-container{padding:20px 30px;transform-origin:bottom;align-items:center;display:flex;position:fixed;z-index:999999;background-color:var(--background-color);.content{display:flex;margin:0;font-size:0.9em;gap:1em}&.bottom-left,&.bottom-right{animation:fade-in-up .3s ease-in-out}&.top-left,&.top-right{animation:fade-in-down .3s ease-in-out}&.box-format{flex-direction:column;border:solid var(--border-width) currentcolor;border-radius:0.25em;&.bottom-left{left:30px;bottom:30px}&.bottom-right{right:30px;bottom:30px}&.top-left{left:30px;top:30px}&.top-right{right:30px;top:30px}.content{flex-direction:column}}&.banner-format{flex-direction:row;left:0;right:0;&.bottom-left,&.bottom-right{bottom:0;border-top:solid var(--border-width) currentcolor}&.top-left,&.top-right{top:0;border-bottom:solid var(--border-width) currentcolor}.content{flex-direction:row;justify-content:space-between;width:100%}}}.button{border:solid var(--border-width) currentcolor;font-size:0.9em;line-height:0.9;font-weight:bold;padding:0 15px;height:calc(1em + 20px);margin:0;border-radius:1.5em;display:inline-flex;align-items:center}.button-wrapper{display:flex;gap:0.5em}.mini-gdpr{position:fixed;width:40px;height:40px;z-index:99999;display:flex;justify-content:center;align-items:center;transition:transform .2s ease-in-out;&.bottom-left,&.bottom-right{bottom:0;border-top:solid var(--border-width)}&.top-left,&.top-right{top:0;border-bottom:solid var(--border-width)}&.bottom-left,&.top-left{left:0;border-right:solid var(--border-width)}&.bottom-right,&.top-right{right:0;border-left:solid var(--border-width)}&.bottom-left{border-radius:0 66% 0 0;transform-origin:bottom left;animation:pop-in-bottom-left 0.3s ease-in-out;&[data-hide=\"true\"]{transform:translateY(100%) translateX(-100%)}}&.bottom-right{border-radius:66% 0 0;transform-origin:bottom right;animation:pop-in-bottom-right .3s ease-in-out;&[data-hide=\"true\"]{transform:translateY(100%) translateX(100%)}}&.top-left{border-radius:0 0 66%;transform-origin:top left;animation:pop-in-top-left 0.3s ease-in-out;&[data-hide=\"true\"]{transform:translateY(-100%) translateX(-100%)}}&.top-right{border-radius:0 0 0 66%;transform-origin:top right;animation:pop-in-top-right .3s ease-in-out;&[data-hide=\"true\"]{transform:translateY(-100%) translateX(100%)}}& svg{height:1em}&:hover,&:active{transform:scale(1.1)}}@media only screen and (width <= 760px){.cookie-container{padding:15px;&.box-format{left:20px;right:20px}&.banner-format{.content{flex-direction:column}&.top-left,&.top-right{padding-bottom:10px}&.bottom-left,&.bottom-right{padding-top:10px}}}}}";

var css_248z$3 = ":host{font-family:var(--font-family);font-size:16px;color:var(--color);line-height:1.3;display:block;width:100%;height:100%;cursor:default;*::selection{background-color:var(--color);color:var(--background-color)}*{box-sizing:border-box}& input,& textarea,& button{color:inherit;font-size:inherit;font-family:inherit;font-weight:inherit;border:0;outline:0;background-color:transparent}& button{background-color:var(--accent-color);transition:transform .2s ease-in-out}& button,& input[type=\"submit\"],& input[type=\"button\"],& input[type=\"reset\"]{appearance:none;*{pointer-events:none}&:not([disabled]){cursor:pointer}&:hover{transform:scale(1.02)}}& a{color:inherit;font-weight:bold;text-decoration:none;position:relative;&::after{content:'';border-bottom:solid var(--border-width) var(--accent-color);position:absolute;width:100%;bottom:0;left:0;z-index:-1}&:hover::after{opacity:0}}& svg{width:auto;height:auto;display:inline-block;& path{fill:currentcolor}}& p{margin:0;padding:0.5em 0 .7em}& h1,.h1,& h2,.h2,& h3,.h3{font-weight:bold;font-size:2.2em;padding:0;margin:0;margin-top:0.5em}& h2,.h2{font-size:1.7em}& h3,.h3{font-size:1.5em;& svg{height:1.2em;display:inline-block;vertical-align:bottom}}.icon-cookies{display:flex;margin:0;padding:0}}\n";

var css_248z$2 = ":host{.pop-up{position:fixed;width:100vw;height:100vh;top:0;left:0;overflow:hidden;z-index:999999;animation-duration:0.4s;animation-name:fade-in;background-color:rgb(0 0 0/30%);& dialog{position:absolute;height:90%;max-width:90%;min-height:0;max-height:0;border-radius:0.25em;border:solid var(--border-width) currentcolor;left:0;right:0;margin:auto;top:50%;transform:translateY(-50%);padding:40px;overflow:hidden;transition:max-height 0.2s ease-in-out,min-height 0.2s ease-in-out;width:600px;box-shadow:0 10px 20px rgb(0 0 0/20%);color:var(--color);background-color:var(--background-color);.button-wrapper{margin-top:1em}.close-button{top:14px;right:14px;width:25px}&[data-animate='up']{animation:fade-up 0.3s ease-in-out}}&[data-gallery='true']{dialog{padding:0}}}.inner-wrapper{width:100%;float:left;position:relative;display:flex;align-items:center;overflow:hidden}.row{display:flex;flex-direction:row;gap:1em;align-items:flex-start;margin:0}.column{display:flex;flex:1 1;flex-direction:column;align-items:flex-start}@media only screen and (width <= 760px){.pop-up{.pop-up-element{padding:25px;.close-button{width:20px;top:5px;right:5px}}}.row{overflow:auto hidden;scroll-snap-type:x mandatory;flex:1 1;-webkit-overflow-scrolling:touch;scrollbar-width:none;&::-webkit-scrollbar{display:none}}.column{width:100%;height:100%;position:relative;flex:0 0 100%;scroll-snap-align:start}}}\n";

var css_248z$1 = ":host{.container{display:inline-flex;flex-direction:column;margin-right:0.5em;margin-top:0.5em;font-size:0.9em}.text-label{margin-bottom:0.5em}.label{position:relative;display:inline-block;width:3em;height:1.5em;.input{opacity:0;width:0;height:0;margin:0;padding:0}}.slider{position:absolute;cursor:pointer;inset:0;border-radius:1em;border:solid var(--border-width) currentcolor;appearance:none;transition:background-color .2s;&::before{position:absolute;border-radius:50%;content:\"\";height:1em;width:1em;left:0.2em;bottom:0;top:0;margin:auto;background-color:currentcolor;transition:0.4s}}.input{&:focus+.slider{box-shadow:0 0 1px}&:checked+.slider{background-color:var(--accent-color);&::before{transform:translateX(1.4em)}}&:disabled+.slider{opacity:0.5}}}\n";

var css_248z = ":host{.menu-button{position:absolute;width:40px;max-width:100%;padding:0;margin:0;line-height:0;z-index:999;cursor:pointer;transition:transform .2s ease-in-out,color .2s ease-in-out;background-color:transparent;display:block;border-color:unset;outline-color:unset;.hamburger{width:100%;display:inline-block;vertical-align:middle;&::before,>span,&::after{background-color:currentcolor;border-color:currentcolor;outline-color:currentcolor;display:block;height:2px;margin:10px 0;transition:transform .3s cubic-bezier(0.175,0.885,0.32,1.275),opacity .2s ease-in-out}&::before,&::after{content:''}&::before{margin-top:0}&::after{margin-bottom:0}}&[data-open=\"true\"]{.hamburger{&::before{transform:translateY(12px) rotate(135deg)}>span{transform:translateY(0) rotate(-135deg);opacity:0}&::after{transform:translateY(-12px) rotate(-135deg)}}}}}\n";

const icon = /* HTML */ `<svg xmlns="http://www.w3.org/2000/svg" width="992" height="1024" viewBox="0 0 992 1024"><path d="M810.112 4.992c-27.232 0-49.28 22.112-49.344 49.344 0 27.232 22.112 49.344 49.344 49.344s49.344-22.112 49.344-49.344c0-27.232-22.112-49.344-49.344-49.344zm13.184 429.728c-167.424 54.048-292.352-63.52-236.384-243.232-61.728-22.944-82.24-90.368-58.016-166.24C255.36 11.456 14.336 224.416.672 498.048c-13.792 273.536 196.896 506.432 470.368 520.32 273.6 13.792 506.528-196.896 520.32-470.464 1.248-24.736.672-49.184-1.664-73.088-69.952 43.008-123.84 23.52-166.432-40.032zm-575.52-35.392c40.992 0 74.176 33.248 74.176 74.176s-33.248 74.176-74.176 74.176c-40.992 0-74.176-33.248-74.176-74.176s33.248-74.176 74.176-74.176zm233.696 94.56c23.616 0 42.752 19.136 42.752 42.752s-19.136 42.752-42.752 42.752c-23.616 0-42.752-19.136-42.752-42.752-.096-23.616 19.072-42.752 42.752-42.752zM295.968 669.952c28.8 0 52.16 23.36 52.16 52.16s-23.36 52.16-52.16 52.16c-28.8 0-52.16-23.36-52.16-52.16 0-28.864 23.36-52.16 52.16-52.16zm112.384-399.008c22.624 0 40.832 18.304 40.832 40.832 0 22.624-18.304 40.832-40.832 40.832-22.624 0-40.832-18.304-40.832-40.832s18.304-40.832 40.832-40.832zm221.952 417.28c37.856 0 68.48 30.688 68.48 68.48 0 37.856-30.688 68.48-68.48 68.48-37.856 0-68.48-30.688-68.48-68.48s30.688-68.48 68.48-68.48zm144.224-492.608c25.408 0 46.048 20.64 46.048 46.048s-20.64 46.048-46.048 46.048-46.048-20.64-46.048-46.048 20.64-46.048 46.048-46.048z"/></svg>`;

/**
 * Cookie Warning.
 */ function cookieWarning() {
    if (!this.gdprContainer) {
        return;
    }
    const { accept, customize: { label: customizeLabel }, header } = this.getText();
    this.gdprContainer.innerHTML = /* HTML */ `<div aria-describedby="cookie-warning-text" aria-labelledby="cookie-warning-text" aria-modal="false" role="dialog" class="cookie-container ${this.alignPrompt} ${this.format}-format" lang="${document.documentElement.lang}"><div class="content"><p class="h3" id="cookie-warning-text">${header} ${icon}</p><div class="button-wrapper"><button class="button gdpr customize" style="background-color:transparent">${customizeLabel}</button> <button class="button gdpr accept">${accept}</button></div></div></div>`;
    const acceptAll = this.gdprContainer.querySelector('.accept');
    if (acceptAll instanceof HTMLButtonElement) {
        acceptAll.onclick = this.acceptAll;
    }
    const customize = this.gdprContainer.querySelector('.customize');
    if (customize instanceof HTMLButtonElement) {
        customize.onclick = ()=>{
            this.setCustomize(true);
        };
    }
}

const loading = /* HTML */ `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" stroke="currentcolor"><style>@keyframes spinner_zKoa{to{transform:rotate(360deg)}}@keyframes spinner_YpZS{0%{stroke-dasharray:0 150;stroke-dashoffset:0}47.5%{stroke-dasharray:42 150;stroke-dashoffset:-16}95%,to{stroke-dasharray:42 150;stroke-dashoffset:-59}}</style><g style="transform-origin:center;animation:spinner_zKoa 2s linear infinite"><circle cx="11" cy="11" r="9.5" fill="none" stroke-width="3" style="stroke-linecap:round;animation:spinner_YpZS 1.5s ease-in-out infinite"/></g></svg>`;

/**
 * Mini GDPR.
 */ function miniGDPR() {
    if (!this.gdprContainer) {
        return;
    }
    const { miniGDPR: miniGDPText, settings } = this.getText();
    this.gdprContainer.innerHTML = /* HTML */ `<button class="mini-gdpr ${this.alignMiniPrompt}" data-hide="false" aria-label="${miniGDPText}"><figure aria-label="${settings}" class="icon-cookies settings">${icon}</figure></button>`;
    const button = this.gdprContainer.querySelector('.mini-gdpr');
    if (button instanceof HTMLButtonElement) {
        button.onclick = this.setVisible;
    }
}

function uiButton({ ariaLabel, className, isOpen }) {
    return /* HTML */ `<button ariaLabel="${ariaLabel}" class="menu-button ${className}" data-open="${isOpen}"><span class="hamburger"><span></span></span></button>`;
}

/**
 * Settings Pop-Up.
 */ function popUp() {
    if (!this.gdprContainer) {
        return;
    }
    const { acceptAll: acceptAllText, close: closeText, customize: { header: customizeHeaderText, link: customizeLink, retargeting: customizeRetargetingText, text: customizeText }, decline: declineText, functional: { label: functionalLabel }, marketing: { label: marketingLabel }, policyUrl, save: saveText, statistical: { label: statisticalLabel } } = this.getText();
    this.gdprContainer.innerHTML = /* HTML */ `<div class="pop-up fade-in" lang="${document.documentElement.lang}"><dialog open>${uiButton({
        ariaLabel: closeText,
        className: 'close-button',
        isOpen: true
    })}<div class="dialog-inner-box" style="display:flex;flex-direction:column"><h3><figure aria-label="cookies" class="icon-cookies" style="display:inline-flex;margin-right:.5em">${icon}</figure>${customizeHeaderText}</h3><p>${customizeText}${this.hasRetargeting ? ` ${customizeRetargetingText}` : ''}</p><p>${customizeLink.replace('%URL%', this.privacyPolicyURL || policyUrl)}</p><div id="save-wrapper" class="button-wrapper"><button class="button gdpr decline-all" style="background-color:transparent">${declineText}</button> <button class="button gdpr accept-all">${acceptAllText}</button></div><div class="button-wrapper">${this.switchButton({
        disabled: true,
        label: functionalLabel,
        name: 'functional',
        value: true
    })} ${this.switchButton({
        label: statisticalLabel,
        name: 'allowStatistical',
        value: Boolean(this.allowStatistical)
    })} ${this.hasRetargeting ? this.switchButton({
        label: marketingLabel,
        name: 'allowRetargeting',
        value: Boolean(this.allowRetargeting)
    }) : ''}</div></div></dialog></div>`;
    const saveWrapper = this.gdprContainer.querySelector('#save-wrapper'), saveButton = document.createElement('button');
    saveButton.innerText = saveText;
    saveButton.className = 'button gdpr save';
    saveButton.onclick = ()=>{
        this.save();
        this.isCustomize = false;
        this.isVisible = false;
    };
    const statistical = this.gdprContainer.querySelector('[name="allowStatistical"]');
    if (statistical instanceof HTMLInputElement) {
        statistical.onchange = (e)=>{
            saveWrapper?.replaceChildren(saveButton);
            this.handleChange(e, this);
        };
    }
    const retargeting = this.gdprContainer.querySelector('[name="allowRetargeting"]');
    if (retargeting instanceof HTMLInputElement) {
        retargeting.onchange = (e)=>{
            saveWrapper?.replaceChildren(saveButton);
            this.handleChange(e, this);
        };
    }
    const acceptAll = this.gdprContainer.querySelector('.accept-all');
    if (acceptAll instanceof HTMLButtonElement) {
        acceptAll.onclick = this.acceptAll;
    }
    const declineAll = this.gdprContainer.querySelector('.decline-all');
    if (declineAll instanceof HTMLButtonElement) {
        declineAll.onclick = this.declineAll;
    }
    const closeButton = this.gdprContainer.querySelector('.close-button');
    if (closeButton instanceof HTMLButtonElement) {
        closeButton.onclick = ()=>{
            this.setCustomize(false);
        };
    }
    setTimeout(()=>{
        const dialog = this.gdprContainer?.querySelector('dialog'), dialogInner = this.gdprContainer?.querySelector('.dialog-inner-box');
        if (!(dialog instanceof HTMLDialogElement) || !(dialogInner instanceof HTMLElement)) {
            return;
        }
        const height = `${dialogInner.offsetHeight + 80}px`;
        Object.assign(dialog.style, {
            maxHeight: height,
            minHeight: height
        });
    }, 10);
}

/**
 * Switch button.
 */ function switchButton({ disabled = false, label, name, value }) {
    const id = useId();
    return /* HTML */ `<div class="container">${label ? /* HTML */ `<label class="text-label" for="${id}">${label}</label>` : ''} <label class="label"><input ${value ? 'checked' : ''} class="input" ${disabled ? 'disabled' : ''} id="${id}" name="${name}" type="checkbox" value="${value}"> <span class="slider"></span></label></div>`;
}

class GTag {
    constructor({ config = {}, consentParams, googleID }){
        this.config = {};
        this._initialized = false;
        this.googleID = googleID;
        this.config = config;
        this.consentParams = consentParams;
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (!window.gtag) {
            window.gtag = function() {
                window.dataLayer = window.dataLayer ?? [];
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                window.dataLayer.push(arguments); // eslint-disable-line prefer-rest-params
            };
        }
    }
    initialize() {
        gtag('consent', 'default', this.consentParams);
        const scriptID = 'ga-gtag';
        if (document.getElementById(scriptID) || this._initialized) {
            return;
        }
        try {
            if (!this.googleID) {
                throw new Error('No Google Tag ID was assigned');
            }
            const script = document.createElement('script');
            script.id = scriptID;
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtag/js?id=${this.googleID}`;
            document.head.appendChild(script);
            script.insertAdjacentHTML('beforebegin', '<!-- Google Analytics -->');
            script.insertAdjacentHTML('afterend', '<!-- End Google Analytics -->');
            gtag('js', new Date());
            gtag('config', this.googleID, this.config);
            this._initialized = true;
        } catch (error) {
            console.error(error);
        }
    }
    updateConsent({ consentParams }) {
        try {
            window.gtag('consent', 'update', consentParams);
        } catch (error) {
            console.error(error);
        }
    }
}

const gtmCode = (gtmId, defer, domain)=>`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.id='gtm-snippet';j.${defer ? 'defer' : 'async'}=true;j.src='https://${domain}/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`;
// resetDataLayer = (obj: DataLayerObject) => {
//   try {
//     if (!(obj instanceof Object)) {
//       return false
//     }
//     for (const key of Object.keys(obj)) {
//       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//       // @ts-ignore
//       if (obj[key] instanceof Object) {
//         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//         // @ts-ignore
//         resetDataLayer(obj[key] as DataLayerObject)
//         continue
//       }
//       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//       // @ts-ignore
//       obj[key] = null
//     }
//     return true
//   } catch (_err) {
//     console.warn('Could not reset dataLayer')
//     return false
//   }
// },
// sanitize = (str: string) =>
//   str
//     .normalize('NFD')
//     .replace(/[\u0300-\u036f]/g, '') // Replace special characters
//     .trim() // Remove whitespace around string
//     .replace(/\s/g, '-') // Replace spaces inside string
//     .replace(/\n/gm, '-') // Replace line-breaks
//     .toLowerCase(),
// sanitizeObject = (obj: object) => {
//   try {
//     for (const key of Object.keys(obj)) {
//       if (hasKey(obj, key)) {
//         if (typeof obj[key] === 'string') {
//           ;(obj[key] as string) = sanitize(obj[key])
//           continue
//         }
//         sanitizeObject(obj[key])
//       }
//     }
//   } catch (_err) {
//     console.error('Could not sanitize dataLayer properties')
//   }
// }
class GTM {
    constructor({ consentParams, defer = false, gtmId, // resetDataLayer = false,
    // sanitizeDataLayer = false,
    serverSideDomain = null }){
        this.defer = false;
        this.gtmId = null;
        // public resetDataLayer = false
        /**
   * Public sanitizeDataLayer = false.
   */ this.serverSideDomain = null;
        this._initialized = false;
        this.gtmId = gtmId ? gtmId.trim() : null;
        // this.resetDataLayer = !!resetDataLayer
        // this.sanitizeDataLayer = !!sanitizeDataLayer
        this.serverSideDomain = serverSideDomain ? serverSideDomain.trim() : null;
        this.defer = defer;
        this.consentParams = consentParams;
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (!window.gtag) {
            window.gtag = function() {
                window.dataLayer = window.dataLayer ?? [];
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                window.dataLayer.push(arguments); // eslint-disable-line prefer-rest-params
            };
        }
    }
    initialize() {
        gtag('consent', 'default', this.consentParams);
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
            const script = document.createElement('script'), innerHTML = gtmCode(this.gtmId, this.defer, this.serverSideDomain ? this.serverSideDomain.replaceAll(/https?:\/\/|\/$/g, '') : 'www.googletagmanager.com');
            script.innerHTML = innerHTML;
            document.head.appendChild(script);
            script.insertAdjacentHTML('beforebegin', '<!-- Google Tag Manager -->');
            script.insertAdjacentHTML('afterend', '<!-- End Google Tag Manager -->');
            this._initialized = true;
        }
    }
    updateConsent({ consentParams }) {
        try {
            window.gtag('consent', 'update', consentParams);
        } catch (error) {
            console.error(error);
        }
    }
}

class MetaPixel {
    constructor({ locale = 'en_US', metaPixelID }){
        this._initialized = false;
        this.metaPixelID = metaPixelID;
        this.locale = locale.replaceAll('-', '_');
    }
    initialize() {
        const scriptID = 'meta-pixel';
        if (document.getElementById(scriptID) || this._initialized) {
            return;
        }
        try {
            if (!this.metaPixelID) {
                throw new Error('No Meta Pixel ID was assigned');
            }
            const script = document.createElement('script');
            script.id = scriptID;
            script.innerHTML = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/${this.locale}/fbevents.js');fbq('init', '${this.metaPixelID}');fbq('track', 'PageView');`;
            document.head.appendChild(script);
            script.insertAdjacentHTML('beforebegin', '<!-- Meta Pixel Code -->');
            script.insertAdjacentHTML('afterend', '<!-- End Meta Pixel Code -->');
        } catch (error) {
            console.error(error);
        }
    }
}

class SnapChatPixel {
    constructor({ snapChatPixelID }){
        this._initialized = false;
        this.snapChatPixelID = snapChatPixelID;
    }
    initialize() {
        const scriptID = 'snap-pixel';
        if (document.getElementById(scriptID) || this._initialized) {
            return;
        }
        try {
            if (!this.snapChatPixelID) {
                throw new Error('No SnapChat Pixel ID was assigned');
            }
            const script = document.createElement('script');
            script.id = scriptID;
            script.innerHTML = `(function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function() {a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};a.queue=[];var s='script';r=t.createElement(s);r.async=!0;r.src=n;var u=t.getElementsByTagName(s)[0];u.parentNode.insertBefore(r,u);})(window,document,'https://sc-static.net/scevent.min.js');snaptr('init', '${this.snapChatPixelID}', { 'user_email': '__INSERT_USER_EMAIL__' });snaptr('track', 'PAGE_VIEW');`;
            document.head.appendChild(script);
            script.insertAdjacentHTML('beforebegin', '<!-- Snap Pixel Code -->');
            script.insertAdjacentHTML('afterend', '<!-- End Snap Pixel Code -->');
        } catch (error) {
            console.error(error);
        }
    }
}

class TikTokPixel {
    constructor({ tiktokPixelID }){
        this._initialized = false;
        this.tiktokPixelID = tiktokPixelID;
    }
    initialize() {
        const scriptID = 'snap-pixel';
        if (document.getElementById(scriptID) || this._initialized) {
            return;
        }
        try {
            if (!this.tiktokPixelID) {
                throw new Error('No TikTok Pixel ID was assigned');
            }
            const script = document.createElement('script');
            script.id = scriptID;
            script.innerHTML = `!function (w, d, t) {w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};ttq.load('${this.tiktokPixelID}');ttq.page();}(window, document, 'ttq');`;
            document.head.appendChild(script);
            script.insertAdjacentHTML('beforebegin', '<!-- TikTok Pixel Code -->');
            script.insertAdjacentHTML('afterend', '<!-- End TikTok Pixel Code -->');
        } catch (error) {
            console.error(error);
        }
    }
}

async function getStyles() {
    const styleSheet = new CSSStyleSheet(), styles = [
        css_248z$3,
        css_248z$4,
        css_248z$2,
        css_248z$1,
        css_248z
    ].join('');
    await styleSheet.replace(styles);
    return styleSheet;
}
/**
 * AM GDPR Web Component.
 */ class AMCookies extends PropertyCallbackElement {
    /**
   * Properties to observe.
   */ static get observedProperties() {
        return [
            'allowStatistical',
            'allowRetargeting',
            'isVisible',
            'isCustomize',
            'isSaving',
            '_text'
        ];
    }
    /**
   * Return the styles for the component.
   */ static get styles() {
        return getStyles;
    }
    /**
   * Accent color.
   */ set accentColor(value) {
        this.setAttribute('accentColor', value);
    }
    get accentColor() {
        return this.getAttribute('accentColor') || '#FFF';
    }
    /**
   * Align mini GDPR prompt.
   */ set alignMiniPrompt(value) {
        this.setAttribute('alignMiniPrompt', value);
    }
    get alignMiniPrompt() {
        const value = this.getAttribute('alignMiniPrompt');
        if (value && Object.values(Align).includes(value)) {
            return value;
        }
        return Align.BottomLeft;
    }
    /**
   * Align GDPR promt.
   */ set alignPrompt(value) {
        this.setAttribute('alignPrompt', value);
    }
    get alignPrompt() {
        const value = this.getAttribute('alignPrompt');
        if (value && Object.values(Align).includes(value)) {
            return value;
        }
        return Align.BottomLeft;
    }
    /**
   * Background color.
   */ set backgroundColor(value) {
        this.setAttribute('backgroundColor', value);
    }
    get backgroundColor() {
        return this.getAttribute('backgroundColor') || '#FFF';
    }
    /**
   * Border width.
   */ set borderWidth(value) {
        this.setAttribute('borderWidth', value.toString());
    }
    get borderWidth() {
        return Number(this.getAttribute('borderWidth') ?? 2);
    }
    /**
   * Text color.
   */ set color(value) {
        this.setAttribute('color', value);
    }
    get color() {
        return this.getAttribute('color') || '#000';
    }
    /**
   * Font family.
   */ set fontFamily(value) {
        this.setAttribute('fontFamily', value);
    }
    get fontFamily() {
        return this.getAttribute('fontFamily') || '"Helvetica Neue", Helvetica, sans-serif';
    }
    /**
   * GDPR Prompt format.
   */ set format(value) {
        this.setAttribute('format', value);
    }
    get format() {
        const value = this.getAttribute('format');
        if (value && Object.values(Format).includes(value)) {
            return value;
        }
        return Format.Box;
    }
    /**
   * Tracking ID for GTM / GTag.
   */ set googleID(value) {
        this.setAttribute('googleID', value || '');
    }
    get googleID() {
        return this.getAttribute('googleID');
    }
    /**
   * Meta Pixel.
   */ set metaPixelID(value) {
        this.setAttribute('metaPixelID', value || '');
    }
    get metaPixelID() {
        return this.getAttribute('metaPixelID');
    }
    /**
   * Privacy policy URL.
   */ set privacyPolicyURL(value) {
        this.setAttribute('privacyPolicyURL', value || 'privacy');
    }
    get privacyPolicyURL() {
        return this.getAttribute('privacyPolicyURL');
    }
    /**
   * Snap Pixel.
   */ set snapChatPixelID(value) {
        this.setAttribute('snapChatPixelID', value || '');
    }
    get snapChatPixelID() {
        return this.getAttribute('snapChatPixelID');
    }
    /**
   * TikTok Pixel.
   */ set tiktokPixelID(value) {
        this.setAttribute('tiktokPixelID', value || '');
    }
    get tiktokPixelID() {
        return this.getAttribute('tiktokPixelID');
    }
    constructor(){
        super(), /**
   * Allow Retargeting.
   */ this.allowRetargeting = null, /**
   * Allow Statistical.
   */ this.allowStatistical = null, this.hasRetargeting = false, /**
   * Customize.
   */ this.isCustomize = null, /**
   * Saving.
   */ this.isSaving = false, /**
   * Visibility.
   */ this.isVisible = false, this.switchButton = switchButton, this._consentListeners = [], this._cookieWarning = cookieWarning, this._miniGDPR = miniGDPR, this._popUp = popUp, this._scrollPos = 0;
        this.acceptAll = this.acceptAll.bind(this);
        this.declineAll = this.declineAll.bind(this);
        this.esc = this.esc.bind(this);
        this.hideOnScroll = this.hideOnScroll.bind(this);
        this.setVisible = this.setVisible.bind(this);
        this._debug = this._debug.bind(this);
        this._text = getTranslation();
        this.template = document.createElement('template');
        this.shadow = this.attachShadow({
            mode: 'open'
        });
    }
    acceptAll() {
        const prev = {
            retargeting: this.hasRetargeting ? this.allowRetargeting : false,
            statistical: this.allowStatistical
        };
        this.allowStatistical = true;
        this.allowRetargeting = this.hasRetargeting;
        this.isSaving = true;
        setTimeout(()=>{
            this.isCustomize = false;
            this.isVisible = false;
            this.isSaving = false;
        }, this.isCustomize && (!prev.statistical || !prev.retargeting) ? 800 : 0);
        if (!window.dataLayer || !window.google_tag_data) {
            this._gtm?.initialize();
            this._gTag?.initialize();
        }
        this.save();
        this._debug();
    }
    /**
   * Initialize everything on component first render.
   */ async connectedCallback() {
        await super.connectedCallback();
        await this.render();
        this._addEventListeners();
        this.allowStatistical = consentParamsToBool(getConsent().analytics_storage);
        this.allowRetargeting = consentParamsToBool(getConsent().ad_storage);
        this.gdprContainer = this.shadow?.querySelector('#gdpr-container') ?? null;
        if (!this.isCustomize && !this.allowStatistical && this.allowStatistical !== false || this.isVisible || !Cookies.get('CookieConsent')) {
            this._cookieWarning();
        } else if (this.isCustomize) {
            this._popUp();
        } else {
            this._miniGDPR();
        }
        if (this.googleID?.startsWith('GTM-')) {
            this._gtm = new GTM({
                consentParams: getConsent(),
                gtmId: this.googleID
            });
            this.hasRetargeting = true;
        } else if (this.googleID?.startsWith('G-')) {
            this._gTag = new GTag({
                consentParams: getConsent(),
                googleID: this.googleID
            });
            if (this.metaPixelID) {
                this._meta = new MetaPixel({
                    locale: navigator.language,
                    metaPixelID: this.metaPixelID
                });
                this.hasRetargeting = true;
            }
            if (this.snapChatPixelID) {
                this._snapChat = new SnapChatPixel({
                    snapChatPixelID: this.snapChatPixelID
                });
                this.hasRetargeting = true;
            }
            if (this.tiktokPixelID) {
                this._tikTok = new TikTokPixel({
                    tiktokPixelID: this.tiktokPixelID
                });
                this.hasRetargeting = true;
            }
        }
        this._gtm?.initialize();
        this._gTag?.initialize();
        if (this.allowRetargeting) {
            this._meta?.initialize();
            this._snapChat?.initialize();
            this._tikTok?.initialize();
        }
        if (!this._gtm && !this._gTag && !this._meta && !this._snapChat && !this._tikTok) {
            console.warn('No tracking is enabled');
        }
        if (this._gtm && (this._meta || this._snapChat || this._tikTok)) {
            console.warn('Consider moving tags into Google Tag Manager');
        }
        window.addGDPRConsent = (callback)=>{
            this._consentListeners.push(callback);
        };
        const sheet = this.shadowRoot?.adoptedStyleSheets[0];
        setTimeout(()=>{
            sheet?.insertRule(/* CSS */ `:host{--border-width: ${this.borderWidth}px;--font-family: ${this.fontFamily};--color: ${this.color};--background-color: ${this.backgroundColor};--accent-color: ${this.accentColor};}`);
        }, 0);
        this._debug();
    }
    declineAll() {
        this.isCustomize = false;
        this.isVisible = false;
        this.allowStatistical = false;
        this.allowRetargeting = false;
        this._debug();
        this.save();
    }
    disconnectedCallback() {
        this._removeEventListeners();
    }
    esc({ key }) {
        if (this.isCustomize && key === 'Escape') {
            this.setCustomize(false);
        }
    }
    /**
   * Get text.
   */ getText() {
        return this._text ?? getTranslation();
    }
    handleChange({ target }, component) {
        if (target instanceof HTMLInputElement) {
            const { checked: isChecked, name } = target;
            if (name in component && typeof component[name] === 'boolean') {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                component[name] = isChecked;
            }
        }
        this._debug();
    }
    hideOnScroll() {
        const bcr = document.body.getBoundingClientRect(), mini = this.gdprContainer?.querySelector('.mini-gdpr');
        if (!(mini instanceof HTMLButtonElement)) {
            return;
        }
        mini.dataset.hide = (bcr.top < this._scrollPos && bcr.top < -20).toString();
        this._scrollPos = bcr.top;
    }
    propertyChangedCallback(name, _oldValue, value) {
        if (!this.shadow || !this.gdprContainer) {
            return;
        }
        switch(name){
            case 'isCustomize':
                {
                    if (value) {
                        this._popUp();
                    }
                    break;
                }
            case 'isSaving':
                {
                    const button = this.gdprContainer.querySelector('.accept-all');
                    if (value && button instanceof HTMLButtonElement) {
                        button.innerHTML = loading;
                    }
                    break;
                }
            case 'allowStatistical':
                {
                    const input = this.gdprContainer.querySelector('[name="allowStatistical"]');
                    if (input instanceof HTMLInputElement) {
                        input.checked = Boolean(value);
                    }
                    break;
                }
            case 'allowRetargeting':
                {
                    const input = this.gdprContainer.querySelector('[name="allowRetargeting"]');
                    if (input instanceof HTMLInputElement) {
                        input.checked = Boolean(value);
                    }
                    break;
                }
            case 'isVisible':
                {
                    if (this.isCustomize) {
                        break;
                    }
                    if (value) {
                        this._cookieWarning();
                    } else {
                        this._miniGDPR();
                    }
                    break;
                }
            // If text is set dynamically initial elements must be reinitialized
            case '_text':
                {
                    if (Cookies.get('CookieConsent')) {
                        this._miniGDPR();
                    } else {
                        this._cookieWarning();
                    }
                }
        }
    }
    save() {
        const consent = {
            ad_personalization: boolToConsentParams(this.allowRetargeting),
            ad_storage: boolToConsentParams(this.allowRetargeting),
            ad_user_data: boolToConsentParams(this.allowStatistical),
            analytics_storage: boolToConsentParams(this.allowStatistical),
            functionality_storage: 'granted',
            personalization_storage: boolToConsentParams(this.allowRetargeting),
            security_storage: 'granted'
        };
        Cookies.set('CookieConsent', encodeURIComponent(JSON.stringify(consent)), {
            expires: 365,
            sameSite: 'Lax',
            secure: process.env.NODE_ENV !== 'development'
        });
        this._gtm?.updateConsent({
            consentParams: getConsent()
        });
        this._gTag?.updateConsent({
            consentParams: getConsent()
        });
        if (this.allowRetargeting) {
            this._meta?.initialize();
            this._snapChat?.initialize();
            this._tikTok?.initialize();
        }
        for (const callback of this._consentListeners){
            callback(consent);
        }
    }
    setCustomize(value) {
        this.isCustomize = value;
        this.isVisible = !value;
        this.allowStatistical = Boolean(this.allowStatistical);
        this.allowRetargeting = Boolean(this.allowRetargeting);
        this._debug();
    }
    /**
   * Set Text.
   */ setText(text) {
        if (!isText(text)) {
            console.warn('Invalid text object');
            return;
        }
        this._text = text;
    }
    setVisible() {
        Cookies.remove('CookieConsent');
        this.allowStatistical = null;
        this.allowRetargeting = null;
        this.isVisible = true;
        this._debug();
    }
    async render() {
        if (!this.shadow) {
            throw new Error('No Shadow Element');
        }
        this.template.innerHTML = '<slot id="gdpr-container"></slot>';
        const styles = await AMCookies.styles();
        this.shadow.adoptedStyleSheets = [
            styles
        ];
        this.shadow.appendChild(this.template.content.cloneNode(true));
    }
    _addEventListeners() {
        document.addEventListener('keydown', this.esc, {
            capture: true,
            passive: true
        });
        document.addEventListener('scroll', this.hideOnScroll, {
            capture: true,
            passive: true
        });
    }
    _debug() {
        if (process.env.NODE_ENV !== 'development') {
            return;
        }
        console.debug('For developers: Current cookie values', {
            customize: this.isCustomize,
            googleID: this.googleID,
            retargeting: this.allowRetargeting,
            statistical: this.allowStatistical,
            visible: this.isVisible
        }, this._gtm ?? this._gTag);
    }
    _removeEventListeners() {
        document.removeEventListener('keydown', this.esc);
        document.removeEventListener('scroll', this.hideOnScroll);
    }
}

const tagName = 'am-cookies';
if (!isServer && !customElements.get(tagName)) {
    customElements.define(tagName, AMCookies);
}

export { AMCookies as default, tagName };
