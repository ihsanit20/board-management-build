import{A as B,r,i as I,o as K,c as o,a as t,t as l,b as x,m as y,v as m,D as v,h as _,C as U,F as V,e as N,x as j,d as a,n as E,f as M,w as A,z as F,y as R,L as T}from"./index-B8mkbDXl.js";import{u as Z}from"./student-CV0ixAUC.js";import{u as q}from"./zamat-CiuMNXg-.js";const G={class:"space-y-2 px-6 py-4"},H={class:"flex justify-between items-center"},J={class:"title-lg"},O={class:"card-bg p-4"},P={class:"grid md:grid-cols-4 gap-4"},Q={class:"relative"},W={class:"relative"},X={class:"relative"},Y=["value"],$={class:"flex justify-center pt-4"},tt={class:"text-sm text-gray-600"},et={key:1,class:"overflow-x-auto bg-white shadow-md rounded-lg"},st={class:"min-w-full table-auto"},lt={class:"text-gray-700 text-sm font-light"},at={class:"py-3 px-4 text-left"},ot={class:"py-3 px-4 text-left"},it={class:"py-3 px-4 text-left"},nt={class:"py-3 px-4 text-left"},rt={class:"py-3 px-4 text-left"},pt={class:"py-3 px-4 text-left"},ct={class:"py-3 px-4 text-left"},ut={class:"py-3 px-4 text-center"},dt={class:"flex items-center justify-center gap-2"},xt={key:1},gt={__name:"StudentList",setup(yt){const g=B(),h=q(),p=Z(),n=r(!1),c=r(""),u=r(""),d=r(""),f=r(""),D=I(()=>p.students.length);K(async()=>{try{n.value=!0,await g.fetchLastExam(),await h.fetchZamats()}finally{n.value=!1}});const i=async()=>{n.value=!0,await p.fetchStudents({registrationNumber:c.value,applicationId:u.value,instituteCode:d.value,zamatId:f.value||null}),n.value=!1};return(ft,s)=>{var b;const z=R("RouterLink");return a(),o("div",G,[t("div",H,[t("h1",J,l((b=x(g).exam)==null?void 0:b.name)+"-এর পরীক্ষার্থী তালিকা",1)]),t("div",O,[t("div",P,[t("div",null,[s[5]||(s[5]=t("p",null,"রেজি. নং দিয়ে খুঁজুন",-1)),t("div",Q,[y(t("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>c.value=e),type:"text",class:"input-1 w-full text-black px-3 py-1",placeholder:"রেজি. নং",onKeyup:v(i,["enter"])},null,544),[[m,c.value]]),c.value?(a(),o("button",{key:0,onClick:i,class:"absolute right-3 top-2"},s[4]||(s[4]=[t("i",{class:"fas fa-search"},null,-1)]))):_("",!0)])]),t("div",null,[s[7]||(s[7]=t("p",null,"নিবন্ধন পত্র নং দিয়ে খুঁজুন",-1)),t("div",W,[y(t("input",{"onUpdate:modelValue":s[1]||(s[1]=e=>u.value=e),type:"text",class:"input-1 w-full text-black px-3 py-1",placeholder:"নিবন্ধন পত্র নং",onKeyup:v(i,["enter"])},null,544),[[m,u.value]]),u.value?(a(),o("button",{key:0,onClick:i,class:"absolute right-3 top-2"},s[6]||(s[6]=[t("i",{class:"fas fa-search"},null,-1)]))):_("",!0)])]),t("div",null,[s[9]||(s[9]=t("p",null,"ইলহাক নাম্বার দিয়ে খুঁজুন",-1)),t("div",X,[y(t("input",{"onUpdate:modelValue":s[2]||(s[2]=e=>d.value=e),type:"text",class:"input-1 w-full text-black px-3 py-1",placeholder:"ইলহাক নং",onKeyup:v(i,["enter"])},null,544),[[m,d.value]]),d.value?(a(),o("button",{key:0,onClick:i,class:"absolute right-3 top-2"},s[8]||(s[8]=[t("i",{class:"fas fa-search"},null,-1)]))):_("",!0)])]),t("div",null,[s[12]||(s[12]=t("p",null,"মারহালা অনুসারে খুঁজুন",-1)),y(t("select",{"onUpdate:modelValue":s[3]||(s[3]=e=>f.value=e),onChange:i,class:"text-black input-1 px-2 py-1"},[s[10]||(s[10]=t("option",{value:"default",disabled:"",selected:""},"- মারহালা সিলেক্ট করুন -",-1)),(a(!0),o(V,null,N(x(h).zamats,e=>(a(),o("option",{key:e.id,value:e.id},l(e.name),9,Y))),128)),s[11]||(s[11]=t("option",{value:""},"সকল মারহালা",-1))],544),[[U,f.value]])])]),t("div",$,[t("p",tt,"পরীক্ষার্থী সংখ্যা: "+l(D.value)+" জন",1)])]),n.value?(a(),j(T,{key:0})):(a(),o("div",et,[t("table",st,[s[15]||(s[15]=t("thead",{class:"bg-gray-400 text-white uppercase text-sm leading-normal"},[t("tr",null,[t("th",{class:"py-3 px-4 text-left"},"রেজি. নং"),t("th",{class:"py-3 px-4 text-left"},"পরীক্ষার্থীর নাম"),t("th",{class:"py-3 px-4 text-left"},"জন্ম তারিখ"),t("th",{class:"py-3 px-4 text-left"},"মারহালা"),t("th",{class:"py-3 px-4 text-left"},"মাদরাসার নাম"),t("th",{class:"py-3 px-4 text-left"},"মারকাজ"),t("th",{class:"py-3 px-4 text-left"},"নিবন্ধন পত্র নং"),t("th",{class:"py-3 px-4 text-center"},"Actions")])],-1)),t("tbody",lt,[x(p).students.length?(a(!0),o(V,{key:0},N(x(p).students,e=>{var k,w,S,C,L;return a(),o("tr",{key:e.id,class:"border-b border-gray-200 hover:bg-gray-100 font-medium"},[t("td",at,l(e==null?void 0:e.registration_number),1),t("td",ot,l(e==null?void 0:e.name),1),t("td",it,l(new Date(e==null?void 0:e.date_of_birth).toLocaleDateString("bn-BD")),1),t("td",nt,l((k=e==null?void 0:e.zamat)==null?void 0:k.name),1),t("td",rt,l((w=e==null?void 0:e.institute)==null?void 0:w.institute_code)+" - "+l((S=e==null?void 0:e.institute)==null?void 0:S.name),1),t("td",pt,[t("span",{class:E({"text-red-500":!((C=e==null?void 0:e.center)!=null&&C.name)})},l(((L=e==null?void 0:e.center)==null?void 0:L.name)||"নির্বাচন করা নেই"),3)]),t("td",ct,l(e==null?void 0:e.application_id),1),t("td",ut,[t("div",dt,[M(z,{to:{name:"StudentShow",params:{id:e.id}},class:"btn-2"},{default:A(()=>s[13]||(s[13]=[F("দেখুন")])),_:2},1032,["to"])])])])}),128)):(a(),o("tr",xt,s[14]||(s[14]=[t("td",{colspan:"11",class:"text-center text-red-500 py-6"},"No students found",-1)])))])])]))])}}};export{gt as default};