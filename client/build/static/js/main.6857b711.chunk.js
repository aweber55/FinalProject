(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a(85)},41:function(e,t,a){},43:function(e,t,a){},64:function(e,t,a){},76:function(e,t,a){},80:function(e,t,a){},82:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(31),c=a.n(l),i=(a(41),a(32)),s=a(10),o=a(11),m=a(13),u=a(12),d=a(14),h=(a(43),a(89)),p=a(88),E=a(87),g=a(8),f=a.n(g),b=(a(64),function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid"},r.a.createElement("div",{className:"container screen"},r.a.createElement("h1",{className:"display-4 lead"},"Dinner and a Beer")))}),v="https://www.food2fork.com/api/search?key=".concat("cb2e66a6abeb3b3928d0991bd137e659"),N={getFood:function(e){return f.a.get("".concat(v,'&q="').concat(e,'"&count=5'))},getBeer:function(e){return f.a.get("".concat("https://api.punkapi.com/v2/beers","?food=").concat(e))},createRecipes:function(e){return f.a.post("/",e)},saveRecipe:function(e){return console.log(e),f.a.post("/api/recipes",e)},getSearch:function(e){return f.a.get("https://www.google.com/search?q=".concat(e))},getUsers:function(){return f.a.get("/api/users")},getSavedRecipes:function(){return f.a.get("/api/recipes")}},S=function(e){var t=e.size,a=e.children;return r.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)},w=function(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)},y=function(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)},k=function(e){return r.a.createElement("form",{className:"search"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"food",id:"foodTitle"},"Type in your ingredient:"),r.a.createElement("input",{value:e.search,onChange:e.handleInputChange,name:"food",list:"foods",type:"text",className:"form-control",placeholder:"ex: Salmon",id:"food"}),r.a.createElement("button",{type:"submit",onClick:e.handleFormSubmit,className:" butnSubm btnSign"},"Search")))},C=function(e){return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",null,r.a.createElement("strong",null,e.title))),r.a.createElement("div",{className:"card-body"},e.children))},_=function(e){var t=e.children;return r.a.createElement("ul",{className:"list-group"},t)},A=function(e){return r.a.createElement("li",{className:"list-group-item"},e.children)},I=function(e){var t=e.title,a=e.source_url,n=(e.recipes,e._id,e.handleClick),l=e.buttonText;e.saved;return r.a.createElement(A,null,r.a.createElement("h3",null,r.a.createElement("em",{id:"titleWord"},t)," ",r.a.createElement("span",{className:"btn-group pull-right"},r.a.createElement("a",{value:t,onClick:function(){return n(t)},className:"btn btn-light",href:a,rel:"noopener noreferrer",target:"_blank",id:"href"},"View Recipe"),r.a.createElement("button",{className:"btn btn-primary btnSign"},"Save this",l))))},j=function(){return r.a.createElement("footer",null,r.a.createElement("hr",null),r.a.createElement("p",{className:"pull-right footbase"},r.a.createElement("i",{className:"fas fa-utensils","aria-hidden":"true"}),"  Powered by Punk API and Food2Fork  ",r.a.createElement("i",{className:"fas fa-beer"})),r.a.createElement("p",null," Punk Api and Food2Fork "))},O=a(33),P=a(17),R=a.n(P),F=function(e){return r.a.createElement("ul",{className:"nav justify-content-end"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active",href:"/Main"},"Search")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/Saved"},"Saved")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/Home"},"Logout")))},T=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1,recipes:[],beer:[],search:"",ingredients:"",title:"",food_pairing:"",foodArray:[],beerPair:[],beerArray:[],beerTips:"",myArray:[],message:"",value:"",Pair:"",source_url:"",users:[],savedRecipe:[]},a.onOpenModal=function(){a.setState({open:!0})},a.onCloseModal=function(){a.setState({open:!1})},a.getSavedRecipes=function(){N.getSavedRecipes().then(function(e){return a.setState({recipes:e.data})}).catch(function(e){return console.log(e)})},a.saveRecipe=function(e){var t={title:e.title,source_url:e.source_url};console.log(e.title),N.saveRecipe(t).then(function(e){console.log(e)}).catch(function(e){return console.log(e)})},a.getFood=function(e){a.setState({search:e}),N.getFood(a.state.search).then(function(e){a.setState({search:""}),console.log(e.data.recipes),a.setState({recipes:e.data.recipes})})},a.getBeer=function(e){a.setState({search:e}),N.getBeer(a.state.search).then(function(e){var t=a.state.beer;a.state.beer.push(e.data),a.setState({beerName:e.data[1].name,beerId:e.data[1].id,beerPair:e.data[1].food_pairing,beerDesc:e.data[1].description,beerTips:e.data[1].brewers_tips,beerImg:e.data[1].image_url,beerDate:e.data[1].first_brewed,beerTagline:e.data[1].tagline,beerAbv:e.data[1].abv}),a.setState({beer:e.data}),console.log(t)}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){a.setState({search:e.target.value})},a.handleFormSubmit=function(e){e.preventDefault(),a.getFood(),a.getBeer(),a.setState({search:""}),console.log(a.state.search)},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.state.open;return r.a.createElement(w,null,r.a.createElement(F,null),r.a.createElement(b,null),r.a.createElement(y,null,r.a.createElement(S,{size:"col-4"},r.a.createElement(C,{title:"Recipes"},this.state.recipes.length?r.a.createElement(_,null,this.state.recipes.map(function(t){return r.a.createElement(I,{key:t.recipe_id,_id:t.recipe_id,title:t.title,source_url:t.source_url,handleClick:e.saveRecipe,image_url:t.image_url})})):r.a.createElement("h2",{className:"text-center"},this.state.message))),r.a.createElement(S,{size:"col-4"},r.a.createElement("span",null,r.a.createElement("div",{id:"handleForm"},r.a.createElement(k,{handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange})))),r.a.createElement(S,{size:"col-4"},r.a.createElement("div",{className:"displayImage"},r.a.createElement("div",{className:"col-sm-12 smaller"},r.a.createElement(R.a,{id:"collapsible",transitionTime:500,easing:"cubic-bezier(0.175, 0.885, 0.32, 2.275)",trigger:"Check out BrewDog's recipe suggestions"},r.a.createElement("p",{className:"P5"},this.state.beerPair.map(function(e,t){var a="https://www.google.com/search?q="+e;return r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer",key:t},r.a.createElement("li",{key:t,id:e.beerPair_id}," ",e," "))}))),r.a.createElement(R.a,{transitionTime:500,easing:"cubic-bezier(0.175, 0.885, 0.32, 2.275)",trigger:"Mmmmm, A nice description"},r.a.createElement("p",{className:"P5"},this.state.beerDesc)),r.a.createElement(R.a,{transitionTime:500,easing:"cubic-bezier(0.175, 0.885, 0.32, 2.275)",trigger:"Some tips from the brewer"},r.a.createElement("p",{className:"P5"},this.state.beerTips),r.a.createElement("div",null,r.a.createElement("button",{id:"modalBtn",onClick:this.onOpenModal},"Some of the finer points"),r.a.createElement(O.a,{open:t,onClose:this.onCloseModal,center:!0},r.a.createElement("h3",{className:"Mwords"},"   Some of the fine print  "),"---------------------------------------",r.a.createElement("h3",{className:"Mwords"},"Date it was first brewed:  ",this.state.beerDate),"---------------------------------------------------------------------------",r.a.createElement("h3",{className:"Mwords"},"The ABV (Alcohol by volume) for this beer:  ",this.state.beerAbv),"---------------------------------------------------------------------------",r.a.createElement("h3",{className:"Mwords"},"The famous Tagline:  ",this.state.beerTagline))))),r.a.createElement("div",{className:"frameWork"},r.a.createElement("h1",{id:"beerName"},this.state.beerName," "),r.a.createElement("img",{id:"imageHolder",src:this.state.beerImg,alt:"",className:"img-responsive"}))))),r.a.createElement(j,null))}}]),t}(r.a.Component),x=(a(76),a(86)),M=function(e){return r.a.createElement("div",{className:"signBody"},r.a.createElement(w,null,r.a.createElement(b,null),r.a.createElement(y,null,r.a.createElement(S,{size:"col-4"},r.a.createElement("div",{id:"signIn"},r.a.createElement("h1",null,"SIGN IN"),r.a.createElement(x.a,{to:"/signup"},"Go to sign up"),r.a.createElement("form",null,r.a.createElement("label",null,"Email"),r.a.createElement("br",null),r.a.createElement("input",{value:e.username,onChange:e.handleChange,name:"username",type:"email",placeholder:"example@email.com"}),r.a.createElement("br",null),r.a.createElement("label",null,"Password"),r.a.createElement("br",null),r.a.createElement("input",{name:"password",type:"password",value:e.password,onChange:e.handleChange}),r.a.createElement("br",null),r.a.createElement("button",{className:"btnSign",type:"submit",name:"/auth/signin",onClick:e.handleSubmit},"Sign In")))))))},B=(a(80),function(e){return r.a.createElement("div",{className:"signUp"},r.a.createElement(b,null),r.a.createElement("div",{id:"signUp"},r.a.createElement("h1",null,"SIGN UP"),r.a.createElement(x.a,{to:"/"},"Go to sign in"),r.a.createElement("form",null,r.a.createElement("label",null,"Email"),r.a.createElement("br",null),r.a.createElement("input",{value:e.username,onChange:e.handleChange,name:"username",type:"email",placeholder:"example@email.com"}),r.a.createElement("br",null),r.a.createElement("label",null,"Password"),r.a.createElement("br",null),r.a.createElement("input",{name:"password",type:"password",value:e.password,onChange:e.handleChange}),r.a.createElement("br",null),r.a.createElement("button",{className:"btnSign",type:"submit",name:"/auth/signup",onClick:e.handleSubmit},"Sign Up"))))}),D=(a(82),function(e){return r.a.createElement("div",{className:"Home"},r.a.createElement(w,null,r.a.createElement(b,null),r.a.createElement(y,null,r.a.createElement(S,{size:"col-12"},r.a.createElement("div",{className:"container home"},r.a.createElement("div",{className:"col-4 center-block",id:"signIn"},r.a.createElement("h2",{className:"letters"},"Welcome to the Best Craft Beer and Food Pairing App!"),r.a.createElement("h2",{className:"letters"},e.auth.username),r.a.createElement("button",{className:"btnSign",onClick:e.handleLogout},"Log Out"),r.a.createElement(x.a,{to:"/Main"},r.a.createElement("button",{className:"btnSign",type:"button"},"Lets get Started"))))))))}),z=function(e){return r.a.createElement("div",{className:"card mb-3 card-save"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",null,r.a.createElement("strong",null,e.title))),r.a.createElement("div",{className:"card-body"},e.children))},L=function(e){var t=e.title,a=e.source_url;e.recipes,e._id,e.handleClick,e.buttonText,e.saved;return r.a.createElement(A,null,r.a.createElement("h3",null,r.a.createElement("em",{id:"titleWord"},t)," ",r.a.createElement("span",{className:"btn-group pull-right"},r.a.createElement("a",{value:t,className:"btn btn-light",href:a,rel:"noopener noreferrer",target:"_blank",id:"href"},"View Recipe"))))},U=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={recipes:[],beer:[],search:"",ingredients:"",title:"",food_pairing:"",foodArray:[],beerPair:[],beerArray:[],myArray:[],message:"",value:"",Pair:"",source_url:"",users:[],savedRecipe:[],f2f_url:[]},a.getSavedRecipes=function(){N.getSavedRecipes().then(function(e){return a.setState({key:e.data.recipe_id,recipes:e.data,title:e.data.title})}).catch(function(e){return console.log(e)})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getSavedRecipes()}},{key:"render",value:function(){return r.a.createElement(w,null,r.a.createElement(F,null),r.a.createElement(b,null),r.a.createElement(y,null,r.a.createElement(S,{size:"col-12"},r.a.createElement(z,{title:"Saved Recipes"},this.state.recipes.length?r.a.createElement(_,null,this.state.recipes.map(function(e,t){return r.a.createElement(L,{key:t,_id:e.recipe_id,title:e.title,source_url:e.source_url,image_url:e.image_url})})):r.a.createElement("h2",{className:"text-center"},this.state.message)))))}}]),t}(r.a.Component),W=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",auth:{userId:"",username:"",isAuthenticated:!1}},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(i.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault();var t={username:a.state.username,password:a.state.password};a.setState({username:"",password:""});var n=e.target.name;f.a.post(n,t).then(function(e){if(e.data.isAuthenticated){var t=e.data,n=t.userId,r=t.isAuthenticated,l=t.username;a.setState({auth:{userId:n,isAuthenticated:r,username:l}})}})},a.handleLogout=function(e){e.preventDefault(),f.a.get("/auth/logout").then(function(e){a.setState({auth:{userId:"",username:"",isAuthenticated:!1}})})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){var e=this;f.a.get("/auth/isAuthenticated").then(function(t){var a=t.data,n=a.userId,r=a.isAuthenticated,l=a.username;e.setState({auth:{userId:n,isAuthenticated:r,username:l}})})}},{key:"render",value:function(){var e=this,t=this.state.auth.isAuthenticated;return r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement(p.a,{exact:!0,path:"/",render:function(){return t?r.a.createElement(E.a,{to:"/home"}):r.a.createElement(M,{handleChange:e.handleChange,handleSubmit:e.handleSubmit,email:e.state.email,password:e.state.password})}}),r.a.createElement(p.a,{exact:!0,path:"/signup",render:function(){return t?r.a.createElement(E.a,{to:"/home"}):r.a.createElement(B,{handleChange:e.handleChange,handleSubmit:e.handleSubmit,email:e.state.email,password:e.state.password})}}),r.a.createElement(p.a,{exact:!0,path:"/home",render:function(){return t?r.a.createElement(D,{handleLogout:e.handleLogout,auth:e.state.auth}):r.a.createElement(E.a,{to:"/"})}}),r.a.createElement(p.a,{exact:!0,path:"/main",component:T}),r.a.createElement(p.a,{exact:!0,path:"/saved",component:U})))}}]),t}(n.Component);c.a.render(r.a.createElement(W,null),document.getElementById("root"))}},[[36,2,1]]]);
//# sourceMappingURL=main.6857b711.chunk.js.map