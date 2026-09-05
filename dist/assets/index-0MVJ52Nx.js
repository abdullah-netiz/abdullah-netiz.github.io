(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function eg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var _u={exports:{}},ba={},yu={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up;function _v(){if(Up)return gt;Up=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function _(E){return E===null||typeof E!="object"?null:(E=x&&E[x]||E["@@iterator"],typeof E=="function"?E:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,A={};function y(E,G,ve){this.props=E,this.context=G,this.refs=A,this.updater=ve||S}y.prototype.isReactComponent={},y.prototype.setState=function(E,G){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,G,"setState")},y.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function g(){}g.prototype=y.prototype;function D(E,G,ve){this.props=E,this.context=G,this.refs=A,this.updater=ve||S}var N=D.prototype=new g;N.constructor=D,T(N,y.prototype),N.isPureReactComponent=!0;var R=Array.isArray,K=Object.prototype.hasOwnProperty,O={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function W(E,G,ve){var X,ee={},ae=null,Q=null;if(G!=null)for(X in G.ref!==void 0&&(Q=G.ref),G.key!==void 0&&(ae=""+G.key),G)K.call(G,X)&&!k.hasOwnProperty(X)&&(ee[X]=G[X]);var ue=arguments.length-2;if(ue===1)ee.children=ve;else if(1<ue){for(var ye=Array(ue),Re=0;Re<ue;Re++)ye[Re]=arguments[Re+2];ee.children=ye}if(E&&E.defaultProps)for(X in ue=E.defaultProps,ue)ee[X]===void 0&&(ee[X]=ue[X]);return{$$typeof:s,type:E,key:ae,ref:Q,props:ee,_owner:O.current}}function L(E,G){return{$$typeof:s,type:E.type,key:G,ref:E.ref,props:E.props,_owner:E._owner}}function C(E){return typeof E=="object"&&E!==null&&E.$$typeof===s}function B(E){var G={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(ve){return G[ve]})}var le=/\/+/g;function ie(E,G){return typeof E=="object"&&E!==null&&E.key!=null?B(""+E.key):G.toString(36)}function pe(E,G,ve,X,ee){var ae=typeof E;(ae==="undefined"||ae==="boolean")&&(E=null);var Q=!1;if(E===null)Q=!0;else switch(ae){case"string":case"number":Q=!0;break;case"object":switch(E.$$typeof){case s:case e:Q=!0}}if(Q)return Q=E,ee=ee(Q),E=X===""?"."+ie(Q,0):X,R(ee)?(ve="",E!=null&&(ve=E.replace(le,"$&/")+"/"),pe(ee,G,ve,"",function(Re){return Re})):ee!=null&&(C(ee)&&(ee=L(ee,ve+(!ee.key||Q&&Q.key===ee.key?"":(""+ee.key).replace(le,"$&/")+"/")+E)),G.push(ee)),1;if(Q=0,X=X===""?".":X+":",R(E))for(var ue=0;ue<E.length;ue++){ae=E[ue];var ye=X+ie(ae,ue);Q+=pe(ae,G,ve,ye,ee)}else if(ye=_(E),typeof ye=="function")for(E=ye.call(E),ue=0;!(ae=E.next()).done;)ae=ae.value,ye=X+ie(ae,ue++),Q+=pe(ae,G,ve,ye,ee);else if(ae==="object")throw G=String(E),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return Q}function me(E,G,ve){if(E==null)return E;var X=[],ee=0;return pe(E,X,"","",function(ae){return G.call(ve,ae,ee++)}),X}function de(E){if(E._status===-1){var G=E._result;G=G(),G.then(function(ve){(E._status===0||E._status===-1)&&(E._status=1,E._result=ve)},function(ve){(E._status===0||E._status===-1)&&(E._status=2,E._result=ve)}),E._status===-1&&(E._status=0,E._result=G)}if(E._status===1)return E._result.default;throw E._result}var he={current:null},H={transition:null},fe={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:H,ReactCurrentOwner:O};function I(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:me,forEach:function(E,G,ve){me(E,function(){G.apply(this,arguments)},ve)},count:function(E){var G=0;return me(E,function(){G++}),G},toArray:function(E){return me(E,function(G){return G})||[]},only:function(E){if(!C(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},gt.Component=y,gt.Fragment=n,gt.Profiler=o,gt.PureComponent=D,gt.StrictMode=r,gt.Suspense=h,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,gt.act=I,gt.cloneElement=function(E,G,ve){if(E==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+E+".");var X=T({},E.props),ee=E.key,ae=E.ref,Q=E._owner;if(G!=null){if(G.ref!==void 0&&(ae=G.ref,Q=O.current),G.key!==void 0&&(ee=""+G.key),E.type&&E.type.defaultProps)var ue=E.type.defaultProps;for(ye in G)K.call(G,ye)&&!k.hasOwnProperty(ye)&&(X[ye]=G[ye]===void 0&&ue!==void 0?ue[ye]:G[ye])}var ye=arguments.length-2;if(ye===1)X.children=ve;else if(1<ye){ue=Array(ye);for(var Re=0;Re<ye;Re++)ue[Re]=arguments[Re+2];X.children=ue}return{$$typeof:s,type:E.type,key:ee,ref:ae,props:X,_owner:Q}},gt.createContext=function(E){return E={$$typeof:u,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},E.Provider={$$typeof:l,_context:E},E.Consumer=E},gt.createElement=W,gt.createFactory=function(E){var G=W.bind(null,E);return G.type=E,G},gt.createRef=function(){return{current:null}},gt.forwardRef=function(E){return{$$typeof:d,render:E}},gt.isValidElement=C,gt.lazy=function(E){return{$$typeof:v,_payload:{_status:-1,_result:E},_init:de}},gt.memo=function(E,G){return{$$typeof:m,type:E,compare:G===void 0?null:G}},gt.startTransition=function(E){var G=H.transition;H.transition={};try{E()}finally{H.transition=G}},gt.unstable_act=I,gt.useCallback=function(E,G){return he.current.useCallback(E,G)},gt.useContext=function(E){return he.current.useContext(E)},gt.useDebugValue=function(){},gt.useDeferredValue=function(E){return he.current.useDeferredValue(E)},gt.useEffect=function(E,G){return he.current.useEffect(E,G)},gt.useId=function(){return he.current.useId()},gt.useImperativeHandle=function(E,G,ve){return he.current.useImperativeHandle(E,G,ve)},gt.useInsertionEffect=function(E,G){return he.current.useInsertionEffect(E,G)},gt.useLayoutEffect=function(E,G){return he.current.useLayoutEffect(E,G)},gt.useMemo=function(E,G){return he.current.useMemo(E,G)},gt.useReducer=function(E,G,ve){return he.current.useReducer(E,G,ve)},gt.useRef=function(E){return he.current.useRef(E)},gt.useState=function(E){return he.current.useState(E)},gt.useSyncExternalStore=function(E,G,ve){return he.current.useSyncExternalStore(E,G,ve)},gt.useTransition=function(){return he.current.useTransition()},gt.version="18.3.1",gt}var Fp;function Yd(){return Fp||(Fp=1,yu.exports=_v()),yu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kp;function yv(){if(kp)return ba;kp=1;var s=Yd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,h,m){var v,x={},_=null,S=null;m!==void 0&&(_=""+m),h.key!==void 0&&(_=""+h.key),h.ref!==void 0&&(S=h.ref);for(v in h)r.call(h,v)&&!l.hasOwnProperty(v)&&(x[v]=h[v]);if(d&&d.defaultProps)for(v in h=d.defaultProps,h)x[v]===void 0&&(x[v]=h[v]);return{$$typeof:e,type:d,key:_,ref:S,props:x,_owner:o.current}}return ba.Fragment=n,ba.jsx=u,ba.jsxs=u,ba}var Op;function Sv(){return Op||(Op=1,_u.exports=yv()),_u.exports}var M=Sv(),vt=Yd();const Mv=eg(vt);var Jo={},Su={exports:{}},Cn={},Mu={exports:{}},Eu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function Ev(){return zp||(zp=1,(function(s){function e(H,fe){var I=H.length;H.push(fe);e:for(;0<I;){var E=I-1>>>1,G=H[E];if(0<o(G,fe))H[E]=fe,H[I]=G,I=E;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var fe=H[0],I=H.pop();if(I!==fe){H[0]=I;e:for(var E=0,G=H.length,ve=G>>>1;E<ve;){var X=2*(E+1)-1,ee=H[X],ae=X+1,Q=H[ae];if(0>o(ee,I))ae<G&&0>o(Q,ee)?(H[E]=Q,H[ae]=I,E=ae):(H[E]=ee,H[X]=I,E=X);else if(ae<G&&0>o(Q,I))H[E]=Q,H[ae]=I,E=ae;else break e}}return fe}function o(H,fe){var I=H.sortIndex-fe.sortIndex;return I!==0?I:H.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var h=[],m=[],v=1,x=null,_=3,S=!1,T=!1,A=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(H){for(var fe=n(m);fe!==null;){if(fe.callback===null)r(m);else if(fe.startTime<=H)r(m),fe.sortIndex=fe.expirationTime,e(h,fe);else break;fe=n(m)}}function R(H){if(A=!1,N(H),!T)if(n(h)!==null)T=!0,de(K);else{var fe=n(m);fe!==null&&he(R,fe.startTime-H)}}function K(H,fe){T=!1,A&&(A=!1,g(W),W=-1),S=!0;var I=_;try{for(N(fe),x=n(h);x!==null&&(!(x.expirationTime>fe)||H&&!B());){var E=x.callback;if(typeof E=="function"){x.callback=null,_=x.priorityLevel;var G=E(x.expirationTime<=fe);fe=s.unstable_now(),typeof G=="function"?x.callback=G:x===n(h)&&r(h),N(fe)}else r(h);x=n(h)}if(x!==null)var ve=!0;else{var X=n(m);X!==null&&he(R,X.startTime-fe),ve=!1}return ve}finally{x=null,_=I,S=!1}}var O=!1,k=null,W=-1,L=5,C=-1;function B(){return!(s.unstable_now()-C<L)}function le(){if(k!==null){var H=s.unstable_now();C=H;var fe=!0;try{fe=k(!0,H)}finally{fe?ie():(O=!1,k=null)}}else O=!1}var ie;if(typeof D=="function")ie=function(){D(le)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,me=pe.port2;pe.port1.onmessage=le,ie=function(){me.postMessage(null)}}else ie=function(){y(le,0)};function de(H){k=H,O||(O=!0,ie())}function he(H,fe){W=y(function(){H(s.unstable_now())},fe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_continueExecution=function(){T||S||(T=!0,de(K))},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(H){switch(_){case 1:case 2:case 3:var fe=3;break;default:fe=_}var I=_;_=fe;try{return H()}finally{_=I}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(H,fe){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var I=_;_=H;try{return fe()}finally{_=I}},s.unstable_scheduleCallback=function(H,fe,I){var E=s.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?E+I:E):I=E,H){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=I+G,H={id:v++,callback:fe,priorityLevel:H,startTime:I,expirationTime:G,sortIndex:-1},I>E?(H.sortIndex=I,e(m,H),n(h)===null&&H===n(m)&&(A?(g(W),W=-1):A=!0,he(R,I-E))):(H.sortIndex=G,e(h,H),T||S||(T=!0,de(K))),H},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(H){var fe=_;return function(){var I=_;_=fe;try{return H.apply(this,arguments)}finally{_=I}}}})(Eu)),Eu}var Bp;function wv(){return Bp||(Bp=1,Mu.exports=Ev()),Mu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp;function Tv(){if(Vp)return Cn;Vp=1;var s=Yd(),e=wv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},x={};function _(t){return h.call(x,t)?!0:h.call(v,t)?!1:m.test(t)?x[t]=!0:(v[t]=!0,!1)}function S(t,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,a,c){if(i===null||typeof i>"u"||S(t,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(t,i,a,c,f,p,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=w}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new A(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new A(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new A(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new A(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new A(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new A(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new A(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new A(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new A(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function D(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,D);y[i]=new A(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,D);y[i]=new A(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,D);y[i]=new A(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new A(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new A(t,1,!1,t.toLowerCase(),null,!0,!0)});function N(t,i,a,c){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,a,f,c)&&(a=null),c||f===null?_(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):f.mustUseProperty?t[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,c=f.attributeNamespace,a===null?t.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?t.setAttributeNS(c,i,a):t.setAttribute(i,a))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,K=Symbol.for("react.element"),O=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),B=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),pe=Symbol.for("react.suspense_list"),me=Symbol.for("react.memo"),de=Symbol.for("react.lazy"),he=Symbol.for("react.offscreen"),H=Symbol.iterator;function fe(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var I=Object.assign,E;function G(t){if(E===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);E=i&&i[1]||""}return`
`+E+t}var ve=!1;function X(t,i){if(!t||ve)return"";ve=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(re){var c=re}Reflect.construct(t,[],i)}else{try{i.call()}catch(re){c=re}t.call(i.prototype)}else{try{throw Error()}catch(re){c=re}t()}}catch(re){if(re&&c&&typeof re.stack=="string"){for(var f=re.stack.split(`
`),p=c.stack.split(`
`),w=f.length-1,F=p.length-1;1<=w&&0<=F&&f[w]!==p[F];)F--;for(;1<=w&&0<=F;w--,F--)if(f[w]!==p[F]){if(w!==1||F!==1)do if(w--,F--,0>F||f[w]!==p[F]){var V=`
`+f[w].replace(" at new "," at ");return t.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",t.displayName)),V}while(1<=w&&0<=F);break}}}finally{ve=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?G(t):""}function ee(t){switch(t.tag){case 5:return G(t.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return t=X(t.type,!1),t;case 11:return t=X(t.type.render,!1),t;case 1:return t=X(t.type,!0),t;default:return""}}function ae(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case k:return"Fragment";case O:return"Portal";case L:return"Profiler";case W:return"StrictMode";case ie:return"Suspense";case pe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case B:return(t.displayName||"Context")+".Consumer";case C:return(t._context.displayName||"Context")+".Provider";case le:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case me:return i=t.displayName||null,i!==null?i:ae(t.type)||"Memo";case de:i=t._payload,t=t._init;try{return ae(t(i))}catch{}}return null}function Q(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(i);case 8:return i===W?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ue(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ye(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Re(t){var i=ye(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),c=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,p=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(w){c=""+w,p.call(this,w)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ze(t){t._valueTracker||(t._valueTracker=Re(t))}function Pe(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return t&&(c=ye(t)?t.checked?"true":"false":t.value),t=c,t!==a?(i.setValue(t),!0):!1}function Je(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function z(t,i){var a=i.checked;return I({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function yt(t,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=ue(i.value!=null?i.value:a),t._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Qe(t,i){i=i.checked,i!=null&&N(t,"checked",i,!1)}function et(t,i){Qe(t,i);var a=ue(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?ht(t,i.type,a):i.hasOwnProperty("defaultValue")&&ht(t,i.type,ue(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ve(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function ht(t,i,a){(i!=="number"||Je(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var Oe=Array.isArray;function U(t,i,a,c){if(t=t.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<t.length;a++)f=i.hasOwnProperty("$"+t[a].value),t[a].selected!==f&&(t[a].selected=f),f&&c&&(t[a].defaultSelected=!0)}else{for(a=""+ue(a),i=null,f=0;f<t.length;f++){if(t[f].value===a){t[f].selected=!0,c&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function b(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return I({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ne(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(Oe(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:ue(a)}}function _e(t,i){var a=ue(i.value),c=ue(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),c!=null&&(t.defaultValue=""+c)}function Se(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function ge(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?ge(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ne,Fe=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,f){MSApp.execUnsafeLocalFunction(function(){return t(i,a,c,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ne=Ne||document.createElement("div"),Ne.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ne.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ut(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ze=["Webkit","ms","Moz","O"];Object.keys(we).forEach(function(t){ze.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),we[i]=we[t]})});function tt(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||we.hasOwnProperty(t)&&we[t]?(""+i).trim():i+"px"}function rt(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=tt(a,i[a],c);a==="float"&&(a="cssFloat"),c?t.setProperty(a,f):t[a]=f}}var He=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mt(t,i){if(i){if(He[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function lt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bt=null;function q(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Le=null,ce=null,xe=null;function Ue(t){if(t=fa(t)){if(typeof Le!="function")throw Error(n(280));var i=t.stateNode;i&&(i=po(i),Le(t.stateNode,t.type,i))}}function Ie(t){ce?xe?xe.push(t):xe=[t]:ce=t}function ct(){if(ce){var t=ce,i=xe;if(xe=ce=null,Ue(t),i)for(t=0;t<i.length;t++)Ue(i[t])}}function Ut(t,i){return t(i)}function qt(){}var St=!1;function Sn(t,i,a){if(St)return t(i,a);St=!0;try{return Ut(t,i,a)}finally{St=!1,(ce!==null||xe!==null)&&(qt(),ct())}}function mn(t,i){var a=t.stateNode;if(a===null)return null;var c=po(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var Zr=!1;if(d)try{var Wi={};Object.defineProperty(Wi,"passive",{get:function(){Zr=!0}}),window.addEventListener("test",Wi,Wi),window.removeEventListener("test",Wi,Wi)}catch{Zr=!1}function Si(t,i,a,c,f,p,w,F,V){var re=Array.prototype.slice.call(arguments,3);try{i.apply(a,re)}catch(Ee){this.onError(Ee)}}var Mi=!1,Er=null,wr=!1,ji=null,qa={onError:function(t){Mi=!0,Er=t}};function Qr(t,i,a,c,f,p,w,F,V){Mi=!1,Er=null,Si.apply(qa,arguments)}function Ya(t,i,a,c,f,p,w,F,V){if(Qr.apply(this,arguments),Mi){if(Mi){var re=Er;Mi=!1,Er=null}else throw Error(n(198));wr||(wr=!0,ji=re)}}function hi(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function $a(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Ka(t){if(hi(t)!==t)throw Error(n(188))}function Vl(t){var i=t.alternate;if(!i){if(i=hi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,c=i;;){var f=a.return;if(f===null)break;var p=f.alternate;if(p===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===a)return Ka(f),t;if(p===c)return Ka(f),i;p=p.sibling}throw Error(n(188))}if(a.return!==c.return)a=f,c=p;else{for(var w=!1,F=f.child;F;){if(F===a){w=!0,a=f,c=p;break}if(F===c){w=!0,c=f,a=p;break}F=F.sibling}if(!w){for(F=p.child;F;){if(F===a){w=!0,a=p,c=f;break}if(F===c){w=!0,c=p,a=f;break}F=F.sibling}if(!w)throw Error(n(189))}}if(a.alternate!==c)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function P(t){return t=Vl(t),t!==null?Y(t):null}function Y(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Y(t);if(i!==null)return i;t=t.sibling}return null}var se=e.unstable_scheduleCallback,oe=e.unstable_cancelCallback,$=e.unstable_shouldYield,Ce=e.unstable_requestPaint,Ae=e.unstable_now,qe=e.unstable_getCurrentPriorityLevel,je=e.unstable_ImmediatePriority,st=e.unstable_UserBlockingPriority,ot=e.unstable_NormalPriority,Ye=e.unstable_LowPriority,_t=e.unstable_IdlePriority,At=null,xt=null;function on(t){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(At,t,void 0,(t.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:wt,Ke=Math.log,Jn=Math.LN2;function wt(t){return t>>>=0,t===0?32:31-(Ke(t)/Jn|0)|0}var ln=64,ei=4194304;function Yt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pi(t,i){var a=t.pendingLanes;if(a===0)return 0;var c=0,f=t.suspendedLanes,p=t.pingedLanes,w=a&268435455;if(w!==0){var F=w&~f;F!==0?c=Yt(F):(p&=w,p!==0&&(c=Yt(p)))}else w=a&~f,w!==0?c=Yt(w):p!==0&&(c=Yt(p));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,p=i&-i,f>=p||f===16&&(p&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=c;0<i;)a=31-dt(i),f=1<<a,c|=t[a],i&=~f;return c}function Dt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vn(t,i){for(var a=t.suspendedLanes,c=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes;0<p;){var w=31-dt(p),F=1<<w,V=f[w];V===-1?((F&a)===0||(F&c)!==0)&&(f[w]=Dt(F,i)):V<=i&&(t.expiredLanes|=F),p&=~F}}function Ei(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gn(){var t=ln;return ln<<=1,(ln&4194240)===0&&(ln=64),t}function Hn(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function Mn(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-dt(i),t[i]=a}function Za(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<a;){var f=31-dt(a),p=1<<f;i[f]=0,c[f]=-1,t[f]=-1,a&=~p}}function Hl(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var c=31-dt(a),f=1<<c;f&i|t[c]&i&&(t[c]|=i),a&=~f}}var Nt=0;function hf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var pf,Gl,mf,gf,vf,Wl=!1,Qa=[],Xi=null,qi=null,Yi=null,Ks=new Map,Zs=new Map,$i=[],Vg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xf(t,i){switch(t){case"focusin":case"focusout":Xi=null;break;case"dragenter":case"dragleave":qi=null;break;case"mouseover":case"mouseout":Yi=null;break;case"pointerover":case"pointerout":Ks.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zs.delete(i.pointerId)}}function Qs(t,i,a,c,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[f]},i!==null&&(i=fa(i),i!==null&&Gl(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Hg(t,i,a,c,f){switch(i){case"focusin":return Xi=Qs(Xi,t,i,a,c,f),!0;case"dragenter":return qi=Qs(qi,t,i,a,c,f),!0;case"mouseover":return Yi=Qs(Yi,t,i,a,c,f),!0;case"pointerover":var p=f.pointerId;return Ks.set(p,Qs(Ks.get(p)||null,t,i,a,c,f)),!0;case"gotpointercapture":return p=f.pointerId,Zs.set(p,Qs(Zs.get(p)||null,t,i,a,c,f)),!0}return!1}function _f(t){var i=Tr(t.target);if(i!==null){var a=hi(i);if(a!==null){if(i=a.tag,i===13){if(i=$a(a),i!==null){t.blockedOn=i,vf(t.priority,function(){mf(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ja(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=Xl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var c=new a.constructor(a.type,a);bt=c,a.target.dispatchEvent(c),bt=null}else return i=fa(a),i!==null&&Gl(i),t.blockedOn=a,!1;i.shift()}return!0}function yf(t,i,a){Ja(t)&&a.delete(i)}function Gg(){Wl=!1,Xi!==null&&Ja(Xi)&&(Xi=null),qi!==null&&Ja(qi)&&(qi=null),Yi!==null&&Ja(Yi)&&(Yi=null),Ks.forEach(yf),Zs.forEach(yf)}function Js(t,i){t.blockedOn===i&&(t.blockedOn=null,Wl||(Wl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Gg)))}function ea(t){function i(f){return Js(f,t)}if(0<Qa.length){Js(Qa[0],t);for(var a=1;a<Qa.length;a++){var c=Qa[a];c.blockedOn===t&&(c.blockedOn=null)}}for(Xi!==null&&Js(Xi,t),qi!==null&&Js(qi,t),Yi!==null&&Js(Yi,t),Ks.forEach(i),Zs.forEach(i),a=0;a<$i.length;a++)c=$i[a],c.blockedOn===t&&(c.blockedOn=null);for(;0<$i.length&&(a=$i[0],a.blockedOn===null);)_f(a),a.blockedOn===null&&$i.shift()}var Jr=R.ReactCurrentBatchConfig,eo=!0;function Wg(t,i,a,c){var f=Nt,p=Jr.transition;Jr.transition=null;try{Nt=1,jl(t,i,a,c)}finally{Nt=f,Jr.transition=p}}function jg(t,i,a,c){var f=Nt,p=Jr.transition;Jr.transition=null;try{Nt=4,jl(t,i,a,c)}finally{Nt=f,Jr.transition=p}}function jl(t,i,a,c){if(eo){var f=Xl(t,i,a,c);if(f===null)cc(t,i,c,to,a),xf(t,c);else if(Hg(f,t,i,a,c))c.stopPropagation();else if(xf(t,c),i&4&&-1<Vg.indexOf(t)){for(;f!==null;){var p=fa(f);if(p!==null&&pf(p),p=Xl(t,i,a,c),p===null&&cc(t,i,c,to,a),p===f)break;f=p}f!==null&&c.stopPropagation()}else cc(t,i,c,null,a)}}var to=null;function Xl(t,i,a,c){if(to=null,t=q(c),t=Tr(t),t!==null)if(i=hi(t),i===null)t=null;else if(a=i.tag,a===13){if(t=$a(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return to=t,null}function Sf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qe()){case je:return 1;case st:return 4;case ot:case Ye:return 16;case _t:return 536870912;default:return 16}default:return 16}}var Ki=null,ql=null,no=null;function Mf(){if(no)return no;var t,i=ql,a=i.length,c,f="value"in Ki?Ki.value:Ki.textContent,p=f.length;for(t=0;t<a&&i[t]===f[t];t++);var w=a-t;for(c=1;c<=w&&i[a-c]===f[p-c];c++);return no=f.slice(t,1<c?1-c:void 0)}function io(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ro(){return!0}function Ef(){return!1}function In(t){function i(a,c,f,p,w){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=p,this.target=w,this.currentTarget=null;for(var F in t)t.hasOwnProperty(F)&&(a=t[F],this[F]=a?a(p):p[F]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ro:Ef,this.isPropagationStopped=Ef,this}return I(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){},isPersistent:ro}),i}var es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yl=In(es),ta=I({},es,{view:0,detail:0}),Xg=In(ta),$l,Kl,na,so=I({},ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ql,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==na&&(na&&t.type==="mousemove"?($l=t.screenX-na.screenX,Kl=t.screenY-na.screenY):Kl=$l=0,na=t),$l)},movementY:function(t){return"movementY"in t?t.movementY:Kl}}),wf=In(so),qg=I({},so,{dataTransfer:0}),Yg=In(qg),$g=I({},ta,{relatedTarget:0}),Zl=In($g),Kg=I({},es,{animationName:0,elapsedTime:0,pseudoElement:0}),Zg=In(Kg),Qg=I({},es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Jg=In(Qg),e0=I({},es,{data:0}),Tf=In(e0),t0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},n0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function r0(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=i0[t])?!!i[t]:!1}function Ql(){return r0}var s0=I({},ta,{key:function(t){if(t.key){var i=t0[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=io(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?n0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ql,charCode:function(t){return t.type==="keypress"?io(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?io(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),a0=In(s0),o0=I({},so,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Af=In(o0),l0=I({},ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ql}),c0=In(l0),u0=I({},es,{propertyName:0,elapsedTime:0,pseudoElement:0}),d0=In(u0),f0=I({},so,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),h0=In(f0),p0=[9,13,27,32],Jl=d&&"CompositionEvent"in window,ia=null;d&&"documentMode"in document&&(ia=document.documentMode);var m0=d&&"TextEvent"in window&&!ia,bf=d&&(!Jl||ia&&8<ia&&11>=ia),Cf=" ",Rf=!1;function Pf(t,i){switch(t){case"keyup":return p0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ts=!1;function g0(t,i){switch(t){case"compositionend":return Nf(i);case"keypress":return i.which!==32?null:(Rf=!0,Cf);case"textInput":return t=i.data,t===Cf&&Rf?null:t;default:return null}}function v0(t,i){if(ts)return t==="compositionend"||!Jl&&Pf(t,i)?(t=Mf(),no=ql=Ki=null,ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return bf&&i.locale!=="ko"?null:i.data;default:return null}}var x0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!x0[t.type]:i==="textarea"}function Df(t,i,a,c){Ie(c),i=uo(i,"onChange"),0<i.length&&(a=new Yl("onChange","change",null,a,c),t.push({event:a,listeners:i}))}var ra=null,sa=null;function _0(t){Zf(t,0)}function ao(t){var i=as(t);if(Pe(i))return t}function y0(t,i){if(t==="change")return i}var If=!1;if(d){var ec;if(d){var tc="oninput"in document;if(!tc){var Uf=document.createElement("div");Uf.setAttribute("oninput","return;"),tc=typeof Uf.oninput=="function"}ec=tc}else ec=!1;If=ec&&(!document.documentMode||9<document.documentMode)}function Ff(){ra&&(ra.detachEvent("onpropertychange",kf),sa=ra=null)}function kf(t){if(t.propertyName==="value"&&ao(sa)){var i=[];Df(i,sa,t,q(t)),Sn(_0,i)}}function S0(t,i,a){t==="focusin"?(Ff(),ra=i,sa=a,ra.attachEvent("onpropertychange",kf)):t==="focusout"&&Ff()}function M0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ao(sa)}function E0(t,i){if(t==="click")return ao(i)}function w0(t,i){if(t==="input"||t==="change")return ao(i)}function T0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ti=typeof Object.is=="function"?Object.is:T0;function aa(t,i){if(ti(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!h.call(i,f)||!ti(t[f],i[f]))return!1}return!0}function Of(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zf(t,i){var a=Of(t);t=0;for(var c;a;){if(a.nodeType===3){if(c=t+a.textContent.length,t<=i&&c>=i)return{node:a,offset:i-t};t=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Of(a)}}function Bf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Bf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Vf(){for(var t=window,i=Je();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=Je(t.document)}return i}function nc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function A0(t){var i=Vf(),a=t.focusedElem,c=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&Bf(a.ownerDocument.documentElement,a)){if(c!==null&&nc(a)){if(i=c.start,t=c.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=a.textContent.length,p=Math.min(c.start,f);c=c.end===void 0?p:Math.min(c.end,f),!t.extend&&p>c&&(f=c,c=p,p=f),f=zf(a,p);var w=zf(a,c);f&&w&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==w.node||t.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),p>c?(t.addRange(i),t.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var b0=d&&"documentMode"in document&&11>=document.documentMode,ns=null,ic=null,oa=null,rc=!1;function Hf(t,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;rc||ns==null||ns!==Je(c)||(c=ns,"selectionStart"in c&&nc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),oa&&aa(oa,c)||(oa=c,c=uo(ic,"onSelect"),0<c.length&&(i=new Yl("onSelect","select",null,i,a),t.push({event:i,listeners:c}),i.target=ns)))}function oo(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var is={animationend:oo("Animation","AnimationEnd"),animationiteration:oo("Animation","AnimationIteration"),animationstart:oo("Animation","AnimationStart"),transitionend:oo("Transition","TransitionEnd")},sc={},Gf={};d&&(Gf=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function lo(t){if(sc[t])return sc[t];if(!is[t])return t;var i=is[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Gf)return sc[t]=i[a];return t}var Wf=lo("animationend"),jf=lo("animationiteration"),Xf=lo("animationstart"),qf=lo("transitionend"),Yf=new Map,$f="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zi(t,i){Yf.set(t,i),l(i,[t])}for(var ac=0;ac<$f.length;ac++){var oc=$f[ac],C0=oc.toLowerCase(),R0=oc[0].toUpperCase()+oc.slice(1);Zi(C0,"on"+R0)}Zi(Wf,"onAnimationEnd"),Zi(jf,"onAnimationIteration"),Zi(Xf,"onAnimationStart"),Zi("dblclick","onDoubleClick"),Zi("focusin","onFocus"),Zi("focusout","onBlur"),Zi(qf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var la="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),P0=new Set("cancel close invalid load scroll toggle".split(" ").concat(la));function Kf(t,i,a){var c=t.type||"unknown-event";t.currentTarget=a,Ya(c,i,void 0,t),t.currentTarget=null}function Zf(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var c=t[a],f=c.event;c=c.listeners;e:{var p=void 0;if(i)for(var w=c.length-1;0<=w;w--){var F=c[w],V=F.instance,re=F.currentTarget;if(F=F.listener,V!==p&&f.isPropagationStopped())break e;Kf(f,F,re),p=V}else for(w=0;w<c.length;w++){if(F=c[w],V=F.instance,re=F.currentTarget,F=F.listener,V!==p&&f.isPropagationStopped())break e;Kf(f,F,re),p=V}}}if(wr)throw t=ji,wr=!1,ji=null,t}function Ft(t,i){var a=i[mc];a===void 0&&(a=i[mc]=new Set);var c=t+"__bubble";a.has(c)||(Qf(i,t,2,!1),a.add(c))}function lc(t,i,a){var c=0;i&&(c|=4),Qf(a,t,c,i)}var co="_reactListening"+Math.random().toString(36).slice(2);function ca(t){if(!t[co]){t[co]=!0,r.forEach(function(a){a!=="selectionchange"&&(P0.has(a)||lc(a,!1,t),lc(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[co]||(i[co]=!0,lc("selectionchange",!1,i))}}function Qf(t,i,a,c){switch(Sf(i)){case 1:var f=Wg;break;case 4:f=jg;break;default:f=jl}a=f.bind(null,i,a,t),f=void 0,!Zr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?t.addEventListener(i,a,{capture:!0,passive:f}):t.addEventListener(i,a,!0):f!==void 0?t.addEventListener(i,a,{passive:f}):t.addEventListener(i,a,!1)}function cc(t,i,a,c,f){var p=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var F=c.stateNode.containerInfo;if(F===f||F.nodeType===8&&F.parentNode===f)break;if(w===4)for(w=c.return;w!==null;){var V=w.tag;if((V===3||V===4)&&(V=w.stateNode.containerInfo,V===f||V.nodeType===8&&V.parentNode===f))return;w=w.return}for(;F!==null;){if(w=Tr(F),w===null)return;if(V=w.tag,V===5||V===6){c=p=w;continue e}F=F.parentNode}}c=c.return}Sn(function(){var re=p,Ee=q(a),Te=[];e:{var Me=Yf.get(t);if(Me!==void 0){var ke=Yl,Ge=t;switch(t){case"keypress":if(io(a)===0)break e;case"keydown":case"keyup":ke=a0;break;case"focusin":Ge="focus",ke=Zl;break;case"focusout":Ge="blur",ke=Zl;break;case"beforeblur":case"afterblur":ke=Zl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=wf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=Yg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=c0;break;case Wf:case jf:case Xf:ke=Zg;break;case qf:ke=d0;break;case"scroll":ke=Xg;break;case"wheel":ke=h0;break;case"copy":case"cut":case"paste":ke=Jg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=Af}var Xe=(i&4)!==0,Gt=!Xe&&t==="scroll",Z=Xe?Me!==null?Me+"Capture":null:Me;Xe=[];for(var j=re,te;j!==null;){te=j;var be=te.stateNode;if(te.tag===5&&be!==null&&(te=be,Z!==null&&(be=mn(j,Z),be!=null&&Xe.push(ua(j,be,te)))),Gt)break;j=j.return}0<Xe.length&&(Me=new ke(Me,Ge,null,a,Ee),Te.push({event:Me,listeners:Xe}))}}if((i&7)===0){e:{if(Me=t==="mouseover"||t==="pointerover",ke=t==="mouseout"||t==="pointerout",Me&&a!==bt&&(Ge=a.relatedTarget||a.fromElement)&&(Tr(Ge)||Ge[wi]))break e;if((ke||Me)&&(Me=Ee.window===Ee?Ee:(Me=Ee.ownerDocument)?Me.defaultView||Me.parentWindow:window,ke?(Ge=a.relatedTarget||a.toElement,ke=re,Ge=Ge?Tr(Ge):null,Ge!==null&&(Gt=hi(Ge),Ge!==Gt||Ge.tag!==5&&Ge.tag!==6)&&(Ge=null)):(ke=null,Ge=re),ke!==Ge)){if(Xe=wf,be="onMouseLeave",Z="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(Xe=Af,be="onPointerLeave",Z="onPointerEnter",j="pointer"),Gt=ke==null?Me:as(ke),te=Ge==null?Me:as(Ge),Me=new Xe(be,j+"leave",ke,a,Ee),Me.target=Gt,Me.relatedTarget=te,be=null,Tr(Ee)===re&&(Xe=new Xe(Z,j+"enter",Ge,a,Ee),Xe.target=te,Xe.relatedTarget=Gt,be=Xe),Gt=be,ke&&Ge)t:{for(Xe=ke,Z=Ge,j=0,te=Xe;te;te=rs(te))j++;for(te=0,be=Z;be;be=rs(be))te++;for(;0<j-te;)Xe=rs(Xe),j--;for(;0<te-j;)Z=rs(Z),te--;for(;j--;){if(Xe===Z||Z!==null&&Xe===Z.alternate)break t;Xe=rs(Xe),Z=rs(Z)}Xe=null}else Xe=null;ke!==null&&Jf(Te,Me,ke,Xe,!1),Ge!==null&&Gt!==null&&Jf(Te,Gt,Ge,Xe,!0)}}e:{if(Me=re?as(re):window,ke=Me.nodeName&&Me.nodeName.toLowerCase(),ke==="select"||ke==="input"&&Me.type==="file")var $e=y0;else if(Lf(Me))if(If)$e=w0;else{$e=M0;var nt=S0}else(ke=Me.nodeName)&&ke.toLowerCase()==="input"&&(Me.type==="checkbox"||Me.type==="radio")&&($e=E0);if($e&&($e=$e(t,re))){Df(Te,$e,a,Ee);break e}nt&&nt(t,Me,re),t==="focusout"&&(nt=Me._wrapperState)&&nt.controlled&&Me.type==="number"&&ht(Me,"number",Me.value)}switch(nt=re?as(re):window,t){case"focusin":(Lf(nt)||nt.contentEditable==="true")&&(ns=nt,ic=re,oa=null);break;case"focusout":oa=ic=ns=null;break;case"mousedown":rc=!0;break;case"contextmenu":case"mouseup":case"dragend":rc=!1,Hf(Te,a,Ee);break;case"selectionchange":if(b0)break;case"keydown":case"keyup":Hf(Te,a,Ee)}var it;if(Jl)e:{switch(t){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else ts?Pf(t,a)&&(at="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(at="onCompositionStart");at&&(bf&&a.locale!=="ko"&&(ts||at!=="onCompositionStart"?at==="onCompositionEnd"&&ts&&(it=Mf()):(Ki=Ee,ql="value"in Ki?Ki.value:Ki.textContent,ts=!0)),nt=uo(re,at),0<nt.length&&(at=new Tf(at,t,null,a,Ee),Te.push({event:at,listeners:nt}),it?at.data=it:(it=Nf(a),it!==null&&(at.data=it)))),(it=m0?g0(t,a):v0(t,a))&&(re=uo(re,"onBeforeInput"),0<re.length&&(Ee=new Tf("onBeforeInput","beforeinput",null,a,Ee),Te.push({event:Ee,listeners:re}),Ee.data=it))}Zf(Te,i)})}function ua(t,i,a){return{instance:t,listener:i,currentTarget:a}}function uo(t,i){for(var a=i+"Capture",c=[];t!==null;){var f=t,p=f.stateNode;f.tag===5&&p!==null&&(f=p,p=mn(t,a),p!=null&&c.unshift(ua(t,p,f)),p=mn(t,i),p!=null&&c.push(ua(t,p,f))),t=t.return}return c}function rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jf(t,i,a,c,f){for(var p=i._reactName,w=[];a!==null&&a!==c;){var F=a,V=F.alternate,re=F.stateNode;if(V!==null&&V===c)break;F.tag===5&&re!==null&&(F=re,f?(V=mn(a,p),V!=null&&w.unshift(ua(a,V,F))):f||(V=mn(a,p),V!=null&&w.push(ua(a,V,F)))),a=a.return}w.length!==0&&t.push({event:i,listeners:w})}var N0=/\r\n?/g,L0=/\u0000|\uFFFD/g;function eh(t){return(typeof t=="string"?t:""+t).replace(N0,`
`).replace(L0,"")}function fo(t,i,a){if(i=eh(i),eh(t)!==i&&a)throw Error(n(425))}function ho(){}var uc=null,dc=null;function fc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var hc=typeof setTimeout=="function"?setTimeout:void 0,D0=typeof clearTimeout=="function"?clearTimeout:void 0,th=typeof Promise=="function"?Promise:void 0,I0=typeof queueMicrotask=="function"?queueMicrotask:typeof th<"u"?function(t){return th.resolve(null).then(t).catch(U0)}:hc;function U0(t){setTimeout(function(){throw t})}function pc(t,i){var a=i,c=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){t.removeChild(f),ea(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);ea(i)}function Qi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function nh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var ss=Math.random().toString(36).slice(2),mi="__reactFiber$"+ss,da="__reactProps$"+ss,wi="__reactContainer$"+ss,mc="__reactEvents$"+ss,F0="__reactListeners$"+ss,k0="__reactHandles$"+ss;function Tr(t){var i=t[mi];if(i)return i;for(var a=t.parentNode;a;){if(i=a[wi]||a[mi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=nh(t);t!==null;){if(a=t[mi])return a;t=nh(t)}return i}t=a,a=t.parentNode}return null}function fa(t){return t=t[mi]||t[wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function as(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function po(t){return t[da]||null}var gc=[],os=-1;function Ji(t){return{current:t}}function kt(t){0>os||(t.current=gc[os],gc[os]=null,os--)}function It(t,i){os++,gc[os]=t.current,t.current=i}var er={},cn=Ji(er),En=Ji(!1),Ar=er;function ls(t,i){var a=t.type.contextTypes;if(!a)return er;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},p;for(p in a)f[p]=i[p];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function wn(t){return t=t.childContextTypes,t!=null}function mo(){kt(En),kt(cn)}function ih(t,i,a){if(cn.current!==er)throw Error(n(168));It(cn,i),It(En,a)}function rh(t,i,a){var c=t.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(n(108,Q(t)||"Unknown",f));return I({},a,c)}function go(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||er,Ar=cn.current,It(cn,t),It(En,En.current),!0}function sh(t,i,a){var c=t.stateNode;if(!c)throw Error(n(169));a?(t=rh(t,i,Ar),c.__reactInternalMemoizedMergedChildContext=t,kt(En),kt(cn),It(cn,t)):kt(En),It(En,a)}var Ti=null,vo=!1,vc=!1;function ah(t){Ti===null?Ti=[t]:Ti.push(t)}function O0(t){vo=!0,ah(t)}function tr(){if(!vc&&Ti!==null){vc=!0;var t=0,i=Nt;try{var a=Ti;for(Nt=1;t<a.length;t++){var c=a[t];do c=c(!0);while(c!==null)}Ti=null,vo=!1}catch(f){throw Ti!==null&&(Ti=Ti.slice(t+1)),se(je,tr),f}finally{Nt=i,vc=!1}}return null}var cs=[],us=0,xo=null,_o=0,Gn=[],Wn=0,br=null,Ai=1,bi="";function Cr(t,i){cs[us++]=_o,cs[us++]=xo,xo=t,_o=i}function oh(t,i,a){Gn[Wn++]=Ai,Gn[Wn++]=bi,Gn[Wn++]=br,br=t;var c=Ai;t=bi;var f=32-dt(c)-1;c&=~(1<<f),a+=1;var p=32-dt(i)+f;if(30<p){var w=f-f%5;p=(c&(1<<w)-1).toString(32),c>>=w,f-=w,Ai=1<<32-dt(i)+f|a<<f|c,bi=p+t}else Ai=1<<p|a<<f|c,bi=t}function xc(t){t.return!==null&&(Cr(t,1),oh(t,1,0))}function _c(t){for(;t===xo;)xo=cs[--us],cs[us]=null,_o=cs[--us],cs[us]=null;for(;t===br;)br=Gn[--Wn],Gn[Wn]=null,bi=Gn[--Wn],Gn[Wn]=null,Ai=Gn[--Wn],Gn[Wn]=null}var Un=null,Fn=null,Ot=!1,ni=null;function lh(t,i){var a=Yn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function ch(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Un=t,Fn=Qi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Un=t,Fn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=br!==null?{id:Ai,overflow:bi}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Yn(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,Un=t,Fn=null,!0):!1;default:return!1}}function yc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Sc(t){if(Ot){var i=Fn;if(i){var a=i;if(!ch(t,i)){if(yc(t))throw Error(n(418));i=Qi(a.nextSibling);var c=Un;i&&ch(t,i)?lh(c,a):(t.flags=t.flags&-4097|2,Ot=!1,Un=t)}}else{if(yc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ot=!1,Un=t}}}function uh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Un=t}function yo(t){if(t!==Un)return!1;if(!Ot)return uh(t),Ot=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!fc(t.type,t.memoizedProps)),i&&(i=Fn)){if(yc(t))throw dh(),Error(n(418));for(;i;)lh(t,i),i=Qi(i.nextSibling)}if(uh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){Fn=Qi(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}Fn=null}}else Fn=Un?Qi(t.stateNode.nextSibling):null;return!0}function dh(){for(var t=Fn;t;)t=Qi(t.nextSibling)}function ds(){Fn=Un=null,Ot=!1}function Mc(t){ni===null?ni=[t]:ni.push(t)}var z0=R.ReactCurrentBatchConfig;function ha(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var c=a.stateNode}if(!c)throw Error(n(147,t));var f=c,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(w){var F=f.refs;w===null?delete F[p]:F[p]=w},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function So(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function fh(t){var i=t._init;return i(t._payload)}function hh(t){function i(Z,j){if(t){var te=Z.deletions;te===null?(Z.deletions=[j],Z.flags|=16):te.push(j)}}function a(Z,j){if(!t)return null;for(;j!==null;)i(Z,j),j=j.sibling;return null}function c(Z,j){for(Z=new Map;j!==null;)j.key!==null?Z.set(j.key,j):Z.set(j.index,j),j=j.sibling;return Z}function f(Z,j){return Z=cr(Z,j),Z.index=0,Z.sibling=null,Z}function p(Z,j,te){return Z.index=te,t?(te=Z.alternate,te!==null?(te=te.index,te<j?(Z.flags|=2,j):te):(Z.flags|=2,j)):(Z.flags|=1048576,j)}function w(Z){return t&&Z.alternate===null&&(Z.flags|=2),Z}function F(Z,j,te,be){return j===null||j.tag!==6?(j=hu(te,Z.mode,be),j.return=Z,j):(j=f(j,te),j.return=Z,j)}function V(Z,j,te,be){var $e=te.type;return $e===k?Ee(Z,j,te.props.children,be,te.key):j!==null&&(j.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===de&&fh($e)===j.type)?(be=f(j,te.props),be.ref=ha(Z,j,te),be.return=Z,be):(be=jo(te.type,te.key,te.props,null,Z.mode,be),be.ref=ha(Z,j,te),be.return=Z,be)}function re(Z,j,te,be){return j===null||j.tag!==4||j.stateNode.containerInfo!==te.containerInfo||j.stateNode.implementation!==te.implementation?(j=pu(te,Z.mode,be),j.return=Z,j):(j=f(j,te.children||[]),j.return=Z,j)}function Ee(Z,j,te,be,$e){return j===null||j.tag!==7?(j=Fr(te,Z.mode,be,$e),j.return=Z,j):(j=f(j,te),j.return=Z,j)}function Te(Z,j,te){if(typeof j=="string"&&j!==""||typeof j=="number")return j=hu(""+j,Z.mode,te),j.return=Z,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case K:return te=jo(j.type,j.key,j.props,null,Z.mode,te),te.ref=ha(Z,null,j),te.return=Z,te;case O:return j=pu(j,Z.mode,te),j.return=Z,j;case de:var be=j._init;return Te(Z,be(j._payload),te)}if(Oe(j)||fe(j))return j=Fr(j,Z.mode,te,null),j.return=Z,j;So(Z,j)}return null}function Me(Z,j,te,be){var $e=j!==null?j.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return $e!==null?null:F(Z,j,""+te,be);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case K:return te.key===$e?V(Z,j,te,be):null;case O:return te.key===$e?re(Z,j,te,be):null;case de:return $e=te._init,Me(Z,j,$e(te._payload),be)}if(Oe(te)||fe(te))return $e!==null?null:Ee(Z,j,te,be,null);So(Z,te)}return null}function ke(Z,j,te,be,$e){if(typeof be=="string"&&be!==""||typeof be=="number")return Z=Z.get(te)||null,F(j,Z,""+be,$e);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case K:return Z=Z.get(be.key===null?te:be.key)||null,V(j,Z,be,$e);case O:return Z=Z.get(be.key===null?te:be.key)||null,re(j,Z,be,$e);case de:var nt=be._init;return ke(Z,j,te,nt(be._payload),$e)}if(Oe(be)||fe(be))return Z=Z.get(te)||null,Ee(j,Z,be,$e,null);So(j,be)}return null}function Ge(Z,j,te,be){for(var $e=null,nt=null,it=j,at=j=0,tn=null;it!==null&&at<te.length;at++){it.index>at?(tn=it,it=null):tn=it.sibling;var Tt=Me(Z,it,te[at],be);if(Tt===null){it===null&&(it=tn);break}t&&it&&Tt.alternate===null&&i(Z,it),j=p(Tt,j,at),nt===null?$e=Tt:nt.sibling=Tt,nt=Tt,it=tn}if(at===te.length)return a(Z,it),Ot&&Cr(Z,at),$e;if(it===null){for(;at<te.length;at++)it=Te(Z,te[at],be),it!==null&&(j=p(it,j,at),nt===null?$e=it:nt.sibling=it,nt=it);return Ot&&Cr(Z,at),$e}for(it=c(Z,it);at<te.length;at++)tn=ke(it,Z,at,te[at],be),tn!==null&&(t&&tn.alternate!==null&&it.delete(tn.key===null?at:tn.key),j=p(tn,j,at),nt===null?$e=tn:nt.sibling=tn,nt=tn);return t&&it.forEach(function(ur){return i(Z,ur)}),Ot&&Cr(Z,at),$e}function Xe(Z,j,te,be){var $e=fe(te);if(typeof $e!="function")throw Error(n(150));if(te=$e.call(te),te==null)throw Error(n(151));for(var nt=$e=null,it=j,at=j=0,tn=null,Tt=te.next();it!==null&&!Tt.done;at++,Tt=te.next()){it.index>at?(tn=it,it=null):tn=it.sibling;var ur=Me(Z,it,Tt.value,be);if(ur===null){it===null&&(it=tn);break}t&&it&&ur.alternate===null&&i(Z,it),j=p(ur,j,at),nt===null?$e=ur:nt.sibling=ur,nt=ur,it=tn}if(Tt.done)return a(Z,it),Ot&&Cr(Z,at),$e;if(it===null){for(;!Tt.done;at++,Tt=te.next())Tt=Te(Z,Tt.value,be),Tt!==null&&(j=p(Tt,j,at),nt===null?$e=Tt:nt.sibling=Tt,nt=Tt);return Ot&&Cr(Z,at),$e}for(it=c(Z,it);!Tt.done;at++,Tt=te.next())Tt=ke(it,Z,at,Tt.value,be),Tt!==null&&(t&&Tt.alternate!==null&&it.delete(Tt.key===null?at:Tt.key),j=p(Tt,j,at),nt===null?$e=Tt:nt.sibling=Tt,nt=Tt);return t&&it.forEach(function(xv){return i(Z,xv)}),Ot&&Cr(Z,at),$e}function Gt(Z,j,te,be){if(typeof te=="object"&&te!==null&&te.type===k&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case K:e:{for(var $e=te.key,nt=j;nt!==null;){if(nt.key===$e){if($e=te.type,$e===k){if(nt.tag===7){a(Z,nt.sibling),j=f(nt,te.props.children),j.return=Z,Z=j;break e}}else if(nt.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===de&&fh($e)===nt.type){a(Z,nt.sibling),j=f(nt,te.props),j.ref=ha(Z,nt,te),j.return=Z,Z=j;break e}a(Z,nt);break}else i(Z,nt);nt=nt.sibling}te.type===k?(j=Fr(te.props.children,Z.mode,be,te.key),j.return=Z,Z=j):(be=jo(te.type,te.key,te.props,null,Z.mode,be),be.ref=ha(Z,j,te),be.return=Z,Z=be)}return w(Z);case O:e:{for(nt=te.key;j!==null;){if(j.key===nt)if(j.tag===4&&j.stateNode.containerInfo===te.containerInfo&&j.stateNode.implementation===te.implementation){a(Z,j.sibling),j=f(j,te.children||[]),j.return=Z,Z=j;break e}else{a(Z,j);break}else i(Z,j);j=j.sibling}j=pu(te,Z.mode,be),j.return=Z,Z=j}return w(Z);case de:return nt=te._init,Gt(Z,j,nt(te._payload),be)}if(Oe(te))return Ge(Z,j,te,be);if(fe(te))return Xe(Z,j,te,be);So(Z,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,j!==null&&j.tag===6?(a(Z,j.sibling),j=f(j,te),j.return=Z,Z=j):(a(Z,j),j=hu(te,Z.mode,be),j.return=Z,Z=j),w(Z)):a(Z,j)}return Gt}var fs=hh(!0),ph=hh(!1),Mo=Ji(null),Eo=null,hs=null,Ec=null;function wc(){Ec=hs=Eo=null}function Tc(t){var i=Mo.current;kt(Mo),t._currentValue=i}function Ac(t,i,a){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===a)break;t=t.return}}function ps(t,i){Eo=t,Ec=hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Tn=!0),t.firstContext=null)}function jn(t){var i=t._currentValue;if(Ec!==t)if(t={context:t,memoizedValue:i,next:null},hs===null){if(Eo===null)throw Error(n(308));hs=t,Eo.dependencies={lanes:0,firstContext:t}}else hs=hs.next=t;return i}var Rr=null;function bc(t){Rr===null?Rr=[t]:Rr.push(t)}function mh(t,i,a,c){var f=i.interleaved;return f===null?(a.next=a,bc(i)):(a.next=f.next,f.next=a),i.interleaved=a,Ci(t,c)}function Ci(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var nr=!1;function Cc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ri(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function ir(t,i,a){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(Mt&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Ci(t,a)}return f=c.interleaved,f===null?(i.next=i,bc(c)):(i.next=f.next,f.next=i),c.interleaved=i,Ci(t,a)}function wo(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,Hl(t,a)}}function vh(t,i){var a=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?f=p=w:p=p.next=w,a=a.next}while(a!==null);p===null?f=p=i:p=p.next=i}else f=p=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:c.shared,effects:c.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function To(t,i,a,c){var f=t.updateQueue;nr=!1;var p=f.firstBaseUpdate,w=f.lastBaseUpdate,F=f.shared.pending;if(F!==null){f.shared.pending=null;var V=F,re=V.next;V.next=null,w===null?p=re:w.next=re,w=V;var Ee=t.alternate;Ee!==null&&(Ee=Ee.updateQueue,F=Ee.lastBaseUpdate,F!==w&&(F===null?Ee.firstBaseUpdate=re:F.next=re,Ee.lastBaseUpdate=V))}if(p!==null){var Te=f.baseState;w=0,Ee=re=V=null,F=p;do{var Me=F.lane,ke=F.eventTime;if((c&Me)===Me){Ee!==null&&(Ee=Ee.next={eventTime:ke,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var Ge=t,Xe=F;switch(Me=i,ke=a,Xe.tag){case 1:if(Ge=Xe.payload,typeof Ge=="function"){Te=Ge.call(ke,Te,Me);break e}Te=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=Xe.payload,Me=typeof Ge=="function"?Ge.call(ke,Te,Me):Ge,Me==null)break e;Te=I({},Te,Me);break e;case 2:nr=!0}}F.callback!==null&&F.lane!==0&&(t.flags|=64,Me=f.effects,Me===null?f.effects=[F]:Me.push(F))}else ke={eventTime:ke,lane:Me,tag:F.tag,payload:F.payload,callback:F.callback,next:null},Ee===null?(re=Ee=ke,V=Te):Ee=Ee.next=ke,w|=Me;if(F=F.next,F===null){if(F=f.shared.pending,F===null)break;Me=F,F=Me.next,Me.next=null,f.lastBaseUpdate=Me,f.shared.pending=null}}while(!0);if(Ee===null&&(V=Te),f.baseState=V,f.firstBaseUpdate=re,f.lastBaseUpdate=Ee,i=f.shared.interleaved,i!==null){f=i;do w|=f.lane,f=f.next;while(f!==i)}else p===null&&(f.shared.lanes=0);Lr|=w,t.lanes=w,t.memoizedState=Te}}function xh(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var c=t[i],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(n(191,f));f.call(c)}}}var pa={},gi=Ji(pa),ma=Ji(pa),ga=Ji(pa);function Pr(t){if(t===pa)throw Error(n(174));return t}function Rc(t,i){switch(It(ga,i),It(ma,t),It(gi,pa),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:We(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=We(i,t)}kt(gi),It(gi,i)}function ms(){kt(gi),kt(ma),kt(ga)}function _h(t){Pr(ga.current);var i=Pr(gi.current),a=We(i,t.type);i!==a&&(It(ma,t),It(gi,a))}function Pc(t){ma.current===t&&(kt(gi),kt(ma))}var zt=Ji(0);function Ao(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Nc=[];function Lc(){for(var t=0;t<Nc.length;t++)Nc[t]._workInProgressVersionPrimary=null;Nc.length=0}var bo=R.ReactCurrentDispatcher,Dc=R.ReactCurrentBatchConfig,Nr=0,Bt=null,$t=null,Jt=null,Co=!1,va=!1,xa=0,B0=0;function un(){throw Error(n(321))}function Ic(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!ti(t[a],i[a]))return!1;return!0}function Uc(t,i,a,c,f,p){if(Nr=p,Bt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,bo.current=t===null||t.memoizedState===null?W0:j0,t=a(c,f),va){p=0;do{if(va=!1,xa=0,25<=p)throw Error(n(301));p+=1,Jt=$t=null,i.updateQueue=null,bo.current=X0,t=a(c,f)}while(va)}if(bo.current=No,i=$t!==null&&$t.next!==null,Nr=0,Jt=$t=Bt=null,Co=!1,i)throw Error(n(300));return t}function Fc(){var t=xa!==0;return xa=0,t}function vi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?Bt.memoizedState=Jt=t:Jt=Jt.next=t,Jt}function Xn(){if($t===null){var t=Bt.alternate;t=t!==null?t.memoizedState:null}else t=$t.next;var i=Jt===null?Bt.memoizedState:Jt.next;if(i!==null)Jt=i,$t=t;else{if(t===null)throw Error(n(310));$t=t,t={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},Jt===null?Bt.memoizedState=Jt=t:Jt=Jt.next=t}return Jt}function _a(t,i){return typeof i=="function"?i(t):i}function kc(t){var i=Xn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=$t,f=c.baseQueue,p=a.pending;if(p!==null){if(f!==null){var w=f.next;f.next=p.next,p.next=w}c.baseQueue=f=p,a.pending=null}if(f!==null){p=f.next,c=c.baseState;var F=w=null,V=null,re=p;do{var Ee=re.lane;if((Nr&Ee)===Ee)V!==null&&(V=V.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),c=re.hasEagerState?re.eagerState:t(c,re.action);else{var Te={lane:Ee,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};V===null?(F=V=Te,w=c):V=V.next=Te,Bt.lanes|=Ee,Lr|=Ee}re=re.next}while(re!==null&&re!==p);V===null?w=c:V.next=F,ti(c,i.memoizedState)||(Tn=!0),i.memoizedState=c,i.baseState=w,i.baseQueue=V,a.lastRenderedState=c}if(t=a.interleaved,t!==null){f=t;do p=f.lane,Bt.lanes|=p,Lr|=p,f=f.next;while(f!==t)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Oc(t){var i=Xn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=a.dispatch,f=a.pending,p=i.memoizedState;if(f!==null){a.pending=null;var w=f=f.next;do p=t(p,w.action),w=w.next;while(w!==f);ti(p,i.memoizedState)||(Tn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,c]}function yh(){}function Sh(t,i){var a=Bt,c=Xn(),f=i(),p=!ti(c.memoizedState,f);if(p&&(c.memoizedState=f,Tn=!0),c=c.queue,zc(wh.bind(null,a,c,t),[t]),c.getSnapshot!==i||p||Jt!==null&&Jt.memoizedState.tag&1){if(a.flags|=2048,ya(9,Eh.bind(null,a,c,f,i),void 0,null),en===null)throw Error(n(349));(Nr&30)!==0||Mh(a,i,f)}return f}function Mh(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Eh(t,i,a,c){i.value=a,i.getSnapshot=c,Th(i)&&Ah(t)}function wh(t,i,a){return a(function(){Th(i)&&Ah(t)})}function Th(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!ti(t,a)}catch{return!0}}function Ah(t){var i=Ci(t,1);i!==null&&ai(i,t,1,-1)}function bh(t){var i=vi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:t},i.queue=t,t=t.dispatch=G0.bind(null,Bt,t),[i.memoizedState,t]}function ya(t,i,a,c){return t={tag:t,create:i,destroy:a,deps:c,next:null},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(c=a.next,a.next=t,t.next=c,i.lastEffect=t)),t}function Ch(){return Xn().memoizedState}function Ro(t,i,a,c){var f=vi();Bt.flags|=t,f.memoizedState=ya(1|i,a,void 0,c===void 0?null:c)}function Po(t,i,a,c){var f=Xn();c=c===void 0?null:c;var p=void 0;if($t!==null){var w=$t.memoizedState;if(p=w.destroy,c!==null&&Ic(c,w.deps)){f.memoizedState=ya(i,a,p,c);return}}Bt.flags|=t,f.memoizedState=ya(1|i,a,p,c)}function Rh(t,i){return Ro(8390656,8,t,i)}function zc(t,i){return Po(2048,8,t,i)}function Ph(t,i){return Po(4,2,t,i)}function Nh(t,i){return Po(4,4,t,i)}function Lh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Dh(t,i,a){return a=a!=null?a.concat([t]):null,Po(4,4,Lh.bind(null,i,t),a)}function Bc(){}function Ih(t,i){var a=Xn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Ic(i,c[1])?c[0]:(a.memoizedState=[t,i],t)}function Uh(t,i){var a=Xn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Ic(i,c[1])?c[0]:(t=t(),a.memoizedState=[t,i],t)}function Fh(t,i,a){return(Nr&21)===0?(t.baseState&&(t.baseState=!1,Tn=!0),t.memoizedState=a):(ti(a,i)||(a=gn(),Bt.lanes|=a,Lr|=a,t.baseState=!0),i)}function V0(t,i){var a=Nt;Nt=a!==0&&4>a?a:4,t(!0);var c=Dc.transition;Dc.transition={};try{t(!1),i()}finally{Nt=a,Dc.transition=c}}function kh(){return Xn().memoizedState}function H0(t,i,a){var c=or(t);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Oh(t))zh(i,a);else if(a=mh(t,i,a,c),a!==null){var f=xn();ai(a,t,c,f),Bh(a,i,c)}}function G0(t,i,a){var c=or(t),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Oh(t))zh(i,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var w=i.lastRenderedState,F=p(w,a);if(f.hasEagerState=!0,f.eagerState=F,ti(F,w)){var V=i.interleaved;V===null?(f.next=f,bc(i)):(f.next=V.next,V.next=f),i.interleaved=f;return}}catch{}finally{}a=mh(t,i,f,c),a!==null&&(f=xn(),ai(a,t,c,f),Bh(a,i,c))}}function Oh(t){var i=t.alternate;return t===Bt||i!==null&&i===Bt}function zh(t,i){va=Co=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Bh(t,i,a){if((a&4194240)!==0){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,Hl(t,a)}}var No={readContext:jn,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},W0={readContext:jn,useCallback:function(t,i){return vi().memoizedState=[t,i===void 0?null:i],t},useContext:jn,useEffect:Rh,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Ro(4194308,4,Lh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Ro(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ro(4,2,t,i)},useMemo:function(t,i){var a=vi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var c=vi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},c.queue=t,t=t.dispatch=H0.bind(null,Bt,t),[c.memoizedState,t]},useRef:function(t){var i=vi();return t={current:t},i.memoizedState=t},useState:bh,useDebugValue:Bc,useDeferredValue:function(t){return vi().memoizedState=t},useTransition:function(){var t=bh(!1),i=t[0];return t=V0.bind(null,t[1]),vi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var c=Bt,f=vi();if(Ot){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),en===null)throw Error(n(349));(Nr&30)!==0||Mh(c,i,a)}f.memoizedState=a;var p={value:a,getSnapshot:i};return f.queue=p,Rh(wh.bind(null,c,p,t),[t]),c.flags|=2048,ya(9,Eh.bind(null,c,p,a,i),void 0,null),a},useId:function(){var t=vi(),i=en.identifierPrefix;if(Ot){var a=bi,c=Ai;a=(c&~(1<<32-dt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=xa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=B0++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},j0={readContext:jn,useCallback:Ih,useContext:jn,useEffect:zc,useImperativeHandle:Dh,useInsertionEffect:Ph,useLayoutEffect:Nh,useMemo:Uh,useReducer:kc,useRef:Ch,useState:function(){return kc(_a)},useDebugValue:Bc,useDeferredValue:function(t){var i=Xn();return Fh(i,$t.memoizedState,t)},useTransition:function(){var t=kc(_a)[0],i=Xn().memoizedState;return[t,i]},useMutableSource:yh,useSyncExternalStore:Sh,useId:kh,unstable_isNewReconciler:!1},X0={readContext:jn,useCallback:Ih,useContext:jn,useEffect:zc,useImperativeHandle:Dh,useInsertionEffect:Ph,useLayoutEffect:Nh,useMemo:Uh,useReducer:Oc,useRef:Ch,useState:function(){return Oc(_a)},useDebugValue:Bc,useDeferredValue:function(t){var i=Xn();return $t===null?i.memoizedState=t:Fh(i,$t.memoizedState,t)},useTransition:function(){var t=Oc(_a)[0],i=Xn().memoizedState;return[t,i]},useMutableSource:yh,useSyncExternalStore:Sh,useId:kh,unstable_isNewReconciler:!1};function ii(t,i){if(t&&t.defaultProps){i=I({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function Vc(t,i,a,c){i=t.memoizedState,a=a(c,i),a=a==null?i:I({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Lo={isMounted:function(t){return(t=t._reactInternals)?hi(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var c=xn(),f=or(t),p=Ri(c,f);p.payload=i,a!=null&&(p.callback=a),i=ir(t,p,f),i!==null&&(ai(i,t,f,c),wo(i,t,f))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var c=xn(),f=or(t),p=Ri(c,f);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=ir(t,p,f),i!==null&&(ai(i,t,f,c),wo(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=xn(),c=or(t),f=Ri(a,c);f.tag=2,i!=null&&(f.callback=i),i=ir(t,f,c),i!==null&&(ai(i,t,c,a),wo(i,t,c))}};function Vh(t,i,a,c,f,p,w){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,p,w):i.prototype&&i.prototype.isPureReactComponent?!aa(a,c)||!aa(f,p):!0}function Hh(t,i,a){var c=!1,f=er,p=i.contextType;return typeof p=="object"&&p!==null?p=jn(p):(f=wn(i)?Ar:cn.current,c=i.contextTypes,p=(c=c!=null)?ls(t,f):er),i=new i(a,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Lo,t.stateNode=i,i._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=p),i}function Gh(t,i,a,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==t&&Lo.enqueueReplaceState(i,i.state,null)}function Hc(t,i,a,c){var f=t.stateNode;f.props=a,f.state=t.memoizedState,f.refs={},Cc(t);var p=i.contextType;typeof p=="object"&&p!==null?f.context=jn(p):(p=wn(i)?Ar:cn.current,f.context=ls(t,p)),f.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Vc(t,i,p,a),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Lo.enqueueReplaceState(f,f.state,null),To(t,a,f,c),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function gs(t,i){try{var a="",c=i;do a+=ee(c),c=c.return;while(c);var f=a}catch(p){f=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:f,digest:null}}function Gc(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function Wc(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var q0=typeof WeakMap=="function"?WeakMap:Map;function Wh(t,i,a){a=Ri(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){zo||(zo=!0,su=c),Wc(t,i)},a}function jh(t,i,a){a=Ri(-1,a),a.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;a.payload=function(){return c(f)},a.callback=function(){Wc(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Wc(t,i),typeof c!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function Xh(t,i,a){var c=t.pingCache;if(c===null){c=t.pingCache=new q0;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(f.add(a),t=ov.bind(null,t,i,a),i.then(t,t))}function qh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Yh(t,i,a,c,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ri(-1,1),i.tag=2,ir(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var Y0=R.ReactCurrentOwner,Tn=!1;function vn(t,i,a,c){i.child=t===null?ph(i,null,a,c):fs(i,t.child,a,c)}function $h(t,i,a,c,f){a=a.render;var p=i.ref;return ps(i,f),c=Uc(t,i,a,c,p,f),a=Fc(),t!==null&&!Tn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Pi(t,i,f)):(Ot&&a&&xc(i),i.flags|=1,vn(t,i,c,f),i.child)}function Kh(t,i,a,c,f){if(t===null){var p=a.type;return typeof p=="function"&&!fu(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,Zh(t,i,p,c,f)):(t=jo(a.type,null,c,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&f)===0){var w=p.memoizedProps;if(a=a.compare,a=a!==null?a:aa,a(w,c)&&t.ref===i.ref)return Pi(t,i,f)}return i.flags|=1,t=cr(p,c),t.ref=i.ref,t.return=i,i.child=t}function Zh(t,i,a,c,f){if(t!==null){var p=t.memoizedProps;if(aa(p,c)&&t.ref===i.ref)if(Tn=!1,i.pendingProps=c=p,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Tn=!0);else return i.lanes=t.lanes,Pi(t,i,f)}return jc(t,i,a,c,f)}function Qh(t,i,a){var c=i.pendingProps,f=c.children,p=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(xs,kn),kn|=a;else{if((a&1073741824)===0)return t=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,It(xs,kn),kn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,It(xs,kn),kn|=c}else p!==null?(c=p.baseLanes|a,i.memoizedState=null):c=a,It(xs,kn),kn|=c;return vn(t,i,f,a),i.child}function Jh(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function jc(t,i,a,c,f){var p=wn(a)?Ar:cn.current;return p=ls(i,p),ps(i,f),a=Uc(t,i,a,c,p,f),c=Fc(),t!==null&&!Tn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Pi(t,i,f)):(Ot&&c&&xc(i),i.flags|=1,vn(t,i,a,f),i.child)}function ep(t,i,a,c,f){if(wn(a)){var p=!0;go(i)}else p=!1;if(ps(i,f),i.stateNode===null)Io(t,i),Hh(i,a,c),Hc(i,a,c,f),c=!0;else if(t===null){var w=i.stateNode,F=i.memoizedProps;w.props=F;var V=w.context,re=a.contextType;typeof re=="object"&&re!==null?re=jn(re):(re=wn(a)?Ar:cn.current,re=ls(i,re));var Ee=a.getDerivedStateFromProps,Te=typeof Ee=="function"||typeof w.getSnapshotBeforeUpdate=="function";Te||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(F!==c||V!==re)&&Gh(i,w,c,re),nr=!1;var Me=i.memoizedState;w.state=Me,To(i,c,w,f),V=i.memoizedState,F!==c||Me!==V||En.current||nr?(typeof Ee=="function"&&(Vc(i,a,Ee,c),V=i.memoizedState),(F=nr||Vh(i,a,F,c,Me,V,re))?(Te||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=V),w.props=c,w.state=V,w.context=re,c=F):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{w=i.stateNode,gh(t,i),F=i.memoizedProps,re=i.type===i.elementType?F:ii(i.type,F),w.props=re,Te=i.pendingProps,Me=w.context,V=a.contextType,typeof V=="object"&&V!==null?V=jn(V):(V=wn(a)?Ar:cn.current,V=ls(i,V));var ke=a.getDerivedStateFromProps;(Ee=typeof ke=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(F!==Te||Me!==V)&&Gh(i,w,c,V),nr=!1,Me=i.memoizedState,w.state=Me,To(i,c,w,f);var Ge=i.memoizedState;F!==Te||Me!==Ge||En.current||nr?(typeof ke=="function"&&(Vc(i,a,ke,c),Ge=i.memoizedState),(re=nr||Vh(i,a,re,c,Me,Ge,V)||!1)?(Ee||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,Ge,V),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,Ge,V)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||F===t.memoizedProps&&Me===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||F===t.memoizedProps&&Me===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ge),w.props=c,w.state=Ge,w.context=V,c=re):(typeof w.componentDidUpdate!="function"||F===t.memoizedProps&&Me===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||F===t.memoizedProps&&Me===t.memoizedState||(i.flags|=1024),c=!1)}return Xc(t,i,a,c,p,f)}function Xc(t,i,a,c,f,p){Jh(t,i);var w=(i.flags&128)!==0;if(!c&&!w)return f&&sh(i,a,!1),Pi(t,i,p);c=i.stateNode,Y0.current=i;var F=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,t!==null&&w?(i.child=fs(i,t.child,null,p),i.child=fs(i,null,F,p)):vn(t,i,F,p),i.memoizedState=c.state,f&&sh(i,a,!0),i.child}function tp(t){var i=t.stateNode;i.pendingContext?ih(t,i.pendingContext,i.pendingContext!==i.context):i.context&&ih(t,i.context,!1),Rc(t,i.containerInfo)}function np(t,i,a,c,f){return ds(),Mc(f),i.flags|=256,vn(t,i,a,c),i.child}var qc={dehydrated:null,treeContext:null,retryLane:0};function Yc(t){return{baseLanes:t,cachePool:null,transitions:null}}function ip(t,i,a){var c=i.pendingProps,f=zt.current,p=!1,w=(i.flags&128)!==0,F;if((F=w)||(F=t!==null&&t.memoizedState===null?!1:(f&2)!==0),F?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),It(zt,f&1),t===null)return Sc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=c.children,t=c.fallback,p?(c=i.mode,p=i.child,w={mode:"hidden",children:w},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=w):p=Xo(w,c,0,null),t=Fr(t,c,a,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=Yc(a),i.memoizedState=qc,t):$c(i,w));if(f=t.memoizedState,f!==null&&(F=f.dehydrated,F!==null))return $0(t,i,w,c,F,f,a);if(p){p=c.fallback,w=i.mode,f=t.child,F=f.sibling;var V={mode:"hidden",children:c.children};return(w&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=V,i.deletions=null):(c=cr(f,V),c.subtreeFlags=f.subtreeFlags&14680064),F!==null?p=cr(F,p):(p=Fr(p,w,a,null),p.flags|=2),p.return=i,c.return=i,c.sibling=p,i.child=c,c=p,p=i.child,w=t.child.memoizedState,w=w===null?Yc(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},p.memoizedState=w,p.childLanes=t.childLanes&~a,i.memoizedState=qc,c}return p=t.child,t=p.sibling,c=cr(p,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=c,i.memoizedState=null,c}function $c(t,i){return i=Xo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Do(t,i,a,c){return c!==null&&Mc(c),fs(i,t.child,null,a),t=$c(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function $0(t,i,a,c,f,p,w){if(a)return i.flags&256?(i.flags&=-257,c=Gc(Error(n(422))),Do(t,i,w,c)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=c.fallback,f=i.mode,c=Xo({mode:"visible",children:c.children},f,0,null),p=Fr(p,f,w,null),p.flags|=2,c.return=i,p.return=i,c.sibling=p,i.child=c,(i.mode&1)!==0&&fs(i,t.child,null,w),i.child.memoizedState=Yc(w),i.memoizedState=qc,p);if((i.mode&1)===0)return Do(t,i,w,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var F=c.dgst;return c=F,p=Error(n(419)),c=Gc(p,c,void 0),Do(t,i,w,c)}if(F=(w&t.childLanes)!==0,Tn||F){if(c=en,c!==null){switch(w&-w){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|w))!==0?0:f,f!==0&&f!==p.retryLane&&(p.retryLane=f,Ci(t,f),ai(c,t,f,-1))}return du(),c=Gc(Error(n(421))),Do(t,i,w,c)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=lv.bind(null,t),f._reactRetry=i,null):(t=p.treeContext,Fn=Qi(f.nextSibling),Un=i,Ot=!0,ni=null,t!==null&&(Gn[Wn++]=Ai,Gn[Wn++]=bi,Gn[Wn++]=br,Ai=t.id,bi=t.overflow,br=i),i=$c(i,c.children),i.flags|=4096,i)}function rp(t,i,a){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),Ac(t.return,i,a)}function Kc(t,i,a,c,f){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=f)}function sp(t,i,a){var c=i.pendingProps,f=c.revealOrder,p=c.tail;if(vn(t,i,c.children,a),c=zt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rp(t,a,i);else if(t.tag===19)rp(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(It(zt,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)t=a.alternate,t!==null&&Ao(t)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),Kc(i,!1,f,a,p);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Ao(t)===null){i.child=f;break}t=f.sibling,f.sibling=a,a=f,f=t}Kc(i,!0,a,null,p);break;case"together":Kc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Io(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Pi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Lr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=cr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=cr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function K0(t,i,a){switch(i.tag){case 3:tp(i),ds();break;case 5:_h(i);break;case 1:wn(i.type)&&go(i);break;case 4:Rc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;It(Mo,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(It(zt,zt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?ip(t,i,a):(It(zt,zt.current&1),t=Pi(t,i,a),t!==null?t.sibling:null);It(zt,zt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(t.flags&128)!==0){if(c)return sp(t,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),It(zt,zt.current),c)break;return null;case 22:case 23:return i.lanes=0,Qh(t,i,a)}return Pi(t,i,a)}var ap,Zc,op,lp;ap=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Zc=function(){},op=function(t,i,a,c){var f=t.memoizedProps;if(f!==c){t=i.stateNode,Pr(gi.current);var p=null;switch(a){case"input":f=z(t,f),c=z(t,c),p=[];break;case"select":f=I({},f,{value:void 0}),c=I({},c,{value:void 0}),p=[];break;case"textarea":f=b(t,f),c=b(t,c),p=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=ho)}mt(a,c);var w;a=null;for(re in f)if(!c.hasOwnProperty(re)&&f.hasOwnProperty(re)&&f[re]!=null)if(re==="style"){var F=f[re];for(w in F)F.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(o.hasOwnProperty(re)?p||(p=[]):(p=p||[]).push(re,null));for(re in c){var V=c[re];if(F=f!=null?f[re]:void 0,c.hasOwnProperty(re)&&V!==F&&(V!=null||F!=null))if(re==="style")if(F){for(w in F)!F.hasOwnProperty(w)||V&&V.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in V)V.hasOwnProperty(w)&&F[w]!==V[w]&&(a||(a={}),a[w]=V[w])}else a||(p||(p=[]),p.push(re,a)),a=V;else re==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,F=F?F.__html:void 0,V!=null&&F!==V&&(p=p||[]).push(re,V)):re==="children"?typeof V!="string"&&typeof V!="number"||(p=p||[]).push(re,""+V):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(o.hasOwnProperty(re)?(V!=null&&re==="onScroll"&&Ft("scroll",t),p||F===V||(p=[])):(p=p||[]).push(re,V))}a&&(p=p||[]).push("style",a);var re=p;(i.updateQueue=re)&&(i.flags|=4)}},lp=function(t,i,a,c){a!==c&&(i.flags|=4)};function Sa(t,i){if(!Ot)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function dn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,c=0;if(i)for(var f=t.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=c,t.childLanes=a,i}function Z0(t,i,a){var c=i.pendingProps;switch(_c(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(i),null;case 1:return wn(i.type)&&mo(),dn(i),null;case 3:return c=i.stateNode,ms(),kt(En),kt(cn),Lc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(yo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ni!==null&&(lu(ni),ni=null))),Zc(t,i),dn(i),null;case 5:Pc(i);var f=Pr(ga.current);if(a=i.type,t!==null&&i.stateNode!=null)op(t,i,a,c,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return dn(i),null}if(t=Pr(gi.current),yo(i)){c=i.stateNode,a=i.type;var p=i.memoizedProps;switch(c[mi]=i,c[da]=p,t=(i.mode&1)!==0,a){case"dialog":Ft("cancel",c),Ft("close",c);break;case"iframe":case"object":case"embed":Ft("load",c);break;case"video":case"audio":for(f=0;f<la.length;f++)Ft(la[f],c);break;case"source":Ft("error",c);break;case"img":case"image":case"link":Ft("error",c),Ft("load",c);break;case"details":Ft("toggle",c);break;case"input":yt(c,p),Ft("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Ft("invalid",c);break;case"textarea":ne(c,p),Ft("invalid",c)}mt(a,p),f=null;for(var w in p)if(p.hasOwnProperty(w)){var F=p[w];w==="children"?typeof F=="string"?c.textContent!==F&&(p.suppressHydrationWarning!==!0&&fo(c.textContent,F,t),f=["children",F]):typeof F=="number"&&c.textContent!==""+F&&(p.suppressHydrationWarning!==!0&&fo(c.textContent,F,t),f=["children",""+F]):o.hasOwnProperty(w)&&F!=null&&w==="onScroll"&&Ft("scroll",c)}switch(a){case"input":Ze(c),Ve(c,p,!0);break;case"textarea":Ze(c),Se(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=ho)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{w=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ge(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=w.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=w.createElement(a,{is:c.is}):(t=w.createElement(a),a==="select"&&(w=t,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):t=w.createElementNS(t,a),t[mi]=i,t[da]=c,ap(t,i,!1,!1),i.stateNode=t;e:{switch(w=lt(a,c),a){case"dialog":Ft("cancel",t),Ft("close",t),f=c;break;case"iframe":case"object":case"embed":Ft("load",t),f=c;break;case"video":case"audio":for(f=0;f<la.length;f++)Ft(la[f],t);f=c;break;case"source":Ft("error",t),f=c;break;case"img":case"image":case"link":Ft("error",t),Ft("load",t),f=c;break;case"details":Ft("toggle",t),f=c;break;case"input":yt(t,c),f=z(t,c),Ft("invalid",t);break;case"option":f=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},f=I({},c,{value:void 0}),Ft("invalid",t);break;case"textarea":ne(t,c),f=b(t,c),Ft("invalid",t);break;default:f=c}mt(a,f),F=f;for(p in F)if(F.hasOwnProperty(p)){var V=F[p];p==="style"?rt(t,V):p==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&Fe(t,V)):p==="children"?typeof V=="string"?(a!=="textarea"||V!=="")&&ut(t,V):typeof V=="number"&&ut(t,""+V):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?V!=null&&p==="onScroll"&&Ft("scroll",t):V!=null&&N(t,p,V,w))}switch(a){case"input":Ze(t),Ve(t,c,!1);break;case"textarea":Ze(t),Se(t);break;case"option":c.value!=null&&t.setAttribute("value",""+ue(c.value));break;case"select":t.multiple=!!c.multiple,p=c.value,p!=null?U(t,!!c.multiple,p,!1):c.defaultValue!=null&&U(t,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=ho)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return dn(i),null;case 6:if(t&&i.stateNode!=null)lp(t,i,t.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(a=Pr(ga.current),Pr(gi.current),yo(i)){if(c=i.stateNode,a=i.memoizedProps,c[mi]=i,(p=c.nodeValue!==a)&&(t=Un,t!==null))switch(t.tag){case 3:fo(c.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fo(c.nodeValue,a,(t.mode&1)!==0)}p&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[mi]=i,i.stateNode=c}return dn(i),null;case 13:if(kt(zt),c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ot&&Fn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)dh(),ds(),i.flags|=98560,p=!1;else if(p=yo(i),c!==null&&c.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[mi]=i}else ds(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;dn(i),p=!1}else ni!==null&&(lu(ni),ni=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(zt.current&1)!==0?Kt===0&&(Kt=3):du())),i.updateQueue!==null&&(i.flags|=4),dn(i),null);case 4:return ms(),Zc(t,i),t===null&&ca(i.stateNode.containerInfo),dn(i),null;case 10:return Tc(i.type._context),dn(i),null;case 17:return wn(i.type)&&mo(),dn(i),null;case 19:if(kt(zt),p=i.memoizedState,p===null)return dn(i),null;if(c=(i.flags&128)!==0,w=p.rendering,w===null)if(c)Sa(p,!1);else{if(Kt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(w=Ao(t),w!==null){for(i.flags|=128,Sa(p,!1),c=w.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)p=a,t=c,p.flags&=14680066,w=p.alternate,w===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=w.childLanes,p.lanes=w.lanes,p.child=w.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=w.memoizedProps,p.memoizedState=w.memoizedState,p.updateQueue=w.updateQueue,p.type=w.type,t=w.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return It(zt,zt.current&1|2),i.child}t=t.sibling}p.tail!==null&&Ae()>_s&&(i.flags|=128,c=!0,Sa(p,!1),i.lanes=4194304)}else{if(!c)if(t=Ao(w),t!==null){if(i.flags|=128,c=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Sa(p,!0),p.tail===null&&p.tailMode==="hidden"&&!w.alternate&&!Ot)return dn(i),null}else 2*Ae()-p.renderingStartTime>_s&&a!==1073741824&&(i.flags|=128,c=!0,Sa(p,!1),i.lanes=4194304);p.isBackwards?(w.sibling=i.child,i.child=w):(a=p.last,a!==null?a.sibling=w:i.child=w,p.last=w)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Ae(),i.sibling=null,a=zt.current,It(zt,c?a&1|2:a&1),i):(dn(i),null);case 22:case 23:return uu(),c=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(kn&1073741824)!==0&&(dn(i),i.subtreeFlags&6&&(i.flags|=8192)):dn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Q0(t,i){switch(_c(i),i.tag){case 1:return wn(i.type)&&mo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ms(),kt(En),kt(cn),Lc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Pc(i),null;case 13:if(kt(zt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ds()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return kt(zt),null;case 4:return ms(),null;case 10:return Tc(i.type._context),null;case 22:case 23:return uu(),null;case 24:return null;default:return null}}var Uo=!1,fn=!1,J0=typeof WeakSet=="function"?WeakSet:Set,Be=null;function vs(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Vt(t,i,c)}else a.current=null}function Qc(t,i,a){try{a()}catch(c){Vt(t,i,c)}}var cp=!1;function ev(t,i){if(uc=eo,t=Vf(),nc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var w=0,F=-1,V=-1,re=0,Ee=0,Te=t,Me=null;t:for(;;){for(var ke;Te!==a||f!==0&&Te.nodeType!==3||(F=w+f),Te!==p||c!==0&&Te.nodeType!==3||(V=w+c),Te.nodeType===3&&(w+=Te.nodeValue.length),(ke=Te.firstChild)!==null;)Me=Te,Te=ke;for(;;){if(Te===t)break t;if(Me===a&&++re===f&&(F=w),Me===p&&++Ee===c&&(V=w),(ke=Te.nextSibling)!==null)break;Te=Me,Me=Te.parentNode}Te=ke}a=F===-1||V===-1?null:{start:F,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(dc={focusedElem:t,selectionRange:a},eo=!1,Be=i;Be!==null;)if(i=Be,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Be=t;else for(;Be!==null;){i=Be;try{var Ge=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ge!==null){var Xe=Ge.memoizedProps,Gt=Ge.memoizedState,Z=i.stateNode,j=Z.getSnapshotBeforeUpdate(i.elementType===i.type?Xe:ii(i.type,Xe),Gt);Z.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var te=i.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(be){Vt(i,i.return,be)}if(t=i.sibling,t!==null){t.return=i.return,Be=t;break}Be=i.return}return Ge=cp,cp=!1,Ge}function Ma(t,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&t)===t){var p=f.destroy;f.destroy=void 0,p!==void 0&&Qc(i,a,p)}f=f.next}while(f!==c)}}function Fo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Jc(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function up(t){var i=t.alternate;i!==null&&(t.alternate=null,up(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[mi],delete i[da],delete i[mc],delete i[F0],delete i[k0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function dp(t){return t.tag===5||t.tag===3||t.tag===4}function fp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||dp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function eu(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=ho));else if(c!==4&&(t=t.child,t!==null))for(eu(t,i,a),t=t.sibling;t!==null;)eu(t,i,a),t=t.sibling}function tu(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(tu(t,i,a),t=t.sibling;t!==null;)tu(t,i,a),t=t.sibling}var sn=null,ri=!1;function rr(t,i,a){for(a=a.child;a!==null;)hp(t,i,a),a=a.sibling}function hp(t,i,a){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(At,a)}catch{}switch(a.tag){case 5:fn||vs(a,i);case 6:var c=sn,f=ri;sn=null,rr(t,i,a),sn=c,ri=f,sn!==null&&(ri?(t=sn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):sn.removeChild(a.stateNode));break;case 18:sn!==null&&(ri?(t=sn,a=a.stateNode,t.nodeType===8?pc(t.parentNode,a):t.nodeType===1&&pc(t,a),ea(t)):pc(sn,a.stateNode));break;case 4:c=sn,f=ri,sn=a.stateNode.containerInfo,ri=!0,rr(t,i,a),sn=c,ri=f;break;case 0:case 11:case 14:case 15:if(!fn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var p=f,w=p.destroy;p=p.tag,w!==void 0&&((p&2)!==0||(p&4)!==0)&&Qc(a,i,w),f=f.next}while(f!==c)}rr(t,i,a);break;case 1:if(!fn&&(vs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(F){Vt(a,i,F)}rr(t,i,a);break;case 21:rr(t,i,a);break;case 22:a.mode&1?(fn=(c=fn)||a.memoizedState!==null,rr(t,i,a),fn=c):rr(t,i,a);break;default:rr(t,i,a)}}function pp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new J0),i.forEach(function(c){var f=cv.bind(null,t,c);a.has(c)||(a.add(c),c.then(f,f))})}}function si(t,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var p=t,w=i,F=w;e:for(;F!==null;){switch(F.tag){case 5:sn=F.stateNode,ri=!1;break e;case 3:sn=F.stateNode.containerInfo,ri=!0;break e;case 4:sn=F.stateNode.containerInfo,ri=!0;break e}F=F.return}if(sn===null)throw Error(n(160));hp(p,w,f),sn=null,ri=!1;var V=f.alternate;V!==null&&(V.return=null),f.return=null}catch(re){Vt(f,i,re)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)mp(i,t),i=i.sibling}function mp(t,i){var a=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(si(i,t),xi(t),c&4){try{Ma(3,t,t.return),Fo(3,t)}catch(Xe){Vt(t,t.return,Xe)}try{Ma(5,t,t.return)}catch(Xe){Vt(t,t.return,Xe)}}break;case 1:si(i,t),xi(t),c&512&&a!==null&&vs(a,a.return);break;case 5:if(si(i,t),xi(t),c&512&&a!==null&&vs(a,a.return),t.flags&32){var f=t.stateNode;try{ut(f,"")}catch(Xe){Vt(t,t.return,Xe)}}if(c&4&&(f=t.stateNode,f!=null)){var p=t.memoizedProps,w=a!==null?a.memoizedProps:p,F=t.type,V=t.updateQueue;if(t.updateQueue=null,V!==null)try{F==="input"&&p.type==="radio"&&p.name!=null&&Qe(f,p),lt(F,w);var re=lt(F,p);for(w=0;w<V.length;w+=2){var Ee=V[w],Te=V[w+1];Ee==="style"?rt(f,Te):Ee==="dangerouslySetInnerHTML"?Fe(f,Te):Ee==="children"?ut(f,Te):N(f,Ee,Te,re)}switch(F){case"input":et(f,p);break;case"textarea":_e(f,p);break;case"select":var Me=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!p.multiple;var ke=p.value;ke!=null?U(f,!!p.multiple,ke,!1):Me!==!!p.multiple&&(p.defaultValue!=null?U(f,!!p.multiple,p.defaultValue,!0):U(f,!!p.multiple,p.multiple?[]:"",!1))}f[da]=p}catch(Xe){Vt(t,t.return,Xe)}}break;case 6:if(si(i,t),xi(t),c&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,p=t.memoizedProps;try{f.nodeValue=p}catch(Xe){Vt(t,t.return,Xe)}}break;case 3:if(si(i,t),xi(t),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ea(i.containerInfo)}catch(Xe){Vt(t,t.return,Xe)}break;case 4:si(i,t),xi(t);break;case 13:si(i,t),xi(t),f=t.child,f.flags&8192&&(p=f.memoizedState!==null,f.stateNode.isHidden=p,!p||f.alternate!==null&&f.alternate.memoizedState!==null||(ru=Ae())),c&4&&pp(t);break;case 22:if(Ee=a!==null&&a.memoizedState!==null,t.mode&1?(fn=(re=fn)||Ee,si(i,t),fn=re):si(i,t),xi(t),c&8192){if(re=t.memoizedState!==null,(t.stateNode.isHidden=re)&&!Ee&&(t.mode&1)!==0)for(Be=t,Ee=t.child;Ee!==null;){for(Te=Be=Ee;Be!==null;){switch(Me=Be,ke=Me.child,Me.tag){case 0:case 11:case 14:case 15:Ma(4,Me,Me.return);break;case 1:vs(Me,Me.return);var Ge=Me.stateNode;if(typeof Ge.componentWillUnmount=="function"){c=Me,a=Me.return;try{i=c,Ge.props=i.memoizedProps,Ge.state=i.memoizedState,Ge.componentWillUnmount()}catch(Xe){Vt(c,a,Xe)}}break;case 5:vs(Me,Me.return);break;case 22:if(Me.memoizedState!==null){xp(Te);continue}}ke!==null?(ke.return=Me,Be=ke):xp(Te)}Ee=Ee.sibling}e:for(Ee=null,Te=t;;){if(Te.tag===5){if(Ee===null){Ee=Te;try{f=Te.stateNode,re?(p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(F=Te.stateNode,V=Te.memoizedProps.style,w=V!=null&&V.hasOwnProperty("display")?V.display:null,F.style.display=tt("display",w))}catch(Xe){Vt(t,t.return,Xe)}}}else if(Te.tag===6){if(Ee===null)try{Te.stateNode.nodeValue=re?"":Te.memoizedProps}catch(Xe){Vt(t,t.return,Xe)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===t)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===t)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===t)break e;Ee===Te&&(Ee=null),Te=Te.return}Ee===Te&&(Ee=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:si(i,t),xi(t),c&4&&pp(t);break;case 21:break;default:si(i,t),xi(t)}}function xi(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(dp(a)){var c=a;break e}a=a.return}throw Error(n(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(ut(f,""),c.flags&=-33);var p=fp(t);tu(t,p,f);break;case 3:case 4:var w=c.stateNode.containerInfo,F=fp(t);eu(t,F,w);break;default:throw Error(n(161))}}catch(V){Vt(t,t.return,V)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function tv(t,i,a){Be=t,gp(t)}function gp(t,i,a){for(var c=(t.mode&1)!==0;Be!==null;){var f=Be,p=f.child;if(f.tag===22&&c){var w=f.memoizedState!==null||Uo;if(!w){var F=f.alternate,V=F!==null&&F.memoizedState!==null||fn;F=Uo;var re=fn;if(Uo=w,(fn=V)&&!re)for(Be=f;Be!==null;)w=Be,V=w.child,w.tag===22&&w.memoizedState!==null?_p(f):V!==null?(V.return=w,Be=V):_p(f);for(;p!==null;)Be=p,gp(p),p=p.sibling;Be=f,Uo=F,fn=re}vp(t)}else(f.subtreeFlags&8772)!==0&&p!==null?(p.return=f,Be=p):vp(t)}}function vp(t){for(;Be!==null;){var i=Be;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:fn||Fo(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!fn)if(a===null)c.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:ii(i.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&xh(i,p,c);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}xh(i,w,a)}break;case 5:var F=i.stateNode;if(a===null&&i.flags&4){a=F;var V=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&a.focus();break;case"img":V.src&&(a.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var re=i.alternate;if(re!==null){var Ee=re.memoizedState;if(Ee!==null){var Te=Ee.dehydrated;Te!==null&&ea(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}fn||i.flags&512&&Jc(i)}catch(Me){Vt(i,i.return,Me)}}if(i===t){Be=null;break}if(a=i.sibling,a!==null){a.return=i.return,Be=a;break}Be=i.return}}function xp(t){for(;Be!==null;){var i=Be;if(i===t){Be=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Be=a;break}Be=i.return}}function _p(t){for(;Be!==null;){var i=Be;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Fo(4,i)}catch(V){Vt(i,a,V)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(V){Vt(i,f,V)}}var p=i.return;try{Jc(i)}catch(V){Vt(i,p,V)}break;case 5:var w=i.return;try{Jc(i)}catch(V){Vt(i,w,V)}}}catch(V){Vt(i,i.return,V)}if(i===t){Be=null;break}var F=i.sibling;if(F!==null){F.return=i.return,Be=F;break}Be=i.return}}var nv=Math.ceil,ko=R.ReactCurrentDispatcher,nu=R.ReactCurrentOwner,qn=R.ReactCurrentBatchConfig,Mt=0,en=null,jt=null,an=0,kn=0,xs=Ji(0),Kt=0,Ea=null,Lr=0,Oo=0,iu=0,wa=null,An=null,ru=0,_s=1/0,Ni=null,zo=!1,su=null,sr=null,Bo=!1,ar=null,Vo=0,Ta=0,au=null,Ho=-1,Go=0;function xn(){return(Mt&6)!==0?Ae():Ho!==-1?Ho:Ho=Ae()}function or(t){return(t.mode&1)===0?1:(Mt&2)!==0&&an!==0?an&-an:z0.transition!==null?(Go===0&&(Go=gn()),Go):(t=Nt,t!==0||(t=window.event,t=t===void 0?16:Sf(t.type)),t)}function ai(t,i,a,c){if(50<Ta)throw Ta=0,au=null,Error(n(185));Mn(t,a,c),((Mt&2)===0||t!==en)&&(t===en&&((Mt&2)===0&&(Oo|=a),Kt===4&&lr(t,an)),bn(t,c),a===1&&Mt===0&&(i.mode&1)===0&&(_s=Ae()+500,vo&&tr()))}function bn(t,i){var a=t.callbackNode;Vn(t,i);var c=pi(t,t===en?an:0);if(c===0)a!==null&&oe(a),t.callbackNode=null,t.callbackPriority=0;else if(i=c&-c,t.callbackPriority!==i){if(a!=null&&oe(a),i===1)t.tag===0?O0(Sp.bind(null,t)):ah(Sp.bind(null,t)),I0(function(){(Mt&6)===0&&tr()}),a=null;else{switch(hf(c)){case 1:a=je;break;case 4:a=st;break;case 16:a=ot;break;case 536870912:a=_t;break;default:a=ot}a=Rp(a,yp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function yp(t,i){if(Ho=-1,Go=0,(Mt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(ys()&&t.callbackNode!==a)return null;var c=pi(t,t===en?an:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||i)i=Wo(t,c);else{i=c;var f=Mt;Mt|=2;var p=Ep();(en!==t||an!==i)&&(Ni=null,_s=Ae()+500,Ir(t,i));do try{sv();break}catch(F){Mp(t,F)}while(!0);wc(),ko.current=p,Mt=f,jt!==null?i=0:(en=null,an=0,i=Kt)}if(i!==0){if(i===2&&(f=Ei(t),f!==0&&(c=f,i=ou(t,f))),i===1)throw a=Ea,Ir(t,0),lr(t,c),bn(t,Ae()),a;if(i===6)lr(t,c);else{if(f=t.current.alternate,(c&30)===0&&!iv(f)&&(i=Wo(t,c),i===2&&(p=Ei(t),p!==0&&(c=p,i=ou(t,p))),i===1))throw a=Ea,Ir(t,0),lr(t,c),bn(t,Ae()),a;switch(t.finishedWork=f,t.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:Ur(t,An,Ni);break;case 3:if(lr(t,c),(c&130023424)===c&&(i=ru+500-Ae(),10<i)){if(pi(t,0)!==0)break;if(f=t.suspendedLanes,(f&c)!==c){xn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=hc(Ur.bind(null,t,An,Ni),i);break}Ur(t,An,Ni);break;case 4:if(lr(t,c),(c&4194240)===c)break;for(i=t.eventTimes,f=-1;0<c;){var w=31-dt(c);p=1<<w,w=i[w],w>f&&(f=w),c&=~p}if(c=f,c=Ae()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*nv(c/1960))-c,10<c){t.timeoutHandle=hc(Ur.bind(null,t,An,Ni),c);break}Ur(t,An,Ni);break;case 5:Ur(t,An,Ni);break;default:throw Error(n(329))}}}return bn(t,Ae()),t.callbackNode===a?yp.bind(null,t):null}function ou(t,i){var a=wa;return t.current.memoizedState.isDehydrated&&(Ir(t,i).flags|=256),t=Wo(t,i),t!==2&&(i=An,An=a,i!==null&&lu(i)),t}function lu(t){An===null?An=t:An.push.apply(An,t)}function iv(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],p=f.getSnapshot;f=f.value;try{if(!ti(p(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function lr(t,i){for(i&=~iu,i&=~Oo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-dt(i),c=1<<a;t[a]=-1,i&=~c}}function Sp(t){if((Mt&6)!==0)throw Error(n(327));ys();var i=pi(t,0);if((i&1)===0)return bn(t,Ae()),null;var a=Wo(t,i);if(t.tag!==0&&a===2){var c=Ei(t);c!==0&&(i=c,a=ou(t,c))}if(a===1)throw a=Ea,Ir(t,0),lr(t,i),bn(t,Ae()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Ur(t,An,Ni),bn(t,Ae()),null}function cu(t,i){var a=Mt;Mt|=1;try{return t(i)}finally{Mt=a,Mt===0&&(_s=Ae()+500,vo&&tr())}}function Dr(t){ar!==null&&ar.tag===0&&(Mt&6)===0&&ys();var i=Mt;Mt|=1;var a=qn.transition,c=Nt;try{if(qn.transition=null,Nt=1,t)return t()}finally{Nt=c,qn.transition=a,Mt=i,(Mt&6)===0&&tr()}}function uu(){kn=xs.current,kt(xs)}function Ir(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,D0(a)),jt!==null)for(a=jt.return;a!==null;){var c=a;switch(_c(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&mo();break;case 3:ms(),kt(En),kt(cn),Lc();break;case 5:Pc(c);break;case 4:ms();break;case 13:kt(zt);break;case 19:kt(zt);break;case 10:Tc(c.type._context);break;case 22:case 23:uu()}a=a.return}if(en=t,jt=t=cr(t.current,null),an=kn=i,Kt=0,Ea=null,iu=Oo=Lr=0,An=wa=null,Rr!==null){for(i=0;i<Rr.length;i++)if(a=Rr[i],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,p=a.pending;if(p!==null){var w=p.next;p.next=f,c.next=w}a.pending=c}Rr=null}return t}function Mp(t,i){do{var a=jt;try{if(wc(),bo.current=No,Co){for(var c=Bt.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}Co=!1}if(Nr=0,Jt=$t=Bt=null,va=!1,xa=0,nu.current=null,a===null||a.return===null){Kt=1,Ea=i,jt=null;break}e:{var p=t,w=a.return,F=a,V=i;if(i=an,F.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var re=V,Ee=F,Te=Ee.tag;if((Ee.mode&1)===0&&(Te===0||Te===11||Te===15)){var Me=Ee.alternate;Me?(Ee.updateQueue=Me.updateQueue,Ee.memoizedState=Me.memoizedState,Ee.lanes=Me.lanes):(Ee.updateQueue=null,Ee.memoizedState=null)}var ke=qh(w);if(ke!==null){ke.flags&=-257,Yh(ke,w,F,p,i),ke.mode&1&&Xh(p,re,i),i=ke,V=re;var Ge=i.updateQueue;if(Ge===null){var Xe=new Set;Xe.add(V),i.updateQueue=Xe}else Ge.add(V);break e}else{if((i&1)===0){Xh(p,re,i),du();break e}V=Error(n(426))}}else if(Ot&&F.mode&1){var Gt=qh(w);if(Gt!==null){(Gt.flags&65536)===0&&(Gt.flags|=256),Yh(Gt,w,F,p,i),Mc(gs(V,F));break e}}p=V=gs(V,F),Kt!==4&&(Kt=2),wa===null?wa=[p]:wa.push(p),p=w;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var Z=Wh(p,V,i);vh(p,Z);break e;case 1:F=V;var j=p.type,te=p.stateNode;if((p.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(sr===null||!sr.has(te)))){p.flags|=65536,i&=-i,p.lanes|=i;var be=jh(p,F,i);vh(p,be);break e}}p=p.return}while(p!==null)}Tp(a)}catch($e){i=$e,jt===a&&a!==null&&(jt=a=a.return);continue}break}while(!0)}function Ep(){var t=ko.current;return ko.current=No,t===null?No:t}function du(){(Kt===0||Kt===3||Kt===2)&&(Kt=4),en===null||(Lr&268435455)===0&&(Oo&268435455)===0||lr(en,an)}function Wo(t,i){var a=Mt;Mt|=2;var c=Ep();(en!==t||an!==i)&&(Ni=null,Ir(t,i));do try{rv();break}catch(f){Mp(t,f)}while(!0);if(wc(),Mt=a,ko.current=c,jt!==null)throw Error(n(261));return en=null,an=0,Kt}function rv(){for(;jt!==null;)wp(jt)}function sv(){for(;jt!==null&&!$();)wp(jt)}function wp(t){var i=Cp(t.alternate,t,kn);t.memoizedProps=t.pendingProps,i===null?Tp(t):jt=i,nu.current=null}function Tp(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=Z0(a,i,kn),a!==null){jt=a;return}}else{if(a=Q0(a,i),a!==null){a.flags&=32767,jt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Kt=6,jt=null;return}}if(i=i.sibling,i!==null){jt=i;return}jt=i=t}while(i!==null);Kt===0&&(Kt=5)}function Ur(t,i,a){var c=Nt,f=qn.transition;try{qn.transition=null,Nt=1,av(t,i,a,c)}finally{qn.transition=f,Nt=c}return null}function av(t,i,a,c){do ys();while(ar!==null);if((Mt&6)!==0)throw Error(n(327));a=t.finishedWork;var f=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=a.lanes|a.childLanes;if(Za(t,p),t===en&&(jt=en=null,an=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Bo||(Bo=!0,Rp(ot,function(){return ys(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=qn.transition,qn.transition=null;var w=Nt;Nt=1;var F=Mt;Mt|=4,nu.current=null,ev(t,a),mp(a,t),A0(dc),eo=!!uc,dc=uc=null,t.current=a,tv(a),Ce(),Mt=F,Nt=w,qn.transition=p}else t.current=a;if(Bo&&(Bo=!1,ar=t,Vo=f),p=t.pendingLanes,p===0&&(sr=null),on(a.stateNode),bn(t,Ae()),i!==null)for(c=t.onRecoverableError,a=0;a<i.length;a++)f=i[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(zo)throw zo=!1,t=su,su=null,t;return(Vo&1)!==0&&t.tag!==0&&ys(),p=t.pendingLanes,(p&1)!==0?t===au?Ta++:(Ta=0,au=t):Ta=0,tr(),null}function ys(){if(ar!==null){var t=hf(Vo),i=qn.transition,a=Nt;try{if(qn.transition=null,Nt=16>t?16:t,ar===null)var c=!1;else{if(t=ar,ar=null,Vo=0,(Mt&6)!==0)throw Error(n(331));var f=Mt;for(Mt|=4,Be=t.current;Be!==null;){var p=Be,w=p.child;if((Be.flags&16)!==0){var F=p.deletions;if(F!==null){for(var V=0;V<F.length;V++){var re=F[V];for(Be=re;Be!==null;){var Ee=Be;switch(Ee.tag){case 0:case 11:case 15:Ma(8,Ee,p)}var Te=Ee.child;if(Te!==null)Te.return=Ee,Be=Te;else for(;Be!==null;){Ee=Be;var Me=Ee.sibling,ke=Ee.return;if(up(Ee),Ee===re){Be=null;break}if(Me!==null){Me.return=ke,Be=Me;break}Be=ke}}}var Ge=p.alternate;if(Ge!==null){var Xe=Ge.child;if(Xe!==null){Ge.child=null;do{var Gt=Xe.sibling;Xe.sibling=null,Xe=Gt}while(Xe!==null)}}Be=p}}if((p.subtreeFlags&2064)!==0&&w!==null)w.return=p,Be=w;else e:for(;Be!==null;){if(p=Be,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ma(9,p,p.return)}var Z=p.sibling;if(Z!==null){Z.return=p.return,Be=Z;break e}Be=p.return}}var j=t.current;for(Be=j;Be!==null;){w=Be;var te=w.child;if((w.subtreeFlags&2064)!==0&&te!==null)te.return=w,Be=te;else e:for(w=j;Be!==null;){if(F=Be,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:Fo(9,F)}}catch($e){Vt(F,F.return,$e)}if(F===w){Be=null;break e}var be=F.sibling;if(be!==null){be.return=F.return,Be=be;break e}Be=F.return}}if(Mt=f,tr(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(At,t)}catch{}c=!0}return c}finally{Nt=a,qn.transition=i}}return!1}function Ap(t,i,a){i=gs(a,i),i=Wh(t,i,1),t=ir(t,i,1),i=xn(),t!==null&&(Mn(t,1,i),bn(t,i))}function Vt(t,i,a){if(t.tag===3)Ap(t,t,a);else for(;i!==null;){if(i.tag===3){Ap(i,t,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(sr===null||!sr.has(c))){t=gs(a,t),t=jh(i,t,1),i=ir(i,t,1),t=xn(),i!==null&&(Mn(i,1,t),bn(i,t));break}}i=i.return}}function ov(t,i,a){var c=t.pingCache;c!==null&&c.delete(i),i=xn(),t.pingedLanes|=t.suspendedLanes&a,en===t&&(an&a)===a&&(Kt===4||Kt===3&&(an&130023424)===an&&500>Ae()-ru?Ir(t,0):iu|=a),bn(t,i)}function bp(t,i){i===0&&((t.mode&1)===0?i=1:(i=ei,ei<<=1,(ei&130023424)===0&&(ei=4194304)));var a=xn();t=Ci(t,i),t!==null&&(Mn(t,i,a),bn(t,a))}function lv(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),bp(t,a)}function cv(t,i){var a=0;switch(t.tag){case 13:var c=t.stateNode,f=t.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),bp(t,a)}var Cp;Cp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||En.current)Tn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return Tn=!1,K0(t,i,a);Tn=(t.flags&131072)!==0}else Tn=!1,Ot&&(i.flags&1048576)!==0&&oh(i,_o,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Io(t,i),t=i.pendingProps;var f=ls(i,cn.current);ps(i,a),f=Uc(null,i,c,t,f,a);var p=Fc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,wn(c)?(p=!0,go(i)):p=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Cc(i),f.updater=Lo,i.stateNode=f,f._reactInternals=i,Hc(i,c,t,a),i=Xc(null,i,c,!0,p,a)):(i.tag=0,Ot&&p&&xc(i),vn(null,i,f,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Io(t,i),t=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=dv(c),t=ii(c,t),f){case 0:i=jc(null,i,c,t,a);break e;case 1:i=ep(null,i,c,t,a);break e;case 11:i=$h(null,i,c,t,a);break e;case 14:i=Kh(null,i,c,ii(c.type,t),a);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ii(c,f),jc(t,i,c,f,a);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ii(c,f),ep(t,i,c,f,a);case 3:e:{if(tp(i),t===null)throw Error(n(387));c=i.pendingProps,p=i.memoizedState,f=p.element,gh(t,i),To(i,c,null,a);var w=i.memoizedState;if(c=w.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){f=gs(Error(n(423)),i),i=np(t,i,c,a,f);break e}else if(c!==f){f=gs(Error(n(424)),i),i=np(t,i,c,a,f);break e}else for(Fn=Qi(i.stateNode.containerInfo.firstChild),Un=i,Ot=!0,ni=null,a=ph(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ds(),c===f){i=Pi(t,i,a);break e}vn(t,i,c,a)}i=i.child}return i;case 5:return _h(i),t===null&&Sc(i),c=i.type,f=i.pendingProps,p=t!==null?t.memoizedProps:null,w=f.children,fc(c,f)?w=null:p!==null&&fc(c,p)&&(i.flags|=32),Jh(t,i),vn(t,i,w,a),i.child;case 6:return t===null&&Sc(i),null;case 13:return ip(t,i,a);case 4:return Rc(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=fs(i,null,c,a):vn(t,i,c,a),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ii(c,f),$h(t,i,c,f,a);case 7:return vn(t,i,i.pendingProps,a),i.child;case 8:return vn(t,i,i.pendingProps.children,a),i.child;case 12:return vn(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,p=i.memoizedProps,w=f.value,It(Mo,c._currentValue),c._currentValue=w,p!==null)if(ti(p.value,w)){if(p.children===f.children&&!En.current){i=Pi(t,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var F=p.dependencies;if(F!==null){w=p.child;for(var V=F.firstContext;V!==null;){if(V.context===c){if(p.tag===1){V=Ri(-1,a&-a),V.tag=2;var re=p.updateQueue;if(re!==null){re=re.shared;var Ee=re.pending;Ee===null?V.next=V:(V.next=Ee.next,Ee.next=V),re.pending=V}}p.lanes|=a,V=p.alternate,V!==null&&(V.lanes|=a),Ac(p.return,a,i),F.lanes|=a;break}V=V.next}}else if(p.tag===10)w=p.type===i.type?null:p.child;else if(p.tag===18){if(w=p.return,w===null)throw Error(n(341));w.lanes|=a,F=w.alternate,F!==null&&(F.lanes|=a),Ac(w,a,i),w=p.sibling}else w=p.child;if(w!==null)w.return=p;else for(w=p;w!==null;){if(w===i){w=null;break}if(p=w.sibling,p!==null){p.return=w.return,w=p;break}w=w.return}p=w}vn(t,i,f.children,a),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,ps(i,a),f=jn(f),c=c(f),i.flags|=1,vn(t,i,c,a),i.child;case 14:return c=i.type,f=ii(c,i.pendingProps),f=ii(c.type,f),Kh(t,i,c,f,a);case 15:return Zh(t,i,i.type,i.pendingProps,a);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ii(c,f),Io(t,i),i.tag=1,wn(c)?(t=!0,go(i)):t=!1,ps(i,a),Hh(i,c,f),Hc(i,c,f,a),Xc(null,i,c,!0,t,a);case 19:return sp(t,i,a);case 22:return Qh(t,i,a)}throw Error(n(156,i.tag))};function Rp(t,i){return se(t,i)}function uv(t,i,a,c){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,i,a,c){return new uv(t,i,a,c)}function fu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function dv(t){if(typeof t=="function")return fu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===le)return 11;if(t===me)return 14}return 2}function cr(t,i){var a=t.alternate;return a===null?(a=Yn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function jo(t,i,a,c,f,p){var w=2;if(c=t,typeof t=="function")fu(t)&&(w=1);else if(typeof t=="string")w=5;else e:switch(t){case k:return Fr(a.children,f,p,i);case W:w=8,f|=8;break;case L:return t=Yn(12,a,i,f|2),t.elementType=L,t.lanes=p,t;case ie:return t=Yn(13,a,i,f),t.elementType=ie,t.lanes=p,t;case pe:return t=Yn(19,a,i,f),t.elementType=pe,t.lanes=p,t;case he:return Xo(a,f,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:w=10;break e;case B:w=9;break e;case le:w=11;break e;case me:w=14;break e;case de:w=16,c=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Yn(w,a,i,f),i.elementType=t,i.type=c,i.lanes=p,i}function Fr(t,i,a,c){return t=Yn(7,t,c,i),t.lanes=a,t}function Xo(t,i,a,c){return t=Yn(22,t,c,i),t.elementType=he,t.lanes=a,t.stateNode={isHidden:!1},t}function hu(t,i,a){return t=Yn(6,t,null,i),t.lanes=a,t}function pu(t,i,a){return i=Yn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function fv(t,i,a,c,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hn(0),this.expirationTimes=Hn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hn(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function mu(t,i,a,c,f,p,w,F,V){return t=new fv(t,i,a,F,V),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Yn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cc(p),t}function hv(t,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:c==null?null:""+c,children:t,containerInfo:i,implementation:a}}function Pp(t){if(!t)return er;t=t._reactInternals;e:{if(hi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(wn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(wn(a))return rh(t,a,i)}return i}function Np(t,i,a,c,f,p,w,F,V){return t=mu(a,c,!0,t,f,p,w,F,V),t.context=Pp(null),a=t.current,c=xn(),f=or(a),p=Ri(c,f),p.callback=i??null,ir(a,p,f),t.current.lanes=f,Mn(t,f,c),bn(t,c),t}function qo(t,i,a,c){var f=i.current,p=xn(),w=or(f);return a=Pp(a),i.context===null?i.context=a:i.pendingContext=a,i=Ri(p,w),i.payload={element:t},c=c===void 0?null:c,c!==null&&(i.callback=c),t=ir(f,i,w),t!==null&&(ai(t,f,w,p),wo(t,f,w)),w}function Yo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function gu(t,i){Lp(t,i),(t=t.alternate)&&Lp(t,i)}function pv(){return null}var Dp=typeof reportError=="function"?reportError:function(t){console.error(t)};function vu(t){this._internalRoot=t}$o.prototype.render=vu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));qo(t,i,null,null)},$o.prototype.unmount=vu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Dr(function(){qo(null,t,null,null)}),i[wi]=null}};function $o(t){this._internalRoot=t}$o.prototype.unstable_scheduleHydration=function(t){if(t){var i=gf();t={blockedOn:null,target:t,priority:i};for(var a=0;a<$i.length&&i!==0&&i<$i[a].priority;a++);$i.splice(a,0,t),a===0&&_f(t)}};function xu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ko(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ip(){}function mv(t,i,a,c,f){if(f){if(typeof c=="function"){var p=c;c=function(){var re=Yo(w);p.call(re)}}var w=Np(i,c,t,0,null,!1,!1,"",Ip);return t._reactRootContainer=w,t[wi]=w.current,ca(t.nodeType===8?t.parentNode:t),Dr(),w}for(;f=t.lastChild;)t.removeChild(f);if(typeof c=="function"){var F=c;c=function(){var re=Yo(V);F.call(re)}}var V=mu(t,0,!1,null,null,!1,!1,"",Ip);return t._reactRootContainer=V,t[wi]=V.current,ca(t.nodeType===8?t.parentNode:t),Dr(function(){qo(i,V,a,c)}),V}function Zo(t,i,a,c,f){var p=a._reactRootContainer;if(p){var w=p;if(typeof f=="function"){var F=f;f=function(){var V=Yo(w);F.call(V)}}qo(i,w,t,f)}else w=mv(a,i,t,f,c);return Yo(w)}pf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=Yt(i.pendingLanes);a!==0&&(Hl(i,a|1),bn(i,Ae()),(Mt&6)===0&&(_s=Ae()+500,tr()))}break;case 13:Dr(function(){var c=Ci(t,1);if(c!==null){var f=xn();ai(c,t,1,f)}}),gu(t,1)}},Gl=function(t){if(t.tag===13){var i=Ci(t,134217728);if(i!==null){var a=xn();ai(i,t,134217728,a)}gu(t,134217728)}},mf=function(t){if(t.tag===13){var i=or(t),a=Ci(t,i);if(a!==null){var c=xn();ai(a,t,i,c)}gu(t,i)}},gf=function(){return Nt},vf=function(t,i){var a=Nt;try{return Nt=t,i()}finally{Nt=a}},Le=function(t,i,a){switch(i){case"input":if(et(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==t&&c.form===t.form){var f=po(c);if(!f)throw Error(n(90));Pe(c),et(c,f)}}}break;case"textarea":_e(t,a);break;case"select":i=a.value,i!=null&&U(t,!!a.multiple,i,!1)}},Ut=cu,qt=Dr;var gv={usingClientEntryPoint:!1,Events:[fa,as,po,Ie,ct,cu]},Aa={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vv={bundleType:Aa.bundleType,version:Aa.version,rendererPackageName:Aa.rendererPackageName,rendererConfig:Aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=P(t),t===null?null:t.stateNode},findFiberByHostInstance:Aa.findFiberByHostInstance||pv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qo.isDisabled&&Qo.supportsFiber)try{At=Qo.inject(vv),xt=Qo}catch{}}return Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gv,Cn.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xu(i))throw Error(n(200));return hv(t,i,null,a)},Cn.createRoot=function(t,i){if(!xu(t))throw Error(n(299));var a=!1,c="",f=Dp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=mu(t,1,!1,null,null,a,!1,c,f),t[wi]=i.current,ca(t.nodeType===8?t.parentNode:t),new vu(i)},Cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=P(i),t=t===null?null:t.stateNode,t},Cn.flushSync=function(t){return Dr(t)},Cn.hydrate=function(t,i,a){if(!Ko(i))throw Error(n(200));return Zo(null,t,i,!0,a)},Cn.hydrateRoot=function(t,i,a){if(!xu(t))throw Error(n(405));var c=a!=null&&a.hydratedSources||null,f=!1,p="",w=Dp;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=Np(i,null,t,1,a??null,f,!1,p,w),t[wi]=i.current,ca(t),c)for(t=0;t<c.length;t++)a=c[t],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new $o(i)},Cn.render=function(t,i,a){if(!Ko(i))throw Error(n(200));return Zo(null,t,i,!1,a)},Cn.unmountComponentAtNode=function(t){if(!Ko(t))throw Error(n(40));return t._reactRootContainer?(Dr(function(){Zo(null,null,t,!1,function(){t._reactRootContainer=null,t[wi]=null})}),!0):!1},Cn.unstable_batchedUpdates=cu,Cn.unstable_renderSubtreeIntoContainer=function(t,i,a,c){if(!Ko(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Zo(t,i,a,!1,c)},Cn.version="18.3.1-next-f1338f8080-20240426",Cn}var Hp;function Av(){if(Hp)return Su.exports;Hp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Su.exports=Tv(),Su.exports}var Gp;function bv(){if(Gp)return Jo;Gp=1;var s=Av();return Jo.createRoot=s.createRoot,Jo.hydrateRoot=s.hydrateRoot,Jo}var Cv=bv();const Rv=eg(Cv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=s=>{const e=Nv(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var wu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},Dv=vt.createContext({}),Iv=()=>vt.useContext(Dv),Uv=vt.forwardRef(({color:s,size:e,strokeWidth:n,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...d},h)=>{const{size:m=24,strokeWidth:v=2,absoluteStrokeWidth:x=!1,color:_="currentColor",className:S=""}=Iv()??{},T=r??x?Number(n??v)*24/Number(e??m):n??v;return vt.createElement("svg",{ref:h,...wu,width:e??m??wu.width,height:e??m??wu.height,stroke:s??_,strokeWidth:T,className:tg("lucide",S,o),...!l&&!Lv(d)&&{"aria-hidden":"true"},...d},[...u.map(([A,y])=>vt.createElement(A,y)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=(s,e)=>{const n=vt.forwardRef(({className:r,...o},l)=>vt.createElement(Uv,{ref:l,iconNode:e,className:tg(`lucide-${Pv(Wp(s))}`,`lucide-${s}`,r),...o}));return n.displayName=Wp(s),n};/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],kv=Pt("activity",Fv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],ng=Pt("arrow-right",Ov);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Bv=Pt("arrow-up-right",zv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],Hv=Pt("arrow-up",Vv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],Oa=Pt("bot",Gv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],jp=Pt("check",Wv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Xv=Pt("chevron-right",jv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],$d=Pt("circle-check",qv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],$v=Pt("code",Yv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],Kd=Pt("code-xml",Kv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Qv=Pt("copy",Zv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],yr=Pt("cpu",Jv);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Xp=Pt("database",ex);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],ig=Pt("external-link",tx);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]],ix=Pt("file-down",nx);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],sx=Pt("graduation-cap",rx);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],rg=Pt("layers",ax);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],lx=Pt("mail",ox);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],ux=Pt("menu",cx);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],qp=Pt("message-square",dx);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],id=Pt("play",fx);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],rd=Pt("refresh-cw",hx);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],za=Pt("send",px);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Zd=Pt("sparkles",mx);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],sg=Pt("terminal",gx);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],xx=Pt("user",vx);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],ag=Pt("video",_x);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]],Qd=Pt("workflow",yx);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],og=Pt("x",Sx);/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]],Yp=Pt("zap",Mx);function Ex(){const[s,e]=vt.useState(!1),[n,r]=vt.useState(!1);vt.useEffect(()=>{const u=()=>{e(window.scrollY>20)};return window.addEventListener("scroll",u,{passive:!0}),()=>window.removeEventListener("scroll",u)},[]);const o=[{label:"Overview",href:"#hero"},{label:"Workflows (n8n)",href:"#workflow-sim"},{label:"Projects",href:"#projects"},{label:"AI Twin",href:"#ai-twin"},{label:"Skills",href:"#skills"},{label:"Journey",href:"#experience"},{label:"Contact",href:"#contact"}],l=(u,d)=>{u.preventDefault(),r(!1);const h=document.querySelector(d);if(h){const x=h.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:x,behavior:"smooth"})}};return M.jsxs("header",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${s?"py-3 bg-[#05070E]/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40":"py-5 bg-transparent"}`,children:[M.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between",children:[M.jsxs("a",{href:"#hero",onClick:u=>l(u,"#hero"),className:"group flex items-center gap-3 text-left",children:[M.jsxs("div",{className:"relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-purple-600 to-pink-500 p-[1.5px] transition-transform duration-300 group-hover:scale-105",children:[M.jsx("div",{className:"w-full h-full bg-[#070B14] rounded-[10px] flex items-center justify-center",children:M.jsx(yr,{className:"w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300"})}),M.jsx("span",{className:"absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping-slow"}),M.jsx("span",{className:"absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full border-2 border-[#05070E]"})]}),M.jsxs("div",{children:[M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx("span",{className:"font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors",children:"Abdullah"}),M.jsx("span",{className:"text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30",children:"AI / SWE"})]}),M.jsx("p",{className:"text-[11px] text-slate-400 font-mono hidden sm:block",children:"Agentic Systems & SaaS"})]})]}),M.jsx("nav",{className:"hidden lg:flex items-center gap-1 bg-white/[0.04] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md",children:o.map(u=>M.jsx("a",{href:u.href,onClick:d=>l(d,u.href),className:"px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:bg-white/[0.06] rounded-full transition-all duration-200",children:u.label},u.href))}),M.jsxs("div",{className:"hidden md:flex items-center gap-4",children:[M.jsxs("div",{className:"hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-[11px] font-mono text-emerald-400",children:[M.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"}),M.jsx("span",{children:"Available for Opportunities"})]}),M.jsxs("a",{href:"#contact",onClick:u=>l(u,"#contact"),className:"group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 hover:opacity-95 shadow-md shadow-cyan-500/20 transition-all duration-200",children:[M.jsx("span",{children:"Let's Talk"}),M.jsx(ng,{className:"w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"})]})]}),M.jsx("button",{onClick:()=>r(!n),className:"lg:hidden p-2 rounded-lg bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white","aria-label":"Toggle navigation menu",children:n?M.jsx(og,{className:"w-6 h-6"}):M.jsx(ux,{className:"w-6 h-6"})})]}),n&&M.jsx("div",{className:"lg:hidden px-4 pt-3 pb-6 bg-[#070B14]/95 backdrop-blur-2xl border-b border-white/10 mt-3 animate-in fade-in slide-in-from-top-4 duration-200",children:M.jsxs("div",{className:"flex flex-col gap-2",children:[o.map(u=>M.jsx("a",{href:u.href,onClick:d=>l(d,u.href),className:"px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/[0.07] hover:text-cyan-400 transition-colors",children:u.label},u.href)),M.jsxs("div",{className:"pt-3 mt-2 border-t border-white/10 flex flex-col gap-3",children:[M.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-400",children:[M.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),M.jsx("span",{children:"Available for AI & SWE Roles"})]}),M.jsx("a",{href:"#contact",onClick:u=>l(u,"#contact"),className:"w-full text-center py-2.5 rounded-xl font-medium text-sm text-black bg-cyan-400 hover:bg-cyan-300 font-semibold transition-colors",children:"Get In Touch"})]})]})})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jd="170",wx=0,$p=1,Tx=2,lg=1,Ax=2,ki=3,Sr=0,Nn=1,Oi=2,xr=0,ks=1,sd=2,Kp=3,Zp=4,bx=5,jr=100,Cx=101,Rx=102,Px=103,Nx=104,Lx=200,Dx=201,Ix=202,Ux=203,ad=204,od=205,Fx=206,kx=207,Ox=208,zx=209,Bx=210,Vx=211,Hx=212,Gx=213,Wx=214,ld=0,cd=1,ud=2,Bs=3,dd=4,fd=5,hd=6,pd=7,cg=0,jx=1,Xx=2,_r=0,qx=1,Yx=2,$x=3,Kx=4,Zx=5,Qx=6,Jx=7,ug=300,Vs=301,Hs=302,md=303,gd=304,kl=306,vd=1e3,qr=1001,xd=1002,fi=1003,e_=1004,el=1005,yi=1006,Tu=1007,Yr=1008,Hi=1009,dg=1010,fg=1011,Ba=1012,ef=1013,$r=1014,zi=1015,Va=1016,tf=1017,nf=1018,Gs=1020,hg=35902,pg=1021,mg=1022,di=1023,gg=1024,vg=1025,Os=1026,Ws=1027,xg=1028,rf=1029,_g=1030,sf=1031,af=1033,Al=33776,bl=33777,Cl=33778,Rl=33779,_d=35840,yd=35841,Sd=35842,Md=35843,Ed=36196,wd=37492,Td=37496,Ad=37808,bd=37809,Cd=37810,Rd=37811,Pd=37812,Nd=37813,Ld=37814,Dd=37815,Id=37816,Ud=37817,Fd=37818,kd=37819,Od=37820,zd=37821,Pl=36492,Bd=36494,Vd=36495,yg=36283,Hd=36284,Gd=36285,Wd=36286,t_=3200,n_=3201,i_=0,r_=1,vr="",Kn="srgb",Xs="srgb-linear",Ol="linear",Lt="srgb",Ss=7680,Qp=519,s_=512,a_=513,o_=514,Sg=515,l_=516,c_=517,u_=518,d_=519,Jp=35044,em="300 es",Bi=2e3,Ll=2001;class qs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Au=Math.PI/180,jd=180/Math.PI;function Ha(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(hn[s&255]+hn[s>>8&255]+hn[s>>16&255]+hn[s>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[n&63|128]+hn[n>>8&255]+"-"+hn[n>>16&255]+hn[n>>24&255]+hn[r&255]+hn[r>>8&255]+hn[r>>16&255]+hn[r>>24&255]).toLowerCase()}function Pn(s,e,n){return Math.max(e,Math.min(n,s))}function f_(s,e){return(s%e+e)%e}function bu(s,e,n){return(1-n)*s+n*e}function Ca(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Rn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Rt{constructor(e=0,n=0){Rt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Pn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ft{constructor(e,n,r,o,l,u,d,h,m){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,u,d,h,m)}set(e,n,r,o,l,u,d,h,m){const v=this.elements;return v[0]=e,v[1]=o,v[2]=d,v[3]=n,v[4]=l,v[5]=h,v[6]=r,v[7]=u,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,u=r[0],d=r[3],h=r[6],m=r[1],v=r[4],x=r[7],_=r[2],S=r[5],T=r[8],A=o[0],y=o[3],g=o[6],D=o[1],N=o[4],R=o[7],K=o[2],O=o[5],k=o[8];return l[0]=u*A+d*D+h*K,l[3]=u*y+d*N+h*O,l[6]=u*g+d*R+h*k,l[1]=m*A+v*D+x*K,l[4]=m*y+v*N+x*O,l[7]=m*g+v*R+x*k,l[2]=_*A+S*D+T*K,l[5]=_*y+S*N+T*O,l[8]=_*g+S*R+T*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],m=e[7],v=e[8];return n*u*v-n*d*m-r*l*v+r*d*h+o*l*m-o*u*h}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],m=e[7],v=e[8],x=v*u-d*m,_=d*h-v*l,S=m*l-u*h,T=n*x+r*_+o*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=x*A,e[1]=(o*m-v*r)*A,e[2]=(d*r-o*u)*A,e[3]=_*A,e[4]=(v*n-o*h)*A,e[5]=(o*l-d*n)*A,e[6]=S*A,e[7]=(r*h-m*n)*A,e[8]=(u*n-r*l)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,l,u,d){const h=Math.cos(l),m=Math.sin(l);return this.set(r*h,r*m,-r*(h*u+m*d)+u+e,-o*m,o*h,-o*(-m*u+h*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Cu.makeScale(e,n)),this}rotate(e){return this.premultiply(Cu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Cu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cu=new ft;function Mg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Dl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function h_(){const s=Dl("canvas");return s.style.display="block",s}const tm={};function Ua(s){s in tm||(tm[s]=!0,console.warn(s))}function p_(s,e,n){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}function m_(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function g_(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Et={enabled:!0,workingColorSpace:Xs,spaces:{},convert:function(s,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===Lt&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Lt&&(s.r=zs(s.r),s.g=zs(s.g),s.b=zs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vr?Ol:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,n){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Vi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const nm=[.64,.33,.3,.6,.15,.06],im=[.2126,.7152,.0722],rm=[.3127,.329],sm=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),am=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Et.define({[Xs]:{primaries:nm,whitePoint:rm,transfer:Ol,toXYZ:sm,fromXYZ:am,luminanceCoefficients:im,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:nm,whitePoint:rm,transfer:Lt,toXYZ:sm,fromXYZ:am,luminanceCoefficients:im,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}});let Ms;class v_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ms===void 0&&(Ms=Dl("canvas")),Ms.width=e.width,Ms.height=e.height;const r=Ms.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ms}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Dl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Vi(l[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Vi(n[r]/255)*255):n[r]=Vi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let x_=0;class Eg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:x_++}),this.uuid=Ha(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(Ru(o[u].image)):l.push(Ru(o[u]))}else l=Ru(o);r.url=l}return n||(e.images[this.uuid]=r),r}}function Ru(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?v_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let __=0;class Ln extends qs{constructor(e=Ln.DEFAULT_IMAGE,n=Ln.DEFAULT_MAPPING,r=qr,o=qr,l=yi,u=Yr,d=di,h=Hi,m=Ln.DEFAULT_ANISOTROPY,v=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:__++}),this.uuid=Ha(),this.name="",this.source=new Eg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=h,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ug)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vd:e.x=e.x-Math.floor(e.x);break;case qr:e.x=e.x<0?0:1;break;case xd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vd:e.y=e.y-Math.floor(e.y);break;case qr:e.y=e.y<0?0:1;break;case xd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=ug;Ln.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,n=0,r=0,o=1){Wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,l;const h=e.elements,m=h[0],v=h[4],x=h[8],_=h[1],S=h[5],T=h[9],A=h[2],y=h[6],g=h[10];if(Math.abs(v-_)<.01&&Math.abs(x-A)<.01&&Math.abs(T-y)<.01){if(Math.abs(v+_)<.1&&Math.abs(x+A)<.1&&Math.abs(T+y)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const N=(m+1)/2,R=(S+1)/2,K=(g+1)/2,O=(v+_)/4,k=(x+A)/4,W=(T+y)/4;return N>R&&N>K?N<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(N),o=O/r,l=k/r):R>K?R<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),r=O/o,l=W/o):K<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(K),r=k/l,o=W/l),this.set(r,o,l,n),this}let D=Math.sqrt((y-T)*(y-T)+(x-A)*(x-A)+(_-v)*(_-v));return Math.abs(D)<.001&&(D=1),this.x=(y-T)/D,this.y=(x-A)/D,this.z=(_-v)/D,this.w=Math.acos((m+S+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class y_ extends qs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Wt(0,0,e,n),this.scissorTest=!1,this.viewport=new Wt(0,0,e,n);const o={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Ln(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Eg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kr extends y_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class wg extends Ln{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=fi,this.minFilter=fi,this.wrapR=qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class S_ extends Ln{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=fi,this.minFilter=fi,this.wrapR=qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ga{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,l,u,d){let h=r[o+0],m=r[o+1],v=r[o+2],x=r[o+3];const _=l[u+0],S=l[u+1],T=l[u+2],A=l[u+3];if(d===0){e[n+0]=h,e[n+1]=m,e[n+2]=v,e[n+3]=x;return}if(d===1){e[n+0]=_,e[n+1]=S,e[n+2]=T,e[n+3]=A;return}if(x!==A||h!==_||m!==S||v!==T){let y=1-d;const g=h*_+m*S+v*T+x*A,D=g>=0?1:-1,N=1-g*g;if(N>Number.EPSILON){const K=Math.sqrt(N),O=Math.atan2(K,g*D);y=Math.sin(y*O)/K,d=Math.sin(d*O)/K}const R=d*D;if(h=h*y+_*R,m=m*y+S*R,v=v*y+T*R,x=x*y+A*R,y===1-d){const K=1/Math.sqrt(h*h+m*m+v*v+x*x);h*=K,m*=K,v*=K,x*=K}}e[n]=h,e[n+1]=m,e[n+2]=v,e[n+3]=x}static multiplyQuaternionsFlat(e,n,r,o,l,u){const d=r[o],h=r[o+1],m=r[o+2],v=r[o+3],x=l[u],_=l[u+1],S=l[u+2],T=l[u+3];return e[n]=d*T+v*x+h*S-m*_,e[n+1]=h*T+v*_+m*x-d*S,e[n+2]=m*T+v*S+d*_-h*x,e[n+3]=v*T-d*x-h*_-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,h=Math.sin,m=d(r/2),v=d(o/2),x=d(l/2),_=h(r/2),S=h(o/2),T=h(l/2);switch(u){case"XYZ":this._x=_*v*x+m*S*T,this._y=m*S*x-_*v*T,this._z=m*v*T+_*S*x,this._w=m*v*x-_*S*T;break;case"YXZ":this._x=_*v*x+m*S*T,this._y=m*S*x-_*v*T,this._z=m*v*T-_*S*x,this._w=m*v*x+_*S*T;break;case"ZXY":this._x=_*v*x-m*S*T,this._y=m*S*x+_*v*T,this._z=m*v*T+_*S*x,this._w=m*v*x-_*S*T;break;case"ZYX":this._x=_*v*x-m*S*T,this._y=m*S*x+_*v*T,this._z=m*v*T-_*S*x,this._w=m*v*x+_*S*T;break;case"YZX":this._x=_*v*x+m*S*T,this._y=m*S*x+_*v*T,this._z=m*v*T-_*S*x,this._w=m*v*x-_*S*T;break;case"XZY":this._x=_*v*x-m*S*T,this._y=m*S*x-_*v*T,this._z=m*v*T+_*S*x,this._w=m*v*x+_*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],l=n[8],u=n[1],d=n[5],h=n[9],m=n[2],v=n[6],x=n[10],_=r+d+x;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(v-h)*S,this._y=(l-m)*S,this._z=(u-o)*S}else if(r>d&&r>x){const S=2*Math.sqrt(1+r-d-x);this._w=(v-h)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+m)/S}else if(d>x){const S=2*Math.sqrt(1+d-r-x);this._w=(l-m)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(h+v)/S}else{const S=2*Math.sqrt(1+x-r-d);this._w=(u-o)/S,this._x=(l+m)/S,this._y=(h+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,l=e._z,u=e._w,d=n._x,h=n._y,m=n._z,v=n._w;return this._x=r*v+u*d+o*m-l*h,this._y=o*v+u*h+l*d-r*m,this._z=l*v+u*m+r*h-o*d,this._w=u*v-r*d-o*h-l*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,u=this._w;let d=u*e._w+r*e._x+o*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=r,this._y=o,this._z=l,this;const h=1-d*d;if(h<=Number.EPSILON){const S=1-n;return this._w=S*u+n*this._w,this._x=S*r+n*this._x,this._y=S*o+n*this._y,this._z=S*l+n*this._z,this.normalize(),this}const m=Math.sqrt(h),v=Math.atan2(m,d),x=Math.sin((1-n)*v)/m,_=Math.sin(n*v)/m;return this._w=u*x+this._w*_,this._x=r*x+this._x*_,this._y=o*x+this._y*_,this._z=l*x+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,n=0,r=0){J.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(om.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(om.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*o,this.y=l[1]*n+l[4]*r+l[7]*o,this.z=l[2]*n+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*n+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*n+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*n+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,l=e.x,u=e.y,d=e.z,h=e.w,m=2*(u*o-d*r),v=2*(d*n-l*o),x=2*(l*r-u*n);return this.x=n+h*m+u*x-d*v,this.y=r+h*v+d*m-l*x,this.z=o+h*x+l*v-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*o,this.y=l[1]*n+l[5]*r+l[9]*o,this.z=l[2]*n+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,l=e.z,u=n.x,d=n.y,h=n.z;return this.x=o*h-l*d,this.y=l*u-r*h,this.z=r*d-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Pu.copy(this).projectOnVector(e),this.sub(Pu)}reflect(e){return this.sub(Pu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Pn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pu=new J,om=new Ga;class Wa{constructor(e=new J(1/0,1/0,1/0),n=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(oi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(oi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=oi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,oi):oi.fromBufferAttribute(l,u),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),tl.copy(r.boundingBox)),tl.applyMatrix4(e.matrixWorld),this.union(tl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ra),nl.subVectors(this.max,Ra),Es.subVectors(e.a,Ra),ws.subVectors(e.b,Ra),Ts.subVectors(e.c,Ra),dr.subVectors(ws,Es),fr.subVectors(Ts,ws),kr.subVectors(Es,Ts);let n=[0,-dr.z,dr.y,0,-fr.z,fr.y,0,-kr.z,kr.y,dr.z,0,-dr.x,fr.z,0,-fr.x,kr.z,0,-kr.x,-dr.y,dr.x,0,-fr.y,fr.x,0,-kr.y,kr.x,0];return!Nu(n,Es,ws,Ts,nl)||(n=[1,0,0,0,1,0,0,0,1],!Nu(n,Es,ws,Ts,nl))?!1:(il.crossVectors(dr,fr),n=[il.x,il.y,il.z],Nu(n,Es,ws,Ts,nl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Li=[new J,new J,new J,new J,new J,new J,new J,new J],oi=new J,tl=new Wa,Es=new J,ws=new J,Ts=new J,dr=new J,fr=new J,kr=new J,Ra=new J,nl=new J,il=new J,Or=new J;function Nu(s,e,n,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){Or.fromArray(s,l);const d=o.x*Math.abs(Or.x)+o.y*Math.abs(Or.y)+o.z*Math.abs(Or.z),h=e.dot(Or),m=n.dot(Or),v=r.dot(Or);if(Math.max(-Math.max(h,m,v),Math.min(h,m,v))>d)return!1}return!0}const M_=new Wa,Pa=new J,Lu=new J;class ja{constructor(e=new J,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):M_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pa.subVectors(e,this.center);const n=Pa.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Pa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pa.copy(e.center).add(Lu)),this.expandByPoint(Pa.copy(e.center).sub(Lu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Di=new J,Du=new J,rl=new J,hr=new J,Iu=new J,sl=new J,Uu=new J;class of{constructor(e=new J,n=new J(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,n),Di.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Du.copy(e).add(n).multiplyScalar(.5),rl.copy(n).sub(e).normalize(),hr.copy(this.origin).sub(Du);const l=e.distanceTo(n)*.5,u=-this.direction.dot(rl),d=hr.dot(this.direction),h=-hr.dot(rl),m=hr.lengthSq(),v=Math.abs(1-u*u);let x,_,S,T;if(v>0)if(x=u*h-d,_=u*d-h,T=l*v,x>=0)if(_>=-T)if(_<=T){const A=1/v;x*=A,_*=A,S=x*(x+u*_+2*d)+_*(u*x+_+2*h)+m}else _=l,x=Math.max(0,-(u*_+d)),S=-x*x+_*(_+2*h)+m;else _=-l,x=Math.max(0,-(u*_+d)),S=-x*x+_*(_+2*h)+m;else _<=-T?(x=Math.max(0,-(-u*l+d)),_=x>0?-l:Math.min(Math.max(-l,-h),l),S=-x*x+_*(_+2*h)+m):_<=T?(x=0,_=Math.min(Math.max(-l,-h),l),S=_*(_+2*h)+m):(x=Math.max(0,-(u*l+d)),_=x>0?l:Math.min(Math.max(-l,-h),l),S=-x*x+_*(_+2*h)+m);else _=u>0?-l:l,x=Math.max(0,-(u*_+d)),S=-x*x+_*(_+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(Du).addScaledVector(rl,_),S}intersectSphere(e,n){Di.subVectors(e.center,this.origin);const r=Di.dot(this.direction),o=Di.dot(Di)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=r-u,h=r+u;return h<0?null:d<0?this.at(h,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,l,u,d,h;const m=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,_=this.origin;return m>=0?(r=(e.min.x-_.x)*m,o=(e.max.x-_.x)*m):(r=(e.max.x-_.x)*m,o=(e.min.x-_.x)*m),v>=0?(l=(e.min.y-_.y)*v,u=(e.max.y-_.y)*v):(l=(e.max.y-_.y)*v,u=(e.min.y-_.y)*v),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),x>=0?(d=(e.min.z-_.z)*x,h=(e.max.z-_.z)*x):(d=(e.max.z-_.z)*x,h=(e.min.z-_.z)*x),r>h||d>o)||((d>r||r!==r)&&(r=d),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,n,r,o,l){Iu.subVectors(n,e),sl.subVectors(r,e),Uu.crossVectors(Iu,sl);let u=this.direction.dot(Uu),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;hr.subVectors(this.origin,e);const h=d*this.direction.dot(sl.crossVectors(hr,sl));if(h<0)return null;const m=d*this.direction.dot(Iu.cross(hr));if(m<0||h+m>u)return null;const v=-d*hr.dot(Uu);return v<0?null:this.at(v/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,n,r,o,l,u,d,h,m,v,x,_,S,T,A,y){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,u,d,h,m,v,x,_,S,T,A,y)}set(e,n,r,o,l,u,d,h,m,v,x,_,S,T,A,y){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=o,g[1]=l,g[5]=u,g[9]=d,g[13]=h,g[2]=m,g[6]=v,g[10]=x,g[14]=_,g[3]=S,g[7]=T,g[11]=A,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,o=1/As.setFromMatrixColumn(e,0).length(),l=1/As.setFromMatrixColumn(e,1).length(),u=1/As.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),h=Math.cos(o),m=Math.sin(o),v=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const _=u*v,S=u*x,T=d*v,A=d*x;n[0]=h*v,n[4]=-h*x,n[8]=m,n[1]=S+T*m,n[5]=_-A*m,n[9]=-d*h,n[2]=A-_*m,n[6]=T+S*m,n[10]=u*h}else if(e.order==="YXZ"){const _=h*v,S=h*x,T=m*v,A=m*x;n[0]=_+A*d,n[4]=T*d-S,n[8]=u*m,n[1]=u*x,n[5]=u*v,n[9]=-d,n[2]=S*d-T,n[6]=A+_*d,n[10]=u*h}else if(e.order==="ZXY"){const _=h*v,S=h*x,T=m*v,A=m*x;n[0]=_-A*d,n[4]=-u*x,n[8]=T+S*d,n[1]=S+T*d,n[5]=u*v,n[9]=A-_*d,n[2]=-u*m,n[6]=d,n[10]=u*h}else if(e.order==="ZYX"){const _=u*v,S=u*x,T=d*v,A=d*x;n[0]=h*v,n[4]=T*m-S,n[8]=_*m+A,n[1]=h*x,n[5]=A*m+_,n[9]=S*m-T,n[2]=-m,n[6]=d*h,n[10]=u*h}else if(e.order==="YZX"){const _=u*h,S=u*m,T=d*h,A=d*m;n[0]=h*v,n[4]=A-_*x,n[8]=T*x+S,n[1]=x,n[5]=u*v,n[9]=-d*v,n[2]=-m*v,n[6]=S*x+T,n[10]=_-A*x}else if(e.order==="XZY"){const _=u*h,S=u*m,T=d*h,A=d*m;n[0]=h*v,n[4]=-x,n[8]=m*v,n[1]=_*x+A,n[5]=u*v,n[9]=S*x-T,n[2]=T*x-S,n[6]=d*v,n[10]=A*x+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(E_,e,w_)}lookAt(e,n,r){const o=this.elements;return On.subVectors(e,n),On.lengthSq()===0&&(On.z=1),On.normalize(),pr.crossVectors(r,On),pr.lengthSq()===0&&(Math.abs(r.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),pr.crossVectors(r,On)),pr.normalize(),al.crossVectors(On,pr),o[0]=pr.x,o[4]=al.x,o[8]=On.x,o[1]=pr.y,o[5]=al.y,o[9]=On.y,o[2]=pr.z,o[6]=al.z,o[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,u=r[0],d=r[4],h=r[8],m=r[12],v=r[1],x=r[5],_=r[9],S=r[13],T=r[2],A=r[6],y=r[10],g=r[14],D=r[3],N=r[7],R=r[11],K=r[15],O=o[0],k=o[4],W=o[8],L=o[12],C=o[1],B=o[5],le=o[9],ie=o[13],pe=o[2],me=o[6],de=o[10],he=o[14],H=o[3],fe=o[7],I=o[11],E=o[15];return l[0]=u*O+d*C+h*pe+m*H,l[4]=u*k+d*B+h*me+m*fe,l[8]=u*W+d*le+h*de+m*I,l[12]=u*L+d*ie+h*he+m*E,l[1]=v*O+x*C+_*pe+S*H,l[5]=v*k+x*B+_*me+S*fe,l[9]=v*W+x*le+_*de+S*I,l[13]=v*L+x*ie+_*he+S*E,l[2]=T*O+A*C+y*pe+g*H,l[6]=T*k+A*B+y*me+g*fe,l[10]=T*W+A*le+y*de+g*I,l[14]=T*L+A*ie+y*he+g*E,l[3]=D*O+N*C+R*pe+K*H,l[7]=D*k+N*B+R*me+K*fe,l[11]=D*W+N*le+R*de+K*I,l[15]=D*L+N*ie+R*he+K*E,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],l=e[12],u=e[1],d=e[5],h=e[9],m=e[13],v=e[2],x=e[6],_=e[10],S=e[14],T=e[3],A=e[7],y=e[11],g=e[15];return T*(+l*h*x-o*m*x-l*d*_+r*m*_+o*d*S-r*h*S)+A*(+n*h*S-n*m*_+l*u*_-o*u*S+o*m*v-l*h*v)+y*(+n*m*x-n*d*S-l*u*x+r*u*S+l*d*v-r*m*v)+g*(-o*d*v-n*h*x+n*d*_+o*u*x-r*u*_+r*h*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],m=e[7],v=e[8],x=e[9],_=e[10],S=e[11],T=e[12],A=e[13],y=e[14],g=e[15],D=x*y*m-A*_*m+A*h*S-d*y*S-x*h*g+d*_*g,N=T*_*m-v*y*m-T*h*S+u*y*S+v*h*g-u*_*g,R=v*A*m-T*x*m+T*d*S-u*A*S-v*d*g+u*x*g,K=T*x*h-v*A*h-T*d*_+u*A*_+v*d*y-u*x*y,O=n*D+r*N+o*R+l*K;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/O;return e[0]=D*k,e[1]=(A*_*l-x*y*l-A*o*S+r*y*S+x*o*g-r*_*g)*k,e[2]=(d*y*l-A*h*l+A*o*m-r*y*m-d*o*g+r*h*g)*k,e[3]=(x*h*l-d*_*l-x*o*m+r*_*m+d*o*S-r*h*S)*k,e[4]=N*k,e[5]=(v*y*l-T*_*l+T*o*S-n*y*S-v*o*g+n*_*g)*k,e[6]=(T*h*l-u*y*l-T*o*m+n*y*m+u*o*g-n*h*g)*k,e[7]=(u*_*l-v*h*l+v*o*m-n*_*m-u*o*S+n*h*S)*k,e[8]=R*k,e[9]=(T*x*l-v*A*l-T*r*S+n*A*S+v*r*g-n*x*g)*k,e[10]=(u*A*l-T*d*l+T*r*m-n*A*m-u*r*g+n*d*g)*k,e[11]=(v*d*l-u*x*l-v*r*m+n*x*m+u*r*S-n*d*S)*k,e[12]=K*k,e[13]=(v*A*o-T*x*o+T*r*_-n*A*_-v*r*y+n*x*y)*k,e[14]=(T*d*o-u*A*o-T*r*h+n*A*h+u*r*y-n*d*y)*k,e[15]=(u*x*o-v*d*o+v*r*h-n*x*h-u*r*_+n*d*_)*k,this}scale(e){const n=this.elements,r=e.x,o=e.y,l=e.z;return n[0]*=r,n[4]*=o,n[8]*=l,n[1]*=r,n[5]*=o,n[9]*=l,n[2]*=r,n[6]*=o,n[10]*=l,n[3]*=r,n[7]*=o,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),l=1-r,u=e.x,d=e.y,h=e.z,m=l*u,v=l*d;return this.set(m*u+r,m*d-o*h,m*h+o*d,0,m*d+o*h,v*d+r,v*h-o*u,0,m*h-o*d,v*h+o*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,l=n._x,u=n._y,d=n._z,h=n._w,m=l+l,v=u+u,x=d+d,_=l*m,S=l*v,T=l*x,A=u*v,y=u*x,g=d*x,D=h*m,N=h*v,R=h*x,K=r.x,O=r.y,k=r.z;return o[0]=(1-(A+g))*K,o[1]=(S+R)*K,o[2]=(T-N)*K,o[3]=0,o[4]=(S-R)*O,o[5]=(1-(_+g))*O,o[6]=(y+D)*O,o[7]=0,o[8]=(T+N)*k,o[9]=(y-D)*k,o[10]=(1-(_+A))*k,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;let l=As.set(o[0],o[1],o[2]).length();const u=As.set(o[4],o[5],o[6]).length(),d=As.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],li.copy(this);const m=1/l,v=1/u,x=1/d;return li.elements[0]*=m,li.elements[1]*=m,li.elements[2]*=m,li.elements[4]*=v,li.elements[5]*=v,li.elements[6]*=v,li.elements[8]*=x,li.elements[9]*=x,li.elements[10]*=x,n.setFromRotationMatrix(li),r.x=l,r.y=u,r.z=d,this}makePerspective(e,n,r,o,l,u,d=Bi){const h=this.elements,m=2*l/(n-e),v=2*l/(r-o),x=(n+e)/(n-e),_=(r+o)/(r-o);let S,T;if(d===Bi)S=-(u+l)/(u-l),T=-2*u*l/(u-l);else if(d===Ll)S=-u/(u-l),T=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=m,h[4]=0,h[8]=x,h[12]=0,h[1]=0,h[5]=v,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,o,l,u,d=Bi){const h=this.elements,m=1/(n-e),v=1/(r-o),x=1/(u-l),_=(n+e)*m,S=(r+o)*v;let T,A;if(d===Bi)T=(u+l)*x,A=-2*x;else if(d===Ll)T=l*x,A=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-_,h[1]=0,h[5]=2*v,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=A,h[14]=-T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const As=new J,li=new Ht,E_=new J(0,0,0),w_=new J(1,1,1),pr=new J,al=new J,On=new J,lm=new Ht,cm=new Ga;class Gi{constructor(e=0,n=0,r=0,o=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],h=o[1],m=o[5],v=o[9],x=o[2],_=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(Pn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Pn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(Pn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Pn(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Pn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Pn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return lm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return cm.setFromEuler(this),this.setFromQuaternion(cm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class Tg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let T_=0;const um=new J,bs=new Ga,Ii=new Ht,ol=new J,Na=new J,A_=new J,b_=new Ga,dm=new J(1,0,0),fm=new J(0,1,0),hm=new J(0,0,1),pm={type:"added"},C_={type:"removed"},Cs={type:"childadded",child:null},Fu={type:"childremoved",child:null};class yn extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:T_++}),this.uuid=Ha(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const e=new J,n=new Gi,r=new Ga,o=new J(1,1,1);function l(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ht},normalMatrix:{value:new ft}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return bs.setFromAxisAngle(e,n),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,n){return bs.setFromAxisAngle(e,n),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(dm,e)}rotateY(e){return this.rotateOnAxis(fm,e)}rotateZ(e){return this.rotateOnAxis(hm,e)}translateOnAxis(e,n){return um.copy(e).applyQuaternion(this.quaternion),this.position.add(um.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(dm,e)}translateY(e){return this.translateOnAxis(fm,e)}translateZ(e){return this.translateOnAxis(hm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?ol.copy(e):ol.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Na,ol,this.up):Ii.lookAt(ol,Na,this.up),this.quaternion.setFromRotationMatrix(Ii),o&&(Ii.extractRotation(o.matrixWorld),bs.setFromRotationMatrix(Ii),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pm),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(C_),Fu.child=e,this.dispatchEvent(Fu),Fu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pm),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,e,A_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,b_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let m=0,v=h.length;m<v;m++){const x=h[m];l(e.shapes,x)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,m=this.material.length;h<m;h++)d.push(l(e.materials,this.material[h]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];o.animations.push(l(e.animations,h))}}if(n){const d=u(e.geometries),h=u(e.materials),m=u(e.textures),v=u(e.images),x=u(e.shapes),_=u(e.skeletons),S=u(e.animations),T=u(e.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),x.length>0&&(r.shapes=x),_.length>0&&(r.skeletons=_),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=o,r;function u(d){const h=[];for(const m in d){const v=d[m];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}yn.DEFAULT_UP=new J(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new J,Ui=new J,ku=new J,Fi=new J,Rs=new J,Ps=new J,mm=new J,Ou=new J,zu=new J,Bu=new J,Vu=new Wt,Hu=new Wt,Gu=new Wt;class ui{constructor(e=new J,n=new J,r=new J){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),ci.subVectors(e,n),o.cross(ci);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,n,r,o,l){ci.subVectors(o,n),Ui.subVectors(r,n),ku.subVectors(e,n);const u=ci.dot(ci),d=ci.dot(Ui),h=ci.dot(ku),m=Ui.dot(Ui),v=Ui.dot(ku),x=u*m-d*d;if(x===0)return l.set(0,0,0),null;const _=1/x,S=(m*h-d*v)*_,T=(u*v-d*h)*_;return l.set(1-S-T,T,S)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,n,r,o,l,u,d,h){return this.getBarycoord(e,n,r,o,Fi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Fi.x),h.addScaledVector(u,Fi.y),h.addScaledVector(d,Fi.z),h)}static getInterpolatedAttribute(e,n,r,o,l,u){return Vu.setScalar(0),Hu.setScalar(0),Gu.setScalar(0),Vu.fromBufferAttribute(e,n),Hu.fromBufferAttribute(e,r),Gu.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Vu,l.x),u.addScaledVector(Hu,l.y),u.addScaledVector(Gu,l.z),u}static isFrontFacing(e,n,r,o){return ci.subVectors(r,n),Ui.subVectors(e,n),ci.cross(Ui).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),ci.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ui.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,l){return ui.getInterpolation(e,this.a,this.b,this.c,n,r,o,l)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,l=this.c;let u,d;Rs.subVectors(o,r),Ps.subVectors(l,r),Ou.subVectors(e,r);const h=Rs.dot(Ou),m=Ps.dot(Ou);if(h<=0&&m<=0)return n.copy(r);zu.subVectors(e,o);const v=Rs.dot(zu),x=Ps.dot(zu);if(v>=0&&x<=v)return n.copy(o);const _=h*x-v*m;if(_<=0&&h>=0&&v<=0)return u=h/(h-v),n.copy(r).addScaledVector(Rs,u);Bu.subVectors(e,l);const S=Rs.dot(Bu),T=Ps.dot(Bu);if(T>=0&&S<=T)return n.copy(l);const A=S*m-h*T;if(A<=0&&m>=0&&T<=0)return d=m/(m-T),n.copy(r).addScaledVector(Ps,d);const y=v*T-S*x;if(y<=0&&x-v>=0&&S-T>=0)return mm.subVectors(l,o),d=(x-v)/(x-v+(S-T)),n.copy(o).addScaledVector(mm,d);const g=1/(y+A+_);return u=A*g,d=_*g,n.copy(r).addScaledVector(Rs,u).addScaledVector(Ps,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ag={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},ll={h:0,s:0,l:0};function Wu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Ct{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,n),this}setRGB(e,n,r,o=Et.workingColorSpace){return this.r=e,this.g=n,this.b=r,Et.toWorkingColorSpace(this,o),this}setHSL(e,n,r,o=Et.workingColorSpace){if(e=f_(e,1),n=Pn(n,0,1),r=Pn(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,u=2*r-l;this.r=Wu(u,l,e+1/3),this.g=Wu(u,l,e),this.b=Wu(u,l,e-1/3)}return Et.toWorkingColorSpace(this,o),this}setStyle(e,n=Kn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Kn){const r=Ag[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return Et.fromWorkingColorSpace(pn.copy(this),e),Math.round(Pn(pn.r*255,0,255))*65536+Math.round(Pn(pn.g*255,0,255))*256+Math.round(Pn(pn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Et.workingColorSpace){Et.fromWorkingColorSpace(pn.copy(this),n);const r=pn.r,o=pn.g,l=pn.b,u=Math.max(r,o,l),d=Math.min(r,o,l);let h,m;const v=(d+u)/2;if(d===u)h=0,m=0;else{const x=u-d;switch(m=v<=.5?x/(u+d):x/(2-u-d),u){case r:h=(o-l)/x+(o<l?6:0);break;case o:h=(l-r)/x+2;break;case l:h=(r-o)/x+4;break}h/=6}return e.h=h,e.s=m,e.l=v,e}getRGB(e,n=Et.workingColorSpace){return Et.fromWorkingColorSpace(pn.copy(this),n),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=Kn){Et.fromWorkingColorSpace(pn.copy(this),e);const n=pn.r,r=pn.g,o=pn.b;return e!==Kn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+n,mr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(mr),e.getHSL(ll);const r=bu(mr.h,ll.h,n),o=bu(mr.s,ll.s,n),l=bu(mr.l,ll.l,n);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*o,this.g=l[1]*n+l[4]*r+l[7]*o,this.b=l[2]*n+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new Ct;Ct.NAMES=Ag;let R_=0;class Ys extends qs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=Ha(),this.name="",this.blending=ks,this.side=Sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ad,this.blendDst=od,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(r.blending=this.blending),this.side!==Sr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ad&&(r.blendSrc=this.blendSrc),this.blendDst!==od&&(r.blendDst=this.blendDst),this.blendEquation!==jr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const d in l){const h=l[d];delete h.metadata,u.push(h)}return u}if(n){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Us extends Ys{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=cg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new J,cl=new Rt;class Qn{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Jp,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)cl.fromBufferAttribute(this,n),cl.applyMatrix3(e),this.setXY(n,cl.x,cl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.applyMatrix3(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.applyMatrix4(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.applyNormalMatrix(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.transformDirection(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ca(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Rn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ca(n,this.array)),n}setX(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ca(n,this.array)),n}setY(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ca(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ca(n,this.array)),n}setW(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Rn(n,this.array),r=Rn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Rn(n,this.array),r=Rn(r,this.array),o=Rn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,l){return e*=this.itemSize,this.normalized&&(n=Rn(n,this.array),r=Rn(r,this.array),o=Rn(o,this.array),l=Rn(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jp&&(e.usage=this.usage),e}}class bg extends Qn{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Cg extends Qn{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class rn extends Qn{constructor(e,n,r){super(new Float32Array(e),n,r)}}let P_=0;const $n=new Ht,ju=new yn,Ns=new J,zn=new Wa,La=new Wa,nn=new J;class Dn extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=Ha(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mg(e)?Cg:bg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ft().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,n,r){return $n.makeTranslation(e,n,r),this.applyMatrix4($n),this}scale(e,n,r){return $n.makeScale(e,n,r),this.applyMatrix4($n),this}lookAt(e){return ju.lookAt(e),ju.updateMatrix(),this.applyMatrix4(ju.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new rn(r,3))}else{for(let r=0,o=n.count;r<o;r++){const l=e[r];n.setXYZ(r,l.x,l.y,l.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const l=n[r];zn.setFromBufferAttribute(l),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ja);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const r=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),n)for(let l=0,u=n.length;l<u;l++){const d=n[l];La.setFromBufferAttribute(d),this.morphTargetsRelative?(nn.addVectors(zn.min,La.min),zn.expandByPoint(nn),nn.addVectors(zn.max,La.max),zn.expandByPoint(nn)):(zn.expandByPoint(La.min),zn.expandByPoint(La.max))}zn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)nn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(nn));if(n)for(let l=0,u=n.length;l<u;l++){const d=n[l],h=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)nn.fromBufferAttribute(d,m),h&&(Ns.fromBufferAttribute(e,m),nn.add(Ns)),o=Math.max(o,r.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qn(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],h=[];for(let W=0;W<r.count;W++)d[W]=new J,h[W]=new J;const m=new J,v=new J,x=new J,_=new Rt,S=new Rt,T=new Rt,A=new J,y=new J;function g(W,L,C){m.fromBufferAttribute(r,W),v.fromBufferAttribute(r,L),x.fromBufferAttribute(r,C),_.fromBufferAttribute(l,W),S.fromBufferAttribute(l,L),T.fromBufferAttribute(l,C),v.sub(m),x.sub(m),S.sub(_),T.sub(_);const B=1/(S.x*T.y-T.x*S.y);isFinite(B)&&(A.copy(v).multiplyScalar(T.y).addScaledVector(x,-S.y).multiplyScalar(B),y.copy(x).multiplyScalar(S.x).addScaledVector(v,-T.x).multiplyScalar(B),d[W].add(A),d[L].add(A),d[C].add(A),h[W].add(y),h[L].add(y),h[C].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let W=0,L=D.length;W<L;++W){const C=D[W],B=C.start,le=C.count;for(let ie=B,pe=B+le;ie<pe;ie+=3)g(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const N=new J,R=new J,K=new J,O=new J;function k(W){K.fromBufferAttribute(o,W),O.copy(K);const L=d[W];N.copy(L),N.sub(K.multiplyScalar(K.dot(L))).normalize(),R.crossVectors(O,L);const B=R.dot(h[W])<0?-1:1;u.setXYZW(W,N.x,N.y,N.z,B)}for(let W=0,L=D.length;W<L;++W){const C=D[W],B=C.start,le=C.count;for(let ie=B,pe=B+le;ie<pe;ie+=3)k(e.getX(ie+0)),k(e.getX(ie+1)),k(e.getX(ie+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Qn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let _=0,S=r.count;_<S;_++)r.setXYZ(_,0,0,0);const o=new J,l=new J,u=new J,d=new J,h=new J,m=new J,v=new J,x=new J;if(e)for(let _=0,S=e.count;_<S;_+=3){const T=e.getX(_+0),A=e.getX(_+1),y=e.getX(_+2);o.fromBufferAttribute(n,T),l.fromBufferAttribute(n,A),u.fromBufferAttribute(n,y),v.subVectors(u,l),x.subVectors(o,l),v.cross(x),d.fromBufferAttribute(r,T),h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,y),d.add(v),h.add(v),m.add(v),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let _=0,S=n.count;_<S;_+=3)o.fromBufferAttribute(n,_+0),l.fromBufferAttribute(n,_+1),u.fromBufferAttribute(n,_+2),v.subVectors(u,l),x.subVectors(o,l),v.cross(x),r.setXYZ(_+0,v.x,v.y,v.z),r.setXYZ(_+1,v.x,v.y,v.z),r.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)nn.fromBufferAttribute(e,n),nn.normalize(),e.setXYZ(n,nn.x,nn.y,nn.z)}toNonIndexed(){function e(d,h){const m=d.array,v=d.itemSize,x=d.normalized,_=new m.constructor(h.length*v);let S=0,T=0;for(let A=0,y=h.length;A<y;A++){d.isInterleavedBufferAttribute?S=h[A]*d.data.stride+d.offset:S=h[A]*v;for(let g=0;g<v;g++)_[T++]=m[S++]}return new Qn(_,v,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Dn,r=this.index.array,o=this.attributes;for(const d in o){const h=o[d],m=e(h,r);n.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const h=[],m=l[d];for(let v=0,x=m.length;v<x;v++){const _=m[v],S=e(_,r);h.push(S)}n.morphAttributes[d]=h}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,h=u.length;d<h;d++){const m=u[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],v=[];for(let x=0,_=m.length;x<_;x++){const S=m[x];v.push(S.toJSON(e.data))}v.length>0&&(o[h]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const o=e.attributes;for(const m in o){const v=o[m];this.setAttribute(m,v.clone(n))}const l=e.morphAttributes;for(const m in l){const v=[],x=l[m];for(let _=0,S=x.length;_<S;_++)v.push(x[_].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,v=u.length;m<v;m++){const x=u[m];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gm=new Ht,zr=new of,ul=new ja,vm=new J,dl=new J,fl=new J,hl=new J,Xu=new J,pl=new J,xm=new J,ml=new J;class Bn extends yn{constructor(e=new Dn,n=new Us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){pl.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const v=d[h],x=l[h];v!==0&&(Xu.fromBufferAttribute(x,e),u?pl.addScaledVector(Xu,v):pl.addScaledVector(Xu.sub(n),v))}n.add(pl)}return n}raycast(e,n){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ul.copy(r.boundingSphere),ul.applyMatrix4(l),zr.copy(e.ray).recast(e.near),!(ul.containsPoint(zr.origin)===!1&&(zr.intersectSphere(ul,vm)===null||zr.origin.distanceToSquared(vm)>(e.far-e.near)**2))&&(gm.copy(l).invert(),zr.copy(e.ray).applyMatrix4(gm),!(r.boundingBox!==null&&zr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,zr)))}_computeIntersections(e,n,r){let o;const l=this.geometry,u=this.material,d=l.index,h=l.attributes.position,m=l.attributes.uv,v=l.attributes.uv1,x=l.attributes.normal,_=l.groups,S=l.drawRange;if(d!==null)if(Array.isArray(u))for(let T=0,A=_.length;T<A;T++){const y=_[T],g=u[y.materialIndex],D=Math.max(y.start,S.start),N=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let R=D,K=N;R<K;R+=3){const O=d.getX(R),k=d.getX(R+1),W=d.getX(R+2);o=gl(this,g,e,r,m,v,x,O,k,W),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const T=Math.max(0,S.start),A=Math.min(d.count,S.start+S.count);for(let y=T,g=A;y<g;y+=3){const D=d.getX(y),N=d.getX(y+1),R=d.getX(y+2);o=gl(this,u,e,r,m,v,x,D,N,R),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let T=0,A=_.length;T<A;T++){const y=_[T],g=u[y.materialIndex],D=Math.max(y.start,S.start),N=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let R=D,K=N;R<K;R+=3){const O=R,k=R+1,W=R+2;o=gl(this,g,e,r,m,v,x,O,k,W),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const T=Math.max(0,S.start),A=Math.min(h.count,S.start+S.count);for(let y=T,g=A;y<g;y+=3){const D=y,N=y+1,R=y+2;o=gl(this,u,e,r,m,v,x,D,N,R),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function N_(s,e,n,r,o,l,u,d){let h;if(e.side===Nn?h=r.intersectTriangle(u,l,o,!0,d):h=r.intersectTriangle(o,l,u,e.side===Sr,d),h===null)return null;ml.copy(d),ml.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(ml);return m<n.near||m>n.far?null:{distance:m,point:ml.clone(),object:s}}function gl(s,e,n,r,o,l,u,d,h,m){s.getVertexPosition(d,dl),s.getVertexPosition(h,fl),s.getVertexPosition(m,hl);const v=N_(s,e,n,r,dl,fl,hl,xm);if(v){const x=new J;ui.getBarycoord(xm,dl,fl,hl,x),o&&(v.uv=ui.getInterpolatedAttribute(o,d,h,m,x,new Rt)),l&&(v.uv1=ui.getInterpolatedAttribute(l,d,h,m,x,new Rt)),u&&(v.normal=ui.getInterpolatedAttribute(u,d,h,m,x,new J),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const _={a:d,b:h,c:m,normal:new J,materialIndex:0};ui.getNormal(dl,fl,hl,_.normal),v.face=_,v.barycoord=x}return v}class Xa extends Dn{constructor(e=1,n=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],m=[],v=[],x=[];let _=0,S=0;T("z","y","x",-1,-1,r,n,e,u,l,0),T("z","y","x",1,-1,r,n,-e,u,l,1),T("x","z","y",1,1,e,r,n,o,u,2),T("x","z","y",1,-1,e,r,-n,o,u,3),T("x","y","z",1,-1,e,n,r,o,l,4),T("x","y","z",-1,-1,e,n,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new rn(m,3)),this.setAttribute("normal",new rn(v,3)),this.setAttribute("uv",new rn(x,2));function T(A,y,g,D,N,R,K,O,k,W,L){const C=R/k,B=K/W,le=R/2,ie=K/2,pe=O/2,me=k+1,de=W+1;let he=0,H=0;const fe=new J;for(let I=0;I<de;I++){const E=I*B-ie;for(let G=0;G<me;G++){const ve=G*C-le;fe[A]=ve*D,fe[y]=E*N,fe[g]=pe,m.push(fe.x,fe.y,fe.z),fe[A]=0,fe[y]=0,fe[g]=O>0?1:-1,v.push(fe.x,fe.y,fe.z),x.push(G/k),x.push(1-I/W),he+=1}}for(let I=0;I<W;I++)for(let E=0;E<k;E++){const G=_+E+me*I,ve=_+E+me*(I+1),X=_+(E+1)+me*(I+1),ee=_+(E+1)+me*I;h.push(G,ve,ee),h.push(ve,X,ee),H+=6}d.addGroup(S,H,L),S+=H,_+=he}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function _n(s){const e={};for(let n=0;n<s.length;n++){const r=js(s[n]);for(const o in r)e[o]=r[o]}return e}function L_(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Rg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const D_={clone:js,merge:_n};var I_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,U_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mr extends Ys{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I_,this.fragmentShader=U_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=L_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Pg extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=Bi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gr=new J,_m=new Rt,ym=new Rt;class Zn extends Pg{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=jd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Au*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jd*2*Math.atan(Math.tan(Au*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gr.x,gr.y).multiplyScalar(-e/gr.z),gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(gr.x,gr.y).multiplyScalar(-e/gr.z)}getViewSize(e,n){return this.getViewBounds(e,_m,ym),n.subVectors(ym,_m)}setViewOffset(e,n,r,o,l,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Au*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,m=u.fullHeight;l+=u.offsetX*o/h,n-=u.offsetY*r/m,o*=u.width/h,r*=u.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ls=-90,Ds=1;class F_ extends yn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Zn(Ls,Ds,e,n);o.layers=this.layers,this.add(o);const l=new Zn(Ls,Ds,e,n);l.layers=this.layers,this.add(l);const u=new Zn(Ls,Ds,e,n);u.layers=this.layers,this.add(u);const d=new Zn(Ls,Ds,e,n);d.layers=this.layers,this.add(d);const h=new Zn(Ls,Ds,e,n);h.layers=this.layers,this.add(h);const m=new Zn(Ls,Ds,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,l,u,d,h]=n;for(const m of n)this.remove(m);if(e===Bi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Ll)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,h,m,v]=this.children,x=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,l),e.setRenderTarget(r,1,o),e.render(n,u),e.setRenderTarget(r,2,o),e.render(n,d),e.setRenderTarget(r,3,o),e.render(n,h),e.setRenderTarget(r,4,o),e.render(n,m),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),e.render(n,v),e.setRenderTarget(x,_,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Ng extends Ln{constructor(e,n,r,o,l,u,d,h,m,v){e=e!==void 0?e:[],n=n!==void 0?n:Vs,super(e,n,r,o,l,u,d,h,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class k_ extends Kr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Ng(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:yi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Xa(5,5,5),l=new Mr({name:"CubemapFromEquirect",uniforms:js(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Nn,blending:xr});l.uniforms.tEquirect.value=n;const u=new Bn(o,l),d=n.minFilter;return n.minFilter===Yr&&(n.minFilter=yi),new F_(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n,r,o){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(l)}}const qu=new J,O_=new J,z_=new ft;class Gr{constructor(e=new J(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=qu.subVectors(r,n).cross(O_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(qu),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:n.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||z_.getNormalMatrix(e),o=this.coplanarPoint(qu).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new ja,vl=new J;class Lg{constructor(e=new Gr,n=new Gr,r=new Gr,o=new Gr,l=new Gr,u=new Gr){this.planes=[e,n,r,o,l,u]}set(e,n,r,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Bi){const r=this.planes,o=e.elements,l=o[0],u=o[1],d=o[2],h=o[3],m=o[4],v=o[5],x=o[6],_=o[7],S=o[8],T=o[9],A=o[10],y=o[11],g=o[12],D=o[13],N=o[14],R=o[15];if(r[0].setComponents(h-l,_-m,y-S,R-g).normalize(),r[1].setComponents(h+l,_+m,y+S,R+g).normalize(),r[2].setComponents(h+u,_+v,y+T,R+D).normalize(),r[3].setComponents(h-u,_-v,y-T,R-D).normalize(),r[4].setComponents(h-d,_-x,y-A,R-N).normalize(),n===Bi)r[5].setComponents(h+d,_+x,y+A,R+N).normalize();else if(n===Ll)r[5].setComponents(d,x,A,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(vl.x=o.normal.x>0?e.max.x:e.min.x,vl.y=o.normal.y>0?e.max.y:e.min.y,vl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(vl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Dg(){let s=null,e=!1,n=null,r=null;function o(l,u){n(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function B_(s){const e=new WeakMap;function n(d,h){const m=d.array,v=d.usage,x=m.byteLength,_=s.createBuffer();s.bindBuffer(h,_),s.bufferData(h,m,v),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,h,m){const v=h.array,x=h.updateRanges;if(s.bindBuffer(m,d),x.length===0)s.bufferSubData(m,0,v);else{x.sort((S,T)=>S.start-T.start);let _=0;for(let S=1;S<x.length;S++){const T=x[_],A=x[S];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++_,x[_]=A)}x.length=_+1;for(let S=0,T=x.length;S<T;S++){const A=x[S];s.bufferSubData(m,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(s.deleteBuffer(h.buffer),e.delete(d))}function u(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,h));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,h),m.version=d.version}}return{get:o,remove:l,update:u}}class zl extends Dn{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const l=e/2,u=n/2,d=Math.floor(r),h=Math.floor(o),m=d+1,v=h+1,x=e/d,_=n/h,S=[],T=[],A=[],y=[];for(let g=0;g<v;g++){const D=g*_-u;for(let N=0;N<m;N++){const R=N*x-l;T.push(R,-D,0),A.push(0,0,1),y.push(N/d),y.push(1-g/h)}}for(let g=0;g<h;g++)for(let D=0;D<d;D++){const N=D+m*g,R=D+m*(g+1),K=D+1+m*(g+1),O=D+1+m*g;S.push(N,R,O),S.push(R,K,O)}this.setIndex(S),this.setAttribute("position",new rn(T,3)),this.setAttribute("normal",new rn(A,3)),this.setAttribute("uv",new rn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zl(e.width,e.height,e.widthSegments,e.heightSegments)}}var V_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,H_=`#ifdef USE_ALPHAHASH
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
#endif`,G_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,W_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,X_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,q_=`#ifdef USE_AOMAP
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
#endif`,Y_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$_=`#ifdef USE_BATCHING
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
#endif`,K_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Z_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Q_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,J_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ey=`#ifdef USE_IRIDESCENCE
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
#endif`,ty=`#ifdef USE_BUMPMAP
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
#endif`,ny=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,iy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ry=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ay=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,oy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ly=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,uy=`#define PI 3.141592653589793
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
} // validated`,dy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fy=`vec3 transformedNormal = objectNormal;
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
#endif`,hy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,py=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,my=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vy="gl_FragColor = linearToOutputTexel( gl_FragColor );",xy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_y=`#ifdef USE_ENVMAP
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
#endif`,yy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sy=`#ifdef USE_ENVMAP
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
#endif`,My=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ey=`#ifdef USE_ENVMAP
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
#endif`,wy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ty=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ay=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,by=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cy=`#ifdef USE_GRADIENTMAP
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
}`,Ry=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Py=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ny=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ly=`uniform bool receiveShadow;
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
#endif`,Dy=`#ifdef USE_ENVMAP
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
#endif`,Iy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ky=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Oy=`PhysicalMaterial material;
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
#endif`,zy=`struct PhysicalMaterial {
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
}`,By=`
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
#endif`,Vy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$y=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ky=`#if defined( USE_POINTS_UV )
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
#endif`,Zy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nS=`#ifdef USE_MORPHTARGETS
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
#endif`,iS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,aS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cS=`#ifdef USE_NORMALMAP
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
#endif`,uS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,gS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_S=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,MS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ES=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,TS=`float getShadowMask() {
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
}`,AS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bS=`#ifdef USE_SKINNING
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
#endif`,CS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RS=`#ifdef USE_SKINNING
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
#endif`,PS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DS=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,IS=`#ifdef USE_TRANSMISSION
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
#endif`,US=`#ifdef USE_TRANSMISSION
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
#endif`,FS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VS=`uniform sampler2D t2D;
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
}`,HS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,WS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XS=`#include <common>
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
}`,qS=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,YS=`#define DISTANCE
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
}`,$S=`#define DISTANCE
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
}`,KS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QS=`uniform float scale;
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
}`,JS=`uniform vec3 diffuse;
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
}`,eM=`#include <common>
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
}`,tM=`uniform vec3 diffuse;
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
}`,nM=`#define LAMBERT
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
}`,iM=`#define LAMBERT
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
}`,rM=`#define MATCAP
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
}`,sM=`#define MATCAP
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
}`,aM=`#define NORMAL
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
}`,oM=`#define NORMAL
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
}`,lM=`#define PHONG
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
}`,cM=`#define PHONG
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
}`,uM=`#define STANDARD
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
}`,dM=`#define STANDARD
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
}`,fM=`#define TOON
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
}`,hM=`#define TOON
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
}`,pM=`uniform float size;
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
}`,mM=`uniform vec3 diffuse;
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
}`,gM=`#include <common>
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
}`,vM=`uniform vec3 color;
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
}`,xM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,_M=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:V_,alphahash_pars_fragment:H_,alphamap_fragment:G_,alphamap_pars_fragment:W_,alphatest_fragment:j_,alphatest_pars_fragment:X_,aomap_fragment:q_,aomap_pars_fragment:Y_,batching_pars_vertex:$_,batching_vertex:K_,begin_vertex:Z_,beginnormal_vertex:Q_,bsdfs:J_,iridescence_fragment:ey,bumpmap_pars_fragment:ty,clipping_planes_fragment:ny,clipping_planes_pars_fragment:iy,clipping_planes_pars_vertex:ry,clipping_planes_vertex:sy,color_fragment:ay,color_pars_fragment:oy,color_pars_vertex:ly,color_vertex:cy,common:uy,cube_uv_reflection_fragment:dy,defaultnormal_vertex:fy,displacementmap_pars_vertex:hy,displacementmap_vertex:py,emissivemap_fragment:my,emissivemap_pars_fragment:gy,colorspace_fragment:vy,colorspace_pars_fragment:xy,envmap_fragment:_y,envmap_common_pars_fragment:yy,envmap_pars_fragment:Sy,envmap_pars_vertex:My,envmap_physical_pars_fragment:Dy,envmap_vertex:Ey,fog_vertex:wy,fog_pars_vertex:Ty,fog_fragment:Ay,fog_pars_fragment:by,gradientmap_pars_fragment:Cy,lightmap_pars_fragment:Ry,lights_lambert_fragment:Py,lights_lambert_pars_fragment:Ny,lights_pars_begin:Ly,lights_toon_fragment:Iy,lights_toon_pars_fragment:Uy,lights_phong_fragment:Fy,lights_phong_pars_fragment:ky,lights_physical_fragment:Oy,lights_physical_pars_fragment:zy,lights_fragment_begin:By,lights_fragment_maps:Vy,lights_fragment_end:Hy,logdepthbuf_fragment:Gy,logdepthbuf_pars_fragment:Wy,logdepthbuf_pars_vertex:jy,logdepthbuf_vertex:Xy,map_fragment:qy,map_pars_fragment:Yy,map_particle_fragment:$y,map_particle_pars_fragment:Ky,metalnessmap_fragment:Zy,metalnessmap_pars_fragment:Qy,morphinstance_vertex:Jy,morphcolor_vertex:eS,morphnormal_vertex:tS,morphtarget_pars_vertex:nS,morphtarget_vertex:iS,normal_fragment_begin:rS,normal_fragment_maps:sS,normal_pars_fragment:aS,normal_pars_vertex:oS,normal_vertex:lS,normalmap_pars_fragment:cS,clearcoat_normal_fragment_begin:uS,clearcoat_normal_fragment_maps:dS,clearcoat_pars_fragment:fS,iridescence_pars_fragment:hS,opaque_fragment:pS,packing:mS,premultiplied_alpha_fragment:gS,project_vertex:vS,dithering_fragment:xS,dithering_pars_fragment:_S,roughnessmap_fragment:yS,roughnessmap_pars_fragment:SS,shadowmap_pars_fragment:MS,shadowmap_pars_vertex:ES,shadowmap_vertex:wS,shadowmask_pars_fragment:TS,skinbase_vertex:AS,skinning_pars_vertex:bS,skinning_vertex:CS,skinnormal_vertex:RS,specularmap_fragment:PS,specularmap_pars_fragment:NS,tonemapping_fragment:LS,tonemapping_pars_fragment:DS,transmission_fragment:IS,transmission_pars_fragment:US,uv_pars_fragment:FS,uv_pars_vertex:kS,uv_vertex:OS,worldpos_vertex:zS,background_vert:BS,background_frag:VS,backgroundCube_vert:HS,backgroundCube_frag:GS,cube_vert:WS,cube_frag:jS,depth_vert:XS,depth_frag:qS,distanceRGBA_vert:YS,distanceRGBA_frag:$S,equirect_vert:KS,equirect_frag:ZS,linedashed_vert:QS,linedashed_frag:JS,meshbasic_vert:eM,meshbasic_frag:tM,meshlambert_vert:nM,meshlambert_frag:iM,meshmatcap_vert:rM,meshmatcap_frag:sM,meshnormal_vert:aM,meshnormal_frag:oM,meshphong_vert:lM,meshphong_frag:cM,meshphysical_vert:uM,meshphysical_frag:dM,meshtoon_vert:fM,meshtoon_frag:hM,points_vert:pM,points_frag:mM,shadow_vert:gM,shadow_frag:vM,sprite_vert:xM,sprite_frag:_M},De={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},_i={basic:{uniforms:_n([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:_n([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Ct(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:_n([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:_n([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:_n([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Ct(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:_n([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:_n([De.points,De.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:_n([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:_n([De.common,De.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:_n([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:_n([De.sprite,De.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:_n([De.common,De.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:_n([De.lights,De.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};_i.physical={uniforms:_n([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const xl={r:0,b:0,g:0},Vr=new Gi,yM=new Ht;function SM(s,e,n,r,o,l,u){const d=new Ct(0);let h=l===!0?0:1,m,v,x=null,_=0,S=null;function T(D){let N=D.isScene===!0?D.background:null;return N&&N.isTexture&&(N=(D.backgroundBlurriness>0?n:e).get(N)),N}function A(D){let N=!1;const R=T(D);R===null?g(d,h):R&&R.isColor&&(g(R,1),N=!0);const K=s.xr.getEnvironmentBlendMode();K==="additive"?r.buffers.color.setClear(0,0,0,1,u):K==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||N)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(D,N){const R=T(N);R&&(R.isCubeTexture||R.mapping===kl)?(v===void 0&&(v=new Bn(new Xa(1,1,1),new Mr({name:"BackgroundCubeMaterial",uniforms:js(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(K,O,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),Vr.copy(N.backgroundRotation),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),v.material.uniforms.envMap.value=R,v.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(yM.makeRotationFromEuler(Vr)),v.material.toneMapped=Et.getTransfer(R.colorSpace)!==Lt,(x!==R||_!==R.version||S!==s.toneMapping)&&(v.material.needsUpdate=!0,x=R,_=R.version,S=s.toneMapping),v.layers.enableAll(),D.unshift(v,v.geometry,v.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new Bn(new zl(2,2),new Mr({name:"BackgroundMaterial",uniforms:js(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Sr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=Et.getTransfer(R.colorSpace)!==Lt,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(x!==R||_!==R.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,x=R,_=R.version,S=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function g(D,N){D.getRGB(xl,Rg(s)),r.buffers.color.setClear(xl.r,xl.g,xl.b,N,u)}return{getClearColor:function(){return d},setClearColor:function(D,N=1){d.set(D),h=N,g(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,g(d,h)},render:A,addToRenderList:y}}function MM(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=_(null);let l=o,u=!1;function d(C,B,le,ie,pe){let me=!1;const de=x(ie,le,B);l!==de&&(l=de,m(l.object)),me=S(C,ie,le,pe),me&&T(C,ie,le,pe),pe!==null&&e.update(pe,s.ELEMENT_ARRAY_BUFFER),(me||u)&&(u=!1,R(C,B,le,ie),pe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(pe).buffer))}function h(){return s.createVertexArray()}function m(C){return s.bindVertexArray(C)}function v(C){return s.deleteVertexArray(C)}function x(C,B,le){const ie=le.wireframe===!0;let pe=r[C.id];pe===void 0&&(pe={},r[C.id]=pe);let me=pe[B.id];me===void 0&&(me={},pe[B.id]=me);let de=me[ie];return de===void 0&&(de=_(h()),me[ie]=de),de}function _(C){const B=[],le=[],ie=[];for(let pe=0;pe<n;pe++)B[pe]=0,le[pe]=0,ie[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:le,attributeDivisors:ie,object:C,attributes:{},index:null}}function S(C,B,le,ie){const pe=l.attributes,me=B.attributes;let de=0;const he=le.getAttributes();for(const H in he)if(he[H].location>=0){const I=pe[H];let E=me[H];if(E===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(E=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(E=C.instanceColor)),I===void 0||I.attribute!==E||E&&I.data!==E.data)return!0;de++}return l.attributesNum!==de||l.index!==ie}function T(C,B,le,ie){const pe={},me=B.attributes;let de=0;const he=le.getAttributes();for(const H in he)if(he[H].location>=0){let I=me[H];I===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(I=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(I=C.instanceColor));const E={};E.attribute=I,I&&I.data&&(E.data=I.data),pe[H]=E,de++}l.attributes=pe,l.attributesNum=de,l.index=ie}function A(){const C=l.newAttributes;for(let B=0,le=C.length;B<le;B++)C[B]=0}function y(C){g(C,0)}function g(C,B){const le=l.newAttributes,ie=l.enabledAttributes,pe=l.attributeDivisors;le[C]=1,ie[C]===0&&(s.enableVertexAttribArray(C),ie[C]=1),pe[C]!==B&&(s.vertexAttribDivisor(C,B),pe[C]=B)}function D(){const C=l.newAttributes,B=l.enabledAttributes;for(let le=0,ie=B.length;le<ie;le++)B[le]!==C[le]&&(s.disableVertexAttribArray(le),B[le]=0)}function N(C,B,le,ie,pe,me,de){de===!0?s.vertexAttribIPointer(C,B,le,pe,me):s.vertexAttribPointer(C,B,le,ie,pe,me)}function R(C,B,le,ie){A();const pe=ie.attributes,me=le.getAttributes(),de=B.defaultAttributeValues;for(const he in me){const H=me[he];if(H.location>=0){let fe=pe[he];if(fe===void 0&&(he==="instanceMatrix"&&C.instanceMatrix&&(fe=C.instanceMatrix),he==="instanceColor"&&C.instanceColor&&(fe=C.instanceColor)),fe!==void 0){const I=fe.normalized,E=fe.itemSize,G=e.get(fe);if(G===void 0)continue;const ve=G.buffer,X=G.type,ee=G.bytesPerElement,ae=X===s.INT||X===s.UNSIGNED_INT||fe.gpuType===ef;if(fe.isInterleavedBufferAttribute){const Q=fe.data,ue=Q.stride,ye=fe.offset;if(Q.isInstancedInterleavedBuffer){for(let Re=0;Re<H.locationSize;Re++)g(H.location+Re,Q.meshPerAttribute);C.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Re=0;Re<H.locationSize;Re++)y(H.location+Re);s.bindBuffer(s.ARRAY_BUFFER,ve);for(let Re=0;Re<H.locationSize;Re++)N(H.location+Re,E/H.locationSize,X,I,ue*ee,(ye+E/H.locationSize*Re)*ee,ae)}else{if(fe.isInstancedBufferAttribute){for(let Q=0;Q<H.locationSize;Q++)g(H.location+Q,fe.meshPerAttribute);C.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Q=0;Q<H.locationSize;Q++)y(H.location+Q);s.bindBuffer(s.ARRAY_BUFFER,ve);for(let Q=0;Q<H.locationSize;Q++)N(H.location+Q,E/H.locationSize,X,I,E*ee,E/H.locationSize*Q*ee,ae)}}else if(de!==void 0){const I=de[he];if(I!==void 0)switch(I.length){case 2:s.vertexAttrib2fv(H.location,I);break;case 3:s.vertexAttrib3fv(H.location,I);break;case 4:s.vertexAttrib4fv(H.location,I);break;default:s.vertexAttrib1fv(H.location,I)}}}}D()}function K(){W();for(const C in r){const B=r[C];for(const le in B){const ie=B[le];for(const pe in ie)v(ie[pe].object),delete ie[pe];delete B[le]}delete r[C]}}function O(C){if(r[C.id]===void 0)return;const B=r[C.id];for(const le in B){const ie=B[le];for(const pe in ie)v(ie[pe].object),delete ie[pe];delete B[le]}delete r[C.id]}function k(C){for(const B in r){const le=r[B];if(le[C.id]===void 0)continue;const ie=le[C.id];for(const pe in ie)v(ie[pe].object),delete ie[pe];delete le[C.id]}}function W(){L(),u=!0,l!==o&&(l=o,m(l.object))}function L(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:W,resetDefaultState:L,dispose:K,releaseStatesOfGeometry:O,releaseStatesOfProgram:k,initAttributes:A,enableAttribute:y,disableUnusedAttributes:D}}function EM(s,e,n){let r;function o(m){r=m}function l(m,v){s.drawArrays(r,m,v),n.update(v,r,1)}function u(m,v,x){x!==0&&(s.drawArraysInstanced(r,m,v,x),n.update(v,r,x))}function d(m,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,x);let S=0;for(let T=0;T<x;T++)S+=v[T];n.update(S,r,1)}function h(m,v,x,_){if(x===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<m.length;T++)u(m[T],v[T],_[T]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,v,0,_,0,x);let T=0;for(let A=0;A<x;A++)T+=v[A]*_[A];n.update(T,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function wM(s,e,n,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(k){return!(k!==di&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(k){const W=k===Va&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==Hi&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==zi&&!W)}function h(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=h(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const x=n.logarithmicDepthBuffer===!0,_=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),K=T>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:x,reverseDepthBuffer:_,maxTextures:S,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:D,maxVaryings:N,maxFragmentUniforms:R,vertexTextures:K,maxSamples:O}}function TM(s){const e=this;let n=null,r=0,o=!1,l=!1;const u=new Gr,d=new ft,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const S=x.length!==0||_||r!==0||o;return o=_,r=x.length,S},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,_){n=v(x,_,0)},this.setState=function(x,_,S){const T=x.clippingPlanes,A=x.clipIntersection,y=x.clipShadows,g=s.get(x);if(!o||T===null||T.length===0||l&&!y)l?v(null):m();else{const D=l?0:r,N=D*4;let R=g.clippingState||null;h.value=R,R=v(T,_,N,S);for(let K=0;K!==N;++K)R[K]=n[K];g.clippingState=R,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=D}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(x,_,S,T){const A=x!==null?x.length:0;let y=null;if(A!==0){if(y=h.value,T!==!0||y===null){const g=S+A*4,D=_.matrixWorldInverse;d.getNormalMatrix(D),(y===null||y.length<g)&&(y=new Float32Array(g));for(let N=0,R=S;N!==A;++N,R+=4)u.copy(x[N]).applyMatrix4(D,d),u.normal.toArray(y,R),y[R+3]=u.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}function AM(s){let e=new WeakMap;function n(u,d){return d===md?u.mapping=Vs:d===gd&&(u.mapping=Hs),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===md||d===gd)if(e.has(u)){const h=e.get(u).texture;return n(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const m=new k_(h.height);return m.fromEquirectangularTexture(s,u),e.set(u,m),u.addEventListener("dispose",o),n(m.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class bM extends Pg{constructor(e=-1,n=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=o+n,h=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,d-=v*this.view.offsetY,h=d-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Fs=4,Sm=[.125,.215,.35,.446,.526,.582],Xr=20,Yu=new bM,Mm=new Ct;let $u=null,Ku=0,Zu=0,Qu=!1;const Wr=(1+Math.sqrt(5))/2,Is=1/Wr,Em=[new J(-Wr,Is,0),new J(Wr,Is,0),new J(-Is,0,Wr),new J(Is,0,Wr),new J(0,Wr,-Is),new J(0,Wr,Is),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)];class wm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,o=100){$u=this._renderer.getRenderTarget(),Ku=this._renderer.getActiveCubeFace(),Zu=this._renderer.getActiveMipmapLevel(),Qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Am(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($u,Ku,Zu),this._renderer.xr.enabled=Qu,e.scissorTest=!1,_l(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Vs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$u=this._renderer.getRenderTarget(),Ku=this._renderer.getActiveCubeFace(),Zu=this._renderer.getActiveMipmapLevel(),Qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:Va,format:di,colorSpace:Xs,depthBuffer:!1},o=Tm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tm(e,n,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=CM(l)),this._blurMaterial=RM(l,e,n)}return o}_compileMaterial(e){const n=new Bn(this._lodPlanes[0],e);this._renderer.compile(n,Yu)}_sceneToCubeUV(e,n,r,o){const d=new Zn(90,1,n,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,_=v.toneMapping;v.getClearColor(Mm),v.toneMapping=_r,v.autoClear=!1;const S=new Us({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),T=new Bn(new Xa,S);let A=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,A=!0):(S.color.copy(Mm),A=!0);for(let g=0;g<6;g++){const D=g%3;D===0?(d.up.set(0,h[g],0),d.lookAt(m[g],0,0)):D===1?(d.up.set(0,0,h[g]),d.lookAt(0,m[g],0)):(d.up.set(0,h[g],0),d.lookAt(0,0,m[g]));const N=this._cubeSize;_l(o,D*N,g>2?N:0,N,N),v.setRenderTarget(o),A&&v.render(T,d),v.render(e,d)}T.geometry.dispose(),T.material.dispose(),v.toneMapping=_,v.autoClear=x,e.background=y}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===Vs||e.mapping===Hs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=bm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Am());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new Bn(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const h=this._cubeSize;_l(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(u,Yu)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=Em[(o-l-1)%Em.length];this._blur(e,l-1,l,u,d)}n.autoClear=r}_blur(e,n,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,n,r,o,l,u,d){const h=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,x=new Bn(this._lodPlanes[o],m),_=m.uniforms,S=this._sizeLods[r]-1,T=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Xr-1),A=l/T,y=isFinite(l)?1+Math.floor(v*A):Xr;y>Xr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Xr}`);const g=[];let D=0;for(let k=0;k<Xr;++k){const W=k/A,L=Math.exp(-W*W/2);g.push(L),k===0?D+=L:k<y&&(D+=2*L)}for(let k=0;k<g.length;k++)g[k]=g[k]/D;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=g,_.latitudinal.value=u==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:N}=this;_.dTheta.value=T,_.mipInt.value=N-r;const R=this._sizeLods[o],K=3*R*(o>N-Fs?o-N+Fs:0),O=4*(this._cubeSize-R);_l(n,K,O,3*R,2*R),h.setRenderTarget(n),h.render(x,Yu)}}function CM(s){const e=[],n=[],r=[];let o=s;const l=s-Fs+1+Sm.length;for(let u=0;u<l;u++){const d=Math.pow(2,o);n.push(d);let h=1/d;u>s-Fs?h=Sm[u-s+Fs-1]:u===0&&(h=0),r.push(h);const m=1/(d-2),v=-m,x=1+m,_=[v,v,x,v,x,x,v,v,x,x,v,x],S=6,T=6,A=3,y=2,g=1,D=new Float32Array(A*T*S),N=new Float32Array(y*T*S),R=new Float32Array(g*T*S);for(let O=0;O<S;O++){const k=O%3*2/3-1,W=O>2?0:-1,L=[k,W,0,k+2/3,W,0,k+2/3,W+1,0,k,W,0,k+2/3,W+1,0,k,W+1,0];D.set(L,A*T*O),N.set(_,y*T*O);const C=[O,O,O,O,O,O];R.set(C,g*T*O)}const K=new Dn;K.setAttribute("position",new Qn(D,A)),K.setAttribute("uv",new Qn(N,y)),K.setAttribute("faceIndex",new Qn(R,g)),e.push(K),o>Fs&&o--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Tm(s,e,n){const r=new Kr(s,e,n);return r.texture.mapping=kl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function _l(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function RM(s,e,n){const r=new Float32Array(Xr),o=new J(0,1,0);return new Mr({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:lf(),fragmentShader:`

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Am(){return new Mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lf(),fragmentShader:`

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function bm(){return new Mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function lf(){return`

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
	`}function PM(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const h=d.mapping,m=h===md||h===gd,v=h===Vs||h===Hs;if(m||v){let x=e.get(d);const _=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return n===null&&(n=new wm(s)),x=m?n.fromEquirectangular(d,x):n.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{const S=d.image;return m&&S&&S.height>0||v&&S&&o(S)?(n===null&&(n=new wm(s)),x=m?n.fromEquirectangular(d):n.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",l),x.texture):null}}}return d}function o(d){let h=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&h++;return h===m}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function NM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Ua("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function LM(s,e,n,r){const o={},l=new WeakMap;function u(x){const _=x.target;_.index!==null&&e.remove(_.index);for(const T in _.attributes)e.remove(_.attributes[T]);for(const T in _.morphAttributes){const A=_.morphAttributes[T];for(let y=0,g=A.length;y<g;y++)e.remove(A[y])}_.removeEventListener("dispose",u),delete o[_.id];const S=l.get(_);S&&(e.remove(S),l.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function d(x,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,n.memory.geometries++),_}function h(x){const _=x.attributes;for(const T in _)e.update(_[T],s.ARRAY_BUFFER);const S=x.morphAttributes;for(const T in S){const A=S[T];for(let y=0,g=A.length;y<g;y++)e.update(A[y],s.ARRAY_BUFFER)}}function m(x){const _=[],S=x.index,T=x.attributes.position;let A=0;if(S!==null){const D=S.array;A=S.version;for(let N=0,R=D.length;N<R;N+=3){const K=D[N+0],O=D[N+1],k=D[N+2];_.push(K,O,O,k,k,K)}}else if(T!==void 0){const D=T.array;A=T.version;for(let N=0,R=D.length/3-1;N<R;N+=3){const K=N+0,O=N+1,k=N+2;_.push(K,O,O,k,k,K)}}else return;const y=new(Mg(_)?Cg:bg)(_,1);y.version=A;const g=l.get(x);g&&e.remove(g),l.set(x,y)}function v(x){const _=l.get(x);if(_){const S=x.index;S!==null&&_.version<S.version&&m(x)}else m(x);return l.get(x)}return{get:d,update:h,getWireframeAttribute:v}}function DM(s,e,n){let r;function o(_){r=_}let l,u;function d(_){l=_.type,u=_.bytesPerElement}function h(_,S){s.drawElements(r,S,l,_*u),n.update(S,r,1)}function m(_,S,T){T!==0&&(s.drawElementsInstanced(r,S,l,_*u,T),n.update(S,r,T))}function v(_,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,_,0,T);let y=0;for(let g=0;g<T;g++)y+=S[g];n.update(y,r,1)}function x(_,S,T,A){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<_.length;g++)m(_[g]/u,S[g],A[g]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,l,_,0,A,0,T);let g=0;for(let D=0;D<T;D++)g+=S[D]*A[D];n.update(g,r,1)}}this.setMode=o,this.setIndex=d,this.render=h,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=x}function IM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=d*(l/3);break;case s.LINES:n.lines+=d*(l/2);break;case s.LINE_STRIP:n.lines+=d*(l-1);break;case s.LINE_LOOP:n.lines+=d*l;break;case s.POINTS:n.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function UM(s,e,n){const r=new WeakMap,o=new Wt;function l(u,d,h){const m=u.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=v!==void 0?v.length:0;let _=r.get(d);if(_===void 0||_.count!==x){let C=function(){W.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var S=C;_!==void 0&&_.texture.dispose();const T=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let R=0;T===!0&&(R=1),A===!0&&(R=2),y===!0&&(R=3);let K=d.attributes.position.count*R,O=1;K>e.maxTextureSize&&(O=Math.ceil(K/e.maxTextureSize),K=e.maxTextureSize);const k=new Float32Array(K*O*4*x),W=new wg(k,K,O,x);W.type=zi,W.needsUpdate=!0;const L=R*4;for(let B=0;B<x;B++){const le=g[B],ie=D[B],pe=N[B],me=K*O*4*B;for(let de=0;de<le.count;de++){const he=de*L;T===!0&&(o.fromBufferAttribute(le,de),k[me+he+0]=o.x,k[me+he+1]=o.y,k[me+he+2]=o.z,k[me+he+3]=0),A===!0&&(o.fromBufferAttribute(ie,de),k[me+he+4]=o.x,k[me+he+5]=o.y,k[me+he+6]=o.z,k[me+he+7]=0),y===!0&&(o.fromBufferAttribute(pe,de),k[me+he+8]=o.x,k[me+he+9]=o.y,k[me+he+10]=o.z,k[me+he+11]=pe.itemSize===4?o.w:1)}}_={count:x,texture:W,size:new Rt(K,O)},r.set(d,_),d.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let T=0;for(let y=0;y<m.length;y++)T+=m[y];const A=d.morphTargetsRelative?1:1-T;h.getUniforms().setValue(s,"morphTargetBaseInfluence",A),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",_.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:l}}function FM(s,e,n,r){let o=new WeakMap;function l(h){const m=r.render.frame,v=h.geometry,x=e.get(h,v);if(o.get(x)!==m&&(e.update(x),o.set(x,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),o.get(h)!==m&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),o.set(h,m))),h.isSkinnedMesh){const _=h.skeleton;o.get(_)!==m&&(_.update(),o.set(_,m))}return x}function u(){o=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:l,dispose:u}}class Ig extends Ln{constructor(e,n,r,o,l,u,d,h,m,v=Os){if(v!==Os&&v!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===Os&&(r=$r),r===void 0&&v===Ws&&(r=Gs),super(null,o,l,u,d,h,v,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:fi,this.minFilter=h!==void 0?h:fi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Ug=new Ln,Cm=new Ig(1,1),Fg=new wg,kg=new S_,Og=new Ng,Rm=[],Pm=[],Nm=new Float32Array(16),Lm=new Float32Array(9),Dm=new Float32Array(4);function $s(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let l=Rm[o];if(l===void 0&&(l=new Float32Array(o),Rm[o]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=n,s[u].toArray(l,d)}return l}function Zt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Qt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Bl(s,e){let n=Pm[e];n===void 0&&(n=new Int32Array(e),Pm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function kM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function OM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2fv(this.addr,e),Qt(n,e)}}function zM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Zt(n,e))return;s.uniform3fv(this.addr,e),Qt(n,e)}}function BM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4fv(this.addr,e),Qt(n,e)}}function VM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;Dm.set(r),s.uniformMatrix2fv(this.addr,!1,Dm),Qt(n,r)}}function HM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;Lm.set(r),s.uniformMatrix3fv(this.addr,!1,Lm),Qt(n,r)}}function GM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;Nm.set(r),s.uniformMatrix4fv(this.addr,!1,Nm),Qt(n,r)}}function WM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function jM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2iv(this.addr,e),Qt(n,e)}}function XM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;s.uniform3iv(this.addr,e),Qt(n,e)}}function qM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4iv(this.addr,e),Qt(n,e)}}function YM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function $M(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2uiv(this.addr,e),Qt(n,e)}}function KM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;s.uniform3uiv(this.addr,e),Qt(n,e)}}function ZM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4uiv(this.addr,e),Qt(n,e)}}function QM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Cm.compareFunction=Sg,l=Cm):l=Ug,n.setTexture2D(e||l,o)}function JM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||kg,o)}function eE(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||Og,o)}function tE(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||Fg,o)}function nE(s){switch(s){case 5126:return kM;case 35664:return OM;case 35665:return zM;case 35666:return BM;case 35674:return VM;case 35675:return HM;case 35676:return GM;case 5124:case 35670:return WM;case 35667:case 35671:return jM;case 35668:case 35672:return XM;case 35669:case 35673:return qM;case 5125:return YM;case 36294:return $M;case 36295:return KM;case 36296:return ZM;case 35678:case 36198:case 36298:case 36306:case 35682:return QM;case 35679:case 36299:case 36307:return JM;case 35680:case 36300:case 36308:case 36293:return eE;case 36289:case 36303:case 36311:case 36292:return tE}}function iE(s,e){s.uniform1fv(this.addr,e)}function rE(s,e){const n=$s(e,this.size,2);s.uniform2fv(this.addr,n)}function sE(s,e){const n=$s(e,this.size,3);s.uniform3fv(this.addr,n)}function aE(s,e){const n=$s(e,this.size,4);s.uniform4fv(this.addr,n)}function oE(s,e){const n=$s(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function lE(s,e){const n=$s(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function cE(s,e){const n=$s(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function uE(s,e){s.uniform1iv(this.addr,e)}function dE(s,e){s.uniform2iv(this.addr,e)}function fE(s,e){s.uniform3iv(this.addr,e)}function hE(s,e){s.uniform4iv(this.addr,e)}function pE(s,e){s.uniform1uiv(this.addr,e)}function mE(s,e){s.uniform2uiv(this.addr,e)}function gE(s,e){s.uniform3uiv(this.addr,e)}function vE(s,e){s.uniform4uiv(this.addr,e)}function xE(s,e,n){const r=this.cache,o=e.length,l=Bl(n,o);Zt(r,l)||(s.uniform1iv(this.addr,l),Qt(r,l));for(let u=0;u!==o;++u)n.setTexture2D(e[u]||Ug,l[u])}function _E(s,e,n){const r=this.cache,o=e.length,l=Bl(n,o);Zt(r,l)||(s.uniform1iv(this.addr,l),Qt(r,l));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||kg,l[u])}function yE(s,e,n){const r=this.cache,o=e.length,l=Bl(n,o);Zt(r,l)||(s.uniform1iv(this.addr,l),Qt(r,l));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||Og,l[u])}function SE(s,e,n){const r=this.cache,o=e.length,l=Bl(n,o);Zt(r,l)||(s.uniform1iv(this.addr,l),Qt(r,l));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||Fg,l[u])}function ME(s){switch(s){case 5126:return iE;case 35664:return rE;case 35665:return sE;case 35666:return aE;case 35674:return oE;case 35675:return lE;case 35676:return cE;case 5124:case 35670:return uE;case 35667:case 35671:return dE;case 35668:case 35672:return fE;case 35669:case 35673:return hE;case 5125:return pE;case 36294:return mE;case 36295:return gE;case 36296:return vE;case 35678:case 36198:case 36298:case 36306:case 35682:return xE;case 35679:case 36299:case 36307:return _E;case 35680:case 36300:case 36308:case 36293:return yE;case 36289:case 36303:case 36311:case 36292:return SE}}class EE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=nE(n.type)}}class wE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=ME(n.type)}}class TE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,n[d.id],r)}}}const Ju=/(\w+)(\])?(\[|\.)?/g;function Im(s,e){s.seq.push(e),s.map[e.id]=e}function AE(s,e,n){const r=s.name,o=r.length;for(Ju.lastIndex=0;;){const l=Ju.exec(r),u=Ju.lastIndex;let d=l[1];const h=l[2]==="]",m=l[3];if(h&&(d=d|0),m===void 0||m==="["&&u+2===o){Im(n,m===void 0?new EE(d,s,e):new wE(d,s,e));break}else{let x=n.map[d];x===void 0&&(x=new TE(d),Im(n,x)),n=x}}}class Nl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(n,o),u=e.getUniformLocation(n,l.name);AE(l,u,this)}}setValue(e,n,r,o){const l=this.map[n];l!==void 0&&l.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let l=0,u=n.length;l!==u;++l){const d=n[l],h=r[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function Um(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const bE=37297;let CE=0;function RE(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let u=o;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return r.join(`
`)}const Fm=new ft;function PE(s){Et._getMatrix(Fm,Et.workingColorSpace,s);const e=`mat3( ${Fm.elements.map(n=>n.toFixed(4))} )`;switch(Et.getTransfer(s)){case Ol:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function km(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return n.toUpperCase()+`

`+o+`

`+RE(s.getShaderSource(e),u)}else return o}function NE(s,e){const n=PE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function LE(s,e){let n;switch(e){case qx:n="Linear";break;case Yx:n="Reinhard";break;case $x:n="Cineon";break;case Kx:n="ACESFilmic";break;case Qx:n="AgX";break;case Jx:n="Neutral";break;case Zx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const yl=new J;function DE(){Et.getLuminanceCoefficients(yl);const s=yl.x.toFixed(4),e=yl.y.toFixed(4),n=yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fa).join(`
`)}function UE(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function FE(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),n[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return n}function Fa(s){return s!==""}function Om(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xd(s){return s.replace(kE,zE)}const OE=new Map;function zE(s,e){let n=pt[e];if(n===void 0){const r=OE.get(e);if(r!==void 0)n=pt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Xd(n)}const BE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bm(s){return s.replace(BE,VE)}function VE(s,e,n,r){let o="";for(let l=parseInt(e);l<parseInt(n);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Vm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function HE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===lg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ax?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function GE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Vs:case Hs:e="ENVMAP_TYPE_CUBE";break;case kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function WE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function jE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case cg:e="ENVMAP_BLENDING_MULTIPLY";break;case jx:e="ENVMAP_BLENDING_MIX";break;case Xx:e="ENVMAP_BLENDING_ADD";break}return e}function XE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function qE(s,e,n,r){const o=s.getContext(),l=n.defines;let u=n.vertexShader,d=n.fragmentShader;const h=HE(n),m=GE(n),v=WE(n),x=jE(n),_=XE(n),S=IE(n),T=UE(l),A=o.createProgram();let y,g,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Fa).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Fa).join(`
`),g.length>0&&(g+=`
`)):(y=[Vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fa).join(`
`),g=[Vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_r?"#define TONE_MAPPING":"",n.toneMapping!==_r?pt.tonemapping_pars_fragment:"",n.toneMapping!==_r?LE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,NE("linearToOutputTexel",n.outputColorSpace),DE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Fa).join(`
`)),u=Xd(u),u=Om(u,n),u=zm(u,n),d=Xd(d),d=Om(d,n),d=zm(d,n),u=Bm(u),d=Bm(d),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",n.glslVersion===em?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===em?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const N=D+y+u,R=D+g+d,K=Um(o,o.VERTEX_SHADER,N),O=Um(o,o.FRAGMENT_SHADER,R);o.attachShader(A,K),o.attachShader(A,O),n.index0AttributeName!==void 0?o.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function k(B){if(s.debug.checkShaderErrors){const le=o.getProgramInfoLog(A).trim(),ie=o.getShaderInfoLog(K).trim(),pe=o.getShaderInfoLog(O).trim();let me=!0,de=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(me=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,A,K,O);else{const he=km(o,K,"vertex"),H=km(o,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+le+`
`+he+`
`+H)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(ie===""||pe==="")&&(de=!1);de&&(B.diagnostics={runnable:me,programLog:le,vertexShader:{log:ie,prefix:y},fragmentShader:{log:pe,prefix:g}})}o.deleteShader(K),o.deleteShader(O),W=new Nl(o,A),L=FE(o,A)}let W;this.getUniforms=function(){return W===void 0&&k(this),W};let L;this.getAttributes=function(){return L===void 0&&k(this),L};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(A,bE)),C},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=CE++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=K,this.fragmentShader=O,this}let YE=0;class $E{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new KE(e),n.set(e,r)),r}}class KE{constructor(e){this.id=YE++,this.code=e,this.usedTimes=0}}function ZE(s,e,n,r,o,l,u){const d=new Tg,h=new $E,m=new Set,v=[],x=o.logarithmicDepthBuffer,_=o.vertexTextures;let S=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(L){return m.add(L),L===0?"uv":`uv${L}`}function y(L,C,B,le,ie){const pe=le.fog,me=ie.geometry,de=L.isMeshStandardMaterial?le.environment:null,he=(L.isMeshStandardMaterial?n:e).get(L.envMap||de),H=he&&he.mapping===kl?he.image.height:null,fe=T[L.type];L.precision!==null&&(S=o.getMaxPrecision(L.precision),S!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",S,"instead."));const I=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,E=I!==void 0?I.length:0;let G=0;me.morphAttributes.position!==void 0&&(G=1),me.morphAttributes.normal!==void 0&&(G=2),me.morphAttributes.color!==void 0&&(G=3);let ve,X,ee,ae;if(fe){const St=_i[fe];ve=St.vertexShader,X=St.fragmentShader}else ve=L.vertexShader,X=L.fragmentShader,h.update(L),ee=h.getVertexShaderID(L),ae=h.getFragmentShaderID(L);const Q=s.getRenderTarget(),ue=s.state.buffers.depth.getReversed(),ye=ie.isInstancedMesh===!0,Re=ie.isBatchedMesh===!0,Ze=!!L.map,Pe=!!L.matcap,Je=!!he,z=!!L.aoMap,yt=!!L.lightMap,Qe=!!L.bumpMap,et=!!L.normalMap,Ve=!!L.displacementMap,ht=!!L.emissiveMap,Oe=!!L.metalnessMap,U=!!L.roughnessMap,b=L.anisotropy>0,ne=L.clearcoat>0,_e=L.dispersion>0,Se=L.iridescence>0,ge=L.sheen>0,We=L.transmission>0,Ne=b&&!!L.anisotropyMap,Fe=ne&&!!L.clearcoatMap,ut=ne&&!!L.clearcoatNormalMap,we=ne&&!!L.clearcoatRoughnessMap,ze=Se&&!!L.iridescenceMap,tt=Se&&!!L.iridescenceThicknessMap,rt=ge&&!!L.sheenColorMap,He=ge&&!!L.sheenRoughnessMap,mt=!!L.specularMap,lt=!!L.specularColorMap,bt=!!L.specularIntensityMap,q=We&&!!L.transmissionMap,Le=We&&!!L.thicknessMap,ce=!!L.gradientMap,xe=!!L.alphaMap,Ue=L.alphaTest>0,Ie=!!L.alphaHash,ct=!!L.extensions;let Ut=_r;L.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ut=s.toneMapping);const qt={shaderID:fe,shaderType:L.type,shaderName:L.name,vertexShader:ve,fragmentShader:X,defines:L.defines,customVertexShaderID:ee,customFragmentShaderID:ae,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:S,batching:Re,batchingColor:Re&&ie._colorsTexture!==null,instancing:ye,instancingColor:ye&&ie.instanceColor!==null,instancingMorph:ye&&ie.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:Q===null?s.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Xs,alphaToCoverage:!!L.alphaToCoverage,map:Ze,matcap:Pe,envMap:Je,envMapMode:Je&&he.mapping,envMapCubeUVHeight:H,aoMap:z,lightMap:yt,bumpMap:Qe,normalMap:et,displacementMap:_&&Ve,emissiveMap:ht,normalMapObjectSpace:et&&L.normalMapType===r_,normalMapTangentSpace:et&&L.normalMapType===i_,metalnessMap:Oe,roughnessMap:U,anisotropy:b,anisotropyMap:Ne,clearcoat:ne,clearcoatMap:Fe,clearcoatNormalMap:ut,clearcoatRoughnessMap:we,dispersion:_e,iridescence:Se,iridescenceMap:ze,iridescenceThicknessMap:tt,sheen:ge,sheenColorMap:rt,sheenRoughnessMap:He,specularMap:mt,specularColorMap:lt,specularIntensityMap:bt,transmission:We,transmissionMap:q,thicknessMap:Le,gradientMap:ce,opaque:L.transparent===!1&&L.blending===ks&&L.alphaToCoverage===!1,alphaMap:xe,alphaTest:Ue,alphaHash:Ie,combine:L.combine,mapUv:Ze&&A(L.map.channel),aoMapUv:z&&A(L.aoMap.channel),lightMapUv:yt&&A(L.lightMap.channel),bumpMapUv:Qe&&A(L.bumpMap.channel),normalMapUv:et&&A(L.normalMap.channel),displacementMapUv:Ve&&A(L.displacementMap.channel),emissiveMapUv:ht&&A(L.emissiveMap.channel),metalnessMapUv:Oe&&A(L.metalnessMap.channel),roughnessMapUv:U&&A(L.roughnessMap.channel),anisotropyMapUv:Ne&&A(L.anisotropyMap.channel),clearcoatMapUv:Fe&&A(L.clearcoatMap.channel),clearcoatNormalMapUv:ut&&A(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&A(L.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&A(L.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&A(L.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&A(L.sheenColorMap.channel),sheenRoughnessMapUv:He&&A(L.sheenRoughnessMap.channel),specularMapUv:mt&&A(L.specularMap.channel),specularColorMapUv:lt&&A(L.specularColorMap.channel),specularIntensityMapUv:bt&&A(L.specularIntensityMap.channel),transmissionMapUv:q&&A(L.transmissionMap.channel),thicknessMapUv:Le&&A(L.thicknessMap.channel),alphaMapUv:xe&&A(L.alphaMap.channel),vertexTangents:!!me.attributes.tangent&&(et||b),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,pointsUvs:ie.isPoints===!0&&!!me.attributes.uv&&(Ze||xe),fog:!!pe,useFog:L.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:ue,skinning:ie.isSkinnedMesh===!0,morphTargets:me.morphAttributes.position!==void 0,morphNormals:me.morphAttributes.normal!==void 0,morphColors:me.morphAttributes.color!==void 0,morphTargetsCount:E,morphTextureStride:G,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:L.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Ze&&L.map.isVideoTexture===!0&&Et.getTransfer(L.map.colorSpace)===Lt,decodeVideoTextureEmissive:ht&&L.emissiveMap.isVideoTexture===!0&&Et.getTransfer(L.emissiveMap.colorSpace)===Lt,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===Oi,flipSided:L.side===Nn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:ct&&L.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&L.extensions.multiDraw===!0||Re)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return qt.vertexUv1s=m.has(1),qt.vertexUv2s=m.has(2),qt.vertexUv3s=m.has(3),m.clear(),qt}function g(L){const C=[];if(L.shaderID?C.push(L.shaderID):(C.push(L.customVertexShaderID),C.push(L.customFragmentShaderID)),L.defines!==void 0)for(const B in L.defines)C.push(B),C.push(L.defines[B]);return L.isRawShaderMaterial===!1&&(D(C,L),N(C,L),C.push(s.outputColorSpace)),C.push(L.customProgramCacheKey),C.join()}function D(L,C){L.push(C.precision),L.push(C.outputColorSpace),L.push(C.envMapMode),L.push(C.envMapCubeUVHeight),L.push(C.mapUv),L.push(C.alphaMapUv),L.push(C.lightMapUv),L.push(C.aoMapUv),L.push(C.bumpMapUv),L.push(C.normalMapUv),L.push(C.displacementMapUv),L.push(C.emissiveMapUv),L.push(C.metalnessMapUv),L.push(C.roughnessMapUv),L.push(C.anisotropyMapUv),L.push(C.clearcoatMapUv),L.push(C.clearcoatNormalMapUv),L.push(C.clearcoatRoughnessMapUv),L.push(C.iridescenceMapUv),L.push(C.iridescenceThicknessMapUv),L.push(C.sheenColorMapUv),L.push(C.sheenRoughnessMapUv),L.push(C.specularMapUv),L.push(C.specularColorMapUv),L.push(C.specularIntensityMapUv),L.push(C.transmissionMapUv),L.push(C.thicknessMapUv),L.push(C.combine),L.push(C.fogExp2),L.push(C.sizeAttenuation),L.push(C.morphTargetsCount),L.push(C.morphAttributeCount),L.push(C.numDirLights),L.push(C.numPointLights),L.push(C.numSpotLights),L.push(C.numSpotLightMaps),L.push(C.numHemiLights),L.push(C.numRectAreaLights),L.push(C.numDirLightShadows),L.push(C.numPointLightShadows),L.push(C.numSpotLightShadows),L.push(C.numSpotLightShadowsWithMaps),L.push(C.numLightProbes),L.push(C.shadowMapType),L.push(C.toneMapping),L.push(C.numClippingPlanes),L.push(C.numClipIntersection),L.push(C.depthPacking)}function N(L,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),L.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),L.push(d.mask)}function R(L){const C=T[L.type];let B;if(C){const le=_i[C];B=D_.clone(le.uniforms)}else B=L.uniforms;return B}function K(L,C){let B;for(let le=0,ie=v.length;le<ie;le++){const pe=v[le];if(pe.cacheKey===C){B=pe,++B.usedTimes;break}}return B===void 0&&(B=new qE(s,C,L,l),v.push(B)),B}function O(L){if(--L.usedTimes===0){const C=v.indexOf(L);v[C]=v[v.length-1],v.pop(),L.destroy()}}function k(L){h.remove(L)}function W(){h.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:R,acquireProgram:K,releaseProgram:O,releaseShaderCache:k,programs:v,dispose:W}}function QE(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function o(u,d,h){s.get(u)[d]=h}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:l}}function JE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Hm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Gm(){const s=[];let e=0;const n=[],r=[],o=[];function l(){e=0,n.length=0,r.length=0,o.length=0}function u(x,_,S,T,A,y){let g=s[e];return g===void 0?(g={id:x.id,object:x,geometry:_,material:S,groupOrder:T,renderOrder:x.renderOrder,z:A,group:y},s[e]=g):(g.id=x.id,g.object=x,g.geometry=_,g.material=S,g.groupOrder=T,g.renderOrder=x.renderOrder,g.z=A,g.group=y),e++,g}function d(x,_,S,T,A,y){const g=u(x,_,S,T,A,y);S.transmission>0?r.push(g):S.transparent===!0?o.push(g):n.push(g)}function h(x,_,S,T,A,y){const g=u(x,_,S,T,A,y);S.transmission>0?r.unshift(g):S.transparent===!0?o.unshift(g):n.unshift(g)}function m(x,_){n.length>1&&n.sort(x||JE),r.length>1&&r.sort(_||Hm),o.length>1&&o.sort(_||Hm)}function v(){for(let x=e,_=s.length;x<_;x++){const S=s[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:o,init:l,push:d,unshift:h,finish:v,sort:m}}function e1(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new Gm,s.set(r,[u])):o>=l.length?(u=new Gm,l.push(u)):u=l[o],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function t1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new J,color:new Ct};break;case"SpotLight":n={position:new J,direction:new J,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new J,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":n={direction:new J,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":n={color:new Ct,position:new J,halfWidth:new J,halfHeight:new J};break}return s[e.id]=n,n}}}function n1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let i1=0;function r1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function s1(s){const e=new t1,n=n1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new J);const o=new J,l=new Ht,u=new Ht;function d(m){let v=0,x=0,_=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let S=0,T=0,A=0,y=0,g=0,D=0,N=0,R=0,K=0,O=0,k=0;m.sort(r1);for(let L=0,C=m.length;L<C;L++){const B=m[L],le=B.color,ie=B.intensity,pe=B.distance,me=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)v+=le.r*ie,x+=le.g*ie,_+=le.b*ie;else if(B.isLightProbe){for(let de=0;de<9;de++)r.probe[de].addScaledVector(B.sh.coefficients[de],ie);k++}else if(B.isDirectionalLight){const de=e.get(B);if(de.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const he=B.shadow,H=n.get(B);H.shadowIntensity=he.intensity,H.shadowBias=he.bias,H.shadowNormalBias=he.normalBias,H.shadowRadius=he.radius,H.shadowMapSize=he.mapSize,r.directionalShadow[S]=H,r.directionalShadowMap[S]=me,r.directionalShadowMatrix[S]=B.shadow.matrix,D++}r.directional[S]=de,S++}else if(B.isSpotLight){const de=e.get(B);de.position.setFromMatrixPosition(B.matrixWorld),de.color.copy(le).multiplyScalar(ie),de.distance=pe,de.coneCos=Math.cos(B.angle),de.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),de.decay=B.decay,r.spot[A]=de;const he=B.shadow;if(B.map&&(r.spotLightMap[K]=B.map,K++,he.updateMatrices(B),B.castShadow&&O++),r.spotLightMatrix[A]=he.matrix,B.castShadow){const H=n.get(B);H.shadowIntensity=he.intensity,H.shadowBias=he.bias,H.shadowNormalBias=he.normalBias,H.shadowRadius=he.radius,H.shadowMapSize=he.mapSize,r.spotShadow[A]=H,r.spotShadowMap[A]=me,R++}A++}else if(B.isRectAreaLight){const de=e.get(B);de.color.copy(le).multiplyScalar(ie),de.halfWidth.set(B.width*.5,0,0),de.halfHeight.set(0,B.height*.5,0),r.rectArea[y]=de,y++}else if(B.isPointLight){const de=e.get(B);if(de.color.copy(B.color).multiplyScalar(B.intensity),de.distance=B.distance,de.decay=B.decay,B.castShadow){const he=B.shadow,H=n.get(B);H.shadowIntensity=he.intensity,H.shadowBias=he.bias,H.shadowNormalBias=he.normalBias,H.shadowRadius=he.radius,H.shadowMapSize=he.mapSize,H.shadowCameraNear=he.camera.near,H.shadowCameraFar=he.camera.far,r.pointShadow[T]=H,r.pointShadowMap[T]=me,r.pointShadowMatrix[T]=B.shadow.matrix,N++}r.point[T]=de,T++}else if(B.isHemisphereLight){const de=e.get(B);de.skyColor.copy(B.color).multiplyScalar(ie),de.groundColor.copy(B.groundColor).multiplyScalar(ie),r.hemi[g]=de,g++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=x,r.ambient[2]=_;const W=r.hash;(W.directionalLength!==S||W.pointLength!==T||W.spotLength!==A||W.rectAreaLength!==y||W.hemiLength!==g||W.numDirectionalShadows!==D||W.numPointShadows!==N||W.numSpotShadows!==R||W.numSpotMaps!==K||W.numLightProbes!==k)&&(r.directional.length=S,r.spot.length=A,r.rectArea.length=y,r.point.length=T,r.hemi.length=g,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=R+K-O,r.spotLightMap.length=K,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=k,W.directionalLength=S,W.pointLength=T,W.spotLength=A,W.rectAreaLength=y,W.hemiLength=g,W.numDirectionalShadows=D,W.numPointShadows=N,W.numSpotShadows=R,W.numSpotMaps=K,W.numLightProbes=k,r.version=i1++)}function h(m,v){let x=0,_=0,S=0,T=0,A=0;const y=v.matrixWorldInverse;for(let g=0,D=m.length;g<D;g++){const N=m[g];if(N.isDirectionalLight){const R=r.directional[x];R.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),x++}else if(N.isSpotLight){const R=r.spot[S];R.position.setFromMatrixPosition(N.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),S++}else if(N.isRectAreaLight){const R=r.rectArea[T];R.position.setFromMatrixPosition(N.matrixWorld),R.position.applyMatrix4(y),u.identity(),l.copy(N.matrixWorld),l.premultiply(y),u.extractRotation(l),R.halfWidth.set(N.width*.5,0,0),R.halfHeight.set(0,N.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),T++}else if(N.isPointLight){const R=r.point[_];R.position.setFromMatrixPosition(N.matrixWorld),R.position.applyMatrix4(y),_++}else if(N.isHemisphereLight){const R=r.hemi[A];R.direction.setFromMatrixPosition(N.matrixWorld),R.direction.transformDirection(y),A++}}}return{setup:d,setupView:h,state:r}}function Wm(s){const e=new s1(s),n=[],r=[];function o(v){m.camera=v,n.length=0,r.length=0}function l(v){n.push(v)}function u(v){r.push(v)}function d(){e.setup(n)}function h(v){e.setupView(n,v)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:d,setupLightsView:h,pushLight:l,pushShadow:u}}function a1(s){let e=new WeakMap;function n(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new Wm(s),e.set(o,[d])):l>=u.length?(d=new Wm(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:n,dispose:r}}class o1 extends Ys{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=t_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class l1 extends Ys{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const c1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u1=`uniform sampler2D shadow_pass;
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
}`;function d1(s,e,n){let r=new Lg;const o=new Rt,l=new Rt,u=new Wt,d=new o1({depthPacking:n_}),h=new l1,m={},v=n.maxTextureSize,x={[Sr]:Nn,[Nn]:Sr,[Oi]:Oi},_=new Mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:c1,fragmentShader:u1}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const T=new Dn;T.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Bn(T,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lg;let g=this.type;this.render=function(O,k,W){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;const L=s.getRenderTarget(),C=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),le=s.state;le.setBlending(xr),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const ie=g!==ki&&this.type===ki,pe=g===ki&&this.type!==ki;for(let me=0,de=O.length;me<de;me++){const he=O[me],H=he.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const fe=H.getFrameExtents();if(o.multiply(fe),l.copy(H.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/fe.x),o.x=l.x*fe.x,H.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/fe.y),o.y=l.y*fe.y,H.mapSize.y=l.y)),H.map===null||ie===!0||pe===!0){const E=this.type!==ki?{minFilter:fi,magFilter:fi}:{};H.map!==null&&H.map.dispose(),H.map=new Kr(o.x,o.y,E),H.map.texture.name=he.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const I=H.getViewportCount();for(let E=0;E<I;E++){const G=H.getViewport(E);u.set(l.x*G.x,l.y*G.y,l.x*G.z,l.y*G.w),le.viewport(u),H.updateMatrices(he,E),r=H.getFrustum(),R(k,W,H.camera,he,this.type)}H.isPointLightShadow!==!0&&this.type===ki&&D(H,W),H.needsUpdate=!1}g=this.type,y.needsUpdate=!1,s.setRenderTarget(L,C,B)};function D(O,k){const W=e.update(A);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Kr(o.x,o.y)),_.uniforms.shadow_pass.value=O.map.texture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(k,null,W,_,A,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(k,null,W,S,A,null)}function N(O,k,W,L){let C=null;const B=W.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(B!==void 0)C=B;else if(C=W.isPointLight===!0?h:d,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const le=C.uuid,ie=k.uuid;let pe=m[le];pe===void 0&&(pe={},m[le]=pe);let me=pe[ie];me===void 0&&(me=C.clone(),pe[ie]=me,k.addEventListener("dispose",K)),C=me}if(C.visible=k.visible,C.wireframe=k.wireframe,L===ki?C.side=k.shadowSide!==null?k.shadowSide:k.side:C.side=k.shadowSide!==null?k.shadowSide:x[k.side],C.alphaMap=k.alphaMap,C.alphaTest=k.alphaTest,C.map=k.map,C.clipShadows=k.clipShadows,C.clippingPlanes=k.clippingPlanes,C.clipIntersection=k.clipIntersection,C.displacementMap=k.displacementMap,C.displacementScale=k.displacementScale,C.displacementBias=k.displacementBias,C.wireframeLinewidth=k.wireframeLinewidth,C.linewidth=k.linewidth,W.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const le=s.properties.get(C);le.light=W}return C}function R(O,k,W,L,C){if(O.visible===!1)return;if(O.layers.test(k.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&C===ki)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,O.matrixWorld);const ie=e.update(O),pe=O.material;if(Array.isArray(pe)){const me=ie.groups;for(let de=0,he=me.length;de<he;de++){const H=me[de],fe=pe[H.materialIndex];if(fe&&fe.visible){const I=N(O,fe,L,C);O.onBeforeShadow(s,O,k,W,ie,I,H),s.renderBufferDirect(W,null,ie,I,O,H),O.onAfterShadow(s,O,k,W,ie,I,H)}}}else if(pe.visible){const me=N(O,pe,L,C);O.onBeforeShadow(s,O,k,W,ie,me,null),s.renderBufferDirect(W,null,ie,me,O,null),O.onAfterShadow(s,O,k,W,ie,me,null)}}const le=O.children;for(let ie=0,pe=le.length;ie<pe;ie++)R(le[ie],k,W,L,C)}function K(O){O.target.removeEventListener("dispose",K);for(const W in m){const L=m[W],C=O.target.uuid;C in L&&(L[C].dispose(),delete L[C])}}}const f1={[ld]:cd,[ud]:hd,[dd]:pd,[Bs]:fd,[cd]:ld,[hd]:ud,[pd]:dd,[fd]:Bs};function h1(s,e){function n(){let q=!1;const Le=new Wt;let ce=null;const xe=new Wt(0,0,0,0);return{setMask:function(Ue){ce!==Ue&&!q&&(s.colorMask(Ue,Ue,Ue,Ue),ce=Ue)},setLocked:function(Ue){q=Ue},setClear:function(Ue,Ie,ct,Ut,qt){qt===!0&&(Ue*=Ut,Ie*=Ut,ct*=Ut),Le.set(Ue,Ie,ct,Ut),xe.equals(Le)===!1&&(s.clearColor(Ue,Ie,ct,Ut),xe.copy(Le))},reset:function(){q=!1,ce=null,xe.set(-1,0,0,0)}}}function r(){let q=!1,Le=!1,ce=null,xe=null,Ue=null;return{setReversed:function(Ie){if(Le!==Ie){const ct=e.get("EXT_clip_control");Le?ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.ZERO_TO_ONE_EXT):ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.NEGATIVE_ONE_TO_ONE_EXT);const Ut=Ue;Ue=null,this.setClear(Ut)}Le=Ie},getReversed:function(){return Le},setTest:function(Ie){Ie?Q(s.DEPTH_TEST):ue(s.DEPTH_TEST)},setMask:function(Ie){ce!==Ie&&!q&&(s.depthMask(Ie),ce=Ie)},setFunc:function(Ie){if(Le&&(Ie=f1[Ie]),xe!==Ie){switch(Ie){case ld:s.depthFunc(s.NEVER);break;case cd:s.depthFunc(s.ALWAYS);break;case ud:s.depthFunc(s.LESS);break;case Bs:s.depthFunc(s.LEQUAL);break;case dd:s.depthFunc(s.EQUAL);break;case fd:s.depthFunc(s.GEQUAL);break;case hd:s.depthFunc(s.GREATER);break;case pd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}xe=Ie}},setLocked:function(Ie){q=Ie},setClear:function(Ie){Ue!==Ie&&(Le&&(Ie=1-Ie),s.clearDepth(Ie),Ue=Ie)},reset:function(){q=!1,ce=null,xe=null,Ue=null,Le=!1}}}function o(){let q=!1,Le=null,ce=null,xe=null,Ue=null,Ie=null,ct=null,Ut=null,qt=null;return{setTest:function(St){q||(St?Q(s.STENCIL_TEST):ue(s.STENCIL_TEST))},setMask:function(St){Le!==St&&!q&&(s.stencilMask(St),Le=St)},setFunc:function(St,Sn,mn){(ce!==St||xe!==Sn||Ue!==mn)&&(s.stencilFunc(St,Sn,mn),ce=St,xe=Sn,Ue=mn)},setOp:function(St,Sn,mn){(Ie!==St||ct!==Sn||Ut!==mn)&&(s.stencilOp(St,Sn,mn),Ie=St,ct=Sn,Ut=mn)},setLocked:function(St){q=St},setClear:function(St){qt!==St&&(s.clearStencil(St),qt=St)},reset:function(){q=!1,Le=null,ce=null,xe=null,Ue=null,Ie=null,ct=null,Ut=null,qt=null}}}const l=new n,u=new r,d=new o,h=new WeakMap,m=new WeakMap;let v={},x={},_=new WeakMap,S=[],T=null,A=!1,y=null,g=null,D=null,N=null,R=null,K=null,O=null,k=new Ct(0,0,0),W=0,L=!1,C=null,B=null,le=null,ie=null,pe=null;const me=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let de=!1,he=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(H)[1]),de=he>=1):H.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),de=he>=2);let fe=null,I={};const E=s.getParameter(s.SCISSOR_BOX),G=s.getParameter(s.VIEWPORT),ve=new Wt().fromArray(E),X=new Wt().fromArray(G);function ee(q,Le,ce,xe){const Ue=new Uint8Array(4),Ie=s.createTexture();s.bindTexture(q,Ie),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ct=0;ct<ce;ct++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(Le,0,s.RGBA,1,1,xe,0,s.RGBA,s.UNSIGNED_BYTE,Ue):s.texImage2D(Le+ct,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ue);return Ie}const ae={};ae[s.TEXTURE_2D]=ee(s.TEXTURE_2D,s.TEXTURE_2D,1),ae[s.TEXTURE_CUBE_MAP]=ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[s.TEXTURE_2D_ARRAY]=ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ae[s.TEXTURE_3D]=ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),Q(s.DEPTH_TEST),u.setFunc(Bs),Qe(!1),et($p),Q(s.CULL_FACE),z(xr);function Q(q){v[q]!==!0&&(s.enable(q),v[q]=!0)}function ue(q){v[q]!==!1&&(s.disable(q),v[q]=!1)}function ye(q,Le){return x[q]!==Le?(s.bindFramebuffer(q,Le),x[q]=Le,q===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Le),q===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Le),!0):!1}function Re(q,Le){let ce=S,xe=!1;if(q){ce=_.get(Le),ce===void 0&&(ce=[],_.set(Le,ce));const Ue=q.textures;if(ce.length!==Ue.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let Ie=0,ct=Ue.length;Ie<ct;Ie++)ce[Ie]=s.COLOR_ATTACHMENT0+Ie;ce.length=Ue.length,xe=!0}}else ce[0]!==s.BACK&&(ce[0]=s.BACK,xe=!0);xe&&s.drawBuffers(ce)}function Ze(q){return T!==q?(s.useProgram(q),T=q,!0):!1}const Pe={[jr]:s.FUNC_ADD,[Cx]:s.FUNC_SUBTRACT,[Rx]:s.FUNC_REVERSE_SUBTRACT};Pe[Px]=s.MIN,Pe[Nx]=s.MAX;const Je={[Lx]:s.ZERO,[Dx]:s.ONE,[Ix]:s.SRC_COLOR,[ad]:s.SRC_ALPHA,[Bx]:s.SRC_ALPHA_SATURATE,[Ox]:s.DST_COLOR,[Fx]:s.DST_ALPHA,[Ux]:s.ONE_MINUS_SRC_COLOR,[od]:s.ONE_MINUS_SRC_ALPHA,[zx]:s.ONE_MINUS_DST_COLOR,[kx]:s.ONE_MINUS_DST_ALPHA,[Vx]:s.CONSTANT_COLOR,[Hx]:s.ONE_MINUS_CONSTANT_COLOR,[Gx]:s.CONSTANT_ALPHA,[Wx]:s.ONE_MINUS_CONSTANT_ALPHA};function z(q,Le,ce,xe,Ue,Ie,ct,Ut,qt,St){if(q===xr){A===!0&&(ue(s.BLEND),A=!1);return}if(A===!1&&(Q(s.BLEND),A=!0),q!==bx){if(q!==y||St!==L){if((g!==jr||R!==jr)&&(s.blendEquation(s.FUNC_ADD),g=jr,R=jr),St)switch(q){case ks:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case sd:s.blendFunc(s.ONE,s.ONE);break;case Kp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Zp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case ks:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case sd:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Kp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Zp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}D=null,N=null,K=null,O=null,k.set(0,0,0),W=0,y=q,L=St}return}Ue=Ue||Le,Ie=Ie||ce,ct=ct||xe,(Le!==g||Ue!==R)&&(s.blendEquationSeparate(Pe[Le],Pe[Ue]),g=Le,R=Ue),(ce!==D||xe!==N||Ie!==K||ct!==O)&&(s.blendFuncSeparate(Je[ce],Je[xe],Je[Ie],Je[ct]),D=ce,N=xe,K=Ie,O=ct),(Ut.equals(k)===!1||qt!==W)&&(s.blendColor(Ut.r,Ut.g,Ut.b,qt),k.copy(Ut),W=qt),y=q,L=!1}function yt(q,Le){q.side===Oi?ue(s.CULL_FACE):Q(s.CULL_FACE);let ce=q.side===Nn;Le&&(ce=!ce),Qe(ce),q.blending===ks&&q.transparent===!1?z(xr):z(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),u.setFunc(q.depthFunc),u.setTest(q.depthTest),u.setMask(q.depthWrite),l.setMask(q.colorWrite);const xe=q.stencilWrite;d.setTest(xe),xe&&(d.setMask(q.stencilWriteMask),d.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),d.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),ht(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?Q(s.SAMPLE_ALPHA_TO_COVERAGE):ue(s.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(q){C!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),C=q)}function et(q){q!==wx?(Q(s.CULL_FACE),q!==B&&(q===$p?s.cullFace(s.BACK):q===Tx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ue(s.CULL_FACE),B=q}function Ve(q){q!==le&&(de&&s.lineWidth(q),le=q)}function ht(q,Le,ce){q?(Q(s.POLYGON_OFFSET_FILL),(ie!==Le||pe!==ce)&&(s.polygonOffset(Le,ce),ie=Le,pe=ce)):ue(s.POLYGON_OFFSET_FILL)}function Oe(q){q?Q(s.SCISSOR_TEST):ue(s.SCISSOR_TEST)}function U(q){q===void 0&&(q=s.TEXTURE0+me-1),fe!==q&&(s.activeTexture(q),fe=q)}function b(q,Le,ce){ce===void 0&&(fe===null?ce=s.TEXTURE0+me-1:ce=fe);let xe=I[ce];xe===void 0&&(xe={type:void 0,texture:void 0},I[ce]=xe),(xe.type!==q||xe.texture!==Le)&&(fe!==ce&&(s.activeTexture(ce),fe=ce),s.bindTexture(q,Le||ae[q]),xe.type=q,xe.texture=Le)}function ne(){const q=I[fe];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function _e(){try{s.compressedTexImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Se(){try{s.compressedTexImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ge(){try{s.texSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function We(){try{s.texSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ne(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ut(){try{s.texStorage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function we(){try{s.texStorage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ze(){try{s.texImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function tt(){try{s.texImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function rt(q){ve.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),ve.copy(q))}function He(q){X.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),X.copy(q))}function mt(q,Le){let ce=m.get(Le);ce===void 0&&(ce=new WeakMap,m.set(Le,ce));let xe=ce.get(q);xe===void 0&&(xe=s.getUniformBlockIndex(Le,q.name),ce.set(q,xe))}function lt(q,Le){const xe=m.get(Le).get(q);h.get(Le)!==xe&&(s.uniformBlockBinding(Le,xe,q.__bindingPointIndex),h.set(Le,xe))}function bt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},fe=null,I={},x={},_=new WeakMap,S=[],T=null,A=!1,y=null,g=null,D=null,N=null,R=null,K=null,O=null,k=new Ct(0,0,0),W=0,L=!1,C=null,B=null,le=null,ie=null,pe=null,ve.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:Q,disable:ue,bindFramebuffer:ye,drawBuffers:Re,useProgram:Ze,setBlending:z,setMaterial:yt,setFlipSided:Qe,setCullFace:et,setLineWidth:Ve,setPolygonOffset:ht,setScissorTest:Oe,activeTexture:U,bindTexture:b,unbindTexture:ne,compressedTexImage2D:_e,compressedTexImage3D:Se,texImage2D:ze,texImage3D:tt,updateUBOMapping:mt,uniformBlockBinding:lt,texStorage2D:ut,texStorage3D:we,texSubImage2D:ge,texSubImage3D:We,compressedTexSubImage2D:Ne,compressedTexSubImage3D:Fe,scissor:rt,viewport:He,reset:bt}}function jm(s,e,n,r){const o=p1(r);switch(n){case pg:return s*e;case gg:return s*e;case vg:return s*e*2;case xg:return s*e/o.components*o.byteLength;case rf:return s*e/o.components*o.byteLength;case _g:return s*e*2/o.components*o.byteLength;case sf:return s*e*2/o.components*o.byteLength;case mg:return s*e*3/o.components*o.byteLength;case di:return s*e*4/o.components*o.byteLength;case af:return s*e*4/o.components*o.byteLength;case Al:case bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Cl:case Rl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yd:case Md:return Math.max(s,16)*Math.max(e,8)/4;case _d:case Sd:return Math.max(s,8)*Math.max(e,8)/2;case Ed:case wd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Td:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Nd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Dd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Id:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Fd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case kd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Od:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case zd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Pl:case Bd:case Vd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case yg:case Hd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Gd:case Wd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function p1(s){switch(s){case Hi:case dg:return{byteLength:1,components:1};case Ba:case fg:case Va:return{byteLength:2,components:1};case tf:case nf:return{byteLength:2,components:4};case $r:case ef:case zi:return{byteLength:4,components:1};case hg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function m1(s,e,n,r,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Rt,v=new WeakMap;let x;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(U,b){return S?new OffscreenCanvas(U,b):Dl("canvas")}function A(U,b,ne){let _e=1;const Se=Oe(U);if((Se.width>ne||Se.height>ne)&&(_e=ne/Math.max(Se.width,Se.height)),_e<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ge=Math.floor(_e*Se.width),We=Math.floor(_e*Se.height);x===void 0&&(x=T(ge,We));const Ne=b?T(ge,We):x;return Ne.width=ge,Ne.height=We,Ne.getContext("2d").drawImage(U,0,0,ge,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+ge+"x"+We+")."),Ne}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),U;return U}function y(U){return U.generateMipmaps}function g(U){s.generateMipmap(U)}function D(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(U,b,ne,_e,Se=!1){if(U!==null){if(s[U]!==void 0)return s[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ge=b;if(b===s.RED&&(ne===s.FLOAT&&(ge=s.R32F),ne===s.HALF_FLOAT&&(ge=s.R16F),ne===s.UNSIGNED_BYTE&&(ge=s.R8)),b===s.RED_INTEGER&&(ne===s.UNSIGNED_BYTE&&(ge=s.R8UI),ne===s.UNSIGNED_SHORT&&(ge=s.R16UI),ne===s.UNSIGNED_INT&&(ge=s.R32UI),ne===s.BYTE&&(ge=s.R8I),ne===s.SHORT&&(ge=s.R16I),ne===s.INT&&(ge=s.R32I)),b===s.RG&&(ne===s.FLOAT&&(ge=s.RG32F),ne===s.HALF_FLOAT&&(ge=s.RG16F),ne===s.UNSIGNED_BYTE&&(ge=s.RG8)),b===s.RG_INTEGER&&(ne===s.UNSIGNED_BYTE&&(ge=s.RG8UI),ne===s.UNSIGNED_SHORT&&(ge=s.RG16UI),ne===s.UNSIGNED_INT&&(ge=s.RG32UI),ne===s.BYTE&&(ge=s.RG8I),ne===s.SHORT&&(ge=s.RG16I),ne===s.INT&&(ge=s.RG32I)),b===s.RGB_INTEGER&&(ne===s.UNSIGNED_BYTE&&(ge=s.RGB8UI),ne===s.UNSIGNED_SHORT&&(ge=s.RGB16UI),ne===s.UNSIGNED_INT&&(ge=s.RGB32UI),ne===s.BYTE&&(ge=s.RGB8I),ne===s.SHORT&&(ge=s.RGB16I),ne===s.INT&&(ge=s.RGB32I)),b===s.RGBA_INTEGER&&(ne===s.UNSIGNED_BYTE&&(ge=s.RGBA8UI),ne===s.UNSIGNED_SHORT&&(ge=s.RGBA16UI),ne===s.UNSIGNED_INT&&(ge=s.RGBA32UI),ne===s.BYTE&&(ge=s.RGBA8I),ne===s.SHORT&&(ge=s.RGBA16I),ne===s.INT&&(ge=s.RGBA32I)),b===s.RGB&&ne===s.UNSIGNED_INT_5_9_9_9_REV&&(ge=s.RGB9_E5),b===s.RGBA){const We=Se?Ol:Et.getTransfer(_e);ne===s.FLOAT&&(ge=s.RGBA32F),ne===s.HALF_FLOAT&&(ge=s.RGBA16F),ne===s.UNSIGNED_BYTE&&(ge=We===Lt?s.SRGB8_ALPHA8:s.RGBA8),ne===s.UNSIGNED_SHORT_4_4_4_4&&(ge=s.RGBA4),ne===s.UNSIGNED_SHORT_5_5_5_1&&(ge=s.RGB5_A1)}return(ge===s.R16F||ge===s.R32F||ge===s.RG16F||ge===s.RG32F||ge===s.RGBA16F||ge===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function R(U,b){let ne;return U?b===null||b===$r||b===Gs?ne=s.DEPTH24_STENCIL8:b===zi?ne=s.DEPTH32F_STENCIL8:b===Ba&&(ne=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===$r||b===Gs?ne=s.DEPTH_COMPONENT24:b===zi?ne=s.DEPTH_COMPONENT32F:b===Ba&&(ne=s.DEPTH_COMPONENT16),ne}function K(U,b){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==fi&&U.minFilter!==yi?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function O(U){const b=U.target;b.removeEventListener("dispose",O),W(b),b.isVideoTexture&&v.delete(b)}function k(U){const b=U.target;b.removeEventListener("dispose",k),C(b)}function W(U){const b=r.get(U);if(b.__webglInit===void 0)return;const ne=U.source,_e=_.get(ne);if(_e){const Se=_e[b.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&L(U),Object.keys(_e).length===0&&_.delete(ne)}r.remove(U)}function L(U){const b=r.get(U);s.deleteTexture(b.__webglTexture);const ne=U.source,_e=_.get(ne);delete _e[b.__cacheKey],u.memory.textures--}function C(U){const b=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(b.__webglFramebuffer[_e]))for(let Se=0;Se<b.__webglFramebuffer[_e].length;Se++)s.deleteFramebuffer(b.__webglFramebuffer[_e][Se]);else s.deleteFramebuffer(b.__webglFramebuffer[_e]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[_e])}else{if(Array.isArray(b.__webglFramebuffer))for(let _e=0;_e<b.__webglFramebuffer.length;_e++)s.deleteFramebuffer(b.__webglFramebuffer[_e]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let _e=0;_e<b.__webglColorRenderbuffer.length;_e++)b.__webglColorRenderbuffer[_e]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[_e]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ne=U.textures;for(let _e=0,Se=ne.length;_e<Se;_e++){const ge=r.get(ne[_e]);ge.__webglTexture&&(s.deleteTexture(ge.__webglTexture),u.memory.textures--),r.remove(ne[_e])}r.remove(U)}let B=0;function le(){B=0}function ie(){const U=B;return U>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),B+=1,U}function pe(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function me(U,b){const ne=r.get(U);if(U.isVideoTexture&&Ve(U),U.isRenderTargetTexture===!1&&U.version>0&&ne.__version!==U.version){const _e=U.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(ne,U,b);return}}n.bindTexture(s.TEXTURE_2D,ne.__webglTexture,s.TEXTURE0+b)}function de(U,b){const ne=r.get(U);if(U.version>0&&ne.__version!==U.version){X(ne,U,b);return}n.bindTexture(s.TEXTURE_2D_ARRAY,ne.__webglTexture,s.TEXTURE0+b)}function he(U,b){const ne=r.get(U);if(U.version>0&&ne.__version!==U.version){X(ne,U,b);return}n.bindTexture(s.TEXTURE_3D,ne.__webglTexture,s.TEXTURE0+b)}function H(U,b){const ne=r.get(U);if(U.version>0&&ne.__version!==U.version){ee(ne,U,b);return}n.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture,s.TEXTURE0+b)}const fe={[vd]:s.REPEAT,[qr]:s.CLAMP_TO_EDGE,[xd]:s.MIRRORED_REPEAT},I={[fi]:s.NEAREST,[e_]:s.NEAREST_MIPMAP_NEAREST,[el]:s.NEAREST_MIPMAP_LINEAR,[yi]:s.LINEAR,[Tu]:s.LINEAR_MIPMAP_NEAREST,[Yr]:s.LINEAR_MIPMAP_LINEAR},E={[s_]:s.NEVER,[d_]:s.ALWAYS,[a_]:s.LESS,[Sg]:s.LEQUAL,[o_]:s.EQUAL,[u_]:s.GEQUAL,[l_]:s.GREATER,[c_]:s.NOTEQUAL};function G(U,b){if(b.type===zi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===yi||b.magFilter===Tu||b.magFilter===el||b.magFilter===Yr||b.minFilter===yi||b.minFilter===Tu||b.minFilter===el||b.minFilter===Yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,fe[b.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,fe[b.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,fe[b.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,I[b.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,I[b.minFilter]),b.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,E[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===fi||b.minFilter!==el&&b.minFilter!==Yr||b.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function ve(U,b){let ne=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",O));const _e=b.source;let Se=_.get(_e);Se===void 0&&(Se={},_.set(_e,Se));const ge=pe(b);if(ge!==U.__cacheKey){Se[ge]===void 0&&(Se[ge]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,ne=!0),Se[ge].usedTimes++;const We=Se[U.__cacheKey];We!==void 0&&(Se[U.__cacheKey].usedTimes--,We.usedTimes===0&&L(b)),U.__cacheKey=ge,U.__webglTexture=Se[ge].texture}return ne}function X(U,b,ne){let _e=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(_e=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(_e=s.TEXTURE_3D);const Se=ve(U,b),ge=b.source;n.bindTexture(_e,U.__webglTexture,s.TEXTURE0+ne);const We=r.get(ge);if(ge.version!==We.__version||Se===!0){n.activeTexture(s.TEXTURE0+ne);const Ne=Et.getPrimaries(Et.workingColorSpace),Fe=b.colorSpace===vr?null:Et.getPrimaries(b.colorSpace),ut=b.colorSpace===vr||Ne===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let we=A(b.image,!1,o.maxTextureSize);we=ht(b,we);const ze=l.convert(b.format,b.colorSpace),tt=l.convert(b.type);let rt=N(b.internalFormat,ze,tt,b.colorSpace,b.isVideoTexture);G(_e,b);let He;const mt=b.mipmaps,lt=b.isVideoTexture!==!0,bt=We.__version===void 0||Se===!0,q=ge.dataReady,Le=K(b,we);if(b.isDepthTexture)rt=R(b.format===Ws,b.type),bt&&(lt?n.texStorage2D(s.TEXTURE_2D,1,rt,we.width,we.height):n.texImage2D(s.TEXTURE_2D,0,rt,we.width,we.height,0,ze,tt,null));else if(b.isDataTexture)if(mt.length>0){lt&&bt&&n.texStorage2D(s.TEXTURE_2D,Le,rt,mt[0].width,mt[0].height);for(let ce=0,xe=mt.length;ce<xe;ce++)He=mt[ce],lt?q&&n.texSubImage2D(s.TEXTURE_2D,ce,0,0,He.width,He.height,ze,tt,He.data):n.texImage2D(s.TEXTURE_2D,ce,rt,He.width,He.height,0,ze,tt,He.data);b.generateMipmaps=!1}else lt?(bt&&n.texStorage2D(s.TEXTURE_2D,Le,rt,we.width,we.height),q&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,we.width,we.height,ze,tt,we.data)):n.texImage2D(s.TEXTURE_2D,0,rt,we.width,we.height,0,ze,tt,we.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){lt&&bt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Le,rt,mt[0].width,mt[0].height,we.depth);for(let ce=0,xe=mt.length;ce<xe;ce++)if(He=mt[ce],b.format!==di)if(ze!==null)if(lt){if(q)if(b.layerUpdates.size>0){const Ue=jm(He.width,He.height,b.format,b.type);for(const Ie of b.layerUpdates){const ct=He.data.subarray(Ie*Ue/He.data.BYTES_PER_ELEMENT,(Ie+1)*Ue/He.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,Ie,He.width,He.height,1,ze,ct)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,He.width,He.height,we.depth,ze,He.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ce,rt,He.width,He.height,we.depth,0,He.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?q&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,He.width,He.height,we.depth,ze,tt,He.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ce,rt,He.width,He.height,we.depth,0,ze,tt,He.data)}else{lt&&bt&&n.texStorage2D(s.TEXTURE_2D,Le,rt,mt[0].width,mt[0].height);for(let ce=0,xe=mt.length;ce<xe;ce++)He=mt[ce],b.format!==di?ze!==null?lt?q&&n.compressedTexSubImage2D(s.TEXTURE_2D,ce,0,0,He.width,He.height,ze,He.data):n.compressedTexImage2D(s.TEXTURE_2D,ce,rt,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?q&&n.texSubImage2D(s.TEXTURE_2D,ce,0,0,He.width,He.height,ze,tt,He.data):n.texImage2D(s.TEXTURE_2D,ce,rt,He.width,He.height,0,ze,tt,He.data)}else if(b.isDataArrayTexture)if(lt){if(bt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Le,rt,we.width,we.height,we.depth),q)if(b.layerUpdates.size>0){const ce=jm(we.width,we.height,b.format,b.type);for(const xe of b.layerUpdates){const Ue=we.data.subarray(xe*ce/we.data.BYTES_PER_ELEMENT,(xe+1)*ce/we.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,xe,we.width,we.height,1,ze,tt,Ue)}b.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,ze,tt,we.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,rt,we.width,we.height,we.depth,0,ze,tt,we.data);else if(b.isData3DTexture)lt?(bt&&n.texStorage3D(s.TEXTURE_3D,Le,rt,we.width,we.height,we.depth),q&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,ze,tt,we.data)):n.texImage3D(s.TEXTURE_3D,0,rt,we.width,we.height,we.depth,0,ze,tt,we.data);else if(b.isFramebufferTexture){if(bt)if(lt)n.texStorage2D(s.TEXTURE_2D,Le,rt,we.width,we.height);else{let ce=we.width,xe=we.height;for(let Ue=0;Ue<Le;Ue++)n.texImage2D(s.TEXTURE_2D,Ue,rt,ce,xe,0,ze,tt,null),ce>>=1,xe>>=1}}else if(mt.length>0){if(lt&&bt){const ce=Oe(mt[0]);n.texStorage2D(s.TEXTURE_2D,Le,rt,ce.width,ce.height)}for(let ce=0,xe=mt.length;ce<xe;ce++)He=mt[ce],lt?q&&n.texSubImage2D(s.TEXTURE_2D,ce,0,0,ze,tt,He):n.texImage2D(s.TEXTURE_2D,ce,rt,ze,tt,He);b.generateMipmaps=!1}else if(lt){if(bt){const ce=Oe(we);n.texStorage2D(s.TEXTURE_2D,Le,rt,ce.width,ce.height)}q&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,ze,tt,we)}else n.texImage2D(s.TEXTURE_2D,0,rt,ze,tt,we);y(b)&&g(_e),We.__version=ge.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function ee(U,b,ne){if(b.image.length!==6)return;const _e=ve(U,b),Se=b.source;n.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+ne);const ge=r.get(Se);if(Se.version!==ge.__version||_e===!0){n.activeTexture(s.TEXTURE0+ne);const We=Et.getPrimaries(Et.workingColorSpace),Ne=b.colorSpace===vr?null:Et.getPrimaries(b.colorSpace),Fe=b.colorSpace===vr||We===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const ut=b.isCompressedTexture||b.image[0].isCompressedTexture,we=b.image[0]&&b.image[0].isDataTexture,ze=[];for(let xe=0;xe<6;xe++)!ut&&!we?ze[xe]=A(b.image[xe],!0,o.maxCubemapSize):ze[xe]=we?b.image[xe].image:b.image[xe],ze[xe]=ht(b,ze[xe]);const tt=ze[0],rt=l.convert(b.format,b.colorSpace),He=l.convert(b.type),mt=N(b.internalFormat,rt,He,b.colorSpace),lt=b.isVideoTexture!==!0,bt=ge.__version===void 0||_e===!0,q=Se.dataReady;let Le=K(b,tt);G(s.TEXTURE_CUBE_MAP,b);let ce;if(ut){lt&&bt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Le,mt,tt.width,tt.height);for(let xe=0;xe<6;xe++){ce=ze[xe].mipmaps;for(let Ue=0;Ue<ce.length;Ue++){const Ie=ce[Ue];b.format!==di?rt!==null?lt?q&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ue,0,0,Ie.width,Ie.height,rt,Ie.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ue,mt,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lt?q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ue,0,0,Ie.width,Ie.height,rt,He,Ie.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ue,mt,Ie.width,Ie.height,0,rt,He,Ie.data)}}}else{if(ce=b.mipmaps,lt&&bt){ce.length>0&&Le++;const xe=Oe(ze[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Le,mt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(we){lt?q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,ze[xe].width,ze[xe].height,rt,He,ze[xe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,mt,ze[xe].width,ze[xe].height,0,rt,He,ze[xe].data);for(let Ue=0;Ue<ce.length;Ue++){const ct=ce[Ue].image[xe].image;lt?q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ue+1,0,0,ct.width,ct.height,rt,He,ct.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ue+1,mt,ct.width,ct.height,0,rt,He,ct.data)}}else{lt?q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,rt,He,ze[xe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,mt,rt,He,ze[xe]);for(let Ue=0;Ue<ce.length;Ue++){const Ie=ce[Ue];lt?q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ue+1,0,0,rt,He,Ie.image[xe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ue+1,mt,rt,He,Ie.image[xe])}}}y(b)&&g(s.TEXTURE_CUBE_MAP),ge.__version=Se.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function ae(U,b,ne,_e,Se,ge){const We=l.convert(ne.format,ne.colorSpace),Ne=l.convert(ne.type),Fe=N(ne.internalFormat,We,Ne,ne.colorSpace),ut=r.get(b),we=r.get(ne);if(we.__renderTarget=b,!ut.__hasExternalTextures){const ze=Math.max(1,b.width>>ge),tt=Math.max(1,b.height>>ge);Se===s.TEXTURE_3D||Se===s.TEXTURE_2D_ARRAY?n.texImage3D(Se,ge,Fe,ze,tt,b.depth,0,We,Ne,null):n.texImage2D(Se,ge,Fe,ze,tt,0,We,Ne,null)}n.bindFramebuffer(s.FRAMEBUFFER,U),et(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,Se,we.__webglTexture,0,Qe(b)):(Se===s.TEXTURE_2D||Se>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,_e,Se,we.__webglTexture,ge),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Q(U,b,ne){if(s.bindRenderbuffer(s.RENDERBUFFER,U),b.depthBuffer){const _e=b.depthTexture,Se=_e&&_e.isDepthTexture?_e.type:null,ge=R(b.stencilBuffer,Se),We=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=Qe(b);et(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ne,ge,b.width,b.height):ne?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ne,ge,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ge,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,We,s.RENDERBUFFER,U)}else{const _e=b.textures;for(let Se=0;Se<_e.length;Se++){const ge=_e[Se],We=l.convert(ge.format,ge.colorSpace),Ne=l.convert(ge.type),Fe=N(ge.internalFormat,We,Ne,ge.colorSpace),ut=Qe(b);ne&&et(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,Fe,b.width,b.height):et(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut,Fe,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Fe,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ue(U,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _e=r.get(b.depthTexture);_e.__renderTarget=b,(!_e.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),me(b.depthTexture,0);const Se=_e.__webglTexture,ge=Qe(b);if(b.depthTexture.format===Os)et(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Se,0,ge):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Se,0);else if(b.depthTexture.format===Ws)et(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Se,0,ge):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Se,0);else throw new Error("Unknown depthTexture format")}function ye(U){const b=r.get(U),ne=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const _e=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),_e){const Se=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,_e.removeEventListener("dispose",Se)};_e.addEventListener("dispose",Se),b.__depthDisposeCallback=Se}b.__boundDepthTexture=_e}if(U.depthTexture&&!b.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");ue(b.__webglFramebuffer,U)}else if(ne){b.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(n.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[_e]),b.__webglDepthbuffer[_e]===void 0)b.__webglDepthbuffer[_e]=s.createRenderbuffer(),Q(b.__webglDepthbuffer[_e],U,!1);else{const Se=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=b.__webglDepthbuffer[_e];s.bindRenderbuffer(s.RENDERBUFFER,ge),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,ge)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Q(b.__webglDepthbuffer,U,!1);else{const _e=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Se=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Se),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,Se)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(U,b,ne){const _e=r.get(U);b!==void 0&&ae(_e.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ne!==void 0&&ye(U)}function Ze(U){const b=U.texture,ne=r.get(U),_e=r.get(b);U.addEventListener("dispose",k);const Se=U.textures,ge=U.isWebGLCubeRenderTarget===!0,We=Se.length>1;if(We||(_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture()),_e.__version=b.version,u.memory.textures++),ge){ne.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(b.mipmaps&&b.mipmaps.length>0){ne.__webglFramebuffer[Ne]=[];for(let Fe=0;Fe<b.mipmaps.length;Fe++)ne.__webglFramebuffer[Ne][Fe]=s.createFramebuffer()}else ne.__webglFramebuffer[Ne]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){ne.__webglFramebuffer=[];for(let Ne=0;Ne<b.mipmaps.length;Ne++)ne.__webglFramebuffer[Ne]=s.createFramebuffer()}else ne.__webglFramebuffer=s.createFramebuffer();if(We)for(let Ne=0,Fe=Se.length;Ne<Fe;Ne++){const ut=r.get(Se[Ne]);ut.__webglTexture===void 0&&(ut.__webglTexture=s.createTexture(),u.memory.textures++)}if(U.samples>0&&et(U)===!1){ne.__webglMultisampledFramebuffer=s.createFramebuffer(),ne.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let Ne=0;Ne<Se.length;Ne++){const Fe=Se[Ne];ne.__webglColorRenderbuffer[Ne]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ne.__webglColorRenderbuffer[Ne]);const ut=l.convert(Fe.format,Fe.colorSpace),we=l.convert(Fe.type),ze=N(Fe.internalFormat,ut,we,Fe.colorSpace,U.isXRRenderTarget===!0),tt=Qe(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,ze,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,ne.__webglColorRenderbuffer[Ne])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(ne.__webglDepthRenderbuffer=s.createRenderbuffer(),Q(ne.__webglDepthRenderbuffer,U,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ge){n.bindTexture(s.TEXTURE_CUBE_MAP,_e.__webglTexture),G(s.TEXTURE_CUBE_MAP,b);for(let Ne=0;Ne<6;Ne++)if(b.mipmaps&&b.mipmaps.length>0)for(let Fe=0;Fe<b.mipmaps.length;Fe++)ae(ne.__webglFramebuffer[Ne][Fe],U,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Fe);else ae(ne.__webglFramebuffer[Ne],U,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);y(b)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(We){for(let Ne=0,Fe=Se.length;Ne<Fe;Ne++){const ut=Se[Ne],we=r.get(ut);n.bindTexture(s.TEXTURE_2D,we.__webglTexture),G(s.TEXTURE_2D,ut),ae(ne.__webglFramebuffer,U,ut,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,0),y(ut)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let Ne=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ne=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ne,_e.__webglTexture),G(Ne,b),b.mipmaps&&b.mipmaps.length>0)for(let Fe=0;Fe<b.mipmaps.length;Fe++)ae(ne.__webglFramebuffer[Fe],U,b,s.COLOR_ATTACHMENT0,Ne,Fe);else ae(ne.__webglFramebuffer,U,b,s.COLOR_ATTACHMENT0,Ne,0);y(b)&&g(Ne),n.unbindTexture()}U.depthBuffer&&ye(U)}function Pe(U){const b=U.textures;for(let ne=0,_e=b.length;ne<_e;ne++){const Se=b[ne];if(y(Se)){const ge=D(U),We=r.get(Se).__webglTexture;n.bindTexture(ge,We),g(ge),n.unbindTexture()}}}const Je=[],z=[];function yt(U){if(U.samples>0){if(et(U)===!1){const b=U.textures,ne=U.width,_e=U.height;let Se=s.COLOR_BUFFER_BIT;const ge=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,We=r.get(U),Ne=b.length>1;if(Ne)for(let Fe=0;Fe<b.length;Fe++)n.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Fe=0;Fe<b.length;Fe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Se|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Se|=s.STENCIL_BUFFER_BIT)),Ne){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,We.__webglColorRenderbuffer[Fe]);const ut=r.get(b[Fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ut,0)}s.blitFramebuffer(0,0,ne,_e,0,0,ne,_e,Se,s.NEAREST),h===!0&&(Je.length=0,z.length=0,Je.push(s.COLOR_ATTACHMENT0+Fe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Je.push(ge),z.push(ge),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,z)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Je))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ne)for(let Fe=0;Fe<b.length;Fe++){n.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,We.__webglColorRenderbuffer[Fe]);const ut=r.get(b[Fe]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,ut,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&h){const b=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Qe(U){return Math.min(o.maxSamples,U.samples)}function et(U){const b=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ve(U){const b=u.render.frame;v.get(U)!==b&&(v.set(U,b),U.update())}function ht(U,b){const ne=U.colorSpace,_e=U.format,Se=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||ne!==Xs&&ne!==vr&&(Et.getTransfer(ne)===Lt?(_e!==di||Se!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),b}function Oe(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=ie,this.resetTextureUnits=le,this.setTexture2D=me,this.setTexture2DArray=de,this.setTexture3D=he,this.setTextureCube=H,this.rebindTextures=Re,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=et}function g1(s,e){function n(r,o=vr){let l;const u=Et.getTransfer(o);if(r===Hi)return s.UNSIGNED_BYTE;if(r===tf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===nf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===hg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===dg)return s.BYTE;if(r===fg)return s.SHORT;if(r===Ba)return s.UNSIGNED_SHORT;if(r===ef)return s.INT;if(r===$r)return s.UNSIGNED_INT;if(r===zi)return s.FLOAT;if(r===Va)return s.HALF_FLOAT;if(r===pg)return s.ALPHA;if(r===mg)return s.RGB;if(r===di)return s.RGBA;if(r===gg)return s.LUMINANCE;if(r===vg)return s.LUMINANCE_ALPHA;if(r===Os)return s.DEPTH_COMPONENT;if(r===Ws)return s.DEPTH_STENCIL;if(r===xg)return s.RED;if(r===rf)return s.RED_INTEGER;if(r===_g)return s.RG;if(r===sf)return s.RG_INTEGER;if(r===af)return s.RGBA_INTEGER;if(r===Al||r===bl||r===Cl||r===Rl)if(u===Lt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Al)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===bl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Cl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Rl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Al)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===bl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Cl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Rl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===_d||r===yd||r===Sd||r===Md)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===_d)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===yd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Sd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Md)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ed||r===wd||r===Td)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Ed||r===wd)return u===Lt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Td)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ad||r===bd||r===Cd||r===Rd||r===Pd||r===Nd||r===Ld||r===Dd||r===Id||r===Ud||r===Fd||r===kd||r===Od||r===zd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Ad)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===bd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Cd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Rd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Pd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Nd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ld)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Dd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Id)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ud)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Fd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===kd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Od)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===zd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Pl||r===Bd||r===Vd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Pl)return u===Lt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Bd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Vd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===yg||r===Hd||r===Gd||r===Wd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Pl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Hd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Gd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Wd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Gs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class v1 extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ka extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const x1={type:"move"};class ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ka,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ka,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ka,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,l=null,u=null;const d=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const A of e.hand.values()){const y=n.getJointPose(A,r),g=this._getHandJoint(m,A);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const v=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],_=v.position.distanceTo(x.position),S=.02,T=.005;m.inputState.pinching&&_>S+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&_<=S-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(x1)))}return d!==null&&(d.visible=o!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new ka;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const _1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,y1=`
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

}`;class S1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const o=new Ln,l=e.properties.get(o);l.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Mr({vertexShader:_1,fragmentShader:y1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Bn(new zl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class M1 extends qs{constructor(e,n){super();const r=this;let o=null,l=1,u=null,d="local-floor",h=1,m=null,v=null,x=null,_=null,S=null,T=null;const A=new S1,y=n.getContextAttributes();let g=null,D=null;const N=[],R=[],K=new Rt;let O=null;const k=new Zn;k.viewport=new Wt;const W=new Zn;W.viewport=new Wt;const L=[k,W],C=new v1;let B=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ee=N[X];return ee===void 0&&(ee=new ed,N[X]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(X){let ee=N[X];return ee===void 0&&(ee=new ed,N[X]=ee),ee.getGripSpace()},this.getHand=function(X){let ee=N[X];return ee===void 0&&(ee=new ed,N[X]=ee),ee.getHandSpace()};function ie(X){const ee=R.indexOf(X.inputSource);if(ee===-1)return;const ae=N[ee];ae!==void 0&&(ae.update(X.inputSource,X.frame,m||u),ae.dispatchEvent({type:X.type,data:X.inputSource}))}function pe(){o.removeEventListener("select",ie),o.removeEventListener("selectstart",ie),o.removeEventListener("selectend",ie),o.removeEventListener("squeeze",ie),o.removeEventListener("squeezestart",ie),o.removeEventListener("squeezeend",ie),o.removeEventListener("end",pe),o.removeEventListener("inputsourceschange",me);for(let X=0;X<N.length;X++){const ee=R[X];ee!==null&&(R[X]=null,N[X].disconnect(ee))}B=null,le=null,A.reset(),e.setRenderTarget(g),S=null,_=null,x=null,o=null,D=null,ve.stop(),r.isPresenting=!1,e.setPixelRatio(O),e.setSize(K.width,K.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){l=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){d=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(X){m=X},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return x},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(X){if(o=X,o!==null){if(g=e.getRenderTarget(),o.addEventListener("select",ie),o.addEventListener("selectstart",ie),o.addEventListener("selectend",ie),o.addEventListener("squeeze",ie),o.addEventListener("squeezestart",ie),o.addEventListener("squeezeend",ie),o.addEventListener("end",pe),o.addEventListener("inputsourceschange",me),y.xrCompatible!==!0&&await n.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(K),o.renderState.layers===void 0){const ee={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,n,ee),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new Kr(S.framebufferWidth,S.framebufferHeight,{format:di,type:Hi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ee=null,ae=null,Q=null;y.depth&&(Q=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ee=y.stencil?Ws:Os,ae=y.stencil?Gs:$r);const ue={colorFormat:n.RGBA8,depthFormat:Q,scaleFactor:l};x=new XRWebGLBinding(o,n),_=x.createProjectionLayer(ue),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),D=new Kr(_.textureWidth,_.textureHeight,{format:di,type:Hi,depthTexture:new Ig(_.textureWidth,_.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(h),m=null,u=await o.requestReferenceSpace(d),ve.setContext(o),ve.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function me(X){for(let ee=0;ee<X.removed.length;ee++){const ae=X.removed[ee],Q=R.indexOf(ae);Q>=0&&(R[Q]=null,N[Q].disconnect(ae))}for(let ee=0;ee<X.added.length;ee++){const ae=X.added[ee];let Q=R.indexOf(ae);if(Q===-1){for(let ye=0;ye<N.length;ye++)if(ye>=R.length){R.push(ae),Q=ye;break}else if(R[ye]===null){R[ye]=ae,Q=ye;break}if(Q===-1)break}const ue=N[Q];ue&&ue.connect(ae)}}const de=new J,he=new J;function H(X,ee,ae){de.setFromMatrixPosition(ee.matrixWorld),he.setFromMatrixPosition(ae.matrixWorld);const Q=de.distanceTo(he),ue=ee.projectionMatrix.elements,ye=ae.projectionMatrix.elements,Re=ue[14]/(ue[10]-1),Ze=ue[14]/(ue[10]+1),Pe=(ue[9]+1)/ue[5],Je=(ue[9]-1)/ue[5],z=(ue[8]-1)/ue[0],yt=(ye[8]+1)/ye[0],Qe=Re*z,et=Re*yt,Ve=Q/(-z+yt),ht=Ve*-z;if(ee.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ht),X.translateZ(Ve),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),ue[10]===-1)X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Oe=Re+Ve,U=Ze+Ve,b=Qe-ht,ne=et+(Q-ht),_e=Pe*Ze/U*Oe,Se=Je*Ze/U*Oe;X.projectionMatrix.makePerspective(b,ne,_e,Se,Oe,U),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function fe(X,ee){ee===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ee.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(o===null)return;let ee=X.near,ae=X.far;A.texture!==null&&(A.depthNear>0&&(ee=A.depthNear),A.depthFar>0&&(ae=A.depthFar)),C.near=W.near=k.near=ee,C.far=W.far=k.far=ae,(B!==C.near||le!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),B=C.near,le=C.far),k.layers.mask=X.layers.mask|2,W.layers.mask=X.layers.mask|4,C.layers.mask=k.layers.mask|W.layers.mask;const Q=X.parent,ue=C.cameras;fe(C,Q);for(let ye=0;ye<ue.length;ye++)fe(ue[ye],Q);ue.length===2?H(C,k,W):C.projectionMatrix.copy(k.projectionMatrix),I(X,C,Q)};function I(X,ee,ae){ae===null?X.matrix.copy(ee.matrixWorld):(X.matrix.copy(ae.matrixWorld),X.matrix.invert(),X.matrix.multiply(ee.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=jd*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(_===null&&S===null))return h},this.setFoveation=function(X){h=X,_!==null&&(_.fixedFoveation=X),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=X)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(C)};let E=null;function G(X,ee){if(v=ee.getViewerPose(m||u),T=ee,v!==null){const ae=v.views;S!==null&&(e.setRenderTargetFramebuffer(D,S.framebuffer),e.setRenderTarget(D));let Q=!1;ae.length!==C.cameras.length&&(C.cameras.length=0,Q=!0);for(let ye=0;ye<ae.length;ye++){const Re=ae[ye];let Ze=null;if(S!==null)Ze=S.getViewport(Re);else{const Je=x.getViewSubImage(_,Re);Ze=Je.viewport,ye===0&&(e.setRenderTargetTextures(D,Je.colorTexture,_.ignoreDepthValues?void 0:Je.depthStencilTexture),e.setRenderTarget(D))}let Pe=L[ye];Pe===void 0&&(Pe=new Zn,Pe.layers.enable(ye),Pe.viewport=new Wt,L[ye]=Pe),Pe.matrix.fromArray(Re.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(Re.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),ye===0&&(C.matrix.copy(Pe.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Q===!0&&C.cameras.push(Pe)}const ue=o.enabledFeatures;if(ue&&ue.includes("depth-sensing")){const ye=x.getDepthInformation(ae[0]);ye&&ye.isValid&&ye.texture&&A.init(e,ye,o.renderState)}}for(let ae=0;ae<N.length;ae++){const Q=R[ae],ue=N[ae];Q!==null&&ue!==void 0&&ue.update(Q,ee,m||u)}E&&E(X,ee),ee.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ee}),T=null}const ve=new Dg;ve.setAnimationLoop(G),this.setAnimationLoop=function(X){E=X},this.dispose=function(){}}}const Hr=new Gi,E1=new Ht;function w1(s,e){function n(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,Rg(s)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function o(y,g,D,N,R){g.isMeshBasicMaterial||g.isMeshLambertMaterial?l(y,g):g.isMeshToonMaterial?(l(y,g),x(y,g)):g.isMeshPhongMaterial?(l(y,g),v(y,g)):g.isMeshStandardMaterial?(l(y,g),_(y,g),g.isMeshPhysicalMaterial&&S(y,g,R)):g.isMeshMatcapMaterial?(l(y,g),T(y,g)):g.isMeshDepthMaterial?l(y,g):g.isMeshDistanceMaterial?(l(y,g),A(y,g)):g.isMeshNormalMaterial?l(y,g):g.isLineBasicMaterial?(u(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?h(y,g,D,N):g.isSpriteMaterial?m(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function l(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,n(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Nn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,n(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Nn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,n(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,n(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const D=e.get(g),N=D.envMap,R=D.envMapRotation;N&&(y.envMap.value=N,Hr.copy(R),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),y.envMapRotation.value.setFromMatrix4(E1.makeRotationFromEuler(Hr)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,y.aoMapTransform))}function u(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function h(y,g,D,N){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*D,y.scale.value=N*.5,g.map&&(y.map.value=g.map,n(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function v(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function x(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function _(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function S(y,g,D){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Nn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,g){g.matcap&&(y.matcap.value=g.matcap)}function A(y,g){const D=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function T1(s,e,n,r){let o={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(D,N){const R=N.program;r.uniformBlockBinding(D,R)}function m(D,N){let R=o[D.id];R===void 0&&(T(D),R=v(D),o[D.id]=R,D.addEventListener("dispose",y));const K=N.program;r.updateUBOMapping(D,K);const O=e.render.frame;l[D.id]!==O&&(_(D),l[D.id]=O)}function v(D){const N=x();D.__bindingPointIndex=N;const R=s.createBuffer(),K=D.__size,O=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,K,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,R),R}function x(){for(let D=0;D<d;D++)if(u.indexOf(D)===-1)return u.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(D){const N=o[D.id],R=D.uniforms,K=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let O=0,k=R.length;O<k;O++){const W=Array.isArray(R[O])?R[O]:[R[O]];for(let L=0,C=W.length;L<C;L++){const B=W[L];if(S(B,O,L,K)===!0){const le=B.__offset,ie=Array.isArray(B.value)?B.value:[B.value];let pe=0;for(let me=0;me<ie.length;me++){const de=ie[me],he=A(de);typeof de=="number"||typeof de=="boolean"?(B.__data[0]=de,s.bufferSubData(s.UNIFORM_BUFFER,le+pe,B.__data)):de.isMatrix3?(B.__data[0]=de.elements[0],B.__data[1]=de.elements[1],B.__data[2]=de.elements[2],B.__data[3]=0,B.__data[4]=de.elements[3],B.__data[5]=de.elements[4],B.__data[6]=de.elements[5],B.__data[7]=0,B.__data[8]=de.elements[6],B.__data[9]=de.elements[7],B.__data[10]=de.elements[8],B.__data[11]=0):(de.toArray(B.__data,pe),pe+=he.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,le,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(D,N,R,K){const O=D.value,k=N+"_"+R;if(K[k]===void 0)return typeof O=="number"||typeof O=="boolean"?K[k]=O:K[k]=O.clone(),!0;{const W=K[k];if(typeof O=="number"||typeof O=="boolean"){if(W!==O)return K[k]=O,!0}else if(W.equals(O)===!1)return W.copy(O),!0}return!1}function T(D){const N=D.uniforms;let R=0;const K=16;for(let k=0,W=N.length;k<W;k++){const L=Array.isArray(N[k])?N[k]:[N[k]];for(let C=0,B=L.length;C<B;C++){const le=L[C],ie=Array.isArray(le.value)?le.value:[le.value];for(let pe=0,me=ie.length;pe<me;pe++){const de=ie[pe],he=A(de),H=R%K,fe=H%he.boundary,I=H+fe;R+=fe,I!==0&&K-I<he.storage&&(R+=K-I),le.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=R,R+=he.storage}}}const O=R%K;return O>0&&(R+=K-O),D.__size=R,D.__cache={},this}function A(D){const N={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(N.boundary=4,N.storage=4):D.isVector2?(N.boundary=8,N.storage=8):D.isVector3||D.isColor?(N.boundary=16,N.storage=12):D.isVector4?(N.boundary=16,N.storage=16):D.isMatrix3?(N.boundary=48,N.storage=48):D.isMatrix4?(N.boundary=64,N.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),N}function y(D){const N=D.target;N.removeEventListener("dispose",y);const R=u.indexOf(N.__bindingPointIndex);u.splice(R,1),s.deleteBuffer(o[N.id]),delete o[N.id],delete l[N.id]}function g(){for(const D in o)s.deleteBuffer(o[D]);u=[],o={},l={}}return{bind:h,update:m,dispose:g}}class A1{constructor(e={}){const{canvas:n=h_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=u;const T=new Uint32Array(4),A=new Int32Array(4);let y=null,g=null;const D=[],N=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=_r,this.toneMappingExposure=1;const R=this;let K=!1,O=0,k=0,W=null,L=-1,C=null;const B=new Wt,le=new Wt;let ie=null;const pe=new Ct(0);let me=0,de=n.width,he=n.height,H=1,fe=null,I=null;const E=new Wt(0,0,de,he),G=new Wt(0,0,de,he);let ve=!1;const X=new Lg;let ee=!1,ae=!1;const Q=new Ht,ue=new Ht,ye=new J,Re=new Wt,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function Je(){return W===null?H:1}let z=r;function yt(P,Y){return n.getContext(P,Y)}try{const P={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Jd}`),n.addEventListener("webglcontextlost",xe,!1),n.addEventListener("webglcontextrestored",Ue,!1),n.addEventListener("webglcontextcreationerror",Ie,!1),z===null){const Y="webgl2";if(z=yt(Y,P),z===null)throw yt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Qe,et,Ve,ht,Oe,U,b,ne,_e,Se,ge,We,Ne,Fe,ut,we,ze,tt,rt,He,mt,lt,bt,q;function Le(){Qe=new NM(z),Qe.init(),lt=new g1(z,Qe),et=new wM(z,Qe,e,lt),Ve=new h1(z,Qe),et.reverseDepthBuffer&&_&&Ve.buffers.depth.setReversed(!0),ht=new IM(z),Oe=new QE,U=new m1(z,Qe,Ve,Oe,et,lt,ht),b=new AM(R),ne=new PM(R),_e=new B_(z),bt=new MM(z,_e),Se=new LM(z,_e,ht,bt),ge=new FM(z,Se,_e,ht),rt=new UM(z,et,U),we=new TM(Oe),We=new ZE(R,b,ne,Qe,et,bt,we),Ne=new w1(R,Oe),Fe=new e1,ut=new a1(Qe),tt=new SM(R,b,ne,Ve,ge,S,h),ze=new d1(R,ge,et),q=new T1(z,ht,et,Ve),He=new EM(z,Qe,ht),mt=new DM(z,Qe,ht),ht.programs=We.programs,R.capabilities=et,R.extensions=Qe,R.properties=Oe,R.renderLists=Fe,R.shadowMap=ze,R.state=Ve,R.info=ht}Le();const ce=new M1(R,z);this.xr=ce,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const P=Qe.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Qe.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(P){P!==void 0&&(H=P,this.setSize(de,he,!1))},this.getSize=function(P){return P.set(de,he)},this.setSize=function(P,Y,se=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}de=P,he=Y,n.width=Math.floor(P*H),n.height=Math.floor(Y*H),se===!0&&(n.style.width=P+"px",n.style.height=Y+"px"),this.setViewport(0,0,P,Y)},this.getDrawingBufferSize=function(P){return P.set(de*H,he*H).floor()},this.setDrawingBufferSize=function(P,Y,se){de=P,he=Y,H=se,n.width=Math.floor(P*se),n.height=Math.floor(Y*se),this.setViewport(0,0,P,Y)},this.getCurrentViewport=function(P){return P.copy(B)},this.getViewport=function(P){return P.copy(E)},this.setViewport=function(P,Y,se,oe){P.isVector4?E.set(P.x,P.y,P.z,P.w):E.set(P,Y,se,oe),Ve.viewport(B.copy(E).multiplyScalar(H).round())},this.getScissor=function(P){return P.copy(G)},this.setScissor=function(P,Y,se,oe){P.isVector4?G.set(P.x,P.y,P.z,P.w):G.set(P,Y,se,oe),Ve.scissor(le.copy(G).multiplyScalar(H).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(P){Ve.setScissorTest(ve=P)},this.setOpaqueSort=function(P){fe=P},this.setTransparentSort=function(P){I=P},this.getClearColor=function(P){return P.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(P=!0,Y=!0,se=!0){let oe=0;if(P){let $=!1;if(W!==null){const Ce=W.texture.format;$=Ce===af||Ce===sf||Ce===rf}if($){const Ce=W.texture.type,Ae=Ce===Hi||Ce===$r||Ce===Ba||Ce===Gs||Ce===tf||Ce===nf,qe=tt.getClearColor(),je=tt.getClearAlpha(),st=qe.r,ot=qe.g,Ye=qe.b;Ae?(T[0]=st,T[1]=ot,T[2]=Ye,T[3]=je,z.clearBufferuiv(z.COLOR,0,T)):(A[0]=st,A[1]=ot,A[2]=Ye,A[3]=je,z.clearBufferiv(z.COLOR,0,A))}else oe|=z.COLOR_BUFFER_BIT}Y&&(oe|=z.DEPTH_BUFFER_BIT),se&&(oe|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",xe,!1),n.removeEventListener("webglcontextrestored",Ue,!1),n.removeEventListener("webglcontextcreationerror",Ie,!1),Fe.dispose(),ut.dispose(),Oe.dispose(),b.dispose(),ne.dispose(),ge.dispose(),bt.dispose(),q.dispose(),We.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Zr),ce.removeEventListener("sessionend",Wi),Si.stop()};function xe(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),K=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),K=!1;const P=ht.autoReset,Y=ze.enabled,se=ze.autoUpdate,oe=ze.needsUpdate,$=ze.type;Le(),ht.autoReset=P,ze.enabled=Y,ze.autoUpdate=se,ze.needsUpdate=oe,ze.type=$}function Ie(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ct(P){const Y=P.target;Y.removeEventListener("dispose",ct),Ut(Y)}function Ut(P){qt(P),Oe.remove(P)}function qt(P){const Y=Oe.get(P).programs;Y!==void 0&&(Y.forEach(function(se){We.releaseProgram(se)}),P.isShaderMaterial&&We.releaseShaderCache(P))}this.renderBufferDirect=function(P,Y,se,oe,$,Ce){Y===null&&(Y=Ze);const Ae=$.isMesh&&$.matrixWorld.determinant()<0,qe=$a(P,Y,se,oe,$);Ve.setMaterial(oe,Ae);let je=se.index,st=1;if(oe.wireframe===!0){if(je=Se.getWireframeAttribute(se),je===void 0)return;st=2}const ot=se.drawRange,Ye=se.attributes.position;let _t=ot.start*st,At=(ot.start+ot.count)*st;Ce!==null&&(_t=Math.max(_t,Ce.start*st),At=Math.min(At,(Ce.start+Ce.count)*st)),je!==null?(_t=Math.max(_t,0),At=Math.min(At,je.count)):Ye!=null&&(_t=Math.max(_t,0),At=Math.min(At,Ye.count));const xt=At-_t;if(xt<0||xt===1/0)return;bt.setup($,oe,qe,se,je);let on,dt=He;if(je!==null&&(on=_e.get(je),dt=mt,dt.setIndex(on)),$.isMesh)oe.wireframe===!0?(Ve.setLineWidth(oe.wireframeLinewidth*Je()),dt.setMode(z.LINES)):dt.setMode(z.TRIANGLES);else if($.isLine){let Ke=oe.linewidth;Ke===void 0&&(Ke=1),Ve.setLineWidth(Ke*Je()),$.isLineSegments?dt.setMode(z.LINES):$.isLineLoop?dt.setMode(z.LINE_LOOP):dt.setMode(z.LINE_STRIP)}else $.isPoints?dt.setMode(z.POINTS):$.isSprite&&dt.setMode(z.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)dt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))dt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Ke=$._multiDrawStarts,Jn=$._multiDrawCounts,wt=$._multiDrawCount,ln=je?_e.get(je).bytesPerElement:1,ei=Oe.get(oe).currentProgram.getUniforms();for(let Yt=0;Yt<wt;Yt++)ei.setValue(z,"_gl_DrawID",Yt),dt.render(Ke[Yt]/ln,Jn[Yt])}else if($.isInstancedMesh)dt.renderInstances(_t,xt,$.count);else if(se.isInstancedBufferGeometry){const Ke=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Jn=Math.min(se.instanceCount,Ke);dt.renderInstances(_t,xt,Jn)}else dt.render(_t,xt)};function St(P,Y,se){P.transparent===!0&&P.side===Oi&&P.forceSinglePass===!1?(P.side=Nn,P.needsUpdate=!0,Qr(P,Y,se),P.side=Sr,P.needsUpdate=!0,Qr(P,Y,se),P.side=Oi):Qr(P,Y,se)}this.compile=function(P,Y,se=null){se===null&&(se=P),g=ut.get(se),g.init(Y),N.push(g),se.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(g.pushLight($),$.castShadow&&g.pushShadow($))}),P!==se&&P.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(g.pushLight($),$.castShadow&&g.pushShadow($))}),g.setupLights();const oe=new Set;return P.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ce=$.material;if(Ce)if(Array.isArray(Ce))for(let Ae=0;Ae<Ce.length;Ae++){const qe=Ce[Ae];St(qe,se,$),oe.add(qe)}else St(Ce,se,$),oe.add(Ce)}),N.pop(),g=null,oe},this.compileAsync=function(P,Y,se=null){const oe=this.compile(P,Y,se);return new Promise($=>{function Ce(){if(oe.forEach(function(Ae){Oe.get(Ae).currentProgram.isReady()&&oe.delete(Ae)}),oe.size===0){$(P);return}setTimeout(Ce,10)}Qe.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Sn=null;function mn(P){Sn&&Sn(P)}function Zr(){Si.stop()}function Wi(){Si.start()}const Si=new Dg;Si.setAnimationLoop(mn),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(P){Sn=P,ce.setAnimationLoop(P),P===null?Si.stop():Si.start()},ce.addEventListener("sessionstart",Zr),ce.addEventListener("sessionend",Wi),this.render=function(P,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(K===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(Y),Y=ce.getCamera()),P.isScene===!0&&P.onBeforeRender(R,P,Y,W),g=ut.get(P,N.length),g.init(Y),N.push(g),ue.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),X.setFromProjectionMatrix(ue),ae=this.localClippingEnabled,ee=we.init(this.clippingPlanes,ae),y=Fe.get(P,D.length),y.init(),D.push(y),ce.enabled===!0&&ce.isPresenting===!0){const Ce=R.xr.getDepthSensingMesh();Ce!==null&&Mi(Ce,Y,-1/0,R.sortObjects)}Mi(P,Y,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(fe,I),Pe=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Pe&&tt.addToRenderList(y,P),this.info.render.frame++,ee===!0&&we.beginShadows();const se=g.state.shadowsArray;ze.render(se,P,Y),ee===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const oe=y.opaque,$=y.transmissive;if(g.setupLights(),Y.isArrayCamera){const Ce=Y.cameras;if($.length>0)for(let Ae=0,qe=Ce.length;Ae<qe;Ae++){const je=Ce[Ae];wr(oe,$,P,je)}Pe&&tt.render(P);for(let Ae=0,qe=Ce.length;Ae<qe;Ae++){const je=Ce[Ae];Er(y,P,je,je.viewport)}}else $.length>0&&wr(oe,$,P,Y),Pe&&tt.render(P),Er(y,P,Y);W!==null&&(U.updateMultisampleRenderTarget(W),U.updateRenderTargetMipmap(W)),P.isScene===!0&&P.onAfterRender(R,P,Y),bt.resetDefaultState(),L=-1,C=null,N.pop(),N.length>0?(g=N[N.length-1],ee===!0&&we.setGlobalState(R.clippingPlanes,g.state.camera)):g=null,D.pop(),D.length>0?y=D[D.length-1]:y=null};function Mi(P,Y,se,oe){if(P.visible===!1)return;if(P.layers.test(Y.layers)){if(P.isGroup)se=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Y);else if(P.isLight)g.pushLight(P),P.castShadow&&g.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||X.intersectsSprite(P)){oe&&Re.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ue);const Ae=ge.update(P),qe=P.material;qe.visible&&y.push(P,Ae,qe,se,Re.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||X.intersectsObject(P))){const Ae=ge.update(P),qe=P.material;if(oe&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Re.copy(P.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Re.copy(Ae.boundingSphere.center)),Re.applyMatrix4(P.matrixWorld).applyMatrix4(ue)),Array.isArray(qe)){const je=Ae.groups;for(let st=0,ot=je.length;st<ot;st++){const Ye=je[st],_t=qe[Ye.materialIndex];_t&&_t.visible&&y.push(P,Ae,_t,se,Re.z,Ye)}}else qe.visible&&y.push(P,Ae,qe,se,Re.z,null)}}const Ce=P.children;for(let Ae=0,qe=Ce.length;Ae<qe;Ae++)Mi(Ce[Ae],Y,se,oe)}function Er(P,Y,se,oe){const $=P.opaque,Ce=P.transmissive,Ae=P.transparent;g.setupLightsView(se),ee===!0&&we.setGlobalState(R.clippingPlanes,se),oe&&Ve.viewport(B.copy(oe)),$.length>0&&ji($,Y,se),Ce.length>0&&ji(Ce,Y,se),Ae.length>0&&ji(Ae,Y,se),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function wr(P,Y,se,oe){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[oe.id]===void 0&&(g.state.transmissionRenderTarget[oe.id]=new Kr(1,1,{generateMipmaps:!0,type:Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float")?Va:Hi,minFilter:Yr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const Ce=g.state.transmissionRenderTarget[oe.id],Ae=oe.viewport||B;Ce.setSize(Ae.z,Ae.w);const qe=R.getRenderTarget();R.setRenderTarget(Ce),R.getClearColor(pe),me=R.getClearAlpha(),me<1&&R.setClearColor(16777215,.5),R.clear(),Pe&&tt.render(se);const je=R.toneMapping;R.toneMapping=_r;const st=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),g.setupLightsView(oe),ee===!0&&we.setGlobalState(R.clippingPlanes,oe),ji(P,se,oe),U.updateMultisampleRenderTarget(Ce),U.updateRenderTargetMipmap(Ce),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Ye=0,_t=Y.length;Ye<_t;Ye++){const At=Y[Ye],xt=At.object,on=At.geometry,dt=At.material,Ke=At.group;if(dt.side===Oi&&xt.layers.test(oe.layers)){const Jn=dt.side;dt.side=Nn,dt.needsUpdate=!0,qa(xt,se,oe,on,dt,Ke),dt.side=Jn,dt.needsUpdate=!0,ot=!0}}ot===!0&&(U.updateMultisampleRenderTarget(Ce),U.updateRenderTargetMipmap(Ce))}R.setRenderTarget(qe),R.setClearColor(pe,me),st!==void 0&&(oe.viewport=st),R.toneMapping=je}function ji(P,Y,se){const oe=Y.isScene===!0?Y.overrideMaterial:null;for(let $=0,Ce=P.length;$<Ce;$++){const Ae=P[$],qe=Ae.object,je=Ae.geometry,st=oe===null?Ae.material:oe,ot=Ae.group;qe.layers.test(se.layers)&&qa(qe,Y,se,je,st,ot)}}function qa(P,Y,se,oe,$,Ce){P.onBeforeRender(R,Y,se,oe,$,Ce),P.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),$.onBeforeRender(R,Y,se,oe,P,Ce),$.transparent===!0&&$.side===Oi&&$.forceSinglePass===!1?($.side=Nn,$.needsUpdate=!0,R.renderBufferDirect(se,Y,oe,$,P,Ce),$.side=Sr,$.needsUpdate=!0,R.renderBufferDirect(se,Y,oe,$,P,Ce),$.side=Oi):R.renderBufferDirect(se,Y,oe,$,P,Ce),P.onAfterRender(R,Y,se,oe,$,Ce)}function Qr(P,Y,se){Y.isScene!==!0&&(Y=Ze);const oe=Oe.get(P),$=g.state.lights,Ce=g.state.shadowsArray,Ae=$.state.version,qe=We.getParameters(P,$.state,Ce,Y,se),je=We.getProgramCacheKey(qe);let st=oe.programs;oe.environment=P.isMeshStandardMaterial?Y.environment:null,oe.fog=Y.fog,oe.envMap=(P.isMeshStandardMaterial?ne:b).get(P.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&P.envMap===null?Y.environmentRotation:P.envMapRotation,st===void 0&&(P.addEventListener("dispose",ct),st=new Map,oe.programs=st);let ot=st.get(je);if(ot!==void 0){if(oe.currentProgram===ot&&oe.lightsStateVersion===Ae)return hi(P,qe),ot}else qe.uniforms=We.getUniforms(P),P.onBeforeCompile(qe,R),ot=We.acquireProgram(qe,je),st.set(je,ot),oe.uniforms=qe.uniforms;const Ye=oe.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ye.clippingPlanes=we.uniform),hi(P,qe),oe.needsLights=Vl(P),oe.lightsStateVersion=Ae,oe.needsLights&&(Ye.ambientLightColor.value=$.state.ambient,Ye.lightProbe.value=$.state.probe,Ye.directionalLights.value=$.state.directional,Ye.directionalLightShadows.value=$.state.directionalShadow,Ye.spotLights.value=$.state.spot,Ye.spotLightShadows.value=$.state.spotShadow,Ye.rectAreaLights.value=$.state.rectArea,Ye.ltc_1.value=$.state.rectAreaLTC1,Ye.ltc_2.value=$.state.rectAreaLTC2,Ye.pointLights.value=$.state.point,Ye.pointLightShadows.value=$.state.pointShadow,Ye.hemisphereLights.value=$.state.hemi,Ye.directionalShadowMap.value=$.state.directionalShadowMap,Ye.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ye.spotShadowMap.value=$.state.spotShadowMap,Ye.spotLightMatrix.value=$.state.spotLightMatrix,Ye.spotLightMap.value=$.state.spotLightMap,Ye.pointShadowMap.value=$.state.pointShadowMap,Ye.pointShadowMatrix.value=$.state.pointShadowMatrix),oe.currentProgram=ot,oe.uniformsList=null,ot}function Ya(P){if(P.uniformsList===null){const Y=P.currentProgram.getUniforms();P.uniformsList=Nl.seqWithValue(Y.seq,P.uniforms)}return P.uniformsList}function hi(P,Y){const se=Oe.get(P);se.outputColorSpace=Y.outputColorSpace,se.batching=Y.batching,se.batchingColor=Y.batchingColor,se.instancing=Y.instancing,se.instancingColor=Y.instancingColor,se.instancingMorph=Y.instancingMorph,se.skinning=Y.skinning,se.morphTargets=Y.morphTargets,se.morphNormals=Y.morphNormals,se.morphColors=Y.morphColors,se.morphTargetsCount=Y.morphTargetsCount,se.numClippingPlanes=Y.numClippingPlanes,se.numIntersection=Y.numClipIntersection,se.vertexAlphas=Y.vertexAlphas,se.vertexTangents=Y.vertexTangents,se.toneMapping=Y.toneMapping}function $a(P,Y,se,oe,$){Y.isScene!==!0&&(Y=Ze),U.resetTextureUnits();const Ce=Y.fog,Ae=oe.isMeshStandardMaterial?Y.environment:null,qe=W===null?R.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Xs,je=(oe.isMeshStandardMaterial?ne:b).get(oe.envMap||Ae),st=oe.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ot=!!se.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Ye=!!se.morphAttributes.position,_t=!!se.morphAttributes.normal,At=!!se.morphAttributes.color;let xt=_r;oe.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(xt=R.toneMapping);const on=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,dt=on!==void 0?on.length:0,Ke=Oe.get(oe),Jn=g.state.lights;if(ee===!0&&(ae===!0||P!==C)){const gn=P===C&&oe.id===L;we.setState(oe,P,gn)}let wt=!1;oe.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Jn.state.version||Ke.outputColorSpace!==qe||$.isBatchedMesh&&Ke.batching===!1||!$.isBatchedMesh&&Ke.batching===!0||$.isBatchedMesh&&Ke.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Ke.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Ke.instancing===!1||!$.isInstancedMesh&&Ke.instancing===!0||$.isSkinnedMesh&&Ke.skinning===!1||!$.isSkinnedMesh&&Ke.skinning===!0||$.isInstancedMesh&&Ke.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ke.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ke.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ke.instancingMorph===!1&&$.morphTexture!==null||Ke.envMap!==je||oe.fog===!0&&Ke.fog!==Ce||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==we.numPlanes||Ke.numIntersection!==we.numIntersection)||Ke.vertexAlphas!==st||Ke.vertexTangents!==ot||Ke.morphTargets!==Ye||Ke.morphNormals!==_t||Ke.morphColors!==At||Ke.toneMapping!==xt||Ke.morphTargetsCount!==dt)&&(wt=!0):(wt=!0,Ke.__version=oe.version);let ln=Ke.currentProgram;wt===!0&&(ln=Qr(oe,Y,$));let ei=!1,Yt=!1,pi=!1;const Dt=ln.getUniforms(),Vn=Ke.uniforms;if(Ve.useProgram(ln.program)&&(ei=!0,Yt=!0,pi=!0),oe.id!==L&&(L=oe.id,Yt=!0),ei||C!==P){Ve.buffers.depth.getReversed()?(Q.copy(P.projectionMatrix),m_(Q),g_(Q),Dt.setValue(z,"projectionMatrix",Q)):Dt.setValue(z,"projectionMatrix",P.projectionMatrix),Dt.setValue(z,"viewMatrix",P.matrixWorldInverse);const Hn=Dt.map.cameraPosition;Hn!==void 0&&Hn.setValue(z,ye.setFromMatrixPosition(P.matrixWorld)),et.logarithmicDepthBuffer&&Dt.setValue(z,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Dt.setValue(z,"isOrthographic",P.isOrthographicCamera===!0),C!==P&&(C=P,Yt=!0,pi=!0)}if($.isSkinnedMesh){Dt.setOptional(z,$,"bindMatrix"),Dt.setOptional(z,$,"bindMatrixInverse");const gn=$.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Dt.setValue(z,"boneTexture",gn.boneTexture,U))}$.isBatchedMesh&&(Dt.setOptional(z,$,"batchingTexture"),Dt.setValue(z,"batchingTexture",$._matricesTexture,U),Dt.setOptional(z,$,"batchingIdTexture"),Dt.setValue(z,"batchingIdTexture",$._indirectTexture,U),Dt.setOptional(z,$,"batchingColorTexture"),$._colorsTexture!==null&&Dt.setValue(z,"batchingColorTexture",$._colorsTexture,U));const Ei=se.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&rt.update($,se,ln),(Yt||Ke.receiveShadow!==$.receiveShadow)&&(Ke.receiveShadow=$.receiveShadow,Dt.setValue(z,"receiveShadow",$.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(Vn.envMap.value=je,Vn.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&Y.environment!==null&&(Vn.envMapIntensity.value=Y.environmentIntensity),Yt&&(Dt.setValue(z,"toneMappingExposure",R.toneMappingExposure),Ke.needsLights&&Ka(Vn,pi),Ce&&oe.fog===!0&&Ne.refreshFogUniforms(Vn,Ce),Ne.refreshMaterialUniforms(Vn,oe,H,he,g.state.transmissionRenderTarget[P.id]),Nl.upload(z,Ya(Ke),Vn,U)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Nl.upload(z,Ya(Ke),Vn,U),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Dt.setValue(z,"center",$.center),Dt.setValue(z,"modelViewMatrix",$.modelViewMatrix),Dt.setValue(z,"normalMatrix",$.normalMatrix),Dt.setValue(z,"modelMatrix",$.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const gn=oe.uniformsGroups;for(let Hn=0,Mn=gn.length;Hn<Mn;Hn++){const Za=gn[Hn];q.update(Za,ln),q.bind(Za,ln)}}return ln}function Ka(P,Y){P.ambientLightColor.needsUpdate=Y,P.lightProbe.needsUpdate=Y,P.directionalLights.needsUpdate=Y,P.directionalLightShadows.needsUpdate=Y,P.pointLights.needsUpdate=Y,P.pointLightShadows.needsUpdate=Y,P.spotLights.needsUpdate=Y,P.spotLightShadows.needsUpdate=Y,P.rectAreaLights.needsUpdate=Y,P.hemisphereLights.needsUpdate=Y}function Vl(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(P,Y,se){Oe.get(P.texture).__webglTexture=Y,Oe.get(P.depthTexture).__webglTexture=se;const oe=Oe.get(P);oe.__hasExternalTextures=!0,oe.__autoAllocateDepthBuffer=se===void 0,oe.__autoAllocateDepthBuffer||Qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,Y){const se=Oe.get(P);se.__webglFramebuffer=Y,se.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(P,Y=0,se=0){W=P,O=Y,k=se;let oe=!0,$=null,Ce=!1,Ae=!1;if(P){const je=Oe.get(P);if(je.__useDefaultFramebuffer!==void 0)Ve.bindFramebuffer(z.FRAMEBUFFER,null),oe=!1;else if(je.__webglFramebuffer===void 0)U.setupRenderTarget(P);else if(je.__hasExternalTextures)U.rebindTextures(P,Oe.get(P.texture).__webglTexture,Oe.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Ye=P.depthTexture;if(je.__boundDepthTexture!==Ye){if(Ye!==null&&Oe.has(Ye)&&(P.width!==Ye.image.width||P.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(P)}}const st=P.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(Ae=!0);const ot=Oe.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ot[Y])?$=ot[Y][se]:$=ot[Y],Ce=!0):P.samples>0&&U.useMultisampledRTT(P)===!1?$=Oe.get(P).__webglMultisampledFramebuffer:Array.isArray(ot)?$=ot[se]:$=ot,B.copy(P.viewport),le.copy(P.scissor),ie=P.scissorTest}else B.copy(E).multiplyScalar(H).floor(),le.copy(G).multiplyScalar(H).floor(),ie=ve;if(Ve.bindFramebuffer(z.FRAMEBUFFER,$)&&oe&&Ve.drawBuffers(P,$),Ve.viewport(B),Ve.scissor(le),Ve.setScissorTest(ie),Ce){const je=Oe.get(P.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+Y,je.__webglTexture,se)}else if(Ae){const je=Oe.get(P.texture),st=Y||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,je.__webglTexture,se||0,st)}L=-1},this.readRenderTargetPixels=function(P,Y,se,oe,$,Ce,Ae){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=Oe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ae!==void 0&&(qe=qe[Ae]),qe){Ve.bindFramebuffer(z.FRAMEBUFFER,qe);try{const je=P.texture,st=je.format,ot=je.type;if(!et.textureFormatReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=P.width-oe&&se>=0&&se<=P.height-$&&z.readPixels(Y,se,oe,$,lt.convert(st),lt.convert(ot),Ce)}finally{const je=W!==null?Oe.get(W).__webglFramebuffer:null;Ve.bindFramebuffer(z.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(P,Y,se,oe,$,Ce,Ae){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=Oe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ae!==void 0&&(qe=qe[Ae]),qe){const je=P.texture,st=je.format,ot=je.type;if(!et.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=P.width-oe&&se>=0&&se<=P.height-$){Ve.bindFramebuffer(z.FRAMEBUFFER,qe);const Ye=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ye),z.bufferData(z.PIXEL_PACK_BUFFER,Ce.byteLength,z.STREAM_READ),z.readPixels(Y,se,oe,$,lt.convert(st),lt.convert(ot),0);const _t=W!==null?Oe.get(W).__webglFramebuffer:null;Ve.bindFramebuffer(z.FRAMEBUFFER,_t);const At=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await p_(z,At,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ye),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Ce),z.deleteBuffer(Ye),z.deleteSync(At),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,Y=null,se=0){P.isTexture!==!0&&(Ua("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,P=arguments[1]);const oe=Math.pow(2,-se),$=Math.floor(P.image.width*oe),Ce=Math.floor(P.image.height*oe),Ae=Y!==null?Y.x:0,qe=Y!==null?Y.y:0;U.setTexture2D(P,0),z.copyTexSubImage2D(z.TEXTURE_2D,se,0,0,Ae,qe,$,Ce),Ve.unbindTexture()},this.copyTextureToTexture=function(P,Y,se=null,oe=null,$=0){P.isTexture!==!0&&(Ua("WebGLRenderer: copyTextureToTexture function signature has changed."),oe=arguments[0]||null,P=arguments[1],Y=arguments[2],$=arguments[3]||0,se=null);let Ce,Ae,qe,je,st,ot,Ye,_t,At;const xt=P.isCompressedTexture?P.mipmaps[$]:P.image;se!==null?(Ce=se.max.x-se.min.x,Ae=se.max.y-se.min.y,qe=se.isBox3?se.max.z-se.min.z:1,je=se.min.x,st=se.min.y,ot=se.isBox3?se.min.z:0):(Ce=xt.width,Ae=xt.height,qe=xt.depth||1,je=0,st=0,ot=0),oe!==null?(Ye=oe.x,_t=oe.y,At=oe.z):(Ye=0,_t=0,At=0);const on=lt.convert(Y.format),dt=lt.convert(Y.type);let Ke;Y.isData3DTexture?(U.setTexture3D(Y,0),Ke=z.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(U.setTexture2DArray(Y,0),Ke=z.TEXTURE_2D_ARRAY):(U.setTexture2D(Y,0),Ke=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Y.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Y.unpackAlignment);const Jn=z.getParameter(z.UNPACK_ROW_LENGTH),wt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),ln=z.getParameter(z.UNPACK_SKIP_PIXELS),ei=z.getParameter(z.UNPACK_SKIP_ROWS),Yt=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,xt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,xt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,je),z.pixelStorei(z.UNPACK_SKIP_ROWS,st),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ot);const pi=P.isDataArrayTexture||P.isData3DTexture,Dt=Y.isDataArrayTexture||Y.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){const Vn=Oe.get(P),Ei=Oe.get(Y),gn=Oe.get(Vn.__renderTarget),Hn=Oe.get(Ei.__renderTarget);Ve.bindFramebuffer(z.READ_FRAMEBUFFER,gn.__webglFramebuffer),Ve.bindFramebuffer(z.DRAW_FRAMEBUFFER,Hn.__webglFramebuffer);for(let Mn=0;Mn<qe;Mn++)pi&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Oe.get(P).__webglTexture,$,ot+Mn),P.isDepthTexture?(Dt&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Oe.get(Y).__webglTexture,$,At+Mn),z.blitFramebuffer(je,st,Ce,Ae,Ye,_t,Ce,Ae,z.DEPTH_BUFFER_BIT,z.NEAREST)):Dt?z.copyTexSubImage3D(Ke,$,Ye,_t,At+Mn,je,st,Ce,Ae):z.copyTexSubImage2D(Ke,$,Ye,_t,At+Mn,je,st,Ce,Ae);Ve.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Dt?P.isDataTexture||P.isData3DTexture?z.texSubImage3D(Ke,$,Ye,_t,At,Ce,Ae,qe,on,dt,xt.data):Y.isCompressedArrayTexture?z.compressedTexSubImage3D(Ke,$,Ye,_t,At,Ce,Ae,qe,on,xt.data):z.texSubImage3D(Ke,$,Ye,_t,At,Ce,Ae,qe,on,dt,xt):P.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,$,Ye,_t,Ce,Ae,on,dt,xt.data):P.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,$,Ye,_t,xt.width,xt.height,on,xt.data):z.texSubImage2D(z.TEXTURE_2D,$,Ye,_t,Ce,Ae,on,dt,xt);z.pixelStorei(z.UNPACK_ROW_LENGTH,Jn),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,wt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ln),z.pixelStorei(z.UNPACK_SKIP_ROWS,ei),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Yt),$===0&&Y.generateMipmaps&&z.generateMipmap(Ke),Ve.unbindTexture()},this.copyTextureToTexture3D=function(P,Y,se=null,oe=null,$=0){return P.isTexture!==!0&&(Ua("WebGLRenderer: copyTextureToTexture3D function signature has changed."),se=arguments[0]||null,oe=arguments[1]||null,P=arguments[2],Y=arguments[3],$=arguments[4]||0),Ua('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,Y,se,oe,$)},this.initRenderTarget=function(P){Oe.get(P).__webglFramebuffer===void 0&&U.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?U.setTextureCube(P,0):P.isData3DTexture?U.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?U.setTexture2DArray(P,0):U.setTexture2D(P,0),Ve.unbindTexture()},this.resetState=function(){O=0,k=0,W=null,Ve.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Et._getDrawingBufferColorSpace(e),n.unpackColorSpace=Et._getUnpackColorSpace()}}class b1 extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class zg extends Ys{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Il=new J,Ul=new J,Xm=new Ht,Da=new of,Sl=new ja,td=new J,qm=new J;class C1 extends yn{constructor(e=new Dn,n=new zg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let o=1,l=n.count;o<l;o++)Il.fromBufferAttribute(n,o-1),Ul.fromBufferAttribute(n,o),r[o]=r[o-1],r[o]+=Il.distanceTo(Ul);e.setAttribute("lineDistance",new rn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Sl.copy(r.boundingSphere),Sl.applyMatrix4(o),Sl.radius+=l,e.ray.intersectsSphere(Sl)===!1)return;Xm.copy(o).invert(),Da.copy(e.ray).applyMatrix4(Xm);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,m=this.isLineSegments?2:1,v=r.index,_=r.attributes.position;if(v!==null){const S=Math.max(0,u.start),T=Math.min(v.count,u.start+u.count);for(let A=S,y=T-1;A<y;A+=m){const g=v.getX(A),D=v.getX(A+1),N=Ml(this,e,Da,h,g,D);N&&n.push(N)}if(this.isLineLoop){const A=v.getX(T-1),y=v.getX(S),g=Ml(this,e,Da,h,A,y);g&&n.push(g)}}else{const S=Math.max(0,u.start),T=Math.min(_.count,u.start+u.count);for(let A=S,y=T-1;A<y;A+=m){const g=Ml(this,e,Da,h,A,A+1);g&&n.push(g)}if(this.isLineLoop){const A=Ml(this,e,Da,h,T-1,S);A&&n.push(A)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Ml(s,e,n,r,o,l){const u=s.geometry.attributes.position;if(Il.fromBufferAttribute(u,o),Ul.fromBufferAttribute(u,l),n.distanceSqToSegment(Il,Ul,td,qm)>r)return;td.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(td);if(!(h<e.near||h>e.far))return{distance:h,point:qm.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Ym=new J,$m=new J;class R1 extends C1{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let o=0,l=n.count;o<l;o+=2)Ym.fromBufferAttribute(n,o),$m.fromBufferAttribute(n,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Ym.distanceTo($m);e.setAttribute("lineDistance",new rn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Bg extends Ys{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Km=new Ht,qd=new of,El=new ja,wl=new J;class P1 extends yn{constructor(e=new Dn,n=new Bg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),El.copy(r.boundingSphere),El.applyMatrix4(o),El.radius+=l,e.ray.intersectsSphere(El)===!1)return;Km.copy(o).invert(),qd.copy(e.ray).applyMatrix4(Km);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,m=r.index,x=r.attributes.position;if(m!==null){const _=Math.max(0,u.start),S=Math.min(m.count,u.start+u.count);for(let T=_,A=S;T<A;T++){const y=m.getX(T);wl.fromBufferAttribute(x,y),Zm(wl,y,h,o,e,n,this)}}else{const _=Math.max(0,u.start),S=Math.min(x.count,u.start+u.count);for(let T=_,A=S;T<A;T++)wl.fromBufferAttribute(x,T),Zm(wl,T,h,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Zm(s,e,n,r,o,l,u){const d=qd.distanceSqToPoint(s);if(d<n){const h=new J;qd.closestPointToPoint(s,h),h.applyMatrix4(r);const m=o.ray.origin.distanceTo(h);if(m<o.near||m>o.far)return;l.push({distance:m,distanceToRay:Math.sqrt(d),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class cf extends Dn{constructor(e=[],n=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:o};const l=[],u=[];d(o),m(r),v(),this.setAttribute("position",new rn(l,3)),this.setAttribute("normal",new rn(l.slice(),3)),this.setAttribute("uv",new rn(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function d(D){const N=new J,R=new J,K=new J;for(let O=0;O<n.length;O+=3)S(n[O+0],N),S(n[O+1],R),S(n[O+2],K),h(N,R,K,D)}function h(D,N,R,K){const O=K+1,k=[];for(let W=0;W<=O;W++){k[W]=[];const L=D.clone().lerp(R,W/O),C=N.clone().lerp(R,W/O),B=O-W;for(let le=0;le<=B;le++)le===0&&W===O?k[W][le]=L:k[W][le]=L.clone().lerp(C,le/B)}for(let W=0;W<O;W++)for(let L=0;L<2*(O-W)-1;L++){const C=Math.floor(L/2);L%2===0?(_(k[W][C+1]),_(k[W+1][C]),_(k[W][C])):(_(k[W][C+1]),_(k[W+1][C+1]),_(k[W+1][C]))}}function m(D){const N=new J;for(let R=0;R<l.length;R+=3)N.x=l[R+0],N.y=l[R+1],N.z=l[R+2],N.normalize().multiplyScalar(D),l[R+0]=N.x,l[R+1]=N.y,l[R+2]=N.z}function v(){const D=new J;for(let N=0;N<l.length;N+=3){D.x=l[N+0],D.y=l[N+1],D.z=l[N+2];const R=y(D)/2/Math.PI+.5,K=g(D)/Math.PI+.5;u.push(R,1-K)}T(),x()}function x(){for(let D=0;D<u.length;D+=6){const N=u[D+0],R=u[D+2],K=u[D+4],O=Math.max(N,R,K),k=Math.min(N,R,K);O>.9&&k<.1&&(N<.2&&(u[D+0]+=1),R<.2&&(u[D+2]+=1),K<.2&&(u[D+4]+=1))}}function _(D){l.push(D.x,D.y,D.z)}function S(D,N){const R=D*3;N.x=e[R+0],N.y=e[R+1],N.z=e[R+2]}function T(){const D=new J,N=new J,R=new J,K=new J,O=new Rt,k=new Rt,W=new Rt;for(let L=0,C=0;L<l.length;L+=9,C+=6){D.set(l[L+0],l[L+1],l[L+2]),N.set(l[L+3],l[L+4],l[L+5]),R.set(l[L+6],l[L+7],l[L+8]),O.set(u[C+0],u[C+1]),k.set(u[C+2],u[C+3]),W.set(u[C+4],u[C+5]),K.copy(D).add(N).add(R).divideScalar(3);const B=y(K);A(O,C+0,D,B),A(k,C+2,N,B),A(W,C+4,R,B)}}function A(D,N,R,K){K<0&&D.x===1&&(u[N]=D.x-1),R.x===0&&R.z===0&&(u[N]=K/2/Math.PI+.5)}function y(D){return Math.atan2(D.z,-D.x)}function g(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cf(e.vertices,e.indices,e.radius,e.details)}}class uf extends cf{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],l=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,l,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new uf(e.radius,e.detail)}}class df extends Dn{constructor(e=1,n=32,r=16,o=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const h=Math.min(u+d,Math.PI);let m=0;const v=[],x=new J,_=new J,S=[],T=[],A=[],y=[];for(let g=0;g<=r;g++){const D=[],N=g/r;let R=0;g===0&&u===0?R=.5/n:g===r&&h===Math.PI&&(R=-.5/n);for(let K=0;K<=n;K++){const O=K/n;x.x=-e*Math.cos(o+O*l)*Math.sin(u+N*d),x.y=e*Math.cos(u+N*d),x.z=e*Math.sin(o+O*l)*Math.sin(u+N*d),T.push(x.x,x.y,x.z),_.copy(x).normalize(),A.push(_.x,_.y,_.z),y.push(O+R,1-N),D.push(m++)}v.push(D)}for(let g=0;g<r;g++)for(let D=0;D<n;D++){const N=v[g][D+1],R=v[g][D],K=v[g+1][D],O=v[g+1][D+1];(g!==0||u>0)&&S.push(N,R,O),(g!==r-1||h<Math.PI)&&S.push(R,K,O)}this.setIndex(S),this.setAttribute("position",new rn(T,3)),this.setAttribute("normal",new rn(A,3)),this.setAttribute("uv",new rn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new df(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fl extends Dn{constructor(e=1,n=.4,r=12,o=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:o,arc:l},r=Math.floor(r),o=Math.floor(o);const u=[],d=[],h=[],m=[],v=new J,x=new J,_=new J;for(let S=0;S<=r;S++)for(let T=0;T<=o;T++){const A=T/o*l,y=S/r*Math.PI*2;x.x=(e+n*Math.cos(y))*Math.cos(A),x.y=(e+n*Math.cos(y))*Math.sin(A),x.z=n*Math.sin(y),d.push(x.x,x.y,x.z),v.x=e*Math.cos(A),v.y=e*Math.sin(A),_.subVectors(x,v).normalize(),h.push(_.x,_.y,_.z),m.push(T/o),m.push(S/r)}for(let S=1;S<=r;S++)for(let T=1;T<=o;T++){const A=(o+1)*S+T-1,y=(o+1)*(S-1)+T-1,g=(o+1)*(S-1)+T,D=(o+1)*S+T;u.push(A,y,D),u.push(y,g,D)}this.setIndex(u),this.setAttribute("position",new rn(d,3)),this.setAttribute("normal",new rn(h,3)),this.setAttribute("uv",new rn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class N1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Qm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Qm(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jd);function L1(){const s=vt.useRef(null),[e,n]=vt.useState(!1);return vt.useEffect(()=>{const r=s.current;if(!r)return;const o=new b1,l=r.clientWidth,u=r.clientHeight,d=new Zn(50,l/u,.1,1e3);d.position.z=18;const h=new A1({antialias:!0,alpha:!0,powerPreference:"high-performance"});h.setSize(l,u),h.setPixelRatio(Math.min(window.devicePixelRatio,2)),h.setClearColor(0,0),r.appendChild(h.domElement);const m=new ka;o.add(m);const v=new uf(3.6,1),x=new Us({color:14151680,wireframe:!0,transparent:!0,opacity:.75}),_=new Bn(v,x);m.add(_);const S=new Fl(5.2,.08,16,100),T=new Us({color:14904643,transparent:!0,opacity:.6,wireframe:!0}),A=new Bn(S,T);A.rotation.x=Math.PI/3,m.add(A);const y=new Bn(new Fl(6,.06,16,100),new Us({color:9414202,transparent:!0,opacity:.4,wireframe:!0}));y.rotation.y=Math.PI/4,y.rotation.x=Math.PI/6,m.add(y);const g=new Bn(new df(1.4,24,24),new Us({color:14151680,wireframe:!1,transparent:!0,opacity:.25}));m.add(g);const D=75,N=new Dn,R=new Float32Array(D*3),K=[],O=24;for(let ae=0;ae<D;ae++){const Q=(Math.random()-.5)*O,ue=(Math.random()-.5)*(O*.7),ye=(Math.random()-.5)*14;R[ae*3]=Q,R[ae*3+1]=ue,R[ae*3+2]=ye,K.push({x:(Math.random()-.5)*.015,y:(Math.random()-.5)*.015,z:(Math.random()-.5)*.015})}N.setAttribute("position",new Qn(R,3));const k=new Bg({color:14151680,size:.22,transparent:!0,opacity:.85}),W=new P1(N,k);o.add(W);const L=120,C=new Float32Array(L*6),B=new Dn;B.setAttribute("position",new Qn(C,3));const le=new zg({color:14904643,transparent:!0,opacity:.35,blending:sd}),ie=new R1(B,le);o.add(ie);let pe=0,me=0,de=0,he=0;const H=ae=>{const Q=r.getBoundingClientRect(),ue=(ae.clientX-Q.left)/Q.width-.5,ye=(ae.clientY-Q.top)/Q.height-.5;de=ue*2.5,he=-ye*2.5};window.addEventListener("mousemove",H,{passive:!0});let fe=!0;const I=new IntersectionObserver(([ae])=>{fe=ae.isIntersecting},{threshold:.05});I.observe(r);const E=()=>{fe=!document.hidden};document.addEventListener("visibilitychange",E);let G,ve=new N1;const X=()=>{if(G=requestAnimationFrame(X),!fe)return;ve.getDelta();const ae=ve.getElapsedTime();pe+=(de-pe)*.05,me+=(he-me)*.05,m.rotation.y+=.008,m.rotation.x+=.004,m.rotation.z=Math.sin(ae*.5)*.1,A.rotation.z+=.012,y.rotation.y+=.015;const Q=1+Math.sin(ae*2.5)*.08;g.scale.set(Q,Q,Q),d.position.x=pe*2,d.position.y=me*2,d.lookAt(0,0,0);const ue=N.attributes.position.array;for(let Pe=0;Pe<D;Pe++){const Je=Pe*3;ue[Je]+=K[Pe].x,ue[Je+1]+=K[Pe].y,ue[Je+2]+=K[Pe].z,Math.abs(ue[Je])>O/2&&(K[Pe].x*=-1),Math.abs(ue[Je+1])>O*.7/2&&(K[Pe].y*=-1),Math.abs(ue[Je+2])>7&&(K[Pe].z*=-1)}N.attributes.position.needsUpdate=!0;let ye=0;const Re=B.attributes.position.array,Ze=4.8;for(let Pe=0;Pe<D&&ye<L;Pe++){const Je=ue[Pe*3],z=ue[Pe*3+1],yt=ue[Pe*3+2];for(let Qe=Pe+1;Qe<D&&ye<L;Qe++){const et=ue[Qe*3],Ve=ue[Qe*3+1],ht=ue[Qe*3+2];(Je-et)**2+(z-Ve)**2+(yt-ht)**2<Ze*Ze&&(Re[ye*6]=Je,Re[ye*6+1]=z,Re[ye*6+2]=yt,Re[ye*6+3]=et,Re[ye*6+4]=Ve,Re[ye*6+5]=ht,ye++)}}for(let Pe=ye*6;Pe<L*6;Pe++)Re[Pe]=0;B.attributes.position.needsUpdate=!0,h.render(o,d)};X();const ee=()=>{if(!r)return;const ae=r.clientWidth,Q=r.clientHeight;d.aspect=ae/Q,d.updateProjectionMatrix(),h.setSize(ae,Q),h.setPixelRatio(Math.min(window.devicePixelRatio,2))};return window.addEventListener("resize",ee),()=>{window.removeEventListener("mousemove",H),window.removeEventListener("resize",ee),document.removeEventListener("visibilitychange",E),I.disconnect(),cancelAnimationFrame(G),r.contains(h.domElement)&&r.removeChild(h.domElement),v.dispose(),x.dispose(),S.dispose(),T.dispose(),g.geometry.dispose(),g.material.dispose(),N.dispose(),k.dispose(),B.dispose(),le.dispose(),h.dispose()}},[]),M.jsx("div",{ref:s,className:"absolute inset-0 w-full h-full pointer-events-auto cursor-grab active:cursor-grabbing z-0",onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),title:"Interactive 3D Agentic Neural Core (Move cursor to orbit)",children:M.jsxs("div",{className:"absolute top-4 right-4 z-10 pointer-events-none hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-[11px] font-mono text-cyan-400 border border-cyan-500/20",children:[M.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-pulse"}),M.jsxs("span",{children:["WebGL 60FPS: ",e?"Active Tracking":"Idle Orbit"]})]})})}function D1(){const s=[{value:"25+",label:"n8n AI Workflows Deployed",color:"text-emerald-400"},{value:"98.7%",label:"Multi-Agent Accuracy",color:"text-cyan-400"},{value:"300K+",label:"Monthly Actions Automated",color:"text-purple-400"},{value:"<150ms",label:"Optimized Edge Latency",color:"text-pink-400"}];return M.jsxs("section",{id:"hero",className:"relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden cyber-grid",children:[M.jsx(L1,{}),M.jsx("div",{className:"absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10"}),M.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10"}),M.jsx("div",{className:"absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10"}),M.jsxs("div",{className:"relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pointer-events-none",children:[M.jsxs("div",{className:"inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-6 shadow-lg shadow-cyan-500/10 pointer-events-auto",children:[M.jsxs("span",{className:"relative flex h-2 w-2",children:[M.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"}),M.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-cyan-500"})]}),M.jsx("span",{className:"text-slate-300",children:"Software Engineering Student"}),M.jsx("span",{className:"text-white/20",children:"|"}),M.jsx("span",{className:"text-cyan-400 font-semibold",children:"Agentic AI & Full-Stack Architect"})]}),M.jsxs("h1",{className:"text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 pointer-events-auto",children:["Architecting ",M.jsx("span",{className:"text-gradient-cyan",children:"Autonomous Agents"})," &"," ",M.jsx("span",{className:"text-gradient-neon",children:"Intelligent SaaS"})]}),M.jsxs("p",{className:"max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-10 pointer-events-auto",children:["Specializing in ",M.jsx("span",{className:"text-cyan-300 font-medium",children:"Web Development with AI"}),","," ",M.jsx("span",{className:"text-emerald-300 font-medium",children:"Enterprise n8n Automations"}),", and"," ",M.jsx("span",{className:"text-purple-300 font-medium",children:"Multi-Agent Systems"}),". Building fast, scalable, and self-orchestrating software for the autonomous era."]}),M.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4 mb-14 pointer-events-auto",children:[M.jsxs("a",{href:"#projects",className:"group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-black bg-gradient-to-r from-cyan-400 via-cyan-300 to-emerald-400 hover:opacity-95 shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5",children:[M.jsx(Zd,{className:"w-4 h-4 text-black"}),M.jsx("span",{children:"Explore Projects & Video Demos"}),M.jsx(ng,{className:"w-4 h-4 group-hover:translate-x-1 transition-transform"})]}),M.jsxs("a",{href:"#workflow-sim",className:"inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-200 glass-panel border border-white/10 hover:border-emerald-500/50 hover:text-emerald-400 hover:bg-emerald-950/20 transition-all transform hover:-translate-y-0.5",children:[M.jsx(Qd,{className:"w-4 h-4 text-emerald-400"}),M.jsx("span",{children:"Interactive n8n Visualizer"})]}),M.jsxs("a",{href:"#ai-twin",className:"inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-300 glass-panel border border-white/10 hover:border-purple-500/50 hover:text-purple-300 hover:bg-purple-950/20 transition-all transform hover:-translate-y-0.5",children:[M.jsx(Oa,{className:"w-4 h-4 text-purple-400"}),M.jsx("span",{children:"Test My AI Twin"})]})]}),M.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pointer-events-auto",children:s.map((e,n)=>M.jsxs("div",{className:"glass-panel p-4 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 group text-left",children:[M.jsxs("div",{className:"flex items-center justify-between mb-1",children:[M.jsx("span",{className:`text-2xl sm:text-3xl font-extrabold font-mono ${e.color} group-hover:scale-105 transition-transform`,children:e.value}),M.jsx("div",{className:"w-2 h-2 rounded-full bg-white/20 group-hover:bg-cyan-400 transition-colors"})]}),M.jsx("p",{className:"text-xs text-slate-400 font-medium leading-tight",children:e.label})]},n))}),M.jsxs("div",{className:"mt-8 inline-flex items-center gap-2 text-[11px] font-mono text-slate-500 pointer-events-auto",children:[M.jsx(sg,{className:"w-3.5 h-3.5 text-cyan-400"}),M.jsx("span",{children:"Interactive 3D Space: Drag cursor across background to navigate neural synapse lattice"})]})]})]})}const Jm=[{id:"invoice-pipeline",title:"Autonomous Invoice Extraction & ERP Sync",badge:"n8n + GPT-4o Vision + ERP",description:"Ingests multi-page PDF invoices via webhook, classifies line items via Vision LLM, validates tax ID in PostgreSQL, and creates accounting vouchers.",nodes:[{id:"trigger",name:"Webhook Trigger",type:"Webhook / HTTP",icon:Yp,color:"emerald",detail:"POST /v1/invoices/ingest",sampleOutput:{event:"file_received",filename:"invoice_august_2026.pdf",size_kb:420}},{id:"ai_vision",name:"Multimodal AI Parser",type:"AI Node (Vision LLM)",icon:yr,color:"cyan",detail:"Structured JSON extraction with JSON Schema validation",sampleOutput:{vendor:"CloudGrid Inc.",total_usd:12450,confidence:.994,line_items:4}},{id:"db_lookup",name:"PostgreSQL & RAG Check",type:"Database / Vector",icon:Xp,color:"purple",detail:"SELECT * FROM vendors WHERE tax_id = $1",sampleOutput:{vendor_found:!0,credit_limit_ok:!0,risk_score:"low"}},{id:"output",name:"ERP Write & Slack Dispatch",type:"Action / Notification",icon:za,color:"amber",detail:"Voucher #88219 Created -> Slack #finance-alerts",sampleOutput:{status:"success",voucher_id:"VCH-88219",duration_ms:380}}]},{id:"support-agent",title:"Autonomous Support Triage & Ticket Resolver",badge:"n8n + LangGraph Agent",description:"Listens to incoming client emails, uses semantic classification to determine urgency, queries Pinecone knowledge base, and drafts context-rich replies.",nodes:[{id:"trigger",name:"IMAP / Zendesk Webhook",type:"Event Listener",icon:Yp,color:"emerald",detail:"Ticket #4091: 'Database read replica replica desync'",sampleOutput:{ticket_id:"TICK-4091",user_tier:"Enterprise",sentiment:"urgent"}},{id:"ai_vision",name:"Autonomous Agent Node",type:"LLM Decision Engine",icon:yr,color:"cyan",detail:"ReAct reasoning loop with tool routing",sampleOutput:{intent:"infrastructure_issue",required_tool:"query_cluster_health"}},{id:"db_lookup",name:"Cluster Telemetry Tool",type:"API Microservice",icon:Xp,color:"purple",detail:"GET /metrics/cluster/replica-lag",sampleOutput:{lag_seconds:142,auto_heal_triggered:!0}},{id:"output",name:"Resolution & Client Reply",type:"Automated Dispatch",icon:za,color:"amber",detail:"Email dispatched to client with live system health link",sampleOutput:{ticket_updated:!0,status:"auto_resolved",time_saved_min:25}}]}],I1=()=>{const[s,e]=vt.useState(0),[n,r]=vt.useState(-1),[o,l]=vt.useState(!1),[u,d]=vt.useState([]),h=vt.useRef(null),m=Jm[s],v=()=>{if(o)return;l(!0),r(0),d([`[${new Date().toLocaleTimeString()}] Pipeline started: ${m.title}`,`[${new Date().toLocaleTimeString()}] Node 1: ${m.nodes[0].name} initialized`]);let _=0;h.current=setInterval(()=>{_++,_<m.nodes.length?(r(_),d(S=>[...S,`[${new Date().toLocaleTimeString()}] Node ${_+1} (${m.nodes[_].name}) executed in ${Math.floor(Math.random()*80+40)}ms`])):(clearInterval(h.current),h.current=null,l(!1),d(S=>[...S,`[${new Date().toLocaleTimeString()}] Pipeline completed successfully. 0 errors, 100% data integrity verified.`]))},1100)},x=()=>{h.current&&(clearInterval(h.current),h.current=null),r(-1),l(!1),d([])};return vt.useEffect(()=>()=>{h.current&&clearInterval(h.current)},[]),M.jsxs("section",{id:"workflow-sim",className:"relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",children:[M.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-12",children:[M.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono text-emerald-300 mb-3",children:[M.jsx(Qd,{className:"w-3.5 h-3.5"}),M.jsx("span",{children:"Interactive n8n & Agentic Simulator"})]}),M.jsxs("h2",{className:"text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4",children:["Visualizing ",M.jsx("span",{className:"text-gradient-emerald",children:"Autonomous Workflows"})]}),M.jsx("p",{className:"text-slate-300 text-sm sm:text-base leading-relaxed",children:"I design resilient, self-healing n8n automation pipelines and multi-agent loops that turn messy inputs into clean, deterministic business outcomes. Run the live simulation below."}),M.jsx("div",{className:"flex flex-wrap justify-center gap-2 mt-6",children:Jm.map((_,S)=>M.jsx("button",{onClick:()=>{e(S),x()},className:`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${s===S?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 shadow-lg shadow-emerald-500/10":"glass-panel text-slate-400 hover:text-slate-200 border-white/5"}`,children:_.title},_.id))})]}),M.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl",children:[M.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8",children:[M.jsxs("div",{children:[M.jsxs("div",{className:"flex items-center gap-3",children:[M.jsx("span",{className:"text-lg font-bold text-white",children:m.title}),M.jsx("span",{className:"px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-500/40",children:m.badge})]}),M.jsx("p",{className:"text-xs text-slate-400 mt-1 max-w-xl",children:m.description})]}),M.jsxs("div",{className:"flex items-center gap-3",children:[M.jsx("button",{onClick:v,disabled:o,className:`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-black transition-all ${o?"bg-slate-600 text-slate-300 cursor-not-allowed":"bg-gradient-to-r from-emerald-400 to-cyan-400 hover:opacity-95 shadow-lg shadow-emerald-500/25 active:scale-95"}`,children:o?M.jsxs(M.Fragment,{children:[M.jsx(rd,{className:"w-4 h-4 animate-spin text-black"}),M.jsx("span",{children:"Processing Nodes..."})]}):M.jsxs(M.Fragment,{children:[M.jsx(id,{className:"w-4 h-4 fill-black text-black"}),M.jsx("span",{children:"Trigger Workflow Run"})]})}),M.jsx("button",{onClick:x,className:"p-2.5 rounded-xl glass-panel text-slate-400 hover:text-white border border-white/10 hover:border-white/20 transition-colors",title:"Reset Simulation",children:M.jsx(rd,{className:"w-4 h-4"})})]})]}),M.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative",children:m.nodes.map((_,S)=>{const T=_.icon,A=n>S||!o&&n===m.nodes.length-1,y=n===S;return M.jsxs("div",{className:`relative rounded-2xl p-5 transition-all duration-300 ${y?"bg-cyan-950/40 border-2 border-cyan-400 shadow-glow-cyan scale-[1.02]":A?"bg-emerald-950/30 border border-emerald-500/40":"bg-[#0A0E1A] border border-white/5 opacity-80"}`,children:[M.jsxs("div",{className:"flex items-center justify-between mb-3",children:[M.jsx("div",{className:`p-2.5 rounded-xl ${y?"bg-cyan-500/20 text-cyan-400":A?"bg-emerald-500/20 text-emerald-400":"bg-white/5 text-slate-400"}`,children:M.jsx(T,{className:"w-5 h-5"})}),M.jsxs("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-slate-400",children:["Step ",S+1]})]}),M.jsx("h3",{className:"font-semibold text-white text-sm mb-1",children:_.name}),M.jsx("p",{className:"text-[11px] font-mono text-cyan-400 mb-3",children:_.type}),M.jsx("div",{className:"text-xs text-slate-400 bg-black/40 p-2.5 rounded-lg border border-white/5 font-mono mb-3",children:_.detail}),(A||y)&&M.jsxs("div",{className:"mt-2 pt-2 border-t border-white/10 animate-in fade-in duration-300",children:[M.jsx("span",{className:"text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-1",children:"JSON Output:"}),M.jsx("pre",{className:"text-[10px] font-mono text-emerald-300 bg-black/60 p-2 rounded overflow-x-auto max-h-24",children:JSON.stringify(_.sampleOutput,null,2)})]}),M.jsxs("div",{className:"mt-3 flex items-center gap-1.5 text-[11px] font-mono",children:[y&&M.jsxs("span",{className:"flex items-center gap-1.5 text-cyan-400",children:[M.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-ping"}),"Executing node..."]}),A&&M.jsxs("span",{className:"flex items-center gap-1 text-emerald-400",children:[M.jsx($d,{className:"w-3.5 h-3.5"}),"Success (200 OK)"]}),!y&&!A&&M.jsx("span",{className:"text-slate-500",children:"Idle / Standby"})]})]},_.id)})}),M.jsxs("div",{className:"mt-8 bg-[#04060B] rounded-2xl border border-white/10 p-4 font-mono text-xs",children:[M.jsxs("div",{className:"flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-slate-400 text-[11px]",children:[M.jsxs("span",{className:"flex items-center gap-2",children:[M.jsx($v,{className:"w-3.5 h-3.5 text-cyan-400"}),"Real-Time n8n Event Bus Stream"]}),M.jsx("span",{className:"text-emerald-400",children:o?"Status: STREAMING":n>=0?"Status: COMPLETED":"Status: IDLE"})]}),M.jsx("div",{className:"space-y-1.5 max-h-32 overflow-y-auto pr-2",children:u.length===0?M.jsx("p",{className:"text-slate-500 italic",children:'Click "Trigger Workflow Run" to stream node execution logs & output payloads...'}):u.map((_,S)=>M.jsxs("div",{className:"text-slate-300 flex items-start gap-2",children:[M.jsx("span",{className:"text-cyan-400 select-none",children:">"}),M.jsx("span",{children:_})]},S))})]})]})]})},Tl=[{id:"agentforge",title:"AgentForge",tagline:"Autonomous Multi-Agent Research & Workflow Orchestrator",category:"Agentic AI",badge:"Flagship Agent System",featured:!0,status:"Live Production",summary:"A production-grade multi-agent autonomous framework where specialized LLM agents (Researcher, Critic, Synthesizer, Coder) collaborate via stateful directed acyclic graphs to execute complex enterprise research and document generation.",metrics:[{label:"Task Success Rate",value:"98.7%"},{label:"Synthesis Speedup",value:"14x"},{label:"Autonomous Steps",value:"50+ per run"}],architecture:["StateGraph architecture inspired by LangGraph with cyclic feedback loops","Dynamic tool calling with strict schema validation & sandboxed execution","Hierarchical memory model (Short-term context window + Pinecone Vector RAG)","Server-Sent Events (SSE) streaming live agent thought chains & tool states to UI"],techStack:["Python","FastAPI","LangChain","OpenAI / Claude API","Next.js","Pinecone","TailwindCSS"],demoVideo:"https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-34538-large.mp4",canvasDemoType:"multi-agent-graph",githubUrl:"https://github.com/example/agentforge",liveUrl:"https://agentforge-demo.vercel.app",previewColor:"from-cyan-500 to-blue-600"},{id:"flowsync-n8n",title:"FlowSync AI Pipeline",tagline:"Enterprise n8n Autonomous Workflow & Document Intelligence Hub",category:"AI Automation & n8n",badge:"n8n + AI Masterpiece",featured:!0,status:"Enterprise Deployed",summary:"An end-to-end automated pipeline integrating self-hosted n8n instances with multimodal AI vision models to ingest, classify, extract, and reconcile invoices, contracts, and CRM records with automated Slack escalation.",metrics:[{label:"Monthly Documents",value:"120K+"},{label:"Manual Effort Cut",value:"92%"},{label:"Zero-Data-Loss Fallback",value:"100%"}],architecture:["Custom n8n workflow nodes communicating with microservice webhooks","Two-tier classification: fast regex filtering followed by GPT-4o Vision extraction","Automated confidence scoring triggering Human-in-the-Loop approval before ERP write","Real-time retry queues & idempotency keys ensuring zero duplicate entries"],techStack:["n8n","Docker","PostgreSQL","OpenAI Vision API","Webhook Orchestration","Python","Slack API"],demoVideo:"https://assets.mixkit.co/videos/preview/mixkit-hands-holding-smartphone-with-green-screen-41716-large.mp4",canvasDemoType:"n8n-nodes",githubUrl:"https://github.com/example/flowsync-ai-pipeline",liveUrl:"https://flowsync.example.com",previewColor:"from-emerald-500 to-teal-700"},{id:"neuroscribe-saas",title:"NeuroScribe SaaS",tagline:"Context-Aware AI Code Generation & AST Refactoring Suite",category:"SaaS & Web",badge:"Full-Stack SaaS",featured:!0,status:"Beta Testing",summary:"Developer SaaS platform that indexes entire GitHub repositories, parses Abstract Syntax Trees (AST), and provides context-aware unit test generation, security vulnerability detection, and automated PR refactors.",metrics:[{label:"AST Parsing Speed",value:"<150ms"},{label:"Weekly Active Devs",value:"1,400+"},{label:"Test Coverage Gain",value:"+38%"}],architecture:["Tree-Sitter AST parsing engine extracting symbol graphs and call hierarchies","Hybrid retrieval: BM25 lexical search blended with Dense Vector Embeddings","Stripe recurring billing with metered token usage tier architecture","Edge middleware authentication with Supabase JWT & Row Level Security (RLS)"],techStack:["React 18","TypeScript","FastAPI","Supabase","ChromaDB","Stripe API","Docker"],demoVideo:"https://assets.mixkit.co/videos/preview/mixkit-circuit-board-microchip-processing-data-42777-large.mp4",canvasDemoType:"code-stream",githubUrl:"https://github.com/example/neuroscribe-saas",liveUrl:"https://neuroscribe.io",previewColor:"from-purple-500 to-indigo-600"},{id:"omnisupport-agent",title:"OmniSupport Autonomous Agent",tagline:"Multi-Channel Autonomous Support Agent with Real-time Tool Execution",category:"Agentic AI",badge:"Autonomous Tool Use",featured:!1,status:"Production",summary:"Production customer operations AI agent capable of executing actions across Zendesk, Shopify, and PostgreSQL. Handles order cancellations, refunds, tracking lookups, and technical troubleshooting autonomously.",metrics:[{label:"Autonomous Resolution",value:"79.3%"},{label:"Avg Response Time",value:"1.2s"},{label:"CSAT Score",value:"4.8 / 5.0"}],architecture:["ReAct prompting pattern with dynamically injected function calling tools","Deterministic safety rails guarding financial operations (refund ceilings)","Multi-turn conversational memory with sentiment tracking and instant supervisor transfer","Cross-platform webhook ingestion supporting WhatsApp, Zendesk, and Web widget"],techStack:["Node.js","Express","LangChain.js","Redis (Cache & State)","PostgreSQL","Shopify API"],demoVideo:"https://assets.mixkit.co/videos/preview/mixkit-data-center-server-racks-with-flashing-lights-42861-large.mp4",canvasDemoType:"agent-chat",githubUrl:"https://github.com/example/omnisupport-agent",liveUrl:"https://omnisupport-demo.vercel.app",previewColor:"from-pink-500 to-rose-600"},{id:"datapulse-ai",title:"DataPulse AI",tagline:"Real-Time SaaS Metrics & Automated Root Cause Analysis",category:"SaaS & Web",badge:"Real-Time AI",featured:!1,status:"Live Production",summary:"High-throughput telemetry dashboard tracking server vitals and user events. When anomalies or conversion drops occur, an integrated AI agent runs diagnostic heuristics and suggests fix PRs.",metrics:[{label:"Events Ingested / Sec",value:"25,000+"},{label:"Incident MTTR Cut",value:"65%"},{label:"Latency P99",value:"42ms"}],architecture:["High-performance ClickHouse analytical backend with Kafka event streaming","Real-time WebSocket event broadcaster with backpressure handling","Unsupervised isolation forest anomaly detection pipeline","LLM diagnostic synthesizer producing incident postmortems in under 30 seconds"],techStack:["Next.js 14","TailwindCSS","Kafka","ClickHouse","Go / Golang","OpenAI"],demoVideo:"https://assets.mixkit.co/videos/preview/mixkit-server-room-rack-corridor-42859-large.mp4",canvasDemoType:"telemetry-pulse",githubUrl:"https://github.com/example/datapulse-ai",liveUrl:"https://datapulse.tech",previewColor:"from-amber-500 to-orange-600"},{id:"automate-os",title:"AutomateOS Studio",tagline:"Visual Drag-and-Drop Agentic Automation Studio",category:"AI Automation & n8n",badge:"Low-Code Studio",featured:!1,status:"Open Source",summary:"A sleek visual graph canvas allowing engineers to connect webhooks, LLM agents, code interpreters, and third-party APIs into resilient automated pipelines with real-time debugger and test runner.",metrics:[{label:"GitHub Stars",value:"850+"},{label:"Custom Nodes Built",value:"45+"},{label:"Community Contributors",value:"28"}],architecture:["React Flow canvas with custom WebGL connector cables and bezier path rendering","Isolated Python execution sandbox using WebAssembly (Pyodide) in the browser","One-click export to production n8n workflows and Docker Compose stacks","Distributed queue execution via Celery and Redis"],techStack:["React","React Flow","Python / Pyodide","Docker","n8n Nodes","Redis"],demoVideo:"https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-34538-large.mp4",canvasDemoType:"n8n-nodes",githubUrl:"https://github.com/example/automate-os",liveUrl:"https://automate-os.dev",previewColor:"from-teal-400 to-cyan-600"}],U1=["All","Agentic AI","AI Automation & n8n","SaaS & Web"];function F1({project:s,onClose:e}){const[n,r]=vt.useState("video"),[o,l]=vt.useState(!1),u=vt.useRef(null);return vt.useEffect(()=>{const d=h=>{h.key==="Escape"&&e()};return window.addEventListener("keydown",d),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",d),document.body.style.overflow="auto"}},[e]),vt.useEffect(()=>{if(n!=="canvas"&&!o)return;const d=u.current;if(!d)return;const h=d.getContext("2d");let m,v=0;const x=()=>{v+=.03,h.fillStyle="#070A14",h.fillRect(0,0,d.width,d.height),h.strokeStyle="rgba(215, 240, 0, 0.08)",h.lineWidth=1;for(let N=0;N<d.width;N+=30)h.beginPath(),h.moveTo(N,0),h.lineTo(N,d.height),h.stroke();for(let N=0;N<d.height;N+=30)h.beginPath(),h.moveTo(0,N),h.lineTo(d.width,N),h.stroke();const _=[{x:100,y:120+Math.sin(v)*20,label:"TRIGGER"},{x:260,y:80+Math.cos(v*1.2)*25,label:"AI AGENT"},{x:420,y:160+Math.sin(v*.8)*20,label:"VECTOR DB"},{x:580,y:110+Math.cos(v)*15,label:"DISPATCH"}];h.strokeStyle="#d7f000",h.lineWidth=2,h.beginPath(),h.moveTo(_[0].x,_[0].y);for(let N=1;N<_.length;N++)h.lineTo(_[N].x,_[N].y);h.stroke(),_.forEach((N,R)=>{h.fillStyle=R===1?"#e36d43":"#d7f000",h.beginPath(),h.arc(N.x,N.y,8,0,Math.PI*2),h.fill(),h.fillStyle="#ffffff",h.font="11px monospace",h.fillText(N.label,N.x-24,N.y-14)});const S=v%3,T=_[Math.floor(S)],A=_[Math.min(_.length-1,Math.floor(S)+1)],y=S-Math.floor(S),g=T.x+(A.x-T.x)*y,D=T.y+(A.y-T.y)*y;h.fillStyle="#8fa63a",h.beginPath(),h.arc(g,D,6,0,Math.PI*2),h.fill(),m=requestAnimationFrame(x)};return x(),()=>cancelAnimationFrame(m)},[n,o]),s?M.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200",onClick:e,children:M.jsxs("div",{className:"relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#070B16] rounded-3xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/10",onClick:d=>d.stopPropagation(),children:[M.jsx("button",{onClick:e,className:"absolute top-5 right-5 z-20 p-2 rounded-full glass-panel text-slate-400 hover:text-white hover:bg-white/10 border border-white/10 transition-colors","aria-label":"Close modal",children:M.jsx(og,{className:"w-5 h-5"})}),M.jsxs("div",{className:"p-6 sm:p-8 border-b border-white/10",children:[M.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-3",children:[M.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/70 text-cyan-300 border border-cyan-500/40",children:s.category}),M.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-mono bg-emerald-950/70 text-emerald-400 border border-emerald-500/40",children:s.status}),M.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-mono bg-purple-950/70 text-purple-300 border border-purple-500/40",children:s.badge})]}),M.jsx("h3",{className:"text-2xl sm:text-3xl font-extrabold text-white tracking-tight",children:s.title}),M.jsx("p",{className:"text-sm sm:text-base text-cyan-400 font-medium mt-1",children:s.tagline})]}),M.jsxs("div",{className:"px-6 sm:px-8 pt-6",children:[M.jsxs("div",{className:"flex items-center justify-between mb-3",children:[M.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono",children:[M.jsxs("button",{onClick:()=>r("video"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${n==="video"?"bg-cyan-500/20 text-cyan-300 border border-cyan-500/40":"text-slate-400 hover:text-white"}`,children:[M.jsx(ag,{className:"w-3.5 h-3.5"}),"Live Demo Video"]}),M.jsxs("button",{onClick:()=>r("canvas"),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${n==="canvas"?"bg-purple-500/20 text-purple-300 border border-purple-500/40":"text-slate-400 hover:text-white"}`,children:[M.jsx(kv,{className:"w-3.5 h-3.5"}),"Live Dynamic Topology"]})]}),M.jsx("span",{className:"text-[11px] font-mono text-emerald-400 hidden sm:inline",children:"● Verified 60fps Pipeline"})]}),M.jsx("div",{className:"relative rounded-2xl overflow-hidden border border-white/10 bg-black aspect-video max-h-[380px] flex items-center justify-center",children:n==="video"&&!o?M.jsx("video",{src:s.demoVideo,controls:!0,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,onError:()=>l(!0),className:"w-full h-full object-cover"}):M.jsx("canvas",{ref:u,width:700,height:380,className:"w-full h-full object-contain bg-[#070A14]"})})]}),M.jsxs("div",{className:"p-6 sm:p-8 space-y-6",children:[M.jsxs("div",{children:[M.jsx("h4",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 mb-2",children:"Overview & Problem Solved"}),M.jsx("p",{className:"text-sm sm:text-base text-slate-200 leading-relaxed",children:s.summary})]}),M.jsxs("div",{children:[M.jsx("h4",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 mb-3",children:"Performance & Production Metrics"}),M.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:s.metrics.map((d,h)=>M.jsxs("div",{className:"glass-panel p-3.5 rounded-xl border border-white/5",children:[M.jsx("span",{className:"text-xl font-mono font-bold text-cyan-400 block",children:d.value}),M.jsx("span",{className:"text-xs text-slate-400",children:d.label})]},h))})]}),M.jsxs("div",{children:[M.jsxs("h4",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2",children:[M.jsx(rg,{className:"w-4 h-4 text-purple-400"}),"Technical Architecture Highlights"]}),M.jsx("div",{className:"space-y-2",children:s.architecture.map((d,h)=>M.jsxs("div",{className:"flex items-start gap-2.5 text-xs sm:text-sm text-slate-300",children:[M.jsx($d,{className:"w-4 h-4 text-emerald-400 shrink-0 mt-0.5"}),M.jsx("span",{children:d})]},h))})]}),M.jsxs("div",{children:[M.jsxs("h4",{className:"text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2",children:[M.jsx(yr,{className:"w-4 h-4 text-cyan-400"}),"Technologies & Libraries"]}),M.jsx("div",{className:"flex flex-wrap gap-2",children:s.techStack.map(d=>M.jsx("span",{className:"px-3 py-1 rounded-lg text-xs font-mono bg-white/5 text-slate-200 border border-white/10",children:d},d))})]}),M.jsxs("div",{className:"pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4",children:[M.jsxs("div",{className:"flex items-center gap-3",children:[M.jsxs("a",{href:s.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-black bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-md shadow-cyan-500/20",children:[M.jsx(ig,{className:"w-4 h-4"}),M.jsx("span",{children:"Open Live Demo"})]}),M.jsxs("a",{href:s.githubUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-slate-200 glass-panel border border-white/10 hover:border-white/30 hover:text-white transition-colors",children:[M.jsx(Kd,{className:"w-4 h-4"}),M.jsx("span",{children:"Source Code"})]})]}),M.jsx("button",{onClick:e,className:"text-xs font-mono text-slate-400 hover:text-white transition-colors",children:"Close Viewer [ESC]"})]})]})]})}):null}function k1(){const[s,e]=vt.useState("All"),[n,r]=vt.useState(null),o=s==="All"?Tl:Tl.filter(l=>l.category===s);return M.jsxs("section",{id:"projects",className:"relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",children:[M.jsx("div",{className:"absolute top-1/2 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10"}),M.jsx("div",{className:"absolute bottom-10 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none -z-10"}),M.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-14",children:[M.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3",children:[M.jsx(Zd,{className:"w-3.5 h-3.5"}),M.jsx("span",{children:"Engineered with Precision"})]}),M.jsxs("h2",{className:"text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4",children:["Featured ",M.jsx("span",{className:"text-gradient-cyan",children:"Projects & AI Systems"})]}),M.jsx("p",{className:"text-slate-300 text-sm sm:text-base leading-relaxed",children:"From multi-agent research swarms and mission-critical n8n automations to scalable full-stack SaaS. Click any project to watch the live video demo and explore its architecture."}),M.jsx("div",{className:"flex flex-wrap justify-center gap-2 sm:gap-3 mt-8",children:U1.map(l=>{const u=l==="All"?Tl.length:Tl.filter(h=>h.category===l).length,d=s===l;return M.jsxs("button",{onClick:()=>e(l),className:`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 ${d?"bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25 scale-105":"glass-panel text-slate-400 hover:text-slate-200 border-white/5 hover:border-white/20"}`,children:[M.jsx("span",{children:l}),M.jsx("span",{className:`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${d?"bg-white/20 text-white":"bg-white/5 text-slate-500"}`,children:u})]},l)})})]}),M.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",children:o.map(l=>M.jsxs("div",{className:"group relative glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between",children:[M.jsxs("div",{className:"relative h-48 sm:h-52 w-full overflow-hidden bg-gradient-to-br from-slate-900 to-[#070A14] flex items-center justify-center p-6",children:[M.jsx("div",{className:`absolute inset-0 opacity-25 bg-gradient-to-tr ${l.previewColor} blur-2xl group-hover:opacity-40 transition-opacity`}),M.jsx("div",{className:"absolute inset-0 cyber-grid opacity-40"}),M.jsxs("button",{onClick:()=>r(l),className:"relative z-10 w-14 h-14 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 group-hover:border-cyan-400 flex items-center justify-center text-white group-hover:text-cyan-400 group-hover:scale-110 shadow-xl transition-all","aria-label":`Watch video demo of ${l.title}`,children:[M.jsx(id,{className:"w-6 h-6 fill-current ml-0.5"}),M.jsx("span",{className:"sr-only",children:"Watch Video Demo"})]}),M.jsx("div",{className:"absolute top-3 left-3 z-10 flex items-center gap-2",children:M.jsx("span",{className:"px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-black/70 backdrop-blur-md text-cyan-300 border border-cyan-500/30",children:l.category})}),M.jsx("div",{className:"absolute top-3 right-3 z-10",children:M.jsx("span",{className:"px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-emerald-950/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30",children:l.status})}),M.jsxs("div",{className:"absolute bottom-2 left-3 right-3 z-10 flex items-center justify-between text-[11px] font-mono text-slate-400",children:[M.jsxs("span",{className:"flex items-center gap-1",children:[M.jsx(ag,{className:"w-3.5 h-3.5 text-cyan-400"}),"Click to watch demo video"]}),M.jsx("span",{className:"text-cyan-400 font-semibold",children:l.badge})]})]}),M.jsxs("div",{className:"p-6 flex-1 flex flex-col justify-between",children:[M.jsxs("div",{children:[M.jsxs("div",{className:"flex items-start justify-between gap-2 mb-2",children:[M.jsx("h3",{className:"text-xl font-bold text-white group-hover:text-cyan-400 transition-colors",children:l.title}),M.jsx("button",{onClick:()=>r(l),className:"p-1 rounded-lg text-slate-400 group-hover:text-cyan-400 hover:bg-white/5 transition-colors",title:"View details",children:M.jsx(Bv,{className:"w-5 h-5"})})]}),M.jsx("p",{className:"text-xs font-mono text-cyan-400/90 mb-3",children:l.tagline}),M.jsx("p",{className:"text-sm text-slate-300 line-clamp-3 mb-5 leading-relaxed",children:l.summary}),M.jsx("div",{className:"grid grid-cols-2 gap-2 mb-5",children:l.metrics.slice(0,2).map((u,d)=>M.jsxs("div",{className:"bg-white/[0.03] p-2 rounded-xl border border-white/5",children:[M.jsx("span",{className:"text-xs font-mono font-bold text-white block",children:u.value}),M.jsx("span",{className:"text-[10px] text-slate-400",children:u.label})]},d))})]}),M.jsxs("div",{children:[M.jsxs("div",{className:"flex flex-wrap gap-1.5 mb-5",children:[l.techStack.slice(0,4).map(u=>M.jsx("span",{className:"px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10",children:u},u)),l.techStack.length>4&&M.jsxs("span",{className:"px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-500",children:["+",l.techStack.length-4," more"]})]}),M.jsxs("div",{className:"flex items-center gap-2 pt-4 border-t border-white/10",children:[M.jsxs("button",{onClick:()=>r(l),className:"flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm shadow-cyan-500/20",children:[M.jsx(id,{className:"w-3.5 h-3.5 fill-black"}),M.jsx("span",{children:"Watch Demo"})]}),M.jsx("a",{href:l.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-xl glass-panel text-slate-300 hover:text-white border border-white/10 hover:border-white/20 transition-colors",title:"Open Live App",children:M.jsx(ig,{className:"w-4 h-4"})}),M.jsx("a",{href:l.githubUrl,target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-xl glass-panel text-slate-300 hover:text-white border border-white/10 hover:border-white/20 transition-colors",title:"View Source Code",children:M.jsx(Kd,{className:"w-4 h-4"})})]})]})]})]},l.id))}),n&&M.jsx(F1,{project:n,onClose:()=>r(null)})]})}const O1=["What is your experience with n8n and AI automation?","Tell me about your Agentic AI and multi-agent projects.","What tech stack do you build SaaS applications with?","Are you available for freelance projects or SWE internships?"],Ia={n8n:{tools:["fetch_n8n_registry()","parse_enterprise_metrics()"],response:"I specialize in architecting production n8n workflows integrated with LLM endpoints (OpenAI, Claude, open-source models). I've deployed over 25 enterprise automations managing document intelligence (OCR invoices, contracts), automated customer triage, and multi-system synchronization across PostgreSQL, Stripe, and Slack. My focus is on fault-tolerant systems with retry queues, idempotency, and human-in-the-loop fallback."},agentic:{tools:["inspect_langgraph_nodes()","fetch_agentforge_repo()"],response:"In the Agentic AI space, I build multi-agent systems using frameworks like LangGraph, CrewAI, and AutoGen. My flagship system, AgentForge, coordinates specialized agent personas (Researcher, Critic, Synthesizer) with cyclical state graphs, sandboxed tool execution, and vector memory retrieval (Pinecone & ChromaDB) to accomplish multi-step goals with a 98.7% task completion rate."},saas:{tools:["analyze_stack_config()","query_docker_compose()"],response:"For SaaS engineering, I use React 18 / Next.js (TypeScript) paired with high-performance backends in FastAPI or Node.js. On the persistence and caching side, I rely on PostgreSQL (often Supabase with RLS) and Redis. I containerize applications with Docker, implement Stripe recurring billing, and craft responsive, 60fps UIs with Tailwind CSS and Three.js."},internships:{tools:["check_calendar_availability()","fetch_student_status()"],response:"Yes! As a Software Engineering student passionate about pushing the boundaries of AI agents and scalable SaaS, I am actively open to SWE internships, AI engineering roles, and selective contract automation projects. Feel free to use the contact form below or reach out via LinkedIn or email!"},default:{tools:["vector_search(query)","synthesize_context()"],response:"As a Software Engineering student specializing in Web Development with AI, AI Automation, n8n, SaaS, and Agentic AI, I bridge cutting-edge LLM reasoning with production software engineering. Explore my live projects above, test the interactive n8n simulator, or scroll down to get in touch!"}};function z1(){const[s,e]=vt.useState([{sender:"agent",text:"Greetings! I am Abdullah's AI Twin. Ask me anything about his skills in Agentic AI, n8n automations, SaaS engineering, or projects.",thought:"Autonomous agent initialized with student portfolio context."}]),[n,r]=vt.useState(""),[o,l]=vt.useState(!1),u=vt.useRef(null),d=()=>{var v;(v=u.current)==null||v.scrollIntoView({behavior:"smooth"})};vt.useEffect(()=>{d()},[s,o]);const h=v=>{const x=v||n;if(!x.trim()||o)return;const _=[...s,{sender:"user",text:x}];e(_),r(""),l(!0);const S=x.toLowerCase();let T=Ia.default;S.includes("n8n")||S.includes("automation")||S.includes("workflow")?T=Ia.n8n:S.includes("agent")||S.includes("multi-agent")||S.includes("langgraph")?T=Ia.agentic:S.includes("saas")||S.includes("stack")||S.includes("tech")||S.includes("web")?T=Ia.saas:(S.includes("hire")||S.includes("internship")||S.includes("available")||S.includes("freelance"))&&(T=Ia.internships),setTimeout(()=>{e(A=>[...A,{sender:"agent",text:T.response,thought:`[Executed Tools: ${T.tools.join(" → ")}] Retrieved high confidence context.`}]),l(!1)},900)},m=()=>{e([{sender:"agent",text:"Greetings! I am Abdullah's AI Twin. Ask me anything about his skills in Agentic AI, n8n automations, SaaS engineering, or projects.",thought:"Agent state reset to baseline."}])};return M.jsxs("section",{id:"ai-twin",className:"relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto",children:[M.jsxs("div",{className:"text-center max-w-2xl mx-auto mb-10",children:[M.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono text-purple-300 mb-3",children:[M.jsx(Oa,{className:"w-3.5 h-3.5"}),M.jsx("span",{children:"Interactive AI Twin Terminal"})]}),M.jsxs("h2",{className:"text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4",children:["Chat With My ",M.jsx("span",{className:"text-gradient-neon",children:"AI Twin"})]}),M.jsx("p",{className:"text-slate-300 text-sm sm:text-base leading-relaxed",children:"Ask questions to explore my tech stack, workflow designs, experience, or availability. Responses are simulated using real project data."})]}),M.jsxs("div",{className:"glass-panel rounded-3xl border border-white/10 overflow-hidden shadow-2xl",children:[M.jsxs("div",{className:"bg-[#090D18] px-5 py-3.5 border-b border-white/10 flex items-center justify-between",children:[M.jsxs("div",{className:"flex items-center gap-3",children:[M.jsxs("div",{className:"flex items-center gap-1.5",children:[M.jsx("span",{className:"w-3 h-3 rounded-full bg-rose-500/80"}),M.jsx("span",{className:"w-3 h-3 rounded-full bg-amber-500/80"}),M.jsx("span",{className:"w-3 h-3 rounded-full bg-emerald-500/80"})]}),M.jsxs("span",{className:"text-xs font-mono text-slate-400 flex items-center gap-1.5 ml-2",children:[M.jsx(sg,{className:"w-3.5 h-3.5 text-cyan-400"}),"abdullah-ai-agent@portfolio:~"]})]}),M.jsxs("button",{onClick:m,className:"text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5 px-2.5 py-1 rounded-lg hover:bg-white/5 transition-colors",children:[M.jsx(rd,{className:"w-3 h-3"}),M.jsx("span",{children:"Reset State"})]})]}),M.jsxs("div",{className:"bg-[#070A14] px-4 py-2.5 border-b border-white/5 flex items-center gap-2 overflow-x-auto text-xs",children:[M.jsx("span",{className:"text-[11px] font-mono text-slate-400 whitespace-nowrap",children:"Suggested:"}),O1.map((v,x)=>M.jsx("button",{onClick:()=>h(v),disabled:o,className:"whitespace-nowrap px-3 py-1 rounded-full bg-white/5 hover:bg-cyan-950/50 hover:text-cyan-300 text-slate-300 border border-white/10 text-xs transition-colors",children:v},x))]}),M.jsxs("div",{className:"p-4 sm:p-6 min-h-[340px] max-h-[460px] overflow-y-auto space-y-4 bg-[#05070E]/90 font-sans",children:[s.map((v,x)=>M.jsx("div",{className:`flex flex-col ${v.sender==="user"?"items-end":"items-start"}`,children:M.jsxs("div",{className:`flex gap-3 max-w-xl ${v.sender==="user"?"bg-cyan-500 text-black font-medium rounded-2xl rounded-tr-none px-4 py-3":"glass-card text-slate-200 rounded-2xl rounded-tl-none p-4 border border-white/10"}`,children:[v.sender==="agent"&&M.jsx("div",{className:"w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center shrink-0 mt-0.5",children:M.jsx(Oa,{className:"w-4 h-4 text-cyan-400"})}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("p",{className:"text-sm leading-relaxed",children:v.text}),v.thought&&M.jsxs("div",{className:"mt-2 pt-2 border-t border-white/10 font-mono text-[11px] text-cyan-400 flex items-center gap-1.5",children:[M.jsx(Xv,{className:"w-3 h-3 shrink-0"}),M.jsx("span",{className:"italic",children:v.thought})]})]}),v.sender==="user"&&M.jsx("div",{className:"w-7 h-7 rounded-lg bg-black/30 flex items-center justify-center shrink-0 mt-0.5",children:M.jsx(xx,{className:"w-4 h-4 text-white"})})]})},x)),o&&M.jsxs("div",{className:"flex items-center gap-3",children:[M.jsx("div",{className:"w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center",children:M.jsx(Oa,{className:"w-4 h-4 text-cyan-400"})}),M.jsxs("div",{className:"glass-card px-4 py-3 rounded-2xl rounded-tl-none border border-cyan-500/30 flex items-center gap-2",children:[M.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-bounce"}),M.jsx("span",{className:"w-2 h-2 rounded-full bg-purple-400 animate-bounce [animation-delay:0.2s]"}),M.jsx("span",{className:"w-2 h-2 rounded-full bg-pink-400 animate-bounce [animation-delay:0.4s]"}),M.jsx("span",{className:"text-xs font-mono text-slate-400 ml-2",children:"Agent reasoning & querying memory..."})]})]}),M.jsx("div",{ref:u})]}),M.jsxs("form",{onSubmit:v=>{v.preventDefault(),h()},className:"p-3 bg-[#080C16] border-t border-white/10 flex items-center gap-2",children:[M.jsx("input",{type:"text",value:n,onChange:v=>r(v.target.value),placeholder:"Ask about my AI agent architectures, n8n automations, or SaaS projects...",disabled:o,className:"flex-1 bg-black/50 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-white px-4 py-3 rounded-xl placeholder:text-slate-500 font-sans"}),M.jsx("button",{type:"submit",disabled:!n.trim()||o,className:"p-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black disabled:opacity-40 disabled:cursor-not-allowed transition-all font-semibold","aria-label":"Send message",children:M.jsx(za,{className:"w-4 h-4"})})]})]})]})}const nd=[{id:"agentic-ai",title:"Agentic AI & LLM Systems",icon:"Bot",description:"Designing autonomous multi-agent swarms, goal-directed planners, function calling tools, and RAG pipelines.",color:"cyan",skills:[{name:"Multi-Agent Frameworks (LangGraph, CrewAI, AutoGen)",level:95,tag:"Core"},{name:"LLM Orchestration & Prompt Engineering (Claude 3.5, GPT-4o)",level:98,tag:"Expert"},{name:"Vector Databases & Semantic Search (Pinecone, ChromaDB, Weaviate)",level:92,tag:"Production"},{name:"Function Calling & Tool Execution Rails",level:96,tag:"Architecture"},{name:"Autonomous Memory Models (Buffer, Vector RAG, Hierarchical)",level:90,tag:"Advanced"}]},{id:"automation-n8n",title:"AI Automation & n8n Hubs",icon:"Workflow",description:"Architecting self-hosted and cloud automated workflows bridging APIs, AI endpoints, and enterprise databases.",color:"emerald",skills:[{name:"Self-Hosted & Enterprise n8n Workflows",level:98,tag:"Specialist"},{name:"Webhook Ingestion & Idempotent Event Handlers",level:94,tag:"Production"},{name:"Multimodal Document Intelligence (OCR + AI Vision)",level:92,tag:"Deployed"},{name:"Custom n8n JavaScript / Python Automation Nodes",level:95,tag:"Custom Dev"},{name:"Error Catching, Retry Policies & Dead Letter Queues",level:93,tag:"Resilience"}]},{id:"fullstack-saas",title:"Modern Full-Stack & SaaS",icon:"Layers",description:"Shipping responsive, high-speed, and secure web applications with real-time reactive interfaces.",color:"violet",skills:[{name:"React 18 / Next.js (App Router, Server Components)",level:94,tag:"Core"},{name:"TypeScript & Modern JavaScript (ESNext)",level:92,tag:"Production"},{name:"Backend APIs (FastAPI, Node.js, Express, Python)",level:95,tag:"High Performance"},{name:"Database Engineering (PostgreSQL, Supabase, Redis, Prisma)",level:90,tag:"Data Layer"},{name:"Tailwind CSS & 3D Interactive WebGL (Three.js)",level:91,tag:"UI/UX"}]},{id:"swe-foundations",title:"Software Engineering & DevOps",icon:"Cpu",description:"Solid theoretical and practical foundations in algorithms, microservices, containerization, and CI/CD.",color:"amber",skills:[{name:"Data Structures, Algorithms & System Design",level:92,tag:"Foundations"},{name:"Docker Containerization & Microservices",level:88,tag:"DevOps"},{name:"Git Workflow, Branching Strategies & CI/CD Actions",level:95,tag:"Workflow"},{name:"RESTful & GraphQL API Architecture",level:94,tag:"Design"},{name:"Security, Rate Limiting & Token Tier Guardrails",level:89,tag:"Hardening"}]}],B1=["Python","FastAPI","LangGraph","n8n","OpenAI API","Claude 3.5 Sonnet","React","TypeScript","Next.js","Docker","PostgreSQL","Pinecone","Supabase","Redis","Three.js","Tailwind CSS","Linux","Git"],V1={Bot:Oa,Workflow:Qd,Layers:rg,Cpu:yr};function H1(){const[s,e]=vt.useState("all"),n=s==="all"?nd:nd.filter(l=>l.id===s),r=l=>{switch(l){case"cyan":return"border-cyan-500/30 hover:border-cyan-400/60 shadow-glow-cyan";case"emerald":return"border-emerald-500/30 hover:border-emerald-400/60 shadow-glow-emerald";case"violet":return"border-purple-500/30 hover:border-purple-400/60 shadow-glow-violet";case"amber":return"border-amber-500/30 hover:border-amber-400/60 shadow-glow-amber";default:return"border-white/10"}},o=l=>{switch(l){case"cyan":return"bg-gradient-to-r from-cyan-500 to-blue-500";case"emerald":return"bg-gradient-to-r from-emerald-400 to-teal-500";case"violet":return"bg-gradient-to-r from-purple-500 to-pink-500";case"amber":return"bg-gradient-to-r from-amber-400 to-orange-500";default:return"bg-cyan-500"}};return M.jsxs("section",{id:"skills",className:"relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",children:[M.jsx("div",{className:"absolute top-1/3 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10"}),M.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-14",children:[M.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3",children:[M.jsx(yr,{className:"w-3.5 h-3.5"}),M.jsx("span",{children:"Technical Architecture & Expertise"})]}),M.jsxs("h2",{className:"text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4",children:["Skills & ",M.jsx("span",{className:"text-gradient-neon",children:"Engineering Matrix"})]}),M.jsx("p",{className:"text-slate-300 text-sm sm:text-base leading-relaxed",children:"Bridging cutting-edge LLM agent cognition, production n8n automation, and resilient software engineering practices."}),M.jsxs("div",{className:"flex flex-wrap justify-center gap-2 mt-8",children:[M.jsx("button",{onClick:()=>e("all"),className:`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${s==="all"?"bg-cyan-500 text-black font-semibold shadow-lg shadow-cyan-500/20":"glass-panel text-slate-400 hover:text-white border-white/5"}`,children:"All Competencies"}),nd.map(l=>M.jsx("button",{onClick:()=>e(l.id),className:`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${s===l.id?"bg-cyan-500 text-black font-semibold shadow-lg shadow-cyan-500/20":"glass-panel text-slate-400 hover:text-white border-white/5"}`,children:l.title.split(" & ")[0]},l.id))]})]}),M.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8",children:n.map(l=>{const u=V1[l.icon]||yr;return M.jsxs("div",{className:`glass-panel rounded-3xl p-6 sm:p-8 border transition-all duration-300 ${r(l.color)}`,children:[M.jsxs("div",{className:"flex items-start gap-4 mb-6",children:[M.jsx("div",{className:"p-3 rounded-2xl bg-white/5 border border-white/10 text-white shrink-0",children:M.jsx(u,{className:"w-6 h-6 text-cyan-400"})}),M.jsxs("div",{children:[M.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white tracking-tight",children:l.title}),M.jsx("p",{className:"text-xs text-slate-400 mt-1 leading-relaxed",children:l.description})]})]}),M.jsx("div",{className:"space-y-4",children:l.skills.map((d,h)=>M.jsxs("div",{className:"space-y-1.5",children:[M.jsxs("div",{className:"flex items-center justify-between text-xs",children:[M.jsx("span",{className:"font-medium text-slate-200",children:d.name}),M.jsx("span",{className:"font-mono text-[11px] text-cyan-400",children:d.tag})]}),M.jsx("div",{className:"w-full h-2 rounded-full bg-white/5 overflow-hidden p-[1px]",children:M.jsx("div",{className:`h-full rounded-full transition-all duration-1000 ${o(l.color)}`,style:{width:`${d.level}%`}})})]},h))})]},l.id)})}),M.jsxs("div",{className:"mt-16 pt-10 border-t border-white/10",children:[M.jsx("div",{className:"text-center mb-6",children:M.jsx("span",{className:"text-xs font-mono text-slate-400 uppercase tracking-wider",children:"Frameworks, Tools & Infrastructure"})}),M.jsx("div",{className:"flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto",children:B1.map((l,u)=>M.jsxs("div",{className:"px-4 py-2 rounded-xl text-xs font-mono text-slate-300 bg-white/[0.03] border border-white/10 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors flex items-center gap-2 shadow-sm",children:[M.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400"}),M.jsx("span",{children:l})]},u))})]})]})}const G1=[{period:"2023 - Present",role:"Software Engineering Student & AI Systems Researcher",organization:"University Computer Science & Engineering",badge:"Academic & Research",description:"Deepening theoretical and applied foundations in distributed systems, operating systems, algorithms, and artificial intelligence. Leading the University AI & Robotics software team and publishing open-source tooling.",achievements:["Dean's Honor List for outstanding academic performance in Software Architecture & Algorithms","Founded the campus Agentic AI Guild, mentoring 40+ junior developers in building autonomous pipelines","Authored an open research benchmark analyzing latency tradeoffs in hierarchical multi-agent LLM systems"],tags:["Distributed Systems","Algorithms","Autonomous Agents","Research"]},{period:"2024 - Present",role:"Autonomous AI & Workflow Automation Engineer",organization:"Independent Contractor & Client Systems",badge:"Commercial Impact",description:"Designing end-to-end autonomous business operations for startups and digital agencies. Building resilient n8n pipelines, custom API connectors, and LLM-powered back-office workflows.",achievements:["Deployed 25+ production n8n workflows managing lead triage, document OCR, and automated CRM sync","Automated over 300,000 monthly operations, cutting client manual overhead by an average of 85%","Engineered resilient error recovery and notification bots with 99.9% pipeline reliability"],tags:["n8n","Webhooks","FastAPI","OpenAI","Zapier Migration"]},{period:"2024",role:"1st Place Winner - AI Innovation Hackathon",organization:"National Tech Hackathon",badge:"1st Place Award",description:"Engineered 'OmniRescue AI'—an offline-capable autonomous multi-agent disaster response coordination tool using local small language models (SLMs) and mesh networks in 36 hours.",achievements:["Won Grand Prize among 120+ collegiate and professional teams","Judged on algorithmic efficiency, real-time agent coordination, and UI responsiveness","Featured in university innovation showcase and received seed sponsorship"],tags:["Hackathon Winner","Edge AI","React","Python"]},{period:"2023 - 2024",role:"Full-Stack Web Developer",organization:"Open-Source & Web Dev Projects",badge:"Full-Stack",description:"Created modern SaaS web applications, developer UI libraries, and microservice backends utilizing React, TypeScript, Node.js, and PostgreSQL.",achievements:["Contributed code improvements and documentation to open-source agentic and automation repos","Built 10+ responsive web projects with modern glassmorphism and real-time WebSocket state","Mastered CI/CD pipelines, Docker containerized testing, and cloud deployment on Vercel/AWS"],tags:["React","TypeScript","PostgreSQL","Docker","REST APIs"]}];function W1(){return M.jsxs("section",{id:"experience",className:"relative py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto",children:[M.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none -z-10"}),M.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[M.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono text-emerald-300 mb-3",children:[M.jsx(sx,{className:"w-3.5 h-3.5"}),M.jsx("span",{children:"Academic & Professional Journey"})]}),M.jsxs("h2",{className:"text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4",children:["Software Engineering ",M.jsx("span",{className:"text-gradient-emerald",children:"Journey"})]}),M.jsx("p",{className:"text-slate-300 text-sm sm:text-base leading-relaxed",children:"Combining academic rigor in computer science with real-world agent deployments, hackathon victories, and client automation pipelines."})]}),M.jsx("div",{className:"relative border-l border-white/10 ml-4 sm:ml-8 space-y-10",children:G1.map((s,e)=>M.jsxs("div",{className:"relative pl-6 sm:pl-10 group",children:[M.jsx("div",{className:"absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#070A14] border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all duration-300 shadow-glow-cyan"}),M.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 group-hover:border-cyan-500/40 transition-all duration-300",children:[M.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 mb-3",children:[M.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[M.jsx("span",{className:"text-xs font-mono font-bold text-cyan-400",children:s.period}),M.jsx("span",{className:"text-slate-600",children:"•"}),M.jsx("span",{className:"px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10",children:s.badge})]}),M.jsx("span",{className:"text-xs font-mono text-slate-400",children:s.organization})]}),M.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors",children:s.role}),M.jsx("p",{className:"text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed",children:s.description}),M.jsx("div",{className:"space-y-2 mb-5",children:s.achievements.map((n,r)=>M.jsxs("div",{className:"flex items-start gap-2 text-xs sm:text-sm text-slate-400",children:[M.jsx($d,{className:"w-4 h-4 text-emerald-400 shrink-0 mt-0.5"}),M.jsx("span",{children:n})]},r))}),M.jsx("div",{className:"flex flex-wrap gap-1.5 pt-3 border-t border-white/5",children:s.tags.map((n,r)=>M.jsxs("span",{className:"px-2.5 py-0.5 rounded-lg text-[10px] font-mono bg-cyan-950/40 text-cyan-300 border border-cyan-500/20",children:["#",n]},r))})]})]},e))})]})}var ff={};(function s(e,n,r,o){var l=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),u=typeof Path2D=="function"&&typeof DOMMatrix=="function",d=(function(){if(!e.OffscreenCanvas)return!1;try{var I=new OffscreenCanvas(1,1),E=I.getContext("2d");E.fillRect(0,0,1,1);var G=I.transferToImageBitmap();E.createPattern(G,"no-repeat")}catch{return!1}return!0})();function h(){}function m(I){var E=n.exports.Promise,G=E!==void 0?E:e.Promise;return typeof G=="function"?new G(I):(I(h,h),null)}var v=(function(I,E){return{transform:function(G){if(I)return G;if(E.has(G))return E.get(G);var ve=new OffscreenCanvas(G.width,G.height),X=ve.getContext("2d");return X.drawImage(G,0,0),E.set(G,ve),ve},clear:function(){E.clear()}}})(d,new Map),x=(function(){var I=Math.floor(16.666666666666668),E,G,ve={},X=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(E=function(ee){var ae=Math.random();return ve[ae]=requestAnimationFrame(function Q(ue){X===ue||X+I-1<ue?(X=ue,delete ve[ae],ee()):ve[ae]=requestAnimationFrame(Q)}),ae},G=function(ee){ve[ee]&&cancelAnimationFrame(ve[ee])}):(E=function(ee){return setTimeout(ee,I)},G=function(ee){return clearTimeout(ee)}),{frame:E,cancel:G}})(),_=(function(){var I,E,G={};function ve(X){function ee(ae,Q){X.postMessage({options:ae||{},callback:Q})}X.init=function(Q){var ue=Q.transferControlToOffscreen();X.postMessage({canvas:ue},[ue])},X.fire=function(Q,ue,ye){if(E)return ee(Q,null),E;var Re=Math.random().toString(36).slice(2);return E=m(function(Ze){function Pe(Je){Je.data.callback===Re&&(delete G[Re],X.removeEventListener("message",Pe),E=null,v.clear(),ye(),Ze())}X.addEventListener("message",Pe),ee(Q,Re),G[Re]=Pe.bind(null,{data:{callback:Re}})}),E},X.reset=function(){X.postMessage({reset:!0});for(var Q in G)G[Q](),delete G[Q]}}return function(){if(I)return I;if(!r&&l){var X=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{I=new Worker(URL.createObjectURL(new Blob([X])))}catch(ee){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",ee),null}ve(I)}return I}})(),S={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function T(I,E){return E?E(I):I}function A(I){return I!=null}function y(I,E,G){return T(I&&A(I[E])?I[E]:S[E],G)}function g(I){return I<0?0:Math.floor(I)}function D(I,E){return Math.floor(Math.random()*(E-I))+I}function N(I){return parseInt(I,16)}function R(I){return I.map(K)}function K(I){var E=String(I).replace(/[^0-9a-f]/gi,"");return E.length<6&&(E=E[0]+E[0]+E[1]+E[1]+E[2]+E[2]),{r:N(E.substring(0,2)),g:N(E.substring(2,4)),b:N(E.substring(4,6))}}function O(I){var E=y(I,"origin",Object);return E.x=y(E,"x",Number),E.y=y(E,"y",Number),E}function k(I){I.width=document.documentElement.clientWidth,I.height=document.documentElement.clientHeight}function W(I){var E=I.getBoundingClientRect();I.width=E.width,I.height=E.height}function L(I){var E=document.createElement("canvas");return E.style.position="fixed",E.style.top="0px",E.style.left="0px",E.style.pointerEvents="none",E.style.zIndex=I,E}function C(I,E,G,ve,X,ee,ae,Q,ue){I.save(),I.translate(E,G),I.rotate(ee),I.scale(ve,X),I.arc(0,0,1,ae,Q,ue),I.restore()}function B(I){var E=I.angle*(Math.PI/180),G=I.spread*(Math.PI/180);return{x:I.x,y:I.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:I.startVelocity*.5+Math.random()*I.startVelocity,angle2D:-E+(.5*G-Math.random()*G),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:I.color,shape:I.shape,tick:0,totalTicks:I.ticks,decay:I.decay,drift:I.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:I.gravity*3,ovalScalar:.6,scalar:I.scalar,flat:I.flat}}function le(I,E){E.x+=Math.cos(E.angle2D)*E.velocity+E.drift,E.y+=Math.sin(E.angle2D)*E.velocity+E.gravity,E.velocity*=E.decay,E.flat?(E.wobble=0,E.wobbleX=E.x+10*E.scalar,E.wobbleY=E.y+10*E.scalar,E.tiltSin=0,E.tiltCos=0,E.random=1):(E.wobble+=E.wobbleSpeed,E.wobbleX=E.x+10*E.scalar*Math.cos(E.wobble),E.wobbleY=E.y+10*E.scalar*Math.sin(E.wobble),E.tiltAngle+=.1,E.tiltSin=Math.sin(E.tiltAngle),E.tiltCos=Math.cos(E.tiltAngle),E.random=Math.random()+2);var G=E.tick++/E.totalTicks,ve=E.x+E.random*E.tiltCos,X=E.y+E.random*E.tiltSin,ee=E.wobbleX+E.random*E.tiltCos,ae=E.wobbleY+E.random*E.tiltSin;if(I.fillStyle="rgba("+E.color.r+", "+E.color.g+", "+E.color.b+", "+(1-G)+")",I.beginPath(),u&&E.shape.type==="path"&&typeof E.shape.path=="string"&&Array.isArray(E.shape.matrix))I.fill(he(E.shape.path,E.shape.matrix,E.x,E.y,Math.abs(ee-ve)*.1,Math.abs(ae-X)*.1,Math.PI/10*E.wobble));else if(E.shape.type==="bitmap"){var Q=Math.PI/10*E.wobble,ue=Math.abs(ee-ve)*.1,ye=Math.abs(ae-X)*.1,Re=E.shape.bitmap.width*E.scalar,Ze=E.shape.bitmap.height*E.scalar,Pe=new DOMMatrix([Math.cos(Q)*ue,Math.sin(Q)*ue,-Math.sin(Q)*ye,Math.cos(Q)*ye,E.x,E.y]);Pe.multiplySelf(new DOMMatrix(E.shape.matrix));var Je=I.createPattern(v.transform(E.shape.bitmap),"no-repeat");Je.setTransform(Pe),I.globalAlpha=1-G,I.fillStyle=Je,I.fillRect(E.x-Re/2,E.y-Ze/2,Re,Ze),I.globalAlpha=1}else if(E.shape==="circle")I.ellipse?I.ellipse(E.x,E.y,Math.abs(ee-ve)*E.ovalScalar,Math.abs(ae-X)*E.ovalScalar,Math.PI/10*E.wobble,0,2*Math.PI):C(I,E.x,E.y,Math.abs(ee-ve)*E.ovalScalar,Math.abs(ae-X)*E.ovalScalar,Math.PI/10*E.wobble,0,2*Math.PI);else if(E.shape==="star")for(var z=Math.PI/2*3,yt=4*E.scalar,Qe=8*E.scalar,et=E.x,Ve=E.y,ht=5,Oe=Math.PI/ht;ht--;)et=E.x+Math.cos(z)*Qe,Ve=E.y+Math.sin(z)*Qe,I.lineTo(et,Ve),z+=Oe,et=E.x+Math.cos(z)*yt,Ve=E.y+Math.sin(z)*yt,I.lineTo(et,Ve),z+=Oe;else I.moveTo(Math.floor(E.x),Math.floor(E.y)),I.lineTo(Math.floor(E.wobbleX),Math.floor(X)),I.lineTo(Math.floor(ee),Math.floor(ae)),I.lineTo(Math.floor(ve),Math.floor(E.wobbleY));return I.closePath(),I.fill(),E.tick<E.totalTicks}function ie(I,E,G,ve,X){var ee=E.slice(),ae=I.getContext("2d"),Q,ue,ye=m(function(Re){function Ze(){Q=ue=null,ae.clearRect(0,0,ve.width,ve.height),v.clear(),X(),Re()}function Pe(){r&&!(ve.width===o.width&&ve.height===o.height)&&(ve.width=I.width=o.width,ve.height=I.height=o.height),!ve.width&&!ve.height&&(G(I),ve.width=I.width,ve.height=I.height),ae.clearRect(0,0,ve.width,ve.height),ee=ee.filter(function(Je){return le(ae,Je)}),ee.length?Q=x.frame(Pe):Ze()}Q=x.frame(Pe),ue=Ze});return{addFettis:function(Re){return ee=ee.concat(Re),ye},canvas:I,promise:ye,reset:function(){Q&&x.cancel(Q),ue&&ue()}}}function pe(I,E){var G=!I,ve=!!y(E||{},"resize"),X=!1,ee=y(E,"disableForReducedMotion",Boolean),ae=l&&!!y(E||{},"useWorker"),Q=ae?_():null,ue=G?k:W,ye=I&&Q?!!I.__confetti_initialized:!1,Re=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Ze;function Pe(z,yt,Qe){for(var et=y(z,"particleCount",g),Ve=y(z,"angle",Number),ht=y(z,"spread",Number),Oe=y(z,"startVelocity",Number),U=y(z,"decay",Number),b=y(z,"gravity",Number),ne=y(z,"drift",Number),_e=y(z,"colors",R),Se=y(z,"ticks",Number),ge=y(z,"shapes"),We=y(z,"scalar"),Ne=!!y(z,"flat"),Fe=O(z),ut=et,we=[],ze=I.width*Fe.x,tt=I.height*Fe.y;ut--;)we.push(B({x:ze,y:tt,angle:Ve,spread:ht,startVelocity:Oe,color:_e[ut%_e.length],shape:ge[D(0,ge.length)],ticks:Se,decay:U,gravity:b,drift:ne,scalar:We,flat:Ne}));return Ze?Ze.addFettis(we):(Ze=ie(I,we,ue,yt,Qe),Ze.promise)}function Je(z){var yt=ee||y(z,"disableForReducedMotion",Boolean),Qe=y(z,"zIndex",Number);if(yt&&Re)return m(function(Oe){Oe()});G&&Ze?I=Ze.canvas:G&&!I&&(I=L(Qe),document.body.appendChild(I)),ve&&!ye&&ue(I);var et={width:I.width,height:I.height};Q&&!ye&&Q.init(I),ye=!0,Q&&(I.__confetti_initialized=!0);function Ve(){if(Q){var Oe={getBoundingClientRect:function(){if(!G)return I.getBoundingClientRect()}};ue(Oe),Q.postMessage({resize:{width:Oe.width,height:Oe.height}});return}et.width=et.height=null}function ht(){Ze=null,ve&&(X=!1,e.removeEventListener("resize",Ve)),G&&I&&(document.body.contains(I)&&document.body.removeChild(I),I=null,ye=!1)}return ve&&!X&&(X=!0,e.addEventListener("resize",Ve,!1)),Q?Q.fire(z,et,ht):Pe(z,et,ht)}return Je.reset=function(){Q&&Q.reset(),Ze&&Ze.reset()},Je}var me;function de(){return me||(me=pe(null,{useWorker:!0,resize:!0})),me}function he(I,E,G,ve,X,ee,ae){var Q=new Path2D(I),ue=new Path2D;ue.addPath(Q,new DOMMatrix(E));var ye=new Path2D;return ye.addPath(ue,new DOMMatrix([Math.cos(ae)*X,Math.sin(ae)*X,-Math.sin(ae)*ee,Math.cos(ae)*ee,G,ve])),ye}function H(I){if(!u)throw new Error("path confetti are not supported in this browser");var E,G;typeof I=="string"?E=I:(E=I.path,G=I.matrix);var ve=new Path2D(E),X=document.createElement("canvas"),ee=X.getContext("2d");if(!G){for(var ae=1e3,Q=ae,ue=ae,ye=0,Re=0,Ze,Pe,Je=0;Je<ae;Je+=2)for(var z=0;z<ae;z+=2)ee.isPointInPath(ve,Je,z,"nonzero")&&(Q=Math.min(Q,Je),ue=Math.min(ue,z),ye=Math.max(ye,Je),Re=Math.max(Re,z));Ze=ye-Q,Pe=Re-ue;var yt=10,Qe=Math.min(yt/Ze,yt/Pe);G=[Qe,0,0,Qe,-Math.round(Ze/2+Q)*Qe,-Math.round(Pe/2+ue)*Qe]}return{type:"path",path:E,matrix:G}}function fe(I){var E,G=1,ve="#000000",X='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof I=="string"?E=I:(E=I.text,G="scalar"in I?I.scalar:G,X="fontFamily"in I?I.fontFamily:X,ve="color"in I?I.color:ve);var ee=10*G,ae=""+ee+"px "+X,Q=new OffscreenCanvas(ee,ee),ue=Q.getContext("2d");ue.font=ae;var ye=ue.measureText(E),Re=Math.ceil(ye.actualBoundingBoxRight+ye.actualBoundingBoxLeft),Ze=Math.ceil(ye.actualBoundingBoxAscent+ye.actualBoundingBoxDescent),Pe=2,Je=ye.actualBoundingBoxLeft+Pe,z=ye.actualBoundingBoxAscent+Pe;Re+=Pe+Pe,Ze+=Pe+Pe,Q=new OffscreenCanvas(Re,Ze),ue=Q.getContext("2d"),ue.font=ae,ue.fillStyle=ve,ue.fillText(E,Je,z);var yt=1/G;return{type:"bitmap",bitmap:Q.transferToImageBitmap(),matrix:[yt,0,0,yt,-Re*yt/2,-Ze*yt/2]}}n.exports=function(){return de().apply(this,arguments)},n.exports.reset=function(){de().reset()},n.exports.create=pe,n.exports.shapeFromPath=H,n.exports.shapeFromText=fe})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),ff,!1);const j1=ff.exports;ff.exports.create;function X1(){const[s,e]=vt.useState({name:"",email:"",projectType:"Agentic AI System",message:""}),[n,r]=vt.useState(!1),[o,l]=vt.useState(!1),[u,d]=vt.useState(!1),h="abdullah.dev.ai@example.com",m=()=>{navigator.clipboard.writeText(h),d(!0),setTimeout(()=>d(!1),2500)},v=x=>{x.preventDefault(),!(!s.name||!s.email||!s.message)&&(r(!0),setTimeout(()=>{r(!1),l(!0),j1({particleCount:80,spread:70,origin:{y:.7},colors:["#d7f000","#e36d43","#8fa63a","#f1f0e9"]}),e({name:"",email:"",projectType:"Agentic AI System",message:""})},1e3))};return M.jsxs("section",{id:"contact",className:"relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto",children:[M.jsx("div",{className:"absolute -bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none -z-10"}),M.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[M.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3",children:[M.jsx(Zd,{className:"w-3.5 h-3.5"}),M.jsx("span",{children:"Let's Build Something Extraordinary"})]}),M.jsxs("h2",{className:"text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4",children:["Initiate ",M.jsx("span",{className:"text-gradient-cyan",children:"Contact & Collaboration"})]}),M.jsx("p",{className:"text-slate-300 text-sm sm:text-base leading-relaxed",children:"Whether you are looking to deploy an autonomous AI agent, build scalable n8n workflows, or recruit for an engineering position, let's connect."})]}),M.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[M.jsx("div",{className:"lg:col-span-5 space-y-6",children:M.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6",children:[M.jsx("h3",{className:"text-xl font-bold text-white tracking-tight",children:"Get In Touch Directly"}),M.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:"I am active across developer communities and typically respond to messages within 12 hours."}),M.jsxs("div",{className:"p-4 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between gap-3",children:[M.jsxs("div",{className:"flex items-center gap-3 overflow-hidden",children:[M.jsx("div",{className:"p-2 rounded-xl bg-cyan-500/20 text-cyan-400",children:M.jsx(lx,{className:"w-4 h-4"})}),M.jsxs("div",{className:"overflow-hidden",children:[M.jsx("span",{className:"text-[10px] font-mono text-slate-400 block uppercase",children:"Direct Email"}),M.jsx("span",{className:"text-xs sm:text-sm font-mono text-white truncate block",children:h})]})]}),M.jsx("button",{onClick:m,className:"p-2 rounded-xl glass-panel text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors",title:"Copy Email to Clipboard",children:u?M.jsx(jp,{className:"w-4 h-4 text-emerald-400"}):M.jsx(Qv,{className:"w-4 h-4"})})]}),M.jsxs("div",{className:"p-4 rounded-2xl bg-gradient-to-r from-purple-950/40 to-cyan-950/40 border border-white/10 flex items-center justify-between gap-3",children:[M.jsxs("div",{className:"flex items-center gap-3",children:[M.jsx("div",{className:"p-2 rounded-xl bg-purple-500/20 text-purple-300",children:M.jsx(ix,{className:"w-4 h-4"})}),M.jsxs("div",{children:[M.jsx("span",{className:"text-xs font-semibold text-white block",children:"Curriculum Vitae"}),M.jsx("span",{className:"text-[10px] font-mono text-slate-400",children:"PDF • Updated 2026"})]})]}),M.jsx("a",{href:"#download-cv",onClick:x=>{x.preventDefault(),alert("Abdullah's Resume (PDF) downloaded successfully.")},className:"px-3 py-1.5 rounded-xl text-xs font-mono font-medium text-black bg-cyan-400 hover:bg-cyan-300 transition-colors",children:"Download CV"})]}),M.jsxs("div",{children:[M.jsx("span",{className:"text-xs font-mono text-slate-400 block mb-3 uppercase tracking-wider",children:"Developer Profiles & Socials"}),M.jsx("div",{className:"flex flex-wrap gap-2.5",children:[{label:"GitHub",href:"https://github.com",icon:Kd},{label:"LinkedIn",href:"https://linkedin.com",icon:qp},{label:"Twitter / X",href:"https://twitter.com",icon:za},{label:"Discord",href:"https://discord.com",icon:qp}].map((x,_)=>{const S=x.icon;return M.jsxs("a",{href:x.href,target:"_blank",rel:"noopener noreferrer",className:"px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 glass-panel border border-white/10 hover:border-cyan-400/50 hover:text-cyan-400 transition-all flex items-center gap-2",children:[M.jsx(S,{className:"w-4 h-4"}),M.jsx("span",{children:x.label})]},_)})})]})]})}),M.jsx("div",{className:"lg:col-span-7",children:M.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative",children:[M.jsx("h3",{className:"text-xl font-bold text-white tracking-tight mb-2",children:"Send a Transmission"}),M.jsx("p",{className:"text-xs sm:text-sm text-slate-400 mb-6",children:"Fill out the parameters below to dispatch a message directly to my inbox."}),o?M.jsxs("div",{className:"p-8 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 text-center space-y-3 animate-in fade-in duration-300",children:[M.jsx("div",{className:"w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto",children:M.jsx(jp,{className:"w-6 h-6"})}),M.jsx("h4",{className:"text-lg font-bold text-white",children:"Transmission Acknowledged!"}),M.jsx("p",{className:"text-xs sm:text-sm text-slate-300 max-w-md mx-auto",children:"Thank you for reaching out. Your message was processed and logged. I will review and reply promptly!"}),M.jsx("button",{onClick:()=>l(!1),className:"mt-4 px-4 py-2 rounded-xl text-xs font-medium text-black bg-emerald-400 hover:bg-emerald-300 transition-colors",children:"Send Another Transmission"})]}):M.jsxs("form",{onSubmit:v,className:"space-y-4 font-sans",children:[M.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[M.jsxs("div",{children:[M.jsx("label",{className:"block text-xs font-mono text-slate-300 mb-1.5",children:"Your Name *"}),M.jsx("input",{type:"text",required:!0,value:s.name,onChange:x=>e({...s,name:x.target.value}),placeholder:"Alex Mercer",className:"w-full bg-black/40 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600"})]}),M.jsxs("div",{children:[M.jsx("label",{className:"block text-xs font-mono text-slate-300 mb-1.5",children:"Your Email *"}),M.jsx("input",{type:"email",required:!0,value:s.email,onChange:x=>e({...s,email:x.target.value}),placeholder:"alex@company.com",className:"w-full bg-black/40 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600"})]})]}),M.jsxs("div",{children:[M.jsx("label",{className:"block text-xs font-mono text-slate-300 mb-1.5",children:"Engagement Objective"}),M.jsxs("select",{value:s.projectType,onChange:x=>e({...s,projectType:x.target.value}),className:"w-full bg-[#080C16] border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 rounded-xl px-4 py-3 text-sm text-white",children:[M.jsx("option",{value:"Agentic AI System",children:"Agentic AI System (Multi-Agent Swarm / LangGraph)"}),M.jsx("option",{value:"n8n Automation Pipeline",children:"Enterprise n8n Automation & Webhook Hub"}),M.jsx("option",{value:"Full-Stack SaaS Application",children:"Full-Stack SaaS & Web App Architecture"}),M.jsx("option",{value:"Internship or Full-Time SWE Role",children:"Internship or Full-Time SWE Opportunity"}),M.jsx("option",{value:"General Consultation / Other",children:"General Consultation / Technical Advisory"})]})]}),M.jsxs("div",{children:[M.jsx("label",{className:"block text-xs font-mono text-slate-300 mb-1.5",children:"Message Specification *"}),M.jsx("textarea",{required:!0,rows:4,value:s.message,onChange:x=>e({...s,message:x.target.value}),placeholder:"Describe your project vision, timeline, or position requirements...",className:"w-full bg-black/40 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 rounded-xl p-4 text-sm text-white placeholder:text-slate-600 resize-none"})]}),M.jsx("button",{type:"submit",disabled:n,className:"w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 hover:opacity-95 shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2",children:n?M.jsx("span",{children:"Encrypting & Dispatching..."}):M.jsxs(M.Fragment,{children:[M.jsx(za,{className:"w-4 h-4"}),M.jsx("span",{children:"Transmit Message"})]})})]})]})})]})]})}function q1(){const s=()=>{window.scrollTo({top:0,behavior:"smooth"})};return M.jsxs("footer",{className:"relative border-t border-white/10 bg-[#04060C] py-12 px-4 sm:px-6 lg:px-8",children:[M.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6",children:[M.jsxs("div",{className:"flex items-center gap-4 text-left",children:[M.jsx("div",{className:"w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400",children:M.jsx(yr,{className:"w-5 h-5"})}),M.jsxs("div",{children:[M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx("span",{className:"font-bold text-sm text-white",children:"Abdullah"}),M.jsx("span",{className:"text-[10px] font-mono text-cyan-400 px-1.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30",children:"AI / SWE PORTFOLIO"})]}),M.jsx("p",{className:"text-xs text-slate-500 font-mono mt-0.5",children:"Software Engineering • Agentic AI • n8n Automations • SaaS"})]})]}),M.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/30 border border-emerald-500/20 text-xs font-mono text-emerald-400",children:[M.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),M.jsx("span",{children:"Core WebGL & Edge Services: 100% Operational"})]}),M.jsx("div",{className:"flex items-center gap-4",children:M.jsxs("button",{onClick:s,className:"p-2.5 rounded-xl glass-panel text-slate-400 hover:text-white border border-white/10 hover:border-cyan-400/40 transition-colors flex items-center gap-2 text-xs font-mono","aria-label":"Return to top of page",children:[M.jsx("span",{children:"Top"}),M.jsx(Hv,{className:"w-4 h-4"})]})})]}),M.jsxs("div",{className:"max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-2",children:[M.jsxs("p",{children:["© ",new Date().getFullYear()," Abdullah. Engineered for the Autonomous AI Era."]}),M.jsx("p",{children:"Ultra-optimized 60FPS Three.js • In-Memory Caching • React 18"})]})]})}function Y1(){return M.jsxs("div",{className:"min-h-screen bg-[#05070E] text-slate-100 relative selection:bg-cyan-500 selection:text-black",children:[M.jsx(Ex,{}),M.jsxs("main",{className:"relative z-10",children:[M.jsx(D1,{}),M.jsx(I1,{}),M.jsx(k1,{}),M.jsx(z1,{}),M.jsx(H1,{}),M.jsx(W1,{}),M.jsx(X1,{})]}),M.jsx(q1,{})]})}Rv.createRoot(document.getElementById("root")).render(M.jsx(Mv.StrictMode,{children:M.jsx(Y1,{})}));
