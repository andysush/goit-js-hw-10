!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(t){var e=new URL("https://restcountries.com/v3.1/name/".concat(t));e.searchParams.set("fields","name,capital,population,flags,languages");var n=fetch(e);if(!n.ok)throw Error(n.status);return n.json()}var o,r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),v=Object.prototype.toString,p=Math.max,y=Math.min,b=function(){return d.Date.now()};function m(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(t){return!!t&&"object"==typeof t}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(m(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=m(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var o=f.test(e);return o||a.test(e)?c(e.slice(2),o?2:8):u.test(e)?NaN:+e}o=function(t,e,n){var o,r,i,u,f,a,c=0,l=!1,s=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function v(e){var n=o,i=r;return o=r=void 0,c=e,u=t.apply(i,n)}function h(t){return c=t,f=setTimeout(w,e),l?v(t):u}function j(t){var n=t-a;return void 0===a||n>=e||n<0||s&&t-c>=i}function w(){var t=b();if(j(t))return O(t);f=setTimeout(w,function(t){var n=e-(t-a);return s?y(n,i-(t-c)):n}(t))}function O(t){return f=void 0,d&&o?v(t):(o=r=void 0,u)}function T(){var t=b(),n=j(t);if(o=arguments,r=this,a=t,n){if(void 0===f)return h(a);if(s)return f=setTimeout(w,e),v(a)}return void 0===f&&(f=setTimeout(w,e)),u}return e=g(e)||0,m(n)&&(l=!!n.leading,i=(s="maxWait"in n)?p(g(n.maxWait)||0,e):i,d="trailing"in n?!!n.trailing:d),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=a=r=f=void 0},T.flush=function(){return void 0===f?u:O(b())},T};var h=document.querySelector("#search-box");document.querySelector(".country-info");function j(t){t.name,t.capital,t.population,t.flags,t.languages}h.addEventListener("input",t(o)((function(){n(h.value).then(j).catch(console.log)}),300))}();
//# sourceMappingURL=index.e5dd3902.js.map