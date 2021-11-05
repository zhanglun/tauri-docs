(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{323:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return s})),t.d(r,"toc",(function(){return u})),t.d(r,"default",(function(){return p}));var n=t(3),i=t(7),a=(t(0),t(454)),o={title:"Fn tauri::api::version::is_major",sidebar_label:"fn.is_major",custom_edit_url:null},s={unversionedId:"api/rust/tauri/api/version/fn.is_major",id:"api/rust/tauri/api/version/fn.is_major",isDocsHomePage:!1,title:"Fn tauri::api::version::is_major",description:"`rs",source:"@site/docs/zh-hans/api/rust/tauri/api/version/fn.is_major.md",sourceDirName:"api/rust/tauri/api/version",slug:"/api/rust/tauri/api/version/fn.is_major",permalink:"/zh-hans/docs/api/rust/tauri/api/version/fn.is_major",editUrl:null,version:"current",sidebar_label:"fn.is_major",frontMatter:{title:"Fn tauri::api::version::is_major",sidebar_label:"fn.is_major",custom_edit_url:null},sidebar:"docs",previous:{title:"Fn tauri::api::version::is_greater",permalink:"/zh-hans/docs/api/rust/tauri/api/version/fn.is_greater"},next:{title:"Fn tauri::api::version::is_minor",permalink:"/zh-hans/docs/api/rust/tauri/api/version/fn.is_minor"}},u=[],c={toc:u};function p(e){var r=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-rs"},"pub fn is_major(current: &str, other: &str) -> Result<bool>\n")),Object(a.b)("p",null,"Expand description"),Object(a.b)("p",null,"Check if a the \u201cother\u201d version is a major bump from the \u201ccurrent\u201d"))}p.isMDXComponent=!0},454:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return b}));var n=t(0),i=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),p=function(e){var r=i.a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=p(e.components);return i.a.createElement(c.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},m=i.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=p(t),m=n,b=l["".concat(o,".").concat(m)]||l[m]||f[m]||a;return t?i.a.createElement(b,s(s({ref:r},c),{},{components:t})):i.a.createElement(b,s({ref:r},c))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=m;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);