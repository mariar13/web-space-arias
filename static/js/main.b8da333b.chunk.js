(this["webpackJsonpweb-space-arias"]=this["webpackJsonpweb-space-arias"]||[]).push([[0],{102:function(e,a,t){},270:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(92),c=t.n(l),o=(t(102),t(14)),s=t(15),m=t(12);var i=function(e){return r.a.createElement("div",null,r.a.createElement("p",{className:""},"Tama\xf1o"),r.a.createElement("input",{onInput:e.onInput,type:"range",min:"10",max:"50",value:e.valueSize}))},u=t(93);var p=function(e){return r.a.createElement("div",null,r.a.createElement("p",{className:""},"Color"),r.a.createElement(u.HuePicker,{color:e.valueColor,onChange:e.onChange}))};var E=function(e){return r.a.createElement("div",null,r.a.createElement("p",{className:""},"Nombre"),r.a.createElement("input",{className:"component__Name",onChange:e.onChange,value:e.valueName,placeholder:"Nombra a tu planeta"}))},g=t(94),_=t.n(g),v=function(e){return new _.a((function(a){var t=0,n="#000",r=0,l=0;a.setup=function(){var t=a.createCanvas(1250,300,a.WEBGL);a.normalMaterial(),t.parent(e)},a.draw=function(){a.clear();var e=a.mouseX-a.height/2,c=a.mouseY-a.width/2;a.orbitControl(1,1,0),a.ambientLight(60,60,60),a.pointLight(250,250,250,e,c,100),a.push(),a.fill(n),a.ellipsoid(t,t,t),a.rotateY(.5),a.rotateX(.5),a.pop(),a.push(),a.rotateX(a.frameCount*l),a.rotateY(a.frameCount*l);for(var o=0;o<r;o++)a.torus(t+20*o,t/(o+10));a.pop()},a.setTam=function(e){t=e,console.log("tama\xf1o bolita"+t)},a.setCol=function(e){n=e},a.setAros=function(e){r=e,console.log("tama\xf1o arito"+r)},a.setOrbit=function(e){l=e}}))},N=function(e){var a=r.a.useRef(null),t=r.a.useRef();return r.a.useEffect((function(){t.current=v(a.current)}),[]),r.a.useEffect((function(){t.current.setTam(e.size),t.current.setCol(e.color),t.current.setAros(e.ring),t.current.setOrbit(e.orbit)}),[e.size,e.color,e.ring,e.orbit]),r.a.createElement("div",{ref:a},r.a.createElement("p",{className:"Name__Planet"},e.name))};var f=function(e){return r.a.createElement("div",null,r.a.createElement("p",{className:""},"Anillos"),r.a.createElement("input",{onInput:e.onInput,type:"range",min:"0",max:"10",value:e.valueRing}))};var b=function(e){return r.a.createElement("div",null,r.a.createElement("p",{className:""},"Orbita"),r.a.createElement("input",{onInput:e.onInput,type:"range",min:"0",step:"0.0001",max:"0.05",value:e.valueOrbit}))};r.a.createContext({value:0});var d=function(){var e=r.a.useState([]),a=Object(m.a)(e,2),t=a[0],n=a[1];r.a.useEffect((function(){var e=localStorage.getItem("planetList");null!==e&&n(JSON.parse(e))}),[]);var l=r.a.useState(50),c=Object(m.a)(l,2),s=c[0],u=c[1],g=r.a.useState(""),_=Object(m.a)(g,2),v=_[0],d=_[1],C=r.a.useState("#555555"),h=Object(m.a)(C,2),O=h[0],S=h[1],I=r.a.useState(0),B=Object(m.a)(I,2),G=B[0],k=B[1],y=r.a.useState(0),R=Object(m.a)(y,2),x=R[0],w=R[1];return r.a.createElement("div",{className:"Game"},r.a.createElement("audio",{src:"./sound/sound2.mp3",autoPlay:!0}),r.a.createElement("article",{className:"Banner__background"},r.a.createElement("img",{className:"Banner__background",src:"./images/bg.png",alt:""})),r.a.createElement("section",{className:"Game__Componets"},r.a.createElement("article",{className:"Game__Componets-name"},r.a.createElement("p",null,"Crea tu propio planeta ")),r.a.createElement("section",{className:"Game__Componets--view"},r.a.createElement(N,{size:s,color:O,name:v,ring:G,orbit:x})),r.a.createElement("section",{className:"Game__Componets--inputs"},r.a.createElement("article",{className:"Game__Componets--inputs-ONE"},r.a.createElement(E,{onChange:function(e){d(e.target.value)},valueName:v})),r.a.createElement("article",{className:"Game__Componets--inputs-TWO"},r.a.createElement(i,{onInput:function(e){u(parseInt(e.target.value)),console.log(e.target.value)},valueSize:s})),r.a.createElement("article",{className:"Game__Componets--inputs-TREE"},r.a.createElement(p,{onChange:function(e){S(e.hex)},valueColor:O})),r.a.createElement("article",{className:"Game__Componets--inputs-FOUR"},r.a.createElement(f,{onInput:function(e){k(parseInt(e.target.value))},valueRing:G})),r.a.createElement("article",{className:"Game__Componets--inputs-FIVE"},r.a.createElement(b,{onInput:function(e){w(e.target.value)},valueOrbit:x}))),r.a.createElement("section",{className:"Game__bottom"},r.a.createElement("button",{className:"btn__login",onClick:function(e){var a={name:v,size:s,color:O,ring:G,orbit:x};t.push(a),console.log(a),alert("Tu planeta "+a.name+" Se ha guardado en tu universo"),localStorage.setItem("planetList",JSON.stringify(t))}},"Guardar tu planeta"),r.a.createElement(o.b,{className:"",to:"/gallery"}," ",r.a.createElement("button",{className:"btn__login"},"Vuela en tu universo")))))};var C=function(){var e=r.a.useState([]),a=Object(m.a)(e,2),t=a[0],n=a[1];return r.a.useEffect((function(){var e=localStorage.getItem("planetList");null!==e&&n(JSON.parse(e))}),[]),r.a.createElement("div",{className:""},r.a.createElement("audio",{src:"./sound/sound3.mp3",autoPlay:!0}),r.a.createElement("article",{className:"Banner__background"},r.a.createElement("img",{className:"Banner__background",src:"./images/bg.png",alt:""})),r.a.createElement("section",{className:"Game__Componets"},r.a.createElement("article",{className:"Game__Componets-name"},r.a.createElement("p",null,"Este es tu universo "))),r.a.createElement("div",{className:""},t.map((function(e){return r.a.createElement(N,{size:e.size,color:e.color,name:e.name,ring:e.ring,orbit:e.orbit})}))),r.a.createElement("section",{className:"Game__bottom"},r.a.createElement("button",{className:"btn__login",onClick:function(){localStorage.clear(),n([])}},"Eliminar todo"),r.a.createElement(o.b,{className:"",to:"/game"}," ",r.a.createElement("button",{className:"btn__login"},"Crear otro planeta"))))};var h=function(){return r.a.createElement("section",{className:"Banner"},r.a.createElement("audio",{src:"./sound/sound1.mp3",autoPlay:!0}),r.a.createElement("article",{className:"Banner__background"},r.a.createElement("img",{className:"Banner__background",src:"./images/bg.png",alt:""})),r.a.createElement("div",{className:"Banner__left"},r.a.createElement("article",{className:"Banner__left-top"},r.a.createElement("p",null,"\xa1ES HORA DE CREAR TU UNIVERSO!")),r.a.createElement("article",{className:"Banner__left-center"},r.a.createElement("p",null,"Crearas tu propio universo aprendiendo formas, colores y numeros.")),r.a.createElement("article",{className:"Banner__left-bottom"},r.a.createElement(o.b,{to:"/game"},r.a.createElement("button",{className:"btn__login"},"Iniciar")))),r.a.createElement("div",{className:"Banner-right"},r.a.createElement("section",{className:"Banner-right--animation"},r.a.createElement("img",{className:"Banner-right--animation__planet",src:"./images/planet.svg",alt:""}),r.a.createElement("img",{className:"Banner-right--animation__astronaut",src:"./images/austro.svg",alt:""}))))};var O=function(){return r.a.createElement(o.a,null,r.a.createElement(s.a,{path:"/",exact:!0,component:h}),r.a.createElement(s.a,{path:"/game",exact:!0,component:d}),r.a.createElement(s.a,{path:"/gallery",exact:!0,component:C}))};c.a.render(r.a.createElement(O,null),document.getElementById("root"))},97:function(e,a,t){e.exports=t(270)}},[[97,1,2]]]);
//# sourceMappingURL=main.b8da333b.chunk.js.map