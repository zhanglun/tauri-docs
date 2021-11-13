(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{213:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var i=n(3),a=(n(0),n(454));const r={id:"security",title:"Security"},o={unversionedId:"about/security",id:"about/security",isDocsHomePage:!1,title:"Security",description:"This guide seeks to explain the high level concepts and Security Features at the core of Tauri's design that make you, your apps and your users safer by default.",source:"@site/docs/zh-hans/about/security.md",sourceDirName:"about",slug:"/about/security",permalink:"/tauri-docs/docs/about/security",editUrl:"https://github.com/tauri-apps/tauri-docs/edit/dev/docs/zh-hans/about/security.md",version:"current",frontMatter:{id:"security",title:"Security"},sidebar:"about",previous:{title:"What is Tauri?",permalink:"/tauri-docs/docs/about/intro"},next:{title:"Governance",permalink:"/tauri-docs/docs/about/governance"}},s=[{value:"Security Researchers",id:"security-researchers",children:[]},{value:"No Server Required",id:"no-server-required",children:[]},{value:"Language Features of Rust",id:"language-features-of-rust",children:[]},{value:"Dynamic Ahead of Time Compilation (AOT)",id:"dynamic-ahead-of-time-compilation-aot",children:[]},{value:"Function Hardening",id:"function-hardening",children:[{value:"Functional ASLR",id:"functional-aslr",children:[]},{value:"Kamikaze Function Injection",id:"kamikaze-function-injection",children:[]},{value:"Bridge, don&#39;t serve",id:"bridge-dont-serve",children:[]},{value:"One Time Pad Tokenization and Hashing",id:"one-time-pad-tokenization-and-hashing",children:[]}]},{value:"System Features",id:"system-features",children:[{value:"Allowing API",id:"allowing-api",children:[]},{value:"Content Security Policy Management",id:"content-security-policy-management",children:[]},{value:"Decompilation is Difficult",id:"decompilation-is-difficult",children:[]}]},{value:"Ecosystem",id:"ecosystem",children:[{value:"Build Pipelines and Artifact Authenticity",id:"build-pipelines-and-artifact-authenticity",children:[]},{value:"Resilient PR and Approval Processes",id:"resilient-pr-and-approval-processes",children:[]}]},{value:"Future Work",id:"future-work",children:[{value:"Signed Binaries",id:"signed-binaries",children:[]},{value:"Post-Binary Analysis",id:"post-binary-analysis",children:[]},{value:"Post-Binary Enhancement",id:"post-binary-enhancement",children:[]},{value:"Audits",id:"audits",children:[]}]}],c={toc:s};function u({components:e,...t}){return Object(a.b)("wrapper",Object(i.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This guide seeks to explain the high level concepts and Security Features at the core of Tauri's design that make you, your apps and your users safer by default."),Object(a.b)("div",{className:"alert alert--info",role:"alert"},"Please note:",Object(a.b)("br",null),"While we take every opportunity to help you harden your application - there are always underlying threats like BIOS attacks, memory rowhammering and other operating system vulnerabilities that are constantly being discovered and (in the best cases) responsibly disclosed.",Object(a.b)("br",null),"Furthermore, there are many ways that development teams can cut corners and either leak sensitive information or leave doors wide open to any of a range of attacks. Security is a never-ending quest, and your users count on you to keep them safe.",Object(a.b)("br",null),"Therefore, we highly recommend that you take some time to consider the security ramifications of everything that your application does, especially in the context of running on the semi-hostile platform of end-user devices.",Object(a.b)("br",null),"If you need help or want a review, you are welcome to contact the Tauri team for security consultation."),Object(a.b)("h3",{id:"security-researchers"},"Security Researchers"),Object(a.b)("p",null,"If you feel that there is a security concern or issue with anything in Tauri, please do not publicly comment on your findings. Instead, reach out directly to our security team:"),Object(a.b)("blockquote",null,Object(a.b)("center",null,"security@tauri.studio")),Object(a.b)("p",null,"Although we do not currently have a budget for Security Bounties, in some cases we will consider rewarding responsible disclosure with our limited resources."),Object(a.b)("h2",{id:"no-server-required"},"No Server Required"),Object(a.b)("p",null,"Tauri enables you to construct an application that uses web-technology for the user interface without requiring you to use a server to communicate with the backend. Even if you used advanced techniques of dynamic imports and offload work to the backend, no traffic can be sniffed on TCP ports or external processes - because they just aren't there. This reduces not only the physical and virtual footprint of your final binary by a good deal, it also reduces the surface area of potential attack vectors by removing them from the equation."),Object(a.b)("h2",{id:"language-features-of-rust"},"Language Features of Rust"),Object(a.b)("p",null,"By turning to the programming language renowned for its memory-safety and speed, Tauri simply erases whole classes of conventional attacks. ",Object(a.b)("inlineCode",{parentName:"p"},"Use after free")," just isn't something that can happen with Tauri."),Object(a.b)("h2",{id:"dynamic-ahead-of-time-compilation-aot"},"Dynamic Ahead of Time Compilation (AOT)"),Object(a.b)("p",null,"This process of compilation happens several times during the bootstrapping phase of a Tauri app. By using our default dynamic Ahead of Time compiler, you can generate code references that are unique for every session and are still technically static code units."),Object(a.b)("h2",{id:"function-hardening"},"Function Hardening"),Object(a.b)("h3",{id:"functional-aslr"},"Functional ASLR"),Object(a.b)("p",null,"Functional address Space Layout Randomization techniques randomize function names at runtime and can implement OTP hashing so no two sessions are ever the same. We propose a novel type of function naming at boot time and optionally after every execution. Using a UID for each function pointer prevents static attacks."),Object(a.b)("h3",{id:"kamikaze-function-injection"},"Kamikaze Function Injection"),Object(a.b)("p",null,"This advanced type of fASLR using the ",Object(a.b)("inlineCode",{parentName:"p"},"EVENT")," API endpoint, is a promise wrapped in a closure (with randomized handle) that Rust inserts at runtime into the WebView, where its interface is locked within the promise resolution handler and is nulled after execution."),Object(a.b)("h3",{id:"bridge-dont-serve"},"Bridge, don't serve"),Object(a.b)("p",null,"Instead of passing potentially unsafe functions, an event bridge can be used to pass messages and commands to named brokers at each respective side of the application."),Object(a.b)("h3",{id:"one-time-pad-tokenization-and-hashing"},"One Time Pad Tokenization and Hashing"),Object(a.b)("p",null,"Hashing important messages with a OTP salt, you are able to encrypt messages between the user interface and the Rust backend. We are currently investigating the use of additional sources of entropy such as the amazing ",Object(a.b)("a",{parentName:"p",href:"https://13-37.org/en/shop/infinite-noise-trng/"},"Infinite Noise TRNG"),"."),Object(a.b)("h2",{id:"system-features"},"System Features"),Object(a.b)("h3",{id:"allowing-api"},"Allowing API"),Object(a.b)("p",null,"You have the ability to pick and choose which API functions are available to the UI and to Rust. If they are not enabled, the code will not be shipped with your app, which reduces binary size and attack surface. They are opt-in, so you have to consciously choose to progressively enhance your application."),Object(a.b)("h3",{id:"content-security-policy-management"},"Content Security Policy Management"),Object(a.b)("p",null,'Preventing unauthorized code execution for websites has long since been "resolved" by using CSPs. Tauri can inject CSPs into the index.html of the user interface, and when using a localhost server it will also send these headers to the UI or any other clients that connect with it.'),Object(a.b)("h3",{id:"decompilation-is-difficult"},"Decompilation is Difficult"),Object(a.b)("p",null,"This means that your apps cannot be easily decompiled as is the case with Electron ASAR files, which makes the process of reverse engineering your project much more time intensive and requires specialist training."),Object(a.b)("h2",{id:"ecosystem"},"Ecosystem"),Object(a.b)("h3",{id:"build-pipelines-and-artifact-authenticity"},"Build Pipelines and Artifact Authenticity"),Object(a.b)("p",null,"The process of releasing our source-code artifacts is highly automated, yet mandates kickoff and review from real humans. Our current release strategy uses a combination of Github Actions and IOTA Tangle publication"),Object(a.b)("h3",{id:"resilient-pr-and-approval-processes"},"Resilient PR and Approval Processes"),Object(a.b)("p",null,"Our WG-TECH reviews code changes, tags PRs with scope and make sure that everything stays up to date. And when its time to publish a new version, one of the maintainers tags a new release on master, which:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"validates core"),Object(a.b)("li",{parentName:"ul"},"runs smoke tests"),Object(a.b)("li",{parentName:"ul"},"audits security for crates and npm"),Object(a.b)("li",{parentName:"ul"},"generates changelogs"),Object(a.b)("li",{parentName:"ul"},"creates artifacts"),Object(a.b)("li",{parentName:"ul"},"publishes checksums to IOTA"),Object(a.b)("li",{parentName:"ul"},"creates a draft release")),Object(a.b)("p",null,"Then the maintainer reviews the release notes, edits if necessary - and a new release is forged."),Object(a.b)("h2",{id:"future-work"},"Future Work"),Object(a.b)("h3",{id:"signed-binaries"},"Signed Binaries"),Object(a.b)("p",null,"Because the entire project is shipped within a monolithic binary, code can be signed for all distributables. (Currently using external tooling, but we are actively working on making the bundler a one-stop-shop.) This makes it virtually impossible for hackers to change an installed Application without the operating system noticing. ",Object(a.b)("a",{parentName:"p",href:"https://github.com/electron/asar/issues/123"},"Reference")),Object(a.b)("h3",{id:"post-binary-analysis"},"Post-Binary Analysis"),Object(a.b)("p",null,"Use industrial-grade pentester-tooling (via our forthcoming Tauri-Frida GUI) to discover and fix security weaknesses in your final binaries."),Object(a.b)("h3",{id:"post-binary-enhancement"},"Post-Binary Enhancement"),Object(a.b)("p",null,"After the build is before the delivery, and Tauri will provide you with tools never seen before. Stay tuned!"),Object(a.b)("h3",{id:"audits"},"Audits"),Object(a.b)("p",null,"We are currently in the process of our first external audit. When complete, we will publish the results here."))}u.isMDXComponent=!0},454:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),p=i,b=d["".concat(o,".").concat(p)]||d[p]||h[p]||r;return n?a.a.createElement(b,s(s({ref:t},u),{},{components:n})):a.a.createElement(b,s({ref:t},u))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);