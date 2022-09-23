(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function $i(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const eh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",th=$i(eh);function Sl(t){return!!t||t===""}function Ui(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Te(r)?sh(r):Ui(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Te(t))return t;if(de(t))return t}}const nh=/;(?![^(]*\))/g,rh=/:(.+)/;function sh(t){const e={};return t.split(nh).forEach(n=>{if(n){const r=n.split(rh);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Fi(t){let e="";if(Te(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const r=Fi(t[n]);r&&(e+=r+" ")}else if(de(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Rl=t=>Te(t)?t:t==null?"":H(t)||de(t)&&(t.toString===Cl||!Y(t.toString))?JSON.stringify(t,xl,2):String(t),xl=(t,e)=>e&&e.__v_isRef?xl(t,e.value):xn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Al(e)?{[`Set(${e.size})`]:[...e.values()]}:de(e)&&!H(e)&&!Pl(e)?String(e):e,le={},Rn=[],et=()=>{},ih=()=>!1,oh=/^on[^a-z]/,Cs=t=>oh.test(t),Bi=t=>t.startsWith("onUpdate:"),De=Object.assign,Vi=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ah=Object.prototype.hasOwnProperty,Z=(t,e)=>ah.call(t,e),H=Array.isArray,xn=t=>Ps(t)==="[object Map]",Al=t=>Ps(t)==="[object Set]",Y=t=>typeof t=="function",Te=t=>typeof t=="string",zi=t=>typeof t=="symbol",de=t=>t!==null&&typeof t=="object",ji=t=>de(t)&&Y(t.then)&&Y(t.catch),Cl=Object.prototype.toString,Ps=t=>Cl.call(t),lh=t=>Ps(t).slice(8,-1),Pl=t=>Ps(t)==="[object Object]",Hi=t=>Te(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Qr=$i(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Os=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ch=/-(\w)/g,Dn=Os(t=>t.replace(ch,(e,n)=>n?n.toUpperCase():"")),uh=/\B([A-Z])/g,Hn=Os(t=>t.replace(uh,"-$1").toLowerCase()),Ol=Os(t=>t.charAt(0).toUpperCase()+t.slice(1)),Qs=Os(t=>t?`on${Ol(t)}`:""),fr=(t,e)=>!Object.is(t,e),Zr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ls=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},cs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Uo;const hh=()=>Uo||(Uo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ht;class fh{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&ht&&(this.parent=ht,this.index=(ht.scopes||(ht.scopes=[])).push(this)-1)}run(e){if(this.active){const n=ht;try{return ht=this,e()}finally{ht=n}}}on(){ht=this}off(){ht=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function dh(t,e=ht){e&&e.active&&e.effects.push(t)}const qi=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Nl=t=>(t.w&Jt)>0,Dl=t=>(t.n&Jt)>0,ph=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Jt},gh=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Nl(s)&&!Dl(s)?s.delete(t):e[n++]=s,s.w&=~Jt,s.n&=~Jt}e.length=n}},fi=new WeakMap;let er=0,Jt=1;const di=30;let Ze;const an=Symbol(""),pi=Symbol("");class Wi{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,dh(this,r)}run(){if(!this.active)return this.fn();let e=Ze,n=qt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ze,Ze=this,qt=!0,Jt=1<<++er,er<=di?ph(this):Fo(this),this.fn()}finally{er<=di&&gh(this),Jt=1<<--er,Ze=this.parent,qt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ze===this?this.deferStop=!0:this.active&&(Fo(this),this.onStop&&this.onStop(),this.active=!1)}}function Fo(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let qt=!0;const Ml=[];function qn(){Ml.push(qt),qt=!1}function Wn(){const t=Ml.pop();qt=t===void 0?!0:t}function ze(t,e,n){if(qt&&Ze){let r=fi.get(t);r||fi.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=qi()),Ll(s)}}function Ll(t,e){let n=!1;er<=di?Dl(t)||(t.n|=Jt,n=!Nl(t)):n=!t.has(Ze),n&&(t.add(Ze),Ze.deps.push(t))}function Rt(t,e,n,r,s,i){const o=fi.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&H(t))o.forEach((l,c)=>{(c==="length"||c>=r)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":H(t)?Hi(n)&&a.push(o.get("length")):(a.push(o.get(an)),xn(t)&&a.push(o.get(pi)));break;case"delete":H(t)||(a.push(o.get(an)),xn(t)&&a.push(o.get(pi)));break;case"set":xn(t)&&a.push(o.get(an));break}if(a.length===1)a[0]&&gi(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);gi(qi(l))}}function gi(t,e){const n=H(t)?t:[...t];for(const r of n)r.computed&&Bo(r);for(const r of n)r.computed||Bo(r)}function Bo(t,e){(t!==Ze||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const mh=$i("__proto__,__v_isRef,__isVue"),$l=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(zi)),_h=Ki(),yh=Ki(!1,!0),bh=Ki(!0),Vo=wh();function wh(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ee(this);for(let i=0,o=this.length;i<o;i++)ze(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ee)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){qn();const r=ee(this)[e].apply(this,n);return Wn(),r}}),t}function Ki(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Lh:zl:e?Vl:Bl).get(r))return r;const o=H(r);if(!t&&o&&Z(Vo,s))return Reflect.get(Vo,s,i);const a=Reflect.get(r,s,i);return(zi(s)?$l.has(s):mh(s))||(t||ze(r,"get",s),e)?a:Pe(a)?o&&Hi(s)?a:a.value:de(a)?t?jl(a):Cr(a):a}}const vh=Ul(),Ih=Ul(!0);function Ul(t=!1){return function(n,r,s,i){let o=n[r];if(Mn(o)&&Pe(o)&&!Pe(s))return!1;if(!t&&(!us(s)&&!Mn(s)&&(o=ee(o),s=ee(s)),!H(n)&&Pe(o)&&!Pe(s)))return o.value=s,!0;const a=H(n)&&Hi(r)?Number(r)<n.length:Z(n,r),l=Reflect.set(n,r,s,i);return n===ee(i)&&(a?fr(s,o)&&Rt(n,"set",r,s):Rt(n,"add",r,s)),l}}function Eh(t,e){const n=Z(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Rt(t,"delete",e,void 0),r}function kh(t,e){const n=Reflect.has(t,e);return(!zi(e)||!$l.has(e))&&ze(t,"has",e),n}function Th(t){return ze(t,"iterate",H(t)?"length":an),Reflect.ownKeys(t)}const Fl={get:_h,set:vh,deleteProperty:Eh,has:kh,ownKeys:Th},Sh={get:bh,set(t,e){return!0},deleteProperty(t,e){return!0}},Rh=De({},Fl,{get:yh,set:Ih}),Gi=t=>t,Ns=t=>Reflect.getPrototypeOf(t);function Vr(t,e,n=!1,r=!1){t=t.__v_raw;const s=ee(t),i=ee(e);n||(e!==i&&ze(s,"get",e),ze(s,"get",i));const{has:o}=Ns(s),a=r?Gi:n?Qi:dr;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function zr(t,e=!1){const n=this.__v_raw,r=ee(n),s=ee(t);return e||(t!==s&&ze(r,"has",t),ze(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function jr(t,e=!1){return t=t.__v_raw,!e&&ze(ee(t),"iterate",an),Reflect.get(t,"size",t)}function zo(t){t=ee(t);const e=ee(this);return Ns(e).has.call(e,t)||(e.add(t),Rt(e,"add",t,t)),this}function jo(t,e){e=ee(e);const n=ee(this),{has:r,get:s}=Ns(n);let i=r.call(n,t);i||(t=ee(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?fr(e,o)&&Rt(n,"set",t,e):Rt(n,"add",t,e),this}function Ho(t){const e=ee(this),{has:n,get:r}=Ns(e);let s=n.call(e,t);s||(t=ee(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Rt(e,"delete",t,void 0),i}function qo(){const t=ee(this),e=t.size!==0,n=t.clear();return e&&Rt(t,"clear",void 0,void 0),n}function Hr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ee(o),l=e?Gi:t?Qi:dr;return!t&&ze(a,"iterate",an),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function qr(t,e,n){return function(...r){const s=this.__v_raw,i=ee(s),o=xn(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?Gi:e?Qi:dr;return!e&&ze(i,"iterate",l?pi:an),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Dt(t){return function(...e){return t==="delete"?!1:this}}function xh(){const t={get(i){return Vr(this,i)},get size(){return jr(this)},has:zr,add:zo,set:jo,delete:Ho,clear:qo,forEach:Hr(!1,!1)},e={get(i){return Vr(this,i,!1,!0)},get size(){return jr(this)},has:zr,add:zo,set:jo,delete:Ho,clear:qo,forEach:Hr(!1,!0)},n={get(i){return Vr(this,i,!0)},get size(){return jr(this,!0)},has(i){return zr.call(this,i,!0)},add:Dt("add"),set:Dt("set"),delete:Dt("delete"),clear:Dt("clear"),forEach:Hr(!0,!1)},r={get(i){return Vr(this,i,!0,!0)},get size(){return jr(this,!0)},has(i){return zr.call(this,i,!0)},add:Dt("add"),set:Dt("set"),delete:Dt("delete"),clear:Dt("clear"),forEach:Hr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=qr(i,!1,!1),n[i]=qr(i,!0,!1),e[i]=qr(i,!1,!0),r[i]=qr(i,!0,!0)}),[t,n,e,r]}const[Ah,Ch,Ph,Oh]=xh();function Yi(t,e){const n=e?t?Oh:Ph:t?Ch:Ah;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Z(n,s)&&s in r?n:r,s,i)}const Nh={get:Yi(!1,!1)},Dh={get:Yi(!1,!0)},Mh={get:Yi(!0,!1)},Bl=new WeakMap,Vl=new WeakMap,zl=new WeakMap,Lh=new WeakMap;function $h(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Uh(t){return t.__v_skip||!Object.isExtensible(t)?0:$h(lh(t))}function Cr(t){return Mn(t)?t:Ji(t,!1,Fl,Nh,Bl)}function Fh(t){return Ji(t,!1,Rh,Dh,Vl)}function jl(t){return Ji(t,!0,Sh,Mh,zl)}function Ji(t,e,n,r,s){if(!de(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Uh(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function An(t){return Mn(t)?An(t.__v_raw):!!(t&&t.__v_isReactive)}function Mn(t){return!!(t&&t.__v_isReadonly)}function us(t){return!!(t&&t.__v_isShallow)}function Hl(t){return An(t)||Mn(t)}function ee(t){const e=t&&t.__v_raw;return e?ee(e):t}function ql(t){return ls(t,"__v_skip",!0),t}const dr=t=>de(t)?Cr(t):t,Qi=t=>de(t)?jl(t):t;function Wl(t){qt&&Ze&&(t=ee(t),Ll(t.dep||(t.dep=qi())))}function Kl(t,e){t=ee(t),t.dep&&gi(t.dep)}function Pe(t){return!!(t&&t.__v_isRef===!0)}function pr(t){return Gl(t,!1)}function Bh(t){return Gl(t,!0)}function Gl(t,e){return Pe(t)?t:new Vh(t,e)}class Vh{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ee(e),this._value=n?e:dr(e)}get value(){return Wl(this),this._value}set value(e){const n=this.__v_isShallow||us(e)||Mn(e);e=n?e:ee(e),fr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:dr(e),Kl(this))}}function qe(t){return Pe(t)?t.value:t}const zh={get:(t,e,n)=>qe(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Pe(s)&&!Pe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Yl(t){return An(t)?t:new Proxy(t,zh)}var Jl;class jh{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Jl]=!1,this._dirty=!0,this.effect=new Wi(e,()=>{this._dirty||(this._dirty=!0,Kl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ee(this);return Wl(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Jl="__v_isReadonly";function Hh(t,e,n=!1){let r,s;const i=Y(t);return i?(r=t,s=et):(r=t.get,s=t.set),new jh(r,s,i||!s,n)}function Wt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Pr(i,e,n)}return s}function tt(t,e,n,r){if(Y(t)){const i=Wt(t,e,n,r);return i&&ji(i)&&i.catch(o=>{Pr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(tt(t[i],e,n,r));return s}function Pr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Wt(l,null,10,[t,o,a]);return}}qh(t,n,s,r)}function qh(t,e,n,r=!0){console.error(t)}let gr=!1,mi=!1;const Ce=[];let ft=0;const Cn=[];let vt=null,nn=0;const Ql=Promise.resolve();let Zi=null;function Zl(t){const e=Zi||Ql;return t?e.then(this?t.bind(this):t):e}function Wh(t){let e=ft+1,n=Ce.length;for(;e<n;){const r=e+n>>>1;mr(Ce[r])<t?e=r+1:n=r}return e}function Xi(t){(!Ce.length||!Ce.includes(t,gr&&t.allowRecurse?ft+1:ft))&&(t.id==null?Ce.push(t):Ce.splice(Wh(t.id),0,t),Xl())}function Xl(){!gr&&!mi&&(mi=!0,Zi=Ql.then(nc))}function Kh(t){const e=Ce.indexOf(t);e>ft&&Ce.splice(e,1)}function ec(t){H(t)?Cn.push(...t):(!vt||!vt.includes(t,t.allowRecurse?nn+1:nn))&&Cn.push(t),Xl()}function Wo(t,e=gr?ft+1:0){for(;e<Ce.length;e++){const n=Ce[e];n&&n.pre&&(Ce.splice(e,1),e--,n())}}function tc(t){if(Cn.length){const e=[...new Set(Cn)];if(Cn.length=0,vt){vt.push(...e);return}for(vt=e,vt.sort((n,r)=>mr(n)-mr(r)),nn=0;nn<vt.length;nn++)vt[nn]();vt=null,nn=0}}const mr=t=>t.id==null?1/0:t.id,Gh=(t,e)=>{const n=mr(t)-mr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function nc(t){mi=!1,gr=!0,Ce.sort(Gh);const e=et;try{for(ft=0;ft<Ce.length;ft++){const n=Ce[ft];n&&n.active!==!1&&Wt(n,null,14)}}finally{ft=0,Ce.length=0,tc(),gr=!1,Zi=null,(Ce.length||Cn.length)&&nc()}}function Yh(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||le;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||le;d&&(s=n.map(g=>g.trim())),h&&(s=n.map(cs))}let a,l=r[a=Qs(e)]||r[a=Qs(Dn(e))];!l&&i&&(l=r[a=Qs(Hn(e))]),l&&tt(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,tt(c,t,6,s)}}function rc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!Y(t)){const l=c=>{const u=rc(c,e,!0);u&&(a=!0,De(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(de(t)&&r.set(t,null),null):(H(i)?i.forEach(l=>o[l]=null):De(o,i),de(t)&&r.set(t,o),o)}function Ds(t,e){return!t||!Cs(e)?!1:(e=e.slice(2).replace(/Once$/,""),Z(t,e[0].toLowerCase()+e.slice(1))||Z(t,Hn(e))||Z(t,e))}let Xe=null,Ms=null;function hs(t){const e=Xe;return Xe=t,Ms=t&&t.type.__scopeId||null,e}function Jh(t){Ms=t}function Qh(){Ms=null}function rn(t,e=Xe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ra(-1);const i=hs(e),o=t(...s);return hs(i),r._d&&ra(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Zs(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:g,ctx:b,inheritAttrs:P}=t;let T,I;const y=hs(t);try{if(n.shapeFlag&4){const B=s||r;T=Je(u.call(B,B,h,i,g,d,b)),I=l}else{const B=e;T=Je(B.length>1?B(i,{attrs:l,slots:a,emit:c}):B(i,null)),I=e.props?l:Xh(l)}}catch(B){rr.length=0,Pr(B,t,1),T=me(cn)}let C=T;if(I&&P!==!1){const B=Object.keys(I),{shapeFlag:W}=C;B.length&&W&7&&(o&&B.some(Bi)&&(I=ef(I,o)),C=$n(C,I))}return n.dirs&&(C=$n(C),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),T=C,hs(y),T}function Zh(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(ps(r)){if(r.type!==cn||r.children==="v-if"){if(e)return;e=r}}else return}return e}const Xh=t=>{let e;for(const n in t)(n==="class"||n==="style"||Cs(n))&&((e||(e={}))[n]=t[n]);return e},ef=(t,e)=>{const n={};for(const r in t)(!Bi(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function tf(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ko(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!Ds(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ko(r,o,c):!0:!!o;return!1}function Ko(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ds(n,i))return!0}return!1}function eo({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const nf=t=>t.__isSuspense,rf={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,l,c){t==null?of(e,n,r,s,i,o,a,l,c):af(t,e,n,r,s,o,a,l,c)},hydrate:lf,create:to,normalize:cf},sf=rf;function _r(t,e){const n=t.props&&t.props[e];Y(n)&&n()}function of(t,e,n,r,s,i,o,a,l){const{p:c,o:{createElement:u}}=l,h=u("div"),d=t.suspense=to(t,s,r,e,h,n,i,o,a,l);c(null,d.pendingBranch=t.ssContent,h,null,r,d,i,o),d.deps>0?(_r(t,"onPending"),_r(t,"onFallback"),c(null,t.ssFallback,e,n,r,null,i,o),Pn(d,t.ssFallback)):d.resolve()}function af(t,e,n,r,s,i,o,a,{p:l,um:c,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const d=e.ssContent,g=e.ssFallback,{activeBranch:b,pendingBranch:P,isInFallback:T,isHydrating:I}=h;if(P)h.pendingBranch=d,Bt(d,P)?(l(P,d,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():T&&(l(b,g,n,r,s,null,i,o,a),Pn(h,g))):(h.pendingId++,I?(h.isHydrating=!1,h.activeBranch=P):c(P,s,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),T?(l(null,d,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0?h.resolve():(l(b,g,n,r,s,null,i,o,a),Pn(h,g))):b&&Bt(d,b)?(l(b,d,n,r,s,h,i,o,a),h.resolve(!0)):(l(null,d,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0&&h.resolve()));else if(b&&Bt(d,b))l(b,d,n,r,s,h,i,o,a),Pn(h,d);else if(_r(e,"onPending"),h.pendingBranch=d,h.pendingId++,l(null,d,h.hiddenContainer,null,s,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:y,pendingId:C}=h;y>0?setTimeout(()=>{h.pendingId===C&&h.fallback(g)},y):y===0&&h.fallback(g)}}function to(t,e,n,r,s,i,o,a,l,c,u=!1){const{p:h,m:d,um:g,n:b,o:{parentNode:P,remove:T}}=c,I=cs(t.props&&t.props.timeout),y={vnode:t,parent:e,parentComponent:n,isSVG:o,container:r,hiddenContainer:s,anchor:i,deps:0,pendingId:0,timeout:typeof I=="number"?I:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(C=!1){const{vnode:B,activeBranch:W,pendingBranch:K,pendingId:se,effects:pe,parentComponent:ge,container:Ae}=y;if(y.isHydrating)y.isHydrating=!1;else if(!C){const yt=W&&K.transition&&K.transition.mode==="out-in";yt&&(W.transition.afterLeave=()=>{se===y.pendingId&&d(K,Ae,at,0)});let{anchor:at}=y;W&&(at=b(W),g(W,ge,y,!0)),yt||d(K,Ae,at,0)}Pn(y,K),y.pendingBranch=null,y.isInFallback=!1;let Ie=y.parent,Me=!1;for(;Ie;){if(Ie.pendingBranch){Ie.effects.push(...pe),Me=!0;break}Ie=Ie.parent}Me||ec(pe),y.effects=[],_r(B,"onResolve")},fallback(C){if(!y.pendingBranch)return;const{vnode:B,activeBranch:W,parentComponent:K,container:se,isSVG:pe}=y;_r(B,"onFallback");const ge=b(W),Ae=()=>{!y.isInFallback||(h(null,C,se,ge,K,null,pe,a,l),Pn(y,C))},Ie=C.transition&&C.transition.mode==="out-in";Ie&&(W.transition.afterLeave=Ae),y.isInFallback=!0,g(W,K,null,!0),Ie||Ae()},move(C,B,W){y.activeBranch&&d(y.activeBranch,C,B,W),y.container=C},next(){return y.activeBranch&&b(y.activeBranch)},registerDep(C,B){const W=!!y.pendingBranch;W&&y.deps++;const K=C.vnode.el;C.asyncDep.catch(se=>{Pr(se,C,0)}).then(se=>{if(C.isUnmounted||y.isUnmounted||y.pendingId!==C.suspenseId)return;C.asyncResolved=!0;const{vnode:pe}=C;Ii(C,se,!1),K&&(pe.el=K);const ge=!K&&C.subTree.el;B(C,pe,P(K||C.subTree.el),K?null:b(C.subTree),y,o,l),ge&&T(ge),eo(C,pe.el),W&&--y.deps===0&&y.resolve()})},unmount(C,B){y.isUnmounted=!0,y.activeBranch&&g(y.activeBranch,n,C,B),y.pendingBranch&&g(y.pendingBranch,n,C,B)}};return y}function lf(t,e,n,r,s,i,o,a,l){const c=e.suspense=to(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,i,o);return c.deps===0&&c.resolve(),u}function cf(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=Go(r?n.default:n),t.ssFallback=r?Go(n.fallback):me(cn)}function Go(t){let e;if(Y(t)){const n=Ln&&t._c;n&&(t._d=!1,nt()),t=t(),n&&(t._d=!0,e=Ke,yc())}return H(t)&&(t=Zh(t)),t=Je(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function uf(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):ec(t)}function Pn(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,s=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=s,eo(r,s))}function Xr(t,e){if(Re){let n=Re.provides;const r=Re.parent&&Re.parent.provides;r===n&&(n=Re.provides=Object.create(r)),n[t]=e}}function kt(t,e,n=!1){const r=Re||Xe;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Y(e)?e.call(r.proxy):e}}const Yo={};function es(t,e,n){return sc(t,e,n)}function sc(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=le){const a=Re;let l,c=!1,u=!1;if(Pe(t)?(l=()=>t.value,c=us(t)):An(t)?(l=()=>t,r=!0):H(t)?(u=!0,c=t.some(I=>An(I)||us(I)),l=()=>t.map(I=>{if(Pe(I))return I.value;if(An(I))return on(I);if(Y(I))return Wt(I,a,2)})):Y(t)?e?l=()=>Wt(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),tt(t,a,3,[d])}:l=et,e&&r){const I=l;l=()=>on(I())}let h,d=I=>{h=T.onStop=()=>{Wt(I,a,4)}};if(yr)return d=et,e?n&&tt(e,a,3,[l(),u?[]:void 0,d]):l(),et;let g=u?[]:Yo;const b=()=>{if(!!T.active)if(e){const I=T.run();(r||c||(u?I.some((y,C)=>fr(y,g[C])):fr(I,g)))&&(h&&h(),tt(e,a,3,[I,g===Yo?void 0:g,d]),g=I)}else T.run()};b.allowRecurse=!!e;let P;s==="sync"?P=b:s==="post"?P=()=>Le(b,a&&a.suspense):(b.pre=!0,a&&(b.id=a.uid),P=()=>Xi(b));const T=new Wi(l,P);return e?n?b():g=T.run():s==="post"?Le(T.run.bind(T),a&&a.suspense):T.run(),()=>{T.stop(),a&&a.scope&&Vi(a.scope.effects,T)}}function hf(t,e,n){const r=this.proxy,s=Te(t)?t.includes(".")?ic(r,t):()=>r[t]:t.bind(r,r);let i;Y(e)?i=e:(i=e.handler,n=e);const o=Re;Qt(this);const a=sc(s,i.bind(r),n);return o?Qt(o):Kt(),a}function ic(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function on(t,e){if(!de(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Pe(t))on(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)on(t[n],e);else if(Al(t)||xn(t))t.forEach(n=>{on(n,e)});else if(Pl(t))for(const n in t)on(t[n],e);return t}function oc(t){return Y(t)?{setup:t,name:t.name}:t}const ts=t=>!!t.type.__asyncLoader,ac=t=>t.type.__isKeepAlive;function ff(t,e){lc(t,"a",e)}function df(t,e){lc(t,"da",e)}function lc(t,e,n=Re){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ls(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ac(s.parent.vnode)&&pf(r,e,n,s),s=s.parent}}function pf(t,e,n,r){const s=Ls(e,t,r,!0);cc(()=>{Vi(r[e],s)},n)}function Ls(t,e,n=Re,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;qn(),Qt(n);const a=tt(e,n,t,o);return Kt(),Wn(),a});return r?s.unshift(i):s.push(i),i}}const Ot=t=>(e,n=Re)=>(!yr||t==="sp")&&Ls(t,e,n),gf=Ot("bm"),mf=Ot("m"),_f=Ot("bu"),yf=Ot("u"),bf=Ot("bum"),cc=Ot("um"),wf=Ot("sp"),vf=Ot("rtg"),If=Ot("rtc");function Ef(t,e=Re){Ls("ec",t,e)}function Jo(t,e){const n=Xe;if(n===null)return t;const r=Us(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=le]=e[i];Y(o)&&(o={mounted:o,updated:o}),o.deep&&on(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function Zt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(qn(),tt(l,n,8,[t.el,a,t,e]),Wn())}}const kf=Symbol();function Tf(t,e,n,r){let s;const i=n&&n[r];if(H(t)||Te(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(de(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const _i=t=>t?vc(t)?Us(t)||t.proxy:_i(t.parent):null,fs=De(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>_i(t.parent),$root:t=>_i(t.root),$emit:t=>t.emit,$options:t=>no(t),$forceUpdate:t=>t.f||(t.f=()=>Xi(t.update)),$nextTick:t=>t.n||(t.n=Zl.bind(t.proxy)),$watch:t=>hf.bind(t)}),Sf={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==le&&Z(r,e))return o[e]=1,r[e];if(s!==le&&Z(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&Z(c,e))return o[e]=3,i[e];if(n!==le&&Z(n,e))return o[e]=4,n[e];yi&&(o[e]=0)}}const u=fs[e];let h,d;if(u)return e==="$attrs"&&ze(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==le&&Z(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Z(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==le&&Z(s,e)?(s[e]=n,!0):r!==le&&Z(r,e)?(r[e]=n,!0):Z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==le&&Z(t,o)||e!==le&&Z(e,o)||(a=i[0])&&Z(a,o)||Z(r,o)||Z(fs,o)||Z(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let yi=!0;function Rf(t){const e=no(t),n=t.proxy,r=t.ctx;yi=!1,e.beforeCreate&&Qo(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:b,activated:P,deactivated:T,beforeDestroy:I,beforeUnmount:y,destroyed:C,unmounted:B,render:W,renderTracked:K,renderTriggered:se,errorCaptured:pe,serverPrefetch:ge,expose:Ae,inheritAttrs:Ie,components:Me,directives:yt,filters:at}=e;if(c&&xf(c,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ue in o){const ie=o[ue];Y(ie)&&(r[ue]=ie.bind(n))}if(s){const ue=s.call(n,n);de(ue)&&(t.data=Cr(ue))}if(yi=!0,i)for(const ue in i){const ie=i[ue],$e=Y(ie)?ie.bind(n,n):Y(ie.get)?ie.get.bind(n,n):et,bn=!Y(ie)&&Y(ie.set)?ie.set.bind(n):et,bt=We({get:$e,set:bn});Object.defineProperty(r,ue,{enumerable:!0,configurable:!0,get:()=>bt.value,set:lt=>bt.value=lt})}if(a)for(const ue in a)uc(a[ue],r,n,ue);if(l){const ue=Y(l)?l.call(n):l;Reflect.ownKeys(ue).forEach(ie=>{Xr(ie,ue[ie])})}u&&Qo(u,t,"c");function be(ue,ie){H(ie)?ie.forEach($e=>ue($e.bind(n))):ie&&ue(ie.bind(n))}if(be(gf,h),be(mf,d),be(_f,g),be(yf,b),be(ff,P),be(df,T),be(Ef,pe),be(If,K),be(vf,se),be(bf,y),be(cc,B),be(wf,ge),H(Ae))if(Ae.length){const ue=t.exposed||(t.exposed={});Ae.forEach(ie=>{Object.defineProperty(ue,ie,{get:()=>n[ie],set:$e=>n[ie]=$e})})}else t.exposed||(t.exposed={});W&&t.render===et&&(t.render=W),Ie!=null&&(t.inheritAttrs=Ie),Me&&(t.components=Me),yt&&(t.directives=yt)}function xf(t,e,n=et,r=!1){H(t)&&(t=bi(t));for(const s in t){const i=t[s];let o;de(i)?"default"in i?o=kt(i.from||s,i.default,!0):o=kt(i.from||s):o=kt(i),Pe(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Qo(t,e,n){tt(H(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function uc(t,e,n,r){const s=r.includes(".")?ic(n,r):()=>n[r];if(Te(t)){const i=e[t];Y(i)&&es(s,i)}else if(Y(t))es(s,t.bind(n));else if(de(t))if(H(t))t.forEach(i=>uc(i,e,n,r));else{const i=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(i)&&es(s,i,t)}}function no(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>ds(l,c,o,!0)),ds(l,e,o)),de(e)&&i.set(e,l),l}function ds(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ds(t,i,n,!0),s&&s.forEach(o=>ds(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Af[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Af={data:Zo,props:en,emits:en,methods:en,computed:en,beforeCreate:Ne,created:Ne,beforeMount:Ne,mounted:Ne,beforeUpdate:Ne,updated:Ne,beforeDestroy:Ne,beforeUnmount:Ne,destroyed:Ne,unmounted:Ne,activated:Ne,deactivated:Ne,errorCaptured:Ne,serverPrefetch:Ne,components:en,directives:en,watch:Pf,provide:Zo,inject:Cf};function Zo(t,e){return e?t?function(){return De(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function Cf(t,e){return en(bi(t),bi(e))}function bi(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ne(t,e){return t?[...new Set([].concat(t,e))]:e}function en(t,e){return t?De(De(Object.create(null),t),e):e}function Pf(t,e){if(!t)return e;if(!e)return t;const n=De(Object.create(null),t);for(const r in e)n[r]=Ne(t[r],e[r]);return n}function Of(t,e,n,r=!1){const s={},i={};ls(i,$s,1),t.propsDefaults=Object.create(null),hc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Fh(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Nf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ee(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Ds(t.emitsOptions,d))continue;const g=e[d];if(l)if(Z(i,d))g!==i[d]&&(i[d]=g,c=!0);else{const b=Dn(d);s[b]=wi(l,a,b,g,t,!1)}else g!==i[d]&&(i[d]=g,c=!0)}}}else{hc(t,e,s,i)&&(c=!0);let u;for(const h in a)(!e||!Z(e,h)&&((u=Hn(h))===h||!Z(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=wi(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!Z(e,h)&&!0)&&(delete i[h],c=!0)}c&&Rt(t,"set","$attrs")}function hc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Qr(l))continue;const c=e[l];let u;s&&Z(s,u=Dn(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:Ds(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=ee(n),c=a||le;for(let u=0;u<i.length;u++){const h=i[u];n[h]=wi(s,l,h,c[h],t,!Z(c,h))}}return o}function wi(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Z(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&Y(l)){const{propsDefaults:c}=s;n in c?r=c[n]:(Qt(s),r=c[n]=l.call(null,e),Kt())}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Hn(n))&&(r=!0))}return r}function fc(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!Y(t)){const u=h=>{l=!0;const[d,g]=fc(h,e,!0);De(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return de(t)&&r.set(t,Rn),Rn;if(H(i))for(let u=0;u<i.length;u++){const h=Dn(i[u]);Xo(h)&&(o[h]=le)}else if(i)for(const u in i){const h=Dn(u);if(Xo(h)){const d=i[u],g=o[h]=H(d)||Y(d)?{type:d}:d;if(g){const b=na(Boolean,g.type),P=na(String,g.type);g[0]=b>-1,g[1]=P<0||b<P,(b>-1||Z(g,"default"))&&a.push(h)}}}const c=[o,a];return de(t)&&r.set(t,c),c}function Xo(t){return t[0]!=="$"}function ea(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function ta(t,e){return ea(t)===ea(e)}function na(t,e){return H(e)?e.findIndex(n=>ta(n,t)):Y(e)&&ta(e,t)?0:-1}const dc=t=>t[0]==="_"||t==="$stable",ro=t=>H(t)?t.map(Je):[Je(t)],Df=(t,e,n)=>{if(e._n)return e;const r=rn((...s)=>ro(e(...s)),n);return r._c=!1,r},pc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(dc(s))continue;const i=t[s];if(Y(i))e[s]=Df(s,i,r);else if(i!=null){const o=ro(i);e[s]=()=>o}}},gc=(t,e)=>{const n=ro(e);t.slots.default=()=>n},Mf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ee(e),ls(e,"_",n)):pc(e,t.slots={})}else t.slots={},e&&gc(t,e);ls(t.slots,$s,1)},Lf=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=le;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(De(s,e),!n&&a===1&&delete s._):(i=!e.$stable,pc(e,s)),o=e}else e&&(gc(t,e),o={default:1});if(i)for(const a in s)!dc(a)&&!(a in o)&&delete s[a]};function mc(){return{app:null,config:{isNativeTag:ih,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $f=0;function Uf(t,e){return function(r,s=null){Y(r)||(r=Object.assign({},r)),s!=null&&!de(s)&&(s=null);const i=mc(),o=new Set;let a=!1;const l=i.app={_uid:$f++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:rd,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&Y(c.install)?(o.add(c),c.install(l,...u)):Y(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const d=me(r,s);return d.appContext=i,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Us(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l}};return l}}function vi(t,e,n,r,s=!1){if(H(t)){t.forEach((d,g)=>vi(d,e&&(H(e)?e[g]:e),n,r,s));return}if(ts(r)&&!s)return;const i=r.shapeFlag&4?Us(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===le?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Te(c)?(u[c]=null,Z(h,c)&&(h[c]=null)):Pe(c)&&(c.value=null)),Y(l))Wt(l,a,12,[o,u]);else{const d=Te(l),g=Pe(l);if(d||g){const b=()=>{if(t.f){const P=d?u[l]:l.value;s?H(P)&&Vi(P,i):H(P)?P.includes(i)||P.push(i):d?(u[l]=[i],Z(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,Z(h,l)&&(h[l]=o)):g&&(l.value=o,t.k&&(u[t.k]=o))};o?(b.id=-1,Le(b,n)):b()}}}const Le=uf;function Ff(t){return Bf(t)}function Bf(t,e){const n=hh();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=et,cloneNode:b,insertStaticContent:P}=t,T=(f,p,m,v=null,w=null,S=null,A=!1,k=null,R=!!p.dynamicChildren)=>{if(f===p)return;f&&!Bt(f,p)&&(v=M(f),je(f,w,S,!0),f=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:E,ref:L,shapeFlag:N}=p;switch(E){case so:I(f,p,m,v);break;case cn:y(f,p,m,v);break;case Xs:f==null&&C(p,m,v,A);break;case Fe:yt(f,p,m,v,w,S,A,k,R);break;default:N&1?K(f,p,m,v,w,S,A,k,R):N&6?at(f,p,m,v,w,S,A,k,R):(N&64||N&128)&&E.process(f,p,m,v,w,S,A,k,R,he)}L!=null&&w&&vi(L,f&&f.ref,S,p||f,!p)},I=(f,p,m,v)=>{if(f==null)r(p.el=a(p.children),m,v);else{const w=p.el=f.el;p.children!==f.children&&c(w,p.children)}},y=(f,p,m,v)=>{f==null?r(p.el=l(p.children||""),m,v):p.el=f.el},C=(f,p,m,v)=>{[f.el,f.anchor]=P(f.children,p,m,v,f.el,f.anchor)},B=({el:f,anchor:p},m,v)=>{let w;for(;f&&f!==p;)w=d(f),r(f,m,v),f=w;r(p,m,v)},W=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=d(f),s(f),f=m;s(p)},K=(f,p,m,v,w,S,A,k,R)=>{A=A||p.type==="svg",f==null?se(p,m,v,w,S,A,k,R):Ae(f,p,w,S,A,k,R)},se=(f,p,m,v,w,S,A,k)=>{let R,E;const{type:L,props:N,shapeFlag:$,transition:j,patchFlag:X,dirs:oe}=f;if(f.el&&b!==void 0&&X===-1)R=f.el=b(f.el);else{if(R=f.el=o(f.type,S,N&&N.is,N),$&8?u(R,f.children):$&16&&ge(f.children,R,null,v,w,S&&L!=="foreignObject",A,k),oe&&Zt(f,null,v,"created"),N){for(const fe in N)fe!=="value"&&!Qr(fe)&&i(R,fe,null,N[fe],S,f.children,v,w,x);"value"in N&&i(R,"value",null,N.value),(E=N.onVnodeBeforeMount)&&ut(E,v,f)}pe(R,f,f.scopeId,A,v)}oe&&Zt(f,null,v,"beforeMount");const ae=(!w||w&&!w.pendingBranch)&&j&&!j.persisted;ae&&j.beforeEnter(R),r(R,p,m),((E=N&&N.onVnodeMounted)||ae||oe)&&Le(()=>{E&&ut(E,v,f),ae&&j.enter(R),oe&&Zt(f,null,v,"mounted")},w)},pe=(f,p,m,v,w)=>{if(m&&g(f,m),v)for(let S=0;S<v.length;S++)g(f,v[S]);if(w){let S=w.subTree;if(p===S){const A=w.vnode;pe(f,A,A.scopeId,A.slotScopeIds,w.parent)}}},ge=(f,p,m,v,w,S,A,k,R=0)=>{for(let E=R;E<f.length;E++){const L=f[E]=k?$t(f[E]):Je(f[E]);T(null,L,p,m,v,w,S,A,k)}},Ae=(f,p,m,v,w,S,A)=>{const k=p.el=f.el;let{patchFlag:R,dynamicChildren:E,dirs:L}=p;R|=f.patchFlag&16;const N=f.props||le,$=p.props||le;let j;m&&Xt(m,!1),(j=$.onVnodeBeforeUpdate)&&ut(j,m,p,f),L&&Zt(p,f,m,"beforeUpdate"),m&&Xt(m,!0);const X=w&&p.type!=="foreignObject";if(E?Ie(f.dynamicChildren,E,k,m,v,X,S):A||$e(f,p,k,null,m,v,X,S,!1),R>0){if(R&16)Me(k,p,N,$,m,v,w);else if(R&2&&N.class!==$.class&&i(k,"class",null,$.class,w),R&4&&i(k,"style",N.style,$.style,w),R&8){const oe=p.dynamicProps;for(let ae=0;ae<oe.length;ae++){const fe=oe[ae],Ye=N[fe],wn=$[fe];(wn!==Ye||fe==="value")&&i(k,fe,Ye,wn,w,f.children,m,v,x)}}R&1&&f.children!==p.children&&u(k,p.children)}else!A&&E==null&&Me(k,p,N,$,m,v,w);((j=$.onVnodeUpdated)||L)&&Le(()=>{j&&ut(j,m,p,f),L&&Zt(p,f,m,"updated")},v)},Ie=(f,p,m,v,w,S,A)=>{for(let k=0;k<p.length;k++){const R=f[k],E=p[k],L=R.el&&(R.type===Fe||!Bt(R,E)||R.shapeFlag&70)?h(R.el):m;T(R,E,L,null,v,w,S,A,!0)}},Me=(f,p,m,v,w,S,A)=>{if(m!==v){for(const k in v){if(Qr(k))continue;const R=v[k],E=m[k];R!==E&&k!=="value"&&i(f,k,E,R,A,p.children,w,S,x)}if(m!==le)for(const k in m)!Qr(k)&&!(k in v)&&i(f,k,m[k],null,A,p.children,w,S,x);"value"in v&&i(f,"value",m.value,v.value)}},yt=(f,p,m,v,w,S,A,k,R)=>{const E=p.el=f?f.el:a(""),L=p.anchor=f?f.anchor:a("");let{patchFlag:N,dynamicChildren:$,slotScopeIds:j}=p;j&&(k=k?k.concat(j):j),f==null?(r(E,m,v),r(L,m,v),ge(p.children,m,L,w,S,A,k,R)):N>0&&N&64&&$&&f.dynamicChildren?(Ie(f.dynamicChildren,$,m,w,S,A,k),(p.key!=null||w&&p===w.subTree)&&_c(f,p,!0)):$e(f,p,m,L,w,S,A,k,R)},at=(f,p,m,v,w,S,A,k,R)=>{p.slotScopeIds=k,f==null?p.shapeFlag&512?w.ctx.activate(p,m,v,A,R):yn(p,m,v,w,S,A,R):be(f,p,R)},yn=(f,p,m,v,w,S,A)=>{const k=f.component=Yf(f,v,w);if(ac(f)&&(k.ctx.renderer=he),Qf(k),k.asyncDep){if(w&&w.registerDep(k,ue),!f.el){const R=k.subTree=me(cn);y(null,R,p,m)}return}ue(k,f,p,m,w,S,A)},be=(f,p,m)=>{const v=p.component=f.component;if(tf(f,p,m))if(v.asyncDep&&!v.asyncResolved){ie(v,p,m);return}else v.next=p,Kh(v.update),v.update();else p.el=f.el,v.vnode=p},ue=(f,p,m,v,w,S,A)=>{const k=()=>{if(f.isMounted){let{next:L,bu:N,u:$,parent:j,vnode:X}=f,oe=L,ae;Xt(f,!1),L?(L.el=X.el,ie(f,L,A)):L=X,N&&Zr(N),(ae=L.props&&L.props.onVnodeBeforeUpdate)&&ut(ae,j,L,X),Xt(f,!0);const fe=Zs(f),Ye=f.subTree;f.subTree=fe,T(Ye,fe,h(Ye.el),M(Ye),f,w,S),L.el=fe.el,oe===null&&eo(f,fe.el),$&&Le($,w),(ae=L.props&&L.props.onVnodeUpdated)&&Le(()=>ut(ae,j,L,X),w)}else{let L;const{el:N,props:$}=p,{bm:j,m:X,parent:oe}=f,ae=ts(p);if(Xt(f,!1),j&&Zr(j),!ae&&(L=$&&$.onVnodeBeforeMount)&&ut(L,oe,p),Xt(f,!0),N&&G){const fe=()=>{f.subTree=Zs(f),G(N,f.subTree,f,w,null)};ae?p.type.__asyncLoader().then(()=>!f.isUnmounted&&fe()):fe()}else{const fe=f.subTree=Zs(f);T(null,fe,m,v,f,w,S),p.el=fe.el}if(X&&Le(X,w),!ae&&(L=$&&$.onVnodeMounted)){const fe=p;Le(()=>ut(L,oe,fe),w)}(p.shapeFlag&256||oe&&ts(oe.vnode)&&oe.vnode.shapeFlag&256)&&f.a&&Le(f.a,w),f.isMounted=!0,p=m=v=null}},R=f.effect=new Wi(k,()=>Xi(E),f.scope),E=f.update=()=>R.run();E.id=f.uid,Xt(f,!0),E()},ie=(f,p,m)=>{p.component=f;const v=f.vnode.props;f.vnode=p,f.next=null,Nf(f,p.props,v,m),Lf(f,p.children,m),qn(),Wo(),Wn()},$e=(f,p,m,v,w,S,A,k,R=!1)=>{const E=f&&f.children,L=f?f.shapeFlag:0,N=p.children,{patchFlag:$,shapeFlag:j}=p;if($>0){if($&128){bt(E,N,m,v,w,S,A,k,R);return}else if($&256){bn(E,N,m,v,w,S,A,k,R);return}}j&8?(L&16&&x(E,w,S),N!==E&&u(m,N)):L&16?j&16?bt(E,N,m,v,w,S,A,k,R):x(E,w,S,!0):(L&8&&u(m,""),j&16&&ge(N,m,v,w,S,A,k,R))},bn=(f,p,m,v,w,S,A,k,R)=>{f=f||Rn,p=p||Rn;const E=f.length,L=p.length,N=Math.min(E,L);let $;for($=0;$<N;$++){const j=p[$]=R?$t(p[$]):Je(p[$]);T(f[$],j,m,null,w,S,A,k,R)}E>L?x(f,w,S,!0,!1,N):ge(p,m,v,w,S,A,k,R,N)},bt=(f,p,m,v,w,S,A,k,R)=>{let E=0;const L=p.length;let N=f.length-1,$=L-1;for(;E<=N&&E<=$;){const j=f[E],X=p[E]=R?$t(p[E]):Je(p[E]);if(Bt(j,X))T(j,X,m,null,w,S,A,k,R);else break;E++}for(;E<=N&&E<=$;){const j=f[N],X=p[$]=R?$t(p[$]):Je(p[$]);if(Bt(j,X))T(j,X,m,null,w,S,A,k,R);else break;N--,$--}if(E>N){if(E<=$){const j=$+1,X=j<L?p[j].el:v;for(;E<=$;)T(null,p[E]=R?$t(p[E]):Je(p[E]),m,X,w,S,A,k,R),E++}}else if(E>$)for(;E<=N;)je(f[E],w,S,!0),E++;else{const j=E,X=E,oe=new Map;for(E=X;E<=$;E++){const Ue=p[E]=R?$t(p[E]):Je(p[E]);Ue.key!=null&&oe.set(Ue.key,E)}let ae,fe=0;const Ye=$-X+1;let wn=!1,Mo=0;const Zn=new Array(Ye);for(E=0;E<Ye;E++)Zn[E]=0;for(E=j;E<=N;E++){const Ue=f[E];if(fe>=Ye){je(Ue,w,S,!0);continue}let ct;if(Ue.key!=null)ct=oe.get(Ue.key);else for(ae=X;ae<=$;ae++)if(Zn[ae-X]===0&&Bt(Ue,p[ae])){ct=ae;break}ct===void 0?je(Ue,w,S,!0):(Zn[ct-X]=E+1,ct>=Mo?Mo=ct:wn=!0,T(Ue,p[ct],m,null,w,S,A,k,R),fe++)}const Lo=wn?Vf(Zn):Rn;for(ae=Lo.length-1,E=Ye-1;E>=0;E--){const Ue=X+E,ct=p[Ue],$o=Ue+1<L?p[Ue+1].el:v;Zn[E]===0?T(null,ct,m,$o,w,S,A,k,R):wn&&(ae<0||E!==Lo[ae]?lt(ct,m,$o,2):ae--)}}},lt=(f,p,m,v,w=null)=>{const{el:S,type:A,transition:k,children:R,shapeFlag:E}=f;if(E&6){lt(f.component.subTree,p,m,v);return}if(E&128){f.suspense.move(p,m,v);return}if(E&64){A.move(f,p,m,he);return}if(A===Fe){r(S,p,m);for(let N=0;N<R.length;N++)lt(R[N],p,m,v);r(f.anchor,p,m);return}if(A===Xs){B(f,p,m);return}if(v!==2&&E&1&&k)if(v===0)k.beforeEnter(S),r(S,p,m),Le(()=>k.enter(S),w);else{const{leave:N,delayLeave:$,afterLeave:j}=k,X=()=>r(S,p,m),oe=()=>{N(S,()=>{X(),j&&j()})};$?$(S,X,oe):oe()}else r(S,p,m)},je=(f,p,m,v=!1,w=!1)=>{const{type:S,props:A,ref:k,children:R,dynamicChildren:E,shapeFlag:L,patchFlag:N,dirs:$}=f;if(k!=null&&vi(k,null,m,f,!0),L&256){p.ctx.deactivate(f);return}const j=L&1&&$,X=!ts(f);let oe;if(X&&(oe=A&&A.onVnodeBeforeUnmount)&&ut(oe,p,f),L&6)D(f.component,m,v);else{if(L&128){f.suspense.unmount(m,v);return}j&&Zt(f,null,p,"beforeUnmount"),L&64?f.type.remove(f,p,m,w,he,v):E&&(S!==Fe||N>0&&N&64)?x(E,p,m,!1,!0):(S===Fe&&N&384||!w&&L&16)&&x(R,p,m),v&&Qn(f)}(X&&(oe=A&&A.onVnodeUnmounted)||j)&&Le(()=>{oe&&ut(oe,p,f),j&&Zt(f,null,p,"unmounted")},m)},Qn=f=>{const{type:p,el:m,anchor:v,transition:w}=f;if(p===Fe){_(m,v);return}if(p===Xs){W(f);return}const S=()=>{s(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:A,delayLeave:k}=w,R=()=>A(m,S);k?k(f.el,S,R):R()}else S()},_=(f,p)=>{let m;for(;f!==p;)m=d(f),s(f),f=m;s(p)},D=(f,p,m)=>{const{bum:v,scope:w,update:S,subTree:A,um:k}=f;v&&Zr(v),w.stop(),S&&(S.active=!1,je(A,f,p,m)),k&&Le(k,p),Le(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},x=(f,p,m,v=!1,w=!1,S=0)=>{for(let A=S;A<f.length;A++)je(f[A],p,m,v,w)},M=f=>f.shapeFlag&6?M(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),te=(f,p,m)=>{f==null?p._vnode&&je(p._vnode,null,null,!0):T(p._vnode||null,f,p,null,null,null,m),Wo(),tc(),p._vnode=f},he={p:T,um:je,m:lt,r:Qn,mt:yn,mc:ge,pc:$e,pbc:Ie,n:M,o:t};let J,G;return e&&([J,G]=e(he)),{render:te,hydrate:J,createApp:Uf(te,J)}}function Xt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function _c(t,e,n=!1){const r=t.children,s=e.children;if(H(r)&&H(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=$t(s[i]),a.el=o.el),n||_c(o,a))}}function Vf(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const zf=t=>t.__isTeleport,Fe=Symbol(void 0),so=Symbol(void 0),cn=Symbol(void 0),Xs=Symbol(void 0),rr=[];let Ke=null;function nt(t=!1){rr.push(Ke=t?null:[])}function yc(){rr.pop(),Ke=rr[rr.length-1]||null}let Ln=1;function ra(t){Ln+=t}function bc(t){return t.dynamicChildren=Ln>0?Ke||Rn:null,yc(),Ln>0&&Ke&&Ke.push(t),t}function Tt(t,e,n,r,s,i){return bc(_e(t,e,n,r,s,i,!0))}function jf(t,e,n,r,s){return bc(me(t,e,n,r,s,!0))}function ps(t){return t?t.__v_isVNode===!0:!1}function Bt(t,e){return t.type===e.type&&t.key===e.key}const $s="__vInternal",wc=({key:t})=>t!=null?t:null,ns=({ref:t,ref_key:e,ref_for:n})=>t!=null?Te(t)||Pe(t)||Y(t)?{i:Xe,r:t,k:e,f:!!n}:t:null;function _e(t,e=null,n=null,r=0,s=null,i=t===Fe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&wc(e),ref:e&&ns(e),scopeId:Ms,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(io(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Te(n)?8:16),Ln>0&&!o&&Ke&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ke.push(l),l}const me=Hf;function Hf(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===kf)&&(t=cn),ps(t)){const a=$n(t,e,!0);return n&&io(a,n),Ln>0&&!i&&Ke&&(a.shapeFlag&6?Ke[Ke.indexOf(t)]=a:Ke.push(a)),a.patchFlag|=-2,a}if(td(t)&&(t=t.__vccOpts),e){e=qf(e);let{class:a,style:l}=e;a&&!Te(a)&&(e.class=Fi(a)),de(l)&&(Hl(l)&&!H(l)&&(l=De({},l)),e.style=Ui(l))}const o=Te(t)?1:nf(t)?128:zf(t)?64:de(t)?4:Y(t)?2:0;return _e(t,e,n,r,s,o,i,!0)}function qf(t){return t?Hl(t)||$s in t?De({},t):t:null}function $n(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Wf(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&wc(a),ref:e&&e.ref?n&&s?H(s)?s.concat(ns(e)):[s,ns(e)]:ns(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Fe?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&$n(t.ssContent),ssFallback:t.ssFallback&&$n(t.ssFallback),el:t.el,anchor:t.anchor}}function Kn(t=" ",e=0){return me(so,null,t,e)}function Je(t){return t==null||typeof t=="boolean"?me(cn):H(t)?me(Fe,null,t.slice()):typeof t=="object"?$t(t):me(so,null,String(t))}function $t(t){return t.el===null||t.memo?t:$n(t)}function io(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),io(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!($s in e)?e._ctx=Xe:s===3&&Xe&&(Xe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:Xe},n=32):(e=String(e),r&64?(n=16,e=[Kn(e)]):n=8);t.children=e,t.shapeFlag|=n}function Wf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Fi([e.class,r.class]));else if(s==="style")e.style=Ui([e.style,r.style]);else if(Cs(s)){const i=e[s],o=r[s];o&&i!==o&&!(H(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function ut(t,e,n,r=null){tt(t,e,7,[n,r])}const Kf=mc();let Gf=0;function Yf(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Kf,i={uid:Gf++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new fh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fc(r,s),emitsOptions:rc(r,s),emit:null,emitted:null,propsDefaults:le,inheritAttrs:r.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Yh.bind(null,i),t.ce&&t.ce(i),i}let Re=null;const Jf=()=>Re||Xe,Qt=t=>{Re=t,t.scope.on()},Kt=()=>{Re&&Re.scope.off(),Re=null};function vc(t){return t.vnode.shapeFlag&4}let yr=!1;function Qf(t,e=!1){yr=e;const{props:n,children:r}=t.vnode,s=vc(t);Of(t,n,s,e),Mf(t,r);const i=s?Zf(t,e):void 0;return yr=!1,i}function Zf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ql(new Proxy(t.ctx,Sf));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?ed(t):null;Qt(t),qn();const i=Wt(r,t,0,[t.props,s]);if(Wn(),Kt(),ji(i)){if(i.then(Kt,Kt),e)return i.then(o=>{Ii(t,o,e)}).catch(o=>{Pr(o,t,0)});t.asyncDep=i}else Ii(t,i,e)}else Ic(t,e)}function Ii(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:de(e)&&(t.setupState=Yl(e)),Ic(t,n)}let sa;function Ic(t,e,n){const r=t.type;if(!t.render){if(!e&&sa&&!r.render){const s=r.template||no(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=De(De({isCustomElement:i,delimiters:a},o),l);r.render=sa(s,c)}}t.render=r.render||et}Qt(t),qn(),Rf(t),Wn(),Kt()}function Xf(t){return new Proxy(t.attrs,{get(e,n){return ze(t,"get","$attrs"),e[n]}})}function ed(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Xf(t))},slots:t.slots,emit:t.emit,expose:e}}function Us(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Yl(ql(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in fs)return fs[n](t)}}))}function td(t){return Y(t)&&"__vccOpts"in t}const We=(t,e)=>Hh(t,e,yr);function nd(t){const e=Jf();let n=t();return Kt(),ji(n)&&(n=n.catch(r=>{throw Qt(e),r})),[n,()=>Qt(e)]}function Ec(t,e,n){const r=arguments.length;return r===2?de(e)&&!H(e)?ps(e)?me(t,null,[e]):me(t,e):me(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ps(n)&&(n=[n]),me(t,e,n))}const rd="3.2.39",sd="http://www.w3.org/2000/svg",sn=typeof document<"u"?document:null,ia=sn&&sn.createElement("template"),id={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?sn.createElementNS(sd,t):sn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>sn.createTextNode(t),createComment:t=>sn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>sn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ia.innerHTML=r?`<svg>${t}</svg>`:t;const a=ia.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function od(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function ad(t,e,n){const r=t.style,s=Te(n);if(n&&!s){for(const i in n)Ei(r,i,n[i]);if(e&&!Te(e))for(const i in e)n[i]==null&&Ei(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const oa=/\s*!important$/;function Ei(t,e,n){if(H(n))n.forEach(r=>Ei(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=ld(t,e);oa.test(n)?t.setProperty(Hn(r),n.replace(oa,""),"important"):t[r]=n}}const aa=["Webkit","Moz","ms"],ei={};function ld(t,e){const n=ei[e];if(n)return n;let r=Dn(e);if(r!=="filter"&&r in t)return ei[e]=r;r=Ol(r);for(let s=0;s<aa.length;s++){const i=aa[s]+r;if(i in t)return ei[e]=i}return e}const la="http://www.w3.org/1999/xlink";function cd(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(la,e.slice(6,e.length)):t.setAttributeNS(la,e,n);else{const i=th(e);n==null||i&&!Sl(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function ud(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Sl(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[kc,hd]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let ki=0;const fd=Promise.resolve(),dd=()=>{ki=0},pd=()=>ki||(fd.then(dd),ki=kc());function En(t,e,n,r){t.addEventListener(e,n,r)}function gd(t,e,n,r){t.removeEventListener(e,n,r)}function md(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=_d(e);if(r){const c=i[e]=yd(r,s);En(t,a,c,l)}else o&&(gd(t,a,o,l),i[e]=void 0)}}const ca=/(?:Once|Passive|Capture)$/;function _d(t){let e;if(ca.test(t)){e={};let r;for(;r=t.match(ca);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Hn(t.slice(2)),e]}function yd(t,e){const n=r=>{const s=r.timeStamp||kc();(hd||s>=n.attached-1)&&tt(bd(r,n.value),e,5,[r])};return n.value=t,n.attached=pd(),n}function bd(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const ua=/^on[a-z]/,wd=(t,e,n,r,s=!1,i,o,a,l)=>{e==="class"?od(t,r,s):e==="style"?ad(t,n,r):Cs(e)?Bi(e)||md(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):vd(t,e,r,s))?ud(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),cd(t,e,r,s))};function vd(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&ua.test(e)&&Y(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ua.test(e)&&Te(n)?!1:e in t}const ha=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>Zr(e,n):e};function Id(t){t.target.composing=!0}function fa(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const da={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=ha(s);const i=r||s.props&&s.props.type==="number";En(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=cs(a)),t._assign(a)}),n&&En(t,"change",()=>{t.value=t.value.trim()}),e||(En(t,"compositionstart",Id),En(t,"compositionend",fa),En(t,"change",fa))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=ha(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&cs(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Ed=De({patchProp:wd},id);let pa;function kd(){return pa||(pa=Ff(Ed))}const Td=(...t)=>{const e=kd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Sd(r);if(!s)return;const i=e._component;!Y(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Sd(t){return Te(t)?document.querySelector(t):t}/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const kn=typeof window<"u";function Rd(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ne=Object.assign;function ti(t,e){const n={};for(const r in e){const s=e[r];n[r]=rt(s)?s.map(t):t(s)}return n}const sr=()=>{},rt=Array.isArray,xd=/\/$/,Ad=t=>t.replace(xd,"");function ni(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Nd(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Cd(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ga(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Pd(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Un(e.matched[r],n.matched[s])&&Tc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Un(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Tc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Od(t[n],e[n]))return!1;return!0}function Od(t,e){return rt(t)?ma(t,e):rt(e)?ma(e,t):t===e}function ma(t,e){return rt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Nd(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var br;(function(t){t.pop="pop",t.push="push"})(br||(br={}));var ir;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ir||(ir={}));function Dd(t){if(!t)if(kn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Ad(t)}const Md=/^[^#]+#/;function Ld(t,e){return t.replace(Md,"#")+e}function $d(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Fs=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ud(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=$d(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function _a(t,e){return(history.state?history.state.position-e:-1)+t}const Ti=new Map;function Fd(t,e){Ti.set(t,e)}function Bd(t){const e=Ti.get(t);return Ti.delete(t),e}let Vd=()=>location.protocol+"//"+location.host;function Sc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),ga(l,"")}return ga(n,t)+r+s}function zd(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const g=Sc(t,location),b=n.value,P=e.value;let T=0;if(d){if(n.value=g,e.value=d,o&&o===b){o=null;return}T=P?d.position-P.position:0}else r(g);s.forEach(I=>{I(n.value,b,{delta:T,type:br.pop,direction:T?T>0?ir.forward:ir.back:ir.unknown})})};function l(){o=n.value}function c(d){s.push(d);const g=()=>{const b=s.indexOf(d);b>-1&&s.splice(b,1)};return i.push(g),g}function u(){const{history:d}=window;!d.state||d.replaceState(ne({},d.state,{scroll:Fs()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function ya(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Fs():null}}function jd(t){const{history:e,location:n}=window,r={value:Sc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:Vd()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(l,c){const u=ne({},e.state,ya(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=ne({},s.value,e.state,{forward:l,scroll:Fs()});i(u.current,u,!0);const h=ne({},ya(r.value,l,null),{position:u.position+1},c);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function Hd(t){t=Dd(t);const e=jd(t),n=zd(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ne({location:"",base:t,go:r,createHref:Ld.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function qd(t){return typeof t=="string"||t&&typeof t=="object"}function Rc(t){return typeof t=="string"||typeof t=="symbol"}const Mt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xc=Symbol("");var ba;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ba||(ba={}));function Fn(t,e){return ne(new Error,{type:t,[xc]:!0},e)}function wt(t,e){return t instanceof Error&&xc in t&&(e==null||!!(t.type&e))}const wa="[^/]+?",Wd={sensitive:!1,strict:!1,start:!0,end:!0},Kd=/[.+*?^${}()[\]/\\]/g;function Gd(t,e){const n=ne({},Wd,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(Kd,"\\$&"),g+=40;else if(d.type===1){const{value:b,repeatable:P,optional:T,regexp:I}=d;i.push({name:b,repeatable:P,optional:T});const y=I||wa;if(y!==wa){g+=10;try{new RegExp(`(${y})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${b}" (${y}): `+B.message)}}let C=P?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;h||(C=T&&c.length<2?`(?:/${C})`:"/"+C),T&&(C+="?"),s+=C,g+=20,T&&(g+=-8),P&&(g+=-20),y===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",b=i[d-1];h[b.name]=g&&b.repeatable?g.split("/"):g}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:b,repeatable:P,optional:T}=g,I=b in c?c[b]:"";if(rt(I)&&!P)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const y=rt(I)?I.join("/"):I;if(!y)if(T)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${b}"`);u+=y}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function Yd(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Jd(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Yd(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(va(r))return 1;if(va(s))return-1}return s.length-r.length}function va(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Qd={type:0,value:""},Zd=/[a-zA-Z0-9_]/;function Xd(t){if(!t)return[[]];if(t==="/")return[[Qd]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function h(){!c||(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:Zd.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function ep(t,e,n){const r=Gd(Xd(t.path),n),s=ne(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function tp(t,e){const n=[],r=new Map;e=ka({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const g=!d,b=np(u);b.aliasOf=d&&d.record;const P=ka(e,u),T=[b];if("alias"in u){const C=typeof u.alias=="string"?[u.alias]:u.alias;for(const B of C)T.push(ne({},b,{components:d?d.record.components:b.components,path:B,aliasOf:d?d.record:b}))}let I,y;for(const C of T){const{path:B}=C;if(h&&B[0]!=="/"){const W=h.record.path,K=W[W.length-1]==="/"?"":"/";C.path=h.record.path+(B&&K+B)}if(I=ep(C,h,P),d?d.alias.push(I):(y=y||I,y!==I&&y.alias.push(I),g&&u.name&&!Ea(I)&&o(u.name)),b.children){const W=b.children;for(let K=0;K<W.length;K++)i(W[K],I,d&&d.children[K])}d=d||I,l(I)}return y?()=>{o(y)}:sr}function o(u){if(Rc(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&Jd(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Ac(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Ea(u)&&r.set(u.record.name,u)}function c(u,h){let d,g={},b,P;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw Fn(1,{location:u});P=d.record.name,g=ne(Ia(h.params,d.keys.filter(y=>!y.optional).map(y=>y.name)),u.params&&Ia(u.params,d.keys.map(y=>y.name))),b=d.stringify(g)}else if("path"in u)b=u.path,d=n.find(y=>y.re.test(b)),d&&(g=d.parse(b),P=d.record.name);else{if(d=h.name?r.get(h.name):n.find(y=>y.re.test(h.path)),!d)throw Fn(1,{location:u,currentLocation:h});P=d.record.name,g=ne({},h.params,u.params),b=d.stringify(g)}const T=[];let I=d;for(;I;)T.unshift(I.record),I=I.parent;return{name:P,path:b,params:g,matched:T,meta:sp(T)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Ia(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function np(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:rp(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function rp(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Ea(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function sp(t){return t.reduce((e,n)=>ne(e,n.meta),{})}function ka(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Ac(t,e){return e.children.some(n=>n===t||Ac(t,n))}const Cc=/#/g,ip=/&/g,op=/\//g,ap=/=/g,lp=/\?/g,Pc=/\+/g,cp=/%5B/g,up=/%5D/g,Oc=/%5E/g,hp=/%60/g,Nc=/%7B/g,fp=/%7C/g,Dc=/%7D/g,dp=/%20/g;function oo(t){return encodeURI(""+t).replace(fp,"|").replace(cp,"[").replace(up,"]")}function pp(t){return oo(t).replace(Nc,"{").replace(Dc,"}").replace(Oc,"^")}function Si(t){return oo(t).replace(Pc,"%2B").replace(dp,"+").replace(Cc,"%23").replace(ip,"%26").replace(hp,"`").replace(Nc,"{").replace(Dc,"}").replace(Oc,"^")}function gp(t){return Si(t).replace(ap,"%3D")}function mp(t){return oo(t).replace(Cc,"%23").replace(lp,"%3F")}function _p(t){return t==null?"":mp(t).replace(op,"%2F")}function gs(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function yp(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Pc," "),o=i.indexOf("="),a=gs(o<0?i:i.slice(0,o)),l=o<0?null:gs(i.slice(o+1));if(a in e){let c=e[a];rt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Ta(t){let e="";for(let n in t){const r=t[n];if(n=gp(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(rt(r)?r.map(i=>i&&Si(i)):[r&&Si(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function bp(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=rt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const wp=Symbol(""),Sa=Symbol(""),Bs=Symbol(""),Mc=Symbol(""),Ri=Symbol("");function Xn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Ut(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Fn(4,{from:n,to:e})):h instanceof Error?a(h):qd(h)?a(Fn(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(r&&r.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function ri(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(vp(a)){const c=(a.__vccOpts||a)[e];c&&s.push(Ut(c,n,r,i,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Rd(c)?c.default:c;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Ut(d,n,r,i,o)()}))}}return s}function vp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ra(t){const e=kt(Bs),n=kt(Mc),r=We(()=>e.resolve(qe(t.to))),s=We(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Un.bind(null,u));if(d>-1)return d;const g=xa(l[c-2]);return c>1&&xa(u)===g&&h[h.length-1].path!==g?h.findIndex(Un.bind(null,l[c-2])):d}),i=We(()=>s.value>-1&&kp(n.params,r.value.params)),o=We(()=>s.value>-1&&s.value===n.matched.length-1&&Tc(n.params,r.value.params));function a(l={}){return Ep(l)?e[qe(t.replace)?"replace":"push"](qe(t.to)).catch(sr):Promise.resolve()}return{route:r,href:We(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Ip=oc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ra,setup(t,{slots:e}){const n=Cr(Ra(t)),{options:r}=kt(Bs),s=We(()=>({[Aa(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Aa(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ec("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Tn=Ip;function Ep(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function kp(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!rt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function xa(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Aa=(t,e,n)=>t!=null?t:e!=null?e:n,Tp=oc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=kt(Ri),s=We(()=>t.route||r.value),i=kt(Sa,0),o=We(()=>{let c=qe(i);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=We(()=>s.value.matched[o.value]);Xr(Sa,We(()=>o.value+1)),Xr(wp,a),Xr(Ri,s);const l=pr();return es(()=>[l.value,a.value,t.name],([c,u,h],[d,g,b])=>{u&&(u.instances[h]=c,g&&g!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!Un(u,g)||!d)&&(u.enterCallbacks[h]||[]).forEach(P=>P(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Ca(n.default,{Component:d,route:c});const g=h.props[u],b=g?g===!0?c.params:typeof g=="function"?g(c):g:null,T=Ec(d,ne({},b,e,{onVnodeUnmounted:I=>{I.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Ca(n.default,{Component:T,route:c})||T}}});function Ca(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Lc=Tp;function Sp(t){const e=tp(t.routes,t),n=t.parseQuery||yp,r=t.stringifyQuery||Ta,s=t.history,i=Xn(),o=Xn(),a=Xn(),l=Bh(Mt);let c=Mt;kn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ti.bind(null,_=>""+_),h=ti.bind(null,_p),d=ti.bind(null,gs);function g(_,D){let x,M;return Rc(_)?(x=e.getRecordMatcher(_),M=D):M=_,e.addRoute(M,x)}function b(_){const D=e.getRecordMatcher(_);D&&e.removeRoute(D)}function P(){return e.getRoutes().map(_=>_.record)}function T(_){return!!e.getRecordMatcher(_)}function I(_,D){if(D=ne({},D||l.value),typeof _=="string"){const G=ni(n,_,D.path),f=e.resolve({path:G.path},D),p=s.createHref(G.fullPath);return ne(G,f,{params:d(f.params),hash:gs(G.hash),redirectedFrom:void 0,href:p})}let x;if("path"in _)x=ne({},_,{path:ni(n,_.path,D.path).path});else{const G=ne({},_.params);for(const f in G)G[f]==null&&delete G[f];x=ne({},_,{params:h(_.params)}),D.params=h(D.params)}const M=e.resolve(x,D),te=_.hash||"";M.params=u(d(M.params));const he=Cd(r,ne({},_,{hash:pp(te),path:M.path})),J=s.createHref(he);return ne({fullPath:he,hash:te,query:r===Ta?bp(_.query):_.query||{}},M,{redirectedFrom:void 0,href:J})}function y(_){return typeof _=="string"?ni(n,_,l.value.path):ne({},_)}function C(_,D){if(c!==_)return Fn(8,{from:D,to:_})}function B(_){return se(_)}function W(_){return B(ne(y(_),{replace:!0}))}function K(_){const D=_.matched[_.matched.length-1];if(D&&D.redirect){const{redirect:x}=D;let M=typeof x=="function"?x(_):x;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=y(M):{path:M},M.params={}),ne({query:_.query,hash:_.hash,params:"path"in M?{}:_.params},M)}}function se(_,D){const x=c=I(_),M=l.value,te=_.state,he=_.force,J=_.replace===!0,G=K(x);if(G)return se(ne(y(G),{state:typeof G=="object"?ne({},te,G.state):te,force:he,replace:J}),D||x);const f=x;f.redirectedFrom=D;let p;return!he&&Pd(r,M,x)&&(p=Fn(16,{to:f,from:M}),bn(M,M,!0,!1)),(p?Promise.resolve(p):ge(f,M)).catch(m=>wt(m)?wt(m,2)?m:$e(m):ue(m,f,M)).then(m=>{if(m){if(wt(m,2))return se(ne({replace:J},y(m.to),{state:typeof m.to=="object"?ne({},te,m.to.state):te,force:he}),D||f)}else m=Ie(f,M,!0,J,te);return Ae(f,M,m),m})}function pe(_,D){const x=C(_,D);return x?Promise.reject(x):Promise.resolve()}function ge(_,D){let x;const[M,te,he]=Rp(_,D);x=ri(M.reverse(),"beforeRouteLeave",_,D);for(const G of M)G.leaveGuards.forEach(f=>{x.push(Ut(f,_,D))});const J=pe.bind(null,_,D);return x.push(J),vn(x).then(()=>{x=[];for(const G of i.list())x.push(Ut(G,_,D));return x.push(J),vn(x)}).then(()=>{x=ri(te,"beforeRouteUpdate",_,D);for(const G of te)G.updateGuards.forEach(f=>{x.push(Ut(f,_,D))});return x.push(J),vn(x)}).then(()=>{x=[];for(const G of _.matched)if(G.beforeEnter&&!D.matched.includes(G))if(rt(G.beforeEnter))for(const f of G.beforeEnter)x.push(Ut(f,_,D));else x.push(Ut(G.beforeEnter,_,D));return x.push(J),vn(x)}).then(()=>(_.matched.forEach(G=>G.enterCallbacks={}),x=ri(he,"beforeRouteEnter",_,D),x.push(J),vn(x))).then(()=>{x=[];for(const G of o.list())x.push(Ut(G,_,D));return x.push(J),vn(x)}).catch(G=>wt(G,8)?G:Promise.reject(G))}function Ae(_,D,x){for(const M of a.list())M(_,D,x)}function Ie(_,D,x,M,te){const he=C(_,D);if(he)return he;const J=D===Mt,G=kn?history.state:{};x&&(M||J?s.replace(_.fullPath,ne({scroll:J&&G&&G.scroll},te)):s.push(_.fullPath,te)),l.value=_,bn(_,D,x,J),$e()}let Me;function yt(){Me||(Me=s.listen((_,D,x)=>{if(!Qn.listening)return;const M=I(_),te=K(M);if(te){se(ne(te,{replace:!0}),M).catch(sr);return}c=M;const he=l.value;kn&&Fd(_a(he.fullPath,x.delta),Fs()),ge(M,he).catch(J=>wt(J,12)?J:wt(J,2)?(se(J.to,M).then(G=>{wt(G,20)&&!x.delta&&x.type===br.pop&&s.go(-1,!1)}).catch(sr),Promise.reject()):(x.delta&&s.go(-x.delta,!1),ue(J,M,he))).then(J=>{J=J||Ie(M,he,!1),J&&(x.delta&&!wt(J,8)?s.go(-x.delta,!1):x.type===br.pop&&wt(J,20)&&s.go(-1,!1)),Ae(M,he,J)}).catch(sr)}))}let at=Xn(),yn=Xn(),be;function ue(_,D,x){$e(_);const M=yn.list();return M.length?M.forEach(te=>te(_,D,x)):console.error(_),Promise.reject(_)}function ie(){return be&&l.value!==Mt?Promise.resolve():new Promise((_,D)=>{at.add([_,D])})}function $e(_){return be||(be=!_,yt(),at.list().forEach(([D,x])=>_?x(_):D()),at.reset()),_}function bn(_,D,x,M){const{scrollBehavior:te}=t;if(!kn||!te)return Promise.resolve();const he=!x&&Bd(_a(_.fullPath,0))||(M||!x)&&history.state&&history.state.scroll||null;return Zl().then(()=>te(_,D,he)).then(J=>J&&Ud(J)).catch(J=>ue(J,_,D))}const bt=_=>s.go(_);let lt;const je=new Set,Qn={currentRoute:l,listening:!0,addRoute:g,removeRoute:b,hasRoute:T,getRoutes:P,resolve:I,options:t,push:B,replace:W,go:bt,back:()=>bt(-1),forward:()=>bt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:yn.add,isReady:ie,install(_){const D=this;_.component("RouterLink",Tn),_.component("RouterView",Lc),_.config.globalProperties.$router=D,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>qe(l)}),kn&&!lt&&l.value===Mt&&(lt=!0,B(s.location).catch(te=>{}));const x={};for(const te in Mt)x[te]=We(()=>l.value[te]);_.provide(Bs,D),_.provide(Mc,Cr(x)),_.provide(Ri,l);const M=_.unmount;je.add(_),_.unmount=function(){je.delete(_),je.size<1&&(c=Mt,Me&&Me(),Me=null,l.value=Mt,lt=!1,be=!1),M()}}};return Qn}function vn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Rp(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>Un(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Un(c,l))||s.push(l))}return[n,r,s]}function xp(){return kt(Bs)}/**
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
 */const $c=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ap=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Uc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(d=64)),r.push(n[u],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($c(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ap(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw Error();const d=i<<2|a>>4;if(r.push(d),c!==64){const g=a<<4&240|c>>2;if(r.push(g),h!==64){const b=c<<6&192|h;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Cp=function(t){const e=$c(t);return Uc.encodeByteArray(e,!0)},Fc=function(t){return Cp(t).replace(/\./g,"")},Pp=function(t){try{return Uc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class Op{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Oe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Np(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Oe())}function Dp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Mp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lp(){const t=Oe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $p(){return typeof indexedDB=="object"}function Up(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Fp="FirebaseError";class Nt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Fp,Object.setPrototypeOf(this,Nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Or.prototype.create)}}class Or{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Bp(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Nt(s,a,r)}}function Bp(t,e){return t.replace(Vp,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Vp=/\{\$([^}]+)}/g;function zp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ms(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Pa(i)&&Pa(o)){if(!ms(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Pa(t){return t!==null&&typeof t=="object"}/**
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
 */function Nr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function tr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function nr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function jp(t,e){const n=new Hp(t,e);return n.subscribe.bind(n)}class Hp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");qp(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=si),s.error===void 0&&(s.error=si),s.complete===void 0&&(s.complete=si);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function si(){}/**
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
 */function st(t){return t&&t._delegate?t._delegate:t}class un{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const tn="[DEFAULT]";/**
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
 */class Wp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Op;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gp(e))try{this.getOrInitializeService({instanceIdentifier:tn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=tn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tn){return this.instances.has(e)}getOptions(e=tn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Kp(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=tn){return this.component?this.component.multipleInstances?e:tn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kp(t){return t===tn?void 0:t}function Gp(t){return t.instantiationMode==="EAGER"}/**
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
 */class Yp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Wp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const Jp={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},Qp=re.INFO,Zp={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},Xp=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Zp[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ao{constructor(e){this.name=e,this._logLevel=Qp,this._logHandler=Xp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const eg=(t,e)=>e.some(n=>t instanceof n);let Oa,Na;function tg(){return Oa||(Oa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ng(){return Na||(Na=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bc=new WeakMap,xi=new WeakMap,Vc=new WeakMap,ii=new WeakMap,lo=new WeakMap;function rg(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Gt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Bc.set(n,t)}).catch(()=>{}),lo.set(e,t),e}function sg(t){if(xi.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});xi.set(t,e)}let Ai={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Vc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ig(t){Ai=t(Ai)}function og(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(oi(this),e,...n);return Vc.set(r,e.sort?e.sort():[e]),Gt(r)}:ng().includes(t)?function(...e){return t.apply(oi(this),e),Gt(Bc.get(this))}:function(...e){return Gt(t.apply(oi(this),e))}}function ag(t){return typeof t=="function"?og(t):(t instanceof IDBTransaction&&sg(t),eg(t,tg())?new Proxy(t,Ai):t)}function Gt(t){if(t instanceof IDBRequest)return rg(t);if(ii.has(t))return ii.get(t);const e=ag(t);return e!==t&&(ii.set(t,e),lo.set(e,t)),e}const oi=t=>lo.get(t);function lg(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Gt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Gt(o.result),l.oldVersion,l.newVersion,Gt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const cg=["get","getKey","getAll","getAllKeys","count"],ug=["put","add","delete","clear"],ai=new Map;function Da(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ai.get(e))return ai.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=ug.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||cg.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return ai.set(e,i),i}ig(t=>({...t,get:(e,n,r)=>Da(e,n)||t.get(e,n,r),has:(e,n)=>!!Da(e,n)||t.has(e,n)}));/**
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
 */class hg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fg(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function fg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ci="@firebase/app",Ma="0.7.33";/**
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
 */const hn=new ao("@firebase/app"),dg="@firebase/app-compat",pg="@firebase/analytics-compat",gg="@firebase/analytics",mg="@firebase/app-check-compat",_g="@firebase/app-check",yg="@firebase/auth",bg="@firebase/auth-compat",wg="@firebase/database",vg="@firebase/database-compat",Ig="@firebase/functions",Eg="@firebase/functions-compat",kg="@firebase/installations",Tg="@firebase/installations-compat",Sg="@firebase/messaging",Rg="@firebase/messaging-compat",xg="@firebase/performance",Ag="@firebase/performance-compat",Cg="@firebase/remote-config",Pg="@firebase/remote-config-compat",Og="@firebase/storage",Ng="@firebase/storage-compat",Dg="@firebase/firestore",Mg="@firebase/firestore-compat",Lg="firebase",$g="9.10.0";/**
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
 */const zc="[DEFAULT]",Ug={[Ci]:"fire-core",[dg]:"fire-core-compat",[gg]:"fire-analytics",[pg]:"fire-analytics-compat",[_g]:"fire-app-check",[mg]:"fire-app-check-compat",[yg]:"fire-auth",[bg]:"fire-auth-compat",[wg]:"fire-rtdb",[vg]:"fire-rtdb-compat",[Ig]:"fire-fn",[Eg]:"fire-fn-compat",[kg]:"fire-iid",[Tg]:"fire-iid-compat",[Sg]:"fire-fcm",[Rg]:"fire-fcm-compat",[xg]:"fire-perf",[Ag]:"fire-perf-compat",[Cg]:"fire-rc",[Pg]:"fire-rc-compat",[Og]:"fire-gcs",[Ng]:"fire-gcs-compat",[Dg]:"fire-fst",[Mg]:"fire-fst-compat","fire-js":"fire-js",[Lg]:"fire-js-all"};/**
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
 */const _s=new Map,Pi=new Map;function Fg(t,e){try{t.container.addComponent(e)}catch(n){hn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Bn(t){const e=t.name;if(Pi.has(e))return hn.debug(`There were multiple attempts to register component ${e}.`),!1;Pi.set(e,t);for(const n of _s.values())Fg(n,t);return!0}function co(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Bg={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},fn=new Or("app","Firebase",Bg);/**
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
 */class Vg{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fn.create("app-deleted",{appName:this._name})}}/**
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
 */const Dr=$g;function zg(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:zc,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw fn.create("bad-app-name",{appName:String(r)});const s=_s.get(r);if(s){if(ms(t,s.options)&&ms(n,s.config))return s;throw fn.create("duplicate-app",{appName:r})}const i=new Yp(r);for(const a of Pi.values())i.addComponent(a);const o=new Vg(t,n,i);return _s.set(r,o),o}function jc(t=zc){const e=_s.get(t);if(!e)throw fn.create("no-app",{appName:t});return e}function Yt(t,e,n){var r;let s=(r=Ug[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hn.warn(a.join(" "));return}Bn(new un(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const jg="firebase-heartbeat-database",Hg=1,wr="firebase-heartbeat-store";let li=null;function Hc(){return li||(li=lg(jg,Hg,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(wr)}}}).catch(t=>{throw fn.create("idb-open",{originalErrorMessage:t.message})})),li}async function qg(t){var e;try{return(await Hc()).transaction(wr).objectStore(wr).get(qc(t))}catch(n){if(n instanceof Nt)hn.warn(n.message);else{const r=fn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});hn.warn(r.message)}}}async function La(t,e){var n;try{const s=(await Hc()).transaction(wr,"readwrite");return await s.objectStore(wr).put(e,qc(t)),s.done}catch(r){if(r instanceof Nt)hn.warn(r.message);else{const s=fn.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});hn.warn(s.message)}}}function qc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Wg=1024,Kg=30*24*60*60*1e3;class Gg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Jg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=$a();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Kg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=$a(),{heartbeatsToSend:n,unsentEntries:r}=Yg(this._heartbeatsCache.heartbeats),s=Fc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function $a(){return new Date().toISOString().substring(0,10)}function Yg(t,e=Wg){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ua(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ua(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Jg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $p()?Up().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await qg(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return La(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return La(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ua(t){return Fc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Qg(t){Bn(new un("platform-logger",e=>new hg(e),"PRIVATE")),Bn(new un("heartbeat",e=>new Gg(e),"PRIVATE")),Yt(Ci,Ma,t),Yt(Ci,Ma,"esm2017"),Yt("fire-js","")}Qg("");function uo(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Wc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Zg=Wc,Kc=new Or("auth","Firebase",Wc());/**
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
 */const Fa=new ao("@firebase/auth");function rs(t,...e){Fa.logLevel<=re.ERROR&&Fa.error(`Auth (${Dr}): ${t}`,...e)}/**
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
 */function it(t,...e){throw ho(t,...e)}function pt(t,...e){return ho(t,...e)}function Xg(t,e,n){const r=Object.assign(Object.assign({},Zg()),{[e]:n});return new Or("auth","Firebase",r).create(e,{appName:t.name})}function ho(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Kc.create(t,...e)}function z(t,e,...n){if(!t)throw ho(e,...n)}function It(t){const e="INTERNAL ASSERTION FAILED: "+t;throw rs(e),new Error(e)}function xt(t,e){t||It(e)}/**
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
 */const Ba=new Map;function Et(t){xt(t instanceof Function,"Expected a class definition");let e=Ba.get(t);return e?(xt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ba.set(t,e),e)}/**
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
 */function em(t,e){const n=co(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ms(i,e!=null?e:{}))return s;it(s,"already-initialized")}return n.initialize({options:e})}function tm(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Et);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Oi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function nm(){return Va()==="http:"||Va()==="https:"}function Va(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function rm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nm()||Dp()||"connection"in navigator)?navigator.onLine:!0}function sm(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Mr{constructor(e,n){this.shortDelay=e,this.longDelay=n,xt(n>e,"Short delay should be less than long delay!"),this.isMobile=Np()||Mp()}get(){return rm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function fo(t,e){xt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Gc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;It("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;It("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;It("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const im={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const om=new Mr(3e4,6e4);function Lr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $r(t,e,n,r,s={}){return Yc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Nr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Gc.fetch()(Jc(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Yc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},im),e);try{const s=new am(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Wr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Wr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Wr(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Xg(t,u,c);it(t,u)}}catch(s){if(s instanceof Nt)throw s;it(t,"network-request-failed")}}async function Ur(t,e,n,r,s={}){const i=await $r(t,e,n,r,s);return"mfaPendingCredential"in i&&it(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Jc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?fo(t.config,s):`${t.config.apiScheme}://${s}`}class am{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(pt(this.auth,"network-request-failed")),om.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=pt(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function lm(t,e){return $r(t,"POST","/v1/accounts:delete",e)}async function cm(t,e){return $r(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function or(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function um(t,e=!1){const n=st(t),r=await n.getIdToken(e),s=po(r);z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:or(ci(s.auth_time)),issuedAtTime:or(ci(s.iat)),expirationTime:or(ci(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ci(t){return Number(t)*1e3}function po(t){var e;const[n,r,s]=t.split(".");if(n===void 0||r===void 0||s===void 0)return rs("JWT malformed, contained fewer than 3 sections"),null;try{const i=Pp(r);return i?JSON.parse(i):(rs("Failed to decode base64 JWT payload"),null)}catch(i){return rs("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function hm(t){const e=po(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function vr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Nt&&fm(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function fm({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class dm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Qc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=or(this.lastLoginAt),this.creationTime=or(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ys(t){var e;const n=t.auth,r=await t.getIdToken(),s=await vr(t,cm(n,{idToken:r}));z(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?mm(i.providerUserInfo):[],a=gm(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Qc(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function pm(t){const e=st(t);await ys(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gm(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function mm(t){return t.map(e=>{var{providerId:n}=e,r=uo(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function _m(t,e){const n=await Yc(t,{},async()=>{const r=Nr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Jc(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Gc.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ir{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await _m(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ir;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ir,this.toJSON())}_performRefresh(){return It("not implemented")}}/**
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
 */function Lt(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ln{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=uo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Qc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await vr(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return um(this,e)}reload(){return pm(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ys(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await vr(this,lm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,b=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:C,emailVerified:B,isAnonymous:W,providerData:K,stsTokenManager:se}=n;z(C&&se,e,"internal-error");const pe=Ir.fromJSON(this.name,se);z(typeof C=="string",e,"internal-error"),Lt(h,e.name),Lt(d,e.name),z(typeof B=="boolean",e,"internal-error"),z(typeof W=="boolean",e,"internal-error"),Lt(g,e.name),Lt(b,e.name),Lt(P,e.name),Lt(T,e.name),Lt(I,e.name),Lt(y,e.name);const ge=new ln({uid:C,auth:e,email:d,emailVerified:B,displayName:h,isAnonymous:W,photoURL:b,phoneNumber:g,tenantId:P,stsTokenManager:pe,createdAt:I,lastLoginAt:y});return K&&Array.isArray(K)&&(ge.providerData=K.map(Ae=>Object.assign({},Ae))),T&&(ge._redirectEventId=T),ge}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ir;s.updateFromServerResponse(n);const i=new ln({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ys(i),i}}/**
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
 */class Zc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Zc.type="NONE";const za=Zc;/**
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
 */function ss(t,e,n){return`firebase:${t}:${e}:${n}`}class On{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ss(this.userKey,s.apiKey,i),this.fullPersistenceKey=ss("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ln._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new On(Et(za),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Et(za);const o=ss(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=ln._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new On(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new On(i,e,r))}}/**
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
 */function ja(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ru(e))return"Blackberry";if(su(e))return"Webos";if(go(e))return"Safari";if((e.includes("chrome/")||eu(e))&&!e.includes("edge/"))return"Chrome";if(nu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Xc(t=Oe()){return/firefox\//i.test(t)}function go(t=Oe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function eu(t=Oe()){return/crios\//i.test(t)}function tu(t=Oe()){return/iemobile/i.test(t)}function nu(t=Oe()){return/android/i.test(t)}function ru(t=Oe()){return/blackberry/i.test(t)}function su(t=Oe()){return/webos/i.test(t)}function Vs(t=Oe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ym(t=Oe()){var e;return Vs(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function bm(){return Lp()&&document.documentMode===10}function iu(t=Oe()){return Vs(t)||nu(t)||su(t)||ru(t)||/windows phone/i.test(t)||tu(t)}function wm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ou(t,e=[]){let n;switch(t){case"Browser":n=ja(Oe());break;case"Worker":n=`${ja(Oe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Dr}/${r}`}/**
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
 */class vm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
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
 */class Im{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ha(this),this.idTokenSubscription=new Ha(this),this.beforeStateQueue=new vm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kc,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Et(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await On.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await ys(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?st(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Et(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Or("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Et(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await On.create(this,[Et(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return z(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ou(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function zs(t){return st(t)}class Ha{constructor(e){this.auth=e,this.observer=null,this.addObserver=jp(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class mo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return It("not implemented")}_getIdTokenResponse(e){return It("not implemented")}_linkToIdToken(e,n){return It("not implemented")}_getReauthenticationResolver(e){return It("not implemented")}}async function Em(t,e){return $r(t,"POST","/v1/accounts:update",e)}/**
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
 */async function km(t,e){return Ur(t,"POST","/v1/accounts:signInWithPassword",Lr(t,e))}/**
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
 */async function Tm(t,e){return Ur(t,"POST","/v1/accounts:signInWithEmailLink",Lr(t,e))}async function Sm(t,e){return Ur(t,"POST","/v1/accounts:signInWithEmailLink",Lr(t,e))}/**
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
 */class Er extends mo{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Er(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Er(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return km(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Tm(e,{email:this._email,oobCode:this._password});default:it(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Em(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Sm(e,{idToken:n,email:this._email,oobCode:this._password});default:it(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Nn(t,e){return Ur(t,"POST","/v1/accounts:signInWithIdp",Lr(t,e))}/**
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
 */const Rm="http://localhost";class dn extends mo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new dn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):it("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=uo(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new dn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Nn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Nn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Nn(e,n)}buildRequest(){const e={requestUri:Rm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Nr(n)}return e}}/**
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
 */function xm(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Am(t){const e=tr(nr(t)).link,n=e?tr(nr(e)).deep_link_id:null,r=tr(nr(t)).deep_link_id;return(r?tr(nr(r)).link:null)||r||n||e||t}class _o{constructor(e){var n,r,s,i,o,a;const l=tr(nr(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,h=xm((s=l.mode)!==null&&s!==void 0?s:null);z(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Am(e);try{return new _o(n)}catch{return null}}}/**
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
 */class Gn{constructor(){this.providerId=Gn.PROVIDER_ID}static credential(e,n){return Er._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=_o.parseLink(n);return z(r,"argument-error"),Er._fromEmailAndCode(e,r.code,r.tenantId)}}Gn.PROVIDER_ID="password";Gn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Gn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class au{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fr extends au{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Vt extends Fr{constructor(){super("facebook.com")}static credential(e){return dn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vt.credential(e.oauthAccessToken)}catch{return null}}}Vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vt.PROVIDER_ID="facebook.com";/**
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
 */class zt extends Fr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return dn._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return zt.credential(n,r)}catch{return null}}}zt.GOOGLE_SIGN_IN_METHOD="google.com";zt.PROVIDER_ID="google.com";/**
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
 */class jt extends Fr{constructor(){super("github.com")}static credential(e){return dn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jt.credential(e.oauthAccessToken)}catch{return null}}}jt.GITHUB_SIGN_IN_METHOD="github.com";jt.PROVIDER_ID="github.com";/**
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
 */class Ht extends Fr{constructor(){super("twitter.com")}static credential(e,n){return dn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ht.credential(n,r)}catch{return null}}}Ht.TWITTER_SIGN_IN_METHOD="twitter.com";Ht.PROVIDER_ID="twitter.com";/**
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
 */async function Cm(t,e){return Ur(t,"POST","/v1/accounts:signUp",Lr(t,e))}/**
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
 */class pn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await ln._fromIdTokenResponse(e,r,s),o=qa(r);return new pn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=qa(r);return new pn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function qa(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class bs extends Nt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,bs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new bs(e,n,r,s)}}function lu(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?bs._fromErrorAndOperation(t,i,e,r):i})}async function Pm(t,e,n=!1){const r=await vr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return pn._forOperation(t,"link",r)}/**
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
 */async function Om(t,e,n=!1){var r;const{auth:s}=t,i="reauthenticate";try{const o=await vr(t,lu(s,i,e,t),n);z(o.idToken,s,"internal-error");const a=po(o.idToken);z(a,s,"internal-error");const{sub:l}=a;return z(t.uid===l,s,"user-mismatch"),pn._forOperation(t,i,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&it(s,"user-mismatch"),o}}/**
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
 */async function cu(t,e,n=!1){const r="signIn",s=await lu(t,r,e),i=await pn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Nm(t,e){return cu(zs(t),e)}async function cw(t,e,n){const r=zs(t),s=await Cm(r,{returnSecureToken:!0,email:e,password:n}),i=await pn._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function uw(t,e,n){return Nm(st(t),Gn.credential(e,n))}const ws="__sak";/**
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
 */class uu{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ws,"1"),this.storage.removeItem(ws),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Dm(){const t=Oe();return go(t)||Vs(t)}const Mm=1e3,Lm=10;class hu extends uu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Dm()&&wm(),this.fallbackToPolling=iu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);bm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Lm):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Mm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}hu.type="LOCAL";const $m=hu;/**
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
 */class fu extends uu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}fu.type="SESSION";const du=fu;/**
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
 */function Um(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class js{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new js(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await Um(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}js.receivers=[];/**
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
 */function yo(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Fm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=yo("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function gt(){return window}function Bm(t){gt().location.href=t}/**
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
 */function pu(){return typeof gt().WorkerGlobalScope<"u"&&typeof gt().importScripts=="function"}async function Vm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zm(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function jm(){return pu()?self:null}/**
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
 */const gu="firebaseLocalStorageDb",Hm=1,vs="firebaseLocalStorage",mu="fbase_key";class Br{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hs(t,e){return t.transaction([vs],e?"readwrite":"readonly").objectStore(vs)}function qm(){const t=indexedDB.deleteDatabase(gu);return new Br(t).toPromise()}function Ni(){const t=indexedDB.open(gu,Hm);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(vs,{keyPath:mu})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(vs)?e(r):(r.close(),await qm(),e(await Ni()))})})}async function Wa(t,e,n){const r=Hs(t,!0).put({[mu]:e,value:n});return new Br(r).toPromise()}async function Wm(t,e){const n=Hs(t,!1).get(e),r=await new Br(n).toPromise();return r===void 0?null:r.value}function Ka(t,e){const n=Hs(t,!0).delete(e);return new Br(n).toPromise()}const Km=800,Gm=3;class _u{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ni(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Gm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=js._getInstance(jm()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Vm(),!this.activeServiceWorker)return;this.sender=new Fm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ni();return await Wa(e,ws,"1"),await Ka(e,ws),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Wa(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Wm(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ka(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Hs(s,!1).getAll();return new Br(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Km)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_u.type="LOCAL";const Ym=_u;/**
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
 */function Jm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Qm(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=pt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Jm().appendChild(r)})}function Zm(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Mr(3e4,6e4);/**
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
 */function Xm(t,e){return e?Et(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class bo extends mo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Nn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Nn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Nn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function e_(t){return cu(t.auth,new bo(t),t.bypassAuthState)}function t_(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),Om(n,new bo(t),t.bypassAuthState)}async function n_(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),Pm(n,new bo(t),t.bypassAuthState)}/**
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
 */class yu{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return e_;case"linkViaPopup":case"linkViaRedirect":return n_;case"reauthViaPopup":case"reauthViaRedirect":return t_;default:it(this.auth,"internal-error")}}resolve(e){xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const r_=new Mr(2e3,1e4);class Sn extends yu{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Sn.currentPopupAction&&Sn.currentPopupAction.cancel(),Sn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){xt(this.filter.length===1,"Popup operations only handle one event");const e=yo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,r_.get())};e()}}Sn.currentPopupAction=null;/**
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
 */const s_="pendingRedirect",is=new Map;class i_ extends yu{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=is.get(this.auth._key());if(!e){try{const r=await o_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}is.set(this.auth._key(),e)}return this.bypassAuthState||is.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function o_(t,e){const n=c_(e),r=l_(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function a_(t,e){is.set(t._key(),e)}function l_(t){return Et(t._redirectPersistence)}function c_(t){return ss(s_,t.config.apiKey,t.name)}async function u_(t,e,n=!1){const r=zs(t),s=Xm(r,e),o=await new i_(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const h_=10*60*1e3;class f_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!d_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!bu(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(pt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=h_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ga(e))}saveEventToCache(e){this.cachedEventUids.add(Ga(e)),this.lastProcessedEventTime=Date.now()}}function Ga(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function bu({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function d_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bu(t);default:return!1}}/**
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
 */async function p_(t,e={}){return $r(t,"GET","/v1/projects",e)}/**
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
 */const g_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,m_=/^https?/;async function __(t){if(t.config.emulator)return;const{authorizedDomains:e}=await p_(t);for(const n of e)try{if(y_(n))return}catch{}it(t,"unauthorized-domain")}function y_(t){const e=Oi(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!m_.test(n))return!1;if(g_.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const b_=new Mr(3e4,6e4);function Ya(){const t=gt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function w_(t){return new Promise((e,n)=>{var r,s,i;function o(){Ya(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ya(),n(pt(t,"network-request-failed"))},timeout:b_.get()})}if(!((s=(r=gt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=gt().gapi)===null||i===void 0)&&i.load)o();else{const a=Zm("iframefcb");return gt()[a]=()=>{gapi.load?o():n(pt(t,"network-request-failed"))},Qm(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw os=null,e})}let os=null;function v_(t){return os=os||w_(t),os}/**
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
 */const I_=new Mr(5e3,15e3),E_="__/auth/iframe",k_="emulator/auth/iframe",T_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},S_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function R_(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?fo(e,k_):`https://${t.config.authDomain}/${E_}`,r={apiKey:e.apiKey,appName:t.name,v:Dr},s=S_.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Nr(r).slice(1)}`}async function x_(t){const e=await v_(t),n=gt().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:R_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:T_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=pt(t,"network-request-failed"),a=gt().setTimeout(()=>{i(o)},I_.get());function l(){gt().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const A_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},C_=500,P_=600,O_="_blank",N_="http://localhost";class Ja{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function D_(t,e,n,r=C_,s=P_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},A_),{width:r.toString(),height:s.toString(),top:i,left:o}),c=Oe().toLowerCase();n&&(a=eu(c)?O_:n),Xc(c)&&(e=e||N_,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[g,b])=>`${d}${g}=${b},`,"");if(ym(c)&&a!=="_self")return M_(e||"",a),new Ja(null);const h=window.open(e||"",a,u);z(h,t,"popup-blocked");try{h.focus()}catch{}return new Ja(h)}function M_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const L_="__/auth/handler",$_="emulator/auth/handler";function Qa(t,e,n,r,s,i){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Dr,eventId:s};if(e instanceof au){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",zp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(i||{}))o[l]=c}if(e instanceof Fr){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${U_(t)}?${Nr(a).slice(1)}`}function U_({config:t}){return t.emulator?fo(t,$_):`https://${t.authDomain}/${L_}`}/**
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
 */const ui="webStorageSupport";class F_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=du,this._completeRedirectFn=u_,this._overrideRedirectResult=a_}async _openPopup(e,n,r,s){var i;xt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Qa(e,n,r,Oi(),s);return D_(e,o,yo())}async _openRedirect(e,n,r,s){return await this._originValidation(e),Bm(Qa(e,n,r,Oi(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(xt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await x_(e),r=new f_(e);return n.register("authEvent",s=>(z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ui,{type:ui},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ui];o!==void 0&&n(!!o),it(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=__(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return iu()||go()||Vs()}}const B_=F_;var Za="@firebase/auth",Xa="0.20.7";/**
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
 */class V_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function z_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function j_(t){Bn(new un("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,l)=>{z(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),z(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ou(t)},u=new Im(a,l,c);return tm(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Bn(new un("auth-internal",e=>{const n=zs(e.getProvider("auth").getImmediate());return(r=>new V_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yt(Za,Xa,z_(t)),Yt(Za,Xa,"esm2017")}/**
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
 */function H_(t=jc()){const e=co(t,"auth");return e.isInitialized()?e.getImmediate():em(t,{popupRedirectResolver:B_,persistence:[Ym,$m,du]})}j_("Browser");const wu=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},q_=t=>(Jh("data-v-427c05d9"),t=t(),Qh(),t),W_={class:"header"},K_={class:"wrapper"},G_=Kn("Home"),Y_=Kn("About"),J_={key:0},Q_={key:1},Z_=Kn("Login"),X_=Kn("Register"),ey=Kn("Create"),ty=q_(()=>_e("footer",{class:"footer"},null,-1)),ny={__name:"App",setup(t){const e=xp(),n=pr(!1),r=H_();r.onAuthStateChanged(i=>{i?n.value=!0:n.value=!1});function s(){r.signOut(),e.push("/")}return(i,o)=>(nt(),Tt(Fe,null,[_e("header",W_,[_e("div",K_,[_e("nav",null,[me(qe(Tn),{to:"/"},{default:rn(()=>[G_]),_:1}),me(qe(Tn),{to:"/about"},{default:rn(()=>[Y_]),_:1}),n.value?(nt(),Tt("span",J_,[_e("button",{onClick:s},"Logout")])):(nt(),Tt("span",Q_,[me(qe(Tn),{to:"/sign-in"},{default:rn(()=>[Z_]),_:1}),me(qe(Tn),{to:"/register"},{default:rn(()=>[X_]),_:1})])),me(qe(Tn),{to:"/create"},{default:rn(()=>[ey]),_:1})])])]),me(qe(Lc)),ty],64))}},ry=wu(ny,[["__scopeId","data-v-427c05d9"]]),sy="modulepreload",iy=function(t){return"/"+t},el={},Kr=function(e,n,r){return!n||n.length===0?e():Promise.all(n.map(s=>{if(s=iy(s),s in el)return;el[s]=!0;const i=s.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":sy,i||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),i)return new Promise((l,c)=>{a.addEventListener("load",l),a.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};/**
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
 */class He{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}He.UNAUTHENTICATED=new He(null),He.GOOGLE_CREDENTIALS=new He("google-credentials-uid"),He.FIRST_PARTY=new He("first-party-uid"),He.MOCK_USER=new He("mock-user");/**
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
 */let Yn="9.10.0";/**
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
 */const Vn=new ao("@firebase/firestore");function Is(t,...e){if(Vn.logLevel<=re.DEBUG){const n=e.map(vo);Vn.debug(`Firestore (${Yn}): ${t}`,...n)}}function wo(t,...e){if(Vn.logLevel<=re.ERROR){const n=e.map(vo);Vn.error(`Firestore (${Yn}): ${t}`,...n)}}function oy(t,...e){if(Vn.logLevel<=re.WARN){const n=e.map(vo);Vn.warn(`Firestore (${Yn}): ${t}`,...n)}}function vo(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function ye(t="Unexpected state"){const e=`FIRESTORE (${Yn}) INTERNAL ASSERTION FAILED: `+t;throw wo(e),new Error(e)}function At(t,e){t||ye()}function qs(t,e){return t}/**
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
 */const tl="ok",ay="cancelled",ar="unknown",q="invalid-argument",ly="deadline-exceeded",cy="not-found",uy="permission-denied",Di="unauthenticated",hy="resource-exhausted",zn="failed-precondition",fy="aborted",dy="out-of-range",vu="unimplemented",py="internal",gy="unavailable";class F extends Nt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class my{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _y{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(He.UNAUTHENTICATED))}shutdown(){}}class yy{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(At(typeof e.accessToken=="string"),new my(e.accessToken,new He(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class by{constructor(e,n,r,s){this.t=e,this.i=n,this.o=r,this.u=s,this.type="FirstParty",this.user=He.FIRST_PARTY,this.h=new Map}l(){return this.u?this.u():(At(!(typeof this.t!="object"||this.t===null||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.h.set("X-Goog-AuthUser",this.i);const e=this.l();return e&&this.h.set("Authorization",e),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}}class wy{constructor(e,n,r,s){this.t=e,this.i=n,this.o=r,this.u=s}getToken(){return Promise.resolve(new by(this.t,this.i,this.o,this.u))}start(e,n){e.enqueueRetryable(()=>n(He.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Iy{constructor(e){this.m=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(At(typeof e.token=="string"),new vy(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
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
 */class Ey{constructor(e,n,r,s,i,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class kr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new kr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof kr&&e.projectId===this.projectId&&e.database===this.database}}class Tr{constructor(e,n,r){n===void 0?n=0:n>e.length&&ye(),r===void 0?r=e.length-n:r>e.length-n&&ye(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Tr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Tr?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ve extends Tr{construct(e,n,r){return new ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(q,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ve(n)}static emptyPath(){return new ve([])}}const ky=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends Tr{construct(e,n,r){return new Be(e,n,r)}static isValidIdentifier(e){return ky.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Be(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new F(q,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new F(q,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new F(q,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new F(q,"Unterminated ` in path: "+e);return new Be(n)}static emptyPath(){return new Be([])}}/**
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
 */class xe{constructor(e){this.path=e}static fromPath(e){return new xe(ve.fromString(e))}static fromName(e){return new xe(ve.fromString(e).popFirst(5))}static empty(){return new xe(ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new xe(new ve(e.slice()))}}/**
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
 */function Iu(t,e,n){if(!n)throw new F(q,`Function ${t}() cannot be called with an empty ${e}.`)}function nl(t){if(!xe.isDocumentKey(t))throw new F(q,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function rl(t){if(xe.isDocumentKey(t))throw new F(q,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ws(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ye()}function Eu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(q,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ws(t);throw new F(q,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Ty(t,e){if(e<=0)throw new F(q,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Sy(t){return t==null}function Es(t){return t===0&&1/t==-1/0}/**
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
 */const Ry={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */var sl,Q;function il(t){if(t===void 0)return wo("RPC_ERROR","HTTP error has no status"),ar;switch(t){case 200:return tl;case 400:return zn;case 401:return Di;case 403:return uy;case 404:return cy;case 409:return fy;case 416:return dy;case 429:return hy;case 499:return ay;case 500:return ar;case 501:return vu;case 503:return gy;case 504:return ly;default:return t>=200&&t<300?tl:t>=400&&t<500?zn:t>=500&&t<600?py:ar}}/**
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
 */(Q=sl||(sl={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";class xy extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.p=n+"://"+e.host,this.g="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}v(e,n,r,s,i){const o=this.T(e,n);Is("RestConnection","Sending: ",o,r);const a={};return this.I(a,s,i),this.A(e,o,a,r).then(l=>(Is("RestConnection","Received: ",l),l),l=>{throw oy("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}R(e,n,r,s,i,o){return this.v(e,n,r,s,i)}I(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Yn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}T(e,n){const r=Ry[e];return`${this.p}/v1/${n}:${r}`}}{constructor(e,n){super(e),this.P=n}V(e,n){throw new Error("Not supported by FetchConnection")}async A(e,n,r,s){const i=JSON.stringify(s);let o;try{o=await this.P(n,{method:"POST",headers:r,body:i})}catch(a){throw new F(il(a.status),"Request failed with error: "+a.statusText)}if(!o.ok)throw new F(il(o.status),"Request failed with error: "+o.statusText);return o.json()}}/**
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
 */function Ay(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Cy{static N(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Ay(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ee(t,e){return t<e?-1:t>e?1:0}function ku(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(q,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(q,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(q,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(q,"Timestamp seconds out of range: "+e)}static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ve(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ee(this.nanoseconds,e.nanoseconds):Ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Qe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Qe(e)}static min(){return new Qe(new Ve(0,0))}static max(){return new Qe(new Ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function ol(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ks(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
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
 */class ks{constructor(e,n){this.comparator=e,this.root=n||Se.EMPTY}insert(e,n){return new ks(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Se.BLACK,null,null))}remove(e){return new ks(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Se.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gr(this.root,e,this.comparator,!0)}}class Gr{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Se{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:Se.RED,this.left=s!=null?s:Se.EMPTY,this.right=i!=null?i:Se.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Se(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Se.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Se.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ye();const e=this.left.check();if(e!==this.right.check())throw ye();return e+(this.isRed()?0:1)}}Se.EMPTY=null,Se.RED=!0,Se.BLACK=!1;Se.EMPTY=new class{constructor(){this.size=0}get key(){throw ye()}get value(){throw ye()}get color(){throw ye()}get left(){throw ye()}get right(){throw ye()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Se(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ts{constructor(e){this.comparator=e,this.data=new ks(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new al(this.data.getIterator())}getIteratorFrom(e){return new al(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ts)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ts(this.comparator);return n.data=e,n}}class al{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Sr{constructor(e){this.fields=e,e.sort(Be.comparator)}static empty(){return new Sr([])}unionWith(e){let n=new Ts(Be.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Sr(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ku(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ct(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new Ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ct.EMPTY_BYTE_STRING=new Ct("");const Py=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gn(t){if(At(!!t),typeof t=="string"){let e=0;const n=Py.exec(t);if(At(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:we(t.seconds),nanos:we(t.nanos)}}function we(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Rr(t){return typeof t=="string"?Ct.fromBase64String(t):Ct.fromUint8Array(t)}/**
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
 */function Tu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Su(t){const e=t.mapValue.fields.__previous_value__;return Tu(e)?Su(e):e}function xr(t){const e=gn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
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
 */const Yr={fields:{__type__:{stringValue:"__max__"}}};function mn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Tu(t)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:10:ye()}function Ss(t,e){if(t===e)return!0;const n=mn(t);if(n!==mn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return xr(t).isEqual(xr(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=gn(r.timestampValue),o=gn(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Rr(r.bytesValue).isEqual(Rr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return we(r.geoPointValue.latitude)===we(s.geoPointValue.latitude)&&we(r.geoPointValue.longitude)===we(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return we(r.integerValue)===we(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=we(r.doubleValue),o=we(s.doubleValue);return i===o?Es(i)===Es(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return ku(t.arrayValue.values||[],e.arrayValue.values||[],Ss);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(ol(i)!==ol(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Ss(i[a],o[a])))return!1;return!0}(t,e);default:return ye()}}function Ar(t,e){return(t.values||[]).find(n=>Ss(n,e))!==void 0}function Rs(t,e){if(t===e)return 0;const n=mn(t),r=mn(e);if(n!==r)return Ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ee(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=we(s.integerValue||s.doubleValue),a=we(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return ll(t.timestampValue,e.timestampValue);case 4:return ll(xr(t),xr(e));case 5:return Ee(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Rr(s),a=Rr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=Ee(o[l],a[l]);if(c!==0)return c}return Ee(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=Ee(we(s.latitude),we(i.latitude));return o!==0?o:Ee(we(s.longitude),we(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Rs(o[l],a[l]);if(c)return c}return Ee(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===Yr&&i===Yr)return 0;if(s===Yr)return 1;if(i===Yr)return-1;const o=s.fields||{},a=Object.keys(o),l=i.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=Ee(a[u],c[u]);if(h!==0)return h;const d=Rs(o[a[u]],l[c[u]]);if(d!==0)return d}return Ee(a.length,c.length)}(t.mapValue,e.mapValue);default:throw ye()}}function ll(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ee(t,e);const n=gn(t),r=gn(e),s=Ee(n.seconds,r.seconds);return s!==0?s:Ee(n.nanos,r.nanos)}function cl(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ru(t){return!!t&&"arrayValue"in t}function ul(t){return!!t&&"nullValue"in t}function hl(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function hi(t){return!!t&&"mapValue"in t}function lr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ks(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=lr(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=lr(t.arrayValue.values[n]);return e}return Object.assign({},t)}class dt{constructor(e){this.value=e}static empty(){return new dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!hi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=lr(n)}setAll(e){let n=Be.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=lr(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());hi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ss(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];hi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ks(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new dt(lr(this.value))}}/**
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
 */class Ft{constructor(e,n,r,s,i,o){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Ft(e,0,Qe.min(),Qe.min(),dt.empty(),0)}static newFoundDocument(e,n,r){return new Ft(e,1,n,Qe.min(),r,0)}static newNoDocument(e,n){return new Ft(e,2,n,Qe.min(),dt.empty(),0)}static newUnknownDocument(e,n){return new Ft(e,3,n,Qe.min(),dt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Qe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ft(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Oy{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.D=null}}function fl(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Oy(t,e,n,r,s,i,o)}class _t extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.$(e,n,r):new Ny(e,n,r):n==="array-contains"?new Ly(e,r):n==="in"?new $y(e,r):n==="not-in"?new Uy(e,r):n==="array-contains-any"?new Fy(e,r):new _t(e,n,r)}static $(e,n,r){return n==="in"?new Dy(e,r):new My(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.F(Rs(n,this.value)):n!==null&&mn(this.value)===mn(n)&&this.F(Rs(n,this.value))}F(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Ny extends _t{constructor(e,n,r){super(e,n,r),this.key=xe.fromName(r.referenceValue)}matches(e){const n=xe.comparator(e.key,this.key);return this.F(n)}}class Dy extends _t{constructor(e,n){super(e,"in",n),this.keys=xu("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class My extends _t{constructor(e,n){super(e,"not-in",n),this.keys=xu("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function xu(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>xe.fromName(r.referenceValue))}class Ly extends _t{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ru(n)&&Ar(n.arrayValue,this.value)}}class $y extends _t{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ar(this.value.arrayValue,n)}}class Uy extends _t{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ar(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ar(this.value.arrayValue,n)}}class Fy extends _t{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ru(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ar(this.value.arrayValue,r))}}class dl{constructor(e,n){this.position=e,this.inclusive=n}}class cr{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
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
 */class Gs{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.q=null,this.O=null,this.startAt,this.endAt}}function Io(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Eo(t){for(const e of t.filters)if(e.S())return e.field;return null}function By(t){return t.collectionGroup!==null}function pl(t){const e=qs(t);if(e.q===null){e.q=[];const n=Eo(e),r=Io(e);if(n!==null&&r===null)n.isKeyField()||e.q.push(new cr(n)),e.q.push(new cr(Be.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.q.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.q.push(new cr(Be.keyField(),i))}}}return e.q}function Vy(t){const e=qs(t);if(!e.O)if(e.limitType==="F")e.O=fl(e.path,e.collectionGroup,pl(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of pl(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new cr(i.field,o))}const r=e.endAt?new dl(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new dl(e.startAt.position,e.startAt.inclusive):null;e.O=fl(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.O}/**
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
 */function zy(t,e){return function(n){return typeof n=="number"&&Number.isInteger(n)&&!Es(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}(e)?function(n){return{integerValue:""+n}}(e):function(n,r){if(n.k){if(isNaN(r))return{doubleValue:"NaN"};if(r===1/0)return{doubleValue:"Infinity"};if(r===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Es(r)?"-0":r}}(t,e)}/**
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
 */class Ys{constructor(){this._=void 0}}class jy extends Ys{}class Hy extends Ys{constructor(e){super(),this.elements=e}}class qy extends Ys{constructor(e){super(),this.elements=e}}class Wy extends Ys{constructor(e,n){super(),this.C=e,this.L=n}}class ur{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ur}static exists(e){return new ur(void 0,e)}static updateTime(e){return new ur(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class Js{}class Au extends Js{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Cu extends Js{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class Ky extends Js{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Gy extends Js{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */const Yy=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Jy=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Qy{constructor(e,n){this.databaseId=e,this.k=n}}function Mi(t,e){return t.k?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Zy(t,e){return t.k?e.toBase64():e.toUint8Array()}function Xy(t,e){return Mi(t,e.toTimestamp())}function eb(t){return At(!!t),Qe.fromTimestamp(function(e){const n=gn(e);return new Ve(n.seconds,n.nanos)}(t))}function ko(t,e){return function(n){return new ve(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Li(t,e){return ko(t.databaseId,e.path)}function tb(t,e){const n=function(s){const i=ve.fromString(s);return At(Pu(i)),i}(e);if(n.get(1)!==t.databaseId.projectId)throw new F(q,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new F(q,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new xe((At((r=n).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function gl(t,e){return ko(t.databaseId,e)}function nb(t){return new ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ml(t,e,n){return{name:Li(t,e),fields:n.value.mapValue.fields}}function rb(t,e){let n;if(e instanceof Au)n={update:ml(t,e.key,e.value)};else if(e instanceof Ky)n={delete:Li(t,e.key)};else if(e instanceof Cu)n={update:ml(t,e.key,e.data),updateMask:ab(e.fieldMask)};else{if(!(e instanceof Gy))return ye();n={verify:Li(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof jy)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Hy)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof qy)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Wy)return{fieldPath:i.field.canonicalString(),increment:o.L};throw ye()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:Xy(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ye()}(t,e.precondition)),n}function sb(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=gl(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=gl(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length===0)return;const c=l.map(u=>function(h){if(h.op==="=="){if(hl(h.value))return{unaryFilter:{field:In(h.field),op:"IS_NAN"}};if(ul(h.value))return{unaryFilter:{field:In(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(hl(h.value))return{unaryFilter:{field:In(h.field),op:"IS_NOT_NAN"}};if(ul(h.value))return{unaryFilter:{field:In(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:In(h.field),op:ob(h.op),value:h.value}}}(u));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:In(u.field),direction:ib(u.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(l,c){return l.k||Sy(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function ib(t){return Yy[t]}function ob(t){return Jy[t]}function In(t){return{fieldPath:t.canonicalString()}}function ab(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Pu(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */function To(t){return new Qy(t,!0)}/**
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
 */class lb extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.Z=r,this.C=s,this.tt=!1}et(){if(this.tt)throw new F(zn,"The client has already been terminated.")}v(e,n,r){return this.et(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.Z.v(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===Di&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new F(ar,s.toString())})}R(e,n,r,s){return this.et(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.Z.R(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===Di&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(ar,i.toString())})}terminate(){this.tt=!0}}async function cb(t,e){const n=qs(t),r=nb(n.C)+"/documents",s={writes:e.map(i=>rb(n.C,i))};await n.v("Commit",r,s)}async function ub(t,e){const n=qs(t),r=sb(n.C,Vy(e));return(await n.R("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(i,o,a){const l=tb(i,o.name),c=eb(o.updateTime),u=new dt({mapValue:{fields:o.fields}}),h=Ft.newFoundDocument(l,c,u);return a&&h.setHasCommittedMutations(),a?h.setHasCommittedMutations():h}(n.C,s.document,void 0))}/**
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
 */const hr=new Map;function Ou(t){if(t._terminated)throw new F(zn,"The client has already been terminated.");if(!hr.has(t)){Is("ComponentProvider","Initializing Datastore");const i=function(l){return new xy(l,fetch.bind(null))}((e=t._databaseId,n=t.app.options.appId||"",r=t._persistenceKey,s=t._freezeSettings(),new Ey(e,n,r,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams))),o=To(t._databaseId),a=function(l,c,u,h){return new lb(l,c,u,h)}(t._authCredentials,t._appCheckCredentials,i,o);hr.set(t,a)}var e,n,r,s;/**
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
*/return hr.get(t)}class _l{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new F(q,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(q,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(r,s,i,o){if(s===!0&&o===!0)throw new F(q,`${r} and ${i} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class So{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _l({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(zn,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(zn,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _l(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new _y;switch(n.type){case"gapi":const r=n.client;return new wy(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new F(q,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=hr.get(e);n&&(Is("ComponentProvider","Removing Datastore"),hr.delete(e),n.terminate())}(this),Promise.resolve()}}function Nu(t,e){const n=typeof t=="object"?t:jc(),r=typeof t=="string"?t:e||"(default)";return co(n,"firestore/lite").getImmediate({identifier:r})}/**
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
 */class Ge{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new St(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ge(this.firestore,e,this._key)}}class _n{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _n(this.firestore,e,this._query)}}class St extends _n{constructor(e,n,r){super(e,n,new Gs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ge(this.firestore,null,new xe(e))}withConverter(e){return new St(this.firestore,e,this._path)}}function Du(t,e,...n){if(t=st(t),Iu("collection","path",e),t instanceof So){const r=ve.fromString(e,...n);return rl(r),new St(t,null,r)}{if(!(t instanceof Ge||t instanceof St))throw new F(q,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return rl(r),new St(t.firestore,null,r)}}function hb(t,e,...n){if(t=st(t),arguments.length===1&&(e=Cy.N()),Iu("doc","path",e),t instanceof So){const r=ve.fromString(e,...n);return nl(r),new Ge(t,null,new xe(r))}{if(!(t instanceof Ge||t instanceof St))throw new F(q,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return nl(r),new Ge(t.firestore,t instanceof St?t.converter:null,new xe(r))}}/**
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
 */class Ro{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(q,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class jn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new jn(Ct.fromBase64String(e))}catch(n){throw new F(q,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new jn(Ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Mu{constructor(e){this._methodName=e}}/**
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
 */class xo{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(q,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(q,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ee(this._lat,e._lat)||Ee(this._long,e._long)}}/**
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
 */const fb=/^__.*__$/;class db{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Cu(e,this.data,this.fieldMask,n,this.fieldTransforms):new Au(e,this.data,n,this.fieldTransforms)}}function Lu(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye()}}class Ao{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.C=r,this.ignoreUndefinedProperties=s,i===void 0&&this.nt(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get rt(){return this.settings.rt}st(e){return new Ao(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.C,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}it(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.st({path:r,ot:!1});return s.ut(e),s}ct(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.st({path:r,ot:!1});return s.nt(),s}at(e){return this.st({path:void 0,ot:!0})}ht(e){return xs(e,this.settings.methodName,this.settings.lt||!1,this.path,this.settings.ft)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}nt(){if(this.path)for(let e=0;e<this.path.length;e++)this.ut(this.path.get(e))}ut(e){if(e.length===0)throw this.ht("Document fields must not be empty");if(Lu(this.rt)&&fb.test(e))throw this.ht('Document fields cannot begin and end with "__"')}}class pb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.C=r||To(e)}dt(e,n,r,s=!1){return new Ao({rt:e,methodName:n,ft:r,path:Be.emptyPath(),ot:!1,lt:s},this.databaseId,this.C,this.ignoreUndefinedProperties)}}function $u(t){const e=t._freezeSettings(),n=To(t._databaseId);return new pb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function gb(t,e,n,r,s,i={}){const o=t.dt(i.merge||i.mergeFields?2:0,e,n,s);Bu("Data must be an object, but it was:",o,r);const a=Uu(r,o);let l,c;if(i.merge)l=new Sr(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=_b(e,h,n);if(!o.contains(d))throw new F(q,`Field '${d}' is specified in your field mask but missing from your input data.`);bb(u,d)||u.push(d)}l=new Sr(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new db(new dt(a),l,c)}function mb(t,e,n,r=!1){return Co(n,t.dt(r?4:3,e))}function Co(t,e){if(Fu(t=st(t)))return Bu("Unsupported field value:",e,t),Uu(t,e);if(t instanceof Mu)return function(n,r){if(!Lu(r.rt))throw r.ht(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ht(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ot&&e.rt!==4)throw e.ht("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=Co(o,r.at(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=st(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return zy(r.C,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Ve.fromDate(n);return{timestampValue:Mi(r.C,s)}}if(n instanceof Ve){const s=new Ve(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Mi(r.C,s)}}if(n instanceof xo)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof jn)return{bytesValue:Zy(r.C,n._byteString)};if(n instanceof Ge){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.ht(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ko(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ht(`Unsupported field value: ${Ws(n)}`)}(t,e)}function Uu(t,e){const n={};return function(r){for(const s in r)if(Object.prototype.hasOwnProperty.call(r,s))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ks(t,(r,s)=>{const i=Co(s,e.it(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Fu(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof xo||t instanceof jn||t instanceof Ge||t instanceof Mu)}function Bu(t,e,n){if(!Fu(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Ws(n);throw r==="an object"?e.ht(t+" a custom object"):e.ht(t+" "+r)}}function _b(t,e,n){if((e=st(e))instanceof Ro)return e._internalPath;if(typeof e=="string")return Vu(t,e);throw xs("Field path arguments must be of type string or ",t,!1,void 0,n)}const yb=new RegExp("[~\\*/\\[\\]]");function Vu(t,e,n){if(e.search(yb)>=0)throw xs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ro(...e.split("."))._internalPath}catch{throw xs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function xs(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new F(q,a+t+l)}function bb(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class wb{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new zu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Po("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class zu extends wb{data(){return super.data()}}class vb{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function Po(t,e){return typeof e=="string"?Vu(t,e):e instanceof Ro?e._internalPath:e._delegate._internalPath}/**
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
 */class Oo{}function ju(t,...e){for(const n of e)t=n._apply(t);return t}class Ib extends Oo{constructor(e,n,r){super(),this._t=e,this.gt=n,this.vt=r,this.type="where"}_apply(e){const n=$u(e.firestore),r=function(s,i,o,a,l,c,u){let h;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new F(q,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){bl(u,c);const g=[];for(const b of u)g.push(yl(a,s,b));h={arrayValue:{values:g}}}else h=yl(a,s,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||bl(u,c),h=mb(o,i,u,c==="in"||c==="not-in");const d=_t.create(l,c,h);return function(g,b){if(b.S()){const T=Eo(g);if(T!==null&&!T.isEqual(b.field))throw new F(q,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${T.toString()}' and '${b.field.toString()}'`);const I=Io(g);I!==null&&Wu(g,b.field,I)}const P=function(T,I){for(const y of T.filters)if(I.indexOf(y.op)>=0)return y.op;return null}(g,function(T){switch(T){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(b.op));if(P!==null)throw P===b.op?new F(q,`Invalid query. You cannot use more than one '${b.op.toString()}' filter.`):new F(q,`Invalid query. You cannot use '${b.op.toString()}' filters with '${P.toString()}' filters.`)}(s,d),d}(e._query,"where",n,e.firestore._databaseId,this._t,this.gt,this.vt);return new _n(e.firestore,e.converter,function(s,i){const o=s.filters.concat([i]);return new Gs(s.path,s.collectionGroup,s.explicitOrderBy.slice(),o,s.limit,s.limitType,s.startAt,s.endAt)}(e._query,r))}}function Hu(t,e,n){const r=e,s=Po("where",t);return new Ib(s,r,n)}class Eb extends Oo{constructor(e,n){super(),this._t=e,this.bt=n,this.type="orderBy"}_apply(e){const n=function(r,s,i){if(r.startAt!==null)throw new F(q,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new F(q,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new cr(s,i);return function(a,l){if(Io(a)===null){const c=Eo(a);c!==null&&Wu(a,c,l.field)}}(r,o),o}(e._query,this._t,this.bt);return new _n(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new Gs(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function qu(t,e="asc"){const n=e,r=Po("orderBy",t);return new Eb(r,n)}class kb extends Oo{constructor(e,n,r){super(),this.type=e,this.Et=n,this.Tt=r}_apply(e){return new _n(e.firestore,e.converter,function(n,r,s){return new Gs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),r,s,n.startAt,n.endAt)}(e._query,this.Et,this.Tt))}}function Tb(t){return Ty("limit",t),new kb("limit",t,"F")}function yl(t,e,n){if(typeof(n=st(n))=="string"){if(n==="")throw new F(q,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!By(e)&&n.indexOf("/")!==-1)throw new F(q,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ve.fromString(n));if(!xe.isDocumentKey(r))throw new F(q,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return cl(t,new xe(r))}if(n instanceof Ge)return cl(t,n._key);throw new F(q,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ws(n)}.`)}function bl(t,e){if(!Array.isArray(t)||t.length===0)throw new F(q,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new F(q,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Wu(t,e,n){if(!n.isEqual(e))throw new F(q,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */function Sb(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Rb extends class{convertValue(e,n="none"){switch(mn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return we(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Rr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ye()}}convertObject(e,n){const r={};return Ks(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new xo(we(e.latitude),we(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Su(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(xr(e));default:return null}}convertTimestamp(e){const n=gn(e);return new Ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ve.fromString(e);At(Pu(r));const s=new kr(r.get(1),r.get(3)),i=new xe(r.popFirst(5));return s.isEqual(n)||wo(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new jn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ge(this.firestore,null,n)}}function Ku(t){(function(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new F(vu,"limitToLast() queries require specifying at least one orderBy() clause")})((t=Eu(t,_n))._query);const e=Ou(t.firestore),n=new Rb(t.firestore);return ub(e,t._query).then(r=>{const s=r.map(i=>new zu(t.firestore,n,i.key,i,t.converter));return t._query.limitType==="L"&&s.reverse(),new vb(t,s)})}function hw(t,e){const n=hb(t=Eu(t,St)),r=Sb(t.converter,e),s=gb($u(t.firestore),"addDoc",n._key,r,n.converter!==null,{});return cb(Ou(t.firestore),[s.toMutation(n._key,ur.exists(!1))]).then(()=>n)}(function(t){Yn=t})(`${Dr}_lite`),Bn(new un("firestore/lite",(t,{instanceIdentifier:e,options:n})=>{const r=t.getProvider("app").getImmediate(),s=new So(new yy(t.getProvider("auth-internal")),new Iy(t.getProvider("app-check-internal")),function(i,o){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new F(q,'"projectId" not provided in firebase.initializeApp.');return new kr(i.options.projectId,o)}(r,e),r);return n&&s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),Yt("firestore-lite","3.5.0",""),Yt("firestore-lite","3.5.0","esm2017");function Gu(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let Jn=Gu();function xb(t){Jn=t}const Ab=/[&<>"']/,Cb=/[&<>"']/g,Pb=/[<>"']|&(?!#?\w+;)/,Ob=/[<>"']|&(?!#?\w+;)/g,Nb={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},wl=t=>Nb[t];function ke(t,e){if(e){if(Ab.test(t))return t.replace(Cb,wl)}else if(Pb.test(t))return t.replace(Ob,wl);return t}const Db=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Yu(t){return t.replace(Db,(e,n)=>(n=n.toLowerCase(),n==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):""))}const Mb=/(^|[^\[])\^/g;function ce(t,e){t=typeof t=="string"?t:t.source,e=e||"";const n={replace:(r,s)=>(s=s.source||s,s=s.replace(Mb,"$1"),t=t.replace(r,s),n),getRegex:()=>new RegExp(t,e)};return n}const Lb=/[^\w:]/g,$b=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function vl(t,e,n){if(t){let r;try{r=decodeURIComponent(Yu(n)).replace(Lb,"").toLowerCase()}catch{return null}if(r.indexOf("javascript:")===0||r.indexOf("vbscript:")===0||r.indexOf("data:")===0)return null}e&&!$b.test(n)&&(n=Vb(e,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n}const Jr={},Ub=/^[^:]+:\/*[^/]*$/,Fb=/^([^:]+:)[\s\S]*$/,Bb=/^([^:]+:\/*[^/]*)[\s\S]*$/;function Vb(t,e){Jr[" "+t]||(Ub.test(t)?Jr[" "+t]=t+"/":Jr[" "+t]=as(t,"/",!0)),t=Jr[" "+t];const n=t.indexOf(":")===-1;return e.substring(0,2)==="//"?n?e:t.replace(Fb,"$1")+e:e.charAt(0)==="/"?n?e:t.replace(Bb,"$1")+e:t+e}const As={exec:function(){}};function ot(t){let e=1,n,r;for(;e<arguments.length;e++){n=arguments[e];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}function Il(t,e){const n=t.replace(/\|/g,(i,o,a)=>{let l=!1,c=o;for(;--c>=0&&a[c]==="\\";)l=!l;return l?"|":" |"}),r=n.split(/ \|/);let s=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;s<r.length;s++)r[s]=r[s].trim().replace(/\\\|/g,"|");return r}function as(t,e,n){const r=t.length;if(r===0)return"";let s=0;for(;s<r;){const i=t.charAt(r-s-1);if(i===e&&!n)s++;else if(i!==e&&n)s++;else break}return t.slice(0,r-s)}function zb(t,e){if(t.indexOf(e[1])===-1)return-1;const n=t.length;let r=0,s=0;for(;s<n;s++)if(t[s]==="\\")s++;else if(t[s]===e[0])r++;else if(t[s]===e[1]&&(r--,r<0))return s;return-1}function Ju(t){t&&t.sanitize&&!t.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function El(t,e){if(e<1)return"";let n="";for(;e>1;)e&1&&(n+=t),e>>=1,t+=t;return n+t}function kl(t,e,n,r){const s=e.href,i=e.title?ke(e.title):null,o=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){r.state.inLink=!0;const a={type:"link",raw:n,href:s,title:i,text:o,tokens:r.inlineTokens(o)};return r.state.inLink=!1,a}return{type:"image",raw:n,href:s,title:i,text:ke(o)}}function jb(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const r=n[1];return e.split(`
`).map(s=>{const i=s.match(/^\s+/);if(i===null)return s;const[o]=i;return o.length>=r.length?s.slice(r.length):s}).join(`
`)}class No{constructor(e){this.options=e||Jn}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const r=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:as(r,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const r=n[0],s=jb(r,n[3]||"");return{type:"code",raw:r,lang:n[2]?n[2].trim():n[2],text:s}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let r=n[2].trim();if(/#$/.test(r)){const s=as(r,"#");(this.options.pedantic||!s||/ $/.test(s))&&(r=s.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:n[0]}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){const r=n[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:n[0],tokens:this.lexer.blockTokens(r,[]),text:r}}}list(e){let n=this.rules.block.list.exec(e);if(n){let r,s,i,o,a,l,c,u,h,d,g,b,P=n[1].trim();const T=P.length>1,I={type:"list",raw:"",ordered:T,start:T?+P.slice(0,-1):"",loose:!1,items:[]};P=T?`\\d{1,9}\\${P.slice(-1)}`:`\\${P}`,this.options.pedantic&&(P=T?P:"[*+-]");const y=new RegExp(`^( {0,3}${P})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(b=!1,!(!(n=y.exec(e))||this.rules.block.hr.test(e)));){if(r=n[0],e=e.substring(r.length),u=n[2].split(`
`,1)[0],h=e.split(`
`,1)[0],this.options.pedantic?(o=2,g=u.trimLeft()):(o=n[2].search(/[^ ]/),o=o>4?1:o,g=u.slice(o),o+=n[1].length),l=!1,!u&&/^ *$/.test(h)&&(r+=h+`
`,e=e.substring(h.length+1),b=!0),!b){const B=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`),W=new RegExp(`^ {0,${Math.min(3,o-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),K=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:\`\`\`|~~~)`),se=new RegExp(`^ {0,${Math.min(3,o-1)}}#`);for(;e&&(d=e.split(`
`,1)[0],u=d,this.options.pedantic&&(u=u.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(K.test(u)||se.test(u)||B.test(u)||W.test(e)));){if(u.search(/[^ ]/)>=o||!u.trim())g+=`
`+u.slice(o);else if(!l)g+=`
`+u;else break;!l&&!u.trim()&&(l=!0),r+=d+`
`,e=e.substring(d.length+1)}}I.loose||(c?I.loose=!0:/\n *\n *$/.test(r)&&(c=!0)),this.options.gfm&&(s=/^\[[ xX]\] /.exec(g),s&&(i=s[0]!=="[ ] ",g=g.replace(/^\[[ xX]\] +/,""))),I.items.push({type:"list_item",raw:r,task:!!s,checked:i,loose:!1,text:g}),I.raw+=r}I.items[I.items.length-1].raw=r.trimRight(),I.items[I.items.length-1].text=g.trimRight(),I.raw=I.raw.trimRight();const C=I.items.length;for(a=0;a<C;a++){this.lexer.state.top=!1,I.items[a].tokens=this.lexer.blockTokens(I.items[a].text,[]);const B=I.items[a].tokens.filter(K=>K.type==="space"),W=B.every(K=>{const se=K.raw.split("");let pe=0;for(const ge of se)if(ge===`
`&&(pe+=1),pe>1)return!0;return!1});!I.loose&&B.length&&W&&(I.loose=!0,I.items[a].loose=!0)}return I}}html(e){const n=this.rules.block.html.exec(e);if(n){const r={type:"html",raw:n[0],pre:!this.options.sanitizer&&(n[1]==="pre"||n[1]==="script"||n[1]==="style"),text:n[0]};if(this.options.sanitize){const s=this.options.sanitizer?this.options.sanitizer(n[0]):ke(n[0]);r.type="paragraph",r.text=s,r.tokens=this.lexer.inline(s)}return r}}def(e){const n=this.rules.block.def.exec(e);if(n){n[3]&&(n[3]=n[3].substring(1,n[3].length-1));const r=n[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:r,raw:n[0],href:n[2],title:n[3]}}}table(e){const n=this.rules.block.table.exec(e);if(n){const r={type:"table",header:Il(n[1]).map(s=>({text:s})),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(r.header.length===r.align.length){r.raw=n[0];let s=r.align.length,i,o,a,l;for(i=0;i<s;i++)/^ *-+: *$/.test(r.align[i])?r.align[i]="right":/^ *:-+: *$/.test(r.align[i])?r.align[i]="center":/^ *:-+ *$/.test(r.align[i])?r.align[i]="left":r.align[i]=null;for(s=r.rows.length,i=0;i<s;i++)r.rows[i]=Il(r.rows[i],r.header.length).map(c=>({text:c}));for(s=r.header.length,o=0;o<s;o++)r.header[o].tokens=this.lexer.inline(r.header[o].text);for(s=r.rows.length,o=0;o<s;o++)for(l=r.rows[o],a=0;a<l.length;a++)l[a].tokens=this.lexer.inline(l[a].text);return r}}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:ke(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):ke(n[0]):n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const r=n[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const o=as(r.slice(0,-1),"\\");if((r.length-o.length)%2===0)return}else{const o=zb(n[2],"()");if(o>-1){const l=(n[0].indexOf("!")===0?5:4)+n[1].length+o;n[2]=n[2].substring(0,o),n[0]=n[0].substring(0,l).trim(),n[3]=""}}let s=n[2],i="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);o&&(s=o[1],i=o[3])}else i=n[3]?n[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(this.options.pedantic&&!/>$/.test(r)?s=s.slice(1):s=s.slice(1,-1)),kl(n,{href:s&&s.replace(this.rules.inline._escapes,"$1"),title:i&&i.replace(this.rules.inline._escapes,"$1")},n[0],this.lexer)}}reflink(e,n){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){let s=(r[2]||r[1]).replace(/\s+/g," ");if(s=n[s.toLowerCase()],!s||!s.href){const i=r[0].charAt(0);return{type:"text",raw:i,text:i}}return kl(r,s,r[0],this.lexer)}}emStrong(e,n,r=""){let s=this.rules.inline.emStrong.lDelim.exec(e);if(!s||s[3]&&r.match(/[\p{L}\p{N}]/u))return;const i=s[1]||s[2]||"";if(!i||i&&(r===""||this.rules.inline.punctuation.exec(r))){const o=s[0].length-1;let a,l,c=o,u=0;const h=s[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(h.lastIndex=0,n=n.slice(-1*e.length+o);(s=h.exec(n))!=null;){if(a=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!a)continue;if(l=a.length,s[3]||s[4]){c+=l;continue}else if((s[5]||s[6])&&o%3&&!((o+l)%3)){u+=l;continue}if(c-=l,c>0)continue;if(l=Math.min(l,l+c+u),Math.min(o,l)%2){const g=e.slice(1,o+s.index+l);return{type:"em",raw:e.slice(0,o+s.index+l+1),text:g,tokens:this.lexer.inlineTokens(g)}}const d=e.slice(2,o+s.index+l-1);return{type:"strong",raw:e.slice(0,o+s.index+l+1),text:d,tokens:this.lexer.inlineTokens(d)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let r=n[2].replace(/\n/g," ");const s=/[^ ]/.test(r),i=/^ /.test(r)&&/ $/.test(r);return s&&i&&(r=r.substring(1,r.length-1)),r=ke(r,!0),{type:"codespan",raw:n[0],text:r}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e,n){const r=this.rules.inline.autolink.exec(e);if(r){let s,i;return r[2]==="@"?(s=ke(this.options.mangle?n(r[1]):r[1]),i="mailto:"+s):(s=ke(r[1]),i=s),{type:"link",raw:r[0],text:s,href:i,tokens:[{type:"text",raw:s,text:s}]}}}url(e,n){let r;if(r=this.rules.inline.url.exec(e)){let s,i;if(r[2]==="@")s=ke(this.options.mangle?n(r[0]):r[0]),i="mailto:"+s;else{let o;do o=r[0],r[0]=this.rules.inline._backpedal.exec(r[0])[0];while(o!==r[0]);s=ke(r[0]),r[1]==="www."?i="http://"+s:i=s}return{type:"link",raw:r[0],text:s,href:i,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e,n){const r=this.rules.inline.text.exec(e);if(r){let s;return this.lexer.state.inRawBlock?s=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):ke(r[0]):r[0]:s=ke(this.options.smartypants?n(r[0]):r[0]),{type:"text",raw:r[0],text:s}}}}const U={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:As,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};U._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;U._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;U.def=ce(U.def).replace("label",U._label).replace("title",U._title).getRegex();U.bullet=/(?:[*+-]|\d{1,9}[.)])/;U.listItemStart=ce(/^( *)(bull) */).replace("bull",U.bullet).getRegex();U.list=ce(U.list).replace(/bull/g,U.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+U.def.source+")").getRegex();U._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";U._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;U.html=ce(U.html,"i").replace("comment",U._comment).replace("tag",U._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();U.paragraph=ce(U._paragraph).replace("hr",U.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",U._tag).getRegex();U.blockquote=ce(U.blockquote).replace("paragraph",U.paragraph).getRegex();U.normal=ot({},U);U.gfm=ot({},U.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});U.gfm.table=ce(U.gfm.table).replace("hr",U.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",U._tag).getRegex();U.gfm.paragraph=ce(U._paragraph).replace("hr",U.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",U.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",U._tag).getRegex();U.pedantic=ot({},U.normal,{html:ce(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",U._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:As,paragraph:ce(U.normal._paragraph).replace("hr",U.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",U.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const O={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:As,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:As,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};O._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";O.punctuation=ce(O.punctuation).replace(/punctuation/g,O._punctuation).getRegex();O.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;O.escapedEmSt=/\\\*|\\_/g;O._comment=ce(U._comment).replace("(?:-->|$)","-->").getRegex();O.emStrong.lDelim=ce(O.emStrong.lDelim).replace(/punct/g,O._punctuation).getRegex();O.emStrong.rDelimAst=ce(O.emStrong.rDelimAst,"g").replace(/punct/g,O._punctuation).getRegex();O.emStrong.rDelimUnd=ce(O.emStrong.rDelimUnd,"g").replace(/punct/g,O._punctuation).getRegex();O._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;O._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;O._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;O.autolink=ce(O.autolink).replace("scheme",O._scheme).replace("email",O._email).getRegex();O._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;O.tag=ce(O.tag).replace("comment",O._comment).replace("attribute",O._attribute).getRegex();O._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;O._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;O._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;O.link=ce(O.link).replace("label",O._label).replace("href",O._href).replace("title",O._title).getRegex();O.reflink=ce(O.reflink).replace("label",O._label).replace("ref",U._label).getRegex();O.nolink=ce(O.nolink).replace("ref",U._label).getRegex();O.reflinkSearch=ce(O.reflinkSearch,"g").replace("reflink",O.reflink).replace("nolink",O.nolink).getRegex();O.normal=ot({},O);O.pedantic=ot({},O.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:ce(/^!?\[(label)\]\((.*?)\)/).replace("label",O._label).getRegex(),reflink:ce(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",O._label).getRegex()});O.gfm=ot({},O.normal,{escape:ce(O.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});O.gfm.url=ce(O.gfm.url,"i").replace("email",O.gfm._extended_email).getRegex();O.breaks=ot({},O.gfm,{br:ce(O.br).replace("{2,}","*").getRegex(),text:ce(O.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function Hb(t){return t.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function Tl(t){let e="",n,r;const s=t.length;for(n=0;n<s;n++)r=t.charCodeAt(n),Math.random()>.5&&(r="x"+r.toString(16)),e+="&#"+r+";";return e}class Pt{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Jn,this.options.tokenizer=this.options.tokenizer||new No,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:U.normal,inline:O.normal};this.options.pedantic?(n.block=U.pedantic,n.inline=O.pedantic):this.options.gfm&&(n.block=U.gfm,this.options.breaks?n.inline=O.breaks:n.inline=O.gfm),this.tokenizer.rules=n}static get rules(){return{block:U,inline:O}}static lex(e,n){return new Pt(n).lex(e)}static lexInline(e,n){return new Pt(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let n;for(;n=this.inlineQueue.shift();)this.inlineTokens(n.src,n.tokens);return this.tokens}blockTokens(e,n=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(a,l,c)=>l+"    ".repeat(c.length));let r,s,i,o;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(a=>(r=a.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length),r.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length),s=n[n.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+r.raw,s.text+=`
`+r.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text):n.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length),s=n[n.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+r.raw,s.text+=`
`+r.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),n.push(r);continue}if(i=e,this.options.extensions&&this.options.extensions.startBlock){let a=1/0;const l=e.slice(1);let c;this.options.extensions.startBlock.forEach(function(u){c=u.call({lexer:this},l),typeof c=="number"&&c>=0&&(a=Math.min(a,c))}),a<1/0&&a>=0&&(i=e.substring(0,a+1))}if(this.state.top&&(r=this.tokenizer.paragraph(i))){s=n[n.length-1],o&&s.type==="paragraph"?(s.raw+=`
`+r.raw,s.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):n.push(r),o=i.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length),s=n[n.length-1],s&&s.type==="text"?(s.raw+=`
`+r.raw,s.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):n.push(r);continue}if(e){const a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let r,s,i,o=e,a,l,c;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)u.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,a.index)+"["+El("a",a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,a.index)+"["+El("a",a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.escapedEmSt.exec(o))!=null;)o=o.slice(0,a.index)+"++"+o.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(l||(c=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(r=u.call({lexer:this},e,n))?(e=e.substring(r.raw.length),n.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),s=n[n.length-1],s&&r.type==="text"&&s.type==="text"?(s.raw+=r.raw,s.text+=r.text):n.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),s=n[n.length-1],s&&r.type==="text"&&s.type==="text"?(s.raw+=r.raw,s.text+=r.text):n.push(r);continue}if(r=this.tokenizer.emStrong(e,o,c)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),n.push(r);continue}if(r=this.tokenizer.autolink(e,Tl)){e=e.substring(r.raw.length),n.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e,Tl))){e=e.substring(r.raw.length),n.push(r);continue}if(i=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const h=e.slice(1);let d;this.options.extensions.startInline.forEach(function(g){d=g.call({lexer:this},h),typeof d=="number"&&d>=0&&(u=Math.min(u,d))}),u<1/0&&u>=0&&(i=e.substring(0,u+1))}if(r=this.tokenizer.inlineText(i,Hb)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(c=r.raw.slice(-1)),l=!0,s=n[n.length-1],s&&s.type==="text"?(s.raw+=r.raw,s.text+=r.text):n.push(r);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return n}}class Do{constructor(e){this.options=e||Jn}code(e,n,r){const s=(n||"").match(/\S*/)[0];if(this.options.highlight){const i=this.options.highlight(e,s);i!=null&&i!==e&&(r=!0,e=i)}return e=e.replace(/\n$/,"")+`
`,s?'<pre><code class="'+this.options.langPrefix+ke(s,!0)+'">'+(r?e:ke(e,!0))+`</code></pre>
`:"<pre><code>"+(r?e:ke(e,!0))+`</code></pre>
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
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,n,r){if(e=vl(this.options.sanitize,this.options.baseUrl,e),e===null)return r;let s='<a href="'+ke(e)+'"';return n&&(s+=' title="'+n+'"'),s+=">"+r+"</a>",s}image(e,n,r){if(e=vl(this.options.sanitize,this.options.baseUrl,e),e===null)return r;let s=`<img src="${e}" alt="${r}"`;return n&&(s+=` title="${n}"`),s+=this.options.xhtml?"/>":">",s}text(e){return e}}class Qu{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,n,r){return""+r}image(e,n,r){return""+r}br(){return""}}class Zu{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,n){let r=e,s=0;if(this.seen.hasOwnProperty(r)){s=this.seen[e];do s++,r=e+"-"+s;while(this.seen.hasOwnProperty(r))}return n||(this.seen[e]=s,this.seen[r]=0),r}slug(e,n={}){const r=this.serialize(e);return this.getNextSafeSlug(r,n.dryrun)}}class mt{constructor(e){this.options=e||Jn,this.options.renderer=this.options.renderer||new Do,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Qu,this.slugger=new Zu}static parse(e,n){return new mt(n).parse(e)}static parseInline(e,n){return new mt(n).parseInline(e)}parse(e,n=!0){let r="",s,i,o,a,l,c,u,h,d,g,b,P,T,I,y,C,B,W,K;const se=e.length;for(s=0;s<se;s++){if(g=e[s],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[g.type]&&(K=this.options.extensions.renderers[g.type].call({parser:this},g),K!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(g.type))){r+=K||"";continue}switch(g.type){case"space":continue;case"hr":{r+=this.renderer.hr();continue}case"heading":{r+=this.renderer.heading(this.parseInline(g.tokens),g.depth,Yu(this.parseInline(g.tokens,this.textRenderer)),this.slugger);continue}case"code":{r+=this.renderer.code(g.text,g.lang,g.escaped);continue}case"table":{for(h="",u="",a=g.header.length,i=0;i<a;i++)u+=this.renderer.tablecell(this.parseInline(g.header[i].tokens),{header:!0,align:g.align[i]});for(h+=this.renderer.tablerow(u),d="",a=g.rows.length,i=0;i<a;i++){for(c=g.rows[i],u="",l=c.length,o=0;o<l;o++)u+=this.renderer.tablecell(this.parseInline(c[o].tokens),{header:!1,align:g.align[o]});d+=this.renderer.tablerow(u)}r+=this.renderer.table(h,d);continue}case"blockquote":{d=this.parse(g.tokens),r+=this.renderer.blockquote(d);continue}case"list":{for(b=g.ordered,P=g.start,T=g.loose,a=g.items.length,d="",i=0;i<a;i++)y=g.items[i],C=y.checked,B=y.task,I="",y.task&&(W=this.renderer.checkbox(C),T?y.tokens.length>0&&y.tokens[0].type==="paragraph"?(y.tokens[0].text=W+" "+y.tokens[0].text,y.tokens[0].tokens&&y.tokens[0].tokens.length>0&&y.tokens[0].tokens[0].type==="text"&&(y.tokens[0].tokens[0].text=W+" "+y.tokens[0].tokens[0].text)):y.tokens.unshift({type:"text",text:W}):I+=W),I+=this.parse(y.tokens,T),d+=this.renderer.listitem(I,B,C);r+=this.renderer.list(d,b,P);continue}case"html":{r+=this.renderer.html(g.text);continue}case"paragraph":{r+=this.renderer.paragraph(this.parseInline(g.tokens));continue}case"text":{for(d=g.tokens?this.parseInline(g.tokens):g.text;s+1<se&&e[s+1].type==="text";)g=e[++s],d+=`
`+(g.tokens?this.parseInline(g.tokens):g.text);r+=n?this.renderer.paragraph(d):d;continue}default:{const pe='Token with "'+g.type+'" type was not found.';if(this.options.silent){console.error(pe);return}else throw new Error(pe)}}}return r}parseInline(e,n){n=n||this.renderer;let r="",s,i,o;const a=e.length;for(s=0;s<a;s++){if(i=e[s],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]&&(o=this.options.extensions.renderers[i.type].call({parser:this},i),o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type))){r+=o||"";continue}switch(i.type){case"escape":{r+=n.text(i.text);break}case"html":{r+=n.html(i.text);break}case"link":{r+=n.link(i.href,i.title,this.parseInline(i.tokens,n));break}case"image":{r+=n.image(i.href,i.title,i.text);break}case"strong":{r+=n.strong(this.parseInline(i.tokens,n));break}case"em":{r+=n.em(this.parseInline(i.tokens,n));break}case"codespan":{r+=n.codespan(i.text);break}case"br":{r+=n.br();break}case"del":{r+=n.del(this.parseInline(i.tokens,n));break}case"text":{r+=n.text(i.text);break}default:{const l='Token with "'+i.type+'" type was not found.';if(this.options.silent){console.error(l);return}else throw new Error(l)}}}return r}}function V(t,e,n){if(typeof t>"u"||t===null)throw new Error("marked(): input parameter is undefined or null");if(typeof t!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected");if(typeof e=="function"&&(n=e,e=null),e=ot({},V.defaults,e||{}),Ju(e),n){const s=e.highlight;let i;try{i=Pt.lex(t,e)}catch(l){return n(l)}const o=function(l){let c;if(!l)try{e.walkTokens&&V.walkTokens(i,e.walkTokens),c=mt.parse(i,e)}catch(u){l=u}return e.highlight=s,l?n(l):n(null,c)};if(!s||s.length<3||(delete e.highlight,!i.length))return o();let a=0;V.walkTokens(i,function(l){l.type==="code"&&(a++,setTimeout(()=>{s(l.text,l.lang,function(c,u){if(c)return o(c);u!=null&&u!==l.text&&(l.text=u,l.escaped=!0),a--,a===0&&o()})},0))}),a===0&&o();return}function r(s){if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+ke(s.message+"",!0)+"</pre>";throw s}try{const s=Pt.lex(t,e);if(e.walkTokens){if(e.async)return Promise.all(V.walkTokens(s,e.walkTokens)).then(()=>mt.parse(s,e)).catch(r);V.walkTokens(s,e.walkTokens)}return mt.parse(s,e)}catch(s){r(s)}}V.options=V.setOptions=function(t){return ot(V.defaults,t),xb(V.defaults),V};V.getDefaults=Gu;V.defaults=Jn;V.use=function(...t){const e=ot({},...t),n=V.defaults.extensions||{renderers:{},childTokens:{}};let r;t.forEach(s=>{if(s.extensions&&(r=!0,s.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if(i.renderer){const o=n.renderers?n.renderers[i.name]:null;o?n.renderers[i.name]=function(...a){let l=i.renderer.apply(this,a);return l===!1&&(l=o.apply(this,a)),l}:n.renderers[i.name]=i.renderer}if(i.tokenizer){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");n[i.level]?n[i.level].unshift(i.tokenizer):n[i.level]=[i.tokenizer],i.start&&(i.level==="block"?n.startBlock?n.startBlock.push(i.start):n.startBlock=[i.start]:i.level==="inline"&&(n.startInline?n.startInline.push(i.start):n.startInline=[i.start]))}i.childTokens&&(n.childTokens[i.name]=i.childTokens)})),s.renderer){const i=V.defaults.renderer||new Do;for(const o in s.renderer){const a=i[o];i[o]=(...l)=>{let c=s.renderer[o].apply(i,l);return c===!1&&(c=a.apply(i,l)),c}}e.renderer=i}if(s.tokenizer){const i=V.defaults.tokenizer||new No;for(const o in s.tokenizer){const a=i[o];i[o]=(...l)=>{let c=s.tokenizer[o].apply(i,l);return c===!1&&(c=a.apply(i,l)),c}}e.tokenizer=i}if(s.walkTokens){const i=V.defaults.walkTokens;e.walkTokens=function(o){let a=[];return a.push(s.walkTokens.call(this,o)),i&&(a=a.concat(i.call(this,o))),a}}r&&(e.extensions=n),V.setOptions(e)})};V.walkTokens=function(t,e){let n=[];for(const r of t)switch(n=n.concat(e.call(V,r)),r.type){case"table":{for(const s of r.header)n=n.concat(V.walkTokens(s.tokens,e));for(const s of r.rows)for(const i of s)n=n.concat(V.walkTokens(i.tokens,e));break}case"list":{n=n.concat(V.walkTokens(r.items,e));break}default:V.defaults.extensions&&V.defaults.extensions.childTokens&&V.defaults.extensions.childTokens[r.type]?V.defaults.extensions.childTokens[r.type].forEach(function(s){n=n.concat(V.walkTokens(r[s],e))}):r.tokens&&(n=n.concat(V.walkTokens(r.tokens,e)))}return n};V.parseInline=function(t,e){if(typeof t>"u"||t===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof t!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected");e=ot({},V.defaults,e||{}),Ju(e);try{const n=Pt.lexInline(t,e);return e.walkTokens&&V.walkTokens(n,e.walkTokens),mt.parseInline(n,e)}catch(n){if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+ke(n.message+"",!0)+"</pre>";throw n}};V.Parser=mt;V.parser=mt.parse;V.Renderer=Do;V.TextRenderer=Qu;V.Lexer=Pt;V.lexer=Pt.lex;V.Tokenizer=No;V.Slugger=Zu;V.parse=V;V.options;V.setOptions;V.use;V.walkTokens;V.parseInline;mt.parse;Pt.lex;const qb=_e("p",null,[_e("strong",null,"Most Recent Post")],-1),Wb={class:"post-title"},Kb=["innerHTML"],Gb={__name:"MostRecent",async setup(t){let e,n;const r=pr(""),s=pr(""),i=Nu(),o=ju(Du(i,"articles"),qu("date","desc"),Hu("article_type","==","post"),Tb(1));return([e,n]=nd(()=>Ku(o)),e=await e,n(),e).forEach(l=>{const c=l.data();r.value=c.title,s.value=V.parse(c.content)}),(l,c)=>(nt(),Tt(Fe,null,[qb,_e("p",Wb,Rl(r.value),1),_e("p",{class:"post-body",innerHTML:s.value},null,8,Kb)],64))}},Yb={},Jb=_e("h1",null,"Create a Post",-1);function Qb(t,e){return nt(),Tt(Fe,null,[Jb,_e("p",null,[Jo(_e("input",{type:"text",placeholder:"title","onUpdate:modelValue":e[0]||(e[0]=n=>t.title=n)},null,512),[[da,t.title]])]),_e("p",null,[Jo(_e("input",{type:"textarea","onUpdate:modelValue":e[1]||(e[1]=n=>t.body=n)},null,512),[[da,t.body]])]),_e("p",null,[_e("button",{onClick:e[2]||(e[2]=(...n)=>t.submit&&t.submit(...n))},"Submit")])],64)}const Zb=wu(Yb,[["render",Qb]]),Xb={class:"dropdown-container"},ew={class:"dropdown-content"},tw={class:"dropdown-input",ref:"input",type:"text",placeholder:"Search..."},nw={__name:"DropdownSelect",setup(t){const e=pr([]),n=Nu(),r=ju(Du(n,"articles"),qu("date","desc"),Hu("article_type","==","post"));async function s(){const i=await Ku(r);i.empty||(e.value=[],i.forEach(o=>{console.log(o.data()),e.value.push(o.data())}))}return(i,o)=>(nt(),Tt("div",Xb,[_e("button",{class:"dropdown-button",onClick:s},"Choose Article"),_e("div",ew,[_e("input",tw,null,512),(nt(!0),Tt(Fe,null,Tf(e.value,a=>(nt(),Tt("li",null,Rl(a.title),1))),256))])]))}},rw={class:"main"},sw={__name:"HomeView",setup(t){return(e,n)=>(nt(),Tt("main",rw,[(nt(),jf(sf,null,{default:rn(()=>[me(Gb)]),_:1})),me(Zb),me(nw)]))}},iw=Sp({history:Hd("/"),routes:[{path:"/",name:"home",component:sw},{path:"/about",name:"about",component:()=>Kr(()=>import("./AboutView.5d97e250.js"),["assets/AboutView.5d97e250.js","assets/AboutView.e3b0c442.css"])},{path:"/sign-in",name:"sign-in",component:()=>Kr(()=>import("./SignInView.40b378e8.js"),[])},{path:"/register",name:"register",component:()=>Kr(()=>import("./RegisterView.99b0013d.js"),[])},{path:"/create",name:"create",component:()=>Kr(()=>import("./CreatePostView.38a932a4.js"),[])}]});var ow="firebase",aw="9.10.0";/**
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
 */Yt(ow,aw,"app");const lw={apiKey:"AIzaSyAEkx5h_H_jYYiA5zv-SaziecBXeDwxPJ4",authDomain:"bookclub-58f19.firebaseapp.com",projectId:"bookclub-58f19",storageBucket:"bookclub-58f19.appspot.com",messagingSenderId:"1068291885693",appId:"1:1068291885693:web:8961261fdcabbaab2d7f14",measurementId:"G-ZHW6J2Q0PG"};zg(lw);const Xu=Td(ry);Xu.use(iw);Xu.mount("#app");export{hw as D,Fe as F,wu as _,_e as a,cw as b,Tt as c,H_ as g,Nu as l,nt as o,pr as r,uw as s,xp as u,da as v,Jo as w,Du as y};
