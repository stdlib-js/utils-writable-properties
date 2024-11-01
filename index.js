// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).writableProperties=e()}(this,(function(){"use strict";var r=void 0!==Object.getOwnPropertyNames,e=Object,t=e.getOwnPropertyNames;function n(r){return Object.keys(Object(r))}var i=void 0!==Object.keys;var o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function a(){return o&&"symbol"==typeof Symbol.toStringTag}var u=Object.prototype.toString;var c=Object.prototype.hasOwnProperty;function l(r,e){return null!=r&&c.call(r,e)}var f="function"==typeof Symbol?Symbol:void 0,s="function"==typeof f?f.toStringTag:"";var p,g=a()?function(r){var e,t,n;if(null==r)return u.call(r);t=r[s],e=l(r,s);try{r[s]=void 0}catch(e){return u.call(r)}return n=u.call(r),e?r[s]=t:delete r[s],n}:function(r){return u.call(r)};function d(r){return"[object Arguments]"===g(r)}p=function(){return d(arguments)}();var b=p,y="function"==typeof Object.defineProperty?Object.defineProperty:null;var h=Object.defineProperty;function v(r){return"number"==typeof r}function w(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function m(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+w(i):w(i)+r,n&&(r="-"+r)),r}var j=String.prototype.toLowerCase,O=String.prototype.toUpperCase;function S(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!v(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=m(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=m(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===O.call(r.specifier)?O.call(t):j.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var E=Math.abs,_=String.prototype.toLowerCase,k=String.prototype.toUpperCase,T=String.prototype.replace,x=/e\+(\d)$/,I=/e-(\d)$/,P=/^(\d+)$/,A=/^(\d+)e/,V=/\.0$/,F=/\.0*e/,N=/(\..*[^0])0*e/;function $(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!v(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":E(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=T.call(t,N,"$1e"),t=T.call(t,F,"e"),t=T.call(t,V,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=T.call(t,x,"e+0$1"),t=T.call(t,I,"e-0$1"),r.alternate&&(t=T.call(t,P,"$1."),t=T.call(t,A,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===k.call(r.specifier)?k.call(t):_.call(t)}function C(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var B=String.fromCharCode,L=Array.isArray;function R(r){return r!=r}function G(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function W(r){var e,t,n,i,o,a,u,c,l,f,s,p,g;if(!L(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(n=r[c],"string"==typeof n)a+=n;else{if(e=void 0!==n.precision,!(n=G(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,R(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,R(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=S(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!R(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=R(o)?String(n.arg):B(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=$(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=m(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(f=n.arg,s=n.width,p=n.padRight,g=void 0,(g=s-f.length)<0?f:f=p?f+C(g):C(g)+f)),a+=n.arg||"",u+=1}return a}var X=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Z(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function M(r){var e,t,n,i;for(t=[],i=0,n=X.exec(r);n;)(e=r.slice(i,X.lastIndex-n[0].length)).length&&t.push(e),t.push(Z(n)),i=X.lastIndex,n=X.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Y(r){var e,t;if("string"!=typeof r)throw new TypeError(Y("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[M(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return W.apply(null,e)}var D,U=Object.prototype,H=U.toString,z=U.__defineGetter__,q=U.__defineSetter__,J=U.__lookupGetter__,K=U.__lookupSetter__;D=function(){try{return y({},"x",{}),!0}catch(r){return!1}}()?h:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===H.call(r))throw new TypeError(Y("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===H.call(t))throw new TypeError(Y("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(J.call(r,e)||K.call(r,e)?(n=r.__proto__,r.__proto__=U,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&z&&z.call(r,e,t.get),a&&q&&q.call(r,e,t.set),r};var Q=D;function rr(r,e,t){Q(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function er(r){return"string"==typeof r}var tr=String.prototype.valueOf;var nr=a();function ir(r){return"object"==typeof r&&(r instanceof String||(nr?function(r){try{return tr.call(r),!0}catch(r){return!1}}(r):"[object String]"===g(r)))}function or(r){return er(r)||ir(r)}function ar(r){return"number"==typeof r}rr(or,"isPrimitive",er),rr(or,"isObject",ir);var ur=Number,cr=ur.prototype.toString;var lr=a();function fr(r){return"object"==typeof r&&(r instanceof ur||(lr?function(r){try{return cr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===g(r)))}function sr(r){return ar(r)||fr(r)}function pr(r){return r!=r}function gr(r){return ar(r)&&pr(r)}function dr(r){return fr(r)&&pr(r.valueOf())}function br(r){return gr(r)||dr(r)}rr(sr,"isPrimitive",ar),rr(sr,"isObject",fr),rr(br,"isPrimitive",gr),rr(br,"isObject",dr);var yr=Number.POSITIVE_INFINITY,hr=ur.NEGATIVE_INFINITY,vr=Math.floor;function wr(r){return vr(r)===r}function mr(r){return r<yr&&r>hr&&wr(r)}function jr(r){return ar(r)&&mr(r)}function Or(r){return fr(r)&&mr(r.valueOf())}function Sr(r){return jr(r)||Or(r)}rr(Sr,"isPrimitive",jr),rr(Sr,"isObject",Or);var Er=Object.prototype.propertyIsEnumerable;var _r=!Er.call("beep","0");function kr(r,e){var t;return null!=r&&(!(t=Er.call(r,e))&&_r&&or(r)?!gr(e=+e)&&jr(e)&&e>=0&&e<r.length:t)}var Tr=Array.isArray?Array.isArray:function(r){return"[object Array]"===g(r)};var xr=b?d:function(r){return null!==r&&"object"==typeof r&&!Tr(r)&&"number"==typeof r.length&&wr(r.length)&&r.length>=0&&r.length<=4294967295&&l(r,"callee")&&!kr(r,"callee")},Ir=Array.prototype.slice;function Pr(r){return null!==r&&"object"==typeof r}rr(Pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(Y("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Tr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Pr));var Ar=kr((function(){}),"prototype"),Vr=!kr({toString:null},"toString"),Fr=9007199254740991;function Nr(r,e,t){var n,i,o;if(!(o=r,"object"==typeof o&&null!==o&&"number"==typeof o.length&&wr(o.length)&&o.length>=0&&o.length<=Fr||er(r)))throw new TypeError(Y("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!jr(t))throw new TypeError(Y("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(br(e)){for(;i<n;i++)if(br(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}var $r=/./;function Cr(r){return"boolean"==typeof r}var Br=Boolean,Lr=Boolean.prototype.toString;var Rr=a();function Gr(r){return"object"==typeof r&&(r instanceof Br||(Rr?function(r){try{return Lr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===g(r)))}function Wr(r){return Cr(r)||Gr(r)}rr(Wr,"isPrimitive",Cr),rr(Wr,"isObject",Gr);var Xr="object"==typeof self?self:null,Zr="object"==typeof window?window:null,Mr="object"==typeof global?global:null,Yr="object"==typeof globalThis?globalThis:null;var Dr=function(r){if(arguments.length){if(!Cr(r))throw new TypeError(Y("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Yr)return Yr;if(Xr)return Xr;if(Zr)return Zr;if(Mr)return Mr;throw new Error("unexpected error. Unable to resolve global object.")}(),Ur=Dr.document&&Dr.document.childNodes,Hr=Int8Array;function zr(){return/^\s*function\s*([^(]*)/i}var qr=/^\s*function\s*([^(]*)/i;function Jr(r){var e,t,n,i;if(("Object"===(t=g(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=qr.exec(n.toString()))return e[1]}return Pr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}rr(zr,"REGEXP",qr);var Kr="function"==typeof $r||"object"==typeof Hr||"function"==typeof Ur?function(r){return Jr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Jr(r).toLowerCase():e};function Qr(r){return r.constructor&&r.constructor.prototype===r}var re=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ee="undefined"==typeof window?void 0:window;var te=function(){var r;if("undefined"===Kr(ee))return!1;for(r in ee)try{-1===Nr(re,r)&&l(ee,r)&&null!==ee[r]&&"object"===Kr(ee[r])&&Qr(ee[r])}catch(r){return!0}return!1}(),ne="undefined"!=typeof window;var ie,oe=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];ie=i?function(){return 2!==(n(arguments)||"").length}(1,2)?function(r){return xr(r)?n(Ir.call(r)):n(r)}:n:function(r){var e,t,n,i,o,a,u;if(i=[],xr(r)){for(u=0;u<r.length;u++)i.push(u.toString());return i}if("string"==typeof r){if(r.length>0&&!l(r,"0"))for(u=0;u<r.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!Pr(r))return i;t=Ar&&n}for(o in r)t&&"prototype"===o||!l(r,o)||i.push(String(o));if(Vr)for(e=function(r){if(!1===ne&&!te)return Qr(r);try{return Qr(r)}catch(r){return!1}}(r),u=0;u<oe.length;u++)a=oe[u],e&&"constructor"===a||!l(r,a)||i.push(String(a));return i};var ae=ie;var ue=r?function(r){return t(e(r))}:function(r){return ae(e(r))},ce=void 0!==Object.getOwnPropertySymbols,le=e.getOwnPropertySymbols;var fe=ce?function(r){return le(e(r))}:function(){return[]},se=void 0!==Object.getOwnPropertyDescriptor,pe=Object.getOwnPropertyDescriptor;var ge=se?function(r,e){var t;return null==r||void 0===(t=pe(r,e))?null:t}:function(r,e){return l(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null};function de(r,e){var t=ge(r,e);return null!==t&&(!0===t.writable||"function"==typeof t.set)}return function(r){var e,t,n,i;for(e=ue(r),n=0,i=0;i<e.length;i++)de(r,e[i])&&(e[n]=e[i],n+=1);for(e.length=n,t=fe(r),i=0;i<t.length;i++)de(r,t[i])&&e.push(t[i]);return e}}));
//# sourceMappingURL=index.js.map