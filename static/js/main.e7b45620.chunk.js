(this["webpackJsonpreact-tailwindcss-portfolio"]=this["webpackJsonpreact-tailwindcss-portfolio"]||[]).push([[0],{18:function(e,t,r){"use strict";var a=r(2);t.a=function(e){var t=e.title;return Object(a.jsx)("button",{children:t})}},23:function(e,t,r){"use strict";var a=r(8),s=r(1);t.a=function(){var e=Object(s.useState)(localStorage.theme),t=Object(a.a)(e,2),r=t[0],n=t[1],l="dark"===r?"light":"dark";return Object(s.useEffect)((function(){var e=window.document.documentElement;e.classList.remove(l),e.classList.add(r),localStorage.setItem("theme",r)}),[r,l]),[l,n]}},26:function(e,t,r){},29:function(e,t,r){},37:function(e,t,r){"use strict";r.r(t);r(26);var a=r(40),s=r(1),n=r(13),l=r(3),c=function(){var e=Object(l.e)().pathname;return Object(s.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},i=r(7),d=r(2);var o=function(){return Object(d.jsx)("div",{className:"font-general-regular flex justify-center items-center text-center",children:Object(d.jsxs)("div",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:["\xa9 ",(new Date).getFullYear(),Object(d.jsx)("a",{href:"https://github.com/devrogergrof",target:"__blank",className:"text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500",children:"Devrogergroff"})]})})},m=[{id:2,icon:Object(d.jsx)(i.d,{}),url:"https://github.com/devrogergrof"},{id:4,icon:Object(d.jsx)(i.e,{}),url:"https://www.linkedin.com/in/roger-g-30bb33117/"}],x=function(){return Object(d.jsx)("div",{className:"container mx-auto",children:Object(d.jsxs)("div",{className:"pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark",children:[Object(d.jsxs)("div",{className:"font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28",children:[Object(d.jsx)("p",{className:"text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5",children:"Follow me"}),Object(d.jsx)("ul",{className:"flex gap-4 sm:gap-8",children:m.map((function(e){return Object(d.jsx)("a",{href:e.url,target:"__blank",className:"text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300",children:Object(d.jsx)("i",{className:"text-xl sm:text-2xl md:text-3xl",children:e.icon})},e.id)}))})]}),Object(d.jsx)(o,{})]})})},b=r(8),j=r(23),h=r(39),u=r(18),g=["Web Application","Mobile Application","UI/UX Design","Branding"],p=function(e){var t=e.onClose;e.onRequest;return Object(d.jsxs)(h.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"font-general-medium fixed inset-0 z-30 transition-all duration-500",children:[Object(d.jsx)("div",{className:"bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"}),Object(d.jsx)("main",{className:"flex flex-col items-center justify-center h-full w-full",children:Object(d.jsx)("div",{className:"modal-wrapper flex items-center z-30",children:Object(d.jsxs)("div",{className:"modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative",children:[Object(d.jsxs)("div",{className:"modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark",children:[Object(d.jsx)("h5",{className:" text-primary-dark dark:text-primary-light text-xl",children:"What project are you looking for?"}),Object(d.jsx)("button",{onClick:t,className:"px-4 font-bold text-primary-dark dark:text-primary-light",children:Object(d.jsx)(i.n,{className:"text-3xl"})})]}),Object(d.jsx)("div",{className:"modal-body p-5 w-full h-full",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault()},className:"max-w-xl m-4 text-left",children:[Object(d.jsx)("div",{className:"",children:Object(d.jsx)("input",{className:"w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"name",name:"name",type:"text",required:"",placeholder:"Name","aria-label":"Name"})}),Object(d.jsx)("div",{className:"mt-6",children:Object(d.jsx)("input",{className:"w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"email",name:"email",type:"text",required:"",placeholder:"Email","aria-label":"Email"})}),Object(d.jsx)("div",{className:"mt-6",children:Object(d.jsx)("select",{className:"w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"subject",name:"subject",type:"text",required:"","aria-label":"Project Category",children:g.map((function(e){return Object(d.jsx)("option",{className:"text-normal sm:text-md",children:e},e)}))})}),Object(d.jsx)("div",{className:"mt-6",children:Object(d.jsx)("textarea",{className:"w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"message",name:"message",cols:"14",rows:"6","aria-label":"Details",placeholder:"Project description"})}),Object(d.jsx)("div",{className:"mt-6 pb-4 sm:pb-1",children:Object(d.jsx)("span",{onClick:t,type:"submit",className:"px-4\r sm:px-6\r py-2\r sm:py-2.5\r text-white\r bg-indigo-500\r hover:bg-indigo-600\r rounded-md\r focus:ring-1 focus:ring-indigo-900 duration-500","aria-label":"Submit Request",children:Object(d.jsx)(u.a,{title:"Send Request"})})})]})}),Object(d.jsx)("div",{className:"modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right",children:Object(d.jsx)("span",{onClick:t,type:"button",className:"px-4\r sm:px-6\r py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light\r rounded-md\r focus:ring-1 focus:ring-indigo-900 duration-500","aria-label":"Close Modal",children:Object(d.jsx)(u.a,{title:"Close"})})})]})})})]})},y=r.p+"static/media/indiano.48daaf2f.svg",k=(r.p,function(){var e=Object(s.useState)(!1),t=Object(b.a)(e,2),r=t[0],a=t[1],l=Object(s.useState)(!1),c=Object(b.a)(l,2),o=c[0],m=c[1],x=Object(j.a)(),g=Object(b.a)(x,2),k=g[0],f=g[1];function O(){o?(document.getElementsByTagName("html")[0].classList.remove("overflow-y-hidden"),m(!1)):(document.getElementsByTagName("html")[0].classList.add("overflow-y-hidden"),m(!0))}return Object(d.jsxs)(h.a.nav,{initial:{opacity:0},animate:{opacity:1},id:"nav",className:"sm:container sm:mx-auto",children:[Object(d.jsxs)("div",{className:"z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6",children:[Object(d.jsxs)("div",{className:"flex justify-between items-center px-4 sm:px-0",children:[Object(d.jsx)("div",{children:Object(d.jsx)(n.b,{to:"/",children:"dark"===k?Object(d.jsxs)("div",{className:"flex justify-between items-center px-4",children:[Object(d.jsx)("img",{src:y,style:{width:"5em"},alt:"Dark Logo"})," "]}):Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:y,style:{width:"5em"},alt:"Dark Logo"})})})}),Object(d.jsx)("div",{onClick:function(){return f(k)},"aria-label":"Theme Switcher",className:"block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer",children:"dark"===k?Object(d.jsx)(i.i,{className:"text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl"}):Object(d.jsx)(i.l,{className:"text-gray-200 hover:text-gray-50 text-xl"})}),Object(d.jsx)("div",{className:"sm:hidden",children:Object(d.jsx)("button",{onClick:function(){a(!r)},type:"button",className:"focus:outline-none","aria-label":"Hamburger Menu",children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light",children:r?Object(d.jsx)(i.n,{className:"text-3xl"}):Object(d.jsx)(i.h,{className:"text-3xl"})})})})]}),Object(d.jsxs)("div",{className:r?"block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none":"hidden",children:[Object(d.jsx)(n.b,{to:"/projects",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2","aria-label":"Projects",children:"Projects"}),Object(d.jsx)(n.b,{to:"/about",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"About Me",children:"About Me"}),Object(d.jsx)(n.b,{to:"/contact",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"Contact",children:"Contact"}),Object(d.jsx)("div",{className:"border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark",children:Object(d.jsx)("span",{onClick:O,className:"font-general-medium sm:hidden block text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24","aria-label":"Hire Me Button",children:Object(d.jsx)(u.a,{title:"Hire Me"})})})]}),Object(d.jsxs)("div",{className:"font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none",children:[Object(d.jsx)(n.b,{to:"/projects",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2","aria-label":"Projects",children:"Projects"}),Object(d.jsx)(n.b,{to:"/about",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2","aria-label":"About Me",children:"About Me"}),Object(d.jsx)(n.b,{to:"/contact",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2","aria-label":"Contact",children:"Contact"})]}),Object(d.jsxs)("div",{className:"hidden sm:flex justify-between items-center flex-col md:flex-row",children:[Object(d.jsx)("div",{className:"hidden md:flex",children:Object(d.jsx)("span",{onClick:O,className:"text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300","aria-label":"Hire Me Button",children:Object(d.jsx)(u.a,{title:"Hire Me"})})}),Object(d.jsx)("div",{onClick:function(){return f(k)},"aria-label":"Theme Switcher",className:"ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer",children:"dark"===k?Object(d.jsx)(i.i,{className:"text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl"}):Object(d.jsx)(i.l,{className:"text-gray-200 hover:text-gray-50 text-xl"})})]})]}),Object(d.jsxs)("div",{children:[o?Object(d.jsx)(p,{onClose:O,onRequest:O}):null,o?O:null]})]})}),f=(r(29),function(){var e=Object(s.useState)(!1),t=Object(b.a)(e,2),r=t[0],a=t[1];Object(s.useEffect)((function(){return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}));var n=function(){!r&&window.pageYOffset>400?a(!0):r&&window.pageYOffset<=400&&a(!1)};return window.addEventListener("scroll",n),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(i.b,{className:"scrollToTop",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{height:45,width:45,borderRadius:50,right:50,bottom:50,display:r?"flex":"none",padding:5}})})}),O=Object(s.lazy)((function(){return r.e(5).then(r.bind(null,48))})),v=Object(s.lazy)((function(){return r.e(7).then(r.bind(null,50))})),w=Object(s.lazy)((function(){return r.e(3).then(r.bind(null,51))})),N=Object(s.lazy)((function(){return r.e(4).then(r.bind(null,46))})),C=Object(s.lazy)((function(){return r.e(6).then(r.bind(null,49))}));var S=function(){return Object(d.jsx)(a.a,{children:Object(d.jsxs)("div",{className:" bg-secondary-light dark:bg-primary-dark transition duration-300",children:[Object(d.jsxs)(n.a,{children:[Object(d.jsx)(c,{}),Object(d.jsx)(k,{}),Object(d.jsx)(s.Suspense,{fallback:"",children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:"/",element:Object(d.jsx)(w,{})}),Object(d.jsx)(l.a,{path:"projects",element:Object(d.jsx)(N,{})}),Object(d.jsx)(l.a,{path:"projects/single-project",element:Object(d.jsx)(C,{})}),Object(d.jsx)(l.a,{path:"about",element:Object(d.jsx)(O,{})}),Object(d.jsx)(l.a,{path:"contact",element:Object(d.jsx)(v,{})})]})}),Object(d.jsx)(x,{})]}),Object(d.jsx)(f,{})]})})},E=function(e){e&&e instanceof Function&&r.e(8).then(r.bind(null,47)).then((function(t){var r=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,l=t.getTTFB;r(e),a(e),s(e),n(e),l(e)}))},L=r(25),M=document.getElementById("root");Object(L.createRoot)(M).render(Object(d.jsx)(S,{})),E()}},[[37,1,2]]]);
//# sourceMappingURL=main.e7b45620.chunk.js.map