import{r as l,u as p,g as m,o as g,c as h,w as u,v as i,a as s,s as v}from"./index.ca8f583b.js";const _={class:"main"},w=s("h1",null,"Login",-1),V={__name:"LoginView",setup(f){const t=l(""),a=l(""),c=p(),r=m();function d(){v(r,t.value,a.value).then(e=>c.push("/")).catch(e=>{console.log(e.code),console.log(e.message)})}return(e,o)=>(g(),h("main",_,[w,u(s("input",{type:"text",placeholder:"Email","onUpdate:modelValue":o[0]||(o[0]=n=>t.value=n)},null,512),[[i,t.value]]),u(s("input",{type:"password",placeholder:"Password","onUpdate:modelValue":o[1]||(o[1]=n=>a.value=n)},null,512),[[i,a.value]]),s("button",{onClick:d},"Login")]))}};export{V as default};
