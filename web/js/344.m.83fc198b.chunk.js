(window.webpackJsonp=window.webpackJsonp||[]).push([[344],{1920:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return P}));var s=n(2),o=n(325),i=n(318),r=n.n(i),p=n(31),a=n(365),c=n(353),l=n(326),u=n(1258),d=n(1259),h=n(614),b=n(671),m=n(608),g=n(331),f=n(862),y=n(814),O=n(881),x=n(723);function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class j extends s.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.rootNodeRef=s.createRef(),this.state={additionalLines:{},highlightedSymbols:[],loading:!1,openIssuesByLine:{},snippets:[]},this.expandBlock=(e,t)=>{const{branchLike:n,snippetGroup:s}=this.props,{key:o}=s.component,{snippets:i}=this.state,r=i.find(t=>t.index===e);if(!r)return Promise.reject();const p=x.a+x.c-1,c="up"===t?{from:Math.max(1,r.start-p),to:r.start-1}:{from:r.end+1,to:r.end+p};return Object(a.u)(A({key:o},c,{},Object(g.d)(n))).then(e=>e.reduce((e,t)=>(t.coverageStatus=Object(f.a)(t),e[t.line]=t,e),{})).then(n=>this.animateBlockExpansion(e,t,n))},this.expandComponent=()=>{const{branchLike:e,snippetGroup:t}=this.props,{key:n}=t.component;this.setState({loading:!0}),Object(a.u)(A({key:n},Object(g.d)(e))).then(e=>{this.mounted&&this.setState(({additionalLines:t})=>({additionalLines:A({},t,{},e),loading:!1,snippets:[{start:0,end:e[e.length-1].line,index:-1}]}))},()=>{this.mounted&&this.setState({loading:!1})})},this.handleOpenIssues=e=>{this.setState(t=>({openIssuesByLine:A({},t.openIssuesByLine,{[e.line]:!0})}))},this.handleCloseIssues=e=>{this.setState(t=>({openIssuesByLine:A({},t.openIssuesByLine,{[e.line]:!1})}))},this.handleSymbolClick=e=>{this.setState(({highlightedSymbols:t})=>({highlightedSymbols:e.filter(e=>!t.includes(e))}))},this.loadDuplications=e=>{this.props.loadDuplications(this.props.snippetGroup.component.key,e)},this.renderDuplicationPopup=(e,t)=>this.props.renderDuplicationPopup(this.props.snippetGroup.component,e,t)}componentDidMount(){this.mounted=!0,this.createSnippetsFromProps()}componentWillUnmount(){this.mounted=!1}createSnippetsFromProps(){const{issue:e,snippetGroup:t}=this.props,n=Object(x.d)({component:t.component.key,issue:e,locations:t.locations});this.setState({snippets:n})}getNodes(e){const t=this.rootNodeRef.current;if(!t)return;const n=t.querySelector("#snippet-wrapper-".concat(e));if(!n)return;const s=n.querySelector(".snippet");if(!s)return;const o=s.firstChild;return o?{wrapper:s,table:o}:void 0}cleanDom(e){const t=this.getNodes(e);if(!t)return;const{wrapper:n,table:s}=t;s.style.marginTop="",n.style.maxHeight=""}setMaxHeight(e,t,n=!1){const s=this.getNodes(e);if(!s)return;const{wrapper:o,table:i}=s,r=void 0!==t?t:i.getBoundingClientRect().height;if(n){const e=o.getBoundingClientRect().height;i.style.transition="none",i.style.marginTop="".concat(e-r,"px"),setTimeout(()=>{i.style.transition="",i.style.marginTop="0px",o.style.maxHeight="".concat(r+20,"px")},0)}else o.style.maxHeight="".concat(r+20,"px")}animateBlockExpansion(e,t,n){if(this.mounted){const{snippets:s}=this.state,o=Object(x.e)({direction:t,snippetIndex:e,snippets:s}),i=o.filter(e=>e.toDelete);return i.forEach(e=>this.setMaxHeight(e.index)),this.setMaxHeight(e),new Promise(s=>{this.setState(({additionalLines:e,snippets:t})=>({additionalLines:A({},e,{},n),snippets:t}),()=>{i.forEach(e=>{this.setMaxHeight(e.index,0)}),this.setMaxHeight(e,void 0,"up"===t),setTimeout(()=>{this.setState({snippets:o.filter(e=>!e.toDelete)},s),this.cleanDom(e)},200)})})}return Promise.resolve()}renderSnippet({index:e,issuesByLine:t,lastSnippetOfLastGroup:n,locationsByLine:o,snippet:i}){return s.createElement(O.a,{branchLike:this.props.branchLike,component:this.props.snippetGroup.component,duplications:this.props.duplications,duplicationsByLine:this.props.duplicationsByLine,expandBlock:this.expandBlock,handleCloseIssues:this.handleCloseIssues,handleOpenIssues:this.handleOpenIssues,handleSymbolClick:this.handleSymbolClick,highlightedLocationMessage:this.props.highlightedLocationMessage,highlightedSymbols:this.state.highlightedSymbols,index:e,issue:this.props.issue,issuePopup:this.props.issuePopup,issuesByLine:t,lastSnippetOfLastGroup:n,loadDuplications:this.loadDuplications,locations:this.props.locations,locationsByLine:o,onIssueChange:this.props.onIssueChange,onIssuePopupToggle:this.props.onIssuePopupToggle,onLocationSelect:this.props.onLocationSelect,openIssuesByLine:this.state.openIssuesByLine,renderDuplicationPopup:this.renderDuplicationPopup,scroll:this.props.scroll,snippet:i})}render(){const{branchLike:e,issue:t,issuesByLine:n,lastSnippetGroup:o,snippetGroup:i}=this.props,{additionalLines:r,loading:p,snippets:a}=this.state,c=t.component===i.component.key?Object(h.d)([t]):{},l=1===a.length&&i.component.measures&&a[0].end-a[0].start===parseInt(i.component.measures.lines||"",10),u=Object(x.h)(a,A({},i.sources,{},r)),d=0===t.secondaryLocations.length;return s.createElement("div",{className:"component-source-container",ref:this.rootNodeRef},s.createElement(y.a,{branchLike:e,expandable:!l,loading:p,onExpand:this.expandComponent,sourceViewerFile:i.component}),u.map((e,t)=>{return s.createElement("div",{id:"snippet-wrapper-".concat(a[t].index),key:a[t].index},this.renderSnippet({snippet:e,index:a[t].index,issuesByLine:n,locationsByLine:(i=t,(d?o&&i===a.length-1:0===i)?c:{}),lastSnippetOfLastGroup:o&&t===a.length-1}));var i}))}}function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class P extends s.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={components:{},duplicationsByLine:{},loading:!0,notAccessible:!1},this.fetchDuplications=e=>{Object(a.q)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({key:e},Object(g.d)(this.props.branchLike))).then(e=>{this.mounted&&this.setState({duplicatedFiles:e.files,duplications:e.duplications,duplicationsByLine:Object(h.a)(e.duplications)})},()=>{})},this.handleIssuePopupToggle=(e,t,n)=>{this.setState(s=>{const o=s.issuePopup&&s.issuePopup.name===t&&s.issuePopup.issue===e;return!1===n||o?!0!==n&&o?{issuePopup:void 0}:null:{issuePopup:{issue:e,name:t}}})},this.renderDuplicationPopup=(e,t,n)=>{const{duplicatedFiles:o,duplications:i}=this.state;if(!e||!o)return null;const r=Object(d.b)(i,t);return s.createElement(m.a.Consumer,null,({openComponent:t})=>s.createElement(u.a,{blocks:Object(d.a)(r,n),branchLike:this.props.branchLike,duplicatedFiles:o,inRemovedComponent:Object(d.c)(r),openComponent:t,sourceViewerFile:e}))}}componentDidMount(){this.mounted=!0,this.fetchIssueFlowSnippets(this.props.issue.key)}componentWillReceiveProps(e){e.issue.key!==this.props.issue.key&&this.fetchIssueFlowSnippets(e.issue.key)}componentWillUnmount(){this.mounted=!1}fetchIssueFlowSnippets(e){this.setState({loading:!0}),Object(c.h)(e).then(e=>{this.mounted&&(this.setState({components:e,issuePopup:void 0,loading:!1}),this.props.onLoaded&&this.props.onLoaded())},e=>{403!==e.status&&Object(l.a)(e),this.mounted&&this.setState({loading:!1,notAccessible:403===e.status})})}render(){const{loading:e,notAccessible:t}=this.state;if(e)return s.createElement("div",null,s.createElement(r.a,null));if(t)return s.createElement(o.Alert,{className:"spacer-top",variant:"warning"},Object(p.translate)("code_viewer.no_source_code_displayed_due_to_security"));const{issue:n,locations:i}=this.props,{components:a,duplications:c,duplicationsByLine:l}=this.state,u=Object(h.b)(this.props.issues),d=Object(x.f)(n,i,a);return s.createElement("div",null,d.map((e,t)=>s.createElement(b.a.Provider,{key:"".concat(n.key,"-").concat(this.props.selectedFlowIndex||0,"-").concat(t),value:{branchLike:this.props.branchLike,file:e.component}},s.createElement(j,{branchLike:this.props.branchLike,duplications:c,duplicationsByLine:l,highlightedLocationMessage:this.props.highlightedLocationMessage,issue:n,issuePopup:this.state.issuePopup,issuesByLine:u[e.component.key]||{},lastSnippetGroup:t===d.length-1,loadDuplications:this.fetchDuplications,locations:e.locations||[],onIssueChange:this.props.onIssueChange,onIssuePopupToggle:this.handleIssuePopupToggle,onLocationSelect:this.props.onLocationSelect,renderDuplicationPopup:this.renderDuplicationPopup,scroll:this.props.scroll,snippetGroup:e}))))}}},723:function(e,t,n){"use strict";function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return p})),n.d(t,"d",(function(){return l})),n.d(t,"h",(function(){return u})),n.d(t,"f",(function(){return d})),n.d(t,"e",(function(){return h})),n.d(t,"g",(function(){return b}));const i=11,r=9,p=50;function a([e,t],[n,s]){return!(e>s+i||t<n-i)}function c(e){return{component:e.component,textRange:e.textRange||{endLine:0,endOffset:0,startLine:0,startOffset:0}}}function l(e){const{component:t,issue:n,locations:s}=e,o=n.secondaryLocations.length>0,i=(o&&n.component===t?[c(n),...s]:s).reduce((e,t,s)=>{const o=Math.max(1,t.textRange.startLine-5),i=function(e){const{issue:t,locationEnd:n}=e,s=t.textRange&&t.textRange.endLine||0;return s&&s!==n?n+5:n+r}({issue:n,locationEnd:t.textRange.endLine});let p;return e=e.filter(e=>{if(a([e.start,e.end],[o,i])){let t=!1;return p||(p=e,t=!0),p.start=Math.min(o,e.start,p.start),p.end=Math.max(i,e.end,p.end),t}return!0}),void 0===p&&e.push({start:o,end:i,index:s}),e},[]);return o?i.sort((e,t)=>e.start-t.start):i}function u(e,t){return e.map(e=>{const n=[];for(let s=e.start;s<=e.end;s++)t[s]&&n.push(t[s]);return n}).filter(e=>e.length>0)}function d(e,t,n){let i,r="";const p=[],a=e=>{i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n[e.component]||{component:{key:e.component,measures:{},path:"",project:"",projectName:"",q:"FIL",uuid:""},sources:[]},{locations:[]}),p.push(i),r=e.component};return e.secondaryLocations.length>0&&t.every(t=>t.component!==e.component)&&a(c(e)),t.forEach((e,t)=>{e.component!==r&&a(e),e.index=t,i.locations.push(e)}),p}function h({direction:e,snippetIndex:t,snippets:n}){const s=n.find(e=>e.index===t);if(!s)throw new Error("Snippet ".concat(t," not found"));return s.start=Math.max(0,s.start-("up"===e?p:0)),s.end+="down"===e?p:0,n.map(e=>e.index===t?s:(a([e.start,e.end],[s.start,s.end])&&(s.start=Math.min(e.start,s.start),s.end=Math.max(e.end,s.end),e.toDelete=!0),e))}function b(e,t){return e>=t[0].line&&e<=t[t.length-1].line}},881:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var s=n(311),o=n.n(s),i=n(2),r=n(711),p=n.n(r),a=n(31),c=n(419),l=n(847),u=n(614),d=n(670),h=n(815),b=(n(885),n(723));class m extends i.PureComponent{constructor(e){super(e),this.doScroll=e=>{this.props.scroll&&this.props.scroll(e);const t=this.snippetNodeRef.current;if(t){const n=t.getBoundingClientRect().width/2;Object(c.scrollHorizontally)(e,{leftOffset:n,rightOffset:n,parent:t})}},this.scrollToLastExpandedRow=()=>{if(this.props.scroll){const e=this.snippetNodeRef.current;if(!e)return;const t=e.querySelectorAll("tr"),n=t[t.length-1];this.props.scroll(n,100)}},this.expandBlock=e=>()=>this.props.expandBlock(this.props.index,e).then(()=>{"down"===e&&this.scrollToLastExpandedRow()}),this.snippetNodeRef=i.createRef()}renderLine({displayDuplications:e,displaySCM:t,index:n,issuesForLine:s,issueLocations:o,line:r,snippet:p,symbols:a,verticalBuffer:c}){const u=Object(d.b)(r,this.props.locations),{duplications:b,duplicationsByLine:m}=this.props,g=b?b.length:0,f=g&&m&&m[r.line]||[],y=s.some(e=>e.key===this.props.issue.key),O=()=>{};return i.createElement(l.a,{branchLike:this.props.branchLike,displayAllIssues:!1,displayCoverage:!0,displayDuplications:e,displayIssues:!y||s.length>1,displayLocationMarkers:!0,displaySCM:t,duplications:f,duplicationsCount:g,highlighted:!1,highlightedLocationMessage:Object(h.b)(this.props.highlightedLocationMessage,u),highlightedSymbols:Object(h.a)(a,this.props.highlightedSymbols),issueLocations:o,issuePopup:this.props.issuePopup,issues:s,key:r.line,last:!1,line:r,loadDuplications:this.props.loadDuplications||O,onIssueChange:this.props.onIssueChange,onIssuePopupToggle:this.props.onIssuePopupToggle,onIssueSelect:O,onIssueUnselect:O,onIssuesClose:this.props.handleCloseIssues,onIssuesOpen:this.props.handleOpenIssues,onLocationSelect:this.props.onLocationSelect,onSymbolClick:this.props.handleSymbolClick,openIssues:this.props.openIssuesByLine[r.line],previousLine:n>0?p[n-1]:void 0,renderDuplicationPopup:this.props.renderDuplicationPopup,scroll:this.doScroll,secondaryIssueLocations:u,selectedIssue:Object(h.c)(this.props.issue.key,s),verticalBuffer:c})}render(){const{component:e,displaySCM:t,issue:n,issuesByLine:s={},lastSnippetOfLastGroup:r,locationsByLine:c,openIssuesByLine:l,snippet:d}=this.props,h=e.measures&&e.measures.lines&&parseInt(e.measures.lines,10),m=Object(u.e)(d),g=d[d.length-1].line,f=n.textRange?n.textRange.endLine:n.line,y=Math.max(...Object.keys(s).map(e=>parseInt(e,10)).filter(e=>Object(b.g)(e,d)&&(e===f||l[e]))),O=r?Math.max(0,b.b-(g-y)):0,x=Boolean(this.props.loadDuplications)&&d.some(e=>!!e.duplicated);return i.createElement("div",{className:"source-viewer-code snippet",ref:this.snippetNodeRef},i.createElement("div",null,d[0].line>1&&i.createElement("div",{className:"expand-block expand-block-above"},i.createElement("button",{"aria-label":Object(a.translate)("source_viewer.expand_above"),onClick:this.expandBlock("up"),type:"button"},i.createElement(p.a,null))),i.createElement("table",{className:o()("source-table",{"expand-up":d[0].line>1,"expand-down":!h||d[d.length-1].line<h})},i.createElement("tbody",null,d.map((e,n)=>this.renderLine({displayDuplications:x,displaySCM:t,index:n,issuesForLine:s[e.line]||[],issueLocations:c[e.line]||[],line:e,snippet:d,symbols:m[e.line],verticalBuffer:n===d.length-1?O:0})))),(!h||d[d.length-1].line<h)&&i.createElement("div",{className:"expand-block expand-block-below"},i.createElement("button",{"aria-label":Object(a.translate)("source_viewer.expand_below"),onClick:this.expandBlock("down"),type:"button"},i.createElement(p.a,null)))))}}},885:function(e,t,n){var s=n(313),o=n(886);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},r=(s(o,i),o.locals?o.locals:{});e.exports=r},886:function(e,t,n){(t=n(314)(!1)).push([e.i,'.snippet{margin:8px;border:1px solid #cdcdcd;overflow-x:auto;overflow-y:hidden;transition:max-height .2s}.snippet>div{display:table;width:100%;position:relative;transition:margin-top .2s}.snippet table{width:100%}.expand-block{position:absolute;z-index:2;width:100%}.expand-block>button{background:transparent;box-sizing:border-box;color:#777;height:20px;width:100%;padding:2px;border:0;text-align:left;cursor:pointer}.expand-block>button:active,.expand-block>button:focus,.expand-block>button:hover{color:#236a97;outline:none}.expand-block-above{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAAXNSR0IArs4c6QAAADdJREFUCB1dzMEKADAIAlBd1v9/bcc2YgRjHh8qq2qTxCQzsX4wM6y30RARF3sy0Es1SIK7Y64OpCES1W69JS4AAAAASUVORK5CYII=");top:0}.expand-block-below{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wQQBjQEQVd5jwAAADhJREFUCNddyTEKADEMA8GVA/7/Z+PGwUp1cGTaYe/tv5lxrLWoKj6SiMzkjZDEG7JtANt0N+ccLrB/KZxXTt7fAAAAAElFTkSuQmCC");bottom:0}.source-table.expand-up{margin-top:20px}.source-table.expand-down{margin-bottom:20px}',""]),e.exports=t}}]);
//# sourceMappingURL=344.m.83fc198b.chunk.js.map