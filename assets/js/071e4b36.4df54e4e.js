(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{454:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return b}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=i.a.createContext({}),l=function(e){var t=i.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=l(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=l(r),f=n,b=s["".concat(o,".").concat(f)]||s[f]||d[f]||a;return r?i.a.createElement(b,p(p({ref:t},c),{},{components:r})):i.a.createElement(b,p({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=f;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var c=2;c<a;c++)o[c]=r[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},89:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),i=r(7),a=(r(0),r(454)),o={title:"Fn tauri::api::path::video_dir",sidebar_label:"fn.video_dir",custom_edit_url:null},p={unversionedId:"api/rust/tauri/api/path/fn.video_dir",id:"api/rust/tauri/api/path/fn.video_dir",isDocsHomePage:!1,title:"Fn tauri::api::path::video_dir",description:"`rs",source:"@site/docs/zh-hans/api/rust/tauri/api/path/fn.video_dir.md",sourceDirName:"api/rust/tauri/api/path",slug:"/api/rust/tauri/api/path/fn.video_dir",permalink:"/tauri-docs/docs/api/rust/tauri/api/path/fn.video_dir",editUrl:null,version:"current",sidebar_label:"fn.video_dir",frontMatter:{title:"Fn tauri::api::path::video_dir",sidebar_label:"fn.video_dir",custom_edit_url:null},sidebar:"docs",previous:{title:"Fn tauri::api::path::template_dir",permalink:"/tauri-docs/docs/api/rust/tauri/api/path/fn.template_dir"},next:{title:"Fn tauri::api::process::current_binary",permalink:"/tauri-docs/docs/api/rust/tauri/api/process/fn.current_binary"}},u=[],c={toc:u};function l(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-rs"},"pub fn video_dir() -> Option<PathBuf>\n")),Object(a.b)("p",null,"Expand description"),Object(a.b)("p",null,"Returns the path to the user\u2019s video dir"))}l.isMDXComponent=!0}}]);