/*! For license information please see a2da5004.7ce81572.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{314:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),i=(n(0),n(454)),o=n(458),s=n(468),c=n(469),l={title:"WebdriverIO"},p={unversionedId:"usage/guides/webdriver/example/webdriverio",id:"usage/guides/webdriver/example/webdriverio",isDocsHomePage:!1,title:"WebdriverIO",description:"This [WebdriverIO] guide expects you to have already gone through the [example Application setup] in order to follow",source:"@site/docs/zh-hans/usage/guides/webdriver/example/webdriverio.md",sourceDirName:"usage/guides/webdriver/example",slug:"/usage/guides/webdriver/example/webdriverio",permalink:"/zh-hans/docs/usage/guides/webdriver/example/webdriverio",editUrl:"https://github.com/tauri-apps/tauri-docs/edit/dev/docs/zh-hans/usage/guides/webdriver/example/webdriverio.md",version:"current",frontMatter:{title:"WebdriverIO"},sidebar:"docs",previous:{title:"Setup Example",permalink:"/zh-hans/docs/usage/guides/webdriver/example/setup"},next:{title:"Selenium",permalink:"/zh-hans/docs/usage/guides/webdriver/example/selenium"}},u=[{value:"Create a Directory for the Tests",id:"create-a-directory-for-the-tests",children:[]},{value:"Initializing a WebdriverIO Project",id:"initializing-a-webdriverio-project",children:[]},{value:"Config",id:"config",children:[]},{value:"Spec",id:"spec",children:[]},{value:"Running the Test Suite",id:"running-the-test-suite",children:[]}],b={toc:u};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(o.a,{title:"Example Application",type:"info",icon:"info-alt",mdxType:"Alert"},Object(i.b)("p",null,"This ",Object(i.b)("a",{parentName:"p",href:"https://webdriver.io/"},"WebdriverIO")," guide expects you to have already gone through the ",Object(i.b)("a",{parentName:"p",href:"setup"},"example Application setup")," in order to follow\nstep-by-step. The general information may still be useful otherwise.")),Object(i.b)("p",null,"This WebDriver testing example will use ",Object(i.b)("a",{parentName:"p",href:"https://webdriver.io/"},"WebdriverIO")," and its testing suite. It is expected to already have Node.js\ninstalled, along with ",Object(i.b)("inlineCode",{parentName:"p"},"npm")," or ",Object(i.b)("inlineCode",{parentName:"p"},"yarn")," although the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/chippers/hello_tauri"},"finished example project")," uses ",Object(i.b)("inlineCode",{parentName:"p"},"yarn"),"."),Object(i.b)("h2",{id:"create-a-directory-for-the-tests"},"Create a Directory for the Tests"),Object(i.b)("p",null,"Let's start off by creating a space in our project to write these tests. We are going to be using a nested directory for\nthis example project as we will later also go over other frameworks, but typically you will only need to use one. Create\nthe directory we will use with ",Object(i.b)("inlineCode",{parentName:"p"},"mkdir -p webdriver/webdriverio"),". The rest of this guide will assume you are inside the\n",Object(i.b)("inlineCode",{parentName:"p"},"webdriver/webdriverio")," directory."),Object(i.b)("h2",{id:"initializing-a-webdriverio-project"},"Initializing a WebdriverIO Project"),Object(i.b)("p",null,"We will be using a pre-existing ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," to bootstrap this test suite because we have already chosen specific\n",Object(i.b)("a",{parentName:"p",href:"https://webdriver.io/"},"WebdriverIO")," config options and want to showcase a simple working solution. The bottom of this section has a collapsed\nguide on how to set it up from scratch."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "webdriverio",\n  "version": "1.0.0",\n  "private": true,\n  "scripts": {\n    "test": "wdio run wdio.conf.js"\n  },\n  "dependencies": {\n    "@wdio/cli": "^7.9.1"\n  },\n  "devDependencies": {\n    "@wdio/local-runner": "^7.9.1",\n    "@wdio/mocha-framework": "^7.9.1",\n    "@wdio/spec-reporter": "^7.9.0"\n  }\n}\n')),Object(i.b)("p",null,"We have a script which runs a ",Object(i.b)("a",{parentName:"p",href:"https://webdriver.io/"},"WebdriverIO")," config as a test suite exposed as the ",Object(i.b)("inlineCode",{parentName:"p"},"test")," command. We also have various\ndependencies that were added by the ",Object(i.b)("inlineCode",{parentName:"p"},"@wdio/cli")," command when we first set it up. In short, these dependencies are for\nthe most simple setup using a local WebDriver runner, ",Object(i.b)("a",{parentName:"p",href:"https://mochajs.org/"},"Mocha")," as the test framework, and a simple Spec Reporter."),Object(i.b)("details",null,Object(i.b)("summary",null,"Click me if you want to see how to set a project up from scratch"),Object(i.b)("p",null,"The CLI is interactive, and you may choose the tools to work with yourself. Note that you will likely diverge from\nthe rest of the guide, and need to set up the differences yourself."),Object(i.b)("p",null,"Let's add the ",Object(i.b)("a",{parentName:"p",href:"https://webdriver.io/"},"WebdriverIO")," CLI to this npm project."),Object(i.b)(s.a,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"npm install @wdio/cli\n"))),Object(i.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"yarn add @wdio/cli\n")))),Object(i.b)("p",null,"To then run the interactive config command to set up a ",Object(i.b)("a",{parentName:"p",href:"https://webdriver.io/"},"WebdriverIO")," test suite, you can then run:"),Object(i.b)(s.a,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"npx wdio config\n"))),Object(i.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"yarn wdio config\n"))))),Object(i.b)("h2",{id:"config"},"Config"),Object(i.b)("p",null,"You may have noticed that the ",Object(i.b)("inlineCode",{parentName:"p"},"test")," script in our ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," mentions a file ",Object(i.b)("inlineCode",{parentName:"p"},"wdio.conf.js"),". That's the ",Object(i.b)("a",{parentName:"p",href:"https://webdriver.io/"},"WebdriverIO"),"\nconfig file which controls most aspects of our testing suite."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"wdio.conf.js"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'const os = require("os");\nconst path = require("path");\nconst { spawn, spawnSync } = require("child_process");\n\n// keep track of the `tauri-driver` child process\nlet tauriDriver;\n\nexports.config = {\n  specs: ["./test/specs/**/*.js"],\n  maxInstances: 1,\n  capabilities: [\n    {\n      maxInstances: 1,\n      "tauri:options": {\n        application: "../../target/release/hello-tauri-webdriver",\n      },\n    },\n  ],\n  reporters: ["spec"],\n  framework: "mocha",\n  mochaOpts: {\n    ui: "bdd",\n    timeout: 60000,\n  },\n\n  // ensure the rust project is built since we expect this binary to exist for the webdriver sessions\n  onPrepare: () => spawnSync("cargo", ["build", "--release"]),\n\n  // ensure we are running `tauri-driver` before the session starts so that we can proxy the webdriver requests\n  beforeSession: () =>\n    (tauriDriver = spawn(\n      path.resolve(os.homedir(), ".cargo", "bin", "tauri-driver"),\n      [],\n      { stdio: [null, process.stdout, process.stderr] }\n    )),\n\n  // clean up the `tauri-driver` process we spawned at the start of the session\n  afterSession: () => tauriDriver.kill(),\n};\n')),Object(i.b)("p",null,"If you are interested in the properties on ",Object(i.b)("inlineCode",{parentName:"p"},"exports.config")," object, then I ",Object(i.b)("a",{parentName:"p",href:"(https://webdriver.io/docs/configurationfile)"},"suggest reading the documentation")," for it.\nFor non-WDIO specific items, there are comments explaining why we are running commands in ",Object(i.b)("inlineCode",{parentName:"p"},"onPrepare"),", ",Object(i.b)("inlineCode",{parentName:"p"},"beforeSession"),",\nand ",Object(i.b)("inlineCode",{parentName:"p"},"afterSession"),". We also have our specs set to ",Object(i.b)("inlineCode",{parentName:"p"},'"./test/specs/**/*.js"'),", so let's create a spec now."),Object(i.b)("h2",{id:"spec"},"Spec"),Object(i.b)("p",null,"A spec contains the code that is testing your actual application. The test runner will load these specs and automatically\nrun them as it sees fit. Let's create our spec now in the directory we specified."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"test/specs/example.e2e.js"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'// calculates the luma from a hex color `#abcdef`\nfunction luma(hex) {\n  if (hex.startsWith("#")) {\n    hex = hex.substring(1);\n  }\n\n  const rgb = parseInt(hex, 16);\n  const r = (rgb >> 16) & 0xff;\n  const g = (rgb >> 8) & 0xff;\n  const b = (rgb >> 0) & 0xff;\n  return  0.2126 * r + 0.7152 * g + 0.0722 * b;\n}\n\ndescribe("Hello Tauri", () => {\n  it("should be cordial", async () => {\n    const header = await $("body > h1");\n    const text = await header.getText();\n    expect(text).toMatch(/^[hH]ello/);\n  });\n\n  it("should be excited", async () => {\n    const header = await $("body > h1");\n    const text = await header.getText();\n    expect(text).toMatch(/!$/);\n  });\n\n  it("should be easy on the eyes", async () => {\n    const body = await $("body");\n    const backgroundColor = await body.getCSSProperty("background-color");\n    expect(luma(backgroundColor.parsed.hex)).toBeLessThan(100);\n  });\n});\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"luma")," function on top is just a helper function for one of our tests and is not related to the actual testing of\nthe application. If you are familiar with other testing frameworks, you may notice similar functions being exposed that\nare used such as ",Object(i.b)("inlineCode",{parentName:"p"},"describe"),", ",Object(i.b)("inlineCode",{parentName:"p"},"it"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"expect"),". The other APIs, such as items like ",Object(i.b)("inlineCode",{parentName:"p"},"$")," and the methods it exposes is\ncovered by the ",Object(i.b)("a",{parentName:"p",href:"https://webdriver.io/docs/api"},"WebdriverIO API docs"),"."),Object(i.b)("h2",{id:"running-the-test-suite"},"Running the Test Suite"),Object(i.b)("p",null,"Now that we are all set up with a config and a spec, let's run it!"),Object(i.b)(s.a,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"npm test\n"))),Object(i.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"yarn test\n")))),Object(i.b)("p",null,"We should see output the following output:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},'\u279c  webdriverio git:(main) \u2717 yarn test\nyarn run v1.22.11\n$ wdio run wdio.conf.js\n\nExecution of 1 workers started at 2021-08-17T08:06:10.279Z\n\n[0-0] RUNNING in undefined - /test/specs/example.e2e.js\n[0-0] PASSED in undefined - /test/specs/example.e2e.js\n\n "spec" Reporter:\n------------------------------------------------------------------\n[wry 0.12.1 linux #0-0] Running: wry (v0.12.1) on linux\n[wry 0.12.1 linux #0-0] Session ID: 81e0107b-4d38-4eed-9b10-ee80ca47bb83\n[wry 0.12.1 linux #0-0]\n[wry 0.12.1 linux #0-0] \xbb /test/specs/example.e2e.js\n[wry 0.12.1 linux #0-0] Hello Tauri\n[wry 0.12.1 linux #0-0]    \u2713 should be cordial\n[wry 0.12.1 linux #0-0]    \u2713 should be excited\n[wry 0.12.1 linux #0-0]    \u2713 should be easy on the eyes\n[wry 0.12.1 linux #0-0]\n[wry 0.12.1 linux #0-0] 3 passing (244ms)\n\n\nSpec Files:  1 passed, 1 total (100% completed) in 00:00:01\n\nDone in 1.98s.\n')),Object(i.b)("p",null,"We see the Spec Reporter tell us that all 3 tests from the ",Object(i.b)("inlineCode",{parentName:"p"},"test/specs/example.e2e.js")," file, along with the final report\n",Object(i.b)("inlineCode",{parentName:"p"},"Spec Files:\t 1 passed, 1 total (100% completed) in 00:00:01"),"."),Object(i.b)("p",null,"Using the ",Object(i.b)("a",{parentName:"p",href:"https://webdriver.io/"},"WebdriverIO")," test suite, we just easily enabled e2e testing for our Tauri application from just a few lines\nof configuration and a single command to run it! Even better, we didn't have to modify the application at all."))}d.isMDXComponent=!0},454:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},455:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)){if(a.length){var o=r.apply(null,a);o&&e.push(o)}}else if("object"===i)if(a.toString===Object.prototype.toString)for(var s in a)n.call(a,s)&&a[s]&&e.push(s);else e.push(a.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},456:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(455),o=n.n(i);const s={danger:"var(--ifm-color-danger)",warning:"var(--ifm-color-warning)",info:"var(--ifm-color-info)",default:"var(--ifm-font-base-color)"};t.a=({title:e,className:t,color:n="default"})=>r.a.createElement("i",{className:o()("ti-"+e,t),style:{color:s[n]}})},457:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},458:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(455),o=n.n(i),s=n(456),c=n(56),l=n.n(c);t.a=({type:e="info",title:t,icon:n,children:a})=>r.a.createElement("div",{className:o()("alert","alert--"+e,l.a.alert),style:{marginBottom:"30px"},role:"alert"},n&&r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{title:n,className:l.a.icon}),"\xa0"),r.a.createElement("div",{className:l.a.container},t&&r.a.createElement("span",{className:l.a.title},t),r.a.createElement("div",{className:l.a.content},a)))},464:function(e,t,n){"use strict";var a=n(0),r=n(465);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},465:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},468:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(464),o=n(457),s=n(57),c=n.n(s);const l=37,p=39;t.a=function(e){const{lazy:t,block:n,defaultValue:s,values:u,groupId:b,className:d}=e,{tabGroupChoices:m,setTabGroupChoices:h}=Object(i.a)(),[f,g]=Object(a.useState)(s),v=a.Children.toArray(e.children),j=[];if(null!=b){const e=m[b];null!=e&&e!==f&&u.some((t=>t.value===e))&&g(e)}const w=e=>{const t=e.currentTarget,n=j.indexOf(t),a=u[n].value;g(a),null!=b&&(h(b,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:r}=e.getBoundingClientRect(),{innerHeight:i,innerWidth:o}=window;return t>=0&&r<=o&&a<=i&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((()=>t.classList.remove(c.a.tabItemActive)),2e3))}),150))},y=e=>{var t;let n;switch(e.keyCode){case p:{const t=j.indexOf(e.target)+1;n=j[t]||j[0];break}case l:{const t=j.indexOf(e.target)-1;n=j[t]||j[j.length-1];break}}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},d)},u.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:f===e?0:-1,"aria-selected":f===e,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>j.push(e),onKeyDown:y,onFocus:w,onClick:w},t)))),t?Object(a.cloneElement)(v.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}},469:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);