'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Cookies = require('js-cookie');

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
}, isServer = ()=>!(typeof window !== 'undefined' && window.document), isText = (text)=>{
    if (!text || typeof text !== 'object' || !('settings' in text) || !('customize' in text) || !('header' in text)) {
        return false;
    }
    return true;
}, useId = (prefix)=>{
    const s4 = ()=>((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    return `${`:${s4()}`}-${s4()}`;
};

/**
 * Credit to:
 * @author Leonardo Favre <https://github.com/leofavre/observed-properties>
 */ /* eslint-disable @typescript-eslint/ban-ts-comment */ const UPDATE_ON_CONNECTED = Symbol('UPDATE_ON_CONNECTED');
if (isServer()) {
    // Mock HTMLElement for server-side rendering
    // @ts-ignore
    global.HTMLElement = class EmptyHTMLElement {
    };
}
let EnhancedElement = class EnhancedElement extends HTMLElement {
    connectedCallback() {
        let arr = [];
        if (UPDATE_ON_CONNECTED in this && Array.isArray(this[UPDATE_ON_CONNECTED])) {
            arr = this[UPDATE_ON_CONNECTED];
        }
        for (const propName of arr){
            if (!('propertyChangedCallback' in this) || typeof this.propertyChangedCallback !== 'function') {
                continue;
            }
            if (propName in this) {
                this.propertyChangedCallback(propName, undefined, this[propName]);
            }
        }
    }
    constructor(){
        super();
        // @ts-ignore
        const { observedProperties = [] } = this.constructor;
        if (UPDATE_ON_CONNECTED in this) {
            this[UPDATE_ON_CONNECTED] = [];
        }
        if ('propertyChangedCallback' in this && typeof this.propertyChangedCallback === 'function') {
            for (const propName of observedProperties){
                const initialValue = this[propName], CACHED_VALUE = Symbol(propName);
                // @ts-ignore
                this[CACHED_VALUE] = initialValue;
                Object.defineProperty(this, propName, {
                    get () {
                        return this[CACHED_VALUE];
                    },
                    set (value) {
                        const oldValue = this[CACHED_VALUE];
                        this[CACHED_VALUE] = value;
                        this.propertyChangedCallback(propName, oldValue, value);
                    }
                });
                if (typeof initialValue !== 'undefined') {
                    if (UPDATE_ON_CONNECTED in this && Array.isArray(this[UPDATE_ON_CONNECTED])) {
                        this[UPDATE_ON_CONNECTED].push(propName);
                    }
                }
            }
        }
    }
};

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
/**
 *
 */ function getTranslation() {
    switch(translation){
        case 'de':
            return de;
        case 'dk':
            return dk;
        case 'es':
            return es;
        case 'fin':
            return fin;
        case 'fr':
            return fr;
        case 'no':
        case 'nb':
            return no;
        case 'sv':
            return sv;
        default:
            return en;
    }
}

var css_248z = "\n  @keyframes fade-in-up {\n    0% {\n      transform: translateY(1em);\n      opacity: 0;\n    }\n    100% {\n      transform: translateY(0);\n      opacity: 1;\n    }\n  }\n  @keyframes fade-in-down {\n    0% {\n      transform: translateY(-1em);\n      opacity: 0;\n    }\n    100% {\n      transform: translateY(0);\n      opacity: 1;\n    }\n  }\n  @keyframes pop-in-bottom-left {\n    0% {\n      transform: translateY(100%) translateX(-100%);\n    }\n    100% {\n      transform: translate(0);\n    }\n  }\n  @keyframes pop-in-bottom-right {\n    0% {\n      transform: translateY(100%) translateX(100%);\n    }\n    100% {\n      transform: translate(0);\n    }\n  }\n  @keyframes pop-in-top-left {\n    0% {\n      transform: translateY(-100%) translateX(-100%);\n    }\n    100% {\n      transform: translate(0);\n    }\n  }\n  @keyframes pop-in-top-right {\n    0% {\n      transform: translateY(-100%) translateX(100%);\n    }\n    100% {\n      transform: translate(0);\n    }\n  }\n  @keyframes fade-in {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  @keyframes fade-up {\n    0% {\n      opacity: 0;\n      transform: translateY(0);\n    }\n    100% {\n      opacity: 1;\n      transform: translateY(-50%);\n    }\n  }:host {\n    font-family: var(--font-family);\n    font-size: 16px;\n    color: var(--color);\n    line-height: 1.3;\n    display: block;\n    width: 100%;\n    height: 100%;\n    cursor: default;\n  }:host *::selection {\n    background-color: var(--color);\n    color: var(--background-color);\n  }:host .cookie-overlay {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 99999;\n    background-color: rgba(0, 0, 0, 0.3);\n    backdrop-filter: blur(2px);\n  }:host #cookie-warning-text {\n    margin: 0;\n    display: inline-flex;\n    gap: 0.5rem;\n    align-items: baseline;\n  }:host .cookie-container {\n    padding: 20px 30px;\n    transform-origin: bottom;\n    align-items: center;\n    display: flex;\n    position: fixed;\n    z-index: 999999;\n    background-color: var(--background-color);\n  }:host .cookie-container .content {\n    display: flex;\n    margin: 0;\n    font-size: 0.9em;\n    gap: 1em;\n  }:host .cookie-container.bottom-left, :host .cookie-container.bottom-right {\n    animation: fade-in-up 0.3s ease-in-out;\n  }:host .cookie-container.top-left, :host .cookie-container.top-right {\n    animation: fade-in-down 0.3s ease-in-out;\n  }:host .cookie-container.box-format {\n    flex-direction: column;\n    border: solid var(--border-width) currentcolor;\n    border-radius: 0.25em;\n  }:host .cookie-container.box-format.bottom-left {\n    left: 30px;\n    bottom: 30px;\n  }:host .cookie-container.box-format.bottom-right {\n    right: 30px;\n    bottom: 30px;\n  }:host .cookie-container.box-format.top-left {\n    left: 30px;\n    top: 30px;\n  }:host .cookie-container.box-format.top-right {\n    right: 30px;\n    top: 30px;\n  }:host .cookie-container.box-format .content {\n    flex-direction: column;\n  }:host .cookie-container.banner-format {\n    flex-direction: row;\n    left: 0;\n    right: 0;\n  }:host .cookie-container.banner-format.bottom-left, :host .cookie-container.banner-format.bottom-right {\n    bottom: 0;\n    border-top: solid var(--border-width) currentcolor;\n  }:host .cookie-container.banner-format.top-left, :host .cookie-container.banner-format.top-right {\n    top: 0;\n    border-bottom: solid var(--border-width) currentcolor;\n  }:host .cookie-container.banner-format .content {\n    flex-direction: row;\n    justify-content: space-between;\n    width: 100%;\n  }:host .button {\n    border: solid var(--border-width) currentcolor;\n    font-size: 0.9em;\n    line-height: 0.9;\n    font-weight: bold;\n    padding: 0 15px;\n    height: calc(1em + 20px);\n    margin: 0;\n    border-radius: 1.5em;\n    display: inline-flex;\n    align-items: center;\n  }:host .button-wrapper {\n    display: flex;\n    gap: 0.5em;\n  }:host .mini-gdpr {\n    position: fixed;\n    width: 40px;\n    height: 40px;\n    z-index: 99999;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: transform 0.2s ease-in-out;\n  }:host .mini-gdpr.bottom-left, :host .mini-gdpr.bottom-right {\n    bottom: 0;\n    border-top: solid var(--border-width);\n  }:host .mini-gdpr.top-left, :host .mini-gdpr.top-right {\n    top: 0;\n    border-bottom: solid var(--border-width);\n  }:host .mini-gdpr.bottom-left, :host .mini-gdpr.top-left {\n    left: 0;\n    border-right: solid var(--border-width);\n  }:host .mini-gdpr.bottom-right, :host .mini-gdpr.top-right {\n    right: 0;\n    border-left: solid var(--border-width);\n  }:host .mini-gdpr.bottom-left {\n    border-radius: 0 66% 0 0;\n    transform-origin: bottom left;\n    animation: pop-in-bottom-left 0.3s ease-in-out;\n  }:host .mini-gdpr.bottom-left[data-hide=true] {\n    transform: translateY(100%) translateX(-100%);\n  }:host .mini-gdpr.bottom-right {\n    border-radius: 66% 0 0;\n    transform-origin: bottom right;\n    animation: pop-in-bottom-right 0.3s ease-in-out;\n  }:host .mini-gdpr.bottom-right[data-hide=true] {\n    transform: translateY(100%) translateX(100%);\n  }:host .mini-gdpr.top-left {\n    border-radius: 0 0 66%;\n    transform-origin: top left;\n    animation: pop-in-top-left 0.3s ease-in-out;\n  }:host .mini-gdpr.top-left[data-hide=true] {\n    transform: translateY(-100%) translateX(-100%);\n  }:host .mini-gdpr.top-right {\n    border-radius: 0 0 0 66%;\n    transform-origin: top right;\n    animation: pop-in-top-right 0.3s ease-in-out;\n  }:host .mini-gdpr.top-right[data-hide=true] {\n    transform: translateY(-100%) translateX(100%);\n  }:host .mini-gdpr svg {\n    height: 1em;\n  }:host .mini-gdpr:hover, :host .mini-gdpr:active {\n    transform: scale(1.1);\n  }@media only screen and (width <= 760px) {\n    :host .cookie-container {\n      padding: 15px;\n    }\n    :host .cookie-container.box-format {\n      left: 20px;\n      right: 20px;\n    }\n    :host .cookie-container.banner-format .content {\n      flex-direction: column;\n    }\n    :host .cookie-container.banner-format.top-left, :host .cookie-container.banner-format.top-right {\n      padding-bottom: 10px;\n    }\n    :host .cookie-container.banner-format.bottom-left, :host .cookie-container.banner-format.bottom-right {\n      padding-top: 10px;\n    }\n  }:host .pop-up {\n    position: fixed;\n    width: 100vw;\n    height: 100vh;\n    top: 0;\n    left: 0;\n    overflow: hidden;\n    z-index: 999999;\n    animation-duration: 0.4s;\n    animation-name: fade-in;\n    background-color: rgba(0, 0, 0, 0.3);\n  }:host .pop-up dialog {\n    position: absolute;\n    height: 90%;\n    max-width: 90%;\n    min-height: 0;\n    max-height: 0;\n    border-radius: 0.25em;\n    border: solid var(--border-width) currentcolor;\n    left: 0;\n    right: 0;\n    margin: auto;\n    top: 50%;\n    transform: translateY(-50%);\n    padding: 40px;\n    overflow: hidden;\n    transition: max-height 0.2s ease-in-out, min-height 0.2s ease-in-out;\n    width: 600px;\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\n    color: var(--color);\n    background-color: var(--background-color);\n  }:host .pop-up dialog .button-wrapper {\n    margin-top: 1em;\n  }:host .pop-up dialog .close-button {\n    top: 14px;\n    right: 14px;\n    width: 25px;\n  }:host .pop-up dialog[data-animate=up] {\n    animation: fade-up 0.3s ease-in-out;\n  }:host .pop-up[data-gallery=true] dialog {\n    padding: 0;\n  }:host .inner-wrapper {\n    width: 100%;\n    float: left;\n    position: relative;\n    display: flex;\n    align-items: center;\n    overflow: hidden;\n  }:host .row {\n    display: flex;\n    flex-direction: row;\n    gap: 1em;\n    align-items: flex-start;\n    margin: 0;\n  }:host .column {\n    display: flex;\n    flex: 1 1;\n    flex-direction: column;\n    align-items: flex-start;\n  }@media only screen and (width <= 760px) {\n    :host .pop-up .pop-up-element {\n      padding: 25px;\n    }\n    :host .pop-up .pop-up-element .close-button {\n      width: 20px;\n      top: 5px;\n      right: 5px;\n    }\n    :host .row {\n      overflow: auto hidden;\n      scroll-snap-points-x: repeat(100%);\n      scroll-snap-type: x mandatory;\n      flex: 1 1;\n      -webkit-overflow-scrolling: touch;\n      scrollbar-width: none;\n    }\n    :host .row::-webkit-scrollbar {\n      display: none;\n    }\n    :host .column {\n      width: 100%;\n      height: 100%;\n      position: relative;\n      flex: 0 0 100%;\n      scroll-snap-align: start;\n    }\n  }:host .container {\n    display: inline-flex;\n    flex-direction: column;\n    margin-right: 0.5em;\n    margin-top: 0.5em;\n    font-size: 0.9em;\n  }:host .text-label {\n    margin-bottom: 0.5em;\n  }:host .label {\n    position: relative;\n    display: inline-block;\n    width: 3em;\n    height: 1.5em;\n  }:host .label .input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n    margin: 0;\n    padding: 0;\n  }:host .slider {\n    position: absolute;\n    cursor: pointer;\n    inset: 0;\n    border-radius: 1em;\n    border: solid var(--border-width) currentcolor;\n    appearance: none;\n    transition: background-color 0.2s;\n  }:host .slider::before {\n    position: absolute;\n    border-radius: 50%;\n    content: \"\";\n    height: 1em;\n    width: 1em;\n    left: 0.2em;\n    bottom: 0;\n    top: 0;\n    margin: auto;\n    background-color: currentcolor;\n    transition: 0.4s;\n  }:host .input:focus + .slider {\n    box-shadow: 0 0 1px;\n  }:host .input:checked + .slider {\n    background-color: var(--accent-color);\n  }:host .input:checked + .slider::before {\n    transform: translateX(1.4em);\n  }:host .input:disabled + .slider {\n    opacity: 0.5;\n  }:host .menu-button {\n    position: absolute;\n    width: 40px;\n    max-width: 100%;\n    padding: 0;\n    margin: 0;\n    line-height: 0;\n    z-index: 999;\n    cursor: pointer;\n    transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;\n    background-color: transparent;\n    display: block;\n    border-color: unset;\n    outline-color: unset;\n  }:host .menu-button .hamburger {\n    width: 100%;\n    display: inline-block;\n    vertical-align: middle;\n  }:host .menu-button .hamburger::before,\n  :host .menu-button .hamburger > span,\n  :host .menu-button .hamburger::after {\n    background-color: currentcolor;\n    border-color: currentcolor;\n    outline-color: currentcolor;\n    display: block;\n    height: 2px;\n    margin: 10px 0;\n    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.2s ease-in-out;\n  }:host .menu-button .hamburger::before, :host .menu-button .hamburger::after {\n    content: \"\";\n  }:host .menu-button .hamburger::before {\n    margin-top: 0;\n  }:host .menu-button .hamburger::after {\n    margin-bottom: 0;\n  }:host .menu-button[data-open=true] .hamburger::before {\n    transform: translateY(12px) rotate(135deg);\n  }:host .menu-button[data-open=true] .hamburger > span {\n    transform: translateY(0) rotate(-135deg);\n    opacity: 0;\n  }:host .menu-button[data-open=true] .hamburger::after {\n    transform: translateY(-12px) rotate(-135deg);\n  }:host * {\n    box-sizing: border-box;\n  }:host input,\n  :host textarea,\n  :host button {\n    color: inherit;\n    font-size: inherit;\n    font-family: inherit;\n    font-weight: inherit;\n    border: 0;\n    outline: 0;\n    background-color: transparent;\n  }:host button {\n    background-color: var(--accent-color);\n    transition: transform 0.2s ease-in-out;\n  }:host button,\n  :host input[type=submit],\n  :host input[type=button],\n  :host input[type=reset] {\n    appearance: none;\n  }:host button *,\n  :host input[type=submit] *,\n  :host input[type=button] *,\n  :host input[type=reset] * {\n    pointer-events: none;\n  }:host button:not([disabled]),\n  :host input[type=submit]:not([disabled]),\n  :host input[type=button]:not([disabled]),\n  :host input[type=reset]:not([disabled]) {\n    cursor: pointer;\n  }:host button:hover,\n  :host input[type=submit]:hover,\n  :host input[type=button]:hover,\n  :host input[type=reset]:hover {\n    transform: scale(1.02);\n  }:host a {\n    color: inherit;\n    font-weight: bold;\n    text-decoration: none;\n    position: relative;\n  }:host a::after {\n    content: \"\";\n    border-bottom: solid var(--border-width) var(--accent-color);\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n    left: 0;\n    z-index: -1;\n  }:host a:hover::after {\n    opacity: 0;\n  }:host svg {\n    width: auto;\n    height: auto;\n    display: inline-block;\n  }:host svg path {\n    fill: currentcolor;\n  }:host p {\n    margin: 0;\n    padding: 0.5em 0 0.7em;\n  }:host h1,\n  :host .h1,\n  :host h2,\n  :host .h2,\n  :host h3,\n  :host .h3 {\n    font-weight: bold;\n    font-size: 2.2em;\n    padding: 0;\n    margin: 0;\n    margin-top: 0.5em;\n  }:host h2,\n  :host .h2 {\n    font-size: 1.7em;\n  }:host h3,\n  :host .h3 {\n    font-size: 1.5em;\n  }:host h3 svg,\n  :host .h3 svg {\n    height: 1.2em;\n    display: inline-block;\n    vertical-align: bottom;\n  }:host .icon-cookies {\n    display: flex;\n    margin: 0;\n    padding: 0;\n  }";

/**
 * Cookie Warning
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
        customize.onclick = ()=>this.setCustomize(true);
    }
}

const icon = /* HTML */ `<svg xmlns="http://www.w3.org/2000/svg" width="992" height="1024" viewBox="0 0 992 1024"><path d="M810.112 4.992c-27.232 0-49.28 22.112-49.344 49.344 0 27.232 22.112 49.344 49.344 49.344s49.344-22.112 49.344-49.344c0-27.232-22.112-49.344-49.344-49.344zm13.184 429.728c-167.424 54.048-292.352-63.52-236.384-243.232-61.728-22.944-82.24-90.368-58.016-166.24C255.36 11.456 14.336 224.416.672 498.048c-13.792 273.536 196.896 506.432 470.368 520.32 273.6 13.792 506.528-196.896 520.32-470.464 1.248-24.736.672-49.184-1.664-73.088-69.952 43.008-123.84 23.52-166.432-40.032zm-575.52-35.392c40.992 0 74.176 33.248 74.176 74.176s-33.248 74.176-74.176 74.176c-40.992 0-74.176-33.248-74.176-74.176s33.248-74.176 74.176-74.176zm233.696 94.56c23.616 0 42.752 19.136 42.752 42.752s-19.136 42.752-42.752 42.752c-23.616 0-42.752-19.136-42.752-42.752-.096-23.616 19.072-42.752 42.752-42.752zM295.968 669.952c28.8 0 52.16 23.36 52.16 52.16s-23.36 52.16-52.16 52.16c-28.8 0-52.16-23.36-52.16-52.16 0-28.864 23.36-52.16 52.16-52.16zm112.384-399.008c22.624 0 40.832 18.304 40.832 40.832 0 22.624-18.304 40.832-40.832 40.832-22.624 0-40.832-18.304-40.832-40.832s18.304-40.832 40.832-40.832zm221.952 417.28c37.856 0 68.48 30.688 68.48 68.48 0 37.856-30.688 68.48-68.48 68.48-37.856 0-68.48-30.688-68.48-68.48s30.688-68.48 68.48-68.48zm144.224-492.608c25.408 0 46.048 20.64 46.048 46.048s-20.64 46.048-46.048 46.048-46.048-20.64-46.048-46.048 20.64-46.048 46.048-46.048z"/></svg>`;

const loading = /* HTML */ `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" stroke="currentcolor"><style>@keyframes spinner_zKoa{to{transform:rotate(360deg)}}@keyframes spinner_YpZS{0%{stroke-dasharray:0 150;stroke-dashoffset:0}47.5%{stroke-dasharray:42 150;stroke-dashoffset:-16}95%,to{stroke-dasharray:42 150;stroke-dashoffset:-59}}</style><g style="transform-origin:center;animation:spinner_zKoa 2s linear infinite"><circle cx="11" cy="11" r="9.5" fill="none" stroke-width="3" style="stroke-linecap:round;animation:spinner_YpZS 1.5s ease-in-out infinite"/></g></svg>`;

/**
 * Mini GDPR
 */ function miniGDPR() {
    if (!this.gdprContainer) {
        return;
    }
    const { miniGDPR, settings } = this.getText();
    this.gdprContainer.innerHTML = /* HTML */ `<button class="mini-gdpr ${this.alignMiniPrompt}" data-hide="false" aria-label="${miniGDPR}"><figure aria-label="${settings}" class="icon-cookies settings">${icon}</figure></button>`;
    const button = this.gdprContainer.querySelector('.mini-gdpr');
    if (button instanceof HTMLButtonElement) {
        button.onclick = this.setVisible;
    }
}

/**
 *
 */ function uiButton({ ariaLabel, className, isOpen }) {
    return /* HTML */ `<button ariaLabel="${ariaLabel}" class="menu-button ${className}" data-open="${isOpen}"><span class="hamburger"><span></span></span></button>`;
}

/**
 * Settings Pop-Up
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
        value: !!this.allowStatistical
    })} ${this.hasRetargeting ? this.switchButton({
        label: marketingLabel,
        name: 'allowRetargeting',
        value: !!this.allowRetargeting
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
        closeButton.onclick = ()=>this.setCustomize(false);
    }
    setTimeout(()=>{
        const dialog = this.gdprContainer?.querySelector('dialog'), dialogInner = this.gdprContainer?.querySelector('.dialog-inner-box');
        if (!(dialog instanceof HTMLDialogElement) || !(dialogInner instanceof HTMLElement)) {
            return;
        }
        const height = `${(dialogInner.offsetHeight ?? 0) + 80}px`;
        Object.assign(dialog.style, {
            maxHeight: height,
            minHeight: height
        });
    }, 10);
}

/**
 * Switch button
 */ function switchButton({ disabled = false, label, name, value }) {
    const id = useId();
    return /* HTML */ `<div class="container">${label ? /* HTML */ `<label class="text-label" for="${id}">${label}</label>` : ''} <label class="label"><input ${value ? 'checked' : ''} class="input" ${disabled ? 'disabled' : ''} id="${id}" name="${name}" type="checkbox" value="${value}"> <span class="slider"></span></label></div>`;
}

let GTag = class GTag {
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
        } catch (err) {
            console.error(err);
        }
    }
    updateConsent({ consentParams }) {
        try {
            window.gtag('consent', 'update', consentParams);
        } catch (err) {
            console.error(err);
        }
    }
    constructor({ config = {}, consentParams, googleID }){
        this._initialized = false;
        this.config = {};
        this.googleID = googleID;
        this.config = config;
        this.consentParams = consentParams;
        if (!window.gtag) {
            window.gtag = function() {
                window.dataLayer = window.dataLayer || [];
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                window.dataLayer.push(arguments) // eslint-disable-line prefer-rest-params
                ;
            };
        }
    }
};

const gtmCode = (gtmId, defer, domain)=>`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.id='gtm-snippet';j.${defer ? 'defer' : 'async'}=true;j.src='https://${domain}/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`;
let GTM = class GTM {
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
            const script = document.createElement('script'), innerHTML = gtmCode(this.gtmId, this.defer, this.serverSideDomain ? this.serverSideDomain.replace(/http(|s):\/\/|\/$/g, '') : 'www.googletagmanager.com');
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
        } catch (err) {
            console.error(err);
        }
    }
    constructor({ consentParams, defer = false, gtmId, // resetDataLayer = false,
    // sanitizeDataLayer = false,
    serverSideDomain = null }){
        this._initialized = false;
        this.gtmId = null;
        // public resetDataLayer = false
        // public sanitizeDataLayer = false
        this.serverSideDomain = null;
        this.defer = false;
        this.gtmId = gtmId ? gtmId.trim() : null;
        // this.resetDataLayer = !!resetDataLayer
        // this.sanitizeDataLayer = !!sanitizeDataLayer
        this.serverSideDomain = serverSideDomain ? serverSideDomain.trim() : null;
        this.defer = !!defer;
        this.consentParams = consentParams;
        if (!window.gtag) {
            window.gtag = function() {
                window.dataLayer = window.dataLayer || [];
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                window.dataLayer.push(arguments) // eslint-disable-line prefer-rest-params
                ;
            };
        }
    }
};

let MetaPixel = class MetaPixel {
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
        } catch (err) {
            console.error(err);
        }
    }
    constructor({ locale = 'en_US', metaPixelID }){
        this._initialized = false;
        this.metaPixelID = metaPixelID;
        this.locale = locale.replaceAll('-', '_');
    }
};

let SnapChatPixel = class SnapChatPixel {
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
        } catch (err) {
            console.error(err);
        }
    }
    constructor({ snapChatPixelID }){
        this._initialized = false;
        this.snapChatPixelID = snapChatPixelID;
    }
};

let TikTokPixel = class TikTokPixel {
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
        } catch (err) {
            console.error(err);
        }
    }
    constructor({ tiktokPixelID }){
        this._initialized = false;
        this.tiktokPixelID = tiktokPixelID;
    }
};

let AMCookies = class AMCookies extends EnhancedElement {
    /**
   * Initialize everything on component first render
   */ connectedCallback() {
        super.connectedCallback();
        this.render();
        this._addEventListeners();
        this.allowStatistical = consentParamsToBool(getConsent().analytics_storage);
        this.allowRetargeting = consentParamsToBool(getConsent().ad_storage);
        this.gdprContainer = this.shadow.querySelector('#gdpr-container');
        if (!this.isCustomize && !this.allowStatistical && this.allowStatistical !== false || !!this.isVisible || !Cookies.get('CookieConsent')) {
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
    disconnectedCallback() {
        this._removeEventListeners();
    }
    /**
   * Properties to observe
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
                        input.checked = !!value;
                    }
                    break;
                }
            case 'allowRetargeting':
                {
                    const input = this.gdprContainer.querySelector('[name="allowRetargeting"]');
                    if (input instanceof HTMLInputElement) {
                        input.checked = !!value;
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
    /**
   * Tracking ID for GTM / GTag
   */ set googleID(value) {
        this.setAttribute('googleID', value || '');
    }
    get googleID() {
        return this.getAttribute('googleID');
    }
    /**
   * Meta Pixel
   */ set metaPixelID(value) {
        this.setAttribute('metaPixelID', value || '');
    }
    get metaPixelID() {
        return this.getAttribute('metaPixelID');
    }
    /**
   * Snap Pixel
   */ set snapChatPixelID(value) {
        this.setAttribute('snapChatPixelID', value || '');
    }
    get snapChatPixelID() {
        return this.getAttribute('snapChatPixelID');
    }
    /**
   * TikTok Pixel
   */ set tiktokPixelID(value) {
        this.setAttribute('tiktokPixelID', value || '');
    }
    get tiktokPixelID() {
        return this.getAttribute('tiktokPixelID');
    }
    /**
   * Text color
   */ set color(value) {
        this.setAttribute('color', value);
    }
    get color() {
        return this.getAttribute('color') || '#000';
    }
    /**
   * Background color
   */ set backgroundColor(value) {
        this.setAttribute('backgroundColor', value);
    }
    get backgroundColor() {
        return this.getAttribute('backgroundColor') || '#FFF';
    }
    /**
   * Accent color
   */ set accentColor(value) {
        this.setAttribute('accentColor', value);
    }
    get accentColor() {
        return this.getAttribute('accentColor') || '#FFF';
    }
    /**
   * Font family
   */ set fontFamily(value) {
        this.setAttribute('fontFamily', value);
    }
    get fontFamily() {
        return this.getAttribute('fontFamily') || '"Helvetica Neue", Helvetica, sans-serif';
    }
    /**
   * Border width
   */ set borderWidth(value) {
        this.setAttribute('borderWidth', value.toString());
    }
    get borderWidth() {
        return Number(this.getAttribute('borderWidth') ?? 2);
    }
    /**
   * Align GDPR promt
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
   * Align mini GDPR prompt
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
   * GDPR Prompt format
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
   * Privacy policy URL
   */ set privacyPolicyURL(value) {
        this.setAttribute('privacyPolicyURL', value || 'privacy');
    }
    get privacyPolicyURL() {
        return this.getAttribute('privacyPolicyURL');
    }
    /**
   * Get text
   */ getText() {
        return this._text || getTranslation();
    }
    /**
   * Set Text
   */ setText(text) {
        if (!isText(text)) {
            console.warn('Invalid text object');
            return;
        }
        this._text = text;
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
    declineAll() {
        this.isCustomize = false;
        this.isVisible = false;
        this.allowStatistical = false;
        this.allowRetargeting = false;
        this._debug();
        this.save();
    }
    esc({ key }) {
        if (this.isCustomize && key === 'Escape') {
            this.setCustomize(false);
        }
    }
    setCustomize(value) {
        this.isCustomize = !!value;
        this.isVisible = !value;
        this.allowStatistical = !!this.allowStatistical;
        this.allowRetargeting = !!this.allowRetargeting;
        this._debug();
    }
    handleChange({ target }, component) {
        if (target instanceof HTMLInputElement) {
            const { checked, name } = target;
            if (name in component && typeof component[name] === 'boolean') {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                component[name] = checked;
            }
        }
        this._debug();
    }
    setVisible() {
        Cookies.remove('CookieConsent');
        this.allowStatistical = null;
        this.allowRetargeting = null;
        this.isVisible = true;
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
    _removeEventListeners() {
        document.removeEventListener('keydown', this.esc);
        document.removeEventListener('scroll', this.hideOnScroll);
    }
    /**
   * Return the styles for the component
   */ static get styles() {
        const styleSheet = new CSSStyleSheet();
        styleSheet.replace(css_248z);
        return styleSheet;
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
        }, this._gtm || this._gTag);
    }
    render() {
        this.template.innerHTML = '<slot id="gdpr-container"></slot>';
        this.shadow.adoptedStyleSheets = [
            AMCookies.styles
        ];
        this.shadow.appendChild(this.template.content.cloneNode(true));
    }
    constructor(){
        super(), /**
   * @state
   * Allow Statistical
   */ this.allowStatistical = null, /**
   * @state
   * Allow Retargeting
   */ this.allowRetargeting = null, /**
   * @state
   * Visibility
   */ this.isVisible = false, /**
   * @state
   * Customize
   */ this.isCustomize = null, /**
   * @state
   * Saving
   */ this.isSaving = false, this._scrollPos = 0, this._consentListeners = [], this.hasRetargeting = false, this._popUp = popUp, this._cookieWarning = cookieWarning, this._miniGDPR = miniGDPR, this.switchButton = switchButton;
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
};

const tagName = 'am-cookies';
if (!isServer() && !customElements.get('am-cookies')) {
    customElements.define('am-cookies', AMCookies);
}

exports.default = AMCookies;
exports.tagName = tagName;
