(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{19:function(e,n,t){e.exports=t.p+"static/media/hitterES.2826e60d.mp3"},33:function(e,n,t){e.exports=t.p+"static/media/hitES.ee765d88.mp3"},34:function(e,n,t){e.exports=t.p+"static/media/homeES.2c31d33f.mp3"},35:function(e,n,t){e.exports=t.p+"static/media/MatchBGM.0231cb49.mp3"},37:function(e,n,t){e.exports=t.p+"static/media/readyES.8c95a085.mp3"},38:function(e,n,t){e.exports=t.p+"static/media/SelectBGM.c77f557a.mp3"},39:function(e,n,t){e.exports=t.p+"static/media/loading.ab3ef0f9.svg"},40:function(e,n,t){e.exports=t(51)},51:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(28),c=t.n(o),l=t(13),i=t(10),u=t(2),s=t(1),m=t(29);function f(){var e=Object(u.a)(["\n  ","\n  ",'\n\n  body {\n    font-family: "ChosunGs", -apple-system, sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    width : 100%;\n    height: 100vh;\n  }\n  #root {\n    height : 100%;\n  }\n']);return f=function(){return e},e}function d(){var e=Object(u.a)(["\n@font-face { \n    font-family: 'ChosunGs'; \n    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/ChosunGs.woff') format('woff'); \n    font-weight: normal; \n    font-style: normal; \n    }\n"]);return d=function(){return e},e}var b=Object(s.css)(d()),p=Object(s.createGlobalStyle)(f(),m.reset,b),h=t(18);var g=function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=function(e){(n=new h.Howl({src:e})).volume(t)};return a(e),n},E=t(19),v=t.n(E);function x(){var e=Object(u.a)(["\n    font-size : 100px;\n    font-weight : 600;\n    margin-bottom : 80px;\n    background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);   \n    -webkit-background-clip: text;\n    color: transparent;\n"]);return x=function(){return e},e}function y(){var e=Object(u.a)(["\n    width : 100%;\n    height : 100%;\n    display : flex;\n    flex-direction : column;\n    justify-content : center;\n    align-items : center;\n    background-color : #00000099;\n    & .login-btn {\n        width: 100px;\n        height: 50px;\n    }\n"]);return y=function(){return e},e}function O(){var e=Object(u.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: -10;\n    width : 100%;\n    height : 100%;\n    background : url('/images/main-background.jpg') no-repeat;\n    background-size : 100% 100%;\n    filter: blur(5px);\n    -webkit-filter: blur(5px);\n"]);return O=function(){return e},e}function j(){var e=Object(u.a)(["\n    width : 100%;\n    height : 100%;\n"]);return j=function(){return e},e}var w=s.default.div(j()),k=s.default.div(O()),S=s.default.div(y()),T=s.default.div(x()),N=function(){return g(v.a,.7).play(),r.a.createElement(w,null,r.a.createElement(S,null,r.a.createElement(T,null,"\uc2e0\ub098\ub294 \uc57c\uad6c \uac8c\uc784 ~.~"),r.a.createElement("a",{href:"https://github.com/login/oauth/authorize/?client_id=4946b46078dcaa5adfa6&scope=user"},r.a.createElement("button",{className:"login-btn"},"\ub85c\uadf8\uc778"))),r.a.createElement(k,null))};var I=function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=function(){return n.stop()},c=function(e){(n=new h.Howl({src:e})).volume(t),n.play()};Object(a.useEffect)((function(){return c(e),n.on("play",(function(){var e=r;setTimeout((function(){return n.fade(t,0,e)}),1e3*(n.duration()-n.seek())-e)})),o}),[])},C=t(3),A=t(5),_=t(8),z=t.n(_),P=t(11);var L=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{method:"GET"},r=Object(a.useState)(!0),o=Object(A.a)(r,2),c=o[0],l=o[1],i=function(){var a=Object(P.a)(z.a.mark((function a(){var r,o;return z.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch(n,t);case 2:return r=a.sent,a.next=5,r.json();case 5:o=a.sent,e(o),l(!1);case 8:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return Object(a.useEffect)((function(){i()}),[]),c},R={BASE:"http://13.209.254.74/",GAMES:"api/teams",SELECT_TEAM:"api/teams/",SELECT_GAME:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BASE_URL:"http://13.209.254.74/",REACT_APP_GAMES_API:"api/teams",REACT_APP_PLAYER_LIST_API:"api/games/{id}/players",REACT_APP_SELECT_TEAM_API:"api/teams/",REACT_APP_TEMP_COOKIE:"userId=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJzZXVuZ2RlbmcxNyJ9.T-b6_BlzpTimCcbw5wa0PRQe9upCVk7YnMQlPwcq7So"}).REACT_APP_SELECT_GAEM_API,PLAYER_LIST:function(e){return"api/games/{id}/players".replace("{id}",e)}},B=function(e,n){var t=n.type,a=n.payload;switch(t){case"INIT_BALLCOUNT":return a;case"BALL":var r=e.ball;return++r>=4&&(r=0),Object(C.a)(Object(C.a)({},e),{},{ball:r});case"STRIKE":var o=e.strike;return++o>=3&&(o=0),Object(C.a)(Object(C.a)({},e),{},{strike:o});case"OUT":var c=e.out;return++c>=3&&(c=0),Object(C.a)(Object(C.a)({},e),{},{out:c})}},X=function(e,n){var t=n.type,a=n.payload;switch(t){case"INIT_PLAYERLIST":return a;case"UPDATA_PLAYERLIST":return Object(C.a)(Object(C.a)({},e),a)}},D=[{number:1,name:"\uacf5 \uc0ac \uc911",log:[{id:1,status:"\uc2a4\ud2b8\ub77c\uc774\ud06c",strike:1,ball:0},{id:2,status:"\ubcfc",strike:1,ball:1}],result:null},{number:2,name:"\uacf5 \uc0ac \uc911",log:[{id:1,status:"\uc2a4\ud2b8\ub77c\uc774\ud06c",strike:1,ball:0},{id:2,status:"\uc2a4\ud2b8\ub77c\uc774\ud06c",strike:2,ball:0},{id:3,status:"\ubcfc",strike:2,ball:1}],result:"\uc548\ud0c0"}],G={strike:0,ball:0,out:0},J=0,M={inning:1,top_bottom:"top",chance:"\uc218\ube44"},H={away:{teamName:"\uacf5 \uc0ac \uc911",player:"Sunny",score:"04"},home:{teamName:"\uacf5 \uc0ac \uc911",player:"Taek",score:"04"}},U={pitcher:{name:"\uacf5 \uc0ac \uc911",pitchNumber:"04"},hitter:{name:"\uacf5 \uc0ac \uc911",batterBox:1,hit:0}},V={away:{teamName:"\uacf5 \uc0ac \uc911",player:"Sunny",board:[{inning:1,scoring:0}],totalScore:0},home:{teamName:"\uacf5 \uc0ac \uc911",player:"Taek",board:[],totalScore:0}},Y=Object(a.createContext)(),K=function(e){var n=e.children,t=e.teamId,o=e.gameId,c=Object(a.useReducer)(X,{}),l=Object(A.a)(c,2),i=l[0],u=l[1],s=Object(a.useState)(J),m=Object(A.a)(s,2),f=m[0],d=m[1],b=Object(a.useReducer)(B,{}),p=Object(A.a)(b,2),h=p[0],g=p[1],E={matchLog:D,chance:M,scoreBoard:H,currentPlayer:U,detailScore:V};return Object(a.useEffect)((function(){g({type:"INIT_BALLCOUNT",payload:G})}),[]),r.a.createElement(Y.Provider,{value:Object(C.a)(Object(C.a)({},E),{},{teamId:t,gameId:o,playerList:i,playerListDispatch:u,ballCount:h,ballCountDispatch:g,baseCount:f,setBaseCount:d})},n)};function Q(){var e=Object(u.a)(["\n    display : flex;\n    height : 75%;\n    & .team-info {\n    width : 32%;\n    display : flex;\n    flex-direction : column;\n        & .team-score {\n            display : flex;\n            align-items : center;\n            justify-content : center;\n            font-size : 50px;\n            height : 70%;\n            &.board-away {\n                background-color : #f00;\n            }\n            &.board-home {\n                background-color : #00f;\n            }\n        }\n        & .team-name {\n            font-size : 22px;\n            height : 30%;\n            line-height: 33.75px;\n            letter-spacing: -0.07em;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n            overflow: hidden;\n            &.board-away {\n                background-color : #ff8585;\n            }\n            &.board-home {\n                background-color : #8b8bff;\n            }\n        }\n    }\n    & .inning-info {\n        position : relative;\n        background-color : #000;\n        width : 36%;\n        & .base-info {\n            position : absolute;\n            width : 25px;\n            height : 25px;\n            background-color : #5a5a5a;\n            transform : rotate(45deg);\n            &.first-base {\n                top : 35px;\n                right : 20px;\n            }\n            &.second-base {\n                top : 15px;\n                right : 50%;\n                transform : translateX(50%) rotate(45deg);\n            }\n            &.third-base {\n                top : 35px;\n                left : 20px;\n            }\n            &.fill-base {\n                background-color : #ff0;\n            }\n        }\n        & .inning-info-text {\n            width : 100px;\n            position : absolute;\n            bottom : 10px;\n            left : 50%;\n            transform : translateX(-50%);\n            font-size : 22px;\n        }\n    }\n"]);return Q=function(){return e},e}var W=s.default.div(Q()),F=function(){var e=Object(a.useContext)(Y),n=e.baseCount,t=e.chance,o=e.scoreBoard;return r.a.createElement(W,null,r.a.createElement("div",{className:"team-info"},r.a.createElement("div",{className:"team-score board-away"},o.away.score),r.a.createElement("div",{className:"team-name board-away"},o.away.teamName)),r.a.createElement("div",{className:"team-info"},r.a.createElement("div",{className:"team-score board-home"},o.home.score),r.a.createElement("div",{className:"team-name board-home"},o.home.teamName)),r.a.createElement("div",{className:"inning-info"},r.a.createElement("div",{className:"base-info first-base ".concat(n>=1&&"fill-base")}),r.a.createElement("div",{className:"base-info second-base ".concat(n>=2&&"fill-base")}),r.a.createElement("div",{className:"base-info third-base ".concat(n>=3&&"fill-base")}),r.a.createElement("div",{className:"inning-info-text"},t.inning,"\ud68c","top"===t.top_bottom?"\ucd08":"\ub9d0")))};function Z(){var e=Object(u.a)(["\n    display : flex;\n    height : 25%;\n    font-size : 22px;\n    & .ball-count {\n        width : 64%;\n        background-color : #000;\n        display : flex;\n        justify-content : space-around;\n        align-items : center;\n        & .b-count-text {\n            margin-right : 3px;\n        }\n        & .b-count {\n            width : 15px;\n            height : 15px;\n            display : inline-block;\n            background-color : #5a5a5a;\n            border-radius : 50%;\n            margin-left : 1.5px;\n            &.ball-count {\n                background-color : #0f0;\n            }\n            &.strike-count {\n                background-color : #ff0;\n            }\n            &.out-count {\n                background-color : #f00;\n            }\n        }\n    }\n    & .pitches-count {\n        width : 36%;\n        background-color : #5a5a5a;\n        display : flex;\n        justify-content : center;\n        align-items : center;\n        & .p-count {\n            margin-left : 10px;\n        }\n    }\n"]);return Z=function(){return e},e}var q=s.default.div(Z()),$=function(){var e=Object(a.useContext)(Y),n=e.ballCount,t=e.currentPlayer;return r.a.createElement(q,null,r.a.createElement("div",{className:"ball-count"},r.a.createElement("div",null,r.a.createElement("span",{className:"b-count-text"},"B"),r.a.createElement("span",{className:"b-count ".concat(n.ball>=1&&"ball-count")}),r.a.createElement("span",{className:"b-count ".concat(n.ball>=2&&"ball-count")}),r.a.createElement("span",{className:"b-count ".concat(n.ball>=3&&"ball-count")})),r.a.createElement("div",null,r.a.createElement("span",{className:"b-count-text"},"S"),r.a.createElement("span",{className:"b-count ".concat(n.strike>=1&&"strike-count")}),r.a.createElement("span",{className:"b-count ".concat(n.strike>=2&&"strike-count")})),r.a.createElement("div",null,r.a.createElement("span",{className:"b-count-text"},"O"),r.a.createElement("span",{className:"b-count ".concat(n.out>=1&&"out-count")}),r.a.createElement("span",{className:"b-count ".concat(n.out>=2&&"out-count")}))),r.a.createElement("div",{className:"pitches-count"},r.a.createElement("div",null,"\u26be"),r.a.createElement("div",{className:"p-count"},t.pitcher.pitchNumber)))};function ee(){var e=Object(u.a)(["\n    outline : 1px solid #5a5a5a;\n    position : absolute;\n    top : 30px;\n    left : 30px;\n    width : 300px;\n    height : 150px;\n    color : #fff;\n    text-align : center;\n    z-index : 1;\n"]);return ee=function(){return e},e}var ne=s.default.div(ee()),te=function(){return r.a.createElement(ne,null,r.a.createElement(F,null),r.a.createElement($,null))};function ae(){var e=Object(u.a)(["\n    display : flex;\n    justify-content : space-around;\n    margin-bottom : 5px;\n    font-size : 20px;\n    & .log-detail-id {\n        background-color : #fff;\n        width : 20px;\n        height : 20px;\n        color : #000;\n        border-radius : 50%;\n    }\n    & .log-detail-status {\n        width : 150px;\n    }\n    & .log-detail-b-count {\n        color : #918d8d;\n    }\n"]);return ae=function(){return e},e}var re=s.default.div(ae()),oe=Object(a.memo)((function(e){var n=e.log.reverse().map((function(e){return r.a.createElement(re,{key:e.id},r.a.createElement("div",{className:"log-detail-id"},e.id),r.a.createElement("div",{className:"log-detail-status"},e.status),r.a.createElement("div",{className:"log-detail-b-count"},"S",e.strike," B",e.ball))}));return r.a.createElement(r.a.Fragment,null,n)}));function ce(){var e=Object(u.a)(["\n    position : absolute;\n    bottom : 5px;\n    right : 5px;\n    width : 300px;\n    height : 80%;\n    background-color : #00000080;\n    color : #fff;\n    outline : 1px solid #5a5a5a;\n    font-size : 22px;\n    text-align : center;\n    display : flex;\n    flex-direction : column;\n    align-items : center;\n    overflow : auto;\n    z-index : 1;\n    &::-webkit-scrollbar {\n        display: none;\n    }\n    & .log-wrap {\n        width : 90%;\n        height : auto;\n        margin : 20px;\n        margin-bottom : 40px;\n        & .log-hitter {\n            margin-bottom : 10px;\n            color: #ff8585;\n            &.prev-hitter {\n            color: #adadff;\n            }\n        }\n        & .log-result {\n            margin-bottom : 15px;\n            color: #8b8bff;\n        }\n    }\n"]);return ce=function(){return e},e}var le=s.default.div(ce()),ie=function(){var e=Object(a.useContext)(Y).matchLog.map((function(e,n){return r.a.createElement("div",{className:"log-wrap",key:n},r.a.createElement("div",{className:"log-hitter ".concat(e.result&&"prev-hitter")},e.number,"\ubc88 \ud0c0\uc790 ",e.name),r.a.createElement("div",{className:"log-result"},e.result&&"".concat(e.result,"!")),r.a.createElement(oe,{log:e.log}))}));return r.a.createElement(le,null,e)};function ue(){var e=Object(u.a)(["\n    position : absolute;\n    bottom : 5%;\n    left : 50%;\n    transform : translateX(-50%);\n    width : 3%;\n    height : 9%;\n    background : url('/images/mario.png') no-repeat;\n    background-size : 100% 100%;\n    animation-duration: 2s;\n    animation-fill-mode: both;\n    animation-timing-function: cubic-bezier(.54,-0.39,.51,1.44);\n    &.first {\n        animation-name: first;\n    }\n    &.second {\n        animation-name: second;\n    }\n    &.third {\n        animation-name: third;\n    }\n    &.home {\n        animation-name: home;\n    }\n    @keyframes first {\n        0%  { bottom:5%; left:50%; }\n        99% { transform : translateX(-50%) rotate(3600deg) scaleX(1); bottom:32%; left:72%; }\n        100% { transform : translateX(-50%) scaleX(-1); bottom:32%; left:72%; }\n    }\n    @keyframes second {\n        0%  { bottom:32%; left:72%; }\n        99% { transform : translateX(-50%) rotate(3600deg) scaleX(1); bottom:48%; left:50%; }\n        100% { transform : translateX(-50%) scaleX(-1); bottom:48%; left:50%; }\n    }\n    @keyframes third {\n        0%  { bottom:48%; left:50%; }\n        99% { transform : translateX(-50%) rotate(3600deg) scaleX(1); bottom:32%; left:28%; }\n        100% { transform : translateX(-50%) scaleX(1); bottom:32%; left:28%; }\n    }\n    @keyframes home {\n        0%  { bottom:32%; left:28%; }\n        99% { transform : translateX(-50%) rotate(3600deg) scaleX(1); bottom:-10%; left:62.5%; }\n        100% { transform : translateX(-50%) scaleX(1); bottom:-10%; left:62.5%; }\n    }\n"]);return ue=function(){return e},e}var se=s.default.div(ue()),me=function(e){var n=e.currBase;return r.a.createElement(se,{className:n})},fe=function(e){var n=e.boxOnHitter,t=e.runners,a=g(v.a,.7);return n&&a.play(),r.a.createElement(r.a.Fragment,null,n&&r.a.createElement(me,null),t)},de=t(24),be=t(33),pe=t.n(be),he=t(34),ge=t.n(he);function Ee(){var e=Object(u.a)(["\n    position: absolute;\n    bottom: 5%;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 750px;\n    display: flex;\n    justify-content: space-between;\n    z-index: 2;\n    & button {\n        font-size: 25px;\n        width: 220px;\n        height: 60px;\n        border-radius: 10px;\n        outline: none;\n    }\n"]);return Ee=function(){return e},e}var ve=s.default.div(Ee()),xe=function(e){var n=e.boxOnHitter,t=e.setBoxOnHitter,o=e.runners,c=e.setRunners,l=Object(a.useContext)(Y),i=l.baseCount,u=l.setBaseCount,s=l.ballCountDispatch,m=g(pe.a,.7),f=g(ge.a,.7),d=Object(a.useRef)(),b=function(){s({type:"BALL"}),s({type:"STRIKE"}),s({type:"OUT"})};return Object(a.useEffect)((function(){return function(){return clearTimeout(d.current)}}),[]),r.a.createElement(ve,null,r.a.createElement("button",{onClick:function(){m.play(),t(!1),function(){var e=[].concat(Object(de.a)(o),[r.a.createElement(me,null)]).map((function(e,n){if(!(n>3)){var t;switch(e.props.currBase){case"first":t="second";break;case"second":t="third";break;case"third":t="home";break;default:t="first"}return r.a.createElement(me,Object.assign({key:n},{currBase:t}))}}));c(Object(de.a)(e))}(),d.current=setTimeout((function(){return t(!0)}),2500),b(),i+1>=4?setTimeout((function(){return f.play()}),1e3):u(i+1)},disabled:!n},"SWING"),r.a.createElement("button",{onClick:function(){alert("\uacf5 \uc0ac \uc911 \u314b \u315c")},disabled:!n},"WAIT"))};function ye(){var e=Object(u.a)(["\n    position : relative;\n    width: 100%;\n    height: 100%;\n    background : url('/images/ground.jpg') no-repeat;\n    background-size : 100% 100%;\n    overflow: hidden;\n"]);return ye=function(){return e},e}var Oe=s.default.div(ye()),je=function(){var e=Object(a.useState)(!0),n=Object(A.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)([]),l=Object(A.a)(c,2),i=l[0],u=l[1];return r.a.createElement(Oe,null,r.a.createElement(xe,{boxOnHitter:t,setBoxOnHitter:o,runners:i,setRunners:u}),r.a.createElement(fe,{boxOnHitter:t,runners:i}))},we=function(e){var n=e.scoreData,t=[r.a.createElement("td",{key:"1st"}),r.a.createElement("td",{key:"2st"}),r.a.createElement("td",{key:"3st"}),r.a.createElement("td",{key:"4st"}),r.a.createElement("td",{key:"5st"}),r.a.createElement("td",{key:"6st"}),r.a.createElement("td",{key:"7st"}),r.a.createElement("td",{key:"8st"}),r.a.createElement("td",{key:"9st"})],a=n.board.reduce((function(e,n,t){return e[t]=r.a.createElement("td",{key:"".concat(n.inning,"st")},n.scoring),e}),t);return r.a.createElement("tr",null,r.a.createElement("td",null,n.teamName),a,r.a.createElement("td",null,n.totalScore))};function ke(){var e=Object(u.a)(["\n    position: absolute;\n    top: -25%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 800px;\n    height: 250px;\n    border: 2px solid #fff;\n    color: #fff;\n    background-color: #000;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    animation-duration: 1.5s;\n    animation-fill-mode: both;\n    &.show-content {\n        animation-name: show-scoreInfo;\n    }\n    &.hide-content {\n        animation-name: hide-scoreInfo;\n    }\n    @keyframes show-scoreInfo {\n        0%  { top: -25%; }\n        100% { top: 25%; }\n    }\n    @keyframes hide-scoreInfo {\n        0%  { top: 25%; }\n        100% { top: -25%; }\n    }\n    & table {\n        text-align: center;\n        width: 90%;\n        & thead {\n            font-size: 30px;\n            border-bottom: 1px solid #fff;\n            & tr {\n                line-height: 50px;\n                & th {\n                }\n            }\n        }\n        & tbody {\n            font-size: 30px;\n            & tr {\n                line-height: 70px;\n                padding-top: 10px;\n                &:first-child {\n                    border-bottom: 1px solid #fff;\n                }\n                & td {\n                    &:last-child {\n                        color: #f00;\n                    }\n                }\n            }\n        }\n    }\n"]);return ke=function(){return e},e}function Se(){var e=Object(u.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #00000080;\n    z-index: 10;\n"]);return Se=function(){return e},e}var Te=s.default.div(Se()),Ne=s.default.div(ke()),Ie=function(e){var n=e.showContent,t=Object(a.useContext)(Y).detailScore,o=n.scoreInfo?"show-content":"hide-content";return r.a.createElement(Te,{"data-type":"contentPanel","data-content":"scoreInfo"},r.a.createElement(Ne,{className:o},r.a.createElement("table",null,r.a.createElement("colgroup",null,r.a.createElement("col",{width:"30%"})),r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"1"),r.a.createElement("th",null,"2"),r.a.createElement("th",null,"3"),r.a.createElement("th",null,"4"),r.a.createElement("th",null,"5"),r.a.createElement("th",null,"6"),r.a.createElement("th",null,"7"),r.a.createElement("th",null,"8"),r.a.createElement("th",null,"9"),r.a.createElement("th",null,"R"))),r.a.createElement("tbody",null,r.a.createElement(we,{scoreData:t.away}),r.a.createElement(we,{scoreData:t.home})))))},Ce=function(e){var n=e.teamData,t=n.teamInfo.map((function(e,n){return r.a.createElement("tr",{key:n},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.batterBox),r.a.createElement("td",null,e.hit),r.a.createElement("td",null,e.out),r.a.createElement("td",null,e.average))}));return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"5"},n.teamName)),r.a.createElement("tr",null,r.a.createElement("th",null,"\ud0c0\uc790"),r.a.createElement("th",null,"\ud0c0\uc11d"),r.a.createElement("th",null,"\uc548\ud0c0"),r.a.createElement("th",null,"\uc544\uc6c3"),r.a.createElement("th",null,"\ud3c9\uade0"))),r.a.createElement("tbody",null,t,r.a.createElement("tr",null,r.a.createElement("td",null,"Totals"),r.a.createElement("td",null,n.totalsBatterBox),r.a.createElement("td",null,n.totalsHit),r.a.createElement("td",null,n.totalsOut),r.a.createElement("td",null))))};function Ae(){var e=Object(u.a)(["\n    width: 1px;\n    height: 500px;\n    border-left: 1px solid #fff;\n"]);return Ae=function(){return e},e}function _e(){var e=Object(u.a)(["\n    position: absolute;\n    top: -50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 800px;\n    height: 600px;\n    border: 2px solid #fff;\n    color: #fff;\n    background-color: #000;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    animation-duration: 1.5s;\n    animation-fill-mode: both;\n    &.show-content {\n        animation-name: show-playerInfo;\n    }\n    &.hide-content {\n        animation-name: hide-playerInfo;\n    }\n    @keyframes show-playerInfo {\n        0%  { top: -50%; }\n        100% { top: 50%; }\n    }\n    @keyframes hide-playerInfo {\n        0%  { top: 50%; }\n        100% { top: -50%; }\n    }\n    & table {\n        font-size: 24px;\n        width: 350px;\n        text-align: center;\n        & thead {\n            & tr {\n                line-height: 50px;\n                font-size: 30px;\n                font-weight: 600;\n                border-bottom: 1px solid #fff;\n                &:last-child {\n                font-weight: 300;\n                    color: #918d8d;\n                    font-size: 24px;\n                }\n\n            }\n        }\n        & tbody {\n            & tr {\n                border-bottom: 1px solid #fff;\n                line-height: 40px;\n                &:last-child {\n                    font-weight: 600;\n                    border-bottom: none;\n                }\n            }\n        }\n    }\n"]);return _e=function(){return e},e}function ze(){var e=Object(u.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #00000080;\n    z-index: 10;\n"]);return ze=function(){return e},e}var Pe=s.default.div(ze()),Le=s.default.div(_e()),Re=s.default.div(Ae()),Be=function(e){var n=e.showContent,t=Object(a.useContext)(Y),o=t.gameId,c=t.playerList,l=t.playerListDispatch,i=R.BASE,u=R.PLAYER_LIST,s=n.playerInfo?"show-content":"hide-content",m=L((function(e){return l({type:"UPDATA_PLAYERLIST",payload:e})}),i+u(o));return r.a.createElement(Pe,{"data-type":"contentPanel","data-content":"playerInfo"},r.a.createElement(Le,{className:s},!m&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Ce,{teamData:c.away}),r.a.createElement(Re,null),r.a.createElement(Ce,{teamData:c.home}))))};function Xe(){var e=Object(u.a)(["\n    position: absolute;\n    top: 20px;\n    left: 50%;\n    transform: translateX(-50%);\n    display: flex;\n    justify-content: space-between;\n    width: 250px;\n    z-index: 10;\n    & button {\n        background-color: #000;\n        color: #fff;\n        outline: none;\n        border: 1px solid #ccc;\n        width: 100px;\n        height: 30px;\n        border-radius: 3px;\n    }\n"]);return Xe=function(){return e},e}var De=s.default.div(Xe()),Ge=function(e){var n=e.showContent,t=e.setShowPanel,a=e.setShowContent,o=function(e){t(e),a(e)};return r.a.createElement(De,null,r.a.createElement("button",{onClick:function(){return o(Object(C.a)(Object(C.a)({},n),{},{scoreInfo:!0}))}},"\uc0c1\uc138 \uc810\uc218"),r.a.createElement("button",{onClick:function(){return o(Object(C.a)(Object(C.a)({},n),{},{playerInfo:!0}))}},"\uc120\uc218 \uba85\ub2e8"))},Je=function(){var e={scoreInfo:!1,playerInfo:!1},n=Object(a.useState)(e),t=Object(A.a)(n,2),o=t[0],c=t[1],l=Object(a.useState)(e),i=Object(A.a)(l,2),u=i[0],s=i[1],m=Object(a.useRef)();return Object(a.useEffect)((function(){return function(){return c(Object(C.a)(Object(C.a)({},o),e)),clearTimeout(m.current)}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(Ge,{showContent:u,setShowPanel:c,setShowContent:s}),r.a.createElement("div",{onClick:function(e){var n=e.target;if("contentPanel"===n.dataset.type){var t=Object(C.a)({},u);t[n.dataset.content]=!1,s(Object(C.a)(Object(C.a)({},u),t)),m.current=setTimeout((function(){return c(Object(C.a)(Object(C.a)({},o),t))}),1200)}}},o.scoreInfo&&r.a.createElement(Ie,{showContent:u}),o.playerInfo&&r.a.createElement(Be,{showContent:u})))},Me=t(35),He=t.n(Me);function Ue(){var e=Object(u.a)(["\n    position : relative;\n    width : 100%;\n    height : 100%;\n"]);return Ue=function(){return e},e}var Ve=s.default.div(Ue()),Ye=function(){var e=Object(i.h)(),n=e.teamId,t=e.gameId;return I(He.a,.3,2e3),r.a.createElement(Ve,null,r.a.createElement(K,{teamId:n,gameId:t},r.a.createElement(te,null),r.a.createElement(ie,null),r.a.createElement(je,null),r.a.createElement(Je,null)))};function Ke(){return(Ke=Object(P.a)(z.a.mark((function e(n){var t,a,r,o=arguments;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:{method:"GET"},e.next=3,fetch(n,t);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Qe=function(e){return Ke.apply(this,arguments)},We=t(37),Fe=t.n(We);function Ze(){var e=Object(u.a)(["\n    position : relative;\n    width : 100%;\n    height : 80px;\n    background-color : #ffffff80;\n    border-radius : 10px;\n    margin-bottom : 10px;\n    text-align : center;\n    font-weight : 600;\n    display : flex;\n    justify-content : space-around;\n    align-items : center;\n    & .team-name {\n        font-size : 22px;\n        width : 50%;\n        color : #000;\n        text-decoration : none;\n        cursor: pointer;\n        &:hover {\n            color : #f00;\n        }\n    }\n    & .game-id {\n        position : absolute;\n        top : 10%;\n        left : 50%;\n        transform : translateX(-50%);\n        font-size : 15px;\n    }\n    & .vs {\n        position : absolute;\n        top : 50%;\n        left : 50%;\n        transform : translateX(-50%);\n        font-size : 18px;\n    }\n"]);return Ze=function(){return e},e}var qe=s.default.div(Ze()),$e=function(e){var n=e.gameData,t=e.setReady,o=e.setStateText,c=n.teamData,l=R.BASE,u=R.SELECT_TEAM,s=R.SELECT_GAME,m=g(Fe.a),f=Object(i.g)(),d=Object(a.useRef)(),b={method:"POST",credentials:"include",headers:{Cookie:"userId=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiJzZXVuZ2RlbmcxNyJ9.T-b6_BlzpTimCcbw5wa0PRQe9upCVk7YnMQlPwcq7So"}},p=function(){var e=Object(P.a)(z.a.mark((function e(n,a){var r,c;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l+u+n,c=l+s+a,e.next=4,Qe(r,b);case 4:if(e.sent){e.next=7;break}return e.abrupt("return",o("\uc774\ubbf8 \uc120\ud0dd\ub41c \ud300\uc785\ub2c8\ub2e4. \ub2e4\ub978 \ud300\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694!"));case 7:o("\uc0c1\ub300\ub97c \uae30\ub2e4\ub9ac\uace0 \uc788\uc2b5\ub2c8\ub2e4..."),t(!0),d.current=setInterval(Object(P.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Qe(c,b);case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:clearInterval(d.current),o("GET READY FOR THE NEXT BATTLE"),m.play(),setTimeout((function(){f.push("/match/".concat(n,"/").concat(a))}),4e3);case 9:case"end":return e.stop()}}),e)}))),2e3);case 10:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){return function(){return clearInterval(d.current)}}),[]);var h=c.map((function(e){return r.a.createElement(qe,{key:e.gameNumber},r.a.createElement("div",{"data-team-id":e.away.id,className:"team-name",onClick:function(){return p(e.away.id,e.gameNumber)}},e.away.name),r.a.createElement("span",{className:"game-id"},"GAME ",e.gameNumber),r.a.createElement("span",{className:"vs"},"VS"),r.a.createElement("div",{"data-team-id":e.home.id,className:"team-name",onClick:function(){return p(e.home.id,e.gameNumber)}},e.home.name))}));return r.a.createElement(r.a.Fragment,null,h)},en=t(38),nn=t.n(en),tn=t(39),an=t.n(tn);function rn(){var e=Object(u.a)(["\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #00000099;\n    z-index: 100;\n"]);return rn=function(){return e},e}function on(){var e=Object(u.a)(["\n    width : 400px;\n    height : 300px;\n    overflow : auto;\n    &::-webkit-scrollbar {\n        display: none;\n    }\n"]);return on=function(){return e},e}function cn(){var e=Object(u.a)(["\n    color : #fff;\n    position: relative;\n    top: -10px;\n    font-size : 20px;\n    font-weight : 600;\n    margin-bottom : 20px;\n    z-index: 110;\n"]);return cn=function(){return e},e}function ln(){var e=Object(u.a)(["\n    font-size : 70px;\n    font-weight : 600;\n    margin-bottom : 80px;\n    background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);   \n    -webkit-background-clip: text;\n    color: transparent;\n    animation-name: bingle;\n    animation-duration: 3s;\n    animation-timing-function:linear;\n    animation-iteration-count: infinite;\n    @keyframes bingle{\n        to { transform: rotate3d(0,1,0,360deg) }\n    }\n    &:hover {\n        animation-name: none;\n        transform : scale(1.5);\n    }\n"]);return ln=function(){return e},e}function un(){var e=Object(u.a)(["\n    width : 100%;\n    height : 100%;\n    display : flex;\n    flex-direction : column;\n    justify-content : center;\n    align-items : center;\n    background-color : #00000099;\n"]);return un=function(){return e},e}function sn(){var e=Object(u.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: -10;\n    width : 100%;\n    height : 100%;\n    background : url('/images/ground.jpg') no-repeat;\n    background-size : 100% 100%;\n    filter: blur(5px);\n    -webkit-filter: blur(5px);\n"]);return sn=function(){return e},e}function mn(){var e=Object(u.a)(["\n    width : 100%;\n    height : 100%;\n"]);return mn=function(){return e},e}var fn=s.default.div(mn()),dn=s.default.div(sn()),bn=s.default.div(un()),pn=s.default.div(ln()),hn=s.default.div(cn()),gn=s.default.div(on()),En=s.default.div(rn()),vn=function(){var e=Object(a.useState)(null),n=Object(A.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(!1),l=Object(A.a)(c,2),i=l[0],u=l[1],s=Object(a.useState)("\ucc38\uac00\ud560 \uac8c\uc784\uc744 \uc120\ud0dd\ud558\uc138\uc694!"),m=Object(A.a)(s,2),f=m[0],d=m[1];return L(o,R.BASE+R.GAMES),I(nn.a,.5,1e4),r.a.createElement(fn,null,r.a.createElement(bn,null,i&&r.a.createElement(En,null,r.a.createElement("img",{src:an.a,alt:"loading"})),r.a.createElement(pn,null,"\uac8c\uc784 \uc120\ud0dd ^.^"),r.a.createElement(hn,null,f),r.a.createElement(gn,null,t&&r.a.createElement($e,{gameData:t,setReady:u,setStateText:d}))),r.a.createElement(dn,null))};function xn(){var e=Object(u.a)(["\n    font-size : 55px;\n    font-weight : 600;\n    margin-bottom : 80px;\n    background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);   \n    -webkit-background-clip: text;\n    color: transparent;\n"]);return xn=function(){return e},e}function yn(){var e=Object(u.a)(["\n    width : 100%;\n    height : 100%;\n    background-color : #00000099;\n    display : flex;\n    align-items : center;\n    justify-content : center;\n"]);return yn=function(){return e},e}function On(){var e=Object(u.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: -10;\n    width : 100%;\n    height : 100%;\n    background : url('/images/bonobono.jpg') no-repeat;\n    background-size : 100% 100%;\n    filter: blur(5px);\n    -webkit-filter: blur(5px);\n"]);return On=function(){return e},e}function jn(){var e=Object(u.a)(["\n    width : 100%;\n    height : 100%;\n"]);return jn=function(){return e},e}var wn=s.default.div(jn()),kn=s.default.div(On()),Sn=s.default.div(yn()),Tn=s.default.div(xn()),Nn=function(){var e=Object(a.useState)(!0),n=Object(A.a)(e,2),t=n[0],o=n[1],c=Object(a.useRef)();return c.current=setTimeout((function(){return o(!1)}),4e3),Object(a.useEffect)((function(){return function(){return clearTimeout(c.current)}})),r.a.createElement(wn,null,r.a.createElement(Sn,null,t?r.a.createElement(Tn,null,"\uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \ud398\uc774\uc9c0 \uc785\ub2c8\ub2e4. \uba54\uc778 \ud398\uc774\uc9c0\ub85c \uc774\ub3d9 \ud569\ub2c8\ub2e4."):r.a.createElement(i.a,{to:"/"})),r.a.createElement(kn,null))};var In=function(){return r.a.createElement(l.a,null,r.a.createElement(p,null),r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",component:N}),r.a.createElement(i.b,{path:"/select",component:vn}),r.a.createElement(i.b,{path:"/match/:teamId/:gameId",component:Ye}),r.a.createElement(i.b,{path:"/api/githublogin"},r.a.createElement(i.a,{to:"/select"})),r.a.createElement(i.b,{component:Nn})))};c.a.render(r.a.createElement(In,null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.80336772.chunk.js.map