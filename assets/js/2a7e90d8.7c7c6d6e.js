(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{145:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(454)),i={title:"Constant tauri::http::header::IF_RANGE",sidebar_label:"constant.IF_RANGE",custom_edit_url:null},c={unversionedId:"api/rust/tauri/http/header/constant.IF_RANGE",id:"api/rust/tauri/http/header/constant.IF_RANGE",isDocsHomePage:!1,title:"Constant tauri::http::header::IF_RANGE",description:"x3A;:IF_RANGE,",source:"@site/docs/zh-hans/api/rust/tauri/http/header/constant.IF_RANGE.md",sourceDirName:"api/rust/tauri/http/header",slug:"/api/rust/tauri/http/header/constant.IF_RANGE",permalink:"/zh-hans/docs/api/rust/tauri/http/header/constant.IF_RANGE",editUrl:null,version:"current",sidebar_label:"constant.IF_RANGE",frontMatter:{title:"Constant tauri::http::header::IF_RANGE",sidebar_label:"constant.IF_RANGE",custom_edit_url:null},sidebar:"docs",previous:{title:"Constant tauri::http::header::IF_NONE_MATCH",permalink:"/zh-hans/docs/api/rust/tauri/http/header/constant.IF_NONE_MATCH"},next:{title:"Constant tauri::http::header::IF_UNMODIFIED_SINCE",permalink:"/zh-hans/docs/api/rust/tauri/http/header/constant.IF_UNMODIFIED_SINCE"}},s=[],u={toc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"x3A;:header::IF_RANGE,"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rs"},"pub const IF_RANGE: HeaderName;\n")),Object(o.b)("p",null,"Expand description"),Object(o.b)("p",null,"Makes a request conditional based on range."),Object(o.b)("p",null,"The If-Range HTTP request header makes a range request conditional: if the condition is fulfilled, the range request will be issued and the server sends back a 206 Partial Content answer with the appropriate body. If the condition is not fulfilled, the full resource is sent back, with a 200 OK status."),Object(o.b)("p",null,"This header can be used either with a Last-Modified validator, or with an ETag, but not with both."),Object(o.b)("p",null,"The most common use case is to resume a download, to guarantee that the stored resource has not been modified since the last fragment has been received."))}l.isMDXComponent=!0},454:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),h=n,b=p["".concat(i,".").concat(h)]||p[h]||d[h]||o;return r?a.a.createElement(b,c(c({ref:t},u),{},{components:r})):a.a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);