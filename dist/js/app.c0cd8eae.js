(function(t){function a(a){for(var s,o,i=a[0],c=a[1],l=a[2],p=0,f=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(a);while(f.length)f.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,i=1;i<e.length;i++){var c=e[i];0!==n[c]&&(s=!1)}s&&(r.splice(a--,1),t=o(o.s=e[0]))}return t}var s={},n={app:0},r=[];function o(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=s,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)o.d(e,s,function(a){return t[a]}.bind(null,s));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=a,i=i.slice();for(var l=0;l<i.length;l++)a(i[l]);var u=c;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"150b":function(t,a,e){},"3c1f":function(t,a,e){t.exports=e.p+"img/icon-3.c608ad25.png"},"49ac":function(t,a,e){t.exports=e.p+"img/Gwynne_Shotwell.1f8a3ddc.jpg"},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Headerpart",{attrs:{maintitle:t.name,info:t.summary,testsites:t.test_sites,valuation:t.valuation,vehicles:t.vehicles}}),e("section",[e("Companypart",{attrs:{ceo:t.ceo,cto:t.cto,coo:t.coo,cto_propulsion:t.cto_propulsion,founder:t.founder,founded:t.founded,employees:t.employees}}),e("Headquarterspart",{attrs:{headquarters:t.headquarters,links:t.links,launch_sites:t.launch_sites}})],1)],1)},r=[],o=(e("c975"),e("b0c0"),e("bc3a")),i=e.n(o),c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",[e("div",{staticClass:"titlepart"},[e("h1",{staticClass:"maintitle"},[t._v(t._s(t.maintitle))]),e("div",{staticClass:"infos"},[t._v(t._s(t.info))])]),e("div",{staticClass:"card"},[e("div",{staticClass:"card-elem"},[e("b",[t._v("Test sites:")]),e("span",{staticClass:"compinfos"},[t._v(t._s(t.testsites))])]),e("div",{staticClass:"card-elem"},[e("b",[t._v("Valuation:")]),e("span",{staticClass:"compinfos"},[t._v(t._s(t.valuation))])]),e("div",{staticClass:"card-elem"},[e("b",[t._v("Vehicles:")]),e("span",{staticClass:"compinfos"},[t._v(t._s(t.vehicles))])])])])},l=[],u=(e("a9e3"),{name:"Headerpart",props:{maintitle:String,info:String,testsites:Number,valuation:Number,vehicles:Number}}),p=u,f=(e("e37f"),e("2877")),d=Object(f["a"])(p,c,l,!1,null,"54c2b49d",null),m=d.exports,v=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("article",{staticClass:"company"},[s("h2",{staticClass:"subtitle"},[t._v("Company")]),s("div",{staticClass:"companycards"},[s("div",{staticClass:"card ceo"},[s("img",{attrs:{src:e("6fb9")}}),s("b",[t._v(t._s(t.ceo))]),s("span",{staticClass:"compinfos position"},[t._v("CEO")])]),s("div",{staticClass:"card coo"},[s("img",{attrs:{src:e("49ac")}}),s("b",[t._v(t._s(t.coo))]),s("span",{staticClass:"compinfos position"},[t._v("COO")])]),s("div",{staticClass:"card cto"},[s("img",{attrs:{src:e("6fb9")}}),s("b",[t._v(t._s(t.cto))]),s("span",{staticClass:"compinfos position"},[t._v("CTO")])]),s("div",{staticClass:"card cto-prop"},[s("img",{attrs:{src:e("f637")}}),s("b",[t._v(t._s(t.cto_propulsion))]),s("span",{staticClass:"position"},[t._v("CTO propulsion")])])]),s("div",{staticClass:"companyinfos"},[s("div",{staticClass:"card-elem"},[s("img",{attrs:{src:e("d8e1")}}),s("b",[t._v("Employees:")]),s("span",{staticClass:"compinfos infoabout"},[t._v(t._s(t.employees))])]),s("div",{staticClass:"card-elem"},[s("img",{attrs:{src:e("859d")}}),s("b",[t._v("Founded:")]),s("span",{staticClass:"compinfos infoabout"},[t._v(t._s(t.founded))])]),s("div",{staticClass:"card-elem"},[s("img",{attrs:{src:e("3c1f")}}),s("b",[t._v("Founder:")]),s("span",{staticClass:"compinfos infoabout"},[t._v(t._s(t.founder))])])])])},_=[],b={name:"Companypart",props:{ceo:String,cto:String,coo:String,cto_propulsion:String,founder:String,founded:Number,employees:Number}},h=b,C=(e("aaa7"),Object(f["a"])(h,v,_,!1,null,"11c8e0d6",null)),g=C.exports,y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("article",{staticClass:"headquarters"},[e("h2",{staticClass:"subtitle"},[t._v("Headquarters")]),e("div",{staticClass:"headquarterholder"},[t._m(0),e("div",{staticClass:"headinfos"},[e("p",{staticClass:"contactinfo"},[e("b",[t._v("Adress:")]),t._v(" "),e("span",{staticClass:"headinfo"},[t._v(t._s(t.headquarters.address))])]),e("p",{staticClass:"contactinfo"},[e("b",[t._v("City:")]),t._v(" "),e("span",{staticClass:"headinfo"},[t._v(t._s(t.headquarters.city))])]),e("p",{staticClass:"contactinfo"},[e("b",[t._v("State:")]),t._v(" "),e("span",{staticClass:"headinfo"},[t._v(t._s(t.headquarters.state))])]),e("p",{staticClass:"contactinfo"},[e("b",[t._v("Launchsites:")]),t._v(" "),e("span",{staticClass:"headinfo"},[t._v(t._s(t.launch_sites))])]),e("p",{staticClass:"contactinfo"},[e("b",[t._v("Elon Musk:")]),t._v(" "),e("a",{attrs:{href:t.links.elon_twitter,target:"_blank",rel:"noopener noreferrer"}},[e("i",{staticClass:"fab fa-twitter"})])]),e("p",{staticClass:"contactinfo"},[e("b",[t._v("Space X:")]),e("a",{attrs:{href:t.links.twitter,target:"_blank",rel:"noopener noreferrer"}},[e("i",{staticClass:"fab fa-twitter"})]),e("a",{attrs:{href:t.links.flickr,target:"_blank",rel:"noopener noreferrer"}},[e("i",{staticClass:"fab fa-flickr"})]),e("a",{attrs:{href:t.links.website,target:"_blank",rel:"noopener noreferrer"}},[e("i",{staticClass:"fas fa-globe-americas"})])])])])])},w=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"map"},[e("iframe",{attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.770201198552!2d-118.32906698453804!3d33.92131348064168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b5ded9a490b5%3A0x3095ae5795c500b3!2sRocket%20Rd%2C%20Hawthorne%2C%20CA%2090250%2C%20Egyes%C3%BClt%20%C3%81llamok!5e0!3m2!1shu!2shu!4v1583267512614!5m2!1shu!2shu",width:"600",height:"450",frameborder:"0",allowfullscreen:""}})])}],k={name:"Headquarterspart",props:{headquarters:Object,links:Object,launch_sites:Number}},O=k,x=(e("b89b"),Object(f["a"])(O,y,w,!1,null,"1bc18411",null)),j=x.exports,q="https://api.spacexdata.com/v3/info",S={name:"App",components:{Headerpart:m,Companypart:g,Headquarterspart:j},data:function(){return{name:"",founder:"",founded:0,employees:0,vehicles:0,launch_sites:0,test_sites:0,ceo:"",cto:"",coo:"",cto_propulsion:"",valuation:0,headquarters:{},links:{},summary:""}},mounted:function(){var t=this;i()({url:q,method:"get"}).then((function(a){t.name=a.data.name,t.summary=a.data.summary,document.title=t.name+" - "+t.summary.substring(0,t.summary.indexOf("."))+".",t.test_sites=a.data.test_sites,t.valuation=a.data.valuation,t.vehicles=a.data.vehicles,t.ceo=a.data.ceo,t.cto=a.data.cto,t.coo=a.data.coo,t.cto_propulsion=a.data.cto_propulsion,t.founder=a.data.founder,t.founded=a.data.founded,t.employees=a.data.employees,t.headquarters=a.data.headquarters,t.links=a.data.links,t.launch_sites=a.data.launch_sites})).catch((function(t){console.log(t)}))}},E=S,H=Object(f["a"])(E,n,r,!1,null,null,null),P=H.exports;e("15f5"),e("7051"),e("150b");s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(P)}}).$mount("#app")},"6fb9":function(t,a,e){t.exports=e.p+"img/elon_musk.0e3c8f49.jpg"},"78b0":function(t,a,e){},"859d":function(t,a,e){t.exports=e.p+"img/icon-2.89fdcd93.png"},aaa7:function(t,a,e){"use strict";var s=e("f804"),n=e.n(s);n.a},b89b:function(t,a,e){"use strict";var s=e("e0fa"),n=e.n(s);n.a},d8e1:function(t,a,e){t.exports=e.p+"img/icon-1.0d4058c9.png"},e0fa:function(t,a,e){},e37f:function(t,a,e){"use strict";var s=e("78b0"),n=e.n(s);n.a},f637:function(t,a,e){t.exports=e.p+"img/tom-mueller-profile.bf8684d9.jpg"},f804:function(t,a,e){}});
//# sourceMappingURL=app.c0cd8eae.js.map