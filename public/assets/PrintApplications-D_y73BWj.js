import{_ as A,r as v,h as C,A as N,c as d,a as t,t as l,i as p,m as c,v as V,C as B,B as P,F as g,b as h,z as n,x as E,f as F,o as r,E as I,n as K,j as M,L as U}from"./index-B2GPrU01.js";import{u as j}from"./application-BvpjbPAN.js";import{u as T}from"./exam-B_wdSRKD.js";import{u as Z}from"./zamat-BNet7qop.js";const q={class:"my-container space-y-2 px-4 print:-mt-6 print:p-0"},G={class:"print:hidden"},H={class:"title-lg"},J={class:"card-bg p-4 grid md:grid-cols-4 gap-4 print:hidden"},O={class:"relative"},Q={class:"relative"},R=["value"],W=["disabled"],X={key:1,class:"grid gap-4"},Y={class:"flex flex-col items-center"},$={class:"title-lg print:text-black"},tt={class:"flex justify-between gap-4"},et={class:""},st={class:""},lt={class:"space-y-2"},rt={class:"overflow-x-auto"},dt={class:"table-auto w-full text-left border-collapse print:border-none"},ot={class:"border px-2 py-1 text-center"},nt={class:"border px-2 py-1"},at={class:"border px-2 py-1"},bt={class:"border px-2 py-1 text-center"},ut={class:"border px-2 py-1 text-center"},it={class:"border px-2 py-1"},vt={key:1,class:"text-center text-red-500 py-6"},pt={__name:"PrintApplications",setup(xt){const x=T(),k=Z(),m=j(),a=v(""),b=v(""),u=v(""),f=v(!1),y=v(!1),L=()=>{const o={};return b.value&&(o.zamat_id=b.value),a.value&&(o.institute_code=a.value),u.value&&(o.application_id=u.value),o},_=async()=>{f.value=!0,y.value=!0;const o=L();await m.fetchApplicationsPrint(o),f.value=!1};C(()=>{x.fetchLastExam(),k.fetchZamats()}),N([b,a,u],_);const z=()=>{window.print()};return(o,e)=>{var w;return r(),d("div",q,[t("div",G,[t("h1",H,l((w=p(x).exam)==null?void 0:w.name)+"-এর নিবন্ধন",1)]),t("div",J,[t("div",O,[c(t("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>u.value=s),type:"text",class:"input-1 w-full text-black px-3 py-1",placeholder:"নিবন্ধন নং",onKeyup:B(_,["enter"])},null,544),[[V,u.value]])]),t("div",Q,[c(t("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>a.value=s),type:"text",class:"input-1 w-full text-black px-3 py-1",placeholder:"ইলহাক নং",onKeyup:B(_,["enter"])},null,544),[[V,a.value]])]),c(t("select",{"onUpdate:modelValue":e[2]||(e[2]=s=>b.value=s),class:"text-black input-1 px-2 py-1"},[e[3]||(e[3]=t("option",{value:"",disabled:"",selected:""},"- মারহালা নির্বাচন করুন -",-1)),(r(!0),d(g,null,h(p(k).zamats,s=>(r(),d("option",{key:s.id,value:s.id},l(s.name),9,R))),128)),e[4]||(e[4]=t("option",{value:""},"সকল মারহালা",-1))],512),[[P,b.value]]),t("button",{onClick:z,class:"btn-2",disabled:!y.value},e[5]||(e[5]=[t("i",{class:"fas fa-print pr-1"},null,-1),n(" প্রিন্ট করুন ")]),8,W)]),f.value?(r(),E(U,{key:0})):y.value?(r(),d("div",X,[p(m).applications.length?(r(!0),d(g,{key:0},h(p(m).applications,s=>{var S;return r(),d("div",{key:s.id,class:"bg-white shadow-md rounded-lg p-4 print:p-2 print:shadow-none space-y-2"},[t("div",Y,[e[6]||(e[6]=t("img",{src:I,alt:"logo",class:"md:h-[80px]"},null,-1)),t("h1",$,l((S=p(x).exam)==null?void 0:S.name)+"-এর নিবন্ধন",1)]),t("div",tt,[t("div",et,[t("p",null,[e[7]||(e[7]=t("strong",null,"ইলহাক ও মাদরাসার নাম:",-1)),n(" "+l(s==null?void 0:s.institute_code_name),1)]),t("p",null,[e[8]||(e[8]=t("strong",null,"মারহালা:",-1)),n(" "+l(s==null?void 0:s.zamat_name),1)]),t("p",null,[e[9]||(e[9]=t("strong",null,"কেন্দ্র: ",-1)),t("span",{class:K(s!=null&&s.center_name?"":"text-red-500")},l((s==null?void 0:s.center_name)||"নির্বাচন করা নেই"),3)])]),t("div",st,[t("p",null,[e[10]||(e[10]=t("strong",null,"নিবন্ধন নং:",-1)),n(" "+l(s==null?void 0:s.id),1)]),t("p",null,[e[11]||(e[11]=t("strong",null,"নিবন্ধনের তারিখ:",-1)),n(" "+l(new Date(s==null?void 0:s.application_date).toLocaleDateString("bn-BD")),1)]),t("p",null,[e[12]||(e[12]=t("strong",null,"পেমেন্ট: ",-1)),n(l(s==null?void 0:s.payment_method)+" (",1),t("span",null,l(s==null?void 0:s.payment_status),1),e[13]||(e[13]=n(") "))])])]),t("div",lt,[e[17]||(e[17]=t("h2",{class:"title-lg text-center print:text-black"},"পরীক্ষার্থীদের তথ্য",-1)),t("div",rt,[t("table",dt,[e[16]||(e[16]=t("thead",null,[t("tr",{class:"bg-gray-200"},[t("th",{class:"border px-2 py-1 text-center"},"#"),t("th",{class:"border px-2 py-1"},"নাম"),t("th",{class:"border px-2 py-1"},"পিতার নাম"),t("th",{class:"border px-2 py-1 text-center"},"জন্ম তারিখ"),t("th",{class:"border px-2 py-1 text-center"},"পারার বিবরণ"),t("th",{class:"border px-2 py-1"},"ঠিকানা (গ্রাম, ডাকঘর, থানা, জেলা)"),t("th",{class:"border px-2 py-1 text-center"},"ফি’র পরিমান"),t("th",{class:"border px-2 py-1 text-center"},"পরীক্ষার্থীর স্বাক্ষর")])],-1)),t("tbody",null,[(r(!0),d(g,null,h(s.students,(i,D)=>(r(),d("tr",{key:D,class:"print:text-sm"},[t("td",ot,l(D+1),1),t("td",nt,l(i.name),1),t("td",at,l(i.father_name),1),t("td",bt,l(new Date(i.date_of_birth).toLocaleDateString("bn-BD"))+" ইং ",1),t("td",ut,l(i.para||"প্রযোজ্য নয়"),1),t("td",it,l(i.address),1),e[14]||(e[14]=t("td",{class:"border px-2 py-1"},null,-1)),e[15]||(e[15]=t("td",{class:"border px-2 py-1"},null,-1))]))),128))])])]),e[18]||(e[18]=M("<div data-v-11b2b6bf><div data-v-11b2b6bf><b data-v-11b2b6bf>বি.দ্র.</b><ul data-v-11b2b6bf><li data-v-11b2b6bf> ১। উক্ত তালিকায় পরীক্ষার্থীর নাম, পিতার নাম বা অন্য কোন তথ্যে কোন ভুল পরিলক্ষিত হলে লাল কালি দ্বারা সংশোধন করুন। (নাম, পিতার নাম ও জন্ম তারিখ সংশোধনে জন্মনিবন্ধন ও জাতীয় পরিচয়পত্রের অনুসরণ করুন) </li><li data-v-11b2b6bf> ২। ফরমটি তানযীম পরীক্ষা বিভাগে জমা দানের পূর্বে ফটোকপি মাদরাসা দফতরে সংরক্ষণ করুন। </li><li data-v-11b2b6bf> ৩। নিবন্ধনে প্রদত্ত পরীক্ষার্থীর নাম ছাড়া নতুন পরীক্ষার্থীর নাম এই ফরমে সংযোজন বা পরিবর্তন করা যাবে না। </li></ul></div><br data-v-11b2b6bf><b data-v-11b2b6bf>পরীক্ষা নিয়ন্ত্রক</b><br data-v-11b2b6bf><br data-v-11b2b6bf><p data-v-11b2b6bf>স্বাক্ষর</p><b data-v-11b2b6bf>[মুফতী] মুহাম্মাদ নুরুল হুদা</b><p data-v-11b2b6bf>তানযীমুল মাদারিসিল কওমিয়া নরসিংদী</p></div>",1))]),e[19]||(e[19]=t("div",{class:"print-page-break"},null,-1))])}),128)):(r(),d("p",vt,"No applications found"))])):F("",!0)])}}},ct=A(pt,[["__scopeId","data-v-11b2b6bf"]]);export{ct as default};