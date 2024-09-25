import{g as B,A as D,x as M,o as j,l as N,a as d,c as a,d as e,b as t,t as o,n as V,p as C,q as I}from"./index-UxLcTP8M.js";import{u as L}from"./student-39a-5I30.js";import{f as R}from"./index-DRrsUpCq.js";const T={class:"my-container space-y-4"},q={key:0,class:"flex justify-center items-center"},z=t("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1),A=[z],E={key:1,class:"space-y-4 bg-white shadow-lg rounded-lg p-4 md:p-8"},F={class:"space-y-4"},G=t("div",{class:"flex justify-center"},[t("h2",{class:"title-lg"},"শিক্ষার্থীর তথ্য")],-1),H={class:"grid md:grid-cols-2 gap-1"},J={class:"bg-gray-100 p-2 rounded-md"},K=t("b",null,"রোল নাম্বার:",-1),O={class:"bg-gray-100 p-2 rounded-md"},P=t("b",null,"রেজিস্ট্রেশন নাম্বার:",-1),Q={class:"bg-gray-100 p-2 rounded-md"},U=t("b",null,"শিক্ষার্থীর নাম:",-1),W={class:"bg-gray-100 p-2 rounded-md"},X=t("b",null,"পিতার নাম:",-1),Y={class:"bg-gray-100 p-2 rounded-md"},Z=t("b",null,"জন্ম তারিখ:",-1),$={class:"bg-gray-100 p-2 rounded-md"},tt=t("b",null,"শিক্ষার্থীর ধরণ:",-1),st={class:"bg-gray-100 p-2 rounded-md"},et=t("b",null,"শিক্ষার্থীর ঠিকানা:",-1),ot={class:"bg-gray-100 p-2 rounded-md"},nt=t("b",null,"শিক্ষা প্রতিষ্ঠানের নাম:",-1),dt={class:"bg-gray-100 p-2 rounded-md"},at=t("b",null,"মারহালা:",-1),lt={class:"bg-gray-100 p-2 rounded-md"},ct=t("b",null,"গ্রুপ:",-1),rt={class:"bg-gray-100 p-2 rounded-md"},it=t("b",null,"পরীক্ষার অঞ্চল:",-1),_t={class:"bg-gray-100 p-2 rounded-md"},ut=t("b",null,"পরীক্ষার কেন্দ্র:",-1),ht={class:"flex justify-center gap-4"},pt={key:2,class:"text-center text-red-500"},mt=t("p",null,"Student not found.",-1),gt=[mt],kt={__name:"StudentShow",setup(bt){const v=n=>R(new Date(n),"dd-MMM-yyyy"),l=L(),f=B().params.id,{student:s,loading:x}=D(l),S=async()=>{try{await l.fetchStudent(f)}catch(n){console.error("Failed to load student:",n)}},k=M(()=>s.value.gender==="male"?"ছাত্র":"ছাত্রী");return j(S),(n,vt)=>{var c,r,i,_,u,h,p,m,g,b,y;const w=N("router-link");return d(),a("div",T,[e(x)?(d(),a("div",q,A)):e(s)?(d(),a("div",E,[t("div",F,[G,t("div",H,[t("div",J,[K,t("p",null,o(e(s).id),1)]),t("div",O,[P,t("p",null,o(e(s).registration_number),1)]),t("div",Q,[U,t("p",null,o(e(s).name),1)]),t("div",W,[X,t("p",null,o(e(s).father_name),1)]),t("div",Y,[Z,t("p",null,o(v(e(s).date_of_birth)),1)]),t("div",$,[tt,t("p",null,o(k.value),1)]),t("div",st,[et,t("p",null,o((c=e(s))==null?void 0:c.address),1)]),t("div",ot,[nt,t("p",null,o((i=(r=e(s))==null?void 0:r.institute)==null?void 0:i.name),1)]),t("div",dt,[at,t("p",null,o((u=(_=e(s))==null?void 0:_.zamat)==null?void 0:u.name),1)]),t("div",lt,[ct,t("p",null,o((p=(h=e(s))==null?void 0:h.group)==null?void 0:p.name),1)]),t("div",rt,[it,t("p",null,o((g=(m=e(s))==null?void 0:m.area)==null?void 0:g.name),1)]),t("div",_t,[ut,t("p",null,o((y=(b=e(s))==null?void 0:b.center)==null?void 0:y.name),1)])])]),t("div",ht,[V(w,{to:{name:"StudentList"},class:"btn-2"},{default:C(()=>[I("Back to List")]),_:1})])])):(d(),a("div",pt,gt))])}}};export{kt as default};