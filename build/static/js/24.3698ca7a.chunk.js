(window["webpackJsonp@coreui/coreui-free-react-admin-template"]=window["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[24],{891:function(e,a,t){"use strict";var n=t(36),i=t(100),s=t(887),o=t(63),l=t(4),r=t.n(l),c=t(111),u=t.n(c),d=t(885),m=t.n(d),p=t(886),h={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:p.h,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(s.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],s=e.block,o=e.className,l=e.close,c=e.cssModule,u=e.color,d=e.outline,h=e.size,b=e.tag,g=e.innerRef,f=Object(i.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);l&&"undefined"===typeof f.children&&(f.children=r.a.createElement("span",{"aria-hidden":!0},"\xd7"));var E="btn"+(d?"-outline":"")+"-"+u,v=Object(p.e)(m()(o,{close:l},l||"btn",l||E,!!h&&"btn-"+h,!!s&&"btn-block",{active:a,disabled:this.props.disabled}),c);f.href&&"button"===b&&(b="a");var O=l?"Close":null;return r.a.createElement(b,Object(n.a)({type:"button"===b&&f.onClick?"button":void 0},f,{className:v,ref:g,onClick:this.onClick,"aria-label":t||O}))},a}(r.a.Component);b.propTypes=h,b.defaultProps={color:"secondary",tag:"button"},a.a=b},895:function(e,a,t){"use strict";var n,i=t(36),s=t(100),o=t(887),l=t(63),r=t(890),c=t(4),u=t.n(c),d=t(111),m=t.n(d),p=t(885),h=t.n(p),b=t(892),g=t(886),f=Object(r.a)({},b.Transition.propTypes,{isOpen:m.a.bool,children:m.a.oneOfType([m.a.arrayOf(m.a.node),m.a.node]),tag:g.h,className:m.a.node,navbar:m.a.bool,cssModule:m.a.object,innerRef:m.a.oneOfType([m.a.func,m.a.string,m.a.object])}),E=Object(r.a)({},b.Transition.defaultProps,{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:g.c.Collapse}),v=((n={})[g.b.ENTERING]="collapsing",n[g.b.ENTERED]="collapse show",n[g.b.EXITING]="collapsing",n[g.b.EXITED]="collapse",n);function O(e){return e.scrollHeight}var N=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach((function(e){t[e]=t[e].bind(Object(o.a)(t))})),t}Object(l.a)(a,e);var t=a.prototype;return t.onEntering=function(e,a){this.setState({height:O(e)}),this.props.onEntering(e,a)},t.onEntered=function(e,a){this.setState({height:null}),this.props.onEntered(e,a)},t.onExit=function(e){this.setState({height:O(e)}),this.props.onExit(e)},t.onExiting=function(e){e.offsetHeight;this.setState({height:0}),this.props.onExiting(e)},t.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},t.render=function(){var e=this,a=this.props,t=a.tag,n=a.isOpen,o=a.className,l=a.navbar,c=a.cssModule,d=a.children,m=(a.innerRef,Object(s.a)(a,["tag","isOpen","className","navbar","cssModule","children","innerRef"])),p=this.state.height,f=Object(g.g)(m,g.a),E=Object(g.f)(m,g.a);return u.a.createElement(b.Transition,Object(i.a)({},f,{in:n,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(a){var n=function(e){return v[e]||"collapse"}(a),s=Object(g.e)(h()(o,n,l&&"navbar-collapse"),c),m=null===p?null:{height:p};return u.a.createElement(t,Object(i.a)({},E,{style:Object(r.a)({},E.style,m),className:s,ref:e.props.innerRef}),d)}))},a}(c.Component);N.propTypes=f,N.defaultProps=E,a.a=N},968:function(e,a,t){"use strict";t.r(a);var n=t(229),i=t(230),s=t(232),o=t(231),l=t(234),r=t(233),c=t(4),u=t.n(c),d=t(903),m=t(904),p=t(898),h=t(899),b=t(895),g=t(900),f=t(36),E=t(100),v=t(111),O=t.n(v),N=t(885),y=t.n(N),k=t(886),j={tag:k.h,className:O.a.string,cssModule:O.a.object},x=function(e){var a=e.className,t=e.cssModule,n=e.tag,i=Object(E.a)(e,["className","cssModule","tag"]),s=Object(k.e)(y()(a,"card-footer"),t);return u.a.createElement(n,Object(f.a)({},i,{className:s}))};x.propTypes=j,x.defaultProps={tag:"div"};var C=x,T=t(891),q=t(890),A=t(892),w=Object(q.a)({},A.Transition.propTypes,{children:O.a.oneOfType([O.a.arrayOf(O.a.node),O.a.node]),tag:k.h,baseClass:O.a.string,baseClassActive:O.a.string,className:O.a.string,cssModule:O.a.object,innerRef:O.a.oneOfType([O.a.object,O.a.string,O.a.func])}),S=Object(q.a)({},A.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:k.c.Fade,appear:!0,enter:!0,exit:!0,in:!0});function I(e){var a=e.tag,t=e.baseClass,n=e.baseClassActive,i=e.className,s=e.cssModule,o=e.children,l=e.innerRef,r=Object(E.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),c=Object(k.g)(r,k.a),d=Object(k.f)(r,k.a);return u.a.createElement(A.Transition,c,(function(e){var r="entered"===e,c=Object(k.e)(y()(i,t,r&&n),s);return u.a.createElement(a,Object(f.a)({className:c},d,{ref:l}),o)}))}I.propTypes=w,I.defaultProps=S;var M=I,F=t(947),R=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(s.a)(this,Object(o.a)(a).call(this,e))).onEntering=t.onEntering.bind(Object(l.a)(t)),t.onEntered=t.onEntered.bind(Object(l.a)(t)),t.onExiting=t.onExiting.bind(Object(l.a)(t)),t.onExited=t.onExited.bind(Object(l.a)(t)),t.toggle=t.toggle.bind(Object(l.a)(t)),t.toggleAccordion=t.toggleAccordion.bind(Object(l.a)(t)),t.toggleCustom=t.toggleCustom.bind(Object(l.a)(t)),t.toggleFade=t.toggleFade.bind(Object(l.a)(t)),t.state={collapse:!1,accordion:[!0,!1,!1],custom:[!0,!1],status:"Closed",fadeIn:!0,timeout:300},t}return Object(r.a)(a,e),Object(i.a)(a,[{key:"onEntering",value:function(){this.setState({status:"Opening..."})}},{key:"onEntered",value:function(){this.setState({status:"Opened"})}},{key:"onExiting",value:function(){this.setState({status:"Closing..."})}},{key:"onExited",value:function(){this.setState({status:"Closed"})}},{key:"toggle",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"toggleAccordion",value:function(e){var a=this.state.accordion.map((function(a,t){return e===t&&!a}));this.setState({accordion:a})}},{key:"toggleCustom",value:function(e){var a=this.state.custom.map((function(a,t){return e===t&&!a}));this.setState({custom:a})}},{key:"toggleFade",value:function(){this.setState({fadeIn:!this.state.fadeIn})}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(d.a,null,u.a.createElement(m.a,{xl:"6"},u.a.createElement(p.a,null,u.a.createElement(h.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"Collapse"),u.a.createElement("div",{className:"card-header-actions"},u.a.createElement("a",{href:"https://reactstrap.github.io/components/collapse/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},u.a.createElement("small",{className:"text-muted"},"docs")))),u.a.createElement(b.a,{isOpen:this.state.collapse,onEntering:this.onEntering,onEntered:this.onEntered,onExiting:this.onExiting,onExited:this.onExited},u.a.createElement(g.a,null,u.a.createElement("p",null,"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."),u.a.createElement("p",null,"Donec molestie odio id nisi malesuada, mattis tincidunt velit egestas. Sed non pulvinar risus. Aenean elementum eleifend nunc, pellentesque dapibus arcu hendrerit fringilla. Aliquam in nibh massa. Cras ultricies lorem non enim volutpat, a eleifend urna placerat. Fusce id luctus urna. In sed leo tellus. Mauris tristique leo a nisl feugiat, eget vehicula leo venenatis. Quisque magna metus, luctus quis sollicitudin vel, vehicula nec ipsum. Donec rutrum commodo lacus ut condimentum. Integer vel turpis purus. Etiam vehicula, nulla non fringilla blandit, massa purus faucibus tellus, a luctus enim orci non augue. Aenean ullamcorper nisl urna, non feugiat tortor volutpat in. Vivamus lobortis massa dolor, eget faucibus ipsum varius eget. Pellentesque imperdiet, turpis sed sagittis lobortis, leo elit laoreet arcu, vehicula sagittis elit leo id nisi."))),u.a.createElement(C,null,u.a.createElement(T.a,{color:"primary",onClick:this.toggle,className:"mb-1",id:"toggleCollapse1"},"Toggle"),u.a.createElement("hr",null),u.a.createElement("h5",null,"Current state: ",this.state.status))),u.a.createElement(p.a,null,u.a.createElement(h.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"Fade"),u.a.createElement("div",{className:"card-header-actions"},u.a.createElement("a",{href:"https://reactstrap.github.io/components/fade/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},u.a.createElement("small",{className:"text-muted"},"docs")))),u.a.createElement(g.a,null,u.a.createElement(M,{timeout:this.state.timeout,in:this.state.fadeIn,tag:"h5",className:"mt-3"},"This content will fade in and out as the button is pressed...")),u.a.createElement(C,null,u.a.createElement(T.a,{color:"primary",onClick:this.toggleFade,id:"toggleFade1"},"Toggle Fade")))),u.a.createElement(m.a,{xl:"6"},u.a.createElement(p.a,null,u.a.createElement(h.a,null,u.a.createElement("i",{className:"fa fa-align-justify"})," Collapse ",u.a.createElement("small",null,"accordion"),u.a.createElement("div",{className:"card-header-actions"},u.a.createElement(F.a,null,"NEW"))),u.a.createElement(g.a,null,u.a.createElement("div",{id:"accordion"},u.a.createElement(p.a,{className:"mb-0"},u.a.createElement(h.a,{id:"headingOne"},u.a.createElement(T.a,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){return e.toggleAccordion(0)},"aria-expanded":this.state.accordion[0],"aria-controls":"collapseOne"},u.a.createElement("h5",{className:"m-0 p-0"},"Collapsible Group Item #1"))),u.a.createElement(b.a,{isOpen:this.state.accordion[0],"data-parent":"#accordion",id:"collapseOne","aria-labelledby":"headingOne"},u.a.createElement(g.a,null,"1. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."))),u.a.createElement(p.a,{className:"mb-0"},u.a.createElement(h.a,{id:"headingTwo"},u.a.createElement(T.a,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){return e.toggleAccordion(1)},"aria-expanded":this.state.accordion[1],"aria-controls":"collapseTwo"},u.a.createElement("h5",{className:"m-0 p-0"},"Collapsible Group Item #2"))),u.a.createElement(b.a,{isOpen:this.state.accordion[1],"data-parent":"#accordion",id:"collapseTwo"},u.a.createElement(g.a,null,"2. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."))),u.a.createElement(p.a,{className:"mb-0"},u.a.createElement(h.a,{id:"headingThree"},u.a.createElement(T.a,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){return e.toggleAccordion(2)},"aria-expanded":this.state.accordion[2],"aria-controls":"collapseThree"},u.a.createElement("h5",{className:"m-0 p-0"},"Collapsible Group Item #3"))),u.a.createElement(b.a,{isOpen:this.state.accordion[2],"data-parent":"#accordion",id:"collapseThree"},u.a.createElement(g.a,null,"3. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.")))))),u.a.createElement(p.a,null,u.a.createElement(h.a,null,u.a.createElement("i",{className:"fa fa-align-justify"})," Collapse ",u.a.createElement("small",null,"custom accordion"),u.a.createElement("div",{className:"card-header-actions"},u.a.createElement(F.a,null,"NEW"))),u.a.createElement(g.a,null,u.a.createElement("div",{id:"exampleAccordion","data-children":".item"},u.a.createElement("div",{className:"item"},u.a.createElement(T.a,{className:"m-0 p-0",color:"link",onClick:function(){return e.toggleCustom(0)},"aria-expanded":this.state.custom[0],"aria-controls":"exampleAccordion1"},"Toggle item"),u.a.createElement(b.a,{isOpen:this.state.custom[0],"data-parent":"#exampleAccordion",id:"exampleAccordion1"},u.a.createElement("p",{className:"mb-3"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium lorem non vestibulum scelerisque. Proin a vestibulum sem, eget tristique massa. Aliquam lacinia rhoncus nibh quis ornare."))),u.a.createElement("div",{className:"item"},u.a.createElement(T.a,{className:"m-0 p-0",color:"link",onClick:function(){return e.toggleCustom(1)},"aria-expanded":this.state.custom[1],"aria-controls":"exampleAccordion2"},"Toggle item 2"),u.a.createElement(b.a,{isOpen:this.state.custom[1],"data-parent":"#exampleAccordion",id:"exampleAccordion2"},u.a.createElement("p",{className:"mb-3"},"Donec at ipsum dignissim, rutrum turpis scelerisque, tristique lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus nec dui turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.")))))))))}}]),a}(c.Component);a.default=R}}]);
//# sourceMappingURL=24.3698ca7a.chunk.js.map