(this["webpackJsonpnostokisat-example"]=this["webpackJsonpnostokisat-example"]||[]).push([[0],[,,,,function(e,n,t){e.exports=t(11)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),c=t(2),r=t.n(c),s=(t(9),t(3));t(10);var l=function(){var e=Object(a.useState)(null),n=Object(s.a)(e,2),t=n[0],c=n[1];return Object(a.useEffect)((function(){null==t&&fetch("/results.json").then((function(e){return e.json()})).then((function(e){return c(e)}))})),o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Nostokisat"),t&&t.map((function(e,n){return o.a.createElement("div",{key:n},o.a.createElement("h2",null,e.date),e.classes.map((function(e,n){return o.a.createElement("div",{key:n},o.a.createElement("h3",null,e.gender," ",e.class),o.a.createElement("ol",null,e.results.map((function(e,n){return o.a.createElement("li",{key:n},e.name," ",e.cnj+e.snatch," kg (",e.cnj,",",e.snatch,")")}))))})))})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(l,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.1c6e8f12.chunk.js.map