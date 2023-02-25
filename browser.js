// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(e){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,o=Object.prototype,n=o.toString,l=o.__defineGetter__,i=o.__defineSetter__,u=o.__lookupGetter__,a=o.__lookupSetter__,c=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var c,f,p,y;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(u.call(e,t)||a.call(e,t)?(c=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=c):e[t]=r.value),p="get"in r,y="set"in r,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&l&&l.call(e,t,r.get),y&&i&&i.call(e,t,r.set),e};function f(e,t,r){c(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function p(e){return"string"==typeof e}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString,d=Object.prototype.hasOwnProperty,_="function"==typeof Symbol?Symbol.toStringTag:"",g=b()?function(e){var t,r,o,n,l;if(null==e)return s.call(e);r=e[_],l=_,t=null!=(n=e)&&d.call(n,l);try{e[_]=void 0}catch(t){return s.call(e)}return o=s.call(e),t?e[_]=r:delete e[_],o}:function(e){return s.call(e)},m=String.prototype.valueOf,v=b();function h(e){return"object"==typeof e&&(e instanceof String||(v?function(e){try{return m.call(e),!0}catch(e){return!1}}(e):"[object String]"===g(e)))}function j(e){return p(e)||h(e)}function w(){var e,t=arguments,r=t[0],o="https://stdlib.io/e/"+r+"?";for(e=1;e<t.length;e++)o+="&arg[]="+encodeURIComponent(t[e]);return o}return f(j,"isPrimitive",p),f(j,"isObject",h),function(t,r,o){if(!p(t))throw new TypeError(w("null3R",t));if(!p(r))throw new TypeError(w("null3L",r));if(!p(o))throw new TypeError(w("nullB6",o));return e(t,r,o)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("@stdlib/string-base-replace-before")):"function"==typeof define&&define.amd?define(["@stdlib/string-base-replace-before"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).replaceBefore=t(e.base);
//# sourceMappingURL=browser.js.map
