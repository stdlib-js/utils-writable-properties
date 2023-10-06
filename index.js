// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).writableProperties=e()}(this,(function(){"use strict";var r=void 0!==Object.getOwnPropertyNames,e=Object,t=e.getOwnPropertyNames;function n(r){return Object.keys(Object(r))}var i=void 0!==Object.keys;var o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function a(){return o&&"symbol"==typeof Symbol.toStringTag}var u=Object.prototype.toString;var c=Object.prototype.hasOwnProperty;function f(r,e){return null!=r&&c.call(r,e)}var l="function"==typeof Symbol?Symbol:void 0,s="function"==typeof l?l.toStringTag:"";var p,g=a()?function(r){var e,t,n;if(null==r)return u.call(r);t=r[s],e=f(r,s);try{r[s]=void 0}catch(e){return u.call(r)}return n=u.call(r),e?r[s]=t:delete r[s],n}:function(r){return u.call(r)};function y(r){return"[object Arguments]"===g(r)}p=function(){return y(arguments)}();var b=p,d="function"==typeof Object.defineProperty?Object.defineProperty:null;var h=Object.defineProperty;function v(r){return"number"==typeof r}function w(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function m(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+w(i):w(i)+r,n&&(r="-"+r)),r}var j=String.prototype.toLowerCase,O=String.prototype.toUpperCase;function S(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!v(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=m(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=m(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===O.call(r.specifier)?O.call(t):j.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function E(r){return"string"==typeof r}var _=Math.abs,k=String.prototype.toLowerCase,P=String.prototype.toUpperCase,T=String.prototype.replace,x=/e\+(\d)$/,I=/e-(\d)$/,A=/^(\d+)$/,V=/^(\d+)e/,F=/\.0$/,N=/\.0*e/,$=/(\..*[^0])0*e/;function C(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!v(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":_(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=T.call(t,$,"$1e"),t=T.call(t,N,"e"),t=T.call(t,F,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=T.call(t,x,"e+0$1"),t=T.call(t,I,"e-0$1"),r.alternate&&(t=T.call(t,A,"$1."),t=T.call(t,V,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===P.call(r.specifier)?P.call(t):k.call(t)}function B(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function L(r,e,t){var n=e-r.length;return n<0?r:r=t?r+B(n):B(n)+r}var R=String.fromCharCode,G=isNaN,W=Array.isArray;function X(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Z(r){var e,t,n,i,o,a,u,c,f;if(!W(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(E(n=r[c]))a+=n;else{if(e=void 0!==n.precision,!(n=X(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,G(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,G(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=S(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!G(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=G(o)?String(n.arg):R(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=C(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=m(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=L(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var M=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Y(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function D(r){var e,t,n,i;for(t=[],i=0,n=M.exec(r);n;)(e=r.slice(i,M.lastIndex-n[0].length)).length&&t.push(e),t.push(Y(n)),i=M.lastIndex,n=M.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function U(r){return"string"==typeof r}function H(r){var e,t,n;if(!U(r))throw new TypeError(H("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=D(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return Z.apply(null,t)}var z,q=Object.prototype,J=q.toString,K=q.__defineGetter__,Q=q.__defineSetter__,rr=q.__lookupGetter__,er=q.__lookupSetter__;z=function(){try{return d({},"x",{}),!0}catch(r){return!1}}()?h:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===J.call(r))throw new TypeError(H("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===J.call(t))throw new TypeError(H("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(rr.call(r,e)||er.call(r,e)?(n=r.__proto__,r.__proto__=q,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&K&&K.call(r,e,t.get),a&&Q&&Q.call(r,e,t.set),r};var tr=z;function nr(r,e,t){tr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function ir(r){return"string"==typeof r}var or=String.prototype.valueOf;var ar=a();function ur(r){return"object"==typeof r&&(r instanceof String||(ar?function(r){try{return or.call(r),!0}catch(r){return!1}}(r):"[object String]"===g(r)))}function cr(r){return ir(r)||ur(r)}function fr(r){return"number"==typeof r}nr(cr,"isPrimitive",ir),nr(cr,"isObject",ur);var lr=Number,sr=lr.prototype.toString;var pr=a();function gr(r){return"object"==typeof r&&(r instanceof lr||(pr?function(r){try{return sr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===g(r)))}function yr(r){return fr(r)||gr(r)}function br(r){return r!=r}function dr(r){return fr(r)&&br(r)}function hr(r){return gr(r)&&br(r.valueOf())}function vr(r){return dr(r)||hr(r)}nr(yr,"isPrimitive",fr),nr(yr,"isObject",gr),nr(vr,"isPrimitive",dr),nr(vr,"isObject",hr);var wr=Number.POSITIVE_INFINITY,mr=lr.NEGATIVE_INFINITY,jr=Math.floor;function Or(r){return jr(r)===r}function Sr(r){return r<wr&&r>mr&&Or(r)}function Er(r){return fr(r)&&Sr(r)}function _r(r){return gr(r)&&Sr(r.valueOf())}function kr(r){return Er(r)||_r(r)}nr(kr,"isPrimitive",Er),nr(kr,"isObject",_r);var Pr=Object.prototype.propertyIsEnumerable;var Tr=!Pr.call("beep","0");function xr(r,e){var t;return null!=r&&(!(t=Pr.call(r,e))&&Tr&&cr(r)?!dr(e=+e)&&Er(e)&&e>=0&&e<r.length:t)}var Ir=Array.isArray?Array.isArray:function(r){return"[object Array]"===g(r)};var Ar=b?y:function(r){return null!==r&&"object"==typeof r&&!Ir(r)&&"number"==typeof r.length&&Or(r.length)&&r.length>=0&&r.length<=4294967295&&f(r,"callee")&&!xr(r,"callee")},Vr=Array.prototype.slice;function Fr(r){return null!==r&&"object"==typeof r}nr(Fr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(H("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Ir(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Fr));var Nr=xr((function(){}),"prototype"),$r=!xr({toString:null},"toString");function Cr(r){return r!=r}function Br(r){return fr(r)&&Cr(r)}function Lr(r){return gr(r)&&Cr(r.valueOf())}function Rr(r){return Br(r)||Lr(r)}nr(Rr,"isPrimitive",Br),nr(Rr,"isObject",Lr);function Gr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Or(r.length)&&r.length>=0&&r.length<=9007199254740991}function Wr(r){return"string"==typeof r}var Xr=String.prototype.valueOf;var Zr=a();function Mr(r){return"object"==typeof r&&(r instanceof String||(Zr?function(r){try{return Xr.call(r),!0}catch(r){return!1}}(r):"[object String]"===g(r)))}function Yr(r){return Wr(r)||Mr(r)}function Dr(r,e,t){var n,i;if(!Gr(r)&&!Wr(r))throw new TypeError(H("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!Er(t))throw new TypeError(H("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Rr(e)){for(;i<n;i++)if(Rr(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}nr(Yr,"isPrimitive",Wr),nr(Yr,"isObject",Mr);var Ur=/./;function Hr(r){return"boolean"==typeof r}var zr=Boolean,qr=Boolean.prototype.toString;var Jr=a();function Kr(r){return"object"==typeof r&&(r instanceof zr||(Jr?function(r){try{return qr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===g(r)))}function Qr(r){return Hr(r)||Kr(r)}function re(){return new Function("return this;")()}nr(Qr,"isPrimitive",Hr),nr(Qr,"isObject",Kr);var ee="object"==typeof self?self:null,te="object"==typeof window?window:null,ne="object"==typeof global?global:null,ie="object"==typeof globalThis?globalThis:null;var oe=function(r){if(arguments.length){if(!Hr(r))throw new TypeError(H("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return re()}if(ie)return ie;if(ee)return ee;if(te)return te;if(ne)return ne;throw new Error("unexpected error. Unable to resolve global object.")}(),ae=oe.document&&oe.document.childNodes,ue=Int8Array;function ce(){return/^\s*function\s*([^(]*)/i}var fe=/^\s*function\s*([^(]*)/i;function le(r){var e,t,n,i;if(("Object"===(t=g(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=fe.exec(n.toString()))return e[1]}return Fr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}nr(ce,"REGEXP",fe);var se="function"==typeof Ur||"object"==typeof ue||"function"==typeof ae?function(r){return le(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?le(r).toLowerCase():e};function pe(r){return r.constructor&&r.constructor.prototype===r}var ge=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ye="undefined"==typeof window?void 0:window;var be=function(){var r;if("undefined"===se(ye))return!1;for(r in ye)try{-1===Dr(ge,r)&&f(ye,r)&&null!==ye[r]&&"object"===se(ye[r])&&pe(ye[r])}catch(r){return!0}return!1}(),de="undefined"!=typeof window;var he,ve=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];he=i?function(){return 2!==(n(arguments)||"").length}(1,2)?function(r){return Ar(r)?n(Vr.call(r)):n(r)}:n:function(r){var e,t,n,i,o,a,u;if(i=[],Ar(r)){for(u=0;u<r.length;u++)i.push(u.toString());return i}if("string"==typeof r){if(r.length>0&&!f(r,"0"))for(u=0;u<r.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!Fr(r))return i;t=Nr&&n}for(o in r)t&&"prototype"===o||!f(r,o)||i.push(String(o));if($r)for(e=function(r){if(!1===de&&!be)return pe(r);try{return pe(r)}catch(r){return!1}}(r),u=0;u<ve.length;u++)a=ve[u],e&&"constructor"===a||!f(r,a)||i.push(String(a));return i};var we=he;var me=r?function(r){return t(e(r))}:function(r){return we(e(r))},je=void 0!==Object.getOwnPropertySymbols,Oe=e.getOwnPropertySymbols;var Se=je?function(r){return Oe(e(r))}:function(){return[]},Ee=void 0!==Object.getOwnPropertyDescriptor,_e=Object.getOwnPropertyDescriptor;var ke=Ee?function(r,e){var t;return null==r||void 0===(t=_e(r,e))?null:t}:function(r,e){return f(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null};function Pe(r,e){var t=ke(r,e);return null!==t&&(!0===t.writable||"function"==typeof t.set)}return function(r){var e,t,n,i;for(e=me(r),n=0,i=0;i<e.length;i++)Pe(r,e[i])&&(e[n]=e[i],n+=1);for(e.length=n,t=Se(r),i=0;i<t.length;i++)Pe(r,t[i])&&e.push(t[i]);return e}}));
//# sourceMappingURL=index.js.map
