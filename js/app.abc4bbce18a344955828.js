webpackJsonp([3],[,,function(t,e,n){"use strict";e.a={data:function(){return{drawer:!1,provideDrawer:!0,items:[{icon:"home",title:"Home",to:{name:"home"}},{icon:"description",title:"SLA",to:{name:"sla"}}],title:"YSITD Cloud Development"}}}},,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),a=n(8),o=n.n(a),i=n(9),s=n(13);r.a.use(o.a,{theme:{primary:"#44A148"}}),r.a.config.productionTip=!1,new r.a({router:s.a,el:"#app",render:function(t){return t(i.a)}})},,,,function(t,e,n){"use strict";function r(t){n(10)}var a=n(2),o=n(12),i=n(3),s=r,c=Object(i.a)(a.a,o.a,o.b,!1,s,null,null);e.a=c.exports},function(t,e){},,function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{light:""}},[t.provideDrawer?n("v-navigation-drawer",{attrs:{app:"",fixed:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},t._l(t.items,function(e,r){return n("v-list-tile",{key:r,attrs:{to:e.to}},[n("v-list-tile-action",[n("v-icon",{attrs:{light:""},domProps:{innerHTML:t._s(e.icon)}})],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}))],1):t._e(),t._v(" "),n("v-toolbar",{staticClass:"primary",attrs:{app:"",fixed:"",dark:""}},[t.provideDrawer?n("v-toolbar-side-icon",{attrs:{dark:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}):t._e(),t._v(" "),n("v-toolbar-title",{domProps:{textContent:t._s(t.title)}})],1),t._v(" "),n("v-content",[n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1),t._v(" "),n("v-footer",{attrs:{fixed:"",app:""}},[n("span",[t._v("© 2017 YSITD Cloud")])])],1)},a=[]},function(t,e,n){"use strict";var r=n(1),a=n(14);r.a.use(a.a);var o=new a.a({routes:[{path:"/",name:"home",component:function(){return n.e(0).then(n.bind(null,15))}},{path:"/sla",name:"sla",component:function(){return n.e(1).then(n.bind(null,16))}}]});o.beforeEach(function(t,e,n){window.gtag("config","UA-103662489-3",{page_path:t.path}),n()}),e.a=o}],[5]);
//# sourceMappingURL=app.abc4bbce18a344955828.js.map