(window.webpackJsonp=window.webpackJsonp||[]).push([[43,40,44,46,47],{288:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(49),o=n(75),c=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,[{key:"setSketch",value:function(t){this.sketch=t}},{key:"getSketch",value:function(){return this.sketch}}]),t}()},290:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(49),o=n(75),c=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,null,[{key:"aspRatio",get:function(){return this.width/this.height}}]),t}();c.width=window.innerWidth,c.height=window.innerHeight},291:function(t,e,n){"use strict";n.d(e,"a",(function(){return M}));var r=n(49),o=n(75),c=(n(294),n(11),n(15),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(18),n(26),n(39),n(38),n(27),n(40),n(41),n(308)),h=n(287),l=n(309),f=n(290),d=n(310),v=n(311),y=n(312),m=n(313),w=new h.M;w.addHandler(/\.dds$/i,new v.a);var k=new m.a;k.setDecoderPath("/draco/");var S=new y.a;S.setDRACOLoader(k);var R=new d.a(w),O=new h.Jb(w);function C(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return x(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,h=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){h=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(h)throw o}}}}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var M=function(){function t(){Object(r.a)(this,t),this.canvas=null,this.manager=w,this.objLoader=R,this.gltfLoader=S,this.textureLoader=O,this.clock=new h.m,this.gui=new c.a({width:300}),this.elapsedTime=0,this.debug=!1,this.isReadyToRender=!1,this.entities=new Map}return Object(o.a)(t,[{key:"init",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"perspective";this.canvas=t,this.cameraType=e,this.setRenderer(),this.setScene(),this.setCamera(),this.setControls(),this.resize=this.resize.bind(this),this.addResizeListener(),this.addInitialGui(),this.tick=this.tick.bind(this),this.tick()}},{key:"setEntity",value:function(t){t.setSketch(this),t.init(),this.entities.set(t.name,t)}},{key:"getLoaders",value:function(){return{manager:this.manager,objLoader:this.objLoader,gltfLoader:this.gltfLoader,textureLoader:this.textureLoader}}},{key:"getEntities",value:function(){return this.entities}},{key:"getScene",value:function(){return this.scene}},{key:"getCamera",value:function(){return this.camera}},{key:"getGui",value:function(){return this.gui}},{key:"showGui",value:function(){this.gui.show()}},{key:"setRenderer",value:function(){this.canvas&&(this.renderer=new h.Qb({canvas:this.canvas}),this.renderer.setSize(f.a.width,f.a.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor("#262837"),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=h.hb,this.renderer.outputEncoding=h.Rb)}},{key:"setCamera",value:function(){var t=new h.d(3);this.scene.add(t),"orthographic"===this.cameraType?this.camera=new h.gb(-3*f.a.aspRatio,3*f.a.aspRatio,3,-3,.1,100):this.camera=new h.ib(75,f.a.width/f.a.height,.1,2e3)}},{key:"setScene",value:function(){this.scene=new h.yb}},{key:"setControls",value:function(){this.canvas&&(this.controls=new l.a(this.camera,this.canvas),this.controls.enableDamping=!0)}},{key:"getControls",value:function(){return this.controls}},{key:"getEntityByName",value:function(t){return this.entities.get(t)||null}},{key:"resize",value:function(){f.a.width=window.innerWidth,f.a.height=window.innerHeight,this.camera instanceof h.gb?(this.camera.left=-1*f.a.aspRatio,this.camera.right=1*f.a.aspRatio,this.camera.top=1,this.camera.bottom=-1):this.camera.aspect=f.a.width/f.a.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(f.a.width,f.a.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}},{key:"addResizeListener",value:function(){window.addEventListener("resize",this.resize)}},{key:"removeResizeListener",value:function(){window.removeEventListener("resize",this.resize)}},{key:"update",value:function(t){var e,n=C(this.entities.values());try{for(n.s();!(e=n.n()).done;){e.value.update(t)}}catch(t){n.e(t)}finally{n.f()}}},{key:"destroyEntities",value:function(){var t,e=C(this.entities.values());try{for(e.s();!(t=e.n()).done;){t.value.destroy()}}catch(t){e.e(t)}finally{e.f()}}},{key:"tick",value:function(){this.elapsedTime=this.clock.getElapsedTime(),this.isReadyToRender&&this.update(this.elapsedTime),this.controls.update(),this.renderer.render(this.scene,this.camera),this.animationReq=window.requestAnimationFrame(this.tick)}},{key:"addInitialGui",value:function(){}},{key:"destroy",value:function(){this.gui.destroy(),this.destroyEntities(),this.removeResizeListener(),window.cancelAnimationFrame(this.animationReq)}}]),t}()},293:function(t,e,n){"use strict";e.a={rand_range:function(a,b){return Math.random()*(b-a)+a},rand_normalish:function(){return(Math.random()+Math.random()+Math.random()+Math.random())/4*2-1},rand_int:function(a,b){return Math.round(Math.random()*(b-a)+a)},lerp:function(t,a,b){return t*(b-a)+a},smoothstep:function(t,a,b){return(t=t*t*(3-2*t))*(b-a)+a},smootherstep:function(t,a,b){return(t=t*t*t*(t*(6*t-15)+10))*(b-a)+a},clamp:function(t,a,b){return Math.min(Math.max(t,a),b)},sat:function(t){return Math.min(Math.max(t,0),1)}}},342:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return l}));var r=n(49),o=n(75),c=n(293),h=n(287),l=function(){function t(e,n,o,c){Object(r.a)(this,t),this.position=n.clone(),this.radius=[o,c],this.generator=e}return Object(o.a)(t,[{key:"Get",value:function(t,e){var n=this.position.distanceTo(new h.Nb(t,e)),r=1-c.a.sat((n-this.radius[0])/(this.radius[1]-this.radius[0]));return r=r*r*(3-2*r),[this.generator.Get(t,e),r]}}]),t}()},343:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return f}));var r=n(49),o=n(75),c=(n(317),n(11),n(341),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(325),n(326),n(327),n(328),n(329),n(330),n(331),n(332),n(333),n(334),n(335),n(336),n(337),n(338),n(339),n(340),n(39),n(26),n(38),n(15),n(27),n(40),n(41),n(18),n(287));function h(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,h=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){h=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(h)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var f=function(){function t(e){var n=e.group,o=e.offset,c=e.scale,h=e.width,l=e.heightGenerators;Object(r.a)(this,t),this.group=n,this.offset=o,this.scale=c,this.width=h,this.heightGenerators=l,this.init()}return Object(o.a)(t,[{key:"init",value:function(){var t=new c.Ob(this.width*this.scale,0,this.width*this.scale);this.plane=new c.R(new c.jb(t.x,t.z,128,128),new c.Y({wireframe:!1,color:255,side:c.v})),this.plane.position.add(this.offset),this.plane.castShadow=!1,this.plane.receiveShadow=!0,this.group.add(this.plane),this.rebuild()}},{key:"rebuild",value:function(){var t=this.offset;console.log("rebuild terrain chunks");for(var e=this.plane.geometry.getAttribute("position"),n=new Float32Array(3*e.count),i=0;i<e.count;i+=1){var r,o=3*i,l=e.array[o+0],f=e.array[o+1],d=0,v=[],y=0,m=h(this.heightGenerators);try{for(m.s();!(r=m.n()).done;){var w=r.value;v.push(w.Get(l+t.x,f+t.y)),y+=v[v.length-1][1]}}catch(t){m.e(t)}finally{m.f()}if(y>0){var k,S=h(v);try{for(S.s();!(k=S.n()).done;){var R=k.value;d+=R[0]*R[1]/y}}catch(t){S.e(t)}finally{S.f()}}n[o+0]=l,n[o+1]=f,n[o+2]=d}var O=new c.i(n,3);this.plane.geometry.setAttribute("position",O),this.heightGenerators.length>1&&0===t.x&&t.y,this.plane.geometry.computeVertexNormals()}}]),t}()},344:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return f}));var r=n(49),o=n(75),c=n(293),h=n(287),l=n(292).default.noise,f=function(){function t(img){Object(r.a)(this,t),this.data=function(image){var canvas=document.createElement("canvas");canvas.width=image.width,canvas.height=image.height;var t=canvas.getContext("2d");return t.drawImage(image,0,0),t.getImageData(0,0,image.width,image.height)}(img)}return Object(o.a)(t,[{key:"Get",value:function(t,e){var n=this,r=function(a,b){var t=4*(a+n.data.width*b);return n.data.data[t]/255},o=new h.Nb(-250,-250),f=new h.Nb(500,500),d=1-c.a.sat((t-o.x)/f.x),v=c.a.sat((e-o.y)/f.y),y=this.data.width-1,m=this.data.height-1,w=Math.floor(d*y),k=Math.floor(v*m),S=c.a.clamp(w+1,0,y),R=c.a.clamp(k+1,0,m),O=d*y-w,C=v*m-k,x=r(w,k),M=r(S,k),j=r(w,R),E=r(S,R),T=c.a.lerp(O,x,M),P=c.a.lerp(O,j,E);return c.a.lerp(C,T,P)*l.height}}]),t}()},358:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return S}));n(139);var r=n(49),o=n(75),c=n(76),h=n(77),l=n(50),f=(n(66),n(287)),d=n(372),v=n(342),y=n(292),m=n(344),w=n(343);function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}var S=function(t){Object(c.a)(n,t);var e=k(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).chunkSize=500,t}return Object(o.a)(n,[{key:"init",value:function(){this.initNoise(),this.initTerrain()}},{key:"initNoise",value:function(){var t=this,e=function(){for(var e in t.terrainChunks)t.terrainChunks[e].chunk.rebuild()},n=this.getSketch().getGui().addFolder("Terrain.Noise");n.add(y.default.noise,"noiseType",["simplex","perlin"]).onChange(e),n.add(y.default.noise,"scale",64,1024).onChange(e),n.add(y.default.noise,"octaves",1,20,1).onChange(e),n.add(y.default.noise,"persistence",.01,1).onChange(e),n.add(y.default.noise,"lacunarity",.01,4).onChange(e),n.add(y.default.noise,"exponentiation",.1,10).onChange(e),n.add(y.default.noise,"height",0,256).onChange(e),this.noise=new d.default,this.getSketch().getGui().addFolder("Terrain.Heightmap").add(y.default.heightmap,"height",0,128).onChange(e)}},{key:"initTerrain",value:function(){var t=this;this.group=new f.w,this.group.rotation.x=-Math.PI/2,this.getSketch().getScene().add(this.group),this.getSketch().getGui().addFolder("Terrain").add(y.default.terrain,"wireframe").onChange((function(){for(var e in t.terrainChunks)t.terrainChunks[e].chunk.plane.material.wireframe=y.default.terrain.wireframe})),this.terrainChunks={};for(var e=-1;e<=1;e+=1)for(var n=-1;n<=1;n+=1)this.addChunk(e,n)}},{key:"key",value:function(t,e){return"".concat(t,".").concat(e)}},{key:"addChunk",value:function(t,e){for(var n=new f.Nb(t*this.chunkSize,e*this.chunkSize),r=new w.default({group:this.group,offset:new f.Ob(n.x,n.y,0),scale:1,width:this.chunkSize,heightGenerators:[new v.default(this.noise,n,1e5,100001)]}),o=this.key(t,e),c=[],h=-1;h<=1;h+=1)for(var l=-1;l<=1;l+=1)0!==h&&0!==l&&c.push(this.key(t+h,e+l));this.terrainChunks[o]={chunk:r,edges:c}}},{key:"setHeightMap",value:function(img){var t=new v.default(new m.default(img),new f.Nb(0,0),250,300);for(var e in this.terrainChunks)this.terrainChunks[e].chunk.heightGenerators.unshift(t),this.terrainChunks[e].chunk.rebuild()}},{key:"update",value:function(){}},{key:"destroy",value:function(){}}]),n}(n(288).a)},361:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return y}));n(139);var r=n(49),o=n(75),c=n(76),h=n(77),l=n(50),f=(n(26),n(288)),d=n(287);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}var y=function(t){Object(c.a)(n,t);var e=v(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).name="Lights",t}return Object(o.a)(n,[{key:"init",value:function(){this.lightOne=new d.p(8421504,100),this.lightOne.position.set(-100,100,-100),this.lightOne.target.position.set(0,0,0),this.lightOne.castShadow=!1,this.getSketch().getScene().add(this.lightOne),this.lightTwo=new d.p(4210752,100),this.lightTwo.position.set(100,100,-100),this.lightTwo.target.position.set(0,0,0),this.lightTwo.castShadow=!1,this.getSketch().getScene().add(this.lightTwo)}},{key:"update",value:function(){}},{key:"destroy",value:function(){this.getSketch().getScene().remove(this.lightOne),this.getSketch().getScene().remove(this.lightTwo),console.log("removed lights")}}]),n}(f.a)},365:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return w}));n(139);var r=n(49),o=n(75),c=n(76),h=n(77),l=n(50),f=n(288),d=n(287);class v extends d.R{constructor(){const t=v.SkyShader,e=new d.zb({name:"SkyShader",fragmentShader:t.fragmentShader,vertexShader:t.vertexShader,uniforms:d.Mb.clone(t.uniforms),side:d.e,depthWrite:!1});super(new d.h(1,1,1),e)}}v.prototype.isSky=!0,v.SkyShader={uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new d.Ob},up:{value:new d.Ob(0,1,0)}},vertexShader:"\n\t\tuniform vec3 sunPosition;\n\t\tuniform float rayleigh;\n\t\tuniform float turbidity;\n\t\tuniform float mieCoefficient;\n\t\tuniform vec3 up;\n\n\t\tvarying vec3 vWorldPosition;\n\t\tvarying vec3 vSunDirection;\n\t\tvarying float vSunfade;\n\t\tvarying vec3 vBetaR;\n\t\tvarying vec3 vBetaM;\n\t\tvarying float vSunE;\n\n\t\t// constants for atmospheric scattering\n\t\tconst float e = 2.71828182845904523536028747135266249775724709369995957;\n\t\tconst float pi = 3.141592653589793238462643383279502884197169;\n\n\t\t// wavelength of used primaries, according to preetham\n\t\tconst vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );\n\t\t// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:\n\t\t// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))\n\t\tconst vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );\n\n\t\t// mie stuff\n\t\t// K coefficient for the primaries\n\t\tconst float v = 4.0;\n\t\tconst vec3 K = vec3( 0.686, 0.678, 0.666 );\n\t\t// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K\n\t\tconst vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );\n\n\t\t// earth shadow hack\n\t\t// cutoffAngle = pi / 1.95;\n\t\tconst float cutoffAngle = 1.6110731556870734;\n\t\tconst float steepness = 1.5;\n\t\tconst float EE = 1000.0;\n\n\t\tfloat sunIntensity( float zenithAngleCos ) {\n\t\t\tzenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );\n\t\t\treturn EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );\n\t\t}\n\n\t\tvec3 totalMie( float T ) {\n\t\t\tfloat c = ( 0.2 * T ) * 10E-18;\n\t\t\treturn 0.434 * c * MieConst;\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\t\t\tvWorldPosition = worldPosition.xyz;\n\n\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\tgl_Position.z = gl_Position.w; // set z to camera.far\n\n\t\t\tvSunDirection = normalize( sunPosition );\n\n\t\t\tvSunE = sunIntensity( dot( vSunDirection, up ) );\n\n\t\t\tvSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );\n\n\t\t\tfloat rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );\n\n\t\t\t// extinction (absorbtion + out scattering)\n\t\t\t// rayleigh coefficients\n\t\t\tvBetaR = totalRayleigh * rayleighCoefficient;\n\n\t\t\t// mie coefficients\n\t\t\tvBetaM = totalMie( turbidity ) * mieCoefficient;\n\n\t\t}",fragmentShader:"\n\t\tvarying vec3 vWorldPosition;\n\t\tvarying vec3 vSunDirection;\n\t\tvarying float vSunfade;\n\t\tvarying vec3 vBetaR;\n\t\tvarying vec3 vBetaM;\n\t\tvarying float vSunE;\n\n\t\tuniform float mieDirectionalG;\n\t\tuniform vec3 up;\n\n\t\tconst vec3 cameraPos = vec3( 0.0, 0.0, 0.0 );\n\n\t\t// constants for atmospheric scattering\n\t\tconst float pi = 3.141592653589793238462643383279502884197169;\n\n\t\tconst float n = 1.0003; // refractive index of air\n\t\tconst float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)\n\n\t\t// optical length at zenith for molecules\n\t\tconst float rayleighZenithLength = 8.4E3;\n\t\tconst float mieZenithLength = 1.25E3;\n\t\t// 66 arc seconds -> degrees, and the cosine of that\n\t\tconst float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;\n\n\t\t// 3.0 / ( 16.0 * pi )\n\t\tconst float THREE_OVER_SIXTEENPI = 0.05968310365946075;\n\t\t// 1.0 / ( 4.0 * pi )\n\t\tconst float ONE_OVER_FOURPI = 0.07957747154594767;\n\n\t\tfloat rayleighPhase( float cosTheta ) {\n\t\t\treturn THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );\n\t\t}\n\n\t\tfloat hgPhase( float cosTheta, float g ) {\n\t\t\tfloat g2 = pow( g, 2.0 );\n\t\t\tfloat inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );\n\t\t\treturn ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvec3 direction = normalize( vWorldPosition - cameraPos );\n\n\t\t\t// optical length\n\t\t\t// cutoff angle at 90 to avoid singularity in next formula.\n\t\t\tfloat zenithAngle = acos( max( 0.0, dot( up, direction ) ) );\n\t\t\tfloat inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );\n\t\t\tfloat sR = rayleighZenithLength * inverse;\n\t\t\tfloat sM = mieZenithLength * inverse;\n\n\t\t\t// combined extinction factor\n\t\t\tvec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );\n\n\t\t\t// in scattering\n\t\t\tfloat cosTheta = dot( direction, vSunDirection );\n\n\t\t\tfloat rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );\n\t\t\tvec3 betaRTheta = vBetaR * rPhase;\n\n\t\t\tfloat mPhase = hgPhase( cosTheta, mieDirectionalG );\n\t\t\tvec3 betaMTheta = vBetaM * mPhase;\n\n\t\t\tvec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );\n\t\t\tLin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );\n\n\t\t\t// nightsky\n\t\t\tfloat theta = acos( direction.y ); // elevation --\x3e y-axis, [-pi/2, pi/2]\n\t\t\tfloat phi = atan( direction.z, direction.x ); // azimuth --\x3e x-axis [-pi/2, pi/2]\n\t\t\tvec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );\n\t\t\tvec3 L0 = vec3( 0.1 ) * Fex;\n\n\t\t\t// composition + solar disc\n\t\t\tfloat sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );\n\t\t\tL0 += ( vSunE * 19000.0 * Fex ) * sundisk;\n\n\t\t\tvec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );\n\n\t\t\tvec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );\n\n\t\t\tgl_FragColor = vec4( retColor, 1.0 );\n\n\t\t\t#include <tonemapping_fragment>\n\t\t\t#include <encodings_fragment>\n\n\t\t}"};var y=n(292);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}var w=function(t){Object(c.a)(n,t);var e=m(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).sky=new v,t}return Object(o.a)(n,[{key:"init",value:function(){var t=this;this.sky.scale.setScalar(1e4),this.getSketch().getScene().add(this.sky);var e=function(){var e;for(var n in y.default.sky){var a=n;(null===(e=t.sky.material.uniforms[n])||void 0===e?void 0:e.value)&&(t.sky.material.uniforms[n].value=y.default.sky[a])}},n=function(){var e=Math.PI*(y.default.sun.inclination-.5),n=2*Math.PI*(y.default.sun.azimuth-.5),r=new d.Ob;r.x=Math.cos(n),r.y=Math.sin(n)*Math.sin(e),r.z=Math.sin(n)*Math.cos(e),t.sky.material.uniforms.sunPosition.value.copy(r)},r=this.getSketch().getGui().addFolder("Sky");r.add(y.default.sky,"turbidity",.1,30).onChange(e),r.add(y.default.sky,"rayleigh",.1,4).onChange(e),r.add(y.default.sky,"mieCoefficient",1e-4,.1).onChange(e),r.add(y.default.sky,"mieDirectionalG",0,1).onChange(e),r.add(y.default.sky,"luminance",0,2).onChange(e);var o=this.getSketch().getGui().addFolder("Sun");o.add(y.default.sun,"inclination",0,1).onChange(n),o.add(y.default.sun,"azimuth",0,1).onChange(n),e(),n()}},{key:"update",value:function(){}},{key:"destroy",value:function(){}}]),n}(f.a)},379:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return S}));n(139);var r=n(49),o=n(75),c=n(314),h=n(76),l=n(77),f=n(50),d=n(287),v=n(291),y=n(358),m=n(361),w=n(365);function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var S=function(t){Object(h.a)(n,t);var e=k(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"init",value:function(t){Object(c.a)(Object(f.a)(n.prototype),"init",this).call(this,t,"perspective");var e=new y.default,r=new m.default,o=new w.default;this.setEntity(e),this.setEntity(o),this.setEntity(r),this.getScene().background=new d.n(11184810);var h=this.getCamera();h.fov=60,h.aspect=t.width/t.height,h.near=.1,h.far=1e4,h.position.set(75,20,0),h.updateProjectionMatrix(),this.getControls().target.set(0,50,0),this.getControls().object.position.set(475,345,900),this.getControls().update(),this.isReadyToRender=!0}}]),n}(v.a)}}]);