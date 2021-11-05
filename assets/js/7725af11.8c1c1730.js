(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{248:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(454)),o={title:"Fn tauri::api::dialog::message",sidebar_label:"fn.message",custom_edit_url:null},s={unversionedId:"api/rust/tauri/api/dialog/fn.message",id:"api/rust/tauri/api/dialog/fn.message",isDocsHomePage:!1,title:"Fn tauri::api::dialog::message",description:"`rs",source:"@site/docs/zh-hans/api/rust/tauri/api/dialog/fn.message.md",sourceDirName:"api/rust/tauri/api/dialog",slug:"/api/rust/tauri/api/dialog/fn.message",permalink:"/tauri-docs/docs/api/rust/tauri/api/dialog/fn.message",editUrl:null,version:"current",sidebar_label:"fn.message",frontMatter:{title:"Fn tauri::api::dialog::message",sidebar_label:"fn.message",custom_edit_url:null},sidebar:"docs",previous:{title:"Fn tauri::api::dialog::ask",permalink:"/tauri-docs/docs/api/rust/tauri/api/dialog/fn.ask"},next:{title:"Fn tauri::api::dir::is_dir",permalink:"/tauri-docs/docs/api/rust/tauri/api/dir/fn.is_dir"}},u=[],c={toc:u};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-rs"},"pub fn message<R:\xa0Runtime>(\n\xa0\xa0\xa0\xa0parent_window: Option<&Window<R>>, \n\xa0\xa0\xa0\xa0title: impl AsRef<str>, \n\xa0\xa0\xa0\xa0message: impl AsRef<str>\n)\n")),Object(i.b)("p",null,"Expand description"),Object(i.b)("p",null,"Displays a message dialog."))}p.isMDXComponent=!0},454:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=p(r),f=n,m=l["".concat(o,".").concat(f)]||l[f]||d[f]||i;return r?a.a.createElement(m,s(s({ref:t},c),{},{components:r})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);