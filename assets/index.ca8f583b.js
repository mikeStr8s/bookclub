(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function ro(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Xf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",eh=ro(Xf);function ac(t){return!!t||t===""}function so(t){if(q(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Se(r)?rh(r):so(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Se(t))return t;if(de(t))return t}}const th=/;(?![^(]*\))/g,nh=/:(.+)/;function rh(t){const e={};return t.split(th).forEach(n=>{if(n){const r=n.split(nh);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function io(t){let e="";if(Se(t))e=t;else if(q(t))for(let n=0;n<t.length;n++){const r=io(t[n]);r&&(e+=r+" ")}else if(de(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Yr=t=>Se(t)?t:t==null?"":q(t)||de(t)&&(t.toString===uc||!H(t.toString))?JSON.stringify(t,lc,2):String(t),lc=(t,e)=>e&&e.__v_isRef?lc(t,e.value):$n(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:cc(e)?{[`Set(${e.size})`]:[...e.values()]}:de(e)&&!q(e)&&!fc(e)?String(e):e,le={},Ln=[],st=()=>{},sh=()=>!1,ih=/^on[^a-z]/,js=t=>ih.test(t),oo=t=>t.startsWith("onUpdate:"),Me=Object.assign,ao=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},oh=Object.prototype.hasOwnProperty,Z=(t,e)=>oh.call(t,e),q=Array.isArray,$n=t=>zs(t)==="[object Map]",cc=t=>zs(t)==="[object Set]",H=t=>typeof t=="function",Se=t=>typeof t=="string",lo=t=>typeof t=="symbol",de=t=>t!==null&&typeof t=="object",co=t=>de(t)&&H(t.then)&&H(t.catch),uc=Object.prototype.toString,zs=t=>uc.call(t),ah=t=>zs(t).slice(8,-1),fc=t=>zs(t)==="[object Object]",uo=t=>Se(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,as=ro(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},lh=/-(\w)/g,It=qs(t=>t.replace(lh,(e,n)=>n?n.toUpperCase():"")),ch=/\B([A-Z])/g,Zn=qs(t=>t.replace(ch,"-$1").toLowerCase()),Hs=qs(t=>t.charAt(0).toUpperCase()+t.slice(1)),pi=qs(t=>t?`on${Hs(t)}`:""),br=(t,e)=>!Object.is(t,e),ls=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ws=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},bs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ca;const uh=()=>ca||(ca=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let gt;class fh{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&gt&&(this.parent=gt,this.index=(gt.scopes||(gt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=gt;try{return gt=this,e()}finally{gt=n}}}on(){gt=this}off(){gt=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function hh(t,e=gt){e&&e.active&&e.effects.push(t)}const fo=t=>{const e=new Set(t);return e.w=0,e.n=0,e},hc=t=>(t.w&rn)>0,dc=t=>(t.n&rn)>0,dh=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=rn},ph=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];hc(s)&&!dc(s)?s.delete(t):e[n++]=s,s.w&=~rn,s.n&=~rn}e.length=n}},Oi=new WeakMap;let ar=0,rn=1;const Pi=30;let rt;const pn=Symbol(""),Ni=Symbol("");class ho{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,hh(this,r)}run(){if(!this.active)return this.fn();let e=rt,n=Xt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=rt,rt=this,Xt=!0,rn=1<<++ar,ar<=Pi?dh(this):ua(this),this.fn()}finally{ar<=Pi&&ph(this),rn=1<<--ar,rt=this.parent,Xt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){rt===this?this.deferStop=!0:this.active&&(ua(this),this.onStop&&this.onStop(),this.active=!1)}}function ua(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Xt=!0;const pc=[];function Xn(){pc.push(Xt),Xt=!1}function er(){const t=pc.pop();Xt=t===void 0?!0:t}function qe(t,e,n){if(Xt&&rt){let r=Oi.get(t);r||Oi.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=fo()),gc(s)}}function gc(t,e){let n=!1;ar<=Pi?dc(t)||(t.n|=rn,n=!hc(t)):n=!t.has(rt),n&&(t.add(rt),rt.deps.push(t))}function Nt(t,e,n,r,s,i){const o=Oi.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&q(t))o.forEach((l,c)=>{(c==="length"||c>=r)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":q(t)?uo(n)&&a.push(o.get("length")):(a.push(o.get(pn)),$n(t)&&a.push(o.get(Ni)));break;case"delete":q(t)||(a.push(o.get(pn)),$n(t)&&a.push(o.get(Ni)));break;case"set":$n(t)&&a.push(o.get(pn));break}if(a.length===1)a[0]&&Di(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Di(fo(l))}}function Di(t,e){const n=q(t)?t:[...t];for(const r of n)r.computed&&fa(r);for(const r of n)r.computed||fa(r)}function fa(t,e){(t!==rt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const gh=ro("__proto__,__v_isRef,__isVue"),mc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(lo)),mh=po(),yh=po(!1,!0),_h=po(!0),ha=wh();function wh(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ee(this);for(let i=0,o=this.length;i<o;i++)qe(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ee)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Xn();const r=ee(this)[e].apply(this,n);return er(),r}}),t}function po(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Mh:vc:e?bc:wc).get(r))return r;const o=q(r);if(!t&&o&&Z(ha,s))return Reflect.get(ha,s,i);const a=Reflect.get(r,s,i);return(lo(s)?mc.has(s):gh(s))||(t||qe(r,"get",s),e)?a:Oe(a)?o&&uo(s)?a:a.value:de(a)?t?Ic(a):Ur(a):a}}const bh=yc(),vh=yc(!0);function yc(t=!1){return function(n,r,s,i){let o=n[r];if(qn(o)&&Oe(o)&&!Oe(s))return!1;if(!t&&(!vs(s)&&!qn(s)&&(o=ee(o),s=ee(s)),!q(n)&&Oe(o)&&!Oe(s)))return o.value=s,!0;const a=q(n)&&uo(r)?Number(r)<n.length:Z(n,r),l=Reflect.set(n,r,s,i);return n===ee(i)&&(a?br(s,o)&&Nt(n,"set",r,s):Nt(n,"add",r,s)),l}}function Ih(t,e){const n=Z(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Nt(t,"delete",e,void 0),r}function Eh(t,e){const n=Reflect.has(t,e);return(!lo(e)||!mc.has(e))&&qe(t,"has",e),n}function kh(t){return qe(t,"iterate",q(t)?"length":pn),Reflect.ownKeys(t)}const _c={get:mh,set:bh,deleteProperty:Ih,has:Eh,ownKeys:kh},Th={get:_h,set(t,e){return!0},deleteProperty(t,e){return!0}},Sh=Me({},_c,{get:yh,set:vh}),go=t=>t,Ws=t=>Reflect.getPrototypeOf(t);function Jr(t,e,n=!1,r=!1){t=t.__v_raw;const s=ee(t),i=ee(e);n||(e!==i&&qe(s,"get",e),qe(s,"get",i));const{has:o}=Ws(s),a=r?go:n?_o:vr;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Qr(t,e=!1){const n=this.__v_raw,r=ee(n),s=ee(t);return e||(t!==s&&qe(r,"has",t),qe(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Zr(t,e=!1){return t=t.__v_raw,!e&&qe(ee(t),"iterate",pn),Reflect.get(t,"size",t)}function da(t){t=ee(t);const e=ee(this);return Ws(e).has.call(e,t)||(e.add(t),Nt(e,"add",t,t)),this}function pa(t,e){e=ee(e);const n=ee(this),{has:r,get:s}=Ws(n);let i=r.call(n,t);i||(t=ee(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?br(e,o)&&Nt(n,"set",t,e):Nt(n,"add",t,e),this}function ga(t){const e=ee(this),{has:n,get:r}=Ws(e);let s=n.call(e,t);s||(t=ee(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Nt(e,"delete",t,void 0),i}function ma(){const t=ee(this),e=t.size!==0,n=t.clear();return e&&Nt(t,"clear",void 0,void 0),n}function Xr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ee(o),l=e?go:t?_o:vr;return!t&&qe(a,"iterate",pn),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function es(t,e,n){return function(...r){const s=this.__v_raw,i=ee(s),o=$n(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?go:e?_o:vr;return!e&&qe(i,"iterate",l?Ni:pn),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Vt(t){return function(...e){return t==="delete"?!1:this}}function Ah(){const t={get(i){return Jr(this,i)},get size(){return Zr(this)},has:Qr,add:da,set:pa,delete:ga,clear:ma,forEach:Xr(!1,!1)},e={get(i){return Jr(this,i,!1,!0)},get size(){return Zr(this)},has:Qr,add:da,set:pa,delete:ga,clear:ma,forEach:Xr(!1,!0)},n={get(i){return Jr(this,i,!0)},get size(){return Zr(this,!0)},has(i){return Qr.call(this,i,!0)},add:Vt("add"),set:Vt("set"),delete:Vt("delete"),clear:Vt("clear"),forEach:Xr(!0,!1)},r={get(i){return Jr(this,i,!0,!0)},get size(){return Zr(this,!0)},has(i){return Qr.call(this,i,!0)},add:Vt("add"),set:Vt("set"),delete:Vt("delete"),clear:Vt("clear"),forEach:Xr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=es(i,!1,!1),n[i]=es(i,!0,!1),e[i]=es(i,!1,!0),r[i]=es(i,!0,!0)}),[t,n,e,r]}const[Rh,xh,Ch,Oh]=Ah();function mo(t,e){const n=e?t?Oh:Ch:t?xh:Rh;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Z(n,s)&&s in r?n:r,s,i)}const Ph={get:mo(!1,!1)},Nh={get:mo(!1,!0)},Dh={get:mo(!0,!1)},wc=new WeakMap,bc=new WeakMap,vc=new WeakMap,Mh=new WeakMap;function Lh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $h(t){return t.__v_skip||!Object.isExtensible(t)?0:Lh(ah(t))}function Ur(t){return qn(t)?t:yo(t,!1,_c,Ph,wc)}function Fh(t){return yo(t,!1,Sh,Nh,bc)}function Ic(t){return yo(t,!0,Th,Dh,vc)}function yo(t,e,n,r,s){if(!de(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=$h(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Fn(t){return qn(t)?Fn(t.__v_raw):!!(t&&t.__v_isReactive)}function qn(t){return!!(t&&t.__v_isReadonly)}function vs(t){return!!(t&&t.__v_isShallow)}function Ec(t){return Fn(t)||qn(t)}function ee(t){const e=t&&t.__v_raw;return e?ee(e):t}function kc(t){return ws(t,"__v_skip",!0),t}const vr=t=>de(t)?Ur(t):t,_o=t=>de(t)?Ic(t):t;function Tc(t){Xt&&rt&&(t=ee(t),gc(t.dep||(t.dep=fo())))}function Sc(t,e){t=ee(t),t.dep&&Di(t.dep)}function Oe(t){return!!(t&&t.__v_isRef===!0)}function Ir(t){return Ac(t,!1)}function Uh(t){return Ac(t,!0)}function Ac(t,e){return Oe(t)?t:new Bh(t,e)}class Bh{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ee(e),this._value=n?e:vr(e)}get value(){return Tc(this),this._value}set value(e){const n=this.__v_isShallow||vs(e)||qn(e);e=n?e:ee(e),br(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:vr(e),Sc(this))}}function gn(t){return Oe(t)?t.value:t}const Vh={get:(t,e,n)=>gn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Oe(s)&&!Oe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Rc(t){return Fn(t)?t:new Proxy(t,Vh)}var xc;class jh{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[xc]=!1,this._dirty=!0,this.effect=new ho(e,()=>{this._dirty||(this._dirty=!0,Sc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ee(this);return Tc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}xc="__v_isReadonly";function zh(t,e,n=!1){let r,s;const i=H(t);return i?(r=t,s=st):(r=t.get,s=t.set),new jh(r,s,i||!s,n)}function en(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Br(i,e,n)}return s}function it(t,e,n,r){if(H(t)){const i=en(t,e,n,r);return i&&co(i)&&i.catch(o=>{Br(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(it(t[i],e,n,r));return s}function Br(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){en(l,null,10,[t,o,a]);return}}qh(t,n,s,r)}function qh(t,e,n,r=!0){console.error(t)}let Er=!1,Mi=!1;const Ce=[];let yt=0;const Un=[];let Rt=null,un=0;const Cc=Promise.resolve();let wo=null;function Oc(t){const e=wo||Cc;return t?e.then(this?t.bind(this):t):e}function Hh(t){let e=yt+1,n=Ce.length;for(;e<n;){const r=e+n>>>1;kr(Ce[r])<t?e=r+1:n=r}return e}function bo(t){(!Ce.length||!Ce.includes(t,Er&&t.allowRecurse?yt+1:yt))&&(t.id==null?Ce.push(t):Ce.splice(Hh(t.id),0,t),Pc())}function Pc(){!Er&&!Mi&&(Mi=!0,wo=Cc.then(Mc))}function Wh(t){const e=Ce.indexOf(t);e>yt&&Ce.splice(e,1)}function Nc(t){q(t)?Un.push(...t):(!Rt||!Rt.includes(t,t.allowRecurse?un+1:un))&&Un.push(t),Pc()}function ya(t,e=Er?yt+1:0){for(;e<Ce.length;e++){const n=Ce[e];n&&n.pre&&(Ce.splice(e,1),e--,n())}}function Dc(t){if(Un.length){const e=[...new Set(Un)];if(Un.length=0,Rt){Rt.push(...e);return}for(Rt=e,Rt.sort((n,r)=>kr(n)-kr(r)),un=0;un<Rt.length;un++)Rt[un]();Rt=null,un=0}}const kr=t=>t.id==null?1/0:t.id,Kh=(t,e)=>{const n=kr(t)-kr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Mc(t){Mi=!1,Er=!0,Ce.sort(Kh);const e=st;try{for(yt=0;yt<Ce.length;yt++){const n=Ce[yt];n&&n.active!==!1&&en(n,null,14)}}finally{yt=0,Ce.length=0,Dc(),Er=!1,wo=null,(Ce.length||Un.length)&&Mc()}}function Gh(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||le;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=r[u]||le;d&&(s=n.map(p=>p.trim())),f&&(s=n.map(bs))}let a,l=r[a=pi(e)]||r[a=pi(It(e))];!l&&i&&(l=r[a=pi(Zn(e))]),l&&it(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,it(c,t,6,s)}}function Lc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!H(t)){const l=c=>{const u=Lc(c,e,!0);u&&(a=!0,Me(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(de(t)&&r.set(t,null),null):(q(i)?i.forEach(l=>o[l]=null):Me(o,i),de(t)&&r.set(t,o),o)}function Ks(t,e){return!t||!js(e)?!1:(e=e.slice(2).replace(/Once$/,""),Z(t,e[0].toLowerCase()+e.slice(1))||Z(t,Zn(e))||Z(t,e))}let Ye=null,Gs=null;function Is(t){const e=Ye;return Ye=t,Gs=t&&t.type.__scopeId||null,e}function vo(t){Gs=t}function Io(){Gs=null}function mt(t,e=Ye,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ca(-1);const i=Is(e),o=t(...s);return Is(i),r._d&&Ca(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function gi(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:d,setupState:p,ctx:w,inheritAttrs:O}=t;let T,I;const _=Is(t);try{if(n.shapeFlag&4){const B=s||r;T=tt(u.call(B,B,f,i,p,d,w)),I=l}else{const B=e;T=tt(B.length>1?B(i,{attrs:l,slots:a,emit:c}):B(i,null)),I=e.props?l:Jh(l)}}catch(B){ur.length=0,Br(B,t,1),T=me(Dt)}let C=T;if(I&&O!==!1){const B=Object.keys(I),{shapeFlag:K}=C;B.length&&K&7&&(o&&B.some(oo)&&(I=Qh(I,o)),C=Wn(C,I))}return n.dirs&&(C=Wn(C),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),T=C,Is(_),T}function Yh(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(Ts(r)){if(r.type!==Dt||r.children==="v-if"){if(e)return;e=r}}else return}return e}const Jh=t=>{let e;for(const n in t)(n==="class"||n==="style"||js(n))&&((e||(e={}))[n]=t[n]);return e},Qh=(t,e)=>{const n={};for(const r in t)(!oo(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Zh(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?_a(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==r[d]&&!Ks(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?_a(r,o,c):!0:!!o;return!1}function _a(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ks(n,i))return!0}return!1}function Eo({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Xh=t=>t.__isSuspense,ed={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,l,c){t==null?nd(e,n,r,s,i,o,a,l,c):rd(t,e,n,r,s,o,a,l,c)},hydrate:sd,create:ko,normalize:id},td=ed;function Tr(t,e){const n=t.props&&t.props[e];H(n)&&n()}function nd(t,e,n,r,s,i,o,a,l){const{p:c,o:{createElement:u}}=l,f=u("div"),d=t.suspense=ko(t,s,r,e,f,n,i,o,a,l);c(null,d.pendingBranch=t.ssContent,f,null,r,d,i,o),d.deps>0?(Tr(t,"onPending"),Tr(t,"onFallback"),c(null,t.ssFallback,e,n,r,null,i,o),Bn(d,t.ssFallback)):d.resolve()}function rd(t,e,n,r,s,i,o,a,{p:l,um:c,o:{createElement:u}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const d=e.ssContent,p=e.ssFallback,{activeBranch:w,pendingBranch:O,isInFallback:T,isHydrating:I}=f;if(O)f.pendingBranch=d,Kt(d,O)?(l(O,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():T&&(l(w,p,n,r,s,null,i,o,a),Bn(f,p))):(f.pendingId++,I?(f.isHydrating=!1,f.activeBranch=O):c(O,s,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),T?(l(null,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():(l(w,p,n,r,s,null,i,o,a),Bn(f,p))):w&&Kt(d,w)?(l(w,d,n,r,s,f,i,o,a),f.resolve(!0)):(l(null,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0&&f.resolve()));else if(w&&Kt(d,w))l(w,d,n,r,s,f,i,o,a),Bn(f,d);else if(Tr(e,"onPending"),f.pendingBranch=d,f.pendingId++,l(null,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0)f.resolve();else{const{timeout:_,pendingId:C}=f;_>0?setTimeout(()=>{f.pendingId===C&&f.fallback(p)},_):_===0&&f.fallback(p)}}function ko(t,e,n,r,s,i,o,a,l,c,u=!1){const{p:f,m:d,um:p,n:w,o:{parentNode:O,remove:T}}=c,I=bs(t.props&&t.props.timeout),_={vnode:t,parent:e,parentComponent:n,isSVG:o,container:r,hiddenContainer:s,anchor:i,deps:0,pendingId:0,timeout:typeof I=="number"?I:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(C=!1){const{vnode:B,activeBranch:K,pendingBranch:G,pendingId:se,effects:pe,parentComponent:ge,container:xe}=_;if(_.isHydrating)_.isHydrating=!1;else if(!C){const Tt=K&&G.transition&&G.transition.mode==="out-in";Tt&&(K.transition.afterLeave=()=>{se===_.pendingId&&d(G,xe,ft,0)});let{anchor:ft}=_;K&&(ft=w(K),p(K,ge,_,!0)),Tt||d(G,xe,ft,0)}Bn(_,G),_.pendingBranch=null,_.isInFallback=!1;let Ie=_.parent,Le=!1;for(;Ie;){if(Ie.pendingBranch){Ie.effects.push(...pe),Le=!0;break}Ie=Ie.parent}Le||Nc(pe),_.effects=[],Tr(B,"onResolve")},fallback(C){if(!_.pendingBranch)return;const{vnode:B,activeBranch:K,parentComponent:G,container:se,isSVG:pe}=_;Tr(B,"onFallback");const ge=w(K),xe=()=>{!_.isInFallback||(f(null,C,se,ge,G,null,pe,a,l),Bn(_,C))},Ie=C.transition&&C.transition.mode==="out-in";Ie&&(K.transition.afterLeave=xe),_.isInFallback=!0,p(K,G,null,!0),Ie||xe()},move(C,B,K){_.activeBranch&&d(_.activeBranch,C,B,K),_.container=C},next(){return _.activeBranch&&w(_.activeBranch)},registerDep(C,B){const K=!!_.pendingBranch;K&&_.deps++;const G=C.vnode.el;C.asyncDep.catch(se=>{Br(se,C,0)}).then(se=>{if(C.isUnmounted||_.isUnmounted||_.pendingId!==C.suspenseId)return;C.asyncResolved=!0;const{vnode:pe}=C;Vi(C,se,!1),G&&(pe.el=G);const ge=!G&&C.subTree.el;B(C,pe,O(G||C.subTree.el),G?null:w(C.subTree),_,o,l),ge&&T(ge),Eo(C,pe.el),K&&--_.deps===0&&_.resolve()})},unmount(C,B){_.isUnmounted=!0,_.activeBranch&&p(_.activeBranch,n,C,B),_.pendingBranch&&p(_.pendingBranch,n,C,B)}};return _}function sd(t,e,n,r,s,i,o,a,l){const c=e.suspense=ko(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,i,o);return c.deps===0&&c.resolve(),u}function id(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=wa(r?n.default:n),t.ssFallback=r?wa(n.fallback):me(Dt)}function wa(t){let e;if(H(t)){const n=Hn&&t._c;n&&(t._d=!1,De()),t=t(),n&&(t._d=!0,e=Je,Zc())}return q(t)&&(t=Yh(t)),t=tt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function od(t,e){e&&e.pendingBranch?q(t)?e.effects.push(...t):e.effects.push(t):Nc(t)}function Bn(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,s=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=s,Eo(r,s))}function cs(t,e){if(Te){let n=Te.provides;const r=Te.parent&&Te.parent.provides;r===n&&(n=Te.provides=Object.create(r)),n[t]=e}}function Ot(t,e,n=!1){const r=Te||Ye;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&H(e)?e.call(r.proxy):e}}const ba={};function us(t,e,n){return $c(t,e,n)}function $c(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=le){const a=Te;let l,c=!1,u=!1;if(Oe(t)?(l=()=>t.value,c=vs(t)):Fn(t)?(l=()=>t,r=!0):q(t)?(u=!0,c=t.some(I=>Fn(I)||vs(I)),l=()=>t.map(I=>{if(Oe(I))return I.value;if(Fn(I))return hn(I);if(H(I))return en(I,a,2)})):H(t)?e?l=()=>en(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),it(t,a,3,[d])}:l=st,e&&r){const I=l;l=()=>hn(I())}let f,d=I=>{f=T.onStop=()=>{en(I,a,4)}};if(Sr)return d=st,e?n&&it(e,a,3,[l(),u?[]:void 0,d]):l(),st;let p=u?[]:ba;const w=()=>{if(!!T.active)if(e){const I=T.run();(r||c||(u?I.some((_,C)=>br(_,p[C])):br(I,p)))&&(f&&f(),it(e,a,3,[I,p===ba?void 0:p,d]),p=I)}else T.run()};w.allowRecurse=!!e;let O;s==="sync"?O=w:s==="post"?O=()=>$e(w,a&&a.suspense):(w.pre=!0,a&&(w.id=a.uid),O=()=>bo(w));const T=new ho(l,O);return e?n?w():p=T.run():s==="post"?$e(T.run.bind(T),a&&a.suspense):T.run(),()=>{T.stop(),a&&a.scope&&ao(a.scope.effects,T)}}function ad(t,e,n){const r=this.proxy,s=Se(t)?t.includes(".")?Fc(r,t):()=>r[t]:t.bind(r,r);let i;H(e)?i=e:(i=e.handler,n=e);const o=Te;sn(this);const a=$c(s,i.bind(r),n);return o?sn(o):tn(),a}function Fc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function hn(t,e){if(!de(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Oe(t))hn(t.value,e);else if(q(t))for(let n=0;n<t.length;n++)hn(t[n],e);else if(cc(t)||$n(t))t.forEach(n=>{hn(n,e)});else if(fc(t))for(const n in t)hn(t[n],e);return t}function Uc(t){return H(t)?{setup:t,name:t.name}:t}const fs=t=>!!t.type.__asyncLoader,Bc=t=>t.type.__isKeepAlive;function ld(t,e){Vc(t,"a",e)}function cd(t,e){Vc(t,"da",e)}function Vc(t,e,n=Te){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ys(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Bc(s.parent.vnode)&&ud(r,e,n,s),s=s.parent}}function ud(t,e,n,r){const s=Ys(e,t,r,!0);jc(()=>{ao(r[e],s)},n)}function Ys(t,e,n=Te,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Xn(),sn(n);const a=it(e,n,t,o);return tn(),er(),a});return r?s.unshift(i):s.push(i),i}}const Ut=t=>(e,n=Te)=>(!Sr||t==="sp")&&Ys(t,e,n),fd=Ut("bm"),hd=Ut("m"),dd=Ut("bu"),pd=Ut("u"),gd=Ut("bum"),jc=Ut("um"),md=Ut("sp"),yd=Ut("rtg"),_d=Ut("rtc");function wd(t,e=Te){Ys("ec",t,e)}function z0(t,e){const n=Ye;if(n===null)return t;const r=Qs(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=le]=e[i];H(o)&&(o={mounted:o,updated:o}),o.deep&&hn(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function on(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Xn(),it(l,n,8,[t.el,a,t,e]),er())}}const zc="components";function va(t,e){return vd(zc,t,!0,e)||t}const bd=Symbol();function vd(t,e,n=!0,r=!1){const s=Ye||Te;if(s){const i=s.type;if(t===zc){const a=Qd(i,!1);if(a&&(a===e||a===It(e)||a===Hs(It(e))))return i}const o=Ia(s[t]||i[t],e)||Ia(s.appContext[t],e);return!o&&r?i:o}}function Ia(t,e){return t&&(t[e]||t[It(e)]||t[Hs(It(e))])}function Ea(t,e,n,r){let s;const i=n&&n[r];if(q(t)||Se(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(de(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Li=t=>t?tu(t)?Qs(t)||t.proxy:Li(t.parent):null,Es=Me(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Li(t.parent),$root:t=>Li(t.root),$emit:t=>t.emit,$options:t=>To(t),$forceUpdate:t=>t.f||(t.f=()=>bo(t.update)),$nextTick:t=>t.n||(t.n=Oc.bind(t.proxy)),$watch:t=>ad.bind(t)}),Id={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==le&&Z(r,e))return o[e]=1,r[e];if(s!==le&&Z(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&Z(c,e))return o[e]=3,i[e];if(n!==le&&Z(n,e))return o[e]=4,n[e];$i&&(o[e]=0)}}const u=Es[e];let f,d;if(u)return e==="$attrs"&&qe(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==le&&Z(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Z(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==le&&Z(s,e)?(s[e]=n,!0):r!==le&&Z(r,e)?(r[e]=n,!0):Z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==le&&Z(t,o)||e!==le&&Z(e,o)||(a=i[0])&&Z(a,o)||Z(r,o)||Z(Es,o)||Z(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let $i=!0;function Ed(t){const e=To(t),n=t.proxy,r=t.ctx;$i=!1,e.beforeCreate&&ka(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:w,activated:O,deactivated:T,beforeDestroy:I,beforeUnmount:_,destroyed:C,unmounted:B,render:K,renderTracked:G,renderTriggered:se,errorCaptured:pe,serverPrefetch:ge,expose:xe,inheritAttrs:Ie,components:Le,directives:Tt,filters:ft}=e;if(c&&kd(c,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ue in o){const ie=o[ue];H(ie)&&(r[ue]=ie.bind(n))}if(s){const ue=s.call(n,n);de(ue)&&(t.data=Ur(ue))}if($i=!0,i)for(const ue in i){const ie=i[ue],Ue=H(ie)?ie.bind(n,n):H(ie.get)?ie.get.bind(n,n):st,xn=!H(ie)&&H(ie.set)?ie.set.bind(n):st,St=Ge({get:Ue,set:xn});Object.defineProperty(r,ue,{enumerable:!0,configurable:!0,get:()=>St.value,set:ht=>St.value=ht})}if(a)for(const ue in a)qc(a[ue],r,n,ue);if(l){const ue=H(l)?l.call(n):l;Reflect.ownKeys(ue).forEach(ie=>{cs(ie,ue[ie])})}u&&ka(u,t,"c");function we(ue,ie){q(ie)?ie.forEach(Ue=>ue(Ue.bind(n))):ie&&ue(ie.bind(n))}if(we(fd,f),we(hd,d),we(dd,p),we(pd,w),we(ld,O),we(cd,T),we(wd,pe),we(_d,G),we(yd,se),we(gd,_),we(jc,B),we(md,ge),q(xe))if(xe.length){const ue=t.exposed||(t.exposed={});xe.forEach(ie=>{Object.defineProperty(ue,ie,{get:()=>n[ie],set:Ue=>n[ie]=Ue})})}else t.exposed||(t.exposed={});K&&t.render===st&&(t.render=K),Ie!=null&&(t.inheritAttrs=Ie),Le&&(t.components=Le),Tt&&(t.directives=Tt)}function kd(t,e,n=st,r=!1){q(t)&&(t=Fi(t));for(const s in t){const i=t[s];let o;de(i)?"default"in i?o=Ot(i.from||s,i.default,!0):o=Ot(i.from||s):o=Ot(i),Oe(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function ka(t,e,n){it(q(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function qc(t,e,n,r){const s=r.includes(".")?Fc(n,r):()=>n[r];if(Se(t)){const i=e[t];H(i)&&us(s,i)}else if(H(t))us(s,t.bind(n));else if(de(t))if(q(t))t.forEach(i=>qc(i,e,n,r));else{const i=H(t.handler)?t.handler.bind(n):e[t.handler];H(i)&&us(s,i,t)}}function To(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>ks(l,c,o,!0)),ks(l,e,o)),de(e)&&i.set(e,l),l}function ks(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ks(t,i,n,!0),s&&s.forEach(o=>ks(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Td[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Td={data:Ta,props:ln,emits:ln,methods:ln,computed:ln,beforeCreate:Ne,created:Ne,beforeMount:Ne,mounted:Ne,beforeUpdate:Ne,updated:Ne,beforeDestroy:Ne,beforeUnmount:Ne,destroyed:Ne,unmounted:Ne,activated:Ne,deactivated:Ne,errorCaptured:Ne,serverPrefetch:Ne,components:ln,directives:ln,watch:Ad,provide:Ta,inject:Sd};function Ta(t,e){return e?t?function(){return Me(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function Sd(t,e){return ln(Fi(t),Fi(e))}function Fi(t){if(q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ne(t,e){return t?[...new Set([].concat(t,e))]:e}function ln(t,e){return t?Me(Me(Object.create(null),t),e):e}function Ad(t,e){if(!t)return e;if(!e)return t;const n=Me(Object.create(null),t);for(const r in e)n[r]=Ne(t[r],e[r]);return n}function Rd(t,e,n,r=!1){const s={},i={};ws(i,Js,1),t.propsDefaults=Object.create(null),Hc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Fh(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function xd(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ee(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Ks(t.emitsOptions,d))continue;const p=e[d];if(l)if(Z(i,d))p!==i[d]&&(i[d]=p,c=!0);else{const w=It(d);s[w]=Ui(l,a,w,p,t,!1)}else p!==i[d]&&(i[d]=p,c=!0)}}}else{Hc(t,e,s,i)&&(c=!0);let u;for(const f in a)(!e||!Z(e,f)&&((u=Zn(f))===f||!Z(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Ui(l,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!Z(e,f)&&!0)&&(delete i[f],c=!0)}c&&Nt(t,"set","$attrs")}function Hc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(as(l))continue;const c=e[l];let u;s&&Z(s,u=It(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:Ks(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=ee(n),c=a||le;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Ui(s,l,f,c[f],t,!Z(c,f))}}return o}function Ui(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Z(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&H(l)){const{propsDefaults:c}=s;n in c?r=c[n]:(sn(s),r=c[n]=l.call(null,e),tn())}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Zn(n))&&(r=!0))}return r}function Wc(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!H(t)){const u=f=>{l=!0;const[d,p]=Wc(f,e,!0);Me(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return de(t)&&r.set(t,Ln),Ln;if(q(i))for(let u=0;u<i.length;u++){const f=It(i[u]);Sa(f)&&(o[f]=le)}else if(i)for(const u in i){const f=It(u);if(Sa(f)){const d=i[u],p=o[f]=q(d)||H(d)?{type:d}:d;if(p){const w=xa(Boolean,p.type),O=xa(String,p.type);p[0]=w>-1,p[1]=O<0||w<O,(w>-1||Z(p,"default"))&&a.push(f)}}}const c=[o,a];return de(t)&&r.set(t,c),c}function Sa(t){return t[0]!=="$"}function Aa(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Ra(t,e){return Aa(t)===Aa(e)}function xa(t,e){return q(e)?e.findIndex(n=>Ra(n,t)):H(e)&&Ra(e,t)?0:-1}const Kc=t=>t[0]==="_"||t==="$stable",So=t=>q(t)?t.map(tt):[tt(t)],Cd=(t,e,n)=>{if(e._n)return e;const r=mt((...s)=>So(e(...s)),n);return r._c=!1,r},Gc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Kc(s))continue;const i=t[s];if(H(i))e[s]=Cd(s,i,r);else if(i!=null){const o=So(i);e[s]=()=>o}}},Yc=(t,e)=>{const n=So(e);t.slots.default=()=>n},Od=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ee(e),ws(e,"_",n)):Gc(e,t.slots={})}else t.slots={},e&&Yc(t,e);ws(t.slots,Js,1)},Pd=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=le;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Me(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Gc(e,s)),o=e}else e&&(Yc(t,e),o={default:1});if(i)for(const a in s)!Kc(a)&&!(a in o)&&delete s[a]};function Jc(){return{app:null,config:{isNativeTag:sh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nd=0;function Dd(t,e){return function(r,s=null){H(r)||(r=Object.assign({},r)),s!=null&&!de(s)&&(s=null);const i=Jc(),o=new Set;let a=!1;const l=i.app={_uid:Nd++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:ep,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&H(c.install)?(o.add(c),c.install(l,...u)):H(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,f){if(!a){const d=me(r,s);return d.appContext=i,u&&e?e(d,c):t(d,c,f),a=!0,l._container=c,c.__vue_app__=l,Qs(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l}};return l}}function Bi(t,e,n,r,s=!1){if(q(t)){t.forEach((d,p)=>Bi(d,e&&(q(e)?e[p]:e),n,r,s));return}if(fs(r)&&!s)return;const i=r.shapeFlag&4?Qs(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===le?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(Se(c)?(u[c]=null,Z(f,c)&&(f[c]=null)):Oe(c)&&(c.value=null)),H(l))en(l,a,12,[o,u]);else{const d=Se(l),p=Oe(l);if(d||p){const w=()=>{if(t.f){const O=d?u[l]:l.value;s?q(O)&&ao(O,i):q(O)?O.includes(i)||O.push(i):d?(u[l]=[i],Z(f,l)&&(f[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,Z(f,l)&&(f[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(w.id=-1,$e(w,n)):w()}}}const $e=od;function Md(t){return Ld(t)}function Ld(t,e){const n=uh();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=st,cloneNode:w,insertStaticContent:O}=t,T=(h,g,m,v=null,b=null,S=null,x=!1,k=null,A=!!g.dynamicChildren)=>{if(h===g)return;h&&!Kt(h,g)&&(v=M(h),He(h,b,S,!0),h=null),g.patchFlag===-2&&(A=!1,g.dynamicChildren=null);const{type:E,ref:L,shapeFlag:N}=g;switch(E){case Ao:I(h,g,m,v);break;case Dt:_(h,g,m,v);break;case hs:h==null&&C(g,m,v,x);break;case Ke:Tt(h,g,m,v,b,S,x,k,A);break;default:N&1?G(h,g,m,v,b,S,x,k,A):N&6?ft(h,g,m,v,b,S,x,k,A):(N&64||N&128)&&E.process(h,g,m,v,b,S,x,k,A,fe)}L!=null&&b&&Bi(L,h&&h.ref,S,g||h,!g)},I=(h,g,m,v)=>{if(h==null)r(g.el=a(g.children),m,v);else{const b=g.el=h.el;g.children!==h.children&&c(b,g.children)}},_=(h,g,m,v)=>{h==null?r(g.el=l(g.children||""),m,v):g.el=h.el},C=(h,g,m,v)=>{[h.el,h.anchor]=O(h.children,g,m,v,h.el,h.anchor)},B=({el:h,anchor:g},m,v)=>{let b;for(;h&&h!==g;)b=d(h),r(h,m,v),h=b;r(g,m,v)},K=({el:h,anchor:g})=>{let m;for(;h&&h!==g;)m=d(h),s(h),h=m;s(g)},G=(h,g,m,v,b,S,x,k,A)=>{x=x||g.type==="svg",h==null?se(g,m,v,b,S,x,k,A):xe(h,g,b,S,x,k,A)},se=(h,g,m,v,b,S,x,k)=>{let A,E;const{type:L,props:N,shapeFlag:$,transition:z,patchFlag:X,dirs:oe}=h;if(h.el&&w!==void 0&&X===-1)A=h.el=w(h.el);else{if(A=h.el=o(h.type,S,N&&N.is,N),$&8?u(A,h.children):$&16&&ge(h.children,A,null,v,b,S&&L!=="foreignObject",x,k),oe&&on(h,null,v,"created"),N){for(const he in N)he!=="value"&&!as(he)&&i(A,he,null,N[he],S,h.children,v,b,R);"value"in N&&i(A,"value",null,N.value),(E=N.onVnodeBeforeMount)&&pt(E,v,h)}pe(A,h,h.scopeId,x,v)}oe&&on(h,null,v,"beforeMount");const ae=(!b||b&&!b.pendingBranch)&&z&&!z.persisted;ae&&z.beforeEnter(A),r(A,g,m),((E=N&&N.onVnodeMounted)||ae||oe)&&$e(()=>{E&&pt(E,v,h),ae&&z.enter(A),oe&&on(h,null,v,"mounted")},b)},pe=(h,g,m,v,b)=>{if(m&&p(h,m),v)for(let S=0;S<v.length;S++)p(h,v[S]);if(b){let S=b.subTree;if(g===S){const x=b.vnode;pe(h,x,x.scopeId,x.slotScopeIds,b.parent)}}},ge=(h,g,m,v,b,S,x,k,A=0)=>{for(let E=A;E<h.length;E++){const L=h[E]=k?qt(h[E]):tt(h[E]);T(null,L,g,m,v,b,S,x,k)}},xe=(h,g,m,v,b,S,x)=>{const k=g.el=h.el;let{patchFlag:A,dynamicChildren:E,dirs:L}=g;A|=h.patchFlag&16;const N=h.props||le,$=g.props||le;let z;m&&an(m,!1),(z=$.onVnodeBeforeUpdate)&&pt(z,m,g,h),L&&on(g,h,m,"beforeUpdate"),m&&an(m,!0);const X=b&&g.type!=="foreignObject";if(E?Ie(h.dynamicChildren,E,k,m,v,X,S):x||Ue(h,g,k,null,m,v,X,S,!1),A>0){if(A&16)Le(k,g,N,$,m,v,b);else if(A&2&&N.class!==$.class&&i(k,"class",null,$.class,b),A&4&&i(k,"style",N.style,$.style,b),A&8){const oe=g.dynamicProps;for(let ae=0;ae<oe.length;ae++){const he=oe[ae],et=N[he],Cn=$[he];(Cn!==et||he==="value")&&i(k,he,et,Cn,b,h.children,m,v,R)}}A&1&&h.children!==g.children&&u(k,g.children)}else!x&&E==null&&Le(k,g,N,$,m,v,b);((z=$.onVnodeUpdated)||L)&&$e(()=>{z&&pt(z,m,g,h),L&&on(g,h,m,"updated")},v)},Ie=(h,g,m,v,b,S,x)=>{for(let k=0;k<g.length;k++){const A=h[k],E=g[k],L=A.el&&(A.type===Ke||!Kt(A,E)||A.shapeFlag&70)?f(A.el):m;T(A,E,L,null,v,b,S,x,!0)}},Le=(h,g,m,v,b,S,x)=>{if(m!==v){for(const k in v){if(as(k))continue;const A=v[k],E=m[k];A!==E&&k!=="value"&&i(h,k,E,A,x,g.children,b,S,R)}if(m!==le)for(const k in m)!as(k)&&!(k in v)&&i(h,k,m[k],null,x,g.children,b,S,R);"value"in v&&i(h,"value",m.value,v.value)}},Tt=(h,g,m,v,b,S,x,k,A)=>{const E=g.el=h?h.el:a(""),L=g.anchor=h?h.anchor:a("");let{patchFlag:N,dynamicChildren:$,slotScopeIds:z}=g;z&&(k=k?k.concat(z):z),h==null?(r(E,m,v),r(L,m,v),ge(g.children,m,L,b,S,x,k,A)):N>0&&N&64&&$&&h.dynamicChildren?(Ie(h.dynamicChildren,$,m,b,S,x,k),(g.key!=null||b&&g===b.subTree)&&Qc(h,g,!0)):Ue(h,g,m,L,b,S,x,k,A)},ft=(h,g,m,v,b,S,x,k,A)=>{g.slotScopeIds=k,h==null?g.shapeFlag&512?b.ctx.activate(g,m,v,x,A):Rn(g,m,v,b,S,x,A):we(h,g,A)},Rn=(h,g,m,v,b,S,x)=>{const k=h.component=Hd(h,v,b);if(Bc(h)&&(k.ctx.renderer=fe),Kd(k),k.asyncDep){if(b&&b.registerDep(k,ue),!h.el){const A=k.subTree=me(Dt);_(null,A,g,m)}return}ue(k,h,g,m,b,S,x)},we=(h,g,m)=>{const v=g.component=h.component;if(Zh(h,g,m))if(v.asyncDep&&!v.asyncResolved){ie(v,g,m);return}else v.next=g,Wh(v.update),v.update();else g.el=h.el,v.vnode=g},ue=(h,g,m,v,b,S,x)=>{const k=()=>{if(h.isMounted){let{next:L,bu:N,u:$,parent:z,vnode:X}=h,oe=L,ae;an(h,!1),L?(L.el=X.el,ie(h,L,x)):L=X,N&&ls(N),(ae=L.props&&L.props.onVnodeBeforeUpdate)&&pt(ae,z,L,X),an(h,!0);const he=gi(h),et=h.subTree;h.subTree=he,T(et,he,f(et.el),M(et),h,b,S),L.el=he.el,oe===null&&Eo(h,he.el),$&&$e($,b),(ae=L.props&&L.props.onVnodeUpdated)&&$e(()=>pt(ae,z,L,X),b)}else{let L;const{el:N,props:$}=g,{bm:z,m:X,parent:oe}=h,ae=fs(g);if(an(h,!1),z&&ls(z),!ae&&(L=$&&$.onVnodeBeforeMount)&&pt(L,oe,g),an(h,!0),N&&Y){const he=()=>{h.subTree=gi(h),Y(N,h.subTree,h,b,null)};ae?g.type.__asyncLoader().then(()=>!h.isUnmounted&&he()):he()}else{const he=h.subTree=gi(h);T(null,he,m,v,h,b,S),g.el=he.el}if(X&&$e(X,b),!ae&&(L=$&&$.onVnodeMounted)){const he=g;$e(()=>pt(L,oe,he),b)}(g.shapeFlag&256||oe&&fs(oe.vnode)&&oe.vnode.shapeFlag&256)&&h.a&&$e(h.a,b),h.isMounted=!0,g=m=v=null}},A=h.effect=new ho(k,()=>bo(E),h.scope),E=h.update=()=>A.run();E.id=h.uid,an(h,!0),E()},ie=(h,g,m)=>{g.component=h;const v=h.vnode.props;h.vnode=g,h.next=null,xd(h,g.props,v,m),Pd(h,g.children,m),Xn(),ya(),er()},Ue=(h,g,m,v,b,S,x,k,A=!1)=>{const E=h&&h.children,L=h?h.shapeFlag:0,N=g.children,{patchFlag:$,shapeFlag:z}=g;if($>0){if($&128){St(E,N,m,v,b,S,x,k,A);return}else if($&256){xn(E,N,m,v,b,S,x,k,A);return}}z&8?(L&16&&R(E,b,S),N!==E&&u(m,N)):L&16?z&16?St(E,N,m,v,b,S,x,k,A):R(E,b,S,!0):(L&8&&u(m,""),z&16&&ge(N,m,v,b,S,x,k,A))},xn=(h,g,m,v,b,S,x,k,A)=>{h=h||Ln,g=g||Ln;const E=h.length,L=g.length,N=Math.min(E,L);let $;for($=0;$<N;$++){const z=g[$]=A?qt(g[$]):tt(g[$]);T(h[$],z,m,null,b,S,x,k,A)}E>L?R(h,b,S,!0,!1,N):ge(g,m,v,b,S,x,k,A,N)},St=(h,g,m,v,b,S,x,k,A)=>{let E=0;const L=g.length;let N=h.length-1,$=L-1;for(;E<=N&&E<=$;){const z=h[E],X=g[E]=A?qt(g[E]):tt(g[E]);if(Kt(z,X))T(z,X,m,null,b,S,x,k,A);else break;E++}for(;E<=N&&E<=$;){const z=h[N],X=g[$]=A?qt(g[$]):tt(g[$]);if(Kt(z,X))T(z,X,m,null,b,S,x,k,A);else break;N--,$--}if(E>N){if(E<=$){const z=$+1,X=z<L?g[z].el:v;for(;E<=$;)T(null,g[E]=A?qt(g[E]):tt(g[E]),m,X,b,S,x,k,A),E++}}else if(E>$)for(;E<=N;)He(h[E],b,S,!0),E++;else{const z=E,X=E,oe=new Map;for(E=X;E<=$;E++){const Be=g[E]=A?qt(g[E]):tt(g[E]);Be.key!=null&&oe.set(Be.key,E)}let ae,he=0;const et=$-X+1;let Cn=!1,oa=0;const ir=new Array(et);for(E=0;E<et;E++)ir[E]=0;for(E=z;E<=N;E++){const Be=h[E];if(he>=et){He(Be,b,S,!0);continue}let dt;if(Be.key!=null)dt=oe.get(Be.key);else for(ae=X;ae<=$;ae++)if(ir[ae-X]===0&&Kt(Be,g[ae])){dt=ae;break}dt===void 0?He(Be,b,S,!0):(ir[dt-X]=E+1,dt>=oa?oa=dt:Cn=!0,T(Be,g[dt],m,null,b,S,x,k,A),he++)}const aa=Cn?$d(ir):Ln;for(ae=aa.length-1,E=et-1;E>=0;E--){const Be=X+E,dt=g[Be],la=Be+1<L?g[Be+1].el:v;ir[E]===0?T(null,dt,m,la,b,S,x,k,A):Cn&&(ae<0||E!==aa[ae]?ht(dt,m,la,2):ae--)}}},ht=(h,g,m,v,b=null)=>{const{el:S,type:x,transition:k,children:A,shapeFlag:E}=h;if(E&6){ht(h.component.subTree,g,m,v);return}if(E&128){h.suspense.move(g,m,v);return}if(E&64){x.move(h,g,m,fe);return}if(x===Ke){r(S,g,m);for(let N=0;N<A.length;N++)ht(A[N],g,m,v);r(h.anchor,g,m);return}if(x===hs){B(h,g,m);return}if(v!==2&&E&1&&k)if(v===0)k.beforeEnter(S),r(S,g,m),$e(()=>k.enter(S),b);else{const{leave:N,delayLeave:$,afterLeave:z}=k,X=()=>r(S,g,m),oe=()=>{N(S,()=>{X(),z&&z()})};$?$(S,X,oe):oe()}else r(S,g,m)},He=(h,g,m,v=!1,b=!1)=>{const{type:S,props:x,ref:k,children:A,dynamicChildren:E,shapeFlag:L,patchFlag:N,dirs:$}=h;if(k!=null&&Bi(k,null,m,h,!0),L&256){g.ctx.deactivate(h);return}const z=L&1&&$,X=!fs(h);let oe;if(X&&(oe=x&&x.onVnodeBeforeUnmount)&&pt(oe,g,h),L&6)D(h.component,m,v);else{if(L&128){h.suspense.unmount(m,v);return}z&&on(h,null,g,"beforeUnmount"),L&64?h.type.remove(h,g,m,b,fe,v):E&&(S!==Ke||N>0&&N&64)?R(E,g,m,!1,!0):(S===Ke&&N&384||!b&&L&16)&&R(A,g,m),v&&sr(h)}(X&&(oe=x&&x.onVnodeUnmounted)||z)&&$e(()=>{oe&&pt(oe,g,h),z&&on(h,null,g,"unmounted")},m)},sr=h=>{const{type:g,el:m,anchor:v,transition:b}=h;if(g===Ke){y(m,v);return}if(g===hs){K(h);return}const S=()=>{s(m),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(h.shapeFlag&1&&b&&!b.persisted){const{leave:x,delayLeave:k}=b,A=()=>x(m,S);k?k(h.el,S,A):A()}else S()},y=(h,g)=>{let m;for(;h!==g;)m=d(h),s(h),h=m;s(g)},D=(h,g,m)=>{const{bum:v,scope:b,update:S,subTree:x,um:k}=h;v&&ls(v),b.stop(),S&&(S.active=!1,He(x,h,g,m)),k&&$e(k,g),$e(()=>{h.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},R=(h,g,m,v=!1,b=!1,S=0)=>{for(let x=S;x<h.length;x++)He(h[x],g,m,v,b)},M=h=>h.shapeFlag&6?M(h.component.subTree):h.shapeFlag&128?h.suspense.next():d(h.anchor||h.el),te=(h,g,m)=>{h==null?g._vnode&&He(g._vnode,null,null,!0):T(g._vnode||null,h,g,null,null,null,m),ya(),Dc(),g._vnode=h},fe={p:T,um:He,m:ht,r:sr,mt:Rn,mc:ge,pc:Ue,pbc:Ie,n:M,o:t};let J,Y;return e&&([J,Y]=e(fe)),{render:te,hydrate:J,createApp:Dd(te,J)}}function an({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Qc(t,e,n=!1){const r=t.children,s=e.children;if(q(r)&&q(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=qt(s[i]),a.el=o.el),n||Qc(o,a))}}function $d(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Fd=t=>t.__isTeleport,Ke=Symbol(void 0),Ao=Symbol(void 0),Dt=Symbol(void 0),hs=Symbol(void 0),ur=[];let Je=null;function De(t=!1){ur.push(Je=t?null:[])}function Zc(){ur.pop(),Je=ur[ur.length-1]||null}let Hn=1;function Ca(t){Hn+=t}function Xc(t){return t.dynamicChildren=Hn>0?Je||Ln:null,Zc(),Hn>0&&Je&&Je.push(t),t}function Zt(t,e,n,r,s,i){return Xc(_e(t,e,n,r,s,i,!0))}function Vn(t,e,n,r,s){return Xc(me(t,e,n,r,s,!0))}function Ts(t){return t?t.__v_isVNode===!0:!1}function Kt(t,e){return t.type===e.type&&t.key===e.key}const Js="__vInternal",eu=({key:t})=>t!=null?t:null,ds=({ref:t,ref_key:e,ref_for:n})=>t!=null?Se(t)||Oe(t)||H(t)?{i:Ye,r:t,k:e,f:!!n}:t:null;function _e(t,e=null,n=null,r=0,s=null,i=t===Ke?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&eu(e),ref:e&&ds(e),scopeId:Gs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(Ro(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Se(n)?8:16),Hn>0&&!o&&Je&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Je.push(l),l}const me=Ud;function Ud(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===bd)&&(t=Dt),Ts(t)){const a=Wn(t,e,!0);return n&&Ro(a,n),Hn>0&&!i&&Je&&(a.shapeFlag&6?Je[Je.indexOf(t)]=a:Je.push(a)),a.patchFlag|=-2,a}if(Zd(t)&&(t=t.__vccOpts),e){e=Bd(e);let{class:a,style:l}=e;a&&!Se(a)&&(e.class=io(a)),de(l)&&(Ec(l)&&!q(l)&&(l=Me({},l)),e.style=so(l))}const o=Se(t)?1:Xh(t)?128:Fd(t)?64:de(t)?4:H(t)?2:0;return _e(t,e,n,r,s,o,i,!0)}function Bd(t){return t?Ec(t)||Js in t?Me({},t):t:null}function Wn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?jd(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&eu(a),ref:e&&e.ref?n&&s?q(s)?s.concat(ds(e)):[s,ds(e)]:ds(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ke?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Wn(t.ssContent),ssFallback:t.ssFallback&&Wn(t.ssFallback),el:t.el,anchor:t.anchor}}function Bt(t=" ",e=0){return me(Ao,null,t,e)}function Vd(t,e){const n=me(hs,null,t);return n.staticCount=e,n}function ts(t="",e=!1){return e?(De(),Vn(Dt,null,t)):me(Dt,null,t)}function tt(t){return t==null||typeof t=="boolean"?me(Dt):q(t)?me(Ke,null,t.slice()):typeof t=="object"?qt(t):me(Ao,null,String(t))}function qt(t){return t.el===null||t.memo?t:Wn(t)}function Ro(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(q(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ro(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Js in e)?e._ctx=Ye:s===3&&Ye&&(Ye.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:Ye},n=32):(e=String(e),r&64?(n=16,e=[Bt(e)]):n=8);t.children=e,t.shapeFlag|=n}function jd(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=io([e.class,r.class]));else if(s==="style")e.style=so([e.style,r.style]);else if(js(s)){const i=e[s],o=r[s];o&&i!==o&&!(q(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function pt(t,e,n,r=null){it(t,e,7,[n,r])}const zd=Jc();let qd=0;function Hd(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||zd,i={uid:qd++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new fh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wc(r,s),emitsOptions:Lc(r,s),emit:null,emitted:null,propsDefaults:le,inheritAttrs:r.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Gh.bind(null,i),t.ce&&t.ce(i),i}let Te=null;const Wd=()=>Te||Ye,sn=t=>{Te=t,t.scope.on()},tn=()=>{Te&&Te.scope.off(),Te=null};function tu(t){return t.vnode.shapeFlag&4}let Sr=!1;function Kd(t,e=!1){Sr=e;const{props:n,children:r}=t.vnode,s=tu(t);Rd(t,n,s,e),Od(t,r);const i=s?Gd(t,e):void 0;return Sr=!1,i}function Gd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=kc(new Proxy(t.ctx,Id));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Jd(t):null;sn(t),Xn();const i=en(r,t,0,[t.props,s]);if(er(),tn(),co(i)){if(i.then(tn,tn),e)return i.then(o=>{Vi(t,o,e)}).catch(o=>{Br(o,t,0)});t.asyncDep=i}else Vi(t,i,e)}else nu(t,e)}function Vi(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:de(e)&&(t.setupState=Rc(e)),nu(t,n)}let Oa;function nu(t,e,n){const r=t.type;if(!t.render){if(!e&&Oa&&!r.render){const s=r.template||To(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Me(Me({isCustomElement:i,delimiters:a},o),l);r.render=Oa(s,c)}}t.render=r.render||st}sn(t),Xn(),Ed(t),er(),tn()}function Yd(t){return new Proxy(t.attrs,{get(e,n){return qe(t,"get","$attrs"),e[n]}})}function Jd(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Yd(t))},slots:t.slots,emit:t.emit,expose:e}}function Qs(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Rc(kc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Es)return Es[n](t)}}))}function Qd(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function Zd(t){return H(t)&&"__vccOpts"in t}const Ge=(t,e)=>zh(t,e,Sr);function Xd(t){const e=Wd();let n=t();return tn(),co(n)&&(n=n.catch(r=>{throw sn(e),r})),[n,()=>sn(e)]}function ru(t,e,n){const r=arguments.length;return r===2?de(e)&&!q(e)?Ts(e)?me(t,null,[e]):me(t,e):me(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ts(n)&&(n=[n]),me(t,e,n))}const ep="3.2.39",tp="http://www.w3.org/2000/svg",fn=typeof document<"u"?document:null,Pa=fn&&fn.createElement("template"),np={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?fn.createElementNS(tp,t):fn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>fn.createTextNode(t),createComment:t=>fn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>fn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Pa.innerHTML=r?`<svg>${t}</svg>`:t;const a=Pa.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function rp(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function sp(t,e,n){const r=t.style,s=Se(n);if(n&&!s){for(const i in n)ji(r,i,n[i]);if(e&&!Se(e))for(const i in e)n[i]==null&&ji(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Na=/\s*!important$/;function ji(t,e,n){if(q(n))n.forEach(r=>ji(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=ip(t,e);Na.test(n)?t.setProperty(Zn(r),n.replace(Na,""),"important"):t[r]=n}}const Da=["Webkit","Moz","ms"],mi={};function ip(t,e){const n=mi[e];if(n)return n;let r=It(e);if(r!=="filter"&&r in t)return mi[e]=r;r=Hs(r);for(let s=0;s<Da.length;s++){const i=Da[s]+r;if(i in t)return mi[e]=i}return e}const Ma="http://www.w3.org/1999/xlink";function op(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ma,e.slice(6,e.length)):t.setAttributeNS(Ma,e,n);else{const i=eh(e);n==null||i&&!ac(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function ap(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ac(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[su,lp]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let zi=0;const cp=Promise.resolve(),up=()=>{zi=0},fp=()=>zi||(cp.then(up),zi=su());function Nn(t,e,n,r){t.addEventListener(e,n,r)}function hp(t,e,n,r){t.removeEventListener(e,n,r)}function dp(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=pp(e);if(r){const c=i[e]=gp(r,s);Nn(t,a,c,l)}else o&&(hp(t,a,o,l),i[e]=void 0)}}const La=/(?:Once|Passive|Capture)$/;function pp(t){let e;if(La.test(t)){e={};let r;for(;r=t.match(La);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Zn(t.slice(2)),e]}function gp(t,e){const n=r=>{const s=r.timeStamp||su();(lp||s>=n.attached-1)&&it(mp(r,n.value),e,5,[r])};return n.value=t,n.attached=fp(),n}function mp(t,e){if(q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const $a=/^on[a-z]/,yp=(t,e,n,r,s=!1,i,o,a,l)=>{e==="class"?rp(t,r,s):e==="style"?sp(t,n,r):js(e)?oo(e)||dp(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):_p(t,e,r,s))?ap(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),op(t,e,r,s))};function _p(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&$a.test(e)&&H(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||$a.test(e)&&Se(n)?!1:e in t}const Fa=t=>{const e=t.props["onUpdate:modelValue"]||!1;return q(e)?n=>ls(e,n):e};function wp(t){t.target.composing=!0}function Ua(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const q0={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Fa(s);const i=r||s.props&&s.props.type==="number";Nn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=bs(a)),t._assign(a)}),n&&Nn(t,"change",()=>{t.value=t.value.trim()}),e||(Nn(t,"compositionstart",wp),Nn(t,"compositionend",Ua),Nn(t,"change",Ua))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Fa(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&bs(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},bp=Me({patchProp:yp},np);let Ba;function vp(){return Ba||(Ba=Md(bp))}const Ip=(...t)=>{const e=vp().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Ep(r);if(!s)return;const i=e._component;!H(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Ep(t){return Se(t)?document.querySelector(t):t}/**
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
 */const iu=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},kp=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ou={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),r.push(n[u],n[f],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(iu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||f==null)throw Error();const d=i<<2|a>>4;if(r.push(d),c!==64){const p=a<<4&240|c>>2;if(r.push(p),f!==64){const w=c<<6&192|f;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Tp=function(t){const e=iu(t);return ou.encodeByteArray(e,!0)},au=function(t){return Tp(t).replace(/\./g,"")},Sp=function(t){try{return ou.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class Ap{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function lu(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cp(){const t=Pe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function cu(){return typeof indexedDB=="object"}function uu(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Op(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Pp="FirebaseError";class ct extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Pp,Object.setPrototypeOf(this,ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tn.prototype.create)}}class Tn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Np(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ct(s,a,r)}}function Np(t,e){return t.replace(Dp,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Dp=/\{\$([^}]+)}/g;function Mp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ar(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Va(i)&&Va(o)){if(!Ar(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Va(t){return t!==null&&typeof t=="object"}/**
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
 */function Vr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function lr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function cr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Lp(t,e){const n=new $p(t,e);return n.subscribe.bind(n)}class $p{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Fp(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=yi),s.error===void 0&&(s.error=yi),s.complete===void 0&&(s.complete=yi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Fp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function yi(){}/**
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
 */const Up=1e3,Bp=2,Vp=4*60*60*1e3,jp=.5;function ja(t,e=Up,n=Bp){const r=e*Math.pow(n,t),s=Math.round(jp*r*(Math.random()-.5)*2);return Math.min(Vp,r+s)}/**
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
 */function Fe(t){return t&&t._delegate?t._delegate:t}class ot{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const cn="[DEFAULT]";/**
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
 */class zp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ap;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Hp(e))try{this.getOrInitializeService({instanceIdentifier:cn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=cn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cn){return this.instances.has(e)}getOptions(e=cn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qp(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=cn){return this.component?this.component.multipleInstances?e:cn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qp(t){return t===cn?void 0:t}function Hp(t){return t.instantiationMode==="EAGER"}/**
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
 */class Wp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new zp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const Kp={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},Gp=re.INFO,Yp={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},Jp=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Yp[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zs{constructor(e){this.name=e,this._logLevel=Gp,this._logHandler=Jp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Kp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const Qp=(t,e)=>e.some(n=>t instanceof n);let za,qa;function Zp(){return za||(za=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xp(){return qa||(qa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fu=new WeakMap,qi=new WeakMap,hu=new WeakMap,_i=new WeakMap,xo=new WeakMap;function eg(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(nn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&fu.set(n,t)}).catch(()=>{}),xo.set(e,t),e}function tg(t){if(qi.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});qi.set(t,e)}let Hi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||hu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ng(t){Hi=t(Hi)}function rg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(wi(this),e,...n);return hu.set(r,e.sort?e.sort():[e]),nn(r)}:Xp().includes(t)?function(...e){return t.apply(wi(this),e),nn(fu.get(this))}:function(...e){return nn(t.apply(wi(this),e))}}function sg(t){return typeof t=="function"?rg(t):(t instanceof IDBTransaction&&tg(t),Qp(t,Zp())?new Proxy(t,Hi):t)}function nn(t){if(t instanceof IDBRequest)return eg(t);if(_i.has(t))return _i.get(t);const e=sg(t);return e!==t&&(_i.set(t,e),xo.set(e,t)),e}const wi=t=>xo.get(t);function du(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=nn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(nn(o.result),l.oldVersion,l.newVersion,nn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const ig=["get","getKey","getAll","getAllKeys","count"],og=["put","add","delete","clear"],bi=new Map;function Ha(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bi.get(e))return bi.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=og.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ig.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return bi.set(e,i),i}ng(t=>({...t,get:(e,n,r)=>Ha(e,n)||t.get(e,n,r),has:(e,n)=>!!Ha(e,n)||t.has(e,n)}));/**
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
 */class ag{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lg(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function lg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wi="@firebase/app",Wa="0.7.33";/**
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
 */const yn=new Zs("@firebase/app"),cg="@firebase/app-compat",ug="@firebase/analytics-compat",fg="@firebase/analytics",hg="@firebase/app-check-compat",dg="@firebase/app-check",pg="@firebase/auth",gg="@firebase/auth-compat",mg="@firebase/database",yg="@firebase/database-compat",_g="@firebase/functions",wg="@firebase/functions-compat",bg="@firebase/installations",vg="@firebase/installations-compat",Ig="@firebase/messaging",Eg="@firebase/messaging-compat",kg="@firebase/performance",Tg="@firebase/performance-compat",Sg="@firebase/remote-config",Ag="@firebase/remote-config-compat",Rg="@firebase/storage",xg="@firebase/storage-compat",Cg="@firebase/firestore",Og="@firebase/firestore-compat",Pg="firebase",Ng="9.10.0";/**
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
 */const pu="[DEFAULT]",Dg={[Wi]:"fire-core",[cg]:"fire-core-compat",[fg]:"fire-analytics",[ug]:"fire-analytics-compat",[dg]:"fire-app-check",[hg]:"fire-app-check-compat",[pg]:"fire-auth",[gg]:"fire-auth-compat",[mg]:"fire-rtdb",[yg]:"fire-rtdb-compat",[_g]:"fire-fn",[wg]:"fire-fn-compat",[bg]:"fire-iid",[vg]:"fire-iid-compat",[Ig]:"fire-fcm",[Eg]:"fire-fcm-compat",[kg]:"fire-perf",[Tg]:"fire-perf-compat",[Sg]:"fire-rc",[Ag]:"fire-rc-compat",[Rg]:"fire-gcs",[xg]:"fire-gcs-compat",[Cg]:"fire-fst",[Og]:"fire-fst-compat","fire-js":"fire-js",[Pg]:"fire-js-all"};/**
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
 */const Ss=new Map,Ki=new Map;function Mg(t,e){try{t.container.addComponent(e)}catch(n){yn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Et(t){const e=t.name;if(Ki.has(e))return yn.debug(`There were multiple attempts to register component ${e}.`),!1;Ki.set(e,t);for(const n of Ss.values())Mg(n,t);return!0}function Sn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Lg={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},_n=new Tn("app","Firebase",Lg);/**
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
 */class $g{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _n.create("app-deleted",{appName:this._name})}}/**
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
 */const jr=Ng;function Fg(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:pu,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw _n.create("bad-app-name",{appName:String(r)});const s=Ss.get(r);if(s){if(Ar(t,s.options)&&Ar(n,s.config))return s;throw _n.create("duplicate-app",{appName:r})}const i=new Wp(r);for(const a of Ki.values())i.addComponent(a);const o=new $g(t,n,i);return Ss.set(r,o),o}function Co(t=pu){const e=Ss.get(t);if(!e)throw _n.create("no-app",{appName:t});return e}function Qe(t,e,n){var r;let s=(r=Dg[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yn.warn(a.join(" "));return}Et(new ot(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Ug="firebase-heartbeat-database",Bg=1,Rr="firebase-heartbeat-store";let vi=null;function gu(){return vi||(vi=du(Ug,Bg,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Rr)}}}).catch(t=>{throw _n.create("idb-open",{originalErrorMessage:t.message})})),vi}async function Vg(t){var e;try{return(await gu()).transaction(Rr).objectStore(Rr).get(mu(t))}catch(n){if(n instanceof ct)yn.warn(n.message);else{const r=_n.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});yn.warn(r.message)}}}async function Ka(t,e){var n;try{const s=(await gu()).transaction(Rr,"readwrite");return await s.objectStore(Rr).put(e,mu(t)),s.done}catch(r){if(r instanceof ct)yn.warn(r.message);else{const s=_n.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});yn.warn(s.message)}}}function mu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const jg=1024,zg=30*24*60*60*1e3;class qg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Wg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ga();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=zg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ga(),{heartbeatsToSend:n,unsentEntries:r}=Hg(this._heartbeatsCache.heartbeats),s=au(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ga(){return new Date().toISOString().substring(0,10)}function Hg(t,e=jg){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ya(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ya(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Wg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cu()?uu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Vg(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ka(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ka(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ya(t){return au(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Kg(t){Et(new ot("platform-logger",e=>new ag(e),"PRIVATE")),Et(new ot("heartbeat",e=>new qg(e),"PRIVATE")),Qe(Wi,Wa,t),Qe(Wi,Wa,"esm2017"),Qe("fire-js","")}Kg("");function Oo(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function yu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Gg=yu,_u=new Tn("auth","Firebase",yu());/**
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
 */const Ja=new Zs("@firebase/auth");function ps(t,...e){Ja.logLevel<=re.ERROR&&Ja.error(`Auth (${jr}): ${t}`,...e)}/**
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
 */function at(t,...e){throw Po(t,...e)}function wt(t,...e){return Po(t,...e)}function Yg(t,e,n){const r=Object.assign(Object.assign({},Gg()),{[e]:n});return new Tn("auth","Firebase",r).create(e,{appName:t.name})}function Po(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return _u.create(t,...e)}function j(t,e,...n){if(!t)throw Po(e,...n)}function xt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ps(e),new Error(e)}function Mt(t,e){t||xt(e)}/**
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
 */const Qa=new Map;function Ct(t){Mt(t instanceof Function,"Expected a class definition");let e=Qa.get(t);return e?(Mt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Qa.set(t,e),e)}/**
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
 */function Jg(t,e){const n=Sn(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ar(i,e!=null?e:{}))return s;at(s,"already-initialized")}return n.initialize({options:e})}function Qg(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ct);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Gi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Zg(){return Za()==="http:"||Za()==="https:"}function Za(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Xg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zg()||lu()||"connection"in navigator)?navigator.onLine:!0}function em(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class zr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mt(n>e,"Short delay should be less than long delay!"),this.isMobile=Rp()||xp()}get(){return Xg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function No(t,e){Mt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class wu{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const tm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const nm=new zr(3e4,6e4);function qr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Hr(t,e,n,r,s={}){return bu(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Vr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),wu.fetch()(vu(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function bu(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},tm),e);try{const s=new rm(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ns(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ns(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ns(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ns(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Yg(t,u,c);at(t,u)}}catch(s){if(s instanceof ct)throw s;at(t,"network-request-failed")}}async function Wr(t,e,n,r,s={}){const i=await Hr(t,e,n,r,s);return"mfaPendingCredential"in i&&at(t,"multi-factor-auth-required",{_serverResponse:i}),i}function vu(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?No(t.config,s):`${t.config.apiScheme}://${s}`}class rm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wt(this.auth,"network-request-failed")),nm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ns(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=wt(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function sm(t,e){return Hr(t,"POST","/v1/accounts:delete",e)}async function im(t,e){return Hr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function fr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function om(t,e=!1){const n=Fe(t),r=await n.getIdToken(e),s=Do(r);j(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:fr(Ii(s.auth_time)),issuedAtTime:fr(Ii(s.iat)),expirationTime:fr(Ii(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ii(t){return Number(t)*1e3}function Do(t){var e;const[n,r,s]=t.split(".");if(n===void 0||r===void 0||s===void 0)return ps("JWT malformed, contained fewer than 3 sections"),null;try{const i=Sp(r);return i?JSON.parse(i):(ps("Failed to decode base64 JWT payload"),null)}catch(i){return ps("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function am(t){const e=Do(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function xr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ct&&lm(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function lm({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class cm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Iu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fr(this.lastLoginAt),this.creationTime=fr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function As(t){var e;const n=t.auth,r=await t.getIdToken(),s=await xr(t,im(n,{idToken:r}));j(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?hm(i.providerUserInfo):[],a=fm(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Iu(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function um(t){const e=Fe(t);await As(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fm(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function hm(t){return t.map(e=>{var{providerId:n}=e,r=Oo(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function dm(t,e){const n=await bu(t,{},async()=>{const r=Vr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=vu(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",wu.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Cr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):am(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return j(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await dm(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Cr;return r&&(j(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(j(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(j(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cr,this.toJSON())}_performRefresh(){return xt("not implemented")}}/**
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
 */function jt(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class mn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Oo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Iu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await xr(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return om(this,e)}reload(){return um(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await As(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await xr(this,sm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:C,emailVerified:B,isAnonymous:K,providerData:G,stsTokenManager:se}=n;j(C&&se,e,"internal-error");const pe=Cr.fromJSON(this.name,se);j(typeof C=="string",e,"internal-error"),jt(f,e.name),jt(d,e.name),j(typeof B=="boolean",e,"internal-error"),j(typeof K=="boolean",e,"internal-error"),jt(p,e.name),jt(w,e.name),jt(O,e.name),jt(T,e.name),jt(I,e.name),jt(_,e.name);const ge=new mn({uid:C,auth:e,email:d,emailVerified:B,displayName:f,isAnonymous:K,photoURL:w,phoneNumber:p,tenantId:O,stsTokenManager:pe,createdAt:I,lastLoginAt:_});return G&&Array.isArray(G)&&(ge.providerData=G.map(xe=>Object.assign({},xe))),T&&(ge._redirectEventId=T),ge}static async _fromIdTokenResponse(e,n,r=!1){const s=new Cr;s.updateFromServerResponse(n);const i=new mn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await As(i),i}}/**
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
 */class Eu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Eu.type="NONE";const Xa=Eu;/**
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
 */function gs(t,e,n){return`firebase:${t}:${e}:${n}`}class jn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=gs(this.userKey,s.apiKey,i),this.fullPersistenceKey=gs("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new jn(Ct(Xa),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Ct(Xa);const o=gs(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const f=mn._fromJSON(e,u);c!==i&&(a=f),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new jn(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new jn(i,e,r))}}/**
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
 */function el(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Su(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ku(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ru(e))return"Blackberry";if(xu(e))return"Webos";if(Mo(e))return"Safari";if((e.includes("chrome/")||Tu(e))&&!e.includes("edge/"))return"Chrome";if(Au(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ku(t=Pe()){return/firefox\//i.test(t)}function Mo(t=Pe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Tu(t=Pe()){return/crios\//i.test(t)}function Su(t=Pe()){return/iemobile/i.test(t)}function Au(t=Pe()){return/android/i.test(t)}function Ru(t=Pe()){return/blackberry/i.test(t)}function xu(t=Pe()){return/webos/i.test(t)}function Xs(t=Pe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function pm(t=Pe()){var e;return Xs(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gm(){return Cp()&&document.documentMode===10}function Cu(t=Pe()){return Xs(t)||Au(t)||xu(t)||Ru(t)||/windows phone/i.test(t)||Su(t)}function mm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ou(t,e=[]){let n;switch(t){case"Browser":n=el(Pe());break;case"Worker":n=`${el(Pe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${jr}/${r}`}/**
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
 */class ym{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
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
 */class _m{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tl(this),this.idTokenSubscription=new tl(this),this.beforeStateQueue=new ym(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ct(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await jn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await As(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=em()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Fe(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ct(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Tn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ct(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await jn.create(this,[Ct(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return j(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ou(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function ei(t){return Fe(t)}class tl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Lp(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Lo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xt("not implemented")}_getIdTokenResponse(e){return xt("not implemented")}_linkToIdToken(e,n){return xt("not implemented")}_getReauthenticationResolver(e){return xt("not implemented")}}async function wm(t,e){return Hr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function bm(t,e){return Wr(t,"POST","/v1/accounts:signInWithPassword",qr(t,e))}/**
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
 */async function vm(t,e){return Wr(t,"POST","/v1/accounts:signInWithEmailLink",qr(t,e))}async function Im(t,e){return Wr(t,"POST","/v1/accounts:signInWithEmailLink",qr(t,e))}/**
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
 */class Or extends Lo{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Or(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Or(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return bm(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return vm(e,{email:this._email,oobCode:this._password});default:at(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return wm(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Im(e,{idToken:n,email:this._email,oobCode:this._password});default:at(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function zn(t,e){return Wr(t,"POST","/v1/accounts:signInWithIdp",qr(t,e))}/**
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
 */const Em="http://localhost";class wn extends Lo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new wn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):at("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Oo(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new wn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zn(e,n)}buildRequest(){const e={requestUri:Em,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vr(n)}return e}}/**
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
 */function km(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Tm(t){const e=lr(cr(t)).link,n=e?lr(cr(e)).deep_link_id:null,r=lr(cr(t)).deep_link_id;return(r?lr(cr(r)).link:null)||r||n||e||t}class $o{constructor(e){var n,r,s,i,o,a;const l=lr(cr(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,f=km((s=l.mode)!==null&&s!==void 0?s:null);j(c&&u&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Tm(e);try{return new $o(n)}catch{return null}}}/**
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
 */class tr{constructor(){this.providerId=tr.PROVIDER_ID}static credential(e,n){return Or._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=$o.parseLink(n);return j(r,"argument-error"),Or._fromEmailAndCode(e,r.code,r.tenantId)}}tr.PROVIDER_ID="password";tr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";tr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Pu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Kr extends Pu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Gt extends Kr{constructor(){super("facebook.com")}static credential(e){return wn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gt.credential(e.oauthAccessToken)}catch{return null}}}Gt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gt.PROVIDER_ID="facebook.com";/**
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
 */class Yt extends Kr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return wn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yt.credential(n,r)}catch{return null}}}Yt.GOOGLE_SIGN_IN_METHOD="google.com";Yt.PROVIDER_ID="google.com";/**
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
 */class Jt extends Kr{constructor(){super("github.com")}static credential(e){return wn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jt.credential(e.oauthAccessToken)}catch{return null}}}Jt.GITHUB_SIGN_IN_METHOD="github.com";Jt.PROVIDER_ID="github.com";/**
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
 */class Qt extends Kr{constructor(){super("twitter.com")}static credential(e,n){return wn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Qt.credential(n,r)}catch{return null}}}Qt.TWITTER_SIGN_IN_METHOD="twitter.com";Qt.PROVIDER_ID="twitter.com";/**
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
 */async function Sm(t,e){return Wr(t,"POST","/v1/accounts:signUp",qr(t,e))}/**
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
 */class bn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await mn._fromIdTokenResponse(e,r,s),o=nl(r);return new bn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=nl(r);return new bn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function nl(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Rs extends ct{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Rs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Rs(e,n,r,s)}}function Nu(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Rs._fromErrorAndOperation(t,i,e,r):i})}async function Am(t,e,n=!1){const r=await xr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return bn._forOperation(t,"link",r)}/**
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
 */async function Rm(t,e,n=!1){var r;const{auth:s}=t,i="reauthenticate";try{const o=await xr(t,Nu(s,i,e,t),n);j(o.idToken,s,"internal-error");const a=Do(o.idToken);j(a,s,"internal-error");const{sub:l}=a;return j(t.uid===l,s,"user-mismatch"),bn._forOperation(t,i,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&at(s,"user-mismatch"),o}}/**
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
 */async function Du(t,e,n=!1){const r="signIn",s=await Nu(t,r,e),i=await bn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function xm(t,e){return Du(ei(t),e)}async function H0(t,e,n){const r=ei(t),s=await Sm(r,{returnSecureToken:!0,email:e,password:n}),i=await bn._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function W0(t,e,n){return xm(Fe(t),tr.credential(e,n))}function Cm(t,e,n,r){return Fe(t).onAuthStateChanged(e,n,r)}const xs="__sak";/**
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
 */class Mu{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xs,"1"),this.storage.removeItem(xs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Om(){const t=Pe();return Mo(t)||Xs(t)}const Pm=1e3,Nm=10;class Lu extends Mu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Om()&&mm(),this.fallbackToPolling=Cu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);gm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Nm):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Pm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Lu.type="LOCAL";const Dm=Lu;/**
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
 */class $u extends Mu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$u.type="SESSION";const Fu=$u;/**
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
 */function Mm(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ti{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ti(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await Mm(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ti.receivers=[];/**
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
 */function Fo(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Lm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Fo("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const d=f;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function bt(){return window}function $m(t){bt().location.href=t}/**
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
 */function Uu(){return typeof bt().WorkerGlobalScope<"u"&&typeof bt().importScripts=="function"}async function Fm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Um(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Bm(){return Uu()?self:null}/**
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
 */const Bu="firebaseLocalStorageDb",Vm=1,Cs="firebaseLocalStorage",Vu="fbase_key";class Gr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ni(t,e){return t.transaction([Cs],e?"readwrite":"readonly").objectStore(Cs)}function jm(){const t=indexedDB.deleteDatabase(Bu);return new Gr(t).toPromise()}function Yi(){const t=indexedDB.open(Bu,Vm);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Cs,{keyPath:Vu})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Cs)?e(r):(r.close(),await jm(),e(await Yi()))})})}async function rl(t,e,n){const r=ni(t,!0).put({[Vu]:e,value:n});return new Gr(r).toPromise()}async function zm(t,e){const n=ni(t,!1).get(e),r=await new Gr(n).toPromise();return r===void 0?null:r.value}function sl(t,e){const n=ni(t,!0).delete(e);return new Gr(n).toPromise()}const qm=800,Hm=3;class ju{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Hm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Uu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ti._getInstance(Bm()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Fm(),!this.activeServiceWorker)return;this.sender=new Lm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Um()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yi();return await rl(e,xs,"1"),await sl(e,xs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>rl(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>zm(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>sl(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ni(s,!1).getAll();return new Gr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ju.type="LOCAL";const Wm=ju;/**
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
 */function Km(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Gm(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=wt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Km().appendChild(r)})}function Ym(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new zr(3e4,6e4);/**
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
 */function Jm(t,e){return e?Ct(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Uo extends Lo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Qm(t){return Du(t.auth,new Uo(t),t.bypassAuthState)}function Zm(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),Rm(n,new Uo(t),t.bypassAuthState)}async function Xm(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),Am(n,new Uo(t),t.bypassAuthState)}/**
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
 */class zu{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Qm;case"linkViaPopup":case"linkViaRedirect":return Xm;case"reauthViaPopup":case"reauthViaRedirect":return Zm;default:at(this.auth,"internal-error")}}resolve(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ey=new zr(2e3,1e4);class Mn extends zu{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Mn.currentPopupAction&&Mn.currentPopupAction.cancel(),Mn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){Mt(this.filter.length===1,"Popup operations only handle one event");const e=Fo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,ey.get())};e()}}Mn.currentPopupAction=null;/**
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
 */const ty="pendingRedirect",ms=new Map;class ny extends zu{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ms.get(this.auth._key());if(!e){try{const r=await ry(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ms.set(this.auth._key(),e)}return this.bypassAuthState||ms.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ry(t,e){const n=oy(e),r=iy(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function sy(t,e){ms.set(t._key(),e)}function iy(t){return Ct(t._redirectPersistence)}function oy(t){return gs(ty,t.config.apiKey,t.name)}async function ay(t,e,n=!1){const r=ei(t),s=Jm(r,e),o=await new ny(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const ly=10*60*1e3;class cy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uy(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!qu(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(wt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ly&&this.cachedEventUids.clear(),this.cachedEventUids.has(il(e))}saveEventToCache(e){this.cachedEventUids.add(il(e)),this.lastProcessedEventTime=Date.now()}}function il(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qu({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uy(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qu(t);default:return!1}}/**
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
 */async function fy(t,e={}){return Hr(t,"GET","/v1/projects",e)}/**
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
 */const hy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dy=/^https?/;async function py(t){if(t.config.emulator)return;const{authorizedDomains:e}=await fy(t);for(const n of e)try{if(gy(n))return}catch{}at(t,"unauthorized-domain")}function gy(t){const e=Gi(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!dy.test(n))return!1;if(hy.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const my=new zr(3e4,6e4);function ol(){const t=bt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function yy(t){return new Promise((e,n)=>{var r,s,i;function o(){ol(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ol(),n(wt(t,"network-request-failed"))},timeout:my.get()})}if(!((s=(r=bt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=bt().gapi)===null||i===void 0)&&i.load)o();else{const a=Ym("iframefcb");return bt()[a]=()=>{gapi.load?o():n(wt(t,"network-request-failed"))},Gm(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ys=null,e})}let ys=null;function _y(t){return ys=ys||yy(t),ys}/**
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
 */const wy=new zr(5e3,15e3),by="__/auth/iframe",vy="emulator/auth/iframe",Iy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ey=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ky(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?No(e,vy):`https://${t.config.authDomain}/${by}`,r={apiKey:e.apiKey,appName:t.name,v:jr},s=Ey.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Vr(r).slice(1)}`}async function Ty(t){const e=await _y(t),n=bt().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:ky(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Iy,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=wt(t,"network-request-failed"),a=bt().setTimeout(()=>{i(o)},wy.get());function l(){bt().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Sy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ay=500,Ry=600,xy="_blank",Cy="http://localhost";class al{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Oy(t,e,n,r=Ay,s=Ry){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Sy),{width:r.toString(),height:s.toString(),top:i,left:o}),c=Pe().toLowerCase();n&&(a=Tu(c)?xy:n),ku(c)&&(e=e||Cy,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[p,w])=>`${d}${p}=${w},`,"");if(pm(c)&&a!=="_self")return Py(e||"",a),new al(null);const f=window.open(e||"",a,u);j(f,t,"popup-blocked");try{f.focus()}catch{}return new al(f)}function Py(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Ny="__/auth/handler",Dy="emulator/auth/handler";function ll(t,e,n,r,s,i){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:jr,eventId:s};if(e instanceof Pu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Mp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(i||{}))o[l]=c}if(e instanceof Kr){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${My(t)}?${Vr(a).slice(1)}`}function My({config:t}){return t.emulator?No(t,Dy):`https://${t.authDomain}/${Ny}`}/**
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
 */const Ei="webStorageSupport";class Ly{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fu,this._completeRedirectFn=ay,this._overrideRedirectResult=sy}async _openPopup(e,n,r,s){var i;Mt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=ll(e,n,r,Gi(),s);return Oy(e,o,Fo())}async _openRedirect(e,n,r,s){return await this._originValidation(e),$m(ll(e,n,r,Gi(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Mt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ty(e),r=new cy(e);return n.register("authEvent",s=>(j(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ei,{type:Ei},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ei];o!==void 0&&n(!!o),at(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=py(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Cu()||Mo()||Xs()}}const $y=Ly;var cl="@firebase/auth",ul="0.20.7";/**
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
 */class Fy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Uy(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function By(t){Et(new ot("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,l)=>{j(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),j(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ou(t)},u=new _m(a,l,c);return Qg(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Et(new ot("auth-internal",e=>{const n=ei(e.getProvider("auth").getImmediate());return(r=>new Fy(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qe(cl,ul,Uy(t)),Qe(cl,ul,"esm2017")}/**
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
 */function Vy(t=Co()){const e=Sn(t,"auth");return e.isInitialized()?e.getImmediate():Jg(t,{popupRedirectResolver:$y,persistence:[Wm,Dm,Fu]})}By("Browser");/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Dn=typeof window<"u";function jy(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ne=Object.assign;function ki(t,e){const n={};for(const r in e){const s=e[r];n[r]=lt(s)?s.map(t):t(s)}return n}const hr=()=>{},lt=Array.isArray,zy=/\/$/,qy=t=>t.replace(zy,"");function Ti(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Gy(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Hy(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function fl(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Wy(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Kn(e.matched[r],n.matched[s])&&Hu(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Kn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Hu(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Ky(t[n],e[n]))return!1;return!0}function Ky(t,e){return lt(t)?hl(t,e):lt(e)?hl(e,t):t===e}function hl(t,e){return lt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Gy(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Pr;(function(t){t.pop="pop",t.push="push"})(Pr||(Pr={}));var dr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(dr||(dr={}));function Yy(t){if(!t)if(Dn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),qy(t)}const Jy=/^[^#]+#/;function Qy(t,e){return t.replace(Jy,"#")+e}function Zy(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ri=()=>({left:window.pageXOffset,top:window.pageYOffset});function Xy(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Zy(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function dl(t,e){return(history.state?history.state.position-e:-1)+t}const Ji=new Map;function e_(t,e){Ji.set(t,e)}function t_(t){const e=Ji.get(t);return Ji.delete(t),e}let n_=()=>location.protocol+"//"+location.host;function Wu(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),fl(l,"")}return fl(n,t)+r+s}function r_(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const p=Wu(t,location),w=n.value,O=e.value;let T=0;if(d){if(n.value=p,e.value=d,o&&o===w){o=null;return}T=O?d.position-O.position:0}else r(p);s.forEach(I=>{I(n.value,w,{delta:T,type:Pr.pop,direction:T?T>0?dr.forward:dr.back:dr.unknown})})};function l(){o=n.value}function c(d){s.push(d);const p=()=>{const w=s.indexOf(d);w>-1&&s.splice(w,1)};return i.push(p),p}function u(){const{history:d}=window;!d.state||d.replaceState(ne({},d.state,{scroll:ri()}),"")}function f(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function pl(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ri():null}}function s_(t){const{history:e,location:n}=window,r={value:Wu(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:n_()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(l,c){const u=ne({},e.state,pl(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=ne({},s.value,e.state,{forward:l,scroll:ri()});i(u.current,u,!0);const f=ne({},pl(r.value,l,null),{position:u.position+1},c);i(l,f,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function i_(t){t=Yy(t);const e=s_(t),n=r_(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ne({location:"",base:t,go:r,createHref:Qy.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function o_(t){return typeof t=="string"||t&&typeof t=="object"}function Ku(t){return typeof t=="string"||typeof t=="symbol"}const zt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Gu=Symbol("");var gl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(gl||(gl={}));function Gn(t,e){return ne(new Error,{type:t,[Gu]:!0},e)}function At(t,e){return t instanceof Error&&Gu in t&&(e==null||!!(t.type&e))}const ml="[^/]+?",a_={sensitive:!1,strict:!1,start:!0,end:!0},l_=/[.+*?^${}()[\]/\\]/g;function c_(t,e){const n=ne({},a_,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const d=c[f];let p=40+(n.sensitive?.25:0);if(d.type===0)f||(s+="/"),s+=d.value.replace(l_,"\\$&"),p+=40;else if(d.type===1){const{value:w,repeatable:O,optional:T,regexp:I}=d;i.push({name:w,repeatable:O,optional:T});const _=I||ml;if(_!==ml){p+=10;try{new RegExp(`(${_})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${w}" (${_}): `+B.message)}}let C=O?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;f||(C=T&&c.length<2?`(?:/${C})`:"/"+C),T&&(C+="?"),s+=C,p+=20,T&&(p+=-8),O&&(p+=-20),_===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",w=i[d-1];f[w.name]=p&&w.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:w,repeatable:O,optional:T}=p,I=w in c?c[w]:"";if(lt(I)&&!O)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const _=lt(I)?I.join("/"):I;if(!_)if(T)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${w}"`);u+=_}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function u_(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function f_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=u_(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(yl(r))return 1;if(yl(s))return-1}return s.length-r.length}function yl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const h_={type:0,value:""},d_=/[a-zA-Z0-9_]/;function p_(t){if(!t)return[[]];if(t==="/")return[[h_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function f(){!c||(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:d_.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}function g_(t,e,n){const r=c_(p_(t.path),n),s=ne(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function m_(t,e){const n=[],r=new Map;e=bl({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,f,d){const p=!d,w=y_(u);w.aliasOf=d&&d.record;const O=bl(e,u),T=[w];if("alias"in u){const C=typeof u.alias=="string"?[u.alias]:u.alias;for(const B of C)T.push(ne({},w,{components:d?d.record.components:w.components,path:B,aliasOf:d?d.record:w}))}let I,_;for(const C of T){const{path:B}=C;if(f&&B[0]!=="/"){const K=f.record.path,G=K[K.length-1]==="/"?"":"/";C.path=f.record.path+(B&&G+B)}if(I=g_(C,f,O),d?d.alias.push(I):(_=_||I,_!==I&&_.alias.push(I),p&&u.name&&!wl(I)&&o(u.name)),w.children){const K=w.children;for(let G=0;G<K.length;G++)i(K[G],I,d&&d.children[G])}d=d||I,l(I)}return _?()=>{o(_)}:hr}function o(u){if(Ku(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let f=0;for(;f<n.length&&f_(u,n[f])>=0&&(u.record.path!==n[f].record.path||!Yu(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!wl(u)&&r.set(u.record.name,u)}function c(u,f){let d,p={},w,O;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw Gn(1,{location:u});O=d.record.name,p=ne(_l(f.params,d.keys.filter(_=>!_.optional).map(_=>_.name)),u.params&&_l(u.params,d.keys.map(_=>_.name))),w=d.stringify(p)}else if("path"in u)w=u.path,d=n.find(_=>_.re.test(w)),d&&(p=d.parse(w),O=d.record.name);else{if(d=f.name?r.get(f.name):n.find(_=>_.re.test(f.path)),!d)throw Gn(1,{location:u,currentLocation:f});O=d.record.name,p=ne({},f.params,u.params),w=d.stringify(p)}const T=[];let I=d;for(;I;)T.unshift(I.record),I=I.parent;return{name:O,path:w,params:p,matched:T,meta:w_(T)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function _l(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function y_(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:__(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function __(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function wl(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function w_(t){return t.reduce((e,n)=>ne(e,n.meta),{})}function bl(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Yu(t,e){return e.children.some(n=>n===t||Yu(t,n))}const Ju=/#/g,b_=/&/g,v_=/\//g,I_=/=/g,E_=/\?/g,Qu=/\+/g,k_=/%5B/g,T_=/%5D/g,Zu=/%5E/g,S_=/%60/g,Xu=/%7B/g,A_=/%7C/g,ef=/%7D/g,R_=/%20/g;function Bo(t){return encodeURI(""+t).replace(A_,"|").replace(k_,"[").replace(T_,"]")}function x_(t){return Bo(t).replace(Xu,"{").replace(ef,"}").replace(Zu,"^")}function Qi(t){return Bo(t).replace(Qu,"%2B").replace(R_,"+").replace(Ju,"%23").replace(b_,"%26").replace(S_,"`").replace(Xu,"{").replace(ef,"}").replace(Zu,"^")}function C_(t){return Qi(t).replace(I_,"%3D")}function O_(t){return Bo(t).replace(Ju,"%23").replace(E_,"%3F")}function P_(t){return t==null?"":O_(t).replace(v_,"%2F")}function Os(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function N_(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Qu," "),o=i.indexOf("="),a=Os(o<0?i:i.slice(0,o)),l=o<0?null:Os(i.slice(o+1));if(a in e){let c=e[a];lt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function vl(t){let e="";for(let n in t){const r=t[n];if(n=C_(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(lt(r)?r.map(i=>i&&Qi(i)):[r&&Qi(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function D_(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=lt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const M_=Symbol(""),Il=Symbol(""),si=Symbol(""),tf=Symbol(""),Zi=Symbol("");function or(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Ht(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(Gn(4,{from:n,to:e})):f instanceof Error?a(f):o_(f)?a(Gn(2,{from:e,to:f})):(i&&r.enterCallbacks[s]===i&&typeof f=="function"&&i.push(f),o())},c=t.call(r&&r.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function Si(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(L_(a)){const c=(a.__vccOpts||a)[e];c&&s.push(Ht(c,n,r,i,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=jy(c)?c.default:c;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Ht(d,n,r,i,o)()}))}}return s}function L_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function El(t){const e=Ot(si),n=Ot(tf),r=Ge(()=>e.resolve(gn(t.to))),s=Ge(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(Kn.bind(null,u));if(d>-1)return d;const p=kl(l[c-2]);return c>1&&kl(u)===p&&f[f.length-1].path!==p?f.findIndex(Kn.bind(null,l[c-2])):d}),i=Ge(()=>s.value>-1&&B_(n.params,r.value.params)),o=Ge(()=>s.value>-1&&s.value===n.matched.length-1&&Hu(n.params,r.value.params));function a(l={}){return U_(l)?e[gn(t.replace)?"replace":"push"](gn(t.to)).catch(hr):Promise.resolve()}return{route:r,href:Ge(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const $_=Uc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:El,setup(t,{slots:e}){const n=Ur(El(t)),{options:r}=Ot(si),s=Ge(()=>({[Tl(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Tl(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:ru("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),F_=$_;function U_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function B_(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!lt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function kl(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Tl=(t,e,n)=>t!=null?t:e!=null?e:n,V_=Uc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ot(Zi),s=Ge(()=>t.route||r.value),i=Ot(Il,0),o=Ge(()=>{let c=gn(i);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Ge(()=>s.value.matched[o.value]);cs(Il,Ge(()=>o.value+1)),cs(M_,a),cs(Zi,s);const l=Ir();return us(()=>[l.value,a.value,t.name],([c,u,f],[d,p,w])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Kn(u,p)||!d)&&(u.enterCallbacks[f]||[]).forEach(O=>O(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return Sl(n.default,{Component:d,route:c});const p=f.props[u],w=p?p===!0?c.params:typeof p=="function"?p(c):p:null,T=ru(d,ne({},w,e,{onVnodeUnmounted:I=>{I.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Sl(n.default,{Component:T,route:c})||T}}});function Sl(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const j_=V_;function z_(t){const e=m_(t.routes,t),n=t.parseQuery||N_,r=t.stringifyQuery||vl,s=t.history,i=or(),o=or(),a=or(),l=Uh(zt);let c=zt;Dn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ki.bind(null,y=>""+y),f=ki.bind(null,P_),d=ki.bind(null,Os);function p(y,D){let R,M;return Ku(y)?(R=e.getRecordMatcher(y),M=D):M=y,e.addRoute(M,R)}function w(y){const D=e.getRecordMatcher(y);D&&e.removeRoute(D)}function O(){return e.getRoutes().map(y=>y.record)}function T(y){return!!e.getRecordMatcher(y)}function I(y,D){if(D=ne({},D||l.value),typeof y=="string"){const Y=Ti(n,y,D.path),h=e.resolve({path:Y.path},D),g=s.createHref(Y.fullPath);return ne(Y,h,{params:d(h.params),hash:Os(Y.hash),redirectedFrom:void 0,href:g})}let R;if("path"in y)R=ne({},y,{path:Ti(n,y.path,D.path).path});else{const Y=ne({},y.params);for(const h in Y)Y[h]==null&&delete Y[h];R=ne({},y,{params:f(y.params)}),D.params=f(D.params)}const M=e.resolve(R,D),te=y.hash||"";M.params=u(d(M.params));const fe=Hy(r,ne({},y,{hash:x_(te),path:M.path})),J=s.createHref(fe);return ne({fullPath:fe,hash:te,query:r===vl?D_(y.query):y.query||{}},M,{redirectedFrom:void 0,href:J})}function _(y){return typeof y=="string"?Ti(n,y,l.value.path):ne({},y)}function C(y,D){if(c!==y)return Gn(8,{from:D,to:y})}function B(y){return se(y)}function K(y){return B(ne(_(y),{replace:!0}))}function G(y){const D=y.matched[y.matched.length-1];if(D&&D.redirect){const{redirect:R}=D;let M=typeof R=="function"?R(y):R;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=_(M):{path:M},M.params={}),ne({query:y.query,hash:y.hash,params:"path"in M?{}:y.params},M)}}function se(y,D){const R=c=I(y),M=l.value,te=y.state,fe=y.force,J=y.replace===!0,Y=G(R);if(Y)return se(ne(_(Y),{state:typeof Y=="object"?ne({},te,Y.state):te,force:fe,replace:J}),D||R);const h=R;h.redirectedFrom=D;let g;return!fe&&Wy(r,M,R)&&(g=Gn(16,{to:h,from:M}),xn(M,M,!0,!1)),(g?Promise.resolve(g):ge(h,M)).catch(m=>At(m)?At(m,2)?m:Ue(m):ue(m,h,M)).then(m=>{if(m){if(At(m,2))return se(ne({replace:J},_(m.to),{state:typeof m.to=="object"?ne({},te,m.to.state):te,force:fe}),D||h)}else m=Ie(h,M,!0,J,te);return xe(h,M,m),m})}function pe(y,D){const R=C(y,D);return R?Promise.reject(R):Promise.resolve()}function ge(y,D){let R;const[M,te,fe]=q_(y,D);R=Si(M.reverse(),"beforeRouteLeave",y,D);for(const Y of M)Y.leaveGuards.forEach(h=>{R.push(Ht(h,y,D))});const J=pe.bind(null,y,D);return R.push(J),On(R).then(()=>{R=[];for(const Y of i.list())R.push(Ht(Y,y,D));return R.push(J),On(R)}).then(()=>{R=Si(te,"beforeRouteUpdate",y,D);for(const Y of te)Y.updateGuards.forEach(h=>{R.push(Ht(h,y,D))});return R.push(J),On(R)}).then(()=>{R=[];for(const Y of y.matched)if(Y.beforeEnter&&!D.matched.includes(Y))if(lt(Y.beforeEnter))for(const h of Y.beforeEnter)R.push(Ht(h,y,D));else R.push(Ht(Y.beforeEnter,y,D));return R.push(J),On(R)}).then(()=>(y.matched.forEach(Y=>Y.enterCallbacks={}),R=Si(fe,"beforeRouteEnter",y,D),R.push(J),On(R))).then(()=>{R=[];for(const Y of o.list())R.push(Ht(Y,y,D));return R.push(J),On(R)}).catch(Y=>At(Y,8)?Y:Promise.reject(Y))}function xe(y,D,R){for(const M of a.list())M(y,D,R)}function Ie(y,D,R,M,te){const fe=C(y,D);if(fe)return fe;const J=D===zt,Y=Dn?history.state:{};R&&(M||J?s.replace(y.fullPath,ne({scroll:J&&Y&&Y.scroll},te)):s.push(y.fullPath,te)),l.value=y,xn(y,D,R,J),Ue()}let Le;function Tt(){Le||(Le=s.listen((y,D,R)=>{if(!sr.listening)return;const M=I(y),te=G(M);if(te){se(ne(te,{replace:!0}),M).catch(hr);return}c=M;const fe=l.value;Dn&&e_(dl(fe.fullPath,R.delta),ri()),ge(M,fe).catch(J=>At(J,12)?J:At(J,2)?(se(J.to,M).then(Y=>{At(Y,20)&&!R.delta&&R.type===Pr.pop&&s.go(-1,!1)}).catch(hr),Promise.reject()):(R.delta&&s.go(-R.delta,!1),ue(J,M,fe))).then(J=>{J=J||Ie(M,fe,!1),J&&(R.delta&&!At(J,8)?s.go(-R.delta,!1):R.type===Pr.pop&&At(J,20)&&s.go(-1,!1)),xe(M,fe,J)}).catch(hr)}))}let ft=or(),Rn=or(),we;function ue(y,D,R){Ue(y);const M=Rn.list();return M.length?M.forEach(te=>te(y,D,R)):console.error(y),Promise.reject(y)}function ie(){return we&&l.value!==zt?Promise.resolve():new Promise((y,D)=>{ft.add([y,D])})}function Ue(y){return we||(we=!y,Tt(),ft.list().forEach(([D,R])=>y?R(y):D()),ft.reset()),y}function xn(y,D,R,M){const{scrollBehavior:te}=t;if(!Dn||!te)return Promise.resolve();const fe=!R&&t_(dl(y.fullPath,0))||(M||!R)&&history.state&&history.state.scroll||null;return Oc().then(()=>te(y,D,fe)).then(J=>J&&Xy(J)).catch(J=>ue(J,y,D))}const St=y=>s.go(y);let ht;const He=new Set,sr={currentRoute:l,listening:!0,addRoute:p,removeRoute:w,hasRoute:T,getRoutes:O,resolve:I,options:t,push:B,replace:K,go:St,back:()=>St(-1),forward:()=>St(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Rn.add,isReady:ie,install(y){const D=this;y.component("RouterLink",F_),y.component("RouterView",j_),y.config.globalProperties.$router=D,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>gn(l)}),Dn&&!ht&&l.value===zt&&(ht=!0,B(s.location).catch(te=>{}));const R={};for(const te in zt)R[te]=Ge(()=>l.value[te]);y.provide(si,D),y.provide(tf,Ur(R)),y.provide(Zi,l);const M=y.unmount;He.add(y),y.unmount=function(){He.delete(y),He.size<1&&(c=zt,Le&&Le(),Le=null,l.value=zt,ht=!1,we=!1),M()}}};return sr}function On(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function q_(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>Kn(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Kn(c,l))||s.push(l))}return[n,r,s]}function H_(){return Ot(si)}const ii=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},W_=t=>(vo("data-v-ab58f35b"),t=t(),Io(),t),K_={class:"header"},G_=Bt("Blasted Book Blog"),Y_=Bt("Home"),J_=Bt("About"),Q_=Bt("Create"),Z_=Bt("Create Account"),X_=Bt("Login"),ew={class:"footer"},tw=Bt("Home"),nw=Bt("About"),rw=W_(()=>_e("span",null,"Copyright \xA9 2022 Blasted Book Blog",-1)),sw={__name:"App",setup(t){const e=Ir(!1),n=H_(),r=Vy();Cm(r,i=>{i?e.value=!0:e.value=!1});function s(){r.signOut(),n.push("/")}return(i,o)=>{const a=va("RouterLink"),l=va("RouterView");return De(),Zt(Ke,null,[_e("header",K_,[_e("div",null,[me(a,{to:"/",class:"header-title"},{default:mt(()=>[G_]),_:1})]),_e("nav",null,[me(a,{to:"/"},{default:mt(()=>[Y_]),_:1}),me(a,{to:"/about"},{default:mt(()=>[J_]),_:1}),e.value?(De(),Vn(a,{key:0,to:"/create"},{default:mt(()=>[Q_]),_:1})):ts("",!0),e.value?ts("",!0):(De(),Vn(a,{key:1,to:"/register"},{default:mt(()=>[Z_]),_:1})),e.value?ts("",!0):(De(),Vn(a,{key:2,to:"/login"},{default:mt(()=>[X_]),_:1})),e.value?(De(),Zt("a",{key:3,href:"#",onClick:s},"Logout")):ts("",!0)])]),me(l),_e("footer",ew,[_e("nav",null,[me(a,{to:"/"},{default:mt(()=>[tw]),_:1}),me(a,{to:"/about"},{default:mt(()=>[nw]),_:1})]),rw])],64)}}},iw=ii(sw,[["__scopeId","data-v-ab58f35b"]]),ow="modulepreload",aw=function(t){return"/"+t},Al={},rs=function(e,n,r){return!n||n.length===0?e():Promise.all(n.map(s=>{if(s=aw(s),s in Al)return;Al[s]=!0;const i=s.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":ow,i||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),i)return new Promise((l,c)=>{a.addEventListener("load",l),a.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};function nf(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let nr=nf();function lw(t){nr=t}const cw=/[&<>"']/,uw=/[&<>"']/g,fw=/[<>"']|&(?!#?\w+;)/,hw=/[<>"']|&(?!#?\w+;)/g,dw={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Rl=t=>dw[t];function Ee(t,e){if(e){if(cw.test(t))return t.replace(uw,Rl)}else if(fw.test(t))return t.replace(hw,Rl);return t}const pw=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function rf(t){return t.replace(pw,(e,n)=>(n=n.toLowerCase(),n==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):""))}const gw=/(^|[^\[])\^/g;function ce(t,e){t=typeof t=="string"?t:t.source,e=e||"";const n={replace:(r,s)=>(s=s.source||s,s=s.replace(gw,"$1"),t=t.replace(r,s),n),getRegex:()=>new RegExp(t,e)};return n}const mw=/[^\w:]/g,yw=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function xl(t,e,n){if(t){let r;try{r=decodeURIComponent(rf(n)).replace(mw,"").toLowerCase()}catch{return null}if(r.indexOf("javascript:")===0||r.indexOf("vbscript:")===0||r.indexOf("data:")===0)return null}e&&!yw.test(n)&&(n=vw(e,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n}const ss={},_w=/^[^:]+:\/*[^/]*$/,ww=/^([^:]+:)[\s\S]*$/,bw=/^([^:]+:\/*[^/]*)[\s\S]*$/;function vw(t,e){ss[" "+t]||(_w.test(t)?ss[" "+t]=t+"/":ss[" "+t]=_s(t,"/",!0)),t=ss[" "+t];const n=t.indexOf(":")===-1;return e.substring(0,2)==="//"?n?e:t.replace(ww,"$1")+e:e.charAt(0)==="/"?n?e:t.replace(bw,"$1")+e:t+e}const Ps={exec:function(){}};function ut(t){let e=1,n,r;for(;e<arguments.length;e++){n=arguments[e];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}function Cl(t,e){const n=t.replace(/\|/g,(i,o,a)=>{let l=!1,c=o;for(;--c>=0&&a[c]==="\\";)l=!l;return l?"|":" |"}),r=n.split(/ \|/);let s=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;s<r.length;s++)r[s]=r[s].trim().replace(/\\\|/g,"|");return r}function _s(t,e,n){const r=t.length;if(r===0)return"";let s=0;for(;s<r;){const i=t.charAt(r-s-1);if(i===e&&!n)s++;else if(i!==e&&n)s++;else break}return t.slice(0,r-s)}function Iw(t,e){if(t.indexOf(e[1])===-1)return-1;const n=t.length;let r=0,s=0;for(;s<n;s++)if(t[s]==="\\")s++;else if(t[s]===e[0])r++;else if(t[s]===e[1]&&(r--,r<0))return s;return-1}function sf(t){t&&t.sanitize&&!t.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function Ol(t,e){if(e<1)return"";let n="";for(;e>1;)e&1&&(n+=t),e>>=1,t+=t;return n+t}function Pl(t,e,n,r){const s=e.href,i=e.title?Ee(e.title):null,o=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){r.state.inLink=!0;const a={type:"link",raw:n,href:s,title:i,text:o,tokens:r.inlineTokens(o)};return r.state.inLink=!1,a}return{type:"image",raw:n,href:s,title:i,text:Ee(o)}}function Ew(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const r=n[1];return e.split(`
`).map(s=>{const i=s.match(/^\s+/);if(i===null)return s;const[o]=i;return o.length>=r.length?s.slice(r.length):s}).join(`
`)}class Vo{constructor(e){this.options=e||nr}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const r=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:_s(r,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const r=n[0],s=Ew(r,n[3]||"");return{type:"code",raw:r,lang:n[2]?n[2].trim():n[2],text:s}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let r=n[2].trim();if(/#$/.test(r)){const s=_s(r,"#");(this.options.pedantic||!s||/ $/.test(s))&&(r=s.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:n[0]}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){const r=n[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:n[0],tokens:this.lexer.blockTokens(r,[]),text:r}}}list(e){let n=this.rules.block.list.exec(e);if(n){let r,s,i,o,a,l,c,u,f,d,p,w,O=n[1].trim();const T=O.length>1,I={type:"list",raw:"",ordered:T,start:T?+O.slice(0,-1):"",loose:!1,items:[]};O=T?`\\d{1,9}\\${O.slice(-1)}`:`\\${O}`,this.options.pedantic&&(O=T?O:"[*+-]");const _=new RegExp(`^( {0,3}${O})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(w=!1,!(!(n=_.exec(e))||this.rules.block.hr.test(e)));){if(r=n[0],e=e.substring(r.length),u=n[2].split(`
`,1)[0],f=e.split(`
`,1)[0],this.options.pedantic?(o=2,p=u.trimLeft()):(o=n[2].search(/[^ ]/),o=o>4?1:o,p=u.slice(o),o+=n[1].length),l=!1,!u&&/^ *$/.test(f)&&(r+=f+`
`,e=e.substring(f.length+1),w=!0),!w){const B=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`),K=new RegExp(`^ {0,${Math.min(3,o-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),G=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:\`\`\`|~~~)`),se=new RegExp(`^ {0,${Math.min(3,o-1)}}#`);for(;e&&(d=e.split(`
`,1)[0],u=d,this.options.pedantic&&(u=u.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(G.test(u)||se.test(u)||B.test(u)||K.test(e)));){if(u.search(/[^ ]/)>=o||!u.trim())p+=`
`+u.slice(o);else if(!l)p+=`
`+u;else break;!l&&!u.trim()&&(l=!0),r+=d+`
`,e=e.substring(d.length+1)}}I.loose||(c?I.loose=!0:/\n *\n *$/.test(r)&&(c=!0)),this.options.gfm&&(s=/^\[[ xX]\] /.exec(p),s&&(i=s[0]!=="[ ] ",p=p.replace(/^\[[ xX]\] +/,""))),I.items.push({type:"list_item",raw:r,task:!!s,checked:i,loose:!1,text:p}),I.raw+=r}I.items[I.items.length-1].raw=r.trimRight(),I.items[I.items.length-1].text=p.trimRight(),I.raw=I.raw.trimRight();const C=I.items.length;for(a=0;a<C;a++){this.lexer.state.top=!1,I.items[a].tokens=this.lexer.blockTokens(I.items[a].text,[]);const B=I.items[a].tokens.filter(G=>G.type==="space"),K=B.every(G=>{const se=G.raw.split("");let pe=0;for(const ge of se)if(ge===`
`&&(pe+=1),pe>1)return!0;return!1});!I.loose&&B.length&&K&&(I.loose=!0,I.items[a].loose=!0)}return I}}html(e){const n=this.rules.block.html.exec(e);if(n){const r={type:"html",raw:n[0],pre:!this.options.sanitizer&&(n[1]==="pre"||n[1]==="script"||n[1]==="style"),text:n[0]};if(this.options.sanitize){const s=this.options.sanitizer?this.options.sanitizer(n[0]):Ee(n[0]);r.type="paragraph",r.text=s,r.tokens=this.lexer.inline(s)}return r}}def(e){const n=this.rules.block.def.exec(e);if(n){n[3]&&(n[3]=n[3].substring(1,n[3].length-1));const r=n[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:r,raw:n[0],href:n[2],title:n[3]}}}table(e){const n=this.rules.block.table.exec(e);if(n){const r={type:"table",header:Cl(n[1]).map(s=>({text:s})),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(r.header.length===r.align.length){r.raw=n[0];let s=r.align.length,i,o,a,l;for(i=0;i<s;i++)/^ *-+: *$/.test(r.align[i])?r.align[i]="right":/^ *:-+: *$/.test(r.align[i])?r.align[i]="center":/^ *:-+ *$/.test(r.align[i])?r.align[i]="left":r.align[i]=null;for(s=r.rows.length,i=0;i<s;i++)r.rows[i]=Cl(r.rows[i],r.header.length).map(c=>({text:c}));for(s=r.header.length,o=0;o<s;o++)r.header[o].tokens=this.lexer.inline(r.header[o].text);for(s=r.rows.length,o=0;o<s;o++)for(l=r.rows[o],a=0;a<l.length;a++)l[a].tokens=this.lexer.inline(l[a].text);return r}}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:Ee(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):Ee(n[0]):n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const r=n[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const o=_s(r.slice(0,-1),"\\");if((r.length-o.length)%2===0)return}else{const o=Iw(n[2],"()");if(o>-1){const l=(n[0].indexOf("!")===0?5:4)+n[1].length+o;n[2]=n[2].substring(0,o),n[0]=n[0].substring(0,l).trim(),n[3]=""}}let s=n[2],i="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);o&&(s=o[1],i=o[3])}else i=n[3]?n[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(this.options.pedantic&&!/>$/.test(r)?s=s.slice(1):s=s.slice(1,-1)),Pl(n,{href:s&&s.replace(this.rules.inline._escapes,"$1"),title:i&&i.replace(this.rules.inline._escapes,"$1")},n[0],this.lexer)}}reflink(e,n){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){let s=(r[2]||r[1]).replace(/\s+/g," ");if(s=n[s.toLowerCase()],!s||!s.href){const i=r[0].charAt(0);return{type:"text",raw:i,text:i}}return Pl(r,s,r[0],this.lexer)}}emStrong(e,n,r=""){let s=this.rules.inline.emStrong.lDelim.exec(e);if(!s||s[3]&&r.match(/[\p{L}\p{N}]/u))return;const i=s[1]||s[2]||"";if(!i||i&&(r===""||this.rules.inline.punctuation.exec(r))){const o=s[0].length-1;let a,l,c=o,u=0;const f=s[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(f.lastIndex=0,n=n.slice(-1*e.length+o);(s=f.exec(n))!=null;){if(a=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!a)continue;if(l=a.length,s[3]||s[4]){c+=l;continue}else if((s[5]||s[6])&&o%3&&!((o+l)%3)){u+=l;continue}if(c-=l,c>0)continue;if(l=Math.min(l,l+c+u),Math.min(o,l)%2){const p=e.slice(1,o+s.index+l);return{type:"em",raw:e.slice(0,o+s.index+l+1),text:p,tokens:this.lexer.inlineTokens(p)}}const d=e.slice(2,o+s.index+l-1);return{type:"strong",raw:e.slice(0,o+s.index+l+1),text:d,tokens:this.lexer.inlineTokens(d)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let r=n[2].replace(/\n/g," ");const s=/[^ ]/.test(r),i=/^ /.test(r)&&/ $/.test(r);return s&&i&&(r=r.substring(1,r.length-1)),r=Ee(r,!0),{type:"codespan",raw:n[0],text:r}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e,n){const r=this.rules.inline.autolink.exec(e);if(r){let s,i;return r[2]==="@"?(s=Ee(this.options.mangle?n(r[1]):r[1]),i="mailto:"+s):(s=Ee(r[1]),i=s),{type:"link",raw:r[0],text:s,href:i,tokens:[{type:"text",raw:s,text:s}]}}}url(e,n){let r;if(r=this.rules.inline.url.exec(e)){let s,i;if(r[2]==="@")s=Ee(this.options.mangle?n(r[0]):r[0]),i="mailto:"+s;else{let o;do o=r[0],r[0]=this.rules.inline._backpedal.exec(r[0])[0];while(o!==r[0]);s=Ee(r[0]),r[1]==="www."?i="http://"+s:i=s}return{type:"link",raw:r[0],text:s,href:i,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e,n){const r=this.rules.inline.text.exec(e);if(r){let s;return this.lexer.state.inRawBlock?s=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):Ee(r[0]):r[0]:s=Ee(this.options.smartypants?n(r[0]):r[0]),{type:"text",raw:r[0],text:s}}}}const F={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Ps,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};F._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;F._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;F.def=ce(F.def).replace("label",F._label).replace("title",F._title).getRegex();F.bullet=/(?:[*+-]|\d{1,9}[.)])/;F.listItemStart=ce(/^( *)(bull) */).replace("bull",F.bullet).getRegex();F.list=ce(F.list).replace(/bull/g,F.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+F.def.source+")").getRegex();F._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";F._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;F.html=ce(F.html,"i").replace("comment",F._comment).replace("tag",F._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();F.paragraph=ce(F._paragraph).replace("hr",F.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",F._tag).getRegex();F.blockquote=ce(F.blockquote).replace("paragraph",F.paragraph).getRegex();F.normal=ut({},F);F.gfm=ut({},F.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});F.gfm.table=ce(F.gfm.table).replace("hr",F.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",F._tag).getRegex();F.gfm.paragraph=ce(F._paragraph).replace("hr",F.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",F.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",F._tag).getRegex();F.pedantic=ut({},F.normal,{html:ce(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",F._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ps,paragraph:ce(F.normal._paragraph).replace("hr",F.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",F.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const P={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Ps,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Ps,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};P._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";P.punctuation=ce(P.punctuation).replace(/punctuation/g,P._punctuation).getRegex();P.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;P.escapedEmSt=/\\\*|\\_/g;P._comment=ce(F._comment).replace("(?:-->|$)","-->").getRegex();P.emStrong.lDelim=ce(P.emStrong.lDelim).replace(/punct/g,P._punctuation).getRegex();P.emStrong.rDelimAst=ce(P.emStrong.rDelimAst,"g").replace(/punct/g,P._punctuation).getRegex();P.emStrong.rDelimUnd=ce(P.emStrong.rDelimUnd,"g").replace(/punct/g,P._punctuation).getRegex();P._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;P._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;P._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;P.autolink=ce(P.autolink).replace("scheme",P._scheme).replace("email",P._email).getRegex();P._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;P.tag=ce(P.tag).replace("comment",P._comment).replace("attribute",P._attribute).getRegex();P._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;P._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;P._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;P.link=ce(P.link).replace("label",P._label).replace("href",P._href).replace("title",P._title).getRegex();P.reflink=ce(P.reflink).replace("label",P._label).replace("ref",F._label).getRegex();P.nolink=ce(P.nolink).replace("ref",F._label).getRegex();P.reflinkSearch=ce(P.reflinkSearch,"g").replace("reflink",P.reflink).replace("nolink",P.nolink).getRegex();P.normal=ut({},P);P.pedantic=ut({},P.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:ce(/^!?\[(label)\]\((.*?)\)/).replace("label",P._label).getRegex(),reflink:ce(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",P._label).getRegex()});P.gfm=ut({},P.normal,{escape:ce(P.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});P.gfm.url=ce(P.gfm.url,"i").replace("email",P.gfm._extended_email).getRegex();P.breaks=ut({},P.gfm,{br:ce(P.br).replace("{2,}","*").getRegex(),text:ce(P.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function kw(t){return t.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function Nl(t){let e="",n,r;const s=t.length;for(n=0;n<s;n++)r=t.charCodeAt(n),Math.random()>.5&&(r="x"+r.toString(16)),e+="&#"+r+";";return e}class Lt{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||nr,this.options.tokenizer=this.options.tokenizer||new Vo,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:F.normal,inline:P.normal};this.options.pedantic?(n.block=F.pedantic,n.inline=P.pedantic):this.options.gfm&&(n.block=F.gfm,this.options.breaks?n.inline=P.breaks:n.inline=P.gfm),this.tokenizer.rules=n}static get rules(){return{block:F,inline:P}}static lex(e,n){return new Lt(n).lex(e)}static lexInline(e,n){return new Lt(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let n;for(;n=this.inlineQueue.shift();)this.inlineTokens(n.src,n.tokens);return this.tokens}blockTokens(e,n=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(a,l,c)=>l+"    ".repeat(c.length));let r,s,i,o;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(a=>(r=a.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length),r.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length),s=n[n.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+r.raw,s.text+=`
`+r.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text):n.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length),s=n[n.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+r.raw,s.text+=`
`+r.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),n.push(r);continue}if(i=e,this.options.extensions&&this.options.extensions.startBlock){let a=1/0;const l=e.slice(1);let c;this.options.extensions.startBlock.forEach(function(u){c=u.call({lexer:this},l),typeof c=="number"&&c>=0&&(a=Math.min(a,c))}),a<1/0&&a>=0&&(i=e.substring(0,a+1))}if(this.state.top&&(r=this.tokenizer.paragraph(i))){s=n[n.length-1],o&&s.type==="paragraph"?(s.raw+=`
`+r.raw,s.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):n.push(r),o=i.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length),s=n[n.length-1],s&&s.type==="text"?(s.raw+=`
`+r.raw,s.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):n.push(r);continue}if(e){const a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let r,s,i,o=e,a,l,c;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)u.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,a.index)+"["+Ol("a",a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,a.index)+"["+Ol("a",a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.escapedEmSt.exec(o))!=null;)o=o.slice(0,a.index)+"++"+o.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(l||(c=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(r=u.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),s=n[n.length-1],s&&r.type==="text"&&s.type==="text"?(s.raw+=r.raw,s.text+=r.text):n.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),s=n[n.length-1],s&&r.type==="text"&&s.type==="text"?(s.raw+=r.raw,s.text+=r.text):n.push(r);continue}if(r=this.tokenizer.emStrong(e,o,c)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.autolink(e,Nl)){e=e.substring(r.raw.length),n.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e,Nl))){e=e.substring(r.raw.length),n.push(r);continue}if(i=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const f=e.slice(1);let d;this.options.extensions.startInline.forEach(function(p){d=p.call({lexer:this},f),typeof d=="number"&&d>=0&&(u=Math.min(u,d))}),u<1/0&&u>=0&&(i=e.substring(0,u+1))}if(r=this.tokenizer.inlineText(i,kw)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(c=r.raw.slice(-1)),l=!0,s=n[n.length-1],s&&s.type==="text"?(s.raw+=r.raw,s.text+=r.text):n.push(r);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return n}}class jo{constructor(e){this.options=e||nr}code(e,n,r){const s=(n||"").match(/\S*/)[0];if(this.options.highlight){const i=this.options.highlight(e,s);i!=null&&i!==e&&(r=!0,e=i)}return e=e.replace(/\n$/,"")+`
`,s?'<pre><code class="'+this.options.langPrefix+Ee(s,!0)+'">'+(r?e:Ee(e,!0))+`</code></pre>
`:"<pre><code>"+(r?e:Ee(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e){return e}heading(e,n,r,s){if(this.options.headerIds){const i=this.options.headerPrefix+s.slug(r);return`<h${n} id="${i}">${e}</h${n}>
`}return`<h${n}>${e}</h${n}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,n,r){const s=n?"ol":"ul",i=n&&r!==1?' start="'+r+'"':"";return"<"+s+i+`>
`+e+"</"+s+`>
`}listitem(e){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,n){return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+n+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,n){const r=n.header?"th":"td";return(n.align?`<${r} align="${n.align}">`:`<${r}>`)+e+`</${r}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,n,r){if(e=xl(this.options.sanitize,this.options.baseUrl,e),e===null)return r;let s='<a href="'+Ee(e)+'"';return n&&(s+=' title="'+n+'"'),s+=">"+r+"</a>",s}image(e,n,r){if(e=xl(this.options.sanitize,this.options.baseUrl,e),e===null)return r;let s=`<img src="${e}" alt="${r}"`;return n&&(s+=` title="${n}"`),s+=this.options.xhtml?"/>":">",s}text(e){return e}}class of{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,n,r){return""+r}image(e,n,r){return""+r}br(){return""}}class af{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,n){let r=e,s=0;if(this.seen.hasOwnProperty(r)){s=this.seen[e];do s++,r=e+"-"+s;while(this.seen.hasOwnProperty(r))}return n||(this.seen[e]=s,this.seen[r]=0),r}slug(e,n={}){const r=this.serialize(e);return this.getNextSafeSlug(r,n.dryrun)}}class vt{constructor(e){this.options=e||nr,this.options.renderer=this.options.renderer||new jo,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new of,this.slugger=new af}static parse(e,n){return new vt(n).parse(e)}static parseInline(e,n){return new vt(n).parseInline(e)}parse(e,n=!0){let r="",s,i,o,a,l,c,u,f,d,p,w,O,T,I,_,C,B,K,G;const se=e.length;for(s=0;s<se;s++){if(p=e[s],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[p.type]&&(G=this.options.extensions.renderers[p.type].call({parser:this},p),G!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(p.type))){r+=G||"";continue}switch(p.type){case"space":continue;case"hr":{r+=this.renderer.hr();continue}case"heading":{r+=this.renderer.heading(this.parseInline(p.tokens),p.depth,rf(this.parseInline(p.tokens,this.textRenderer)),this.slugger);continue}case"code":{r+=this.renderer.code(p.text,p.lang,p.escaped);continue}case"table":{for(f="",u="",a=p.header.length,i=0;i<a;i++)u+=this.renderer.tablecell(this.parseInline(p.header[i].tokens),{header:!0,align:p.align[i]});for(f+=this.renderer.tablerow(u),d="",a=p.rows.length,i=0;i<a;i++){for(c=p.rows[i],u="",l=c.length,o=0;o<l;o++)u+=this.renderer.tablecell(this.parseInline(c[o].tokens),{header:!1,align:p.align[o]});d+=this.renderer.tablerow(u)}r+=this.renderer.table(f,d);continue}case"blockquote":{d=this.parse(p.tokens),r+=this.renderer.blockquote(d);continue}case"list":{for(w=p.ordered,O=p.start,T=p.loose,a=p.items.length,d="",i=0;i<a;i++)_=p.items[i],C=_.checked,B=_.task,I="",_.task&&(K=this.renderer.checkbox(C),T?_.tokens.length>0&&_.tokens[0].type==="paragraph"?(_.tokens[0].text=K+" "+_.tokens[0].text,_.tokens[0].tokens&&_.tokens[0].tokens.length>0&&_.tokens[0].tokens[0].type==="text"&&(_.tokens[0].tokens[0].text=K+" "+_.tokens[0].tokens[0].text)):_.tokens.unshift({type:"text",text:K}):I+=K),I+=this.parse(_.tokens,T),d+=this.renderer.listitem(I,B,C);r+=this.renderer.list(d,w,O);continue}case"html":{r+=this.renderer.html(p.text);continue}case"paragraph":{r+=this.renderer.paragraph(this.parseInline(p.tokens));continue}case"text":{for(d=p.tokens?this.parseInline(p.tokens):p.text;s+1<se&&e[s+1].type==="text";)p=e[++s],d+=`
`+(p.tokens?this.parseInline(p.tokens):p.text);r+=n?this.renderer.paragraph(d):d;continue}default:{const pe='Token with "'+p.type+'" type was not found.';if(this.options.silent){console.error(pe);return}else throw new Error(pe)}}}return r}parseInline(e,n){n=n||this.renderer;let r="",s,i,o;const a=e.length;for(s=0;s<a;s++){if(i=e[s],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]&&(o=this.options.extensions.renderers[i.type].call({parser:this},i),o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type))){r+=o||"";continue}switch(i.type){case"escape":{r+=n.text(i.text);break}case"html":{r+=n.html(i.text);break}case"link":{r+=n.link(i.href,i.title,this.parseInline(i.tokens,n));break}case"image":{r+=n.image(i.href,i.title,i.text);break}case"strong":{r+=n.strong(this.parseInline(i.tokens,n));break}case"em":{r+=n.em(this.parseInline(i.tokens,n));break}case"codespan":{r+=n.codespan(i.text);break}case"br":{r+=n.br();break}case"del":{r+=n.del(this.parseInline(i.tokens,n));break}case"text":{r+=n.text(i.text);break}default:{const l='Token with "'+i.type+'" type was not found.';if(this.options.silent){console.error(l);return}else throw new Error(l)}}}return r}}function V(t,e,n){if(typeof t>"u"||t===null)throw new Error("marked(): input parameter is undefined or null");if(typeof t!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected");if(typeof e=="function"&&(n=e,e=null),e=ut({},V.defaults,e||{}),sf(e),n){const s=e.highlight;let i;try{i=Lt.lex(t,e)}catch(l){return n(l)}const o=function(l){let c;if(!l)try{e.walkTokens&&V.walkTokens(i,e.walkTokens),c=vt.parse(i,e)}catch(u){l=u}return e.highlight=s,l?n(l):n(null,c)};if(!s||s.length<3||(delete e.highlight,!i.length))return o();let a=0;V.walkTokens(i,function(l){l.type==="code"&&(a++,setTimeout(()=>{s(l.text,l.lang,function(c,u){if(c)return o(c);u!=null&&u!==l.text&&(l.text=u,l.escaped=!0),a--,a===0&&o()})},0))}),a===0&&o();return}function r(s){if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+Ee(s.message+"",!0)+"</pre>";throw s}try{const s=Lt.lex(t,e);if(e.walkTokens){if(e.async)return Promise.all(V.walkTokens(s,e.walkTokens)).then(()=>vt.parse(s,e)).catch(r);V.walkTokens(s,e.walkTokens)}return vt.parse(s,e)}catch(s){r(s)}}V.options=V.setOptions=function(t){return ut(V.defaults,t),lw(V.defaults),V};V.getDefaults=nf;V.defaults=nr;V.use=function(...t){const e=ut({},...t),n=V.defaults.extensions||{renderers:{},childTokens:{}};let r;t.forEach(s=>{if(s.extensions&&(r=!0,s.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if(i.renderer){const o=n.renderers?n.renderers[i.name]:null;o?n.renderers[i.name]=function(...a){let l=i.renderer.apply(this,a);return l===!1&&(l=o.apply(this,a)),l}:n.renderers[i.name]=i.renderer}if(i.tokenizer){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");n[i.level]?n[i.level].unshift(i.tokenizer):n[i.level]=[i.tokenizer],i.start&&(i.level==="block"?n.startBlock?n.startBlock.push(i.start):n.startBlock=[i.start]:i.level==="inline"&&(n.startInline?n.startInline.push(i.start):n.startInline=[i.start]))}i.childTokens&&(n.childTokens[i.name]=i.childTokens)})),s.renderer){const i=V.defaults.renderer||new jo;for(const o in s.renderer){const a=i[o];i[o]=(...l)=>{let c=s.renderer[o].apply(i,l);return c===!1&&(c=a.apply(i,l)),c}}e.renderer=i}if(s.tokenizer){const i=V.defaults.tokenizer||new Vo;for(const o in s.tokenizer){const a=i[o];i[o]=(...l)=>{let c=s.tokenizer[o].apply(i,l);return c===!1&&(c=a.apply(i,l)),c}}e.tokenizer=i}if(s.walkTokens){const i=V.defaults.walkTokens;e.walkTokens=function(o){let a=[];return a.push(s.walkTokens.call(this,o)),i&&(a=a.concat(i.call(this,o))),a}}r&&(e.extensions=n),V.setOptions(e)})};V.walkTokens=function(t,e){let n=[];for(const r of t)switch(n=n.concat(e.call(V,r)),r.type){case"table":{for(const s of r.header)n=n.concat(V.walkTokens(s.tokens,e));for(const s of r.rows)for(const i of s)n=n.concat(V.walkTokens(i.tokens,e));break}case"list":{n=n.concat(V.walkTokens(r.items,e));break}default:V.defaults.extensions&&V.defaults.extensions.childTokens&&V.defaults.extensions.childTokens[r.type]?V.defaults.extensions.childTokens[r.type].forEach(function(s){n=n.concat(V.walkTokens(r[s],e))}):r.tokens&&(n=n.concat(V.walkTokens(r.tokens,e)))}return n};V.parseInline=function(t,e){if(typeof t>"u"||t===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof t!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected");e=ut({},V.defaults,e||{}),sf(e);try{const n=Lt.lexInline(t,e);return e.walkTokens&&V.walkTokens(n,e.walkTokens),vt.parseInline(n,e)}catch(n){if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+Ee(n.message+"",!0)+"</pre>";throw n}};V.Parser=vt;V.parser=vt.parse;V.Renderer=jo;V.TextRenderer=of;V.Lexer=Lt;V.lexer=Lt.lex;V.Tokenizer=Vo;V.Slugger=af;V.parse=V;V.options;V.setOptions;V.use;V.walkTokens;V.parseInline;vt.parse;Lt.lex;const Tw={class:"recent"},Sw={class:"date"},Aw=["innerHTML"],Rw={class:"article-summary"},xw={href:""},Cw={__name:"ArticleSummary",props:{content:String,date:Number,title:String,ups:Number,parent:String,comments:Number},setup(t){const e=t,n=Ir("");n.value=e.content;const r=Ir(""),s=new Date(e.date);return r.value=s.toLocaleDateString("en-us",{year:"numeric",month:"long",day:"numeric"}),(i,o)=>(De(),Zt("div",Tw,[_e("h3",null,Yr(e.title),1),_e("span",Sw,Yr(r.value),1),_e("div",{class:"content-container",innerHTML:gn(V).parse(n.value)},null,8,Aw),_e("div",Rw,[_e("a",xw,Yr(e.comments)+" Comment/s",1),_e("span",null,Yr(e.ups)+" \u2191",1)])]))}},Ow=ii(Cw,[["__scopeId","data-v-97e7548d"]]);/**
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
 */class We{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}We.UNAUTHENTICATED=new We(null),We.GOOGLE_CREDENTIALS=new We("google-credentials-uid"),We.FIRST_PARTY=new We("first-party-uid"),We.MOCK_USER=new We("mock-user");/**
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
 */let rr="9.10.0";/**
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
 */const Yn=new Zs("@firebase/firestore");function Ns(t,...e){if(Yn.logLevel<=re.DEBUG){const n=e.map(qo);Yn.debug(`Firestore (${rr}): ${t}`,...n)}}function zo(t,...e){if(Yn.logLevel<=re.ERROR){const n=e.map(qo);Yn.error(`Firestore (${rr}): ${t}`,...n)}}function Pw(t,...e){if(Yn.logLevel<=re.WARN){const n=e.map(qo);Yn.warn(`Firestore (${rr}): ${t}`,...n)}}function qo(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function ye(t="Unexpected state"){const e=`FIRESTORE (${rr}) INTERNAL ASSERTION FAILED: `+t;throw zo(e),new Error(e)}function $t(t,e){t||ye()}function oi(t,e){return t}/**
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
 */const Dl="ok",Nw="cancelled",pr="unknown",W="invalid-argument",Dw="deadline-exceeded",Mw="not-found",Lw="permission-denied",Xi="unauthenticated",$w="resource-exhausted",Jn="failed-precondition",Fw="aborted",Uw="out-of-range",lf="unimplemented",Bw="internal",Vw="unavailable";class U extends ct{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class jw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class zw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(We.UNAUTHENTICATED))}shutdown(){}}class qw{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?($t(typeof e.accessToken=="string"),new jw(e.accessToken,new We(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class Hw{constructor(e,n,r,s){this.t=e,this.i=n,this.o=r,this.u=s,this.type="FirstParty",this.user=We.FIRST_PARTY,this.h=new Map}l(){return this.u?this.u():($t(!(typeof this.t!="object"||this.t===null||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.h.set("X-Goog-AuthUser",this.i);const e=this.l();return e&&this.h.set("Authorization",e),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}}class Ww{constructor(e,n,r,s){this.t=e,this.i=n,this.o=r,this.u=s}getToken(){return Promise.resolve(new Hw(this.t,this.i,this.o,this.u))}start(e,n){e.enqueueRetryable(()=>n(We.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Kw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Gw{constructor(e){this.m=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?($t(typeof e.token=="string"),new Kw(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
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
 */class Yw{constructor(e,n,r,s,i,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Nr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Nr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Nr&&e.projectId===this.projectId&&e.database===this.database}}class Dr{constructor(e,n,r){n===void 0?n=0:n>e.length&&ye(),r===void 0?r=e.length-n:r>e.length-n&&ye(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Dr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Dr?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ve extends Dr{construct(e,n,r){return new ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(W,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ve(n)}static emptyPath(){return new ve([])}}const Jw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ve extends Dr{construct(e,n,r){return new Ve(e,n,r)}static isValidIdentifier(e){return Jw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ve.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ve(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new U(W,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new U(W,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new U(W,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new U(W,"Unterminated ` in path: "+e);return new Ve(n)}static emptyPath(){return new Ve([])}}/**
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
 */class Re{constructor(e){this.path=e}static fromPath(e){return new Re(ve.fromString(e))}static fromName(e){return new Re(ve.fromString(e).popFirst(5))}static empty(){return new Re(ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Re(new ve(e.slice()))}}/**
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
 */function cf(t,e,n){if(!n)throw new U(W,`Function ${t}() cannot be called with an empty ${e}.`)}function Ml(t){if(!Re.isDocumentKey(t))throw new U(W,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ll(t){if(Re.isDocumentKey(t))throw new U(W,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ai(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ye()}function uf(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(W,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ai(t);throw new U(W,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Qw(t,e){if(e<=0)throw new U(W,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Zw(t){return t==null}function Ds(t){return t===0&&1/t==-1/0}/**
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
 */const Xw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */var $l,Q;function Fl(t){if(t===void 0)return zo("RPC_ERROR","HTTP error has no status"),pr;switch(t){case 200:return Dl;case 400:return Jn;case 401:return Xi;case 403:return Lw;case 404:return Mw;case 409:return Fw;case 416:return Uw;case 429:return $w;case 499:return Nw;case 500:return pr;case 501:return lf;case 503:return Vw;case 504:return Dw;default:return t>=200&&t<300?Dl:t>=400&&t<500?Jn:t>=500&&t<600?Bw:pr}}/**
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
 */(Q=$l||($l={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";class eb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.p=n+"://"+e.host,this.g="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}v(e,n,r,s,i){const o=this.T(e,n);Ns("RestConnection","Sending: ",o,r);const a={};return this.I(a,s,i),this.A(e,o,a,r).then(l=>(Ns("RestConnection","Received: ",l),l),l=>{throw Pw("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}R(e,n,r,s,i,o){return this.v(e,n,r,s,i)}I(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+rr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}T(e,n){const r=Xw[e];return`${this.p}/v1/${n}:${r}`}}{constructor(e,n){super(e),this.P=n}V(e,n){throw new Error("Not supported by FetchConnection")}async A(e,n,r,s){const i=JSON.stringify(s);let o;try{o=await this.P(n,{method:"POST",headers:r,body:i})}catch(a){throw new U(Fl(a.status),"Request failed with error: "+a.statusText)}if(!o.ok)throw new U(Fl(o.status),"Request failed with error: "+o.statusText);return o.json()}}/**
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
 */function tb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class nb{static N(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=tb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ke(t,e){return t<e?-1:t>e?1:0}function ff(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(W,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(W,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(W,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(W,"Timestamp seconds out of range: "+e)}static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class nt{constructor(e){this.timestamp=e}static fromTimestamp(e){return new nt(e)}static min(){return new nt(new je(0,0))}static max(){return new nt(new je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function Ul(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function li(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
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
 */class Ms{constructor(e,n){this.comparator=e,this.root=n||Ae.EMPTY}insert(e,n){return new Ms(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ae.BLACK,null,null))}remove(e){return new Ms(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ae.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new is(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new is(this.root,e,this.comparator,!1)}getReverseIterator(){return new is(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new is(this.root,e,this.comparator,!0)}}class is{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ae{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:Ae.RED,this.left=s!=null?s:Ae.EMPTY,this.right=i!=null?i:Ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ae(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ae.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ae.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ye();const e=this.left.check();if(e!==this.right.check())throw ye();return e+(this.isRed()?0:1)}}Ae.EMPTY=null,Ae.RED=!0,Ae.BLACK=!1;Ae.EMPTY=new class{constructor(){this.size=0}get key(){throw ye()}get value(){throw ye()}get color(){throw ye()}get left(){throw ye()}get right(){throw ye()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Ae(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ls{constructor(e){this.comparator=e,this.data=new Ms(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Bl(this.data.getIterator())}getIteratorFrom(e){return new Bl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ls)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ls(this.comparator);return n.data=e,n}}class Bl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Mr{constructor(e){this.fields=e,e.sort(Ve.comparator)}static empty(){return new Mr([])}unionWith(e){let n=new Ls(Ve.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Mr(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ff(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ft(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new Ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ft.EMPTY_BYTE_STRING=new Ft("");const rb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vn(t){if($t(!!t),typeof t=="string"){let e=0;const n=rb.exec(t);if($t(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Lr(t){return typeof t=="string"?Ft.fromBase64String(t):Ft.fromUint8Array(t)}/**
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
 */function hf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function df(t){const e=t.mapValue.fields.__previous_value__;return hf(e)?df(e):e}function $r(t){const e=vn(t.mapValue.fields.__local_write_time__.timestampValue);return new je(e.seconds,e.nanos)}/**
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
 */const os={fields:{__type__:{stringValue:"__max__"}}};function In(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?hf(t)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:10:ye()}function $s(t,e){if(t===e)return!0;const n=In(t);if(n!==In(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return $r(t).isEqual($r(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=vn(r.timestampValue),o=vn(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Lr(r.bytesValue).isEqual(Lr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return be(r.geoPointValue.latitude)===be(s.geoPointValue.latitude)&&be(r.geoPointValue.longitude)===be(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return be(r.integerValue)===be(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=be(r.doubleValue),o=be(s.doubleValue);return i===o?Ds(i)===Ds(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return ff(t.arrayValue.values||[],e.arrayValue.values||[],$s);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Ul(i)!==Ul(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!$s(i[a],o[a])))return!1;return!0}(t,e);default:return ye()}}function Fr(t,e){return(t.values||[]).find(n=>$s(n,e))!==void 0}function Fs(t,e){if(t===e)return 0;const n=In(t),r=In(e);if(n!==r)return ke(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ke(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=be(s.integerValue||s.doubleValue),a=be(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Vl(t.timestampValue,e.timestampValue);case 4:return Vl($r(t),$r(e));case 5:return ke(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Lr(s),a=Lr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=ke(o[l],a[l]);if(c!==0)return c}return ke(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=ke(be(s.latitude),be(i.latitude));return o!==0?o:ke(be(s.longitude),be(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Fs(o[l],a[l]);if(c)return c}return ke(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===os&&i===os)return 0;if(s===os)return 1;if(i===os)return-1;const o=s.fields||{},a=Object.keys(o),l=i.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const f=ke(a[u],c[u]);if(f!==0)return f;const d=Fs(o[a[u]],l[c[u]]);if(d!==0)return d}return ke(a.length,c.length)}(t.mapValue,e.mapValue);default:throw ye()}}function Vl(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ke(t,e);const n=vn(t),r=vn(e),s=ke(n.seconds,r.seconds);return s!==0?s:ke(n.nanos,r.nanos)}function jl(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function pf(t){return!!t&&"arrayValue"in t}function zl(t){return!!t&&"nullValue"in t}function ql(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ai(t){return!!t&&"mapValue"in t}function gr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return li(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=gr(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=gr(t.arrayValue.values[n]);return e}return Object.assign({},t)}class _t{constructor(e){this.value=e}static empty(){return new _t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ai(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=gr(n)}setAll(e){let n=Ve.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=gr(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ai(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return $s(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ai(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){li(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new _t(gr(this.value))}}/**
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
 */class Wt{constructor(e,n,r,s,i,o){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Wt(e,0,nt.min(),nt.min(),_t.empty(),0)}static newFoundDocument(e,n,r){return new Wt(e,1,n,nt.min(),r,0)}static newNoDocument(e,n){return new Wt(e,2,n,nt.min(),_t.empty(),0)}static newUnknownDocument(e,n){return new Wt(e,3,n,nt.min(),_t.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=nt.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Wt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class sb{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.D=null}}function Hl(t,e=null,n=[],r=[],s=null,i=null,o=null){return new sb(t,e,n,r,s,i,o)}class kt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.$(e,n,r):new ib(e,n,r):n==="array-contains"?new lb(e,r):n==="in"?new cb(e,r):n==="not-in"?new ub(e,r):n==="array-contains-any"?new fb(e,r):new kt(e,n,r)}static $(e,n,r){return n==="in"?new ob(e,r):new ab(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.F(Fs(n,this.value)):n!==null&&In(this.value)===In(n)&&this.F(Fs(n,this.value))}F(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class ib extends kt{constructor(e,n,r){super(e,n,r),this.key=Re.fromName(r.referenceValue)}matches(e){const n=Re.comparator(e.key,this.key);return this.F(n)}}class ob extends kt{constructor(e,n){super(e,"in",n),this.keys=gf("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ab extends kt{constructor(e,n){super(e,"not-in",n),this.keys=gf("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function gf(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Re.fromName(r.referenceValue))}class lb extends kt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return pf(n)&&Fr(n.arrayValue,this.value)}}class cb extends kt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Fr(this.value.arrayValue,n)}}class ub extends kt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Fr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Fr(this.value.arrayValue,n)}}class fb extends kt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!pf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Fr(this.value.arrayValue,r))}}class Wl{constructor(e,n){this.position=e,this.inclusive=n}}class mr{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
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
 */class ci{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.q=null,this.O=null,this.startAt,this.endAt}}function Ho(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Wo(t){for(const e of t.filters)if(e.S())return e.field;return null}function hb(t){return t.collectionGroup!==null}function Kl(t){const e=oi(t);if(e.q===null){e.q=[];const n=Wo(e),r=Ho(e);if(n!==null&&r===null)n.isKeyField()||e.q.push(new mr(n)),e.q.push(new mr(Ve.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.q.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.q.push(new mr(Ve.keyField(),i))}}}return e.q}function db(t){const e=oi(t);if(!e.O)if(e.limitType==="F")e.O=Hl(e.path,e.collectionGroup,Kl(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Kl(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new mr(i.field,o))}const r=e.endAt?new Wl(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Wl(e.startAt.position,e.startAt.inclusive):null;e.O=Hl(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.O}/**
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
 */function pb(t,e){return function(n){return typeof n=="number"&&Number.isInteger(n)&&!Ds(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}(e)?function(n){return{integerValue:""+n}}(e):function(n,r){if(n.k){if(isNaN(r))return{doubleValue:"NaN"};if(r===1/0)return{doubleValue:"Infinity"};if(r===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ds(r)?"-0":r}}(t,e)}/**
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
 */class ui{constructor(){this._=void 0}}class gb extends ui{}class mb extends ui{constructor(e){super(),this.elements=e}}class yb extends ui{constructor(e){super(),this.elements=e}}class _b extends ui{constructor(e,n){super(),this.C=e,this.L=n}}class yr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new yr}static exists(e){return new yr(void 0,e)}static updateTime(e){return new yr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class fi{}class mf extends fi{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class yf extends fi{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class wb extends fi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bb extends fi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */const vb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Ib=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Eb{constructor(e,n){this.databaseId=e,this.k=n}}function eo(t,e){return t.k?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function kb(t,e){return t.k?e.toBase64():e.toUint8Array()}function Tb(t,e){return eo(t,e.toTimestamp())}function Sb(t){return $t(!!t),nt.fromTimestamp(function(e){const n=vn(e);return new je(n.seconds,n.nanos)}(t))}function Ko(t,e){return function(n){return new ve(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function to(t,e){return Ko(t.databaseId,e.path)}function Ab(t,e){const n=function(s){const i=ve.fromString(s);return $t(_f(i)),i}(e);if(n.get(1)!==t.databaseId.projectId)throw new U(W,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(W,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Re(($t((r=n).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function Gl(t,e){return Ko(t.databaseId,e)}function Rb(t){return new ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Yl(t,e,n){return{name:to(t,e),fields:n.value.mapValue.fields}}function xb(t,e){let n;if(e instanceof mf)n={update:Yl(t,e.key,e.value)};else if(e instanceof wb)n={delete:to(t,e.key)};else if(e instanceof yf)n={update:Yl(t,e.key,e.data),updateMask:Nb(e.fieldMask)};else{if(!(e instanceof bb))return ye();n={verify:to(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof gb)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof mb)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof yb)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof _b)return{fieldPath:i.field.canonicalString(),increment:o.L};throw ye()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:Tb(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ye()}(t,e.precondition)),n}function Cb(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Gl(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Gl(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length===0)return;const c=l.map(u=>function(f){if(f.op==="=="){if(ql(f.value))return{unaryFilter:{field:Pn(f.field),op:"IS_NAN"}};if(zl(f.value))return{unaryFilter:{field:Pn(f.field),op:"IS_NULL"}}}else if(f.op==="!="){if(ql(f.value))return{unaryFilter:{field:Pn(f.field),op:"IS_NOT_NAN"}};if(zl(f.value))return{unaryFilter:{field:Pn(f.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pn(f.field),op:Pb(f.op),value:f.value}}}(u));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:Pn(u.field),direction:Ob(u.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(l,c){return l.k||Zw(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Ob(t){return vb[t]}function Pb(t){return Ib[t]}function Pn(t){return{fieldPath:t.canonicalString()}}function Nb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function _f(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */function Go(t){return new Eb(t,!0)}/**
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
 */class Db extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.Z=r,this.C=s,this.tt=!1}et(){if(this.tt)throw new U(Jn,"The client has already been terminated.")}v(e,n,r){return this.et(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.Z.v(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===Xi&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new U(pr,s.toString())})}R(e,n,r,s){return this.et(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.Z.R(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===Xi&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(pr,i.toString())})}terminate(){this.tt=!0}}async function Mb(t,e){const n=oi(t),r=Rb(n.C)+"/documents",s={writes:e.map(i=>xb(n.C,i))};await n.v("Commit",r,s)}async function Lb(t,e){const n=oi(t),r=Cb(n.C,db(e));return(await n.R("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(i,o,a){const l=Ab(i,o.name),c=Sb(o.updateTime),u=new _t({mapValue:{fields:o.fields}}),f=Wt.newFoundDocument(l,c,u);return a&&f.setHasCommittedMutations(),a?f.setHasCommittedMutations():f}(n.C,s.document,void 0))}/**
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
 */const _r=new Map;function wf(t){if(t._terminated)throw new U(Jn,"The client has already been terminated.");if(!_r.has(t)){Ns("ComponentProvider","Initializing Datastore");const i=function(l){return new eb(l,fetch.bind(null))}((e=t._databaseId,n=t.app.options.appId||"",r=t._persistenceKey,s=t._freezeSettings(),new Yw(e,n,r,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams))),o=Go(t._databaseId),a=function(l,c,u,f){return new Db(l,c,u,f)}(t._authCredentials,t._appCheckCredentials,i,o);_r.set(t,a)}var e,n,r,s;/**
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
*/return _r.get(t)}class Jl{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new U(W,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(W,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(r,s,i,o){if(s===!0&&o===!0)throw new U(W,`${r} and ${i} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Yo{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(Jn,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(Jn,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jl(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new zw;switch(n.type){case"gapi":const r=n.client;return new Ww(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new U(W,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=_r.get(e);n&&(Ns("ComponentProvider","Removing Datastore"),_r.delete(e),n.terminate())}(this),Promise.resolve()}}function $b(t,e){const n=typeof t=="object"?t:Co(),r=typeof t=="string"?t:e||"(default)";return Sn(n,"firestore/lite").getImmediate({identifier:r})}/**
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
 */class Ze{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ze(this.firestore,e,this._key)}}class An{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new An(this.firestore,e,this._query)}}class Pt extends An{constructor(e,n,r){super(e,n,new ci(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ze(this.firestore,null,new Re(e))}withConverter(e){return new Pt(this.firestore,e,this._path)}}function Fb(t,e,...n){if(t=Fe(t),cf("collection","path",e),t instanceof Yo){const r=ve.fromString(e,...n);return Ll(r),new Pt(t,null,r)}{if(!(t instanceof Ze||t instanceof Pt))throw new U(W,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return Ll(r),new Pt(t.firestore,null,r)}}function Ub(t,e,...n){if(t=Fe(t),arguments.length===1&&(e=nb.N()),cf("doc","path",e),t instanceof Yo){const r=ve.fromString(e,...n);return Ml(r),new Ze(t,null,new Re(r))}{if(!(t instanceof Ze||t instanceof Pt))throw new U(W,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return Ml(r),new Ze(t.firestore,t instanceof Pt?t.converter:null,new Re(r))}}/**
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
 */class Jo{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(W,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Qn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qn(Ft.fromBase64String(e))}catch(n){throw new U(W,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qn(Ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class bf{constructor(e){this._methodName=e}}/**
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
 */class Qo{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(W,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(W,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}}/**
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
 */const Bb=/^__.*__$/;class Vb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new yf(e,this.data,this.fieldMask,n,this.fieldTransforms):new mf(e,this.data,n,this.fieldTransforms)}}function vf(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye()}}class Zo{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.C=r,this.ignoreUndefinedProperties=s,i===void 0&&this.nt(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get rt(){return this.settings.rt}st(e){return new Zo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.C,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}it(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.st({path:r,ot:!1});return s.ut(e),s}ct(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.st({path:r,ot:!1});return s.nt(),s}at(e){return this.st({path:void 0,ot:!0})}ht(e){return Us(e,this.settings.methodName,this.settings.lt||!1,this.path,this.settings.ft)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}nt(){if(this.path)for(let e=0;e<this.path.length;e++)this.ut(this.path.get(e))}ut(e){if(e.length===0)throw this.ht("Document fields must not be empty");if(vf(this.rt)&&Bb.test(e))throw this.ht('Document fields cannot begin and end with "__"')}}class jb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.C=r||Go(e)}dt(e,n,r,s=!1){return new Zo({rt:e,methodName:n,ft:r,path:Ve.emptyPath(),ot:!1,lt:s},this.databaseId,this.C,this.ignoreUndefinedProperties)}}function If(t){const e=t._freezeSettings(),n=Go(t._databaseId);return new jb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function zb(t,e,n,r,s,i={}){const o=t.dt(i.merge||i.mergeFields?2:0,e,n,s);Tf("Data must be an object, but it was:",o,r);const a=Ef(r,o);let l,c;if(i.merge)l=new Mr(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const f of i.mergeFields){const d=Hb(e,f,n);if(!o.contains(d))throw new U(W,`Field '${d}' is specified in your field mask but missing from your input data.`);Kb(u,d)||u.push(d)}l=new Mr(u),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new Vb(new _t(a),l,c)}function qb(t,e,n,r=!1){return Xo(n,t.dt(r?4:3,e))}function Xo(t,e){if(kf(t=Fe(t)))return Tf("Unsupported field value:",e,t),Ef(t,e);if(t instanceof bf)return function(n,r){if(!vf(r.rt))throw r.ht(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ht(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ot&&e.rt!==4)throw e.ht("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=Xo(o,r.at(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=Fe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return pb(r.C,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=je.fromDate(n);return{timestampValue:eo(r.C,s)}}if(n instanceof je){const s=new je(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:eo(r.C,s)}}if(n instanceof Qo)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Qn)return{bytesValue:kb(r.C,n._byteString)};if(n instanceof Ze){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.ht(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ko(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ht(`Unsupported field value: ${ai(n)}`)}(t,e)}function Ef(t,e){const n={};return function(r){for(const s in r)if(Object.prototype.hasOwnProperty.call(r,s))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):li(t,(r,s)=>{const i=Xo(s,e.it(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function kf(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof je||t instanceof Qo||t instanceof Qn||t instanceof Ze||t instanceof bf)}function Tf(t,e,n){if(!kf(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=ai(n);throw r==="an object"?e.ht(t+" a custom object"):e.ht(t+" "+r)}}function Hb(t,e,n){if((e=Fe(e))instanceof Jo)return e._internalPath;if(typeof e=="string")return Sf(t,e);throw Us("Field path arguments must be of type string or ",t,!1,void 0,n)}const Wb=new RegExp("[~\\*/\\[\\]]");function Sf(t,e,n){if(e.search(Wb)>=0)throw Us(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Jo(...e.split("."))._internalPath}catch{throw Us(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Us(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new U(W,a+t+l)}function Kb(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Gb{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Af(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ea("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Af extends Gb{data(){return super.data()}}class Yb{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function ea(t,e){return typeof e=="string"?Sf(t,e):e instanceof Jo?e._internalPath:e._delegate._internalPath}/**
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
 */class ta{}function Jb(t,...e){for(const n of e)t=n._apply(t);return t}class Qb extends ta{constructor(e,n,r){super(),this._t=e,this.gt=n,this.vt=r,this.type="where"}_apply(e){const n=If(e.firestore),r=function(s,i,o,a,l,c,u){let f;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new U(W,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Zl(u,c);const p=[];for(const w of u)p.push(Ql(a,s,w));f={arrayValue:{values:p}}}else f=Ql(a,s,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Zl(u,c),f=qb(o,i,u,c==="in"||c==="not-in");const d=kt.create(l,c,f);return function(p,w){if(w.S()){const T=Wo(p);if(T!==null&&!T.isEqual(w.field))throw new U(W,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${T.toString()}' and '${w.field.toString()}'`);const I=Ho(p);I!==null&&Rf(p,w.field,I)}const O=function(T,I){for(const _ of T.filters)if(I.indexOf(_.op)>=0)return _.op;return null}(p,function(T){switch(T){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(w.op));if(O!==null)throw O===w.op?new U(W,`Invalid query. You cannot use more than one '${w.op.toString()}' filter.`):new U(W,`Invalid query. You cannot use '${w.op.toString()}' filters with '${O.toString()}' filters.`)}(s,d),d}(e._query,"where",n,e.firestore._databaseId,this._t,this.gt,this.vt);return new An(e.firestore,e.converter,function(s,i){const o=s.filters.concat([i]);return new ci(s.path,s.collectionGroup,s.explicitOrderBy.slice(),o,s.limit,s.limitType,s.startAt,s.endAt)}(e._query,r))}}function Zb(t,e,n){const r=e,s=ea("where",t);return new Qb(s,r,n)}class Xb extends ta{constructor(e,n){super(),this._t=e,this.bt=n,this.type="orderBy"}_apply(e){const n=function(r,s,i){if(r.startAt!==null)throw new U(W,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new U(W,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new mr(s,i);return function(a,l){if(Ho(a)===null){const c=Wo(a);c!==null&&Rf(a,c,l.field)}}(r,o),o}(e._query,this._t,this.bt);return new An(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new ci(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function ev(t,e="asc"){const n=e,r=ea("orderBy",t);return new Xb(r,n)}class tv extends ta{constructor(e,n,r){super(),this.type=e,this.Et=n,this.Tt=r}_apply(e){return new An(e.firestore,e.converter,function(n,r,s){return new ci(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),r,s,n.startAt,n.endAt)}(e._query,this.Et,this.Tt))}}function nv(t){return Qw("limit",t),new tv("limit",t,"F")}function Ql(t,e,n){if(typeof(n=Fe(n))=="string"){if(n==="")throw new U(W,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!hb(e)&&n.indexOf("/")!==-1)throw new U(W,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ve.fromString(n));if(!Re.isDocumentKey(r))throw new U(W,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return jl(t,new Re(r))}if(n instanceof Ze)return jl(t,n._key);throw new U(W,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ai(n)}.`)}function Zl(t,e){if(!Array.isArray(t)||t.length===0)throw new U(W,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new U(W,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Rf(t,e,n){if(!n.isEqual(e))throw new U(W,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */function rv(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class sv extends class{convertValue(e,n="none"){switch(In(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Lr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ye()}}convertObject(e,n){const r={};return li(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Qo(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=df(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp($r(e));default:return null}}convertTimestamp(e){const n=vn(e);return new je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ve.fromString(e);$t(_f(r));const s=new Nr(r.get(1),r.get(3)),i=new Re(r.popFirst(5));return s.isEqual(n)||zo(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ze(this.firestore,null,n)}}function iv(t){(function(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new U(lf,"limitToLast() queries require specifying at least one orderBy() clause")})((t=uf(t,An))._query);const e=wf(t.firestore),n=new sv(t.firestore);return Lb(e,t._query).then(r=>{const s=r.map(i=>new Af(t.firestore,n,i.key,i,t.converter));return t._query.limitType==="L"&&s.reverse(),new Yb(t,s)})}function K0(t,e){const n=Ub(t=uf(t,Pt)),r=rv(t.converter,e),s=zb(If(t.firestore),"addDoc",n._key,r,n.converter!==null,{});return Mb(wf(t.firestore),[s.toMutation(n._key,yr.exists(!1))]).then(()=>n)}(function(t){rr=t})(`${jr}_lite`),Et(new ot("firestore/lite",(t,{instanceIdentifier:e,options:n})=>{const r=t.getProvider("app").getImmediate(),s=new Yo(new qw(t.getProvider("auth-internal")),new Gw(t.getProvider("app-check-internal")),function(i,o){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new U(W,'"projectId" not provided in firebase.initializeApp.');return new Nr(i.options.projectId,o)}(r,e),r);return n&&s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),Qe("firestore-lite","3.5.0",""),Qe("firestore-lite","3.5.0","esm2017");const ov=t=>(vo("data-v-4154ddd1"),t=t(),Io(),t),av={class:"most-recent-container"},lv=ov(()=>_e("a",{href:""},"Most Recent",-1)),cv={class:"slider"},uv={class:"most-recent-list"},fv=["onClick"],hv={__name:"MostRecent",async setup(t){let e,n;const r=$b(),s=Ir([]),i=Fb(r,"articles"),o=Jb(i,Zb("article_type","==","post"),ev("date","desc"),nv(3));([e,n]=Xd(()=>iv(o)),e=await e,n(),e).forEach(f=>{s.value.push(f.data())});let l=0;u();function c(f){f>2?l=0:f<0?l=2:l=f;const d=document.getElementsByClassName("recent");for(let p=0;p<d.length;p++)d[p].style.display="none";d[l].style.display="block"}function u(){const f=document.getElementsByClassName("recent"),d=document.getElementsByClassName("dot");if(f.length>0){for(let p=0;p<f.length;p++)f[p].style.display="none",d[p].classList.remove("active");f[l].style.display="block",d[l].classList.add("active"),l++,l>=f.length&&(l=0),setTimeout(u,5e3)}else setTimeout(u,200)}return(f,d)=>(De(),Zt("div",av,[lv,_e("div",cv,[_e("div",uv,[(De(!0),Zt(Ke,null,Ea(s.value,p=>(De(),Vn(Ow,{content:p.content,date:p.date,title:p.title,ups:p.ups,parent:p.parent,comments:p.comments},null,8,["content","date","title","ups","parent","comments"]))),256))]),_e("div",null,[(De(!0),Zt(Ke,null,Ea(s.value,(p,w)=>(De(),Zt("span",{class:"dot",onClick:O=>c(w)},null,8,fv))),256))])])]))}},dv=ii(hv,[["__scopeId","data-v-4154ddd1"]]);const pv=t=>(vo("data-v-e8557f27"),t=t(),Io(),t),gv={class:"main"},mv={class:"welcome-container"},yv=Vd('<div class="welcome" data-v-e8557f27><h2 class="header" data-v-e8557f27>Breath Deep and Relax, Welcome to my Blog.</h2><h3 class="subheader" data-v-e8557f27>I read books that sound fun for whatever reason.</h3><p class="summary" data-v-e8557f27>Take a look around the site! Maybe I have an article on a book you like, an opinion you want to argue over, or a rant on something narratively inconsequential. Whatever your speed, click below to start browsing.</p><a href="" class="blog-btn button" data-v-e8557f27>Browse Articles</a></div>',1),_v=pv(()=>_e("h2",null,null,-1)),wv={__name:"HomeView",setup(t){return(e,n)=>(De(),Zt("main",gv,[_e("div",mv,[yv,(De(),Vn(td,null,{default:mt(()=>[me(dv,{class:"most-recent"})]),_:1}))]),_v]))}},bv=ii(wv,[["__scopeId","data-v-e8557f27"]]),vv=z_({history:i_("/"),routes:[{path:"/",name:"home",component:bv},{path:"/about",name:"about",component:()=>rs(()=>import("./AboutView.8aeabdd6.js"),[])},{path:"/login",name:"login",component:()=>rs(()=>import("./LoginView.72224b0d.js"),[])},{path:"/register",name:"register",component:()=>rs(()=>import("./RegisterView.e3a25791.js"),[])},{path:"/create",name:"create",component:()=>rs(()=>import("./CreateArticleView.d11df9ef.js"),["assets/CreateArticleView.d11df9ef.js","assets/CreateArticleView.b6094b6c.css"])}]});var Iv="firebase",Ev="9.10.0";/**
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
 */Qe(Iv,Ev,"app");const xf="@firebase/installations",na="0.5.12";/**
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
 */const Cf=1e4,Of=`w:${na}`,Pf="FIS_v2",kv="https://firebaseinstallations.googleapis.com/v1",Tv=60*60*1e3,Sv="installations",Av="Installations";/**
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
 */const Rv={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},En=new Tn(Sv,Av,Rv);function Nf(t){return t instanceof ct&&t.code.includes("request-failed")}/**
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
 */function Df({projectId:t}){return`${kv}/projects/${t}/installations`}function Mf(t){return{token:t.token,requestStatus:2,expiresIn:Cv(t.expiresIn),creationTime:Date.now()}}async function Lf(t,e){const r=(await e.json()).error;return En.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function $f({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function xv(t,{refreshToken:e}){const n=$f(t);return n.append("Authorization",Ov(e)),n}async function Ff(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Cv(t){return Number(t.replace("s","000"))}function Ov(t){return`${Pf} ${t}`}/**
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
 */async function Pv({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Df(t),s=$f(t),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:Pf,appId:t.appId,sdkVersion:Of},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await Ff(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Mf(c.authToken)}}else throw await Lf("Create Installation",l)}/**
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
 */function Uf(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Nv(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Dv=/^[cdef][\w-]{21}$/,no="";function Mv(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Lv(t);return Dv.test(n)?n:no}catch{return no}}function Lv(t){return Nv(t).substr(0,22)}/**
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
 */function hi(t){return`${t.appName}!${t.appId}`}/**
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
 */const Bf=new Map;function Vf(t,e){const n=hi(t);jf(n,e),$v(n,e)}function jf(t,e){const n=Bf.get(t);if(!!n)for(const r of n)r(e)}function $v(t,e){const n=Fv();n&&n.postMessage({key:t,fid:e}),Uv()}let dn=null;function Fv(){return!dn&&"BroadcastChannel"in self&&(dn=new BroadcastChannel("[Firebase] FID Change"),dn.onmessage=t=>{jf(t.data.key,t.data.fid)}),dn}function Uv(){Bf.size===0&&dn&&(dn.close(),dn=null)}/**
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
 */const Bv="firebase-installations-database",Vv=1,kn="firebase-installations-store";let Ri=null;function ra(){return Ri||(Ri=du(Bv,Vv,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(kn)}}})),Ri}async function Bs(t,e){const n=hi(t),s=(await ra()).transaction(kn,"readwrite"),i=s.objectStore(kn),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&Vf(t,e.fid),e}async function zf(t){const e=hi(t),r=(await ra()).transaction(kn,"readwrite");await r.objectStore(kn).delete(e),await r.done}async function di(t,e){const n=hi(t),s=(await ra()).transaction(kn,"readwrite"),i=s.objectStore(kn),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&Vf(t,a.fid),a}/**
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
 */async function sa(t){let e;const n=await di(t.appConfig,r=>{const s=jv(r),i=zv(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===no?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function jv(t){const e=t||{fid:Mv(),registrationStatus:0};return qf(e)}function zv(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(En.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=qv(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Hv(t)}:{installationEntry:e}}async function qv(t,e){try{const n=await Pv(t,e);return Bs(t.appConfig,n)}catch(n){throw Nf(n)&&n.customData.serverCode===409?await zf(t.appConfig):await Bs(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Hv(t){let e=await Xl(t.appConfig);for(;e.registrationStatus===1;)await Uf(100),e=await Xl(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await sa(t);return r||n}return e}function Xl(t){return di(t,e=>{if(!e)throw En.create("installation-not-found");return qf(e)})}function qf(t){return Wv(t)?{fid:t.fid,registrationStatus:0}:t}function Wv(t){return t.registrationStatus===1&&t.registrationTime+Cf<Date.now()}/**
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
 */async function Kv({appConfig:t,heartbeatServiceProvider:e},n){const r=Gv(t,n),s=xv(t,n),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:Of,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await Ff(()=>fetch(r,a));if(l.ok){const c=await l.json();return Mf(c)}else throw await Lf("Generate Auth Token",l)}function Gv(t,{fid:e}){return`${Df(t)}/${e}/authTokens:generate`}/**
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
 */async function ia(t,e=!1){let n;const r=await di(t.appConfig,i=>{if(!Hf(i))throw En.create("not-registered");const o=i.authToken;if(!e&&Qv(o))return i;if(o.requestStatus===1)return n=Yv(t,e),i;{if(!navigator.onLine)throw En.create("app-offline");const a=Xv(i);return n=Jv(t,a),a}});return n?await n:r.authToken}async function Yv(t,e){let n=await ec(t.appConfig);for(;n.authToken.requestStatus===1;)await Uf(100),n=await ec(t.appConfig);const r=n.authToken;return r.requestStatus===0?ia(t,e):r}function ec(t){return di(t,e=>{if(!Hf(e))throw En.create("not-registered");const n=e.authToken;return e0(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Jv(t,e){try{const n=await Kv(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Bs(t.appConfig,r),n}catch(n){if(Nf(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await zf(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Bs(t.appConfig,r)}throw n}}function Hf(t){return t!==void 0&&t.registrationStatus===2}function Qv(t){return t.requestStatus===2&&!Zv(t)}function Zv(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Tv}function Xv(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function e0(t){return t.requestStatus===1&&t.requestTime+Cf<Date.now()}/**
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
 */async function t0(t){const e=t,{installationEntry:n,registrationPromise:r}=await sa(e);return r?r.catch(console.error):ia(e).catch(console.error),n.fid}/**
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
 */async function n0(t,e=!1){const n=t;return await r0(n),(await ia(n,e)).token}async function r0(t){const{registrationPromise:e}=await sa(t);e&&await e}/**
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
 */function s0(t){if(!t||!t.options)throw xi("App Configuration");if(!t.name)throw xi("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw xi(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function xi(t){return En.create("missing-app-config-values",{valueName:t})}/**
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
 */const Wf="installations",i0="installations-internal",o0=t=>{const e=t.getProvider("app").getImmediate(),n=s0(e),r=Sn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},a0=t=>{const e=t.getProvider("app").getImmediate(),n=Sn(e,Wf).getImmediate();return{getId:()=>t0(n),getToken:s=>n0(n,s)}};function l0(){Et(new ot(Wf,o0,"PUBLIC")),Et(new ot(i0,a0,"PRIVATE"))}l0();Qe(xf,na);Qe(xf,na,"esm2017");/**
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
 */const Vs="analytics",c0="firebase_id",u0="origin",f0=60*1e3,h0="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Kf="https://www.googletagmanager.com/gtag/js";/**
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
 */const ze=new Zs("@firebase/analytics");/**
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
 */function Gf(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function d0(t,e){const n=document.createElement("script");n.src=`${Kf}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function p0(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function g0(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await Gf(n)).find(c=>c.measurementId===s);l&&await e[l.appId]}}catch(a){ze.error(a)}t("config",s,i)}async function m0(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Gf(n);for(const l of o){const c=a.find(f=>f.measurementId===l),u=c&&e[c.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){ze.error(i)}}function y0(t,e,n,r){async function s(i,o,a){try{i==="event"?await m0(t,e,n,o,a):i==="config"?await g0(t,e,n,r,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(l){ze.error(l)}}return s}function _0(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=y0(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function w0(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Kf))return e;return null}/**
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
 */const b0={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Xe=new Tn("analytics","Analytics",b0);/**
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
 */const v0=30,I0=1e3;class E0{constructor(e={},n=I0){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Yf=new E0;function k0(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function T0(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:k0(r)},i=h0.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Xe.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function S0(t,e=Yf,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Xe.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Xe.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new x0;return setTimeout(async()=>{a.abort()},n!==void 0?n:f0),Jf({appId:r,apiKey:s,measurementId:i},o,a,e)}async function Jf(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=Yf){var i,o;const{appId:a,measurementId:l}=t;try{await A0(r,e)}catch(c){if(l)return ze.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${(i=c)===null||i===void 0?void 0:i.message}]`),{appId:a,measurementId:l};throw c}try{const c=await T0(t);return s.deleteThrottleMetadata(a),c}catch(c){const u=c;if(!R0(u)){if(s.deleteThrottleMetadata(a),l)return ze.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:l};throw c}const f=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?ja(n,s.intervalMillis,v0):ja(n,s.intervalMillis),d={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return s.setThrottleMetadata(a,d),ze.debug(`Calling attemptFetch again in ${f} millis`),Jf(t,d,r,s)}}function A0(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Xe.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function R0(t){if(!(t instanceof ct)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class x0{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function C0(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
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
 */async function O0(){var t;if(cu())try{await uu()}catch(e){return ze.warn(Xe.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return ze.warn(Xe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function P0(t,e,n,r,s,i,o){var a;const l=S0(t);l.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&ze.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>ze.error(p)),e.push(l);const c=O0().then(p=>{if(p)return r.getId()}),[u,f]=await Promise.all([l,c]);w0()||d0(i,u.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[u0]="firebase",d.update=!0,f!=null&&(d[c0]=f),s("config",u.measurementId,d),u.measurementId}/**
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
 */class N0{constructor(e){this.app=e}_delete(){return delete wr[this.app.options.appId],Promise.resolve()}}let wr={},tc=[];const nc={};let Ci="dataLayer",D0="gtag",rc,Qf,sc=!1;function M0(){const t=[];if(lu()&&t.push("This is a browser extension environment."),Op()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Xe.create("invalid-analytics-context",{errorInfo:e});ze.warn(n.message)}}function L0(t,e,n){M0();const r=t.options.appId;if(!r)throw Xe.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ze.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Xe.create("no-api-key");if(wr[r]!=null)throw Xe.create("already-exists",{id:r});if(!sc){p0(Ci);const{wrappedGtag:i,gtagCore:o}=_0(wr,tc,nc,Ci,D0);Qf=i,rc=o,sc=!0}return wr[r]=P0(t,tc,nc,e,rc,Ci,n),new N0(t)}function $0(t=Co()){t=Fe(t);const e=Sn(t,Vs);return e.isInitialized()?e.getImmediate():F0(t)}function F0(t,e={}){const n=Sn(t,Vs);if(n.isInitialized()){const s=n.getImmediate();if(Ar(e,n.getOptions()))return s;throw Xe.create("already-initialized")}return n.initialize({options:e})}function U0(t,e,n,r){t=Fe(t),C0(Qf,wr[t.app.options.appId],e,n,r).catch(s=>ze.error(s))}const ic="@firebase/analytics",oc="0.8.0";function B0(){Et(new ot(Vs,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return L0(r,s,n)},"PUBLIC")),Et(new ot("analytics-internal",t,"PRIVATE")),Qe(ic,oc),Qe(ic,oc,"esm2017");function t(e){try{const n=e.getProvider(Vs).getImmediate();return{logEvent:(r,s,i)=>U0(n,r,s,i)}}catch(n){throw Xe.create("interop-component-reg-failed",{reason:n})}}}B0();const V0={apiKey:"AIzaSyAEkx5h_H_jYYiA5zv-SaziecBXeDwxPJ4",authDomain:"bookclub-58f19.firebaseapp.com",projectId:"bookclub-58f19",storageBucket:"bookclub-58f19.appspot.com",messagingSenderId:"1068291885693",appId:"1:1068291885693:web:8961261fdcabbaab2d7f14",measurementId:"G-ZHW6J2Q0PG"},j0=Fg(V0);$0(j0);const Zf=Ip(iw);Zf.use(vv);Zf.mount("#app");export{K0 as D,ii as _,_e as a,H0 as b,Zt as c,gn as d,Vy as g,$b as l,V as m,De as o,Ir as r,W0 as s,H_ as u,q0 as v,z0 as w,Fb as y};
