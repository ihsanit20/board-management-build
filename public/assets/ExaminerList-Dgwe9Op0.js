import{K as A,L as g,M as C,o as u,c as m,a as e,l as M,m as x,v as b,z as D,y as $,t as y,r as v,h as F,i as E,F as z,b as B,N as w,f as k}from"./index-DSO3MCpv.js";const _=A("examiner",{state:()=>({examiners:[],examiner:null,loading:!1,error:null}),actions:{async fetchExaminers(){var i,l;this.loading=!0;try{const o=await g.get("/examiners");return this.examiners=o.data,this.examiners}catch(o){this.error=((l=(i=o.response)==null?void 0:i.data)==null?void 0:l.message)||"Failed to fetch examiners"}finally{this.loading=!1}},async fetchExaminer(i){var l,o;this.loading=!0;try{const n=await g.get(`/examiners/${i}`);this.examiner=n.data}catch(n){this.error=((o=(l=n.response)==null?void 0:l.data)==null?void 0:o.message)||"Failed to fetch examiner"}finally{this.loading=!1}},async createExaminer(i){var l,o;this.loading=!0;try{const n=await g.post("/examiners",i);this.examiners.push(n.data)}catch(n){this.error=((o=(l=n.response)==null?void 0:l.data)==null?void 0:o.message)||"Failed to create examiner"}finally{this.loading=!1}},async updateExaminer(i,l){var o,n;this.loading=!0;try{const a=await g.put(`/examiners/${i}`,l),r=this.examiners.findIndex(p=>p.id===i);r!==-1&&(this.examiners[r]=a.data)}catch(a){this.error=((n=(o=a.response)==null?void 0:o.data)==null?void 0:n.message)||"Failed to update examiner"}finally{this.loading=!1}},async deleteExaminer(i){var l,o;this.loading=!0;try{await g.delete(`/examiners/${i}`),this.examiners=this.examiners.filter(n=>n.id!==i)}catch(n){this.error=((o=(l=n.response)==null?void 0:l.data)==null?void 0:o.message)||"Failed to delete examiner"}finally{this.loading=!1}}}}),L={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},q={class:"card-bg md:p-8 p-4 md:w-1/2"},O={class:"mb-4"},T={class:"mb-4"},I={class:"mb-4"},K={class:"mb-4"},G={class:"flex justify-center gap-4"},H={__name:"AddExaminerModal",emits:["close","saved"],setup(i,{emit:l}){const o=l,n=C({name:"",designation:"",institute:"",phone:""}),a=_(),r=async()=>{await a.createExaminer(n),o("saved"),o("close")};return(p,t)=>(u(),m("div",L,[e("div",q,[t[10]||(t[10]=e("h2",{class:"text-xl font-bold mb-4"},"পরীক্ষক যুক্ত করুন",-1)),e("form",{onSubmit:M(r,["prevent"])},[e("div",O,[t[5]||(t[5]=e("label",{class:"block mb-2"},"নাম",-1)),x(e("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>n.name=s),type:"text",class:"w-full p-2 border rounded",required:""},null,512),[[b,n.name]])]),e("div",T,[t[6]||(t[6]=e("label",{class:"block mb-2"},"পদবি",-1)),x(e("input",{"onUpdate:modelValue":t[1]||(t[1]=s=>n.designation=s),type:"text",class:"w-full p-2 border rounded"},null,512),[[b,n.designation]])]),e("div",I,[t[7]||(t[7]=e("label",{class:"block mb-2"},"প্রতিষ্ঠান",-1)),x(e("input",{"onUpdate:modelValue":t[2]||(t[2]=s=>n.institute=s),type:"text",class:"w-full p-2 border rounded"},null,512),[[b,n.institute]])]),e("div",K,[t[8]||(t[8]=e("label",{class:"block mb-2"},"ফোন",-1)),x(e("input",{"onUpdate:modelValue":t[3]||(t[3]=s=>n.phone=s),type:"text",class:"w-full p-2 border rounded"},null,512),[[b,n.phone]])]),e("div",G,[t[9]||(t[9]=e("button",{type:"submit",class:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"}," Save ",-1)),e("button",{type:"button",onClick:t[4]||(t[4]=s=>o("close")),class:"bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"}," Cancel ")])],32)])]))}},J={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},P={class:"card-bg md:p-8 p-4 md:w-1/2"},Q={class:"mb-4"},R={class:"mb-4"},W={class:"mb-4"},X={class:"mb-4"},Y={class:"flex justify-center gap-4"},Z={__name:"EditExaminerModal",props:{examiner:Object},emits:["close","updated"],setup(i,{emit:l}){const o=l,n=i,a=C({name:"",designation:"",institute:"",phone:""}),r=_();D(()=>n.examiner,t=>{a.name=t.name||"",a.designation=t.designation||"",a.institute=t.institute||"",a.phone=t.phone||""},{immediate:!0});const p=async()=>{await r.updateExaminer(n.examiner.id,a),o("updated"),o("close")};return(t,s)=>(u(),m("div",J,[e("div",P,[s[10]||(s[10]=e("h2",{class:"text-xl font-bold mb-4"},"পরীক্ষক সম্পাদনা করুন",-1)),e("form",{onSubmit:M(p,["prevent"])},[e("div",Q,[s[5]||(s[5]=e("label",{class:"block mb-2"},"নাম",-1)),x(e("input",{"onUpdate:modelValue":s[0]||(s[0]=c=>a.name=c),type:"text",class:"w-full p-2 border rounded",required:""},null,512),[[b,a.name]])]),e("div",R,[s[6]||(s[6]=e("label",{class:"block mb-2"},"পদবি",-1)),x(e("input",{"onUpdate:modelValue":s[1]||(s[1]=c=>a.designation=c),type:"text",class:"w-full p-2 border rounded"},null,512),[[b,a.designation]])]),e("div",W,[s[7]||(s[7]=e("label",{class:"block mb-2"},"প্রতিষ্ঠান",-1)),x(e("input",{"onUpdate:modelValue":s[2]||(s[2]=c=>a.institute=c),type:"text",class:"w-full p-2 border rounded"},null,512),[[b,a.institute]])]),e("div",X,[s[8]||(s[8]=e("label",{class:"block mb-2"},"ফোন",-1)),x(e("input",{"onUpdate:modelValue":s[3]||(s[3]=c=>a.phone=c),type:"text",class:"w-full p-2 border rounded"},null,512),[[b,a.phone]])]),e("div",Y,[s[9]||(s[9]=e("button",{type:"submit",class:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"}," Save ",-1)),e("button",{type:"button",onClick:s[4]||(s[4]=c=>o("close")),class:"bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"}," Cancel ")])],32)])]))}},ee={class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},te={class:"card-bg p-4 md:p-8"},se={class:"flex justify-end mt-4"},ne={__name:"DeleteExaminerModal",props:{examiner:{type:Object,required:!0}},emits:["close","deleted"],setup(i,{emit:l}){const o=l,n=i,a=_(),r=async()=>{await a.deleteExaminer(n.examiner.id),o("deleted"),o("close")};return(p,t)=>(u(),m("div",ee,[e("div",te,[t[3]||(t[3]=e("h2",{class:"text-xl font-bold mb-4"},"ডিলেট পরীক্ষক",-1)),e("p",null,[t[1]||(t[1]=$("আপনি কি (")),e("b",null,y(i.examiner.name),1),t[2]||(t[2]=$(") ডিলিট করতে চান?"))]),e("div",se,[e("button",{onClick:t[0]||(t[0]=s=>o("close")),class:"bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"}," না "),e("button",{onClick:r,class:"bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"}," ডিলেট ")])])]))}},oe={class:"my-container space-y-2"},le={key:0,class:"flex justify-center items-center"},ae={key:1,class:"overflow-x-auto"},ie={class:"min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden"},re={class:"text-gray-600 text-sm font-light"},de={class:"py-3 px-2 text-left whitespace-nowrap"},ue={class:"flex items-center"},ce={class:"mr-2"},me={class:"font-medium"},pe={class:"py-3 px-2 text-left"},xe={class:"title-md"},be={class:"py-3 px-2 text-left"},fe={class:"title-md"},ye={class:"py-3 px-2 text-left"},ge={class:"title-md"},ve={class:"py-3 px-2 text-left"},he={class:"title-md"},_e={class:"py-3 px-2 text-center"},we={class:"flex item-center justify-center gap-4"},ke=["onClick"],$e=["onClick"],Ee={key:1},Me={__name:"ExaminerList",setup(i){const l=_(),o=v(!1),n=v(!1),a=v(!1),r=v(null),p=v(!0),t=()=>o.value=!0,s=async()=>{o.value=!1,await l.fetchExaminers()},c=h=>{r.value=h,n.value=!0},j=async()=>{n.value=!1,await l.fetchExaminers()},V=h=>{r.value=h,a.value=!0},N=()=>a.value=!1;return F(async()=>{try{await l.fetchExaminers()}finally{p.value=!1}}),(h,d)=>(u(),m("div",oe,[e("div",{class:"flex justify-between items-center"},[d[0]||(d[0]=e("h1",{class:"title-lg"},"পরীক্ষক তালিকা",-1)),e("button",{class:"btn-2",onClick:t},"নতুন যুক্ত করুন")]),p.value?(u(),m("div",le,d[1]||(d[1]=[e("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1)]))):(u(),m("div",ae,[e("table",ie,[d[5]||(d[5]=e("thead",null,[e("tr",{class:"bg-gray-200 text-gray-700 text-sm leading-normal"},[e("th",{class:"py-3 px-2 text-left"},"#"),e("th",{class:"py-3 px-2 text-left"},"নাম"),e("th",{class:"py-3 px-2 text-left"},"পদবি"),e("th",{class:"py-3 px-2 text-left"},"প্রতিষ্ঠান"),e("th",{class:"py-3 px-2 text-left"},"ফোন"),e("th",{class:"py-3 px-2 text-center"},"একশন")])],-1)),e("tbody",re,[E(l).examiners.length?(u(!0),m(z,{key:0},B(E(l).examiners,(f,S)=>(u(),m("tr",{key:f.id,class:"border-b border-gray-200 hover:bg-gray-100"},[e("td",de,[e("div",ue,[e("div",ce,[e("p",me,y(S+1),1)])])]),e("td",pe,[e("p",xe,y(f.name),1)]),e("td",be,[e("p",fe,y(f.designation||"N/A"),1)]),e("td",ye,[e("p",ge,y(f.institute||"N/A"),1)]),e("td",ve,[e("p",he,y(f.phone||"N/A"),1)]),e("td",_e,[e("div",we,[e("button",{onClick:U=>c(f),class:"text-blue-600 hover:text-blue-800"},d[2]||(d[2]=[e("i",{class:"fas fa-edit"},null,-1)]),8,ke),e("button",{onClick:U=>V(f),class:"text-red-600 hover:text-red-800"},d[3]||(d[3]=[e("i",{class:"fas fa-trash"},null,-1)]),8,$e)])])]))),128)):(u(),m("tr",Ee,d[4]||(d[4]=[e("td",{colspan:"6",class:"text-center text-red-500 py-4"},"No examiners found",-1)])))])])])),o.value?(u(),w(H,{key:2,class:"z-40",onClose:s})):k("",!0),n.value?(u(),w(Z,{key:3,class:"z-40",examiner:r.value,onClose:j},null,8,["examiner"])):k("",!0),a.value?(u(),w(ne,{key:4,class:"z-40",examiner:r.value,onClose:N},null,8,["examiner"])):k("",!0)]))}};export{Me as default};