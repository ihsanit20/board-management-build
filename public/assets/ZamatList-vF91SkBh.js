import{u as x}from"./zamat-q7u1FqO9.js";import{H as Z,r as _,o as $,a as s,c as l,b as t,w as j,i as y,z as D,F as k,m as M,t as b,v as V,s as B,q as z,d as S,I as g,j as w}from"./index-DDuwzY18.js";import{u as q}from"./department-C2auoSy6.js";const U={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},L={class:"card-bg md:p-8 p-4 md:w-1/2"},F=t("h2",{class:"text-xl font-bold mb-4"},"মারহালা যুক্ত করুন",-1),O={class:"mb-4"},T=t("label",{class:"block mb-2"},"ডিপার্টমেন্ট",-1),H=t("option",{disabled:"",value:""},"Select Department",-1),I=["value"],G={class:"mb-4"},J=t("label",{class:"block mb-2"},"নাম",-1),K={class:"flex justify-center gap-4"},P=t("button",{type:"submit",class:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"}," Save ",-1),Q={__name:"AddZamatModal",emits:["close","saved"],setup(p,{emit:c}){const o=c,n=Z({name:"",department_id:null}),a=x(),i=q(),u=_([]);$(async()=>{await i.fetchDepartments(),u.value=i.departments});const m=async()=>{await a.createZamat(n),o("saved"),o("close")};return(h,d)=>(s(),l("div",U,[t("div",L,[F,t("form",{onSubmit:j(m,["prevent"])},[t("div",O,[T,y(t("select",{"onUpdate:modelValue":d[0]||(d[0]=e=>n.department_id=e),class:"w-full p-2 border rounded",required:""},[H,(s(!0),l(k,null,M(u.value,e=>(s(),l("option",{key:e.id,value:e.id},b(e.name),9,I))),128))],512),[[D,n.department_id]])]),t("div",G,[J,y(t("input",{"onUpdate:modelValue":d[1]||(d[1]=e=>n.name=e),type:"text",class:"w-full p-2 border rounded",required:""},null,512),[[V,n.name]])]),t("div",K,[P,t("button",{type:"button",onClick:d[2]||(d[2]=e=>o("close")),class:"bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"}," Cancel ")])],32)])]))}},R={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},W={class:"card-bg md:p-8 p-4 md:w-1/2"},X=t("h2",{class:"text-xl font-bold mb-4"},"মারহালা সম্পাদনা",-1),Y={class:"mb-4"},tt=t("label",{class:"block mb-2"},"ডিপার্টমেন্ট",-1),et=t("option",{disabled:"",value:""},"Select Department",-1),st=["value"],ot={class:"mb-4"},at=t("label",{class:"block mb-2"},"নাম",-1),nt={class:"flex justify-center gap-4"},lt=t("button",{type:"submit",class:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"}," Save ",-1),dt={__name:"EditZamatModal",props:{zamat:Object},emits:["close","updated"],setup(p,{emit:c}){const o=c,n=p,a=Z({name:"",department_id:null}),i=x(),u=q(),m=_([]);B(()=>n.zamat,d=>{a.name=d.name||"",a.department_id=d.department_id||null},{immediate:!0}),$(async()=>{await u.fetchDepartments(),m.value=u.departments});const h=async()=>{await i.updateZamat(n.zamat.id,a),o("updated"),o("close")};return(d,e)=>(s(),l("div",R,[t("div",W,[X,t("form",{onSubmit:j(h,["prevent"])},[t("div",Y,[tt,y(t("select",{"onUpdate:modelValue":e[0]||(e[0]=r=>a.department_id=r),class:"w-full p-2 border rounded",required:""},[et,(s(!0),l(k,null,M(m.value,r=>(s(),l("option",{key:r.id,value:r.id},b(r.name),9,st))),128))],512),[[D,a.department_id]])]),t("div",ot,[at,y(t("input",{"onUpdate:modelValue":e[1]||(e[1]=r=>a.name=r),type:"text",class:"w-full p-2 border rounded",required:""},null,512),[[V,a.name]])]),t("div",nt,[lt,t("button",{type:"button",onClick:e[2]||(e[2]=r=>o("close")),class:"bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"}," Cancel ")])],32)])]))}},ct={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},it={class:"card-bg p-4 md:p-8"},rt=t("h2",{class:"text-xl font-bold mb-4"},"ডিলেট মারহালা",-1),ut={class:"flex justify-end mt-4"},mt={__name:"DeleteZamatModal",props:{zamat:{type:Object,required:!0}},emits:["close","deleted"],setup(p,{emit:c}){const o=c,n=p,a=x(),i=async()=>{await a.deleteZamat(n.zamat.id),o("deleted"),o("close")};return(u,m)=>(s(),l("div",ct,[t("div",it,[rt,t("p",null,[z("আপনি কি ("),t("b",null,b(p.zamat.name),1),z(") ডিলিট করতে চান?")]),t("div",ut,[t("button",{onClick:m[0]||(m[0]=h=>o("close")),class:"bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"}," না "),t("button",{onClick:i,class:"bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"}," ডিলেট ")])])]))}},_t={class:"my-container space-y-2"},pt=t("h1",{class:"title-lg"},"মারহালা তালিকা",-1),bt={key:0,class:"flex justify-center items-center"},ht=t("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1),ft=[ht],vt={key:1,class:"overflow-x-auto"},yt={class:"min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden"},xt=t("thead",null,[t("tr",{class:"bg-gray-200 text-gray-700 text-sm leading-normal"},[t("th",{class:"py-3 px-2 text-left"},"#"),t("th",{class:"py-3 px-2 text-left"},"নাম"),t("th",{class:"py-3 px-2 text-left"},"বিভাগ"),t("th",{class:"py-3 px-2 text-center"},"একশন")])],-1),gt={class:"text-gray-600 text-sm font-light"},wt={class:"py-3 px-2 text-left whitespace-nowrap"},$t={class:"flex items-center"},kt={class:"mr-2"},Mt={class:"font-medium"},Ct={class:"py-3 px-2 text-left"},zt={class:"title-md"},St={class:"py-3 px-2 text-left"},Zt={class:"title-md"},jt={class:"py-3 px-2 text-center"},Dt={class:"flex item-center justify-center gap-4"},Vt=["onClick"],qt=t("i",{class:"fas fa-edit"},null,-1),At=[qt],Et=["onClick"],Nt=t("i",{class:"fas fa-trash"},null,-1),Bt=[Nt],Ut={key:1},Lt=t("td",{colspan:"5",class:"text-center text-red-500 py-4"},"No zamats found",-1),Ft=[Lt],Gt={__name:"ZamatList",setup(p){const c=x(),o=_(!1),n=_(!1),a=_(!1),i=_(null),u=_(!0),m=()=>o.value=!0,h=async()=>{o.value=!1,await c.fetchZamats()},d=v=>{i.value=v,n.value=!0},e=async()=>{n.value=!1,await c.fetchZamats()},r=v=>{i.value=v,a.value=!0},A=()=>a.value=!1;return $(async()=>{try{await c.fetchZamats()}finally{u.value=!1}}),(v,Ot)=>(s(),l("div",_t,[t("div",{class:"flex justify-between items-center"},[pt,t("button",{class:"btn-2",onClick:m},"নতুন যুক্ত করুন")]),u.value?(s(),l("div",bt,ft)):(s(),l("div",vt,[t("table",yt,[xt,t("tbody",gt,[S(c).zamats.length?(s(!0),l(k,{key:0},M(S(c).zamats,(f,E)=>{var C;return s(),l("tr",{key:f.id,class:"border-b border-gray-200 hover:bg-gray-100"},[t("td",wt,[t("div",$t,[t("div",kt,[t("p",Mt,b(E+1),1)])])]),t("td",Ct,[t("p",zt,b(f.name),1)]),t("td",St,[t("p",Zt,b(((C=f.department)==null?void 0:C.name)||"N/A"),1)]),t("td",jt,[t("div",Dt,[t("button",{onClick:N=>d(f),class:"text-blue-600 hover:text-blue-800"},At,8,Vt),t("button",{onClick:N=>r(f),class:"text-red-600 hover:text-red-800"},Bt,8,Et)])])])}),128)):(s(),l("tr",Ut,Ft))])])])),o.value?(s(),g(Q,{key:2,class:"z-40",onClose:h})):w("",!0),n.value?(s(),g(dt,{key:3,class:"z-40",zamat:i.value,onClose:e},null,8,["zamat"])):w("",!0),a.value?(s(),g(mt,{key:4,class:"z-40",zamat:i.value,onClose:A},null,8,["zamat"])):w("",!0)]))}};export{Gt as default};