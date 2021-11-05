(window.webpackJsonp=window.webpackJsonp||[]).push([[328],{405:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),o=(n(0),n(454)),a={title:"Interface: Monitor",sidebar_label:"Monitor",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/js/interfaces/window.Monitor",id:"api/js/interfaces/window.Monitor",isDocsHomePage:!1,title:"Interface: Monitor",description:"window.Monitor",source:"@site/docs/zh-hans/api/js/interfaces/window.Monitor.md",sourceDirName:"api/js/interfaces",slug:"/api/js/interfaces/window.Monitor",permalink:"/tauri-docs/docs/api/js/interfaces/window.Monitor",editUrl:null,version:"current",sidebar_label:"Monitor",frontMatter:{title:"Interface: Monitor",sidebar_label:"Monitor",custom_edit_url:null,hide_title:!0},sidebar:"docs",previous:{title:"Interface: UpdateStatusResult",permalink:"/tauri-docs/docs/api/js/interfaces/updater.UpdateStatusResult"},next:{title:"Interface: WindowOptions",permalink:"/tauri-docs/docs/api/js/interfaces/window.WindowOptions"}},l=[{value:"Properties",id:"properties",children:[{value:"name",id:"name",children:[]},{value:"position",id:"position",children:[]},{value:"scaleFactor",id:"scalefactor",children:[]},{value:"size",id:"size",children:[]}]}],s={toc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/tauri-docs/docs/api/js/modules/window"},"window"),".Monitor"),Object(o.b)("p",null,"Allows you to retrieve information about a given monitor."),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"name"},"name"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"name"),": ",Object(o.b)("inlineCode",{parentName:"p"},"null")," ","|"," ",Object(o.b)("inlineCode",{parentName:"p"},"string")),Object(o.b)("p",null,"Human-readable name of the monitor"),Object(o.b)("h4",{id:"defined-in"},"Defined in"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/window.ts#L94"},"window.ts:94")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"position"},"position"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"position"),": ",Object(o.b)("a",{parentName:"p",href:"/tauri-docs/docs/api/js/classes/window.PhysicalPosition"},Object(o.b)("inlineCode",{parentName:"a"},"PhysicalPosition"))),Object(o.b)("p",null,"the Top-left corner position of the monitor relative to the larger full screen area."),Object(o.b)("h4",{id:"defined-in-1"},"Defined in"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/window.ts#L98"},"window.ts:98")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"scalefactor"},"scaleFactor"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"scaleFactor"),": ",Object(o.b)("inlineCode",{parentName:"p"},"number")),Object(o.b)("p",null,"The scale factor that can be used to map physical pixels to logical pixels."),Object(o.b)("h4",{id:"defined-in-2"},"Defined in"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/window.ts#L100"},"window.ts:100")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"size"},"size"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"size"),": ",Object(o.b)("a",{parentName:"p",href:"/tauri-docs/docs/api/js/classes/window.PhysicalSize"},Object(o.b)("inlineCode",{parentName:"a"},"PhysicalSize"))),Object(o.b)("p",null,"The monitor's resolution."),Object(o.b)("h4",{id:"defined-in-3"},"Defined in"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/window.ts#L96"},"window.ts:96")))}p.isMDXComponent=!0},454:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,f=b["".concat(a,".").concat(d)]||b[d]||u[d]||o;return n?i.a.createElement(f,c(c({ref:t},s),{},{components:n})):i.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);