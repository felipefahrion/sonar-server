(window.webpackJsonp=window.webpackJsonp||[]).push([[340,24,363],{2193:function(t,e,n){"use strict";n.r(e),n.d(e,"ProjectAdminPageExtension",(function(){return s}));var r=n(13),o=n(670),a=n(736),i=n(768),c=n(873);function s(t){var e=t.component,n=t.params,o=n.extensionKey,a=n.pluginKey,s=e.configuration&&(e.configuration.extensions||[]).find((function(t){return t.key===a+"/"+o}));return s?r.createElement(c.a,{extension:s,options:{component:e}}):r.createElement(i.default,{withContainer:!1})}var l={onFail:a.a};e.default=Object(o.connect)(null,l)(s)},751:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return s}));var r=n(13),o=n(831),a=n.n(o),i=n(685),c=n(854);function s(t){var e=t.children;return r.createElement("div",{className:"global-container"},r.createElement("div",{className:"page-wrapper",id:"container"},r.createElement(a.a,{className:"navbar-global",height:i.rawSizes.globalNavHeightRaw}),e),r.createElement(c.a,null))}},762:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return l}));var r=n(687),o=n(94),a=function(t,e,n,r){return new(n||(n=Promise))((function(o,a){function i(t){try{s(r.next(t))}catch(t){a(t)}}function c(t){try{s(r.throw(t))}catch(t){a(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,c)}s((r=r.apply(t,e||[])).next())}))},i=function(t,e){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(t){a=[6,t],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},c=!1;function s(t,e){return void 0===e&&(e="body"),new Promise((function(n){var o=document.createElement("script");o.src=""+Object(r.getBaseUrl)()+t,o.onload=n,document.getElementsByTagName(e)[0].appendChild(o)}))}function l(t){return a(this,void 0,void 0,(function(){var e,r;return i(this,(function(a){switch(a.label){case 0:return(e=Object(o.a)(t))?[2,Promise.resolve(e)]:c?[3,2]:[4,Promise.all([n.e(0),n.e(1),n.e(2),n.e(15),n.e(286)]).then(n.bind(null,898))];case 1:(0,a.sent().default)(),c=!0,a.label=2;case 2:return[4,s("/static/"+t+".js")];case 3:return a.sent(),(r=Object(o.a)(t))?[2,r]:[2,Promise.reject()]}}))}))}},768:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return s}));var r=n(13),o=n(681),a=n(665),i=n(176),c=n(751);function s(t){var e=t.withContainer,n=void 0===e||e?c.default:r.Fragment;return r.createElement(n,null,r.createElement(o.a,{defaultTitle:Object(i.translate)("404_not_found"),defer:!1}),r.createElement("div",{className:"page-wrapper-simple",id:"bd"},r.createElement("div",{className:"page-simple",id:"nonav"},r.createElement("h2",{className:"big-spacer-bottom"},Object(i.translate)("page_not_found")),r.createElement("p",{className:"spacer-bottom"},Object(i.translate)("address_mistyped_or_page_moved")),r.createElement("p",null,r.createElement(a.Link,{to:"/"},Object(i.translate)("go_back_to_homepage"))))))}},873:function(t,e,n){"use strict";var r,o=n(13),a=n(681),i=n(668),c=n(670),s=n(176),l=n(708),u=n(762),p=n(95),f=n(38),d=n(736),h=n(672),m=n(685),b=n(735),v=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),y=function(){return(y=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},E=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={},e.handleStart=function(t){var n=Object(b.default)(),r=t(y({store:n,el:e.container,currentUser:e.props.currentUser,intl:e.props.intl,location:e.props.location,router:e.props.router,theme:m,baseUrl:Object(f.getBaseUrl)(),l10nBundle:Object(p.a)()},e.props.options));r&&(o.isValidElement(r)?e.setState({extensionElement:r}):"function"==typeof r&&(e.stop=r))},e.handleFailure=function(){e.props.onFail(Object(s.translate)("page_extension_failed"))},e}return v(e,t),e.prototype.componentDidMount=function(){this.startExtension()},e.prototype.componentDidUpdate=function(t){t.extension!==this.props.extension?(this.stopExtension(),this.startExtension()):t.location!==this.props.location&&this.startExtension()},e.prototype.componentWillUnmount=function(){this.stopExtension()},e.prototype.startExtension=function(){Object(u.a)(this.props.extension.key).then(this.handleStart,this.handleFailure)},e.prototype.stopExtension=function(){this.stop?(this.stop(),this.stop=void 0):this.setState({extensionElement:void 0})},e.prototype.render=function(){var t=this;return o.createElement("div",null,o.createElement(a.a,{title:this.props.extension.name}),this.state.extensionElement?this.state.extensionElement:o.createElement("div",{ref:function(e){return t.container=e}}))},e}(o.PureComponent),g={onFail:d.a};e.a=Object(i.injectIntl)(Object(l.a)(Object(c.connect)((function(t){return{currentUser:Object(h.getCurrentUser)(t)}}),g)(E)))}}]);
//# sourceMappingURL=340.1594048982041.chunk.js.map