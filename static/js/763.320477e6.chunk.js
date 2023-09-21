/*! For license information please see 763.320477e6.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[763],{763:function(t,r,e){e.r(r);var n,o,a,i=e(168),c=e(439),u=e(689),s=e(791),f=e(867),l=e(197),h=e(184);r.default=function(){var t=(0,u.UO)().movieId,r=(0,s.useState)([]),e=(0,c.Z)(r,2),n=e[0],o=e[1];return(0,s.useEffect)((function(){(0,l.Eb)(t).then(o)}),[t]),(0,h.jsx)(p,{children:n.map((function(t){return(0,h.jsxs)(d,{children:[(0,h.jsx)(v,{src:t.profile_path?"https://image.tmdb.org/t/p/original".concat(t.profile_path):"https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg",alt:""}),(0,h.jsx)("h2",{children:t.name}),(0,h.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))})};var p=f.ZP.ul(n||(n=(0,i.Z)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-gap: 30px;\n  grid-auto-rows: minmax(10px, auto);\n  margin: 0;\n  padding: 30px 10px;\n  margin-top: 20px;\n  list-style: none;\n"]))),v=f.ZP.img(o||(o=(0,i.Z)(["\n  width: 250px;\n  border-radius: 40px;\n  border: 1rem solid #ffffff;\n"]))),d=f.ZP.li(a||(a=(0,i.Z)(["\n  text-align: center;\n  color: azure;\n"])))},197:function(t,r,e){e.d(r,{Df:function(){return c},Eb:function(){return h},Hu:function(){return l},IR:function(){return u},Ph:function(){return s},aC:function(){return f}});var n=e(861),o=e(243);function a(){a=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function f(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{f({},"")}catch(t){f=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var a=r&&r.prototype instanceof y?r:y,i=Object.create(a.prototype),c=new P(n||[]);return o(i,"_invoke",{value:j(t,e,c)}),i}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=l;var p="suspendedStart",v="executing",d="completed",g={};function y(){}function m(){}function w(){}var x={};f(x,c,(function(){return this}));var b=Object.getPrototypeOf,_=b&&b(b(G([])));_&&_!==e&&n.call(_,c)&&(x=_);var E=w.prototype=y.prototype=Object.create(x);function L(t){["next","throw","return"].forEach((function(r){f(t,r,(function(t){return this._invoke(r,t)}))}))}function k(t,r){function e(o,a,i,c){var u=h(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?r.resolve(f.__await).then((function(t){e("next",t,i,c)}),(function(t){e("throw",t,i,c)})):r.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return e("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return a=a?a.then(o,o):o()}})}function j(r,e,n){var o=p;return function(a,i){if(o===v)throw new Error("Generator is already running");if(o===d){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=Z(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=h(r,e,n);if("normal"===s.type){if(o=n.done?d:"suspendedYield",s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=d,n.method="throw",n.arg=s.arg)}}}function Z(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,Z(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=h(o,r.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,g;var i=a.arg;return i?i.done?(e[r.resultName]=i.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function S(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function G(r){if(r||""===r){var e=r[c];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError(typeof r+" is not iterable")}return m.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:m,configurable:!0}),m.displayName=f(w,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},L(k.prototype),f(k.prototype,u,(function(){return this})),r.AsyncIterator=k,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new k(l(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(E),f(E,s,"Generator"),f(E,c,(function(){return this})),f(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=G,P.prototype={constructor:P,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),S(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;S(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:G(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),g}},r}o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="30f1a34785d80940e65d6f0a855b573d",c=function(){var t=(0,n.Z)(a().mark((function t(){var r,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("trending/movie/week?api_key=".concat(i));case 3:return r=t.sent,e=r.data,t.abrupt("return",e.results);case 8:t.prev=8,t.t0=t.catch(0),console.error("Error fetching trending movies:",t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=(0,n.Z)(a().mark((function t(r){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("search/movie?api_key=".concat(i,"&query=").concat(r,"&language=en-US&page=1&include_adult=false"));case 3:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 8:t.prev=8,t.t0=t.catch(0),console.error("Error fetching trending movies:",t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(r){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)(a().mark((function t(r){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("search/movie?api_key=".concat(i,"&query=").concat(r,"&language=en-US&page=1&include_adult=false"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(a().mark((function t(r){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("movie/".concat(r,"?api_key=").concat(i,"&language=en-US"));case 3:return e=t.sent,n=e.data,t.abrupt("return",n);case 8:t.prev=8,t.t0=t.catch(0),console.error("Error fetching trending movies:",t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(r){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(a().mark((function t(r){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("movie/".concat(r,"/reviews?api_key=").concat(i,"&language=en-US"));case 3:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 8:t.prev=8,t.t0=t.catch(0),console.error("Error fetching trending movies:",t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(r){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(a().mark((function t(r){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("movie/".concat(r,"/credits?api_key=").concat(i,"&language=en-US"));case 3:return e=t.sent,n=e.data,t.abrupt("return",n.cast);case 8:t.prev=8,t.t0=t.catch(0),console.error("Error fetching trending movies:",t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=763.320477e6.chunk.js.map