(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{274:function(t,e,n){"use strict";function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return o}))},275:function(t,e,n){var o=n(2),r=n(28),c=n(70),f=n(7),l=n(10),h=n(56),y=n(280),d=n(4),w=r("Reflect","construct"),v=d((function(){function t(){}return!(w((function(){}),[],t)instanceof t)})),O=!d((function(){w((function(){}))})),S=v||O;o({target:"Reflect",stat:!0,forced:S,sham:S},{construct:function(t,e){c(t),f(e);var n=arguments.length<3?t:c(arguments[2]);if(O&&!v)return w(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var o=[null];return o.push.apply(o,e),new(y.apply(t,o))}var r=n.prototype,d=h(l(r)?r:Object.prototype),S=Function.apply.call(t,d,e);return l(S)?S:d}})},276:function(t,e,n){"use strict";function o(t,p){return(o=Object.setPrototypeOf||function(t,p){return t.__proto__=p,t})(t,p)}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}n.d(e,"a",(function(){return r}))},277:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n(279),r=n.n(o);function c(t,e){if(e&&("object"===r()(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}},278:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n(130),r=n(131),c=function(){function t(){Object(o.a)(this,t)}return Object(r.a)(t,[{key:"setSketch",value:function(t){this.sketch=t}},{key:"getSketch",value:function(){return this.sketch}}]),t}()},279:function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(t.exports=n=function(t){return typeof t},t.exports.default=t.exports,t.exports.__esModule=!0):(t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.default=t.exports,t.exports.__esModule=!0),n(e)}t.exports=n,t.exports.default=t.exports,t.exports.__esModule=!0},280:function(t,e,n){"use strict";var o=n(70),r=n(10),c=[].slice,f={},l=function(t,e,n){if(!(e in f)){for(var o=[],i=0;i<e;i++)o[i]="a["+i+"]";f[e]=Function("C,a","return new C("+o.join(",")+")")}return f[e](t,n)};t.exports=Function.bind||function(t){var e=o(this),n=c.call(arguments,1),f=function(){var o=n.concat(c.call(arguments));return this instanceof f?l(e,o.length,o):e.apply(t,o)};return r(e.prototype)&&(f.prototype=e.prototype),f}},356:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return w}));n(275);var o=n(130),r=n(131),c=n(276),f=n(277),l=n(274),h=(n(24),n(278)),y=n(273);function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(l.a)(t);if(e){var r=Object(l.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(f.a)(this,n)}}var w=function(t){Object(c.a)(n,t);var e=d(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).name="Lights",t}return Object(r.a)(n,[{key:"init",value:function(){this.lightOne=new y.p(8421504,100),this.lightOne.position.set(-100,100,-100),this.lightOne.target.position.set(0,0,0),this.lightOne.castShadow=!1,this.getSketch().getScene().add(this.lightOne),this.lightTwo=new y.p(4210752,100),this.lightTwo.position.set(100,100,-100),this.lightTwo.target.position.set(0,0,0),this.lightTwo.castShadow=!1,this.getSketch().getScene().add(this.lightTwo)}},{key:"update",value:function(){}},{key:"destroy",value:function(){this.getSketch().getScene().remove(this.lightOne),this.getSketch().getScene().remove(this.lightTwo),console.log("removed lights")}}]),n}(h.a)}}]);