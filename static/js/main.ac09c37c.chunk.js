(this["webpackJsonpgd-theme"]=this["webpackJsonpgd-theme"]||[]).push([[0],{23:function(e,a,t){e.exports=t.p+"static/media/ghostrunner.651f78dd.jpg"},24:function(e,a,t){e.exports=t.p+"static/media/fortnite.d9675d3c.jpg"},25:function(e,a,t){e.exports=t.p+"static/media/logo.6217c48c.svg"},26:function(e,a,t){e.exports=t.p+"static/media/logo-mobile.604f0a8c.svg"},44:function(e,a,t){e.exports=t(62)},61:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),o=t(21),r=t.n(o),l=t(11),c=t(4),m=t(5),s=t(7),u=t(6),d=t(9),p=t(17),b=t(18),v=t(19),E=t(64),g=t(63),q=function(){return fetch("https://rawg-video-games-database.p.rapidapi.com/games?key=b6f70434a6494cb39f1330530bc54f62",{method:"GET",headers:{"x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com","x-rapidapi-key":"be0f949ad5msh1ea408010378e42p10c7ffjsn1ad474b482c3"}})};t(15),t(16),t(55);d.a.use([p.a]),d.a.use([b.a]),d.a.use([v.a]);var h={slidesPerView:1,spaceBetween:0,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{clickable:!0},preloadImages:!1,lazy:!0},f=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(e){var i;return Object(c.a)(this,t),(i=a.call(this,e)).state={isLoading:!0,games:[],error:null},i}return Object(m.a)(t,[{key:"componentDidMount",value:function(){this.fetchGames()}},{key:"fetchGames",value:function(){var e=this;q().then((function(e){return e.json()})).then((function(a){return e.setState({games:a.results,isLoading:!1})})).catch((function(a){return e.setState({error:a,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,a=e.games,t=e.isLoading;return n.a.createElement("div",{className:"hero-swiper"},t?n.a.createElement("div",{className:"spinner"}):n.a.createElement(E.a,Object.assign({className:"swiper"},h),a.slice(0,4).map((function(e){var a=e.id,t=e.background_image;return n.a.createElement(g.a,{className:"slide swiper-lazy",key:a,"data-background":t},n.a.createElement("div",{className:"content-wrapper"},n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"inner"},n.a.createElement("h3",null,"This is a Swiper"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))),n.a.createElement("div",{className:"swiper-lazy-preloader swiper-lazy-preloader-green"}))}))))}}]),t}(i.Component),N=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"hero"},n.a.createElement(f,null))}}]),t}(i.Component),x=t(10),j=t.n(x),y=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(e){var i;return Object(c.a)(this,t),(i=a.call(this,e)).state={isLoading:!0,games:[],error:null},i}return Object(m.a)(t,[{key:"componentDidMount",value:function(){this.fetchGames()}},{key:"fetchGames",value:function(){var e=this;q().then((function(e){return e.json()})).then((function(a){return e.setState({games:a.results,isLoading:!1})})).catch((function(a){return e.setState({error:a,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,a=e.games,t=e.isLoading;return n.a.createElement("div",{className:"home-content"},n.a.createElement("div",{className:"inner"},n.a.createElement("div",{className:"featured-products"},t?n.a.createElement("div",{className:"spinner"}):a.map((function(e){var a=e.id,t=e.background_image,i=e.name;return 28===a||1030===a||2454===a||5679===a||12020===a?n.a.createElement("div",{key:a,className:"block"},n.a.createElement(j.a,null,n.a.createElement("div",{className:"block-inner",style:{backgroundImage:"url(".concat(t,")")}},n.a.createElement("div",{className:"inner"},n.a.createElement("span",{className:"title"},i))))):null}))),n.a.createElement("div",{className:"content"},n.a.createElement("h2",null,"Free Games"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),n.a.createElement(l.a,{className:"btn",to:"".concat("","/store")},n.a.createElement("button",{className:"btn-primary"},"Search")))))}}]),t}(i.Component),O=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(e){var i;return Object(c.a)(this,t),(i=a.call(this,e)).state={isLoading:!0,games:[],error:null},i}return Object(m.a)(t,[{key:"componentDidMount",value:function(){this.fetchGames()}},{key:"fetchGames",value:function(){var e=this;q().then((function(e){return e.json()})).then((function(a){return e.setState({games:a.results,isLoading:!1})})).catch((function(a){return e.setState({error:a,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,a=e.games,t=e.isLoading;return n.a.createElement("div",{className:"top-sellers"},n.a.createElement("div",{className:"inner"},n.a.createElement("h3",null,"Top Sellers"),n.a.createElement("div",{className:"grid"},t?n.a.createElement("div",{className:"spinner"}):a.slice(0,9).map((function(e){var a=e.id,t=e.background_image,i=e.name,o=e.released;return n.a.createElement("div",{className:"box",key:a},n.a.createElement(j.a,null,n.a.createElement("div",{className:"block-image",style:{backgroundImage:"url(".concat(t,")")}})),n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"title"},i),n.a.createElement("div",{className:"price"},o)))})))))}}]),t}(i.Component),L=t(20);t(60);d.a.use([L.a]),d.a.use([b.a]),d.a.use([v.a]);var k={slidesPerView:4,spaceBetween:15,preloadImages:!1,lazy:!0,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},navigation:{prevEl:"#js-prev1",nextEl:"#js-next1"},breakpoints:{1200:{slidesPerView:4},768:{slidesPerView:2},320:{slidesPerView:1}}},w=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(e){var i;return Object(c.a)(this,t),(i=a.call(this,e)).state={isLoading:!0,games:[],error:null},i}return Object(m.a)(t,[{key:"componentDidMount",value:function(){this.fetchGames()}},{key:"fetchGames",value:function(){var e=this;q().then((function(e){return e.json()})).then((function(a){return e.setState({games:a.results,isLoading:!1})})).catch((function(a){return e.setState({error:a,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,a=e.games,t=e.isLoading;return n.a.createElement("div",{className:"recently-swiper"},t?n.a.createElement("div",{className:"spinner"}):n.a.createElement(E.a,Object.assign({className:"swiper swiper--2"},k),a.map((function(e){var a=e.id,t=e.background_image,i=e.name;return n.a.createElement(g.a,{className:"slide swiper-lazy",key:a,"data-background":t},n.a.createElement("div",{className:"description-wrapper"},n.a.createElement("div",{className:"description-inner"},n.a.createElement("h3",null,i)),n.a.createElement("div",{className:"swiper-lazy-preloader swiper-lazy-preloader-green"})))})),n.a.createElement("div",{id:"js-prev1",className:"swiper-button-prev"},n.a.createElement("span",{className:"icon-prev"})),n.a.createElement("div",{id:"js-next1",className:"swiper-button-next"},n.a.createElement("span",{className:"icon-next"}))))}}]),t}(i.Component),U=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"recently-updated"},n.a.createElement("div",{className:"inner"},n.a.createElement("h3",null,"Recently Updated"),n.a.createElement(w,null)))}}]),t}(i.Component),C=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(N,null),n.a.createElement(y,null),n.a.createElement(O,null),n.a.createElement(U,null))}}]),t}(i.Component),S=t(23),G={backgroundImage:"url(".concat(t.n(S).a,")")},I=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement(i.Fragment,null,n.a.createElement("div",{className:"about-content"},n.a.createElement("div",{className:"inner"},n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"block-wrapper"},n.a.createElement(j.a,null,n.a.createElement("div",{className:"aboutBg",style:G}))),n.a.createElement("div",{className:"content-right"},n.a.createElement("h2",null,"About Us"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),n.a.createElement(l.a,{className:"btn",to:"".concat("","/store")},n.a.createElement("button",{className:"btn-primary"},"Search")))))),n.a.createElement("div",{className:"about-updated"},n.a.createElement(U,null)))}}]),t}(i.Component),z=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(I,null))}}]),t}(i.Component),A=t(24),B={backgroundImage:"url(".concat(t.n(A).a,")")},D=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement(i.Fragment,null,n.a.createElement("div",{className:"store-content"},n.a.createElement("div",{className:"hero-wrapper"},n.a.createElement(j.a,null,n.a.createElement("div",{className:"heroBg",style:B}))),n.a.createElement("div",{className:"inner"},n.a.createElement("div",{className:"content"},n.a.createElement("h2",null,"Store"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")))),n.a.createElement(O,null))}}]),t}(i.Component),F=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(D,null))}}]),t}(i.Component),M=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"faq-content"},n.a.createElement("div",{className:"inner"},n.a.createElement("div",{className:"content"},n.a.createElement("h2",null,"Frequently Asked Questions"),n.a.createElement("div",{className:"title"},"Lorem ipsum dolor sit amet"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),n.a.createElement("div",{className:"title"},"Lorem ipsum dolor sit amet"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),n.a.createElement("div",{className:"title"},"Lorem ipsum dolor sit amet"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),n.a.createElement("hr",null),n.a.createElement("div",{className:"title"},"Lorem ipsum dolor sit amet"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),n.a.createElement("div",{className:"title"},"Lorem ipsum dolor sit amet"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),n.a.createElement("div",{className:"title"},"Lorem ipsum dolor sit amet"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),n.a.createElement("hr",null),n.a.createElement("div",{className:"title"},"Lorem ipsum dolor sit amet"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),n.a.createElement("div",{className:"title"},"Lorem ipsum dolor sit amet"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),n.a.createElement("div",{className:"title"},"Lorem ipsum dolor sit amet"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."))))}}]),t}(i.Component),P=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(M,null))}}]),t}(i.Component),V=t(25),T=t.n(V),_=t(27),J=t(26),Q=t.n(J);var H=function(e){var a=e.navLinks,t=e.logo,o=Object(i.useState)(0),r=Object(_.a)(o,2),c=r[0],m=r[1];return n.a.createElement("nav",{className:"header"},n.a.createElement("ul",{className:c?"active":""},n.a.createElement(l.a,{className:"logo-btn",to:"".concat("","/")},n.a.createElement("figure",{className:"image-logo"},n.a.createElement("img",{className:"desktop-logo",src:t,height:"40px",width:"272px",alt:"logo-nav-toggler"}),n.a.createElement("img",{className:"mobile-logo",src:Q.a,height:"40px",width:"47px",alt:"logo-nav-toggler"}))),n.a.createElement("button",{className:c?"mobile-btn":"mobile-btn active",onClick:function(){m(!c)}},n.a.createElement("span",{className:"bar"}),n.a.createElement("span",{className:"bar"}),n.a.createElement("span",{className:"bar"})),a.map((function(e,a){return n.a.createElement("li",{key:a},n.a.createElement(l.b,{path:e.path},(function(a){var t=a.match;return n.a.createElement(l.a,{className:t?"active":"",to:e.path},e.text)})))}))))},R=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("footer",{className:"footer"},n.a.createElement("div",{className:"inner"},n.a.createElement("span",{className:"copyright"},"Green Demon Copyright \xa9 2020")))}}]),t}(i.Component),K=function(e){var a=e.children,t=e.location;return n.a.useEffect((function(){return window.scrollTo(0,0)}),[t.pathname]),a};var W=function(){var e=[{text:"Home",path:"".concat("","/")},{text:"About",path:"".concat("","/about")},{text:"Store",path:"".concat("","/store")},{text:"FAQ",path:"".concat("","/faq")}];return n.a.createElement("div",{className:"App"},n.a.createElement(H,{navLinks:e,logo:T.a}),n.a.createElement(l.c,{primary:!1},n.a.createElement(K,{path:"/"},n.a.createElement(C,{path:"".concat("","/")}),n.a.createElement(z,{path:"".concat("","/about")}),n.a.createElement(F,{path:"".concat("","/store")}),n.a.createElement(P,{path:"".concat("","/faq")}))),n.a.createElement(R,null))};t(61);r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(W,null)),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.ac09c37c.chunk.js.map