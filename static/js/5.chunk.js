(this["webpackJsonp2019-ncov"]=this["webpackJsonp2019-ncov"]||[]).push([[5],{280:function(e,t,a){"use strict";a.r(t);var s=a(9),r=a(0),c=a.n(r),n=a(252),o=a(281),i=a(274);t.default=function(e){var t=e.province,a=e.newData,l=["#ffefef","#ffc0b1","#ff8c71","#ef1717"],f=["#F3E5F5","#CE93D8","#AB47BC","#8E24AA"],u=Object(r.useState)(!0),d=Object(s.a)(u,2),p=d[0],v=d[1],m=Object(r.useState)("confirmed-cases"),A=Object(s.a)(m,2),b=A[0],h=A[1],E=Object(r.useState)(l),k=Object(s.a)(E,2),C=k[0],g=k[1];Object(r.useEffect)((function(){v(!1)}),[t]);var N=Object(r.useState)(null),T=Object(s.a)(N,2),O=T[0],S=T[1];return Object(r.useEffect)((function(){var e={NSW:"AU-NSW",ACT:"AU-ACT",NT:"AU-NT",WA:"AU-WA",VIC:"AU-VIC",QLD:"AU-QLD",SA:"AU-SA",TAS:"AU-TAS"},t="";switch(b){case"confirmed-cases":t="Confirmed",g(l);break;case"relative-cases":t="Cases per million",g(l);break;case"deaths":t="Deaths",g(l);break;case"tested":t="Tested",g(f);break;case"relative-tests":t="Tests per million",g(f);break;case"test-strike":t="Test strike rate (%)",g(f)}for(var s=[["state",t]],r=0;r<a.length;r++){var c=void 0;switch(b){case"confirmed-cases":c=a[r][1];break;case"relative-cases":if("N/A"===a[r][1])continue;var o=1e6*a[r][1]/n[a[r][0]];c=Math.round(o);break;case"deaths":c=a[r][2];break;case"tested":c=a[r][4];break;case"relative-tests":if("N/A"===a[r][4])continue;var i=1e6*a[r][4]/n[a[r][0]];c=Math.round(i);break;case"test-strike":if("N/A"===a[r][4]||"N/A"===a[r][1])continue;var u=a[r][1]/a[r][4]*100;c=Math.round(u)}"N/A"!==c&&s.push([{v:e[a[r][0]],f:a[r][0]},parseInt(c)])}S(s)}),[t,b]),p?c.a.createElement("div",{className:"loading"},"Loading..."):c.a.createElement("div",{className:"stateMap"},c.a.createElement("h2",null," Cases by State ",!!t&&"\xb7 ".concat(t.name)," "),c.a.createElement("span",{className:"selection-grid"},c.a.createElement(o.a,{className:"mapToggle",onChange:function(e){h(e.target.value)}},c.a.createElement("option",{value:"confirmed-cases"},"Confirmed cases"),c.a.createElement("option",{value:"relative-cases"},"Cases per million people"),c.a.createElement("option",{value:"tested"},"Tested"),c.a.createElement("option",{value:"relative-tests"},"Tests per million people"),c.a.createElement("option",{value:"test-strike"},"Positive test rate"))),c.a.createElement(i.a,{width:window.innerWidth<960?"100%":"auto",left:"auto",align:"right",top:"40%",chartType:"GeoChart",data:O,options:{region:"AU",colorAxis:{colors:C},backgroundColor:"white",datalessRegionColor:"rgb(216,221,224)",defaultColor:"#f5f5f5",resolution:"provinces"},mapsApiKey:"YOUR_KEY_HERE",rootProps:{"data-testid":"3"}}))}}}]);
//# sourceMappingURL=5.chunk.js.map