(window.webpackJsonp=window.webpackJsonp||[]).push([[25,26,27],{288:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n(49),o=n(75),h=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,[{key:"setSketch",value:function(t){this.sketch=t}},{key:"getSketch",value:function(){return this.sketch}}]),t}()},290:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n(49),o=n(75),h=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,null,[{key:"aspRatio",get:function(){return this.width/this.height}}]),t}();h.width=window.innerWidth,h.height=window.innerHeight},291:function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var r=n(49),o=n(75),h=(n(294),n(11),n(15),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(18),n(26),n(39),n(38),n(27),n(40),n(41),n(308)),c=n(287),l=n(309),d=n(290),f=n(310),m=n(311),v=n(312),y=n(313),w=new c.M;w.addHandler(/\.dds$/i,new m.a);var k=new y.a;k.setDecoderPath("/draco/");var M=new v.a;M.setDRACOLoader(k);var L=new f.a(w),S=new c.Jb(w);function R(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return j(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,h=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return h=t.done,t},e:function(t){c=!0,o=t},f:function(){try{h||null==n.return||n.return()}finally{if(c)throw o}}}}function j(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var O=function(){function t(){Object(r.a)(this,t),this.canvas=null,this.manager=w,this.objLoader=L,this.gltfLoader=M,this.textureLoader=S,this.clock=new c.m,this.gui=new h.a({width:300}),this.elapsedTime=0,this.debug=!1,this.isReadyToRender=!1,this.entities=new Map}return Object(o.a)(t,[{key:"init",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"perspective";this.canvas=t,this.cameraType=e,this.setRenderer(),this.setScene(),this.setCamera(),this.setControls(),this.resize=this.resize.bind(this),this.addResizeListener(),this.addInitialGui(),this.tick=this.tick.bind(this),this.tick()}},{key:"setEntity",value:function(t){t.setSketch(this),t.init(),this.entities.set(t.name,t)}},{key:"getLoaders",value:function(){return{manager:this.manager,objLoader:this.objLoader,gltfLoader:this.gltfLoader,textureLoader:this.textureLoader}}},{key:"getEntities",value:function(){return this.entities}},{key:"getScene",value:function(){return this.scene}},{key:"getCamera",value:function(){return this.camera}},{key:"getGui",value:function(){return this.gui}},{key:"showGui",value:function(){this.gui.show()}},{key:"setRenderer",value:function(){this.canvas&&(this.renderer=new c.Qb({canvas:this.canvas}),this.renderer.setSize(d.a.width,d.a.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor("#262837"),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=c.hb,this.renderer.outputEncoding=c.Rb)}},{key:"setCamera",value:function(){var t=new c.d(3);this.scene.add(t),"orthographic"===this.cameraType?this.camera=new c.gb(-3*d.a.aspRatio,3*d.a.aspRatio,3,-3,.1,100):this.camera=new c.ib(75,d.a.width/d.a.height,.1,2e3)}},{key:"setScene",value:function(){this.scene=new c.yb}},{key:"setControls",value:function(){this.canvas&&(this.controls=new l.a(this.camera,this.canvas),this.controls.enableDamping=!0)}},{key:"getControls",value:function(){return this.controls}},{key:"getEntityByName",value:function(t){return this.entities.get(t)||null}},{key:"resize",value:function(){d.a.width=window.innerWidth,d.a.height=window.innerHeight,this.camera instanceof c.gb?(this.camera.left=-1*d.a.aspRatio,this.camera.right=1*d.a.aspRatio,this.camera.top=1,this.camera.bottom=-1):this.camera.aspect=d.a.width/d.a.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(d.a.width,d.a.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}},{key:"addResizeListener",value:function(){window.addEventListener("resize",this.resize)}},{key:"removeResizeListener",value:function(){window.removeEventListener("resize",this.resize)}},{key:"update",value:function(t){var e,n=R(this.entities.values());try{for(n.s();!(e=n.n()).done;){e.value.update(t)}}catch(t){n.e(t)}finally{n.f()}}},{key:"destroyEntities",value:function(){var t,e=R(this.entities.values());try{for(e.s();!(t=e.n()).done;){t.value.destroy()}}catch(t){e.e(t)}finally{e.f()}}},{key:"tick",value:function(){this.elapsedTime=this.clock.getElapsedTime(),this.isReadyToRender&&this.update(this.elapsedTime),this.controls.update(),this.renderer.render(this.scene,this.camera),this.animationReq=window.requestAnimationFrame(this.tick)}},{key:"addInitialGui",value:function(){}},{key:"destroy",value:function(){this.gui.destroy(),this.destroyEntities(),this.removeResizeListener(),window.cancelAnimationFrame(this.animationReq)}}]),t}()},354:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return v}));n(139);var r=n(49),o=n(75),h=n(76),c=n(77),l=n(50),d=(n(43),n(33),n(26),n(288)),f=n(287);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var v=function(t){Object(h.a)(n,t);var e=m(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).options={meshMaterial:"meshPhongMaterial",color:"#186691",wireframe:!1,alphaMap:"none",wireframeLinewidth:3},t}return Object(o.a)(n,[{key:"init",value:function(){this.loadTextures(),this.createMaterials(),this.addCube(),this.addMoreGui()}},{key:"loadTextures",value:function(){this.alphaMaps={none:null,alphaMap_One:this.getSketch().getLoaders().textureLoader.load("./textures/cube/cube_alphaMap.jpg"),alphaMap_Two:this.getSketch().getLoaders().textureLoader.load("./textures/cube/cube_alphaMap_2.png")}}},{key:"createMaterials",value:function(){this.materials={meshBasicMaterial:new f.S({color:this.options.color,wireframe:this.options.wireframe,alphaMap:this.alphaMaps[this.options.alphaMap],transparent:!0}),meshDepthMaterial:new f.T,meshLambertMaterial:new f.U({color:this.options.color,alphaMap:this.alphaMaps[this.options.alphaMap],transparent:!0,wireframe:this.options.wireframe}),meshPhongMaterial:new f.W({color:this.options.color,alphaMap:this.alphaMaps[this.options.alphaMap],transparent:!0,wireframe:this.options.wireframe}),meshNormalMaterial:new f.V,meshToonMaterial:new f.Z({color:this.options.color,alphaMap:this.alphaMaps[this.options.alphaMap],transparent:!0,wireframe:this.options.wireframe})}}},{key:"addCube",value:function(){this.cubeGeometry=new f.h(.7,.7,.7,5,5,6),this.cubeMesh=new f.R(this.cubeGeometry,this.materials[this.options.meshMaterial]),this.getSketch().getScene().add(this.cubeMesh)}},{key:"removeCube",value:function(){this.getSketch().getScene().remove(this.cubeMesh)}},{key:"addMoreGui",value:function(){var t=this,e=Object.keys(this.materials),n=Object.keys(this.alphaMaps);this.getSketch().getGui().add(this.options,"meshMaterial",e).onChange((function(){t.cubeMesh.material=t.materials[t.options.meshMaterial],t.cubeMesh.material.needsUpdate=!0})),this.getSketch().getGui().add(this.options,"wireframe").onChange((function(){e.forEach((function(e){t.materials[e].wireframe=t.options.wireframe}))})),this.getSketch().getGui().add(this.options,"alphaMap",n).onChange((function(){t.cubeMesh.material instanceof f.S&&(t.cubeMesh.material.alphaMap=t.alphaMaps[t.options.alphaMap],t.cubeMesh.material.needsUpdate=!0)})),this.getSketch().getGui().addColor(this.options,"color").name("Material Color").onChange((function(){e.forEach((function(e){var n=t.materials[e];n instanceof f.V||n instanceof f.T||n.color.set(t.options.color)}))}))}},{key:"update",value:function(t){this.cubeMesh.rotation.y-=.01}},{key:"destroy",value:function(){this.removeCube()}}]),n}(d.a)},355:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return m}));n(139);var r=n(49),o=n(75),h=n(76),c=n(77),l=n(50),d=(n(26),n(287));function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var m=function(t){Object(h.a)(n,t);var e=f(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).name="Lights",t}return Object(o.a)(n,[{key:"init",value:function(){this.ambientLight=new d.b("#b9d5ff",.12),this.directionalLight=new d.p("#ffffff",.5),this.directionalLight.position.set(4,5,-2),this.directionalLightHelper=new d.q(this.directionalLight,5),this.getSketch().getScene().add(this.ambientLight),this.getSketch().getScene().add(this.directionalLightHelper),this.getSketch().getScene().add(this.directionalLight),this.spotLight=new d.Fb(16777215,1,1,.3*Math.PI),this.spotLight.castShadow=!0,this.spotLight.shadow.mapSize.width=1024,this.spotLight.shadow.mapSize.height=1024,this.spotLight.shadow.camera.fov=30,this.spotLight.shadow.camera.near=1,this.spotLight.shadow.camera.far=6,this.getSketch().getScene().add(this.spotLight),this.getSketch().getScene().add(this.spotLight.target),this.spotLightCameraHelper=new d.k(this.spotLight.shadow.camera),this.getSketch().getScene().add(this.spotLightCameraHelper),console.log("add ligths")}},{key:"update",value:function(t){this.spotLight.position.x=3*Math.sin(.5*t),this.spotLight.position.z=3*Math.cos(.5*t),this.spotLight.position.y=1;var e=this.getSketch().getEntityByName("cube");e&&this.spotLight.lookAt(e.cubeMesh.position)}},{key:"destroy",value:function(){this.getSketch().getScene().remove(this.ambientLight),this.getSketch().getScene().remove(this.directionalLight),this.getSketch().getScene().remove(this.directionalLightHelper),this.getSketch().getScene().remove(this.spotLight.target),this.getSketch().getScene().remove(this.spotLight),this.getSketch().getScene().remove(this.spotLightCameraHelper),console.log("removed lights")}}]),n}(n(288).a)},377:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return y}));n(139);var r=n(49),o=n(75),h=n(314),c=n(76),l=n(77),d=n(50),f=n(354),m=n(355);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t){Object(c.a)(n,t);var e=v(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"init",value:function(t){Object(h.a)(Object(d.a)(n.prototype),"init",this).call(this,t,"perspective"),this.lights=new m.default;var e=new f.default;this.setEntity(this.lights),this.setEntity(e),this.getCamera().position.x=10,this.getCamera().position.y=10,this.getCamera().position.z=10,this.isReadyToRender=!0}}]),n}(n(291).a)}}]);