(window["webpackJsonp@coreui/coreui-free-react-admin-template"]=window["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[15],{887:function(e,t){e.exports=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}},889:function(e,t,a){"use strict";var l=a(36),n=a(100),r=a(4),c=a.n(r),o=a(111),m=a.n(o),s=a(885),i=a.n(s),u=a(886),d={tag:u.m,noGutters:m.a.bool,className:m.a.string,cssModule:m.a.object,form:m.a.bool},E=function(e){var t=e.className,a=e.cssModule,r=e.noGutters,o=e.tag,m=e.form,s=Object(n.a)(e,["className","cssModule","noGutters","tag","form"]),d=Object(u.i)(i()(t,r?"no-gutters":null,m?"form-row":"row"),a);return c.a.createElement(o,Object(l.a)({},s,{className:d}))};E.propTypes=d,E.defaultProps={tag:"div"},t.a=E},890:function(e,t,a){"use strict";var l=a(36),n=a(100),r=a(887),c=a.n(r),o=a(4),m=a.n(o),s=a(111),i=a.n(s),u=a(885),d=a.n(u),E=a(886),p=i.a.oneOfType([i.a.number,i.a.string]),b=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:p,offset:p})]),h={tag:E.m,xs:b,sm:b,md:b,lg:b,xl:b,className:i.a.string,cssModule:i.a.object,widths:i.a.array},f={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,r=e.widths,o=e.tag,s=Object(n.a)(e,["className","cssModule","widths","tag"]),i=[];r.forEach((function(t,l){var n=e[t];if(delete s[t],n||""===n){var r=!l;if(c()(n)){var o,m=r?"-":"-"+t+"-",u=g(r,t,n.size);i.push(Object(E.i)(d()(((o={})[u]=n.size||""===n.size,o["order"+m+n.order]=n.order||0===n.order,o["offset"+m+n.offset]=n.offset||0===n.offset,o)),a))}else{var p=g(r,t,n);i.push(p)}}})),i.length||i.push("col");var u=Object(E.i)(d()(t,i),a);return m.a.createElement(o,Object(l.a)({},s,{className:u}))};v.propTypes=h,v.defaultProps=f,t.a=v},891:function(e,t,a){"use strict";var l=a(36),n=a(100),r=a(4),c=a.n(r),o=a(111),m=a.n(o),s=a(885),i=a.n(s),u=a(886),d={tag:u.m,inverse:m.a.bool,color:m.a.string,body:m.a.bool,outline:m.a.bool,className:m.a.string,cssModule:m.a.object,innerRef:m.a.oneOfType([m.a.object,m.a.string,m.a.func])},E=function(e){var t=e.className,a=e.cssModule,r=e.color,o=e.body,m=e.inverse,s=e.outline,d=e.tag,E=e.innerRef,p=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(u.i)(i()(t,"card",!!m&&"text-white",!!o&&"card-body",!!r&&(s?"border":"bg")+"-"+r),a);return c.a.createElement(d,Object(l.a)({},p,{className:b,ref:E}))};E.propTypes=d,E.defaultProps={tag:"div"},t.a=E},892:function(e,t,a){"use strict";var l=a(36),n=a(100),r=a(4),c=a.n(r),o=a(111),m=a.n(o),s=a(885),i=a.n(s),u=a(886),d={tag:u.m,className:m.a.string,cssModule:m.a.object},E=function(e){var t=e.className,a=e.cssModule,r=e.tag,o=Object(n.a)(e,["className","cssModule","tag"]),m=Object(u.i)(i()(t,"card-header"),a);return c.a.createElement(r,Object(l.a)({},o,{className:m}))};E.propTypes=d,E.defaultProps={tag:"div"},t.a=E},893:function(e,t,a){"use strict";var l=a(36),n=a(100),r=a(4),c=a.n(r),o=a(111),m=a.n(o),s=a(885),i=a.n(s),u=a(886),d={tag:u.m,className:m.a.string,cssModule:m.a.object,innerRef:m.a.oneOfType([m.a.object,m.a.string,m.a.func])},E=function(e){var t=e.className,a=e.cssModule,r=e.innerRef,o=e.tag,m=Object(n.a)(e,["className","cssModule","innerRef","tag"]),s=Object(u.i)(i()(t,"card-body"),a);return c.a.createElement(o,Object(l.a)({},m,{className:s,ref:r}))};E.propTypes=d,E.defaultProps={tag:"div"},t.a=E},895:function(e,t,a){"use strict";var l=a(36),n=a(100),r=a(4),c=a.n(r),o=a(111),m=a.n(o),s=a(885),i=a.n(s),u=a(886),d={className:m.a.string,cssModule:m.a.object,size:m.a.string,bordered:m.a.bool,borderless:m.a.bool,striped:m.a.bool,dark:m.a.bool,hover:m.a.bool,responsive:m.a.oneOfType([m.a.bool,m.a.string]),tag:u.m,responsiveTag:u.m,innerRef:m.a.oneOfType([m.a.func,m.a.string,m.a.object])},E=function(e){var t=e.className,a=e.cssModule,r=e.size,o=e.bordered,m=e.borderless,s=e.striped,d=e.dark,E=e.hover,p=e.responsive,b=e.tag,h=e.responsiveTag,f=e.innerRef,g=Object(n.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),v=Object(u.i)(i()(t,"table",!!r&&"table-"+r,!!o&&"table-bordered",!!m&&"table-borderless",!!s&&"table-striped",!!d&&"table-dark",!!E&&"table-hover"),a),y=c.a.createElement(b,Object(l.a)({},g,{ref:f,className:v}));if(p){var N=Object(u.i)(!0===p?"table-responsive":"table-responsive-"+p,a);return c.a.createElement(h,{className:N},y)}return y};E.propTypes=d,E.defaultProps={tag:"table",responsiveTag:"div"},t.a=E},896:function(e,t,a){"use strict";var l=a(36),n=a(100),r=a(894),c=a(63),o=a(4),m=a.n(o),s=a(111),i=a.n(s),u=a(885),d=a.n(u),E=a(886),p={children:i.a.node,type:i.a.string,size:i.a.string,bsSize:i.a.string,valid:i.a.bool,invalid:i.a.bool,tag:E.m,innerRef:i.a.oneOfType([i.a.object,i.a.func,i.a.string]),plaintext:i.a.bool,addon:i.a.bool,className:i.a.string,cssModule:i.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.focus=a.focus.bind(Object(r.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,c=e.bsSize,o=e.valid,s=e.invalid,i=e.tag,u=e.addon,p=e.plaintext,b=e.innerRef,h=Object(n.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),f=["radio","checkbox"].indexOf(r)>-1,g=new RegExp("\\D","g"),v=i||("select"===r||"textarea"===r?r:"input"),y="form-control";p?(y+="-plaintext",v=i||"input"):"file"===r?y+="-file":f&&(y=u?null:"form-check-input"),h.size&&g.test(h.size)&&(Object(E.n)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=h.size,delete h.size);var N=Object(E.i)(d()(t,s&&"is-invalid",o&&"is-valid",!!c&&"form-control-"+c,y),a);return("input"===v||i&&"function"===typeof i)&&(h.type=r),h.children&&!p&&"select"!==r&&"string"===typeof v&&"select"!==v&&(Object(E.n)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),m.a.createElement(v,Object(l.a)({},h,{ref:b,className:N}))},t}(m.a.Component);b.propTypes=p,b.defaultProps={type:"text"},t.a=b},899:function(e,t,a){"use strict";var l=a(36),n=a(100),r=a(4),c=a.n(r),o=a(111),m=a.n(o),s=a(885),i=a.n(s),u=a(886),d={children:m.a.node,row:m.a.bool,check:m.a.bool,inline:m.a.bool,disabled:m.a.bool,tag:u.m,className:m.a.string,cssModule:m.a.object},E=function(e){var t=e.className,a=e.cssModule,r=e.row,o=e.disabled,m=e.check,s=e.inline,d=e.tag,E=Object(n.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),p=Object(u.i)(i()(t,!!r&&"row",m?"form-check":"form-group",!(!m||!s)&&"form-check-inline",!(!m||!o)&&"disabled"),a);return"fieldset"===d&&(E.disabled=o),c.a.createElement(d,Object(l.a)({},E,{className:p}))};E.propTypes=d,E.defaultProps={tag:"div"},t.a=E},900:function(e,t,a){"use strict";var l=a(36),n=a(100),r=a(4),c=a.n(r),o=a(111),m=a.n(o),s=a(885),i=a.n(s),u=a(887),d=a.n(u),E=a(886),p=m.a.oneOfType([m.a.number,m.a.string]),b=m.a.oneOfType([m.a.string,m.a.number,m.a.shape({size:p,order:p,offset:p})]),h={children:m.a.node,hidden:m.a.bool,check:m.a.bool,size:m.a.string,for:m.a.string,tag:E.m,className:m.a.string,cssModule:m.a.object,xs:b,sm:b,md:b,lg:b,xl:b,widths:m.a.array},f={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,r=e.hidden,o=e.widths,m=e.tag,s=e.check,u=e.size,p=e.for,b=Object(n.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),h=[];o.forEach((function(t,l){var n=e[t];if(delete b[t],n||""===n){var r,c=!l;if(d()(n)){var o,m=c?"-":"-"+t+"-";r=g(c,t,n.size),h.push(Object(E.i)(i()(((o={})[r]=n.size||""===n.size,o["order"+m+n.order]=n.order||0===n.order,o["offset"+m+n.offset]=n.offset||0===n.offset,o))),a)}else r=g(c,t,n),h.push(r)}}));var f=Object(E.i)(i()(t,!!r&&"sr-only",!!s&&"form-check-label",!!u&&"col-form-label-"+u,h,!!h.length&&"col-form-label"),a);return c.a.createElement(m,Object(l.a)({htmlFor:p},b,{className:f}))};v.propTypes=h,v.defaultProps=f,t.a=v},997:function(e,t,a){"use strict";a.r(t);var l=a(229),n=a(230),r=a(232),c=a(231),o=a(234),m=a(233),s=a(4),i=a.n(s),u=a(889),d=a(890),E=a(891),p=a(893),b=a(892),h=a(899),f=a(900),g=a(896),v=a(895),y=a(930),N=a(973),x=a(901),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).loading=function(){return i.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},a.toggle=a.toggle.bind(Object(o.a)(a)),a.onRadioBtnClick=a.onRadioBtnClick.bind(Object(o.a)(a)),a.state={dropdownOpen:!1,radioSelected:2},(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).loading=function(){return i.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},a.onEntering=a.onEntering.bind(Object(o.a)(a)),a.onEntered=a.onEntered.bind(Object(o.a)(a)),a.onExiting=a.onExiting.bind(Object(o.a)(a)),a.onExited=a.onExited.bind(Object(o.a)(a)),a.toggle=a.toggle.bind(Object(o.a)(a)),a.toggleAccordion=a.toggleAccordion.bind(Object(o.a)(a)),a.toggleCustom=a.toggleCustom.bind(Object(o.a)(a)),a.toggleFade=a.toggleFade.bind(Object(o.a)(a)),a.state={collapse:!1,accordion:[!0,!1,!1],custom:[!0,!1],status:"Closed",fadeIn:!0,timeout:300},a}return Object(m.a)(t,e),Object(n.a)(t,[{key:"toggle",value:function(){this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"onRadioBtnClick",value:function(e){this.setState({radioSelected:e})}},{key:"onEntering",value:function(){this.setState({status:"Opening..."})}},{key:"onEntered",value:function(){this.setState({status:"Opened"})}},{key:"onExiting",value:function(){this.setState({status:"Closing..."})}},{key:"onExited",value:function(){this.setState({status:"Closed"})}},{key:"toggleAccordion",value:function(e){var t=this.state.accordion.map((function(t,a){return e===a&&!t}));this.setState({accordion:t})}},{key:"toggleCustom",value:function(e){var t=this.state.custom.map((function(t,a){return e===a&&!t}));this.setState({custom:t})}},{key:"toggleFade",value:function(){this.setState({fadeIn:!this.state.fadeIn})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(u.a,null,i.a.createElement(d.a,{xs:"12",sm:"6",lg:"2"},i.a.createElement(E.a,{className:"text-white bg-info"},i.a.createElement(p.a,{className:"pb-0"},i.a.createElement("div",{className:"text-value"},"Fleet 1"),i.a.createElement("div",null,"Current Pad: Spud Muffin"),i.a.createElement("div",null,"Customer: Devon"),i.a.createElement("div",null,"Pad Progress: 40 of 150 Stages"),i.a.createElement("div",null,"NPT Last 24: XX:XX"),i.a.createElement("div",null,"Pump Hours Last 24: XX:XX"),i.a.createElement("div",null,"Stages Last 24: X "),i.a.createElement("div",null," Number of Wells: X "),i.a.createElement("div",null,"Pumps: XX"),i.a.createElement("div",null,"Standby Pumps: XX"),i.a.createElement("div",null,"Blender: XXX"),i.a.createElement("div",null,"Standby Blender: XXX")),i.a.createElement("div",{className:"chart-wrapper mx-3",style:{height:"50px"}}))),i.a.createElement(d.a,{xs:"12",sm:"6"},i.a.createElement(E.a,null,i.a.createElement(b.a,null,i.a.createElement("strong",null,"Well Actions"),i.a.createElement("small",null," Open/Close, NPT events, equipment issues... Some of this will be pop ups")),i.a.createElement(p.a,null,i.a.createElement(h.a,null,i.a.createElement(f.a,{htmlFor:"company"},"Company"),i.a.createElement(g.a,{type:"text",id:"company",placeholder:"Enter your company name"})),i.a.createElement(h.a,null,i.a.createElement(f.a,{htmlFor:"vat"},"VAT"),i.a.createElement(g.a,{type:"text",id:"vat",placeholder:"DE1234567890"})),i.a.createElement(h.a,null,i.a.createElement(f.a,{htmlFor:"street"},"Street"),i.a.createElement(g.a,{type:"text",id:"street",placeholder:"Enter street name"}))))),i.a.createElement(d.a,{xs:"12",sm:"4"},i.a.createElement(E.a,null,i.a.createElement(b.a,null,i.a.createElement("strong",null,"Up Coming Pump Maintenance")),i.a.createElement(p.a,null,i.a.createElement(v.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Unit Number"),i.a.createElement("th",null,"Fluid End Type"),i.a.createElement("th",null,"Current Hours"),i.a.createElement("th",null,"Maintenance"))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,"180982"),i.a.createElement("td",null,"Kerr F1X"),i.a.createElement("td",null,"2012"),i.a.createElement("td",null,"Valves")),i.a.createElement("tr",null,i.a.createElement("td",null,"173243"),i.a.createElement("td",null,"Vatlek"),i.a.createElement("td",null,"1232"),i.a.createElement("td",null,"Valves & Seats")),i.a.createElement("tr",null,i.a.createElement("td",null,"173432"),i.a.createElement("td",null,"SPM"),i.a.createElement("td",null,"1232"),i.a.createElement("td",null,"Valves & Seats")),i.a.createElement("tr",null,i.a.createElement("td",null,"182324"),i.a.createElement("td",null,"Endurance"),i.a.createElement("td",null,"3214"),i.a.createElement("td",null,"Valves & Seats")),i.a.createElement("tr",null,i.a.createElement("td",null,"123232"),i.a.createElement("td",null,"ST9"),i.a.createElement("td",null,"2314"),i.a.createElement("td",null,"Packing")),i.a.createElement("tr",null,i.a.createElement("td",null,"18021"),i.a.createElement("td",null,"Kerr F1X"),i.a.createElement("td",null,"2012"),i.a.createElement("td",null,"Valves & Seats")))))))),i.a.createElement(u.a,null,i.a.createElement(d.a,{xs:"12",sm:"6",lg:"4"},i.a.createElement(E.a,null,i.a.createElement(b.a,null,i.a.createElement("i",{className:"fa fa-align-justify"})," Equipment on Location",i.a.createElement(u.a,null,i.a.createElement(d.a,{md:"4"},i.a.createElement(g.a,{type:"text",placeholder:"Add Unit"})),i.a.createElement(d.a,{md:"4"},i.a.createElement(y.a,{type:"submit",size:"sm",color:"primary"},i.a.createElement("i",{className:"fa fa-dot-circle-o"})," Submit"))),i.a.createElement("div",{className:"card-header-actions"})),i.a.createElement(p.a,null,i.a.createElement("div",{id:"accordion"},i.a.createElement(E.a,{className:"mb-0"},i.a.createElement(b.a,{id:"headingOne"},i.a.createElement(y.a,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){return e.toggleAccordion(0)},"aria-expanded":this.state.accordion[0],"aria-controls":"collapseOne"},i.a.createElement("h5",{className:"m-0 p-0"},"Frac Pumps"))),i.a.createElement(N.a,{isOpen:this.state.accordion[0],"data-parent":"#accordion",id:"collapseOne","aria-labelledby":"headingOne"},i.a.createElement(p.a,null,i.a.createElement(v.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Unit Number"),i.a.createElement("th",null,"Fluid End Type"),i.a.createElement("th",null,"Current Hours"),i.a.createElement("th",null,"Status"))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,"180982"),i.a.createElement("td",null,"Kerr F1X"),i.a.createElement("td",null,"2012"),i.a.createElement("td",null,i.a.createElement(x.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),i.a.createElement("tr",null,i.a.createElement("td",null,"173243"),i.a.createElement("td",null,"Vatlek"),i.a.createElement("td",null,"1232"),i.a.createElement("td",null,i.a.createElement(x.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),i.a.createElement("tr",null,i.a.createElement("td",null,"173432"),i.a.createElement("td",null,"SPM"),i.a.createElement("td",null,"1232"),i.a.createElement("td",null,i.a.createElement(x.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),i.a.createElement("tr",null,i.a.createElement("td",null,"182324"),i.a.createElement("td",null,"Endurance"),i.a.createElement("td",null,"3214"),i.a.createElement("td",null,i.a.createElement(x.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),i.a.createElement("tr",null,i.a.createElement("td",null,"123232"),i.a.createElement("td",null,"ST9"),i.a.createElement("td",null,"2314"),i.a.createElement("td",null,i.a.createElement(x.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),i.a.createElement("tr",null,i.a.createElement("td",null,"18021"),i.a.createElement("td",null,"Kerr F1X"),i.a.createElement("td",null,"2012"),i.a.createElement("td",null,i.a.createElement(x.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),i.a.createElement("tr",null,i.a.createElement("td",null,"180022"),i.a.createElement("td",null,"Vatlek"),i.a.createElement("td",null,"1232"),i.a.createElement("td",null,i.a.createElement(x.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),i.a.createElement("tr",null,i.a.createElement("td",null,"162323"),i.a.createElement("td",null,"SPM"),i.a.createElement("td",null,"1232"),i.a.createElement("td",null,i.a.createElement(x.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),i.a.createElement("tr",null,i.a.createElement("td",null,"170892"),i.a.createElement("td",null,"Endurance"),i.a.createElement("td",null,"3214"),i.a.createElement("td",null,i.a.createElement(x.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),i.a.createElement("tr",null,i.a.createElement("td",null,"123132"),i.a.createElement("td",null,"ST9"),i.a.createElement("td",null,"652"),i.a.createElement("td",null,i.a.createElement(x.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),i.a.createElement("tr",null,i.a.createElement("td",null,"130922"),i.a.createElement("td",null,"Kerr F1X"),i.a.createElement("td",null,"2012"),i.a.createElement("td",null,i.a.createElement(x.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),i.a.createElement("tr",null,i.a.createElement("td",null,"184098"),i.a.createElement("td",null,"Vatlek"),i.a.createElement("td",null,"1232"),i.a.createElement("td",null,i.a.createElement(x.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),i.a.createElement("tr",null,i.a.createElement("td",null,"152087"),i.a.createElement("td",null,"SPM"),i.a.createElement("td",null,"1232"),i.a.createElement("td",null,i.a.createElement(x.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),i.a.createElement("tr",null,i.a.createElement("td",null,"185678"),i.a.createElement("td",null,"Endurance"),i.a.createElement("td",null,"3214"),i.a.createElement("td",null,i.a.createElement(x.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),i.a.createElement("tr",null,i.a.createElement("td",null,"123456"),i.a.createElement("td",null,"ST9"),i.a.createElement("td",null,"652"),i.a.createElement("td",null,i.a.createElement(x.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),i.a.createElement("tr",null,i.a.createElement("td",null,"140987"),i.a.createElement("td",null,"Kerr F1X"),i.a.createElement("td",null,"2012"),i.a.createElement("td",null,i.a.createElement(x.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),i.a.createElement("tr",null,i.a.createElement("td",null,"182045"),i.a.createElement("td",null,"Vatlek"),i.a.createElement("td",null,"1232"),i.a.createElement("td",null,i.a.createElement(x.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),i.a.createElement("tr",null,i.a.createElement("td",null,"140987"),i.a.createElement("td",null,"SPM"),i.a.createElement("td",null,"1232"),i.a.createElement("td",null,i.a.createElement(x.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0})))))))),i.a.createElement(E.a,{className:"mb-0"},i.a.createElement(b.a,{id:"headingTwo"},i.a.createElement(y.a,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){return e.toggleAccordion(1)},"aria-expanded":this.state.accordion[1],"aria-controls":"collapseTwo"},i.a.createElement("h5",{className:"m-0 p-0"},"Blender"))),i.a.createElement(N.a,{isOpen:this.state.accordion[1],"data-parent":"#accordion",id:"collapseTwo"},i.a.createElement(p.a,null,i.a.createElement(v.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Unit Number"),i.a.createElement("th",null,"Fluid End Type"),i.a.createElement("th",null,"Current Hours"),i.a.createElement("th",null,"Status"))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,"180982"),i.a.createElement("td",null,"Kerr F1X"),i.a.createElement("td",null,"2012"),i.a.createElement("td",null,i.a.createElement(x.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),i.a.createElement("tr",null,i.a.createElement("td",null,"173243"),i.a.createElement("td",null,"Vatlek"),i.a.createElement("td",null,"1232"),i.a.createElement("td",null,i.a.createElement(x.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),i.a.createElement("tr",null,i.a.createElement("td",null,"173432"),i.a.createElement("td",null,"SPM"),i.a.createElement("td",null,"1232"),i.a.createElement("td",null,i.a.createElement(x.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),i.a.createElement("tr",null,i.a.createElement("td",null,"182324"),i.a.createElement("td",null,"Endurance"),i.a.createElement("td",null,"3214"),i.a.createElement("td",null,i.a.createElement(x.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0})))))))),i.a.createElement(E.a,{className:"mb-0"},i.a.createElement(b.a,{id:"headingThree"},i.a.createElement(y.a,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){return e.toggleAccordion(2)},"aria-expanded":this.state.accordion[2],"aria-controls":"collapseThree"},i.a.createElement("h5",{className:"m-0 p-0"},"Hydration"))),i.a.createElement(N.a,{isOpen:this.state.accordion[2],"data-parent":"#accordion",id:"collapseThree"},i.a.createElement(p.a,null,i.a.createElement(v.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Unit Number"),i.a.createElement("th",null,"Fluid End Type"),i.a.createElement("th",null,"Current Hours"),i.a.createElement("th",null,"Status"))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,"180982"),i.a.createElement("td",null,"Kerr F1X"),i.a.createElement("td",null,"2012"),i.a.createElement("td",null,i.a.createElement(x.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),i.a.createElement("tr",null,i.a.createElement("td",null,"173243"),i.a.createElement("td",null,"Vatlek"),i.a.createElement("td",null,"1232"),i.a.createElement("td",null,i.a.createElement(x.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),i.a.createElement("tr",null,i.a.createElement("td",null,"173432"),i.a.createElement("td",null,"SPM"),i.a.createElement("td",null,"1232"),i.a.createElement("td",null,i.a.createElement(x.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),i.a.createElement("tr",null,i.a.createElement("td",null,"182324"),i.a.createElement("td",null,"Endurance"),i.a.createElement("td",null,"3214"),i.a.createElement("td",null,i.a.createElement(x.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0})))))))),i.a.createElement(E.a,{className:"mb-0"},i.a.createElement(b.a,{id:"headingThree"},i.a.createElement(y.a,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){return e.toggleAccordion(2)},"aria-expanded":this.state.accordion[2],"aria-controls":"collapseThree"},i.a.createElement("h5",{className:"m-0 p-0"},"Tractors"))),i.a.createElement(N.a,{isOpen:this.state.accordion[2],"data-parent":"#accordion",id:"collapseThree"},i.a.createElement(p.a,null,i.a.createElement(v.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Unit Number"),i.a.createElement("th",null,"Fluid End Type"),i.a.createElement("th",null,"Current Hours"),i.a.createElement("th",null,"Status"))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,"180982"),i.a.createElement("td",null,"Kerr F1X"),i.a.createElement("td",null,"2012"),i.a.createElement("td",null,i.a.createElement(x.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),i.a.createElement("tr",null,i.a.createElement("td",null,"173243"),i.a.createElement("td",null,"Vatlek"),i.a.createElement("td",null,"1232"),i.a.createElement("td",null,i.a.createElement(x.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),i.a.createElement("tr",null,i.a.createElement("td",null,"173432"),i.a.createElement("td",null,"SPM"),i.a.createElement("td",null,"1232"),i.a.createElement("td",null,i.a.createElement(x.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}))),i.a.createElement("tr",null,i.a.createElement("td",null,"182324"),i.a.createElement("td",null,"Endurance"),i.a.createElement("td",null,"3214"),i.a.createElement("td",null,i.a.createElement(x.n,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0})))))))))))),i.a.createElement(d.a,{xs:"12",sm:"8"},i.a.createElement(E.a,null,i.a.createElement(b.a,null,i.a.createElement("strong",null,"Current Shift Report")),i.a.createElement(p.a,null,i.a.createElement(h.a,null,i.a.createElement(f.a,{htmlFor:"company"},"Company"),i.a.createElement(g.a,{type:"text",id:"company",placeholder:"Enter your company name"})),i.a.createElement(h.a,null,i.a.createElement(f.a,{htmlFor:"vat"},"VAT"),i.a.createElement(g.a,{type:"text",id:"vat",placeholder:"DE1234567890"})),i.a.createElement(h.a,null,i.a.createElement(f.a,{htmlFor:"street"},"Street"),i.a.createElement(g.a,{type:"text",id:"street",placeholder:"Enter street name"})))))),i.a.createElement(u.a,null,i.a.createElement(d.a,{xs:"12",sm:"6",lg:"5"},i.a.createElement(E.a,null,i.a.createElement(b.a,null,i.a.createElement("i",{className:"fa fa-align-justify"})," End of Shift Reports",i.a.createElement("div",{className:"card-header-actions"})),i.a.createElement(p.a,null,i.a.createElement("div",{id:"accordion"},i.a.createElement(E.a,{className:"mb-0"},i.a.createElement(b.a,{id:"headingOne"},i.a.createElement(y.a,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){return e.toggleAccordion(0)},"aria-expanded":this.state.accordion[0],"aria-controls":"collapseOne"},i.a.createElement("h5",{className:"m-0 p-0"},"Day 9/5/19"))),i.a.createElement(N.a,{isOpen:this.state.accordion[0],"data-parent":"#accordion",id:"collapseOne","aria-labelledby":"headingOne"},i.a.createElement(p.a,null,i.a.createElement("div",null,"Zones Completed: X"),i.a.createElement("div",null,"Pumping Hours: XX:xx"),i.a.createElement("div",null,"NPT: XX:xx"),i.a.createElement("div",null,"Reason for NPT: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore atio."),i.a.createElement("div",null,"Equipment Issues: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. ")))),i.a.createElement(E.a,{className:"mb-0"},i.a.createElement(b.a,{id:"headingTwo"},i.a.createElement(y.a,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){return e.toggleAccordion(1)},"aria-expanded":this.state.accordion[1],"aria-controls":"collapseTwo"},i.a.createElement("h5",{className:"m-0 p-0"},"Night 9/4/19"))),i.a.createElement(N.a,{isOpen:this.state.accordion[1],"data-parent":"#accordion",id:"collapseTwo"},i.a.createElement(p.a,null,i.a.createElement("div",null,"Zones Completed: X"),i.a.createElement("div",null,"Pumping Hours: XX:xx"),i.a.createElement("div",null,"NPT: XX:xx"),i.a.createElement("div",null,"Reason for NPT: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."),i.a.createElement("div",null,"Equipment Issues: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.")))),i.a.createElement(E.a,{className:"mb-0"},i.a.createElement(b.a,{id:"headingThree"},i.a.createElement(y.a,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){return e.toggleAccordion(2)},"aria-expanded":this.state.accordion[2],"aria-controls":"collapseThree"},i.a.createElement("h5",{className:"m-0 p-0"},"Day 9/4/19"))),i.a.createElement(N.a,{isOpen:this.state.accordion[2],"data-parent":"#accordion",id:"collapseThree"},i.a.createElement(p.a,null,i.a.createElement("div",null,"Zones Completed: X"),i.a.createElement("div",null,"Pumping Hours: XX:xx"),i.a.createElement("div",null,"NPT: XX:xx"),i.a.createElement("div",null,"Reason for NPT: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."),i.a.createElement("div",null,"Equipment Issues: Lorem ipsum dolor sit amet,  quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. "))))))))))}}]),t}(s.Component);t.default=k}}]);
//# sourceMappingURL=15.1fc5ef55.chunk.js.map