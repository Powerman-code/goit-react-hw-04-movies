(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[3],{65:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var s=a(1),i=a(66),c=a.n(i);function n(e){var t=e.message;return console.log(t),Object(s.jsx)("h1",{className:c.a.message,children:t})}},66:function(e,t,a){e.exports={message:"FilmErrorView_message__3f_h2"}},72:function(e,t,a){e.exports={card:"MovieDetailsPage_card__13K25",image:"MovieDetailsPage_image__s4ofL",title:"MovieDetailsPage_title__TDeLC",subtitle:"MovieDetailsPage_subtitle__k_Zbg",info:"MovieDetailsPage_info__Z4-jN",nav:"MovieDetailsPage_nav__2KYgr",link:"MovieDetailsPage_link__1dX9h",activeLink:"MovieDetailsPage_activeLink__1qMYi MovieDetailsPage_link__1dX9h",list:"MovieDetailsPage_list__wQCoP",item:"MovieDetailsPage_item__2uID4",button:"MovieDetailsPage_button__3Y0CH",buttonLabel:"MovieDetailsPage_buttonLabel__14MIQ"}},78:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var s=a(1),i=a(62),c=a(0),n=a(3),l=a(9),o=a(61),j=a(15),r=a(65),b=a(72),u=a.n(b),d=Object(c.lazy)((function(){return a.e(5).then(a.bind(null,73))})),v=Object(c.lazy)((function(){return a.e(1).then(a.bind(null,75))})),_="pending",O="rejected",h="resolved";function m(){var e=Object(n.i)(),t=e.url,a=e.path,b=Object(n.g)(),m=Object(n.f)(),g=Object(n.h)().movieId,x=Object(c.useState)(null),f=Object(i.a)(x,2),p=f[0],N=f[1],k=Object(c.useState)(null),D=Object(i.a)(k,2),M=D[0],P=D[1],w=Object(c.useState)(_),L=Object(i.a)(w,2),C=L[0],S=L[1],I=Object(c.useState)([]),y=Object(i.a)(I,2),Y=y[0],z=y[1];Object(c.useEffect)((function(){g&&Object(o.b)(g).then((function(e){N(e),S(h),z(e.genres)})).catch((function(e){P(e),S(O)}))}),[g]);return C===_?Object(s.jsx)(j.a,{}):C===O?Object(s.jsx)(r.a,{message:M.message}):C===h?Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{type:"button",onClick:function(){var e,t;m.push(null!==(e=null===b||void 0===b||null===(t=b.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies")},className:u.a.button,children:Object(s.jsx)("span",{className:u.a.buttonLabel,children:"Go Back"})}),p&&Object(s.jsxs)("div",{className:u.a.card,children:[Object(s.jsx)("div",{children:Object(s.jsx)("img",{className:u.a.image,src:o.a+p.poster_path,alt:p.title,width:"300",height:"450"})}),Object(s.jsxs)("div",{lassName:u.a.info,children:[p.name&&Object(s.jsxs)("p",{className:u.a.title,children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: ",p.name]}),p.title&&Object(s.jsxs)("p",{className:u.a.title,children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: ",p.title]}),p.original_title&&Object(s.jsxs)("p",{className:u.a.title,children:["\u041e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: ",p.original_title]}),Object(s.jsxs)("p",{className:u.a.subtitle,children:["User Score: ",p.vote_average]}),Object(s.jsxs)("p",{className:u.a.subtitle,children:["Release date: ",p.release_date]}),Object(s.jsxs)("p",{className:u.a.subtitle,children:["Overwiew: ",p.overview]}),Object(s.jsxs)("ul",{className:u.a.list,children:["Genres:",Y&&Y.map((function(e){return Object(s.jsx)("li",{className:u.a.item,children:e.name},e.id)}))]})]})]}),Object(s.jsxs)("nav",{children:[Object(s.jsx)(l.c,{to:"".concat(t,"/cast"),className:u.a.link,activeClassName:u.a.activeLink,children:"Cast"}),Object(s.jsx)(l.c,{to:"".concat(t,"/reviews"),className:u.a.link,activeClassName:u.a.activeLink,children:"Reviews"})]}),Object(s.jsx)(c.Suspense,{fallback:Object(s.jsx)(j.a,{}),children:Object(s.jsxs)(n.c,{children:[Object(s.jsx)(n.a,{path:"".concat(a,"/cast"),children:Object(s.jsx)(v,{movieId:g})}),Object(s.jsx)(n.a,{path:"".concat(a,"/reviews"),children:Object(s.jsx)(d,{movieId:g})})]})})]}):void 0}}}]);
//# sourceMappingURL=MovieDetailsPage.d5b14968.chunk.js.map