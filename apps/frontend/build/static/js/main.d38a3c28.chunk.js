(this["webpackJsonpAU-frontend"]=this["webpackJsonpAU-frontend"]||[]).push([[0],{173:function(e,t,a){e.exports=a(311)},178:function(e,t,a){},311:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(31),r=a.n(o),c=(a(178),a(160)),i=a(8),u=a(44),s=a(146),m=a.n(s).a.create({baseURL:"http://localhost/api/"}),d=a(320),g=a(162),f=a(322),p=a(75),E=a(147),h=Object(n.createContext)({}),C=function(e){var t=e.cart,a=(e.summary,e.children),o=Object(n.useState)(t),r=Object(u.a)(o,2),c=r[0],i=r[1],s=Object(n.useRef)(!0);Object(n.useEffect)((function(){if(console.log("useEffect"),console.log(c),s.current)return console.log("First Run"),console.log("Fetching cart data"),g(),void(s.current=!1);f(c)}));var d=Object(n.useMemo)((function(){console.log("Calculate summary");var e,t,a={subtotal:0,estimated_total:0,tax:5,shipping:5},n=Object(E.a)(c);try{for(n.s();!(t=n.n()).done;)e=t.value,a.subtotal+=e.quantity*e.price}catch(l){n.e(l)}finally{n.f()}return a.estimated_total=a.subtotal+a.subtotal*a.tax/100+a.shipping,console.log(a),a}),[c]),g=function(){console.log("getBackendCart"),m.get("carts").then((function(e){console.log("Card data from backend");var t=e.data;console.log(t),t.length>0&&i(t)}),(function(e){console.log(e)}))},f=function(e){console.log("updateBackendCart"),console.log(e),console.log("updateBackendCart done"),m.post("carts",e).then((function(e){}),(function(e){console.log(e)}))},C={cart:c,setCart:i,addToCart:function(e){console.log("Add to cart!"),console.log(e),console.log("Current cart"),console.log(c);var t=c.findIndex((function(t){return t.product_id==e.id}));if(-1!==t)console.log("Item already exist in cart, update quantity"),c[t].quantity+=e.quantity,i((function(){return Object(p.a)(c)}));else{console.log("Item does not exist in cart, adding...");var a={product_id:e.id,product_title:e.title,quantity:e.quantity,price:e.price};i(c.concat([a]))}},updateCart:function(e){console.log("updateCart!"),console.log(e),console.log("What is in cart"),console.log(c);var t=c.findIndex((function(t){return t.product_id==e.id}));-1!==t&&(console.log("Item already exist in cart, update quantity"),c[t].quantity=e.quantity,i((function(){return Object(p.a)(c)})))},deleteFromCart:function(e){console.log("deleteFromCart!"),console.log(e),console.log("What is in cart"),console.log(c);var t=c.findIndex((function(t){return t.product_id==e.id}));-1!==t&&(console.log("Item found in cart, deleting..."),c[t].quantity+=e.quantity,c.splice(t,1),i((function(){return Object(p.a)(c)})))},summary:d};return l.a.createElement(h.Provider,{value:C},a)};h.Consumer;C.defaultProps={cart:[],summary:[]};var v=a(318),y=Array.from({length:10},(function(e,t){return t+1})).map((function(e){return{key:e,text:e,value:e}})),b=function(e){var t=e.value,a=e.onChange,n=e.item;return l.a.createElement(v.a,{placeholder:"Select Quantity",selection:!0,options:y,value:t,onChange:function(e,t){console.log("QuantityButton handleChange"),console.log(e),console.log(t),a(t.value,n)}})},x=function(e){var t=Object(n.useContext)(h).addToCart,a=Object(n.useState)(0),o=Object(u.a)(a,2),r=o[0],c=o[1];return l.a.createElement(d.a,{raised:!0,style:{margin:"10px"}},l.a.createElement(d.a.Content,null,l.a.createElement(g.a,{src:"https://react.semantic-ui.com/images/avatar/small/daniel.jpg",size:"large",wrapped:!0,ui:!1}),l.a.createElement(d.a.Header,null,e.title),l.a.createElement(d.a.Description,null,e.summary)),l.a.createElement(d.a.Content,{extra:!0},l.a.createElement(b,{value:r,onChange:c}),l.a.createElement("div",null,"Price: $",e.price),l.a.createElement(f.a,{color:"blue",onClick:function(){return t({id:e.id,title:e.title,quantity:r,price:e.price})}},"Add to Cart")))},j=a(316),O=a(323),k=a(319),q=a(317),I=function(e){var t=Object(n.useContext)(h),a=t.cart,o=t.updateCart,r=t.deleteFromCart,c=t.summary;function i(e,t){console.log("handleQuantityChange"),console.log(e,t),o({id:t.product_id,title:t.product_title,quantity:e})}return l.a.createElement(j.a,null,l.a.createElement(O.a,null,l.a.createElement("h2",null,"Shopping Cart:"),0===a.length?l.a.createElement("h4",null,"Your cart is empty"):l.a.createElement(l.a.Fragment,null,l.a.createElement(k.a,{divided:!0,verticalAlign:"middle"},a.map((function(e,t){return l.a.createElement(k.a.Item,{key:t},l.a.createElement(k.a.Content,{floated:"right"},l.a.createElement(f.a,{onClick:function(){return r({id:e.product_id})}},"Remove")),l.a.createElement(k.a.Content,{floated:"right"},"Price: ",e.price),l.a.createElement(k.a.Content,{floated:"right"},"Quantity:",l.a.createElement(b,{value:e.quantity,item:e,onChange:i})),l.a.createElement(g.a,{avatar:!0,src:"https://react.semantic-ui.com/images/avatar/small/daniel.jpg"}),l.a.createElement(k.a.Content,null,e.product_title))}))),l.a.createElement(q.a,null),l.a.createElement("h4",null,"Summary"),l.a.createElement(k.a,{divided:!0,verticalAlign:"middle"},l.a.createElement(k.a.Item,null,l.a.createElement(k.a.Content,null,"Subtotal"),l.a.createElement(k.a.Content,{floated:"right"},"$",c.subtotal)),l.a.createElement(k.a.Item,null,l.a.createElement(k.a.Content,{floated:"left"},"Shipping"),l.a.createElement(k.a.Content,{floated:"right"},"$",c.shipping)),l.a.createElement(k.a.Item,null,l.a.createElement(k.a.Content,{floated:"left"},"Tax"),l.a.createElement(k.a.Content,{floated:"right"},c.tax,"%")),l.a.createElement(k.a.Item,null,l.a.createElement(k.a.Content,{floated:"left"},"Estimated Total"),l.a.createElement(k.a.Content,{floated:"right"},"$",c.estimated_total)),l.a.createElement(q.a,null),l.a.createElement(f.a,{disabled:!0},"Checkout")))))},_=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){m.get("products").then((function(e){console.log("Fetching products");var t=e.data;o(t)}),(function(e){console.log(e)}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(j.a,null,l.a.createElement(O.a,null,l.a.createElement("h2",null,"Products: "),l.a.createElement("div",{className:"home",style:{display:"flex",flexWrap:"wrap"}},a.map((function(e,t){return l.a.createElement(x,{key:t,id:e.id,title:e.title,summary:e.summary,price:e.price})}))))),l.a.createElement("div",null,l.a.createElement(I,null)))},w=function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Error: Page does not exist!"))};var S=function(){return l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement(C,{cart:[]},l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/"},l.a.createElement(_,null)),l.a.createElement(i.a,{component:w})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(310);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[173,1,2]]]);
//# sourceMappingURL=main.d38a3c28.chunk.js.map