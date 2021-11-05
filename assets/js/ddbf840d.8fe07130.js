(window.webpackJsonp=window.webpackJsonp||[]).push([[317],{394:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(454)),l={title:"Module: dialog",sidebar_label:"dialog",custom_edit_url:null,hide_title:!0},o={unversionedId:"api/js/modules/dialog",id:"api/js/modules/dialog",isDocsHomePage:!1,title:"Module: dialog",description:"Native system dialogs for opening and saving files.",source:"@site/docs/en/api/js/modules/dialog.md",sourceDirName:"api/js/modules",slug:"/api/js/modules/dialog",permalink:"/en/docs/api/js/modules/dialog",editUrl:null,version:"current",sidebar_label:"dialog",frontMatter:{title:"Module: dialog",sidebar_label:"dialog",custom_edit_url:null,hide_title:!0},sidebar:"docs",previous:{title:"Module: clipboard",permalink:"/en/docs/api/js/modules/clipboard"},next:{title:"Module: event",permalink:"/en/docs/api/js/modules/event"}},b=[{value:"Interfaces",id:"interfaces",children:[]},{value:"Functions",id:"functions",children:[{value:"open",id:"open",children:[]},{value:"save",id:"save",children:[]}]}],c={toc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Native system dialogs for opening and saving files."),Object(i.b)("p",null,"This package is also accessible with ",Object(i.b)("inlineCode",{parentName:"p"},"window.__TAURI__.dialog")," when ",Object(i.b)("inlineCode",{parentName:"p"},"tauri.conf.json > build > withGlobalTauri")," is set to true."),Object(i.b)("p",null,"The APIs must be allowlisted on ",Object(i.b)("inlineCode",{parentName:"p"},"tauri.conf.json"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "tauri": {\n    "allowlist": {\n      "dialog": {\n        "all": true, // enable all dialog APIs\n        "open": true, // enable file open API\n        "save": true // enable file save API\n      }\n    }\n  }\n}\n')),Object(i.b)("p",null,"It is recommended to allowlist only the APIs you use for optimal bundle size and security."),Object(i.b)("h2",{id:"interfaces"},"Interfaces"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/en/docs/api/js/interfaces/dialog.DialogFilter"},"DialogFilter")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/en/docs/api/js/interfaces/dialog.OpenDialogOptions"},"OpenDialogOptions")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/en/docs/api/js/interfaces/dialog.SaveDialogOptions"},"SaveDialogOptions"))),Object(i.b)("h2",{id:"functions"},"Functions"),Object(i.b)("h3",{id:"open"},"open"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"open"),"(",Object(i.b)("inlineCode",{parentName:"p"},"options?"),"): ",Object(i.b)("inlineCode",{parentName:"p"},"Promise"),"<",Object(i.b)("inlineCode",{parentName:"p"},"string")," ","|"," ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"[]",">"),Object(i.b)("p",null,"Open a file/directory selection dialog"),Object(i.b)("h4",{id:"parameters"},"Parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"options")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/en/docs/api/js/interfaces/dialog.OpenDialogOptions"},Object(i.b)("inlineCode",{parentName:"a"},"OpenDialogOptions")))))),Object(i.b)("h4",{id:"returns"},"Returns"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Promise"),"<",Object(i.b)("inlineCode",{parentName:"p"},"string")," ","|"," ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"[]",">"),Object(i.b)("p",null,"A promise resolving to the selected path(s)"),Object(i.b)("h4",{id:"defined-in"},"Defined in"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/dialog.ts#L73"},"dialog.ts:73")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"save"},"save"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"save"),"(",Object(i.b)("inlineCode",{parentName:"p"},"options?"),"): ",Object(i.b)("inlineCode",{parentName:"p"},"Promise"),"<",Object(i.b)("inlineCode",{parentName:"p"},"string"),">"),Object(i.b)("p",null,"Open a file/directory save dialog."),Object(i.b)("h4",{id:"parameters-1"},"Parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"options")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/en/docs/api/js/interfaces/dialog.SaveDialogOptions"},Object(i.b)("inlineCode",{parentName:"a"},"SaveDialogOptions")))))),Object(i.b)("h4",{id:"returns-1"},"Returns"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Promise"),"<",Object(i.b)("inlineCode",{parentName:"p"},"string"),">"),Object(i.b)("p",null,"A promise resolving to the selected path."),Object(i.b)("h4",{id:"defined-in-1"},"Defined in"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/dialog.ts#L94"},"dialog.ts:94")))}p.isMDXComponent=!0},454:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,O=s["".concat(l,".").concat(u)]||s[u]||d[u]||i;return n?r.a.createElement(O,o(o({ref:t},c),{},{components:n})):r.a.createElement(O,o({ref:t},c))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);