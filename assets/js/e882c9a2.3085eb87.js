(window.webpackJsonp=window.webpackJsonp||[]).push([[337],{414:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(454)),i={title:"Constant tauri::http::header::IF_MATCH",sidebar_label:"constant.IF_MATCH",custom_edit_url:null},c={unversionedId:"api/rust/tauri/http/header/constant.IF_MATCH",id:"api/rust/tauri/http/header/constant.IF_MATCH",isDocsHomePage:!1,title:"Constant tauri::http::header::IF_MATCH",description:"x3A;:IF_MATCH,",source:"@site/docs/zh-hans/api/rust/tauri/http/header/constant.IF_MATCH.md",sourceDirName:"api/rust/tauri/http/header",slug:"/api/rust/tauri/http/header/constant.IF_MATCH",permalink:"/tauri-docs/docs/api/rust/tauri/http/header/constant.IF_MATCH",editUrl:null,version:"current",sidebar_label:"constant.IF_MATCH",frontMatter:{title:"Constant tauri::http::header::IF_MATCH",sidebar_label:"constant.IF_MATCH",custom_edit_url:null},sidebar:"docs",previous:{title:"Constant tauri::http::header::HOST",permalink:"/tauri-docs/docs/api/rust/tauri/http/header/constant.HOST"},next:{title:"Constant tauri::http::header::IF_MODIFIED_SINCE",permalink:"/tauri-docs/docs/api/rust/tauri/http/header/constant.IF_MODIFIED_SINCE"}},s=[],u={toc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"x3A;:header::IF_MATCH,"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rs"},"pub const IF_MATCH: HeaderName;\n")),Object(o.b)("p",null,"Expand description"),Object(o.b)("p",null,"Makes a request conditional based on the E-Tag."),Object(o.b)("p",null,"For GET and HEAD methods, the server will send back the requested resource only if it matches one of the listed ETags. For PUT and other non-safe methods, it will only upload the resource in this case."),Object(o.b)("p",null,"The comparison with the stored ETag uses the strong comparison algorithm, meaning two files are considered identical byte to byte only. This is weakened when the W/ prefix is used in front of the ETag."),Object(o.b)("p",null,"There are two common use cases:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"For GET and HEAD methods, used in combination with an Range header, it can guarantee that the new ranges requested comes from the same resource than the previous one. If it doesn\u2019t match, then a 416 (Range Not Satisfiable) response is returned."),Object(o.b)("li",{parentName:"ul"},"For other methods, and in particular for PUT, If-Match can be used to prevent the lost update problem. It can check if the modification of a resource that the user wants to upload will not override another change that has been done since the original resource was fetched. If the request cannot be fulfilled, the 412 (Precondition Failed) response is returned.")))}l.isMDXComponent=!0},454:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),h=n,b=p["".concat(i,".").concat(h)]||p[h]||d[h]||o;return r?a.a.createElement(b,c(c({ref:t},u),{},{components:r})):a.a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);