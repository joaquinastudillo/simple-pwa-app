(function(t){function e(e){for(var n,i,s=e[0],c=e[1],l=e[2],d=0,p=[];d<s.length;d++)i=s[d],o[i]&&p.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==o[c]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},o={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"416e":function(t,e,a){"use strict";var n=a("8252"),o=a.n(n);o.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],i=a("2877"),s={},c=Object(i["a"])(s,o,r,!1,null,null,null),l=c.exports,u=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{staticClass:"basic",attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu",icon:"menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),a("q-toolbar-title",[t._v("\n        Simple PWA App\n      ")]),a("div",[t._v("Quasar v"+t._s(t.$q.version))])],1)],1),a("q-drawer",{attrs:{bordered:"","content-class":"bg-grey-2"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{attrs:{header:""}},[t._v("Navigation")]),a("q-item",{attrs:{to:"/",exact:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"home"}})],1),a("q-item-section",[a("q-item-label",[t._v("Home")])],1)],1),a("q-item",{attrs:{to:"/about",exact:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"info"}})],1),a("q-item-section",[a("q-item-label",[t._v("About")])],1)],1)],1)],1),a("q-page-container",[a("router-view")],1)],1)},p=[],m={name:"LayoutDefault",data:function(){return{leftDrawerOpen:this.$q.platform.is.desktop}}},f=m,g=Object(i["a"])(f,d,p,!1,null,null,null),h=g.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{attrs:{padding:""}},[a("Camera"),a("div",{staticClass:"q-pa-md q-gutter-sm addButton"},[a("q-btn",{attrs:{push:"",color:"primary",icon:"camera"},on:{click:function(e){return t.$store.dispatch("setCamereModalValue")}}}),a("q-btn",{attrs:{push:"",color:"primary",icon:"add_circle_outline"},on:{click:function(e){return t.$router.push({name:"post"})}}})],1),a("div",{staticClass:"row"},t._l(t.dogs,function(e,n){return a("div",{key:e.id,staticClass:"col-6",staticStyle:{padding:"5px"},on:{click:function(a){return t.$router.push({name:"details",params:{id:e.id,dogProp:t.dogs[n]}})}}},[a("q-card",{staticClass:"my-card"},[a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",[a("q-icon",{attrs:{name:"pets"}})],1)],1),a("q-item-section",[a("q-item-label",[t._v(t._s(e.comment))]),a("q-item-label",{attrs:{caption:""}},[t._v(t._s(e.info))])],1)],1),a("img",{attrs:{src:e.url,height:"270"}})],1)],1)}),0)],1)},v=[],q=(a("ac6a"),a("b05d")),y=a("f09f"),_=a("6ab5"),w=a("033f"),C=a("cb32"),Q=a("e208"),x=a("2ea3"),O=a("8aa5"),k=a.n(O),P=(a("e71f"),a("741f"),{apiKey:"AIzaSyC-x_P9Jb3VSJpMSx-E6j4dBu4DzkW8tus",authDomain:"simple-pwa-app.firebaseapp.com",databaseURL:"https://simple-pwa-app.firebaseio.com",projectId:"simple-pwa-app",storageBucket:"simple-pwa-app.appspot.com",messagingSenderId:"519093170196",appId:"1:519093170196:web:ff70fef7a04b304f"});k.a.initializeApp(P);var S=k.a.firestore();S.enablePersistence({synchronizeTabs:!0});var A=S,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{model:{value:t.display,callback:function(e){t.display=e},expression:"display"}},[a("q-card",[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("Alert")])]),a("q-card-section",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.")]),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{attrs:{flat:"",label:"OK",color:"primary"},on:{click:function(e){return t.$store.dispatch("setCamereModalValue")}}})],1)],1)],1)},D=[],j=a("24e8"),E=a("7f67"),I=a("a370"),T=a("4b7e"),$=a("2f62");n["a"].use($["a"]);var L=new $["a"].Store({state:{displayCameraModal:!1},mutations:{SET_CAMERA_MODAL_VALUE:function(t){t.displayCameraModal=!t.displayCameraModal}},actions:{setCamereModalValue:function(t){var e=t.commit;e("SET_CAMERA_MODAL_VALUE")}},getters:{displayCameraModal:function(t){return t.displayCameraModal}}}),U={name:"DetailsPage",components:{Quasar:q["a"],QDialog:j["a"],QCard:y["a"],QCardSection:I["a"],QCardActions:T["a"]},directives:{ClosePopup:E["a"]},data:function(){return{}},computed:{display:{get:function(){return L.getters.displayCameraModal},set:function(t){}}}},z=U,B=Object(i["a"])(z,M,D,!1,null,null,null),N=B.exports,R={name:"PageHome",components:{Quasar:q["a"],QCard:y["a"],QItem:_["a"],QItemSection:w["a"],QAvatar:C["a"],QItemLabel:Q["a"],QPage:x["a"],Camera:N},data:function(){return{dogs:[]}},computed:{displayCameraModal:function(){return L.getters.displayCameraModal}},mounted:function(){var t=this,e=A.collection("dogs").orderBy("created_at");e.get().then(function(e){e.forEach(function(e){t.dogs.push({id:e.id,url:e.data().url,comment:e.data().comment,info:e.data().info})})})}},V=R,F=(a("416e"),Object(i["a"])(V,b,v,!1,null,"1edb4c3e",null)),H=F.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{attrs:{padding:""}},[a("p",[t._v("This is an about page")])])},W=[],K={name:"PageAbout"},G=K,Y=Object(i["a"])(G,J,W,!1,null,null,null),X=Y.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{attrs:{padding:""}},[a("q-card",{},[a("div",{staticClass:"q-pa-md q-gutter-sm",attrs:{id:"card-header"}},[a("q-chip",{attrs:{icon:"plus_one",color:"teal","text-color":"white"}},[t._v("Add a New Dog")]),a("q-btn",{attrs:{push:"",color:"primary",round:"",icon:"refresh"},on:{click:t.refreshImage}})],1),null!==this.dogUrl?a("q-card",{staticClass:"my-card"},[a("q-img",{attrs:{src:t.dogUrl,"spinner-color":"white"}})],1):a("q-img",{staticStyle:{height:"140px"},attrs:{src:"https://cdn.quasar.dev/img/non-existent-image-src.png"},scopedSlots:t._u([{key:"error",fn:function(){return[a("div",{staticClass:"absolute-full flex flex-center bg-negative text-white"},[t._v("Cannot load image")])]},proxy:!0}])}),a("q-card-section",[a("q-form",{staticClass:"q-gutter-md"},[a("q-input",{attrs:{filled:"",label:"Name",hint:"Your name"},model:{value:t.author,callback:function(e){t.author=e},expression:"author"}}),a("q-input",{attrs:{filled:"",label:"Title",hint:"Dog's title"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),a("div",[a("q-btn",{attrs:{label:"POST A DOG","icon-right":"pets",type:"submit",color:"primary"},on:{click:t.post}}),a("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Reset",type:"reset",color:"primary",flat:""}})],1)],1)],1)],1)],1)},tt=[],et=a("0378"),at=a("27f9"),nt=a("068f"),ot=a("b047"),rt=a("bc3a"),it=a.n(rt),st=function(t,e,a){var n=new Date,o=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];console.log(A.db),A.collection("dogs").add({url:t,comment:e,info:"Posted by ".concat(""!=a?a:"Unknown"," on ").concat(o[n.getDay()]),created_at:(new Date).getTime()}).then(yt.go(-1))},ct=function(t){return it.a.get(t).then(function(t){return t.data}).catch(function(t){console.log(t)})},lt={name:"PostPage",components:{Quasar:q["a"],QForm:et["a"],QInput:at["a"],QCard:y["a"],QCardSection:I["a"],QImg:nt["a"],QChip:ot["a"]},data:function(){return{dogUrl:null,title:"",author:""}},mounted:function(){var t=this;ct("https://dog.ceo/api/breed/appenzeller/images/random").then(function(e){e.status&&(t.dogUrl=e.message)}).catch(function(e){t.dogUrl=null})},methods:{post:function(){st(this.dogUrl,this.title,this.author)},refreshImage:function(){var t=this;ct("https://dog.ceo/api/breed/appenzeller/images/random").then(function(e){e.status&&(t.dogUrl=e.message)}).catch(function(e){t.dogUrl=null})}}},ut=lt,dt=(a("c021"),Object(i["a"])(ut,Z,tt,!1,null,"468bd501",null)),pt=dt.exports,mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{attrs:{padding:""}},[a("q-card",{staticClass:"my-card"},[a("img",{attrs:{src:t.dog.url}}),a("q-list",[t.dog.comment?a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{color:"red",name:"title"}})],1),a("q-item-section",[a("q-item-label",[t._v(t._s(t.dog.comment))])],1)],1):t._e(),t.dog.info?a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{color:"primary",name:"description"}})],1),a("q-item-section",[a("q-item-label",[t._v(t._s(t.dog.info))])],1)],1):t._e()],1)],1)],1)},ft=[],gt=a("497d"),ht={name:"DetailsPage",components:{Quasar:q["a"],QCard:y["a"],QCardSection:I["a"],QImg:nt["a"],QList:gt["a"]},props:{dogProp:{type:Object,required:!0}},data:function(){return{dog:{}}},mounted:function(){var t=this;if(this.dogProp)this.dog=this.dogProp;else{var e=this.$route.params.id;A.doc("dogs/".concat(e)).get().then(function(e){e.exists?t.dog=e.data():console.log("no document found")}).catch(function(t){console.log("error getting document",t)})}}},bt=ht,vt=Object(i["a"])(bt,mt,ft,!1,null,null,null),qt=vt.exports;n["a"].use(u["a"]);var yt=new u["a"]({routes:[{path:"/",component:h,children:[{path:"",name:"home",component:H},{path:"/details/:id",name:"details",props:!0,component:qt},{path:"/post",name:"post",component:pt},{path:"/about",name:"about",component:X}]}]}),_t=a("9483");Object(_t["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("a4ac"),a("7d6e"),a("e54f");var wt=a("4d5a"),Ct=a("9898"),Qt=a("f2cc"),xt=a("c7a0"),Ot=a("65c6"),kt=a("6ac5"),Pt=a("9c40"),St=a("0016");n["a"].use(q["a"],{config:{},components:{QLayout:wt["a"],QHeader:Ct["a"],QDrawer:Qt["a"],QPageContainer:xt["a"],QPage:x["a"],QToolbar:Ot["a"],QToolbarTitle:kt["a"],QBtn:Pt["a"],QIcon:St["a"],QList:gt["a"],QItem:_["a"],QItemSection:w["a"],QItemLabel:Q["a"]},directives:{},plugins:{}}),n["a"].config.productionTip=!1,new n["a"]({router:yt,store:L,render:function(t){return t(l)}}).$mount("#app")},8252:function(t,e,a){},"88f3":function(t,e,a){},a4ac:function(t,e,a){},c021:function(t,e,a){"use strict";var n=a("88f3"),o=a.n(n);o.a}});
//# sourceMappingURL=app.9c107959.js.map