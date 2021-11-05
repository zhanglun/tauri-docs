(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(454)),i={id:"intro",title:"What is Tauri?"},s={unversionedId:"about/intro",id:"about/intro",isDocsHomePage:!1,title:"What is Tauri?",description:"Tauri is a toolkit that helps developers make applications for the major desktop platforms - using virtually any frontend framework in existence. The core is built with Rust and the CLI leverages Node.js making Tauri a genuinely polyglot approach to creating and maintaining great apps.",source:"@site/docs/en/about/intro.md",sourceDirName:"about",slug:"/about/intro",permalink:"/en/docs/about/intro",editUrl:"https://github.com/tauri-apps/tauri-docs/edit/dev/docs/en/about/intro.md",version:"current",frontMatter:{id:"intro",title:"What is Tauri?"},sidebar:"about",next:{title:"Security",permalink:"/en/docs/about/security"}},u=[{value:"Security First",id:"security-first",children:[]},{value:"Polyglots, not Silos",id:"polyglots-not-silos",children:[]},{value:"Honest Open Source",id:"honest-open-source",children:[]},{value:"The Future",id:"the-future",children:[]}],c={toc:u};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Tauri is a toolkit that helps developers make applications for the major desktop platforms - using virtually any frontend framework in existence. The core is built with Rust and the CLI leverages Node.js making Tauri a genuinely polyglot approach to creating and maintaining great apps."),Object(a.b)("p",null,"If you want to know more about the technical details, then please visit the ",Object(a.b)("a",{parentName:"p",href:"/docs/getting-started/intro"},"Introduction"),". If you want to know more about this project's philosophy - then keep reading."),Object(a.b)("div",{className:"videowrapper"},Object(a.b)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/UxTJeEbZX-0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(a.b)("h2",{id:"security-first"},"Security First"),Object(a.b)("p",null,"In today's world, every honest threat model assumes that the user's device has already been compromised. This puts app developers in a complicated situation, because if the device is already at risk, how can the software be trusted?"),Object(a.b)("p",null,"Defense in depth is the approach we've taken. We want you to be able to take every precaution possible to minimise the surface area you present to attackers. Tauri lets you choose which API endpoints to ship, whether or not you want a localhost server built into your app, and it even randomizes functional handles at runtime. These and other techniques form a secure baseline that empowers you and your users."),Object(a.b)("p",null,"Slowing down attackers by making static attacks crushingly difficult and isolating systems from one another is the name of the game. And if you are coming from the Electron ecosystem - rest assured - by default Tauri only ships binaries, not ASAR files."),Object(a.b)("p",null,"By choosing to build Tauri with security as a guiding force, we give you every opportunity to take a proactive security posture."),Object(a.b)("h2",{id:"polyglots-not-silos"},"Polyglots, not Silos"),Object(a.b)("p",null,"Most contemporary frameworks use a single language paradigm and are therefore trapped in a bubble of knowledge and idiom. This can work well for certain niche applications, but it also fosters a kind of tribalism."),Object(a.b)("p",null,"This can be seen in the way that the React, Angular and Vue development communities huddle on their stacks, ultimately breeding very little cross-pollination."),Object(a.b)("p",null,"This same situation can be seen in the Rust vs Node vs C++ battlefields, where hardliners take their stances and refuse to collaborate across communities."),Object(a.b)("p",null,"Today, Tauri uses Rust for the backend - but in the not too distant future, other backends like Go, Nim, Python, Csharp etc. will be possible. This is because we are maintaining the official Rust bindings to the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/webview"},"webview")," organisation and plan to let you switch out the backend for your needs. Since our API can be implemented in any language with C interop, full compliance is only a PR away."),Object(a.b)("h2",{id:"honest-open-source"},"Honest Open Source"),Object(a.b)("p",null,"None of this would make any sense without a community. Today software communities are amazing places where people help each other and make awesome things - open source is a very big part of that."),Object(a.b)("p",null,"Open source means different things to different people, but most will agree that it serves to support freedom. When software doesn't respect your rights, then it can seem unfair and potentially compromise your freedoms by operating in unethical ways."),Object(a.b)("p",null,'This is why we are proud that FLOSS advocates can build applications with Tauri that are "certifiably" open source and can be included in FSF endorsed GNU/Linux distributions.'),Object(a.b)("h2",{id:"the-future"},"The Future"),Object(a.b)("p",null,"Tauri's future depends on your involvement and contributions. Try it out, file issues, join a working group or make a donation - every contribution is important. Please, at any rate, do get in touch!!!"))}l.isMDXComponent=!0},454:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),l=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,h=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return n?o.a.createElement(h,s(s({ref:t},c),{},{components:n})):o.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);