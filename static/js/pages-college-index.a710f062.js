(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-college-index"],{"09e6":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"pg-main"},[n("v-uni-view",{staticClass:"tabs"},[n("v-uni-scroll-view",{staticClass:"scroll-h",attrs:{id:"tab-bar","scroll-x":!0,"show-scrollbar":!1,"scroll-into-view":t.scrollInto}},t._l(t.tabBars,(function(e,a){return n("v-uni-view",{key:e.id,staticClass:"uni-tab-item",attrs:{id:e.id,"data-current":a},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ontabtap.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"uni-tab-item-title title-block",class:t.tabIndex==a?"uni-tab-item-title-active":""},[t._v(t._s(e.name))])],1)})),1),t._l(t.contList,(function(e,a){return[n("img",{directives:[{name:"show",rawName:"v-show",value:t.tabIndex===a,expression:"tabIndex===index1"}],key:a+"_0",staticClass:"tab-dtl-img",attrs:{src:"/static/"+t.$store.state.lang+e.val,alt:""}})]}))],2)],1)],1)},d=[]},"63d0":function(t,e,n){"use strict";n.r(e);var a=n("09e6"),i=n("bf89");for(var d in i)"default"!==d&&function(t){n.d(e,t,(function(){return i[t]}))}(d);n("e1e4");var o,l=n("f0c5"),c=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"6d693976",null,!1,a["a"],o);e["default"]=c.exports},6833:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("e2bb"),i={data:function(){return{list:a.College,tabBars:[],contList:[],cacheTab:[],tabIndex:0,scrollInto:"",showTips:!1,navigateFlag:!1,pulling:!1}},components:{},onLoad:function(t){var e=this;e.$store.dispatch("getLang")},onReady:function(){var t=this.$store.state.lang;uni.setNavigationBarTitle({title:a.College["title"][t]}),this.tabBars=a.College["tabBars"][t],this.contList=a.College["contList"][t]},methods:{ontabtap:function(t){var e=t.target.dataset.current||t.currentTarget.dataset.current;this.switchTab(e)},ontabchange:function(t){var e=t.target.current||t.detail.current;this.switchTab(e)},switchTab:function(t){this.tabIndex!==t&&(this.tabIndex=t)}}};e.default=i},a32c:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'.tab-box[data-v-6d693976]{display:flex;flex-direction:row}.tab-nav[data-v-6d693976]{width:%?80?%;background-color:#ededed;display:flex;justify-content:center;align-items:center;align-content:center}.drawer-nav .tab-nav[data-v-6d693976]{background-color:#fff;margin-bottom:%?50?%;justify-content:flex-start}.drawer-menu[data-v-6d693976]{width:50%}.drawer-nav[data-v-6d693976]{padding:%?40?% %?20?% 0 %?40?%}.drawer-nav-btn.active[data-v-6d693976]{color:#e2001a}.d-nav-list[data-v-6d693976]{display:flex;justify-content:flex-start;flex-direction:column;line-height:3}.drawer-nav-btn[data-v-6d693976]{font-size:%?30?%}.uni-page-body[data-v-6d693976]{background-color:#ededed}.tabs[data-v-6d693976]{flex:1;flex-direction:column;overflow:hidden;background-color:#ededed;\n}.uni-swiper-tab[data-v-6d693976]{border-bottom:none}.tab-img-list[data-v-6d693976]{padding:0;margin:0;line-height:0}.scroll-h[data-v-6d693976]{width:%?750?%;height:%?80?%;flex-direction:row;\r\nwhite-space:nowrap\r\n\r\n\t/* flex-wrap: nowrap; */\r\n\t/* border-color: #cccccc;\r\n\t\tborder-bottom-style: solid;\r\n\t\tborder-bottom-width: 1px; */}.line-h[data-v-6d693976]{height:%?1?%;background-color:#ccc}.uni-tab-item[data-v-6d693976]{\r\ndisplay:inline-block;\r\nflex-wrap:nowrap;padding-left:%?34?%;padding-right:%?34?%}.uni-tab-item-title[data-v-6d693976]{color:#555;font-size:%?30?%;height:%?80?%;line-height:%?80?%;flex-wrap:nowrap;\r\nwhite-space:nowrap\n}.uni-tab-item-title-active[data-v-6d693976]{color:#007aff}.swiper-box[data-v-6d693976]{flex:1}.swiper-item[data-v-6d693976]{flex:1;flex-direction:row}.scroll-v[data-v-6d693976]{flex:1;\r\nflex-direction:column;\r\nwidth:%?750?%}.tab-dtl-img[data-v-6d693976]{width:100%}.title-block[data-v-6d693976]{color:#000;background-color:inherit;text-transform:uppercase}.title-block.uni-tab-item-title-active[data-v-6d693976]{position:relative}.title-block.uni-tab-item-title-active[data-v-6d693976]::after{content:"";width:60%;height:%?5?%;background-color:#e2001a;position:absolute;left:20%;bottom:%?-18?%}.content[data-v-6d693976]{display:flex;flex-direction:column;align-items:center;justify-content:center}.pg-main[data-v-6d693976]{width:100%;position:relative\r\n\t/* padding-top: 50upx; */}',""]),t.exports=e},b20a:function(t,e,n){var a=n("a32c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("95689c34",a,!0,{sourceMap:!1,shadowMode:!1})},bf89:function(t,e,n){"use strict";n.r(e);var a=n("6833"),i=n.n(a);for(var d in a)"default"!==d&&function(t){n.d(e,t,(function(){return a[t]}))}(d);e["default"]=i.a},e1e4:function(t,e,n){"use strict";var a=n("b20a"),i=n.n(a);i.a},e2bb:function(t,e){var n={title:{cn:"法国里昂商学院",en:"Global DBA (Asia Track)"},navFix:{home:{cn:{btn:"",link:"/pages/index/index?id=home&lg=cn",title:"首页",key:"home"},en:{btn:"",link:"/pages/index/index?id=home&lg=en",title:"Home",key:"home"}},contact:{cn:{btn:"",link:"/pages/contact/index?id=ct&lg=cn",title:"联系我们",key:"ct"},en:{btn:"",link:"/pages/contact/index?id=ct&lg=en",title:"Contact Us",key:"ct"}}},nav:{cn:[{btn:"/home/nav-1.png",link:"/pages/tablist/index?id=college&lg=",title:"关于学院",key:"college"},{btn:"/home/nav-2.png",link:"/pages/tablist/index?id=project&lg=",title:"关于项目",key:"project"},{btn:"/home/nav-3.png",link:"/pages/tablist/index?id=doctor&lg=",title:"同窗学友",key:"doctor"},{btn:"/home/nav-4.png",link:"/pages/tablist/index?id=study&lg=",title:"学习之旅",key:"study"}],en:[{btn:"/home/nav-1.png",link:"/pages/tablist/index?id=college&lg=",title:"About College",key:"college"},{btn:"/home/nav-2.png",link:"/pages/tablist/index?id=project&lg=",title:"Project",key:"project"},{btn:"/home/nav-3.png",link:"/pages/tablist/index?id=doctor&lg=",title:"Doctor",key:"doctor"},{btn:"/home/nav-4.png",link:"/pages/tablist/index?id=study&lg=",title:"Study",key:"study"}]}},a={id:"college",title:{cn:"关于学院",en:"About College"},tabBars:{cn:[{id:1,name:"学校介绍"},{id:2,name:"世界排名"},{id:3,name:"研究实力"}],en:[{id:1,name:"SCHOOL INTRODUCTION"},{id:2,name:"RANKING"},{id:3,name:"RESEARERCH CENTERS"}]},contList:{cn:[{id:1,val:["/college/1-1.jpg","/college/1-2.jpg","/college/1-3.jpg"]},{id:2,val:["/college/2-1.jpg","/college/2-2.jpg","/college/2-3.jpg"]},{id:3,val:["/college/3-1.jpg","/college/3-2.jpg"]}],en:[{id:1,val:["/college/1-1.jpg","/college/1-2.jpg","/college/1-3.jpg"]},{id:2,val:["/college/2-1.jpg","/college/2-2.jpg","/college/2-3.jpg"]},{id:3,val:["/college/3-1.jpg","/college/3-2.jpg"]}]}},i={id:"project",title:{cn:"关于项目",en:"About Project"},tabBars:{cn:[{id:1,name:"Global DBA"},{id:2,name:"项目特色"},{id:3,name:"学术主任寄语"}],en:[{id:1,name:"Global DBA"},{id:2,name:"Distinctive Program Features"},{id:3,name:"program directors vision"}]},contList:{cn:[{id:1,val:["/project/1-1.jpg","/project/1-2.jpg","/project/1-3.jpg","/project/1-4.jpg"]},{id:2,val:["/project/2-1.jpg","/project/2-2.jpg","/project/2-3.jpg","/project/2-4.jpg"]},{id:3,val:["/project/3-1.jpg","/project/3-2.jpg","/project/3-3.jpg","/project/3-4.jpg"]}],en:[{id:1,val:["/project/1-1.jpg","/project/1-2.jpg","/project/1-3.jpg","/project/1-4.jpg"]},{id:2,val:["/project/2-1.jpg","/project/2-2.jpg","/project/2-3.jpg","/project/2-4.jpg"]},{id:3,val:["/project/3-1.jpg","/project/3-2.jpg","/project/3-3.jpg","/project/3-4.jpg"]}]}},d={id:"doctor",title:{cn:"同窗学友",en:"Student Friend"},titleImg:{cn:"/doctor/tab-title.png",en:"/doctor/tab-title.png"},tabBars:{cn:[{id:1,name:"同窗学友"}],en:[{id:1,name:"STUDENTS PROFILE"}]},contList:{cn:[{id:1,val:["/doctor/1.jpg"]}],en:[{id:1,val:["/doctor/1.jpg"]}]},docList:{cn:[{id:"9",imgUrl:"/doctor/d9.png",name:"张振坤"},{id:"8",imgUrl:"/doctor/d8.png",name:"周月容"},{id:"7",imgUrl:"/doctor/d7.png",name:"高毓霖"},{id:"6",imgUrl:"/doctor/d6.png",name:"马磊"},{id:"5",imgUrl:"/doctor/d5.png",name:"黎永强"},{id:"4",imgUrl:"/doctor/d4.png",name:"周平"},{id:"3",imgUrl:"/doctor/d3.png",name:"唐卫民"},{id:"2",imgUrl:"/doctor/d2.png",name:"刘静晶"},{id:"10",imgUrl:"/doctor/d10.png",name:"林云逸"},{id:"1",imgUrl:"/doctor/d1.png",name:"刘志彬"}],en:[{id:"9",imgUrl:"/doctor/d9.png",name:"张振坤"},{id:"8",imgUrl:"/doctor/d8.png",name:"周月容"},{id:"7",imgUrl:"/doctor/d7.png",name:"高毓霖"},{id:"6",imgUrl:"/doctor/d6.png",name:"马磊"},{id:"5",imgUrl:"/doctor/d5.png",name:"黎永强"},{id:"4",imgUrl:"/doctor/d4.png",name:"周平"},{id:"3",imgUrl:"/doctor/d3.png",name:"唐卫民"},{id:"2",imgUrl:"/doctor/d2.png",name:"刘静晶"},{id:"10",imgUrl:"/doctor/d10.png",name:"林云逸"},{id:"1",imgUrl:"/doctor/d1.png",name:"刘志彬"}]}},o={id:"study",title:{cn:"学习之旅",en:"Learning journey"},tabBars:{cn:[{id:1,name:"课程设置"},{id:2,name:"独家模块"},{id:3,name:"师资力量"},{id:4,name:"申请指南"},{id:5,name:"申请流程"}],en:[{id:1,name:"STUDY PROCESS"},{id:2,name:"Exclusive Module"},{id:3,name:"FACULTY"},{id:4,name:"PROGRAM AT A GLANCE"},{id:5,name:"APPLICATION PROCEDURES"}]},contList:{cn:[{id:1,imgArray:!0,val:["/study/1-1.jpg","/study/1-2.jpg","/study/1-3.jpg","/study/1-4.jpg"]},{id:2,val:["/study/2-1.jpg","/study/2-2.jpg","/study/2-3.jpg","/study/2-4.jpg","/study/2-5.jpg"]},{id:3,val:["/study/3-1.jpg","/study/3-2.jpg","/study/3-3.jpg"]},{id:4,val:["/study/4-1.jpg","/study/4-2.jpg","/study/4-3.jpg","/study/4-4.jpg"]},{id:5,val:["/study/5-1.jpg","/study/5-2.jpg","/study/5-3.jpg","/study/5-4.jpg"],link:["/pages/contact/index?id=ct&lg="]}],en:[{id:1,imgArray:!0,val:["/study/1-1.jpg","/study/1-2.jpg","/study/1-3.jpg","/study/1-4.jpg"]},{id:2,val:["/study/2-1.jpg","/study/2-2.jpg","/study/2-3.jpg","/study/2-4.jpg","/study/2-5.jpg"]},{id:3,val:["/study/3-1.jpg","/study/3-2.jpg","/study/3-3.jpg"]},{id:4,val:["/study/4-1.jpg","/study/4-2.jpg","/study/4-3.jpg","/study/4-4.jpg"]},{id:5,val:["/study/5-1.jpg","/study/5-2.jpg","/study/5-3.jpg","/study/5-4.jpg"],link:["/pages/contact/index?id=ct&lg="]}]}},l={id:"contact",title:{cn:"联系我们",en:"Contact Us"},tip:{cn:"如果您感兴趣，请与我们联系",en:"If you are interested, please contact us"},submit:{cn:"提      交",en:"Submit"},"c-tip":{cn:"招生信息请详询",en:"Contact"},"c-name":{cn:"喻老师 Helen YU",en:"喻老师 Helen YU"},form:{cn:[{type:"text",label:"姓名",name:"name",notnull:!0},{type:"number",label:"手机号",name:"phone",notnull:!0},{type:"email",label:"邮箱",name:"email",notnull:!0},{type:"text",label:"公司",name:"company",notnull:!0},{type:"text",name:"position",label:"职位"},{type:"textarea",name:"mark",label:"附言"}],en:[{type:"text",label:"Name",name:"name",notnull:!0},{type:"phone",label:"Phone Number",name:"phone",notnull:!0},{type:"email",label:"Email",name:"email",notnull:!0},{type:"text",label:"Company",name:"company",notnull:!0},{type:"text",label:"Position",name:"position"},{type:"textarea",label:"Additional comments",name:"mark"}]}};t.exports={Home:n,College:a,Project:i,Doctor:d,Study:o,Contact:l}}}]);