(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{366:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(454)),i={title:"Constant tauri::http::header::IF_NONE_MATCH",sidebar_label:"constant.IF_NONE_MATCH",custom_edit_url:null},s={unversionedId:"api/rust/tauri/http/header/constant.IF_NONE_MATCH",id:"api/rust/tauri/http/header/constant.IF_NONE_MATCH",isDocsHomePage:!1,title:"Constant tauri::http::header::IF_NONE_MATCH",description:"x3A;:IFNONEMATCH,",source:"@site/docs/zh-hans/api/rust/tauri/http/header/constant.IF_NONE_MATCH.md",sourceDirName:"api/rust/tauri/http/header",slug:"/api/rust/tauri/http/header/constant.IF_NONE_MATCH",permalink:"/tauri-docs/docs/api/rust/tauri/http/header/constant.IF_NONE_MATCH",editUrl:null,version:"current",sidebar_label:"constant.IF_NONE_MATCH",frontMatter:{title:"Constant tauri::http::header::IF_NONE_MATCH",sidebar_label:"constant.IF_NONE_MATCH",custom_edit_url:null},sidebar:"docs",previous:{title:"Constant tauri::http::header::IF_MODIFIED_SINCE",permalink:"/tauri-docs/docs/api/rust/tauri/http/header/constant.IF_MODIFIED_SINCE"},next:{title:"Constant tauri::http::header::IF_RANGE",permalink:"/tauri-docs/docs/api/rust/tauri/http/header/constant.IF_RANGE"}},c=[],u={toc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"x3A;:header::IF_NONE_MATCH,"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rs"},"pub const IF_NONE_MATCH: HeaderName;\n")),Object(o.b)("p",null,"Expand description"),Object(o.b)("p",null,"Makes a request conditional based on the E-Tag."),Object(o.b)("p",null,"The If-None-Match HTTP request header makes the request conditional. For GET and HEAD methods, the server will send back the requested resource, with a 200 status, only if it doesn\u2019t have an ETag matching the given ones. For other methods, the request will be processed only if the eventually existing resource\u2019s ETag doesn\u2019t match any of the values listed."),Object(o.b)("p",null,"When the condition fails for GET and HEAD methods, then the server must return HTTP status code 304 (Not Modified). For methods that apply server-side changes, the status code 412 (Precondition Failed) is used. Note that the server generating a 304 response MUST generate any of the following header fields that would have been sent in a 200 (OK) response to the same request: Cache-Control, Content-Location, Date, ETag, Expires, and Vary."),Object(o.b)("p",null,"The comparison with the stored ETag uses the weak comparison algorithm, meaning two files are considered identical not only if they are identical byte to byte, but if the content is equivalent. For example, two pages that would differ only by the date of generation in the footer would be considered as identical."),Object(o.b)("p",null,"When used in combination with If-Modified-Since, it has precedence (if the server supports it)."),Object(o.b)("p",null,"There are two common use cases:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"For ",Object(o.b)("inlineCode",{parentName:"li"},"GET")," and ",Object(o.b)("inlineCode",{parentName:"li"},"HEAD")," methods, to update a cached entity that has an associated ETag."),Object(o.b)("li",{parentName:"ul"},"For other methods, and in particular for ",Object(o.b)("inlineCode",{parentName:"li"},"PUT"),", ",Object(o.b)("inlineCode",{parentName:"li"},"If-None-Match")," used with the ",Object(o.b)("inlineCode",{parentName:"li"},"*")," value can be used to save a file not known to exist, guaranteeing that another upload didn\u2019t happen before, losing the data of the previous put; this problems is the variation of the lost update problem.")))}l.isMDXComponent=!0},454:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,b=d["".concat(i,".").concat(h)]||d[h]||p[h]||o;return n?a.a.createElement(b,s(s({ref:t},u),{},{components:n})):a.a.createElement(b,s({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);