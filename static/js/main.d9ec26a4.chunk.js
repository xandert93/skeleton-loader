(this["webpackJsonpskeleton-loader"]=this["webpackJsonpskeleton-loader"]||[]).push([[0],{21:function(e,t,c){},41:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c(16),r=c.n(n),a=(c(21),c(3)),j=c.n(a),i=c(4),l=c(6),o=c(5),d=c.n(o),b=(c(41),c(0)),u=function(e){var t=e.type;return Object(b.jsx)("div",{className:"skeleton ".concat(t)})},h=function(){return Object(b.jsx)("div",{className:"shimmer-container",children:Object(b.jsx)("div",{className:"shimmer"})})},x=function(e){var t=e.theme;return Object(b.jsxs)("div",{className:"skeleton-container ".concat(t),children:[Object(b.jsxs)("div",{className:"skeleton-article",children:[Object(b.jsx)(u,{type:"title"}),Object(b.jsx)(u,{type:"text"}),Object(b.jsx)(u,{type:"text"}),Object(b.jsx)(u,{type:"text"})]}),Object(b.jsx)(h,{})]})};x.defaultProps={theme:"light"};var O=x,p=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){setTimeout(Object(i.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("https://jsonplaceholder.typicode.com/posts");case 3:t=e.sent,n(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),5e3)}),[]),Object(b.jsxs)("div",{className:"articles",children:[Object(b.jsx)("h2",{children:"All articles"}),c.length?c.map((function(e){return Object(b.jsxs)("div",{className:"article",children:[Object(b.jsx)("h3",{children:e.title}),Object(b.jsx)("p",{children:e.body})]},e.id)})):[1,2,3,4,5].map((function(e){return Object(b.jsx)(O,{},e)}))]})},m=function(e){var t=e.theme;return Object(b.jsxs)("div",{className:"skeleton-container ".concat(t),children:[Object(b.jsxs)("div",{className:"skeleton-userProfile",children:[Object(b.jsx)("div",{children:Object(b.jsx)(u,{type:"avatar"})}),Object(b.jsxs)("div",{children:[Object(b.jsx)(u,{type:"title"}),Object(b.jsx)(u,{type:"text"}),Object(b.jsx)(u,{type:"text"})]})]}),Object(b.jsx)(h,{})]})};m.defaultProps={theme:"light"};var v=m,f=function(){var e=Object(s.useState)(null),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){setTimeout(Object(i.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("https://jsonplaceholder.typicode.com/users/1");case 3:t=e.sent,n(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),3e3)}),[]),Object(b.jsxs)("div",{className:"user",children:[Object(b.jsx)("h2",{children:"User Details"}),c?Object(b.jsxs)("div",{className:"profile",children:[Object(b.jsx)("h3",{children:c.username}),Object(b.jsx)("p",{children:c.email}),Object(b.jsx)("a",{href:c.website,children:c.website})]}):Object(b.jsx)(v,{theme:"dark"})]})};var k=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("header",{children:Object(b.jsx)("h1",{children:"React Skeleton Loader"})}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)(p,{}),Object(b.jsx)(f,{})]})]})};r.a.render(Object(b.jsx)(k,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.d9ec26a4.chunk.js.map