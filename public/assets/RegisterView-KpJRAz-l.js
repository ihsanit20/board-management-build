import{r as n,k as y,o as g,c as d,a as t,l as x,m as u,v as i,b as m,t as h,h as b,p as w,d as c,q as V}from"./index-DqhGIziJ.js";const R={class:"my-container max-w-2xl"},k={class:"card-bg p-8 my-6"},N={key:0,class:"error-message"},B={__name:"RegisterView",setup(S){const r=n(""),o=n(""),l=n(""),v=V(),p=w(),a=y();g(()=>{p.query.phone&&(o.value=p.query.phone)});const f=async()=>{await a.register(r.value,o.value,l.value),a.error||v.push("/dashboard")};return(_,e)=>(c(),d("div",R,[t("div",k,[e[4]||(e[4]=t("h1",{class:"title-lg text-center"},"Register",-1)),t("form",{class:"flex flex-col gap-4",onSubmit:x(f,["prevent"])},[u(t("input",{class:"input-1","onUpdate:modelValue":e[0]||(e[0]=s=>r.value=s),type:"text",placeholder:"Full Name"},null,512),[[i,r.value]]),u(t("input",{class:"input-1","onUpdate:modelValue":e[1]||(e[1]=s=>o.value=s),type:"text",placeholder:"Phone Number"},null,512),[[i,o.value]]),u(t("input",{class:"input-1","onUpdate:modelValue":e[2]||(e[2]=s=>l.value=s),type:"password",placeholder:"Password"},null,512),[[i,l.value]]),e[3]||(e[3]=t("button",{class:"btn-2",type:"submit"},"Register",-1))],32),m(a).error?(c(),d("div",N,h(m(a).error),1)):b("",!0)])]))}};export{B as default};