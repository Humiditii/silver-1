(this["webpackJsonpinventory-app"]=this["webpackJsonpinventory-app"]||[]).push([[0],{42:function(e,t,n){},44:function(e,t,n){e.exports={Loader:"Preloader_Loader__1aRDR",load2:"Preloader_load2__xussP"}},46:function(e,t,n){e.exports=n(76)},52:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=(n(48),n(22)),l=n.n(o),i=n(8),c=(n(52),n(7)),s=function(e){return e.children},u=n(3),m=n(4),p=n(6),d=n(5),h=function(e){return r.a.createElement("li",null,r.a.createElement(i.b,{to:e.link},e.navname))},E=n(24),g=n.n(E),b=n(9),f=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".sidenav");return g.a.Sidenav.init(e)}))}},{key:"render",value:function(){var e={links:["/","/login","/register"],name:["Home","Login","Register"]};return this.props.token&&(e={links:["/","/view-products","add-product","/sales","/new-sale","/logout"],name:["Home","Store","Add Product","Sales","Sell Now","Logout"]}),r.a.createElement(s,null,r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper  indigo lighten-1"},r.a.createElement(i.b,{to:"#",className:"brand-logo"},"SILVER-1"),r.a.createElement(i.b,{to:"#","data-target":"mobile-demo",className:"sidenav-trigger"},r.a.createElement("i",{className:"material-icons"},"menu")),r.a.createElement("ul",{className:"right hide-on-med-and-down"},e.links.map((function(t,n){return r.a.createElement(h,{key:n,link:t,navname:e.name[n]})}))))),r.a.createElement("ul",{className:"sidenav sidenav-close",id:"mobile-demo"},e.links.map((function(t,n){return r.a.createElement(h,{key:n,link:t,navname:e.name[n]})}))))}}]),n}(a.Component),v=Object(b.b)((function(e){return{token:e.auth.token}}))(Object(c.g)(f)),y=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement(s,null,r.a.createElement("div",{className:"page-footer  indigo lighten-1"},r.a.createElement("div",{className:"footer-copyright"},r.a.createElement("div",{className:"container",align:"center"},"Developed by Sebago ",r.a.createElement("i",{class:"tiny material-icons"},"copyright")," ",(new Date).getFullYear()," Copyright"))))}}]),n}(a.Component),S=n(42),O=n.n(S),j=function(e){return r.a.createElement(s,null,r.a.createElement(v,null),e.children,r.a.createElement(y,{className:O.a.footer}))},T=Object(c.g)((function(e){var t=["btn waves-effect waves btn-small ","material-icons left"],n=e.btncolour;t[0]=t[0]+n+" "+e.floatBtn;var a=r.a.createElement("button",{type:e.action,className:t[0],"data-target":e.dataTarget},r.a.createElement("i",{className:t[1]},e.iconname),e.btnname);return"link"===e.actionType&&(a=r.a.createElement(i.b,{type:e.action,to:e.whereto,className:t[0]},r.a.createElement("i",{className:t[1]},e.iconname),e.btnname)),r.a.createElement(s,null,a)})),_=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"componentDidMount",value:function(){g.a.AutoInit()}},{key:"render",value:function(){return r.a.createElement(s,null,r.a.createElement("div",{align:"center",style:{marginRight:"10px",marginLeft:"10px"}},r.a.createElement("h5",null,"Welcome to ",r.a.createElement("i",{style:{color:"indigo"}},"SILVER-1")," App"),r.a.createElement("div",{style:{fontSize:"20px",minHeight:"25vh",marginBottom:"60px"}},r.a.createElement("p",null,"This application helps to monitor goods appropriately. ",r.a.createElement("i",{class:"material-icons small"},"shopping_cart")),r.a.createElement("i",{class:"large material-icons"},"insert_chart"),r.a.createElement("p",null,"Human error is inevitable in huge transactions, though computers may not be  ",r.a.createElement("i",null,r.a.createElement("b",null,"100% perfect sometimes ",r.a.createElement("i",{class:"material-icons tiny"},"cloud_done"))),", however it is still the best solution to save humans from uneccessary stress ",r.a.createElement("i",{class:"material-icons small"},"sentiment_very_satisfied")," .")," ",r.a.createElement("p",null," Read through the Features and enjoy ",r.a.createElement("i",{class:"material-icons small"},"add"))," ",r.a.createElement("p",{style:{font:"10px"}}," Version 1.0.0  ",r.a.createElement("i",{class:"material-icons small"},"thumb_up"))),r.a.createElement("div",{style:{fontSize:"17px",minHeight:"25vh"}},r.a.createElement("h4",null," ",r.a.createElement("i",null," Features ")," "),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",null,r.a.createElement("ul",{className:"collapsible popout","data-collapsible":"accordion"},r.a.createElement("li",{className:"active"},r.a.createElement("div",{style:{color:"black"},className:"collapsible-header active"},r.a.createElement("i",{className:"material-icons"},"account_circle"),"Authentication and Authorization"),r.a.createElement("div",{className:"collapsible-body"},r.a.createElement("span",null," Get authenticated and authorized to be able to perform any process on this application. New users are required to click the get started button or from the side nav to get themselves registered. Registered Users can proceed to login. Any unauthorized request won't be allowed"))),r.a.createElement("li",null,r.a.createElement("div",{style:{color:"black"},className:"collapsible-header"},r.a.createElement("i",{className:"material-icons"},"add_circle"),"Add products to Store"),r.a.createElement("div",{className:"collapsible-body"},r.a.createElement("span",null,"Authorized User Administrator will be able to add new products to store, fully described by Price, Quantity and Name, then the application does the remaining automation and computation it self."))),r.a.createElement("li",null,r.a.createElement("div",{style:{color:"black"},className:"collapsible-header"},r.a.createElement("i",{className:"material-icons"},"edit"),"Edit Products"),r.a.createElement("div",{className:"collapsible-body"},r.a.createElement("span",null,"Authorized Administrator can click the edit button in front of the product to be edited/updated, then save the process."))),r.a.createElement("li",null,r.a.createElement("div",{style:{color:"black"},className:"collapsible-header"},r.a.createElement("i",{className:"material-icons"},"desktop_mac"),"View Products"),r.a.createElement("div",{className:"collapsible-body"},r.a.createElement("span",null,"Authorized Administrator can view the list of products available in the store with their respective prices, quantity and the sum of respective prices."))),r.a.createElement("li",null,r.a.createElement("div",{style:{color:"black"},className:"collapsible-header"},r.a.createElement("i",{className:"material-icons"},"shop"),"Sell Item"),r.a.createElement("div",{className:"collapsible-body"},r.a.createElement("span",null,"Authorized Administrator will be able to sell list of available products in the store, requesting from the product name, quantity."))),r.a.createElement("li",null,r.a.createElement("div",{style:{color:"black"},className:"collapsible-header"},r.a.createElement("i",{className:"material-icons"},"import_contacts"),"View Transactions record"),r.a.createElement("div",{className:"collapsible-body"},r.a.createElement("span",null,"Authorized Administrator will be able to view records of sold items, specifying the date range else the application pick the present date automatically."))),r.a.createElement("li",null,r.a.createElement("div",{style:{color:"black"},className:"collapsible-header"},r.a.createElement("i",{className:"material-icons"},"add"),"Install Application record"),r.a.createElement("div",{className:"collapsible-body"},r.a.createElement("span",null,"This application can be usd through a browser (Desktop, Mobile). If you are still viewing it from the browser, why not install it as a Progressive Web Application on Your mobile device. To get that done, visit the web page, click options on the top right conner, then tick add to home screen, OK."))))))),r.a.createElement("div",{align:"center",style:{paddingTop:"30px",marginBottom:"20px"}},r.a.createElement(T,{btncolour:"indigo",btnname:"Get Started",actionType:"link",iconname:"directions_bike",whereto:"/register"}))))}}]),n}(a.Component),k=n(16),A=n(1),I=function(e){return r.a.createElement(s,null,r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("i",{className:"material-icons prefix"},e.iconname),r.a.createElement("input",{value:e.formValue,id:e.inputid,type:e.inputtype,onChange:e.changed}),r.a.createElement("label",{htmlFor:e.inputid},e.labelname)))},w=n(43),N=n.n(w).a.create({baseURL:"http://localhost:3333/api/v1"}),D=function(e,t){return{type:"SIGNIN_SUCCESS",token:e,authMsg:t}},P=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),{type:"AUTH_LOGOUT"}},C=function(){return function(e){var t,n=localStorage.getItem("token");if(n){var a=new Date(localStorage.getItem("expirationDate"));a<=new Date?e(P()):(e(D(n,"Logged before")),e((t=a.getTime()-(new Date).getTime(),function(e){setTimeout((function(){e(P())}),t)})))}else e(P())}},L=n(44),U=n.n(L),x=function(){return r.a.createElement(s,null,r.a.createElement("div",{className:U.a.Loader},"Loading..."),r.a.createElement("h4",{align:"center",style:{color:"indigo"}},"Loading..."))},R=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={businessName:null,email:null,password:null,confirmPassword:null},e.onSubmitHandler=function(t){t.preventDefault();var n=e.state,a=n.businessName,r=n.email,o=n.password;o!==n.confirmPassword?e.props.onMismatch():e.props.onSignUp(a,r,o)},e.inputHandler=function(t,n){var a=Object(A.a)(Object(A.a)({},e.state),{},Object(k.a)({},n,t.target.value));e.setState(a)},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this,t={name:["Business Name","Email","Password","confirm Password"],type:["text","text","password","password"],icon:["person","mail","security","security"],stateItems:["businessName","email","password","confirmPassword"]},n=r.a.createElement("div",{style:{marginTop:"30px"}},r.a.createElement("div",{align:"center",style:{marginBottom:"30px"}},r.a.createElement("h5",null," ",r.a.createElement("b",null,r.a.createElement("u",null,"Signup As a New User")," "))),r.a.createElement("h5",{align:"center",style:{color:"red",fontSize:"19px"}},this.props.error),r.a.createElement("h5",{align:"center",style:{color:"red",fontSize:"19px"}},this.props.mismatch),r.a.createElement("form",{className:"col s12",onSubmit:this.onSubmitHandler},t.name.map((function(n,a){return r.a.createElement(I,{key:a,inputid:n,iconname:t.icon[a],inputtype:t.type[a],labelname:n,changed:function(n){return e.inputHandler(n,t.stateItems[a])}})})),r.a.createElement("div",{align:"center"},r.a.createElement(T,{action:"submit",btncolour:"indigo",btnname:"Register",iconname:"directions_bike"})),r.a.createElement("div",null,r.a.createElement("p",{style:{fontSize:"15px"},className:""},"Alread have an account?",r.a.createElement(i.b,{style:{color:"indigo"},to:"/login"}," ",r.a.createElement("u",null,"Login"))))));return this.props.loading&&(n=r.a.createElement(x,null)),r.a.createElement(s,null,n)}}]),n}(a.Component),M=Object(b.b)((function(e){return{token:e.auth.token,loading:e.auth.loading,error:e.auth.error,mismatch:e.auth.mismatch}}),(function(e){return{onSignUp:function(t,n,a){e(function(e,t,n){return function(a){a({type:"INIT_AUTH_START"});var r={businessName:e,email:t,password:n};N.post("/auth/signup",r,{headers:{"Content-Type":"application/json"}}).then((function(e){a({type:"SIGNUP_SUCCESS"})})).catch((function(e){a(function(e){return{type:"SIGNUP_FAIL",err:e}}(e))}))}}(t,n,a))},onMismatch:function(){e({type:"PASSWORD_MISMATCH"})}}}))(R),H=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={businessName:null,password:null},e.onSubmitHandler=function(t){t.preventDefault();var n=e.state,a=n.businessName,r=n.password;e.props.onSignIn(a,r)},e.inputHandler=function(t,n){var a=Object(A.a)(Object(A.a)({},e.state),{},Object(k.a)({},n,t.target.value));e.setState(a)},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this,t={name:["Business Name","Password"],type:["text","password"],icon:["person","security"],stateItem:["businessName","password"]},n=r.a.createElement("div",{style:{marginTop:"40px"}},r.a.createElement("div",{align:"center",style:{marginBottom:"30px"}},r.a.createElement("h5",null,r.a.createElement("u",null,"Login To Your Account")),"  ",r.a.createElement("i",{className:"large material-icons"},"account_circle")),r.a.createElement("h5",{align:"center",style:{color:"red",fontSize:"19px"}},this.props.error),r.a.createElement("h5",{align:"center",style:{color:"red",fontSize:"19px"}},this.props.authMsg),r.a.createElement("form",{className:"col s12",onSubmit:this.onSubmitHandler},t.name.map((function(n,a){return r.a.createElement(I,{key:a,inputid:n,iconname:t.icon[a],inputtype:t.type[a],labelname:n,changed:function(n){return e.inputHandler(n,t.stateItem[a])}})})),r.a.createElement("div",{align:"center"},r.a.createElement(T,{action:"submit",btncolour:"indigo",btnname:"Login",iconname:"directions_bike"})),r.a.createElement("div",null,r.a.createElement("p",{className:""},"Don't have an account?",r.a.createElement(i.b,{style:{color:"indigo"},to:"/register"}," ",r.a.createElement("u",null,"Register"))))));return this.props.token?r.a.createElement(c.a,{to:"/view-products"}):(this.props.loading&&(n=r.a.createElement(x,null)),r.a.createElement(s,null,n))}}]),n}(a.Component),G=Object(b.b)((function(e){return{token:e.auth.token,error:e.auth.error,loading:e.auth.loading,authMsg:e.auth.authMsg}}),(function(e){return{onSignIn:function(t,n){e(function(e,t){return function(n){n({type:"INIT_AUTH_START"});var a={businessName:e,password:t};N.post("/auth/signin",a,{headers:{"Content-Type":"application/json"}}).then((function(e){var t=new Date((new Date).getTime()+864e5);localStorage.setItem("expirationDate",t),localStorage.setItem("token",e.data.token),n(D(e.data.token,e.data.message))})).catch((function(e){n(function(e){return{type:"SIGNIN_FAIL",err:e}}(e.response.data.message))}))}}(t,n))}}}))(H),q=n(12),z=n(21),F=function(){return{type:"INIT_STORE_DETAILS"}},B=function(e){return function(t){t(F);var n={headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}};N.get("/product/products",n).then((function(e){t(function(e){var t=Object(z.a)(e).slice(0);return{type:"STORE_DATAILS",details:Object(q.a)(t)}}(Object(q.a)(e.data.data)))})).catch((function(e){t({type:"STORE_DATAILS_FAILED",error:e.response.data.message})}))}},W=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={productName:null,quantity:null,price:null},e.onSubmitHandler=function(t){t.preventDefault();var n=e.state,a=n.productName,r=n.quantity,o=n.price;e.props.onAddProduct(e.props.token,a,o,r)},e.inputHandler=function(t,n){var a=Object(A.a)(Object(A.a)({},e.state),{},Object(k.a)({},n,t.target.value));e.setState(a)},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.props.onAutoSignin(),console.log(this.props.token),this.props.history.replace("/add-product")}},{key:"render",value:function(){var e=this,t={name:["Product Name","Quantity","Price"],type:["text","number","number"],icon:["description","shopping_basket","money"],stateItem:["productName","quantity","price"]},n=r.a.createElement("div",{style:{marginTop:"40px"}},r.a.createElement("div",{align:"center"},r.a.createElement("h5",null,"Add Product")),r.a.createElement("div",{align:"center",style:{color:"green"}},this.props.successMessage?r.a.createElement("h5",null,r.a.createElement("i",{class:"small material-icons"},"done_all"),this.props.successMessage):null),r.a.createElement("form",{className:"col s12",onSubmit:this.onSubmitHandler},t.name.map((function(n,a){return r.a.createElement(I,{key:a,inputid:n,iconname:t.icon[a],inputtype:t.type[a],labelname:n,changed:function(n){return e.inputHandler(n,t.stateItem[a])}})})),r.a.createElement("div",{align:"center"},r.a.createElement(T,{action:"submit",btncolour:"indigo",btnname:"Add Product",iconname:"storage"}))),r.a.createElement("div",{align:"center",style:{marginTop:"30px"}},r.a.createElement(T,{btncolour:"indigo",btnname:"View Store",actionType:"link",iconname:"shop",whereto:"/view-products"})));return this.props.token?(this.props.adding&&(n=r.a.createElement(x,null)),r.a.createElement(s,null,r.a.createElement("div",null,n))):r.a.createElement(c.a,{to:"/login"})}}]),n}(a.Component),V=Object(b.b)((function(e){return{token:e.auth.token,adding:e.cart.adding,successMessage:e.cart.successMessage}}),(function(e){return{onAutoSignin:function(){e(C())},onAddProduct:function(t,n,a,r){e(function(e,t,n,a){return function(r){r({type:"ADD_PRODUCT_START"});var o={name:t,price:n,quantity:a},l={headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}};N.post("/product/add-product",o,l).then((function(e){r({type:"ADD_PRODUCT_SUCCESS",successMessage:e.data.message})})).catch((function(e){r({type:"ADD_PRODUCT_FAILED",error:e.response.data.message})}))}}(t,n,a,r))}}}))(W),Q=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).inputHandler=function(t,n,a,r){t.preventDefault(),e.props.onGotoEdit(a,r,n)},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.props.onAutoSignIn(),this.props.token&&this.props.onMount(this.props.token)}},{key:"render",value:function(){var e=this;if(!this.props.token)return r.a.createElement(c.a,{to:"/login"});var t="0";if(this.props.details.length>0&&(t=this.props.details.map((function(e){return e.totalPrice})).reduce((function(e,t){return e+t}),0)),this.props.editId)return r.a.createElement(c.a,{to:"/edit-product"});var n=r.a.createElement("div",{style:{fontSize:"15px"}},r.a.createElement("div",{align:"center"},r.a.createElement("h5",null,"List Of Products")),r.a.createElement("div",null,r.a.createElement("table",{className:"centered highlight "},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Product Name"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Item Price"),r.a.createElement("th",null,"Total Price"),r.a.createElement("th",null,"Edit/Update"))),r.a.createElement("tbody",null,this.props.details.length>0?this.props.details.map((function(t,n){return r.a.createElement(s,{key:n},r.a.createElement("tr",null,r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.quantity),r.a.createElement("td",null,"\u20a6",t.price),r.a.createElement("td",null,"\u20a6",t.totalPrice),r.a.createElement("td",{onClick:function(n){return e.inputHandler(n,t._id,t.quantity,t.price)}},r.a.createElement(T,{floatBtn:" btn-floating",btncolour:"indigo",btnname:"Edit",iconname:"edit"}))))})):null)),r.a.createElement("h5",{align:"center"},this.props.error)),r.a.createElement("h5",{align:"center",style:{fontSize:"19px",paddingTop:"40px"}}," Total Price : \u20a6",t," "),r.a.createElement("div",{align:"center",style:{marginTop:"30px",marginBottom:"30px"}},r.a.createElement(T,{btncolour:"indigo",btnname:"Add Product",actionType:"link",iconname:"shop",whereto:"/add-product"})),r.a.createElement("div",{align:"center",style:{marginTop:"30px",paddingBottom:"30px"}},r.a.createElement(T,{btncolour:"indigo",btnname:"Sell Now",actionType:"link",iconname:"storage",whereto:"/new-sale"})));return this.props.adding&&(n=r.a.createElement(x,null)),r.a.createElement(s,null,n)}}]),n}(a.Component),Y=Object(b.b)((function(e){return{token:e.auth.token,details:e.cart.details,error:e.cart.error,adding:e.cart.adding,editId:e.cart.editParams.productId}}),(function(e){return{onAutoSignIn:function(){e(C())},onMount:function(t){e(B(t))},onGotoEdit:function(t,n,a){e(function(e,t,n){return{type:"GET_EDIT_PARAMS",quantity:e,price:t,productId:n}}(t,n,a))}}}))(Q),J=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={quantity:e.props.editParams.quantity,price:e.props.editParams.price},e.onSubmitHandler=function(t){t.preventDefault();var n=e.state,a=n.quantity,r=n.price;e.props.onEdit(e.props.token,e.props.editParams.productId,a,r)},e.inputHandler=function(t,n){var a=Object(A.a)(Object(A.a)({},e.state),{},Object(k.a)({},n,t.target.value));e.setState(a)},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.props.onAutoSignin(),console.log(this.props.token)}},{key:"render",value:function(){var e=this,t={name:["Quantity","Price"],type:["number","number"],icon:["shopping_basket","money"],stateItem:["quantity","price"]},n=r.a.createElement("div",{style:{marginTop:"40px"}},r.a.createElement("div",{align:"center"},r.a.createElement("h5",null,"Edit Product")),r.a.createElement("div",{align:"center",style:{font:"15px",color:"green"}},this.props.updateMessage?r.a.createElement("h5",null,r.a.createElement("i",{class:"small material-icons"},"done_all"),this.props.updateMessage):null),r.a.createElement("div",{align:"center",style:{font:"15px",color:"red"}},r.a.createElement("h5",null,this.props.error)),r.a.createElement("form",{className:"col s12",onSubmit:this.onSubmitHandler},r.a.createElement("div",{align:"center",style:{fontSize:"16px",marginTop:"40px",color:"green"}},r.a.createElement("p",null," ",r.a.createElement("i",null,"Quantity"),": ",this.state.quantity),r.a.createElement("p",null,r.a.createElement("i",null,"Price"),": ",this.state.price)),t.name.map((function(n,a){return r.a.createElement(I,{key:a,inputid:n,iconname:t.icon[a],inputtype:t.type[a],labelname:n,changed:function(n){return e.inputHandler(n,t.stateItem[a])}})})),r.a.createElement("div",{align:"center"},r.a.createElement(T,{action:"submit",btncolour:"indigo",btnname:"Edit Product",iconname:"storage"}))),r.a.createElement("div",{align:"center",style:{marginTop:"50px"}},r.a.createElement(T,{btncolour:"indigo",btnname:"View Store",actionType:"link",iconname:"shop",whereto:"/view-products"})));return this.props.token?(this.props.adding&&(n=r.a.createElement(x,null)),r.a.createElement(s,null,r.a.createElement("div",null,n))):r.a.createElement(c.a,{to:"/login"})}}]),n}(a.Component),X=Object(b.b)((function(e){return{token:e.auth.token,editParams:e.cart.editParams,updateMessage:e.cart.updateMessage,error:e.cart.error}}),(function(e){return{onAutoSignin:function(){e(C())},onEdit:function(t,n,a,r){e(function(e,t,n,a){return function(r){r({type:"INIT_PRODUCT_EDIT"});var o={quantity:n,price:a},l={headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}},i="/product/edit-product/".concat(t);N.patch(i,o,l).then((function(e){console.log(e),r({type:"PRODUCT_EDIT_SUCCESS",successMsg:e.data.message})})).catch((function(e){r({type:"PRODUCT_EDIT_FAILED",error:e.response.data.message})}))}}(t,n,a,r))}}}))(J),K=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return r.a.createElement(c.a,{to:"/"})}}]),n}(a.Component),$=Object(b.b)(null,(function(e){return{onLogout:function(){return e(P())}}}))(K),Z=function(e,t,n){return function(a){a({type:"INIT_GET_SALES"});var r={headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}};t||n||(t="now",n="now");var o="/sale/sales/".concat(t,"/").concat(n);N.get(o,r).then((function(e){console.log(e),a(function(e){var t=Object(z.a)(e).slice(0);return{type:"GET_SALES_SUCCESS",details:Object(q.a)(t)}}(Object(q.a)(e.data.data)))})).catch((function(e){a({type:"GET_SALES_FAILED",error:e.response.data.message})}))}},ee=function(e){return function(t){t({type:"INT_GET_PRODUCT_LIST"});var n={headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}};N.get("/sale/product-list",n).then((function(e){t(function(e){var t=Object(z.a)(e).slice(0);return{type:"GET_PRODUCT_LIST_SUCCESS",products:Object(q.a)(t)}}(Object(q.a)(e.data.data)))})).catch((function(e){t({type:"GET_PRODUCT_LIST_FAILED",error:e.response.data.message})}))}},te=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={quantity:null,idNameObject:null},e.onSubmitHandler=function(t){t.preventDefault();var n=e.state.idNameObject;if(n){var a=n.split("-")[1],r=n.split("-")[0],o=n.split("-")[2];if(e.state.quantity>o)return alert("You do not have enough product. Please reduce it or Buy more product");e.props.iWantToSell(r,a,e.state.quantity,e.props.token)}else alert("Please Select an Option")},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.props.onAutoSignIn(),this.props.token&&(this.props.onLoadProducts(this.props.token),console.log(this.props.token),this.props.history.replace("/new-sale"))}},{key:"render",value:function(){var e=this,t=r.a.createElement("div",{style:{marginTop:"20px"}},r.a.createElement("div",{align:"center",style:{borderLeft:"30px"}},r.a.createElement("h5",null,"Sell Products")),r.a.createElement("div",{align:"center",style:{font:"17px",color:"green"}},this.props.success?r.a.createElement("p",null," ",r.a.createElement("i",{class:"small material-icons"},"done_all"),this.props.success):null),r.a.createElement("div",null,r.a.createElement("form",{className:"col s12",onSubmit:this.onSubmitHandler},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("select",{className:"browser-default",onChange:function(t){return e.setState({idNameObject:t.target.value})}},r.a.createElement("option",{defaultValue:"Select"},"Choose your option"),this.props.products.map((function(e,t){return r.a.createElement("option",{value:e[0]+"-"+e[1]+"-"+e[3],key:t},e[0])})))),r.a.createElement(I,{inputid:"quantity",iconname:"shopping_basket",inputtype:"number",labelname:"Quantity",changed:function(t){return e.setState({quantity:t.target.value})}}),r.a.createElement("div",{align:"center"},r.a.createElement(T,{action:"submit",btncolour:"indigo",btnname:"Sell Product",iconname:"storage"})),r.a.createElement("div",{align:"center",style:{marginTop:"50px"}},r.a.createElement(T,{btncolour:"indigo",btnname:"View Store",actionType:"link",iconname:"shop",whereto:"/view-products"})))));return this.props.token?(this.props.loading&&(t=r.a.createElement(x,null)),r.a.createElement(s,null,t)):r.a.createElement(c.a,{to:"/login"})}}]),n}(a.Component),ne=Object(b.b)((function(e){return{token:e.auth.token,products:e.sales.products,success:e.sales.success,loading:e.sales.loading}}),(function(e){return{onAutoSignIn:function(){e(C())},onLoadProducts:function(t){e(ee(t))},iWantToSell:function(t,n,a,r){e(function(e,t,n,a){return function(r){r({type:"INIT_SALE"});var o={product:e,productId:t,quantity:n},l={headers:{"Content-Type":"application/json",Authorization:"Bearer "+a}};N.post("/sale/new-sale",o,l).then((function(e){r({type:"SALE_SUCCESS",saleMessage:e.data.message})})).catch((function(e){r({type:"SALE_FAILED",error:e.response.data.message})}))}}(t,n,a,r))}}}))(te),ae=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={fromDate:null,toDate:null},e.onClickHandler=function(e){e.preventDefault(),alert("I was clicked")},e.onSubmitHandler=function(t){t.preventDefault(),e.props.onGetSale(e.props.token,e.state.fromDate,e.state.toDate)},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.props.onAutoSignIn(),this.props.token&&this.props.onGetSale(this.props.token)}},{key:"render",value:function(){var e=this;if(!this.props.token)return r.a.createElement(c.a,{to:"/login"});var t="0";this.props.details.length>0&&(t=this.props.details.map((function(e){return e.salesPrice})).reduce((function(e,t){return e+t}),0));var n=r.a.createElement("div",{style:{fontSize:"15px"}},r.a.createElement("div",{align:"center"},r.a.createElement("h5",null,"Sales Record")),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.onSubmitHandler},r.a.createElement(I,{inputid:"startdate",iconname:"calender",inputtype:"date",labelname:"From",changed:function(t){return e.setState({fromDate:t.target.value})}}),r.a.createElement(I,{inputid:"todate",iconname:"calender",inputtype:"date",labelname:"To",changed:function(t){return e.setState({toDate:t.target.value})}}),r.a.createElement("div",{align:"center"},r.a.createElement(T,{action:"submit",btncolour:"indigo",btnname:"View Records",iconname:"storage"})))),r.a.createElement("h5",{align:"center"},this.props.error),r.a.createElement("div",null,r.a.createElement("table",{className:"centered highlight "},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Product Name"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Sales Price"))),r.a.createElement("tbody",null,this.props.details.length>0?this.props.details.map((function(e,t){return r.a.createElement(s,{key:t},r.a.createElement("tr",null,r.a.createElement("td",null,e.productName),r.a.createElement("td",null,e.quantity),r.a.createElement("td",null,"\u20a6",e.salesPrice)))})):null))),r.a.createElement("h5",{align:"center",style:{fontSize:"19px",paddingTop:"40px"}}," Total Price : \u20a6",t," "));return this.props.loading&&(n=r.a.createElement(x,null)),r.a.createElement(s,null,n,r.a.createElement("div",{align:"center"},r.a.createElement(T,{btncolour:"indigo",btnname:"Sell Now",actionType:"link",iconname:"directions_bike",whereto:"/new-sale"})))}}]),n}(a.Component),re=Object(b.b)((function(e){return{token:e.auth.token,details:e.sales.details,error:e.sales.error,loading:e.sales.loading}}),(function(e){return{onAutoSignIn:function(){e(C())},onGetSale:function(t,n,a){e(Z(t,n,a))}}}))(ae);n(75);var oe=function(){return r.a.createElement("div",null,r.a.createElement(j,null,r.a.createElement("div",{className:"App-header"},r.a.createElement(c.d,null,r.a.createElement(c.b,{path:"/register",component:M}),r.a.createElement(c.b,{path:"/login",component:G}),r.a.createElement(c.b,{path:"/add-product",component:V}),r.a.createElement(c.b,{path:"/view-products",component:Y}),r.a.createElement(c.b,{path:"/edit-product",component:X}),r.a.createElement(c.b,{path:"/logout",component:$}),r.a.createElement(c.b,{path:"/new-sale",component:ne}),r.a.createElement(c.b,{path:"/sales",component:re}),r.a.createElement(c.b,{path:"/",exact:!0,component:_})))))},le=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ie(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ce=n(17),se=n(45),ue={error:!1,adding:!1,details:[],successMessage:null,updateMessage:null,editParams:{quantity:null,price:null,productId:null}},me=function(e,t){return Object(A.a)(Object(A.a)({},e),{},{adding:!0})},pe=function(e,t){return Object(A.a)(Object(A.a)({},e),{},{adding:!1,error:t.error,details:[]})},de=function(e,t){return Object(A.a)(Object(A.a)({},e),{},{adding:!1,error:!1,details:Object(q.a)(t.details)})},he=function(e,t){return Object(A.a)(Object(A.a)({},e),{},{adding:!1,successMessage:t.successMessage})},Ee=function(e,t){return Object(A.a)(Object(A.a)({},e),{},{adding:!1,error:t.error})},ge=function(e,t){return Object(A.a)(Object(A.a)({},e),{},{adding:!0})},be=function(e,t){return Object(A.a)(Object(A.a)({},e),{},{editParams:{quantity:t.quantity,price:t.price,productId:t.productId}})},fe=function(e,t){return Object(A.a)(Object(A.a)({},e),{},{adding:!0})},ve=function(e,t){return Object(A.a)(Object(A.a)({},e),{},{updateMessage:t.successMsg,editParams:{quantity:null,price:null,productId:null}})},ye=function(e,t){return Object(A.a)(Object(A.a)({},e),{},{error:t.error})},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_STORE_DETAILS":return me(e);case"STORE_DATAILS":return de(e,t);case"STORE_DATAILS_FAILED":return pe(e,t);case"ADD_PRODUCT_START":return ge(e);case"ADD_PRODUCT_FAILED":return Ee(e,t);case"ADD_PRODUCT_SUCCESS":return he(e,t);case"GET_EDIT_PARAMS":return be(e,t);case"INIT_PRODUCT_EDIT":return fe(e);case"PRODUCT_EDIT_FAILED":return ye(e,t);case"PRODUCT_EDIT_SUCCESS":return ve(e,t);default:return e}},Oe={error:null,loading:!1,details:[],success:null,products:[]},je=function(e,t){return Object(A.a)(Object(A.a)({},e),{},{loading:!0})},Te=function(e,t){return Object(A.a)(Object(A.a)({},e),{},{loading:!1,details:Object(q.a)(t.details),error:null})},_e=function(e,t){return Object(A.a)(Object(A.a)({},e),{},{loading:!1,error:t.error,details:[]})},ke=function(e,t){return Object(A.a)(Object(A.a)({},e),{},{loading:!0})},Ae=function(e,t){return Object(A.a)(Object(A.a)({},e),{},{loading:!1,error:t.error})},Ie=function(e,t){return Object(A.a)(Object(A.a)({},e),{},{products:Object(q.a)(t.products),loading:!1})},we=function(e,t){return Object(A.a)(Object(A.a)({},e),{},{loading:!0})},Ne=function(e,t){return Object(A.a)(Object(A.a)({},e),{},{success:t.saleMessage,loading:!1})},De=function(e,t){return Object(A.a)(Object(A.a)({},e),{},{loading:!1,error:t.error})},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_GET_SALES":return je(e);case"GET_SALES_FAILED":return _e(e,t);case"GET_SALES_SUCCESS":return Te(e,t);case"INIT_GET_PRODUCT_LIST":return ke(e);case"GET_PRODUCT_LIST_SUCCESS":return Ie(e,t);case"GET_PRODUCT_LIST_FAILED":return Ae(e,t);case"INIT_SALE":return we(e);case"SALE_FAILED":return De(e,t);case"SALE_SUCCESS":return Ne(e,t);default:return e}},Ce={error:!1,loading:!1,token:null,authMsg:null,signupMsg:null,mismatch:null},Le=function(e,t){return Object(A.a)(Object(A.a)({},e),{},{loading:!0})},Ue=function(e,t){return Object(A.a)(Object(A.a)({},e),{},{authMsg:t.authMsg,token:t.token,loading:!1})},xe=function(e,t){return Object(A.a)(Object(A.a)({},e),{},{loading:!1,error:t.err})},Re=function(e,t){return Object(A.a)(Object(A.a)({},e),{},{loading:!1,err:t.err,mismatch:null})},Me=function(e,t){return Object(A.a)(Object(A.a)({},e),{},{loading:!1})},He=function(e,t){return Object(A.a)(Object(A.a)({},e),{},{mismatch:"Password Does Not Match"})},Ge=function(e,t){return Object(A.a)(Object(A.a)({},e),{},{token:null,authMsg:null})},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_AUTH_START":return Le(e);case"SIGNIN_FAIL":return xe(e,t);case"SIGNIN_SUCCESS":return Ue(e,t);case"SIGNUP_FAIL":return Re(e,t);case"SIGNUP_SUCCESS":return Me(e);case"PASSWORD_MISMATCH":return He(e);case"AUTH_LOGOUT":return Ge(e);default:return e}},ze=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ce.d,Fe=Object(ce.c)({auth:qe,cart:Se,sales:Pe}),Be=Object(ce.e)(Fe,ze(Object(ce.a)(se.a))),We=r.a.createElement(b.a,{store:Be},r.a.createElement(i.a,null,r.a.createElement(oe,null)));l.a.render(We,document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/silver-1",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/silver-1","/service-worker.js");le?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ie(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ie(t,e)}))}}()}},[[46,1,2]]]);
//# sourceMappingURL=main.644fb102.chunk.js.map