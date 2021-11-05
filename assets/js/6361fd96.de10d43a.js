(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{219:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),b=(r(0),r(454)),l={title:"Module: globalShortcut",sidebar_label:"globalShortcut",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/js/modules/globalShortcut",id:"api/js/modules/globalShortcut",isDocsHomePage:!1,title:"Module: globalShortcut",description:"Register global shortcuts.",source:"@site/docs/zh-hans/api/js/modules/globalShortcut.md",sourceDirName:"api/js/modules",slug:"/api/js/modules/globalShortcut",permalink:"/tauri-docs/docs/api/js/modules/globalShortcut",editUrl:null,version:"current",sidebar_label:"globalShortcut",frontMatter:{title:"Module: globalShortcut",sidebar_label:"globalShortcut",custom_edit_url:null,hide_title:!0},sidebar:"docs",previous:{title:"Module: fs",permalink:"/tauri-docs/docs/api/js/modules/fs"},next:{title:"Module: helpers/event",permalink:"/tauri-docs/docs/api/js/modules/helpers_event"}},o=[{value:"Type aliases",id:"type-aliases",children:[{value:"ShortcutHandler",id:"shortcuthandler",children:[]}]},{value:"Functions",id:"functions",children:[{value:"isRegistered",id:"isregistered",children:[]},{value:"register",id:"register",children:[]},{value:"registerAll",id:"registerall",children:[]},{value:"unregister",id:"unregister",children:[]},{value:"unregisterAll",id:"unregisterall",children:[]}]}],c={toc:o};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Register global shortcuts."),Object(b.b)("p",null,"This package is also accessible with ",Object(b.b)("inlineCode",{parentName:"p"},"window.__TAURI__.globalShortcut")," when ",Object(b.b)("inlineCode",{parentName:"p"},"tauri.conf.json > build > withGlobalTauri")," is set to true."),Object(b.b)("p",null,"The APIs must be allowlisted on ",Object(b.b)("inlineCode",{parentName:"p"},"tauri.conf.json"),":"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-json"},'{\n  "tauri": {\n    "allowlist": {\n      "globalShortcut": {\n        "all": true // enable all global shortcut APIs\n      }\n    }\n  }\n}\n')),Object(b.b)("p",null,"It is recommended to allowlist only the APIs you use for optimal bundle size and security."),Object(b.b)("h2",{id:"type-aliases"},"Type aliases"),Object(b.b)("h3",{id:"shortcuthandler"},"ShortcutHandler"),Object(b.b)("p",null,"\u01ac ",Object(b.b)("strong",{parentName:"p"},"ShortcutHandler"),": (",Object(b.b)("inlineCode",{parentName:"p"},"shortcut"),": ",Object(b.b)("inlineCode",{parentName:"p"},"string"),") => ",Object(b.b)("inlineCode",{parentName:"p"},"void")),Object(b.b)("h4",{id:"type-declaration"},"Type declaration"),Object(b.b)("p",null,"\u25b8 (",Object(b.b)("inlineCode",{parentName:"p"},"shortcut"),"): ",Object(b.b)("inlineCode",{parentName:"p"},"void")),Object(b.b)("h5",{id:"parameters"},"Parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"shortcut")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"string"))))),Object(b.b)("h5",{id:"returns"},"Returns"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"void")),Object(b.b)("h4",{id:"defined-in"},"Defined in"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/globalShortcut.ts#L29"},"globalShortcut.ts:29")),Object(b.b)("h2",{id:"functions"},"Functions"),Object(b.b)("h3",{id:"isregistered"},"isRegistered"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"isRegistered"),"(",Object(b.b)("inlineCode",{parentName:"p"},"shortcut"),"): ",Object(b.b)("inlineCode",{parentName:"p"},"Promise"),"<",Object(b.b)("inlineCode",{parentName:"p"},"boolean"),">"),Object(b.b)("p",null,"Determines whether the given shortcut is registered by this application or not."),Object(b.b)("h4",{id:"parameters-1"},"Parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"),Object(b.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"shortcut")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",{parentName:"tr",align:"left"},'Array of shortcut definitions, modifiers and key separated by "+" e.g. CmdOrControl+Q')))),Object(b.b)("h4",{id:"returns-1"},"Returns"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"Promise"),"<",Object(b.b)("inlineCode",{parentName:"p"},"boolean"),">"),Object(b.b)("p",null,"A promise resolving to the state."),Object(b.b)("h4",{id:"defined-in-1"},"Defined in"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/globalShortcut.ts#L79"},"globalShortcut.ts:79")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"register"},"register"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"register"),"(",Object(b.b)("inlineCode",{parentName:"p"},"shortcut"),", ",Object(b.b)("inlineCode",{parentName:"p"},"handler"),"): ",Object(b.b)("inlineCode",{parentName:"p"},"Promise"),"<",Object(b.b)("inlineCode",{parentName:"p"},"void"),">"),Object(b.b)("p",null,"Register a global shortcut."),Object(b.b)("h4",{id:"parameters-2"},"Parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"),Object(b.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"shortcut")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",{parentName:"tr",align:"left"},'Shortcut definition, modifiers and key separated by "+" e.g. CmdOrControl+Q')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"handler")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/tauri-docs/docs/api/js/modules/globalShortcut#shortcuthandler"},Object(b.b)("inlineCode",{parentName:"a"},"ShortcutHandler"))),Object(b.b)("td",{parentName:"tr",align:"left"},"Shortcut handler callback - takes the triggered shortcut as argument")))),Object(b.b)("h4",{id:"returns-2"},"Returns"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"Promise"),"<",Object(b.b)("inlineCode",{parentName:"p"},"void"),">"),Object(b.b)("h4",{id:"defined-in-2"},"Defined in"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/globalShortcut.ts#L38"},"globalShortcut.ts:38")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"registerall"},"registerAll"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"registerAll"),"(",Object(b.b)("inlineCode",{parentName:"p"},"shortcuts"),", ",Object(b.b)("inlineCode",{parentName:"p"},"handler"),"): ",Object(b.b)("inlineCode",{parentName:"p"},"Promise"),"<",Object(b.b)("inlineCode",{parentName:"p"},"void"),">"),Object(b.b)("p",null,"Register a collection of global shortcuts."),Object(b.b)("h4",{id:"parameters-3"},"Parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"),Object(b.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"shortcuts")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"string"),"[]"),Object(b.b)("td",{parentName:"tr",align:"left"},'Array of shortcut definitions, modifiers and key separated by "+" e.g. CmdOrControl+Q')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"handler")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/tauri-docs/docs/api/js/modules/globalShortcut#shortcuthandler"},Object(b.b)("inlineCode",{parentName:"a"},"ShortcutHandler"))),Object(b.b)("td",{parentName:"tr",align:"left"},"Shortcut handler callback - takes the triggered shortcut as argument")))),Object(b.b)("h4",{id:"returns-3"},"Returns"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"Promise"),"<",Object(b.b)("inlineCode",{parentName:"p"},"void"),">"),Object(b.b)("h4",{id:"defined-in-3"},"Defined in"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/globalShortcut.ts#L59"},"globalShortcut.ts:59")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"unregister"},"unregister"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"unregister"),"(",Object(b.b)("inlineCode",{parentName:"p"},"shortcut"),"): ",Object(b.b)("inlineCode",{parentName:"p"},"Promise"),"<",Object(b.b)("inlineCode",{parentName:"p"},"void"),">"),Object(b.b)("p",null,"Unregister a global shortcut."),Object(b.b)("h4",{id:"parameters-4"},"Parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"),Object(b.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"shortcut")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",{parentName:"tr",align:"left"},'shortcut definition, modifiers and key separated by "+" e.g. CmdOrControl+Q')))),Object(b.b)("h4",{id:"returns-4"},"Returns"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"Promise"),"<",Object(b.b)("inlineCode",{parentName:"p"},"void"),">"),Object(b.b)("h4",{id:"defined-in-4"},"Defined in"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/globalShortcut.ts#L95"},"globalShortcut.ts:95")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"unregisterall"},"unregisterAll"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"unregisterAll"),"(): ",Object(b.b)("inlineCode",{parentName:"p"},"Promise"),"<",Object(b.b)("inlineCode",{parentName:"p"},"void"),">"),Object(b.b)("p",null,"Unregisters all shortcuts registered by the application."),Object(b.b)("h4",{id:"returns-5"},"Returns"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"Promise"),"<",Object(b.b)("inlineCode",{parentName:"p"},"void"),">"),Object(b.b)("h4",{id:"defined-in-5"},"Defined in"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/globalShortcut.ts#L110"},"globalShortcut.ts:110")))}p.isMDXComponent=!0},454:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},b=Object.keys(e);for(n=0;n<b.length;n++)r=b[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)r=b[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,O=d["".concat(l,".").concat(u)]||d[u]||s[u]||b;return r?a.a.createElement(O,i(i({ref:t},c),{},{components:r})):a.a.createElement(O,i({ref:t},c))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=r.length,l=new Array(b);l[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<b;c++)l[c]=r[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);