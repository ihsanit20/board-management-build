import{_ as S,r as u,h as V,c as o,a as t,m as y,A as v,F as h,b as k,i as r,y as x,d as w,w as L,x as N,o as n,t as l,R as U}from"./index-CAgUe3_x.js";import{u as B}from"./institute-11XyoncV.js";import{u as P}from"./area-o0GG4u4j.js";const R={class:"space-y-4 p-4"},j={class:"card-bg p-6 md:p-8 bg-white print:hidden"},D={class:"space-y-4"},F={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},M={class:"flex flex-col"},z=["value"],E={class:"flex flex-col"},T={class:"flex flex-col"},$={class:"flex gap-4"},q=["disabled"],G={class:"hidden print:flex flex-col items-center justify-center"},H={key:0,class:"flex flex-col justify-center items-center gap-2 print:hidden"},J={key:1,class:"overflow-x-auto"},K={class:"min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden"},O={class:"text-black text-sm font-medium"},Q={class:"py-3 print:py-1 px-2 text-left whitespace-nowrap"},W={class:"flex items-center"},X={class:"mr-2"},Y={key:0,class:""},Z={key:1,class:""},tt={class:"py-3 print:py-1 px-2 text-left"},st={class:""},et={class:"py-3 print:py-1 px-2 text-left"},ot={class:""},nt={class:"py-3 print:py-1 px-2 text-left"},lt={class:"py-3 print:py-1 px-2 text-left"},it={class:"py-3 print:py-1 px-2 text-center"},at={class:"py-1 px-3"},rt={class:"py-3 print:py-1 px-2 text-center print:hidden"},dt={class:"py-1 px-3"},pt={key:1},ct={__name:"PrintInstitute",setup(ut){const i=B(),g=P(),f=u("all"),d=u(""),p=u(""),c=u("");V(async()=>{await g.fetchAreas()});const I=async()=>{const a={per_page:f.value};d.value&&(a.area_id=d.value),p.value!==""&&(a.is_center=p.value),c.value!==""&&(a.is_active=c.value),await i.fetchInstitutes(a)},A=()=>{window.print()};return(a,s)=>{var m,_;const C=N("RouterLink");return n(),o("div",R,[t("div",j,[s[13]||(s[13]=t("h1",{class:"text-2xl font-semibold text-gray-800"},"মাদরাসা তালিকা প্রিন্ট",-1)),t("div",D,[t("div",F,[t("div",M,[s[4]||(s[4]=t("label",{for:"area",class:"text-sm font-medium text-gray-700 mb-1"},"অঞ্চল নির্বচন করুন",-1)),y(t("select",{id:"area","onUpdate:modelValue":s[0]||(s[0]=e=>d.value=e),class:"border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-indigo-200 focus:border-indigo-500 transition duration-200"},[s[3]||(s[3]=t("option",{value:""},"-সকল অঞ্চল-",-1)),(n(!0),o(h,null,k(r(g).areas,e=>(n(),o("option",{key:e.id,value:e.id},l(e.name),9,z))),128))],512),[[v,d.value]])]),t("div",E,[s[6]||(s[6]=t("label",{for:"isCenter",class:"text-sm font-medium text-gray-700 mb-1"},"কেন্দ্র কিনা",-1)),y(t("select",{id:"isCenter","onUpdate:modelValue":s[1]||(s[1]=e=>p.value=e),class:"border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-indigo-200 focus:border-indigo-500 transition duration-200"},s[5]||(s[5]=[t("option",{value:""},"-সব দেখুন-",-1),t("option",{value:1},"পরীক্ষা কেন্দ্র",-1),t("option",{value:0},"কেন্দ্র নয়",-1)]),512),[[v,p.value]])]),t("div",T,[s[8]||(s[8]=t("label",{for:"isActive",class:"text-sm font-medium text-gray-700 mb-1"},"সক্রিয় কিনা",-1)),y(t("select",{id:"isActive","onUpdate:modelValue":s[2]||(s[2]=e=>c.value=e),class:"border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-indigo-200 focus:border-indigo-500 transition duration-200"},s[7]||(s[7]=[t("option",{value:""},"-সব দেখুন-",-1),t("option",{value:1},"সক্রিয়",-1),t("option",{value:0},"নিষ্ক্রিয়",-1)]),512),[[v,c.value]])])]),t("div",$,[t("button",{onClick:I,class:"btn-2"},s[9]||(s[9]=[t("i",{class:"fas fa-search pr-1"},null,-1),x(" দেখুন")])),t("button",{onClick:A,class:"btn-1",disabled:r(i).loading||!((m=r(i).institutes)!=null&&m.length)},s[10]||(s[10]=[t("i",{class:"fas fa-print pr-1"},null,-1),x(" প্রিন্ট করুন ")]),8,q)]),t("div",null,[s[12]||(s[12]=x(" কোনো ডাটা এডিট করতে চান? ")),w(C,{to:{name:"InstituteList"},class:"btn-link"},{default:L(()=>s[11]||(s[11]=[x("এখানে ক্লিক করুন")])),_:1})])])]),t("div",G,[w(U,{class:"shadow-none"}),s[14]||(s[14]=t("hr",{class:"w-full pb-2"},null,-1)),s[15]||(s[15]=t("div",{class:"border-gray-400 border-2 px-8 pt-1 rounded-full"},[t("h4",{class:"text-xl font-medium text-center text-black"},"মাদরাসা তালিকা")],-1))]),r(i).loading?(n(),o("div",H,s[16]||(s[16]=[t("div",{class:"loader"},null,-1),t("p",{class:"text-center"},"ডাটা লোড হচ্ছে",-1)]))):(n(),o("div",J,[t("table",K,[s[18]||(s[18]=t("thead",null,[t("tr",{class:"bg-gray-200 text-black text-sm leading-normal"},[t("th",{class:"py-3 print:py-1 px-2 text-left"},"#"),t("th",{class:"py-3 print:py-1 px-2 text-left"},"ইলহাক"),t("th",{class:"py-3 print:py-1 px-2 text-left"},"মাদরাসার নাম ও ঠিকানা"),t("th",{class:"py-3 print:py-1 px-2 text-left"},"ফোন"),t("th",{class:"py-3 print:py-1 px-2 text-left"},"অঞ্চল"),t("th",{class:"py-3 print:py-1 px-2 text-center"},"কেন্দ্র কিনা"),t("th",{class:"py-3 print:py-1 px-2 text-center print:hidden"},"সক্রিয়")])],-1)),t("tbody",O,[(_=r(i).institutes)!=null&&_.length?(n(!0),o(h,{key:0},k(r(i).institutes,(e,b)=>(n(),o("tr",{key:e.id,class:"border-b border-gray-200 hover:bg-gray-100"},[t("td",Q,[t("div",W,[t("div",X,[f.value==="all"?(n(),o("p",Y,l(b+1),1)):(n(),o("p",Z,l((a.page-1)*f.value+b+1),1))])])]),t("td",tt,[t("p",st,l(e.institute_code),1)]),t("td",et,[t("p",ot,l(e.name),1)]),t("td",nt,[t("p",null,l(e.phone),1)]),t("td",lt,[t("p",null,l(e.area?e.area.name:"Unknown Area"),1)]),t("td",it,[t("span",at,l(e.is_center?"✔":"✘"),1)]),t("td",rt,[t("span",dt,l(e.is_active?"✔":"✘"),1)])]))),128)):(n(),o("tr",pt,s[17]||(s[17]=[t("td",{colspan:"8",class:"text-center text-red-500 py-4"},"No institutes found",-1)])))])])]))])}}},vt=S(ct,[["__scopeId","data-v-a6d34e67"]]);export{vt as default};