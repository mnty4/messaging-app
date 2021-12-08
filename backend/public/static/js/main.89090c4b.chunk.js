(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{131:function(e,t,n){e.exports={Chat:"Chat_Chat__25VjN",chatHeader:"Chat_chatHeader__2Uefm",chatBody:"Chat_chatBody__3eqgc",scrollToBottom:"Chat_scrollToBottom__1MSlx",messages:"Chat_messages__1JjJI"}},132:function(e,t,n){e.exports={Message:"Message_Message__yPjlz",MessageText:"Message_MessageText__3hpHD",MessageMeta:"Message_MessageMeta__2I-pf"}},133:function(e,t,n){e.exports={Messages:"Messages_Messages__YWTTt"}},136:function(e,t,n){e.exports={Rooms:"Rooms_Rooms__JGy-c",title:"Rooms_title__1aCCn",roomList:"Rooms_roomList__3fEKp"}},137:function(e,t,n){e.exports={Room:"Room_Room__bR0Lk"}},148:function(e,t,n){},154:function(e,t,n){e.exports={UsersTyping:"UsersTyping_UsersTyping__1_tSN"}},155:function(e,t,n){},208:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),r=n(126),o=n.n(r),c=n(31),i=n.n(c),l=n(44),u=n(7),j=(n(148),n(141)),m=n(67),b=n(131),d=n.n(b),f=n(132),h=n.n(f),p=n(217),x=n(1),g=function(e){var t=e.userData,n=e.isSelf;return Object(x.jsxs)(p.a,{className:"mb-2 px-2 py-1 "+(n&&"bg-primary"),style:n?{float:"right",width:"60%",color:"#FFF"}:{float:"left",width:"60%"},children:[Object(x.jsxs)(p.a.Text,{className:h.a.MessageMeta+" mb-2",style:{textAlign:"start"},children:[n?"me":t.username," - ",t.time]}),Object(x.jsx)(p.a.Text,{style:{textAlign:"start"},children:t.message})]})};g.defaultProps={};var O=g,_=n(211),v=n(218),y=n(216),C=n(212),k=(n(154),n(155),function(e){var t=e.usersTyping;return Object(x.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"20px",fontWeight:600},className:"mx-1",children:[Object(x.jsx)("div",{style:{color:"#9880ff"},children:1===t.length?t[0].username+" is typing":2===t.length?"".concat(t[0].username," and ").concat(t[1].username," are typing"):t.length>2?"".concat(t[0].username," and ").concat(t.length-1," others are typing"):void 0}),Object(x.jsx)("div",{className:"dot-elastic"})]})});k.defaultProps={};var N=k,R=n(133),M=n.n(R),w=n(140),J=(n(206),function(e){var t=e.messageList,n=e.socket,a=Object(s.useRef)(null);return Object(s.useEffect)((function(){console.log("rerender"),a.current.scrollIntoView({behavior:"smooth"})})),Object(x.jsxs)(w.a,{className:M.a.Messages+" mt-2 p-3",children:[t.map((function(e,t){return Object(x.jsx)(O,{userData:e,isSelf:n.id===e.id},t)})),Object(x.jsx)("div",{style:{float:"left"},ref:a})]})});J.defaultProps={};var S=J,T=function(e){var t=e.socket,n=e.username,a=e.room,r=Object(s.useState)([]),o=Object(u.a)(r,2),c=o[0],j=o[1],b=Object(s.useState)(""),f=Object(u.a)(b,2),h=f[0],p=f[1],g=Object(s.useState)([]),O=Object(u.a)(g,2),k=O[0],R=O[1],M=Object(s.useState)(!1),w=Object(u.a)(M,2),J=w[0],T=w[1],F=function(){var e=Object(l.a)(i.a.mark((function e(s){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s&&s.preventDefault(),!(h.length<1)){e.next=3;break}return e.abrupt("return");case 3:return r={id:t.id,username:n,room:a,message:h,time:function(){var e=(new Date).getHours(),t=(new Date).getMinutes();return t<10&&(t="0"+t),0===e?"12:".concat(t,"am"):e>12?"".concat(e-12,":").concat(t,"pm"):"".concat(e,":").concat(t,"am")}()},e.next=6,t.emit("send_message",r);case 6:j((function(e){return[].concat(Object(m.a)(e),[r])})),p("");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){t.on("receive_message",(function(e){j((function(t){return[].concat(Object(m.a)(t),[e])}))})),t.on("receive_typing",(function(e){R((function(t){return[].concat(Object(m.a)(t),[e])}))})),t.on("receive_cancel_typing",(function(e){R((function(t){return t.filter((function(t){return t.id!==e.id}))}))}))}),[t]),Object(s.useEffect)((function(){0===h.length&&(console.log("not typing"),t.emit("cancel_typing",{id:t.id,username:n,room:a}),T(!1))}),[h]),Object(x.jsxs)(_.a,{className:d.a.Chat,children:[Object(x.jsxs)("h2",{children:[a," - Live Chat"]}),Object(x.jsx)(S,{messageList:c,socket:t}),Object(x.jsx)("div",{style:{height:"24px"},className:"mb-1",children:k.length>0&&Object(x.jsx)(N,{usersTyping:k})}),Object(x.jsx)("div",{className:"mx-3",children:Object(x.jsxs)(v.a,{children:[Object(x.jsx)(y.a.Control,{type:"text",placeholder:"Hey...",onChange:function(e){p(e.target.value),J||(t.emit("typing",{id:t.id,username:n,room:a}),T(!0),console.log("isstyping"))},value:h,onKeyPress:function(e){return"Enter"===e.key&&F()}}),Object(x.jsx)(C.a,{variant:"primary",onClick:F,children:"Send"})]})})]})};T.defaultProps={};var F=T,L=n(66),P=n.n(L),E=n(213),H=n(135),I=function(e){var t=e.joinHandler,n=e.setRoom,s=e.setUsername,a=e.room,r=e.username;return Object(x.jsx)(_.a,{className:P.a.Join+" mb-4",children:Object(x.jsxs)(y.a,{onSubmit:t,className:P.a.Join,children:[Object(x.jsx)("h2",{className:P.a.title,children:"Join a Chat"}),Object(x.jsxs)(E.a,{children:[Object(x.jsx)(H.a,{lg:!0,children:Object(x.jsxs)(y.a.Group,{children:[Object(x.jsx)(y.a.Label,{children:"Username"}),Object(x.jsx)(y.a.Control,{required:!0,type:"text",onChange:function(e){return s(e.target.value)},value:r})]})}),Object(x.jsx)(H.a,{lg:!0,children:Object(x.jsxs)(y.a.Group,{children:[Object(x.jsx)(y.a.Label,{children:"Room"}),Object(x.jsx)(y.a.Control,{type:"text",onChange:function(e){return n(e.target.value)},value:a,onKeyPress:function(e){return"Enter"===e.key&&t()}})]})})]}),Object(x.jsx)(E.a,{className:"mb-3",children:Object(x.jsx)(y.a.Text,{className:"text-muted",children:"Enter a username and the room you wish to join or join a room directly below!"})}),Object(x.jsx)(C.a,{type:"submit",children:"Join"})]})})};I.defaultProps={};var D=I,U=n(136),B=n.n(U),G=n(137),K=n.n(G),Y=n(142),A=function(e){var t=e.room,n=e.count,a=e.join,r=e.joinedRoom,o=Object(s.useState)(!1),c=Object(u.a)(o,2),i=c[0],l=c[1];return Object(s.useEffect)((function(){l(r===t)}),[r,t]),Object(x.jsx)(Y.a,{className:"pb-3 pt-3",children:Object(x.jsxs)("div",{className:K.a.Room,children:[Object(x.jsx)("b",{children:t}),Object(x.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"1em"},children:[Object(x.jsxs)("div",{children:[n,"/300"]}),Object(x.jsx)(C.a,{disabled:i,onClick:function(){a(t)},children:"Join"})]})]})})};A.defaultProps={};var W=A,q=n(214),z=n(215),V=function(e){var t=e.rooms,n=e.refreshHandler,s=e.join,a=e.joinedRoom,r=e.onlineTotal,o=e.wheelIsGrey;return Object(x.jsxs)(_.a,{className:B.a.Rooms,children:[Object(x.jsx)("h2",{children:"Chat Rooms"}),Object(x.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"1em"},children:[Object(x.jsx)("div",{style:{backgroundColor:"green",width:"10px",height:"10px",borderRadius:"50%"}}),Object(x.jsx)("div",{style:{color:"green"},children:"".concat(r," User").concat(1!==r?"'s":""," Online")}),Object(x.jsx)(q.a,{size:32,onClick:n,style:o?{color:"grey"}:{cursor:"pointer"},className:"mt-1"})]}),Object(x.jsx)(z.a,{className:"mt-3",children:t.map((function(e,t){var n=Object(u.a)(e,2),r=n[0],o=n[1];return Object(x.jsx)(W,{room:r,count:o,join:s,joinedRoom:a},t)}))})]})};V.defaultProps={};var Q=V;n(207);console.log("https://ball-talk-1.herokuapp.com/");var X=j.a.connect("https://ball-talk-1.herokuapp.com/");var Z=function(){var e=Object(s.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(s.useState)(""),o=Object(u.a)(r,2),c=o[0],j=o[1],m=Object(s.useState)(""),b=Object(u.a)(m,2),d=b[0],f=b[1],h=Object(s.useState)([]),p=Object(u.a)(h,2),g=p[0],O=p[1],_=Object(s.useState)(1),v=Object(u.a)(_,2),y=v[0],C=v[1],k=Object(s.useState)(!1),N=Object(u.a)(k,2),R=N[0],M=N[1],w=function(){return n.length>0},J=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.preventDefault(),w()&&c.length>0){e.next=3;break}return e.abrupt("return",console.log(":("));case 3:return e.next=5,S(c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w()){e.next=2;break}return e.abrupt("return",console.log(":("));case 2:return console.log("joined room: ",t),e.next=5,X.emit("leave_room",d);case 5:return e.next=7,X.emit("join_room",t);case 7:f(t),j(""),T();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(!0),e.next=3,X.emit("refresh_room_info");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){X.on("receive_refreshed_room_info",(function(e){var t=e.rooms,n=e.total;O(t),C(n),M(!1)}))}),[]),Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("img",{src:"/images/ball-talk-logo-v1_edited.jpg",className:"logo mb-3",alt:"logo"}),Object(x.jsx)(D,{joinHandler:J,setRoom:j,setUsername:a,username:n,room:c}),Object(x.jsx)(Q,{refreshHandler:T,wheelIsGrey:R,rooms:g,join:S,joinedRoom:d,onlineTotal:y}),""!==d&&Object(x.jsx)(F,{socket:X,username:n,room:d})]})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,219)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),s(e),a(e),r(e),o(e)}))};o.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(Z,{})}),document.getElementById("root")),$()},66:function(e,t,n){e.exports={Join:"Join_Join__2YY5U",title:"Join_title__sRMLJ",username:"Join_username__3oTcL",usernameField:"Join_usernameField__2fSyd",room:"Join_room__HrtYD",roomField:"Join_roomField__dFK2b",submit:"Join_submit__306WB"}}},[[208,1,2]]]);
//# sourceMappingURL=main.89090c4b.chunk.js.map