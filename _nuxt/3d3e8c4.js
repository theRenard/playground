/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[43,4,36,37,38,39,40,42],{278:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(130),o=n(131),c=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,[{key:"setSketch",value:function(t){this.sketch=t}},{key:"getSketch",value:function(){return this.sketch}}]),t}()},282:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(130),o=n(131),c=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,null,[{key:"aspRatio",get:function(){return this.width/this.height}}]),t}();c.width=window.innerWidth,c.height=window.innerHeight},283:function(t,e,n){"use strict";n.d(e,"a",(function(){return x}));var r=n(130),o=n(131),c=(n(312),n(8),n(14),n(313),n(314),n(316),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(325),n(326),n(16),n(24),n(35),n(34),n(25),n(36),n(37),n(327)),f=n(273),h=n(328),l=n(282),d=n(329),v=n(330),y=n(331),m=n(332),w=new f.M;w.addHandler(/\.dds$/i,new v.a);var k=new m.a;k.setDecoderPath("/draco/");var O=new y.a;O.setDRACOLoader(k);var M=new d.a(w),R=new f.Jb(w);function S(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return j(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,f=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){f=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(f)throw o}}}}function j(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var x=function(){function t(){Object(r.a)(this,t),this.canvas=null,this.manager=w,this.objLoader=M,this.gltfLoader=O,this.textureLoader=R,this.clock=new f.m,this.gui=new c.a({width:300}),this.elapsedTime=0,this.debug=!1,this.isReadyToRender=!1,this.entities=new Map}return Object(o.a)(t,[{key:"init",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"perspective";this.canvas=t,this.cameraType=e,this.setRenderer(),this.setScene(),this.setCamera(),this.setControls(),this.resize=this.resize.bind(this),this.addResizeListener(),this.addInitialGui(),this.tick=this.tick.bind(this),this.tick()}},{key:"setEntity",value:function(t){t.setSketch(this),t.init(),this.entities.set(t.name,t)}},{key:"getLoaders",value:function(){return{manager:this.manager,objLoader:this.objLoader,gltfLoader:this.gltfLoader,textureLoader:this.textureLoader}}},{key:"getEntities",value:function(){return this.entities}},{key:"getScene",value:function(){return this.scene}},{key:"getCamera",value:function(){return this.camera}},{key:"getGui",value:function(){return this.gui}},{key:"showGui",value:function(){this.gui.show()}},{key:"setRenderer",value:function(){this.canvas&&(this.renderer=new f.Qb({canvas:this.canvas}),this.renderer.setSize(l.a.width,l.a.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor("#262837"),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=f.hb,this.renderer.outputEncoding=f.Rb)}},{key:"setCamera",value:function(){var t=new f.d(3);this.scene.add(t),"orthographic"===this.cameraType?this.camera=new f.gb(-3*l.a.aspRatio,3*l.a.aspRatio,3,-3,.1,100):this.camera=new f.ib(75,l.a.width/l.a.height,.1,2e3)}},{key:"setScene",value:function(){this.scene=new f.yb}},{key:"setControls",value:function(){this.canvas&&(this.controls=new h.a(this.camera,this.canvas),this.controls.enableDamping=!0)}},{key:"getControls",value:function(){return this.controls}},{key:"getEntityByName",value:function(t){return this.entities.get(t)||null}},{key:"resize",value:function(){l.a.width=window.innerWidth,l.a.height=window.innerHeight,this.camera instanceof f.gb?(this.camera.left=-1*l.a.aspRatio,this.camera.right=1*l.a.aspRatio,this.camera.top=1,this.camera.bottom=-1):this.camera.aspect=l.a.width/l.a.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(l.a.width,l.a.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}},{key:"addResizeListener",value:function(){window.addEventListener("resize",this.resize)}},{key:"removeResizeListener",value:function(){window.removeEventListener("resize",this.resize)}},{key:"update",value:function(t){var e,n=S(this.entities.values());try{for(n.s();!(e=n.n()).done;){e.value.update(t)}}catch(t){n.e(t)}finally{n.f()}}},{key:"destroyEntities",value:function(){var t,e=S(this.entities.values());try{for(e.s();!(t=e.n()).done;){t.value.destroy()}}catch(t){e.e(t)}finally{e.f()}}},{key:"tick",value:function(){this.elapsedTime=this.clock.getElapsedTime(),this.isReadyToRender&&this.update(this.elapsedTime),this.controls.update(),this.renderer.render(this.scene,this.camera),this.animationReq=window.requestAnimationFrame(this.tick)}},{key:"addInitialGui",value:function(){}},{key:"destroy",value:function(){this.gui.destroy(),this.destroyEntities(),this.removeResizeListener(),window.cancelAnimationFrame(this.animationReq)}}]),t}()},284:function(t,e,n){"use strict";n.r(e),e.default={noise:{octaves:10,persistence:.5,lacunarity:2,exponentiation:3.9,height:64,scale:256,noiseType:"simplex",seed:1},heightmap:{height:16},terrain:{wireframe:!1},sky:{turbidity:10,rayleigh:2,mieCoefficient:.005,mieDirectionalG:.8,luminance:1},sun:{inclination:.31,azimuth:.25}}},285:function(t,e,n){"use strict";e.a={rand_range:function(a,b){return Math.random()*(b-a)+a},rand_normalish:function(){return(Math.random()+Math.random()+Math.random()+Math.random())/4*2-1},rand_int:function(a,b){return Math.round(Math.random()*(b-a)+a)},lerp:function(t,a,b){return t*(b-a)+a},smoothstep:function(t,a,b){return(t=t*t*(3-2*t))*(b-a)+a},smootherstep:function(t,a,b){return(t=t*t*t*(t*(6*t-15)+10))*(b-a)+a},clamp:function(t,a,b){return Math.min(Math.max(t,a),b)},sat:function(t){return Math.min(Math.max(t,0),1)}}},333:function(t,e,n){"use strict";n.d(e,"a",(function(){return R})),n.d(e,"b",(function(){return r.a}));var r=n(1);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function h(){return"undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys}function l(t,e){d(t,e),Object.getOwnPropertyNames(e.prototype).forEach((function(n){d(t.prototype,e.prototype,n)})),Object.getOwnPropertyNames(e).forEach((function(n){d(t,e,n)}))}function d(t,e,n){(n?Reflect.getOwnMetadataKeys(e,n):Reflect.getOwnMetadataKeys(e)).forEach((function(r){var o=n?Reflect.getOwnMetadata(r,e,n):Reflect.getOwnMetadata(r,e);n?Reflect.defineMetadata(r,o,t,n):Reflect.defineMetadata(r,o,t)}))}var v={__proto__:[]}instanceof Array;function y(t,e){var n=e.prototype._init;e.prototype._init=function(){var e=this,n=Object.getOwnPropertyNames(t);if(t.$options.props)for(var r in t.$options.props)t.hasOwnProperty(r)||n.push(r);n.forEach((function(n){Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){t[n]=e},configurable:!0})}))};var data=new e;e.prototype._init=n;var r={};return Object.keys(data).forEach((function(t){void 0!==data[t]&&(r[t]=data[t])})),r}var m=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function w(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.name=e.name||t._componentTag||t.name;var n=t.prototype;Object.getOwnPropertyNames(n).forEach((function(t){if("constructor"!==t)if(m.indexOf(t)>-1)e[t]=n[t];else{var r=Object.getOwnPropertyDescriptor(n,t);void 0!==r.value?"function"==typeof r.value?(e.methods||(e.methods={}))[t]=r.value:(e.mixins||(e.mixins=[])).push({data:function(){return c({},t,r.value)}}):(r.get||r.set)&&((e.computed||(e.computed={}))[t]={get:r.get,set:r.set})}})),(e.mixins||(e.mixins=[])).push({data:function(){return y(this,t)}});var o=t.__decorators__;o&&(o.forEach((function(t){return t(e)})),delete t.__decorators__);var f=Object.getPrototypeOf(t.prototype),d=f instanceof r.a?f.constructor:r.a,v=d.extend(e);return O(v,t,d),h()&&l(v,t),v}var k={prototype:!0,arguments:!0,callee:!0,caller:!0};function O(t,e,n){Object.getOwnPropertyNames(e).forEach((function(r){if(!k[r]){var c=Object.getOwnPropertyDescriptor(t,r);if(!c||c.configurable){var f,h,l=Object.getOwnPropertyDescriptor(e,r);if(!v){if("cid"===r)return;var d=Object.getOwnPropertyDescriptor(n,r);if(f=l.value,h=o(f),null!=f&&("object"===h||"function"===h)&&d&&d.value===l.value)return}0,Object.defineProperty(t,r,l)}}}))}function M(t){return"function"==typeof t?w(t):function(e){return w(e,t)}}M.registerHooks=function(t){m.push.apply(m,f(t))};var R=M;"undefined"!=typeof Reflect&&Reflect.getMetadata},334:function(t,e,n){var r;n(287),n(8),n(335),n(288),n(289),n(290),n(291),n(292),n(293),n(294),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(308),n(309),n(310),n(311),n(73),function(){"use strict";var o=.5*(Math.sqrt(3)-1),c=(3-Math.sqrt(3))/6,f=1/6,h=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20;function d(t){var e;e="function"==typeof t?t:t?function(){var t=0,e=0,n=0,r=1,o=y();t=o(" "),e=o(" "),n=o(" ");for(var i=0;i<arguments.length;i++)(t-=o(arguments[i]))<0&&(t+=1),(e-=o(arguments[i]))<0&&(e+=1),(n-=o(arguments[i]))<0&&(n+=1);return o=null,function(){var o=2091639*t+2.3283064365386963e-10*r;return t=e,e=n,n=o-(r=0|o)}}(t):Math.random,this.p=v(e),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(var i=0;i<512;i++)this.perm[i]=this.p[255&i],this.permMod12[i]=this.perm[i]%12}function v(t){var i,p=new Uint8Array(256);for(i=0;i<256;i++)p[i]=i;for(i=0;i<255;i++){var e=i+~~(t()*(256-i)),n=p[i];p[i]=p[e],p[e]=n}return p}function y(){var t=4022871197;return function(data){data=data.toString();for(var i=0;i<data.length;i++){var e=.02519603282416938*(t+=data.charCodeAt(i));e-=t=e>>>0,t=(e*=t)>>>0,t+=4294967296*(e-=t)}return 2.3283064365386963e-10*(t>>>0)}}d.prototype={grad3:new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),grad4:new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]),noise2D:function(t,e){var n,r,f=this.permMod12,h=this.perm,l=this.grad3,d=0,v=0,y=0,s=(t+e)*o,i=Math.floor(t+s),m=Math.floor(e+s),w=(i+m)*c,k=t-(i-w),O=e-(m-w);k>O?(n=1,r=0):(n=0,r=1);var M=k-n+c,R=O-r+c,S=k-1+2*c,j=O-1+2*c,x=255&i,C=255&m,E=.5-k*k-O*O;if(E>=0){var P=3*f[x+h[C]];d=(E*=E)*E*(l[P]*k+l[P+1]*O)}var T=.5-M*M-R*R;if(T>=0){var A=3*f[x+n+h[C+r]];v=(T*=T)*T*(l[A]*M+l[A+1]*R)}var z=.5-S*S-j*j;if(z>=0){var _=3*f[x+1+h[C+1]];y=(z*=z)*z*(l[_]*S+l[_+1]*j)}return 70*(d+v+y)},noise3D:function(t,e,n){var r,o,c,h,l,d,v,y,m,w,k=this.permMod12,O=this.perm,M=this.grad3,s=.3333333333333333*(t+e+n),i=Math.floor(t+s),R=Math.floor(e+s),S=Math.floor(n+s),j=(i+R+S)*f,x=t-(i-j),C=e-(R-j),E=n-(S-j);x>=C?C>=E?(l=1,d=0,v=0,y=1,m=1,w=0):x>=E?(l=1,d=0,v=0,y=1,m=0,w=1):(l=0,d=0,v=1,y=1,m=0,w=1):C<E?(l=0,d=0,v=1,y=0,m=1,w=1):x<E?(l=0,d=1,v=0,y=0,m=1,w=1):(l=0,d=1,v=0,y=1,m=1,w=0);var P=x-l+f,T=C-d+f,A=E-v+f,z=x-y+2*f,_=C-m+2*f,D=E-w+2*f,L=x-1+.5,B=C-1+.5,G=E-1+.5,I=255&i,N=255&R,F=255&S,U=.6-x*x-C*C-E*E;if(U<0)r=0;else{var H=3*k[I+O[N+O[F]]];r=(U*=U)*U*(M[H]*x+M[H+1]*C+M[H+2]*E)}var K=.6-P*P-T*T-A*A;if(K<0)o=0;else{var W=3*k[I+l+O[N+d+O[F+v]]];o=(K*=K)*K*(M[W]*P+M[W+1]*T+M[W+2]*A)}var $=.6-z*z-_*_-D*D;if($<0)c=0;else{var V=3*k[I+y+O[N+m+O[F+w]]];c=($*=$)*$*(M[V]*z+M[V+1]*_+M[V+2]*D)}var Z=.6-L*L-B*B-G*G;if(Z<0)h=0;else{var J=3*k[I+1+O[N+1+O[F+1]]];h=(Z*=Z)*Z*(M[J]*L+M[J+1]*B+M[J+2]*G)}return 32*(r+o+c+h)},noise4D:function(t,e,n,r){var o,c,f,d,v,y,m,w,k,O,M,R,S,j,x,C,E,P=this.perm,T=this.grad4,s=(t+e+n+r)*h,i=Math.floor(t+s),A=Math.floor(e+s),z=Math.floor(n+s),_=Math.floor(r+s),D=(i+A+z+_)*l,L=t-(i-D),B=e-(A-D),G=n-(z-D),I=r-(_-D),N=0,F=0,U=0,H=0;L>B?N++:F++,L>G?N++:U++,L>I?N++:H++,B>G?F++:U++,B>I?F++:H++,G>I?U++:H++;var K=L-(y=N>=3?1:0)+l,W=B-(m=F>=3?1:0)+l,$=G-(w=U>=3?1:0)+l,V=I-(k=H>=3?1:0)+l,Z=L-(O=N>=2?1:0)+2*l,J=B-(M=F>=2?1:0)+2*l,X=G-(R=U>=2?1:0)+2*l,Q=I-(S=H>=2?1:0)+2*l,Y=L-(j=N>=1?1:0)+3*l,tt=B-(x=F>=1?1:0)+3*l,et=G-(C=U>=1?1:0)+3*l,nt=I-(E=H>=1?1:0)+3*l,it=L-1+4*l,at=B-1+4*l,ot=G-1+4*l,st=I-1+4*l,ct=255&i,ut=255&A,ft=255&z,ht=255&_,lt=.6-L*L-B*B-G*G-I*I;if(lt<0)o=0;else{var vt=P[ct+P[ut+P[ft+P[ht]]]]%32*4;o=(lt*=lt)*lt*(T[vt]*L+T[vt+1]*B+T[vt+2]*G+T[vt+3]*I)}var pt=.6-K*K-W*W-$*$-V*V;if(pt<0)c=0;else{var yt=P[ct+y+P[ut+m+P[ft+w+P[ht+k]]]]%32*4;c=(pt*=pt)*pt*(T[yt]*K+T[yt+1]*W+T[yt+2]*$+T[yt+3]*V)}var gt=.6-Z*Z-J*J-X*X-Q*Q;if(gt<0)f=0;else{var mt=P[ct+O+P[ut+M+P[ft+R+P[ht+S]]]]%32*4;f=(gt*=gt)*gt*(T[mt]*Z+T[mt+1]*J+T[mt+2]*X+T[mt+3]*Q)}var bt=.6-Y*Y-tt*tt-et*et-nt*nt;if(bt<0)d=0;else{var wt=P[ct+j+P[ut+x+P[ft+C+P[ht+E]]]]%32*4;d=(bt*=bt)*bt*(T[wt]*Y+T[wt+1]*tt+T[wt+2]*et+T[wt+3]*nt)}var kt=.6-it*it-at*at-ot*ot-st*st;if(kt<0)v=0;else{var Ot=P[ct+1+P[ut+1+P[ft+1+P[ht+1]]]]%32*4;v=(kt*=kt)*kt*(T[Ot]*it+T[Ot+1]*at+T[Ot+2]*ot+T[Ot+3]*st)}return 27*(o+c+f+d+v)}},d._buildPermutationTable=v,void 0===(r=function(){return d}.call(e,n,e,t))||(t.exports=r),e.SimplexNoise=d,t.exports=d}()},335:function(t,e,n){n(340)("Uint8",(function(t){return function(data,e,n){return t(this,data,e,n)}}))},336:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return h}));var r=n(130),o=n(131),c=n(285),f=n(273),h=function(){function t(e,n,o,c){Object(r.a)(this,t),this.position=n.clone(),this.radius=[o,c],this.generator=e}return Object(o.a)(t,[{key:"Get",value:function(t,e){var n=this.position.distanceTo(new f.Nb(t,e)),r=1-c.a.sat((n-this.radius[0])/(this.radius[1]-this.radius[0]));return r=r*r*(3-2*r),[this.generator.Get(t,e),r]}}]),t}()},337:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return l}));var r=n(130),o=n(131),c=(n(287),n(8),n(311),n(288),n(289),n(290),n(291),n(292),n(293),n(294),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(308),n(309),n(310),n(35),n(24),n(34),n(14),n(25),n(36),n(37),n(16),n(273));function f(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,f=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){f=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(f)throw o}}}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var l=function(){function t(e){var n=e.group,o=e.offset,c=e.scale,f=e.width,h=e.heightGenerators;Object(r.a)(this,t),this.group=n,this.offset=o,this.scale=c,this.width=f,this.heightGenerators=h,this.init()}return Object(o.a)(t,[{key:"init",value:function(){var t=new c.Ob(this.width*this.scale,0,this.width*this.scale);this.plane=new c.R(new c.jb(t.x,t.z,128,128),new c.Y({wireframe:!1,color:255,side:c.v})),this.plane.position.add(this.offset),this.plane.castShadow=!1,this.plane.receiveShadow=!0,this.group.add(this.plane),this.rebuild()}},{key:"rebuild",value:function(){var t=this.offset;console.log("rebuild terrain chunks");for(var e=this.plane.geometry.getAttribute("position"),n=new Float32Array(3*e.count),i=0;i<e.count;i+=1){var r,o=3*i,h=e.array[o+0],l=e.array[o+1],d=0,v=[],y=0,m=f(this.heightGenerators);try{for(m.s();!(r=m.n()).done;){var w=r.value;v.push(w.Get(h+t.x,l+t.y)),y+=v[v.length-1][1]}}catch(t){m.e(t)}finally{m.f()}if(y>0){var k,O=f(v);try{for(O.s();!(k=O.n()).done;){var M=k.value;d+=M[0]*M[1]/y}}catch(t){O.e(t)}finally{O.f()}}n[o+0]=h,n[o+1]=l,n[o+2]=d}var R=new c.i(n,3);this.plane.geometry.setAttribute("position",R),this.heightGenerators.length>1&&0===t.x&&t.y,this.plane.geometry.computeVertexNormals()}}]),t}()},338:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return C}));var r=n(130),o=n(131),c=n(334),f=n.n(c);function h(t){return t*t*t*(t*(6*t-15)+10)}function l(t,a,b){return a+t*(b-a)}var d=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180,151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];function v(t,e){var n=15&t,r=1+(7&n);return 8&n&&(r=-r),r*e}function y(t,e,n){var r=7&t,u=r<4?e:n,o=r<4?n:e;return(1&r?-u:u)+(2&r?-2*o:2*o)}function m(t,e,n,r){var o=15&t,u=o<8?e:n,c=o<4?n:12==o||14==o?e:r;return(1&o?-u:u)+(2&o?-c:c)}function w(t,e,n,r,o){var c=31&t,u=c<24?e:n,f=c<16?n:r,h=c<8?r:o;return(1&c?-u:u)+(2&c?-f:f)+(4&c?-h:h)}function k(t){var e,n,r,o;return o=(r=t-(e=Math.floor(t)))-1,n=e+1&255,e&=255,S(.188*l(h(r),v(d[e],r),v(d[n],o)))}function O(t,e){var n,r,o,c,f,v,m,w,s,k,O,M;return m=(f=t-(n=Math.floor(t)))-1,w=(v=e-(r=Math.floor(e)))-1,o=n+1&255,c=r+1&255,n&=255,r&=255,k=h(v),s=h(f),O=l(k,y(d[n+d[r]],f,v),y(d[n+d[c]],f,w)),M=l(k,y(d[o+d[r]],m,v),y(d[o+d[c]],m,w)),S(.507*l(s,O,M))}function M(t,e,n){var r,o,c,f,v,y,w,k,O,M,R,j,s,x,C,E,P,T,A;return M=(w=t-(r=Math.floor(t)))-1,R=(k=e-(o=Math.floor(e)))-1,j=(O=n-(v=Math.floor(n)))-1,c=r+1&255,f=o+1&255,y=v+1&255,r&=255,o&=255,v&=255,C=h(O),x=h(k),s=h(w),E=l(C,m(d[r+d[o+d[v]]],w,k,O),m(d[r+d[o+d[y]]],w,k,j)),P=l(C,m(d[r+d[f+d[v]]],w,R,O),m(d[r+d[f+d[y]]],w,R,j)),T=l(x,E,P),E=l(C,m(d[c+d[o+d[v]]],M,k,O),m(d[c+d[o+d[y]]],M,k,j)),P=l(C,m(d[c+d[f+d[v]]],M,R,O),m(d[c+d[f+d[y]]],M,R,j)),A=l(x,E,P),S(.936*l(s,T,A))}function R(t,e,n,r){var o,c,f,v,y,m,k,O,M,R,j,x,C,E,P,T,s,A,z,q,_,D,L,B,G,I;return C=(M=t-(o=Math.floor(t)))-1,E=(R=e-(c=Math.floor(e)))-1,P=(j=n-(f=Math.floor(n)))-1,T=(x=r-(v=Math.floor(r)))-1,y=o+1&255,m=c+1&255,k=f+1&255,O=v+1&255,o&=255,c&=255,f&=255,v&=255,q=h(x),z=h(j),A=h(R),s=h(M),_=l(q,w(d[o+d[c+d[f+d[v]]]],M,R,j,x),w(d[o+d[c+d[f+d[O]]]],M,R,j,T)),D=l(q,w(d[o+d[c+d[k+d[v]]]],M,R,P,x),w(d[o+d[c+d[k+d[O]]]],M,R,P,T)),L=l(z,_,D),_=l(q,w(d[o+d[m+d[f+d[v]]]],M,E,j,x),w(d[o+d[m+d[f+d[O]]]],M,E,j,T)),D=l(q,w(d[o+d[m+d[k+d[v]]]],M,E,P,x),w(d[o+d[m+d[k+d[O]]]],M,E,P,T)),B=l(z,_,D),G=l(A,L,B),_=l(q,w(d[y+d[c+d[f+d[v]]]],C,R,j,x),w(d[y+d[c+d[f+d[O]]]],C,R,j,T)),D=l(q,w(d[y+d[c+d[k+d[v]]]],C,R,P,x),w(d[y+d[c+d[k+d[O]]]],C,R,P,T)),L=l(z,_,D),_=l(q,w(d[y+d[m+d[f+d[v]]]],C,E,j,x),w(d[y+d[m+d[f+d[O]]]],C,E,j,T)),D=l(q,w(d[y+d[m+d[k+d[v]]]],C,E,P,x),w(d[y+d[m+d[k+d[O]]]],C,E,P,T)),B=l(z,_,D),I=l(A,L,B),S(.87*l(s,G,I))}function S(t){return(1+t)/2}var j=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,[{key:"noise2D",value:function(t,e){return 2*function(t,e,n,r){switch(arguments.length){case 1:return k(t);case 2:return O(t,e);case 3:return M(t,e,n);case 3:return R(t,e,n,r)}}(t,e)-1}}]),t}(),x=n(284).default.noise,C=function(){function t(){Object(r.a)(this,t),this.noise={simplex:new f.a(x.seed),perlin:new j}}return Object(o.a)(t,[{key:"Get",value:function(t,e){for(var n=t/x.scale,r=e/x.scale,o=this.noise[x.noiseType],c=1,f=1,h=0,l=0,d=0;d<x.octaves;d+=1){l+=(.5*o.noise2D(n*f,r*f)+.5)*c,h+=c,c*=x.persistence,f*=x.lacunarity}return l/=h,Math.pow(l,x.exponentiation)*x.height}}]),t}()},339:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return l}));var r=n(130),o=n(131),c=n(285),f=n(273),h=n(284).default.noise,l=function(){function t(img){Object(r.a)(this,t),this.data=function(image){var canvas=document.createElement("canvas");canvas.width=image.width,canvas.height=image.height;var t=canvas.getContext("2d");return t.drawImage(image,0,0),t.getImageData(0,0,image.width,image.height)}(img)}return Object(o.a)(t,[{key:"Get",value:function(t,e){var n=this,r=function(a,b){var t=4*(a+n.data.width*b);return n.data.data[t]/255},o=new f.Nb(-250,-250),l=new f.Nb(500,500),d=1-c.a.sat((t-o.x)/l.x),v=c.a.sat((e-o.y)/l.y),y=this.data.width-1,m=this.data.height-1,w=Math.floor(d*y),k=Math.floor(v*m),O=c.a.clamp(w+1,0,y),M=c.a.clamp(k+1,0,m),R=d*y-w,S=v*m-k,j=r(w,k),x=r(O,k),C=r(w,M),E=r(O,M),P=c.a.lerp(R,j,x),T=c.a.lerp(R,C,E);return c.a.lerp(S,P,T)*h.height}}]),t}()},353:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return O}));n(275);var r=n(130),o=n(131),c=n(276),f=n(277),h=n(274),l=(n(60),n(273)),d=n(338),v=n(336),y=n(284),m=n(339),w=n(337);function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var O=function(t){Object(c.a)(n,t);var e=k(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).chunkSize=500,t}return Object(o.a)(n,[{key:"init",value:function(){this.initNoise(),this.initTerrain()}},{key:"initNoise",value:function(){var t=this,e=function(){for(var e in t.terrainChunks)t.terrainChunks[e].chunk.rebuild()},n=this.getSketch().getGui().addFolder("Terrain.Noise");n.add(y.default.noise,"noiseType",["simplex","perlin"]).onChange(e),n.add(y.default.noise,"scale",64,1024).onChange(e),n.add(y.default.noise,"octaves",1,20,1).onChange(e),n.add(y.default.noise,"persistence",.01,1).onChange(e),n.add(y.default.noise,"lacunarity",.01,4).onChange(e),n.add(y.default.noise,"exponentiation",.1,10).onChange(e),n.add(y.default.noise,"height",0,256).onChange(e),this.noise=new d.default,this.getSketch().getGui().addFolder("Terrain.Heightmap").add(y.default.heightmap,"height",0,128).onChange(e)}},{key:"initTerrain",value:function(){var t=this;this.group=new l.w,this.group.rotation.x=-Math.PI/2,this.getSketch().getScene().add(this.group),this.getSketch().getGui().addFolder("Terrain").add(y.default.terrain,"wireframe").onChange((function(){for(var e in t.terrainChunks)t.terrainChunks[e].chunk.plane.material.wireframe=y.default.terrain.wireframe})),this.terrainChunks={};for(var e=-1;e<=1;e+=1)for(var n=-1;n<=1;n+=1)this.addChunk(e,n)}},{key:"key",value:function(t,e){return"".concat(t,".").concat(e)}},{key:"addChunk",value:function(t,e){for(var n=new l.Nb(t*this.chunkSize,e*this.chunkSize),r=new w.default({group:this.group,offset:new l.Ob(n.x,n.y,0),scale:1,width:this.chunkSize,heightGenerators:[new v.default(this.noise,n,1e5,100001)]}),o=this.key(t,e),c=[],f=-1;f<=1;f+=1)for(var h=-1;h<=1;h+=1)0!==f&&0!==h&&c.push(this.key(t+f,e+h));this.terrainChunks[o]={chunk:r,edges:c}}},{key:"setHeightMap",value:function(img){var t=new v.default(new m.default(img),new l.Nb(0,0),250,300);for(var e in this.terrainChunks)this.terrainChunks[e].chunk.heightGenerators.unshift(t),this.terrainChunks[e].chunk.rebuild()}},{key:"update",value:function(){}},{key:"destroy",value:function(){}}]),n}(n(278).a)},356:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return y}));n(275);var r=n(130),o=n(131),c=n(276),f=n(277),h=n(274),l=(n(24),n(278)),d=n(273);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var y=function(t){Object(c.a)(n,t);var e=v(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).name="Lights",t}return Object(o.a)(n,[{key:"init",value:function(){this.lightOne=new d.p(8421504,100),this.lightOne.position.set(-100,100,-100),this.lightOne.target.position.set(0,0,0),this.lightOne.castShadow=!1,this.getSketch().getScene().add(this.lightOne),this.lightTwo=new d.p(4210752,100),this.lightTwo.position.set(100,100,-100),this.lightTwo.target.position.set(0,0,0),this.lightTwo.castShadow=!1,this.getSketch().getScene().add(this.lightTwo)}},{key:"update",value:function(){}},{key:"destroy",value:function(){this.getSketch().getScene().remove(this.lightOne),this.getSketch().getScene().remove(this.lightTwo),console.log("removed lights")}}]),n}(l.a)},360:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return w}));n(275);var r=n(130),o=n(131),c=n(276),f=n(277),h=n(274),l=n(278),d=n(273);class v extends d.R{constructor(){const t=v.SkyShader,e=new d.zb({name:"SkyShader",fragmentShader:t.fragmentShader,vertexShader:t.vertexShader,uniforms:d.Mb.clone(t.uniforms),side:d.e,depthWrite:!1});super(new d.h(1,1,1),e)}}v.prototype.isSky=!0,v.SkyShader={uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new d.Ob},up:{value:new d.Ob(0,1,0)}},vertexShader:"\n\t\tuniform vec3 sunPosition;\n\t\tuniform float rayleigh;\n\t\tuniform float turbidity;\n\t\tuniform float mieCoefficient;\n\t\tuniform vec3 up;\n\n\t\tvarying vec3 vWorldPosition;\n\t\tvarying vec3 vSunDirection;\n\t\tvarying float vSunfade;\n\t\tvarying vec3 vBetaR;\n\t\tvarying vec3 vBetaM;\n\t\tvarying float vSunE;\n\n\t\t// constants for atmospheric scattering\n\t\tconst float e = 2.71828182845904523536028747135266249775724709369995957;\n\t\tconst float pi = 3.141592653589793238462643383279502884197169;\n\n\t\t// wavelength of used primaries, according to preetham\n\t\tconst vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );\n\t\t// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:\n\t\t// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))\n\t\tconst vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );\n\n\t\t// mie stuff\n\t\t// K coefficient for the primaries\n\t\tconst float v = 4.0;\n\t\tconst vec3 K = vec3( 0.686, 0.678, 0.666 );\n\t\t// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K\n\t\tconst vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );\n\n\t\t// earth shadow hack\n\t\t// cutoffAngle = pi / 1.95;\n\t\tconst float cutoffAngle = 1.6110731556870734;\n\t\tconst float steepness = 1.5;\n\t\tconst float EE = 1000.0;\n\n\t\tfloat sunIntensity( float zenithAngleCos ) {\n\t\t\tzenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );\n\t\t\treturn EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );\n\t\t}\n\n\t\tvec3 totalMie( float T ) {\n\t\t\tfloat c = ( 0.2 * T ) * 10E-18;\n\t\t\treturn 0.434 * c * MieConst;\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\t\t\tvWorldPosition = worldPosition.xyz;\n\n\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\tgl_Position.z = gl_Position.w; // set z to camera.far\n\n\t\t\tvSunDirection = normalize( sunPosition );\n\n\t\t\tvSunE = sunIntensity( dot( vSunDirection, up ) );\n\n\t\t\tvSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );\n\n\t\t\tfloat rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );\n\n\t\t\t// extinction (absorbtion + out scattering)\n\t\t\t// rayleigh coefficients\n\t\t\tvBetaR = totalRayleigh * rayleighCoefficient;\n\n\t\t\t// mie coefficients\n\t\t\tvBetaM = totalMie( turbidity ) * mieCoefficient;\n\n\t\t}",fragmentShader:"\n\t\tvarying vec3 vWorldPosition;\n\t\tvarying vec3 vSunDirection;\n\t\tvarying float vSunfade;\n\t\tvarying vec3 vBetaR;\n\t\tvarying vec3 vBetaM;\n\t\tvarying float vSunE;\n\n\t\tuniform float mieDirectionalG;\n\t\tuniform vec3 up;\n\n\t\tconst vec3 cameraPos = vec3( 0.0, 0.0, 0.0 );\n\n\t\t// constants for atmospheric scattering\n\t\tconst float pi = 3.141592653589793238462643383279502884197169;\n\n\t\tconst float n = 1.0003; // refractive index of air\n\t\tconst float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)\n\n\t\t// optical length at zenith for molecules\n\t\tconst float rayleighZenithLength = 8.4E3;\n\t\tconst float mieZenithLength = 1.25E3;\n\t\t// 66 arc seconds -> degrees, and the cosine of that\n\t\tconst float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;\n\n\t\t// 3.0 / ( 16.0 * pi )\n\t\tconst float THREE_OVER_SIXTEENPI = 0.05968310365946075;\n\t\t// 1.0 / ( 4.0 * pi )\n\t\tconst float ONE_OVER_FOURPI = 0.07957747154594767;\n\n\t\tfloat rayleighPhase( float cosTheta ) {\n\t\t\treturn THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );\n\t\t}\n\n\t\tfloat hgPhase( float cosTheta, float g ) {\n\t\t\tfloat g2 = pow( g, 2.0 );\n\t\t\tfloat inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );\n\t\t\treturn ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvec3 direction = normalize( vWorldPosition - cameraPos );\n\n\t\t\t// optical length\n\t\t\t// cutoff angle at 90 to avoid singularity in next formula.\n\t\t\tfloat zenithAngle = acos( max( 0.0, dot( up, direction ) ) );\n\t\t\tfloat inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );\n\t\t\tfloat sR = rayleighZenithLength * inverse;\n\t\t\tfloat sM = mieZenithLength * inverse;\n\n\t\t\t// combined extinction factor\n\t\t\tvec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );\n\n\t\t\t// in scattering\n\t\t\tfloat cosTheta = dot( direction, vSunDirection );\n\n\t\t\tfloat rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );\n\t\t\tvec3 betaRTheta = vBetaR * rPhase;\n\n\t\t\tfloat mPhase = hgPhase( cosTheta, mieDirectionalG );\n\t\t\tvec3 betaMTheta = vBetaM * mPhase;\n\n\t\t\tvec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );\n\t\t\tLin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );\n\n\t\t\t// nightsky\n\t\t\tfloat theta = acos( direction.y ); // elevation --\x3e y-axis, [-pi/2, pi/2]\n\t\t\tfloat phi = atan( direction.z, direction.x ); // azimuth --\x3e x-axis [-pi/2, pi/2]\n\t\t\tvec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );\n\t\t\tvec3 L0 = vec3( 0.1 ) * Fex;\n\n\t\t\t// composition + solar disc\n\t\t\tfloat sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );\n\t\t\tL0 += ( vSunE * 19000.0 * Fex ) * sundisk;\n\n\t\t\tvec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );\n\n\t\t\tvec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );\n\n\t\t\tgl_FragColor = vec4( retColor, 1.0 );\n\n\t\t\t#include <tonemapping_fragment>\n\t\t\t#include <encodings_fragment>\n\n\t\t}"};var y=n(284);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var w=function(t){Object(c.a)(n,t);var e=m(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).sky=new v,t}return Object(o.a)(n,[{key:"init",value:function(){var t=this;this.sky.scale.setScalar(1e4),this.getSketch().getScene().add(this.sky);var e=function(){var e;for(var n in y.default.sky){var a=n;(null===(e=t.sky.material.uniforms[n])||void 0===e?void 0:e.value)&&(t.sky.material.uniforms[n].value=y.default.sky[a])}},n=function(){var e=Math.PI*(y.default.sun.inclination-.5),n=2*Math.PI*(y.default.sun.azimuth-.5),r=new d.Ob;r.x=Math.cos(n),r.y=Math.sin(n)*Math.sin(e),r.z=Math.sin(n)*Math.cos(e),t.sky.material.uniforms.sunPosition.value.copy(r)},r=this.getSketch().getGui().addFolder("Sky");r.add(y.default.sky,"turbidity",.1,30).onChange(e),r.add(y.default.sky,"rayleigh",.1,4).onChange(e),r.add(y.default.sky,"mieCoefficient",1e-4,.1).onChange(e),r.add(y.default.sky,"mieDirectionalG",0,1).onChange(e),r.add(y.default.sky,"luminance",0,2).onChange(e);var o=this.getSketch().getGui().addFolder("Sun");o.add(y.default.sun,"inclination",0,1).onChange(n),o.add(y.default.sun,"azimuth",0,1).onChange(n),e(),n()}},{key:"update",value:function(){}},{key:"destroy",value:function(){}}]),n}(l.a)},371:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return O}));n(275);var r=n(130),o=n(131),c=n(286),f=n(276),h=n(277),l=n(274),d=n(273),v=n(283),y=n(353),m=n(356),w=n(360);function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}var O=function(t){Object(f.a)(n,t);var e=k(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"init",value:function(t){Object(c.a)(Object(l.a)(n.prototype),"init",this).call(this,t,"perspective");var e=new y.default,r=new m.default,o=new w.default;this.setEntity(e),this.setEntity(o),this.setEntity(r),this.getScene().background=new d.n(11184810);var f=this.getCamera();f.fov=60,f.aspect=t.width/t.height,f.near=.1,f.far=1e4,f.position.set(75,20,0),f.updateProjectionMatrix(),this.getControls().target.set(0,50,0),this.getControls().object.position.set(475,345,900),this.getControls().update(),this.isReadyToRender=!0}}]),n}(v.a)},419:function(t,e,n){"use strict";n.r(e);n(275);var r=n(130),o=n(131),c=n(276),f=n(277),h=n(274),l=n(13),d=(n(46),n(333)),v=n(371);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},w=function(t){Object(c.a)(n,t);var e=y(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"mounted",value:function(){this.sketch=new v.default,this.sketch.init(this.$el)}},{key:"beforeDestroy",value:function(){this.sketch.destroy()}}]),n}(d.b),k=w=m([d.a],w),O=n(38),component=Object(O.a)(k,(function(){var t=this.$createElement;return(this._self._c||t)("canvas")}),[],!1,null,null,null);e.default=component.exports}}]);