(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6bf482d6"],{1822:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"works"},[i("span",{staticClass:"head"},[t._v("WORKS")]),i("v-app",[i("v-container",{staticClass:"mt-10"},[i("v-row",t._l(t.works,(function(e){return i("v-col",{key:e.link,attrs:{cols:"12",xs:"12",sm:"6",md:"4",lg:"4",align:"center"}},[i("v-card",{staticClass:"card",attrs:{width:"500"}},[i("v-card-title",[t._v(t._s(e.name))]),i("v-card-subtitle",[t._v(t._s(e.lang)),i("br"),t._v(t._s(e.year))]),i("v-card-text",{staticClass:"text-left mt-auto"},[t._v(t._s(e.content))]),i("v-card-actions",[i("v-btn",{attrs:{text:"",color:"deep-purple accent-4",href:e.link}},[i("v-fa",{attrs:{icon:["fab","github"],size:"lg",pull:"left"}}),t._v("github ")],1)],1)],1)],1)})),1)],1)],1)],1)},s=[],a={name:"Works",data:function(){return{works:[{name:"ポートフォリオ",lang:"HTML/CSS/vue.js",content:"ポートフォリオです。フロントエンドに（ほぼ）初挑戦で作りました。SPA対応などに挑戦しました。",link:"https://github.com/momo3159/tommy-portfolio"},{name:"読書管理アプリ",lang:"HTML/CSS/JavaScript",content:"google books apiを用いました。本を何%読んだかを記録します。これもvue.jsで書き換えたいと思っています。",link:"https://github.com/momo3159/Reading-Progress-Management.io"},{name:"テトリス",lang:"Java/JavaFx",content:"テトリスを自作しました。",link:"https://github.com/momo3159/BlockGame"}]}}},r=a,o=(i("9a87"),i("2877")),l=i("6544"),c=i.n(l),u=i("7496"),h=(i("4160"),i("caad"),i("c7cd"),i("53ca")),d=i("3835"),v=i("5530"),f=(i("86cc"),i("10d2")),b=i("22da"),g=i("ade3"),m=i("3206");function p(t,e,i){var n=Object(m["a"])(t,e,i).extend({name:"groupable",props:{activeClass:{type:String,default:function(){if(this[t])return this[t].activeClass}},disabled:Boolean},data:function(){return{isActive:!1}},computed:{groupClasses:function(){return this.activeClass?Object(g["a"])({},this.activeClass,this.isActive):{}}},created:function(){this[t]&&this[t].register(this)},beforeDestroy:function(){this[t]&&this[t].unregister(this)},methods:{toggle:function(){this.$emit("change")}}});return n}p("itemGroup");var x=i("2b0e");function C(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input";return x["a"].extend({name:"toggleable",model:{prop:e,event:i},props:Object(g["a"])({},e,{required:!1}),data:function(){return{isActive:!!this[e]}},watch:(t={},Object(g["a"])(t,e,(function(t){this.isActive=!!t})),Object(g["a"])(t,"isActive",(function(t){!!t!==this[e]&&this.$emit(i,t)})),t)})}C();var S=i("fe6c"),w=i("1c87"),k=i("af2b"),B=i("58df"),y=i("d9bd"),z=Object(B["a"])(f["a"],w["a"],S["a"],k["a"],p("btnToggle"),C("inputValue")),O=z.extend().extend({name:"v-btn",props:{activeClass:{type:String,default:function(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:function(){return{proxyClass:"v-btn--active"}},computed:{classes:function(){return Object(v["a"])(Object(v["a"])(Object(v["a"])(Object(v["a"])(Object(v["a"])({"v-btn":!0},w["a"].options.computed.classes.call(this)),{},{"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--contained":this.contained,"v-btn--depressed":this.depressed||this.outlined,"v-btn--disabled":this.disabled,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--flat":this.isFlat,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top},this.themeClasses),this.groupClasses),this.elevationClasses),this.sizeableClasses)},contained:function(){return Boolean(!this.isFlat&&!this.depressed&&!this.elevation)},computedRipple:function(){var t=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=this.ripple?this.ripple:t)},isFlat:function(){return Boolean(this.icon||this.text||this.outlined)},isRound:function(){return Boolean(this.icon||this.fab)},styles:function(){return Object(v["a"])({},this.measurableStyles)}},created:function(){var t=this,e=[["flat","text"],["outline","outlined"],["round","rounded"]];e.forEach((function(e){var i=Object(d["a"])(e,2),n=i[0],s=i[1];t.$attrs.hasOwnProperty(n)&&Object(y["a"])(n,s,t)}))},methods:{click:function(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent:function(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader:function(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(b["a"],{props:{indeterminate:!0,size:23,width:2}})])}},render:function(t){var e=[this.genContent(),this.loading&&this.genLoader()],i=this.isFlat?this.setTextColor:this.setBackgroundColor,n=this.generateRouteLink(),s=n.tag,a=n.data;return"button"===s&&(a.attrs.type=this.type,a.attrs.disabled=this.disabled),a.attrs.value=["string","number"].includes(Object(h["a"])(this.value))?this.value:JSON.stringify(this.value),t(s,this.disabled?a:i(this.color,a),e)}}),j=i("b0af"),_=i("99d9"),$=i("62ad"),V=i("a523"),T=i("0fd9"),A=Object(o["a"])(r,n,s,!1,null,"36562af8",null);e["default"]=A.exports;c()(A,{VApp:u["a"],VBtn:O,VCard:j["a"],VCardActions:_["a"],VCardSubtitle:_["b"],VCardText:_["c"],VCardTitle:_["d"],VCol:$["a"],VContainer:V["a"],VRow:T["a"]})},"22da":function(t,e,i){"use strict";var n=i("490a");e["a"]=n["a"]},3206:function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return l}));i("99af");var n=i("ade3"),s=i("2b0e"),a=i("d9bd");function r(t,e){return function(){return Object(a["c"])("The ".concat(t," component must be used inside a ").concat(e))}}function o(t,e,i){var a=e&&i?{register:r(e,i),unregister:r(e,i)}:null;return s["a"].extend({name:"registrable-inject",inject:Object(n["a"])({},t,{default:a})})}function l(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return s["a"].extend({name:"registrable-provide",methods:e?{}:{register:null,unregister:null},provide:function(){return Object(n["a"])({},t,e?this:{register:this.register,unregister:this.unregister})}})}},"490a":function(t,e,i){"use strict";i("99af"),i("a9e3"),i("8d4f");var n=i("a9ad"),s=i("80d2");e["a"]=n["a"].extend({name:"v-progress-circular",props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:function(){return{radius:20}},computed:{calculatedSize:function(){return Number(this.size)+(this.button?8:0)},circumference:function(){return 2*Math.PI*this.radius},classes:function(){return{"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray:function(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset:function(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth:function(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles:function(){return{height:Object(s["e"])(this.calculatedSize),width:Object(s["e"])(this.calculatedSize)}},svgStyles:function(){return{transform:"rotate(".concat(Number(this.rotate),"deg)")}},viewBoxSize:function(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle:function(t,e){return this.$createElement("circle",{class:"v-progress-circular__".concat(t),attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg:function(){var t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"".concat(this.viewBoxSize," ").concat(this.viewBoxSize," ").concat(2*this.viewBoxSize," ").concat(2*this.viewBoxSize)}},t)},genInfo:function(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},"86cc":function(t,e,i){},"8d4f":function(t,e,i){},"9a87":function(t,e,i){"use strict";var n=i("fe93"),s=i.n(n);s.a},af2b:function(t,e,i){"use strict";i("c96a");var n=i("2b0e");e["a"]=n["a"].extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium:function(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses:function(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},c96a:function(t,e,i){"use strict";var n=i("23e7"),s=i("857a"),a=i("af03");n({target:"String",proto:!0,forced:a("small")},{small:function(){return s(this,"small","","")}})},fe93:function(t,e,i){}}]);
//# sourceMappingURL=chunk-6bf482d6.7aae9c57.js.map