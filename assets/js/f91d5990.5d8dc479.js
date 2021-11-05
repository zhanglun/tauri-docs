(window.webpackJsonp=window.webpackJsonp||[]).push([[362],{438:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var o=r(3),a=r(7),n=(r(0),r(454)),c={title:"Enum tauri::MenuItem",sidebar_label:"enum.MenuItem",custom_edit_url:null},i={unversionedId:"api/rust/tauri/enum.MenuItem",id:"api/rust/tauri/enum.MenuItem",isDocsHomePage:!1,title:"Enum tauri::MenuItem",description:"`rs",source:"@site/docs/zh-hans/api/rust/tauri/enum.MenuItem.md",sourceDirName:"api/rust/tauri",slug:"/api/rust/tauri/enum.MenuItem",permalink:"/tauri-docs/docs/api/rust/tauri/enum.MenuItem",editUrl:null,version:"current",sidebar_label:"enum.MenuItem",frontMatter:{title:"Enum tauri::MenuItem",sidebar_label:"enum.MenuItem",custom_edit_url:null},sidebar:"docs",previous:{title:"Enum tauri::InvokeResponse",permalink:"/tauri-docs/docs/api/rust/tauri/enum.InvokeResponse"},next:{title:"Enum tauri::Position",permalink:"/tauri-docs/docs/api/rust/tauri/enum.Position"}},l=[{value:"Variants (Non-exhaustive)",id:"variants-non-exhaustive",children:[]},{value:"Platform-specific",id:"platform-specific",children:[]},{value:"Platform-specific",id:"platform-specific-1",children:[]},{value:"Platform-specific",id:"platform-specific-2",children:[]},{value:"Platform-specific",id:"platform-specific-3",children:[]},{value:"Platform-specific",id:"platform-specific-4",children:[]},{value:"Platform-specific",id:"platform-specific-5",children:[]},{value:"Platform-specific",id:"platform-specific-6",children:[]},{value:"Platform-specific",id:"platform-specific-7",children:[]},{value:"Platform-specific",id:"platform-specific-8",children:[]},{value:"Platform-specific",id:"platform-specific-9",children:[]},{value:"Platform-specific",id:"platform-specific-10",children:[]},{value:"Platform-specific",id:"platform-specific-11",children:[]},{value:"Platform-specific",id:"platform-specific-12",children:[]},{value:"Platform-specific",id:"platform-specific-13",children:[]},{value:"Platform-specific",id:"platform-specific-14",children:[]},{value:"Platform-specific",id:"platform-specific-15",children:[]},{value:"Platform-specific",id:"platform-specific-16",children:[]},{value:"Trait Implementations",id:"trait-implementations",children:[{value:"impl trait core::clone::Clone for enum tauri::MenuItem",id:"impl-trait-corecloneclone-for-enum-taurimenuitem",children:[]},{value:"impl trait core::fmt::Debug for enum tauri::MenuItem",id:"impl-trait-corefmtdebug-for-enum-taurimenuitem",children:[]}]},{value:"Auto Trait Implementations",id:"auto-trait-implementations",children:[{value:"impl trait std::panic::RefUnwindSafe for enum tauri::MenuItem",id:"impl-trait-stdpanicrefunwindsafe-for-enum-taurimenuitem",children:[]},{value:"impl trait core::marker::Send for enum tauri::MenuItem",id:"impl-trait-coremarkersend-for-enum-taurimenuitem",children:[]},{value:"impl trait core::marker::Sync for enum tauri::MenuItem",id:"impl-trait-coremarkersync-for-enum-taurimenuitem",children:[]},{value:"impl trait core::marker::Unpin for enum tauri::MenuItem",id:"impl-trait-coremarkerunpin-for-enum-taurimenuitem",children:[]},{value:"impl trait std::panic::UnwindSafe for enum tauri::MenuItem",id:"impl-trait-stdpanicunwindsafe-for-enum-taurimenuitem",children:[]}]},{value:"Blanket Implementations",id:"blanket-implementations",children:[{value:"impl&lt;T&gt; trait core::any::Any for T where T: &#39;static + ?trait core::marker::Sized,goto source code",id:"implt-trait-coreanyany-for-t-where-t-static--trait-coremarkersizedgoto-source-code",children:[]},{value:"impl&lt;T&gt; trait core::borrow::Borrow&lt;T&gt; for T where T: ?trait core::marker::Sized,goto source code",id:"implt-trait-coreborrowborrowt-for-t-where-t-trait-coremarkersizedgoto-source-code",children:[]},{value:"impl&lt;T&gt; trait core::borrow::BorrowMut&lt;T&gt; for T where T: ?trait core::marker::Sized,goto source code",id:"implt-trait-coreborrowborrowmutt-for-t-where-t-trait-coremarkersizedgoto-source-code",children:[]},{value:"impl&lt;T&gt; trait core::convert::From&lt;T&gt; for Tgoto source code",id:"implt-trait-coreconvertfromt-for-tgoto-source-code",children:[]},{value:"impl&lt;T, U&gt; trait core::convert::Into&lt;U&gt; for T where U: trait core::convert::From&lt;T&gt;,goto source code",id:"implt-u-trait-coreconvertintou-for-t-where-u-trait-coreconvertfromtgoto-source-code",children:[]},{value:"impl&lt;T&gt; trait alloc::borrow::ToOwned for T where T: trait core::clone::Clone,goto source code",id:"implt-trait-allocborrowtoowned-for-t-where-t-trait-corecloneclonegoto-source-code",children:[]},{value:"impl&lt;T, U&gt; trait core::convert::TryFrom&lt;U&gt; for T where U: trait core::convert::Into&lt;T&gt;,goto source code",id:"implt-u-trait-coreconverttryfromu-for-t-where-u-trait-coreconvertintotgoto-source-code",children:[]},{value:"impl&lt;T, U&gt; trait core::convert::TryInto&lt;U&gt; for T where U: trait core::convert::TryFrom&lt;T&gt;,goto source code",id:"implt-u-trait-coreconverttryintou-for-t-where-u-trait-coreconverttryfromtgoto-source-code",children:[]},{value:"impl&lt;V, T&gt; VZip&lt;V&gt; for T where V: MultiLane&lt;T&gt;,",id:"implv-t-vzipv-for-t-where-v-multilanet",children:[]}]}],m={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},m,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-rs"},"#[non_exhaustive]\n\npub enum MenuItem {\nShow variants    About(String),\n    Hide,\n    Services,\n    HideOthers,\n    ShowAll,\n    CloseWindow,\n    Quit,\n    Copy,\n    Cut,\n    Undo,\n    Redo,\n    SelectAll,\n    Paste,\n    EnterFullScreen,\n    Minimize,\n    Zoom,\n    Separator,\n}\n")),Object(n.b)("p",null,"Expand description"),Object(n.b)("p",null,"A menu item, bound to a pre-defined action or ",Object(n.b)("inlineCode",{parentName:"p"},"Custom")," emit an event. Note that status bar only supports ",Object(n.b)("inlineCode",{parentName:"p"},"Custom")," menu item variants. And on the menu bar, some platforms might not support some of the variants. Unsupported variant will be no-op on such platform."),Object(n.b)("h2",{id:"variants-non-exhaustive"},"Variants (Non-exhaustive)"),Object(n.b)("p",null,"This enum is marked as non-exhaustive"),Object(n.b)("p",null,"Non-exhaustive enums could have additional variants added in future. Therefore, when matching against variants of non-exhaustive enums, an extra wildcard arm must be added to account for any future variants."),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"About(String)")),Object(n.b)("p",null,"Shows a standard \u201cAbout\u201d item"),Object(n.b)("h2",{id:"platform-specific"},Object(n.b)("a",{parentName:"h2",href:"/docs/api/rust/tauri/about:blank#platform-specific"},"Platform-specific")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Windows / Android / iOS:")," Unsupported")),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"Hide")),Object(n.b)("p",null,"A standard \u201chide the app\u201d menu item."),Object(n.b)("h2",{id:"platform-specific-1"},Object(n.b)("a",{parentName:"h2",href:"/docs/api/rust/tauri/about:blank#platform-specific-1"},"Platform-specific")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Windows / Android / iOS:")," Unsupported")),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"Services")),Object(n.b)("p",null,"A standard \u201cServices\u201d menu item."),Object(n.b)("h2",{id:"platform-specific-2"},Object(n.b)("a",{parentName:"h2",href:"/docs/api/rust/tauri/about:blank#platform-specific-2"},"Platform-specific")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Windows / Linux / Android / iOS:")," Unsupported")),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"HideOthers")),Object(n.b)("p",null,"A \u201chide all other windows\u201d menu item."),Object(n.b)("h2",{id:"platform-specific-3"},Object(n.b)("a",{parentName:"h2",href:"/docs/api/rust/tauri/about:blank#platform-specific-3"},"Platform-specific")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Windows / Linux / Android / iOS:")," Unsupported")),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"ShowAll")),Object(n.b)("p",null,"A menu item to show all the windows for this app."),Object(n.b)("h2",{id:"platform-specific-4"},Object(n.b)("a",{parentName:"h2",href:"/docs/api/rust/tauri/about:blank#platform-specific-4"},"Platform-specific")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Windows / Linux / Android / iOS:")," Unsupported")),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"CloseWindow")),Object(n.b)("p",null,"Close the current window."),Object(n.b)("h2",{id:"platform-specific-5"},Object(n.b)("a",{parentName:"h2",href:"/docs/api/rust/tauri/about:blank#platform-specific-5"},"Platform-specific")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Windows / Android / iOS:")," Unsupported")),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"Quit")),Object(n.b)("p",null,"A \u201cquit this app\u201d menu icon."),Object(n.b)("h2",{id:"platform-specific-6"},Object(n.b)("a",{parentName:"h2",href:"/docs/api/rust/tauri/about:blank#platform-specific-6"},"Platform-specific")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Windows / Android / iOS:")," Unsupported")),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"Copy")),Object(n.b)("p",null,"A menu item for enabling copying (often text) from responders."),Object(n.b)("h2",{id:"platform-specific-7"},Object(n.b)("a",{parentName:"h2",href:"/docs/api/rust/tauri/about:blank#platform-specific-7"},"Platform-specific")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Windows / Android / iOS:")," Unsupported")),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"Cut")),Object(n.b)("p",null,"A menu item for enabling cutting (often text) from responders."),Object(n.b)("h2",{id:"platform-specific-8"},Object(n.b)("a",{parentName:"h2",href:"/docs/api/rust/tauri/about:blank#platform-specific-8"},"Platform-specific")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Windows / Android / iOS:")," Unsupported")),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"Undo")),Object(n.b)("p",null,"An \u201cundo\u201d menu item; particularly useful for supporting the cut/copy/paste/undo lifecycle of events."),Object(n.b)("h2",{id:"platform-specific-9"},Object(n.b)("a",{parentName:"h2",href:"/docs/api/rust/tauri/about:blank#platform-specific-9"},"Platform-specific")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Windows / Linux / Android / iOS:")," Unsupported")),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"Redo")),Object(n.b)("p",null,"An \u201credo\u201d menu item; particularly useful for supporting the cut/copy/paste/undo lifecycle of events."),Object(n.b)("h2",{id:"platform-specific-10"},Object(n.b)("a",{parentName:"h2",href:"/docs/api/rust/tauri/about:blank#platform-specific-10"},"Platform-specific")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Windows / Linux / Android / iOS:")," Unsupported")),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"SelectAll")),Object(n.b)("p",null,"A menu item for selecting all (often text) from responders."),Object(n.b)("h2",{id:"platform-specific-11"},Object(n.b)("a",{parentName:"h2",href:"/docs/api/rust/tauri/about:blank#platform-specific-11"},"Platform-specific")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Windows / Android / iOS:")," Unsupported")),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"Paste")),Object(n.b)("p",null,"A menu item for pasting (often text) into responders."),Object(n.b)("h2",{id:"platform-specific-12"},Object(n.b)("a",{parentName:"h2",href:"/docs/api/rust/tauri/about:blank#platform-specific-12"},"Platform-specific")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Windows / Android / iOS:")," Unsupported")),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"EnterFullScreen")),Object(n.b)("p",null,"A standard \u201center full screen\u201d item."),Object(n.b)("h2",{id:"platform-specific-13"},Object(n.b)("a",{parentName:"h2",href:"/docs/api/rust/tauri/about:blank#platform-specific-13"},"Platform-specific")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Windows / Linux / Android / iOS:")," Unsupported")),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"Minimize")),Object(n.b)("p",null,"An item for minimizing the window with the standard system controls."),Object(n.b)("h2",{id:"platform-specific-14"},Object(n.b)("a",{parentName:"h2",href:"/docs/api/rust/tauri/about:blank#platform-specific-14"},"Platform-specific")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Windows / Android / iOS:")," Unsupported")),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"Zoom")),Object(n.b)("p",null,"An item for instructing the app to zoom"),Object(n.b)("h2",{id:"platform-specific-15"},Object(n.b)("a",{parentName:"h2",href:"/docs/api/rust/tauri/about:blank#platform-specific-15"},"Platform-specific")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Windows / Linux / Android / iOS:")," Unsupported")),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"Separator")),Object(n.b)("p",null,"Represents a Separator"),Object(n.b)("h2",{id:"platform-specific-16"},Object(n.b)("a",{parentName:"h2",href:"/docs/api/rust/tauri/about:blank#platform-specific-16"},"Platform-specific")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Windows / Android / iOS:")," Unsupported")),Object(n.b)("h2",{id:"trait-implementations"},"Trait Implementations"),Object(n.b)("h3",{id:"impl-trait-corecloneclone-for-enum-taurimenuitem"},"impl ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html",title:"trait core::clone::Clone"},"Clone")," for ",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/enum.MenuItem",title:"enum tauri::MenuItem"},"MenuItem")),Object(n.b)("h4",{id:"pub-fn-cloneself---enum-taurimenuitem"},"pub fn ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#tymethod.clone"},"clone"),"(&self) -> ",Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/enum.MenuItem",title:"enum tauri::MenuItem"},"MenuItem")),Object(n.b)("p",null,"Returns a copy of the value. ",Object(n.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#tymethod.clone"},"Read more")),Object(n.b)("h4",{id:"fn-clone_frommut-self-source-self100goto-source-code"},"fn ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#method.clone_from"},"clone_from"),"(&mut self, source: ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.reference.html"},"&"),"Self)1.0.0",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/clone.rs.html#130",title:"goto source code"},"[","src","]")),Object(n.b)("p",null,"Performs copy-assignment from ",Object(n.b)("inlineCode",{parentName:"p"},"source"),". ",Object(n.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#method.clone_from"},"Read more")),Object(n.b)("h3",{id:"impl-trait-corefmtdebug-for-enum-taurimenuitem"},"impl ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html",title:"trait core::fmt::Debug"},"Debug")," for ",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/enum.MenuItem",title:"enum tauri::MenuItem"},"MenuItem")),Object(n.b)("h4",{id:"pub-fn-fmtself-f-mut-struct-corefmtformatter_---enum-coreresultresult-struct-corefmterror"},"pub fn ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt"},"fmt"),"(&self, f: &mut ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html",title:"struct core::fmt::Formatter"},"Formatter"),"<","'","_",">) -> ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html",title:"enum core::result::Result"},"Result"),"<",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.unit.html"},"()"),", ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/fmt/struct.Error.html",title:"struct core::fmt::Error"},"Error"),">"),Object(n.b)("p",null,"Formats the value using the given formatter. ",Object(n.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt"},"Read more")),Object(n.b)("h2",{id:"auto-trait-implementations"},"Auto Trait Implementations"),Object(n.b)("h3",{id:"impl-trait-stdpanicrefunwindsafe-for-enum-taurimenuitem"},"impl ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html",title:"trait std::panic::RefUnwindSafe"},"RefUnwindSafe")," for ",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/enum.MenuItem",title:"enum tauri::MenuItem"},"MenuItem")),Object(n.b)("h3",{id:"impl-trait-coremarkersend-for-enum-taurimenuitem"},"impl ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html",title:"trait core::marker::Send"},"Send")," for ",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/enum.MenuItem",title:"enum tauri::MenuItem"},"MenuItem")),Object(n.b)("h3",{id:"impl-trait-coremarkersync-for-enum-taurimenuitem"},"impl ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html",title:"trait core::marker::Sync"},"Sync")," for ",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/enum.MenuItem",title:"enum tauri::MenuItem"},"MenuItem")),Object(n.b)("h3",{id:"impl-trait-coremarkerunpin-for-enum-taurimenuitem"},"impl ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html",title:"trait core::marker::Unpin"},"Unpin")," for ",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/enum.MenuItem",title:"enum tauri::MenuItem"},"MenuItem")),Object(n.b)("h3",{id:"impl-trait-stdpanicunwindsafe-for-enum-taurimenuitem"},"impl ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html",title:"trait std::panic::UnwindSafe"},"UnwindSafe")," for ",Object(n.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/enum.MenuItem",title:"enum tauri::MenuItem"},"MenuItem")),Object(n.b)("h2",{id:"blanket-implementations"},"Blanket Implementations"),Object(n.b)("h3",{id:"implt-trait-coreanyany-for-t-where-t-static--trait-coremarkersizedgoto-source-code"},"impl","<","T> ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html",title:"trait core::any::Any"},"Any")," for T where T: 'static + ?",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html",title:"trait core::marker::Sized"},"Sized"),",",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/any.rs.html#131-135",title:"goto source code"},"[","src","]")),Object(n.b)("h4",{id:"pub-fn-type_idself---struct-coreanytypeidgoto-source-code"},"pub fn ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html#tymethod.type_id"},"type_id"),"(&self) -> ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/any/struct.TypeId.html",title:"struct core::any::TypeId"},"TypeId"),Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/any.rs.html#132",title:"goto source code"},"[","src","]")),Object(n.b)("p",null,"Gets the ",Object(n.b)("inlineCode",{parentName:"p"},"TypeId")," of ",Object(n.b)("inlineCode",{parentName:"p"},"self"),". ",Object(n.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html#tymethod.type_id"},"Read more")),Object(n.b)("h3",{id:"implt-trait-coreborrowborrowt-for-t-where-t-trait-coremarkersizedgoto-source-code"},"impl","<","T> ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html",title:"trait core::borrow::Borrow"},"Borrow"),"<","T> for T where T: ?",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html",title:"trait core::marker::Sized"},"Sized"),",",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#208-213",title:"goto source code"},"[","src","]")),Object(n.b)("h4",{id:"pub-fn-borrowself---tgoto-source-code"},"pub fn ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html#tymethod.borrow"},"borrow"),"(&self) -> ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.reference.html"},"&"),"T",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#210",title:"goto source code"},"[","src","]")),Object(n.b)("p",null,"Immutably borrows from an owned value. ",Object(n.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html#tymethod.borrow"},"Read more")),Object(n.b)("h3",{id:"implt-trait-coreborrowborrowmutt-for-t-where-t-trait-coremarkersizedgoto-source-code"},"impl","<","T> ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html",title:"trait core::borrow::BorrowMut"},"BorrowMut"),"<","T> for T where T: ?",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html",title:"trait core::marker::Sized"},"Sized"),",",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#216-220",title:"goto source code"},"[","src","]")),Object(n.b)("h4",{id:"pub-fn-borrow_mutmut-self---muttgoto-source-code"},"pub fn ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut"},"borrow_mut"),"(&mut self) -> ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.reference.html"},"&mut"),"T",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#217",title:"goto source code"},"[","src","]")),Object(n.b)("p",null,"Mutably borrows from an owned value. ",Object(n.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut"},"Read more")),Object(n.b)("h3",{id:"implt-trait-coreconvertfromt-for-tgoto-source-code"},"impl","<","T> ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html",title:"trait core::convert::From"},"From"),"<","T> for T",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#544-548",title:"goto source code"},"[","src","]")),Object(n.b)("h4",{id:"pub-fn-fromt-t---tgoto-source-code"},"pub fn ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from"},"from"),"(t: T) -> T",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#545",title:"goto source code"},"[","src","]")),Object(n.b)("p",null,"Performs the conversion."),Object(n.b)("h3",{id:"implt-u-trait-coreconvertintou-for-t-where-u-trait-coreconvertfromtgoto-source-code"},"impl","<","T, U> ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html",title:"trait core::convert::Into"},"Into"),"<","U> for T where U: ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html",title:"trait core::convert::From"},"From"),"<","T>,",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#533-540",title:"goto source code"},"[","src","]")),Object(n.b)("h4",{id:"pub-fn-intoself---ugoto-source-code"},"pub fn ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html#tymethod.into"},"into"),"(self) -> U",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#537",title:"goto source code"},"[","src","]")),Object(n.b)("p",null,"Performs the conversion."),Object(n.b)("h3",{id:"implt-trait-allocborrowtoowned-for-t-where-t-trait-corecloneclonegoto-source-code"},"impl","<","T> ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html",title:"trait alloc::borrow::ToOwned"},"ToOwned")," for T where T: ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html",title:"trait core::clone::Clone"},"Clone"),",",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/alloc/borrow.rs.html#84-96",title:"goto source code"},"[","src","]")),Object(n.b)("h4",{id:"type-owned--t"},"type ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#associatedtype.Owned"},"Owned")," = T"),Object(n.b)("p",null,"The resulting type after obtaining ownership."),Object(n.b)("h4",{id:"pub-fn-to_ownedself---tgoto-source-code"},"pub fn ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#tymethod.to_owned"},"to_owned"),"(&self) -> T",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/alloc/borrow.rs.html#89",title:"goto source code"},"[","src","]")),Object(n.b)("p",null,"Creates owned data from borrowed data, usually by cloning. ",Object(n.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#tymethod.to_owned"},"Read more")),Object(n.b)("h4",{id:"pub-fn-clone_intoself-target-muttgoto-source-code"},"pub fn ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#method.clone_into"},"clone_into"),"(&self, target: ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.reference.html"},"&mut"),"T)",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/alloc/borrow.rs.html#93",title:"goto source code"},"[","src","]")),Object(n.b)("p",null,"\ud83d\udd2c This is a nightly-only experimental API. (",Object(n.b)("inlineCode",{parentName:"p"},"toowned_clone_into"),")"),Object(n.b)("p",null,"recently added"),Object(n.b)("p",null,"Uses borrowed data to replace owned data, usually by cloning. ",Object(n.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#method.clone_into"},"Read more")),Object(n.b)("h3",{id:"implt-u-trait-coreconverttryfromu-for-t-where-u-trait-coreconvertintotgoto-source-code"},"impl","<","T, U> ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","U> for T where U: ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html",title:"trait core::convert::Into"},"Into"),"<","T>,",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#581-590",title:"goto source code"},"[","src","]")),Object(n.b)("h4",{id:"type-error--enum-coreconvertinfallible"},"type ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error"},"Error")," = ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/enum.Infallible.html",title:"enum core::convert::Infallible"},"Infallible")),Object(n.b)("p",null,"The type returned in the event of a conversion error."),Object(n.b)("h4",{id:"pub-fn-try_fromvalue-u---enum-coreresultresultt-t-as-trait-coreconverttryfromutype-coreconverttryfromerrorgoto-source-code"},"pub fn ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#tymethod.try_from"},"try_from"),"(value: U) -> ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html",title:"enum core::result::Result"},"Result"),"<","T, ","<","T as ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","U>>::",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error",title:"type core::convert::TryFrom::Error"},"Error"),">",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#587",title:"goto source code"},"[","src","]")),Object(n.b)("p",null,"Performs the conversion."),Object(n.b)("h3",{id:"implt-u-trait-coreconverttryintou-for-t-where-u-trait-coreconverttryfromtgoto-source-code"},"impl","<","T, U> ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html",title:"trait core::convert::TryInto"},"TryInto"),"<","U> for T where U: ",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","T>,",Object(n.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#567-576",title:"goto source code"},"[","src","]")),Object(n.b)("h4",{id:"type-error--u-as-trait-coreconverttryfromttype-coreconverttryfromerror"},"type ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html#associatedtype.Error"},"Error")," = ","<","U as ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","T>>::",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error",title:"type core::convert::TryFrom::Error"},"Error")),Object(n.b)("p",null,"The type returned in the event of a conversion error."),Object(n.b)("h4",{id:"pub-fn-try_intoself---enum-coreresultresultu-u-as-trait-coreconverttryfromttype-coreconverttryfromerrorgoto-source-code"},"pub fn ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html#tymethod.try_into"},"try_into"),"(self) -> ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html",title:"enum core::result::Result"},"Result"),"<","U, ","<","U as ",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","T>>::",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error",title:"type core::convert::TryFrom::Error"},"Error"),">",Object(n.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#573",title:"goto source code"},"[","src","]")),Object(n.b)("p",null,"Performs the conversion."),Object(n.b)("h3",{id:"implv-t-vzipv-for-t-where-v-multilanet"},"impl","<","V, T> VZip","<","V> for T where V: MultiLane","<","T>,"),Object(n.b)("h4",{id:"pub-fn-vzipself---v"},"pub fn ",Object(n.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.vzip"},"vzip"),"(self) -> V"))}u.isMDXComponent=!0},454:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var o=r(0),a=r.n(o);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=a.a.createContext({}),u=function(e){var t=a.a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(r),b=o,d=p["".concat(c,".").concat(b)]||p[b]||s[b]||n;return r?a.a.createElement(d,i(i({ref:t},m),{},{components:r})):a.a.createElement(d,i({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,c=new Array(n);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var m=2;m<n;m++)c[m]=r[m];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);