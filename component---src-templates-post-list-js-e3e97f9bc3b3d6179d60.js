(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Bl7J:function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r),l=t("Wbzz"),s=t("LbRr"),c=t("JwsL"),i=(t("sg+I"),t("WTuT")),m=t.n(i);a.a=function(e){var a=e.children,t=e.pageTitle;return n.a.createElement(l.StaticQuery,{query:"3649515864",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.6.3/css/all.css",integrity:"sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/",crossOrigin:"anonymous"}),n.a.createElement(s.a,{siteTitle:e.site.siteMetadata.title}),n.a.createElement("div",{className:"container",id:"content"},n.a.createElement("img",{className:"icon",src:m.a,alt:""}),n.a.createElement("h1",{className:"title"},t),n.a.createElement("h3",{className:"brand-description"},"Community-based stories to inspire your natural hair journey."),n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",null,a))),n.a.createElement(c.a,null))}})}},CZVI:function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r),l=t("Wbzz"),s=t("k1TG"),c=t("8o2o"),i=t("TSYQ"),m=t.n(i),o=t("33Jr"),u=function(e){var a=e.className,t=e.cssModule,r=e.tag,l=Object(c.a)(e,["className","cssModule","tag"]),i=Object(o.g)(m()(a,"card-deck"),t);return n.a.createElement(r,Object(s.a)({},l,{className:i}))};u.defaultProps={tag:"div"};var d=u,g=t("2Te1"),b=t("x863"),E=function(e){var a=e.className,t=e.cssModule,r=e.tag,l=Object(c.a)(e,["className","cssModule","tag"]),i=Object(o.g)(m()(a,"card-title"),t);return n.a.createElement(r,Object(s.a)({},l,{className:i}))};E.defaultProps={tag:"div"};var f=E,p=function(e){var a=e.className,t=e.cssModule,r=e.tag,l=Object(c.a)(e,["className","cssModule","tag"]),i=Object(o.g)(m()(a,"card-text"),t);return n.a.createElement(r,Object(s.a)({},l,{className:i}))};p.defaultProps={tag:"p"};var v=p,N=t("9eSz"),h=t.n(N),y=t("b+5I");a.a=function(e){var a=e.title,t=e.author,r=e.slug,s=e.date,c=e.body,i=e.fluid,m=e.product1,o=e.product2,u=e.product3,E=e.linkURL,p=(e.instaURL,e.instagrammer,e.type,e.tags);return n.a.createElement("layout",null,n.a.createElement(d,null,n.a.createElement("div",{className:"card-body px-0"},n.a.createElement("div",{className:"window window-2"},n.a.createElement("header",{className:"window-header"},n.a.createElement("ul",null,p.map((function(e){return n.a.createElement("li",{key:e},n.a.createElement(l.Link,{to:"/tag/"+Object(y.slugify)(e)},n.a.createElement(g.a,{color:"badge badge-light mb-1 text-center",pill:!0},e)))}))),n.a.createElement(b.a,null,n.a.createElement("span",{className:"card-subtitle"},s)," by "," ",n.a.createElement("a",{href:E,target:"_blank",rel:"noopener noreferrer",className:"text-info"},t)),n.a.createElement("nav",{className:"window-controls"})),n.a.createElement("div",{className:"dragbar-right",id:"resize-right"}),n.a.createElement("div",{className:"dragbar-left",id:"resize-left"}),n.a.createElement("div",{className:"dragbar-bottom",id:"resize-bottom"}),n.a.createElement("div",{className:"window-content p-4"},n.a.createElement(f,null,n.a.createElement(l.Link,{to:"/"+r+"/"},n.a.createElement("h2",null,a))),n.a.createElement(l.Link,{to:"/"+r+"/"},n.a.createElement(h.a,{className:"card-image my-4 w-100",fluid:i})),n.a.createElement(l.Link,{to:"/"+r+"/"},n.a.createElement(v,{className:"mx-0 mb-4"},c,m,o,u)),n.a.createElement(l.Link,{to:"/"+r+"/",className:"float-right item window1"},n.a.createElement("button",{className:"double-shadow highlighted"},"More")))))))}},Co3s:function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r),l=t("k1TG"),s=t("8o2o"),c=t("TSYQ"),i=t.n(c),m=t("33Jr"),o=function(e){var a,t=e.className,r=e.listClassName,c=e.cssModule,o=e.size,u=e.tag,d=e.listTag,g=e["aria-label"],b=Object(s.a)(e,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),E=Object(m.g)(i()(t),c),f=Object(m.g)(i()(r,"pagination",((a={})["pagination-"+o]=!!o,a)),c);return n.a.createElement(u,{className:E,"aria-label":g},n.a.createElement(d,Object(l.a)({},b,{className:f})))};o.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"};var u=o,d=function(e){var a=e.active,t=e.className,r=e.cssModule,c=e.disabled,o=e.tag,u=Object(s.a)(e,["active","className","cssModule","disabled","tag"]),d=Object(m.g)(i()(t,"page-item",{active:a,disabled:c}),r);return n.a.createElement(o,Object(l.a)({},u,{className:d}))};d.defaultProps={tag:"li"};var g=d,b=function(e){var a,t=e.className,r=e.cssModule,c=e.next,o=e.previous,u=e.first,d=e.last,g=e.tag,b=Object(s.a)(e,["className","cssModule","next","previous","first","last","tag"]),E=Object(m.g)(i()(t,"page-link"),r);o?a="Previous":c?a="Next":u?a="First":d&&(a="Last");var f,p=e["aria-label"]||a;o?f="‹":c?f="›":u?f="«":d&&(f="»");var v=e.children;return v&&Array.isArray(v)&&0===v.length&&(v=null),b.href||"a"!==g||(g="button"),(o||c||u||d)&&(v=[n.a.createElement("span",{"aria-hidden":"true",key:"caret"},v||f),n.a.createElement("span",{className:"sr-only",key:"sr"},p)]),n.a.createElement(g,Object(l.a)({},b,{className:E,"aria-label":p}),v)};b.defaultProps={tag:"a"};var E=b;a.a=function(e){var a=e.currentPage,t=e.numberOfPages,r=1===a,l=a===t,s=a-1==1?"/":"/page/"+(a-1).toString(),c="/page/"+(a+1).toString();return n.a.createElement(u,{className:"pagination","aria-label":"Page navigation example"},r?n.a.createElement(g,{disabled:!0},n.a.createElement(E,{previous:!0,href:"/"})):n.a.createElement(g,null,n.a.createElement(E,{previous:!0,href:s})),Array.from({length:t},(function(e,t){return a===t+1?n.a.createElement(g,{active:!0,key:"page-number"+(t+1)},n.a.createElement(E,{href:"/"+(0===t?"":"page/"+(t+1))},t+1)):n.a.createElement(g,{key:"page-number"+(t+1)},n.a.createElement(E,{href:"/"+(0===t?"":"page/"+(t+1))},t+1))})),l?n.a.createElement(g,{disabled:!0},n.a.createElement(E,{next:!0,href:c})):n.a.createElement(g,null,n.a.createElement(E,{next:!0,href:c})))}},JBOV:function(e,a,t){"use strict";t.r(a),t.d(a,"postListQuery",(function(){return m}));var r=t("q1tI"),n=t.n(r),l=t("Bl7J"),s=t("CZVI"),c=t("Co3s"),i=t("rO97"),m="3636889103";a.default=function(e){var a=e.data.allMarkdownRemark.edges,t=e.pageContext,r=t.currentPage,m=t.numberOfPages;return n.a.createElement(l.a,{pageTitle:"What the Curl"},a.map((function(e){var a=e.node;return n.a.createElement(s.a,{key:a.id,slug:a.fields.slug,title:a.frontmatter.title,author:a.frontmatter.author,date:a.frontmatter.date,body:a.excerpt,tags:a.frontmatter.tags,fluid:a.frontmatter.image.childImageSharp.fluid})})),n.a.createElement(c.a,{currentPage:r,numberOfPages:m}),n.a.createElement(i.a,null))}},"b+5I":function(e,a){e.exports={slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},"sg+I":function(e,a,t){}}]);
//# sourceMappingURL=component---src-templates-post-list-js-e3e97f9bc3b3d6179d60.js.map