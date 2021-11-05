(window.webpackJsonp=window.webpackJsonp||[]).push([[368],{444:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var i=n(3),r=n(7),o=(n(0),n(454)),a={title:"Window Customization"},s={unversionedId:"usage/guides/visual/window-customization",id:"usage/guides/visual/window-customization",isDocsHomePage:!1,title:"Window Customization",description:"Tauri provides lots of options for customizing the look and feel of your app's window. You can create custom titlebars, have transparent windows, enforce size constraints, and more.",source:"@site/docs/en/usage/guides/visual/window-customization.md",sourceDirName:"usage/guides/visual",slug:"/usage/guides/visual/window-customization",permalink:"/en/docs/usage/guides/visual/window-customization",editUrl:"https://github.com/tauri-apps/tauri-docs/edit/dev/docs/en/usage/guides/visual/window-customization.md",version:"current",frontMatter:{title:"Window Customization"},sidebar:"docs",previous:{title:"Splashscreen",permalink:"/en/docs/usage/guides/visual/splashscreen"},next:{title:"Window Menu",permalink:"/en/docs/usage/guides/visual/menu"}},c=[{value:"Configuration",id:"configuration",children:[]},{value:"Creating a Custom Titlebar",id:"creating-a-custom-titlebar",children:[{value:"CSS",id:"css",children:[]},{value:"HTML",id:"html",children:[]},{value:"JS",id:"js",children:[]}]}],u={toc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Tauri provides lots of options for customizing the look and feel of your app's window. You can create custom titlebars, have transparent windows, enforce size constraints, and more."),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"There are three ways to change the window configuration:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://tauri.studio/en/docs/api/config/#tauri.windows"},"Through tauri.conf.json")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://tauri.studio/en/docs/api/js/classes/window.windowmanager"},"Through the JS API")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://tauri.studio/en/docs/api/rust/tauri/window/struct.window"},"Through the Window in Rust"))),Object(o.b)("h2",{id:"creating-a-custom-titlebar"},"Creating a Custom Titlebar"),Object(o.b)("p",null,"A common use of these window features is creating a custom titlebar. This short tutorial will guide you through that process."),Object(o.b)("h3",{id:"css"},"CSS"),Object(o.b)("p",null,"You'll need to add some CSS for the titlebar to keep it at the top of the screen and style the buttons:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-css"},".titlebar {\n  height: 30px;\n  background: #329ea3;\n  user-select: none;\n  display: flex;\n  justify-content: flex-end;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n.titlebar-button {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  width: 30px;\n  height: 30px;\n}\n.titlebar-button:hover {\n  background: #5bbec3;\n}\n")),Object(o.b)("h3",{id:"html"},"HTML"),Object(o.b)("p",null,"Now, you'll need to add the HTML for the titlebar. Put this at the top of your ",Object(o.b)("inlineCode",{parentName:"p"},"<body>")," tag:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<div data-tauri-drag-region class="titlebar">\n  <div class="titlebar-button" id="titlebar-minimize">\n    <img\n      src="https://api.iconify.design/mdi:window-minimize.svg"\n      alt="minimize"\n    />\n  </div>\n  <div class="titlebar-button" id="titlebar-maximize">\n    <img\n      src="https://api.iconify.design/mdi:window-maximize.svg"\n      alt="maximize"\n    />\n  </div>\n  <div class="titlebar-button" id="titlebar-close">\n    <img src="https://api.iconify.design/mdi:close.svg" alt="close" />\n  </div>\n</div>\n')),Object(o.b)("p",null,"Note that you may need to move the rest of your content down so that the titlebar doesn't cover it."),Object(o.b)("h3",{id:"js"},"JS"),Object(o.b)("p",null,"Finally, you'll need to make the buttons work:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { appWindow } from '@tauri-apps/api/window'\ndocument\n  .getElementById('titlebar-minimize')\n  .addEventListener('click', () => appWindow.minimize())\ndocument\n  .getElementById('titlebar-maximize')\n  .addEventListener('click', () => appWindow.toggleMaximize())\ndocument\n  .getElementById('titlebar-close')\n  .addEventListener('click', () => appWindow.close())\n")))}l.isMDXComponent=!0},454:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),b=i,m=d["".concat(a,".").concat(b)]||d[b]||p[b]||o;return n?r.a.createElement(m,s(s({ref:t},u),{},{components:n})):r.a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);