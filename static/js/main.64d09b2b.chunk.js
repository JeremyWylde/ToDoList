(this["webpackJsonp01-todolist"]=this["webpackJsonp01-todolist"]||[]).push([[0],{15:function(t,e,a){},26:function(t,e,a){t.exports=a(55)},31:function(t,e,a){},55:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),i=a(7),s=a.n(i),r=(a(31),a(2)),c=a(8),l=a(4),d=a(3),u=(a(15),function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={error:!1,tittle:""},t.onAddItemClick=function(){var e=t.state.tittle;""===e?t.setState({error:!0}):(t.setState({error:!1,tittle:""}),t.props.addItem(e))},t.onChangeInput=function(e){var a=e.currentTarget.value;t.setState({error:!1,tittle:a})},t.onEnterPress=function(e){if("Enter"===e.key){var a=t.state.tittle;""===a?t.setState({error:!0}):(t.setState({error:!1,tittle:""}),t.props.addItem(a))}},t.render=function(){var e=!0===t.state.error?"input is-medium error":"input is-medium";return o.a.createElement("div",{className:"field has-addons"},o.a.createElement("div",{className:"control"},o.a.createElement("input",{className:e,type:"text",placeholder:"New item name",onChange:t.onChangeInput,onKeyPress:t.onEnterPress,value:t.state.tittle})),o.a.createElement("div",{className:"control"},o.a.createElement("button",{class:"button is-primary is-medium",onClick:t.onAddItemClick},"Add")))},t}return a}(o.a.Component)),p=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={isHidden:!1},t.onAllFilterClick=function(){t.props.changeFilter(t.props.todoId,"All")},t.onCompletedFilterClick=function(){t.props.changeFilter(t.props.todoId,"2")},t.onActiveFilterClick=function(){t.props.changeFilter(t.props.todoId,"0")},t.onShowFiltersClick=function(){t.setState({isHidden:!0})},t.onHideFiltersClick=function(){t.setState({isHidden:!1})},t.render=function(e){var a="All"===t.props.filterValue?"is-active":"",n="2"===t.props.filterValue?"is-active":"",i="0"===t.props.filterValue?"is-active":"";return o.a.createElement("div",{className:"tabs is-centered"},!t.state.isHidden&&o.a.createElement("ul",null,o.a.createElement("li",{onClick:t.onAllFilterClick,className:a},o.a.createElement("a",null,"All")),o.a.createElement("li",{onClick:t.onCompletedFilterClick,className:n},o.a.createElement("a",null,"Completed")),o.a.createElement("li",{onClick:t.onActiveFilterClick,className:i},o.a.createElement("a",null,"Active"))))},t}return a}(o.a.Component),f=a(24).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.1/",headers:{"API-KEY":"cf1841cd-6d1a-4d5e-ab77-95df9a8ef2a0"}}),m=function(t,e){return f.post("todo-lists/".concat(t,"/tasks"),{title:e})},T=function(t){return f.post("todo-lists",{title:t})},h=function(){return f.get("todo-lists")},k=function(t){return f.delete("todo-lists/{".concat(t,"}"))},v=function(t){return f.get("todo-lists/".concat(t,"/tasks"))},b=function(t,e){return f.delete("todo-lists/{".concat(t,"}/tasks/{").concat(e,"}"))},O=function(t,e,a,n){return f.put("todo-lists/{".concat(t,"}/tasks/{").concat(e,"}"),{title:a,status:n})},E=function(t,e,a){return f.put("todo-lists/{".concat(t,"}/tasks/{").concat(e,"}"),{title:a})},I=function(t,e){return f.put("/todo-lists/".concat(t),{title:e})},j=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={editMode:!1,title:t.props.task.title},t.onIsDoneChanged=function(e){var a;a=!0===e.currentTarget.checked?2:0,O(t.props.todoId,t.props.task.id,t.props.task.title,a).then((function(e){t.props.changeStatus(e.data.data.item.todoListId,e.data.data.item.id,e.data.data.item.status)}))},t.onTitleChanged=function(e){t.setState({title:e.currentTarget.value})},t.activateEditMode=function(){t.setState({editMode:!0})},t.deactivateEditMode=function(){E(t.props.todoId,t.props.task.id,t.state.title).then((function(e){t.props.changeTitle(e.data.data.item.todoListId,e.data.data.item.id,e.data.data.item.title),t.setState({editMode:!1})}))},t.deleteTask=function(){b(t.props.todoId,t.props.task.id).then((function(e){t.props.deleteTask(t.props.todoId,t.props.task.id)}))},t.render=function(){var e;e=2===t.props.task.status;var a="".concat("panel-block"," ").concat(e&&"is-active");return o.a.createElement("div",{className:"panel-block"},o.a.createElement("a",{className:a},o.a.createElement("input",{type:"checkbox",checked:e,onChange:t.onIsDoneChanged}),t.state.editMode?o.a.createElement("input",{onBlur:t.deactivateEditMode,onChange:t.onTitleChanged,autoFocus:!0,value:t.state.title}):o.a.createElement("div",{className:"task-text",onClick:t.activateEditMode}," ",t.props.task.title)),o.a.createElement("button",{className:"delete",onClick:t.deleteTask},"X"))},t}return a}(o.a.Component),g=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).render=function(){var e=t.props.task.map((function(e){return o.a.createElement(j,{todoId:t.props.todoId,key:t.props.todoId,task:e,changeTitle:t.props.changeTitle,changeStatus:t.props.changeStatus,deleteTask:t.props.deleteTask})}));return o.a.createElement("div",{className:"panel"},e)},t}return a}(o.a.Component),S=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={editMode:!1,title:t.props.title},t.activateEditMode=function(){t.setState({editMode:!0})},t.deactivateEditMode=function(){I(t.props.todoId,t.state.title).then((function(e){t.props.changeToDoListTitle(t.props.todoId,t.state.title),t.setState({editMode:!1})}))},t.onTitleChanged=function(e){t.setState({title:e.currentTarget.value})},t.render=function(){return o.a.createElement("div",{className:"todoList-header"},t.state.editMode?o.a.createElement("input",{onBlur:t.deactivateEditMode,autoFocus:!0,onChange:t.onTitleChanged,value:t.state.title}):o.a.createElement("h3",{className:"todoList-header__title",onClick:t.activateEditMode},t.props.title))},t}return a}(o.a.Component),C=a(6),A=a(13),L=a(1),D={todolists:[],newTodoLisId:2},y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_TODOLIST":return Object(L.a)(Object(L.a)({},t),{},{todolists:e.todolists.map((function(t){return Object(L.a)(Object(L.a)({},t),{},{tasks:[]})}))});case"SET_TASKS":return Object(L.a)(Object(L.a)({},t),{},{todolists:t.todolists.map((function(t){return t.id!==e.todolistsId?t:Object(L.a)(Object(L.a)({},t),{},{tasks:e.allTasks})}))});case"reducer/ADD-TODOLIST":return Object(L.a)(Object(L.a)({},t),{},{todolists:[].concat(Object(A.a)(t.todolists),[e.newTodolist]),newTodoLisId:t.newTodoLisId+1});case"DELETE_TODOLIST":return Object(L.a)(Object(L.a)({},t),{},{todolists:t.todolists.filter((function(t){if(t.id!==e.todolistId)return t}))});case"ADD_TASK":return Object(L.a)(Object(L.a)({},t),{},{todolists:t.todolists.map((function(t){return t.id!==e.todolistId?t:Object(L.a)(Object(L.a)({},t),{},{tasks:[].concat(Object(A.a)(t.tasks),[e.newTask])})}))});case"DELETE_TASK":return Object(L.a)(Object(L.a)({},t),{},{todolists:t.todolists.map((function(t){return t.id!==e.todolistId?t:Object(L.a)(Object(L.a)({},t),{},{tasks:t.tasks.filter((function(a){if(a.id!==e.taskId)return t}))})}))});case"CHANGE_TASK":return Object(L.a)(Object(L.a)({},t),{},{todolists:t.todolists.map((function(t){return t.id!==e.todolistId?t:Object(L.a)(Object(L.a)({},t),{},{tasks:t.tasks.map((function(t){return t.id!==e.taskId?t:e.newTask}))})}))});case"CHANGE_FILTER":return Object(L.a)(Object(L.a)({},t),{},{todolists:t.todolists.map((function(t){return t.id!==e.todolistId?t:Object(L.a)(Object(L.a)({},t),{},{filter:e.newFilterValue})}))});case"CHANGE_STATUS":return Object(L.a)(Object(L.a)({},t),{},{todolists:t.todolists.map((function(t){return t.id!==e.todolistId?t:Object(L.a)(Object(L.a)({},t),{},{tasks:t.tasks.map((function(t){return t.id!==e.taskId?t:Object(L.a)(Object(L.a)({},t),{},{status:e.isDone})}))})}))});case"CHANGE_TODOLIST_TITLE":return Object(L.a)(Object(L.a)({},t),{},{todolists:t.todolists.map((function(t){return t.id!==e.todoListId?t:Object(L.a)(Object(L.a)({},t),{},{title:e.title})}))});default:return t}},w=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).restoreState=function(){v(t.props.id).then((function(e){var a=e.data.items;t.props.setTasks(a,t.props.id)}))},t.addTask=function(e){m(t.props.id,e).then((function(e){var a=e.data.data.item;t.props.addTask(t.props.id,a)}))},t.changeFilter=function(e,a){t.props.changeFilter(e,a)},t.changeStatus=function(e,a,n){t.props.changeStatus(e,a,n)},t.changeTask=function(e,a,n){t.props.changeTask(e,a,n)},t.changeTitle=function(e,a,n){t.changeTask(e,a,{title:n})},t.deleteTodolist=function(){k(t.props.id).then((function(e){t.props.deleteList(t.props.id)}))},t.render=function(){var e=t.props.tasks,a=(void 0===e?[]:e).filter((function(e){switch(t.props.filter){case"All":return!0;case"2":return e.status;case"0":return!e.status;default:return!0}}));return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"message"},o.a.createElement("div",{className:"message-header"},o.a.createElement(S,{title:t.props.title,changeToDoListTitle:t.props.changeToDoListTitle,todoId:t.props.id}),o.a.createElement("button",{className:"delete",onClick:t.deleteTodolist},"X")),o.a.createElement(u,{addItem:t.addTask}),o.a.createElement(g,{changeStatus:t.changeStatus,todoId:t.props.id,changeTitle:t.changeTitle,task:a,deleteTask:t.props.deleteTask}),o.a.createElement(p,{changeFilter:t.changeFilter,filterValue:t.props.filter,todoId:t.props.id})))},t}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.restoreState()}}]),a}(o.a.Component),N=Object(C.b)(null,(function(t){return{addTask:function(e,a){var n=function(t,e){return{type:"ADD_TASK",newTask:e,todolistId:t}}(e,a);t(n)},deleteTask:function(e,a){var n=function(t,e){return{type:"DELETE_TASK",todolistId:t,taskId:e}}(e,a);t(n)},changeTask:function(e,a,n){var o=function(t,e,a){return{type:"CHANGE_TASK",todolistId:t,taskId:e,newTask:a}}(e,a,n);t(o)},changeFilter:function(e,a){var n=function(t,e){return{type:"CHANGE_FILTER",todolistId:t,newFilterValue:e}}(e,a);t(n)},changeStatus:function(e,a,n){var o=function(t,e,a){return{type:"CHANGE_STATUS",todolistId:t,taskId:e,isDone:a}}(e,a,n);t(o)},setTasks:function(e,a){var n=function(t,e){return{type:"SET_TASKS",allTasks:t,todolistsId:e}}(e,a);t(n)}}}))(w);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).restoreState=function(){h().then((function(e){t.props.setToDoLists(e.data)}))},t.addToDoList=function(e){T(e).then((function(e){var a=e.data.data.item;t.props.addTodolist(a)}))},t.deleteToDoList=function(e){t.props.deleteTodolist(e)},t.render=function(){var e=t.props.todolists.map((function(e){return o.a.createElement(N,{id:e.id,title:e.title,tasks:e.tasks,deleteList:t.deleteToDoList,filter:e.filter,changeToDoListTitle:t.props.changeToDoListTitle})}));return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(u,{addItem:t.addToDoList})),o.a.createElement("div",{className:"main-block"},e))},t}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.restoreState()}}]),a}(o.a.Component),_=Object(C.b)((function(t){return{todolists:t.todolists,newTodoLisId:t.newTodoLisId}}),(function(t){return{addTodolist:function(e){var a=function(t){return{type:"reducer/ADD-TODOLIST",newTodolist:t}}(e);t(a)},deleteTodolist:function(e){var a=function(t){return{type:"DELETE_TODOLIST",todolistId:t}}(e);t(a)},setToDoLists:function(e){var a=function(t){return{type:"SET_TODOLIST",todolists:t}}(e);t(a)},changeToDoListTitle:function(e,a){var n=function(t,e){return{type:"CHANGE_TODOLIST_TITLE",todoListId:t,title:e}}(e,a);t(n)}}}))(F),M=a(9),H=Object(M.b)(y);s.a.render(o.a.createElement(C.a,{store:H},o.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.64d09b2b.chunk.js.map