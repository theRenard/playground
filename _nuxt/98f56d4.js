(window.webpackJsonp=window.webpackJsonp||[]).push([[36,39],{284:function(r,t,n){"use strict";n.r(t),t.default={noise:{octaves:10,persistence:.5,lacunarity:2,exponentiation:3.9,height:64,scale:256,noiseType:"simplex",seed:1},heightmap:{height:16},terrain:{wireframe:!1},sky:{turbidity:10,rayleigh:2,mieCoefficient:.005,mieDirectionalG:.8,luminance:1},sun:{inclination:.31,azimuth:.25}}},334:function(r,t,n){var e;n(287),n(8),n(335),n(288),n(289),n(290),n(291),n(292),n(293),n(294),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(308),n(309),n(310),n(311),n(73),function(){"use strict";var o=.5*(Math.sqrt(3)-1),f=(3-Math.sqrt(3))/6,c=1/6,h=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20;function v(r){var t;t="function"==typeof r?r:r?function(){var r=0,t=0,n=0,e=1,o=d();r=o(" "),t=o(" "),n=o(" ");for(var i=0;i<arguments.length;i++)(r-=o(arguments[i]))<0&&(r+=1),(t-=o(arguments[i]))<0&&(t+=1),(n-=o(arguments[i]))<0&&(n+=1);return o=null,function(){var o=2091639*r+2.3283064365386963e-10*e;return r=t,t=n,n=o-(e=0|o)}}(r):Math.random,this.p=M(t),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(var i=0;i<512;i++)this.perm[i]=this.p[255&i],this.permMod12[i]=this.perm[i]%12}function M(r){var i,p=new Uint8Array(256);for(i=0;i<256;i++)p[i]=i;for(i=0;i<255;i++){var t=i+~~(r()*(256-i)),n=p[i];p[i]=p[t],p[t]=n}return p}function d(){var r=4022871197;return function(data){data=data.toString();for(var i=0;i<data.length;i++){var t=.02519603282416938*(r+=data.charCodeAt(i));t-=r=t>>>0,r=(t*=r)>>>0,r+=4294967296*(t-=r)}return 2.3283064365386963e-10*(r>>>0)}}v.prototype={grad3:new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),grad4:new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]),noise2D:function(r,t){var n,e,c=this.permMod12,h=this.perm,l=this.grad3,v=0,M=0,d=0,s=(r+t)*o,i=Math.floor(r+s),m=Math.floor(t+s),w=(i+m)*f,y=r-(i-w),x=t-(m-w);y>x?(n=1,e=0):(n=0,e=1);var A=y-n+f,D=x-e+f,k=y-1+2*f,j=x-1+2*f,O=255&i,U=255&m,T=.5-y*y-x*x;if(T>=0){var C=3*c[O+h[U]];v=(T*=T)*T*(l[C]*y+l[C+1]*x)}var F=.5-A*A-D*D;if(F>=0){var G=3*c[O+n+h[U+e]];M=(F*=F)*F*(l[G]*A+l[G+1]*D)}var J=.5-k*k-j*j;if(J>=0){var S=3*c[O+1+h[U+1]];d=(J*=J)*J*(l[S]*k+l[S+1]*j)}return 70*(v+M+d)},noise3D:function(r,t,n){var e,o,f,h,l,v,M,d,m,w,y=this.permMod12,x=this.perm,A=this.grad3,s=.3333333333333333*(r+t+n),i=Math.floor(r+s),D=Math.floor(t+s),k=Math.floor(n+s),j=(i+D+k)*c,O=r-(i-j),U=t-(D-j),T=n-(k-j);O>=U?U>=T?(l=1,v=0,M=0,d=1,m=1,w=0):O>=T?(l=1,v=0,M=0,d=1,m=0,w=1):(l=0,v=0,M=1,d=1,m=0,w=1):U<T?(l=0,v=0,M=1,d=0,m=1,w=1):O<T?(l=0,v=1,M=0,d=0,m=1,w=1):(l=0,v=1,M=0,d=1,m=1,w=0);var C=O-l+c,F=U-v+c,G=T-M+c,J=O-d+2*c,S=U-m+2*c,z=T-w+2*c,N=O-1+.5,P=U-1+.5,_=T-1+.5,B=255&i,E=255&D,H=255&k,I=.6-O*O-U*U-T*T;if(I<0)e=0;else{var K=3*y[B+x[E+x[H]]];e=(I*=I)*I*(A[K]*O+A[K+1]*U+A[K+2]*T)}var L=.6-C*C-F*F-G*G;if(L<0)o=0;else{var Q=3*y[B+l+x[E+v+x[H+M]]];o=(L*=L)*L*(A[Q]*C+A[Q+1]*F+A[Q+2]*G)}var R=.6-J*J-S*S-z*z;if(R<0)f=0;else{var V=3*y[B+d+x[E+m+x[H+w]]];f=(R*=R)*R*(A[V]*J+A[V+1]*S+A[V+2]*z)}var W=.6-N*N-P*P-_*_;if(W<0)h=0;else{var X=3*y[B+1+x[E+1+x[H+1]]];h=(W*=W)*W*(A[X]*N+A[X+1]*P+A[X+2]*_)}return 32*(e+o+f+h)},noise4D:function(r,t,n,e){var o,f,c,v,M,d,m,w,y,x,A,D,k,j,O,U,T,C=this.perm,F=this.grad4,s=(r+t+n+e)*h,i=Math.floor(r+s),G=Math.floor(t+s),J=Math.floor(n+s),S=Math.floor(e+s),z=(i+G+J+S)*l,N=r-(i-z),P=t-(G-z),_=n-(J-z),B=e-(S-z),E=0,H=0,I=0,K=0;N>P?E++:H++,N>_?E++:I++,N>B?E++:K++,P>_?H++:I++,P>B?H++:K++,_>B?I++:K++;var L=N-(d=E>=3?1:0)+l,Q=P-(m=H>=3?1:0)+l,R=_-(w=I>=3?1:0)+l,V=B-(y=K>=3?1:0)+l,W=N-(x=E>=2?1:0)+2*l,X=P-(A=H>=2?1:0)+2*l,Y=_-(D=I>=2?1:0)+2*l,Z=B-(k=K>=2?1:0)+2*l,$=N-(j=E>=1?1:0)+3*l,rr=P-(O=H>=1?1:0)+3*l,nr=_-(U=I>=1?1:0)+3*l,er=B-(T=K>=1?1:0)+3*l,ar=N-1+4*l,ir=P-1+4*l,or=_-1+4*l,ur=B-1+4*l,fr=255&i,sr=255&G,cr=255&J,lr=255&S,vr=.6-N*N-P*P-_*_-B*B;if(vr<0)o=0;else{var pr=C[fr+C[sr+C[cr+C[lr]]]]%32*4;o=(vr*=vr)*vr*(F[pr]*N+F[pr+1]*P+F[pr+2]*_+F[pr+3]*B)}var Mr=.6-L*L-Q*Q-R*R-V*V;if(Mr<0)f=0;else{var dr=C[fr+d+C[sr+m+C[cr+w+C[lr+y]]]]%32*4;f=(Mr*=Mr)*Mr*(F[dr]*L+F[dr+1]*Q+F[dr+2]*R+F[dr+3]*V)}var mr=.6-W*W-X*X-Y*Y-Z*Z;if(mr<0)c=0;else{var wr=C[fr+x+C[sr+A+C[cr+D+C[lr+k]]]]%32*4;c=(mr*=mr)*mr*(F[wr]*W+F[wr+1]*X+F[wr+2]*Y+F[wr+3]*Z)}var yr=.6-$*$-rr*rr-nr*nr-er*er;if(yr<0)v=0;else{var gr=C[fr+j+C[sr+O+C[cr+U+C[lr+T]]]]%32*4;v=(yr*=yr)*yr*(F[gr]*$+F[gr+1]*rr+F[gr+2]*nr+F[gr+3]*er)}var xr=.6-ar*ar-ir*ir-or*or-ur*ur;if(xr<0)M=0;else{var Ar=C[fr+1+C[sr+1+C[cr+1+C[lr+1]]]]%32*4;M=(xr*=xr)*xr*(F[Ar]*ar+F[Ar+1]*ir+F[Ar+2]*or+F[Ar+3]*ur)}return 27*(o+f+c+v+M)}},v._buildPermutationTable=M,void 0===(e=function(){return v}.call(t,n,t,r))||(r.exports=e),t.SimplexNoise=v,r.exports=v}()},335:function(r,t,n){n(340)("Uint8",(function(r){return function(data,t,n){return r(this,data,t,n)}}))},338:function(r,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return U}));var e=n(130),o=n(131),f=n(334),c=n.n(f);function h(r){return r*r*r*(r*(6*r-15)+10)}function l(r,a,b){return a+r*(b-a)}var v=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180,151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];function M(r,t){var n=15&r,e=1+(7&n);return 8&n&&(e=-e),e*t}function d(r,t,n){var e=7&r,u=e<4?t:n,o=e<4?n:t;return(1&e?-u:u)+(2&e?-2*o:2*o)}function m(r,t,n,e){var o=15&r,u=o<8?t:n,f=o<4?n:12==o||14==o?t:e;return(1&o?-u:u)+(2&o?-f:f)}function w(r,t,n,e,o){var f=31&r,u=f<24?t:n,c=f<16?n:e,h=f<8?e:o;return(1&f?-u:u)+(2&f?-c:c)+(4&f?-h:h)}function y(r){var t,n,e,o;return o=(e=r-(t=Math.floor(r)))-1,n=t+1&255,t&=255,k(.188*l(h(e),M(v[t],e),M(v[n],o)))}function x(r,t){var n,e,o,f,c,M,m,w,s,y,x,A;return m=(c=r-(n=Math.floor(r)))-1,w=(M=t-(e=Math.floor(t)))-1,o=n+1&255,f=e+1&255,n&=255,e&=255,y=h(M),s=h(c),x=l(y,d(v[n+v[e]],c,M),d(v[n+v[f]],c,w)),A=l(y,d(v[o+v[e]],m,M),d(v[o+v[f]],m,w)),k(.507*l(s,x,A))}function A(r,t,n){var e,o,f,c,M,d,w,y,x,A,D,j,s,O,U,T,C,F,G;return A=(w=r-(e=Math.floor(r)))-1,D=(y=t-(o=Math.floor(t)))-1,j=(x=n-(M=Math.floor(n)))-1,f=e+1&255,c=o+1&255,d=M+1&255,e&=255,o&=255,M&=255,U=h(x),O=h(y),s=h(w),T=l(U,m(v[e+v[o+v[M]]],w,y,x),m(v[e+v[o+v[d]]],w,y,j)),C=l(U,m(v[e+v[c+v[M]]],w,D,x),m(v[e+v[c+v[d]]],w,D,j)),F=l(O,T,C),T=l(U,m(v[f+v[o+v[M]]],A,y,x),m(v[f+v[o+v[d]]],A,y,j)),C=l(U,m(v[f+v[c+v[M]]],A,D,x),m(v[f+v[c+v[d]]],A,D,j)),G=l(O,T,C),k(.936*l(s,F,G))}function D(r,t,n,e){var o,f,c,M,d,m,y,x,A,D,j,O,U,T,C,F,s,G,J,q,S,z,N,P,_,B;return U=(A=r-(o=Math.floor(r)))-1,T=(D=t-(f=Math.floor(t)))-1,C=(j=n-(c=Math.floor(n)))-1,F=(O=e-(M=Math.floor(e)))-1,d=o+1&255,m=f+1&255,y=c+1&255,x=M+1&255,o&=255,f&=255,c&=255,M&=255,q=h(O),J=h(j),G=h(D),s=h(A),S=l(q,w(v[o+v[f+v[c+v[M]]]],A,D,j,O),w(v[o+v[f+v[c+v[x]]]],A,D,j,F)),z=l(q,w(v[o+v[f+v[y+v[M]]]],A,D,C,O),w(v[o+v[f+v[y+v[x]]]],A,D,C,F)),N=l(J,S,z),S=l(q,w(v[o+v[m+v[c+v[M]]]],A,T,j,O),w(v[o+v[m+v[c+v[x]]]],A,T,j,F)),z=l(q,w(v[o+v[m+v[y+v[M]]]],A,T,C,O),w(v[o+v[m+v[y+v[x]]]],A,T,C,F)),P=l(J,S,z),_=l(G,N,P),S=l(q,w(v[d+v[f+v[c+v[M]]]],U,D,j,O),w(v[d+v[f+v[c+v[x]]]],U,D,j,F)),z=l(q,w(v[d+v[f+v[y+v[M]]]],U,D,C,O),w(v[d+v[f+v[y+v[x]]]],U,D,C,F)),N=l(J,S,z),S=l(q,w(v[d+v[m+v[c+v[M]]]],U,T,j,O),w(v[d+v[m+v[c+v[x]]]],U,T,j,F)),z=l(q,w(v[d+v[m+v[y+v[M]]]],U,T,C,O),w(v[d+v[m+v[y+v[x]]]],U,T,C,F)),P=l(J,S,z),B=l(G,N,P),k(.87*l(s,_,B))}function k(r){return(1+r)/2}var j=function(){function r(){Object(e.a)(this,r)}return Object(o.a)(r,[{key:"noise2D",value:function(r,t){return 2*function(r,t,n,e){switch(arguments.length){case 1:return y(r);case 2:return x(r,t);case 3:return A(r,t,n);case 3:return D(r,t,n,e)}}(r,t)-1}}]),r}(),O=n(284).default.noise,U=function(){function r(){Object(e.a)(this,r),this.noise={simplex:new c.a(O.seed),perlin:new j}}return Object(o.a)(r,[{key:"Get",value:function(r,t){for(var n=r/O.scale,e=t/O.scale,o=this.noise[O.noiseType],f=1,c=1,h=0,l=0,v=0;v<O.octaves;v+=1){l+=(.5*o.noise2D(n*c,e*c)+.5)*f,h+=f,f*=O.persistence,c*=O.lacunarity}return l/=h,Math.pow(l,O.exponentiation)*O.height}}]),r}()}}]);