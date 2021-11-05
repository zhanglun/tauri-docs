/*! For license information please see a7555860.38fceae1.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{328:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),i=(n(0),n(454)),o=n(458),s=n(468),l=n(469),c={title:"Selenium"},u={unversionedId:"usage/guides/webdriver/example/selenium",id:"usage/guides/webdriver/example/selenium",isDocsHomePage:!1,title:"Selenium",description:"This [Selenium] guide expects you to have already gone through the [example Application setup] in order to follow",source:"@site/docs/en/usage/guides/webdriver/example/selenium.md",sourceDirName:"usage/guides/webdriver/example",slug:"/usage/guides/webdriver/example/selenium",permalink:"/en/docs/usage/guides/webdriver/example/selenium",editUrl:"https://github.com/tauri-apps/tauri-docs/edit/dev/docs/en/usage/guides/webdriver/example/selenium.md",version:"current",frontMatter:{title:"Selenium"},sidebar:"docs",previous:{title:"WebdriverIO",permalink:"/en/docs/usage/guides/webdriver/example/webdriverio"},next:{title:"Continuous Integration",permalink:"/en/docs/usage/guides/webdriver/ci"}},p=[{value:"Create a Directory for the Tests",id:"create-a-directory-for-the-tests",children:[]},{value:"Initializing a Selenium Project",id:"initializing-a-selenium-project",children:[]},{value:"Testing",id:"testing",children:[]},{value:"Running the Test Suite",id:"running-the-test-suite",children:[]}],b={toc:p};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(o.a,{title:"Example Application",type:"info",icon:"info-alt",mdxType:"Alert"},Object(i.b)("p",null,"This ",Object(i.b)("a",{parentName:"p",href:"https://selenium.dev/"},"Selenium")," guide expects you to have already gone through the ",Object(i.b)("a",{parentName:"p",href:"setup"},"example Application setup")," in order to follow\nstep-by-step. The general information may still be useful otherwise.")),Object(i.b)("p",null,"This WebDriver testing example will use ",Object(i.b)("a",{parentName:"p",href:"https://selenium.dev/"},"Selenium")," and a popular Node.js testing suite. It is expected to already have\nNode.js installed, along with ",Object(i.b)("inlineCode",{parentName:"p"},"npm")," or ",Object(i.b)("inlineCode",{parentName:"p"},"yarn")," although the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/chippers/hello_tauri"},"finished example project")," uses ",Object(i.b)("inlineCode",{parentName:"p"},"yarn"),"."),Object(i.b)("h2",{id:"create-a-directory-for-the-tests"},"Create a Directory for the Tests"),Object(i.b)("p",null,"Let's start off by creating a space in our project to write these tests. We are going to be using a nested directory for\nthis example project as we will later also go over other frameworks, but typically you will only need to use one. Create\nthe directory we will use with ",Object(i.b)("inlineCode",{parentName:"p"},"mkdir -p webdriver/selenium"),". The rest of this guide will assume you are inside the\n",Object(i.b)("inlineCode",{parentName:"p"},"webdriver/selenium")," directory."),Object(i.b)("h2",{id:"initializing-a-selenium-project"},"Initializing a Selenium Project"),Object(i.b)("p",null,"We will be using a pre-existing ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," to bootstrap this test suite because we have already chosen specific\ndependencies to use and want to showcase a simple working solution. The bottom of this section has a collapsed\nguide on how to set it up from scratch."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "selenium",\n  "version": "1.0.0",\n  "private": true,\n  "scripts": {\n    "test": "mocha"\n  },\n  "dependencies": {\n    "chai": "^4.3.4",\n    "mocha": "^9.0.3",\n    "selenium-webdriver": "^4.0.0-beta.4"\n  }\n}\n')),Object(i.b)("p",null,"We have a script which runs ",Object(i.b)("a",{parentName:"p",href:"https://mochajs.org/"},"Mocha")," as a test framework exposed as the ",Object(i.b)("inlineCode",{parentName:"p"},"test")," command. We also have various dependencies\nthat we will be using to run the tests. ",Object(i.b)("a",{parentName:"p",href:"https://mochajs.org/"},"Mocha")," as the testing framework, ",Object(i.b)("a",{parentName:"p",href:"https://www.chaijs.com/"},"Chai")," as the assertion library, and\n",Object(i.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/selenium-webdriver"},Object(i.b)("inlineCode",{parentName:"a"},"selenium-webdriver"))," which is the Node.js ",Object(i.b)("a",{parentName:"p",href:"https://selenium.dev/"},"Selenium")," package."),Object(i.b)("details",null,Object(i.b)("summary",null,"Click me if you want to see how to set a project up from scratch"),Object(i.b)("p",null,"If you wanted to install the dependencies from scratch, just run the following command."),Object(i.b)(s.a,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"npm install mocha chai selenium-webdriver\n"))),Object(i.b)(l.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"yarn add mocha chai selenium-webdriver\n")))),Object(i.b)("p",null,"I suggest also adding a ",Object(i.b)("inlineCode",{parentName:"p"},'"test": "mocha"')," item in the ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," ",Object(i.b)("inlineCode",{parentName:"p"},'"scripts"')," key so that running mocha can be called\nsimply with"),Object(i.b)(s.a,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"npm test\n"))),Object(i.b)(l.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"yarn test\n"))))),Object(i.b)("h2",{id:"testing"},"Testing"),Object(i.b)("p",null,"Unlike the ",Object(i.b)("a",{parentName:"p",href:"webdriverio#config"},"WebdriverIO Test Suite"),", Selenium does not come out of the box with a Test Suite and\nleaves it up to the developer to build those out. We chose ",Object(i.b)("a",{parentName:"p",href:"https://mochajs.org/"},"Mocha")," which is pretty neutral, and not related to WebDrivers\nat all, so our script will need to do a bit of work to set up everything for us in the right order. ",Object(i.b)("a",{parentName:"p",href:"https://mochajs.org/"},"Mocha")," expects a\ntesting file at ",Object(i.b)("inlineCode",{parentName:"p"},"test/test.js")," by default, so let's create that file now."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"test/test.js"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'const os = require("os");\nconst path = require("path");\nconst { expect } = require("chai");\nconst { spawn, spawnSync } = require("child_process");\nconst { Builder, By, Capabilities } = require("selenium-webdriver");\n\n// create the path to the expected application binary\nconst application = path.resolve(\n  __dirname,\n  "..",\n  "..",\n  "..",\n  "target",\n  "release",\n  "hello-tauri-webdriver"\n);\n\n// keep track of the webdriver instance we create\nlet driver;\n\n// keep track of the tauri-driver process we start\nlet tauriDriver;\n\nbefore(async function() {\n  // set timeout to 2 minutes to allow the program to build if it needs to\n  this.timeout(120000)\n\n  // ensure the program has been built\n  spawnSync("cargo", ["build", "--release"]);\n\n  // start tauri-driver\n  tauriDriver = spawn(\n    path.resolve(os.homedir(), ".cargo", "bin", "tauri-driver"),\n    [],\n    { stdio: [null, process.stdout, process.stderr] }\n  );\n\n  const capabilities = new Capabilities();\n  capabilities.set("tauri:options", { application });\n  capabilities.setBrowserName("wry");\n\n  // start the webdriver client\n  driver = await new Builder()\n    .withCapabilities(capabilities)\n    .usingServer("http://localhost:4444/")\n    .build();\n});\n\nafter(async function() {\n  // stop the webdriver session\n  await driver.quit();\n\n  // kill the tauri-driver process\n  tauriDriver.kill();\n});\n\ndescribe("Hello Tauri", () => {\n  it("should be cordial", async () => {\n    const text = await driver.findElement(By.css("body > h1")).getText();\n    expect(text).to.match(/^[hH]ello/);\n  });\n\n  it("should be excited", async () => {\n    const text = await driver.findElement(By.css("body > h1")).getText();\n    expect(text).to.match(/!$/);\n  });\n\n  it("should be easy on the eyes", async () => {\n    // selenium returns color css values as rgb(r, g, b)\n    const text = await driver.findElement(By.css("body")).getCssValue("background-color");\n\n    const rgb = text.match(/^rgb\\((?<r>\\d+), (?<g>\\d+), (?<b>\\d+)\\)$/).groups;\n    expect(rgb).to.have.all.keys(\'r\',\'g\',\'b\');\n\n    const luma =  0.2126 * rgb.r + 0.7152 * rgb.g  + 0.0722 * rgb.b ;\n    expect(luma).to.be.lessThan(100)\n  });\n});\n')),Object(i.b)("p",null,"If you are familiar with JS testing frameworks, ",Object(i.b)("inlineCode",{parentName:"p"},"describe"),", ",Object(i.b)("inlineCode",{parentName:"p"},"it"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"expect")," should look familiar. We also have\nsemi-complex ",Object(i.b)("inlineCode",{parentName:"p"},"before()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"after()")," callbacks to setup and teardown mocha. Lines that are not the tests themselves\nhave comments explaining what the setup and teardown code is doing. If you were familiar with the Spec file from the\n",Object(i.b)("a",{parentName:"p",href:"webdriverio#spec"},"WebdriverIO example"),", you will notice a lot more code that isn't tests, as we have to set up a few\nmore WebDriver related items."),Object(i.b)("h2",{id:"running-the-test-suite"},"Running the Test Suite"),Object(i.b)("p",null,"Now that we are all set up with our dependencies and our test script, lets run it!"),Object(i.b)(s.a,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"npm test\n"))),Object(i.b)(l.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"yarn test\n")))),Object(i.b)("p",null,"We should see output the following output:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"\u279c  selenium git:(main) \u2717 yarn test\nyarn run v1.22.11\n$ mocha\n\n\n  Hello Tauri\n    \u2714 should be cordial (120ms)\n    \u2714 should be excited\n    \u2714 should be easy on the eyes\n\n\n  3 passing (588ms)\n\nDone in 0.93s.\n")),Object(i.b)("p",null,"We can see that our ",Object(i.b)("inlineCode",{parentName:"p"},"Hello Tauri")," sweet we created with ",Object(i.b)("inlineCode",{parentName:"p"},"decribe")," had all 3 items we created with ",Object(i.b)("inlineCode",{parentName:"p"},"it")," pass their\ntests!"),Object(i.b)("p",null,"With ",Object(i.b)("a",{parentName:"p",href:"https://selenium.dev/"},"Selenium")," and some hooking up to a test suite, we just enabled e2e testing without modifying our Tauri\napplication at all!"))}d.isMDXComponent=!0},454:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return n?r.a.createElement(m,s(s({ref:t},c),{},{components:n})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},455:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)){if(a.length){var o=r.apply(null,a);o&&e.push(o)}}else if("object"===i)if(a.toString===Object.prototype.toString)for(var s in a)n.call(a,s)&&a[s]&&e.push(s);else e.push(a.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},456:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(455),o=n.n(i);const s={danger:"var(--ifm-color-danger)",warning:"var(--ifm-color-warning)",info:"var(--ifm-color-info)",default:"var(--ifm-font-base-color)"};t.a=({title:e,className:t,color:n="default"})=>r.a.createElement("i",{className:o()("ti-"+e,t),style:{color:s[n]}})},457:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},458:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(455),o=n.n(i),s=n(456),l=n(56),c=n.n(l);t.a=({type:e="info",title:t,icon:n,children:a})=>r.a.createElement("div",{className:o()("alert","alert--"+e,c.a.alert),style:{marginBottom:"30px"},role:"alert"},n&&r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{title:n,className:c.a.icon}),"\xa0"),r.a.createElement("div",{className:c.a.container},t&&r.a.createElement("span",{className:c.a.title},t),r.a.createElement("div",{className:c.a.content},a)))},464:function(e,t,n){"use strict";var a=n(0),r=n(465);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},465:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},468:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(464),o=n(457),s=n(57),l=n.n(s);const c=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:s,values:p,groupId:b,className:d}=e,{tabGroupChoices:m,setTabGroupChoices:h}=Object(i.a)(),[f,g]=Object(a.useState)(s),v=a.Children.toArray(e.children),j=[];if(null!=b){const e=m[b];null!=e&&e!==f&&p.some((t=>t.value===e))&&g(e)}const y=e=>{const t=e.currentTarget,n=j.indexOf(t),a=p[n].value;g(a),null!=b&&(h(b,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:r}=e.getBoundingClientRect(),{innerHeight:i,innerWidth:o}=window;return t>=0&&r<=o&&a<=i&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l.a.tabItemActive),setTimeout((()=>t.classList.remove(l.a.tabItemActive)),2e3))}),150))},w=e=>{var t;let n;switch(e.keyCode){case u:{const t=j.indexOf(e.target)+1;n=j[t]||j[0];break}case c:{const t=j.indexOf(e.target)-1;n=j[t]||j[j.length-1];break}}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},d)},p.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:f===e?0:-1,"aria-selected":f===e,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>j.push(e),onKeyDown:w,onFocus:y,onClick:y},t)))),t?Object(a.cloneElement)(v.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}},469:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);