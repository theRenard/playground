(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{340:function(r,n,t){var content=t(358);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[r.i,content,""]]),content.locals&&(r.exports=content.locals);(0,t(78).default)("2d8accb8",content,!0,{sourceMap:!1})},357:function(r,n,t){"use strict";t(340)},358:function(r,n,t){var e=t(77)((function(i){return i[1]}));e.push([r.i,"/*purgecss start ignore*/\n.hidden{\n  visibility:hidden\n}\nbutton{\n  cursor:pointer\n}\nbutton:focus{\n  outline:0\n}\n.burger-button{\n  position:relative;\n  height:30px;\n  width:32px;\n  display:block;\n  z-index:999;\n  border:0;\n  border-radius:0;\n  background-color:transparent;\n  pointer-events:all;\n  transition:transform .6s cubic-bezier(.165,.84,.44,1)\n}\n.burger-bar{\n  background-color:#fff;\n  position:absolute;\n  top:50%;\n  right:6px;\n  left:6px;\n  height:2px;\n  width:auto;\n  margin-top:-1px;\n  transition:transform .6s cubic-bezier(.165,.84,.44,1),opacity .3s cubic-bezier(.165,.84,.44,1),background-color .6s cubic-bezier(.165,.84,.44,1)\n}\n.burger-bar--1{\n  transform:translateY(-6px)\n}\n.burger-bar--2{\n  transform-origin:100% 50%;\n  transform:scaleX(.8)\n}\n.burger-button:hover .burger-bar--2,.no-touchevents .burger-bar--2:hover{\n  transform:scaleX(1)\n}\n.burger-bar--3{\n  transform:translateY(6px)\n}\n#burger.active .burger-button{\n  transform:rotate(-180deg)\n}\n#burger.active .burger-bar{\n  background-color:#fff\n}\n#burger.active .burger-bar--1{\n  transform:rotate(45deg)\n}\n#burger.active .burger-bar--2{\n  opacity:0\n}\n#burger.active .burger-bar--3{\n  transform:rotate(-45deg)\n}\n\n/*purgecss end ignore*/",""]),e.locals={},r.exports=e},379:function(r,n,t){"use strict";t.r(n);var e={computed:{isBurgerActive:function(){return this.$store.state.isNavOpen}},methods:{toggle:function(){this.$store.commit("toggleNav")}}},o=(t(357),t(18)),component=Object(o.a)(e,(function(){var r=this,n=r.$createElement;return(r._self._c||n)("div",{class:{active:r.isBurgerActive},attrs:{id:"burger"},on:{click:function(n){return n.preventDefault(),r.toggle.apply(null,arguments)}}},[r._t("default",(function(){return[r._m(0)]}))],2)}),[function(){var r=this,n=r.$createElement,t=r._self._c||n;return t("button",{staticClass:"burger-button",attrs:{type:"button",title:"Menu"}},[t("span",{staticClass:"hidden"},[r._v("Toggle menu")]),r._v(" "),t("span",{staticClass:"burger-bar burger-bar--1"}),r._v(" "),t("span",{staticClass:"burger-bar burger-bar--2"}),r._v(" "),t("span",{staticClass:"burger-bar burger-bar--3"})])}],!1,null,null,null);n.default=component.exports}}]);