(window.webpackJsonp=window.webpackJsonp||[]).push([[366],{442:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(7),a=(n(0),n(454)),o={title:"Contributor Guide"},c={unversionedId:"usage/contributor-guide",id:"usage/contributor-guide",isDocsHomePage:!1,title:"Contributor Guide",description:"todo: make this friendlier and more complete",source:"@site/docs/zh-hans/usage/contributor-guide.md",sourceDirName:"usage",slug:"/usage/contributor-guide",permalink:"/zh-hans/docs/usage/contributor-guide",editUrl:"https://github.com/tauri-apps/tauri-docs/edit/dev/docs/zh-hans/usage/contributor-guide.md",version:"current",frontMatter:{title:"Contributor Guide"},sidebar:"docs",previous:{title:"Cross-Platform Compilation",permalink:"/zh-hans/docs/usage/ci-cd/cross-platform"},next:{title:"Configuration",permalink:"/zh-hans/docs/api/config"}},l=[{value:"Contribution Flow",id:"contribution-flow",children:[{value:"A Note About Contributions to the Rust Libraries",id:"a-note-about-contributions-to-the-rust-libraries",children:[]}]},{value:"Hands On Example",id:"hands-on-example",children:[]}],u={toc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"todo: make this friendlier and more complete"),Object(a.b)("p",null,"Tauri is a polyglot system that uses:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"git"),Object(a.b)("li",{parentName:"ul"},"Node.js"),Object(a.b)("li",{parentName:"ul"},"Rust"),Object(a.b)("li",{parentName:"ul"},"GitHub actions")),Object(a.b)("p",null,"It can be developed on macOS, Linux and Windows."),Object(a.b)("h2",{id:"contribution-flow"},"Contribution Flow"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"File an Issue"),Object(a.b)("li",{parentName:"ol"},"Fork the Repository"),Object(a.b)("li",{parentName:"ol"},"Make Your Changes"),Object(a.b)("li",{parentName:"ol"},"Make a PR")),Object(a.b)("h3",{id:"a-note-about-contributions-to-the-rust-libraries"},"A Note About Contributions to the Rust Libraries"),Object(a.b)("p",null,"When contributing to the Rust libraries ",Object(a.b)("inlineCode",{parentName:"p"},"tauri"),", ",Object(a.b)("inlineCode",{parentName:"p"},"tauri-api"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"tauri-updater"),"; you will want to setup an environment for RLS (the Rust Language Server). In the Tauri root directory, there is a ",Object(a.b)("inlineCode",{parentName:"p"},".scripts")," folder that contains a set of scripts to automate adding a couple temporary environment variables to your shell/terminal. These environment variables point to directories in the test fixture which will prevent RLS from crashing on compile-time. This is a necessary step for setting up a development environment for Tauri's Rust libraries."),Object(a.b)("h5",{id:"example-instructions"},Object(a.b)("em",{parentName:"h5"},"Example Instructions")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Navigate to the Tauri Root directory."),Object(a.b)("li",{parentName:"ol"},"Execute a script based on your Operating System from this folder: ",Object(a.b)("inlineCode",{parentName:"li"},".scripts/init_env.bat")," for Windows Cmd, ",Object(a.b)("inlineCode",{parentName:"li"},".scripts/init_env.ps1")," for Windows Powershell, ",Object(a.b)("inlineCode",{parentName:"li"},". .scripts/init_env.sh")," for Linux/macOS bash (note the first ",Object(a.b)("inlineCode",{parentName:"li"},".")," in this command)."),Object(a.b)("li",{parentName:"ol"},"Open your text editor/IDE from this shell/terminal.")),Object(a.b)("h2",{id:"hands-on-example"},"Hands On Example"),Object(a.b)("p",null,"Let's make a new example. That's a great way to learn. We are going to assume you are on a nixy type of environment like Linux or macOS and have all of your development dependencies like rust and node already sorted out."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},'git clone git@github.com:tauri-apps/tauri.git\ncd tauri/cli/tauri.js\nyarn\nmkdir ../../examples/vanillajs && cd "$_"\n')),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'  "tauri:source": "node ../../../cli/tauri.js/bin/tauri",\n')),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ini"},'  [dependencies.tauri]\n  path = "../../../../core/tauri"\n  features = [ "all-api" ]\n')))}s.isMDXComponent=!0},454:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||a;return n?i.a.createElement(m,c(c({ref:t},u),{},{components:n})):i.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);