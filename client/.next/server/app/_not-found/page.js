(()=>{var e={};e.id=492,e.ids=[492],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},9428:e=>{"use strict";e.exports=require("buffer")},9646:e=>{"use strict";e.exports=require("child_process")},5511:e=>{"use strict";e.exports=require("crypto")},4735:e=>{"use strict";e.exports=require("events")},9021:e=>{"use strict";e.exports=require("fs")},1630:e=>{"use strict";e.exports=require("http")},5591:e=>{"use strict";e.exports=require("https")},1645:e=>{"use strict";e.exports=require("net")},1820:e=>{"use strict";e.exports=require("os")},3873:e=>{"use strict";e.exports=require("path")},7910:e=>{"use strict";e.exports=require("stream")},4631:e=>{"use strict";e.exports=require("tls")},3997:e=>{"use strict";e.exports=require("tty")},9551:e=>{"use strict";e.exports=require("url")},8354:e=>{"use strict";e.exports=require("util")},4075:e=>{"use strict";e.exports=require("zlib")},9727:()=>{},7990:()=>{},778:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>o.a,__next_app__:()=>c,pages:()=>u,routeModule:()=>p,tree:()=>d});var s=t(260),n=t(8203),i=t(5155),o=t.n(i),a=t(7292),l={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);t.d(r,l);let d=["",{children:["/_not-found",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.t.bind(t,9937,23)),"next/dist/client/components/not-found-error"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,9611)),"C:\\Users\\khami\\OneDrive\\Desktop\\next\\client\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(t.t.bind(t,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(t.t.bind(t,1485,23)),"next/dist/client/components/unauthorized-error"]}],u=[],c={require:t,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/_not-found/page",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},2748:(e,r,t)=>{Promise.resolve().then(t.bind(t,9611))},2828:(e,r,t)=>{Promise.resolve().then(t.bind(t,811))},4768:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,3219,23)),Promise.resolve().then(t.t.bind(t,4863,23)),Promise.resolve().then(t.t.bind(t,5155,23)),Promise.resolve().then(t.t.bind(t,802,23)),Promise.resolve().then(t.t.bind(t,9350,23)),Promise.resolve().then(t.t.bind(t,8530,23)),Promise.resolve().then(t.t.bind(t,8921,23))},1616:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,6959,23)),Promise.resolve().then(t.t.bind(t,3875,23)),Promise.resolve().then(t.t.bind(t,1284,23)),Promise.resolve().then(t.t.bind(t,7174,23)),Promise.resolve().then(t.t.bind(t,4178,23)),Promise.resolve().then(t.t.bind(t,7190,23)),Promise.resolve().then(t.t.bind(t,1365,23))},811:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>m});var s=t(5512),n=t(8009),i=t(2273),o=t(2231),a=t(3208);let l=(0,o.U1)({reducer:{data:a.Ay}});var d=t(9334),u=t(8531),c=t.n(u);let p=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("header",{children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"header",children:[(0,s.jsx)("link",{className:"logo",href:"/"}),(0,s.jsxs)("nav",{className:"navigation",children:[(0,s.jsx)(c(),{href:"/main",className:"active",children:"Главная"}),(0,s.jsx)(c(),{href:"/aboutUs",className:"active",children:"О нас"}),(0,s.jsx)(c(),{href:"/contacts",className:"active",children:"Контакты"}),(0,s.jsx)(c(),{href:"/faq",className:"active",children:"FAQ"})]})]})})})});var h=t(3160);t(246),t(2390);let x=({children:e})=>{let r=(0,d.usePathname)(),t=(0,i.wA)();return(0,n.useEffect)(()=>{h.A.emit("path",r),t((0,a.e$)(r))},[r]),(0,s.jsxs)("div",{children:[(0,s.jsx)(p,{}),(0,s.jsx)("main",{children:e})]})};function m({children:e}){return(0,s.jsx)("html",{lang:"en",children:(0,s.jsx)("body",{children:(0,s.jsx)(i.Kq,{store:l,children:(0,s.jsx)(x,{children:e})})})})}t(1423)},3208:(e,r,t)=>{"use strict";t.d(r,{Ay:()=>o,e$:()=>i,y:()=>n});let s=(0,t(2231).Z0)({name:"user",initialState:{localName:null,OwnGender:null,currentPath:"/main",searchOptions:{searchPartnerGender:null}},reducers:{sendUserQuery:(e,r)=>{let{localName:t,OwnGender:s,PartnerGender:n}=r.payload;e.localName=t,e.OwnGender=s,e.searchOptions.searchPartnerGender=n},setPageLog:(e,r)=>{e.currentPath=r.payload}}}),{sendUserQuery:n,setPageLog:i}=s.actions,o=s.reducer},3160:(e,r,t)=>{"use strict";t.d(r,{A:()=>s});let s=(0,t(2226).io)("http://localhost:4000")},9611:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});let s=(0,t(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\khami\\\\OneDrive\\\\Desktop\\\\next\\\\client\\\\app\\\\layout.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\khami\\OneDrive\\Desktop\\next\\client\\app\\layout.tsx","default")},1423:()=>{}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[93],()=>t(778));module.exports=s})();