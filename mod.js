// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty,e=Object.prototype,n=e.toString,o=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,l=e.__lookupSetter__;var u=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,u){var c,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof u||null===u||"[object Array]"===n.call(u))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+u+"`.");if((f="value"in u)&&(a.call(t,r)||l.call(t,r)?(c=t.__proto__,t.__proto__=e,delete t[r],t[r]=u.value,t.__proto__=c):t[r]=u.value),p="get"in u,y="set"in u,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,r,u.get),y&&i&&i.call(t,r,u.set),t};function c(t,r,e){u(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function f(t){return"string"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var _=Object.prototype.hasOwnProperty;var v="function"==typeof Symbol?Symbol.toStringTag:"";var g=y()?function(t){var r,e,n,o,i;if(null==t)return b.call(t);e=t[v],i=v,r=null!=(o=t)&&_.call(o,i);try{t[v]=void 0}catch(r){return b.call(t)}return n=b.call(t),r?t[v]=e:delete t[v],n}:function(t){return b.call(t)},s=String.prototype.valueOf;var d=y();function m(t){return"object"==typeof t&&(t instanceof String||(d?function(t){try{return s.call(t),!0}catch(t){return!1}}(t):"[object String]"===g(t)))}function j(t){return f(t)||m(t)}function w(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}function S(t,r,e){if(!f(t))throw new TypeError(w("1gx3F,Ex",t));if(!f(r))throw new TypeError(w("1gx39,Ey",r));if(!f(e))throw new TypeError(w("1gxAO,M6",e));return function(t,r,e){var n=t.indexOf(r);return""===t||""===r||""===e||n<0?t:e+t.substring(n)}(t,r,e)}c(j,"isPrimitive",f),c(j,"isObject",m);export{S as default};
//# sourceMappingURL=mod.js.map
