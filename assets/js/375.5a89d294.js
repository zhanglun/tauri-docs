(window.webpackJsonp=window.webpackJsonp||[]).push([[375],{456:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(455),o=t.n(l);const c={danger:"var(--ifm-color-danger)",warning:"var(--ifm-color-warning)",info:"var(--ifm-color-info)",default:"var(--ifm-font-base-color)"};a.a=({title:e,className:a,color:t="default"})=>n.a.createElement("i",{className:o()("ti-"+e,a),style:{color:c[t]}})},470:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(455),o=t.n(l),c=t(16),i=(t(58),t(59)),s=t.n(i),m=t(456);a.a=({className:e})=>{const a=Object(c.default)(),{siteConfig:l={}}=a;return Object(r.useEffect)((()=>{(0,t(496).default)({hostUrl:"https://search.tauri.studio",apiKey:"ea0105f56bb5a2111ed28c7a0c637fc0bed07273f571dc7cb1f73900e44f8e7f",indexUid:l.themeConfig.version.trim().replace(/\W/g,"_"),inputSelector:"#search-bar-input",debug:!1,transformData:e=>e.map((e=>({...e,url:"/en/docs/"+e.url})))})}),[]),n.a.createElement("div",{className:o()(e,"SearchBar","meilisearch-search-wrapper",s.a.searchWrapper)},n.a.createElement(m.a,{title:"search",className:o()(s.a.searchIcon)}),n.a.createElement("input",{placeholder:"Search...",type:"text",className:o()(s.a.search),id:"search-bar-input"}))}},497:function(e,a){},499:function(e,a,t){"use strict";var r=t(3),n=t(0),l=t.n(n),o=t(457),c=t(461),i=t(16),s=t(459),m=t(460),d=t(61),b=t.n(d),u=t(500);t(62);function h({to:e,href:a,label:t,prependBaseUrlToHref:n,...o}){const i=Object(s.a)(e),m=Object(s.a)(a,{forcePrependBaseUrl:!0});return l.a.createElement(c.a,Object(r.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:n?m:a}:{to:i},o),t)}const g=({url:e,alt:a})=>l.a.createElement("img",{className:"footer__logo",alt:a,src:e});a.a=function(){const e=Object(i.default)(),{isDarkTheme:a,setLightTheme:t,setDarkTheme:r}=Object(m.a)(),{siteConfig:c={}}=e,{themeConfig:d={}}=c,{footer:f}=d,{copyright:p,links:E=[],logo:v={}}=f||{},_=Object(s.a)(v.src);if(!f)return null;const N=Object(n.useCallback)((e=>e.target.checked?r():t()),[t,r]);return l.a.createElement("footer",{className:Object(o.a)("footer",{"footer--dark":"dark"===f.style})},l.a.createElement("div",{className:"container"},E&&E.length>0&&l.a.createElement("div",{className:"row footer__links"},E.map(((e,a)=>l.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?l.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.a.createElement("ul",{className:"footer__items"},e.items.map(((e,a)=>e.html?l.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.a.createElement("li",{key:e.href||e.to,className:"footer__item"},l.a.createElement(h,e))))):null)))),!c.themeConfig.colorMode.disableSwitch.disableColorModeSwitch&&l.a.createElement(u.a,{className:b.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:a,onChange:N}),(v||p)&&l.a.createElement("div",{className:"text--center"},v&&v.src&&l.a.createElement("div",{className:"margin-bottom--sm"},v.href?l.a.createElement("a",{href:v.href,target:"_blank",rel:"noopener noreferrer",className:b.a.footerLogoLink},l.a.createElement(g,{alt:v.alt,url:_})):l.a.createElement(g,{alt:v.alt,url:_})),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:p}}))))}},505:function(e,a,t){"use strict";var r=t(3),n=t(0),l=t.n(n),o=t(457),c=t(461),i=t(16),s=t(470),m=t(460),d=t(498),b=t(489),u=t(456),h=t(490),g=t(459),f=t(462);var p=()=>{const{siteConfig:{baseUrl:e,themeConfig:{navbar:{logo:a={}}={}}}={}}=Object(i.default)(),t=a.href||e;let r={};a.target?r={target:a.target}:Object(f.a)(t)||(r={rel:"noopener noreferrer",target:"_blank"});return{logoLink:t,logoLinkProps:r,logoImageUrl:Object(g.a)(a.src),logoAlt:a.alt}},E=t(60),v=t.n(E),_=t(504),N=t(455),k=t.n(N);const w="right";a.a=function(){const{siteConfig:{themeConfig:{navbar:{title:e="",items:a=[],hideOnScroll:t=!1}={},colorMode:{disableSwitch:g=!1}={},language:f,languages:E}},isClient:N}=Object(i.default)(),[O,j]=Object(n.useState)(!1),[y,C]=Object(n.useState)(!1),{isDarkTheme:L,setLightTheme:S,setDarkTheme:T}=Object(m.a)(),{navbarRef:I,isNavbarVisible:x}=Object(d.a)(t),{logoLink:B,logoLinkProps:M,logoImageUrl:U,logoAlt:D}=p();Object(b.a)(O);const P=Object(n.useCallback)((()=>{j(!0)}),[j]),W=Object(n.useCallback)((()=>{j(!1)}),[j]),$=Object(h.a)();Object(n.useEffect)((()=>{$===h.b.desktop&&j(!1)}),[$]);const{leftItems:F,rightItems:H}=function(e){return{leftItems:e.filter((e=>{var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:w)})),rightItems:e.filter((e=>{var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:w)}))}}(a),A=Object.entries(E).filter((([e,a])=>e!==f));return l.a.createElement("nav",{ref:I,className:Object(o.a)("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":O,[v.a.navbarHideable]:t,[v.a.navbarHidden]:!x})},l.a.createElement("div",{className:"navbar__inner"},l.a.createElement("div",{className:"navbar__items"},null!=a&&0!==a.length&&l.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:P,onKeyDown:P},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement(c.a,Object(r.a)({className:"navbar__brand",to:B},M),null!=U&&l.a.createElement("img",{key:N,className:"navbar__logo",src:U,alt:D}),null!=e&&l.a.createElement("strong",{className:Object(o.a)("navbar__title",{[v.a.hideLogoText]:y})},e)),F.map(((e,a)=>l.a.createElement(_.a,Object(r.a)({},e,{key:a}))))),l.a.createElement("div",{className:"navbar__items navbar__items--right"},l.a.createElement(_.a,{label:l.a.createElement("span",{className:"badge badge--warning"},"Beta"),to:"/#roadmap"}),H.map(((e,a)=>l.a.createElement(_.a,Object(r.a)({},e,{key:a})))),l.a.createElement("div",{className:k()(v.a.displayOnlyInLargeViewport,"dropdown","dropdown--hoverable","dropdown--right",v.a.languages)},l.a.createElement("button",{className:"button button--primary"},E[f]),l.a.createElement("ul",{className:"dropdown__menu"},A.length?A.map((([e,a])=>l.a.createElement("li",null,l.a.createElement("a",{className:"dropdown__link",href:"undefined"!=typeof location?location.href.replace(`/${f}/`,`/${e}/`):`/${e}/`},a)))):l.a.createElement("li",null,"We've enabled internationalization! But we need your help...",l.a.createElement("br",null),"See"," ",l.a.createElement("a",{href:"https://github.com/tauri-apps/tauri-docs#contributing",target:"_blank"},"here")," ","for more information. ",l.a.createElement(u.a,{title:"face-smile"})))),l.a.createElement(s.a,{handleSearchBarToggle:C,isSearchBarExpanded:y}))),l.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:W}),l.a.createElement("div",{className:"navbar-sidebar"},l.a.createElement("div",{className:"navbar-sidebar__brand"},l.a.createElement(c.a,Object(r.a)({className:"navbar__brand",onClick:W,to:B},M),null!=U&&l.a.createElement("img",{key:N,className:"navbar__logo",src:U,alt:D}),null!=e&&l.a.createElement("strong",{className:"navbar__title"},e)),l.a.createElement("div",{className:k()("dropdown","dropdown--hoverable","dropdown--right",v.a.languages)},l.a.createElement("button",{className:"button button--primary"},E[f]),l.a.createElement("ul",{className:"dropdown__menu"},A.length?A.map((([e,a])=>l.a.createElement("li",null,l.a.createElement("a",{className:"dropdown__link",href:"undefined"!=typeof location?location.href.replace(`/${f}/`,`/${e}/`):`/${e}/`},a)))):l.a.createElement("li",null,"We've enabled internationalization! But we need your help...",l.a.createElement("br",null),"See"," ",l.a.createElement("a",{href:"https://github.com/tauri-apps/tauri-docs#contributing",target:"_blank"},"here")," ","for more information. ",l.a.createElement(u.a,{title:"face-smile"}))))),l.a.createElement("div",{className:"navbar-sidebar__items"},l.a.createElement("div",{className:"menu"},l.a.createElement("ul",{className:"menu__list"},a.map(((e,a)=>l.a.createElement(_.a,Object(r.a)({mobile:!0},e,{onClick:W,key:a})))),l.a.createElement(_.a,{mobile:!0,label:l.a.createElement("span",{className:"badge badge--warning"},"Beta"),to:"/#roadmap"}))))))}},591:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(494),o=t(486);a.default=function(){return n.a.createElement(l.a,{title:"Page Not Found"},n.a.createElement("main",{className:"container margin-vert--xl"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--6 col--offset-3"},n.a.createElement("h1",{className:"hero__title"},n.a.createElement(o.a,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.a.createElement("p",null,n.a.createElement(o.a,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.a.createElement("p",null,n.a.createElement(o.a,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);