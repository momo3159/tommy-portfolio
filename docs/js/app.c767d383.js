(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],m=0,d=[];m<s.length;m++)i=s[m],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/tommy-portfolio/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"038d":function(t,e,a){t.exports=a.p+"img/vue.22efb7c2.svg"},"055b":function(t,e,a){t.exports=a.p+"img/python.51c2eab2.svg"},"090e":function(t,e,a){t.exports=a.p+"img/nodejs.f434bfbb.svg"},1822:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"works"}},[a("span",{staticClass:"head"},[t._v("WORKS")]),a("v-container",{staticClass:"mt-10"},[a("v-row",t._l(t.works,(function(e){return a("v-col",{key:e.link,attrs:{cols:"12",xs:"12",sm:"6",md:"4",lg:"4",align:"center"}},[a("v-card",{staticClass:"card"},[a("v-card-title",[t._v(t._s(e.name))]),a("v-card-subtitle",[t._v(t._s(e.lang)),a("br"),t._v(t._s(e.year))]),a("v-card-text",{staticClass:"text-left mt-auto"},[t._v(t._s(e.content))]),a("v-card-actions",t._l(e.links,(function(e){return a("v-btn",{key:e.url,attrs:{href:e.url,text:"",color:"deep-purple accent-4"}},[a("v-fa",{attrs:{icon:["fab",e.name],size:"lg",pull:"left"}}),t._v(t._s(e.name)+" ")],1)})),1)],1)],1)})),1)],1)],1)},r=[],o={name:"Works",data:function(){return{works:[{name:"ポートフォリオ",lang:"HTML/CSS/Vue.js",content:"ポートフォリオです。フロントエンドに（ほぼ）初挑戦で作りました。SPA対応などに挑戦しました。",links:[{url:"https://github.com/momo3159/tommy-portfolio",name:"github"}]},{name:"読書管理アプリ",lang:"HTML/CSS/JavaScript",content:"google books apiを用いました。本を何%読んだかを記録します。これもvue.jsで書き換えたいと思っています。",links:[{url:"https://github.com/momo3159/Reading-Progress-Management.io",name:"github"}]},{name:"テトリス",lang:"Java/JavaFx",content:"テトリスを自作しました。",links:[{url:"https://github.com/momo3159/BlockGame",name:"github"}]},{name:"BETTeR-class",lang:"HTML/CSS/Vue.js",content:"e-classから課題の情報を取得し、管理するChrome拡張を作りました。",links:[{url:"https://github.com/momo3159/BETTeR-class",name:"github"},{url:"https://chrome.google.com/webstore/detail/better-class/nnpcnagpahjgfimobmehmijldibkdpan?hl=ja",name:"chrome"}]},{name:"自作ブログ",lang:"React/TypeScript/Gatsby",content:"Gatsbyを用いてブログを自作しました。Vercelにデプロイしています。",links:[{url:"https://github.com/momo3159/BlockGame",name:"github"},{url:"https://t0mmy3.vercel.app",name:"ブログ"}]}]}}},i=o,s=(a("d4ad"),a("2877")),l=a("6544"),c=a.n(l),u=a("8336"),m=a("b0af"),d=a("99d9"),f=a("62ad"),b=a("a523"),v=a("0fd9"),p=Object(s["a"])(i,n,r,!1,null,"1aac6992",null);e["default"]=p.exports;c()(p,{VBtn:u["a"],VCard:m["a"],VCardActions:d["a"],VCardSubtitle:d["b"],VCardText:d["c"],VCardTitle:d["d"],VCol:f["a"],VContainer:b["a"],VRow:v["a"]})},"1b0e":function(t,e,a){"use strict";a("21eb")},"1ce0":function(t,e,a){"use strict";a("add8")},"21eb":function(t,e,a){},"2c07":function(t,e,a){t.exports=a.p+"img/go.477657aa.svg"},"3c64":function(t,e,a){t.exports=a.p+"img/javascript.87711407.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("div",{attrs:{id:"nav"}},[a("router-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#home",expression:"'#home'"}],attrs:{to:"/"}},[t._v("Home")]),a("router-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#about",expression:"'#about'"}],attrs:{to:"/about"}},[t._v("About")]),a("router-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#skills",expression:"'#skills'"}],attrs:{to:"/skills"}},[t._v("Skills")]),a("router-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#history",expression:"'#history'"}],attrs:{to:"/history"}},[t._v("History")]),a("router-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#works",expression:"'#works'"}],attrs:{to:"/works"}},[t._v("Works")]),a("a")],1),a("home"),a("about"),a("skills"),a("history"),a("works")],1)},o=[],i=a("f820"),s=a("e4bb"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"home"}},[a("span",{staticClass:"hello"},[t._v("Welcome to Tommy's Portfolio")]),a("div",{staticClass:"particle-container"},[a("vue-particles",{staticClass:"particle",attrs:{color:"#2962FF",particleOpacity:.9,particlesNumber:80,shapeType:"circle",particleSize:20,linesColor:"#304FFE",linesWidth:3,lineLinked:!0,lineOpacity:.7,linesDistance:150,moveSpeed:7,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"repulse"}})],1)])},c=[],u={name:"Home",data:function(){return{rgb:"#dedede"}},methods:{onclick:function(){return this.rgb}}},m=u,d=(a("c665"),a("2877")),f=Object(d["a"])(m,l,c,!1,null,"1b5c83cc",null),b=f.exports,v=a("ad83"),p=a("1822"),h={components:{About:i["default"],Skills:v["default"],Works:p["default"],History:s["default"],Home:b},name:"App"},g=h,y=(a("e44c"),a("6544")),_=a.n(y),k=a("7496"),C=Object(d["a"])(g,r,o,!1,null,"02af0b82",null),x=C.exports;_()(C,{VApp:k["a"]});a("d3b7");var w=a("8c4f"),S=a("98c9");n["a"].use(w["a"]),n["a"].use(S["a"]);var T=[{path:"/",name:"Home",component:b},{path:"/about",name:"About",component:function(){return Promise.resolve().then(a.bind(null,"f820"))}},{path:"/works",name:"Works",component:function(){return Promise.resolve().then(a.bind(null,"1822"))}},{path:"/history",name:"History",component:function(){return Promise.resolve().then(a.bind(null,"e4bb"))}},{path:"/skills",name:"Skills",component:function(){return Promise.resolve().then(a.bind(null,"ad83"))}}],V=new w["a"]({mode:"history",base:"/tommy-portfolio",routes:T}),P=V,j=a("f309");n["a"].use(j["a"]);var O=new j["a"]({}),M=a("f13c"),I=a.n(M);n["a"].use(I.a,{duration:1e3,easing:"ease",offset:-120});var E=I.a,A=a("ecee"),R=a("c074"),H=a("f2d1"),L=a("b702"),W=a("ad3d");A["c"].add(R["a"],H["a"],L["a"]),n["a"].component("v-fa",W["a"]),n["a"].config.productionTip=!1,new n["a"]({router:P,vuetify:O,vueScrollto:E,render:function(t){return t(x)}}).$mount("#app")},"56e5":function(t,e,a){},"5bb7":function(t,e,a){},"5e49":function(t,e,a){t.exports=a.p+"img/typescript.9e8bfce4.svg"},"62ac":function(t,e,a){},ad83:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"skills"}},[a("span",{staticClass:"head"},[t._v("SKILLS")]),a("v-container",{staticClass:"mt-10"},[a("v-row",t._l(t.skills,(function(e){return a("v-col",{key:e.name,attrs:{cols:"12",xs:"12",sm:"6",md:"4",lg:"4",align:"center"}},[a("v-card",{staticClass:"card",attrs:{"max-width":"400"}},[a("img",{attrs:{src:e.imgPath}}),a("br"),t._v(" "+t._s(e.name)+" "),a("hr",{staticStyle:{width:"80%"}}),a("v-rating",{attrs:{readonly:"",dense:"",value:e.rating,"full-icon":"mdi-star","half-icon":"mdi-star-half","empty-icon":"mdi-star-outline","half-increments":"",color:"yellow darken-3","background-color":"grey darken-1"}}),a("v-card-text",{staticClass:"text-left mt-auto"},[t._v(t._s(e.content))])],1)],1)})),1)],1)],1)},r=[],o={name:"Skills",data:function(){return{skills:[{name:"C",content:"大学の講義で勉強しました。現在はアルゴリズムやネットワークプログラミングの勉強で用いています。",rating:3,imgPath:a("ffa3")},{name:"C++",content:"競技プログラミングで用いています。",rating:2,imgPath:a("e0e5")},{name:"Python",content:"機械学習の勉強や、ちょっとしたコードを書く時に用いています。最近はFlaskを用いてAPIを書きました。",rating:3,imgPath:a("055b")},{name:"Java",content:"大学の講義で勉強しました。2年生の時にGUIライブラリのJavaFxを、3年生の時にサーバーサイドのJavaを扱いました。オブジェクト指向に強くなりたいです。",rating:2,imgPath:a("b219")},{name:"JavaScript",content:"Webアプリ開発で用いています。",rating:3,imgPath:a("3c64")},{name:"TypeScript",content:"型があると便利そうだなぁと思って勉強を始めました。",rating:2,imgPath:a("5e49")},{name:"Vue.js",content:"このポートフォリオを作成するにあたって勉強を始めました。インターンなどで使用しました。",rating:3,imgPath:a("038d")},{name:"React.js",content:"Reactも触ってみたいと思い勉強を始めました。",rating:3,imgPath:a("b2e9")},{name:"Node.js",content:"",rating:1.5,imgPath:a("090e")},{name:"Go",content:"サーバーサイドを勉強するにあたり、Goに手をつけました。文法がシンプルで良いなぁと思っています。",rating:1,imgPath:a("2c07")}]}}},i=o,s=(a("1ce0"),a("2877")),l=a("6544"),c=a.n(l),u=a("b0af"),m=a("99d9"),d=a("62ad"),f=a("a523"),b=a("1d4d"),v=a("0fd9"),p=Object(s["a"])(i,n,r,!1,null,"10bc0ff1",null);e["default"]=p.exports;c()(p,{VCard:u["a"],VCardText:m["c"],VCol:d["a"],VContainer:f["a"],VRating:b["a"],VRow:v["a"]})},add8:function(t,e,a){},b219:function(t,e,a){t.exports=a.p+"img/java.a732a6e5.svg"},b2e9:function(t,e,a){t.exports=a.p+"img/react.9a28da9f.svg"},c665:function(t,e,a){"use strict";a("ea4a")},d4ad:function(t,e,a){"use strict";a("62ac")},e0e5:function(t,e,a){t.exports=a.p+"img/c-plusplus.c64a068e.svg"},e181:function(t,e,a){"use strict";a("5bb7")},e44c:function(t,e,a){"use strict";a("56e5")},e4bb:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"history"}},[a("span",{staticClass:"head"},[t._v("HISTORY")]),a("v-container",{staticClass:"mt-10"},[a("v-row",[a("v-col",[a("v-timeline",{attrs:{id:"timeline",dense:t.$vuetify.breakpoint.smAndDown}},t._l(t.histories,(function(e,n){return a("v-timeline-item",{key:e.title+"-"+e.term,attrs:{color:t.TIMELINE_ITEM_COLOR[n%2]+" accent-4"}},[a("v-card",[a("h6",{staticClass:"history-title"},[t._v(" "+t._s(e.title)+" ")]),a("v-card-subtitle",{class:"mt-auto"},[a("span",{attrs:{styles:"border-bottom: 2px solid "+t.TIMELINE_ITEM_COLOR[n%2]+" accent-4;"}},[t._v(t._s(e.term))])]),a("v-card-text",{class:"white mt-auto"},[t._v(" "+t._s(e.body)+" ")])],1)],1)})),1)],1)],1)],1)],1)},r=[],o={name:"History",data:function(){return{TIMELINE_ITEM_COLOR:["deep-purple","indigo"],TIMELINE_ITEM_POSITION:["left","right"],histories:[{title:"同志社大学理工学部インテリジェント情報工学科入学",term:"2018.4",body:"京田辺キャンパスは自然が豊かでいいところです。ラーネッド記念図書館がお気に入りです。"},{title:"同志社大学ローム記念館プロジェクト Oh! Do IT!（オムロン株式会社連携）",term:"2018.6〜2019.2",body:"「AI×健康」がテーマのプロジェクトでした。プロジェクトでの企画考案やPythonを用いて、FitbitというウェアラブルのフィットネスデバイスのAPIを叩いてデータを取得するコードなどを書いていました。またHerokuを少しだけ触りました。"},{title:"同志社大学ローム記念館プロジェクト WAPLI",term:"2019.4〜2020.2",body:"「同志社大学生の生活をより豊かにする」というテーマのもとで始まったネイティブアプリ開発プロジェクトです。チャットボット作成やPythonを用いて様々なデータをスクレイピングで取得するコードを書いていました。"},{title:"三菱UFJインフォメーションテクノロジー株式会社 サマーインターン",term:"2020.8.10〜2020.8.14",body:"ハッカソン形式でアプリケーション開発を行いました。フロントエンドはVue.js、バックエンドはAWSを用いました。フロントエンドを担当しました。"},{title:"株式会社いい生活 サマーインターン",term:"2020.8.17〜2020.8.21",body:"Vue.js, Firebase, いい生活様のAPIを用いたアプリケーション開発をハッカソン形式で行いました。"},{title:"株式会社MOTEX サマーインターン",term:"2020.8.24〜2020.8.28",body:"Python, AWS, ChatWork APIを用いた業務アプリの開発を行いました。"},{title:"ニフティ株式会社 サマーインターン",term:"2020.9.2〜2020.9.4",body:"実務データに近いものを用いてデータ分析を行いました。"},{title:"株式会社ナビタイム サマーインターン",term:"2020.9.7〜2020.9.11",body:"ナビタイムのAPIを用いたWebサイト作成を行いました。"},{title:"N社",term:"2020.mm.dd〜2020.mm.dd",body:"Vue.js/Flask/PostgreSQL/Heroku/推薦アルゴリズムを用いたアプリ開発を行いました。 フロントエンドとバックエンドの開発を担当しました。"},{title:"株式会社ACCESS ウィンターインターン",term:"2020.12.15",body:"chromiumベースのブラウザの機能拡張やUIの作成を行いました。"},{title:"株式会社ACCESS ウィンターインターン",term:"2020.12.15",body:"chromiumベースのブラウザの機能拡張やUIの作成を行いました。"},{title:"NTTコミュニケーションズ k8sハンズオン",term:"2021.1.31",body:""},{title:"CA Web Speed Hackathon 2021",term:"2021.2.7〜2021.2.8",body:""}]}}},i=o,s=(a("1b0e"),a("2877")),l=a("6544"),c=a.n(l),u=a("b0af"),m=a("99d9"),d=a("62ad"),f=a("a523"),b=a("0fd9"),v=a("8414"),p=a("1e06"),h=Object(s["a"])(i,n,r,!1,null,"8ff3e822",null);e["default"]=h.exports;c()(h,{VCard:u["a"],VCardSubtitle:m["b"],VCardText:m["c"],VCol:d["a"],VContainer:f["a"],VRow:b["a"],VTimeline:v["a"],VTimelineItem:p["a"]})},ea4a:function(t,e,a){},f820:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"about"}},[a("span",{staticClass:"head"},[t._v("ABOUT ME")]),a("v-container",{staticClass:"mt-10"},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{align:"center"}},[a("v-card",{attrs:{"max-width":"400"}},[a("v-card-title",{staticClass:"justify-center card-title"},[t._v(t._s(t.aboutMe.name))]),a("v-card-text",[t._v(" "+t._s(t.aboutMe.univ)+" "),a("br"),t._v(" "+t._s(t.aboutMe.hobby)+" "),a("br"),t._v(" "+t._s(t.aboutMe.rank)+" "),a("br"),t._v(" "+t._s(t.aboutMe.email)+" ")]),a("v-card-actions",{staticClass:"justify-center"},[a("a",{attrs:{href:t.aboutMe.github.url,target:"_blank"}},[a("v-btn",{attrs:{icon:""}},[a("v-fa",{attrs:{icon:["fab","github"],size:"2x"}})],1)],1),a("a",{attrs:{href:t.aboutMe.twitter.url,target:"_blank"}},[a("v-btn",{attrs:{icon:""}},[a("v-fa",{attrs:{icon:["fab","twitter"],size:"2x"}})],1)],1),a("a",{attrs:{href:t.aboutMe.atcoder.url,target:"_blank"}},[a("v-btn",{attrs:{outlined:"",color:"grey darken-2",small:"",rounded:""}},[a("v-fa",{attrs:{icon:["fa","link"],size:"lg"}}),t._v(" AtCoder")],1)],1),a("a",{attrs:{href:t.aboutMe.qiita.url,target:"_blank"}},[a("v-btn",{attrs:{outlined:"",color:"grey darken-2",small:"",rounded:""}},[a("v-fa",{attrs:{icon:["fa","link"],size:"lg"}}),t._v(" Qiita ")],1)],1)])],1)],1)],1)],1)],1)},r=[],o={name:"About",data:function(){return{aboutMe:{name:"川北智也",univ:"同志社大学理工学部\nインテリジェント情報工学科",email:"tommycsth61 [at] gmail.com",hobby:"Web開発・競技プログラミング・サイクリング",rank:"AtCoder: 灰 / Paiza: Sランク",twitter:{url:"https://twitter.com/Tomm7282"},github:{url:"https://github.com/momo3159"},atcoder:{url:"https://atcoder.jp/users/Tommy3"},qiita:{url:"https://qiita.com/tommy3"}}}}},i=o,s=(a("e181"),a("2877")),l=a("6544"),c=a.n(l),u=a("8336"),m=a("b0af"),d=a("99d9"),f=a("62ad"),b=a("a523"),v=a("0fd9"),p=Object(s["a"])(i,n,r,!1,null,"05c846ee",null);e["default"]=p.exports;c()(p,{VBtn:u["a"],VCard:m["a"],VCardActions:d["a"],VCardText:d["c"],VCardTitle:d["d"],VCol:f["a"],VContainer:b["a"],VRow:v["a"]})},ffa3:function(t,e,a){t.exports=a.p+"img/c.65aa0b06.svg"}});
//# sourceMappingURL=app.c767d383.js.map