import{u as b,r as i,g as M,o as r,c as d,a as e,q as N,v as S,d as p,w as V,i as g,n as f,y as m,t as v,f as x,V as k}from"./index-BX3jB4bk.js";import{_ as w}from"./TextEditor-Dux4ohIu.js";const E={class:"my-container"},C={class:"card-bg items-center px-4 p-4 md:p-8 space-y-4"},D=e("h4",{class:"title-lg"},"সাইট সেটিংস",-1),T={class:"w-full bg-gray-100 p-4 rounded-md relative"},B=e("b",null,"স্ক্রলিং নোটিশ:",-1),U={key:0},q={key:1},A={class:"w-full bg-gray-100 p-4 rounded-md relative"},H=e("b",null,"মহাপরিচালকের বাণী:",-1),L={key:0},z=["innerHTML"],G={__name:"AppSettings",setup($){const t=b(),s=i(!1),a=i(!1);i(!1);const n=i(""),c=i("");i(""),M(()=>{t.fetchScrollingNotice(),t.fetchDirectorMessage(),t.fetchAboutUs()});const h=async()=>{var o;s.value?(await t.updateScrollingNotice({scrolling_notice:n.value}),t.scrollingNotice.scrolling_notice=n.value):n.value=((o=t.scrollingNotice)==null?void 0:o.scrolling_notice)||"",s.value=!s.value},y=async()=>{var o;a.value?(await t.updateDirectorMessage({director_message:c.value}),t.directorMessage.director_message=c.value):c.value=((o=t.directorMessage)==null?void 0:o.director_message)||"",a.value=!a.value};return(o,u)=>{var _;return r(),d("div",E,[e("div",C,[D,e("div",T,[B,s.value?(r(),d("div",U,[N(e("input",{type:"text","onUpdate:modelValue":u[0]||(u[0]=l=>n.value=l),class:"input-1 w-full"},null,512),[[S,n.value]])])):(r(),d("div",q,[p(g(k),{"pause-on-hover":!0,duration:25},{default:V(()=>{var l;return[e("div",null,v(((l=g(t).scrollingNotice)==null?void 0:l.scrolling_notice)||"স্ক্রলিং নোটিশ লোড হচ্ছে..."),1)]}),_:1})])),e("button",{class:"btn-3 px-2 py-0 border absolute top-2 right-2",onClick:h},[e("i",{class:f(s.value?"fas fa-save":"fas fa-edit")},null,2),m(" "+v(s.value?"Save":"Edit"),1)])]),e("div",A,[H,a.value?(r(),d("div",L,[p(w,{modelValue:c.value,"onUpdate:modelValue":u[1]||(u[1]=l=>c.value=l)},null,8,["modelValue"])])):(r(),d("div",{key:1,innerHTML:(_=g(t).directorMessage)==null?void 0:_.director_message},null,8,z)),e("button",{class:"btn-3 px-2 py-0 border absolute top-2 right-2",onClick:y},[e("i",{class:f(a.value?"fas fa-save":"fas fa-edit")},null,2),m(" "+v(a.value?"Save":"Edit"),1)])]),x("",!0)])])}}};export{G as default};