(function(e){function t(t){for(var o,c,s=t[0],i=t[1],l=t[2],d=0,b=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&b.push(r[c][0]),r[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);u&&u(t);while(b.length)b.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,s=1;s<n.length;s++){var i=n[s];0!==r[i]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/ladepause/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"012e":function(e,t,n){},"0fb7":function(e,t,n){"use strict";n("b09d")},"36c8":function(e,t,n){"use strict";n("7889")},4662:function(e,t,n){"use strict";n("012e")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r=n("6c02"),a=n("5502"),c={setUser:function(e,t){e.token=t.token,e.userId=t.userId,e.tokenExpiration=t.tokenExpiration}},s=n("1da1"),i=(n("96cf"),n("d3b7"),{login:function(e,t){return Object(s["a"])(regeneratorRuntime.mark((function n(){var o,r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC2AAM8_qojsjyJ-GdovgWzkbIpauHeMwE",{method:"POST",body:JSON.stringify({email:t.email,password:t.password,returnSecureToken:!0})});case 2:return o=n.sent,n.next=5,o.json();case 5:if(r=n.sent,o.ok){n.next=10;break}throw console.log(r),a=new Error(r.message||"Failed to authenticate"),a;case 10:console.log(r),e.commit("setUser",{token:r.idToken,userId:r.localId,tokenExpiration:r.expiresIn});case 12:case"end":return n.stop()}}),n)})))()},signup:function(e,t){return Object(s["a"])(regeneratorRuntime.mark((function n(){var o,r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC2AAM8_qojsjyJ-GdovgWzkbIpauHeMwE",{method:"POST",body:JSON.stringify({email:t.email,password:t.password,returnSecureToken:!0})});case 2:return o=n.sent,n.next=5,o.json();case 5:if(r=n.sent,o.ok){n.next=10;break}throw console.log(r),a=new Error(r.message||"Failed to authenticate"),a;case 10:console.log(r),e.commit("setUser",{token:r.idToken,userId:r.localId,tokenExpiration:r.expiresIn});case 12:case"end":return n.stop()}}),n)})))()}}),l={userId:function(e){return e.userId},token:function(e){return e.token},isAuthenticated:function(e){return!!e.token}},u={state:function(){return{userId:null,token:null,tokenExpiration:null}},mutations:c,actions:i,getters:l},d={setStasjoner:function(e,t){console.log("Setter stasjoner"),e.stasjoner=t}},b=(n("99af"),{hentStasjoner:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:8080/stasjoner/random/10",{method:"GET"});case 2:return n=t.sent,t.next=5,n.json();case 5:if(o=t.sent,n.ok){t.next=10;break}throw console.log(o),r=new Error(o.message||"Failed to authenticate"),r;case 10:console.log(o),e.commit("setStasjoner",o);case 12:case"end":return t.stop()}}),t)})))()},"hentNærmesteStasjoner":function(e,t){return Object(s["a"])(regeneratorRuntime.mark((function n(){var o,r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("http://localhost:8080/stasjoner/lat/".concat(t.lat,"/lon/").concat(t.lon),{method:"GET"});case 2:return o=n.sent,n.next=5,o.json();case 5:if(r=n.sent,o.ok){n.next=10;break}throw console.log(r),a=new Error(r.message||"Failed to authenticate"),a;case 10:console.log(r),e.commit("setStasjoner",r);case 12:case"end":return n.stop()}}),n)})))()}}),f={stasjoner:function(e){return e.stasjoner}},m={state:function(){return{stasjoner:[]}},mutations:d,actions:b,getters:f},j=Object(a["a"])({modules:{auth:u,stasjoner:m},state:function(){return{counter:0}},mutations:{increment:function(e){e.counter=e.counter+1},increase:function(e,t){e.counter=e.counter+t.value}},getters:{finalCounter:function(e){return e.counter}}}),p=j;function h(e,t,n,r,a,c){var s=Object(o["C"])("the-header"),i=Object(o["C"])("router-view"),l=Object(o["C"])("the-footer");return Object(o["u"])(),Object(o["g"])(o["a"],null,[Object(o["k"])(s),Object(o["k"])(i),Object(o["k"])(l)],64)}var O={class:"container py-5"},g=Object(o["i"])('<div class="row"><div class="col-12 col-md"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mb-2"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg><small class="d-block mb-3 text-muted">© 2021-2021</small></div><div class="col-6 col-md"><h5>Features</h5><ul class="list-unstyled text-small"><li><a class="text-muted" href="#">Cool stuff</a></li><li><a class="text-muted" href="#">Random feature</a></li><li><a class="text-muted" href="#">Team feature</a></li><li><a class="text-muted" href="#">Stuff for developers</a></li><li><a class="text-muted" href="#">Another one</a></li><li><a class="text-muted" href="#">Last time</a></li></ul></div><div class="col-6 col-md"><h5>Resources</h5><ul class="list-unstyled text-small"><li><a class="text-muted" href="#">Resource</a></li><li><a class="text-muted" href="#">Resource name</a></li><li><a class="text-muted" href="#">Another resource</a></li><li><a class="text-muted" href="#">Final resource</a></li></ul></div><div class="col-6 col-md"><h5>Resources</h5><ul class="list-unstyled text-small"><li><a class="text-muted" href="#">Business</a></li><li><a class="text-muted" href="#">Education</a></li><li><a class="text-muted" href="#">Government</a></li><li><a class="text-muted" href="#">Gaming</a></li></ul></div><div class="col-6 col-md"><h5>About</h5><ul class="list-unstyled text-small"><li><a class="text-muted" href="#">Team</a></li><li><a class="text-muted" href="#">Locations</a></li><li><a class="text-muted" href="#">Privacy</a></li><li><a class="text-muted" href="#">Terms</a></li></ul></div></div>',1),v=[g];function x(e,t,n,r,a,c){return Object(o["u"])(),Object(o["g"])("footer",O,v)}var y={name:"TheFooter"},k=n("6b0d"),w=n.n(k),I=w()(y,[["render",x]]),C={class:"site-header sticky-top py-1"},_={class:"container d-flex flex-column flex-md-row justify-content-between"},E=Object(o["i"])('<a class="py-2" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg></a>',1),S=Object(o["j"])("Home"),A=Object(o["j"])("Aktiviteter"),B=Object(o["j"])("Ladestasjoner"),M=Object(o["j"])("Login"),T=Object(o["j"])("Profil");function P(e,t,n,r,a,c){var s=Object(o["C"])("router-link");return Object(o["u"])(),Object(o["g"])("nav",C,[Object(o["h"])("div",_,[E,Object(o["k"])(s,{to:"/",class:"py-2 d-none d-md-inline-block"},{default:Object(o["I"])((function(){return[S]})),_:1}),Object(o["k"])(s,{to:"aktiviteter",class:"py-2 d-none d-md-inline-block"},{default:Object(o["I"])((function(){return[A]})),_:1}),Object(o["k"])(s,{to:"ladestasjoner",class:"py-2 d-none d-md-inline-block"},{default:Object(o["I"])((function(){return[B]})),_:1}),c.isLoggedIn?Object(o["f"])("",!0):(Object(o["u"])(),Object(o["e"])(s,{key:0,to:"auth",class:"py-2 d-none d-md-inline-block"},{default:Object(o["I"])((function(){return[M]})),_:1})),c.isLoggedIn?(Object(o["u"])(),Object(o["e"])(s,{key:1,to:"profile",class:"py-2 d-none d-md-inline-bloc"},{default:Object(o["I"])((function(){return[T]})),_:1})):Object(o["f"])("",!0)])])}var L={name:"TheHeader",components:{},computed:{isLoggedIn:function(){return this.$store.getters.isAuthenticated}}},R=w()(L,[["render",P]]),$={name:"App",components:{TheFooter:I,TheHeader:R}},F=(n("0fb7"),w()($,[["render",h]]));function G(e,t){return Object(o["u"])(),Object(o["g"])("div",null,[Object(o["B"])(e.$slots,"default",{},void 0,!0)])}n("4662");const J={};var H=w()(J,[["render",G],["__scopeId","data-v-41b8bddf"]]);Object(o["x"])("data-v-8bf9fbc0");var U=["type"];function q(e,t,n,r,a,c){return Object(o["u"])(),Object(o["g"])("button",{type:n.type,class:Object(o["q"])([n.mode,"btn btn-primary"])},[Object(o["B"])(e.$slots,"default",{},void 0,!0)],10,U)}Object(o["v"])();var N={props:["type","mode"]},V=(n("e76e"),w()(N,[["render",q],["__scopeId","data-v-8bf9fbc0"]]));Object(o["x"])("data-v-142bda68");var z={open:""},W=Object(o["j"])("Close");function D(e,t,n,r,a,c){var s=Object(o["C"])("base-button");return Object(o["u"])(),Object(o["e"])(o["b"],{to:"body"},[Object(o["h"])("div",{onClick:t[0]||(t[0]=function(t){return e.$emit("close")})}),Object(o["h"])("dialog",z,[Object(o["h"])("header",null,[Object(o["B"])(e.$slots,"header",{},(function(){return[Object(o["h"])("h2",null,Object(o["E"])(n.title),1)]}),{},!0)]),Object(o["h"])("section",null,[Object(o["B"])(e.$slots,"default",{},void 0,!0)]),Object(o["h"])("menu",null,[Object(o["B"])(e.$slots,"actions",{},(function(){return[Object(o["k"])(s,{onClick:t[1]||(t[1]=function(t){return e.$emit("close")})},{default:Object(o["I"])((function(){return[W]})),_:1})]}),{},!0)])])])}Object(o["v"])();var K={components:{BaseButton:V},props:{title:{required:!1,type:String}},emits:["close"]},Y=(n("36c8"),w()(K,[["render",D],["__scopeId","data-v-142bda68"]])),Q={class:"d-md-flex flex-md-equal w-100 my-md-3 pl-md-3"},X=Object(o["i"])('<div class="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden"><div class="my-3 py-3"><h2 class="display-5">Another headline</h2><p class="lead">And an even wittier subheading.</p></div><div class="bg-light box-shadow mx-auto" style="width:80%;height:300px;border-radius:21px 21px 0 0;"></div></div><div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"><div class="my-3 p-3"><h2 class="display-5">Another headline</h2><p class="lead">And an even wittier subheading.</p></div></div>',2),Z=[X];function ee(e,t,n,r,a,c){return Object(o["u"])(),Object(o["g"])("div",Q,Z)}var te={},ne=w()(te,[["render",ee]]);function oe(e,t,n,r,a,c){return Object(o["u"])(),Object(o["g"])("h2",null,"Welcome")}var re={},ae=w()(re,[["render",oe]]),ce=(n("b0c0"),Object(o["j"])("Hent nærmeste stasjoner"));function se(e,t,n,r,a,c){var s=Object(o["C"])("base-button"),i=Object(o["C"])("base-card");return Object(o["u"])(),Object(o["g"])(o["a"],null,[Object(o["k"])(s,{onClick:c.getCurrentGeolocation},{default:Object(o["I"])((function(){return[ce]})),_:1},8,["onClick"]),(Object(o["u"])(!0),Object(o["g"])(o["a"],null,Object(o["A"])(c.stasjoner,(function(e){return Object(o["u"])(),Object(o["e"])(i,{key:e.internationalId},{default:Object(o["I"])((function(){return[Object(o["h"])("p",null,[Object(o["h"])("b",null,Object(o["E"])(e.name),1)]),Object(o["h"])("p",null,"Gate: "+Object(o["E"])(e.street)+" "+Object(o["E"])(e.houseNumber),1),Object(o["h"])("p",null,Object(o["E"])(e.distanse),1)]})),_:2},1024)})),128))],64)}var ie={created:function(){this.$store.dispatch("hentStasjoner")},components:{BaseButton:V,BaseCard:H},computed:{stasjoner:function(){return this.$store.getters.stasjoner}},data:function(){return{location:null}},methods:{getCurrentGeolocation:function(){var e=this;navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(t){e.location=t,e.$store.dispatch("hentNærmesteStasjoner",{lat:e.location.coords.latitude,lon:e.location.coords.longitude})}))}}},le=w()(ie,[["render",se]]);Object(o["x"])("data-v-64bd1730");var ue={key:0},de=Object(o["h"])("p",null,"Authenticating...",-1),be={class:"form-group"},fe=Object(o["h"])("label",{for:"email"},"E-mail",-1),me={class:"form-group"},je=Object(o["h"])("label",{for:"email"},"Password",-1),pe={key:0},he=Object(o["h"])("div",null,[Object(o["h"])("h3",null,"You are logged in, lucky you! Enjoy")],-1);function Oe(e,t,n,r,a,c){var s=Object(o["C"])("base-dialog"),i=Object(o["C"])("base-button"),l=Object(o["C"])("base-card");return Object(o["u"])(),Object(o["g"])(o["a"],null,[c.isLoggedIn?Object(o["f"])("",!0):(Object(o["u"])(),Object(o["g"])("div",ue,[null!=a.errorMessage?(Object(o["u"])(),Object(o["e"])(s,{key:0,onClose:c.dismissError,title:"An error occured"},{default:Object(o["I"])((function(){return[Object(o["h"])("p",null,Object(o["E"])(a.errorMessage),1)]})),_:1},8,["onClose"])):Object(o["f"])("",!0),a.isLoading?(Object(o["u"])(),Object(o["e"])(s,{key:1,title:"Authenticating..."},{default:Object(o["I"])((function(){return[de]})),_:1})):Object(o["f"])("",!0),Object(o["k"])(l,null,{default:Object(o["I"])((function(){return[Object(o["h"])("form",{onSubmit:t[2]||(t[2]=Object(o["K"])((function(){return c.submitForm&&c.submitForm.apply(c,arguments)}),["prevent"]))},[Object(o["h"])("div",be,[fe,Object(o["J"])(Object(o["h"])("input",{type:"email",id:"email",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.email=e})},null,512),[[o["G"],a.email,void 0,{trim:!0}]])]),Object(o["h"])("div",me,[je,Object(o["J"])(Object(o["h"])("input",{type:"password",id:"password",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.password=e})},null,512),[[o["G"],a.password,void 0,{trim:!0}]])]),a.formIsValid?Object(o["f"])("",!0):(Object(o["u"])(),Object(o["g"])("p",pe,"Please enter a valid email and password (password has to be at least 6 characters long)")),Object(o["k"])(i,null,{default:Object(o["I"])((function(){return[Object(o["j"])(Object(o["E"])(c.submitButtonCaption),1)]})),_:1}),Object(o["k"])(i,{type:"button",mode:"flat",onClick:c.switchAuthMode},{default:Object(o["I"])((function(){return[Object(o["j"])(Object(o["E"])(c.switchModeButtonCaption),1)]})),_:1},8,["onClick"])],32)]})),_:1})])),he],64)}Object(o["v"])();n("caad"),n("2532");var ge={components:{BaseDialog:Y,BaseCard:H,BaseButton:V},data:function(){return{email:"",password:"",formIsValid:!0,mode:"login",isLoading:!1,errorMessage:null}},computed:{submitButtonCaption:function(){return"login"===this.mode?"Login":"Signup"},switchModeButtonCaption:function(){return"login"===this.mode?"Signup instead":"Login instead"},isLoggedIn:function(){return this.$store.getters.isAuthenticated}},methods:{submitForm:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!==e.email&&e.email.includes("@")&&!(e.password.length<6)){t.next=3;break}return e.formIsValid=!1,t.abrupt("return");case 3:if(e.isLoading=!0,t.prev=4,"login"!==e.mode){t.next=10;break}return t.next=8,e.$store.dispatch("login",{email:e.email,password:e.password});case 8:t.next=12;break;case 10:return t.next=12,e.$store.dispatch("signup",{email:e.email,password:e.password});case 12:t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](4),e.errorMessage=t.t0.message||"Failed to authenticate, try later. Check your login data";case 17:e.isLoading=!1;case 18:case"end":return t.stop()}}),t,null,[[4,14]])})))()},switchAuthMode:function(){"login"===this.mode?this.mode="signup":this.mode="login"},dismissError:function(){this.errorMessage=null}}},ve=(n("b48a"),w()(ge,[["render",Oe],["__scopeId","data-v-64bd1730"]]));function xe(e,t,n,r,a,c){return Object(o["u"])(),Object(o["g"])("h2",null,"Profil")}var ye={},ke=w()(ye,[["render",xe]]),we=Object(r["a"])({history:Object(r["b"])(),routes:[{path:"/aktiviteter",component:ne},{path:"/",component:ae},{path:"/ladestasjoner",component:le},{path:"/auth",component:ve},{path:"/profile",component:ke}]}),Ie=Object(o["d"])(F);Ie.use(p),Ie.use(we),Ie.component("base-card",H),Ie.component("base-button",V),Ie.component("base-dialog",Y),Ie.mount("#app")},"783a":function(e,t,n){},7889:function(e,t,n){},b09d:function(e,t,n){},b48a:function(e,t,n){"use strict";n("783a")},ccc2:function(e,t,n){},e76e:function(e,t,n){"use strict";n("ccc2")}});
//# sourceMappingURL=app.070e8d5b.js.map