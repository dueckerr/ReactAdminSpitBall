(window["webpackJsonp@coreui/coreui-free-react-admin-template"]=window["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[23],{891:function(e,t,a){"use strict";var n=a(36),i=a(100),o=a(887),l=a(63),c=a(4),s=a.n(c),r=a(111),m=a.n(r),u=a(885),d=a.n(u),p=a(886),E={active:m.a.bool,"aria-label":m.a.string,block:m.a.bool,color:m.a.string,disabled:m.a.bool,outline:m.a.bool,tag:p.h,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),onClick:m.a.func,size:m.a.string,children:m.a.node,className:m.a.string,cssModule:m.a.object,close:m.a.bool},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(o.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],o=e.block,l=e.className,c=e.close,r=e.cssModule,m=e.color,u=e.outline,E=e.size,h=e.tag,g=e.innerRef,b=Object(i.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);c&&"undefined"===typeof b.children&&(b.children=s.a.createElement("span",{"aria-hidden":!0},"\xd7"));var f="btn"+(u?"-outline":"")+"-"+m,x=Object(p.e)(d()(l,{close:c},c||"btn",c||f,!!E&&"btn-"+E,!!o&&"btn-block",{active:t,disabled:this.props.disabled}),r);b.href&&"button"===h&&(h="a");var v=c?"Close":null;return s.a.createElement(h,Object(n.a)({type:"button"===h&&b.onClick?"button":void 0},b,{className:x,ref:g,onClick:this.onClick,"aria-label":a||v}))},t}(s.a.Component);h.propTypes=E,h.defaultProps={color:"secondary",tag:"button"},t.a=h},895:function(e,t,a){"use strict";var n,i=a(36),o=a(100),l=a(887),c=a(63),s=a(890),r=a(4),m=a.n(r),u=a(111),d=a.n(u),p=a(885),E=a.n(p),h=a(892),g=a(886),b=Object(s.a)({},h.Transition.propTypes,{isOpen:d.a.bool,children:d.a.oneOfType([d.a.arrayOf(d.a.node),d.a.node]),tag:g.h,className:d.a.node,navbar:d.a.bool,cssModule:d.a.object,innerRef:d.a.oneOfType([d.a.func,d.a.string,d.a.object])}),f=Object(s.a)({},h.Transition.defaultProps,{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:g.c.Collapse}),x=((n={})[g.b.ENTERING]="collapsing",n[g.b.ENTERED]="collapse show",n[g.b.EXITING]="collapsing",n[g.b.EXITED]="collapse",n);function v(e){return e.scrollHeight}var N=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach((function(e){a[e]=a[e].bind(Object(l.a)(a))})),a}Object(c.a)(t,e);var a=t.prototype;return a.onEntering=function(e,t){this.setState({height:v(e)}),this.props.onEntering(e,t)},a.onEntered=function(e,t){this.setState({height:null}),this.props.onEntered(e,t)},a.onExit=function(e){this.setState({height:v(e)}),this.props.onExit(e)},a.onExiting=function(e){e.offsetHeight;this.setState({height:0}),this.props.onExiting(e)},a.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},a.render=function(){var e=this,t=this.props,a=t.tag,n=t.isOpen,l=t.className,c=t.navbar,r=t.cssModule,u=t.children,d=(t.innerRef,Object(o.a)(t,["tag","isOpen","className","navbar","cssModule","children","innerRef"])),p=this.state.height,b=Object(g.g)(d,g.a),f=Object(g.f)(d,g.a);return m.a.createElement(h.Transition,Object(i.a)({},b,{in:n,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(t){var n=function(e){return x[e]||"collapse"}(t),o=Object(g.e)(E()(l,n,c&&"navbar-collapse"),r),d=null===p?null:{height:p};return m.a.createElement(a,Object(i.a)({},f,{style:Object(s.a)({},f.style,d),className:o,ref:e.props.innerRef}),u)}))},t}(r.Component);N.propTypes=b,N.defaultProps=f,t.a=N},951:function(e,t,a){"use strict";a.r(t);var n=a(229),i=a(230),o=a(232),l=a(231),c=a(234),s=a(233),r=a(4),m=a.n(r),u=a(903),d=a(904),p=a(898),E=a(899),h=a(900),g=a(891),b=a(895),f=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(l.a)(t).call(this,e))).loading=function(){return m.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},a.toggle=a.toggle.bind(Object(c.a)(a)),a.onRadioBtnClick=a.onRadioBtnClick.bind(Object(c.a)(a)),a.state={dropdownOpen:!1,radioSelected:2},(a=Object(o.a)(this,Object(l.a)(t).call(this,e))).loading=function(){return m.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},a.onEntering=a.onEntering.bind(Object(c.a)(a)),a.onEntered=a.onEntered.bind(Object(c.a)(a)),a.onExiting=a.onExiting.bind(Object(c.a)(a)),a.onExited=a.onExited.bind(Object(c.a)(a)),a.toggle=a.toggle.bind(Object(c.a)(a)),a.toggleAccordion=a.toggleAccordion.bind(Object(c.a)(a)),a.toggleCustom=a.toggleCustom.bind(Object(c.a)(a)),a.toggleFade=a.toggleFade.bind(Object(c.a)(a)),a.state={collapse:!1,accordion:[!0,!1,!1],custom:[!0,!1],status:"Closed",fadeIn:!0,timeout:300},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"toggle",value:function(){this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"onRadioBtnClick",value:function(e){this.setState({radioSelected:e})}},{key:"onEntering",value:function(){this.setState({status:"Opening..."})}},{key:"onEntered",value:function(){this.setState({status:"Opened"})}},{key:"onExiting",value:function(){this.setState({status:"Closing..."})}},{key:"onExited",value:function(){this.setState({status:"Closed"})}},{key:"toggleAccordion",value:function(e){var t=this.state.accordion.map((function(t,a){return e===a&&!t}));this.setState({accordion:t})}},{key:"toggleCustom",value:function(e){var t=this.state.custom.map((function(t,a){return e===a&&!t}));this.setState({custom:t})}},{key:"toggleFade",value:function(){this.setState({fadeIn:!this.state.fadeIn})}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"animated fadeIn"},m.a.createElement(u.a,null,m.a.createElement(d.a,{xs:"12",sm:"6",lg:"12"},m.a.createElement(p.a,null,m.a.createElement(E.a,null,m.a.createElement("i",{className:"fa fa-align-justify"})," Fleet 1: End of Shift Reports",m.a.createElement("div",{className:"card-header-actions"})),m.a.createElement(h.a,null,m.a.createElement("div",{id:"accordion"},m.a.createElement(p.a,{className:"mb-0"},m.a.createElement(E.a,{id:"headingOne"},m.a.createElement(g.a,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){return e.toggleAccordion(0)},"aria-expanded":this.state.accordion[0],"aria-controls":"collapseOne"},m.a.createElement("h5",{className:"m-0 p-0"},"Day 9/5/19"))),m.a.createElement(b.a,{isOpen:this.state.accordion[0],"data-parent":"#accordion",id:"collapseOne","aria-labelledby":"headingOne"},m.a.createElement(h.a,null,m.a.createElement("div",null,"Zones Completed: X"),m.a.createElement("div",null,"Pumping Hours: XX:xx"),m.a.createElement("div",null,"NPT: XX:xx"),m.a.createElement("div",null,"Reason for NPT: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore atio."),m.a.createElement("div",null,"Equipment Issues: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. ")))),m.a.createElement(p.a,{className:"mb-0"},m.a.createElement(E.a,{id:"headingTwo"},m.a.createElement(g.a,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){return e.toggleAccordion(1)},"aria-expanded":this.state.accordion[1],"aria-controls":"collapseTwo"},m.a.createElement("h5",{className:"m-0 p-0"},"Night 9/4/19"))),m.a.createElement(b.a,{isOpen:this.state.accordion[1],"data-parent":"#accordion",id:"collapseTwo"},m.a.createElement(h.a,null,m.a.createElement("div",null,"Zones Completed: X"),m.a.createElement("div",null,"Pumping Hours: XX:xx"),m.a.createElement("div",null,"NPT: XX:xx"),m.a.createElement("div",null,"Reason for NPT: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."),m.a.createElement("div",null,"Equipment Issues: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.")))),m.a.createElement(p.a,{className:"mb-0"},m.a.createElement(E.a,{id:"headingThree"},m.a.createElement(g.a,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){return e.toggleAccordion(2)},"aria-expanded":this.state.accordion[2],"aria-controls":"collapseThree"},m.a.createElement("h5",{className:"m-0 p-0"},"Day 9/4/19"))),m.a.createElement(b.a,{isOpen:this.state.accordion[2],"data-parent":"#accordion",id:"collapseThree"},m.a.createElement(h.a,null,m.a.createElement("div",null,"Zones Completed: X"),m.a.createElement("div",null,"Pumping Hours: XX:xx"),m.a.createElement("div",null,"NPT: XX:xx"),m.a.createElement("div",null,"Reason for NPT: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."),m.a.createElement("div",null,"Equipment Issues: Lorem ipsum dolor sit amet,  quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. "))))))))),m.a.createElement(u.a,null,m.a.createElement(d.a,{xs:"12",sm:"6",lg:"12"},m.a.createElement(p.a,null,m.a.createElement(E.a,null,m.a.createElement("i",{className:"fa fa-align-justify"})," Fleet 2: End of Shift Reports",m.a.createElement("div",{className:"card-header-actions"})),m.a.createElement(h.a,null,m.a.createElement("div",{id:"accordion"},m.a.createElement(p.a,{className:"mb-0"},m.a.createElement(E.a,{id:"headingOne"},m.a.createElement(g.a,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){return e.toggleAccordion(0)},"aria-expanded":this.state.accordion[0],"aria-controls":"collapseOne"},m.a.createElement("h5",{className:"m-0 p-0"},"Day 9/5/19"))),m.a.createElement(b.a,{isOpen:this.state.accordion[0],"data-parent":"#accordion",id:"collapseOne","aria-labelledby":"headingOne"},m.a.createElement(h.a,null,m.a.createElement("div",null,"Zones Completed: X"),m.a.createElement("div",null,"Pumping Hours: XX:xx"),m.a.createElement("div",null,"NPT: XX:xx"),m.a.createElement("div",null,"Reason for NPT: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore atio."),m.a.createElement("div",null,"Equipment Issues: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. ")))),m.a.createElement(p.a,{className:"mb-0"},m.a.createElement(E.a,{id:"headingTwo"},m.a.createElement(g.a,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){return e.toggleAccordion(1)},"aria-expanded":this.state.accordion[1],"aria-controls":"collapseTwo"},m.a.createElement("h5",{className:"m-0 p-0"},"Night 9/4/19"))),m.a.createElement(b.a,{isOpen:this.state.accordion[1],"data-parent":"#accordion",id:"collapseTwo"},m.a.createElement(h.a,null,m.a.createElement("div",null,"Zones Completed: X"),m.a.createElement("div",null,"Pumping Hours: XX:xx"),m.a.createElement("div",null,"NPT: XX:xx"),m.a.createElement("div",null,"Reason for NPT: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."),m.a.createElement("div",null,"Equipment Issues: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.")))),m.a.createElement(p.a,{className:"mb-0"},m.a.createElement(E.a,{id:"headingThree"},m.a.createElement(g.a,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){return e.toggleAccordion(2)},"aria-expanded":this.state.accordion[2],"aria-controls":"collapseThree"},m.a.createElement("h5",{className:"m-0 p-0"},"Day 9/4/19"))),m.a.createElement(b.a,{isOpen:this.state.accordion[2],"data-parent":"#accordion",id:"collapseThree"},m.a.createElement(h.a,null,m.a.createElement("div",null,"Zones Completed: X"),m.a.createElement("div",null,"Pumping Hours: XX:xx"),m.a.createElement("div",null,"NPT: XX:xx"),m.a.createElement("div",null,"Reason for NPT: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."),m.a.createElement("div",null,"Equipment Issues: Lorem ipsum dolor sit amet,  quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. "))))))))),m.a.createElement(u.a,null,m.a.createElement(d.a,{xs:"12",sm:"6",lg:"12"},m.a.createElement(p.a,null,m.a.createElement(E.a,null,m.a.createElement("i",{className:"fa fa-align-justify"})," Fleet 3: End of Shift Reports",m.a.createElement("div",{className:"card-header-actions"})),m.a.createElement(h.a,null,m.a.createElement("div",{id:"accordion"},m.a.createElement(p.a,{className:"mb-0"},m.a.createElement(E.a,{id:"headingOne"},m.a.createElement(g.a,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){return e.toggleAccordion(0)},"aria-expanded":this.state.accordion[0],"aria-controls":"collapseOne"},m.a.createElement("h5",{className:"m-0 p-0"},"Day 9/5/19"))),m.a.createElement(b.a,{isOpen:this.state.accordion[0],"data-parent":"#accordion",id:"collapseOne","aria-labelledby":"headingOne"},m.a.createElement(h.a,null,m.a.createElement("div",null,"Zones Completed: X"),m.a.createElement("div",null,"Pumping Hours: XX:xx"),m.a.createElement("div",null,"NPT: XX:xx"),m.a.createElement("div",null,"Reason for NPT: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore atio."),m.a.createElement("div",null,"Equipment Issues: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. ")))),m.a.createElement(p.a,{className:"mb-0"},m.a.createElement(E.a,{id:"headingTwo"},m.a.createElement(g.a,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){return e.toggleAccordion(1)},"aria-expanded":this.state.accordion[1],"aria-controls":"collapseTwo"},m.a.createElement("h5",{className:"m-0 p-0"},"Night 9/4/19"))),m.a.createElement(b.a,{isOpen:this.state.accordion[1],"data-parent":"#accordion",id:"collapseTwo"},m.a.createElement(h.a,null,m.a.createElement("div",null,"Zones Completed: X"),m.a.createElement("div",null,"Pumping Hours: XX:xx"),m.a.createElement("div",null,"NPT: XX:xx"),m.a.createElement("div",null,"Reason for NPT: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."),m.a.createElement("div",null,"Equipment Issues: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.")))),m.a.createElement(p.a,{className:"mb-0"},m.a.createElement(E.a,{id:"headingThree"},m.a.createElement(g.a,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){return e.toggleAccordion(2)},"aria-expanded":this.state.accordion[2],"aria-controls":"collapseThree"},m.a.createElement("h5",{className:"m-0 p-0"},"Day 9/4/19"))),m.a.createElement(b.a,{isOpen:this.state.accordion[2],"data-parent":"#accordion",id:"collapseThree"},m.a.createElement(h.a,null,m.a.createElement("div",null,"Zones Completed: X"),m.a.createElement("div",null,"Pumping Hours: XX:xx"),m.a.createElement("div",null,"NPT: XX:xx"),m.a.createElement("div",null,"Reason for NPT: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."),m.a.createElement("div",null,"Equipment Issues: Lorem ipsum dolor sit amet,  quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. "))))))))))}}]),t}(r.Component);t.default=f}}]);
//# sourceMappingURL=23.9eaa89db.chunk.js.map