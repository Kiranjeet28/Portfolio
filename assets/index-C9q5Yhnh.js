(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var rM=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function sM(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var L0={exports:{}},Uc={},D0={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Aa=Symbol.for("react.element"),oM=Symbol.for("react.portal"),aM=Symbol.for("react.fragment"),lM=Symbol.for("react.strict_mode"),cM=Symbol.for("react.profiler"),uM=Symbol.for("react.provider"),dM=Symbol.for("react.context"),fM=Symbol.for("react.forward_ref"),hM=Symbol.for("react.suspense"),pM=Symbol.for("react.memo"),mM=Symbol.for("react.lazy"),dm=Symbol.iterator;function gM(t){return t===null||typeof t!="object"?null:(t=dm&&t[dm]||t["@@iterator"],typeof t=="function"?t:null)}var I0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N0=Object.assign,U0={};function mo(t,e,n){this.props=t,this.context=e,this.refs=U0,this.updater=n||I0}mo.prototype.isReactComponent={};mo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};mo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function F0(){}F0.prototype=mo.prototype;function xh(t,e,n){this.props=t,this.context=e,this.refs=U0,this.updater=n||I0}var Sh=xh.prototype=new F0;Sh.constructor=xh;N0(Sh,mo.prototype);Sh.isPureReactComponent=!0;var fm=Array.isArray,O0=Object.prototype.hasOwnProperty,Mh={current:null},k0={key:!0,ref:!0,__self:!0,__source:!0};function B0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)O0.call(e,i)&&!k0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Aa,type:t,key:s,ref:o,props:r,_owner:Mh.current}}function vM(t,e){return{$$typeof:Aa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Eh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Aa}function _M(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var hm=/\/+/g;function hu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?_M(""+t.key):e.toString(36)}function Dl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Aa:case oM:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+hu(o,0):i,fm(r)?(n="",t!=null&&(n=t.replace(hm,"$&/")+"/"),Dl(r,e,n,"",function(c){return c})):r!=null&&(Eh(r)&&(r=vM(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(hm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",fm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+hu(s,a);o+=Dl(s,e,n,l,r)}else if(l=gM(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+hu(s,a++),o+=Dl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ha(t,e,n){if(t==null)return t;var i=[],r=0;return Dl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function yM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var en={current:null},Il={transition:null},xM={ReactCurrentDispatcher:en,ReactCurrentBatchConfig:Il,ReactCurrentOwner:Mh};je.Children={map:Ha,forEach:function(t,e,n){Ha(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ha(t,function(){e++}),e},toArray:function(t){return Ha(t,function(e){return e})||[]},only:function(t){if(!Eh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=mo;je.Fragment=aM;je.Profiler=cM;je.PureComponent=xh;je.StrictMode=lM;je.Suspense=hM;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xM;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=N0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Mh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)O0.call(e,l)&&!k0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Aa,type:t.type,key:r,ref:s,props:i,_owner:o}};je.createContext=function(t){return t={$$typeof:dM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:uM,_context:t},t.Consumer=t};je.createElement=B0;je.createFactory=function(t){var e=B0.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:fM,render:t}};je.isValidElement=Eh;je.lazy=function(t){return{$$typeof:mM,_payload:{_status:-1,_result:t},_init:yM}};je.memo=function(t,e){return{$$typeof:pM,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=Il.transition;Il.transition={};try{t()}finally{Il.transition=e}};je.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};je.useCallback=function(t,e){return en.current.useCallback(t,e)};je.useContext=function(t){return en.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return en.current.useDeferredValue(t)};je.useEffect=function(t,e){return en.current.useEffect(t,e)};je.useId=function(){return en.current.useId()};je.useImperativeHandle=function(t,e,n){return en.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return en.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return en.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return en.current.useMemo(t,e)};je.useReducer=function(t,e,n){return en.current.useReducer(t,e,n)};je.useRef=function(t){return en.current.useRef(t)};je.useState=function(t){return en.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return en.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return en.current.useTransition()};je.version="18.2.0";D0.exports=je;var se=D0.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var SM=se,MM=Symbol.for("react.element"),EM=Symbol.for("react.fragment"),wM=Object.prototype.hasOwnProperty,TM=SM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,AM={key:!0,ref:!0,__self:!0,__source:!0};function z0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)wM.call(e,i)&&!AM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:MM,type:t,key:s,ref:o,props:r,_owner:TM.current}}Uc.Fragment=EM;Uc.jsx=z0;Uc.jsxs=z0;L0.exports=Uc;var H=L0.exports,Ld={},V0={exports:{}},Sn={},H0={exports:{}},G0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,Y){var q=I.length;I.push(Y);e:for(;0<q;){var ie=q-1>>>1,ge=I[ie];if(0<r(ge,Y))I[ie]=Y,I[q]=ge,q=ie;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var Y=I[0],q=I.pop();if(q!==Y){I[0]=q;e:for(var ie=0,ge=I.length,Ne=ge>>>1;ie<Ne;){var X=2*(ie+1)-1,Q=I[X],ce=X+1,re=I[ce];if(0>r(Q,q))ce<ge&&0>r(re,Q)?(I[ie]=re,I[ce]=q,ie=ce):(I[ie]=Q,I[X]=q,ie=X);else if(ce<ge&&0>r(re,q))I[ie]=re,I[ce]=q,ie=ce;else break e}}return Y}function r(I,Y){var q=I.sortIndex-Y.sortIndex;return q!==0?q:I.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,v=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(I){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=I)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function S(I){if(y=!1,g(I),!v)if(n(l)!==null)v=!0,z(R);else{var Y=n(c);Y!==null&&$(S,Y.startTime-I)}}function R(I,Y){v=!1,y&&(y=!1,h(b),b=-1),p=!0;var q=f;try{for(g(Y),d=n(l);d!==null&&(!(d.expirationTime>Y)||I&&!C());){var ie=d.callback;if(typeof ie=="function"){d.callback=null,f=d.priorityLevel;var ge=ie(d.expirationTime<=Y);Y=t.unstable_now(),typeof ge=="function"?d.callback=ge:d===n(l)&&i(l),g(Y)}else i(l);d=n(l)}if(d!==null)var Ne=!0;else{var X=n(c);X!==null&&$(S,X.startTime-Y),Ne=!1}return Ne}finally{d=null,f=q,p=!1}}var T=!1,A=null,b=-1,E=5,x=-1;function C(){return!(t.unstable_now()-x<E)}function L(){if(A!==null){var I=t.unstable_now();x=I;var Y=!0;try{Y=A(!0,I)}finally{Y?N():(T=!1,A=null)}}else T=!1}var N;if(typeof _=="function")N=function(){_(L)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,B=O.port2;O.port1.onmessage=L,N=function(){B.postMessage(null)}}else N=function(){m(L,0)};function z(I){A=I,T||(T=!0,N())}function $(I,Y){b=m(function(){I(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,z(R))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(f){case 1:case 2:case 3:var Y=3;break;default:Y=f}var q=f;f=Y;try{return I()}finally{f=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,Y){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var q=f;f=I;try{return Y()}finally{f=q}},t.unstable_scheduleCallback=function(I,Y,q){var ie=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ie+q:ie):q=ie,I){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=q+ge,I={id:u++,callback:Y,priorityLevel:I,startTime:q,expirationTime:ge,sortIndex:-1},q>ie?(I.sortIndex=q,e(c,I),n(l)===null&&I===n(c)&&(y?(h(b),b=-1):y=!0,$(S,q-ie))):(I.sortIndex=ge,e(l,I),v||p||(v=!0,z(R))),I},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(I){var Y=f;return function(){var q=f;f=Y;try{return I.apply(this,arguments)}finally{f=q}}}})(G0);H0.exports=G0;var bM=H0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W0=se,yn=bM;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var j0=new Set,ia={};function os(t,e){eo(t,e),eo(t+"Capture",e)}function eo(t,e){for(ia[t]=e,t=0;t<e.length;t++)j0.add(e[t])}var Ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dd=Object.prototype.hasOwnProperty,CM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pm={},mm={};function RM(t){return Dd.call(mm,t)?!0:Dd.call(pm,t)?!1:CM.test(t)?mm[t]=!0:(pm[t]=!0,!1)}function PM(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function LM(t,e,n,i){if(e===null||typeof e>"u"||PM(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function tn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){zt[t]=new tn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];zt[e]=new tn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){zt[t]=new tn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){zt[t]=new tn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){zt[t]=new tn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){zt[t]=new tn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){zt[t]=new tn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){zt[t]=new tn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){zt[t]=new tn(t,5,!1,t.toLowerCase(),null,!1,!1)});var wh=/[\-:]([a-z])/g;function Th(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(wh,Th);zt[e]=new tn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(wh,Th);zt[e]=new tn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(wh,Th);zt[e]=new tn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){zt[t]=new tn(t,1,!1,t.toLowerCase(),null,!1,!1)});zt.xlinkHref=new tn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){zt[t]=new tn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ah(t,e,n,i){var r=zt.hasOwnProperty(e)?zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(LM(e,n,r,i)&&(n=null),i||r===null?RM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ui=W0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ga=Symbol.for("react.element"),Cs=Symbol.for("react.portal"),Rs=Symbol.for("react.fragment"),bh=Symbol.for("react.strict_mode"),Id=Symbol.for("react.profiler"),X0=Symbol.for("react.provider"),$0=Symbol.for("react.context"),Ch=Symbol.for("react.forward_ref"),Nd=Symbol.for("react.suspense"),Ud=Symbol.for("react.suspense_list"),Rh=Symbol.for("react.memo"),$i=Symbol.for("react.lazy"),Y0=Symbol.for("react.offscreen"),gm=Symbol.iterator;function Mo(t){return t===null||typeof t!="object"?null:(t=gm&&t[gm]||t["@@iterator"],typeof t=="function"?t:null)}var gt=Object.assign,pu;function ko(t){if(pu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);pu=e&&e[1]||""}return`
`+pu+t}var mu=!1;function gu(t,e){if(!t||mu)return"";mu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{mu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ko(t):""}function DM(t){switch(t.tag){case 5:return ko(t.type);case 16:return ko("Lazy");case 13:return ko("Suspense");case 19:return ko("SuspenseList");case 0:case 2:case 15:return t=gu(t.type,!1),t;case 11:return t=gu(t.type.render,!1),t;case 1:return t=gu(t.type,!0),t;default:return""}}function Fd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Rs:return"Fragment";case Cs:return"Portal";case Id:return"Profiler";case bh:return"StrictMode";case Nd:return"Suspense";case Ud:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case $0:return(t.displayName||"Context")+".Consumer";case X0:return(t._context.displayName||"Context")+".Provider";case Ch:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Rh:return e=t.displayName||null,e!==null?e:Fd(t.type)||"Memo";case $i:e=t._payload,t=t._init;try{return Fd(t(e))}catch{}}return null}function IM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fd(e);case 8:return e===bh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function K0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function NM(t){var e=K0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Wa(t){t._valueTracker||(t._valueTracker=NM(t))}function q0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=K0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Jl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Od(t,e){var n=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function vm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Z0(t,e){e=e.checked,e!=null&&Ah(t,"checked",e,!1)}function kd(t,e){Z0(t,e);var n=hr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Bd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Bd(t,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function _m(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Bd(t,e,n){(e!=="number"||Jl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Bo=Array.isArray;function js(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+hr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function zd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ym(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(Bo(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hr(n)}}function Q0(t,e){var n=hr(e.value),i=hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function xm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function J0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?J0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ja,e_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ja=ja||document.createElement("div"),ja.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ja.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ra(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Wo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},UM=["Webkit","ms","Moz","O"];Object.keys(Wo).forEach(function(t){UM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Wo[e]=Wo[t]})});function t_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Wo.hasOwnProperty(t)&&Wo[t]?(""+e).trim():e+"px"}function n_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=t_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var FM=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hd(t,e){if(e){if(FM[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function Gd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wd=null;function Ph(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var jd=null,Xs=null,$s=null;function Sm(t){if(t=Ra(t)){if(typeof jd!="function")throw Error(te(280));var e=t.stateNode;e&&(e=zc(e),jd(t.stateNode,t.type,e))}}function i_(t){Xs?$s?$s.push(t):$s=[t]:Xs=t}function r_(){if(Xs){var t=Xs,e=$s;if($s=Xs=null,Sm(t),e)for(t=0;t<e.length;t++)Sm(e[t])}}function s_(t,e){return t(e)}function o_(){}var vu=!1;function a_(t,e,n){if(vu)return t(e,n);vu=!0;try{return s_(t,e,n)}finally{vu=!1,(Xs!==null||$s!==null)&&(o_(),r_())}}function sa(t,e){var n=t.stateNode;if(n===null)return null;var i=zc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var Xd=!1;if(Ci)try{var Eo={};Object.defineProperty(Eo,"passive",{get:function(){Xd=!0}}),window.addEventListener("test",Eo,Eo),window.removeEventListener("test",Eo,Eo)}catch{Xd=!1}function OM(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var jo=!1,ec=null,tc=!1,$d=null,kM={onError:function(t){jo=!0,ec=t}};function BM(t,e,n,i,r,s,o,a,l){jo=!1,ec=null,OM.apply(kM,arguments)}function zM(t,e,n,i,r,s,o,a,l){if(BM.apply(this,arguments),jo){if(jo){var c=ec;jo=!1,ec=null}else throw Error(te(198));tc||(tc=!0,$d=c)}}function as(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function l_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Mm(t){if(as(t)!==t)throw Error(te(188))}function VM(t){var e=t.alternate;if(!e){if(e=as(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Mm(r),t;if(s===i)return Mm(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function c_(t){return t=VM(t),t!==null?u_(t):null}function u_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=u_(t);if(e!==null)return e;t=t.sibling}return null}var d_=yn.unstable_scheduleCallback,Em=yn.unstable_cancelCallback,HM=yn.unstable_shouldYield,GM=yn.unstable_requestPaint,St=yn.unstable_now,WM=yn.unstable_getCurrentPriorityLevel,Lh=yn.unstable_ImmediatePriority,f_=yn.unstable_UserBlockingPriority,nc=yn.unstable_NormalPriority,jM=yn.unstable_LowPriority,h_=yn.unstable_IdlePriority,Fc=null,ii=null;function XM(t){if(ii&&typeof ii.onCommitFiberRoot=="function")try{ii.onCommitFiberRoot(Fc,t,void 0,(t.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:KM,$M=Math.log,YM=Math.LN2;function KM(t){return t>>>=0,t===0?32:31-($M(t)/YM|0)|0}var Xa=64,$a=4194304;function zo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ic(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=zo(a):(s&=o,s!==0&&(i=zo(s)))}else o=n&~r,o!==0?i=zo(o):s!==0&&(i=zo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-jn(e),r=1<<n,i|=t[n],e&=~r;return i}function qM(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ZM(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-jn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=qM(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Yd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function p_(){var t=Xa;return Xa<<=1,!(Xa&4194240)&&(Xa=64),t}function _u(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ba(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jn(e),t[e]=n}function QM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-jn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Dh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function m_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var g_,Ih,v_,__,y_,Kd=!1,Ya=[],tr=null,nr=null,ir=null,oa=new Map,aa=new Map,qi=[],JM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wm(t,e){switch(t){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":oa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":aa.delete(e.pointerId)}}function wo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ra(e),e!==null&&Ih(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function eE(t,e,n,i,r){switch(e){case"focusin":return tr=wo(tr,t,e,n,i,r),!0;case"dragenter":return nr=wo(nr,t,e,n,i,r),!0;case"mouseover":return ir=wo(ir,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return oa.set(s,wo(oa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,aa.set(s,wo(aa.get(s)||null,t,e,n,i,r)),!0}return!1}function x_(t){var e=Hr(t.target);if(e!==null){var n=as(e);if(n!==null){if(e=n.tag,e===13){if(e=l_(n),e!==null){t.blockedOn=e,y_(t.priority,function(){v_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Nl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=qd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Wd=i,n.target.dispatchEvent(i),Wd=null}else return e=Ra(n),e!==null&&Ih(e),t.blockedOn=n,!1;e.shift()}return!0}function Tm(t,e,n){Nl(t)&&n.delete(e)}function tE(){Kd=!1,tr!==null&&Nl(tr)&&(tr=null),nr!==null&&Nl(nr)&&(nr=null),ir!==null&&Nl(ir)&&(ir=null),oa.forEach(Tm),aa.forEach(Tm)}function To(t,e){t.blockedOn===e&&(t.blockedOn=null,Kd||(Kd=!0,yn.unstable_scheduleCallback(yn.unstable_NormalPriority,tE)))}function la(t){function e(r){return To(r,t)}if(0<Ya.length){To(Ya[0],t);for(var n=1;n<Ya.length;n++){var i=Ya[n];i.blockedOn===t&&(i.blockedOn=null)}}for(tr!==null&&To(tr,t),nr!==null&&To(nr,t),ir!==null&&To(ir,t),oa.forEach(e),aa.forEach(e),n=0;n<qi.length;n++)i=qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<qi.length&&(n=qi[0],n.blockedOn===null);)x_(n),n.blockedOn===null&&qi.shift()}var Ys=Ui.ReactCurrentBatchConfig,rc=!0;function nE(t,e,n,i){var r=it,s=Ys.transition;Ys.transition=null;try{it=1,Nh(t,e,n,i)}finally{it=r,Ys.transition=s}}function iE(t,e,n,i){var r=it,s=Ys.transition;Ys.transition=null;try{it=4,Nh(t,e,n,i)}finally{it=r,Ys.transition=s}}function Nh(t,e,n,i){if(rc){var r=qd(t,e,n,i);if(r===null)Cu(t,e,i,sc,n),wm(t,i);else if(eE(r,t,e,n,i))i.stopPropagation();else if(wm(t,i),e&4&&-1<JM.indexOf(t)){for(;r!==null;){var s=Ra(r);if(s!==null&&g_(s),s=qd(t,e,n,i),s===null&&Cu(t,e,i,sc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Cu(t,e,i,null,n)}}var sc=null;function qd(t,e,n,i){if(sc=null,t=Ph(i),t=Hr(t),t!==null)if(e=as(t),e===null)t=null;else if(n=e.tag,n===13){if(t=l_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return sc=t,null}function S_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(WM()){case Lh:return 1;case f_:return 4;case nc:case jM:return 16;case h_:return 536870912;default:return 16}default:return 16}}var Ji=null,Uh=null,Ul=null;function M_(){if(Ul)return Ul;var t,e=Uh,n=e.length,i,r="value"in Ji?Ji.value:Ji.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ul=r.slice(t,1<i?1-i:void 0)}function Fl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ka(){return!0}function Am(){return!1}function Mn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ka:Am,this.isPropagationStopped=Am,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ka)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ka)},persist:function(){},isPersistent:Ka}),e}var go={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fh=Mn(go),Ca=gt({},go,{view:0,detail:0}),rE=Mn(Ca),yu,xu,Ao,Oc=gt({},Ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ao&&(Ao&&t.type==="mousemove"?(yu=t.screenX-Ao.screenX,xu=t.screenY-Ao.screenY):xu=yu=0,Ao=t),yu)},movementY:function(t){return"movementY"in t?t.movementY:xu}}),bm=Mn(Oc),sE=gt({},Oc,{dataTransfer:0}),oE=Mn(sE),aE=gt({},Ca,{relatedTarget:0}),Su=Mn(aE),lE=gt({},go,{animationName:0,elapsedTime:0,pseudoElement:0}),cE=Mn(lE),uE=gt({},go,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dE=Mn(uE),fE=gt({},go,{data:0}),Cm=Mn(fE),hE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=mE[t])?!!e[t]:!1}function Oh(){return gE}var vE=gt({},Ca,{key:function(t){if(t.key){var e=hE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?pE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oh,charCode:function(t){return t.type==="keypress"?Fl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_E=Mn(vE),yE=gt({},Oc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rm=Mn(yE),xE=gt({},Ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oh}),SE=Mn(xE),ME=gt({},go,{propertyName:0,elapsedTime:0,pseudoElement:0}),EE=Mn(ME),wE=gt({},Oc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),TE=Mn(wE),AE=[9,13,27,32],kh=Ci&&"CompositionEvent"in window,Xo=null;Ci&&"documentMode"in document&&(Xo=document.documentMode);var bE=Ci&&"TextEvent"in window&&!Xo,E_=Ci&&(!kh||Xo&&8<Xo&&11>=Xo),Pm=" ",Lm=!1;function w_(t,e){switch(t){case"keyup":return AE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function T_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ps=!1;function CE(t,e){switch(t){case"compositionend":return T_(e);case"keypress":return e.which!==32?null:(Lm=!0,Pm);case"textInput":return t=e.data,t===Pm&&Lm?null:t;default:return null}}function RE(t,e){if(Ps)return t==="compositionend"||!kh&&w_(t,e)?(t=M_(),Ul=Uh=Ji=null,Ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return E_&&e.locale!=="ko"?null:e.data;default:return null}}var PE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!PE[t.type]:e==="textarea"}function A_(t,e,n,i){i_(i),e=oc(e,"onChange"),0<e.length&&(n=new Fh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var $o=null,ca=null;function LE(t){O_(t,0)}function kc(t){var e=Is(t);if(q0(e))return t}function DE(t,e){if(t==="change")return e}var b_=!1;if(Ci){var Mu;if(Ci){var Eu="oninput"in document;if(!Eu){var Im=document.createElement("div");Im.setAttribute("oninput","return;"),Eu=typeof Im.oninput=="function"}Mu=Eu}else Mu=!1;b_=Mu&&(!document.documentMode||9<document.documentMode)}function Nm(){$o&&($o.detachEvent("onpropertychange",C_),ca=$o=null)}function C_(t){if(t.propertyName==="value"&&kc(ca)){var e=[];A_(e,ca,t,Ph(t)),a_(LE,e)}}function IE(t,e,n){t==="focusin"?(Nm(),$o=e,ca=n,$o.attachEvent("onpropertychange",C_)):t==="focusout"&&Nm()}function NE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kc(ca)}function UE(t,e){if(t==="click")return kc(e)}function FE(t,e){if(t==="input"||t==="change")return kc(e)}function OE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $n=typeof Object.is=="function"?Object.is:OE;function ua(t,e){if($n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Dd.call(e,r)||!$n(t[r],e[r]))return!1}return!0}function Um(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fm(t,e){var n=Um(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Um(n)}}function R_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?R_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function P_(){for(var t=window,e=Jl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Jl(t.document)}return e}function Bh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function kE(t){var e=P_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&R_(n.ownerDocument.documentElement,n)){if(i!==null&&Bh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Fm(n,s);var o=Fm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var BE=Ci&&"documentMode"in document&&11>=document.documentMode,Ls=null,Zd=null,Yo=null,Qd=!1;function Om(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qd||Ls==null||Ls!==Jl(i)||(i=Ls,"selectionStart"in i&&Bh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Yo&&ua(Yo,i)||(Yo=i,i=oc(Zd,"onSelect"),0<i.length&&(e=new Fh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ls)))}function qa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ds={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionend:qa("Transition","TransitionEnd")},wu={},L_={};Ci&&(L_=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function Bc(t){if(wu[t])return wu[t];if(!Ds[t])return t;var e=Ds[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in L_)return wu[t]=e[n];return t}var D_=Bc("animationend"),I_=Bc("animationiteration"),N_=Bc("animationstart"),U_=Bc("transitionend"),F_=new Map,km="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(t,e){F_.set(t,e),os(e,[t])}for(var Tu=0;Tu<km.length;Tu++){var Au=km[Tu],zE=Au.toLowerCase(),VE=Au[0].toUpperCase()+Au.slice(1);yr(zE,"on"+VE)}yr(D_,"onAnimationEnd");yr(I_,"onAnimationIteration");yr(N_,"onAnimationStart");yr("dblclick","onDoubleClick");yr("focusin","onFocus");yr("focusout","onBlur");yr(U_,"onTransitionEnd");eo("onMouseEnter",["mouseout","mouseover"]);eo("onMouseLeave",["mouseout","mouseover"]);eo("onPointerEnter",["pointerout","pointerover"]);eo("onPointerLeave",["pointerout","pointerover"]);os("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));os("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));os("onBeforeInput",["compositionend","keypress","textInput","paste"]);os("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));os("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));os("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),HE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vo));function Bm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,zM(i,e,void 0,t),t.currentTarget=null}function O_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Bm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Bm(r,a,c),s=l}}}if(tc)throw t=$d,tc=!1,$d=null,t}function at(t,e){var n=e[rf];n===void 0&&(n=e[rf]=new Set);var i=t+"__bubble";n.has(i)||(k_(e,t,2,!1),n.add(i))}function bu(t,e,n){var i=0;e&&(i|=4),k_(n,t,i,e)}var Za="_reactListening"+Math.random().toString(36).slice(2);function da(t){if(!t[Za]){t[Za]=!0,j0.forEach(function(n){n!=="selectionchange"&&(HE.has(n)||bu(n,!1,t),bu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Za]||(e[Za]=!0,bu("selectionchange",!1,e))}}function k_(t,e,n,i){switch(S_(e)){case 1:var r=nE;break;case 4:r=iE;break;default:r=Nh}n=r.bind(null,e,n,t),r=void 0,!Xd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Cu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Hr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}a_(function(){var c=s,u=Ph(n),d=[];e:{var f=F_.get(t);if(f!==void 0){var p=Fh,v=t;switch(t){case"keypress":if(Fl(n)===0)break e;case"keydown":case"keyup":p=_E;break;case"focusin":v="focus",p=Su;break;case"focusout":v="blur",p=Su;break;case"beforeblur":case"afterblur":p=Su;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=bm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=oE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=SE;break;case D_:case I_:case N_:p=cE;break;case U_:p=EE;break;case"scroll":p=rE;break;case"wheel":p=TE;break;case"copy":case"cut":case"paste":p=dE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Rm}var y=(e&4)!==0,m=!y&&t==="scroll",h=y?f!==null?f+"Capture":null:f;y=[];for(var _=c,g;_!==null;){g=_;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,h!==null&&(S=sa(_,h),S!=null&&y.push(fa(_,S,g)))),m)break;_=_.return}0<y.length&&(f=new p(f,v,null,n,u),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Wd&&(v=n.relatedTarget||n.fromElement)&&(Hr(v)||v[Ri]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?Hr(v):null,v!==null&&(m=as(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(y=bm,S="onMouseLeave",h="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(y=Rm,S="onPointerLeave",h="onPointerEnter",_="pointer"),m=p==null?f:Is(p),g=v==null?f:Is(v),f=new y(S,_+"leave",p,n,u),f.target=m,f.relatedTarget=g,S=null,Hr(u)===c&&(y=new y(h,_+"enter",v,n,u),y.target=g,y.relatedTarget=m,S=y),m=S,p&&v)t:{for(y=p,h=v,_=0,g=y;g;g=us(g))_++;for(g=0,S=h;S;S=us(S))g++;for(;0<_-g;)y=us(y),_--;for(;0<g-_;)h=us(h),g--;for(;_--;){if(y===h||h!==null&&y===h.alternate)break t;y=us(y),h=us(h)}y=null}else y=null;p!==null&&zm(d,f,p,y,!1),v!==null&&m!==null&&zm(d,m,v,y,!0)}}e:{if(f=c?Is(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var R=DE;else if(Dm(f))if(b_)R=FE;else{R=NE;var T=IE}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(R=UE);if(R&&(R=R(t,c))){A_(d,R,n,u);break e}T&&T(t,f,c),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Bd(f,"number",f.value)}switch(T=c?Is(c):window,t){case"focusin":(Dm(T)||T.contentEditable==="true")&&(Ls=T,Zd=c,Yo=null);break;case"focusout":Yo=Zd=Ls=null;break;case"mousedown":Qd=!0;break;case"contextmenu":case"mouseup":case"dragend":Qd=!1,Om(d,n,u);break;case"selectionchange":if(BE)break;case"keydown":case"keyup":Om(d,n,u)}var A;if(kh)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Ps?w_(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(E_&&n.locale!=="ko"&&(Ps||b!=="onCompositionStart"?b==="onCompositionEnd"&&Ps&&(A=M_()):(Ji=u,Uh="value"in Ji?Ji.value:Ji.textContent,Ps=!0)),T=oc(c,b),0<T.length&&(b=new Cm(b,t,null,n,u),d.push({event:b,listeners:T}),A?b.data=A:(A=T_(n),A!==null&&(b.data=A)))),(A=bE?CE(t,n):RE(t,n))&&(c=oc(c,"onBeforeInput"),0<c.length&&(u=new Cm("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=A))}O_(d,e)})}function fa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function oc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=sa(t,n),s!=null&&i.unshift(fa(t,s,r)),s=sa(t,e),s!=null&&i.push(fa(t,s,r))),t=t.return}return i}function us(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=sa(n,s),l!=null&&o.unshift(fa(n,l,a))):r||(l=sa(n,s),l!=null&&o.push(fa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var GE=/\r\n?/g,WE=/\u0000|\uFFFD/g;function Vm(t){return(typeof t=="string"?t:""+t).replace(GE,`
`).replace(WE,"")}function Qa(t,e,n){if(e=Vm(e),Vm(t)!==e&&n)throw Error(te(425))}function ac(){}var Jd=null,ef=null;function tf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var nf=typeof setTimeout=="function"?setTimeout:void 0,jE=typeof clearTimeout=="function"?clearTimeout:void 0,Hm=typeof Promise=="function"?Promise:void 0,XE=typeof queueMicrotask=="function"?queueMicrotask:typeof Hm<"u"?function(t){return Hm.resolve(null).then(t).catch($E)}:nf;function $E(t){setTimeout(function(){throw t})}function Ru(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),la(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);la(e)}function rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Gm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var vo=Math.random().toString(36).slice(2),Jn="__reactFiber$"+vo,ha="__reactProps$"+vo,Ri="__reactContainer$"+vo,rf="__reactEvents$"+vo,YE="__reactListeners$"+vo,KE="__reactHandles$"+vo;function Hr(t){var e=t[Jn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ri]||n[Jn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Gm(t);t!==null;){if(n=t[Jn])return n;t=Gm(t)}return e}t=n,n=t.parentNode}return null}function Ra(t){return t=t[Jn]||t[Ri],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Is(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function zc(t){return t[ha]||null}var sf=[],Ns=-1;function xr(t){return{current:t}}function ct(t){0>Ns||(t.current=sf[Ns],sf[Ns]=null,Ns--)}function st(t,e){Ns++,sf[Ns]=t.current,t.current=e}var pr={},Kt=xr(pr),an=xr(!1),Qr=pr;function to(t,e){var n=t.type.contextTypes;if(!n)return pr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function ln(t){return t=t.childContextTypes,t!=null}function lc(){ct(an),ct(Kt)}function Wm(t,e,n){if(Kt.current!==pr)throw Error(te(168));st(Kt,e),st(an,n)}function B_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,IM(t)||"Unknown",r));return gt({},n,i)}function cc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pr,Qr=Kt.current,st(Kt,t),st(an,an.current),!0}function jm(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=B_(t,e,Qr),i.__reactInternalMemoizedMergedChildContext=t,ct(an),ct(Kt),st(Kt,t)):ct(an),st(an,n)}var vi=null,Vc=!1,Pu=!1;function z_(t){vi===null?vi=[t]:vi.push(t)}function qE(t){Vc=!0,z_(t)}function Sr(){if(!Pu&&vi!==null){Pu=!0;var t=0,e=it;try{var n=vi;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}vi=null,Vc=!1}catch(r){throw vi!==null&&(vi=vi.slice(t+1)),d_(Lh,Sr),r}finally{it=e,Pu=!1}}return null}var Us=[],Fs=0,uc=null,dc=0,bn=[],Cn=0,Jr=null,yi=1,xi="";function Ir(t,e){Us[Fs++]=dc,Us[Fs++]=uc,uc=t,dc=e}function V_(t,e,n){bn[Cn++]=yi,bn[Cn++]=xi,bn[Cn++]=Jr,Jr=t;var i=yi;t=xi;var r=32-jn(i)-1;i&=~(1<<r),n+=1;var s=32-jn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,yi=1<<32-jn(e)+r|n<<r|i,xi=s+t}else yi=1<<s|n<<r|i,xi=t}function zh(t){t.return!==null&&(Ir(t,1),V_(t,1,0))}function Vh(t){for(;t===uc;)uc=Us[--Fs],Us[Fs]=null,dc=Us[--Fs],Us[Fs]=null;for(;t===Jr;)Jr=bn[--Cn],bn[Cn]=null,xi=bn[--Cn],bn[Cn]=null,yi=bn[--Cn],bn[Cn]=null}var vn=null,gn=null,ut=!1,Hn=null;function H_(t,e){var n=Pn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Xm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vn=t,gn=rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vn=t,gn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Jr!==null?{id:yi,overflow:xi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Pn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vn=t,gn=null,!0):!1;default:return!1}}function of(t){return(t.mode&1)!==0&&(t.flags&128)===0}function af(t){if(ut){var e=gn;if(e){var n=e;if(!Xm(t,e)){if(of(t))throw Error(te(418));e=rr(n.nextSibling);var i=vn;e&&Xm(t,e)?H_(i,n):(t.flags=t.flags&-4097|2,ut=!1,vn=t)}}else{if(of(t))throw Error(te(418));t.flags=t.flags&-4097|2,ut=!1,vn=t}}}function $m(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vn=t}function Ja(t){if(t!==vn)return!1;if(!ut)return $m(t),ut=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!tf(t.type,t.memoizedProps)),e&&(e=gn)){if(of(t))throw G_(),Error(te(418));for(;e;)H_(t,e),e=rr(e.nextSibling)}if($m(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gn=rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gn=null}}else gn=vn?rr(t.stateNode.nextSibling):null;return!0}function G_(){for(var t=gn;t;)t=rr(t.nextSibling)}function no(){gn=vn=null,ut=!1}function Hh(t){Hn===null?Hn=[t]:Hn.push(t)}var ZE=Ui.ReactCurrentBatchConfig;function zn(t,e){if(t&&t.defaultProps){e=gt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var fc=xr(null),hc=null,Os=null,Gh=null;function Wh(){Gh=Os=hc=null}function jh(t){var e=fc.current;ct(fc),t._currentValue=e}function lf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ks(t,e){hc=t,Gh=Os=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(on=!0),t.firstContext=null)}function In(t){var e=t._currentValue;if(Gh!==t)if(t={context:t,memoizedValue:e,next:null},Os===null){if(hc===null)throw Error(te(308));Os=t,hc.dependencies={lanes:0,firstContext:t}}else Os=Os.next=t;return e}var Gr=null;function Xh(t){Gr===null?Gr=[t]:Gr.push(t)}function W_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Xh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Pi(t,i)}function Pi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Yi=!1;function $h(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function j_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function sr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Pi(t,n)}return r=i.interleaved,r===null?(e.next=e,Xh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Pi(t,n)}function Ol(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Dh(t,n)}}function Ym(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pc(t,e,n,i){var r=t.updateQueue;Yi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(f=e,p=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(p,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,f=typeof v=="function"?v.call(p,d,f):v,f==null)break e;d=gt({},d,f);break e;case 2:Yi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ts|=o,t.lanes=o,t.memoizedState=d}}function Km(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var X_=new W0.Component().refs;function cf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:gt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Hc={isMounted:function(t){return(t=t._reactInternals)?as(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=ar(t),s=wi(i,r);s.payload=e,n!=null&&(s.callback=n),e=sr(t,s,r),e!==null&&(Xn(e,t,r,i),Ol(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=ar(t),s=wi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=sr(t,s,r),e!==null&&(Xn(e,t,r,i),Ol(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qt(),i=ar(t),r=wi(n,i);r.tag=2,e!=null&&(r.callback=e),e=sr(t,r,i),e!==null&&(Xn(e,t,i,n),Ol(e,t,i))}};function qm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ua(n,i)||!ua(r,s):!0}function $_(t,e,n){var i=!1,r=pr,s=e.contextType;return typeof s=="object"&&s!==null?s=In(s):(r=ln(e)?Qr:Kt.current,i=e.contextTypes,s=(i=i!=null)?to(t,r):pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Hc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Zm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Hc.enqueueReplaceState(e,e.state,null)}function uf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=X_,$h(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=In(s):(s=ln(e)?Qr:Kt.current,r.context=to(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(cf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Hc.enqueueReplaceState(r,r.state,null),pc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function bo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===X_&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function el(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Qm(t){var e=t._init;return e(t._payload)}function Y_(t){function e(h,_){if(t){var g=h.deletions;g===null?(h.deletions=[_],h.flags|=16):g.push(_)}}function n(h,_){if(!t)return null;for(;_!==null;)e(h,_),_=_.sibling;return null}function i(h,_){for(h=new Map;_!==null;)_.key!==null?h.set(_.key,_):h.set(_.index,_),_=_.sibling;return h}function r(h,_){return h=lr(h,_),h.index=0,h.sibling=null,h}function s(h,_,g){return h.index=g,t?(g=h.alternate,g!==null?(g=g.index,g<_?(h.flags|=2,_):g):(h.flags|=2,_)):(h.flags|=1048576,_)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,_,g,S){return _===null||_.tag!==6?(_=Ou(g,h.mode,S),_.return=h,_):(_=r(_,g),_.return=h,_)}function l(h,_,g,S){var R=g.type;return R===Rs?u(h,_,g.props.children,S,g.key):_!==null&&(_.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===$i&&Qm(R)===_.type)?(S=r(_,g.props),S.ref=bo(h,_,g),S.return=h,S):(S=Gl(g.type,g.key,g.props,null,h.mode,S),S.ref=bo(h,_,g),S.return=h,S)}function c(h,_,g,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=ku(g,h.mode,S),_.return=h,_):(_=r(_,g.children||[]),_.return=h,_)}function u(h,_,g,S,R){return _===null||_.tag!==7?(_=qr(g,h.mode,S,R),_.return=h,_):(_=r(_,g),_.return=h,_)}function d(h,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Ou(""+_,h.mode,g),_.return=h,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ga:return g=Gl(_.type,_.key,_.props,null,h.mode,g),g.ref=bo(h,null,_),g.return=h,g;case Cs:return _=ku(_,h.mode,g),_.return=h,_;case $i:var S=_._init;return d(h,S(_._payload),g)}if(Bo(_)||Mo(_))return _=qr(_,h.mode,g,null),_.return=h,_;el(h,_)}return null}function f(h,_,g,S){var R=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return R!==null?null:a(h,_,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ga:return g.key===R?l(h,_,g,S):null;case Cs:return g.key===R?c(h,_,g,S):null;case $i:return R=g._init,f(h,_,R(g._payload),S)}if(Bo(g)||Mo(g))return R!==null?null:u(h,_,g,S,null);el(h,g)}return null}function p(h,_,g,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(g)||null,a(_,h,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ga:return h=h.get(S.key===null?g:S.key)||null,l(_,h,S,R);case Cs:return h=h.get(S.key===null?g:S.key)||null,c(_,h,S,R);case $i:var T=S._init;return p(h,_,g,T(S._payload),R)}if(Bo(S)||Mo(S))return h=h.get(g)||null,u(_,h,S,R,null);el(_,S)}return null}function v(h,_,g,S){for(var R=null,T=null,A=_,b=_=0,E=null;A!==null&&b<g.length;b++){A.index>b?(E=A,A=null):E=A.sibling;var x=f(h,A,g[b],S);if(x===null){A===null&&(A=E);break}t&&A&&x.alternate===null&&e(h,A),_=s(x,_,b),T===null?R=x:T.sibling=x,T=x,A=E}if(b===g.length)return n(h,A),ut&&Ir(h,b),R;if(A===null){for(;b<g.length;b++)A=d(h,g[b],S),A!==null&&(_=s(A,_,b),T===null?R=A:T.sibling=A,T=A);return ut&&Ir(h,b),R}for(A=i(h,A);b<g.length;b++)E=p(A,h,b,g[b],S),E!==null&&(t&&E.alternate!==null&&A.delete(E.key===null?b:E.key),_=s(E,_,b),T===null?R=E:T.sibling=E,T=E);return t&&A.forEach(function(C){return e(h,C)}),ut&&Ir(h,b),R}function y(h,_,g,S){var R=Mo(g);if(typeof R!="function")throw Error(te(150));if(g=R.call(g),g==null)throw Error(te(151));for(var T=R=null,A=_,b=_=0,E=null,x=g.next();A!==null&&!x.done;b++,x=g.next()){A.index>b?(E=A,A=null):E=A.sibling;var C=f(h,A,x.value,S);if(C===null){A===null&&(A=E);break}t&&A&&C.alternate===null&&e(h,A),_=s(C,_,b),T===null?R=C:T.sibling=C,T=C,A=E}if(x.done)return n(h,A),ut&&Ir(h,b),R;if(A===null){for(;!x.done;b++,x=g.next())x=d(h,x.value,S),x!==null&&(_=s(x,_,b),T===null?R=x:T.sibling=x,T=x);return ut&&Ir(h,b),R}for(A=i(h,A);!x.done;b++,x=g.next())x=p(A,h,b,x.value,S),x!==null&&(t&&x.alternate!==null&&A.delete(x.key===null?b:x.key),_=s(x,_,b),T===null?R=x:T.sibling=x,T=x);return t&&A.forEach(function(L){return e(h,L)}),ut&&Ir(h,b),R}function m(h,_,g,S){if(typeof g=="object"&&g!==null&&g.type===Rs&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ga:e:{for(var R=g.key,T=_;T!==null;){if(T.key===R){if(R=g.type,R===Rs){if(T.tag===7){n(h,T.sibling),_=r(T,g.props.children),_.return=h,h=_;break e}}else if(T.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===$i&&Qm(R)===T.type){n(h,T.sibling),_=r(T,g.props),_.ref=bo(h,T,g),_.return=h,h=_;break e}n(h,T);break}else e(h,T);T=T.sibling}g.type===Rs?(_=qr(g.props.children,h.mode,S,g.key),_.return=h,h=_):(S=Gl(g.type,g.key,g.props,null,h.mode,S),S.ref=bo(h,_,g),S.return=h,h=S)}return o(h);case Cs:e:{for(T=g.key;_!==null;){if(_.key===T)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(h,_.sibling),_=r(_,g.children||[]),_.return=h,h=_;break e}else{n(h,_);break}else e(h,_);_=_.sibling}_=ku(g,h.mode,S),_.return=h,h=_}return o(h);case $i:return T=g._init,m(h,_,T(g._payload),S)}if(Bo(g))return v(h,_,g,S);if(Mo(g))return y(h,_,g,S);el(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(n(h,_.sibling),_=r(_,g),_.return=h,h=_):(n(h,_),_=Ou(g,h.mode,S),_.return=h,h=_),o(h)):n(h,_)}return m}var io=Y_(!0),K_=Y_(!1),Pa={},ri=xr(Pa),pa=xr(Pa),ma=xr(Pa);function Wr(t){if(t===Pa)throw Error(te(174));return t}function Yh(t,e){switch(st(ma,e),st(pa,t),st(ri,Pa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Vd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Vd(e,t)}ct(ri),st(ri,e)}function ro(){ct(ri),ct(pa),ct(ma)}function q_(t){Wr(ma.current);var e=Wr(ri.current),n=Vd(e,t.type);e!==n&&(st(pa,t),st(ri,n))}function Kh(t){pa.current===t&&(ct(ri),ct(pa))}var ht=xr(0);function mc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Lu=[];function qh(){for(var t=0;t<Lu.length;t++)Lu[t]._workInProgressVersionPrimary=null;Lu.length=0}var kl=Ui.ReactCurrentDispatcher,Du=Ui.ReactCurrentBatchConfig,es=0,mt=null,At=null,Dt=null,gc=!1,Ko=!1,ga=0,QE=0;function Vt(){throw Error(te(321))}function Zh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$n(t[n],e[n]))return!1;return!0}function Qh(t,e,n,i,r,s){if(es=s,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,kl.current=t===null||t.memoizedState===null?nw:iw,t=n(i,r),Ko){s=0;do{if(Ko=!1,ga=0,25<=s)throw Error(te(301));s+=1,Dt=At=null,e.updateQueue=null,kl.current=rw,t=n(i,r)}while(Ko)}if(kl.current=vc,e=At!==null&&At.next!==null,es=0,Dt=At=mt=null,gc=!1,e)throw Error(te(300));return t}function Jh(){var t=ga!==0;return ga=0,t}function qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?mt.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function Nn(){if(At===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Dt===null?mt.memoizedState:Dt.next;if(e!==null)Dt=e,At=t;else{if(t===null)throw Error(te(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Dt===null?mt.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function va(t,e){return typeof e=="function"?e(t):e}function Iu(t){var e=Nn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=At,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((es&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,mt.lanes|=u,ts|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,$n(i,e.memoizedState)||(on=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,mt.lanes|=s,ts|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Nu(t){var e=Nn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);$n(s,e.memoizedState)||(on=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Z_(){}function Q_(t,e){var n=mt,i=Nn(),r=e(),s=!$n(i.memoizedState,r);if(s&&(i.memoizedState=r,on=!0),i=i.queue,ep(ty.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,_a(9,ey.bind(null,n,i,r,e),void 0,null),Nt===null)throw Error(te(349));es&30||J_(n,e,r)}return r}function J_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ey(t,e,n,i){e.value=n,e.getSnapshot=i,ny(e)&&iy(t)}function ty(t,e,n){return n(function(){ny(e)&&iy(t)})}function ny(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$n(t,n)}catch{return!0}}function iy(t){var e=Pi(t,1);e!==null&&Xn(e,t,1,-1)}function Jm(t){var e=qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:t},e.queue=t,t=t.dispatch=tw.bind(null,mt,t),[e.memoizedState,t]}function _a(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function ry(){return Nn().memoizedState}function Bl(t,e,n,i){var r=qn();mt.flags|=t,r.memoizedState=_a(1|e,n,void 0,i===void 0?null:i)}function Gc(t,e,n,i){var r=Nn();i=i===void 0?null:i;var s=void 0;if(At!==null){var o=At.memoizedState;if(s=o.destroy,i!==null&&Zh(i,o.deps)){r.memoizedState=_a(e,n,s,i);return}}mt.flags|=t,r.memoizedState=_a(1|e,n,s,i)}function eg(t,e){return Bl(8390656,8,t,e)}function ep(t,e){return Gc(2048,8,t,e)}function sy(t,e){return Gc(4,2,t,e)}function oy(t,e){return Gc(4,4,t,e)}function ay(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ly(t,e,n){return n=n!=null?n.concat([t]):null,Gc(4,4,ay.bind(null,e,t),n)}function tp(){}function cy(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Zh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function uy(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Zh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function dy(t,e,n){return es&21?($n(n,e)||(n=p_(),mt.lanes|=n,ts|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,on=!0),t.memoizedState=n)}function JE(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=Du.transition;Du.transition={};try{t(!1),e()}finally{it=n,Du.transition=i}}function fy(){return Nn().memoizedState}function ew(t,e,n){var i=ar(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},hy(t))py(e,n);else if(n=W_(t,e,n,i),n!==null){var r=Qt();Xn(n,t,i,r),my(n,e,i)}}function tw(t,e,n){var i=ar(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(hy(t))py(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,$n(a,o)){var l=e.interleaved;l===null?(r.next=r,Xh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=W_(t,e,r,i),n!==null&&(r=Qt(),Xn(n,t,i,r),my(n,e,i))}}function hy(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function py(t,e){Ko=gc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function my(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Dh(t,n)}}var vc={readContext:In,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},nw={readContext:In,useCallback:function(t,e){return qn().memoizedState=[t,e===void 0?null:e],t},useContext:In,useEffect:eg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Bl(4194308,4,ay.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Bl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Bl(4,2,t,e)},useMemo:function(t,e){var n=qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=qn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ew.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=qn();return t={current:t},e.memoizedState=t},useState:Jm,useDebugValue:tp,useDeferredValue:function(t){return qn().memoizedState=t},useTransition:function(){var t=Jm(!1),e=t[0];return t=JE.bind(null,t[1]),qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=qn();if(ut){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Nt===null)throw Error(te(349));es&30||J_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,eg(ty.bind(null,i,s,t),[t]),i.flags|=2048,_a(9,ey.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=qn(),e=Nt.identifierPrefix;if(ut){var n=xi,i=yi;n=(i&~(1<<32-jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ga++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=QE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},iw={readContext:In,useCallback:cy,useContext:In,useEffect:ep,useImperativeHandle:ly,useInsertionEffect:sy,useLayoutEffect:oy,useMemo:uy,useReducer:Iu,useRef:ry,useState:function(){return Iu(va)},useDebugValue:tp,useDeferredValue:function(t){var e=Nn();return dy(e,At.memoizedState,t)},useTransition:function(){var t=Iu(va)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:Z_,useSyncExternalStore:Q_,useId:fy,unstable_isNewReconciler:!1},rw={readContext:In,useCallback:cy,useContext:In,useEffect:ep,useImperativeHandle:ly,useInsertionEffect:sy,useLayoutEffect:oy,useMemo:uy,useReducer:Nu,useRef:ry,useState:function(){return Nu(va)},useDebugValue:tp,useDeferredValue:function(t){var e=Nn();return At===null?e.memoizedState=t:dy(e,At.memoizedState,t)},useTransition:function(){var t=Nu(va)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:Z_,useSyncExternalStore:Q_,useId:fy,unstable_isNewReconciler:!1};function so(t,e){try{var n="",i=e;do n+=DM(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Uu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function df(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var sw=typeof WeakMap=="function"?WeakMap:Map;function gy(t,e,n){n=wi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){yc||(yc=!0,Sf=i),df(t,e)},n}function vy(t,e,n){n=wi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){df(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){df(t,e),typeof i!="function"&&(or===null?or=new Set([this]):or.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function tg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new sw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=yw.bind(null,t,e,n),e.then(t,t))}function ng(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ig(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=wi(-1,1),e.tag=2,sr(n,e,1))),n.lanes|=1),t)}var ow=Ui.ReactCurrentOwner,on=!1;function Zt(t,e,n,i){e.child=t===null?K_(e,null,n,i):io(e,t.child,n,i)}function rg(t,e,n,i,r){n=n.render;var s=e.ref;return Ks(e,r),i=Qh(t,e,n,i,s,r),n=Jh(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(ut&&n&&zh(e),e.flags|=1,Zt(t,e,i,r),e.child)}function sg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!cp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,_y(t,e,s,i,r)):(t=Gl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ua,n(o,i)&&t.ref===e.ref)return Li(t,e,r)}return e.flags|=1,t=lr(s,i),t.ref=e.ref,t.return=e,e.child=t}function _y(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ua(s,i)&&t.ref===e.ref)if(on=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(on=!0);else return e.lanes=t.lanes,Li(t,e,r)}return ff(t,e,n,i,r)}function yy(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(Bs,mn),mn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,st(Bs,mn),mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,st(Bs,mn),mn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,st(Bs,mn),mn|=i;return Zt(t,e,r,n),e.child}function xy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ff(t,e,n,i,r){var s=ln(n)?Qr:Kt.current;return s=to(e,s),Ks(e,r),n=Qh(t,e,n,i,s,r),i=Jh(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(ut&&i&&zh(e),e.flags|=1,Zt(t,e,n,r),e.child)}function og(t,e,n,i,r){if(ln(n)){var s=!0;cc(e)}else s=!1;if(Ks(e,r),e.stateNode===null)zl(t,e),$_(e,n,i),uf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=In(c):(c=ln(n)?Qr:Kt.current,c=to(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Zm(e,o,i,c),Yi=!1;var f=e.memoizedState;o.state=f,pc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||an.current||Yi?(typeof u=="function"&&(cf(e,n,u,i),l=e.memoizedState),(a=Yi||qm(e,n,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,j_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:zn(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=In(l):(l=ln(n)?Qr:Kt.current,l=to(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Zm(e,o,i,l),Yi=!1,f=e.memoizedState,o.state=f,pc(e,i,o,r);var v=e.memoizedState;a!==d||f!==v||an.current||Yi?(typeof p=="function"&&(cf(e,n,p,i),v=e.memoizedState),(c=Yi||qm(e,n,c,i,f,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return hf(t,e,n,i,s,r)}function hf(t,e,n,i,r,s){xy(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&jm(e,n,!1),Li(t,e,s);i=e.stateNode,ow.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=io(e,t.child,null,s),e.child=io(e,null,a,s)):Zt(t,e,a,s),e.memoizedState=i.state,r&&jm(e,n,!0),e.child}function Sy(t){var e=t.stateNode;e.pendingContext?Wm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Wm(t,e.context,!1),Yh(t,e.containerInfo)}function ag(t,e,n,i,r){return no(),Hh(r),e.flags|=256,Zt(t,e,n,i),e.child}var pf={dehydrated:null,treeContext:null,retryLane:0};function mf(t){return{baseLanes:t,cachePool:null,transitions:null}}function My(t,e,n){var i=e.pendingProps,r=ht.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),st(ht,r&1),t===null)return af(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Xc(o,i,0,null),t=qr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=mf(n),e.memoizedState=pf,t):np(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return aw(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=lr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=lr(a,s):(s=qr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?mf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=pf,i}return s=t.child,t=s.sibling,i=lr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function np(t,e){return e=Xc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function tl(t,e,n,i){return i!==null&&Hh(i),io(e,t.child,null,n),t=np(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function aw(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Uu(Error(te(422))),tl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Xc({mode:"visible",children:i.children},r,0,null),s=qr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&io(e,t.child,null,o),e.child.memoizedState=mf(o),e.memoizedState=pf,s);if(!(e.mode&1))return tl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=Uu(s,i,void 0),tl(t,e,o,i)}if(a=(o&t.childLanes)!==0,on||a){if(i=Nt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Pi(t,r),Xn(i,t,r,-1))}return lp(),i=Uu(Error(te(421))),tl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=xw.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,gn=rr(r.nextSibling),vn=e,ut=!0,Hn=null,t!==null&&(bn[Cn++]=yi,bn[Cn++]=xi,bn[Cn++]=Jr,yi=t.id,xi=t.overflow,Jr=e),e=np(e,i.children),e.flags|=4096,e)}function lg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),lf(t.return,e,n)}function Fu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Ey(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Zt(t,e,i.children,n),i=ht.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&lg(t,n,e);else if(t.tag===19)lg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(st(ht,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&mc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Fu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&mc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Fu(e,!0,n,null,s);break;case"together":Fu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function zl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Li(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ts|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function lw(t,e,n){switch(e.tag){case 3:Sy(e),no();break;case 5:q_(e);break;case 1:ln(e.type)&&cc(e);break;case 4:Yh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(fc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(ht,ht.current&1),e.flags|=128,null):n&e.child.childLanes?My(t,e,n):(st(ht,ht.current&1),t=Li(t,e,n),t!==null?t.sibling:null);st(ht,ht.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Ey(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(ht,ht.current),i)break;return null;case 22:case 23:return e.lanes=0,yy(t,e,n)}return Li(t,e,n)}var wy,gf,Ty,Ay;wy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gf=function(){};Ty=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Wr(ri.current);var s=null;switch(n){case"input":r=Od(t,r),i=Od(t,i),s=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),s=[];break;case"textarea":r=zd(t,r),i=zd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ac)}Hd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ia.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ia.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&at("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Ay=function(t,e,n,i){n!==i&&(e.flags|=4)};function Co(t,e){if(!ut)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function cw(t,e,n){var i=e.pendingProps;switch(Vh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ht(e),null;case 1:return ln(e.type)&&lc(),Ht(e),null;case 3:return i=e.stateNode,ro(),ct(an),ct(Kt),qh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ja(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Hn!==null&&(wf(Hn),Hn=null))),gf(t,e),Ht(e),null;case 5:Kh(e);var r=Wr(ma.current);if(n=e.type,t!==null&&e.stateNode!=null)Ty(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Ht(e),null}if(t=Wr(ri.current),Ja(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Jn]=e,i[ha]=s,t=(e.mode&1)!==0,n){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<Vo.length;r++)at(Vo[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":vm(i,s),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},at("invalid",i);break;case"textarea":ym(i,s),at("invalid",i)}Hd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Qa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Qa(i.textContent,a,t),r=["children",""+a]):ia.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&at("scroll",i)}switch(n){case"input":Wa(i),_m(i,s,!0);break;case"textarea":Wa(i),xm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ac)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=J0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Jn]=e,t[ha]=i,wy(t,e,!1,!1),e.stateNode=t;e:{switch(o=Gd(n,i),n){case"dialog":at("cancel",t),at("close",t),r=i;break;case"iframe":case"object":case"embed":at("load",t),r=i;break;case"video":case"audio":for(r=0;r<Vo.length;r++)at(Vo[r],t);r=i;break;case"source":at("error",t),r=i;break;case"img":case"image":case"link":at("error",t),at("load",t),r=i;break;case"details":at("toggle",t),r=i;break;case"input":vm(t,i),r=Od(t,i),at("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),at("invalid",t);break;case"textarea":ym(t,i),r=zd(t,i),at("invalid",t);break;default:r=i}Hd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?n_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&e_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ra(t,l):typeof l=="number"&&ra(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ia.hasOwnProperty(s)?l!=null&&s==="onScroll"&&at("scroll",t):l!=null&&Ah(t,s,l,o))}switch(n){case"input":Wa(t),_m(t,i,!1);break;case"textarea":Wa(t),xm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+hr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?js(t,!!i.multiple,s,!1):i.defaultValue!=null&&js(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ac)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ht(e),null;case 6:if(t&&e.stateNode!=null)Ay(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=Wr(ma.current),Wr(ri.current),Ja(e)){if(i=e.stateNode,n=e.memoizedProps,i[Jn]=e,(s=i.nodeValue!==n)&&(t=vn,t!==null))switch(t.tag){case 3:Qa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Qa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Jn]=e,e.stateNode=i}return Ht(e),null;case 13:if(ct(ht),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ut&&gn!==null&&e.mode&1&&!(e.flags&128))G_(),no(),e.flags|=98560,s=!1;else if(s=Ja(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[Jn]=e}else no(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ht(e),s=!1}else Hn!==null&&(wf(Hn),Hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ht.current&1?bt===0&&(bt=3):lp())),e.updateQueue!==null&&(e.flags|=4),Ht(e),null);case 4:return ro(),gf(t,e),t===null&&da(e.stateNode.containerInfo),Ht(e),null;case 10:return jh(e.type._context),Ht(e),null;case 17:return ln(e.type)&&lc(),Ht(e),null;case 19:if(ct(ht),s=e.memoizedState,s===null)return Ht(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Co(s,!1);else{if(bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=mc(t),o!==null){for(e.flags|=128,Co(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return st(ht,ht.current&1|2),e.child}t=t.sibling}s.tail!==null&&St()>oo&&(e.flags|=128,i=!0,Co(s,!1),e.lanes=4194304)}else{if(!i)if(t=mc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Co(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ut)return Ht(e),null}else 2*St()-s.renderingStartTime>oo&&n!==1073741824&&(e.flags|=128,i=!0,Co(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=St(),e.sibling=null,n=ht.current,st(ht,i?n&1|2:n&1),e):(Ht(e),null);case 22:case 23:return ap(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?mn&1073741824&&(Ht(e),e.subtreeFlags&6&&(e.flags|=8192)):Ht(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function uw(t,e){switch(Vh(e),e.tag){case 1:return ln(e.type)&&lc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ro(),ct(an),ct(Kt),qh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Kh(e),null;case 13:if(ct(ht),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));no()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ct(ht),null;case 4:return ro(),null;case 10:return jh(e.type._context),null;case 22:case 23:return ap(),null;case 24:return null;default:return null}}var nl=!1,Xt=!1,dw=typeof WeakSet=="function"?WeakSet:Set,pe=null;function ks(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){yt(t,e,i)}else n.current=null}function vf(t,e,n){try{n()}catch(i){yt(t,e,i)}}var cg=!1;function fw(t,e){if(Jd=rc,t=P_(),Bh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ef={focusedElem:t,selectionRange:n},rc=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,m=v.memoizedState,h=e.stateNode,_=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:zn(e.type,y),m);h.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(S){yt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return v=cg,cg=!1,v}function qo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&vf(e,n,s)}r=r.next}while(r!==i)}}function Wc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function _f(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function by(t){var e=t.alternate;e!==null&&(t.alternate=null,by(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Jn],delete e[ha],delete e[rf],delete e[YE],delete e[KE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Cy(t){return t.tag===5||t.tag===3||t.tag===4}function ug(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Cy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ac));else if(i!==4&&(t=t.child,t!==null))for(yf(t,e,n),t=t.sibling;t!==null;)yf(t,e,n),t=t.sibling}function xf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(xf(t,e,n),t=t.sibling;t!==null;)xf(t,e,n),t=t.sibling}var Ot=null,Vn=!1;function Oi(t,e,n){for(n=n.child;n!==null;)Ry(t,e,n),n=n.sibling}function Ry(t,e,n){if(ii&&typeof ii.onCommitFiberUnmount=="function")try{ii.onCommitFiberUnmount(Fc,n)}catch{}switch(n.tag){case 5:Xt||ks(n,e);case 6:var i=Ot,r=Vn;Ot=null,Oi(t,e,n),Ot=i,Vn=r,Ot!==null&&(Vn?(t=Ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ot.removeChild(n.stateNode));break;case 18:Ot!==null&&(Vn?(t=Ot,n=n.stateNode,t.nodeType===8?Ru(t.parentNode,n):t.nodeType===1&&Ru(t,n),la(t)):Ru(Ot,n.stateNode));break;case 4:i=Ot,r=Vn,Ot=n.stateNode.containerInfo,Vn=!0,Oi(t,e,n),Ot=i,Vn=r;break;case 0:case 11:case 14:case 15:if(!Xt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&vf(n,e,o),r=r.next}while(r!==i)}Oi(t,e,n);break;case 1:if(!Xt&&(ks(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){yt(n,e,a)}Oi(t,e,n);break;case 21:Oi(t,e,n);break;case 22:n.mode&1?(Xt=(i=Xt)||n.memoizedState!==null,Oi(t,e,n),Xt=i):Oi(t,e,n);break;default:Oi(t,e,n)}}function dg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new dw),e.forEach(function(i){var r=Sw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Fn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ot=a.stateNode,Vn=!1;break e;case 3:Ot=a.stateNode.containerInfo,Vn=!0;break e;case 4:Ot=a.stateNode.containerInfo,Vn=!0;break e}a=a.return}if(Ot===null)throw Error(te(160));Ry(s,o,r),Ot=null,Vn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){yt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Py(e,t),e=e.sibling}function Py(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Fn(e,t),Kn(t),i&4){try{qo(3,t,t.return),Wc(3,t)}catch(y){yt(t,t.return,y)}try{qo(5,t,t.return)}catch(y){yt(t,t.return,y)}}break;case 1:Fn(e,t),Kn(t),i&512&&n!==null&&ks(n,n.return);break;case 5:if(Fn(e,t),Kn(t),i&512&&n!==null&&ks(n,n.return),t.flags&32){var r=t.stateNode;try{ra(r,"")}catch(y){yt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Z0(r,s),Gd(a,o);var c=Gd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?n_(r,d):u==="dangerouslySetInnerHTML"?e_(r,d):u==="children"?ra(r,d):Ah(r,u,d,c)}switch(a){case"input":kd(r,s);break;case"textarea":Q0(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?js(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?js(r,!!s.multiple,s.defaultValue,!0):js(r,!!s.multiple,s.multiple?[]:"",!1))}r[ha]=s}catch(y){yt(t,t.return,y)}}break;case 6:if(Fn(e,t),Kn(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){yt(t,t.return,y)}}break;case 3:if(Fn(e,t),Kn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{la(e.containerInfo)}catch(y){yt(t,t.return,y)}break;case 4:Fn(e,t),Kn(t);break;case 13:Fn(e,t),Kn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(sp=St())),i&4&&dg(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Xt=(c=Xt)||u,Fn(e,t),Xt=c):Fn(e,t),Kn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(pe=t,u=t.child;u!==null;){for(d=pe=u;pe!==null;){switch(f=pe,p=f.child,f.tag){case 0:case 11:case 14:case 15:qo(4,f,f.return);break;case 1:ks(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){yt(i,n,y)}}break;case 5:ks(f,f.return);break;case 22:if(f.memoizedState!==null){hg(d);continue}}p!==null?(p.return=f,pe=p):hg(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=t_("display",o))}catch(y){yt(t,t.return,y)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){yt(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Fn(e,t),Kn(t),i&4&&dg(t);break;case 21:break;default:Fn(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Cy(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ra(r,""),i.flags&=-33);var s=ug(t);xf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=ug(t);yf(t,a,o);break;default:throw Error(te(161))}}catch(l){yt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function hw(t,e,n){pe=t,Ly(t)}function Ly(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||nl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Xt;a=nl;var c=Xt;if(nl=o,(Xt=l)&&!c)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?pg(r):l!==null?(l.return=o,pe=l):pg(r);for(;s!==null;)pe=s,Ly(s),s=s.sibling;pe=r,nl=a,Xt=c}fg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):fg(t)}}function fg(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xt||Wc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Xt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Km(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Km(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&la(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Xt||e.flags&512&&_f(e)}catch(f){yt(e,e.return,f)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function hg(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function pg(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Wc(4,e)}catch(l){yt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var s=e.return;try{_f(e)}catch(l){yt(e,s,l)}break;case 5:var o=e.return;try{_f(e)}catch(l){yt(e,o,l)}}}catch(l){yt(e,e.return,l)}if(e===t){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var pw=Math.ceil,_c=Ui.ReactCurrentDispatcher,ip=Ui.ReactCurrentOwner,Dn=Ui.ReactCurrentBatchConfig,Ye=0,Nt=null,Tt=null,Bt=0,mn=0,Bs=xr(0),bt=0,ya=null,ts=0,jc=0,rp=0,Zo=null,rn=null,sp=0,oo=1/0,gi=null,yc=!1,Sf=null,or=null,il=!1,er=null,xc=0,Qo=0,Mf=null,Vl=-1,Hl=0;function Qt(){return Ye&6?St():Vl!==-1?Vl:Vl=St()}function ar(t){return t.mode&1?Ye&2&&Bt!==0?Bt&-Bt:ZE.transition!==null?(Hl===0&&(Hl=p_()),Hl):(t=it,t!==0||(t=window.event,t=t===void 0?16:S_(t.type)),t):1}function Xn(t,e,n,i){if(50<Qo)throw Qo=0,Mf=null,Error(te(185));ba(t,n,i),(!(Ye&2)||t!==Nt)&&(t===Nt&&(!(Ye&2)&&(jc|=n),bt===4&&Zi(t,Bt)),cn(t,i),n===1&&Ye===0&&!(e.mode&1)&&(oo=St()+500,Vc&&Sr()))}function cn(t,e){var n=t.callbackNode;ZM(t,e);var i=ic(t,t===Nt?Bt:0);if(i===0)n!==null&&Em(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Em(n),e===1)t.tag===0?qE(mg.bind(null,t)):z_(mg.bind(null,t)),XE(function(){!(Ye&6)&&Sr()}),n=null;else{switch(m_(i)){case 1:n=Lh;break;case 4:n=f_;break;case 16:n=nc;break;case 536870912:n=h_;break;default:n=nc}n=By(n,Dy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Dy(t,e){if(Vl=-1,Hl=0,Ye&6)throw Error(te(327));var n=t.callbackNode;if(qs()&&t.callbackNode!==n)return null;var i=ic(t,t===Nt?Bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Sc(t,i);else{e=i;var r=Ye;Ye|=2;var s=Ny();(Nt!==t||Bt!==e)&&(gi=null,oo=St()+500,Kr(t,e));do try{vw();break}catch(a){Iy(t,a)}while(!0);Wh(),_c.current=s,Ye=r,Tt!==null?e=0:(Nt=null,Bt=0,e=bt)}if(e!==0){if(e===2&&(r=Yd(t),r!==0&&(i=r,e=Ef(t,r))),e===1)throw n=ya,Kr(t,0),Zi(t,i),cn(t,St()),n;if(e===6)Zi(t,i);else{if(r=t.current.alternate,!(i&30)&&!mw(r)&&(e=Sc(t,i),e===2&&(s=Yd(t),s!==0&&(i=s,e=Ef(t,s))),e===1))throw n=ya,Kr(t,0),Zi(t,i),cn(t,St()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:Nr(t,rn,gi);break;case 3:if(Zi(t,i),(i&130023424)===i&&(e=sp+500-St(),10<e)){if(ic(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=nf(Nr.bind(null,t,rn,gi),e);break}Nr(t,rn,gi);break;case 4:if(Zi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-jn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=St()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*pw(i/1960))-i,10<i){t.timeoutHandle=nf(Nr.bind(null,t,rn,gi),i);break}Nr(t,rn,gi);break;case 5:Nr(t,rn,gi);break;default:throw Error(te(329))}}}return cn(t,St()),t.callbackNode===n?Dy.bind(null,t):null}function Ef(t,e){var n=Zo;return t.current.memoizedState.isDehydrated&&(Kr(t,e).flags|=256),t=Sc(t,e),t!==2&&(e=rn,rn=n,e!==null&&wf(e)),t}function wf(t){rn===null?rn=t:rn.push.apply(rn,t)}function mw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!$n(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zi(t,e){for(e&=~rp,e&=~jc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jn(e),i=1<<n;t[n]=-1,e&=~i}}function mg(t){if(Ye&6)throw Error(te(327));qs();var e=ic(t,0);if(!(e&1))return cn(t,St()),null;var n=Sc(t,e);if(t.tag!==0&&n===2){var i=Yd(t);i!==0&&(e=i,n=Ef(t,i))}if(n===1)throw n=ya,Kr(t,0),Zi(t,e),cn(t,St()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Nr(t,rn,gi),cn(t,St()),null}function op(t,e){var n=Ye;Ye|=1;try{return t(e)}finally{Ye=n,Ye===0&&(oo=St()+500,Vc&&Sr())}}function ns(t){er!==null&&er.tag===0&&!(Ye&6)&&qs();var e=Ye;Ye|=1;var n=Dn.transition,i=it;try{if(Dn.transition=null,it=1,t)return t()}finally{it=i,Dn.transition=n,Ye=e,!(Ye&6)&&Sr()}}function ap(){mn=Bs.current,ct(Bs)}function Kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,jE(n)),Tt!==null)for(n=Tt.return;n!==null;){var i=n;switch(Vh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&lc();break;case 3:ro(),ct(an),ct(Kt),qh();break;case 5:Kh(i);break;case 4:ro();break;case 13:ct(ht);break;case 19:ct(ht);break;case 10:jh(i.type._context);break;case 22:case 23:ap()}n=n.return}if(Nt=t,Tt=t=lr(t.current,null),Bt=mn=e,bt=0,ya=null,rp=jc=ts=0,rn=Zo=null,Gr!==null){for(e=0;e<Gr.length;e++)if(n=Gr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Gr=null}return t}function Iy(t,e){do{var n=Tt;try{if(Wh(),kl.current=vc,gc){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}gc=!1}if(es=0,Dt=At=mt=null,Ko=!1,ga=0,ip.current=null,n===null||n.return===null){bt=1,ya=e,Tt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=ng(o);if(p!==null){p.flags&=-257,ig(p,o,a,s,e),p.mode&1&&tg(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){tg(s,c,e),lp();break e}l=Error(te(426))}}else if(ut&&a.mode&1){var m=ng(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),ig(m,o,a,s,e),Hh(so(l,a));break e}}s=l=so(l,a),bt!==4&&(bt=2),Zo===null?Zo=[s]:Zo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=gy(s,l,e);Ym(s,h);break e;case 1:a=l;var _=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(or===null||!or.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=vy(s,a,e);Ym(s,S);break e}}s=s.return}while(s!==null)}Fy(n)}catch(R){e=R,Tt===n&&n!==null&&(Tt=n=n.return);continue}break}while(!0)}function Ny(){var t=_c.current;return _c.current=vc,t===null?vc:t}function lp(){(bt===0||bt===3||bt===2)&&(bt=4),Nt===null||!(ts&268435455)&&!(jc&268435455)||Zi(Nt,Bt)}function Sc(t,e){var n=Ye;Ye|=2;var i=Ny();(Nt!==t||Bt!==e)&&(gi=null,Kr(t,e));do try{gw();break}catch(r){Iy(t,r)}while(!0);if(Wh(),Ye=n,_c.current=i,Tt!==null)throw Error(te(261));return Nt=null,Bt=0,bt}function gw(){for(;Tt!==null;)Uy(Tt)}function vw(){for(;Tt!==null&&!HM();)Uy(Tt)}function Uy(t){var e=ky(t.alternate,t,mn);t.memoizedProps=t.pendingProps,e===null?Fy(t):Tt=e,ip.current=null}function Fy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=uw(n,e),n!==null){n.flags&=32767,Tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{bt=6,Tt=null;return}}else if(n=cw(n,e,mn),n!==null){Tt=n;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);bt===0&&(bt=5)}function Nr(t,e,n){var i=it,r=Dn.transition;try{Dn.transition=null,it=1,_w(t,e,n,i)}finally{Dn.transition=r,it=i}return null}function _w(t,e,n,i){do qs();while(er!==null);if(Ye&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(QM(t,s),t===Nt&&(Tt=Nt=null,Bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||il||(il=!0,By(nc,function(){return qs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var o=it;it=1;var a=Ye;Ye|=4,ip.current=null,fw(t,n),Py(n,t),kE(ef),rc=!!Jd,ef=Jd=null,t.current=n,hw(n),GM(),Ye=a,it=o,Dn.transition=s}else t.current=n;if(il&&(il=!1,er=t,xc=r),s=t.pendingLanes,s===0&&(or=null),XM(n.stateNode),cn(t,St()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(yc)throw yc=!1,t=Sf,Sf=null,t;return xc&1&&t.tag!==0&&qs(),s=t.pendingLanes,s&1?t===Mf?Qo++:(Qo=0,Mf=t):Qo=0,Sr(),null}function qs(){if(er!==null){var t=m_(xc),e=Dn.transition,n=it;try{if(Dn.transition=null,it=16>t?16:t,er===null)var i=!1;else{if(t=er,er=null,xc=0,Ye&6)throw Error(te(331));var r=Ye;for(Ye|=4,pe=t.current;pe!==null;){var s=pe,o=s.child;if(pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(pe=c;pe!==null;){var u=pe;switch(u.tag){case 0:case 11:case 15:qo(8,u,s)}var d=u.child;if(d!==null)d.return=u,pe=d;else for(;pe!==null;){u=pe;var f=u.sibling,p=u.return;if(by(u),u===c){pe=null;break}if(f!==null){f.return=p,pe=f;break}pe=p}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qo(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,pe=h;break e}pe=s.return}}var _=t.current;for(pe=_;pe!==null;){o=pe;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,pe=g;else e:for(o=_;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Wc(9,a)}}catch(R){yt(a,a.return,R)}if(a===o){pe=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,pe=S;break e}pe=a.return}}if(Ye=r,Sr(),ii&&typeof ii.onPostCommitFiberRoot=="function")try{ii.onPostCommitFiberRoot(Fc,t)}catch{}i=!0}return i}finally{it=n,Dn.transition=e}}return!1}function gg(t,e,n){e=so(n,e),e=gy(t,e,1),t=sr(t,e,1),e=Qt(),t!==null&&(ba(t,1,e),cn(t,e))}function yt(t,e,n){if(t.tag===3)gg(t,t,n);else for(;e!==null;){if(e.tag===3){gg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(or===null||!or.has(i))){t=so(n,t),t=vy(e,t,1),e=sr(e,t,1),t=Qt(),e!==null&&(ba(e,1,t),cn(e,t));break}}e=e.return}}function yw(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Qt(),t.pingedLanes|=t.suspendedLanes&n,Nt===t&&(Bt&n)===n&&(bt===4||bt===3&&(Bt&130023424)===Bt&&500>St()-sp?Kr(t,0):rp|=n),cn(t,e)}function Oy(t,e){e===0&&(t.mode&1?(e=$a,$a<<=1,!($a&130023424)&&($a=4194304)):e=1);var n=Qt();t=Pi(t,e),t!==null&&(ba(t,e,n),cn(t,n))}function xw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Oy(t,n)}function Sw(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),Oy(t,n)}var ky;ky=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||an.current)on=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return on=!1,lw(t,e,n);on=!!(t.flags&131072)}else on=!1,ut&&e.flags&1048576&&V_(e,dc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;zl(t,e),t=e.pendingProps;var r=to(e,Kt.current);Ks(e,n),r=Qh(null,e,i,t,r,n);var s=Jh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ln(i)?(s=!0,cc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,$h(e),r.updater=Hc,e.stateNode=r,r._reactInternals=e,uf(e,i,t,n),e=hf(null,e,i,!0,s,n)):(e.tag=0,ut&&s&&zh(e),Zt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(zl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ew(i),t=zn(i,t),r){case 0:e=ff(null,e,i,t,n);break e;case 1:e=og(null,e,i,t,n);break e;case 11:e=rg(null,e,i,t,n);break e;case 14:e=sg(null,e,i,zn(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),ff(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),og(t,e,i,r,n);case 3:e:{if(Sy(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,j_(t,e),pc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=so(Error(te(423)),e),e=ag(t,e,i,n,r);break e}else if(i!==r){r=so(Error(te(424)),e),e=ag(t,e,i,n,r);break e}else for(gn=rr(e.stateNode.containerInfo.firstChild),vn=e,ut=!0,Hn=null,n=K_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(no(),i===r){e=Li(t,e,n);break e}Zt(t,e,i,n)}e=e.child}return e;case 5:return q_(e),t===null&&af(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,tf(i,r)?o=null:s!==null&&tf(i,s)&&(e.flags|=32),xy(t,e),Zt(t,e,o,n),e.child;case 6:return t===null&&af(e),null;case 13:return My(t,e,n);case 4:return Yh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=io(e,null,i,n):Zt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),rg(t,e,i,r,n);case 7:return Zt(t,e,e.pendingProps,n),e.child;case 8:return Zt(t,e,e.pendingProps.children,n),e.child;case 12:return Zt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,st(fc,i._currentValue),i._currentValue=o,s!==null)if($n(s.value,o)){if(s.children===r.children&&!an.current){e=Li(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=wi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),lf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),lf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Zt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ks(e,n),r=In(r),i=i(r),e.flags|=1,Zt(t,e,i,n),e.child;case 14:return i=e.type,r=zn(i,e.pendingProps),r=zn(i.type,r),sg(t,e,i,r,n);case 15:return _y(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),zl(t,e),e.tag=1,ln(i)?(t=!0,cc(e)):t=!1,Ks(e,n),$_(e,i,r),uf(e,i,r,n),hf(null,e,i,!0,t,n);case 19:return Ey(t,e,n);case 22:return yy(t,e,n)}throw Error(te(156,e.tag))};function By(t,e){return d_(t,e)}function Mw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(t,e,n,i){return new Mw(t,e,n,i)}function cp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ew(t){if(typeof t=="function")return cp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ch)return 11;if(t===Rh)return 14}return 2}function lr(t,e){var n=t.alternate;return n===null?(n=Pn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Gl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")cp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Rs:return qr(n.children,r,s,e);case bh:o=8,r|=8;break;case Id:return t=Pn(12,n,e,r|2),t.elementType=Id,t.lanes=s,t;case Nd:return t=Pn(13,n,e,r),t.elementType=Nd,t.lanes=s,t;case Ud:return t=Pn(19,n,e,r),t.elementType=Ud,t.lanes=s,t;case Y0:return Xc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case X0:o=10;break e;case $0:o=9;break e;case Ch:o=11;break e;case Rh:o=14;break e;case $i:o=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=Pn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function qr(t,e,n,i){return t=Pn(7,t,i,e),t.lanes=n,t}function Xc(t,e,n,i){return t=Pn(22,t,i,e),t.elementType=Y0,t.lanes=n,t.stateNode={isHidden:!1},t}function Ou(t,e,n){return t=Pn(6,t,null,e),t.lanes=n,t}function ku(t,e,n){return e=Pn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ww(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_u(0),this.expirationTimes=_u(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_u(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function up(t,e,n,i,r,s,o,a,l){return t=new ww(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Pn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$h(s),t}function Tw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function zy(t){if(!t)return pr;t=t._reactInternals;e:{if(as(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ln(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(ln(n))return B_(t,n,e)}return e}function Vy(t,e,n,i,r,s,o,a,l){return t=up(n,i,!0,t,r,s,o,a,l),t.context=zy(null),n=t.current,i=Qt(),r=ar(n),s=wi(i,r),s.callback=e??null,sr(n,s,r),t.current.lanes=r,ba(t,r,i),cn(t,i),t}function $c(t,e,n,i){var r=e.current,s=Qt(),o=ar(r);return n=zy(n),e.context===null?e.context=n:e.pendingContext=n,e=wi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=sr(r,e,o),t!==null&&(Xn(t,r,o,s),Ol(t,r,o)),o}function Mc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function vg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function dp(t,e){vg(t,e),(t=t.alternate)&&vg(t,e)}function Aw(){return null}var Hy=typeof reportError=="function"?reportError:function(t){console.error(t)};function fp(t){this._internalRoot=t}Yc.prototype.render=fp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));$c(t,e,null,null)};Yc.prototype.unmount=fp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ns(function(){$c(null,t,null,null)}),e[Ri]=null}};function Yc(t){this._internalRoot=t}Yc.prototype.unstable_scheduleHydration=function(t){if(t){var e=__();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qi.length&&e!==0&&e<qi[n].priority;n++);qi.splice(n,0,t),n===0&&x_(t)}};function hp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Kc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function _g(){}function bw(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Mc(o);s.call(c)}}var o=Vy(e,i,t,0,null,!1,!1,"",_g);return t._reactRootContainer=o,t[Ri]=o.current,da(t.nodeType===8?t.parentNode:t),ns(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Mc(l);a.call(c)}}var l=up(t,0,!1,null,null,!1,!1,"",_g);return t._reactRootContainer=l,t[Ri]=l.current,da(t.nodeType===8?t.parentNode:t),ns(function(){$c(e,l,n,i)}),l}function qc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Mc(o);a.call(l)}}$c(e,o,t,r)}else o=bw(n,e,t,r,i);return Mc(o)}g_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=zo(e.pendingLanes);n!==0&&(Dh(e,n|1),cn(e,St()),!(Ye&6)&&(oo=St()+500,Sr()))}break;case 13:ns(function(){var i=Pi(t,1);if(i!==null){var r=Qt();Xn(i,t,1,r)}}),dp(t,1)}};Ih=function(t){if(t.tag===13){var e=Pi(t,134217728);if(e!==null){var n=Qt();Xn(e,t,134217728,n)}dp(t,134217728)}};v_=function(t){if(t.tag===13){var e=ar(t),n=Pi(t,e);if(n!==null){var i=Qt();Xn(n,t,e,i)}dp(t,e)}};__=function(){return it};y_=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};jd=function(t,e,n){switch(e){case"input":if(kd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=zc(i);if(!r)throw Error(te(90));q0(i),kd(i,r)}}}break;case"textarea":Q0(t,n);break;case"select":e=n.value,e!=null&&js(t,!!n.multiple,e,!1)}};s_=op;o_=ns;var Cw={usingClientEntryPoint:!1,Events:[Ra,Is,zc,i_,r_,op]},Ro={findFiberByHostInstance:Hr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Rw={bundleType:Ro.bundleType,version:Ro.version,rendererPackageName:Ro.rendererPackageName,rendererConfig:Ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ui.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=c_(t),t===null?null:t.stateNode},findFiberByHostInstance:Ro.findFiberByHostInstance||Aw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rl.isDisabled&&rl.supportsFiber)try{Fc=rl.inject(Rw),ii=rl}catch{}}Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cw;Sn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hp(e))throw Error(te(200));return Tw(t,e,null,n)};Sn.createRoot=function(t,e){if(!hp(t))throw Error(te(299));var n=!1,i="",r=Hy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=up(t,1,!1,null,null,n,!1,i,r),t[Ri]=e.current,da(t.nodeType===8?t.parentNode:t),new fp(e)};Sn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=c_(e),t=t===null?null:t.stateNode,t};Sn.flushSync=function(t){return ns(t)};Sn.hydrate=function(t,e,n){if(!Kc(e))throw Error(te(200));return qc(null,t,e,!0,n)};Sn.hydrateRoot=function(t,e,n){if(!hp(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Hy;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Vy(e,null,t,1,n??null,r,!1,s,o),t[Ri]=e.current,da(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Yc(e)};Sn.render=function(t,e,n){if(!Kc(e))throw Error(te(200));return qc(null,t,e,!1,n)};Sn.unmountComponentAtNode=function(t){if(!Kc(t))throw Error(te(40));return t._reactRootContainer?(ns(function(){qc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ri]=null})}),!0):!1};Sn.unstable_batchedUpdates=op;Sn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Kc(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return qc(t,e,n,!1,i)};Sn.version="18.2.0-next-9e3b772b8-20220608";function Gy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gy)}catch(t){console.error(t)}}Gy(),V0.exports=Sn;var Pw=V0.exports,yg=Pw;Ld.createRoot=yg.createRoot,Ld.hydrateRoot=yg.hydrateRoot;function xg({bg:t}){const e="text-gray-200   h-10 text-[12px]  border-t  border-gray-200  dark:text-gray-900 dark:border-gray-900  hover:bg-gray-300 hover:text-gray-900  dark:hover:bg-gray-800 dark:hover:text-gray-100 md:text-xl font-semibold   p-2 font-mono  md:p-4";return H.jsx("div",{className:"h-auto w-auto",id:"Sidebar",children:H.jsxs("div",{className:`z-2 h-[100vh] top-16  md:top-0 transition-transform duration-200   absolute md:w-[25vw] md:left-[-25vw] left-[-60vw] ${t} bg-black dark:bg-gray-200 w-[60vw] flex flex-col`,children:[H.jsx("div",{className:"text-gray-200 dark:text-gray-900  dark:border-gray-900 font-bold md:text-2xl font-mono text-center p-[10px]",children:"Links"}),H.jsxs("div",{className:" flex flex-col",children:[H.jsx("a",{href:"https://github.com/kiranjeet28",className:e,children:H.jsx("div",{className:" ",children:"Github"})}),H.jsx("a",{href:"https://www.linkedin.com/in/kiranjeet-kour-3823ba268/",className:"",children:H.jsx("div",{className:e,children:"Linkedin"})}),H.jsx("a",{href:"https://www.instagram.com/kiranjeetkour2024/",className:"",children:H.jsx("div",{className:e,children:"Instagram"})}),H.jsx("a",{href:"https://twitter.com/KourSuri5352",className:"",children:H.jsx("div",{className:e,children:"Twitter"})}),H.jsx("a",{href:"https://docs.google.com/presentation/d/1R66dmZUGwb0orpvGeHdi1L4iFpSUg3Jf/edit?usp=drive_link&ouid=100002198285189806065&rtpof=true&sd=true",className:"",children:H.jsx("div",{className:e,children:"CV"})}),H.jsx("a",{href:"https://docs.google.com/document/d/1AgvsMbddDJHrgTalh6p98nCZbm6EODgbJ3gmay8pUFg/view",children:H.jsx("div",{className:`border-b ${e}`,children:"Resume"})})]})]})})}function Sg({bg:t,onclick:e}){return H.jsx("div",{className:`h-auto w-5 ${t} relative md:left-[-21vw] invisible shadow-lg font-bold text-white md:text-xl top-[-1vh] dark:text-black`,onClick:e,children:"X"})}function Lw({obj:t}){const[e,n]=se.useState(!1),[i,r]=se.useState(!1),s=a=>{n(!e)},o=se.useCallback(()=>{window.navigator.clipboard.writeText("7889775606"),r(!0)});return H.jsxs("div",{className:"bg-black dark:bg-gray-200 h-20 m-0 sticky p-4  top-[-1px] z-10 flex items-center justify-between ",children:[H.jsx("button",{className:"dark:text-gray-950 m-0 relative top-[-3px]  text-white text-[6.5vh]",onClick:s,children:"≡"}),e?H.jsxs("div",{children:[H.jsx(xg,{bg:"translate-x-[60vw] md:translate-x-[25vw]"}),H.jsx(Sg,{bg:"md:visible ",onclick:s})]}):H.jsxs("div",{children:[H.jsx(xg,{bg:""}),H.jsx(Sg,{bg:"md:invisible"})]}),H.jsx("button",{className:"bg-green-500 text-center  hover:bg-green-400 rounded-sm h-10 hover:text-gray-700 text-white w-32 md: right-24 md: absolute",onClick:o,children:i?H.jsx("span",{class:"md:text-[13px] text-[10px] ",children:"Contact No is Copied"}):H.jsx("span",{children:"Contact Us "})}),H.jsx("div",{children:t})]})}const pp=se.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),Zc=se.createContext({}),Qc=se.createContext(null),mp=typeof document<"u",gp=mp?se.useLayoutEffect:se.useEffect,Wy=se.createContext({strict:!1}),vp=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Dw="framerAppearId",jy="data-"+vp(Dw),Iw={skipAnimations:!1,useManualTiming:!1};class Mg{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const n=this.order.indexOf(e);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function Nw(t){let e=new Mg,n=new Mg,i=0,r=!1,s=!1;const o=new WeakSet,a={schedule:(l,c=!1,u=!1)=>{const d=u&&r,f=d?e:n;return c&&o.add(l),f.add(l)&&d&&r&&(i=e.order.length),l},cancel:l=>{n.remove(l),o.delete(l)},process:l=>{if(r){s=!0;return}if(r=!0,[e,n]=[n,e],n.clear(),i=e.order.length,i)for(let c=0;c<i;c++){const u=e.order[c];o.has(u)&&(a.schedule(u),t()),u(l)}r=!1,s&&(s=!1,a.process(l))}};return a}const sl=["read","resolveKeyframes","update","preRender","render","postRender"],Uw=40;function Xy(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=sl.reduce((d,f)=>(d[f]=Nw(()=>n=!0),d),{}),o=d=>{s[d].process(r)},a=()=>{const d=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(d-r.timestamp,Uw),1),r.timestamp=d,r.isProcessing=!0,sl.forEach(o),r.isProcessing=!1,n&&e&&(i=!1,t(a))},l=()=>{n=!0,i=!0,r.isProcessing||t(a)};return{schedule:sl.reduce((d,f)=>{const p=s[f];return d[f]=(v,y=!1,m=!1)=>(n||l(),p.schedule(v,y,m)),d},{}),cancel:d=>sl.forEach(f=>s[f].cancel(d)),state:r,steps:s}}const{schedule:_p,cancel:dI}=Xy(queueMicrotask,!1);function zs(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}const $y=se.createContext({});let Eg=!1;function Fw(t,e,n,i,r){const{visualElement:s}=se.useContext(Zc),o=se.useContext(Wy),a=se.useContext(Qc),l=se.useContext(pp).reducedMotion,c=se.useRef();i=i||o.renderer,!c.current&&i&&(c.current=i(t,{visualState:e,parent:s,props:n,presenceContext:a,blockInitialAnimation:a?a.initial===!1:!1,reducedMotionConfig:l}));const u=c.current,d=se.useContext($y);u&&!u.projection&&r&&(u.type==="html"||u.type==="svg")&&kw(c.current,n,r,d),se.useInsertionEffect(()=>{u&&u.update(n,a)});const f=se.useRef(!!(n[jy]&&!window.HandoffComplete));return gp(()=>{u&&(u.updateFeatures(),_p.render(u.render),f.current&&u.animationState&&u.animationState.animateChanges())}),se.useEffect(()=>{u&&(!f.current&&u.animationState&&u.animationState.animateChanges(),f.current&&(f.current=!1,Eg||(Eg=!0,queueMicrotask(Ow))))}),u}function Ow(){window.HandoffComplete=!0}function kw(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:Yy(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&zs(a),visualElement:t,scheduleRender:()=>t.scheduleRender(),animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:c})}function Yy(t){if(t)return t.options.allowProjection!==!1?t.projection:Yy(t.parent)}function Bw(t,e,n){return se.useCallback(i=>{i&&t.mount&&t.mount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):zs(n)&&(n.current=i))},[e])}function xa(t){return typeof t=="string"||Array.isArray(t)}function Jc(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const yp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],xp=["initial",...yp];function eu(t){return Jc(t.animate)||xp.some(e=>xa(t[e]))}function Ky(t){return!!(eu(t)||t.variants)}function zw(t,e){if(eu(t)){const{initial:n,animate:i}=t;return{initial:n===!1||xa(n)?n:void 0,animate:xa(i)?i:void 0}}return t.inherit!==!1?e:{}}function Vw(t){const{initial:e,animate:n}=zw(t,se.useContext(Zc));return se.useMemo(()=>({initial:e,animate:n}),[wg(e),wg(n)])}function wg(t){return Array.isArray(t)?t.join(" "):t}const Tg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ao={};for(const t in Tg)ao[t]={isEnabled:e=>Tg[t].some(n=>!!e[n])};function Hw(t){for(const e in t)ao[e]={...ao[e],...t[e]}}const Sp=se.createContext({}),Gw=Symbol.for("motionComponentSymbol"),Yt=t=>t;let qy=Yt;function Ww({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){t&&Hw(t);function s(a,l){let c;const u={...se.useContext(pp),...a,layoutId:jw(a)},{isStatic:d}=u,f=Vw(a),p=i(a,d);if(!d&&mp){Xw();const v=$w(u);c=v.MeasureLayout,f.visualElement=Fw(r,p,u,e,v.ProjectionNode)}return H.jsxs(Zc.Provider,{value:f,children:[c&&f.visualElement?H.jsx(c,{visualElement:f.visualElement,...u}):null,n(r,a,Bw(p,f.visualElement,l),p,d,f.visualElement)]})}const o=se.forwardRef(s);return o[Gw]=r,o}function jw({layoutId:t}){const e=se.useContext(Sp).id;return e&&t!==void 0?e+"-"+t:t}function Xw(t,e){se.useContext(Wy).strict}function $w(t){const{drag:e,layout:n}=ao;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function Yw(t){function e(i,r={}){return Ww(t(i,r))}if(typeof Proxy>"u")return e;const n=new Map;return new Proxy(e,{get:(i,r)=>(n.has(r)||n.set(r,e(r)),n.get(r))})}const Kw=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Mp(t){return typeof t!="string"||t.includes("-")?!1:!!(Kw.indexOf(t)>-1||/[A-Z]/u.test(t))}const Ec={};function qw(t){Object.assign(Ec,t)}const La=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ls=new Set(La);function Zy(t,{layout:e,layoutId:n}){return ls.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Ec[t]||t==="opacity")}const $t=t=>!!(t&&t.getVelocity),Zw={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Qw=La.length;function Jw(t,{enableHardwareAcceleration:e=!0,allowTransformNone:n=!0},i,r){let s="";for(let o=0;o<Qw;o++){const a=La[o];if(t[a]!==void 0){const l=Zw[a]||a;s+=`${l}(${t[a]}) `}}return e&&!t.z&&(s+="translateZ(0)"),s=s.trim(),r?s=r(t,i?"":s):n&&i&&(s="none"),s}const Qy=t=>e=>typeof e=="string"&&e.startsWith(t),Jy=Qy("--"),e1=Qy("var(--"),Ep=t=>e1(t)?t1.test(t.split("/*")[0].trim()):!1,t1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,n1=(t,e)=>e&&typeof t=="number"?e.transform(t):t,mr=(t,e,n)=>n>e?e:n<t?t:n,_o={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Jo={..._o,transform:t=>mr(0,1,t)},ol={..._o,default:1},ea=t=>Math.round(t*1e5)/1e5,wp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu,i1=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,r1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;function Da(t){return typeof t=="string"}const Ia=t=>({test:e=>Da(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Xi=Ia("deg"),si=Ia("%"),Ce=Ia("px"),s1=Ia("vh"),o1=Ia("vw"),Ag={...si,parse:t=>si.parse(t)/100,transform:t=>si.transform(t*100)},bg={..._o,transform:Math.round},ex={borderWidth:Ce,borderTopWidth:Ce,borderRightWidth:Ce,borderBottomWidth:Ce,borderLeftWidth:Ce,borderRadius:Ce,radius:Ce,borderTopLeftRadius:Ce,borderTopRightRadius:Ce,borderBottomRightRadius:Ce,borderBottomLeftRadius:Ce,width:Ce,maxWidth:Ce,height:Ce,maxHeight:Ce,size:Ce,top:Ce,right:Ce,bottom:Ce,left:Ce,padding:Ce,paddingTop:Ce,paddingRight:Ce,paddingBottom:Ce,paddingLeft:Ce,margin:Ce,marginTop:Ce,marginRight:Ce,marginBottom:Ce,marginLeft:Ce,rotate:Xi,rotateX:Xi,rotateY:Xi,rotateZ:Xi,scale:ol,scaleX:ol,scaleY:ol,scaleZ:ol,skew:Xi,skewX:Xi,skewY:Xi,distance:Ce,translateX:Ce,translateY:Ce,translateZ:Ce,x:Ce,y:Ce,z:Ce,perspective:Ce,transformPerspective:Ce,opacity:Jo,originX:Ag,originY:Ag,originZ:Ce,zIndex:bg,backgroundPositionX:Ce,backgroundPositionY:Ce,fillOpacity:Jo,strokeOpacity:Jo,numOctaves:bg};function Tp(t,e,n,i){const{style:r,vars:s,transform:o,transformOrigin:a}=t;let l=!1,c=!1,u=!0;for(const d in e){const f=e[d];if(Jy(d)){s[d]=f;continue}const p=ex[d],v=n1(f,p);if(ls.has(d)){if(l=!0,o[d]=v,!u)continue;f!==(p.default||0)&&(u=!1)}else d.startsWith("origin")?(c=!0,a[d]=v):r[d]=v}if(e.transform||(l||i?r.transform=Jw(t.transform,n,u,i):r.transform&&(r.transform="none")),c){const{originX:d="50%",originY:f="50%",originZ:p=0}=a;r.transformOrigin=`${d} ${f} ${p}`}}const Ap=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function tx(t,e,n){for(const i in e)!$t(e[i])&&!Zy(i,n)&&(t[i]=e[i])}function a1({transformTemplate:t},e,n){return se.useMemo(()=>{const i=Ap();return Tp(i,e,{enableHardwareAcceleration:!n},t),Object.assign({},i.vars,i.style)},[e])}function l1(t,e,n){const i=t.style||{},r={};return tx(r,i,t),Object.assign(r,a1(t,e,n)),r}function c1(t,e,n){const i={},r=l1(t,e,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=r,i}const u1=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function wc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||u1.has(t)}let nx=t=>!wc(t);function d1(t){t&&(nx=e=>e.startsWith("on")?!wc(e):t(e))}try{d1(require("@emotion/is-prop-valid").default)}catch{}function f1(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(nx(r)||n===!0&&wc(r)||!e&&!wc(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function Cg(t,e,n){return typeof t=="string"?t:Ce.transform(e+n*t)}function h1(t,e,n){const i=Cg(e,t.x,t.width),r=Cg(n,t.y,t.height);return`${i} ${r}`}const p1={offset:"stroke-dashoffset",array:"stroke-dasharray"},m1={offset:"strokeDashoffset",array:"strokeDasharray"};function g1(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?p1:m1;t[s.offset]=Ce.transform(-i);const o=Ce.transform(e),a=Ce.transform(n);t[s.array]=`${o} ${a}`}function bp(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},u,d,f){if(Tp(t,c,u,f),d){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:p,style:v,dimensions:y}=t;p.transform&&(y&&(v.transform=p.transform),delete p.transform),y&&(r!==void 0||s!==void 0||v.transform)&&(v.transformOrigin=h1(y,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(p.x=e),n!==void 0&&(p.y=n),i!==void 0&&(p.scale=i),o!==void 0&&g1(p,o,a,l,!1)}const ix=()=>({...Ap(),attrs:{}}),Cp=t=>typeof t=="string"&&t.toLowerCase()==="svg";function v1(t,e,n,i){const r=se.useMemo(()=>{const s=ix();return bp(s,e,{enableHardwareAcceleration:!1},Cp(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};tx(s,t.style,t),r.style={...s,...r.style}}return r}function _1(t=!1){return(n,i,r,{latestValues:s},o)=>{const l=(Mp(n)?v1:c1)(i,s,o,n),c=f1(i,typeof n=="string",t),u=n!==se.Fragment?{...c,...l,ref:r}:{},{children:d}=i,f=se.useMemo(()=>$t(d)?d.get():d,[d]);return se.createElement(n,{...u,children:f})}}function rx(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const sx=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function ox(t,e,n,i){rx(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(sx.has(r)?r:vp(r),e.attrs[r])}function Rp(t,e,n){var i;const{style:r}=t,s={};for(const o in r)($t(r[o])||e.style&&$t(e.style[o])||Zy(o,t)||((i=n==null?void 0:n.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(s[o]=r[o]);return s}function ax(t,e,n){const i=Rp(t,e,n);for(const r in t)if($t(t[r])||$t(e[r])){const s=La.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}function Rg(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function Pp(t,e,n,i){if(typeof e=="function"){const[r,s]=Rg(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=Rg(i);e=e(n!==void 0?n:t.custom,r,s)}return e}function lx(t){const e=se.useRef(null);return e.current===null&&(e.current=t()),e.current}const Tf=t=>Array.isArray(t),y1=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),x1=t=>Tf(t)?t[t.length-1]||0:t;function Wl(t){const e=$t(t)?t.get():t;return y1(e)?e.toValue():e}function S1({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},i,r,s){const o={latestValues:M1(i,r,s,t),renderState:e()};return n&&(o.mount=a=>n(i,a,o)),o}const cx=t=>(e,n)=>{const i=se.useContext(Zc),r=se.useContext(Qc),s=()=>S1(t,e,i,r);return n?s():lx(s)};function M1(t,e,n,i){const r={},s=i(t,{});for(const f in s)r[f]=Wl(s[f]);let{initial:o,animate:a}=t;const l=eu(t),c=Ky(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const d=u?a:o;return d&&typeof d!="boolean"&&!Jc(d)&&(Array.isArray(d)?d:[d]).forEach(p=>{const v=Pp(t,p);if(!v)return;const{transitionEnd:y,transition:m,...h}=v;for(const _ in h){let g=h[_];if(Array.isArray(g)){const S=u?g.length-1:0;g=g[S]}g!==null&&(r[_]=g)}for(const _ in y)r[_]=y[_]}),r}const{schedule:tt,cancel:Di,state:kt,steps:Bu}=Xy(typeof requestAnimationFrame<"u"?requestAnimationFrame:Yt,!0),E1={useVisualState:cx({scrapeMotionValuesFromProps:ax,createRenderState:ix,onMount:(t,e,{renderState:n,latestValues:i})=>{tt.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),tt.render(()=>{bp(n,i,{enableHardwareAcceleration:!1},Cp(e.tagName),t.transformTemplate),ox(e,n)})}})},w1={useVisualState:cx({scrapeMotionValuesFromProps:Rp,createRenderState:Ap})};function T1(t,{forwardMotionProps:e=!1},n,i){return{...Mp(t)?E1:w1,preloadedFeatures:n,useRender:_1(e),createVisualElement:i,Component:t}}function Si(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}const ux=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function tu(t,e="page"){return{point:{x:t[`${e}X`],y:t[`${e}Y`]}}}const A1=t=>e=>ux(e)&&t(e,tu(e));function Ti(t,e,n,i){return Si(t,e,A1(n),i)}const b1=(t,e)=>n=>e(t(n)),Ai=(...t)=>t.reduce(b1);function dx(t){let e=null;return()=>{const n=()=>{e=null};return e===null?(e=t,n):!1}}const Pg=dx("dragHorizontal"),Lg=dx("dragVertical");function fx(t){let e=!1;if(t==="y")e=Lg();else if(t==="x")e=Pg();else{const n=Pg(),i=Lg();n&&i?e=()=>{n(),i()}:(n&&n(),i&&i())}return e}function hx(){const t=fx(!0);return t?(t(),!1):!0}class Mr{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Dg(t,e){const n=e?"pointerenter":"pointerleave",i=e?"onHoverStart":"onHoverEnd",r=(s,o)=>{if(s.pointerType==="touch"||hx())return;const a=t.getProps();t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",e);const l=a[i];l&&tt.postRender(()=>l(s,o))};return Ti(t.current,n,r,{passive:!t.getProps()[i]})}class C1 extends Mr{mount(){this.unmount=Ai(Dg(this.node,!0),Dg(this.node,!1))}unmount(){}}class R1 extends Mr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ai(Si(this.node.current,"focus",()=>this.onFocus()),Si(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const px=(t,e)=>e?t===e?!0:px(t,e.parentElement):!1;function zu(t,e){if(!e)return;const n=new PointerEvent("pointer"+t);e(n,tu(n))}class P1 extends Mr{constructor(){super(...arguments),this.removeStartListeners=Yt,this.removeEndListeners=Yt,this.removeAccessibleListeners=Yt,this.startPointerPress=(e,n)=>{if(this.isPressing)return;this.removeEndListeners();const i=this.node.getProps(),s=Ti(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:u,globalTapTarget:d}=this.node.getProps(),f=!d&&!px(this.node.current,a.target)?u:c;f&&tt.update(()=>f(a,l))},{passive:!(i.onTap||i.onPointerUp)}),o=Ti(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(i.onTapCancel||i.onPointerCancel)});this.removeEndListeners=Ai(s,o),this.startPress(e,n)},this.startAccessiblePress=()=>{const e=s=>{if(s.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||zu("up",(l,c)=>{const{onTap:u}=this.node.getProps();u&&tt.postRender(()=>u(l,c))})};this.removeEndListeners(),this.removeEndListeners=Si(this.node.current,"keyup",o),zu("down",(a,l)=>{this.startPress(a,l)})},n=Si(this.node.current,"keydown",e),i=()=>{this.isPressing&&zu("cancel",(s,o)=>this.cancelPress(s,o))},r=Si(this.node.current,"blur",i);this.removeAccessibleListeners=Ai(n,r)}}startPress(e,n){this.isPressing=!0;const{onTapStart:i,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),i&&tt.postRender(()=>i(e,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!hx()}cancelPress(e,n){if(!this.checkPressEnd())return;const{onTapCancel:i}=this.node.getProps();i&&tt.postRender(()=>i(e,n))}mount(){const e=this.node.getProps(),n=Ti(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),i=Si(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Ai(n,i)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Af=new WeakMap,Vu=new WeakMap,L1=t=>{const e=Af.get(t.target);e&&e(t)},D1=t=>{t.forEach(L1)};function I1({root:t,...e}){const n=t||document;Vu.has(n)||Vu.set(n,{});const i=Vu.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(D1,{root:t,...e})),i[r]}function N1(t,e,n){const i=I1(e);return Af.set(t,n),i.observe(t),()=>{Af.delete(t),i.unobserve(t)}}const U1={some:0,all:1};class F1 extends Mr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:U1[r]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:d}=this.node.getProps(),f=c?u:d;f&&f(l)};return N1(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(O1(e,n))&&this.startObserver()}unmount(){}}function O1({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const k1={inView:{Feature:F1},tap:{Feature:P1},focus:{Feature:R1},hover:{Feature:C1}};function mx(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function nu(t,e,n){const i=t.getProps();return Pp(i,e,n!==void 0?n:i.custom,t)}const cr=t=>t*1e3,bi=t=>t/1e3,B1={type:"spring",stiffness:500,damping:25,restSpeed:10},z1=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),V1={type:"keyframes",duration:.8},H1={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},G1=(t,{keyframes:e})=>e.length>2?V1:ls.has(t)?t.startsWith("scale")?z1(e[1]):B1:H1;function W1({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}function Lp(t,e){return t[e]||t.default||t}const j1=t=>t!==null;function iu(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(j1),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return!s||i===void 0?r[s]:i}let jl;function X1(){jl=void 0}const ur={now:()=>(jl===void 0&&ur.set(kt.isProcessing||Iw.useManualTiming?kt.timestamp:performance.now()),jl),set:t=>{jl=t,queueMicrotask(X1)}},gx=t=>/^0[^.\s]+$/u.test(t);function $1(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||gx(t):!0}const vx=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),Y1=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function K1(t){const e=Y1.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function _x(t,e,n=1){const[i,r]=K1(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return vx(o)?parseFloat(o):o}return Ep(r)?_x(r,e,n+1):r}const q1=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Ig=t=>t===_o||t===Ce,Ng=(t,e)=>parseFloat(t.split(", ")[e]),Ug=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/u);if(r)return Ng(r[1],e);{const s=i.match(/^matrix\((.+)\)$/u);return s?Ng(s[1],t):0}},Z1=new Set(["x","y","z"]),Q1=La.filter(t=>!Z1.has(t));function J1(t){const e=[];return Q1.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const lo={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:Ug(4,13),y:Ug(5,14)};lo.translateX=lo.x;lo.translateY=lo.y;const yx=t=>e=>e.test(t),eT={test:t=>t==="auto",parse:t=>t},xx=[_o,Ce,si,Xi,o1,s1,eT],Fg=t=>xx.find(yx(t)),Zr=new Set;let bf=!1,Cf=!1;function Sx(){if(Cf){const t=Array.from(Zr).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=J1(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))===null||a===void 0||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Cf=!1,bf=!1,Zr.forEach(t=>t.complete()),Zr.clear()}function Mx(){Zr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Cf=!0)})}function tT(){Mx(),Sx()}class Dp{constructor(e,n,i,r,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Zr.add(this),bf||(bf=!0,tt.read(Mx),tt.resolveKeyframes(Sx))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const o=r==null?void 0:r.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(i&&n){const l=i.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),r&&o===void 0&&r.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Zr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Zr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Ip=(t,e)=>n=>!!(Da(n)&&r1.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),Ex=(t,e,n)=>i=>{if(!Da(i))return i;const[r,s,o,a]=i.match(wp);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},nT=t=>mr(0,255,t),Hu={..._o,transform:t=>Math.round(nT(t))},jr={test:Ip("rgb","red"),parse:Ex("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+Hu.transform(t)+", "+Hu.transform(e)+", "+Hu.transform(n)+", "+ea(Jo.transform(i))+")"};function iT(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Rf={test:Ip("#"),parse:iT,transform:jr.transform},Vs={test:Ip("hsl","hue"),parse:Ex("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+si.transform(ea(e))+", "+si.transform(ea(n))+", "+ea(Jo.transform(i))+")"},jt={test:t=>jr.test(t)||Rf.test(t)||Vs.test(t),parse:t=>jr.test(t)?jr.parse(t):Vs.test(t)?Vs.parse(t):Rf.parse(t),transform:t=>Da(t)?t:t.hasOwnProperty("red")?jr.transform(t):Vs.transform(t)};function rT(t){var e,n;return isNaN(t)&&Da(t)&&(((e=t.match(wp))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(i1))===null||n===void 0?void 0:n.length)||0)>0}const wx="number",Tx="color",sT="var",oT="var(",Og="${}",aT=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Sa(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(aT,l=>(jt.test(l)?(i.color.push(s),r.push(Tx),n.push(jt.parse(l))):l.startsWith(oT)?(i.var.push(s),r.push(sT),n.push(l)):(i.number.push(s),r.push(wx),n.push(parseFloat(l))),++s,Og)).split(Og);return{values:n,split:a,indexes:i,types:r}}function Ax(t){return Sa(t).values}function bx(t){const{split:e,types:n}=Sa(t),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=n[o];a===wx?s+=ea(r[o]):a===Tx?s+=jt.transform(r[o]):s+=r[o]}return s}}const lT=t=>typeof t=="number"?0:t;function cT(t){const e=Ax(t);return bx(t)(e.map(lT))}const gr={test:rT,parse:Ax,createTransformer:bx,getAnimatableNone:cT},uT=new Set(["brightness","contrast","saturate","opacity"]);function dT(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(wp)||[];if(!i)return t;const r=n.replace(i,"");let s=uT.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const fT=/\b([a-z-]*)\(.*?\)/gu,Pf={...gr,getAnimatableNone:t=>{const e=t.match(fT);return e?e.map(dT).join(" "):t}},hT={...ex,color:jt,backgroundColor:jt,outlineColor:jt,fill:jt,stroke:jt,borderColor:jt,borderTopColor:jt,borderRightColor:jt,borderBottomColor:jt,borderLeftColor:jt,filter:Pf,WebkitFilter:Pf},Np=t=>hT[t];function Cx(t,e){let n=Np(t);return n!==Pf&&(n=gr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const pT=new Set(["auto","none","0"]);function mT(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!pT.has(s)&&Sa(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=Cx(n,r)}class Rx extends Dp{constructor(e,n,i,r){super(e,n,i,r,r==null?void 0:r.owner,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),Ep(c))){const u=_x(c,n.current);u!==void 0&&(e[l]=u),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!q1.has(i)||e.length!==2)return;const[r,s]=e,o=Fg(r),a=Fg(s);if(o!==a)if(Ig(o)&&Ig(a))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)$1(e[r])&&i.push(r);i.length&&mT(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=lo[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var e;const{element:n,name:i,unresolvedKeyframes:r}=this;if(!n.current)return;const s=n.getValue(i);s&&s.jump(this.measuredOrigin,!1);const o=r.length-1,a=r[o];r[o]=lo[i](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}function Px(t){let e;return()=>(e===void 0&&(e=t()),e)}const kg=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(gr.test(t)||t==="0")&&!t.startsWith("url("));function gT(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function vT(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=kg(r,e),a=kg(s,e);return!o||!a?!1:gT(t)||n==="spring"&&i}class Lx{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.options={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&tT(),this._resolved}onKeyframesResolved(e,n){this.hasAttemptedResolve=!0;const{name:i,type:r,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!vT(e,i,r,s))if(o)this.options.duration=0;else{l==null||l(iu(e,this.options,n)),a==null||a(),this.resolveFinishedPromise();return}const u=this.initPlayback(e,n);u!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...u},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}function Dx(t,e){return e?t*(1e3/e):0}const _T=5;function Ix(t,e,n){const i=Math.max(e-_T,0);return Dx(n-t(i),e-i)}const Gu=.001,yT=.01,xT=10,ST=.05,MT=1;function ET({duration:t=800,bounce:e=.25,velocity:n=0,mass:i=1}){let r,s,o=1-e;o=mr(ST,MT,o),t=mr(yT,xT,bi(t)),o<1?(r=c=>{const u=c*o,d=u*t,f=u-n,p=Lf(c,o),v=Math.exp(-d);return Gu-f/p*v},s=c=>{const d=c*o*t,f=d*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,v=Math.exp(-d),y=Lf(Math.pow(c,2),o);return(-r(c)+Gu>0?-1:1)*((f-p)*v)/y}):(r=c=>{const u=Math.exp(-c*t),d=(c-n)*t+1;return-Gu+u*d},s=c=>{const u=Math.exp(-c*t),d=(n-c)*(t*t);return u*d});const a=5/t,l=TT(r,s,a);if(t=cr(t),isNaN(l))return{stiffness:100,damping:10,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const wT=12;function TT(t,e,n){let i=n;for(let r=1;r<wT;r++)i=i-t(i)/e(i);return i}function Lf(t,e){return t*Math.sqrt(1-e*e)}const AT=["duration","bounce"],bT=["stiffness","damping","mass"];function Bg(t,e){return e.some(n=>t[n]!==void 0)}function CT(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!Bg(t,bT)&&Bg(t,AT)){const n=ET(t);e={...e,...n,mass:1},e.isResolvedFromDuration=!0}return e}function Nx({keyframes:t,restDelta:e,restSpeed:n,...i}){const r=t[0],s=t[t.length-1],o={done:!1,value:r},{stiffness:a,damping:l,mass:c,duration:u,velocity:d,isResolvedFromDuration:f}=CT({...i,velocity:-bi(i.velocity||0)}),p=d||0,v=l/(2*Math.sqrt(a*c)),y=s-r,m=bi(Math.sqrt(a/c)),h=Math.abs(y)<5;n||(n=h?.01:2),e||(e=h?.005:.5);let _;if(v<1){const g=Lf(m,v);_=S=>{const R=Math.exp(-v*m*S);return s-R*((p+v*m*y)/g*Math.sin(g*S)+y*Math.cos(g*S))}}else if(v===1)_=g=>s-Math.exp(-m*g)*(y+(p+m*y)*g);else{const g=m*Math.sqrt(v*v-1);_=S=>{const R=Math.exp(-v*m*S),T=Math.min(g*S,300);return s-R*((p+v*m*y)*Math.sinh(T)+g*y*Math.cosh(T))/g}}return{calculatedDuration:f&&u||null,next:g=>{const S=_(g);if(f)o.done=g>=u;else{let R=p;g!==0&&(v<1?R=Ix(_,g,S):R=0);const T=Math.abs(R)<=n,A=Math.abs(s-S)<=e;o.done=T&&A}return o.value=o.done?s:S,o}}}function zg({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const d=t[0],f={done:!1,value:d},p=b=>a!==void 0&&b<a||l!==void 0&&b>l,v=b=>a===void 0?l:l===void 0||Math.abs(a-b)<Math.abs(l-b)?a:l;let y=n*e;const m=d+y,h=o===void 0?m:o(m);h!==m&&(y=h-d);const _=b=>-y*Math.exp(-b/i),g=b=>h+_(b),S=b=>{const E=_(b),x=g(b);f.done=Math.abs(E)<=c,f.value=f.done?h:x};let R,T;const A=b=>{p(f.value)&&(R=b,T=Nx({keyframes:[f.value,v(f.value)],velocity:Ix(g,b,f.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return A(0),{calculatedDuration:null,next:b=>{let E=!1;return!T&&R===void 0&&(E=!0,S(b),A(b)),R!==void 0&&b>=R?T.next(b-R):(!E&&S(b),f)}}}const Ux=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,RT=1e-7,PT=12;function LT(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=Ux(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>RT&&++a<PT);return o}function Na(t,e,n,i){if(t===e&&n===i)return Yt;const r=s=>LT(s,0,1,t,n);return s=>s===0||s===1?s:Ux(r(s),e,i)}const DT=Na(.42,0,1,1),IT=Na(0,0,.58,1),Fx=Na(.42,0,.58,1),NT=t=>Array.isArray(t)&&typeof t[0]!="number",Ox=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,kx=t=>e=>1-t(1-e),Up=t=>1-Math.sin(Math.acos(t)),Bx=kx(Up),UT=Ox(Up),zx=Na(.33,1.53,.69,.99),Fp=kx(zx),FT=Ox(Fp),OT=t=>(t*=2)<1?.5*Fp(t):.5*(2-Math.pow(2,-10*(t-1))),kT={linear:Yt,easeIn:DT,easeInOut:Fx,easeOut:IT,circIn:Up,circInOut:UT,circOut:Bx,backIn:Fp,backInOut:FT,backOut:zx,anticipate:OT},Vg=t=>{if(Array.isArray(t)){qy(t.length===4);const[e,n,i,r]=t;return Na(e,n,i,r)}else if(typeof t=="string")return kT[t];return t},Ma=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},pt=(t,e,n)=>t+(e-t)*n;function Wu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function BT({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=Wu(l,a,t+1/3),s=Wu(l,a,t),o=Wu(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function Tc(t,e){return n=>n>0?e:t}const ju=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},zT=[Rf,jr,Vs],VT=t=>zT.find(e=>e.test(t));function Hg(t){const e=VT(t);if(!e)return!1;let n=e.parse(t);return e===Vs&&(n=BT(n)),n}const Gg=(t,e)=>{const n=Hg(t),i=Hg(e);if(!n||!i)return Tc(t,e);const r={...n};return s=>(r.red=ju(n.red,i.red,s),r.green=ju(n.green,i.green,s),r.blue=ju(n.blue,i.blue,s),r.alpha=pt(n.alpha,i.alpha,s),jr.transform(r))},Df=new Set(["none","hidden"]);function HT(t,e){return Df.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function GT(t,e){return n=>pt(t,e,n)}function Op(t){return typeof t=="number"?GT:typeof t=="string"?Ep(t)?Tc:jt.test(t)?Gg:XT:Array.isArray(t)?Vx:typeof t=="object"?jt.test(t)?Gg:WT:Tc}function Vx(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>Op(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function WT(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=Op(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function jT(t,e){var n;const i=[],r={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const o=e.types[s],a=t.indexes[o][r[o]],l=(n=t.values[a])!==null&&n!==void 0?n:0;i[s]=l,r[o]++}return i}const XT=(t,e)=>{const n=gr.createTransformer(e),i=Sa(t),r=Sa(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?Df.has(t)&&!r.values.length||Df.has(e)&&!i.values.length?HT(t,e):Ai(Vx(jT(i,r),r.values),n):Tc(t,e)};function Hx(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?pt(t,e,n):Op(t)(t,e)}function $T(t,e,n){const i=[],r=n||Hx,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||Yt:e;a=Ai(l,a)}i.push(a)}return i}function YT(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(qy(s===e.length),s===1)return()=>e[0];if(s===2&&t[0]===t[1])return()=>e[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const o=$T(e,i,r),a=o.length,l=c=>{let u=0;if(a>1)for(;u<t.length-2&&!(c<t[u+1]);u++);const d=Ma(t[u],t[u+1],c);return o[u](d)};return n?c=>l(mr(t[0],t[s-1],c)):l}function KT(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=Ma(0,e,i);t.push(pt(n,1,r))}}function qT(t){const e=[0];return KT(e,t.length-1),e}function ZT(t,e){return t.map(n=>n*e)}function QT(t,e){return t.map(()=>e||Fx).splice(0,t.length-1)}function Ac({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=NT(i)?i.map(Vg):Vg(i),s={done:!1,value:e[0]},o=ZT(n&&n.length===e.length?n:qT(e),t),a=YT(o,e,{ease:Array.isArray(r)?r:QT(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const Wg=2e4;function JT(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<Wg;)e+=n,i=t.next(e);return e>=Wg?1/0:e}const eA=t=>{const e=({timestamp:n})=>t(n);return{start:()=>tt.update(e,!0),stop:()=>Di(e),now:()=>kt.isProcessing?kt.timestamp:ur.now()}},tA={decay:zg,inertia:zg,tween:Ac,keyframes:Ac,spring:Nx},nA=t=>t/100;class kp extends Lx{constructor({KeyframeResolver:e=Dp,...n}){super(n),this.holdTime=null,this.startTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:a}=this.options;a&&a()};const{name:i,motionValue:r,keyframes:s}=this.options,o=(a,l)=>this.onKeyframesResolved(a,l);i&&r&&r.owner?this.resolver=r.owner.resolveKeyframes(s,o,i,r):this.resolver=new e(s,o,i,r),this.resolver.scheduleResolve()}initPlayback(e){const{type:n="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=this.options,a=tA[n]||Ac;let l,c;a!==Ac&&typeof e[0]!="number"&&(l=Ai(nA,Hx(e[0],e[1])),e=[0,100]);const u=a({...this.options,keyframes:e});s==="mirror"&&(c=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=JT(u));const{calculatedDuration:d}=u,f=d+r,p=f*(i+1)-r;return{generator:u,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:d,resolvedDuration:f,totalDuration:p}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:i}=this;if(!i){const{keyframes:b}=this.options;return{done:!0,value:b[b.length-1]}}const{finalKeyframe:r,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:u,resolvedDuration:d}=i;if(this.startTime===null)return s.next(0);const{delay:f,repeat:p,repeatType:v,repeatDelay:y,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-u/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const h=this.currentTime-f*(this.speed>=0?1:-1),_=this.speed>=0?h<0:h>u;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let g=this.currentTime,S=s;if(p){const b=Math.min(this.currentTime,u)/d;let E=Math.floor(b),x=b%1;!x&&b>=1&&(x=1),x===1&&E--,E=Math.min(E,p+1),!!(E%2)&&(v==="reverse"?(x=1-x,y&&(x-=y/d)):v==="mirror"&&(S=o)),g=mr(0,1,x)*d}const R=_?{done:!1,value:l[0]}:S.next(g);a&&(R.value=a(R.value));let{done:T}=R;!_&&c!==null&&(T=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const A=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&T);return A&&r!==void 0&&(R.value=iu(l,this.options,r)),m&&m(R.value),A&&this.finish(),R}get duration(){const{resolved:e}=this;return e?bi(e.calculatedDuration):0}get time(){return bi(this.currentTime)}set time(e){e=cr(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=bi(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=eA,onPlay:n}=this.options;this.driver||(this.driver=e(r=>this.tick(r))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:(!this.startTime||this.state==="finished")&&(this.startTime=i),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const Gx=t=>Array.isArray(t)&&typeof t[0]=="number";function Wx(t){return!!(!t||typeof t=="string"&&t in Bp||Gx(t)||Array.isArray(t)&&t.every(Wx))}const Ho=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Bp={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ho([0,.65,.55,1]),circOut:Ho([.55,0,1,.45]),backIn:Ho([.31,.01,.66,-.59]),backOut:Ho([.33,1.53,.69,.99])};function iA(t){return jx(t)||Bp.easeOut}function jx(t){if(t)return Gx(t)?Ho(t):Array.isArray(t)?t.map(iA):Bp[t]}function rA(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a,times:l}={}){const c={[e]:n};l&&(c.offset=l);const u=jx(a);return Array.isArray(u)&&(c.easing=u),t.animate(c,{delay:i,duration:r,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const sA=Px(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),oA=new Set(["opacity","clipPath","filter","transform"]),bc=10,aA=2e4;function lA(t){return t.type==="spring"||t.name==="backgroundColor"||!Wx(t.ease)}function cA(t,e){const n=new kp({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:t[0]};const r=[];let s=0;for(;!i.done&&s<aA;)i=n.sample(s),r.push(i.value),s+=bc;return{times:void 0,keyframes:r,duration:s-bc,ease:"linear"}}class jg extends Lx{constructor(e){super(e);const{name:n,motionValue:i,keyframes:r}=this.options;this.resolver=new Rx(r,(s,o)=>this.onKeyframesResolved(s,o),n,i),this.resolver.scheduleResolve()}initPlayback(e,n){var i;let{duration:r=300,times:s,ease:o,type:a,motionValue:l,name:c}=this.options;if(!(!((i=l.owner)===null||i===void 0)&&i.current))return!1;if(lA(this.options)){const{onComplete:d,onUpdate:f,motionValue:p,...v}=this.options,y=cA(e,v);e=y.keyframes,e.length===1&&(e[1]=e[0]),r=y.duration,s=y.times,o=y.ease,a="keyframes"}const u=rA(l.owner.current,c,e,{...this.options,duration:r,times:s,ease:o});return u.startTime=ur.now(),this.pendingTimeline?(u.timeline=this.pendingTimeline,this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:d}=this.options;l.set(iu(e,this.options,n)),d&&d(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:r,times:s,type:a,ease:o,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return bi(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return bi(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=cr(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return Yt;const{animation:i}=n;i.timeline=e,i.onfinish=null}return Yt}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:i,duration:r,type:s,ease:o,times:a}=e;if(!(n.playState==="idle"||n.playState==="finished")){if(this.time){const{motionValue:l,onUpdate:c,onComplete:u,...d}=this.options,f=new kp({...d,keyframes:i,duration:r,type:s,ease:o,times:a,isGenerator:!0}),p=cr(this.time);l.setWithVelocity(f.sample(p-bc).value,f.sample(p).value,bc)}this.cancel()}}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:i,repeatDelay:r,repeatType:s,damping:o,type:a}=e;return sA()&&i&&oA.has(i)&&n&&n.owner&&n.owner.current instanceof HTMLElement&&!n.owner.getProps().onUpdate&&!r&&s!=="mirror"&&o!==0&&a!=="inertia"}}function uA(t,e){let n;const i=()=>{const{currentTime:r}=e,o=(r===null?0:r.value)/100;n!==o&&t(o),n=o};return tt.update(i,!0),()=>Di(i)}const dA=Px(()=>window.ScrollTimeline!==void 0);class fA{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}then(e,n){return Promise.all(this.animations).then(e).catch(n)}getAll(e){return this.animations[0][e]}setAll(e,n){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=n}attachTimeline(e){const n=this.animations.map(i=>{if(dA()&&i.attachTimeline)i.attachTimeline(e);else return i.pause(),uA(r=>{i.time=i.duration*r},e)});return()=>{n.forEach((i,r)=>{i&&i(),this.animations[r].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}const zp=(t,e,n,i={},r,s)=>o=>{const a=Lp(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-cr(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:f=>{e.set(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};W1(a)||(u={...u,...G1(t,u)}),u.duration&&(u.duration=cr(u.duration)),u.repeatDelay&&(u.repeatDelay=cr(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(d=!0)),d&&!s&&e.get()!==void 0){const f=iu(u.keyframes,a);if(f!==void 0)return tt.update(()=>{u.onUpdate(f),u.onComplete()}),new fA([])}return!s&&jg.supports(u)?new jg(u):new kp(u)};function Cc(t){return!!($t(t)&&t.add)}function Vp(t,e){t.indexOf(e)===-1&&t.push(e)}function Hp(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class Gp{constructor(){this.subscriptions=[]}add(e){return Vp(this.subscriptions,e),()=>Hp(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Xg=30,hA=t=>!isNaN(parseFloat(t));class pA{constructor(e,n={}){this.version="11.2.12",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,r=!0)=>{const s=ur.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=ur.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=hA(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Gp);const i=this.events[e].add(n);return e==="change"?()=>{i(),tt.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=ur.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Xg)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Xg);return Dx(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ea(t,e){return new pA(t,e)}function mA(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Ea(n))}function gA(t,e){const n=nu(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=x1(s[o]);mA(t,o,a)}}function Xx(t){return t.getProps()[jy]}function vA({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function $x(t,e,{delay:n=0,transitionOverride:i,type:r}={}){var s;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...l}=e;const c=t.getValue("willChange");i&&(o=i);const u=[],d=r&&t.animationState&&t.animationState.getState()[r];for(const f in l){const p=t.getValue(f,(s=t.latestValues[f])!==null&&s!==void 0?s:null),v=l[f];if(v===void 0||d&&vA(d,f))continue;const y={delay:n,elapsed:0,...Lp(o||{},f)};let m=!1;if(window.HandoffAppearAnimations){const _=Xx(t);if(_){const g=window.HandoffAppearAnimations(_,f,p,tt);g!==null&&(y.elapsed=g,m=!0)}}p.start(zp(f,p,v,t.shouldReduceMotion&&ls.has(f)?{type:!1}:y,t,m));const h=p.animation;h&&(Cc(c)&&(c.add(f),h.then(()=>c.remove(f))),u.push(h))}return a&&Promise.all(u).then(()=>{tt.update(()=>{a&&gA(t,a)})}),u}function If(t,e,n={}){var i;const r=nu(t,e,n.type==="exit"?(i=t.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const o=r?()=>Promise.all($x(t,r,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:f}=s;return _A(t,e,u+c,d,f,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[c,u]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>u())}else return Promise.all([o(),a(n.delay)])}function _A(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(t.variantChildren).sort(yA).forEach((c,u)=>{c.notify("AnimationStart",e),o.push(If(c,e,{...s,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function yA(t,e){return t.sortNodePosition(e)}function xA(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>If(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=If(t,e,n);else{const r=typeof e=="function"?nu(t,e,n.custom):e;i=Promise.all($x(t,r,n))}return i.then(()=>{tt.postRender(()=>{t.notify("AnimationComplete",e)})})}const SA=[...yp].reverse(),MA=yp.length;function EA(t){return e=>Promise.all(e.map(({animation:n,options:i})=>xA(t,n,i)))}function wA(t){let e=EA(t),n=$g(),i=!0;const r=l=>(c,u)=>{var d;const f=nu(t,u,l==="exit"?(d=t.presenceContext)===null||d===void 0?void 0:d.custom:void 0);if(f){const{transition:p,transitionEnd:v,...y}=f;c={...c,...y,...v}}return c};function s(l){e=l(t)}function o(l){const c=t.getProps(),u=t.getVariantContext(!0)||{},d=[],f=new Set;let p={},v=1/0;for(let m=0;m<MA;m++){const h=SA[m],_=n[h],g=c[h]!==void 0?c[h]:u[h],S=xa(g),R=h===l?_.isActive:null;R===!1&&(v=m);let T=g===u[h]&&g!==c[h]&&S;if(T&&i&&t.manuallyAnimateOnMount&&(T=!1),_.protectedKeys={...p},!_.isActive&&R===null||!g&&!_.prevProp||Jc(g)||typeof g=="boolean")continue;let b=TA(_.prevProp,g)||h===l&&_.isActive&&!T&&S||m>v&&S,E=!1;const x=Array.isArray(g)?g:[g];let C=x.reduce(r(h),{});R===!1&&(C={});const{prevResolvedValues:L={}}=_,N={...L,...C},O=B=>{b=!0,f.has(B)&&(E=!0,f.delete(B)),_.needsAnimating[B]=!0;const z=t.getValue(B);z&&(z.liveStyle=!1)};for(const B in N){const z=C[B],$=L[B];if(p.hasOwnProperty(B))continue;let I=!1;Tf(z)&&Tf($)?I=!mx(z,$):I=z!==$,I?z!=null?O(B):f.add(B):z!==void 0&&f.has(B)?O(B):_.protectedKeys[B]=!0}_.prevProp=g,_.prevResolvedValues=C,_.isActive&&(p={...p,...C}),i&&t.blockInitialAnimation&&(b=!1),b&&(!T||E)&&d.push(...x.map(B=>({animation:B,options:{type:h}})))}if(f.size){const m={};f.forEach(h=>{const _=t.getBaseTarget(h),g=t.getValue(h);g&&(g.liveStyle=!0),m[h]=_??null}),d.push({animation:m})}let y=!!d.length;return i&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(y=!1),i=!1,y?e(d):Promise.resolve()}function a(l,c){var u;if(n[l].isActive===c)return Promise.resolve();(u=t.variantChildren)===null||u===void 0||u.forEach(f=>{var p;return(p=f.animationState)===null||p===void 0?void 0:p.setActive(l,c)}),n[l].isActive=c;const d=o(l);for(const f in n)n[f].protectedKeys={};return d}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=$g(),i=!0}}}function TA(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!mx(e,t):!1}function Ar(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function $g(){return{animate:Ar(!0),whileInView:Ar(),whileHover:Ar(),whileTap:Ar(),whileDrag:Ar(),whileFocus:Ar(),exit:Ar()}}class AA extends Mr{constructor(e){super(e),e.animationState||(e.animationState=wA(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Jc(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let bA=0;class CA extends Mr{constructor(){super(...arguments),this.id=bA++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const RA={animation:{Feature:AA},exit:{Feature:CA}},Yg=(t,e)=>Math.abs(t-e);function PA(t,e){const n=Yg(t.x,e.x),i=Yg(t.y,e.y);return Math.sqrt(n**2+i**2)}class Yx{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=$u(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,p=PA(d.offset,{x:0,y:0})>=3;if(!f&&!p)return;const{point:v}=d,{timestamp:y}=kt;this.history.push({...v,timestamp:y});const{onStart:m,onMove:h}=this.handlers;f||(m&&m(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),h&&h(this.lastMoveEvent,d)},this.handlePointerMove=(d,f)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=Xu(f,this.transformPagePoint),tt.update(this.updatePoint,!0)},this.handlePointerUp=(d,f)=>{this.end();const{onEnd:p,onSessionEnd:v,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=$u(d.type==="pointercancel"?this.lastMoveEventInfo:Xu(f,this.transformPagePoint),this.history);this.startEvent&&p&&p(d,m),v&&v(d,m)},!ux(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=tu(e),a=Xu(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=kt;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(e,$u(a,this.history)),this.removeListeners=Ai(Ti(this.contextWindow,"pointermove",this.handlePointerMove),Ti(this.contextWindow,"pointerup",this.handlePointerUp),Ti(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Di(this.updatePoint)}}function Xu(t,e){return e?{point:e(t.point)}:t}function Kg(t,e){return{x:t.x-e.x,y:t.y-e.y}}function $u({point:t},e){return{point:t,delta:Kg(t,Kx(e)),offset:Kg(t,LA(e)),velocity:DA(e,.1)}}function LA(t){return t[0]}function Kx(t){return t[t.length-1]}function DA(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=Kx(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>cr(e)));)n--;if(!i)return{x:0,y:0};const s=bi(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function xn(t){return t.max-t.min}function Nf(t,e=0,n=.01){return Math.abs(t-e)<=n}function qg(t,e,n,i=.5){t.origin=i,t.originPoint=pt(e.min,e.max,t.origin),t.scale=xn(n)/xn(e),(Nf(t.scale,1,1e-4)||isNaN(t.scale))&&(t.scale=1),t.translate=pt(n.min,n.max,t.origin)-t.originPoint,(Nf(t.translate)||isNaN(t.translate))&&(t.translate=0)}function ta(t,e,n,i){qg(t.x,e.x,n.x,i?i.originX:void 0),qg(t.y,e.y,n.y,i?i.originY:void 0)}function Zg(t,e,n){t.min=n.min+e.min,t.max=t.min+xn(e)}function IA(t,e,n){Zg(t.x,e.x,n.x),Zg(t.y,e.y,n.y)}function Qg(t,e,n){t.min=e.min-n.min,t.max=t.min+xn(e)}function na(t,e,n){Qg(t.x,e.x,n.x),Qg(t.y,e.y,n.y)}function NA(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?pt(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?pt(n,t,i.max):Math.min(t,n)),t}function Jg(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function UA(t,{top:e,left:n,bottom:i,right:r}){return{x:Jg(t.x,n,r),y:Jg(t.y,e,i)}}function ev(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function FA(t,e){return{x:ev(t.x,e.x),y:ev(t.y,e.y)}}function OA(t,e){let n=.5;const i=xn(t),r=xn(e);return r>i?n=Ma(e.min,e.max-i,t.min):i>r&&(n=Ma(t.min,t.max-r,e.min)),mr(0,1,n)}function kA(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Uf=.35;function BA(t=Uf){return t===!1?t=0:t===!0&&(t=Uf),{x:tv(t,"left","right"),y:tv(t,"top","bottom")}}function tv(t,e,n){return{min:nv(t,e),max:nv(t,n)}}function nv(t,e){return typeof t=="number"?t:t[e]||0}const iv=()=>({translate:0,scale:1,origin:0,originPoint:0}),Hs=()=>({x:iv(),y:iv()}),rv=()=>({min:0,max:0}),xt=()=>({x:rv(),y:rv()});function An(t){return[t("x"),t("y")]}function qx({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function zA({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function VA(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Yu(t){return t===void 0||t===1}function Ff({scale:t,scaleX:e,scaleY:n}){return!Yu(t)||!Yu(e)||!Yu(n)}function Ur(t){return Ff(t)||Zx(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function Zx(t){return sv(t.x)||sv(t.y)}function sv(t){return t&&t!=="0%"}function Rc(t,e,n){const i=t-n,r=e*i;return n+r}function ov(t,e,n,i,r){return r!==void 0&&(t=Rc(t,r,i)),Rc(t,n,i)+e}function Of(t,e=0,n=1,i,r){t.min=ov(t.min,e,n,i,r),t.max=ov(t.max,e,n,i,r)}function Qx(t,{x:e,y:n}){Of(t.x,e.translate,e.scale,e.originPoint),Of(t.y,n.translate,n.scale,n.originPoint)}function HA(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const l=s.instance;l&&l.style&&l.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Gs(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,Qx(t,o)),i&&Ur(s.latestValues)&&Gs(t,s.latestValues))}e.x=av(e.x),e.y=av(e.y)}function av(t){return Number.isInteger(t)||t>1.0000000000001||t<.999999999999?t:1}function Ki(t,e){t.min=t.min+e,t.max=t.max+e}function lv(t,e,[n,i,r]){const s=e[r]!==void 0?e[r]:.5,o=pt(t.min,t.max,s);Of(t,e[n],e[i],o,e.scale)}const GA=["x","scaleX","originX"],WA=["y","scaleY","originY"];function Gs(t,e){lv(t.x,e,GA),lv(t.y,e,WA)}function Jx(t,e){return qx(VA(t.getBoundingClientRect(),e))}function jA(t,e,n){const i=Jx(t,n),{scroll:r}=e;return r&&(Ki(i.x,r.offset.x),Ki(i.y,r.offset.y)),i}const eS=({current:t})=>t?t.ownerDocument.defaultView:null,XA=new WeakMap;class $A{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=xt(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=u=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(tu(u,"page").point)},s=(u,d)=>{const{drag:f,dragPropagation:p,onDragStart:v}=this.getProps();if(f&&!p&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=fx(f),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),An(m=>{let h=this.getAxisMotionValue(m).get()||0;if(si.test(h)){const{projection:_}=this.visualElement;if(_&&_.layout){const g=_.layout.layoutBox[m];g&&(h=xn(g)*(parseFloat(h)/100))}}this.originPoint[m]=h}),v&&tt.postRender(()=>v(u,d));const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},o=(u,d)=>{const{dragPropagation:f,dragDirectionLock:p,onDirectionLock:v,onDrag:y}=this.getProps();if(!f&&!this.openGlobalLock)return;const{offset:m}=d;if(p&&this.currentDirection===null){this.currentDirection=YA(m),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",d.point,m),this.updateAxis("y",d.point,m),this.visualElement.render(),y&&y(u,d)},a=(u,d)=>this.stop(u,d),l=()=>An(u=>{var d;return this.getAnimationState(u)==="paused"&&((d=this.getAxisMotionValue(u).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new Yx(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:eS(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&tt.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!al(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=NA(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&zs(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=UA(r.layoutBox,n):this.constraints=!1,this.elastic=BA(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&An(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=kA(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!zs(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=jA(i,r.root,this.visualElement.getTransformPagePoint());let o=FA(r.layout.layoutBox,s);if(n){const a=n(zA(o));this.hasMutatedConstraints=!!a,a&&(o=qx(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=An(u=>{if(!al(u,n,this.currentDirection))return;let d=l&&l[u]||{};o&&(d={min:0,max:0});const f=r?200:1e6,p=r?40:1e7,v={type:"inertia",velocity:i?e[u]:0,bounceStiffness:f,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(u,v)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return i.start(zp(e,i,0,n,this.visualElement))}stopAnimation(){An(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){An(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){An(n=>{const{drag:i}=this.getProps();if(!al(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-pt(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!zs(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};An(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=OA({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),An(o=>{if(!al(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(pt(l,c,r[o]))})}addListeners(){if(!this.visualElement.current)return;XA.set(this.visualElement,this);const e=this.visualElement.current,n=Ti(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();zs(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),tt.read(i);const o=Si(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(An(u=>{const d=this.getAxisMotionValue(u);d&&(this.originPoint[u]+=l[u].translate,d.set(d.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=Uf,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function al(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function YA(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class KA extends Mr{constructor(e){super(e),this.removeGroupControls=Yt,this.removeListeners=Yt,this.controls=new $A(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Yt}unmount(){this.removeGroupControls(),this.removeListeners()}}const cv=t=>(e,n)=>{t&&tt.postRender(()=>t(e,n))};class qA extends Mr{constructor(){super(...arguments),this.removePointerDownListener=Yt}onPointerDown(e){this.session=new Yx(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:eS(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:cv(e),onStart:cv(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&tt.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=Ti(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function ZA(){const t=se.useContext(Qc);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:i}=t,r=se.useId();return se.useEffect(()=>i(r),[]),!e&&n?[!1,()=>n&&n(r)]:[!0]}const Xl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function uv(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Po={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Ce.test(t))t=parseFloat(t);else return t;const n=uv(t,e.target.x),i=uv(t,e.target.y);return`${n}% ${i}%`}},QA={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=gr.parse(t);if(r.length>5)return i;const s=gr.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=pt(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}};class JA extends se.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;qw(eb),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Xl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||tt.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),_p.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function tS(t){const[e,n]=ZA(),i=se.useContext(Sp);return H.jsx(JA,{...t,layoutGroup:i,switchLayoutGroup:se.useContext($y),isPresent:e,safeToRemove:n})}const eb={borderRadius:{...Po,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Po,borderTopRightRadius:Po,borderBottomLeftRadius:Po,borderBottomRightRadius:Po,boxShadow:QA},nS=["TopLeft","TopRight","BottomLeft","BottomRight"],tb=nS.length,dv=t=>typeof t=="string"?parseFloat(t):t,fv=t=>typeof t=="number"||Ce.test(t);function nb(t,e,n,i,r,s){r?(t.opacity=pt(0,n.opacity!==void 0?n.opacity:1,ib(i)),t.opacityExit=pt(e.opacity!==void 0?e.opacity:1,0,rb(i))):s&&(t.opacity=pt(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<tb;o++){const a=`border${nS[o]}Radius`;let l=hv(e,a),c=hv(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||fv(l)===fv(c)?(t[a]=Math.max(pt(dv(l),dv(c),i),0),(si.test(c)||si.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=pt(e.rotate||0,n.rotate||0,i))}function hv(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const ib=iS(0,.5,Bx),rb=iS(.5,.95,Yt);function iS(t,e,n){return i=>i<t?0:i>e?1:n(Ma(t,e,i))}function pv(t,e){t.min=e.min,t.max=e.max}function wn(t,e){pv(t.x,e.x),pv(t.y,e.y)}function mv(t,e,n,i,r){return t-=e,t=Rc(t,1/n,i),r!==void 0&&(t=Rc(t,1/r,i)),t}function sb(t,e=0,n=1,i=.5,r,s=t,o=t){if(si.test(e)&&(e=parseFloat(e),e=pt(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=pt(s.min,s.max,i);t===s&&(a-=e),t.min=mv(t.min,e,n,a,r),t.max=mv(t.max,e,n,a,r)}function gv(t,e,[n,i,r],s,o){sb(t,e[n],e[i],e[r],e.scale,s,o)}const ob=["x","scaleX","originX"],ab=["y","scaleY","originY"];function vv(t,e,n,i){gv(t.x,e,ob,n?n.x:void 0,i?i.x:void 0),gv(t.y,e,ab,n?n.y:void 0,i?i.y:void 0)}function _v(t){return t.translate===0&&t.scale===1}function rS(t){return _v(t.x)&&_v(t.y)}function lb(t,e){return t.x.min===e.x.min&&t.x.max===e.x.max&&t.y.min===e.y.min&&t.y.max===e.y.max}function sS(t,e){return Math.round(t.x.min)===Math.round(e.x.min)&&Math.round(t.x.max)===Math.round(e.x.max)&&Math.round(t.y.min)===Math.round(e.y.min)&&Math.round(t.y.max)===Math.round(e.y.max)}function yv(t){return xn(t.x)/xn(t.y)}class cb{constructor(){this.members=[]}add(e){Vp(this.members,e),e.scheduleRender()}remove(e){if(Hp(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function xv(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:d,rotateY:f,skewX:p,skewY:v}=n;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),d&&(i+=`rotateX(${d}deg) `),f&&(i+=`rotateY(${f}deg) `),p&&(i+=`skewX(${p}deg) `),v&&(i+=`skewY(${v}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const ub=(t,e)=>t.depth-e.depth;class db{constructor(){this.children=[],this.isDirty=!1}add(e){Vp(this.children,e),this.isDirty=!0}remove(e){Hp(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(ub),this.isDirty=!1,this.children.forEach(e)}}function fb(t,e){const n=ur.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Di(i),t(s-e))};return tt.read(i,!0),()=>Di(i)}function hb(t){window.MotionDebug&&window.MotionDebug.record(t)}function pb(t){return t instanceof SVGElement&&t.tagName!=="svg"}function mb(t,e,n){const i=$t(t)?t:Ea(t);return i.start(zp("",i,e,n)),i.animation}const Ku=["","X","Y","Z"],gb={visibility:"hidden"},Sv=1e3;let vb=0;const Fr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function qu(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function oS(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return!1;const{visualElement:e}=t.options;return e?Xx(e)?!0:t.parent&&!t.parent.hasCheckedOptimisedAppear?oS(t.parent):!1:!1}function aS({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=vb++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Fr.totalNodes=Fr.resolvedTargetDeltas=Fr.recalculatedProjection=0,this.nodes.forEach(xb),this.nodes.forEach(Tb),this.nodes.forEach(Ab),this.nodes.forEach(Sb),hb(Fr)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new db)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Gp),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=pb(o),this.instance=o;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let d;const f=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=fb(f,250),Xl.hasAnimatedSinceResize&&(Xl.hasAnimatedSinceResize=!1,this.nodes.forEach(Ev))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeTargetChanged:p,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||u.getDefaultTransition()||Lb,{onLayoutAnimationStart:m,onLayoutAnimationComplete:h}=u.getProps(),_=!this.targetLayout||!sS(this.targetLayout,v)||p,g=!f&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||g||f&&(_||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,g);const S={...Lp(y,"layout"),onPlay:m,onComplete:h};(u.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else f||Ev(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Di(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(bb),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.HandoffCancelAllAnimations&&oS(this)&&window.HandoffCancelAllAnimations(),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const d=this.path[u];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Mv);return}this.isUpdating||this.nodes.forEach(Eb),this.isUpdating=!1,this.nodes.forEach(wb),this.nodes.forEach(_b),this.nodes.forEach(yb),this.clearAllSnapshots();const a=ur.now();kt.delta=mr(0,1e3/60,a-kt.timestamp),kt.timestamp=a,kt.isProcessing=!0,Bu.update.process(kt),Bu.preRender.process(kt),Bu.render.process(kt),kt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,_p.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Mb),this.sharedNodes.forEach(Cb)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,tt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){tt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=xt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:o,isRoot:i(this.instance),offset:n(this.instance)})}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!rS(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&(a||Ur(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),Db(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return xt();const a=o.measureViewportBox(),{scroll:l}=this.root;return l&&(Ki(a.x,l.offset.x),Ki(a.y,l.offset.y)),a}removeElementScroll(o){const a=xt();wn(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l],{scroll:u,options:d}=c;if(c!==this.root&&u&&d.layoutScroll){if(u.isRoot){wn(a,o);const{scroll:f}=this.root;f&&(Ki(a.x,-f.offset.x),Ki(a.y,-f.offset.y))}Ki(a.x,u.offset.x),Ki(a.y,u.offset.y)}}return a}applyTransform(o,a=!1){const l=xt();wn(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Gs(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Ur(u.latestValues)&&Gs(l,u.latestValues)}return Ur(this.latestValues)&&Gs(l,this.latestValues),l}removeTransform(o){const a=xt();wn(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Ur(c.latestValues))continue;Ff(c.latestValues)&&c.updateSnapshot();const u=xt(),d=c.measurePageBox();wn(u,d),vv(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return Ur(this.latestValues)&&vv(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==kt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:d,layoutId:f}=this.options;if(!(!this.layout||!(d||f))){if(this.resolvedRelativeTargetAt=kt.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=xt(),this.relativeTargetOrigin=xt(),na(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),wn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=xt(),this.targetWithTransforms=xt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),IA(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):wn(this.target,this.layout.layoutBox),Qx(this.target,this.targetDelta)):wn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=xt(),this.relativeTargetOrigin=xt(),na(this.relativeTargetOrigin,this.target,p.target),wn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Fr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Ff(this.parent.latestValues)||Zx(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===kt.timestamp&&(c=!1),c)return;const{layout:u,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||d))return;wn(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,p=this.treeScale.y;HA(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=xt());const{target:v}=a;if(!v){this.projectionTransform&&(this.projectionDelta=Hs(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Hs(),this.projectionDeltaWithTransform=Hs());const y=this.projectionTransform;ta(this.projectionDelta,this.layoutCorrected,v,this.latestValues),this.projectionTransform=xv(this.projectionDelta,this.treeScale),(this.projectionTransform!==y||this.treeScale.x!==f||this.treeScale.y!==p)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),Fr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),o){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},d=Hs();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=xt(),p=l?l.source:void 0,v=this.layout?this.layout.source:void 0,y=p!==v,m=this.getStack(),h=!m||m.members.length<=1,_=!!(y&&!h&&this.options.crossfade===!0&&!this.path.some(Pb));this.animationProgress=0;let g;this.mixTargetDelta=S=>{const R=S/1e3;wv(d.x,o.x,R),wv(d.y,o.y,R),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(na(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Rb(this.relativeTarget,this.relativeTargetOrigin,f,R),g&&lb(this.relativeTarget,g)&&(this.isProjectionDirty=!1),g||(g=xt()),wn(g,this.relativeTarget)),y&&(this.animationValues=u,nb(u,c,this.latestValues,R,_,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=R},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Di(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=tt.update(()=>{Xl.hasAnimatedSinceResize=!0,this.currentAnimation=mb(0,Sv,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Sv),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&lS(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||xt();const d=xn(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const f=xn(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+f}wn(a,l),Gs(a,u),ta(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new cb),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&qu("z",o,c,this.animationValues);for(let u=0;u<Ku.length;u++)qu(`rotate${Ku[u]}`,o,c,this.animationValues),qu(`skew${Ku[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return gb;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=Wl(o==null?void 0:o.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=Wl(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Ur(this.latestValues)&&(y.transform=u?u({},""):"none",this.hasProjected=!1),y}const f=d.animationValues||d.latestValues;this.applyTransformsToTarget(),c.transform=xv(this.projectionDeltaWithTransform,this.treeScale,f),u&&(c.transform=u(f,c.transform));const{x:p,y:v}=this.projectionDelta;c.transformOrigin=`${p.origin*100}% ${v.origin*100}% 0`,d.animationValues?c.opacity=d===this?(l=(a=f.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:c.opacity=d===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const y in Ec){if(f[y]===void 0)continue;const{correct:m,applyTo:h}=Ec[y],_=c.transform==="none"?f[y]:m(f[y],d);if(h){const g=h.length;for(let S=0;S<g;S++)c[h[S]]=_}else c[y]=_}return this.options.layoutId&&(c.pointerEvents=d===this?Wl(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Mv),this.root.sharedNodes.clear()}}}function _b(t){t.updateLayout()}function yb(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?An(d=>{const f=o?n.measuredBox[d]:n.layoutBox[d],p=xn(f);f.min=i[d].min,f.max=f.min+p}):lS(s,n.layoutBox,i)&&An(d=>{const f=o?n.measuredBox[d]:n.layoutBox[d],p=xn(i[d]);f.max=f.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+p)});const a=Hs();ta(a,i,n.layoutBox);const l=Hs();o?ta(l,t.applyTransform(r,!0),n.measuredBox):ta(l,i,n.layoutBox);const c=!rS(a);let u=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:p}=d;if(f&&p){const v=xt();na(v,n.layoutBox,f.layoutBox);const y=xt();na(y,i,p.layoutBox),sS(v,y)||(u=!0),d.options.layoutRoot&&(t.relativeTarget=y,t.relativeTargetOrigin=v,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function xb(t){Fr.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function Sb(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function Mb(t){t.clearSnapshot()}function Mv(t){t.clearMeasurements()}function Eb(t){t.isLayoutDirty=!1}function wb(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Ev(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function Tb(t){t.resolveTargetDelta()}function Ab(t){t.calcProjection()}function bb(t){t.resetSkewAndRotation()}function Cb(t){t.removeLeadSnapshot()}function wv(t,e,n){t.translate=pt(e.translate,0,n),t.scale=pt(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function Tv(t,e,n,i){t.min=pt(e.min,n.min,i),t.max=pt(e.max,n.max,i)}function Rb(t,e,n,i){Tv(t.x,e.x,n.x,i),Tv(t.y,e.y,n.y,i)}function Pb(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const Lb={duration:.45,ease:[.4,0,.1,1]},Av=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),bv=Av("applewebkit/")&&!Av("chrome/")?Math.round:Yt;function Cv(t){t.min=bv(t.min),t.max=bv(t.max)}function Db(t){Cv(t.x),Cv(t.y)}function lS(t,e,n){return t==="position"||t==="preserve-aspect"&&!Nf(yv(e),yv(n),.2)}const Ib=aS({attachResizeListener:(t,e)=>Si(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Zu={current:void 0},cS=aS({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Zu.current){const t=new Ib({});t.mount(window),t.setOptions({layoutScroll:!0}),Zu.current=t}return Zu.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Nb={pan:{Feature:qA},drag:{Feature:KA,ProjectionNode:cS,MeasureLayout:tS}},kf={current:null},uS={current:!1};function Ub(){if(uS.current=!0,!!mp)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>kf.current=t.matches;t.addListener(e),e()}else kf.current=!1}function Fb(t,e,n){const{willChange:i}=e;for(const r in e){const s=e[r],o=n[r];if($t(s))t.addValue(r,s),Cc(i)&&i.add(r);else if($t(o))t.addValue(r,Ea(s,{owner:t})),Cc(i)&&i.remove(r);else if(o!==s)if(t.hasValue(r)){const a=t.getValue(r);a.liveStyle===!0?a.jump(s):a.hasAnimated||a.set(s)}else{const a=t.getStaticValue(r);t.addValue(r,Ea(a!==void 0?a:s,{owner:t}))}}for(const r in n)e[r]===void 0&&t.removeValue(r);return e}const Rv=new WeakMap,Ob=[...xx,jt,gr],kb=t=>Ob.find(yx(t)),Pv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],Bb=xp.length;class zb{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:s,visualState:o},a={}){this.resolveKeyframes=(f,p,v,y)=>new this.KeyframeResolver(f,p,v,y,this),this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Dp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>tt.render(this.render,!1,!0);const{latestValues:l,renderState:c}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=eu(n),this.isVariantNode=Ky(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:u,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const f in d){const p=d[f];l[f]!==void 0&&$t(p)&&(p.set(l[f],!1),Cc(u)&&u.add(f))}}mount(e){this.current=e,Rv.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),uS.current||Ub(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:kf.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Rv.delete(this.current),this.projection&&this.projection.unmount(),Di(this.notifyUpdate),Di(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){const i=ls.has(e),r=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&tt.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{r(),s(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in ao){const n=ao[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):xt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<Pv.length;i++){const r=Pv[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=Fb(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const i=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(i.initial=this.props.initial),i}const n={};for(let i=0;i<Bb;i++){const r=xp[i],s=this.props[r];(xa(s)||s===!1)&&(n[r]=s)}return n}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=Ea(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){var i;let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(vx(r)||gx(r))?r=parseFloat(r):!kb(r)&&gr.test(n)&&(r=Cx(e,n)),this.setBaseTarget(e,$t(r)?r.get():r)),$t(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const o=Pp(this.props,i,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(r=o[e])}if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!$t(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Gp),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class dS extends zb{constructor(){super(...arguments),this.KeyframeResolver=Rx}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}}function Vb(t){return window.getComputedStyle(t)}class Hb extends dS{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,n){if(ls.has(n)){const i=Np(n);return i&&i.default||0}else{const i=Vb(e),r=(Jy(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return Jx(e,n)}build(e,n,i,r){Tp(e,n,i,r.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return Rp(e,n,i)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;$t(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(e,n,i,r){rx(e,n,i,r)}}class Gb extends dS{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(ls.has(n)){const i=Np(n);return i&&i.default||0}return n=sx.has(n)?n:vp(n),e.getAttribute(n)}measureInstanceViewportBox(){return xt()}scrapeMotionValuesFromProps(e,n,i){return ax(e,n,i)}build(e,n,i,r){bp(e,n,i,this.isSVGTag,r.transformTemplate)}renderInstance(e,n,i,r){ox(e,n,i,r)}mount(e){this.isSVGTag=Cp(e.tagName),super.mount(e)}}const Wb=(t,e)=>Mp(t)?new Gb(e,{enableHardwareAcceleration:!1}):new Hb(e,{allowProjection:t!==se.Fragment,enableHardwareAcceleration:!0}),jb={layout:{ProjectionNode:cS,MeasureLayout:tS}},Xb={...RA,...k1,...Nb,...jb},is=Yw((t,e)=>T1(t,e,Xb,Wb));function fS(){const t=se.useRef(!1);return gp(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function $b(){const t=fS(),[e,n]=se.useState(0),i=se.useCallback(()=>{t.current&&n(e+1)},[e]);return[se.useCallback(()=>tt.postRender(i),[i]),e]}class Yb extends se.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Kb({children:t,isPresent:e}){const n=se.useId(),i=se.useRef(null),r=se.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=se.useContext(pp);return se.useInsertionEffect(()=>{const{width:o,height:a,top:l,left:c}=r.current;if(e||!i.current||!o||!a)return;i.current.dataset.motionPopId=n;const u=document.createElement("style");return s&&(u.nonce=s),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[e]),H.jsx(Yb,{isPresent:e,childRef:i,sizeRef:r,children:se.cloneElement(t,{ref:i})})}const Qu=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o})=>{const a=lx(qb),l=se.useId(),c=se.useMemo(()=>({id:l,initial:e,isPresent:n,custom:r,onExitComplete:u=>{a.set(u,!0);for(const d of a.values())if(!d)return;i&&i()},register:u=>(a.set(u,!1),()=>a.delete(u))}),s?[Math.random()]:[n]);return se.useMemo(()=>{a.forEach((u,d)=>a.set(d,!1))},[n]),se.useEffect(()=>{!n&&!a.size&&i&&i()},[n]),o==="popLayout"&&(t=H.jsx(Kb,{isPresent:n,children:t})),H.jsx(Qc.Provider,{value:c,children:t})};function qb(){return new Map}function Zb(t){return se.useEffect(()=>()=>t(),[])}const Or=t=>t.key||"";function Qb(t,e){t.forEach(n=>{const i=Or(n);e.set(i,n)})}function Jb(t){const e=[];return se.Children.forEach(t,n=>{se.isValidElement(n)&&e.push(n)}),e}const eC=({children:t,custom:e,initial:n=!0,onExitComplete:i,exitBeforeEnter:r,presenceAffectsLayout:s=!0,mode:o="sync"})=>{const a=se.useContext(Sp).forceRender||$b()[0],l=fS(),c=Jb(t);let u=c;const d=se.useRef(new Map).current,f=se.useRef(u),p=se.useRef(new Map).current,v=se.useRef(!0);if(gp(()=>{v.current=!1,Qb(c,p),f.current=u}),Zb(()=>{v.current=!0,p.clear(),d.clear()}),v.current)return H.jsx(H.Fragment,{children:u.map(_=>H.jsx(Qu,{isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:s,mode:o,children:_},Or(_)))});u=[...u];const y=f.current.map(Or),m=c.map(Or),h=y.length;for(let _=0;_<h;_++){const g=y[_];m.indexOf(g)===-1&&!d.has(g)&&d.set(g,void 0)}return o==="wait"&&d.size&&(u=[]),d.forEach((_,g)=>{if(m.indexOf(g)!==-1)return;const S=p.get(g);if(!S)return;const R=y.indexOf(g);let T=_;if(!T){const A=()=>{d.delete(g);const b=Array.from(p.keys()).filter(E=>!m.includes(E));if(b.forEach(E=>p.delete(E)),f.current=c.filter(E=>{const x=Or(E);return x===g||b.includes(x)}),!d.size){if(l.current===!1)return;a(),i&&i()}};T=H.jsx(Qu,{isPresent:!1,onExitComplete:A,custom:e,presenceAffectsLayout:s,mode:o,children:S},Or(S)),d.set(g,T)}u.splice(R,0,T)}),u=u.map(_=>{const g=_.key;return d.has(g)?_:H.jsx(Qu,{isPresent:!0,presenceAffectsLayout:s,mode:o,children:_},Or(_))}),H.jsx(H.Fragment,{children:d.size?u:u.map(_=>se.cloneElement(_))})};function hS(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=hS(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function tC(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=hS(t))&&(i&&(i+=" "),i+=e);return i}const Wp="-";function nC(t){const e=rC(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:i}=t;function r(o){const a=o.split(Wp);return a[0]===""&&a.length!==1&&a.shift(),pS(a,e)||iC(o)}function s(o,a){const l=n[o]||[];return a&&i[o]?[...l,...i[o]]:l}return{getClassGroupId:r,getConflictingClassGroupIds:s}}function pS(t,e){var o;if(t.length===0)return e.classGroupId;const n=t[0],i=e.nextPart.get(n),r=i?pS(t.slice(1),i):void 0;if(r)return r;if(e.validators.length===0)return;const s=t.join(Wp);return(o=e.validators.find(({validator:a})=>a(s)))==null?void 0:o.classGroupId}const Lv=/^\[(.+)\]$/;function iC(t){if(Lv.test(t)){const e=Lv.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}}function rC(t){const{theme:e,prefix:n}=t,i={nextPart:new Map,validators:[]};return oC(Object.entries(t.classGroups),n).forEach(([s,o])=>{Bf(o,i,s,e)}),i}function Bf(t,e,n,i){t.forEach(r=>{if(typeof r=="string"){const s=r===""?e:Dv(e,r);s.classGroupId=n;return}if(typeof r=="function"){if(sC(r)){Bf(r(i),e,n,i);return}e.validators.push({validator:r,classGroupId:n});return}Object.entries(r).forEach(([s,o])=>{Bf(o,Dv(e,s),n,i)})})}function Dv(t,e){let n=t;return e.split(Wp).forEach(i=>{n.nextPart.has(i)||n.nextPart.set(i,{nextPart:new Map,validators:[]}),n=n.nextPart.get(i)}),n}function sC(t){return t.isThemeGetter}function oC(t,e){return e?t.map(([n,i])=>{const r=i.map(s=>typeof s=="string"?e+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,a])=>[e+o,a])):s);return[n,r]}):t}function aC(t){if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,i=new Map;function r(s,o){n.set(s,o),e++,e>t&&(e=0,i=n,n=new Map)}return{get(s){let o=n.get(s);if(o!==void 0)return o;if((o=i.get(s))!==void 0)return r(s,o),o},set(s,o){n.has(s)?n.set(s,o):r(s,o)}}}const mS="!";function lC(t){const e=t.separator,n=e.length===1,i=e[0],r=e.length;return function(o){const a=[];let l=0,c=0,u;for(let y=0;y<o.length;y++){let m=o[y];if(l===0){if(m===i&&(n||o.slice(y,y+r)===e)){a.push(o.slice(c,y)),c=y+r;continue}if(m==="/"){u=y;continue}}m==="["?l++:m==="]"&&l--}const d=a.length===0?o:o.substring(c),f=d.startsWith(mS),p=f?d.substring(1):d,v=u&&u>c?u-c:void 0;return{modifiers:a,hasImportantModifier:f,baseClassName:p,maybePostfixModifierPosition:v}}}function cC(t){if(t.length<=1)return t;const e=[];let n=[];return t.forEach(i=>{i[0]==="["?(e.push(...n.sort(),i),n=[]):n.push(i)}),e.push(...n.sort()),e}function uC(t){return{cache:aC(t.cacheSize),splitModifiers:lC(t),...nC(t)}}const dC=/\s+/;function fC(t,e){const{splitModifiers:n,getClassGroupId:i,getConflictingClassGroupIds:r}=e,s=new Set;return t.trim().split(dC).map(o=>{const{modifiers:a,hasImportantModifier:l,baseClassName:c,maybePostfixModifierPosition:u}=n(o);let d=i(u?c.substring(0,u):c),f=!!u;if(!d){if(!u)return{isTailwindClass:!1,originalClassName:o};if(d=i(c),!d)return{isTailwindClass:!1,originalClassName:o};f=!1}const p=cC(a).join(":");return{isTailwindClass:!0,modifierId:l?p+mS:p,classGroupId:d,originalClassName:o,hasPostfixModifier:f}}).reverse().filter(o=>{if(!o.isTailwindClass)return!0;const{modifierId:a,classGroupId:l,hasPostfixModifier:c}=o,u=a+l;return s.has(u)?!1:(s.add(u),r(l,c).forEach(d=>s.add(a+d)),!0)}).reverse().map(o=>o.originalClassName).join(" ")}function hC(){let t=0,e,n,i="";for(;t<arguments.length;)(e=arguments[t++])&&(n=gS(e))&&(i&&(i+=" "),i+=n);return i}function gS(t){if(typeof t=="string")return t;let e,n="";for(let i=0;i<t.length;i++)t[i]&&(e=gS(t[i]))&&(n&&(n+=" "),n+=e);return n}function pC(t,...e){let n,i,r,s=o;function o(l){const c=e.reduce((u,d)=>d(u),t());return n=uC(c),i=n.cache.get,r=n.cache.set,s=a,a(l)}function a(l){const c=i(l);if(c)return c;const u=fC(l,n);return r(l,u),u}return function(){return s(hC.apply(null,arguments))}}function ot(t){const e=n=>n[t]||[];return e.isThemeGetter=!0,e}const vS=/^\[(?:([a-z-]+):)?(.+)\]$/i,mC=/^\d+\/\d+$/,gC=new Set(["px","full","screen"]),vC=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,_C=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,yC=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,xC=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,SC=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function ci(t){return Xr(t)||gC.has(t)||mC.test(t)}function ki(t){return yo(t,"length",RC)}function Xr(t){return!!t&&!Number.isNaN(Number(t))}function ll(t){return yo(t,"number",Xr)}function Lo(t){return!!t&&Number.isInteger(Number(t))}function MC(t){return t.endsWith("%")&&Xr(t.slice(0,-1))}function ze(t){return vS.test(t)}function Bi(t){return vC.test(t)}const EC=new Set(["length","size","percentage"]);function wC(t){return yo(t,EC,_S)}function TC(t){return yo(t,"position",_S)}const AC=new Set(["image","url"]);function bC(t){return yo(t,AC,LC)}function CC(t){return yo(t,"",PC)}function Do(){return!0}function yo(t,e,n){const i=vS.exec(t);return i?i[1]?typeof e=="string"?i[1]===e:e.has(i[1]):n(i[2]):!1}function RC(t){return _C.test(t)&&!yC.test(t)}function _S(){return!1}function PC(t){return xC.test(t)}function LC(t){return SC.test(t)}function DC(){const t=ot("colors"),e=ot("spacing"),n=ot("blur"),i=ot("brightness"),r=ot("borderColor"),s=ot("borderRadius"),o=ot("borderSpacing"),a=ot("borderWidth"),l=ot("contrast"),c=ot("grayscale"),u=ot("hueRotate"),d=ot("invert"),f=ot("gap"),p=ot("gradientColorStops"),v=ot("gradientColorStopPositions"),y=ot("inset"),m=ot("margin"),h=ot("opacity"),_=ot("padding"),g=ot("saturate"),S=ot("scale"),R=ot("sepia"),T=ot("skew"),A=ot("space"),b=ot("translate"),E=()=>["auto","contain","none"],x=()=>["auto","hidden","clip","visible","scroll"],C=()=>["auto",ze,e],L=()=>[ze,e],N=()=>["",ci,ki],O=()=>["auto",Xr,ze],B=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],z=()=>["solid","dashed","dotted","double","none"],$=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],I=()=>["start","end","center","between","around","evenly","stretch"],Y=()=>["","0",ze],q=()=>["auto","avoid","all","avoid-page","page","left","right","column"],ie=()=>[Xr,ll],ge=()=>[Xr,ze];return{cacheSize:500,separator:":",theme:{colors:[Do],spacing:[ci,ki],blur:["none","",Bi,ze],brightness:ie(),borderColor:[t],borderRadius:["none","","full",Bi,ze],borderSpacing:L(),borderWidth:N(),contrast:ie(),grayscale:Y(),hueRotate:ge(),invert:Y(),gap:L(),gradientColorStops:[t],gradientColorStopPositions:[MC,ki],inset:C(),margin:C(),opacity:ie(),padding:L(),saturate:ie(),scale:ie(),sepia:Y(),skew:ge(),space:L(),translate:L()},classGroups:{aspect:[{aspect:["auto","square","video",ze]}],container:["container"],columns:[{columns:[Bi]}],"break-after":[{"break-after":q()}],"break-before":[{"break-before":q()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...B(),ze]}],overflow:[{overflow:x()}],"overflow-x":[{"overflow-x":x()}],"overflow-y":[{"overflow-y":x()}],overscroll:[{overscroll:E()}],"overscroll-x":[{"overscroll-x":E()}],"overscroll-y":[{"overscroll-y":E()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[y]}],"inset-x":[{"inset-x":[y]}],"inset-y":[{"inset-y":[y]}],start:[{start:[y]}],end:[{end:[y]}],top:[{top:[y]}],right:[{right:[y]}],bottom:[{bottom:[y]}],left:[{left:[y]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Lo,ze]}],basis:[{basis:C()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",ze]}],grow:[{grow:Y()}],shrink:[{shrink:Y()}],order:[{order:["first","last","none",Lo,ze]}],"grid-cols":[{"grid-cols":[Do]}],"col-start-end":[{col:["auto",{span:["full",Lo,ze]},ze]}],"col-start":[{"col-start":O()}],"col-end":[{"col-end":O()}],"grid-rows":[{"grid-rows":[Do]}],"row-start-end":[{row:["auto",{span:[Lo,ze]},ze]}],"row-start":[{"row-start":O()}],"row-end":[{"row-end":O()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",ze]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",ze]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal",...I()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...I(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...I(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[_]}],px:[{px:[_]}],py:[{py:[_]}],ps:[{ps:[_]}],pe:[{pe:[_]}],pt:[{pt:[_]}],pr:[{pr:[_]}],pb:[{pb:[_]}],pl:[{pl:[_]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[A]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[A]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",ze,e]}],"min-w":[{"min-w":[ze,e,"min","max","fit"]}],"max-w":[{"max-w":[ze,e,"none","full","min","max","fit","prose",{screen:[Bi]},Bi]}],h:[{h:[ze,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[ze,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[ze,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[ze,e,"auto","min","max","fit"]}],"font-size":[{text:["base",Bi,ki]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",ll]}],"font-family":[{font:[Do]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",ze]}],"line-clamp":[{"line-clamp":["none",Xr,ll]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",ci,ze]}],"list-image":[{"list-image":["none",ze]}],"list-style-type":[{list:["none","disc","decimal",ze]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...z(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",ci,ki]}],"underline-offset":[{"underline-offset":["auto",ci,ze]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:L()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ze]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ze]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...B(),TC]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",wC]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},bC]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[v]}],"gradient-via-pos":[{via:[v]}],"gradient-to-pos":[{to:[v]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[...z(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:z()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...z()]}],"outline-offset":[{"outline-offset":[ci,ze]}],"outline-w":[{outline:[ci,ki]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:N()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[ci,ki]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",Bi,CC]}],"shadow-color":[{shadow:[Do]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":[...$(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":$()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[i]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",Bi,ze]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[d]}],saturate:[{saturate:[g]}],sepia:[{sepia:[R]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[d]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[g]}],"backdrop-sepia":[{"backdrop-sepia":[R]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",ze]}],duration:[{duration:ge()}],ease:[{ease:["linear","in","out","in-out",ze]}],delay:[{delay:ge()}],animate:[{animate:["none","spin","ping","pulse","bounce",ze]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[S]}],"scale-x":[{"scale-x":[S]}],"scale-y":[{"scale-y":[S]}],rotate:[{rotate:[Lo,ze]}],"translate-x":[{"translate-x":[b]}],"translate-y":[{"translate-y":[b]}],"skew-x":[{"skew-x":[T]}],"skew-y":[{"skew-y":[T]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",ze]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ze]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":L()}],"scroll-mx":[{"scroll-mx":L()}],"scroll-my":[{"scroll-my":L()}],"scroll-ms":[{"scroll-ms":L()}],"scroll-me":[{"scroll-me":L()}],"scroll-mt":[{"scroll-mt":L()}],"scroll-mr":[{"scroll-mr":L()}],"scroll-mb":[{"scroll-mb":L()}],"scroll-ml":[{"scroll-ml":L()}],"scroll-p":[{"scroll-p":L()}],"scroll-px":[{"scroll-px":L()}],"scroll-py":[{"scroll-py":L()}],"scroll-ps":[{"scroll-ps":L()}],"scroll-pe":[{"scroll-pe":L()}],"scroll-pt":[{"scroll-pt":L()}],"scroll-pr":[{"scroll-pr":L()}],"scroll-pb":[{"scroll-pb":L()}],"scroll-pl":[{"scroll-pl":L()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ze]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[ci,ki,ll]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const IC=pC(DC);function ti(...t){return IC(tC(t))}const NC=({words:t,duration:e=3e3,className:n})=>{const[i,r]=se.useState(t[0]),[s,o]=se.useState(!1),a=se.useCallback(()=>{const l=t[t.indexOf(i)+1]||t[0];r(l),o(!0)},[i,t]);return se.useEffect(()=>{s||setTimeout(()=>{a()},e)},[s,e,a]),H.jsx(eC,{onExitComplete:()=>{o(!1)},children:H.jsx(is.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.4,ease:"easeInOut",type:"spring",stiffness:100,damping:10},exit:{opacity:0,y:-40,x:40,filter:"blur(8px)",scale:2,position:"absolute"},className:ti("z-0 inline-block relative text-left text-indigo-700 px-2",n),children:i.split("").map((l,c)=>H.jsx(is.span,{initial:{opacity:0,y:10,filter:"blur(8px)"},animate:{opacity:1,y:0,filter:"blur(0px)"},transition:{delay:c*.08,duration:.4},className:"inline-block",children:l},i+c))},i)})},UC=({children:t,className:e})=>H.jsx(is.span,{initial:{backgroundSize:"0% 100%"},animate:{backgroundSize:"100% 100%"},transition:{duration:2,ease:"linear",delay:.5},style:{backgroundRepeat:"no-repeat",backgroundPosition:"left center",display:"inline"},className:ti("relative inline-block pb-1   px-1 rounded-lg from-indigo-500 via-indigo-400 to-indigo-700 bg-gradient-to-tr",e),children:t});var yS={exports:{}};(function(t,e){(function(n,i){t.exports=i()})(rM,function(){return function(n){function i(s){if(r[s])return r[s].exports;var o=r[s]={exports:{},id:s,loaded:!1};return n[s].call(o.exports,o,o.exports,i),o.loaded=!0,o.exports}var r={};return i.m=n,i.c=r,i.p="dist/",i(0)}([function(n,i,r){function s(O){return O&&O.__esModule?O:{default:O}}var o=Object.assign||function(O){for(var B=1;B<arguments.length;B++){var z=arguments[B];for(var $ in z)Object.prototype.hasOwnProperty.call(z,$)&&(O[$]=z[$])}return O},a=r(1),l=(s(a),r(6)),c=s(l),u=r(7),d=s(u),f=r(8),p=s(f),v=r(9),y=s(v),m=r(10),h=s(m),_=r(11),g=s(_),S=r(14),R=s(S),T=[],A=!1,b={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},E=function(){var O=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(O&&(A=!0),A)return T=(0,g.default)(T,b),(0,h.default)(T,b.once),T},x=function(){T=(0,R.default)(),E()},C=function(){T.forEach(function(O,B){O.node.removeAttribute("data-aos"),O.node.removeAttribute("data-aos-easing"),O.node.removeAttribute("data-aos-duration"),O.node.removeAttribute("data-aos-delay")})},L=function(O){return O===!0||O==="mobile"&&y.default.mobile()||O==="phone"&&y.default.phone()||O==="tablet"&&y.default.tablet()||typeof O=="function"&&O()===!0},N=function(O){b=o(b,O),T=(0,R.default)();var B=document.all&&!window.atob;return L(b.disable)||B?C():(b.disableMutationObserver||p.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),b.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",b.easing),document.querySelector("body").setAttribute("data-aos-duration",b.duration),document.querySelector("body").setAttribute("data-aos-delay",b.delay),b.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?E(!0):b.startEvent==="load"?window.addEventListener(b.startEvent,function(){E(!0)}):document.addEventListener(b.startEvent,function(){E(!0)}),window.addEventListener("resize",(0,d.default)(E,b.debounceDelay,!0)),window.addEventListener("orientationchange",(0,d.default)(E,b.debounceDelay,!0)),window.addEventListener("scroll",(0,c.default)(function(){(0,h.default)(T,b.once)},b.throttleDelay)),b.disableMutationObserver||p.default.ready("[data-aos]",x),T)};n.exports={init:N,refresh:E,refreshHard:x}},function(n,i){},,,,,function(n,i){(function(r){function s(L,N,O){function B(Ee){var Fe=X,ye=Q;return X=Q=void 0,De=Ee,re=L.apply(ye,Fe)}function z(Ee){return De=Ee,xe=setTimeout(Y,N),Ke?B(Ee):re}function $(Ee){var Fe=Ee-Te,ye=Ee-De,dt=N-Fe;return D?x(dt,ce-ye):dt}function I(Ee){var Fe=Ee-Te,ye=Ee-De;return Te===void 0||Fe>=N||Fe<0||D&&ye>=ce}function Y(){var Ee=C();return I(Ee)?q(Ee):void(xe=setTimeout(Y,$(Ee)))}function q(Ee){return xe=void 0,Ue&&X?B(Ee):(X=Q=void 0,re)}function ie(){xe!==void 0&&clearTimeout(xe),De=0,X=Te=Q=xe=void 0}function ge(){return xe===void 0?re:q(C())}function Ne(){var Ee=C(),Fe=I(Ee);if(X=arguments,Q=this,Te=Ee,Fe){if(xe===void 0)return z(Te);if(D)return xe=setTimeout(Y,N),B(Te)}return xe===void 0&&(xe=setTimeout(Y,N)),re}var X,Q,ce,re,xe,Te,De=0,Ke=!1,D=!1,Ue=!0;if(typeof L!="function")throw new TypeError(f);return N=u(N)||0,a(O)&&(Ke=!!O.leading,D="maxWait"in O,ce=D?E(u(O.maxWait)||0,N):ce,Ue="trailing"in O?!!O.trailing:Ue),Ne.cancel=ie,Ne.flush=ge,Ne}function o(L,N,O){var B=!0,z=!0;if(typeof L!="function")throw new TypeError(f);return a(O)&&(B="leading"in O?!!O.leading:B,z="trailing"in O?!!O.trailing:z),s(L,N,{leading:B,maxWait:N,trailing:z})}function a(L){var N=typeof L>"u"?"undefined":d(L);return!!L&&(N=="object"||N=="function")}function l(L){return!!L&&(typeof L>"u"?"undefined":d(L))=="object"}function c(L){return(typeof L>"u"?"undefined":d(L))=="symbol"||l(L)&&b.call(L)==v}function u(L){if(typeof L=="number")return L;if(c(L))return p;if(a(L)){var N=typeof L.valueOf=="function"?L.valueOf():L;L=a(N)?N+"":N}if(typeof L!="string")return L===0?L:+L;L=L.replace(y,"");var O=h.test(L);return O||_.test(L)?g(L.slice(2),O?2:8):m.test(L)?p:+L}var d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(L){return typeof L}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L},f="Expected a function",p=NaN,v="[object Symbol]",y=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,_=/^0o[0-7]+$/i,g=parseInt,S=(typeof r>"u"?"undefined":d(r))=="object"&&r&&r.Object===Object&&r,R=(typeof self>"u"?"undefined":d(self))=="object"&&self&&self.Object===Object&&self,T=S||R||Function("return this")(),A=Object.prototype,b=A.toString,E=Math.max,x=Math.min,C=function(){return T.Date.now()};n.exports=o}).call(i,function(){return this}())},function(n,i){(function(r){function s(C,L,N){function O(Ue){var Ee=Ne,Fe=X;return Ne=X=void 0,Te=Ue,ce=C.apply(Fe,Ee)}function B(Ue){return Te=Ue,re=setTimeout(I,L),De?O(Ue):ce}function z(Ue){var Ee=Ue-xe,Fe=Ue-Te,ye=L-Ee;return Ke?E(ye,Q-Fe):ye}function $(Ue){var Ee=Ue-xe,Fe=Ue-Te;return xe===void 0||Ee>=L||Ee<0||Ke&&Fe>=Q}function I(){var Ue=x();return $(Ue)?Y(Ue):void(re=setTimeout(I,z(Ue)))}function Y(Ue){return re=void 0,D&&Ne?O(Ue):(Ne=X=void 0,ce)}function q(){re!==void 0&&clearTimeout(re),Te=0,Ne=xe=X=re=void 0}function ie(){return re===void 0?ce:Y(x())}function ge(){var Ue=x(),Ee=$(Ue);if(Ne=arguments,X=this,xe=Ue,Ee){if(re===void 0)return B(xe);if(Ke)return re=setTimeout(I,L),O(xe)}return re===void 0&&(re=setTimeout(I,L)),ce}var Ne,X,Q,ce,re,xe,Te=0,De=!1,Ke=!1,D=!0;if(typeof C!="function")throw new TypeError(d);return L=c(L)||0,o(N)&&(De=!!N.leading,Ke="maxWait"in N,Q=Ke?b(c(N.maxWait)||0,L):Q,D="trailing"in N?!!N.trailing:D),ge.cancel=q,ge.flush=ie,ge}function o(C){var L=typeof C>"u"?"undefined":u(C);return!!C&&(L=="object"||L=="function")}function a(C){return!!C&&(typeof C>"u"?"undefined":u(C))=="object"}function l(C){return(typeof C>"u"?"undefined":u(C))=="symbol"||a(C)&&A.call(C)==p}function c(C){if(typeof C=="number")return C;if(l(C))return f;if(o(C)){var L=typeof C.valueOf=="function"?C.valueOf():C;C=o(L)?L+"":L}if(typeof C!="string")return C===0?C:+C;C=C.replace(v,"");var N=m.test(C);return N||h.test(C)?_(C.slice(2),N?2:8):y.test(C)?f:+C}var u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C},d="Expected a function",f=NaN,p="[object Symbol]",v=/^\s+|\s+$/g,y=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,h=/^0o[0-7]+$/i,_=parseInt,g=(typeof r>"u"?"undefined":u(r))=="object"&&r&&r.Object===Object&&r,S=(typeof self>"u"?"undefined":u(self))=="object"&&self&&self.Object===Object&&self,R=g||S||Function("return this")(),T=Object.prototype,A=T.toString,b=Math.max,E=Math.min,x=function(){return R.Date.now()};n.exports=s}).call(i,function(){return this}())},function(n,i){function r(u){var d=void 0,f=void 0;for(d=0;d<u.length;d+=1)if(f=u[d],f.dataset&&f.dataset.aos||f.children&&r(f.children))return!0;return!1}function s(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(){return!!s()}function a(u,d){var f=window.document,p=s(),v=new p(l);c=d,v.observe(f.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function l(u){u&&u.forEach(function(d){var f=Array.prototype.slice.call(d.addedNodes),p=Array.prototype.slice.call(d.removedNodes),v=f.concat(p);if(r(v))return c()})}Object.defineProperty(i,"__esModule",{value:!0});var c=function(){};i.default={isSupported:o,ready:a}},function(n,i){function r(f,p){if(!(f instanceof p))throw new TypeError("Cannot call a class as a function")}function s(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(i,"__esModule",{value:!0});var o=function(){function f(p,v){for(var y=0;y<v.length;y++){var m=v[y];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(p,m.key,m)}}return function(p,v,y){return v&&f(p.prototype,v),y&&f(p,y),p}}(),a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,u=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,d=function(){function f(){r(this,f)}return o(f,[{key:"phone",value:function(){var p=s();return!(!a.test(p)&&!l.test(p.substr(0,4)))}},{key:"mobile",value:function(){var p=s();return!(!c.test(p)&&!u.test(p.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),f}();i.default=new d},function(n,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(o,a,l){var c=o.node.getAttribute("data-aos-once");a>o.position?o.node.classList.add("aos-animate"):typeof c<"u"&&(c==="false"||!l&&c!=="true")&&o.node.classList.remove("aos-animate")},s=function(o,a){var l=window.pageYOffset,c=window.innerHeight;o.forEach(function(u,d){r(u,c+l,a)})};i.default=s},function(n,i,r){function s(c){return c&&c.__esModule?c:{default:c}}Object.defineProperty(i,"__esModule",{value:!0});var o=r(12),a=s(o),l=function(c,u){return c.forEach(function(d,f){d.node.classList.add("aos-init"),d.position=(0,a.default)(d.node,u.offset)}),c};i.default=l},function(n,i,r){function s(c){return c&&c.__esModule?c:{default:c}}Object.defineProperty(i,"__esModule",{value:!0});var o=r(13),a=s(o),l=function(c,u){var d=0,f=0,p=window.innerHeight,v={offset:c.getAttribute("data-aos-offset"),anchor:c.getAttribute("data-aos-anchor"),anchorPlacement:c.getAttribute("data-aos-anchor-placement")};switch(v.offset&&!isNaN(v.offset)&&(f=parseInt(v.offset)),v.anchor&&document.querySelectorAll(v.anchor)&&(c=document.querySelectorAll(v.anchor)[0]),d=(0,a.default)(c).top,v.anchorPlacement){case"top-bottom":break;case"center-bottom":d+=c.offsetHeight/2;break;case"bottom-bottom":d+=c.offsetHeight;break;case"top-center":d+=p/2;break;case"bottom-center":d+=p/2+c.offsetHeight;break;case"center-center":d+=p/2+c.offsetHeight/2;break;case"top-top":d+=p;break;case"bottom-top":d+=c.offsetHeight+p;break;case"center-top":d+=c.offsetHeight/2+p}return v.anchorPlacement||v.offset||isNaN(u)||(f=u),d+f};i.default=l},function(n,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(s){for(var o=0,a=0;s&&!isNaN(s.offsetLeft)&&!isNaN(s.offsetTop);)o+=s.offsetLeft-(s.tagName!="BODY"?s.scrollLeft:0),a+=s.offsetTop-(s.tagName!="BODY"?s.scrollTop:0),s=s.offsetParent;return{top:a,left:o}};i.default=r},function(n,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(s){return s=s||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(s,function(o){return{node:o}})};i.default=r}])})})(yS);var FC=yS.exports;const OC=sM(FC);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jp="166",kC=0,Iv=1,BC=2,xS=1,zC=2,mi=3,vr=0,un=1,_i=2,dr=0,Zs=1,Nv=2,Uv=3,Fv=4,VC=5,zr=100,HC=101,GC=102,WC=103,jC=104,XC=200,$C=201,YC=202,KC=203,zf=204,Vf=205,qC=206,ZC=207,QC=208,JC=209,eR=210,tR=211,nR=212,iR=213,rR=214,sR=0,oR=1,aR=2,Pc=3,lR=4,cR=5,uR=6,dR=7,SS=0,fR=1,hR=2,fr=0,pR=1,mR=2,gR=3,vR=4,_R=5,yR=6,xR=7,MS=300,co=301,uo=302,Hf=303,Gf=304,ru=306,Wf=1e3,$r=1001,jf=1002,Ln=1003,SR=1004,cl=1005,Gn=1006,Ju=1007,Yr=1008,Ii=1009,ES=1010,wS=1011,wa=1012,Xp=1013,rs=1014,Mi=1015,Ua=1016,$p=1017,Yp=1018,fo=1020,TS=35902,AS=1021,bS=1022,Wn=1023,CS=1024,RS=1025,Qs=1026,ho=1027,PS=1028,Kp=1029,LS=1030,qp=1031,Zp=1033,$l=33776,Yl=33777,Kl=33778,ql=33779,Xf=35840,$f=35841,Yf=35842,Kf=35843,qf=36196,Zf=37492,Qf=37496,Jf=37808,eh=37809,th=37810,nh=37811,ih=37812,rh=37813,sh=37814,oh=37815,ah=37816,lh=37817,ch=37818,uh=37819,dh=37820,fh=37821,Zl=36492,hh=36494,ph=36495,DS=36283,mh=36284,gh=36285,vh=36286,MR=3200,ER=3201,wR=0,TR=1,Qi="",Zn="srgb",Er="srgb-linear",Qp="display-p3",su="display-p3-linear",Lc="linear",lt="srgb",Dc="rec709",Ic="p3",ds=7680,Ov=519,AR=512,bR=513,CR=514,IS=515,RR=516,PR=517,LR=518,DR=519,kv=35044,Bv="300 es",Ei=2e3,Nc=2001;class xo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ed=Math.PI/180,_h=180/Math.PI;function Fa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[t&255]+Gt[t>>8&255]+Gt[t>>16&255]+Gt[t>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[n&63|128]+Gt[n>>8&255]+"-"+Gt[n>>16&255]+Gt[n>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function sn(t,e,n){return Math.max(e,Math.min(n,t))}function IR(t,e){return(t%e+e)%e}function td(t,e,n){return(1-n)*t+n*e}function Io(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function nn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,n=0){qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],v=i[8],y=r[0],m=r[3],h=r[6],_=r[1],g=r[4],S=r[7],R=r[2],T=r[5],A=r[8];return s[0]=o*y+a*_+l*R,s[3]=o*m+a*g+l*T,s[6]=o*h+a*S+l*A,s[1]=c*y+u*_+d*R,s[4]=c*m+u*g+d*T,s[7]=c*h+u*S+d*A,s[2]=f*y+p*_+v*R,s[5]=f*m+p*g+v*T,s[8]=f*h+p*S+v*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,v=n*d+i*f+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=d*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(nd.makeScale(e,n)),this}rotate(e){return this.premultiply(nd.makeRotation(-e)),this}translate(e,n){return this.premultiply(nd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nd=new Ge;function NS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ta(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function NR(){const t=Ta("canvas");return t.style.display="block",t}const zv={};function US(t){t in zv||(zv[t]=!0,console.warn(t))}function UR(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Vv=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Hv=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ul={[Er]:{transfer:Lc,primaries:Dc,toReference:t=>t,fromReference:t=>t},[Zn]:{transfer:lt,primaries:Dc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[su]:{transfer:Lc,primaries:Ic,toReference:t=>t.applyMatrix3(Hv),fromReference:t=>t.applyMatrix3(Vv)},[Qp]:{transfer:lt,primaries:Ic,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Hv),fromReference:t=>t.applyMatrix3(Vv).convertLinearToSRGB()}},FR=new Set([Er,su]),nt={enabled:!0,_workingColorSpace:Er,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!FR.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ul[e].toReference,r=ul[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ul[t].primaries},getTransfer:function(t){return t===Qi?Lc:ul[t].transfer}};function Js(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function id(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let fs;class OR{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fs===void 0&&(fs=Ta("canvas")),fs.width=e.width,fs.height=e.height;const i=fs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=fs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ta("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Js(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Js(n[i]/255)*255):n[i]=Js(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kR=0;class FS{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kR++}),this.uuid=Fa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(rd(r[o].image)):s.push(rd(r[o]))}else s=rd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function rd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?OR.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let BR=0;class Jt extends xo{constructor(e=Jt.DEFAULT_IMAGE,n=Jt.DEFAULT_MAPPING,i=$r,r=$r,s=Gn,o=Yr,a=Wn,l=Ii,c=Jt.DEFAULT_ANISOTROPY,u=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BR++}),this.uuid=Fa(),this.name="",this.source=new FS(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==MS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wf:e.x=e.x-Math.floor(e.x);break;case $r:e.x=e.x<0?0:1;break;case jf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wf:e.y=e.y-Math.floor(e.y);break;case $r:e.y=e.y<0?0:1;break;case jf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=MS;Jt.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,n=0,i=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],v=l[9],y=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,S=(p+1)/2,R=(h+1)/2,T=(u+f)/4,A=(d+y)/4,b=(v+m)/4;return g>S&&g>R?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=T/i,s=A/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=b/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=A/s,r=b/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-v)*(m-v)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(d-y)/_,this.z=(f-u)/_,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zR extends xo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new It(0,0,e,n),this.scissorTest=!1,this.viewport=new It(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new FS(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ss extends zR{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class OS extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class VR extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],v=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=v,e[n+3]=y;return}if(d!==y||l!==f||c!==p||u!==v){let m=1-a;const h=l*f+c*p+u*v+d*y,_=h>=0?1:-1,g=1-h*h;if(g>Number.EPSILON){const R=Math.sqrt(g),T=Math.atan2(R,h*_);m=Math.sin(m*T)/R,a=Math.sin(a*T)/R}const S=a*_;if(l=l*m+f*S,c=c*m+p*S,u=u*m+v*S,d=d*m+y*S,m===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=R,c*=R,u*=R,d*=R}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+u*d+l*p-c*f,e[n+1]=l*v+u*f+c*d-a*p,e[n+2]=c*v+u*p+a*f-l*d,e[n+3]=u*v-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d-f*p*v;break;case"YXZ":this._x=f*u*d+c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d+f*p*v;break;case"ZXY":this._x=f*u*d-c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d-f*p*v;break;case"ZYX":this._x=f*u*d-c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d+f*p*v;break;case"YZX":this._x=f*u*d+c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d-f*p*v;break;case"XZY":this._x=f*u*d-c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,n=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Gv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Gv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sd.copy(this).projectOnVector(e),this.sub(sd)}reflect(e){return this.sub(sd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sd=new W,Gv=new Oa;class ka{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(On.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(On.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=On.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(s,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),dl.copy(i.boundingBox)),dl.applyMatrix4(e.matrixWorld),this.union(dl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),fl.subVectors(this.max,No),hs.subVectors(e.a,No),ps.subVectors(e.b,No),ms.subVectors(e.c,No),zi.subVectors(ps,hs),Vi.subVectors(ms,ps),br.subVectors(hs,ms);let n=[0,-zi.z,zi.y,0,-Vi.z,Vi.y,0,-br.z,br.y,zi.z,0,-zi.x,Vi.z,0,-Vi.x,br.z,0,-br.x,-zi.y,zi.x,0,-Vi.y,Vi.x,0,-br.y,br.x,0];return!od(n,hs,ps,ms,fl)||(n=[1,0,0,0,1,0,0,0,1],!od(n,hs,ps,ms,fl))?!1:(hl.crossVectors(zi,Vi),n=[hl.x,hl.y,hl.z],od(n,hs,ps,ms,fl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ui=[new W,new W,new W,new W,new W,new W,new W,new W],On=new W,dl=new ka,hs=new W,ps=new W,ms=new W,zi=new W,Vi=new W,br=new W,No=new W,fl=new W,hl=new W,Cr=new W;function od(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Cr.fromArray(t,s);const a=r.x*Math.abs(Cr.x)+r.y*Math.abs(Cr.y)+r.z*Math.abs(Cr.z),l=e.dot(Cr),c=n.dot(Cr),u=i.dot(Cr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const HR=new ka,Uo=new W,ad=new W;class Jp{constructor(e=new W,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):HR.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);const n=Uo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Uo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ad.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(ad)),this.expandByPoint(Uo.copy(e.center).sub(ad))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const di=new W,ld=new W,pl=new W,Hi=new W,cd=new W,ml=new W,ud=new W;class GR{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,n),di.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ld.copy(e).add(n).multiplyScalar(.5),pl.copy(n).sub(e).normalize(),Hi.copy(this.origin).sub(ld);const s=e.distanceTo(n)*.5,o=-this.direction.dot(pl),a=Hi.dot(this.direction),l=-Hi.dot(pl),c=Hi.lengthSq(),u=Math.abs(1-o*o);let d,f,p,v;if(u>0)if(d=o*l-a,f=o*a-l,v=s*u,d>=0)if(f>=-v)if(f<=v){const y=1/u;d*=y,f*=y,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ld).addScaledVector(pl,f),p}intersectSphere(e,n){di.subVectors(e.center,this.origin);const i=di.dot(this.direction),r=di.dot(di)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,n,i,r,s){cd.subVectors(n,e),ml.subVectors(i,e),ud.crossVectors(cd,ml);let o=this.direction.dot(ud),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hi.subVectors(this.origin,e);const l=a*this.direction.dot(ml.crossVectors(Hi,ml));if(l<0)return null;const c=a*this.direction.dot(cd.cross(Hi));if(c<0||l+c>o)return null;const u=-a*Hi.dot(ud);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,n,i,r,s,o,a,l,c,u,d,f,p,v,y,m){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,f,p,v,y,m)}set(e,n,i,r,s,o,a,l,c,u,d,f,p,v,y,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=v,h[11]=y,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/gs.setFromMatrixColumn(e,0).length(),s=1/gs.setFromMatrixColumn(e,1).length(),o=1/gs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,v=a*u,y=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+v*c,n[5]=f-y*c,n[9]=-a*l,n[2]=y-f*c,n[6]=v+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,v=c*u,y=c*d;n[0]=f+y*a,n[4]=v*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-v,n[6]=y+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,v=c*u,y=c*d;n[0]=f-y*a,n[4]=-o*d,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*u,n[9]=y-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,v=a*u,y=a*d;n[0]=l*u,n[4]=v*c-p,n[8]=f*c+y,n[1]=l*d,n[5]=y*c+f,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,v=a*l,y=a*c;n[0]=l*u,n[4]=y-f*d,n[8]=v*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+v,n[10]=f-y*d}else if(e.order==="XZY"){const f=o*l,p=o*c,v=a*l,y=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+y,n[5]=o*u,n[9]=p*d-v,n[2]=v*d-p,n[6]=a*u,n[10]=y*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(WR,e,jR)}lookAt(e,n,i){const r=this.elements;return hn.subVectors(e,n),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Gi.crossVectors(i,hn),Gi.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Gi.crossVectors(i,hn)),Gi.normalize(),gl.crossVectors(hn,Gi),r[0]=Gi.x,r[4]=gl.x,r[8]=hn.x,r[1]=Gi.y,r[5]=gl.y,r[9]=hn.y,r[2]=Gi.z,r[6]=gl.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],v=i[2],y=i[6],m=i[10],h=i[14],_=i[3],g=i[7],S=i[11],R=i[15],T=r[0],A=r[4],b=r[8],E=r[12],x=r[1],C=r[5],L=r[9],N=r[13],O=r[2],B=r[6],z=r[10],$=r[14],I=r[3],Y=r[7],q=r[11],ie=r[15];return s[0]=o*T+a*x+l*O+c*I,s[4]=o*A+a*C+l*B+c*Y,s[8]=o*b+a*L+l*z+c*q,s[12]=o*E+a*N+l*$+c*ie,s[1]=u*T+d*x+f*O+p*I,s[5]=u*A+d*C+f*B+p*Y,s[9]=u*b+d*L+f*z+p*q,s[13]=u*E+d*N+f*$+p*ie,s[2]=v*T+y*x+m*O+h*I,s[6]=v*A+y*C+m*B+h*Y,s[10]=v*b+y*L+m*z+h*q,s[14]=v*E+y*N+m*$+h*ie,s[3]=_*T+g*x+S*O+R*I,s[7]=_*A+g*C+S*B+R*Y,s[11]=_*b+g*L+S*z+R*q,s[15]=_*E+g*N+S*$+R*ie,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],v=e[3],y=e[7],m=e[11],h=e[15];return v*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*p-i*l*p)+y*(+n*l*p-n*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*d+n*a*f+r*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],v=e[12],y=e[13],m=e[14],h=e[15],_=d*m*c-y*f*c+y*l*p-a*m*p-d*l*h+a*f*h,g=v*f*c-u*m*c-v*l*p+o*m*p+u*l*h-o*f*h,S=u*y*c-v*d*c+v*a*p-o*y*p-u*a*h+o*d*h,R=v*d*l-u*y*l-v*a*f+o*y*f+u*a*m-o*d*m,T=n*_+i*g+r*S+s*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=_*A,e[1]=(y*f*s-d*m*s-y*r*p+i*m*p+d*r*h-i*f*h)*A,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*h+i*l*h)*A,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*p-i*l*p)*A,e[4]=g*A,e[5]=(u*m*s-v*f*s+v*r*p-n*m*p-u*r*h+n*f*h)*A,e[6]=(v*l*s-o*m*s-v*r*c+n*m*c+o*r*h-n*l*h)*A,e[7]=(o*f*s-u*l*s+u*r*c-n*f*c-o*r*p+n*l*p)*A,e[8]=S*A,e[9]=(v*d*s-u*y*s-v*i*p+n*y*p+u*i*h-n*d*h)*A,e[10]=(o*y*s-v*a*s+v*i*c-n*y*c-o*i*h+n*a*h)*A,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*p-n*a*p)*A,e[12]=R*A,e[13]=(u*y*r-v*d*r+v*i*f-n*y*f-u*i*m+n*d*m)*A,e[14]=(v*a*r-o*y*r-v*i*l+n*y*l+o*i*m-n*a*m)*A,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*f+n*a*f)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,v=s*d,y=o*u,m=o*d,h=a*d,_=l*c,g=l*u,S=l*d,R=i.x,T=i.y,A=i.z;return r[0]=(1-(y+h))*R,r[1]=(p+S)*R,r[2]=(v-g)*R,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(f+h))*T,r[6]=(m+_)*T,r[7]=0,r[8]=(v+g)*A,r[9]=(m-_)*A,r[10]=(1-(f+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=gs.set(r[0],r[1],r[2]).length();const o=gs.set(r[4],r[5],r[6]).length(),a=gs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],kn.copy(this);const c=1/s,u=1/o,d=1/a;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=u,kn.elements[5]*=u,kn.elements[6]*=u,kn.elements[8]*=d,kn.elements[9]*=d,kn.elements[10]*=d,n.setFromRotationMatrix(kn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ei){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let p,v;if(a===Ei)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Nc)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ei){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),f=(n+e)*c,p=(i+r)*u;let v,y;if(a===Ei)v=(o+s)*d,y=-2*d;else if(a===Nc)v=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const gs=new W,kn=new Ct,WR=new W(0,0,0),jR=new W(1,1,1),Gi=new W,gl=new W,hn=new W,Wv=new Ct,jv=new Oa;class Ni{constructor(e=0,n=0,i=0,r=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(sn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-sn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Wv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return jv.setFromEuler(this),this.setFromQuaternion(jv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class kS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let XR=0;const Xv=new W,vs=new Oa,fi=new Ct,vl=new W,Fo=new W,$R=new W,YR=new Oa,$v=new W(1,0,0),Yv=new W(0,1,0),Kv=new W(0,0,1),qv={type:"added"},KR={type:"removed"},_s={type:"childadded",child:null},dd={type:"childremoved",child:null};class _n extends xo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:XR++}),this.uuid=Fa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const e=new W,n=new Ni,i=new Oa,r=new W(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Ge}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return vs.setFromAxisAngle(e,n),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,n){return vs.setFromAxisAngle(e,n),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis($v,e)}rotateY(e){return this.rotateOnAxis(Yv,e)}rotateZ(e){return this.rotateOnAxis(Kv,e)}translateOnAxis(e,n){return Xv.copy(e).applyQuaternion(this.quaternion),this.position.add(Xv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis($v,e)}translateY(e){return this.translateOnAxis(Yv,e)}translateZ(e){return this.translateOnAxis(Kv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?vl.copy(e):vl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(Fo,vl,this.up):fi.lookAt(vl,Fo,this.up),this.quaternion.setFromRotationMatrix(fi),r&&(fi.extractRotation(r.matrixWorld),vs.setFromRotationMatrix(fi),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qv),_s.child=e,this.dispatchEvent(_s),_s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(KR),dd.child=e,this.dispatchEvent(dd),dd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qv),_s.child=e,this.dispatchEvent(_s),_s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,e,$R),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,YR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}_n.DEFAULT_UP=new W(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new W,hi=new W,fd=new W,pi=new W,ys=new W,xs=new W,Zv=new W,hd=new W,pd=new W,md=new W;class ei{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Bn.subVectors(e,n),r.cross(Bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Bn.subVectors(r,n),hi.subVectors(i,n),fd.subVectors(e,n);const o=Bn.dot(Bn),a=Bn.dot(hi),l=Bn.dot(fd),c=hi.dot(hi),u=hi.dot(fd),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,v=(o*u-a*l)*f;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,pi.x),l.addScaledVector(o,pi.y),l.addScaledVector(a,pi.z),l)}static isFrontFacing(e,n,i,r){return Bn.subVectors(i,n),hi.subVectors(e,n),Bn.cross(hi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Bn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ei.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ei.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ys.subVectors(r,i),xs.subVectors(s,i),hd.subVectors(e,i);const l=ys.dot(hd),c=xs.dot(hd);if(l<=0&&c<=0)return n.copy(i);pd.subVectors(e,r);const u=ys.dot(pd),d=xs.dot(pd);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(ys,o);md.subVectors(e,s);const p=ys.dot(md),v=xs.dot(md);if(v>=0&&p<=v)return n.copy(s);const y=p*c-l*v;if(y<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(xs,a);const m=u*v-p*d;if(m<=0&&d-u>=0&&p-v>=0)return Zv.subVectors(s,r),a=(d-u)/(d-u+(p-v)),n.copy(r).addScaledVector(Zv,a);const h=1/(m+y+f);return o=y*h,a=f*h,n.copy(i).addScaledVector(ys,o).addScaledVector(xs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const BS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},_l={h:0,s:0,l:0};function gd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class rt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=IR(e,1),n=sn(n,0,1),i=sn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=gd(o,s,e+1/3),this.g=gd(o,s,e),this.b=gd(o,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,n=Zn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Zn){const i=BS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}copyLinearToSRGB(e){return this.r=id(e.r),this.g=id(e.g),this.b=id(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return nt.fromWorkingColorSpace(Wt.copy(this),e),Math.round(sn(Wt.r*255,0,255))*65536+Math.round(sn(Wt.g*255,0,255))*256+Math.round(sn(Wt.b*255,0,255))}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.fromWorkingColorSpace(Wt.copy(this),n);const i=Wt.r,r=Wt.g,s=Wt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=nt.workingColorSpace){return nt.fromWorkingColorSpace(Wt.copy(this),n),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Zn){nt.fromWorkingColorSpace(Wt.copy(this),e);const n=Wt.r,i=Wt.g,r=Wt.b;return e!==Zn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+n,Wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Wi),e.getHSL(_l);const i=td(Wi.h,_l.h,n),r=td(Wi.s,_l.s,n),s=td(Wi.l,_l.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new rt;rt.NAMES=BS;let qR=0;class ou extends xo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qR++}),this.uuid=Fa(),this.name="",this.type="Material",this.blending=Zs,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zf,this.blendDst=Vf,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Pc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ov,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(i.blending=this.blending),this.side!==vr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zf&&(i.blendSrc=this.blendSrc),this.blendDst!==Vf&&(i.blendDst=this.blendDst),this.blendEquation!==zr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Pc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ov&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class em extends ou{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=SS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new W,yl=new qe;class oi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=kv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return US("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)yl.fromBufferAttribute(this,n),yl.applyMatrix3(e),this.setXY(n,yl.x,yl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Io(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Io(n,this.array)),n}setX(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Io(n,this.array)),n}setY(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Io(n,this.array)),n}setZ(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Io(n,this.array)),n}setW(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kv&&(e.usage=this.usage),e}}class zS extends oi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class VS extends oi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ai extends oi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let ZR=0;const Tn=new Ct,vd=new _n,Ss=new W,pn=new ka,Oo=new ka,Lt=new W;class wr extends xo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZR++}),this.uuid=Fa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(NS(e)?VS:zS)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,n,i){return Tn.makeTranslation(e,n,i),this.applyMatrix4(Tn),this}scale(e,n,i){return Tn.makeScale(e,n,i),this.applyMatrix4(Tn),this}lookAt(e){return vd.lookAt(e),vd.updateMatrix(),this.applyMatrix4(vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ai(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ka);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jp);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Oo.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(pn.min,Oo.min),pn.expandByPoint(Lt),Lt.addVectors(pn.max,Oo.max),pn.expandByPoint(Lt)):(pn.expandByPoint(Oo.min),pn.expandByPoint(Oo.max))}pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Lt.fromBufferAttribute(a,c),l&&(Ss.fromBufferAttribute(e,c),Lt.add(Ss)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new W,l[b]=new W;const c=new W,u=new W,d=new W,f=new qe,p=new qe,v=new qe,y=new W,m=new W;function h(b,E,x){c.fromBufferAttribute(i,b),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,x),f.fromBufferAttribute(s,b),p.fromBufferAttribute(s,E),v.fromBufferAttribute(s,x),u.sub(c),d.sub(c),p.sub(f),v.sub(f);const C=1/(p.x*v.y-v.x*p.y);isFinite(C)&&(y.copy(u).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(C),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(C),a[b].add(y),a[E].add(y),a[x].add(y),l[b].add(m),l[E].add(m),l[x].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let b=0,E=_.length;b<E;++b){const x=_[b],C=x.start,L=x.count;for(let N=C,O=C+L;N<O;N+=3)h(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const g=new W,S=new W,R=new W,T=new W;function A(b){R.fromBufferAttribute(r,b),T.copy(R);const E=a[b];g.copy(E),g.sub(R.multiplyScalar(R.dot(E))).normalize(),S.crossVectors(T,E);const C=S.dot(l[b])<0?-1:1;o.setXYZW(b,g.x,g.y,g.z,C)}for(let b=0,E=_.length;b<E;++b){const x=_[b],C=x.start,L=x.count;for(let N=C,O=C+L;N<O;N+=3)A(e.getX(N+0)),A(e.getX(N+1)),A(e.getX(N+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new oi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new W,s=new W,o=new W,a=new W,l=new W,c=new W,u=new W,d=new W;if(e)for(let f=0,p=e.count;f<p;f+=3){const v=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Lt.fromBufferAttribute(e,n),Lt.normalize(),e.setXYZ(n,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,v=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let h=0;h<u;h++)f[v++]=c[p++]}return new oi(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new wr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qv=new Ct,Rr=new GR,xl=new Jp,Jv=new W,Ms=new W,Es=new W,ws=new W,_d=new W,Sl=new W,Ml=new qe,El=new qe,wl=new qe,e0=new W,t0=new W,n0=new W,Tl=new W,Al=new W;class ni extends _n{constructor(e=new wr,n=new em){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Sl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(_d.fromBufferAttribute(d,e),o?Sl.addScaledVector(_d,u):Sl.addScaledVector(_d.sub(n),u))}n.add(Sl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xl.copy(i.boundingSphere),xl.applyMatrix4(s),Rr.copy(e.ray).recast(e.near),!(xl.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(xl,Jv)===null||Rr.origin.distanceToSquared(Jv)>(e.far-e.near)**2))&&(Qv.copy(s).invert(),Rr.copy(e.ray).applyMatrix4(Qv),!(i.boundingBox!==null&&Rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Rr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,y=f.length;v<y;v++){const m=f[v],h=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=_,R=g;S<R;S+=3){const T=a.getX(S),A=a.getX(S+1),b=a.getX(S+2);r=bl(this,h,e,i,c,u,d,T,A,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=v,h=y;m<h;m+=3){const _=a.getX(m),g=a.getX(m+1),S=a.getX(m+2);r=bl(this,o,e,i,c,u,d,_,g,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,y=f.length;v<y;v++){const m=f[v],h=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=_,R=g;S<R;S+=3){const T=S,A=S+1,b=S+2;r=bl(this,h,e,i,c,u,d,T,A,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=v,h=y;m<h;m+=3){const _=m,g=m+1,S=m+2;r=bl(this,o,e,i,c,u,d,_,g,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function QR(t,e,n,i,r,s,o,a){let l;if(e.side===un?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===vr,a),l===null)return null;Al.copy(a),Al.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Al);return c<n.near||c>n.far?null:{distance:c,point:Al.clone(),object:t}}function bl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ms),t.getVertexPosition(l,Es),t.getVertexPosition(c,ws);const u=QR(t,e,n,i,Ms,Es,ws,Tl);if(u){r&&(Ml.fromBufferAttribute(r,a),El.fromBufferAttribute(r,l),wl.fromBufferAttribute(r,c),u.uv=ei.getInterpolation(Tl,Ms,Es,ws,Ml,El,wl,new qe)),s&&(Ml.fromBufferAttribute(s,a),El.fromBufferAttribute(s,l),wl.fromBufferAttribute(s,c),u.uv1=ei.getInterpolation(Tl,Ms,Es,ws,Ml,El,wl,new qe)),o&&(e0.fromBufferAttribute(o,a),t0.fromBufferAttribute(o,l),n0.fromBufferAttribute(o,c),u.normal=ei.getInterpolation(Tl,Ms,Es,ws,e0,t0,n0,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new W,materialIndex:0};ei.getNormal(Ms,Es,ws,d.normal),u.face=d}return u}class Ba extends wr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ai(c,3)),this.setAttribute("normal",new ai(u,3)),this.setAttribute("uv",new ai(d,2));function v(y,m,h,_,g,S,R,T,A,b,E){const x=S/A,C=R/b,L=S/2,N=R/2,O=T/2,B=A+1,z=b+1;let $=0,I=0;const Y=new W;for(let q=0;q<z;q++){const ie=q*C-N;for(let ge=0;ge<B;ge++){const Ne=ge*x-L;Y[y]=Ne*_,Y[m]=ie*g,Y[h]=O,c.push(Y.x,Y.y,Y.z),Y[y]=0,Y[m]=0,Y[h]=T>0?1:-1,u.push(Y.x,Y.y,Y.z),d.push(ge/A),d.push(1-q/b),$+=1}}for(let q=0;q<b;q++)for(let ie=0;ie<A;ie++){const ge=f+ie+B*q,Ne=f+ie+B*(q+1),X=f+(ie+1)+B*(q+1),Q=f+(ie+1)+B*q;l.push(ge,Ne,Q),l.push(Ne,X,Q),I+=6}a.addGroup(p,I,E),p+=I,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ba(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function po(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function qt(t){const e={};for(let n=0;n<t.length;n++){const i=po(t[n]);for(const r in i)e[r]=i[r]}return e}function JR(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function HS(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const eP={clone:po,merge:qt};var tP=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _r extends ou{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tP,this.fragmentShader=nP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=po(e.uniforms),this.uniformsGroups=JR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class GS extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=Ei}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ji=new W,i0=new qe,r0=new qe;class Rn extends GS{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=_h*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ed*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _h*2*Math.atan(Math.tan(ed*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,n){return this.getViewBounds(e,i0,r0),n.subVectors(r0,i0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ed*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ts=-90,As=1;class iP extends _n{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Rn(Ts,As,e,n);r.layers=this.layers,this.add(r);const s=new Rn(Ts,As,e,n);s.layers=this.layers,this.add(s);const o=new Rn(Ts,As,e,n);o.layers=this.layers,this.add(o);const a=new Rn(Ts,As,e,n);a.layers=this.layers,this.add(a);const l=new Rn(Ts,As,e,n);l.layers=this.layers,this.add(l);const c=new Rn(Ts,As,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Nc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,f,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class WS extends Jt{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:co,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rP extends ss{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new WS(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Gn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ba(5,5,5),s=new _r({name:"CubemapFromEquirect",uniforms:po(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:dr});s.uniforms.tEquirect.value=n;const o=new ni(r,s),a=n.minFilter;return n.minFilter===Yr&&(n.minFilter=Gn),new iP(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const yd=new W,sP=new W,oP=new Ge;class kr{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=yd.subVectors(i,n).cross(sP.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(yd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||oP.getNormalMatrix(e),r=this.coplanarPoint(yd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pr=new Jp,Cl=new W;class jS{constructor(e=new kr,n=new kr,i=new kr,r=new kr,s=new kr,o=new kr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ei){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],p=r[8],v=r[9],y=r[10],m=r[11],h=r[12],_=r[13],g=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,m-p,S-h).normalize(),i[1].setComponents(l+s,f+c,m+p,S+h).normalize(),i[2].setComponents(l+o,f+u,m+v,S+_).normalize(),i[3].setComponents(l-o,f-u,m-v,S-_).normalize(),i[4].setComponents(l-a,f-d,m-y,S-g).normalize(),n===Ei)i[5].setComponents(l+a,f+d,m+y,S+g).normalize();else if(n===Nc)i[5].setComponents(a,d,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(e){return Pr.center.set(0,0,0),Pr.radius=.7071067811865476,Pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Cl.x=r.normal.x>0?e.max.x:e.min.x,Cl.y=r.normal.y>0?e.max.y:e.min.y,Cl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Cl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function XS(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function aP(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l._updateRange,f=l.updateRanges;if(t.bindBuffer(c,a),d.count===-1&&f.length===0&&t.bufferSubData(c,0,u),f.length!==0){for(let p=0,v=f.length;p<v;p++){const y=f[p];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}d.count!==-1&&(t.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class au extends wr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=n/l,p=[],v=[],y=[],m=[];for(let h=0;h<u;h++){const _=h*f-o;for(let g=0;g<c;g++){const S=g*d-s;v.push(S,-_,0),y.push(0,0,1),m.push(g/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<a;_++){const g=_+c*h,S=_+c*(h+1),R=_+1+c*(h+1),T=_+1+c*h;p.push(g,S,T),p.push(S,R,T)}this.setIndex(p),this.setAttribute("position",new ai(v,3)),this.setAttribute("normal",new ai(y,3)),this.setAttribute("uv",new ai(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new au(e.width,e.height,e.widthSegments,e.heightSegments)}}var lP=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cP=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dP=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fP=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hP=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pP=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mP=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gP=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,vP=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_P=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yP=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xP=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,SP=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,MP=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,EP=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,TP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AP=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bP=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,CP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,RP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,PP=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,LP=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,DP=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,IP=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,NP=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,UP=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FP=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OP=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kP="gl_FragColor = linearToOutputTexel( gl_FragColor );",BP=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,zP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,VP=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,HP=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,GP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$P=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,YP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,KP=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QP=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JP=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,e2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,t2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,o2=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,a2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,l2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,c2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,d2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,p2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,v2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,y2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,w2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,A2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,b2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,P2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,L2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,D2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,N2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,U2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,F2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,O2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,z2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,W2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,j2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,X2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Y2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,K2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,q2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Z2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Q2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eL=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tL=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nL=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,iL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,oL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lL=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uL=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fL=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pL=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,mL=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gL=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_L=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yL=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xL=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ML=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EL=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wL=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TL=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,AL=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bL=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,CL=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,RL=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PL=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LL=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,DL=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IL=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NL=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UL=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,FL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OL=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kL=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,BL=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:lP,alphahash_pars_fragment:cP,alphamap_fragment:uP,alphamap_pars_fragment:dP,alphatest_fragment:fP,alphatest_pars_fragment:hP,aomap_fragment:pP,aomap_pars_fragment:mP,batching_pars_vertex:gP,batching_vertex:vP,begin_vertex:_P,beginnormal_vertex:yP,bsdfs:xP,iridescence_fragment:SP,bumpmap_pars_fragment:MP,clipping_planes_fragment:EP,clipping_planes_pars_fragment:wP,clipping_planes_pars_vertex:TP,clipping_planes_vertex:AP,color_fragment:bP,color_pars_fragment:CP,color_pars_vertex:RP,color_vertex:PP,common:LP,cube_uv_reflection_fragment:DP,defaultnormal_vertex:IP,displacementmap_pars_vertex:NP,displacementmap_vertex:UP,emissivemap_fragment:FP,emissivemap_pars_fragment:OP,colorspace_fragment:kP,colorspace_pars_fragment:BP,envmap_fragment:zP,envmap_common_pars_fragment:VP,envmap_pars_fragment:HP,envmap_pars_vertex:GP,envmap_physical_pars_fragment:e2,envmap_vertex:WP,fog_vertex:jP,fog_pars_vertex:XP,fog_fragment:$P,fog_pars_fragment:YP,gradientmap_pars_fragment:KP,lightmap_pars_fragment:qP,lights_lambert_fragment:ZP,lights_lambert_pars_fragment:QP,lights_pars_begin:JP,lights_toon_fragment:t2,lights_toon_pars_fragment:n2,lights_phong_fragment:i2,lights_phong_pars_fragment:r2,lights_physical_fragment:s2,lights_physical_pars_fragment:o2,lights_fragment_begin:a2,lights_fragment_maps:l2,lights_fragment_end:c2,logdepthbuf_fragment:u2,logdepthbuf_pars_fragment:d2,logdepthbuf_pars_vertex:f2,logdepthbuf_vertex:h2,map_fragment:p2,map_pars_fragment:m2,map_particle_fragment:g2,map_particle_pars_fragment:v2,metalnessmap_fragment:_2,metalnessmap_pars_fragment:y2,morphinstance_vertex:x2,morphcolor_vertex:S2,morphnormal_vertex:M2,morphtarget_pars_vertex:E2,morphtarget_vertex:w2,normal_fragment_begin:T2,normal_fragment_maps:A2,normal_pars_fragment:b2,normal_pars_vertex:C2,normal_vertex:R2,normalmap_pars_fragment:P2,clearcoat_normal_fragment_begin:L2,clearcoat_normal_fragment_maps:D2,clearcoat_pars_fragment:I2,iridescence_pars_fragment:N2,opaque_fragment:U2,packing:F2,premultiplied_alpha_fragment:O2,project_vertex:k2,dithering_fragment:B2,dithering_pars_fragment:z2,roughnessmap_fragment:V2,roughnessmap_pars_fragment:H2,shadowmap_pars_fragment:G2,shadowmap_pars_vertex:W2,shadowmap_vertex:j2,shadowmask_pars_fragment:X2,skinbase_vertex:$2,skinning_pars_vertex:Y2,skinning_vertex:K2,skinnormal_vertex:q2,specularmap_fragment:Z2,specularmap_pars_fragment:Q2,tonemapping_fragment:J2,tonemapping_pars_fragment:eL,transmission_fragment:tL,transmission_pars_fragment:nL,uv_pars_fragment:iL,uv_pars_vertex:rL,uv_vertex:sL,worldpos_vertex:oL,background_vert:aL,background_frag:lL,backgroundCube_vert:cL,backgroundCube_frag:uL,cube_vert:dL,cube_frag:fL,depth_vert:hL,depth_frag:pL,distanceRGBA_vert:mL,distanceRGBA_frag:gL,equirect_vert:vL,equirect_frag:_L,linedashed_vert:yL,linedashed_frag:xL,meshbasic_vert:SL,meshbasic_frag:ML,meshlambert_vert:EL,meshlambert_frag:wL,meshmatcap_vert:TL,meshmatcap_frag:AL,meshnormal_vert:bL,meshnormal_frag:CL,meshphong_vert:RL,meshphong_frag:PL,meshphysical_vert:LL,meshphysical_frag:DL,meshtoon_vert:IL,meshtoon_frag:NL,points_vert:UL,points_frag:FL,shadow_vert:OL,shadow_frag:kL,sprite_vert:BL,sprite_frag:zL},de={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Qn={basic:{uniforms:qt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:qt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new rt(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:qt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:qt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:qt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new rt(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:qt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:qt([de.points,de.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:qt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:qt([de.common,de.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:qt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:qt([de.sprite,de.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:qt([de.common,de.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:qt([de.lights,de.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Qn.physical={uniforms:qt([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Rl={r:0,b:0,g:0},Lr=new Ni,VL=new Ct;function HL(t,e,n,i,r,s,o){const a=new rt(0);let l=s===!0?0:1,c,u,d=null,f=0,p=null;function v(_){let g=_.isScene===!0?_.background:null;return g&&g.isTexture&&(g=(_.backgroundBlurriness>0?n:e).get(g)),g}function y(_){let g=!1;const S=v(_);S===null?h(a,l):S&&S.isColor&&(h(S,1),g=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,g){const S=v(g);S&&(S.isCubeTexture||S.mapping===ru)?(u===void 0&&(u=new ni(new Ba(1,1,1),new _r({name:"BackgroundCubeMaterial",uniforms:po(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Lr.copy(g.backgroundRotation),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(VL.makeRotationFromEuler(Lr)),u.material.toneMapped=nt.getTransfer(S.colorSpace)!==lt,(d!==S||f!==S.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=S,f=S.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new ni(new au(2,2),new _r({name:"BackgroundMaterial",uniforms:po(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=nt.getTransfer(S.colorSpace)!==lt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function h(_,g){_.getRGB(Rl,HS(t)),i.buffers.color.setClear(Rl.r,Rl.g,Rl.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(_,g=1){a.set(_),l=g,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,h(a,l)},render:y,addToRenderList:m}}function GL(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(x,C,L,N,O){let B=!1;const z=d(N,L,C);s!==z&&(s=z,c(s.object)),B=p(x,N,L,O),B&&v(x,N,L,O),O!==null&&e.update(O,t.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,S(x,C,L,N),O!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return t.createVertexArray()}function c(x){return t.bindVertexArray(x)}function u(x){return t.deleteVertexArray(x)}function d(x,C,L){const N=L.wireframe===!0;let O=i[x.id];O===void 0&&(O={},i[x.id]=O);let B=O[C.id];B===void 0&&(B={},O[C.id]=B);let z=B[N];return z===void 0&&(z=f(l()),B[N]=z),z}function f(x){const C=[],L=[],N=[];for(let O=0;O<n;O++)C[O]=0,L[O]=0,N[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:L,attributeDivisors:N,object:x,attributes:{},index:null}}function p(x,C,L,N){const O=s.attributes,B=C.attributes;let z=0;const $=L.getAttributes();for(const I in $)if($[I].location>=0){const q=O[I];let ie=B[I];if(ie===void 0&&(I==="instanceMatrix"&&x.instanceMatrix&&(ie=x.instanceMatrix),I==="instanceColor"&&x.instanceColor&&(ie=x.instanceColor)),q===void 0||q.attribute!==ie||ie&&q.data!==ie.data)return!0;z++}return s.attributesNum!==z||s.index!==N}function v(x,C,L,N){const O={},B=C.attributes;let z=0;const $=L.getAttributes();for(const I in $)if($[I].location>=0){let q=B[I];q===void 0&&(I==="instanceMatrix"&&x.instanceMatrix&&(q=x.instanceMatrix),I==="instanceColor"&&x.instanceColor&&(q=x.instanceColor));const ie={};ie.attribute=q,q&&q.data&&(ie.data=q.data),O[I]=ie,z++}s.attributes=O,s.attributesNum=z,s.index=N}function y(){const x=s.newAttributes;for(let C=0,L=x.length;C<L;C++)x[C]=0}function m(x){h(x,0)}function h(x,C){const L=s.newAttributes,N=s.enabledAttributes,O=s.attributeDivisors;L[x]=1,N[x]===0&&(t.enableVertexAttribArray(x),N[x]=1),O[x]!==C&&(t.vertexAttribDivisor(x,C),O[x]=C)}function _(){const x=s.newAttributes,C=s.enabledAttributes;for(let L=0,N=C.length;L<N;L++)C[L]!==x[L]&&(t.disableVertexAttribArray(L),C[L]=0)}function g(x,C,L,N,O,B,z){z===!0?t.vertexAttribIPointer(x,C,L,O,B):t.vertexAttribPointer(x,C,L,N,O,B)}function S(x,C,L,N){y();const O=N.attributes,B=L.getAttributes(),z=C.defaultAttributeValues;for(const $ in B){const I=B[$];if(I.location>=0){let Y=O[$];if(Y===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(Y=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(Y=x.instanceColor)),Y!==void 0){const q=Y.normalized,ie=Y.itemSize,ge=e.get(Y);if(ge===void 0)continue;const Ne=ge.buffer,X=ge.type,Q=ge.bytesPerElement,ce=X===t.INT||X===t.UNSIGNED_INT||Y.gpuType===Xp;if(Y.isInterleavedBufferAttribute){const re=Y.data,xe=re.stride,Te=Y.offset;if(re.isInstancedInterleavedBuffer){for(let De=0;De<I.locationSize;De++)h(I.location+De,re.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let De=0;De<I.locationSize;De++)m(I.location+De);t.bindBuffer(t.ARRAY_BUFFER,Ne);for(let De=0;De<I.locationSize;De++)g(I.location+De,ie/I.locationSize,X,q,xe*Q,(Te+ie/I.locationSize*De)*Q,ce)}else{if(Y.isInstancedBufferAttribute){for(let re=0;re<I.locationSize;re++)h(I.location+re,Y.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let re=0;re<I.locationSize;re++)m(I.location+re);t.bindBuffer(t.ARRAY_BUFFER,Ne);for(let re=0;re<I.locationSize;re++)g(I.location+re,ie/I.locationSize,X,q,ie*Q,ie/I.locationSize*re*Q,ce)}}else if(z!==void 0){const q=z[$];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(I.location,q);break;case 3:t.vertexAttrib3fv(I.location,q);break;case 4:t.vertexAttrib4fv(I.location,q);break;default:t.vertexAttrib1fv(I.location,q)}}}}_()}function R(){b();for(const x in i){const C=i[x];for(const L in C){const N=C[L];for(const O in N)u(N[O].object),delete N[O];delete C[L]}delete i[x]}}function T(x){if(i[x.id]===void 0)return;const C=i[x.id];for(const L in C){const N=C[L];for(const O in N)u(N[O].object),delete N[O];delete C[L]}delete i[x.id]}function A(x){for(const C in i){const L=i[C];if(L[x.id]===void 0)continue;const N=L[x.id];for(const O in N)u(N[O].object),delete N[O];delete L[x.id]}}function b(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:_}}function WL(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let v=0;v<d;v++)p+=u[v];n.update(p,i,1)}function l(c,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],u[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let v=0;for(let y=0;y<d;y++)v+=u[y];for(let y=0;y<f.length;y++)n.update(v,i,f[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function jL(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Wn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const A=T===Ua&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Ii&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Mi&&!A)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),h=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=p>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:h,maxVaryings:_,maxFragmentUniforms:g,vertexTextures:S,maxSamples:R}}function XL(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new kr,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){const v=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,h=t.get(d);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const _=s?0:i,g=_*4;let S=h.clippingState||null;l.value=S,S=u(v,f,g,p);for(let R=0;R!==g;++R)S[R]=n[R];h.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,v){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=l.value,v!==!0||m===null){const h=p+y*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<h)&&(m=new Float32Array(h));for(let g=0,S=p;g!==y;++g,S+=4)o.copy(d[g]).applyMatrix4(_,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function $L(t){let e=new WeakMap;function n(o,a){return a===Hf?o.mapping=co:a===Gf&&(o.mapping=uo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Hf||a===Gf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new rP(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class YL extends GS{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ws=4,s0=[.125,.215,.35,.446,.526,.582],Vr=20,xd=new YL,o0=new rt;let Sd=null,Md=0,Ed=0,wd=!1;const Br=(1+Math.sqrt(5))/2,bs=1/Br,a0=[new W(-Br,bs,0),new W(Br,bs,0),new W(-bs,0,Br),new W(bs,0,Br),new W(0,Br,-bs),new W(0,Br,bs),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class l0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Sd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=d0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=u0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sd,Md,Ed),this._renderer.xr.enabled=wd,e.scissorTest=!1,Pl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===co||e.mapping===uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Ua,format:Wn,colorSpace:Er,depthBuffer:!1},r=c0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=c0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=KL(s)),this._blurMaterial=qL(s,e,n)}return r}_compileMaterial(e){const n=new ni(this._lodPlanes[0],e);this._renderer.compile(n,xd)}_sceneToCubeUV(e,n,i,r){const a=new Rn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(o0),u.toneMapping=fr,u.autoClear=!1;const p=new em({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),v=new ni(new Ba,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(o0),y=!0);for(let h=0;h<6;h++){const _=h%3;_===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):_===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const g=this._cubeSize;Pl(r,_*g,h>2?g:0,g,g),u.setRenderTarget(r),y&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===co||e.mapping===uo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=d0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=u0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ni(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Pl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,xd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=a0[(r-s-1)%a0.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new ni(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Vr-1),y=s/v,m=isFinite(s)?1+Math.floor(u*y):Vr;m>Vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vr}`);const h=[];let _=0;for(let A=0;A<Vr;++A){const b=A/y,E=Math.exp(-b*b/2);h.push(E),A===0?_+=E:A<m&&(_+=2*E)}for(let A=0;A<h.length;A++)h[A]=h[A]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:g}=this;f.dTheta.value=v,f.mipInt.value=g-i;const S=this._sizeLods[r],R=3*S*(r>g-Ws?r-g+Ws:0),T=4*(this._cubeSize-S);Pl(n,R,T,3*S,2*S),l.setRenderTarget(n),l.render(d,xd)}}function KL(t){const e=[],n=[],i=[];let r=t;const s=t-Ws+1+s0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ws?l=s0[o-t+Ws-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,v=6,y=3,m=2,h=1,_=new Float32Array(y*v*p),g=new Float32Array(m*v*p),S=new Float32Array(h*v*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,b=T>2?0:-1,E=[A,b,0,A+2/3,b,0,A+2/3,b+1,0,A,b,0,A+2/3,b+1,0,A,b+1,0];_.set(E,y*v*T),g.set(f,m*v*T);const x=[T,T,T,T,T,T];S.set(x,h*v*T)}const R=new wr;R.setAttribute("position",new oi(_,y)),R.setAttribute("uv",new oi(g,m)),R.setAttribute("faceIndex",new oi(S,h)),e.push(R),r>Ws&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function c0(t,e,n){const i=new ss(t,e,n);return i.texture.mapping=ru,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Pl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function qL(t,e,n){const i=new Float32Array(Vr),r=new W(0,1,0);return new _r({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:tm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function u0(){return new _r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function d0(){return new _r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function tm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ZL(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Hf||l===Gf,u=l===co||l===uo;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new l0(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new l0(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function QL(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&US("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function JL(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const y=f.morphAttributes[v];for(let m=0,h=y.length;m<h;m++)e.remove(y[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)e.update(f[v],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const v in p){const y=p[v];for(let m=0,h=y.length;m<h;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,v=d.attributes.position;let y=0;if(p!==null){const _=p.array;y=p.version;for(let g=0,S=_.length;g<S;g+=3){const R=_[g+0],T=_[g+1],A=_[g+2];f.push(R,T,T,A,A,R)}}else if(v!==void 0){const _=v.array;y=v.version;for(let g=0,S=_.length/3-1;g<S;g+=3){const R=g+0,T=g+1,A=g+2;f.push(R,T,T,A,A,R)}}else return;const m=new(NS(f)?VS:zS)(f,1);m.version=y;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function eD(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function c(f,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,f*o,v),n.update(p,i,v))}function u(f,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,v);let m=0;for(let h=0;h<v;h++)m+=p[h];n.update(m,i,1)}function d(f,p,v,y){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/o,p[h],y[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,y,0,v);let h=0;for(let _=0;_<v;_++)h+=p[_];for(let _=0;_<y.length;_++)n.update(h,i,y[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function tD(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function nD(t,e,n){const i=new WeakMap,r=new It;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let x=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var p=x;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let S=0;v===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let R=a.attributes.position.count*S,T=1;R>e.maxTextureSize&&(T=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const A=new Float32Array(R*T*4*d),b=new OS(A,R,T,d);b.type=Mi,b.needsUpdate=!0;const E=S*4;for(let C=0;C<d;C++){const L=h[C],N=_[C],O=g[C],B=R*T*4*C;for(let z=0;z<L.count;z++){const $=z*E;v===!0&&(r.fromBufferAttribute(L,z),A[B+$+0]=r.x,A[B+$+1]=r.y,A[B+$+2]=r.z,A[B+$+3]=0),y===!0&&(r.fromBufferAttribute(N,z),A[B+$+4]=r.x,A[B+$+5]=r.y,A[B+$+6]=r.z,A[B+$+7]=0),m===!0&&(r.fromBufferAttribute(O,z),A[B+$+8]=r.x,A[B+$+9]=r.y,A[B+$+10]=r.z,A[B+$+11]=O.itemSize===4?r.w:1)}}f={count:d,texture:b,size:new qe(R,T)},i.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const y=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function iD(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class $S extends Jt{constructor(e,n,i,r,s,o,a,l,c,u=Qs){if(u!==Qs&&u!==ho)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Qs&&(i=rs),i===void 0&&u===ho&&(i=fo),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Ln,this.minFilter=l!==void 0?l:Ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const YS=new Jt,f0=new $S(1,1),KS=new OS,qS=new VR,ZS=new WS,h0=[],p0=[],m0=new Float32Array(16),g0=new Float32Array(9),v0=new Float32Array(4);function So(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=h0[r];if(s===void 0&&(s=new Float32Array(r),h0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function lu(t,e){let n=p0[e];n===void 0&&(n=new Int32Array(e),p0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function rD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function sD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function oD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function aD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function lD(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;v0.set(i),t.uniformMatrix2fv(this.addr,!1,v0),Pt(n,i)}}function cD(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;g0.set(i),t.uniformMatrix3fv(this.addr,!1,g0),Pt(n,i)}}function uD(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;m0.set(i),t.uniformMatrix4fv(this.addr,!1,m0),Pt(n,i)}}function dD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function fD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function hD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function pD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function mD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function gD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function vD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function _D(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function yD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(f0.compareFunction=IS,s=f0):s=YS,n.setTexture2D(e||s,r)}function xD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||qS,r)}function SD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||ZS,r)}function MD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||KS,r)}function ED(t){switch(t){case 5126:return rD;case 35664:return sD;case 35665:return oD;case 35666:return aD;case 35674:return lD;case 35675:return cD;case 35676:return uD;case 5124:case 35670:return dD;case 35667:case 35671:return fD;case 35668:case 35672:return hD;case 35669:case 35673:return pD;case 5125:return mD;case 36294:return gD;case 36295:return vD;case 36296:return _D;case 35678:case 36198:case 36298:case 36306:case 35682:return yD;case 35679:case 36299:case 36307:return xD;case 35680:case 36300:case 36308:case 36293:return SD;case 36289:case 36303:case 36311:case 36292:return MD}}function wD(t,e){t.uniform1fv(this.addr,e)}function TD(t,e){const n=So(e,this.size,2);t.uniform2fv(this.addr,n)}function AD(t,e){const n=So(e,this.size,3);t.uniform3fv(this.addr,n)}function bD(t,e){const n=So(e,this.size,4);t.uniform4fv(this.addr,n)}function CD(t,e){const n=So(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function RD(t,e){const n=So(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function PD(t,e){const n=So(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function LD(t,e){t.uniform1iv(this.addr,e)}function DD(t,e){t.uniform2iv(this.addr,e)}function ID(t,e){t.uniform3iv(this.addr,e)}function ND(t,e){t.uniform4iv(this.addr,e)}function UD(t,e){t.uniform1uiv(this.addr,e)}function FD(t,e){t.uniform2uiv(this.addr,e)}function OD(t,e){t.uniform3uiv(this.addr,e)}function kD(t,e){t.uniform4uiv(this.addr,e)}function BD(t,e,n){const i=this.cache,r=e.length,s=lu(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||YS,s[o])}function zD(t,e,n){const i=this.cache,r=e.length,s=lu(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||qS,s[o])}function VD(t,e,n){const i=this.cache,r=e.length,s=lu(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||ZS,s[o])}function HD(t,e,n){const i=this.cache,r=e.length,s=lu(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||KS,s[o])}function GD(t){switch(t){case 5126:return wD;case 35664:return TD;case 35665:return AD;case 35666:return bD;case 35674:return CD;case 35675:return RD;case 35676:return PD;case 5124:case 35670:return LD;case 35667:case 35671:return DD;case 35668:case 35672:return ID;case 35669:case 35673:return ND;case 5125:return UD;case 36294:return FD;case 36295:return OD;case 36296:return kD;case 35678:case 36198:case 36298:case 36306:case 35682:return BD;case 35679:case 36299:case 36307:return zD;case 35680:case 36300:case 36308:case 36293:return VD;case 36289:case 36303:case 36311:case 36292:return HD}}class WD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ED(n.type)}}class jD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=GD(n.type)}}class XD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Td=/(\w+)(\])?(\[|\.)?/g;function _0(t,e){t.seq.push(e),t.map[e.id]=e}function $D(t,e,n){const i=t.name,r=i.length;for(Td.lastIndex=0;;){const s=Td.exec(i),o=Td.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){_0(n,c===void 0?new WD(a,t,e):new jD(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new XD(a),_0(n,d)),n=d}}}class Ql{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);$D(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function y0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const YD=37297;let KD=0;function qD(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function ZD(t){const e=nt.getPrimaries(nt.workingColorSpace),n=nt.getPrimaries(t);let i;switch(e===n?i="":e===Ic&&n===Dc?i="LinearDisplayP3ToLinearSRGB":e===Dc&&n===Ic&&(i="LinearSRGBToLinearDisplayP3"),t){case Er:case su:return[i,"LinearTransferOETF"];case Zn:case Qp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function x0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+qD(t.getShaderSource(e),o)}else return r}function QD(t,e){const n=ZD(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function JD(t,e){let n;switch(e){case pR:n="Linear";break;case mR:n="Reinhard";break;case gR:n="OptimizedCineon";break;case vR:n="ACESFilmic";break;case yR:n="AgX";break;case xR:n="Neutral";break;case _R:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function e3(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function t3(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function n3(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Go(t){return t!==""}function S0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function M0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const i3=/^[ \t]*#include +<([\w\d./]+)>/gm;function yh(t){return t.replace(i3,s3)}const r3=new Map;function s3(t,e){let n=He[e];if(n===void 0){const i=r3.get(e);if(i!==void 0)n=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return yh(n)}const o3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function E0(t){return t.replace(o3,a3)}function a3(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function w0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function l3(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===xS?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===zC?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function c3(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case co:case uo:e="ENVMAP_TYPE_CUBE";break;case ru:e="ENVMAP_TYPE_CUBE_UV";break}return e}function u3(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case uo:e="ENVMAP_MODE_REFRACTION";break}return e}function d3(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case SS:e="ENVMAP_BLENDING_MULTIPLY";break;case fR:e="ENVMAP_BLENDING_MIX";break;case hR:e="ENVMAP_BLENDING_ADD";break}return e}function f3(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function h3(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=l3(n),c=c3(n),u=u3(n),d=d3(n),f=f3(n),p=e3(n),v=t3(s),y=r.createProgram();let m,h,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Go).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Go).join(`
`),h.length>0&&(h+=`
`)):(m=[w0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),h=[w0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==fr?"#define TONE_MAPPING":"",n.toneMapping!==fr?He.tonemapping_pars_fragment:"",n.toneMapping!==fr?JD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,QD("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Go).join(`
`)),o=yh(o),o=S0(o,n),o=M0(o,n),a=yh(a),a=S0(a,n),a=M0(a,n),o=E0(o),a=E0(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===Bv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Bv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const g=_+m+o,S=_+h+a,R=y0(r,r.VERTEX_SHADER,g),T=y0(r,r.FRAGMENT_SHADER,S);r.attachShader(y,R),r.attachShader(y,T),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(C){if(t.debug.checkShaderErrors){const L=r.getProgramInfoLog(y).trim(),N=r.getShaderInfoLog(R).trim(),O=r.getShaderInfoLog(T).trim();let B=!0,z=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(B=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,R,T);else{const $=x0(r,R,"vertex"),I=x0(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+$+`
`+I)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(N===""||O==="")&&(z=!1);z&&(C.diagnostics={runnable:B,programLog:L,vertexShader:{log:N,prefix:m},fragmentShader:{log:O,prefix:h}})}r.deleteShader(R),r.deleteShader(T),b=new Ql(r,y),E=n3(r,y)}let b;this.getUniforms=function(){return b===void 0&&A(this),b};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,YD)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=KD++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=T,this}let p3=0;class m3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new g3(e),n.set(e,i)),i}}class g3{constructor(e){this.id=p3++,this.code=e,this.usedTimes=0}}function v3(t,e,n,i,r,s,o){const a=new kS,l=new m3,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,x,C,L,N){const O=L.fog,B=N.geometry,z=E.isMeshStandardMaterial?L.environment:null,$=(E.isMeshStandardMaterial?n:e).get(E.envMap||z),I=$&&$.mapping===ru?$.image.height:null,Y=v[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const q=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ie=q!==void 0?q.length:0;let ge=0;B.morphAttributes.position!==void 0&&(ge=1),B.morphAttributes.normal!==void 0&&(ge=2),B.morphAttributes.color!==void 0&&(ge=3);let Ne,X,Q,ce;if(Y){const Ze=Qn[Y];Ne=Ze.vertexShader,X=Ze.fragmentShader}else Ne=E.vertexShader,X=E.fragmentShader,l.update(E),Q=l.getVertexShaderID(E),ce=l.getFragmentShaderID(E);const re=t.getRenderTarget(),xe=N.isInstancedMesh===!0,Te=N.isBatchedMesh===!0,De=!!E.map,Ke=!!E.matcap,D=!!$,Ue=!!E.aoMap,Ee=!!E.lightMap,Fe=!!E.bumpMap,ye=!!E.normalMap,dt=!!E.displacementMap,Oe=!!E.emissiveMap,Be=!!E.metalnessMap,P=!!E.roughnessMap,M=E.anisotropy>0,j=E.clearcoat>0,ee=E.dispersion>0,ne=E.iridescence>0,J=E.sheen>0,Ae=E.transmission>0,fe=M&&!!E.anisotropyMap,ve=j&&!!E.clearcoatMap,Ve=j&&!!E.clearcoatNormalMap,oe=j&&!!E.clearcoatRoughnessMap,me=ne&&!!E.iridescenceMap,Xe=ne&&!!E.iridescenceThicknessMap,Ie=J&&!!E.sheenColorMap,_e=J&&!!E.sheenRoughnessMap,ke=!!E.specularMap,We=!!E.specularColorMap,ft=!!E.specularIntensityMap,U=Ae&&!!E.transmissionMap,ae=Ae&&!!E.thicknessMap,K=!!E.gradientMap,Z=!!E.alphaMap,ue=E.alphaTest>0,Re=!!E.alphaHash,$e=!!E.extensions;let Mt=fr;E.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Mt=t.toneMapping);const Ut={shaderID:Y,shaderType:E.type,shaderName:E.name,vertexShader:Ne,fragmentShader:X,defines:E.defines,customVertexShaderID:Q,customFragmentShaderID:ce,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Te,batchingColor:Te&&N._colorsTexture!==null,instancing:xe,instancingColor:xe&&N.instanceColor!==null,instancingMorph:xe&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Er,alphaToCoverage:!!E.alphaToCoverage,map:De,matcap:Ke,envMap:D,envMapMode:D&&$.mapping,envMapCubeUVHeight:I,aoMap:Ue,lightMap:Ee,bumpMap:Fe,normalMap:ye,displacementMap:f&&dt,emissiveMap:Oe,normalMapObjectSpace:ye&&E.normalMapType===TR,normalMapTangentSpace:ye&&E.normalMapType===wR,metalnessMap:Be,roughnessMap:P,anisotropy:M,anisotropyMap:fe,clearcoat:j,clearcoatMap:ve,clearcoatNormalMap:Ve,clearcoatRoughnessMap:oe,dispersion:ee,iridescence:ne,iridescenceMap:me,iridescenceThicknessMap:Xe,sheen:J,sheenColorMap:Ie,sheenRoughnessMap:_e,specularMap:ke,specularColorMap:We,specularIntensityMap:ft,transmission:Ae,transmissionMap:U,thicknessMap:ae,gradientMap:K,opaque:E.transparent===!1&&E.blending===Zs&&E.alphaToCoverage===!1,alphaMap:Z,alphaTest:ue,alphaHash:Re,combine:E.combine,mapUv:De&&y(E.map.channel),aoMapUv:Ue&&y(E.aoMap.channel),lightMapUv:Ee&&y(E.lightMap.channel),bumpMapUv:Fe&&y(E.bumpMap.channel),normalMapUv:ye&&y(E.normalMap.channel),displacementMapUv:dt&&y(E.displacementMap.channel),emissiveMapUv:Oe&&y(E.emissiveMap.channel),metalnessMapUv:Be&&y(E.metalnessMap.channel),roughnessMapUv:P&&y(E.roughnessMap.channel),anisotropyMapUv:fe&&y(E.anisotropyMap.channel),clearcoatMapUv:ve&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:_e&&y(E.sheenRoughnessMap.channel),specularMapUv:ke&&y(E.specularMap.channel),specularColorMapUv:We&&y(E.specularColorMap.channel),specularIntensityMapUv:ft&&y(E.specularIntensityMap.channel),transmissionMapUv:U&&y(E.transmissionMap.channel),thicknessMapUv:ae&&y(E.thicknessMap.channel),alphaMapUv:Z&&y(E.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ye||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(De||Z),fog:!!O,useFog:E.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:N.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:ge,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&C.length>0,shadowMapType:t.shadowMap.type,toneMapping:Mt,decodeVideoTexture:De&&E.map.isVideoTexture===!0&&nt.getTransfer(E.map.colorSpace)===lt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===_i,flipSided:E.side===un,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:$e&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&E.extensions.multiDraw===!0||Te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ut.vertexUv1s=c.has(1),Ut.vertexUv2s=c.has(2),Ut.vertexUv3s=c.has(3),c.clear(),Ut}function h(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)x.push(C),x.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(_(x,E),g(x,E),x.push(t.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function _(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function g(E,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.doubleSided&&a.enable(10),x.flipSided&&a.enable(11),x.useDepthPacking&&a.enable(12),x.dithering&&a.enable(13),x.transmission&&a.enable(14),x.sheen&&a.enable(15),x.opaque&&a.enable(16),x.pointsUvs&&a.enable(17),x.decodeVideoTexture&&a.enable(18),x.alphaToCoverage&&a.enable(19),E.push(a.mask)}function S(E){const x=v[E.type];let C;if(x){const L=Qn[x];C=eP.clone(L.uniforms)}else C=E.uniforms;return C}function R(E,x){let C;for(let L=0,N=u.length;L<N;L++){const O=u[L];if(O.cacheKey===x){C=O,++C.usedTimes;break}}return C===void 0&&(C=new h3(t,x,E,s),u.push(C)),C}function T(E){if(--E.usedTimes===0){const x=u.indexOf(E);u[x]=u[u.length-1],u.pop(),E.destroy()}}function A(E){l.remove(E)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:S,acquireProgram:R,releaseProgram:T,releaseShaderCache:A,programs:u,dispose:b}}function _3(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function y3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function T0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function A0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,p,v,y,m){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:v,renderOrder:d.renderOrder,z:y,group:m},t[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=v,h.renderOrder=d.renderOrder,h.z=y,h.group=m),e++,h}function a(d,f,p,v,y,m){const h=o(d,f,p,v,y,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(d,f,p,v,y,m){const h=o(d,f,p,v,y,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(d,f){n.length>1&&n.sort(d||y3),i.length>1&&i.sort(f||T0),r.length>1&&r.sort(f||T0)}function u(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function x3(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new A0,t.set(i,[o])):r>=s.length?(o=new A0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function S3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new rt};break;case"SpotLight":n={position:new W,direction:new W,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":n={color:new rt,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function M3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let E3=0;function w3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function T3(t){const e=new S3,n=M3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const r=new W,s=new Ct,o=new Ct;function a(c){let u=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,v=0,y=0,m=0,h=0,_=0,g=0,S=0,R=0,T=0,A=0;c.sort(w3);for(let E=0,x=c.length;E<x;E++){const C=c[E],L=C.color,N=C.intensity,O=C.distance,B=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=L.r*N,d+=L.g*N,f+=L.b*N;else if(C.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(C.sh.coefficients[z],N);A++}else if(C.isDirectionalLight){const z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const $=C.shadow,I=n.get(C);I.shadowIntensity=$.intensity,I.shadowBias=$.bias,I.shadowNormalBias=$.normalBias,I.shadowRadius=$.radius,I.shadowMapSize=$.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=B,i.directionalShadowMatrix[p]=C.shadow.matrix,_++}i.directional[p]=z,p++}else if(C.isSpotLight){const z=e.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(L).multiplyScalar(N),z.distance=O,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,i.spot[y]=z;const $=C.shadow;if(C.map&&(i.spotLightMap[R]=C.map,R++,$.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[y]=$.matrix,C.castShadow){const I=n.get(C);I.shadowIntensity=$.intensity,I.shadowBias=$.bias,I.shadowNormalBias=$.normalBias,I.shadowRadius=$.radius,I.shadowMapSize=$.mapSize,i.spotShadow[y]=I,i.spotShadowMap[y]=B,S++}y++}else if(C.isRectAreaLight){const z=e.get(C);z.color.copy(L).multiplyScalar(N),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=z,m++}else if(C.isPointLight){const z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),z.distance=C.distance,z.decay=C.decay,C.castShadow){const $=C.shadow,I=n.get(C);I.shadowIntensity=$.intensity,I.shadowBias=$.bias,I.shadowNormalBias=$.normalBias,I.shadowRadius=$.radius,I.shadowMapSize=$.mapSize,I.shadowCameraNear=$.camera.near,I.shadowCameraFar=$.camera.far,i.pointShadow[v]=I,i.pointShadowMap[v]=B,i.pointShadowMatrix[v]=C.shadow.matrix,g++}i.point[v]=z,v++}else if(C.isHemisphereLight){const z=e.get(C);z.skyColor.copy(C.color).multiplyScalar(N),z.groundColor.copy(C.groundColor).multiplyScalar(N),i.hemi[h]=z,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const b=i.hash;(b.directionalLength!==p||b.pointLength!==v||b.spotLength!==y||b.rectAreaLength!==m||b.hemiLength!==h||b.numDirectionalShadows!==_||b.numPointShadows!==g||b.numSpotShadows!==S||b.numSpotMaps!==R||b.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=S+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,b.directionalLength=p,b.pointLength=v,b.spotLength=y,b.rectAreaLength=m,b.hemiLength=h,b.numDirectionalShadows=_,b.numPointShadows=g,b.numSpotShadows=S,b.numSpotMaps=R,b.numLightProbes=A,i.version=E3++)}function l(c,u){let d=0,f=0,p=0,v=0,y=0;const m=u.matrixWorldInverse;for(let h=0,_=c.length;h<_;h++){const g=c[h];if(g.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(g.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(g.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(g.width*.5,0,0),S.halfHeight.set(0,g.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(g.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(m),f++}else if(g.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(g.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function b0(t){const e=new T3(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function A3(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new b0(t),e.set(r,[a])):s>=o.length?(a=new b0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class b3 extends ou{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=MR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class C3 extends ou{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const R3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function L3(t,e,n){let i=new jS;const r=new qe,s=new qe,o=new It,a=new b3({depthPacking:ER}),l=new C3,c={},u=n.maxTextureSize,d={[vr]:un,[un]:vr,[_i]:_i},f=new _r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:R3,fragmentShader:P3}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new wr;v.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ni(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xS;let h=this.type;this.render=function(T,A,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const E=t.getRenderTarget(),x=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),L=t.state;L.setBlending(dr),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const N=h!==mi&&this.type===mi,O=h===mi&&this.type!==mi;for(let B=0,z=T.length;B<z;B++){const $=T[B],I=$.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const Y=I.getFrameExtents();if(r.multiply(Y),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,I.mapSize.y=s.y)),I.map===null||N===!0||O===!0){const ie=this.type!==mi?{minFilter:Ln,magFilter:Ln}:{};I.map!==null&&I.map.dispose(),I.map=new ss(r.x,r.y,ie),I.map.texture.name=$.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const q=I.getViewportCount();for(let ie=0;ie<q;ie++){const ge=I.getViewport(ie);o.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),L.viewport(o),I.updateMatrices($,ie),i=I.getFrustum(),S(A,b,I.camera,$,this.type)}I.isPointLightShadow!==!0&&this.type===mi&&_(I,b),I.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(E,x,C)};function _(T,A){const b=e.update(y);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ss(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,b,f,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,b,p,y,null)}function g(T,A,b,E){let x=null;const C=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)x=C;else if(x=b.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const L=x.uuid,N=A.uuid;let O=c[L];O===void 0&&(O={},c[L]=O);let B=O[N];B===void 0&&(B=x.clone(),O[N]=B,A.addEventListener("dispose",R)),x=B}if(x.visible=A.visible,x.wireframe=A.wireframe,E===mi?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:d[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,b.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const L=t.properties.get(x);L.light=b}return x}function S(T,A,b,E,x){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===mi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);const N=e.update(T),O=T.material;if(Array.isArray(O)){const B=N.groups;for(let z=0,$=B.length;z<$;z++){const I=B[z],Y=O[I.materialIndex];if(Y&&Y.visible){const q=g(T,Y,E,x);T.onBeforeShadow(t,T,A,b,N,q,I),t.renderBufferDirect(b,null,N,q,T,I),T.onAfterShadow(t,T,A,b,N,q,I)}}}else if(O.visible){const B=g(T,O,E,x);T.onBeforeShadow(t,T,A,b,N,B,null),t.renderBufferDirect(b,null,N,B,T,null),T.onAfterShadow(t,T,A,b,N,B,null)}}const L=T.children;for(let N=0,O=L.length;N<O;N++)S(L[N],A,b,E,x)}function R(T){T.target.removeEventListener("dispose",R);for(const b in c){const E=c[b],x=T.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}function D3(t){function e(){let U=!1;const ae=new It;let K=null;const Z=new It(0,0,0,0);return{setMask:function(ue){K!==ue&&!U&&(t.colorMask(ue,ue,ue,ue),K=ue)},setLocked:function(ue){U=ue},setClear:function(ue,Re,$e,Mt,Ut){Ut===!0&&(ue*=Mt,Re*=Mt,$e*=Mt),ae.set(ue,Re,$e,Mt),Z.equals(ae)===!1&&(t.clearColor(ue,Re,$e,Mt),Z.copy(ae))},reset:function(){U=!1,K=null,Z.set(-1,0,0,0)}}}function n(){let U=!1,ae=null,K=null,Z=null;return{setTest:function(ue){ue?ce(t.DEPTH_TEST):re(t.DEPTH_TEST)},setMask:function(ue){ae!==ue&&!U&&(t.depthMask(ue),ae=ue)},setFunc:function(ue){if(K!==ue){switch(ue){case sR:t.depthFunc(t.NEVER);break;case oR:t.depthFunc(t.ALWAYS);break;case aR:t.depthFunc(t.LESS);break;case Pc:t.depthFunc(t.LEQUAL);break;case lR:t.depthFunc(t.EQUAL);break;case cR:t.depthFunc(t.GEQUAL);break;case uR:t.depthFunc(t.GREATER);break;case dR:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}K=ue}},setLocked:function(ue){U=ue},setClear:function(ue){Z!==ue&&(t.clearDepth(ue),Z=ue)},reset:function(){U=!1,ae=null,K=null,Z=null}}}function i(){let U=!1,ae=null,K=null,Z=null,ue=null,Re=null,$e=null,Mt=null,Ut=null;return{setTest:function(Ze){U||(Ze?ce(t.STENCIL_TEST):re(t.STENCIL_TEST))},setMask:function(Ze){ae!==Ze&&!U&&(t.stencilMask(Ze),ae=Ze)},setFunc:function(Ze,li,Yn){(K!==Ze||Z!==li||ue!==Yn)&&(t.stencilFunc(Ze,li,Yn),K=Ze,Z=li,ue=Yn)},setOp:function(Ze,li,Yn){(Re!==Ze||$e!==li||Mt!==Yn)&&(t.stencilOp(Ze,li,Yn),Re=Ze,$e=li,Mt=Yn)},setLocked:function(Ze){U=Ze},setClear:function(Ze){Ut!==Ze&&(t.clearStencil(Ze),Ut=Ze)},reset:function(){U=!1,ae=null,K=null,Z=null,ue=null,Re=null,$e=null,Mt=null,Ut=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,f=[],p=null,v=!1,y=null,m=null,h=null,_=null,g=null,S=null,R=null,T=new rt(0,0,0),A=0,b=!1,E=null,x=null,C=null,L=null,N=null;const O=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,z=0;const $=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec($)[1]),B=z>=1):$.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),B=z>=2);let I=null,Y={};const q=t.getParameter(t.SCISSOR_BOX),ie=t.getParameter(t.VIEWPORT),ge=new It().fromArray(q),Ne=new It().fromArray(ie);function X(U,ae,K,Z){const ue=new Uint8Array(4),Re=t.createTexture();t.bindTexture(U,Re),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let $e=0;$e<K;$e++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(ae,0,t.RGBA,1,1,Z,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(ae+$e,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return Re}const Q={};Q[t.TEXTURE_2D]=X(t.TEXTURE_2D,t.TEXTURE_2D,1),Q[t.TEXTURE_CUBE_MAP]=X(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[t.TEXTURE_2D_ARRAY]=X(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Q[t.TEXTURE_3D]=X(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ce(t.DEPTH_TEST),s.setFunc(Pc),Fe(!1),ye(Iv),ce(t.CULL_FACE),Ue(dr);function ce(U){c[U]!==!0&&(t.enable(U),c[U]=!0)}function re(U){c[U]!==!1&&(t.disable(U),c[U]=!1)}function xe(U,ae){return u[U]!==ae?(t.bindFramebuffer(U,ae),u[U]=ae,U===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ae),U===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ae),!0):!1}function Te(U,ae){let K=f,Z=!1;if(U){K=d.get(ae),K===void 0&&(K=[],d.set(ae,K));const ue=U.textures;if(K.length!==ue.length||K[0]!==t.COLOR_ATTACHMENT0){for(let Re=0,$e=ue.length;Re<$e;Re++)K[Re]=t.COLOR_ATTACHMENT0+Re;K.length=ue.length,Z=!0}}else K[0]!==t.BACK&&(K[0]=t.BACK,Z=!0);Z&&t.drawBuffers(K)}function De(U){return p!==U?(t.useProgram(U),p=U,!0):!1}const Ke={[zr]:t.FUNC_ADD,[HC]:t.FUNC_SUBTRACT,[GC]:t.FUNC_REVERSE_SUBTRACT};Ke[WC]=t.MIN,Ke[jC]=t.MAX;const D={[XC]:t.ZERO,[$C]:t.ONE,[YC]:t.SRC_COLOR,[zf]:t.SRC_ALPHA,[eR]:t.SRC_ALPHA_SATURATE,[QC]:t.DST_COLOR,[qC]:t.DST_ALPHA,[KC]:t.ONE_MINUS_SRC_COLOR,[Vf]:t.ONE_MINUS_SRC_ALPHA,[JC]:t.ONE_MINUS_DST_COLOR,[ZC]:t.ONE_MINUS_DST_ALPHA,[tR]:t.CONSTANT_COLOR,[nR]:t.ONE_MINUS_CONSTANT_COLOR,[iR]:t.CONSTANT_ALPHA,[rR]:t.ONE_MINUS_CONSTANT_ALPHA};function Ue(U,ae,K,Z,ue,Re,$e,Mt,Ut,Ze){if(U===dr){v===!0&&(re(t.BLEND),v=!1);return}if(v===!1&&(ce(t.BLEND),v=!0),U!==VC){if(U!==y||Ze!==b){if((m!==zr||g!==zr)&&(t.blendEquation(t.FUNC_ADD),m=zr,g=zr),Ze)switch(U){case Zs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Nv:t.blendFunc(t.ONE,t.ONE);break;case Uv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Fv:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Zs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Nv:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Uv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Fv:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}h=null,_=null,S=null,R=null,T.set(0,0,0),A=0,y=U,b=Ze}return}ue=ue||ae,Re=Re||K,$e=$e||Z,(ae!==m||ue!==g)&&(t.blendEquationSeparate(Ke[ae],Ke[ue]),m=ae,g=ue),(K!==h||Z!==_||Re!==S||$e!==R)&&(t.blendFuncSeparate(D[K],D[Z],D[Re],D[$e]),h=K,_=Z,S=Re,R=$e),(Mt.equals(T)===!1||Ut!==A)&&(t.blendColor(Mt.r,Mt.g,Mt.b,Ut),T.copy(Mt),A=Ut),y=U,b=!1}function Ee(U,ae){U.side===_i?re(t.CULL_FACE):ce(t.CULL_FACE);let K=U.side===un;ae&&(K=!K),Fe(K),U.blending===Zs&&U.transparent===!1?Ue(dr):Ue(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const Z=U.stencilWrite;o.setTest(Z),Z&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Oe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ce(t.SAMPLE_ALPHA_TO_COVERAGE):re(t.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(U){E!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),E=U)}function ye(U){U!==kC?(ce(t.CULL_FACE),U!==x&&(U===Iv?t.cullFace(t.BACK):U===BC?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):re(t.CULL_FACE),x=U}function dt(U){U!==C&&(B&&t.lineWidth(U),C=U)}function Oe(U,ae,K){U?(ce(t.POLYGON_OFFSET_FILL),(L!==ae||N!==K)&&(t.polygonOffset(ae,K),L=ae,N=K)):re(t.POLYGON_OFFSET_FILL)}function Be(U){U?ce(t.SCISSOR_TEST):re(t.SCISSOR_TEST)}function P(U){U===void 0&&(U=t.TEXTURE0+O-1),I!==U&&(t.activeTexture(U),I=U)}function M(U,ae,K){K===void 0&&(I===null?K=t.TEXTURE0+O-1:K=I);let Z=Y[K];Z===void 0&&(Z={type:void 0,texture:void 0},Y[K]=Z),(Z.type!==U||Z.texture!==ae)&&(I!==K&&(t.activeTexture(K),I=K),t.bindTexture(U,ae||Q[U]),Z.type=U,Z.texture=ae)}function j(){const U=Y[I];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ve(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Xe(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(U){ge.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),ge.copy(U))}function _e(U){Ne.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Ne.copy(U))}function ke(U,ae){let K=l.get(ae);K===void 0&&(K=new WeakMap,l.set(ae,K));let Z=K.get(U);Z===void 0&&(Z=t.getUniformBlockIndex(ae,U.name),K.set(U,Z))}function We(U,ae){const Z=l.get(ae).get(U);a.get(ae)!==Z&&(t.uniformBlockBinding(ae,Z,U.__bindingPointIndex),a.set(ae,Z))}function ft(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},I=null,Y={},u={},d=new WeakMap,f=[],p=null,v=!1,y=null,m=null,h=null,_=null,g=null,S=null,R=null,T=new rt(0,0,0),A=0,b=!1,E=null,x=null,C=null,L=null,N=null,ge.set(0,0,t.canvas.width,t.canvas.height),Ne.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ce,disable:re,bindFramebuffer:xe,drawBuffers:Te,useProgram:De,setBlending:Ue,setMaterial:Ee,setFlipSided:Fe,setCullFace:ye,setLineWidth:dt,setPolygonOffset:Oe,setScissorTest:Be,activeTexture:P,bindTexture:M,unbindTexture:j,compressedTexImage2D:ee,compressedTexImage3D:ne,texImage2D:me,texImage3D:Xe,updateUBOMapping:ke,uniformBlockBinding:We,texStorage2D:Ve,texStorage3D:oe,texSubImage2D:J,texSubImage3D:Ae,compressedTexSubImage2D:fe,compressedTexSubImage3D:ve,scissor:Ie,viewport:_e,reset:ft}}function C0(t,e,n,i){const r=I3(i);switch(n){case AS:return t*e;case CS:return t*e;case RS:return t*e*2;case PS:return t*e/r.components*r.byteLength;case Kp:return t*e/r.components*r.byteLength;case LS:return t*e*2/r.components*r.byteLength;case qp:return t*e*2/r.components*r.byteLength;case bS:return t*e*3/r.components*r.byteLength;case Wn:return t*e*4/r.components*r.byteLength;case Zp:return t*e*4/r.components*r.byteLength;case $l:case Yl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Kl:case ql:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $f:case Kf:return Math.max(t,16)*Math.max(e,8)/4;case Xf:case Yf:return Math.max(t,8)*Math.max(e,8)/2;case qf:case Zf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Qf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Jf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case eh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case th:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case nh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ih:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case rh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case sh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case oh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ah:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case lh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case ch:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case uh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case dh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case fh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Zl:case hh:case ph:return Math.ceil(t/4)*Math.ceil(e/4)*16;case DS:case mh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case gh:case vh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function I3(t){switch(t){case Ii:case ES:return{byteLength:1,components:1};case wa:case wS:case Ua:return{byteLength:2,components:1};case $p:case Yp:return{byteLength:2,components:4};case rs:case Xp:case Mi:return{byteLength:4,components:1};case TS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function N3(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qe,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,M){return p?new OffscreenCanvas(P,M):Ta("canvas")}function y(P,M,j){let ee=1;const ne=Be(P);if((ne.width>j||ne.height>j)&&(ee=j/Math.max(ne.width,ne.height)),ee<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const J=Math.floor(ee*ne.width),Ae=Math.floor(ee*ne.height);d===void 0&&(d=v(J,Ae));const fe=M?v(J,Ae):d;return fe.width=J,fe.height=Ae,fe.getContext("2d").drawImage(P,0,0,J,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+J+"x"+Ae+")."),fe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==Ln&&P.minFilter!==Gn}function h(P){t.generateMipmap(P)}function _(P,M,j,ee,ne=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let J=M;if(M===t.RED&&(j===t.FLOAT&&(J=t.R32F),j===t.HALF_FLOAT&&(J=t.R16F),j===t.UNSIGNED_BYTE&&(J=t.R8)),M===t.RED_INTEGER&&(j===t.UNSIGNED_BYTE&&(J=t.R8UI),j===t.UNSIGNED_SHORT&&(J=t.R16UI),j===t.UNSIGNED_INT&&(J=t.R32UI),j===t.BYTE&&(J=t.R8I),j===t.SHORT&&(J=t.R16I),j===t.INT&&(J=t.R32I)),M===t.RG&&(j===t.FLOAT&&(J=t.RG32F),j===t.HALF_FLOAT&&(J=t.RG16F),j===t.UNSIGNED_BYTE&&(J=t.RG8)),M===t.RG_INTEGER&&(j===t.UNSIGNED_BYTE&&(J=t.RG8UI),j===t.UNSIGNED_SHORT&&(J=t.RG16UI),j===t.UNSIGNED_INT&&(J=t.RG32UI),j===t.BYTE&&(J=t.RG8I),j===t.SHORT&&(J=t.RG16I),j===t.INT&&(J=t.RG32I)),M===t.RGB&&j===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),M===t.RGBA){const Ae=ne?Lc:nt.getTransfer(ee);j===t.FLOAT&&(J=t.RGBA32F),j===t.HALF_FLOAT&&(J=t.RGBA16F),j===t.UNSIGNED_BYTE&&(J=Ae===lt?t.SRGB8_ALPHA8:t.RGBA8),j===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),j===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function g(P,M){let j;return P?M===null||M===rs||M===fo?j=t.DEPTH24_STENCIL8:M===Mi?j=t.DEPTH32F_STENCIL8:M===wa&&(j=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===rs||M===fo?j=t.DEPTH_COMPONENT24:M===Mi?j=t.DEPTH_COMPONENT32F:M===wa&&(j=t.DEPTH_COMPONENT16),j}function S(P,M){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ln&&P.minFilter!==Gn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function R(P){const M=P.target;M.removeEventListener("dispose",R),A(M),M.isVideoTexture&&u.delete(M)}function T(P){const M=P.target;M.removeEventListener("dispose",T),E(M)}function A(P){const M=i.get(P);if(M.__webglInit===void 0)return;const j=P.source,ee=f.get(j);if(ee){const ne=ee[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&b(P),Object.keys(ee).length===0&&f.delete(j)}i.remove(P)}function b(P){const M=i.get(P);t.deleteTexture(M.__webglTexture);const j=P.source,ee=f.get(j);delete ee[M.__cacheKey],o.memory.textures--}function E(P){const M=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let ne=0;ne<M.__webglFramebuffer[ee].length;ne++)t.deleteFramebuffer(M.__webglFramebuffer[ee][ne]);else t.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)t.deleteFramebuffer(M.__webglFramebuffer[ee]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const j=P.textures;for(let ee=0,ne=j.length;ee<ne;ee++){const J=i.get(j[ee]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(j[ee])}i.remove(P)}let x=0;function C(){x=0}function L(){const P=x;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),x+=1,P}function N(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function O(P,M){const j=i.get(P);if(P.isVideoTexture&&dt(P),P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){const ee=P.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(j,P,M);return}}n.bindTexture(t.TEXTURE_2D,j.__webglTexture,t.TEXTURE0+M)}function B(P,M){const j=i.get(P);if(P.version>0&&j.__version!==P.version){Ne(j,P,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,j.__webglTexture,t.TEXTURE0+M)}function z(P,M){const j=i.get(P);if(P.version>0&&j.__version!==P.version){Ne(j,P,M);return}n.bindTexture(t.TEXTURE_3D,j.__webglTexture,t.TEXTURE0+M)}function $(P,M){const j=i.get(P);if(P.version>0&&j.__version!==P.version){X(j,P,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture,t.TEXTURE0+M)}const I={[Wf]:t.REPEAT,[$r]:t.CLAMP_TO_EDGE,[jf]:t.MIRRORED_REPEAT},Y={[Ln]:t.NEAREST,[SR]:t.NEAREST_MIPMAP_NEAREST,[cl]:t.NEAREST_MIPMAP_LINEAR,[Gn]:t.LINEAR,[Ju]:t.LINEAR_MIPMAP_NEAREST,[Yr]:t.LINEAR_MIPMAP_LINEAR},q={[AR]:t.NEVER,[DR]:t.ALWAYS,[bR]:t.LESS,[IS]:t.LEQUAL,[CR]:t.EQUAL,[LR]:t.GEQUAL,[RR]:t.GREATER,[PR]:t.NOTEQUAL};function ie(P,M){if(M.type===Mi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Gn||M.magFilter===Ju||M.magFilter===cl||M.magFilter===Yr||M.minFilter===Gn||M.minFilter===Ju||M.minFilter===cl||M.minFilter===Yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,I[M.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,I[M.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,I[M.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,Y[M.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,Y[M.minFilter]),M.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,q[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ln||M.minFilter!==cl&&M.minFilter!==Yr||M.type===Mi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ge(P,M){let j=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",R));const ee=M.source;let ne=f.get(ee);ne===void 0&&(ne={},f.set(ee,ne));const J=N(M);if(J!==P.__cacheKey){ne[J]===void 0&&(ne[J]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,j=!0),ne[J].usedTimes++;const Ae=ne[P.__cacheKey];Ae!==void 0&&(ne[P.__cacheKey].usedTimes--,Ae.usedTimes===0&&b(M)),P.__cacheKey=J,P.__webglTexture=ne[J].texture}return j}function Ne(P,M,j){let ee=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ee=t.TEXTURE_3D);const ne=ge(P,M),J=M.source;n.bindTexture(ee,P.__webglTexture,t.TEXTURE0+j);const Ae=i.get(J);if(J.version!==Ae.__version||ne===!0){n.activeTexture(t.TEXTURE0+j);const fe=nt.getPrimaries(nt.workingColorSpace),ve=M.colorSpace===Qi?null:nt.getPrimaries(M.colorSpace),Ve=M.colorSpace===Qi||fe===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let oe=y(M.image,!1,r.maxTextureSize);oe=Oe(M,oe);const me=s.convert(M.format,M.colorSpace),Xe=s.convert(M.type);let Ie=_(M.internalFormat,me,Xe,M.colorSpace,M.isVideoTexture);ie(ee,M);let _e;const ke=M.mipmaps,We=M.isVideoTexture!==!0,ft=Ae.__version===void 0||ne===!0,U=J.dataReady,ae=S(M,oe);if(M.isDepthTexture)Ie=g(M.format===ho,M.type),ft&&(We?n.texStorage2D(t.TEXTURE_2D,1,Ie,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,Ie,oe.width,oe.height,0,me,Xe,null));else if(M.isDataTexture)if(ke.length>0){We&&ft&&n.texStorage2D(t.TEXTURE_2D,ae,Ie,ke[0].width,ke[0].height);for(let K=0,Z=ke.length;K<Z;K++)_e=ke[K],We?U&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,_e.width,_e.height,me,Xe,_e.data):n.texImage2D(t.TEXTURE_2D,K,Ie,_e.width,_e.height,0,me,Xe,_e.data);M.generateMipmaps=!1}else We?(ft&&n.texStorage2D(t.TEXTURE_2D,ae,Ie,oe.width,oe.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,me,Xe,oe.data)):n.texImage2D(t.TEXTURE_2D,0,Ie,oe.width,oe.height,0,me,Xe,oe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){We&&ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,Ie,ke[0].width,ke[0].height,oe.depth);for(let K=0,Z=ke.length;K<Z;K++)if(_e=ke[K],M.format!==Wn)if(me!==null)if(We){if(U)if(M.layerUpdates.size>0){const ue=C0(_e.width,_e.height,M.format,M.type);for(const Re of M.layerUpdates){const $e=_e.data.subarray(Re*ue/_e.data.BYTES_PER_ELEMENT,(Re+1)*ue/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,Re,_e.width,_e.height,1,me,$e,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,_e.width,_e.height,oe.depth,me,_e.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,Ie,_e.width,_e.height,oe.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,_e.width,_e.height,oe.depth,me,Xe,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,Ie,_e.width,_e.height,oe.depth,0,me,Xe,_e.data)}else{We&&ft&&n.texStorage2D(t.TEXTURE_2D,ae,Ie,ke[0].width,ke[0].height);for(let K=0,Z=ke.length;K<Z;K++)_e=ke[K],M.format!==Wn?me!==null?We?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,_e.width,_e.height,me,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,K,Ie,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?U&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,_e.width,_e.height,me,Xe,_e.data):n.texImage2D(t.TEXTURE_2D,K,Ie,_e.width,_e.height,0,me,Xe,_e.data)}else if(M.isDataArrayTexture)if(We){if(ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,Ie,oe.width,oe.height,oe.depth),U)if(M.layerUpdates.size>0){const K=C0(oe.width,oe.height,M.format,M.type);for(const Z of M.layerUpdates){const ue=oe.data.subarray(Z*K/oe.data.BYTES_PER_ELEMENT,(Z+1)*K/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Z,oe.width,oe.height,1,me,Xe,ue)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,me,Xe,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ie,oe.width,oe.height,oe.depth,0,me,Xe,oe.data);else if(M.isData3DTexture)We?(ft&&n.texStorage3D(t.TEXTURE_3D,ae,Ie,oe.width,oe.height,oe.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,me,Xe,oe.data)):n.texImage3D(t.TEXTURE_3D,0,Ie,oe.width,oe.height,oe.depth,0,me,Xe,oe.data);else if(M.isFramebufferTexture){if(ft)if(We)n.texStorage2D(t.TEXTURE_2D,ae,Ie,oe.width,oe.height);else{let K=oe.width,Z=oe.height;for(let ue=0;ue<ae;ue++)n.texImage2D(t.TEXTURE_2D,ue,Ie,K,Z,0,me,Xe,null),K>>=1,Z>>=1}}else if(ke.length>0){if(We&&ft){const K=Be(ke[0]);n.texStorage2D(t.TEXTURE_2D,ae,Ie,K.width,K.height)}for(let K=0,Z=ke.length;K<Z;K++)_e=ke[K],We?U&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,me,Xe,_e):n.texImage2D(t.TEXTURE_2D,K,Ie,me,Xe,_e);M.generateMipmaps=!1}else if(We){if(ft){const K=Be(oe);n.texStorage2D(t.TEXTURE_2D,ae,Ie,K.width,K.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,me,Xe,oe)}else n.texImage2D(t.TEXTURE_2D,0,Ie,me,Xe,oe);m(M)&&h(ee),Ae.__version=J.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function X(P,M,j){if(M.image.length!==6)return;const ee=ge(P,M),ne=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+j);const J=i.get(ne);if(ne.version!==J.__version||ee===!0){n.activeTexture(t.TEXTURE0+j);const Ae=nt.getPrimaries(nt.workingColorSpace),fe=M.colorSpace===Qi?null:nt.getPrimaries(M.colorSpace),ve=M.colorSpace===Qi||Ae===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ve=M.isCompressedTexture||M.image[0].isCompressedTexture,oe=M.image[0]&&M.image[0].isDataTexture,me=[];for(let Z=0;Z<6;Z++)!Ve&&!oe?me[Z]=y(M.image[Z],!0,r.maxCubemapSize):me[Z]=oe?M.image[Z].image:M.image[Z],me[Z]=Oe(M,me[Z]);const Xe=me[0],Ie=s.convert(M.format,M.colorSpace),_e=s.convert(M.type),ke=_(M.internalFormat,Ie,_e,M.colorSpace),We=M.isVideoTexture!==!0,ft=J.__version===void 0||ee===!0,U=ne.dataReady;let ae=S(M,Xe);ie(t.TEXTURE_CUBE_MAP,M);let K;if(Ve){We&&ft&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ae,ke,Xe.width,Xe.height);for(let Z=0;Z<6;Z++){K=me[Z].mipmaps;for(let ue=0;ue<K.length;ue++){const Re=K[ue];M.format!==Wn?Ie!==null?We?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,0,0,Re.width,Re.height,Ie,Re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,ke,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,0,0,Re.width,Re.height,Ie,_e,Re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,ke,Re.width,Re.height,0,Ie,_e,Re.data)}}}else{if(K=M.mipmaps,We&&ft){K.length>0&&ae++;const Z=Be(me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ae,ke,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(oe){We?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,me[Z].width,me[Z].height,Ie,_e,me[Z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ke,me[Z].width,me[Z].height,0,Ie,_e,me[Z].data);for(let ue=0;ue<K.length;ue++){const $e=K[ue].image[Z].image;We?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,0,0,$e.width,$e.height,Ie,_e,$e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,ke,$e.width,$e.height,0,Ie,_e,$e.data)}}else{We?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ie,_e,me[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ke,Ie,_e,me[Z]);for(let ue=0;ue<K.length;ue++){const Re=K[ue];We?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,0,0,Ie,_e,Re.image[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,ke,Ie,_e,Re.image[Z])}}}m(M)&&h(t.TEXTURE_CUBE_MAP),J.__version=ne.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Q(P,M,j,ee,ne,J){const Ae=s.convert(j.format,j.colorSpace),fe=s.convert(j.type),ve=_(j.internalFormat,Ae,fe,j.colorSpace);if(!i.get(M).__hasExternalTextures){const oe=Math.max(1,M.width>>J),me=Math.max(1,M.height>>J);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,J,ve,oe,me,M.depth,0,Ae,fe,null):n.texImage2D(ne,J,ve,oe,me,0,Ae,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),ye(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,ne,i.get(j).__webglTexture,0,Fe(M)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,ne,i.get(j).__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ce(P,M,j){if(t.bindRenderbuffer(t.RENDERBUFFER,P),M.depthBuffer){const ee=M.depthTexture,ne=ee&&ee.isDepthTexture?ee.type:null,J=g(M.stencilBuffer,ne),Ae=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=Fe(M);ye(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,J,M.width,M.height):j?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,J,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,J,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ae,t.RENDERBUFFER,P)}else{const ee=M.textures;for(let ne=0;ne<ee.length;ne++){const J=ee[ne],Ae=s.convert(J.format,J.colorSpace),fe=s.convert(J.type),ve=_(J.internalFormat,Ae,fe,J.colorSpace),Ve=Fe(M);j&&ye(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,ve,M.width,M.height):ye(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ve,ve,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ve,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function re(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),O(M.depthTexture,0);const ee=i.get(M.depthTexture).__webglTexture,ne=Fe(M);if(M.depthTexture.format===Qs)ye(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(M.depthTexture.format===ho)ye(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function xe(P){const M=i.get(P),j=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");re(M.__webglFramebuffer,P)}else if(j){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]=t.createRenderbuffer(),ce(M.__webglDepthbuffer[ee],P,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),ce(M.__webglDepthbuffer,P,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Te(P,M,j){const ee=i.get(P);M!==void 0&&Q(ee.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),j!==void 0&&xe(P)}function De(P){const M=P.texture,j=i.get(P),ee=i.get(M);P.addEventListener("dispose",T);const ne=P.textures,J=P.isWebGLCubeRenderTarget===!0,Ae=ne.length>1;if(Ae||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=M.version,o.memory.textures++),J){j.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0){j.__webglFramebuffer[fe]=[];for(let ve=0;ve<M.mipmaps.length;ve++)j.__webglFramebuffer[fe][ve]=t.createFramebuffer()}else j.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){j.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)j.__webglFramebuffer[fe]=t.createFramebuffer()}else j.__webglFramebuffer=t.createFramebuffer();if(Ae)for(let fe=0,ve=ne.length;fe<ve;fe++){const Ve=i.get(ne[fe]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=t.createTexture(),o.memory.textures++)}if(P.samples>0&&ye(P)===!1){j.__webglMultisampledFramebuffer=t.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let fe=0;fe<ne.length;fe++){const ve=ne[fe];j.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,j.__webglColorRenderbuffer[fe]);const Ve=s.convert(ve.format,ve.colorSpace),oe=s.convert(ve.type),me=_(ve.internalFormat,Ve,oe,ve.colorSpace,P.isXRRenderTarget===!0),Xe=Fe(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,Xe,me,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,j.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(j.__webglDepthRenderbuffer=t.createRenderbuffer(),ce(j.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),ie(t.TEXTURE_CUBE_MAP,M);for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)Q(j.__webglFramebuffer[fe][ve],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ve);else Q(j.__webglFramebuffer[fe],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(M)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ae){for(let fe=0,ve=ne.length;fe<ve;fe++){const Ve=ne[fe],oe=i.get(Ve);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),ie(t.TEXTURE_2D,Ve),Q(j.__webglFramebuffer,P,Ve,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),m(Ve)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(fe=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,ee.__webglTexture),ie(fe,M),M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)Q(j.__webglFramebuffer[ve],P,M,t.COLOR_ATTACHMENT0,fe,ve);else Q(j.__webglFramebuffer,P,M,t.COLOR_ATTACHMENT0,fe,0);m(M)&&h(fe),n.unbindTexture()}P.depthBuffer&&xe(P)}function Ke(P){const M=P.textures;for(let j=0,ee=M.length;j<ee;j++){const ne=M[j];if(m(ne)){const J=P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ae=i.get(ne).__webglTexture;n.bindTexture(J,Ae),h(J),n.unbindTexture()}}}const D=[],Ue=[];function Ee(P){if(P.samples>0){if(ye(P)===!1){const M=P.textures,j=P.width,ee=P.height;let ne=t.COLOR_BUFFER_BIT;const J=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ae=i.get(P),fe=M.length>1;if(fe)for(let ve=0;ve<M.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let ve=0;ve<M.length;ve++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[ve]);const Ve=i.get(M[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ve,0)}t.blitFramebuffer(0,0,j,ee,0,0,j,ee,ne,t.NEAREST),l===!0&&(D.length=0,Ue.length=0,D.push(t.COLOR_ATTACHMENT0+ve),P.depthBuffer&&P.resolveDepthBuffer===!1&&(D.push(J),Ue.push(J),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ue)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,D))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let ve=0;ve<M.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[ve]);const Ve=i.get(M[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,Ve,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const M=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Fe(P){return Math.min(r.maxSamples,P.samples)}function ye(P){const M=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function dt(P){const M=o.render.frame;u.get(P)!==M&&(u.set(P,M),P.update())}function Oe(P,M){const j=P.colorSpace,ee=P.format,ne=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||j!==Er&&j!==Qi&&(nt.getTransfer(j)===lt?(ee!==Wn||ne!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),M}function Be(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=C,this.setTexture2D=O,this.setTexture2DArray=B,this.setTexture3D=z,this.setTextureCube=$,this.rebindTextures=Te,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=ye}function U3(t,e){function n(i,r=Qi){let s;const o=nt.getTransfer(r);if(i===Ii)return t.UNSIGNED_BYTE;if(i===$p)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Yp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===TS)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===ES)return t.BYTE;if(i===wS)return t.SHORT;if(i===wa)return t.UNSIGNED_SHORT;if(i===Xp)return t.INT;if(i===rs)return t.UNSIGNED_INT;if(i===Mi)return t.FLOAT;if(i===Ua)return t.HALF_FLOAT;if(i===AS)return t.ALPHA;if(i===bS)return t.RGB;if(i===Wn)return t.RGBA;if(i===CS)return t.LUMINANCE;if(i===RS)return t.LUMINANCE_ALPHA;if(i===Qs)return t.DEPTH_COMPONENT;if(i===ho)return t.DEPTH_STENCIL;if(i===PS)return t.RED;if(i===Kp)return t.RED_INTEGER;if(i===LS)return t.RG;if(i===qp)return t.RG_INTEGER;if(i===Zp)return t.RGBA_INTEGER;if(i===$l||i===Yl||i===Kl||i===ql)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===$l)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Yl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Kl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ql)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===$l)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Yl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Kl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ql)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xf||i===$f||i===Yf||i===Kf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Xf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$f)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Yf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Kf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===qf||i===Zf||i===Qf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===qf||i===Zf)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Qf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Jf||i===eh||i===th||i===nh||i===ih||i===rh||i===sh||i===oh||i===ah||i===lh||i===ch||i===uh||i===dh||i===fh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Jf)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===eh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===th)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===nh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ih)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===sh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===oh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ah)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===lh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ch)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===uh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===dh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zl||i===hh||i===ph)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Zl)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ph)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===DS||i===mh||i===gh||i===vh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Zl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===mh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===gh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class F3 extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ll extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const O3={type:"move"};class Ad{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ll,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ll,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ll,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),h=this._getHandJoint(c,y);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(O3)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ll;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const k3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,B3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class z3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Jt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new _r({vertexShader:k3,fragmentShader:B3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ni(new au(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class V3 extends xo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,v=null;const y=new z3,m=n.getContextAttributes();let h=null,_=null;const g=[],S=[],R=new qe;let T=null;const A=new Rn;A.layers.enable(1),A.viewport=new It;const b=new Rn;b.layers.enable(2),b.viewport=new It;const E=[A,b],x=new F3;x.layers.enable(1),x.layers.enable(2);let C=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=g[X];return Q===void 0&&(Q=new Ad,g[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=g[X];return Q===void 0&&(Q=new Ad,g[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=g[X];return Q===void 0&&(Q=new Ad,g[X]=Q),Q.getHandSpace()};function N(X){const Q=S.indexOf(X.inputSource);if(Q===-1)return;const ce=g[Q];ce!==void 0&&(ce.update(X.inputSource,X.frame,c||o),ce.dispatchEvent({type:X.type,data:X.inputSource}))}function O(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",B);for(let X=0;X<g.length;X++){const Q=S[X];Q!==null&&(S[X]=null,g[X].disconnect(Q))}C=null,L=null,y.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,_=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",O),r.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Q),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new ss(p.framebufferWidth,p.framebufferHeight,{format:Wn,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,ce=null,re=null;m.depth&&(re=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Q=m.stencil?ho:Qs,ce=m.stencil?fo:rs);const xe={colorFormat:n.RGBA8,depthFormat:re,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(xe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new ss(f.textureWidth,f.textureHeight,{format:Wn,type:Ii,depthTexture:new $S(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ne.setContext(r),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function B(X){for(let Q=0;Q<X.removed.length;Q++){const ce=X.removed[Q],re=S.indexOf(ce);re>=0&&(S[re]=null,g[re].disconnect(ce))}for(let Q=0;Q<X.added.length;Q++){const ce=X.added[Q];let re=S.indexOf(ce);if(re===-1){for(let Te=0;Te<g.length;Te++)if(Te>=S.length){S.push(ce),re=Te;break}else if(S[Te]===null){S[Te]=ce,re=Te;break}if(re===-1)break}const xe=g[re];xe&&xe.connect(ce)}}const z=new W,$=new W;function I(X,Q,ce){z.setFromMatrixPosition(Q.matrixWorld),$.setFromMatrixPosition(ce.matrixWorld);const re=z.distanceTo($),xe=Q.projectionMatrix.elements,Te=ce.projectionMatrix.elements,De=xe[14]/(xe[10]-1),Ke=xe[14]/(xe[10]+1),D=(xe[9]+1)/xe[5],Ue=(xe[9]-1)/xe[5],Ee=(xe[8]-1)/xe[0],Fe=(Te[8]+1)/Te[0],ye=De*Ee,dt=De*Fe,Oe=re/(-Ee+Fe),Be=Oe*-Ee;Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Be),X.translateZ(Oe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const P=De+Oe,M=Ke+Oe,j=ye-Be,ee=dt+(re-Be),ne=D*Ke/M*P,J=Ue*Ke/M*P;X.projectionMatrix.makePerspective(j,ee,ne,J,P,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function Y(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;y.texture!==null&&(X.near=y.depthNear,X.far=y.depthFar),x.near=b.near=A.near=X.near,x.far=b.far=A.far=X.far,(C!==x.near||L!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,L=x.far,A.near=C,A.far=L,b.near=C,b.far=L,A.updateProjectionMatrix(),b.updateProjectionMatrix(),X.updateProjectionMatrix());const Q=X.parent,ce=x.cameras;Y(x,Q);for(let re=0;re<ce.length;re++)Y(ce[re],Q);ce.length===2?I(x,A,b):x.projectionMatrix.copy(A.projectionMatrix),q(X,x,Q)};function q(X,Q,ce){ce===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(ce.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=_h*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let ie=null;function ge(X,Q){if(u=Q.getViewerPose(c||o),v=Q,u!==null){const ce=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let re=!1;ce.length!==x.cameras.length&&(x.cameras.length=0,re=!0);for(let Te=0;Te<ce.length;Te++){const De=ce[Te];let Ke=null;if(p!==null)Ke=p.getViewport(De);else{const Ue=d.getViewSubImage(f,De);Ke=Ue.viewport,Te===0&&(e.setRenderTargetTextures(_,Ue.colorTexture,f.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(_))}let D=E[Te];D===void 0&&(D=new Rn,D.layers.enable(Te),D.viewport=new It,E[Te]=D),D.matrix.fromArray(De.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(De.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Te===0&&(x.matrix.copy(D.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),re===!0&&x.cameras.push(D)}const xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")){const Te=d.getDepthInformation(ce[0]);Te&&Te.isValid&&Te.texture&&y.init(e,Te,r.renderState)}}for(let ce=0;ce<g.length;ce++){const re=S[ce],xe=g[ce];re!==null&&xe!==void 0&&xe.update(re,Q,c||o)}ie&&ie(X,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),v=null}const Ne=new XS;Ne.setAnimationLoop(ge),this.setAnimationLoop=function(X){ie=X},this.dispose=function(){}}}const Dr=new Ni,H3=new Ct;function G3(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,HS(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,_,g,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),v(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),y(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,_,g):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===un&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===un&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const _=e.get(h),g=_.envMap,S=_.envMapRotation;g&&(m.envMap.value=g,Dr.copy(S),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),m.envMapRotation.value.setFromMatrix4(H3.makeRotationFromEuler(Dr)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,_,g){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*_,m.scale.value=g*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,_){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===un&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function y(m,h){const _=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function W3(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,g){const S=g.program;i.uniformBlockBinding(_,S)}function c(_,g){let S=r[_.id];S===void 0&&(v(_),S=u(_),r[_.id]=S,_.addEventListener("dispose",m));const R=g.program;i.updateUBOMapping(_,R);const T=e.render.frame;s[_.id]!==T&&(f(_),s[_.id]=T)}function u(_){const g=d();_.__bindingPointIndex=g;const S=t.createBuffer(),R=_.__size,T=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,R,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,S),S}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const g=r[_.id],S=_.uniforms,R=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let T=0,A=S.length;T<A;T++){const b=Array.isArray(S[T])?S[T]:[S[T]];for(let E=0,x=b.length;E<x;E++){const C=b[E];if(p(C,T,E,R)===!0){const L=C.__offset,N=Array.isArray(C.value)?C.value:[C.value];let O=0;for(let B=0;B<N.length;B++){const z=N[B],$=y(z);typeof z=="number"||typeof z=="boolean"?(C.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,L+O,C.__data)):z.isMatrix3?(C.__data[0]=z.elements[0],C.__data[1]=z.elements[1],C.__data[2]=z.elements[2],C.__data[3]=0,C.__data[4]=z.elements[3],C.__data[5]=z.elements[4],C.__data[6]=z.elements[5],C.__data[7]=0,C.__data[8]=z.elements[6],C.__data[9]=z.elements[7],C.__data[10]=z.elements[8],C.__data[11]=0):(z.toArray(C.__data,O),O+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,L,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,g,S,R){const T=_.value,A=g+"_"+S;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{const b=R[A];if(typeof T=="number"||typeof T=="boolean"){if(b!==T)return R[A]=T,!0}else if(b.equals(T)===!1)return b.copy(T),!0}return!1}function v(_){const g=_.uniforms;let S=0;const R=16;for(let A=0,b=g.length;A<b;A++){const E=Array.isArray(g[A])?g[A]:[g[A]];for(let x=0,C=E.length;x<C;x++){const L=E[x],N=Array.isArray(L.value)?L.value:[L.value];for(let O=0,B=N.length;O<B;O++){const z=N[O],$=y(z),I=S%R;I!==0&&R-I<$.boundary&&(S+=R-I),L.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,S+=$.storage}}}const T=S%R;return T>0&&(S+=R-T),_.__size=S,_.__cache={},this}function y(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function m(_){const g=_.target;g.removeEventListener("dispose",m);const S=o.indexOf(g.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function h(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class j3{constructor(e={}){const{canvas:n=NR(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),v=new Int32Array(4);let y=null,m=null;const h=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zn,this.toneMapping=fr,this.toneMappingExposure=1;const g=this;let S=!1,R=0,T=0,A=null,b=-1,E=null;const x=new It,C=new It;let L=null;const N=new rt(0);let O=0,B=n.width,z=n.height,$=1,I=null,Y=null;const q=new It(0,0,B,z),ie=new It(0,0,B,z);let ge=!1;const Ne=new jS;let X=!1,Q=!1;const ce=new Ct,re=new W,xe=new It,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function Ke(){return A===null?$:1}let D=i;function Ue(w,F){return n.getContext(w,F)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${jp}`),n.addEventListener("webglcontextlost",K,!1),n.addEventListener("webglcontextrestored",Z,!1),n.addEventListener("webglcontextcreationerror",ue,!1),D===null){const F="webgl2";if(D=Ue(F,w),D===null)throw Ue(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ee,Fe,ye,dt,Oe,Be,P,M,j,ee,ne,J,Ae,fe,ve,Ve,oe,me,Xe,Ie,_e,ke,We,ft;function U(){Ee=new QL(D),Ee.init(),ke=new U3(D,Ee),Fe=new jL(D,Ee,e,ke),ye=new D3(D),dt=new tD(D),Oe=new _3,Be=new N3(D,Ee,ye,Oe,Fe,ke,dt),P=new $L(g),M=new ZL(g),j=new aP(D),We=new GL(D,j),ee=new JL(D,j,dt,We),ne=new iD(D,ee,j,dt),Xe=new nD(D,Fe,Be),Ve=new XL(Oe),J=new v3(g,P,M,Ee,Fe,We,Ve),Ae=new G3(g,Oe),fe=new x3,ve=new A3(Ee),me=new HL(g,P,M,ye,ne,f,l),oe=new L3(g,ne,Fe),ft=new W3(D,dt,Fe,ye),Ie=new WL(D,Ee,dt),_e=new eD(D,Ee,dt),dt.programs=J.programs,g.capabilities=Fe,g.extensions=Ee,g.properties=Oe,g.renderLists=fe,g.shadowMap=oe,g.state=ye,g.info=dt}U();const ae=new V3(g,D);this.xr=ae,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=Ee.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ee.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(B,z,!1))},this.getSize=function(w){return w.set(B,z)},this.setSize=function(w,F,V=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=w,z=F,n.width=Math.floor(w*$),n.height=Math.floor(F*$),V===!0&&(n.style.width=w+"px",n.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(B*$,z*$).floor()},this.setDrawingBufferSize=function(w,F,V){B=w,z=F,$=V,n.width=Math.floor(w*V),n.height=Math.floor(F*V),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(x)},this.getViewport=function(w){return w.copy(q)},this.setViewport=function(w,F,V,G){w.isVector4?q.set(w.x,w.y,w.z,w.w):q.set(w,F,V,G),ye.viewport(x.copy(q).multiplyScalar($).round())},this.getScissor=function(w){return w.copy(ie)},this.setScissor=function(w,F,V,G){w.isVector4?ie.set(w.x,w.y,w.z,w.w):ie.set(w,F,V,G),ye.scissor(C.copy(ie).multiplyScalar($).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(w){ye.setScissorTest(ge=w)},this.setOpaqueSort=function(w){I=w},this.setTransparentSort=function(w){Y=w},this.getClearColor=function(w){return w.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(w=!0,F=!0,V=!0){let G=0;if(w){let k=!1;if(A!==null){const le=A.texture.format;k=le===Zp||le===qp||le===Kp}if(k){const le=A.texture.type,he=le===Ii||le===rs||le===wa||le===fo||le===$p||le===Yp,Se=me.getClearColor(),Me=me.getClearAlpha(),Pe=Se.r,Le=Se.g,be=Se.b;he?(p[0]=Pe,p[1]=Le,p[2]=be,p[3]=Me,D.clearBufferuiv(D.COLOR,0,p)):(v[0]=Pe,v[1]=Le,v[2]=be,v[3]=Me,D.clearBufferiv(D.COLOR,0,v))}else G|=D.COLOR_BUFFER_BIT}F&&(G|=D.DEPTH_BUFFER_BIT),V&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",K,!1),n.removeEventListener("webglcontextrestored",Z,!1),n.removeEventListener("webglcontextcreationerror",ue,!1),fe.dispose(),ve.dispose(),Oe.dispose(),P.dispose(),M.dispose(),ne.dispose(),We.dispose(),ft.dispose(),J.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Yn),ae.removeEventListener("sessionend",rm),Tr.stop()};function K(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=dt.autoReset,F=oe.enabled,V=oe.autoUpdate,G=oe.needsUpdate,k=oe.type;U(),dt.autoReset=w,oe.enabled=F,oe.autoUpdate=V,oe.needsUpdate=G,oe.type=k}function ue(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Re(w){const F=w.target;F.removeEventListener("dispose",Re),$e(F)}function $e(w){Mt(w),Oe.remove(w)}function Mt(w){const F=Oe.get(w).programs;F!==void 0&&(F.forEach(function(V){J.releaseProgram(V)}),w.isShaderMaterial&&J.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,V,G,k,le){F===null&&(F=Te);const he=k.isMesh&&k.matrixWorld.determinant()<0,Se=eM(w,F,V,G,k);ye.setMaterial(G,he);let Me=V.index,Pe=1;if(G.wireframe===!0){if(Me=ee.getWireframeAttribute(V),Me===void 0)return;Pe=2}const Le=V.drawRange,be=V.attributes.position;let Qe=Le.start*Pe,vt=(Le.start+Le.count)*Pe;le!==null&&(Qe=Math.max(Qe,le.start*Pe),vt=Math.min(vt,(le.start+le.count)*Pe)),Me!==null?(Qe=Math.max(Qe,0),vt=Math.min(vt,Me.count)):be!=null&&(Qe=Math.max(Qe,0),vt=Math.min(vt,be.count));const _t=vt-Qe;if(_t<0||_t===1/0)return;We.setup(k,G,Se,V,Me);let dn,Je=Ie;if(Me!==null&&(dn=j.get(Me),Je=_e,Je.setIndex(dn)),k.isMesh)G.wireframe===!0?(ye.setLineWidth(G.wireframeLinewidth*Ke()),Je.setMode(D.LINES)):Je.setMode(D.TRIANGLES);else if(k.isLine){let we=G.linewidth;we===void 0&&(we=1),ye.setLineWidth(we*Ke()),k.isLineSegments?Je.setMode(D.LINES):k.isLineLoop?Je.setMode(D.LINE_LOOP):Je.setMode(D.LINE_STRIP)}else k.isPoints?Je.setMode(D.POINTS):k.isSprite&&Je.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Je.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))Je.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const we=k._multiDrawStarts,Ft=k._multiDrawCounts,et=k._multiDrawCount,Un=Me?j.get(Me).bytesPerElement:1,cs=Oe.get(G).currentProgram.getUniforms();for(let fn=0;fn<et;fn++)cs.setValue(D,"_gl_DrawID",fn),Je.render(we[fn]/Un,Ft[fn])}else if(k.isInstancedMesh)Je.renderInstances(Qe,_t,k.count);else if(V.isInstancedBufferGeometry){const we=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ft=Math.min(V.instanceCount,we);Je.renderInstances(Qe,_t,Ft)}else Je.render(Qe,_t)};function Ut(w,F,V){w.transparent===!0&&w.side===_i&&w.forceSinglePass===!1?(w.side=un,w.needsUpdate=!0,Va(w,F,V),w.side=vr,w.needsUpdate=!0,Va(w,F,V),w.side=_i):Va(w,F,V)}this.compile=function(w,F,V=null){V===null&&(V=w),m=ve.get(V),m.init(F),_.push(m),V.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),w!==V&&w.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();const G=new Set;return w.traverse(function(k){const le=k.material;if(le)if(Array.isArray(le))for(let he=0;he<le.length;he++){const Se=le[he];Ut(Se,V,k),G.add(Se)}else Ut(le,V,k),G.add(le)}),_.pop(),m=null,G},this.compileAsync=function(w,F,V=null){const G=this.compile(w,F,V);return new Promise(k=>{function le(){if(G.forEach(function(he){Oe.get(he).currentProgram.isReady()&&G.delete(he)}),G.size===0){k(w);return}setTimeout(le,10)}Ee.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Ze=null;function li(w){Ze&&Ze(w)}function Yn(){Tr.stop()}function rm(){Tr.start()}const Tr=new XS;Tr.setAnimationLoop(li),typeof self<"u"&&Tr.setContext(self),this.setAnimationLoop=function(w){Ze=w,ae.setAnimationLoop(w),w===null?Tr.stop():Tr.start()},ae.addEventListener("sessionstart",Yn),ae.addEventListener("sessionend",rm),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(F),F=ae.getCamera()),w.isScene===!0&&w.onBeforeRender(g,w,F,A),m=ve.get(w,_.length),m.init(F),_.push(m),ce.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ne.setFromProjectionMatrix(ce),Q=this.localClippingEnabled,X=Ve.init(this.clippingPlanes,Q),y=fe.get(w,h.length),y.init(),h.push(y),ae.enabled===!0&&ae.isPresenting===!0){const le=g.xr.getDepthSensingMesh();le!==null&&cu(le,F,-1/0,g.sortObjects)}cu(w,F,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(I,Y),De=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,De&&me.addToRenderList(y,w),this.info.render.frame++,X===!0&&Ve.beginShadows();const V=m.state.shadowsArray;oe.render(V,w,F),X===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=y.opaque,k=y.transmissive;if(m.setupLights(),F.isArrayCamera){const le=F.cameras;if(k.length>0)for(let he=0,Se=le.length;he<Se;he++){const Me=le[he];om(G,k,w,Me)}De&&me.render(w);for(let he=0,Se=le.length;he<Se;he++){const Me=le[he];sm(y,w,Me,Me.viewport)}}else k.length>0&&om(G,k,w,F),De&&me.render(w),sm(y,w,F);A!==null&&(Be.updateMultisampleRenderTarget(A),Be.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(g,w,F),We.resetDefaultState(),b=-1,E=null,_.pop(),_.length>0?(m=_[_.length-1],X===!0&&Ve.setGlobalState(g.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?y=h[h.length-1]:y=null};function cu(w,F,V,G){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ne.intersectsSprite(w)){G&&xe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ce);const he=ne.update(w),Se=w.material;Se.visible&&y.push(w,he,Se,V,xe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ne.intersectsObject(w))){const he=ne.update(w),Se=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),xe.copy(w.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),xe.copy(he.boundingSphere.center)),xe.applyMatrix4(w.matrixWorld).applyMatrix4(ce)),Array.isArray(Se)){const Me=he.groups;for(let Pe=0,Le=Me.length;Pe<Le;Pe++){const be=Me[Pe],Qe=Se[be.materialIndex];Qe&&Qe.visible&&y.push(w,he,Qe,V,xe.z,be)}}else Se.visible&&y.push(w,he,Se,V,xe.z,null)}}const le=w.children;for(let he=0,Se=le.length;he<Se;he++)cu(le[he],F,V,G)}function sm(w,F,V,G){const k=w.opaque,le=w.transmissive,he=w.transparent;m.setupLightsView(V),X===!0&&Ve.setGlobalState(g.clippingPlanes,V),G&&ye.viewport(x.copy(G)),k.length>0&&za(k,F,V),le.length>0&&za(le,F,V),he.length>0&&za(he,F,V),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function om(w,F,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new ss(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?Ua:Ii,minFilter:Yr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const le=m.state.transmissionRenderTarget[G.id],he=G.viewport||x;le.setSize(he.z,he.w);const Se=g.getRenderTarget();g.setRenderTarget(le),g.getClearColor(N),O=g.getClearAlpha(),O<1&&g.setClearColor(16777215,.5),De?me.render(V):g.clear();const Me=g.toneMapping;g.toneMapping=fr;const Pe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),X===!0&&Ve.setGlobalState(g.clippingPlanes,G),za(w,V,G),Be.updateMultisampleRenderTarget(le),Be.updateRenderTargetMipmap(le),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let be=0,Qe=F.length;be<Qe;be++){const vt=F[be],_t=vt.object,dn=vt.geometry,Je=vt.material,we=vt.group;if(Je.side===_i&&_t.layers.test(G.layers)){const Ft=Je.side;Je.side=un,Je.needsUpdate=!0,am(_t,V,G,dn,Je,we),Je.side=Ft,Je.needsUpdate=!0,Le=!0}}Le===!0&&(Be.updateMultisampleRenderTarget(le),Be.updateRenderTargetMipmap(le))}g.setRenderTarget(Se),g.setClearColor(N,O),Pe!==void 0&&(G.viewport=Pe),g.toneMapping=Me}function za(w,F,V){const G=F.isScene===!0?F.overrideMaterial:null;for(let k=0,le=w.length;k<le;k++){const he=w[k],Se=he.object,Me=he.geometry,Pe=G===null?he.material:G,Le=he.group;Se.layers.test(V.layers)&&am(Se,F,V,Me,Pe,Le)}}function am(w,F,V,G,k,le){w.onBeforeRender(g,F,V,G,k,le),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.transparent===!0&&k.side===_i&&k.forceSinglePass===!1?(k.side=un,k.needsUpdate=!0,g.renderBufferDirect(V,F,G,k,w,le),k.side=vr,k.needsUpdate=!0,g.renderBufferDirect(V,F,G,k,w,le),k.side=_i):g.renderBufferDirect(V,F,G,k,w,le),w.onAfterRender(g,F,V,G,k,le)}function Va(w,F,V){F.isScene!==!0&&(F=Te);const G=Oe.get(w),k=m.state.lights,le=m.state.shadowsArray,he=k.state.version,Se=J.getParameters(w,k.state,le,F,V),Me=J.getProgramCacheKey(Se);let Pe=G.programs;G.environment=w.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(w.isMeshStandardMaterial?M:P).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Pe===void 0&&(w.addEventListener("dispose",Re),Pe=new Map,G.programs=Pe);let Le=Pe.get(Me);if(Le!==void 0){if(G.currentProgram===Le&&G.lightsStateVersion===he)return cm(w,Se),Le}else Se.uniforms=J.getUniforms(w),w.onBeforeCompile(Se,g),Le=J.acquireProgram(Se,Me),Pe.set(Me,Le),G.uniforms=Se.uniforms;const be=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(be.clippingPlanes=Ve.uniform),cm(w,Se),G.needsLights=nM(w),G.lightsStateVersion=he,G.needsLights&&(be.ambientLightColor.value=k.state.ambient,be.lightProbe.value=k.state.probe,be.directionalLights.value=k.state.directional,be.directionalLightShadows.value=k.state.directionalShadow,be.spotLights.value=k.state.spot,be.spotLightShadows.value=k.state.spotShadow,be.rectAreaLights.value=k.state.rectArea,be.ltc_1.value=k.state.rectAreaLTC1,be.ltc_2.value=k.state.rectAreaLTC2,be.pointLights.value=k.state.point,be.pointLightShadows.value=k.state.pointShadow,be.hemisphereLights.value=k.state.hemi,be.directionalShadowMap.value=k.state.directionalShadowMap,be.directionalShadowMatrix.value=k.state.directionalShadowMatrix,be.spotShadowMap.value=k.state.spotShadowMap,be.spotLightMatrix.value=k.state.spotLightMatrix,be.spotLightMap.value=k.state.spotLightMap,be.pointShadowMap.value=k.state.pointShadowMap,be.pointShadowMatrix.value=k.state.pointShadowMatrix),G.currentProgram=Le,G.uniformsList=null,Le}function lm(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=Ql.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function cm(w,F){const V=Oe.get(w);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function eM(w,F,V,G,k){F.isScene!==!0&&(F=Te),Be.resetTextureUnits();const le=F.fog,he=G.isMeshStandardMaterial?F.environment:null,Se=A===null?g.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Er,Me=(G.isMeshStandardMaterial?M:P).get(G.envMap||he),Pe=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Le=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),be=!!V.morphAttributes.position,Qe=!!V.morphAttributes.normal,vt=!!V.morphAttributes.color;let _t=fr;G.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(_t=g.toneMapping);const dn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Je=dn!==void 0?dn.length:0,we=Oe.get(G),Ft=m.state.lights;if(X===!0&&(Q===!0||w!==E)){const En=w===E&&G.id===b;Ve.setState(G,w,En)}let et=!1;G.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Ft.state.version||we.outputColorSpace!==Se||k.isBatchedMesh&&we.batching===!1||!k.isBatchedMesh&&we.batching===!0||k.isBatchedMesh&&we.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&we.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&we.instancing===!1||!k.isInstancedMesh&&we.instancing===!0||k.isSkinnedMesh&&we.skinning===!1||!k.isSkinnedMesh&&we.skinning===!0||k.isInstancedMesh&&we.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&we.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&we.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&we.instancingMorph===!1&&k.morphTexture!==null||we.envMap!==Me||G.fog===!0&&we.fog!==le||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Ve.numPlanes||we.numIntersection!==Ve.numIntersection)||we.vertexAlphas!==Pe||we.vertexTangents!==Le||we.morphTargets!==be||we.morphNormals!==Qe||we.morphColors!==vt||we.toneMapping!==_t||we.morphTargetsCount!==Je)&&(et=!0):(et=!0,we.__version=G.version);let Un=we.currentProgram;et===!0&&(Un=Va(G,F,k));let cs=!1,fn=!1,uu=!1;const Et=Un.getUniforms(),Fi=we.uniforms;if(ye.useProgram(Un.program)&&(cs=!0,fn=!0,uu=!0),G.id!==b&&(b=G.id,fn=!0),cs||E!==w){Et.setValue(D,"projectionMatrix",w.projectionMatrix),Et.setValue(D,"viewMatrix",w.matrixWorldInverse);const En=Et.map.cameraPosition;En!==void 0&&En.setValue(D,re.setFromMatrixPosition(w.matrixWorld)),Fe.logarithmicDepthBuffer&&Et.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Et.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,fn=!0,uu=!0)}if(k.isSkinnedMesh){Et.setOptional(D,k,"bindMatrix"),Et.setOptional(D,k,"bindMatrixInverse");const En=k.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Et.setValue(D,"boneTexture",En.boneTexture,Be))}k.isBatchedMesh&&(Et.setOptional(D,k,"batchingTexture"),Et.setValue(D,"batchingTexture",k._matricesTexture,Be),Et.setOptional(D,k,"batchingIdTexture"),Et.setValue(D,"batchingIdTexture",k._indirectTexture,Be),Et.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&Et.setValue(D,"batchingColorTexture",k._colorsTexture,Be));const du=V.morphAttributes;if((du.position!==void 0||du.normal!==void 0||du.color!==void 0)&&Xe.update(k,V,Un),(fn||we.receiveShadow!==k.receiveShadow)&&(we.receiveShadow=k.receiveShadow,Et.setValue(D,"receiveShadow",k.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Fi.envMap.value=Me,Fi.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(Fi.envMapIntensity.value=F.environmentIntensity),fn&&(Et.setValue(D,"toneMappingExposure",g.toneMappingExposure),we.needsLights&&tM(Fi,uu),le&&G.fog===!0&&Ae.refreshFogUniforms(Fi,le),Ae.refreshMaterialUniforms(Fi,G,$,z,m.state.transmissionRenderTarget[w.id]),Ql.upload(D,lm(we),Fi,Be)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ql.upload(D,lm(we),Fi,Be),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Et.setValue(D,"center",k.center),Et.setValue(D,"modelViewMatrix",k.modelViewMatrix),Et.setValue(D,"normalMatrix",k.normalMatrix),Et.setValue(D,"modelMatrix",k.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const En=G.uniformsGroups;for(let fu=0,iM=En.length;fu<iM;fu++){const um=En[fu];ft.update(um,Un),ft.bind(um,Un)}}return Un}function tM(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function nM(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,F,V){Oe.get(w.texture).__webglTexture=F,Oe.get(w.depthTexture).__webglTexture=V;const G=Oe.get(w);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,F){const V=Oe.get(w);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,V=0){A=w,R=F,T=V;let G=!0,k=null,le=!1,he=!1;if(w){const Me=Oe.get(w);Me.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(D.FRAMEBUFFER,null),G=!1):Me.__webglFramebuffer===void 0?Be.setupRenderTarget(w):Me.__hasExternalTextures&&Be.rebindTextures(w,Oe.get(w.texture).__webglTexture,Oe.get(w.depthTexture).__webglTexture);const Pe=w.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(he=!0);const Le=Oe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Le[F])?k=Le[F][V]:k=Le[F],le=!0):w.samples>0&&Be.useMultisampledRTT(w)===!1?k=Oe.get(w).__webglMultisampledFramebuffer:Array.isArray(Le)?k=Le[V]:k=Le,x.copy(w.viewport),C.copy(w.scissor),L=w.scissorTest}else x.copy(q).multiplyScalar($).floor(),C.copy(ie).multiplyScalar($).floor(),L=ge;if(ye.bindFramebuffer(D.FRAMEBUFFER,k)&&G&&ye.drawBuffers(w,k),ye.viewport(x),ye.scissor(C),ye.setScissorTest(L),le){const Me=Oe.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,Me.__webglTexture,V)}else if(he){const Me=Oe.get(w.texture),Pe=F||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Me.__webglTexture,V||0,Pe)}b=-1},this.readRenderTargetPixels=function(w,F,V,G,k,le,he){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Oe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&he!==void 0&&(Se=Se[he]),Se){ye.bindFramebuffer(D.FRAMEBUFFER,Se);try{const Me=w.texture,Pe=Me.format,Le=Me.type;if(!Fe.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-G&&V>=0&&V<=w.height-k&&D.readPixels(F,V,G,k,ke.convert(Pe),ke.convert(Le),le)}finally{const Me=A!==null?Oe.get(A).__webglFramebuffer:null;ye.bindFramebuffer(D.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(w,F,V,G,k,le,he){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Oe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&he!==void 0&&(Se=Se[he]),Se){ye.bindFramebuffer(D.FRAMEBUFFER,Se);try{const Me=w.texture,Pe=Me.format,Le=Me.type;if(!Fe.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=w.width-G&&V>=0&&V<=w.height-k){const be=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,be),D.bufferData(D.PIXEL_PACK_BUFFER,le.byteLength,D.STREAM_READ),D.readPixels(F,V,G,k,ke.convert(Pe),ke.convert(Le),0),D.flush();const Qe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await UR(D,Qe,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,be),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,le)}finally{D.deleteBuffer(be),D.deleteSync(Qe)}return le}}finally{const Me=A!==null?Oe.get(A).__webglFramebuffer:null;ye.bindFramebuffer(D.FRAMEBUFFER,Me)}}},this.copyFramebufferToTexture=function(w,F=null,V=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,w=arguments[1]);const G=Math.pow(2,-V),k=Math.floor(w.image.width*G),le=Math.floor(w.image.height*G),he=F!==null?F.x:0,Se=F!==null?F.y:0;Be.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,he,Se,k,le),ye.unbindTexture()},this.copyTextureToTexture=function(w,F,V=null,G=null,k=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,w=arguments[1],F=arguments[2],k=arguments[3]||0,V=null);let le,he,Se,Me,Pe,Le;V!==null?(le=V.max.x-V.min.x,he=V.max.y-V.min.y,Se=V.min.x,Me=V.min.y):(le=w.image.width,he=w.image.height,Se=0,Me=0),G!==null?(Pe=G.x,Le=G.y):(Pe=0,Le=0);const be=ke.convert(F.format),Qe=ke.convert(F.type);Be.setTexture2D(F,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const vt=D.getParameter(D.UNPACK_ROW_LENGTH),_t=D.getParameter(D.UNPACK_IMAGE_HEIGHT),dn=D.getParameter(D.UNPACK_SKIP_PIXELS),Je=D.getParameter(D.UNPACK_SKIP_ROWS),we=D.getParameter(D.UNPACK_SKIP_IMAGES),Ft=w.isCompressedTexture?w.mipmaps[k]:w.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Ft.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ft.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Se),D.pixelStorei(D.UNPACK_SKIP_ROWS,Me),w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,k,Pe,Le,le,he,be,Qe,Ft.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,k,Pe,Le,Ft.width,Ft.height,be,Ft.data):D.texSubImage2D(D.TEXTURE_2D,k,Pe,Le,le,he,be,Qe,Ft),D.pixelStorei(D.UNPACK_ROW_LENGTH,vt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_t),D.pixelStorei(D.UNPACK_SKIP_PIXELS,dn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Je),D.pixelStorei(D.UNPACK_SKIP_IMAGES,we),k===0&&F.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(w,F,V=null,G=null,k=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,w=arguments[2],F=arguments[3],k=arguments[4]||0);let le,he,Se,Me,Pe,Le,be,Qe,vt;const _t=w.isCompressedTexture?w.mipmaps[k]:w.image;V!==null?(le=V.max.x-V.min.x,he=V.max.y-V.min.y,Se=V.max.z-V.min.z,Me=V.min.x,Pe=V.min.y,Le=V.min.z):(le=_t.width,he=_t.height,Se=_t.depth,Me=0,Pe=0,Le=0),G!==null?(be=G.x,Qe=G.y,vt=G.z):(be=0,Qe=0,vt=0);const dn=ke.convert(F.format),Je=ke.convert(F.type);let we;if(F.isData3DTexture)Be.setTexture3D(F,0),we=D.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)Be.setTexture2DArray(F,0),we=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const Ft=D.getParameter(D.UNPACK_ROW_LENGTH),et=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Un=D.getParameter(D.UNPACK_SKIP_PIXELS),cs=D.getParameter(D.UNPACK_SKIP_ROWS),fn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,_t.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_t.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Me),D.pixelStorei(D.UNPACK_SKIP_ROWS,Pe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Le),w.isDataTexture||w.isData3DTexture?D.texSubImage3D(we,k,be,Qe,vt,le,he,Se,dn,Je,_t.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(we,k,be,Qe,vt,le,he,Se,dn,_t.data):D.texSubImage3D(we,k,be,Qe,vt,le,he,Se,dn,Je,_t),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ft),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,et),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Un),D.pixelStorei(D.UNPACK_SKIP_ROWS,cs),D.pixelStorei(D.UNPACK_SKIP_IMAGES,fn),k===0&&F.generateMipmaps&&D.generateMipmap(we),ye.unbindTexture()},this.initRenderTarget=function(w){Oe.get(w).__webglFramebuffer===void 0&&Be.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Be.setTextureCube(w,0):w.isData3DTexture?Be.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Be.setTexture2DArray(w,0):Be.setTexture2D(w,0),ye.unbindTexture()},this.resetState=function(){R=0,T=0,A=null,ye.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Qp?"display-p3":"srgb",n.unpackColorSpace=nt.workingColorSpace===su?"display-p3":"srgb"}}class X3 extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class nm extends wr{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],f=[],p=[];let v=0;const y=[],m=i/2;let h=0;_(),o===!1&&(e>0&&g(!0),n>0&&g(!1)),this.setIndex(u),this.setAttribute("position",new ai(d,3)),this.setAttribute("normal",new ai(f,3)),this.setAttribute("uv",new ai(p,2));function _(){const S=new W,R=new W;let T=0;const A=(n-e)/i;for(let b=0;b<=s;b++){const E=[],x=b/s,C=x*(n-e)+e;for(let L=0;L<=r;L++){const N=L/r,O=N*l+a,B=Math.sin(O),z=Math.cos(O);R.x=C*B,R.y=-x*i+m,R.z=C*z,d.push(R.x,R.y,R.z),S.set(B,A,z).normalize(),f.push(S.x,S.y,S.z),p.push(N,1-x),E.push(v++)}y.push(E)}for(let b=0;b<r;b++)for(let E=0;E<s;E++){const x=y[E][b],C=y[E+1][b],L=y[E+1][b+1],N=y[E][b+1];u.push(x,C,N),u.push(C,L,N),T+=6}c.addGroup(h,T,0),h+=T}function g(S){const R=v,T=new qe,A=new W;let b=0;const E=S===!0?e:n,x=S===!0?1:-1;for(let L=1;L<=r;L++)d.push(0,m*x,0),f.push(0,x,0),p.push(.5,.5),v++;const C=v;for(let L=0;L<=r;L++){const O=L/r*l+a,B=Math.cos(O),z=Math.sin(O);A.x=E*z,A.y=m*x,A.z=E*B,d.push(A.x,A.y,A.z),f.push(0,x,0),T.x=B*.5+.5,T.y=z*.5*x+.5,p.push(T.x,T.y),v++}for(let L=0;L<r;L++){const N=R+L,O=C+L;S===!0?u.push(O,O+1,N):u.push(O+1,O,N),b+=3}c.addGroup(h,b,S===!0?1:2),h+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nm(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const R0={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class $3{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const p=c[d],v=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null}}}const Y3=new $3;class im{constructor(e){this.manager=e!==void 0?e:Y3,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}im.DEFAULT_MATERIAL_NAME="__DEFAULT";class K3 extends im{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=R0.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=Ta("img");function l(){u(),R0.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class q3 extends im{constructor(e){super(e)}load(e,n,i,r){const s=new Jt,o=new K3(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jp);function Z3({imageUrl:t,onFlip:e}){const n=se.useRef(null),i=1;let r=new Date().getTime(),s=0;const o=2*Math.PI,[a,l]=se.useState(!1);return se.useEffect(()=>{const d=new j3({alpha:!0});d.setSize(n.current.clientWidth,n.current.clientHeight),n.current.appendChild(d.domElement);const f=new Rn(35,n.current.clientWidth/n.current.clientHeight,1,2e3);f.position.z=300;const p=new X3,y=new q3().load(t),m=new em({map:y,color:15658734}),h=new nm(90,90,10,50),_=new ni(h,m);_.rotation.x=Math.PI/2,p.add(_);const g=()=>{const S=new Date().getTime(),R=S-r,T=i*R*2*Math.PI/1e3;r=S,s<o?(_.rotation.z+=T,s+=T):(_.rotation.z=o,l(!1)),d.render(p,f),s<o&&requestAnimationFrame(g)};return e&&!a&&(g(),l(!0)),()=>{d.dispose()}},[e,a]),H.jsx("div",{ref:n,style:{width:"110px",height:"110px"}})}const Q3="https://Kiranjeet28.github.io/Portfolio/assets/myimg-DuJIaqgu.jpeg";function P0(){let t=["Java","Web"];const[e,n]=se.useState(!1);se.useEffect(()=>{OC.init()},[]);const i=()=>{e||n(!0)};return H.jsxs("div",{className:" p-4 h-auto flex flex-col md:flex-wrap md:bg-no-repeat md:bg-cover md:bg-bg",children:[H.jsxs("div",{className:"flex md:flex-col ",children:[H.jsx("div",{className:"rounded-[50%] p-0 m-0 md:mt-2  md:h-[21vh] h-28 md:max-w-48 md:relative md:self-center md:bottom-[-40px]   ",children:H.jsx(Z3,{imageUrl:Q3,onFlip:i})}),H.jsxs("div",{className:"p-0 md:mt-4  text-center",children:[H.jsx(UC,{className:" bold  text-2xl font-bold font-mono p-0 m-0 md:relative md:bottom-40 md:text-4xl  md:m-3  text-slate-100 ",children:"Kiranjeet Kour "}),H.jsxs("h3",{className:" text-[16px] p-1 m-0 pb-2 md:text-[25px] md:mt-0 mt-4 md:font-semibold font-bold dark:text-black shadow-black text-gray-100 md:text-black overflow md:ml-0 ml-3 ",children:["Full Stack ",H.jsx("span",{className:" from-indigo-500 via-indigo-400 to-indigo-700 bg-gradient-to-tr  rounded-xl  ",children:H.jsx(NC,{className:"  text-white text-[17px] md:text-[28px] font-bold",words:t})})," Development"]})]})]}),H.jsxs("div",{className:"flex justify-evenly",children:[H.jsx("a",{href:"https://github.com/kiranjeet28",children:H.jsx("img",{src:"https://cdn-1.webcatalog.io/catalog/github/github-icon.png",alt:"",className:"md:h-[4.5vh] h-[3.8vh] rounded-md"})}),H.jsx("a",{href:"https://www.linkedin.com/in/kiranjeet-kour-3823ba268",children:H.jsx("img",{src:"https://pngimg.com/uploads/linkedIn/linkedIn_PNG7.png",alt:"",className:"md:h-[4.5vh] h-[3.5vh] rounded-md"})}),H.jsx("a",{href:"https://twitter.com/KourSuri5352",children:H.jsx("img",{src:"https://th.bing.com/th/id/OIP.PjG-Z-6wXH8l-9kLJKLdqgAAAA?rs=1&pid=ImgDetMain",alt:"",className:"md:h-[3.5vh] h-[3vh] rounded-md"})}),H.jsx("a",{href:"mailto:kiranjeetkour144@gmail.com",children:H.jsx("img",{src:"https://logos-world.net/wp-content/uploads/2020/11/Gmail-Logo.png",alt:"",className:"md:h-[3.5vh] h-[3vh]  w-[8vw] md:w-auto rounded-md bg-black "})})]})]})}const QS=({children:t,className:e,containerClassName:n,animate:i=!0,isDarkMode:r=!1})=>{const s={initial:{backgroundPosition:"0 50%"},animate:{backgroundPosition:["0, 20%","50% 25%","0 30%"]}},l=r?"bg-[radial-gradient(circle_farthest-side_at_0_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_100%_0,#4b0082,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#4b0082,transparent),radial-gradient(circle_farthest-side_at_0_0,#ffc414,#141316)]":"bg-[radial-gradient(circle_farthest-side_at_0_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_0_0,#ffc414,#141316)]";return H.jsxs("div",{className:ti("relative p-[4px] group",n),children:[H.jsx(is.div,{variants:i?s:void 0,initial:i?"initial":void 0,animate:i?"animate":void 0,transition:i?{duration:5,repeat:1/0,repeatType:"reverse"}:void 0,style:{backgroundSize:i?"400% 400%":void 0},className:ti("absolute inset-0 opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform",l)}),H.jsx(is.div,{variants:i?s:void 0,initial:i?"initial":void 0,animate:i?"animate":void 0,transition:i?{duration:5,repeat:1/0,repeatType:"reverse"}:void 0,style:{backgroundSize:i?"400% 400%":void 0},className:ti("absolute will-change-transform",l)}),H.jsx("div",{className:ti("relative",e),children:t})]})};function J3(){const[t,e]=se.useState(!1);return se.useEffect(()=>{const n=()=>{e(window.innerWidth<771)};return n(),window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),H.jsx("div",{children:t?H.jsx(QS,{backgroundColor:"black",baseHue:190,rangeY:40,children:H.jsx(P0,{})}):H.jsx(P0,{})})}function bd({title:t,arr:e}){return H.jsxs("div",{className:"w-72 p-5 m-auto mb-5  md:mt-0 rounded-lg bg-gray-700 dark:bg-gray-500  ",children:[H.jsx("section",{className:"text-gray-200 text-left text-lg font-semibold dark:text-gray-100 mb-4 ",children:t}),H.jsx("div",{className:"flex flex-wrap",children:e})]})}function Cd({desc:t,bg:e}){return H.jsx("div",{className:`rounded-lg p-2 md:text-[16px] w-max text-white ${e} border text-sm`,children:t})}const Rd=({children:t,className:e})=>{const n=se.useRef(!1),i=se.useRef(null),r=se.useRef({glare:{x:50,y:50},background:{x:50,y:50},rotate:{x:0,y:0}}),s={"--m-x":"50%","--m-y":"50%","--r-x":"0deg","--r-y":"0deg","--bg-x":"50%","--bg-y":"50%","--duration":"300ms","--foil-size":"100%","--opacity":"0","--radius":"10px","--easing":"ease","--transition":"var(--duration) var(--easing)"},o={"--step":"5%","--foil-svg":`url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.99994 3.419C2.99994 3.419 21.6142 7.43646 22.7921 12.153C23.97 16.8695 3.41838 23.0306 3.41838 23.0306' stroke='white' stroke-width='5' stroke-miterlimit='3.86874' stroke-linecap='round' style='mix-blend-mode:darken'/%3E%3C/svg%3E")`,"--pattern":"var(--foil-svg) center/100% no-repeat","--rainbow":"repeating-linear-gradient( 0deg,rgb(255,119,115) calc(var(--step) * 1),rgba(255,237,95,1) calc(var(--step) * 2),rgba(168,255,95,1) calc(var(--step) * 3),rgba(131,255,247,1) calc(var(--step) * 4),rgba(120,148,255,1) calc(var(--step) * 5),rgb(216,117,255) calc(var(--step) * 6),rgb(255,119,115) calc(var(--step) * 7) ) 0% var(--bg-y)/200% 700% no-repeat","--diagonal":"repeating-linear-gradient( 128deg,#0e152e 0%,hsl(180,10%,60%) 3.8%,hsl(180,10%,60%) 4.5%,hsl(180,10%,60%) 5.2%,#0e152e 10%,#0e152e 12% ) var(--bg-x) var(--bg-y)/300% no-repeat","--shade":"radial-gradient( farthest-corner circle at var(--m-x) var(--m-y),rgba(255,255,255,0.1) 12%,rgba(255,255,255,0.15) 20%,rgba(255,255,255,0.25) 120% ) var(--bg-x) var(--bg-y)/300% no-repeat",backgroundBlendMode:"hue, hue, hue, overlay"},a=()=>{var l,c,u,d,f,p;if(i.current){console.log(r.current);const{background:v,rotate:y,glare:m}=r.current;(l=i.current)==null||l.style.setProperty("--m-x",`${m.x}%`),(c=i.current)==null||c.style.setProperty("--m-y",`${m.y}%`),(u=i.current)==null||u.style.setProperty("--r-x",`${y.x}deg`),(d=i.current)==null||d.style.setProperty("--r-y",`${y.y}deg`),(f=i.current)==null||f.style.setProperty("--bg-x",`${v.x}%`),(p=i.current)==null||p.style.setProperty("--bg-y",`${v.y}%`)}};return H.jsx("div",{style:s,className:"relative isolate [contain:layout_style] [perspective:800px] transition-transform duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)] will-change-transform w-auto [aspect-ratio:28/15] mx-[8px] ",ref:i,onPointerMove:l=>{const u=l.currentTarget.getBoundingClientRect(),d={x:l.clientX-u.left,y:l.clientY-u.top},f={x:100/u.width*d.x,y:100/u.height*d.y},p={x:f.x-50,y:f.y-50},{background:v,rotate:y,glare:m}=r.current;v.x=50+f.x/4-12.5,v.y=50+f.y/3-16.67,y.x=-(p.x/3.5),y.y=p.y/2,y.x*=.4,y.y*=.4,m.x=f.x,m.y=f.y,a()},onPointerEnter:()=>{n.current=!0,i.current&&setTimeout(()=>{var l;n.current&&((l=i.current)==null||l.style.setProperty("--duration","0s"))},300)},onPointerLeave:()=>{var l,c;n.current=!1,i.current&&(i.current.style.removeProperty("--duration"),(l=i.current)==null||l.style.setProperty("--r-x","0deg"),(c=i.current)==null||c.style.setProperty("--r-y","0deg"))},children:H.jsxs("div",{className:"h-auto grid will-change-transform origin-center transition-transform duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)] [transform:rotateY(var(--r-x))_rotateX(var(--r-y))] rounded-[var(--radius)] border border-slate-800 hover:[--opacity:0.6] hover:[--duration:200ms] hover:[--easing:linear] hover:filter-none overflow-hidden",children:[H.jsx("div",{className:"w-auto h-auto grid [grid-area:1/1] mix-blend-soft-light [clip-path:inset(0_0_0_0_round_var(--radius))]",children:H.jsx("div",{className:ti("h-auto w-auto bg-slate-950",e),children:t})}),H.jsx("div",{className:"w-auto h-auto grid [grid-area:1/1] mix-blend-soft-light [clip-path:inset(0_0_1px_0_round_var(--radius))] opacity-[var(--opacity)] transition-opacity transition-background duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)] will-change-background [background:radial-gradient(farthest-corner_circle_at_var(--m-x)_var(--m-y),_rgba(255,255,255,0.8)_10%,_rgba(255,255,255,0.65)_20%,_rgba(255,255,255,0)_90%)]"}),H.jsx("div",{className:"w-auto h-auto grid [grid-area:1/1] mix-blend-color-dodge opacity-[var(--opacity)] will-change-background transition-opacity [clip-path:inset(0_0_1px_0_round_var(--radius))] [background-blend-mode:hue_hue_hue_overlay] [background:var(--pattern),_var(--rainbow),_var(--diagonal),_var(--shade)] relative after:content-[''] after:grid-area-[inherit] after:bg-repeat-[inherit] after:bg-attachment-[inherit] after:bg-origin-[inherit] after:bg-clip-[inherit] after:bg-[inherit] after:mix-blend-exclusion after:[background-size:var(--foil-size),_200%_400%,_800%,_200%] after:[background-position:center,_0%_var(--bg-y),_calc(var(--bg-x)*_-1)_calc(var(--bg-y)*_-1),_var(--bg-x)_var(--bg-y)] after:[background-blend-mode:soft-light,_hue,_hard-light]",style:{...o}})]})})};function eI(){const t=[{id:1,name:"HTML",bg:""},{id:3,name:"CSS",bg:"border-white"},{id:2,name:"JavaScript",bg:"border-yellow-200"},{id:4,name:"React JS",bg:"border-blue-500"},{id:5,name:"Tailwind",bg:"border-red-700"},{id:6,name:"TypeScript",bg:"border-blue-700"},{id:7,name:"Next Js ",bg:"border-blue-900"}],e=[{id:1,name:"Java",bg:"border-green-500"},{id:2,name:"Node JS",bg:"border-orange-600"},{id:3,name:"Express",bg:"border-blue-600"}],n=[{id:1,name:"MySQL",bg:"border-green-700"},{id:2,name:"MongoDB",bg:"border-blue-500"}];return H.jsxs("div",{className:" flex flex-wrap",children:[H.jsx(bd,{title:"Frontend",arr:t.map(i=>H.jsx("div",{children:H.jsx(Rd,{children:H.jsx(Cd,{desc:i.name,bg:i.bg})})},i.id))}),H.jsx(bd,{title:"Backend",arr:e.map(i=>H.jsx("div",{children:H.jsx(Rd,{children:H.jsx(Cd,{desc:i.name,bg:i.bg})})},i.id))}),H.jsx(bd,{title:"Database",arr:n.map(i=>H.jsx("div",{children:H.jsx(Rd,{children:H.jsx(Cd,{desc:i.name,bg:i.bg})})},i.id))})]})}function tI({arr:t}){return H.jsx("div",{id:"morep",className:"",children:H.jsx("div",{className:"",children:t})})}function nI({img:t,title:e,desc:n,link:i}){return H.jsx("a",{href:i,className:"",children:H.jsxs("div",{className:" text-gray-300  bg-gray-700     rounded-lg mx-10 my-3 border dark:border-black p-1  text-left   flex flex-wrap    hover:bg-gray-500 hover:text-gray-900    transform-cpu  hover:skew-x-6 focus:bg-slate-600",children:[H.jsx("img",{src:t,className:"h-[6vh] w-[12vw] mr-[10px] m-[2px] w-77 block md:w-[4vw]",alt:""}),H.jsxs("div",{className:"flex flex-col md:w-auto ",children:[H.jsx("p",{className:"md:text-xl font-mono font-semibold h-auto w-auto ",children:e}),H.jsx("p",{className:"text-[11px] md:text-[14px] font-mono w-auto  ",children:n})]})]})})}const JS=se.createContext({themeMode:"light",darkTheme:()=>{},lightTheme:()=>{}}),iI=JS.Provider;function rI(){return se.useContext(JS)}function sI(){const{themeMode:t,lightTheme:e,darkTheme:n}=rI(),i=r=>{r.currentTarget.checked?n():e()};return H.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[H.jsx("input",{type:"checkbox",value:"",className:"sr-only peer",onChange:i,checked:t==="dark"}),H.jsx("div",{className:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 dark:peer-focus:ring-gray-700 rounded-full peer dark:bg-gray-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-500 peer-checked:bg-gray-600"})]})}const oI=[{id:5,title:"Amazon UI clone",img:"https://ugc.production.linktr.ee/nYuEg7UcT6y5EmMuQoF6_DD80DC7B-C40D-4444-A3F6-E0D8FA14B64A.jpeg",desc:"HTML, CSS & JS",Link:"https://github.com/Kiranjeet28/Amazon-Clone"},{id:1,title:"ATM Machine with Java",img:"https://th.bing.com/th/id/OIP.Cigr715c0OWRmSRLuczm8QHaHa?rs=1&pid=ImgDetMain",desc:"Java(Hashmap)",Link:"https://github.com/Kiranjeet28/ATM-with-Java"},{id:2,title:"Employee Management System",img:"https://th.bing.com/th/id/OIP.E6EMy8EyJeOKudi2Z0YK0wHaFP?rs=1&pid=ImgDetMain",desc:"Java, Swing & AWT, Maven , MySQL",Link:"https://github.com/Kiranjeet28/Java-Employee-Management-system-with-SQL-with-UI-Swing-and-AWT-.git"},{id:3,title:"Quiz Game",img:"https://thumbs.dreamstime.com/b/black-thin-line-quiz-logo-concept-tv-show-support-faq-vote-query-forum-who-issue-knowledge-verification-flat-style-trend-modern-98154324.jpg",desc:"Java , AWT & Swing",Link:"https://github.com/Kiranjeet28/Quiz_hmap"},{id:4,title:"JK Polytechnic Hub",img:"https://kiranjeet28.github.io/JK_Polytechnic_Hub/image/logo.jpg",desc:"HTML,JS,CSS",Link:"https://kiranjeet28.github.io/JK_Polytechnic_Hub/"}],aI=[{text:"Full",className:" text-slate-100 dark:text-black "},{text:"Stack",className:" text-slate-100  dark:text-black"},{text:"PROJECTS",className:"from-indigo-500 via-indigo-400 to-indigo-700 bg-gradient-to-tr  rounded-xl text-slate-100 "}];function Pd({img:t,title:e,desc:n,link:i}){return H.jsx("div",{className:"p-0 m-auto mt-6",children:H.jsx(QS,{children:H.jsxs("div",{className:" w-72   bg-white  dark:hover:bg-gray-800  dark:bg-gray-900 dark:text-gray-100 shadow-black  rounded-lg hover:bg-gray-300  hover:transform-cpu hover:scale-90",children:[H.jsx("section",{className:" ",children:H.jsx("img",{src:t,className:"h-32 w-72 rounded-t-lg",alt:""})}),H.jsxs("section",{className:"p-4 text-start ",children:[H.jsx("div",{className:"m-0 font-bold text-lg",children:e}),H.jsx("p",{className:"text-sm",children:n})]}),H.jsx("a",{href:i,className:"grid self-center ",children:H.jsx("button",{className:"inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",children:"More..."})})]})})})}function lI(){return H.jsxs("div",{className:"flex flex-wrap equal-height ",children:[H.jsx(Pd,{img:"https://us.123rf.com/450wm/djvstock/djvstock2001/djvstock200143628/138999301-padlock-and-file-design-of-security-lock-access-door-house-safe-safety-and-protection-theme-vector.jpg?ver=6",title:"File Hiding",desc:"Java FrontEnd: Swing & AWT Backend: MySQL",link:"https://github.com/Kiranjeet28/Java-File-Hiding-with-SQL-DB"}),H.jsx(Pd,{img:"https://thumbs.dreamstime.com/b/youtube-play-button-vector-illustration-cartoon-youtube-play-button-shadow-background-vector-illustration-cartoon-262961349.jpg",title:"Youtube Clone",desc:"React ,Appwrite, MongoDB, NodeJS, Express,Tailwind Css ,OAuth ",link:"https://github.com/Kiranjeet28/Youtube-clone"}),H.jsx(Pd,{img:"https://static.vecteezy.com/system/resources/previews/007/343/533/original/yellow-quiz-time-banner-with-comic-style-background-suitable-for-use-for-promotional-designs-vector.jpg",title:"Quiz Application with Auth ",desc:"Java , Maven plugin , MySQL ,Auth, MicroServices  ",link:"https://github.com/Kiranjeet28/Quiz-application-with-Authentication-"})]})}const cI=({words:t,className:e,cursorClassName:n})=>{const i=t.map(s=>({...s,text:s.text.split("")})),r=()=>H.jsx("div",{children:i.map((s,o)=>H.jsxs("div",{className:"inline-block",children:[s.text.map((a,l)=>H.jsx("span",{className:ti(" text-black ",s.className),children:a},`char-${l}`))," "]},`word-${o}`))});return H.jsxs("div",{className:ti("flex space-x-1 my-6",e),children:[H.jsxs(is.div,{className:"overflow-hidden pb-2",initial:{width:"0%"},whileInView:{width:"fit-content"},transition:{duration:2,ease:"linear",delay:1},children:[H.jsxs("div",{className:"text-lg md:text-2xl font-semibold md:font-bold",style:{whiteSpace:"nowrap"},children:[r()," "]})," "]}),H.jsx(is.span,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,repeat:1/0,repeatType:"reverse"},className:ti("block rounded-sm w-[4px]  h-8 from-indigo-500 via-indigo-400 to-indigo-700 bg-gradient-to-tr",n)})]})};function uI(){const[t,e]=se.useState("dark"),n=()=>{e("light")},i=()=>{e("dark")};return se.useEffect(()=>{document.querySelector("html").classList.remove("light","dark"),document.querySelector("html").classList.add(t)},[t]),H.jsx(iI,{value:{themeMode:t,lightTheme:n,darkTheme:i},children:H.jsxs("div",{className:"pb-10 m-0 w-min-full  bg-black dark:bg-gray-200",children:[H.jsx(Lw,{obj:H.jsx(sI,{})}),H.jsx(J3,{}),H.jsx(cI,{className:"ml-6 md:ml-8 mt-4 mb-0",words:aI}),H.jsx(lI,{}),H.jsx("p",{className:"text-gray-200 ml-7 font-semibold mt-8 p-3 pb-0 text-left  text-xl mb-2 dark:text-gray-800  md:mb-4 ",children:" What I Know"}),H.jsx(eI,{}),H.jsxs("div",{className:"",children:[H.jsx("p",{className:"text-gray-200 ml-7 font-semibold mt-8 p-3 pb-0 text-left  text-xl mb-2 dark:text-gray-800  md:mb-4 ",children:" More Projects"}),H.jsx(tI,{arr:oI.map(r=>H.jsx("div",{children:H.jsx(nI,{img:r.img,desc:r.desc,title:r.title,link:r.Link})},r.id))})]})]})})}Ld.createRoot(document.getElementById("root")).render(H.jsx(uI,{}));
