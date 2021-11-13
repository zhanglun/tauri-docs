(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{322:function(t,r,e){"use strict";e.r(r),e.d(r,"frontMatter",(function(){return i})),e.d(r,"metadata",(function(){return c})),e.d(r,"toc",(function(){return n})),e.d(r,"default",(function(){return s}));var o=e(3),a=(e(0),e(454));const i={title:"Struct tauri::WebviewAttributes",sidebar_label:"struct.WebviewAttributes",custom_edit_url:null},c={unversionedId:"api/rust/tauri/struct.WebviewAttributes",id:"api/rust/tauri/struct.WebviewAttributes",isDocsHomePage:!1,title:"Struct tauri::WebviewAttributes",description:"`rs",source:"@site/docs/zh-hans/api/rust/tauri/struct.WebviewAttributes.md",sourceDirName:"api/rust/tauri",slug:"/api/rust/tauri/struct.WebviewAttributes",permalink:"/tauri-docs/docs/api/rust/tauri/struct.WebviewAttributes",editUrl:null,version:"current",sidebar_label:"struct.WebviewAttributes",frontMatter:{title:"Struct tauri::WebviewAttributes",sidebar_label:"struct.WebviewAttributes",custom_edit_url:null},sidebar:"docs",previous:{title:"Struct tauri::Submenu",permalink:"/tauri-docs/docs/api/rust/tauri/struct.Submenu"},next:{title:"Struct tauri::WindowMenuEvent",permalink:"/tauri-docs/docs/api/rust/tauri/struct.WindowMenuEvent"}},n=[{value:"Fields",id:"fields",children:[]},{value:"Implementations",id:"implementations",children:[{value:"impl struct tauri::WebviewAttributes",id:"impl-struct-tauriwebviewattributes",children:[]}]},{value:"Trait Implementations",id:"trait-implementations",children:[{value:"impl trait core::fmt::Debug for struct tauri::WebviewAttributes",id:"impl-trait-corefmtdebug-for-struct-tauriwebviewattributes",children:[]}]},{value:"Auto Trait Implementations",id:"auto-trait-implementations",children:[{value:"impl trait std::panic::RefUnwindSafe for struct tauri::WebviewAttributes",id:"impl-trait-stdpanicrefunwindsafe-for-struct-tauriwebviewattributes",children:[]},{value:"impl trait core::marker::Send for struct tauri::WebviewAttributes",id:"impl-trait-coremarkersend-for-struct-tauriwebviewattributes",children:[]},{value:"impl trait core::marker::Sync for struct tauri::WebviewAttributes",id:"impl-trait-coremarkersync-for-struct-tauriwebviewattributes",children:[]},{value:"impl trait core::marker::Unpin for struct tauri::WebviewAttributes",id:"impl-trait-coremarkerunpin-for-struct-tauriwebviewattributes",children:[]},{value:"impl trait std::panic::UnwindSafe for struct tauri::WebviewAttributes",id:"impl-trait-stdpanicunwindsafe-for-struct-tauriwebviewattributes",children:[]}]},{value:"Blanket Implementations",id:"blanket-implementations",children:[{value:"impl&lt;T&gt; trait core::any::Any for T where T: &#39;static + ?trait core::marker::Sized,goto source code",id:"implt-trait-coreanyany-for-t-where-t-static--trait-coremarkersizedgoto-source-code",children:[]},{value:"impl&lt;T&gt; trait core::borrow::Borrow&lt;T&gt; for T where T: ?trait core::marker::Sized,goto source code",id:"implt-trait-coreborrowborrowt-for-t-where-t-trait-coremarkersizedgoto-source-code",children:[]},{value:"impl&lt;T&gt; trait core::borrow::BorrowMut&lt;T&gt; for T where T: ?trait core::marker::Sized,goto source code",id:"implt-trait-coreborrowborrowmutt-for-t-where-t-trait-coremarkersizedgoto-source-code",children:[]},{value:"impl&lt;T&gt; trait core::convert::From&lt;T&gt; for Tgoto source code",id:"implt-trait-coreconvertfromt-for-tgoto-source-code",children:[]},{value:"impl&lt;T, U&gt; trait core::convert::Into&lt;U&gt; for T where U: trait core::convert::From&lt;T&gt;,goto source code",id:"implt-u-trait-coreconvertintou-for-t-where-u-trait-coreconvertfromtgoto-source-code",children:[]},{value:"impl&lt;T, U&gt; trait core::convert::TryFrom&lt;U&gt; for T where U: trait core::convert::Into&lt;T&gt;,goto source code",id:"implt-u-trait-coreconverttryfromu-for-t-where-u-trait-coreconvertintotgoto-source-code",children:[]},{value:"impl&lt;T, U&gt; trait core::convert::TryInto&lt;U&gt; for T where U: trait core::convert::TryFrom&lt;T&gt;,goto source code",id:"implt-u-trait-coreconverttryintou-for-t-where-u-trait-coreconverttryfromtgoto-source-code",children:[]},{value:"impl&lt;V, T&gt; VZip&lt;V&gt; for T where V: MultiLane&lt;T&gt;,",id:"implv-t-vzipv-for-t-where-v-multilanet",children:[]}]}],u={toc:n};function s({components:t,...r}){return Object(a.b)("wrapper",Object(o.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-rs"},"pub struct WebviewAttributes {\n    pub url: WindowUrl,\n    pub initialization_scripts: Vec<String, Global>,\n    pub data_directory: Option<PathBuf>,\n    pub file_drop_handler_enabled: bool,\n}\n")),Object(a.b)("p",null,"Expand description"),Object(a.b)("p",null,"The attributes used to create an webview."),Object(a.b)("h2",{id:"fields"},"Fields"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"url: WindowUrl``initialization_scripts: Vec<String, Global>``data_directory: Option<PathBuf>``file_drop_handler_enabled: bool")),Object(a.b)("h2",{id:"implementations"},"Implementations"),Object(a.b)("h3",{id:"impl-struct-tauriwebviewattributes"},"impl ",Object(a.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/struct.WebviewAttributes",title:"struct tauri::WebviewAttributes"},"WebviewAttributes")),Object(a.b)("h4",{id:"pub-fn-newurl-enum-tauriwindowurl---struct-tauriwebviewattributes"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#method.new"},"new"),"(url: ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/enum.WindowUrl",title:"enum tauri::WindowUrl"},"WindowUrl"),") -> ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/struct.WebviewAttributes",title:"struct tauri::WebviewAttributes"},"WebviewAttributes")),Object(a.b)("p",null,"Initializes the default attributes for a webview."),Object(a.b)("h4",{id:"pub-fn-initialization_scriptself-script-str---struct-tauriwebviewattributes"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#method.initialization_script"},"initialization_script"),"(self, script: &",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.str.html"},"str"),") -> ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/struct.WebviewAttributes",title:"struct tauri::WebviewAttributes"},"WebviewAttributes")),Object(a.b)("p",null,"Sets the init script."),Object(a.b)("h4",{id:"pub-fn-data_directoryself-data_directory-struct-stdpathpathbuf---struct-tauriwebviewattributes"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#method.data_directory"},"data_directory"),"(self, data_directory: ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/path/struct.PathBuf.html",title:"struct std::path::PathBuf"},"PathBuf"),") -> ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/struct.WebviewAttributes",title:"struct tauri::WebviewAttributes"},"WebviewAttributes")),Object(a.b)("p",null,"Data directory for the webview."),Object(a.b)("h4",{id:"pub-fn-disable_file_drop_handlerself---struct-tauriwebviewattributes"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#method.disable_file_drop_handler"},"disable_file_drop_handler"),"(self) -> ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/struct.WebviewAttributes",title:"struct tauri::WebviewAttributes"},"WebviewAttributes")),Object(a.b)("p",null,"Disables the file drop handler. This is required to use drag and drop APIs on the front end on Windows."),Object(a.b)("h2",{id:"trait-implementations"},"Trait Implementations"),Object(a.b)("h3",{id:"impl-trait-corefmtdebug-for-struct-tauriwebviewattributes"},"impl ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html",title:"trait core::fmt::Debug"},"Debug")," for ",Object(a.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/struct.WebviewAttributes",title:"struct tauri::WebviewAttributes"},"WebviewAttributes")),Object(a.b)("h4",{id:"pub-fn-fmtself-f-mut-struct-corefmtformatter_---enum-coreresultresult-struct-corefmterror"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt"},"fmt"),"(&self, f: &mut ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html",title:"struct core::fmt::Formatter"},"Formatter"),"<","'","_",">) -> ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html",title:"enum core::result::Result"},"Result"),"<",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.unit.html"},"()"),", ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/fmt/struct.Error.html",title:"struct core::fmt::Error"},"Error"),">"),Object(a.b)("p",null,"Formats the value using the given formatter. ",Object(a.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt"},"Read more")),Object(a.b)("h2",{id:"auto-trait-implementations"},"Auto Trait Implementations"),Object(a.b)("h3",{id:"impl-trait-stdpanicrefunwindsafe-for-struct-tauriwebviewattributes"},"impl ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html",title:"trait std::panic::RefUnwindSafe"},"RefUnwindSafe")," for ",Object(a.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/struct.WebviewAttributes",title:"struct tauri::WebviewAttributes"},"WebviewAttributes")),Object(a.b)("h3",{id:"impl-trait-coremarkersend-for-struct-tauriwebviewattributes"},"impl ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html",title:"trait core::marker::Send"},"Send")," for ",Object(a.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/struct.WebviewAttributes",title:"struct tauri::WebviewAttributes"},"WebviewAttributes")),Object(a.b)("h3",{id:"impl-trait-coremarkersync-for-struct-tauriwebviewattributes"},"impl ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html",title:"trait core::marker::Sync"},"Sync")," for ",Object(a.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/struct.WebviewAttributes",title:"struct tauri::WebviewAttributes"},"WebviewAttributes")),Object(a.b)("h3",{id:"impl-trait-coremarkerunpin-for-struct-tauriwebviewattributes"},"impl ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html",title:"trait core::marker::Unpin"},"Unpin")," for ",Object(a.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/struct.WebviewAttributes",title:"struct tauri::WebviewAttributes"},"WebviewAttributes")),Object(a.b)("h3",{id:"impl-trait-stdpanicunwindsafe-for-struct-tauriwebviewattributes"},"impl ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html",title:"trait std::panic::UnwindSafe"},"UnwindSafe")," for ",Object(a.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/struct.WebviewAttributes",title:"struct tauri::WebviewAttributes"},"WebviewAttributes")),Object(a.b)("h2",{id:"blanket-implementations"},"Blanket Implementations"),Object(a.b)("h3",{id:"implt-trait-coreanyany-for-t-where-t-static--trait-coremarkersizedgoto-source-code"},"impl","<","T> ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html",title:"trait core::any::Any"},"Any")," for T where T: 'static + ?",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html",title:"trait core::marker::Sized"},"Sized"),",",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/any.rs.html#131-135",title:"goto source code"},"[","src","]")),Object(a.b)("h4",{id:"pub-fn-type_idself---struct-coreanytypeidgoto-source-code"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html#tymethod.type_id"},"type_id"),"(&self) -> ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/any/struct.TypeId.html",title:"struct core::any::TypeId"},"TypeId"),Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/any.rs.html#132",title:"goto source code"},"[","src","]")),Object(a.b)("p",null,"Gets the ",Object(a.b)("inlineCode",{parentName:"p"},"TypeId")," of ",Object(a.b)("inlineCode",{parentName:"p"},"self"),". ",Object(a.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html#tymethod.type_id"},"Read more")),Object(a.b)("h3",{id:"implt-trait-coreborrowborrowt-for-t-where-t-trait-coremarkersizedgoto-source-code"},"impl","<","T> ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html",title:"trait core::borrow::Borrow"},"Borrow"),"<","T> for T where T: ?",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html",title:"trait core::marker::Sized"},"Sized"),",",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#208-213",title:"goto source code"},"[","src","]")),Object(a.b)("h4",{id:"pub-fn-borrowself---tgoto-source-code"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html#tymethod.borrow"},"borrow"),"(&self) -> ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.reference.html"},"&"),"T",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#210",title:"goto source code"},"[","src","]")),Object(a.b)("p",null,"Immutably borrows from an owned value. ",Object(a.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html#tymethod.borrow"},"Read more")),Object(a.b)("h3",{id:"implt-trait-coreborrowborrowmutt-for-t-where-t-trait-coremarkersizedgoto-source-code"},"impl","<","T> ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html",title:"trait core::borrow::BorrowMut"},"BorrowMut"),"<","T> for T where T: ?",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html",title:"trait core::marker::Sized"},"Sized"),",",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#216-220",title:"goto source code"},"[","src","]")),Object(a.b)("h4",{id:"pub-fn-borrow_mutmut-self---muttgoto-source-code"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut"},"borrow_mut"),"(&mut self) -> ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.reference.html"},"&mut"),"T",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#217",title:"goto source code"},"[","src","]")),Object(a.b)("p",null,"Mutably borrows from an owned value. ",Object(a.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut"},"Read more")),Object(a.b)("h3",{id:"implt-trait-coreconvertfromt-for-tgoto-source-code"},"impl","<","T> ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html",title:"trait core::convert::From"},"From"),"<","T> for T",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#544-548",title:"goto source code"},"[","src","]")),Object(a.b)("h4",{id:"pub-fn-fromt-t---tgoto-source-code"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from"},"from"),"(t: T) -> T",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#545",title:"goto source code"},"[","src","]")),Object(a.b)("p",null,"Performs the conversion."),Object(a.b)("h3",{id:"implt-u-trait-coreconvertintou-for-t-where-u-trait-coreconvertfromtgoto-source-code"},"impl","<","T, U> ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html",title:"trait core::convert::Into"},"Into"),"<","U> for T where U: ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html",title:"trait core::convert::From"},"From"),"<","T>,",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#533-540",title:"goto source code"},"[","src","]")),Object(a.b)("h4",{id:"pub-fn-intoself---ugoto-source-code"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html#tymethod.into"},"into"),"(self) -> U",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#537",title:"goto source code"},"[","src","]")),Object(a.b)("p",null,"Performs the conversion."),Object(a.b)("h3",{id:"implt-u-trait-coreconverttryfromu-for-t-where-u-trait-coreconvertintotgoto-source-code"},"impl","<","T, U> ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","U> for T where U: ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html",title:"trait core::convert::Into"},"Into"),"<","T>,",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#581-590",title:"goto source code"},"[","src","]")),Object(a.b)("h4",{id:"type-error--enum-coreconvertinfallible"},"type ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error"},"Error")," = ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/enum.Infallible.html",title:"enum core::convert::Infallible"},"Infallible")),Object(a.b)("p",null,"The type returned in the event of a conversion error."),Object(a.b)("h4",{id:"pub-fn-try_fromvalue-u---enum-coreresultresultt-t-as-trait-coreconverttryfromutype-coreconverttryfromerrorgoto-source-code"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#tymethod.try_from"},"try_from"),"(value: U) -> ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html",title:"enum core::result::Result"},"Result"),"<","T, ","<","T as ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","U>>::",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error",title:"type core::convert::TryFrom::Error"},"Error"),">",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#587",title:"goto source code"},"[","src","]")),Object(a.b)("p",null,"Performs the conversion."),Object(a.b)("h3",{id:"implt-u-trait-coreconverttryintou-for-t-where-u-trait-coreconverttryfromtgoto-source-code"},"impl","<","T, U> ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html",title:"trait core::convert::TryInto"},"TryInto"),"<","U> for T where U: ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","T>,",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#567-576",title:"goto source code"},"[","src","]")),Object(a.b)("h4",{id:"type-error--u-as-trait-coreconverttryfromttype-coreconverttryfromerror"},"type ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html#associatedtype.Error"},"Error")," = ","<","U as ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","T>>::",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error",title:"type core::convert::TryFrom::Error"},"Error")),Object(a.b)("p",null,"The type returned in the event of a conversion error."),Object(a.b)("h4",{id:"pub-fn-try_intoself---enum-coreresultresultu-u-as-trait-coreconverttryfromttype-coreconverttryfromerrorgoto-source-code"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html#tymethod.try_into"},"try_into"),"(self) -> ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html",title:"enum core::result::Result"},"Result"),"<","U, ","<","U as ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","T>>::",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error",title:"type core::convert::TryFrom::Error"},"Error"),">",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#573",title:"goto source code"},"[","src","]")),Object(a.b)("p",null,"Performs the conversion."),Object(a.b)("h3",{id:"implv-t-vzipv-for-t-where-v-multilanet"},"impl","<","V, T> VZip","<","V> for T where V: MultiLane","<","T>,"),Object(a.b)("h4",{id:"pub-fn-vzipself---v"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.vzip"},"vzip"),"(self) -> V"))}s.isMDXComponent=!0},454:function(t,r,e){"use strict";e.d(r,"a",(function(){return l})),e.d(r,"b",(function(){return h}));var o=e(0),a=e.n(o);function i(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function c(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,o)}return e}function n(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?c(Object(e),!0).forEach((function(r){i(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function u(t,r){if(null==t)return{};var e,o,a=function(t,r){if(null==t)return{};var e,o,a={},i=Object.keys(t);for(o=0;o<i.length;o++)e=i[o],r.indexOf(e)>=0||(a[e]=t[e]);return a}(t,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)e=i[o],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var s=a.a.createContext({}),b=function(t){var r=a.a.useContext(s),e=r;return t&&(e="function"==typeof t?t(r):n(n({},r),t)),e},l=function(t){var r=b(t.components);return a.a.createElement(s.Provider,{value:r},t.children)},m={inlineCode:"code",wrapper:function(t){var r=t.children;return a.a.createElement(a.a.Fragment,{},r)}},p=a.a.forwardRef((function(t,r){var e=t.components,o=t.mdxType,i=t.originalType,c=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),l=b(e),p=o,h=l["".concat(c,".").concat(p)]||l[p]||m[p]||i;return e?a.a.createElement(h,n(n({ref:r},s),{},{components:e})):a.a.createElement(h,n({ref:r},s))}));function h(t,r){var e=arguments,o=r&&r.mdxType;if("string"==typeof t||o){var i=e.length,c=new Array(i);c[0]=p;var n={};for(var u in r)hasOwnProperty.call(r,u)&&(n[u]=r[u]);n.originalType=t,n.mdxType="string"==typeof t?t:o,c[1]=n;for(var s=2;s<i;s++)c[s]=e[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,e)}p.displayName="MDXCreateElement"}}]);