import{r as m,i as P,o as R,B as j,c as o,a as e,f as C,w as V,m as g,C as S,F as u,e as i,b as c,z,t as l,h as y,x as I,y as G,d as a,L as T}from"./index-B5YPBQNI.js";import{u as A,a as H}from"./para-group-CyLdUVDO.js";import{u as J}from"./zamat-BYCSvxfx.js";import{u as K}from"./center-Bm4Ew-6P.js";const O={class:"px-4 space-y-4"},W={class:"flex items-center justify-between"},X={class:"card-bg p-4"},Y={class:"grid md:grid-cols-4 gap-4"},Z=["label"],$=["value"],q=["value"],ee=["value"],te={key:0,class:"text-center text-red-500"},se={key:2,class:"text-center text-gray-500"},ae={key:3,class:"card-bg p-4"},oe={key:0,class:"text-center text-gray-700 font-semibold"},le={class:"table-auto w-full border-collapse border border-black"},re={class:"border border-black px-2 py-1"},ne={class:"border border-black px-2 py-1"},de={class:"border border-black px-2 py-1"},ue={class:"border border-black px-2 py-1"},ie={class:"border border-black px-2 py-1"},ce={class:"text-sm"},pe={class:"flex gap-4"},be={class:"font-bold"},ve={class:""},_e={class:""},me={class:""},ye={class:"border border-black px-2 py-1 text-center"},we={__name:"QuranQuestionList",setup(fe){const p=A(),k=K(),w=J(),x=H(),b=m(""),v=m(""),f=m(""),r=m(!1),d=m(""),L=P(()=>p.questions.length);R(async()=>{try{r.value=!0,await w.fetchZamats()}catch(n){d.value="ডাটা লোড করতে সমস্যা হয়েছে।",console.error(n)}finally{r.value=!1}}),j(v,async n=>{if(!n){b.value="",f.value="",k.centers=[],x.paraGroups=[];return}try{r.value=!0,await k.fetchCenters({zamat_id:n}),await x.fetchParaGroups({zamat_id:n})}catch(s){d.value="সেন্টার বা পাড়া গ্রুপ লোড করতে সমস্যা হয়েছে।",console.error(s)}finally{r.value=!1}});const E=async()=>{if(!v.value||!b.value){d.value="মারহালা এবং মারকাজ নির্বাচন করুন।";return}try{r.value=!0,await p.fetchQuestions(b.value,v.value,f.value)}catch(n){d.value="প্রশ্ন লোড করতে সমস্যা হয়েছে।",console.error(n)}finally{r.value=!1}};return(n,s)=>{const U=G("router-link"),F=G("RouterLink");return a(),o("div",null,[e("div",O,[e("div",W,[s[4]||(s[4]=e("h1",{class:"title-lg"},"কুরআন প্রশ্ন তালিকা",-1)),C(U,{to:"/quran-questions/add",class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"},{default:V(()=>s[3]||(s[3]=[z(" প্রশ্ন যোগ করুন ")])),_:1})]),e("div",X,[e("div",Y,[e("div",null,[g(e("select",{"onUpdate:modelValue":s[0]||(s[0]=t=>v.value=t),class:"input-1"},[s[5]||(s[5]=e("option",{value:"",disabled:""},"-মারহালা সিলেক্ট করুন-",-1)),(a(!0),o(u,null,i(c(w).departments,t=>(a(),o("optgroup",{label:t.name,key:t.id},[(a(!0),o(u,null,i(t.zamats,_=>(a(),o("option",{key:_.id,value:_.id},l(_.name),9,$))),128))],8,Z))),128))],512),[[S,v.value]])]),e("div",null,[g(e("select",{"onUpdate:modelValue":s[1]||(s[1]=t=>b.value=t),class:"input-1"},[s[6]||(s[6]=e("option",{value:"",selected:"",disabled:""},"- মারকাজ নির্বাচন করুন -",-1)),(a(!0),o(u,null,i(c(k).centers,t=>(a(),o("option",{key:t==null?void 0:t.institute.id,value:t==null?void 0:t.institute.id},l(t==null?void 0:t.institute.name),9,q))),128))],512),[[S,b.value]])]),e("div",null,[g(e("select",{"onUpdate:modelValue":s[2]||(s[2]=t=>f.value=t),class:"input-1"},[s[7]||(s[7]=e("option",{value:"",selected:"",disabled:""},"- পাড়া গ্রুপ নির্বাচন করুন -",-1)),(a(!0),o(u,null,i(c(x).paraGroups,t=>(a(),o("option",{key:t.id,value:t.id},l(t.name),9,ee))),128))],512),[[S,f.value]])]),e("div",{class:"w-full"},[e("button",{onClick:E,class:"btn-2 w-full"},s[8]||(s[8]=[e("i",{class:"fas fa-search"},null,-1),z(" অনুসন্ধান ")]))])])]),d.value?(a(),o("div",te,l(d.value),1)):y("",!0),r.value?(a(),I(T,{key:1})):y("",!0),!r.value&&c(p).questions.length===0?(a(),o("div",se," কোন প্রশ্ন পাওয়া যায়নি। ")):y("",!0),c(p).questions.length>0&&!r.value?(a(),o("div",ae,[L.value>0?(a(),o("div",oe," প্রাপ্ত প্রশ্ন সংখ্যা: "+l(Number(L.value).toLocaleString("bn-BD"))+" টি ",1)):y("",!0),e("table",le,[s[10]||(s[10]=e("thead",null,[e("tr",{class:"bg-gray-100"},[e("th",{class:"border border-black px-2 py-1"},"#"),e("th",{class:"border border-black px-2 py-1"},"মারকাজ"),e("th",{class:"border border-black px-2 py-1"},"মারহালা"),e("th",{class:"border border-black px-2 py-1"},"পাড়া গ্রুপ"),e("th",{class:"border border-black px-2 py-1"},"প্রশ্ন"),e("th",{class:"border border-black px-2 py-1"},"অ্যাকশন")])],-1)),e("tbody",null,[(a(!0),o(u,null,i(c(p).questions,(t,_)=>{var D,B,N,Q;return a(),o("tr",{key:t.id},[e("td",re,l(Number(_+1).toLocaleString("bn-BD")),1),e("td",ne,l((B=(D=t==null?void 0:t.center)==null?void 0:D.institute)==null?void 0:B.name),1),e("td",de,l((N=t==null?void 0:t.zamat)==null?void 0:N.name),1),e("td",ue,l((Q=t==null?void 0:t.para_group)==null?void 0:Q.name),1),e("td",ie,[e("ul",ce,[(a(!0),o(u,null,i(t.questions,(h,M)=>(a(),o("li",{key:h.surah,class:""},[e("div",pe,[e("p",be,l(Number(M+1).toLocaleString("bn-BD"))+" নং প্রশ্ন: ",1),e("p",ve,"সূরা নং: "+l(Number(h.surah).toLocaleString("bn-BD")),1),e("p",_e,"আয়াত নং: "+l(h.verses),1),e("p",me,"পৃষ্ঠা নং: "+l(Number(h.page).toLocaleString("bn-BD")),1)])]))),128))])]),e("td",ye,[C(F,{to:{name:"QuranQuestionEdit",params:{id:t.id}},class:"btn-icon"},{default:V(()=>s[9]||(s[9]=[e("i",{class:"fas fa-edit"},null,-1)])),_:2},1032,["to"])])])}),128))])])])):y("",!0)])])}}};export{we as default};