(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{290:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return n})),r.d(e,"metadata",(function(){return c})),r.d(e,"toc",(function(){return i})),r.d(e,"default",(function(){return m}));var o=r(3),a=(r(0),r(454));const n={title:"Enum tauri::Icon",sidebar_label:"enum.Icon",custom_edit_url:null},c={unversionedId:"api/rust/tauri/enum.Icon",id:"api/rust/tauri/enum.Icon",isDocsHomePage:!1,title:"Enum tauri::Icon",description:"`rs",source:"@site/docs/zh-hans/api/rust/tauri/enum.Icon.md",sourceDirName:"api/rust/tauri",slug:"/api/rust/tauri/enum.Icon",permalink:"/tauri-docs/docs/api/rust/tauri/enum.Icon",editUrl:null,version:"current",sidebar_label:"enum.Icon",frontMatter:{title:"Enum tauri::Icon",sidebar_label:"enum.Icon",custom_edit_url:null},sidebar:"docs",previous:{title:"Enum tauri::Event",permalink:"/tauri-docs/docs/api/rust/tauri/enum.Event"},next:{title:"Enum tauri::InvokeResponse",permalink:"/tauri-docs/docs/api/rust/tauri/enum.InvokeResponse"}},i=[{value:"Variants (Non-exhaustive)",id:"variants-non-exhaustive",children:[]},{value:"Implementations",id:"implementations",children:[{value:"impl enum tauri::Icon",id:"impl-enum-tauriicon",children:[]}]},{value:"Trait Implementations",id:"trait-implementations",children:[{value:"impl trait core::clone::Clone for enum tauri::Icon",id:"impl-trait-corecloneclone-for-enum-tauriicon",children:[]},{value:"impl trait core::fmt::Debug for enum tauri::Icon",id:"impl-trait-corefmtdebug-for-enum-tauriicon",children:[]}]},{value:"Auto Trait Implementations",id:"auto-trait-implementations",children:[{value:"impl trait std::panic::RefUnwindSafe for enum tauri::Icon",id:"impl-trait-stdpanicrefunwindsafe-for-enum-tauriicon",children:[]},{value:"impl trait core::marker::Send for enum tauri::Icon",id:"impl-trait-coremarkersend-for-enum-tauriicon",children:[]},{value:"impl trait core::marker::Sync for enum tauri::Icon",id:"impl-trait-coremarkersync-for-enum-tauriicon",children:[]},{value:"impl trait core::marker::Unpin for enum tauri::Icon",id:"impl-trait-coremarkerunpin-for-enum-tauriicon",children:[]},{value:"impl trait std::panic::UnwindSafe for enum tauri::Icon",id:"impl-trait-stdpanicunwindsafe-for-enum-tauriicon",children:[]}]},{value:"Blanket Implementations",id:"blanket-implementations",children:[{value:"impl&lt;T&gt; trait core::any::Any for T where T: &#39;static + ?trait core::marker::Sized,goto source code",id:"implt-trait-coreanyany-for-t-where-t-static--trait-coremarkersizedgoto-source-code",children:[]},{value:"impl&lt;T&gt; trait core::borrow::Borrow&lt;T&gt; for T where T: ?trait core::marker::Sized,goto source code",id:"implt-trait-coreborrowborrowt-for-t-where-t-trait-coremarkersizedgoto-source-code",children:[]},{value:"impl&lt;T&gt; trait core::borrow::BorrowMut&lt;T&gt; for T where T: ?trait core::marker::Sized,goto source code",id:"implt-trait-coreborrowborrowmutt-for-t-where-t-trait-coremarkersizedgoto-source-code",children:[]},{value:"impl&lt;T&gt; trait core::convert::From&lt;T&gt; for Tgoto source code",id:"implt-trait-coreconvertfromt-for-tgoto-source-code",children:[]},{value:"impl&lt;T, U&gt; trait core::convert::Into&lt;U&gt; for T where U: trait core::convert::From&lt;T&gt;,goto source code",id:"implt-u-trait-coreconvertintou-for-t-where-u-trait-coreconvertfromtgoto-source-code",children:[]},{value:"impl&lt;T&gt; trait alloc::borrow::ToOwned for T where T: trait core::clone::Clone,goto source code",id:"implt-trait-allocborrowtoowned-for-t-where-t-trait-corecloneclonegoto-source-code",children:[]},{value:"impl&lt;T, U&gt; trait core::convert::TryFrom&lt;U&gt; for T where U: trait core::convert::Into&lt;T&gt;,goto source code",id:"implt-u-trait-coreconverttryfromu-for-t-where-u-trait-coreconvertintotgoto-source-code",children:[]},{value:"impl&lt;T, U&gt; trait core::convert::TryInto&lt;U&gt; for T where U: trait core::convert::TryFrom&lt;T&gt;,goto source code",id:"implt-u-trait-coreconverttryintou-for-t-where-u-trait-coreconverttryfromtgoto-source-code",children:[]},{value:"impl&lt;V, T&gt; VZip&lt;V&gt; for T where V: MultiLane&lt;T&gt;,",id:"implv-t-vzipv-for-t-where-v-multilanet",children:[]}]}],l={toc:i};function m({components:t,...e}){return Object(a.b)("wrapper",Object(o.a)({},l,e,{components:t,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-rs"},"#[non_exhaustive]\n\npub enum Icon {\n    File(PathBuf),\n    Raw(Vec<u8, Global>),\n}\n")),Object(a.b)("p",null,"Expand description"),Object(a.b)("p",null,"A icon definition."),Object(a.b)("h2",{id:"variants-non-exhaustive"},"Variants (Non-exhaustive)"),Object(a.b)("p",null,"This enum is marked as non-exhaustive"),Object(a.b)("p",null,"Non-exhaustive enums could have additional variants added in future. Therefore, when matching against variants of non-exhaustive enums, an extra wildcard arm must be added to account for any future variants."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"File(PathBuf)")),Object(a.b)("p",null,"Icon from file path."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Raw(Vec<u8, Global>)")),Object(a.b)("p",null,"Icon from raw bytes."),Object(a.b)("h2",{id:"implementations"},"Implementations"),Object(a.b)("h3",{id:"impl-enum-tauriicon"},"impl ",Object(a.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/enum.Icon",title:"enum tauri::Icon"},"Icon")),Object(a.b)("h4",{id:"pub-fn-into_tray_iconself---struct-stdpathpathbuf"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#method.into_tray_icon"},"into_tray_icon"),"(self) -> ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/path/struct.PathBuf.html",title:"struct std::path::PathBuf"},"PathBuf")),Object(a.b)("p",null,"Converts the icon to a the expected system tray format. We expect the code that passes the Icon enum to have already checked the platform."),Object(a.b)("h2",{id:"trait-implementations"},"Trait Implementations"),Object(a.b)("h3",{id:"impl-trait-corecloneclone-for-enum-tauriicon"},"impl ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html",title:"trait core::clone::Clone"},"Clone")," for ",Object(a.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/enum.Icon",title:"enum tauri::Icon"},"Icon")),Object(a.b)("h4",{id:"pub-fn-cloneself---enum-tauriicon"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#tymethod.clone"},"clone"),"(&self) -> ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/enum.Icon",title:"enum tauri::Icon"},"Icon")),Object(a.b)("p",null,"Returns a copy of the value. ",Object(a.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#tymethod.clone"},"Read more")),Object(a.b)("h4",{id:"fn-clone_frommut-self-source-self100goto-source-code"},"fn ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#method.clone_from"},"clone_from"),"(&mut self, source: ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.reference.html"},"&"),"Self)1.0.0",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/clone.rs.html#130",title:"goto source code"},"[","src","]")),Object(a.b)("p",null,"Performs copy-assignment from ",Object(a.b)("inlineCode",{parentName:"p"},"source"),". ",Object(a.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#method.clone_from"},"Read more")),Object(a.b)("h3",{id:"impl-trait-corefmtdebug-for-enum-tauriicon"},"impl ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html",title:"trait core::fmt::Debug"},"Debug")," for ",Object(a.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/enum.Icon",title:"enum tauri::Icon"},"Icon")),Object(a.b)("h4",{id:"pub-fn-fmtself-f-mut-struct-corefmtformatter_---enum-coreresultresult-struct-corefmterror"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt"},"fmt"),"(&self, f: &mut ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html",title:"struct core::fmt::Formatter"},"Formatter"),"<","'","_",">) -> ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html",title:"enum core::result::Result"},"Result"),"<",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.unit.html"},"()"),", ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/fmt/struct.Error.html",title:"struct core::fmt::Error"},"Error"),">"),Object(a.b)("p",null,"Formats the value using the given formatter. ",Object(a.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt"},"Read more")),Object(a.b)("h2",{id:"auto-trait-implementations"},"Auto Trait Implementations"),Object(a.b)("h3",{id:"impl-trait-stdpanicrefunwindsafe-for-enum-tauriicon"},"impl ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html",title:"trait std::panic::RefUnwindSafe"},"RefUnwindSafe")," for ",Object(a.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/enum.Icon",title:"enum tauri::Icon"},"Icon")),Object(a.b)("h3",{id:"impl-trait-coremarkersend-for-enum-tauriicon"},"impl ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html",title:"trait core::marker::Send"},"Send")," for ",Object(a.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/enum.Icon",title:"enum tauri::Icon"},"Icon")),Object(a.b)("h3",{id:"impl-trait-coremarkersync-for-enum-tauriicon"},"impl ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html",title:"trait core::marker::Sync"},"Sync")," for ",Object(a.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/enum.Icon",title:"enum tauri::Icon"},"Icon")),Object(a.b)("h3",{id:"impl-trait-coremarkerunpin-for-enum-tauriicon"},"impl ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html",title:"trait core::marker::Unpin"},"Unpin")," for ",Object(a.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/enum.Icon",title:"enum tauri::Icon"},"Icon")),Object(a.b)("h3",{id:"impl-trait-stdpanicunwindsafe-for-enum-tauriicon"},"impl ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html",title:"trait std::panic::UnwindSafe"},"UnwindSafe")," for ",Object(a.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/enum.Icon",title:"enum tauri::Icon"},"Icon")),Object(a.b)("h2",{id:"blanket-implementations"},"Blanket Implementations"),Object(a.b)("h3",{id:"implt-trait-coreanyany-for-t-where-t-static--trait-coremarkersizedgoto-source-code"},"impl","<","T> ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html",title:"trait core::any::Any"},"Any")," for T where T: 'static + ?",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html",title:"trait core::marker::Sized"},"Sized"),",",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/any.rs.html#131-135",title:"goto source code"},"[","src","]")),Object(a.b)("h4",{id:"pub-fn-type_idself---struct-coreanytypeidgoto-source-code"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html#tymethod.type_id"},"type_id"),"(&self) -> ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/any/struct.TypeId.html",title:"struct core::any::TypeId"},"TypeId"),Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/any.rs.html#132",title:"goto source code"},"[","src","]")),Object(a.b)("p",null,"Gets the ",Object(a.b)("inlineCode",{parentName:"p"},"TypeId")," of ",Object(a.b)("inlineCode",{parentName:"p"},"self"),". ",Object(a.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html#tymethod.type_id"},"Read more")),Object(a.b)("h3",{id:"implt-trait-coreborrowborrowt-for-t-where-t-trait-coremarkersizedgoto-source-code"},"impl","<","T> ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html",title:"trait core::borrow::Borrow"},"Borrow"),"<","T> for T where T: ?",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html",title:"trait core::marker::Sized"},"Sized"),",",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#208-213",title:"goto source code"},"[","src","]")),Object(a.b)("h4",{id:"pub-fn-borrowself---tgoto-source-code"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html#tymethod.borrow"},"borrow"),"(&self) -> ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.reference.html"},"&"),"T",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#210",title:"goto source code"},"[","src","]")),Object(a.b)("p",null,"Immutably borrows from an owned value. ",Object(a.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html#tymethod.borrow"},"Read more")),Object(a.b)("h3",{id:"implt-trait-coreborrowborrowmutt-for-t-where-t-trait-coremarkersizedgoto-source-code"},"impl","<","T> ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html",title:"trait core::borrow::BorrowMut"},"BorrowMut"),"<","T> for T where T: ?",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html",title:"trait core::marker::Sized"},"Sized"),",",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#216-220",title:"goto source code"},"[","src","]")),Object(a.b)("h4",{id:"pub-fn-borrow_mutmut-self---muttgoto-source-code"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut"},"borrow_mut"),"(&mut self) -> ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.reference.html"},"&mut"),"T",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#217",title:"goto source code"},"[","src","]")),Object(a.b)("p",null,"Mutably borrows from an owned value. ",Object(a.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut"},"Read more")),Object(a.b)("h3",{id:"implt-trait-coreconvertfromt-for-tgoto-source-code"},"impl","<","T> ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html",title:"trait core::convert::From"},"From"),"<","T> for T",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#544-548",title:"goto source code"},"[","src","]")),Object(a.b)("h4",{id:"pub-fn-fromt-t---tgoto-source-code"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from"},"from"),"(t: T) -> T",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#545",title:"goto source code"},"[","src","]")),Object(a.b)("p",null,"Performs the conversion."),Object(a.b)("h3",{id:"implt-u-trait-coreconvertintou-for-t-where-u-trait-coreconvertfromtgoto-source-code"},"impl","<","T, U> ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html",title:"trait core::convert::Into"},"Into"),"<","U> for T where U: ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html",title:"trait core::convert::From"},"From"),"<","T>,",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#533-540",title:"goto source code"},"[","src","]")),Object(a.b)("h4",{id:"pub-fn-intoself---ugoto-source-code"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html#tymethod.into"},"into"),"(self) -> U",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#537",title:"goto source code"},"[","src","]")),Object(a.b)("p",null,"Performs the conversion."),Object(a.b)("h3",{id:"implt-trait-allocborrowtoowned-for-t-where-t-trait-corecloneclonegoto-source-code"},"impl","<","T> ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html",title:"trait alloc::borrow::ToOwned"},"ToOwned")," for T where T: ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html",title:"trait core::clone::Clone"},"Clone"),",",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/alloc/borrow.rs.html#84-96",title:"goto source code"},"[","src","]")),Object(a.b)("h4",{id:"type-owned--t"},"type ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#associatedtype.Owned"},"Owned")," = T"),Object(a.b)("p",null,"The resulting type after obtaining ownership."),Object(a.b)("h4",{id:"pub-fn-to_ownedself---tgoto-source-code"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#tymethod.to_owned"},"to_owned"),"(&self) -> T",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/alloc/borrow.rs.html#89",title:"goto source code"},"[","src","]")),Object(a.b)("p",null,"Creates owned data from borrowed data, usually by cloning. ",Object(a.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#tymethod.to_owned"},"Read more")),Object(a.b)("h4",{id:"pub-fn-clone_intoself-target-muttgoto-source-code"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#method.clone_into"},"clone_into"),"(&self, target: ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.reference.html"},"&mut"),"T)",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/alloc/borrow.rs.html#93",title:"goto source code"},"[","src","]")),Object(a.b)("p",null,"\ud83d\udd2c This is a nightly-only experimental API. (",Object(a.b)("inlineCode",{parentName:"p"},"toowned_clone_into"),")"),Object(a.b)("p",null,"recently added"),Object(a.b)("p",null,"Uses borrowed data to replace owned data, usually by cloning. ",Object(a.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#method.clone_into"},"Read more")),Object(a.b)("h3",{id:"implt-u-trait-coreconverttryfromu-for-t-where-u-trait-coreconvertintotgoto-source-code"},"impl","<","T, U> ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","U> for T where U: ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html",title:"trait core::convert::Into"},"Into"),"<","T>,",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#581-590",title:"goto source code"},"[","src","]")),Object(a.b)("h4",{id:"type-error--enum-coreconvertinfallible"},"type ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error"},"Error")," = ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/enum.Infallible.html",title:"enum core::convert::Infallible"},"Infallible")),Object(a.b)("p",null,"The type returned in the event of a conversion error."),Object(a.b)("h4",{id:"pub-fn-try_fromvalue-u---enum-coreresultresultt-t-as-trait-coreconverttryfromutype-coreconverttryfromerrorgoto-source-code"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#tymethod.try_from"},"try_from"),"(value: U) -> ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html",title:"enum core::result::Result"},"Result"),"<","T, ","<","T as ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","U>>::",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error",title:"type core::convert::TryFrom::Error"},"Error"),">",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#587",title:"goto source code"},"[","src","]")),Object(a.b)("p",null,"Performs the conversion."),Object(a.b)("h3",{id:"implt-u-trait-coreconverttryintou-for-t-where-u-trait-coreconverttryfromtgoto-source-code"},"impl","<","T, U> ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html",title:"trait core::convert::TryInto"},"TryInto"),"<","U> for T where U: ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","T>,",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#567-576",title:"goto source code"},"[","src","]")),Object(a.b)("h4",{id:"type-error--u-as-trait-coreconverttryfromttype-coreconverttryfromerror"},"type ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html#associatedtype.Error"},"Error")," = ","<","U as ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","T>>::",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error",title:"type core::convert::TryFrom::Error"},"Error")),Object(a.b)("p",null,"The type returned in the event of a conversion error."),Object(a.b)("h4",{id:"pub-fn-try_intoself---enum-coreresultresultu-u-as-trait-coreconverttryfromttype-coreconverttryfromerrorgoto-source-code"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html#tymethod.try_into"},"try_into"),"(self) -> ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html",title:"enum core::result::Result"},"Result"),"<","U, ","<","U as ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","T>>::",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error",title:"type core::convert::TryFrom::Error"},"Error"),">",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#573",title:"goto source code"},"[","src","]")),Object(a.b)("p",null,"Performs the conversion."),Object(a.b)("h3",{id:"implv-t-vzipv-for-t-where-v-multilanet"},"impl","<","V, T> VZip","<","V> for T where V: MultiLane","<","T>,"),Object(a.b)("h4",{id:"pub-fn-vzipself---v"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.vzip"},"vzip"),"(self) -> V"))}m.isMDXComponent=!0},454:function(t,e,r){"use strict";r.d(e,"a",(function(){return s})),r.d(e,"b",(function(){return b}));var o=r(0),a=r.n(o);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,o,a=function(t,e){if(null==t)return{};var r,o,a={},n=Object.keys(t);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var m=a.a.createContext({}),u=function(t){var e=a.a.useContext(m),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=u(t.components);return a.a.createElement(m.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},p=a.a.forwardRef((function(t,e){var r=t.components,o=t.mdxType,n=t.originalType,c=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),s=u(r),p=o,b=s["".concat(c,".").concat(p)]||s[p]||h[p]||n;return r?a.a.createElement(b,i(i({ref:e},m),{},{components:r})):a.a.createElement(b,i({ref:e},m))}));function b(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var n=r.length,c=new Array(n);c[0]=p;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:o,c[1]=i;for(var m=2;m<n;m++)c[m]=r[m];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);