(window["webpackJsonp@coreui/coreui-free-react-admin-template"]=window["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[17],{888:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},890:function(e,a,t){"use strict";var r=t(36),s=t(100),n=t(4),o=t.n(n),i=t(111),l=t.n(i),c=t(885),d=t.n(c),u=t(886),m={className:l.a.string,cssModule:l.a.object,size:l.a.string,bordered:l.a.bool,borderless:l.a.bool,striped:l.a.bool,dark:l.a.bool,hover:l.a.bool,responsive:l.a.oneOfType([l.a.bool,l.a.string]),tag:u.h,responsiveTag:u.h,innerRef:l.a.oneOfType([l.a.func,l.a.string,l.a.object])},g=function(e){var a=e.className,t=e.cssModule,n=e.size,i=e.bordered,l=e.borderless,c=e.striped,m=e.dark,g=e.hover,p=e.responsive,b=e.tag,f=e.responsiveTag,v=e.innerRef,h=Object(s.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),E=Object(u.e)(d()(a,"table",!!n&&"table-"+n,!!i&&"table-bordered",!!l&&"table-borderless",!!c&&"table-striped",!!m&&"table-dark",!!g&&"table-hover"),t),O=o.a.createElement(b,Object(r.a)({},h,{ref:v,className:E}));if(p){var j=Object(u.e)(!0===p?"table-responsive":"table-responsive-"+p,t);return o.a.createElement(f,{className:j},O)}return O};g.propTypes=m,g.defaultProps={tag:"table",responsiveTag:"div"},a.a=g},891:function(e,a,t){"use strict";var r=t(36),s=t(100),n=t(4),o=t.n(n),i=t(111),l=t.n(i),c=t(885),d=t.n(c),u=t(886),m={tag:u.h,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool},g=function(e){var a=e.className,t=e.cssModule,n=e.noGutters,i=e.tag,l=e.form,c=Object(s.a)(e,["className","cssModule","noGutters","tag","form"]),m=Object(u.e)(d()(a,n?"no-gutters":null,l?"form-row":"row"),t);return o.a.createElement(i,Object(r.a)({},c,{className:m}))};g.propTypes=m,g.defaultProps={tag:"div"},a.a=g},892:function(e,a,t){"use strict";var r=t(36),s=t(100),n=t(888),o=t.n(n),i=t(4),l=t.n(i),c=t(111),d=t.n(c),u=t(885),m=t.n(u),g=t(886),p=d.a.oneOfType([d.a.number,d.a.string]),b=d.a.oneOfType([d.a.bool,d.a.number,d.a.string,d.a.shape({size:d.a.oneOfType([d.a.bool,d.a.number,d.a.string]),order:p,offset:p})]),f={tag:g.h,xs:b,sm:b,md:b,lg:b,xl:b,className:d.a.string,cssModule:d.a.object,widths:d.a.array},v={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,n=e.widths,i=e.tag,c=Object(s.a)(e,["className","cssModule","widths","tag"]),d=[];n.forEach((function(a,r){var s=e[a];if(delete c[a],s||""===s){var n=!r;if(o()(s)){var i,l=n?"-":"-"+a+"-",u=h(n,a,s.size);d.push(Object(g.e)(m()(((i={})[u]=s.size||""===s.size,i["order"+l+s.order]=s.order||0===s.order,i["offset"+l+s.offset]=s.offset||0===s.offset,i)),t))}else{var p=h(n,a,s);d.push(p)}}})),d.length||d.push("col");var u=Object(g.e)(m()(a,d),t);return l.a.createElement(i,Object(r.a)({},c,{className:u}))};E.propTypes=f,E.defaultProps=v,a.a=E},893:function(e,a,t){"use strict";var r=t(36),s=t(100),n=t(4),o=t.n(n),i=t(111),l=t.n(i),c=t(885),d=t.n(c),u=t(886),m={tag:u.h,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},g=function(e){var a=e.className,t=e.cssModule,n=e.color,i=e.body,l=e.inverse,c=e.outline,m=e.tag,g=e.innerRef,p=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(u.e)(d()(a,"card",!!l&&"text-white",!!i&&"card-body",!!n&&(c?"border":"bg")+"-"+n),t);return o.a.createElement(m,Object(r.a)({},p,{className:b,ref:g}))};g.propTypes=m,g.defaultProps={tag:"div"},a.a=g},894:function(e,a,t){"use strict";var r=t(36),s=t(100),n=t(4),o=t.n(n),i=t(111),l=t.n(i),c=t(885),d=t.n(c),u=t(886),m={tag:u.h,className:l.a.string,cssModule:l.a.object},g=function(e){var a=e.className,t=e.cssModule,n=e.tag,i=Object(s.a)(e,["className","cssModule","tag"]),l=Object(u.e)(d()(a,"card-header"),t);return o.a.createElement(n,Object(r.a)({},i,{className:l}))};g.propTypes=m,g.defaultProps={tag:"div"},a.a=g},895:function(e,a,t){"use strict";var r=t(36),s=t(100),n=t(4),o=t.n(n),i=t(111),l=t.n(i),c=t(885),d=t.n(c),u=t(886),m={tag:u.h,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},g=function(e){var a=e.className,t=e.cssModule,n=e.innerRef,i=e.tag,l=Object(s.a)(e,["className","cssModule","innerRef","tag"]),c=Object(u.e)(d()(a,"card-body"),t);return o.a.createElement(i,Object(r.a)({},l,{className:c,ref:n}))};g.propTypes=m,g.defaultProps={tag:"div"},a.a=g},913:function(e,a,t){"use strict";a.a=[{id:0,name:"Johnsdfsdfsdfds Doe",registered:"2018/01/01",role:"EO",status:"Pending"},{id:1,name:"Samppa Nori",registered:"2018/01/01",role:"Supervisor",status:"Active"},{id:2,name:"Estavan Lykos",registered:"2018/02/01",role:"Field Supervisor",status:"Banned"},{id:3,name:"Chetan Mohamed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:4,name:"Derick Maximinus",registered:"2018/03/01",role:"Supervisor",status:"Pending"},{id:5,name:"Friderik D\xe1vid",registered:"2018/01/21",role:"Field Supervisor",status:"Active"},{id:6,name:"Yiorgos Avraamu",registered:"2018/01/01",role:"Supervisor",status:"Active"},{id:7,name:"Avram Tarasios",registered:"2018/02/01",role:"Field Supervisor",status:"Banned"},{id:8,name:"Quintin Ed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:9,name:"En\xe9as Kwadwo",registered:"2018/03/01",role:"Supervisor",status:"Pending"},{id:10,name:"Agapetus Tade\xe1\u0161",registered:"2018/01/21",role:"Field Supervisor",status:"Active"},{id:11,name:"Carwyn Fachtna",registered:"2018/01/01",role:"EO",status:"Active"},{id:12,name:"Nehemiah Tatius",registered:"2018/02/01",role:"Field Supervisor",status:"Banned"},{id:13,name:"Ebbe Gemariah",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:14,name:"Eustorgios Amulius",registered:"2018/03/01",role:"EO",status:"Pending"},{id:15,name:"Leopold G\xe1sp\xe1r",registered:"2018/01/21",role:"Field Supervisor",status:"Active"},{id:16,name:"Pompeius Ren\xe9",registered:"2018/01/01",role:"EO",status:"Active"},{id:17,name:"Pa\u0109jo Jadon",registered:"2018/02/01",role:"Field Supervisor",status:"Banned"},{id:18,name:"Micheal Mercurius",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:19,name:"Ganesha Dubhghall",registered:"2018/03/01",role:"EO",status:"Pending"},{id:20,name:"Hiroto \u0160imun",registered:"2018/01/21",role:"Field Supervisor",status:"Active"},{id:21,name:"Vishnu Serghei",registered:"2018/01/01",role:"EO",status:"Active"},{id:22,name:"Zbyn\u011bk Phoibos",registered:"2018/02/01",role:"Field Supervisor",status:"Banned"},{id:23,name:"Einar Randall",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:24,name:"F\xe9lix Troels",registered:"2018/03/21",role:"Field Supervisor",status:"Active"},{id:25,name:"Aulus Agmundr",registered:"2018/01/01",role:"EO",status:"Pending"},{id:42,name:"Ford Prefex",registered:"2001/05/21",role:"Alien",status:"Don't panic!"}]},958:function(e,a,t){"use strict";t.r(a);var r=t(229),s=t(230),n=t(233),o=t(231),i=t(232),l=t(4),c=t.n(l),d=t(235),u=t(948),m=t(891),g=t(892),p=t(893),b=t(894),f=t(895),v=t(890),h=t(913);function E(e){var a,t=e.Tractor,r="/Tractors/".concat(t.id);return c.a.createElement("tr",{key:t.id.toString()},c.a.createElement("th",{scope:"row"},c.a.createElement(d.Link,{to:r},t.id)),c.a.createElement("td",null,c.a.createElement(d.Link,{to:r},t.name)),c.a.createElement("td",null,t.registered),c.a.createElement("td",null,t.role),c.a.createElement("td",null,c.a.createElement(d.Link,{to:r},c.a.createElement(u.a,{color:(a=t.status,"Active"===a?"success":"Inactive"===a?"secondary":"Pending"===a?"warning":"Banned"===a?"danger":"primary")},t.status))))}var O=function(e){function a(){return Object(r.a)(this,a),Object(n.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=h.a.filter((function(e){return e.id<10}));return c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement(m.a,null,c.a.createElement(g.a,{xl:6},c.a.createElement(p.a,null,c.a.createElement(b.a,null,c.a.createElement("i",{className:"fa fa-align-justify"})," Tractors ",c.a.createElement("small",{className:"text-muted"},"example")),c.a.createElement(f.a,null,c.a.createElement(v.a,{responsive:!0,hover:!0},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"id"),c.a.createElement("th",{scope:"col"},"name"),c.a.createElement("th",{scope:"col"},"registered"),c.a.createElement("th",{scope:"col"},"role"),c.a.createElement("th",{scope:"col"},"status"))),c.a.createElement("tbody",null,e.map((function(e,a){return c.a.createElement(E,{key:a,Tractor:e})})))))))))}}]),a}(l.Component);a.default=O}}]);
//# sourceMappingURL=17.56f4e2f9.chunk.js.map