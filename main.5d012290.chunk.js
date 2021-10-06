(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{40:function(e,t,c){},48:function(e,t,c){},50:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var n=c(2),i=c(41),r=c.n(i),a=c(13),s=(c(48),c(6)),l=c(11),o=c(5),j=c(29),d=function(e){return function(e){var t=e.length>0?e:[];localStorage.setItem("cart",JSON.stringify(t))}(e),{itemCount:e.reduce((function(e,t){return e+t.quantity}),0),total:e.reduce((function(e,t){return e+t.price*t.quantity}),0)}},u=function(e,t){switch(t.type){case"ADD_ITEM":return e.cartItems.find((function(e){return e.id===t.payload.id}))||e.cartItems.push(Object(o.a)(Object(o.a)({},t.payload),{},{quantity:1})),Object(o.a)(Object(o.a)({},e),{},{cartItems:Object(j.a)(e.cartItems)},d(e.cartItems));case"INCREASE":var c=e.cartItems.findIndex((function(e){return e.id===t.payload.id}));return e.cartItems[c].quantity++,Object(o.a)(Object(o.a)({},e),{},{cartItems:Object(j.a)(e.cartItems)},d(e.cartItems));case"DECREASE":var n=e.cartItems.findIndex((function(e){return e.id===t.payload.id})),i=e.cartItems[n];return i.quantity>1&&i.quantity--,Object(o.a)(Object(o.a)({},e),{},{cartItems:Object(j.a)(e.cartItems)},d(e.cartItems));case"REMOVE":var r=e.cartItems.filter((function(e){return e.id!==t.payload.id}));return Object(o.a)(Object(o.a)({},e),{},{cartItems:Object(j.a)(r)},d(r));case"CLEAR":return localStorage.removeItem("cart"),{cartItems:[],itemCount:0,total:0};default:return e}},b=c(0),h=Object(n.createContext)(),m=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[],O=Object(o.a)({cartItems:m},d(m)),x=function(e){var t=e.children,c=Object(n.useReducer)(u,O),i=Object(l.a)(c,2),r=i[0],a=i[1],s=Object(o.a)(Object(o.a)({},r),{},{addProduct:function(e){return a({type:"ADD_ITEM",payload:e})},increase:function(e){return a({type:"INCREASE",payload:e})},decrease:function(e){return a({type:"DECREASE",payload:e})},removeProduct:function(e){return a({type:"REMOVE",payload:e})},clearCart:function(){return a({type:"CLEAR"})}});return Object(b.jsx)(h.Provider,{value:s,children:t})},p=(c(50),Object(s.f)((function(e){e.history;var t=Object(n.useContext)(h),c=t.itemCount,i=t.cartItems;return console.log("CartItems: ",i),Object(b.jsxs)("div",{className:"cart-container",onClick:function(){return window.open("/thank-you","self")},children:[Object(b.jsx)("img",{src:"data:image/png;base64,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",alt:"shopping-cart-icon"}),c>0?Object(b.jsxs)("span",{className:"cart-count",children:[" ",c," "]}):null]})}))),g=c(12),f=c.n(g),v=c(19),A=c(33);c(77),c(57);A.a.initializeApp({apiKey:"AIzaSyCl6M203vcEBIWfKPssKZJC16xrG4Ookwo",authDomain:"gatto-grigio.firebaseapp.com",projectId:"gatto-grigio",storageBucket:"gatto-grigio.appspot.com",messagingSenderId:"661137128539",appId:"1:661137128539:web:a53fd0d5a6057e3f3e537e"});var N=A.a.firestore(),C=A.a.auth(),k=function(){var e=Object(v.a)(f.a.mark((function e(t,c){var n,i,r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=N.doc("users/".concat(t.uid)),e.next=6,n.get();case 6:if(e.sent.exists){e.next=18;break}return i=t.displayName,r=t.email,a=new Date,e.prev=10,e.next=13,n.set(Object(o.a)({displayName:i,email:r,createdAt:a},c));case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(10),console.log("error creating user",e.t0.message);case 18:return e.abrupt("return",n);case 19:case"end":return e.stop()}}),e,null,[[10,15]])})));return function(t,c){return e.apply(this,arguments)}}(),w=Object(n.createContext)(),y=function(e){var t=e.children,c=Object(n.useState)(null),i=Object(l.a)(c,2),r=i[0],a=i[1],s=Object(n.useState)(!0),j=Object(l.a)(s,2),d=j[0],u=j[1];Object(n.useEffect)((function(){var e=C.onAuthStateChanged(function(){var e=Object(v.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return e.next=3,k(t);case 3:e.sent.onSnapshot((function(e){a(Object(o.a)({id:e.id},e.data())),u(!1)})),e.next=9;break;case 7:a(t),u(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return function(){return e()}}),[]);var h={user:r,loading:d};return d?Object(b.jsx)("div",{children:"Loading..."}):Object(b.jsx)(w.Provider,{value:h,children:t})},E=(c(59),function(){var e=Object(n.useContext)(w).user;return console.log("user",e),Object(b.jsxs)("nav",{className:"nav-menu container",children:[Object(b.jsx)("div",{className:"logo",children:Object(b.jsx)("a",{href:"/",children:"Gatto Grigio"})}),Object(b.jsxs)("ul",{id:"header",children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/",children:"\u0413\u043e\u0441\u0442\u0438\u043d\u0430\u044f"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/kitchen",children:"\u041a\u0443\u0445\u043d\u044f"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/library",children:"\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/garden",children:"\u0421\u0430\u0434"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/bedroom",children:"\u0421\u043f\u0430\u043b\u044c\u043d\u0438"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/cabinet",children:"\u041a\u0430\u0431\u0438\u043d\u0435\u0442"})}),!e&&Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/sign-in",children:"\u0412\u0445\u043e\u0434"})}),e&&Object(b.jsx)("li",{onClick:function(){return C.signOut()},children:Object(b.jsx)("a",{children:"\u0412\u044b\u0445\u043e\u0434"})}),!e&&Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/sign-up",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})]}),Object(b.jsx)(p,{})]})}),I=(c(60),function(){var e=(new Date).getFullYear();return Object(b.jsxs)("div",{className:"footer",children:[e," \xa9 Gato Grigio"]})}),B=function(e){var t=e.children;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(E,{}),Object(b.jsx)("main",{children:t}),Object(b.jsx)(I,{})]})},S=(c(61),function(){return Object(b.jsx)("section",{className:"hero is-large is-info hero-image",children:Object(b.jsx)("div",{className:"hero-image main-picture",children:Object(b.jsx)("div",{className:"hero-body",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{className:"title",children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 Gatto Grigio"}),Object(b.jsx)("div",{className:"shop-now-btn",children:Object(b.jsx)("button",{className:"button is-black",id:"to-bed-rooms",children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043a\u043e\u043c\u043d\u0430\u0442\u0443"})})]})})})})}),V=(c(62),c.p+"static/media/bedroom.014ef340.png"),q=Object(s.f)((function(e){var t=e.history;return Object(b.jsx)("div",{className:"main-section-container",children:Object(b.jsxs)("div",{className:"main-section-middle",children:[Object(b.jsx)("div",{className:"ms-image",children:Object(b.jsx)("img",{src:V,alt:"main picture"})}),Object(b.jsxs)("div",{className:"ms-m-description",children:[Object(b.jsx)("h2",{children:"\u0421\u043f\u0430\u043b\u044c\u043d\u044f \u0434\u043b\u044f \u043e\u0442\u0434\u044b\u0445\u0430. \u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0434\u043b\u044f \u043e\u0442\u043f\u0443\u0441\u043a\u0430"}),Object(b.jsx)("p",{children:"\u0412 \u043d\u0430\u0448\u0438\u0445 \u0441\u043f\u0430\u043b\u044c\u043d\u044f\u0445 - \u043e\u0431\u044b\u0447\u043d\u043e\u0435 \u0434\u0435\u043b\u043e \u0438\u043c\u0435\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u0438\u0437 \u0441\u043f\u0430\u043b\u044c\u043d\u0438 \u0432 \u0431\u0443\u0434\u0443\u0430\u0440 \u0438 \u0433\u0430\u0440\u0434\u0435\u0440\u043e\u0431\u043d\u0443\u044e. \u0412 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043a\u043e\u043c\u043d\u0430\u0442\u0430\u0445 \u0435\u0441\u0442\u044c \u043c\u0430\u043d\u0441\u0430\u0440\u0434\u043d\u044b\u0435 \u0441\u043f\u0430\u043b\u044c\u043d\u0438 \u0441 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 \u043a\u043e\u043d\u0434\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f; \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043e\u043d\u0438 \u043e\u0442\u0434\u0435\u043b\u0435\u043d\u044b \u043e\u0442 \u043d\u0430\u0440\u0443\u0436\u043d\u043e\u0433\u043e \u0432\u043e\u0437\u0434\u0443\u0445\u0430, \u0432 \u043d\u0438\u0445 \u043e\u0431\u044b\u0447\u043d\u043e \u0442\u0435\u043f\u043b\u043e \u0437\u0438\u043c\u043e\u0439 \u0438 \u043f\u0440\u043e\u0445\u043b\u0430\u0434\u043d\u043e \u043b\u0435\u0442\u043e\u043c."}),Object(b.jsx)("button",{className:"button is-black",id:"to-bed-room",onClick:function(){return t.push("/bedroom/1")},children:"\u0421\u0414\u0415\u041b\u0410\u0422\u042c \u0411\u0420\u041e\u041d\u0418\u0420\u041e\u0412\u0410\u041d\u0418\u0415"})]})]})})})),R=(c(63),[{id:1,title:"\u0413\u043e\u0440\u044f\u0447\u0435\u0435 \u0441 \u043a\u0443\u0440\u0438\u0446\u0435\u0439",description:"\u041a\u0443\u0440\u0438\u0446\u0430, \u043f\u043e\u043c\u0438\u0434\u043e\u0440\u044b \u0438 \u043c\u0430\u0439\u043e\u043d\u0435\u0437",imageUrl:"/images/dinner1.png",url:"product/1",price:85},{id:5,title:"\u0421\u0430\u043b\u0430\u0442 \u0424\u0435\u0442\u0430",description:"\u0424\u0435\u0442\u0430, \u0431\u043e\u043b\u0433\u0430\u0440\u0441\u043a\u0438\u0439 \u043f\u0435\u0440\u0435\u0446, \u0446\u0432\u0435\u0442\u043d\u0430\u044f \u043a\u0430\u043f\u0443\u0441\u0442\u0430 \u0438 \u043b\u0438\u0441\u0442\u044c\u044f \u0441\u0430\u043b\u0430\u0442\u0430",imageUrl:"/images/salad1.png",url:"product/5",price:85},{id:6,title:"\u0421\u0430\u043b\u0430\u0442 \u0426\u0435\u0437\u0430\u0440\u044c",description:"\u042f\u0439\u0446\u0430, \u0447\u0438\u043f\u0441\u044b, \u0441\u043e\u0443\u0441, \u043a\u0443\u0440\u0438\u0446\u0430 \u0438 \u0441\u0430\u043b\u0430\u0442",imageUrl:"/images/salad2.png",url:"product/6",price:125},{id:7,title:"\u0424\u0440\u0443\u043a\u0442\u043e\u0432\u044b\u0439 \u0441\u0430\u043b\u0430\u0442",description:"\u041a\u043b\u0443\u0431\u043d\u0438\u043a\u0430, \u0433\u0440\u0435\u0439\u043f\u0444\u0440\u0443\u0442, \u043b\u0430\u0439\u043c, \u0432\u0438\u043d\u043e\u0433\u0440\u0430\u0434, \u0431\u0430\u043d\u0430\u043d\u044b \u0438 \u0437\u0435\u043b\u0435\u043d\u044b\u0435 \u043b\u0438\u0441\u0442\u044c\u044f",imageUrl:"/images/salad3.png",url:"product/7",price:100},{id:3,title:"\u0423\u0436\u0438\u043d \u0438\u0437 \u0441\u043e\u043c\u0430",description:"\u0421\u043e\u043c \u0438 \u043f\u0435\u0440\u043b\u043e\u0432\u0430\u044f \u043a\u0440\u0443\u043f\u0430",imageUrl:"/images/dinner3.png",url:"product/3",price:100},{id:2,title:"\u0420\u044b\u0431\u043d\u044b\u0439 \u0443\u0436\u0438\u043d",description:"\u041b\u043e\u0441\u043e\u0441\u044c \u0441 \u0440\u0438\u0441\u043e\u043c \u043d\u0430 \u0433\u0440\u0438\u043b\u0435",imageUrl:"/images/dinner2.png",url:"product/2",price:125},{id:4,title:"\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0438\u0430\u043d\u0441\u043a\u0438\u0439 \u0443\u0436\u0438\u043d",description:"\u0413\u0440\u0438\u0431\u044b \u0448\u0438\u0438\u0442\u0430\u043a\u0435, \u043f\u043e\u043c\u0438\u0434\u043e\u0440\u044b, \u0431\u0435\u0437\u0433\u043b\u044e\u0442\u0435\u043d\u043e\u0432\u044b\u0439 \u0445\u043b\u0435\u0431 \u0438 \u0441\u043e\u0443\u0441",imageUrl:"/images/dinner4.png",url:"product/4",price:90},{id:8,title:"\u0427\u0438\u043f\u0441\u044b \u0438 \u043e\u0432\u043e\u0449\u0438",description:"\u041f\u043e\u043c\u0438\u0434\u043e\u0440\u044b \u0447\u0435\u0440\u0440\u0438, \u0447\u0438\u043f\u0441\u044b, \u043b\u0443\u043a, \u043c\u044f\u0442\u0430 \u0438 \u0441\u0430\u043b\u0430\u0442",imageUrl:"/images/salad4.png",url:"product/8",price:90},{id:9,title:"\u0427\u0435\u0440\u043d\u044b\u0439 \u0447\u0430\u0439",description:"\u0427\u0430\u0439 \u043b\u0430\u0439\u043c\u043e\u0432\u044b\u0439",imageUrl:"/images/drink1.png",url:"product/9",price:85},{id:10,title:"\u0417\u0435\u043b\u0435\u043d\u044b\u0439 \u0447\u0430\u0439",description:"\u0427\u0430\u0439 \u0438 \u043c\u044f\u0442\u0430",imageUrl:"/images/drink2.png",url:"product/10",price:125},{id:11,title:"\u041a\u043e\u0444\u0435",description:"\u0410\u043c\u0435\u0440\u0438\u043a\u0430\u043d\u043e (\u043c\u043e\u043b\u043e\u043a\u043e \u0438\u043b\u0438 \u0432\u043e\u0434\u0430)",imageUrl:"/images/drink3.png",url:"product/11",price:100},{id:12,title:"\u0413\u0438\u0431\u0438\u0441\u043a\u0443\u0441",description:"\u0427\u0430\u0439 \u0438\u0437 \u0433\u0438\u0431\u0438\u0441\u043a\u0443\u0441\u0430 \u0438 \u0438\u043c\u0431\u0438\u0440\u044f",imageUrl:"/images/drink4.png",url:"product/12",price:90},{id:13,title:"Tom Yam Soup",description:"\u041a\u043e\u043a\u043e\u0441\u043e\u0432\u043e\u0435 \u043c\u043e\u043b\u043e\u043a\u043e, \u043a\u0440\u0435\u0432\u0435\u0442\u043a\u0438, \u0447\u0438\u043b\u0438, \u043b\u0430\u0439\u043c, \u0440\u0438\u0441",imageUrl:"/images/soup1.png",url:"product/13",price:85},{id:14,title:"\u0421\u0443\u043f \u0433\u0430\u0441\u043f\u0430\u0447\u043e",description:"\u0425\u043e\u043b\u043e\u0434\u043d\u044b\u0439 \u0442\u043e\u043c\u0430\u0442\u043d\u044b\u0439 \u0441\u0443\u043f \u0441 \u043e\u0432\u043e\u0449\u0430\u043c\u0438",imageUrl:"/images/soup2.png",url:"product/14",price:125},{id:15,title:"\u0413\u0440\u0438\u0431\u043d\u043e\u0439 \u043a\u0440\u0435\u043c-\u0441\u0443\u043f",description:"\u041a\u0430\u0440\u0442\u043e\u0444\u0435\u043b\u044c, \u0441\u043b\u0438\u0432\u043a\u0438, \u043c\u0430\u0441\u043a\u0430\u0440\u043f\u043e\u043d\u0435, \u0448\u0430\u043c\u043f\u0438\u043d\u044c\u043e\u043d\u044b,",imageUrl:"/images/soup3.png",url:"product/15",price:100},{id:16,title:"\u041c\u0438\u0441\u043e \u0441\u0443\u043f \u0438\u0437 \u0448\u0438\u0438\u0442\u0430\u043a\u0438",description:"\u041c\u0438\u0441\u043e, \u0433\u0440\u0438\u0431\u044b \u0448\u0438\u0438\u0442\u0430\u043a\u0438, \u043a\u0430\u0440\u0442\u043e\u0444\u0435\u043b\u044c, \u043b\u0443\u043a, \u044f\u0439\u0446\u043e, \u0442\u043e\u0444\u0443",imageUrl:"/images/soup4.png",url:"product/16",price:90}]),U=Object(n.createContext)(),Q=function(e){var t=e.children,c=Object(n.useState)(R),i=Object(l.a)(c,1)[0];return Object(b.jsx)(U.Provider,{value:{products:i},children:t})},D=(c(64),function(e,t){return t.find((function(t){return t.id===e.id}))});var H=function(e){var t=e.title,c=e.imageUrl,i=e.price,r=(e.history,e.description),a=e.url,s={title:t,imageUrl:c,price:i,description:r,url:a,id:e.id},l=Object(n.useContext)(h),o=l.addProduct,j=l.cartItems,d=l.increase,u=D(s,j);return Object(b.jsxs)("div",{className:"featured-product",children:[Object(b.jsx)("a",{href:a,children:Object(b.jsx)("div",{className:"featured-image",children:Object(b.jsx)("img",{src:c,alt:r})})}),Object(b.jsxs)("div",{className:"name-price",children:[Object(b.jsxs)("h3",{children:[" ",t]}),Object(b.jsxs)("p",{children:["\u20bd ",i," "]}),!u&&Object(b.jsx)("button",{className:"button is-black gato-btn",onClick:function(){return o(s)},children:"\u0412 \u041a\u041e\u0420\u0417\u0418\u041d\u0423 "}),u&&Object(b.jsx)("button",{className:"button is-white gato-btn",id:"btn-white-outline",onClick:function(){return d(s)},children:"\u0414\u041e\u0411\u0410\u0412\u0418\u0422\u042c \u0415\u0429\u0415 "})]})]})},z=function(){var e=Object(n.useContext)(U).products.filter((function(e,t){return t<4})).map((function(e){return Object(n.createElement)(H,Object(o.a)(Object(o.a)({},e),{},{key:e.id}))}));return Object(b.jsxs)("div",{className:"featured-collection container",children:[Object(b.jsx)("h2",{className:"featured-section-title",children:"\u041a\u041e\u041b\u041b\u0415\u041a\u0426\u0418\u042f \u0420\u0415\u0426\u0415\u041f\u0422\u041e\u0412"}),Object(b.jsx)("div",{className:"products",children:e})]})},P=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(B,{children:[Object(b.jsx)(S,{}),Object(b.jsx)(q,{}),Object(b.jsx)(z,{})]})})},Z=(c(65),function(){var e=Object(n.useContext)(U).products.map((function(e){return Object(n.createElement)(H,Object(o.a)(Object(o.a)({},e),{},{key:e.id}))}));return Object(b.jsx)(B,{children:Object(b.jsxs)("div",{className:"product-list-container",children:[Object(b.jsx)("h2",{className:"product-list-title",children:"\u041a\u0443\u0445\u043d\u044f"}),Object(b.jsx)("div",{className:"product-list",children:e})]})})}),F=function(){return Object(b.jsx)(B,{children:Object(b.jsx)("p",{style:{fontWeight:"bold",textAlign:"center"},children:"\u041a \u0421\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u043c\u044b \u043d\u0435 \u043d\u0430\u0448\u043b\u0438 \u044d\u0442\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"})})},G=(c(66),Object(s.f)((function(e){var t=e.match,c=e.history.push,i=Object(n.useContext)(U).products,r=Object(n.useContext)(h),a=r.addProduct,s=r.cartItems,o=r.increase,j=t.params.id,d=Object(n.useState)(null),u=Object(l.a)(d,2),m=u[0],O=u[1];if(Object(n.useEffect)((function(){var e=i.find((function(e){return Number(e.id)===Number(j)}));if(!e)return c("/kitchen");O(e)}),[j,m,c,i]),!m)return null;var x=m.imageUrl,p=m.title,g=m.price,f=m.description,v=D(m,s);return Object(b.jsx)(B,{children:Object(b.jsxs)("div",{className:"single-product-container",children:[Object(b.jsx)("div",{className:"product-image",children:Object(b.jsx)("img",{src:x,alt:f})}),Object(b.jsxs)("div",{className:"product-details",children:[Object(b.jsxs)("div",{className:"name-price",children:[Object(b.jsx)("h3",{children:p}),Object(b.jsxs)("p",{children:["\u20bd ",g]})]}),Object(b.jsxs)("div",{className:"add-to-cart-buttons",children:[!v&&Object(b.jsx)("button",{className:"button is-white gato-btn",id:"btn-white-outline-add",onClick:function(){return a(m)},children:"\u0412 \u041a\u041e\u0420\u0417\u0418\u041d\u0423"}),v&&Object(b.jsx)("button",{className:"button is-white gato-btn",id:"btn-white-outline-add",onClick:function(){return o(m)},children:"\u0414\u041e\u0411\u0410\u0412\u0418\u0422\u042c \u0415\u0429\u0415"}),Object(b.jsx)("button",{className:"button is-black gato-btn",id:"btn-white-outline-checkout",children:"\u041f\u0415\u0420\u0415\u0419\u0422\u0418 \u041a \u041e\u041f\u041b\u0410\u0422\u0415"})]}),Object(b.jsx)("div",{className:"product-description",children:Object(b.jsx)("p",{children:f})})]})]})})}))),L=function(e){var t=e.width;return Object(b.jsx)("svg",{width:t,fill:"currentColor",viewBox:"0 0 20 20",children:Object(b.jsx)("path",{d:"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z",clipRule:"evenodd",fillRule:"evenodd"})})},Y=function(e){var t=e.width;return Object(b.jsx)("svg",{width:t,fill:"currentColor",viewBox:"0 0 20 20",children:Object(b.jsx)("path",{d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z",clipRule:"evenodd",fillRule:"evenodd"})})},J=function(e){var t=e.width;return Object(b.jsx)("svg",{width:t,fill:"currentColor",viewBox:"0 0 20 20",children:Object(b.jsx)("path",{d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd",fillRule:"evenodd"})})},W=function(e){var t=e.title,c=e.imageUrl,n=e.price,i=e.quantity,r=e.id,a=e.description,s=e.increase,l=e.decrease,o=e.removeProduct,j={title:t,imageUrl:c,price:n,quantity:i,id:r,description:a};return Object(b.jsxs)("div",{className:"cart-item",children:[Object(b.jsxs)("div",{className:"item-image",children:[Object(b.jsx)("h4",{children:t}),Object(b.jsx)("img",{src:c,alt:r})]}),Object(b.jsx)("div",{className:"name-price",children:Object(b.jsxs)("p",{children:["\u20bd ",n]})}),Object(b.jsx)("div",{className:"quantity",children:Object(b.jsx)("p",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e: ".concat(i)})}),Object(b.jsxs)("div",{className:"btns-container",children:[Object(b.jsx)("button",{className:"btn-increase",onClick:function(){return s(j)},children:Object(b.jsx)(Y,{width:"20px"})}),1===i&&Object(b.jsx)("button",{className:"btn-trash",onClick:function(){return o(j)},children:Object(b.jsx)(J,{width:"20px"})}),i>1&&Object(b.jsx)("button",{className:"btn-decrease",onClick:function(){return l(j)},children:Object(b.jsx)(L,{width:"20px"})})]})]})},M=Object(s.f)((function(e){var t=e.itemCount,c=e.total,n=(e.history,e.clearCart);return Object(b.jsxs)("div",{className:"total-container",children:[Object(b.jsxs)("div",{className:"total",children:[Object(b.jsxs)("p",{children:["\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e: ",t]}),Object(b.jsx)("p",{children:"\u0418\u0442\u043e\u0433\u043e: ".concat(c)})]}),Object(b.jsxs)("div",{className:"checkout",children:[Object(b.jsx)("button",{className:"button is-black",onClick:function(){return window.open("/checkout","_self")},children:"\u041e\u0424\u041e\u0420\u041c\u0418\u0422\u042c"}),Object(b.jsx)("button",{className:"button is-white",onClick:function(){return n()},children:"\u041e\u0427\u0418\u0421\u0422\u0418\u0422\u042c"})]})]})})),K=(c(67),function(){var e=Object(n.useContext)(h),t=e.cartItems,c=e.itemCount,i=e.total,r=e.increase,a=e.decrease,s=e.removeProduct,l=e.clearCart,j={increase:r,decrease:a,removeProduct:s};return Object(b.jsx)(B,{children:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:"cart-title",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),0===t.length?Object(b.jsx)("div",{className:"empty-cart",children:"\u0412\u0430\u0448\u0430 \u043a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"cart-page",children:Object(b.jsx)("div",{className:"cart-item-container",children:t.map((function(e){return Object(n.createElement)(W,Object(o.a)(Object(o.a)({},e),{},{key:e.id},j))}))})}),Object(b.jsx)(M,{itemCount:c,total:i,clearCart:l})]})]})})}),X=c(24),T=function(e){var t=e.name,c=e.email,n=e.address,i={};return c||(i.email="Required"),t||(i.name="Required"),n||(i.address="Required"),i},_=function(e){var t=e.setShipping;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430"}),Object(b.jsx)(X.a,{initialValues:{email:"",name:"",address:""},validate:T,onSubmit:function(e){console.log("values",e),t(e)},children:function(e){var t=e.values,c=e.errors,n=e.handleChange,i=e.handleSubmit,r=c.name,a=c.email,s=c.address;return Object(b.jsxs)("form",{onSubmit:i,children:[Object(b.jsx)("div",{children:Object(b.jsx)("input",{type:"text",name:"name",onChange:n,value:t.name,placeholder:"\u0418\u043c\u044f",className:"gato-input "+(r?"error":"")})}),Object(b.jsx)("div",{children:Object(b.jsx)("input",{type:"email",name:"email",onChange:n,value:t.email,placeholder:"Email",className:"gato-input "+(a?"error":"")})}),Object(b.jsx)("div",{children:Object(b.jsx)("input",{type:"text",name:"address",onChange:n,value:t.address,placeholder:"\u0410\u0434\u0440\u0435\u0441",className:"gato-input "+(s?"error":"")})}),Object(b.jsx)("div",{className:"submit-btn",children:Object(b.jsx)("button",{type:"submit",className:"button is-black gato-btn submit",children:"\u041f\u0420\u041e\u0414\u041e\u041b\u0416\u0418\u0422\u042c"})})]})}})]})},$=(c(40),Object(s.f)((function(e){e.history;var t=Object(n.useContext)(h),c=t.cartItems,i=t.itemCount,r=t.total,a=t.increase,s=t.decrease,j=t.removeProduct,d=t.clearCart,u={increase:a,decrease:s,removeProduct:j},m=Object(n.useState)(null),O=Object(l.a)(m,2),x=O[0],p=O[1],g={display:x?"none":"block"},f={display:x?"block":"none"};return Object(b.jsx)(B,{children:Object(b.jsxs)("div",{className:"checkout",children:[Object(b.jsxs)("div",{style:g,children:[Object(b.jsx)("h2",{children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0437\u0430\u043a\u0430\u0437\u0435"}),Object(b.jsx)("h3",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e: ".concat(i)}),Object(b.jsx)("h4",{children:"\u041a \u043e\u043f\u043b\u0430\u0442\u0435: \u20bd".concat(r)}),Object(b.jsx)(_,{setShipping:p})]}),Object(b.jsxs)("div",{style:f,children:[Object(b.jsx)("h2",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"}),Object(b.jsx)("h3",{className:"checkout-block",children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e: ".concat(i)}),Object(b.jsx)("h4",{children:"\u041a \u043e\u043f\u043b\u0430\u0442\u0435: \u20bd".concat(r)}),Object(b.jsx)("h4",{children:"\u0418\u043c\u044f: ".concat(x?x.name:"none")}),Object(b.jsx)("h4",{children:"Email: ".concat(x?x.email:"none")}),Object(b.jsx)("h4",{children:"\u0410\u0434\u0440\u0435\u0441: ".concat(x?x.address:"none")}),Object(b.jsx)("button",{className:"button gato-btn is-black checkout-block",onClick:function(){window.open("/thank-you","self"),d()},children:"\u041f\u041e\u0414\u0422\u0412\u0415\u0420\u0414\u0418\u0422\u042c"})]}),0===c.length?Object(b.jsx)("div",{className:"empty-cart",children:"\u0412\u0430\u0448\u0430 \u043a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"cart-page",children:Object(b.jsx)("div",{className:"cart-item-container",children:c.map((function(e){return Object(n.createElement)(W,Object(o.a)(Object(o.a)({},e),{},{key:e.id},u))}))})}),Object(b.jsx)(M,{itemCount:i,total:r,clearCart:d})]})]})})}))),ee=function(e){return Object(b.jsx)(B,{children:Object(b.jsxs)("div",{className:"thank-you checkout",children:[Object(b.jsx)("h2",{className:"checkout-block",children:"\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u0437\u0430\u043a\u0430\u0437!"}),Object(b.jsx)("p",{className:"checkout-block",children:"Listen to your phone when we're calling for you..."}),Object(b.jsx)("p",{children:"Only in email info will be for you ..."}),Object(b.jsx)("p",{children:"don't wait for your visit and further return"}),Object(b.jsx)("p",{children:"But listen to your phone to tell us 'Confirm'"}),Object(b.jsx)("button",{className:"button gato-btn is-black checkout-block",onClick:function(){return e.push("/kitchen")},children:"CONTINUE SHOPPING"})]})})},te=(c(68),function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.firstname||(t.firstname="Required"),e.password||(t.password="Required"),t}),ce=Object(s.f)((function(e){var t=e.history.push,c=Object(n.useState)(null),i=Object(l.a)(c,2),r=i[0],a=i[1],s=function(){var e=Object(v.a)(f.a.mark((function e(c,n){var i,r,s,l,o,j;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.setSubmitting,r=c.firstname,s=c.email,l=c.password,e.prev=2,e.next=5,C.createUserWithEmailAndPassword(s,l);case 5:return o=e.sent,j=o.user,e.next=9,k(j,{displayName:r});case 9:t("/kitchen"),i(!1),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(2),console.log("error",e.t0),i(!1),a(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t,c){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"sign-up",children:[Object(b.jsx)("h1",{children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(b.jsx)("div",{className:"form-container",children:Object(b.jsx)(X.a,{initialValues:{firstname:"",email:"",password:""},validate:te,onSubmit:s,children:function(e){var t=e.values,c=e.errors,n=e.handleChange,i=e.handleSubmit,a=e.isSubmitting,s=c.firstname,l=c.email,o=c.password;return Object(b.jsxs)("form",{onSubmit:i,children:[Object(b.jsx)("div",{children:Object(b.jsx)("input",{type:"text",name:"firstname",onChange:n,value:t.firstname,placeholder:"\u0418\u043c\u044f",className:"gato-input "+(s?"error":"")})}),Object(b.jsx)("div",{children:Object(b.jsx)("input",{type:"email",name:"email",onChange:n,value:t.email,placeholder:"Email",className:"gato-input "+(l?"error":"")})}),Object(b.jsx)("div",{children:Object(b.jsx)("input",{type:"password",name:"password",onChange:n,value:t.password,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:"gato-input "+(o?"error":"")})}),Object(b.jsx)("div",{className:"submit-btn",children:Object(b.jsx)("button",{type:"submit",disabled:a,className:"button is-black gato-btn submit",children:"\u0420\u0415\u0413\u0418\u0421\u0422\u0420\u0410\u0426\u0418\u042f"})}),Object(b.jsx)("div",{className:"error-message",children:r&&Object(b.jsx)("p",{children:r.message})})]})}})})]})})),ne=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(B,{children:Object(b.jsx)(ce,{})})})},ie=(c(69),Object(s.f)((function(e){var t=e.history.push,c=Object(n.useState)(null),i=Object(l.a)(c,2),r=i[0],a=i[1],s=function(){var e=Object(v.a)(f.a.mark((function e(c,n){var i,r,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.setSubmitting,r=c.email,s=c.password,e.prev=2,e.next=5,C.signInWithEmailAndPassword(r,s);case 5:i(!1),t("/kitchen"),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0),i(!1),a(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,c){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"sign-in",children:[Object(b.jsx)("h1",{className:"form-container",children:"\u0412\u0445\u043e\u0434"}),Object(b.jsx)(X.a,{initialValues:{email:"",password:""},onSubmit:s,children:function(e){var t=e.values,c=e.errors,n=e.handleChange,i=e.handleSubmit,a=e.isSubmitting,s=c.email,l=c.password;return Object(b.jsxs)("form",{onSubmit:i,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"email",name:"email",onChange:n,value:t.email,placeholder:"Email",className:"gato-input "+(s?"error":"")}),Object(b.jsx)("input",{type:"password",name:"password",onChange:n,value:t.password,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:"gato-input "+(l?"error":"")})]}),Object(b.jsx)("div",{className:"submit-btn",children:Object(b.jsx)("button",{type:"submit",disabled:a,className:"button is-black gato-btn submit",children:"\u0412\u041e\u0419\u0422\u0418"})}),Object(b.jsx)("div",{className:"error-message",children:r&&Object(b.jsx)("p",{children:r.message()})})]})}})]})}))),re=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(B,{children:Object(b.jsx)(ie,{})})})},ae=(c(70),function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(B,{children:[Object(b.jsxs)("div",{className:"garden",children:[Object(b.jsx)("h1",{children:" \u0421\u0430\u0434 \u0434\u043b\u044f \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u0439 "}),Object(b.jsx)("section",{className:"hero is-large is-info hero-image ",children:Object(b.jsx)("div",{className:"hero-image garden-image",children:Object(b.jsx)("div",{className:"hero-body"})})})]}),Object(b.jsx)(ce,{})]})})}),se=(c(71),function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(B,{children:[Object(b.jsxs)("div",{className:"cabinet",children:[Object(b.jsx)("h1",{children:" \u041a\u0430\u0431\u0438\u043d\u0435\u0442 \u041c\u0438\u0441\u0442\u0435\u0440\u0430 \u0413\u0440\u0435\u044f "}),Object(b.jsx)("section",{className:"hero is-large is-info hero-image ",children:Object(b.jsx)("div",{className:"hero-image cabinet-image",children:Object(b.jsx)("div",{className:"hero-body"})})})]}),Object(b.jsx)(ce,{})]})})}),le=(c(72),function(){return Object(b.jsxs)(B,{children:[Object(b.jsxs)("div",{className:"bedroom",children:[Object(b.jsx)("h1",{children:" \u0421\u043f\u0430\u043b\u044c\u043d\u0438"}),Object(b.jsx)("section",{className:"hero is-large is-info  ",children:Object(b.jsx)("div",{className:"hero-image bedroom-image",children:Object(b.jsx)("div",{className:"hero-body"})})})]}),Object(b.jsx)(ce,{})]})}),oe=(c(73),function(){return Object(b.jsxs)("div",{className:"books",children:[Object(b.jsx)("h1",{children:"\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430"}),Object(b.jsx)("section",{className:"hero is-large is-info  ",children:Object(b.jsx)("div",{className:"hero-image books-image",children:Object(b.jsx)("div",{className:"hero-body"})})})]})}),je=(c(74),function(){var e=Object(n.useContext)(w).user;return Object(b.jsx)(B,{children:Object(b.jsxs)("div",{className:"library",children:[!e&&Object(b.jsxs)("div",{children:[Object(b.jsxs)("h2",{className:"disclaimer",children:["\u0423\u0441\u043b\u0443\u0433\u0438 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c.",Object(b.jsx)("br",{}),"\u0412 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0435 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0447\u0438\u0442\u0430\u0442\u044c \u043b\u044e\u0431\u0438\u043c\u044b\u0435 \u043a\u043d\u0438\u0433\u0438 \u043c\u0438\u0441\u0442\u0435\u0440\u0430 \u0413\u0440\u0435\u044f ",Object(b.jsx)("br",{})," \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 \u0432\u0441\u0435\u0433\u043e \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u0435\u0431\u044b\u0432\u0430\u043d\u0438\u044f"]}),Object(b.jsx)(ie,{})]}),e&&Object(b.jsx)("div",{children:Object(b.jsx)(oe,{})})]})})});c(75);var de=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(s.c,{children:[Object(b.jsx)(s.a,{exact:!0,path:"/",component:P}),Object(b.jsx)(s.a,{path:"/kitchen",component:Z}),Object(b.jsx)(s.a,{path:"/product/:id",component:G}),Object(b.jsx)(s.a,{path:"/cart",component:K}),Object(b.jsx)(s.a,{path:"/checkout",component:$}),Object(b.jsx)(s.a,{path:"/thank-you",component:ee}),Object(b.jsx)(s.a,{path:"/sign-up",component:ne}),Object(b.jsx)(s.a,{path:"/sign-in",component:re}),Object(b.jsx)(s.a,{path:"/library",component:je}),Object(b.jsx)(s.a,{path:"/garden",component:ae}),Object(b.jsx)(s.a,{path:"/bedroom",component:le}),Object(b.jsx)(s.a,{path:"/cabinet",component:se}),Object(b.jsx)(s.a,{path:"*",component:F})]})})},ue=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,78)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),r(e),a(e)}))};r.a.render(Object(b.jsx)(a.a,{children:Object(b.jsx)(Q,{children:Object(b.jsx)(x,{children:Object(b.jsx)(y,{children:Object(b.jsx)(de,{})})})})}),document.getElementById("root")),ue()}},[[76,1,2]]]);
//# sourceMappingURL=main.5d012290.chunk.js.map