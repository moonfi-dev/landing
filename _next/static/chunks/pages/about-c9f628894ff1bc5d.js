(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{4613:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(8540)}])},2787:function(e,t,n){"use strict";n.d(t,{w:function(){return s}});var r=n(5893),l=n(1664),i=n(7294),s=function(){var e=(0,i.useState)(!1),t=e[0],n=e[1];return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("nav",{id:"#navbar",className:"flex items-center flex-wrap px-10 py-6",children:[(0,r.jsx)(l.default,{href:"/",children:(0,r.jsx)("a",{className:"inline-flex items-center",children:(0,r.jsx)("span",{className:"text-xl text-main-color font-bold tracking-wide",children:"moonfi"})})}),(0,r.jsx)("button",{className:"inline-flex p-3 rounded lg:hidden text-main-color ml-auto outline-none",onClick:function(){n(!t)},children:(0,r.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})}),(0,r.jsx)("div",{className:"".concat(t?"":"hidden","   w-full lg:inline-flex lg:flex-grow lg:w-auto"),children:(0,r.jsxs)("div",{className:"lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto",children:[(0,r.jsx)(l.default,{href:"/about",passHref:!0,children:(0,r.jsx)("button",{type:"button",className:"w-full items-center justify-center rounded-full px-5 py-2 tracking-wide text-main-color md:inline-flex md:w-auto",children:"About"})}),(0,r.jsx)(l.default,{href:"https://app.moonfi.co",children:(0,r.jsx)("button",{type:"button",className:"lg:inline-flex lg:w-auto w-full px-5 py-2 rounded-full bg-secondary-color text-main-color font-semibold items-center justify-center",children:"Earn Now"})})]})})]})})}},8540:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(5893),l=n(9008),i=n(1664),s=n(5675),a=n(2787),o=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("footer",{className:"flex flex-wrap h-32 w-full items-center align-bottom lg:px-20 md:px-10 px-5 bg-secondary-color",children:[(0,r.jsx)("button",{type:"button",onClick:function(){void 0!==window&&document.getElementById("#navbar").scrollIntoView({behavior:"smooth"})},className:"",children:(0,r.jsx)("span",{className:"text-xl text-main-color font-bold tracking-wide",children:"moonfi"})}),(0,r.jsx)("div",{className:"flex-row ml-auto w-auto",children:(0,r.jsx)(i.default,{href:"https://discord.gg/AY85vWmgev",children:(0,r.jsx)("a",{className:"inline-flex items-center",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(s.default,{className:"",src:"/discord.svg",height:30,width:110})})})})]})})},c=n(7379),d=n.n(c),u=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"flex md:flex-row flex-col",children:[(0,r.jsx)("div",{className:"flex-1 basis-3/4 justify-end items-end",children:(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsxs)("div",{className:"basis-3/4 text-left",children:[(0,r.jsx)("div",{className:d().typewriter1,children:(0,r.jsx)("p",{className:"font-bold lg:text-6xl md:text-4xl sm:text-3xl text-[22px] text-main-color tracking-wider",children:"Earn 8% APY"})}),(0,r.jsx)("div",{className:d().typewriter2,children:(0,r.jsx)("p",{className:"font-bold lg:text-6xl md:text-4xl sm:text-3xl text-[22px] text-main-color tracking-wider",children:"By Playing Wordle"})})]}),(0,r.jsx)("div",{className:"basis-1/4 mt-10",children:(0,r.jsxs)("h2",{className:"text-left lg:text-xl md:text-lg text-base p-2",children:["Earn up to ",(0,r.jsx)("b",{children:"8%"})," interest on your savings - by playing Wordle. Join us now to earn the highest yields on the market and have fun doing so."]})})]})}),(0,r.jsx)("div",{className:"basis-1/4 items-end justify-end",children:(0,r.jsx)(s.default,{className:"m-auto",src:"/game-art.svg",alt:"game",layout:"responsive",width:300,height:300})})]})})},x=n(4051),m=n.n(x),f=n(4758),h=n.n(f),p=n(7294),g=n(3829),j=n.n(g),w=n(3999);function b(e,t,n,r,l,i,s){try{var a=e[i](s),o=a.value}catch(c){return void n(c)}a.done?t(o):Promise.resolve(o).then(r,l)}var v=function(){var e=(0,p.useState)(""),t=e[0],n=e[1],l=(0,p.useState)(!1),i=l[0],s=l[1],a=(0,p.useState)(null),o=a[0],c=a[1],d=function(){var e,n=(e=m().mark((function e(n){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),t){e.next=6;break}return c("Missing email"),e.abrupt("return");case 6:if(!(t.length>300)){e.next=11;break}return c("Email is too long"),e.abrupt("return");case 11:if(w.validate(t)){e.next=14;break}return c("Invalid email"),e.abrupt("return");case 14:j().configure({endpointUrl:"https://api.airtable.com",apiKey:"keyFAXO0VtU5TJJps"}),j().base("appkVPmuqkHjI60sy")("Table 1").create([{fields:{Email:JSON.stringify(t)}}],(function(e,t){e&&c(e)})),s(!0);case 18:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,l){var i=e.apply(t,n);function s(e){b(i,r,l,s,a,"next",e)}function a(e){b(i,r,l,s,a,"throw",e)}s(void 0)}))});return function(e){return n.apply(this,arguments)}}();return i?(0,r.jsx)("div",{className:h().formWrapper,children:(0,r.jsx)("span",{className:h().subtitle,children:"Thanks for signing up! We will be in touch soon."})}):(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("form",{className:h().formWrapper,onSubmit:d,children:[(0,r.jsx)("input",{type:"email",required:!0,placeholder:"Email",className:[h().formInput,h().formTextInput].join(" "),value:t,onChange:function(e){return n(e.target.value)}}),(0,r.jsx)("button",{type:"submit",className:[h().formInput,h().formSubmitButton].join(" "),children:"Join Email List"}),o?(0,r.jsx)("div",{className:h().error,children:o}):null]})})},y=function(){return(0,r.jsxs)("div",{className:"bg-white min-h-screen flex flex-col",children:[(0,r.jsxs)(l.default,{children:[(0,r.jsx)("title",{children:"moonfi"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("main",{className:"w-screen min-h-screen flex flex-col",children:[(0,r.jsx)(a.w,{}),(0,r.jsxs)("div",{className:"grow flex flex-col justify-center items-center lg:px-36 px-12 pb-5",children:[(0,r.jsx)(u,{}),(0,r.jsxs)("div",{className:"flex md:flex-row flex-col justify-between justify-items-stretch lg:mb-10 md:mb-8 mb-2 mt-5",children:[(0,r.jsx)(i.default,{href:"https://discord.gg/AY85vWmgev",children:(0,r.jsxs)("a",{className:"flex mx-10 lg:px-10 md:px-8 py-2 rounded-full bg-main-color text-white font-semibold items-center justify-center",children:[(0,r.jsx)(s.default,{className:"flex",src:"/discordLogo.svg",height:30,width:30}),(0,r.jsx)("div",{className:"ml-3 text-white whitespace-nowrap",children:"Join Discord"})]})}),(0,r.jsx)("div",{className:"flex-1 md:grow-0 md:ml-auto sm:w-full flex md:my-0 my-5",children:(0,r.jsx)(v,{})})]})]}),(0,r.jsx)(o,{})]})]})}},4758:function(e){e.exports={formWrapper:"Email_formWrapper__gERCd",formInput:"Email_formInput__JbziU",formTextInput:"Email_formTextInput__yxiKO",formSubmitButton:"Email_formSubmitButton__EcUNy",error:"Email_error__Gljhz"}},7379:function(e){e.exports={typewriter1:"Header_typewriter1__SrSch",typing:"Header_typing__Hp_kr","blink-caret":"Header_blink-caret__ztYM_",typewriter2:"Header_typewriter2__F6Li_",slidein:"Header_slidein__ZnMyP",typewriter3:"Header_typewriter3__oMF2j"}}},function(e){e.O(0,[985,774,888,179],(function(){return t=4613,e(e.s=t);var t}));var t=e.O();_N_E=t}]);