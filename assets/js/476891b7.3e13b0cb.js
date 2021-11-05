(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{186:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(454)),i={title:"Constant tauri::http::header::IF_MODIFIED_SINCE",sidebar_label:"constant.IF_MODIFIED_SINCE",custom_edit_url:null},c={unversionedId:"api/rust/tauri/http/header/constant.IF_MODIFIED_SINCE",id:"api/rust/tauri/http/header/constant.IF_MODIFIED_SINCE",isDocsHomePage:!1,title:"Constant tauri::http::header::IF_MODIFIED_SINCE",description:"x3A;:IFMODIFIEDSINCE,",source:"@site/docs/zh-hans/api/rust/tauri/http/header/constant.IF_MODIFIED_SINCE.md",sourceDirName:"api/rust/tauri/http/header",slug:"/api/rust/tauri/http/header/constant.IF_MODIFIED_SINCE",permalink:"/zh-hans/docs/api/rust/tauri/http/header/constant.IF_MODIFIED_SINCE",editUrl:null,version:"current",sidebar_label:"constant.IF_MODIFIED_SINCE",frontMatter:{title:"Constant tauri::http::header::IF_MODIFIED_SINCE",sidebar_label:"constant.IF_MODIFIED_SINCE",custom_edit_url:null},sidebar:"docs",previous:{title:"Constant tauri::http::header::IF_MATCH",permalink:"/zh-hans/docs/api/rust/tauri/http/header/constant.IF_MATCH"},next:{title:"Constant tauri::http::header::IF_NONE_MATCH",permalink:"/zh-hans/docs/api/rust/tauri/http/header/constant.IF_NONE_MATCH"}},s=[],u={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"x3A;:header::IF_MODIFIED_SINCE,"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rs"},"pub const IF_MODIFIED_SINCE: HeaderName;\n")),Object(o.b)("p",null,"Expand description"),Object(o.b)("p",null,"Makes a request conditional based on the modification date."),Object(o.b)("p",null,"The If-Modified-Since request HTTP header makes the request conditional: the server will send back the requested resource, with a 200 status, only if it has been last modified after the given date. If the request has not been modified since, the response will be a 304 without any body; the Last-Modified header will contain the date of last modification. Unlike If-Unmodified-Since, If-Modified-Since can only be used with a GET or HEAD."),Object(o.b)("p",null,"When used in combination with If-None-Match, it is ignored, unless the server doesn\u2019t support If-None-Match."),Object(o.b)("p",null,"The most common use case is to update a cached entity that has no associated ETag."))}l.isMDXComponent=!0},454:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,f=p["".concat(i,".").concat(h)]||p[h]||d[h]||o;return n?a.a.createElement(f,c(c({ref:t},u),{},{components:n})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);