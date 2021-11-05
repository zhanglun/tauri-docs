(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{298:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(454)),i={title:"Constant tauri::http::header::ETAG",sidebar_label:"constant.ETAG",custom_edit_url:null},s={unversionedId:"api/rust/tauri/http/header/constant.ETAG",id:"api/rust/tauri/http/header/constant.ETAG",isDocsHomePage:!1,title:"Constant tauri::http::header::ETAG",description:"x3A;:ETAG,",source:"@site/docs/zh-hans/api/rust/tauri/http/header/constant.ETAG.md",sourceDirName:"api/rust/tauri/http/header",slug:"/api/rust/tauri/http/header/constant.ETAG",permalink:"/zh-hans/docs/api/rust/tauri/http/header/constant.ETAG",editUrl:null,version:"current",sidebar_label:"constant.ETAG",frontMatter:{title:"Constant tauri::http::header::ETAG",sidebar_label:"constant.ETAG",custom_edit_url:null},sidebar:"docs",previous:{title:"Constant tauri::http::header::DNT",permalink:"/zh-hans/docs/api/rust/tauri/http/header/constant.DNT"},next:{title:"Constant tauri::http::header::EXPECT",permalink:"/zh-hans/docs/api/rust/tauri/http/header/constant.EXPECT"}},c=[],u={toc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"x3A;:header::ETAG,"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rs"},"pub const ETAG: HeaderName;\n")),Object(o.b)("p",null,"Expand description"),Object(o.b)("p",null,"Identifier for a specific version of a resource."),Object(o.b)("p",null,"This header allows caches to be more efficient, and saves bandwidth, as a web server does not need to send a full response if the content has not changed. On the other side, if the content has changed, etags are useful to help prevent simultaneous updates of a resource from overwriting each other (\u201cmid-air collisions\u201d)."),Object(o.b)("p",null,"If the resource at a given URL changes, a new Etag value must be generated. Etags are therefore similar to fingerprints and might also be used for tracking purposes by some servers. A comparison of them allows to quickly determine whether two representations of a resource are the same, but they might also be set to persist indefinitely by a tracking server."))}p.isMDXComponent=!0},454:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(r),f=n,h=l["".concat(i,".").concat(f)]||l[f]||d[f]||o;return r?a.a.createElement(h,s(s({ref:t},u),{},{components:r})):a.a.createElement(h,s({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);