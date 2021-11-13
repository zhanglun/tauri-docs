(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{275:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(3),l=(n(0),n(454)),r=n(476),o=n(459),c=n(477);const s={title:"Lockdown"},i={unversionedId:"usage/patterns/lockdown",id:"usage/patterns/lockdown",isDocsHomePage:!1,title:"Lockdown",description:"\u6613\u7528\u6027",source:"@site/docs/zh-hans/usage/patterns/lockdown.md",sourceDirName:"usage/patterns",slug:"/usage/patterns/lockdown",permalink:"/tauri-docs/docs/usage/patterns/lockdown",editUrl:"https://github.com/tauri-apps/tauri-docs/edit/dev/docs/zh-hans/usage/patterns/lockdown.md",version:"current",frontMatter:{title:"Lockdown"},sidebar:"docs",previous:{title:"\u4e91\u6865",permalink:"/tauri-docs/docs/usage/patterns/cloudbridge"},next:{title:"Multiwin",permalink:"/tauri-docs/docs/usage/patterns/multiwin"}},u=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u793a\u610f\u56fe",id:"\u793a\u610f\u56fe",children:[]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]}],d={toc:u};function b({components:e,...t}){return Object(l.b)("wrapper",Object(a.a)({},d,t,{components:e,mdxType:"MDXLayout"}),Object(l.b)("div",{className:"row"},Object(l.b)("div",{className:"col col--4"},Object(l.b)("table",null,Object(l.b)("tr",null,Object(l.b)("td",null,"\u6613\u7528\u6027"),Object(l.b)("td",null,Object(l.b)(r.a,{value:"2",mdxType:"Rater"}))),Object(l.b)("tr",null,Object(l.b)("td",null,"\u62d3\u5c55\u6027"),Object(l.b)("td",null,Object(l.b)(r.a,{value:"4",mdxType:"Rater"}))),Object(l.b)("tr",null,Object(l.b)("td",null,"\u6027\u80fd"),Object(l.b)("td",null,Object(l.b)(r.a,{value:"5",mdxType:"Rater"}))),Object(l.b)("tr",null,Object(l.b)("td",null,"\u5b89\u5168\u6027"),Object(l.b)("td",null,Object(l.b)(r.a,{value:"5",color:"#fff04d",mdxType:"Rater"}))))),Object(l.b)("div",{className:"col col--4 pattern-logo"},Object(l.b)("img",{src:Object(o.a)("img/patterns/Lockdown.png"),alt:"Lockdown"})),Object(l.b)("div",{className:"col col--4"},"\u4f18\u70b9",Object(l.b)("ul",null,Object(l.b)("li",null,"Highest \u5b89\u5168 rating"),Object(l.b)("li",null,"Elegant and powerful")),"\u7f3a\u70b9",Object(l.b)("ul",null,Object(l.b)("li",null,"Rust skills required"),Object(l.b)("li",null,"No remote resources")))),Object(l.b)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),Object(l.b)("p",null,"The Lockdown recipe is a minimal usage of the ",Object(l.b)("a",{parentName:"p",href:"/docs/usage/patterns/bridge"},"Bridge pattern"),", which only allows interaction between Rust and the Window via expiring JS Promise Closures that are injected into the Window by Rust and nulled as part of the callback."),Object(l.b)("h2",{id:"\u793a\u610f\u56fe"},"\u793a\u610f\u56fe"),Object(l.b)(c.b,{chart:`graph TD\n      H==>F\n      G-.->B\n      B--\x3eG\n      subgraph WEBVIEW\n      G--\x3eF\n      end\n      subgraph RUST\n      A--\x3eB\n      A==>H\n      end\n      A[Binary]\n      B[API:Event]\n      F[Window]\n      G((Promise Closure))\n      H{Bootstrap}\n      style RUST fill:${c.a.orange.light},stroke:${c.a.orange.dark},stroke-width:4px\n      style WEBVIEW fill:${c.a.blue.light},stroke:${c.a.blue.dark},stroke-width:4px`,mdxType:"Mermaid"}),Object(l.b)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(l.b)("p",null,"\u8fd9\u662f\u4f60\u9700\u8981\u5728\u4f60\u7684 tauri.conf.json \u4e2d\u6dfb\u52a0\u7684\u914d\u7f6e\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'"tauri": {\n  "allowlist": {}                  // all API endpoints are default false\n}\n')))}b.isMDXComponent=!0},476:function(e,t,n){"use strict";var a=n(0),l=n.n(a),r=n(455),o=n.n(r),c=n(64),s=n.n(c);const i=({backgroundColor:e})=>l.a.createElement("span",{style:{backgroundColor:e}});t.a=({value:e,color:t="#67d6ed"})=>{const n=[];for(let a=0;a<5;++a)n.push(l.a.createElement(i,{backgroundColor:a<e?t:"#759aa1"}));return l.a.createElement("span",{className:o()(s.a.rater)},n)}},477:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),l=n.n(a),r=n(511),o=n.n(r);o.a.initialize({startOnLoad:!0,theme:"neutral"});t.b=({chart:e})=>(Object(a.useEffect)((()=>{o.a.contentLoaded()}),[]),l.a.createElement("div",{className:"mermaid"},e));const c={blue:{light:"#abd0f9",dark:"#1D81EE"},orange:{light:"#fad3a9",dark:"#F28918"}}},517:function(e,t,n){var a={"./locale":474,"./locale.js":474};function l(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}l.keys=function(){return Object.keys(a)},l.resolve=r,e.exports=l,l.id=517}}]);