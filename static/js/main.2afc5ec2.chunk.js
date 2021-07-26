(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{186:function(e,t,a){},187:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(32),c=a.n(r),o=a(6),s=a(28),i=a(64),u="[Auth] Login",l="[Auth] Logout",d="[UI] Set Error",j="[UI] Remove Error",b="[UI] Start loading",p="[UI] Finish loading",h="[Notes] New note",m="[Notes] Set active note",f="[Notes] Load notes",O="[Notes] Update note",_="[Notes] Delete note",v="[Notes] Logout Cleaning",x=a(43),y=a(4),g={notes:[],active:null},N={loading:!1,msgError:null},w="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.c,k=Object(s.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return{uid:t.payload.uid,name:t.payload.displayName};case l:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(y.a)(Object(y.a)({},e),{},{msgError:t.payload});case j:return Object(y.a)(Object(y.a)({},e),{},{msgError:null});case b:return Object(y.a)(Object(y.a)({},e),{},{loading:!0});case p:return Object(y.a)(Object(y.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(y.a)(Object(y.a)({},e),{},{active:Object(y.a)({},t.payload)});case h:return Object(y.a)(Object(y.a)({},e),{},{notes:[t.payload].concat(Object(x.a)(e.notes))});case f:return Object(y.a)(Object(y.a)({},e),{},{notes:Object(x.a)(t.payload)});case O:return Object(y.a)(Object(y.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case _:return Object(y.a)(Object(y.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case v:return Object(y.a)(Object(y.a)({},e),{},{active:null,notes:[]});default:return e}}}),S=Object(s.d)(k,w(Object(s.a)(i.a))),C=a(7),E=a.n(C),M=a(11),A=a(18),D=a(65),I=a.n(D),L=a(19),J=a(8),q=a(20),F=a.n(q),P=a(27),R=a.n(P);a(101),a(102);R.a.initializeApp({apiKey:"AIzaSyDj8xrvyOfXjn9qFJYre1Sz4DDEnvwzcQU",authDomain:"react-apps-bafe2.firebaseapp.com",projectId:"react-apps-bafe2",storageBucket:"react-apps-bafe2.appspot.com",messagingSenderId:"650936320724",appId:"1:650936320724:web:e1b821cca70cead587f141"});var z=R.a.firestore(),T=new R.a.auth.GoogleAuthProvider,U=function(e){switch(e){case"auth/user-not-found":return"No se encontraron usuarios con el correo indicado.";case"auth/wrong-password":return"La contrase\xf1a es incorrecta.";case"auth/email-already-in-use":return"El usuario ya est\xe1 en uso";default:return"Intenta de nuevo"}},V=function(){var e=Object(M.a)(E.a.mark((function e(t){var a,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.collection("".concat(t,"/journal/notes")).orderBy("date","desc").get();case 2:return a=e.sent,n=[],a.forEach((function(e){n.push(Object(y.a)({id:e.id},e.data()))})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(M.a)(E.a.mark((function e(t){var a,n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/deydrums/upload",(a=new FormData).append("upload_preset","react-journal"),a.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/deydrums/upload",{method:"POST",body:a});case 7:if(!(n=e.sent).ok){e.next=15;break}return e.next=11,n.json();case 11:return r=e.sent,e.abrupt("return",r.secure_url);case 15:return e.next=17,n.json();case 17:throw e.sent;case 18:e.next=23;break;case 20:throw e.prev=20,e.t0=e.catch(4),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),B=function(e,t){return{type:m,payload:Object(y.a)({id:e},t)}},H=function(e,t){return{type:h,payload:Object(y.a)({id:e},t)}},W=function(e){return function(){var t=Object(M.a)(E.a.mark((function t(a){var n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V(e);case 2:n=t.sent,a(X(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},X=function(e){return{type:f,payload:e}},Q=function(e){return function(){var t=Object(M.a)(E.a.mark((function t(a,n){var r,c;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.uid,e.url||delete e.url,delete(c=Object(y.a)({},e)).id,t.next=6,z.doc("".concat(r,"/journal/notes/").concat(e.id)).update(c);case 6:a(K(e.id,c)),F.a.fire("Guardado","La nota se ha guardado correctamente.","success");case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},K=function(e,t){return{type:O,payload:{id:e,note:Object(y.a)({id:e},t)}}},Y=function(e){return{type:_,payload:e}},Z=function(e){return{type:d,payload:e}},$=function(){return{type:b}},ee=function(){return{type:p}},te=function(e,t){return{type:u,payload:{uid:e,displayName:t}}},ae=function(){return{type:l}},ne=a(0),re=function(){return Object(ne.jsx)("div",{children:Object(ne.jsx)("div",{className:"auth__main",children:Object(ne.jsx)("div",{className:"auth__loading",children:Object(ne.jsxs)("div",{className:"page-loader",children:[Object(ne.jsx)("div",{}),Object(ne.jsx)("div",{}),Object(ne.jsx)("div",{})]})})})})},ce=a(34),oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(A.a)(t,2),r=a[0],c=a[1],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;c(t)},s=function(e){var t=e.target;c(Object(y.a)(Object(y.a)({},r),{},Object(ce.a)({},t.name,t.value)))};return[r,s,o]},se=a(23),ie=a.n(se),ue=function(){var e=(new Date).getTime();ie.a.updateLocale("es",{months:"Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split("_"),monthsShort:"Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.".split("_"),weekdays:"Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado".split("_"),weekdaysShort:"Dom._Lun._Mar._Mier._Jue._Vier._Sab.".split("_"),weekdaysMin:"Do_Lu_Ma_Mi_Ju_Vi_Sa".split("_")});var t=ie()(e),a=Object(o.b)(),n=Object(o.c)((function(e){return e.notes})).active;return Object(ne.jsxs)("div",{className:"notes__appbar",children:[Object(ne.jsx)("span",{children:t.format("dddd, Do MMMM yy")}),Object(ne.jsx)("input",{type:"file",style:{display:"none"},onChange:function(e){var t=e.target.files;t&&a(function(e){return function(){var t=Object(M.a)(E.a.mark((function t(a,n){var r,c;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().notes.active,F.a.fire({title:"Cargando...",text:"Espere mientras se carga el archivo,",allowOutsideClick:!1,didOpen:function(){F.a.showLoading()}}),t.next=4,G(e[0]);case 4:c=t.sent,r.url=c,a(Q(r)),F.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(t))},id:"fileSelector",name:"file"}),Object(ne.jsxs)("div",{children:[Object(ne.jsx)("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()},children:"Fotograf\xeda"}),Object(ne.jsx)("button",{className:"btn",onClick:function(){a(Q(n))},children:"Guardar"})]})]})},le=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.notes})).active,a=oe(t),r=Object(A.a)(a,3),c=r[0],s=r[1],i=r[2],u=Object(n.useRef)(t.id);Object(n.useEffect)((function(){t.id!==u.current&&(i(t),u.current=t.id)}),[t,i]),Object(n.useEffect)((function(){e(B(c.id,Object(y.a)({},c)))}),[c]);var l=c.body,d=c.title,j=c.id;return Object(ne.jsxs)("div",{className:"notes__main-content",children:[Object(ne.jsx)(ue,{}),Object(ne.jsxs)("div",{className:"notes__content",children:[Object(ne.jsx)("input",{type:"text",placeholder:"T\xedtulo...",name:"title",className:"notes__title-input",value:d,onChange:s}),Object(ne.jsx)("textarea",{placeholder:"Que paso hoy?",className:"notes__textarea",name:"body",value:l,onChange:s}),t.url&&Object(ne.jsx)("div",{className:"notes__image",children:Object(ne.jsx)("img",{src:t.url,alt:"image"})})]}),Object(ne.jsx)("button",{className:"btn btn-danger",onClick:function(){e(function(e){return function(){var t=Object(M.a)(E.a.mark((function t(a,n){var r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.uid,t.next=3,z.doc("".concat(r,"/journal/notes/").concat(e)).delete();case 3:a(Y(e));case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(j))},children:"Borrar"})]})},de=function(){return Object(ne.jsxs)("div",{className:"nothing__main-content",children:[Object(ne.jsxs)("p",{children:["Selecciona una entrada",Object(ne.jsx)("br",{}),"o crea una nueva"]}),Object(ne.jsx)("i",{className:"far fa-star fa-4x mt-5"})]})},je=function(e){var t=e.id,a=e.date,n=e.title,r=e.body,c=e.url,s=Object(o.b)();ie.a.updateLocale("es",{months:"Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split("_"),monthsShort:"Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.".split("_"),weekdays:"Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado".split("_"),weekdaysShort:"Dom._Lun._Mar._Mier._Jue._Vier._Sab.".split("_"),weekdaysMin:"Do_Lu_Ma_Mi_Ju_Vi_Sa".split("_")});var i=ie()(a);return Object(ne.jsxs)("div",{className:"journal__entry pointer animate__animated animate__fadeIn",onClick:function(){s(B(t,{date:a,title:n,body:r,url:c}))},children:[c?Object(ne.jsx)("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(c,")")}}):Object(ne.jsx)("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundColor:"rgba(102, 250, 193, 0.699)"}}),Object(ne.jsxs)("div",{className:"journal__entry-body",children:[Object(ne.jsx)("p",{className:"journal__entry-title",children:n}),Object(ne.jsx)("p",{className:"journal__entry-content",children:r})]}),Object(ne.jsxs)("div",{className:"journal__entry-date-box",children:[Object(ne.jsx)("span",{children:i.format("dddd")}),Object(ne.jsx)("h4",{children:i.format("Do")}),Object(ne.jsxs)("span",{children:[i.format("MMM"),i.format("y")]})]})]})},be=function(){var e=Object(o.c)((function(e){return e.notes})).notes;return Object(ne.jsx)("div",{className:"journal__entries ",children:e.map((function(e){return Object(ne.jsx)(je,Object(y.a)({},e),e.id)}))})},pe=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})).name;return Object(ne.jsxs)("nav",{className:"journal__sidebar",children:[Object(ne.jsx)("div",{className:"journal__sidebar-btnlogout",children:Object(ne.jsx)("button",{className:"btn",onClick:function(){e(function(){var e=Object(M.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.auth().signOut();case 2:t(ae()),t({type:v});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Cerrar sesi\xf3n"})}),Object(ne.jsxs)("div",{className:"journal__sidebar-navbar",children:[Object(ne.jsx)("i",{className:"fa fa-moon"}),Object(ne.jsx)("h3",{children:Object(ne.jsxs)("span",{children:[" ",t]})})]}),Object(ne.jsxs)("div",{className:"journal__new-entry",onClick:function(){e(function(){var e=Object(M.a)(E.a.mark((function e(t,a){var n,r,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().auth.uid,r={title:"",body:"",date:(new Date).getTime()},e.next=4,z.collection("".concat(n,"/journal/notes")).add(r);case 4:c=e.sent,t(B(c.id,r)),t(H(c.id,r));case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())},children:[Object(ne.jsx)("i",{className:"far fa-calendar-plus fa-5x"}),Object(ne.jsx)("p",{className:"mt-5",children:"Nueva entrada"})]}),Object(ne.jsx)(be,{})]})},he=function(){var e=Object(o.c)((function(e){return e.notes})).active;return Object(ne.jsxs)("div",{className:"journal__main-content animate__animated animate__fadeIn",children:[Object(ne.jsx)(pe,{}),Object(ne.jsx)("main",{onClick:function(){document.querySelector(".journal__sidebar").classList.remove("journal__active")},children:e?Object(ne.jsx)(le,{}):Object(ne.jsx)(de,{})}),Object(ne.jsx)("a",{className:"journal__btnmore",onClick:function(){document.querySelector(".journal__sidebar").classList.toggle("journal__active")},children:Object(ne.jsx)("i",{className:"far fa-calendar-plus fa-2x"})})]})},me=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})).loading,a=oe({email:"",password:""}),n=Object(A.a)(a,3),r=n[0],c=n[1],s=(n[2],r.email),i=r.password;return Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)("h3",{className:"auth__title",children:"Iniciar sesi\xf3n"}),Object(ne.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(function(e,t){return function(a){a($()),R.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;a(te(t.uid,t.displayName)),a(ee())})).catch((function(e){a(ee()),F.a.fire("Ha ocurrido un error",U(e.code),"error")}))}}(s,i))},children:[Object(ne.jsx)("input",{type:"text",placeholder:"Email...",name:"email",className:"auth__input",autoComplete:"off",onChange:c,value:s}),Object(ne.jsx)("input",{type:"password",placeholder:"Password...",name:"password",className:"auth__input",onChange:c,value:i}),Object(ne.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",disabled:t,children:"Entrar"}),Object(ne.jsxs)("div",{className:"auth__social-networks",children:[Object(ne.jsx)("p",{children:"Iniciar con redes sociales"}),Object(ne.jsxs)("div",{className:"google-btn",onClick:function(){e((function(e){e($()),R.a.auth().signInWithPopup(T).then((function(t){var a=t.user;e(te(a.uid,a.displayName)),e(ee())})).catch((function(t){F.a.fire("Ha ocurrido un error",U(t.code),"error"),e(ee())}))}))},children:[Object(ne.jsx)("div",{className:"google-icon-wrapper",children:Object(ne.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(ne.jsx)("p",{className:"btn-text",children:Object(ne.jsx)("b",{children:"Entrar con Google"})})]})]}),Object(ne.jsx)(L.b,{to:"/auth/register",className:"link",children:"Registrarse aqu\xed"})]})]})},fe=a(66),Oe=a.n(fe),_e=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})).msgError,a=oe({name:"",email:"",password:"",password2:""}),n=Object(A.a)(a,3),r=n[0],c=n[1],s=(n[2],r.name),i=r.email,u=r.password,l=r.password2,d=function(){return 0===s.trim().length?(e(Z("Nombre es requerido")),!1):Oe.a.isEmail(i)?u!==l||u.length<5?(e(Z("Contrase\xf1as no coinciden (deben ser mayor a 4 caracteres)")),!1):(e({type:j}),!0):(e(Z("Email invalido")),!1)};return Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)("h3",{className:"auth__title",children:"Registrarse"}),t&&Object(ne.jsx)("div",{className:"auth__alert-error",children:t}),Object(ne.jsxs)("form",{onSubmit:function(t){t.preventDefault(),d()&&e(function(e,t,a){return function(n){R.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(M.a)(E.a.mark((function e(t){var r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.user,e.next=3,r.updateProfile({displayName:a});case 3:n(te(r.uid,r.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){n(ee()),F.a.fire("Ha ocurrido un error",U(e.code),"error")}))}}(i,u,s))},children:[Object(ne.jsx)("input",{type:"text",placeholder:"Nombre...",name:"name",className:"auth__input",autoComplete:"off",onChange:c,value:s}),Object(ne.jsx)("input",{type:"text",placeholder:"Email...",name:"email",className:"auth__input",autoComplete:"off",onChange:c,value:i}),Object(ne.jsx)("input",{type:"password",placeholder:"Contrase\xf1a...",name:"password",className:"auth__input",onChange:c,value:u}),Object(ne.jsx)("input",{type:"password",placeholder:"Confirmar contrase\xf1a...",name:"password2",className:"auth__input",onChange:c,value:l}),Object(ne.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-3",children:"Registrarse"}),Object(ne.jsx)(L.b,{to:"/auth/login",className:"link",children:"Logueate aqu\xed"})]})]})},ve=function(){return Object(ne.jsx)("div",{className:"auth__main ",children:Object(ne.jsx)("div",{className:"auth__box-container animate__animated animate__fadeIn",children:Object(ne.jsxs)(J.d,{children:[Object(ne.jsx)(J.b,{exact:!0,path:"/auth/login",component:me}),Object(ne.jsx)(J.b,{exact:!0,path:"/auth/register",component:_e}),Object(ne.jsx)(J.a,{to:"/auth/login"})]})})})},xe=a(35),ye=a(16),ge=a.n(ye),Ne=["isAuthenticated","component"],we=function(e){var t=e.isAuthenticated,a=e.component,n=Object(xe.a)(e,Ne);return""!=n.location.search&&void 0!=n.location.search?localStorage.setItem("lastPath",n.location.pathname+n.location.search):localStorage.setItem("lastPath",n.location.pathname),Object(ne.jsx)(J.b,Object(y.a)(Object(y.a)({},n),{},{component:function(e){return t?Object(ne.jsx)(a,Object(y.a)({},e)):Object(ne.jsx)(J.a,{to:"/auth/login"})}}))};we.protoTypes={isAuthenticated:ge.a.bool.isRequired,component:ge.a.func.isRequired};var ke=["isAuthenticated","component"],Se=function(e){var t=e.isAuthenticated,a=e.component,n=Object(xe.a)(e,ke);return Object(ne.jsx)(J.b,Object(y.a)(Object(y.a)({},n),{},{component:function(e){return t?Object(ne.jsx)(J.a,{to:"/"}):Object(ne.jsx)(a,Object(y.a)({},e))}}))};Se.protoTypes={isAuthenticated:ge.a.bool.isRequired,component:ge.a.func.isRequired};var Ce=function(){var e=Object(o.b)(),t=Object(n.useState)(!0),a=Object(A.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(!1),i=Object(A.a)(s,2),u=i[0],l=i[1];return Object(n.useEffect)((function(){I.a.auth().onAuthStateChanged(function(){var t=Object(M.a)(E.a.mark((function t(a){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===a||void 0===a?void 0:a.uid)?(e(te(a.uid,a.displayName)),l(!0),e(W(a.uid))):l(!1),c(!1);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,c,l]),r?Object(ne.jsx)(re,{}):Object(ne.jsx)(L.a,{children:Object(ne.jsxs)(J.d,{children:[Object(ne.jsx)(Se,{path:"/auth",isAuthenticated:u,component:ve}),Object(ne.jsx)(we,{exact:!0,isAuthenticated:u,path:"/",component:he}),Object(ne.jsx)(J.a,{to:"/auth/login"})]})})},Ee=function(){return Object(ne.jsx)(o.a,{store:S,children:Object(ne.jsx)(Ce,{})})};a(186);c.a.render(Object(ne.jsx)(Ee,{}),document.getElementById("root"))}},[[187,1,2]]]);
//# sourceMappingURL=main.2afc5ec2.chunk.js.map