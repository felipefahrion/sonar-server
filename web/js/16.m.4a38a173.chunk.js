(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1250:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(2),r=n(316),o=n.n(r),i=n(364),l=n.n(i),s=n(354),c=n.n(s),u=n(31);function p({date:e}){return e?a.createElement(o.a,{overlay:a.createElement(c.a,{date:e})},a.createElement("span",null,a.createElement(l.a,{date:e}))):a.createElement("span",null,Object(u.translate)("never"))}},1262:function(e,t,n){"use strict";var a=n(2),r=n(380),o=n.n(r),i=n(31),l=n(362),s=n(359),c=n(6),u=n(322),p=n(465),m=n(312),d=n(330),h=n.n(d);class f extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!1,name:null},this.handleNameChange=e=>{this.setState({name:e.currentTarget.value})},this.handleFormSubmit=e=>{e.preventDefault();const{name:t}=this.state;null!=t&&(this.setState({loading:!0}),Object(l.i)(this.props.profile.key,t).then(e=>this.props.onCopy(e.name),()=>{this.mounted&&this.setState({loading:!1})}))}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const{profile:e}=this.props,t=Object(i.translateWithParameters)("quality_profiles.copy_x_title",e.name,e.languageName),n=this.state.loading||!this.state.name||this.state.name===e.name;return a.createElement(h.a,{contentLabel:t,onRequestClose:this.props.onClose,size:"small"},a.createElement("form",{id:"copy-profile-form",onSubmit:this.handleFormSubmit},a.createElement("div",{className:"modal-head"},a.createElement("h2",null,t)),a.createElement("div",{className:"modal-body"},a.createElement("div",{className:"modal-field"},a.createElement("label",{htmlFor:"copy-profile-name"},Object(i.translate)("quality_profiles.copy_new_name"),a.createElement("em",{className:"mandatory"},"*")),a.createElement("input",{autoFocus:!0,id:"copy-profile-name",maxLength:100,name:"name",onChange:this.handleNameChange,required:!0,size:50,type:"text",value:null!=this.state.name?this.state.name:e.name}))),a.createElement("div",{className:"modal-foot"},this.state.loading&&a.createElement("i",{className:"spinner spacer-right"}),a.createElement(m.SubmitButton,{disabled:n,id:"copy-profile-submit"},Object(i.translate)("copy")),a.createElement(m.ResetButtonLink,{id:"copy-profile-cancel",onClick:this.props.onClose},Object(i.translate)("cancel")))))}}var g=n(325);class y extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!1},this.handleFormSubmit=e=>{e.preventDefault(),this.setState({loading:!0}),Object(l.l)(this.props.profile).then(this.props.onDelete,()=>{this.mounted&&this.setState({loading:!1})})}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const{profile:e}=this.props,t=Object(i.translate)("quality_profiles.delete_confirm_title");return a.createElement(h.a,{contentLabel:t,onRequestClose:this.props.onClose},a.createElement("form",{id:"delete-profile-form",onSubmit:this.handleFormSubmit},a.createElement("div",{className:"modal-head"},a.createElement("h2",null,t)),a.createElement("div",{className:"modal-body"},a.createElement("div",{className:"js-modal-messages"}),e.childrenCount>0?a.createElement("div",null,a.createElement(g.Alert,{variant:"warning"},Object(i.translate)("quality_profiles.this_profile_has_descendants")),a.createElement("p",null,Object(i.translateWithParameters)("quality_profiles.are_you_sure_want_delete_profile_x_and_descendants",e.name,e.languageName))):a.createElement("p",null,Object(i.translateWithParameters)("quality_profiles.are_you_sure_want_delete_profile_x",e.name,e.languageName))),a.createElement("div",{className:"modal-foot"},this.state.loading&&a.createElement("i",{className:"spinner spacer-right"}),a.createElement(m.SubmitButton,{className:"button-red",disabled:this.state.loading,id:"delete-profile-submit"},Object(i.translate)("delete")),a.createElement(m.ResetButtonLink,{id:"delete-profile-cancel",onClick:this.props.onClose},Object(i.translate)("cancel")))))}}var b=n(318),O=n.n(b);class C extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!1},this.canSubmit=e=>Boolean(e.name&&e.name.length),this.handleNameChange=e=>{this.setState({name:e.currentTarget.value})},this.handleFormSubmit=async e=>{if(e.preventDefault(),this.canSubmit(this.state)){const{organization:e,profile:t}=this.props,{name:n}=this.state,a=new FormData;a.append("language",t.language),a.append("name",n),e&&a.append("organization",e),this.setState({loading:!0});try{const{profile:e}=await Object(l.j)(a);await Object(l.g)(e,t),this.props.onExtend(e.name)}finally{this.mounted&&this.setState({loading:!1})}}}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const{profile:e}=this.props,t=Object(i.translateWithParameters)("quality_profiles.extend_x_title",e.name,e.languageName);return a.createElement(h.a,{contentLabel:t,onRequestClose:this.props.onClose,size:"small"},a.createElement("form",{onSubmit:this.handleFormSubmit},a.createElement("div",{className:"modal-head"},a.createElement("h2",null,t)),a.createElement("div",{className:"modal-body"},a.createElement("div",{className:"modal-field"},a.createElement("label",{htmlFor:"extend-profile-name"},Object(i.translate)("quality_profiles.copy_new_name"),a.createElement("em",{className:"mandatory"},"*")),a.createElement("input",{autoFocus:!0,id:"extend-profile-name",maxLength:100,name:"name",onChange:this.handleNameChange,required:!0,size:50,type:"text",value:this.state.name?this.state.name:""}))),a.createElement("div",{className:"modal-foot"},a.createElement(O.a,{className:"spacer-right",loading:this.state.loading}),a.createElement(m.SubmitButton,{disabled:this.state.loading||!this.canSubmit(this.state),id:"extend-profile-submit"},Object(i.translate)("extend")),a.createElement(m.ResetButtonLink,{id:"extend-profile-cancel",onClick:this.props.onClose},Object(i.translate)("cancel")))))}}class v extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!1,name:null},this.handleNameChange=e=>{this.setState({name:e.currentTarget.value})},this.handleFormSubmit=e=>{e.preventDefault();const{name:t}=this.state;null!=t&&(this.setState({loading:!0}),Object(l.x)(this.props.profile.key,t).then(()=>this.props.onRename(t),()=>{this.mounted&&this.setState({loading:!1})}))}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const{profile:e}=this.props,t=Object(i.translateWithParameters)("quality_profiles.rename_x_title",e.name,e.languageName),n=this.state.loading||!this.state.name||this.state.name===e.name;return a.createElement(h.a,{contentLabel:t,onRequestClose:this.props.onClose,size:"small"},a.createElement("form",{id:"rename-profile-form",onSubmit:this.handleFormSubmit},a.createElement("div",{className:"modal-head"},a.createElement("h2",null,t)),a.createElement("div",{className:"modal-body"},a.createElement("div",{className:"modal-field"},a.createElement("label",{htmlFor:"rename-profile-name"},Object(i.translate)("quality_profiles.new_name"),a.createElement("em",{className:"mandatory"},"*")),a.createElement("input",{autoFocus:!0,id:"rename-profile-name",maxLength:100,name:"name",onChange:this.handleNameChange,required:!0,size:50,type:"text",value:null!=this.state.name?this.state.name:e.name}))),a.createElement("div",{className:"modal-foot"},this.state.loading&&a.createElement("i",{className:"spinner spacer-right"}),a.createElement(m.SubmitButton,{disabled:n,id:"rename-profile-submit"},Object(i.translate)("rename")),a.createElement(m.ResetButtonLink,{id:"rename-profile-cancel",onClick:this.props.onClose},Object(i.translate)("cancel")))))}}class E extends a.PureComponent{constructor(){super(...arguments),this.state={copyFormOpen:!1,extendFormOpen:!1,deleteFormOpen:!1,renameFormOpen:!1},this.closeCopyForm=()=>{this.setState({copyFormOpen:!1})},this.closeDeleteForm=()=>{this.setState({deleteFormOpen:!1})},this.closeExtendForm=()=>{this.setState({extendFormOpen:!1})},this.closeRenameForm=()=>{this.setState({renameFormOpen:!1})},this.handleCopyClick=()=>{this.setState({copyFormOpen:!0})},this.handleDeleteClick=()=>{this.setState({deleteFormOpen:!0})},this.handleExtendClick=()=>{this.setState({extendFormOpen:!0})},this.handleRenameClick=()=>{this.setState({renameFormOpen:!0})},this.handleProfileCopy=e=>{this.closeCopyForm(),this.navigateToNewProfile(e)},this.handleProfileDelete=()=>{this.props.router.replace(Object(p.e)(this.props.organization)),this.props.updateProfiles()},this.handleProfileExtend=e=>{this.closeExtendForm(),this.navigateToNewProfile(e)},this.handleProfileRename=e=>{this.closeRenameForm(),this.props.updateProfiles().then(()=>{this.props.fromList||this.props.router.replace(Object(p.c)(e,this.props.profile.language,this.props.organization))},()=>{})},this.handleSetDefaultClick=()=>{Object(l.C)(this.props.profile).then(this.props.updateProfiles,()=>{})},this.navigateToNewProfile=e=>{this.props.updateProfiles().then(()=>{this.props.router.push(Object(p.c)(e,this.props.profile.language,this.props.organization))},()=>{})}}render(){const{profile:e}=this.props,{actions:t={}}=e,n="".concat(Object(c.getBaseUrl)()).concat(Object(l.t)(e)),s=Object(u.A)({qprofile:e.key,activation:"false"},this.props.organization);return a.createElement(a.Fragment,null,a.createElement(o.a,{className:this.props.className},t.edit&&a.createElement(r.ActionsDropdownItem,{to:s},a.createElement("span",{"data-test":"quality-profiles__activate-more-rules"},Object(i.translate)("quality_profiles.activate_more_rules"))),!e.isBuiltIn&&a.createElement(r.ActionsDropdownItem,{download:"".concat(e.key,".xml"),to:n},a.createElement("span",{"data-test":"quality-profiles__backup"},Object(i.translate)("backup_verb"))),a.createElement(r.ActionsDropdownItem,{to:Object(p.b)(e.name,e.language,this.props.organization)},a.createElement("span",{"data-test":"quality-profiles__compare"},Object(i.translate)("compare"))),t.copy&&a.createElement(a.Fragment,null,a.createElement(r.ActionsDropdownItem,{onClick:this.handleCopyClick},a.createElement("span",{"data-test":"quality-profiles__copy"},Object(i.translate)("copy"))),a.createElement(r.ActionsDropdownItem,{onClick:this.handleExtendClick},a.createElement("span",{"data-test":"quality-profiles__extend"},Object(i.translate)("extend")))),t.edit&&a.createElement(r.ActionsDropdownItem,{onClick:this.handleRenameClick},a.createElement("span",{"data-test":"quality-profiles__rename"},Object(i.translate)("rename"))),t.setAsDefault&&a.createElement(r.ActionsDropdownItem,{onClick:this.handleSetDefaultClick},a.createElement("span",{"data-test":"quality-profiles__set-as-default"},Object(i.translate)("set_as_default"))),t.delete&&a.createElement(r.ActionsDropdownDivider,null),t.delete&&a.createElement(r.ActionsDropdownItem,{destructive:!0,onClick:this.handleDeleteClick},a.createElement("span",{"data-test":"quality-profiles__delete"},Object(i.translate)("delete")))),this.state.copyFormOpen&&a.createElement(f,{onClose:this.closeCopyForm,onCopy:this.handleProfileCopy,profile:e}),this.state.extendFormOpen&&a.createElement(C,{onClose:this.closeExtendForm,onExtend:this.handleProfileExtend,organization:this.props.organization,profile:e}),this.state.deleteFormOpen&&a.createElement(y,{onClose:this.closeDeleteForm,onDelete:this.handleProfileDelete,profile:e}),this.state.renameFormOpen&&a.createElement(v,{onClose:this.closeRenameForm,onRename:this.handleProfileRename,profile:e}))}}t.a=Object(s.a)(E)},324:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(311),r=n(2),o=n(370),i=n(340);n(341);var l=n(316);t.default=function(e){var t=e.tagName,n=void 0===t?"div":t;return r.createElement(n,{className:a("help-tooltip",e.className)},r.createElement(l.default,{mouseLeaveDelay:.25,onShow:e.onShow,overlay:e.overlay,placement:e.placement},r.createElement("span",{className:"display-inline-flex-center"},e.children||r.createElement(i.ThemeConsumer,null,(function(e){return r.createElement(o.default,{fill:e.colors.gray71,size:12})})))))}},341:function(e,t,n){var a=n(313),r=n(342);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},i=(a(r,o),r.locals?r.locals:{});e.exports=i},342:function(e,t,n){(t=n(314)(!1)).push([e.i,".help-tooltip{display:inline-flex;align-items:center;vertical-align:middle}.help-toolip-link{display:block;width:12px;height:12px;border:none}",""]),e.exports=t},351:function(e,t,n){var a=n(372),r=n(345),o=n(416),i=n(363);e.exports=function(e,t){return(i(e)?a:o)(e,r(t,3))}},354:function(e,t,n){"use strict";var a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=n(319),i=n(26);t.formatterOption={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"},t.default=function(e){var n=e.children,l=e.date;return r.createElement(o.FormattedDate,a({value:i.parseDate(l)},t.formatterOption),n)}},361:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(2),r=n(324),o=n.n(r),i=n(327),l=n(385);const s=Object(i.lazyLoadComponent)(()=>Promise.all([n.e(5),n.e(22)]).then(n.bind(null,507)),"DocMarkdownBlock");class c extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={}}componentDidMount(){this.mounted=!0,this.props.doc.then(({default:e})=>{this.mounted&&this.setState({content:e})},()=>{})}componentWillUnmount(){this.mounted=!1}render(){return this.state.content?a.createElement(o.a,{className:this.props.className,overlay:a.createElement("div",{className:"abs-width-300"},a.createElement(s,{childProps:this.props.overlayProps,className:"cut-margins",content:Object(l.filterContent)(this.state.content),isTooltip:!0}))},this.props.children):this.props.children||null}}},362:function(e,t,n){"use strict";n.d(t,"A",(function(){return u})),n.d(t,"s",(function(){return p})),n.d(t,"j",(function(){return m})),n.d(t,"y",(function(){return d})),n.d(t,"r",(function(){return h})),n.d(t,"q",(function(){return f})),n.d(t,"C",(function(){return g})),n.d(t,"x",(function(){return y})),n.d(t,"i",(function(){return b})),n.d(t,"l",(function(){return O})),n.d(t,"g",(function(){return C})),n.d(t,"t",(function(){return v})),n.d(t,"u",(function(){return E})),n.d(t,"o",(function(){return j})),n.d(t,"n",(function(){return _})),n.d(t,"p",(function(){return N})),n.d(t,"h",(function(){return x})),n.d(t,"d",(function(){return q})),n.d(t,"m",(function(){return S})),n.d(t,"B",(function(){return P})),n.d(t,"z",(function(){return w})),n.d(t,"c",(function(){return k})),n.d(t,"w",(function(){return F})),n.d(t,"b",(function(){return D})),n.d(t,"v",(function(){return z})),n.d(t,"e",(function(){return L})),n.d(t,"f",(function(){return R})),n.d(t,"a",(function(){return B})),n.d(t,"k",(function(){return J}));var a=n(351),r=n.n(a),o=n(473),i=n(9),l=n(326);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){return Object(i.getJSON)("/api/qualityprofiles/search",e).catch(l.a)}function p({compareToSonarWay:e,profile:{key:t}}){return Object(i.getJSON)("/api/qualityprofiles/show",{compareToSonarWay:e,key:t})}function m(e){return Object(i.postJSON)("/api/qualityprofiles/create",e).catch(l.a)}function d(e){return Object(i.postJSON)("/api/qualityprofiles/restore",e).catch(l.a)}function h(e){return Object(i.getJSON)("/api/qualityprofiles/projects",e).catch(l.a)}function f({language:e,name:t,organization:n}){return Object(i.getJSON)("/api/qualityprofiles/inheritance",{language:e,qualityProfile:t,organization:n}).catch(l.a)}function g({language:e,name:t,organization:n}){return Object(i.post)("/api/qualityprofiles/set_default",{language:e,qualityProfile:t,organization:n})}function y(e,t){return Object(i.post)("/api/qualityprofiles/rename",{key:e,name:t}).catch(l.a)}function b(e,t){return Object(i.postJSON)("/api/qualityprofiles/copy",{fromKey:e,toName:t}).catch(l.a)}function O({language:e,name:t,organization:n}){return Object(i.post)("/api/qualityprofiles/delete",{language:e,qualityProfile:t,organization:n}).catch(l.a)}function C({language:e,name:t,organization:n},a){return Object(i.post)("/api/qualityprofiles/change_parent",{language:e,qualityProfile:t,organization:n,parentQualityProfile:a?a.name:void 0}).catch(l.a)}function v({language:e,name:t,organization:n}){const a=Object.entries({language:e,qualityProfile:t,organization:n}).map(([e,t])=>"".concat(e,"=").concat(encodeURIComponent(t))).join("&");return"/api/qualityprofiles/backup?".concat(a)}function E({key:e},{language:t,name:n,organization:a}){const r=Object.entries({exporterKey:e,language:t,qualityProfile:n,organization:a}).map(([e,t])=>"".concat(e,"=").concat(encodeURIComponent(t))).join("&");return"/api/qualityprofiles/export?".concat(r)}function j(){return Object(i.getJSON)("/api/qualityprofiles/importers").then(e=>e.importers,l.a)}function _(){return Object(i.getJSON)("/api/qualityprofiles/exporters").then(e=>e.exporters)}function N(e,t,{language:n,name:a,organization:r},o){return Object(i.getJSON)("/api/qualityprofiles/changelog",{since:e,to:t,language:n,qualityProfile:a,organization:r,p:o})}function x(e,t){return Object(i.getJSON)("/api/qualityprofiles/compare",{leftKey:e,rightKey:t})}function q({language:e,name:t,organization:n},a){return Object(i.post)("/api/qualityprofiles/add_project",{language:e,qualityProfile:t,organization:n,project:a}).catch(l.a)}function S({language:e,name:t,organization:n},a){return Object(i.post)("/api/qualityprofiles/remove_project",{language:e,qualityProfile:t,organization:n,project:a}).catch(l.a)}function P(e){return Object(i.getJSON)("/api/qualityprofiles/search_users",e).catch(l.a)}function w(e){return Object(i.getJSON)("/api/qualityprofiles/search_groups",e).catch(l.a)}function k(e){return Object(i.post)("/api/qualityprofiles/add_user",e).catch(l.a)}function F(e){return Object(i.post)("/api/qualityprofiles/remove_user",e).catch(l.a)}function D(e){return Object(i.post)("/api/qualityprofiles/add_group",e).catch(l.a)}function z(e){return Object(i.post)("/api/qualityprofiles/remove_group",e).catch(l.a)}function L(e){return Object(i.postJSON)("/api/qualityprofiles/activate_rules",e)}function R(e){return Object(i.postJSON)("/api/qualityprofiles/deactivate_rules",e)}function B(e){const t=e.params&&r()(e.params,(e,t)=>"".concat(t,"=").concat(Object(o.csvEscape)(e))).join(";");return Object(i.post)("/api/qualityprofiles/activate_rule",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{params:t})).catch(l.a)}function J(e){return Object(i.post)("/api/qualityprofiles/deactivate_rule",e).catch(l.a)}},364:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),r=n(319),o=n(26);t.default=function(e){var t=e.children,n=e.date;return a.createElement(r.FormattedRelative,{value:o.parseDate(n)},t)}},380:function(e,t,n){"use strict";var a,r=this&&this.__extends||(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=n(311),i=n(2),l=n(33),s=n(31),c=n(334),u=n(381),p=n(312),m=n(373),d=n(328),h=n(316);t.default=function(e){var t=e.children,n=e.className,a=e.overlayPlacement,r=e.small,l=e.toggleClassName;return i.createElement(d.default,{className:n,onOpen:e.onOpen,overlay:i.createElement("ul",{className:"menu"},t),overlayPlacement:a},i.createElement(p.Button,{className:o("dropdown-toggle",l,{"button-small":r})},i.createElement(u.default,{size:r?12:14}),i.createElement(c.default,{className:"little-spacer-left"})))};var f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.onClick&&t.props.onClick()},t}return r(t,e),t.prototype.render=function(){var e=this,t=o(this.props.className,{"text-danger":this.props.destructive});return this.props.download&&"string"==typeof this.props.to?i.createElement("li",null,i.createElement("a",{className:t,download:this.props.download,href:this.props.to,id:this.props.id},this.props.children)):this.props.to?i.createElement("li",null,i.createElement(l.Link,{className:t,id:this.props.id,to:this.props.to},this.props.children)):this.props.copyValue?i.createElement(m.ClipboardBase,null,(function(n){var a=n.setCopyButton,r=n.copySuccess;return i.createElement(h.default,{overlay:s.translate("copied_action"),visible:r},i.createElement("li",{"data-clipboard-text":e.props.copyValue,ref:a},i.createElement("a",{className:t,href:"#",id:e.props.id,onClick:e.handleClick},e.props.children)))})):i.createElement("li",null,i.createElement("a",{className:t,href:"#",id:this.props.id,onClick:this.handleClick},this.props.children))},t}(i.PureComponent);t.ActionsDropdownItem=f,t.ActionsDropdownDivider=function(){return i.createElement("li",{className:"divider"})}},381:function(e,t,n){"use strict";var a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},r=this&&this.__rest||function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),i=n(315);t.default=function(e){var t=e.fill,n=void 0===t?"currentColor":t,l=e.size,s=void 0===l?14:l,c=r(e,["fill","size"]);return o.createElement(i.default,a({size:s,viewBox:"0 0 14 14"},c),o.createElement("g",{transform:"matrix(0.0364583,0,0,0.0364583,0,-1.16667)"},o.createElement("path",{d:"M256,224C256,206.333 249.75,191.25 237.25,178.75C224.75,166.25 209.667,160 192,160C174.333,160 159.25,166.25 146.75,178.75C134.25,191.25 128,206.333 128,224C128,241.667 134.25,256.75 146.75,269.25C159.25,281.75 174.333,288 192,288C209.667,288 224.75,281.75 237.25,269.25C249.75,256.75 256,241.667 256,224ZM384,196.75L384,252.25C384,254.25 383.333,256.167 382,258C380.667,259.833 379,260.917 377,261.25L330.75,268.25C327.583,277.25 324.333,284.833 321,291C326.833,299.333 335.75,310.833 347.75,325.5C349.417,327.5 350.25,329.583 350.25,331.75C350.25,333.917 349.5,335.833 348,337.5C343.5,343.667 335.25,352.667 323.25,364.5C311.25,376.333 303.417,382.25 299.75,382.25C297.75,382.25 295.583,381.5 293.25,380L258.75,353C251.417,356.833 243.833,360 236,362.5C233.333,385.167 230.917,400.667 228.75,409C227.583,413.667 224.583,416 219.75,416L164.25,416C161.917,416 159.875,415.292 158.125,413.875C156.375,412.458 155.417,410.667 155.25,408.5L148.25,362.5C140.083,359.833 132.583,356.75 125.75,353.25L90.5,380C88.833,381.5 86.75,382.25 84.25,382.25C81.917,382.25 79.833,381.333 78,379.5C57,360.5 43.25,346.5 36.75,337.5C35.583,335.833 35,333.917 35,331.75C35,329.75 35.667,327.833 37,326C39.5,322.5 43.75,316.958 49.75,309.375C55.75,301.792 60.25,295.917 63.25,291.75C58.75,283.417 55.333,275.167 53,267L7.25,260.25C5.083,259.917 3.333,258.875 2,257.125C0.667,255.375 0,253.417 0,251.25L0,195.75C0,193.75 0.667,191.833 2,190C3.333,188.167 4.917,187.083 6.75,186.75L53.25,179.75C55.583,172.083 58.833,164.417 63,156.75C56.333,147.25 47.417,135.75 36.25,122.25C34.583,120.25 33.75,118.25 33.75,116.25C33.75,114.583 34.5,112.667 36,110.5C40.333,104.5 48.542,95.542 60.625,83.625C72.708,71.708 80.583,65.75 84.25,65.75C86.417,65.75 88.583,66.583 90.75,68.25L125.25,95C132.583,91.167 140.167,88 148,85.5C150.667,62.833 153.083,47.333 155.25,39C156.417,34.333 159.417,32 164.25,32L219.75,32C222.083,32 224.125,32.708 225.875,34.125C227.625,35.542 228.583,37.333 228.75,39.5L235.75,85.5C243.917,88.167 251.417,91.25 258.25,94.75L293.75,68C295.25,66.5 297.25,65.75 299.75,65.75C301.917,65.75 304,66.583 306,68.25C327.5,88.083 341.25,102.25 347.25,110.75C348.417,112.083 349,113.917 349,116.25C349,118.25 348.333,120.167 347,122C344.5,125.5 340.25,131.042 334.25,138.625C328.25,146.208 323.75,152.083 320.75,156.25C325.083,164.583 328.5,172.75 331,180.75L376.75,187.75C378.917,188.083 380.667,189.125 382,190.875C383.333,192.625 384,194.583 384,196.75Z",style:{fill:n}})))}},385:function(e,t,n){"use strict";function a(e){let t,n;for(let a=0;a<e.length;a++){if("---"===e[a].trim()){if(void 0!==t){n=a;break}t=a}}return void 0!==n?{firstLine:t,lastLine:n}:void 0}function r(e){const t={};for(let n=0;n<e.length;n++){const a=e[n].split(":").map(e=>e.trim());2===a.length&&(t[a[0]]=a[1])}return t}function o(e,t){const n="\x3c!-- ".concat(t," --\x3e"),a="\x3c!-- /".concat(t," --\x3e");let r=e,o=r.indexOf(n),i=r.indexOf(a);for(;-1!==o&&-1!==i;)o<i?r=r.substring(0,o)+r.substring(i+a.length):(console.error(new Error('Documentation - incorrect usage of conditional formatting tags here: "'.concat(r.substring(i,o+n.length),'"'))),r=r.substring(0,i)+r.substring(i+a.length,o)+r.substring(o+n.length)),o=r.indexOf(n),i=r.indexOf(a);return r}e.exports={getFrontMatter:function(e){const t=e.split("\n"),n=a(t);return n?r(t.slice(n.firstLine+1,n.lastLine)):{}},separateFrontMatter:function(e){const t=e.split("\n"),n=a(t);if(n){const e=r(t.slice(n.firstLine+1,n.lastLine)),a=t.slice(n.lastLine+1).join("\n");return{frontmatter:e,content:a}}return{frontmatter:{},content:e}},filterContent:function(e){const t="\x3c!-- \\/?(sonarqube|sonarcloud|static) --\x3e",{isSonarCloud:a,getInstance:r}=n(6),i=o(e.replace(/{instance}/gi,r()),"static");return(a()?o(i,"sonarqube"):o(i,"sonarcloud")).replace(new RegExp("^".concat(t,"(\n|\r|\r\n|$)"),"gm"),"").replace(new RegExp("".concat(t),"g"),"")}}},473:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.csvEscape=function(e){return'"'+e.replace(/"/g,'\\"')+'"'}},675:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(311),r=n(2),o=n(31),i=n(361);function l({className:e,tooltip:t=!0}){const l=r.createElement("div",{className:a("badge badge-info",e)},Object(o.translate)("quality_profiles.built_in"));return t?r.createElement(i.a,{doc:Promise.resolve().then(n.bind(null,757))},l):l}},687:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(2),r=n(317),o=n(465);function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function l(e){let{name:t,language:n,organization:l,children:s}=e,c=i(e,["name","language","organization","children"]);return a.createElement(r.Link,Object.assign({activeClassName:"link-no-underline",to:Object(o.c)(t,n,l)},c),s)}},757:function(e,t,n){"use strict";n.r(t),t.default="Built-in profiles are provided directly by the language analyzers and may be updated with each new analyzer version. They represent best-practice, minimum rule sets.\n"}}]);
//# sourceMappingURL=16.m.4a38a173.chunk.js.map