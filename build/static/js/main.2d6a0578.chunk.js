(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){e.exports=t(39)},38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(0),u=t.n(a),l=t(13),r=t.n(l),o=t(14),c=t(2),i=function(e){return u.a.createElement("button",{onClick:e.handleRemove},"Poista")},m=function(e){return u.a.createElement("p",null,e.person.name," ",u.a.createElement("br",null),e.person.number," ",u.a.createElement("br",null),u.a.createElement(i,{handleRemove:function(){return e.handleRemove(e.person.id)}}))},s=function(e){var n=e.haku,t=e.persons;return""!==n&&(t=e.persons.filter(function(e){return e.name.toLowerCase().startsWith(n.toLowerCase())})),t.map(function(n){return u.a.createElement(m,{key:n.id,person:n,handleRemove:e.handleRemove})})},d=function(e){return u.a.createElement(u.a.Fragment,null,u.a.createElement("form",{onSubmit:e.addPerson},u.a.createElement("table",null,u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",null,"Nimi:"),u.a.createElement("td",null,u.a.createElement("input",{value:e.newName,onChange:e.handleNameInput}))),u.a.createElement("tr",null,u.a.createElement("td",null,"Puhelin:"),u.a.createElement("td",null,u.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberInput}))),u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("button",{type:"submit"},"Lis\xe4\xe4")),u.a.createElement("td",null))))),u.a.createElement("button",{onClick:e.handleUpdate},"Vaihda numero"))},f=function(e){return u.a.createElement("p",null,"Haku: ",u.a.createElement("input",{value:e.newHaku,onChange:e.handleHakuInput}))},h=t(3),p=t.n(h),E="/api/persons",b=function(){return p.a.get(E)},v=function(e){return p.a.post(E,e)},w=function(e,n){return p.a.put("".concat(E,"/").concat(e),n).then(function(e){return e.data})},k=function(e){return p.a.delete("".concat(E,"/").concat(e)).then(function(e){return e.data})},N=function(e){var n=e.viesti,t=e.tyyppi;return null===n?null:u.a.createElement("div",{id:"overlay"},u.a.createElement("div",{className:t},n))},g=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],l=n[1],r=Object(a.useState)("Nimi"),i=Object(c.a)(r,2),m=i[0],h=i[1],p=Object(a.useState)("Puhelinnumero"),E=Object(c.a)(p,2),g=E[0],j=E[1],y=Object(a.useState)(""),O=Object(c.a)(y,2),P=O[0],C=O[1],I=Object(a.useState)(null),S=Object(c.a)(I,2),H=S[0],R=S[1],T=Object(a.useState)(null),L=Object(c.a)(T,2),J=L[0],U=L[1];Object(a.useEffect)(function(){console.log("effect"),b().then(function(e){console.log("promise fullfilled"),l(e.data)})},[]);return u.a.createElement("div",null,u.a.createElement("h1",null,"Puhelinluettelo"),u.a.createElement(N,{viesti:H,tyyppi:"palaute"}),u.a.createElement(N,{viesti:J,tyyppi:"virhe"}),u.a.createElement("div",null,u.a.createElement(f,{newHaku:P,handleHakuInput:function(e){C(e.target.value)}})),u.a.createElement("h2",null,"Lis\xe4\xe4 uusi henkil\xf6 luetteloon"),u.a.createElement("div",null,u.a.createElement(d,{addPerson:function(e){e.preventDefault();var n=m;v({name:m,number:g}).then(function(e){console.log(e),l(t.concat(e.data)),R("".concat(n," lis\xe4ttiin puhelinluetteloon.")),setTimeout(function(){R(null)},5e3)}).catch(function(e){U(e.response.data.error),setTimeout(function(){U(null)},5e3)}),h("Nimi"),j("Puhelinnumero"),b().then(function(e){l(e.data)})},newName:m,handleNameInput:function(e){h(e.target.value)},newNumber:g,handleNumberInput:function(e){j(e.target.value)},handleUpdate:function(){try{var e=t.find(function(e){return e.name===m}),n=Object(o.a)({},e,{number:g});w(e.id,n).then(function(n){l(t.map(function(t){return t.id!==e.id?t:n})),R("Henkil\xf6n ".concat(m," puhelinnumero vaihdettiin.")),h("Nimi"),j("Puhelinnumero"),setTimeout(function(){R(null)},5e3)}).catch(function(e){b().then(function(e){l(e.data)}),U(e.response.data.error),setTimeout(function(){U(null)},5e3),h("Nimi"),j("Puhelinnumero")})}catch(a){console.log("Jotain meni pieleen.")}}})),u.a.createElement("h2",null,"Numerot"),u.a.createElement("div",null,u.a.createElement(s,{haku:P,persons:t,handleRemove:function(e){console.log("id: ".concat(e)),window.confirm("Poistetaanko yhteystieto?")&&k(e).then(function(n){l(t.filter(function(n){return n.id!==e})),R("Poisto onnistui."),setTimeout(function(){R(null)},5e3)}).catch(function(e){U(e.response.data.error),setTimeout(function(){U(null)},5e3)})}})))};t(38);r.a.render(u.a.createElement(g,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.2d6a0578.chunk.js.map