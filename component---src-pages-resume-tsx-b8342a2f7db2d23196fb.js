(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{UTyF:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n.n(a),r=n("VXBa"),l=n("6o60"),o=n("Wbzz"),d=n("vOnD"),m=d.b.div.withConfig({displayName:"styles__Timeline",componentId:"h53vrx-0"})(["",";&:last-child{",";}"],{display:"flex",flexDirection:"column","@media (min-width: 640px)":{flexDirection:"row"},width:"100%",padding:"1rem",position:"relative",borderLeftWidth:"1px",borderColor:"#c3dafe"},{paddingBottom:"0"}),c=d.b.div.withConfig({displayName:"styles__Details",componentId:"h53vrx-1"})(["",";"],{width:"100%","@media (min-width: 640px)":{width:"33.333333%"}}),s=d.b.div.withConfig({displayName:"styles__Content",componentId:"h53vrx-2"})(["",";"],{width:"100%","@media (min-width: 640px)":{width:"66.666667%",marginTop:"0"},marginTop:"1rem"}),p=d.b.div.withConfig({displayName:"styles__Title",componentId:"h53vrx-3"})(["",";"],{fontWeight:"600",marginTop:"0.75rem"}),u=d.b.div.withConfig({displayName:"styles__Subtitle",componentId:"h53vrx-4"})(["",";"],{fontSize:"0.75rem"}),h=d.b.div.withConfig({displayName:"styles__Date",componentId:"h53vrx-5"})(["",";width:fit-content;"],{fontSize:"0.75rem",borderWidth:"1px",borderColor:"#4fd1c5",borderRadius:"9999px",paddingLeft:"0.5rem",paddingRight:"0.5rem"}),f=d.b.span.withConfig({displayName:"styles__Point",componentId:"h53vrx-6"})(["",";left:-6px;top:20px;"],{width:"0.75rem",height:"0.75rem",borderWidth:"1px",borderColor:"#c3dafe",backgroundColor:"#ebf4ff",borderRadius:"9999px",position:"absolute"}),w=function(e){var t=e.title,n=e.subtitle,a=e.content,r=e.startDate,l=e.endDate;return i.a.createElement(m,null,i.a.createElement(f,null),i.a.createElement(c,null,i.a.createElement(h,null,r," - ",l),i.a.createElement(p,null,t),i.a.createElement(u,null,n)),i.a.createElement(s,null,a))},b=n("QArs"),g=n("XCao"),y=n("qnT+"),v=function(){var e=Object(o.useStaticQuery)("4033427577"),t=e.markdownRemark,n=e.allMarkdownRemark,a=t.frontmatter,r=n.edges;return i.a.createElement(b.a,{section:!0},i.a.createElement(g.a,{title:a.title,subtitle:a.subtitle}),r.map((function(e){var t=e.node,n=t.id,a=t.html,r=t.frontmatter,l=r.company,o=r.position,d=r.startDate,m=r.endDate;return i.a.createElement(w,{key:n,title:l,subtitle:o,content:i.a.createElement(y.a,{content:a}),startDate:d,endDate:m})})))},E=function(){var e=Object(o.useStaticQuery)("2252611511"),t=e.markdownRemark,n=e.allMarkdownRemark,a=t.frontmatter,r=n.edges;return i.a.createElement(b.a,{section:!0},i.a.createElement(g.a,{title:a.title,subtitle:a.subtitle}),r.map((function(e){var t=e.node,n=t.id,a=t.html,r=t.frontmatter,l=r.university,o=r.degree,d=r.startDate,m=r.endDate;return i.a.createElement(w,{key:n,title:l,subtitle:o,content:i.a.createElement(y.a,{content:a}),startDate:d,endDate:m})})))},_=d.b.div.withConfig({displayName:"styles__ProgressBar",componentId:"tlz4c6-0"})(["",";"],{padding:"0.75rem"}),C=d.b.div.withConfig({displayName:"styles__BarWrapper",componentId:"tlz4c6-1"})(["",";"],{width:"100%",height:"0.5rem",backgroundColor:"#e2e8f0",borderRadius:"0.25rem",overflow:"hidden",marginTop:"0.25rem"}),x=d.b.div.withConfig({displayName:"styles__Bar",componentId:"tlz4c6-2"})(["",";width:",";"],{height:"0.5rem",backgroundColor:"#4fd1c5"},(function(e){return e.percentage+"%"})),k=d.b.div.withConfig({displayName:"styles__Content",componentId:"tlz4c6-3"})(["",";"],{width:"100%",display:"flex",justifyContent:"space-between"}),I=d.b.h3.withConfig({displayName:"styles__Title",componentId:"tlz4c6-4"})(["",";"],{fontWeight:"600"}),N=d.b.h3.withConfig({displayName:"styles__Percentage",componentId:"tlz4c6-5"})(["",";"],{fontWeight:"600"}),D=function(e){var t=e.title,n=e.percentage;return i.a.createElement(_,null,i.a.createElement(k,null,i.a.createElement(I,null,t),i.a.createElement(N,null,n,"%")),i.a.createElement(C,null,i.a.createElement(x,{percentage:n})))},R=d.b.div.withConfig({displayName:"styles__Skills",componentId:"e4stw1-0"})(["",";"],{display:"flex",flexWrap:"wrap",width:"100%"}),T=d.b.div.withConfig({displayName:"styles__Skill",componentId:"e4stw1-1"})(["",";"],{width:"100%","@media (min-width: 640px)":{width:"50%"}}),z=function(){var e=Object(o.useStaticQuery)("1174766746"),t=e.markdownRemark,n=e.allMarkdownRemark,a=t.frontmatter,r=n.edges;return i.a.createElement(b.a,{section:!0},i.a.createElement(g.a,{title:a.title,subtitle:a.subtitle,center:!0}),i.a.createElement(R,null,r.map((function(e){var t=e.node,n=t.id,a=t.frontmatter,r=a.title,l=a.percentage;return i.a.createElement(T,{key:n},i.a.createElement(D,{title:r,percentage:l}))}))))};t.default=function(){return i.a.createElement(r.a,null,i.a.createElement(l.a,{title:"Resume"}),i.a.createElement(v,null),i.a.createElement("hr",null),i.a.createElement(E,null),i.a.createElement("hr",null),i.a.createElement(z,null))}},"qnT+":function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a);t.a=function(e){var t=e.content;return i.a.createElement("span",{className:"format-html",dangerouslySetInnerHTML:{__html:t}})}}}]);
//# sourceMappingURL=component---src-pages-resume-tsx-b8342a2f7db2d23196fb.js.map