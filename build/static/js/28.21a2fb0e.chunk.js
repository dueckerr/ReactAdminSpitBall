(window["webpackJsonp@coreui/coreui-free-react-admin-template"]=window["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[28],{1145:function(e,a,t){"use strict";t.r(a);var r=t(227),n=t(228),o=t(231),l=t(229),s=t(230),c=t(3),i=t.n(c),u=t(233),d=t(889),f=t(890),m=t(892),p=t(894),b=t(893),g=t(906),v=[{id:0,engine:"CAT",Fluidend:"Kerr",fluidendSize:"Q",currentHours:"123",location:"Fleet"},{id:1,engine:"CAT",Fluidend:"Kerr",fluidendSize:"Q",currentHours:"123",location:"Fleet"},{id:2,engine:"CAT",Fluidend:"Kerr",fluidendSize:"Q",currentHours:"123",location:"Fleet"},{id:3,engine:"CAT",Fluidend:"Kerr",fluidendSize:"Q",currentHours:"123",location:"Fleet"},{id:4,engine:"CAT",Fluidend:"Kerr",fluidendSize:"Q",currentHours:"123",location:"Fleet"},{id:5,engine:"CAT",Fluidend:"Kerr",fluidendSize:"Q",currentHours:"123",location:"Fleet"},{id:6,engine:"CAT",Fluidend:"Kerr",fluidendSize:"Q",currentHours:"123",location:"Fleet"},{id:7,engine:"CAT",Fluidend:"Kerr",fluidendSize:"Q",currentHours:"123",location:"Fleet"},{id:8,engine:"CAT",Fluidend:"Kerr",fluidendSize:"Q",currentHours:"123",location:"Fleet"},{id:9,engine:"CAT",Fluidend:"Kerr",fluidendSize:"Q",currentHours:"123",location:"Fleet"},{id:10,engine:"CAT",Fluidend:"Kerr",fluidendSize:"Q",currentHours:"123",location:"Fleet"}];function E(e){var a=e.user,t="/Fracpump/".concat(a.id);return i.a.createElement("tr",{key:a.id.toString()},i.a.createElement("th",{scope:"row"},i.a.createElement(u.Link,{to:t},a.id)),i.a.createElement("td",null,a.engine),i.a.createElement("td",null,a.Fluidend),i.a.createElement("td",null,a.fluidendSize),i.a.createElement("td",null,a.currentHours),i.a.createElement("td",null,a.location))}var j=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=v.filter((function(e){return e.id<10}));return i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(d.a,null,i.a.createElement(f.a,{xl:6},i.a.createElement(m.a,null,i.a.createElement(p.a,null,i.a.createElement("i",{className:"fa fa-align-justify"})," Frac Pumps"),i.a.createElement(b.a,null,i.a.createElement(g.a,{responsive:!0,hover:!0},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{scope:"col"},"Pump Number"),i.a.createElement("th",{scope:"col"},"Engine"),i.a.createElement("th",{scope:"col"},"FE Type"),i.a.createElement("th",{scope:"col"},"FE Size"),i.a.createElement("th",{scope:"col"},"Current Hours"),i.a.createElement("th",{scope:"col"},"Location"))),i.a.createElement("tbody",null,e.map((function(e,a){return i.a.createElement(E,{key:a,user:e})})))))))))}}]),a}(c.Component);a.default=j},886:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},889:function(e,a,t){"use strict";var r=t(35),n=t(100),o=t(3),l=t.n(o),s=t(112),c=t.n(s),i=t(884),u=t.n(i),d=t(885),f={tag:d.p,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool},m=function(e){var a=e.className,t=e.cssModule,o=e.noGutters,s=e.tag,c=e.form,i=Object(n.a)(e,["className","cssModule","noGutters","tag","form"]),f=Object(d.l)(u()(a,o?"no-gutters":null,c?"form-row":"row"),t);return l.a.createElement(s,Object(r.a)({},i,{className:f}))};m.propTypes=f,m.defaultProps={tag:"div"},a.a=m},890:function(e,a,t){"use strict";var r=t(35),n=t(100),o=t(886),l=t.n(o),s=t(3),c=t.n(s),i=t(112),u=t.n(i),d=t(884),f=t.n(d),m=t(885),p=u.a.oneOfType([u.a.number,u.a.string]),b=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),order:p,offset:p})]),g={tag:m.p,xs:b,sm:b,md:b,lg:b,xl:b,className:u.a.string,cssModule:u.a.object,widths:u.a.array},v={tag:"div",widths:["xs","sm","md","lg","xl"]},E=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},j=function(e){var a=e.className,t=e.cssModule,o=e.widths,s=e.tag,i=Object(n.a)(e,["className","cssModule","widths","tag"]),u=[];o.forEach((function(a,r){var n=e[a];if(delete i[a],n||""===n){var o=!r;if(l()(n)){var s,c=o?"-":"-"+a+"-",d=E(o,a,n.size);u.push(Object(m.l)(f()(((s={})[d]=n.size||""===n.size,s["order"+c+n.order]=n.order||0===n.order,s["offset"+c+n.offset]=n.offset||0===n.offset,s)),t))}else{var p=E(o,a,n);u.push(p)}}})),u.length||u.push("col");var d=Object(m.l)(f()(a,u),t);return c.a.createElement(s,Object(r.a)({},i,{className:d}))};j.propTypes=g,j.defaultProps=v,a.a=j},892:function(e,a,t){"use strict";var r=t(35),n=t(100),o=t(3),l=t.n(o),s=t(112),c=t.n(s),i=t(884),u=t.n(i),d=t(885),f={tag:d.p,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},m=function(e){var a=e.className,t=e.cssModule,o=e.color,s=e.body,c=e.inverse,i=e.outline,f=e.tag,m=e.innerRef,p=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(d.l)(u()(a,"card",!!c&&"text-white",!!s&&"card-body",!!o&&(i?"border":"bg")+"-"+o),t);return l.a.createElement(f,Object(r.a)({},p,{className:b,ref:m}))};m.propTypes=f,m.defaultProps={tag:"div"},a.a=m},893:function(e,a,t){"use strict";var r=t(35),n=t(100),o=t(3),l=t.n(o),s=t(112),c=t.n(s),i=t(884),u=t.n(i),d=t(885),f={tag:d.p,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},m=function(e){var a=e.className,t=e.cssModule,o=e.innerRef,s=e.tag,c=Object(n.a)(e,["className","cssModule","innerRef","tag"]),i=Object(d.l)(u()(a,"card-body"),t);return l.a.createElement(s,Object(r.a)({},c,{className:i,ref:o}))};m.propTypes=f,m.defaultProps={tag:"div"},a.a=m},894:function(e,a,t){"use strict";var r=t(35),n=t(100),o=t(3),l=t.n(o),s=t(112),c=t.n(s),i=t(884),u=t.n(i),d=t(885),f={tag:d.p,className:c.a.string,cssModule:c.a.object},m=function(e){var a=e.className,t=e.cssModule,o=e.tag,s=Object(n.a)(e,["className","cssModule","tag"]),c=Object(d.l)(u()(a,"card-header"),t);return l.a.createElement(o,Object(r.a)({},s,{className:c}))};m.propTypes=f,m.defaultProps={tag:"div"},a.a=m},906:function(e,a,t){"use strict";var r=t(35),n=t(100),o=t(3),l=t.n(o),s=t(112),c=t.n(s),i=t(884),u=t.n(i),d=t(885),f={className:c.a.string,cssModule:c.a.object,size:c.a.string,bordered:c.a.bool,borderless:c.a.bool,striped:c.a.bool,dark:c.a.bool,hover:c.a.bool,responsive:c.a.oneOfType([c.a.bool,c.a.string]),tag:d.p,responsiveTag:d.p,innerRef:c.a.oneOfType([c.a.func,c.a.string,c.a.object])},m=function(e){var a=e.className,t=e.cssModule,o=e.size,s=e.bordered,c=e.borderless,i=e.striped,f=e.dark,m=e.hover,p=e.responsive,b=e.tag,g=e.responsiveTag,v=e.innerRef,E=Object(n.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),j=Object(d.l)(u()(a,"table",!!o&&"table-"+o,!!s&&"table-bordered",!!c&&"table-borderless",!!i&&"table-striped",!!f&&"table-dark",!!m&&"table-hover"),t),O=l.a.createElement(b,Object(r.a)({},E,{ref:v,className:j}));if(p){var h=Object(d.l)(!0===p?"table-responsive":"table-responsive-"+p,t);return l.a.createElement(g,{className:h},O)}return O};m.propTypes=f,m.defaultProps={tag:"table",responsiveTag:"div"},a.a=m}}]);
//# sourceMappingURL=28.21a2fb0e.chunk.js.map