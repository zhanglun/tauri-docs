(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{258:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(454)),i={title:"Constant tauri::http::header::CONTENT_DISPOSITION",sidebar_label:"constant.CONTENT_DISPOSITION",custom_edit_url:null},s={unversionedId:"api/rust/tauri/http/header/constant.CONTENT_DISPOSITION",id:"api/rust/tauri/http/header/constant.CONTENT_DISPOSITION",isDocsHomePage:!1,title:"Constant tauri::http::header::CONTENT_DISPOSITION",description:"x3A;:CONTENT_DISPOSITION,",source:"@site/docs/en/api/rust/tauri/http/header/constant.CONTENT_DISPOSITION.md",sourceDirName:"api/rust/tauri/http/header",slug:"/api/rust/tauri/http/header/constant.CONTENT_DISPOSITION",permalink:"/en/docs/api/rust/tauri/http/header/constant.CONTENT_DISPOSITION",editUrl:null,version:"current",sidebar_label:"constant.CONTENT_DISPOSITION",frontMatter:{title:"Constant tauri::http::header::CONTENT_DISPOSITION",sidebar_label:"constant.CONTENT_DISPOSITION",custom_edit_url:null},sidebar:"docs",previous:{title:"Constant tauri::http::header::CONNECTION",permalink:"/en/docs/api/rust/tauri/http/header/constant.CONNECTION"},next:{title:"Constant tauri::http::header::CONTENT_ENCODING",permalink:"/en/docs/api/rust/tauri/http/header/constant.CONTENT_ENCODING"}},c=[],p={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"x3A;:header::CONTENT_DISPOSITION,"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rs"},"pub const CONTENT_DISPOSITION: HeaderName;\n")),Object(o.b)("p",null,"Expand description"),Object(o.b)("p",null,"Indicates if the content is expected to be displayed inline."),Object(o.b)("p",null,"In a regular HTTP response, the Content-Disposition response header is a header indicating if the content is expected to be displayed inline in the browser, that is, as a Web page or as part of a Web page, or as an attachment, that is downloaded and saved locally."),Object(o.b)("p",null,"In a multipart/form-data body, the HTTP Content-Disposition general header is a header that can be used on the subpart of a multipart body to give information about the field it applies to. The subpart is delimited by the boundary defined in the Content-Type header. Used on the body itself, Content-Disposition has no effect."),Object(o.b)("p",null,"The Content-Disposition header is defined in the larger context of MIME messages for e-mail, but only a subset of the possible parameters apply to HTTP forms and POST requests. Only the value form-data, as well as the optional directive name and filename, can be used in the HTTP context."))}u.isMDXComponent=!0},454:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(n),O=r,b=l["".concat(i,".").concat(O)]||l[O]||d[O]||o;return n?a.a.createElement(b,s(s({ref:t},p),{},{components:n})):a.a.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=O;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);