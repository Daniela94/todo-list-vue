(function(e){function t(t){for(var r,c,i=t[0],u=t[1],l=t[2],s=0,h=[];s<i.length;s++)c=i[s],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&h.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(h.length)h.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function c(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"f8d5cf78"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(e);var l=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(s);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/todo-list-vue/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"074c":function(e,t,n){"use strict";n("4d40")},"0a9e":function(e,t,n){},"4d40":function(e,t,n){},5454:function(e,t,n){"use strict";n("0a9e")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"container"},o={class:"mb-3"},c={key:0},i={class:"input-group mb-3"},u={class:"input-group-text"},l={class:"form-check"},s=Object(r["h"])("label",{class:"form-check-label",for:"flexCheckDefault"}," High Priority",-1),d={class:"mt-3"},h={key:1},f={class:"mt-3"},p=Object(r["h"])("h3",null,"Items added",-1),b={class:"list-group list-group-flush"};function v(e,t,n,v,m,g){return Object(r["q"])(),Object(r["d"])("div",a,[Object(r["h"])("h1",null,Object(r["z"])(m.header?m.header:"I love Vue"),1),Object(r["h"])("div",o,[m.editing?(Object(r["q"])(),Object(r["d"])("button",{key:0,class:"btn btn-sm btn-danger",onClick:t[1]||(t[1]=function(e){return g.doEdit(!1)})},"Cancel")):(Object(r["q"])(),Object(r["d"])("button",{key:1,class:"btn btn-sm btn-primary",onClick:t[2]||(t[2]=function(e){return g.doEdit(!0)})},"Add Item"))]),m.editing?(Object(r["q"])(),Object(r["d"])("div",c,[Object(r["h"])("div",i,[Object(r["E"])(Object(r["h"])("input",{onKeyup:t[3]||(t[3]=Object(r["F"])((function(){return g.saveItem&&g.saveItem.apply(g,arguments)}),["enter"])),type:"text",class:"form-control","onUpdate:modelValue":t[4]||(t[4]=function(e){return m.newItem=e}),placeholder:"Add an Item"},null,544),[[r["C"],m.newItem]]),Object(r["h"])("span",u,Object(r["z"])(g.characterCount)+"/20",1)]),Object(r["h"])("div",l,[Object(r["E"])(Object(r["h"])("input",{type:"checkbox",class:"form-check-input","onUpdate:modelValue":t[5]||(t[5]=function(e){return m.newItemHighPriority=e})},null,512),[[r["B"],m.newItemHighPriority]]),s]),Object(r["h"])("div",d,[Object(r["h"])("button",{type:"button",class:"btn btn-sm btn-primary",disabled:m.newItem.length<5,onClick:t[6]||(t[6]=function(){return g.saveItem&&g.saveItem.apply(g,arguments)})},"Save Item ",8,["disabled"])])])):Object(r["e"])("",!0),0===m.responseData.length?(Object(r["q"])(),Object(r["d"])("p",h,"Nice job! you're done")):Object(r["e"])("",!0),Object(r["h"])("div",f,[p,Object(r["h"])("ul",b,[(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["w"])(m.responseData,(function(e){return Object(r["q"])(),Object(r["d"])("li",{class:["list-group-item",[e.purchased?"text-decoration-line-through text-muted":"text-decoration-underline",e.highPriority?"text-danger":""]],key:e.id,onClick:function(t){return g.togglePurchased(e,e.id)}},[Object(r["g"])(Object(r["z"])(e.id)+" - "+Object(r["z"])(e.label)+" ",1),Object(r["h"])("button",{class:"btn btn-sm btn-danger",onClick:function(t){return g.removeItem(e.id)}},"Delete",8,["onClick"])],10,["onClick"])})),128))])])])}var m=n("1da1"),g=(n("96cf"),n("bc3a")),j=n.n(g),O={name:"App",data:function(){return{header:"Shopping list",responseData:{},newItem:"",newItemHighPriority:!1,editing:!1}},methods:{fetchApi:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,j.a.get("http://localhost:3000/items").then((function(t){e.responseData=t.data})).catch((function(e){console.log(e)}));case 2:case"end":return t.stop()}}),t)})))()},saveItem:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={id:e.responseData.length+1,label:e.newItem,purchased:!1,highPriority:e.newItemHighPriority},t.next=3,j.a.post("http://localhost:3000/items",n).then((function(t){e.id=t.data.id})).catch((function(e){console.log(e)}));case 3:e.newItem="",e.newItemHighPriority=!1,e.fetchApi();case 6:case"end":return t.stop()}}),t)})))()},doEdit:function(e){this.editing=e,this.newItem="",this.newItemHighPriority=!1},togglePurchased:function(e,t){var n=this;return Object(m["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a={id:t,label:e.label,purchased:!e.purchased,highPriority:e.highPriority},r.next=3,j.a.put("http://localhost:3000/items/"+t,a).then((function(e){n.id=e.data.id})).catch((function(e){console.log(e)}));case 3:e.purchased=!e.purchased;case 4:case"end":return r.stop()}}),r)})))()},removeItem:function(e){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,j.a.delete("http://localhost:3000/items/"+e).then((function(e){t.id=e.data.id})).catch((function(e){console.log(e)}));case 2:t.fetchApi();case 3:case"end":return n.stop()}}),n)})))()}},computed:{characterCount:function(){return this.newItem.length}},mounted:function(){this.fetchApi()}};n("074c");O.render=v;var y=O,w=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),k=n("cf05"),I=n.n(k),x={class:"home"},P=Object(r["h"])("img",{alt:"Vue logo",src:I.a},null,-1);function _(e,t,n,a,o,c){var i=Object(r["x"])("HelloWorld");return Object(r["q"])(),Object(r["d"])("div",x,[P,Object(r["h"])(i,{msg:"Welcome to Your Vue.js App"})])}var C=Object(r["G"])("data-v-25d525f8");Object(r["t"])("data-v-25d525f8");var H={class:"hello"},q=Object(r["f"])('<p data-v-25d525f8> For a guide and recipes on how to configure / customize this project,<br data-v-25d525f8> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-25d525f8>vue-cli documentation</a>. </p><h3 data-v-25d525f8>Installed CLI Plugins</h3><ul data-v-25d525f8><li data-v-25d525f8><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-25d525f8>babel</a></li><li data-v-25d525f8><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-25d525f8>router</a></li><li data-v-25d525f8><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-25d525f8>eslint</a></li></ul><h3 data-v-25d525f8>Essential Links</h3><ul data-v-25d525f8><li data-v-25d525f8><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-25d525f8>Core Docs</a></li><li data-v-25d525f8><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-25d525f8>Forum</a></li><li data-v-25d525f8><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-25d525f8>Community Chat</a></li><li data-v-25d525f8><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-25d525f8>Twitter</a></li><li data-v-25d525f8><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-25d525f8>News</a></li></ul><h3 data-v-25d525f8>Ecosystem</h3><ul data-v-25d525f8><li data-v-25d525f8><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-25d525f8>vue-router</a></li><li data-v-25d525f8><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-25d525f8>vuex</a></li><li data-v-25d525f8><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-25d525f8>vue-devtools</a></li><li data-v-25d525f8><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-25d525f8>vue-loader</a></li><li data-v-25d525f8><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-25d525f8>awesome-vue</a></li></ul>',7);Object(r["r"])();var A=C((function(e,t,n,a,o,c){return Object(r["q"])(),Object(r["d"])("div",H,[Object(r["h"])("h1",null,Object(r["z"])(n.msg),1),q])})),E={name:"HelloWorld",props:{msg:String}};n("5454");E.render=A,E.__scopeId="data-v-25d525f8";var D=E,R={name:"Home",components:{HelloWorld:D}};R.render=_;var S=R,z=[{path:"/",name:"Home",component:S},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],T=Object(w["a"])({history:Object(w["b"])("/todo-list-vue/"),routes:z}),V=T;n("ab8b"),n("7b17");Object(r["c"])(y).use(V).mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.27f313f3.js.map