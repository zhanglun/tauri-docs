(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{164:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return c})),r.d(e,"metadata",(function(){return i})),r.d(e,"toc",(function(){return l})),r.d(e,"default",(function(){return s}));var o=r(3),n=r(7),a=(r(0),r(454)),c={title:"Enum tauri::Event",sidebar_label:"enum.Event",custom_edit_url:null},i={unversionedId:"api/rust/tauri/enum.Event",id:"api/rust/tauri/enum.Event",isDocsHomePage:!1,title:"Enum tauri::Event",description:"`rs",source:"@site/docs/zh-hans/api/rust/tauri/enum.Event.md",sourceDirName:"api/rust/tauri",slug:"/api/rust/tauri/enum.Event",permalink:"/zh-hans/docs/api/rust/tauri/enum.Event",editUrl:null,version:"current",sidebar_label:"enum.Event",frontMatter:{title:"Enum tauri::Event",sidebar_label:"enum.Event",custom_edit_url:null},sidebar:"docs",previous:{title:"Enum tauri::Error",permalink:"/zh-hans/docs/api/rust/tauri/enum.Error"},next:{title:"Enum tauri::Icon",permalink:"/zh-hans/docs/api/rust/tauri/enum.Icon"}},l=[{value:"Variants (Non-exhaustive)",id:"variants-non-exhaustive",children:[{value:"Fields of <strong>ExitRequested</strong>",id:"fields-of-exitrequested",children:[]},{value:"Fields of <strong>CloseRequested</strong>",id:"fields-of-closerequested",children:[]}]},{value:"Trait Implementations",id:"trait-implementations",children:[{value:"impl trait core::fmt::Debug for enum tauri::Eventgoto source code",id:"impl-trait-corefmtdebug-for-enum-taurieventgoto-source-code",children:[]}]},{value:"Auto Trait Implementations",id:"auto-trait-implementations",children:[{value:"impl !trait std::panic::RefUnwindSafe for enum tauri::Event",id:"impl-trait-stdpanicrefunwindsafe-for-enum-taurievent",children:[]},{value:"impl trait core::marker::Send for enum tauri::Event",id:"impl-trait-coremarkersend-for-enum-taurievent",children:[]},{value:"impl !trait core::marker::Sync for enum tauri::Event",id:"impl-trait-coremarkersync-for-enum-taurievent",children:[]},{value:"impl trait core::marker::Unpin for enum tauri::Event",id:"impl-trait-coremarkerunpin-for-enum-taurievent",children:[]},{value:"impl !trait std::panic::UnwindSafe for enum tauri::Event",id:"impl-trait-stdpanicunwindsafe-for-enum-taurievent",children:[]}]},{value:"Blanket Implementations",id:"blanket-implementations",children:[{value:"impl&lt;T&gt; trait core::any::Any for T where T: &#39;static + ?trait core::marker::Sized,goto source code",id:"implt-trait-coreanyany-for-t-where-t-static--trait-coremarkersizedgoto-source-code",children:[]},{value:"impl&lt;T&gt; trait core::borrow::Borrow&lt;T&gt; for T where T: ?trait core::marker::Sized,goto source code",id:"implt-trait-coreborrowborrowt-for-t-where-t-trait-coremarkersizedgoto-source-code",children:[]},{value:"impl&lt;T&gt; trait core::borrow::BorrowMut&lt;T&gt; for T where T: ?trait core::marker::Sized,goto source code",id:"implt-trait-coreborrowborrowmutt-for-t-where-t-trait-coremarkersizedgoto-source-code",children:[]},{value:"impl&lt;T&gt; trait core::convert::From&lt;T&gt; for Tgoto source code",id:"implt-trait-coreconvertfromt-for-tgoto-source-code",children:[]},{value:"impl&lt;T, U&gt; trait core::convert::Into&lt;U&gt; for T where U: trait core::convert::From&lt;T&gt;,goto source code",id:"implt-u-trait-coreconvertintou-for-t-where-u-trait-coreconvertfromtgoto-source-code",children:[]},{value:"impl&lt;T, U&gt; trait core::convert::TryFrom&lt;U&gt; for T where U: trait core::convert::Into&lt;T&gt;,goto source code",id:"implt-u-trait-coreconverttryfromu-for-t-where-u-trait-coreconvertintotgoto-source-code",children:[]},{value:"impl&lt;T, U&gt; trait core::convert::TryInto&lt;U&gt; for T where U: trait core::convert::TryFrom&lt;T&gt;,goto source code",id:"implt-u-trait-coreconverttryintou-for-t-where-u-trait-coreconverttryfromtgoto-source-code",children:[]},{value:"impl&lt;V, T&gt; VZip&lt;V&gt; for T where V: MultiLane&lt;T&gt;,",id:"implv-t-vzipv-for-t-where-v-multilanet",children:[]}]}],u={toc:l};function s(t){var e=t.components,r=Object(n.a)(t,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,r,{components:e,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-rs"},"#[non_exhaustive]\n\npub enum Event {\n    Exit,\n    ExitRequested {\n        window_label: String,\n        api: ExitRequestApi,\n    },\n    CloseRequested {\n        label: String,\n        api: CloseRequestApi,\n    },\n    WindowClosed(String),\n    Ready,\n    Resumed,\n    MainEventsCleared,\n}\n")),Object(a.b)("p",null,"Expand description"),Object(a.b)("p",null,"An application event, triggered from the event loop."),Object(a.b)("h2",{id:"variants-non-exhaustive"},"Variants (Non-exhaustive)"),Object(a.b)("p",null,"This enum is marked as non-exhaustive"),Object(a.b)("p",null,"Non-exhaustive enums could have additional variants added in future. Therefore, when matching against variants of non-exhaustive enums, an extra wildcard arm must be added to account for any future variants."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Exit")),Object(a.b)("p",null,"Event loop is exiting."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"ExitRequested")),Object(a.b)("p",null,"The app is about to exit"),Object(a.b)("p",null,"This variant is marked as non-exhaustive"),Object(a.b)("p",null,"Non-exhaustive enum variants could have additional fields added in future. Therefore, non-exhaustive enum variants cannot be constructed in external crates and cannot be matched against."),Object(a.b)("p",null,"Show fields"),Object(a.b)("h3",{id:"fields-of-exitrequested"},"Fields of ",Object(a.b)("strong",{parentName:"h3"},"ExitRequested")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"window_label: String")),Object(a.b)("p",null,"The label of the window that requested the exit. It is the last window managed by tauri."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"api: ExitRequestApi")),Object(a.b)("p",null,"Event API"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"CloseRequested")),Object(a.b)("p",null,"Window close was requested by the user."),Object(a.b)("p",null,"This variant is marked as non-exhaustive"),Object(a.b)("p",null,"Non-exhaustive enum variants could have additional fields added in future. Therefore, non-exhaustive enum variants cannot be constructed in external crates and cannot be matched against."),Object(a.b)("p",null,"Show fields"),Object(a.b)("h3",{id:"fields-of-closerequested"},"Fields of ",Object(a.b)("strong",{parentName:"h3"},"CloseRequested")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"label: String")),Object(a.b)("p",null,"The window label."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"api: CloseRequestApi")),Object(a.b)("p",null,"Event API."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"WindowClosed(String)")),Object(a.b)("p",null,"Window closed."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Ready")),Object(a.b)("p",null,"Application ready."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Resumed")),Object(a.b)("p",null,"Sent if the event loop is being resumed."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"MainEventsCleared")),Object(a.b)("p",null,"Emitted when all of the event loop\u2019s input events have been processed and redraw processing is about to begin."),Object(a.b)("p",null,"This event is useful as a place to put your code that should be run after all state-changing events have been handled and you want to do stuff (updating state, performing calculations, etc) that happens as the \u201cmain body\u201d of your event loop."),Object(a.b)("h2",{id:"trait-implementations"},"Trait Implementations"),Object(a.b)("h3",{id:"impl-trait-corefmtdebug-for-enum-taurieventgoto-source-code"},"impl ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html",title:"trait core::fmt::Debug"},"Debug")," for ",Object(a.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/enum.Event",title:"enum tauri::Event"},"Event"),Object(a.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/../src/tauri/app.rs#75",title:"goto source code"},"[","src","]")),Object(a.b)("h4",{id:"fn-fmtself-f-mut-struct-corefmtformatter_---type-corefmtresultgoto-source-code"},"fn ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt"},"fmt"),"(&self, f: &mut ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html",title:"struct core::fmt::Formatter"},"Formatter"),"<","'","_",">) -> ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/fmt/type.Result.html",title:"type core::fmt::Result"},"Result"),Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/../src/tauri/app.rs#75",title:"goto source code"},"[","src","]")),Object(a.b)("p",null,"Formats the value using the given formatter. ",Object(a.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt"},"Read more")),Object(a.b)("h2",{id:"auto-trait-implementations"},"Auto Trait Implementations"),Object(a.b)("h3",{id:"impl-trait-stdpanicrefunwindsafe-for-enum-taurievent"},"impl \\","!",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html",title:"trait std::panic::RefUnwindSafe"},"RefUnwindSafe")," for ",Object(a.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/enum.Event",title:"enum tauri::Event"},"Event")),Object(a.b)("h3",{id:"impl-trait-coremarkersend-for-enum-taurievent"},"impl ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html",title:"trait core::marker::Send"},"Send")," for ",Object(a.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/enum.Event",title:"enum tauri::Event"},"Event")),Object(a.b)("h3",{id:"impl-trait-coremarkersync-for-enum-taurievent"},"impl \\","!",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html",title:"trait core::marker::Sync"},"Sync")," for ",Object(a.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/enum.Event",title:"enum tauri::Event"},"Event")),Object(a.b)("h3",{id:"impl-trait-coremarkerunpin-for-enum-taurievent"},"impl ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html",title:"trait core::marker::Unpin"},"Unpin")," for ",Object(a.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/enum.Event",title:"enum tauri::Event"},"Event")),Object(a.b)("h3",{id:"impl-trait-stdpanicunwindsafe-for-enum-taurievent"},"impl \\","!",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html",title:"trait std::panic::UnwindSafe"},"UnwindSafe")," for ",Object(a.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/enum.Event",title:"enum tauri::Event"},"Event")),Object(a.b)("h2",{id:"blanket-implementations"},"Blanket Implementations"),Object(a.b)("h3",{id:"implt-trait-coreanyany-for-t-where-t-static--trait-coremarkersizedgoto-source-code"},"impl","<","T> ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html",title:"trait core::any::Any"},"Any")," for T where T: 'static + ?",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html",title:"trait core::marker::Sized"},"Sized"),",",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/any.rs.html#131-135",title:"goto source code"},"[","src","]")),Object(a.b)("h4",{id:"pub-fn-type_idself---struct-coreanytypeidgoto-source-code"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html#tymethod.type_id"},"type_id"),"(&self) -> ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/any/struct.TypeId.html",title:"struct core::any::TypeId"},"TypeId"),Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/any.rs.html#132",title:"goto source code"},"[","src","]")),Object(a.b)("p",null,"Gets the ",Object(a.b)("inlineCode",{parentName:"p"},"TypeId")," of ",Object(a.b)("inlineCode",{parentName:"p"},"self"),". ",Object(a.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html#tymethod.type_id"},"Read more")),Object(a.b)("h3",{id:"implt-trait-coreborrowborrowt-for-t-where-t-trait-coremarkersizedgoto-source-code"},"impl","<","T> ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html",title:"trait core::borrow::Borrow"},"Borrow"),"<","T> for T where T: ?",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html",title:"trait core::marker::Sized"},"Sized"),",",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#208-213",title:"goto source code"},"[","src","]")),Object(a.b)("h4",{id:"pub-fn-borrowself---tgoto-source-code"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html#tymethod.borrow"},"borrow"),"(&self) -> ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.reference.html"},"&"),"T",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#210",title:"goto source code"},"[","src","]")),Object(a.b)("p",null,"Immutably borrows from an owned value. ",Object(a.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html#tymethod.borrow"},"Read more")),Object(a.b)("h3",{id:"implt-trait-coreborrowborrowmutt-for-t-where-t-trait-coremarkersizedgoto-source-code"},"impl","<","T> ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html",title:"trait core::borrow::BorrowMut"},"BorrowMut"),"<","T> for T where T: ?",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html",title:"trait core::marker::Sized"},"Sized"),",",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#216-220",title:"goto source code"},"[","src","]")),Object(a.b)("h4",{id:"pub-fn-borrow_mutmut-self---muttgoto-source-code"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut"},"borrow_mut"),"(&mut self) -> ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.reference.html"},"&mut"),"T",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#217",title:"goto source code"},"[","src","]")),Object(a.b)("p",null,"Mutably borrows from an owned value. ",Object(a.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut"},"Read more")),Object(a.b)("h3",{id:"implt-trait-coreconvertfromt-for-tgoto-source-code"},"impl","<","T> ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html",title:"trait core::convert::From"},"From"),"<","T> for T",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#544-548",title:"goto source code"},"[","src","]")),Object(a.b)("h4",{id:"pub-fn-fromt-t---tgoto-source-code"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from"},"from"),"(t: T) -> T",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#545",title:"goto source code"},"[","src","]")),Object(a.b)("p",null,"Performs the conversion."),Object(a.b)("h3",{id:"implt-u-trait-coreconvertintou-for-t-where-u-trait-coreconvertfromtgoto-source-code"},"impl","<","T, U> ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html",title:"trait core::convert::Into"},"Into"),"<","U> for T where U: ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html",title:"trait core::convert::From"},"From"),"<","T>,",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#533-540",title:"goto source code"},"[","src","]")),Object(a.b)("h4",{id:"pub-fn-intoself---ugoto-source-code"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html#tymethod.into"},"into"),"(self) -> U",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#537",title:"goto source code"},"[","src","]")),Object(a.b)("p",null,"Performs the conversion."),Object(a.b)("h3",{id:"implt-u-trait-coreconverttryfromu-for-t-where-u-trait-coreconvertintotgoto-source-code"},"impl","<","T, U> ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","U> for T where U: ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html",title:"trait core::convert::Into"},"Into"),"<","T>,",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#581-590",title:"goto source code"},"[","src","]")),Object(a.b)("h4",{id:"type-error--enum-coreconvertinfallible"},"type ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error"},"Error")," = ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/enum.Infallible.html",title:"enum core::convert::Infallible"},"Infallible")),Object(a.b)("p",null,"The type returned in the event of a conversion error."),Object(a.b)("h4",{id:"pub-fn-try_fromvalue-u---enum-coreresultresultt-t-as-trait-coreconverttryfromutype-coreconverttryfromerrorgoto-source-code"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#tymethod.try_from"},"try_from"),"(value: U) -> ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html",title:"enum core::result::Result"},"Result"),"<","T, ","<","T as ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","U>>::",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error",title:"type core::convert::TryFrom::Error"},"Error"),">",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#587",title:"goto source code"},"[","src","]")),Object(a.b)("p",null,"Performs the conversion."),Object(a.b)("h3",{id:"implt-u-trait-coreconverttryintou-for-t-where-u-trait-coreconverttryfromtgoto-source-code"},"impl","<","T, U> ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html",title:"trait core::convert::TryInto"},"TryInto"),"<","U> for T where U: ",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","T>,",Object(a.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#567-576",title:"goto source code"},"[","src","]")),Object(a.b)("h4",{id:"type-error--u-as-trait-coreconverttryfromttype-coreconverttryfromerror"},"type ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html#associatedtype.Error"},"Error")," = ","<","U as ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","T>>::",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error",title:"type core::convert::TryFrom::Error"},"Error")),Object(a.b)("p",null,"The type returned in the event of a conversion error."),Object(a.b)("h4",{id:"pub-fn-try_intoself---enum-coreresultresultu-u-as-trait-coreconverttryfromttype-coreconverttryfromerrorgoto-source-code"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html#tymethod.try_into"},"try_into"),"(self) -> ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html",title:"enum core::result::Result"},"Result"),"<","U, ","<","U as ",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","T>>::",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error",title:"type core::convert::TryFrom::Error"},"Error"),">",Object(a.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#573",title:"goto source code"},"[","src","]")),Object(a.b)("p",null,"Performs the conversion."),Object(a.b)("h3",{id:"implv-t-vzipv-for-t-where-v-multilanet"},"impl","<","V, T> VZip","<","V> for T where V: MultiLane","<","T>,"),Object(a.b)("h4",{id:"pub-fn-vzipself---v"},"pub fn ",Object(a.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.vzip"},"vzip"),"(self) -> V"))}s.isMDXComponent=!0},454:function(t,e,r){"use strict";r.d(e,"a",(function(){return m})),r.d(e,"b",(function(){return d}));var o=r(0),n=r.n(o);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},a=Object.keys(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var u=n.a.createContext({}),s=function(t){var e=n.a.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=s(t.components);return n.a.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.a.createElement(n.a.Fragment,{},e)}},b=n.a.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=s(r),b=o,d=m["".concat(c,".").concat(b)]||m[b]||p[b]||a;return r?n.a.createElement(d,i(i({ref:e},u),{},{components:r})):n.a.createElement(d,i({ref:e},u))}));function d(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);