(window.webpackJsonp=window.webpackJsonp||[]).push([[335],{412:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(454)),i={title:"Constant tauri::http::header::ACCEPT_ENCODING",sidebar_label:"constant.ACCEPT_ENCODING",custom_edit_url:null},c={unversionedId:"api/rust/tauri/http/header/constant.ACCEPT_ENCODING",id:"api/rust/tauri/http/header/constant.ACCEPT_ENCODING",isDocsHomePage:!1,title:"Constant tauri::http::header::ACCEPT_ENCODING",description:"x3A;:ACCEPT_ENCODING,",source:"@site/docs/en/api/rust/tauri/http/header/constant.ACCEPT_ENCODING.md",sourceDirName:"api/rust/tauri/http/header",slug:"/api/rust/tauri/http/header/constant.ACCEPT_ENCODING",permalink:"/en/docs/api/rust/tauri/http/header/constant.ACCEPT_ENCODING",editUrl:null,version:"current",sidebar_label:"constant.ACCEPT_ENCODING",frontMatter:{title:"Constant tauri::http::header::ACCEPT_ENCODING",sidebar_label:"constant.ACCEPT_ENCODING",custom_edit_url:null},sidebar:"docs",previous:{title:"Constant tauri::http::header::ACCEPT_CHARSET",permalink:"/en/docs/api/rust/tauri/http/header/constant.ACCEPT_CHARSET"},next:{title:"Constant tauri::http::header::ACCEPT_LANGUAGE",permalink:"/en/docs/api/rust/tauri/http/header/constant.ACCEPT_LANGUAGE"}},s=[],l={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"x3A;:header::ACCEPT_ENCODING,"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rs"},"pub const ACCEPT_ENCODING: HeaderName;\n")),Object(o.b)("p",null,"Expand description"),Object(o.b)("p",null,"Advertises which content encoding the client is able to understand."),Object(o.b)("p",null,"The Accept-Encoding request HTTP header advertises which content encoding, usually a compression algorithm, the client is able to understand. Using content negotiation, the server selects one of the proposals, uses it and informs the client of its choice with the Content-Encoding response header."),Object(o.b)("p",null,"Even if both the client and the server supports the same compression algorithms, the server may choose not to compress the body of a response, if the identity value is also acceptable. Two common cases lead to this:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The data to be sent is already compressed and a second compression won\u2019t lead to smaller data to be transmitted. This may the case with some image formats;"),Object(o.b)("li",{parentName:"ul"},"The server is overloaded and cannot afford the computational overhead induced by the compression requirement. Typically, Microsoft recommends not to compress if a server use more than 80 % of its computational power.")),Object(o.b)("p",null,"As long as the identity value, meaning no encryption, is not explicitly forbidden, by an identity;q=0 or a ","*",";q=0 without another explicitly set value for identity, the server must never send back a 406 Not Acceptable error."))}u.isMDXComponent=!0},454:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,b=p["".concat(i,".").concat(h)]||p[h]||d[h]||o;return n?a.a.createElement(b,c(c({ref:t},l),{},{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);