(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{454:function(t,r,e){"use strict";e.d(r,"a",(function(){return p})),e.d(r,"b",(function(){return b}));var o=e(0),a=e.n(o);function c(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function n(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,o)}return e}function s(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?n(Object(e),!0).forEach((function(r){c(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function i(t,r){if(null==t)return{};var e,o,a=function(t,r){if(null==t)return{};var e,o,a={},c=Object.keys(t);for(o=0;o<c.length;o++)e=c[o],r.indexOf(e)>=0||(a[e]=t[e]);return a}(t,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(o=0;o<c.length;o++)e=c[o],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var l=a.a.createContext({}),u=function(t){var r=a.a.useContext(l),e=r;return t&&(e="function"==typeof t?t(r):s(s({},r),t)),e},p=function(t){var r=u(t.components);return a.a.createElement(l.Provider,{value:r},t.children)},h={inlineCode:"code",wrapper:function(t){var r=t.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(t,r){var e=t.components,o=t.mdxType,c=t.originalType,n=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),p=u(e),m=o,b=p["".concat(n,".").concat(m)]||p[m]||h[m]||c;return e?a.a.createElement(b,s(s({ref:r},l),{},{components:e})):a.a.createElement(b,s({ref:r},l))}));function b(t,r){var e=arguments,o=r&&r.mdxType;if("string"==typeof t||o){var c=e.length,n=new Array(c);n[0]=m;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=t,s.mdxType="string"==typeof t?t:o,n[1]=s;for(var l=2;l<c;l++)n[l]=e[l];return a.a.createElement.apply(null,n)}return a.a.createElement.apply(null,e)}m.displayName="MDXCreateElement"},93:function(t,r,e){"use strict";e.r(r),e.d(r,"frontMatter",(function(){return n})),e.d(r,"metadata",(function(){return s})),e.d(r,"toc",(function(){return i})),e.d(r,"default",(function(){return u}));var o=e(3),a=e(7),c=(e(0),e(454)),n={title:"Struct tauri::http::RequestParts",sidebar_label:"struct.RequestParts",custom_edit_url:null},s={unversionedId:"api/rust/tauri/http/struct.RequestParts",id:"api/rust/tauri/http/struct.RequestParts",isDocsHomePage:!1,title:"Struct tauri::http::RequestParts",description:"x3A;:RequestParts,",source:"@site/docs/en/api/rust/tauri/http/struct.RequestParts.md",sourceDirName:"api/rust/tauri/http",slug:"/api/rust/tauri/http/struct.RequestParts",permalink:"/en/docs/api/rust/tauri/http/struct.RequestParts",editUrl:null,version:"current",sidebar_label:"struct.RequestParts",frontMatter:{title:"Struct tauri::http::RequestParts",sidebar_label:"struct.RequestParts",custom_edit_url:null},sidebar:"docs",previous:{title:"Struct tauri::http::Request",permalink:"/en/docs/api/rust/tauri/http/struct.Request"},next:{title:"Struct tauri::http::Response",permalink:"/en/docs/api/rust/tauri/http/struct.Response"}},i=[{value:"Fields",id:"fields",children:[]},{value:"Trait Implementations",id:"trait-implementations",children:[{value:"impl trait core::clone::Clone for struct tauri::http::RequestParts",id:"impl-trait-corecloneclone-for-struct-taurihttprequestparts",children:[]},{value:"impl trait core::fmt::Debug for struct tauri::http::RequestParts",id:"impl-trait-corefmtdebug-for-struct-taurihttprequestparts",children:[]},{value:"impl trait core::convert::From&lt;HttpRequestPartsWrapper&gt; for struct tauri::http::RequestParts",id:"impl-trait-coreconvertfromhttprequestpartswrapper-for-struct-taurihttprequestparts",children:[]}]},{value:"Auto Trait Implementations",id:"auto-trait-implementations",children:[{value:"impl trait std::panic::RefUnwindSafe for struct tauri::http::RequestParts",id:"impl-trait-stdpanicrefunwindsafe-for-struct-taurihttprequestparts",children:[]},{value:"impl trait core::marker::Send for struct tauri::http::RequestParts",id:"impl-trait-coremarkersend-for-struct-taurihttprequestparts",children:[]},{value:"impl trait core::marker::Sync for struct tauri::http::RequestParts",id:"impl-trait-coremarkersync-for-struct-taurihttprequestparts",children:[]},{value:"impl trait core::marker::Unpin for struct tauri::http::RequestParts",id:"impl-trait-coremarkerunpin-for-struct-taurihttprequestparts",children:[]},{value:"impl trait std::panic::UnwindSafe for struct tauri::http::RequestParts",id:"impl-trait-stdpanicunwindsafe-for-struct-taurihttprequestparts",children:[]}]},{value:"Blanket Implementations",id:"blanket-implementations",children:[{value:"impl&lt;T&gt; trait core::any::Any for T where T: &#39;static + ?trait core::marker::Sized,goto source code",id:"implt-trait-coreanyany-for-t-where-t-static--trait-coremarkersizedgoto-source-code",children:[]},{value:"impl&lt;T&gt; trait core::borrow::Borrow&lt;T&gt; for T where T: ?trait core::marker::Sized,goto source code",id:"implt-trait-coreborrowborrowt-for-t-where-t-trait-coremarkersizedgoto-source-code",children:[]},{value:"impl&lt;T&gt; trait core::borrow::BorrowMut&lt;T&gt; for T where T: ?trait core::marker::Sized,goto source code",id:"implt-trait-coreborrowborrowmutt-for-t-where-t-trait-coremarkersizedgoto-source-code",children:[]},{value:"impl&lt;T&gt; trait core::convert::From&lt;T&gt; for Tgoto source code",id:"implt-trait-coreconvertfromt-for-tgoto-source-code",children:[]},{value:"impl&lt;T, U&gt; trait core::convert::Into&lt;U&gt; for T where U: trait core::convert::From&lt;T&gt;,goto source code",id:"implt-u-trait-coreconvertintou-for-t-where-u-trait-coreconvertfromtgoto-source-code",children:[]},{value:"impl&lt;T&gt; trait alloc::borrow::ToOwned for T where T: trait core::clone::Clone,goto source code",id:"implt-trait-allocborrowtoowned-for-t-where-t-trait-corecloneclonegoto-source-code",children:[]},{value:"impl&lt;T, U&gt; trait core::convert::TryFrom&lt;U&gt; for T where U: trait core::convert::Into&lt;T&gt;,goto source code",id:"implt-u-trait-coreconverttryfromu-for-t-where-u-trait-coreconvertintotgoto-source-code",children:[]},{value:"impl&lt;T, U&gt; trait core::convert::TryInto&lt;U&gt; for T where U: trait core::convert::TryFrom&lt;T&gt;,goto source code",id:"implt-u-trait-coreconverttryintou-for-t-where-u-trait-coreconverttryfromtgoto-source-code",children:[]},{value:"impl&lt;V, T&gt; VZip&lt;V&gt; for T where V: MultiLane&lt;T&gt;,",id:"implv-t-vzipv-for-t-where-v-multilanet",children:[]}]}],l={toc:i};function u(t){var r=t.components,e=Object(a.a)(t,["components"]);return Object(c.b)("wrapper",Object(o.a)({},l,e,{components:r,mdxType:"MDXLayout"}),Object(c.b)("p",null,"x3A;:RequestParts,"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-rs"},"pub struct RequestParts {\n    pub method: Method,\n    pub uri: String,\n    pub headers: HeaderMap<HeaderValue>,\n}\n")),Object(c.b)("p",null,"Expand description"),Object(c.b)("p",null,"Component parts of an HTTP ",Object(c.b)("inlineCode",{parentName:"p"},"Request")),Object(c.b)("p",null,"The HTTP request head consists of a method, uri, and a set of header fields."),Object(c.b)("h2",{id:"fields"},"Fields"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"method: Method")),Object(c.b)("p",null,"The request\u2019s method"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"uri: String")),Object(c.b)("p",null,"The request\u2019s URI"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"headers: HeaderMap<HeaderValue>")),Object(c.b)("p",null,"The request\u2019s headers"),Object(c.b)("h2",{id:"trait-implementations"},"Trait Implementations"),Object(c.b)("h3",{id:"impl-trait-corecloneclone-for-struct-taurihttprequestparts"},"impl ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html",title:"trait core::clone::Clone"},"Clone")," for ",Object(c.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/struct.RequestParts",title:"struct tauri::http::RequestParts"},"RequestParts")),Object(c.b)("h4",{id:"pub-fn-cloneself---struct-taurihttprequestparts"},"pub fn ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#tymethod.clone"},"clone"),"(&self) -> ",Object(c.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/struct.RequestParts",title:"struct tauri::http::RequestParts"},"RequestParts")),Object(c.b)("p",null,"Returns a copy of the value. ",Object(c.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#tymethod.clone"},"Read more")),Object(c.b)("h4",{id:"fn-clone_frommut-self-source-self100goto-source-code"},"fn ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#method.clone_from"},"clone_from"),"(&mut self, source: ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.reference.html"},"&"),"Self)1.0.0",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/clone.rs.html#130",title:"goto source code"},"[","src","]")),Object(c.b)("p",null,"Performs copy-assignment from ",Object(c.b)("inlineCode",{parentName:"p"},"source"),". ",Object(c.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#method.clone_from"},"Read more")),Object(c.b)("h3",{id:"impl-trait-corefmtdebug-for-struct-taurihttprequestparts"},"impl ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html",title:"trait core::fmt::Debug"},"Debug")," for ",Object(c.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/struct.RequestParts",title:"struct tauri::http::RequestParts"},"RequestParts")),Object(c.b)("h4",{id:"pub-fn-fmtself-f-mut-struct-corefmtformatter_---enum-coreresultresult-struct-corefmterror"},"pub fn ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt"},"fmt"),"(&self, f: &mut ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html",title:"struct core::fmt::Formatter"},"Formatter"),"<","'","_",">) -> ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html",title:"enum core::result::Result"},"Result"),"<",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.unit.html"},"()"),", ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/fmt/struct.Error.html",title:"struct core::fmt::Error"},"Error"),">"),Object(c.b)("p",null,"Formats the value using the given formatter. ",Object(c.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt"},"Read more")),Object(c.b)("h3",{id:"impl-trait-coreconvertfromhttprequestpartswrapper-for-struct-taurihttprequestparts"},"impl ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html",title:"trait core::convert::From"},"From"),"<","HttpRequestPartsWrapper> for ",Object(c.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/struct.RequestParts",title:"struct tauri::http::RequestParts"},"RequestParts")),Object(c.b)("h4",{id:"pub-fn-fromparts-httprequestpartswrapper---struct-taurihttprequestparts"},"pub fn ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from"},"from"),"(parts: HttpRequestPartsWrapper) -> ",Object(c.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/struct.RequestParts",title:"struct tauri::http::RequestParts"},"RequestParts")),Object(c.b)("p",null,"Performs the conversion."),Object(c.b)("h2",{id:"auto-trait-implementations"},"Auto Trait Implementations"),Object(c.b)("h3",{id:"impl-trait-stdpanicrefunwindsafe-for-struct-taurihttprequestparts"},"impl ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html",title:"trait std::panic::RefUnwindSafe"},"RefUnwindSafe")," for ",Object(c.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/struct.RequestParts",title:"struct tauri::http::RequestParts"},"RequestParts")),Object(c.b)("h3",{id:"impl-trait-coremarkersend-for-struct-taurihttprequestparts"},"impl ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html",title:"trait core::marker::Send"},"Send")," for ",Object(c.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/struct.RequestParts",title:"struct tauri::http::RequestParts"},"RequestParts")),Object(c.b)("h3",{id:"impl-trait-coremarkersync-for-struct-taurihttprequestparts"},"impl ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html",title:"trait core::marker::Sync"},"Sync")," for ",Object(c.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/struct.RequestParts",title:"struct tauri::http::RequestParts"},"RequestParts")),Object(c.b)("h3",{id:"impl-trait-coremarkerunpin-for-struct-taurihttprequestparts"},"impl ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html",title:"trait core::marker::Unpin"},"Unpin")," for ",Object(c.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/struct.RequestParts",title:"struct tauri::http::RequestParts"},"RequestParts")),Object(c.b)("h3",{id:"impl-trait-stdpanicunwindsafe-for-struct-taurihttprequestparts"},"impl ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html",title:"trait std::panic::UnwindSafe"},"UnwindSafe")," for ",Object(c.b)("a",{parentName:"h3",href:"/docs/api/rust/tauri/struct.RequestParts",title:"struct tauri::http::RequestParts"},"RequestParts")),Object(c.b)("h2",{id:"blanket-implementations"},"Blanket Implementations"),Object(c.b)("h3",{id:"implt-trait-coreanyany-for-t-where-t-static--trait-coremarkersizedgoto-source-code"},"impl","<","T> ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html",title:"trait core::any::Any"},"Any")," for T where T: 'static + ?",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html",title:"trait core::marker::Sized"},"Sized"),",",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/any.rs.html#131-135",title:"goto source code"},"[","src","]")),Object(c.b)("h4",{id:"pub-fn-type_idself---struct-coreanytypeidgoto-source-code"},"pub fn ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html#tymethod.type_id"},"type_id"),"(&self) -> ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/any/struct.TypeId.html",title:"struct core::any::TypeId"},"TypeId"),Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/any.rs.html#132",title:"goto source code"},"[","src","]")),Object(c.b)("p",null,"Gets the ",Object(c.b)("inlineCode",{parentName:"p"},"TypeId")," of ",Object(c.b)("inlineCode",{parentName:"p"},"self"),". ",Object(c.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html#tymethod.type_id"},"Read more")),Object(c.b)("h3",{id:"implt-trait-coreborrowborrowt-for-t-where-t-trait-coremarkersizedgoto-source-code"},"impl","<","T> ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html",title:"trait core::borrow::Borrow"},"Borrow"),"<","T> for T where T: ?",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html",title:"trait core::marker::Sized"},"Sized"),",",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#208-213",title:"goto source code"},"[","src","]")),Object(c.b)("h4",{id:"pub-fn-borrowself---tgoto-source-code"},"pub fn ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html#tymethod.borrow"},"borrow"),"(&self) -> ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.reference.html"},"&"),"T",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#210",title:"goto source code"},"[","src","]")),Object(c.b)("p",null,"Immutably borrows from an owned value. ",Object(c.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html#tymethod.borrow"},"Read more")),Object(c.b)("h3",{id:"implt-trait-coreborrowborrowmutt-for-t-where-t-trait-coremarkersizedgoto-source-code"},"impl","<","T> ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html",title:"trait core::borrow::BorrowMut"},"BorrowMut"),"<","T> for T where T: ?",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html",title:"trait core::marker::Sized"},"Sized"),",",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#216-220",title:"goto source code"},"[","src","]")),Object(c.b)("h4",{id:"pub-fn-borrow_mutmut-self---muttgoto-source-code"},"pub fn ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut"},"borrow_mut"),"(&mut self) -> ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.reference.html"},"&mut"),"T",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#217",title:"goto source code"},"[","src","]")),Object(c.b)("p",null,"Mutably borrows from an owned value. ",Object(c.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut"},"Read more")),Object(c.b)("h3",{id:"implt-trait-coreconvertfromt-for-tgoto-source-code"},"impl","<","T> ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html",title:"trait core::convert::From"},"From"),"<","T> for T",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#544-548",title:"goto source code"},"[","src","]")),Object(c.b)("h4",{id:"pub-fn-fromt-t---tgoto-source-code"},"pub fn ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from"},"from"),"(t: T) -> T",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#545",title:"goto source code"},"[","src","]")),Object(c.b)("p",null,"Performs the conversion."),Object(c.b)("h3",{id:"implt-u-trait-coreconvertintou-for-t-where-u-trait-coreconvertfromtgoto-source-code"},"impl","<","T, U> ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html",title:"trait core::convert::Into"},"Into"),"<","U> for T where U: ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html",title:"trait core::convert::From"},"From"),"<","T>,",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#533-540",title:"goto source code"},"[","src","]")),Object(c.b)("h4",{id:"pub-fn-intoself---ugoto-source-code"},"pub fn ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html#tymethod.into"},"into"),"(self) -> U",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#537",title:"goto source code"},"[","src","]")),Object(c.b)("p",null,"Performs the conversion."),Object(c.b)("h3",{id:"implt-trait-allocborrowtoowned-for-t-where-t-trait-corecloneclonegoto-source-code"},"impl","<","T> ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html",title:"trait alloc::borrow::ToOwned"},"ToOwned")," for T where T: ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html",title:"trait core::clone::Clone"},"Clone"),",",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/alloc/borrow.rs.html#84-96",title:"goto source code"},"[","src","]")),Object(c.b)("h4",{id:"type-owned--t"},"type ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#associatedtype.Owned"},"Owned")," = T"),Object(c.b)("p",null,"The resulting type after obtaining ownership."),Object(c.b)("h4",{id:"pub-fn-to_ownedself---tgoto-source-code"},"pub fn ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#tymethod.to_owned"},"to_owned"),"(&self) -> T",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/alloc/borrow.rs.html#89",title:"goto source code"},"[","src","]")),Object(c.b)("p",null,"Creates owned data from borrowed data, usually by cloning. ",Object(c.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#tymethod.to_owned"},"Read more")),Object(c.b)("h4",{id:"pub-fn-clone_intoself-target-muttgoto-source-code"},"pub fn ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#method.clone_into"},"clone_into"),"(&self, target: ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/std/primitive.reference.html"},"&mut"),"T)",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/alloc/borrow.rs.html#93",title:"goto source code"},"[","src","]")),Object(c.b)("p",null,"\ud83d\udd2c This is a nightly-only experimental API. (",Object(c.b)("inlineCode",{parentName:"p"},"toowned_clone_into"),")"),Object(c.b)("p",null,"recently added"),Object(c.b)("p",null,"Uses borrowed data to replace owned data, usually by cloning. ",Object(c.b)("a",{parentName:"p",href:"https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#method.clone_into"},"Read more")),Object(c.b)("h3",{id:"implt-u-trait-coreconverttryfromu-for-t-where-u-trait-coreconvertintotgoto-source-code"},"impl","<","T, U> ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","U> for T where U: ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html",title:"trait core::convert::Into"},"Into"),"<","T>,",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#581-590",title:"goto source code"},"[","src","]")),Object(c.b)("h4",{id:"type-error--enum-coreconvertinfallible"},"type ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error"},"Error")," = ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/enum.Infallible.html",title:"enum core::convert::Infallible"},"Infallible")),Object(c.b)("p",null,"The type returned in the event of a conversion error."),Object(c.b)("h4",{id:"pub-fn-try_fromvalue-u---enum-coreresultresultt-t-as-trait-coreconverttryfromutype-coreconverttryfromerrorgoto-source-code"},"pub fn ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#tymethod.try_from"},"try_from"),"(value: U) -> ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html",title:"enum core::result::Result"},"Result"),"<","T, ","<","T as ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","U>>::",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error",title:"type core::convert::TryFrom::Error"},"Error"),">",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#587",title:"goto source code"},"[","src","]")),Object(c.b)("p",null,"Performs the conversion."),Object(c.b)("h3",{id:"implt-u-trait-coreconverttryintou-for-t-where-u-trait-coreconverttryfromtgoto-source-code"},"impl","<","T, U> ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html",title:"trait core::convert::TryInto"},"TryInto"),"<","U> for T where U: ",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","T>,",Object(c.b)("a",{parentName:"h3",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#567-576",title:"goto source code"},"[","src","]")),Object(c.b)("h4",{id:"type-error--u-as-trait-coreconverttryfromttype-coreconverttryfromerror"},"type ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html#associatedtype.Error"},"Error")," = ","<","U as ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","T>>::",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error",title:"type core::convert::TryFrom::Error"},"Error")),Object(c.b)("p",null,"The type returned in the event of a conversion error."),Object(c.b)("h4",{id:"pub-fn-try_intoself---enum-coreresultresultu-u-as-trait-coreconverttryfromttype-coreconverttryfromerrorgoto-source-code"},"pub fn ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html#tymethod.try_into"},"try_into"),"(self) -> ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html",title:"enum core::result::Result"},"Result"),"<","U, ","<","U as ",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html",title:"trait core::convert::TryFrom"},"TryFrom"),"<","T>>::",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error",title:"type core::convert::TryFrom::Error"},"Error"),">",Object(c.b)("a",{parentName:"h4",href:"https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#573",title:"goto source code"},"[","src","]")),Object(c.b)("p",null,"Performs the conversion."),Object(c.b)("h3",{id:"implv-t-vzipv-for-t-where-v-multilanet"},"impl","<","V, T> VZip","<","V> for T where V: MultiLane","<","T>,"),Object(c.b)("h4",{id:"pub-fn-vzipself---v"},"pub fn ",Object(c.b)("a",{parentName:"h4",href:"/docs/api/rust/tauri/about:blank#tymethod.vzip"},"vzip"),"(self) -> V"))}u.isMDXComponent=!0}}]);