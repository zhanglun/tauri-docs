(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{149:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return l})),r.d(e,"metadata",(function(){return o})),r.d(e,"toc",(function(){return p})),r.d(e,"default",(function(){return u}));var i=r(3),a=r(7),n=(r(0),r(454)),l={title:"Trait tauri::Pixel",sidebar_label:"trait.Pixel",custom_edit_url:null},o={unversionedId:"api/rust/tauri/trait.Pixel",id:"api/rust/tauri/trait.Pixel",isDocsHomePage:!1,title:"Trait tauri::Pixel",description:"`rs",source:"@site/docs/en/api/rust/tauri/trait.Pixel.md",sourceDirName:"api/rust/tauri",slug:"/api/rust/tauri/trait.Pixel",permalink:"/en/docs/api/rust/tauri/trait.Pixel",editUrl:null,version:"current",sidebar_label:"trait.Pixel",frontMatter:{title:"Trait tauri::Pixel",sidebar_label:"trait.Pixel",custom_edit_url:null},sidebar:"docs",previous:{title:"Trait tauri::Manager",permalink:"/en/docs/api/rust/tauri/trait.Manager"},next:{title:"Trait tauri::Runtime",permalink:"/en/docs/api/rust/tauri/trait.Runtime"}},p=[{value:"Required methods",id:"required-methods",children:[]},{value:"Provided methods",id:"provided-methods",children:[]},{value:"Implementations on Foreign Types",id:"implementations-on-foreign-types",children:[{value:"impl trait tauri::Pixel for i16",id:"impl-trait-tauripixel-for-i16",children:[]},{value:"impl trait tauri::Pixel for u16",id:"impl-trait-tauripixel-for-u16",children:[]},{value:"impl trait tauri::Pixel for f32",id:"impl-trait-tauripixel-for-f32",children:[]},{value:"impl trait tauri::Pixel for u32",id:"impl-trait-tauripixel-for-u32",children:[]},{value:"impl trait tauri::Pixel for u8",id:"impl-trait-tauripixel-for-u8",children:[]},{value:"impl trait tauri::Pixel for f64",id:"impl-trait-tauripixel-for-f64",children:[]},{value:"impl trait tauri::Pixel for i8",id:"impl-trait-tauripixel-for-i8",children:[]},{value:"impl trait tauri::Pixel for i32",id:"impl-trait-tauripixel-for-i32",children:[]}]},{value:"Implementors",id:"implementors",children:[]}],f={toc:p};function u(t){var e=t.components,r=Object(a.a)(t,["components"]);return Object(n.b)("wrapper",Object(i.a)({},f,r,{components:e,mdxType:"MDXLayout"}),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-rs"},"pub trait Pixel: Copy + Into<f64> {\n    fn from_f64(f: f64) -> Self;\n\n    fn cast<P>(self) -> P\n\xa0\xa0\xa0 where\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0P: Pixel,\n    { ... }\n}\n")),Object(n.b)("p",null,"Expand description"),Object(n.b)("p",null,"A pixel definition. Must be created from a ",Object(n.b)("inlineCode",{parentName:"p"},"f64")," value."),Object(n.b)("h2",{id:"required-methods"},"Required methods"),Object(n.b)("h4",{id:"fn-from_f64f-f64---self"},"fn ",Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.from_f64"},"from_f64"),"(f: ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.f64.html"},"f64"),") -> Self"),Object(n.b)("p",null,"Creates the pixel from the ",Object(n.b)("inlineCode",{parentName:"p"},"f64")," value."),Object(n.b)("h2",{id:"provided-methods"},"Provided methods"),Object(n.b)("h4",{id:"fn-castpself---p-where-p-trait-tauripixel"},"fn ",Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#method.cast"},"cast"),"<","P>(self) -> P where P: ",Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/trait.Pixel",title:"trait tauri::Pixel"},"Pixel"),","),Object(n.b)("p",null,"Casts a pixel."),Object(n.b)("h2",{id:"implementations-on-foreign-types"},"Implementations on Foreign Types"),Object(n.b)("h3",{id:"impl-trait-tauripixel-for-i16"},"impl ",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/trait.Pixel",title:"trait tauri::Pixel"},"Pixel")," for ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/std/primitive.i16.html"},"i16")),Object(n.b)("h4",{id:"pub-fn-from_f64f-f64---i16"},"pub fn ",Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.from_f64"},"from_f64"),"(f: ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.f64.html"},"f64"),") -> ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.i16.html"},"i16")),Object(n.b)("h3",{id:"impl-trait-tauripixel-for-u16"},"impl ",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/trait.Pixel",title:"trait tauri::Pixel"},"Pixel")," for ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/std/primitive.u16.html"},"u16")),Object(n.b)("h4",{id:"pub-fn-from_f64f-f64---u16"},"pub fn ",Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.from_f64"},"from_f64"),"(f: ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.f64.html"},"f64"),") -> ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.u16.html"},"u16")),Object(n.b)("h3",{id:"impl-trait-tauripixel-for-f32"},"impl ",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/trait.Pixel",title:"trait tauri::Pixel"},"Pixel")," for ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/std/primitive.f32.html"},"f32")),Object(n.b)("h4",{id:"pub-fn-from_f64f-f64---f32"},"pub fn ",Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.from_f64"},"from_f64"),"(f: ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.f64.html"},"f64"),") -> ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.f32.html"},"f32")),Object(n.b)("h3",{id:"impl-trait-tauripixel-for-u32"},"impl ",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/trait.Pixel",title:"trait tauri::Pixel"},"Pixel")," for ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/std/primitive.u32.html"},"u32")),Object(n.b)("h4",{id:"pub-fn-from_f64f-f64---u32"},"pub fn ",Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.from_f64"},"from_f64"),"(f: ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.f64.html"},"f64"),") -> ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.u32.html"},"u32")),Object(n.b)("h3",{id:"impl-trait-tauripixel-for-u8"},"impl ",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/trait.Pixel",title:"trait tauri::Pixel"},"Pixel")," for ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/std/primitive.u8.html"},"u8")),Object(n.b)("h4",{id:"pub-fn-from_f64f-f64---u8"},"pub fn ",Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.from_f64"},"from_f64"),"(f: ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.f64.html"},"f64"),") -> ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.u8.html"},"u8")),Object(n.b)("h3",{id:"impl-trait-tauripixel-for-f64"},"impl ",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/trait.Pixel",title:"trait tauri::Pixel"},"Pixel")," for ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/std/primitive.f64.html"},"f64")),Object(n.b)("h4",{id:"pub-fn-from_f64f-f64---f64"},"pub fn ",Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.from_f64"},"from_f64"),"(f: ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.f64.html"},"f64"),") -> ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.f64.html"},"f64")),Object(n.b)("h3",{id:"impl-trait-tauripixel-for-i8"},"impl ",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/trait.Pixel",title:"trait tauri::Pixel"},"Pixel")," for ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/std/primitive.i8.html"},"i8")),Object(n.b)("h4",{id:"pub-fn-from_f64f-f64---i8"},"pub fn ",Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.from_f64"},"from_f64"),"(f: ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.f64.html"},"f64"),") -> ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.i8.html"},"i8")),Object(n.b)("h3",{id:"impl-trait-tauripixel-for-i32"},"impl ",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/trait.Pixel",title:"trait tauri::Pixel"},"Pixel")," for ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/std/primitive.i32.html"},"i32")),Object(n.b)("h4",{id:"pub-fn-from_f64f-f64---i32"},"pub fn ",Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.from_f64"},"from_f64"),"(f: ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.f64.html"},"f64"),") -> ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.i32.html"},"i32")),Object(n.b)("h2",{id:"implementors"},"Implementors"))}u.isMDXComponent=!0},454:function(t,e,r){"use strict";r.d(e,"a",(function(){return m})),r.d(e,"b",(function(){return s}));var i=r(0),a=r.n(i);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,i,a=function(t,e){if(null==t)return{};var r,i,a={},n=Object.keys(t);for(i=0;i<n.length;i++)r=n[i],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(i=0;i<n.length;i++)r=n[i],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var f=a.a.createContext({}),u=function(t){var e=a.a.useContext(f),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},m=function(t){var e=u(t.components);return a.a.createElement(f.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},b=a.a.forwardRef((function(t,e){var r=t.components,i=t.mdxType,n=t.originalType,l=t.parentName,f=p(t,["components","mdxType","originalType","parentName"]),m=u(r),b=i,s=m["".concat(l,".").concat(b)]||m[b]||c[b]||n;return r?a.a.createElement(s,o(o({ref:e},f),{},{components:r})):a.a.createElement(s,o({ref:e},f))}));function s(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var n=r.length,l=new Array(n);l[0]=b;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:i,l[1]=o;for(var f=2;f<n;f++)l[f]=r[f];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);