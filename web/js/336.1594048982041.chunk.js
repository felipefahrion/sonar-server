(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{2267:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return O}));var o,r=n(13),i=n(681),a=n(176),c=n(661),u=n(723),l=n.n(u),s=n(713),p=n(769),f=n(708),d=n(693),m=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),h=function(t,e,n,o){return new(n||(n=Promise))((function(r,i){function a(t){try{u(o.next(t))}catch(t){i(t)}}function c(t){try{u(o.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}u((o=o.apply(t,e||[])).next())}))},b=function(t,e){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.handleDelete=function(){return h(e,void 0,void 0,(function(){var t,e,n;return b(this,(function(o){switch(o.label){case 0:return t=this.props.component,e=t.qualifier===d.a.Project?s.e:s.d,n=Object(d.c)(t.qualifier)?"/portfolios":"/",[4,e(t.key)];case 1:return o.sent(),Object(p.a)(Object(a.translateWithParameters)("project_deletion.resource_deleted",t.name)),this.props.router.replace(n),[2]}}))}))},e}return m(e,t),e.prototype.render=function(){var t=this.props.component;return r.createElement(l.a,{confirmButtonText:Object(a.translate)("delete"),isDestructive:!0,modalBody:Object(a.translateWithParameters)("project_deletion.delete_resource_confirmation",t.name),modalHeader:Object(a.translate)("qualifier.delete",t.qualifier),onConfirm:this.handleDelete},(function(t){var e=t.onClick;return r.createElement(c.Button,{className:"button-red",id:"delete-project",onClick:e},Object(a.translate)("delete"))}))},e}(r.PureComponent),_=Object(f.a)(y);function v(t){var e,n=t.component.qualifier;return e=["VW","SVW"].includes(n)?Object(a.translate)("portfolio_deletion.page.description"):"APP"===n?Object(a.translate)("application_deletion.page.description"):Object(a.translate)("project_deletion.page.description"),r.createElement("header",{className:"page-header"},r.createElement("h1",{className:"page-title"},Object(a.translate)("deletion.page")),r.createElement("div",{className:"page-description"},e))}function O(t){return r.createElement("div",{className:"page page-limited"},r.createElement(i.a,{defer:!1,title:Object(a.translate)("deletion.page")}),r.createElement(v,{component:t.component}),r.createElement(_,{component:t.component}))}},684:function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},a=this&&this.__rest||function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]])}return n};Object.defineProperty(e,"__esModule",{value:!0});var c=n(13),u=n(678),l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mounted=!1,e.state={submitting:!1},e.stopSubmitting=function(){e.mounted&&e.setState({submitting:!1})},e.handleCloseClick=function(t){t&&(t.preventDefault(),t.currentTarget.blur()),e.props.onClose()},e.handleFormSubmit=function(t){t.preventDefault(),e.submit()},e.handleSubmitClick=function(t){t&&(t.preventDefault(),t.currentTarget.blur()),e.submit()},e.submit=function(){var t=e.props.onSubmit();t&&(e.setState({submitting:!0}),t.then(e.stopSubmitting,e.stopSubmitting))},e}return r(e,t),e.prototype.componentDidMount=function(){this.mounted=!0},e.prototype.componentWillUnmount=function(){this.mounted=!1},e.prototype.render=function(){var t=this.props,e=t.children,n=t.header,o=t.onClose,r=(t.onSubmit,a(t,["children","header","onClose","onSubmit"]));return c.createElement(u.default,i({contentLabel:n,onRequestClose:o},r),e({onCloseClick:this.handleCloseClick,onFormSubmit:this.handleFormSubmit,onSubmitClick:this.handleSubmitClick,submitting:this.state.submitting}))},e}(c.Component);e.default=l},697:function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var a=n(13),c=n(176),u=n(667),l=n(661),s=n(775),p=n(684),f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mounted=!1,e.handleSubmit=function(){var t=e.props.onConfirm(e.props.confirmData);return t?t.then(e.props.onClose,(function(){})):void e.props.onClose()},e.renderModalContent=function(t){var n=t.onCloseClick,o=t.onFormSubmit,r=t.submitting,i=e.props,p=i.children,f=i.confirmButtonText,d=i.confirmDisable,m=i.header,h=i.headerDescription,b=i.isDestructive,y=i.cancelButtonText,_=void 0===y?c.translate("cancel"):y;return a.createElement(s.default,null,a.createElement("form",{onSubmit:o},a.createElement("header",{className:"modal-head"},a.createElement("h2",null,m),h),a.createElement("div",{className:"modal-body"},p),a.createElement("footer",{className:"modal-foot"},a.createElement(u.default,{className:"spacer-right",loading:r}),a.createElement(l.SubmitButton,{autoFocus:!0,className:b?"button-red":void 0,disabled:r||d},f),a.createElement(l.ResetButtonLink,{disabled:r,onClick:n},_))))},e}return r(e,t),e.prototype.componentDidMount=function(){this.mounted=!0},e.prototype.componentWillUnmount=function(){this.mounted=!1},e.prototype.render=function(){var t=this.props,e={header:t.header,onClose:t.onClose,noBackdrop:t.noBackdrop,size:t.size};return a.createElement(p.default,i({onSubmit:this.handleSubmit},e),this.renderModalContent)},e}(a.PureComponent);e.default=f},723:function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},a=this&&this.__rest||function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]])}return n};Object.defineProperty(e,"__esModule",{value:!0});var c=n(13),u=n(697),l=n(724),s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.renderConfirmModal=function(t){var n=t.onClose,o=e.props,r=(o.children,o.modalBody),l=o.modalHeader,s=o.modalHeaderDescription,p=a(o,["children","modalBody","modalHeader","modalHeaderDescription"]);return c.createElement(u.default,i({header:l,headerDescription:s,onClose:n},p),r)},e}return r(e,t),e.prototype.render=function(){return c.createElement(l.default,{modal:this.renderConfirmModal},this.props.children)},e}(c.PureComponent);e.default=s},724:function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(13),a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mounted=!1,e.state={modal:!1},e.handleButtonClick=function(){e.setState({modal:!0})},e.handleFormSubmit=function(t){t&&t.preventDefault(),e.setState({modal:!0})},e.handleCloseModal=function(){e.mounted&&e.setState({modal:!1})},e}return r(e,t),e.prototype.componentDidMount=function(){this.mounted=!0},e.prototype.componentWillUnmount=function(){this.mounted=!1},e.prototype.render=function(){return i.createElement(i.Fragment,null,this.props.children({onClick:this.handleButtonClick,onFormSubmit:this.handleFormSubmit}),this.state.modal&&this.props.modal({onClose:this.handleCloseModal}))},e}(i.PureComponent);e.default=a},769:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n(736),r=n(735);function i(t){Object(r.default)().dispatch(o.b(t))}}}]);
//# sourceMappingURL=336.1594048982041.chunk.js.map