(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{285:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),l=(n(0),n(454)),i=n(476),s=n(459),o=n(477),c={title:"Bridge"},u={unversionedId:"usage/patterns/bridge",id:"usage/patterns/bridge",isDocsHomePage:!1,title:"Bridge",description:"Ease of Use",source:"@site/docs/zh-hans/usage/patterns/bridge.md",sourceDirName:"usage/patterns",slug:"/usage/patterns/bridge",permalink:"/tauri-docs/docs/usage/patterns/bridge",editUrl:"https://github.com/tauri-apps/tauri-docs/edit/dev/docs/zh-hans/usage/patterns/bridge.md",version:"current",frontMatter:{title:"Bridge"},sidebar:"docs",previous:{title:"Hermit",permalink:"/tauri-docs/docs/usage/patterns/hermit"},next:{title:"Cloudish",permalink:"/tauri-docs/docs/usage/patterns/cloudish"}},d=[{value:"Description",id:"description",children:[]},{value:"Diagram",id:"diagram",children:[]},{value:"Configuration",id:"configuration",children:[]}],b={toc:d};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("div",{className:"row"},Object(l.b)("div",{className:"col col--4"},Object(l.b)("table",null,Object(l.b)("tr",null,Object(l.b)("td",null,"Ease of Use"),Object(l.b)("td",null,Object(l.b)(i.a,{value:"3",mdxType:"Rater"}))),Object(l.b)("tr",null,Object(l.b)("td",null,"Extensibility"),Object(l.b)("td",null,Object(l.b)(i.a,{value:"5",mdxType:"Rater"}))),Object(l.b)("tr",null,Object(l.b)("td",null,"Performance"),Object(l.b)("td",null,Object(l.b)(i.a,{value:"4",mdxType:"Rater"}))),Object(l.b)("tr",null,Object(l.b)("td",null,"Security"),Object(l.b)("td",null,Object(l.b)(i.a,{value:"4",mdxType:"Rater"}))))),Object(l.b)("div",{className:"col col--4 pattern-logo"},Object(l.b)("img",{src:Object(s.a)("img/patterns/Bridge.png"),alt:"Bridge"})),Object(l.b)("div",{className:"col col--4"},"Pros:",Object(l.b)("ul",null,Object(l.b)("li",null,"Highly configurable"),Object(l.b)("li",null,"No Rust skills required")),"Cons:",Object(l.b)("ul",null,Object(l.b)("li",null,"Some WebAPIs unavailable"),Object(l.b)("li",null,"Challenge to implement")))),Object(l.b)("h2",{id:"description"},"Description"),Object(l.b)("p",null,"The Bridge recipe is a secure pattern where messages are passed between brokers via an implicit bridge using the API. It isolates functionality to scope and passes messages instead of functionality."),Object(l.b)("h2",{id:"diagram"},"Diagram"),Object(l.b)(o.b,{chart:"graph TD\n      H==>F\n      subgraph WEBVIEW\n      F-.-E\n      end\n      D--\x3eE\n      E--\x3eD\n      B--\x3eD\n      D--\x3eB\n      subgraph RUST\n      A==>H\n      A--\x3eB\n      B-.-C\n      B-.-G\n      end\n      A[Binary]\n      B{Rust Broker}\n      C[Subprocess 2]\n      G[Subprocess 1]\n      D(( API BRIDGE ))\n      E{JS Broker}\n      F[Window]\n      H{Bootstrap}\n      style D fill:#ccc,stroke:#333,stroke-width:4px,color:white\n      style RUST fill:"+o.a.orange.light+",stroke:"+o.a.orange.dark+",stroke-width:4px\n      style WEBVIEW fill:"+o.a.blue.light+",stroke:"+o.a.blue.dark+",stroke-width:4px",mdxType:"Mermaid"}),Object(l.b)("h2",{id:"configuration"},"Configuration"),Object(l.b)("p",null,"Here's what you need to add to your tauri.conf.json file:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'"tauri": {\n  "allowlist": {                  // all API values are default false\n    "all": false,                 // use this flag to enable all API features\n    "shell": {\n      "execute": false,             // enable application execution\n      "open": false,                // open link/path in the default app\n    },\n    "fs": {\n      "listFiles": false,           // list files in a directory\n      "readBinaryFile": false,      // read binary file from local filesystem\n      "readTextFile": false,        // read text file from local filesystem\n      "setTitle": false,            // set the window title\n      "writeFile": false            // write file to local filesystem\n    }\n  }\n}\n\n')))}p.isMDXComponent=!0},476:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(455),i=n.n(l),s=n(64),o=n.n(s);const c=({backgroundColor:e})=>r.a.createElement("span",{style:{backgroundColor:e}});t.a=({value:e,color:t="#67d6ed"})=>{const n=[];for(let a=0;a<5;++a)n.push(r.a.createElement(c,{backgroundColor:a<e?t:"#759aa1"}));return r.a.createElement("span",{className:i()(o.a.rater)},n)}},477:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0),r=n.n(a),l=n(511),i=n.n(l);i.a.initialize({startOnLoad:!0,theme:"neutral"});t.b=({chart:e})=>(Object(a.useEffect)((()=>{i.a.contentLoaded()}),[]),r.a.createElement("div",{className:"mermaid"},e));const s={blue:{light:"#abd0f9",dark:"#1D81EE"},orange:{light:"#fad3a9",dark:"#F28918"}}},517:function(e,t,n){var a={"./locale":474,"./locale.js":474};function r(e){var t=l(e);return n(t)}function l(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=l,e.exports=r,r.id=517}}]);