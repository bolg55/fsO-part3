(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{40:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var c=t(2),a=t(15),r=t.n(a),o=t(3),u=t(0),i=function(e){var n=e.newSearch,t=e.handleSearch;return Object(u.jsxs)("div",{children:["search by name or number:"," ",Object(u.jsx)("input",{value:n,onChange:t})]})},s=t(4),l=t.n(s),b="/api/persons",d={getAll:function(){return l.a.get(b)},create:function(e){return l.a.post(b,e)},update:function(e,n){return l.a.put("".concat(b,"/").concat(e),n)},remove:function(e){return l.a.delete("".concat(b,"/").concat(e))}},j=function(e){var n=e.people,t=e.setPeople,c=e.newName,a=e.setNewName,r=e.newNumber,o=e.setNewNumber,i=e.handleNameChange,s=e.handleNumberChange,l=e.setNotificationMessage,b=e.setErrorMessage;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Add a new"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();for(var u={name:c,number:r},i=function(e){return n[e].name.toLowerCase().includes(u.name.toLowerCase())?(window.confirm("".concat(u.name," already exists with phone number: ").concat(n[e].number,", replace the old number with ").concat(u.number,"?"))&&d.update(n[e].id,u).then((function(){d.getAll().then((function(e){return t(e.data)})),l("Successfully updated ".concat(n[e].name," number to: ").concat(r)),setTimeout((function(){l(null)}),2e3)})).catch((function(c){b("Information for ".concat(n[e].name," has already been removed from the server")),setTimeout((function(){b(null)}),3e3),t(n.filter((function(t){return t.id!==n[e].id})))})),a(""),o(""),{v:n}):n[e].number===u.number?(alert("".concat(u.number," already belongs to ").concat(n[e].name)),a(""),o(""),{v:n}):void 0},s=0;s<n.length;s++){var j=i(s);if("object"===typeof j)return j.v}d.create(u).then((function(e){t(n.concat(e.data)),a(""),o(""),l("Successfully added ".concat(u.name," (").concat(u.number,")")),setTimeout((function(){l(null)}),2e3)}))},children:[Object(u.jsxs)("div",{children:["name: ",Object(u.jsx)("input",{required:!0,value:c,onChange:i})]}),Object(u.jsxs)("div",{children:["number:",Object(u.jsx)("input",{required:!0,value:r,onChange:s})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"add"})})]})]})},m=function(e){var n=e.people,t=e.setPeople,c=e.setNotificationMessage;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Numbers"}),n.map((function(e){return Object(u.jsxs)("p",{children:[e.name," ",e.number," ",Object(u.jsx)("button",{onClick:function(){return function(e){window.confirm("Delete ".concat(e.name,"? This cannot be undone"))&&d.remove(e.id).then((function(){t(n.filter((function(n){return n.id!==e.id}))),c("Successfully deleted ".concat(e.name," ")),setTimeout((function(){c(null)}),2e3)}))}(e)},children:"delete"})]},e.id)}))]})},f=function(e){var n=e.message,t=e.error;return null===n||null===t?null:Object(u.jsx)("div",{className:t?"error":"notification",children:t||n})},h=function(){var e=Object(c.useState)([]),n=Object(o.a)(e,2),t=n[0],a=n[1],r=Object(c.useState)(""),s=Object(o.a)(r,2),l=s[0],b=s[1],h=Object(c.useState)(""),p=Object(o.a)(h,2),O=p[0],v=p[1],g=Object(c.useState)(""),x=Object(o.a)(g,2),w=x[0],N=x[1],S=Object(c.useState)(null),C=Object(o.a)(S,2),y=C[0],k=C[1],M=Object(c.useState)(null),P=Object(o.a)(M,2),T=P[0],A=P[1];Object(c.useEffect)((function(){d.getAll().then((function(e){a(e.data)}))}),[]);var E=t.filter((function(e){return(""===l||!(!e.name.toLowerCase().includes(l.toLowerCase())&&!e.number.includes(l)))&&e}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Phonebook"}),Object(u.jsx)(f,{message:y}),Object(u.jsx)(f,{error:T}),Object(u.jsx)(i,{people:t,value:l,setNewSearch:b,handleSearch:function(e){b(e.target.value)}}),Object(u.jsx)(j,{people:t,setPeople:a,newName:O,newNumber:w,handleNameChange:function(e){v(e.target.value)},handleNumberChange:function(e){N(e.target.value)},setNewName:v,setNewNumber:N,setNotificationMessage:k,setErrorMessage:A}),Object(u.jsx)(m,{people:E,setPeople:a,setNotificationMessage:k})]})};t(40);r.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.110f3d38.chunk.js.map