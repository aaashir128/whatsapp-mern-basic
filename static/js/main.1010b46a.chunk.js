(this["webpackJsonpwhatsapp-mern"]=this["webpackJsonpwhatsapp-mern"]||[]).push([[0],{101:function(e,t,c){},102:function(e,t,c){},103:function(e,t,c){},105:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c.n(a),n=c(26),i=c.n(n),r=(c(69),c(61)),j=c(17),l=(c(70),c(38)),o=c.n(l),d=c(53),h=c(132),u=c(130),b=c(121),O=c(122),p=c(123),m=c(124),x=c(125),f=(c(72),c(54)),v=c.n(f).a.create({baseURL:"https://whatsapp-mern-alpha.herokuapp.com"}),g=c(3),_=Object(a.createContext)(),N=function(e){var t=e.reducer,c=e.initialState,s=e.children;return Object(g.jsx)(_.Provider,{value:Object(a.useReducer)(t,c),children:s})},w=function(){return Object(a.useContext)(_)},S=(c(91),c(25)),C=c(55),y=c.n(C),E=function(e){var t=e.messages,c=Object(a.useState)(""),s=Object(j.a)(c,2),n=s[0],i=s[1],r=w(),l=Object(j.a)(r,2),f=l[0].user,_=(l[1],function(){var e=Object(d.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,v.post("/messages/new",{message:n,name:null===f||void 0===f?void 0:f.email,timestamp:y()().format("LTS"),received:!0});case 3:i("");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return Object(g.jsxs)("div",{className:"chat",children:[Object(g.jsxs)("div",{className:"chat__header",children:[Object(g.jsx)("div",{className:"chat__headerLeft",children:Object(g.jsx)(h.a,{})}),Object(g.jsxs)("div",{className:"chat__headerCenter",children:[Object(g.jsx)("h2",{children:f?null===f||void 0===f?void 0:f.email:"Dance Room"}),Object(g.jsx)("p",{children:"Last Seen ..."})]}),Object(g.jsxs)("div",{className:"chat__headerRight",children:[Object(g.jsx)(u.a,{children:Object(g.jsx)(b.a,{})}),Object(g.jsx)(u.a,{children:Object(g.jsx)(O.a,{})})]})]}),Object(g.jsx)("div",{className:"chat__body",children:t.map((function(e){return Object(g.jsxs)("p",{className:"chat__message ".concat(e.received&&"chat__reciever"),children:[Object(g.jsxs)("span",{className:"chat__name",children:[" ",e.name," "]}),e.message,Object(g.jsxs)("span",{className:"chat__timestamp",children:[" ",e.timestamp]})]})}))}),Object(g.jsxs)("div",{className:"chat__footer",children:[Object(g.jsxs)("div",{className:"chat__footerLeft",children:[Object(g.jsx)(u.a,{children:Object(g.jsx)(p.a,{})}),Object(g.jsx)(u.a,{children:Object(g.jsx)(m.a,{})})]}),Object(g.jsx)("div",{className:"chat__footerCenter",children:Object(g.jsxs)("form",{className:"chat__footerInput",children:[Object(g.jsx)("input",{value:n,onChange:function(e){return i(e.target.value)},type:"text"}),Object(g.jsx)("button",{onClick:_,type:"submit",children:"Send Message"})]})}),Object(g.jsx)("div",{className:"chat__footerRight",children:Object(g.jsx)(u.a,{children:Object(g.jsx)(x.a,{})})})]})]})},k=c(126),I=c(127),L=c(128),R=c(129),P=(S.a.initializeApp({apiKey:"AIzaSyBXa19viPwMpZbnC8wLXurTzAvasKXG3Fw",authDomain:"whatsapp-mern-alpha.firebaseapp.com",projectId:"whatsapp-mern-alpha",storageBucket:"whatsapp-mern-alpha.appspot.com",messagingSenderId:"431277355317",appId:"1:431277355317:web:335f9564c47f564b641c7c",measurementId:"G-CFDVK9MK28"}).firestore(),S.a.auth()),A=new S.a.auth.GoogleAuthProvider,D=(new S.a.auth.FacebookAuthProvider,S.a.storage(),c(101),c(102),function(){return Object(g.jsxs)("div",{className:"sidebarChat",children:[Object(g.jsx)(h.a,{}),Object(g.jsxs)("div",{className:"sidebarChat__info",children:[Object(g.jsx)("h2",{children:"Room Name"}),Object(g.jsx)("p",{children:"this is the last chat"})]})]})}),T=function(){var e=w(),t=Object(j.a)(e,2),c=t[0].user;t[1];return console.log(c),Object(g.jsxs)("div",{className:"sidebar",children:[Object(g.jsxs)("div",{className:"sidebar__header",children:[Object(g.jsx)("div",{className:"sidebar__headerLeft",children:Object(g.jsx)(h.a,{src:null===c||void 0===c?void 0:c.photoURL})}),Object(g.jsxs)("div",{className:"sidebar__headerRight",children:[Object(g.jsx)(u.a,{children:Object(g.jsx)(k.a,{})}),Object(g.jsx)(u.a,{children:Object(g.jsx)(I.a,{})}),Object(g.jsx)(u.a,{children:Object(g.jsx)(O.a,{})})]})]}),Object(g.jsx)("div",{className:"sidebar__search",children:Object(g.jsxs)("div",{className:"sidebar__searchContainer",children:[Object(g.jsx)(L.a,{}),Object(g.jsx)("input",{placeholder:"Search or Start new chat"})]})}),Object(g.jsxs)("div",{className:"sidebar__chats",children:[Object(g.jsx)(D,{}),Object(g.jsx)(D,{}),Object(g.jsx)(D,{})]}),Object(g.jsx)("div",{className:"sidebar__bottom",children:Object(g.jsxs)("form",{onClick:function(e){e.preventDefault(),P.signOut()},children:[Object(g.jsx)(R.a,{}),Object(g.jsx)("h3",{children:"Sign Out"})]})})]})},U=c(60),F=c.n(U),B=c(131),G=(c(103),function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),i=Object(j.a)(n,2),r=i[0],l=i[1];Object(B.a)();return Object(g.jsx)("div",{className:"login",children:Object(g.jsxs)("div",{className:"login__container",children:[Object(g.jsx)("img",{className:"login__logo",src:"https://www.designfreelogoonline.com/wp-content/uploads/2016/03/000707-online-digital-eye-logo-free-logo-maker-02.png",alt:"logo"}),Object(g.jsxs)("div",{className:"login__details",children:[Object(g.jsxs)("form",{children:[Object(g.jsx)("input",{type:"text",placeholder:"Email",value:c,onChange:function(e){return s(e.target.value)}}),Object(g.jsx)("input",{type:"password",placeholder:"Password",value:r,onChange:function(e){return l(e.target.value)}}),Object(g.jsx)("button",{onClick:function(e){e.preventDefault(),P.signInWithEmailAndPassword(c,r).then((function(e){})).catch((function(e){alert(e.message)})),s(""),l("")},type:"submit",children:"Login"})]}),Object(g.jsx)("button",{onClick:function(e){e.preventDefault(),P.signInWithPopup(A).then((function(e){})).catch((function(e){alert(e.message)}))},children:"Sign In with Google"}),Object(g.jsx)("button",{onClick:function(e){e.preventDefault(),P.createUserWithEmailAndPassword(c,r).then((function(e){console.log(e)})).catch((function(e){alert(e.message)})),s(""),l("")},children:"Sign Up"})]})]})})});var K=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1],n=w(),i=Object(j.a)(n,2),l=i[0].user,o=i[1];return Object(a.useEffect)((function(){P.onAuthStateChanged((function(e){console.log("This is Auth User >>> ",e),o(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(a.useEffect)((function(){v.get("/messages/sync").then((function(e){s(e.data)}))}),[]),Object(a.useEffect)((function(){var e=new F.a("a7fdea24b67e93e03e4f",{cluster:"ap2"}).subscribe("messages");return e.bind("inserted",(function(e){s([].concat(Object(r.a)(c),[e]))})),function(){e.unbind_all(),e.unsubscribe()}}),[c]),console.log(c),Object(g.jsx)("div",{className:"app",children:l?Object(g.jsxs)("div",{className:"app__body",children:[Object(g.jsx)(T,{}),Object(g.jsx)(E,{messages:c})]}):Object(g.jsx)(G,{})})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,133)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))},z=c(42),W="SET_USER",X=function(e,t){switch(console.log(t),t.type){case W:return Object(z.a)(Object(z.a)({},e),{},{user:t.user});default:return e}};i.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(N,{reducer:X,initialState:{user:null},children:Object(g.jsx)(K,{})})}),document.getElementById("root")),M()},69:function(e,t,c){},70:function(e,t,c){},72:function(e,t,c){}},[[105,1,2]]]);
//# sourceMappingURL=main.1010b46a.chunk.js.map