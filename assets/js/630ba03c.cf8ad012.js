/*! For license information please see 630ba03c.cf8ad012.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{217:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var a=t(3),r=(t(0),t(454));t(458);const i={title:"Sidecar (Embedding External Binaries)",sidebar_label:"Sidecar"},o={unversionedId:"usage/guides/bundler/sidecar",id:"usage/guides/bundler/sidecar",isDocsHomePage:!1,title:"Sidecar (Embedding External Binaries)",description:"You may need to embed depending binaries in order to make your application work or to prevent users having to install additional dependencies (e.g. Node.js, Python, etc).",source:"@site/docs/zh-hans/usage/guides/bundler/sidecar.md",sourceDirName:"usage/guides/bundler",slug:"/usage/guides/bundler/sidecar",permalink:"/tauri-docs/docs/usage/guides/bundler/sidecar",editUrl:"https://github.com/tauri-apps/tauri-docs/edit/dev/docs/zh-hans/usage/guides/bundler/sidecar.md",version:"current",sidebar_label:"Sidecar",frontMatter:{title:"Sidecar (Embedding External Binaries)",sidebar_label:"Sidecar"},sidebar:"docs",previous:{title:"Anti Bloat",permalink:"/tauri-docs/docs/usage/guides/bundler/anti-bloat"},next:{title:"Debian packages",permalink:"/tauri-docs/docs/usage/guides/bundler/debian"}},c=[{value:"Running the sidecar binary on JavaScript",id:"running-the-sidecar-binary-on-javascript",children:[]},{value:"Running the sidecar binary on Rust",id:"running-the-sidecar-binary-on-rust",children:[]},{value:"Using Node.js on a sidecar",id:"using-nodejs-on-a-sidecar",children:[]}],s={toc:c};function l({components:e,...n}){return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"You may need to embed depending binaries in order to make your application work or to prevent users having to install additional dependencies (e.g. Node.js, Python, etc)."),Object(r.b)("p",null,"To bundle the binaries of your choice, you can add the ",Object(r.b)("inlineCode",{parentName:"p"},"externalBin")," property to the ",Object(r.b)("inlineCode",{parentName:"p"},"tauri > bundle")," object in your ",Object(r.b)("inlineCode",{parentName:"p"},"tauri.conf.json"),"."),Object(r.b)("p",null,"See more about tauri.conf.json configuration ",Object(r.b)("a",{href:"/docs/api/config#tauri.bundle"},"here"),"."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"externalBin")," expects a list of strings targeting binaries either with absolute or relative paths."),Object(r.b)("p",null,"Here is a sample to illustrate the configuration, this is not a complete ",Object(r.b)("inlineCode",{parentName:"p"},"tauri.conf.json")," file:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "tauri": {\n    "bundle": {\n      "externalBin": ["/absolute/path/to/app", "relative/path/to/binary", "bin/python"]\n    }\n  }\n}\n')),Object(r.b)("p",null,"A binary with the same name and a ",Object(r.b)("inlineCode",{parentName:"p"},"-$TARGET_TRIPLE")," suffix must exist on the specified path. For instance, ",Object(r.b)("inlineCode",{parentName:"p"},'"externalBin": ["bin/python"]')," requires a ",Object(r.b)("inlineCode",{parentName:"p"},"src-tauri/bin/python-x86_64-unknown-linux-gnu")," executable on Linux. You can find the current platform's target triple running the following command:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"RUSTC_BOOTSTRAP=1 rustc -Z unstable-options --print target-spec-json\n")),Object(r.b)("p",null,"Here's a Node.js script to append the target triple to a binary:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const execa = require('execa')\nconst fs = require('fs')\n\nlet extension = ''\nif (process.platform === 'win32') {\n  extension = '.exe'\n}\n\nasync function main() {\n  const rustInfo = (await execa('rustc', ['-vV'])).stdout\n  const targetTriple = /host: (\\S+)/g.exec(rustInfo)[1]\n  if (!targetTriple) {\n    console.error('Failed to determine platform target triple')\n  }\n  fs.renameSync(\n    `src-tauri/binaries/app${extension}`,\n    `src-tauri/binaries/app-${targetTriple}${extension}`\n  )\n}\n\nmain().catch((e) => {\n  throw e\n})\n\n")),Object(r.b)("h2",{id:"running-the-sidecar-binary-on-javascript"},"Running the sidecar binary on JavaScript"),Object(r.b)("p",null,"On the JavaScript code, import the ",Object(r.b)("inlineCode",{parentName:"p"},"Command")," class on the ",Object(r.b)("inlineCode",{parentName:"p"},"shell")," module and use the ",Object(r.b)("inlineCode",{parentName:"p"},"sidecar")," static method:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"import { Command } from '@tauri-apps/api/shell'\n// alternatively, use `window.__TAURI__.shell.Command`\n// `my-sidecar` is the value specified on `tauri.conf.json > tauri > bundle > externalBin`\nconst command = Command.sidecar('my-sidecar')\nconst output = await command.execute()\n")),Object(r.b)("h2",{id:"running-the-sidecar-binary-on-rust"},"Running the sidecar binary on Rust"),Object(r.b)("p",null,"On the Rust code, import the ",Object(r.b)("inlineCode",{parentName:"p"},"Command")," struct from the ",Object(r.b)("inlineCode",{parentName:"p"},"tauri::api::process")," module:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-rust"},'let (mut rx, mut child) = Command::new_sidecar("my-sidecar")\n  .expect("failed to create `my-sidecar` binary command")\n  .spawn()\n  .expect("Failed to spawn sidecar");\n\ntauri::async_runtime::spawn(async move {\n  // read events such as stdout\n  while let Some(event) = rx.recv().await {\n    if let CommandEvent::Stdout(line) = event {\n      window\n        .emit("message", Some(format!("\'{}\'", line)))\n        .expect("failed to emit event");\n      // write to stdin\n      child.write("message from Rust\\n".as_bytes()).unwrap();\n    }\n  }\n});\n')),Object(r.b)("h2",{id:"using-nodejs-on-a-sidecar"},"Using Node.js on a sidecar"),Object(r.b)("p",null,"The Tauri ",Object(r.b)("a",{parentName:"p",href:"https://github.com/tauri-apps/tauri/tree/dev/examples/sidecar"},"sidecar example")," demonstrates how to use the sidecar API to run a Node.js application on Tauri.\nIt compiles the Node.js code using ",Object(r.b)("a",{parentName:"p",href:"https://github.com/vercel/pkg"},"pkg")," and uses the scripts above to run it."))}l.isMDXComponent=!0},454:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),u=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=u(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),b=a,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return t?r.a.createElement(m,c(c({ref:n},l),{},{components:t})):r.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},455:function(e,n,t){var a;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)){if(a.length){var o=r.apply(null,a);o&&e.push(o)}}else if("object"===i)if(a.toString===Object.prototype.toString)for(var c in a)t.call(a,c)&&a[c]&&e.push(c);else e.push(a.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(n,[]))||(e.exports=a)}()},456:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(455),o=t.n(i);const c={danger:"var(--ifm-color-danger)",warning:"var(--ifm-color-warning)",info:"var(--ifm-color-info)",default:"var(--ifm-font-base-color)"};n.a=({title:e,className:n,color:t="default"})=>r.a.createElement("i",{className:o()("ti-"+e,n),style:{color:c[t]}})},458:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(455),o=t.n(i),c=t(456),s=t(56),l=t.n(s);n.a=({type:e="info",title:n,icon:t,children:a})=>r.a.createElement("div",{className:o()("alert","alert--"+e,l.a.alert),style:{marginBottom:"30px"},role:"alert"},t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{title:t,className:l.a.icon}),"\xa0"),r.a.createElement("div",{className:l.a.container},n&&r.a.createElement("span",{className:l.a.title},n),r.a.createElement("div",{className:l.a.content},a)))}}]);