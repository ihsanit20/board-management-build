import{y as d,r as l,h,c as s,t as n,f as r,a as i,o,s as v}from"./index-BLqg7Ylw.js";const p={class:"my-container card-bg p-4 md:p-8"},m={key:0,class:"title-lg text-center"},x={key:1,class:"text-red-500 text-center"},y={key:2},f={class:"text-sm text-gray-500 text-center"},g=["innerHTML"],k={key:3,class:"text-center"},N=i("p",null,"নোটিশ লোড হচ্ছে...",-1),S=[N],M={__name:"NoticeShow",setup(w){const a=d(),u=v(),e=l(null),t=l(""),_=async()=>{t.value="";try{const c=u.params.id;await a.fetchNotice(c),e.value=a.notice}catch{t.value=a.error||"নোটিশ লোড করতে ব্যর্থ হয়েছে।"}};return h(()=>{_()}),(c,B)=>(o(),s("div",p,[e.value?(o(),s("h1",m,n(e.value.title),1)):r("",!0),t.value?(o(),s("div",x,n(t.value),1)):r("",!0),e.value?(o(),s("div",y,[i("div",f," প্রকাশের তারিখ: "+n(new Date(e.value.publish_date).toLocaleDateString("bn-BD")),1),i("div",{class:"mt-6 text-gray-700 prose max-w-none",innerHTML:e.value.description},null,8,g)])):t.value?r("",!0):(o(),s("div",k,S))]))}};export{M as default};