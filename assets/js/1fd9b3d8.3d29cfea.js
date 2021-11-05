(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(454)),l={title:"Module: helpers/event",sidebar_label:"helpers/event",custom_edit_url:null,hide_title:!0},o={unversionedId:"api/js/modules/helpers_event",id:"api/js/modules/helpers_event",isDocsHomePage:!1,title:"Module: helpers/event",description:"Functions",source:"@site/docs/en/api/js/modules/helpers_event.md",sourceDirName:"api/js/modules",slug:"/api/js/modules/helpers_event",permalink:"/en/docs/api/js/modules/helpers_event",editUrl:null,version:"current",sidebar_label:"helpers/event",frontMatter:{title:"Module: helpers/event",sidebar_label:"helpers/event",custom_edit_url:null,hide_title:!0},sidebar:"docs",previous:{title:"Module: globalShortcut",permalink:"/en/docs/api/js/modules/globalShortcut"},next:{title:"Module: helpers/os-check",permalink:"/en/docs/api/js/modules/helpers_os_check"}},c=[{value:"emit",id:"emit",children:[]}],p={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Functions"),Object(i.b)("h3",{id:"emit"},"emit"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"emit"),"(",Object(i.b)("inlineCode",{parentName:"p"},"event"),", ",Object(i.b)("inlineCode",{parentName:"p"},"windowLabel"),", ",Object(i.b)("inlineCode",{parentName:"p"},"payload?"),"): ",Object(i.b)("inlineCode",{parentName:"p"},"Promise"),"<",Object(i.b)("inlineCode",{parentName:"p"},"void"),">"),Object(i.b)("p",null,"Emits an event to the backend."),Object(i.b)("h4",{id:"parameters"},"Parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"event")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",{parentName:"tr",align:"left"},"Event name")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"windowLabel")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"WindowLabel")),Object(i.b)("td",{parentName:"tr",align:"left"},"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"payload?")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",{parentName:"tr",align:"left"},"-")))),Object(i.b)("h4",{id:"returns"},"Returns"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Promise"),"<",Object(i.b)("inlineCode",{parentName:"p"},"void"),">"),Object(i.b)("h4",{id:"defined-in"},"Defined in"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/helpers/event.ts#L18"},"helpers/event.ts:18")))}b.isMDXComponent=!0},454:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=b(n),u=r,m=d["".concat(l,".").concat(u)]||d[u]||s[u]||i;return n?a.a.createElement(m,o(o({ref:t},p),{},{components:n})):a.a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);