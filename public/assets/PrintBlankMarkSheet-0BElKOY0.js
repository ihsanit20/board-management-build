import{O as N,r as i,B as P,P as U,o as Z,c as s,a,m as B,C as V,F as h,e as f,b as d,z as S,x as q,t as v,h as E,d as l,L as A}from"./index-DLPUmuKs.js";import{u as O}from"./zamat-BZRRvvzH.js";import{u as T}from"./center-CT2t9jrE.js";const $=N("print",()=>{const k=i(null),r=i(null),y=i(null),m=i(!1),o=i(null),c=async()=>{var n,u;if(!k.value||!r.value){o.value="Center ID and Zamat ID are required.";return}y.value=null,m.value=!0,o.value=null;try{const b=await U.post("/generate-mark-sheet",{center_id:k.value,zamat_id:r.value});y.value=b.data}catch(b){o.value=((u=(n=b.response)==null?void 0:n.data)==null?void 0:u.message)||"An error occurred while fetching the mark sheet."}finally{m.value=!1}};return P([k,r],async([n,u])=>{n&&u&&await c()}),{centerId:k,zamatId:r,markSheetData:y,loading:m,error:o,fetchMarkSheet:c}}),j={class:"my-container space-y-4"},G={class:"card-bg p-4 print:hidden"},H={class:"grid md:grid-cols-3 gap-4"},J=["label"],K=["value"],Q=["value"],R={key:1,class:"space-y-2 print:space-y-0"},W={key:0},X={class:"table-auto border-collapse border border-gray-300 w-full mt-4"},Y={class:"border border-gray-300 px-2 py-1 text-center"},ee={class:"border border-gray-300 px-2 py-1"},te={key:1,class:"card-bg py-6"},se={__name:"PrintBlankMarkSheet",setup(k){const r=$(),y=O(),m=T(),o=i(""),c=i(""),n=i(!1),u=i("");Z(async()=>{try{n.value=!0,await y.fetchZamats()}catch(p){u.value="ডাটা লোড করতে সমস্যা হয়েছে।",console.error("Error fetching zamats:",p)}finally{n.value=!1}});const b=async p=>{if(!p){o.value="",m.centers=[];return}try{n.value=!0,await m.fetchCenters({zamat_id:p})}catch(e){u.value="সেন্টার লোড করতে সমস্যা হয়েছে।",console.error("Error fetching centers:",e)}finally{n.value=!1}},F=async()=>{if(!c.value||!o.value){u.value="জামাত এবং সেন্টার নির্বাচন করুন।";return}u.value="";try{n.value=!0,r.centerId=o.value,r.zamatId=c.value,await r.fetchMarkSheet(),console.log("Mark Sheet Data:",r.markSheetData)}catch(p){u.value="মার্কশিট লোড করতে সমস্যা হয়েছে।",console.error("Error in handleFetchMarkSheet:",p)}finally{n.value=!1}};return(p,e)=>{var x,D,_,w,C,z,M,I;return l(),s("div",j,[a("div",G,[e[6]||(e[6]=a("h1",{class:"title-lg text-center"},"মার্কশিট প্রিন্ট",-1)),a("div",H,[a("div",null,[B(a("select",{"onUpdate:modelValue":e[0]||(e[0]=t=>c.value=t),onChange:e[1]||(e[1]=t=>b(c.value)),class:"input-1"},[e[3]||(e[3]=a("option",{value:"",disabled:""},"- জামাত নির্বাচন করুন -",-1)),(l(!0),s(h,null,f(d(y).departments,t=>(l(),s("optgroup",{label:t.name,key:t.id},[(l(!0),s(h,null,f(t.zamats,g=>(l(),s("option",{key:g.id,value:g.id},v(g.name),9,K))),128))],8,J))),128))],544),[[V,c.value]])]),a("div",null,[B(a("select",{"onUpdate:modelValue":e[2]||(e[2]=t=>o.value=t),class:"input-1"},[e[4]||(e[4]=a("option",{value:"",selected:"",disabled:""},"- মারকাজ নির্বাচন করুন -",-1)),(l(!0),s(h,null,f(d(m).centers,t=>(l(),s("option",{key:t==null?void 0:t.id,value:t==null?void 0:t.id},v(t==null?void 0:t.institute.name),9,Q))),128))],512),[[V,o.value]])]),a("div",{class:"w-full"},[a("button",{onClick:F,class:"btn-2 w-full"},e[5]||(e[5]=[a("i",{class:"fas fa-search"},null,-1),S(" অনুসন্ধান ")]))])])]),n.value||d(r).loading?(l(),q(A,{key:0})):(l(),s("div",R,[(D=(x=d(r).markSheetData)==null?void 0:x.students)!=null&&D.length?(l(),s("div",W,[a("p",null,[e[7]||(e[7]=a("b",null,"মারকাজ:",-1)),S(" "+v((w=(_=d(r).markSheetData)==null?void 0:_.center)==null?void 0:w.institute_name),1)]),a("p",null,[e[8]||(e[8]=a("b",null,"মারহালা:",-1)),S(" "+v((z=(C=d(r).markSheetData)==null?void 0:C.zamat)==null?void 0:z.name),1)]),a("table",X,[a("thead",null,[a("tr",null,[e[9]||(e[9]=a("th",{class:"border border-gray-300 px-2 py-1"},"#",-1)),e[10]||(e[10]=a("th",{class:"border border-gray-300 px-2 py-1"},"শিক্ষার্থীর নাম",-1)),(l(!0),s(h,null,f(d(r).markSheetData.subjects,t=>(l(),s("th",{key:t.name,class:"border border-gray-300 px-2 py-1"},v(t.name)+" ("+v(t.full_marks)+") ",1))),128))])]),a("tbody",null,[(l(!0),s(h,null,f(d(r).markSheetData.students,(t,g)=>(l(),s("tr",{key:t.id},[a("td",Y,v(g+1),1),a("td",ee,v(t.name),1),(l(!0),s(h,null,f(d(r).markSheetData.subjects,L=>(l(),s("td",{key:L.name,class:"border border-gray-300 px-2 py-1"}))),128))]))),128))])])])):E("",!0),!((I=(M=d(r).markSheetData)==null?void 0:M.students)!=null&&I.length)&&!n.value?(l(),s("div",te,e[11]||(e[11]=[a("p",{class:"text-center text-red-500"}," কোন শিক্ষার্থী পাওয়া যায়নি। দয়া করে সঠিক তথ্য দিয়ে অনুসন্ধান করুন। ",-1)]))):E("",!0)]))])}}};export{se as default};