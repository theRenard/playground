(window.webpackJsonp=window.webpackJsonp||[]).push([[32,29,30,31],{288:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(49),o=n(75),c=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,[{key:"setSketch",value:function(t){this.sketch=t}},{key:"getSketch",value:function(){return this.sketch}}]),t}()},290:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(49),o=n(75),c=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,null,[{key:"aspRatio",get:function(){return this.width/this.height}}]),t}();c.width=window.innerWidth,c.height=window.innerHeight},291:function(t,e,n){"use strict";n.d(e,"a",(function(){return x}));var r=n(49),o=n(75),c=(n(294),n(11),n(15),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(18),n(26),n(39),n(38),n(27),n(40),n(41),n(308)),h=n(287),l=n(309),f=n(290),d=n(310),v=n(311),y=n(312),m=n(313),k=new h.M;k.addHandler(/\.dds$/i,new v.a);var w=new m.a;w.setDecoderPath("/draco/");var R=new y.a;R.setDRACOLoader(w);var j=new d.a(k),O=new h.Jb(k);function L(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return S(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,h=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){h=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(h)throw o}}}}function S(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var x=function(){function t(){Object(r.a)(this,t),this.canvas=null,this.manager=k,this.objLoader=j,this.gltfLoader=R,this.textureLoader=O,this.clock=new h.m,this.gui=new c.a({width:300}),this.elapsedTime=0,this.debug=!1,this.isReadyToRender=!1,this.entities=new Map}return Object(o.a)(t,[{key:"init",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"perspective";this.canvas=t,this.cameraType=e,this.setRenderer(),this.setScene(),this.setCamera(),this.setControls(),this.resize=this.resize.bind(this),this.addResizeListener(),this.addInitialGui(),this.tick=this.tick.bind(this),this.tick()}},{key:"setEntity",value:function(t){t.setSketch(this),t.init(),this.entities.set(t.name,t)}},{key:"getLoaders",value:function(){return{manager:this.manager,objLoader:this.objLoader,gltfLoader:this.gltfLoader,textureLoader:this.textureLoader}}},{key:"getEntities",value:function(){return this.entities}},{key:"getScene",value:function(){return this.scene}},{key:"getCamera",value:function(){return this.camera}},{key:"getGui",value:function(){return this.gui}},{key:"showGui",value:function(){this.gui.show()}},{key:"setRenderer",value:function(){this.canvas&&(this.renderer=new h.Qb({canvas:this.canvas}),this.renderer.setSize(f.a.width,f.a.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor("#262837"),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=h.hb,this.renderer.outputEncoding=h.Rb)}},{key:"setCamera",value:function(){var t=new h.d(3);this.scene.add(t),"orthographic"===this.cameraType?this.camera=new h.gb(-3*f.a.aspRatio,3*f.a.aspRatio,3,-3,.1,100):this.camera=new h.ib(75,f.a.width/f.a.height,.1,2e3)}},{key:"setScene",value:function(){this.scene=new h.yb}},{key:"setControls",value:function(){this.canvas&&(this.controls=new l.a(this.camera,this.canvas),this.controls.enableDamping=!0)}},{key:"getControls",value:function(){return this.controls}},{key:"getEntityByName",value:function(t){return this.entities.get(t)||null}},{key:"resize",value:function(){f.a.width=window.innerWidth,f.a.height=window.innerHeight,this.camera instanceof h.gb?(this.camera.left=-1*f.a.aspRatio,this.camera.right=1*f.a.aspRatio,this.camera.top=1,this.camera.bottom=-1):this.camera.aspect=f.a.width/f.a.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(f.a.width,f.a.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}},{key:"addResizeListener",value:function(){window.addEventListener("resize",this.resize)}},{key:"removeResizeListener",value:function(){window.removeEventListener("resize",this.resize)}},{key:"update",value:function(t){var e,n=L(this.entities.values());try{for(n.s();!(e=n.n()).done;){e.value.update(t)}}catch(t){n.e(t)}finally{n.f()}}},{key:"destroyEntities",value:function(){var t,e=L(this.entities.values());try{for(e.s();!(t=e.n()).done;){t.value.destroy()}}catch(t){e.e(t)}finally{e.f()}}},{key:"tick",value:function(){this.elapsedTime=this.clock.getElapsedTime(),this.isReadyToRender&&this.update(this.elapsedTime),this.controls.update(),this.renderer.render(this.scene,this.camera),this.animationReq=window.requestAnimationFrame(this.tick)}},{key:"addInitialGui",value:function(){}},{key:"destroy",value:function(){this.gui.destroy(),this.destroyEntities(),this.removeResizeListener(),window.cancelAnimationFrame(this.animationReq)}}]),t}()},356:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return y}));n(139);var r=n(49),o=n(75),c=n(76),h=n(77),l=n(50),f=(n(26),n(140),n(288)),d=n(287);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}var y=function(t){Object(c.a)(n,t);var e=v(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).name="Planet",t}return Object(o.a)(n,[{key:"init",value:function(){var t=this;this.planetTexture=this.getSketch().getLoaders().textureLoader.load("./textures/planet/planet.jpg"),this.planetTexture.flipY=!1,this.planetTexture.encoding=d.Rb,this.roadTexture=this.getSketch().getLoaders().textureLoader.load("./textures/planet/road.jpg"),this.roadTexture.flipY=!1,this.roadTexture.encoding=d.Rb,this.planetMaterial=new d.S({color:16777215}),this.getSketch().getLoaders().gltfLoader.load("./models/planet/planet.glb",(function(e){t.planet=e.scene,e.scene.traverse((function(e){e.material=t.planetMaterial}));var n=e.scene.children.find((function(t){return"lines"===t.name}));n&&(n.position.y+=.001),t.getSketch().getScene().add(t.planet)}),(function(t){console.log("".concat(t.loaded/t.total*100,"% loaded"))}),(function(t){console.log("An error happened")})),console.log("added planet")}},{key:"update",value:function(){}},{key:"destroy",value:function(){this.getSketch().getScene().remove(this.planet),this.planetTexture.dispose(),this.roadTexture.dispose(),this.planetMaterial.dispose(),console.log("removed planet")}}]),n}(f.a)},357:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return v}));n(139);var r=n(49),o=n(75),c=n(76),h=n(77),l=n(50),f=(n(26),n(287));function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}var v=function(t){Object(c.a)(n,t);var e=d(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).name="Lights",t}return Object(o.a)(n,[{key:"init",value:function(){this.ambientLight=new f.b("#b9d5ff",.12),this.moonLight=new f.p("#ffffff",.5),this.moonLight.position.set(4,5,-2),this.moonLight.castShadow=!0,this.doorLight=new f.kb("#ff7d46",1,7),this.doorLight.position.set(0,2.2,2.7),this.doorLight.castShadow=!0,this.getSketch().getScene().add(this.ambientLight),this.getSketch().getScene().add(this.moonLight),this.getSketch().getScene().add(this.doorLight),this.getSketch().getGui().add(this.ambientLight,"intensity").min(0).max(1).step(.001),this.getSketch().getGui().add(this.moonLight,"intensity").min(0).max(1).step(.001),this.getSketch().getGui().add(this.moonLight.position,"x").min(-50).max(50).step(.001),this.getSketch().getGui().add(this.moonLight.position,"y").min(-50).max(50).step(.001),this.getSketch().getGui().add(this.moonLight.position,"z").min(-50).max(50).step(.001),console.log("add ligths")}},{key:"update",value:function(){}},{key:"destroy",value:function(){this.getSketch().getScene().remove(this.ambientLight),this.getSketch().getScene().remove(this.moonLight),this.getSketch().getScene().remove(this.doorLight),console.log("removed lights")}}]),n}(n(288).a)},378:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return k}));n(139);var r=n(49),o=n(75),c=n(314),h=n(76),l=n(77),f=n(50),d=n(291),v=n(356),y=n(357);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var k=function(t){Object(h.a)(n,t);var e=m(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"init",value:function(t){Object(c.a)(Object(f.a)(n.prototype),"init",this).call(this,t,"perspective");var e=new y.default,r=new v.default;this.setEntity(e),this.setEntity(r),this.getCamera().position.x=10,this.getCamera().position.y=10,this.getCamera().position.z=10,this.isReadyToRender=!0}}]),n}(d.a)},436:function(t,e,n){"use strict";n.r(e);n(139);var r=n(49),o=n(75),c=n(76),h=n(77),l=n(50),f=n(9),d=(n(42),n(51)),v=n(378);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},k=function(t){Object(c.a)(n,t);var e=y(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"mounted",value:function(){this.sketch=new v.default,this.sketch.init(this.$el)}},{key:"beforeDestroy",value:function(){this.sketch.destroy()}}]),n}(d.Vue),w=k=m([d.Component],k),R=n(17),component=Object(R.a)(w,(function(){var t=this.$createElement;return(this._self._c||t)("canvas")}),[],!1,null,null,null);e.default=component.exports}}]);