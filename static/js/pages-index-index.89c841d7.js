(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"09bb":function(t,n,e){"use strict";e.r(n);var i=e("9610"),a=e("1d9f");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("39a1");var l,c=e("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"1b00aa4c",null,!1,i["a"],l);n["default"]=s.exports},"1d9f":function(t,n,e){"use strict";e.r(n);var i=e("83f1"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},"27ef":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */uni-page-body[data-v-56e31110],\nbody[data-v-56e31110]{min-height:100%;height:inherit}.content[data-v-56e31110]{height:100%;\n\t/* background: url(../../static/cn/home/1.jpg) no-repeat 50% bottom; */background-repeat:no-repeat;background-position:50% top;background-size:cover;display:flex;flex-direction:column;align-items:center;justify-content:center}.pg-main[data-v-56e31110]{height:100%;width:100%;position:relative}.logo-type[data-v-56e31110],\n.logo[data-v-56e31110]{position:absolute;top:0;right:0;width:%?150?%}.logo-type[data-v-56e31110]{top:2%;right:auto;left:3%}.nav-box[data-v-56e31110]{width:%?500?%;position:absolute;top:45%;left:8%;display:flex;justify-content:flex-start;align-items:center;align-content:center;flex-direction:row;flex-wrap:wrap}.nav-btn[data-v-56e31110]{width:45%;height:calc(width * 1);margin:0 %?10?%}.nav-btn[data-v-56e31110]:nth-child(3),\n.nav-btn[data-v-56e31110]:nth-child(4){top:-12px;position:relative}.nav-btn-img[data-v-56e31110]{display:inline-block;width:100%}.pg-img[data-v-56e31110]{width:100%;display:block}",""]),t.exports=n},"39a1":function(t,n,e){"use strict";var i=e("afe7"),a=e.n(i);a.a},"47f3":function(t,n,e){"use strict";var i=e("dd13"),a=e.n(i);a.a},"83f1":function(t,n,e){"use strict";e("ac1f"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("e2bb"),a={name:"drag-button",props:{isDock:{type:Boolean,default:!1},existTabBar:{type:Boolean,default:!1}},data:function(){return{navFix:i.Home.navFix,top:0,left:0,width:0,height:0,offsetWidth:0,offsetHeight:0,windowWidth:0,windowHeight:0,isMove:!0,edge:15,text:"按钮"}},mounted:function(){var t=this,n=uni.getSystemInfoSync();this.windowWidth=n.windowWidth,this.windowHeight=n.windowHeight,n.windowTop&&(this.windowHeight+=n.windowTop),console.log(n);var e=uni.createSelectorQuery().in(this);e.select("#_drag_button").boundingClientRect((function(n){t.width=n.width,t.height=n.height,t.offsetWidth=n.width/2,t.offsetHeight=n.height/2,t.left=t.windowWidth-t.width-t.edge,t.top=(t.windowHeight-t.height)/1.4})).exec()},methods:{click:function(){var t=this;uni.navigateTo({url:t.navFix["contact"][t.$store.state.lang]["link"]})},touchstart:function(t){},touchmove:function(t){if(1!==t.touches.length)return!1;this.isMove=!0,this.left=t.touches[0].clientX-this.offsetWidth;var n=t.touches[0].clientY-this.offsetHeight;n+=this.height;var e=this.windowHeight-this.height-this.edge;n<this.edge?this.top=this.edge:this.top=n>e?e:n},touchend:function(t){if(this.isDock){var n=this.windowWidth-this.width-this.edge;this.left<this.windowWidth/2-this.offsetWidth?this.left=this.edge:this.left=n}this.isMove=!1,this.$emit("btnTouchend")}}};n.default=a},8486:function(t,n,e){"use strict";e.r(n);var i=e("acc3"),a=e("b3fc");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("47f3");var l,c=e("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"56e31110",null,!1,i["a"],l);n["default"]=s.exports},9610:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-view",{staticClass:"drag",class:{transition:t.isDock&&!t.isMove},style:"left: "+t.left+"px; top:"+t.top+"px;",attrs:{id:"_drag_button"},on:{touchmove:function(n){n.stopPropagation(),n.preventDefault(),arguments[0]=n=t.$handleEvent(n),t.touchmove.apply(void 0,arguments)},click:function(n){n.stopPropagation(),n.preventDefault(),arguments[0]=n=t.$handleEvent(n),t.click.apply(void 0,arguments)}}},[e("img",{staticClass:"drag-btn",attrs:{src:"/static/msg-btn.png",alt:""}})])],1)},o=[]},acc3:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var i={dragButton:e("09bb").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"content",style:{"background-image":"url(/static/"+t.$store.state.lang+"/home/1.jpg)"}},[e("v-uni-view",{staticClass:"pg-main"},[e("img",{staticClass:"logo-type",attrs:{"lazy-load":"true",src:"/static/logo-type.png"}}),e("img",{staticClass:"logo",attrs:{"lazy-load":"true",src:"/static/logo.png"}}),t.$lgChane?e("v-uni-view",{staticClass:"lang-box"},["en"==t.$store.state.lang?e("v-uni-view",{staticClass:"lg-btn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.setLang("cn")}}},[t._v("中文")]):t._e(),"cn"==t.$store.state.lang?e("v-uni-view",{staticClass:"lg-btn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.setLang("en")}}},[t._v("EN")]):t._e()],1):t._e(),e("v-uni-view",{staticClass:"nav-box"},[t._l(t.list["nav"][t.$store.state.lang],(function(n,i){return[e("v-uni-navigator",{key:i+"_0",staticClass:"nav-btn",attrs:{url:n.link+t.$store.state.lang}},[e("img",{staticClass:"nav-btn-img",attrs:{"lazy-load":"true",src:"/static/"+t.$store.state.lang+n.btn,mode:"aspectFit",alt:n.title}})])]}))],2),e("drag-button",{attrs:{isDock:!0,existTabBar:!0}})],1)],1)},o=[]},afe7:function(t,n,e){var i=e("c943");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("63d6a180",i,!0,{sourceMap:!1,shadowMode:!1})},b3fc:function(t,n,e){"use strict";e.r(n);var i=e("c136"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},c136:function(t,n,e){"use strict";var i=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("cf34")),o=e("e2bb"),l=i(e("09bb")),c=a.default.module,s=a.default.Interface,d=(s.apiurl,{data:function(){return{list:o.Home}},components:{dragButton:l.default},onLoad:function(t){var n=this;n.$store.dispatch("getLang"),this.$store.state.isWeixin;var e="http://emlyon.meetji.com",i="法国里昂商学院",a="全球工商管理博士项目",o="http://emlyon.meetji.com/static/logo.png";c.wxShare(e,i,o,a)},onReady:function(){},methods:{getApp:function(t){console.log(t)},setLang:function(t){var n=this;uni.setStorage({key:"DBA-Lang",data:t,success:function(){var e=t||"cn";n.$store.state.lang=e,n.$store.dispatch("getLang"),uni.setNavigationBarTitle({title:n.list["title"][n.$store.state.lang]})},fail:function(){}})}}});n.default=d},c943:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.drag[data-v-1b00aa4c]{display:flex;justify-content:center;align-items:center;background-color:rgba(0,0,0,.5);box-shadow:0 0 %?6?% rgba(0,0,0,.4);color:#fff;width:%?100?%;height:%?100?%;border-radius:50%;font-size:%?24?%;position:fixed;z-index:999999}.drag.transition[data-v-1b00aa4c]{transition:left .3s ease,top .3s ease}.drag .drag-btn[data-v-1b00aa4c]{width:100%;height:100%}',""]),t.exports=n},dd13:function(t,n,e){var i=e("27ef");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("18eb4949",i,!0,{sourceMap:!1,shadowMode:!1})},e2bb:function(t,n){var e={title:{cn:"法国里昂商学院",en:"Global DBA (Asia Track)"},navFix:{home:{cn:{btn:"",link:"/pages/index/index?id=home&lg=cn",title:"首页",key:"home"},en:{btn:"",link:"/pages/index/index?id=home&lg=en",title:"Home",key:"home"}},contact:{cn:{btn:"",link:"/pages/contact/index?id=ct&lg=cn",title:"联系我们",key:"ct"},en:{btn:"",link:"/pages/contact/index?id=ct&lg=en",title:"Contact Us",key:"ct"}}},nav:{cn:[{btn:"/home/nav-1.png",link:"/pages/tablist/index?id=college&lg=",title:"关于学院",key:"college"},{btn:"/home/nav-2.png",link:"/pages/tablist/index?id=project&lg=",title:"关于项目",key:"project"},{btn:"/home/nav-3.png",link:"/pages/tablist/index?id=doctor&lg=",title:"同窗学友",key:"doctor"},{btn:"/home/nav-4.png",link:"/pages/tablist/index?id=study&lg=",title:"学习之旅",key:"study"}],en:[{btn:"/home/nav-1.png",link:"/pages/tablist/index?id=college&lg=",title:"About College",key:"college"},{btn:"/home/nav-2.png",link:"/pages/tablist/index?id=project&lg=",title:"Project",key:"project"},{btn:"/home/nav-3.png",link:"/pages/tablist/index?id=doctor&lg=",title:"Doctor",key:"doctor"},{btn:"/home/nav-4.png",link:"/pages/tablist/index?id=study&lg=",title:"Study",key:"study"}]}},i={id:"college",title:{cn:"关于学院",en:"About College"},tabBars:{cn:[{id:1,name:"学校介绍"},{id:2,name:"世界排名"},{id:3,name:"研究实力"}],en:[{id:1,name:"SCHOOL INTRODUCTION"},{id:2,name:"RANKING"},{id:3,name:"RESEARERCH CENTERS"}]},contList:{cn:[{id:1,val:["/college/1-1.jpg","/college/1-2.jpg","/college/1-3.jpg"]},{id:2,val:["/college/2-1.jpg","/college/2-2.jpg","/college/2-3.jpg"]},{id:3,val:["/college/3-1.jpg","/college/3-2.jpg"]}],en:[{id:1,val:["/college/1-1.jpg","/college/1-2.jpg","/college/1-3.jpg"]},{id:2,val:["/college/2-1.jpg","/college/2-2.jpg","/college/2-3.jpg"]},{id:3,val:["/college/3-1.jpg","/college/3-2.jpg"]}]}},a={id:"project",title:{cn:"关于项目",en:"About Project"},tabBars:{cn:[{id:1,name:"Global DBA"},{id:2,name:"项目特色"},{id:3,name:"学术主任寄语"}],en:[{id:1,name:"Global DBA"}]},contList:{cn:[{id:1,val:["/project/1-1.jpg","/project/1-2.jpg","/project/1-3.jpg","/project/1-4.jpg"]},{id:2,val:["/project/2-1.jpg","/project/2-2.jpg","/project/2-3.jpg","/project/2-4.jpg"]},{id:3,val:["/project/3-1.jpg","/project/3-2.jpg","/project/3-3.jpg","/project/3-4.jpg"]}],en:[{id:1,val:"aaa"}]}},o={id:"doctor",title:{cn:"同窗学友",en:"Student Friend"},titleImg:{cn:"/doctor/tab-title.png",en:"/doctor/tab-title.png"},tabBars:{cn:[{id:1,name:"同窗学友"}],en:[{id:1,name:"Global DBA"}]},contList:{cn:[{id:1,val:["/doctor/1.jpg"]}],en:[{id:1,val:["/doctor/1.jpg"]}]},docList:{cn:[{id:"9",imgUrl:"/static/cn/doctor/d9.png",name:"张振坤"},{id:"8",imgUrl:"/static/cn/doctor/d8.png",name:"周月容"},{id:"7",imgUrl:"/static/cn/doctor/d7.png",name:"高毓霖"},{id:"6",imgUrl:"/static/cn/doctor/d6.png",name:"马磊"},{id:"5",imgUrl:"/static/cn/doctor/d5.png",name:"黎永强"},{id:"4",imgUrl:"/static/cn/doctor/d4.png",name:"周平"},{id:"3",imgUrl:"/static/cn/doctor/d3.png",name:"唐卫民"},{id:"2",imgUrl:"/static/cn/doctor/d2.png",name:"刘静晶"},{id:"10",imgUrl:"/static/cn/doctor/d10.png",name:"林云逸"},{id:"1",imgUrl:"/static/cn/doctor/d1.png",name:"刘志彬"}],en:[{id:"1",imgUrl:""}]}},l={id:"study",title:{cn:"学习之旅",en:"Learning journey"},tabBars:{cn:[{id:1,name:"课程设置"},{id:2,name:"独家模块"},{id:3,name:"师资力量"},{id:4,name:"申请指南"},{id:5,name:"申请流程"}],en:[{id:1,name:"Global DBA"}]},contList:{cn:[{id:1,imgArray:!0,val:["/study/1-1.jpg","/study/1-2.jpg","/study/1-3.jpg","/study/1-4.jpg"]},{id:2,val:["/study/2-1.jpg","/study/2-2.jpg","/study/2-3.jpg","/study/2-4.jpg","/study/2-5.jpg"]},{id:3,val:["/study/3-1.jpg","/study/3-2.jpg","/study/3-3.jpg"]},{id:4,val:["/study/4-1.jpg","/study/4-2.jpg","/study/4-3.jpg","/study/4-4.jpg"]},{id:5,val:["/study/5-1.jpg","/study/5-2.jpg","/study/5-3.jpg","/study/5-4.jpg"],link:["/pages/contact/index?id=ct&lg="]}],en:[{id:1,val:"aaa"}]}},c={id:"contact",title:{cn:"联系我们",en:"Contact Us"},tip:{cn:"如果您感兴趣，请与我们联系",en:"If you are interested, contact us"},submit:{cn:"提      交",en:"Submit"},"c-tip":{cn:"招生信息请详询",en:"Please Contact"},"c-name":{cn:"喻老师 Helen YU",en:"喻老师 Helen YU"},form:{cn:[{type:"text",label:"姓名",name:"name",notnull:!0},{type:"number",label:"手机号",name:"phone",notnull:!0},{type:"email",label:"邮箱",name:"email",notnull:!0},{type:"text",label:"公司",name:"company",notnull:!0},{type:"text",name:"position",label:"职位"},{type:"textarea",name:"mark",label:"附言"}],en:[{type:"text",label:"Name",name:"name",notnull:!0},{type:"phone",label:"Phone",name:"phone",notnull:!0},{type:"email",label:"Email",name:"email",notnull:!0},{type:"text",label:"Company",name:"company",notnull:!0},{type:"text",label:"Position",name:"position"},{type:"textarea",name:"mark",label:"Mark"}]}};t.exports={Home:e,College:i,Project:a,Doctor:o,Study:l,Contact:c}}}]);