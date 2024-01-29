(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s,a=c(6),n=c.n(a),l=c(2),i=c(8),d=c(1),o=(c(13),c(14),c(7)),r=c.n(o),j=c(0),u=function(e){var t=e.todos,c=e.selectedTodoId,s=e.onSelect,a=void 0===s?function(){}:s;return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsxs)("tr",{"data-cy":"todo",className:r()({"has-background-info-light":c===e.id}),children:[Object(j.jsx)("td",{className:"is-vcentered",children:e.id}),Object(j.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:"".concat(e.completed?"has-text-success":"has-text-danger"),children:e.title})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:c===e.id?Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return a(null)},children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"far fa-eye-slash"})})}):Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return a(e)},children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})};!function(e){e.all="all",e.active="active",e.completed="completed"}(s||(s={}));var b=function(e){var t=e.selectedStatus,c=e.onStatusChange,a=e.query,n=e.onQueryChange;return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(e){var t=e.target.value;c(t)},children:[Object(j.jsx)("option",{value:s.all,children:"All"}),Object(j.jsx)("option",{value:s.active,children:"Active"}),Object(j.jsx)("option",{value:s.completed,children:"Completed"})]})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{id:"searchInput",name:"searchInput","data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:a,onChange:function(e){var t=e.target.value;n(t)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),a&&Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){n("")}})})]})]})},h=(c(16),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})});function m(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var O=function(e){var t=e.todo,c=e.onSelect,s=void 0===c?function(){}:c,a=Object(d.useState)(!0),n=Object(l.a)(a,2),i=n[0],o=n[1],r=Object(d.useState)(null),u=Object(l.a)(r,2),b=u[0],O=u[1],x=Object(d.useState)(!0),f=Object(l.a)(x,2),v=f[0],p=f[1];return Object(d.useEffect)((function(){var e;t&&(o(!0),(e=t.userId,m("/users/".concat(e))).then(O).finally((function(){return o(!1)})))}),[t]),v?Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),i?Object(j.jsx)(h,{}):Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){p(!1),s(null)}})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(j.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(j.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(j.jsx)("a",{href:"mailto:".concat(null===b||void 0===b?void 0:b.email),children:null===b||void 0===b?void 0:b.name})]})]})]})]}):null},x=function(){var e=Object(d.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(d.useState)(!1),o=Object(l.a)(n,2),r=o[0],x=o[1],f=Object(d.useState)(null),v=Object(l.a)(f,2),p=v[0],N=v[1],y=Object(d.useState)(s.all),g=Object(l.a)(y,2),S=g[0],k=g[1],C=Object(d.useState)(""),w=Object(l.a)(C,2),I=w[0],T=w[1];Object(d.useEffect)((function(){x(!0),m("/todos").then(a).finally((function(){return x(!1)}))}),[]);var _=function(e,t){var c=t.selectedStatus,a=t.query,n=Object(i.a)(e);return c&&(n=n.filter((function(e){switch(c){case s.active:return!e.completed;case s.completed:return e.completed;default:return!0}}))),a&&(n=n.filter((function(e){return e.title.toLowerCase().includes(a.toLowerCase())}))),n}(c,{selectedStatus:S,query:I});return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(b,{selectedStatus:S,onStatusChange:function(e){k(e)},query:I,onQueryChange:function(e){T(e)}})}),Object(j.jsxs)("div",{className:"block",children:[r&&Object(j.jsx)(h,{}),!r&&Object(j.jsx)(u,{todos:_,selectedTodoId:null===p||void 0===p?void 0:p.id,onSelect:N})]})]})})}),p&&Object(j.jsx)(O,{todo:p,onSelect:N})]})};n.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.8a86945b.chunk.js.map