(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,n){e.exports={Chat:"Chat_Chat__3RhN7",chatHeader:"Chat_chatHeader__1JyAv"}},30:function(e,t,n){e.exports={Message:"Message_Message__2s4Xw"}},36:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),r=n(25),s=n.n(r),o=n(14),i=(n(36),n(31)),u=n(22),l=n.n(u),j=n(24),m=n(29),d=n(23),O=n.n(d),b=n(30),h=n.n(b),f=n(0),p=function(e){var t=e.userData;return Object(f.jsxs)("div",{className:h.a.Message,style:{display:"flex",flexDirection:"column",alignItems:"flex-start",margin:"10px 0 10px 0",padding:"10px",width:"18em",textAlign:"left",gap:"10px"},children:[Object(f.jsxs)("p",{style:{margin:"0"},children:[t.username," - ",t.time]}),Object(f.jsx)("p",{style:{margin:"0",fontSize:"16px",fontWeight:"bold"},children:t.message})]})};p.defaultProps={};var x=p,g=function(e){var t=e.socket,n=e.username,c=e.room,r=Object(a.useState)(""),s=Object(o.a)(r,2),i=s[0],u=s[1],d=Object(a.useState)([]),b=Object(o.a)(d,2),h=b[0],p=b[1],g=function(){var e=Object(m.a)(l.a.mark((function e(a){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a&&a.preventDefault(),!(i.length<1)){e.next=3;break}return e.abrupt("return");case 3:return r={username:n,room:c,message:i,time:function(){var e=(new Date).getHours(),t=(new Date).getMinutes();return t<10&&(t="0"+t),0===e?"12:".concat(t,"am"):e>12?"".concat(e-12,":").concat(t,"pm"):"".concat(e,":").concat(t,"am")}()},e.next=6,t.emit("send_message",r);case 6:r.username="me",console.log(h),p((function(e){return[].concat(Object(j.a)(e),[r])}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){t.on("receive_message",(function(e){console.log(h),p((function(t){return[].concat(Object(j.a)(t),[e])}))}))}),[t]),Object(f.jsxs)("div",{className:O.a.Chat,children:[Object(f.jsx)("div",{children:Object(f.jsxs)("h2",{className:O.a.chatHeader,children:[c," - Live Chat"]})}),Object(f.jsxs)("div",{className:"chat-footer",children:[Object(f.jsx)("input",{type:"text",placeholder:"Hey...",onChange:function(e){return u(e.target.value)},onKeyPress:function(e){return"Enter"===e.key&&g()}}),Object(f.jsx)("button",{onClick:g,children:"Send"})]}),Object(f.jsx)("div",{className:"chat-body",children:h.map((function(e,t){return Object(f.jsx)(x,{userData:e},t)}))})]})};g.defaultProps={};var _=g;console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_ENDPOINT);var v=i.a.connect(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_ENDPOINT);var S=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(o.a)(r,2),i=s[0],u=s[1],l=Object(a.useState)(""),j=Object(o.a)(l,2),m=j[0],d=j[1],O=function(e){if(e&&e.preventDefault(),!(i.length>0&&n.length>0))return console.log(":(");console.log("joined room: ",i),d(i),v.emit("join_room",i)};return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("form",{onSubmit:O,className:"form",children:Object(f.jsxs)("div",{className:"card",children:[Object(f.jsx)("h1",{className:"title",children:"Join a chat"}),Object(f.jsx)("label",{className:"name",htmlFor:"name",children:"Name"}),Object(f.jsx)("input",{id:"name",type:"text",className:"name-input",onChange:function(e){return c(e.target.value)}}),Object(f.jsx)("label",{className:"room",htmlFor:"room",children:"Room"}),Object(f.jsx)("input",{id:"room",type:"text",className:"room-input",onChange:function(e){return u(e.target.value)},onKeyPress:function(e){return"Enter"===e.key&&O()}}),Object(f.jsx)("button",{className:"join",children:"Join"})]})}),""!==m&&Object(f.jsx)(_,{socket:v,username:n,room:m})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(S,{})}),document.getElementById("root")),N()}},[[44,1,2]]]);
//# sourceMappingURL=main.8137b8ae.chunk.js.map