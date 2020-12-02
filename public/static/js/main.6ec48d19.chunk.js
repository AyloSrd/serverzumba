(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){},130:function(e,t){},133:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=133},134:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){},137:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),a=n.n(s),r=n(63),o=n.n(r),i=n(9),l=n(15),j=n(16),d=n(19),u=n(18),h=n(64),b=n.n(h).a.create({baseURL:"https://cooode.herokuapp.com",withCredentials:!0});function m(e){if(e.response.data)throw console.log(e.response&&e.response.data),e;throw e}var x=function(e){return b.post("/api/auth/signup",e).then((function(e){return e.data})).catch(m)},O=function(e){return b.post("/api/auth/signin",e).then((function(e){return e.data})).catch(m)},p=function(){return b.get("/api/auth/isLoggedIn").then((function(e){return e.data})).catch(m)},f=function(){return b.get("/api/auth/logout").then((function(e){return e.data})).catch(m)},g=function(e){return b.get("/api/notes/all/".concat(e)).then((function(e){return e.data})).catch(m)},v=function(e){return b.post("/api/notes",e).then((function(e){return e.data})).catch(m)},C=function(e){return b.delete("/api/notes/".concat(e)).then((function(e){return e.data})).catch(m)},N=function(e){return b.get("/api/lessons/student/".concat(e)).then((function(e){return e.data})).catch(m)},y=function(e){return b.delete("/api/lessons/".concat(e)).then((function(e){return e.data})).catch(m)},w=a.a.createContext(),T=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={user:null,isLoggedIn:!1,isLoading:!0},e.setUser=function(t){e.setState({user:t,isLoggedIn:!0})},e.removeUser=function(){e.setState({user:null,isLoggedIn:!1})},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;p().then((function(t){e.setState({user:t,isLoggedIn:!0,isLoading:!1})})).catch((function(t){e.setState({user:null,isLoggedIn:!1,isLoading:!1})}))}},{key:"render",value:function(){var e={user:this.state.user,setUser:this.setUser,removeUser:this.removeUser,isLoggedIn:this.state.isLoggedIn,isLoading:this.state.isLoading};return Object(c.jsx)(w.Provider,{value:e,children:this.props.children})}}]),n}(s.Component),S=n(3),B=n(12),F=function(e){return function(t){return Object(c.jsx)(w.Consumer,{children:function(n){return Object(c.jsx)(e,Object(B.a)(Object(B.a)({},t),{},{context:n}))}})}},k=(n(91),F((function(e){var t=e.context;return Object(c.jsxs)("nav",{className:"NavMain Flex AlignCenterContent",children:[Object(c.jsx)(i.b,{exact:!0,to:"/",children:Object(c.jsxs)("h3",{className:"logo text",children:["C",Object(c.jsx)("span",{id:"logoO",children:"\xf6"}),"de"]})}),Object(c.jsxs)("ul",{className:"nav-list",children:[t.isLoggedIn&&Object(c.jsxs)(a.a.Fragment,{children:[Object(c.jsx)("li",{className:"Flex CenteredVHContent",children:Object(c.jsx)("li",{className:"Flex CenteredVHContent",children:Object(c.jsx)(i.b,{to:"/profile",children:Object(c.jsx)("div",{className:"NeuBtn Flex CenteredVHContent CTA",children:Object(c.jsx)("p",{children:t.user&&t.user.userName})})})})}),Object(c.jsx)("li",{className:"Flex CenteredVHContent",children:Object(c.jsx)("p",{onClick:function(){f().then((function(){t.removeUser()})).catch((function(e){console.log(e)}))},children:"Logout"})})]}),!t.isLoggedIn&&Object(c.jsxs)(a.a.Fragment,{children:[Object(c.jsx)("li",{className:"Flex CenteredVHContent",children:Object(c.jsx)(i.b,{to:"/signin",children:"Sign in"})}),Object(c.jsx)("li",{className:"Flex CenteredVHContent",children:Object(c.jsx)(i.b,{to:"/signup",children:Object(c.jsx)("div",{className:"NeuBtn CTA Flex CenteredVHContent",children:Object(c.jsx)("p",{children:"Sign up"})})})})]})]})]})}))),L=(n(96),function(){return Object(c.jsx)("div",{children:Object(c.jsxs)("header",{className:"Flex Column Header",children:[Object(c.jsx)("img",{src:"assets/header.png",alt:"https://unsplash.com/photos/KWrNwBE87EY?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"}),Object(c.jsx)("div",{id:"TitleHeader",children:Object(c.jsxs)("h1",{className:"WhiteText",children:["Live Interactive",Object(c.jsx)("br",{}),"Coding Lessons"]})}),Object(c.jsx)("div",{id:"SubtitleHeader",children:Object(c.jsx)("p",{id:"description",children:"C\xf6de is a modern school platform with a seamless coding experience. The integrated interactive editor and mini-browser, as well as the web-conference system, give a natural dimension to your academic journey"})})]})})}),I=(n(97),function(){return Object(c.jsxs)("section",{className:"ValueProposition",children:[Object(c.jsx)("h2",{className:"CenteredText WhiteText",children:"Learning Better and Faster"}),Object(c.jsxs)("div",{className:"Flex JustifyCenterContent AlignFlexStartContent",id:"valuePropositionContainer",children:[Object(c.jsxs)("article",{className:"Flex Column",children:[Object(c.jsx)("div",{className:"Card iconBig",children:Object(c.jsx)("div",{className:" Join"})}),Object(c.jsx)("h3",{className:"CenteredText WhiteText",children:"Join"}),Object(c.jsx)("p",{className:"Marginless CenteredText",children:"Join your favourite teacher on private e-classroom for live and interactive coding-lessons."})]}),Object(c.jsxs)("article",{className:"Flex Column",children:[Object(c.jsx)("div",{className:"Card iconBig",children:Object(c.jsx)("div",{className:"Learn"})}),Object(c.jsx)("h3",{className:"CenteredText WhiteText",children:"Learn"}),Object(c.jsx)("p",{className:"Marginless CenteredText",children:"You can pause at any time and experiment with the code. Then just hit play and resume the teacher's stream"})]}),Object(c.jsxs)("article",{className:"Flex Column",children:[Object(c.jsx)("div",{className:"Card iconBig",children:Object(c.jsx)("div",{className:"Relearn"})}),Object(c.jsx)("h3",{className:"CenteredText WhiteText",children:"Re-learn"}),Object(c.jsx)("p",{className:"Marginless CenteredText",children:"A save-button allows you to save entire code pieces and re-access them later, to maximize your learning experience"})]})]})]})}),D=(n(98),function(){return Object(c.jsx)("footer",{className:"FooterMain Flex CenteredVHContent",children:Object(c.jsx)("p",{className:"CenteredText",children:"Made by A\xfflo"})})}),A=(n(99),function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(L,{}),Object(c.jsx)("main",{children:Object(c.jsx)(I,{})}),Object(c.jsx)(D,{})]})}),H=n(17),M=(n(47),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={email:"",password:""},e.alertText=Object(s.createRef)(),e.handleChange=function(t){var n=t.target.name,c="file"===t.target.type?t.target.files[0]:"checkbox"===t.target.type?t.target.checked:t.target.value;e.setState(Object(H.a)({},n,c))},e.handleSubmit=function(t){t.preventDefault(),O(e.state).then((function(t){e.context.setUser(t),e.props.history.push("/profile")})).catch((function(t){console.log(t),e.alertText.current.style.display="block"}))},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{ref:this.alertText,style:{display:"none"},className:"Card BgTertiary AlertMsg",children:Object(c.jsxs)("p",{children:["Wrong credentials !",Object(c.jsx)("br",{}),"Please try again"]})}),Object(c.jsxs)("form",{className:"Flex Column AlignCenterContent InsetCard Form",onChange:this.handleChange,onSubmit:this.handleSubmit,children:[Object(c.jsx)("label",{htmlFor:"email",children:"Email"}),Object(c.jsx)("input",{className:"Input",type:"email",id:"email",name:"email"}),Object(c.jsx)("label",{htmlFor:"password",children:"Password"}),Object(c.jsx)("input",{className:"Input",type:"password",id:"password",name:"password"}),Object(c.jsx)("button",{className:"NeuBtn CTA",id:"SubmitBtn",children:"Submit"})]})]})}}]),n}(s.Component));M.contextType=w;var V=Object(S.g)(M),E=function(e){return Object(c.jsx)(V,{})},P=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={userName:"",email:"",password:"",role:"student"},e.alertText=Object(s.createRef)(),e.handleChange=function(t){var n="file"===t.target.type?t.target.files[0]:"checkbox"===t.target.type?t.target.checked:t.target.value,c=t.target.name;e.setState(Object(H.a)({},c,n))},e.handleSubmit=function(t){t.preventDefault(),x(e.state).then((function(t){e.context.setUser(t),console.log(t),e.props.history.push("/profile")})).catch((function(t){console.log(t),e.alertText.current.style.display="block"}))},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{ref:this.alertText,style:{display:"none"},className:"Card BgTertiary AlertMsg",children:Object(c.jsxs)("p",{children:["This email is already taken !",Object(c.jsx)("br",{}),"Please try again"]})}),Object(c.jsxs)("form",{className:"Flex Column AlignCenterContent InsetCard Form",onChange:this.handleChange,onSubmit:this.handleSubmit,children:[Object(c.jsx)("label",{htmlFor:"userName",children:"User name"}),Object(c.jsx)("input",{className:"Input",type:"text",id:"userName",name:"userName",onChange:this.handleChange}),Object(c.jsx)("label",{htmlFor:"email",children:"Email"}),Object(c.jsx)("input",{className:"Input",type:"email",id:"email",name:"email",onChange:this.handleChange}),Object(c.jsx)("label",{htmlFor:"password",children:"Password"}),Object(c.jsx)("input",{className:"Input",type:"password",id:"password",name:"password",onChange:this.handleChange}),Object(c.jsx)("label",{htmlFor:"password",children:"I am a ..."}),Object(c.jsx)("div",{className:"Select BgPrimary",children:Object(c.jsxs)("select",{className:"BgPrimary",name:"role",value:this.state.role,onChange:this.handleChange,children:[Object(c.jsx)("option",{value:"",children:"--Pleaseselect--"}),Object(c.jsx)("option",{value:"student",children:"Student"}),Object(c.jsx)("option",{value:"teacher",children:"Teacher"})]})}),Object(c.jsx)("button",{id:"SubmitBtn",className:"NeuBtn CTA",children:"Submit"})]})]})}}]),n}(s.Component);P.contextType=w;var W,R=Object(S.g)(P),U=function(e){return Object(c.jsx)(R,{})},_=n(66),J=F((function(e){var t=e.component,n=e.context,s=Object(_.a)(e,["component","context"]);return n.isLoading?null:n.isLoggedIn?Object(c.jsx)(S.b,Object(B.a)(Object(B.a)({},s),{},{render:function(e){return Object(c.jsx)(t,Object(B.a)({},e))}})):Object(c.jsx)(S.a,{to:"/signin"})})),Y=function(e,t,n){var c=e.props,s=t.room,a=t.code;c.history.push({pathname:n,state:{room:s,code:a}})},q={js:" ",react:'\n\t\t\t<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"><\/script>\n\t\t\t<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"><\/script>\n\t\t\t<script src="https://unpkg.com/babel-standalone@6/babel.min.js"><\/script>\n\t\t',vue:'\n\t\t\t<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>\n\t\t'},G={js:{html:'<h1 id="test">Yo, welcome to your Vanilla js</h1>',css:"h1 {\n\tcolor: #333;\n\tfont-family: 'Helvetica', sans-serif;\n\ttext-align: center;\n}",js:'document.getElementById("test").innerHTML += " lesson!"'},react:{html:'<div id="root"></div>',css:"h1 {\n\tcolor: #333;\n\tfont-family: 'Helvetica', sans-serif;\n\ttext-align: center;\n}",js:"const App = props => <h1>Yo,{props.welcome}</h1>\nReactDOM.render(<App welcome=\" welcome to your React lesson!\" />, document.getElementById('root'))\n"},vue:{html:'<h1 id="welcome">{{ welcome }}</h1>',css:"h1 {\n\tcolor: #333;\n\tfont-family: 'Helvetica', sans-serif;\n}",js:"new Vue({\n\tel: '#welcome',\n\tdata: {\n\t\twelcome: \"Yo, welcome to your Vue lesson\"\n\t}\n})"}},z=(n(100),function(e){var t=e.props,n=e.language,s=e.uuidv4;return console.log("card",t),Object(c.jsxs)("div",{className:"Flex Column CenteredVHContent LaunchLessonCard",children:[Object(c.jsx)("div",{className:"ImgContainer LaunchSessionImg",children:Object(c.jsx)("img",{src:"assets/".concat(n,"Logo.jpg"),alt:"".concat(n," logo")})}),Object(c.jsx)("button",{className:"NeuBtn LaunchLessonBtn",onClick:function(){return Y(t,{room:"".concat(n,"-lesson-").concat(s()),code:G[n]},"/desk")},children:"Launch lesson"})]})}),K=n(139),X=(n(101),function(e){var t=Object.keys(q);return console.log("section",e,t),Object(c.jsxs)("div",{className:"LaunchSessionSection",children:[Object(c.jsx)("div",{children:Object(c.jsx)("h2",{className:"CenteredText WhiteText",children:"Launch a new session"})}),Object(c.jsx)("div",{className:"Flex",children:t.map((function(t){return Object(c.jsx)(z,{props:e,language:t,uuidv4:K.a},t)}))})]})}),Q=n(2),Z=(n(102),function(e){var t=Object(s.useState)(""),n=Object(Q.a)(t,2),a=n[0],r=n[1];return Object(c.jsx)("div",{className:"JoinLesson Flex CenteredVHContent",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{className:"CenteredText WhiteText",children:"Join a new Lesson"}),Object(c.jsxs)("form",{className:"Flex Column FormContainer CenteredVHContent",onSubmit:function(t){var n=a.split("-")[0];t.preventDefault(),Y(e,{room:a,code:G[n]},"/desk")},children:[Object(c.jsx)("label",{htmlFor:"join-lesson",children:'Paste the Lesson Room and hit "Join"'}),Object(c.jsx)("input",{className:"Input",id:"join-lesson",type:"text",value:a,onChange:function(e){return r(e.target.value)},required:!0}),Object(c.jsx)("div",{id:"JoinBtn",children:Object(c.jsx)("input",{className:"NeuBtn CTA",type:"submit",value:"Join"})})]})]})})}),$=(n(48),function(e){var t=e.props,n=t.context.user._id;console.log("props",t);var a=Object(s.useState)(""),r=Object(Q.a)(a,2),o=r[0],i=r[1];return Object(s.useEffect)((function(){g(n).then((function(e){return i(e)})).catch((function(e){return console.error("student notes",e)}))}),[]),console.log(o),Object(c.jsxs)("div",{className:"TableSection Flex Column AlignCenterContent",children:[Object(c.jsx)("h2",{className:"CenteredText WhiteText",children:"Your notes"}),Object(c.jsx)("div",{className:"InsetCard TableContainer",id:"NotesTableContainer",children:Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{className:"text",children:"Topic"}),Object(c.jsx)("th",{className:"text",children:"Date"})]})}),Object(c.jsxs)("tbody",{children:[o[0]?o.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"text",children:e.library}),Object(c.jsx)("td",{className:"text",children:e.updated}),Object(c.jsx)("td",{children:Object(c.jsx)("button",{className:"NeuBtn IconBtn",id:"GoToBtn",onClick:function(){return n=e.lesson,c=e.html,s=e.css,a=e.js,void Y({props:t},{room:n,code:{html:c,css:s,js:a}},"/desk");var n,c,s,a},children:Object(c.jsx)("div",{className:"Code"})})}),Object(c.jsx)("td",{children:Object(c.jsx)("button",{className:"NeuBtn IconBtn",id:"DeleteBtn",onClick:function(){return function(e){console.log("id",e),C(e).then((function(e){console.log(e),i((function(t){return t.filter((function(t){return t._id!==e}))}))}))}(e._id)},children:Object(c.jsx)("div",{className:"Delete Flex CenteredVHContent",children:Object(c.jsx)("div",{className:"InnerDelete"})})})})]},e._id)})):Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"text",colSpan:"5",children:"You haven't coded yet"}),Object(c.jsx)("td",{}),Object(c.jsx)("td",{})]}),Object(c.jsx)("tr",{children:Object(c.jsx)("td",{})})]})]})})]})}),ee=function(e){var t=e.props,n=t.context.user,a=n._id,r=n.role;console.log("props",t);var o=Object(s.useState)(""),i=Object(Q.a)(o,2),l=i[0],j=i[1];return Object(s.useEffect)((function(){N(a).then((function(e){return j(e)})).catch((function(e){return console.error("student lessons",e)}))}),[]),console.log(l),Object(c.jsxs)("div",{className:"TableSection Flex Column AlignCenterContent",children:[Object(c.jsx)("h2",{className:"CenteredText WhiteText",children:"Your lessons"}),Object(c.jsx)("div",{className:"InsetCard TableContainer",id:"LessonsTableContainer",children:Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{className:"text",children:"Topic"}),Object(c.jsx)("th",{className:"text",children:"Teacher"}),Object(c.jsx)("th",{className:"text",children:"Date"})]})}),Object(c.jsxs)("tbody",{children:[l[0]?l.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"text",children:e.library}),Object(c.jsx)("td",{className:"text",children:e.teacher.userName}),Object(c.jsx)("td",{className:"text",children:e.updated}),Object(c.jsx)("td",{children:Object(c.jsx)("button",{className:"NeuBtn IconBtn",id:"GoToBtn",onClick:function(){return n=e.lesson,c=e.html,s=e.css,a=e.js,void Y({props:t},{room:n,code:{html:c,css:s,js:a}},"/desk");var n,c,s,a},children:Object(c.jsx)("div",{className:"Code"})})}),"teacher"===r&&Object(c.jsx)("td",{children:Object(c.jsx)("button",{className:"NeuBtn IconBtn",id:"DeleteBtn",onClick:function(){return function(e){console.log("id",e),y(e).then((function(e){console.log(e),j((function(t){return t.filter((function(t){return t._id!==e}))}))}))}(e._id)},children:Object(c.jsx)("div",{className:"Delete Flex CenteredVHContent",children:Object(c.jsx)("div",{className:"InnerDelete"})})})})]},e._id)})):Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"text",colSpan:"5",children:"You haven't coded yet"}),Object(c.jsx)("td",{}),Object(c.jsx)("td",{})]}),Object(c.jsx)("tr",{children:Object(c.jsx)("td",{})})]})]})})]})},te=(n(103),F((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("section",{className:"Welcome Flex CenteredVHContent",children:[Object(c.jsx)("img",{src:"assets/welcomeBg.jpeg",alt:""}),Object(c.jsxs)("h1",{className:"CenteredText WhiteText",children:["Welcome back, ",Object(c.jsx)("span",{id:"userName",children:e.context.user.userName}),"!"]})]}),"teacher"===e.context.user.role&&Object(c.jsx)(X,{props:e}),Object(c.jsx)(Z,{props:e}),"student"===e.context.user.role&&Object(c.jsx)($,{props:e}),Object(c.jsx)(ee,{props:e}),Object(c.jsx)(D,{})]})}))),ne=n(26),ce=(n(104),n(105),n(49),n(50),n(106),n(107),n(108),n(67)),se=function(e){var t=e.language,n=e.value,s=e.onChange,a=e.open;return Object(c.jsx)("div",{className:"editor-container ".concat(a?"":"collapsed"),children:Object(c.jsx)(ce.Controlled,{onBeforeChange:function(e,n,c){s(c,t)},value:n,className:"code-mirror-wrapper",options:{lineWrapping:!0,lint:!0,mode:t,theme:"material",lineNumbers:!0}})})},ae=function(e){var t=e.call,n=e.stream,a=e.teacher,r=Object(s.useRef)();return Object(s.useEffect)((function(){return t.answer(n),function(e,t){e.on("stream",(function(e){console.log("receaving streaming",e),t.current.srcObject=e}))}(t,r),function(){return t.close()}}),[]),Object(c.jsx)("div",{className:"Video ".concat(t.peer===a&&"BigVideo"),children:Object(c.jsx)("video",{playsInline:!0,ref:r,autoPlay:!0})})},re=(n(109),function(e){var t=e.srcDoc,n=e.lessonName,s=e.handleRunMinibrowser,a=e.sendRunMinibrowser;return Object(c.jsxs)("div",{className:"Minibrowser Flex Column SpaceBetween",children:[Object(c.jsxs)("div",{className:"Flex SpaceBetween AlignCenterContent",id:"BrowserHeader",children:[Object(c.jsx)("button",{className:"NeuBtn IconBtn",onClick:function(){s(),a()},id:"RunBtn",children:Object(c.jsx)("div",{className:"iconContainer",children:Object(c.jsx)("div",{className:"Run"})})}),Object(c.jsxs)("div",{className:"Flex AlignCenterContent",id:"LessonName",children:[Object(c.jsx)("p",{className:"text",children:"Lesson :"}),Object(c.jsx)("input",{className:"Input",readOnly:!0,value:n})]})]}),Object(c.jsx)("div",{className:"Card",id:"IframeContainer",children:Object(c.jsx)("iframe",{srcDoc:t,title:"output",sandbox:"allow-scripts",frameBorder:"0"})})]})}),oe=n(68),ie=n.n(oe),le=function(){console.log("Disconnecting socket..."),W&&W.disconnect()},je=function(e,t,n){W&&W.emit("coding",t,e,n)},de=function(e,t,n,c){W&&W.emit("changeTab",e,t,n,c)},ue=n(69),he=n.n(ue),be=(n(134),F((function(e){console.log("props",e);var t=e.context.user,n=t.userName,a=t.role,r=t._id,o=e.location.state,i=o.room,l=o.code,j=i.split("-"),d=Object(Q.a)(j,2),u=d[0],h=(d[1],Object(s.useState)(l.html)),b=Object(Q.a)(h,2),m=b[0],x=b[1],O=Object(s.useState)(l.css),p=Object(Q.a)(O,2),f=p[0],g=p[1],C=Object(s.useState)(l.js),N=Object(Q.a)(C,2),y=N[0],w=N[1],T=Object(s.useState)(!1),S=Object(Q.a)(T,2),B=S[0],F=S[1],k=Object(s.useState)(l.html),L=Object(Q.a)(k,2),I=L[0],D=L[1],A=Object(s.useState)(l.css),H=Object(Q.a)(A,2),M=H[0],V=H[1],E=Object(s.useState)(l.js),P=Object(Q.a)(E,2),R=P[0],U=P[1],_=Object(s.useState)(!0),J=Object(Q.a)(_,2),Y=J[0],G=J[1],z=Object(s.useState)(!1),K=Object(Q.a)(z,2),X=K[0],Z=K[1],$=Object(s.useState)(!1),ee=Object(Q.a)($,2),te=ee[0],ce=ee[1],oe=Object(s.useState)(""),ue=Object(Q.a)(oe,2),be=ue[0],me=ue[1],xe=Object(s.useState)(0),Oe=Object(Q.a)(xe,2),pe=Oe[0],fe=Oe[1],ge=Object(s.useRef)(),ve=Object(s.useState)(),Ce=Object(Q.a)(ve,2),Ne=Ce[0],ye=Ce[1],we=Object(s.useState)(),Te=Object(Q.a)(we,2),Se=Te[0],Be=Te[1],Fe=Object(s.useState)(""),ke=Object(Q.a)(Fe,2),Le=ke[0],Ie=ke[1],De=Object(s.useState)(null),Ae=Object(Q.a)(De,2),He=Ae[0],Me=Ae[1],Ve=Object(s.useState)([]),Ee=Object(Q.a)(Ve,2),Pe=Ee[0],We=Ee[1],Re=Object(s.useState)(!1),Ue=Object(Q.a)(Re,2),_e=(Ue[0],Ue[1]),Je=function(e,t){switch(t){case"xml":x(e),"teacher"===a&&je(i,{html:e,css:f,js:y},r);break;case"css":g(e),"teacher"===a&&je(i,{html:m,css:e,js:y},r);break;case"javascript":w(e),"teacher"===a&&je(i,{html:m,css:f,js:e},r);break;default:return}},Ye=function(){var e='\n\t\t\t<!DOCTYPE html>\n\t\t\t<html>\n\t\t\t<head>\n\t\t\t\t<meta charset="UTF-8">\n\t\t\t\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t\t\t\t<meta http-equiv="X-UA-Compatible" content="ie=edge">\n\t\t\t\t<title>HTML Document</title>\n\t\t\t\t'.concat(q[u],"\n\t\t\t\t<style>\n\t\t\t\t").concat(f,"\n\t\t\t\t</style>\n\t\t\t</head>\n\t\t\t<body>\n\t\t\t\t").concat(m,"\n\t\t\t</body>\n\t\t\t<script ").concat("react"===u?"type=text/babel":"",">\n\t\t\t\t").concat(y,"\n\t\t\t<\/script>\n\t\t\t</html>\n\t\t");me(e)},qe=function(e){switch(G(!1),Z(!1),ce(!1),e.target.name){case"htmlTab":G(!0),"teacher"===a&&de(i,!0,!1,!1);break;case"cssTab":Z(!0),"teacher"===a&&de(i,!1,!0,!1);break;case"jsTab":ce(!0),"teacher"===a&&de(i,!1,!1,!0);break;default:G(!0)}};return Object(s.useEffect)((function(){!function(e,t,n){(W=ie()("https://cooode.herokuapp.com"))&&e&&W.emit("join",e,t,n)}(i,r,a),function(e){if(!W)return!0;W.on("sendingCode",(function(t,n){console.log("Websocket event received (".concat(t,")! from ").concat(n)),e(t)}))}((function(e){D(e.html),V(e.css),U(e.js)})),function(e){W.on("connect",(function(){e(W.connected)}))}(_e),function(e){if(!W)return!0;W.on("teacher is",(function(t){return e(t)}))}(Be),function(e,t){W&&W.on("runMinibrowser",(function(n){console.log("".concat(n," just run de the minibrowser")),e(t+1)}))}(fe,pe),function(e,t,n){W&&W.on("changeTab",(function(c,s,a){e(c),t(s),n(a)}))}(G,Z,ce),function(e,t,n){navigator.mediaDevices.getUserMedia({video:{width:{ideal:320},height:{ideal:240}},audio:!0}).then((function(n){console.log("stream ready"),e.current&&(e.current.srcObject=n,t(n))}))}(ge,ye);var e=new he.a(void 0,{secure:!0,host:"peerjs-server-codeschool.herokuapp.com",port:443});return Ie(e),e.on("open",(function(e){console.log("peer id",e),Me(e)})),e.on("error",(function(e){console.log("error",e)})),function(e){W&&W.on("I quit",(function(t){e((function(e){return e.filter((function(e){return e.peer!==t}))}))}))}(We),le}),[]),Object(s.useEffect)((function(){B||(x(I),g(M),w(R),console.log("in useEffect",I,M,R))}),[I,M,R]),Object(s.useEffect)((function(){B||(x(I),g(M),w(R))}),[B]),Object(s.useEffect)(Ye,[pe]),Object(s.useEffect)((function(){He&&Ne&&(!function(e,t,n){W&&W.on("callMe",(function(c){var s=t.call(c,e);console.log("calling",c,s),n((function(e){return[].concat(Object(ne.a)(e),[s])}))}))}(Ne,Le,We),console.log("sending call request"),function(e,t){W&&W.emit("callMe",e,t)}(He,i),Le.on("call",(function(e){return We((function(t){return[].concat(Object(ne.a)(t),[e])}))})))}),[He,Ne]),console.log("peers"),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{id:"DeskContainer",className:"BgPrimary",children:[Object(c.jsxs)("div",{className:"panel",children:[Object(c.jsxs)("div",{className:"Flex AlignCenterContent SpaceBetween BgPrimary",id:"Tab",children:[Object(c.jsxs)("div",{className:"AlignCenterContent Flex",children:[Object(c.jsx)("button",{name:"htmlTab",className:"NeuBtn ".concat(Y?"Down":""),onClick:qe,children:"html"}),Object(c.jsx)("button",{name:"cssTab",className:"NeuBtn ".concat(X?"Down":""),onClick:qe,children:"css"}),Object(c.jsx)("button",{name:"jsTab",className:"NeuBtn ".concat(te?"Down":""),onClick:qe,children:"js"})]}),Object(c.jsx)("div",{className:"Flex",children:"student"===a&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{onClick:function(){F((function(e){return!e}))},className:"NeuBtn ".concat(B?"Down":""," IconBtn"),children:Object(c.jsx)("div",{className:"iconContainer",children:Object(c.jsx)("div",{className:B?"Play":"Pause"})})}),Object(c.jsx)("button",{id:"SaveBtn",onClick:function(){v({lesson:i,student:r,html:m,css:f,js:y,library:u}).then((function(e){return console.log(e)})).catch((function(e){return console.error(e)}))},className:"NeuBtn IconBtn",children:Object(c.jsx)("div",{className:"iconContainer",children:Object(c.jsx)("div",{className:"Save"})})})]})})]}),Object(c.jsxs)("div",{className:"Flex Column Card BgPrimary EditorsWrapper",children:[Object(c.jsx)(se,{language:"xml",value:m,onChange:Je,open:Y}),Object(c.jsx)(se,{language:"css",value:f,onChange:Je,open:X}),Object(c.jsx)(se,{language:"react"===u?"jsx":"javascript",value:y,onChange:Je,open:te})]})]}),Object(c.jsx)("div",{className:"panel",children:Object(c.jsx)(re,{srcDoc:be,lessonName:i,handleRunMinibrowser:Ye,sendRunMinibrowser:function(){"teacher"===a&&function(e,t){W&&W.emit("runMinibrowser",e,t)}(i,n)}})}),Object(c.jsxs)("div",{id:"VideoContainer",children:[Object(c.jsxs)("div",{className:"Video",children:[Object(c.jsx)("video",{playsInline:!0,controls:!0,muted:!0,ref:ge,autoPlay:!0}),Object(c.jsx)("h2",{children:He})]}),Pe.map((function(e,t){return Object(c.jsx)(ae,{call:e,stream:Ne,teacher:Se},t)}))]})]})})}))),me=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(k,{}),Object(c.jsxs)(S.d,{children:[Object(c.jsx)(S.b,{exact:!0,path:"/",component:A}),Object(c.jsx)(S.b,{exact:!0,path:"/signin",component:E}),Object(c.jsx)(S.b,{exact:!0,path:"/signup",component:U}),Object(c.jsx)(J,{exact:!0,path:"/desk",component:be}),Object(c.jsx)(J,{exact:!0,path:"/profile",component:te})]})]})};n(135),n(136);o.a.render(Object(c.jsx)(i.a,{children:Object(c.jsx)(T,{children:Object(c.jsx)(me,{})})}),document.getElementById("root"))},47:function(e,t,n){},48:function(e,t,n){},91:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[137,1,2]]]);
//# sourceMappingURL=main.6ec48d19.chunk.js.map