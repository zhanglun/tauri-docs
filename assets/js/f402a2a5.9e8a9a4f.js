(window.webpackJsonp=window.webpackJsonp||[]).push([[353],{429:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return c}));var n=r(3),o=(r(0),r(454));const a={title:"Type tauri::SetupHook",sidebar_label:"type.SetupHook",custom_edit_url:null},u={unversionedId:"api/rust/tauri/type.SetupHook",id:"api/rust/tauri/type.SetupHook",isDocsHomePage:!1,title:"Type tauri::SetupHook",description:"`rs",source:"@site/docs/zh-hans/api/rust/tauri/type.SetupHook.md",sourceDirName:"api/rust/tauri",slug:"/api/rust/tauri/type.SetupHook",permalink:"/tauri-docs/docs/api/rust/tauri/type.SetupHook",editUrl:null,version:"current",sidebar_label:"type.SetupHook",frontMatter:{title:"Type tauri::SetupHook",sidebar_label:"type.SetupHook",custom_edit_url:null},sidebar:"docs",previous:{title:"Type tauri::Result",permalink:"/tauri-docs/docs/api/rust/tauri/type.Result"},next:{title:"Type tauri::SyncTask",permalink:"/tauri-docs/docs/api/rust/tauri/type.SyncTask"}},i=[],p={toc:i};function c({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rs"},"type SetupHook<R> = Box<dyn Fn(&mut App<R>) -> Result<(), Box<dyn Error + Send>> + Send>;\n")),Object(o.b)("p",null,"Expand description"),Object(o.b)("p",null,"A closure that is run when the Tauri application is setting up."))}c.isMDXComponent=!0},454:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),l=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=l(r),d=n,f=s["".concat(u,".").concat(d)]||s[d]||y[d]||a;return r?o.a.createElement(f,i(i({ref:t},c),{},{components:r})):o.a.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,u=new Array(a);u[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,u[1]=i;for(var c=2;c<a;c++)u[c]=r[c];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);