(this["webpackJsonpblue-owl"]=this["webpackJsonpblue-owl"]||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),s=a(8),c=a.n(s),o=a(5),i=a.n(o),d=a(6),h=a(9),u=a(7),l=a(0),b=n.a.createContext();function p(e){var t=e.children,a=Object(r.useState)([]),n=Object(u.a)(a,2),s=n[0],c=n[1],o=Object(r.useState)(!1),p=Object(u.a)(o,2),j=p[0],f=p[1];function w(){return(w=Object(h.a)(i.a.mark((function e(t){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f(!1),e.next=4,fetch("https://www.randomnumberapi.com/api/v1.0/random?min=0&max=100&count=1");case 4:return a=e.sent,e.next=7,a.json();case 7:r=e.sent,c((function(e){return[].concat(Object(d.a)(e),[r[0]])})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}return Object(l.jsx)(b.Provider,{value:{isSorted:j,cards:s,setCards:c,handleAddCard:function(e){return w.apply(this,arguments)},handleSortCard:function(e){var t=s.sort((function(e,t){return e-t}));c(t),f(!0)},handleDeleteCard:function(e,t){var a=Object(d.a)(s);a.splice(t.id,1),c(a)}},children:t})}var j=function(){var e=Object(r.useContext)(b),t=e.handleAddCard,a=e.handleSortCard;return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("button",{onClick:t,className:"header-add-card-btn",children:"Add Card"}),Object(l.jsx)("button",{onClick:a,className:"header-add-card-btn",children:"Sort Cards"})]})};var f=function(e){var t=Object(r.useContext)(b).handleDeleteCard;return Object(l.jsxs)("div",{className:"card",children:[e.card,Object(l.jsx)("button",{onClick:function(a){return t(a,e)},className:"btn",children:"x"})]})};var w=function(){var e=Object(r.useContext)(b),t=e.cards,a=(e.handleSortCards,e.isSorted);return Object(l.jsxs)("div",{className:"cards",children:[a&&t.map((function(e,t){return Object(l.jsx)(f,{id:t,card:e},t)})),!a&&t.map((function(e,t){return Object(l.jsx)(f,{id:t,card:e},t)}))]})},m=a.p+"static/media/pic.6e66a029.jpg";var x=function(){return Object(l.jsxs)("div",{className:"instructions-container",children:[Object(l.jsx)("img",{className:"instructions-image",src:m,alt:"instructions"}),Object(l.jsx)("p",{className:"instructions",children:"Please create a responsive React application (using javascript or typescript) that displays a list of cards on a page as shown below. There is a fixed-width pane on the right side of the window that remains attached to the right side when the user re-sizes. Inside the pane, please paste a formatted display of these instructions. And if the browser width is small, hide the pane completely. There is a fixed-height toolbar on the top of the window that has buttons. There is a fixed-height footer on the bottom of the window that just shows the text \"footer\". The main center portion of the window is the card container. It should start out with zero cards. Cards are only added when the user clicks 'add card' in the top toolbar. It has a vertical scrollbar which can be used if there are too many cards to display at once. It lays out the cards in rows, wrapping as needed. In this mockup only 2 cards are shown per row, but if the browser is wider, 3 or more cards might fit in a row. If narrower, maybe only 1 card would be visible. Each card has a set pixel size, such as 300px by 250px, but you can decide what size you wish to use. Upon instantiation, a card should be given a random number between 0 and 100 and display it in the center of the card. Each card has a button in the top-right corner which can be used to delete the card. If the user clicks the 'sort cards' button at the top of the page, please sort the cards in order of the number that is shown in the center of each card."})]})};var O=function(){return Object(l.jsx)("footer",{className:"footer"})};var v=function(){return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(j,{}),Object(l.jsx)(w,{}),Object(l.jsx)(x,{}),Object(l.jsx)(O,{})]})};a(16);c.a.render(Object(l.jsx)(p,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.71d75243.chunk.js.map