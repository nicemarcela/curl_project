(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Bl7J:function(e,a,t){"use strict";var r=t("q1tI"),l=t.n(r),n=t("Wbzz"),s=t("LbRr"),c=t("JwsL"),i=(t("sg+I"),t("WTuT")),m=t.n(i);a.a=function(e){var a=e.children,t=e.pageTitle;return l.a.createElement(n.StaticQuery,{query:"3649515864",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.6.3/css/all.css",integrity:"sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/",crossOrigin:"anonymous"}),l.a.createElement(s.a,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("div",{className:"container",id:"content"},l.a.createElement("img",{className:"icon",src:m.a,alt:""}),l.a.createElement("h1",{className:"title"},t),l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",null,a))),l.a.createElement(c.a,null))}})}},CZVI:function(e,a,t){"use strict";var r=t("q1tI"),l=t.n(r),n=t("Wbzz"),s=t("k1TG"),c=t("8o2o"),i=t("TSYQ"),m=t.n(i),o=t("33Jr"),u=function(e){var a=e.className,t=e.cssModule,r=e.tag,n=Object(c.a)(e,["className","cssModule","tag"]),i=Object(o.g)(m()(a,"card-deck"),t);return l.a.createElement(r,Object(s.a)({},n,{className:i}))};u.defaultProps={tag:"div"};var d=u,g=t("x863"),E=function(e){var a=e.className,t=e.cssModule,r=e.tag,n=Object(c.a)(e,["className","cssModule","tag"]),i=Object(o.g)(m()(a,"card-title"),t);return l.a.createElement(r,Object(s.a)({},n,{className:i}))};E.defaultProps={tag:"div"};var f=E,b=function(e){var a=e.className,t=e.cssModule,r=e.tag,n=Object(c.a)(e,["className","cssModule","tag"]),i=Object(o.g)(m()(a,"card-text"),t);return l.a.createElement(r,Object(s.a)({},n,{className:i}))};b.defaultProps={tag:"p"};var p=b,v=t("9eSz"),N=t.n(v);a.a=function(e){var a=e.title,t=e.author,r=e.slug,s=e.date,c=e.body,i=e.fluid,m=e.product1,o=e.product2,u=e.product3,E=e.linkURL;e.instaURL,e.instagrammer,e.type;return l.a.createElement("layout",null,l.a.createElement(d,null,l.a.createElement("div",{className:"card-body px-0"},l.a.createElement("div",{className:"window window-2"},l.a.createElement("header",{className:"window-header"},l.a.createElement(g.a,null,l.a.createElement("span",{className:"card-subtitle"},s)," by "," ",l.a.createElement("a",{href:E,target:"_blank",rel:"noopener noreferrer",className:"text-info"},t)),l.a.createElement("nav",{className:"window-controls"})),l.a.createElement("div",{className:"dragbar-right",id:"resize-right"}),l.a.createElement("div",{className:"dragbar-left",id:"resize-left"}),l.a.createElement("div",{className:"dragbar-bottom",id:"resize-bottom"}),l.a.createElement("div",{className:"window-content p-4"},l.a.createElement(f,null,l.a.createElement(n.Link,{to:"/"+r+"/"},l.a.createElement("h2",null,a))),l.a.createElement(n.Link,{to:"/"+r+"/"},l.a.createElement(N.a,{className:"card-image my-4 w-100",fluid:i})),l.a.createElement(n.Link,{to:"/"+r+"/"},l.a.createElement(p,{className:"mx-0 mb-4"},c,m,o,u)),l.a.createElement(n.Link,{to:"/"+r+"/",className:"float-right item window1"},l.a.createElement("button",{className:"double-shadow highlighted"},"More")))))))}},Co3s:function(e,a,t){"use strict";var r=t("q1tI"),l=t.n(r),n=t("k1TG"),s=t("8o2o"),c=t("TSYQ"),i=t.n(c),m=t("33Jr"),o=function(e){var a,t=e.className,r=e.listClassName,c=e.cssModule,o=e.size,u=e.tag,d=e.listTag,g=e["aria-label"],E=Object(s.a)(e,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),f=Object(m.g)(i()(t),c),b=Object(m.g)(i()(r,"pagination",((a={})["pagination-"+o]=!!o,a)),c);return l.a.createElement(u,{className:f,"aria-label":g},l.a.createElement(d,Object(n.a)({},E,{className:b})))};o.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"};var u=o,d=function(e){var a=e.active,t=e.className,r=e.cssModule,c=e.disabled,o=e.tag,u=Object(s.a)(e,["active","className","cssModule","disabled","tag"]),d=Object(m.g)(i()(t,"page-item",{active:a,disabled:c}),r);return l.a.createElement(o,Object(n.a)({},u,{className:d}))};d.defaultProps={tag:"li"};var g=d,E=function(e){var a,t=e.className,r=e.cssModule,c=e.next,o=e.previous,u=e.first,d=e.last,g=e.tag,E=Object(s.a)(e,["className","cssModule","next","previous","first","last","tag"]),f=Object(m.g)(i()(t,"page-link"),r);o?a="Previous":c?a="Next":u?a="First":d&&(a="Last");var b,p=e["aria-label"]||a;o?b="‹":c?b="›":u?b="«":d&&(b="»");var v=e.children;return v&&Array.isArray(v)&&0===v.length&&(v=null),E.href||"a"!==g||(g="button"),(o||c||u||d)&&(v=[l.a.createElement("span",{"aria-hidden":"true",key:"caret"},v||b),l.a.createElement("span",{className:"sr-only",key:"sr"},p)]),l.a.createElement(g,Object(n.a)({},E,{className:f,"aria-label":p}),v)};E.defaultProps={tag:"a"};var f=E;a.a=function(e){var a=e.currentPage,t=e.numberOfPages,r=1===a,n=a===t,s=a-1==1?"/":"/page/"+(a-1).toString(),c="/page/"+(a+1).toString();return l.a.createElement(u,{className:"pagination","aria-label":"Page navigation example"},r?l.a.createElement(g,{disabled:!0},l.a.createElement(f,{previous:!0,href:"/"})):l.a.createElement(g,null,l.a.createElement(f,{previous:!0,href:s})),Array.from({length:t},(function(e,t){return a===t+1?l.a.createElement(g,{active:!0,key:"page-number"+(t+1)},l.a.createElement(f,{href:"/"+(0===t?"":"page/"+(t+1))},t+1)):l.a.createElement(g,{key:"page-number"+(t+1)},l.a.createElement(f,{href:"/"+(0===t?"":"page/"+(t+1))},t+1))})),n?l.a.createElement(g,{disabled:!0},l.a.createElement(f,{next:!0,href:c})):l.a.createElement(g,null,l.a.createElement(f,{next:!0,href:c})))}},RXBc:function(e,a,t){"use strict";t.r(a);var r=t("q1tI"),l=t.n(r),n=t("Bl7J"),s=t("vrFN"),c=t("Wbzz"),i=t("CZVI"),m=t("rO97"),o=t("Co3s"),u="2945517543";a.default=function(){var e;return l.a.createElement(n.a,{pageTitle:"What the Curl"},l.a.createElement(s.a,{title:"Home",keywords:["curly hair","healthy curls","curls"]}),l.a.createElement(c.StaticQuery,{query:u,render:function(a){return e=Math.ceil(a.allMarkdownRemark.totalCount/5),l.a.createElement("div",null,a.allMarkdownRemark.edges.map((function(e){var a=e.node;return l.a.createElement(i.a,{key:a.id,title:a.frontmatter.title,author:a.frontmatter.author,instagrammer:a.frontmatter.instagrammer,slug:a.fields.slug,date:a.frontmatter.date,body:a.excerpt,fluid:a.frontmatter.image.childImageSharp.fluid,linkURL:a.frontmatter.linkURL,instaURL:a.frontmatter.instaURL,type:a.frontmatter.type})})),l.a.createElement(o.a,{currentPage:1,numberOfPages:e}))}}),l.a.createElement(m.a,null))}},"sg+I":function(e,a,t){}}]);
//# sourceMappingURL=component---src-pages-index-js-705ca3be0ffcc8065d30.js.map