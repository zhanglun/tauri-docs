(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{130:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return i})),r.d(e,"metadata",(function(){return n})),r.d(e,"toc",(function(){return s})),r.d(e,"default",(function(){return l}));var o=r(3),a=r(7),c=(r(0),r(454)),i={title:"Struct tauri::api::http::ResponseData",sidebar_label:"struct.ResponseData",custom_edit_url:null},n={unversionedId:"api/rust/tauri/api/http/struct.ResponseData",id:"api/rust/tauri/api/http/struct.ResponseData",isDocsHomePage:!1,title:"Struct tauri::api::http::ResponseData",description:"x3A;:ResponseData,",source:"@site/docs/zh-hans/api/rust/tauri/api/http/struct.ResponseData.md",sourceDirName:"api/rust/tauri/api/http",slug:"/api/rust/tauri/api/http/struct.ResponseData",permalink:"/zh-hans/docs/api/rust/tauri/api/http/struct.ResponseData",editUrl:null,version:"current",sidebar_label:"struct.ResponseData",frontMatter:{title:"Struct tauri::api::http::ResponseData",sidebar_label:"struct.ResponseData",custom_edit_url:null},sidebar:"docs",previous:{title:"Struct tauri::api::http::Response",permalink:"/zh-hans/docs/api/rust/tauri/api/http/struct.Response"},next:{title:"Enum tauri::api::path::BaseDirectory",permalink:"/zh-hans/docs/api/rust/tauri/api/path/enum.BaseDirectory"}},s=[{value:"Fields (Non-exhaustive)",id:"fields-non-exhaustive",children:[]},{value:"Trait Implementations",id:"trait-implementations",children:[{value:"impl trait core::fmt::Debug for struct tauri::api::http::ResponseDatagoto source code",id:"impl-trait-corefmtdebug-for-struct-tauriapihttpresponsedatagoto-source-code",children:[]},{value:"impl trait serde::ser::Serialize for struct tauri::api::http::ResponseDatagoto source code",id:"impl-trait-serdeserserialize-for-struct-tauriapihttpresponsedatagoto-source-code",children:[]}]},{value:"Auto Trait Implementations",id:"auto-trait-implementations",children:[{value:"impl trait std::panic::RefUnwindSafe for struct tauri::api::http::ResponseData",id:"impl-trait-stdpanicrefunwindsafe-for-struct-tauriapihttpresponsedata",children:[]},{value:"impl trait core::marker::Send for struct tauri::api::http::ResponseData",id:"impl-trait-coremarkersend-for-struct-tauriapihttpresponsedata",children:[]},{value:"impl trait core::marker::Sync for struct tauri::api::http::ResponseData",id:"impl-trait-coremarkersync-for-struct-tauriapihttpresponsedata",children:[]},{value:"impl trait core::marker::Unpin for struct tauri::api::http::ResponseData",id:"impl-trait-coremarkerunpin-for-struct-tauriapihttpresponsedata",children:[]},{value:"impl trait std::panic::UnwindSafe for struct tauri::api::http::ResponseData",id:"impl-trait-stdpanicunwindsafe-for-struct-tauriapihttpresponsedata",children:[]}]},{value:"Blanket Implementations",id:"blanket-implementations",children:[{value:"impl&lt;T&gt; trait core::any::Any for T where T: &#39;static + ?trait core::marker::Sized,goto source code",id:"implt-trait-coreanyany-for-t-where-t-static--trait-coremarkersizedgoto-source-code",children:[]},{value:"impl&lt;T&gt; trait core::borrow::Borrow&lt;T&gt; for T where T: ?trait core::marker::Sized,goto source code",id:"implt-trait-coreborrowborrowt-for-t-where-t-trait-coremarkersizedgoto-source-code",children:[]},{value:"impl&lt;T&gt; trait core::borrow::BorrowMut&lt;T&gt; for T where T: ?trait core::marker::Sized,goto source code",id:"implt-trait-coreborrowborrowmutt-for-t-where-t-trait-coremarkersizedgoto-source-code",children:[]},{value:"impl&lt;T&gt; trait core::convert::From&lt;T&gt; for Tgoto source code",id:"implt-trait-coreconvertfromt-for-tgoto-source-code",children:[]},{value:"impl&lt;T, U&gt; trait core::convert::Into&lt;U&gt; for T where U: trait core::convert::From&lt;T&gt;,goto source code",id:"implt-u-trait-coreconvertintou-for-t-where-u-trait-coreconvertfromtgoto-source-code",children:[]},{value:"impl&lt;T, U&gt; trait core::convert::TryFrom&lt;U&gt; for T where U: trait core::convert::Into&lt;T&gt;,goto source code",id:"implt-u-trait-coreconverttryfromu-for-t-where-u-trait-coreconvertintotgoto-source-code",children:[]},{value:"impl&lt;T, U&gt; trait core::convert::TryInto&lt;U&gt; for T where U: trait core::convert::TryFrom&lt;T&gt;,goto source code",id:"implt-u-trait-coreconverttryintou-for-t-where-u-trait-coreconverttryfromtgoto-source-code",children:[]},{value:"impl&lt;V, T&gt; VZip&lt;V&gt; for T where V: MultiLane&lt;T&gt;,",id:"implv-t-vzipv-for-t-where-v-multilanet",children:[]}]}],p={toc:s};function l(t){var e=t.components,r=Object(a.a)(t,["components"]);return Object(c.b)("wrapper",Object(o.a)({},p,r,{components:e,mdxType:"MDXLayout"}),Object(c.b)("p",null,"x3A;:ResponseData,"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-rs"},"\n#[non_exhaustive]\n\npub struct ResponseData {\n    pub url: String,\n    pub status: u16,\n    pub headers: HashMap<String, String>,\n    pub data: Value,\n}\n")),Object(c.b)("p",null,"Expand description"),Object(c.b)("p",null,"The response data."),Object(c.b)("h2",{id:"fields-non-exhaustive"},"Fields (Non-exhaustive)"),Object(c.b)("p",null,"This struct is marked as non-exhaustive"),Object(c.b)("p",null,"Non-exhaustive structs could have additional fields added in future. Therefore, non-exhaustive structs cannot be constructed in external crates using the traditional ",Object(c.b)("inlineCode",{parentName:"p"},"Struct { .. }")," syntax; cannot be matched against without a wildcard ",Object(c.b)("inlineCode",{parentName:"p"},".."),"; and struct update syntax will not work."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"url: String")),Object(c.b)("p",null,"Response URL. Useful if it followed redirects."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"status: u16")),Object(c.b)("p",null,"Response status code."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"headers: HashMap<String, String>")),Object(c.b)("p",null,"Response headers."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"data: Value")),Object(c.b)("p",null,"Response data."),Object(c.b)("h2",{id:"trait-implementations"},"Trait Implementations"),Object(c.b)("h3",{id:"impl-trait-corefmtdebug-for-struct-tauriapihttpresponsedatagoto-source-code"},"impl ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html",title:"trait core::fmt::Debug"},"Debug")," for ",Object(c.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/struct.ResponseData",title:"struct tauri::api::http::ResponseData"},"ResponseData"),Object(c.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/../../../src/tauri/api/http.rs#396",title:"goto source code"},"[","src","]")),Object(c.b)("h4",{id:"fn-fmtself-f-mut-struct-corefmtformatter_---type-corefmtresultgoto-source-code"},"fn ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt"},"fmt"),"(&self, f: &mut ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html",title:"struct core::fmt::Formatter"},"Formatter"),"<","'","_",">) -> ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/fmt/type.Result.html",title:"type core::fmt::Result"},"Result"),Object(c.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/../../../src/tauri/api/http.rs#396",title:"goto source code"},"[","src","]")),Object(c.b)("p",null,"Formats the value using the given formatter. ",Object(c.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt"},"Read more")),Object(c.b)("h3",{id:"impl-trait-serdeserserialize-for-struct-tauriapihttpresponsedatagoto-source-code"},"impl ",Object(c.b)("a",{parentName:"h3",href:"https://docs.rs/serde/1.0.129/serde/ser/trait.Serialize.html",title:"trait serde::ser::Serialize"},"Serialize")," for ",Object(c.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/struct.ResponseData",title:"struct tauri::api::http::ResponseData"},"ResponseData"),Object(c.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/../../../src/tauri/api/http.rs#396",title:"goto source code"},"[","src","]")),Object(c.b)("h4",{id:"fn-serialize__sself-__serializer-__s---enum-coreresultresult__stype-serdeserserializerok-__stype-serdeserserializererror-where-__s-trait-serdeserserializergoto-source-code"},"fn ",Object(c.b)("a",{parentName:"h4",href:"https://docs.rs/serde/1.0.129/serde/ser/trait.Serialize.html#tymethod.serialize"},"serialize"),"<","_","_","S>(&self, ","_","_","serializer: ","_","_","S) -> ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html",title:"enum core::result::Result"},"Result"),"<","_","_","S::",Object(c.b)("a",{parentName:"h4",href:"https://docs.rs/serde/1.0.129/serde/ser/trait.Serializer.html#associatedtype.Ok",title:"type serde::ser::Serializer::Ok"},"Ok"),", ","_","_","S::",Object(c.b)("a",{parentName:"h4",href:"https://docs.rs/serde/1.0.129/serde/ser/trait.Serializer.html#associatedtype.Error",title:"type serde::ser::Serializer::Error"},"Error"),"> where ","_","_","S: ",Object(c.b)("a",{parentName:"h4",href:"https://docs.rs/serde/1.0.129/serde/ser/trait.Serializer.html",title:"trait serde::ser::Serializer"},"Serializer"),",",Object(c.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/../../../src/tauri/api/http.rs#396",title:"goto source code"},"[","src","]")),Object(c.b)("p",null,"Serialize this value into the given Serde serializer. ",Object(c.b)("a",{parentName:"p",href:"https://docs.rs/serde/1.0.129/serde/ser/trait.Serialize.html#tymethod.serialize"},"Read more")),Object(c.b)("h2",{id:"auto-trait-implementations"},"Auto Trait Implementations"),Object(c.b)("h3",{id:"impl-trait-stdpanicrefunwindsafe-for-struct-tauriapihttpresponsedata"},"impl ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html",title:"trait std::panic::RefUnwindSafe"},"RefUnwindSafe")," for ",Object(c.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/struct.ResponseData",title:"struct tauri::api::http::ResponseData"},"ResponseData")),Object(c.b)("h3",{id:"impl-trait-coremarkersend-for-struct-tauriapihttpresponsedata"},"impl ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html",title:"trait core::marker::Send"},"Send")," for ",Object(c.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/struct.ResponseData",title:"struct tauri::api::http::ResponseData"},"ResponseData")),Object(c.b)("h3",{id:"impl-trait-coremarkersync-for-struct-tauriapihttpresponsedata"},"impl ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html",title:"trait core::marker::Sync"},"Sync")," for ",Object(c.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/struct.ResponseData",title:"struct tauri::api::http::ResponseData"},"ResponseData")),Object(c.b)("h3",{id:"impl-trait-coremarkerunpin-for-struct-tauriapihttpresponsedata"},"impl ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html",title:"trait core::marker::Unpin"},"Unpin")," for ",Object(c.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/struct.ResponseData",title:"struct tauri::api::http::ResponseData"},"ResponseData")),Object(c.b)("h3",{id:"impl-trait-stdpanicunwindsafe-for-struct-tauriapihttpresponsedata"},"impl ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html",title:"trait std::panic::UnwindSafe"},"UnwindSafe")," for ",Object(c.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/struct.ResponseData",title:"struct tauri::api::http::ResponseData"},"ResponseData")),Object(c.b)("h2",{id:"blanket-implementations"},"Blanket Implementations"),Object(c.b)("h3",{id:"implt-trait-coreanyany-for-t-where-t-static--trait-coremarkersizedgoto-source-code"},"impl","<","T> ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html",title:"trait core::any::Any"},"Any")," for T where T: 'static + ?",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html",title:"trait core::marker::Sized"},"Sized"),",",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/any.rs.html#131-135",title:"goto source code"},"[","src","]")),Object(c.b)("h4",{id:"pub-fn-type_idself---struct-coreanytypeidgoto-source-code"},"pub fn ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html#tymethod.type_id"},"type_id"),"(&self) -> ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/any/struct.TypeId.html",title:"struct core::any::TypeId"},"TypeId"),Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/any.rs.html#132",title:"goto source code"},"[","src","]")),Object(c.b)("p",null,"Gets the ",Object(c.b)("inlineCode",{parentName:"p"},"TypeId")," of ",Object(c.b)("inlineCode",{parentName:"p"},"self"),". ",Object(c.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html#tymethod.type_id"},"Read more")),Object(c.b)("h3",{id:"implt-trait-coreborrowborrowt-for-t-where-t-trait-coremarkersizedgoto-source-code"},"impl","<","T> ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html",title:"trait core::borrow::Borrow"},"Borrow"),"<","T> for T where T: ?",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html",title:"trait core::marker::Sized"},"Sized"),",",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#208-213",title:"goto source code"},"[","src","]")),Object(c.b)("h4",{id:"pub-fn-borrowself---tgoto-source-code"},"pub fn ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html#tymethod.borrow"},"borrow"),"(&self) -> ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.reference.html"},"&"),"T",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#210",title:"goto source code"},"[","src","]")),Object(c.b)("p",null,"Immutably borrows from an owned value. ",Object(c.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html#tymethod.borrow"},"Read more")),Object(c.b)("h3",{id:"implt-trait-coreborrowborrowmutt-for-t-where-t-trait-coremarkersizedgoto-source-code"},"impl","<","T> ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html",title:"trait core::borrow::BorrowMut"},"BorrowMut"),"<","T> for T where T: ?",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html",title:"trait core::marker::Sized"},"Sized"),",",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#216-220",title:"goto source code"},"[","src","]")),Object(c.b)("h4",{id:"pub-fn-borrow_mutmut-self---muttgoto-source-code"},"pub fn ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut"},"borrow_mut"),"(&mut self) -> ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.reference.html"},"&mut"),"T",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#217",title:"goto source code"},"[","src","]")),Object(c.b)("p",null,"Mutably borrows from an owned value. ",Object(c.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut"},"Read more")),Object(c.b)("h3",{id:"implt-trait-coreconvertfromt-for-tgoto-source-code"},"impl","<","T> ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html",title:"trait core::convert::From"},"From"),"<","T> for T",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#544-548",title:"goto source code"},"[","src","]")),Object(c.b)("h4",{id:"pub-fn-fromt-t---tgoto-source-code"},"pub fn ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from"},"from"),"(t: T) -> T",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#545",title:"goto source code"},"[","src","]")),Object(c.b)("p",null,"Performs the conversion."),Object(c.b)("h3",{id:"implt-u-trait-coreconvertintou-for-t-where-u-trait-coreconvertfromtgoto-source-code"},"impl","<","T, U> ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html",title:"trait core::convert::Into"},"Into"),"<","U> for T where U: ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html",title:"trait core::convert::From"},"From"),"<","T>,",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#533-540",title:"goto source code"},"[","src","]")),Object(c.b)("h4",{id:"pub-fn-intoself---ugoto-source-code"},"pub fn ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html#tymethod.into"},"into"),"(self) -> U",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#537",title:"goto source code"},"[","src","]")),Object(c.b)("p",null,"Performs the conversion."),Object(c.b)("h3",{id:"implt-u-trait-coreconverttryfromu-for-t-where-u-trait-coreconvertintotgoto-source-code"},"impl","<","T, U> ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","U> for T where U: ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html",title:"trait core::convert::Into"},"Into"),"<","T>,",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#581-590",title:"goto source code"},"[","src","]")),Object(c.b)("h4",{id:"type-error--enum-coreconvertinfallible"},"type ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error"},"Error")," = ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/enum.Infallible.html",title:"enum core::convert::Infallible"},"Infallible")),Object(c.b)("p",null,"The type returned in the event of a conversion error."),Object(c.b)("h4",{id:"pub-fn-try_fromvalue-u---enum-coreresultresultt-t-as-trait-coreconverttryfromutype-coreconverttryfromerrorgoto-source-code"},"pub fn ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#tymethod.try_from"},"try_from"),"(value: U) -> ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html",title:"enum core::result::Result"},"Result"),"<","T, ","<","T as ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","U>>::",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error",title:"type core::convert::TryFrom::Error"},"Error"),">",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#587",title:"goto source code"},"[","src","]")),Object(c.b)("p",null,"Performs the conversion."),Object(c.b)("h3",{id:"implt-u-trait-coreconverttryintou-for-t-where-u-trait-coreconverttryfromtgoto-source-code"},"impl","<","T, U> ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html",title:"trait core::convert::TryInto"},"TryInto"),"<","U> for T where U: ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","T>,",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#567-576",title:"goto source code"},"[","src","]")),Object(c.b)("h4",{id:"type-error--u-as-trait-coreconverttryfromttype-coreconverttryfromerror"},"type ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html#associatedtype.Error"},"Error")," = ","<","U as ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","T>>::",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error",title:"type core::convert::TryFrom::Error"},"Error")),Object(c.b)("p",null,"The type returned in the event of a conversion error."),Object(c.b)("h4",{id:"pub-fn-try_intoself---enum-coreresultresultu-u-as-trait-coreconverttryfromttype-coreconverttryfromerrorgoto-source-code"},"pub fn ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html#tymethod.try_into"},"try_into"),"(self) -> ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html",title:"enum core::result::Result"},"Result"),"<","U, ","<","U as ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","T>>::",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error",title:"type core::convert::TryFrom::Error"},"Error"),">",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#573",title:"goto source code"},"[","src","]")),Object(c.b)("p",null,"Performs the conversion."),Object(c.b)("h3",{id:"implv-t-vzipv-for-t-where-v-multilanet"},"impl","<","V, T> VZip","<","V> for T where V: MultiLane","<","T>,"),Object(c.b)("h4",{id:"pub-fn-vzipself---v"},"pub fn ",Object(c.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.vzip"},"vzip"),"(self) -> V"))}l.isMDXComponent=!0},454:function(t,e,r){"use strict";r.d(e,"a",(function(){return u})),r.d(e,"b",(function(){return d}));var o=r(0),a=r.n(o);function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,o,a=function(t,e){if(null==t)return{};var r,o,a={},c=Object.keys(t);for(o=0;o<c.length;o++)r=c[o],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(o=0;o<c.length;o++)r=c[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=a.a.createContext({}),l=function(t){var e=a.a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):n(n({},e),t)),r},u=function(t){var e=l(t.components);return a.a.createElement(p.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},m=a.a.forwardRef((function(t,e){var r=t.components,o=t.mdxType,c=t.originalType,i=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=l(r),m=o,d=u["".concat(i,".").concat(m)]||u[m]||h[m]||c;return r?a.a.createElement(d,n(n({ref:e},p),{},{components:r})):a.a.createElement(d,n({ref:e},p))}));function d(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var c=r.length,i=new Array(c);i[0]=m;var n={};for(var s in e)hasOwnProperty.call(e,s)&&(n[s]=e[s]);n.originalType=t,n.mdxType="string"==typeof t?t:o,i[1]=n;for(var p=2;p<c;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);