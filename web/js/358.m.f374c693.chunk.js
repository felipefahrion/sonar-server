(window.webpackJsonp=window.webpackJsonp||[]).push([[358,359],{1820:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var a=n(2),s=n(312),r=n(330),o=n.n(r),l=n(655),i=n.n(l),c=n(318),d=n.n(c),p=n(31),m=n(554);class h extends a.PureComponent{constructor(e){super(e),this.mounted=!1,this.keepLineBreaks=e=>{if(e.includes("\n")){const t=e.split("\n");return a.createElement(a.Fragment,null,t.map((e,n)=>a.createElement(a.Fragment,{key:n},e,n<t.length-1&&a.createElement("br",null))))}return e},this.state={loading:!e.warnings,warnings:e.warnings||[]}}componentDidMount(){this.mounted=!0,!this.props.warnings&&this.props.taskId&&this.loadWarnings(this.props.taskId)}componentDidUpdate(e){const{taskId:t,warnings:n}=this.props;!n&&t&&e.taskId!==t?this.loadWarnings(t):n&&e.warnings!==n&&this.setState({warnings:n})}componentWillUnmount(){this.mounted=!1}loadWarnings(e){this.setState({loading:!0}),Object(m.g)(e,["warnings"]).then(({warnings:e=[]})=>{this.mounted&&this.setState({loading:!1,warnings:e})},()=>{this.mounted&&this.setState({loading:!1})})}render(){const e=Object(p.translate)("warnings");return a.createElement(o.a,{contentLabel:e,onRequestClose:this.props.onClose},a.createElement("header",{className:"modal-head"},a.createElement("h2",null,e)),a.createElement("div",{className:"modal-body modal-container js-analysis-warnings"},a.createElement(d.a,{loading:this.state.loading},this.state.warnings.map((e,t)=>a.createElement("div",{className:"panel panel-vertical",key:t},a.createElement(i.a,{className:"pull-left spacer-right"}),a.createElement("div",{className:"overflow-hidden markdown"},this.keepLineBreaks(e)))))),a.createElement("footer",{className:"modal-foot"},a.createElement(s.ResetButtonLink,{className:"js-modal-close",onClick:this.props.onClose},Object(p.translate)("close"))))}}},655:function(e,t,n){"use strict";var a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},s=this&&this.__rest||function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(n[a[s]]=e[a[s]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=n(315);t.default=function(e){var t=e.fill,n=s(e,["fill"]);return r.createElement(o.ThemedIcon,a({},n),(function(e){var n=e.theme;return r.createElement("path",{d:"M9 12.242v-1.484c0-.14-.11-.258-.25-.258h-1.5c-.14 0-.25.117-.25.258v1.484c0 .14.11.258.25.258h1.5c.14 0 .25-.117.25-.258zM8.984 9.32l.141-3.586a.189.189 0 0 0-.078-.148C9 5.546 8.93 5.5 8.859 5.5H7.141c-.07 0-.141.047-.188.086-.055.039-.078.117-.078.164l.133 3.57c0 .102.117.18.265.18H8.72c.14 0 .258-.078.265-.18zm-.109-7.297l6 11A1 1 0 0 1 14 14.5H2a1 1 0 0 1-.875-1.477l6-11a.994.994 0 0 1 1.75 0z",style:{fill:t||n.colors.warningIconColor}})}))}}}]);
//# sourceMappingURL=358.m.f374c693.chunk.js.map