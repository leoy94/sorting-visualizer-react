(this["webpackJsonpsorting-visualizer-react"]=this["webpackJsonpsorting-visualizer-react"]||[]).push([[0],{25:function(e,t,r){},26:function(e,t,r){},33:function(e,t,r){},34:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),s=r(11),i=r.n(s),c=(r(25),r.p,r(26),r(10));var o=r(8);function l(e,t,r){return r.push({name:"focus",left:e,right:t}),r}function d(e,t,r){return r.push({name:"select",index1:e,index2:t}),r}function u(e,t,r){return r.push({name:"move",itemIndex:e,toIndex:t}),r}function m(e){let t=[],r=[...e];return r=y(r,0,r.length-1,t),{sortedArray:r,animations:t}}function y(e,t,r,a){if(l(t,r,a),d(t,r,a),e.length<=1)return e;const n=Math.ceil(e.length/2),s=Math.floor((t+r)/2);let i=e.slice(0,n),c=e.slice(n);return function(e,t){t.push({name:"split",end:e})}(s,a),i=y(i,t,s,a),c=y(c,s+1,r,a),l(t,r,a),d(t,r,a),function(e,t,r){r.push({name:"merge",start:e,end:t})}(t,r,a),function(e,t,r,a,n){let s=[],i=0,c=0,o=r,l=a;for(;i<e.length&&c<t.length;)d(r,a,n),e[i]<t[c]?(s.push(e[i]),d(o,l,n),u(o,o,n),i++,o++):(s.push(t[c]),d(o,l,n),u(l,o,n),c++,o++,l++);return s.concat(e.slice(i)).concat(t.slice(c))}(i,c,t,s+1,a)}const h=Object(c.b)(((e={array:{unsortedArray:[],sortedArray:[],currentArray:[],splitEnds:[],currentFocus:[],selected:[]},animations:{frames:[],currentAnimation:[]},settings:{delay:.01,isPaused:!0}},t)=>{switch(t.type){case"randomize":const r=function(e){e=e||100;let t=[],r=0;for(;r<e;){let e=0;for(;e<1;)e=Math.floor(1e3*Math.random());t.push(e),r++}return t}(t.payload.size);return Object(o.a)(e,(e=>{e.array.unsortedArray=r,e.array.sortedArray=r,e.array.currentArray=r;const t=m(e.array.unsortedArray),a=t.sortedArray,n=t.animations;e.array.sortedArray=a,e.array.currentFocus=[0,e.array.unsortedArray.length-1],e.animations.frames=n,e.array.splitEnds=[],e.animations.currentAnimation=0,e.settings.isPaused=!0,e.array.selected=[]}));case"play":return Object(o.a)(e,(e=>{e.settings.isPaused=!1,e.settings.delay=t.payload.delay}));case"pause":return Object(o.a)(e,(e=>{e.settings.isPaused=!0}));case"reset":return Object(o.a)(e,(e=>{e.settings.isPaused=!0,e.array.sortedArray=e.array.unsortedArray,e.array.currentArray=e.array.unsortedArray;const t=m(e.array.unsortedArray),r=t.sortedArray,a=t.animations;e.array.sortedArray=r,e.animations.frames=a,e.animations.currentAnimation=0,e.array.currentFocus=[0,e.array.unsortedArray.length-1],e.array.splitEnds=[],e.array.selected=[]}));case"resetFrames":return Object(o.a)(e,(e=>{e.animations.currentAnimation=0,e.settings.isPaused=!0}));case"processNextFrame":return Object(o.a)(e,(e=>{try{switch(e.animations.frames[e.animations.currentAnimation].name){case"focus":e.array.currentFocus=[e.animations.frames[e.animations.currentAnimation].left,e.animations.frames[e.animations.currentAnimation].right];break;case"move":let t=e.animations.frames[e.animations.currentAnimation].itemIndex,r=e.animations.frames[e.animations.currentAnimation].toIndex;if(t!==r){let a=[...e.array.currentArray],n=a.splice(t,1);a.splice(r,0,n[0]),e.array.currentArray=a}break;case"split":e.array.splitEnds.push(e.animations.frames[e.animations.currentAnimation].end);break;case"merge":e.array.splitEnds=e.array.splitEnds.filter((t=>t<e.animations.frames[e.animations.currentAnimation].start||t>=e.animations.frames[e.animations.currentAnimation].end));break;case"select":e.array.selected=[e.animations.frames[e.animations.currentAnimation].index1,e.animations.frames[e.animations.currentAnimation].index2]}}catch(t){}e.animations.currentAnimation=e.animations.currentAnimation+1}));default:return e}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());var j=r(7),p=r(9),g=r(13),x=r(35),b=r(36),f=r(37),O=r(38),A=r(41),v=r(12),C=r.n(v),E=r(2);var w=Object(j.b)((function(e){return{settings:e.settings}}))((e=>{const t=n.a.useState("100.00"),r=Object(g.a)(t,2),a=r[0],s=r[1],i=n.a.useRef(null);return n.a.useEffect((()=>{try{C.a.create(i.current,{start:[6],connect:[!0,!1],step:1,range:{min:5,max:100}}).on("update",(function(e,t){s(parseInt(e[0]))}))}catch(e){}}),[]),Object(E.jsxs)(x.a,{style:{maxHeight:"800px",height:"100%"},children:[Object(E.jsx)(b.a,{style:{backgroundColor:""},children:Object(E.jsx)("h5",{className:"h3 mb-0",children:"Array Options"})}),Object(E.jsxs)(f.a,{children:[Object(E.jsx)(O.a,{style:{justifyContent:"center",alignItems:"center"},children:Object(E.jsxs)("div",{style:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(E.jsx)("span",{className:"range-slider-value",style:{maxHeight:"25px",marginRight:"15px"},children:"Size: ".concat(a)}),Object(E.jsx)("div",{className:"input-slider",color:"info",ref:i,style:{display:"flex",width:"auto",minWidth:"60%",marginRight:"10px"}})]})}),Object(E.jsxs)("div",{style:{width:"100%",display:"flex",justifyContent:"center",marginTop:"15px"},children:[Object(E.jsx)(A.a,{size:"lg",color:"success",onClick:()=>e.dispatch({type:"randomize",payload:{size:a}}),children:"Randomize"}),Object(E.jsx)(A.a,{size:"lg",color:"danger",onClick:()=>e.dispatch({type:"reset"}),children:"Reset"})]})]})]})}));var N=Object(j.b)((function(e){return Object(p.a)({},e)}))((e=>{const t=n.a.useState("100.00"),r=Object(g.a)(t,2),a=r[0],s=r[1],i=n.a.useRef(null);let c=!0;return JSON.stringify(e.array.currentArray)==JSON.stringify(e.array.sortedArray)&&(c=!1),n.a.useEffect((()=>{try{C.a.create(i.current,{start:[.01],connect:[!0,!1],step:.01,range:{min:.01,max:100}}).on("update",(function(e,t){s(e[0])}))}catch(e){}}),[]),n.a.useEffect((()=>{let t=e.animations.currentAnimation,r=e.animations.frames.length;!e.settings.isPaused&&t<r&&setTimeout((()=>{e.dispatch({type:"processNextFrame"})}),e.settings.delay),t>=r&&e.dispatch({type:"resetFrames"})}),[e.animations,e.settings.isPaused]),Object(E.jsxs)(x.a,{style:{maxHeight:"800px",height:"100%"},children:[Object(E.jsx)(b.a,{style:{backgroundColor:""},children:Object(E.jsx)("h5",{className:"h3 mb-0",children:"Visualizer Options"})}),Object(E.jsxs)(f.a,{children:[Object(E.jsx)(O.a,{style:{justifyContent:"center",alignItems:"center"},children:Object(E.jsxs)("div",{style:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(E.jsx)("span",{className:"range-slider-value",style:{maxHeight:"25px",marginRight:"15px"},children:"".concat(a,"ms")}),Object(E.jsx)("div",{className:"input-slider",color:"info",ref:i,style:{display:"flex",width:"auto",minWidth:"60%",marginRight:"10px"}})]})}),Object(E.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center",marginTop:"15px"},children:c?e.settings.isPaused?Object(E.jsx)(A.a,{size:"lg",color:"success",onClick:()=>{c&&e.dispatch({type:"play",payload:{delay:a}})},children:"Play"}):Object(E.jsx)(A.a,{size:"lg",color:"info",onClick:()=>e.dispatch({type:"pause"}),children:"Pause"}):""})]})]})}));var k=Object(j.b)((function(e){return Object(p.a)({},e)}))((e=>{let t="";return Object(E.jsxs)(x.a,{style:{height:"100%",marginBottom:"0"},children:[Object(E.jsx)(b.a,{style:{backgroundColor:""},children:Object(E.jsx)("h5",{className:"h3 mb-0",children:"Mergesort Visualizer"})}),Object(E.jsx)(f.a,{children:Object(E.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"flex-end",maxWidth:"100%",margin:"0",height:"100%"},children:e.array.currentArray.map(((r,a)=>{JSON.stringify(e.array.currentArray)==JSON.stringify(e.array.sortedArray)?(console.log("Hello"),t="#2dce89"):(t=e.array.currentFocus[0]<=a&&a<=e.array.currentFocus[1]?"#5e72e4":"lightgrey",t=e.array.selected.some((e=>a===e))?"#fb6340":t),console.log(t);let s=!1;e.array.splitEnds&&(s=!!e.array.splitEnds.includes(a));let i=s?Object(E.jsx)("div",{style:{width:"5px",height:"100%",backgroundColor:"red",margin:"0 10px"}}):"";return Object(E.jsxs)(n.a.Fragment,{children:[Object(E.jsx)("div",{style:{backgroundColor:"".concat(t),height:"".concat(r/4,"px"),width:"".concat(.5*e.array.currentArray.length,"%"),marginRight:"1px",minWidth:".1px",borderTopRightRadius:"5px",borderTopLeftRadius:"5px"}},a),i]})}))})})]})})),z=r(39),F=r(40);var I=Object(j.b)((function(e){return Object(p.a)({},e)}))((e=>(0===e.array.unsortedArray.length&&e.dispatch({type:"randomize",payload:{size:6}}),Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)(z.a,{style:{padding:"20px 0 0 0",maxWidth:"90%"},children:[Object(E.jsx)(O.a,{children:Object(E.jsx)(F.a,{xs:12,style:{padding:"0"},children:Object(E.jsx)(k,{})})}),Object(E.jsxs)(O.a,{style:{margin:"",display:"flex",justifyContent:"space-around"},children:[Object(E.jsx)(F.a,{md:5,sm:12,xs:12,style:{marginTop:"15px",padding:"0"},children:Object(E.jsx)(w,{})}),Object(E.jsx)(F.a,{md:5,sm:12,xs:12,style:{marginTop:"15px",padding:"0"},children:Object(E.jsx)(N,{})})]})]})}))));var R=function(){return Object(E.jsx)(j.a,{store:h,children:Object(E.jsx)("div",{style:{backgroundColor:"#282c34",minHeight:"100vh",height:"100%",color:"white"},children:Object(E.jsx)(I,{})})})};var P=e=>{e&&e instanceof Function&&r.e(3).then(r.bind(null,42)).then((({getCLS:t,getFID:r,getFCP:a,getLCP:n,getTTFB:s})=>{t(e),r(e),a(e),n(e),s(e)}))};r(33);i.a.render(Object(E.jsx)(n.a.StrictMode,{children:Object(E.jsx)(R,{})}),document.getElementById("root")),P()}},[[34,1,2]]]);
//# sourceMappingURL=main.8f8f4d23.chunk.js.map