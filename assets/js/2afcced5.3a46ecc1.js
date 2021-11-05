(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(454)),i={title:"Constant tauri::http::header::CONTENT_ENCODING",sidebar_label:"constant.CONTENT_ENCODING",custom_edit_url:null},c={unversionedId:"api/rust/tauri/http/header/constant.CONTENT_ENCODING",id:"api/rust/tauri/http/header/constant.CONTENT_ENCODING",isDocsHomePage:!1,title:"Constant tauri::http::header::CONTENT_ENCODING",description:"x3A;:CONTENT_ENCODING,",source:"@site/docs/zh-hans/api/rust/tauri/http/header/constant.CONTENT_ENCODING.md",sourceDirName:"api/rust/tauri/http/header",slug:"/api/rust/tauri/http/header/constant.CONTENT_ENCODING",permalink:"/zh-hans/docs/api/rust/tauri/http/header/constant.CONTENT_ENCODING",editUrl:null,version:"current",sidebar_label:"constant.CONTENT_ENCODING",frontMatter:{title:"Constant tauri::http::header::CONTENT_ENCODING",sidebar_label:"constant.CONTENT_ENCODING",custom_edit_url:null},sidebar:"docs",previous:{title:"Constant tauri::http::header::CONTENT_DISPOSITION",permalink:"/zh-hans/docs/api/rust/tauri/http/header/constant.CONTENT_DISPOSITION"},next:{title:"Constant tauri::http::header::CONTENT_LANGUAGE",permalink:"/zh-hans/docs/api/rust/tauri/http/header/constant.CONTENT_LANGUAGE"}},s=[],u={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"x3A;:header::CONTENT_ENCODING,"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rs"},"pub const CONTENT_ENCODING: HeaderName;\n")),Object(o.b)("p",null,"Expand description"),Object(o.b)("p",null,"Used to compress the media-type."),Object(o.b)("p",null,"When present, its value indicates what additional content encoding has been applied to the entity-body. It lets the client know, how to decode in order to obtain the media-type referenced by the Content-Type header."),Object(o.b)("p",null,"It is recommended to compress data as much as possible and therefore to use this field, but some types of resources, like jpeg images, are already compressed. Sometimes using additional compression doesn\u2019t reduce payload size and can even make the payload longer."))}p.isMDXComponent=!0},454:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},N=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),N=r,O=l["".concat(i,".").concat(N)]||l[N]||d[N]||o;return n?a.a.createElement(O,c(c({ref:t},u),{},{components:n})):a.a.createElement(O,c({ref:t},u))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=N;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}N.displayName="MDXCreateElement"}}]);