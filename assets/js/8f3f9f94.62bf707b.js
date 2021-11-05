(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{283:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),i=n(7),o=(n(0),n(454)),a={title:"Interface: ClientOptions",sidebar_label:"ClientOptions",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/js/interfaces/http.ClientOptions",id:"api/js/interfaces/http.ClientOptions",isDocsHomePage:!1,title:"Interface: ClientOptions",description:"http.ClientOptions",source:"@site/docs/zh-hans/api/js/interfaces/http.ClientOptions.md",sourceDirName:"api/js/interfaces",slug:"/api/js/interfaces/http.ClientOptions",permalink:"/tauri-docs/docs/api/js/interfaces/http.ClientOptions",editUrl:null,version:"current",sidebar_label:"ClientOptions",frontMatter:{title:"Interface: ClientOptions",sidebar_label:"ClientOptions",custom_edit_url:null,hide_title:!0},sidebar:"docs",previous:{title:"Interface: TauriCommand",permalink:"/tauri-docs/docs/api/js/interfaces/helpers_tauri.TauriCommand"},next:{title:"Interface: HttpOptions",permalink:"/tauri-docs/docs/api/js/interfaces/http.HttpOptions"}},p=[{value:"Properties",id:"properties",children:[{value:"connectTimeout",id:"connecttimeout",children:[]},{value:"maxRedirections",id:"maxredirections",children:[]}]}],s={toc:p};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/tauri-docs/docs/api/js/modules/http"},"http"),".ClientOptions"),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"connecttimeout"},"connectTimeout"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"connectTimeout"),": ",Object(o.b)("inlineCode",{parentName:"p"},"number")),Object(o.b)("h4",{id:"defined-in"},"Defined in"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/http.ts#L31"},"http.ts:31")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"maxredirections"},"maxRedirections"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"maxRedirections"),": ",Object(o.b)("inlineCode",{parentName:"p"},"number")),Object(o.b)("h4",{id:"defined-in-1"},"Defined in"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/blob/40d08a6/tooling/api/src/http.ts#L30"},"http.ts:30")))}l.isMDXComponent=!0},454:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),l=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,f=u["".concat(a,".").concat(d)]||u[d]||b[d]||o;return n?i.a.createElement(f,c(c({ref:t},s),{},{components:n})):i.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);