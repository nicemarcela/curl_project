(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"2Te1":function(e,t,a){"use strict";var n=a("k1TG"),r=a("8o2o"),l=a("q1tI"),c=a.n(l),s=a("TSYQ"),o=a.n(s),i=a("33Jr"),u=function(e){var t=e.className,a=e.cssModule,l=e.color,s=e.innerRef,u=e.pill,p=e.tag,d=Object(r.a)(e,["className","cssModule","color","innerRef","pill","tag"]),m=Object(i.g)(o()(t,"badge","badge-"+l,!!u&&"badge-pill"),a);return d.href&&"span"===p&&(p="a"),c.a.createElement(p,Object(n.a)({},d,{className:m,ref:s}))};u.defaultProps={color:"secondary",pill:!1,tag:"span"},t.a=u},Bl7J:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),c=a("LbRr"),s=a("JwsL"),o=(a("sg+I"),a("WTuT")),i=a.n(o);t.a=function(e){var t=e.children,a=e.pageTitle;return r.a.createElement(l.StaticQuery,{query:"3649515864",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.6.3/css/all.css",integrity:"sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/",crossOrigin:"anonymous"}),r.a.createElement(c.a,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("div",{className:"container",id:"content"},r.a.createElement("img",{className:"icon",src:i.a,alt:""}),r.a.createElement("h1",{className:"title"},a),r.a.createElement("h3",{className:"brand-description"},"Community-based stories to inspire your natural hair journey."),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",null,t))),r.a.createElement(s.a,null))}})}},"b+5I":function(e,t){e.exports={slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},lqd7:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("Bl7J"),c=a("vrFN"),s=a("sOKU"),o=a("2Te1"),i=a("b+5I");t.default=function(e){var t=e.pageContext,a=t.tags,n=t.tagPostCounts;return r.a.createElement(l.a,{pageTitle:"All tags"},r.a.createElement(c.a,{title:"All tags",keywords:["tags","topics"]}),r.a.createElement("ul",null,a.map((function(e){return r.a.createElement("li",{key:e,style:{marginBottom:"10px"}},r.a.createElement(s.a,{color:"primary",href:"/tag/"+Object(i.slugify)(e)},e," ",r.a.createElement(o.a,{color:"light"},n[e])))}))))}},sOKU:function(e,t,a){"use strict";var n=a("k1TG"),r=a("8o2o"),l=a("uRdJ"),c=a("9Hrx"),s=a("q1tI"),o=a.n(s),i=a("TSYQ"),u=a.n(i),p=a("33Jr"),d=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(l.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],l=e.block,c=e.className,s=e.close,i=e.cssModule,d=e.color,m=e.outline,b=e.size,f=e.tag,g=e.innerRef,h=Object(r.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);s&&void 0===h.children&&(h.children=o.a.createElement("span",{"aria-hidden":!0},"×"));var v="btn"+(m?"-outline":"")+"-"+d,E=Object(p.g)(u()(c,{close:s},s||"btn",s||v,!!b&&"btn-"+b,!!l&&"btn-block",{active:t,disabled:this.props.disabled}),i);h.href&&"button"===f&&(f="a");var y=s?"Close":null;return o.a.createElement(f,Object(n.a)({type:"button"===f&&h.onClick?"button":void 0},h,{className:E,ref:g,onClick:this.onClick,"aria-label":a||y}))},t}(o.a.Component);d.defaultProps={color:"secondary",tag:"button"},t.a=d},"sg+I":function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-tags-page-js-78ae0abd301ebe5a7bf0.js.map