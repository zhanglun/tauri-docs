(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{374:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(454)),i={title:"Constant tauri::http::header::X_FRAME_OPTIONS",sidebar_label:"constant.X_FRAME_OPTIONS",custom_edit_url:null},c={unversionedId:"api/rust/tauri/http/header/constant.X_FRAME_OPTIONS",id:"api/rust/tauri/http/header/constant.X_FRAME_OPTIONS",isDocsHomePage:!1,title:"Constant tauri::http::header::X_FRAME_OPTIONS",description:"x3A;:XFRAMEOPTIONS,",source:"@site/docs/zh-hans/api/rust/tauri/http/header/constant.X_FRAME_OPTIONS.md",sourceDirName:"api/rust/tauri/http/header",slug:"/api/rust/tauri/http/header/constant.X_FRAME_OPTIONS",permalink:"/tauri-docs/docs/api/rust/tauri/http/header/constant.X_FRAME_OPTIONS",editUrl:null,version:"current",sidebar_label:"constant.X_FRAME_OPTIONS",frontMatter:{title:"Constant tauri::http::header::X_FRAME_OPTIONS",sidebar_label:"constant.X_FRAME_OPTIONS",custom_edit_url:null},sidebar:"docs",previous:{title:"Constant tauri::http::header::X_DNS_PREFETCH_CONTROL",permalink:"/tauri-docs/docs/api/rust/tauri/http/header/constant.X_DNS_PREFETCH_CONTROL"},next:{title:"Constant tauri::http::header::X_XSS_PROTECTION",permalink:"/tauri-docs/docs/api/rust/tauri/http/header/constant.X_XSS_PROTECTION"}},u=[],s={toc:u};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"x3A;:header::X_FRAME_OPTIONS,"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rs"},"pub const X_FRAME_OPTIONS: HeaderName;\n")),Object(o.b)("p",null,"Expand description"),Object(o.b)("p",null,"Indicates whether or not a browser should be allowed to render a page in a frame."),Object(o.b)("p",null,"Sites can use this to avoid clickjacking attacks, by ensuring that their content is not embedded into other sites."),Object(o.b)("p",null,"The added security is only provided if the user accessing the document is using a browser supporting ",Object(o.b)("inlineCode",{parentName:"p"},"x-frame-options"),"."))}p.isMDXComponent=!0},454:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(r),O=n,b=l["".concat(i,".").concat(O)]||l[O]||d[O]||o;return r?a.a.createElement(b,c(c({ref:t},s),{},{components:r})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=O;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);