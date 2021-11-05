(window.webpackJsonp=window.webpackJsonp||[]).push([[299],{376:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(454)),i={title:"Constant tauri::http::header::LOCATION",sidebar_label:"constant.LOCATION",custom_edit_url:null},c={unversionedId:"api/rust/tauri/http/header/constant.LOCATION",id:"api/rust/tauri/http/header/constant.LOCATION",isDocsHomePage:!1,title:"Constant tauri::http::header::LOCATION",description:"x3A;:LOCATION,",source:"@site/docs/zh-hans/api/rust/tauri/http/header/constant.LOCATION.md",sourceDirName:"api/rust/tauri/http/header",slug:"/api/rust/tauri/http/header/constant.LOCATION",permalink:"/tauri-docs/docs/api/rust/tauri/http/header/constant.LOCATION",editUrl:null,version:"current",sidebar_label:"constant.LOCATION",frontMatter:{title:"Constant tauri::http::header::LOCATION",sidebar_label:"constant.LOCATION",custom_edit_url:null},sidebar:"docs",previous:{title:"Constant tauri::http::header::LINK",permalink:"/tauri-docs/docs/api/rust/tauri/http/header/constant.LINK"},next:{title:"Constant tauri::http::header::MAX_FORWARDS",permalink:"/tauri-docs/docs/api/rust/tauri/http/header/constant.MAX_FORWARDS"}},s=[],u={toc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"x3A;:header::LOCATION,"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rs"},"pub const LOCATION: HeaderName;\n")),Object(o.b)("p",null,"Expand description"),Object(o.b)("p",null,"Indicates the URL to redirect a page to."),Object(o.b)("p",null,"The Location response header indicates the URL to redirect a page to. It only provides a meaning when served with a 3xx status response."),Object(o.b)("p",null,"The HTTP method used to make the new request to fetch the page pointed to by Location depends of the original method and of the kind of redirection:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If 303 (See Also) responses always lead to the use of a GET method, 307 (Temporary Redirect) and 308 (Permanent Redirect) don\u2019t change the method used in the original request;"),Object(o.b)("li",{parentName:"ul"},"301 (Permanent Redirect) and 302 (Found) doesn\u2019t change the method most of the time, though older user-agents may (so you basically don\u2019t know).")),Object(o.b)("p",null,"All responses with one of these status codes send a Location header."),Object(o.b)("p",null,"Beside redirect response, messages with 201 (Created) status also include the Location header. It indicates the URL to the newly created resource."),Object(o.b)("p",null,"Location and Content-Location are different: Location indicates the target of a redirection (or the URL of a newly created resource), while Content-Location indicates the direct URL to use to access the resource when content negotiation happened, without the need of further content negotiation. Location is a header associated with the response, while Content-Location is associated with the entity returned."))}d.isMDXComponent=!0},454:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),d=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=d(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=d(n),h=r,O=l["".concat(i,".").concat(h)]||l[h]||p[h]||o;return n?a.a.createElement(O,c(c({ref:t},u),{},{components:n})):a.a.createElement(O,c({ref:t},u))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);