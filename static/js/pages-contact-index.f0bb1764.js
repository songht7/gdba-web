(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-contact-index"],{"0c27":function(t,e,n){"use strict";var a=n("e3e4"),i=n.n(a);i.a},"0d9c":function(t,e,n){"use strict";n.r(e);var a=n("12b6"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"12b6":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"UniDrawer",props:{visible:{type:Boolean,default:!1},mode:{type:String,default:""},mask:{type:Boolean,default:!0}},data:function(){return{visibleSync:!1,showDrawer:!1,rightMode:!1,watchTimer:null}},watch:{visible:function(t){t?this.open():this.close()}},created:function(){var t=this;this.visibleSync=this.visible,setTimeout((function(){t.showDrawer=t.visible}),100),this.rightMode="right"===this.mode},methods:{close:function(){this._change("showDrawer","visibleSync",!1)},open:function(){this._change("visibleSync","showDrawer",!0)},_change:function(t,e,n){var a=this;this[t]=n,this.watchTimer&&clearTimeout(this.watchTimer),this.watchTimer=setTimeout((function(){a[e]=n,a.$emit(n?"open":"close")}),n?50:300)}}};e.default=a},"1ee3":function(t,e,n){"use strict";var a=n("21da"),i=n.n(a);i.a},"21da":function(t,e,n){var a=n("c6a0");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("f406434c",a,!0,{sourceMap:!1,shadowMode:!1})},2362:function(t,e,n){"use strict";n.r(e);var a=n("f6d1"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"2fa0":function(t,e,n){"use strict";n.r(e);var a=n("b1f5"),i=n("0d9c");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("0c27");var r,s=n("f0c5"),l=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"51c0b3ca",null,!1,a["a"],r);e["default"]=l.exports},"5e6c":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={uniDrawer:n("2fa0").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content",style:{"background-image":"url(/static/"+t.$store.state.lang+"/contact/bg.png)"}},[n("v-uni-view",{staticClass:"pg-main"},[n("v-uni-view",{staticClass:"tab-box"},[n("v-uni-view",{staticClass:"tab-nav",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.drawerShow()}}},[n("img",{staticClass:"drawer-menu",attrs:{src:"/static/menu.png"}})]),n("v-uni-view",{staticClass:"tabs"},[n("v-uni-scroll-view",{staticClass:"scroll-h",attrs:{id:"tab-bar","scroll-x":!0,"show-scrollbar":!1}},[n("v-uni-view",{staticClass:"uni-tab-item"},[n("v-uni-text",{staticClass:"uni-tab-item-title uni-tab-item-title-active title-block"},[t._v(t._s(t.list.title[t.$store.state.lang]))])],1)],1),void 0],2)],1),n("v-uni-view",{staticClass:"form-box"},[n("v-uni-form",{on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.formSubmit.apply(void 0,arguments)},reset:function(e){arguments[0]=e=t.$handleEvent(e),t.formReset.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"form-tip"},[t._v(t._s(t.list["tip"][t.$store.state.lang]))]),n("v-uni-view",{staticClass:"form-block uni-list-box"},[n("v-uni-view",{staticClass:"form-row"},[t._l(t.list["form"][t.$store.state.lang],(function(e,a){return[n("v-uni-view",{key:a+"_0",staticClass:"uni-list-block"},[n("v-uni-view",{staticClass:"uni-list-left"},[e.notnull?n("v-uni-text",[t._v("*")]):t._e(),t._v(t._s(e.label))],1),n("v-uni-view",{staticClass:"uni-list-right"},[n("v-uni-input",{staticClass:"uni-input u-ipt",attrs:{name:e.name,type:e.type,placeholder:"",value:""}})],1)],1)]}))],2),n("v-uni-button",{staticClass:"submit-btn",attrs:{formType:"submit",loading:t.loading}},[t._v(t._s(t.list["submit"][t.$store.state.lang]))])],1)],1),n("v-uni-view",{staticClass:"form-block contact-info"},[n("v-uni-view",{staticClass:"c-block c-left"},[n("v-uni-view",{staticClass:"c-init"},[n("v-uni-view",{staticClass:"c-row c-tip"},[t._v(t._s(t.list["c-tip"][t.$store.state.lang]))]),n("v-uni-view",{staticClass:"c-row c-name"},[t._v(t._s(t.list["c-name"][t.$store.state.lang]))])],1)],1),n("v-uni-view",{staticClass:"c-block c-right"},[n("v-uni-view",{staticClass:"c-row c-phone",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.phoneCall("+86 13764186470")}}},[t._v("+86 137 6418 6470")]),n("v-uni-view",{staticClass:"c-row c-email"},[n("a",{staticClass:"mailto",attrs:{href:"mailto:DBA@em-lyon.com.cn"}},[t._v("DBA@em-lyon.com.cn")])])],1)],1)],1),n("v-uni-view",{},[n("img",{staticClass:"img-full",attrs:{src:"/static/footer-logos.jpg"}})])],1),n("uni-drawer",{attrs:{visible:t.showLeft,mode:"left"},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.drawerHide("left")}}},[n("v-uni-view",{staticClass:"drawer-nav"},[n("v-uni-view",{staticClass:"d-nav-list"},[n("v-uni-view",{staticClass:"tab-nav",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.drawerHide()}}},[n("img",{staticClass:"drawer-menu",attrs:{src:"/static/menu.png"}})]),n("v-uni-navigator",{staticClass:"drawer-nav-btn",attrs:{url:t.navFix["home"][t.$store.state.lang]["link"]}},[t._v(t._s(t.navFix["home"][t.$store.state.lang]["title"]))]),t._l(t.nav[t.$store.state.lang],(function(e,a){return[n("v-uni-navigator",{key:a+"_0",class:["drawer-nav-btn",e.key==t.pageis?"active":""],attrs:{url:e.link+t.$store.state.lang}},[t._v(t._s(e.title))])]})),n("v-uni-navigator",{class:["drawer-nav-btn","active"],attrs:{url:t.navFix["contact"][t.$store.state.lang]["link"]}},[t._v(t._s(t.navFix["contact"][t.$store.state.lang]["title"]))]),t.$lgChane?n("v-uni-view",{staticClass:"lang-box"},["en"==t.$store.state.lang?n("v-uni-view",{staticClass:"lg-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setLang("cn")}}},[t._v("中文")]):t._e(),"cn"==t.$store.state.lang?n("v-uni-view",{staticClass:"lg-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setLang("en")}}},[t._v("EN")]):t._e()],1):t._e()],2)],1)],1)],1)},o=[]},"6c8f":function(t,e,n){n("c975"),n("a9e3"),n("4d63"),n("ac1f"),n("25f0"),n("1276"),t.exports={error:"",check:function(t,e){for(var n=0;n<e.length;n++){if(!e[n].checkType)return!0;if(!e[n].name)return!0;if(!e[n].errorMsg)return!0;if(!t[e[n].name])return this.error=e[n].errorMsg,!1;switch(e[n].checkType){case"string":var a=new RegExp("^.{"+e[n].checkRule+"}$");if(!a.test(t[e[n].name]))return this.error=e[n].errorMsg,!1;break;case"int":a=new RegExp("^(-[1-9]|[1-9])[0-9]{"+e[n].checkRule+"}$");if(!a.test(t[e[n].name]))return this.error=e[n].errorMsg,!1;break;case"between":if(!this.isNumber(t[e[n].name]))return this.error=e[n].errorMsg,!1;var i=e[n].checkRule.split(",");if(i[0]=Number(i[0]),i[1]=Number(i[1]),t[e[n].name]>i[1]||t[e[n].name]<i[0])return this.error=e[n].errorMsg,!1;break;case"betweenD":a=/^-?[1-9][0-9]?$/;if(!a.test(t[e[n].name]))return this.error=e[n].errorMsg,!1;i=e[n].checkRule.split(",");if(i[0]=Number(i[0]),i[1]=Number(i[1]),t[e[n].name]>i[1]||t[e[n].name]<i[0])return this.error=e[n].errorMsg,!1;break;case"betweenF":a=/^-?[0-9][0-9]?.+[0-9]+$/;if(!a.test(t[e[n].name]))return this.error=e[n].errorMsg,!1;i=e[n].checkRule.split(",");if(i[0]=Number(i[0]),i[1]=Number(i[1]),t[e[n].name]>i[1]||t[e[n].name]<i[0])return this.error=e[n].errorMsg,!1;break;case"same":if(t[e[n].name]!=e[n].checkRule)return this.error=e[n].errorMsg,!1;break;case"notsame":if(t[e[n].name]==e[n].checkRule)return this.error=e[n].errorMsg,!1;break;case"email":a=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;if(!a.test(t[e[n].name]))return this.error=e[n].errorMsg,!1;break;case"phoneno":a=/^1[0-9]{10,10}$/;if(!a.test(t[e[n].name]))return this.error=e[n].errorMsg,!1;break;case"zipcode":a=/^[0-9]{6}$/;if(!a.test(t[e[n].name]))return this.error=e[n].errorMsg,!1;break;case"reg":a=new RegExp(e[n].checkRule);if(!a.test(t[e[n].name]))return this.error=e[n].errorMsg,!1;break;case"in":if(-1==e[n].checkRule.indexOf(t[e[n].name]))return this.error=e[n].errorMsg,!1;break;case"notnull":if(null==t[e[n].name]||t[e[n].name].length<1)return this.error=e[n].errorMsg,!1;break}}return!0},isNumber:function(t){var e=/^-?[1-9][0-9]?.?[0-9]*$/;return e.test(t)}}},"8ce4":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t/* 抽屉宽度\n */.uni-drawer[data-v-51c0b3ca]{\ndisplay:block;\nposition:fixed;top:0;left:0;right:0;bottom:0;overflow:hidden;z-index:999}.uni-drawer__content[data-v-51c0b3ca]{\ndisplay:block;\nposition:absolute;top:0;width:220px;bottom:0;background-color:#fff;transition:-webkit-transform .3s ease;transition:transform .3s ease;transition:transform .3s ease,-webkit-transform .3s ease}.uni-drawer--left[data-v-51c0b3ca]{left:0;-webkit-transform:translateX(-220px);transform:translateX(-220px)}.uni-drawer--right[data-v-51c0b3ca]{right:0;-webkit-transform:translateX(220px);transform:translateX(220px)}.uni-drawer__content--visible[data-v-51c0b3ca]{-webkit-transform:translateX(0);transform:translateX(0)}.uni-drawer__mask[data-v-51c0b3ca]{\ndisplay:block;\nopacity:0;position:absolute;top:0;left:0;bottom:0;right:0;background-color:rgba(0,0,0,.4);transition:opacity .3s}.uni-drawer__mask--visible[data-v-51c0b3ca]{\ndisplay:block;\nopacity:1}",""]),t.exports=e},b1f5:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.visibleSync?n("v-uni-view",{staticClass:"uni-drawer",class:{"uni-drawer--visible":t.showDrawer}},[n("v-uni-view",{staticClass:"uni-drawer__mask",class:{"uni-drawer__mask--visible":t.showDrawer&&t.mask},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"uni-drawer__content",class:{"uni-drawer--right":t.rightMode,"uni-drawer--left":!t.rightMode,"uni-drawer__content--visible":t.showDrawer}},[t._t("default")],2)],1):t._e()},o=[]},c6a0:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'.tab-box[data-v-6849f21f]{display:flex;flex-direction:row}.tab-nav[data-v-6849f21f]{width:%?80?%;background-color:#ededed;display:flex;justify-content:center;align-items:center;align-content:center}.drawer-nav .tab-nav[data-v-6849f21f]{background-color:#fff;margin-bottom:%?50?%;justify-content:flex-start}.drawer-menu[data-v-6849f21f]{width:50%}.drawer-nav[data-v-6849f21f]{padding:%?40?% %?20?% 0 %?40?%}.drawer-nav-btn.active[data-v-6849f21f]{color:#e2001a}.d-nav-list[data-v-6849f21f]{display:flex;justify-content:flex-start;flex-direction:column;line-height:3}.drawer-nav-btn[data-v-6849f21f]{font-size:%?30?%}.uni-page-body[data-v-6849f21f]{background-color:#ededed}.tabs[data-v-6849f21f]{flex:1;flex-direction:column;overflow:hidden;background-color:#fff;\n}.tab-img-list[data-v-6849f21f]{padding:0;margin:0;line-height:0}.scroll-h[data-v-6849f21f]{width:%?750?%;height:%?80?%;flex-direction:row;\r\nwhite-space:nowrap\r\n\r\n\t/* flex-wrap: nowrap; */\r\n\t/* border-color: #cccccc;\r\n\t\tborder-bottom-style: solid;\r\n\t\tborder-bottom-width: 1px; */}.line-h[data-v-6849f21f]{height:%?1?%;background-color:#ccc}.uni-tab-item[data-v-6849f21f]{\r\ndisplay:inline-block;\r\nflex-wrap:nowrap;padding-left:%?34?%;padding-right:%?34?%}.uni-tab-item-title[data-v-6849f21f]{color:#555;font-size:%?30?%;height:%?80?%;line-height:%?80?%;flex-wrap:nowrap;\r\nwhite-space:nowrap\n}.uni-tab-item-title-active[data-v-6849f21f]{color:#007aff}.swiper-box[data-v-6849f21f]{flex:1}.swiper-item[data-v-6849f21f]{flex:1;flex-direction:row}.scroll-v[data-v-6849f21f]{flex:1;\r\nflex-direction:column;\r\nwidth:%?750?%}.tab-dtl-img[data-v-6849f21f]{width:100%}.tabs[data-v-6849f21f]{background-color:#ededed}.title-block[data-v-6849f21f]{color:#000;background-color:inherit}.title-block.uni-tab-item-title-active[data-v-6849f21f]{position:relative}.title-block.uni-tab-item-title-active[data-v-6849f21f]::after{content:"";width:60%;height:%?5?%;background-color:#e2001a;position:absolute;left:25%;bottom:%?-18?%}uni-page-body[data-v-6849f21f],\r\nbody[data-v-6849f21f]{min-height:100%;height:inherit;position:relative}.content[data-v-6849f21f]{height:100%;\r\n\t/* background: url(../../static/cn/home/1.jpg) no-repeat 50% bottom; */background-repeat:no-repeat;background-position:right 10%;background-color:#eee;background-size:80% auto}.pg-main[data-v-6849f21f]{width:100%;position:relative}.form-box[data-v-6849f21f]{width:92%;margin:%?30?% auto}.form-tip[data-v-6849f21f]{text-align:center;font-size:%?40?%;line-height:2;padding:%?30?% %?10?% %?10?%}.form-row[data-v-6849f21f]{padding:0 0 %?30?%}.form-block[data-v-6849f21f]{margin-bottom:%?50?%}.submit-btn[data-v-6849f21f]{border:none;margin:%?30?% auto;background-color:#d4151a;color:#fff;font-size:%?40?%;width:60%;border-radius:%?60?%;letter-spacing:%?20?%}.uni-list-box[data-v-6849f21f]{background-color:hsla(0,0%,100%,.7);padding:%?25?%;border-radius:%?15?%}.uni-list-block[data-v-6849f21f]{display:flex;justify-content:flex-start;align-items:center;align-content:flex-start;flex-direction:row;border-bottom:%?1?% solid #dcdddd;padding:%?10?%}.uni-list-block[data-v-6849f21f]:last-child{border-bottom:none}.uni-list-left[data-v-6849f21f]{width:21%;font-size:%?34?%}.u-ipt[data-v-6849f21f]{font-size:%?34?%;background-color:initial}.contact-info[data-v-6849f21f]{display:flex;justify-content:space-between;flex-direction:row;align-items:center;align-content:center;background-color:#c3aa9b;color:#fff;font-size:%?50?%;border-radius:%?15?%;overflow:hidden}.c-block[data-v-6849f21f]{;display:flex;justify-content:space-between;flex-direction:column;align-items:center;align-content:center}.c-left[data-v-6849f21f]{width:38%;position:relative}.c-init[data-v-6849f21f]{position:relative;background-color:#162f7f;border-radius:%?15?%;z-index:2;width:100%;height:100%;padding:%?30?% %?10?%;display:flex;justify-content:center;flex-direction:column;align-items:center;align-content:center}.c-left[data-v-6849f21f]:after{content:" ";width:%?20?%;background-color:#fff;border-radius:0 %?15?% %?15?% 0;position:absolute;height:100%;top:0;right:%?-20?%;z-index:1}.c-right[data-v-6849f21f]{width:62%}a.mailto[data-v-6849f21f]{color:#fff;text-decoration:none}.lang-box[data-v-6849f21f]{top:auto;right:auto;left:10%;bottom:30%;height:auto}',""]),t.exports=e},e3e4:function(t,e,n){var a=n("8ce4");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("f4739d08",a,!0,{sourceMap:!1,shadowMode:!1})},e502:function(t,e){var n={title:{cn:"法国里昂商学院",en:"Global DBA (Asia Track)"},navFix:{home:{cn:{btn:"",link:"/pages/index/index?id=home&lg=cn",title:"首页",key:"home"},en:{btn:"",link:"/pages/index/index?id=home&lg=en",title:"Home",key:"home"}},contact:{cn:{btn:"",link:"/pages/contact/index?id=ct&lg=cn",title:"联系我们",key:"ct"},en:{btn:"",link:"/pages/contact/index?id=ct&lg=en",title:"Contact Us",key:"ct"}}},nav:{cn:[{btn:"/home/nav-1.png",link:"/pages/tablist/index?id=college&lg=",title:"关于学院",key:"college"},{btn:"/home/nav-2.png",link:"/pages/tablist/index?id=project&lg=",title:"关于项目",key:"project"},{btn:"/home/nav-3.png",link:"/pages/tablist/index?id=doctor&lg=",title:"同窗学友",key:"doctor"},{btn:"/home/nav-4.png",link:"/pages/tablist/index?id=study&lg=",title:"学习之旅",key:"study"}],en:[{btn:"/home/nav-1.png",link:"/pages/tablist/index?id=college&lg=",title:"About College",key:"college"},{btn:"/home/nav-2.png",link:"/pages/tablist/index?id=project&lg=",title:"Project",key:"project"},{btn:"/home/nav-3.png",link:"/pages/tablist/index?id=doctor&lg=",title:"Doctor",key:"doctor"},{btn:"/home/nav-4.png",link:"/pages/tablist/index?id=study&lg=",title:"Study",key:"study"}]}},a={id:"college",title:{cn:"关于学院",en:"About College"},tabBars:{cn:[{id:1,name:"学校介绍"},{id:2,name:"世界排名"},{id:3,name:"研究实力"}],en:[{id:1,name:"school"}]},contList:{cn:[{id:1,val:["/college/1-1.jpg","/college/1-2.jpg","/college/1-3.jpg"]},{id:2,val:["/college/2-1.jpg","/college/2-2.jpg","/college/2-3.jpg"]},{id:3,val:["/college/3-1.jpg","/college/3-2.jpg"]}],en:[{id:1,val:"aaa"}]}},i={id:"project",title:{cn:"关于项目",en:"About Project"},tabBars:{cn:[{id:1,name:"Global DBA"},{id:2,name:"项目特色"},{id:3,name:"学术主任寄语"}],en:[{id:1,name:"Global DBA"}]},contList:{cn:[{id:1,val:["/project/1-1.jpg","/project/1-2.jpg","/project/1-3.jpg","/project/1-4.jpg"]},{id:2,val:["/project/2-1.jpg","/project/2-2.jpg","/project/2-3.jpg","/project/2-4.jpg"]},{id:3,val:["/project/3-1.jpg","/project/3-2.jpg","/project/3-3.jpg","/project/3-4.jpg"]}],en:[{id:1,val:"aaa"}]}},o={id:"doctor",title:{cn:"同窗学友",en:"Student Friend"},titleImg:{cn:"/doctor/tab-title.png",en:"/doctor/tab-title.png"},tabBars:{cn:[{id:1,name:"同窗学友"}],en:[{id:1,name:"Global DBA"}]},contList:{cn:[{id:1,val:["/doctor/1.jpg"]}],en:[{id:1,val:["/doctor/1.jpg"]}]},docList:{cn:[{name:"1",imgUrl:"/static/cn/doctor/d1.png"},{name:"2",imgUrl:"/static/cn/doctor/d2.png"},{name:"3",imgUrl:"/static/cn/doctor/d3.png"},{name:"4",imgUrl:"/static/cn/doctor/d4.png"},{name:"5",imgUrl:"/static/cn/doctor/d5.png"},{name:"6",imgUrl:"/static/cn/doctor/d6.png"},{name:"7",imgUrl:"/static/cn/doctor/d7.png"},{name:"8",imgUrl:"/static/cn/doctor/d8.png"},{name:"9",imgUrl:"/static/cn/doctor/d9.png"},{name:"10",imgUrl:"/static/cn/doctor/d10.png"}],en:[{name:"1",imgUrl:""}]}},r={id:"study",title:{cn:"学习之旅",en:"Learning journey"},tabBars:{cn:[{id:1,name:"课程设置"},{id:2,name:"独家模块"},{id:3,name:"师资力量"},{id:4,name:"申请指南"},{id:5,name:"申请流程"}],en:[{id:1,name:"Global DBA"}]},contList:{cn:[{id:1,imgArray:!0,val:["/study/1-1.jpg","/study/1-2.jpg","/study/1-3.jpg","/study/1-4.jpg"]},{id:2,val:["/study/2-1.jpg","/study/2-2.jpg","/study/2-3.jpg","/study/2-4.jpg","/study/2-5.jpg"]},{id:3,val:["/study/3-1.jpg","/study/3-2.jpg","/study/3-3.jpg"]},{id:4,val:["/study/4-1.jpg","/study/4-2.jpg","/study/4-3.jpg","/study/4-4.jpg"]},{id:5,val:["/study/5-1.jpg","/study/5-2.jpg","/study/5-3.jpg","/study/5-4.jpg"],link:["/pages/contact/index?id=ct&lg="]}],en:[{id:1,val:"aaa"}]}},s={id:"contact",title:{cn:"联系我们",en:"Contact Us"},tip:{cn:"如果您感兴趣，请与我们联系",en:"If you are interested, contact us"},submit:{cn:"提交",en:"Submit"},"c-tip":{cn:"招生信息请详询",en:"Please Contact"},"c-name":{cn:"喻老师 Helen YU",en:"喻老师 Helen YU"},form:{cn:[{type:"text",label:"姓名",name:"name",notnull:!0},{type:"number",label:"手机号",name:"phone",notnull:!0},{type:"email",label:"邮箱",name:"email",notnull:!0},{type:"text",label:"公司",name:"company",notnull:!0},{type:"text",name:"position",label:"职位"},{type:"text",name:"mark",label:"附言"}],en:[{type:"text",label:"Name",name:"name",notnull:!0},{type:"phone",label:"Phone",name:"phone",notnull:!0},{type:"email",label:"Email",name:"email",notnull:!0},{type:"text",label:"Company",name:"company",notnull:!0},{type:"text",label:"Position",name:"position"},{type:"text",name:"mark",label:"Mark"}]}};t.exports={Home:n,College:a,Project:i,Doctor:o,Study:r,Contact:s}},f34f:function(t,e,n){"use strict";n.r(e);var a=n("5e6c"),i=n("2362");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("1ee3");var r,s=n("f0c5"),l=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"6849f21f",null,!1,a["a"],r);e["default"]=l.exports},f6d1:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("e502"),o=a(n("2fa0")),r=n("6c8f"),s={data:function(){return{nav:i.Home.nav,navFix:i.Home.navFix,pageis:"",list:i.Contact,loading:!1,showLeft:!1}},components:{uniDrawer:o.default},onLoad:function(t){var e=this,n=t.id||"";this.pageis=n,e.$store.dispatch("getLang")},onReady:function(){var t=this.$store.state.lang;uni.setNavigationBarTitle({title:i.Contact["title"][t]})},methods:{formSubmit:function(t){var e=this;if(1!=e.loading){var n=t.detail.value;e.loading=!0;var a=[{name:"name",checkType:"notnull",checkRule:"",errorMsg:"请填写姓名"},{name:"phone",checkType:"phoneno",checkRule:"",errorMsg:"请填写正确的手机号"},{name:"email",checkType:"email",checkRule:"",errorMsg:"请填写正确的邮箱"},{name:"company",checkType:"notnull",checkRule:"",errorMsg:"请填写公司"}],i=r.check(n,a);if(i){n["name"]=n["name"]+" * 来自：Global DBA",n["note"]="公司："+n["company"]+"  职位："+n["position"]+"  附言："+n["mark"],console.log(n);var o="http://api_test.meetji.com/v2/ApiHome-saveSingle.htm";uni.request({url:o,method:"POST",data:n,header:{},success:function(t){var e=t.data;e.success?uni.showToast({title:"提交成功！",icon:"success",duration:2e3}):uni.showToast({title:"提交失败",icon:"error",duration:2e3})},fail:function(t){console.log("======fail========"),console.log(t),uni.showToast({title:"接口请求失败",icon:"fail",duration:2e3})},complete:function(t){console.log("======complete========"),console.log(t),this.loading=!1}})}else uni.showToast({title:r.error,icon:"none"}),this.loading=!1}},phoneCall:function(t){uni.makePhoneCall({phoneNumber:t})},drawerShow:function(t){console.log("show",t),this.showLeft=!0},drawerHide:function(){console.log("hide"),this.showLeft=!1},setLang:function(t){var e=this;uni.setStorage({key:"DBA-Lang",data:t,success:function(){var n=t||"cn";e.$store.state.lang=n,e.$store.dispatch("getLang"),uni.setNavigationBarTitle({title:e.list["title"][e.$store.state.lang]})},fail:function(){}})}}};e.default=s}}]);