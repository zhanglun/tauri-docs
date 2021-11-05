(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{179:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return n})),r.d(e,"metadata",(function(){return i})),r.d(e,"toc",(function(){return u})),r.d(e,"default",(function(){return l}));var o=r(3),a=r(7),c=(r(0),r(454)),n={title:"Struct tauri::CustomMenuItem",sidebar_label:"struct.CustomMenuItem",custom_edit_url:null},i={unversionedId:"api/rust/tauri/struct.CustomMenuItem",id:"api/rust/tauri/struct.CustomMenuItem",isDocsHomePage:!1,title:"Struct tauri::CustomMenuItem",description:"`rs",source:"@site/docs/zh-hans/api/rust/tauri/struct.CustomMenuItem.md",sourceDirName:"api/rust/tauri",slug:"/api/rust/tauri/struct.CustomMenuItem",permalink:"/zh-hans/docs/api/rust/tauri/struct.CustomMenuItem",editUrl:null,version:"current",sidebar_label:"struct.CustomMenuItem",frontMatter:{title:"Struct tauri::CustomMenuItem",sidebar_label:"struct.CustomMenuItem",custom_edit_url:null},sidebar:"docs",previous:{title:"Struct tauri::Context",permalink:"/zh-hans/docs/api/rust/tauri/struct.Context"},next:{title:"Struct tauri::GlobalWindowEvent",permalink:"/zh-hans/docs/api/rust/tauri/struct.GlobalWindowEvent"}},u=[{value:"Fields (Non-exhaustive)",id:"fields-non-exhaustive",children:[]},{value:"Implementations",id:"implementations",children:[{value:"impl struct tauri::CustomMenuItem",id:"impl-struct-tauricustommenuitem",children:[]}]},{value:"Trait Implementations",id:"trait-implementations",children:[{value:"impl trait core::clone::Clone for struct tauri::CustomMenuItem",id:"impl-trait-corecloneclone-for-struct-tauricustommenuitem",children:[]},{value:"impl trait core::fmt::Debug for struct tauri::CustomMenuItem",id:"impl-trait-corefmtdebug-for-struct-tauricustommenuitem",children:[]}]},{value:"Auto Trait Implementations",id:"auto-trait-implementations",children:[{value:"impl trait std::panic::RefUnwindSafe for struct tauri::CustomMenuItem",id:"impl-trait-stdpanicrefunwindsafe-for-struct-tauricustommenuitem",children:[]},{value:"impl trait core::marker::Send for struct tauri::CustomMenuItem",id:"impl-trait-coremarkersend-for-struct-tauricustommenuitem",children:[]},{value:"impl trait core::marker::Sync for struct tauri::CustomMenuItem",id:"impl-trait-coremarkersync-for-struct-tauricustommenuitem",children:[]},{value:"impl trait core::marker::Unpin for struct tauri::CustomMenuItem",id:"impl-trait-coremarkerunpin-for-struct-tauricustommenuitem",children:[]},{value:"impl trait std::panic::UnwindSafe for struct tauri::CustomMenuItem",id:"impl-trait-stdpanicunwindsafe-for-struct-tauricustommenuitem",children:[]}]},{value:"Blanket Implementations",id:"blanket-implementations",children:[{value:"impl&lt;T&gt; trait core::any::Any for T where T: &#39;static + ?trait core::marker::Sized,goto source code",id:"implt-trait-coreanyany-for-t-where-t-static--trait-coremarkersizedgoto-source-code",children:[]},{value:"impl&lt;T&gt; trait core::borrow::Borrow&lt;T&gt; for T where T: ?trait core::marker::Sized,goto source code",id:"implt-trait-coreborrowborrowt-for-t-where-t-trait-coremarkersizedgoto-source-code",children:[]},{value:"impl&lt;T&gt; trait core::borrow::BorrowMut&lt;T&gt; for T where T: ?trait core::marker::Sized,goto source code",id:"implt-trait-coreborrowborrowmutt-for-t-where-t-trait-coremarkersizedgoto-source-code",children:[]},{value:"impl&lt;T&gt; trait core::convert::From&lt;T&gt; for Tgoto source code",id:"implt-trait-coreconvertfromt-for-tgoto-source-code",children:[]},{value:"impl&lt;T, U&gt; trait core::convert::Into&lt;U&gt; for T where U: trait core::convert::From&lt;T&gt;,goto source code",id:"implt-u-trait-coreconvertintou-for-t-where-u-trait-coreconvertfromtgoto-source-code",children:[]},{value:"impl&lt;T&gt; trait alloc::borrow::ToOwned for T where T: trait core::clone::Clone,goto source code",id:"implt-trait-allocborrowtoowned-for-t-where-t-trait-corecloneclonegoto-source-code",children:[]},{value:"impl&lt;T, U&gt; trait core::convert::TryFrom&lt;U&gt; for T where U: trait core::convert::Into&lt;T&gt;,goto source code",id:"implt-u-trait-coreconverttryfromu-for-t-where-u-trait-coreconvertintotgoto-source-code",children:[]},{value:"impl&lt;T, U&gt; trait core::convert::TryInto&lt;U&gt; for T where U: trait core::convert::TryFrom&lt;T&gt;,goto source code",id:"implt-u-trait-coreconverttryintou-for-t-where-u-trait-coreconverttryfromtgoto-source-code",children:[]},{value:"impl&lt;V, T&gt; VZip&lt;V&gt; for T where V: MultiLane&lt;T&gt;,",id:"implv-t-vzipv-for-t-where-v-multilanet",children:[]}]}],s={toc:u};function l(t){var e=t.components,r=Object(a.a)(t,["components"]);return Object(c.b)("wrapper",Object(o.a)({},s,r,{components:e,mdxType:"MDXLayout"}),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-rs"},"\n#[non_exhaustive]\n\npub struct CustomMenuItem {\n    pub id: u16,\n    pub id_str: String,\n    pub title: String,\n    pub keyboard_accelerator: Option<String>,\n    pub enabled: bool,\n    pub selected: bool,\n}\n")),Object(c.b)("p",null,"Expand description"),Object(c.b)("p",null,"A custom menu item."),Object(c.b)("h2",{id:"fields-non-exhaustive"},"Fields (Non-exhaustive)"),Object(c.b)("p",null,"This struct is marked as non-exhaustive"),Object(c.b)("p",null,"Non-exhaustive structs could have additional fields added in future. Therefore, non-exhaustive structs cannot be constructed in external crates using the traditional ",Object(c.b)("inlineCode",{parentName:"p"},"Struct { .. }")," syntax; cannot be matched against without a wildcard ",Object(c.b)("inlineCode",{parentName:"p"},".."),"; and struct update syntax will not work."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"id: u16``id_str: String``title: String``keyboard_accelerator: Option<String>``enabled: bool``selected: bool")),Object(c.b)("h2",{id:"implementations"},"Implementations"),Object(c.b)("h3",{id:"impl-struct-tauricustommenuitem"},"impl ",Object(c.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/struct.CustomMenuItem",title:"struct tauri::CustomMenuItem"},"CustomMenuItem")),Object(c.b)("h4",{id:"pub-fn-newi-tid-i-title-t---struct-tauricustommenuitem-where-t-trait-coreconvertintostruct-allocstringstring-i-trait-coreconvertintostruct-allocstringstring"},"pub fn ",Object(c.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#method.new"},"new"),"<","I, T>(id: I, title: T) -> ",Object(c.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/struct.CustomMenuItem",title:"struct tauri::CustomMenuItem"},"CustomMenuItem")," where T: ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html",title:"trait core::convert::Into"},"Into"),"<",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html",title:"struct alloc::string::String"},"String"),">, I: ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html",title:"trait core::convert::Into"},"Into"),"<",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html",title:"struct alloc::string::String"},"String"),">,"),Object(c.b)("p",null,"Create new custom menu item."),Object(c.b)("h4",{id:"pub-fn-acceleratortself-accelerator-t---struct-tauricustommenuitem-where-t-trait-coreconvertintostruct-allocstringstring"},"pub fn ",Object(c.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#method.accelerator"},"accelerator"),"<","T>(self, accelerator: T) -> ",Object(c.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/struct.CustomMenuItem",title:"struct tauri::CustomMenuItem"},"CustomMenuItem")," where T: ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html",title:"trait core::convert::Into"},"Into"),"<",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html",title:"struct alloc::string::String"},"String"),">,"),Object(c.b)("p",null,"Assign a keyboard shortcut to the menu action."),Object(c.b)("h4",{id:"pub-fn-disabledself---struct-tauricustommenuitem"},"pub fn ",Object(c.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#method.disabled"},"disabled"),"(self) -> ",Object(c.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/struct.CustomMenuItem",title:"struct tauri::CustomMenuItem"},"CustomMenuItem")),Object(c.b)("p",null,"Mark the item as disabled."),Object(c.b)("h4",{id:"pub-fn-selectedself---struct-tauricustommenuitem"},"pub fn ",Object(c.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#method.selected"},"selected"),"(self) -> ",Object(c.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/struct.CustomMenuItem",title:"struct tauri::CustomMenuItem"},"CustomMenuItem")),Object(c.b)("p",null,"Mark the item as selected."),Object(c.b)("h2",{id:"trait-implementations"},"Trait Implementations"),Object(c.b)("h3",{id:"impl-trait-corecloneclone-for-struct-tauricustommenuitem"},"impl ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html",title:"trait core::clone::Clone"},"Clone")," for ",Object(c.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/struct.CustomMenuItem",title:"struct tauri::CustomMenuItem"},"CustomMenuItem")),Object(c.b)("h4",{id:"pub-fn-cloneself---struct-tauricustommenuitem"},"pub fn ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#tymethod.clone"},"clone"),"(&self) -> ",Object(c.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/struct.CustomMenuItem",title:"struct tauri::CustomMenuItem"},"CustomMenuItem")),Object(c.b)("p",null,"Returns a copy of the value. ",Object(c.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#tymethod.clone"},"Read more")),Object(c.b)("h4",{id:"fn-clone_frommut-self-source-self100goto-source-code"},"fn ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#method.clone_from"},"clone_from"),"(&mut self, source: ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.reference.html"},"&"),"Self)1.0.0",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/clone.rs.html#130",title:"goto source code"},"[","src","]")),Object(c.b)("p",null,"Performs copy-assignment from ",Object(c.b)("inlineCode",{parentName:"p"},"source"),". ",Object(c.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#method.clone_from"},"Read more")),Object(c.b)("h3",{id:"impl-trait-corefmtdebug-for-struct-tauricustommenuitem"},"impl ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html",title:"trait core::fmt::Debug"},"Debug")," for ",Object(c.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/struct.CustomMenuItem",title:"struct tauri::CustomMenuItem"},"CustomMenuItem")),Object(c.b)("h4",{id:"pub-fn-fmtself-f-mut-struct-corefmtformatter_---enum-coreresultresult-struct-corefmterror"},"pub fn ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt"},"fmt"),"(&self, f: &mut ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html",title:"struct core::fmt::Formatter"},"Formatter"),"<","'","_",">) -> ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html",title:"enum core::result::Result"},"Result"),"<",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.unit.html"},"()"),", ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/fmt/struct.Error.html",title:"struct core::fmt::Error"},"Error"),">"),Object(c.b)("p",null,"Formats the value using the given formatter. ",Object(c.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt"},"Read more")),Object(c.b)("h2",{id:"auto-trait-implementations"},"Auto Trait Implementations"),Object(c.b)("h3",{id:"impl-trait-stdpanicrefunwindsafe-for-struct-tauricustommenuitem"},"impl ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html",title:"trait std::panic::RefUnwindSafe"},"RefUnwindSafe")," for ",Object(c.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/struct.CustomMenuItem",title:"struct tauri::CustomMenuItem"},"CustomMenuItem")),Object(c.b)("h3",{id:"impl-trait-coremarkersend-for-struct-tauricustommenuitem"},"impl ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html",title:"trait core::marker::Send"},"Send")," for ",Object(c.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/struct.CustomMenuItem",title:"struct tauri::CustomMenuItem"},"CustomMenuItem")),Object(c.b)("h3",{id:"impl-trait-coremarkersync-for-struct-tauricustommenuitem"},"impl ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html",title:"trait core::marker::Sync"},"Sync")," for ",Object(c.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/struct.CustomMenuItem",title:"struct tauri::CustomMenuItem"},"CustomMenuItem")),Object(c.b)("h3",{id:"impl-trait-coremarkerunpin-for-struct-tauricustommenuitem"},"impl ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html",title:"trait core::marker::Unpin"},"Unpin")," for ",Object(c.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/struct.CustomMenuItem",title:"struct tauri::CustomMenuItem"},"CustomMenuItem")),Object(c.b)("h3",{id:"impl-trait-stdpanicunwindsafe-for-struct-tauricustommenuitem"},"impl ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html",title:"trait std::panic::UnwindSafe"},"UnwindSafe")," for ",Object(c.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/struct.CustomMenuItem",title:"struct tauri::CustomMenuItem"},"CustomMenuItem")),Object(c.b)("h2",{id:"blanket-implementations"},"Blanket Implementations"),Object(c.b)("h3",{id:"implt-trait-coreanyany-for-t-where-t-static--trait-coremarkersizedgoto-source-code"},"impl","<","T> ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html",title:"trait core::any::Any"},"Any")," for T where T: 'static + ?",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html",title:"trait core::marker::Sized"},"Sized"),",",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/any.rs.html#131-135",title:"goto source code"},"[","src","]")),Object(c.b)("h4",{id:"pub-fn-type_idself---struct-coreanytypeidgoto-source-code"},"pub fn ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html#tymethod.type_id"},"type_id"),"(&self) -> ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/any/struct.TypeId.html",title:"struct core::any::TypeId"},"TypeId"),Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/any.rs.html#132",title:"goto source code"},"[","src","]")),Object(c.b)("p",null,"Gets the ",Object(c.b)("inlineCode",{parentName:"p"},"TypeId")," of ",Object(c.b)("inlineCode",{parentName:"p"},"self"),". ",Object(c.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html#tymethod.type_id"},"Read more")),Object(c.b)("h3",{id:"implt-trait-coreborrowborrowt-for-t-where-t-trait-coremarkersizedgoto-source-code"},"impl","<","T> ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html",title:"trait core::borrow::Borrow"},"Borrow"),"<","T> for T where T: ?",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html",title:"trait core::marker::Sized"},"Sized"),",",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#208-213",title:"goto source code"},"[","src","]")),Object(c.b)("h4",{id:"pub-fn-borrowself---tgoto-source-code"},"pub fn ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html#tymethod.borrow"},"borrow"),"(&self) -> ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.reference.html"},"&"),"T",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#210",title:"goto source code"},"[","src","]")),Object(c.b)("p",null,"Immutably borrows from an owned value. ",Object(c.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html#tymethod.borrow"},"Read more")),Object(c.b)("h3",{id:"implt-trait-coreborrowborrowmutt-for-t-where-t-trait-coremarkersizedgoto-source-code"},"impl","<","T> ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html",title:"trait core::borrow::BorrowMut"},"BorrowMut"),"<","T> for T where T: ?",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html",title:"trait core::marker::Sized"},"Sized"),",",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#216-220",title:"goto source code"},"[","src","]")),Object(c.b)("h4",{id:"pub-fn-borrow_mutmut-self---muttgoto-source-code"},"pub fn ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut"},"borrow_mut"),"(&mut self) -> ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.reference.html"},"&mut"),"T",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#217",title:"goto source code"},"[","src","]")),Object(c.b)("p",null,"Mutably borrows from an owned value. ",Object(c.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut"},"Read more")),Object(c.b)("h3",{id:"implt-trait-coreconvertfromt-for-tgoto-source-code"},"impl","<","T> ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html",title:"trait core::convert::From"},"From"),"<","T> for T",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#544-548",title:"goto source code"},"[","src","]")),Object(c.b)("h4",{id:"pub-fn-fromt-t---tgoto-source-code"},"pub fn ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from"},"from"),"(t: T) -> T",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#545",title:"goto source code"},"[","src","]")),Object(c.b)("p",null,"Performs the conversion."),Object(c.b)("h3",{id:"implt-u-trait-coreconvertintou-for-t-where-u-trait-coreconvertfromtgoto-source-code"},"impl","<","T, U> ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html",title:"trait core::convert::Into"},"Into"),"<","U> for T where U: ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html",title:"trait core::convert::From"},"From"),"<","T>,",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#533-540",title:"goto source code"},"[","src","]")),Object(c.b)("h4",{id:"pub-fn-intoself---ugoto-source-code"},"pub fn ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html#tymethod.into"},"into"),"(self) -> U",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#537",title:"goto source code"},"[","src","]")),Object(c.b)("p",null,"Performs the conversion."),Object(c.b)("h3",{id:"implt-trait-allocborrowtoowned-for-t-where-t-trait-corecloneclonegoto-source-code"},"impl","<","T> ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html",title:"trait alloc::borrow::ToOwned"},"ToOwned")," for T where T: ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html",title:"trait core::clone::Clone"},"Clone"),",",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/alloc/borrow.rs.html#84-96",title:"goto source code"},"[","src","]")),Object(c.b)("h4",{id:"type-owned--t"},"type ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#associatedtype.Owned"},"Owned")," = T"),Object(c.b)("p",null,"The resulting type after obtaining ownership."),Object(c.b)("h4",{id:"pub-fn-to_ownedself---tgoto-source-code"},"pub fn ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#tymethod.to_owned"},"to_owned"),"(&self) -> T",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/alloc/borrow.rs.html#89",title:"goto source code"},"[","src","]")),Object(c.b)("p",null,"Creates owned data from borrowed data, usually by cloning. ",Object(c.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#tymethod.to_owned"},"Read more")),Object(c.b)("h4",{id:"pub-fn-clone_intoself-target-muttgoto-source-code"},"pub fn ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#method.clone_into"},"clone_into"),"(&self, target: ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.reference.html"},"&mut"),"T)",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/alloc/borrow.rs.html#93",title:"goto source code"},"[","src","]")),Object(c.b)("p",null,"\ud83d\udd2c This is a nightly-only experimental API. (",Object(c.b)("inlineCode",{parentName:"p"},"toowned_clone_into"),")"),Object(c.b)("p",null,"recently added"),Object(c.b)("p",null,"Uses borrowed data to replace owned data, usually by cloning. ",Object(c.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#method.clone_into"},"Read more")),Object(c.b)("h3",{id:"implt-u-trait-coreconverttryfromu-for-t-where-u-trait-coreconvertintotgoto-source-code"},"impl","<","T, U> ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","U> for T where U: ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html",title:"trait core::convert::Into"},"Into"),"<","T>,",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#581-590",title:"goto source code"},"[","src","]")),Object(c.b)("h4",{id:"type-error--enum-coreconvertinfallible"},"type ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error"},"Error")," = ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/enum.Infallible.html",title:"enum core::convert::Infallible"},"Infallible")),Object(c.b)("p",null,"The type returned in the event of a conversion error."),Object(c.b)("h4",{id:"pub-fn-try_fromvalue-u---enum-coreresultresultt-t-as-trait-coreconverttryfromutype-coreconverttryfromerrorgoto-source-code"},"pub fn ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#tymethod.try_from"},"try_from"),"(value: U) -> ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html",title:"enum core::result::Result"},"Result"),"<","T, ","<","T as ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","U>>::",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error",title:"type core::convert::TryFrom::Error"},"Error"),">",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#587",title:"goto source code"},"[","src","]")),Object(c.b)("p",null,"Performs the conversion."),Object(c.b)("h3",{id:"implt-u-trait-coreconverttryintou-for-t-where-u-trait-coreconverttryfromtgoto-source-code"},"impl","<","T, U> ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html",title:"trait core::convert::TryInto"},"TryInto"),"<","U> for T where U: ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","T>,",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#567-576",title:"goto source code"},"[","src","]")),Object(c.b)("h4",{id:"type-error--u-as-trait-coreconverttryfromttype-coreconverttryfromerror"},"type ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html#associatedtype.Error"},"Error")," = ","<","U as ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","T>>::",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error",title:"type core::convert::TryFrom::Error"},"Error")),Object(c.b)("p",null,"The type returned in the event of a conversion error."),Object(c.b)("h4",{id:"pub-fn-try_intoself---enum-coreresultresultu-u-as-trait-coreconverttryfromttype-coreconverttryfromerrorgoto-source-code"},"pub fn ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html#tymethod.try_into"},"try_into"),"(self) -> ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html",title:"enum core::result::Result"},"Result"),"<","U, ","<","U as ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","T>>::",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error",title:"type core::convert::TryFrom::Error"},"Error"),">",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#573",title:"goto source code"},"[","src","]")),Object(c.b)("p",null,"Performs the conversion."),Object(c.b)("h3",{id:"implv-t-vzipv-for-t-where-v-multilanet"},"impl","<","V, T> VZip","<","V> for T where V: MultiLane","<","T>,"),Object(c.b)("h4",{id:"pub-fn-vzipself---v"},"pub fn ",Object(c.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.vzip"},"vzip"),"(self) -> V"))}l.isMDXComponent=!0},454:function(t,e,r){"use strict";r.d(e,"a",(function(){return m})),r.d(e,"b",(function(){return p}));var o=r(0),a=r.n(o);function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,o,a=function(t,e){if(null==t)return{};var r,o,a={},c=Object.keys(t);for(o=0;o<c.length;o++)r=c[o],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(o=0;o<c.length;o++)r=c[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=a.a.createContext({}),l=function(t){var e=a.a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=l(t.components);return a.a.createElement(s.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},b=a.a.forwardRef((function(t,e){var r=t.components,o=t.mdxType,c=t.originalType,n=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),m=l(r),b=o,p=m["".concat(n,".").concat(b)]||m[b]||h[b]||c;return r?a.a.createElement(p,i(i({ref:e},s),{},{components:r})):a.a.createElement(p,i({ref:e},s))}));function p(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var c=r.length,n=new Array(c);n[0]=b;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:o,n[1]=i;for(var s=2;s<c;s++)n[s]=r[s];return a.a.createElement.apply(null,n)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);