(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{189:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return i})),r.d(e,"metadata",(function(){return o})),r.d(e,"toc",(function(){return c})),r.d(e,"default",(function(){return l}));var u=r(3),a=r(7),n=(r(0),r(454)),i={title:"Trait tauri::async_runtime::RuntimeHandle",sidebar_label:"trait.RuntimeHandle",custom_edit_url:null},o={unversionedId:"api/rust/tauri/async_runtime/trait.RuntimeHandle",id:"api/rust/tauri/async_runtime/trait.RuntimeHandle",isDocsHomePage:!1,title:"Trait tauri::async_runtime::RuntimeHandle",description:"`rs",source:"@site/docs/zh-hans/api/rust/tauri/async_runtime/trait.RuntimeHandle.md",sourceDirName:"api/rust/tauri/async_runtime",slug:"/api/rust/tauri/async_runtime/trait.RuntimeHandle",permalink:"/zh-hans/docs/api/rust/tauri/async_runtime/trait.RuntimeHandle",editUrl:null,version:"current",sidebar_label:"trait.RuntimeHandle",frontMatter:{title:"Trait tauri::async_runtime::RuntimeHandle",sidebar_label:"trait.RuntimeHandle",custom_edit_url:null},sidebar:"docs",previous:{title:"Struct tauri::async_runtime::TokioJoinHandle",permalink:"/zh-hans/docs/api/rust/tauri/async_runtime/struct.TokioJoinHandle"},next:{title:"Struct tauri::command::CommandItem",permalink:"/zh-hans/docs/api/rust/tauri/command/struct.CommandItem"}},c=[{value:"Required methods",id:"required-methods",children:[]},{value:"Implementors",id:"implementors",children:[{value:"impl trait tauri::async_runtime::RuntimeHandle for struct tauri::async_runtime::Handlegoto source code",id:"impl-trait-tauriasync_runtimeruntimehandle-for-struct-tauriasync_runtimehandlegoto-source-code",children:[]}]}],s={toc:c};function l(t){var e=t.components,r=Object(a.a)(t,["components"]);return Object(n.b)("wrapper",Object(u.a)({},s,r,{components:e,mdxType:"MDXLayout"}),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-rs"},"pub trait RuntimeHandle: Debug + Clone + Sync + Sync {\n    fn spawn<F:\xa0Future>(&self, task: F) -> JoinHandle<F::Output>\u24d8\nNotable traits for JoinHandle<T>\nimpl<T> Future for JoinHandle<T>    type Output = Result<T>;\n\n\xa0\xa0\xa0 where\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0F: Future + Send + 'static,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0F::Output: Send + 'static;\n\n    fn block_on<F:\xa0Future>(&self, task: F) -> F::Output;\n}\n")),Object(n.b)("p",null,"Expand description"),Object(n.b)("p",null,"Runtime handle definition."),Object(n.b)("h2",{id:"required-methods"},"Required methods"),Object(n.b)("h4",{id:"fn-spawnf-trait-corefuturefuturefutureself-task-f---struct-tauriasync_runtimejoinhandleftype-corefuturefuturefutureoutput\u24d8notable-traits-for-struct-tauriasync_runtimejoinhandletimplt-future-for-joinhandlettype-output--resultt-where-f-trait-corefuturefuturefuture--trait-coremarkersend--static-ftype-corefuturefuturefutureoutput-trait-coremarkersend--staticgoto-source-code"},"fn ",Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.spawn"},"spawn"),"<","F: ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html",title:"trait core::future::future::Future"},"Future"),">(&self, task: F) -> ",Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/struct.JoinHandle",title:"struct tauri::async_runtime::JoinHandle"},"JoinHandle"),"<","F::",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output",title:"type core::future::future::Future::Output"},"Output"),">\u24d8Notable traits for ",Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/struct.JoinHandle",title:"struct tauri::async_runtime::JoinHandle"},"JoinHandle"),"<","T>",Object(n.b)("inlineCode",{parentName:"h4"},"impl<T> Future for JoinHandle<T>type Output = Result<T>;")," where F: ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html",title:"trait core::future::future::Future"},"Future")," + ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html",title:"trait core::marker::Send"},"Send")," + 'static, F::",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output",title:"type core::future::future::Future::Output"},"Output"),": ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html",title:"trait core::marker::Send"},"Send")," + 'static,",Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/../../src/tauri/async_runtime.rs#51-54",title:"goto source code"},"[","src","]")),Object(n.b)("p",null,"Spawns a future onto the runtime."),Object(n.b)("h4",{id:"fn-block_onf-trait-corefuturefuturefutureself-task-f---ftype-corefuturefuturefutureoutputgoto-source-code"},"fn ",Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.block_on"},"block_on"),"<","F: ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html",title:"trait core::future::future::Future"},"Future"),">(&self, task: F) -> F::",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output",title:"type core::future::future::Future::Output"},"Output"),Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/../../src/tauri/async_runtime.rs#57",title:"goto source code"},"[","src","]")),Object(n.b)("p",null,"Runs a future to completion on runtime."),Object(n.b)("h2",{id:"implementors"},"Implementors"),Object(n.b)("h3",{id:"impl-trait-tauriasync_runtimeruntimehandle-for-struct-tauriasync_runtimehandlegoto-source-code"},"impl ",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/trait.RuntimeHandle",title:"trait tauri::async_runtime::RuntimeHandle"},"RuntimeHandle")," for ",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/struct.Handle",title:"struct tauri::async_runtime::Handle"},"Handle"),Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/../../src/tauri/async_runtime.rs#60-72",title:"goto source code"},"[","src","]")),Object(n.b)("h4",{id:"fn-spawnf-trait-corefuturefuturefutureself-task-f---struct-tauriasync_runtimejoinhandleftype-corefuturefuturefutureoutput\u24d8notable-traits-for-struct-tauriasync_runtimejoinhandletimplt-future-for-joinhandlettype-output--resultt-where-f-trait-corefuturefuturefuture--trait-coremarkersend--static-ftype-corefuturefuturefutureoutput-trait-coremarkersend--static"},"fn ",Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.spawn"},"spawn"),"<","F: ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html",title:"trait core::future::future::Future"},"Future"),">(&self, task: F) -> ",Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/struct.JoinHandle",title:"struct tauri::async_runtime::JoinHandle"},"JoinHandle"),"<","F::",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output",title:"type core::future::future::Future::Output"},"Output"),">\u24d8Notable traits for ",Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/struct.JoinHandle",title:"struct tauri::async_runtime::JoinHandle"},"JoinHandle"),"<","T>",Object(n.b)("inlineCode",{parentName:"h4"},"impl<T> Future for JoinHandle<T>type Output = Result<T>;")," where F: ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html",title:"trait core::future::future::Future"},"Future")," + ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html",title:"trait core::marker::Send"},"Send")," + 'static, F::",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output",title:"type core::future::future::Future::Output"},"Output"),": ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html",title:"trait core::marker::Send"},"Send")," + 'static,"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"/docs/api/rust/tauri/../../src/tauri/async_runtime.rs#61-67",title:"goto source code"},"[","src","]")),Object(n.b)("h4",{id:"fn-block_onf-trait-corefuturefuturefutureself-task-f---ftype-corefuturefuturefutureoutput"},"fn ",Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.block_on"},"block_on"),"<","F: ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html",title:"trait core::future::future::Future"},"Future"),">(&self, task: F) -> F::",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/future/future/trait.Future.html#associatedtype.Output",title:"type core::future::future::Future::Output"},"Output")),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"/docs/api/rust/tauri/../../src/tauri/async_runtime.rs#69-71",title:"goto source code"},"[","src","]")))}l.isMDXComponent=!0},454:function(t,e,r){"use strict";r.d(e,"a",(function(){return p})),r.d(e,"b",(function(){return m}));var u=r(0),a=r.n(u);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);e&&(u=u.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,u)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,u,a=function(t,e){if(null==t)return{};var r,u,a={},n=Object.keys(t);for(u=0;u<n.length;u++)r=n[u],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(u=0;u<n.length;u++)r=n[u],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=a.a.createContext({}),l=function(t){var e=a.a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=l(t.components);return a.a.createElement(s.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},d=a.a.forwardRef((function(t,e){var r=t.components,u=t.mdxType,n=t.originalType,i=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),p=l(r),d=u,m=p["".concat(i,".").concat(d)]||p[d]||f[d]||n;return r?a.a.createElement(m,o(o({ref:e},s),{},{components:r})):a.a.createElement(m,o({ref:e},s))}));function m(t,e){var r=arguments,u=e&&e.mdxType;if("string"==typeof t||u){var n=r.length,i=new Array(n);i[0]=d;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:u,i[1]=o;for(var s=2;s<n;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);