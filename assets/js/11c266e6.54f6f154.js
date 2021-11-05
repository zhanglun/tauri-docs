(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(454)),i={id:"workflow",title:"Workflow"},l={unversionedId:"usage/ci-cd/workflow",id:"usage/ci-cd/workflow",isDocsHomePage:!1,title:"Workflow",description:"Continuous Integration",source:"@site/docs/zh-hans/usage/ci-cd/workflow.md",sourceDirName:"usage/ci-cd",slug:"/usage/ci-cd/workflow",permalink:"/tauri-docs/docs/usage/ci-cd/workflow",editUrl:"https://github.com/tauri-apps/tauri-docs/edit/dev/docs/zh-hans/usage/ci-cd/workflow.md",version:"current",frontMatter:{id:"workflow",title:"Workflow"},sidebar:"docs",previous:{title:"Continuous Integration",permalink:"/tauri-docs/docs/usage/guides/webdriver/ci"},next:{title:"Cross-Platform Compilation",permalink:"/tauri-docs/docs/usage/ci-cd/cross-platform"}},s=[{value:"Continuous Integration",id:"continuous-integration",children:[]},{value:"Continuous Deployment",id:"continuous-deployment",children:[{value:"Introduction to immutable checksum",id:"introduction-to-immutable-checksum",children:[]},{value:"Next Steps",id:"next-steps",children:[]}]}],c={toc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"continuous-integration"},"Continuous Integration"),Object(o.b)("p",null,"Github Actions has two triggers of which we make heavy use: ",Object(o.b)("inlineCode",{parentName:"p"},"push")," and ",Object(o.b)("inlineCode",{parentName:"p"},"pull_request"),". Every commit that made to the repo is a ",Object(o.b)("inlineCode",{parentName:"p"},"push"),". When you open a pull request from a branch (call it ",Object(o.b)("inlineCode",{parentName:"p"},"great_feature"),") to another branch (our working branch, ",Object(o.b)("inlineCode",{parentName:"p"},"dev"),"), each commit to ",Object(o.b)("inlineCode",{parentName:"p"},"great_feature")," would possibly trigger both of these events. We can use a filter to focus on the events we care about though. In our workflows, we only PR (pull request) the ",Object(o.b)("inlineCode",{parentName:"p"},"dev")," and ",Object(o.b)("inlineCode",{parentName:"p"},"master")," branches. This means that if we filter to only the ",Object(o.b)("inlineCode",{parentName:"p"},"dev")," and ",Object(o.b)("inlineCode",{parentName:"p"},"master")," branches on commit, we will only run that workflow when we ",Object(o.b)("em",{parentName:"p"},"merge")," a PR. A merged PR typically only occurs once a day or less so this will be a good fit for the longer running tests, e.g. the smoke tests in our case. Below is how that might look."),Object(o.b)("p",null,"Unit tests:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yml"},"# these run fast so we can have them run on any commit\nname: unit tests\non:\n  pull_request:\n  push:\n    branches:\n      - dev\n      - master\n")),Object(o.b)("p",null,"Smoke tests:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yml"},"# these run slower so we run only on merges to dev or master branch\nname: smoke tests\non:\n  push:\n    branches:\n      - dev\n      - master\n")),Object(o.b)("p",null,"Tauri operates off the ",Object(o.b)("inlineCode",{parentName:"p"},"dev")," branch as default, and merges to ",Object(o.b)("inlineCode",{parentName:"p"},"master")," for release. With these Github Actions set up, we will run the unit tests on every commit to an open PR (see ",Object(o.b)("inlineCode",{parentName:"p"},"pull_request"),"). When that PR is merged into ",Object(o.b)("inlineCode",{parentName:"p"},"dev"),", we will run both the unit tests and the smoke tests."),Object(o.b)("h2",{id:"continuous-deployment"},"Continuous Deployment"),Object(o.b)("h3",{id:"introduction-to-immutable-checksum"},"Introduction to immutable checksum"),Object(o.b)("p",null,"It is not only possible, but trivial to modify release notes and artifacts after it has been published on Github. While there are very valid reasons for doing this, it is not exactly a totally trustworthy method - i.e. you have no guarantee that what you are reading is really reflective of the underlying truth or the tarballs. It is technically possible to change downloads over the wire or in the box or change checksums in targeted attacks. What we are seeking to accomplish is a best case scenario where:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Human error is reduced to a minimum, but humans are still integral in the actual release"),Object(o.b)("li",{parentName:"ol"},"Machine built assets, changelogs and attached security audits are verifiable with checksums that are published in an immutable, globally available store.")),Object(o.b)("p",null,"To this end we fashioned a workflow shown below. As it stands now, we have #3 through #6 implemented. We manually do #2 which then feeds into #3 and kicks off the rest of the automatic workflow."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"a human pushes to dev through a pull request (can happen any number of times)",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"pull request includes a changeset file describing the change and required version bump"))),Object(o.b)("li",{parentName:"ol"},"a pull request is created (or updated) to include the change and version bump",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"this pull request stays open and will be force pushed until it gets merged (and published)"),Object(o.b)("li",{parentName:"ul"},"increase the version number based on changesets"),Object(o.b)("li",{parentName:"ul"},"delete all changeset files"))),Object(o.b)("li",{parentName:"ol"},"a codeowner merges the publish PR to dev (no direct push permissible for anyone)",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"all tests (unit, e2e, smoke tests) are run on the PR"),Object(o.b)("li",{parentName:"ul"},"failures prevent the publish so they must pass before merge"))),Object(o.b)("li",{parentName:"ol"},"merge to dev triggers release sequence",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"changes are squashed and a PR is opened against master"))),Object(o.b)("li",{parentName:"ol"},"when PR to master is merged...",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"vulnerability audit (crates and yarn) and output saved"),Object(o.b)("li",{parentName:"ul"},"checksums and metadata and output saved"),Object(o.b)("li",{parentName:"ul"},"packages are published on npm/cargo, tarball/zip created"),Object(o.b)("li",{parentName:"ul"},"release is created for each package that had updates (if version isn't changed, build skips the publish steps)"),Object(o.b)("li",{parentName:"ul"},"output from audit/checksums is piped into the release body"),Object(o.b)("li",{parentName:"ul"},"tarball / zip attached to release"),Object(o.b)("li",{parentName:"ul"},"async process to publish to IOTA tangle (feeless) via release tag ","[note: still have things to resolve here]"))),Object(o.b)("li",{parentName:"ol"},"release is complete",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"master has updated code and tagged"),Object(o.b)("li",{parentName:"ul"},"GitHub release has tarballs, checksums, and changelog (may have multiple releases if more than one package published) ","[note: is part of step 2 and is not yet implemented]")))),Object(o.b)("h3",{id:"next-steps"},"Next Steps"),Object(o.b)("p",null,"Next steps may include transferring and publishing the built assets to additional places:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Tauri's private verdaccio"),Object(o.b)("li",{parentName:"ol"},"IPFS"),Object(o.b)("li",{parentName:"ol"},"PureOS Gitlab"),Object(o.b)("li",{parentName:"ol"},"GitHub Packages")),Object(o.b)("p",null,"We can also do some interesting things like signing our releases, including a hash in the release and/or even publishing this information on a blockchain that it can be easily verified. Publishing on the blockchain is another avenue to increase the confidence that what is seen on GitHub matches what you have downloaded. The IOTA foundation created a Github Action which will publish a release to their blockchain. This has shown promise, but he gave a couple errors to tackle still."))}u.isMDXComponent=!0},454:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,h=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return n?r.a.createElement(h,l(l({ref:t},c),{},{components:n})):r.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);