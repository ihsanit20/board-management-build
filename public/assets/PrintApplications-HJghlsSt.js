import{_ as L,r as f,h as N,z as P,c as l,a as t,t as d,i as v,m as c,v as V,B,A as C,F as g,b as h,y as o,f as j,o as r,D as E,n as F,j as I}from"./index-Do8SWfsf.js";import{u as K}from"./application-BjRynMtR.js";import{u as M}from"./exam-mzNRB_Ru.js";import{u as U}from"./zamat-CXOr0Zls.js";const T={class:"space-y-2 px-6 py-4"},Z={class:"print:hidden"},q={class:"title-lg"},G={class:"card-bg p-4 grid md:grid-cols-4 gap-4 print:hidden"},H={class:"relative"},J={class:"relative"},O=["value"],Q=["disabled"],R={key:0,class:"flex justify-center items-center"},W={key:1,class:"grid gap-4"},X={class:"flex flex-col items-center"},Y={class:"title-lg print:text-black"},$={class:"flex justify-between gap-4"},tt={class:""},et={class:""},st={class:"space-y-2"},dt={class:"overflow-x-auto"},lt={class:"table-auto w-full text-left border-collapse print:border-none"},rt={class:"border px-2 py-1 text-center"},at={class:"border px-2 py-1"},ot={class:"border px-2 py-1"},nt={class:"border px-2 py-1 text-center"},ut={class:"border px-2 py-1 text-center"},it={class:"border px-2 py-1"},bt={key:1,class:"text-center text-red-500 py-6"},ft={__name:"PrintApplications",setup(vt){const x=M(),k=U(),p=K(),n=f(""),u=f(""),i=f(""),m=f(!1),y=f(!1),z=()=>{const a={};return u.value&&(a.zamat_id=u.value),n.value&&(a.institute_code=n.value),i.value&&(a.application_id=i.value),a},_=async()=>{m.value=!0,y.value=!0;const a=z();await p.fetchApplicationsPrint(a),m.value=!1};N(()=>{x.fetchLastExam(),k.fetchZamats()}),P([u,n,i],_);const A=()=>{window.print()};return(a,e)=>{var w;return r(),l("div",T,[t("div",Z,[t("h1",q,d((w=v(x).exam)==null?void 0:w.name)+"-এর নিবন্ধন",1)]),t("div",G,[t("div",H,[c(t("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>i.value=s),type:"text",class:"input-1 w-full text-black px-3 py-1",placeholder:"নিবন্ধন নং",onKeyup:B(_,["enter"])},null,544),[[V,i.value]])]),t("div",J,[c(t("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>n.value=s),type:"text",class:"input-1 w-full text-black px-3 py-1",placeholder:"ইলহাক নং",onKeyup:B(_,["enter"])},null,544),[[V,n.value]])]),c(t("select",{"onUpdate:modelValue":e[2]||(e[2]=s=>u.value=s),class:"text-black input-1 px-2 py-1"},[e[3]||(e[3]=t("option",{value:"",disabled:"",selected:""},"- মারহালা নির্বাচন করুন -",-1)),(r(!0),l(g,null,h(v(k).zamats,s=>(r(),l("option",{key:s.id,value:s.id},d(s.name),9,O))),128)),e[4]||(e[4]=t("option",{value:""},"সকল মারহালা",-1))],512),[[C,u.value]]),t("button",{onClick:A,class:"btn-2",disabled:!y.value},e[5]||(e[5]=[t("i",{class:"fas fa-print pr-1"},null,-1),o(" প্রিন্ট করুন ")]),8,Q)]),m.value?(r(),l("div",R,e[6]||(e[6]=[t("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-sky-600"},null,-1)]))):y.value?(r(),l("div",W,[v(p).applications.length?(r(!0),l(g,{key:0},h(v(p).applications,s=>{var S;return r(),l("div",{key:s.id,class:"bg-white shadow-md rounded-lg p-4 print:p-2 print:shadow-none space-y-2"},[t("div",X,[e[7]||(e[7]=t("img",{src:E,alt:"logo",class:"md:h-[80px]"},null,-1)),t("h1",Y,d((S=v(x).exam)==null?void 0:S.name)+"-এর নিবন্ধন",1)]),t("div",$,[t("div",tt,[t("p",null,[e[8]||(e[8]=t("strong",null,"ইলহাক ও মাদরাসার নাম:",-1)),o(" "+d(s==null?void 0:s.institute_code_name),1)]),t("p",null,[e[9]||(e[9]=t("strong",null,"মারহালা:",-1)),o(" "+d(s==null?void 0:s.zamat_name),1)]),t("p",null,[e[10]||(e[10]=t("strong",null,"কেন্দ্র: ",-1)),t("span",{class:F(s!=null&&s.center_name?"":"text-red-500")},d((s==null?void 0:s.center_name)||"নির্বাচন করা নেই"),3)])]),t("div",et,[t("p",null,[e[11]||(e[11]=t("strong",null,"নিবন্ধন নং:",-1)),o(" "+d(s==null?void 0:s.id),1)]),t("p",null,[e[12]||(e[12]=t("strong",null,"নিবন্ধনের তারিখ:",-1)),o(" "+d(new Date(s==null?void 0:s.application_date).toLocaleDateString("bn-BD")),1)]),t("p",null,[e[13]||(e[13]=t("strong",null,"পেমেন্ট: ",-1)),o(d(s==null?void 0:s.payment_method)+" (",1),t("span",null,d(s==null?void 0:s.payment_status),1),e[14]||(e[14]=o(") "))])])]),t("div",st,[e[18]||(e[18]=t("h2",{class:"title-lg text-center print:text-black"},"পরীক্ষার্থীদের তথ্য",-1)),t("div",dt,[t("table",lt,[e[17]||(e[17]=t("thead",null,[t("tr",{class:"bg-gray-200"},[t("th",{class:"border px-2 py-1 text-center"},"#"),t("th",{class:"border px-2 py-1"},"নাম"),t("th",{class:"border px-2 py-1"},"পিতার নাম"),t("th",{class:"border px-2 py-1 text-center"},"জন্ম তারিখ"),t("th",{class:"border px-2 py-1 text-center"},"পারার বিবরণ"),t("th",{class:"border px-2 py-1"},"ঠিকানা (গ্রাম, ডাকঘর, থানা, জেলা)"),t("th",{class:"border px-2 py-1 text-center"},"ফি’র পরিমান"),t("th",{class:"border px-2 py-1 text-center"},"পরীক্ষার্থীর স্বাক্ষর")])],-1)),t("tbody",null,[(r(!0),l(g,null,h(s.students,(b,D)=>(r(),l("tr",{key:D,class:"print:text-sm"},[t("td",rt,d(D+1),1),t("td",at,d(b.name),1),t("td",ot,d(b.father_name),1),t("td",nt,d(new Date(b.date_of_birth).toLocaleDateString("bn-BD"))+" ইং ",1),t("td",ut,d(b.para||"প্রযোজ্য নয়"),1),t("td",it,d(b.address),1),e[15]||(e[15]=t("td",{class:"border px-2 py-1"},null,-1)),e[16]||(e[16]=t("td",{class:"border px-2 py-1"},null,-1))]))),128))])])]),e[19]||(e[19]=I("<div data-v-bad4f6f4><div data-v-bad4f6f4><b data-v-bad4f6f4>বি.দ্র.</b><ul data-v-bad4f6f4><li data-v-bad4f6f4> ১। উক্ত তালিকায় পরীক্ষার্থীর নাম, পিতার নাম বা অন্য কোন তথ্যে কোন ভুল পরিলক্ষিত হলে লাল কালি দ্বারা সংশোধন করুন। (নাম, পিতার নাম ও জন্ম তারিখ সংশোধনে জন্মনিবন্ধন ও জাতীয় পরিচয়পত্রের অনুসরণ করুন) </li><li data-v-bad4f6f4> ২। ফরমটি তানযীম পরীক্ষা বিভাগে জমা দানের পূর্বে ফটোকপি মাদরাসা দফতরে সংরক্ষণ করুন। </li><li data-v-bad4f6f4> ৩। নিবন্ধনে প্রদত্ত পরীক্ষার্থীর নাম ছাড়া নতুন পরীক্ষার্থীর নাম এই ফরমে সংযোজন বা পরিবর্তন করা যাবে না। </li></ul></div><br data-v-bad4f6f4><b data-v-bad4f6f4>পরীক্ষা নিয়ন্ত্রক</b><br data-v-bad4f6f4><br data-v-bad4f6f4><p data-v-bad4f6f4>স্বাক্ষর</p><b data-v-bad4f6f4>[মুফতী] মুহাম্মাদ নুরুল হুদা</b><p data-v-bad4f6f4>তানযীমুল মাদারিসিল কওমিয়া নরসিংদী</p></div>",1))]),e[20]||(e[20]=t("div",{class:"print-page-break"},null,-1))])}),128)):(r(),l("p",bt,"No applications found"))])):j("",!0)])}}},_t=L(ft,[["__scopeId","data-v-bad4f6f4"]]);export{_t as default};