(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return c}));var i=n(3),r=n(7),a=(n(0),n(454)),o={title:"Module: os",sidebar_label:"os",custom_edit_url:null,hide_title:!0},b={unversionedId:"api/js/modules/os",id:"api/js/modules/os",isDocsHomePage:!1,title:"Module: os",description:"Provides operating system-related utility methods and properties.",source:"@site/docs/zh-hans/api/js/modules/os.md",sourceDirName:"api/js/modules",slug:"/api/js/modules/os",permalink:"/tauri-docs/docs/api/js/modules/os",editUrl:null,version:"current",sidebar_label:"os",frontMatter:{title:"Module: os",sidebar_label:"os",custom_edit_url:null,hide_title:!0},sidebar:"docs",previous:{title:"Module: notification",permalink:"/tauri-docs/docs/api/js/modules/notification"},next:{title:"Module: path",permalink:"/tauri-docs/docs/api/js/modules/path"}},p=[{value:"Variables",id:"variables",children:[{value:"EOL",id:"eol",children:[]}]},{value:"Functions",id:"functions",children:[{value:"arch",id:"arch",children:[]},{value:"platform",id:"platform",children:[]},{value:"tempdir",id:"tempdir",children:[]},{value:"type",id:"type",children:[]},{value:"version",id:"version",children:[]}]}],l={toc:p};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Provides operating system-related utility methods and properties."),Object(a.b)("p",null,"This package is also accessible with ",Object(a.b)("inlineCode",{parentName:"p"},"window.__TAURI__.fs")," when ",Object(a.b)("inlineCode",{parentName:"p"},"tauri.conf.json > build > withGlobalTauri")," is set to true."),Object(a.b)("p",null,"The APIs must be allowlisted on ",Object(a.b)("inlineCode",{parentName:"p"},"tauri.conf.json"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "tauri": {\n    "allowlist": {\n      "os": {\n        "all": true, // enable all Os APIs\n      }\n    }\n  }\n}\n')),Object(a.b)("p",null,"It is recommended to allowlist only the APIs you use for optimal bundle size and security."),Object(a.b)("h2",{id:"variables"},"Variables"),Object(a.b)("h3",{id:"eol"},"EOL"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Const")," ",Object(a.b)("strong",{parentName:"p"},"EOL"),": ",Object(a.b)("inlineCode",{parentName:"p"},'"\\r\\n"')," ","|"," ",Object(a.b)("inlineCode",{parentName:"p"},'"\\n"')),Object(a.b)("p",null,"The operating system-specific end-of-line marker."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"\\n")," on POSIX"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"\\r\\n")," on Windows")),Object(a.b)("h4",{id:"defined-in"},"Defined in"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/os.ts#L34"},"os.ts:34")),Object(a.b)("h2",{id:"functions"},"Functions"),Object(a.b)("h3",{id:"arch"},"arch"),Object(a.b)("p",null,"\u25b8 ",Object(a.b)("strong",{parentName:"p"},"arch"),"(): ",Object(a.b)("inlineCode",{parentName:"p"},"Promise"),"<",Object(a.b)("inlineCode",{parentName:"p"},"string"),">"),Object(a.b)("p",null,"Returns the operating system CPU architecture for which the tauri app was compiled. Possible values are ",Object(a.b)("inlineCode",{parentName:"p"},"'x86'"),", ",Object(a.b)("inlineCode",{parentName:"p"},"'x86_64'"),", ",Object(a.b)("inlineCode",{parentName:"p"},"'arm'"),", ",Object(a.b)("inlineCode",{parentName:"p"},"'aarch64'"),", ",Object(a.b)("inlineCode",{parentName:"p"},"'mips'"),", ",Object(a.b)("inlineCode",{parentName:"p"},"'mips64'"),", ",Object(a.b)("inlineCode",{parentName:"p"},"'powerpc'"),", ",Object(a.b)("inlineCode",{parentName:"p"},"'powerpc64'"),", ",Object(a.b)("inlineCode",{parentName:"p"},"'riscv64'"),", ",Object(a.b)("inlineCode",{parentName:"p"},"'s390x'"),", ",Object(a.b)("inlineCode",{parentName:"p"},"'sparc64'")),Object(a.b)("h4",{id:"returns"},"Returns"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Promise"),"<",Object(a.b)("inlineCode",{parentName:"p"},"string"),">"),Object(a.b)("h4",{id:"defined-in-1"},"Defined in"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/os.ts#L76"},"os.ts:76")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"platform"},"platform"),Object(a.b)("p",null,"\u25b8 ",Object(a.b)("strong",{parentName:"p"},"platform"),"(): ",Object(a.b)("inlineCode",{parentName:"p"},"Promise"),"<",Object(a.b)("inlineCode",{parentName:"p"},"string"),">"),Object(a.b)("p",null,"Returns a string identifying the operating system platform.\nThe value is set at compile time. Possible values are ",Object(a.b)("inlineCode",{parentName:"p"},"'aix'"),", ",Object(a.b)("inlineCode",{parentName:"p"},"'darwin'"),", ",Object(a.b)("inlineCode",{parentName:"p"},"'freebsd'"),", ",Object(a.b)("inlineCode",{parentName:"p"},"'linux'"),", ",Object(a.b)("inlineCode",{parentName:"p"},"'openbsd'"),", ",Object(a.b)("inlineCode",{parentName:"p"},"'sunos'"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"'win32'"),"."),Object(a.b)("h4",{id:"returns-1"},"Returns"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Promise"),"<",Object(a.b)("inlineCode",{parentName:"p"},"string"),">"),Object(a.b)("h4",{id:"defined-in-2"},"Defined in"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/os.ts#L40"},"os.ts:40")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"tempdir"},"tempdir"),Object(a.b)("p",null,"\u25b8 ",Object(a.b)("strong",{parentName:"p"},"tempdir"),"(): ",Object(a.b)("inlineCode",{parentName:"p"},"Promise"),"<",Object(a.b)("inlineCode",{parentName:"p"},"string"),">"),Object(a.b)("p",null,"Returns the operating system's default directory for temporary files as a string."),Object(a.b)("h4",{id:"returns-2"},"Returns"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Promise"),"<",Object(a.b)("inlineCode",{parentName:"p"},"string"),">"),Object(a.b)("h4",{id:"defined-in-3"},"Defined in"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/os.ts#L88"},"os.ts:88")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"type"},"type"),Object(a.b)("p",null,"\u25b8 ",Object(a.b)("strong",{parentName:"p"},"type"),"(): ",Object(a.b)("inlineCode",{parentName:"p"},"Promise"),"<",Object(a.b)("inlineCode",{parentName:"p"},"string"),">"),Object(a.b)("p",null,"Returns ",Object(a.b)("inlineCode",{parentName:"p"},"'Linux'")," on Linux, ",Object(a.b)("inlineCode",{parentName:"p"},"'Darwin'")," on macOS, and ",Object(a.b)("inlineCode",{parentName:"p"},"'Windows_NT'")," on Windows."),Object(a.b)("h4",{id:"returns-3"},"Returns"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Promise"),"<",Object(a.b)("inlineCode",{parentName:"p"},"string"),">"),Object(a.b)("h4",{id:"defined-in-4"},"Defined in"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/os.ts#L64"},"os.ts:64")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"version"},"version"),Object(a.b)("p",null,"\u25b8 ",Object(a.b)("strong",{parentName:"p"},"version"),"(): ",Object(a.b)("inlineCode",{parentName:"p"},"Promise"),"<",Object(a.b)("inlineCode",{parentName:"p"},"string"),">"),Object(a.b)("p",null,"Returns a string identifying the kernel version."),Object(a.b)("h4",{id:"returns-4"},"Returns"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Promise"),"<",Object(a.b)("inlineCode",{parentName:"p"},"string"),">"),Object(a.b)("h4",{id:"defined-in-5"},"Defined in"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/os.ts#L52"},"os.ts:52")))}c.isMDXComponent=!0},454:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),c=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=c(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=c(n),u=i,m=s["".concat(o,".").concat(u)]||s[u]||d[u]||a;return n?r.a.createElement(m,b(b({ref:t},l),{},{components:n})):r.a.createElement(m,b({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var b={};for(var p in t)hasOwnProperty.call(t,p)&&(b[p]=t[p]);b.originalType=e,b.mdxType="string"==typeof e?e:i,o[1]=b;for(var l=2;l<a;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);