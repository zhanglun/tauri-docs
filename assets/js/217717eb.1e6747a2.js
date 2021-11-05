(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{132:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(454)),i={title:"Constant tauri::http::header::X_CONTENT_TYPE_OPTIONS",sidebar_label:"constant.X_CONTENT_TYPE_OPTIONS",custom_edit_url:null},c={unversionedId:"api/rust/tauri/http/header/constant.X_CONTENT_TYPE_OPTIONS",id:"api/rust/tauri/http/header/constant.X_CONTENT_TYPE_OPTIONS",isDocsHomePage:!1,title:"Constant tauri::http::header::X_CONTENT_TYPE_OPTIONS",description:"x3A;:XCONTENTTYPE_OPTIONS,",source:"@site/docs/en/api/rust/tauri/http/header/constant.X_CONTENT_TYPE_OPTIONS.md",sourceDirName:"api/rust/tauri/http/header",slug:"/api/rust/tauri/http/header/constant.X_CONTENT_TYPE_OPTIONS",permalink:"/en/docs/api/rust/tauri/http/header/constant.X_CONTENT_TYPE_OPTIONS",editUrl:null,version:"current",sidebar_label:"constant.X_CONTENT_TYPE_OPTIONS",frontMatter:{title:"Constant tauri::http::header::X_CONTENT_TYPE_OPTIONS",sidebar_label:"constant.X_CONTENT_TYPE_OPTIONS",custom_edit_url:null},sidebar:"docs",previous:{title:"Constant tauri::http::header::WWW_AUTHENTICATE",permalink:"/en/docs/api/rust/tauri/http/header/constant.WWW_AUTHENTICATE"},next:{title:"Constant tauri::http::header::X_DNS_PREFETCH_CONTROL",permalink:"/en/docs/api/rust/tauri/http/header/constant.X_DNS_PREFETCH_CONTROL"}},s=[],u={toc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"x3A;:header::X_CONTENT_TYPE_OPTIONS,"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rs"},"pub const X_CONTENT_TYPE_OPTIONS: HeaderName;\n")),Object(o.b)("p",null,"Expand description"),Object(o.b)("p",null,"Marker used by the server to indicate that the MIME types advertised in the ",Object(o.b)("inlineCode",{parentName:"p"},"content-type")," headers should not be changed and be followed."),Object(o.b)("p",null,"This allows to opt-out of MIME type sniffing, or, in other words, it is a way to say that the webmasters knew what they were doing."),Object(o.b)("p",null,"This header was introduced by Microsoft in IE 8 as a way for webmasters to block content sniffing that was happening and could transform non-executable MIME types into executable MIME types. Since then, other browsers have introduced it, even if their MIME sniffing algorithms were less aggressive."),Object(o.b)("p",null,"Site security testers usually expect this header to be set."))}p.isMDXComponent=!0},454:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return T}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),d=n,T=l["".concat(i,".").concat(d)]||l[d]||O[d]||o;return r?a.a.createElement(T,c(c({ref:t},u),{},{components:r})):a.a.createElement(T,c({ref:t},u))}));function T(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);