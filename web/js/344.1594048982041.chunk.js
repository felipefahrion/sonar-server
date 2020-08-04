(window.webpackJsonp=window.webpackJsonp||[]).push([[344],{1074:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r,o=n(13),l=n(180),i=n.n(l),a=n(686),c=n(892),s=n(785),u=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=function(){return(p=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function m(e){var t=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return u(n,t),n.prototype.componentDidMount=function(){Object(a.b)(this.props.currentUser)||i()()},n.prototype.render=function(){return Object(a.b)(this.props.currentUser)?o.createElement(e,p({},this.props)):null},n.displayName=Object(c.a)(e,"whenLoggedIn"),n}(o.Component);return Object(s.a)(t)}},2268:function(e,t,n){"use strict";n.r(t),n.d(t,"Profile",(function(){return h}));var r,o=n(13),l=n(673),i=n.n(l),a=n(176),c=n(1074),s=n(1016),u=n(687),p=n(783),m=n(685),d=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!0},t}return d(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchIdentityProviders()},t.prototype.componentDidUpdate=function(e){e.user!==this.props.user&&this.fetchIdentityProviders()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.fetchIdentityProviders=function(){var e=this;this.setState({loading:!0}),Object(p.d)().then((function(e){return e.identityProviders})).then((function(t){if(e.mounted){var n=t.find((function(t){return t.key===e.props.user.externalProvider}));e.setState({loading:!1,identityProvider:n})}})).catch((function(){e.mounted&&e.setState({loading:!1})}))},t.prototype.render=function(){var e=this.props.user,t=this.state,n=t.loading,r=t.identityProvider;return n?null:r?o.createElement("div",{className:"identity-provider",style:{backgroundColor:r.backgroundColor,color:Object(s.getTextColor)(r.backgroundColor,m.colors.secondFontColor)}},o.createElement("img",{alt:r.name,className:"little-spacer-right",height:"14",src:Object(u.getBaseUrl)()+r.iconPath,width:"14"})," ",e.externalIdentity):o.createElement("div",null,e.externalProvider,": ",e.externalIdentity)},t}(o.PureComponent);function h(e){var t=e.currentUser,n=!t.local&&"sonarqube"!==t.externalProvider;return o.createElement("div",{className:"account-body account-container account-profile"},o.createElement("div",{className:"boxed-group"},function(){if(!t.login&&!n)return null;return o.createElement("div",{className:"boxed-group-inner"},o.createElement("h2",{className:"spacer-bottom"},Object(a.translate)("my_profile.login")),t.login&&o.createElement("p",{className:"spacer-bottom",id:"login"},t.login),n&&o.createElement(f,{user:t}))}(),function(){if(!t.email)return null;return o.createElement("div",{className:"boxed-group-inner"},o.createElement("h2",{className:"spacer-bottom"},Object(a.translate)("my_profile.email")),o.createElement("div",{className:"spacer-bottom"},o.createElement("p",{id:"email"},t.email)))}(),function(){if(!t.groups||0===t.groups.length)return null;return o.createElement("div",{className:"boxed-group-inner"},o.createElement("h2",{className:"spacer-bottom"},Object(a.translate)("my_profile.groups")),o.createElement("ul",{id:"groups"},t.groups.map((function(e){return o.createElement("li",{className:"little-spacer-bottom",key:e,title:e},e)}))))}(),function(){if(!(t.login||t.email||t.scmAccounts&&0!==t.scmAccounts.length))return null;return o.createElement("div",{className:"boxed-group-inner"},o.createElement("h2",{className:"spacer-bottom"},Object(a.translate)("my_profile.scm_accounts"),o.createElement(i.a,{className:"little-spacer-left",overlay:Object(a.translate)("my_profile.scm_accounts.tooltip")})),o.createElement("ul",{id:"scm-accounts"},t.login&&o.createElement("li",{className:"little-spacer-bottom text-ellipsis",title:t.login},t.login),t.email&&o.createElement("li",{className:"little-spacer-bottom text-ellipsis",title:t.email},t.email),t.scmAccounts&&t.scmAccounts.length>0&&t.scmAccounts.map((function(e){return o.createElement("li",{className:"little-spacer-bottom",key:e,title:e},e)}))))}()))}t.default=Object(c.a)(h)},673:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(660),o=n(13),l=n(720),i=n(688);n(689);var a=n(666);t.default=function(e){var t=e.tagName,n=void 0===t?"div":t;return o.createElement(n,{className:r("help-tooltip",e.className)},o.createElement(a.default,{mouseLeaveDelay:.25,onShow:e.onShow,overlay:e.overlay,placement:e.placement},o.createElement("span",{className:"display-inline-flex-center"},e.children||o.createElement(i.ThemeConsumer,null,(function(e){return o.createElement(l.default,{fill:e.colors.gray71,size:12})})))))}},689:function(e,t,n){var r=n(662),o=n(690);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var l={insert:"head",singleton:!1},i=(r(o,l),o.locals?o.locals:{});e.exports=i},690:function(e,t,n){(t=n(663)(!1)).push([e.i,".help-tooltip{display:inline-flex;align-items:center;vertical-align:middle}.help-toolip-link{display:block;width:12px;height:12px;border:none}",""]),e.exports=t}}]);
//# sourceMappingURL=344.1594048982041.chunk.js.map