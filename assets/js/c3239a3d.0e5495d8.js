(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{358:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return o}));var a=n(3),r=(n(0),n(454));const i={title:"Module: tauri",sidebar_label:"tauri",custom_edit_url:null,hide_title:!0},b={unversionedId:"api/js/modules/tauri",id:"api/js/modules/tauri",isDocsHomePage:!1,title:"Module: tauri",description:"Invoke your custom commands.",source:"@site/docs/zh-hans/api/js/modules/tauri.md",sourceDirName:"api/js/modules",slug:"/api/js/modules/tauri",permalink:"/tauri-docs/docs/api/js/modules/tauri",editUrl:null,version:"current",sidebar_label:"tauri",frontMatter:{title:"Module: tauri",sidebar_label:"tauri",custom_edit_url:null,hide_title:!0},sidebar:"docs",previous:{title:"Module: shell",permalink:"/tauri-docs/docs/api/js/modules/shell"},next:{title:"Module: updater",permalink:"/tauri-docs/docs/api/js/modules/updater"}},l=[{value:"Interfaces",id:"interfaces",children:[]},{value:"Functions",id:"functions",children:[{value:"convertFileSrc",id:"convertfilesrc",children:[]},{value:"invoke",id:"invoke",children:[]},{value:"transformCallback",id:"transformcallback",children:[]}]}],c={toc:l};function o({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Invoke your custom commands."),Object(r.b)("p",null,"This package is also accessible with ",Object(r.b)("inlineCode",{parentName:"p"},"window.__TAURI__.tauri")," when ",Object(r.b)("inlineCode",{parentName:"p"},"tauri.conf.json > build > withGlobalTauri")," is set to true."),Object(r.b)("h2",{id:"interfaces"},"Interfaces"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/tauri-docs/docs/api/js/interfaces/tauri.InvokeArgs"},"InvokeArgs"))),Object(r.b)("h2",{id:"functions"},"Functions"),Object(r.b)("h3",{id:"convertfilesrc"},"convertFileSrc"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"convertFileSrc"),"(",Object(r.b)("inlineCode",{parentName:"p"},"filePath"),"): ",Object(r.b)("inlineCode",{parentName:"p"},"string")),Object(r.b)("p",null,"Convert a device file path to an URL that can be loaded by the webview.\nNote that ",Object(r.b)("inlineCode",{parentName:"p"},"asset:")," must be allowed on the ",Object(r.b)("inlineCode",{parentName:"p"},"csp")," value configured on ",Object(r.b)("inlineCode",{parentName:"p"},"tauri.conf.json"),"."),Object(r.b)("h4",{id:"parameters"},"Parameters"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"),Object(r.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"filePath")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",{parentName:"tr",align:"left"},"the file path. On Windows, the drive name must be omitted, i.e. using ",Object(r.b)("inlineCode",{parentName:"td"},"/Users/user/file.png")," instead of ",Object(r.b)("inlineCode",{parentName:"td"},"C:/Users/user/file.png"),".")))),Object(r.b)("h4",{id:"returns"},"Returns"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"string")),Object(r.b)("p",null,"the URL that can be used as source on the webview"),Object(r.b)("h4",{id:"defined-in"},"Defined in"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/tauri.ts#L102"},"tauri.ts:102")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"invoke"},"invoke"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"invoke"),"<",Object(r.b)("inlineCode",{parentName:"p"},"T"),">","(",Object(r.b)("inlineCode",{parentName:"p"},"cmd"),", ",Object(r.b)("inlineCode",{parentName:"p"},"args?"),"): ",Object(r.b)("inlineCode",{parentName:"p"},"Promise"),"<",Object(r.b)("inlineCode",{parentName:"p"},"T"),">"),Object(r.b)("p",null,"Sends a message to the backend."),Object(r.b)("h4",{id:"type-parameters"},"Type parameters"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"T"))))),Object(r.b)("h4",{id:"parameters-1"},"Parameters"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"),Object(r.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"cmd")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",{parentName:"tr",align:"left"},"The command name.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"args")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"/tauri-docs/docs/api/js/interfaces/tauri.InvokeArgs"},Object(r.b)("inlineCode",{parentName:"a"},"InvokeArgs"))),Object(r.b)("td",{parentName:"tr",align:"left"},"The optional arguments to pass to the command.")))),Object(r.b)("h4",{id:"returns-1"},"Returns"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Promise"),"<",Object(r.b)("inlineCode",{parentName:"p"},"T"),">"),Object(r.b)("p",null,"A promise resolving or rejecting to the backend response."),Object(r.b)("h4",{id:"defined-in-1"},"Defined in"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/tauri.ts#L74"},"tauri.ts:74")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"transformcallback"},"transformCallback"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"transformCallback"),"(",Object(r.b)("inlineCode",{parentName:"p"},"callback?"),", ",Object(r.b)("inlineCode",{parentName:"p"},"once?"),"): ",Object(r.b)("inlineCode",{parentName:"p"},"string")),Object(r.b)("p",null,"Transforms a callback function to a string identifier that can be passed to the backend.\nThe backend uses the identifier to ",Object(r.b)("inlineCode",{parentName:"p"},"eval()")," the callback."),Object(r.b)("h4",{id:"parameters-2"},"Parameters"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"),Object(r.b)("th",{parentName:"tr",align:"left"},"Default value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"callback?")),Object(r.b)("td",{parentName:"tr",align:"left"},"(",Object(r.b)("inlineCode",{parentName:"td"},"response"),": ",Object(r.b)("inlineCode",{parentName:"td"},"any"),") => ",Object(r.b)("inlineCode",{parentName:"td"},"void")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"undefined"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"once")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"false"))))),Object(r.b)("h4",{id:"returns-2"},"Returns"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"string")),Object(r.b)("p",null,"A unique identifier associated with the callback function."),Object(r.b)("h4",{id:"defined-in-2"},"Defined in"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/tauri.ts#L41"},"tauri.ts:41")))}o.isMDXComponent=!0},454:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(b,".").concat(u)]||d[u]||s[u]||i;return n?r.a.createElement(m,l(l({ref:t},o),{},{components:n})):r.a.createElement(m,l({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,b=new Array(i);b[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,b[1]=l;for(var o=2;o<i;o++)b[o]=n[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);