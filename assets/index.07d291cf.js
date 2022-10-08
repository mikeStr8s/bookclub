(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function oo(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const ih="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",oh=oo(ih);function fc(t){return!!t||t===""}function ao(t){if(q(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Se(r)?ch(r):ao(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Se(t))return t;if(de(t))return t}}const ah=/;(?![^(]*\))/g,lh=/:(.+)/;function ch(t){const e={};return t.split(ah).forEach(n=>{if(n){const r=n.split(lh);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function lo(t){let e="";if(Se(t))e=t;else if(q(t))for(let n=0;n<t.length;n++){const r=lo(t[n]);r&&(e+=r+" ")}else if(de(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Qr=t=>Se(t)?t:t==null?"":q(t)||de(t)&&(t.toString===pc||!H(t.toString))?JSON.stringify(t,hc,2):String(t),hc=(t,e)=>e&&e.__v_isRef?hc(t,e.value):Fn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:dc(e)?{[`Set(${e.size})`]:[...e.values()]}:de(e)&&!q(e)&&!gc(e)?String(e):e,le={},$n=[],at=()=>{},uh=()=>!1,fh=/^on[^a-z]/,qs=t=>fh.test(t),co=t=>t.startsWith("onUpdate:"),Me=Object.assign,uo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},hh=Object.prototype.hasOwnProperty,Z=(t,e)=>hh.call(t,e),q=Array.isArray,Fn=t=>Hs(t)==="[object Map]",dc=t=>Hs(t)==="[object Set]",H=t=>typeof t=="function",Se=t=>typeof t=="string",fo=t=>typeof t=="symbol",de=t=>t!==null&&typeof t=="object",ho=t=>de(t)&&H(t.then)&&H(t.catch),pc=Object.prototype.toString,Hs=t=>pc.call(t),dh=t=>Hs(t).slice(8,-1),gc=t=>Hs(t)==="[object Object]",po=t=>Se(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ls=oo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ws=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ph=/-(\w)/g,kt=Ws(t=>t.replace(ph,(e,n)=>n?n.toUpperCase():"")),gh=/\B([A-Z])/g,Zn=Ws(t=>t.replace(gh,"-$1").toLowerCase()),Ks=Ws(t=>t.charAt(0).toUpperCase()+t.slice(1)),gi=Ws(t=>t?`on${Ks(t)}`:""),vr=(t,e)=>!Object.is(t,e),cs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},bs=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},vs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let pa;const mh=()=>pa||(pa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let yt;class _h{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&yt&&(this.parent=yt,this.index=(yt.scopes||(yt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=yt;try{return yt=this,e()}finally{yt=n}}}on(){yt=this}off(){yt=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function yh(t,e=yt){e&&e.active&&e.effects.push(t)}const go=t=>{const e=new Set(t);return e.w=0,e.n=0,e},mc=t=>(t.w&rn)>0,_c=t=>(t.n&rn)>0,wh=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=rn},bh=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];mc(s)&&!_c(s)?s.delete(t):e[n++]=s,s.w&=~rn,s.n&=~rn}e.length=n}},Pi=new WeakMap;let lr=0,rn=1;const Ni=30;let it;const gn=Symbol(""),Di=Symbol("");class mo{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,yh(this,r)}run(){if(!this.active)return this.fn();let e=it,n=Xt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=it,it=this,Xt=!0,rn=1<<++lr,lr<=Ni?wh(this):ga(this),this.fn()}finally{lr<=Ni&&bh(this),rn=1<<--lr,it=this.parent,Xt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){it===this?this.deferStop=!0:this.active&&(ga(this),this.onStop&&this.onStop(),this.active=!1)}}function ga(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Xt=!0;const yc=[];function Xn(){yc.push(Xt),Xt=!1}function er(){const t=yc.pop();Xt=t===void 0?!0:t}function We(t,e,n){if(Xt&&it){let r=Pi.get(t);r||Pi.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=go()),wc(s)}}function wc(t,e){let n=!1;lr<=Ni?_c(t)||(t.n|=rn,n=!mc(t)):n=!t.has(it),n&&(t.add(it),it.deps.push(t))}function Lt(t,e,n,r,s,i){const o=Pi.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&q(t))o.forEach((l,c)=>{(c==="length"||c>=r)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":q(t)?po(n)&&a.push(o.get("length")):(a.push(o.get(gn)),Fn(t)&&a.push(o.get(Di)));break;case"delete":q(t)||(a.push(o.get(gn)),Fn(t)&&a.push(o.get(Di)));break;case"set":Fn(t)&&a.push(o.get(gn));break}if(a.length===1)a[0]&&Mi(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Mi(go(l))}}function Mi(t,e){const n=q(t)?t:[...t];for(const r of n)r.computed&&ma(r);for(const r of n)r.computed||ma(r)}function ma(t,e){(t!==it||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const vh=oo("__proto__,__v_isRef,__isVue"),bc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(fo)),Ih=_o(),Eh=_o(!1,!0),kh=_o(!0),_a=Th();function Th(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ee(this);for(let i=0,o=this.length;i<o;i++)We(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ee)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Xn();const r=ee(this)[e].apply(this,n);return er(),r}}),t}function _o(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Vh:Tc:e?kc:Ec).get(r))return r;const o=q(r);if(!t&&o&&Z(_a,s))return Reflect.get(_a,s,i);const a=Reflect.get(r,s,i);return(fo(s)?bc.has(s):vh(s))||(t||We(r,"get",s),e)?a:Pe(a)?o&&po(s)?a:a.value:de(a)?t?Sc(a):Br(a):a}}const Sh=vc(),Ah=vc(!0);function vc(t=!1){return function(n,r,s,i){let o=n[r];if(qn(o)&&Pe(o)&&!Pe(s))return!1;if(!t&&(!Is(s)&&!qn(s)&&(o=ee(o),s=ee(s)),!q(n)&&Pe(o)&&!Pe(s)))return o.value=s,!0;const a=q(n)&&po(r)?Number(r)<n.length:Z(n,r),l=Reflect.set(n,r,s,i);return n===ee(i)&&(a?vr(s,o)&&Lt(n,"set",r,s):Lt(n,"add",r,s)),l}}function Rh(t,e){const n=Z(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Lt(t,"delete",e,void 0),r}function xh(t,e){const n=Reflect.has(t,e);return(!fo(e)||!bc.has(e))&&We(t,"has",e),n}function Ch(t){return We(t,"iterate",q(t)?"length":gn),Reflect.ownKeys(t)}const Ic={get:Ih,set:Sh,deleteProperty:Rh,has:xh,ownKeys:Ch},Oh={get:kh,set(t,e){return!0},deleteProperty(t,e){return!0}},Ph=Me({},Ic,{get:Eh,set:Ah}),yo=t=>t,Gs=t=>Reflect.getPrototypeOf(t);function Zr(t,e,n=!1,r=!1){t=t.__v_raw;const s=ee(t),i=ee(e);n||(e!==i&&We(s,"get",e),We(s,"get",i));const{has:o}=Gs(s),a=r?yo:n?vo:Ir;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Xr(t,e=!1){const n=this.__v_raw,r=ee(n),s=ee(t);return e||(t!==s&&We(r,"has",t),We(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function es(t,e=!1){return t=t.__v_raw,!e&&We(ee(t),"iterate",gn),Reflect.get(t,"size",t)}function ya(t){t=ee(t);const e=ee(this);return Gs(e).has.call(e,t)||(e.add(t),Lt(e,"add",t,t)),this}function wa(t,e){e=ee(e);const n=ee(this),{has:r,get:s}=Gs(n);let i=r.call(n,t);i||(t=ee(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?vr(e,o)&&Lt(n,"set",t,e):Lt(n,"add",t,e),this}function ba(t){const e=ee(this),{has:n,get:r}=Gs(e);let s=n.call(e,t);s||(t=ee(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Lt(e,"delete",t,void 0),i}function va(){const t=ee(this),e=t.size!==0,n=t.clear();return e&&Lt(t,"clear",void 0,void 0),n}function ts(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ee(o),l=e?yo:t?vo:Ir;return!t&&We(a,"iterate",gn),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function ns(t,e,n){return function(...r){const s=this.__v_raw,i=ee(s),o=Fn(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?yo:e?vo:Ir;return!e&&We(i,"iterate",l?Di:gn),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function jt(t){return function(...e){return t==="delete"?!1:this}}function Nh(){const t={get(i){return Zr(this,i)},get size(){return es(this)},has:Xr,add:ya,set:wa,delete:ba,clear:va,forEach:ts(!1,!1)},e={get(i){return Zr(this,i,!1,!0)},get size(){return es(this)},has:Xr,add:ya,set:wa,delete:ba,clear:va,forEach:ts(!1,!0)},n={get(i){return Zr(this,i,!0)},get size(){return es(this,!0)},has(i){return Xr.call(this,i,!0)},add:jt("add"),set:jt("set"),delete:jt("delete"),clear:jt("clear"),forEach:ts(!0,!1)},r={get(i){return Zr(this,i,!0,!0)},get size(){return es(this,!0)},has(i){return Xr.call(this,i,!0)},add:jt("add"),set:jt("set"),delete:jt("delete"),clear:jt("clear"),forEach:ts(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ns(i,!1,!1),n[i]=ns(i,!0,!1),e[i]=ns(i,!1,!0),r[i]=ns(i,!0,!0)}),[t,n,e,r]}const[Dh,Mh,Lh,$h]=Nh();function wo(t,e){const n=e?t?$h:Lh:t?Mh:Dh;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Z(n,s)&&s in r?n:r,s,i)}const Fh={get:wo(!1,!1)},Uh={get:wo(!1,!0)},Bh={get:wo(!0,!1)},Ec=new WeakMap,kc=new WeakMap,Tc=new WeakMap,Vh=new WeakMap;function jh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zh(t){return t.__v_skip||!Object.isExtensible(t)?0:jh(dh(t))}function Br(t){return qn(t)?t:bo(t,!1,Ic,Fh,Ec)}function qh(t){return bo(t,!1,Ph,Uh,kc)}function Sc(t){return bo(t,!0,Oh,Bh,Tc)}function bo(t,e,n,r,s){if(!de(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=zh(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Un(t){return qn(t)?Un(t.__v_raw):!!(t&&t.__v_isReactive)}function qn(t){return!!(t&&t.__v_isReadonly)}function Is(t){return!!(t&&t.__v_isShallow)}function Ac(t){return Un(t)||qn(t)}function ee(t){const e=t&&t.__v_raw;return e?ee(e):t}function Rc(t){return bs(t,"__v_skip",!0),t}const Ir=t=>de(t)?Br(t):t,vo=t=>de(t)?Sc(t):t;function xc(t){Xt&&it&&(t=ee(t),wc(t.dep||(t.dep=go())))}function Cc(t,e){t=ee(t),t.dep&&Mi(t.dep)}function Pe(t){return!!(t&&t.__v_isRef===!0)}function Er(t){return Oc(t,!1)}function Hh(t){return Oc(t,!0)}function Oc(t,e){return Pe(t)?t:new Wh(t,e)}class Wh{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ee(e),this._value=n?e:Ir(e)}get value(){return xc(this),this._value}set value(e){const n=this.__v_isShallow||Is(e)||qn(e);e=n?e:ee(e),vr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ir(e),Cc(this))}}function mn(t){return Pe(t)?t.value:t}const Kh={get:(t,e,n)=>mn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Pe(s)&&!Pe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Pc(t){return Un(t)?t:new Proxy(t,Kh)}var Nc;class Gh{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Nc]=!1,this._dirty=!0,this.effect=new mo(e,()=>{this._dirty||(this._dirty=!0,Cc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ee(this);return xc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Nc="__v_isReadonly";function Yh(t,e,n=!1){let r,s;const i=H(t);return i?(r=t,s=at):(r=t.get,s=t.set),new Gh(r,s,i||!s,n)}function en(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Vr(i,e,n)}return s}function lt(t,e,n,r){if(H(t)){const i=en(t,e,n,r);return i&&ho(i)&&i.catch(o=>{Vr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(lt(t[i],e,n,r));return s}function Vr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){en(l,null,10,[t,o,a]);return}}Jh(t,n,s,r)}function Jh(t,e,n,r=!0){console.error(t)}let kr=!1,Li=!1;const Oe=[];let bt=0;const Bn=[];let Ot=null,un=0;const Dc=Promise.resolve();let Io=null;function Mc(t){const e=Io||Dc;return t?e.then(this?t.bind(this):t):e}function Qh(t){let e=bt+1,n=Oe.length;for(;e<n;){const r=e+n>>>1;Tr(Oe[r])<t?e=r+1:n=r}return e}function Eo(t){(!Oe.length||!Oe.includes(t,kr&&t.allowRecurse?bt+1:bt))&&(t.id==null?Oe.push(t):Oe.splice(Qh(t.id),0,t),Lc())}function Lc(){!kr&&!Li&&(Li=!0,Io=Dc.then(Uc))}function Zh(t){const e=Oe.indexOf(t);e>bt&&Oe.splice(e,1)}function $c(t){q(t)?Bn.push(...t):(!Ot||!Ot.includes(t,t.allowRecurse?un+1:un))&&Bn.push(t),Lc()}function Ia(t,e=kr?bt+1:0){for(;e<Oe.length;e++){const n=Oe[e];n&&n.pre&&(Oe.splice(e,1),e--,n())}}function Fc(t){if(Bn.length){const e=[...new Set(Bn)];if(Bn.length=0,Ot){Ot.push(...e);return}for(Ot=e,Ot.sort((n,r)=>Tr(n)-Tr(r)),un=0;un<Ot.length;un++)Ot[un]();Ot=null,un=0}}const Tr=t=>t.id==null?1/0:t.id,Xh=(t,e)=>{const n=Tr(t)-Tr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Uc(t){Li=!1,kr=!0,Oe.sort(Xh);const e=at;try{for(bt=0;bt<Oe.length;bt++){const n=Oe[bt];n&&n.active!==!1&&en(n,null,14)}}finally{bt=0,Oe.length=0,Fc(),kr=!1,Io=null,(Oe.length||Bn.length)&&Uc()}}function ed(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||le;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=r[u]||le;d&&(s=n.map(p=>p.trim())),f&&(s=n.map(vs))}let a,l=r[a=gi(e)]||r[a=gi(kt(e))];!l&&i&&(l=r[a=gi(Zn(e))]),l&&lt(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,lt(c,t,6,s)}}function Bc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!H(t)){const l=c=>{const u=Bc(c,e,!0);u&&(a=!0,Me(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(de(t)&&r.set(t,null),null):(q(i)?i.forEach(l=>o[l]=null):Me(o,i),de(t)&&r.set(t,o),o)}function Ys(t,e){return!t||!qs(e)?!1:(e=e.slice(2).replace(/Once$/,""),Z(t,e[0].toLowerCase()+e.slice(1))||Z(t,Zn(e))||Z(t,e))}let Ze=null,Js=null;function Es(t){const e=Ze;return Ze=t,Js=t&&t.type.__scopeId||null,e}function ko(t){Js=t}function To(){Js=null}function Ge(t,e=Ze,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Da(-1);const i=Es(e),o=t(...s);return Es(i),r._d&&Da(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function mi(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:d,setupState:p,ctx:w,inheritAttrs:O}=t;let T,I;const y=Es(t);try{if(n.shapeFlag&4){const B=s||r;T=rt(u.call(B,B,f,i,p,d,w)),I=l}else{const B=e;T=rt(B.length>1?B(i,{attrs:l,slots:a,emit:c}):B(i,null)),I=e.props?l:nd(l)}}catch(B){fr.length=0,Vr(B,t,1),T=me($t)}let C=T;if(I&&O!==!1){const B=Object.keys(I),{shapeFlag:K}=C;B.length&&K&7&&(o&&B.some(co)&&(I=rd(I,o)),C=Wn(C,I))}return n.dirs&&(C=Wn(C),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),T=C,Es(y),T}function td(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(Ss(r)){if(r.type!==$t||r.children==="v-if"){if(e)return;e=r}}else return}return e}const nd=t=>{let e;for(const n in t)(n==="class"||n==="style"||qs(n))&&((e||(e={}))[n]=t[n]);return e},rd=(t,e)=>{const n={};for(const r in t)(!co(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function sd(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ea(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==r[d]&&!Ys(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ea(r,o,c):!0:!!o;return!1}function Ea(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ys(n,i))return!0}return!1}function So({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const id=t=>t.__isSuspense,od={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,l,c){t==null?ad(e,n,r,s,i,o,a,l,c):ld(t,e,n,r,s,o,a,l,c)},hydrate:cd,create:Ao,normalize:ud},Vc=od;function Sr(t,e){const n=t.props&&t.props[e];H(n)&&n()}function ad(t,e,n,r,s,i,o,a,l){const{p:c,o:{createElement:u}}=l,f=u("div"),d=t.suspense=Ao(t,s,r,e,f,n,i,o,a,l);c(null,d.pendingBranch=t.ssContent,f,null,r,d,i,o),d.deps>0?(Sr(t,"onPending"),Sr(t,"onFallback"),c(null,t.ssFallback,e,n,r,null,i,o),Vn(d,t.ssFallback)):d.resolve()}function ld(t,e,n,r,s,i,o,a,{p:l,um:c,o:{createElement:u}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const d=e.ssContent,p=e.ssFallback,{activeBranch:w,pendingBranch:O,isInFallback:T,isHydrating:I}=f;if(O)f.pendingBranch=d,Kt(d,O)?(l(O,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():T&&(l(w,p,n,r,s,null,i,o,a),Vn(f,p))):(f.pendingId++,I?(f.isHydrating=!1,f.activeBranch=O):c(O,s,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),T?(l(null,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():(l(w,p,n,r,s,null,i,o,a),Vn(f,p))):w&&Kt(d,w)?(l(w,d,n,r,s,f,i,o,a),f.resolve(!0)):(l(null,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0&&f.resolve()));else if(w&&Kt(d,w))l(w,d,n,r,s,f,i,o,a),Vn(f,d);else if(Sr(e,"onPending"),f.pendingBranch=d,f.pendingId++,l(null,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0)f.resolve();else{const{timeout:y,pendingId:C}=f;y>0?setTimeout(()=>{f.pendingId===C&&f.fallback(p)},y):y===0&&f.fallback(p)}}function Ao(t,e,n,r,s,i,o,a,l,c,u=!1){const{p:f,m:d,um:p,n:w,o:{parentNode:O,remove:T}}=c,I=vs(t.props&&t.props.timeout),y={vnode:t,parent:e,parentComponent:n,isSVG:o,container:r,hiddenContainer:s,anchor:i,deps:0,pendingId:0,timeout:typeof I=="number"?I:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(C=!1){const{vnode:B,activeBranch:K,pendingBranch:G,pendingId:se,effects:pe,parentComponent:ge,container:xe}=y;if(y.isHydrating)y.isHydrating=!1;else if(!C){const Rt=K&&G.transition&&G.transition.mode==="out-in";Rt&&(K.transition.afterLeave=()=>{se===y.pendingId&&d(G,xe,pt,0)});let{anchor:pt}=y;K&&(pt=w(K),p(K,ge,y,!0)),Rt||d(G,xe,pt,0)}Vn(y,G),y.pendingBranch=null,y.isInFallback=!1;let Ie=y.parent,Le=!1;for(;Ie;){if(Ie.pendingBranch){Ie.effects.push(...pe),Le=!0;break}Ie=Ie.parent}Le||$c(pe),y.effects=[],Sr(B,"onResolve")},fallback(C){if(!y.pendingBranch)return;const{vnode:B,activeBranch:K,parentComponent:G,container:se,isSVG:pe}=y;Sr(B,"onFallback");const ge=w(K),xe=()=>{!y.isInFallback||(f(null,C,se,ge,G,null,pe,a,l),Vn(y,C))},Ie=C.transition&&C.transition.mode==="out-in";Ie&&(K.transition.afterLeave=xe),y.isInFallback=!0,p(K,G,null,!0),Ie||xe()},move(C,B,K){y.activeBranch&&d(y.activeBranch,C,B,K),y.container=C},next(){return y.activeBranch&&w(y.activeBranch)},registerDep(C,B){const K=!!y.pendingBranch;K&&y.deps++;const G=C.vnode.el;C.asyncDep.catch(se=>{Vr(se,C,0)}).then(se=>{if(C.isUnmounted||y.isUnmounted||y.pendingId!==C.suspenseId)return;C.asyncResolved=!0;const{vnode:pe}=C;zi(C,se,!1),G&&(pe.el=G);const ge=!G&&C.subTree.el;B(C,pe,O(G||C.subTree.el),G?null:w(C.subTree),y,o,l),ge&&T(ge),So(C,pe.el),K&&--y.deps===0&&y.resolve()})},unmount(C,B){y.isUnmounted=!0,y.activeBranch&&p(y.activeBranch,n,C,B),y.pendingBranch&&p(y.pendingBranch,n,C,B)}};return y}function cd(t,e,n,r,s,i,o,a,l){const c=e.suspense=Ao(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,i,o);return c.deps===0&&c.resolve(),u}function ud(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=ka(r?n.default:n),t.ssFallback=r?ka(n.fallback):me($t)}function ka(t){let e;if(H(t)){const n=Hn&&t._c;n&&(t._d=!1,Ce()),t=t(),n&&(t._d=!0,e=Xe,ru())}return q(t)&&(t=td(t)),t=rt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function fd(t,e){e&&e.pendingBranch?q(t)?e.effects.push(...t):e.effects.push(t):$c(t)}function Vn(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,s=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=s,So(r,s))}function us(t,e){if(Te){let n=Te.provides;const r=Te.parent&&Te.parent.provides;r===n&&(n=Te.provides=Object.create(r)),n[t]=e}}function Dt(t,e,n=!1){const r=Te||Ze;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&H(e)?e.call(r.proxy):e}}const Ta={};function fs(t,e,n){return jc(t,e,n)}function jc(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=le){const a=Te;let l,c=!1,u=!1;if(Pe(t)?(l=()=>t.value,c=Is(t)):Un(t)?(l=()=>t,r=!0):q(t)?(u=!0,c=t.some(I=>Un(I)||Is(I)),l=()=>t.map(I=>{if(Pe(I))return I.value;if(Un(I))return hn(I);if(H(I))return en(I,a,2)})):H(t)?e?l=()=>en(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),lt(t,a,3,[d])}:l=at,e&&r){const I=l;l=()=>hn(I())}let f,d=I=>{f=T.onStop=()=>{en(I,a,4)}};if(Ar)return d=at,e?n&&lt(e,a,3,[l(),u?[]:void 0,d]):l(),at;let p=u?[]:Ta;const w=()=>{if(!!T.active)if(e){const I=T.run();(r||c||(u?I.some((y,C)=>vr(y,p[C])):vr(I,p)))&&(f&&f(),lt(e,a,3,[I,p===Ta?void 0:p,d]),p=I)}else T.run()};w.allowRecurse=!!e;let O;s==="sync"?O=w:s==="post"?O=()=>$e(w,a&&a.suspense):(w.pre=!0,a&&(w.id=a.uid),O=()=>Eo(w));const T=new mo(l,O);return e?n?w():p=T.run():s==="post"?$e(T.run.bind(T),a&&a.suspense):T.run(),()=>{T.stop(),a&&a.scope&&uo(a.scope.effects,T)}}function hd(t,e,n){const r=this.proxy,s=Se(t)?t.includes(".")?zc(r,t):()=>r[t]:t.bind(r,r);let i;H(e)?i=e:(i=e.handler,n=e);const o=Te;sn(this);const a=jc(s,i.bind(r),n);return o?sn(o):tn(),a}function zc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function hn(t,e){if(!de(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Pe(t))hn(t.value,e);else if(q(t))for(let n=0;n<t.length;n++)hn(t[n],e);else if(dc(t)||Fn(t))t.forEach(n=>{hn(n,e)});else if(gc(t))for(const n in t)hn(t[n],e);return t}function qc(t){return H(t)?{setup:t,name:t.name}:t}const hs=t=>!!t.type.__asyncLoader,Hc=t=>t.type.__isKeepAlive;function dd(t,e){Wc(t,"a",e)}function pd(t,e){Wc(t,"da",e)}function Wc(t,e,n=Te){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Qs(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Hc(s.parent.vnode)&&gd(r,e,n,s),s=s.parent}}function gd(t,e,n,r){const s=Qs(e,t,r,!0);Kc(()=>{uo(r[e],s)},n)}function Qs(t,e,n=Te,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Xn(),sn(n);const a=lt(e,n,t,o);return tn(),er(),a});return r?s.unshift(i):s.push(i),i}}const Vt=t=>(e,n=Te)=>(!Ar||t==="sp")&&Qs(t,e,n),md=Vt("bm"),_d=Vt("m"),yd=Vt("bu"),wd=Vt("u"),bd=Vt("bum"),Kc=Vt("um"),vd=Vt("sp"),Id=Vt("rtg"),Ed=Vt("rtc");function kd(t,e=Te){Qs("ec",t,e)}function q0(t,e){const n=Ze;if(n===null)return t;const r=Xs(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=le]=e[i];H(o)&&(o={mounted:o,updated:o}),o.deep&&hn(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function on(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Xn(),lt(l,n,8,[t.el,a,t,e]),er())}}const Gc="components";function $i(t,e){return Sd(Gc,t,!0,e)||t}const Td=Symbol();function Sd(t,e,n=!0,r=!1){const s=Ze||Te;if(s){const i=s.type;if(t===Gc){const a=np(i,!1);if(a&&(a===e||a===kt(e)||a===Ks(kt(e))))return i}const o=Sa(s[t]||i[t],e)||Sa(s.appContext[t],e);return!o&&r?i:o}}function Sa(t,e){return t&&(t[e]||t[kt(e)]||t[Ks(kt(e))])}function Aa(t,e,n,r){let s;const i=n&&n[r];if(q(t)||Se(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(de(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Fi=t=>t?ou(t)?Xs(t)||t.proxy:Fi(t.parent):null,ks=Me(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Fi(t.parent),$root:t=>Fi(t.root),$emit:t=>t.emit,$options:t=>Ro(t),$forceUpdate:t=>t.f||(t.f=()=>Eo(t.update)),$nextTick:t=>t.n||(t.n=Mc.bind(t.proxy)),$watch:t=>hd.bind(t)}),Ad={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==le&&Z(r,e))return o[e]=1,r[e];if(s!==le&&Z(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&Z(c,e))return o[e]=3,i[e];if(n!==le&&Z(n,e))return o[e]=4,n[e];Ui&&(o[e]=0)}}const u=ks[e];let f,d;if(u)return e==="$attrs"&&We(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==le&&Z(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Z(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==le&&Z(s,e)?(s[e]=n,!0):r!==le&&Z(r,e)?(r[e]=n,!0):Z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==le&&Z(t,o)||e!==le&&Z(e,o)||(a=i[0])&&Z(a,o)||Z(r,o)||Z(ks,o)||Z(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ui=!0;function Rd(t){const e=Ro(t),n=t.proxy,r=t.ctx;Ui=!1,e.beforeCreate&&Ra(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:w,activated:O,deactivated:T,beforeDestroy:I,beforeUnmount:y,destroyed:C,unmounted:B,render:K,renderTracked:G,renderTriggered:se,errorCaptured:pe,serverPrefetch:ge,expose:xe,inheritAttrs:Ie,components:Le,directives:Rt,filters:pt}=e;if(c&&xd(c,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ue in o){const ie=o[ue];H(ie)&&(r[ue]=ie.bind(n))}if(s){const ue=s.call(n,n);de(ue)&&(t.data=Br(ue))}if(Ui=!0,i)for(const ue in i){const ie=i[ue],Be=H(ie)?ie.bind(n,n):H(ie.get)?ie.get.bind(n,n):at,Cn=!H(ie)&&H(ie.set)?ie.set.bind(n):at,xt=Qe({get:Be,set:Cn});Object.defineProperty(r,ue,{enumerable:!0,configurable:!0,get:()=>xt.value,set:gt=>xt.value=gt})}if(a)for(const ue in a)Yc(a[ue],r,n,ue);if(l){const ue=H(l)?l.call(n):l;Reflect.ownKeys(ue).forEach(ie=>{us(ie,ue[ie])})}u&&Ra(u,t,"c");function ye(ue,ie){q(ie)?ie.forEach(Be=>ue(Be.bind(n))):ie&&ue(ie.bind(n))}if(ye(md,f),ye(_d,d),ye(yd,p),ye(wd,w),ye(dd,O),ye(pd,T),ye(kd,pe),ye(Ed,G),ye(Id,se),ye(bd,y),ye(Kc,B),ye(vd,ge),q(xe))if(xe.length){const ue=t.exposed||(t.exposed={});xe.forEach(ie=>{Object.defineProperty(ue,ie,{get:()=>n[ie],set:Be=>n[ie]=Be})})}else t.exposed||(t.exposed={});K&&t.render===at&&(t.render=K),Ie!=null&&(t.inheritAttrs=Ie),Le&&(t.components=Le),Rt&&(t.directives=Rt)}function xd(t,e,n=at,r=!1){q(t)&&(t=Bi(t));for(const s in t){const i=t[s];let o;de(i)?"default"in i?o=Dt(i.from||s,i.default,!0):o=Dt(i.from||s):o=Dt(i),Pe(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Ra(t,e,n){lt(q(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Yc(t,e,n,r){const s=r.includes(".")?zc(n,r):()=>n[r];if(Se(t)){const i=e[t];H(i)&&fs(s,i)}else if(H(t))fs(s,t.bind(n));else if(de(t))if(q(t))t.forEach(i=>Yc(i,e,n,r));else{const i=H(t.handler)?t.handler.bind(n):e[t.handler];H(i)&&fs(s,i,t)}}function Ro(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>Ts(l,c,o,!0)),Ts(l,e,o)),de(e)&&i.set(e,l),l}function Ts(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ts(t,i,n,!0),s&&s.forEach(o=>Ts(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Cd[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Cd={data:xa,props:ln,emits:ln,methods:ln,computed:ln,beforeCreate:De,created:De,beforeMount:De,mounted:De,beforeUpdate:De,updated:De,beforeDestroy:De,beforeUnmount:De,destroyed:De,unmounted:De,activated:De,deactivated:De,errorCaptured:De,serverPrefetch:De,components:ln,directives:ln,watch:Pd,provide:xa,inject:Od};function xa(t,e){return e?t?function(){return Me(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function Od(t,e){return ln(Bi(t),Bi(e))}function Bi(t){if(q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function De(t,e){return t?[...new Set([].concat(t,e))]:e}function ln(t,e){return t?Me(Me(Object.create(null),t),e):e}function Pd(t,e){if(!t)return e;if(!e)return t;const n=Me(Object.create(null),t);for(const r in e)n[r]=De(t[r],e[r]);return n}function Nd(t,e,n,r=!1){const s={},i={};bs(i,Zs,1),t.propsDefaults=Object.create(null),Jc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:qh(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Dd(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ee(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Ys(t.emitsOptions,d))continue;const p=e[d];if(l)if(Z(i,d))p!==i[d]&&(i[d]=p,c=!0);else{const w=kt(d);s[w]=Vi(l,a,w,p,t,!1)}else p!==i[d]&&(i[d]=p,c=!0)}}}else{Jc(t,e,s,i)&&(c=!0);let u;for(const f in a)(!e||!Z(e,f)&&((u=Zn(f))===f||!Z(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Vi(l,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!Z(e,f)&&!0)&&(delete i[f],c=!0)}c&&Lt(t,"set","$attrs")}function Jc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ls(l))continue;const c=e[l];let u;s&&Z(s,u=kt(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:Ys(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=ee(n),c=a||le;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Vi(s,l,f,c[f],t,!Z(c,f))}}return o}function Vi(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Z(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&H(l)){const{propsDefaults:c}=s;n in c?r=c[n]:(sn(s),r=c[n]=l.call(null,e),tn())}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Zn(n))&&(r=!0))}return r}function Qc(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!H(t)){const u=f=>{l=!0;const[d,p]=Qc(f,e,!0);Me(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return de(t)&&r.set(t,$n),$n;if(q(i))for(let u=0;u<i.length;u++){const f=kt(i[u]);Ca(f)&&(o[f]=le)}else if(i)for(const u in i){const f=kt(u);if(Ca(f)){const d=i[u],p=o[f]=q(d)||H(d)?{type:d}:d;if(p){const w=Na(Boolean,p.type),O=Na(String,p.type);p[0]=w>-1,p[1]=O<0||w<O,(w>-1||Z(p,"default"))&&a.push(f)}}}const c=[o,a];return de(t)&&r.set(t,c),c}function Ca(t){return t[0]!=="$"}function Oa(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Pa(t,e){return Oa(t)===Oa(e)}function Na(t,e){return q(e)?e.findIndex(n=>Pa(n,t)):H(e)&&Pa(e,t)?0:-1}const Zc=t=>t[0]==="_"||t==="$stable",xo=t=>q(t)?t.map(rt):[rt(t)],Md=(t,e,n)=>{if(e._n)return e;const r=Ge((...s)=>xo(e(...s)),n);return r._c=!1,r},Xc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Zc(s))continue;const i=t[s];if(H(i))e[s]=Md(s,i,r);else if(i!=null){const o=xo(i);e[s]=()=>o}}},eu=(t,e)=>{const n=xo(e);t.slots.default=()=>n},Ld=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ee(e),bs(e,"_",n)):Xc(e,t.slots={})}else t.slots={},e&&eu(t,e);bs(t.slots,Zs,1)},$d=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=le;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Me(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Xc(e,s)),o=e}else e&&(eu(t,e),o={default:1});if(i)for(const a in s)!Zc(a)&&!(a in o)&&delete s[a]};function tu(){return{app:null,config:{isNativeTag:uh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fd=0;function Ud(t,e){return function(r,s=null){H(r)||(r=Object.assign({},r)),s!=null&&!de(s)&&(s=null);const i=tu(),o=new Set;let a=!1;const l=i.app={_uid:Fd++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:ip,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&H(c.install)?(o.add(c),c.install(l,...u)):H(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,f){if(!a){const d=me(r,s);return d.appContext=i,u&&e?e(d,c):t(d,c,f),a=!0,l._container=c,c.__vue_app__=l,Xs(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l}};return l}}function ji(t,e,n,r,s=!1){if(q(t)){t.forEach((d,p)=>ji(d,e&&(q(e)?e[p]:e),n,r,s));return}if(hs(r)&&!s)return;const i=r.shapeFlag&4?Xs(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===le?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(Se(c)?(u[c]=null,Z(f,c)&&(f[c]=null)):Pe(c)&&(c.value=null)),H(l))en(l,a,12,[o,u]);else{const d=Se(l),p=Pe(l);if(d||p){const w=()=>{if(t.f){const O=d?u[l]:l.value;s?q(O)&&uo(O,i):q(O)?O.includes(i)||O.push(i):d?(u[l]=[i],Z(f,l)&&(f[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,Z(f,l)&&(f[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(w.id=-1,$e(w,n)):w()}}}const $e=fd;function Bd(t){return Vd(t)}function Vd(t,e){const n=mh();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=at,cloneNode:w,insertStaticContent:O}=t,T=(h,g,m,v=null,b=null,S=null,x=!1,k=null,A=!!g.dynamicChildren)=>{if(h===g)return;h&&!Kt(h,g)&&(v=M(h),Ke(h,b,S,!0),h=null),g.patchFlag===-2&&(A=!1,g.dynamicChildren=null);const{type:E,ref:L,shapeFlag:N}=g;switch(E){case Co:I(h,g,m,v);break;case $t:y(h,g,m,v);break;case ds:h==null&&C(g,m,v,x);break;case Je:Rt(h,g,m,v,b,S,x,k,A);break;default:N&1?G(h,g,m,v,b,S,x,k,A):N&6?pt(h,g,m,v,b,S,x,k,A):(N&64||N&128)&&E.process(h,g,m,v,b,S,x,k,A,fe)}L!=null&&b&&ji(L,h&&h.ref,S,g||h,!g)},I=(h,g,m,v)=>{if(h==null)r(g.el=a(g.children),m,v);else{const b=g.el=h.el;g.children!==h.children&&c(b,g.children)}},y=(h,g,m,v)=>{h==null?r(g.el=l(g.children||""),m,v):g.el=h.el},C=(h,g,m,v)=>{[h.el,h.anchor]=O(h.children,g,m,v,h.el,h.anchor)},B=({el:h,anchor:g},m,v)=>{let b;for(;h&&h!==g;)b=d(h),r(h,m,v),h=b;r(g,m,v)},K=({el:h,anchor:g})=>{let m;for(;h&&h!==g;)m=d(h),s(h),h=m;s(g)},G=(h,g,m,v,b,S,x,k,A)=>{x=x||g.type==="svg",h==null?se(g,m,v,b,S,x,k,A):xe(h,g,b,S,x,k,A)},se=(h,g,m,v,b,S,x,k)=>{let A,E;const{type:L,props:N,shapeFlag:$,transition:z,patchFlag:X,dirs:oe}=h;if(h.el&&w!==void 0&&X===-1)A=h.el=w(h.el);else{if(A=h.el=o(h.type,S,N&&N.is,N),$&8?u(A,h.children):$&16&&ge(h.children,A,null,v,b,S&&L!=="foreignObject",x,k),oe&&on(h,null,v,"created"),N){for(const he in N)he!=="value"&&!ls(he)&&i(A,he,null,N[he],S,h.children,v,b,R);"value"in N&&i(A,"value",null,N.value),(E=N.onVnodeBeforeMount)&&_t(E,v,h)}pe(A,h,h.scopeId,x,v)}oe&&on(h,null,v,"beforeMount");const ae=(!b||b&&!b.pendingBranch)&&z&&!z.persisted;ae&&z.beforeEnter(A),r(A,g,m),((E=N&&N.onVnodeMounted)||ae||oe)&&$e(()=>{E&&_t(E,v,h),ae&&z.enter(A),oe&&on(h,null,v,"mounted")},b)},pe=(h,g,m,v,b)=>{if(m&&p(h,m),v)for(let S=0;S<v.length;S++)p(h,v[S]);if(b){let S=b.subTree;if(g===S){const x=b.vnode;pe(h,x,x.scopeId,x.slotScopeIds,b.parent)}}},ge=(h,g,m,v,b,S,x,k,A=0)=>{for(let E=A;E<h.length;E++){const L=h[E]=k?Ht(h[E]):rt(h[E]);T(null,L,g,m,v,b,S,x,k)}},xe=(h,g,m,v,b,S,x)=>{const k=g.el=h.el;let{patchFlag:A,dynamicChildren:E,dirs:L}=g;A|=h.patchFlag&16;const N=h.props||le,$=g.props||le;let z;m&&an(m,!1),(z=$.onVnodeBeforeUpdate)&&_t(z,m,g,h),L&&on(g,h,m,"beforeUpdate"),m&&an(m,!0);const X=b&&g.type!=="foreignObject";if(E?Ie(h.dynamicChildren,E,k,m,v,X,S):x||Be(h,g,k,null,m,v,X,S,!1),A>0){if(A&16)Le(k,g,N,$,m,v,b);else if(A&2&&N.class!==$.class&&i(k,"class",null,$.class,b),A&4&&i(k,"style",N.style,$.style,b),A&8){const oe=g.dynamicProps;for(let ae=0;ae<oe.length;ae++){const he=oe[ae],nt=N[he],On=$[he];(On!==nt||he==="value")&&i(k,he,nt,On,b,h.children,m,v,R)}}A&1&&h.children!==g.children&&u(k,g.children)}else!x&&E==null&&Le(k,g,N,$,m,v,b);((z=$.onVnodeUpdated)||L)&&$e(()=>{z&&_t(z,m,g,h),L&&on(g,h,m,"updated")},v)},Ie=(h,g,m,v,b,S,x)=>{for(let k=0;k<g.length;k++){const A=h[k],E=g[k],L=A.el&&(A.type===Je||!Kt(A,E)||A.shapeFlag&70)?f(A.el):m;T(A,E,L,null,v,b,S,x,!0)}},Le=(h,g,m,v,b,S,x)=>{if(m!==v){for(const k in v){if(ls(k))continue;const A=v[k],E=m[k];A!==E&&k!=="value"&&i(h,k,E,A,x,g.children,b,S,R)}if(m!==le)for(const k in m)!ls(k)&&!(k in v)&&i(h,k,m[k],null,x,g.children,b,S,R);"value"in v&&i(h,"value",m.value,v.value)}},Rt=(h,g,m,v,b,S,x,k,A)=>{const E=g.el=h?h.el:a(""),L=g.anchor=h?h.anchor:a("");let{patchFlag:N,dynamicChildren:$,slotScopeIds:z}=g;z&&(k=k?k.concat(z):z),h==null?(r(E,m,v),r(L,m,v),ge(g.children,m,L,b,S,x,k,A)):N>0&&N&64&&$&&h.dynamicChildren?(Ie(h.dynamicChildren,$,m,b,S,x,k),(g.key!=null||b&&g===b.subTree)&&nu(h,g,!0)):Be(h,g,m,L,b,S,x,k,A)},pt=(h,g,m,v,b,S,x,k,A)=>{g.slotScopeIds=k,h==null?g.shapeFlag&512?b.ctx.activate(g,m,v,x,A):xn(g,m,v,b,S,x,A):ye(h,g,A)},xn=(h,g,m,v,b,S,x)=>{const k=h.component=Jd(h,v,b);if(Hc(h)&&(k.ctx.renderer=fe),Zd(k),k.asyncDep){if(b&&b.registerDep(k,ue),!h.el){const A=k.subTree=me($t);y(null,A,g,m)}return}ue(k,h,g,m,b,S,x)},ye=(h,g,m)=>{const v=g.component=h.component;if(sd(h,g,m))if(v.asyncDep&&!v.asyncResolved){ie(v,g,m);return}else v.next=g,Zh(v.update),v.update();else g.el=h.el,v.vnode=g},ue=(h,g,m,v,b,S,x)=>{const k=()=>{if(h.isMounted){let{next:L,bu:N,u:$,parent:z,vnode:X}=h,oe=L,ae;an(h,!1),L?(L.el=X.el,ie(h,L,x)):L=X,N&&cs(N),(ae=L.props&&L.props.onVnodeBeforeUpdate)&&_t(ae,z,L,X),an(h,!0);const he=mi(h),nt=h.subTree;h.subTree=he,T(nt,he,f(nt.el),M(nt),h,b,S),L.el=he.el,oe===null&&So(h,he.el),$&&$e($,b),(ae=L.props&&L.props.onVnodeUpdated)&&$e(()=>_t(ae,z,L,X),b)}else{let L;const{el:N,props:$}=g,{bm:z,m:X,parent:oe}=h,ae=hs(g);if(an(h,!1),z&&cs(z),!ae&&(L=$&&$.onVnodeBeforeMount)&&_t(L,oe,g),an(h,!0),N&&Y){const he=()=>{h.subTree=mi(h),Y(N,h.subTree,h,b,null)};ae?g.type.__asyncLoader().then(()=>!h.isUnmounted&&he()):he()}else{const he=h.subTree=mi(h);T(null,he,m,v,h,b,S),g.el=he.el}if(X&&$e(X,b),!ae&&(L=$&&$.onVnodeMounted)){const he=g;$e(()=>_t(L,oe,he),b)}(g.shapeFlag&256||oe&&hs(oe.vnode)&&oe.vnode.shapeFlag&256)&&h.a&&$e(h.a,b),h.isMounted=!0,g=m=v=null}},A=h.effect=new mo(k,()=>Eo(E),h.scope),E=h.update=()=>A.run();E.id=h.uid,an(h,!0),E()},ie=(h,g,m)=>{g.component=h;const v=h.vnode.props;h.vnode=g,h.next=null,Dd(h,g.props,v,m),$d(h,g.children,m),Xn(),Ia(),er()},Be=(h,g,m,v,b,S,x,k,A=!1)=>{const E=h&&h.children,L=h?h.shapeFlag:0,N=g.children,{patchFlag:$,shapeFlag:z}=g;if($>0){if($&128){xt(E,N,m,v,b,S,x,k,A);return}else if($&256){Cn(E,N,m,v,b,S,x,k,A);return}}z&8?(L&16&&R(E,b,S),N!==E&&u(m,N)):L&16?z&16?xt(E,N,m,v,b,S,x,k,A):R(E,b,S,!0):(L&8&&u(m,""),z&16&&ge(N,m,v,b,S,x,k,A))},Cn=(h,g,m,v,b,S,x,k,A)=>{h=h||$n,g=g||$n;const E=h.length,L=g.length,N=Math.min(E,L);let $;for($=0;$<N;$++){const z=g[$]=A?Ht(g[$]):rt(g[$]);T(h[$],z,m,null,b,S,x,k,A)}E>L?R(h,b,S,!0,!1,N):ge(g,m,v,b,S,x,k,A,N)},xt=(h,g,m,v,b,S,x,k,A)=>{let E=0;const L=g.length;let N=h.length-1,$=L-1;for(;E<=N&&E<=$;){const z=h[E],X=g[E]=A?Ht(g[E]):rt(g[E]);if(Kt(z,X))T(z,X,m,null,b,S,x,k,A);else break;E++}for(;E<=N&&E<=$;){const z=h[N],X=g[$]=A?Ht(g[$]):rt(g[$]);if(Kt(z,X))T(z,X,m,null,b,S,x,k,A);else break;N--,$--}if(E>N){if(E<=$){const z=$+1,X=z<L?g[z].el:v;for(;E<=$;)T(null,g[E]=A?Ht(g[E]):rt(g[E]),m,X,b,S,x,k,A),E++}}else if(E>$)for(;E<=N;)Ke(h[E],b,S,!0),E++;else{const z=E,X=E,oe=new Map;for(E=X;E<=$;E++){const Ve=g[E]=A?Ht(g[E]):rt(g[E]);Ve.key!=null&&oe.set(Ve.key,E)}let ae,he=0;const nt=$-X+1;let On=!1,fa=0;const ir=new Array(nt);for(E=0;E<nt;E++)ir[E]=0;for(E=z;E<=N;E++){const Ve=h[E];if(he>=nt){Ke(Ve,b,S,!0);continue}let mt;if(Ve.key!=null)mt=oe.get(Ve.key);else for(ae=X;ae<=$;ae++)if(ir[ae-X]===0&&Kt(Ve,g[ae])){mt=ae;break}mt===void 0?Ke(Ve,b,S,!0):(ir[mt-X]=E+1,mt>=fa?fa=mt:On=!0,T(Ve,g[mt],m,null,b,S,x,k,A),he++)}const ha=On?jd(ir):$n;for(ae=ha.length-1,E=nt-1;E>=0;E--){const Ve=X+E,mt=g[Ve],da=Ve+1<L?g[Ve+1].el:v;ir[E]===0?T(null,mt,m,da,b,S,x,k,A):On&&(ae<0||E!==ha[ae]?gt(mt,m,da,2):ae--)}}},gt=(h,g,m,v,b=null)=>{const{el:S,type:x,transition:k,children:A,shapeFlag:E}=h;if(E&6){gt(h.component.subTree,g,m,v);return}if(E&128){h.suspense.move(g,m,v);return}if(E&64){x.move(h,g,m,fe);return}if(x===Je){r(S,g,m);for(let N=0;N<A.length;N++)gt(A[N],g,m,v);r(h.anchor,g,m);return}if(x===ds){B(h,g,m);return}if(v!==2&&E&1&&k)if(v===0)k.beforeEnter(S),r(S,g,m),$e(()=>k.enter(S),b);else{const{leave:N,delayLeave:$,afterLeave:z}=k,X=()=>r(S,g,m),oe=()=>{N(S,()=>{X(),z&&z()})};$?$(S,X,oe):oe()}else r(S,g,m)},Ke=(h,g,m,v=!1,b=!1)=>{const{type:S,props:x,ref:k,children:A,dynamicChildren:E,shapeFlag:L,patchFlag:N,dirs:$}=h;if(k!=null&&ji(k,null,m,h,!0),L&256){g.ctx.deactivate(h);return}const z=L&1&&$,X=!hs(h);let oe;if(X&&(oe=x&&x.onVnodeBeforeUnmount)&&_t(oe,g,h),L&6)D(h.component,m,v);else{if(L&128){h.suspense.unmount(m,v);return}z&&on(h,null,g,"beforeUnmount"),L&64?h.type.remove(h,g,m,b,fe,v):E&&(S!==Je||N>0&&N&64)?R(E,g,m,!1,!0):(S===Je&&N&384||!b&&L&16)&&R(A,g,m),v&&sr(h)}(X&&(oe=x&&x.onVnodeUnmounted)||z)&&$e(()=>{oe&&_t(oe,g,h),z&&on(h,null,g,"unmounted")},m)},sr=h=>{const{type:g,el:m,anchor:v,transition:b}=h;if(g===Je){_(m,v);return}if(g===ds){K(h);return}const S=()=>{s(m),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(h.shapeFlag&1&&b&&!b.persisted){const{leave:x,delayLeave:k}=b,A=()=>x(m,S);k?k(h.el,S,A):A()}else S()},_=(h,g)=>{let m;for(;h!==g;)m=d(h),s(h),h=m;s(g)},D=(h,g,m)=>{const{bum:v,scope:b,update:S,subTree:x,um:k}=h;v&&cs(v),b.stop(),S&&(S.active=!1,Ke(x,h,g,m)),k&&$e(k,g),$e(()=>{h.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},R=(h,g,m,v=!1,b=!1,S=0)=>{for(let x=S;x<h.length;x++)Ke(h[x],g,m,v,b)},M=h=>h.shapeFlag&6?M(h.component.subTree):h.shapeFlag&128?h.suspense.next():d(h.anchor||h.el),te=(h,g,m)=>{h==null?g._vnode&&Ke(g._vnode,null,null,!0):T(g._vnode||null,h,g,null,null,null,m),Ia(),Fc(),g._vnode=h},fe={p:T,um:Ke,m:gt,r:sr,mt:xn,mc:ge,pc:Be,pbc:Ie,n:M,o:t};let J,Y;return e&&([J,Y]=e(fe)),{render:te,hydrate:J,createApp:Ud(te,J)}}function an({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function nu(t,e,n=!1){const r=t.children,s=e.children;if(q(r)&&q(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Ht(s[i]),a.el=o.el),n||nu(o,a))}}function jd(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const zd=t=>t.__isTeleport,Je=Symbol(void 0),Co=Symbol(void 0),$t=Symbol(void 0),ds=Symbol(void 0),fr=[];let Xe=null;function Ce(t=!1){fr.push(Xe=t?null:[])}function ru(){fr.pop(),Xe=fr[fr.length-1]||null}let Hn=1;function Da(t){Hn+=t}function su(t){return t.dynamicChildren=Hn>0?Xe||$n:null,ru(),Hn>0&&Xe&&Xe.push(t),t}function Zt(t,e,n,r,s,i){return su(ve(t,e,n,r,s,i,!0))}function dn(t,e,n,r,s){return su(me(t,e,n,r,s,!0))}function Ss(t){return t?t.__v_isVNode===!0:!1}function Kt(t,e){return t.type===e.type&&t.key===e.key}const Zs="__vInternal",iu=({key:t})=>t!=null?t:null,ps=({ref:t,ref_key:e,ref_for:n})=>t!=null?Se(t)||Pe(t)||H(t)?{i:Ze,r:t,k:e,f:!!n}:t:null;function ve(t,e=null,n=null,r=0,s=null,i=t===Je?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&iu(e),ref:e&&ps(e),scopeId:Js,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(Oo(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Se(n)?8:16),Hn>0&&!o&&Xe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Xe.push(l),l}const me=qd;function qd(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Td)&&(t=$t),Ss(t)){const a=Wn(t,e,!0);return n&&Oo(a,n),Hn>0&&!i&&Xe&&(a.shapeFlag&6?Xe[Xe.indexOf(t)]=a:Xe.push(a)),a.patchFlag|=-2,a}if(rp(t)&&(t=t.__vccOpts),e){e=Hd(e);let{class:a,style:l}=e;a&&!Se(a)&&(e.class=lo(a)),de(l)&&(Ac(l)&&!q(l)&&(l=Me({},l)),e.style=ao(l))}const o=Se(t)?1:id(t)?128:zd(t)?64:de(t)?4:H(t)?2:0;return ve(t,e,n,r,s,o,i,!0)}function Hd(t){return t?Ac(t)||Zs in t?Me({},t):t:null}function Wn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Kd(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&iu(a),ref:e&&e.ref?n&&s?q(s)?s.concat(ps(e)):[s,ps(e)]:ps(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Je?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Wn(t.ssContent),ssFallback:t.ssFallback&&Wn(t.ssFallback),el:t.el,anchor:t.anchor}}function St(t=" ",e=0){return me(Co,null,t,e)}function Wd(t,e){const n=me(ds,null,t);return n.staticCount=e,n}function rs(t="",e=!1){return e?(Ce(),dn($t,null,t)):me($t,null,t)}function rt(t){return t==null||typeof t=="boolean"?me($t):q(t)?me(Je,null,t.slice()):typeof t=="object"?Ht(t):me(Co,null,String(t))}function Ht(t){return t.el===null||t.memo?t:Wn(t)}function Oo(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(q(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Oo(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Zs in e)?e._ctx=Ze:s===3&&Ze&&(Ze.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:Ze},n=32):(e=String(e),r&64?(n=16,e=[St(e)]):n=8);t.children=e,t.shapeFlag|=n}function Kd(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=lo([e.class,r.class]));else if(s==="style")e.style=ao([e.style,r.style]);else if(qs(s)){const i=e[s],o=r[s];o&&i!==o&&!(q(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function _t(t,e,n,r=null){lt(t,e,7,[n,r])}const Gd=tu();let Yd=0;function Jd(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Gd,i={uid:Yd++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new _h(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Qc(r,s),emitsOptions:Bc(r,s),emit:null,emitted:null,propsDefaults:le,inheritAttrs:r.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ed.bind(null,i),t.ce&&t.ce(i),i}let Te=null;const Qd=()=>Te||Ze,sn=t=>{Te=t,t.scope.on()},tn=()=>{Te&&Te.scope.off(),Te=null};function ou(t){return t.vnode.shapeFlag&4}let Ar=!1;function Zd(t,e=!1){Ar=e;const{props:n,children:r}=t.vnode,s=ou(t);Nd(t,n,s,e),Ld(t,r);const i=s?Xd(t,e):void 0;return Ar=!1,i}function Xd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Rc(new Proxy(t.ctx,Ad));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?tp(t):null;sn(t),Xn();const i=en(r,t,0,[t.props,s]);if(er(),tn(),ho(i)){if(i.then(tn,tn),e)return i.then(o=>{zi(t,o,e)}).catch(o=>{Vr(o,t,0)});t.asyncDep=i}else zi(t,i,e)}else au(t,e)}function zi(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:de(e)&&(t.setupState=Pc(e)),au(t,n)}let Ma;function au(t,e,n){const r=t.type;if(!t.render){if(!e&&Ma&&!r.render){const s=r.template||Ro(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Me(Me({isCustomElement:i,delimiters:a},o),l);r.render=Ma(s,c)}}t.render=r.render||at}sn(t),Xn(),Rd(t),er(),tn()}function ep(t){return new Proxy(t.attrs,{get(e,n){return We(t,"get","$attrs"),e[n]}})}function tp(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=ep(t))},slots:t.slots,emit:t.emit,expose:e}}function Xs(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Pc(Rc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ks)return ks[n](t)}}))}function np(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function rp(t){return H(t)&&"__vccOpts"in t}const Qe=(t,e)=>Yh(t,e,Ar);function sp(t){const e=Qd();let n=t();return tn(),ho(n)&&(n=n.catch(r=>{throw sn(e),r})),[n,()=>sn(e)]}function lu(t,e,n){const r=arguments.length;return r===2?de(e)&&!q(e)?Ss(e)?me(t,null,[e]):me(t,e):me(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ss(n)&&(n=[n]),me(t,e,n))}const ip="3.2.39",op="http://www.w3.org/2000/svg",fn=typeof document<"u"?document:null,La=fn&&fn.createElement("template"),ap={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?fn.createElementNS(op,t):fn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>fn.createTextNode(t),createComment:t=>fn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>fn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{La.innerHTML=r?`<svg>${t}</svg>`:t;const a=La.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function lp(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function cp(t,e,n){const r=t.style,s=Se(n);if(n&&!s){for(const i in n)qi(r,i,n[i]);if(e&&!Se(e))for(const i in e)n[i]==null&&qi(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const $a=/\s*!important$/;function qi(t,e,n){if(q(n))n.forEach(r=>qi(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=up(t,e);$a.test(n)?t.setProperty(Zn(r),n.replace($a,""),"important"):t[r]=n}}const Fa=["Webkit","Moz","ms"],_i={};function up(t,e){const n=_i[e];if(n)return n;let r=kt(e);if(r!=="filter"&&r in t)return _i[e]=r;r=Ks(r);for(let s=0;s<Fa.length;s++){const i=Fa[s]+r;if(i in t)return _i[e]=i}return e}const Ua="http://www.w3.org/1999/xlink";function fp(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ua,e.slice(6,e.length)):t.setAttributeNS(Ua,e,n);else{const i=oh(e);n==null||i&&!fc(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function hp(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=fc(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[cu,dp]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Hi=0;const pp=Promise.resolve(),gp=()=>{Hi=0},mp=()=>Hi||(pp.then(gp),Hi=cu());function Dn(t,e,n,r){t.addEventListener(e,n,r)}function _p(t,e,n,r){t.removeEventListener(e,n,r)}function yp(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=wp(e);if(r){const c=i[e]=bp(r,s);Dn(t,a,c,l)}else o&&(_p(t,a,o,l),i[e]=void 0)}}const Ba=/(?:Once|Passive|Capture)$/;function wp(t){let e;if(Ba.test(t)){e={};let r;for(;r=t.match(Ba);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Zn(t.slice(2)),e]}function bp(t,e){const n=r=>{const s=r.timeStamp||cu();(dp||s>=n.attached-1)&&lt(vp(r,n.value),e,5,[r])};return n.value=t,n.attached=mp(),n}function vp(t,e){if(q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Va=/^on[a-z]/,Ip=(t,e,n,r,s=!1,i,o,a,l)=>{e==="class"?lp(t,r,s):e==="style"?cp(t,n,r):qs(e)?co(e)||yp(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ep(t,e,r,s))?hp(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),fp(t,e,r,s))};function Ep(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Va.test(e)&&H(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Va.test(e)&&Se(n)?!1:e in t}const ja=t=>{const e=t.props["onUpdate:modelValue"]||!1;return q(e)?n=>cs(e,n):e};function kp(t){t.target.composing=!0}function za(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const H0={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=ja(s);const i=r||s.props&&s.props.type==="number";Dn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=vs(a)),t._assign(a)}),n&&Dn(t,"change",()=>{t.value=t.value.trim()}),e||(Dn(t,"compositionstart",kp),Dn(t,"compositionend",za),Dn(t,"change",za))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=ja(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&vs(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Tp=Me({patchProp:Ip},ap);let qa;function Sp(){return qa||(qa=Bd(Tp))}const Ap=(...t)=>{const e=Sp().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Rp(r);if(!s)return;const i=e._component;!H(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Rp(t){return Se(t)?document.querySelector(t):t}/**
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
 */const uu=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},xp=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},fu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),r.push(n[u],n[f],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(uu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||f==null)throw Error();const d=i<<2|a>>4;if(r.push(d),c!==64){const p=a<<4&240|c>>2;if(r.push(p),f!==64){const w=c<<6&192|f;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Cp=function(t){const e=uu(t);return fu.encodeByteArray(e,!0)},hu=function(t){return Cp(t).replace(/\./g,"")},Op=function(t){try{return fu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class Pp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Np(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())}function du(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Dp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Mp(){const t=Ne();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pu(){return typeof indexedDB=="object"}function gu(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Lp(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const $p="FirebaseError";class ht extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$p,Object.setPrototypeOf(this,ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Sn.prototype.create)}}class Sn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Fp(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ht(s,a,r)}}function Fp(t,e){return t.replace(Up,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Up=/\{\$([^}]+)}/g;function Bp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Rr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ha(i)&&Ha(o)){if(!Rr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ha(t){return t!==null&&typeof t=="object"}/**
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
 */function jr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function cr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ur(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Vp(t,e){const n=new jp(t,e);return n.subscribe.bind(n)}class jp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");zp(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=yi),s.error===void 0&&(s.error=yi),s.complete===void 0&&(s.complete=yi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function yi(){}/**
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
 */const qp=1e3,Hp=2,Wp=4*60*60*1e3,Kp=.5;function Wa(t,e=qp,n=Hp){const r=e*Math.pow(n,t),s=Math.round(Kp*r*(Math.random()-.5)*2);return Math.min(Wp,r+s)}/**
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
 */function Ue(t){return t&&t._delegate?t._delegate:t}class ct{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Gp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Pp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Jp(e))try{this.getOrInitializeService({instanceIdentifier:cn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=cn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cn){return this.instances.has(e)}getOptions(e=cn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yp(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=cn){return this.component?this.component.multipleInstances?e:cn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yp(t){return t===cn?void 0:t}function Jp(t){return t.instantiationMode==="EAGER"}/**
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
 */class Qp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Gp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const Zp={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},Xp=re.INFO,eg={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},tg=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=eg[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ei{constructor(e){this.name=e,this._logLevel=Xp,this._logHandler=tg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const ng=(t,e)=>e.some(n=>t instanceof n);let Ka,Ga;function rg(){return Ka||(Ka=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sg(){return Ga||(Ga=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mu=new WeakMap,Wi=new WeakMap,_u=new WeakMap,wi=new WeakMap,Po=new WeakMap;function ig(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(nn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&mu.set(n,t)}).catch(()=>{}),Po.set(e,t),e}function og(t){if(Wi.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Wi.set(t,e)}let Ki={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_u.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ag(t){Ki=t(Ki)}function lg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(bi(this),e,...n);return _u.set(r,e.sort?e.sort():[e]),nn(r)}:sg().includes(t)?function(...e){return t.apply(bi(this),e),nn(mu.get(this))}:function(...e){return nn(t.apply(bi(this),e))}}function cg(t){return typeof t=="function"?lg(t):(t instanceof IDBTransaction&&og(t),ng(t,rg())?new Proxy(t,Ki):t)}function nn(t){if(t instanceof IDBRequest)return ig(t);if(wi.has(t))return wi.get(t);const e=cg(t);return e!==t&&(wi.set(t,e),Po.set(e,t)),e}const bi=t=>Po.get(t);function yu(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=nn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(nn(o.result),l.oldVersion,l.newVersion,nn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const ug=["get","getKey","getAll","getAllKeys","count"],fg=["put","add","delete","clear"],vi=new Map;function Ya(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(vi.get(e))return vi.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=fg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ug.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return vi.set(e,i),i}ag(t=>({...t,get:(e,n,r)=>Ya(e,n)||t.get(e,n,r),has:(e,n)=>!!Ya(e,n)||t.has(e,n)}));/**
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
 */class hg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dg(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function dg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gi="@firebase/app",Ja="0.7.33";/**
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
 */const yn=new ei("@firebase/app"),pg="@firebase/app-compat",gg="@firebase/analytics-compat",mg="@firebase/analytics",_g="@firebase/app-check-compat",yg="@firebase/app-check",wg="@firebase/auth",bg="@firebase/auth-compat",vg="@firebase/database",Ig="@firebase/database-compat",Eg="@firebase/functions",kg="@firebase/functions-compat",Tg="@firebase/installations",Sg="@firebase/installations-compat",Ag="@firebase/messaging",Rg="@firebase/messaging-compat",xg="@firebase/performance",Cg="@firebase/performance-compat",Og="@firebase/remote-config",Pg="@firebase/remote-config-compat",Ng="@firebase/storage",Dg="@firebase/storage-compat",Mg="@firebase/firestore",Lg="@firebase/firestore-compat",$g="firebase",Fg="9.10.0";/**
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
 */const wu="[DEFAULT]",Ug={[Gi]:"fire-core",[pg]:"fire-core-compat",[mg]:"fire-analytics",[gg]:"fire-analytics-compat",[yg]:"fire-app-check",[_g]:"fire-app-check-compat",[wg]:"fire-auth",[bg]:"fire-auth-compat",[vg]:"fire-rtdb",[Ig]:"fire-rtdb-compat",[Eg]:"fire-fn",[kg]:"fire-fn-compat",[Tg]:"fire-iid",[Sg]:"fire-iid-compat",[Ag]:"fire-fcm",[Rg]:"fire-fcm-compat",[xg]:"fire-perf",[Cg]:"fire-perf-compat",[Og]:"fire-rc",[Pg]:"fire-rc-compat",[Ng]:"fire-gcs",[Dg]:"fire-gcs-compat",[Mg]:"fire-fst",[Lg]:"fire-fst-compat","fire-js":"fire-js",[$g]:"fire-js-all"};/**
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
 */const As=new Map,Yi=new Map;function Bg(t,e){try{t.container.addComponent(e)}catch(n){yn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Tt(t){const e=t.name;if(Yi.has(e))return yn.debug(`There were multiple attempts to register component ${e}.`),!1;Yi.set(e,t);for(const n of As.values())Bg(n,t);return!0}function An(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Vg={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},wn=new Sn("app","Firebase",Vg);/**
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
 */class jg{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ct("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wn.create("app-deleted",{appName:this._name})}}/**
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
 */const zr=Fg;function zg(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:wu,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw wn.create("bad-app-name",{appName:String(r)});const s=As.get(r);if(s){if(Rr(t,s.options)&&Rr(n,s.config))return s;throw wn.create("duplicate-app",{appName:r})}const i=new Qp(r);for(const a of Yi.values())i.addComponent(a);const o=new jg(t,n,i);return As.set(r,o),o}function No(t=wu){const e=As.get(t);if(!e)throw wn.create("no-app",{appName:t});return e}function et(t,e,n){var r;let s=(r=Ug[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yn.warn(a.join(" "));return}Tt(new ct(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const qg="firebase-heartbeat-database",Hg=1,xr="firebase-heartbeat-store";let Ii=null;function bu(){return Ii||(Ii=yu(qg,Hg,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(xr)}}}).catch(t=>{throw wn.create("idb-open",{originalErrorMessage:t.message})})),Ii}async function Wg(t){var e;try{return(await bu()).transaction(xr).objectStore(xr).get(vu(t))}catch(n){if(n instanceof ht)yn.warn(n.message);else{const r=wn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});yn.warn(r.message)}}}async function Qa(t,e){var n;try{const s=(await bu()).transaction(xr,"readwrite");return await s.objectStore(xr).put(e,vu(t)),s.done}catch(r){if(r instanceof ht)yn.warn(r.message);else{const s=wn.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});yn.warn(s.message)}}}function vu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Kg=1024,Gg=30*24*60*60*1e3;class Yg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Qg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Za();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Gg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Za(),{heartbeatsToSend:n,unsentEntries:r}=Jg(this._heartbeatsCache.heartbeats),s=hu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Za(){return new Date().toISOString().substring(0,10)}function Jg(t,e=Kg){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Xa(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Xa(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Qg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pu()?gu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Wg(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Xa(t){return hu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Zg(t){Tt(new ct("platform-logger",e=>new hg(e),"PRIVATE")),Tt(new ct("heartbeat",e=>new Yg(e),"PRIVATE")),et(Gi,Ja,t),et(Gi,Ja,"esm2017"),et("fire-js","")}Zg("");function Do(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Iu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Xg=Iu,Eu=new Sn("auth","Firebase",Iu());/**
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
 */const el=new ei("@firebase/auth");function gs(t,...e){el.logLevel<=re.ERROR&&el.error(`Auth (${zr}): ${t}`,...e)}/**
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
 */function ut(t,...e){throw Mo(t,...e)}function vt(t,...e){return Mo(t,...e)}function em(t,e,n){const r=Object.assign(Object.assign({},Xg()),{[e]:n});return new Sn("auth","Firebase",r).create(e,{appName:t.name})}function Mo(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Eu.create(t,...e)}function j(t,e,...n){if(!t)throw Mo(e,...n)}function Pt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw gs(e),new Error(e)}function Ft(t,e){t||Pt(e)}/**
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
 */const tl=new Map;function Nt(t){Ft(t instanceof Function,"Expected a class definition");let e=tl.get(t);return e?(Ft(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,tl.set(t,e),e)}/**
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
 */function tm(t,e){const n=An(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Rr(i,e!=null?e:{}))return s;ut(s,"already-initialized")}return n.initialize({options:e})}function nm(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Ji(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function rm(){return nl()==="http:"||nl()==="https:"}function nl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function sm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rm()||du()||"connection"in navigator)?navigator.onLine:!0}function im(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class qr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ft(n>e,"Short delay should be less than long delay!"),this.isMobile=Np()||Dp()}get(){return sm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Lo(t,e){Ft(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ku{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const om={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const am=new qr(3e4,6e4);function Hr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Wr(t,e,n,r,s={}){return Tu(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=jr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),ku.fetch()(Su(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Tu(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},om),e);try{const s=new lm(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ss(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ss(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ss(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ss(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw em(t,u,c);ut(t,u)}}catch(s){if(s instanceof ht)throw s;ut(t,"network-request-failed")}}async function Kr(t,e,n,r,s={}){const i=await Wr(t,e,n,r,s);return"mfaPendingCredential"in i&&ut(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Su(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Lo(t.config,s):`${t.config.apiScheme}://${s}`}class lm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(vt(this.auth,"network-request-failed")),am.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ss(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=vt(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function cm(t,e){return Wr(t,"POST","/v1/accounts:delete",e)}async function um(t,e){return Wr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function hr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fm(t,e=!1){const n=Ue(t),r=await n.getIdToken(e),s=$o(r);j(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:hr(Ei(s.auth_time)),issuedAtTime:hr(Ei(s.iat)),expirationTime:hr(Ei(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ei(t){return Number(t)*1e3}function $o(t){var e;const[n,r,s]=t.split(".");if(n===void 0||r===void 0||s===void 0)return gs("JWT malformed, contained fewer than 3 sections"),null;try{const i=Op(r);return i?JSON.parse(i):(gs("Failed to decode base64 JWT payload"),null)}catch(i){return gs("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function hm(t){const e=$o(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Cr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ht&&dm(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function dm({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class pm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Au{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=hr(this.lastLoginAt),this.creationTime=hr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Rs(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Cr(t,um(n,{idToken:r}));j(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?_m(i.providerUserInfo):[],a=mm(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Au(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function gm(t){const e=Ue(t);await Rs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mm(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function _m(t){return t.map(e=>{var{providerId:n}=e,r=Do(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function ym(t,e){const n=await Tu(t,{},async()=>{const r=jr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Su(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ku.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Or{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return j(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await ym(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Or;return r&&(j(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(j(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(j(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Or,this.toJSON())}_performRefresh(){return Pt("not implemented")}}/**
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
 */function zt(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _n{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Do(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Au(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Cr(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return fm(this,e)}reload(){return gm(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new _n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Rs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Cr(this,cm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:C,emailVerified:B,isAnonymous:K,providerData:G,stsTokenManager:se}=n;j(C&&se,e,"internal-error");const pe=Or.fromJSON(this.name,se);j(typeof C=="string",e,"internal-error"),zt(f,e.name),zt(d,e.name),j(typeof B=="boolean",e,"internal-error"),j(typeof K=="boolean",e,"internal-error"),zt(p,e.name),zt(w,e.name),zt(O,e.name),zt(T,e.name),zt(I,e.name),zt(y,e.name);const ge=new _n({uid:C,auth:e,email:d,emailVerified:B,displayName:f,isAnonymous:K,photoURL:w,phoneNumber:p,tenantId:O,stsTokenManager:pe,createdAt:I,lastLoginAt:y});return G&&Array.isArray(G)&&(ge.providerData=G.map(xe=>Object.assign({},xe))),T&&(ge._redirectEventId=T),ge}static async _fromIdTokenResponse(e,n,r=!1){const s=new Or;s.updateFromServerResponse(n);const i=new _n({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Rs(i),i}}/**
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
 */class Ru{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ru.type="NONE";const rl=Ru;/**
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
 */function ms(t,e,n){return`firebase:${t}:${e}:${n}`}class jn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ms(this.userKey,s.apiKey,i),this.fullPersistenceKey=ms("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new jn(Nt(rl),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Nt(rl);const o=ms(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const f=_n._fromJSON(e,u);c!==i&&(a=f),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new jn(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new jn(i,e,r))}}/**
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
 */function sl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ou(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Nu(e))return"Blackberry";if(Du(e))return"Webos";if(Fo(e))return"Safari";if((e.includes("chrome/")||Cu(e))&&!e.includes("edge/"))return"Chrome";if(Pu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function xu(t=Ne()){return/firefox\//i.test(t)}function Fo(t=Ne()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cu(t=Ne()){return/crios\//i.test(t)}function Ou(t=Ne()){return/iemobile/i.test(t)}function Pu(t=Ne()){return/android/i.test(t)}function Nu(t=Ne()){return/blackberry/i.test(t)}function Du(t=Ne()){return/webos/i.test(t)}function ti(t=Ne()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function wm(t=Ne()){var e;return ti(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function bm(){return Mp()&&document.documentMode===10}function Mu(t=Ne()){return ti(t)||Pu(t)||Du(t)||Nu(t)||/windows phone/i.test(t)||Ou(t)}function vm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Lu(t,e=[]){let n;switch(t){case"Browser":n=sl(Ne());break;case"Worker":n=`${sl(Ne())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zr}/${r}`}/**
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
 */class Im{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
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
 */class Em{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new il(this),this.idTokenSubscription=new il(this),this.beforeStateQueue=new Im(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Eu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await jn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Rs(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=im()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ue(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Nt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Sn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nt(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await jn.create(this,[Nt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return j(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Lu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function ni(t){return Ue(t)}class il{constructor(e){this.auth=e,this.observer=null,this.addObserver=Vp(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Uo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pt("not implemented")}_getIdTokenResponse(e){return Pt("not implemented")}_linkToIdToken(e,n){return Pt("not implemented")}_getReauthenticationResolver(e){return Pt("not implemented")}}async function km(t,e){return Wr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Tm(t,e){return Kr(t,"POST","/v1/accounts:signInWithPassword",Hr(t,e))}/**
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
 */async function Sm(t,e){return Kr(t,"POST","/v1/accounts:signInWithEmailLink",Hr(t,e))}async function Am(t,e){return Kr(t,"POST","/v1/accounts:signInWithEmailLink",Hr(t,e))}/**
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
 */class Pr extends Uo{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Pr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Pr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Tm(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Sm(e,{email:this._email,oobCode:this._password});default:ut(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return km(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Am(e,{idToken:n,email:this._email,oobCode:this._password});default:ut(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function zn(t,e){return Kr(t,"POST","/v1/accounts:signInWithIdp",Hr(t,e))}/**
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
 */const Rm="http://localhost";class bn extends Uo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new bn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ut("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Do(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new bn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zn(e,n)}buildRequest(){const e={requestUri:Rm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=jr(n)}return e}}/**
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
 */function xm(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Cm(t){const e=cr(ur(t)).link,n=e?cr(ur(e)).deep_link_id:null,r=cr(ur(t)).deep_link_id;return(r?cr(ur(r)).link:null)||r||n||e||t}class Bo{constructor(e){var n,r,s,i,o,a;const l=cr(ur(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,f=xm((s=l.mode)!==null&&s!==void 0?s:null);j(c&&u&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Cm(e);try{return new Bo(n)}catch{return null}}}/**
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
 */class tr{constructor(){this.providerId=tr.PROVIDER_ID}static credential(e,n){return Pr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Bo.parseLink(n);return j(r,"argument-error"),Pr._fromEmailAndCode(e,r.code,r.tenantId)}}tr.PROVIDER_ID="password";tr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";tr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class $u{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Gr extends $u{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Gt extends Gr{constructor(){super("facebook.com")}static credential(e){return bn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gt.credential(e.oauthAccessToken)}catch{return null}}}Gt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gt.PROVIDER_ID="facebook.com";/**
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
 */class Yt extends Gr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return bn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yt.credential(n,r)}catch{return null}}}Yt.GOOGLE_SIGN_IN_METHOD="google.com";Yt.PROVIDER_ID="google.com";/**
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
 */class Jt extends Gr{constructor(){super("github.com")}static credential(e){return bn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jt.credential(e.oauthAccessToken)}catch{return null}}}Jt.GITHUB_SIGN_IN_METHOD="github.com";Jt.PROVIDER_ID="github.com";/**
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
 */class Qt extends Gr{constructor(){super("twitter.com")}static credential(e,n){return bn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Qt.credential(n,r)}catch{return null}}}Qt.TWITTER_SIGN_IN_METHOD="twitter.com";Qt.PROVIDER_ID="twitter.com";/**
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
 */async function Om(t,e){return Kr(t,"POST","/v1/accounts:signUp",Hr(t,e))}/**
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
 */class vn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await _n._fromIdTokenResponse(e,r,s),o=ol(r);return new vn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ol(r);return new vn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ol(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class xs extends ht{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,xs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new xs(e,n,r,s)}}function Fu(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?xs._fromErrorAndOperation(t,i,e,r):i})}async function Pm(t,e,n=!1){const r=await Cr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vn._forOperation(t,"link",r)}/**
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
 */async function Nm(t,e,n=!1){var r;const{auth:s}=t,i="reauthenticate";try{const o=await Cr(t,Fu(s,i,e,t),n);j(o.idToken,s,"internal-error");const a=$o(o.idToken);j(a,s,"internal-error");const{sub:l}=a;return j(t.uid===l,s,"user-mismatch"),vn._forOperation(t,i,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&ut(s,"user-mismatch"),o}}/**
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
 */async function Uu(t,e,n=!1){const r="signIn",s=await Fu(t,r,e),i=await vn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Dm(t,e){return Uu(ni(t),e)}async function W0(t,e,n){const r=ni(t),s=await Om(r,{returnSecureToken:!0,email:e,password:n}),i=await vn._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function K0(t,e,n){return Dm(Ue(t),tr.credential(e,n))}function Mm(t,e,n,r){return Ue(t).onAuthStateChanged(e,n,r)}const Cs="__sak";/**
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
 */class Bu{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Cs,"1"),this.storage.removeItem(Cs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Lm(){const t=Ne();return Fo(t)||ti(t)}const $m=1e3,Fm=10;class Vu extends Bu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Lm()&&vm(),this.fallbackToPolling=Mu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);bm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Fm):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},$m)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vu.type="LOCAL";const Um=Vu;/**
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
 */class ju extends Bu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ju.type="SESSION";const zu=ju;/**
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
 */function Bm(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ri{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ri(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await Bm(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ri.receivers=[];/**
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
 */function Vo(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Vm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Vo("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const d=f;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function It(){return window}function jm(t){It().location.href=t}/**
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
 */function qu(){return typeof It().WorkerGlobalScope<"u"&&typeof It().importScripts=="function"}async function zm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qm(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Hm(){return qu()?self:null}/**
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
 */const Hu="firebaseLocalStorageDb",Wm=1,Os="firebaseLocalStorage",Wu="fbase_key";class Yr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function si(t,e){return t.transaction([Os],e?"readwrite":"readonly").objectStore(Os)}function Km(){const t=indexedDB.deleteDatabase(Hu);return new Yr(t).toPromise()}function Qi(){const t=indexedDB.open(Hu,Wm);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Os,{keyPath:Wu})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Os)?e(r):(r.close(),await Km(),e(await Qi()))})})}async function al(t,e,n){const r=si(t,!0).put({[Wu]:e,value:n});return new Yr(r).toPromise()}async function Gm(t,e){const n=si(t,!1).get(e),r=await new Yr(n).toPromise();return r===void 0?null:r.value}function ll(t,e){const n=si(t,!0).delete(e);return new Yr(n).toPromise()}const Ym=800,Jm=3;class Ku{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Jm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ri._getInstance(Hm()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await zm(),!this.activeServiceWorker)return;this.sender=new Vm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qi();return await al(e,Cs,"1"),await ll(e,Cs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>al(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Gm(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ll(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=si(s,!1).getAll();return new Yr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ym)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ku.type="LOCAL";const Qm=Ku;/**
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
 */function Zm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Xm(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=vt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Zm().appendChild(r)})}function e_(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new qr(3e4,6e4);/**
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
 */function t_(t,e){return e?Nt(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class jo extends Uo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function n_(t){return Uu(t.auth,new jo(t),t.bypassAuthState)}function r_(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),Nm(n,new jo(t),t.bypassAuthState)}async function s_(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),Pm(n,new jo(t),t.bypassAuthState)}/**
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
 */class Gu{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return n_;case"linkViaPopup":case"linkViaRedirect":return s_;case"reauthViaPopup":case"reauthViaRedirect":return r_;default:ut(this.auth,"internal-error")}}resolve(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const i_=new qr(2e3,1e4);class Ln extends Gu{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ln.currentPopupAction&&Ln.currentPopupAction.cancel(),Ln.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){Ft(this.filter.length===1,"Popup operations only handle one event");const e=Vo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ln.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,i_.get())};e()}}Ln.currentPopupAction=null;/**
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
 */const o_="pendingRedirect",_s=new Map;class a_ extends Gu{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_s.get(this.auth._key());if(!e){try{const r=await l_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_s.set(this.auth._key(),e)}return this.bypassAuthState||_s.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function l_(t,e){const n=f_(e),r=u_(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function c_(t,e){_s.set(t._key(),e)}function u_(t){return Nt(t._redirectPersistence)}function f_(t){return ms(o_,t.config.apiKey,t.name)}async function h_(t,e,n=!1){const r=ni(t),s=t_(r,e),o=await new a_(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const d_=10*60*1e3;class p_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!g_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Yu(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(vt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=d_&&this.cachedEventUids.clear(),this.cachedEventUids.has(cl(e))}saveEventToCache(e){this.cachedEventUids.add(cl(e)),this.lastProcessedEventTime=Date.now()}}function cl(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Yu({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function g_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yu(t);default:return!1}}/**
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
 */async function m_(t,e={}){return Wr(t,"GET","/v1/projects",e)}/**
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
 */const __=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,y_=/^https?/;async function w_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await m_(t);for(const n of e)try{if(b_(n))return}catch{}ut(t,"unauthorized-domain")}function b_(t){const e=Ji(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!y_.test(n))return!1;if(__.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const v_=new qr(3e4,6e4);function ul(){const t=It().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function I_(t){return new Promise((e,n)=>{var r,s,i;function o(){ul(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ul(),n(vt(t,"network-request-failed"))},timeout:v_.get()})}if(!((s=(r=It().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=It().gapi)===null||i===void 0)&&i.load)o();else{const a=e_("iframefcb");return It()[a]=()=>{gapi.load?o():n(vt(t,"network-request-failed"))},Xm(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ys=null,e})}let ys=null;function E_(t){return ys=ys||I_(t),ys}/**
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
 */const k_=new qr(5e3,15e3),T_="__/auth/iframe",S_="emulator/auth/iframe",A_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},R_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function x_(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Lo(e,S_):`https://${t.config.authDomain}/${T_}`,r={apiKey:e.apiKey,appName:t.name,v:zr},s=R_.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${jr(r).slice(1)}`}async function C_(t){const e=await E_(t),n=It().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:x_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:A_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=vt(t,"network-request-failed"),a=It().setTimeout(()=>{i(o)},k_.get());function l(){It().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const O_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},P_=500,N_=600,D_="_blank",M_="http://localhost";class fl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function L_(t,e,n,r=P_,s=N_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},O_),{width:r.toString(),height:s.toString(),top:i,left:o}),c=Ne().toLowerCase();n&&(a=Cu(c)?D_:n),xu(c)&&(e=e||M_,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[p,w])=>`${d}${p}=${w},`,"");if(wm(c)&&a!=="_self")return $_(e||"",a),new fl(null);const f=window.open(e||"",a,u);j(f,t,"popup-blocked");try{f.focus()}catch{}return new fl(f)}function $_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const F_="__/auth/handler",U_="emulator/auth/handler";function hl(t,e,n,r,s,i){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:zr,eventId:s};if(e instanceof $u){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Bp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(i||{}))o[l]=c}if(e instanceof Gr){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${B_(t)}?${jr(a).slice(1)}`}function B_({config:t}){return t.emulator?Lo(t,U_):`https://${t.authDomain}/${F_}`}/**
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
 */const ki="webStorageSupport";class V_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zu,this._completeRedirectFn=h_,this._overrideRedirectResult=c_}async _openPopup(e,n,r,s){var i;Ft((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=hl(e,n,r,Ji(),s);return L_(e,o,Vo())}async _openRedirect(e,n,r,s){return await this._originValidation(e),jm(hl(e,n,r,Ji(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ft(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await C_(e),r=new p_(e);return n.register("authEvent",s=>(j(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ki,{type:ki},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ki];o!==void 0&&n(!!o),ut(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=w_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Mu()||Fo()||ti()}}const j_=V_;var dl="@firebase/auth",pl="0.20.7";/**
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
 */class z_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function q_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function H_(t){Tt(new ct("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,l)=>{j(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),j(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Lu(t)},u=new Em(a,l,c);return nm(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Tt(new ct("auth-internal",e=>{const n=ni(e.getProvider("auth").getImmediate());return(r=>new z_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),et(dl,pl,q_(t)),et(dl,pl,"esm2017")}/**
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
 */function W_(t=No()){const e=An(t,"auth");return e.isInitialized()?e.getImmediate():tm(t,{popupRedirectResolver:j_,persistence:[Qm,Um,zu]})}H_("Browser");/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Mn=typeof window<"u";function K_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ne=Object.assign;function Ti(t,e){const n={};for(const r in e){const s=e[r];n[r]=ft(s)?s.map(t):t(s)}return n}const dr=()=>{},ft=Array.isArray,G_=/\/$/,Y_=t=>t.replace(G_,"");function Si(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=X_(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function J_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function gl(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Q_(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Kn(e.matched[r],n.matched[s])&&Ju(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Kn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ju(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Z_(t[n],e[n]))return!1;return!0}function Z_(t,e){return ft(t)?ml(t,e):ft(e)?ml(e,t):t===e}function ml(t,e){return ft(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function X_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Nr;(function(t){t.pop="pop",t.push="push"})(Nr||(Nr={}));var pr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(pr||(pr={}));function ey(t){if(!t)if(Mn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Y_(t)}const ty=/^[^#]+#/;function ny(t,e){return t.replace(ty,"#")+e}function ry(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ii=()=>({left:window.pageXOffset,top:window.pageYOffset});function sy(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=ry(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function _l(t,e){return(history.state?history.state.position-e:-1)+t}const Zi=new Map;function iy(t,e){Zi.set(t,e)}function oy(t){const e=Zi.get(t);return Zi.delete(t),e}let ay=()=>location.protocol+"//"+location.host;function Qu(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),gl(l,"")}return gl(n,t)+r+s}function ly(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const p=Qu(t,location),w=n.value,O=e.value;let T=0;if(d){if(n.value=p,e.value=d,o&&o===w){o=null;return}T=O?d.position-O.position:0}else r(p);s.forEach(I=>{I(n.value,w,{delta:T,type:Nr.pop,direction:T?T>0?pr.forward:pr.back:pr.unknown})})};function l(){o=n.value}function c(d){s.push(d);const p=()=>{const w=s.indexOf(d);w>-1&&s.splice(w,1)};return i.push(p),p}function u(){const{history:d}=window;!d.state||d.replaceState(ne({},d.state,{scroll:ii()}),"")}function f(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function yl(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ii():null}}function cy(t){const{history:e,location:n}=window,r={value:Qu(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:ay()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(l,c){const u=ne({},e.state,yl(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=ne({},s.value,e.state,{forward:l,scroll:ii()});i(u.current,u,!0);const f=ne({},yl(r.value,l,null),{position:u.position+1},c);i(l,f,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function uy(t){t=ey(t);const e=cy(t),n=ly(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ne({location:"",base:t,go:r,createHref:ny.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function fy(t){return typeof t=="string"||t&&typeof t=="object"}function Zu(t){return typeof t=="string"||typeof t=="symbol"}const qt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Xu=Symbol("");var wl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(wl||(wl={}));function Gn(t,e){return ne(new Error,{type:t,[Xu]:!0},e)}function Ct(t,e){return t instanceof Error&&Xu in t&&(e==null||!!(t.type&e))}const bl="[^/]+?",hy={sensitive:!1,strict:!1,start:!0,end:!0},dy=/[.+*?^${}()[\]/\\]/g;function py(t,e){const n=ne({},hy,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const d=c[f];let p=40+(n.sensitive?.25:0);if(d.type===0)f||(s+="/"),s+=d.value.replace(dy,"\\$&"),p+=40;else if(d.type===1){const{value:w,repeatable:O,optional:T,regexp:I}=d;i.push({name:w,repeatable:O,optional:T});const y=I||bl;if(y!==bl){p+=10;try{new RegExp(`(${y})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${w}" (${y}): `+B.message)}}let C=O?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;f||(C=T&&c.length<2?`(?:/${C})`:"/"+C),T&&(C+="?"),s+=C,p+=20,T&&(p+=-8),O&&(p+=-20),y===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",w=i[d-1];f[w.name]=p&&w.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:w,repeatable:O,optional:T}=p,I=w in c?c[w]:"";if(ft(I)&&!O)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const y=ft(I)?I.join("/"):I;if(!y)if(T)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${w}"`);u+=y}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function gy(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function my(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=gy(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(vl(r))return 1;if(vl(s))return-1}return s.length-r.length}function vl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const _y={type:0,value:""},yy=/[a-zA-Z0-9_]/;function wy(t){if(!t)return[[]];if(t==="/")return[[_y]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function f(){!c||(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:yy.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}function by(t,e,n){const r=py(wy(t.path),n),s=ne(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function vy(t,e){const n=[],r=new Map;e=kl({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,f,d){const p=!d,w=Iy(u);w.aliasOf=d&&d.record;const O=kl(e,u),T=[w];if("alias"in u){const C=typeof u.alias=="string"?[u.alias]:u.alias;for(const B of C)T.push(ne({},w,{components:d?d.record.components:w.components,path:B,aliasOf:d?d.record:w}))}let I,y;for(const C of T){const{path:B}=C;if(f&&B[0]!=="/"){const K=f.record.path,G=K[K.length-1]==="/"?"":"/";C.path=f.record.path+(B&&G+B)}if(I=by(C,f,O),d?d.alias.push(I):(y=y||I,y!==I&&y.alias.push(I),p&&u.name&&!El(I)&&o(u.name)),w.children){const K=w.children;for(let G=0;G<K.length;G++)i(K[G],I,d&&d.children[G])}d=d||I,l(I)}return y?()=>{o(y)}:dr}function o(u){if(Zu(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let f=0;for(;f<n.length&&my(u,n[f])>=0&&(u.record.path!==n[f].record.path||!ef(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!El(u)&&r.set(u.record.name,u)}function c(u,f){let d,p={},w,O;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw Gn(1,{location:u});O=d.record.name,p=ne(Il(f.params,d.keys.filter(y=>!y.optional).map(y=>y.name)),u.params&&Il(u.params,d.keys.map(y=>y.name))),w=d.stringify(p)}else if("path"in u)w=u.path,d=n.find(y=>y.re.test(w)),d&&(p=d.parse(w),O=d.record.name);else{if(d=f.name?r.get(f.name):n.find(y=>y.re.test(f.path)),!d)throw Gn(1,{location:u,currentLocation:f});O=d.record.name,p=ne({},f.params,u.params),w=d.stringify(p)}const T=[];let I=d;for(;I;)T.unshift(I.record),I=I.parent;return{name:O,path:w,params:p,matched:T,meta:ky(T)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Il(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Iy(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Ey(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Ey(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function El(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ky(t){return t.reduce((e,n)=>ne(e,n.meta),{})}function kl(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ef(t,e){return e.children.some(n=>n===t||ef(t,n))}const tf=/#/g,Ty=/&/g,Sy=/\//g,Ay=/=/g,Ry=/\?/g,nf=/\+/g,xy=/%5B/g,Cy=/%5D/g,rf=/%5E/g,Oy=/%60/g,sf=/%7B/g,Py=/%7C/g,of=/%7D/g,Ny=/%20/g;function zo(t){return encodeURI(""+t).replace(Py,"|").replace(xy,"[").replace(Cy,"]")}function Dy(t){return zo(t).replace(sf,"{").replace(of,"}").replace(rf,"^")}function Xi(t){return zo(t).replace(nf,"%2B").replace(Ny,"+").replace(tf,"%23").replace(Ty,"%26").replace(Oy,"`").replace(sf,"{").replace(of,"}").replace(rf,"^")}function My(t){return Xi(t).replace(Ay,"%3D")}function Ly(t){return zo(t).replace(tf,"%23").replace(Ry,"%3F")}function $y(t){return t==null?"":Ly(t).replace(Sy,"%2F")}function Ps(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Fy(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(nf," "),o=i.indexOf("="),a=Ps(o<0?i:i.slice(0,o)),l=o<0?null:Ps(i.slice(o+1));if(a in e){let c=e[a];ft(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Tl(t){let e="";for(let n in t){const r=t[n];if(n=My(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(ft(r)?r.map(i=>i&&Xi(i)):[r&&Xi(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Uy(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=ft(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const By=Symbol(""),Sl=Symbol(""),oi=Symbol(""),af=Symbol(""),eo=Symbol("");function or(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Wt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(Gn(4,{from:n,to:e})):f instanceof Error?a(f):fy(f)?a(Gn(2,{from:e,to:f})):(i&&r.enterCallbacks[s]===i&&typeof f=="function"&&i.push(f),o())},c=t.call(r&&r.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function Ai(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Vy(a)){const c=(a.__vccOpts||a)[e];c&&s.push(Wt(c,n,r,i,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=K_(c)?c.default:c;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Wt(d,n,r,i,o)()}))}}return s}function Vy(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Al(t){const e=Dt(oi),n=Dt(af),r=Qe(()=>e.resolve(mn(t.to))),s=Qe(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(Kn.bind(null,u));if(d>-1)return d;const p=Rl(l[c-2]);return c>1&&Rl(u)===p&&f[f.length-1].path!==p?f.findIndex(Kn.bind(null,l[c-2])):d}),i=Qe(()=>s.value>-1&&Hy(n.params,r.value.params)),o=Qe(()=>s.value>-1&&s.value===n.matched.length-1&&Ju(n.params,r.value.params));function a(l={}){return qy(l)?e[mn(t.replace)?"replace":"push"](mn(t.to)).catch(dr):Promise.resolve()}return{route:r,href:Qe(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const jy=qc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Al,setup(t,{slots:e}){const n=Br(Al(t)),{options:r}=Dt(oi),s=Qe(()=>({[xl(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[xl(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:lu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),zy=jy;function qy(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Hy(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!ft(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Rl(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const xl=(t,e,n)=>t!=null?t:e!=null?e:n,Wy=qc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Dt(eo),s=Qe(()=>t.route||r.value),i=Dt(Sl,0),o=Qe(()=>{let c=mn(i);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Qe(()=>s.value.matched[o.value]);us(Sl,Qe(()=>o.value+1)),us(By,a),us(eo,s);const l=Er();return fs(()=>[l.value,a.value,t.name],([c,u,f],[d,p,w])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Kn(u,p)||!d)&&(u.enterCallbacks[f]||[]).forEach(O=>O(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return Cl(n.default,{Component:d,route:c});const p=f.props[u],w=p?p===!0?c.params:typeof p=="function"?p(c):p:null,T=lu(d,ne({},w,e,{onVnodeUnmounted:I=>{I.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Cl(n.default,{Component:T,route:c})||T}}});function Cl(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ky=Wy;function Gy(t){const e=vy(t.routes,t),n=t.parseQuery||Fy,r=t.stringifyQuery||Tl,s=t.history,i=or(),o=or(),a=or(),l=Hh(qt);let c=qt;Mn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ti.bind(null,_=>""+_),f=Ti.bind(null,$y),d=Ti.bind(null,Ps);function p(_,D){let R,M;return Zu(_)?(R=e.getRecordMatcher(_),M=D):M=_,e.addRoute(M,R)}function w(_){const D=e.getRecordMatcher(_);D&&e.removeRoute(D)}function O(){return e.getRoutes().map(_=>_.record)}function T(_){return!!e.getRecordMatcher(_)}function I(_,D){if(D=ne({},D||l.value),typeof _=="string"){const Y=Si(n,_,D.path),h=e.resolve({path:Y.path},D),g=s.createHref(Y.fullPath);return ne(Y,h,{params:d(h.params),hash:Ps(Y.hash),redirectedFrom:void 0,href:g})}let R;if("path"in _)R=ne({},_,{path:Si(n,_.path,D.path).path});else{const Y=ne({},_.params);for(const h in Y)Y[h]==null&&delete Y[h];R=ne({},_,{params:f(_.params)}),D.params=f(D.params)}const M=e.resolve(R,D),te=_.hash||"";M.params=u(d(M.params));const fe=J_(r,ne({},_,{hash:Dy(te),path:M.path})),J=s.createHref(fe);return ne({fullPath:fe,hash:te,query:r===Tl?Uy(_.query):_.query||{}},M,{redirectedFrom:void 0,href:J})}function y(_){return typeof _=="string"?Si(n,_,l.value.path):ne({},_)}function C(_,D){if(c!==_)return Gn(8,{from:D,to:_})}function B(_){return se(_)}function K(_){return B(ne(y(_),{replace:!0}))}function G(_){const D=_.matched[_.matched.length-1];if(D&&D.redirect){const{redirect:R}=D;let M=typeof R=="function"?R(_):R;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=y(M):{path:M},M.params={}),ne({query:_.query,hash:_.hash,params:"path"in M?{}:_.params},M)}}function se(_,D){const R=c=I(_),M=l.value,te=_.state,fe=_.force,J=_.replace===!0,Y=G(R);if(Y)return se(ne(y(Y),{state:typeof Y=="object"?ne({},te,Y.state):te,force:fe,replace:J}),D||R);const h=R;h.redirectedFrom=D;let g;return!fe&&Q_(r,M,R)&&(g=Gn(16,{to:h,from:M}),Cn(M,M,!0,!1)),(g?Promise.resolve(g):ge(h,M)).catch(m=>Ct(m)?Ct(m,2)?m:Be(m):ue(m,h,M)).then(m=>{if(m){if(Ct(m,2))return se(ne({replace:J},y(m.to),{state:typeof m.to=="object"?ne({},te,m.to.state):te,force:fe}),D||h)}else m=Ie(h,M,!0,J,te);return xe(h,M,m),m})}function pe(_,D){const R=C(_,D);return R?Promise.reject(R):Promise.resolve()}function ge(_,D){let R;const[M,te,fe]=Yy(_,D);R=Ai(M.reverse(),"beforeRouteLeave",_,D);for(const Y of M)Y.leaveGuards.forEach(h=>{R.push(Wt(h,_,D))});const J=pe.bind(null,_,D);return R.push(J),Pn(R).then(()=>{R=[];for(const Y of i.list())R.push(Wt(Y,_,D));return R.push(J),Pn(R)}).then(()=>{R=Ai(te,"beforeRouteUpdate",_,D);for(const Y of te)Y.updateGuards.forEach(h=>{R.push(Wt(h,_,D))});return R.push(J),Pn(R)}).then(()=>{R=[];for(const Y of _.matched)if(Y.beforeEnter&&!D.matched.includes(Y))if(ft(Y.beforeEnter))for(const h of Y.beforeEnter)R.push(Wt(h,_,D));else R.push(Wt(Y.beforeEnter,_,D));return R.push(J),Pn(R)}).then(()=>(_.matched.forEach(Y=>Y.enterCallbacks={}),R=Ai(fe,"beforeRouteEnter",_,D),R.push(J),Pn(R))).then(()=>{R=[];for(const Y of o.list())R.push(Wt(Y,_,D));return R.push(J),Pn(R)}).catch(Y=>Ct(Y,8)?Y:Promise.reject(Y))}function xe(_,D,R){for(const M of a.list())M(_,D,R)}function Ie(_,D,R,M,te){const fe=C(_,D);if(fe)return fe;const J=D===qt,Y=Mn?history.state:{};R&&(M||J?s.replace(_.fullPath,ne({scroll:J&&Y&&Y.scroll},te)):s.push(_.fullPath,te)),l.value=_,Cn(_,D,R,J),Be()}let Le;function Rt(){Le||(Le=s.listen((_,D,R)=>{if(!sr.listening)return;const M=I(_),te=G(M);if(te){se(ne(te,{replace:!0}),M).catch(dr);return}c=M;const fe=l.value;Mn&&iy(_l(fe.fullPath,R.delta),ii()),ge(M,fe).catch(J=>Ct(J,12)?J:Ct(J,2)?(se(J.to,M).then(Y=>{Ct(Y,20)&&!R.delta&&R.type===Nr.pop&&s.go(-1,!1)}).catch(dr),Promise.reject()):(R.delta&&s.go(-R.delta,!1),ue(J,M,fe))).then(J=>{J=J||Ie(M,fe,!1),J&&(R.delta&&!Ct(J,8)?s.go(-R.delta,!1):R.type===Nr.pop&&Ct(J,20)&&s.go(-1,!1)),xe(M,fe,J)}).catch(dr)}))}let pt=or(),xn=or(),ye;function ue(_,D,R){Be(_);const M=xn.list();return M.length?M.forEach(te=>te(_,D,R)):console.error(_),Promise.reject(_)}function ie(){return ye&&l.value!==qt?Promise.resolve():new Promise((_,D)=>{pt.add([_,D])})}function Be(_){return ye||(ye=!_,Rt(),pt.list().forEach(([D,R])=>_?R(_):D()),pt.reset()),_}function Cn(_,D,R,M){const{scrollBehavior:te}=t;if(!Mn||!te)return Promise.resolve();const fe=!R&&oy(_l(_.fullPath,0))||(M||!R)&&history.state&&history.state.scroll||null;return Mc().then(()=>te(_,D,fe)).then(J=>J&&sy(J)).catch(J=>ue(J,_,D))}const xt=_=>s.go(_);let gt;const Ke=new Set,sr={currentRoute:l,listening:!0,addRoute:p,removeRoute:w,hasRoute:T,getRoutes:O,resolve:I,options:t,push:B,replace:K,go:xt,back:()=>xt(-1),forward:()=>xt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:xn.add,isReady:ie,install(_){const D=this;_.component("RouterLink",zy),_.component("RouterView",Ky),_.config.globalProperties.$router=D,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>mn(l)}),Mn&&!gt&&l.value===qt&&(gt=!0,B(s.location).catch(te=>{}));const R={};for(const te in qt)R[te]=Qe(()=>l.value[te]);_.provide(oi,D),_.provide(af,Br(R)),_.provide(eo,l);const M=_.unmount;Ke.add(_),_.unmount=function(){Ke.delete(_),Ke.size<1&&(c=qt,Le&&Le(),Le=null,l.value=qt,gt=!1,ye=!1),M()}}};return sr}function Pn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Yy(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>Kn(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Kn(c,l))||s.push(l))}return[n,r,s]}function Jy(){return Dt(oi)}const ai=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Qy=t=>(ko("data-v-d0397800"),t=t(),To(),t),Zy={class:"header"},Xy=St("Blasted Book Blog"),ew=St("Home"),tw=St("About"),nw=St("Create"),rw=St("Create Account"),sw=St("Login"),iw={class:"footer"},ow=St("Home"),aw=St("About"),lw=Qy(()=>ve("span",null,"Copyright \xA9 2022 Blasted Book Blog",-1)),cw={__name:"App",setup(t){const e=Er(!1),n=Jy(),r=W_();Mm(r,i=>{i?e.value=!0:e.value=!1});function s(){r.signOut(),n.push("/")}return(i,o)=>{const a=$i("RouterLink"),l=$i("RouterView");return Ce(),Zt(Je,null,[ve("header",Zy,[ve("div",null,[me(a,{to:"/",class:"header-title"},{default:Ge(()=>[Xy]),_:1})]),ve("nav",null,[me(a,{to:"/"},{default:Ge(()=>[ew]),_:1}),me(a,{to:"/about"},{default:Ge(()=>[tw]),_:1}),e.value?(Ce(),dn(a,{key:0,to:"/create"},{default:Ge(()=>[nw]),_:1})):rs("",!0),e.value?rs("",!0):(Ce(),dn(a,{key:1,to:"/register"},{default:Ge(()=>[rw]),_:1})),e.value?rs("",!0):(Ce(),dn(a,{key:2,to:"/login"},{default:Ge(()=>[sw]),_:1})),e.value?(Ce(),Zt("a",{key:3,href:"#",onClick:s},"Logout")):rs("",!0)])]),(Ce(),dn(Vc,null,{default:Ge(()=>[me(l)]),_:1})),ve("footer",iw,[ve("nav",null,[me(a,{to:"/"},{default:Ge(()=>[ow]),_:1}),me(a,{to:"/about"},{default:Ge(()=>[aw]),_:1})]),lw])],64)}}},uw=ai(cw,[["__scopeId","data-v-d0397800"]]),fw="modulepreload",hw=function(t){return"/"+t},Ol={},ar=function(e,n,r){return!n||n.length===0?e():Promise.all(n.map(s=>{if(s=hw(s),s in Ol)return;Ol[s]=!0;const i=s.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":fw,i||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),i)return new Promise((l,c)=>{a.addEventListener("load",l),a.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};function lf(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let nr=lf();function dw(t){nr=t}const pw=/[&<>"']/,gw=/[&<>"']/g,mw=/[<>"']|&(?!#?\w+;)/,_w=/[<>"']|&(?!#?\w+;)/g,yw={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Pl=t=>yw[t];function Ee(t,e){if(e){if(pw.test(t))return t.replace(gw,Pl)}else if(mw.test(t))return t.replace(_w,Pl);return t}const ww=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function cf(t){return t.replace(ww,(e,n)=>(n=n.toLowerCase(),n==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):""))}const bw=/(^|[^\[])\^/g;function ce(t,e){t=typeof t=="string"?t:t.source,e=e||"";const n={replace:(r,s)=>(s=s.source||s,s=s.replace(bw,"$1"),t=t.replace(r,s),n),getRegex:()=>new RegExp(t,e)};return n}const vw=/[^\w:]/g,Iw=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Nl(t,e,n){if(t){let r;try{r=decodeURIComponent(cf(n)).replace(vw,"").toLowerCase()}catch{return null}if(r.indexOf("javascript:")===0||r.indexOf("vbscript:")===0||r.indexOf("data:")===0)return null}e&&!Iw.test(n)&&(n=Sw(e,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n}const is={},Ew=/^[^:]+:\/*[^/]*$/,kw=/^([^:]+:)[\s\S]*$/,Tw=/^([^:]+:\/*[^/]*)[\s\S]*$/;function Sw(t,e){is[" "+t]||(Ew.test(t)?is[" "+t]=t+"/":is[" "+t]=ws(t,"/",!0)),t=is[" "+t];const n=t.indexOf(":")===-1;return e.substring(0,2)==="//"?n?e:t.replace(kw,"$1")+e:e.charAt(0)==="/"?n?e:t.replace(Tw,"$1")+e:t+e}const Ns={exec:function(){}};function dt(t){let e=1,n,r;for(;e<arguments.length;e++){n=arguments[e];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}function Dl(t,e){const n=t.replace(/\|/g,(i,o,a)=>{let l=!1,c=o;for(;--c>=0&&a[c]==="\\";)l=!l;return l?"|":" |"}),r=n.split(/ \|/);let s=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;s<r.length;s++)r[s]=r[s].trim().replace(/\\\|/g,"|");return r}function ws(t,e,n){const r=t.length;if(r===0)return"";let s=0;for(;s<r;){const i=t.charAt(r-s-1);if(i===e&&!n)s++;else if(i!==e&&n)s++;else break}return t.slice(0,r-s)}function Aw(t,e){if(t.indexOf(e[1])===-1)return-1;const n=t.length;let r=0,s=0;for(;s<n;s++)if(t[s]==="\\")s++;else if(t[s]===e[0])r++;else if(t[s]===e[1]&&(r--,r<0))return s;return-1}function uf(t){t&&t.sanitize&&!t.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function Ml(t,e){if(e<1)return"";let n="";for(;e>1;)e&1&&(n+=t),e>>=1,t+=t;return n+t}function Ll(t,e,n,r){const s=e.href,i=e.title?Ee(e.title):null,o=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){r.state.inLink=!0;const a={type:"link",raw:n,href:s,title:i,text:o,tokens:r.inlineTokens(o)};return r.state.inLink=!1,a}return{type:"image",raw:n,href:s,title:i,text:Ee(o)}}function Rw(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const r=n[1];return e.split(`
`).map(s=>{const i=s.match(/^\s+/);if(i===null)return s;const[o]=i;return o.length>=r.length?s.slice(r.length):s}).join(`
`)}class qo{constructor(e){this.options=e||nr}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const r=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:ws(r,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const r=n[0],s=Rw(r,n[3]||"");return{type:"code",raw:r,lang:n[2]?n[2].trim():n[2],text:s}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let r=n[2].trim();if(/#$/.test(r)){const s=ws(r,"#");(this.options.pedantic||!s||/ $/.test(s))&&(r=s.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:n[0]}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){const r=n[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:n[0],tokens:this.lexer.blockTokens(r,[]),text:r}}}list(e){let n=this.rules.block.list.exec(e);if(n){let r,s,i,o,a,l,c,u,f,d,p,w,O=n[1].trim();const T=O.length>1,I={type:"list",raw:"",ordered:T,start:T?+O.slice(0,-1):"",loose:!1,items:[]};O=T?`\\d{1,9}\\${O.slice(-1)}`:`\\${O}`,this.options.pedantic&&(O=T?O:"[*+-]");const y=new RegExp(`^( {0,3}${O})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(w=!1,!(!(n=y.exec(e))||this.rules.block.hr.test(e)));){if(r=n[0],e=e.substring(r.length),u=n[2].split(`
`,1)[0],f=e.split(`
`,1)[0],this.options.pedantic?(o=2,p=u.trimLeft()):(o=n[2].search(/[^ ]/),o=o>4?1:o,p=u.slice(o),o+=n[1].length),l=!1,!u&&/^ *$/.test(f)&&(r+=f+`
`,e=e.substring(f.length+1),w=!0),!w){const B=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`),K=new RegExp(`^ {0,${Math.min(3,o-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),G=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:\`\`\`|~~~)`),se=new RegExp(`^ {0,${Math.min(3,o-1)}}#`);for(;e&&(d=e.split(`
`,1)[0],u=d,this.options.pedantic&&(u=u.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(G.test(u)||se.test(u)||B.test(u)||K.test(e)));){if(u.search(/[^ ]/)>=o||!u.trim())p+=`
`+u.slice(o);else if(!l)p+=`
`+u;else break;!l&&!u.trim()&&(l=!0),r+=d+`
`,e=e.substring(d.length+1)}}I.loose||(c?I.loose=!0:/\n *\n *$/.test(r)&&(c=!0)),this.options.gfm&&(s=/^\[[ xX]\] /.exec(p),s&&(i=s[0]!=="[ ] ",p=p.replace(/^\[[ xX]\] +/,""))),I.items.push({type:"list_item",raw:r,task:!!s,checked:i,loose:!1,text:p}),I.raw+=r}I.items[I.items.length-1].raw=r.trimRight(),I.items[I.items.length-1].text=p.trimRight(),I.raw=I.raw.trimRight();const C=I.items.length;for(a=0;a<C;a++){this.lexer.state.top=!1,I.items[a].tokens=this.lexer.blockTokens(I.items[a].text,[]);const B=I.items[a].tokens.filter(G=>G.type==="space"),K=B.every(G=>{const se=G.raw.split("");let pe=0;for(const ge of se)if(ge===`
`&&(pe+=1),pe>1)return!0;return!1});!I.loose&&B.length&&K&&(I.loose=!0,I.items[a].loose=!0)}return I}}html(e){const n=this.rules.block.html.exec(e);if(n){const r={type:"html",raw:n[0],pre:!this.options.sanitizer&&(n[1]==="pre"||n[1]==="script"||n[1]==="style"),text:n[0]};if(this.options.sanitize){const s=this.options.sanitizer?this.options.sanitizer(n[0]):Ee(n[0]);r.type="paragraph",r.text=s,r.tokens=this.lexer.inline(s)}return r}}def(e){const n=this.rules.block.def.exec(e);if(n){n[3]&&(n[3]=n[3].substring(1,n[3].length-1));const r=n[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:r,raw:n[0],href:n[2],title:n[3]}}}table(e){const n=this.rules.block.table.exec(e);if(n){const r={type:"table",header:Dl(n[1]).map(s=>({text:s})),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(r.header.length===r.align.length){r.raw=n[0];let s=r.align.length,i,o,a,l;for(i=0;i<s;i++)/^ *-+: *$/.test(r.align[i])?r.align[i]="right":/^ *:-+: *$/.test(r.align[i])?r.align[i]="center":/^ *:-+ *$/.test(r.align[i])?r.align[i]="left":r.align[i]=null;for(s=r.rows.length,i=0;i<s;i++)r.rows[i]=Dl(r.rows[i],r.header.length).map(c=>({text:c}));for(s=r.header.length,o=0;o<s;o++)r.header[o].tokens=this.lexer.inline(r.header[o].text);for(s=r.rows.length,o=0;o<s;o++)for(l=r.rows[o],a=0;a<l.length;a++)l[a].tokens=this.lexer.inline(l[a].text);return r}}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:Ee(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):Ee(n[0]):n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const r=n[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const o=ws(r.slice(0,-1),"\\");if((r.length-o.length)%2===0)return}else{const o=Aw(n[2],"()");if(o>-1){const l=(n[0].indexOf("!")===0?5:4)+n[1].length+o;n[2]=n[2].substring(0,o),n[0]=n[0].substring(0,l).trim(),n[3]=""}}let s=n[2],i="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);o&&(s=o[1],i=o[3])}else i=n[3]?n[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(this.options.pedantic&&!/>$/.test(r)?s=s.slice(1):s=s.slice(1,-1)),Ll(n,{href:s&&s.replace(this.rules.inline._escapes,"$1"),title:i&&i.replace(this.rules.inline._escapes,"$1")},n[0],this.lexer)}}reflink(e,n){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){let s=(r[2]||r[1]).replace(/\s+/g," ");if(s=n[s.toLowerCase()],!s||!s.href){const i=r[0].charAt(0);return{type:"text",raw:i,text:i}}return Ll(r,s,r[0],this.lexer)}}emStrong(e,n,r=""){let s=this.rules.inline.emStrong.lDelim.exec(e);if(!s||s[3]&&r.match(/[\p{L}\p{N}]/u))return;const i=s[1]||s[2]||"";if(!i||i&&(r===""||this.rules.inline.punctuation.exec(r))){const o=s[0].length-1;let a,l,c=o,u=0;const f=s[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(f.lastIndex=0,n=n.slice(-1*e.length+o);(s=f.exec(n))!=null;){if(a=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!a)continue;if(l=a.length,s[3]||s[4]){c+=l;continue}else if((s[5]||s[6])&&o%3&&!((o+l)%3)){u+=l;continue}if(c-=l,c>0)continue;if(l=Math.min(l,l+c+u),Math.min(o,l)%2){const p=e.slice(1,o+s.index+l);return{type:"em",raw:e.slice(0,o+s.index+l+1),text:p,tokens:this.lexer.inlineTokens(p)}}const d=e.slice(2,o+s.index+l-1);return{type:"strong",raw:e.slice(0,o+s.index+l+1),text:d,tokens:this.lexer.inlineTokens(d)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let r=n[2].replace(/\n/g," ");const s=/[^ ]/.test(r),i=/^ /.test(r)&&/ $/.test(r);return s&&i&&(r=r.substring(1,r.length-1)),r=Ee(r,!0),{type:"codespan",raw:n[0],text:r}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e,n){const r=this.rules.inline.autolink.exec(e);if(r){let s,i;return r[2]==="@"?(s=Ee(this.options.mangle?n(r[1]):r[1]),i="mailto:"+s):(s=Ee(r[1]),i=s),{type:"link",raw:r[0],text:s,href:i,tokens:[{type:"text",raw:s,text:s}]}}}url(e,n){let r;if(r=this.rules.inline.url.exec(e)){let s,i;if(r[2]==="@")s=Ee(this.options.mangle?n(r[0]):r[0]),i="mailto:"+s;else{let o;do o=r[0],r[0]=this.rules.inline._backpedal.exec(r[0])[0];while(o!==r[0]);s=Ee(r[0]),r[1]==="www."?i="http://"+s:i=s}return{type:"link",raw:r[0],text:s,href:i,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e,n){const r=this.rules.inline.text.exec(e);if(r){let s;return this.lexer.state.inRawBlock?s=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):Ee(r[0]):r[0]:s=Ee(this.options.smartypants?n(r[0]):r[0]),{type:"text",raw:r[0],text:s}}}}const F={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Ns,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};F._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;F._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;F.def=ce(F.def).replace("label",F._label).replace("title",F._title).getRegex();F.bullet=/(?:[*+-]|\d{1,9}[.)])/;F.listItemStart=ce(/^( *)(bull) */).replace("bull",F.bullet).getRegex();F.list=ce(F.list).replace(/bull/g,F.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+F.def.source+")").getRegex();F._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";F._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;F.html=ce(F.html,"i").replace("comment",F._comment).replace("tag",F._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();F.paragraph=ce(F._paragraph).replace("hr",F.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",F._tag).getRegex();F.blockquote=ce(F.blockquote).replace("paragraph",F.paragraph).getRegex();F.normal=dt({},F);F.gfm=dt({},F.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});F.gfm.table=ce(F.gfm.table).replace("hr",F.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",F._tag).getRegex();F.gfm.paragraph=ce(F._paragraph).replace("hr",F.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",F.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",F._tag).getRegex();F.pedantic=dt({},F.normal,{html:ce(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",F._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ns,paragraph:ce(F.normal._paragraph).replace("hr",F.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",F.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const P={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Ns,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Ns,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};P._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";P.punctuation=ce(P.punctuation).replace(/punctuation/g,P._punctuation).getRegex();P.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;P.escapedEmSt=/\\\*|\\_/g;P._comment=ce(F._comment).replace("(?:-->|$)","-->").getRegex();P.emStrong.lDelim=ce(P.emStrong.lDelim).replace(/punct/g,P._punctuation).getRegex();P.emStrong.rDelimAst=ce(P.emStrong.rDelimAst,"g").replace(/punct/g,P._punctuation).getRegex();P.emStrong.rDelimUnd=ce(P.emStrong.rDelimUnd,"g").replace(/punct/g,P._punctuation).getRegex();P._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;P._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;P._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;P.autolink=ce(P.autolink).replace("scheme",P._scheme).replace("email",P._email).getRegex();P._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;P.tag=ce(P.tag).replace("comment",P._comment).replace("attribute",P._attribute).getRegex();P._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;P._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;P._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;P.link=ce(P.link).replace("label",P._label).replace("href",P._href).replace("title",P._title).getRegex();P.reflink=ce(P.reflink).replace("label",P._label).replace("ref",F._label).getRegex();P.nolink=ce(P.nolink).replace("ref",F._label).getRegex();P.reflinkSearch=ce(P.reflinkSearch,"g").replace("reflink",P.reflink).replace("nolink",P.nolink).getRegex();P.normal=dt({},P);P.pedantic=dt({},P.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:ce(/^!?\[(label)\]\((.*?)\)/).replace("label",P._label).getRegex(),reflink:ce(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",P._label).getRegex()});P.gfm=dt({},P.normal,{escape:ce(P.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});P.gfm.url=ce(P.gfm.url,"i").replace("email",P.gfm._extended_email).getRegex();P.breaks=dt({},P.gfm,{br:ce(P.br).replace("{2,}","*").getRegex(),text:ce(P.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function xw(t){return t.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function $l(t){let e="",n,r;const s=t.length;for(n=0;n<s;n++)r=t.charCodeAt(n),Math.random()>.5&&(r="x"+r.toString(16)),e+="&#"+r+";";return e}class Ut{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||nr,this.options.tokenizer=this.options.tokenizer||new qo,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:F.normal,inline:P.normal};this.options.pedantic?(n.block=F.pedantic,n.inline=P.pedantic):this.options.gfm&&(n.block=F.gfm,this.options.breaks?n.inline=P.breaks:n.inline=P.gfm),this.tokenizer.rules=n}static get rules(){return{block:F,inline:P}}static lex(e,n){return new Ut(n).lex(e)}static lexInline(e,n){return new Ut(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let n;for(;n=this.inlineQueue.shift();)this.inlineTokens(n.src,n.tokens);return this.tokens}blockTokens(e,n=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(a,l,c)=>l+"    ".repeat(c.length));let r,s,i,o;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(a=>(r=a.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length),r.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length),s=n[n.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+r.raw,s.text+=`
`+r.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text):n.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length),s=n[n.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+r.raw,s.text+=`
`+r.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),n.push(r);continue}if(i=e,this.options.extensions&&this.options.extensions.startBlock){let a=1/0;const l=e.slice(1);let c;this.options.extensions.startBlock.forEach(function(u){c=u.call({lexer:this},l),typeof c=="number"&&c>=0&&(a=Math.min(a,c))}),a<1/0&&a>=0&&(i=e.substring(0,a+1))}if(this.state.top&&(r=this.tokenizer.paragraph(i))){s=n[n.length-1],o&&s.type==="paragraph"?(s.raw+=`
`+r.raw,s.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):n.push(r),o=i.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length),s=n[n.length-1],s&&s.type==="text"?(s.raw+=`
`+r.raw,s.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):n.push(r);continue}if(e){const a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let r,s,i,o=e,a,l,c;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)u.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,a.index)+"["+Ml("a",a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,a.index)+"["+Ml("a",a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.escapedEmSt.exec(o))!=null;)o=o.slice(0,a.index)+"++"+o.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(l||(c=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(r=u.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),s=n[n.length-1],s&&r.type==="text"&&s.type==="text"?(s.raw+=r.raw,s.text+=r.text):n.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),s=n[n.length-1],s&&r.type==="text"&&s.type==="text"?(s.raw+=r.raw,s.text+=r.text):n.push(r);continue}if(r=this.tokenizer.emStrong(e,o,c)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.autolink(e,$l)){e=e.substring(r.raw.length),n.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e,$l))){e=e.substring(r.raw.length),n.push(r);continue}if(i=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const f=e.slice(1);let d;this.options.extensions.startInline.forEach(function(p){d=p.call({lexer:this},f),typeof d=="number"&&d>=0&&(u=Math.min(u,d))}),u<1/0&&u>=0&&(i=e.substring(0,u+1))}if(r=this.tokenizer.inlineText(i,xw)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(c=r.raw.slice(-1)),l=!0,s=n[n.length-1],s&&s.type==="text"?(s.raw+=r.raw,s.text+=r.text):n.push(r);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return n}}class Ho{constructor(e){this.options=e||nr}code(e,n,r){const s=(n||"").match(/\S*/)[0];if(this.options.highlight){const i=this.options.highlight(e,s);i!=null&&i!==e&&(r=!0,e=i)}return e=e.replace(/\n$/,"")+`
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
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,n,r){if(e=Nl(this.options.sanitize,this.options.baseUrl,e),e===null)return r;let s='<a href="'+Ee(e)+'"';return n&&(s+=' title="'+n+'"'),s+=">"+r+"</a>",s}image(e,n,r){if(e=Nl(this.options.sanitize,this.options.baseUrl,e),e===null)return r;let s=`<img src="${e}" alt="${r}"`;return n&&(s+=` title="${n}"`),s+=this.options.xhtml?"/>":">",s}text(e){return e}}class ff{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,n,r){return""+r}image(e,n,r){return""+r}br(){return""}}class hf{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,n){let r=e,s=0;if(this.seen.hasOwnProperty(r)){s=this.seen[e];do s++,r=e+"-"+s;while(this.seen.hasOwnProperty(r))}return n||(this.seen[e]=s,this.seen[r]=0),r}slug(e,n={}){const r=this.serialize(e);return this.getNextSafeSlug(r,n.dryrun)}}class Et{constructor(e){this.options=e||nr,this.options.renderer=this.options.renderer||new Ho,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new ff,this.slugger=new hf}static parse(e,n){return new Et(n).parse(e)}static parseInline(e,n){return new Et(n).parseInline(e)}parse(e,n=!0){let r="",s,i,o,a,l,c,u,f,d,p,w,O,T,I,y,C,B,K,G;const se=e.length;for(s=0;s<se;s++){if(p=e[s],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[p.type]&&(G=this.options.extensions.renderers[p.type].call({parser:this},p),G!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(p.type))){r+=G||"";continue}switch(p.type){case"space":continue;case"hr":{r+=this.renderer.hr();continue}case"heading":{r+=this.renderer.heading(this.parseInline(p.tokens),p.depth,cf(this.parseInline(p.tokens,this.textRenderer)),this.slugger);continue}case"code":{r+=this.renderer.code(p.text,p.lang,p.escaped);continue}case"table":{for(f="",u="",a=p.header.length,i=0;i<a;i++)u+=this.renderer.tablecell(this.parseInline(p.header[i].tokens),{header:!0,align:p.align[i]});for(f+=this.renderer.tablerow(u),d="",a=p.rows.length,i=0;i<a;i++){for(c=p.rows[i],u="",l=c.length,o=0;o<l;o++)u+=this.renderer.tablecell(this.parseInline(c[o].tokens),{header:!1,align:p.align[o]});d+=this.renderer.tablerow(u)}r+=this.renderer.table(f,d);continue}case"blockquote":{d=this.parse(p.tokens),r+=this.renderer.blockquote(d);continue}case"list":{for(w=p.ordered,O=p.start,T=p.loose,a=p.items.length,d="",i=0;i<a;i++)y=p.items[i],C=y.checked,B=y.task,I="",y.task&&(K=this.renderer.checkbox(C),T?y.tokens.length>0&&y.tokens[0].type==="paragraph"?(y.tokens[0].text=K+" "+y.tokens[0].text,y.tokens[0].tokens&&y.tokens[0].tokens.length>0&&y.tokens[0].tokens[0].type==="text"&&(y.tokens[0].tokens[0].text=K+" "+y.tokens[0].tokens[0].text)):y.tokens.unshift({type:"text",text:K}):I+=K),I+=this.parse(y.tokens,T),d+=this.renderer.listitem(I,B,C);r+=this.renderer.list(d,w,O);continue}case"html":{r+=this.renderer.html(p.text);continue}case"paragraph":{r+=this.renderer.paragraph(this.parseInline(p.tokens));continue}case"text":{for(d=p.tokens?this.parseInline(p.tokens):p.text;s+1<se&&e[s+1].type==="text";)p=e[++s],d+=`
`+(p.tokens?this.parseInline(p.tokens):p.text);r+=n?this.renderer.paragraph(d):d;continue}default:{const pe='Token with "'+p.type+'" type was not found.';if(this.options.silent){console.error(pe);return}else throw new Error(pe)}}}return r}parseInline(e,n){n=n||this.renderer;let r="",s,i,o;const a=e.length;for(s=0;s<a;s++){if(i=e[s],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]&&(o=this.options.extensions.renderers[i.type].call({parser:this},i),o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type))){r+=o||"";continue}switch(i.type){case"escape":{r+=n.text(i.text);break}case"html":{r+=n.html(i.text);break}case"link":{r+=n.link(i.href,i.title,this.parseInline(i.tokens,n));break}case"image":{r+=n.image(i.href,i.title,i.text);break}case"strong":{r+=n.strong(this.parseInline(i.tokens,n));break}case"em":{r+=n.em(this.parseInline(i.tokens,n));break}case"codespan":{r+=n.codespan(i.text);break}case"br":{r+=n.br();break}case"del":{r+=n.del(this.parseInline(i.tokens,n));break}case"text":{r+=n.text(i.text);break}default:{const l='Token with "'+i.type+'" type was not found.';if(this.options.silent){console.error(l);return}else throw new Error(l)}}}return r}}function V(t,e,n){if(typeof t>"u"||t===null)throw new Error("marked(): input parameter is undefined or null");if(typeof t!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected");if(typeof e=="function"&&(n=e,e=null),e=dt({},V.defaults,e||{}),uf(e),n){const s=e.highlight;let i;try{i=Ut.lex(t,e)}catch(l){return n(l)}const o=function(l){let c;if(!l)try{e.walkTokens&&V.walkTokens(i,e.walkTokens),c=Et.parse(i,e)}catch(u){l=u}return e.highlight=s,l?n(l):n(null,c)};if(!s||s.length<3||(delete e.highlight,!i.length))return o();let a=0;V.walkTokens(i,function(l){l.type==="code"&&(a++,setTimeout(()=>{s(l.text,l.lang,function(c,u){if(c)return o(c);u!=null&&u!==l.text&&(l.text=u,l.escaped=!0),a--,a===0&&o()})},0))}),a===0&&o();return}function r(s){if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+Ee(s.message+"",!0)+"</pre>";throw s}try{const s=Ut.lex(t,e);if(e.walkTokens){if(e.async)return Promise.all(V.walkTokens(s,e.walkTokens)).then(()=>Et.parse(s,e)).catch(r);V.walkTokens(s,e.walkTokens)}return Et.parse(s,e)}catch(s){r(s)}}V.options=V.setOptions=function(t){return dt(V.defaults,t),dw(V.defaults),V};V.getDefaults=lf;V.defaults=nr;V.use=function(...t){const e=dt({},...t),n=V.defaults.extensions||{renderers:{},childTokens:{}};let r;t.forEach(s=>{if(s.extensions&&(r=!0,s.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if(i.renderer){const o=n.renderers?n.renderers[i.name]:null;o?n.renderers[i.name]=function(...a){let l=i.renderer.apply(this,a);return l===!1&&(l=o.apply(this,a)),l}:n.renderers[i.name]=i.renderer}if(i.tokenizer){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");n[i.level]?n[i.level].unshift(i.tokenizer):n[i.level]=[i.tokenizer],i.start&&(i.level==="block"?n.startBlock?n.startBlock.push(i.start):n.startBlock=[i.start]:i.level==="inline"&&(n.startInline?n.startInline.push(i.start):n.startInline=[i.start]))}i.childTokens&&(n.childTokens[i.name]=i.childTokens)})),s.renderer){const i=V.defaults.renderer||new Ho;for(const o in s.renderer){const a=i[o];i[o]=(...l)=>{let c=s.renderer[o].apply(i,l);return c===!1&&(c=a.apply(i,l)),c}}e.renderer=i}if(s.tokenizer){const i=V.defaults.tokenizer||new qo;for(const o in s.tokenizer){const a=i[o];i[o]=(...l)=>{let c=s.tokenizer[o].apply(i,l);return c===!1&&(c=a.apply(i,l)),c}}e.tokenizer=i}if(s.walkTokens){const i=V.defaults.walkTokens;e.walkTokens=function(o){let a=[];return a.push(s.walkTokens.call(this,o)),i&&(a=a.concat(i.call(this,o))),a}}r&&(e.extensions=n),V.setOptions(e)})};V.walkTokens=function(t,e){let n=[];for(const r of t)switch(n=n.concat(e.call(V,r)),r.type){case"table":{for(const s of r.header)n=n.concat(V.walkTokens(s.tokens,e));for(const s of r.rows)for(const i of s)n=n.concat(V.walkTokens(i.tokens,e));break}case"list":{n=n.concat(V.walkTokens(r.items,e));break}default:V.defaults.extensions&&V.defaults.extensions.childTokens&&V.defaults.extensions.childTokens[r.type]?V.defaults.extensions.childTokens[r.type].forEach(function(s){n=n.concat(V.walkTokens(r[s],e))}):r.tokens&&(n=n.concat(V.walkTokens(r.tokens,e)))}return n};V.parseInline=function(t,e){if(typeof t>"u"||t===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof t!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected");e=dt({},V.defaults,e||{}),uf(e);try{const n=Ut.lexInline(t,e);return e.walkTokens&&V.walkTokens(n,e.walkTokens),Et.parseInline(n,e)}catch(n){if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+Ee(n.message+"",!0)+"</pre>";throw n}};V.Parser=Et;V.parser=Et.parse;V.Renderer=Ho;V.TextRenderer=ff;V.Lexer=Ut;V.lexer=Ut.lex;V.Tokenizer=qo;V.Slugger=hf;V.parse=V;V.options;V.setOptions;V.use;V.walkTokens;V.parseInline;Et.parse;Ut.lex;const Cw={class:"recent"},Ow={class:"date"},Pw=["innerHTML"],Nw={class:"article-summary"},Dw={__name:"ArticleSummary",props:{content:String,date:Number,title:String,ups:Number,parent:String,comments:Number,id:String},setup(t){const e=t,n=Er("");n.value=e.content;const r=Er(""),s=new Date(e.date);return r.value=s.toLocaleDateString("en-us",{year:"numeric",month:"long",day:"numeric"}),(i,o)=>{const a=$i("RouterLink");return Ce(),Zt("div",Cw,[ve("h3",null,Qr(e.title),1),ve("span",Ow,Qr(r.value),1),ve("div",{class:"content-container",innerHTML:mn(V).parse(n.value)},null,8,Pw),ve("div",Nw,[me(a,{to:{name:"article",params:{id:e.id}}},{default:Ge(()=>[St(Qr(e.comments)+" Comment/s",1)]),_:1},8,["to"]),ve("span",null,Qr(e.ups)+" \u2191",1)])])}}},Mw=ai(Dw,[["__scopeId","data-v-bbe9663d"]]);/**
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
 */class Ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
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
 */const Yn=new ei("@firebase/firestore");function Ds(t,...e){if(Yn.logLevel<=re.DEBUG){const n=e.map(Ko);Yn.debug(`Firestore (${rr}): ${t}`,...n)}}function Wo(t,...e){if(Yn.logLevel<=re.ERROR){const n=e.map(Ko);Yn.error(`Firestore (${rr}): ${t}`,...n)}}function Lw(t,...e){if(Yn.logLevel<=re.WARN){const n=e.map(Ko);Yn.warn(`Firestore (${rr}): ${t}`,...n)}}function Ko(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function _e(t="Unexpected state"){const e=`FIRESTORE (${rr}) INTERNAL ASSERTION FAILED: `+t;throw Wo(e),new Error(e)}function Fe(t,e){t||_e()}function Jr(t,e){return t}/**
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
 */const Fl="ok",$w="cancelled",gr="unknown",W="invalid-argument",Fw="deadline-exceeded",Uw="not-found",Bw="permission-denied",to="unauthenticated",Vw="resource-exhausted",Jn="failed-precondition",jw="aborted",zw="out-of-range",df="unimplemented",qw="internal",Hw="unavailable";class U extends ht{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ww{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Kw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ye.UNAUTHENTICATED))}shutdown(){}}class Gw{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(Fe(typeof e.accessToken=="string"),new Ww(e.accessToken,new Ye(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class Yw{constructor(e,n,r,s){this.t=e,this.i=n,this.o=r,this.u=s,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.h=new Map}l(){return this.u?this.u():(Fe(!(typeof this.t!="object"||this.t===null||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.h.set("X-Goog-AuthUser",this.i);const e=this.l();return e&&this.h.set("Authorization",e),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}}class Jw{constructor(e,n,r,s){this.t=e,this.i=n,this.o=r,this.u=s}getToken(){return Promise.resolve(new Yw(this.t,this.i,this.o,this.u))}start(e,n){e.enqueueRetryable(()=>n(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Qw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Zw{constructor(e){this.m=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(Fe(typeof e.token=="string"),new Qw(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
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
 */class Xw{constructor(e,n,r,s,i,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Dr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Dr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Dr&&e.projectId===this.projectId&&e.database===this.database}}class Mr{constructor(e,n,r){n===void 0?n=0:n>e.length&&_e(),r===void 0?r=e.length-n:r>e.length-n&&_e(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Mr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Mr?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class be extends Mr{construct(e,n,r){return new be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(W,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new be(n)}static emptyPath(){return new be([])}}const eb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class je extends Mr{construct(e,n,r){return new je(e,n,r)}static isValidIdentifier(e){return eb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new je(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new U(W,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new U(W,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new U(W,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new U(W,"Unterminated ` in path: "+e);return new je(n)}static emptyPath(){return new je([])}}/**
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
 */class Re{constructor(e){this.path=e}static fromPath(e){return new Re(be.fromString(e))}static fromName(e){return new Re(be.fromString(e).popFirst(5))}static empty(){return new Re(be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Re(new be(e.slice()))}}/**
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
 */function pf(t,e,n){if(!n)throw new U(W,`Function ${t}() cannot be called with an empty ${e}.`)}function Ul(t){if(!Re.isDocumentKey(t))throw new U(W,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Bl(t){if(Re.isDocumentKey(t))throw new U(W,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function li(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":_e()}function Go(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(W,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=li(t);throw new U(W,`Expected type '${e.name}', but it was: ${n}`)}}return t}function tb(t,e){if(e<=0)throw new U(W,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */function nb(t){return t==null}function Ms(t){return t===0&&1/t==-1/0}/**
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
 */const rb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */var Vl,Q;function jl(t){if(t===void 0)return Wo("RPC_ERROR","HTTP error has no status"),gr;switch(t){case 200:return Fl;case 400:return Jn;case 401:return to;case 403:return Bw;case 404:return Uw;case 409:return jw;case 416:return zw;case 429:return Vw;case 499:return $w;case 500:return gr;case 501:return df;case 503:return Hw;case 504:return Fw;default:return t>=200&&t<300?Fl:t>=400&&t<500?Jn:t>=500&&t<600?qw:gr}}/**
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
 */(Q=Vl||(Vl={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";class sb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.p=n+"://"+e.host,this.g="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}v(e,n,r,s,i){const o=this.T(e,n);Ds("RestConnection","Sending: ",o,r);const a={};return this.I(a,s,i),this.A(e,o,a,r).then(l=>(Ds("RestConnection","Received: ",l),l),l=>{throw Lw("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}R(e,n,r,s,i,o){return this.v(e,n,r,s,i)}I(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+rr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}T(e,n){const r=rb[e];return`${this.p}/v1/${n}:${r}`}}{constructor(e,n){super(e),this.P=n}V(e,n){throw new Error("Not supported by FetchConnection")}async A(e,n,r,s){const i=JSON.stringify(s);let o;try{o=await this.P(n,{method:"POST",headers:r,body:i})}catch(a){throw new U(jl(a.status),"Request failed with error: "+a.statusText)}if(!o.ok)throw new U(jl(o.status),"Request failed with error: "+o.statusText);return o.json()}}/**
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
 */function ib(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class ob{static N(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=ib(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ke(t,e){return t<e?-1:t>e?1:0}function gf(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class ze{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(W,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(W,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(W,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(W,"Timestamp seconds out of range: "+e)}static now(){return ze.fromMillis(Date.now())}static fromDate(e){return ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ze(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class st{constructor(e){this.timestamp=e}static fromTimestamp(e){return new st(e)}static min(){return new st(new ze(0,0))}static max(){return new st(new ze(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function zl(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ci(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
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
 */class Ls{constructor(e,n){this.comparator=e,this.root=n||Ae.EMPTY}insert(e,n){return new Ls(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ae.BLACK,null,null))}remove(e){return new Ls(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ae.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new os(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new os(this.root,e,this.comparator,!1)}getReverseIterator(){return new os(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new os(this.root,e,this.comparator,!0)}}class os{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ae{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:Ae.RED,this.left=s!=null?s:Ae.EMPTY,this.right=i!=null?i:Ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ae(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ae.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ae.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw _e();const e=this.left.check();if(e!==this.right.check())throw _e();return e+(this.isRed()?0:1)}}Ae.EMPTY=null,Ae.RED=!0,Ae.BLACK=!1;Ae.EMPTY=new class{constructor(){this.size=0}get key(){throw _e()}get value(){throw _e()}get color(){throw _e()}get left(){throw _e()}get right(){throw _e()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Ae(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class $s{constructor(e){this.comparator=e,this.data=new Ls(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ql(this.data.getIterator())}getIteratorFrom(e){return new ql(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof $s)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new $s(this.comparator);return n.data=e,n}}class ql{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Lr{constructor(e){this.fields=e,e.sort(je.comparator)}static empty(){return new Lr([])}unionWith(e){let n=new $s(je.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Lr(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return gf(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Bt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Bt(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new Bt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Bt.EMPTY_BYTE_STRING=new Bt("");const ab=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function In(t){if(Fe(!!t),typeof t=="string"){let e=0;const n=ab.exec(t);if(Fe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:we(t.seconds),nanos:we(t.nanos)}}function we(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function $r(t){return typeof t=="string"?Bt.fromBase64String(t):Bt.fromUint8Array(t)}/**
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
 */function mf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function _f(t){const e=t.mapValue.fields.__previous_value__;return mf(e)?_f(e):e}function Fr(t){const e=In(t.mapValue.fields.__local_write_time__.timestampValue);return new ze(e.seconds,e.nanos)}/**
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
 */const as={fields:{__type__:{stringValue:"__max__"}}};function En(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?mf(t)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:10:_e()}function Fs(t,e){if(t===e)return!0;const n=En(t);if(n!==En(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Fr(t).isEqual(Fr(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=In(r.timestampValue),o=In(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return $r(r.bytesValue).isEqual($r(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return we(r.geoPointValue.latitude)===we(s.geoPointValue.latitude)&&we(r.geoPointValue.longitude)===we(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return we(r.integerValue)===we(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=we(r.doubleValue),o=we(s.doubleValue);return i===o?Ms(i)===Ms(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return gf(t.arrayValue.values||[],e.arrayValue.values||[],Fs);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(zl(i)!==zl(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Fs(i[a],o[a])))return!1;return!0}(t,e);default:return _e()}}function Ur(t,e){return(t.values||[]).find(n=>Fs(n,e))!==void 0}function Us(t,e){if(t===e)return 0;const n=En(t),r=En(e);if(n!==r)return ke(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ke(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=we(s.integerValue||s.doubleValue),a=we(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Hl(t.timestampValue,e.timestampValue);case 4:return Hl(Fr(t),Fr(e));case 5:return ke(t.stringValue,e.stringValue);case 6:return function(s,i){const o=$r(s),a=$r(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=ke(o[l],a[l]);if(c!==0)return c}return ke(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=ke(we(s.latitude),we(i.latitude));return o!==0?o:ke(we(s.longitude),we(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Us(o[l],a[l]);if(c)return c}return ke(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===as&&i===as)return 0;if(s===as)return 1;if(i===as)return-1;const o=s.fields||{},a=Object.keys(o),l=i.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const f=ke(a[u],c[u]);if(f!==0)return f;const d=Us(o[a[u]],l[c[u]]);if(d!==0)return d}return ke(a.length,c.length)}(t.mapValue,e.mapValue);default:throw _e()}}function Hl(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ke(t,e);const n=In(t),r=In(e),s=ke(n.seconds,r.seconds);return s!==0?s:ke(n.nanos,r.nanos)}function Wl(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function yf(t){return!!t&&"arrayValue"in t}function Kl(t){return!!t&&"nullValue"in t}function Gl(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ri(t){return!!t&&"mapValue"in t}function mr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ci(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=mr(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=mr(t.arrayValue.values[n]);return e}return Object.assign({},t)}class ot{constructor(e){this.value=e}static empty(){return new ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ri(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=mr(n)}setAll(e){let n=je.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=mr(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ri(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Fs(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ri(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ci(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ot(mr(this.value))}}/**
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
 */class wt{constructor(e,n,r,s,i,o){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new wt(e,0,st.min(),st.min(),ot.empty(),0)}static newFoundDocument(e,n,r){return new wt(e,1,n,st.min(),r,0)}static newNoDocument(e,n){return new wt(e,2,n,st.min(),ot.empty(),0)}static newUnknownDocument(e,n){return new wt(e,3,n,st.min(),ot.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=st.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new wt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class lb{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.D=null}}function Yl(t,e=null,n=[],r=[],s=null,i=null,o=null){return new lb(t,e,n,r,s,i,o)}class At extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.$(e,n,r):new cb(e,n,r):n==="array-contains"?new hb(e,r):n==="in"?new db(e,r):n==="not-in"?new pb(e,r):n==="array-contains-any"?new gb(e,r):new At(e,n,r)}static $(e,n,r){return n==="in"?new ub(e,r):new fb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.F(Us(n,this.value)):n!==null&&En(this.value)===En(n)&&this.F(Us(n,this.value))}F(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class cb extends At{constructor(e,n,r){super(e,n,r),this.key=Re.fromName(r.referenceValue)}matches(e){const n=Re.comparator(e.key,this.key);return this.F(n)}}class ub extends At{constructor(e,n){super(e,"in",n),this.keys=wf("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class fb extends At{constructor(e,n){super(e,"not-in",n),this.keys=wf("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function wf(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Re.fromName(r.referenceValue))}class hb extends At{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return yf(n)&&Ur(n.arrayValue,this.value)}}class db extends At{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ur(this.value.arrayValue,n)}}class pb extends At{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ur(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ur(this.value.arrayValue,n)}}class gb extends At{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!yf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ur(this.value.arrayValue,r))}}class Jl{constructor(e,n){this.position=e,this.inclusive=n}}class _r{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
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
 */class ui{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.q=null,this.O=null,this.startAt,this.endAt}}function Yo(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Jo(t){for(const e of t.filters)if(e.S())return e.field;return null}function mb(t){return t.collectionGroup!==null}function Ql(t){const e=Jr(t);if(e.q===null){e.q=[];const n=Jo(e),r=Yo(e);if(n!==null&&r===null)n.isKeyField()||e.q.push(new _r(n)),e.q.push(new _r(je.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.q.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.q.push(new _r(je.keyField(),i))}}}return e.q}function _b(t){const e=Jr(t);if(!e.O)if(e.limitType==="F")e.O=Yl(e.path,e.collectionGroup,Ql(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Ql(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new _r(i.field,o))}const r=e.endAt?new Jl(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Jl(e.startAt.position,e.startAt.inclusive):null;e.O=Yl(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.O}/**
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
 */function yb(t,e){return function(n){return typeof n=="number"&&Number.isInteger(n)&&!Ms(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}(e)?function(n){return{integerValue:""+n}}(e):function(n,r){if(n.k){if(isNaN(r))return{doubleValue:"NaN"};if(r===1/0)return{doubleValue:"Infinity"};if(r===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ms(r)?"-0":r}}(t,e)}/**
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
 */class fi{constructor(){this._=void 0}}class wb extends fi{}class bb extends fi{constructor(e){super(),this.elements=e}}class vb extends fi{constructor(e){super(),this.elements=e}}class Ib extends fi{constructor(e,n){super(),this.C=e,this.L=n}}class yr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new yr}static exists(e){return new yr(void 0,e)}static updateTime(e){return new yr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class hi{}class bf extends hi{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class vf extends hi{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class Eb extends hi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kb extends hi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */const Tb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Sb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Ab{constructor(e,n){this.databaseId=e,this.k=n}}function no(t,e){return t.k?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Rb(t,e){return t.k?e.toBase64():e.toUint8Array()}function xb(t,e){return no(t,e.toTimestamp())}function ro(t){return Fe(!!t),st.fromTimestamp(function(e){const n=In(e);return new ze(n.seconds,n.nanos)}(t))}function Qo(t,e){return function(n){return new be(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Bs(t,e){return Qo(t.databaseId,e.path)}function so(t,e){const n=function(s){const i=be.fromString(s);return Fe(Ef(i)),i}(e);if(n.get(1)!==t.databaseId.projectId)throw new U(W,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(W,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Re((Fe((r=n).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function Zl(t,e){return Qo(t.databaseId,e)}function If(t){return new be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Xl(t,e,n){return{name:Bs(t,e),fields:n.value.mapValue.fields}}function Cb(t,e){return"found"in e?function(n,r){Fe(!!r.found),r.found.name,r.found.updateTime;const s=so(n,r.found.name),i=ro(r.found.updateTime),o=new ot({mapValue:{fields:r.found.fields}});return wt.newFoundDocument(s,i,o)}(t,e):"missing"in e?function(n,r){Fe(!!r.missing),Fe(!!r.readTime);const s=so(n,r.missing),i=ro(r.readTime);return wt.newNoDocument(s,i)}(t,e):_e()}function Ob(t,e){let n;if(e instanceof bf)n={update:Xl(t,e.key,e.value)};else if(e instanceof Eb)n={delete:Bs(t,e.key)};else if(e instanceof vf)n={update:Xl(t,e.key,e.data),updateMask:Mb(e.fieldMask)};else{if(!(e instanceof kb))return _e();n={verify:Bs(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof wb)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof bb)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof vb)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ib)return{fieldPath:i.field.canonicalString(),increment:o.L};throw _e()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:xb(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:_e()}(t,e.precondition)),n}function Pb(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Zl(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Zl(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length===0)return;const c=l.map(u=>function(f){if(f.op==="=="){if(Gl(f.value))return{unaryFilter:{field:Nn(f.field),op:"IS_NAN"}};if(Kl(f.value))return{unaryFilter:{field:Nn(f.field),op:"IS_NULL"}}}else if(f.op==="!="){if(Gl(f.value))return{unaryFilter:{field:Nn(f.field),op:"IS_NOT_NAN"}};if(Kl(f.value))return{unaryFilter:{field:Nn(f.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Nn(f.field),op:Db(f.op),value:f.value}}}(u));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:Nn(u.field),direction:Nb(u.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(l,c){return l.k||nb(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Nb(t){return Tb[t]}function Db(t){return Sb[t]}function Nn(t){return{fieldPath:t.canonicalString()}}function Mb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ef(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */function Zo(t){return new Ab(t,!0)}/**
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
 */class Lb extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.Z=r,this.C=s,this.tt=!1}et(){if(this.tt)throw new U(Jn,"The client has already been terminated.")}v(e,n,r){return this.et(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.Z.v(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===to&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new U(gr,s.toString())})}R(e,n,r,s){return this.et(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.Z.R(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===to&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(gr,i.toString())})}terminate(){this.tt=!0}}async function $b(t,e){const n=Jr(t),r=If(n.C)+"/documents",s={writes:e.map(i=>Ob(n.C,i))};await n.v("Commit",r,s)}async function Fb(t,e){const n=Jr(t),r=If(n.C)+"/documents",s={documents:e.map(l=>Bs(n.C,l))},i=await n.R("BatchGetDocuments",r,s,e.length),o=new Map;i.forEach(l=>{const c=Cb(n.C,l);o.set(c.key.toString(),c)});const a=[];return e.forEach(l=>{const c=o.get(l.toString());Fe(!!c),a.push(c)}),a}async function Ub(t,e){const n=Jr(t),r=Pb(n.C,_b(e));return(await n.R("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(i,o,a){const l=so(i,o.name),c=ro(o.updateTime),u=new ot({mapValue:{fields:o.fields}}),f=wt.newFoundDocument(l,c,u);return a&&f.setHasCommittedMutations(),a?f.setHasCommittedMutations():f}(n.C,s.document,void 0))}/**
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
 */const wr=new Map;function Xo(t){if(t._terminated)throw new U(Jn,"The client has already been terminated.");if(!wr.has(t)){Ds("ComponentProvider","Initializing Datastore");const i=function(l){return new sb(l,fetch.bind(null))}((e=t._databaseId,n=t.app.options.appId||"",r=t._persistenceKey,s=t._freezeSettings(),new Xw(e,n,r,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams))),o=Zo(t._databaseId),a=function(l,c,u,f){return new Lb(l,c,u,f)}(t._authCredentials,t._appCheckCredentials,i,o);wr.set(t,a)}var e,n,r,s;/**
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
*/return wr.get(t)}class ec{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new U(W,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(W,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(r,s,i,o){if(s===!0&&o===!0)throw new U(W,`${r} and ${i} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class ea{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ec({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(Jn,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(Jn,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ec(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Kw;switch(n.type){case"gapi":const r=n.client;return new Jw(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new U(W,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=wr.get(e);n&&(Ds("ComponentProvider","Removing Datastore"),wr.delete(e),n.terminate())}(this),Promise.resolve()}}function Bb(t,e){const n=typeof t=="object"?t:No(),r=typeof t=="string"?t:e||"(default)";return An(n,"firestore/lite").getImmediate({identifier:r})}/**
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
 */class qe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qe(this.firestore,e,this._key)}}class Rn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Rn(this.firestore,e,this._query)}}class Mt extends Rn{constructor(e,n,r){super(e,n,new ui(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qe(this.firestore,null,new Re(e))}withConverter(e){return new Mt(this.firestore,e,this._path)}}function Vb(t,e,...n){if(t=Ue(t),pf("collection","path",e),t instanceof ea){const r=be.fromString(e,...n);return Bl(r),new Mt(t,null,r)}{if(!(t instanceof qe||t instanceof Mt))throw new U(W,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return Bl(r),new Mt(t.firestore,null,r)}}function jb(t,e,...n){if(t=Ue(t),arguments.length===1&&(e=ob.N()),pf("doc","path",e),t instanceof ea){const r=be.fromString(e,...n);return Ul(r),new qe(t,null,new Re(r))}{if(!(t instanceof qe||t instanceof Mt))throw new U(W,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return Ul(r),new qe(t.firestore,t instanceof Mt?t.converter:null,new Re(r))}}/**
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
 */class ta{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(W,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Qn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qn(Bt.fromBase64String(e))}catch(n){throw new U(W,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qn(Bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class kf{constructor(e){this._methodName=e}}/**
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
 */class na{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(W,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(W,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}}/**
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
 */const zb=/^__.*__$/;class qb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new vf(e,this.data,this.fieldMask,n,this.fieldTransforms):new bf(e,this.data,n,this.fieldTransforms)}}function Tf(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e()}}class ra{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.C=r,this.ignoreUndefinedProperties=s,i===void 0&&this.nt(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get rt(){return this.settings.rt}st(e){return new ra(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.C,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}it(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.st({path:r,ot:!1});return s.ut(e),s}ct(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.st({path:r,ot:!1});return s.nt(),s}at(e){return this.st({path:void 0,ot:!0})}ht(e){return Vs(e,this.settings.methodName,this.settings.lt||!1,this.path,this.settings.ft)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}nt(){if(this.path)for(let e=0;e<this.path.length;e++)this.ut(this.path.get(e))}ut(e){if(e.length===0)throw this.ht("Document fields must not be empty");if(Tf(this.rt)&&zb.test(e))throw this.ht('Document fields cannot begin and end with "__"')}}class Hb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.C=r||Zo(e)}dt(e,n,r,s=!1){return new ra({rt:e,methodName:n,ft:r,path:je.emptyPath(),ot:!1,lt:s},this.databaseId,this.C,this.ignoreUndefinedProperties)}}function Sf(t){const e=t._freezeSettings(),n=Zo(t._databaseId);return new Hb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Wb(t,e,n,r,s,i={}){const o=t.dt(i.merge||i.mergeFields?2:0,e,n,s);xf("Data must be an object, but it was:",o,r);const a=Af(r,o);let l,c;if(i.merge)l=new Lr(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const f of i.mergeFields){const d=Gb(e,f,n);if(!o.contains(d))throw new U(W,`Field '${d}' is specified in your field mask but missing from your input data.`);Jb(u,d)||u.push(d)}l=new Lr(u),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new qb(new ot(a),l,c)}function Kb(t,e,n,r=!1){return sa(n,t.dt(r?4:3,e))}function sa(t,e){if(Rf(t=Ue(t)))return xf("Unsupported field value:",e,t),Af(t,e);if(t instanceof kf)return function(n,r){if(!Tf(r.rt))throw r.ht(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ht(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ot&&e.rt!==4)throw e.ht("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=sa(o,r.at(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=Ue(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return yb(r.C,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=ze.fromDate(n);return{timestampValue:no(r.C,s)}}if(n instanceof ze){const s=new ze(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:no(r.C,s)}}if(n instanceof na)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Qn)return{bytesValue:Rb(r.C,n._byteString)};if(n instanceof qe){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.ht(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Qo(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ht(`Unsupported field value: ${li(n)}`)}(t,e)}function Af(t,e){const n={};return function(r){for(const s in r)if(Object.prototype.hasOwnProperty.call(r,s))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ci(t,(r,s)=>{const i=sa(s,e.it(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Rf(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ze||t instanceof na||t instanceof Qn||t instanceof qe||t instanceof kf)}function xf(t,e,n){if(!Rf(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=li(n);throw r==="an object"?e.ht(t+" a custom object"):e.ht(t+" "+r)}}function Gb(t,e,n){if((e=Ue(e))instanceof ta)return e._internalPath;if(typeof e=="string")return Cf(t,e);throw Vs("Field path arguments must be of type string or ",t,!1,void 0,n)}const Yb=new RegExp("[~\\*/\\[\\]]");function Cf(t,e,n){if(e.search(Yb)>=0)throw Vs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ta(...e.split("."))._internalPath}catch{throw Vs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Vs(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new U(W,a+t+l)}function Jb(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Of{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Pf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ia("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Pf extends Of{data(){return super.data()}}class Qb{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function ia(t,e){return typeof e=="string"?Cf(t,e):e instanceof ta?e._internalPath:e._delegate._internalPath}/**
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
 */class oa{}function Zb(t,...e){for(const n of e)t=n._apply(t);return t}class Xb extends oa{constructor(e,n,r){super(),this._t=e,this.gt=n,this.vt=r,this.type="where"}_apply(e){const n=Sf(e.firestore),r=function(s,i,o,a,l,c,u){let f;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new U(W,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){nc(u,c);const p=[];for(const w of u)p.push(tc(a,s,w));f={arrayValue:{values:p}}}else f=tc(a,s,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||nc(u,c),f=Kb(o,i,u,c==="in"||c==="not-in");const d=At.create(l,c,f);return function(p,w){if(w.S()){const T=Jo(p);if(T!==null&&!T.isEqual(w.field))throw new U(W,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${T.toString()}' and '${w.field.toString()}'`);const I=Yo(p);I!==null&&Nf(p,w.field,I)}const O=function(T,I){for(const y of T.filters)if(I.indexOf(y.op)>=0)return y.op;return null}(p,function(T){switch(T){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(w.op));if(O!==null)throw O===w.op?new U(W,`Invalid query. You cannot use more than one '${w.op.toString()}' filter.`):new U(W,`Invalid query. You cannot use '${w.op.toString()}' filters with '${O.toString()}' filters.`)}(s,d),d}(e._query,"where",n,e.firestore._databaseId,this._t,this.gt,this.vt);return new Rn(e.firestore,e.converter,function(s,i){const o=s.filters.concat([i]);return new ui(s.path,s.collectionGroup,s.explicitOrderBy.slice(),o,s.limit,s.limitType,s.startAt,s.endAt)}(e._query,r))}}function ev(t,e,n){const r=e,s=ia("where",t);return new Xb(s,r,n)}class tv extends oa{constructor(e,n){super(),this._t=e,this.bt=n,this.type="orderBy"}_apply(e){const n=function(r,s,i){if(r.startAt!==null)throw new U(W,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new U(W,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new _r(s,i);return function(a,l){if(Yo(a)===null){const c=Jo(a);c!==null&&Nf(a,c,l.field)}}(r,o),o}(e._query,this._t,this.bt);return new Rn(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new ui(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function nv(t,e="asc"){const n=e,r=ia("orderBy",t);return new tv(r,n)}class rv extends oa{constructor(e,n,r){super(),this.type=e,this.Et=n,this.Tt=r}_apply(e){return new Rn(e.firestore,e.converter,function(n,r,s){return new ui(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),r,s,n.startAt,n.endAt)}(e._query,this.Et,this.Tt))}}function sv(t){return tb("limit",t),new rv("limit",t,"F")}function tc(t,e,n){if(typeof(n=Ue(n))=="string"){if(n==="")throw new U(W,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!mb(e)&&n.indexOf("/")!==-1)throw new U(W,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(be.fromString(n));if(!Re.isDocumentKey(r))throw new U(W,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Wl(t,new Re(r))}if(n instanceof qe)return Wl(t,n._key);throw new U(W,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${li(n)}.`)}function nc(t,e){if(!Array.isArray(t)||t.length===0)throw new U(W,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new U(W,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Nf(t,e,n){if(!n.isEqual(e))throw new U(W,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */function iv(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Df extends class{convertValue(e,n="none"){switch(En(e)){case 0:return null;case 1:return e.booleanValue;case 2:return we(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes($r(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw _e()}}convertObject(e,n){const r={};return ci(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new na(we(e.latitude),we(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=_f(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Fr(e));default:return null}}convertTimestamp(e){const n=In(e);return new ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=be.fromString(e);Fe(Ef(r));const s=new Dr(r.get(1),r.get(3)),i=new Re(r.popFirst(5));return s.isEqual(n)||Wo(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new qe(this.firestore,null,n)}}function G0(t){const e=Xo((t=Go(t,qe)).firestore),n=new Df(t.firestore);return Fb(e,[t._key]).then(r=>{Fe(r.length===1);const s=r[0];return new Of(t.firestore,n,t._key,s.isFoundDocument()?s:null,t.converter)})}function ov(t){(function(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new U(df,"limitToLast() queries require specifying at least one orderBy() clause")})((t=Go(t,Rn))._query);const e=Xo(t.firestore),n=new Df(t.firestore);return Ub(e,t._query).then(r=>{const s=r.map(i=>new Pf(t.firestore,n,i.key,i,t.converter));return t._query.limitType==="L"&&s.reverse(),new Qb(t,s)})}function Y0(t,e){const n=jb(t=Go(t,Mt)),r=iv(t.converter,e),s=Wb(Sf(t.firestore),"addDoc",n._key,r,n.converter!==null,{});return $b(Xo(t.firestore),[s.toMutation(n._key,yr.exists(!1))]).then(()=>n)}(function(t){rr=t})(`${zr}_lite`),Tt(new ct("firestore/lite",(t,{instanceIdentifier:e,options:n})=>{const r=t.getProvider("app").getImmediate(),s=new ea(new Gw(t.getProvider("auth-internal")),new Zw(t.getProvider("app-check-internal")),function(i,o){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new U(W,'"projectId" not provided in firebase.initializeApp.');return new Dr(i.options.projectId,o)}(r,e),r);return n&&s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),et("firestore-lite","3.5.0",""),et("firestore-lite","3.5.0","esm2017");const av=t=>(ko("data-v-ee76cc9b"),t=t(),To(),t),lv={class:"most-recent-container"},cv=av(()=>ve("a",{href:""},"Most Recent",-1)),uv={class:"slider"},fv={class:"most-recent-list"},hv=["onClick"],dv={__name:"MostRecent",async setup(t){let e,n;const r=Bb(),s=Er([]),i=Vb(r,"articles"),o=Zb(i,ev("article_type","==","post"),nv("date","desc"),sv(3));([e,n]=sp(()=>ov(o)),e=await e,n(),e).forEach(f=>{s.value.push({id:f.id,data:f.data()})});let l=0;u();function c(f){f>2?l=0:f<0?l=2:l=f;const d=document.getElementsByClassName("recent");for(let p=0;p<d.length;p++)d[p].style.display="none";d[l].style.display="block"}function u(){const f=document.getElementsByClassName("recent"),d=document.getElementsByClassName("dot");if(f.length>0){for(let p=0;p<f.length;p++)f[p].style.display="none",d[p].classList.remove("active");f[l].style.display="block",d[l].classList.add("active"),l++,l>=f.length&&(l=0),setTimeout(u,5e3)}else setTimeout(u,200)}return(f,d)=>(Ce(),Zt("div",lv,[cv,ve("div",uv,[ve("div",fv,[(Ce(!0),Zt(Je,null,Aa(s.value,p=>(Ce(),dn(Mw,{content:p.data.content,date:p.data.date,title:p.data.title,ups:p.data.ups,parent:p.data.parent,comments:p.data.comments,id:p.id},null,8,["content","date","title","ups","parent","comments","id"]))),256))]),ve("div",null,[(Ce(!0),Zt(Je,null,Aa(s.value,(p,w)=>(Ce(),Zt("span",{class:"dot",onClick:O=>c(w)},null,8,hv))),256))])])]))}},pv=ai(dv,[["__scopeId","data-v-ee76cc9b"]]);const gv=t=>(ko("data-v-e8557f27"),t=t(),To(),t),mv={class:"main"},_v={class:"welcome-container"},yv=Wd('<div class="welcome" data-v-e8557f27><h2 class="header" data-v-e8557f27>Breath Deep and Relax, Welcome to my Blog.</h2><h3 class="subheader" data-v-e8557f27>I read books that sound fun for whatever reason.</h3><p class="summary" data-v-e8557f27>Take a look around the site! Maybe I have an article on a book you like, an opinion you want to argue over, or a rant on something narratively inconsequential. Whatever your speed, click below to start browsing.</p><a href="" class="blog-btn button" data-v-e8557f27>Browse Articles</a></div>',1),wv=gv(()=>ve("h2",null,null,-1)),bv={__name:"HomeView",setup(t){return(e,n)=>(Ce(),Zt("main",mv,[ve("div",_v,[yv,(Ce(),dn(Vc,null,{default:Ge(()=>[me(pv,{class:"most-recent"})]),_:1}))]),wv]))}},vv=ai(bv,[["__scopeId","data-v-e8557f27"]]),Iv=Gy({history:uy("/"),routes:[{path:"/",name:"home",component:vv},{path:"/about",name:"about",component:()=>ar(()=>import("./AboutView.a65a4fe2.js"),[])},{path:"/login",name:"login",component:()=>ar(()=>import("./LoginView.23d2b8e5.js"),[])},{path:"/register",name:"register",component:()=>ar(()=>import("./RegisterView.623b8162.js"),[])},{path:"/create",name:"create",component:()=>ar(()=>import("./CreateArticleView.50dba159.js"),["assets/CreateArticleView.50dba159.js","assets/CreateArticleView.aac52a9d.css"])},{path:"/article/:id",name:"article",component:()=>ar(()=>import("./ArticleView.5d468b88.js"),[]),props:!0}]});var Ev="firebase",kv="9.10.0";/**
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
 */et(Ev,kv,"app");const Mf="@firebase/installations",aa="0.5.12";/**
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
 */const Lf=1e4,$f=`w:${aa}`,Ff="FIS_v2",Tv="https://firebaseinstallations.googleapis.com/v1",Sv=60*60*1e3,Av="installations",Rv="Installations";/**
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
 */const xv={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},kn=new Sn(Av,Rv,xv);function Uf(t){return t instanceof ht&&t.code.includes("request-failed")}/**
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
 */function Bf({projectId:t}){return`${Tv}/projects/${t}/installations`}function Vf(t){return{token:t.token,requestStatus:2,expiresIn:Ov(t.expiresIn),creationTime:Date.now()}}async function jf(t,e){const r=(await e.json()).error;return kn.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function zf({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Cv(t,{refreshToken:e}){const n=zf(t);return n.append("Authorization",Pv(e)),n}async function qf(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Ov(t){return Number(t.replace("s","000"))}function Pv(t){return`${Ff} ${t}`}/**
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
 */async function Nv({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Bf(t),s=zf(t),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:Ff,appId:t.appId,sdkVersion:$f},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await qf(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Vf(c.authToken)}}else throw await jf("Create Installation",l)}/**
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
 */function Hf(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Dv(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Mv=/^[cdef][\w-]{21}$/,io="";function Lv(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=$v(t);return Mv.test(n)?n:io}catch{return io}}function $v(t){return Dv(t).substr(0,22)}/**
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
 */function di(t){return`${t.appName}!${t.appId}`}/**
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
 */const Wf=new Map;function Kf(t,e){const n=di(t);Gf(n,e),Fv(n,e)}function Gf(t,e){const n=Wf.get(t);if(!!n)for(const r of n)r(e)}function Fv(t,e){const n=Uv();n&&n.postMessage({key:t,fid:e}),Bv()}let pn=null;function Uv(){return!pn&&"BroadcastChannel"in self&&(pn=new BroadcastChannel("[Firebase] FID Change"),pn.onmessage=t=>{Gf(t.data.key,t.data.fid)}),pn}function Bv(){Wf.size===0&&pn&&(pn.close(),pn=null)}/**
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
 */const Vv="firebase-installations-database",jv=1,Tn="firebase-installations-store";let xi=null;function la(){return xi||(xi=yu(Vv,jv,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Tn)}}})),xi}async function js(t,e){const n=di(t),s=(await la()).transaction(Tn,"readwrite"),i=s.objectStore(Tn),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&Kf(t,e.fid),e}async function Yf(t){const e=di(t),r=(await la()).transaction(Tn,"readwrite");await r.objectStore(Tn).delete(e),await r.done}async function pi(t,e){const n=di(t),s=(await la()).transaction(Tn,"readwrite"),i=s.objectStore(Tn),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&Kf(t,a.fid),a}/**
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
 */async function ca(t){let e;const n=await pi(t.appConfig,r=>{const s=zv(r),i=qv(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===io?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function zv(t){const e=t||{fid:Lv(),registrationStatus:0};return Jf(e)}function qv(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(kn.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Hv(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Wv(t)}:{installationEntry:e}}async function Hv(t,e){try{const n=await Nv(t,e);return js(t.appConfig,n)}catch(n){throw Uf(n)&&n.customData.serverCode===409?await Yf(t.appConfig):await js(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Wv(t){let e=await rc(t.appConfig);for(;e.registrationStatus===1;)await Hf(100),e=await rc(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ca(t);return r||n}return e}function rc(t){return pi(t,e=>{if(!e)throw kn.create("installation-not-found");return Jf(e)})}function Jf(t){return Kv(t)?{fid:t.fid,registrationStatus:0}:t}function Kv(t){return t.registrationStatus===1&&t.registrationTime+Lf<Date.now()}/**
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
 */async function Gv({appConfig:t,heartbeatServiceProvider:e},n){const r=Yv(t,n),s=Cv(t,n),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:$f,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await qf(()=>fetch(r,a));if(l.ok){const c=await l.json();return Vf(c)}else throw await jf("Generate Auth Token",l)}function Yv(t,{fid:e}){return`${Bf(t)}/${e}/authTokens:generate`}/**
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
 */async function ua(t,e=!1){let n;const r=await pi(t.appConfig,i=>{if(!Qf(i))throw kn.create("not-registered");const o=i.authToken;if(!e&&Zv(o))return i;if(o.requestStatus===1)return n=Jv(t,e),i;{if(!navigator.onLine)throw kn.create("app-offline");const a=e0(i);return n=Qv(t,a),a}});return n?await n:r.authToken}async function Jv(t,e){let n=await sc(t.appConfig);for(;n.authToken.requestStatus===1;)await Hf(100),n=await sc(t.appConfig);const r=n.authToken;return r.requestStatus===0?ua(t,e):r}function sc(t){return pi(t,e=>{if(!Qf(e))throw kn.create("not-registered");const n=e.authToken;return t0(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Qv(t,e){try{const n=await Gv(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await js(t.appConfig,r),n}catch(n){if(Uf(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Yf(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await js(t.appConfig,r)}throw n}}function Qf(t){return t!==void 0&&t.registrationStatus===2}function Zv(t){return t.requestStatus===2&&!Xv(t)}function Xv(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Sv}function e0(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function t0(t){return t.requestStatus===1&&t.requestTime+Lf<Date.now()}/**
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
 */async function n0(t){const e=t,{installationEntry:n,registrationPromise:r}=await ca(e);return r?r.catch(console.error):ua(e).catch(console.error),n.fid}/**
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
 */async function r0(t,e=!1){const n=t;return await s0(n),(await ua(n,e)).token}async function s0(t){const{registrationPromise:e}=await ca(t);e&&await e}/**
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
 */function i0(t){if(!t||!t.options)throw Ci("App Configuration");if(!t.name)throw Ci("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ci(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ci(t){return kn.create("missing-app-config-values",{valueName:t})}/**
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
 */const Zf="installations",o0="installations-internal",a0=t=>{const e=t.getProvider("app").getImmediate(),n=i0(e),r=An(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},l0=t=>{const e=t.getProvider("app").getImmediate(),n=An(e,Zf).getImmediate();return{getId:()=>n0(n),getToken:s=>r0(n,s)}};function c0(){Tt(new ct(Zf,a0,"PUBLIC")),Tt(new ct(o0,l0,"PRIVATE"))}c0();et(Mf,aa);et(Mf,aa,"esm2017");/**
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
 */const zs="analytics",u0="firebase_id",f0="origin",h0=60*1e3,d0="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Xf="https://www.googletagmanager.com/gtag/js";/**
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
 */const He=new ei("@firebase/analytics");/**
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
 */function eh(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function p0(t,e){const n=document.createElement("script");n.src=`${Xf}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function g0(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function m0(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await eh(n)).find(c=>c.measurementId===s);l&&await e[l.appId]}}catch(a){He.error(a)}t("config",s,i)}async function _0(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await eh(n);for(const l of o){const c=a.find(f=>f.measurementId===l),u=c&&e[c.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){He.error(i)}}function y0(t,e,n,r){async function s(i,o,a){try{i==="event"?await _0(t,e,n,o,a):i==="config"?await m0(t,e,n,r,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(l){He.error(l)}}return s}function w0(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=y0(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function b0(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Xf))return e;return null}/**
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
 */const v0={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},tt=new Sn("analytics","Analytics",v0);/**
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
 */const I0=30,E0=1e3;class k0{constructor(e={},n=E0){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const th=new k0;function T0(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function S0(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:T0(r)},i=d0.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw tt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function A0(t,e=th,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw tt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw tt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new C0;return setTimeout(async()=>{a.abort()},n!==void 0?n:h0),nh({appId:r,apiKey:s,measurementId:i},o,a,e)}async function nh(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=th){var i,o;const{appId:a,measurementId:l}=t;try{await R0(r,e)}catch(c){if(l)return He.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${(i=c)===null||i===void 0?void 0:i.message}]`),{appId:a,measurementId:l};throw c}try{const c=await S0(t);return s.deleteThrottleMetadata(a),c}catch(c){const u=c;if(!x0(u)){if(s.deleteThrottleMetadata(a),l)return He.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:l};throw c}const f=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?Wa(n,s.intervalMillis,I0):Wa(n,s.intervalMillis),d={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return s.setThrottleMetadata(a,d),He.debug(`Calling attemptFetch again in ${f} millis`),nh(t,d,r,s)}}function R0(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(tt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function x0(t){if(!(t instanceof ht)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class C0{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function O0(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
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
 */async function P0(){var t;if(pu())try{await gu()}catch(e){return He.warn(tt.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return He.warn(tt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function N0(t,e,n,r,s,i,o){var a;const l=A0(t);l.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&He.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>He.error(p)),e.push(l);const c=P0().then(p=>{if(p)return r.getId()}),[u,f]=await Promise.all([l,c]);b0()||p0(i,u.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[f0]="firebase",d.update=!0,f!=null&&(d[u0]=f),s("config",u.measurementId,d),u.measurementId}/**
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
 */class D0{constructor(e){this.app=e}_delete(){return delete br[this.app.options.appId],Promise.resolve()}}let br={},ic=[];const oc={};let Oi="dataLayer",M0="gtag",ac,rh,lc=!1;function L0(){const t=[];if(du()&&t.push("This is a browser extension environment."),Lp()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=tt.create("invalid-analytics-context",{errorInfo:e});He.warn(n.message)}}function $0(t,e,n){L0();const r=t.options.appId;if(!r)throw tt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)He.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw tt.create("no-api-key");if(br[r]!=null)throw tt.create("already-exists",{id:r});if(!lc){g0(Oi);const{wrappedGtag:i,gtagCore:o}=w0(br,ic,oc,Oi,M0);rh=i,ac=o,lc=!0}return br[r]=N0(t,ic,oc,e,ac,Oi,n),new D0(t)}function F0(t=No()){t=Ue(t);const e=An(t,zs);return e.isInitialized()?e.getImmediate():U0(t)}function U0(t,e={}){const n=An(t,zs);if(n.isInitialized()){const s=n.getImmediate();if(Rr(e,n.getOptions()))return s;throw tt.create("already-initialized")}return n.initialize({options:e})}function B0(t,e,n,r){t=Ue(t),O0(rh,br[t.app.options.appId],e,n,r).catch(s=>He.error(s))}const cc="@firebase/analytics",uc="0.8.0";function V0(){Tt(new ct(zs,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return $0(r,s,n)},"PUBLIC")),Tt(new ct("analytics-internal",t,"PRIVATE")),et(cc,uc),et(cc,uc,"esm2017");function t(e){try{const n=e.getProvider(zs).getImmediate();return{logEvent:(r,s,i)=>B0(n,r,s,i)}}catch(n){throw tt.create("interop-component-reg-failed",{reason:n})}}}V0();const j0={apiKey:"AIzaSyAEkx5h_H_jYYiA5zv-SaziecBXeDwxPJ4",authDomain:"bookclub-58f19.firebaseapp.com",projectId:"bookclub-58f19",storageBucket:"bookclub-58f19.appspot.com",messagingSenderId:"1068291885693",appId:"1:1068291885693:web:8961261fdcabbaab2d7f14",measurementId:"G-ZHW6J2Q0PG"},z0=zg(j0);F0(z0);const sh=Ap(uw);sh.use(Iv);sh.mount("#app");export{G0 as A,Y0 as D,ai as _,ve as a,W0 as b,Zt as c,mn as d,jb as e,sp as f,W_ as g,Bb as l,V as m,Ce as o,Er as r,K0 as s,Jy as u,H0 as v,q0 as w,Vb as y};
