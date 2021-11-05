(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{319:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return o})),r.d(e,"metadata",(function(){return u})),r.d(e,"toc",(function(){return c})),r.d(e,"default",(function(){return l}));var n=r(3),a=r(7),i=(r(0),r(454)),o={title:"Trait tauri::plugin::Plugin",sidebar_label:"trait.Plugin",custom_edit_url:null},u={unversionedId:"api/rust/tauri/plugin/trait.Plugin",id:"api/rust/tauri/plugin/trait.Plugin",isDocsHomePage:!1,title:"Trait tauri::plugin::Plugin",description:"`rs",source:"@site/docs/zh-hans/api/rust/tauri/plugin/trait.Plugin.md",sourceDirName:"api/rust/tauri/plugin",slug:"/api/rust/tauri/plugin/trait.Plugin",permalink:"/zh-hans/docs/api/rust/tauri/plugin/trait.Plugin",editUrl:null,version:"current",sidebar_label:"trait.Plugin",frontMatter:{title:"Trait tauri::plugin::Plugin",sidebar_label:"trait.Plugin",custom_edit_url:null},sidebar:"docs",previous:{title:"Struct tauri::http::Uri",permalink:"/zh-hans/docs/api/rust/tauri/http/struct.Uri"},next:{title:"Type tauri::plugin::Result",permalink:"/zh-hans/docs/api/rust/tauri/plugin/type.Result"}},c=[{value:"Required methods",id:"required-methods",children:[]},{value:"Provided methods",id:"provided-methods",children:[]},{value:"Implementors",id:"implementors",children:[]}],s={toc:c};function l(t){var e=t.components,r=Object(a.a)(t,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:e,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-rs"},"pub trait Plugin<R:\xa0Runtime>: Send {\n    fn name(&self) -> &'static str;\n\n    fn initialize(\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0&mut self, \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0app: &AppHandle<R>, \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0config: JsonValue\n\xa0\xa0\xa0\xa0) -> Result<()> { ... }\n\n    fn initialization_script(&self) -> Option<String> { ... }\n\n    fn created(&mut self, window: Window<R>) { ... }\n\n    fn on_page_load(&mut self, window: Window<R>, payload: PageLoadPayload) { ... }\n\n    fn extend_api(&mut self, invoke: Invoke<R>) { ... }\n}\n")),Object(i.b)("p",null,"Expand description"),Object(i.b)("p",null,"The plugin interface."),Object(i.b)("h2",{id:"required-methods"},"Required methods"),Object(i.b)("h4",{id:"fn-nameself---static-strgoto-source-code"},"fn ",Object(i.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.name"},"name"),"(&self) -> &'static ",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.str.html"},"str"),Object(i.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/../../src/tauri/plugin.rs#21",title:"goto source code"},"[","src","]")),Object(i.b)("p",null,"The plugin name. Used as key on the plugin config object."),Object(i.b)("h2",{id:"provided-methods"},"Provided methods"),Object(i.b)("h4",{id:"fn-initializemut-self-app-struct-tauriapphandler-config-enum-serde_jsonvaluevalue---type-tauripluginresultgoto-source-code"},"fn ",Object(i.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#method.initialize"},"initialize"),"(&mut self, app: &",Object(i.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/../struct.AppHandle",title:"struct tauri::AppHandle"},"AppHandle"),"<","R>, config: ",Object(i.b)("a",{parentName:"h4",href:"https://docs.rs/serde_json/1.0.66/serde_json/value/enum.Value.html",title:"enum serde_json::value::Value"},"JsonValue"),") -> ",Object(i.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/type.Result",title:"type tauri::plugin::Result"},"Result"),"<",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.unit.html"},"()"),">",Object(i.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/../../src/tauri/plugin.rs#25-27",title:"goto source code"},"[","src","]")),Object(i.b)("p",null,"Initializes the plugin."),Object(i.b)("h4",{id:"fn-initialization_scriptself---enum-coreoptionoptionstruct-allocstringstringgoto-source-code"},"fn ",Object(i.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#method.initialization_script"},"initialization_script"),"(&self) -> ",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html",title:"enum core::option::Option"},"Option"),"<",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html",title:"struct alloc::string::String"},"String"),">",Object(i.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/../../src/tauri/plugin.rs#34-36",title:"goto source code"},"[","src","]")),Object(i.b)("p",null,"The JS script to evaluate on webview initialization. The script is wrapped into its own context with ",Object(i.b)("inlineCode",{parentName:"p"},"(function () { /* your script here */ })();"),", so global variables must be assigned to ",Object(i.b)("inlineCode",{parentName:"p"},"window")," instead of implicity declared."),Object(i.b)("p",null,"It\u2019s guaranteed that this script is executed before the page is loaded."),Object(i.b)("h4",{id:"fn-createdmut-self-window-struct-tauriwindowwindowrgoto-source-code"},"fn ",Object(i.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#method.created"},"created"),"(&mut self, window: ",Object(i.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/../window/struct.Window",title:"struct tauri::window::Window"},"Window"),"<","R>)",Object(i.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/../../src/tauri/plugin.rs#40",title:"goto source code"},"[","src","]")),Object(i.b)("p",null,"Callback invoked when the webview is created."),Object(i.b)("h4",{id:"fn-on_page_loadmut-self-window-struct-tauriwindowwindowr-payload-struct-tauripageloadpayloadgoto-source-code"},"fn ",Object(i.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#method.on_page_load"},"on_page_load"),"(&mut self, window: ",Object(i.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/../window/struct.Window",title:"struct tauri::window::Window"},"Window"),"<","R>, payload: ",Object(i.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/../struct.PageLoadPayload",title:"struct tauri::PageLoadPayload"},"PageLoadPayload"),")",Object(i.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/../../src/tauri/plugin.rs#44",title:"goto source code"},"[","src","]")),Object(i.b)("p",null,"Callback invoked when the webview performs a navigation to a page."),Object(i.b)("h4",{id:"fn-extend_apimut-self-invoke-struct-tauriinvokergoto-source-code"},"fn ",Object(i.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#method.extend_api"},"extend_api"),"(&mut self, invoke: ",Object(i.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/../struct.Invoke",title:"struct tauri::Invoke"},"Invoke"),"<","R>)",Object(i.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/../../src/tauri/plugin.rs#48",title:"goto source code"},"[","src","]")),Object(i.b)("p",null,"Extend commands to ",Object(i.b)("a",{parentName:"p",href:"/docs/api/rust/tauri/../struct.Builder#method.invoke_handler",title:"crate::Builder::invoke_handler"},Object(i.b)("inlineCode",{parentName:"a"},"crate::Builder::invoke_handler")),"."),Object(i.b)("h2",{id:"implementors"},"Implementors"))}l.isMDXComponent=!0},454:function(t,e,r){"use strict";r.d(e,"a",(function(){return p})),r.d(e,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=a.a.createContext({}),l=function(t){var e=a.a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):u(u({},e),t)),r},p=function(t){var e=l(t.components);return a.a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},b=a.a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),p=l(r),b=n,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return r?a.a.createElement(m,u(u({ref:e},s),{},{components:r})):a.a.createElement(m,u({ref:e},s))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,o=new Array(i);o[0]=b;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:n,o[1]=u;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);