(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{274:function(t,e,r){"use strict";function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}r.d(e,"a",(function(){return n}))},275:function(t,e,r){var n=r(2),o=r(28),c=r(70),f=r(7),h=r(10),l=r(56),y=r(280),d=r(4),v=o("Reflect","construct"),m=d((function(){function t(){}return!(v((function(){}),[],t)instanceof t)})),w=!d((function(){v((function(){}))})),x=m||w;n({target:"Reflect",stat:!0,forced:x,sham:x},{construct:function(t,e){c(t),f(e);var r=arguments.length<3?t:c(arguments[2]);if(w&&!m)return v(t,e,r);if(t==r){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var n=[null];return n.push.apply(n,e),new(y.apply(t,n))}var o=r.prototype,d=l(h(o)?o:Object.prototype),x=Function.apply.call(t,d,e);return h(x)?x:d}})},276:function(t,e,r){"use strict";function n(t,p){return(n=Object.setPrototypeOf||function(t,p){return t.__proto__=p,t})(t,p)}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}r.d(e,"a",(function(){return o}))},277:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(279),o=r.n(n);function c(t,e){if(e&&("object"===o()(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}},278:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(130),o=r(131),c=function(){function t(){Object(n.a)(this,t)}return Object(o.a)(t,[{key:"setSketch",value:function(t){this.sketch=t}},{key:"getSketch",value:function(){return this.sketch}}]),t}()},279:function(t,e){function r(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(t.exports=r=function(t){return typeof t},t.exports.default=t.exports,t.exports.__esModule=!0):(t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.default=t.exports,t.exports.__esModule=!0),r(e)}t.exports=r,t.exports.default=t.exports,t.exports.__esModule=!0},280:function(t,e,r){"use strict";var n=r(70),o=r(10),c=[].slice,f={},h=function(t,e,r){if(!(e in f)){for(var n=[],i=0;i<e;i++)n[i]="a["+i+"]";f[e]=Function("C,a","return new C("+n.join(",")+")")}return f[e](t,r)};t.exports=Function.bind||function(t){var e=n(this),r=c.call(arguments,1),f=function(){var n=r.concat(c.call(arguments));return this instanceof f?h(e,n.length,n):e.apply(t,n)};return o(e.prototype)&&(f.prototype=e.prototype),f}},346:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return d}));r(275);var n=r(130),o=r(131),c=r(276),f=r(277),h=r(274),l=r(273);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var d=function(t){Object(c.a)(r,t);var e=y(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"init",value:function(){this.textures={earthmap1k:this.getSketch().getLoaders().textureLoader.load("./textures/earth/earthmap1k.jpg"),earthbump:this.getSketch().getLoaders().textureLoader.load("./textures/earth/earthbump.jpg")},this.earthGeometry=new l.Db(.6,32,32),this.earthMaterial=new l.W({map:this.textures.earthmap1k,bumpMap:this.textures.earthbump,bumpScale:.3}),this.earthMesh=new l.R(this.earthGeometry,this.earthMaterial),this.getSketch().getScene().add(this.earthMesh)}},{key:"update",value:function(){this.earthMesh.rotation.y-=.0015}},{key:"destroy",value:function(){this.getSketch().getScene().remove(this.earthMesh),this.earthGeometry.dispose(),this.earthMaterial.dispose(),this.textures.earthmap1k.dispose(),this.textures.earthbump.dispose(),console.log("removed Earth")}}]),r}(r(278).a)}}]);