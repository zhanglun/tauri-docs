(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{454:function(t,e,r){"use strict";r.d(e,"a",(function(){return m})),r.d(e,"b",(function(){return h}));var o=r(0),a=r.n(o);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,o,a=function(t,e){if(null==t)return{};var r,o,a={},n=Object.keys(t);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=a.a.createContext({}),s=function(t){var e=a.a.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},m=function(t){var e=s(t.components);return a.a.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},p=a.a.forwardRef((function(t,e){var r=t.components,o=t.mdxType,n=t.originalType,i=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),m=s(r),p=o,h=m["".concat(i,".").concat(p)]||m[p]||d[p]||n;return r?a.a.createElement(h,c(c({ref:e},l),{},{components:r})):a.a.createElement(h,c({ref:e},l))}));function h(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var n=r.length,i=new Array(n);i[0]=p;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var l=2;l<n;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},87:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return i})),r.d(e,"metadata",(function(){return c})),r.d(e,"toc",(function(){return u})),r.d(e,"default",(function(){return s}));var o=r(3),a=r(7),n=(r(0),r(454)),i={title:"Struct tauri::window::MenuHandle",sidebar_label:"struct.MenuHandle",custom_edit_url:null},c={unversionedId:"api/rust/tauri/window/struct.MenuHandle",id:"api/rust/tauri/window/struct.MenuHandle",isDocsHomePage:!1,title:"Struct tauri::window::MenuHandle",description:"`rs",source:"@site/docs/zh-hans/api/rust/tauri/window/struct.MenuHandle.md",sourceDirName:"api/rust/tauri/window",slug:"/api/rust/tauri/window/struct.MenuHandle",permalink:"/tauri-docs/docs/api/rust/tauri/window/struct.MenuHandle",editUrl:null,version:"current",sidebar_label:"struct.MenuHandle",frontMatter:{title:"Struct tauri::window::MenuHandle",sidebar_label:"struct.MenuHandle",custom_edit_url:null},sidebar:"docs",previous:{title:"Struct tauri::window::MenuEvent",permalink:"/tauri-docs/docs/api/rust/tauri/window/struct.MenuEvent"},next:{title:"Struct tauri::window::Monitor",permalink:"/tauri-docs/docs/api/rust/tauri/window/struct.Monitor"}},u=[{value:"Implementations",id:"implementations",children:[{value:"impl&lt;R: trait tauri::Runtime&gt; struct tauri::window::MenuHandle&lt;R&gt;goto source code",id:"implr-trait-tauriruntime-struct-tauriwindowmenuhandlergoto-source-code",children:[]}]},{value:"Panics",id:"panics",children:[]},{value:"Panics",id:"panics-1",children:[]},{value:"Trait Implementations",id:"trait-implementations",children:[{value:"impl&lt;R: trait tauri::Runtime&gt; trait core::clone::Clone for struct tauri::window::MenuHandle&lt;R&gt;goto source code",id:"implr-trait-tauriruntime-trait-corecloneclone-for-struct-tauriwindowmenuhandlergoto-source-code",children:[]},{value:"impl&lt;R: trait core::fmt::Debug + trait tauri::Runtime&gt; trait core::fmt::Debug for struct tauri::window::MenuHandle&lt;R&gt; where R::type tauri::Runtime::Dispatcher: trait core::fmt::Debug,goto source code",id:"implr-trait-corefmtdebug--trait-tauriruntime-trait-corefmtdebug-for-struct-tauriwindowmenuhandler-where-rtype-tauriruntimedispatcher-trait-corefmtdebuggoto-source-code",children:[]}]},{value:"Auto Trait Implementations",id:"auto-trait-implementations",children:[{value:"impl&lt;R&gt; trait std::panic::RefUnwindSafe for struct tauri::window::MenuHandle&lt;R&gt; where &lt;R as trait tauri::Runtime&gt;::type tauri::Runtime::Dispatcher: trait std::panic::RefUnwindSafe,",id:"implr-trait-stdpanicrefunwindsafe-for-struct-tauriwindowmenuhandler-where-r-as-trait-tauriruntimetype-tauriruntimedispatcher-trait-stdpanicrefunwindsafe",children:[]},{value:"impl&lt;R&gt; trait core::marker::Send for struct tauri::window::MenuHandle&lt;R&gt;",id:"implr-trait-coremarkersend-for-struct-tauriwindowmenuhandler",children:[]},{value:"impl&lt;R&gt; trait core::marker::Sync for struct tauri::window::MenuHandle&lt;R&gt; where &lt;R as trait tauri::Runtime&gt;::type tauri::Runtime::Dispatcher: trait core::marker::Sync,",id:"implr-trait-coremarkersync-for-struct-tauriwindowmenuhandler-where-r-as-trait-tauriruntimetype-tauriruntimedispatcher-trait-coremarkersync",children:[]},{value:"impl&lt;R&gt; trait core::marker::Unpin for struct tauri::window::MenuHandle&lt;R&gt; where &lt;R as trait tauri::Runtime&gt;::type tauri::Runtime::Dispatcher: trait core::marker::Unpin,",id:"implr-trait-coremarkerunpin-for-struct-tauriwindowmenuhandler-where-r-as-trait-tauriruntimetype-tauriruntimedispatcher-trait-coremarkerunpin",children:[]},{value:"impl&lt;R&gt; trait std::panic::UnwindSafe for struct tauri::window::MenuHandle&lt;R&gt; where &lt;R as trait tauri::Runtime&gt;::type tauri::Runtime::Dispatcher: trait std::panic::UnwindSafe,",id:"implr-trait-stdpanicunwindsafe-for-struct-tauriwindowmenuhandler-where-r-as-trait-tauriruntimetype-tauriruntimedispatcher-trait-stdpanicunwindsafe",children:[]}]},{value:"Blanket Implementations",id:"blanket-implementations",children:[{value:"impl&lt;T&gt; trait core::any::Any for T where T: &#39;static + ?trait core::marker::Sized,goto source code",id:"implt-trait-coreanyany-for-t-where-t-static--trait-coremarkersizedgoto-source-code",children:[]},{value:"impl&lt;T&gt; trait core::borrow::Borrow&lt;T&gt; for T where T: ?trait core::marker::Sized,goto source code",id:"implt-trait-coreborrowborrowt-for-t-where-t-trait-coremarkersizedgoto-source-code",children:[]},{value:"impl&lt;T&gt; trait core::borrow::BorrowMut&lt;T&gt; for T where T: ?trait core::marker::Sized,goto source code",id:"implt-trait-coreborrowborrowmutt-for-t-where-t-trait-coremarkersizedgoto-source-code",children:[]},{value:"impl&lt;T&gt; trait core::convert::From&lt;T&gt; for Tgoto source code",id:"implt-trait-coreconvertfromt-for-tgoto-source-code",children:[]},{value:"impl&lt;T, U&gt; trait core::convert::Into&lt;U&gt; for T where U: trait core::convert::From&lt;T&gt;,goto source code",id:"implt-u-trait-coreconvertintou-for-t-where-u-trait-coreconvertfromtgoto-source-code",children:[]},{value:"impl&lt;T&gt; trait alloc::borrow::ToOwned for T where T: trait core::clone::Clone,goto source code",id:"implt-trait-allocborrowtoowned-for-t-where-t-trait-corecloneclonegoto-source-code",children:[]},{value:"impl&lt;T, U&gt; trait core::convert::TryFrom&lt;U&gt; for T where U: trait core::convert::Into&lt;T&gt;,goto source code",id:"implt-u-trait-coreconverttryfromu-for-t-where-u-trait-coreconvertintotgoto-source-code",children:[]},{value:"impl&lt;T, U&gt; trait core::convert::TryInto&lt;U&gt; for T where U: trait core::convert::TryFrom&lt;T&gt;,goto source code",id:"implt-u-trait-coreconverttryintou-for-t-where-u-trait-coreconverttryfromtgoto-source-code",children:[]},{value:"impl&lt;V, T&gt; VZip&lt;V&gt; for T where V: MultiLane&lt;T&gt;,",id:"implv-t-vzipv-for-t-where-v-multilanet",children:[]}]}],l={toc:u};function s(t){var e=t.components,r=Object(a.a)(t,["components"]);return Object(n.b)("wrapper",Object(o.a)({},l,r,{components:e,mdxType:"MDXLayout"}),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-rs"},"pub struct MenuHandle<R:\xa0Runtime\xa0=\xa0Wry> { /* fields omitted */ }\n")),Object(n.b)("p",null,"Expand description"),Object(n.b)("p",null,"A handle to a system tray. Allows updating the context menu items."),Object(n.b)("h2",{id:"implementations"},"Implementations"),Object(n.b)("h3",{id:"implr-trait-tauriruntime-struct-tauriwindowmenuhandlergoto-source-code"},"impl","<","R: ",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/../trait.Runtime",title:"trait tauri::Runtime"},"Runtime"),"> ",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/struct.MenuHandle",title:"struct tauri::window::MenuHandle"},"MenuHandle"),"<","R>",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/../../src/tauri/window/menu.rs#61-112",title:"goto source code"},"[","src","]")),Object(n.b)("h4",{id:"pub-fn-get_itemself-id-menuidref_---menuitemhandlergoto-source-code"},"pub fn ",Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#method.get_item"},"get_item"),"(&self, id: MenuIdRef","<","'","_",">) -> MenuItemHandle","<","R>",Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/../../src/tauri/window/menu.rs#63-73",title:"goto source code"},"[","src","]")),Object(n.b)("p",null,"Gets a handle to the menu item that has the specified ",Object(n.b)("inlineCode",{parentName:"p"},"id"),"."),Object(n.b)("h4",{id:"pub-fn-showself---type-tauriresultgoto-source-code"},"pub fn ",Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#method.show"},"show"),"(&self) -> ",Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/../type.Result",title:"type tauri::Result"},"Result"),"<",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.unit.html"},"()"),">",Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/../../src/tauri/window/menu.rs#76-78",title:"goto source code"},"[","src","]")),Object(n.b)("p",null,"Shows the menu."),Object(n.b)("h4",{id:"pub-fn-hideself---type-tauriresultgoto-source-code"},"pub fn ",Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#method.hide"},"hide"),"(&self) -> ",Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/../type.Result",title:"type tauri::Result"},"Result"),"<",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.unit.html"},"()"),">",Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/../../src/tauri/window/menu.rs#81-83",title:"goto source code"},"[","src","]")),Object(n.b)("p",null,"Hides the menu."),Object(n.b)("h4",{id:"pub-fn-is_visibleself---type-tauriresultboolgoto-source-code"},"pub fn ",Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#method.is_visible"},"is_visible"),"(&self) -> ",Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/../type.Result",title:"type tauri::Result"},"Result"),"<",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.bool.html"},"bool"),">",Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/../../src/tauri/window/menu.rs#93-95",title:"goto source code"},"[","src","]")),Object(n.b)("p",null,"Whether the menu is visible or not."),Object(n.b)("h2",{id:"panics"},"Panics"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Panics if the event loop is not running yet, usually when called on the ",Object(n.b)("a",{parentName:"li",href:"/docs/api/rust/tauri/../struct.Builder#method.setup"},Object(n.b)("inlineCode",{parentName:"a"},"setup"))," closure."),Object(n.b)("li",{parentName:"ul"},"Panics when called on the main thread, usually on the ",Object(n.b)("a",{parentName:"li",href:"/docs/api/rust/tauri/../struct.App#method.run"},Object(n.b)("inlineCode",{parentName:"a"},"run"))," closure.")),Object(n.b)("p",null,"You can spawn a task to use the API using ",Object(n.b)("a",{parentName:"p",href:"/docs/api/rust/tauri/../async_runtime/fn.spawn",title:"crate::async_runtime::spawn"},Object(n.b)("inlineCode",{parentName:"a"},"crate::async_runtime::spawn"))," or ",Object(n.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/std/thread/fn.spawn.html",title:"std::thread::spawn"},Object(n.b)("inlineCode",{parentName:"a"},"std::thread::spawn"))," to prevent the panic."),Object(n.b)("h4",{id:"pub-fn-toggleself---type-tauriresultgoto-source-code"},"pub fn ",Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#method.toggle"},"toggle"),"(&self) -> ",Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/../type.Result",title:"type tauri::Result"},"Result"),"<",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.unit.html"},"()"),">",Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/../../src/tauri/window/menu.rs#105-111",title:"goto source code"},"[","src","]")),Object(n.b)("p",null,"Toggles the menu visibility."),Object(n.b)("h2",{id:"panics-1"},"Panics"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Panics if the event loop is not running yet, usually when called on the ",Object(n.b)("a",{parentName:"li",href:"/docs/api/rust/tauri/../struct.Builder#method.setup"},Object(n.b)("inlineCode",{parentName:"a"},"setup"))," closure."),Object(n.b)("li",{parentName:"ul"},"Panics when called on the main thread, usually on the ",Object(n.b)("a",{parentName:"li",href:"/docs/api/rust/tauri/../struct.App#method.run"},Object(n.b)("inlineCode",{parentName:"a"},"run"))," closure.")),Object(n.b)("p",null,"You can spawn a task to use the API using ",Object(n.b)("a",{parentName:"p",href:"/docs/api/rust/tauri/../async_runtime/fn.spawn",title:"crate::async_runtime::spawn"},Object(n.b)("inlineCode",{parentName:"a"},"crate::async_runtime::spawn"))," or ",Object(n.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/std/thread/fn.spawn.html",title:"std::thread::spawn"},Object(n.b)("inlineCode",{parentName:"a"},"std::thread::spawn"))," to prevent the panic."),Object(n.b)("h2",{id:"trait-implementations"},"Trait Implementations"),Object(n.b)("h3",{id:"implr-trait-tauriruntime-trait-corecloneclone-for-struct-tauriwindowmenuhandlergoto-source-code"},"impl","<","R: ",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/../trait.Runtime",title:"trait tauri::Runtime"},"Runtime"),"> ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html",title:"trait core::clone::Clone"},"Clone")," for ",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/struct.MenuHandle",title:"struct tauri::window::MenuHandle"},"MenuHandle"),"<","R>",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/../../src/tauri/window/menu.rs#35-42",title:"goto source code"},"[","src","]")),Object(n.b)("h4",{id:"fn-cloneself---selfgoto-source-code"},"fn ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#tymethod.clone"},"clone"),"(&self) -> Self",Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/../../src/tauri/window/menu.rs#36-41",title:"goto source code"},"[","src","]")),Object(n.b)("p",null,"Returns a copy of the value. ",Object(n.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#tymethod.clone"},"Read more")),Object(n.b)("h4",{id:"fn-clone_frommut-self-source-self100goto-source-code"},"fn ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#method.clone_from"},"clone_from"),"(&mut self, source: ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.reference.html"},"&"),"Self)1.0.0",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/clone.rs.html#130",title:"goto source code"},"[","src","]")),Object(n.b)("p",null,"Performs copy-assignment from ",Object(n.b)("inlineCode",{parentName:"p"},"source"),". ",Object(n.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#method.clone_from"},"Read more")),Object(n.b)("h3",{id:"implr-trait-corefmtdebug--trait-tauriruntime-trait-corefmtdebug-for-struct-tauriwindowmenuhandler-where-rtype-tauriruntimedispatcher-trait-corefmtdebuggoto-source-code"},"impl","<","R: ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html",title:"trait core::fmt::Debug"},"Debug")," + ",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/../trait.Runtime",title:"trait tauri::Runtime"},"Runtime"),"> ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html",title:"trait core::fmt::Debug"},"Debug")," for ",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/struct.MenuHandle",title:"struct tauri::window::MenuHandle"},"MenuHandle"),"<","R> where R::",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/../trait.Runtime#associatedtype.Dispatcher",title:"type tauri::Runtime::Dispatcher"},"Dispatcher"),": ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html",title:"trait core::fmt::Debug"},"Debug"),",",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/../../src/tauri/window/menu.rs#29",title:"goto source code"},"[","src","]")),Object(n.b)("h4",{id:"fn-fmtself-f-mut-struct-corefmtformatter_---type-corefmtresultgoto-source-code"},"fn ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt"},"fmt"),"(&self, f: &mut ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html",title:"struct core::fmt::Formatter"},"Formatter"),"<","'","_",">) -> ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/fmt/type.Result.html",title:"type core::fmt::Result"},"Result"),Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/../../src/tauri/window/menu.rs#29",title:"goto source code"},"[","src","]")),Object(n.b)("p",null,"Formats the value using the given formatter. ",Object(n.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt"},"Read more")),Object(n.b)("h2",{id:"auto-trait-implementations"},"Auto Trait Implementations"),Object(n.b)("h3",{id:"implr-trait-stdpanicrefunwindsafe-for-struct-tauriwindowmenuhandler-where-r-as-trait-tauriruntimetype-tauriruntimedispatcher-trait-stdpanicrefunwindsafe"},"impl","<","R> ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html",title:"trait std::panic::RefUnwindSafe"},"RefUnwindSafe")," for ",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/struct.MenuHandle",title:"struct tauri::window::MenuHandle"},"MenuHandle"),"<","R> where ","<","R as ",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/../trait.Runtime",title:"trait tauri::Runtime"},"Runtime"),">::",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/../trait.Runtime#associatedtype.Dispatcher",title:"type tauri::Runtime::Dispatcher"},"Dispatcher"),": ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html",title:"trait std::panic::RefUnwindSafe"},"RefUnwindSafe"),","),Object(n.b)("h3",{id:"implr-trait-coremarkersend-for-struct-tauriwindowmenuhandler"},"impl","<","R> ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html",title:"trait core::marker::Send"},"Send")," for ",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/struct.MenuHandle",title:"struct tauri::window::MenuHandle"},"MenuHandle"),"<","R>"),Object(n.b)("h3",{id:"implr-trait-coremarkersync-for-struct-tauriwindowmenuhandler-where-r-as-trait-tauriruntimetype-tauriruntimedispatcher-trait-coremarkersync"},"impl","<","R> ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html",title:"trait core::marker::Sync"},"Sync")," for ",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/struct.MenuHandle",title:"struct tauri::window::MenuHandle"},"MenuHandle"),"<","R> where ","<","R as ",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/../trait.Runtime",title:"trait tauri::Runtime"},"Runtime"),">::",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/../trait.Runtime#associatedtype.Dispatcher",title:"type tauri::Runtime::Dispatcher"},"Dispatcher"),": ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html",title:"trait core::marker::Sync"},"Sync"),","),Object(n.b)("h3",{id:"implr-trait-coremarkerunpin-for-struct-tauriwindowmenuhandler-where-r-as-trait-tauriruntimetype-tauriruntimedispatcher-trait-coremarkerunpin"},"impl","<","R> ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html",title:"trait core::marker::Unpin"},"Unpin")," for ",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/struct.MenuHandle",title:"struct tauri::window::MenuHandle"},"MenuHandle"),"<","R> where ","<","R as ",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/../trait.Runtime",title:"trait tauri::Runtime"},"Runtime"),">::",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/../trait.Runtime#associatedtype.Dispatcher",title:"type tauri::Runtime::Dispatcher"},"Dispatcher"),": ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html",title:"trait core::marker::Unpin"},"Unpin"),","),Object(n.b)("h3",{id:"implr-trait-stdpanicunwindsafe-for-struct-tauriwindowmenuhandler-where-r-as-trait-tauriruntimetype-tauriruntimedispatcher-trait-stdpanicunwindsafe"},"impl","<","R> ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html",title:"trait std::panic::UnwindSafe"},"UnwindSafe")," for ",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/struct.MenuHandle",title:"struct tauri::window::MenuHandle"},"MenuHandle"),"<","R> where ","<","R as ",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/../trait.Runtime",title:"trait tauri::Runtime"},"Runtime"),">::",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/../trait.Runtime#associatedtype.Dispatcher",title:"type tauri::Runtime::Dispatcher"},"Dispatcher"),": ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html",title:"trait std::panic::UnwindSafe"},"UnwindSafe"),","),Object(n.b)("h2",{id:"blanket-implementations"},"Blanket Implementations"),Object(n.b)("h3",{id:"implt-trait-coreanyany-for-t-where-t-static--trait-coremarkersizedgoto-source-code"},"impl","<","T> ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html",title:"trait core::any::Any"},"Any")," for T where T: 'static + ?",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html",title:"trait core::marker::Sized"},"Sized"),",",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/any.rs.html#131-135",title:"goto source code"},"[","src","]")),Object(n.b)("h4",{id:"pub-fn-type_idself---struct-coreanytypeidgoto-source-code"},"pub fn ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html#tymethod.type_id"},"type_id"),"(&self) -> ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/any/struct.TypeId.html",title:"struct core::any::TypeId"},"TypeId"),Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/any.rs.html#132",title:"goto source code"},"[","src","]")),Object(n.b)("p",null,"Gets the ",Object(n.b)("inlineCode",{parentName:"p"},"TypeId")," of ",Object(n.b)("inlineCode",{parentName:"p"},"self"),". ",Object(n.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html#tymethod.type_id"},"Read more")),Object(n.b)("h3",{id:"implt-trait-coreborrowborrowt-for-t-where-t-trait-coremarkersizedgoto-source-code"},"impl","<","T> ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html",title:"trait core::borrow::Borrow"},"Borrow"),"<","T> for T where T: ?",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html",title:"trait core::marker::Sized"},"Sized"),",",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#208-213",title:"goto source code"},"[","src","]")),Object(n.b)("h4",{id:"pub-fn-borrowself---tgoto-source-code"},"pub fn ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html#tymethod.borrow"},"borrow"),"(&self) -> ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.reference.html"},"&"),"T",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#210",title:"goto source code"},"[","src","]")),Object(n.b)("p",null,"Immutably borrows from an owned value. ",Object(n.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html#tymethod.borrow"},"Read more")),Object(n.b)("h3",{id:"implt-trait-coreborrowborrowmutt-for-t-where-t-trait-coremarkersizedgoto-source-code"},"impl","<","T> ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html",title:"trait core::borrow::BorrowMut"},"BorrowMut"),"<","T> for T where T: ?",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html",title:"trait core::marker::Sized"},"Sized"),",",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#216-220",title:"goto source code"},"[","src","]")),Object(n.b)("h4",{id:"pub-fn-borrow_mutmut-self---muttgoto-source-code"},"pub fn ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut"},"borrow_mut"),"(&mut self) -> ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.reference.html"},"&mut"),"T",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#217",title:"goto source code"},"[","src","]")),Object(n.b)("p",null,"Mutably borrows from an owned value. ",Object(n.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut"},"Read more")),Object(n.b)("h3",{id:"implt-trait-coreconvertfromt-for-tgoto-source-code"},"impl","<","T> ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html",title:"trait core::convert::From"},"From"),"<","T> for T",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#544-548",title:"goto source code"},"[","src","]")),Object(n.b)("h4",{id:"pub-fn-fromt-t---tgoto-source-code"},"pub fn ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from"},"from"),"(t: T) -> T",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#545",title:"goto source code"},"[","src","]")),Object(n.b)("p",null,"Performs the conversion."),Object(n.b)("h3",{id:"implt-u-trait-coreconvertintou-for-t-where-u-trait-coreconvertfromtgoto-source-code"},"impl","<","T, U> ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html",title:"trait core::convert::Into"},"Into"),"<","U> for T where U: ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html",title:"trait core::convert::From"},"From"),"<","T>,",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#533-540",title:"goto source code"},"[","src","]")),Object(n.b)("h4",{id:"pub-fn-intoself---ugoto-source-code"},"pub fn ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html#tymethod.into"},"into"),"(self) -> U",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#537",title:"goto source code"},"[","src","]")),Object(n.b)("p",null,"Performs the conversion."),Object(n.b)("h3",{id:"implt-trait-allocborrowtoowned-for-t-where-t-trait-corecloneclonegoto-source-code"},"impl","<","T> ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html",title:"trait alloc::borrow::ToOwned"},"ToOwned")," for T where T: ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html",title:"trait core::clone::Clone"},"Clone"),",",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/alloc/borrow.rs.html#84-96",title:"goto source code"},"[","src","]")),Object(n.b)("h4",{id:"type-owned--t"},"type ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#associatedtype.Owned"},"Owned")," = T"),Object(n.b)("p",null,"The resulting type after obtaining ownership."),Object(n.b)("h4",{id:"pub-fn-to_ownedself---tgoto-source-code"},"pub fn ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#tymethod.to_owned"},"to_owned"),"(&self) -> T",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/alloc/borrow.rs.html#89",title:"goto source code"},"[","src","]")),Object(n.b)("p",null,"Creates owned data from borrowed data, usually by cloning. ",Object(n.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#tymethod.to_owned"},"Read more")),Object(n.b)("h4",{id:"pub-fn-clone_intoself-target-muttgoto-source-code"},"pub fn ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#method.clone_into"},"clone_into"),"(&self, target: ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.reference.html"},"&mut"),"T)",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/alloc/borrow.rs.html#93",title:"goto source code"},"[","src","]")),Object(n.b)("p",null,"\ud83d\udd2c This is a nightly-only experimental API. (",Object(n.b)("inlineCode",{parentName:"p"},"toowned_clone_into"),")"),Object(n.b)("p",null,"recently added"),Object(n.b)("p",null,"Uses borrowed data to replace owned data, usually by cloning. ",Object(n.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#method.clone_into"},"Read more")),Object(n.b)("h3",{id:"implt-u-trait-coreconverttryfromu-for-t-where-u-trait-coreconvertintotgoto-source-code"},"impl","<","T, U> ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","U> for T where U: ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html",title:"trait core::convert::Into"},"Into"),"<","T>,",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#581-590",title:"goto source code"},"[","src","]")),Object(n.b)("h4",{id:"type-error--enum-coreconvertinfallible"},"type ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error"},"Error")," = ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/enum.Infallible.html",title:"enum core::convert::Infallible"},"Infallible")),Object(n.b)("p",null,"The type returned in the event of a conversion error."),Object(n.b)("h4",{id:"pub-fn-try_fromvalue-u---enum-coreresultresultt-t-as-trait-coreconverttryfromutype-coreconverttryfromerrorgoto-source-code"},"pub fn ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#tymethod.try_from"},"try_from"),"(value: U) -> ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html",title:"enum core::result::Result"},"Result"),"<","T, ","<","T as ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","U>>::",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error",title:"type core::convert::TryFrom::Error"},"Error"),">",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#587",title:"goto source code"},"[","src","]")),Object(n.b)("p",null,"Performs the conversion."),Object(n.b)("h3",{id:"implt-u-trait-coreconverttryintou-for-t-where-u-trait-coreconverttryfromtgoto-source-code"},"impl","<","T, U> ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html",title:"trait core::convert::TryInto"},"TryInto"),"<","U> for T where U: ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","T>,",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#567-576",title:"goto source code"},"[","src","]")),Object(n.b)("h4",{id:"type-error--u-as-trait-coreconverttryfromttype-coreconverttryfromerror"},"type ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html#associatedtype.Error"},"Error")," = ","<","U as ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","T>>::",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error",title:"type core::convert::TryFrom::Error"},"Error")),Object(n.b)("p",null,"The type returned in the event of a conversion error."),Object(n.b)("h4",{id:"pub-fn-try_intoself---enum-coreresultresultu-u-as-trait-coreconverttryfromttype-coreconverttryfromerrorgoto-source-code"},"pub fn ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html#tymethod.try_into"},"try_into"),"(self) -> ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html",title:"enum core::result::Result"},"Result"),"<","U, ","<","U as ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","T>>::",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error",title:"type core::convert::TryFrom::Error"},"Error"),">",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#573",title:"goto source code"},"[","src","]")),Object(n.b)("p",null,"Performs the conversion."),Object(n.b)("h3",{id:"implv-t-vzipv-for-t-where-v-multilanet"},"impl","<","V, T> VZip","<","V> for T where V: MultiLane","<","T>,"),Object(n.b)("h4",{id:"pub-fn-vzipself---v"},"pub fn ",Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.vzip"},"vzip"),"(self) -> V"))}s.isMDXComponent=!0}}]);