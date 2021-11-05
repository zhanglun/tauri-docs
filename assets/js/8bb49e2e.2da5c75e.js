(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{275:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(454)),l=n(476),c=n(459),i=n(477),s={title:"Lockdown"},u={unversionedId:"usage/patterns/lockdown",id:"usage/patterns/lockdown",isDocsHomePage:!1,title:"Lockdown",description:"Ease of Use",source:"@site/docs/zh-hans/usage/patterns/lockdown.md",sourceDirName:"usage/patterns",slug:"/usage/patterns/lockdown",permalink:"/zh-hans/docs/usage/patterns/lockdown",editUrl:"https://github.com/tauri-apps/tauri-docs/edit/dev/docs/zh-hans/usage/patterns/lockdown.md",version:"current",frontMatter:{title:"Lockdown"},sidebar:"docs",previous:{title:"Cloudbridge",permalink:"/zh-hans/docs/usage/patterns/cloudbridge"},next:{title:"Multiwin",permalink:"/zh-hans/docs/usage/patterns/multiwin"}},d=[{value:"Description",id:"description",children:[]},{value:"Diagram",id:"diagram",children:[]},{value:"Configuration",id:"configuration",children:[]}],b={toc:d};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"row"},Object(o.b)("div",{className:"col col--4"},Object(o.b)("table",null,Object(o.b)("tr",null,Object(o.b)("td",null,"Ease of Use"),Object(o.b)("td",null,Object(o.b)(l.a,{value:"2",mdxType:"Rater"}))),Object(o.b)("tr",null,Object(o.b)("td",null,"Extensibility"),Object(o.b)("td",null,Object(o.b)(l.a,{value:"4",mdxType:"Rater"}))),Object(o.b)("tr",null,Object(o.b)("td",null,"Performance"),Object(o.b)("td",null,Object(o.b)(l.a,{value:"5",mdxType:"Rater"}))),Object(o.b)("tr",null,Object(o.b)("td",null,"Security"),Object(o.b)("td",null,Object(o.b)(l.a,{value:"5",color:"#fff04d",mdxType:"Rater"}))))),Object(o.b)("div",{className:"col col--4 pattern-logo"},Object(o.b)("img",{src:Object(c.a)("img/patterns/Lockdown.png"),alt:"Lockdown"})),Object(o.b)("div",{className:"col col--4"},"Pros:",Object(o.b)("ul",null,Object(o.b)("li",null,"Highest security rating"),Object(o.b)("li",null,"Elegant and powerful")),"Cons:",Object(o.b)("ul",null,Object(o.b)("li",null,"Rust skills required"),Object(o.b)("li",null,"No remote resources")))),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"The Lockdown recipe is a minimal usage of the ",Object(o.b)("a",{parentName:"p",href:"/docs/usage/patterns/bridge"},"Bridge pattern"),", which only allows interaction between Rust and the Window via expiring JS Promise Closures that are injected into the Window by Rust and nulled as part of the callback."),Object(o.b)("h2",{id:"diagram"},"Diagram"),Object(o.b)(i.b,{chart:"graph TD\n      H==>F\n      G-.->B\n      B--\x3eG\n      subgraph WEBVIEW\n      G--\x3eF\n      end\n      subgraph RUST\n      A--\x3eB\n      A==>H\n      end\n      A[Binary]\n      B[API:Event]\n      F[Window]\n      G((Promise Closure))\n      H{Bootstrap}\n      style RUST fill:"+i.a.orange.light+",stroke:"+i.a.orange.dark+",stroke-width:4px\n      style WEBVIEW fill:"+i.a.blue.light+",stroke:"+i.a.blue.dark+",stroke-width:4px",mdxType:"Mermaid"}),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"Here's what you need to add to your tauri.conf.json file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'"tauri": {\n  "allowlist": {}                  // all API endpoints are default false\n}\n')))}p.isMDXComponent=!0},476:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(455),l=n.n(o),c=n(64),i=n.n(c);const s=({backgroundColor:e})=>r.a.createElement("span",{style:{backgroundColor:e}});t.a=({value:e,color:t="#67d6ed"})=>{const n=[];for(let a=0;a<5;++a)n.push(r.a.createElement(s,{backgroundColor:a<e?t:"#759aa1"}));return r.a.createElement("span",{className:l()(i.a.rater)},n)}},477:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n.n(a),o=n(511),l=n.n(o);l.a.initialize({startOnLoad:!0,theme:"neutral"});t.b=({chart:e})=>(Object(a.useEffect)((()=>{l.a.contentLoaded()}),[]),r.a.createElement("div",{className:"mermaid"},e));const c={blue:{light:"#abd0f9",dark:"#1D81EE"},orange:{light:"#fad3a9",dark:"#F28918"}}},517:function(e,t,n){var a={"./locale":474,"./locale.js":474};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=517}}]);