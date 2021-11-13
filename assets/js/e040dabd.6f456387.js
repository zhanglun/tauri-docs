(window.webpackJsonp=window.webpackJsonp||[]).push([[317],{394:function(r,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return a})),t.d(e,"metadata",(function(){return o})),t.d(e,"toc",(function(){return u})),t.d(e,"default",(function(){return p}));var n=t(3),i=(t(0),t(454));const a={title:"Fn tauri::api::dir::read_dir",sidebar_label:"fn.read_dir",custom_edit_url:null},o={unversionedId:"api/rust/tauri/api/dir/fn.read_dir",id:"api/rust/tauri/api/dir/fn.read_dir",isDocsHomePage:!1,title:"Fn tauri::api::dir::read_dir",description:"`rs",source:"@site/docs/zh-hans/api/rust/tauri/api/dir/fn.read_dir.md",sourceDirName:"api/rust/tauri/api/dir",slug:"/api/rust/tauri/api/dir/fn.read_dir",permalink:"/tauri-docs/docs/api/rust/tauri/api/dir/fn.read_dir",editUrl:null,version:"current",sidebar_label:"fn.read_dir",frontMatter:{title:"Fn tauri::api::dir::read_dir",sidebar_label:"fn.read_dir",custom_edit_url:null},sidebar:"docs",previous:{title:"Fn tauri::api::dir::is_dir",permalink:"/tauri-docs/docs/api/rust/tauri/api/dir/fn.is_dir"},next:{title:"Fn tauri::api::dir::with_temp_dir",permalink:"/tauri-docs/docs/api/rust/tauri/api/dir/fn.with_temp_dir"}},u=[],c={toc:u};function p({components:r,...e}){return Object(i.b)("wrapper",Object(n.a)({},c,e,{components:r,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-rs"},"pub fn read_dir<P:\xa0AsRef<Path>>(\n\xa0\xa0\xa0\xa0path: P, \n\xa0\xa0\xa0\xa0recursive: bool\n) -> Result<Vec<DiskEntry>>\n")),Object(i.b)("p",null,"Expand description"),Object(i.b)("p",null,"Reads a directory. Can perform recursive operations."))}p.isMDXComponent=!0},454:function(r,e,t){"use strict";t.d(e,"a",(function(){return l})),t.d(e,"b",(function(){return b}));var n=t(0),i=t.n(n);function a(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function o(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function u(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function c(r,e){if(null==r)return{};var t,n,i=function(r,e){if(null==r)return{};var t,n,i={},a=Object.keys(r);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||(i[t]=r[t]);return i}(r,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(i[t]=r[t])}return i}var p=i.a.createContext({}),d=function(r){var e=i.a.useContext(p),t=e;return r&&(t="function"==typeof r?r(e):u(u({},e),r)),t},l=function(r){var e=d(r.components);return i.a.createElement(p.Provider,{value:e},r.children)},s={inlineCode:"code",wrapper:function(r){var e=r.children;return i.a.createElement(i.a.Fragment,{},e)}},f=i.a.forwardRef((function(r,e){var t=r.components,n=r.mdxType,a=r.originalType,o=r.parentName,p=c(r,["components","mdxType","originalType","parentName"]),l=d(t),f=n,b=l["".concat(o,".").concat(f)]||l[f]||s[f]||a;return t?i.a.createElement(b,u(u({ref:e},p),{},{components:t})):i.a.createElement(b,u({ref:e},p))}));function b(r,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof r||n){var a=t.length,o=new Array(a);o[0]=f;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=r,u.mdxType="string"==typeof r?r:n,o[1]=u;for(var p=2;p<a;p++)o[p]=t[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);