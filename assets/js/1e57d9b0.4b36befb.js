(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{127:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(454)),i={title:"Constant tauri::http::header::PROXY_AUTHENTICATE",sidebar_label:"constant.PROXY_AUTHENTICATE",custom_edit_url:null},c={unversionedId:"api/rust/tauri/http/header/constant.PROXY_AUTHENTICATE",id:"api/rust/tauri/http/header/constant.PROXY_AUTHENTICATE",isDocsHomePage:!1,title:"Constant tauri::http::header::PROXY_AUTHENTICATE",description:"x3A;:PROXY_AUTHENTICATE,",source:"@site/docs/en/api/rust/tauri/http/header/constant.PROXY_AUTHENTICATE.md",sourceDirName:"api/rust/tauri/http/header",slug:"/api/rust/tauri/http/header/constant.PROXY_AUTHENTICATE",permalink:"/en/docs/api/rust/tauri/http/header/constant.PROXY_AUTHENTICATE",editUrl:null,version:"current",sidebar_label:"constant.PROXY_AUTHENTICATE",frontMatter:{title:"Constant tauri::http::header::PROXY_AUTHENTICATE",sidebar_label:"constant.PROXY_AUTHENTICATE",custom_edit_url:null},sidebar:"docs",previous:{title:"Constant tauri::http::header::PRAGMA",permalink:"/en/docs/api/rust/tauri/http/header/constant.PRAGMA"},next:{title:"Constant tauri::http::header::PROXY_AUTHORIZATION",permalink:"/en/docs/api/rust/tauri/http/header/constant.PROXY_AUTHORIZATION"}},u=[],s={toc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"x3A;:header::PROXY_AUTHENTICATE,"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rs"},"pub const PROXY_AUTHENTICATE: HeaderName;\n")),Object(o.b)("p",null,"Expand description"),Object(o.b)("p",null,"Defines the authentication method that should be used to gain access to a proxy."),Object(o.b)("p",null,"Unlike ",Object(o.b)("inlineCode",{parentName:"p"},"www-authenticate"),", the ",Object(o.b)("inlineCode",{parentName:"p"},"proxy-authenticate")," header field applies only to the next outbound client on the response chain. This is because only the client that chose a given proxy is likely to have the credentials necessary for authentication. However, when multiple proxies are used within the same administrative domain, such as office and regional caching proxies within a large corporate network, it is common for credentials to be generated by the user agent and passed through the hierarchy until consumed. Hence, in such a configuration, it will appear as if Proxy-Authenticate is being forwarded because each proxy will send the same challenge set."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"proxy-authenticate")," header is sent along with a ",Object(o.b)("inlineCode",{parentName:"p"},"407 Proxy Authentication Required"),"."))}p.isMDXComponent=!0},454:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(n),h=r,b=l["".concat(i,".").concat(h)]||l[h]||d[h]||o;return n?a.a.createElement(b,c(c({ref:t},s),{},{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);