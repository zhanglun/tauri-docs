(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{232:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return p}));var n=t(3),a=t(7),o=(t(0),t(454)),i={title:"Macro tauri::generate_handler",sidebar_label:"macro.generate_handler",custom_edit_url:null},c={unversionedId:"api/rust/tauri/macro.generate_handler",id:"api/rust/tauri/macro.generate_handler",isDocsHomePage:!1,title:"Macro tauri::generate_handler",description:"`rs",source:"@site/docs/en/api/rust/tauri/macro.generate_handler.md",sourceDirName:"api/rust/tauri",slug:"/api/rust/tauri/macro.generate_handler",permalink:"/en/docs/api/rust/tauri/macro.generate_handler",editUrl:null,version:"current",sidebar_label:"macro.generate_handler",frontMatter:{title:"Macro tauri::generate_handler",sidebar_label:"macro.generate_handler",custom_edit_url:null},sidebar:"docs",previous:{title:"Macro tauri::generate_context",permalink:"/en/docs/api/rust/tauri/macro.generate_context"},next:{title:"Macro tauri::tauri_build_context",permalink:"/en/docs/api/rust/tauri/macro.tauri_build_context"}},l=[{value:"Example",id:"example",children:[]},{value:"Stability",id:"stability",children:[]}],u={toc:l};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rs"},"generate_handler!() { /* proc-macro */ }\n")),Object(o.b)("p",null,"Expand description"),Object(o.b)("p",null,"Accepts a list of commands functions. Creates a handler that allows commands to be called from JS with invoke()."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"\u24d8"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-rs"},'use tauri::command;\n#[command]\n\nfn command_one() {}\n#[command]\nfn command_two() {}\nfn main() {\n  tauri::Builder::default()\n    .invoke_handler(tauri::generate_handler&#33;[command_one, command_two])\n    .run(tauri::generate_context!())\n    .expect("error while running tauri application");\n}\n')),Object(o.b)("h2",{id:"stability"},"Stability"),Object(o.b)("p",null,"The output of this macro is managed internally by Tauri, and should not be accessed directly on normal applications. It may have breaking changes in the future."))}p.isMDXComponent=!0},454:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return b}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),p=function(e){var r=a.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=p(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),m=n,b=s["".concat(i,".").concat(m)]||s[m]||d[m]||o;return t?a.a.createElement(b,c(c({ref:r},u),{},{components:t})):a.a.createElement(b,c({ref:r},u))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);