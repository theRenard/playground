(window.webpackJsonp=window.webpackJsonp||[]).push([[16,17,18,19,20],{284:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(47),o=n(74),c=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,[{key:"setSketch",value:function(t){this.sketch=t}},{key:"getSketch",value:function(){return this.sketch}}]),t}()},286:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(47),o=n(74),c=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,null,[{key:"aspRatio",get:function(){return this.width/this.height}}]),t}();c.width=window.innerWidth,c.height=window.innerHeight},287:function(t,e,n){"use strict";n.d(e,"a",(function(){return L}));var r=n(47),o=n(74),c=(n(290),n(8),n(14),n(291),n(292),n(293),n(294),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(16),n(25),n(37),n(36),n(26),n(38),n(39),n(304)),h=n(283),l=n(305),f=n(286),d=n(306),y=n(307),v=n(308),m=n(309),w=new h.M;w.addHandler(/\.dds$/i,new y.a);var k=new m.a;k.setDecoderPath("/draco/");var R=new v.a;R.setDRACOLoader(k);var x=new d.a(w),j=new h.Jb(w);function O(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return S(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,h=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){h=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(h)throw o}}}}function S(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var L=function(){function t(){Object(r.a)(this,t),this.canvas=null,this.manager=w,this.objLoader=x,this.gltfLoader=R,this.textureLoader=j,this.clock=new h.m,this.gui=new c.a({width:300}),this.elapsedTime=0,this.debug=!1,this.isReadyToRender=!1,this.entities=new Map}return Object(o.a)(t,[{key:"init",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"perspective";this.canvas=t,this.cameraType=e,this.setRenderer(),this.setScene(),this.setCamera(),this.setControls(),this.resize=this.resize.bind(this),this.addResizeListener(),this.addInitialGui(),this.tick=this.tick.bind(this),this.tick()}},{key:"setEntity",value:function(t){t.setSketch(this),t.init(),this.entities.set(t.name,t)}},{key:"getLoaders",value:function(){return{manager:this.manager,objLoader:this.objLoader,gltfLoader:this.gltfLoader,textureLoader:this.textureLoader}}},{key:"getEntities",value:function(){return this.entities}},{key:"getScene",value:function(){return this.scene}},{key:"getCamera",value:function(){return this.camera}},{key:"getGui",value:function(){return this.gui}},{key:"showGui",value:function(){this.gui.show()}},{key:"setRenderer",value:function(){this.canvas&&(this.renderer=new h.Qb({canvas:this.canvas}),this.renderer.setSize(f.a.width,f.a.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor("#262837"),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=h.hb,this.renderer.outputEncoding=h.Rb)}},{key:"setCamera",value:function(){var t=new h.d(3);this.scene.add(t),"orthographic"===this.cameraType?this.camera=new h.gb(-3*f.a.aspRatio,3*f.a.aspRatio,3,-3,.1,100):this.camera=new h.ib(75,f.a.width/f.a.height,.1,2e3)}},{key:"setScene",value:function(){this.scene=new h.yb}},{key:"setControls",value:function(){this.canvas&&(this.controls=new l.a(this.camera,this.canvas),this.controls.enableDamping=!0)}},{key:"getControls",value:function(){return this.controls}},{key:"getEntityByName",value:function(t){return this.entities.get(t)||null}},{key:"resize",value:function(){f.a.width=window.innerWidth,f.a.height=window.innerHeight,this.camera instanceof h.gb?(this.camera.left=-1*f.a.aspRatio,this.camera.right=1*f.a.aspRatio,this.camera.top=1,this.camera.bottom=-1):this.camera.aspect=f.a.width/f.a.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(f.a.width,f.a.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}},{key:"addResizeListener",value:function(){window.addEventListener("resize",this.resize)}},{key:"removeResizeListener",value:function(){window.removeEventListener("resize",this.resize)}},{key:"update",value:function(t){var e,n=O(this.entities.values());try{for(n.s();!(e=n.n()).done;){e.value.update(t)}}catch(t){n.e(t)}finally{n.f()}}},{key:"destroyEntities",value:function(){var t,e=O(this.entities.values());try{for(e.s();!(t=e.n()).done;){t.value.destroy()}}catch(t){e.e(t)}finally{e.f()}}},{key:"tick",value:function(){this.elapsedTime=this.clock.getElapsedTime(),this.isReadyToRender&&this.update(this.elapsedTime),this.controls.update(),this.renderer.render(this.scene,this.camera),this.animationReq=window.requestAnimationFrame(this.tick)}},{key:"addInitialGui",value:function(){}},{key:"destroy",value:function(){this.gui.destroy(),this.destroyEntities(),this.removeResizeListener(),window.cancelAnimationFrame(this.animationReq)}}]),t}()},342:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return y}));n(137);var r=n(47),o=n(74),c=n(75),h=n(76),l=n(48),f=(n(25),n(283));function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}var y=function(t){Object(c.a)(n,t);var e=d(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).name="Lights",t}return Object(o.a)(n,[{key:"init",value:function(){this.ambientlight=new f.b(16777215,.2),this.getSketch().getScene().add(this.ambientlight),this.pointLight=new f.kb(16777215,1),this.pointLight.position.set(5,3,5),this.getSketch().getScene().add(this.pointLight),this.Helper=new f.lb(this.pointLight),this.getSketch().getScene().add(this.Helper)}},{key:"update",value:function(){}},{key:"destroy",value:function(){this.getSketch().getScene().remove(this.ambientlight),this.getSketch().getScene().remove(this.pointLight),this.getSketch().getScene().remove(this.Helper),console.log("removed lights")}}]),n}(n(284).a)},343:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return y}));n(137);var r=n(47),o=n(74),c=n(75),h=n(76),l=n(48),f=n(283);function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}var y=function(t){Object(c.a)(n,t);var e=d(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"init",value:function(){this.textures={earthmap1k:this.getSketch().getLoaders().textureLoader.load("./textures/earth/earthmap1k.jpg"),earthbump:this.getSketch().getLoaders().textureLoader.load("./textures/earth/earthbump.jpg")},this.earthGeometry=new f.Db(.6,32,32),this.earthMaterial=new f.W({map:this.textures.earthmap1k,bumpMap:this.textures.earthbump,bumpScale:.3}),this.earthMesh=new f.R(this.earthGeometry,this.earthMaterial),this.getSketch().getScene().add(this.earthMesh)}},{key:"update",value:function(){this.earthMesh.rotation.y-=.0015}},{key:"destroy",value:function(){this.getSketch().getScene().remove(this.earthMesh),this.earthGeometry.dispose(),this.earthMaterial.dispose(),this.textures.earthmap1k.dispose(),this.textures.earthbump.dispose(),console.log("removed Earth")}}]),n}(n(284).a)},344:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return y}));n(137);var r=n(47),o=n(74),c=n(75),h=n(76),l=n(48),f=(n(25),n(283));function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}var y=function(t){Object(c.a)(n,t);var e=d(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).name="Earth",t}return Object(o.a)(n,[{key:"init",value:function(){this.textures={galaxy:this.getSketch().getLoaders().textureLoader.load("./textures/earth/galaxy.png")},this.galaxyGeometry=new f.Db(80,64,64),this.galaxyMaterial=new f.S({map:this.textures.galaxy,side:f.e}),this.galaxyMesh=new f.R(this.galaxyGeometry,this.galaxyMaterial),this.getSketch().getScene().add(this.galaxyMesh)}},{key:"update",value:function(){this.galaxyMesh.rotation.y-=.002}},{key:"destroy",value:function(){this.getSketch().getScene().remove(this.galaxyMesh),this.galaxyGeometry.dispose(),this.galaxyMaterial.dispose(),this.textures.galaxy.dispose(),console.log("removed Galaxy")}}]),n}(n(284).a)},345:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return v}));n(137);var r=n(47),o=n(74),c=n(75),h=n(76),l=n(48),f=n(284),d=n(283);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}var v=function(t){Object(c.a)(n,t);var e=y(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"init",value:function(){this.textures={earthClouds:this.getSketch().getLoaders().textureLoader.load("./textures/earth/earthCloud.png")},this.cloudsGeometry=new d.Db(.63,32,32),this.cloudsMaterial=new d.W({map:this.textures.earthClouds,transparent:!0}),this.cloudsMesh=new d.R(this.cloudsGeometry,this.cloudsMaterial),this.getSketch().getScene().add(this.cloudsMesh)}},{key:"update",value:function(){this.cloudsMesh.rotation.y-=.001}},{key:"destroy",value:function(){this.getSketch().getScene().remove(this.cloudsMesh),this.cloudsGeometry.dispose(),this.cloudsMaterial.dispose(),this.textures.clouds.dispose(),console.log("removed clouds")}}]),n}(f.a)},365:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return k}));n(137);var r=n(47),o=n(74),c=n(310),h=n(75),l=n(76),f=n(48),d=n(342),y=n(343),v=n(344),m=n(345);function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var k=function(t){Object(h.a)(n,t);var e=w(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"init",value:function(t){Object(c.a)(Object(f.a)(n.prototype),"init",this).call(this,t,"perspective");var e=new d.default,r=new y.default,o=new v.default,h=new m.default;this.setEntity(e),this.setEntity(r),this.setEntity(o),this.setEntity(h),this.getCamera().position.x=1,this.getCamera().position.y=1,this.getCamera().position.z=1,this.isReadyToRender=!0}}]),n}(n(287).a)}}]);