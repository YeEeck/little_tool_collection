(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"4e4d":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("分数化简器")]),t._m(0),n("FS")],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h4",[t._v(" 注意："),n("br"),t._v("对大于 "),n("span",{staticStyle:{color:"red"}},[t._v("9007199254740991")]),t._v(" 或小于 "),n("span",{staticStyle:{color:"red"}},[t._v("-9007199254740991")]),t._v(" 的数"),n("br"),t._v("计算时结果将不再可靠 ")])}],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"FS"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.numA,expression:"numA"}],attrs:{type:"text"},domProps:{value:t.numA},on:{input:function(e){e.target.composing||(t.numA=e.target.value)}}}),t._v(" / "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.numB,expression:"numB"}],attrs:{type:"text"},domProps:{value:t.numB},on:{input:function(e){e.target.composing||(t.numB=e.target.value)}}}),n("br"),n("br"),n("button",{staticStyle:{width:"6em",height:"2.5em"},on:{click:t.simp}},[t._v("化简")]),n("br"),n("br"),t._v(" 最简分数："),n("input",{directives:[{name:"model",rawName:"v-model",value:t.res,expression:"res"}],class:{width:t.getResWidth},staticStyle:{width:"8em"},attrs:{id:"res",type:"text",readonly:"readonly"},domProps:{value:t.res},on:{input:function(e){e.target.composing||(t.res=e.target.value)}}})])},a=[];function u(t,e){return 0==e?t:u(e,t%e)}var o={name:"FS",data:function(){return{numA:"",numB:"",res:"",resWidth:24}},computed:{getResWidth:function(){return this.resWidth+"px"}},methods:{simp:function(){var t,e=this.numA,n=this.numB;while(1!=(t=u(e,n)))e/=t,n/=t;this.res=e+" / "+n,this.resWidth=8*this.res.length+"px"}}},l=o,c=(n("b10c"),n("2877")),m=Object(c["a"])(l,s,a,!1,null,null,null),d=m.exports,p={name:"FractionalSimplification",components:{FS:d}},v=p,h=Object(c["a"])(v,i,r,!1,null,null,null);e["default"]=h.exports},5256:function(t,e,n){},b10c:function(t,e,n){"use strict";n("5256")}}]);
//# sourceMappingURL=about.168933b1.js.map