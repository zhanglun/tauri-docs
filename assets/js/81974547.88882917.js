(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{266:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(454)),s={title:"Fn tauri::settings::read_settings",sidebar_label:"fn.read_settings",custom_edit_url:null},o={unversionedId:"api/rust/tauri/settings/fn.read_settings",id:"api/rust/tauri/settings/fn.read_settings",isDocsHomePage:!1,title:"Fn tauri::settings::read_settings",description:"`rs",source:"@site/docs/zh-hans/api/rust/tauri/settings/fn.read_settings.md",sourceDirName:"api/rust/tauri/settings",slug:"/api/rust/tauri/settings/fn.read_settings",permalink:"/zh-hans/docs/api/rust/tauri/settings/fn.read_settings",editUrl:null,version:"current",sidebar_label:"fn.read_settings",frontMatter:{title:"Fn tauri::settings::read_settings",sidebar_label:"fn.read_settings",custom_edit_url:null},sidebar:"docs",previous:{title:"Type tauri::plugin::Result",permalink:"/zh-hans/docs/api/rust/tauri/plugin/type.Result"},next:{title:"Struct tauri::settings::Settings",permalink:"/zh-hans/docs/api/rust/tauri/settings/struct.Settings"}},u=[],c={toc:u};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-rs"},"pub fn read_settings(config: &Config, package_info: &PackageInfo) -> Settings\n")),Object(i.b)("p",null,"Expand description"),Object(i.b)("p",null,"Reads the settings from the file system."))}l.isMDXComponent=!0},454:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,g=p["".concat(s,".").concat(d)]||p[d]||f[d]||i;return n?a.a.createElement(g,o(o({ref:t},c),{},{components:n})):a.a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);