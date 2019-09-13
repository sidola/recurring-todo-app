(window["webpackJsonprecurring-todos"]=window["webpackJsonprecurring-todos"]||[]).push([[0],{144:function(e,t,n){},146:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(21),s=n.n(i),c=n(14),l=n(15),o=n(17),u=n(16),d=n(18),m=n(165),p=n(156),h=n(157),f=n(23),b=n(29),g=n(8),v=n(158),y=n(151),O=n(159),j=n(160),w=n(150),E=n(12),I={resetRecuringItems:Object(E.createAction)("resetRecuringItems"),addTodoItem:Object(E.createAction)("addTodoItem",function(e){return function(t){return e(t)}}),updateItem:Object(E.createAction)("updateItem",function(e){return function(t){return e(t)}}),deleteItem:Object(E.createAction)("deleteItem",function(e){return function(t){return e(t)}}),renameList:Object(E.createAction)("renameList",function(e){return function(t){return e(t)}}),updateWhenListRecurs:Object(E.createAction)("updateWhenListRecurs",function(e){return function(t){return e(t)}}),createNewList:Object(E.createAction)("createNewList"),deleteList:Object(E.createAction)("deleteList",function(e){return function(t){return e(t)}}),changeActiveList:Object(E.createAction)("changeActiveList",function(e){return function(t){return e(t)}})},N=n(41),C=n(107),k=n(108),L=n(109),D=n(155),R=n(30),x=n(62),T=n.n(x),A=function(e){function t(e){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"mb-4 d-flex align-items-center"},r.a.createElement("h2",{className:"w-100",style:{cursor:"pointer"},onClick:this.props.handleBeginRename},this.props.listName),r.a.createElement(w.a,{className:"ml-2",disabled:this.props.deleteDisabled,size:"sm",onClick:this.props.onDelete},"Delete"))}}]),t}(r.a.Component),P=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={newListName:n.props.currentListName},n.handleInput=n.handleInput.bind(Object(g.a)(n)),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"mb-4 d-flex flex-column"},r.a.createElement(y.a,{autoFocus:!0,value:this.state.newListName,onChange:this.handleInput,onKeyDown:function(t){"Enter"===t.key&&e.props.handleEndRename(e.state.newListName)},onBlur:function(){e.props.handleEndRename(e.state.newListName)}}))}},{key:"handleInput",value:function(e){var t=e.target.value;this.setState({newListName:t})}}]),t}(r.a.Component),S=n(166),M=n(152),F=n(153),W=n(154),H=function(e){function t(e){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(S.a,{backdrop:"static",fade:!1,isOpen:this.props.isOpen,toggle:this.props.handleClose},r.a.createElement(M.a,{toggle:this.props.handleClose},"Confirm"),r.a.createElement(F.a,null,"You're about to remove a list that contains items. This action cannot be undone. Do you want to continue?"),r.a.createElement(W.a,null,r.a.createElement(w.a,{color:"danger",onClick:this.props.handleDelete},"Delete list"),r.a.createElement(w.a,{color:"secondary",onClick:this.props.handleClose},"Cancel")))}}]),t}(r.a.Component);var V=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={renamingList:!1,deleteModalVisible:!1},n.beginRenameList=n.beginRenameList.bind(Object(g.a)(n)),n.endRenameList=n.endRenameList.bind(Object(g.a)(n)),n.toggleDeleteModalVisiblity=n.toggleDeleteModalVisiblity.bind(Object(g.a)(n)),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(a.Fragment,null,r.a.createElement(H,{isOpen:this.state.deleteModalVisible,handleClose:this.toggleDeleteModalVisiblity,handleDelete:function(){e.props.deleteList(e.props.list.id),e.toggleDeleteModalVisiblity()}}),this.state.renamingList&&r.a.createElement(P,{currentListName:this.props.list.listName,handleEndRename:this.endRenameList}),!1===this.state.renamingList&&r.a.createElement(A,{listName:this.props.list.listName,handleBeginRename:this.beginRenameList,deleteDisabled:this.props.disableDelete,onDelete:function(){e.props.list.items.length>0?e.toggleDeleteModalVisiblity():e.props.deleteList(e.props.list.id)}}))}},{key:"beginRenameList",value:function(){this.setState({renamingList:!0})}},{key:"endRenameList",value:function(e){""!==e&&this.props.renameList(this.props.list.id,e),this.setState({renamingList:!1})}},{key:"toggleDeleteModalVisiblity",value:function(){this.setState(function(e){return{deleteModalVisible:!e.deleteModalVisible}})}}]),t}(r.a.Component),U=Object(f.b)(function(e){return{disableDelete:1===e.lists.length}},function(e){return{renameList:function(t,n){return e(I.renameList({listId:t,name:n}))},deleteList:function(t){return e(I.deleteList({listId:t}))}}})(V);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(n,!0).forEach(function(t){Object(b.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var J=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={newItemName:"",renamingList:!1,showModify:!1},n.handleCreateNewItem=n.handleCreateNewItem.bind(Object(g.a)(n)),n.handleNewItemNameChanged=n.handleNewItemNameChanged.bind(Object(g.a)(n)),n.handleItemCheckbox=n.handleItemCheckbox.bind(Object(g.a)(n)),n.toggleEdit=n.toggleEdit.bind(Object(g.a)(n)),n.handleResetDateChanged=n.handleResetDateChanged.bind(Object(g.a)(n)),n.handleResetTimeChanged=n.handleResetTimeChanged.bind(Object(g.a)(n)),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleNewItemNameChanged",value:function(e){this.setState({newItemName:e.target.value})}},{key:"handleCreateNewItem",value:function(e){e.preventDefault(),""!==this.state.newItemName.trim()?(this.props.addTodoItem(this.props.list.id,{id:N.v1(),createdAt:new Date,modifiedAt:new Date,itemText:this.state.newItemName,isChecked:!1}),this.setState({newItemName:""})):this.setState({newItemName:""})}},{key:"handleItemCheckbox",value:function(e,t){this.props.updateItem(this.props.list.id,B({},e,{isChecked:t,modifiedAt:new Date}))}},{key:"handleResetPeriodChanged",value:function(e){var t=e.target.value;if(t){var n=this.props.list.id,a=B({},this.props.list.recurs,{period:t,startFrom:new Date,length:1});this.props.updateWhenListRecurs(n,a)}}},{key:"handleResetLengthChanged",value:function(e){var t=e.target.value;if(t&&!(t<1)){var n=this.props.list.id,a=B({},this.props.list.recurs,{length:e.target.value});this.props.updateWhenListRecurs(n,a)}}},{key:"toggleEdit",value:function(){this.setState(function(e){return{showModify:!e.showModify}})}},{key:"handleResetDateChanged",value:function(e){var t=this.props.list.recurs.startFrom,n=t.getHours(),a=t.getMinutes(),r=Object(C.default)(Object(k.default)(Object(L.default)(e,n),a),0),i=this.props.list.id;this.props.updateWhenListRecurs(i,B({},this.props.list.recurs,{startFrom:r}))}},{key:"handleResetTimeChanged",value:function(e){if(!Object(D.a)(e)){var t=this.props.list.recurs.startFrom,n=e.getHours(),a=e.getMinutes(),r=Object(C.default)(Object(k.default)(Object(L.default)(t,n),a),0),i=this.props.list.id;this.props.updateWhenListRecurs(i,B({},this.props.list.recurs,{startFrom:r}))}}},{key:"render",value:function(){var e=this,t=this.props.list.items.sort(function(e,t){return e.itemText.localeCompare(t.itemText)}),n=t.filter(function(e){return!1===e.isChecked}),i=t.filter(function(e){return e.isChecked});return r.a.createElement(a.Fragment,null,r.a.createElement(U,{list:this.props.list}),r.a.createElement("div",{tabIndex:0,className:"p-2 pl-3 bg-light border",style:{cursor:"pointer"},onClick:this.toggleEdit,onKeyPress:this.toggleEdit},"Edit"),this.state.showModify&&r.a.createElement("div",{className:"p-3 border border-top-0"},r.a.createElement(p.a,null,r.a.createElement(h.a,{lg:4},r.a.createElement(v.a,null,"Reset every"),r.a.createElement(y.a,{type:"number",min:1,value:this.props.list.recurs.length,onChange:function(t){e.handleResetLengthChanged(t)}})),r.a.createElement(h.a,{lg:8,className:"mt-2 mt-lg-0 d-flex align-items-end"},r.a.createElement(O.a,{type:"select",id:"recurType-".concat(this.props.list.id),value:this.props.list.recurs.period,onChange:function(t){e.handleResetPeriodChanged(t)}},r.a.createElement("option",{value:"weeks"},"Weeks"),r.a.createElement("option",{value:"days"},"Days"),r.a.createElement("option",{value:"hours"},"Hours"))),r.a.createElement(a.Fragment,null,r.a.createElement(h.a,{lg:6,className:"mt-3 d-flex flex-column"},r.a.createElement(v.a,null,"Starting from"),r.a.createElement(T.a,{className:"form-control",selected:this.props.list.recurs.startFrom,maxDate:new Date,dateFormat:["yyyy-MM-dd","yyyyMMdd"],strictParsing:!0,onChange:function(t){null!==t&&e.handleResetDateChanged(t)}})),r.a.createElement(h.a,{lg:6,className:"mt-2 mt-lg-0 d-flex flex-column justify-content-end"},r.a.createElement(T.a,{className:"form-control",selected:this.props.list.recurs.startFrom,maxTime:new Date,minTime:Object(R.default)(new Date),timeCaption:"Time",showTimeSelect:!0,showTimeSelectOnly:!0,timeIntervals:15,timeFormat:"HH:mm",dateFormat:["HH:mm","HHmm"],strictParsing:!0,onChange:function(t){null!==t&&e.handleResetTimeChanged(t)}}))))),r.a.createElement("div",{className:"mt-3"},r.a.createElement(j.a,{className:"d-flex",onSubmit:this.handleCreateNewItem},r.a.createElement(y.a,{type:"text",value:this.state.newItemName,onChange:this.handleNewItemNameChanged,placeholder:"Add new item..."}))),r.a.createElement("div",{className:"mt-3"},0===t.length&&r.a.createElement("p",null,"You have no items, create a new one!"),r.a.createElement("ul",{className:"list-unstyled"},n.map(function(t){return r.a.createElement("li",{className:"p-2 pl-3 mb-2 w-100 d-flex justify-content-between align-items-center border",key:t.id},r.a.createElement("div",{className:"d-flex align-items-center"},r.a.createElement(O.a,{id:"cb-".concat(t.id),type:"checkbox",checked:t.isChecked,label:t.itemText,onChange:function(){e.handleItemCheckbox(t,!t.isChecked)}})),r.a.createElement(w.a,{size:"sm",color:"link",onClick:function(){return e.props.deleteItem(e.props.list.id,t.id)}},"Delete"))})),i.length>0&&r.a.createElement(a.Fragment,null,r.a.createElement("hr",null),r.a.createElement("ul",{className:"mt-3 list-unstyled"},i.map(function(t){return r.a.createElement("li",{className:"p-2 pl-3 mb-2 w-100 d-flex justify-content-between align-items-center border",key:t.id},r.a.createElement("div",{className:"d-flex align-items-center"},r.a.createElement(O.a,{id:"cb-".concat(t.id),type:"checkbox",checked:t.isChecked,label:t.itemText,onChange:function(){e.handleItemCheckbox(t,!t.isChecked)}})),r.a.createElement(w.a,{size:"sm",color:"link",onClick:function(){return e.props.deleteItem(e.props.list.id,t.id)}},"Delete"))})))))}}]),t}(r.a.Component),K=Object(f.b)(function(e){return{disableDelete:1===e.lists.length}},function(e){return{addTodoItem:function(t,n){return e(I.addTodoItem({listId:t,item:n}))},updateItem:function(t,n){return e(I.updateItem({listId:t,item:n}))},deleteItem:function(t,n){return e(I.deleteItem({listId:t,itemId:n}))},updateWhenListRecurs:function(t,n){return e(I.updateWhenListRecurs({listId:t,recurs:n}))}}})(J),Y=n(163),$=n(164),Z=n(77),_=n(162),q=n(32),G=n(127),Q=n(161);function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(n,!0).forEach(function(t){Object(b.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function te(e,t){var n=t||new Date,a=function(e){switch(e.period){case"weeks":return 24*e.length*7*36e5;case"days":return 24*e.length*36e5;case"hours":return 36e5*e.length;default:throw new Error("Unhandled recurs period: ".concat(e.period))}}(e),r=e.previouslyRecurred?e.previouslyRecurred:e.startFrom,i=Object(q.a)(r,a);if(Object(G.default)(i,n))return{hasRecurred:!1,previousRecurredDate:r,timeUntilRecurs:Object(Q.a)(i,n)};for(var s=i;;){var c=Object(q.a)(s,a);if(Object(G.default)(c,n))break;s=Object(q.a)(s,a)}return{hasRecurred:!0,previousRecurredDate:s,timeUntilRecurs:Object(Q.a)(i,n)}}var ne=function(e){var t=Object(_.a)(Object(q.a)(new Date,te(e.list.recurs).timeUntilRecurs),"yyyy-MM-dd HH:mm"),n=Object(Z.format)(Object(q.a)(new Date,te(e.list.recurs).timeUntilRecurs));return r.a.createElement("small",{title:t},"Resets ",n)},ae=function(e){var t="".concat(e.list.items.filter(function(e){return e.isChecked}).length+" of "+e.list.items.length," completed");return r.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},r.a.createElement("div",{className:"d-flex flex-column w-100"},r.a.createElement("div",{className:"mb-1 font-weight-bold"},e.list.listName),r.a.createElement("div",{className:"d-flex justify-content-between w-100"},r.a.createElement("div",{className:"small"},t),r.a.createElement(ne,{list:e.list}))))},re=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChangeActiveList=n.handleChangeActiveList.bind(Object(g.a)(n)),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleChangeActiveList",value:function(e){e!==this.props.activeListId&&this.props.changeActiveList(e)}},{key:"render",value:function(){var e=this,t=this.props.lists.sort(function(e,t){var n=te(e.recurs).timeUntilRecurs,a=te(t.recurs).timeUntilRecurs;return n===a?e.listName.localeCompare(t.listName):n-a}),n=t.filter(function(e){return e.items.length>0&&e.items.filter(function(e){return e.isChecked}).length===e.items.length}),i=t.filter(function(e){return 0===e.items.length||e.items.filter(function(e){return e.isChecked}).length!==e.items.length});return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"border"},r.a.createElement("div",{className:"px-3 pt-3 mb-3 d-flex justify-content-between align-items-center"},r.a.createElement("h3",{className:"m-0"},"Lists"),r.a.createElement(w.a,{size:"sm",onClick:this.props.createNewList},"New")),r.a.createElement(Y.a,{flush:!0},i.map(function(t){var n=t.id===e.props.activeListId;return r.a.createElement($.a,{key:t.id,tag:"button",action:!0,active:n,onClick:function(){return e.handleChangeActiveList(t.id)}},r.a.createElement(ae,{list:t}))}))),n.length>0&&r.a.createElement("div",{className:"mt-2 border"},r.a.createElement(Y.a,{flush:!0},n.map(function(t){var n=t.id===e.props.activeListId;return r.a.createElement($.a,{color:"success",key:t.id,tag:"button",action:!0,active:n,onClick:function(){return e.handleChangeActiveList(t.id)}},r.a.createElement(ae,{list:t}))}))))}}]),t}(r.a.Component),ie=Object(f.b)(null,function(e){return{createNewList:function(){return e(I.createNewList())},changeActiveList:function(t){return e(I.changeActiveList({listId:t}))}}})(re),se=n(78);var ce=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"h-100 d-flex flex-column justify-content-between"},r.a.createElement(m.a,{className:"mt-3 flex-grow-1"},r.a.createElement(p.a,null,r.a.createElement(h.a,{lg:7},r.a.createElement(K,{list:this.props.activeList})),r.a.createElement(h.a,{lg:5,className:"mb-4 order-first"},r.a.createElement(ie,{activeListId:this.props.activeList.id,lists:this.props.lists})))),r.a.createElement(m.a,null,r.a.createElement("div",{className:"mb-3 d-flex flex-shrink-0 justify-content-center justify-content-lg-start"},r.a.createElement("div",{style:{color:"#c3c3c3",fontSize:"9px"}},"v",se.version))))}}]),t}(r.a.Component),le=Object(f.b)(function(e){return{activeList:e.lists.filter(function(t){return t.id===e.activeListId})[0],lists:e.lists}})(ce);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(144),n(145);var oe=n(26),ue=n(79),de=n(37);function me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?me(n,!0).forEach(function(t){Object(b.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):me(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var he=N.v1(),fe=function(){var e=new Date;return{activeListId:he,lists:[{id:he,createdAt:new Date,modifiedAt:new Date,listName:"untitled list",items:[],recurs:{period:"weeks",length:1,startFrom:e,previouslyRecurred:null}}]}};var be=Object(de.createStore)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe(),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(E.getType)(I.resetRecuringItems):var n=e.lists.map(function(e){return function(e){var t=te(e.recurs);return!1===t.hasRecurred?e:ee({},e,{recurs:ee({},e.recurs,{previouslyRecurred:t.previousRecurredDate}),modifiedAt:new Date,items:e.items.map(function(e){return ee({},e,{isChecked:!1,modifiedAt:new Date})})})}(e)});return pe({},e,{lists:n});case Object(E.getType)(I.updateWhenListRecurs):var a=pe({},e.lists.filter(function(e){return e.id===t.payload.listId})[0],{modifiedAt:new Date,recurs:t.payload.recurs});return pe({},e,{lists:[].concat(Object(oe.a)(e.lists.filter(function(e){return e.id!==t.payload.listId})),[a])});case Object(E.getType)(I.changeActiveList):return pe({},e,{activeListId:t.payload.listId});case Object(E.getType)(I.deleteList):var r=e.lists.filter(function(e){return e.id!==t.payload.listId}),i=e.lists.findIndex(function(e){return e.id===t.payload.listId}),s=r.length-1;return i<=s&&(s=i),pe({},e,{lists:r,activeListId:r[s].id});case Object(E.getType)(I.createNewList):var c=function(){var e=new Date;return{id:N.v1(),createdAt:new Date,modifiedAt:new Date,listName:"untitled list",items:[],recurs:{period:"weeks",length:1,startFrom:e,previouslyRecurred:null}}}();return pe({},e,{lists:[].concat(Object(oe.a)(e.lists),[c]),activeListId:c.id});case Object(E.getType)(I.addTodoItem):var l=e.lists.filter(function(e){return e.id===t.payload.listId})[0];return l.items.push(t.payload.item),pe({},e,{lists:[].concat(Object(oe.a)(e.lists.filter(function(e){return e.id!==t.payload.listId})),[pe({},l,{items:Object(oe.a)(l.items)})])});case Object(E.getType)(I.deleteItem):var o=e.lists.filter(function(e){return e.id===t.payload.listId})[0];return pe({},e,{lists:[].concat(Object(oe.a)(e.lists.filter(function(e){return e.id!==t.payload.listId})),[pe({},o,{items:Object(oe.a)(o.items.filter(function(e){return e.id!==t.payload.itemId}))})])});case Object(E.getType)(I.updateItem):var u=e.lists.filter(function(e){return e.id===t.payload.listId})[0],d=t.payload.item;return pe({},e,{lists:[].concat(Object(oe.a)(e.lists.filter(function(e){return e.id!==t.payload.listId})),[pe({},u,{items:[].concat(Object(oe.a)(u.items.filter(function(e){return e.id!==d.id})),[d])})])});case Object(E.getType)(I.renameList):var m=e.lists.filter(function(e){return e.id===t.payload.listId})[0];return pe({},e,{lists:[].concat(Object(oe.a)(e.lists.filter(function(e){return e.id!==t.payload.listId})),[pe({},m,{listName:t.payload.name})])})}return e},function(){try{var e=window.localStorage.getItem("state");if(null==e)return;return JSON.parse(e,function(e,t){return"string"===typeof t&&/^\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d\d\dZ$/.test(t)?new Date(t):t})}catch(t){return void console.error(t)}}(),Object(ue.composeWithDevTools)());be.subscribe(function(){!function(e){var t=JSON.stringify(e);window.localStorage.setItem("state",t)}(be.getState())}),setInterval(function(){be.dispatch(I.resetRecuringItems())},5e3),s.a.render(r.a.createElement(f.a,{store:be},r.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},78:function(e){e.exports=JSON.parse('{"name":"recurring-todos","homepage":"https://sidola.github.io/recurring-todo-app/","version":"1.0.0","private":true,"dependencies":{"@types/jest":"24.0.18","@types/node":"12.7.4","@types/react":"16.9.2","@types/react-datepicker":"^2.9.1","@types/react-dom":"16.9.0","@types/react-redux":"^7.1.2","@types/reactstrap":"^8.0.4","@types/uuid":"^3.4.5","bootstrap":"^4.3.1","date-fns":"^2.1.0","node-sass":"^4.12.0","react":"^16.9.0","react-datepicker":"^2.9.6","react-dom":"^16.9.0","react-redux":"^7.1.1","react-scripts":"3.1.1","reactstrap":"^8.0.1","redux":"^4.0.4","timeago.js":"^4.0.0-beta.2","typesafe-actions":"^4.4.2","typescript":"3.6.2","uuid":"^3.3.3"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"redux-devtools-extension":"^2.13.8"}}')},80:function(e,t,n){e.exports=n(146)}},[[80,1,2]]]);
//# sourceMappingURL=main.90a37e19.chunk.js.map