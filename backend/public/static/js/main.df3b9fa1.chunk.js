(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{137:function(e,t,n){e.exports={Chat:"Chat_Chat__25VjN",chatHeader:"Chat_chatHeader__2Uefm",chatBody:"Chat_chatBody__3eqgc",scrollToBottom:"Chat_scrollToBottom__1MSlx",messages:"Chat_messages__1JjJI"}},196:function(e,t,n){e.exports={Message:"Message_Message__yPjlz",MessageText:"Message_MessageText__3hpHD",MessageMeta:"Message_MessageMeta__2I-pf"}},210:function(e,t,n){e.exports={Rooms:"Rooms_Rooms__JGy-c",title:"Rooms_title__1aCCn",roomList:"Rooms_roomList__3fEKp"}},211:function(e,t,n){e.exports={Room:"Room_Room__bR0Lk"}},222:function(e,t,n){},228:function(e,t,n){e.exports={UsersTyping:"UsersTyping_UsersTyping__1_tSN"}},229:function(e,t,n){},390:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(191),o=n.n(s),c=n(40),i=n.n(c),l=n(60),u=n(10),j=(n(222),n(215)),m=n(97),d=n(137),b=n.n(d),f=n(196),h=n.n(f),p=n(398),x=n(1),g=function(e){var t=e.userData,n=e.isSelf;return Object(x.jsxs)(p.a,{className:"mb-2 px-2 py-1 "+(n&&"bg-primary"),style:n?{alignSelf:"flex-end",width:"60%",color:"#FFF"}:{alignSelf:"flex-start",width:"60%"},children:[Object(x.jsxs)(p.a.Text,{className:h.a.MessageMeta+" mb-2",style:{textAlign:"start"},children:[n?"me":t.username," - ",t.time]}),Object(x.jsx)(p.a.Text,{style:{textAlign:"start"},children:t.message})]})};g.defaultProps={};var O=g,_=n(392),v=n(399),y=n(397),C=n(393),k=(n(228),n(229),function(e){var t=e.usersTyping;return Object(x.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"20px",fontWeight:600},className:"mx-1",children:[Object(x.jsx)("div",{style:{color:"#9880ff"},children:1===t.length?t[0].username+" is typing":2===t.length?"".concat(t[0].username," and ").concat(t[1].username," are typing"):t.length>2?"".concat(t[0].username," and ").concat(t.length-1," others are typing"):void 0}),Object(x.jsx)("div",{className:"dot-elastic"})]})});k.defaultProps={};var S=k,R=n(214),J=function(e){var t=e.socket,n=e.username,r=e.room,s=Object(a.useState)([]),o=Object(u.a)(s,2),c=o[0],j=o[1],d=Object(a.useState)(""),f=Object(u.a)(d,2),h=f[0],p=f[1],g=Object(a.useState)([]),k=Object(u.a)(g,2),J=k[0],N=k[1],w=Object(a.useState)(!1),M=Object(u.a)(w,2),T=M[0],F=M[1],P=function(){var e=Object(l.a)(i.a.mark((function e(a){var s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a&&a.preventDefault(),!(h.length<1)){e.next=3;break}return e.abrupt("return");case 3:return s={id:t.id,username:n,room:r,message:h,time:function(){var e=(new Date).getHours(),t=(new Date).getMinutes();return t<10&&(t="0"+t),0===e?"12:".concat(t,"am"):e>12?"".concat(e-12,":").concat(t,"pm"):"".concat(e,":").concat(t,"am")}()},e.next=6,t.emit("send_message",s);case 6:j((function(e){return[].concat(Object(m.a)(e),[s])})),p("");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){t.on("receive_message",(function(e){j((function(t){return[].concat(Object(m.a)(t),[e])}))})),t.on("receive_typing",(function(e){N((function(t){return[].concat(Object(m.a)(t),[e])}))})),t.on("receive_cancel_typing",(function(e){N((function(t){return t.filter((function(t){return t.id!==e.id}))}))}))}),[t]),Object(a.useEffect)((function(){0===h.length&&(console.log("not typing"),t.emit("cancel_typing",{id:t.id,username:n,room:r}),F(!1))}),[h]),Object(x.jsxs)(_.a,{className:b.a.Chat,children:[Object(x.jsxs)("h2",{children:[r," - Live Chat"]}),Object(x.jsx)("div",{style:{height:"24px"},children:J.length>0&&Object(x.jsx)(S,{usersTyping:J})}),Object(x.jsxs)(v.a,{children:[Object(x.jsx)(y.a.Control,{type:"text",placeholder:"Ur mum...",onChange:function(e){p(e.target.value),T||(t.emit("typing",{id:t.id,username:n,room:r}),F(!0),console.log("isstyping"))},value:h,onKeyPress:function(e){return"Enter"===e.key&&P()}}),Object(x.jsx)(C.a,{variant:"primary",onClick:P,children:"Send"})]}),Object(x.jsx)(R.a,{children:Object(x.jsx)("div",{className:b.a.messages+" mt-2",children:c.map((function(e,n){return Object(x.jsx)(O,{userData:e,isSelf:t.id===e.id},n)}))})})]})};J.defaultProps={};var N=J,w=n(96),M=n.n(w),T=n(394),F=n(209),P=function(e){var t=e.joinHandler,n=e.setRoom,a=e.setUsername,r=e.room,s=e.username;return Object(x.jsx)(_.a,{className:M.a.Join+" mb-4",children:Object(x.jsxs)(y.a,{onSubmit:t,className:M.a.Join,children:[Object(x.jsx)("h2",{className:M.a.title,children:"Join a Chat"}),Object(x.jsxs)(T.a,{children:[Object(x.jsx)(F.a,{lg:!0,children:Object(x.jsxs)(y.a.Group,{children:[Object(x.jsx)(y.a.Label,{children:"Username"}),Object(x.jsx)(y.a.Control,{required:!0,type:"text",onChange:function(e){return a(e.target.value)},value:s})]})}),Object(x.jsx)(F.a,{lg:!0,children:Object(x.jsxs)(y.a.Group,{children:[Object(x.jsx)(y.a.Label,{children:"Room"}),Object(x.jsx)(y.a.Control,{type:"text",onChange:function(e){return n(e.target.value)},value:r,onKeyPress:function(e){return"Enter"===e.key&&t()}})]})})]}),Object(x.jsx)(T.a,{className:"mb-3",children:Object(x.jsx)(y.a.Text,{className:"text-muted",children:"Enter a username and the room you wish to join or join a room directly below!"})}),Object(x.jsx)(C.a,{type:"submit",children:"Join"})]})})};P.defaultProps={};var L=P,U=n(210),D=n.n(U),E=n(211),H=n.n(E),I=n(216),B=function(e){var t=e.room,n=e.count,r=e.join,s=e.joinedRoom,o=Object(a.useState)(!1),c=Object(u.a)(o,2),i=c[0],l=c[1];return Object(a.useEffect)((function(){l(s===t)}),[s,t]),Object(x.jsx)(I.a,{className:"pb-3 pt-3",children:Object(x.jsxs)("div",{className:H.a.Room,children:[Object(x.jsx)("b",{children:t}),Object(x.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"1em"},children:[Object(x.jsxs)("div",{children:[n,"/300"]}),Object(x.jsx)(C.a,{disabled:i,onClick:function(){r(t)},children:"Join"})]})]})})};B.defaultProps={};var G=B,K=n(395),A=n(396),Y=function(e){var t=e.rooms,n=e.refreshHandler,a=e.join,r=e.joinedRoom,s=e.onlineTotal,o=e.wheelIsGrey;return Object(x.jsxs)(_.a,{className:D.a.Rooms,children:[Object(x.jsx)("h2",{children:"Chat Rooms"}),Object(x.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"1em"},children:[Object(x.jsx)("div",{style:{backgroundColor:"green",width:"10px",height:"10px",borderRadius:"50%"}}),Object(x.jsx)("div",{style:{color:"green"},children:"".concat(s," User").concat(1!==s?"'s":""," Online")}),Object(x.jsx)(K.a,{size:32,onClick:n,style:o?{color:"grey"}:{cursor:"pointer"},className:"mt-1"})]}),Object(x.jsx)(A.a,{className:"mt-3",children:t.map((function(e,t){var n=Object(u.a)(e,2),s=n[0],o=n[1];return Object(x.jsx)(G,{room:s,count:o,join:a,joinedRoom:r},t)}))})]})};Y.defaultProps={};var q=Y;n(389);console.log("https://ball-talk-1.herokuapp.com/");var z=j.a.connect("https://ball-talk-1.herokuapp.com/");var W=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(""),o=Object(u.a)(s,2),c=o[0],j=o[1],m=Object(a.useState)(""),d=Object(u.a)(m,2),b=d[0],f=d[1],h=Object(a.useState)([]),p=Object(u.a)(h,2),g=p[0],O=p[1],_=Object(a.useState)(1),v=Object(u.a)(_,2),y=v[0],C=v[1],k=Object(a.useState)(!1),S=Object(u.a)(k,2),R=S[0],J=S[1],w=function(){return n.length>0},M=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.preventDefault(),w()&&c.length>0){e.next=3;break}return e.abrupt("return",console.log(":("));case 3:return e.next=5,T(c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w()){e.next=2;break}return e.abrupt("return",console.log(":("));case 2:return console.log("joined room: ",t),e.next=5,z.emit("leave_room",b);case 5:return e.next=7,z.emit("join_room",t);case 7:f(t),j(""),F();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return J(!0),e.next=3,z.emit("refresh_room_info");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){z.on("receive_refreshed_room_info",(function(e){var t=e.rooms,n=e.total;O(t),C(n),J(!1)}))}),[]),Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("img",{src:"/images/ball-talk-logo-v1_edited.jpg",className:"logo mb-3",alt:"logo"}),Object(x.jsx)(L,{joinHandler:M,setRoom:j,setUsername:r,username:n,room:c}),Object(x.jsx)(q,{refreshHandler:F,wheelIsGrey:R,rooms:g,join:T,joinedRoom:b,onlineTotal:y}),""!==b&&Object(x.jsx)(N,{socket:z,username:n,room:b})]})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,400)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),s(e),o(e)}))};o.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(W,{})}),document.getElementById("root")),V()},96:function(e,t,n){e.exports={Join:"Join_Join__2YY5U",title:"Join_title__sRMLJ",username:"Join_username__3oTcL",usernameField:"Join_usernameField__2fSyd",room:"Join_room__HrtYD",roomField:"Join_roomField__dFK2b",submit:"Join_submit__306WB"}}},[[390,1,2]]]);
//# sourceMappingURL=main.df3b9fa1.chunk.js.map