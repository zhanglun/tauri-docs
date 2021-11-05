(window.webpackJsonp=window.webpackJsonp||[]).push([[305],{382:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),i=(n(0),n(454)),o={title:"Fn tauri::api::dialog::ask",sidebar_label:"fn.ask",custom_edit_url:null},u={unversionedId:"api/rust/tauri/api/dialog/fn.ask",id:"api/rust/tauri/api/dialog/fn.ask",isDocsHomePage:!1,title:"Fn tauri::api::dialog::ask",description:"`rs",source:"@site/docs/en/api/rust/tauri/api/dialog/fn.ask.md",sourceDirName:"api/rust/tauri/api/dialog",slug:"/api/rust/tauri/api/dialog/fn.ask",permalink:"/en/docs/api/rust/tauri/api/dialog/fn.ask",editUrl:null,version:"current",sidebar_label:"fn.ask",frontMatter:{title:"Fn tauri::api::dialog::ask",sidebar_label:"fn.ask",custom_edit_url:null},sidebar:"docs",previous:{title:"Table of contents",permalink:"/en/docs/api/rust/tauri/index"},next:{title:"Fn tauri::api::dialog::message",permalink:"/en/docs/api/rust/tauri/api/dialog/fn.message"}},c=[],l={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-rs"},"pub fn ask<R:\xa0Runtime, F:\xa0FnOnce(bool) + Send + 'static>(\n\xa0\xa0\xa0\xa0parent_window: Option<&Window<R>>, \n\xa0\xa0\xa0\xa0title: impl AsRef<str>, \n\xa0\xa0\xa0\xa0message: impl AsRef<str>, \n\xa0\xa0\xa0\xa0f: F\n)\n")),Object(i.b)("p",null,"Expand description"),Object(i.b)("p",null,"Displays a dialog with a message and an optional title with a \u201cyes\u201d and a \u201cno\u201d button."))}s.isMDXComponent=!0},454:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,b=p["".concat(o,".").concat(d)]||p[d]||f[d]||i;return n?a.a.createElement(b,u(u({ref:t},l),{},{components:n})):a.a.createElement(b,u({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);