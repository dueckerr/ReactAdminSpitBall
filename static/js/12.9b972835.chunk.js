(window["webpackJsonp@coreui/coreui-free-react-admin-template"]=window["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[12],{888:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},890:function(e,a,t){"use strict";var r=t(36),s=t(100),n=t(4),i=t.n(n),o=t(111),l=t.n(o),c=t(885),d=t.n(c),u=t(886),m={className:l.a.string,cssModule:l.a.object,size:l.a.string,bordered:l.a.bool,borderless:l.a.bool,striped:l.a.bool,dark:l.a.bool,hover:l.a.bool,responsive:l.a.oneOfType([l.a.bool,l.a.string]),tag:u.h,responsiveTag:u.h,innerRef:l.a.oneOfType([l.a.func,l.a.string,l.a.object])},p=function(e){var a=e.className,t=e.cssModule,n=e.size,o=e.bordered,l=e.borderless,c=e.striped,m=e.dark,p=e.hover,g=e.responsive,f=e.tag,b=e.responsiveTag,v=e.innerRef,h=Object(s.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),O=Object(u.e)(d()(a,"table",!!n&&"table-"+n,!!o&&"table-bordered",!!l&&"table-borderless",!!c&&"table-striped",!!m&&"table-dark",!!p&&"table-hover"),t),j=i.a.createElement(f,Object(r.a)({},h,{ref:v,className:O}));if(g){var E=Object(u.e)(!0===g?"table-responsive":"table-responsive-"+g,t);return i.a.createElement(b,{className:E},j)}return j};p.propTypes=m,p.defaultProps={tag:"table",responsiveTag:"div"},a.a=p},891:function(e,a,t){"use strict";var r=t(36),s=t(100),n=t(4),i=t.n(n),o=t(111),l=t.n(o),c=t(885),d=t.n(c),u=t(886),m={tag:u.h,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool},p=function(e){var a=e.className,t=e.cssModule,n=e.noGutters,o=e.tag,l=e.form,c=Object(s.a)(e,["className","cssModule","noGutters","tag","form"]),m=Object(u.e)(d()(a,n?"no-gutters":null,l?"form-row":"row"),t);return i.a.createElement(o,Object(r.a)({},c,{className:m}))};p.propTypes=m,p.defaultProps={tag:"div"},a.a=p},892:function(e,a,t){"use strict";var r=t(36),s=t(100),n=t(888),i=t.n(n),o=t(4),l=t.n(o),c=t(111),d=t.n(c),u=t(885),m=t.n(u),p=t(886),g=d.a.oneOfType([d.a.number,d.a.string]),f=d.a.oneOfType([d.a.bool,d.a.number,d.a.string,d.a.shape({size:d.a.oneOfType([d.a.bool,d.a.number,d.a.string]),order:g,offset:g})]),b={tag:p.h,xs:f,sm:f,md:f,lg:f,xl:f,className:d.a.string,cssModule:d.a.object,widths:d.a.array},v={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},O=function(e){var a=e.className,t=e.cssModule,n=e.widths,o=e.tag,c=Object(s.a)(e,["className","cssModule","widths","tag"]),d=[];n.forEach((function(a,r){var s=e[a];if(delete c[a],s||""===s){var n=!r;if(i()(s)){var o,l=n?"-":"-"+a+"-",u=h(n,a,s.size);d.push(Object(p.e)(m()(((o={})[u]=s.size||""===s.size,o["order"+l+s.order]=s.order||0===s.order,o["offset"+l+s.offset]=s.offset||0===s.offset,o)),t))}else{var g=h(n,a,s);d.push(g)}}})),d.length||d.push("col");var u=Object(p.e)(m()(a,d),t);return l.a.createElement(o,Object(r.a)({},c,{className:u}))};O.propTypes=b,O.defaultProps=v,a.a=O},893:function(e,a,t){"use strict";var r=t(36),s=t(100),n=t(4),i=t.n(n),o=t(111),l=t.n(o),c=t(885),d=t.n(c),u=t(886),m={tag:u.h,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},p=function(e){var a=e.className,t=e.cssModule,n=e.color,o=e.body,l=e.inverse,c=e.outline,m=e.tag,p=e.innerRef,g=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),f=Object(u.e)(d()(a,"card",!!l&&"text-white",!!o&&"card-body",!!n&&(c?"border":"bg")+"-"+n),t);return i.a.createElement(m,Object(r.a)({},g,{className:f,ref:p}))};p.propTypes=m,p.defaultProps={tag:"div"},a.a=p},894:function(e,a,t){"use strict";var r=t(36),s=t(100),n=t(4),i=t.n(n),o=t(111),l=t.n(o),c=t(885),d=t.n(c),u=t(886),m={tag:u.h,className:l.a.string,cssModule:l.a.object},p=function(e){var a=e.className,t=e.cssModule,n=e.tag,o=Object(s.a)(e,["className","cssModule","tag"]),l=Object(u.e)(d()(a,"card-header"),t);return i.a.createElement(n,Object(r.a)({},o,{className:l}))};p.propTypes=m,p.defaultProps={tag:"div"},a.a=p},895:function(e,a,t){"use strict";var r=t(36),s=t(100),n=t(4),i=t.n(n),o=t(111),l=t.n(o),c=t(885),d=t.n(c),u=t(886),m={tag:u.h,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},p=function(e){var a=e.className,t=e.cssModule,n=e.innerRef,o=e.tag,l=Object(s.a)(e,["className","cssModule","innerRef","tag"]),c=Object(u.e)(d()(a,"card-body"),t);return i.a.createElement(o,Object(r.a)({},l,{className:c,ref:n}))};p.propTypes=m,p.defaultProps={tag:"div"},a.a=p},897:function(e,a,t){"use strict";function r(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var t=[],r=!0,s=!1,n=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done)&&(t.push(i.value),!a||t.length!==a);r=!0);}catch(l){s=!0,n=l}finally{try{r||null==o.return||o.return()}finally{if(s)throw n}}return t}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.d(a,"a",(function(){return r}))},915:function(e,a,t){"use strict";a.a=[{id:0,name:"John Doe",registered:"2018/01/01",role:"EO",status:"Pending"},{id:1,name:"Samppa Nori",registered:"2018/01/01",role:"Supervisor",status:"Active"},{id:2,name:"Estavan Lykos",registered:"2018/02/01",role:"Field Supervisor",status:"Banned"},{id:3,name:"Chetan Mohamed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:4,name:"Derick Maximinus",registered:"2018/03/01",role:"Supervisor",status:"Pending"},{id:5,name:"Friderik D\xe1vid",registered:"2018/01/21",role:"Field Supervisor",status:"Active"},{id:6,name:"Yiorgos Avraamu",registered:"2018/01/01",role:"Supervisor",status:"Active"},{id:7,name:"Avram Tarasios",registered:"2018/02/01",role:"Field Supervisor",status:"Banned"},{id:8,name:"Quintin Ed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:9,name:"En\xe9as Kwadwo",registered:"2018/03/01",role:"Supervisor",status:"Pending"},{id:10,name:"Agapetus Tade\xe1\u0161",registered:"2018/01/21",role:"Field Supervisor",status:"Active"},{id:11,name:"Carwyn Fachtna",registered:"2018/01/01",role:"EO",status:"Active"},{id:12,name:"Nehemiah Tatius",registered:"2018/02/01",role:"Field Supervisor",status:"Banned"},{id:13,name:"Ebbe Gemariah",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:14,name:"Eustorgios Amulius",registered:"2018/03/01",role:"EO",status:"Pending"},{id:15,name:"Leopold G\xe1sp\xe1r",registered:"2018/01/21",role:"Field Supervisor",status:"Active"},{id:16,name:"Pompeius Ren\xe9",registered:"2018/01/01",role:"EO",status:"Active"},{id:17,name:"Pa\u0109jo Jadon",registered:"2018/02/01",role:"Field Supervisor",status:"Banned"},{id:18,name:"Micheal Mercurius",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:19,name:"Ganesha Dubhghall",registered:"2018/03/01",role:"EO",status:"Pending"},{id:20,name:"Hiroto \u0160imun",registered:"2018/01/21",role:"Field Supervisor",status:"Active"},{id:21,name:"Vishnu Serghei",registered:"2018/01/01",role:"EO",status:"Active"},{id:22,name:"Zbyn\u011bk Phoibos",registered:"2018/02/01",role:"Field Supervisor",status:"Banned"},{id:23,name:"Einar Randall",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:24,name:"F\xe9lix Troels",registered:"2018/03/21",role:"Field Supervisor",status:"Active"},{id:25,name:"Aulus Agmundr",registered:"2018/01/01",role:"EO",status:"Pending"},{id:42,name:"Ford Prefex",registered:"2001/05/21",role:"Alien",status:"Don't panic!"}]},963:function(e,a,t){"use strict";t.r(a);var r=t(897),s=t(229),n=t(230),i=t(233),o=t(231),l=t(232),c=t(4),d=t.n(c),u=t(891),m=t(892),p=t(893),g=t(894),f=t(895),b=t(890),v=t(915),h=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(l.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this,a=v.a.find((function(a){return a.id.toString()===e.props.match.params.id})),t=a?Object.entries(a):[["id",d.a.createElement("span",null,d.a.createElement("i",{className:"text-muted icon-ban"})," Not found")]];return d.a.createElement("div",{className:"animated fadeIn"},d.a.createElement(u.a,null,d.a.createElement(m.a,{lg:6},d.a.createElement(p.a,null,d.a.createElement(g.a,null,d.a.createElement("strong",null,d.a.createElement("i",{className:"icon-info pr-1"}),"User id: ",this.props.match.params.id)),d.a.createElement(f.a,null,d.a.createElement(b.a,{responsive:!0,striped:!0,hover:!0},d.a.createElement("tbody",null,t.map((function(e){var a=Object(r.a)(e,2),t=a[0],s=a[1];return d.a.createElement("tr",{key:t},d.a.createElement("td",null,"".concat(t,":")),d.a.createElement("td",null,d.a.createElement("strong",null,s)))})))))))))}}]),a}(c.Component);a.default=h}}]);
//# sourceMappingURL=12.9b972835.chunk.js.map