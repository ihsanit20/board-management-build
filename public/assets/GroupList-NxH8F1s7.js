import{u as h}from"./group-CBBPo9e8.js";import{N as j,r as b,o as $,d as l,c as n,a as t,p as C,j as w,C as V,F as x,e as k,t as y,v as D,B as L,y as M,h as m,k as _,b as S,L as Z}from"./index-D_k106gp.js";import{u as N}from"./zamat-CWOgTUay.js";const A={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},E={class:"card-bg md:p-8 p-4 md:w-1/2"},U={class:"mb-4"},F=["value"],O={class:"mb-4"},T={class:"flex justify-center gap-4"},H={__name:"AddGroupModal",emits:["close","saved"],setup(f,{emit:u}){const d=u,i=j({name:"",zamat_id:null}),r=h(),p=N(),c=b([]);$(async()=>{await p.fetchZamats(),c.value=p.zamats});const a=async()=>{await r.createGroup(i),d("saved"),d("close")};return(v,s)=>(l(),n("div",A,[t("div",E,[s[7]||(s[7]=t("h2",{class:"text-xl font-bold mb-4"},"গ্রুপ যুক্ত করুন",-1)),t("form",{onSubmit:C(a,["prevent"])},[t("div",U,[s[4]||(s[4]=t("label",{class:"block mb-2"},"মারহালা",-1)),w(t("select",{"onUpdate:modelValue":s[0]||(s[0]=e=>i.zamat_id=e),class:"w-full p-2 border rounded",required:""},[s[3]||(s[3]=t("option",{disabled:"",value:""},"Select Zamat",-1)),(l(!0),n(x,null,k(c.value,e=>(l(),n("option",{key:e.id,value:e.id},y(e.name),9,F))),128))],512),[[V,i.zamat_id]])]),t("div",O,[s[5]||(s[5]=t("label",{class:"block mb-2"},"নাম",-1)),w(t("input",{"onUpdate:modelValue":s[1]||(s[1]=e=>i.name=e),type:"text",class:"w-full p-2 border rounded",required:""},null,512),[[D,i.name]])]),t("div",T,[s[6]||(s[6]=t("button",{type:"submit",class:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"}," Save ",-1)),t("button",{type:"button",onClick:s[2]||(s[2]=e=>d("close")),class:"bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"}," Cancel ")])],32)])]))}},I={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},J={class:"card-bg md:p-8 p-4 md:w-1/2"},K={class:"mb-4"},P=["value"],Q={class:"mb-4"},R={class:"flex justify-center gap-4"},W={__name:"EditGroupModal",props:{group:Object},emits:["close","updated"],setup(f,{emit:u}){const d=u,i=f,r=j({name:"",zamat_id:null}),p=h(),c=N(),a=b([]);L(()=>i.group,s=>{r.name=s.name||"",r.zamat_id=s.zamat_id||null},{immediate:!0}),$(async()=>{await c.fetchZamats(),a.value=c.zamats});const v=async()=>{await p.updateGroup(i.group.id,r),d("updated"),d("close")};return(s,e)=>(l(),n("div",I,[t("div",J,[e[7]||(e[7]=t("h2",{class:"text-xl font-bold mb-4"},"গ্রুপ সম্পাদনা",-1)),t("form",{onSubmit:C(v,["prevent"])},[t("div",K,[e[4]||(e[4]=t("label",{class:"block mb-2"},"মারহালা",-1)),w(t("select",{"onUpdate:modelValue":e[0]||(e[0]=o=>r.zamat_id=o),class:"w-full p-2 border rounded",required:""},[e[3]||(e[3]=t("option",{disabled:"",value:""},"Select Zamat",-1)),(l(!0),n(x,null,k(a.value,o=>(l(),n("option",{key:o.id,value:o.id},y(o.name),9,P))),128))],512),[[V,r.zamat_id]])]),t("div",Q,[e[5]||(e[5]=t("label",{class:"block mb-2"},"নাম",-1)),w(t("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>r.name=o),type:"text",class:"w-full p-2 border rounded",required:""},null,512),[[D,r.name]])]),t("div",R,[e[6]||(e[6]=t("button",{type:"submit",class:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"}," Save ",-1)),t("button",{type:"button",onClick:e[2]||(e[2]=o=>d("close")),class:"bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"}," Cancel ")])],32)])]))}},X={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},Y={class:"card-bg p-4 md:p-8"},tt={class:"flex justify-end mt-4"},et={__name:"DeleteGroupModal",props:{group:{type:Object,required:!0}},emits:["close","deleted"],setup(f,{emit:u}){const d=u,i=f,r=h(),p=async()=>{await r.deleteGroup(i.group.id),d("deleted"),d("close")};return(c,a)=>(l(),n("div",X,[t("div",Y,[a[3]||(a[3]=t("h2",{class:"text-xl font-bold mb-4"},"ডিলেট গ্রুপ",-1)),t("p",null,[a[1]||(a[1]=M("আপনি কি (")),t("b",null,y(f.group.name),1),a[2]||(a[2]=M(") ডিলিট করতে চান?"))]),t("div",tt,[t("button",{onClick:a[0]||(a[0]=v=>d("close")),class:"bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"}," না "),t("button",{onClick:p,class:"bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"}," ডিলেট ")])])]))}},st={class:"my-container space-y-2"},ot={class:"flex justify-between items-center"},lt={key:1,class:"overflow-x-auto"},at={class:"min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden"},nt={class:"bg-gray-200 text-gray-700 text-sm leading-normal"},dt={class:"text-gray-600 text-sm font-light"},rt={class:"py-3 px-2 text-left whitespace-nowrap"},it={class:"flex items-center"},ut={class:"mr-2"},pt={class:"font-medium"},ct={class:"py-3 px-2 text-left"},mt={class:"title-md"},bt={class:"py-3 px-2 text-left"},yt={class:"title-md"},ft={class:"py-3 px-2 text-left"},vt={class:"flex justify-start items-center"},xt={key:0,class:"title-md pr-2"},gt={class:"title-md"},_t={key:1},$t={__name:"GroupList",setup(f){const u=h(),d=b(!1),i=b(!1),r=b(!1),p=b(null),c=b(!0),a=async()=>{d.value=!1,await u.fetchGroups()},v=async()=>{i.value=!1,await u.fetchGroups()},s=()=>r.value=!1;return $(async()=>{try{await u.fetchGroups()}finally{c.value=!1}}),(e,o)=>(l(),n("div",st,[t("div",ot,[o[0]||(o[0]=t("h1",{class:"title-lg"},"গ্রুপ তালিকা",-1)),m("",!0)]),c.value?(l(),_(Z,{key:0})):(l(),n("div",lt,[t("table",at,[t("thead",null,[t("tr",nt,[o[1]||(o[1]=t("th",{class:"py-3 px-2 text-left"},"#",-1)),o[2]||(o[2]=t("th",{class:"py-3 px-2 text-left"},"মারহালা",-1)),o[3]||(o[3]=t("th",{class:"py-3 px-2 text-left"},"নাম",-1)),o[4]||(o[4]=t("th",{class:"py-3 px-2 text-left"},"অঞ্চল",-1)),m("",!0)])]),t("tbody",dt,[S(u).groups.length?(l(!0),n(x,{key:0},k(S(u).groups,(g,q)=>{var z;return l(),n("tr",{key:g.id,class:"border-b border-gray-200 hover:bg-gray-100"},[t("td",rt,[t("div",it,[t("div",ut,[t("p",pt,y(q+1),1)])])]),t("td",ct,[t("p",mt,y(((z=g.zamat)==null?void 0:z.name)||"N/A"),1)]),t("td",bt,[t("p",yt,y(g.name),1)]),t("td",ft,[t("div",vt,[(l(!0),n(x,null,k(g.areas,(G,B)=>(l(),n(x,{key:G.id},[B?(l(),n("span",xt,",")):m("",!0),t("p",gt,y(G.name),1)],64))),128))])]),m("",!0)])}),128)):(l(),n("tr",_t,o[7]||(o[7]=[t("td",{colspan:"5",class:"text-center text-red-500 py-4"},"No groups found",-1)])))])])])),d.value?(l(),_(H,{key:2,class:"z-40",onClose:a})):m("",!0),i.value?(l(),_(W,{key:3,class:"z-40",group:p.value,onClose:v},null,8,["group"])):m("",!0),r.value?(l(),_(et,{key:4,class:"z-40",group:p.value,onClose:s},null,8,["group"])):m("",!0)]))}};export{$t as default};