(window.webpackJsonp=window.webpackJsonp||[]).push([[355],{2203:function(t,n,o){"use strict";o.r(n),o.d(n,"default",(function(){return i}));var e=o(13),s=o(682),r=o(1147);function i(t){return e.createElement(e.Fragment,null,e.createElement(r.a,{isFavorite:!1,organization:t.organization}),e.createElement(s.a,{suggestions:"organization_projects"}))}},682:function(t,n,o){"use strict";o.d(n,"a",(function(){return u}));var e,s=o(13),r=o(709),i=(e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o])})(t,n)},function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)});function u(t){var n=t.suggestions;return s.createElement(r.a.Consumer,null,(function(t){var o=t.addSuggestions,e=t.removeSuggestions;return s.createElement(p,{addSuggestions:o,removeSuggestions:e,suggestions:n})}))}var p=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return i(n,t),n.prototype.componentDidMount=function(){this.props.addSuggestions(this.props.suggestions)},n.prototype.componentDidUpdate=function(t){t.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(t.suggestions))},n.prototype.componentWillUnmount=function(){this.props.removeSuggestions(this.props.suggestions)},n.prototype.render=function(){return null},n}(s.PureComponent)}}]);
//# sourceMappingURL=355.1594048982041.chunk.js.map