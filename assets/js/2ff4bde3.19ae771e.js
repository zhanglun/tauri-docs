(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{156:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),i=(r(0),r(454)),o={title:"Trait tauri::Assets",sidebar_label:"trait.Assets",custom_edit_url:null},s={unversionedId:"api/rust/tauri/trait.Assets",id:"api/rust/tauri/trait.Assets",isDocsHomePage:!1,title:"Trait tauri::Assets",description:"`rs",source:"@site/docs/zh-hans/api/rust/tauri/trait.Assets.md",sourceDirName:"api/rust/tauri",slug:"/api/rust/tauri/trait.Assets",permalink:"/tauri-docs/docs/api/rust/tauri/trait.Assets",editUrl:null,version:"current",sidebar_label:"trait.Assets",frontMatter:{title:"Trait tauri::Assets",sidebar_label:"trait.Assets",custom_edit_url:null},sidebar:"docs",previous:{title:"Struct tauri::Wry",permalink:"/tauri-docs/docs/api/rust/tauri/struct.Wry"},next:{title:"Trait tauri::ClipboardManager",permalink:"/tauri-docs/docs/api/rust/tauri/trait.ClipboardManager"}},c=[{value:"Required methods",id:"required-methods",children:[]},{value:"Implementations on Foreign Types",id:"implementations-on-foreign-types",children:[{value:"impl trait tauri::Assets for EmbeddedAssets",id:"impl-trait-tauriassets-for-embeddedassets",children:[]}]},{value:"Implementors",id:"implementors",children:[]}],u={toc:c};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-rs"},"pub trait Assets: 'static + Send + Sync {\n    fn get(&self, key: &AssetKey) -> Option<Cow<'_, [u8]>>;\n}\n")),Object(i.b)("p",null,"Expand description"),Object(i.b)("p",null,"Represents a container of file assets that are retrievable during runtime."),Object(i.b)("h2",{id:"required-methods"},"Required methods"),Object(i.b)("h4",{id:"fn-getself-key-assetkey---enum-coreoptionoptionenum-allocborrowcow_-u8"},"fn ",Object(i.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.get"},"get"),"(&self, key: &AssetKey) -> ",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html",title:"enum core::option::Option"},"Option"),"<",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/alloc/borrow/enum.Cow.html",title:"enum alloc::borrow::Cow"},"Cow"),"<","'","_",", ",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.slice.html"},"["),Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.u8.html"},"u8"),Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.slice.html"},"]"),">>"),Object(i.b)("p",null,"Get the content of the passed ","[",Object(i.b)("inlineCode",{parentName:"p"},"AssetKey"),"]."),Object(i.b)("h2",{id:"implementations-on-foreign-types"},"Implementations on Foreign Types"),Object(i.b)("h3",{id:"impl-trait-tauriassets-for-embeddedassets"},"impl ",Object(i.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/trait.Assets",title:"trait tauri::Assets"},"Assets")," for EmbeddedAssets"),Object(i.b)("h4",{id:"pub-fn-getself-key-assetkey---enum-coreoptionoptionenum-allocborrowcow_-u8"},"pub fn ",Object(i.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.get"},"get"),"(&self, key: &AssetKey) -> ",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html",title:"enum core::option::Option"},"Option"),"<",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/alloc/borrow/enum.Cow.html",title:"enum alloc::borrow::Cow"},"Cow"),"<","'","_",", ",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.slice.html"},"["),Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.u8.html"},"u8"),Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.slice.html"},"]"),">>"),Object(i.b)("h2",{id:"implementors"},"Implementors"))}l.isMDXComponent=!0},454:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,b=p["".concat(o,".").concat(d)]||p[d]||m[d]||i;return r?a.a.createElement(b,s(s({ref:t},u),{},{components:r})):a.a.createElement(b,s({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);