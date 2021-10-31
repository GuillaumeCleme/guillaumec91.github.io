(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{235:function(t,e,n){"use strict";n.r(e);n(41);var r={name:"SlopeSeparator",props:{direction:{type:String,validator:function(t){return["asc","desc"].includes(t)}},fillColor:String}},o=n(32),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{name:"slopeseparator"}},["asc"==this.direction?e("div",{staticClass:"-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute",staticStyle:{height:"80px",transform:"translateZ(0)"}},[e("svg",{staticClass:"absolute bottom-0 overflow-hidden",attrs:{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0"}},[e("polygon",{staticClass:"fill-current",class:this.fillColor,attrs:{points:"2560 0 2560 100 0 100"}})])]):this._e(),this._v(" "),"desc"==this.direction?e("div",{staticClass:"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20",staticStyle:{height:"80px",transform:"translateZ(0px)"}},[e("svg",{staticClass:"absolute bottom-0 overflow-hidden",attrs:{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0"}},[e("polygon",{staticClass:"fill-current",class:this.fillColor,attrs:{points:"2560 0 2560 100 0 100"}})])]):this._e()])}),[],!1,null,null,null);e.default=component.exports},236:function(t,e,n){"use strict";n.r(e);var r={name:"NavBar",components:{NavLink:n(242).default},data:function(){return{open:!1,navLinks:[{href:"/#aboutme",label:"About Me",icon:["fas","address-card"]},{href:"/#experience",label:"My Experience",icon:["fas","briefcase"]},{href:"/blog",label:"My Blog",icon:["fas","book"]}]}},methods:{toggleMobileNav:function(){this.open=!0!==this.open}}},o=n(32),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"fixed z-50 w-full bg-white top-0 flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg shadow-lg"},[e("div",{staticClass:"container px-4 mx-auto flex flex-wrap items-center justify-between"},[e("div",{staticClass:"w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"},[e("NuxtLink",{staticClass:"text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-gray-800",attrs:{to:"/"}},[this._v("\n        Guillaume Clement\n      ")]),this._v(" "),e("button",{staticClass:"cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",attrs:{type:"button"},on:{click:this.toggleMobileNav}},[e("font-awesome-icon",{attrs:{icon:["fas","bars"]}})],1)],1),this._v(" "),e("div",{staticClass:"lg:flex flex-grow items-center",class:!0===this.open?"block":"hidden"},[e("ul",{staticClass:"flex flex-col lg:flex-row list-none lg:ml-auto"},this._l(this.navLinks,(function(link){return e("NavLink",{key:link.key,attrs:{href:link.href,label:link.label,icon:link.icon}})})),1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NavLink:n(242).default})},237:function(t,e,n){"use strict";n.r(e);var r=n(239),o=n(235),l={name:"MainFooter",components:{SocialIcons:r.default,SlopeSeparator:o.default}},c=n(32),component=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"relative bg-gray-900 pt-8 pb-6"},[e("SlopeSeparator",{attrs:{direction:"desc","fill-color":"text-gray-900"}}),this._v(" "),e("div",{staticClass:"container mx-auto px-4"},[e("div",{staticClass:"flex flex-wrap"},[e("div",{staticClass:"w-full lg:w-6/12 px-4"},[e("h4",{staticClass:"text-3xl font-semibold text-white"},[this._v("\n          Let's keep in touch!\n        ")]),this._v(" "),e("h5",{staticClass:"text-lg mt-0 mb-2 text-gray-500"},[this._v("\n          Make sure to connect with me on any of these platforms.\n        ")]),this._v(" "),e("div",{staticClass:"mt-6"},[e("ul",{staticClass:"text-3xl list-none text-gray-500 pl-1"},[e("SocialIcons",{attrs:{appearance:"dark"}})],1)])])]),this._v(" "),this._m(0)])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-wrap items-center md:justify-between justify-center mt-16"},[e("div",{staticClass:"w-full md:w-4/12 px-4 mx-auto text-center"},[e("div",{staticClass:"text-sm text-white font-semibold py-1"},[this._v("\n          Made with 😀 by Guillaume Clement.\n        ")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{SlopeSeparator:n(235).default,SocialIcons:n(239).default})},238:function(t,e,n){"use strict";n.r(e);var r={name:"CoverImage",props:{cover:{type:String,required:!0}}},o=n(32),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"absolute top-0 w-full h-full bg-center bg-cover",style:"background-image: url("+this.cover+")"},[e("span",{staticClass:"w-full h-full absolute opacity-50 bg-black",attrs:{id:"blackOverlay"}})])])}),[],!1,null,null,null);e.default=component.exports},239:function(t,e,n){"use strict";n.r(e);n(41);var r={name:"SocialIcons",components:{SocialIcon:n(243).default},props:{appearance:{type:String,validator:function(t){return["light","dark"].includes(t)}}},data:function(){return{socialIcons:[{href:"https://www.linkedin.com/in/guillaumecleme",label:"LinkedIn",icon:["fab","linkedin-in"]},{href:"https://twitter.com/guillaumecleme",label:"Twitter",icon:["fab","twitter"]},{href:"https://www.facebook.com/guillaume.e.clement",label:"FaceBook",icon:["fab","facebook-f"]},{href:"https://www.instagram.com/guillaumecle.me/",label:"Instagram",icon:["fab","instagram"]},{href:"https://m.me/guillaume.e.clement",label:"Messenger",icon:["fab","facebook-messenger"]},{href:"https://github.com/guillaumecleme",label:"GitHub",icon:["fab","github"]},{href:"https://stackoverflow.com/users/3308078/guillaumecle.me",label:"Stack Overflow",icon:["fab","stack-overflow"]},{href:"https://www.credly.com/users/guillaumecleme/badges",label:"Credly",icon:["fas","certificate"]},{href:"https://www.goodreads.com/guillaumecleme",label:"Goodreads",icon:["fab","goodreads"]}]}}},o=n(32),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{name:"socialicons"}},t._l(t.socialIcons,(function(e){return n("SocialIcon",{key:e.key,attrs:{href:e.href,label:e.label,icon:e.icon,appearance:t.appearance}})})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SocialIcon:n(243).default})},240:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"grid grid-cols-1 gap-4 justify-items-stretch"},[e("div",{staticClass:"w-full px-4 flex justify-center justify-self-center"},[e("div",{staticClass:"relative"},[e("img",{staticClass:"shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16",staticStyle:{"max-width":"150px"},attrs:{alt:"Guillaume Clement's profile photo",src:n(244)}})])])])}],o={name:"ProfileImage"},l=n(32),component=Object(l.a)(o,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),r,!1,null,null,null);e.default=component.exports},241:function(t,e,n){"use strict";n.r(e);var r={name:"ProfileHeader",props:{shareUrl:{type:String,required:!0}}},o=n(32),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid grid-cols-1 md:grid-cols-3 gap-2 justify-items-stretch mt-24 md:mt-20"},[n("div",{staticClass:"md:col-start-2 w-full px-4 flex justify-center justify-self-center"},[n("div",{staticClass:"text-center mt-0 md:mt-6"},[n("h3",{staticClass:"text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2"},[t._v("\n        Guillaume Clement\n      ")]),t._v(" "),n("div",{staticClass:"mt-0 mb-2 text-gray-700"},[n("font-awesome-icon",{staticClass:"mr-2 text-lg text-gray-700",attrs:{icon:["fas","briefcase"]}}),t._v("Principal Technical Program Manager\n      ")],1),t._v(" "),n("div",{staticClass:"text-sm leading-normal mt-3 mb-2 text-gray-700 font-medium uppercase"},[n("font-awesome-icon",{staticClass:"mr-2 text-lg text-gray-700",attrs:{icon:["fas","map-marker-alt"]}}),t._v("Canmore, Alberta\n      ")],1)])]),t._v(" "),n("div",{staticClass:"w-full px-4 text-center justify-center justify-self-center md:text-right md:justify-end md:justify-self-end"},[n("div",{staticClass:"py-1 px-3 md:-mt-16"},[n("a",{staticClass:"bg-blue-500 hover:bg-blue-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1",staticStyle:{transition:"all 0.15s ease 0s"},attrs:{type:"button",href:t.shareUrl}},[n("font-awesome-icon",{attrs:{icon:["fab","twitter"]}}),t._v("\n        Share\n      ")],1)])])])}),[],!1,null,null,null);e.default=component.exports},242:function(t,e,n){"use strict";n.r(e);var r={name:"NavLink",props:{href:String,label:String,icon:Array}},o=n(32),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"nav-item text-gray-800 hover:text-gray-600"},[e("NuxtLink",{staticClass:"px-3 py-2 flex items-center text-xs uppercase font-bold",attrs:{to:this.href}},[e("div",{staticClass:"text-lg leading-lg"},[e("font-awesome-icon",{attrs:{icon:this.icon}})],1),this._v(" "),e("span",{staticClass:"ml-2"},[this._v(this._s(this.label))])])],1)}),[],!1,null,null,null);e.default=component.exports},243:function(t,e,n){"use strict";n.r(e);var r={name:"SocialIcon",props:{href:String,label:String,icon:Array,appearance:String}},o=n(32),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"inline-block mr-2",class:"light"==this.appearance?"hover:text-gray-600":"hover:text-gray-700"},[e("a",{attrs:{href:this.href,target:"_blank",rel:"noreferrer","aria-label":this.label}},[e("font-awesome-icon",{attrs:{icon:this.icon}})],1)])}),[],!1,null,null,null);e.default=component.exports},244:function(t,e,n){t.exports=n.p+"img/profile.78e11f1.jpg"},245:function(t,e,n){var r=n(4);e.f=r},246:function(t,e,n){var content=n(268);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("554da1aa",content,!0,{sourceMap:!1})},263:function(t,e,n){"use strict";var r=n(2),o=n(5),l=n(29),c=n(22),f=n(10),m=n(114),d=n(170),h=n(6),v=n(9),x=n(83),y=n(8),w=n(7),C=n(21),S=n(25),_=n(77),k=n(44),j=n(78),O=n(57),I=n(110),P=n(264),E=n(113),N=n(42),$=n(18),M=n(80),B=n(19),L=n(13),A=n(111),F=n(81),G=n(82),z=n(112),H=n(4),R=n(245),J=n(265),T=n(45),U=n(28),Z=n(35).forEach,D=F("hidden"),Q=H("toPrimitive"),W=U.set,K=U.getterFor("Symbol"),V=Object.prototype,X=o.Symbol,Y=l("JSON","stringify"),tt=N.f,et=$.f,nt=P.f,it=M.f,at=A("symbols"),ot=A("op-symbols"),st=A("string-to-symbol-registry"),lt=A("symbol-to-string-registry"),ct=A("wks"),ut=o.QObject,ft=!ut||!ut.prototype||!ut.prototype.findChild,pt=f&&h((function(){return 7!=j(et({},"a",{get:function(){return et(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=tt(V,e);r&&delete V[e],et(t,e,n),r&&t!==V&&et(V,e,r)}:et,mt=function(t,e){var symbol=at[t]=j(X.prototype);return W(symbol,{type:"Symbol",tag:t,description:e}),f||(symbol.description=e),symbol},ht=d?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof X},gt=function(t,e,n){t===V&&gt(ot,e,n),w(t);var r=_(e,!0);return w(n),v(at,r)?(n.enumerable?(v(t,D)&&t[D][r]&&(t[D][r]=!1),n=j(n,{enumerable:k(0,!1)})):(v(t,D)||et(t,D,k(1,{})),t[D][r]=!0),pt(t,r,n)):et(t,r,n)},vt=function(t,e){w(t);var n=S(e),r=O(n).concat(wt(n));return Z(r,(function(e){f&&!bt.call(n,e)||gt(t,e,n[e])})),t},bt=function(t){var e=_(t,!0),n=it.call(this,e);return!(this===V&&v(at,e)&&!v(ot,e))&&(!(n||!v(this,e)||!v(at,e)||v(this,D)&&this[D][e])||n)},xt=function(t,e){var n=S(t),r=_(e,!0);if(n!==V||!v(at,r)||v(ot,r)){var o=tt(n,r);return!o||!v(at,r)||v(n,D)&&n[D][r]||(o.enumerable=!0),o}},yt=function(t){var e=nt(S(t)),n=[];return Z(e,(function(t){v(at,t)||v(G,t)||n.push(t)})),n},wt=function(t){var e=t===V,n=nt(e?ot:S(t)),r=[];return Z(n,(function(t){!v(at,t)||e&&!v(V,t)||r.push(at[t])})),r};(m||(L((X=function(){if(this instanceof X)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=z(t),n=function(t){this===V&&n.call(ot,t),v(this,D)&&v(this[D],e)&&(this[D][e]=!1),pt(this,e,k(1,t))};return f&&ft&&pt(V,e,{configurable:!0,set:n}),mt(e,t)}).prototype,"toString",(function(){return K(this).tag})),L(X,"withoutSetter",(function(t){return mt(z(t),t)})),M.f=bt,$.f=gt,N.f=xt,I.f=P.f=yt,E.f=wt,R.f=function(t){return mt(H(t),t)},f&&(et(X.prototype,"description",{configurable:!0,get:function(){return K(this).description}}),c||L(V,"propertyIsEnumerable",bt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!m,sham:!m},{Symbol:X}),Z(O(ct),(function(t){J(t)})),r({target:"Symbol",stat:!0,forced:!m},{for:function(t){var e=String(t);if(v(st,e))return st[e];var symbol=X(e);return st[e]=symbol,lt[symbol]=e,symbol},keyFor:function(t){if(!ht(t))throw TypeError(t+" is not a symbol");if(v(lt,t))return lt[t]},useSetter:function(){ft=!0},useSimple:function(){ft=!1}}),r({target:"Object",stat:!0,forced:!m,sham:!f},{create:function(t,e){return void 0===e?j(t):vt(j(t),e)},defineProperty:gt,defineProperties:vt,getOwnPropertyDescriptor:xt}),r({target:"Object",stat:!0,forced:!m},{getOwnPropertyNames:yt,getOwnPropertySymbols:wt}),r({target:"Object",stat:!0,forced:h((function(){E.f(1)}))},{getOwnPropertySymbols:function(t){return E.f(C(t))}}),Y)&&r({target:"JSON",stat:!0,forced:!m||h((function(){var symbol=X();return"[null]"!=Y([symbol])||"{}"!=Y({a:symbol})||"{}"!=Y(Object(symbol))}))},{stringify:function(t,e,n){for(var r,o=[t],l=1;arguments.length>l;)o.push(arguments[l++]);if(r=e,(y(e)||void 0!==t)&&!ht(t))return x(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ht(e))return e}),o[1]=e,Y.apply(null,o)}});X.prototype[Q]||B(X.prototype,Q,X.prototype.valueOf),T(X,"Symbol"),G[D]=!0},264:function(t,e,n){var r=n(25),o=n(110).f,l={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return c&&"[object Window]"==l.call(t)?function(t){try{return o(t)}catch(t){return c.slice()}}(t):o(r(t))}},265:function(t,e,n){var path=n(169),r=n(9),o=n(245),l=n(18).f;t.exports=function(t){var e=path.Symbol||(path.Symbol={});r(e,t)||l(e,t,{value:o.f(t)})}},266:function(t,e,n){"use strict";var r=n(2),o=n(10),l=n(5),c=n(9),f=n(8),m=n(18).f,d=n(168),h=l.Symbol;if(o&&"function"==typeof h&&(!("description"in h.prototype)||void 0!==h().description)){var v={},x=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof x?new h(t):void 0===t?h():h(t);return""===t&&(v[e]=!0),e};d(x,h);var y=x.prototype=h.prototype;y.constructor=x;var w=y.toString,C="Symbol(test)"==String(h("test")),S=/^Symbol\((.*)\)[^)]+$/;m(y,"description",{configurable:!0,get:function(){var symbol=f(this)?this.valueOf():this,t=w.call(symbol);if(c(v,symbol))return"";var desc=C?t.slice(7,-1):t.replace(S,"$1");return""===desc?void 0:desc}}),r({global:!0,forced:!0},{Symbol:x})}},267:function(t,e,n){"use strict";n(246)},268:function(t,e,n){(e=n(33)(!1)).push([t.i,".nuxt-content h1{font-size:1.875rem;line-height:2.25rem;font-weight:600;line-height:1.5;margin-bottom:.5rem}.nuxt-content h2{font-size:1.5rem;line-height:2rem;line-height:1.5;margin-bottom:.5rem}.nuxt-content h3{font-size:1.25rem;line-height:1.75rem;line-height:1.5;margin-bottom:.5rem}.nuxt-content p{font-size:1.125rem;line-height:1.75rem;line-height:1.625;margin-bottom:1rem}.nuxt-content ul{list-style:disc;margin:1.5em;padding:.5em}.nuxt-content a{font-weight:700;text-decoration:underline}.nuxt-content a:hover{--tw-text-opacity:1;color:rgba(156,163,175,var(--tw-text-opacity))}.nuxt-content blockquote{--tw-text-opacity:1;border-left:10px solid rgba(229,231,235,var(--tw-text-opacity));margin:1.5em;padding:.5em;font-size:1.125rem;line-height:1.75rem}.nuxt-content blockquote p{margin-bottom:0}",""]),t.exports=e},269:function(t,e,n){"use strict";n.r(e);n(263),n(266),n(26);var r=n(3),o=n(236),l=n(238),c=n(237),f=n(241),m=n(240),d={name:"BlogPost",components:{NavBar:o.default,CoverImage:l.default,MainFooter:c.default,ProfileHeader:f.default,ProfileImage:m.default},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("blog",r.slug).fetch();case 3:return o=e.sent,e.abrupt("return",{post:o});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"Guillaume Clement | Blog | "+this.post.title,meta:[{hid:"description",name:"description",content:this.post.description},{name:"og:title",content:this.post.title},{name:"og:description",content:this.post.description},{name:"og:image",content:this.post.cover},{name:"og:image:secure_url",content:this.post.cover},{name:"og:image:alt",content:this.post.title},{name:"twitter:title",content:this.post.title},{name:"twitter:description",content:this.post.description},{name:"twitter:image",content:this.post.cover}]}}},h=(n(267),n(32)),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NavBar"),t._v(" "),n("main",[n("section",{staticClass:"relative block",staticStyle:{height:"500px"}},[n("CoverImage",{attrs:{cover:t.post.cover}}),t._v(" "),n("div",{staticClass:"top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden",staticStyle:{height:"70px",transform:"translateZ(0px)"}},[n("svg",{staticClass:"absolute bottom-0 overflow-hidden",attrs:{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0"}},[n("polygon",{staticClass:"text-gray-300 fill-current",attrs:{points:"2560 0 2560 100 0 100"}})])])],1),t._v(" "),n("section",{staticClass:"relative py-24 bg-gray-300"},[n("div",{staticClass:"container mx-auto px-4"},[n("div",{staticClass:"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"},[n("div",{staticClass:"px-6"},[n("ProfileImage"),t._v(" "),n("ProfileHeader",{attrs:{"share-url":t.post.shareUrl}}),t._v(" "),n("div",{staticClass:"mt-6 py-10 border-t border-gray-300"},[n("div",{staticClass:"flex flex-wrap justify-center"},[n("div",{staticClass:"w-full lg:w-9/12 px-4"},[n("nuxt-content",{staticClass:"text-gray-800",attrs:{document:t.post}})],1)])])],1)])])])]),t._v(" "),n("MainFooter")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NavBar:n(236).default,CoverImage:n(238).default,ProfileImage:n(240).default,ProfileHeader:n(241).default,MainFooter:n(237).default})}}]);