(()=>{var e={};e.id=457,e.ids=[457],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},9428:e=>{"use strict";e.exports=require("buffer")},9646:e=>{"use strict";e.exports=require("child_process")},5511:e=>{"use strict";e.exports=require("crypto")},4735:e=>{"use strict";e.exports=require("events")},9021:e=>{"use strict";e.exports=require("fs")},1630:e=>{"use strict";e.exports=require("http")},5591:e=>{"use strict";e.exports=require("https")},1645:e=>{"use strict";e.exports=require("net")},1820:e=>{"use strict";e.exports=require("os")},3873:e=>{"use strict";e.exports=require("path")},7910:e=>{"use strict";e.exports=require("stream")},4631:e=>{"use strict";e.exports=require("tls")},3997:e=>{"use strict";e.exports=require("tty")},9551:e=>{"use strict";e.exports=require("url")},8354:e=>{"use strict";e.exports=require("util")},4075:e=>{"use strict";e.exports=require("zlib")},9727:()=>{},7990:()=>{},4274:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>c});var s=r(260),n=r(8203),i=r(5155),a=r.n(i),o=r(7292),l={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let c=["",{children:["chat",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,2225)),"C:\\Users\\khami\\OneDrive\\Desktop\\next\\client\\app\\chat\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,9611)),"C:\\Users\\khami\\OneDrive\\Desktop\\next\\client\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"]}],d=["C:\\Users\\khami\\OneDrive\\Desktop\\next\\client\\app\\chat\\page.tsx"],u={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/chat/page",pathname:"/chat",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},4299:(e,t,r)=>{Promise.resolve().then(r.bind(r,2225))},323:(e,t,r)=>{Promise.resolve().then(r.bind(r,8445))},2748:(e,t,r)=>{Promise.resolve().then(r.bind(r,9611))},2828:(e,t,r)=>{Promise.resolve().then(r.bind(r,811))},4768:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3219,23)),Promise.resolve().then(r.t.bind(r,4863,23)),Promise.resolve().then(r.t.bind(r,5155,23)),Promise.resolve().then(r.t.bind(r,802,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,8530,23)),Promise.resolve().then(r.t.bind(r,8921,23))},1616:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6959,23)),Promise.resolve().then(r.t.bind(r,3875,23)),Promise.resolve().then(r.t.bind(r,1284,23)),Promise.resolve().then(r.t.bind(r,7174,23)),Promise.resolve().then(r.t.bind(r,4178,23)),Promise.resolve().then(r.t.bind(r,7190,23)),Promise.resolve().then(r.t.bind(r,1365,23))},8445:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(5512),n=r(3160),i=r(9334),a=r(8009),o=r(2273);r(7929);let l=()=>{let e=(0,a.useRef)(null),t=(0,i.useRouter)(),{localName:r}=(0,o.d4)(e=>e.data),[l,c]=(0,a.useState)(""),[d,u]=(0,a.useState)([]),[p,h]=(0,a.useState)(!1),m=(0,a.useRef)(null),x=()=>{l.trim()&&(n.A.emit("sendMessae",l),c(""),u(e=>e.length>10?e.slice(1):e))},v=e=>{c(e)},f=()=>{n.A.on("liveMsg",e=>{u(t=>[...t,e])})},b=d.some(e=>"Хочу Музыку"===e.msg);(0,a.useEffect)(()=>{e.current&&b&&e.current.play(),m.current?.scrollIntoView({behavior:"smooth"})},[d,b]),(0,a.useEffect)(()=>(f(),n.A.on("currentUser",e=>{e<=1&&t.push("/loader")}),()=>{n.A.off("currentUser"),n.A.off("liveMsg"),n.A.emit("chat_leave",r)}),[t,r]);let j=e=>{"Enter"===e.key&&(e.preventDefault(),x())};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"chat-container",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"chat",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("a",{href:"",children:"Завершить чат"}),(0,s.jsx)("a",{href:"",children:"Пожаловаться"})]}),(0,s.jsxs)("div",{className:"set-message",children:[(0,s.jsxs)("audio",{ref:e,children:[(0,s.jsx)("source",{src:"https://zaycev.europium.zerocdn.com/bc43a68fa9baa2a25fa99e1933b20e4b:2025012512/track/24881994.mp3",type:"audio/mp3"}),"Ваш браузер не поддерживает элемент audio."]}),(0,s.jsxs)("div",{className:"message",children:[(0,s.jsx)("span",{className:"",children:"Администратор"}),(0,s.jsx)("span",{className:"",children:"Моменты первого контакта могут изменить вашу жизнь. Сделайте этот первый шаг и отправьте сообщение."}),(0,s.jsx)("div",{children:["Хочу Музыку","Как дела?"].map((e,t)=>(0,s.jsx)("span",{onClick:()=>v(e),className:"music",children:e},t))})]}),d.map((e,t)=>(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{ref:m,className:"message",children:[(0,s.jsx)("span",{className:"textUser",children:e.name}),(0,s.jsx)("span",{className:"",children:e.msg})]},t)}))]}),(0,s.jsxs)("form",{className:"chat-form",action:"",children:[(0,s.jsx)("input",{onChange:e=>c(e.target.value),onClick:()=>h(!0),className:`text-input ${p?"sizeText":""}`,type:"text",placeholder:"Введите ваше сообшение",onKeyDown:e=>j(e),value:l}),(0,s.jsx)("input",{onClick:()=>x(),className:"submit-button",type:"button",value:"Отправить"})]})]})})})})}},811:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var s=r(5512),n=r(8009),i=r(2273),a=r(2231),o=r(3208);let l=(0,a.U1)({reducer:{data:o.Ay}});var c=r(9334),d=r(8531),u=r.n(d);let p=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("header",{children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"header",children:[(0,s.jsx)("link",{className:"logo",href:"/"}),(0,s.jsxs)("nav",{className:"navigation",children:[(0,s.jsx)(u(),{href:"/main",className:"active",children:"Главная"}),(0,s.jsx)(u(),{href:"/aboutUs",className:"active",children:"О нас"}),(0,s.jsx)(u(),{href:"/contacts",className:"active",children:"Контакты"}),(0,s.jsx)(u(),{href:"/faq",className:"active",children:"FAQ"})]})]})})})});var h=r(3160);let m=({children:e})=>{let t=(0,c.usePathname)(),r=(0,i.wA)();return(0,n.useEffect)(()=>{h.A.emit("path",t),r((0,o.e$)(t))},[t]),(0,s.jsxs)("div",{children:[(0,s.jsx)(p,{}),(0,s.jsx)("main",{children:e})]})};function x({children:e}){return(0,s.jsx)("html",{lang:"en",children:(0,s.jsx)("body",{children:(0,s.jsx)(i.Kq,{store:l,children:(0,s.jsx)(m,{children:e})})})})}r(1423)},3208:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>a,e$:()=>i,y:()=>n});let s=(0,r(2231).Z0)({name:"user",initialState:{localName:null,OwnGender:null,currentPath:"/main",searchOptions:{searchPartnerGender:null}},reducers:{sendUserQuery:(e,t)=>{let{localName:r,OwnGender:s,PartnerGender:n}=t.payload;e.localName=r,e.OwnGender=s,e.searchOptions.searchPartnerGender=n},setPageLog:(e,t)=>{e.currentPath=t.payload}}}),{sendUserQuery:n,setPageLog:i}=s.actions,a=s.reducer},3160:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(2226).io)("http://192.168.43.89:4000/")},2225:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\khami\\\\OneDrive\\\\Desktop\\\\next\\\\client\\\\app\\\\chat\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\khami\\OneDrive\\Desktop\\next\\client\\app\\chat\\page.tsx","default")},9611:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\khami\\\\OneDrive\\\\Desktop\\\\next\\\\client\\\\app\\\\layout.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\khami\\OneDrive\\Desktop\\next\\client\\app\\layout.tsx","default")},7929:()=>{},1423:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[403],()=>r(4274));module.exports=s})();