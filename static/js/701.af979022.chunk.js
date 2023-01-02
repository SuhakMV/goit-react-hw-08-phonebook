(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[701],{5701:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return De}});var r=n(9434),a=n(7840),i="ContactFilter_form__RBCmO",o="ContactFilter_label__qRVzC",s="ContactFilter_input__8mWOi",c="ContactFilter_text__AAVYP",u=n(3329),l=function(){var e=(0,r.I0)();return(0,u.jsx)("form",{className:i,children:(0,u.jsxs)("label",{className:o,children:[(0,u.jsx)("span",{className:c,children:"Find contacts by name:"}),(0,u.jsx)("input",{className:s,type:"name",onChange:function(t){e((0,a.Tv)(t.target.value))}})]})})},f=n(3634),p=function(e){return e.contacts.isLoading},d=function(e){return e.contacts.filter},h=function(e){return e.contacts.items},m=function(e){return e.contacts.showModal},y=function(e){return e.contacts.updateContactId},b="ContactForm_form__dhl+T",T="ContactForm_label__-cVXI",g="ContactForm_input__Bl93P",v="ContactForm_button__eSwX9",C="ContactForm_text__kqq6l",x=function(){var e=(0,r.v9)(h),t=(0,r.I0)();return(0,u.jsxs)("form",{className:b,onSubmit:function(n){n.preventDefault();var r=n.currentTarget,a=!1;e.forEach((function(e){e.name.toLowerCase()===r.elements.name.value.toLowerCase()&&(alert("".concat(r.elements.name.value," is already in contacts")),a=!0)})),a||(t((0,f.uK)({name:r.elements.name.value,number:r.elements.number.value})),r.reset())},autoComplete:"off",children:[(0,u.jsxs)("label",{className:T,children:[(0,u.jsx)("span",{className:C,children:"Name"}),(0,u.jsx)("input",{className:g,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,u.jsxs)("label",{className:T,children:[(0,u.jsx)("span",{className:C,children:"Number"}),(0,u.jsx)("input",{className:g,type:"text",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,u.jsx)("button",{className:v,type:"submit",children:"Add contact"})]})},A="Contact_wrapper__K-zLN",_="Contact_text__Wq-3f",j="Contact_button__F+kJb",O=function(e){var t=e.id,n=e.name,i=e.number,o=(0,r.I0)();return(0,u.jsxs)("div",{className:A,children:[(0,u.jsxs)("p",{className:_,children:[n,": ",i]}),(0,u.jsx)("button",{type:"button",className:j,onClick:function(){o((0,a.$U)(!0)),o((0,a.ht)(t))},children:"Edit"}),(0,u.jsx)("button",{type:"button",className:j,onClick:function(){return o((0,f.GK)(t))},children:"Delete"})]})},w="ContactList_list_box__S+sDr",S="ContactList_list__csErn",E=function(){var e=(0,r.v9)(h),t=(0,r.v9)(d),n=e.filter((function(e){return e.name.toLowerCase().includes(t)}));return(0,u.jsx)("div",{className:w,children:(0,u.jsx)("ul",{className:S,children:e.length>0?n.map((function(e){var t=e.id,n=e.name,r=e.number;return(0,u.jsx)(O,{id:t,name:n,number:r},t)})):(0,u.jsx)("p",{children:"Contact list is empty"})})})},N=n(2791),I="Modal_Overlay__yoxbg",P="Modal_Modal__I1UYJ",k="Modal_form__FEIVf",L="Modal_label__A0H75",M="Modal_input__1Ivcu",R="Modal_button__PTCbC",D="Modal_text__KJZTz",H="Modal_close__V34Fj",F=function(){var e=(0,r.I0)(),t=function(){return e((0,a.$U)(!1))},n=(0,r.v9)(y);(0,N.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}));return(0,u.jsx)("div",{className:I,onClick:t,children:(0,u.jsxs)("div",{className:P,children:[(0,u.jsx)("span",{className:H,onClick:t,children:"\xd7"}),(0,u.jsxs)("form",{className:k,onSubmit:function(r){r.preventDefault();var a=r.currentTarget,i={id:n,name:a.elements.name.value,number:a.elements.number.value};e((0,f.Tk)(i)),a.reset(),t()},autoComplete:"off",children:[(0,u.jsxs)("label",{className:L,children:[(0,u.jsx)("p",{className:D,children:"Name"}),(0,u.jsx)("input",{className:M,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,u.jsxs)("label",{className:L,children:[(0,u.jsx)("p",{className:D,children:"Number"}),(0,u.jsx)("input",{className:M,type:"text",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,u.jsx)("button",{className:R,type:"submit",children:"Edit contact"})]})]})})},z=n(2007),q=n.n(z),B=n(77),U=n.n(B),Y=n(2176),K=n.n(Y),V=n(9613),Z=n.n(V);function W(){return W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W.apply(this,arguments)}function $(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,J(e,t)}function J(e,t){return J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},J(e,t)}function G(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(a[n]=e[n]);return a}var X={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},Q={rel:["amphtml","canonical","alternate"]},ee={type:["application/ld+json"]},te={charset:"",name:["robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]},ne=Object.keys(X).map((function(e){return X[e]})),re={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},ae=Object.keys(re).reduce((function(e,t){return e[re[t]]=t,e}),{}),ie=function(e,t){for(var n=e.length-1;n>=0;n-=1){var r=e[n];if(Object.prototype.hasOwnProperty.call(r,t))return r[t]}return null},oe=function(e){var t=ie(e,X.TITLE),n=ie(e,"titleTemplate");if(Array.isArray(t)&&(t=t.join("")),n&&t)return n.replace(/%s/g,(function(){return t}));var r=ie(e,"defaultTitle");return t||r||void 0},se=function(e){return ie(e,"onChangeClientState")||function(){}},ce=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return W({},e,t)}),{})},ue=function(e,t){return t.filter((function(e){return void 0!==e[X.BASE]})).map((function(e){return e[X.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a+=1){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},le=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&console&&"function"==typeof console.warn&&console.warn("Helmet: "+e+' should be of type "Array". Instead found type "'+typeof t[e]+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n,i=Object.keys(e),o=0;o<i.length;o+=1){var s=i[o],c=s.toLowerCase();-1===t.indexOf(c)||"rel"===n&&"canonical"===e[n].toLowerCase()||"rel"===c&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(s)||"innerHTML"!==s&&"cssText"!==s&&"itemprop"!==s||(n=s)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][u]&&(a[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o+=1){var s=i[o],c=W({},r[s],a[s]);r[s]=c}return e}),[]).reverse()},fe=function(e,t){if(Array.isArray(e)&&e.length)for(var n=0;n<e.length;n+=1)if(e[n][t])return!0;return!1},pe=function(e){return Array.isArray(e)?e.join(""):e},de=function(e,t){return Array.isArray(e)?e.reduce((function(e,n){return function(e,t){for(var n=Object.keys(e),r=0;r<n.length;r+=1)if(t[n[r]]&&t[n[r]].includes(e[n[r]]))return!0;return!1}(n,t)?e.priority.push(n):e.default.push(n),e}),{priority:[],default:[]}):{default:e}},he=function(e,t){var n;return W({},e,((n={})[t]=void 0,n))},me=[X.NOSCRIPT,X.SCRIPT,X.STYLE],ye=function(e,t){return void 0===t&&(t=!0),!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},be=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},Te=function(e,t){return void 0===t&&(t={}),Object.keys(e).reduce((function(t,n){return t[re[n]||n]=e[n],t}),t)},ge=function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-rh"]=!0,r);return Object.keys(t).forEach((function(e){var n=re[e]||e;"innerHTML"===n||"cssText"===n?a.dangerouslySetInnerHTML={__html:t.innerHTML||t.cssText}:a[n]=t[e]})),N.createElement(e,a)}))},ve=function(e,t,n){switch(e){case X.TITLE:return{toComponent:function(){return n=t.titleAttributes,(r={key:e=t.title})["data-rh"]=!0,a=Te(n,r),[N.createElement(X.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=be(n),i=pe(t);return a?"<"+e+' data-rh="true" '+a+">"+ye(i,r)+"</"+e+">":"<"+e+' data-rh="true">'+ye(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return Te(t)},toString:function(){return be(t)}};default:return{toComponent:function(){return ge(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!("innerHTML"===e||"cssText"===e)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+ye(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===me.indexOf(e);return t+"<"+e+' data-rh="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},Ce=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.noscriptTags,o=e.styleTags,s=e.title,c=void 0===s?"":s,u=e.titleAttributes,l=e.linkTags,f=e.metaTags,p=e.scriptTags,d={toComponent:function(){},toString:function(){return""}};if(e.prioritizeSeoTags){var h=function(e){var t=e.linkTags,n=e.scriptTags,r=e.encode,a=de(e.metaTags,te),i=de(t,Q),o=de(n,ee);return{priorityMethods:{toComponent:function(){return[].concat(ge(X.META,a.priority),ge(X.LINK,i.priority),ge(X.SCRIPT,o.priority))},toString:function(){return ve(X.META,a.priority,r)+" "+ve(X.LINK,i.priority,r)+" "+ve(X.SCRIPT,o.priority,r)}},metaTags:a.default,linkTags:i.default,scriptTags:o.default}}(e);d=h.priorityMethods,l=h.linkTags,f=h.metaTags,p=h.scriptTags}return{priority:d,base:ve(X.BASE,t,r),bodyAttributes:ve("bodyAttributes",n,r),htmlAttributes:ve("htmlAttributes",a,r),link:ve(X.LINK,l,r),meta:ve(X.META,f,r),noscript:ve(X.NOSCRIPT,i,r),script:ve(X.SCRIPT,p,r),style:ve(X.STYLE,o,r),title:ve(X.TITLE,{title:c,titleAttributes:u},r)}},xe=[],Ae=function(e,t){var n=this;void 0===t&&(t="undefined"!=typeof document),this.instances=[],this.value={setHelmet:function(e){n.context.helmet=e},helmetInstances:{get:function(){return n.canUseDOM?xe:n.instances},add:function(e){(n.canUseDOM?xe:n.instances).push(e)},remove:function(e){var t=(n.canUseDOM?xe:n.instances).indexOf(e);(n.canUseDOM?xe:n.instances).splice(t,1)}}},this.context=e,this.canUseDOM=t,t||(e.helmet=Ce({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))},_e=N.createContext({}),je=q().shape({setHelmet:q().func,helmetInstances:q().shape({get:q().func,add:q().func,remove:q().func})}),Oe="undefined"!=typeof document,we=function(e){function t(n){var r;return(r=e.call(this,n)||this).helmetData=new Ae(r.props.context,t.canUseDOM),r}return $(t,e),t.prototype.render=function(){return N.createElement(_e.Provider,{value:this.helmetData.value},this.props.children)},t}(N.Component);we.canUseDOM=Oe,we.propTypes={context:q().shape({helmet:q().shape()}),children:q().node.isRequired},we.defaultProps={context:{}},we.displayName="HelmetProvider";var Se=function(e,t){var n,r=document.head||document.querySelector(X.HEAD),a=r.querySelectorAll(e+"[data-rh]"),i=[].slice.call(a),o=[];return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&("innerHTML"===a?r.innerHTML=t.innerHTML:"cssText"===a?r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText)):r.setAttribute(a,void 0===t[a]?"":t[a]));r.setAttribute("data-rh","true"),i.some((function(e,t){return n=t,r.isEqualNode(e)}))?i.splice(n,1):o.push(r)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:i,newTags:o}},Ee=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-rh"),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),s=0;s<o.length;s+=1){var c=o[s],u=t[c]||"";n.getAttribute(c)!==u&&n.setAttribute(c,u),-1===a.indexOf(c)&&a.push(c);var l=i.indexOf(c);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f-=1)n.removeAttribute(i[f]);a.length===i.length?n.removeAttribute("data-rh"):n.getAttribute("data-rh")!==o.join(",")&&n.setAttribute("data-rh",o.join(","))}},Ne=function(e,t){var n=e.baseTag,r=e.htmlAttributes,a=e.linkTags,i=e.metaTags,o=e.noscriptTags,s=e.onChangeClientState,c=e.scriptTags,u=e.styleTags,l=e.title,f=e.titleAttributes;Ee(X.BODY,e.bodyAttributes),Ee(X.HTML,r),function(e,t){void 0!==e&&document.title!==e&&(document.title=pe(e)),Ee(X.TITLE,t)}(l,f);var p={baseTag:Se(X.BASE,n),linkTags:Se(X.LINK,a),metaTags:Se(X.META,i),noscriptTags:Se(X.NOSCRIPT,o),scriptTags:Se(X.SCRIPT,c),styleTags:Se(X.STYLE,u)},d={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),s(e,d,h)},Ie=null,Pe=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).rendered=!1,t}$(t,e);var n=t.prototype;return n.shouldComponentUpdate=function(e){return!Z()(e,this.props)},n.componentDidUpdate=function(){this.emitChange()},n.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},n.emitChange=function(){var e,t,n=this.props.context,r=n.setHelmet,a=null,i=(e=n.helmetInstances.get().map((function(e){var t=W({},e.props);return delete t.context,t})),{baseTag:ue(["href"],e),bodyAttributes:ce("bodyAttributes",e),defer:ie(e,"defer"),encode:ie(e,"encodeSpecialCharacters"),htmlAttributes:ce("htmlAttributes",e),linkTags:le(X.LINK,["rel","href"],e),metaTags:le(X.META,["name","charset","http-equiv","property","itemprop"],e),noscriptTags:le(X.NOSCRIPT,["innerHTML"],e),onChangeClientState:se(e),scriptTags:le(X.SCRIPT,["src","innerHTML"],e),styleTags:le(X.STYLE,["cssText"],e),title:oe(e),titleAttributes:ce("titleAttributes",e),prioritizeSeoTags:fe(e,"prioritizeSeoTags")});we.canUseDOM?(t=i,Ie&&cancelAnimationFrame(Ie),t.defer?Ie=requestAnimationFrame((function(){Ne(t,(function(){Ie=null}))})):(Ne(t),Ie=null)):Ce&&(a=Ce(i)),r(a)},n.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},n.render=function(){return this.init(),null},t}(N.Component);Pe.propTypes={context:je.isRequired},Pe.displayName="HelmetDispatcher";var ke=["children"],Le=["children"],Me=function(e){function t(){return e.apply(this,arguments)||this}$(t,e);var n=t.prototype;return n.shouldComponentUpdate=function(e){return!U()(he(this.props,"helmetData"),he(e,"helmetData"))},n.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case X.SCRIPT:case X.NOSCRIPT:return{innerHTML:t};case X.STYLE:return{cssText:t};default:throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},n.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren;return W({},r,((t={})[n.type]=[].concat(r[n.type]||[],[W({},e.newChildProps,this.mapNestedChildrenToProps(n,e.nestedChildren))]),t))},n.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(r.type){case X.TITLE:return W({},a,((t={})[r.type]=o,t.titleAttributes=W({},i),t));case X.BODY:return W({},a,{bodyAttributes:W({},i)});case X.HTML:return W({},a,{htmlAttributes:W({},i)});default:return W({},a,((n={})[r.type]=W({},i),n))}},n.mapArrayTypeChildrenToProps=function(e,t){var n=W({},t);return Object.keys(e).forEach((function(t){var r;n=W({},n,((r={})[t]=e[t],r))})),n},n.warnOnInvalidChildren=function(e,t){return K()(ne.some((function(t){return e.type===t})),"function"==typeof e.type?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+ne.join(", ")+" are allowed. Helmet does not support rendering <"+e.type+"> elements. Refer to our API for more information."),K()(!t||"string"==typeof t||Array.isArray(t)&&!t.some((function(e){return"string"!=typeof e})),"Helmet expects a string as a child of <"+e.type+">. Did you forget to wrap your children in braces? ( <"+e.type+">{``}</"+e.type+"> ) Refer to our API for more information."),!0},n.mapChildrenToProps=function(e,t){var n=this,r={};return N.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=G(a,ke),s=Object.keys(o).reduce((function(e,t){return e[ae[t]||t]=o[t],e}),{}),c=e.type;switch("symbol"==typeof c?c=c.toString():n.warnOnInvalidChildren(e,i),c){case X.FRAGMENT:t=n.mapChildrenToProps(i,t);break;case X.LINK:case X.META:case X.NOSCRIPT:case X.SCRIPT:case X.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:s,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:s,nestedChildren:i})}}})),this.mapArrayTypeChildrenToProps(r,t)},n.render=function(){var e=this.props,t=e.children,n=G(e,Le),r=W({},n),a=n.helmetData;return t&&(r=this.mapChildrenToProps(t,r)),!a||a instanceof Ae||(a=new Ae(a.context,a.instances)),a?N.createElement(Pe,W({},r,{context:a.value,helmetData:void 0})):N.createElement(_e.Consumer,null,(function(e){return N.createElement(Pe,W({},r,{context:e}))}))},t}(N.Component);Me.propTypes={base:q().object,bodyAttributes:q().object,children:q().oneOfType([q().arrayOf(q().node),q().node]),defaultTitle:q().string,defer:q().bool,encodeSpecialCharacters:q().bool,htmlAttributes:q().object,link:q().arrayOf(q().object),meta:q().arrayOf(q().object),noscript:q().arrayOf(q().object),onChangeClientState:q().func,script:q().arrayOf(q().object),style:q().arrayOf(q().object),title:q().string,titleAttributes:q().object,titleTemplate:q().string,prioritizeSeoTags:q().bool,helmetData:q().object},Me.defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1},Me.displayName="Helmet";var Re=n(8809),De=function(){var e=(0,r.I0)(),t=(0,r.v9)(p),n=(0,r.v9)(m);return(0,N.useEffect)((function(){e((0,f.yF)())}),[e]),(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(we,{children:[(0,u.jsx)(Me,{children:"Your Contacts"}),(0,u.jsx)(x,{}),(0,u.jsx)(l,{}),(0,u.jsx)("div",{children:t&&(0,u.jsx)(Re.a,{})}),(0,u.jsx)(E,{}),n&&(0,u.jsx)(F,{})]})})}},2176:function(e){"use strict";e.exports=function(e,t,n,r,a,i,o,s){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,a,i,o,s],l=0;(c=new Error(t.replace(/%s/g,(function(){return u[l++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},888:function(e,t,n){"use strict";var r=n(9047);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,i,o){if(o!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:a};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},77:function(e){var t="undefined"!==typeof Element,n="function"===typeof Map,r="function"===typeof Set,a="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var s,c,u,l;if(Array.isArray(e)){if((s=e.length)!=o.length)return!1;for(c=s;0!==c--;)if(!i(e[c],o[c]))return!1;return!0}if(n&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!o.has(c.value[0]))return!1;for(l=e.entries();!(c=l.next()).done;)if(!i(c.value[1],o.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!o.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((s=e.length)!=o.length)return!1;for(c=s;0!==c--;)if(e[c]!==o[c])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((s=(u=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(c=s;0!==c--;)if(!Object.prototype.hasOwnProperty.call(o,u[c]))return!1;if(t&&e instanceof Element)return!1;for(c=s;0!==c--;)if(("_owner"!==u[c]&&"__v"!==u[c]&&"__o"!==u[c]||!e.$$typeof)&&!i(e[u[c]],o[u[c]]))return!1;return!0}return e!==e&&o!==o}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}}}]);
//# sourceMappingURL=701.af979022.chunk.js.map