(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(454)),o={title:"Module: process",sidebar_label:"process",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/js/modules/process",id:"api/js/modules/process",isDocsHomePage:!1,title:"Module: process",description:"Functions",source:"@site/docs/en/api/js/modules/process.md",sourceDirName:"api/js/modules",slug:"/api/js/modules/process",permalink:"/en/docs/api/js/modules/process",editUrl:null,version:"current",sidebar_label:"process",frontMatter:{title:"Module: process",sidebar_label:"process",custom_edit_url:null,hide_title:!0},sidebar:"docs",previous:{title:"Module: path",permalink:"/en/docs/api/js/modules/path"},next:{title:"Module: shell",permalink:"/en/docs/api/js/modules/shell"}},l=[{value:"exit",id:"exit",children:[]},{value:"relaunch",id:"relaunch",children:[]}],p={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Functions"),Object(i.b)("h3",{id:"exit"},"exit"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"exit"),"(",Object(i.b)("inlineCode",{parentName:"p"},"exitCode?"),"): ",Object(i.b)("inlineCode",{parentName:"p"},"Promise"),"<",Object(i.b)("inlineCode",{parentName:"p"},"void"),">"),Object(i.b)("p",null,"Exits immediately with the given ",Object(i.b)("inlineCode",{parentName:"p"},"exitCode"),"."),Object(i.b)("h4",{id:"parameters"},"Parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Default value"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"exitCode")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"number")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"0")),Object(i.b)("td",{parentName:"tr",align:"left"},"The exit code to use.")))),Object(i.b)("h4",{id:"returns"},"Returns"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Promise"),"<",Object(i.b)("inlineCode",{parentName:"p"},"void"),">"),Object(i.b)("p",null,"A promise indicating the success or failure of the operation."),Object(i.b)("h4",{id:"defined-in"},"Defined in"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/process.ts#L20"},"process.ts:20")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"relaunch"},"relaunch"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"relaunch"),"(): ",Object(i.b)("inlineCode",{parentName:"p"},"Promise"),"<",Object(i.b)("inlineCode",{parentName:"p"},"void"),">"),Object(i.b)("p",null,"Exits the current instance of the app then relaunches it."),Object(i.b)("h4",{id:"returns-1"},"Returns"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Promise"),"<",Object(i.b)("inlineCode",{parentName:"p"},"void"),">"),Object(i.b)("p",null,"A promise indicating the success or failure of the operation."),Object(i.b)("h4",{id:"defined-in-1"},"Defined in"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/process.ts#L35"},"process.ts:35")))}b.isMDXComponent=!0},454:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),d=r,m=s["".concat(o,".").concat(d)]||s[d]||u[d]||i;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);