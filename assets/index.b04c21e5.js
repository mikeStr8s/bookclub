(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function yi(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const cu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",lu=yi(cu);function qa(t){return!!t||t===""}function vi(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ve(r)?hu(r):vi(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(ve(t))return t;if(ce(t))return t}}const uu=/;(?![^(]*\))/g,fu=/:(.+)/;function hu(t){const e={};return t.split(uu).forEach(n=>{if(n){const r=n.split(fu);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function bi(t){let e="";if(ve(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const r=bi(t[n]);r&&(e+=r+" ")}else if(ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const po=t=>ve(t)?t:t==null?"":B(t)||ce(t)&&(t.toString===Ga||!V(t.toString))?JSON.stringify(t,Wa,2):String(t),Wa=(t,e)=>e&&e.__v_isRef?Wa(t,e.value):pn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Ka(e)?{[`Set(${e.size})`]:[...e.values()]}:ce(e)&&!B(e)&&!Ja(e)?String(e):e,se={},dn=[],We=()=>{},du=()=>!1,pu=/^on[^a-z]/,us=t=>pu.test(t),wi=t=>t.startsWith("onUpdate:"),Se=Object.assign,Ei=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},mu=Object.prototype.hasOwnProperty,W=(t,e)=>mu.call(t,e),B=Array.isArray,pn=t=>fs(t)==="[object Map]",Ka=t=>fs(t)==="[object Set]",V=t=>typeof t=="function",ve=t=>typeof t=="string",Ii=t=>typeof t=="symbol",ce=t=>t!==null&&typeof t=="object",Ti=t=>ce(t)&&V(t.then)&&V(t.catch),Ga=Object.prototype.toString,fs=t=>Ga.call(t),gu=t=>fs(t).slice(8,-1),Ja=t=>fs(t)==="[object Object]",Si=t=>ve(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Mr=yi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),hs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},_u=/-(\w)/g,bn=hs(t=>t.replace(_u,(e,n)=>n?n.toUpperCase():"")),yu=/\B([A-Z])/g,Pn=hs(t=>t.replace(yu,"-$1").toLowerCase()),Ya=hs(t=>t.charAt(0).toUpperCase()+t.slice(1)),ks=hs(t=>t?`on${Ya(t)}`:""),er=(t,e)=>!Object.is(t,e),Lr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},qr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Wr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let mo;const vu=()=>mo||(mo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let tt;class bu{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&tt&&(this.parent=tt,this.index=(tt.scopes||(tt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=tt;try{return tt=this,e()}finally{tt=n}}}on(){tt=this}off(){tt=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function wu(t,e=tt){e&&e.active&&e.effects.push(t)}const Ri=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Qa=t=>(t.w&Ut)>0,Xa=t=>(t.n&Ut)>0,Eu=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ut},Iu=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Qa(s)&&!Xa(s)?s.delete(t):e[n++]=s,s.w&=~Ut,s.n&=~Ut}e.length=n}},Hs=new WeakMap;let $n=0,Ut=1;const zs=30;let ze;const Gt=Symbol(""),qs=Symbol("");class Ai{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,wu(this,r)}run(){if(!this.active)return this.fn();let e=ze,n=Dt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ze,ze=this,Dt=!0,Ut=1<<++$n,$n<=zs?Eu(this):go(this),this.fn()}finally{$n<=zs&&Iu(this),Ut=1<<--$n,ze=this.parent,Dt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ze===this?this.deferStop=!0:this.active&&(go(this),this.onStop&&this.onStop(),this.active=!1)}}function go(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Dt=!0;const Za=[];function On(){Za.push(Dt),Dt=!1}function Nn(){const t=Za.pop();Dt=t===void 0?!0:t}function De(t,e,n){if(Dt&&ze){let r=Hs.get(t);r||Hs.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ri()),ec(s)}}function ec(t,e){let n=!1;$n<=zs?Xa(t)||(t.n|=Ut,n=!Qa(t)):n=!t.has(ze),n&&(t.add(ze),ze.deps.push(t))}function gt(t,e,n,r,s,i){const o=Hs.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&B(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":B(t)?Si(n)&&a.push(o.get("length")):(a.push(o.get(Gt)),pn(t)&&a.push(o.get(qs)));break;case"delete":B(t)||(a.push(o.get(Gt)),pn(t)&&a.push(o.get(qs)));break;case"set":pn(t)&&a.push(o.get(Gt));break}if(a.length===1)a[0]&&Ws(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Ws(Ri(c))}}function Ws(t,e){const n=B(t)?t:[...t];for(const r of n)r.computed&&_o(r);for(const r of n)r.computed||_o(r)}function _o(t,e){(t!==ze||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Tu=yi("__proto__,__v_isRef,__isVue"),tc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ii)),Su=ki(),Ru=ki(!1,!0),Au=ki(!0),yo=ku();function ku(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Q(this);for(let i=0,o=this.length;i<o;i++)De(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Q)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){On();const r=Q(this)[e].apply(this,n);return Nn(),r}}),t}function ki(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?zu:oc:e?ic:sc).get(r))return r;const o=B(r);if(!t&&o&&W(yo,s))return Reflect.get(yo,s,i);const a=Reflect.get(r,s,i);return(Ii(s)?tc.has(s):Tu(s))||(t||De(r,"get",s),e)?a:Ee(a)?o&&Si(s)?a:a.value:ce(a)?t?ac(a):gr(a):a}}const Cu=nc(),Pu=nc(!0);function nc(t=!1){return function(n,r,s,i){let o=n[r];if(wn(o)&&Ee(o)&&!Ee(s))return!1;if(!t&&(!Kr(s)&&!wn(s)&&(o=Q(o),s=Q(s)),!B(n)&&Ee(o)&&!Ee(s)))return o.value=s,!0;const a=B(n)&&Si(r)?Number(r)<n.length:W(n,r),c=Reflect.set(n,r,s,i);return n===Q(i)&&(a?er(s,o)&&gt(n,"set",r,s):gt(n,"add",r,s)),c}}function Ou(t,e){const n=W(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&gt(t,"delete",e,void 0),r}function Nu(t,e){const n=Reflect.has(t,e);return(!Ii(e)||!tc.has(e))&&De(t,"has",e),n}function Du(t){return De(t,"iterate",B(t)?"length":Gt),Reflect.ownKeys(t)}const rc={get:Su,set:Cu,deleteProperty:Ou,has:Nu,ownKeys:Du},xu={get:Au,set(t,e){return!0},deleteProperty(t,e){return!0}},Mu=Se({},rc,{get:Ru,set:Pu}),Ci=t=>t,ds=t=>Reflect.getPrototypeOf(t);function Ar(t,e,n=!1,r=!1){t=t.__v_raw;const s=Q(t),i=Q(e);n||(e!==i&&De(s,"get",e),De(s,"get",i));const{has:o}=ds(s),a=r?Ci:n?Ni:tr;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function kr(t,e=!1){const n=this.__v_raw,r=Q(n),s=Q(t);return e||(t!==s&&De(r,"has",t),De(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Cr(t,e=!1){return t=t.__v_raw,!e&&De(Q(t),"iterate",Gt),Reflect.get(t,"size",t)}function vo(t){t=Q(t);const e=Q(this);return ds(e).has.call(e,t)||(e.add(t),gt(e,"add",t,t)),this}function bo(t,e){e=Q(e);const n=Q(this),{has:r,get:s}=ds(n);let i=r.call(n,t);i||(t=Q(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?er(e,o)&&gt(n,"set",t,e):gt(n,"add",t,e),this}function wo(t){const e=Q(this),{has:n,get:r}=ds(e);let s=n.call(e,t);s||(t=Q(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&gt(e,"delete",t,void 0),i}function Eo(){const t=Q(this),e=t.size!==0,n=t.clear();return e&&gt(t,"clear",void 0,void 0),n}function Pr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Q(o),c=e?Ci:t?Ni:tr;return!t&&De(a,"iterate",Gt),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Or(t,e,n){return function(...r){const s=this.__v_raw,i=Q(s),o=pn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Ci:e?Ni:tr;return!e&&De(i,"iterate",c?qs:Gt),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function Et(t){return function(...e){return t==="delete"?!1:this}}function Lu(){const t={get(i){return Ar(this,i)},get size(){return Cr(this)},has:kr,add:vo,set:bo,delete:wo,clear:Eo,forEach:Pr(!1,!1)},e={get(i){return Ar(this,i,!1,!0)},get size(){return Cr(this)},has:kr,add:vo,set:bo,delete:wo,clear:Eo,forEach:Pr(!1,!0)},n={get(i){return Ar(this,i,!0)},get size(){return Cr(this,!0)},has(i){return kr.call(this,i,!0)},add:Et("add"),set:Et("set"),delete:Et("delete"),clear:Et("clear"),forEach:Pr(!0,!1)},r={get(i){return Ar(this,i,!0,!0)},get size(){return Cr(this,!0)},has(i){return kr.call(this,i,!0)},add:Et("add"),set:Et("set"),delete:Et("delete"),clear:Et("clear"),forEach:Pr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Or(i,!1,!1),n[i]=Or(i,!0,!1),e[i]=Or(i,!1,!0),r[i]=Or(i,!0,!0)}),[t,n,e,r]}const[Fu,Uu,Bu,$u]=Lu();function Pi(t,e){const n=e?t?$u:Bu:t?Uu:Fu;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(W(n,s)&&s in r?n:r,s,i)}const Vu={get:Pi(!1,!1)},ju={get:Pi(!1,!0)},Hu={get:Pi(!0,!1)},sc=new WeakMap,ic=new WeakMap,oc=new WeakMap,zu=new WeakMap;function qu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wu(t){return t.__v_skip||!Object.isExtensible(t)?0:qu(gu(t))}function gr(t){return wn(t)?t:Oi(t,!1,rc,Vu,sc)}function Ku(t){return Oi(t,!1,Mu,ju,ic)}function ac(t){return Oi(t,!0,xu,Hu,oc)}function Oi(t,e,n,r,s){if(!ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Wu(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function mn(t){return wn(t)?mn(t.__v_raw):!!(t&&t.__v_isReactive)}function wn(t){return!!(t&&t.__v_isReadonly)}function Kr(t){return!!(t&&t.__v_isShallow)}function cc(t){return mn(t)||wn(t)}function Q(t){const e=t&&t.__v_raw;return e?Q(e):t}function lc(t){return qr(t,"__v_skip",!0),t}const tr=t=>ce(t)?gr(t):t,Ni=t=>ce(t)?ac(t):t;function uc(t){Dt&&ze&&(t=Q(t),ec(t.dep||(t.dep=Ri())))}function fc(t,e){t=Q(t),t.dep&&Ws(t.dep)}function Ee(t){return!!(t&&t.__v_isRef===!0)}function Hn(t){return hc(t,!1)}function Gu(t){return hc(t,!0)}function hc(t,e){return Ee(t)?t:new Ju(t,e)}class Ju{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Q(e),this._value=n?e:tr(e)}get value(){return uc(this),this._value}set value(e){const n=this.__v_isShallow||Kr(e)||wn(e);e=n?e:Q(e),er(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:tr(e),fc(this))}}function Le(t){return Ee(t)?t.value:t}const Yu={get:(t,e,n)=>Le(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ee(s)&&!Ee(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function dc(t){return mn(t)?t:new Proxy(t,Yu)}var pc;class Qu{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[pc]=!1,this._dirty=!0,this.effect=new Ai(e,()=>{this._dirty||(this._dirty=!0,fc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Q(this);return uc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}pc="__v_isReadonly";function Xu(t,e,n=!1){let r,s;const i=V(t);return i?(r=t,s=We):(r=t.get,s=t.set),new Qu(r,s,i||!s,n)}function xt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){_r(i,e,n)}return s}function Ke(t,e,n,r){if(V(t)){const i=xt(t,e,n,r);return i&&Ti(i)&&i.catch(o=>{_r(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ke(t[i],e,n,r));return s}function _r(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){xt(c,null,10,[t,o,a]);return}}Zu(t,n,s,r)}function Zu(t,e,n,r=!0){console.error(t)}let nr=!1,Ks=!1;const we=[];let nt=0;const gn=[];let ft=null,zt=0;const mc=Promise.resolve();let Di=null;function gc(t){const e=Di||mc;return t?e.then(this?t.bind(this):t):e}function ef(t){let e=nt+1,n=we.length;for(;e<n;){const r=e+n>>>1;rr(we[r])<t?e=r+1:n=r}return e}function xi(t){(!we.length||!we.includes(t,nr&&t.allowRecurse?nt+1:nt))&&(t.id==null?we.push(t):we.splice(ef(t.id),0,t),_c())}function _c(){!nr&&!Ks&&(Ks=!0,Di=mc.then(bc))}function tf(t){const e=we.indexOf(t);e>nt&&we.splice(e,1)}function yc(t){B(t)?gn.push(...t):(!ft||!ft.includes(t,t.allowRecurse?zt+1:zt))&&gn.push(t),_c()}function Io(t,e=nr?nt+1:0){for(;e<we.length;e++){const n=we[e];n&&n.pre&&(we.splice(e,1),e--,n())}}function vc(t){if(gn.length){const e=[...new Set(gn)];if(gn.length=0,ft){ft.push(...e);return}for(ft=e,ft.sort((n,r)=>rr(n)-rr(r)),zt=0;zt<ft.length;zt++)ft[zt]();ft=null,zt=0}}const rr=t=>t.id==null?1/0:t.id,nf=(t,e)=>{const n=rr(t)-rr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function bc(t){Ks=!1,nr=!0,we.sort(nf);const e=We;try{for(nt=0;nt<we.length;nt++){const n=we[nt];n&&n.active!==!1&&xt(n,null,14)}}finally{nt=0,we.length=0,vc(),nr=!1,Di=null,(we.length||gn.length)&&bc()}}function rf(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||se;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=r[u]||se;p&&(s=n.map(g=>g.trim())),f&&(s=n.map(Wr))}let a,c=r[a=ks(e)]||r[a=ks(bn(e))];!c&&i&&(c=r[a=ks(Pn(e))]),c&&Ke(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ke(l,t,6,s)}}function wc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!V(t)){const c=l=>{const u=wc(l,e,!0);u&&(a=!0,Se(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ce(t)&&r.set(t,null),null):(B(i)?i.forEach(c=>o[c]=null):Se(o,i),ce(t)&&r.set(t,o),o)}function ps(t,e){return!t||!us(e)?!1:(e=e.slice(2).replace(/Once$/,""),W(t,e[0].toLowerCase()+e.slice(1))||W(t,Pn(e))||W(t,e))}let qe=null,Ec=null;function Gr(t){const e=qe;return qe=t,Ec=t&&t.type.__scopeId||null,e}function qt(t,e=qe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Do(-1);const i=Gr(e),o=t(...s);return Gr(i),r._d&&Do(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Cs(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:p,setupState:g,ctx:E,inheritAttrs:L}=t;let C,k;const I=Gr(t);try{if(n.shapeFlag&4){const H=s||r;C=je(u.call(H,H,f,i,g,p,E)),k=c}else{const H=e;C=je(H.length>1?H(i,{attrs:c,slots:a,emit:l}):H(i,null)),k=e.props?c:of(c)}}catch(H){zn.length=0,_r(H,t,1),C=fe(Qt)}let P=C;if(k&&L!==!1){const H=Object.keys(k),{shapeFlag:J}=P;H.length&&J&7&&(o&&H.some(wi)&&(k=af(k,o)),P=In(P,k))}return n.dirs&&(P=In(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),C=P,Gr(I),C}function sf(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(Qr(r)){if(r.type!==Qt||r.children==="v-if"){if(e)return;e=r}}else return}return e}const of=t=>{let e;for(const n in t)(n==="class"||n==="style"||us(n))&&((e||(e={}))[n]=t[n]);return e},af=(t,e)=>{const n={};for(const r in t)(!wi(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function cf(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?To(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==r[p]&&!ps(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?To(r,o,l):!0:!!o;return!1}function To(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ps(n,i))return!0}return!1}function Mi({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const lf=t=>t.__isSuspense,uf={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,c,l){t==null?hf(e,n,r,s,i,o,a,c,l):df(t,e,n,r,s,o,a,c,l)},hydrate:pf,create:Li,normalize:mf},ff=uf;function sr(t,e){const n=t.props&&t.props[e];V(n)&&n()}function hf(t,e,n,r,s,i,o,a,c){const{p:l,o:{createElement:u}}=c,f=u("div"),p=t.suspense=Li(t,s,r,e,f,n,i,o,a,c);l(null,p.pendingBranch=t.ssContent,f,null,r,p,i,o),p.deps>0?(sr(t,"onPending"),sr(t,"onFallback"),l(null,t.ssFallback,e,n,r,null,i,o),_n(p,t.ssFallback)):p.resolve()}function df(t,e,n,r,s,i,o,a,{p:c,um:l,o:{createElement:u}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const p=e.ssContent,g=e.ssFallback,{activeBranch:E,pendingBranch:L,isInFallback:C,isHydrating:k}=f;if(L)f.pendingBranch=p,kt(p,L)?(c(L,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():C&&(c(E,g,n,r,s,null,i,o,a),_n(f,g))):(f.pendingId++,k?(f.isHydrating=!1,f.activeBranch=L):l(L,s,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),C?(c(null,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():(c(E,g,n,r,s,null,i,o,a),_n(f,g))):E&&kt(p,E)?(c(E,p,n,r,s,f,i,o,a),f.resolve(!0)):(c(null,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0&&f.resolve()));else if(E&&kt(p,E))c(E,p,n,r,s,f,i,o,a),_n(f,p);else if(sr(e,"onPending"),f.pendingBranch=p,f.pendingId++,c(null,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0)f.resolve();else{const{timeout:I,pendingId:P}=f;I>0?setTimeout(()=>{f.pendingId===P&&f.fallback(g)},I):I===0&&f.fallback(g)}}function Li(t,e,n,r,s,i,o,a,c,l,u=!1){const{p:f,m:p,um:g,n:E,o:{parentNode:L,remove:C}}=l,k=Wr(t.props&&t.props.timeout),I={vnode:t,parent:e,parentComponent:n,isSVG:o,container:r,hiddenContainer:s,anchor:i,deps:0,pendingId:0,timeout:typeof k=="number"?k:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(P=!1){const{vnode:H,activeBranch:J,pendingBranch:Y,pendingId:ue,effects:ge,parentComponent:le,container:be}=I;if(I.isHydrating)I.isHydrating=!1;else if(!P){const ct=J&&Y.transition&&Y.transition.mode==="out-in";ct&&(J.transition.afterLeave=()=>{ue===I.pendingId&&p(Y,be,Qe,0)});let{anchor:Qe}=I;J&&(Qe=E(J),g(J,le,I,!0)),ct||p(Y,be,Qe,0)}_n(I,Y),I.pendingBranch=null,I.isInFallback=!1;let pe=I.parent,Re=!1;for(;pe;){if(pe.pendingBranch){pe.effects.push(...ge),Re=!0;break}pe=pe.parent}Re||yc(ge),I.effects=[],sr(H,"onResolve")},fallback(P){if(!I.pendingBranch)return;const{vnode:H,activeBranch:J,parentComponent:Y,container:ue,isSVG:ge}=I;sr(H,"onFallback");const le=E(J),be=()=>{!I.isInFallback||(f(null,P,ue,le,Y,null,ge,a,c),_n(I,P))},pe=P.transition&&P.transition.mode==="out-in";pe&&(J.transition.afterLeave=be),I.isInFallback=!0,g(J,Y,null,!0),pe||be()},move(P,H,J){I.activeBranch&&p(I.activeBranch,P,H,J),I.container=P},next(){return I.activeBranch&&E(I.activeBranch)},registerDep(P,H){const J=!!I.pendingBranch;J&&I.deps++;const Y=P.vnode.el;P.asyncDep.catch(ue=>{_r(ue,P,0)}).then(ue=>{if(P.isUnmounted||I.isUnmounted||I.pendingId!==P.suspenseId)return;P.asyncResolved=!0;const{vnode:ge}=P;Zs(P,ue,!1),Y&&(ge.el=Y);const le=!Y&&P.subTree.el;H(P,ge,L(Y||P.subTree.el),Y?null:E(P.subTree),I,o,c),le&&C(le),Mi(P,ge.el),J&&--I.deps===0&&I.resolve()})},unmount(P,H){I.isUnmounted=!0,I.activeBranch&&g(I.activeBranch,n,P,H),I.pendingBranch&&g(I.pendingBranch,n,P,H)}};return I}function pf(t,e,n,r,s,i,o,a,c){const l=e.suspense=Li(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),u=c(t,l.pendingBranch=e.ssContent,n,l,i,o);return l.deps===0&&l.resolve(),u}function mf(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=So(r?n.default:n),t.ssFallback=r?So(n.fallback):fe(Qt)}function So(t){let e;if(V(t)){const n=En&&t._c;n&&(t._d=!1,Jt()),t=t(),n&&(t._d=!0,e=Ue,Fc())}return B(t)&&(t=sf(t)),t=je(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function gf(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):yc(t)}function _n(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,s=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=s,Mi(r,s))}function Fr(t,e){if(ye){let n=ye.provides;const r=ye.parent&&ye.parent.provides;r===n&&(n=ye.provides=Object.create(r)),n[t]=e}}function pt(t,e,n=!1){const r=ye||qe;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&V(e)?e.call(r.proxy):e}}const Ro={};function Ur(t,e,n){return Ic(t,e,n)}function Ic(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=se){const a=ye;let c,l=!1,u=!1;if(Ee(t)?(c=()=>t.value,l=Kr(t)):mn(t)?(c=()=>t,r=!0):B(t)?(u=!0,l=t.some(k=>mn(k)||Kr(k)),c=()=>t.map(k=>{if(Ee(k))return k.value;if(mn(k))return Kt(k);if(V(k))return xt(k,a,2)})):V(t)?e?c=()=>xt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),Ke(t,a,3,[p])}:c=We,e&&r){const k=c;c=()=>Kt(k())}let f,p=k=>{f=C.onStop=()=>{xt(k,a,4)}};if(ir)return p=We,e?n&&Ke(e,a,3,[c(),u?[]:void 0,p]):c(),We;let g=u?[]:Ro;const E=()=>{if(!!C.active)if(e){const k=C.run();(r||l||(u?k.some((I,P)=>er(I,g[P])):er(k,g)))&&(f&&f(),Ke(e,a,3,[k,g===Ro?void 0:g,p]),g=k)}else C.run()};E.allowRecurse=!!e;let L;s==="sync"?L=E:s==="post"?L=()=>Ae(E,a&&a.suspense):(E.pre=!0,a&&(E.id=a.uid),L=()=>xi(E));const C=new Ai(c,L);return e?n?E():g=C.run():s==="post"?Ae(C.run.bind(C),a&&a.suspense):C.run(),()=>{C.stop(),a&&a.scope&&Ei(a.scope.effects,C)}}function _f(t,e,n){const r=this.proxy,s=ve(t)?t.includes(".")?Tc(r,t):()=>r[t]:t.bind(r,r);let i;V(e)?i=e:(i=e.handler,n=e);const o=ye;Bt(this);const a=Ic(s,i.bind(r),n);return o?Bt(o):Mt(),a}function Tc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Kt(t,e){if(!ce(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ee(t))Kt(t.value,e);else if(B(t))for(let n=0;n<t.length;n++)Kt(t[n],e);else if(Ka(t)||pn(t))t.forEach(n=>{Kt(n,e)});else if(Ja(t))for(const n in t)Kt(t[n],e);return t}function Sc(t){return V(t)?{setup:t,name:t.name}:t}const Br=t=>!!t.type.__asyncLoader,Rc=t=>t.type.__isKeepAlive;function yf(t,e){Ac(t,"a",e)}function vf(t,e){Ac(t,"da",e)}function Ac(t,e,n=ye){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ms(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Rc(s.parent.vnode)&&bf(r,e,n,s),s=s.parent}}function bf(t,e,n,r){const s=ms(e,t,r,!0);kc(()=>{Ei(r[e],s)},n)}function ms(t,e,n=ye,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;On(),Bt(n);const a=Ke(e,n,t,o);return Mt(),Nn(),a});return r?s.unshift(i):s.push(i),i}}const bt=t=>(e,n=ye)=>(!ir||t==="sp")&&ms(t,e,n),wf=bt("bm"),Ef=bt("m"),If=bt("bu"),Tf=bt("u"),Sf=bt("bum"),kc=bt("um"),Rf=bt("sp"),Af=bt("rtg"),kf=bt("rtc");function Cf(t,e=ye){ms("ec",t,e)}function Fy(t,e){const n=qe;if(n===null)return t;const r=_s(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=se]=e[i];V(o)&&(o={mounted:o,updated:o}),o.deep&&Kt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function $t(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(On(),Ke(c,n,8,[t.el,a,t,e]),Nn())}}const Pf=Symbol(),Gs=t=>t?$c(t)?_s(t)||t.proxy:Gs(t.parent):null,Jr=Se(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Gs(t.parent),$root:t=>Gs(t.root),$emit:t=>t.emit,$options:t=>Fi(t),$forceUpdate:t=>t.f||(t.f=()=>xi(t.update)),$nextTick:t=>t.n||(t.n=gc.bind(t.proxy)),$watch:t=>_f.bind(t)}),Of={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==se&&W(r,e))return o[e]=1,r[e];if(s!==se&&W(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&W(l,e))return o[e]=3,i[e];if(n!==se&&W(n,e))return o[e]=4,n[e];Js&&(o[e]=0)}}const u=Jr[e];let f,p;if(u)return e==="$attrs"&&De(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==se&&W(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,W(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==se&&W(s,e)?(s[e]=n,!0):r!==se&&W(r,e)?(r[e]=n,!0):W(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==se&&W(t,o)||e!==se&&W(e,o)||(a=i[0])&&W(a,o)||W(r,o)||W(Jr,o)||W(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:W(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Js=!0;function Nf(t){const e=Fi(t),n=t.proxy,r=t.ctx;Js=!1,e.beforeCreate&&Ao(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:g,updated:E,activated:L,deactivated:C,beforeDestroy:k,beforeUnmount:I,destroyed:P,unmounted:H,render:J,renderTracked:Y,renderTriggered:ue,errorCaptured:ge,serverPrefetch:le,expose:be,inheritAttrs:pe,components:Re,directives:ct,filters:Qe}=e;if(l&&Df(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ie in o){const te=o[ie];V(te)&&(r[ie]=te.bind(n))}if(s){const ie=s.call(n,n);ce(ie)&&(t.data=gr(ie))}if(Js=!0,i)for(const ie in i){const te=i[ie],ke=V(te)?te.bind(n,n):V(te.get)?te.get.bind(n,n):We,sn=!V(te)&&V(te.set)?te.set.bind(n):We,lt=Fe({get:ke,set:sn});Object.defineProperty(r,ie,{enumerable:!0,configurable:!0,get:()=>lt.value,set:Xe=>lt.value=Xe})}if(a)for(const ie in a)Cc(a[ie],r,n,ie);if(c){const ie=V(c)?c.call(n):c;Reflect.ownKeys(ie).forEach(te=>{Fr(te,ie[te])})}u&&Ao(u,t,"c");function he(ie,te){B(te)?te.forEach(ke=>ie(ke.bind(n))):te&&ie(te.bind(n))}if(he(wf,f),he(Ef,p),he(If,g),he(Tf,E),he(yf,L),he(vf,C),he(Cf,ge),he(kf,Y),he(Af,ue),he(Sf,I),he(kc,H),he(Rf,le),B(be))if(be.length){const ie=t.exposed||(t.exposed={});be.forEach(te=>{Object.defineProperty(ie,te,{get:()=>n[te],set:ke=>n[te]=ke})})}else t.exposed||(t.exposed={});J&&t.render===We&&(t.render=J),pe!=null&&(t.inheritAttrs=pe),Re&&(t.components=Re),ct&&(t.directives=ct)}function Df(t,e,n=We,r=!1){B(t)&&(t=Ys(t));for(const s in t){const i=t[s];let o;ce(i)?"default"in i?o=pt(i.from||s,i.default,!0):o=pt(i.from||s):o=pt(i),Ee(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Ao(t,e,n){Ke(B(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Cc(t,e,n,r){const s=r.includes(".")?Tc(n,r):()=>n[r];if(ve(t)){const i=e[t];V(i)&&Ur(s,i)}else if(V(t))Ur(s,t.bind(n));else if(ce(t))if(B(t))t.forEach(i=>Cc(i,e,n,r));else{const i=V(t.handler)?t.handler.bind(n):e[t.handler];V(i)&&Ur(s,i,t)}}function Fi(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Yr(c,l,o,!0)),Yr(c,e,o)),ce(e)&&i.set(e,c),c}function Yr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Yr(t,i,n,!0),s&&s.forEach(o=>Yr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=xf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const xf={data:ko,props:jt,emits:jt,methods:jt,computed:jt,beforeCreate:Te,created:Te,beforeMount:Te,mounted:Te,beforeUpdate:Te,updated:Te,beforeDestroy:Te,beforeUnmount:Te,destroyed:Te,unmounted:Te,activated:Te,deactivated:Te,errorCaptured:Te,serverPrefetch:Te,components:jt,directives:jt,watch:Lf,provide:ko,inject:Mf};function ko(t,e){return e?t?function(){return Se(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function Mf(t,e){return jt(Ys(t),Ys(e))}function Ys(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Te(t,e){return t?[...new Set([].concat(t,e))]:e}function jt(t,e){return t?Se(Se(Object.create(null),t),e):e}function Lf(t,e){if(!t)return e;if(!e)return t;const n=Se(Object.create(null),t);for(const r in e)n[r]=Te(t[r],e[r]);return n}function Ff(t,e,n,r=!1){const s={},i={};qr(i,gs,1),t.propsDefaults=Object.create(null),Pc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ku(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Uf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Q(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(ps(t.emitsOptions,p))continue;const g=e[p];if(c)if(W(i,p))g!==i[p]&&(i[p]=g,l=!0);else{const E=bn(p);s[E]=Qs(c,a,E,g,t,!1)}else g!==i[p]&&(i[p]=g,l=!0)}}}else{Pc(t,e,s,i)&&(l=!0);let u;for(const f in a)(!e||!W(e,f)&&((u=Pn(f))===f||!W(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Qs(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!W(e,f)&&!0)&&(delete i[f],l=!0)}l&&gt(t,"set","$attrs")}function Pc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Mr(c))continue;const l=e[c];let u;s&&W(s,u=bn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ps(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=Q(n),l=a||se;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Qs(s,c,f,l[f],t,!W(l,f))}}return o}function Qs(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=W(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&V(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Bt(s),r=l[n]=c.call(null,e),Mt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Pn(n))&&(r=!0))}return r}function Oc(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!V(t)){const u=f=>{c=!0;const[p,g]=Oc(f,e,!0);Se(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ce(t)&&r.set(t,dn),dn;if(B(i))for(let u=0;u<i.length;u++){const f=bn(i[u]);Co(f)&&(o[f]=se)}else if(i)for(const u in i){const f=bn(u);if(Co(f)){const p=i[u],g=o[f]=B(p)||V(p)?{type:p}:p;if(g){const E=No(Boolean,g.type),L=No(String,g.type);g[0]=E>-1,g[1]=L<0||E<L,(E>-1||W(g,"default"))&&a.push(f)}}}const l=[o,a];return ce(t)&&r.set(t,l),l}function Co(t){return t[0]!=="$"}function Po(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Oo(t,e){return Po(t)===Po(e)}function No(t,e){return B(e)?e.findIndex(n=>Oo(n,t)):V(e)&&Oo(e,t)?0:-1}const Nc=t=>t[0]==="_"||t==="$stable",Ui=t=>B(t)?t.map(je):[je(t)],Bf=(t,e,n)=>{if(e._n)return e;const r=qt((...s)=>Ui(e(...s)),n);return r._c=!1,r},Dc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Nc(s))continue;const i=t[s];if(V(i))e[s]=Bf(s,i,r);else if(i!=null){const o=Ui(i);e[s]=()=>o}}},xc=(t,e)=>{const n=Ui(e);t.slots.default=()=>n},$f=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Q(e),qr(e,"_",n)):Dc(e,t.slots={})}else t.slots={},e&&xc(t,e);qr(t.slots,gs,1)},Vf=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=se;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Se(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Dc(e,s)),o=e}else e&&(xc(t,e),o={default:1});if(i)for(const a in s)!Nc(a)&&!(a in o)&&delete s[a]};function Mc(){return{app:null,config:{isNativeTag:du,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jf=0;function Hf(t,e){return function(r,s=null){V(r)||(r=Object.assign({},r)),s!=null&&!ce(s)&&(s=null);const i=Mc(),o=new Set;let a=!1;const c=i.app={_uid:jf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:ch,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&V(l.install)?(o.add(l),l.install(c,...u)):V(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,f){if(!a){const p=fe(r,s);return p.appContext=i,u&&e?e(p,l):t(p,l,f),a=!0,c._container=l,l.__vue_app__=c,_s(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Xs(t,e,n,r,s=!1){if(B(t)){t.forEach((p,g)=>Xs(p,e&&(B(e)?e[g]:e),n,r,s));return}if(Br(r)&&!s)return;const i=r.shapeFlag&4?_s(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===se?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(ve(l)?(u[l]=null,W(f,l)&&(f[l]=null)):Ee(l)&&(l.value=null)),V(c))xt(c,a,12,[o,u]);else{const p=ve(c),g=Ee(c);if(p||g){const E=()=>{if(t.f){const L=p?u[c]:c.value;s?B(L)&&Ei(L,i):B(L)?L.includes(i)||L.push(i):p?(u[c]=[i],W(f,c)&&(f[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,W(f,c)&&(f[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(E.id=-1,Ae(E,n)):E()}}}const Ae=gf;function zf(t){return qf(t)}function qf(t,e){const n=vu();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:g=We,cloneNode:E,insertStaticContent:L}=t,C=(h,d,m,v=null,y=null,T=null,A=!1,w=null,S=!!d.dynamicChildren)=>{if(h===d)return;h&&!kt(h,d)&&(v=D(h),xe(h,y,T,!0),h=null),d.patchFlag===-2&&(S=!1,d.dynamicChildren=null);const{type:b,ref:x,shapeFlag:O}=d;switch(b){case Bi:k(h,d,m,v);break;case Qt:I(h,d,m,v);break;case Ps:h==null&&P(d,m,v,A);break;case Ve:ct(h,d,m,v,y,T,A,w,S);break;default:O&1?Y(h,d,m,v,y,T,A,w,S):O&6?Qe(h,d,m,v,y,T,A,w,S):(O&64||O&128)&&b.process(h,d,m,v,y,T,A,w,S,oe)}x!=null&&y&&Xs(x,h&&h.ref,T,d||h,!d)},k=(h,d,m,v)=>{if(h==null)r(d.el=a(d.children),m,v);else{const y=d.el=h.el;d.children!==h.children&&l(y,d.children)}},I=(h,d,m,v)=>{h==null?r(d.el=c(d.children||""),m,v):d.el=h.el},P=(h,d,m,v)=>{[h.el,h.anchor]=L(h.children,d,m,v,h.el,h.anchor)},H=({el:h,anchor:d},m,v)=>{let y;for(;h&&h!==d;)y=p(h),r(h,m,v),h=y;r(d,m,v)},J=({el:h,anchor:d})=>{let m;for(;h&&h!==d;)m=p(h),s(h),h=m;s(d)},Y=(h,d,m,v,y,T,A,w,S)=>{A=A||d.type==="svg",h==null?ue(d,m,v,y,T,A,w,S):be(h,d,y,T,A,w,S)},ue=(h,d,m,v,y,T,A,w)=>{let S,b;const{type:x,props:O,shapeFlag:M,transition:U,patchFlag:K,dirs:ne}=h;if(h.el&&E!==void 0&&K===-1)S=h.el=E(h.el);else{if(S=h.el=o(h.type,T,O&&O.is,O),M&8?u(S,h.children):M&16&&le(h.children,S,null,v,y,T&&x!=="foreignObject",A,w),ne&&$t(h,null,v,"created"),O){for(const ae in O)ae!=="value"&&!Mr(ae)&&i(S,ae,null,O[ae],T,h.children,v,y,R);"value"in O&&i(S,"value",null,O.value),(b=O.onVnodeBeforeMount)&&et(b,v,h)}ge(S,h,h.scopeId,A,v)}ne&&$t(h,null,v,"beforeMount");const re=(!y||y&&!y.pendingBranch)&&U&&!U.persisted;re&&U.beforeEnter(S),r(S,d,m),((b=O&&O.onVnodeMounted)||re||ne)&&Ae(()=>{b&&et(b,v,h),re&&U.enter(S),ne&&$t(h,null,v,"mounted")},y)},ge=(h,d,m,v,y)=>{if(m&&g(h,m),v)for(let T=0;T<v.length;T++)g(h,v[T]);if(y){let T=y.subTree;if(d===T){const A=y.vnode;ge(h,A,A.scopeId,A.slotScopeIds,y.parent)}}},le=(h,d,m,v,y,T,A,w,S=0)=>{for(let b=S;b<h.length;b++){const x=h[b]=w?St(h[b]):je(h[b]);C(null,x,d,m,v,y,T,A,w)}},be=(h,d,m,v,y,T,A)=>{const w=d.el=h.el;let{patchFlag:S,dynamicChildren:b,dirs:x}=d;S|=h.patchFlag&16;const O=h.props||se,M=d.props||se;let U;m&&Vt(m,!1),(U=M.onVnodeBeforeUpdate)&&et(U,m,d,h),x&&$t(d,h,m,"beforeUpdate"),m&&Vt(m,!0);const K=y&&d.type!=="foreignObject";if(b?pe(h.dynamicChildren,b,w,m,v,K,T):A||ke(h,d,w,null,m,v,K,T,!1),S>0){if(S&16)Re(w,d,O,M,m,v,y);else if(S&2&&O.class!==M.class&&i(w,"class",null,M.class,y),S&4&&i(w,"style",O.style,M.style,y),S&8){const ne=d.dynamicProps;for(let re=0;re<ne.length;re++){const ae=ne[re],$e=O[ae],on=M[ae];(on!==$e||ae==="value")&&i(w,ae,$e,on,y,h.children,m,v,R)}}S&1&&h.children!==d.children&&u(w,d.children)}else!A&&b==null&&Re(w,d,O,M,m,v,y);((U=M.onVnodeUpdated)||x)&&Ae(()=>{U&&et(U,m,d,h),x&&$t(d,h,m,"updated")},v)},pe=(h,d,m,v,y,T,A)=>{for(let w=0;w<d.length;w++){const S=h[w],b=d[w],x=S.el&&(S.type===Ve||!kt(S,b)||S.shapeFlag&70)?f(S.el):m;C(S,b,x,null,v,y,T,A,!0)}},Re=(h,d,m,v,y,T,A)=>{if(m!==v){for(const w in v){if(Mr(w))continue;const S=v[w],b=m[w];S!==b&&w!=="value"&&i(h,w,b,S,A,d.children,y,T,R)}if(m!==se)for(const w in m)!Mr(w)&&!(w in v)&&i(h,w,m[w],null,A,d.children,y,T,R);"value"in v&&i(h,"value",m.value,v.value)}},ct=(h,d,m,v,y,T,A,w,S)=>{const b=d.el=h?h.el:a(""),x=d.anchor=h?h.anchor:a("");let{patchFlag:O,dynamicChildren:M,slotScopeIds:U}=d;U&&(w=w?w.concat(U):U),h==null?(r(b,m,v),r(x,m,v),le(d.children,m,x,y,T,A,w,S)):O>0&&O&64&&M&&h.dynamicChildren?(pe(h.dynamicChildren,M,m,y,T,A,w),(d.key!=null||y&&d===y.subTree)&&Lc(h,d,!0)):ke(h,d,m,x,y,T,A,w,S)},Qe=(h,d,m,v,y,T,A,w,S)=>{d.slotScopeIds=w,h==null?d.shapeFlag&512?y.ctx.activate(d,m,v,A,S):rn(d,m,v,y,T,A,S):he(h,d,S)},rn=(h,d,m,v,y,T,A)=>{const w=h.component=eh(h,v,y);if(Rc(h)&&(w.ctx.renderer=oe),nh(w),w.asyncDep){if(y&&y.registerDep(w,ie),!h.el){const S=w.subTree=fe(Qt);I(null,S,d,m)}return}ie(w,h,d,m,y,T,A)},he=(h,d,m)=>{const v=d.component=h.component;if(cf(h,d,m))if(v.asyncDep&&!v.asyncResolved){te(v,d,m);return}else v.next=d,tf(v.update),v.update();else d.el=h.el,v.vnode=d},ie=(h,d,m,v,y,T,A)=>{const w=()=>{if(h.isMounted){let{next:x,bu:O,u:M,parent:U,vnode:K}=h,ne=x,re;Vt(h,!1),x?(x.el=K.el,te(h,x,A)):x=K,O&&Lr(O),(re=x.props&&x.props.onVnodeBeforeUpdate)&&et(re,U,x,K),Vt(h,!0);const ae=Cs(h),$e=h.subTree;h.subTree=ae,C($e,ae,f($e.el),D($e),h,y,T),x.el=ae.el,ne===null&&Mi(h,ae.el),M&&Ae(M,y),(re=x.props&&x.props.onVnodeUpdated)&&Ae(()=>et(re,U,x,K),y)}else{let x;const{el:O,props:M}=d,{bm:U,m:K,parent:ne}=h,re=Br(d);if(Vt(h,!1),U&&Lr(U),!re&&(x=M&&M.onVnodeBeforeMount)&&et(x,ne,d),Vt(h,!0),O&&$){const ae=()=>{h.subTree=Cs(h),$(O,h.subTree,h,y,null)};re?d.type.__asyncLoader().then(()=>!h.isUnmounted&&ae()):ae()}else{const ae=h.subTree=Cs(h);C(null,ae,m,v,h,y,T),d.el=ae.el}if(K&&Ae(K,y),!re&&(x=M&&M.onVnodeMounted)){const ae=d;Ae(()=>et(x,ne,ae),y)}(d.shapeFlag&256||ne&&Br(ne.vnode)&&ne.vnode.shapeFlag&256)&&h.a&&Ae(h.a,y),h.isMounted=!0,d=m=v=null}},S=h.effect=new Ai(w,()=>xi(b),h.scope),b=h.update=()=>S.run();b.id=h.uid,Vt(h,!0),b()},te=(h,d,m)=>{d.component=h;const v=h.vnode.props;h.vnode=d,h.next=null,Uf(h,d.props,v,m),Vf(h,d.children,m),On(),Io(),Nn()},ke=(h,d,m,v,y,T,A,w,S=!1)=>{const b=h&&h.children,x=h?h.shapeFlag:0,O=d.children,{patchFlag:M,shapeFlag:U}=d;if(M>0){if(M&128){lt(b,O,m,v,y,T,A,w,S);return}else if(M&256){sn(b,O,m,v,y,T,A,w,S);return}}U&8?(x&16&&R(b,y,T),O!==b&&u(m,O)):x&16?U&16?lt(b,O,m,v,y,T,A,w,S):R(b,y,T,!0):(x&8&&u(m,""),U&16&&le(O,m,v,y,T,A,w,S))},sn=(h,d,m,v,y,T,A,w,S)=>{h=h||dn,d=d||dn;const b=h.length,x=d.length,O=Math.min(b,x);let M;for(M=0;M<O;M++){const U=d[M]=S?St(d[M]):je(d[M]);C(h[M],U,m,null,y,T,A,w,S)}b>x?R(h,y,T,!0,!1,O):le(d,m,v,y,T,A,w,S,O)},lt=(h,d,m,v,y,T,A,w,S)=>{let b=0;const x=d.length;let O=h.length-1,M=x-1;for(;b<=O&&b<=M;){const U=h[b],K=d[b]=S?St(d[b]):je(d[b]);if(kt(U,K))C(U,K,m,null,y,T,A,w,S);else break;b++}for(;b<=O&&b<=M;){const U=h[O],K=d[M]=S?St(d[M]):je(d[M]);if(kt(U,K))C(U,K,m,null,y,T,A,w,S);else break;O--,M--}if(b>O){if(b<=M){const U=M+1,K=U<x?d[U].el:v;for(;b<=M;)C(null,d[b]=S?St(d[b]):je(d[b]),m,K,y,T,A,w,S),b++}}else if(b>M)for(;b<=O;)xe(h[b],y,T,!0),b++;else{const U=b,K=b,ne=new Map;for(b=K;b<=M;b++){const Ce=d[b]=S?St(d[b]):je(d[b]);Ce.key!=null&&ne.set(Ce.key,b)}let re,ae=0;const $e=M-K+1;let on=!1,uo=0;const Un=new Array($e);for(b=0;b<$e;b++)Un[b]=0;for(b=U;b<=O;b++){const Ce=h[b];if(ae>=$e){xe(Ce,y,T,!0);continue}let Ze;if(Ce.key!=null)Ze=ne.get(Ce.key);else for(re=K;re<=M;re++)if(Un[re-K]===0&&kt(Ce,d[re])){Ze=re;break}Ze===void 0?xe(Ce,y,T,!0):(Un[Ze-K]=b+1,Ze>=uo?uo=Ze:on=!0,C(Ce,d[Ze],m,null,y,T,A,w,S),ae++)}const fo=on?Wf(Un):dn;for(re=fo.length-1,b=$e-1;b>=0;b--){const Ce=K+b,Ze=d[Ce],ho=Ce+1<x?d[Ce+1].el:v;Un[b]===0?C(null,Ze,m,ho,y,T,A,w,S):on&&(re<0||b!==fo[re]?Xe(Ze,m,ho,2):re--)}}},Xe=(h,d,m,v,y=null)=>{const{el:T,type:A,transition:w,children:S,shapeFlag:b}=h;if(b&6){Xe(h.component.subTree,d,m,v);return}if(b&128){h.suspense.move(d,m,v);return}if(b&64){A.move(h,d,m,oe);return}if(A===Ve){r(T,d,m);for(let O=0;O<S.length;O++)Xe(S[O],d,m,v);r(h.anchor,d,m);return}if(A===Ps){H(h,d,m);return}if(v!==2&&b&1&&w)if(v===0)w.beforeEnter(T),r(T,d,m),Ae(()=>w.enter(T),y);else{const{leave:O,delayLeave:M,afterLeave:U}=w,K=()=>r(T,d,m),ne=()=>{O(T,()=>{K(),U&&U()})};M?M(T,K,ne):ne()}else r(T,d,m)},xe=(h,d,m,v=!1,y=!1)=>{const{type:T,props:A,ref:w,children:S,dynamicChildren:b,shapeFlag:x,patchFlag:O,dirs:M}=h;if(w!=null&&Xs(w,null,m,h,!0),x&256){d.ctx.deactivate(h);return}const U=x&1&&M,K=!Br(h);let ne;if(K&&(ne=A&&A.onVnodeBeforeUnmount)&&et(ne,d,h),x&6)N(h.component,m,v);else{if(x&128){h.suspense.unmount(m,v);return}U&&$t(h,null,d,"beforeUnmount"),x&64?h.type.remove(h,d,m,y,oe,v):b&&(T!==Ve||O>0&&O&64)?R(b,d,m,!1,!0):(T===Ve&&O&384||!y&&x&16)&&R(S,d,m),v&&Fn(h)}(K&&(ne=A&&A.onVnodeUnmounted)||U)&&Ae(()=>{ne&&et(ne,d,h),U&&$t(h,null,d,"unmounted")},m)},Fn=h=>{const{type:d,el:m,anchor:v,transition:y}=h;if(d===Ve){_(m,v);return}if(d===Ps){J(h);return}const T=()=>{s(m),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(h.shapeFlag&1&&y&&!y.persisted){const{leave:A,delayLeave:w}=y,S=()=>A(m,T);w?w(h.el,T,S):S()}else T()},_=(h,d)=>{let m;for(;h!==d;)m=p(h),s(h),h=m;s(d)},N=(h,d,m)=>{const{bum:v,scope:y,update:T,subTree:A,um:w}=h;v&&Lr(v),y.stop(),T&&(T.active=!1,xe(A,h,d,m)),w&&Ae(w,d),Ae(()=>{h.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},R=(h,d,m,v=!1,y=!1,T=0)=>{for(let A=T;A<h.length;A++)xe(h[A],d,m,v,y)},D=h=>h.shapeFlag&6?D(h.component.subTree):h.shapeFlag&128?h.suspense.next():p(h.anchor||h.el),X=(h,d,m)=>{h==null?d._vnode&&xe(d._vnode,null,null,!0):C(d._vnode||null,h,d,null,null,null,m),Io(),vc(),d._vnode=h},oe={p:C,um:xe,m:Xe,r:Fn,mt:rn,mc:le,pc:ke,pbc:pe,n:D,o:t};let z,$;return e&&([z,$]=e(oe)),{render:X,hydrate:z,createApp:Hf(X,z)}}function Vt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Lc(t,e,n=!1){const r=t.children,s=e.children;if(B(r)&&B(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=St(s[i]),a.el=o.el),n||Lc(o,a))}}function Wf(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Kf=t=>t.__isTeleport,Ve=Symbol(void 0),Bi=Symbol(void 0),Qt=Symbol(void 0),Ps=Symbol(void 0),zn=[];let Ue=null;function Jt(t=!1){zn.push(Ue=t?null:[])}function Fc(){zn.pop(),Ue=zn[zn.length-1]||null}let En=1;function Do(t){En+=t}function Uc(t){return t.dynamicChildren=En>0?Ue||dn:null,Fc(),En>0&&Ue&&Ue.push(t),t}function qn(t,e,n,r,s,i){return Uc(st(t,e,n,r,s,i,!0))}function Gf(t,e,n,r,s){return Uc(fe(t,e,n,r,s,!0))}function Qr(t){return t?t.__v_isVNode===!0:!1}function kt(t,e){return t.type===e.type&&t.key===e.key}const gs="__vInternal",Bc=({key:t})=>t!=null?t:null,$r=({ref:t,ref_key:e,ref_for:n})=>t!=null?ve(t)||Ee(t)||V(t)?{i:qe,r:t,k:e,f:!!n}:t:null;function st(t,e=null,n=null,r=0,s=null,i=t===Ve?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Bc(e),ref:e&&$r(e),scopeId:Ec,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?($i(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ve(n)?8:16),En>0&&!o&&Ue&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ue.push(c),c}const fe=Jf;function Jf(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Pf)&&(t=Qt),Qr(t)){const a=In(t,e,!0);return n&&$i(a,n),En>0&&!i&&Ue&&(a.shapeFlag&6?Ue[Ue.indexOf(t)]=a:Ue.push(a)),a.patchFlag|=-2,a}if(oh(t)&&(t=t.__vccOpts),e){e=Yf(e);let{class:a,style:c}=e;a&&!ve(a)&&(e.class=bi(a)),ce(c)&&(cc(c)&&!B(c)&&(c=Se({},c)),e.style=vi(c))}const o=ve(t)?1:lf(t)?128:Kf(t)?64:ce(t)?4:V(t)?2:0;return st(t,e,n,r,s,o,i,!0)}function Yf(t){return t?cc(t)||gs in t?Se({},t):t:null}function In(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Qf(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Bc(a),ref:e&&e.ref?n&&s?B(s)?s.concat($r(e)):[s,$r(e)]:$r(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ve?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&In(t.ssContent),ssFallback:t.ssFallback&&In(t.ssFallback),el:t.el,anchor:t.anchor}}function Dn(t=" ",e=0){return fe(Bi,null,t,e)}function je(t){return t==null||typeof t=="boolean"?fe(Qt):B(t)?fe(Ve,null,t.slice()):typeof t=="object"?St(t):fe(Bi,null,String(t))}function St(t){return t.el===null||t.memo?t:In(t)}function $i(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),$i(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(gs in e)?e._ctx=qe:s===3&&qe&&(qe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:qe},n=32):(e=String(e),r&64?(n=16,e=[Dn(e)]):n=8);t.children=e,t.shapeFlag|=n}function Qf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=bi([e.class,r.class]));else if(s==="style")e.style=vi([e.style,r.style]);else if(us(s)){const i=e[s],o=r[s];o&&i!==o&&!(B(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function et(t,e,n,r=null){Ke(t,e,7,[n,r])}const Xf=Mc();let Zf=0;function eh(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Xf,i={uid:Zf++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new bu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Oc(r,s),emitsOptions:wc(r,s),emit:null,emitted:null,propsDefaults:se,inheritAttrs:r.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=rf.bind(null,i),t.ce&&t.ce(i),i}let ye=null;const th=()=>ye||qe,Bt=t=>{ye=t,t.scope.on()},Mt=()=>{ye&&ye.scope.off(),ye=null};function $c(t){return t.vnode.shapeFlag&4}let ir=!1;function nh(t,e=!1){ir=e;const{props:n,children:r}=t.vnode,s=$c(t);Ff(t,n,s,e),$f(t,r);const i=s?rh(t,e):void 0;return ir=!1,i}function rh(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=lc(new Proxy(t.ctx,Of));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?ih(t):null;Bt(t),On();const i=xt(r,t,0,[t.props,s]);if(Nn(),Mt(),Ti(i)){if(i.then(Mt,Mt),e)return i.then(o=>{Zs(t,o,e)}).catch(o=>{_r(o,t,0)});t.asyncDep=i}else Zs(t,i,e)}else Vc(t,e)}function Zs(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ce(e)&&(t.setupState=dc(e)),Vc(t,n)}let xo;function Vc(t,e,n){const r=t.type;if(!t.render){if(!e&&xo&&!r.render){const s=r.template||Fi(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Se(Se({isCustomElement:i,delimiters:a},o),c);r.render=xo(s,l)}}t.render=r.render||We}Bt(t),On(),Nf(t),Nn(),Mt()}function sh(t){return new Proxy(t.attrs,{get(e,n){return De(t,"get","$attrs"),e[n]}})}function ih(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=sh(t))},slots:t.slots,emit:t.emit,expose:e}}function _s(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(dc(lc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Jr)return Jr[n](t)}}))}function oh(t){return V(t)&&"__vccOpts"in t}const Fe=(t,e)=>Xu(t,e,ir);function ah(t){const e=th();let n=t();return Mt(),Ti(n)&&(n=n.catch(r=>{throw Bt(e),r})),[n,()=>Bt(e)]}function jc(t,e,n){const r=arguments.length;return r===2?ce(e)&&!B(e)?Qr(e)?fe(t,null,[e]):fe(t,e):fe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Qr(n)&&(n=[n]),fe(t,e,n))}const ch="3.2.39",lh="http://www.w3.org/2000/svg",Wt=typeof document<"u"?document:null,Mo=Wt&&Wt.createElement("template"),uh={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Wt.createElementNS(lh,t):Wt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Wt.createTextNode(t),createComment:t=>Wt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Wt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Mo.innerHTML=r?`<svg>${t}</svg>`:t;const a=Mo.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function fh(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function hh(t,e,n){const r=t.style,s=ve(n);if(n&&!s){for(const i in n)ei(r,i,n[i]);if(e&&!ve(e))for(const i in e)n[i]==null&&ei(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Lo=/\s*!important$/;function ei(t,e,n){if(B(n))n.forEach(r=>ei(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=dh(t,e);Lo.test(n)?t.setProperty(Pn(r),n.replace(Lo,""),"important"):t[r]=n}}const Fo=["Webkit","Moz","ms"],Os={};function dh(t,e){const n=Os[e];if(n)return n;let r=bn(e);if(r!=="filter"&&r in t)return Os[e]=r;r=Ya(r);for(let s=0;s<Fo.length;s++){const i=Fo[s]+r;if(i in t)return Os[e]=i}return e}const Uo="http://www.w3.org/1999/xlink";function ph(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Uo,e.slice(6,e.length)):t.setAttributeNS(Uo,e,n);else{const i=lu(e);n==null||i&&!qa(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function mh(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=qa(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Hc,gh]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let ti=0;const _h=Promise.resolve(),yh=()=>{ti=0},vh=()=>ti||(_h.then(yh),ti=Hc());function ln(t,e,n,r){t.addEventListener(e,n,r)}function bh(t,e,n,r){t.removeEventListener(e,n,r)}function wh(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Eh(e);if(r){const l=i[e]=Ih(r,s);ln(t,a,l,c)}else o&&(bh(t,a,o,c),i[e]=void 0)}}const Bo=/(?:Once|Passive|Capture)$/;function Eh(t){let e;if(Bo.test(t)){e={};let r;for(;r=t.match(Bo);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Pn(t.slice(2)),e]}function Ih(t,e){const n=r=>{const s=r.timeStamp||Hc();(gh||s>=n.attached-1)&&Ke(Th(r,n.value),e,5,[r])};return n.value=t,n.attached=vh(),n}function Th(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const $o=/^on[a-z]/,Sh=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?fh(t,r,s):e==="style"?hh(t,n,r):us(e)?wi(e)||wh(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Rh(t,e,r,s))?mh(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ph(t,e,r,s))};function Rh(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&$o.test(e)&&V(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||$o.test(e)&&ve(n)?!1:e in t}const Vo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return B(e)?n=>Lr(e,n):e};function Ah(t){t.target.composing=!0}function jo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Uy={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Vo(s);const i=r||s.props&&s.props.type==="number";ln(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Wr(a)),t._assign(a)}),n&&ln(t,"change",()=>{t.value=t.value.trim()}),e||(ln(t,"compositionstart",Ah),ln(t,"compositionend",jo),ln(t,"change",jo))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Vo(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Wr(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},kh=Se({patchProp:Sh},uh);let Ho;function Ch(){return Ho||(Ho=zf(kh))}const Ph=(...t)=>{const e=Ch().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Oh(r);if(!s)return;const i=e._component;!V(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Oh(t){return ve(t)?document.querySelector(t):t}/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const un=typeof window<"u";function Nh(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Z=Object.assign;function Ns(t,e){const n={};for(const r in e){const s=e[r];n[r]=Je(s)?s.map(t):t(s)}return n}const Wn=()=>{},Je=Array.isArray,Dh=/\/$/,xh=t=>t.replace(Dh,"");function Ds(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Uh(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Mh(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function zo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Lh(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Tn(e.matched[r],n.matched[s])&&zc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Tn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function zc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Fh(t[n],e[n]))return!1;return!0}function Fh(t,e){return Je(t)?qo(t,e):Je(e)?qo(e,t):t===e}function qo(t,e){return Je(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Uh(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var or;(function(t){t.pop="pop",t.push="push"})(or||(or={}));var Kn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Kn||(Kn={}));function Bh(t){if(!t)if(un){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),xh(t)}const $h=/^[^#]+#/;function Vh(t,e){return t.replace($h,"#")+e}function jh(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ys=()=>({left:window.pageXOffset,top:window.pageYOffset});function Hh(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=jh(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Wo(t,e){return(history.state?history.state.position-e:-1)+t}const ni=new Map;function zh(t,e){ni.set(t,e)}function qh(t){const e=ni.get(t);return ni.delete(t),e}let Wh=()=>location.protocol+"//"+location.host;function qc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),zo(c,"")}return zo(n,t)+r+s}function Kh(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const g=qc(t,location),E=n.value,L=e.value;let C=0;if(p){if(n.value=g,e.value=p,o&&o===E){o=null;return}C=L?p.position-L.position:0}else r(g);s.forEach(k=>{k(n.value,E,{delta:C,type:or.pop,direction:C?C>0?Kn.forward:Kn.back:Kn.unknown})})};function c(){o=n.value}function l(p){s.push(p);const g=()=>{const E=s.indexOf(p);E>-1&&s.splice(E,1)};return i.push(g),g}function u(){const{history:p}=window;!p.state||p.replaceState(Z({},p.state,{scroll:ys()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:f}}function Ko(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ys():null}}function Gh(t){const{history:e,location:n}=window,r={value:qc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:Wh()+t+c;try{e[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](p)}}function o(c,l){const u=Z({},e.state,Ko(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=Z({},s.value,e.state,{forward:c,scroll:ys()});i(u.current,u,!0);const f=Z({},Ko(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Jh(t){t=Bh(t);const e=Gh(t),n=Kh(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Z({location:"",base:t,go:r,createHref:Vh.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Yh(t){return typeof t=="string"||t&&typeof t=="object"}function Wc(t){return typeof t=="string"||typeof t=="symbol"}const It={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Kc=Symbol("");var Go;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Go||(Go={}));function Sn(t,e){return Z(new Error,{type:t,[Kc]:!0},e)}function ut(t,e){return t instanceof Error&&Kc in t&&(e==null||!!(t.type&e))}const Jo="[^/]+?",Qh={sensitive:!1,strict:!1,start:!0,end:!0},Xh=/[.+*?^${}()[\]/\\]/g;function Zh(t,e){const n=Z({},Qh,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const p=l[f];let g=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace(Xh,"\\$&"),g+=40;else if(p.type===1){const{value:E,repeatable:L,optional:C,regexp:k}=p;i.push({name:E,repeatable:L,optional:C});const I=k||Jo;if(I!==Jo){g+=10;try{new RegExp(`(${I})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${E}" (${I}): `+H.message)}}let P=L?`((?:${I})(?:/(?:${I}))*)`:`(${I})`;f||(P=C&&l.length<2?`(?:/${P})`:"/"+P),C&&(P+="?"),s+=P,g+=20,C&&(g+=-8),L&&(g+=-20),I===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let p=1;p<u.length;p++){const g=u[p]||"",E=i[p-1];f[E.name]=g&&E.repeatable?g.split("/"):g}return f}function c(l){let u="",f=!1;for(const p of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of p)if(g.type===0)u+=g.value;else if(g.type===1){const{value:E,repeatable:L,optional:C}=g,k=E in l?l[E]:"";if(Je(k)&&!L)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const I=Je(k)?k.join("/"):k;if(!I)if(C)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${E}"`);u+=I}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function ed(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function td(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=ed(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Yo(r))return 1;if(Yo(s))return-1}return s.length-r.length}function Yo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const nd={type:0,value:""},rd=/[a-zA-Z0-9_]/;function sd(t){if(!t)return[[]];if(t==="/")return[[nd]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:rd.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function id(t,e,n){const r=Zh(sd(t.path),n),s=Z(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function od(t,e){const n=[],r=new Map;e=Zo({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,f,p){const g=!p,E=ad(u);E.aliasOf=p&&p.record;const L=Zo(e,u),C=[E];if("alias"in u){const P=typeof u.alias=="string"?[u.alias]:u.alias;for(const H of P)C.push(Z({},E,{components:p?p.record.components:E.components,path:H,aliasOf:p?p.record:E}))}let k,I;for(const P of C){const{path:H}=P;if(f&&H[0]!=="/"){const J=f.record.path,Y=J[J.length-1]==="/"?"":"/";P.path=f.record.path+(H&&Y+H)}if(k=id(P,f,L),p?p.alias.push(k):(I=I||k,I!==k&&I.alias.push(k),g&&u.name&&!Xo(k)&&o(u.name)),E.children){const J=E.children;for(let Y=0;Y<J.length;Y++)i(J[Y],k,p&&p.children[Y])}p=p||k,c(k)}return I?()=>{o(I)}:Wn}function o(u){if(Wc(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let f=0;for(;f<n.length&&td(u,n[f])>=0&&(u.record.path!==n[f].record.path||!Gc(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Xo(u)&&r.set(u.record.name,u)}function l(u,f){let p,g={},E,L;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw Sn(1,{location:u});L=p.record.name,g=Z(Qo(f.params,p.keys.filter(I=>!I.optional).map(I=>I.name)),u.params&&Qo(u.params,p.keys.map(I=>I.name))),E=p.stringify(g)}else if("path"in u)E=u.path,p=n.find(I=>I.re.test(E)),p&&(g=p.parse(E),L=p.record.name);else{if(p=f.name?r.get(f.name):n.find(I=>I.re.test(f.path)),!p)throw Sn(1,{location:u,currentLocation:f});L=p.record.name,g=Z({},f.params,u.params),E=p.stringify(g)}const C=[];let k=p;for(;k;)C.unshift(k.record),k=k.parent;return{name:L,path:E,params:g,matched:C,meta:ld(C)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Qo(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ad(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:cd(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function cd(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Xo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ld(t){return t.reduce((e,n)=>Z(e,n.meta),{})}function Zo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Gc(t,e){return e.children.some(n=>n===t||Gc(t,n))}const Jc=/#/g,ud=/&/g,fd=/\//g,hd=/=/g,dd=/\?/g,Yc=/\+/g,pd=/%5B/g,md=/%5D/g,Qc=/%5E/g,gd=/%60/g,Xc=/%7B/g,_d=/%7C/g,Zc=/%7D/g,yd=/%20/g;function Vi(t){return encodeURI(""+t).replace(_d,"|").replace(pd,"[").replace(md,"]")}function vd(t){return Vi(t).replace(Xc,"{").replace(Zc,"}").replace(Qc,"^")}function ri(t){return Vi(t).replace(Yc,"%2B").replace(yd,"+").replace(Jc,"%23").replace(ud,"%26").replace(gd,"`").replace(Xc,"{").replace(Zc,"}").replace(Qc,"^")}function bd(t){return ri(t).replace(hd,"%3D")}function wd(t){return Vi(t).replace(Jc,"%23").replace(dd,"%3F")}function Ed(t){return t==null?"":wd(t).replace(fd,"%2F")}function Xr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Id(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Yc," "),o=i.indexOf("="),a=Xr(o<0?i:i.slice(0,o)),c=o<0?null:Xr(i.slice(o+1));if(a in e){let l=e[a];Je(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function ea(t){let e="";for(let n in t){const r=t[n];if(n=bd(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Je(r)?r.map(i=>i&&ri(i)):[r&&ri(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Td(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Je(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Sd=Symbol(""),ta=Symbol(""),vs=Symbol(""),el=Symbol(""),si=Symbol("");function Bn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Rt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(Sn(4,{from:n,to:e})):f instanceof Error?a(f):Yh(f)?a(Sn(2,{from:e,to:f})):(i&&r.enterCallbacks[s]===i&&typeof f=="function"&&i.push(f),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(f=>a(f))})}function xs(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Rd(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Rt(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Nh(l)?l.default:l;i.components[o]=u;const p=(u.__vccOpts||u)[e];return p&&Rt(p,n,r,i,o)()}))}}return s}function Rd(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function na(t){const e=pt(vs),n=pt(el),r=Fe(()=>e.resolve(Le(t.to))),s=Fe(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(Tn.bind(null,u));if(p>-1)return p;const g=ra(c[l-2]);return l>1&&ra(u)===g&&f[f.length-1].path!==g?f.findIndex(Tn.bind(null,c[l-2])):p}),i=Fe(()=>s.value>-1&&Cd(n.params,r.value.params)),o=Fe(()=>s.value>-1&&s.value===n.matched.length-1&&zc(n.params,r.value.params));function a(c={}){return kd(c)?e[Le(t.replace)?"replace":"push"](Le(t.to)).catch(Wn):Promise.resolve()}return{route:r,href:Fe(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Ad=Sc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:na,setup(t,{slots:e}){const n=gr(na(t)),{options:r}=pt(vs),s=Fe(()=>({[sa(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[sa(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:jc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),fn=Ad;function kd(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Cd(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Je(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function ra(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const sa=(t,e,n)=>t!=null?t:e!=null?e:n,Pd=Sc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=pt(si),s=Fe(()=>t.route||r.value),i=pt(ta,0),o=Fe(()=>{let l=Le(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Fe(()=>s.value.matched[o.value]);Fr(ta,Fe(()=>o.value+1)),Fr(Sd,a),Fr(si,s);const c=Hn();return Ur(()=>[c.value,a.value,t.name],([l,u,f],[p,g,E])=>{u&&(u.instances[f]=l,g&&g!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Tn(u,g)||!p)&&(u.enterCallbacks[f]||[]).forEach(L=>L(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,f=a.value,p=f&&f.components[u];if(!p)return ia(n.default,{Component:p,route:l});const g=f.props[u],E=g?g===!0?l.params:typeof g=="function"?g(l):g:null,C=jc(p,Z({},E,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return ia(n.default,{Component:C,route:l})||C}}});function ia(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const tl=Pd;function Od(t){const e=od(t.routes,t),n=t.parseQuery||Id,r=t.stringifyQuery||ea,s=t.history,i=Bn(),o=Bn(),a=Bn(),c=Gu(It);let l=It;un&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ns.bind(null,_=>""+_),f=Ns.bind(null,Ed),p=Ns.bind(null,Xr);function g(_,N){let R,D;return Wc(_)?(R=e.getRecordMatcher(_),D=N):D=_,e.addRoute(D,R)}function E(_){const N=e.getRecordMatcher(_);N&&e.removeRoute(N)}function L(){return e.getRoutes().map(_=>_.record)}function C(_){return!!e.getRecordMatcher(_)}function k(_,N){if(N=Z({},N||c.value),typeof _=="string"){const $=Ds(n,_,N.path),h=e.resolve({path:$.path},N),d=s.createHref($.fullPath);return Z($,h,{params:p(h.params),hash:Xr($.hash),redirectedFrom:void 0,href:d})}let R;if("path"in _)R=Z({},_,{path:Ds(n,_.path,N.path).path});else{const $=Z({},_.params);for(const h in $)$[h]==null&&delete $[h];R=Z({},_,{params:f(_.params)}),N.params=f(N.params)}const D=e.resolve(R,N),X=_.hash||"";D.params=u(p(D.params));const oe=Mh(r,Z({},_,{hash:vd(X),path:D.path})),z=s.createHref(oe);return Z({fullPath:oe,hash:X,query:r===ea?Td(_.query):_.query||{}},D,{redirectedFrom:void 0,href:z})}function I(_){return typeof _=="string"?Ds(n,_,c.value.path):Z({},_)}function P(_,N){if(l!==_)return Sn(8,{from:N,to:_})}function H(_){return ue(_)}function J(_){return H(Z(I(_),{replace:!0}))}function Y(_){const N=_.matched[_.matched.length-1];if(N&&N.redirect){const{redirect:R}=N;let D=typeof R=="function"?R(_):R;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=I(D):{path:D},D.params={}),Z({query:_.query,hash:_.hash,params:"path"in D?{}:_.params},D)}}function ue(_,N){const R=l=k(_),D=c.value,X=_.state,oe=_.force,z=_.replace===!0,$=Y(R);if($)return ue(Z(I($),{state:typeof $=="object"?Z({},X,$.state):X,force:oe,replace:z}),N||R);const h=R;h.redirectedFrom=N;let d;return!oe&&Lh(r,D,R)&&(d=Sn(16,{to:h,from:D}),sn(D,D,!0,!1)),(d?Promise.resolve(d):le(h,D)).catch(m=>ut(m)?ut(m,2)?m:ke(m):ie(m,h,D)).then(m=>{if(m){if(ut(m,2))return ue(Z({replace:z},I(m.to),{state:typeof m.to=="object"?Z({},X,m.to.state):X,force:oe}),N||h)}else m=pe(h,D,!0,z,X);return be(h,D,m),m})}function ge(_,N){const R=P(_,N);return R?Promise.reject(R):Promise.resolve()}function le(_,N){let R;const[D,X,oe]=Nd(_,N);R=xs(D.reverse(),"beforeRouteLeave",_,N);for(const $ of D)$.leaveGuards.forEach(h=>{R.push(Rt(h,_,N))});const z=ge.bind(null,_,N);return R.push(z),an(R).then(()=>{R=[];for(const $ of i.list())R.push(Rt($,_,N));return R.push(z),an(R)}).then(()=>{R=xs(X,"beforeRouteUpdate",_,N);for(const $ of X)$.updateGuards.forEach(h=>{R.push(Rt(h,_,N))});return R.push(z),an(R)}).then(()=>{R=[];for(const $ of _.matched)if($.beforeEnter&&!N.matched.includes($))if(Je($.beforeEnter))for(const h of $.beforeEnter)R.push(Rt(h,_,N));else R.push(Rt($.beforeEnter,_,N));return R.push(z),an(R)}).then(()=>(_.matched.forEach($=>$.enterCallbacks={}),R=xs(oe,"beforeRouteEnter",_,N),R.push(z),an(R))).then(()=>{R=[];for(const $ of o.list())R.push(Rt($,_,N));return R.push(z),an(R)}).catch($=>ut($,8)?$:Promise.reject($))}function be(_,N,R){for(const D of a.list())D(_,N,R)}function pe(_,N,R,D,X){const oe=P(_,N);if(oe)return oe;const z=N===It,$=un?history.state:{};R&&(D||z?s.replace(_.fullPath,Z({scroll:z&&$&&$.scroll},X)):s.push(_.fullPath,X)),c.value=_,sn(_,N,R,z),ke()}let Re;function ct(){Re||(Re=s.listen((_,N,R)=>{if(!Fn.listening)return;const D=k(_),X=Y(D);if(X){ue(Z(X,{replace:!0}),D).catch(Wn);return}l=D;const oe=c.value;un&&zh(Wo(oe.fullPath,R.delta),ys()),le(D,oe).catch(z=>ut(z,12)?z:ut(z,2)?(ue(z.to,D).then($=>{ut($,20)&&!R.delta&&R.type===or.pop&&s.go(-1,!1)}).catch(Wn),Promise.reject()):(R.delta&&s.go(-R.delta,!1),ie(z,D,oe))).then(z=>{z=z||pe(D,oe,!1),z&&(R.delta&&!ut(z,8)?s.go(-R.delta,!1):R.type===or.pop&&ut(z,20)&&s.go(-1,!1)),be(D,oe,z)}).catch(Wn)}))}let Qe=Bn(),rn=Bn(),he;function ie(_,N,R){ke(_);const D=rn.list();return D.length?D.forEach(X=>X(_,N,R)):console.error(_),Promise.reject(_)}function te(){return he&&c.value!==It?Promise.resolve():new Promise((_,N)=>{Qe.add([_,N])})}function ke(_){return he||(he=!_,ct(),Qe.list().forEach(([N,R])=>_?R(_):N()),Qe.reset()),_}function sn(_,N,R,D){const{scrollBehavior:X}=t;if(!un||!X)return Promise.resolve();const oe=!R&&qh(Wo(_.fullPath,0))||(D||!R)&&history.state&&history.state.scroll||null;return gc().then(()=>X(_,N,oe)).then(z=>z&&Hh(z)).catch(z=>ie(z,_,N))}const lt=_=>s.go(_);let Xe;const xe=new Set,Fn={currentRoute:c,listening:!0,addRoute:g,removeRoute:E,hasRoute:C,getRoutes:L,resolve:k,options:t,push:H,replace:J,go:lt,back:()=>lt(-1),forward:()=>lt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:rn.add,isReady:te,install(_){const N=this;_.component("RouterLink",fn),_.component("RouterView",tl),_.config.globalProperties.$router=N,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Le(c)}),un&&!Xe&&c.value===It&&(Xe=!0,H(s.location).catch(X=>{}));const R={};for(const X in It)R[X]=Fe(()=>c.value[X]);_.provide(vs,N),_.provide(el,gr(R)),_.provide(si,c);const D=_.unmount;xe.add(_),_.unmount=function(){xe.delete(_),xe.size<1&&(l=It,Re&&Re(),Re=null,c.value=It,Xe=!1,he=!1),D()}}};return Fn}function an(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Nd(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Tn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Tn(l,c))||s.push(c))}return[n,r,s]}function Dd(){return pt(vs)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},xd=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},rl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(p=64)),r.push(n[u],n[f],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(nl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw Error();const p=i<<2|a>>4;if(r.push(p),l!==64){const g=a<<4&240|l>>2;if(r.push(g),f!==64){const E=l<<6&192|f;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Md=function(t){const e=nl(t);return rl.encodeByteArray(e,!0)},sl=function(t){return Md(t).replace(/\./g,"")},Ld=function(t){try{return rl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ud(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function Bd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $d(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vd(){const t=Ie();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jd(){return typeof indexedDB=="object"}function Hd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd="FirebaseError";class wt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=zd,Object.setPrototypeOf(this,wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yr.prototype.create)}}class yr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?qd(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new wt(s,a,r)}}function qd(t,e){return t.replace(Wd,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Wd=/\{\$([^}]+)}/g;function Kd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(oa(i)&&oa(o)){if(!Zr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function oa(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Vn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function jn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Gd(t,e){const n=new Jd(t,e);return n.subscribe.bind(n)}class Jd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Yd(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ms),s.error===void 0&&(s.error=Ms),s.complete===void 0&&(s.complete=Ms);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ms(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(t){return t&&t._delegate?t._delegate:t}class Xt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Fd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zd(e))try{this.getOrInitializeService({instanceIdentifier:Ht})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ht){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ht){return this.instances.has(e)}getOptions(e=Ht){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Xd(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ht){return this.component?this.component.multipleInstances?e:Ht:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xd(t){return t===Ht?void 0:t}function Zd(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Qd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const tp={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},np=ee.INFO,rp={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},sp=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=rp[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ji{constructor(e){this.name=e,this._logLevel=np,this._logHandler=sp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const ip=(t,e)=>e.some(n=>t instanceof n);let aa,ca;function op(){return aa||(aa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ap(){return ca||(ca=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const il=new WeakMap,ii=new WeakMap,ol=new WeakMap,Ls=new WeakMap,Hi=new WeakMap;function cp(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Lt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&il.set(n,t)}).catch(()=>{}),Hi.set(e,t),e}function lp(t){if(ii.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ii.set(t,e)}let oi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ii.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ol.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Lt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function up(t){oi=t(oi)}function fp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Fs(this),e,...n);return ol.set(r,e.sort?e.sort():[e]),Lt(r)}:ap().includes(t)?function(...e){return t.apply(Fs(this),e),Lt(il.get(this))}:function(...e){return Lt(t.apply(Fs(this),e))}}function hp(t){return typeof t=="function"?fp(t):(t instanceof IDBTransaction&&lp(t),ip(t,op())?new Proxy(t,oi):t)}function Lt(t){if(t instanceof IDBRequest)return cp(t);if(Ls.has(t))return Ls.get(t);const e=hp(t);return e!==t&&(Ls.set(t,e),Hi.set(e,t)),e}const Fs=t=>Hi.get(t);function dp(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Lt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Lt(o.result),c.oldVersion,c.newVersion,Lt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const pp=["get","getKey","getAll","getAllKeys","count"],mp=["put","add","delete","clear"],Us=new Map;function la(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Us.get(e))return Us.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=mp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||pp.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Us.set(e,i),i}up(t=>({...t,get:(e,n,r)=>la(e,n)||t.get(e,n,r),has:(e,n)=>!!la(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_p(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function _p(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ai="@firebase/app",ua="0.7.33";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new ji("@firebase/app"),yp="@firebase/app-compat",vp="@firebase/analytics-compat",bp="@firebase/analytics",wp="@firebase/app-check-compat",Ep="@firebase/app-check",Ip="@firebase/auth",Tp="@firebase/auth-compat",Sp="@firebase/database",Rp="@firebase/database-compat",Ap="@firebase/functions",kp="@firebase/functions-compat",Cp="@firebase/installations",Pp="@firebase/installations-compat",Op="@firebase/messaging",Np="@firebase/messaging-compat",Dp="@firebase/performance",xp="@firebase/performance-compat",Mp="@firebase/remote-config",Lp="@firebase/remote-config-compat",Fp="@firebase/storage",Up="@firebase/storage-compat",Bp="@firebase/firestore",$p="@firebase/firestore-compat",Vp="firebase",jp="9.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al="[DEFAULT]",Hp={[ai]:"fire-core",[yp]:"fire-core-compat",[bp]:"fire-analytics",[vp]:"fire-analytics-compat",[Ep]:"fire-app-check",[wp]:"fire-app-check-compat",[Ip]:"fire-auth",[Tp]:"fire-auth-compat",[Sp]:"fire-rtdb",[Rp]:"fire-rtdb-compat",[Ap]:"fire-fn",[kp]:"fire-fn-compat",[Cp]:"fire-iid",[Pp]:"fire-iid-compat",[Op]:"fire-fcm",[Np]:"fire-fcm-compat",[Dp]:"fire-perf",[xp]:"fire-perf-compat",[Mp]:"fire-rc",[Lp]:"fire-rc-compat",[Fp]:"fire-gcs",[Up]:"fire-gcs-compat",[Bp]:"fire-fst",[$p]:"fire-fst-compat","fire-js":"fire-js",[Vp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=new Map,ci=new Map;function zp(t,e){try{t.container.addComponent(e)}catch(n){Zt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rn(t){const e=t.name;if(ci.has(e))return Zt.debug(`There were multiple attempts to register component ${e}.`),!1;ci.set(e,t);for(const n of es.values())zp(n,t);return!0}function zi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},en=new yr("app","Firebase",qp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw en.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=jp;function Kp(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:al,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw en.create("bad-app-name",{appName:String(r)});const s=es.get(r);if(s){if(Zr(t,s.options)&&Zr(n,s.config))return s;throw en.create("duplicate-app",{appName:r})}const i=new ep(r);for(const a of ci.values())i.addComponent(a);const o=new Wp(t,n,i);return es.set(r,o),o}function cl(t=al){const e=es.get(t);if(!e)throw en.create("no-app",{appName:t});return e}function Ft(t,e,n){var r;let s=(r=Hp[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zt.warn(a.join(" "));return}Rn(new Xt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp="firebase-heartbeat-database",Jp=1,ar="firebase-heartbeat-store";let Bs=null;function ll(){return Bs||(Bs=dp(Gp,Jp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ar)}}}).catch(t=>{throw en.create("idb-open",{originalErrorMessage:t.message})})),Bs}async function Yp(t){var e;try{return(await ll()).transaction(ar).objectStore(ar).get(ul(t))}catch(n){if(n instanceof wt)Zt.warn(n.message);else{const r=en.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Zt.warn(r.message)}}}async function fa(t,e){var n;try{const s=(await ll()).transaction(ar,"readwrite");return await s.objectStore(ar).put(e,ul(t)),s.done}catch(r){if(r instanceof wt)Zt.warn(r.message);else{const s=en.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Zt.warn(s.message)}}}function ul(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp=1024,Xp=30*24*60*60*1e3;class Zp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tm(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ha();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Xp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ha(),{heartbeatsToSend:n,unsentEntries:r}=em(this._heartbeatsCache.heartbeats),s=sl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ha(){return new Date().toISOString().substring(0,10)}function em(t,e=Qp){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),da(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),da(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class tm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jd()?Hd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Yp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return fa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return fa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function da(t){return sl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(t){Rn(new Xt("platform-logger",e=>new gp(e),"PRIVATE")),Rn(new Xt("heartbeat",e=>new Zp(e),"PRIVATE")),Ft(ai,ua,t),Ft(ai,ua,"esm2017"),Ft("fire-js","")}nm("");function qi(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function fl(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rm=fl,hl=new yr("auth","Firebase",fl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa=new ji("@firebase/auth");function Vr(t,...e){pa.logLevel<=ee.ERROR&&pa.error(`Auth (${br}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t,...e){throw Wi(t,...e)}function it(t,...e){return Wi(t,...e)}function sm(t,e,n){const r=Object.assign(Object.assign({},rm()),{[e]:n});return new yr("auth","Firebase",r).create(e,{appName:t.name})}function Wi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return hl.create(t,...e)}function F(t,e,...n){if(!t)throw Wi(e,...n)}function ht(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Vr(e),new Error(e)}function _t(t,e){t||ht(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=new Map;function dt(t){_t(t instanceof Function,"Expected a class definition");let e=ma.get(t);return e?(_t(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ma.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(t,e){const n=zi(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Zr(i,e!=null?e:{}))return s;Ye(s,"already-initialized")}return n.initialize({options:e})}function om(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function am(){return ga()==="http:"||ga()==="https:"}function ga(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(am()||Bd()||"connection"in navigator)?navigator.onLine:!0}function lm(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,n){this.shortDelay=e,this.longDelay=n,_t(n>e,"Short delay should be less than long delay!"),this.isMobile=Ud()||$d()}get(){return cm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(t,e){_t(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm=new wr(3e4,6e4);function Er(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ir(t,e,n,r,s={}){return pl(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=vr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),dl.fetch()(ml(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function pl(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},um),e);try{const s=new hm(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Nr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Nr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Nr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Nr(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw sm(t,u,l);Ye(t,u)}}catch(s){if(s instanceof wt)throw s;Ye(t,"network-request-failed")}}async function Tr(t,e,n,r,s={}){const i=await Ir(t,e,n,r,s);return"mfaPendingCredential"in i&&Ye(t,"multi-factor-auth-required",{_serverResponse:i}),i}function ml(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ki(t.config,s):`${t.config.apiScheme}://${s}`}class hm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(it(this.auth,"network-request-failed")),fm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Nr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=it(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dm(t,e){return Ir(t,"POST","/v1/accounts:delete",e)}async function pm(t,e){return Ir(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mm(t,e=!1){const n=at(t),r=await n.getIdToken(e),s=Gi(r);F(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Gn($s(s.auth_time)),issuedAtTime:Gn($s(s.iat)),expirationTime:Gn($s(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function $s(t){return Number(t)*1e3}function Gi(t){var e;const[n,r,s]=t.split(".");if(n===void 0||r===void 0||s===void 0)return Vr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ld(r);return i?JSON.parse(i):(Vr("Failed to decode base64 JWT payload"),null)}catch(i){return Vr("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function gm(t){const e=Gi(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wt&&_m(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function _m({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gn(this.lastLoginAt),this.creationTime=Gn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ts(t){var e;const n=t.auth,r=await t.getIdToken(),s=await cr(t,pm(n,{idToken:r}));F(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?wm(i.providerUserInfo):[],a=bm(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new gl(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function vm(t){const e=at(t);await ts(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bm(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function wm(t){return t.map(e=>{var{providerId:n}=e,r=qi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Em(t,e){const n=await pl(t,{},async()=>{const r=vr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=ml(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",dl.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Em(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new lr;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(F(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(F(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new lr,this.toJSON())}_performRefresh(){return ht("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Yt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=qi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ym(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new gl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await cr(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return mm(this,e)}reload(){return vm(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Yt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ts(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await cr(this,dm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,L=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,I=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:P,emailVerified:H,isAnonymous:J,providerData:Y,stsTokenManager:ue}=n;F(P&&ue,e,"internal-error");const ge=lr.fromJSON(this.name,ue);F(typeof P=="string",e,"internal-error"),Tt(f,e.name),Tt(p,e.name),F(typeof H=="boolean",e,"internal-error"),F(typeof J=="boolean",e,"internal-error"),Tt(g,e.name),Tt(E,e.name),Tt(L,e.name),Tt(C,e.name),Tt(k,e.name),Tt(I,e.name);const le=new Yt({uid:P,auth:e,email:p,emailVerified:H,displayName:f,isAnonymous:J,photoURL:E,phoneNumber:g,tenantId:L,stsTokenManager:ge,createdAt:k,lastLoginAt:I});return Y&&Array.isArray(Y)&&(le.providerData=Y.map(be=>Object.assign({},be))),C&&(le._redirectEventId=C),le}static async _fromIdTokenResponse(e,n,r=!1){const s=new lr;s.updateFromServerResponse(n);const i=new Yt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ts(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}_l.type="NONE";const _a=_l;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(t,e,n){return`firebase:${t}:${e}:${n}`}class yn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=jr(this.userKey,s.apiKey,i),this.fullPersistenceKey=jr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Yt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new yn(dt(_a),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||dt(_a);const o=jr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=Yt._fromJSON(e,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new yn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new yn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(El(e))return"Blackberry";if(Il(e))return"Webos";if(Ji(e))return"Safari";if((e.includes("chrome/")||vl(e))&&!e.includes("edge/"))return"Chrome";if(wl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function yl(t=Ie()){return/firefox\//i.test(t)}function Ji(t=Ie()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vl(t=Ie()){return/crios\//i.test(t)}function bl(t=Ie()){return/iemobile/i.test(t)}function wl(t=Ie()){return/android/i.test(t)}function El(t=Ie()){return/blackberry/i.test(t)}function Il(t=Ie()){return/webos/i.test(t)}function bs(t=Ie()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Im(t=Ie()){var e;return bs(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Tm(){return Vd()&&document.documentMode===10}function Tl(t=Ie()){return bs(t)||wl(t)||Il(t)||El(t)||/windows phone/i.test(t)||bl(t)}function Sm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(t,e=[]){let n;switch(t){case"Browser":n=ya(Ie());break;case"Worker":n=`${ya(Ie())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${br}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new va(this),this.idTokenSubscription=new va(this),this.beforeStateQueue=new Rm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hl,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await yn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await ts(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?at(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(dt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new yr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dt(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await yn.create(this,[dt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function ws(t){return at(t)}class va{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gd(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ht("not implemented")}_getIdTokenResponse(e){return ht("not implemented")}_linkToIdToken(e,n){return ht("not implemented")}_getReauthenticationResolver(e){return ht("not implemented")}}async function km(t,e){return Ir(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cm(t,e){return Tr(t,"POST","/v1/accounts:signInWithPassword",Er(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pm(t,e){return Tr(t,"POST","/v1/accounts:signInWithEmailLink",Er(t,e))}async function Om(t,e){return Tr(t,"POST","/v1/accounts:signInWithEmailLink",Er(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends Yi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ur(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ur(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Cm(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Pm(e,{email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return km(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Om(e,{idToken:n,email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vn(t,e){return Tr(t,"POST","/v1/accounts:signInWithIdp",Er(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm="http://localhost";class tn extends Yi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new tn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ye("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=qi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new tn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return vn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,vn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vn(e,n)}buildRequest(){const e={requestUri:Nm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=vr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xm(t){const e=Vn(jn(t)).link,n=e?Vn(jn(e)).deep_link_id:null,r=Vn(jn(t)).deep_link_id;return(r?Vn(jn(r)).link:null)||r||n||e||t}class Qi{constructor(e){var n,r,s,i,o,a;const c=Vn(jn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=Dm((s=c.mode)!==null&&s!==void 0?s:null);F(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=xm(e);try{return new Qi(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(){this.providerId=xn.PROVIDER_ID}static credential(e,n){return ur._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Qi.parseLink(n);return F(r,"argument-error"),ur._fromEmailAndCode(e,r.code,r.tenantId)}}xn.PROVIDER_ID="password";xn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends Rl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends Sr{constructor(){super("facebook.com")}static credential(e){return tn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ct.credential(e.oauthAccessToken)}catch{return null}}}Ct.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ct.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends Sr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return tn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Pt.credential(n,r)}catch{return null}}}Pt.GOOGLE_SIGN_IN_METHOD="google.com";Pt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends Sr{constructor(){super("github.com")}static credential(e){return tn._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ot.credential(e.oauthAccessToken)}catch{return null}}}Ot.GITHUB_SIGN_IN_METHOD="github.com";Ot.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends Sr{constructor(){super("twitter.com")}static credential(e,n){return tn._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Nt.credential(n,r)}catch{return null}}}Nt.TWITTER_SIGN_IN_METHOD="twitter.com";Nt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mm(t,e){return Tr(t,"POST","/v1/accounts:signUp",Er(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Yt._fromIdTokenResponse(e,r,s),o=ba(r);return new nn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ba(r);return new nn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ba(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns extends wt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ns.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ns(e,n,r,s)}}function Al(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ns._fromErrorAndOperation(t,i,e,r):i})}async function Lm(t,e,n=!1){const r=await cr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return nn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fm(t,e,n=!1){var r;const{auth:s}=t,i="reauthenticate";try{const o=await cr(t,Al(s,i,e,t),n);F(o.idToken,s,"internal-error");const a=Gi(o.idToken);F(a,s,"internal-error");const{sub:c}=a;return F(t.uid===c,s,"user-mismatch"),nn._forOperation(t,i,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Ye(s,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kl(t,e,n=!1){const r="signIn",s=await Al(t,r,e),i=await nn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Um(t,e){return kl(ws(t),e)}async function By(t,e,n){const r=ws(t),s=await Mm(r,{returnSecureToken:!0,email:e,password:n}),i=await nn._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function $y(t,e,n){return Um(at(t),xn.credential(e,n))}const rs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(rs,"1"),this.storage.removeItem(rs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(){const t=Ie();return Ji(t)||bs(t)}const $m=1e3,Vm=10;class Pl extends Cl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Bm()&&Sm(),this.fallbackToPolling=Tl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Tm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Vm):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},$m)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pl.type="LOCAL";const jm=Pl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol extends Cl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ol.type="SESSION";const Nl=Ol;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Es(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Hm(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Es.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Xi("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(){return window}function qm(t){ot().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(){return typeof ot().WorkerGlobalScope<"u"&&typeof ot().importScripts=="function"}async function Wm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Km(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Gm(){return Dl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl="firebaseLocalStorageDb",Jm=1,ss="firebaseLocalStorage",Ml="fbase_key";class Rr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Is(t,e){return t.transaction([ss],e?"readwrite":"readonly").objectStore(ss)}function Ym(){const t=indexedDB.deleteDatabase(xl);return new Rr(t).toPromise()}function ui(){const t=indexedDB.open(xl,Jm);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ss,{keyPath:Ml})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ss)?e(r):(r.close(),await Ym(),e(await ui()))})})}async function wa(t,e,n){const r=Is(t,!0).put({[Ml]:e,value:n});return new Rr(r).toPromise()}async function Qm(t,e){const n=Is(t,!1).get(e),r=await new Rr(n).toPromise();return r===void 0?null:r.value}function Ea(t,e){const n=Is(t,!0).delete(e);return new Rr(n).toPromise()}const Xm=800,Zm=3;class Ll{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ui(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Zm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Es._getInstance(Gm()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Wm(),!this.activeServiceWorker)return;this.sender=new zm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Km()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ui();return await wa(e,rs,"1"),await Ea(e,rs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>wa(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Qm(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ea(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Is(s,!1).getAll();return new Rr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Xm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ll.type="LOCAL";const eg=Ll;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ng(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=it("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",tg().appendChild(r)})}function rg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new wr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(t,e){return e?dt(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi extends Yi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ig(t){return kl(t.auth,new Zi(t),t.bypassAuthState)}function og(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),Fm(n,new Zi(t),t.bypassAuthState)}async function ag(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),Lm(n,new Zi(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ig;case"linkViaPopup":case"linkViaRedirect":return ag;case"reauthViaPopup":case"reauthViaRedirect":return og;default:Ye(this.auth,"internal-error")}}resolve(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=new wr(2e3,1e4);class hn extends Fl{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,hn.currentPopupAction&&hn.currentPopupAction.cancel(),hn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){_t(this.filter.length===1,"Popup operations only handle one event");const e=Xi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(it(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(it(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(it(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,cg.get())};e()}}hn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg="pendingRedirect",Hr=new Map;class ug extends Fl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Hr.get(this.auth._key());if(!e){try{const r=await fg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Hr.set(this.auth._key(),e)}return this.bypassAuthState||Hr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fg(t,e){const n=pg(e),r=dg(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function hg(t,e){Hr.set(t._key(),e)}function dg(t){return dt(t._redirectPersistence)}function pg(t){return jr(lg,t.config.apiKey,t.name)}async function mg(t,e,n=!1){const r=ws(t),s=sg(r,e),o=await new ug(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg=10*60*1e3;class _g{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ul(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(it(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ia(e))}saveEventToCache(e){this.cachedEventUids.add(Ia(e)),this.lastProcessedEventTime=Date.now()}}function Ia(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ul({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ul(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vg(t,e={}){return Ir(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wg=/^https?/;async function Eg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await vg(t);for(const n of e)try{if(Ig(n))return}catch{}Ye(t,"unauthorized-domain")}function Ig(t){const e=li(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!wg.test(n))return!1;if(bg.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg=new wr(3e4,6e4);function Ta(){const t=ot().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Sg(t){return new Promise((e,n)=>{var r,s,i;function o(){Ta(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ta(),n(it(t,"network-request-failed"))},timeout:Tg.get()})}if(!((s=(r=ot().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ot().gapi)===null||i===void 0)&&i.load)o();else{const a=rg("iframefcb");return ot()[a]=()=>{gapi.load?o():n(it(t,"network-request-failed"))},ng(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw zr=null,e})}let zr=null;function Rg(t){return zr=zr||Sg(t),zr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=new wr(5e3,15e3),kg="__/auth/iframe",Cg="emulator/auth/iframe",Pg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Og=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ng(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ki(e,Cg):`https://${t.config.authDomain}/${kg}`,r={apiKey:e.apiKey,appName:t.name,v:br},s=Og.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${vr(r).slice(1)}`}async function Dg(t){const e=await Rg(t),n=ot().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:Ng(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Pg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=it(t,"network-request-failed"),a=ot().setTimeout(()=>{i(o)},Ag.get());function c(){ot().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Mg=500,Lg=600,Fg="_blank",Ug="http://localhost";class Sa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Bg(t,e,n,r=Mg,s=Lg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},xg),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ie().toLowerCase();n&&(a=vl(l)?Fg:n),yl(l)&&(e=e||Ug,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[g,E])=>`${p}${g}=${E},`,"");if(Im(l)&&a!=="_self")return $g(e||"",a),new Sa(null);const f=window.open(e||"",a,u);F(f,t,"popup-blocked");try{f.focus()}catch{}return new Sa(f)}function $g(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg="__/auth/handler",jg="emulator/auth/handler";function Ra(t,e,n,r,s,i){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:br,eventId:s};if(e instanceof Rl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Kd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Sr){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Hg(t)}?${vr(a).slice(1)}`}function Hg({config:t}){return t.emulator?Ki(t,jg):`https://${t.authDomain}/${Vg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs="webStorageSupport";class zg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Nl,this._completeRedirectFn=mg,this._overrideRedirectResult=hg}async _openPopup(e,n,r,s){var i;_t((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Ra(e,n,r,li(),s);return Bg(e,o,Xi())}async _openRedirect(e,n,r,s){return await this._originValidation(e),qm(Ra(e,n,r,li(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(_t(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Dg(e),r=new _g(e);return n.register("authEvent",s=>(F(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vs,{type:Vs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Vs];o!==void 0&&n(!!o),Ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Eg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Tl()||Ji()||bs()}}const qg=zg;var Aa="@firebase/auth",ka="0.20.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Gg(t){Rn(new Xt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{F(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),F(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sl(t)},u=new Am(a,c,l);return om(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Rn(new Xt("auth-internal",e=>{const n=ws(e.getProvider("auth").getImmediate());return(r=>new Wg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ft(Aa,ka,Kg(t)),Ft(Aa,ka,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(t=cl()){const e=zi(t,"auth");return e.isInitialized()?e.getImmediate():im(t,{popupRedirectResolver:qg,persistence:[eg,jm,Nl]})}Gg("Browser");const Yg=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Qg={class:"wrapper"},Xg=Dn("Home"),Zg=Dn("About"),e_={key:0},t_={key:1},n_=Dn("Login"),r_=Dn("Register"),s_=Dn("Create"),i_={__name:"App",setup(t){const e=Dd(),n=Hn(!1),r=Jg();r.onAuthStateChanged(i=>{i?n.value=!0:n.value=!1});function s(){r.signOut(),e.push("/")}return(i,o)=>(Jt(),qn(Ve,null,[st("header",null,[st("div",Qg,[st("nav",null,[fe(Le(fn),{to:"/"},{default:qt(()=>[Xg]),_:1}),fe(Le(fn),{to:"/about"},{default:qt(()=>[Zg]),_:1}),n.value?(Jt(),qn("span",e_,[st("button",{onClick:s},"Logout")])):(Jt(),qn("span",t_,[fe(Le(fn),{to:"/sign-in"},{default:qt(()=>[n_]),_:1}),fe(Le(fn),{to:"/register"},{default:qt(()=>[r_]),_:1})])),fe(Le(fn),{to:"/create"},{default:qt(()=>[s_]),_:1})])])]),fe(Le(tl))],64))}},o_=Yg(i_,[["__scopeId","data-v-75002534"]]),a_="modulepreload",c_=function(t){return"/"+t},Ca={},Dr=function(e,n,r){return!n||n.length===0?e():Promise.all(n.map(s=>{if(s=c_(s),s in Ca)return;Ca[s]=!0;const i=s.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":a_,i||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),i)return new Promise((c,l)=>{a.addEventListener("load",c),a.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Me.UNAUTHENTICATED=new Me(null),Me.GOOGLE_CREDENTIALS=new Me("google-credentials-uid"),Me.FIRST_PARTY=new Me("first-party-uid"),Me.MOCK_USER=new Me("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mn="9.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new ji("@firebase/firestore");function is(t,...e){if(An.logLevel<=ee.DEBUG){const n=e.map(to);An.debug(`Firestore (${Mn}): ${t}`,...n)}}function eo(t,...e){if(An.logLevel<=ee.ERROR){const n=e.map(to);An.error(`Firestore (${Mn}): ${t}`,...n)}}function l_(t,...e){if(An.logLevel<=ee.WARN){const n=e.map(to);An.warn(`Firestore (${Mn}): ${t}`,...n)}}function to(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(t="Unexpected state"){const e=`FIRESTORE (${Mn}) INTERNAL ASSERTION FAILED: `+t;throw eo(e),new Error(e)}function yt(t,e){t||de()}function Ts(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa="ok",u_="cancelled",Jn="unknown",G="invalid-argument",f_="deadline-exceeded",h_="not-found",d_="permission-denied",fi="unauthenticated",p_="resource-exhausted",kn="failed-precondition",m_="aborted",g_="out-of-range",Bl="unimplemented",__="internal",y_="unavailable";class j extends wt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class b_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Me.UNAUTHENTICATED))}shutdown(){}}class w_{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(yt(typeof e.accessToken=="string"),new v_(e.accessToken,new Me(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class E_{constructor(e,n,r,s){this.t=e,this.i=n,this.o=r,this.u=s,this.type="FirstParty",this.user=Me.FIRST_PARTY,this.h=new Map}l(){return this.u?this.u():(yt(!(typeof this.t!="object"||this.t===null||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.h.set("X-Goog-AuthUser",this.i);const e=this.l();return e&&this.h.set("Authorization",e),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}}class I_{constructor(e,n,r,s){this.t=e,this.i=n,this.o=r,this.u=s}getToken(){return Promise.resolve(new E_(this.t,this.i,this.o,this.u))}start(e,n){e.enqueueRetryable(()=>n(Me.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class T_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class S_{constructor(e){this.m=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(yt(typeof e.token=="string"),new T_(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class fr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new fr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof fr&&e.projectId===this.projectId&&e.database===this.database}}class hr{constructor(e,n,r){n===void 0?n=0:n>e.length&&de(),r===void 0?r=e.length-n:r>e.length-n&&de(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return hr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof hr?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class me extends hr{construct(e,n,r){return new me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(G,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new me(n)}static emptyPath(){return new me([])}}const A_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Oe extends hr{construct(e,n,r){return new Oe(e,n,r)}static isValidIdentifier(e){return A_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Oe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Oe(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new j(G,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new j(G,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new j(G,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new j(G,"Unterminated ` in path: "+e);return new Oe(n)}static emptyPath(){return new Oe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.path=e}static fromPath(e){return new Be(me.fromString(e))}static fromName(e){return new Be(me.fromString(e).popFirst(5))}static empty(){return new Be(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Be(new me(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(t,e,n){if(!n)throw new j(G,`Function ${t}() cannot be called with an empty ${e}.`)}function Oa(t){if(!Be.isDocumentKey(t))throw new j(G,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Na(t){if(Be.isDocumentKey(t))throw new j(G,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function no(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de()}function Vl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new j(G,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=no(t);throw new j(G,`Expected type '${e.name}', but it was: ${n}`)}}return t}function k_(t,e){if(e<=0)throw new j(G,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(t){return t==null}function os(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Da,q;function xa(t){if(t===void 0)return eo("RPC_ERROR","HTTP error has no status"),Jn;switch(t){case 200:return Pa;case 400:return kn;case 401:return fi;case 403:return d_;case 404:return h_;case 409:return m_;case 416:return g_;case 429:return p_;case 499:return u_;case 500:return Jn;case 501:return Bl;case 503:return y_;case 504:return f_;default:return t>=200&&t<300?Pa:t>=400&&t<500?kn:t>=500&&t<600?__:Jn}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(q=Da||(Da={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";class O_ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.p=n+"://"+e.host,this.g="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}v(e,n,r,s,i){const o=this.T(e,n);is("RestConnection","Sending: ",o,r);const a={};return this.I(a,s,i),this.A(e,o,a,r).then(c=>(is("RestConnection","Received: ",c),c),c=>{throw l_("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}R(e,n,r,s,i,o){return this.v(e,n,r,s,i)}I(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Mn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}T(e,n){const r=P_[e];return`${this.p}/v1/${n}:${r}`}}{constructor(e,n){super(e),this.P=n}V(e,n){throw new Error("Not supported by FetchConnection")}async A(e,n,r,s){const i=JSON.stringify(s);let o;try{o=await this.P(n,{method:"POST",headers:r,body:i})}catch(a){throw new j(xa(a.status),"Request failed with error: "+a.statusText)}if(!o.ok)throw new j(xa(o.status),"Request failed with error: "+o.statusText);return o.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{static N(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=N_(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function dr(t,e){return t<e?-1:t>e?1:0}function jl(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new j(G,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(G,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new j(G,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(G,"Timestamp seconds out of range: "+e)}static now(){return Ne.fromMillis(Date.now())}static fromDate(e){return Ne.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ne(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?dr(this.nanoseconds,e.nanoseconds):dr(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.timestamp=e}static fromTimestamp(e){return new He(e)}static min(){return new He(new Ne(0,0))}static max(){return new He(new Ne(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ss(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n){this.comparator=e,this.root=n||_e.EMPTY}insert(e,n){return new as(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,_e.BLACK,null,null))}remove(e){return new as(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_e.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xr(this.root,e,this.comparator,!1)}getReverseIterator(){return new xr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xr(this.root,e,this.comparator,!0)}}class xr{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _e{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:_e.RED,this.left=s!=null?s:_e.EMPTY,this.right=i!=null?i:_e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new _e(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return _e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return _e.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw de();const e=this.left.check();if(e!==this.right.check())throw de();return e+(this.isRed()?0:1)}}_e.EMPTY=null,_e.RED=!0,_e.BLACK=!1;_e.EMPTY=new class{constructor(){this.size=0}get key(){throw de()}get value(){throw de()}get color(){throw de()}get left(){throw de()}get right(){throw de()}copy(t,e,n,r,s){return this}insert(t,e,n){return new _e(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.comparator=e,this.data=new as(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new La(this.data.getIterator())}getIteratorFrom(e){return new La(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof cs)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new cs(this.comparator);return n.data=e,n}}class La{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e){this.fields=e,e.sort(Oe.comparator)}static empty(){return new pr([])}unionWith(e){let n=new cs(Oe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new pr(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return jl(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new vt(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new vt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return dr(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}vt.EMPTY_BYTE_STRING=new vt("");const x_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mr(t){if(yt(!!t),typeof t=="string"){let e=0;const n=x_.exec(t);if(yt(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Pe(t.seconds),nanos:Pe(t.nanos)}}function Pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function hi(t){return typeof t=="string"?vt.fromBase64String(t):vt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function zl(t){const e=t.mapValue.fields.__previous_value__;return Hl(e)?zl(e):e}function di(t){const e=mr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ne(e.seconds,e.nanos)}function pi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Hl(t)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:10:de()}function mi(t,e){if(t===e)return!0;const n=pi(t);if(n!==pi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return di(t).isEqual(di(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=mr(r.timestampValue),o=mr(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return hi(r.bytesValue).isEqual(hi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Pe(r.geoPointValue.latitude)===Pe(s.geoPointValue.latitude)&&Pe(r.geoPointValue.longitude)===Pe(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Pe(r.integerValue)===Pe(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Pe(r.doubleValue),o=Pe(s.doubleValue);return i===o?os(i)===os(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return jl(t.arrayValue.values||[],e.arrayValue.values||[],mi);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Ma(i)!==Ma(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!mi(i[a],o[a])))return!1;return!0}(t,e);default:return de()}}function Fa(t){return!!t&&"nullValue"in t}function Ua(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function js(t){return!!t&&"mapValue"in t}function Yn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ss(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Yn(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Yn(t.arrayValue.values[n]);return e}return Object.assign({},t)}class rt{constructor(e){this.value=e}static empty(){return new rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!js(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yn(n)}setAll(e){let n=Oe.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Yn(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());js(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return mi(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];js(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ss(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new rt(Yn(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,n,r,s,i,o){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new At(e,0,He.min(),He.min(),rt.empty(),0)}static newFoundDocument(e,n,r){return new At(e,1,n,He.min(),r,0)}static newNoDocument(e,n){return new At(e,2,n,He.min(),rt.empty(),0)}static newUnknownDocument(e,n){return new At(e,3,n,He.min(),rt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=He.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof At&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.D=null}}function Ba(t,e=null,n=[],r=[],s=null,i=null,o=null){return new M_(t,e,n,r,s,i,o)}class $a{constructor(e,n){this.position=e,this.inclusive=n}}class Qn{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.q=null,this.O=null,this.startAt,this.endAt}}function ql(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Wl(t){for(const e of t.filters)if(e.S())return e.field;return null}function Va(t){const e=Ts(t);if(e.q===null){e.q=[];const n=Wl(e),r=ql(e);if(n!==null&&r===null)n.isKeyField()||e.q.push(new Qn(n)),e.q.push(new Qn(Oe.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.q.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.q.push(new Qn(Oe.keyField(),i))}}}return e.q}function L_(t){const e=Ts(t);if(!e.O)if(e.limitType==="F")e.O=Ba(e.path,e.collectionGroup,Va(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Va(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Qn(i.field,o))}const r=e.endAt?new $a(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new $a(e.startAt.position,e.startAt.inclusive):null;e.O=Ba(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.O}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(t,e){return function(n){return typeof n=="number"&&Number.isInteger(n)&&!os(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}(e)?function(n){return{integerValue:""+n}}(e):function(n,r){if(n.k){if(isNaN(r))return{doubleValue:"NaN"};if(r===1/0)return{doubleValue:"Infinity"};if(r===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:os(r)?"-0":r}}(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){this._=void 0}}class U_ extends Rs{}class B_ extends Rs{constructor(e){super(),this.elements=e}}class $_ extends Rs{constructor(e){super(),this.elements=e}}class V_ extends Rs{constructor(e,n){super(),this.C=e,this.L=n}}class Xn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Xn}static exists(e){return new Xn(void 0,e)}static updateTime(e){return new Xn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class As{}class Kl extends As{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Gl extends As{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class j_ extends As{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class H_ extends As{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),q_=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class W_{constructor(e,n){this.databaseId=e,this.k=n}}function gi(t,e){return t.k?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function K_(t,e){return t.k?e.toBase64():e.toUint8Array()}function G_(t,e){return gi(t,e.toTimestamp())}function J_(t){return yt(!!t),He.fromTimestamp(function(e){const n=mr(e);return new Ne(n.seconds,n.nanos)}(t))}function so(t,e){return function(n){return new me(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function _i(t,e){return so(t.databaseId,e.path)}function Y_(t,e){const n=function(s){const i=me.fromString(s);return yt(Jl(i)),i}(e);if(n.get(1)!==t.databaseId.projectId)throw new j(G,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new j(G,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Be((yt((r=n).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function ja(t,e){return so(t.databaseId,e)}function Q_(t){return new me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ha(t,e,n){return{name:_i(t,e),fields:n.value.mapValue.fields}}function X_(t,e){let n;if(e instanceof Kl)n={update:Ha(t,e.key,e.value)};else if(e instanceof j_)n={delete:_i(t,e.key)};else if(e instanceof Gl)n={update:Ha(t,e.key,e.data),updateMask:ny(e.fieldMask)};else{if(!(e instanceof H_))return de();n={verify:_i(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof U_)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof B_)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof $_)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof V_)return{fieldPath:i.field.canonicalString(),increment:o.L};throw de()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:G_(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:de()}(t,e.precondition)),n}function Z_(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=ja(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ja(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length===0)return;const l=c.map(u=>function(f){if(f.op==="=="){if(Ua(f.value))return{unaryFilter:{field:cn(f.field),op:"IS_NAN"}};if(Fa(f.value))return{unaryFilter:{field:cn(f.field),op:"IS_NULL"}}}else if(f.op==="!="){if(Ua(f.value))return{unaryFilter:{field:cn(f.field),op:"IS_NOT_NAN"}};if(Fa(f.value))return{unaryFilter:{field:cn(f.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:cn(f.field),op:ty(f.op),value:f.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:cn(u.field),direction:ey(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.k||C_(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function ey(t){return z_[t]}function ty(t){return q_[t]}function cn(t){return{fieldPath:t.canonicalString()}}function ny(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Jl(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(t){return new W_(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.Z=r,this.C=s,this.tt=!1}et(){if(this.tt)throw new j(kn,"The client has already been terminated.")}v(e,n,r){return this.et(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.Z.v(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===fi&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new j(Jn,s.toString())})}R(e,n,r,s){return this.et(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.Z.R(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===fi&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(Jn,i.toString())})}terminate(){this.tt=!0}}async function sy(t,e){const n=Ts(t),r=Q_(n.C)+"/documents",s={writes:e.map(i=>X_(n.C,i))};await n.v("Commit",r,s)}async function iy(t,e){const n=Ts(t),r=Z_(n.C,L_(e));return(await n.R("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(i,o,a){const c=Y_(i,o.name),l=J_(o.updateTime),u=new rt({mapValue:{fields:o.fields}}),f=At.newFoundDocument(c,l,u);return a&&f.setHasCommittedMutations(),a?f.setHasCommittedMutations():f}(n.C,s.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new Map;function Yl(t){if(t._terminated)throw new j(kn,"The client has already been terminated.");if(!Zn.has(t)){is("ComponentProvider","Initializing Datastore");const i=function(c){return new O_(c,fetch.bind(null))}((e=t._databaseId,n=t.app.options.appId||"",r=t._persistenceKey,s=t._freezeSettings(),new R_(e,n,r,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams))),o=io(t._databaseId),a=function(c,l,u,f){return new ry(c,l,u,f)}(t._authCredentials,t._appCheckCredentials,i,o);Zn.set(t,a)}var e,n,r,s;/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return Zn.get(t)}class za{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new j(G,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(G,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(r,s,i,o){if(s===!0&&o===!0)throw new j(G,`${r} and ${i} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new za({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new j(kn,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new j(kn,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new za(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new b_;switch(n.type){case"gapi":const r=n.client;return new I_(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new j(G,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Zn.get(e);n&&(is("ComponentProvider","Removing Datastore"),Zn.delete(e),n.terminate())}(this),Promise.resolve()}}function oy(t,e){const n=typeof t=="object"?t:cl(),r=typeof t=="string"?t:e||"(default)";return zi(n,"firestore/lite").getImmediate({identifier:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ge(this.firestore,e,this._key)}}class Ln{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ln(this.firestore,e,this._query)}}class mt extends Ln{constructor(e,n,r){super(e,n,new ro(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ge(this.firestore,null,new Be(e))}withConverter(e){return new mt(this.firestore,e,this._path)}}function ay(t,e,...n){if(t=at(t),$l("collection","path",e),t instanceof oo){const r=me.fromString(e,...n);return Na(r),new mt(t,null,r)}{if(!(t instanceof Ge||t instanceof mt))throw new j(G,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return Na(r),new mt(t.firestore,null,r)}}function cy(t,e,...n){if(t=at(t),arguments.length===1&&(e=D_.N()),$l("doc","path",e),t instanceof oo){const r=me.fromString(e,...n);return Oa(r),new Ge(t,null,new Be(r))}{if(!(t instanceof Ge||t instanceof mt))throw new j(G,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return Oa(r),new Ge(t.firestore,t instanceof mt?t.converter:null,new Be(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new j(G,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Oe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cn(vt.fromBase64String(e))}catch(n){throw new j(G,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Cn(vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new j(G,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new j(G,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return dr(this._lat,e._lat)||dr(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly=/^__.*__$/;class uy{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Gl(e,this.data,this.fieldMask,n,this.fieldTransforms):new Kl(e,this.data,n,this.fieldTransforms)}}function Xl(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de()}}class lo{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.C=r,this.ignoreUndefinedProperties=s,i===void 0&&this.nt(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get rt(){return this.settings.rt}st(e){return new lo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.C,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}it(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.st({path:r,ot:!1});return s.ut(e),s}ct(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.st({path:r,ot:!1});return s.nt(),s}at(e){return this.st({path:void 0,ot:!0})}ht(e){return ls(e,this.settings.methodName,this.settings.lt||!1,this.path,this.settings.ft)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}nt(){if(this.path)for(let e=0;e<this.path.length;e++)this.ut(this.path.get(e))}ut(e){if(e.length===0)throw this.ht("Document fields must not be empty");if(Xl(this.rt)&&ly.test(e))throw this.ht('Document fields cannot begin and end with "__"')}}class fy{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.C=r||io(e)}dt(e,n,r,s=!1){return new lo({rt:e,methodName:n,ft:r,path:Oe.emptyPath(),ot:!1,lt:s},this.databaseId,this.C,this.ignoreUndefinedProperties)}}function hy(t){const e=t._freezeSettings(),n=io(t._databaseId);return new fy(t._databaseId,!!e.ignoreUndefinedProperties,n)}function dy(t,e,n,r,s,i={}){const o=t.dt(i.merge||i.mergeFields?2:0,e,n,s);nu("Data must be an object, but it was:",o,r);const a=eu(r,o);let c,l;if(i.merge)c=new pr(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const f of i.mergeFields){const p=py(e,f,n);if(!o.contains(p))throw new j(G,`Field '${p}' is specified in your field mask but missing from your input data.`);gy(u,p)||u.push(p)}c=new pr(u),l=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,l=o.fieldTransforms;return new uy(new rt(a),c,l)}function Zl(t,e){if(tu(t=at(t)))return nu("Unsupported field value:",e,t),eu(t,e);if(t instanceof Ql)return function(n,r){if(!Xl(r.rt))throw r.ht(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ht(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ot&&e.rt!==4)throw e.ht("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=Zl(o,r.at(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=at(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return F_(r.C,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Ne.fromDate(n);return{timestampValue:gi(r.C,s)}}if(n instanceof Ne){const s=new Ne(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:gi(r.C,s)}}if(n instanceof co)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Cn)return{bytesValue:K_(r.C,n._byteString)};if(n instanceof Ge){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.ht(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:so(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ht(`Unsupported field value: ${no(n)}`)}(t,e)}function eu(t,e){const n={};return function(r){for(const s in r)if(Object.prototype.hasOwnProperty.call(r,s))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ss(t,(r,s)=>{const i=Zl(s,e.it(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function tu(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ne||t instanceof co||t instanceof Cn||t instanceof Ge||t instanceof Ql)}function nu(t,e,n){if(!tu(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=no(n);throw r==="an object"?e.ht(t+" a custom object"):e.ht(t+" "+r)}}function py(t,e,n){if((e=at(e))instanceof ao)return e._internalPath;if(typeof e=="string")return ru(t,e);throw ls("Field path arguments must be of type string or ",t,!1,void 0,n)}const my=new RegExp("[~\\*/\\[\\]]");function ru(t,e,n){if(e.search(my)>=0)throw ls(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ao(...e.split("."))._internalPath}catch{throw ls(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ls(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new j(G,a+t+c)}function gy(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new su(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(iu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class su extends _y{data(){return super.data()}}class yy{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function iu(t,e){return typeof e=="string"?ru(t,e):e instanceof ao?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{}function vy(t,...e){for(const n of e)t=n._apply(t);return t}class by extends ou{constructor(e,n){super(),this._t=e,this.bt=n,this.type="orderBy"}_apply(e){const n=function(r,s,i){if(r.startAt!==null)throw new j(G,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new j(G,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Qn(s,i);return function(a,c){if(ql(a)===null){const l=Wl(a);l!==null&&Ty(a,l,c.field)}}(r,o),o}(e._query,this._t,this.bt);return new Ln(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new ro(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function wy(t,e="asc"){const n=e,r=iu("orderBy",t);return new by(r,n)}class Ey extends ou{constructor(e,n,r){super(),this.type=e,this.Et=n,this.Tt=r}_apply(e){return new Ln(e.firestore,e.converter,function(n,r,s){return new ro(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),r,s,n.startAt,n.endAt)}(e._query,this.Et,this.Tt))}}function Iy(t){return k_("limit",t),new Ey("limit",t,"F")}function Ty(t,e,n){if(!n.isEqual(e))throw new j(G,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Ry extends class{convertValue(e,n="none"){switch(pi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(hi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw de()}}convertObject(e,n){const r={};return Ss(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new co(Pe(e.latitude),Pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=zl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(di(e));default:return null}}convertTimestamp(e){const n=mr(e);return new Ne(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=me.fromString(e);yt(Jl(r));const s=new fr(r.get(1),r.get(3)),i=new Be(r.popFirst(5));return s.isEqual(n)||eo(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ge(this.firestore,null,n)}}function Ay(t){(function(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new j(Bl,"limitToLast() queries require specifying at least one orderBy() clause")})((t=Vl(t,Ln))._query);const e=Yl(t.firestore),n=new Ry(t.firestore);return iy(e,t._query).then(r=>{const s=r.map(i=>new su(t.firestore,n,i.key,i,t.converter));return t._query.limitType==="L"&&s.reverse(),new yy(t,s)})}function Vy(t,e){const n=cy(t=Vl(t,mt)),r=Sy(t.converter,e),s=dy(hy(t.firestore),"addDoc",n._key,r,n.converter!==null,{});return sy(Yl(t.firestore),[s.toMutation(n._key,Xn.exists(!1))]).then(()=>n)}(function(t){Mn=t})(`${br}_lite`),Rn(new Xt("firestore/lite",(t,{instanceIdentifier:e,options:n})=>{const r=t.getProvider("app").getImmediate(),s=new oo(new w_(t.getProvider("auth-internal")),new S_(t.getProvider("app-check-internal")),function(i,o){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new j(G,'"projectId" not provided in firebase.initializeApp.');return new fr(i.options.projectId,o)}(r,e),r);return n&&s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),Ft("firestore-lite","3.5.0",""),Ft("firestore-lite","3.5.0","esm2017");const ky=st("p",null,[st("strong",null,"Most Recent Post")],-1),Cy={class:"post-title"},Py={class:"post-body"},Oy={__name:"MostRecent",async setup(t){let e,n;const r=Hn(""),s=Hn("");Hn();const i=oy(),o=vy(ay(i,"posts"),wy("date","desc"),Iy(1));return([e,n]=ah(()=>Ay(o)),e=await e,n(),e).forEach(c=>{const l=c.data();r.value=l.title,s.value=l.body}),(c,l)=>(Jt(),qn(Ve,null,[ky,st("p",Cy,po(r.value),1),st("p",Py,po(s.value),1)],64))}},Ny={__name:"HomeView",setup(t){return(e,n)=>(Jt(),qn("main",null,[(Jt(),Gf(ff,null,{default:qt(()=>[fe(Oy)]),_:1}))]))}},Dy=Od({history:Jh("/"),routes:[{path:"/",name:"home",component:Ny},{path:"/about",name:"about",component:()=>Dr(()=>import("./AboutView.2f1d93f4.js"),["assets/AboutView.2f1d93f4.js","assets/AboutView.e3b0c442.css"])},{path:"/sign-in",name:"sign-in",component:()=>Dr(()=>import("./SignInView.f26c4fe2.js"),[])},{path:"/register",name:"register",component:()=>Dr(()=>import("./RegisterView.bc37df8a.js"),[])},{path:"/create",name:"create",component:()=>Dr(()=>import("./CreatePostView.5c787c38.js"),[])}]});var xy="firebase",My="9.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ft(xy,My,"app");const Ly={apiKey:"AIzaSyAEkx5h_H_jYYiA5zv-SaziecBXeDwxPJ4",authDomain:"bookclub-58f19.firebaseapp.com",projectId:"bookclub-58f19",storageBucket:"bookclub-58f19.appspot.com",messagingSenderId:"1068291885693",appId:"1:1068291885693:web:8961261fdcabbaab2d7f14",measurementId:"G-ZHW6J2Q0PG"};Kp(Ly);const au=Ph(o_);au.use(Dy);au.mount("#app");export{Vy as D,Ve as F,Yg as _,st as a,By as b,qn as c,Jg as g,oy as l,Jt as o,Hn as r,$y as s,Dd as u,Uy as v,Fy as w,ay as y};
