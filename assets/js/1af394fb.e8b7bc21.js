(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{119:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),i=r(7),a=(r(0),r(454)),o={title:"Trait tauri::WindowBuilder",sidebar_label:"trait.WindowBuilder",custom_edit_url:null},l={unversionedId:"api/rust/tauri/trait.WindowBuilder",id:"api/rust/tauri/trait.WindowBuilder",isDocsHomePage:!1,title:"Trait tauri::WindowBuilder",description:"`rs",source:"@site/docs/zh-hans/api/rust/tauri/trait.WindowBuilder.md",sourceDirName:"api/rust/tauri",slug:"/api/rust/tauri/trait.WindowBuilder",permalink:"/tauri-docs/docs/api/rust/tauri/trait.WindowBuilder",editUrl:null,version:"current",sidebar_label:"trait.WindowBuilder",frontMatter:{title:"Trait tauri::WindowBuilder",sidebar_label:"trait.WindowBuilder",custom_edit_url:null},sidebar:"docs",previous:{title:"Trait tauri::Runtime",permalink:"/tauri-docs/docs/api/rust/tauri/trait.Runtime"},next:{title:"Type tauri::InvokeHandler",permalink:"/tauri-docs/docs/api/rust/tauri/type.InvokeHandler"}},s=[{value:"Required methods",id:"required-methods",children:[]},{value:"Implementations on Foreign Types",id:"implementations-on-foreign-types",children:[{value:"impl trait tauri::WindowBuilder for WindowBuilderWrapper",id:"impl-trait-tauriwindowbuilder-for-windowbuilderwrapper",children:[]}]},{value:"Implementors",id:"implementors",children:[]}],b={toc:s};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-rs"},"pub trait WindowBuilder: WindowBuilderBase {\nShow methods    fn new() -> Self;\n\n    fn with_config(config: WindowConfig) -> Self;\n\n    fn menu(self, menu: Menu) -> Self;\n\n    fn center(self) -> Self;\n\n    fn position(self, x: f64, y: f64) -> Self;\n\n    fn inner_size(self, min_width: f64, min_height: f64) -> Self;\n\n    fn min_inner_size(self, min_width: f64, min_height: f64) -> Self;\n\n    fn max_inner_size(self, max_width: f64, max_height: f64) -> Self;\n\n    fn resizable(self, resizable: bool) -> Self;\n\n    fn title<S>(self, title: S) -> Self\n\xa0\xa0\xa0 where\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0S: Into<String>;\n\n    fn fullscreen(self, fullscreen: bool) -> Self;\n\n    fn focus(self) -> Self;\n\n    fn maximized(self, maximized: bool) -> Self;\n\n    fn visible(self, visible: bool) -> Self;\n\n    fn transparent(self, transparent: bool) -> Self;\n\n    fn decorations(self, decorations: bool) -> Self;\n\n    fn always_on_top(self, always_on_top: bool) -> Self;\n\n    fn icon(self, icon: Icon) -> Result<Self, Error>;\n\n    fn skip_taskbar(self, skip: bool) -> Self;\n\n    fn has_icon(&self) -> bool;\n\n    fn has_menu(&self) -> bool;\n}\n")),Object(a.b)("p",null,"Expand description"),Object(a.b)("p",null,"A builder for all attributes related to a single webview."),Object(a.b)("p",null,"This trait is only meant to be implemented by a custom ",Object(a.b)("a",{parentName:"p",href:"/docs/api/rust/tauri/trait.Runtime"},Object(a.b)("inlineCode",{parentName:"a"},"Runtime"))," and not by applications."),Object(a.b)("h2",{id:"required-methods"},"Required methods"),Object(a.b)("h4",{id:"fn-new---self"},"fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.new"},"new"),"() -> Self"),Object(a.b)("p",null,"Initializes a new window attributes builder."),Object(a.b)("h4",{id:"fn-with_configconfig-windowconfig---self"},"fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.with_config"},"with_config"),"(config: WindowConfig) -> Self"),Object(a.b)("p",null,"Initializes a new webview builder from a ","[",Object(a.b)("inlineCode",{parentName:"p"},"WindowConfig"),"]"),Object(a.b)("h4",{id:"fn-menuself-menu-struct-taurimenu---self"},"fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.menu"},"menu"),"(self, menu: ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/struct.Menu",title:"struct tauri::Menu"},"Menu"),") -> Self"),Object(a.b)("p",null,"Sets the menu for the window."),Object(a.b)("h4",{id:"fn-centerself---self"},"fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.center"},"center"),"(self) -> Self"),Object(a.b)("p",null,"Show window in the center of the screen."),Object(a.b)("h4",{id:"fn-positionself-x-f64-y-f64---self"},"fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.position"},"position"),"(self, x: ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.f64.html"},"f64"),", y: ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.f64.html"},"f64"),") -> Self"),Object(a.b)("p",null,"The initial position of the window\u2019s."),Object(a.b)("h4",{id:"fn-inner_sizeself-min_width-f64-min_height-f64---self"},"fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.inner_size"},"inner_size"),"(self, min_width: ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.f64.html"},"f64"),", min_height: ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.f64.html"},"f64"),") -> Self"),Object(a.b)("p",null,"Window size."),Object(a.b)("h4",{id:"fn-min_inner_sizeself-min_width-f64-min_height-f64---self"},"fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.min_inner_size"},"min_inner_size"),"(self, min_width: ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.f64.html"},"f64"),", min_height: ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.f64.html"},"f64"),") -> Self"),Object(a.b)("p",null,"Window min inner size."),Object(a.b)("h4",{id:"fn-max_inner_sizeself-max_width-f64-max_height-f64---self"},"fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.max_inner_size"},"max_inner_size"),"(self, max_width: ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.f64.html"},"f64"),", max_height: ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.f64.html"},"f64"),") -> Self"),Object(a.b)("p",null,"Window max inner size."),Object(a.b)("h4",{id:"fn-resizableself-resizable-bool---self"},"fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.resizable"},"resizable"),"(self, resizable: ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.bool.html"},"bool"),") -> Self"),Object(a.b)("p",null,"Whether the window is resizable or not."),Object(a.b)("h4",{id:"fn-titlesself-title-s---self-where-s-trait-coreconvertintostruct-allocstringstring"},"fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.title"},"title"),"<","S>(self, title: S) -> Self where S: ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html",title:"trait core::convert::Into"},"Into"),"<",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html",title:"struct alloc::string::String"},"String"),">,"),Object(a.b)("p",null,"The title of the window in the title bar."),Object(a.b)("h4",{id:"fn-fullscreenself-fullscreen-bool---self"},"fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.fullscreen"},"fullscreen"),"(self, fullscreen: ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.bool.html"},"bool"),") -> Self"),Object(a.b)("p",null,"Whether to start the window in fullscreen or not."),Object(a.b)("h4",{id:"fn-focusself---self"},"fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.focus"},"focus"),"(self) -> Self"),Object(a.b)("p",null,"Whether the window will be initially hidden or focused."),Object(a.b)("h4",{id:"fn-maximizedself-maximized-bool---self"},"fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.maximized"},"maximized"),"(self, maximized: ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.bool.html"},"bool"),") -> Self"),Object(a.b)("p",null,"Whether the window should be maximized upon creation."),Object(a.b)("h4",{id:"fn-visibleself-visible-bool---self"},"fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.visible"},"visible"),"(self, visible: ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.bool.html"},"bool"),") -> Self"),Object(a.b)("p",null,"Whether the window should be immediately visible upon creation."),Object(a.b)("h4",{id:"fn-transparentself-transparent-bool---self"},"fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.transparent"},"transparent"),"(self, transparent: ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.bool.html"},"bool"),") -> Self"),Object(a.b)("p",null,"Whether the the window should be transparent. If this is true, writing colors with alpha values different than ",Object(a.b)("inlineCode",{parentName:"p"},"1.0")," will produce a transparent window."),Object(a.b)("h4",{id:"fn-decorationsself-decorations-bool---self"},"fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.decorations"},"decorations"),"(self, decorations: ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.bool.html"},"bool"),") -> Self"),Object(a.b)("p",null,"Whether the window should have borders and bars."),Object(a.b)("h4",{id:"fn-always_on_topself-always_on_top-bool---self"},"fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.always_on_top"},"always_on_top"),"(self, always_on_top: ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.bool.html"},"bool"),") -> Self"),Object(a.b)("p",null,"Whether the window should always be on top of other windows."),Object(a.b)("h4",{id:"fn-iconself-icon-enum-tauriicon---enum-coreresultresultself-error"},"fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.icon"},"icon"),"(self, icon: ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/enum.Icon",title:"enum tauri::Icon"},"Icon"),") -> ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html",title:"enum core::result::Result"},"Result"),"<","Self, Error>"),Object(a.b)("p",null,"Sets the window icon."),Object(a.b)("h4",{id:"fn-skip_taskbarself-skip-bool---self"},"fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.skip_taskbar"},"skip_taskbar"),"(self, skip: ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.bool.html"},"bool"),") -> Self"),Object(a.b)("p",null,"Sets whether or not the window icon should be added to the taskbar."),Object(a.b)("h4",{id:"fn-has_iconself---bool"},"fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.has_icon"},"has_icon"),"(&self) -> ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.bool.html"},"bool")),Object(a.b)("p",null,"Whether the icon was set or not."),Object(a.b)("h4",{id:"fn-has_menuself---bool"},"fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.has_menu"},"has_menu"),"(&self) -> ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.bool.html"},"bool")),Object(a.b)("p",null,"Whether the menu was set or not."),Object(a.b)("h2",{id:"implementations-on-foreign-types"},"Implementations on Foreign Types"),Object(a.b)("h3",{id:"impl-trait-tauriwindowbuilder-for-windowbuilderwrapper"},"impl ",Object(a.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/trait.WindowBuilder",title:"trait tauri::WindowBuilder"},"WindowBuilder")," for WindowBuilderWrapper"),Object(a.b)("h4",{id:"pub-fn-focusself---windowbuilderwrapper"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.focus"},"focus"),"(self) -> WindowBuilderWrapper"),Object(a.b)("p",null,"Deprecated since 0.1.4 (noop) Windows is automatically focused when created."),Object(a.b)("h4",{id:"pub-fn-new---windowbuilderwrapper"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.new"},"new"),"() -> WindowBuilderWrapper"),Object(a.b)("h4",{id:"pub-fn-with_configconfig-windowconfig---windowbuilderwrapper"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.with_config"},"with_config"),"(config: WindowConfig) -> WindowBuilderWrapper"),Object(a.b)("h4",{id:"pub-fn-menuself-menu-struct-taurimenu---windowbuilderwrapper"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.menu"},"menu"),"(self, menu: ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/struct.Menu",title:"struct tauri::Menu"},"Menu"),") -> WindowBuilderWrapper"),Object(a.b)("h4",{id:"pub-fn-centerself---windowbuilderwrapper"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.center"},"center"),"(self) -> WindowBuilderWrapper"),Object(a.b)("h4",{id:"pub-fn-positionself-x-f64-y-f64---windowbuilderwrapper"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.position"},"position"),"(self, x: ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.f64.html"},"f64"),", y: ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.f64.html"},"f64"),") -> WindowBuilderWrapper"),Object(a.b)("h4",{id:"pub-fn-inner_sizeself-width-f64-height-f64---windowbuilderwrapper"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.inner_size"},"inner_size"),"(self, width: ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.f64.html"},"f64"),", height: ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.f64.html"},"f64"),") -> WindowBuilderWrapper"),Object(a.b)("h4",{id:"pub-fn-min_inner_size-self-min_width-f64-min_height-f64----windowbuilderwrapper"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.min_inner_size"},"min_inner_size"),"( self, min_width: ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.f64.html"},"f64"),", min_height: ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.f64.html"},"f64")," ) -> WindowBuilderWrapper"),Object(a.b)("h4",{id:"pub-fn-max_inner_size-self-max_width-f64-max_height-f64----windowbuilderwrapper"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.max_inner_size"},"max_inner_size"),"( self, max_width: ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.f64.html"},"f64"),", max_height: ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.f64.html"},"f64")," ) -> WindowBuilderWrapper"),Object(a.b)("h4",{id:"pub-fn-resizableself-resizable-bool---windowbuilderwrapper"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.resizable"},"resizable"),"(self, resizable: ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.bool.html"},"bool"),") -> WindowBuilderWrapper"),Object(a.b)("h4",{id:"pub-fn-titlesself-title-s---windowbuilderwrapper-where-s-trait-coreconvertintostruct-allocstringstring"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.title"},"title"),"<","S>(self, title: S) -> WindowBuilderWrapper where S: ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html",title:"trait core::convert::Into"},"Into"),"<",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html",title:"struct alloc::string::String"},"String"),">,"),Object(a.b)("h4",{id:"pub-fn-fullscreenself-fullscreen-bool---windowbuilderwrapper"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.fullscreen"},"fullscreen"),"(self, fullscreen: ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.bool.html"},"bool"),") -> WindowBuilderWrapper"),Object(a.b)("h4",{id:"pub-fn-maximizedself-maximized-bool---windowbuilderwrapper"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.maximized"},"maximized"),"(self, maximized: ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.bool.html"},"bool"),") -> WindowBuilderWrapper"),Object(a.b)("h4",{id:"pub-fn-visibleself-visible-bool---windowbuilderwrapper"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.visible"},"visible"),"(self, visible: ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.bool.html"},"bool"),") -> WindowBuilderWrapper"),Object(a.b)("h4",{id:"pub-fn-transparentself-transparent-bool---windowbuilderwrapper"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.transparent"},"transparent"),"(self, transparent: ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.bool.html"},"bool"),") -> WindowBuilderWrapper"),Object(a.b)("h4",{id:"pub-fn-decorationsself-decorations-bool---windowbuilderwrapper"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.decorations"},"decorations"),"(self, decorations: ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.bool.html"},"bool"),") -> WindowBuilderWrapper"),Object(a.b)("h4",{id:"pub-fn-always_on_topself-always_on_top-bool---windowbuilderwrapper"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.always_on_top"},"always_on_top"),"(self, always_on_top: ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.bool.html"},"bool"),") -> WindowBuilderWrapper"),Object(a.b)("h4",{id:"pub-fn-iconself-icon-enum-tauriicon---enum-coreresultresultwindowbuilderwrapper-error"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.icon"},"icon"),"(self, icon: ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/enum.Icon",title:"enum tauri::Icon"},"Icon"),") -> ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html",title:"enum core::result::Result"},"Result"),"<","WindowBuilderWrapper, Error>"),Object(a.b)("h4",{id:"pub-fn-skip_taskbarself-skip-bool---windowbuilderwrapper"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.skip_taskbar"},"skip_taskbar"),"(self, skip: ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.bool.html"},"bool"),") -> WindowBuilderWrapper"),Object(a.b)("h4",{id:"pub-fn-has_iconself---bool"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.has_icon"},"has_icon"),"(&self) -> ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.bool.html"},"bool")),Object(a.b)("h4",{id:"pub-fn-has_menuself---bool"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.has_menu"},"has_menu"),"(&self) -> ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.bool.html"},"bool")),Object(a.b)("h2",{id:"implementors"},"Implementors"))}u.isMDXComponent=!0},454:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var b=i.a.createContext({}),u=function(e){var t=i.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=u(r),h=n,d=p["".concat(o,".").concat(h)]||p[h]||f[h]||a;return r?i.a.createElement(d,l(l({ref:t},b),{},{components:r})):i.a.createElement(d,l({ref:t},b))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var b=2;b<a;b++)o[b]=r[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);