(this["webpackJsonprecipe-loft"]=this["webpackJsonprecipe-loft"]||[]).push([[0],{43:function(e,t,c){},50:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(17),s=c.n(r),i=(c(43),c(10)),l=c(12),o=(c(50),c(3)),j=c(18),d=c.p+"static/media/loading.ca2aa7b4.svg",b=c(11),u=c.n(b),p=c(16),h=c(35),O=c(36),f=c(37),x=c.n(f);console.log("baseurl","https://jooble.org/api");var m=x.a.create({baseURL:"https://jooble.org/api",headers:{"Access-Control-Allow-Origin":"*"}}),g=new(function(){function e(){Object(h.a)(this,e)}return Object(O.a)(e,[{key:"getJobs",value:function(){var e=Object(p.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get("/positions.json");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getJobs2",value:function(){var e=Object(p.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.post("/".concat("89548c88-f627-4819-b925-952ce0185833"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}()),v="GET_JOBS_REQUEST",y="GET_JOBS_PROCESSED",N="GET_JOBS_ERROR",T="FILTER_JOB_TYPES",w=function(e){return{type:y,payload:e}},J=c(1),R=["Full Time","Part Time","Contract","Internship"],S=function(e){var t=e.handleFilterChange;return Object(J.jsx)("div",{"data-test":"jobFilter",children:Object(J.jsxs)("select",{name:"jobType",id:"jobType",onChange:function(e){var c=e.target.value;t(c)},"data-test":"jobType",children:[Object(J.jsx)("option",{value:"",children:"Select a Job Type"}),R.map((function(e){return Object(J.jsx)("option",{value:e,children:e},e)}))]})})},C=function(e){var t=new Date(e),c=((new Date).getTime()-t.getTime())/864e5;return Math.floor(c)},E=function(e){return 0===e?"Today":1===e?"Yesterday":"".concat(e,"d")},_=function(e){var t=e.jobs,c=e.error,a=e.pending,r=e.filter,s=e.handleFilterChange,i=Object(n.useState)(t),o=Object(j.a)(i,2),b=o[0],u=o[1];return Object(n.useEffect)((function(){var e=r?t.filter((function(e){return e.type===r})):t;u(e)}),[t,r]),Object(J.jsxs)("section",{id:"job-list",className:"container",children:[Object(J.jsxs)("div",{className:"d-flex align-center lead-container m-1",children:[Object(J.jsx)("h3",{children:"Job List"}),Object(J.jsx)(S,{handleFilterChange:function(e){s(e)}})]}),Object(J.jsxs)("div",{children:[a&&Object(J.jsx)("img",{className:"center",src:d,alt:"loader"}),!a&&c&&Object(J.jsx)("h3",{children:c}),!a&&!c&&b.map((function(e){return Object(J.jsx)(l.b,{to:"job/".concat(e.id),children:Object(J.jsxs)("div",{className:"card-container d-grid",children:[Object(J.jsxs)("div",{className:"job-details d-grid",children:[Object(J.jsx)("div",{className:"company-logo",children:Object(J.jsx)("img",{src:e.company_logo,alt:"logo"})}),Object(J.jsxs)("div",{className:"company-info",children:[Object(J.jsx)("p",{className:"job-title",children:e.title}),Object(J.jsx)("p",{className:"company-name",children:e.company}),Object(J.jsx)("p",{className:"location capsule",children:e.location})]})]}),Object(J.jsxs)("div",{className:"tags d-flex",children:[Object(J.jsx)("p",{className:"capsule",children:"Javascript"}),Object(J.jsx)("p",{className:"capsule",children:"React"}),Object(J.jsx)("p",{className:"capsule",children:"C#"}),Object(J.jsx)("p",{className:"capsule",children:"Rails"}),Object(J.jsx)("p",{className:"capsule",children:"SQL"})]}),Object(J.jsxs)("div",{className:"d-flex last-details",children:[Object(J.jsx)("p",{className:"job-tag capsule",children:"Software Development"}),Object(J.jsx)("p",{className:"created-at",children:(t=e.created_at,"".concat(E(C(t))))})]})]})},e.id);var t}))]})]})};_.defaultProps={error:null};var k=Object(i.b)((function(e){return{jobs:e.jobReducer.jobs,pending:e.jobReducer.pending,error:e.jobReducer.error,filter:e.filterReducer.filter}}),(function(e){return{handleFilterChange:function(t){return e({type:T,payload:t})}}}))(_),F=c.p+"static/media/back.46f9b388.svg",L=Object(i.b)((function(e){return{jobs:e.jobReducer.jobs,pending:e.jobReducer.pending}}))((function(e){var t=e.jobs,c=e.pending,a=Object(o.g)().jobId,r=Object(n.useState)(),s=Object(j.a)(r,2),i=s[0],b=s[1];return Object(n.useEffect)((function(){if(a){var e=t.find((function(e){return e.id===a}));b(e)}}),[t]),Object(J.jsxs)("div",{className:"container m-1",children:[Object(J.jsxs)(l.b,{to:"/",className:"back",children:[Object(J.jsx)("img",{src:F,alt:"back",id:"arrow"}),"Back to all Jobs"]}),Object(J.jsxs)("div",{children:[c&&Object(J.jsx)("img",{src:d,className:"center",alt:"loader"}),i&&Object(J.jsxs)("div",{className:"single-details d-grid",children:[Object(J.jsxs)("div",{className:"more-info",children:[Object(J.jsx)("h2",{className:"single-job-title",children:i.title}),Object(J.jsx)("span",{dangerouslySetInnerHTML:{__html:i.description}})]}),Object(J.jsxs)("div",{className:"single-job-info",children:[Object(J.jsx)("a",{href:i.company_url,id:"apply-btn",target:"_blank",rel:"noreferrer",children:"Company Website"}),Object(J.jsxs)("div",{children:[Object(J.jsxs)("div",{children:[Object(J.jsx)("p",{className:"uppercase",children:"Location"}),Object(J.jsx)("p",{className:"capsule",children:i.location})]}),Object(J.jsxs)("div",{children:[Object(J.jsx)("p",{className:"uppercase",children:"Category"}),Object(J.jsx)("p",{className:"capsule",children:"Software Development"})]}),Object(J.jsxs)("div",{children:[Object(J.jsx)("p",{className:"uppercase",children:"Posted"}),Object(J.jsx)("p",{className:"capsule",children:"12 days ago"})]})]})]})]})]})]})})),B=function(){return Object(J.jsx)("nav",{"data-test":"header",children:Object(J.jsxs)("div",{className:"container d-flex align-center",children:[Object(J.jsx)("h1",{children:"Jobs Loft"}),Object(J.jsx)("li",{children:Object(J.jsx)("a",{href:"#job-list",children:"Jobs"})})]})})},I=Object(i.b)(null,(function(e){return{fetchJobs:function(){return e(function(){var e=Object(p.a)(u.a.mark((function e(t){var c,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:v}),e.prev=1,e.next=4,g.getJobs2();case 4:c=e.sent,n=c.data,console.log("jobs",n),t(w(n)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),a=e.t0.message,t({type:N,payload:a});case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}())}}}))((function(e){var t=e.fetchJobs;return Object(n.useEffect)((function(){t()}),[]),Object(J.jsxs)("div",{className:"App",children:[Object(J.jsx)(B,{}),Object(J.jsxs)(o.d,{children:[Object(J.jsx)(o.b,{path:"/",exact:!0,component:k}),Object(J.jsx)(o.b,{path:"/job/:jobId",component:L}),Object(J.jsx)(o.a,{to:"/"})]})]})})),P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,75)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))},D=c(13),A=c(38),G=c(9),M={pending:!1,jobs:[],error:null},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(G.a)(Object(G.a)({},e),{},{pending:!0,categories:[]});case y:return Object(G.a)(Object(G.a)({},e),{},{pending:!1,jobs:t.payload,error:""});case N:return Object(G.a)(Object(G.a)({},e),{},{pending:!1,jobs:[],error:t.payload});default:return e}},U={filter:""},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(G.a)(Object(G.a)({},e),{},{filter:t.payload});default:return e}},H=Object(D.c)({jobReducer:Q,filterReducer:Y}),W=Object(D.d)(H,Object(D.a)(A.a));s.a.render(Object(J.jsx)(a.a.StrictMode,{children:Object(J.jsx)(l.a,{children:Object(J.jsx)(i.a,{store:W,children:Object(J.jsx)(I,{})})})}),document.getElementById("root")),P()}},[[74,1,2]]]);
//# sourceMappingURL=main.7ec837ef.chunk.js.map