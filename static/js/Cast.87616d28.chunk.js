(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[1],{75:function(t,e,c){"use strict";c.r(e),c.d(e,"default",(function(){return r}));var a=c(1),s=c(62),i=c(0),n=c(61),o=c(76),l=c.n(o);function r(t){var e=t.movieId,c=Object(i.useState)([]),o=Object(s.a)(c,2),r=o[0],m=o[1],u=Object(i.useState)(null),h=Object(s.a)(u,2),j=(h[0],h[1]);return console.log(e),Object(i.useEffect)((function(){Object(n.c)(e).then((function(t){var e=t.cast;console.log(e),m(e)})).catch((function(t){j(t)}))}),[e]),console.log(r),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("ul",{className:l.a.list,children:r&&r.map((function(t){return Object(a.jsxs)("li",{className:l.a.item,children:[Object(a.jsx)("img",{className:l.a.image,src:n.a+t.profile_path,alt:t.name,widht:"200",height:"250"}),Object(a.jsxs)("p",{children:[t.name||t.original_name," as ",t.character]})]},t.id)}))})})}},76:function(t,e,c){t.exports={list:"Cast_list__vzJSX",item:"Cast_item__2pNz4",image:"Cast_image__1mhUo"}}}]);
//# sourceMappingURL=Cast.87616d28.chunk.js.map