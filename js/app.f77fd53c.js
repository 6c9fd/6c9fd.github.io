(function(t){function e(e){for(var i,r,l=e[0],s=e[1],u=e[2],d=0,h=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&h.push(n[r][0]),n[r]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);c&&c(e);while(h.length)h.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,l=1;l<a.length;l++){var s=a[l];0!==n[s]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},n={app:0},o=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=s;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"21dc":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var i=a("2b0e"),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("Home")],1)},o=[],r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main"},[e("HitPicShow",{attrs:{moudleData:t.form.moduleData}}),e("div",{staticClass:"aside"},[e("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px","label-position":"left"}},[e("el-form-item",{attrs:{label:"上传图片"}},[e("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/",limit:1}},[e("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),e("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png文件，且不超过500kb")])],1)],1),e("el-form-item",{attrs:{label:"添加热区"}},[e("el-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary",plain:""},on:{click:t.showHit}},[t._v("添加热区")]),t._l(t.form.moduleData.hitData,(function(a,i){return e("div",{key:i,staticStyle:{"margin-bottom":"10px"}},[e("el-input",{staticStyle:{width:"700px"},attrs:{placeholder:"请输入链接"},on:{input:function(e){return t.onLink(i)}},model:{value:a.link,callback:function(e){t.$set(a,"link",e)},expression:"item.link"}},[e("template",{slot:"prepend"},[t._v("热区"+t._s(a.index))])],2),e("div",{staticClass:"deleteIcon",staticStyle:{display:"inline-block"},on:{click:function(e){return t.deleteLinkLine(i)}}},[e("i",{staticClass:"el-icon-close"})])],1)}))],2),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("立即创建")]),e("el-button",{on:{click:t.reset}},[t._v("重置表单")])],1)],1)],1)],1)},l=[],s=(a("14d9"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"paperblock"},[e("img",{staticClass:"paper",attrs:{src:t.moudleData.hitSrc,usemap:"#PagePicMap"}}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.moudleData.hitData.length>0,expression:"moudleData.hitData.length > 0"}],staticClass:"pre",style:t.moudleData.style},t._l(t.moudleData.hitData,(function(a,i){return e("vue-draggable-resizable",{key:i,staticClass:"hit-area-item",attrs:{w:a.w,h:a.h,x:a.x,y:a.y,parent:!0,tabindex:"1"},on:{activated:function(e){return t.onActivated(i)},deactivated:t.onDeactivated,dragging:t.onDrag,resizing:t.onResize}},[e("div",{on:{keyup:function(e){return t.deleteMe(e)}}},[t._v(" 热区"+t._s(a.index))])])})),1)])}),u=[],c=a("fb19"),d=a.n(c),h={name:"hitPicShow",props:{moudleData:Object},components:{VueDraggableResizable:d.a},data(){return{width:0,height:0,x:0,y:0,currentArea:-1}},methods:{onActivated(t){this.currentArea=t,console.log(this.currentArea)},onDeactivated(){this.currentArea=-1},onResize(t,e,a,i){this.moudleData.hitData[this.currentArea].x=t,this.moudleData.hitData[this.currentArea].y=e,this.moudleData.hitData[this.currentArea].w=a,this.moudleData.hitData[this.currentArea].h=i},onDrag(t,e){this.moudleData.hitData[this.currentArea].x=t,this.moudleData.hitData[this.currentArea].y=e},deleteMe(t){console.log(t),this.moudleData.hitData.splice(t,1)},addHit(t){var e=0;if(this.moudleData.hitData.length>0){var a=this.moudleData.hitData.length;e=this.moudleData.hitData[a-1].index,e++}this.moudleData.hitData.push({x:t.layerX,y:t.layerY,w:100,h:100,link:"",linkText:"",index:e}),"link"==this.moudleData.mode&&(this.moudleData.mode="hit")}}},p=h,m=(a("c40e"),a("2877")),f=Object(m["a"])(p,s,u,!1,null,"f8782c2e",null),b=f.exports,D={components:{HitPicShow:b},data(){return{form:{moduleData:{height:"375",hitData:[],hitSrc:"https://hbrb.hebnews.cn/pc/paper/p/202304/26/b1f76d98-fd14-42fb-9d30-4ea327c7e01c.jpg",hover:!0,link:"",linkText:"",style:"width: 383px;height: 544px;zoom:1.3055"},introtitle:"",title:"",subtitle:"",attachment:[],papercontent:""}}},methods:{onSubmit(){console.log("submit!")},handleAvatarSuccess(t,e){console.log(t,e),this.imageUrl=URL.createObjectURL(e.raw)},showHit(){var t=0;if(this.form.moduleData.hitData.length>0){var e=this.form.moduleData.hitData.length;t=this.form.moduleData.hitData[e-1].index,t++}this.form.moduleData.hitData.push({x:0,y:0,w:100,h:100,link:"",linkText:"",index:t})},deleteLinkLine(t){this.form.moduleData.hitData.splice(t,1)},onLink(t,e){this.form.moduleData.hitData[t].link=e.detail}}},v=D,g=(a("9f93"),Object(m["a"])(v,r,l,!1,null,"46b788c4",null)),y=g.exports,x={name:"App",components:{Home:y}},w=x,k=Object(m["a"])(w,n,o,!1,null,null,null),_=k.exports,j=a("8c4f");i["default"].use(j["a"]);const S=[{path:"/",name:"home",component:y}],O=new j["a"]({routes:S});var A=O,P=a("5c96"),C=a.n(P),z=(a("0fae"),a("bc3a")),L=a.n(z),H=(a("278f"),a("21dc"),a("e7ec")),M=a.n(H),T=a("42b5"),R=a.n(T);i["default"].config.productionTip=!1,i["default"].prototype.$axios=L.a,i["default"].use(C.a),i["default"].use(M.a),i["default"].use(R.a),i["default"].component("vue-draggable-resizable",d.a),new i["default"]({router:A,render:t=>t(_)}).$mount("#app")},"628b":function(t,e,a){},"9f93":function(t,e,a){"use strict";a("f426")},c40e:function(t,e,a){"use strict";a("628b")},f426:function(t,e,a){}});
//# sourceMappingURL=app.f77fd53c.js.map