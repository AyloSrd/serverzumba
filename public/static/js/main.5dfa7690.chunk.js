(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){},126:function(e,t){},129:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=129},130:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),a=n.n(s),r=n(61),o=n.n(r),i=n(9),l=n(15),j=n(16),d=n(19),u=n(18),b=n(62),h=n.n(b).a.create({baseURL:"https://cooode.herokuapp.com",withCredentials:!0});function m(e){if(e.response.data)throw console.log(e.response&&e.response.data),e;throw e}var x=function(e){return h.post("/api/auth/signup",e).then((function(e){return e.data})).catch(m)},O=function(e){return h.post("/api/auth/signin",e).then((function(e){return e.data})).catch(m)},p=function(){return h.get("/api/auth/isLoggedIn").then((function(e){return e.data})).catch(m)},f=function(){return h.get("/api/auth/logout").then((function(e){return e.data})).catch(m)},g=function(e){return h.get("/api/notes/all/".concat(e)).then((function(e){return e.data})).catch(m)},v=function(e){return h.post("/api/notes",e).then((function(e){return e.data})).catch(m)},N=function(e){return h.delete("/api/notes/".concat(e)).then((function(e){return e.data})).catch(m)},C=function(e){return h.get("/api/lessons/student/".concat(e)).then((function(e){return e.data})).catch(m)},y=function(e){return h.delete("/api/lessons/".concat(e)).then((function(e){return e.data})).catch(m)},w=a.a.createContext(),S=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={user:null,isLoggedIn:!1,isLoading:!0},e.setUser=function(t){e.setState({user:t,isLoggedIn:!0})},e.removeUser=function(){e.setState({user:null,isLoggedIn:!1})},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;p().then((function(t){e.setState({user:t,isLoggedIn:!0,isLoading:!1})})).catch((function(t){e.setState({user:null,isLoggedIn:!1,isLoading:!1})}))}},{key:"render",value:function(){var e={user:this.state.user,setUser:this.setUser,removeUser:this.removeUser,isLoggedIn:this.state.isLoggedIn,isLoading:this.state.isLoading};return Object(c.jsx)(w.Provider,{value:e,children:this.props.children})}}]),n}(s.Component),B=n(3),F=n(12),k=function(e){return function(t){return Object(c.jsx)(w.Consumer,{children:function(n){return Object(c.jsx)(e,Object(F.a)(Object(F.a)({},t),{},{context:n}))}})}},T=(n(89),k((function(e){var t=e.context;return Object(c.jsxs)("nav",{className:"NavMain Flex AlignCenterContent",children:[Object(c.jsx)(i.b,{exact:!0,to:"/",children:Object(c.jsxs)("h3",{className:"logo text",children:["C",Object(c.jsx)("span",{id:"logoO",children:"\xf6"}),"de"]})}),Object(c.jsxs)("ul",{className:"nav-list",children:[t.isLoggedIn&&Object(c.jsxs)(a.a.Fragment,{children:[Object(c.jsx)("li",{className:"Flex CenteredVHContent",children:Object(c.jsx)("li",{className:"Flex CenteredVHContent",children:Object(c.jsx)(i.b,{to:"/profile",children:Object(c.jsx)("div",{className:"NeuBtn Flex CenteredVHContent CTA",children:Object(c.jsx)("p",{children:t.user&&t.user.userName})})})})}),Object(c.jsx)("li",{className:"Flex CenteredVHContent",children:Object(c.jsx)("p",{onClick:function(){f().then((function(){t.removeUser()})).catch((function(e){console.log(e)}))},children:"Logout"})})]}),!t.isLoggedIn&&Object(c.jsxs)(a.a.Fragment,{children:[Object(c.jsx)("li",{className:"Flex CenteredVHContent",children:Object(c.jsx)(i.b,{to:"/signin",children:"Sign in"})}),Object(c.jsx)("li",{className:"Flex CenteredVHContent",children:Object(c.jsx)(i.b,{to:"/signup",children:Object(c.jsx)("div",{className:"NeuBtn CTA Flex CenteredVHContent",children:Object(c.jsx)("p",{children:"Sign up"})})})})]})]})]})}))),I=(n(94),function(){return Object(c.jsx)("footer",{className:"FooterMain Flex CenteredVHContent",children:Object(c.jsx)("p",{className:"CenteredText",children:"Made by A\xfflo"})})}),L=(n(95),function(){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("header",{className:"Flex Column CenteredVHContent",children:[Object(c.jsx)("div",{id:"TitleHeader",children:Object(c.jsxs)("h1",{className:"text",children:["Live Interactive",Object(c.jsx)("br",{}),"Coding Lessons"]})}),Object(c.jsx)("div",{id:"SubtitleHeader",children:Object(c.jsx)("p",{className:"CenteredText",id:"description",children:"C\xf6de is a modern school platform with a seamless coding experience. The integrated interactive editor and mini-browser, as well as the web-conference system, give a natural dimension to your academic journey"})})]}),Object(c.jsxs)("main",{children:[Object(c.jsx)("section",{id:"section-1"}),Object(c.jsxs)("section",{id:"section-3",children:[Object(c.jsx)("div",{children:Object(c.jsx)("h2",{className:"text",children:"Section 2"})}),Object(c.jsxs)("div",{className:"Flex JustifyCenterContent FlexStart",id:"valueProposition",children:[Object(c.jsxs)("article",{className:"Flex Column",children:[Object(c.jsx)("div",{className:"Card iconBig",children:Object(c.jsx)("div",{className:" Join"})}),Object(c.jsx)("h3",{className:"CenteredText",children:"Join"}),Object(c.jsx)("p",{className:"Marginless CenteredText",children:"Join your favourite teacher on private e-classroom for live and interactive coding-lessons."})]}),Object(c.jsxs)("article",{className:"Flex Column",children:[Object(c.jsx)("div",{className:"Card iconBig",children:Object(c.jsx)("div",{className:"Learn"})}),Object(c.jsx)("h3",{className:"CenteredText",children:"Learn"}),Object(c.jsx)("p",{className:"Marginless CenteredText",children:"You can pause at any time and experiment with the code. Then just hit play and resume the teacher's stream"})]}),Object(c.jsxs)("article",{className:"Flex Column",children:[Object(c.jsx)("div",{className:"Card iconBig",children:Object(c.jsx)("div",{className:"Relearn"})}),Object(c.jsx)("h3",{className:"CenteredText",children:"Re-learn"}),Object(c.jsx)("p",{className:"Marginless CenteredText",children:"A save-button allows you to save entire code pieces and re-access them later, to maximize your learning experience"})]})]})]})]}),Object(c.jsx)(I,{})]})}),D=n(17),H=(n(47),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={email:"",password:""},e.handleChange=function(t){var n=t.target.name,c="file"===t.target.type?t.target.files[0]:"checkbox"===t.target.type?t.target.checked:t.target.value;e.setState(Object(D.a)({},n,c))},e.handleSubmit=function(t){t.preventDefault(),O(e.state).then((function(t){e.context.setUser(t),e.props.history.push("/")})).catch((function(e){console.log(e)}))},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("form",{className:"Flex Column AlignCenterContent InsetCard Form",onChange:this.handleChange,onSubmit:this.handleSubmit,children:[Object(c.jsx)("label",{htmlFor:"email",children:"Email"}),Object(c.jsx)("input",{className:"Input",type:"email",id:"email",name:"email"}),Object(c.jsx)("label",{htmlFor:"password",children:"Password"}),Object(c.jsx)("input",{className:"Input",type:"password",id:"password",name:"password"}),Object(c.jsx)("button",{className:"NeuBtn CTA",id:"SubmitBtn",children:"Submit"})]})}}]),n}(s.Component));H.contextType=w;var A=Object(B.g)(H),M=function(e){return Object(c.jsx)(A,{})},V=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={userName:"",email:"",password:"",role:"student"},e.alertText=Object(s.createRef)(),e.handleChange=function(t){var n="file"===t.target.type?t.target.files[0]:"checkbox"===t.target.type?t.target.checked:t.target.value,c=t.target.name;e.setState(Object(D.a)({},c,n))},e.handleSubmit=function(t){t.preventDefault(),x(e.state).then((function(t){e.context.setUser(t),console.log(t),e.props.history.push("/")})).catch((function(t){console.log(t),e.alertText.current.style.display="block"}))},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{ref:this.alertText,style:{display:"none"},className:"Card",children:Object(c.jsxs)("p",{children:["This email is already taken !",Object(c.jsx)("br",{}),"Please try again"]})}),Object(c.jsxs)("form",{className:"Flex Column AlignCenterContent InsetCard Form",onChange:this.handleChange,onSubmit:this.handleSubmit,children:[Object(c.jsx)("label",{htmlFor:"userName",children:"User name"}),Object(c.jsx)("input",{className:"Input",type:"text",id:"userName",name:"userName",onChange:this.handleChange}),Object(c.jsx)("label",{htmlFor:"email",children:"Email"}),Object(c.jsx)("input",{className:"Input",type:"email",id:"email",name:"email",onChange:this.handleChange}),Object(c.jsx)("label",{htmlFor:"password",children:"Password"}),Object(c.jsx)("input",{className:"Input",type:"password",id:"password",name:"password",onChange:this.handleChange}),Object(c.jsx)("label",{htmlFor:"password",children:"I am a ..."}),Object(c.jsx)("div",{className:"Select BgPrimary",children:Object(c.jsxs)("select",{className:"BgPrimary",name:"role",value:this.state.role,onChange:this.handleChange,children:[Object(c.jsx)("option",{value:"",children:"--Pleaseselect--"}),Object(c.jsx)("option",{value:"student",children:"Student"}),Object(c.jsx)("option",{value:"teacher",children:"Teacher"})]})}),Object(c.jsx)("button",{id:"SubmitBtn",className:"NeuBtn CTA",children:"Submit"})]})]})}}]),n}(s.Component);V.contextType=w;var E,P=Object(B.g)(V),U=function(e){return Object(c.jsx)(P,{})},R=n(64),_=k((function(e){var t=e.component,n=e.context,s=Object(R.a)(e,["component","context"]);return n.isLoading?null:n.isLoggedIn?Object(c.jsx)(B.b,Object(F.a)(Object(F.a)({},s),{},{render:function(e){return Object(c.jsx)(t,Object(F.a)({},e))}})):Object(c.jsx)(B.a,{to:"/signin"})})),J=function(e,t,n){var c=e.props,s=t.room,a=t.code;c.history.push({pathname:n,state:{room:s,code:a}})},Y={js:" ",react:'\n\t\t\t<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"><\/script>\n\t\t\t<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"><\/script>\n\t\t\t<script src="https://unpkg.com/babel-standalone@6/babel.min.js"><\/script>\n\t\t',vue:'\n\t\t\t<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>\n\t\t'},q={js:{html:'<h1 id="test">Yo, welcome to your Vanilla js</h1>',css:"h1 {\n\tcolor: #333;\n\tfont-family: 'Helvetica', sans-serif;\n\ttext-align: center;\n}",js:'document.getElementById("test").innerHTML += " lesson!"'},react:{html:'<div id="root"></div>',css:"h1 {\n\tcolor: #333;\n\tfont-family: 'Helvetica', sans-serif;\n\ttext-align: center;\n}",js:"const App = props => <h1>Yo,{props.welcome}</h1>\nReactDOM.render(<App welcome=\" welcome to your React lesson!\" />, document.getElementById('root'))\n"},vue:{html:'<h1 id="welcome">{{ welcome }}</h1>',css:"h1 {\n\tcolor: #333;\n\tfont-family: 'Helvetica', sans-serif;\n}",js:"new Vue({\n\tel: '#welcome',\n\tdata: {\n\t\twelcome: \"Yo, welcome to your Vue lesson\"\n\t}\n})"}},W=(n(96),function(e){var t=e.props,n=e.language,s=e.uuidv4;return console.log("card",t),Object(c.jsxs)("div",{className:"Flex Column CenteredVHContent LaunchLessonCard",children:[Object(c.jsx)("div",{className:"ImgContainer LaunchSessionImg",children:Object(c.jsx)("img",{src:"assets/".concat(n,"Logo.jpg"),alt:"".concat(n," logo")})}),Object(c.jsx)("button",{className:"NeuBtn LaunchLessonBtn",onClick:function(){return J(t,{room:"".concat(n,"-lesson-").concat(s()),code:q[n]},"/desk")},children:"Launch lesson"})]})}),G=n(135),z=function(e){var t=Object.keys(Y);return console.log("section",e,t),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:Object(c.jsx)("h2",{children:"Launch a new session"})}),Object(c.jsx)("div",{className:"Flex",children:t.map((function(t){return Object(c.jsx)(W,{props:e,language:t,uuidv4:G.a},t)}))})]})},X=n(2),K=(n(97),function(e){var t=Object(s.useState)(""),n=Object(X.a)(t,2),a=n[0],r=n[1];return Object(c.jsx)("div",{className:"Flex CenteredVHContent",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{className:"text CenteredText subH2",children:"Join a new Lesson"}),Object(c.jsx)("p",{className:"text CenteredText subH2",children:'Paste the Lesson Room and hit "Join"'}),Object(c.jsxs)("form",{className:"Flex Column FormContainer CenteredVHContent",onSubmit:function(t){var n=a.split("-")[0];t.preventDefault(),J(e,{room:a,code:q[n]},"/desk")},children:[Object(c.jsx)("input",{className:"Input",type:"text",value:a,onChange:function(e){return r(e.target.value)},required:!0}),Object(c.jsx)("div",{id:"JoinBtn",children:Object(c.jsx)("input",{className:"NeuBtn",type:"submit",value:"Join lesson"})})]})]})})}),Q=(n(48),function(e){var t=e.props,n=t.context.user._id;console.log("props",t);var a=Object(s.useState)(""),r=Object(X.a)(a,2),o=r[0],i=r[1];return Object(s.useEffect)((function(){g(n).then((function(e){return i(e)})).catch((function(e){return console.error("student notes",e)}))}),[]),console.log(o),Object(c.jsxs)("div",{className:"Flex Column AlignCenterContent",children:[Object(c.jsx)("h1",{className:"text",children:"Your notes"}),Object(c.jsx)("div",{className:"InsetCard TableContainer",id:"NotesTableContainer",children:Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{className:"text",children:"Topic"}),Object(c.jsx)("th",{className:"text",children:"Date"})]})}),Object(c.jsxs)("tbody",{children:[o[0]?o.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"text",children:e.library}),Object(c.jsx)("td",{className:"text",children:e.updated}),Object(c.jsx)("td",{children:Object(c.jsx)("button",{className:"NeuBtn IconBtn",id:"GoToBtn",onClick:function(){return n=e.lesson,c=e.html,s=e.css,a=e.js,void J({props:t},{room:n,code:{html:c,css:s,js:a}},"/desk");var n,c,s,a},children:Object(c.jsx)("div",{className:"Code"})})}),Object(c.jsx)("td",{children:Object(c.jsx)("button",{className:"NeuBtn IconBtn",id:"DeleteBtn",onClick:function(){return function(e){console.log("id",e),N(e).then((function(e){console.log(e),i((function(t){return t.filter((function(t){return t._id!==e}))}))}))}(e._id)},children:Object(c.jsx)("div",{className:"Delete Flex CenteredVHContent",children:Object(c.jsx)("div",{className:"InnerDelete"})})})})]},e._id)})):Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"text",colSpan:"5",children:"You haven't coded yet"}),Object(c.jsx)("td",{}),Object(c.jsx)("td",{})]}),Object(c.jsx)("tr",{children:Object(c.jsx)("td",{})})]})]})})]})}),Z=function(e){var t=e.props,n=t.context.user,a=n._id,r=n.role;console.log("props",t);var o=Object(s.useState)(""),i=Object(X.a)(o,2),l=i[0],j=i[1];return Object(s.useEffect)((function(){C(a).then((function(e){return j(e)})).catch((function(e){return console.error("student lessons",e)}))}),[]),console.log(l),Object(c.jsxs)("div",{className:"Flex Column AlignCenterContent",children:[Object(c.jsx)("h1",{className:"text",children:"Your lessons"}),Object(c.jsx)("div",{className:"InsetCard TableContainer",id:"LessonsTableContainer",children:Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{className:"text",children:"Topic"}),Object(c.jsx)("th",{className:"text",children:"Teacher"}),Object(c.jsx)("th",{className:"text",children:"Date"})]})}),Object(c.jsxs)("tbody",{children:[l[0]?l.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"text",children:e.library}),Object(c.jsx)("td",{className:"text",children:e.teacher.userName}),Object(c.jsx)("td",{className:"text",children:e.updated}),Object(c.jsx)("td",{children:Object(c.jsx)("button",{className:"NeuBtn IconBtn",id:"GoToBtn",onClick:function(){return n=e.lesson,c=e.html,s=e.css,a=e.js,void J({props:t},{room:n,code:{html:c,css:s,js:a}},"/desk");var n,c,s,a},children:Object(c.jsx)("div",{className:"Code"})})}),"teacher"===r&&Object(c.jsx)("td",{children:Object(c.jsx)("button",{className:"NeuBtn IconBtn",id:"DeleteBtn",onClick:function(){return function(e){console.log("id",e),y(e).then((function(e){console.log(e),j((function(t){return t.filter((function(t){return t._id!==e}))}))}))}(e._id)},children:Object(c.jsx)("div",{className:"Delete Flex CenteredVHContent",children:Object(c.jsx)("div",{className:"InnerDelete"})})})})]},e._id)})):Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"text",colSpan:"5",children:"You haven't coded yet"}),Object(c.jsx)("td",{}),Object(c.jsx)("td",{})]}),Object(c.jsx)("tr",{children:Object(c.jsx)("td",{})})]})]})})]})},$=(n(98),k((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("h1",{className:"text",children:["Welcome back, ",Object(c.jsx)("span",{id:"userName",children:e.context.user.userName}),"!"]}),"teacher"===e.context.user.role&&Object(c.jsx)(z,{props:e}),Object(c.jsx)(K,{props:e}),"student"===e.context.user.role&&Object(c.jsx)(Q,{props:e}),Object(c.jsx)(Z,{props:e}),Object(c.jsx)(I,{})]})}))),ee=n(26),te=(n(99),n(100),n(101),n(102),n(103),n(104),n(65)),ne=function(e){var t=e.language,n=e.value,s=e.onChange,a=e.open;return Object(c.jsx)("div",{className:"editor-container ".concat(a?"":"collapsed"),children:Object(c.jsx)(te.Controlled,{onBeforeChange:function(e,n,c){s(c,t)},value:n,className:"code-mirror-wrapper",options:{lineWrapping:!0,lint:!0,mode:t,theme:"material",lineNumbers:!0}})})},ce=function(e){var t=e.call,n=e.stream,a=e.teacher,r=Object(s.useRef)();return Object(s.useEffect)((function(){return t.answer(n),function(e,t){e.on("stream",(function(e){console.log("receaving streaming",e),t.current.srcObject=e}))}(t,r),function(){return t.close()}}),[]),Object(c.jsx)("div",{className:"Video ".concat(t.peer===a&&"BigVideo"),children:Object(c.jsx)("video",{playsInline:!0,ref:r,autoPlay:!0})})},se=(n(105),function(e){var t=e.srcDoc,n=e.lessonName,s=e.handleRunMinibrowser,a=e.sendRunMinibrowser;return Object(c.jsxs)("div",{className:"Minibrowser Flex Column SpaceBetween",children:[Object(c.jsxs)("div",{className:"Flex SpaceBetween AlignCenterContent",id:"BrowserHeader",children:[Object(c.jsx)("button",{className:"NeuBtn IconBtn",onClick:function(){s(),a()},id:"RunBtn",children:Object(c.jsx)("div",{className:"iconContainer",children:Object(c.jsx)("div",{className:"Run"})})}),Object(c.jsxs)("div",{className:"Flex AlignCenterContent",id:"LessonName",children:[Object(c.jsx)("p",{className:"text",children:"Lesson :"}),Object(c.jsx)("input",{className:"Input",readOnly:!0,value:n})]})]}),Object(c.jsx)("div",{className:"Card",id:"IframeContainer",children:Object(c.jsx)("iframe",{srcDoc:t,title:"output",sandbox:"allow-scripts",frameBorder:"0"})})]})}),ae=n(66),re=n.n(ae),oe=function(){console.log("Disconnecting socket..."),E&&E.disconnect()},ie=function(e,t,n){E&&E.emit("coding",t,e,n)},le=function(e,t,n,c){E&&E.emit("changeTab",e,t,n,c)},je=n(67),de=n.n(je),ue=(n(130),k((function(e){console.log("props",e);var t=e.context.user,n=t.userName,a=t.role,r=t._id,o=e.location.state,i=o.room,l=o.code,j=i.split("-"),d=Object(X.a)(j,2),u=d[0],b=(d[1],Object(s.useState)(l.html)),h=Object(X.a)(b,2),m=h[0],x=h[1],O=Object(s.useState)(l.css),p=Object(X.a)(O,2),f=p[0],g=p[1],N=Object(s.useState)(l.js),C=Object(X.a)(N,2),y=C[0],w=C[1],S=Object(s.useState)(!1),B=Object(X.a)(S,2),F=B[0],k=B[1],T=Object(s.useState)(l.html),I=Object(X.a)(T,2),L=I[0],D=I[1],H=Object(s.useState)(l.css),A=Object(X.a)(H,2),M=A[0],V=A[1],P=Object(s.useState)(l.js),U=Object(X.a)(P,2),R=U[0],_=U[1],J=Object(s.useState)(!0),q=Object(X.a)(J,2),W=q[0],G=q[1],z=Object(s.useState)(!1),K=Object(X.a)(z,2),Q=K[0],Z=K[1],$=Object(s.useState)(!1),te=Object(X.a)($,2),ae=te[0],je=te[1],ue=Object(s.useState)(""),be=Object(X.a)(ue,2),he=be[0],me=be[1],xe=Object(s.useState)(0),Oe=Object(X.a)(xe,2),pe=Oe[0],fe=Oe[1],ge=Object(s.useRef)(),ve=Object(s.useState)(),Ne=Object(X.a)(ve,2),Ce=Ne[0],ye=Ne[1],we=Object(s.useState)(),Se=Object(X.a)(we,2),Be=Se[0],Fe=Se[1],ke=Object(s.useState)(""),Te=Object(X.a)(ke,2),Ie=Te[0],Le=Te[1],De=Object(s.useState)(null),He=Object(X.a)(De,2),Ae=He[0],Me=He[1],Ve=Object(s.useState)([]),Ee=Object(X.a)(Ve,2),Pe=Ee[0],Ue=Ee[1],Re=Object(s.useState)(!1),_e=Object(X.a)(Re,2),Je=(_e[0],_e[1]),Ye=function(e,t){switch(t){case"xml":x(e),"teacher"===a&&ie(i,{html:e,css:f,js:y},r);break;case"css":g(e),"teacher"===a&&ie(i,{html:m,css:e,js:y},r);break;case"javascript":w(e),"teacher"===a&&ie(i,{html:m,css:f,js:e},r);break;default:return}},qe=function(){var e='\n\t\t\t<!DOCTYPE html>\n\t\t\t<html>\n\t\t\t<head>\n\t\t\t\t<meta charset="UTF-8">\n\t\t\t\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t\t\t\t<meta http-equiv="X-UA-Compatible" content="ie=edge">\n\t\t\t\t<title>HTML Document</title>\n\t\t\t\t'.concat(Y[u],"\n\t\t\t\t<style>\n\t\t\t\t").concat(f,"\n\t\t\t\t</style>\n\t\t\t</head>\n\t\t\t<body>\n\t\t\t\t").concat(m,"\n\t\t\t</body>\n\t\t\t<script ").concat("react"===u?"type=text/babel":"",">\n\t\t\t\t").concat(y,"\n\t\t\t<\/script>\n\t\t\t</html>\n\t\t");me(e)},We=function(e){switch(G(!1),Z(!1),je(!1),e.target.name){case"htmlTab":G(!0),le(i,!0,!1,!1);break;case"cssTab":Z(!0),le(i,!1,!0,!1);break;case"jsTab":je(!0),le(i,!1,!1,!0);break;default:G(!0)}};return Object(s.useEffect)((function(){!function(e,t,n){(E=re()("https://cooode.herokuapp.com"))&&e&&E.emit("join",e,t,n)}(i,r,a),function(e){if(!E)return!0;E.on("sendingCode",(function(t,n){console.log("Websocket event received (".concat(t,")! from ").concat(n)),e(t)}))}((function(e){D(e.html),V(e.css),_(e.js)})),function(e){E.on("connect",(function(){e(E.connected)}))}(Je),function(e){if(!E)return!0;E.on("teacher is",(function(t){return e(t)}))}(Fe),function(e,t){E&&E.on("runMinibrowser",(function(n){console.log("".concat(n," just run de the minibrowser")),e(t+1)}))}(fe,pe),function(e,t,n){E&&E.on("changeTab",(function(c,s,a){e(c),t(s),n(a)}))}(G,Z,je),function(e,t,n){navigator.mediaDevices.getUserMedia({video:{width:{ideal:320},height:{ideal:240}},audio:!0}).then((function(n){console.log("stream ready"),e.current&&(e.current.srcObject=n,t(n))}))}(ge,ye);var e=new de.a(void 0,{secure:!0,host:"peerjs-server-codeschool.herokuapp.com",port:443});return Le(e),e.on("open",(function(e){console.log("peer id",e),Me(e)})),e.on("error",(function(e){console.log("error",e)})),function(e){E&&E.on("I quit",(function(t){e((function(e){return e.filter((function(e){return e.peer!==t}))}))}))}(Ue),oe}),[]),Object(s.useEffect)((function(){F||(x(L),g(M),w(R),console.log("in useEffect",L,M,R))}),[L,M,R]),Object(s.useEffect)((function(){F||(x(L),g(M),w(R))}),[F]),Object(s.useEffect)(qe,[pe]),Object(s.useEffect)((function(){Ae&&Ce&&(!function(e,t,n){E&&E.on("callMe",(function(c){var s=t.call(c,e);console.log("calling",c,s),n((function(e){return[].concat(Object(ee.a)(e),[s])}))}))}(Ce,Ie,Ue),console.log("sending call request"),function(e,t){E&&E.emit("callMe",e,t)}(Ae,i),Ie.on("call",(function(e){return Ue((function(t){return[].concat(Object(ee.a)(t),[e])}))})))}),[Ae,Ce]),console.log("peers"),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{id:"DeskContainer",className:"BgPrimary",children:[Object(c.jsxs)("div",{className:"panel",children:[Object(c.jsxs)("div",{className:"Flex AlignCenterContent SpaceBetween BgPrimary",id:"Tab",children:[Object(c.jsxs)("div",{className:"AlignCenterContent Flex",children:[Object(c.jsx)("button",{name:"htmlTab",className:"NeuBtn ".concat(W?"Down":""),onClick:We,children:"html"}),Object(c.jsx)("button",{name:"cssTab",className:"NeuBtn ".concat(Q?"Down":""),onClick:We,children:"css"}),Object(c.jsx)("button",{name:"jsTab",className:"NeuBtn ".concat(ae?"Down":""),onClick:We,children:"js"})]}),Object(c.jsx)("div",{className:"Flex",children:"student"===a&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{onClick:function(){k((function(e){return!e}))},className:"NeuBtn ".concat(F?"Down":""," IconBtn"),children:Object(c.jsx)("div",{className:"iconContainer",children:Object(c.jsx)("div",{className:F?"Play":"Pause"})})}),Object(c.jsx)("button",{id:"SaveBtn",onClick:function(){v({lesson:i,student:r,html:m,css:f,js:y,library:u}).then((function(e){return console.log(e)})).catch((function(e){return console.error(e)}))},className:"NeuBtn IconBtn",children:Object(c.jsx)("div",{className:"iconContainer",children:Object(c.jsx)("div",{className:"Save"})})})]})})]}),Object(c.jsxs)("div",{className:"Flex Column Card BgPrimary EditorsWrapper",children:[Object(c.jsx)(ne,{language:"xml",value:m,onChange:Ye,open:W}),Object(c.jsx)(ne,{language:"css",value:f,onChange:Ye,open:Q}),Object(c.jsx)(ne,{language:"javascript",value:y,onChange:Ye,open:ae})]})]}),Object(c.jsx)("div",{className:"panel",children:Object(c.jsx)(se,{srcDoc:he,lessonName:i,handleRunMinibrowser:qe,sendRunMinibrowser:function(){!function(e,t){E&&E.emit("runMinibrowser",e,t)}(i,n)}})}),Object(c.jsxs)("div",{id:"VideoContainer",children:[Object(c.jsxs)("div",{className:"Video",children:[Object(c.jsx)("video",{playsInline:!0,controls:!0,muted:!0,ref:ge,autoPlay:!0}),Object(c.jsx)("h2",{children:Ae})]}),Pe.map((function(e,t){return Object(c.jsx)(ce,{call:e,stream:Ce,teacher:Be},t)}))]})]})})}))),be=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(T,{}),Object(c.jsxs)(B.d,{children:[Object(c.jsx)(B.b,{exact:!0,path:"/",component:L}),Object(c.jsx)(B.b,{exact:!0,path:"/signin",component:M}),Object(c.jsx)(B.b,{exact:!0,path:"/signup",component:U}),Object(c.jsx)(_,{exact:!0,path:"/desk",component:ue}),Object(c.jsx)(_,{exact:!0,path:"/profile",component:$})]})]})};n(131),n(132);o.a.render(Object(c.jsx)(i.a,{children:Object(c.jsx)(S,{children:Object(c.jsx)(be,{})})}),document.getElementById("root"))},47:function(e,t,n){},48:function(e,t,n){},89:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){}},[[133,1,2]]]);
//# sourceMappingURL=main.5dfa7690.chunk.js.map