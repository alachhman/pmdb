(this.webpackJsonpantneenetrealest=this.webpackJsonpantneenetrealest||[]).push([[0],{129:function(e,t,a){e.exports=a(206)},134:function(e,t,a){},197:function(e,t,a){},206:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),s=a.n(l),c=(a(134),a(106)),o=a(51),m=a(52),i=a(62),u=a(53),p=a(46),E=a(63),v=a(6),f=(a(195),a(196),a(197),[{name:"Player",pkmn:["pikachu","torchic"]},{name:"Rosa",pkmn:["snivy","servine","serperior"]}]),y=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(v.h,null,r.a.createElement("h3",null," Masters | Sync Pairs"),r.a.createElement(d,{units:f}))}}]),t}(r.a.Component);function d(e){var t=e.units.map((function(e){return function(e){return r.a.createElement("div",null,r.a.createElement(v.c,{style:{marginBottom:"8px",marginTop:"8px"}},r.a.createElement(v.e,null,r.a.createElement("strong",null,e.name,r.a.createElement(v.b,{size:"sm",outline:!0,pill:!0,style:{float:"right"},href:"#/masters/pair/"+e.name.replace(" ","_")},"+")))))}(e)}));return r.a.createElement("div",null,t)}var h=a(125),b=a(31),g=a(217),w=a(218),k=a(219),O=a(221),j=a(222),P=a(225),S=a(223),T=a(209),D=a(224),x=a(227),N=a(228),C=[{name:"Player",pkmn:["pikachu","torchic"]},{name:"Rosa",pkmn:["snivy"]}],B=[{name:"pikachu",type:"thunder / fire",weakness:"ground",rarity:3,stats:[80,150,30,20,100,90],moves:[{name:"move1 this is random text that should break the line limit",pow:40,acc:30,type:"status",cost:2,effect:"lorem ipsum"},{name:"move2",pow:40,acc:30,type:"status",cost:2,effect:"lorem ipsum"},{name:"move3",pow:40,acc:30,type:"status",cost:2,effect:"lorem ipsum"},{name:"move4",pow:40,acc:30,type:"status",cost:2,effect:"lorem ipsum"}],passives:[{name:"passive1",desc:"passive 1 desc"},{name:"passive2",desc:"passive 2 desc"}],sync:{name:"syncmove",pow:200,type:"type",effect:"lorem ipsum sync description goes here"}},{name:"torchic",type:"thunder",weakness:"ground",rarity:3,stats:[60,50,180,10,30,110],moves:[{name:"move1",pow:40,acc:30,type:"status",cost:2,effect:"lorem ipsum"},{name:"move2",pow:40,acc:30,type:"status",cost:2,effect:"lorem ipsum"},{name:"move3",pow:40,acc:30,type:"status",cost:2,effect:"lorem ipsum"},{name:"move4",pow:40,acc:30,type:"status",cost:2,effect:"lorem ipsum"}],passives:[{name:"passive1",desc:"passive 1 desc"},{name:"passive2",desc:"passive 2 desc"}],sync:{name:"syncmove",pow:200,type:"type",effect:"lorem ipsum"}},{name:"snivy",type:"thunder",weakness:"ground",rarity:3,stats:[40,50,140,60,20,80],moves:[{name:"move1",pow:40,acc:30,type:"status",cost:2,effect:"lorem ipsum"},{name:"move2",pow:40,acc:30,type:"status",cost:2,effect:"lorem ipsum"},{name:"move3",pow:40,acc:30,type:"status",cost:2,effect:"lorem ipsum"},{name:"move4",pow:40,acc:30,type:"status",cost:2,effect:"lorem ipsum"}],passives:[{name:"passive1",desc:"passive 1 desc"},{name:"passive2",desc:"passive 2 desc"}],sync:{name:"syncmove",pow:200,type:"type",effect:"lorem ipsum"}}];function M(){var e="";return C.forEach((function(t){t.name===document.URL.toString().split("/")[6]&&(e=t)})),r.a.createElement(v.h,null,r.a.createElement(v.f,null,r.a.createElement("h2",null,e.name),r.a.createElement(L,{pkmn:e.pkmn})))}function L(e){var t=e.pkmn,a=[];t.forEach((function(e){var t=!0,n=!1,r=void 0;try{for(var l,s=B[Symbol.iterator]();!(t=(l=s.next()).done);t=!0){var c=l.value;e.toUpperCase()===c.name.toUpperCase()&&a.push(c)}}catch(o){n=!0,r=o}finally{try{t||null==s.return||s.return()}finally{if(n)throw r}}}));var n=a.map((function(e){return r.a.createElement("div",null,r.a.createElement(v.c,{style:{marginBottom:"8px",marginTop:"8px"}},r.a.createElement(v.e,null,r.a.createElement("strong",null,r.a.createElement("h4",null,e.name))),r.a.createElement(v.d,null,r.a.createElement(v.s,null,r.a.createElement(v.f,{md:!0},r.a.createElement(U,{pkmn:e})),r.a.createElement(v.f,{md:!0},r.a.createElement(R,{pkmn:e}))),r.a.createElement(v.s,null,r.a.createElement(v.f,null,r.a.createElement(W,{pkmn:e}))))),r.a.createElement("br",null))}));return r.a.createElement("div",{className:"pokemonList",style:{listStyleType:"none"}},n)}function R(e){var t=e.pkmn;return r.a.createElement("div",null,r.a.createElement(v.h,{className:"InfoTable"},r.a.createElement(g.a,null,r.a.createElement(w.a,null,r.a.createElement(k.a,{scope:"col",border:"bottom"},"Type"),r.a.createElement(k.a,{scope:"col",border:"bottom"},"Weakness"),r.a.createElement(k.a,{scope:"col",border:"bottom"},"Rarity")),r.a.createElement(O.a,null,r.a.createElement(j.a,null,r.a.createElement(k.a,null,t.type),r.a.createElement(k.a,null,t.weakness),r.a.createElement(k.a,null,t.rarity))))),r.a.createElement(v.h,{className:"SyncTable"},r.a.createElement(g.a,null,r.a.createElement(w.a,null,r.a.createElement(k.a,{scope:"col",border:"bottom"},"Sync"),r.a.createElement(k.a,{scope:"col",border:"bottom"},"Type"),r.a.createElement(k.a,{scope:"col",border:"bottom"},"Power")),r.a.createElement(O.a,null,r.a.createElement(j.a,null,r.a.createElement(k.a,null,t.sync.name),r.a.createElement(k.a,null,t.sync.type),r.a.createElement(k.a,null,t.sync.pow)))),r.a.createElement(P.a,null,r.a.createElement("blockquote",null,t.sync.effect))))}function U(e){var t=e.pkmn;return r.a.createElement(v.h,{className:"StatsTable"},r.a.createElement(S.a,{columns:[{property:"name",header:r.a.createElement(P.a,null,"Stats"),primary:!0},{property:"value"},{property:"percent",header:"",render:function(e){return r.a.createElement(T.a,{pad:{vertical:"xsmall"}},r.a.createElement(D.a,{values:[{value:e.percent.stat,color:e.percent.color}],round:!0,thickness:"small",size:"small"}))}}],data:[{name:"HP",value:t.stats[0],percent:{stat:t.stats[0]/2,color:t.stats[0]>=150?"status-ok":t.stats[0]<=45?"status-critical":"status-warning"}},{name:"ATK",value:t.stats[1],percent:{stat:t.stats[1]/2,color:t.stats[1]>=150?"status-ok":t.stats[1]<=45?"status-critical":"status-warning"}},{name:"DEF",value:t.stats[2],percent:{stat:t.stats[2]/2,color:t.stats[2]>=150?"status-ok":t.stats[2]<=45?"status-critical":"status-warning"}},{name:"SPATK",value:t.stats[3],percent:{stat:t.stats[3]/2,color:t.stats[3]>=150?"status-ok":t.stats[3]<=45?"status-critical":"status-warning"}},{name:"SPDEF",value:t.stats[4],percent:{stat:t.stats[4]/2,color:t.stats[4]>=150?"status-ok":t.stats[4]<=45?"status-critical":"status-warning"}},{name:"SPD",value:t.stats[5],percent:{stat:t.stats[5]/2,color:t.stats[5]>=150?"status-ok":t.stats[5]<=45?"status-critical":"status-warning"}}]}))}function W(e){var t=e.pkmn.moves,a=0,n=t.map((function(e){return a++,r.a.createElement(x.a,{title:"M"+a},r.a.createElement(v.h,{className:"MovesTable"},r.a.createElement("div",{style:{marginTop:"12px",marginBottom:"8px"}},r.a.createElement(P.a,null,r.a.createElement("strong",null,e.name,":"))),r.a.createElement(g.a,null,r.a.createElement(w.a,null,r.a.createElement(j.a,null,r.a.createElement(k.a,null,"POW"),r.a.createElement(k.a,null,"ACC"),r.a.createElement(k.a,null,"Type"),r.a.createElement(k.a,null,"Uses/Cost"))),r.a.createElement(O.a,null,r.a.createElement(j.a,null,r.a.createElement(k.a,null,e.pow),r.a.createElement(k.a,null,e.acc),r.a.createElement(k.a,null,e.type),r.a.createElement(k.a,null,e.cost)))),r.a.createElement("div",{style:{marginBottom:"8px"}},r.a.createElement(P.a,null,r.a.createElement("strong",null,"Description: "),e.effect))))}));return r.a.createElement(N.a,null,n)}function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function H(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(a,!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).toggleDropdown=a.toggleDropdown.bind(Object(p.a)(a)),a.toggleNavbar=a.toggleNavbar.bind(Object(p.a)(a)),a.state={dropdownOpen:!1,collapseOpen:!1},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"toggleDropdown",value:function(){this.setState(H({},this.state,{},{dropdownOpen:!this.state.dropdownOpen}))}},{key:"toggleNavbar",value:function(){this.setState(H({},this.state,{},{collapseOpen:!this.state.collapseOpen}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h.a,{basename:"/"},r.a.createElement(v.p,{type:"dark",theme:"primary",expand:"md"},r.a.createElement(v.q,{href:"/"},"Home"),r.a.createElement(v.r,{onClick:this.toggleNavbar}),r.a.createElement(v.g,{open:this.state.collapseOpen,navbar:!0},r.a.createElement(v.m,{navbar:!0},r.a.createElement(v.n,null,r.a.createElement(v.i,{open:this.state.dropdownOpen,toggle:this.toggleDropdown},r.a.createElement(v.l,{nav:!0,caret:!0},"Pokemon Masters"),r.a.createElement(v.k,null,r.a.createElement(v.j,{href:"#/masters/pairs"},"Sync Pairs"),r.a.createElement(v.j,{href:"#/masters/gear"},"Gear"),r.a.createElement(v.j,{href:"#/masters/tier-list"},"Tier List")))),r.a.createElement(v.n,null,r.a.createElement(v.o,{href:"/",disabled:!0},"Dragalia Lost"))))),r.a.createElement(v.a,null,"This is where the discord invite for the bot and masters server will live. ",r.a.createElement("strong",null,"Based"),"  \u2192"),r.a.createElement(b.c,null,r.a.createElement(b.a,{path:"/masters/pair/"},r.a.createElement(M,null)),r.a.createElement(b.a,{path:"/masters/pairs"},r.a.createElement(y,null)),r.a.createElement(b.a,{path:"/masters/gear"},r.a.createElement("h3",null," Masters | Gear")),r.a.createElement(b.a,{path:"/masters/tier-list"},r.a.createElement("h3",null," Masters | Tier List")),r.a.createElement(b.a,{path:"/"},r.a.createElement("h3",null," HOME ")))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[129,1,2]]]);
//# sourceMappingURL=main.add987d0.chunk.js.map