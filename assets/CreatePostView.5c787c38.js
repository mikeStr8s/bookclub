import{r as a,u as i,o as d,c as m,a as t,w as n,v as u,F as v,g as f,l as h,D as y,y as b}from"./index.b04c21e5.js";const _=t("h1",null,"Create an Account",-1),w={__name:"CreatePostView",setup(g){const o=a(""),s=a(""),r=i();function c(){if(f().currentUser){const l=h();y(b(l,"posts"),{title:o.value,body:s.value,date:Date.now()}).then(e=>{console.log(e),console.log("successfully posted"),r.push("/")}).catch(e=>{console.error(e)})}}return(p,l)=>(d(),m(v,null,[_,t("p",null,[n(t("input",{type:"text",placeholder:"title","onUpdate:modelValue":l[0]||(l[0]=e=>o.value=e)},null,512),[[u,o.value]])]),t("p",null,[n(t("input",{type:"textarea","onUpdate:modelValue":l[1]||(l[1]=e=>s.value=e)},null,512),[[u,s.value]])]),t("p",null,[t("button",{onClick:c},"Submit")])],64))}};export{w as default};
