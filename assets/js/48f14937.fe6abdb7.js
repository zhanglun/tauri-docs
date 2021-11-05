(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{188:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return c}));var a=r(3),n=r(7),l=(r(0),r(454)),i={title:"Trait tauri::GlobalShortcutManager",sidebar_label:"trait.GlobalShortcutManager",custom_edit_url:null},o={unversionedId:"api/rust/tauri/trait.GlobalShortcutManager",id:"api/rust/tauri/trait.GlobalShortcutManager",isDocsHomePage:!1,title:"Trait tauri::GlobalShortcutManager",description:"`rs",source:"@site/docs/zh-hans/api/rust/tauri/trait.GlobalShortcutManager.md",sourceDirName:"api/rust/tauri",slug:"/api/rust/tauri/trait.GlobalShortcutManager",permalink:"/zh-hans/docs/api/rust/tauri/trait.GlobalShortcutManager",editUrl:null,version:"current",sidebar_label:"trait.GlobalShortcutManager",frontMatter:{title:"Trait tauri::GlobalShortcutManager",sidebar_label:"trait.GlobalShortcutManager",custom_edit_url:null},sidebar:"docs",previous:{title:"Trait tauri::ClipboardManager",permalink:"/zh-hans/docs/api/rust/tauri/trait.ClipboardManager"},next:{title:"Trait tauri::Manager",permalink:"/zh-hans/docs/api/rust/tauri/trait.Manager"}},s=[{value:"Required methods",id:"required-methods",children:[]},{value:"Panics",id:"panics",children:[]},{value:"Panics",id:"panics-1",children:[]},{value:"Panics",id:"panics-2",children:[]},{value:"Panics",id:"panics-3",children:[]},{value:"Implementations on Foreign Types",id:"implementations-on-foreign-types",children:[{value:"impl trait tauri::GlobalShortcutManager for GlobalShortcutManagerHandle",id:"impl-trait-tauriglobalshortcutmanager-for-globalshortcutmanagerhandle",children:[]}]},{value:"Implementors",id:"implementors",children:[]}],u={toc:s};function c(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-rs"},"pub trait GlobalShortcutManager: Debug {\n    fn is_registered(&self, accelerator: &str) -> Result<bool, Error>;\n\n    fn register<F>(\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0&mut self, \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0accelerator: &str, \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0handler: F\n\xa0\xa0\xa0\xa0) -> Result<(), Error>\n\xa0\xa0\xa0 where\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0F: 'static + Fn() + Send;\n\n    fn unregister_all(&mut self) -> Result<(), Error>;\n\n    fn unregister(&mut self, accelerator: &str) -> Result<(), Error>;\n}\n")),Object(l.b)("p",null,"Expand description"),Object(l.b)("p",null,"A global shortcut manager."),Object(l.b)("h2",{id:"required-methods"},"Required methods"),Object(l.b)("h4",{id:"fn-is_registeredself-accelerator-str---enum-coreresultresultbool-error"},"fn ",Object(l.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.is_registered"},"is_registered"),"(&self, accelerator: &",Object(l.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.str.html"},"str"),") -> ",Object(l.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html",title:"enum core::result::Result"},"Result"),"<",Object(l.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.bool.html"},"bool"),", Error>"),Object(l.b)("p",null,"Whether the application has registered the given ",Object(l.b)("inlineCode",{parentName:"p"},"accelerator"),"."),Object(l.b)("h2",{id:"panics"},"Panics"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Panics if the event loop is not running yet, usually when called on the ",Object(l.b)("inlineCode",{parentName:"li"},"tauri::Builder#setup")," closure."),Object(l.b)("li",{parentName:"ul"},"Panics when called on the main thread, usually on the ",Object(l.b)("inlineCode",{parentName:"li"},"tauri::App#run"),"closure.")),Object(l.b)("p",null,"You can spawn a task to use the API using ",Object(l.b)("inlineCode",{parentName:"p"},"tauri::async_runtime::spawn")," or ",Object(l.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/std/thread/fn.spawn.html",title:"std::thread::spawn"},Object(l.b)("inlineCode",{parentName:"a"},"std::thread::spawn"))," to prevent the panic."),Object(l.b)("h4",{id:"fn-registerfmut-self-accelerator-str-handler-f---enum-coreresultresult-error-where-f-static--trait-coreopsfunctionfn--trait-coremarkersend"},"fn ",Object(l.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.register"},"register"),"<","F>(&mut self, accelerator: &",Object(l.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.str.html"},"str"),", handler: F) -> ",Object(l.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html",title:"enum core::result::Result"},"Result"),"<",Object(l.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.unit.html"},"()"),", Error> where F: 'static + ",Object(l.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/ops/function/trait.Fn.html",title:"trait core::ops::function::Fn"},"Fn"),"() + ",Object(l.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html",title:"trait core::marker::Send"},"Send"),","),Object(l.b)("p",null,"Register a global shortcut of ",Object(l.b)("inlineCode",{parentName:"p"},"accelerator"),"."),Object(l.b)("h2",{id:"panics-1"},"Panics"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Panics if the event loop is not running yet, usually when called on the ",Object(l.b)("inlineCode",{parentName:"li"},"tauri::Builder#setup")," closure."),Object(l.b)("li",{parentName:"ul"},"Panics when called on the main thread, usually on the ",Object(l.b)("inlineCode",{parentName:"li"},"tauri::App#run"),"closure.")),Object(l.b)("p",null,"You can spawn a task to use the API using ",Object(l.b)("inlineCode",{parentName:"p"},"tauri::async_runtime::spawn")," or ",Object(l.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/std/thread/fn.spawn.html",title:"std::thread::spawn"},Object(l.b)("inlineCode",{parentName:"a"},"std::thread::spawn"))," to prevent the panic."),Object(l.b)("h4",{id:"fn-unregister_allmut-self---enum-coreresultresult-error"},"fn ",Object(l.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.unregister_all"},"unregister_all"),"(&mut self) -> ",Object(l.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html",title:"enum core::result::Result"},"Result"),"<",Object(l.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.unit.html"},"()"),", Error>"),Object(l.b)("p",null,"Unregister all accelerators registered by the manager instance."),Object(l.b)("h2",{id:"panics-2"},"Panics"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Panics if the event loop is not running yet, usually when called on the ",Object(l.b)("inlineCode",{parentName:"li"},"tauri::Builder#setup")," closure."),Object(l.b)("li",{parentName:"ul"},"Panics when called on the main thread, usually on the ",Object(l.b)("inlineCode",{parentName:"li"},"tauri::App#run"),"closure.")),Object(l.b)("p",null,"You can spawn a task to use the API using ",Object(l.b)("inlineCode",{parentName:"p"},"tauri::async_runtime::spawn")," or ",Object(l.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/std/thread/fn.spawn.html",title:"std::thread::spawn"},Object(l.b)("inlineCode",{parentName:"a"},"std::thread::spawn"))," to prevent the panic."),Object(l.b)("h4",{id:"fn-unregistermut-self-accelerator-str---enum-coreresultresult-error"},"fn ",Object(l.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.unregister"},"unregister"),"(&mut self, accelerator: &",Object(l.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.str.html"},"str"),") -> ",Object(l.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html",title:"enum core::result::Result"},"Result"),"<",Object(l.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.unit.html"},"()"),", Error>"),Object(l.b)("p",null,"Unregister the provided ",Object(l.b)("inlineCode",{parentName:"p"},"accelerator"),"."),Object(l.b)("h2",{id:"panics-3"},"Panics"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Panics if the event loop is not running yet, usually when called on the ",Object(l.b)("inlineCode",{parentName:"li"},"tauri::Builder#setup")," closure."),Object(l.b)("li",{parentName:"ul"},"Panics when called on the main thread, usually on the ",Object(l.b)("inlineCode",{parentName:"li"},"tauri::App#run"),"closure.")),Object(l.b)("p",null,"You can spawn a task to use the API using ",Object(l.b)("inlineCode",{parentName:"p"},"tauri::async_runtime::spawn")," or ",Object(l.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/std/thread/fn.spawn.html",title:"std::thread::spawn"},Object(l.b)("inlineCode",{parentName:"a"},"std::thread::spawn"))," to prevent the panic."),Object(l.b)("h2",{id:"implementations-on-foreign-types"},"Implementations on Foreign Types"),Object(l.b)("h3",{id:"impl-trait-tauriglobalshortcutmanager-for-globalshortcutmanagerhandle"},"impl ",Object(l.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/trait.GlobalShortcutManager",title:"trait tauri::GlobalShortcutManager"},"GlobalShortcutManager")," for GlobalShortcutManagerHandle"),Object(l.b)("h4",{id:"pub-fn-is_registeredself-accelerator-str---enum-coreresultresultbool-error"},"pub fn ",Object(l.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.is_registered"},"is_registered"),"(&self, accelerator: &",Object(l.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.str.html"},"str"),") -> ",Object(l.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html",title:"enum core::result::Result"},"Result"),"<",Object(l.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.bool.html"},"bool"),", Error>"),Object(l.b)("h4",{id:"pub-fn-registerf-mut-self-accelerator-str-handler-f----enum-coreresultresult-error-where-f-static--trait-coreopsfunctionfn--trait-coremarkersend"},"pub fn ",Object(l.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.register"},"register"),"<","F>( &mut self, accelerator: &",Object(l.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.str.html"},"str"),", handler: F ) -> ",Object(l.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html",title:"enum core::result::Result"},"Result"),"<",Object(l.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.unit.html"},"()"),", Error> where F: 'static + ",Object(l.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/ops/function/trait.Fn.html",title:"trait core::ops::function::Fn"},"Fn"),"() + ",Object(l.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html",title:"trait core::marker::Send"},"Send"),","),Object(l.b)("h4",{id:"pub-fn-unregister_allmut-self---enum-coreresultresult-error"},"pub fn ",Object(l.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.unregister_all"},"unregister_all"),"(&mut self) -> ",Object(l.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html",title:"enum core::result::Result"},"Result"),"<",Object(l.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.unit.html"},"()"),", Error>"),Object(l.b)("h4",{id:"pub-fn-unregistermut-self-accelerator-str---enum-coreresultresult-error"},"pub fn ",Object(l.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.unregister"},"unregister"),"(&mut self, accelerator: &",Object(l.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.str.html"},"str"),") -> ",Object(l.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html",title:"enum core::result::Result"},"Result"),"<",Object(l.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.unit.html"},"()"),", Error>"),Object(l.b)("h2",{id:"implementors"},"Implementors"))}c.isMDXComponent=!0},454:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=n.a.createContext({}),c=function(e){var t=n.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),h=a,m=p["".concat(i,".").concat(h)]||p[h]||b[h]||l;return r?n.a.createElement(m,o(o({ref:t},u),{},{components:r})):n.a.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);