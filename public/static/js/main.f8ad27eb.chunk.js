(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){},115:function(e,t,n){},136:function(e,t){},139:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=139},140:function(e,t,n){},141:function(e,t,n){},142:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),a=n.n(s),o=n(66),r=n.n(o),i=n(6),l=n(16),d=n(17),j=n(20),u=n(19),h=n(67),b=n.n(h).a.create({baseURL:"https://cooode.herokuapp.com",withCredentials:!0});function x(e){if(e.response.data)throw console.log(e.response&&e.response.data),e;throw e}var m=function(e){return b.post("/api/auth/signup",e).then((function(e){return e.data})).catch(x)},O=function(e){return b.post("/api/auth/signin",e).then((function(e){return e.data})).catch(x)},p=function(){return b.get("/api/auth/isLoggedIn").then((function(e){return e.data})).catch(x)},f=function(){return b.get("/api/auth/logout").then((function(e){return e.data})).catch(x)},g=function(e){return b.get("/api/notes/all/".concat(e)).then((function(e){return e.data})).catch(x)},v=function(e){return b.post("/api/notes",e).then((function(e){return e.data})).catch(x)},C=function(e){return b.delete("/api/notes/".concat(e)).then((function(e){return e.data})).catch(x)},N=function(e){return b.get("/api/lessons/student/".concat(e)).then((function(e){return e.data})).catch(x)},y=function(e){return b.delete("/api/lessons/".concat(e)).then((function(e){return e.data})).catch(x)},w=a.a.createContext(),S=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={user:null,isLoggedIn:!1,isLoading:!0},e.setUser=function(t){e.setState({user:t,isLoggedIn:!0})},e.removeUser=function(){e.setState({user:null,isLoggedIn:!1})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;p().then((function(t){e.setState({user:t,isLoggedIn:!0,isLoading:!1})})).catch((function(t){e.setState({user:null,isLoggedIn:!1,isLoading:!1})}))}},{key:"render",value:function(){var e={user:this.state.user,setUser:this.setUser,removeUser:this.removeUser,isLoggedIn:this.state.isLoggedIn,isLoading:this.state.isLoading};return Object(c.jsx)(w.Provider,{value:e,children:this.props.children})}}]),n}(s.Component),T=n(3),B=n(13),k=function(e){return function(t){return Object(c.jsx)(w.Consumer,{children:function(n){return Object(c.jsx)(e,Object(B.a)(Object(B.a)({},t),{},{context:n}))}})}},I=(n(94),k((function(e){var t=e.context;return Object(c.jsxs)("nav",{className:"NavMain Flex AlignCenterContent",children:[Object(c.jsx)(i.b,{exact:!0,to:"/",children:Object(c.jsxs)("h3",{className:"logo text",children:["C",Object(c.jsx)("span",{id:"logoO",children:"\xf6"}),"de"]})}),Object(c.jsxs)("ul",{className:"nav-list",children:[t.isLoggedIn&&Object(c.jsxs)(a.a.Fragment,{children:[Object(c.jsx)("li",{className:"Flex CenteredVHContent",children:Object(c.jsx)("li",{className:"Flex CenteredVHContent",children:Object(c.jsx)(i.b,{to:"/profile",children:Object(c.jsx)("div",{className:"NeuBtn Flex CenteredVHContent CTA",children:Object(c.jsx)("p",{children:t.user&&t.user.userName})})})})}),Object(c.jsx)("li",{className:"Flex CenteredVHContent",children:Object(c.jsx)("p",{onClick:function(){f().then((function(){t.removeUser()})).catch((function(e){console.log(e)}))},children:"Logout"})})]}),!t.isLoggedIn&&Object(c.jsxs)(a.a.Fragment,{children:[Object(c.jsx)("li",{className:"Flex CenteredVHContent",children:Object(c.jsx)(i.b,{to:"/signin",children:"Sign in"})}),Object(c.jsx)("li",{className:"Flex CenteredVHContent",children:Object(c.jsx)(i.b,{to:"/signup",children:Object(c.jsx)("div",{className:"NeuBtn CTA Flex CenteredVHContent",children:Object(c.jsx)("p",{children:"Get on board!"})})})})]})]})]})}))),A=(n(99),function(){return Object(c.jsx)("div",{children:Object(c.jsx)("header",{className:"Flex CenteredVHContent Header",children:Object(c.jsxs)("div",{className:"ContentWrapper",children:[Object(c.jsxs)("div",{className:"Flex Column JustifyCenterContent",children:[Object(c.jsx)("div",{id:"TitleHeader",children:Object(c.jsxs)("h1",{className:"WhiteText",children:["Live Interactive",Object(c.jsx)("br",{}),"Coding Lessons"]})}),Object(c.jsx)("div",{id:"SubtitleHeader",children:Object(c.jsx)("p",{id:"description",children:"C\xf6de is a modern school platform for a seamless learning journey. Stream your code and let your students play with it."})}),Object(c.jsx)(i.b,{to:"/signup",children:Object(c.jsx)("button",{className:"NeuBtn CTA",children:"Create your first lesson for free!"})})]}),Object(c.jsx)("div",{class:"imgContainer Flex CenteredVHContent",children:Object(c.jsx)("img",{src:"assets/base.png",alt:"https://unsplash.com/photos/KWrNwBE87EY?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"})})]})})})}),F=(n(100),function(){return Object(c.jsxs)("section",{className:"ValueProposition",children:[Object(c.jsx)("h2",{className:"CenteredText WhiteText",children:"Learning Better and Faster"}),Object(c.jsxs)("div",{className:"Flex JustifyCenterContent AlignFlexStartContent",id:"valuePropositionContainer",children:[Object(c.jsxs)("article",{className:"Flex Column",children:[Object(c.jsx)("div",{className:"Card iconBig",children:Object(c.jsx)("div",{className:" Join"})}),Object(c.jsx)("h3",{className:"CenteredText WhiteText",children:"Join"}),Object(c.jsx)("p",{className:"Marginless CenteredText",children:"Join your favourite teacher on private e-classroom for live and interactive coding-lessons."})]}),Object(c.jsxs)("article",{className:"Flex Column",children:[Object(c.jsx)("div",{className:"Card iconBig",children:Object(c.jsx)("div",{className:"Learn"})}),Object(c.jsx)("h3",{className:"CenteredText WhiteText",children:"Learn"}),Object(c.jsx)("p",{className:"Marginless CenteredText",children:"You can pause at any time and experiment with the code. Then just hit play and resume the teacher's stream"})]}),Object(c.jsxs)("article",{className:"Flex Column",children:[Object(c.jsx)("div",{className:"Card iconBig",children:Object(c.jsx)("div",{className:"Relearn"})}),Object(c.jsx)("h3",{className:"CenteredText WhiteText",children:"Re-learn"}),Object(c.jsx)("p",{className:"Marginless CenteredText",children:"A save-button allows you to save entire code pieces and re-access them later, to maximize your learning experience"})]})]})]})}),W=(n(101),function(e){var t=e.children,n=e.description,s=e.orientation;return Object(c.jsxs)("section",{className:"SectionTemplate ".concat(s),children:[Object(c.jsxs)("div",{className:"Description",children:[Object(c.jsx)("h3",{children:n.title}),Object(c.jsx)("p",{children:n.description})]}),Object(c.jsx)("div",{className:"SectionChildProp",children:t})]})}),L=n(2),E=(n(102),n(103),n(48),n(49),n(104),n(105),n(50),n(69)),D=function(e){var t=e.language,n=e.value,s=e.onChange,a=e.open;return Object(c.jsx)("div",{className:"editor-container ".concat(a?"":"collapsed"),children:Object(c.jsx)(E.Controlled,{onBeforeChange:function(e,n,c){s(c,t)},value:n,className:"code-mirror-wrapper",options:{lineWrapping:!0,lint:!0,mode:t,theme:"material",lineNumbers:!0}})})},M={js:" ",react:'\n\t\t\t<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"><\/script>\n\t\t\t<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"><\/script>\n\t\t\t<script src="https://unpkg.com/babel-standalone@6/babel.min.js"><\/script>\n\t\t',vue:'\n\t\t\t<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"><\/script>\n\t\t'},P={js:{html:'<h1 id="test">Yo, welcome to your Vanilla js</h1>',css:"h1 {\n\tcolor: #333;\n\tfont-family: 'Helvetica', sans-serif;\n\ttext-align: center;\n}",js:'document.getElementById("test").innerHTML += " lesson!"'},react:{html:'<div id="root"></div>',css:"h1 {\n\tcolor: #333;\n\tfont-family: 'Helvetica', sans-serif;\n\ttext-align: center;\n}",js:"const App = props => <h1>Yo,{props.welcome}</h1>\n\t\t\nReactDOM.render(<App welcome=\" welcome to your React lesson!\" />, document.getElementById('root'))\n"},vue:{html:'<h1 id="welcome">{{ welcome }}</h1>',css:"h1 {\n\tcolor: #333;\n\tfont-family: 'Helvetica', sans-serif;\n}",js:"new Vue({\n\tel: '#welcome',\n\tdata: {\n\t\twelcome: \"Yo, welcome to your Vue lesson\"\n\t}\n})"}},H='\n<button class="togglerd5ti9Wa73x4A1y4p" id="togglerd5ti9Wa73x4A1y4p">></button>\n<div class="consoled5ti9Wa73x4A1y4p collapsedd5ti9Wa73x4A1y4p" id="consoled5ti9Wa73x4A1y4p"><ul id="logsd5ti9Wa73x4A1y4p"></ul></div>\n',V='\n<style>\n\t\t\t\n\t*, *::before, *::after {\n\t\tbox-sizing: border-box;\n\t}\n\n\t#consoled5ti9Wa73x4A1y4p {\n\t\toverflow: auto;\n\t\tpadding: 10px 10px 0 10px;\n\t}\n\t.consoled5ti9Wa73x4A1y4p.collapsedd5ti9Wa73x4A1y4p {\n\t\twidth: 20px;\n\t\theight: 20px;\n\t\tbottom: 5px;\n\t\tmargin-left: -10px;\n\t\tborder-radius: 10px;\n\t\tz-index: 1000;\n\t}\n\n\t.consoled5ti9Wa73x4A1y4p {\n\t\tposition: fixed;\n\t\tbottom: 15px;\n\t\tleft: 50%;\n\t\tmargin-left: -200px;\n\t\twidth: 400px;\n\t\tmax-width:100%;\n\t\theight: 200px;\n\t\tmargin-right: 5px;\n\t\tbackground-color: black;\n\t\ttransition: 200ms ease-out;\n\t}\n\n\t#logsd5ti9Wa73x4A1y4p {\n\t\tlist-style: none;\n\t\tmargin-left: 0;\n\t\tpadding-left: 1.2em;\n\t\ttext-indent: -1.2em;\n\t}\n\n\t#logsd5ti9Wa73x4A1y4p li {\n\t\tcolor: white;\n\t\tfont-family: monospace;\n\t}\n\n\t#logsd5ti9Wa73x4A1y4p li:before {\n\t\tcontent: ">";\n\t\tdisplay: block;\n\t\tfloat: left;\n\t\twidth: 1.2em;;\n\t}\n\n\t.togglerd5ti9Wa73x4A1y4p {\n\t\tposition: fixed;\n\t\tbottom: 5px;\n\t\tleft: 50%;\n\t\twidth: 20px;\n\t\theight: 20px;\n\t\tmargin-left: -10px;\n\t\tborder: none;\n\t\tborder-radius: 10px;\n\t\tz-index: 5000;\n\t\tbackground-color: black;\n\t\tcolor: white;\n\t\ttransform: rotate(-90deg);\n\t\ttransition: 200ms ease-out;\n\t}\n\n\t.togglerd5ti9Wa73x4A1y4p.closed5ti9Wa73x4A1y4p {\n\t\ttransform: rotate(90deg);\n\t\tbottom: 205px;\n\t\ttransition: 200ms ease-out;\n\t}\n\n\t#togglerd5ti9Wa73x4A1y4p:focus {\n\t\toutline:0;\n\t}\n\n</style>\t\n',R="\n<script>\n\t//get fake-console and fake-logs references\n\tconst fakeConsoled5ti9Wa73x4A1y4p = document.getElementById('consoled5ti9Wa73x4A1y4p')\n\tconst logsd5ti9Wa73x4A1y4p = document.getElementById('logsd5ti9Wa73x4A1y4p')\n\t//ovverride console.log\n\tconst backUpConsoleLogd5ti9Wa73x4A1y4p = console.log\n\tconsole.log = (...args) => {\n\t\targs.forEach(arg => {\n\t\t\tbackUpConsoleLogd5ti9Wa73x4A1y4p(arg)\n\t\t\tconst li = document.createElement('li')\n\t\t\tli.innerHTML = arg\n\t\t\tlogsd5ti9Wa73x4A1y4p.append(li)\n\t\t})\t\t\t\n\t}\n\t//log errors too\n\twindow.addEventListener('error', ({ message }) => console.log(message))\n\t//toggle open/close console\n\tconst toggleConsoled5ti9Wa73x4A1y4p = e => {\n\t\tfakeConsoled5ti9Wa73x4A1y4p.classList.toggle(\"collapsedd5ti9Wa73x4A1y4p\")\n\t\te.target.classList.toggle('closed5ti9Wa73x4A1y4p')\n\t}\n\tconst togglerd5ti9Wa73x4A1y4p = document.getElementById('togglerd5ti9Wa73x4A1y4p')\n\ttogglerd5ti9Wa73x4A1y4p.addEventListener('click', toggleConsoled5ti9Wa73x4A1y4p)\n<\/script>\n\n",U=(n(106),n(51),function(){var e=Object(s.useState)("//Play with the code below\n\nconst App = () => {\n\n\tconst [ count, setCount ] = React.useState(3)\n\n\treturn(\n\t\t<div>\n\t\t\t<h1>This app is {count} times coleer!</h1>\n\t\t\t<button\n\t\t\tonClick={() => setCount(prev => prev + 1)}\n\t\t\t>\n\t\t\t<h1>Try me!</h1>\n\t\t\t</button>\n\t\t</div>\n\t)\n}\n\t\t\nReactDOM.render(\n\t<App />,\n\tdocument.getElementById('root')\n) "),t=Object(L.a)(e,2),n=t[0],a=t[1],o=Object(s.useState)(""),r=Object(L.a)(o,2),i=r[0],l=r[1],d=function(){var e='\n\t\t\t<!DOCTYPE html>\n\t\t\t<html>\n\t\t\t<head>\n\t\t\t\t<meta charset="UTF-8">\n\t\t\t\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t\t\t\t<meta http-equiv="X-UA-Compatible" content="ie=edge">\n\t\t\t\t<title>HTML Document</title>\n\t\t\t\t'.concat(M.react,"\n\t\t\t</head>\n\t\t\t<body>\n\t\t\t\t").concat(P.react.html,'\n\t\t\t</body>\n\t\t\t<script type="text/babel">\n\t\t\t\t').concat(n,"\n\t\t\t<\/script>\n\t\t\t</html>\n\t\t");l(e)};return Object(s.useEffect)((function(){console.log(n),d()}),[]),Object(c.jsxs)("div",{className:"IDESection",children:[Object(c.jsxs)("div",{className:"MainPanel",children:[Object(c.jsx)("div",{className:"Flex AlignCenterContent MainPanelHeader",children:Object(c.jsx)("button",{className:"NeuBtn",children:"app.jsx"})}),Object(c.jsx)("div",{className:"Flex Column Card BgPrimary EditorsWrapper",children:Object(c.jsx)(D,{language:"jsx",value:n,onChange:function(e){a(e)},open:!0})})]}),Object(c.jsxs)("div",{className:"MainPanel",children:[Object(c.jsx)("div",{className:"Flex AlignCenterContent MainPanelHeader",children:Object(c.jsx)("button",{className:"NeuBtn IconBtn RunBtn",onClick:d,children:Object(c.jsx)("div",{className:"iconContainer",children:Object(c.jsx)("div",{className:"Run"})})})}),Object(c.jsx)("div",{id:"HomePageMiniBrowser",children:Object(c.jsx)("iframe",{srcDoc:i,title:"output",sandbox:"allow-scripts",frameBorder:"0"})})]})]})}),_=(n(107),n(52),"//Write on the teacher's editor\n\n//Then hit the 'pause' button and write on both student's and teacher's editor\n\n//Finally press 'play' and try typing on both and see what happens!"),J=function(){var e=Object(s.useState)(_),t=Object(L.a)(e,2),n=t[0],a=t[1],o=Object(s.useState)(_),r=Object(L.a)(o,2),i=r[0],l=r[1],d=Object(s.useState)(_),j=Object(L.a)(d,2),u=j[0],h=j[1],b=Object(s.useState)(!1),x=Object(L.a)(b,2),m=x[0],O=x[1];return Object(s.useEffect)((function(){l(n)}),[n]),Object(s.useEffect)((function(){!m&&h(i)}),[i,m]),Object(c.jsxs)("div",{className:"CollaborativeEditorSection Card",children:[Object(c.jsxs)("div",{className:"InnerPannel",children:[Object(c.jsx)("div",{className:"Flex AlignCenterContent EditorsInnerHeader",children:Object(c.jsx)("p",{children:"Teacher"})}),Object(c.jsx)("div",{className:"Flex Column BgPrimary EditorsWrapper",children:Object(c.jsx)(D,{language:"js",value:n,onChange:function(e){return a(e)},open:!0})})]}),Object(c.jsx)("div",{id:"EditorsSeparator"}),Object(c.jsxs)("div",{className:"InnerPannel",children:[Object(c.jsxs)("div",{className:"Flex SpaceBetween AlignCenterContent EditorsInnerHeader",children:[Object(c.jsx)("p",{children:"Student"}),Object(c.jsx)("button",{onClick:function(){O((function(e){return!e}))},className:"NeuBtn ".concat(m?"Down":""," IconBtn"),children:Object(c.jsx)("div",{className:"iconContainer",children:Object(c.jsx)("div",{className:m?"Play":"Pause"})})})]}),Object(c.jsx)("div",{className:"Flex Column BgPrimary EditorsWrapper",children:Object(c.jsx)(D,{language:"js",value:u,onChange:function(e){return h(e)},open:!0})})]})]})},Y={integratedIDE:{title:"Web IDE",description:"Write your code in the editor and see the result in the integrated browser by clicking on the small 'reload' icon.\nC\xf6de's IDE is able to compile the majority of JavaScript frameworks and libraries"},collaborativeEditor:{title:"A new generation of collaborative editors",description:"Teahcer's code is streamed live over to students' editors, and they can interact and experiment with it in the IDE, and resume the stream at any moment, without affecting the code on other editors, thanks to the 'play/pause' button."}},q=function(){return Object(c.jsxs)("main",{children:[Object(c.jsx)(W,{description:Y.integratedIDE,orientation:"Regular",children:Object(c.jsx)(U,{})}),Object(c.jsx)(W,{description:Y.collaborativeEditor,orientation:"Reversed",children:Object(c.jsx)(J,{})})]})},z=(n(108),function(){return Object(c.jsx)("footer",{className:"FooterMain Flex CenteredVHContent",children:Object(c.jsx)("p",{className:"CenteredText",children:"Made by A\xfflo"})})}),G=(n(109),function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(A,{}),Object(c.jsx)(F,{}),Object(c.jsx)(q,{}),Object(c.jsx)(z,{})]})}),X=n(18),K=(n(53),function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={email:"",password:""},e.alertText=Object(s.createRef)(),e.handleChange=function(t){var n=t.target.name,c="file"===t.target.type?t.target.files[0]:"checkbox"===t.target.type?t.target.checked:t.target.value;e.setState(Object(X.a)({},n,c))},e.handleSubmit=function(t){t.preventDefault(),O(e.state).then((function(t){e.context.setUser(t),e.props.history.push("/profile")})).catch((function(t){console.log(t),e.alertText.current.style.display="block"}))},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{ref:this.alertText,style:{display:"none"},className:"Card BgTertiary AlertMsg",children:Object(c.jsxs)("p",{children:["Wrong credentials !",Object(c.jsx)("br",{}),"Please try again"]})}),Object(c.jsxs)("form",{className:"Flex Column AlignCenterContent InsetCard Form",onChange:this.handleChange,onSubmit:this.handleSubmit,children:[Object(c.jsx)("label",{htmlFor:"email",children:"Email"}),Object(c.jsx)("input",{className:"Input",type:"email",id:"email",name:"email",placeholder:"ada@lovelace.dev"}),Object(c.jsx)("label",{htmlFor:"password",children:"Password"}),Object(c.jsx)("input",{className:"Input",type:"password",id:"password",name:"password",placeholder:"\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf"}),Object(c.jsx)("button",{className:"NeuBtn CTA",id:"SubmitBtn",children:"Submit"})]})]})}}]),n}(s.Component));K.contextType=w;var Q=Object(T.g)(K),Z=function(e){return Object(c.jsx)(Q,{})},$=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={userName:"",email:"",password:"",role:"student"},e.alertText=Object(s.createRef)(),e.handleChange=function(t){var n="file"===t.target.type?t.target.files[0]:"checkbox"===t.target.type?t.target.checked:t.target.value,c=t.target.name;e.setState(Object(X.a)({},c,n))},e.handleSubmit=function(t){t.preventDefault(),m(e.state).then((function(t){e.context.setUser(t),console.log(t),e.props.history.push("/profile")})).catch((function(t){console.log(t),e.alertText.current.style.display="block"}))},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{ref:this.alertText,style:{display:"none"},className:"Card BgTertiary AlertMsg",children:Object(c.jsxs)("p",{children:["This email is already taken !",Object(c.jsx)("br",{}),"Please try again"]})}),Object(c.jsxs)("form",{className:"Flex Column AlignCenterContent InsetCard Form",onChange:this.handleChange,onSubmit:this.handleSubmit,children:[Object(c.jsx)("label",{htmlFor:"userName",children:"User name"}),Object(c.jsx)("input",{className:"Input",type:"text",id:"userName",name:"userName",onChange:this.handleChange,placeholder:"Ada"}),Object(c.jsx)("label",{htmlFor:"email",children:"Email"}),Object(c.jsx)("input",{className:"Input",type:"email",id:"email",name:"email",onChange:this.handleChange,placeholder:"ada@lovelace.dev"}),Object(c.jsx)("label",{htmlFor:"password",children:"Password"}),Object(c.jsx)("input",{className:"Input",type:"password",id:"password",name:"password",onChange:this.handleChange,placeholder:"\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf"}),Object(c.jsx)("label",{htmlFor:"password",children:"I am a ..."}),Object(c.jsx)("div",{className:"Select BgPrimary",children:Object(c.jsxs)("select",{className:"BgPrimary",name:"role",value:this.state.role,onChange:this.handleChange,children:[Object(c.jsx)("option",{value:"",children:"--Pleaseselect--"}),Object(c.jsx)("option",{value:"student",children:"Student"}),Object(c.jsx)("option",{value:"teacher",children:"Teacher"})]})}),Object(c.jsx)("button",{id:"SubmitBtn",className:"NeuBtn CTA",children:"Submit"})]})]})}}]),n}(s.Component);$.contextType=w;var ee,te=Object(T.g)($),ne=function(e){return Object(c.jsx)(te,{})},ce=n(70),se=k((function(e){var t=e.component,n=e.context,s=Object(ce.a)(e,["component","context"]);return n.isLoading?null:n.isLoggedIn?Object(c.jsx)(T.b,Object(B.a)(Object(B.a)({},s),{},{render:function(e){return Object(c.jsx)(t,Object(B.a)({},e))}})):Object(c.jsx)(T.a,{to:"/signin"})})),ae=function(e,t,n){var c=e.props,s=t.room,a=t.code;c.history.push({pathname:n,state:{room:s,code:a}})},oe=(n(110),function(e){var t=e.props,n=e.language,s=e.uuidv4;return Object(c.jsxs)("div",{className:"Flex Column CenteredVHContent LaunchLessonCard",children:[Object(c.jsx)("div",{className:"ImgContainer LaunchSessionImg",children:Object(c.jsx)("img",{src:"assets/".concat(n,"Logo.jpg"),alt:"".concat(n," logo")})}),Object(c.jsxs)("div",{className:"Flex LaunchBtns",children:[Object(c.jsxs)("button",{className:"NeuBtn LaunchLessonBtn",onClick:function(){return ae(t,{room:"".concat(n,"-lesson-").concat(s()),code:P[n]},"/desk")},children:["Lesson",Object(c.jsx)("br",{}),"Mode"]}),Object(c.jsxs)("button",{className:"NeuBtn LaunchLessonBtn",onClick:function(){return ae(t,{room:"".concat(n,"-stream-").concat(s()),code:P[n]},"/desk")},children:["Stream",Object(c.jsx)("br",{}),"Session"]})]})]})}),re=n(144),ie=(n(111),function(e){var t=Object.keys(M);return console.log("section",e,t),Object(c.jsxs)("div",{className:"LaunchSessionSection",children:[Object(c.jsx)("div",{children:Object(c.jsx)("h2",{className:"CenteredText WhiteText",children:"Launch a new session"})}),Object(c.jsx)("div",{className:"Flex",children:t.map((function(t){return Object(c.jsx)(oe,{props:e,language:t,uuidv4:re.a},t)}))})]})}),le=(n(112),function(e){var t=Object(s.useState)(""),n=Object(L.a)(t,2),a=n[0],o=n[1];return Object(c.jsx)("div",{className:"JoinLesson Flex CenteredVHContent",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{className:"CenteredText WhiteText",children:"Join a new Lesson"}),Object(c.jsxs)("form",{className:"Flex Column FormContainer CenteredVHContent",onSubmit:function(t){var n=a.split("-")[0];t.preventDefault(),ae(e,{room:a,code:P[n]},"/desk")},children:[Object(c.jsx)("label",{htmlFor:"join-lesson",children:'Paste the Lesson Room and hit "Join"'}),Object(c.jsx)("input",{className:"Input",id:"join-lesson",type:"text",value:a,onChange:function(e){return o(e.target.value)},required:!0}),Object(c.jsx)("div",{id:"JoinBtn",children:Object(c.jsx)("input",{className:"NeuBtn CTA",type:"submit",value:"Join"})})]})]})})}),de=(n(29),function(e){var t=e.props,n=t.context.user._id;console.log("props",t);var a=Object(s.useState)(""),o=Object(L.a)(a,2),r=o[0],i=o[1];return Object(s.useEffect)((function(){g(n).then((function(e){return i(e)})).catch((function(e){return console.error("student notes",e)}))}),[]),console.log(r),Object(c.jsxs)("div",{className:"TableSection Flex Column AlignCenterContent",children:[Object(c.jsx)("h2",{className:"CenteredText WhiteText",children:"Your notes"}),Object(c.jsx)("div",{className:"InsetCard TableContainer",id:"NotesTableContainer",children:Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{className:"text",children:"Topic"}),Object(c.jsx)("th",{className:"text",children:"Date"})]})}),Object(c.jsxs)("tbody",{children:[r[0]?r.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"text",children:e.library}),Object(c.jsx)("td",{className:"text",children:e.updated}),Object(c.jsx)("td",{children:Object(c.jsx)("button",{className:"NeuBtn IconBtn",id:"GoToBtn",onClick:function(){return n=e.lesson,c=e.html,s=e.css,a=e.js,void ae({props:t},{room:n,code:{html:c,css:s,js:a}},"/desk");var n,c,s,a},children:Object(c.jsx)("div",{className:"Code"})})}),Object(c.jsx)("td",{children:Object(c.jsx)("button",{className:"NeuBtn IconBtn",id:"DeleteBtn",onClick:function(){return function(e){console.log("id",e),C(e).then((function(e){console.log(e),i((function(t){return t.filter((function(t){return t._id!==e}))}))}))}(e._id)},children:Object(c.jsx)("div",{className:"Delete Flex CenteredVHContent",children:Object(c.jsx)("div",{className:"InnerDelete"})})})})]},e._id)})):Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"text",colSpan:"5",children:"You haven't coded yet"}),Object(c.jsx)("td",{}),Object(c.jsx)("td",{})]}),Object(c.jsx)("tr",{children:Object(c.jsx)("td",{})})]})]})})]})}),je=function(e){var t=e.props,n=t.context.user,a=n._id,o=n.role;console.log("props",t);var r=Object(s.useState)(""),i=Object(L.a)(r,2),l=i[0],d=i[1];return Object(s.useEffect)((function(){N(a).then((function(e){return d(e)})).catch((function(e){return console.error("student lessons",e)}))}),[]),console.log(l),Object(c.jsxs)("div",{className:"TableSection Flex Column AlignCenterContent",children:[Object(c.jsx)("h2",{className:"CenteredText WhiteText",children:"Your lessons"}),Object(c.jsx)("div",{className:"InsetCard TableContainer",id:"LessonsTableContainer",children:Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{className:"text",children:"Topic"}),Object(c.jsx)("th",{className:"text",children:"Teacher"}),Object(c.jsx)("th",{className:"text",children:"Date"})]})}),Object(c.jsxs)("tbody",{children:[l[0]?l.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"text",children:e.library}),Object(c.jsx)("td",{className:"text",children:e.teacher.userName}),Object(c.jsx)("td",{className:"text",children:e.updated}),Object(c.jsx)("td",{children:Object(c.jsx)("button",{className:"NeuBtn IconBtn",id:"GoToBtn",onClick:function(){return n=e.lesson,c=e.html,s=e.css,a=e.js,void ae({props:t},{room:n,code:{html:c,css:s,js:a}},"/desk");var n,c,s,a},children:Object(c.jsx)("div",{className:"Code"})})}),"teacher"===o&&Object(c.jsx)("td",{children:Object(c.jsx)("button",{className:"NeuBtn IconBtn",id:"DeleteBtn",onClick:function(){return function(e){console.log("id",e),y(e).then((function(e){console.log(e),d((function(t){return t.filter((function(t){return t._id!==e}))}))}))}(e._id)},children:Object(c.jsx)("div",{className:"Delete Flex CenteredVHContent",children:Object(c.jsx)("div",{className:"InnerDelete"})})})})]},e._id)})):Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"text",colSpan:"5",children:"You haven't coded yet"}),Object(c.jsx)("td",{}),Object(c.jsx)("td",{})]}),Object(c.jsx)("tr",{children:Object(c.jsx)("td",{})})]})]})})]})},ue=(n(113),k((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("section",{className:"Welcome Flex CenteredVHContent",children:[Object(c.jsx)("img",{src:"assets/welcomeBg.jpeg",alt:""}),Object(c.jsxs)("h1",{className:"CenteredText WhiteText",children:["Welcome back, ",Object(c.jsx)("span",{id:"userName",children:e.context.user.userName}),"!"]})]}),"teacher"===e.context.user.role&&Object(c.jsx)(ie,{props:e}),Object(c.jsx)(le,{props:e}),"student"===e.context.user.role&&Object(c.jsx)(de,{props:e}),Object(c.jsx)(je,{props:e}),Object(c.jsx)(z,{})]})}))),he=n(12),be=function(e){var t=e.call,n=e.stream,a=e.teacher,o=(e.shouldStreamIncomingCall,Object(s.useRef)());return Object(s.useEffect)((function(){return t.answer(n),function(e,t){e.on("stream",(function(e){console.log("receaving streaming",e),t.current.srcObject=e}))}(t,o),function(){return t.close()}}),[]),Object(c.jsx)("div",{className:"Video ".concat(t.peer===a?"BigVideo":""),children:Object(c.jsx)("video",{playsInline:!0,controls:!0,muted:t.peer!==a,ref:o,autoPlay:!0})})},xe=(n(114),function(e){var t=e.msg,n=e.alignment,s=t.userName,a=t.role,o=t.text,r=t.textType;return console.log("msg",s,a,o,r),Object(c.jsxs)("article",{className:"Message ".concat(n),children:[Object(c.jsx)("h3",{children:"".concat(s||"someone").concat("teacher"===a?" - thecher":"")}),Object(c.jsx)("p",{className:r,children:o})]})}),me=(n(115),function(e){var t=e.chat,n=e.setChat,a=e.room,o=e.sendMsg,r=e.userId,i=e.userName,l=e.role,d=Object(s.useState)(""),j=Object(L.a)(d,2),u=j[0],h=j[1],b=Object(s.useState)("plainText"),x=Object(L.a)(b,2),m=x[0],O=x[1],p=Object(s.useRef)(),f=function(e){switch(e.target.type){case"checkbox":O(e.target.checked?"codeText":"plainText");break;case"text":h(e.target.value);break;default:return}};return Object(s.useEffect)((function(){t[0]&&t[0].userId===r&&p.current.scrollIntoView({behavior:"smooth"})}),[t]),Object(c.jsxs)("div",{id:"Chat",children:[Object(c.jsx)("div",{id:"ChatInput",className:"Flex AlignFlexStartContent",children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n((function(e){return[].concat(Object(he.a)(e),[{userId:r,userName:i,role:l,text:u,textType:m}])})),o(a,{userId:r,userName:i,role:l,text:u,textType:m}),h(""),O("plainText")},className:"Flex SpaceBetween ",children:[Object(c.jsx)("input",{className:"Input",type:"text",id:"textInput",value:u,required:!0,onChange:f}),Object(c.jsxs)("div",{className:"Flex CenteredVHContent",children:[Object(c.jsx)("input",{type:"checkbox",name:"type",checked:"codeText"===m,onChange:f}),Object(c.jsx)("label",{htmlFor:"type",children:"< >"})]}),Object(c.jsx)("input",{type:"submit",value:"send",className:"NeuBtn ".concat(u.length>0?"CTA":""),style:"student"===l?{marginRight:"var(--large-unit)"}:{marginRight:"var(--little-unit)"}})]})}),Object(c.jsx)("div",{className:"messages",children:Object(c.jsxs)("div",{className:"Flex ColumnReverse innerMessages",children:[0!==t.length&&t.map((function(e){return Object(c.jsx)(xe,{msg:e,alignment:e.userId===r?"sent":"received"})})),Object(c.jsx)("div",{ref:p})]})})]})}),Oe=function(e){var t=e.srcDoc,n=e.lessonName,a=e.handleRunMinibrowser,o=e.sendRunMinibrowser,r=e.chat,i=e.setChat,l=e.room,d=e.sendMsg,j=e.userId,u=e.userName,h=e.role,b=Object(s.useState)(!1),x=Object(L.a)(b,2),m=x[0],O=x[1],p=Object(s.useState)(!1),f=Object(L.a)(p,2),g=f[0],v=f[1];return Object(s.useEffect)((function(){m&&v(!1),!m&&r.length>=1&&v(!0)}),[r]),Object(s.useEffect)((function(){m&&v(!1)}),[m]),Object(c.jsxs)("div",{className:"Minibrowser Flex Column SpaceBetween",children:[Object(c.jsxs)("div",{className:"Flex SpaceBetween AlignCenterContent",id:"BrowserHeader",children:[Object(c.jsxs)("div",{id:"MiniBrowserBtns",className:"Flex",children:[Object(c.jsx)("button",{className:"NeuBtn IconBtn .RunBtn",onClick:function(){a(),o()},children:Object(c.jsx)("div",{className:"iconContainer",children:Object(c.jsx)("div",{className:"Run"})})}),Object(c.jsx)("button",{className:"NeuBtn IconBtn ".concat(g&&"CTA"),onClick:function(){O((function(e){return!e}))},id:"ChatBtn",children:Object(c.jsx)("div",{className:m?"Code":"Chat"})})]}),Object(c.jsxs)("div",{className:"Flex AlignCenterContent",id:"LessonName",children:[Object(c.jsx)("p",{className:"text",children:"Lesson :"}),Object(c.jsx)("input",{className:"Input",readOnly:!0,value:n})]})]}),Object(c.jsxs)("div",{className:!m&&"Card",id:"IframeContainer",children:[m&&Object(c.jsx)(me,{chat:r,setChat:i,room:l,sendMsg:d,userId:j,userName:u,role:h}),!m&&Object(c.jsx)("iframe",{srcDoc:t,title:"output",sandbox:"allow-scripts",frameBorder:"0"})]})]})},pe=n(71),fe=n.n(pe),ge=function(){console.log("Disconnecting socket..."),ee&&ee.disconnect()},ve=function(e,t,n){ee&&ee.emit("coding",t,e,n)},Ce=function(e,t){ee&&ee.emit("chat",e,t)},Ne=function(e,t,n,c){ee&&ee.emit("changeTab",e,t,n,c)},ye=n(72),we=n.n(ye),Se=k((function(e){console.log("props",e);var t=e.context.user,n=t.userName,a=t.role,o=t._id,r=e.location.state,i=r.room,l=r.code,d=i.split("-"),j=Object(L.a)(d,2),u=j[0],h=j[1],b="teacher"===a||"lesson"===h,x="student"===a||"lesson"===h;console.log("shouldShow",b),console.log("shouldStream",x);var m=Object(s.useState)(l.html),O=Object(L.a)(m,2),p=O[0],f=O[1],g=Object(s.useState)(l.css),C=Object(L.a)(g,2),N=C[0],y=C[1],w=Object(s.useState)(l.js),S=Object(L.a)(w,2),T=S[0],B=S[1],k=Object(s.useState)(!1),I=Object(L.a)(k,2),A=I[0],F=I[1],W=Object(s.useState)(l.html),E=Object(L.a)(W,2),P=E[0],U=E[1],_=Object(s.useState)(l.css),J=Object(L.a)(_,2),Y=J[0],q=J[1],z=Object(s.useState)(l.js),G=Object(L.a)(z,2),X=G[0],K=G[1],Q=Object(s.useState)(!0),Z=Object(L.a)(Q,2),$=Z[0],te=Z[1],ne=Object(s.useState)(!1),ce=Object(L.a)(ne,2),se=ce[0],ae=ce[1],oe=Object(s.useState)(!1),re=Object(L.a)(oe,2),ie=re[0],le=re[1],de=Object(s.useState)(!0),je=Object(L.a)(de,2),ue=je[0],xe=je[1],me=Object(s.useState)(!1),pe=Object(L.a)(me,2),ye=pe[0],Se=pe[1],Te=Object(s.useState)(!1),Be=Object(L.a)(Te,2),ke=Be[0],Ie=Be[1],Ae=Object(s.useState)(""),Fe=Object(L.a)(Ae,2),We=Fe[0],Le=Fe[1],Ee=Object(s.useState)(0),De=Object(L.a)(Ee,2),Me=De[0],Pe=De[1],He=Object(s.useState)([]),Ve=Object(L.a)(He,2),Re=Ve[0],Ue=Ve[1],_e=Object(s.useRef)(),Je=Object(s.useState)(),Ye=Object(L.a)(Je,2),qe=Ye[0],ze=Ye[1],Ge=Object(s.useState)(),Xe=Object(L.a)(Ge,2),Ke=Xe[0],Qe=Xe[1],Ze=Object(s.useState)(""),$e=Object(L.a)(Ze,2),et=$e[0],tt=$e[1],nt=Object(s.useState)(null),ct=Object(L.a)(nt,2),st=ct[0],at=ct[1],ot=Object(s.useState)([]),rt=Object(L.a)(ot,2),it=rt[0],lt=rt[1],dt=Object(s.useState)(!1),jt=Object(L.a)(dt,2),ut=(jt[0],jt[1]),ht=function(e,t){switch(t){case"xml":f(e),"teacher"===a&&ve(i,{html:e,css:N,js:T},o);break;case"css":y(e),"teacher"===a&&ve(i,{html:p,css:e,js:T},o);break;case"javascript":case"jsx":B(e),"teacher"===a&&ve(i,{html:p,css:N,js:e},o);break;default:return}},bt=function(){var e='\n\t\t\t<!DOCTYPE html>\n\t\t\t<html>\n\t\t\t<head>\n\t\t\t\t<meta charset="UTF-8">\n\t\t\t\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t\t\t\t<meta http-equiv="X-UA-Compatible" content="ie=edge">\n\t\t\t\t<title>HTML Document</title>\n\t\t\t\t'.concat(M[u],"\n\t\t\t\t<style>\n\t\t\t\t").concat(N,"\n\t\t\t\t</style>\n\t\t\t\t").concat(V,"\n\t\t\t</head>\n\t\t\t<body>\n\t\t\t\t").concat(p,"\n\t\t\t\t").concat(H,"\n\t\t\t</body>\n\t\t\t").concat(R,"\n\t\t\t<script ").concat("react"===u?"type=text/babel":"",">\n\t\t\t\t").concat(T,"\n\t\t\t<\/script>\n\t\t\t</html>\n\t\t");Le(e)},xt=function(e){switch(xe(!1),Se(!1),Ie(!1),e.target.name){case"htmlTab":xe(!0),"teacher"===a&&Ne(i,!0,!1,!1);break;case"cssTab":Se(!0),"teacher"===a&&Ne(i,!1,!0,!1);break;case"jsTab":Ie(!0),"teacher"===a&&Ne(i,!1,!1,!0);break;default:xe(!0)}};return Object(s.useEffect)((function(){!function(e,t,n){(ee=fe()("https://cooode.herokuapp.com"))&&e&&ee.emit("join",e,t,n)}(i,o,a),function(e){if(!ee)return!0;ee.on("sendingCode",(function(t,n){console.log("Websocket event received (".concat(t,")! from ").concat(n)),e(t)}))}((function(e){U(e.html),q(e.css),K(e.js)})),function(e){ee.on("connect",(function(){e(ee.connected)}))}(ut),function(e){if(!ee)return!0;ee.on("teacher is",(function(t){return e(t)}))}(Qe),function(e,t){ee&&ee.on("runMinibrowser",(function(n){console.log("".concat(n," just run de the minibrowser")),e(t+1)}))}(Pe,Me),function(e,t,n){ee&&ee.on("changeTab",(function(c,s,a){e(c),t(s),n(a)}))}(te,ae,le),function(e){if(!ee)return!0;ee.on("chat",(function(t){e((function(e){return[].concat(Object(he.a)(e),[t])}))}))}(Ue),function(e,t,n){navigator.mediaDevices.getUserMedia({video:{width:{ideal:320},height:{ideal:240}},audio:!0}).then((function(n){console.log("stream ready"),e.current&&(e.current.srcObject=n,t(n))}))}(_e,ze);var e=new we.a(void 0,{secure:!0,host:"peerjs-server-codeschool.herokuapp.com",port:443});return tt(e),e.on("open",(function(e){at(e)})),e.on("error",(function(e){console.log("error",e)})),function(e){ee&&ee.on("I quit",(function(t){e((function(e){return e.filter((function(e){return e.peer!==t}))}))}))}(lt),ge}),[]),Object(s.useEffect)((function(){A||(f(P),y(Y),B(X))}),[P,Y,X]),Object(s.useEffect)((function(){A||(xe($),Se(se),Ie(ie))}),[$,se,ie]),Object(s.useEffect)((function(){A||(f(P),y(Y),B(X),xe($),Se(se),Ie(ie))}),[A]),Object(s.useEffect)(bt,[Me]),Object(s.useEffect)((function(){st&&qe&&("lesson"!==h&&"teacher"!==a||function(e,t,n){ee&&ee.on("callMe",(function(c){var s=t.call(c,e);console.log("calling",c,s),n((function(e){return[].concat(Object(he.a)(e),[s])}))}))}(qe,et,lt),function(e,t){ee&&ee.emit("callMe",e,t)}(st,i),et.on("call",(function(e){console.log("getting called"),lt((function(t){return[].concat(Object(he.a)(t),[e])}))})))}),[st,qe]),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{id:"DeskContainer",className:"BgPrimary",children:[Object(c.jsxs)("div",{className:"panel",children:[Object(c.jsxs)("div",{className:"Flex AlignCenterContent SpaceBetween BgPrimary",id:"Tab",children:[Object(c.jsxs)("div",{className:"AlignCenterContent Flex",children:[Object(c.jsx)("button",{name:"htmlTab",className:"NeuBtn ".concat(ue?"Down":""),onClick:xt,children:"html"}),Object(c.jsx)("button",{name:"cssTab",className:"NeuBtn ".concat(ye?"Down":""),onClick:xt,children:"css"}),Object(c.jsx)("button",{name:"jsTab",className:"NeuBtn ".concat(ke?"Down":""),onClick:xt,children:"js"})]}),Object(c.jsx)("div",{className:"Flex",children:"student"===a&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{onClick:function(){F((function(e){return!e}))},className:"NeuBtn ".concat(A?"Down":""," IconBtn"),children:Object(c.jsx)("div",{className:"iconContainer",children:Object(c.jsx)("div",{className:A?"Play":"Pause"})})}),Object(c.jsx)("button",{id:"SaveBtn",onClick:function(){v({lesson:i,student:o,html:p,css:N,js:T,library:u}).then((function(e){return console.log(e)})).catch((function(e){return console.error(e)}))},className:"NeuBtn IconBtn",children:Object(c.jsx)("div",{className:"iconContainer",children:Object(c.jsx)("div",{className:"Save"})})})]})})]}),Object(c.jsxs)("div",{className:"Flex Column Card BgPrimary EditorsWrapper",children:[Object(c.jsx)(D,{language:"xml",value:p,onChange:ht,open:ue}),Object(c.jsx)(D,{language:"css",value:N,onChange:ht,open:ye}),Object(c.jsx)(D,{language:"react"===u?"jsx":"javascript",value:T,onChange:ht,open:ke})]})]}),Object(c.jsx)("div",{className:"panel",children:Object(c.jsx)(Oe,{srcDoc:We,lessonName:i,handleRunMinibrowser:bt,sendRunMinibrowser:function(){"teacher"===a&&function(e,t){ee&&ee.emit("runMinibrowser",e,t)}(i,n)},chat:Re,setChat:Ue,room:i,sendMsg:Ce,userId:o,userName:n,role:a})}),Object(c.jsxs)("div",{id:"VideoContainer",children:[Object(c.jsxs)("div",{style:{visibility:b?"visible":"hidden"},className:"Video ".concat("teacher"===a?"BigVideo":""),children:[Object(c.jsx)("video",{playsInline:!0,controls:!0,muted:!0,ref:_e,autoPlay:!0}),Object(c.jsx)("h2",{children:st})]}),x&&it.map((function(e){return Object(c.jsx)(be,{call:e,stream:qe,teacher:Ke,shouldStreamIncomingCall:x},e.peer)}))]})]})})})),Te=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(I,{}),Object(c.jsxs)(T.d,{children:[Object(c.jsx)(T.b,{exact:!0,path:"/",component:G}),Object(c.jsx)(T.b,{exact:!0,path:"/signin",component:Z}),Object(c.jsx)(T.b,{exact:!0,path:"/signup",component:ne}),Object(c.jsx)(se,{exact:!0,path:"/desk",component:Se}),Object(c.jsx)(se,{exact:!0,path:"/profile",component:ue})]})]})};n(140),n(141);r.a.render(Object(c.jsx)(i.a,{children:Object(c.jsx)(S,{children:Object(c.jsx)(Te,{})})}),document.getElementById("root"))},29:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},94:function(e,t,n){},99:function(e,t,n){}},[[142,1,2]]]);
//# sourceMappingURL=main.f8ad27eb.chunk.js.map