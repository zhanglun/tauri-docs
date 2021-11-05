(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{454:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),b=r,f=l["".concat(i,".").concat(b)]||l[b]||d[b]||o;return n?a.a.createElement(f,c(c({ref:t},u),{},{components:n})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(454)),i={title:"Constant tauri::http::header::TRANSFER_ENCODING",sidebar_label:"constant.TRANSFER_ENCODING",custom_edit_url:null},c={unversionedId:"api/rust/tauri/http/header/constant.TRANSFER_ENCODING",id:"api/rust/tauri/http/header/constant.TRANSFER_ENCODING",isDocsHomePage:!1,title:"Constant tauri::http::header::TRANSFER_ENCODING",description:"x3A;:TRANSFER_ENCODING,",source:"@site/docs/zh-hans/api/rust/tauri/http/header/constant.TRANSFER_ENCODING.md",sourceDirName:"api/rust/tauri/http/header",slug:"/api/rust/tauri/http/header/constant.TRANSFER_ENCODING",permalink:"/tauri-docs/docs/api/rust/tauri/http/header/constant.TRANSFER_ENCODING",editUrl:null,version:"current",sidebar_label:"constant.TRANSFER_ENCODING",frontMatter:{title:"Constant tauri::http::header::TRANSFER_ENCODING",sidebar_label:"constant.TRANSFER_ENCODING",custom_edit_url:null},sidebar:"docs",previous:{title:"Constant tauri::http::header::TRAILER",permalink:"/tauri-docs/docs/api/rust/tauri/http/header/constant.TRAILER"},next:{title:"Constant tauri::http::header::UPGRADE",permalink:"/tauri-docs/docs/api/rust/tauri/http/header/constant.UPGRADE"}},s=[],u={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"x3A;:header::TRANSFER_ENCODING,"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rs"},"pub const TRANSFER_ENCODING: HeaderName;\n")),Object(o.b)("p",null,"Expand description"),Object(o.b)("p",null,"Specifies the form of encoding used to safely transfer the entity to the client."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"transfer-encoding")," is a hop-by-hop header, that is applying to a message between two nodes, not to a resource itself. Each segment of a multi-node connection can use different ",Object(o.b)("inlineCode",{parentName:"p"},"transfer-encoding")," values. If you want to compress data over the whole connection, use the end-to-end header ",Object(o.b)("inlineCode",{parentName:"p"},"content-encoding")," header instead."),Object(o.b)("p",null,"When present on a response to a ",Object(o.b)("inlineCode",{parentName:"p"},"HEAD")," request that has no body, it indicates the value that would have applied to the corresponding ",Object(o.b)("inlineCode",{parentName:"p"},"GET")," message."))}p.isMDXComponent=!0}}]);