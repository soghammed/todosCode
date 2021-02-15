(function(t){function e(e){for(var n,r,s=e[0],c=e[1],l=e[2],u=0,p=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,s=1;s<o.length;s++){var c=o[s];0!==i[c]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=o[0]))}return t}var n={},i={app:0},a=[];function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=c;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},2660:function(t,e,o){"use strict";o("41b4")},"41b4":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e623"),o("e379"),o("5dc8"),o("37e1");var n=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[o("div",{staticClass:"d-flex align-center"},[o("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),o("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),o("v-spacer"),o("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[o("span",{staticClass:"mr-2"},[t._v("Latest Release")]),o("v-icon",[t._v("mdi-open-in-new")])],1)],1),o("v-main",[o("ToDoList")],1)],1)},a=[],r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"wrapper"},[o("v-row",{attrs:{justify:"space-between"}},[o("v-col",{attrs:{cols:"auto"}},[o("v-btn",{staticClass:"mx-1",attrs:{fab:"",dark:"",small:"",color:"blue"},on:{click:function(e){t.newMode=!0}}},[t._v(" + ")])],1),o("v-col",{attrs:{cols:"auto"}},[o("v-select",{attrs:{items:t.filters,label:"Filter By",required:""},on:{input:function(e){return t.filterToDos()}},model:{value:t.filterSelected,callback:function(e){t.filterSelected=e},expression:"filterSelected"}})],1),o("v-col",{attrs:{col:"auto"}},[o("v-text-field",{attrs:{label:"Search todos"},on:{input:function(e){return t.filterToDos()}},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1)],1),o("v-row",{attrs:{justify:"center"}},[o("v-col",{attrs:{cols:"12"}},[t.pagination.totalPages>0?o("v-pagination",{attrs:{length:t.pagination.totalPages,circle:""},on:{input:t.updatePage},model:{value:t.pagination.currentPage,callback:function(e){t.$set(t.pagination,"currentPage",e)},expression:"pagination.currentPage"}}):t._e()],1)],1),o("v-row",t._l(t.visibleTodos,(function(e){return o("v-col",{key:e.id,attrs:{cols:"12","offset-lg":"1",xl:"3","offset-md":"1",md:"5",sm:"6",tile:""}},[o("v-hover",{attrs:{"open-delay":"100"},scopedSlots:t._u([{key:"default",fn:function(n){var i=n.hover;return[o("v-card",[o("v-list-item",[o("v-list-item-content",[i?o("v-container",{staticClass:"actionContainer"},[t.editMode?t._e():o("v-btn",{attrs:{icon:"",color:"blue"},on:{click:function(o){return t.editToDo(e)}}},[o("v-icon",{attrs:{medium:""}},[t._v("mdi-pencil-circle-outline")])],1),o("v-btn",{attrs:{icon:"",color:"red"},on:{click:function(o){return t.removeToDo(e)}}},[o("v-icon",{attrs:{medium:""}},[t._v("mdi-close-circle-outline ")])],1)],1):t._e(),o("v-list-item-title",[t._v("ID: "+t._s(e.id))]),o("v-list-item-title",[t._v("Title: "+t._s(e.title))]),o("v-list-item-title",[o("b",[t._v("Status: "+t._s(e.completed?"Complete":"Pending"))])])],1)],1)],1)]}}],null,!0)})],1)})),1),o("v-row",{attrs:{justify:"center"}},[o("v-col",{attrs:{cols:"12"}},[t.pagination.totalPages>0?o("v-pagination",{attrs:{length:t.pagination.totalPages,circle:""},on:{input:t.updatePage},model:{value:t.pagination.currentPage,callback:function(e){t.$set(t.pagination,"currentPage",e)},expression:"pagination.currentPage"}}):t._e()],1),0===t.pagination.totalPages?o("v-card",{staticClass:"empty"},[t._v(" No results found. ")]):t._e()],1),t.editMode||t.newMode?o("v-overlay",{attrs:{opacity:"1"}},[o("v-container",[t.editMode?o("v-textarea",{attrs:{label:"Enter to do",required:"",autofocus:""},model:{value:t.todo.title,callback:function(e){t.$set(t.todo,"title",e)},expression:"todo.title"}}):t._e(),t.newMode?o("v-textarea",{attrs:{label:"Enter to do",required:"",autofocus:""},model:{value:t.newToDo.title,callback:function(e){t.$set(t.newToDo,"title",e)},expression:"newToDo.title"}}):t._e(),t.editMode?o("v-checkbox",{attrs:{label:"Complete"},model:{value:t.todo.completed,callback:function(e){t.$set(t.todo,"completed",e)},expression:"todo.completed"}}):t._e(),o("v-btn",{attrs:{icon:"",color:"blue",loading:t.loading},on:{click:function(e){t.editMode?t.updateToDo():t.addToDo()}}},[o("v-icon",{attrs:{large:""}},[t._v(" mdi-checkbox-marked-circle-outline ")])],1),o("v-btn",{staticClass:"mx-2",attrs:{icon:"",color:"blue"},on:{click:function(e){t.editMode?t.editMode=!1:t.newMode=!1}}},[o("v-icon",{attrs:{large:""}},[t._v("mdi-close-circle-outline")])],1)],1)],1):t._e()],1)},s=[],c=(o("99af"),o("4de4"),o("fb6a"),o("a434"),o("96cf"),o("1da1")),l=o("bc3a"),d=o.n(l),u={name:"ToDoList",data:function(){return{hover:!1,filterSelected:null,filters:["id","completed","userId","title"],filter:"",newMode:!1,editMode:!1,todos:[],todo:{},absolute:!0,overlay:!1,loading:!1,pagination:{currentPage:1,value:0,pageSize:10,totalPages:0},visibleTodos:[]}},created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.filterToDos();case 2:t.initNewTodo();case 3:case"end":return e.stop()}}),e)})))()},methods:{initNewTodo:function(){this.newToDo={id:null,title:null,complete:!1}},filterToDos:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getToDos();case 2:t.todos=e.sent,t.setTotalPages(),t.updateVisibleToDos();case 5:case"end":return e.stop()}}),e)})))()},getToDos:function(){var t=this.filterSelected&&this.filter?"https://jsonplaceholder.typicode.com/todos?".concat(this.filterSelected,"=").concat(this.filter):"https://jsonplaceholder.typicode.com/todos";return d.a.get(t).then((function(t){return t.data.reverse()})).catch((function(){}))},updateVisibleToDos:function(){this.visibleTodos=this.todos.slice((this.pagination.currentPage-1)*this.pagination.pageSize,(this.pagination.currentPage-1)*this.pagination.pageSize+this.pagination.pageSize)},editToDo:function(t){this.todo=t,this.editMode=!0},removeToDo:function(t){var e=this;this.loading=!0,d.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t.id)).then((function(o){200===o.status&&(e.todos.splice(e.getToDoIndex(t.id),1),e.updateVisibleToDos(),e.setTotalPages(),e.loading=!1)})).catch((function(){e.loading=!1}))},addToDo:function(){var t=this;this.loading=!0,this.newToDo.id=this.todos[0].id+1,d.a.post("https://jsonplaceholder.typicode.com/todos",this.newToDo).then((function(){t.todos.unshift(t.newToDo),t.updateVisibleToDos(),t.initNewTodo(),t.newMode=!1,t.loading=!1})).catch((function(){t.loading=!1}))},updateToDo:function(){var t=this;this.loading=!0,d.a.put("https://jsonplaceholder.typicode.com/todos/".concat(this.todo.id),this.todo).then((function(e){200===e.status&&(t.todos[t.getToDoIndex(t.todo.id)]=t.todo,t.editMode=!1),t.loading=!1})).catch((function(){t.todos[t.getToDoIndex(t.todo.id)]=t.todo,t.loading=!1,t.editMode=!1}))},setTotalPages:function(){this.pagination.totalPages=Math.ceil(this.todos.length/this.pagination.pageSize),this.pagination.currentPage>this.pagination.totalPages&&(this.pagination.currentPage=1)},updatePage:function(){this.updateVisibleToDos()},getToDoIndex:function(t){for(var e in this.todos)if(this.todos[e].id===t)return e;return!1}},props:{msg:String}},p=u,f=(o("2660"),o("2877")),v=o("6544"),g=o.n(v),h=o("8336"),m=o("b0af"),b=o("ac7c"),T=o("62ad"),w=o("a523"),y=o("ce87"),x=o("132d"),_=o("da13"),D=o("5d23"),P=o("a797"),k=o("891e"),V=o("0fd9b"),j=o("b974"),M=o("8654"),S=o("a844"),C=Object(f["a"])(p,r,s,!1,null,"972a9932",null),O=C.exports;g()(C,{VBtn:h["a"],VCard:m["a"],VCheckbox:b["a"],VCol:T["a"],VContainer:w["a"],VHover:y["a"],VIcon:x["a"],VListItem:_["a"],VListItemContent:D["a"],VListItemTitle:D["b"],VOverlay:P["a"],VPagination:k["a"],VRow:V["a"],VSelect:j["a"],VTextField:M["a"],VTextarea:S["a"]});var I={name:"App",components:{ToDoList:O},data:function(){return{}}},L=I,$=o("7496"),R=o("40dc"),z=o("adda"),N=o("f6c4"),B=o("2fa4"),E=Object(f["a"])(L,i,a,!1,null,null,null),q=E.exports;g()(E,{VApp:$["a"],VAppBar:R["a"],VBtn:h["a"],VIcon:x["a"],VImg:z["a"],VMain:N["a"],VSpacer:B["a"]});var A=o("f309");n["a"].use(A["a"]);var F=new A["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:F,render:function(t){return t(q)}}).$mount("#app")}});
//# sourceMappingURL=app.08faa069.js.map