import{r as n,o as I,c as l,a as e,m as f,C as V,F as x,e as m,b as z,v as U,D as j,z as g,x as E,h as p,t as r,f as F,w as K,y as R,d as a,L as T}from"./index-ClzD5fxD.js";import{u as Z}from"./zamat-C_kT7V8z.js";import{u as q}from"./student-C92kSjOg.js";import{u as A}from"./center-C1Nc80_d.js";const G={class:"my-container"},H={class:"space-y-2 p-2"},J={class:"card-bg p-4"},O={class:"grid md:grid-cols-3 gap-4"},P=["value"],Q={key:1,class:"card-bg p-4"},W={class:"title-md text-center"},X={class:"overflow-auto max-h-80 scrollbar"},Y={class:"table-auto w-full border-collapse border border-gray-300"},$={class:"border border-gray-300 px-4 py-2"},ee={class:"border border-gray-300 px-4 py-2"},te={class:"border border-gray-300 px-4 py-2"},se={class:"border border-gray-300 px-4 py-2"},re={class:"border border-gray-300 px-4 py-2"},ae={class:"border border-gray-300 px-4 py-2"},le={class:"border border-gray-300 px-4 py-2"},oe={key:2,class:"card-bg p-4"},ne={class:"grid gap-4"},ie=["value"],de={key:3,class:"card-bg p-4 text-center text-green-600"},ue={key:4,class:"card-bg py-6 items-center"},ce={class:"flex justify-center"},xe={__name:"StudentMultiEdit",setup(pe){const _=Z(),h=A(),v=q(),o=n(!1),u=n(""),c=n(""),i=n([]),y=n(""),B=n(!1),k=n(!1);I(async()=>{o.value=!0;try{await _.fetchZamats(),await h.fetchCenters()}catch(d){console.error("জামাত তালিকা লোড করতে সমস্যা হচ্ছে:",d)}finally{o.value=!1}});const b=async()=>{if(!c.value||!u.value){alert("মারহালা সিলেক্ট করুন এবং ইলহাক নাম্বার দিয়ে অনুসন্ধান করুন।");return}o.value=!0,B.value=!0;try{await v.fetchStudents({instituteCode:u.value,zamatId:c.value}),i.value=v.students}catch(d){console.error("ডাটা ফেচ করতে সমস্যা হচ্ছে:",d)}finally{o.value=!1}},M=async()=>{if(!y.value){alert("আপডেট করার জন্য অন্তত একটি সেন্টার সিলেক্ট করুন।");return}o.value=!0;try{await v.updateMultipleStudents(u.value,c.value,y.value),k.value=!0,await b()}catch(d){console.error("ডাটা আপডেট করতে সমস্যা হচ্ছে:",d)}finally{o.value=!1}};return(d,s)=>{const N=R("RouterLink");return a(),l("div",G,[e("div",H,[e("div",J,[s[5]||(s[5]=e("h1",{class:"title-lg text-center"},"মারকায পরিবর্তন",-1)),e("div",O,[e("div",null,[f(e("select",{"onUpdate:modelValue":s[0]||(s[0]=t=>c.value=t),class:"text-black input-1 px-2 py-1 text-center"},[s[3]||(s[3]=e("option",{value:"",selected:"",disabled:""},"- মারহালা সিলেক্ট করুন -",-1)),(a(!0),l(x,null,m(z(_).zamats,t=>(a(),l("option",{key:t.id,value:t.id},r(t.name),9,P))),128))],512),[[V,c.value]])]),e("div",null,[f(e("input",{"onUpdate:modelValue":s[1]||(s[1]=t=>u.value=t),type:"text",class:"input-1 w-full text-black px-3 py-1 text-center",placeholder:"ইলহাক নং",onKeyup:j(b,["enter"])},null,544),[[U,u.value]])]),e("div",{class:"w-full"},[e("button",{onClick:b,class:"btn-2 w-full"},s[4]||(s[4]=[e("i",{class:"fas fa-search"},null,-1),g(" অনুসন্ধান ")]))])])]),o.value?(a(),E(T,{key:0})):p("",!0),i.value.length?(a(),l("div",Q,[e("h2",W," ফিল্টারকৃত ছাত্রদের তালিকা ("+r(i.value.length.toLocaleString("BN"))+" জন) ",1),e("div",X,[e("table",Y,[s[6]||(s[6]=e("thead",{class:"sticky top-0 z-10"},[e("tr",{class:"bg-gray-200"},[e("th",{class:"border border-gray-300 px-4 py-2 text-left"},"ক্রম"),e("th",{class:"border border-gray-300 px-4 py-2 text-left"},"নাম"),e("th",{class:"border border-gray-300 px-4 py-2 text-left"},"মাদরাসা"),e("th",{class:"border border-gray-300 px-4 py-2 text-left"},"মারহালা"),e("th",{class:"border border-gray-300 px-4 py-2 text-left"},"মারকায"),e("th",{class:"border border-gray-300 px-4 py-2 text-left"},"রেজি. নং"),e("th",{class:"border border-gray-300 px-4 py-2 text-left"},"রোল নং")])],-1)),e("tbody",null,[(a(!0),l(x,null,m(i.value,(t,D)=>{var w,S,C,L;return a(),l("tr",{key:t.id,class:"hover:bg-gray-100 text-sm"},[e("td",$,r(D+1),1),e("td",ee,r(t.name),1),e("td",te,r((w=t==null?void 0:t.institute)==null?void 0:w.institute_code)+"-"+r((S=t==null?void 0:t.institute)==null?void 0:S.name),1),e("td",se,r((C=t==null?void 0:t.zamat)==null?void 0:C.name),1),e("td",re,r(((L=t==null?void 0:t.center)==null?void 0:L.name)||"নেই"),1),e("td",ae,r(t.registration_number||"নেই"),1),e("td",le,r(t.roll_number||"নেই"),1)])}),128))])])])])):p("",!0),i.value.length?(a(),l("div",oe,[s[10]||(s[10]=e("h2",{class:"title-md text-center"},"সেন্টার পরিবর্তন করার তথ্য",-1)),e("div",ne,[e("div",null,[s[8]||(s[8]=e("label",{for:"center_id",class:"block"},"যে সেন্টারে পরিবর্তন করতে চান তা সিলেক্ট করুন:",-1)),f(e("select",{"onUpdate:modelValue":s[2]||(s[2]=t=>y.value=t),id:"center_id",class:"input-1 px-2 py-1 w-full"},[s[7]||(s[7]=e("option",{value:"",selected:"",disabled:""},"- সেন্টার সিলেক্ট করুন -",-1)),(a(!0),l(x,null,m(z(h).centers,t=>(a(),l("option",{key:t.institute_id,value:t.institute_id},r(t.institute.institute_code)+" - "+r(t.institute.name),9,ie))),128))],512),[[V,y.value]])])]),e("div",{class:"flex justify-center w-full mt-4"},[e("button",{onClick:M,class:"btn-2"},s[9]||(s[9]=[e("i",{class:"fas fa-save"},null,-1),g(" পরিবর্তন করুন ")]))])])):p("",!0),k.value?(a(),l("div",de,s[11]||(s[11]=[e("p",null,"মারকায সফলভাবে পরিবর্তন করা হয়েছে।",-1)]))):p("",!0),i.value.length?p("",!0):(a(),l("div",ue,s[12]||(s[12]=[e("p",{class:"text-center text-red-500"}," কোন পরীক্ষার্থী পাওয়া যায়নি। দয়া করে সঠিক মারহালা এবং ইলহাক নাম্বার দিয়ে অনুসন্ধান করুন। ",-1)]))),e("div",ce,[F(N,{to:{name:"StudentList"},class:"btn-3"},{default:K(()=>s[13]||(s[13]=[g("তালিকায় যান")])),_:1})])])])}}};export{xe as default};