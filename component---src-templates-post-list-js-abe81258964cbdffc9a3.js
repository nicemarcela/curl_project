(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Bl7J:function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r),l=t("Wbzz"),s=t("LbRr"),c=(t("sg+I"),t("WTuT")),i=t.n(c);a.a=function(e){var a=e.children,t=e.pageTitle;return n.a.createElement(l.StaticQuery,{query:"3649515864",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.6.3/css/all.css",integrity:"sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/",crossOrigin:"anonymous"}),n.a.createElement(s.a,{siteTitle:e.site.siteMetadata.title}),n.a.createElement("div",{className:"container",id:"content"},n.a.createElement("img",{className:"icon",src:i.a,alt:""}),n.a.createElement("h1",{className:"title"},t),n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",null,a))))}})}},CZVI:function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r),l=t("Wbzz"),s=t("x863"),c=t("k1TG"),i=t("8o2o"),m=t("TSYQ"),o=t.n(m),u=t("33Jr"),d=function(e){var a=e.className,t=e.cssModule,r=e.tag,l=Object(i.a)(e,["className","cssModule","tag"]),s=Object(u.f)(o()(a,"card-title"),t);return n.a.createElement(r,Object(c.a)({},l,{className:s}))};d.defaultProps={tag:"div"};var g=d,f=function(e){var a=e.className,t=e.cssModule,r=e.tag,l=Object(i.a)(e,["className","cssModule","tag"]),s=Object(u.f)(o()(a,"card-text"),t);return n.a.createElement(r,Object(c.a)({},l,{className:s}))};f.defaultProps={tag:"p"};var E=f,b=t("9eSz"),p=t.n(b);a.a=function(e){var a=e.title,t=e.author,r=e.slug,c=e.date,i=e.body,m=e.fluid,o=e.product1,u=e.product2,d=e.product3,f=e.linkURL,b=(e.type,e.color);return n.a.createElement("div",null,n.a.createElement("div",{className:"card-body px-0"},n.a.createElement("div",{className:"window window-2"},n.a.createElement("header",{className:"window-header"},n.a.createElement(s.a,null,n.a.createElement("span",{className:"card-subtitle"},c)," by "," ",n.a.createElement("a",{href:f,target:"_blank",rel:"noopener noreferrer",className:"text-info"},t)),n.a.createElement("nav",{className:"window-controls"})),n.a.createElement("div",{className:"dragbar-right",id:"resize-right"}),n.a.createElement("div",{className:"dragbar-left",id:"resize-left"}),n.a.createElement("div",{className:"dragbar-bottom",id:"resize-bottom"}),n.a.createElement("div",{className:"window-content p-4"},n.a.createElement("span",{style:{color:b}},n.a.createElement(g,null,n.a.createElement(l.Link,{to:"/"+r+"/"},n.a.createElement("h2",null,a))),n.a.createElement(l.Link,{to:"/"+r+"/"},n.a.createElement(p.a,{className:"card-image my-4 w-100",fluid:m})),n.a.createElement(l.Link,{to:"/"+r+"/"},n.a.createElement(E,{className:"mx-0 mb-4"},i,o,u,d)),n.a.createElement(l.Link,{to:"/"+r+"/",className:"float-right item window1"},n.a.createElement("button",{className:"double-shadow highlighted"},"More")))))))}},Co3s:function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r),l=t("k1TG"),s=t("8o2o"),c=t("TSYQ"),i=t.n(c),m=t("33Jr"),o=function(e){var a,t=e.className,r=e.listClassName,c=e.cssModule,o=e.size,u=e.tag,d=e.listTag,g=e["aria-label"],f=Object(s.a)(e,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),E=Object(m.f)(i()(t),c),b=Object(m.f)(i()(r,"pagination",((a={})["pagination-"+o]=!!o,a)),c);return n.a.createElement(u,{className:E,"aria-label":g},n.a.createElement(d,Object(l.a)({},f,{className:b})))};o.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"};var u=o,d=function(e){var a=e.active,t=e.className,r=e.cssModule,c=e.disabled,o=e.tag,u=Object(s.a)(e,["active","className","cssModule","disabled","tag"]),d=Object(m.f)(i()(t,"page-item",{active:a,disabled:c}),r);return n.a.createElement(o,Object(l.a)({},u,{className:d}))};d.defaultProps={tag:"li"};var g=d,f=function(e){var a,t=e.className,r=e.cssModule,c=e.next,o=e.previous,u=e.first,d=e.last,g=e.tag,f=Object(s.a)(e,["className","cssModule","next","previous","first","last","tag"]),E=Object(m.f)(i()(t,"page-link"),r);o?a="Previous":c?a="Next":u?a="First":d&&(a="Last");var b,p=e["aria-label"]||a;o?b="‹":c?b="›":u?b="«":d&&(b="»");var v=e.children;return v&&Array.isArray(v)&&0===v.length&&(v=null),f.href||"a"!==g||(g="button"),(o||c||u||d)&&(v=[n.a.createElement("span",{"aria-hidden":"true",key:"caret"},v||b),n.a.createElement("span",{className:"sr-only",key:"sr"},p)]),n.a.createElement(g,Object(l.a)({},f,{className:E,"aria-label":p}),v)};f.defaultProps={tag:"a"};var E=f;a.a=function(e){var a=e.currentPage,t=e.numberOfPages,r=1===a,l=a===t,s=a-1==1?"/":"/page/"+(a-1).toString(),c="/page/"+(a+1).toString();return n.a.createElement(u,{className:"pagination","aria-label":"Page navigation example"},r?n.a.createElement(g,{disabled:!0},n.a.createElement(E,{previous:!0,href:"/"})):n.a.createElement(g,null,n.a.createElement(E,{previous:!0,href:s})),Array.from({length:t},(function(e,t){return a===t+1?n.a.createElement(g,{active:!0,key:"page-number"+(t+1)},n.a.createElement(E,{href:"/"+(0===t?"":"page/"+(t+1))},t+1)):n.a.createElement(g,{key:"page-number"+(t+1)},n.a.createElement(E,{href:"/"+(0===t?"":"page/"+(t+1))},t+1))})),l?n.a.createElement(g,{disabled:!0},n.a.createElement(E,{next:!0,href:c})):n.a.createElement(g,null,n.a.createElement(E,{next:!0,href:c})))}},JBOV:function(e,a,t){"use strict";t.r(a),t.d(a,"postListQuery",(function(){return m}));var r=t("q1tI"),n=t.n(r),l=t("Bl7J"),s=t("CZVI"),c=t("Co3s"),i=t("rO97"),m="2186495054";a.default=function(e){var a=e.data.allMarkdownRemark.edges,t=e.pageContext,r=t.currentPage,m=t.numberOfPages;return n.a.createElement(l.a,{pageTitle:"What the Curl"},a.map((function(e){var a=e.node;return n.a.createElement(s.a,{key:a.id,slug:a.fields.slug,title:a.frontmatter.title,author:a.frontmatter.author,date:a.frontmatter.date,body:a.excerpt,tags:a.frontmatter.tags,fluid:a.frontmatter.image.childImageSharp.fluid})})),n.a.createElement(c.a,{currentPage:r,numberOfPages:m}),n.a.createElement(i.a,null))}},"sg+I":function(e,a,t){}}]);
//# sourceMappingURL=component---src-templates-post-list-js-abe81258964cbdffc9a3.js.map