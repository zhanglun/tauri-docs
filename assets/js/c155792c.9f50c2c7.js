(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{356:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(454)),i={title:"Constant tauri::http::header::VARY",sidebar_label:"constant.VARY",custom_edit_url:null},c={unversionedId:"api/rust/tauri/http/header/constant.VARY",id:"api/rust/tauri/http/header/constant.VARY",isDocsHomePage:!1,title:"Constant tauri::http::header::VARY",description:"x3A;:VARY,",source:"@site/docs/zh-hans/api/rust/tauri/http/header/constant.VARY.md",sourceDirName:"api/rust/tauri/http/header",slug:"/api/rust/tauri/http/header/constant.VARY",permalink:"/tauri-docs/docs/api/rust/tauri/http/header/constant.VARY",editUrl:null,version:"current",sidebar_label:"constant.VARY",frontMatter:{title:"Constant tauri::http::header::VARY",sidebar_label:"constant.VARY",custom_edit_url:null},sidebar:"docs",previous:{title:"Constant tauri::http::header::USER_AGENT",permalink:"/tauri-docs/docs/api/rust/tauri/http/header/constant.USER_AGENT"},next:{title:"Constant tauri::http::header::VIA",permalink:"/tauri-docs/docs/api/rust/tauri/http/header/constant.VIA"}},u=[],s={toc:u};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"x3A;:header::VARY,"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rs"},"pub const VARY: HeaderName;\n")),Object(o.b)("p",null,"Expand description"),Object(o.b)("p",null,"Determines how to match future requests with cached responses."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"vary")," HTTP response header determines how to match future request headers to decide whether a cached response can be used rather than requesting a fresh one from the origin server. It is used by the server to indicate which headers it used when selecting a representation of a resource in a content negotiation algorithm."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"vary")," header should be set on a 304 Not Modified response exactly like it would have been set on an equivalent 200 OK response."))}p.isMDXComponent=!0},454:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(r),h=n,b=l["".concat(i,".").concat(h)]||l[h]||d[h]||o;return r?a.a.createElement(b,c(c({ref:t},s),{},{components:r})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);