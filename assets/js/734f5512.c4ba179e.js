(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{244:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return c})),r.d(e,"metadata",(function(){return n})),r.d(e,"toc",(function(){return m})),r.d(e,"default",(function(){return l}));var o=r(3),a=r(7),i=(r(0),r(454)),c={title:"Enum tauri::api::http::FormPart",sidebar_label:"enum.FormPart",custom_edit_url:null},n={unversionedId:"api/rust/tauri/api/http/enum.FormPart",id:"api/rust/tauri/api/http/enum.FormPart",isDocsHomePage:!1,title:"Enum tauri::api::http::FormPart",description:"x3A;:FormPart,",source:"@site/docs/en/api/rust/tauri/api/http/enum.FormPart.md",sourceDirName:"api/rust/tauri/api/http",slug:"/api/rust/tauri/api/http/enum.FormPart",permalink:"/en/docs/api/rust/tauri/api/http/enum.FormPart",editUrl:null,version:"current",sidebar_label:"enum.FormPart",frontMatter:{title:"Enum tauri::api::http::FormPart",sidebar_label:"enum.FormPart",custom_edit_url:null},sidebar:"docs",previous:{title:"Enum tauri::api::http::Body",permalink:"/en/docs/api/rust/tauri/api/http/enum.Body"},next:{title:"Enum tauri::api::http::ResponseType",permalink:"/en/docs/api/rust/tauri/api/http/enum.ResponseType"}},m=[{value:"Variants (Non-exhaustive)",id:"variants-non-exhaustive",children:[]},{value:"Trait Implementations",id:"trait-implementations",children:[{value:"impl trait core::fmt::Debug for enum tauri::api::http::FormPartgoto source code",id:"impl-trait-corefmtdebug-for-enum-tauriapihttpformpartgoto-source-code",children:[]},{value:"impl&lt;&#39;de&gt; trait serde::de::Deserialize&lt;&#39;de&gt; for enum tauri::api::http::FormPartgoto source code",id:"implde-trait-serdededeserializede-for-enum-tauriapihttpformpartgoto-source-code",children:[]}]},{value:"Auto Trait Implementations",id:"auto-trait-implementations",children:[{value:"impl trait std::panic::RefUnwindSafe for enum tauri::api::http::FormPart",id:"impl-trait-stdpanicrefunwindsafe-for-enum-tauriapihttpformpart",children:[]},{value:"impl trait core::marker::Send for enum tauri::api::http::FormPart",id:"impl-trait-coremarkersend-for-enum-tauriapihttpformpart",children:[]},{value:"impl trait core::marker::Sync for enum tauri::api::http::FormPart",id:"impl-trait-coremarkersync-for-enum-tauriapihttpformpart",children:[]},{value:"impl trait core::marker::Unpin for enum tauri::api::http::FormPart",id:"impl-trait-coremarkerunpin-for-enum-tauriapihttpformpart",children:[]},{value:"impl trait std::panic::UnwindSafe for enum tauri::api::http::FormPart",id:"impl-trait-stdpanicunwindsafe-for-enum-tauriapihttpformpart",children:[]}]},{value:"Blanket Implementations",id:"blanket-implementations",children:[{value:"impl&lt;T&gt; trait core::any::Any for T where T: &#39;static + ?trait core::marker::Sized,goto source code",id:"implt-trait-coreanyany-for-t-where-t-static--trait-coremarkersizedgoto-source-code",children:[]},{value:"impl&lt;T&gt; trait core::borrow::Borrow&lt;T&gt; for T where T: ?trait core::marker::Sized,goto source code",id:"implt-trait-coreborrowborrowt-for-t-where-t-trait-coremarkersizedgoto-source-code",children:[]},{value:"impl&lt;T&gt; trait core::borrow::BorrowMut&lt;T&gt; for T where T: ?trait core::marker::Sized,goto source code",id:"implt-trait-coreborrowborrowmutt-for-t-where-t-trait-coremarkersizedgoto-source-code",children:[]},{value:"impl&lt;&#39;de, D, R&gt; trait tauri::command::CommandArg&lt;&#39;de, R&gt; for D where R: trait tauri::Runtime, D: trait serde::de::Deserialize&lt;&#39;de&gt;,goto source code",id:"implde-d-r-trait-tauricommandcommandargde-r-for-d-where-r-trait-tauriruntime-d-trait-serdededeserializedegoto-source-code",children:[]},{value:"impl&lt;T&gt; trait core::convert::From&lt;T&gt; for Tgoto source code",id:"implt-trait-coreconvertfromt-for-tgoto-source-code",children:[]},{value:"impl&lt;T, U&gt; trait core::convert::Into&lt;U&gt; for T where U: trait core::convert::From&lt;T&gt;,goto source code",id:"implt-u-trait-coreconvertintou-for-t-where-u-trait-coreconvertfromtgoto-source-code",children:[]},{value:"impl&lt;T, U&gt; trait core::convert::TryFrom&lt;U&gt; for T where U: trait core::convert::Into&lt;T&gt;,goto source code",id:"implt-u-trait-coreconverttryfromu-for-t-where-u-trait-coreconvertintotgoto-source-code",children:[]},{value:"impl&lt;T, U&gt; trait core::convert::TryInto&lt;U&gt; for T where U: trait core::convert::TryFrom&lt;T&gt;,goto source code",id:"implt-u-trait-coreconverttryintou-for-t-where-u-trait-coreconverttryfromtgoto-source-code",children:[]},{value:"impl&lt;V, T&gt; VZip&lt;V&gt; for T where V: MultiLane&lt;T&gt;,",id:"implv-t-vzipv-for-t-where-v-multilanet",children:[]},{value:"impl&lt;T&gt; trait serde::de::DeserializeOwned for T where T: for&lt;&#39;de&gt; trait serde::de::Deserialize&lt;&#39;de&gt;,",id:"implt-trait-serdededeserializeowned-for-t-where-t-forde-trait-serdededeserializede",children:[]}]}],s={toc:m};function l(t){var e=t.components,r=Object(a.a)(t,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,r,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"x3A;:FormPart,"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-rs"},"#[non_exhaustive]\n\npub enum FormPart {\n    File(PathBuf),\n    Text(String),\n    Bytes(Vec<u8>),\n}\n")),Object(i.b)("p",null,"Expand description"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/api/rust/tauri/struct.FormBody",title:"FormBody"},Object(i.b)("inlineCode",{parentName:"a"},"FormBody"))," data types."),Object(i.b)("h2",{id:"variants-non-exhaustive"},"Variants (Non-exhaustive)"),Object(i.b)("p",null,"This enum is marked as non-exhaustive"),Object(i.b)("p",null,"Non-exhaustive enums could have additional variants added in future. Therefore, when matching against variants of non-exhaustive enums, an extra wildcard arm must be added to account for any future variants."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"File(PathBuf)")),Object(i.b)("p",null,"A file path value."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Text(String)")),Object(i.b)("p",null,"A string value."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Bytes(Vec<u8>)")),Object(i.b)("p",null,"A byte array value."),Object(i.b)("h2",{id:"trait-implementations"},"Trait Implementations"),Object(i.b)("h3",{id:"impl-trait-corefmtdebug-for-enum-tauriapihttpformpartgoto-source-code"},"impl ",Object(i.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html",title:"trait core::fmt::Debug"},"Debug")," for ",Object(i.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/enum.FormPart",title:"enum tauri::api::http::FormPart"},"FormPart"),Object(i.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/../../../src/tauri/api/http.rs#204",title:"goto source code"},"[","src","]")),Object(i.b)("h4",{id:"fn-fmtself-f-mut-struct-corefmtformatter_---type-corefmtresultgoto-source-code"},"fn ",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt"},"fmt"),"(&self, f: &mut ",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html",title:"struct core::fmt::Formatter"},"Formatter"),"<","'","_",">) -> ",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/fmt/type.Result.html",title:"type core::fmt::Result"},"Result"),Object(i.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/../../../src/tauri/api/http.rs#204",title:"goto source code"},"[","src","]")),Object(i.b)("p",null,"Formats the value using the given formatter. ",Object(i.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt"},"Read more")),Object(i.b)("h3",{id:"implde-trait-serdededeserializede-for-enum-tauriapihttpformpartgoto-source-code"},"impl","<","'de> ",Object(i.b)("a",{parentName:"h3",href:"https://docs.rs/serde/1.0.129/serde/de/trait.Deserialize.html",title:"trait serde::de::Deserialize"},"Deserialize"),"<","'de> for ",Object(i.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/enum.FormPart",title:"enum tauri::api::http::FormPart"},"FormPart"),Object(i.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/../../../src/tauri/api/http.rs#204",title:"goto source code"},"[","src","]")),Object(i.b)("h4",{id:"fn-deserialize__d__deserializer-__d---enum-coreresultresultself-__dtype-serdededeserializererror-where-__d-trait-serdededeserializerdegoto-source-code"},"fn ",Object(i.b)("a",{parentName:"h4",href:"https://docs.rs/serde/1.0.129/serde/de/trait.Deserialize.html#tymethod.deserialize"},"deserialize"),"<","_","_","D>(","_","_","deserializer: ","_","_","D) -> ",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html",title:"enum core::result::Result"},"Result"),"<","Self, ","_","_","D::",Object(i.b)("a",{parentName:"h4",href:"https://docs.rs/serde/1.0.129/serde/de/trait.Deserializer.html#associatedtype.Error",title:"type serde::de::Deserializer::Error"},"Error"),"> where ","_","_","D: ",Object(i.b)("a",{parentName:"h4",href:"https://docs.rs/serde/1.0.129/serde/de/trait.Deserializer.html",title:"trait serde::de::Deserializer"},"Deserializer"),"<","'de>,",Object(i.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/../../../src/tauri/api/http.rs#204",title:"goto source code"},"[","src","]")),Object(i.b)("p",null,"Deserialize this value from the given Serde deserializer. ",Object(i.b)("a",{parentName:"p",href:"https://docs.rs/serde/1.0.129/serde/de/trait.Deserialize.html#tymethod.deserialize"},"Read more")),Object(i.b)("h2",{id:"auto-trait-implementations"},"Auto Trait Implementations"),Object(i.b)("h3",{id:"impl-trait-stdpanicrefunwindsafe-for-enum-tauriapihttpformpart"},"impl ",Object(i.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html",title:"trait std::panic::RefUnwindSafe"},"RefUnwindSafe")," for ",Object(i.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/enum.FormPart",title:"enum tauri::api::http::FormPart"},"FormPart")),Object(i.b)("h3",{id:"impl-trait-coremarkersend-for-enum-tauriapihttpformpart"},"impl ",Object(i.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html",title:"trait core::marker::Send"},"Send")," for ",Object(i.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/enum.FormPart",title:"enum tauri::api::http::FormPart"},"FormPart")),Object(i.b)("h3",{id:"impl-trait-coremarkersync-for-enum-tauriapihttpformpart"},"impl ",Object(i.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html",title:"trait core::marker::Sync"},"Sync")," for ",Object(i.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/enum.FormPart",title:"enum tauri::api::http::FormPart"},"FormPart")),Object(i.b)("h3",{id:"impl-trait-coremarkerunpin-for-enum-tauriapihttpformpart"},"impl ",Object(i.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html",title:"trait core::marker::Unpin"},"Unpin")," for ",Object(i.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/enum.FormPart",title:"enum tauri::api::http::FormPart"},"FormPart")),Object(i.b)("h3",{id:"impl-trait-stdpanicunwindsafe-for-enum-tauriapihttpformpart"},"impl ",Object(i.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html",title:"trait std::panic::UnwindSafe"},"UnwindSafe")," for ",Object(i.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/enum.FormPart",title:"enum tauri::api::http::FormPart"},"FormPart")),Object(i.b)("h2",{id:"blanket-implementations"},"Blanket Implementations"),Object(i.b)("h3",{id:"implt-trait-coreanyany-for-t-where-t-static--trait-coremarkersizedgoto-source-code"},"impl","<","T> ",Object(i.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html",title:"trait core::any::Any"},"Any")," for T where T: 'static + ?",Object(i.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html",title:"trait core::marker::Sized"},"Sized"),",",Object(i.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/any.rs.html#131-135",title:"goto source code"},"[","src","]")),Object(i.b)("h4",{id:"pub-fn-type_idself---struct-coreanytypeidgoto-source-code"},"pub fn ",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html#tymethod.type_id"},"type_id"),"(&self) -> ",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/any/struct.TypeId.html",title:"struct core::any::TypeId"},"TypeId"),Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/any.rs.html#132",title:"goto source code"},"[","src","]")),Object(i.b)("p",null,"Gets the ",Object(i.b)("inlineCode",{parentName:"p"},"TypeId")," of ",Object(i.b)("inlineCode",{parentName:"p"},"self"),". ",Object(i.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html#tymethod.type_id"},"Read more")),Object(i.b)("h3",{id:"implt-trait-coreborrowborrowt-for-t-where-t-trait-coremarkersizedgoto-source-code"},"impl","<","T> ",Object(i.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html",title:"trait core::borrow::Borrow"},"Borrow"),"<","T> for T where T: ?",Object(i.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html",title:"trait core::marker::Sized"},"Sized"),",",Object(i.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#208-213",title:"goto source code"},"[","src","]")),Object(i.b)("h4",{id:"pub-fn-borrowself---tgoto-source-code"},"pub fn ",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html#tymethod.borrow"},"borrow"),"(&self) -> ",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.reference.html"},"&"),"T",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#210",title:"goto source code"},"[","src","]")),Object(i.b)("p",null,"Immutably borrows from an owned value. ",Object(i.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html#tymethod.borrow"},"Read more")),Object(i.b)("h3",{id:"implt-trait-coreborrowborrowmutt-for-t-where-t-trait-coremarkersizedgoto-source-code"},"impl","<","T> ",Object(i.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html",title:"trait core::borrow::BorrowMut"},"BorrowMut"),"<","T> for T where T: ?",Object(i.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html",title:"trait core::marker::Sized"},"Sized"),",",Object(i.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#216-220",title:"goto source code"},"[","src","]")),Object(i.b)("h4",{id:"pub-fn-borrow_mutmut-self---muttgoto-source-code"},"pub fn ",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut"},"borrow_mut"),"(&mut self) -> ",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.reference.html"},"&mut"),"T",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#217",title:"goto source code"},"[","src","]")),Object(i.b)("p",null,"Mutably borrows from an owned value. ",Object(i.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut"},"Read more")),Object(i.b)("h3",{id:"implde-d-r-trait-tauricommandcommandargde-r-for-d-where-r-trait-tauriruntime-d-trait-serdededeserializedegoto-source-code"},"impl","<","'de, D, R> ",Object(i.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/../../command/trait.CommandArg",title:"trait tauri::command::CommandArg"},"CommandArg"),"<","'de, R> for D where R: ",Object(i.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/../../trait.Runtime",title:"trait tauri::Runtime"},"Runtime"),", D: ",Object(i.b)("a",{parentName:"h3",href:"https://docs.rs/serde/1.0.129/serde/de/trait.Deserialize.html",title:"trait serde::de::Deserialize"},"Deserialize"),"<","'de>,",Object(i.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/../../../src/tauri/command.rs#51-56",title:"goto source code"},"[","src","]")),Object(i.b)("h4",{id:"pub-fn-from_commandstruct-tauricommandcommanditemde-r---enum-coreresultresultd-struct-tauriinvokeerrorgoto-source-code"},"pub fn ",Object(i.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/../../command/trait.CommandArg#tymethod.from_command"},"from_command"),"(",Object(i.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/../../command/struct.CommandItem",title:"struct tauri::command::CommandItem"},"CommandItem"),"<","'de, R>) -> ",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html",title:"enum core::result::Result"},"Result"),"<","D, ",Object(i.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/../../struct.InvokeError",title:"struct tauri::InvokeError"},"InvokeError"),">",Object(i.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/../../../src/tauri/command.rs#52-55",title:"goto source code"},"[","src","]")),Object(i.b)("p",null,"Derives an instance of ",Object(i.b)("inlineCode",{parentName:"p"},"Self")," from the ",Object(i.b)("a",{parentName:"p",href:"/docs/api/rust/tauri/../../command/struct.CommandItem",title:"CommandItem"},Object(i.b)("inlineCode",{parentName:"a"},"CommandItem")),". ",Object(i.b)("a",{parentName:"p",href:"/docs/api/rust/tauri/../../command/trait.CommandArg#tymethod.from_command"},"Read more")),Object(i.b)("h3",{id:"implt-trait-coreconvertfromt-for-tgoto-source-code"},"impl","<","T> ",Object(i.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html",title:"trait core::convert::From"},"From"),"<","T> for T",Object(i.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#544-548",title:"goto source code"},"[","src","]")),Object(i.b)("h4",{id:"pub-fn-fromt-t---tgoto-source-code"},"pub fn ",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from"},"from"),"(t: T) -> T",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#545",title:"goto source code"},"[","src","]")),Object(i.b)("p",null,"Performs the conversion."),Object(i.b)("h3",{id:"implt-u-trait-coreconvertintou-for-t-where-u-trait-coreconvertfromtgoto-source-code"},"impl","<","T, U> ",Object(i.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html",title:"trait core::convert::Into"},"Into"),"<","U> for T where U: ",Object(i.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html",title:"trait core::convert::From"},"From"),"<","T>,",Object(i.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#533-540",title:"goto source code"},"[","src","]")),Object(i.b)("h4",{id:"pub-fn-intoself---ugoto-source-code"},"pub fn ",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html#tymethod.into"},"into"),"(self) -> U",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#537",title:"goto source code"},"[","src","]")),Object(i.b)("p",null,"Performs the conversion."),Object(i.b)("h3",{id:"implt-u-trait-coreconverttryfromu-for-t-where-u-trait-coreconvertintotgoto-source-code"},"impl","<","T, U> ",Object(i.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","U> for T where U: ",Object(i.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html",title:"trait core::convert::Into"},"Into"),"<","T>,",Object(i.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#581-590",title:"goto source code"},"[","src","]")),Object(i.b)("h4",{id:"type-error--enum-coreconvertinfallible"},"type ",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error"},"Error")," = ",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/enum.Infallible.html",title:"enum core::convert::Infallible"},"Infallible")),Object(i.b)("p",null,"The type returned in the event of a conversion error."),Object(i.b)("h4",{id:"pub-fn-try_fromvalue-u---enum-coreresultresultt-t-as-trait-coreconverttryfromutype-coreconverttryfromerrorgoto-source-code"},"pub fn ",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#tymethod.try_from"},"try_from"),"(value: U) -> ",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html",title:"enum core::result::Result"},"Result"),"<","T, ","<","T as ",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","U>>::",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error",title:"type core::convert::TryFrom::Error"},"Error"),">",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#587",title:"goto source code"},"[","src","]")),Object(i.b)("p",null,"Performs the conversion."),Object(i.b)("h3",{id:"implt-u-trait-coreconverttryintou-for-t-where-u-trait-coreconverttryfromtgoto-source-code"},"impl","<","T, U> ",Object(i.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html",title:"trait core::convert::TryInto"},"TryInto"),"<","U> for T where U: ",Object(i.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","T>,",Object(i.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#567-576",title:"goto source code"},"[","src","]")),Object(i.b)("h4",{id:"type-error--u-as-trait-coreconverttryfromttype-coreconverttryfromerror"},"type ",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html#associatedtype.Error"},"Error")," = ","<","U as ",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","T>>::",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error",title:"type core::convert::TryFrom::Error"},"Error")),Object(i.b)("p",null,"The type returned in the event of a conversion error."),Object(i.b)("h4",{id:"pub-fn-try_intoself---enum-coreresultresultu-u-as-trait-coreconverttryfromttype-coreconverttryfromerrorgoto-source-code"},"pub fn ",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html#tymethod.try_into"},"try_into"),"(self) -> ",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html",title:"enum core::result::Result"},"Result"),"<","U, ","<","U as ",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","T>>::",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error",title:"type core::convert::TryFrom::Error"},"Error"),">",Object(i.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#573",title:"goto source code"},"[","src","]")),Object(i.b)("p",null,"Performs the conversion."),Object(i.b)("h3",{id:"implv-t-vzipv-for-t-where-v-multilanet"},"impl","<","V, T> VZip","<","V> for T where V: MultiLane","<","T>,"),Object(i.b)("h4",{id:"pub-fn-vzipself---v"},"pub fn ",Object(i.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.vzip"},"vzip"),"(self) -> V"),Object(i.b)("h3",{id:"implt-trait-serdededeserializeowned-for-t-where-t-forde-trait-serdededeserializede"},"impl","<","T> ",Object(i.b)("a",{parentName:"h3",href:"https://docs.rs/serde/1.0.129/serde/de/trait.DeserializeOwned.html",title:"trait serde::de::DeserializeOwned"},"DeserializeOwned")," for T where T: for","<","'de> ",Object(i.b)("a",{parentName:"h3",href:"https://docs.rs/serde/1.0.129/serde/de/trait.Deserialize.html",title:"trait serde::de::Deserialize"},"Deserialize"),"<","'de>,"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://docs.rs/serde/1.0.129/src/serde/de/mod.rs.html#603",title:"goto source code"},"[","src","]")))}l.isMDXComponent=!0},454:function(t,e,r){"use strict";r.d(e,"a",(function(){return u})),r.d(e,"b",(function(){return h}));var o=r(0),a=r.n(o);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e){if(null==t)return{};var r,o,a=function(t,e){if(null==t)return{};var r,o,a={},i=Object.keys(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=a.a.createContext({}),l=function(t){var e=a.a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):n(n({},e),t)),r},u=function(t){var e=l(t.components);return a.a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},d=a.a.forwardRef((function(t,e){var r=t.components,o=t.mdxType,i=t.originalType,c=t.parentName,s=m(t,["components","mdxType","originalType","parentName"]),u=l(r),d=o,h=u["".concat(c,".").concat(d)]||u[d]||p[d]||i;return r?a.a.createElement(h,n(n({ref:e},s),{},{components:r})):a.a.createElement(h,n({ref:e},s))}));function h(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=r.length,c=new Array(i);c[0]=d;var n={};for(var m in e)hasOwnProperty.call(e,m)&&(n[m]=e[m]);n.originalType=t,n.mdxType="string"==typeof t?t:o,c[1]=n;for(var s=2;s<i;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);