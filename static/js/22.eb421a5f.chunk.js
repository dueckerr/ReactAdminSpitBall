(window["webpackJsonp@coreui/coreui-free-react-admin-template"]=window["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[22],{890:function(e,t,a){"use strict";var l=a(36),n=a(100),r=a(4),c=a.n(r),o=a(111),i=a.n(o),s=a(885),m=a.n(s),u=a(886),d={className:i.a.string,cssModule:i.a.object,size:i.a.string,bordered:i.a.bool,borderless:i.a.bool,striped:i.a.bool,dark:i.a.bool,hover:i.a.bool,responsive:i.a.oneOfType([i.a.bool,i.a.string]),tag:u.h,responsiveTag:u.h,innerRef:i.a.oneOfType([i.a.func,i.a.string,i.a.object])},E=function(e){var t=e.className,a=e.cssModule,r=e.size,o=e.bordered,i=e.borderless,s=e.striped,d=e.dark,E=e.hover,p=e.responsive,h=e.tag,b=e.responsiveTag,f=e.innerRef,g=Object(n.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),v=Object(u.e)(m()(t,"table",!!r&&"table-"+r,!!o&&"table-bordered",!!i&&"table-borderless",!!s&&"table-striped",!!d&&"table-dark",!!E&&"table-hover"),a),x=c.a.createElement(h,Object(l.a)({},g,{ref:f,className:v}));if(p){var y=Object(u.e)(!0===p?"table-responsive":"table-responsive-"+p,a);return c.a.createElement(b,{className:y},x)}return x};E.propTypes=d,E.defaultProps={tag:"table",responsiveTag:"div"},t.a=E},898:function(e,t,a){"use strict";var l=a(36),n=a(100),r=a(887),c=a(63),o=a(4),i=a.n(o),s=a(111),m=a.n(s),u=a(885),d=a.n(u),E=a(886),p={active:m.a.bool,"aria-label":m.a.string,block:m.a.bool,color:m.a.string,disabled:m.a.bool,outline:m.a.bool,tag:E.h,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),onClick:m.a.func,size:m.a.string,children:m.a.node,className:m.a.string,cssModule:m.a.object,close:m.a.bool},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(r.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],r=e.block,c=e.className,o=e.close,s=e.cssModule,m=e.color,u=e.outline,p=e.size,h=e.tag,b=e.innerRef,f=Object(n.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);o&&"undefined"===typeof f.children&&(f.children=i.a.createElement("span",{"aria-hidden":!0},"\xd7"));var g="btn"+(u?"-outline":"")+"-"+m,v=Object(E.e)(d()(c,{close:o},o||"btn",o||g,!!p&&"btn-"+p,!!r&&"btn-block",{active:t,disabled:this.props.disabled}),s);f.href&&"button"===h&&(h="a");var x=o?"Close":null;return i.a.createElement(h,Object(l.a)({type:"button"===h&&f.onClick?"button":void 0},f,{className:v,ref:b,onClick:this.onClick,"aria-label":a||x}))},t}(i.a.Component);h.propTypes=p,h.defaultProps={color:"secondary",tag:"button"},t.a=h},901:function(e,t,a){"use strict";var l,n=a(36),r=a(100),c=a(887),o=a(63),i=a(896),s=a(4),m=a.n(s),u=a(111),d=a.n(u),E=a(885),p=a.n(E),h=a(899),b=a(886),f=Object(i.a)({},h.Transition.propTypes,{isOpen:d.a.bool,children:d.a.oneOfType([d.a.arrayOf(d.a.node),d.a.node]),tag:b.h,className:d.a.node,navbar:d.a.bool,cssModule:d.a.object,innerRef:d.a.oneOfType([d.a.func,d.a.string,d.a.object])}),g=Object(i.a)({},h.Transition.defaultProps,{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:b.c.Collapse}),v=((l={})[b.b.ENTERING]="collapsing",l[b.b.ENTERED]="collapse show",l[b.b.EXITING]="collapsing",l[b.b.EXITED]="collapse",l);function x(e){return e.scrollHeight}var y=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach((function(e){a[e]=a[e].bind(Object(c.a)(a))})),a}Object(o.a)(t,e);var a=t.prototype;return a.onEntering=function(e,t){this.setState({height:x(e)}),this.props.onEntering(e,t)},a.onEntered=function(e,t){this.setState({height:null}),this.props.onEntered(e,t)},a.onExit=function(e){this.setState({height:x(e)}),this.props.onExit(e)},a.onExiting=function(e){e.offsetHeight;this.setState({height:0}),this.props.onExiting(e)},a.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},a.render=function(){var e=this,t=this.props,a=t.tag,l=t.isOpen,c=t.className,o=t.navbar,s=t.cssModule,u=t.children,d=(t.innerRef,Object(r.a)(t,["tag","isOpen","className","navbar","cssModule","children","innerRef"])),E=this.state.height,f=Object(b.g)(d,b.a),g=Object(b.f)(d,b.a);return m.a.createElement(h.Transition,Object(n.a)({},f,{in:l,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(t){var l=function(e){return v[e]||"collapse"}(t),r=Object(b.e)(p()(c,l,o&&"navbar-collapse"),s),d=null===E?null:{height:E};return m.a.createElement(a,Object(n.a)({},g,{style:Object(i.a)({},g.style,d),className:r,ref:e.props.innerRef}),u)}))},t}(s.Component);y.propTypes=f,y.defaultProps=g,t.a=y},902:function(e,t,a){"use strict";var l=a(36),n=a(100),r=a(887),c=a(63),o=a(4),i=a.n(o),s=a(111),m=a.n(s),u=a(885),d=a.n(u),E=a(886),p={children:m.a.node,type:m.a.string,size:m.a.string,bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:E.h,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.focus=a.focus.bind(Object(r.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,c=e.bsSize,o=e.valid,s=e.invalid,m=e.tag,u=e.addon,p=e.plaintext,h=e.innerRef,b=Object(n.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),f=["radio","checkbox"].indexOf(r)>-1,g=new RegExp("\\D","g"),v=m||("select"===r||"textarea"===r?r:"input"),x="form-control";p?(x+="-plaintext",v=m||"input"):"file"===r?x+="-file":f&&(x=u?null:"form-check-input"),b.size&&g.test(b.size)&&(Object(E.i)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=b.size,delete b.size);var y=Object(E.e)(d()(t,s&&"is-invalid",o&&"is-valid",!!c&&"form-control-"+c,x),a);return("input"===v||m&&"function"===typeof m)&&(b.type=r),b.children&&!p&&"select"!==r&&"string"===typeof v&&"select"!==v&&(Object(E.i)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),i.a.createElement(v,Object(l.a)({},b,{ref:h,className:y}))},t}(i.a.Component);h.propTypes=p,h.defaultProps={type:"text"},t.a=h},903:function(e,t,a){"use strict";var l=a(36),n=a(100),r=a(4),c=a.n(r),o=a(111),i=a.n(o),s=a(885),m=a.n(s),u=a(886),d={children:i.a.node,row:i.a.bool,check:i.a.bool,inline:i.a.bool,disabled:i.a.bool,tag:u.h,className:i.a.string,cssModule:i.a.object},E=function(e){var t=e.className,a=e.cssModule,r=e.row,o=e.disabled,i=e.check,s=e.inline,d=e.tag,E=Object(n.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),p=Object(u.e)(m()(t,!!r&&"row",i?"form-check":"form-group",!(!i||!s)&&"form-check-inline",!(!i||!o)&&"disabled"),a);return"fieldset"===d&&(E.disabled=o),c.a.createElement(d,Object(l.a)({},E,{className:p}))};E.propTypes=d,E.defaultProps={tag:"div"},t.a=E},904:function(e,t,a){"use strict";var l=a(36),n=a(100),r=a(4),c=a.n(r),o=a(111),i=a.n(o),s=a(885),m=a.n(s),u=a(888),d=a.n(u),E=a(886),p=i.a.oneOfType([i.a.number,i.a.string]),h=i.a.oneOfType([i.a.string,i.a.number,i.a.shape({size:p,order:p,offset:p})]),b={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:E.h,className:i.a.string,cssModule:i.a.object,xs:h,sm:h,md:h,lg:h,xl:h,widths:i.a.array},f={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,r=e.hidden,o=e.widths,i=e.tag,s=e.check,u=e.size,p=e.for,h=Object(n.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),b=[];o.forEach((function(t,l){var n=e[t];if(delete h[t],n||""===n){var r,c=!l;if(d()(n)){var o,i=c?"-":"-"+t+"-";r=g(c,t,n.size),b.push(Object(E.e)(m()(((o={})[r]=n.size||""===n.size,o["order"+i+n.order]=n.order||0===n.order,o["offset"+i+n.offset]=n.offset||0===n.offset,o))),a)}else r=g(c,t,n),b.push(r)}}));var f=Object(E.e)(m()(t,!!r&&"sr-only",!!s&&"form-check-label",!!u&&"col-form-label-"+u,b,!!b.length&&"col-form-label"),a);return c.a.createElement(i,Object(l.a)({htmlFor:p},h,{className:f}))};v.propTypes=b,v.defaultProps=f,t.a=v},969:function(e,t,a){"use strict";a.r(t);var l=a(229),n=a(230),r=a(233),c=a(231),o=a(234),i=a(232),s=a(4),m=a.n(s),u=a(891),d=a(892),E=a(893),p=a(895),h=a(894),b=a(903),f=a(904),g=a(902),v=a(890),x=a(898),y=a(901),N=a(900),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).loading=function(){return m.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},a.toggle=a.toggle.bind(Object(o.a)(a)),a.onRadioBtnClick=a.onRadioBtnClick.bind(Object(o.a)(a)),a.state={dropdownOpen:!1,radioSelected:2},(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).loading=function(){return m.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},a.onEntering=a.onEntering.bind(Object(o.a)(a)),a.onEntered=a.onEntered.bind(Object(o.a)(a)),a.onExiting=a.onExiting.bind(Object(o.a)(a)),a.onExited=a.onExited.bind(Object(o.a)(a)),a.toggle=a.toggle.bind(Object(o.a)(a)),a.toggleAccordion=a.toggleAccordion.bind(Object(o.a)(a)),a.toggleCustom=a.toggleCustom.bind(Object(o.a)(a)),a.toggleFade=a.toggleFade.bind(Object(o.a)(a)),a.state={collapse:!1,accordion:[!0,!1,!1],custom:[!0,!1],status:"Closed",fadeIn:!0,timeout:300},a}return Object(i.a)(t,e),Object(n.a)(t,[{key:"toggle",value:function(){this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"onRadioBtnClick",value:function(e){this.setState({radioSelected:e})}},{key:"onEntering",value:function(){this.setState({status:"Opening..."})}},{key:"onEntered",value:function(){this.setState({status:"Opened"})}},{key:"onExiting",value:function(){this.setState({status:"Closing..."})}},{key:"onExited",value:function(){this.setState({status:"Closed"})}},{key:"toggleAccordion",value:function(e){var t=this.state.accordion.map((function(t,a){return e===a&&!t}));this.setState({accordion:t})}},{key:"toggleCustom",value:function(e){var t=this.state.custom.map((function(t,a){return e===a&&!t}));this.setState({custom:t})}},{key:"toggleFade",value:function(){this.setState({fadeIn:!this.state.fadeIn})}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"animated fadeIn"},m.a.createElement(u.a,null,m.a.createElement(d.a,{xs:"12",sm:"6",lg:"2"},m.a.createElement(E.a,{className:"text-white bg-info"},m.a.createElement(p.a,{className:"pb-0"},m.a.createElement("div",{className:"text-value"},"Fleet 1"),m.a.createElement("div",null,"Current Pad: Spud Muffin"),m.a.createElement("div",null,"Customer: Devon"),m.a.createElement("div",null,"Pad Progress: 40 of 150 Stages"),m.a.createElement("div",null,"NPT Last 24: XX:XX"),m.a.createElement("div",null,"Pump Hours Last 24: XX:XX"),m.a.createElement("div",null,"Stages Last 24: X "),m.a.createElement("div",null," Number of Wells: X "),m.a.createElement("div",null,"Pumps: XX"),m.a.createElement("div",null,"Standby Pumps: XX"),m.a.createElement("div",null,"Blender: XXX"),m.a.createElement("div",null,"Standby Blender: XXX")),m.a.createElement("div",{className:"chart-wrapper mx-3",style:{height:"50px"}}))),m.a.createElement(d.a,{xs:"12",sm:"6"},m.a.createElement(E.a,null,m.a.createElement(h.a,null,m.a.createElement("strong",null,"Well Actions"),m.a.createElement("small",null," Open/Close, NPT events, equipment issues... Some of this will be pop ups")),m.a.createElement(p.a,null,m.a.createElement(b.a,null,m.a.createElement(f.a,{htmlFor:"company"},"Company"),m.a.createElement(g.a,{type:"text",id:"company",placeholder:"Enter your company name"})),m.a.createElement(b.a,null,m.a.createElement(f.a,{htmlFor:"vat"},"VAT"),m.a.createElement(g.a,{type:"text",id:"vat",placeholder:"DE1234567890"})),m.a.createElement(b.a,null,m.a.createElement(f.a,{htmlFor:"street"},"Street"),m.a.createElement(g.a,{type:"text",id:"street",placeholder:"Enter street name"}))))),m.a.createElement(d.a,{xs:"12",sm:"4"},m.a.createElement(E.a,null,m.a.createElement(h.a,null,m.a.createElement("strong",null,"Up Coming Pump Maintenance")),m.a.createElement(p.a,null,m.a.createElement(v.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null,"Unit Number"),m.a.createElement("th",null,"Fluid End Type"),m.a.createElement("th",null,"Current Hours"),m.a.createElement("th",null,"Maintenance"))),m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("td",null,"180982"),m.a.createElement("td",null,"Kerr F1X"),m.a.createElement("td",null,"2012"),m.a.createElement("td",null,"Valves")),m.a.createElement("tr",null,m.a.createElement("td",null,"173243"),m.a.createElement("td",null,"Vatlek"),m.a.createElement("td",null,"1232"),m.a.createElement("td",null,"Valves & Seats")),m.a.createElement("tr",null,m.a.createElement("td",null,"173432"),m.a.createElement("td",null,"SPM"),m.a.createElement("td",null,"1232"),m.a.createElement("td",null,"Valves & Seats")),m.a.createElement("tr",null,m.a.createElement("td",null,"182324"),m.a.createElement("td",null,"Endurance"),m.a.createElement("td",null,"3214"),m.a.createElement("td",null,"Valves & Seats")),m.a.createElement("tr",null,m.a.createElement("td",null,"123232"),m.a.createElement("td",null,"ST9"),m.a.createElement("td",null,"2314"),m.a.createElement("td",null,"Packing")),m.a.createElement("tr",null,m.a.createElement("td",null,"18021"),m.a.createElement("td",null,"Kerr F1X"),m.a.createElement("td",null,"2012"),m.a.createElement("td",null,"Valves & Seats")))))))),m.a.createElement(u.a,null,m.a.createElement(d.a,{xs:"12",sm:"6",lg:"4"},m.a.createElement(E.a,null,m.a.createElement(h.a,null,m.a.createElement("i",{className:"fa fa-align-justify"})," Equipment on Location",m.a.createElement(u.a,null,m.a.createElement(d.a,{md:"4"},m.a.createElement(g.a,{type:"text",placeholder:"Add Unit"})),m.a.createElement(d.a,{md:"4"},m.a.createElement(x.a,{type:"submit",size:"sm",color:"primary"},m.a.createElement("i",{className:"fa fa-dot-circle-o"})," Submit"))),m.a.createElement("div",{className:"card-header-actions"})),m.a.createElement(p.a,null,m.a.createElement("div",{id:"accordion"},m.a.createElement(E.a,{className:"mb-0"},m.a.createElement(h.a,{id:"headingOne"},m.a.createElement(x.a,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){return e.toggleAccordion(0)},"aria-expanded":this.state.accordion[0],"aria-controls":"collapseOne"},m.a.createElement("h5",{className:"m-0 p-0"},"Frac Pumps"))),m.a.createElement(y.a,{isOpen:this.state.accordion[0],"data-parent":"#accordion",id:"collapseOne","aria-labelledby":"headingOne"},m.a.createElement(p.a,null,m.a.createElement(v.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null,"Unit Number"),m.a.createElement("th",null,"Fluid End Type"),m.a.createElement("th",null,"Current Hours"),m.a.createElement("th",null,"Status"))),m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("td",null,"180982"),m.a.createElement("td",null,"Kerr F1X"),m.a.createElement("td",null,"2012"),m.a.createElement("td",null,m.a.createElement(N.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),m.a.createElement("tr",null,m.a.createElement("td",null,"173243"),m.a.createElement("td",null,"Vatlek"),m.a.createElement("td",null,"1232"),m.a.createElement("td",null,m.a.createElement(N.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),m.a.createElement("tr",null,m.a.createElement("td",null,"173432"),m.a.createElement("td",null,"SPM"),m.a.createElement("td",null,"1232"),m.a.createElement("td",null,m.a.createElement(N.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),m.a.createElement("tr",null,m.a.createElement("td",null,"182324"),m.a.createElement("td",null,"Endurance"),m.a.createElement("td",null,"3214"),m.a.createElement("td",null,m.a.createElement(N.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),m.a.createElement("tr",null,m.a.createElement("td",null,"123232"),m.a.createElement("td",null,"ST9"),m.a.createElement("td",null,"2314"),m.a.createElement("td",null,m.a.createElement(N.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),m.a.createElement("tr",null,m.a.createElement("td",null,"18021"),m.a.createElement("td",null,"Kerr F1X"),m.a.createElement("td",null,"2012"),m.a.createElement("td",null,m.a.createElement(N.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),m.a.createElement("tr",null,m.a.createElement("td",null,"180022"),m.a.createElement("td",null,"Vatlek"),m.a.createElement("td",null,"1232"),m.a.createElement("td",null,m.a.createElement(N.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),m.a.createElement("tr",null,m.a.createElement("td",null,"162323"),m.a.createElement("td",null,"SPM"),m.a.createElement("td",null,"1232"),m.a.createElement("td",null,m.a.createElement(N.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),m.a.createElement("tr",null,m.a.createElement("td",null,"170892"),m.a.createElement("td",null,"Endurance"),m.a.createElement("td",null,"3214"),m.a.createElement("td",null,m.a.createElement(N.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),m.a.createElement("tr",null,m.a.createElement("td",null,"123132"),m.a.createElement("td",null,"ST9"),m.a.createElement("td",null,"652"),m.a.createElement("td",null,m.a.createElement(N.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),m.a.createElement("tr",null,m.a.createElement("td",null,"130922"),m.a.createElement("td",null,"Kerr F1X"),m.a.createElement("td",null,"2012"),m.a.createElement("td",null,m.a.createElement(N.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),m.a.createElement("tr",null,m.a.createElement("td",null,"184098"),m.a.createElement("td",null,"Vatlek"),m.a.createElement("td",null,"1232"),m.a.createElement("td",null,m.a.createElement(N.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),m.a.createElement("tr",null,m.a.createElement("td",null,"152087"),m.a.createElement("td",null,"SPM"),m.a.createElement("td",null,"1232"),m.a.createElement("td",null,m.a.createElement(N.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),m.a.createElement("tr",null,m.a.createElement("td",null,"185678"),m.a.createElement("td",null,"Endurance"),m.a.createElement("td",null,"3214"),m.a.createElement("td",null,m.a.createElement(N.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),m.a.createElement("tr",null,m.a.createElement("td",null,"123456"),m.a.createElement("td",null,"ST9"),m.a.createElement("td",null,"652"),m.a.createElement("td",null,m.a.createElement(N.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),m.a.createElement("tr",null,m.a.createElement("td",null,"140987"),m.a.createElement("td",null,"Kerr F1X"),m.a.createElement("td",null,"2012"),m.a.createElement("td",null,m.a.createElement(N.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),m.a.createElement("tr",null,m.a.createElement("td",null,"182045"),m.a.createElement("td",null,"Vatlek"),m.a.createElement("td",null,"1232"),m.a.createElement("td",null,m.a.createElement(N.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),m.a.createElement("tr",null,m.a.createElement("td",null,"140987"),m.a.createElement("td",null,"SPM"),m.a.createElement("td",null,"1232"),m.a.createElement("td",null,m.a.createElement(N.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0})))))))),m.a.createElement(E.a,{className:"mb-0"},m.a.createElement(h.a,{id:"headingTwo"},m.a.createElement(x.a,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){return e.toggleAccordion(1)},"aria-expanded":this.state.accordion[1],"aria-controls":"collapseTwo"},m.a.createElement("h5",{className:"m-0 p-0"},"Blender"))),m.a.createElement(y.a,{isOpen:this.state.accordion[1],"data-parent":"#accordion",id:"collapseTwo"},m.a.createElement(p.a,null,m.a.createElement(v.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null,"Unit Number"),m.a.createElement("th",null,"Fluid End Type"),m.a.createElement("th",null,"Current Hours"),m.a.createElement("th",null,"Status"))),m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("td",null,"180982"),m.a.createElement("td",null,"Kerr F1X"),m.a.createElement("td",null,"2012"),m.a.createElement("td",null,m.a.createElement(N.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),m.a.createElement("tr",null,m.a.createElement("td",null,"173243"),m.a.createElement("td",null,"Vatlek"),m.a.createElement("td",null,"1232"),m.a.createElement("td",null,m.a.createElement(N.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),m.a.createElement("tr",null,m.a.createElement("td",null,"173432"),m.a.createElement("td",null,"SPM"),m.a.createElement("td",null,"1232"),m.a.createElement("td",null,m.a.createElement(N.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),m.a.createElement("tr",null,m.a.createElement("td",null,"182324"),m.a.createElement("td",null,"Endurance"),m.a.createElement("td",null,"3214"),m.a.createElement("td",null,m.a.createElement(N.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0})))))))),m.a.createElement(E.a,{className:"mb-0"},m.a.createElement(h.a,{id:"headingThree"},m.a.createElement(x.a,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){return e.toggleAccordion(2)},"aria-expanded":this.state.accordion[2],"aria-controls":"collapseThree"},m.a.createElement("h5",{className:"m-0 p-0"},"Hydration"))),m.a.createElement(y.a,{isOpen:this.state.accordion[2],"data-parent":"#accordion",id:"collapseThree"},m.a.createElement(p.a,null,m.a.createElement(v.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null,"Unit Number"),m.a.createElement("th",null,"Fluid End Type"),m.a.createElement("th",null,"Current Hours"),m.a.createElement("th",null,"Status"))),m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("td",null,"180982"),m.a.createElement("td",null,"Kerr F1X"),m.a.createElement("td",null,"2012"),m.a.createElement("td",null,m.a.createElement(N.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),m.a.createElement("tr",null,m.a.createElement("td",null,"173243"),m.a.createElement("td",null,"Vatlek"),m.a.createElement("td",null,"1232"),m.a.createElement("td",null,m.a.createElement(N.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),m.a.createElement("tr",null,m.a.createElement("td",null,"173432"),m.a.createElement("td",null,"SPM"),m.a.createElement("td",null,"1232"),m.a.createElement("td",null,m.a.createElement(N.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),m.a.createElement("tr",null,m.a.createElement("td",null,"182324"),m.a.createElement("td",null,"Endurance"),m.a.createElement("td",null,"3214"),m.a.createElement("td",null,m.a.createElement(N.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0})))))))),m.a.createElement(E.a,{className:"mb-0"},m.a.createElement(h.a,{id:"headingThree"},m.a.createElement(x.a,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){return e.toggleAccordion(2)},"aria-expanded":this.state.accordion[2],"aria-controls":"collapseThree"},m.a.createElement("h5",{className:"m-0 p-0"},"Tractors"))),m.a.createElement(y.a,{isOpen:this.state.accordion[2],"data-parent":"#accordion",id:"collapseThree"},m.a.createElement(p.a,null,m.a.createElement(v.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null,"Unit Number"),m.a.createElement("th",null,"Fluid End Type"),m.a.createElement("th",null,"Current Hours"),m.a.createElement("th",null,"Status"))),m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("td",null,"180982"),m.a.createElement("td",null,"Kerr F1X"),m.a.createElement("td",null,"2012"),m.a.createElement("td",null,m.a.createElement(N.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),m.a.createElement("tr",null,m.a.createElement("td",null,"173243"),m.a.createElement("td",null,"Vatlek"),m.a.createElement("td",null,"1232"),m.a.createElement("td",null,m.a.createElement(N.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),m.a.createElement("tr",null,m.a.createElement("td",null,"173432"),m.a.createElement("td",null,"SPM"),m.a.createElement("td",null,"1232"),m.a.createElement("td",null,m.a.createElement(N.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),m.a.createElement("tr",null,m.a.createElement("td",null,"182324"),m.a.createElement("td",null,"Endurance"),m.a.createElement("td",null,"3214"),m.a.createElement("td",null,m.a.createElement(N.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0})))))))))))),m.a.createElement(d.a,{xs:"12",sm:"8"},m.a.createElement(E.a,null,m.a.createElement(h.a,null,m.a.createElement("strong",null,"Current Shift Report")),m.a.createElement(p.a,null,m.a.createElement(b.a,null,m.a.createElement(f.a,{htmlFor:"company"},"Company"),m.a.createElement(g.a,{type:"text",id:"company",placeholder:"Enter your company name"})),m.a.createElement(b.a,null,m.a.createElement(f.a,{htmlFor:"vat"},"VAT"),m.a.createElement(g.a,{type:"text",id:"vat",placeholder:"DE1234567890"})),m.a.createElement(b.a,null,m.a.createElement(f.a,{htmlFor:"street"},"Street"),m.a.createElement(g.a,{type:"text",id:"street",placeholder:"Enter street name"})))))),m.a.createElement(u.a,null,m.a.createElement(d.a,{xs:"12",sm:"6",lg:"5"},m.a.createElement(E.a,null,m.a.createElement(h.a,null,m.a.createElement("i",{className:"fa fa-align-justify"})," End of Shift Reports",m.a.createElement("div",{className:"card-header-actions"})),m.a.createElement(p.a,null,m.a.createElement("div",{id:"accordion"},m.a.createElement(E.a,{className:"mb-0"},m.a.createElement(h.a,{id:"headingOne"},m.a.createElement(x.a,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){return e.toggleAccordion(0)},"aria-expanded":this.state.accordion[0],"aria-controls":"collapseOne"},m.a.createElement("h5",{className:"m-0 p-0"},"Day 9/5/19"))),m.a.createElement(y.a,{isOpen:this.state.accordion[0],"data-parent":"#accordion",id:"collapseOne","aria-labelledby":"headingOne"},m.a.createElement(p.a,null,m.a.createElement("div",null,"Zones Completed: X"),m.a.createElement("div",null,"Pumping Hours: XX:xx"),m.a.createElement("div",null,"NPT: XX:xx"),m.a.createElement("div",null,"Reason for NPT: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore atio."),m.a.createElement("div",null,"Equipment Issues: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. ")))),m.a.createElement(E.a,{className:"mb-0"},m.a.createElement(h.a,{id:"headingTwo"},m.a.createElement(x.a,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){return e.toggleAccordion(1)},"aria-expanded":this.state.accordion[1],"aria-controls":"collapseTwo"},m.a.createElement("h5",{className:"m-0 p-0"},"Night 9/4/19"))),m.a.createElement(y.a,{isOpen:this.state.accordion[1],"data-parent":"#accordion",id:"collapseTwo"},m.a.createElement(p.a,null,m.a.createElement("div",null,"Zones Completed: X"),m.a.createElement("div",null,"Pumping Hours: XX:xx"),m.a.createElement("div",null,"NPT: XX:xx"),m.a.createElement("div",null,"Reason for NPT: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."),m.a.createElement("div",null,"Equipment Issues: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.")))),m.a.createElement(E.a,{className:"mb-0"},m.a.createElement(h.a,{id:"headingThree"},m.a.createElement(x.a,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){return e.toggleAccordion(2)},"aria-expanded":this.state.accordion[2],"aria-controls":"collapseThree"},m.a.createElement("h5",{className:"m-0 p-0"},"Day 9/4/19"))),m.a.createElement(y.a,{isOpen:this.state.accordion[2],"data-parent":"#accordion",id:"collapseThree"},m.a.createElement(p.a,null,m.a.createElement("div",null,"Zones Completed: X"),m.a.createElement("div",null,"Pumping Hours: XX:xx"),m.a.createElement("div",null,"NPT: XX:xx"),m.a.createElement("div",null,"Reason for NPT: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."),m.a.createElement("div",null,"Equipment Issues: Lorem ipsum dolor sit amet,  quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. "))))))))))}}]),t}(s.Component);t.default=k}}]);
//# sourceMappingURL=22.eb421a5f.chunk.js.map