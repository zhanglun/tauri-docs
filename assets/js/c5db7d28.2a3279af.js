(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{364:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(454)),i={title:"Constant tauri::http::header::ACCEPT",sidebar_label:"constant.ACCEPT",custom_edit_url:null},c={unversionedId:"api/rust/tauri/http/header/constant.ACCEPT",id:"api/rust/tauri/http/header/constant.ACCEPT",isDocsHomePage:!1,title:"Constant tauri::http::header::ACCEPT",description:"x3A;:ACCEPT,",source:"@site/docs/zh-hans/api/rust/tauri/http/header/constant.ACCEPT.md",sourceDirName:"api/rust/tauri/http/header",slug:"/api/rust/tauri/http/header/constant.ACCEPT",permalink:"/zh-hans/docs/api/rust/tauri/http/header/constant.ACCEPT",editUrl:null,version:"current",sidebar_label:"constant.ACCEPT",frontMatter:{title:"Constant tauri::http::header::ACCEPT",sidebar_label:"constant.ACCEPT",custom_edit_url:null},sidebar:"docs",previous:{title:"Trait tauri::http::header::IntoHeaderName",permalink:"/zh-hans/docs/api/rust/tauri/http/header/trait.IntoHeaderName"},next:{title:"Constant tauri::http::header::ACCEPT_CHARSET",permalink:"/zh-hans/docs/api/rust/tauri/http/header/constant.ACCEPT_CHARSET"}},s=[],u={toc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"x3A;:header::ACCEPT,"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rs"},"pub const ACCEPT: HeaderName;\n")),Object(o.b)("p",null,"Expand description"),Object(o.b)("p",null,"Advertises which content types the client is able to understand."),Object(o.b)("p",null,"The Accept request HTTP header advertises which content types, expressed as MIME types, the client is able to understand. Using content negotiation, the server then selects one of the proposals, uses it and informs the client of its choice with the Content-Type response header. Browsers set adequate values for this header depending of the context where the request is done: when fetching a CSS stylesheet a different value is set for the request than when fetching an image, video or a script."))}p.isMDXComponent=!0},454:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),h=n,f=l["".concat(i,".").concat(h)]||l[h]||d[h]||o;return r?a.a.createElement(f,c(c({ref:t},u),{},{components:r})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);