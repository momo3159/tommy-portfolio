(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f7c82cd"],{"0160":function(t,e,i){},"0c54":function(t,e,i){"use strict";var s=i("1ee3"),a=i.n(s);a.a},"132d":function(t,e,i){"use strict";i("7db0"),i("caad"),i("c975"),i("fb6a"),i("45fc"),i("a9e3"),i("2532"),i("498a"),i("c96a");var s,a=i("5530"),n=(i("4804"),i("7e2b")),r=i("a9ad"),o=i("af2b"),l=i("7560"),c=i("80d2"),d=i("2b0e"),h=i("58df");function v(t){return["fas","far","fal","fab","fad"].some((function(e){return t.includes(e)}))}function m(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(s||(s={}));var u=Object(h["a"])(n["a"],r["a"],o["a"],l["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(c["q"])(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(c["n"])(t).find((function(e){return t[e]}));return e&&s[e]||Object(c["e"])(this.size)},getDefaultData:function(){var t={staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(a["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$};return t},applyColors:function(t){t.class=Object(a["a"])(Object(a["a"])({},t.class),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var i=[],s=this.getDefaultData(),a="material-icons",n=t.indexOf("-"),r=n<=-1;r?i.push(t):(a=t.slice(0,n),v(a)&&(a="")),s.class[a]=!0,s.class[t]=!r;var o=this.getSize();return o&&(s.style={fontSize:o}),this.applyColors(s),e(this.hasClickListener?"button":this.tag,s,i)},renderSvgIcon:function(t,e){var i=this.getSize(),s=Object(a["a"])(Object(a["a"])({},this.getDefaultData()),{},{style:i?{fontSize:i,height:i,width:i}:void 0});s.class["v-icon--svg"]=!0,this.applyColors(s);var n={attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:i||"24",width:i||"24",role:"img","aria-hidden":!0}};return e(this.hasClickListener?"button":"span",s,[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var i=this.getDefaultData();i.class["v-icon--is-component"]=!0;var s=this.getSize();s&&(i.style={fontSize:s,height:s,width:s}),this.applyColors(i);var a=t.component;return i.props=t.props,i.nativeOn=i.on,e(a,i)}},render:function(t){var e=this.getIcon();return"string"===typeof e?m(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=d["a"].extend({name:"v-icon",$_wrapperFor:u,functional:!0,render:function(t,e){var i=e.data,s=e.children,a="";return i.domProps&&(a=i.domProps.textContent||i.domProps.innerHTML||a,delete i.domProps.textContent,delete i.domProps.innerHTML),t(u,i,a?[a]:s)}})},"1ee3":function(t,e,i){},4804:function(t,e,i){},"9d26":function(t,e,i){"use strict";var s=i("132d");e["a"]=s["a"]},af2b:function(t,e,i){"use strict";i("c96a");var s=i("2b0e");e["a"]=s["a"].extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium:function(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses:function(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},c96a:function(t,e,i){"use strict";var s=i("23e7"),a=i("857a"),n=i("af03");s({target:"String",proto:!0,forced:n("small")},{small:function(){return a(this,"small","","")}})},e4bb:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"history"},[i("span",{staticClass:"head"},[t._v("HISTORY")]),i("v-app",[i("v-container",{staticClass:"mt-10"},[i("v-row",[i("v-col",[i("v-timeline",{attrs:{dense:t.$vuetify.breakpoint.smAndDown}},[i("v-timeline-item",{attrs:{color:"orange darken-2"}},[i("v-card",{attrs:{color:"orange darken-2","max-width":"600"}},[i("v-card-title",{staticClass:"font-weight-bold text-justify"},[i("span",[t._v(">同志社大学理工学部インテリジェント情報工学科入学")])]),i("v-card-subtitle",{staticClass:"text-left mt-auto"},[t._v("2018.4")]),i("v-card-text",{staticClass:"text-left white mt-auto"},[t._v(" 京田辺キャンパスは自然が豊かでいいところです。ラーネッド記念図書館がお気に入りです。 ")])],1)],1),i("v-timeline-item",[i("v-card",{attrs:{"max-width":"1000",href:"https://rohm.doshisha.ac.jp/attach/page/ROHM-PAGE-JA-59/134605/file/2018_pj.pdf",color:"blue darken-2"}},[i("v-card-title",{staticClass:"font-weight-bold text-justify"},[i("span",[t._v("同志社大学ローム記念館プロジェクト Oh! Do IT!（オムロン株式会社連携）")])]),i("v-card-subtitle",{staticClass:"text-right mt-auto"},[t._v("2018.6〜2019.2")]),i("v-card-text",{staticClass:"text-left white mt-auto"},[t._v(" 「AI×健康」がテーマのプロジェクトでした。プロジェクトでの企画考案やPythonを用いて、FitbitというウェアラブルのフィットネスデバイスのAPIを叩いてデータを取得するコードなどを書いていました。またHeroku を少しだけ触りました。 ")])],1)],1),i("v-timeline-item",{attrs:{color:"orange darken-2"}},[i("v-card",{attrs:{color:"orange darken-2",href:"https://wapiwapi1729.wixsite.com/website"}},[i("v-card-title",{staticClass:"font-weight-bold orange darken-2 text-justify"},[i("span",[t._v("同志社大学ローム記念館プロジェクト WAPLI")])]),i("v-card-subtitle",{staticClass:"text-left mt-auto"},[t._v("2019.4〜2020.2")]),i("v-card-text",{staticClass:"text-left white  mt-auto"},[t._v(" 「同志社大学生の生活をより豊かにする」というテーマのもとで始まったネイティブアプリ開発プロジェクトです。チャットボット作成やPythonを用いて様々なデータをスクレイピングで取得するコードを書いていました。 ")])],1)],1),i("v-timeline-item",[i("v-card",{attrs:{"max-width":"1000",color:"blue darken-2"}},[i("v-card-title",{staticClass:"font-weight-bold text-justify"},[i("span",[t._v("三菱UFJインフォメーションテクノロジー株式会社 サマーインターン")])]),i("v-card-subtitle",{staticClass:"text-right mt-auto"},[t._v("2020.8.10〜2020.8.14")]),i("v-card-text",{staticClass:"text-left white mt-auto"},[t._v(" ハッカソン形式でアプリケーション開発を行いました。フロントエンドはVue.js、バックエンドはAWSを用いました。フロントエンドを担当しました。 ")])],1)],1),i("v-timeline-item",{attrs:{color:"orange darken-2"}},[i("v-card",{attrs:{color:"orange darken-2"}},[i("v-card-title",{staticClass:"font-weight-bold orange darken-2 text-justify"},[i("span",[t._v("株式会社いい生活 サマーインターン")])]),i("v-card-subtitle",{staticClass:"text-right mt-auto"},[t._v("2020.8.17〜2020.8.21")]),i("v-card-text",{staticClass:"text-left white mt-auto"},[t._v(" Vue.js, Firebase, いい生活様のAPIを用いたアプリケーション開発をハッカソン形式で行いました。 ")])],1)],1),i("v-timeline-item",[i("v-card",{attrs:{"max-width":"1000",color:"blue darken-2"}},[i("v-card-title",{staticClass:"font-weight-bold text-justify"},[i("span",[t._v("株式会社MOTEX サマーインターン")])]),i("v-card-subtitle",{staticClass:"text-right mt-auto"},[t._v("2020.8.24〜2020.8.28")]),i("v-card-text",{staticClass:"text-left white mt-auto"},[t._v(" Python, AWS, ChatWork APIを用いた業務アプリの開発を行いました。 ")])],1)],1),i("v-timeline-item",{attrs:{color:"orange darken-2"}},[i("v-card",{attrs:{color:"orange darken-2"}},[i("v-card-title",{staticClass:"font-weight-bold orange darken-2 text-justify"},[i("span",[t._v("ニフティ株式会社 サマーインターン")])]),i("v-card-subtitle",{staticClass:"text-right mt-auto"},[t._v("2020.9.2〜2020.9.4")]),i("v-card-text",{staticClass:"text-left white mt-auto"},[t._v(" 実務データに近いものを用いてデータ分析を行いました。 ")])],1)],1),i("v-timeline-item",[i("v-card",{attrs:{"max-width":"1000",color:"blue darken-2"}},[i("v-card-title",{staticClass:"font-weight-bold text-justify"},[i("span",[t._v("株式会社ナビタイム サマーインターン")])]),i("v-card-subtitle",{staticClass:"text-right mt-auto"},[t._v("2020.9.7〜2020.9.11")]),i("v-card-text",{staticClass:"text-left white mt-auto"},[t._v(" ナビタイムのAPIを用いたWebサイト作成を行いました。 ")])],1)],1),i("v-timeline-item",{attrs:{color:"orange darken-2"}},[i("v-card",{attrs:{color:"orange darken-2"}},[i("v-card-title",{staticClass:"font-weight-bold orange darken-2 text-justify"},[i("span",[t._v("〇〇社")])]),i("v-card-subtitle",{staticClass:"text-right mt-auto"},[t._v("2020.mm.dd〜2020.mm.dd")]),i("v-card-text",{staticClass:"text-left white mt-auto"},[t._v(" Vue.js/Flask/PostgreSQL/Heroku/推薦アルゴリズムを用いたアプリ開発を行いました。 フロントエンドとバックエンドの開発を担当しました。 ")])],1)],1),i("v-timeline-item",[i("v-card",{attrs:{"max-width":"1000",color:"blue darken-2"}},[i("v-card-title",{staticClass:"font-weight-bold text-justify"},[i("span",[t._v("株式会社ACCESS ウィンターインターン")])]),i("v-card-subtitle",{staticClass:"text-right mt-auto"},[t._v("2020.12.15")]),i("v-card-text",{staticClass:"text-left white mt-auto"},[t._v(" chromiumベースのブラウザの機能拡張やUIの作成を行いました。 ")])],1)],1)],1)],1)],1)],1)],1)],1)},a=[],n={name:"History"},r=n,o=(i("0c54"),i("2877")),l=i("6544"),c=i.n(l),d=i("7496"),h=i("b0af"),v=i("99d9"),m=i("62ad"),u=i("a523"),f=i("0fd9"),g=i("5530"),p=(i("0160"),i("58df")),x=i("7560"),b=Object(p["a"])(x["a"]).extend({name:"v-timeline",provide:function(){return{timeline:this}},props:{alignTop:Boolean,dense:Boolean,reverse:Boolean},computed:{classes:function(){return Object(g["a"])({"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense,"v-timeline--reverse":this.reverse},this.themeClasses)}},render:function(t){return t("div",{staticClass:"v-timeline",class:this.classes},this.$slots.default)}}),C=(i("c96a"),i("9d26")),_=i("a9ad"),w=Object(p["a"])(_["a"],x["a"]),k=w.extend().extend({name:"v-timeline-item",inject:["timeline"],props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon:function(){return!!this.icon||!!this.$slots.icon}},methods:{genBody:function(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots.default)},genIcon:function(){return this.$slots.icon?this.$slots.icon:this.$createElement(C["a"],{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot:function(){var t=this.setBackgroundColor(this.color);return this.$createElement("div",Object(g["a"])({staticClass:"v-timeline-item__inner-dot"},t),[this.hasIcon&&this.genIcon()])},genDot:function(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genDivider:function(){var t=[];return this.hideDot||t.push(this.genDot()),this.$createElement("div",{staticClass:"v-timeline-item__divider"},t)},genOpposite:function(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render:function(t){var e=[this.genBody(),this.genDivider()];return this.$slots.opposite&&e.push(this.genOpposite()),t("div",{staticClass:"v-timeline-item",class:Object(g["a"])({"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--before":this.timeline.reverse?this.right:this.left,"v-timeline-item--after":this.timeline.reverse?this.left:this.right},this.themeClasses)},e)}}),j=Object(o["a"])(r,s,a,!1,null,"34e889f8",null);e["default"]=j.exports;c()(j,{VApp:d["a"],VCard:h["a"],VCardSubtitle:v["b"],VCardText:v["c"],VCardTitle:v["d"],VCol:m["a"],VContainer:u["a"],VRow:f["a"],VTimeline:b,VTimelineItem:k})}}]);
//# sourceMappingURL=chunk-2f7c82cd.bc465b72.js.map