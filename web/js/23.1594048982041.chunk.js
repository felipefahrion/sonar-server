(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1400:function(e,t,n){var r=n(662),o=n(1401);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},c=(r(o,a),o.locals?o.locals:{});e.exports=c},1401:function(e,t,n){(t=n(663)(!1)).push([e.i,".markdown-content .alert{margin-bottom:8px;border:1px solid;border-radius:2px}.markdown-content .alert.is-inline{display:inline-flex}.markdown-content .alert:empty{display:none}.markdown-content .alert-danger,.markdown-content .alert-error{border-color:#f4b1b0;background-color:#f2dede;color:#862422}.markdown-content .alert-danger .alert-icon,.markdown-content .alert-error .alert-icon{border-color:#f4b1b0}.markdown-content .alert-warning{border-color:#faebcc;background-color:#fcf8e3;color:#6f4f17}.markdown-content .alert-warning .alert-icon{border-color:#faebcc}.markdown-content .alert-info{border-color:#b1dff3;background-color:#d9edf7;color:#0e516f}.markdown-content .alert-info .alert-icon{border-color:#b1dff3}.markdown-content .alert-success{border-color:#d6e9c6;background-color:#dff0d8;color:#215821}.markdown-content .alert-success .alert-icon{border-color:#d6e9c6}",""]),e.exports=t},853:function(e,t,n){"use strict";n.r(t);var r,o=n(660),a=n(13),c=n(1523),l=n.n(c),i=n(1542),s=n.n(i),u=n(1544),p=n.n(u),f=n(1126),d=n.n(f),h=n(1567),m=n.n(h),y=n(1568),b=n.n(y),v=n(1578),g=n.n(v),O=n(767),w=n(779),k=n.n(w),E=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),_=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={open:!1},t.handleClick=function(e){t.setState((function(e){return{open:!e.open}})),e.stopPropagation(),e.preventDefault()},t}return E(t,e),t.prototype.renderTitle=function(e){return a.createElement("a",{"aria-expanded":this.state.open,"aria-haspopup":!0,className:"link-no-underline",href:"#",onClick:this.handleClick},a.createElement(k.a,{className:"text-middle little-spacer-right",open:this.state.open}),e.props?e.props.children:e)},t.prototype.render=function(){var e=a.Children.toArray(this.props.children);if(e.length<1)return null;var t=a.Children.toArray(e[0].props.children);return t.length<2?null:a.createElement("div",{className:"collapse-container"},this.renderTitle(t[0]),this.state.open&&t.slice(1))},t}(a.PureComponent),j=n(687),P=function(){return(P=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},C=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function A(e){var t=e.alt,n=e.src,r=C(e,["alt","src"]);return a.createElement("img",P({alt:t,className:"max-width-100",src:Object(j.getBaseUrl)()+"/images/embed-doc"+n},r))}var S=n(665),x=n(839),N=n.n(x),H=n(38),L=n(857),T=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),W=function(){return(W=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},D=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},q=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClickOnAnchor=function(e){var n=t.props,r=n.customProps,o=n.href,a=void 0===o?"#":o;r&&r.onAnchorClick&&r.onAnchorClick(a,e)},t}return T(t,e),t.prototype.render=function(){var e=this.props,t=e.appState,n=e.children,r=e.href,o=(e.customProps,D(e,["appState","children","href","customProps"]));if(r&&r.startsWith("#"))return a.createElement("a",{href:"#",onClick:this.handleClickOnAnchor},n);if(r&&r.startsWith("/")){if(r.startsWith("/#sonarcloud#/"))return a.createElement(I,{url:r},n);if(r.startsWith("/#sonarqube#/"))return a.createElement(M,{url:r},n);if(r.startsWith("/#sonarqube-admin#/"))return a.createElement(U,{canAdmin:t.canAdmin,url:r},n);var c="/documentation"+r;return a.createElement(S.Link,W({to:c},o),n)}return a.createElement(a.Fragment,null,a.createElement("a",W({href:r,rel:"noopener noreferrer",target:"_blank"},o),n),a.createElement(N.a,{className:"text-muted little-spacer-left little-spacer-right text-baseline",size:12}))},t}(a.PureComponent),F=Object(L.a)(q);function I(e){var t=e.children,n=e.url;if(Object(H.isSonarCloud)()){var r="/"+n.substr("/#sonarcloud#/".length);return a.createElement(S.Link,{to:r},t)}return a.createElement(a.Fragment,null,t)}function M(e){var t=e.children,n=e.url;if(Object(H.isSonarCloud)())return a.createElement(a.Fragment,null,t);var r="/"+n.substr("/#sonarqube#/".length);return a.createElement(S.Link,{target:"_blank",to:r},t)}function U(e){var t=e.canAdmin,n=e.children,r=e.url;if(Object(H.isSonarCloud)()||!t)return a.createElement(a.Fragment,null,n);var o="/"+r.substr("/#sonarqube-admin#/".length);return a.createElement(S.Link,{target:"_blank",to:o},n)}n(1400);var z=n(867),J=n.n(z),B=n(716),K=n.n(B),R=n(811),Y=n(1579),G=n.n(Y),Q=n(176),V=n(1585),X=n.n(V);function Z(){return function(e){var t=X()(e,{heading:"doctoc",maxDepth:2});null!==t.index&&-1!==t.index&&t.map?e.children=[t.map]:e.children=[]}}var $=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),ee=function(e){function t(t){var n=e.call(this,t)||this;return n.node=null,n.state={anchors:[]},n.scrollHandler=function(){var e=Object(R.findDOMNode)(n);if(e&&e.parentNode){for(var t,r=e.parentNode.querySelectorAll("h2[id]"),o=window.pageYOffset||document.body.scrollTop,a=0,c=r.length;a<c&&!(r.item(a).offsetTop>o+120);a++)t="#"+r.item(a).id;n.setState({highlightAnchor:t})}},n.debouncedScrollHandler=K()(n.scrollHandler),n}return $(t,e),t.getDerivedStateFromProps=function(e){var n=e.content;return{anchors:t.getAnchors(n)}},t.prototype.componentDidMount=function(){window.addEventListener("scroll",this.debouncedScrollHandler,!0),this.scrollHandler()},t.prototype.componentWillUnmount=function(){window.removeEventListener("scroll",this.debouncedScrollHandler,!0)},t.prototype.render=function(){var e=this,t=this.state,n=t.anchors,r=t.highlightAnchor;return 0===n.length?null:a.createElement("div",{className:"markdown-toc"},a.createElement("div",{className:"markdown-toc-content"},a.createElement("h4",null,Object(Q.translate)("documentation.on_this_page")),n.map((function(t){return a.createElement("a",{className:o({active:r===t.href}),href:t.href,key:t.title,onClick:function(n){e.props.onAnchorClick(t.href,n)}},t.title)}))))},t.getAnchors=J()((function(e){var t=d()().use(G.a).use(Z).processSync("\n## doctoc\n"+e);if(t&&t.contents.props.children){for(var n=t.contents,r=10;r&&n.props.children.length&&"ul"!==n.type;)n=n.props.children[0],r--;if("ul"===n.type&&n.props.children.length)return n.props.children.map((function(e){if("string"==typeof e)return null;var t=e.props.children[0];return{href:t.props.href,title:t.props.children[0]}})).filter((function(e){return e}))}return[]})),t}(a.PureComponent),te=n(1183),ne=n.n(te),re=function(){return(re=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},oe=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function ae(e){var t=e.children,n=e.customProps,r=e.href,o=oe(e,["children","customProps","href"]);return n&&ne()(n,(function(e,t){r&&(r=r.replace("#"+t+"#",encodeURIComponent(e)))})),r&&r.startsWith("/")?(r=r.startsWith("/#sonarcloud#/")?"/"+r.substr("/#sonarcloud#/".length):"/documentation/"+r.substr(1),a.createElement(S.Link,re({rel:"noopener noreferrer",target:"_blank",to:r},o),t)):a.createElement(a.Fragment,null,a.createElement("a",re({href:r,rel:"noopener noreferrer",target:"_blank"},o),t),a.createElement(N.a,{className:"little-spacer-left little-spacer-right text-baseline",size:12}))}var ce=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),le=function(){return(le=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},ie=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.node=null,t.handleAnchorClick=function(e,n){if(t.node){var r=t.node.querySelector(e);r&&(n.preventDefault(),Object(O.scrollToElement)(r,{bottomOffset:window.innerHeight-80}),history.pushState&&history.pushState(null,"",e))}},t}return ce(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.childProps,r=t.content,c=t.className,i=t.title,u=t.stickyToc,f=t.isTooltip,h=d()();return h.use(m.a,{danger:{classes:"alert alert-danger"},warning:{classes:"alert alert-warning"},info:{classes:"alert alert-info"},success:{classes:"alert alert-success"},collapse:{classes:"collapse"}}).use(b.a,{allowDangerousHTML:!0}).use(p.a).use(l.a).use(s.a,{createElement:a.createElement,components:{div:ue,a:f?se(ae,n):se(F,{onAnchorClick:this.handleAnchorClick}),img:A,"update-center":function(e){var t=e.updatecenterkey;return a.createElement(g.a,{updateCenterKey:t})}}}),a.createElement("div",{className:o("markdown",c,{"has-toc":u}),ref:function(t){return e.node=t}},a.createElement("div",{className:"markdown-content"},void 0!==i&&a.createElement("h1",{className:"documentation-title"},i),h.processSync(r).contents),u&&a.createElement(ee,{content:r,onAnchorClick:this.handleAnchorClick}))},t}(a.PureComponent);t.default=ie;function se(e,t){return function(n){return a.createElement(e,le({customProps:t},n))}}function ue(e){return e.className?e.className.includes("collapse")?a.createElement(_,null,e.children):a.createElement("div",{className:o("cut-margins",e.className)},e.children):e.children}}}]);
//# sourceMappingURL=23.1594048982041.chunk.js.map