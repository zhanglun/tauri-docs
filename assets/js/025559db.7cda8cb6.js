(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{454:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=p(n),d=r,m=l["".concat(u,".").concat(d)]||l[d]||f[d]||i;return n?a.a.createElement(m,o(o({ref:t},s),{},{components:n})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,u=new Array(i);u[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,u[1]=o;for(var s=2;s<i;s++)u[s]=n[s];return a.a.createElement.apply(null,u)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(454)),u={title:"Fn tauri::async_runtime::spawn",sidebar_label:"fn.spawn",custom_edit_url:null},o={unversionedId:"api/rust/tauri/async_runtime/fn.spawn",id:"api/rust/tauri/async_runtime/fn.spawn",isDocsHomePage:!1,title:"Fn tauri::async_runtime::spawn",description:"`rs",source:"@site/docs/zh-hans/api/rust/tauri/async_runtime/fn.spawn.md",sourceDirName:"api/rust/tauri/async_runtime",slug:"/api/rust/tauri/async_runtime/fn.spawn",permalink:"/tauri-docs/docs/api/rust/tauri/async_runtime/fn.spawn",editUrl:null,version:"current",sidebar_label:"fn.spawn",frontMatter:{title:"Fn tauri::async_runtime::spawn",sidebar_label:"fn.spawn",custom_edit_url:null},sidebar:"docs",previous:{title:"Fn tauri::async_runtime::handle",permalink:"/tauri-docs/docs/api/rust/tauri/async_runtime/fn.handle"},next:{title:"Struct tauri::async_runtime::Handle",permalink:"/tauri-docs/docs/api/rust/tauri/async_runtime/struct.Handle"}},c=[],s={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-rs"},"pub fn spawn<F>(task: F) -> JoinHandle<F::Output>\u24d8\nNotable traits for JoinHandle<T>\nimpl<T> Future for JoinHandle<T>    type Output = Result<T>;\n where\n\xa0\xa0\xa0\xa0F: Future + Send + 'static,\n\xa0\xa0\xa0\xa0F::Output: Send + 'static,\xa0\n")),Object(i.b)("p",null,"Expand description"),Object(i.b)("p",null,"Spawns a future onto the runtime."))}p.isMDXComponent=!0}}]);