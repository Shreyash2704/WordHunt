(this["webpackJsonpword-hunt"]=this["webpackJsonpword-hunt"]||[]).push([[0],{59:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),s=a.n(c),o=(a(59),a(39)),l=a.n(o),i=a(43),b=a(12),u=(a(61),a(4)),d=a(109),j=a(106),h=a(48),g=a(103),p=a(107),O=a(110),f=[{value:"English",label:"en"},{value:"Hindi",label:"hi"},{value:"Spanish",label:"es"},{value:"French",label:"fr"},{value:"Japanese",label:"ja"},{value:"Russian",label:"ru"},{value:"German",label:"de"},{value:"Italian",label:"it"},{value:"Korean",label:"ko"},{value:"Brazilian Portuguese",label:"pt-BR"},{value:"Arabic",label:"ar"},{value:"Turkish",label:"tr"}],x=(a(62),a(5)),m=function(e){var t=e.setCategory,a=e.category,n=e.word,r=e.setWord,c=e.lightMode,s=Object(h.a)({palette:{primary:{main:c?"#000":"#fff"},type:c?"light":"dark"}});return Object(x.jsxs)("div",{className:"header",children:[Object(x.jsx)("span",{style:{fontWeight:"bold",color:c?" rgba(70, 70, 72, 1)":"rgba(255, 255, 255, 0.55)"},className:"title",children:"Word Hunt"}),Object(x.jsx)("div",{className:"input",children:Object(x.jsxs)(g.a,{theme:s,children:[Object(x.jsx)(p.a,{className:"search",label:"Search a Word",value:n,onChange:function(e){return r(e.target.value)}}),Object(x.jsx)(p.a,{className:"select",id:"standard-select-currency",select:!0,value:a,onChange:function(e){return a=e.target.value,t(a),console.log(a),void r("");var a},label:"language",children:f.map((function(e){return Object(x.jsx)(O.a,{value:e.label,children:e.value},e.label)}))})]})})]})},v=(a(69),function(e){var t=e.word,a=e.category,n=e.meanings,r=e.error,c=e.lightMode;return Object(x.jsxs)("div",{className:"meanings mt-5",children:[r&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("span",{style:{color:c?" rgba(70, 70, 72, 1)":"rgba(255, 255, 255, 0.55)"},children:r}),Object(x.jsx)("span",{style:{color:c?" rgba(70, 70, 72, 1)":"rgba(255, 255, 255, 0.55)"},children:"Does You Mean this?"})]}),n[0]&&t&&"en"===a&&Object(x.jsx)("audio",{controls:!0,src:n[0].phonetics[0]&&n[0].phonetics[0].audio,style:{width:"100%",backgroundColor:"#fff",borderRadius:10},children:"Your Browser doesn't support audio element."}),""===t?Object(x.jsx)("span",{style:{color:c?"rgba(70, 70, 72, 1)":"rgba(255, 255, 255, 0.55)"},className:"subTitle",children:"Start by typing a word"}):n.map((function(e){return e.meanings.map((function(t){return t.definitions.map((function(t){return Object(x.jsxs)("div",{className:"singleMean",style:{backgroundColor:c?" rgba(220, 221, 221, 0.87)":" rgba(255, 255, 255, 0.55)",color:"rgba(70, 70, 72, 1)"},children:[Object(x.jsxs)("b",{children:["Word:",e.word]}),Object(x.jsx)("br",{}),Object(x.jsxs)("b",{children:["Definition: ",t.definition]}),Object(x.jsx)("br",{}),t.example&&Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("span",{children:[Object(x.jsx)("b",{children:"Example :"}),t.example]})}),Object(x.jsx)("br",{}),t.synonyms&&Object(x.jsxs)("span",{children:[Object(x.jsx)("b",{children:"Synonyms :"}),t.synonyms.map((function(e){return"".concat(e,", ")}))]}),Object(x.jsx)("hr",{style:{backgroundColor:c?" rgba(70, 70, 72, 1)":"rgba(255, 255, 255, 0.55)",width:"100%"}})]})}))}))}))]})}),y=a(35),k=Object(u.a)({switchBase:{color:y.a[300],"&$checked":{color:y.a[500]},"&$checked + $track":{backgroundColor:y.a[500]}},checked:{},track:{}})(d.a);var w=function(){var e=Object(n.useState)(!1),t=Object(b.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),s=Object(b.a)(c,2),o=s[0],u=s[1],d=Object(n.useState)([]),h=Object(b.a)(d,2),g=h[0],p=h[1],O=Object(n.useState)("en"),f=Object(b.a)(O,2),y=f[0],w=f[1],C=Object(n.useState)(""),N=Object(b.a)(C,2),S=N[0],M=N[1],W=function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t="https://api.dictionaryapi.dev/api/v2/entries/".concat(y,"/").concat(g),fetch(t).then((function(e){if(e.ok)return e.json();throw M("word not found"),console.log("error")})).then((function(e){u(e),M("")}))}catch(S){console.log(S)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){W()}),[g,y]),Object(x.jsx)("div",{className:"App ",style:{backgroundColor:a?"#282c32":"rgba(255, 255, 255, 0.55)"},children:Object(x.jsx)("div",{className:"container",style:{height:"100vh",backgroundColor:a?"#fff":"#282c32",color:"white"},children:Object(x.jsxs)(j.a,{maxWidth:"md",style:{display:"flex",flexDirection:"column",height:"90vh",justifyContent:"space-around"},children:[Object(x.jsx)("div",{style:{position:"absolute",top:0,paddingTop:10},children:Object(x.jsx)(k,{checked:a,onChange:function(){return r(!a)}})}),Object(x.jsx)(m,{category:y,word:g,setWord:p,setCategory:w,lightMode:a}),o&&Object(x.jsx)(v,{word:g,meanings:o,error:S,category:y,lightMode:a})]})})})};s.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(w,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.29e7cff0.chunk.js.map