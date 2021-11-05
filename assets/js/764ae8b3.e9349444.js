(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{247:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return i})),r.d(e,"metadata",(function(){return c})),r.d(e,"toc",(function(){return s})),r.d(e,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(454)),i={title:"Constant tauri::http::header::X_XSS_PROTECTION",sidebar_label:"constant.X_XSS_PROTECTION",custom_edit_url:null},c={unversionedId:"api/rust/tauri/http/header/constant.X_XSS_PROTECTION",id:"api/rust/tauri/http/header/constant.X_XSS_PROTECTION",isDocsHomePage:!1,title:"Constant tauri::http::header::X_XSS_PROTECTION",description:"x3A;:XXSSPROTECTION,",source:"@site/docs/zh-hans/api/rust/tauri/http/header/constant.X_XSS_PROTECTION.md",sourceDirName:"api/rust/tauri/http/header",slug:"/api/rust/tauri/http/header/constant.X_XSS_PROTECTION",permalink:"/tauri-docs/docs/api/rust/tauri/http/header/constant.X_XSS_PROTECTION",editUrl:null,version:"current",sidebar_label:"constant.X_XSS_PROTECTION",frontMatter:{title:"Constant tauri::http::header::X_XSS_PROTECTION",sidebar_label:"constant.X_XSS_PROTECTION",custom_edit_url:null},sidebar:"docs",previous:{title:"Constant tauri::http::header::X_FRAME_OPTIONS",permalink:"/tauri-docs/docs/api/rust/tauri/http/header/constant.X_FRAME_OPTIONS"},next:{title:"Struct tauri::http::method::InvalidMethod",permalink:"/tauri-docs/docs/api/rust/tauri/http/method/struct.InvalidMethod"}},s=[],u={toc:s};function p(t){var e=t.components,r=Object(a.a)(t,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"x3A;:header::X_XSS_PROTECTION,"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rs"},"pub const X_XSS_PROTECTION: HeaderName;\n")),Object(o.b)("p",null,"Expand description"),Object(o.b)("p",null,"Stop pages from loading when an XSS attack is detected."),Object(o.b)("p",null,"The HTTP X-XSS-Protection response header is a feature of Internet Explorer, Chrome and Safari that stops pages from loading when they detect reflected cross-site scripting (XSS) attacks. Although these protections are largely unnecessary in modern browsers when sites implement a strong Content-Security-Policy that disables the use of inline JavaScript (\u2018unsafe-inline\u2019), they can still provide protections for users of older web browsers that don\u2019t yet support CSP."))}p.isMDXComponent=!0},454:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=a.a.createContext({}),p=function(t){var e=a.a.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},l=function(t){var e=p(t.components);return a.a.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},O=a.a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,i=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),l=p(r),O=n,f=l["".concat(i,".").concat(O)]||l[O]||d[O]||o;return r?a.a.createElement(f,c(c({ref:e},u),{},{components:r})):a.a.createElement(f,c({ref:e},u))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=O;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);