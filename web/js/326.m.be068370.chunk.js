(window.webpackJsonp=window.webpackJsonp||[]).push([[326],{1745:function(e,t,n){"use strict";n.r(t),t.default="Add new members to this organization and manage their permissions. Note that users must have signed up on the service to be able to find and add them.\n\n---\n\nSee also: [Manage a Team](/organizations/manage-team/)\n"},1883:function(e,t,n){"use strict";n.r(t);var r=n(321),a=n(438),s=n(323),o=n(2),i=n(332),l=n(347),c=n.n(l),m=n(31),u=n(489),h=n(686),p=n(352),d=n(333),g=n(329),b=n.n(g),f=n(380),O=n.n(f),E=n(320),j=n(371),v=n(1743),y=n.n(v),S=n(804),z=n.n(S),M=n(486),k=n.n(M),C=n(312),N=n(335),P=n.n(N),_=n(318),x=n.n(_),w=n(436),G=n(311),L=n(339),D=n.n(L);class F extends o.PureComponent{constructor(){super(...arguments),this.onCheck=e=>{const{group:t}=this.props;t.default||this.props.onCheck(t.name,e)},this.toggleCheck=()=>{this.onCheck(!this.props.checked)}}render(){const{group:e}=this.props;return o.createElement("li",{className:G("capitalize list-item-checkable-link",{disabled:e.default}),onClick:this.toggleCheck},o.createElement(D.a,{checked:this.props.checked,onCheck:this.onCheck})," ",e.name)}}function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class W extends o.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={},this.loadUserGroups=()=>{this.setState({loading:!0}),Object(w.e)({login:this.props.member.login,organization:this.props.organization.key}).then(e=>{this.mounted&&this.setState({loading:!1,userGroups:k()(e.groups,"name")})},()=>{this.mounted&&this.setState({loading:!1})})},this.isGroupSelected=e=>{if(this.state.userGroups){const t=this.state.userGroups[e]||{};return t.status?"add"===t.status:!0===t.selected}return!1},this.onCheck=(e,t)=>{this.setState(n=>{const{userGroups:r={}}=n,a=r[e]||{};let s="";return a.selected&&!t?s="remove":!a.selected&&t&&(s="add"),{userGroups:R({},r,{[e]:R({},a,{status:s})})}})},this.handleSubmit=()=>this.props.updateMemberGroups(this.props.member,Object.keys(z()(this.state.userGroups,e=>"add"===e.status)),Object.keys(z()(this.state.userGroups,e=>"remove"===e.status))).then(this.props.onClose)}componentDidMount(){this.mounted=!0,this.loadUserGroups()}componentWillUnmount(){this.mounted=!1}render(){const{loading:e,userGroups:t={}}=this.state,n=Object(m.translate)("organization.members.manage_groups"),r=y()(t,e=>void 0!==e.status);return o.createElement(P.a,{header:n,onClose:this.props.onClose,onSubmit:this.handleSubmit},({onCloseClick:t,onFormSubmit:a,submitting:s})=>o.createElement("form",{onSubmit:a},o.createElement("header",{className:"modal-head"},o.createElement("h2",null,n)),o.createElement("div",{className:"modal-body modal-container"},o.createElement("p",null,o.createElement("strong",null,Object(m.translateWithParameters)("organization.members.members_groups",this.props.member.name))),e?o.createElement(x.a,{className:"spacer-top"}):o.createElement("ul",{className:"list-spaced"},this.props.organizationGroups.map(e=>o.createElement(F,{checked:this.isGroupSelected(e.name),group:e,key:e.id,onCheck:this.onCheck})))),o.createElement("footer",{className:"modal-foot"},o.createElement(x.a,{className:"spacer-right",loading:s}),o.createElement(C.SubmitButton,{disabled:s||!r},Object(m.translate)("save")),o.createElement(C.ResetButtonLink,{disabled:s,onClick:t},Object(m.translate)("cancel")))))}}var B=n(330),q=n.n(B);class T extends o.PureComponent{constructor(){super(...arguments),this.handleSubmit=e=>{e.preventDefault(),this.props.removeMember(this.props.member),this.props.onClose()}}render(){const e=Object(m.translate)("users.remove");return o.createElement(q.a,{contentLabel:e,key:"remove-member-modal",onRequestClose:this.props.onClose},o.createElement("header",{className:"modal-head"},o.createElement("h2",null,e)),o.createElement("form",{onSubmit:this.handleSubmit},o.createElement("div",{className:"modal-body"},Object(m.translateWithParameters)("organization.members.remove_x",this.props.member.name,this.props.organization.name)),o.createElement("footer",{className:"modal-foot"},o.createElement("div",null,o.createElement(C.SubmitButton,{autoFocus:!0,className:"button-red"},Object(m.translate)("remove")),o.createElement(C.ResetButtonLink,{onClick:this.props.onClose},Object(m.translate)("cancel"))))))}}class I extends o.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={removeMemberForm:!1,manageGroupsForm:!1},this.handleManageGroupsClick=()=>{this.setState({manageGroupsForm:!0})},this.closeManageGroupsForm=()=>{this.mounted&&this.setState({manageGroupsForm:!1})},this.handleRemoveMemberClick=()=>{this.setState({removeMemberForm:!0})},this.closeRemoveMemberForm=()=>{this.mounted&&this.setState({removeMemberForm:!1})}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const{member:e,organization:t,removeMember:n}=this.props,{actions:r={}}=t;return o.createElement("tr",null,o.createElement("td",{className:"thin nowrap"},o.createElement(j.a,{hash:e.avatar,name:e.name,size:36})),o.createElement("td",{className:"nowrap text-middle"},o.createElement("strong",null,e.name),o.createElement("span",{className:"note little-spacer-left"},e.login)),r.admin&&o.createElement("td",{className:"text-right text-middle"},Object(m.translateWithParameters)("organization.members.x_groups",Object(E.formatMeasure)(e.groupCount||0,"INT"))),r.admin&&o.createElement(o.Fragment,null,o.createElement("td",{className:"nowrap text-middle text-right"},o.createElement(O.a,null,o.createElement(f.ActionsDropdownItem,{onClick:this.handleManageGroupsClick},Object(m.translate)("organization.members.manage_groups")),n&&o.createElement(o.Fragment,null,o.createElement(f.ActionsDropdownDivider,null),o.createElement(f.ActionsDropdownItem,{destructive:!0,onClick:this.handleRemoveMemberClick},Object(m.translate)("organization.members.remove"))))),this.state.manageGroupsForm&&o.createElement(W,{member:this.props.member,onClose:this.closeManageGroupsForm,organization:this.props.organization,organizationGroups:this.props.organizationGroups,updateMemberGroups:this.props.updateMemberGroups}),n&&this.state.removeMemberForm&&o.createElement(T,{member:this.props.member,onClose:this.closeRemoveMemberForm,organization:this.props.organization,removeMember:n})))}}class J extends o.PureComponent{render(){const{currentUser:e,members:t}=this.props;if(!t.length)return o.createElement("div",{className:"note"},Object(m.translate)("no_results"));const n=b()(t,e=>e.name,e=>e.login);return o.createElement("div",{className:"boxed-group boxed-group-inner"},o.createElement("table",{className:"data zebra"},o.createElement("tbody",null,n.map(t=>o.createElement(I,{key:t.login,member:t,organization:this.props.organization,organizationGroups:this.props.organizationGroups,removeMember:e.login!==t.login?this.props.removeMember:void 0,updateMemberGroups:this.props.updateMemberGroups})))))}}var K=n(324),H=n.n(K),V=n(350),$=n.n(V),Q=n(460);function X({handleSearch:e,organization:t,total:n}){return o.createElement("div",{className:"panel panel-vertical bordered-bottom spacer-bottom"},o.createElement($.a,{minLength:2,onChange:e,placeholder:Object(m.translate)("search.search_for_members")}),void 0!==n&&o.createElement("span",{className:"pull-right little-spacer-top"},o.createElement("strong",null,Object(E.formatMeasure)(n,"INT"))," ",Object(m.translate)("organization.members.members"),t.alm&&t.alm.membersSync&&o.createElement(H.a,{className:"spacer-left",overlay:o.createElement("div",{className:"abs-width-300 markdown cut-margins"},o.createElement("p",null,Object(m.translate)("organization.members.auto_sync_total_help",Object(Q.g)(t.alm.key))),o.createElement("hr",null),o.createElement("p",null,o.createElement("a",{href:Object(Q.a)(t.alm.key,t.alm.url),rel:"noopener noreferrer",target:"_blank"},Object(m.translateWithParameters)("organization.members.see_all_members_on_x",Object(m.translate)(Object(Q.g)(t.alm.key))))))})))}var Y=n(319),Z=n(317),ee=n(325),te=n(361),ne=n(368),re=n.n(ne),ae=n(343),se=n.n(ae);class oe extends o.PureComponent{constructor(e){super(e),this.mounted=!1,this.filterSearchResult=({users:e})=>e.filter(e=>!this.props.excludedUsers.includes(e.login)).slice(0,10),this.filterOptions=e=>e,this.handleSearch=e=>{this.props.searchUsers(e,Math.min(this.props.excludedUsers.length+10,500)).then(this.filterSearchResult).then(e=>{this.mounted&&this.setState({isLoading:!1,searchResult:e})},()=>{this.mounted&&this.setState({isLoading:!1,searchResult:[]})})},this.handleInputChange=e=>{null==e||1===e.length?this.setState({search:e}):(this.setState({isLoading:!0,search:e}),this.handleSearch(e))},this.handleSearch=re()(this.handleSearch,250),this.state={searchResult:[],isLoading:!1,search:""}}componentDidMount(){this.mounted=!0,this.handleSearch(this.state.search)}componentDidUpdate(e){this.props.excludedUsers!==e.excludedUsers&&this.handleSearch(this.state.search)}componentWillUnmount(){this.mounted=!1}render(){const e=1===this.state.search.length?Object(m.translateWithParameters)("select2.tooShort",2):Object(m.translate)("no_results");return o.createElement(se.a,{autoFocus:this.props.autoFocus,className:"Select-big",clearable:!1,filterOptions:this.filterOptions,isLoading:this.state.isLoading,labelKey:"name",noResultsText:e,onChange:this.props.handleValueChange,onInputChange:this.handleInputChange,optionComponent:ie,options:this.state.searchResult,placeholder:"",searchable:!0,value:this.props.selectedUser,valueComponent:le,valueKey:"login"})}}class ie extends o.PureComponent{constructor(){super(...arguments),this.handleMouseDown=e=>{e.preventDefault(),e.stopPropagation(),this.props.onSelect(this.props.option,e)},this.handleMouseEnter=e=>{this.props.onFocus(this.props.option,e)},this.handleMouseMove=e=>{this.props.isFocused||this.props.onFocus(this.props.option,e)}}render(){const{option:e}=this.props;return o.createElement("div",{className:this.props.className,onMouseDown:this.handleMouseDown,onMouseEnter:this.handleMouseEnter,onMouseMove:this.handleMouseMove,role:"listitem",title:e.name},o.createElement(j.a,{hash:e.avatar,name:e.name,size:16}),o.createElement("strong",{className:"spacer-left"},this.props.children),o.createElement("span",{className:"note little-spacer-left"},e.login))}}function le({children:e,value:t}){return o.createElement("div",{className:"Select-value",title:t?t.name:""},t&&t.login&&o.createElement("div",{className:"Select-value-label"},o.createElement(j.a,{hash:t.avatar,name:t.name,size:16}),o.createElement("strong",{className:"spacer-left"},e),o.createElement("span",{className:"note little-spacer-left"},t.login)))}function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function me(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class ue extends o.PureComponent{constructor(){super(...arguments),this.state={open:!1},this.openForm=()=>{this.setState({open:!0})},this.closeForm=()=>{this.setState({open:!1,selectedMember:void 0})},this.handleSearch=(e,t)=>{const n={organization:this.props.organization.key,ps:t,selected:"deselected"};return e?Object(u.h)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(n),!0).forEach((function(t){me(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{q:e})):Object(u.h)(n)},this.handleSubmit=e=>{e.preventDefault(),this.state.selectedMember&&(this.props.addMember(this.state.selectedMember),this.closeForm())},this.selectedMemberChange=e=>{this.setState({selectedMember:e})}}renderModal(){const e=Object(m.translate)("users.add");return o.createElement(q.a,{contentLabel:e,key:"add-member-modal",onRequestClose:this.closeForm},o.createElement("header",{className:"modal-head"},o.createElement("h2",null,e)),o.createElement("form",{onSubmit:this.handleSubmit},o.createElement("div",{className:"modal-body"},o.createElement("div",{className:"modal-field"},o.createElement("label",null,Object(m.translate)("users.search_description")),o.createElement(oe,{autoFocus:!0,excludedUsers:this.props.memberLogins,handleValueChange:this.selectedMemberChange,searchUsers:this.handleSearch,selectedUser:this.state.selectedMember}))),o.createElement("footer",{className:"modal-foot"},o.createElement("div",null,o.createElement(C.SubmitButton,{disabled:!this.state.selectedMember},Object(m.translate)("organization.members.add_to_members")),o.createElement(C.ResetButtonLink,{onClick:this.closeForm},Object(m.translate)("cancel"))))))}render(){return o.createElement(o.Fragment,null,o.createElement(C.Button,{key:"add-member-button",onClick:this.openForm},Object(m.translate)("organization.members.add")),this.state.open&&this.renderModal())}}var he=n(375),pe=n.n(he),de=n(518),ge=n.n(de);class be extends o.PureComponent{constructor(e){super(e),this.handleConfirm=()=>{const{organization:e}=this.props,{membersSync:t}=this.state;return Object(u.i)({organization:e.key,enabled:t}).then(()=>{if(this.props.fetchOrganization(e.key),t)return this.handleMemberSync()})},this.handleManualClick=()=>{this.setState({membersSync:!1})},this.handleAutoClick=()=>{this.setState({membersSync:!0})},this.handleMemberSync=()=>Object(u.j)(this.props.organization.key).then(this.props.refreshMembers),this.renderModalDescription=()=>o.createElement("p",{className:"spacer-top"},Object(m.translate)("organization.members.management.description"),o.createElement(Z.Link,{className:"spacer-left",target:"_blank",to:{pathname:"/documentation/organizations/manage-team/"}},Object(m.translate)("learn_more"))),this.renderModalBody=()=>{const{membersSync:e}=this.state,{hasOtherMembers:t,organization:n}=this.props,r=n.alm&&Object(Q.g)(n.alm.key),a=t&&n.alm&&!n.alm.membersSync;return o.createElement("div",{className:"display-flex-stretch big-spacer-top"},o.createElement(ge.a,{onClick:this.handleManualClick,selected:!e,title:Object(m.translate)("organization.members.management.manual")},o.createElement("div",{className:"spacer-left"},o.createElement("ul",{className:"big-spacer-left note"},o.createElement("li",{className:"spacer-bottom"},Object(m.translate)("organization.members.management.manual.add_members_manually")),o.createElement("li",null,Object(m.translate)("organization.members.management.choose_members_permissions"))))),o.createElement(ge.a,{onClick:this.handleAutoClick,selected:e,title:Object(m.translateWithParameters)("organization.members.management.automatic",Object(m.translate)(r||""))},o.createElement("div",{className:"spacer-left"},o.createElement("ul",{className:"big-spacer-left note"},r&&o.createElement(o.Fragment,null,o.createElement("li",{className:"spacer-bottom"},Object(m.translateWithParameters)("organization.members.management.automatic.synchronized_from_x",Object(m.translate)("organization",r))),o.createElement("li",{className:"spacer-bottom"},Object(m.translate)("organization.members.management.automatic.members_changes_reflected",r))),o.createElement("li",null,Object(m.translate)("organization.members.management.choose_members_permissions")))),r&&a&&o.createElement(ee.Alert,{className:"big-spacer-top",variant:"warning"},Object(m.translateWithParameters)("organization.members.management.automatic.warning_x",Object(m.translate)("organization",r)))))},this.state={membersSync:Boolean(e.organization.alm&&e.organization.alm.membersSync)}}render(){const{organization:e}=this.props,t=Boolean(e.alm&&e.alm.membersSync);return o.createElement(pe.a,{cancelButtonText:Object(m.translate)("close"),confirmButtonText:Object(m.translate)("save"),confirmDisable:this.state.membersSync===t,modalBody:this.renderModalBody(),modalHeader:Object(m.translate)("organization.members.management.title"),modalHeaderDescription:this.renderModalDescription(),onConfirm:this.handleConfirm,size:"medium"},({onClick:e})=>o.createElement(C.Button,{onClick:e},this.props.buttonText))}}const fe={fetchOrganization:n(424).f};var Oe=Object(r.connect)(null,fe)(be);function Ee(e){const{members:t,organization:r,refreshMembers:a}=e,s=t?t.map(e=>e.login):[],i=r.actions&&r.actions.admin,l=r.alm&&Object(Q.g)(r.alm.key),c=r.alm&&r.alm.membersSync,u=i&&r.alm&&!c,h=l&&Object(Q.e)(l)&&r.alm&&!r.alm.personal;return o.createElement("header",{className:"page-header"},o.createElement("h1",{className:"page-title"},Object(m.translate)("organization.members.page"),o.createElement(x.a,{className:"little-spacer-left",loading:e.loading})),i&&o.createElement("div",{className:"page-actions text-right"},h&&!u&&o.createElement(Oe,{buttonText:Object(m.translate)("organization.members.config_synchro"),hasOtherMembers:t&&t.length>1,organization:r,refreshMembers:a}),!c&&o.createElement("div",{className:"display-inline-block spacer-left spacer-bottom"},o.createElement(ue,{addMember:e.handleAddMember,memberLogins:s,organization:r}),o.createElement(te.a,{className:"spacer-left",doc:Promise.resolve().then(n.bind(null,1745))}))),o.createElement("div",{className:"page-description"},o.createElement(Y.FormattedMessage,{defaultMessage:Object(m.translate)("organization.members.page.description"),id:"organization.members.page.description",values:{link:o.createElement(Z.Link,{target:"_blank",to:"/documentation/organizations/manage-team/"},Object(m.translate)("organization.members.manage_a_team"))}}),l&&h&&u&&o.createElement(ee.Alert,{className:"spacer-top",display:"inline",variant:"info"},Object(m.translateWithParameters)("organization.members.auto_sync_members_from_org_x",Object(m.translate)("organization",l)),o.createElement("span",{className:"spacer-left"},o.createElement(Oe,{buttonText:Object(m.translate)("configure"),hasOtherMembers:t&&t.length>1,organization:r,refreshMembers:a})))))}function je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ve(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?je(Object(n),!0).forEach((function(t){ye(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):je(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class Se extends o.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={groups:[],loading:!0,query:""},this.stopLoading=()=>{this.mounted&&this.setState({loading:!1})},this.fetchMembers=e=>{this.setState({loading:!0}),Object(u.h)({organization:this.props.organization.key,ps:50,q:e}).then(({paging:e,users:t})=>{this.mounted&&this.setState({loading:!1,members:t,paging:e})},this.stopLoading)},this.fetchGroups=()=>{Object(h.f)({organization:this.props.organization.key}).then(({groups:e})=>{this.mounted&&this.setState({groups:e})},()=>{})},this.handleSearchMembers=e=>{this.setState({query:e}),this.fetchMembers(e||void 0)},this.handleLoadMoreMembers=()=>{const{paging:e,query:t}=this.state;e&&(this.setState({loading:!0}),Object(u.h)({organization:this.props.organization.key,p:e.pageIndex+1,ps:50,q:t||void 0}).then(({paging:e,users:t})=>{this.mounted&&this.setState(({members:n=[]})=>({loading:!1,members:[...n,...t],paging:e}))},this.stopLoading))},this.handleAddMember=({login:e})=>{Object(u.a)({login:e,organization:this.props.organization.key}).then(e=>{this.mounted&&this.setState(({members:t,paging:n})=>({members:t&&[...t,e],paging:n&&ve({},n,{total:n.total+1})}))},()=>{})},this.handleRemoveMember=({login:e})=>{Object(u.g)({login:e,organization:this.props.organization.key}).then(()=>{this.mounted&&this.setState(({members:t,paging:n})=>({members:t&&t.filter(t=>t.login!==e),paging:n&&ve({},n,{total:n.total-1})}))},()=>{})},this.refreshMembers=()=>Object(u.h)({organization:this.props.organization.key,ps:50,q:this.state.query||void 0}).then(({paging:e,users:t})=>{this.mounted&&this.setState({members:t,paging:e})}),this.updateGroup=(e,t)=>{this.setState(({members:n})=>({members:n&&n.map(n=>n.login===e?t(n):n)}))},this.updateMemberGroups=({login:e},t,n)=>{const r=[...t.map(t=>Object(h.a)({name:t,login:e,organization:this.props.organization.key})),...n.map(t=>Object(h.e)({name:t,login:e,organization:this.props.organization.key}))];return Promise.all(r).then(()=>{this.mounted&&this.updateGroup(e,e=>ve({},e,{groupCount:(e.groupCount||0)+t.length-n.length}))})}}componentDidMount(){this.mounted=!0,this.fetchMembers(),this.props.organization.actions&&this.props.organization.actions.admin&&this.fetchGroups()}componentWillUnmount(){this.mounted=!1}render(){const{currentUser:e,organization:t}=this.props,{groups:n,loading:r,members:a,paging:s}=this.state,l=t.alm&&t.alm.membersSync;return o.createElement("div",{className:"page page-limited"},o.createElement(i.a,{defer:!1,title:Object(m.translate)("organization.members.page")}),o.createElement(d.a,{suggestions:"organization_members"}),o.createElement(p.a,{anchor:"members_main"}),o.createElement(Ee,{handleAddMember:this.handleAddMember,loading:r,members:a,organization:t,refreshMembers:this.refreshMembers}),void 0!==a&&void 0!==s&&o.createElement(o.Fragment,null,o.createElement(X,{handleSearch:this.handleSearchMembers,organization:t,total:s.total}),o.createElement(J,{currentUser:e,members:a,organization:t,organizationGroups:n,removeMember:l?void 0:this.handleRemoveMember,updateMemberGroups:this.updateMemberGroups}),0!==s.total&&o.createElement(c.a,{count:a.length,loadMore:this.handleLoadMoreMembers,ready:!r,total:s.total})))}}t.default=Object(a.a)(Object(r.connect)((e,t)=>({organization:Object(s.getOrganizationByKey)(e,t.params.organizationKey)}))(Se))},333:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(2),a=n(360);function s({suggestions:e}){return r.createElement(a.a.Consumer,null,({addSuggestions:t,removeSuggestions:n})=>r.createElement(o,{addSuggestions:t,removeSuggestions:n,suggestions:e}))}class o extends r.PureComponent{componentDidMount(){this.props.addSuggestions(this.props.suggestions)}componentDidUpdate(e){e.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(e.suggestions))}componentWillUnmount(){this.props.removeSuggestions(this.props.suggestions)}render(){return null}}},352:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(2),a=n(31),s=n(401);function o(e){return r.createElement(s.a.Consumer,null,({addA11ySkipLink:t,removeA11ySkipLink:n})=>r.createElement(i,Object.assign({addA11ySkipLink:t,removeA11ySkipLink:n},e)))}class i extends r.PureComponent{constructor(){super(...arguments),this.getLink=()=>{const{anchor:e,label:t=Object(a.translate)("skip_to_content"),weight:n}=this.props;return{key:e,label:t,weight:n}}}componentDidMount(){this.props.addA11ySkipLink(this.getLink())}componentWillUnmount(){this.props.removeA11ySkipLink(this.getLink())}render(){const{anchor:e}=this.props;return r.createElement("span",{id:"a11y_target__".concat(e)})}}},361:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(2),a=n(324),s=n.n(a),o=n(327),i=n(385);const l=Object(o.lazyLoadComponent)(()=>Promise.all([n.e(5),n.e(22)]).then(n.bind(null,507)),"DocMarkdownBlock");class c extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={}}componentDidMount(){this.mounted=!0,this.props.doc.then(({default:e})=>{this.mounted&&this.setState({content:e})},()=>{})}componentWillUnmount(){this.mounted=!1}render(){return this.state.content?r.createElement(s.a,{className:this.props.className,overlay:r.createElement("div",{className:"abs-width-300"},r.createElement(l,{childProps:this.props.overlayProps,className:"cut-margins",content:Object(i.filterContent)(this.state.content),isTooltip:!0}))},this.props.children):this.props.children||null}}},385:function(e,t,n){"use strict";function r(e){let t,n;for(let r=0;r<e.length;r++){if("---"===e[r].trim()){if(void 0!==t){n=r;break}t=r}}return void 0!==n?{firstLine:t,lastLine:n}:void 0}function a(e){const t={};for(let n=0;n<e.length;n++){const r=e[n].split(":").map(e=>e.trim());2===r.length&&(t[r[0]]=r[1])}return t}function s(e,t){const n="\x3c!-- ".concat(t," --\x3e"),r="\x3c!-- /".concat(t," --\x3e");let a=e,s=a.indexOf(n),o=a.indexOf(r);for(;-1!==s&&-1!==o;)s<o?a=a.substring(0,s)+a.substring(o+r.length):(console.error(new Error('Documentation - incorrect usage of conditional formatting tags here: "'.concat(a.substring(o,s+n.length),'"'))),a=a.substring(0,o)+a.substring(o+r.length,s)+a.substring(s+n.length)),s=a.indexOf(n),o=a.indexOf(r);return a}e.exports={getFrontMatter:function(e){const t=e.split("\n"),n=r(t);return n?a(t.slice(n.firstLine+1,n.lastLine)):{}},separateFrontMatter:function(e){const t=e.split("\n"),n=r(t);if(n){const e=a(t.slice(n.firstLine+1,n.lastLine)),r=t.slice(n.lastLine+1).join("\n");return{frontmatter:e,content:r}}return{frontmatter:{},content:e}},filterContent:function(e){const t="\x3c!-- \\/?(sonarqube|sonarcloud|static) --\x3e",{isSonarCloud:r,getInstance:a}=n(6),o=s(e.replace(/{instance}/gi,a()),"static");return(r()?s(o,"sonarqube"):s(o,"sonarcloud")).replace(new RegExp("^".concat(t,"(\n|\r|\r\n|$)"),"gm"),"").replace(new RegExp("".concat(t),"g"),"")}}},460:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return c})),n.d(t,"g",(function(){return m}));var r=n(337);function a(e,t){return t.endsWith("/")||(t+="/"),l(e)?t.replace("github.com/","github.com/orgs/")+"people":t+"profile/members"}function s(e){return Object(r.b)(e)&&e.externalProvider?m(e.externalProvider):void 0}function o(e){return Object(r.b)(e)&&(i(e.externalProvider)||l(e.externalProvider))}function i(e){return!!e&&e.startsWith("bitbucket")}function l(e){return"github"===e}function c(e){return"microsoft"===e}function m(e){return i(e)?"bitbucket":e}},686:function(e,t,n){"use strict";n.d(t,"f",(function(){return s})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return c})),n.d(t,"g",(function(){return m})),n.d(t,"c",(function(){return u}));var r=n(9),a=n(326);function s(e){return Object(r.getJSON)("/api/user_groups/search",e).catch(a.a)}function o(e){return Object(r.getJSON)("/api/user_groups/users",e).catch(a.a)}function i(e){return Object(r.post)("/api/user_groups/add_user",e).catch(a.a)}function l(e){return Object(r.post)("/api/user_groups/remove_user",e).catch(a.a)}function c(e){return Object(r.postJSON)("/api/user_groups/create",e).then(e=>e.group,a.a)}function m(e){return Object(r.post)("/api/user_groups/update",e).catch(a.a)}function u(e){return Object(r.post)("/api/user_groups/delete",e).catch(a.a)}}}]);
//# sourceMappingURL=326.m.be068370.chunk.js.map