(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{227:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return i})),r.d(e,"metadata",(function(){return o})),r.d(e,"toc",(function(){return c})),r.d(e,"default",(function(){return l}));var n=r(3),a=(r(0),r(454));const i={title:"Attr tauri::command",sidebar_label:"attr.command",custom_edit_url:null},o={unversionedId:"api/rust/tauri/attr.command",id:"api/rust/tauri/attr.command",isDocsHomePage:!1,title:"Attr tauri::command",description:"`rs",source:"@site/docs/zh-hans/api/rust/tauri/attr.command.md",sourceDirName:"api/rust/tauri",slug:"/api/rust/tauri/attr.command",permalink:"/tauri-docs/docs/api/rust/tauri/attr.command",editUrl:null,version:"current",sidebar_label:"attr.command",frontMatter:{title:"Attr tauri::command",sidebar_label:"attr.command",custom_edit_url:null},sidebar:"docs",previous:{title:"Macro tauri::tauri_build_context",permalink:"/tauri-docs/docs/api/rust/tauri/macro.tauri_build_context"},next:{title:"@tauri-apps/api",permalink:"/tauri-docs/docs/api/js/index"}},c=[{value:"Stability",id:"stability",children:[]}],u={toc:c};function l({components:t,...e}){return Object(a.b)("wrapper",Object(n.a)({},u,e,{components:t,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-rs"},"#[command]\n\n")),Object(a.b)("p",null,"Expand description"),Object(a.b)("p",null,"Mark a function as a command handler. It creates a wrapper function with the necessary glue code."),Object(a.b)("h2",{id:"stability"},"Stability"),Object(a.b)("p",null,"The output of this macro is managed internally by Tauri, and should not be accessed directly on normal applications. It may have breaking changes in the future."))}l.isMDXComponent=!0},454:function(t,e,r){"use strict";r.d(e,"a",(function(){return p})),r.d(e,"b",(function(){return b}));var n=r(0),a=r.n(n);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=a.a.createContext({}),s=function(t){var e=a.a.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},p=function(t){var e=s(t.components);return a.a.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},m=a.a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),p=s(r),m=n,b=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return r?a.a.createElement(b,c(c({ref:e},l),{},{components:r})):a.a.createElement(b,c({ref:e},l))}));function b(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);