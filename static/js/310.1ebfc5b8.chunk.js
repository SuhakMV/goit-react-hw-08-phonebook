"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[310],{5310:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var a=n(9434),s=n(7840),r="ContactFilter_form__RBCmO",c="ContactFilter_label__qRVzC",o=n(3329),l=function(){var e=(0,a.I0)();return(0,o.jsx)("div",{children:(0,o.jsx)("form",{className:r,children:(0,o.jsxs)("label",{className:c,children:["Find contacts by name:",(0,o.jsx)("input",{type:"name",onChange:function(t){e((0,s.Tv)(t.target.value))}})]})})})},i=n(3634),u=function(e){return e.contacts.isLoading},d=function(e){return e.contacts.filter},m=function(e){return e.contacts.items},h=function(e){return e.contacts.showModal},p=function(e){return e.contacts.updateContactId},f="ContactForm_form__dhl+T",_="ContactForm_label__-cVXI",x=function(){var e=(0,a.v9)(m),t=(0,a.I0)();return(0,o.jsxs)("form",{className:f,onSubmit:function(n){n.preventDefault();var a=n.currentTarget,s=!1;e.forEach((function(e){e.name.toLowerCase()===a.elements.name.value.toLowerCase()&&(alert("".concat(a.elements.name.value," is already in contacts")),s=!0)})),s||(t((0,i.uK)({name:a.elements.name.value,number:a.elements.number.value})),a.reset())},autoComplete:"off",children:[(0,o.jsxs)("label",{className:_,children:["Name",(0,o.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,o.jsxs)("label",{className:_,children:["Number",(0,o.jsx)("input",{type:"text",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,o.jsx)("button",{type:"submit",children:"Add contact'"})]})},b="Contact_wrapper__K-zLN",j="Contact_text__Wq-3f",v="Contact_button__F+kJb",C=function(e){var t=e.id,n=e.name,r=e.number,c=(0,a.I0)();return(0,o.jsxs)("div",{className:b,children:[(0,o.jsxs)("p",{className:j,children:[n,": ",r]}),(0,o.jsx)("button",{type:"button",className:v,onClick:function(){c((0,s.$U)(!0)),c((0,s.ht)(t))},children:"Edit"}),(0,o.jsx)("button",{type:"button",className:v,onClick:function(){return c((0,i.GK)(t))},children:"Delete"})]})},N=function(){var e=(0,a.v9)(m),t=(0,a.v9)(d),n=e.filter((function(e){return e.name.toLowerCase().includes(t)}));return(0,o.jsx)("div",{children:(0,o.jsx)("ul",{children:e.length>0?n.map((function(e){var t=e.id,n=e.name,a=e.number;return(0,o.jsx)(C,{id:t,name:n,number:a},t)})):(0,o.jsx)("p",{children:"Contact list is empty"})})})},y=n(1413),w=n(2791),g="Modal_Overlay__yoxbg",k="Modal_Modal__I1UYJ",A="Modal_form__FEIVf",F="Modal_label__A0H75",z="Modal_button__PTCbC",M="Modal_text__KJZTz",E="Modal_close__V34Fj",I=function(){var e=(0,a.I0)(),t=function(){return e((0,s.$U)(!1))},n=(0,a.v9)(p);(0,w.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}));return(0,o.jsx)("div",{className:g,children:(0,o.jsxs)("div",{className:k,children:[(0,o.jsx)("span",{className:E,onClick:t,children:"\xd7"}),(0,o.jsxs)("form",{className:A,onSubmit:function(a){a.preventDefault();var s=a.currentTarget,r={name:s.elements.name.value,number:s.elements.number.value};e((0,i.Tk)((0,y.Z)({id:n},r))),s.reset(),t()},autoComplete:"off",children:[(0,o.jsxs)("label",{className:F,children:[(0,o.jsx)("p",{className:M,children:"Name"}),(0,o.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,o.jsxs)("label",{className:F,children:[(0,o.jsx)("p",{className:M,children:"Number"}),(0,o.jsx)("input",{type:"text",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,o.jsx)("button",{className:z,type:"submit",children:"Edit contact"})]})]})})},q=n(4270),Z=function(){var e=(0,a.I0)(),t=(0,a.v9)(u),n=(0,a.v9)(h);return(0,w.useEffect)((function(){e((0,i.yF)())}),[e]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(q.q,{children:"Your Contacts"}),(0,o.jsx)(x,{}),(0,o.jsx)(l,{}),(0,o.jsx)("div",{children:t&&"Request in progress..."}),(0,o.jsx)(N,{}),n&&(0,o.jsx)(I,{})]})}}}]);
//# sourceMappingURL=310.1ebfc5b8.chunk.js.map