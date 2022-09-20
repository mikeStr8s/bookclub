(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Si(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const ku="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cu=Si(ku);function ol(t){return!!t||t===""}function Ri(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ve(r)?Nu(r):Ri(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(ve(t))return t;if(le(t))return t}}const Pu=/;(?![^(]*\))/g,Ou=/:(.+)/;function Nu(t){const e={};return t.split(Pu).forEach(n=>{if(n){const r=n.split(Ou);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ai(t){let e="";if(ve(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const r=Ai(t[n]);r&&(e+=r+" ")}else if(le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Zs=t=>ve(t)?t:t==null?"":$(t)||le(t)&&(t.toString===cl||!H(t.toString))?JSON.stringify(t,al,2):String(t),al=(t,e)=>e&&e.__v_isRef?al(t,e.value):bn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:ll(e)?{[`Set(${e.size})`]:[...e.values()]}:le(e)&&!$(e)&&!ul(e)?String(e):e,se={},vn=[],Ye=()=>{},Du=()=>!1,xu=/^on[^a-z]/,ys=t=>xu.test(t),ki=t=>t.startsWith("onUpdate:"),Ce=Object.assign,Ci=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Mu=Object.prototype.hasOwnProperty,K=(t,e)=>Mu.call(t,e),$=Array.isArray,bn=t=>vs(t)==="[object Map]",ll=t=>vs(t)==="[object Set]",H=t=>typeof t=="function",ve=t=>typeof t=="string",Pi=t=>typeof t=="symbol",le=t=>t!==null&&typeof t=="object",Oi=t=>le(t)&&H(t.then)&&H(t.catch),cl=Object.prototype.toString,vs=t=>cl.call(t),Lu=t=>vs(t).slice(8,-1),ul=t=>vs(t)==="[object Object]",Ni=t=>ve(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Vr=Si(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Fu=/-(\w)/g,Rn=bs(t=>t.replace(Fu,(e,n)=>n?n.toUpperCase():"")),Uu=/\B([A-Z])/g,Ln=bs(t=>t.replace(Uu,"-$1").toLowerCase()),fl=bs(t=>t.charAt(0).toUpperCase()+t.slice(1)),Us=bs(t=>t?`on${fl(t)}`:""),rr=(t,e)=>!Object.is(t,e),jr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Qr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Xr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let To;const Bu=()=>To||(To=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let it;class $u{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&it&&(this.parent=it,this.index=(it.scopes||(it.scopes=[])).push(this)-1)}run(e){if(this.active){const n=it;try{return it=this,e()}finally{it=n}}}on(){it=this}off(){it=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Vu(t,e=it){e&&e.active&&e.effects.push(t)}const Di=t=>{const e=new Set(t);return e.w=0,e.n=0,e},hl=t=>(t.w&jt)>0,dl=t=>(t.n&jt)>0,ju=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=jt},Hu=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];hl(s)&&!dl(s)?s.delete(t):e[n++]=s,s.w&=~jt,s.n&=~jt}e.length=n}},ei=new WeakMap;let zn=0,jt=1;const ti=30;let Ke;const Xt=Symbol(""),ni=Symbol("");class xi{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Vu(this,r)}run(){if(!this.active)return this.fn();let e=Ke,n=Ft;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ke,Ke=this,Ft=!0,jt=1<<++zn,zn<=ti?ju(this):So(this),this.fn()}finally{zn<=ti&&Hu(this),jt=1<<--zn,Ke=this.parent,Ft=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ke===this?this.deferStop=!0:this.active&&(So(this),this.onStop&&this.onStop(),this.active=!1)}}function So(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Ft=!0;const pl=[];function Fn(){pl.push(Ft),Ft=!1}function Un(){const t=pl.pop();Ft=t===void 0?!0:t}function Fe(t,e,n){if(Ft&&Ke){let r=ei.get(t);r||ei.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Di()),ml(s)}}function ml(t,e){let n=!1;zn<=ti?dl(t)||(t.n|=jt,n=!hl(t)):n=!t.has(Ke),n&&(t.add(Ke),Ke.deps.push(t))}function bt(t,e,n,r,s,i){const o=ei.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t))o.forEach((l,c)=>{(c==="length"||c>=r)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?Ni(n)&&a.push(o.get("length")):(a.push(o.get(Xt)),bn(t)&&a.push(o.get(ni)));break;case"delete":$(t)||(a.push(o.get(Xt)),bn(t)&&a.push(o.get(ni)));break;case"set":bn(t)&&a.push(o.get(Xt));break}if(a.length===1)a[0]&&ri(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);ri(Di(l))}}function ri(t,e){const n=$(t)?t:[...t];for(const r of n)r.computed&&Ro(r);for(const r of n)r.computed||Ro(r)}function Ro(t,e){(t!==Ke||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const qu=Si("__proto__,__v_isRef,__isVue"),gl=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Pi)),zu=Mi(),Wu=Mi(!1,!0),Ku=Mi(!0),Ao=Gu();function Gu(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Q(this);for(let i=0,o=this.length;i<o;i++)Fe(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Q)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Fn();const r=Q(this)[e].apply(this,n);return Un(),r}}),t}function Mi(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?ff:wl:e?bl:vl).get(r))return r;const o=$(r);if(!t&&o&&K(Ao,s))return Reflect.get(Ao,s,i);const a=Reflect.get(r,s,i);return(Pi(s)?gl.has(s):qu(s))||(t||Fe(r,"get",s),e)?a:Re(a)?o&&Ni(s)?a:a.value:le(a)?t?El(a):wr(a):a}}const Yu=_l(),Ju=_l(!0);function _l(t=!1){return function(n,r,s,i){let o=n[r];if(An(o)&&Re(o)&&!Re(s))return!1;if(!t&&(!Zr(s)&&!An(s)&&(o=Q(o),s=Q(s)),!$(n)&&Re(o)&&!Re(s)))return o.value=s,!0;const a=$(n)&&Ni(r)?Number(r)<n.length:K(n,r),l=Reflect.set(n,r,s,i);return n===Q(i)&&(a?rr(s,o)&&bt(n,"set",r,s):bt(n,"add",r,s)),l}}function Qu(t,e){const n=K(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&bt(t,"delete",e,void 0),r}function Xu(t,e){const n=Reflect.has(t,e);return(!Pi(e)||!gl.has(e))&&Fe(t,"has",e),n}function Zu(t){return Fe(t,"iterate",$(t)?"length":Xt),Reflect.ownKeys(t)}const yl={get:zu,set:Yu,deleteProperty:Qu,has:Xu,ownKeys:Zu},ef={get:Ku,set(t,e){return!0},deleteProperty(t,e){return!0}},tf=Ce({},yl,{get:Wu,set:Ju}),Li=t=>t,ws=t=>Reflect.getPrototypeOf(t);function Nr(t,e,n=!1,r=!1){t=t.__v_raw;const s=Q(t),i=Q(e);n||(e!==i&&Fe(s,"get",e),Fe(s,"get",i));const{has:o}=ws(s),a=r?Li:n?Bi:sr;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Dr(t,e=!1){const n=this.__v_raw,r=Q(n),s=Q(t);return e||(t!==s&&Fe(r,"has",t),Fe(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function xr(t,e=!1){return t=t.__v_raw,!e&&Fe(Q(t),"iterate",Xt),Reflect.get(t,"size",t)}function ko(t){t=Q(t);const e=Q(this);return ws(e).has.call(e,t)||(e.add(t),bt(e,"add",t,t)),this}function Co(t,e){e=Q(e);const n=Q(this),{has:r,get:s}=ws(n);let i=r.call(n,t);i||(t=Q(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?rr(e,o)&&bt(n,"set",t,e):bt(n,"add",t,e),this}function Po(t){const e=Q(this),{has:n,get:r}=ws(e);let s=n.call(e,t);s||(t=Q(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&bt(e,"delete",t,void 0),i}function Oo(){const t=Q(this),e=t.size!==0,n=t.clear();return e&&bt(t,"clear",void 0,void 0),n}function Mr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Q(o),l=e?Li:t?Bi:sr;return!t&&Fe(a,"iterate",Xt),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function Lr(t,e,n){return function(...r){const s=this.__v_raw,i=Q(s),o=bn(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?Li:e?Bi:sr;return!e&&Fe(i,"iterate",l?ni:Xt),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Rt(t){return function(...e){return t==="delete"?!1:this}}function nf(){const t={get(i){return Nr(this,i)},get size(){return xr(this)},has:Dr,add:ko,set:Co,delete:Po,clear:Oo,forEach:Mr(!1,!1)},e={get(i){return Nr(this,i,!1,!0)},get size(){return xr(this)},has:Dr,add:ko,set:Co,delete:Po,clear:Oo,forEach:Mr(!1,!0)},n={get(i){return Nr(this,i,!0)},get size(){return xr(this,!0)},has(i){return Dr.call(this,i,!0)},add:Rt("add"),set:Rt("set"),delete:Rt("delete"),clear:Rt("clear"),forEach:Mr(!0,!1)},r={get(i){return Nr(this,i,!0,!0)},get size(){return xr(this,!0)},has(i){return Dr.call(this,i,!0)},add:Rt("add"),set:Rt("set"),delete:Rt("delete"),clear:Rt("clear"),forEach:Mr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Lr(i,!1,!1),n[i]=Lr(i,!0,!1),e[i]=Lr(i,!1,!0),r[i]=Lr(i,!0,!0)}),[t,n,e,r]}const[rf,sf,of,af]=nf();function Fi(t,e){const n=e?t?af:of:t?sf:rf;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(K(n,s)&&s in r?n:r,s,i)}const lf={get:Fi(!1,!1)},cf={get:Fi(!1,!0)},uf={get:Fi(!0,!1)},vl=new WeakMap,bl=new WeakMap,wl=new WeakMap,ff=new WeakMap;function hf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function df(t){return t.__v_skip||!Object.isExtensible(t)?0:hf(Lu(t))}function wr(t){return An(t)?t:Ui(t,!1,yl,lf,vl)}function pf(t){return Ui(t,!1,tf,cf,bl)}function El(t){return Ui(t,!0,ef,uf,wl)}function Ui(t,e,n,r,s){if(!le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=df(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function wn(t){return An(t)?wn(t.__v_raw):!!(t&&t.__v_isReactive)}function An(t){return!!(t&&t.__v_isReadonly)}function Zr(t){return!!(t&&t.__v_isShallow)}function Il(t){return wn(t)||An(t)}function Q(t){const e=t&&t.__v_raw;return e?Q(e):t}function Tl(t){return Qr(t,"__v_skip",!0),t}const sr=t=>le(t)?wr(t):t,Bi=t=>le(t)?El(t):t;function Sl(t){Ft&&Ke&&(t=Q(t),ml(t.dep||(t.dep=Di())))}function Rl(t,e){t=Q(t),t.dep&&ri(t.dep)}function Re(t){return!!(t&&t.__v_isRef===!0)}function ir(t){return Al(t,!1)}function mf(t){return Al(t,!0)}function Al(t,e){return Re(t)?t:new gf(t,e)}class gf{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Q(e),this._value=n?e:sr(e)}get value(){return Sl(this),this._value}set value(e){const n=this.__v_isShallow||Zr(e)||An(e);e=n?e:Q(e),rr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:sr(e),Rl(this))}}function $e(t){return Re(t)?t.value:t}const _f={get:(t,e,n)=>$e(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Re(s)&&!Re(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function kl(t){return wn(t)?t:new Proxy(t,_f)}var Cl;class yf{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Cl]=!1,this._dirty=!0,this.effect=new xi(e,()=>{this._dirty||(this._dirty=!0,Rl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Q(this);return Sl(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Cl="__v_isReadonly";function vf(t,e,n=!1){let r,s;const i=H(t);return i?(r=t,s=Ye):(r=t.get,s=t.set),new yf(r,s,i||!s,n)}function Ut(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Er(i,e,n)}return s}function Je(t,e,n,r){if(H(t)){const i=Ut(t,e,n,r);return i&&Oi(i)&&i.catch(o=>{Er(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Je(t[i],e,n,r));return s}function Er(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Ut(l,null,10,[t,o,a]);return}}bf(t,n,s,r)}function bf(t,e,n,r=!0){console.error(t)}let or=!1,si=!1;const Se=[];let ot=0;const En=[];let pt=null,Gt=0;const Pl=Promise.resolve();let $i=null;function Ol(t){const e=$i||Pl;return t?e.then(this?t.bind(this):t):e}function wf(t){let e=ot+1,n=Se.length;for(;e<n;){const r=e+n>>>1;ar(Se[r])<t?e=r+1:n=r}return e}function Vi(t){(!Se.length||!Se.includes(t,or&&t.allowRecurse?ot+1:ot))&&(t.id==null?Se.push(t):Se.splice(wf(t.id),0,t),Nl())}function Nl(){!or&&!si&&(si=!0,$i=Pl.then(Ml))}function Ef(t){const e=Se.indexOf(t);e>ot&&Se.splice(e,1)}function Dl(t){$(t)?En.push(...t):(!pt||!pt.includes(t,t.allowRecurse?Gt+1:Gt))&&En.push(t),Nl()}function No(t,e=or?ot+1:0){for(;e<Se.length;e++){const n=Se[e];n&&n.pre&&(Se.splice(e,1),e--,n())}}function xl(t){if(En.length){const e=[...new Set(En)];if(En.length=0,pt){pt.push(...e);return}for(pt=e,pt.sort((n,r)=>ar(n)-ar(r)),Gt=0;Gt<pt.length;Gt++)pt[Gt]();pt=null,Gt=0}}const ar=t=>t.id==null?1/0:t.id,If=(t,e)=>{const n=ar(t)-ar(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ml(t){si=!1,or=!0,Se.sort(If);const e=Ye;try{for(ot=0;ot<Se.length;ot++){const n=Se[ot];n&&n.active!==!1&&Ut(n,null,14)}}finally{ot=0,Se.length=0,xl(),or=!1,$i=null,(Se.length||En.length)&&Ml()}}function Tf(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||se;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=r[u]||se;d&&(s=n.map(g=>g.trim())),f&&(s=n.map(Xr))}let a,l=r[a=Us(e)]||r[a=Us(Rn(e))];!l&&i&&(l=r[a=Us(Ln(e))]),l&&Je(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Je(c,t,6,s)}}function Ll(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!H(t)){const l=c=>{const u=Ll(c,e,!0);u&&(a=!0,Ce(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(le(t)&&r.set(t,null),null):($(i)?i.forEach(l=>o[l]=null):Ce(o,i),le(t)&&r.set(t,o),o)}function Es(t,e){return!t||!ys(e)?!1:(e=e.slice(2).replace(/Once$/,""),K(t,e[0].toLowerCase()+e.slice(1))||K(t,Ln(e))||K(t,e))}let Ge=null,Fl=null;function es(t){const e=Ge;return Ge=t,Fl=t&&t.type.__scopeId||null,e}function Yt(t,e=Ge,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ho(-1);const i=es(e),o=t(...s);return es(i),r._d&&Ho(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Bs(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:d,setupState:g,ctx:b,inheritAttrs:x}=t;let A,k;const E=es(t);try{if(n.shapeFlag&4){const q=s||r;A=ze(u.call(q,q,f,i,g,d,b)),k=l}else{const q=e;A=ze(q.length>1?q(i,{attrs:l,slots:a,emit:c}):q(i,null)),k=e.props?l:Rf(l)}}catch(q){Gn.length=0,Er(q,t,1),A=ce(en)}let P=A;if(k&&x!==!1){const q=Object.keys(k),{shapeFlag:Y}=P;q.length&&Y&7&&(o&&q.some(ki)&&(k=Af(k,o)),P=Cn(P,k))}return n.dirs&&(P=Cn(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),A=P,es(E),A}function Sf(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(rs(r)){if(r.type!==en||r.children==="v-if"){if(e)return;e=r}}else return}return e}const Rf=t=>{let e;for(const n in t)(n==="class"||n==="style"||ys(n))&&((e||(e={}))[n]=t[n]);return e},Af=(t,e)=>{const n={};for(const r in t)(!ki(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function kf(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Do(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==r[d]&&!Es(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Do(r,o,c):!0:!!o;return!1}function Do(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Es(n,i))return!0}return!1}function ji({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Cf=t=>t.__isSuspense,Pf={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,l,c){t==null?Nf(e,n,r,s,i,o,a,l,c):Df(t,e,n,r,s,o,a,l,c)},hydrate:xf,create:Hi,normalize:Mf},Of=Pf;function lr(t,e){const n=t.props&&t.props[e];H(n)&&n()}function Nf(t,e,n,r,s,i,o,a,l){const{p:c,o:{createElement:u}}=l,f=u("div"),d=t.suspense=Hi(t,s,r,e,f,n,i,o,a,l);c(null,d.pendingBranch=t.ssContent,f,null,r,d,i,o),d.deps>0?(lr(t,"onPending"),lr(t,"onFallback"),c(null,t.ssFallback,e,n,r,null,i,o),In(d,t.ssFallback)):d.resolve()}function Df(t,e,n,r,s,i,o,a,{p:l,um:c,o:{createElement:u}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const d=e.ssContent,g=e.ssFallback,{activeBranch:b,pendingBranch:x,isInFallback:A,isHydrating:k}=f;if(x)f.pendingBranch=d,Nt(d,x)?(l(x,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():A&&(l(b,g,n,r,s,null,i,o,a),In(f,g))):(f.pendingId++,k?(f.isHydrating=!1,f.activeBranch=x):c(x,s,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),A?(l(null,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():(l(b,g,n,r,s,null,i,o,a),In(f,g))):b&&Nt(d,b)?(l(b,d,n,r,s,f,i,o,a),f.resolve(!0)):(l(null,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0&&f.resolve()));else if(b&&Nt(d,b))l(b,d,n,r,s,f,i,o,a),In(f,d);else if(lr(e,"onPending"),f.pendingBranch=d,f.pendingId++,l(null,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0)f.resolve();else{const{timeout:E,pendingId:P}=f;E>0?setTimeout(()=>{f.pendingId===P&&f.fallback(g)},E):E===0&&f.fallback(g)}}function Hi(t,e,n,r,s,i,o,a,l,c,u=!1){const{p:f,m:d,um:g,n:b,o:{parentNode:x,remove:A}}=c,k=Xr(t.props&&t.props.timeout),E={vnode:t,parent:e,parentComponent:n,isSVG:o,container:r,hiddenContainer:s,anchor:i,deps:0,pendingId:0,timeout:typeof k=="number"?k:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(P=!1){const{vnode:q,activeBranch:Y,pendingBranch:J,pendingId:he,effects:be,parentComponent:ue,container:Te}=E;if(E.isHydrating)E.isHydrating=!1;else if(!P){const ft=Y&&J.transition&&J.transition.mode==="out-in";ft&&(Y.transition.afterLeave=()=>{he===E.pendingId&&d(J,Te,tt,0)});let{anchor:tt}=E;Y&&(tt=b(Y),g(Y,ue,E,!0)),ft||d(J,Te,tt,0)}In(E,J),E.pendingBranch=null,E.isInFallback=!1;let _e=E.parent,Pe=!1;for(;_e;){if(_e.pendingBranch){_e.effects.push(...be),Pe=!0;break}_e=_e.parent}Pe||Dl(be),E.effects=[],lr(q,"onResolve")},fallback(P){if(!E.pendingBranch)return;const{vnode:q,activeBranch:Y,parentComponent:J,container:he,isSVG:be}=E;lr(q,"onFallback");const ue=b(Y),Te=()=>{!E.isInFallback||(f(null,P,he,ue,J,null,be,a,l),In(E,P))},_e=P.transition&&P.transition.mode==="out-in";_e&&(Y.transition.afterLeave=Te),E.isInFallback=!0,g(Y,J,null,!0),_e||Te()},move(P,q,Y){E.activeBranch&&d(E.activeBranch,P,q,Y),E.container=P},next(){return E.activeBranch&&b(E.activeBranch)},registerDep(P,q){const Y=!!E.pendingBranch;Y&&E.deps++;const J=P.vnode.el;P.asyncDep.catch(he=>{Er(he,P,0)}).then(he=>{if(P.isUnmounted||E.isUnmounted||E.pendingId!==P.suspenseId)return;P.asyncResolved=!0;const{vnode:be}=P;ui(P,he,!1),J&&(be.el=J);const ue=!J&&P.subTree.el;q(P,be,x(J||P.subTree.el),J?null:b(P.subTree),E,o,l),ue&&A(ue),ji(P,be.el),Y&&--E.deps===0&&E.resolve()})},unmount(P,q){E.isUnmounted=!0,E.activeBranch&&g(E.activeBranch,n,P,q),E.pendingBranch&&g(E.pendingBranch,n,P,q)}};return E}function xf(t,e,n,r,s,i,o,a,l){const c=e.suspense=Hi(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,i,o);return c.deps===0&&c.resolve(),u}function Mf(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=xo(r?n.default:n),t.ssFallback=r?xo(n.fallback):ce(en)}function xo(t){let e;if(H(t)){const n=kn&&t._c;n&&(t._d=!1,Qe()),t=t(),n&&(t._d=!0,e=je,Xl())}return $(t)&&(t=Sf(t)),t=ze(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Lf(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):Dl(t)}function In(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,s=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=s,ji(r,s))}function Hr(t,e){if(Ee){let n=Ee.provides;const r=Ee.parent&&Ee.parent.provides;r===n&&(n=Ee.provides=Object.create(r)),n[t]=e}}function _t(t,e,n=!1){const r=Ee||Ge;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&H(e)?e.call(r.proxy):e}}const Mo={};function qr(t,e,n){return Ul(t,e,n)}function Ul(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=se){const a=Ee;let l,c=!1,u=!1;if(Re(t)?(l=()=>t.value,c=Zr(t)):wn(t)?(l=()=>t,r=!0):$(t)?(u=!0,c=t.some(k=>wn(k)||Zr(k)),l=()=>t.map(k=>{if(Re(k))return k.value;if(wn(k))return Qt(k);if(H(k))return Ut(k,a,2)})):H(t)?e?l=()=>Ut(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),Je(t,a,3,[d])}:l=Ye,e&&r){const k=l;l=()=>Qt(k())}let f,d=k=>{f=A.onStop=()=>{Ut(k,a,4)}};if(cr)return d=Ye,e?n&&Je(e,a,3,[l(),u?[]:void 0,d]):l(),Ye;let g=u?[]:Mo;const b=()=>{if(!!A.active)if(e){const k=A.run();(r||c||(u?k.some((E,P)=>rr(E,g[P])):rr(k,g)))&&(f&&f(),Je(e,a,3,[k,g===Mo?void 0:g,d]),g=k)}else A.run()};b.allowRecurse=!!e;let x;s==="sync"?x=b:s==="post"?x=()=>Oe(b,a&&a.suspense):(b.pre=!0,a&&(b.id=a.uid),x=()=>Vi(b));const A=new xi(l,x);return e?n?b():g=A.run():s==="post"?Oe(A.run.bind(A),a&&a.suspense):A.run(),()=>{A.stop(),a&&a.scope&&Ci(a.scope.effects,A)}}function Ff(t,e,n){const r=this.proxy,s=ve(t)?t.includes(".")?Bl(r,t):()=>r[t]:t.bind(r,r);let i;H(e)?i=e:(i=e.handler,n=e);const o=Ee;Ht(this);const a=Ul(s,i.bind(r),n);return o?Ht(o):Bt(),a}function Bl(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Qt(t,e){if(!le(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Re(t))Qt(t.value,e);else if($(t))for(let n=0;n<t.length;n++)Qt(t[n],e);else if(ll(t)||bn(t))t.forEach(n=>{Qt(n,e)});else if(ul(t))for(const n in t)Qt(t[n],e);return t}function $l(t){return H(t)?{setup:t,name:t.name}:t}const zr=t=>!!t.type.__asyncLoader,Vl=t=>t.type.__isKeepAlive;function Uf(t,e){jl(t,"a",e)}function Bf(t,e){jl(t,"da",e)}function jl(t,e,n=Ee){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Is(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Vl(s.parent.vnode)&&$f(r,e,n,s),s=s.parent}}function $f(t,e,n,r){const s=Is(e,t,r,!0);Hl(()=>{Ci(r[e],s)},n)}function Is(t,e,n=Ee,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Fn(),Ht(n);const a=Je(e,n,t,o);return Bt(),Un(),a});return r?s.unshift(i):s.push(i),i}}const Tt=t=>(e,n=Ee)=>(!cr||t==="sp")&&Is(t,e,n),Vf=Tt("bm"),jf=Tt("m"),Hf=Tt("bu"),qf=Tt("u"),zf=Tt("bum"),Hl=Tt("um"),Wf=Tt("sp"),Kf=Tt("rtg"),Gf=Tt("rtc");function Yf(t,e=Ee){Is("ec",t,e)}function Lo(t,e){const n=Ge;if(n===null)return t;const r=Ss(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=se]=e[i];H(o)&&(o={mounted:o,updated:o}),o.deep&&Qt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function qt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Fn(),Je(l,n,8,[t.el,a,t,e]),Un())}}const Jf=Symbol();function Qf(t,e,n,r){let s;const i=n&&n[r];if($(t)||ve(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(le(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const ii=t=>t?tc(t)?Ss(t)||t.proxy:ii(t.parent):null,ts=Ce(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ii(t.parent),$root:t=>ii(t.root),$emit:t=>t.emit,$options:t=>qi(t),$forceUpdate:t=>t.f||(t.f=()=>Vi(t.update)),$nextTick:t=>t.n||(t.n=Ol.bind(t.proxy)),$watch:t=>Ff.bind(t)}),Xf={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==se&&K(r,e))return o[e]=1,r[e];if(s!==se&&K(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&K(c,e))return o[e]=3,i[e];if(n!==se&&K(n,e))return o[e]=4,n[e];oi&&(o[e]=0)}}const u=ts[e];let f,d;if(u)return e==="$attrs"&&Fe(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==se&&K(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,K(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==se&&K(s,e)?(s[e]=n,!0):r!==se&&K(r,e)?(r[e]=n,!0):K(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==se&&K(t,o)||e!==se&&K(e,o)||(a=i[0])&&K(a,o)||K(r,o)||K(ts,o)||K(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:K(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let oi=!0;function Zf(t){const e=qi(t),n=t.proxy,r=t.ctx;oi=!1,e.beforeCreate&&Fo(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:g,updated:b,activated:x,deactivated:A,beforeDestroy:k,beforeUnmount:E,destroyed:P,unmounted:q,render:Y,renderTracked:J,renderTriggered:he,errorCaptured:be,serverPrefetch:ue,expose:Te,inheritAttrs:_e,components:Pe,directives:ft,filters:tt}=e;if(c&&eh(c,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ie in o){const te=o[ie];H(te)&&(r[ie]=te.bind(n))}if(s){const ie=s.call(n,n);le(ie)&&(t.data=wr(ie))}if(oi=!0,i)for(const ie in i){const te=i[ie],Ne=H(te)?te.bind(n,n):H(te.get)?te.get.bind(n,n):Ye,fn=!H(te)&&H(te.set)?te.set.bind(n):Ye,ht=Ve({get:Ne,set:fn});Object.defineProperty(r,ie,{enumerable:!0,configurable:!0,get:()=>ht.value,set:nt=>ht.value=nt})}if(a)for(const ie in a)ql(a[ie],r,n,ie);if(l){const ie=H(l)?l.call(n):l;Reflect.ownKeys(ie).forEach(te=>{Hr(te,ie[te])})}u&&Fo(u,t,"c");function pe(ie,te){$(te)?te.forEach(Ne=>ie(Ne.bind(n))):te&&ie(te.bind(n))}if(pe(Vf,f),pe(jf,d),pe(Hf,g),pe(qf,b),pe(Uf,x),pe(Bf,A),pe(Yf,be),pe(Gf,J),pe(Kf,he),pe(zf,E),pe(Hl,q),pe(Wf,ue),$(Te))if(Te.length){const ie=t.exposed||(t.exposed={});Te.forEach(te=>{Object.defineProperty(ie,te,{get:()=>n[te],set:Ne=>n[te]=Ne})})}else t.exposed||(t.exposed={});Y&&t.render===Ye&&(t.render=Y),_e!=null&&(t.inheritAttrs=_e),Pe&&(t.components=Pe),ft&&(t.directives=ft)}function eh(t,e,n=Ye,r=!1){$(t)&&(t=ai(t));for(const s in t){const i=t[s];let o;le(i)?"default"in i?o=_t(i.from||s,i.default,!0):o=_t(i.from||s):o=_t(i),Re(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Fo(t,e,n){Je($(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ql(t,e,n,r){const s=r.includes(".")?Bl(n,r):()=>n[r];if(ve(t)){const i=e[t];H(i)&&qr(s,i)}else if(H(t))qr(s,t.bind(n));else if(le(t))if($(t))t.forEach(i=>ql(i,e,n,r));else{const i=H(t.handler)?t.handler.bind(n):e[t.handler];H(i)&&qr(s,i,t)}}function qi(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>ns(l,c,o,!0)),ns(l,e,o)),le(e)&&i.set(e,l),l}function ns(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ns(t,i,n,!0),s&&s.forEach(o=>ns(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=th[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const th={data:Uo,props:Wt,emits:Wt,methods:Wt,computed:Wt,beforeCreate:ke,created:ke,beforeMount:ke,mounted:ke,beforeUpdate:ke,updated:ke,beforeDestroy:ke,beforeUnmount:ke,destroyed:ke,unmounted:ke,activated:ke,deactivated:ke,errorCaptured:ke,serverPrefetch:ke,components:Wt,directives:Wt,watch:rh,provide:Uo,inject:nh};function Uo(t,e){return e?t?function(){return Ce(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function nh(t,e){return Wt(ai(t),ai(e))}function ai(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ke(t,e){return t?[...new Set([].concat(t,e))]:e}function Wt(t,e){return t?Ce(Ce(Object.create(null),t),e):e}function rh(t,e){if(!t)return e;if(!e)return t;const n=Ce(Object.create(null),t);for(const r in e)n[r]=ke(t[r],e[r]);return n}function sh(t,e,n,r=!1){const s={},i={};Qr(i,Ts,1),t.propsDefaults=Object.create(null),zl(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:pf(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function ih(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Q(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Es(t.emitsOptions,d))continue;const g=e[d];if(l)if(K(i,d))g!==i[d]&&(i[d]=g,c=!0);else{const b=Rn(d);s[b]=li(l,a,b,g,t,!1)}else g!==i[d]&&(i[d]=g,c=!0)}}}else{zl(t,e,s,i)&&(c=!0);let u;for(const f in a)(!e||!K(e,f)&&((u=Ln(f))===f||!K(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=li(l,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!K(e,f)&&!0)&&(delete i[f],c=!0)}c&&bt(t,"set","$attrs")}function zl(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Vr(l))continue;const c=e[l];let u;s&&K(s,u=Rn(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:Es(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=Q(n),c=a||se;for(let u=0;u<i.length;u++){const f=i[u];n[f]=li(s,l,f,c[f],t,!K(c,f))}}return o}function li(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=K(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&H(l)){const{propsDefaults:c}=s;n in c?r=c[n]:(Ht(s),r=c[n]=l.call(null,e),Bt())}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Ln(n))&&(r=!0))}return r}function Wl(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!H(t)){const u=f=>{l=!0;const[d,g]=Wl(f,e,!0);Ce(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return le(t)&&r.set(t,vn),vn;if($(i))for(let u=0;u<i.length;u++){const f=Rn(i[u]);Bo(f)&&(o[f]=se)}else if(i)for(const u in i){const f=Rn(u);if(Bo(f)){const d=i[u],g=o[f]=$(d)||H(d)?{type:d}:d;if(g){const b=jo(Boolean,g.type),x=jo(String,g.type);g[0]=b>-1,g[1]=x<0||b<x,(b>-1||K(g,"default"))&&a.push(f)}}}const c=[o,a];return le(t)&&r.set(t,c),c}function Bo(t){return t[0]!=="$"}function $o(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Vo(t,e){return $o(t)===$o(e)}function jo(t,e){return $(e)?e.findIndex(n=>Vo(n,t)):H(e)&&Vo(e,t)?0:-1}const Kl=t=>t[0]==="_"||t==="$stable",zi=t=>$(t)?t.map(ze):[ze(t)],oh=(t,e,n)=>{if(e._n)return e;const r=Yt((...s)=>zi(e(...s)),n);return r._c=!1,r},Gl=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Kl(s))continue;const i=t[s];if(H(i))e[s]=oh(s,i,r);else if(i!=null){const o=zi(i);e[s]=()=>o}}},Yl=(t,e)=>{const n=zi(e);t.slots.default=()=>n},ah=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Q(e),Qr(e,"_",n)):Gl(e,t.slots={})}else t.slots={},e&&Yl(t,e);Qr(t.slots,Ts,1)},lh=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=se;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ce(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Gl(e,s)),o=e}else e&&(Yl(t,e),o={default:1});if(i)for(const a in s)!Kl(a)&&!(a in o)&&delete s[a]};function Jl(){return{app:null,config:{isNativeTag:Du,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ch=0;function uh(t,e){return function(r,s=null){H(r)||(r=Object.assign({},r)),s!=null&&!le(s)&&(s=null);const i=Jl(),o=new Set;let a=!1;const l=i.app={_uid:ch++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Ch,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&H(c.install)?(o.add(c),c.install(l,...u)):H(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,f){if(!a){const d=ce(r,s);return d.appContext=i,u&&e?e(d,c):t(d,c,f),a=!0,l._container=c,c.__vue_app__=l,Ss(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l}};return l}}function ci(t,e,n,r,s=!1){if($(t)){t.forEach((d,g)=>ci(d,e&&($(e)?e[g]:e),n,r,s));return}if(zr(r)&&!s)return;const i=r.shapeFlag&4?Ss(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===se?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(ve(c)?(u[c]=null,K(f,c)&&(f[c]=null)):Re(c)&&(c.value=null)),H(l))Ut(l,a,12,[o,u]);else{const d=ve(l),g=Re(l);if(d||g){const b=()=>{if(t.f){const x=d?u[l]:l.value;s?$(x)&&Ci(x,i):$(x)?x.includes(i)||x.push(i):d?(u[l]=[i],K(f,l)&&(f[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,K(f,l)&&(f[l]=o)):g&&(l.value=o,t.k&&(u[t.k]=o))};o?(b.id=-1,Oe(b,n)):b()}}}const Oe=Lf;function fh(t){return hh(t)}function hh(t,e){const n=Bu();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:g=Ye,cloneNode:b,insertStaticContent:x}=t,A=(h,p,m,v=null,y=null,T=null,C=!1,I=null,S=!!p.dynamicChildren)=>{if(h===p)return;h&&!Nt(h,p)&&(v=D(h),Ue(h,y,T,!0),h=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:w,ref:M,shapeFlag:O}=p;switch(w){case Wi:k(h,p,m,v);break;case en:E(h,p,m,v);break;case $s:h==null&&P(p,m,v,C);break;case xe:ft(h,p,m,v,y,T,C,I,S);break;default:O&1?J(h,p,m,v,y,T,C,I,S):O&6?tt(h,p,m,v,y,T,C,I,S):(O&64||O&128)&&w.process(h,p,m,v,y,T,C,I,S,oe)}M!=null&&y&&ci(M,h&&h.ref,T,p||h,!p)},k=(h,p,m,v)=>{if(h==null)r(p.el=a(p.children),m,v);else{const y=p.el=h.el;p.children!==h.children&&c(y,p.children)}},E=(h,p,m,v)=>{h==null?r(p.el=l(p.children||""),m,v):p.el=h.el},P=(h,p,m,v)=>{[h.el,h.anchor]=x(h.children,p,m,v,h.el,h.anchor)},q=({el:h,anchor:p},m,v)=>{let y;for(;h&&h!==p;)y=d(h),r(h,m,v),h=y;r(p,m,v)},Y=({el:h,anchor:p})=>{let m;for(;h&&h!==p;)m=d(h),s(h),h=m;s(p)},J=(h,p,m,v,y,T,C,I,S)=>{C=C||p.type==="svg",h==null?he(p,m,v,y,T,C,I,S):Te(h,p,y,T,C,I,S)},he=(h,p,m,v,y,T,C,I)=>{let S,w;const{type:M,props:O,shapeFlag:L,transition:B,patchFlag:G,dirs:ne}=h;if(h.el&&b!==void 0&&G===-1)S=h.el=b(h.el);else{if(S=h.el=o(h.type,T,O&&O.is,O),L&8?u(S,h.children):L&16&&ue(h.children,S,null,v,y,T&&M!=="foreignObject",C,I),ne&&qt(h,null,v,"created"),O){for(const ae in O)ae!=="value"&&!Vr(ae)&&i(S,ae,null,O[ae],T,h.children,v,y,R);"value"in O&&i(S,"value",null,O.value),(w=O.onVnodeBeforeMount)&&st(w,v,h)}be(S,h,h.scopeId,C,v)}ne&&qt(h,null,v,"beforeMount");const re=(!y||y&&!y.pendingBranch)&&B&&!B.persisted;re&&B.beforeEnter(S),r(S,p,m),((w=O&&O.onVnodeMounted)||re||ne)&&Oe(()=>{w&&st(w,v,h),re&&B.enter(S),ne&&qt(h,null,v,"mounted")},y)},be=(h,p,m,v,y)=>{if(m&&g(h,m),v)for(let T=0;T<v.length;T++)g(h,v[T]);if(y){let T=y.subTree;if(p===T){const C=y.vnode;be(h,C,C.scopeId,C.slotScopeIds,y.parent)}}},ue=(h,p,m,v,y,T,C,I,S=0)=>{for(let w=S;w<h.length;w++){const M=h[w]=I?Ct(h[w]):ze(h[w]);A(null,M,p,m,v,y,T,C,I)}},Te=(h,p,m,v,y,T,C)=>{const I=p.el=h.el;let{patchFlag:S,dynamicChildren:w,dirs:M}=p;S|=h.patchFlag&16;const O=h.props||se,L=p.props||se;let B;m&&zt(m,!1),(B=L.onVnodeBeforeUpdate)&&st(B,m,p,h),M&&qt(p,h,m,"beforeUpdate"),m&&zt(m,!0);const G=y&&p.type!=="foreignObject";if(w?_e(h.dynamicChildren,w,I,m,v,G,T):C||Ne(h,p,I,null,m,v,G,T,!1),S>0){if(S&16)Pe(I,p,O,L,m,v,y);else if(S&2&&O.class!==L.class&&i(I,"class",null,L.class,y),S&4&&i(I,"style",O.style,L.style,y),S&8){const ne=p.dynamicProps;for(let re=0;re<ne.length;re++){const ae=ne[re],qe=O[ae],hn=L[ae];(hn!==qe||ae==="value")&&i(I,ae,qe,hn,y,h.children,m,v,R)}}S&1&&h.children!==p.children&&u(I,p.children)}else!C&&w==null&&Pe(I,p,O,L,m,v,y);((B=L.onVnodeUpdated)||M)&&Oe(()=>{B&&st(B,m,p,h),M&&qt(p,h,m,"updated")},v)},_e=(h,p,m,v,y,T,C)=>{for(let I=0;I<p.length;I++){const S=h[I],w=p[I],M=S.el&&(S.type===xe||!Nt(S,w)||S.shapeFlag&70)?f(S.el):m;A(S,w,M,null,v,y,T,C,!0)}},Pe=(h,p,m,v,y,T,C)=>{if(m!==v){for(const I in v){if(Vr(I))continue;const S=v[I],w=m[I];S!==w&&I!=="value"&&i(h,I,w,S,C,p.children,y,T,R)}if(m!==se)for(const I in m)!Vr(I)&&!(I in v)&&i(h,I,m[I],null,C,p.children,y,T,R);"value"in v&&i(h,"value",m.value,v.value)}},ft=(h,p,m,v,y,T,C,I,S)=>{const w=p.el=h?h.el:a(""),M=p.anchor=h?h.anchor:a("");let{patchFlag:O,dynamicChildren:L,slotScopeIds:B}=p;B&&(I=I?I.concat(B):B),h==null?(r(w,m,v),r(M,m,v),ue(p.children,m,M,y,T,C,I,S)):O>0&&O&64&&L&&h.dynamicChildren?(_e(h.dynamicChildren,L,m,y,T,C,I),(p.key!=null||y&&p===y.subTree)&&Ql(h,p,!0)):Ne(h,p,m,M,y,T,C,I,S)},tt=(h,p,m,v,y,T,C,I,S)=>{p.slotScopeIds=I,h==null?p.shapeFlag&512?y.ctx.activate(p,m,v,C,S):un(p,m,v,y,T,C,S):pe(h,p,S)},un=(h,p,m,v,y,T,C)=>{const I=h.component=wh(h,v,y);if(Vl(h)&&(I.ctx.renderer=oe),Ih(I),I.asyncDep){if(y&&y.registerDep(I,ie),!h.el){const S=I.subTree=ce(en);E(null,S,p,m)}return}ie(I,h,p,m,y,T,C)},pe=(h,p,m)=>{const v=p.component=h.component;if(kf(h,p,m))if(v.asyncDep&&!v.asyncResolved){te(v,p,m);return}else v.next=p,Ef(v.update),v.update();else p.el=h.el,v.vnode=p},ie=(h,p,m,v,y,T,C)=>{const I=()=>{if(h.isMounted){let{next:M,bu:O,u:L,parent:B,vnode:G}=h,ne=M,re;zt(h,!1),M?(M.el=G.el,te(h,M,C)):M=G,O&&jr(O),(re=M.props&&M.props.onVnodeBeforeUpdate)&&st(re,B,M,G),zt(h,!0);const ae=Bs(h),qe=h.subTree;h.subTree=ae,A(qe,ae,f(qe.el),D(qe),h,y,T),M.el=ae.el,ne===null&&ji(h,ae.el),L&&Oe(L,y),(re=M.props&&M.props.onVnodeUpdated)&&Oe(()=>st(re,B,M,G),y)}else{let M;const{el:O,props:L}=p,{bm:B,m:G,parent:ne}=h,re=zr(p);if(zt(h,!1),B&&jr(B),!re&&(M=L&&L.onVnodeBeforeMount)&&st(M,ne,p),zt(h,!0),O&&j){const ae=()=>{h.subTree=Bs(h),j(O,h.subTree,h,y,null)};re?p.type.__asyncLoader().then(()=>!h.isUnmounted&&ae()):ae()}else{const ae=h.subTree=Bs(h);A(null,ae,m,v,h,y,T),p.el=ae.el}if(G&&Oe(G,y),!re&&(M=L&&L.onVnodeMounted)){const ae=p;Oe(()=>st(M,ne,ae),y)}(p.shapeFlag&256||ne&&zr(ne.vnode)&&ne.vnode.shapeFlag&256)&&h.a&&Oe(h.a,y),h.isMounted=!0,p=m=v=null}},S=h.effect=new xi(I,()=>Vi(w),h.scope),w=h.update=()=>S.run();w.id=h.uid,zt(h,!0),w()},te=(h,p,m)=>{p.component=h;const v=h.vnode.props;h.vnode=p,h.next=null,ih(h,p.props,v,m),lh(h,p.children,m),Fn(),No(),Un()},Ne=(h,p,m,v,y,T,C,I,S=!1)=>{const w=h&&h.children,M=h?h.shapeFlag:0,O=p.children,{patchFlag:L,shapeFlag:B}=p;if(L>0){if(L&128){ht(w,O,m,v,y,T,C,I,S);return}else if(L&256){fn(w,O,m,v,y,T,C,I,S);return}}B&8?(M&16&&R(w,y,T),O!==w&&u(m,O)):M&16?B&16?ht(w,O,m,v,y,T,C,I,S):R(w,y,T,!0):(M&8&&u(m,""),B&16&&ue(O,m,v,y,T,C,I,S))},fn=(h,p,m,v,y,T,C,I,S)=>{h=h||vn,p=p||vn;const w=h.length,M=p.length,O=Math.min(w,M);let L;for(L=0;L<O;L++){const B=p[L]=S?Ct(p[L]):ze(p[L]);A(h[L],B,m,null,y,T,C,I,S)}w>M?R(h,y,T,!0,!1,O):ue(p,m,v,y,T,C,I,S,O)},ht=(h,p,m,v,y,T,C,I,S)=>{let w=0;const M=p.length;let O=h.length-1,L=M-1;for(;w<=O&&w<=L;){const B=h[w],G=p[w]=S?Ct(p[w]):ze(p[w]);if(Nt(B,G))A(B,G,m,null,y,T,C,I,S);else break;w++}for(;w<=O&&w<=L;){const B=h[O],G=p[L]=S?Ct(p[L]):ze(p[L]);if(Nt(B,G))A(B,G,m,null,y,T,C,I,S);else break;O--,L--}if(w>O){if(w<=L){const B=L+1,G=B<M?p[B].el:v;for(;w<=L;)A(null,p[w]=S?Ct(p[w]):ze(p[w]),m,G,y,T,C,I,S),w++}}else if(w>L)for(;w<=O;)Ue(h[w],y,T,!0),w++;else{const B=w,G=w,ne=new Map;for(w=G;w<=L;w++){const De=p[w]=S?Ct(p[w]):ze(p[w]);De.key!=null&&ne.set(De.key,w)}let re,ae=0;const qe=L-G+1;let hn=!1,wo=0;const Hn=new Array(qe);for(w=0;w<qe;w++)Hn[w]=0;for(w=B;w<=O;w++){const De=h[w];if(ae>=qe){Ue(De,y,T,!0);continue}let rt;if(De.key!=null)rt=ne.get(De.key);else for(re=G;re<=L;re++)if(Hn[re-G]===0&&Nt(De,p[re])){rt=re;break}rt===void 0?Ue(De,y,T,!0):(Hn[rt-G]=w+1,rt>=wo?wo=rt:hn=!0,A(De,p[rt],m,null,y,T,C,I,S),ae++)}const Eo=hn?dh(Hn):vn;for(re=Eo.length-1,w=qe-1;w>=0;w--){const De=G+w,rt=p[De],Io=De+1<M?p[De+1].el:v;Hn[w]===0?A(null,rt,m,Io,y,T,C,I,S):hn&&(re<0||w!==Eo[re]?nt(rt,m,Io,2):re--)}}},nt=(h,p,m,v,y=null)=>{const{el:T,type:C,transition:I,children:S,shapeFlag:w}=h;if(w&6){nt(h.component.subTree,p,m,v);return}if(w&128){h.suspense.move(p,m,v);return}if(w&64){C.move(h,p,m,oe);return}if(C===xe){r(T,p,m);for(let O=0;O<S.length;O++)nt(S[O],p,m,v);r(h.anchor,p,m);return}if(C===$s){q(h,p,m);return}if(v!==2&&w&1&&I)if(v===0)I.beforeEnter(T),r(T,p,m),Oe(()=>I.enter(T),y);else{const{leave:O,delayLeave:L,afterLeave:B}=I,G=()=>r(T,p,m),ne=()=>{O(T,()=>{G(),B&&B()})};L?L(T,G,ne):ne()}else r(T,p,m)},Ue=(h,p,m,v=!1,y=!1)=>{const{type:T,props:C,ref:I,children:S,dynamicChildren:w,shapeFlag:M,patchFlag:O,dirs:L}=h;if(I!=null&&ci(I,null,m,h,!0),M&256){p.ctx.deactivate(h);return}const B=M&1&&L,G=!zr(h);let ne;if(G&&(ne=C&&C.onVnodeBeforeUnmount)&&st(ne,p,h),M&6)N(h.component,m,v);else{if(M&128){h.suspense.unmount(m,v);return}B&&qt(h,null,p,"beforeUnmount"),M&64?h.type.remove(h,p,m,y,oe,v):w&&(T!==xe||O>0&&O&64)?R(w,p,m,!1,!0):(T===xe&&O&384||!y&&M&16)&&R(S,p,m),v&&jn(h)}(G&&(ne=C&&C.onVnodeUnmounted)||B)&&Oe(()=>{ne&&st(ne,p,h),B&&qt(h,null,p,"unmounted")},m)},jn=h=>{const{type:p,el:m,anchor:v,transition:y}=h;if(p===xe){_(m,v);return}if(p===$s){Y(h);return}const T=()=>{s(m),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(h.shapeFlag&1&&y&&!y.persisted){const{leave:C,delayLeave:I}=y,S=()=>C(m,T);I?I(h.el,T,S):S()}else T()},_=(h,p)=>{let m;for(;h!==p;)m=d(h),s(h),h=m;s(p)},N=(h,p,m)=>{const{bum:v,scope:y,update:T,subTree:C,um:I}=h;v&&jr(v),y.stop(),T&&(T.active=!1,Ue(C,h,p,m)),I&&Oe(I,p),Oe(()=>{h.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},R=(h,p,m,v=!1,y=!1,T=0)=>{for(let C=T;C<h.length;C++)Ue(h[C],p,m,v,y)},D=h=>h.shapeFlag&6?D(h.component.subTree):h.shapeFlag&128?h.suspense.next():d(h.anchor||h.el),X=(h,p,m)=>{h==null?p._vnode&&Ue(p._vnode,null,null,!0):A(p._vnode||null,h,p,null,null,null,m),No(),xl(),p._vnode=h},oe={p:A,um:Ue,m:nt,r:jn,mt:un,mc:ue,pc:Ne,pbc:_e,n:D,o:t};let z,j;return e&&([z,j]=e(oe)),{render:X,hydrate:z,createApp:uh(X,z)}}function zt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ql(t,e,n=!1){const r=t.children,s=e.children;if($(r)&&$(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Ct(s[i]),a.el=o.el),n||Ql(o,a))}}function dh(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const ph=t=>t.__isTeleport,xe=Symbol(void 0),Wi=Symbol(void 0),en=Symbol(void 0),$s=Symbol(void 0),Gn=[];let je=null;function Qe(t=!1){Gn.push(je=t?null:[])}function Xl(){Gn.pop(),je=Gn[Gn.length-1]||null}let kn=1;function Ho(t){kn+=t}function Zl(t){return t.dynamicChildren=kn>0?je||vn:null,Xl(),kn>0&&je&&je.push(t),t}function yt(t,e,n,r,s,i){return Zl(de(t,e,n,r,s,i,!0))}function mh(t,e,n,r,s){return Zl(ce(t,e,n,r,s,!0))}function rs(t){return t?t.__v_isVNode===!0:!1}function Nt(t,e){return t.type===e.type&&t.key===e.key}const Ts="__vInternal",ec=({key:t})=>t!=null?t:null,Wr=({ref:t,ref_key:e,ref_for:n})=>t!=null?ve(t)||Re(t)||H(t)?{i:Ge,r:t,k:e,f:!!n}:t:null;function de(t,e=null,n=null,r=0,s=null,i=t===xe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ec(e),ref:e&&Wr(e),scopeId:Fl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(Ki(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=ve(n)?8:16),kn>0&&!o&&je&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&je.push(l),l}const ce=gh;function gh(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Jf)&&(t=en),rs(t)){const a=Cn(t,e,!0);return n&&Ki(a,n),kn>0&&!i&&je&&(a.shapeFlag&6?je[je.indexOf(t)]=a:je.push(a)),a.patchFlag|=-2,a}if(Ah(t)&&(t=t.__vccOpts),e){e=_h(e);let{class:a,style:l}=e;a&&!ve(a)&&(e.class=Ai(a)),le(l)&&(Il(l)&&!$(l)&&(l=Ce({},l)),e.style=Ri(l))}const o=ve(t)?1:Cf(t)?128:ph(t)?64:le(t)?4:H(t)?2:0;return de(t,e,n,r,s,o,i,!0)}function _h(t){return t?Il(t)||Ts in t?Ce({},t):t:null}function Cn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?yh(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&ec(a),ref:e&&e.ref?n&&s?$(s)?s.concat(Wr(e)):[s,Wr(e)]:Wr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==xe?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Cn(t.ssContent),ssFallback:t.ssFallback&&Cn(t.ssFallback),el:t.el,anchor:t.anchor}}function Bn(t=" ",e=0){return ce(Wi,null,t,e)}function ze(t){return t==null||typeof t=="boolean"?ce(en):$(t)?ce(xe,null,t.slice()):typeof t=="object"?Ct(t):ce(Wi,null,String(t))}function Ct(t){return t.el===null||t.memo?t:Cn(t)}function Ki(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ki(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Ts in e)?e._ctx=Ge:s===3&&Ge&&(Ge.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:Ge},n=32):(e=String(e),r&64?(n=16,e=[Bn(e)]):n=8);t.children=e,t.shapeFlag|=n}function yh(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ai([e.class,r.class]));else if(s==="style")e.style=Ri([e.style,r.style]);else if(ys(s)){const i=e[s],o=r[s];o&&i!==o&&!($(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function st(t,e,n,r=null){Je(t,e,7,[n,r])}const vh=Jl();let bh=0;function wh(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||vh,i={uid:bh++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new $u(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wl(r,s),emitsOptions:Ll(r,s),emit:null,emitted:null,propsDefaults:se,inheritAttrs:r.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Tf.bind(null,i),t.ce&&t.ce(i),i}let Ee=null;const Eh=()=>Ee||Ge,Ht=t=>{Ee=t,t.scope.on()},Bt=()=>{Ee&&Ee.scope.off(),Ee=null};function tc(t){return t.vnode.shapeFlag&4}let cr=!1;function Ih(t,e=!1){cr=e;const{props:n,children:r}=t.vnode,s=tc(t);sh(t,n,s,e),ah(t,r);const i=s?Th(t,e):void 0;return cr=!1,i}function Th(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Tl(new Proxy(t.ctx,Xf));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Rh(t):null;Ht(t),Fn();const i=Ut(r,t,0,[t.props,s]);if(Un(),Bt(),Oi(i)){if(i.then(Bt,Bt),e)return i.then(o=>{ui(t,o,e)}).catch(o=>{Er(o,t,0)});t.asyncDep=i}else ui(t,i,e)}else nc(t,e)}function ui(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:le(e)&&(t.setupState=kl(e)),nc(t,n)}let qo;function nc(t,e,n){const r=t.type;if(!t.render){if(!e&&qo&&!r.render){const s=r.template||qi(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Ce(Ce({isCustomElement:i,delimiters:a},o),l);r.render=qo(s,c)}}t.render=r.render||Ye}Ht(t),Fn(),Zf(t),Un(),Bt()}function Sh(t){return new Proxy(t.attrs,{get(e,n){return Fe(t,"get","$attrs"),e[n]}})}function Rh(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Sh(t))},slots:t.slots,emit:t.emit,expose:e}}function Ss(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(kl(Tl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ts)return ts[n](t)}}))}function Ah(t){return H(t)&&"__vccOpts"in t}const Ve=(t,e)=>vf(t,e,cr);function kh(t){const e=Eh();let n=t();return Bt(),Oi(n)&&(n=n.catch(r=>{throw Ht(e),r})),[n,()=>Ht(e)]}function rc(t,e,n){const r=arguments.length;return r===2?le(e)&&!$(e)?rs(e)?ce(t,null,[e]):ce(t,e):ce(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&rs(n)&&(n=[n]),ce(t,e,n))}const Ch="3.2.39",Ph="http://www.w3.org/2000/svg",Jt=typeof document<"u"?document:null,zo=Jt&&Jt.createElement("template"),Oh={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Jt.createElementNS(Ph,t):Jt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Jt.createTextNode(t),createComment:t=>Jt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Jt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{zo.innerHTML=r?`<svg>${t}</svg>`:t;const a=zo.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Nh(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Dh(t,e,n){const r=t.style,s=ve(n);if(n&&!s){for(const i in n)fi(r,i,n[i]);if(e&&!ve(e))for(const i in e)n[i]==null&&fi(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Wo=/\s*!important$/;function fi(t,e,n){if($(n))n.forEach(r=>fi(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=xh(t,e);Wo.test(n)?t.setProperty(Ln(r),n.replace(Wo,""),"important"):t[r]=n}}const Ko=["Webkit","Moz","ms"],Vs={};function xh(t,e){const n=Vs[e];if(n)return n;let r=Rn(e);if(r!=="filter"&&r in t)return Vs[e]=r;r=fl(r);for(let s=0;s<Ko.length;s++){const i=Ko[s]+r;if(i in t)return Vs[e]=i}return e}const Go="http://www.w3.org/1999/xlink";function Mh(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Go,e.slice(6,e.length)):t.setAttributeNS(Go,e,n);else{const i=Cu(e);n==null||i&&!ol(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Lh(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ol(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[sc,Fh]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let hi=0;const Uh=Promise.resolve(),Bh=()=>{hi=0},$h=()=>hi||(Uh.then(Bh),hi=sc());function mn(t,e,n,r){t.addEventListener(e,n,r)}function Vh(t,e,n,r){t.removeEventListener(e,n,r)}function jh(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=Hh(e);if(r){const c=i[e]=qh(r,s);mn(t,a,c,l)}else o&&(Vh(t,a,o,l),i[e]=void 0)}}const Yo=/(?:Once|Passive|Capture)$/;function Hh(t){let e;if(Yo.test(t)){e={};let r;for(;r=t.match(Yo);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ln(t.slice(2)),e]}function qh(t,e){const n=r=>{const s=r.timeStamp||sc();(Fh||s>=n.attached-1)&&Je(zh(r,n.value),e,5,[r])};return n.value=t,n.attached=$h(),n}function zh(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Jo=/^on[a-z]/,Wh=(t,e,n,r,s=!1,i,o,a,l)=>{e==="class"?Nh(t,r,s):e==="style"?Dh(t,n,r):ys(e)?ki(e)||jh(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Kh(t,e,r,s))?Lh(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Mh(t,e,r,s))};function Kh(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Jo.test(e)&&H(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Jo.test(e)&&ve(n)?!1:e in t}const Qo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>jr(e,n):e};function Gh(t){t.target.composing=!0}function Xo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Zo={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Qo(s);const i=r||s.props&&s.props.type==="number";mn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Xr(a)),t._assign(a)}),n&&mn(t,"change",()=>{t.value=t.value.trim()}),e||(mn(t,"compositionstart",Gh),mn(t,"compositionend",Xo),mn(t,"change",Xo))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Qo(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Xr(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Yh=Ce({patchProp:Wh},Oh);let ea;function Jh(){return ea||(ea=fh(Yh))}const Qh=(...t)=>{const e=Jh().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Xh(r);if(!s)return;const i=e._component;!H(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Xh(t){return ve(t)?document.querySelector(t):t}/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const gn=typeof window<"u";function Zh(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Z=Object.assign;function js(t,e){const n={};for(const r in e){const s=e[r];n[r]=Xe(s)?s.map(t):t(s)}return n}const Yn=()=>{},Xe=Array.isArray,ed=/\/$/,td=t=>t.replace(ed,"");function Hs(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=id(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function nd(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ta(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function rd(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Pn(e.matched[r],n.matched[s])&&ic(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Pn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ic(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!sd(t[n],e[n]))return!1;return!0}function sd(t,e){return Xe(t)?na(t,e):Xe(e)?na(e,t):t===e}function na(t,e){return Xe(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function id(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var ur;(function(t){t.pop="pop",t.push="push"})(ur||(ur={}));var Jn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Jn||(Jn={}));function od(t){if(!t)if(gn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),td(t)}const ad=/^[^#]+#/;function ld(t,e){return t.replace(ad,"#")+e}function cd(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Rs=()=>({left:window.pageXOffset,top:window.pageYOffset});function ud(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=cd(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ra(t,e){return(history.state?history.state.position-e:-1)+t}const di=new Map;function fd(t,e){di.set(t,e)}function hd(t){const e=di.get(t);return di.delete(t),e}let dd=()=>location.protocol+"//"+location.host;function oc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),ta(l,"")}return ta(n,t)+r+s}function pd(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const g=oc(t,location),b=n.value,x=e.value;let A=0;if(d){if(n.value=g,e.value=d,o&&o===b){o=null;return}A=x?d.position-x.position:0}else r(g);s.forEach(k=>{k(n.value,b,{delta:A,type:ur.pop,direction:A?A>0?Jn.forward:Jn.back:Jn.unknown})})};function l(){o=n.value}function c(d){s.push(d);const g=()=>{const b=s.indexOf(d);b>-1&&s.splice(b,1)};return i.push(g),g}function u(){const{history:d}=window;!d.state||d.replaceState(Z({},d.state,{scroll:Rs()}),"")}function f(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function sa(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Rs():null}}function md(t){const{history:e,location:n}=window,r={value:oc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:dd()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(l,c){const u=Z({},e.state,sa(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=Z({},s.value,e.state,{forward:l,scroll:Rs()});i(u.current,u,!0);const f=Z({},sa(r.value,l,null),{position:u.position+1},c);i(l,f,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function gd(t){t=od(t);const e=md(t),n=pd(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Z({location:"",base:t,go:r,createHref:ld.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function _d(t){return typeof t=="string"||t&&typeof t=="object"}function ac(t){return typeof t=="string"||typeof t=="symbol"}const At={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},lc=Symbol("");var ia;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ia||(ia={}));function On(t,e){return Z(new Error,{type:t,[lc]:!0},e)}function dt(t,e){return t instanceof Error&&lc in t&&(e==null||!!(t.type&e))}const oa="[^/]+?",yd={sensitive:!1,strict:!1,start:!0,end:!0},vd=/[.+*?^${}()[\]/\\]/g;function bd(t,e){const n=Z({},yd,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const d=c[f];let g=40+(n.sensitive?.25:0);if(d.type===0)f||(s+="/"),s+=d.value.replace(vd,"\\$&"),g+=40;else if(d.type===1){const{value:b,repeatable:x,optional:A,regexp:k}=d;i.push({name:b,repeatable:x,optional:A});const E=k||oa;if(E!==oa){g+=10;try{new RegExp(`(${E})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${b}" (${E}): `+q.message)}}let P=x?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;f||(P=A&&c.length<2?`(?:/${P})`:"/"+P),A&&(P+="?"),s+=P,g+=20,A&&(g+=-8),x&&(g+=-20),E===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",b=i[d-1];f[b.name]=g&&b.repeatable?g.split("/"):g}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:b,repeatable:x,optional:A}=g,k=b in c?c[b]:"";if(Xe(k)&&!x)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const E=Xe(k)?k.join("/"):k;if(!E)if(A)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${b}"`);u+=E}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function wd(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Ed(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=wd(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(aa(r))return 1;if(aa(s))return-1}return s.length-r.length}function aa(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Id={type:0,value:""},Td=/[a-zA-Z0-9_]/;function Sd(t){if(!t)return[[]];if(t==="/")return[[Id]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function f(){!c||(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:Td.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}function Rd(t,e,n){const r=bd(Sd(t.path),n),s=Z(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Ad(t,e){const n=[],r=new Map;e=ua({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,f,d){const g=!d,b=kd(u);b.aliasOf=d&&d.record;const x=ua(e,u),A=[b];if("alias"in u){const P=typeof u.alias=="string"?[u.alias]:u.alias;for(const q of P)A.push(Z({},b,{components:d?d.record.components:b.components,path:q,aliasOf:d?d.record:b}))}let k,E;for(const P of A){const{path:q}=P;if(f&&q[0]!=="/"){const Y=f.record.path,J=Y[Y.length-1]==="/"?"":"/";P.path=f.record.path+(q&&J+q)}if(k=Rd(P,f,x),d?d.alias.push(k):(E=E||k,E!==k&&E.alias.push(k),g&&u.name&&!ca(k)&&o(u.name)),b.children){const Y=b.children;for(let J=0;J<Y.length;J++)i(Y[J],k,d&&d.children[J])}d=d||k,l(k)}return E?()=>{o(E)}:Yn}function o(u){if(ac(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let f=0;for(;f<n.length&&Ed(u,n[f])>=0&&(u.record.path!==n[f].record.path||!cc(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!ca(u)&&r.set(u.record.name,u)}function c(u,f){let d,g={},b,x;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw On(1,{location:u});x=d.record.name,g=Z(la(f.params,d.keys.filter(E=>!E.optional).map(E=>E.name)),u.params&&la(u.params,d.keys.map(E=>E.name))),b=d.stringify(g)}else if("path"in u)b=u.path,d=n.find(E=>E.re.test(b)),d&&(g=d.parse(b),x=d.record.name);else{if(d=f.name?r.get(f.name):n.find(E=>E.re.test(f.path)),!d)throw On(1,{location:u,currentLocation:f});x=d.record.name,g=Z({},f.params,u.params),b=d.stringify(g)}const A=[];let k=d;for(;k;)A.unshift(k.record),k=k.parent;return{name:x,path:b,params:g,matched:A,meta:Pd(A)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function la(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function kd(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Cd(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Cd(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function ca(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Pd(t){return t.reduce((e,n)=>Z(e,n.meta),{})}function ua(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function cc(t,e){return e.children.some(n=>n===t||cc(t,n))}const uc=/#/g,Od=/&/g,Nd=/\//g,Dd=/=/g,xd=/\?/g,fc=/\+/g,Md=/%5B/g,Ld=/%5D/g,hc=/%5E/g,Fd=/%60/g,dc=/%7B/g,Ud=/%7C/g,pc=/%7D/g,Bd=/%20/g;function Gi(t){return encodeURI(""+t).replace(Ud,"|").replace(Md,"[").replace(Ld,"]")}function $d(t){return Gi(t).replace(dc,"{").replace(pc,"}").replace(hc,"^")}function pi(t){return Gi(t).replace(fc,"%2B").replace(Bd,"+").replace(uc,"%23").replace(Od,"%26").replace(Fd,"`").replace(dc,"{").replace(pc,"}").replace(hc,"^")}function Vd(t){return pi(t).replace(Dd,"%3D")}function jd(t){return Gi(t).replace(uc,"%23").replace(xd,"%3F")}function Hd(t){return t==null?"":jd(t).replace(Nd,"%2F")}function ss(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function qd(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(fc," "),o=i.indexOf("="),a=ss(o<0?i:i.slice(0,o)),l=o<0?null:ss(i.slice(o+1));if(a in e){let c=e[a];Xe(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function fa(t){let e="";for(let n in t){const r=t[n];if(n=Vd(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Xe(r)?r.map(i=>i&&pi(i)):[r&&pi(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function zd(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Xe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Wd=Symbol(""),ha=Symbol(""),As=Symbol(""),mc=Symbol(""),mi=Symbol("");function qn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Pt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(On(4,{from:n,to:e})):f instanceof Error?a(f):_d(f)?a(On(2,{from:e,to:f})):(i&&r.enterCallbacks[s]===i&&typeof f=="function"&&i.push(f),o())},c=t.call(r&&r.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function qs(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Kd(a)){const c=(a.__vccOpts||a)[e];c&&s.push(Pt(c,n,r,i,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Zh(c)?c.default:c;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Pt(d,n,r,i,o)()}))}}return s}function Kd(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function da(t){const e=_t(As),n=_t(mc),r=Ve(()=>e.resolve($e(t.to))),s=Ve(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(Pn.bind(null,u));if(d>-1)return d;const g=pa(l[c-2]);return c>1&&pa(u)===g&&f[f.length-1].path!==g?f.findIndex(Pn.bind(null,l[c-2])):d}),i=Ve(()=>s.value>-1&&Jd(n.params,r.value.params)),o=Ve(()=>s.value>-1&&s.value===n.matched.length-1&&ic(n.params,r.value.params));function a(l={}){return Yd(l)?e[$e(t.replace)?"replace":"push"]($e(t.to)).catch(Yn):Promise.resolve()}return{route:r,href:Ve(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Gd=$l({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:da,setup(t,{slots:e}){const n=wr(da(t)),{options:r}=_t(As),s=Ve(()=>({[ma(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ma(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:rc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),_n=Gd;function Yd(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Jd(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Xe(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function pa(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ma=(t,e,n)=>t!=null?t:e!=null?e:n,Qd=$l({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=_t(mi),s=Ve(()=>t.route||r.value),i=_t(ha,0),o=Ve(()=>{let c=$e(i);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Ve(()=>s.value.matched[o.value]);Hr(ha,Ve(()=>o.value+1)),Hr(Wd,a),Hr(mi,s);const l=ir();return qr(()=>[l.value,a.value,t.name],([c,u,f],[d,g,b])=>{u&&(u.instances[f]=c,g&&g!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!Pn(u,g)||!d)&&(u.enterCallbacks[f]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return ga(n.default,{Component:d,route:c});const g=f.props[u],b=g?g===!0?c.params:typeof g=="function"?g(c):g:null,A=rc(d,Z({},b,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return ga(n.default,{Component:A,route:c})||A}}});function ga(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const gc=Qd;function Xd(t){const e=Ad(t.routes,t),n=t.parseQuery||qd,r=t.stringifyQuery||fa,s=t.history,i=qn(),o=qn(),a=qn(),l=mf(At);let c=At;gn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=js.bind(null,_=>""+_),f=js.bind(null,Hd),d=js.bind(null,ss);function g(_,N){let R,D;return ac(_)?(R=e.getRecordMatcher(_),D=N):D=_,e.addRoute(D,R)}function b(_){const N=e.getRecordMatcher(_);N&&e.removeRoute(N)}function x(){return e.getRoutes().map(_=>_.record)}function A(_){return!!e.getRecordMatcher(_)}function k(_,N){if(N=Z({},N||l.value),typeof _=="string"){const j=Hs(n,_,N.path),h=e.resolve({path:j.path},N),p=s.createHref(j.fullPath);return Z(j,h,{params:d(h.params),hash:ss(j.hash),redirectedFrom:void 0,href:p})}let R;if("path"in _)R=Z({},_,{path:Hs(n,_.path,N.path).path});else{const j=Z({},_.params);for(const h in j)j[h]==null&&delete j[h];R=Z({},_,{params:f(_.params)}),N.params=f(N.params)}const D=e.resolve(R,N),X=_.hash||"";D.params=u(d(D.params));const oe=nd(r,Z({},_,{hash:$d(X),path:D.path})),z=s.createHref(oe);return Z({fullPath:oe,hash:X,query:r===fa?zd(_.query):_.query||{}},D,{redirectedFrom:void 0,href:z})}function E(_){return typeof _=="string"?Hs(n,_,l.value.path):Z({},_)}function P(_,N){if(c!==_)return On(8,{from:N,to:_})}function q(_){return he(_)}function Y(_){return q(Z(E(_),{replace:!0}))}function J(_){const N=_.matched[_.matched.length-1];if(N&&N.redirect){const{redirect:R}=N;let D=typeof R=="function"?R(_):R;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=E(D):{path:D},D.params={}),Z({query:_.query,hash:_.hash,params:"path"in D?{}:_.params},D)}}function he(_,N){const R=c=k(_),D=l.value,X=_.state,oe=_.force,z=_.replace===!0,j=J(R);if(j)return he(Z(E(j),{state:typeof j=="object"?Z({},X,j.state):X,force:oe,replace:z}),N||R);const h=R;h.redirectedFrom=N;let p;return!oe&&rd(r,D,R)&&(p=On(16,{to:h,from:D}),fn(D,D,!0,!1)),(p?Promise.resolve(p):ue(h,D)).catch(m=>dt(m)?dt(m,2)?m:Ne(m):ie(m,h,D)).then(m=>{if(m){if(dt(m,2))return he(Z({replace:z},E(m.to),{state:typeof m.to=="object"?Z({},X,m.to.state):X,force:oe}),N||h)}else m=_e(h,D,!0,z,X);return Te(h,D,m),m})}function be(_,N){const R=P(_,N);return R?Promise.reject(R):Promise.resolve()}function ue(_,N){let R;const[D,X,oe]=Zd(_,N);R=qs(D.reverse(),"beforeRouteLeave",_,N);for(const j of D)j.leaveGuards.forEach(h=>{R.push(Pt(h,_,N))});const z=be.bind(null,_,N);return R.push(z),dn(R).then(()=>{R=[];for(const j of i.list())R.push(Pt(j,_,N));return R.push(z),dn(R)}).then(()=>{R=qs(X,"beforeRouteUpdate",_,N);for(const j of X)j.updateGuards.forEach(h=>{R.push(Pt(h,_,N))});return R.push(z),dn(R)}).then(()=>{R=[];for(const j of _.matched)if(j.beforeEnter&&!N.matched.includes(j))if(Xe(j.beforeEnter))for(const h of j.beforeEnter)R.push(Pt(h,_,N));else R.push(Pt(j.beforeEnter,_,N));return R.push(z),dn(R)}).then(()=>(_.matched.forEach(j=>j.enterCallbacks={}),R=qs(oe,"beforeRouteEnter",_,N),R.push(z),dn(R))).then(()=>{R=[];for(const j of o.list())R.push(Pt(j,_,N));return R.push(z),dn(R)}).catch(j=>dt(j,8)?j:Promise.reject(j))}function Te(_,N,R){for(const D of a.list())D(_,N,R)}function _e(_,N,R,D,X){const oe=P(_,N);if(oe)return oe;const z=N===At,j=gn?history.state:{};R&&(D||z?s.replace(_.fullPath,Z({scroll:z&&j&&j.scroll},X)):s.push(_.fullPath,X)),l.value=_,fn(_,N,R,z),Ne()}let Pe;function ft(){Pe||(Pe=s.listen((_,N,R)=>{if(!jn.listening)return;const D=k(_),X=J(D);if(X){he(Z(X,{replace:!0}),D).catch(Yn);return}c=D;const oe=l.value;gn&&fd(ra(oe.fullPath,R.delta),Rs()),ue(D,oe).catch(z=>dt(z,12)?z:dt(z,2)?(he(z.to,D).then(j=>{dt(j,20)&&!R.delta&&R.type===ur.pop&&s.go(-1,!1)}).catch(Yn),Promise.reject()):(R.delta&&s.go(-R.delta,!1),ie(z,D,oe))).then(z=>{z=z||_e(D,oe,!1),z&&(R.delta&&!dt(z,8)?s.go(-R.delta,!1):R.type===ur.pop&&dt(z,20)&&s.go(-1,!1)),Te(D,oe,z)}).catch(Yn)}))}let tt=qn(),un=qn(),pe;function ie(_,N,R){Ne(_);const D=un.list();return D.length?D.forEach(X=>X(_,N,R)):console.error(_),Promise.reject(_)}function te(){return pe&&l.value!==At?Promise.resolve():new Promise((_,N)=>{tt.add([_,N])})}function Ne(_){return pe||(pe=!_,ft(),tt.list().forEach(([N,R])=>_?R(_):N()),tt.reset()),_}function fn(_,N,R,D){const{scrollBehavior:X}=t;if(!gn||!X)return Promise.resolve();const oe=!R&&hd(ra(_.fullPath,0))||(D||!R)&&history.state&&history.state.scroll||null;return Ol().then(()=>X(_,N,oe)).then(z=>z&&ud(z)).catch(z=>ie(z,_,N))}const ht=_=>s.go(_);let nt;const Ue=new Set,jn={currentRoute:l,listening:!0,addRoute:g,removeRoute:b,hasRoute:A,getRoutes:x,resolve:k,options:t,push:q,replace:Y,go:ht,back:()=>ht(-1),forward:()=>ht(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:un.add,isReady:te,install(_){const N=this;_.component("RouterLink",_n),_.component("RouterView",gc),_.config.globalProperties.$router=N,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>$e(l)}),gn&&!nt&&l.value===At&&(nt=!0,q(s.location).catch(X=>{}));const R={};for(const X in At)R[X]=Ve(()=>l.value[X]);_.provide(As,N),_.provide(mc,wr(R)),_.provide(mi,l);const D=_.unmount;Ue.add(_),_.unmount=function(){Ue.delete(_),Ue.size<1&&(c=At,Pe&&Pe(),Pe=null,l.value=At,nt=!1,pe=!1),D()}}};return jn}function dn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Zd(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>Pn(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Pn(c,l))||s.push(l))}return[n,r,s]}function ep(){return _t(As)}/**
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
 */const _c=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},tp=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},yc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(d=64)),r.push(n[u],n[f],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_c(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||f==null)throw Error();const d=i<<2|a>>4;if(r.push(d),c!==64){const g=a<<4&240|c>>2;if(r.push(g),f!==64){const b=c<<6&192|f;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},np=function(t){const e=_c(t);return yc.encodeByteArray(e,!0)},vc=function(t){return np(t).replace(/\./g,"")},rp=function(t){try{return yc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class sp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ip(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function op(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ap(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lp(){const t=Ae();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function cp(){return typeof indexedDB=="object"}function up(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const fp="FirebaseError";class St extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=fp,Object.setPrototypeOf(this,St.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ir.prototype.create)}}class Ir{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?hp(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new St(s,a,r)}}function hp(t,e){return t.replace(dp,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const dp=/\{\$([^}]+)}/g;function pp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function is(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(_a(i)&&_a(o)){if(!is(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function _a(t){return t!==null&&typeof t=="object"}/**
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
 */function Tr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Wn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Kn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function mp(t,e){const n=new gp(t,e);return n.subscribe.bind(n)}class gp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");_p(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=zs),s.error===void 0&&(s.error=zs),s.complete===void 0&&(s.complete=zs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _p(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function zs(){}/**
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
 */function Ze(t){return t&&t._delegate?t._delegate:t}class tn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Kt="[DEFAULT]";/**
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
 */class yp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new sp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bp(e))try{this.getOrInitializeService({instanceIdentifier:Kt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Kt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kt){return this.instances.has(e)}getOptions(e=Kt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vp(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Kt){return this.component?this.component.multipleInstances?e:Kt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vp(t){return t===Kt?void 0:t}function bp(t){return t.instantiationMode==="EAGER"}/**
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
 */class wp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new yp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const Ep={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Ip=ee.INFO,Tp={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Sp=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Tp[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yi{constructor(e){this.name=e,this._logLevel=Ip,this._logHandler=Sp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ep[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Rp=(t,e)=>e.some(n=>t instanceof n);let ya,va;function Ap(){return ya||(ya=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kp(){return va||(va=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bc=new WeakMap,gi=new WeakMap,wc=new WeakMap,Ws=new WeakMap,Ji=new WeakMap;function Cp(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n($t(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&bc.set(n,t)}).catch(()=>{}),Ji.set(e,t),e}function Pp(t){if(gi.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});gi.set(t,e)}let _i={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $t(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Op(t){_i=t(_i)}function Np(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ks(this),e,...n);return wc.set(r,e.sort?e.sort():[e]),$t(r)}:kp().includes(t)?function(...e){return t.apply(Ks(this),e),$t(bc.get(this))}:function(...e){return $t(t.apply(Ks(this),e))}}function Dp(t){return typeof t=="function"?Np(t):(t instanceof IDBTransaction&&Pp(t),Rp(t,Ap())?new Proxy(t,_i):t)}function $t(t){if(t instanceof IDBRequest)return Cp(t);if(Ws.has(t))return Ws.get(t);const e=Dp(t);return e!==t&&(Ws.set(t,e),Ji.set(e,t)),e}const Ks=t=>Ji.get(t);function xp(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=$t(o);return r&&o.addEventListener("upgradeneeded",l=>{r($t(o.result),l.oldVersion,l.newVersion,$t(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Mp=["get","getKey","getAll","getAllKeys","count"],Lp=["put","add","delete","clear"],Gs=new Map;function ba(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gs.get(e))return Gs.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Lp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Mp.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Gs.set(e,i),i}Op(t=>({...t,get:(e,n,r)=>ba(e,n)||t.get(e,n,r),has:(e,n)=>!!ba(e,n)||t.has(e,n)}));/**
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
 */class Fp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Up(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Up(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yi="@firebase/app",wa="0.7.33";/**
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
 */const nn=new Yi("@firebase/app"),Bp="@firebase/app-compat",$p="@firebase/analytics-compat",Vp="@firebase/analytics",jp="@firebase/app-check-compat",Hp="@firebase/app-check",qp="@firebase/auth",zp="@firebase/auth-compat",Wp="@firebase/database",Kp="@firebase/database-compat",Gp="@firebase/functions",Yp="@firebase/functions-compat",Jp="@firebase/installations",Qp="@firebase/installations-compat",Xp="@firebase/messaging",Zp="@firebase/messaging-compat",em="@firebase/performance",tm="@firebase/performance-compat",nm="@firebase/remote-config",rm="@firebase/remote-config-compat",sm="@firebase/storage",im="@firebase/storage-compat",om="@firebase/firestore",am="@firebase/firestore-compat",lm="firebase",cm="9.10.0";/**
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
 */const Ec="[DEFAULT]",um={[yi]:"fire-core",[Bp]:"fire-core-compat",[Vp]:"fire-analytics",[$p]:"fire-analytics-compat",[Hp]:"fire-app-check",[jp]:"fire-app-check-compat",[qp]:"fire-auth",[zp]:"fire-auth-compat",[Wp]:"fire-rtdb",[Kp]:"fire-rtdb-compat",[Gp]:"fire-fn",[Yp]:"fire-fn-compat",[Jp]:"fire-iid",[Qp]:"fire-iid-compat",[Xp]:"fire-fcm",[Zp]:"fire-fcm-compat",[em]:"fire-perf",[tm]:"fire-perf-compat",[nm]:"fire-rc",[rm]:"fire-rc-compat",[sm]:"fire-gcs",[im]:"fire-gcs-compat",[om]:"fire-fst",[am]:"fire-fst-compat","fire-js":"fire-js",[lm]:"fire-js-all"};/**
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
 */const os=new Map,vi=new Map;function fm(t,e){try{t.container.addComponent(e)}catch(n){nn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Nn(t){const e=t.name;if(vi.has(e))return nn.debug(`There were multiple attempts to register component ${e}.`),!1;vi.set(e,t);for(const n of os.values())fm(n,t);return!0}function Qi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const hm={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},rn=new Ir("app","Firebase",hm);/**
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
 */class dm{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rn.create("app-deleted",{appName:this._name})}}/**
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
 */const Sr=cm;function pm(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ec,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw rn.create("bad-app-name",{appName:String(r)});const s=os.get(r);if(s){if(is(t,s.options)&&is(n,s.config))return s;throw rn.create("duplicate-app",{appName:r})}const i=new wp(r);for(const a of vi.values())i.addComponent(a);const o=new dm(t,n,i);return os.set(r,o),o}function Ic(t=Ec){const e=os.get(t);if(!e)throw rn.create("no-app",{appName:t});return e}function Vt(t,e,n){var r;let s=(r=um[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),nn.warn(a.join(" "));return}Nn(new tn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const mm="firebase-heartbeat-database",gm=1,fr="firebase-heartbeat-store";let Ys=null;function Tc(){return Ys||(Ys=xp(mm,gm,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(fr)}}}).catch(t=>{throw rn.create("idb-open",{originalErrorMessage:t.message})})),Ys}async function _m(t){var e;try{return(await Tc()).transaction(fr).objectStore(fr).get(Sc(t))}catch(n){if(n instanceof St)nn.warn(n.message);else{const r=rn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});nn.warn(r.message)}}}async function Ea(t,e){var n;try{const s=(await Tc()).transaction(fr,"readwrite");return await s.objectStore(fr).put(e,Sc(t)),s.done}catch(r){if(r instanceof St)nn.warn(r.message);else{const s=rn.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});nn.warn(s.message)}}}function Sc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ym=1024,vm=30*24*60*60*1e3;class bm{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Em(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ia();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=vm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ia(),{heartbeatsToSend:n,unsentEntries:r}=wm(this._heartbeatsCache.heartbeats),s=vc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ia(){return new Date().toISOString().substring(0,10)}function wm(t,e=ym){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ta(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ta(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Em{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cp()?up().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await _m(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ea(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ea(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ta(t){return vc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Im(t){Nn(new tn("platform-logger",e=>new Fp(e),"PRIVATE")),Nn(new tn("heartbeat",e=>new bm(e),"PRIVATE")),Vt(yi,wa,t),Vt(yi,wa,"esm2017"),Vt("fire-js","")}Im("");function Xi(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Rc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Tm=Rc,Ac=new Ir("auth","Firebase",Rc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=new Yi("@firebase/auth");function Kr(t,...e){Sa.logLevel<=ee.ERROR&&Sa.error(`Auth (${Sr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t,...e){throw Zi(t,...e)}function lt(t,...e){return Zi(t,...e)}function Sm(t,e,n){const r=Object.assign(Object.assign({},Tm()),{[e]:n});return new Ir("auth","Firebase",r).create(e,{appName:t.name})}function Zi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ac.create(t,...e)}function U(t,e,...n){if(!t)throw Zi(e,...n)}function mt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Kr(e),new Error(e)}function wt(t,e){t||mt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra=new Map;function gt(t){wt(t instanceof Function,"Expected a class definition");let e=Ra.get(t);return e?(wt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ra.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(t,e){const n=Qi(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(is(i,e!=null?e:{}))return s;et(s,"already-initialized")}return n.initialize({options:e})}function Am(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function km(){return Aa()==="http:"||Aa()==="https:"}function Aa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(km()||op()||"connection"in navigator)?navigator.onLine:!0}function Pm(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,n){this.shortDelay=e,this.longDelay=n,wt(n>e,"Short delay should be less than long delay!"),this.isMobile=ip()||ap()}get(){return Cm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(t,e){wt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm=new Rr(3e4,6e4);function Ar(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function kr(t,e,n,r,s={}){return Cc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Tr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),kc.fetch()(Pc(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Cc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Om),e);try{const s=new Dm(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Fr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Fr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Fr(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Sm(t,u,c);et(t,u)}}catch(s){if(s instanceof St)throw s;et(t,"network-request-failed")}}async function Cr(t,e,n,r,s={}){const i=await kr(t,e,n,r,s);return"mfaPendingCredential"in i&&et(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Pc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?eo(t.config,s):`${t.config.apiScheme}://${s}`}class Dm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(lt(this.auth,"network-request-failed")),Nm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=lt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xm(t,e){return kr(t,"POST","/v1/accounts:delete",e)}async function Mm(t,e){return kr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Lm(t,e=!1){const n=Ze(t),r=await n.getIdToken(e),s=to(r);U(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Qn(Js(s.auth_time)),issuedAtTime:Qn(Js(s.iat)),expirationTime:Qn(Js(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Js(t){return Number(t)*1e3}function to(t){var e;const[n,r,s]=t.split(".");if(n===void 0||r===void 0||s===void 0)return Kr("JWT malformed, contained fewer than 3 sections"),null;try{const i=rp(r);return i?JSON.parse(i):(Kr("Failed to decode base64 JWT payload"),null)}catch(i){return Kr("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function Fm(t){const e=to(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof St&&Um(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Um({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qn(this.lastLoginAt),this.creationTime=Qn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function as(t){var e;const n=t.auth,r=await t.getIdToken(),s=await hr(t,Mm(n,{idToken:r}));U(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?jm(i.providerUserInfo):[],a=Vm(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Oc(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function $m(t){const e=Ze(t);await as(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Vm(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function jm(t){return t.map(e=>{var{providerId:n}=e,r=Xi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hm(t,e){const n=await Cc(t,{},async()=>{const r=Tr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Pc(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",kc.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Hm(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new dr;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(U(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(U(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new dr,this.toJSON())}_performRefresh(){return mt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Zt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Xi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Bm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Oc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await hr(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Lm(this,e)}reload(){return $m(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Zt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await as(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await hr(this,xm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,b=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,k=(c=n.createdAt)!==null&&c!==void 0?c:void 0,E=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:P,emailVerified:q,isAnonymous:Y,providerData:J,stsTokenManager:he}=n;U(P&&he,e,"internal-error");const be=dr.fromJSON(this.name,he);U(typeof P=="string",e,"internal-error"),kt(f,e.name),kt(d,e.name),U(typeof q=="boolean",e,"internal-error"),U(typeof Y=="boolean",e,"internal-error"),kt(g,e.name),kt(b,e.name),kt(x,e.name),kt(A,e.name),kt(k,e.name),kt(E,e.name);const ue=new Zt({uid:P,auth:e,email:d,emailVerified:q,displayName:f,isAnonymous:Y,photoURL:b,phoneNumber:g,tenantId:x,stsTokenManager:be,createdAt:k,lastLoginAt:E});return J&&Array.isArray(J)&&(ue.providerData=J.map(Te=>Object.assign({},Te))),A&&(ue._redirectEventId=A),ue}static async _fromIdTokenResponse(e,n,r=!1){const s=new dr;s.updateFromServerResponse(n);const i=new Zt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await as(i),i}}/**
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
 */class Nc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Nc.type="NONE";const ka=Nc;/**
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
 */function Gr(t,e,n){return`firebase:${t}:${e}:${n}`}class Tn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Gr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Gr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Zt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Tn(gt(ka),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||gt(ka);const o=Gr(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const f=Zt._fromJSON(e,u);c!==i&&(a=f),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Tn(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Tn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Dc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Fc(e))return"Blackberry";if(Uc(e))return"Webos";if(no(e))return"Safari";if((e.includes("chrome/")||xc(e))&&!e.includes("edge/"))return"Chrome";if(Lc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Dc(t=Ae()){return/firefox\//i.test(t)}function no(t=Ae()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xc(t=Ae()){return/crios\//i.test(t)}function Mc(t=Ae()){return/iemobile/i.test(t)}function Lc(t=Ae()){return/android/i.test(t)}function Fc(t=Ae()){return/blackberry/i.test(t)}function Uc(t=Ae()){return/webos/i.test(t)}function ks(t=Ae()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function qm(t=Ae()){var e;return ks(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zm(){return lp()&&document.documentMode===10}function Bc(t=Ae()){return ks(t)||Lc(t)||Uc(t)||Fc(t)||/windows phone/i.test(t)||Mc(t)}function Wm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(t,e=[]){let n;switch(t){case"Browser":n=Ca(Ae());break;case"Worker":n=`${Ca(Ae())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Sr}/${r}`}/**
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
 */class Km{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pa(this),this.idTokenSubscription=new Pa(this),this.beforeStateQueue=new Km(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ac,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Tn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await as(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Pm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ze(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(gt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ir("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gt(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await Tn.create(this,[gt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return U(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$c(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Cs(t){return Ze(t)}class Pa{constructor(e){this.auth=e,this.observer=null,this.addObserver=mp(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mt("not implemented")}_getIdTokenResponse(e){return mt("not implemented")}_linkToIdToken(e,n){return mt("not implemented")}_getReauthenticationResolver(e){return mt("not implemented")}}async function Ym(t,e){return kr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jm(t,e){return Cr(t,"POST","/v1/accounts:signInWithPassword",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qm(t,e){return Cr(t,"POST","/v1/accounts:signInWithEmailLink",Ar(t,e))}async function Xm(t,e){return Cr(t,"POST","/v1/accounts:signInWithEmailLink",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends ro{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new pr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new pr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Jm(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Qm(e,{email:this._email,oobCode:this._password});default:et(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Ym(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Xm(e,{idToken:n,email:this._email,oobCode:this._password});default:et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sn(t,e){return Cr(t,"POST","/v1/accounts:signInWithIdp",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm="http://localhost";class sn extends ro{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new sn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Xi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new sn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Sn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Sn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Sn(e,n)}buildRequest(){const e={requestUri:Zm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Tr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tg(t){const e=Wn(Kn(t)).link,n=e?Wn(Kn(e)).deep_link_id:null,r=Wn(Kn(t)).deep_link_id;return(r?Wn(Kn(r)).link:null)||r||n||e||t}class so{constructor(e){var n,r,s,i,o,a;const l=Wn(Kn(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,f=eg((s=l.mode)!==null&&s!==void 0?s:null);U(c&&u&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=tg(e);try{return new so(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(){this.providerId=$n.PROVIDER_ID}static credential(e,n){return pr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=so.parseLink(n);return U(r,"argument-error"),pr._fromEmailAndCode(e,r.code,r.tenantId)}}$n.PROVIDER_ID="password";$n.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$n.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Pr extends Vc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends Pr{constructor(){super("facebook.com")}static credential(e){return sn._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dt.credentialFromTaggedObject(e)}static credentialFromError(e){return Dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dt.credential(e.oauthAccessToken)}catch{return null}}}Dt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends Pr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return sn._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return xt.credential(n,r)}catch{return null}}}xt.GOOGLE_SIGN_IN_METHOD="google.com";xt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends Pr{constructor(){super("github.com")}static credential(e){return sn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mt.credential(e.oauthAccessToken)}catch{return null}}}Mt.GITHUB_SIGN_IN_METHOD="github.com";Mt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends Pr{constructor(){super("twitter.com")}static credential(e,n){return sn._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Lt.credential(n,r)}catch{return null}}}Lt.TWITTER_SIGN_IN_METHOD="twitter.com";Lt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ng(t,e){return Cr(t,"POST","/v1/accounts:signUp",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Zt._fromIdTokenResponse(e,r,s),o=Oa(r);return new on({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Oa(r);return new on({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Oa(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls extends St{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ls.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ls(e,n,r,s)}}function jc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ls._fromErrorAndOperation(t,i,e,r):i})}async function rg(t,e,n=!1){const r=await hr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return on._forOperation(t,"link",r)}/**
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
 */async function sg(t,e,n=!1){var r;const{auth:s}=t,i="reauthenticate";try{const o=await hr(t,jc(s,i,e,t),n);U(o.idToken,s,"internal-error");const a=to(o.idToken);U(a,s,"internal-error");const{sub:l}=a;return U(t.uid===l,s,"user-mismatch"),on._forOperation(t,i,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&et(s,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hc(t,e,n=!1){const r="signIn",s=await jc(t,r,e),i=await on._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function ig(t,e){return Hc(Cs(t),e)}async function pv(t,e,n){const r=Cs(t),s=await ng(r,{returnSecureToken:!0,email:e,password:n}),i=await on._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function mv(t,e,n){return ig(Ze(t),$n.credential(e,n))}const cs="__sak";/**
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
 */class qc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(cs,"1"),this.storage.removeItem(cs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(){const t=Ae();return no(t)||ks(t)}const ag=1e3,lg=10;class zc extends qc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=og()&&Wm(),this.fallbackToPolling=Bc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);zm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,lg):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ag)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}zc.type="LOCAL";const cg=zc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc extends qc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Wc.type="SESSION";const Kc=Wc;/**
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
 */function ug(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ps{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ps(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await ug(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ps.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class fg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=io("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const d=f;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return window}function hg(t){ct().location.href=t}/**
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
 */function Gc(){return typeof ct().WorkerGlobalScope<"u"&&typeof ct().importScripts=="function"}async function dg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function mg(){return Gc()?self:null}/**
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
 */const Yc="firebaseLocalStorageDb",gg=1,us="firebaseLocalStorage",Jc="fbase_key";class Or{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Os(t,e){return t.transaction([us],e?"readwrite":"readonly").objectStore(us)}function _g(){const t=indexedDB.deleteDatabase(Yc);return new Or(t).toPromise()}function wi(){const t=indexedDB.open(Yc,gg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(us,{keyPath:Jc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(us)?e(r):(r.close(),await _g(),e(await wi()))})})}async function Na(t,e,n){const r=Os(t,!0).put({[Jc]:e,value:n});return new Or(r).toPromise()}async function yg(t,e){const n=Os(t,!1).get(e),r=await new Or(n).toPromise();return r===void 0?null:r.value}function Da(t,e){const n=Os(t,!0).delete(e);return new Or(n).toPromise()}const vg=800,bg=3;class Qc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>bg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ps._getInstance(mg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await dg(),!this.activeServiceWorker)return;this.sender=new fg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wi();return await Na(e,cs,"1"),await Da(e,cs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Na(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>yg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Da(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Os(s,!1).getAll();return new Or(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qc.type="LOCAL";const wg=Qc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ig(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=lt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Eg().appendChild(r)})}function Tg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Rr(3e4,6e4);/**
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
 */function Sg(t,e){return e?gt(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class oo extends ro{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Sn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Sn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Sn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Rg(t){return Hc(t.auth,new oo(t),t.bypassAuthState)}function Ag(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),sg(n,new oo(t),t.bypassAuthState)}async function kg(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),rg(n,new oo(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Rg;case"linkViaPopup":case"linkViaRedirect":return kg;case"reauthViaPopup":case"reauthViaRedirect":return Ag;default:et(this.auth,"internal-error")}}resolve(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg=new Rr(2e3,1e4);class yn extends Xc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,yn.currentPopupAction&&yn.currentPopupAction.cancel(),yn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){wt(this.filter.length===1,"Popup operations only handle one event");const e=io();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(lt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Cg.get())};e()}}yn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg="pendingRedirect",Yr=new Map;class Og extends Xc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Yr.get(this.auth._key());if(!e){try{const r=await Ng(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Yr.set(this.auth._key(),e)}return this.bypassAuthState||Yr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ng(t,e){const n=Mg(e),r=xg(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Dg(t,e){Yr.set(t._key(),e)}function xg(t){return gt(t._redirectPersistence)}function Mg(t){return Gr(Pg,t.config.apiKey,t.name)}async function Lg(t,e,n=!1){const r=Cs(t),s=Sg(r,e),o=await new Og(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=10*60*1e3;class Ug{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Bg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Zc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(lt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Fg&&this.cachedEventUids.clear(),this.cachedEventUids.has(xa(e))}saveEventToCache(e){this.cachedEventUids.add(xa(e)),this.lastProcessedEventTime=Date.now()}}function xa(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Zc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Bg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $g(t,e={}){return kr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jg=/^https?/;async function Hg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $g(t);for(const n of e)try{if(qg(n))return}catch{}et(t,"unauthorized-domain")}function qg(t){const e=bi(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!jg.test(n))return!1;if(Vg.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const zg=new Rr(3e4,6e4);function Ma(){const t=ct().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Wg(t){return new Promise((e,n)=>{var r,s,i;function o(){Ma(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ma(),n(lt(t,"network-request-failed"))},timeout:zg.get()})}if(!((s=(r=ct().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ct().gapi)===null||i===void 0)&&i.load)o();else{const a=Tg("iframefcb");return ct()[a]=()=>{gapi.load?o():n(lt(t,"network-request-failed"))},Ig(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Jr=null,e})}let Jr=null;function Kg(t){return Jr=Jr||Wg(t),Jr}/**
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
 */const Gg=new Rr(5e3,15e3),Yg="__/auth/iframe",Jg="emulator/auth/iframe",Qg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Xg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zg(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?eo(e,Jg):`https://${t.config.authDomain}/${Yg}`,r={apiKey:e.apiKey,appName:t.name,v:Sr},s=Xg.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Tr(r).slice(1)}`}async function e_(t){const e=await Kg(t),n=ct().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:Zg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Qg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=lt(t,"network-request-failed"),a=ct().setTimeout(()=>{i(o)},Gg.get());function l(){ct().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const t_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},n_=500,r_=600,s_="_blank",i_="http://localhost";class La{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function o_(t,e,n,r=n_,s=r_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},t_),{width:r.toString(),height:s.toString(),top:i,left:o}),c=Ae().toLowerCase();n&&(a=xc(c)?s_:n),Dc(c)&&(e=e||i_,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[g,b])=>`${d}${g}=${b},`,"");if(qm(c)&&a!=="_self")return a_(e||"",a),new La(null);const f=window.open(e||"",a,u);U(f,t,"popup-blocked");try{f.focus()}catch{}return new La(f)}function a_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const l_="__/auth/handler",c_="emulator/auth/handler";function Fa(t,e,n,r,s,i){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Sr,eventId:s};if(e instanceof Vc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",pp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(i||{}))o[l]=c}if(e instanceof Pr){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${u_(t)}?${Tr(a).slice(1)}`}function u_({config:t}){return t.emulator?eo(t,c_):`https://${t.authDomain}/${l_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs="webStorageSupport";class f_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kc,this._completeRedirectFn=Lg,this._overrideRedirectResult=Dg}async _openPopup(e,n,r,s){var i;wt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Fa(e,n,r,bi(),s);return o_(e,o,io())}async _openRedirect(e,n,r,s){return await this._originValidation(e),hg(Fa(e,n,r,bi(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(wt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await e_(e),r=new Ug(e);return n.register("authEvent",s=>(U(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Qs,{type:Qs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Qs];o!==void 0&&n(!!o),et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Hg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Bc()||no()||ks()}}const h_=f_;var Ua="@firebase/auth",Ba="0.20.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function m_(t){Nn(new tn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,l)=>{U(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),U(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$c(t)},u=new Gm(a,l,c);return Am(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Nn(new tn("auth-internal",e=>{const n=Cs(e.getProvider("auth").getImmediate());return(r=>new d_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vt(Ua,Ba,p_(t)),Vt(Ua,Ba,"esm2017")}/**
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
 */function g_(t=Ic()){const e=Qi(t,"auth");return e.isInitialized()?e.getImmediate():Rm(t,{popupRedirectResolver:h_,persistence:[wg,cg,Kc]})}m_("Browser");const __={class:"wrapper"},y_=Bn("Home"),v_=Bn("About"),b_={key:0},w_={key:1},E_=Bn("Login"),I_=Bn("Register"),T_=Bn("Create"),S_={__name:"App",setup(t){const e=ep(),n=ir(!1),r=g_();r.onAuthStateChanged(i=>{i?n.value=!0:n.value=!1});function s(){r.signOut(),e.push("/")}return(i,o)=>(Qe(),yt(xe,null,[de("header",null,[de("div",__,[de("nav",null,[ce($e(_n),{to:"/"},{default:Yt(()=>[y_]),_:1}),ce($e(_n),{to:"/about"},{default:Yt(()=>[v_]),_:1}),n.value?(Qe(),yt("span",b_,[de("button",{onClick:s},"Logout")])):(Qe(),yt("span",w_,[ce($e(_n),{to:"/sign-in"},{default:Yt(()=>[E_]),_:1}),ce($e(_n),{to:"/register"},{default:Yt(()=>[I_]),_:1})])),ce($e(_n),{to:"/create"},{default:Yt(()=>[T_]),_:1})])])]),ce($e(gc))],64))}},R_="modulepreload",A_=function(t){return"/"+t},$a={},Ur=function(e,n,r){return!n||n.length===0?e():Promise.all(n.map(s=>{if(s=A_(s),s in $a)return;$a[s]=!0;const i=s.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":R_,i||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),i)return new Promise((l,c)=>{a.addEventListener("load",l),a.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};/**
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
 */class Be{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Be.UNAUTHENTICATED=new Be(null),Be.GOOGLE_CREDENTIALS=new Be("google-credentials-uid"),Be.FIRST_PARTY=new Be("first-party-uid"),Be.MOCK_USER=new Be("mock-user");/**
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
 */let Vn="9.10.0";/**
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
 */const Dn=new Yi("@firebase/firestore");function fs(t,...e){if(Dn.logLevel<=ee.DEBUG){const n=e.map(lo);Dn.debug(`Firestore (${Vn}): ${t}`,...n)}}function ao(t,...e){if(Dn.logLevel<=ee.ERROR){const n=e.map(lo);Dn.error(`Firestore (${Vn}): ${t}`,...n)}}function k_(t,...e){if(Dn.logLevel<=ee.WARN){const n=e.map(lo);Dn.warn(`Firestore (${Vn}): ${t}`,...n)}}function lo(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function fe(t="Unexpected state"){const e=`FIRESTORE (${Vn}) INTERNAL ASSERTION FAILED: `+t;throw ao(e),new Error(e)}function Et(t,e){t||fe()}function Ns(t,e){return t}/**
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
 */const Va="ok",C_="cancelled",Xn="unknown",V="invalid-argument",P_="deadline-exceeded",O_="not-found",N_="permission-denied",Ei="unauthenticated",D_="resource-exhausted",xn="failed-precondition",x_="aborted",M_="out-of-range",eu="unimplemented",L_="internal",F_="unavailable";class F extends St{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class U_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class B_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Be.UNAUTHENTICATED))}shutdown(){}}class $_{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(Et(typeof e.accessToken=="string"),new U_(e.accessToken,new Be(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class V_{constructor(e,n,r,s){this.t=e,this.i=n,this.o=r,this.u=s,this.type="FirstParty",this.user=Be.FIRST_PARTY,this.h=new Map}l(){return this.u?this.u():(Et(!(typeof this.t!="object"||this.t===null||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.h.set("X-Goog-AuthUser",this.i);const e=this.l();return e&&this.h.set("Authorization",e),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}}class j_{constructor(e,n,r,s){this.t=e,this.i=n,this.o=r,this.u=s}getToken(){return Promise.resolve(new V_(this.t,this.i,this.o,this.u))}start(e,n){e.enqueueRetryable(()=>n(Be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class H_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class q_{constructor(e){this.m=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(Et(typeof e.token=="string"),new H_(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
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
 */class z_{constructor(e,n,r,s,i,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class mr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new mr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof mr&&e.projectId===this.projectId&&e.database===this.database}}class gr{constructor(e,n,r){n===void 0?n=0:n>e.length&&fe(),r===void 0?r=e.length-n:r>e.length-n&&fe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return gr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof gr?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ge extends gr{construct(e,n,r){return new ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(V,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const W_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Me extends gr{construct(e,n,r){return new Me(e,n,r)}static isValidIdentifier(e){return W_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Me.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Me(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new F(V,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new F(V,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new F(V,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new F(V,"Unterminated ` in path: "+e);return new Me(n)}static emptyPath(){return new Me([])}}/**
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
 */class Ie{constructor(e){this.path=e}static fromPath(e){return new Ie(ge.fromString(e))}static fromName(e){return new Ie(ge.fromString(e).popFirst(5))}static empty(){return new Ie(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ie(new ge(e.slice()))}}/**
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
 */function tu(t,e,n){if(!n)throw new F(V,`Function ${t}() cannot be called with an empty ${e}.`)}function ja(t){if(!Ie.isDocumentKey(t))throw new F(V,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ha(t){if(Ie.isDocumentKey(t))throw new F(V,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ds(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":fe()}function nu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(V,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ds(t);throw new F(V,`Expected type '${e.name}', but it was: ${n}`)}}return t}function K_(t,e){if(e<=0)throw new F(V,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */function G_(t){return t==null}function hs(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */var qa,W;function za(t){if(t===void 0)return ao("RPC_ERROR","HTTP error has no status"),Xn;switch(t){case 200:return Va;case 400:return xn;case 401:return Ei;case 403:return N_;case 404:return O_;case 409:return x_;case 416:return M_;case 429:return D_;case 499:return C_;case 500:return Xn;case 501:return eu;case 503:return F_;case 504:return P_;default:return t>=200&&t<300?Va:t>=400&&t<500?xn:t>=500&&t<600?L_:Xn}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(W=qa||(qa={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";class J_ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.p=n+"://"+e.host,this.g="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}v(e,n,r,s,i){const o=this.T(e,n);fs("RestConnection","Sending: ",o,r);const a={};return this.I(a,s,i),this.A(e,o,a,r).then(l=>(fs("RestConnection","Received: ",l),l),l=>{throw k_("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}R(e,n,r,s,i,o){return this.v(e,n,r,s,i)}I(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Vn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}T(e,n){const r=Y_[e];return`${this.p}/v1/${n}:${r}`}}{constructor(e,n){super(e),this.P=n}V(e,n){throw new Error("Not supported by FetchConnection")}async A(e,n,r,s){const i=JSON.stringify(s);let o;try{o=await this.P(n,{method:"POST",headers:r,body:i})}catch(a){throw new F(za(a.status),"Request failed with error: "+a.statusText)}if(!o.ok)throw new F(za(o.status),"Request failed with error: "+o.statusText);return o.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Q_(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class X_{static N(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Q_(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ye(t,e){return t<e?-1:t>e?1:0}function ru(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Le{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(V,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(V,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(V,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(V,"Timestamp seconds out of range: "+e)}static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Le(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class We{constructor(e){this.timestamp=e}static fromTimestamp(e){return new We(e)}static min(){return new We(new Le(0,0))}static max(){return new We(new Le(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function Wa(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
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
 */class ds{constructor(e,n){this.comparator=e,this.root=n||we.EMPTY}insert(e,n){return new ds(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,we.BLACK,null,null))}remove(e){return new ds(this.comparator,this.root.remove(e,this.comparator).copy(null,null,we.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Br(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Br(this.root,e,this.comparator,!1)}getReverseIterator(){return new Br(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Br(this.root,e,this.comparator,!0)}}class Br{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class we{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:we.RED,this.left=s!=null?s:we.EMPTY,this.right=i!=null?i:we.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new we(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return we.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return we.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw fe();const e=this.left.check();if(e!==this.right.check())throw fe();return e+(this.isRed()?0:1)}}we.EMPTY=null,we.RED=!0,we.BLACK=!1;we.EMPTY=new class{constructor(){this.size=0}get key(){throw fe()}get value(){throw fe()}get color(){throw fe()}get left(){throw fe()}get right(){throw fe()}copy(t,e,n,r,s){return this}insert(t,e,n){return new we(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ps{constructor(e){this.comparator=e,this.data=new ds(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ka(this.data.getIterator())}getIteratorFrom(e){return new Ka(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ps)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ps(this.comparator);return n.data=e,n}}class Ka{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e){this.fields=e,e.sort(Me.comparator)}static empty(){return new _r([])}unionWith(e){let n=new ps(Me.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new _r(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ru(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class It{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new It(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new It(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}It.EMPTY_BYTE_STRING=new It("");const Z_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function an(t){if(Et(!!t),typeof t=="string"){let e=0;const n=Z_.exec(t);if(Et(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:me(t.seconds),nanos:me(t.nanos)}}function me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function yr(t){return typeof t=="string"?It.fromBase64String(t):It.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function iu(t){const e=t.mapValue.fields.__previous_value__;return su(e)?iu(e):e}function vr(t){const e=an(t.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r={fields:{__type__:{stringValue:"__max__"}}};function ln(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?su(t)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:10:fe()}function ms(t,e){if(t===e)return!0;const n=ln(t);if(n!==ln(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return vr(t).isEqual(vr(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=an(r.timestampValue),o=an(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return yr(r.bytesValue).isEqual(yr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return me(r.geoPointValue.latitude)===me(s.geoPointValue.latitude)&&me(r.geoPointValue.longitude)===me(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return me(r.integerValue)===me(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=me(r.doubleValue),o=me(s.doubleValue);return i===o?hs(i)===hs(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return ru(t.arrayValue.values||[],e.arrayValue.values||[],ms);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Wa(i)!==Wa(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!ms(i[a],o[a])))return!1;return!0}(t,e);default:return fe()}}function br(t,e){return(t.values||[]).find(n=>ms(n,e))!==void 0}function gs(t,e){if(t===e)return 0;const n=ln(t),r=ln(e);if(n!==r)return ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=me(s.integerValue||s.doubleValue),a=me(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Ga(t.timestampValue,e.timestampValue);case 4:return Ga(vr(t),vr(e));case 5:return ye(t.stringValue,e.stringValue);case 6:return function(s,i){const o=yr(s),a=yr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=ye(o[l],a[l]);if(c!==0)return c}return ye(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=ye(me(s.latitude),me(i.latitude));return o!==0?o:ye(me(s.longitude),me(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=gs(o[l],a[l]);if(c)return c}return ye(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===$r&&i===$r)return 0;if(s===$r)return 1;if(i===$r)return-1;const o=s.fields||{},a=Object.keys(o),l=i.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const f=ye(a[u],c[u]);if(f!==0)return f;const d=gs(o[a[u]],l[c[u]]);if(d!==0)return d}return ye(a.length,c.length)}(t.mapValue,e.mapValue);default:throw fe()}}function Ga(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=an(t),r=an(e),s=ye(n.seconds,r.seconds);return s!==0?s:ye(n.nanos,r.nanos)}function Ya(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ou(t){return!!t&&"arrayValue"in t}function Ja(t){return!!t&&"nullValue"in t}function Qa(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Xs(t){return!!t&&"mapValue"in t}function Zn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return xs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Zn(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Zn(t.arrayValue.values[n]);return e}return Object.assign({},t)}class at{constructor(e){this.value=e}static empty(){return new at({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Xs(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Zn(n)}setAll(e){let n=Me.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Zn(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Xs(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ms(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Xs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){xs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new at(Zn(this.value))}}/**
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
 */class Ot{constructor(e,n,r,s,i,o){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Ot(e,0,We.min(),We.min(),at.empty(),0)}static newFoundDocument(e,n,r){return new Ot(e,1,n,We.min(),r,0)}static newNoDocument(e,n){return new Ot(e,2,n,We.min(),at.empty(),0)}static newUnknownDocument(e,n){return new Ot(e,3,n,We.min(),at.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=at.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=at.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=We.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ot(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ey{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.D=null}}function Xa(t,e=null,n=[],r=[],s=null,i=null,o=null){return new ey(t,e,n,r,s,i,o)}class ut extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.$(e,n,r):new ty(e,n,r):n==="array-contains"?new sy(e,r):n==="in"?new iy(e,r):n==="not-in"?new oy(e,r):n==="array-contains-any"?new ay(e,r):new ut(e,n,r)}static $(e,n,r){return n==="in"?new ny(e,r):new ry(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.F(gs(n,this.value)):n!==null&&ln(this.value)===ln(n)&&this.F(gs(n,this.value))}F(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class ty extends ut{constructor(e,n,r){super(e,n,r),this.key=Ie.fromName(r.referenceValue)}matches(e){const n=Ie.comparator(e.key,this.key);return this.F(n)}}class ny extends ut{constructor(e,n){super(e,"in",n),this.keys=au("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ry extends ut{constructor(e,n){super(e,"not-in",n),this.keys=au("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function au(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Ie.fromName(r.referenceValue))}class sy extends ut{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ou(n)&&br(n.arrayValue,this.value)}}class iy extends ut{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&br(this.value.arrayValue,n)}}class oy extends ut{constructor(e,n){super(e,"not-in",n)}matches(e){if(br(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!br(this.value.arrayValue,n)}}class ay extends ut{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ou(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>br(this.value.arrayValue,r))}}class Za{constructor(e,n){this.position=e,this.inclusive=n}}class er{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
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
 */class Ms{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.q=null,this.O=null,this.startAt,this.endAt}}function co(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function uo(t){for(const e of t.filters)if(e.S())return e.field;return null}function ly(t){return t.collectionGroup!==null}function el(t){const e=Ns(t);if(e.q===null){e.q=[];const n=uo(e),r=co(e);if(n!==null&&r===null)n.isKeyField()||e.q.push(new er(n)),e.q.push(new er(Me.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.q.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.q.push(new er(Me.keyField(),i))}}}return e.q}function cy(t){const e=Ns(t);if(!e.O)if(e.limitType==="F")e.O=Xa(e.path,e.collectionGroup,el(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of el(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new er(i.field,o))}const r=e.endAt?new Za(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Za(e.startAt.position,e.startAt.inclusive):null;e.O=Xa(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.O}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy(t,e){return function(n){return typeof n=="number"&&Number.isInteger(n)&&!hs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}(e)?function(n){return{integerValue:""+n}}(e):function(n,r){if(n.k){if(isNaN(r))return{doubleValue:"NaN"};if(r===1/0)return{doubleValue:"Infinity"};if(r===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hs(r)?"-0":r}}(t,e)}/**
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
 */class Ls{constructor(){this._=void 0}}class fy extends Ls{}class hy extends Ls{constructor(e){super(),this.elements=e}}class dy extends Ls{constructor(e){super(),this.elements=e}}class py extends Ls{constructor(e,n){super(),this.C=e,this.L=n}}class tr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tr}static exists(e){return new tr(void 0,e)}static updateTime(e){return new tr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class Fs{}class lu extends Fs{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class cu extends Fs{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class my extends Fs{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gy extends Fs{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */const _y=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),yy=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class vy{constructor(e,n){this.databaseId=e,this.k=n}}function Ii(t,e){return t.k?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function by(t,e){return t.k?e.toBase64():e.toUint8Array()}function wy(t,e){return Ii(t,e.toTimestamp())}function Ey(t){return Et(!!t),We.fromTimestamp(function(e){const n=an(e);return new Le(n.seconds,n.nanos)}(t))}function fo(t,e){return function(n){return new ge(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Ti(t,e){return fo(t.databaseId,e.path)}function Iy(t,e){const n=function(s){const i=ge.fromString(s);return Et(uu(i)),i}(e);if(n.get(1)!==t.databaseId.projectId)throw new F(V,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new F(V,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Ie((Et((r=n).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function tl(t,e){return fo(t.databaseId,e)}function Ty(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function nl(t,e,n){return{name:Ti(t,e),fields:n.value.mapValue.fields}}function Sy(t,e){let n;if(e instanceof lu)n={update:nl(t,e.key,e.value)};else if(e instanceof my)n={delete:Ti(t,e.key)};else if(e instanceof cu)n={update:nl(t,e.key,e.data),updateMask:Cy(e.fieldMask)};else{if(!(e instanceof gy))return fe();n={verify:Ti(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof fy)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof hy)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof dy)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof py)return{fieldPath:i.field.canonicalString(),increment:o.L};throw fe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:wy(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:fe()}(t,e.precondition)),n}function Ry(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=tl(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=tl(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length===0)return;const c=l.map(u=>function(f){if(f.op==="=="){if(Qa(f.value))return{unaryFilter:{field:pn(f.field),op:"IS_NAN"}};if(Ja(f.value))return{unaryFilter:{field:pn(f.field),op:"IS_NULL"}}}else if(f.op==="!="){if(Qa(f.value))return{unaryFilter:{field:pn(f.field),op:"IS_NOT_NAN"}};if(Ja(f.value))return{unaryFilter:{field:pn(f.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pn(f.field),op:ky(f.op),value:f.value}}}(u));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:pn(u.field),direction:Ay(u.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(l,c){return l.k||G_(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Ay(t){return _y[t]}function ky(t){return yy[t]}function pn(t){return{fieldPath:t.canonicalString()}}function Cy(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function uu(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(t){return new vy(t,!0)}/**
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
 */class Py extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.Z=r,this.C=s,this.tt=!1}et(){if(this.tt)throw new F(xn,"The client has already been terminated.")}v(e,n,r){return this.et(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.Z.v(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===Ei&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new F(Xn,s.toString())})}R(e,n,r,s){return this.et(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.Z.R(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===Ei&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(Xn,i.toString())})}terminate(){this.tt=!0}}async function Oy(t,e){const n=Ns(t),r=Ty(n.C)+"/documents",s={writes:e.map(i=>Sy(n.C,i))};await n.v("Commit",r,s)}async function Ny(t,e){const n=Ns(t),r=Ry(n.C,cy(e));return(await n.R("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(i,o,a){const l=Iy(i,o.name),c=Ey(o.updateTime),u=new at({mapValue:{fields:o.fields}}),f=Ot.newFoundDocument(l,c,u);return a&&f.setHasCommittedMutations(),a?f.setHasCommittedMutations():f}(n.C,s.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=new Map;function fu(t){if(t._terminated)throw new F(xn,"The client has already been terminated.");if(!nr.has(t)){fs("ComponentProvider","Initializing Datastore");const i=function(l){return new J_(l,fetch.bind(null))}((e=t._databaseId,n=t.app.options.appId||"",r=t._persistenceKey,s=t._freezeSettings(),new z_(e,n,r,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams))),o=ho(t._databaseId),a=function(l,c,u,f){return new Py(l,c,u,f)}(t._authCredentials,t._appCheckCredentials,i,o);nr.set(t,a)}var e,n,r,s;/**
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
*/return nr.get(t)}class rl{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new F(V,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(V,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(r,s,i,o){if(s===!0&&o===!0)throw new F(V,`${r} and ${i} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(xn,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(xn,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rl(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new B_;switch(n.type){case"gapi":const r=n.client;return new j_(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new F(V,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=nr.get(e);n&&(fs("ComponentProvider","Removing Datastore"),nr.delete(e),n.terminate())}(this),Promise.resolve()}}function hu(t,e){const n=typeof t=="object"?t:Ic(),r=typeof t=="string"?t:e||"(default)";return Qi(n,"firestore/lite").getImmediate({identifier:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class He{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new He(this.firestore,e,this._key)}}class cn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new cn(this.firestore,e,this._query)}}class vt extends cn{constructor(e,n,r){super(e,n,new Ms(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new He(this.firestore,null,new Ie(e))}withConverter(e){return new vt(this.firestore,e,this._path)}}function du(t,e,...n){if(t=Ze(t),tu("collection","path",e),t instanceof po){const r=ge.fromString(e,...n);return Ha(r),new vt(t,null,r)}{if(!(t instanceof He||t instanceof vt))throw new F(V,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return Ha(r),new vt(t.firestore,null,r)}}function Dy(t,e,...n){if(t=Ze(t),arguments.length===1&&(e=X_.N()),tu("doc","path",e),t instanceof po){const r=ge.fromString(e,...n);return ja(r),new He(t,null,new Ie(r))}{if(!(t instanceof He||t instanceof vt))throw new F(V,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return ja(r),new He(t.firestore,t instanceof vt?t.converter:null,new Ie(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(V,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Mn(It.fromBase64String(e))}catch(n){throw new F(V,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Mn(It.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e){this._methodName=e}}/**
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
 */class go{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(V,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(V,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
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
 */const xy=/^__.*__$/;class My{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new cu(e,this.data,this.fieldMask,n,this.fieldTransforms):new lu(e,this.data,n,this.fieldTransforms)}}function mu(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe()}}class _o{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.C=r,this.ignoreUndefinedProperties=s,i===void 0&&this.nt(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get rt(){return this.settings.rt}st(e){return new _o(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.C,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}it(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.st({path:r,ot:!1});return s.ut(e),s}ct(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.st({path:r,ot:!1});return s.nt(),s}at(e){return this.st({path:void 0,ot:!0})}ht(e){return _s(e,this.settings.methodName,this.settings.lt||!1,this.path,this.settings.ft)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}nt(){if(this.path)for(let e=0;e<this.path.length;e++)this.ut(this.path.get(e))}ut(e){if(e.length===0)throw this.ht("Document fields must not be empty");if(mu(this.rt)&&xy.test(e))throw this.ht('Document fields cannot begin and end with "__"')}}class Ly{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.C=r||ho(e)}dt(e,n,r,s=!1){return new _o({rt:e,methodName:n,ft:r,path:Me.emptyPath(),ot:!1,lt:s},this.databaseId,this.C,this.ignoreUndefinedProperties)}}function gu(t){const e=t._freezeSettings(),n=ho(t._databaseId);return new Ly(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Fy(t,e,n,r,s,i={}){const o=t.dt(i.merge||i.mergeFields?2:0,e,n,s);vu("Data must be an object, but it was:",o,r);const a=_u(r,o);let l,c;if(i.merge)l=new _r(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const f of i.mergeFields){const d=By(e,f,n);if(!o.contains(d))throw new F(V,`Field '${d}' is specified in your field mask but missing from your input data.`);Vy(u,d)||u.push(d)}l=new _r(u),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new My(new at(a),l,c)}function Uy(t,e,n,r=!1){return yo(n,t.dt(r?4:3,e))}function yo(t,e){if(yu(t=Ze(t)))return vu("Unsupported field value:",e,t),_u(t,e);if(t instanceof pu)return function(n,r){if(!mu(r.rt))throw r.ht(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ht(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ot&&e.rt!==4)throw e.ht("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=yo(o,r.at(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=Ze(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return uy(r.C,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Le.fromDate(n);return{timestampValue:Ii(r.C,s)}}if(n instanceof Le){const s=new Le(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ii(r.C,s)}}if(n instanceof go)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Mn)return{bytesValue:by(r.C,n._byteString)};if(n instanceof He){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.ht(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:fo(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ht(`Unsupported field value: ${Ds(n)}`)}(t,e)}function _u(t,e){const n={};return function(r){for(const s in r)if(Object.prototype.hasOwnProperty.call(r,s))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xs(t,(r,s)=>{const i=yo(s,e.it(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function yu(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof go||t instanceof Mn||t instanceof He||t instanceof pu)}function vu(t,e,n){if(!yu(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Ds(n);throw r==="an object"?e.ht(t+" a custom object"):e.ht(t+" "+r)}}function By(t,e,n){if((e=Ze(e))instanceof mo)return e._internalPath;if(typeof e=="string")return bu(t,e);throw _s("Field path arguments must be of type string or ",t,!1,void 0,n)}const $y=new RegExp("[~\\*/\\[\\]]");function bu(t,e,n){if(e.search($y)>=0)throw _s(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new mo(...e.split("."))._internalPath}catch{throw _s(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function _s(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new F(V,a+t+l)}function Vy(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new He(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(vo("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wu extends jy{data(){return super.data()}}class Hy{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function vo(t,e){return typeof e=="string"?bu(t,e):e instanceof mo?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{}function Eu(t,...e){for(const n of e)t=n._apply(t);return t}class qy extends bo{constructor(e,n,r){super(),this._t=e,this.gt=n,this.vt=r,this.type="where"}_apply(e){const n=gu(e.firestore),r=function(s,i,o,a,l,c,u){let f;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new F(V,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){il(u,c);const g=[];for(const b of u)g.push(sl(a,s,b));f={arrayValue:{values:g}}}else f=sl(a,s,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||il(u,c),f=Uy(o,i,u,c==="in"||c==="not-in");const d=ut.create(l,c,f);return function(g,b){if(b.S()){const A=uo(g);if(A!==null&&!A.isEqual(b.field))throw new F(V,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${A.toString()}' and '${b.field.toString()}'`);const k=co(g);k!==null&&Su(g,b.field,k)}const x=function(A,k){for(const E of A.filters)if(k.indexOf(E.op)>=0)return E.op;return null}(g,function(A){switch(A){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(b.op));if(x!==null)throw x===b.op?new F(V,`Invalid query. You cannot use more than one '${b.op.toString()}' filter.`):new F(V,`Invalid query. You cannot use '${b.op.toString()}' filters with '${x.toString()}' filters.`)}(s,d),d}(e._query,"where",n,e.firestore._databaseId,this._t,this.gt,this.vt);return new cn(e.firestore,e.converter,function(s,i){const o=s.filters.concat([i]);return new Ms(s.path,s.collectionGroup,s.explicitOrderBy.slice(),o,s.limit,s.limitType,s.startAt,s.endAt)}(e._query,r))}}function Iu(t,e,n){const r=e,s=vo("where",t);return new qy(s,r,n)}class zy extends bo{constructor(e,n){super(),this._t=e,this.bt=n,this.type="orderBy"}_apply(e){const n=function(r,s,i){if(r.startAt!==null)throw new F(V,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new F(V,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new er(s,i);return function(a,l){if(co(a)===null){const c=uo(a);c!==null&&Su(a,c,l.field)}}(r,o),o}(e._query,this._t,this.bt);return new cn(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new Ms(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function Tu(t,e="asc"){const n=e,r=vo("orderBy",t);return new zy(r,n)}class Wy extends bo{constructor(e,n,r){super(),this.type=e,this.Et=n,this.Tt=r}_apply(e){return new cn(e.firestore,e.converter,function(n,r,s){return new Ms(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),r,s,n.startAt,n.endAt)}(e._query,this.Et,this.Tt))}}function Ky(t){return K_("limit",t),new Wy("limit",t,"F")}function sl(t,e,n){if(typeof(n=Ze(n))=="string"){if(n==="")throw new F(V,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ly(e)&&n.indexOf("/")!==-1)throw new F(V,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ge.fromString(n));if(!Ie.isDocumentKey(r))throw new F(V,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ya(t,new Ie(r))}if(n instanceof He)return Ya(t,n._key);throw new F(V,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ds(n)}.`)}function il(t,e){if(!Array.isArray(t)||t.length===0)throw new F(V,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new F(V,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Su(t,e,n){if(!n.isEqual(e))throw new F(V,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Gy(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Yy extends class{convertValue(e,n="none"){switch(ln(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(yr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw fe()}}convertObject(e,n){const r={};return xs(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new go(me(e.latitude),me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=iu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(vr(e));default:return null}}convertTimestamp(e){const n=an(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ge.fromString(e);Et(uu(r));const s=new mr(r.get(1),r.get(3)),i=new Ie(r.popFirst(5));return s.isEqual(n)||ao(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new Mn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new He(this.firestore,null,n)}}function Ru(t){(function(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new F(eu,"limitToLast() queries require specifying at least one orderBy() clause")})((t=nu(t,cn))._query);const e=fu(t.firestore),n=new Yy(t.firestore);return Ny(e,t._query).then(r=>{const s=r.map(i=>new wu(t.firestore,n,i.key,i,t.converter));return t._query.limitType==="L"&&s.reverse(),new Hy(t,s)})}function gv(t,e){const n=Dy(t=nu(t,vt)),r=Gy(t.converter,e),s=Fy(gu(t.firestore),"addDoc",n._key,r,n.converter!==null,{});return Oy(fu(t.firestore),[s.toMutation(n._key,tr.exists(!1))]).then(()=>n)}(function(t){Vn=t})(`${Sr}_lite`),Nn(new tn("firestore/lite",(t,{instanceIdentifier:e,options:n})=>{const r=t.getProvider("app").getImmediate(),s=new po(new $_(t.getProvider("auth-internal")),new q_(t.getProvider("app-check-internal")),function(i,o){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new F(V,'"projectId" not provided in firebase.initializeApp.');return new mr(i.options.projectId,o)}(r,e),r);return n&&s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),Vt("firestore-lite","3.5.0",""),Vt("firestore-lite","3.5.0","esm2017");const Jy=de("p",null,[de("strong",null,"Most Recent Post")],-1),Qy={class:"post-title"},Xy={class:"post-body"},Zy={__name:"MostRecent",async setup(t){let e,n;const r=ir(""),s=ir(""),i=hu(),o=Eu(du(i,"articles"),Tu("date","desc"),Iu("article_type","==","post"),Ky(1));return([e,n]=kh(()=>Ru(o)),e=await e,n(),e).forEach(l=>{const c=l.data();r.value=c.title,s.value=c.content}),(l,c)=>(Qe(),yt(xe,null,[Jy,de("p",Qy,Zs(r.value),1),de("p",Xy,Zs(s.value),1)],64))}},ev=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},tv={},nv=de("h1",null,"Create a Post",-1);function rv(t,e){return Qe(),yt(xe,null,[nv,de("p",null,[Lo(de("input",{type:"text",placeholder:"title","onUpdate:modelValue":e[0]||(e[0]=n=>t.title=n)},null,512),[[Zo,t.title]])]),de("p",null,[Lo(de("input",{type:"textarea","onUpdate:modelValue":e[1]||(e[1]=n=>t.body=n)},null,512),[[Zo,t.body]])]),de("p",null,[de("button",{onClick:e[2]||(e[2]=(...n)=>t.submit&&t.submit(...n))},"Submit")])],64)}const sv=ev(tv,[["render",rv]]),iv={class:"dropdown-container"},ov={class:"dropdown-content"},av={class:"dropdown-input",ref:"input",type:"text",placeholder:"Search..."},lv={__name:"DropdownSelect",setup(t){const e=ir([]),n=hu(),r=Eu(du(n,"articles"),Tu("date","desc"),Iu("article_type","==","post"));async function s(){const i=await Ru(r);i.empty||(e.value=[],i.forEach(o=>{console.log(o.data()),e.value.push(o.data())}))}return(i,o)=>(Qe(),yt("div",iv,[de("button",{class:"dropdown-button",onClick:s},"Choose Article"),de("div",ov,[de("input",av,null,512),(Qe(!0),yt(xe,null,Qf(e.value,a=>(Qe(),yt("li",null,Zs(a.title),1))),256))])]))}},cv={__name:"HomeView",setup(t){return(e,n)=>(Qe(),yt("main",null,[(Qe(),mh(Of,null,{default:Yt(()=>[ce(Zy)]),_:1})),ce(sv),ce(lv)]))}},uv=Xd({history:gd("/"),routes:[{path:"/",name:"home",component:cv},{path:"/about",name:"about",component:()=>Ur(()=>import("./AboutView.9c2cf023.js"),["assets/AboutView.9c2cf023.js","assets/AboutView.e3b0c442.css"])},{path:"/sign-in",name:"sign-in",component:()=>Ur(()=>import("./SignInView.d81657c6.js"),[])},{path:"/register",name:"register",component:()=>Ur(()=>import("./RegisterView.38e52f03.js"),[])},{path:"/create",name:"create",component:()=>Ur(()=>import("./CreatePostView.b3adbfe4.js"),[])}]});var fv="firebase",hv="9.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vt(fv,hv,"app");const dv={apiKey:"AIzaSyAEkx5h_H_jYYiA5zv-SaziecBXeDwxPJ4",authDomain:"bookclub-58f19.firebaseapp.com",projectId:"bookclub-58f19",storageBucket:"bookclub-58f19.appspot.com",messagingSenderId:"1068291885693",appId:"1:1068291885693:web:8961261fdcabbaab2d7f14",measurementId:"G-ZHW6J2Q0PG"};pm(dv);const Au=Qh(S_);Au.use(uv);Au.mount("#app");export{gv as D,xe as F,ev as _,de as a,pv as b,yt as c,g_ as g,hu as l,Qe as o,ir as r,mv as s,ep as u,Zo as v,Lo as w,du as y};
