import{r as v,o as T,B as q,i as g,c as i,a as t,b as S,t as s,z as n,m as z,C as P,F as A,e as R,v as W,D as G,x as H,h as p,M as J,j as O,f as Q,w as X,y as Y,d as u,q as ee,L as te}from"./index-D0y9kQRj.js";import{u as le}from"./zamat-CcORccZu.js";import{u as se}from"./student-wDNYGU-I.js";import{u as ne}from"./collect-fee-B2YThgAf.js";import{u as ae}from"./fee-CW4nwcw5.js";const oe={class:"my-container"},ue={class:"space-y-2 p-2"},ie={class:"card-bg p-4"},re={key:0},de={class:"title-lg text-center"},ce={class:"md:flex gap-4 justify-center text-sm"},ve={key:1,class:"text-center"},pe={class:"grid md:grid-cols-3 gap-4"},me=["value"],be={key:1,class:"space-y-2"},ge={key:0,class:"card-bg p-4"},fe={class:"title-md"},xe={key:0},ye={key:0},Se={key:1,class:"flex gap-2"},ke={key:2,class:"space-y-2"},De=["onClick"],Le={class:"md:col-span-3 md:flex items-center gap-2 space-y-2 md:space-y-0"},_e={class:""},Be=["value","checked"],he={class:""},Fe={class:""},we={class:"md:col-span-2"},Ce={class:"md:col-span-1 md:px-2"},Ve={class:"md:col-span-1 md:px-2 md:text-end"},ze={key:3,class:"card-bg"},Ne={key:4,class:"card-bg p-4"},Me={key:0},Ie={class:"flex"},Ke={__name:"CollectFee",setup(je){const L=le(),_=se(),$=ne(),r=ae(),U=ee(),Z=v(!0),f=v(!1),k=v(""),c=v(""),d=v([]),o=v([]),b=v(null),B=v(!0),N=v(!1),h=l=>{alert(`ত্রুটি: ${l}`)};T(async()=>{try{f.value=!0,await L.fetchZamats(),await r.fetchLatestFee(),(!r.lastFee||!r.lastFee.exam)&&console.error("Fee data not loaded correctly.")}catch(l){h("ডাটা লোড করতে সমস্যা হয়েছে।"),console.error(l)}finally{f.value=!1}}),q(c,()=>{d.value=[],o.value=[]});const E=()=>{B.value?o.value=d.value.map(l=>l.id):o.value=[]},K=l=>{o.value.includes(l)?o.value=o.value.filter(e=>e!==l):o.value.push(l)},M=async()=>{if(!c.value||!k.value){alert("মারহালা সিলেক্ট করুন এবং ইলহাক নাম্বার দিয়ে অনুসন্ধান করুন।");return}f.value=!0,N.value=!0;try{await _.fetchStudentsWithoutRollNumber({instituteCode:k.value,zamatId:c.value}),Z.value=!1,b.value=_.institute||null,d.value=_.students,o.value=d.value.map(l=>l.id)}catch(l){h(`ডাটা ফেচ করতে সমস্যা হচ্ছে: ${l.message}`),console.error(l)}finally{f.value=!1}},I=async()=>{var l,e;if(!((l=o.value)!=null&&l.length)||!D.value){alert("সকল শিক্ষার্থী এবং মোট ফি এমাউন্ট নির্বাচন করুন।");return}try{await $.createCollectFee({student_ids:o.value,total_amount:D.value,payment_method:"offline",exam_id:r.lastFee.exam_id,institute_id:(e=b.value)==null?void 0:e.id,zamat_id:c.value}),alert("ফি জমা সফল হয়েছে!"),U.push({name:"CollectFeeList"})}catch(m){h(`ফি জমার সময় সমস্যা হয়েছে: ${m.message}`),console.error(m)}},j=g(()=>{const l=L.zamats.find(e=>e.id===c.value);return l?l.name:"মারহালা নির্বাচন করা হয়নি"}),F=g(()=>{var e;const l=(e=r.lastFee)==null?void 0:e.zamat_amounts.find(m=>parseInt(m.zamat_id)===parseInt(c.value));return(l==null?void 0:l.amount)||0}),x=g(()=>{var y,a;const l=(y=r.lastFee)==null?void 0:y.zamat_amounts.find(V=>parseInt(V.zamat_id)===parseInt(c.value)),e=new Date((a=r.lastFee)==null?void 0:a.last_date);return new Date>e&&(l==null?void 0:l.late_fee)||0}),w=g(()=>{var l;return((l=o.value)==null?void 0:l.length)*F.value}),C=g(()=>{var l;return((l=o.value)==null?void 0:l.length)*x.value}),D=g(()=>w.value+C.value);return(l,e)=>{var y;const m=Y("RouterLink");return u(),i("div",oe,[t("div",ue,[t("div",ie,[S(r).lastFee?(u(),i("div",re,[t("h1",de,s(((y=S(r).lastFee.exam)==null?void 0:y.name)||"পরীক্ষার নাম নেই")+"-এর ফি প্রদান ",1),t("div",ce,[t("p",null,[e[3]||(e[3]=n(" ফি জমার শেষ তারিখ: ")),t("b",null,s(new Date(S(r).lastFee.last_date).toLocaleDateString("bn-BD")),1)]),t("p",null,[e[4]||(e[4]=n(" চূড়ান্ত তারিখ: ")),t("b",null,s(new Date(S(r).lastFee.final_date).toLocaleDateString("bn-BD")),1),e[5]||(e[5]=n(" (বিলম্ব ফি সহ) "))])])])):(u(),i("div",ve,"ডাটা লোড হচ্ছে...")),t("div",pe,[t("div",null,[z(t("select",{"onUpdate:modelValue":e[0]||(e[0]=a=>c.value=a),class:"text-black input-1 px-2 py-1 text-center"},[e[6]||(e[6]=t("option",{value:"",selected:"",disabled:""},"- মারহালা সিলেক্ট করুন -",-1)),(u(!0),i(A,null,R(S(L).zamats,a=>(u(),i("option",{key:a.id,value:a.id},s(a.name),9,me))),128))],512),[[P,c.value]])]),t("div",null,[z(t("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>k.value=a),type:"text",class:"input-1 w-full text-black px-3 py-1 text-center",placeholder:"ইলহাক নং",onKeyup:G(M,["enter"])},null,544),[[W,k.value]])]),t("div",{class:"w-full"},[t("button",{onClick:M,class:"btn-2 w-full"},e[7]||(e[7]=[t("i",{class:"fas fa-search"},null,-1),n(" অনুসন্ধান ")]))])])]),f.value?(u(),H(te,{key:0})):(u(),i("div",be,[b.value?(u(),i("div",ge,[t("div",null,[t("h2",fe,s(b.value.name),1),t("p",null,[e[8]||(e[8]=t("b",null,"ইলহাক:",-1)),n(" "+s(b.value.institute_code),1)]),t("p",null,[e[9]||(e[9]=t("b",null,"ফোন:",-1)),n(" "+s(b.value.phone),1)])]),e[16]||(e[16]=t("hr",{class:"w-full"},null,-1)),d.value.length?(u(),i("div",xe,[t("div",null,[t("p",null,[e[10]||(e[10]=n(" মারহালা: ")),t("b",null,s(j.value),1)]),t("p",null,[e[11]||(e[11]=n(" নির্বাচিত পরীক্ষার্থীর সংখ্যা: ")),t("b",null,s((o.value.length||0).toLocaleString("bn-BD"))+" জন",1)]),t("p",null,[e[12]||(e[12]=n(" ফি: ")),t("b",null,s((F.value||0).toLocaleString("bn-BD"))+" x "+s((o.value.length||0).toLocaleString("bn-BD"))+" = "+s((w.value||0).toLocaleString("bn-BD"))+" ৳",1)]),x.value>0?(u(),i("p",ye,[e[13]||(e[13]=n(" বিলম্ব ফি: ")),t("b",null,s((x.value||0).toLocaleString("bn-BD"))+" x "+s((o.value.length||0).toLocaleString("bn-BD"))+" = "+s((C.value||0).toLocaleString("bn-BD"))+" ৳",1)])):p("",!0),t("p",null,[e[14]||(e[14]=n(" মোট জমা ")),t("b",null,s((D.value||0).toLocaleString("bn-BD"))+" ৳",1)])]),t("div",{class:"flex justify-center"},[t("button",{onClick:I,class:"btn-2"},e[15]||(e[15]=[t("i",{class:"fas fa-money-bill-wave"},null,-1),n(" ফি গ্রহণ করুন ")]))])])):p("",!0)])):p("",!0),d.value.length?(u(),i("div",Se,[z(t("input",{type:"checkbox",id:"selectAllCheckbox","onUpdate:modelValue":e[2]||(e[2]=a=>B.value=a),onChange:E},null,544),[[J,B.value]]),e[17]||(e[17]=t("label",{for:"selectAllCheckbox"},"সব সিলেক্ট",-1))])):p("",!0),d.value.length?(u(),i("div",ke,[e[23]||(e[23]=O('<div class="bg-gray-400 text-white md:grid md:grid-cols-7 p-4 hidden rounded-md"><p class="md:col-span-3 px-2">পরীক্ষার্থীর নাম</p><p class="md:col-span-2 px-2">পিতার নাম</p><p class="md:col-span-1 px-2">জন্ম তারিখ</p><p class="md:col-span-1 px-2 md:text-end">রেজি. নং</p></div>',1)),(u(!0),i(A,null,R(d.value,(a,V)=>(u(),i("div",{key:a.id,onClick:Ae=>K(a.id),class:"cursor-pointer card-bg grid relative md:grid-cols-7 p-4"},[t("div",Le,[t("div",_e,[t("input",{type:"checkbox",value:a.id,checked:o.value.includes(a.id),class:"text-center"},null,8,Be)]),t("p",he,[e[18]||(e[18]=t("b",{class:"inline-block md:hidden"},"ক্র:",-1)),n(" "+s((V+1).toLocaleString("bn-BD"))+". ",1)]),t("p",Fe,[e[19]||(e[19]=t("b",{class:"inline-block md:hidden"},"নাম:",-1)),n(" "+s(a.name),1)])]),t("p",we,[e[20]||(e[20]=t("b",{class:"inline-block md:hidden"},"পিতা:",-1)),n(" "+s(a.father_name),1)]),t("p",Ce,[e[21]||(e[21]=t("b",{class:"inline-block md:hidden"},"জন্ম তারিখ:",-1)),n(" "+s(new Date(a.date_of_birth).toLocaleDateString("bn-BD")),1)]),t("p",Ve,[e[22]||(e[22]=t("b",{class:"inline-block md:hidden"},"রেজি. নং:",-1)),n(" "+s(a.registration_number),1)])],8,De))),128))])):p("",!0),N.value&&!d.value.length?(u(),i("div",ze,e[24]||(e[24]=[t("p",{class:"text-center text-red-500 p-6"}," ফি জমার জন্য কোন পরীক্ষার্থীর তথ্য পাওয়া যায়নি। সঠিক তথ্য দিয়ে অনুসন্ধান করুন। ",-1)]))):p("",!0),d.value.length?(u(),i("div",Ne,[t("div",null,[t("p",null,[e[25]||(e[25]=n(" মারহালা: ")),t("b",null,s(j.value),1)]),t("p",null,[e[26]||(e[26]=n(" নির্বাচিত পরীক্ষার্থীর সংখ্যা: ")),t("b",null,s((o.value.length||0).toLocaleString("bn-BD"))+" জন",1)]),t("p",null,[e[27]||(e[27]=n(" ফি: ")),t("b",null,s((F.value||0).toLocaleString("bn-BD"))+" x "+s((o.value.length||0).toLocaleString("bn-BD"))+" = "+s((w.value||0).toLocaleString("bn-BD"))+" ৳",1)]),x.value>0?(u(),i("p",Me,[e[28]||(e[28]=n(" বিলম্ব ফি: ")),t("b",null,s((x.value||0).toLocaleString("bn-BD"))+" x "+s((o.value.length||0).toLocaleString("bn-BD"))+" = "+s((C.value||0).toLocaleString("bn-BD"))+" ৳",1)])):p("",!0),t("p",null,[e[29]||(e[29]=n(" মোট জমা: ")),t("b",null,s((D.value||0).toLocaleString("bn-BD"))+" ৳",1)])]),t("div",{class:"flex justify-center"},[t("button",{type:"button",onClick:I,class:"btn-2"},"ফি জমা করুন")])])):p("",!0)]))]),t("div",Ie,[Q(m,{to:{name:"CollectFeeList"},class:"btn-3"},{default:X(()=>e[30]||(e[30]=[n("তালিকায় যান")])),_:1})])])}}};export{Ke as default};