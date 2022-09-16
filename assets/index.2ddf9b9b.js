(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function ms(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const sc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ic=ms(sc);function fo(t){return!!t||t===""}function _s(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=fe(r)?cc(r):_s(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(fe(t))return t;if(re(t))return t}}const oc=/;(?![^(]*\))/g,ac=/:(.+)/;function cc(t){const e={};return t.split(oc).forEach(n=>{if(n){const r=n.split(ac);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function vs(t){let e="";if(fe(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const r=vs(t[n]);r&&(e+=r+" ")}else if(re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Q={},Ft=[],Ae=()=>{},lc=()=>!1,uc=/^on[^a-z]/,mr=t=>uc.test(t),bs=t=>t.startsWith("onUpdate:"),pe=Object.assign,ys=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},fc=Object.prototype.hasOwnProperty,W=(t,e)=>fc.call(t,e),B=Array.isArray,fn=t=>_r(t)==="[object Map]",dc=t=>_r(t)==="[object Set]",$=t=>typeof t=="function",fe=t=>typeof t=="string",Is=t=>typeof t=="symbol",re=t=>t!==null&&typeof t=="object",ho=t=>re(t)&&$(t.then)&&$(t.catch),hc=Object.prototype.toString,_r=t=>hc.call(t),pc=t=>_r(t).slice(8,-1),gc=t=>_r(t)==="[object Object]",Es=t=>fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Kn=ms(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},mc=/-(\w)/g,Vt=vr(t=>t.replace(mc,(e,n)=>n?n.toUpperCase():"")),_c=/\B([A-Z])/g,Xt=vr(t=>t.replace(_c,"-$1").toLowerCase()),po=vr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Mr=vr(t=>t?`on${po(t)}`:""),mn=(t,e)=>!Object.is(t,e),qn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},sr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},qr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ys;const vc=()=>Ys||(Ys=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Le;class bc{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Le&&(this.parent=Le,this.index=(Le.scopes||(Le.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Le;try{return Le=this,e()}finally{Le=n}}}on(){Le=this}off(){Le=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function yc(t,e=Le){e&&e.active&&e.effects.push(t)}const ws=t=>{const e=new Set(t);return e.w=0,e.n=0,e},go=t=>(t.w&dt)>0,mo=t=>(t.n&dt)>0,Ic=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=dt},Ec=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];go(s)&&!mo(s)?s.delete(t):e[n++]=s,s.w&=~dt,s.n&=~dt}e.length=n}},Gr=new WeakMap;let on=0,dt=1;const Jr=30;let Re;const It=Symbol(""),Yr=Symbol("");class Ts{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,yc(this,r)}run(){if(!this.active)return this.fn();let e=Re,n=lt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Re,Re=this,lt=!0,dt=1<<++on,on<=Jr?Ic(this):Xs(this),this.fn()}finally{on<=Jr&&Ec(this),dt=1<<--on,Re=this.parent,lt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Re===this?this.deferStop=!0:this.active&&(Xs(this),this.onStop&&this.onStop(),this.active=!1)}}function Xs(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let lt=!0;const _o=[];function Qt(){_o.push(lt),lt=!1}function Zt(){const t=_o.pop();lt=t===void 0?!0:t}function be(t,e,n){if(lt&&Re){let r=Gr.get(t);r||Gr.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=ws()),vo(s)}}function vo(t,e){let n=!1;on<=Jr?mo(t)||(t.n|=dt,n=!go(t)):n=!t.has(Re),n&&(t.add(Re),Re.deps.push(t))}function Ye(t,e,n,r,s,i){const o=Gr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&B(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":B(t)?Es(n)&&a.push(o.get("length")):(a.push(o.get(It)),fn(t)&&a.push(o.get(Yr)));break;case"delete":B(t)||(a.push(o.get(It)),fn(t)&&a.push(o.get(Yr)));break;case"set":fn(t)&&a.push(o.get(It));break}if(a.length===1)a[0]&&Xr(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Xr(ws(c))}}function Xr(t,e){const n=B(t)?t:[...t];for(const r of n)r.computed&&Qs(r);for(const r of n)r.computed||Qs(r)}function Qs(t,e){(t!==Re||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const wc=ms("__proto__,__v_isRef,__isVue"),bo=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Is)),Tc=Rs(),Rc=Rs(!1,!0),Sc=Rs(!0),Zs=Cc();function Cc(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=K(this);for(let i=0,o=this.length;i<o;i++)be(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(K)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Qt();const r=K(this)[e].apply(this,n);return Zt(),r}}),t}function Rs(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Wc:To:e?wo:Eo).get(r))return r;const o=B(r);if(!t&&o&&W(Zs,s))return Reflect.get(Zs,s,i);const a=Reflect.get(r,s,i);return(Is(s)?bo.has(s):wc(s))||(t||be(r,"get",s),e)?a:ue(a)?o&&Es(s)?a:a.value:re(a)?t?Ro(a):On(a):a}}const Ac=yo(),Oc=yo(!0);function yo(t=!1){return function(n,r,s,i){let o=n[r];if(zt(o)&&ue(o)&&!ue(s))return!1;if(!t&&(!ir(s)&&!zt(s)&&(o=K(o),s=K(s)),!B(n)&&ue(o)&&!ue(s)))return o.value=s,!0;const a=B(n)&&Es(r)?Number(r)<n.length:W(n,r),c=Reflect.set(n,r,s,i);return n===K(i)&&(a?mn(s,o)&&Ye(n,"set",r,s):Ye(n,"add",r,s)),c}}function Pc(t,e){const n=W(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Ye(t,"delete",e,void 0),r}function kc(t,e){const n=Reflect.has(t,e);return(!Is(e)||!bo.has(e))&&be(t,"has",e),n}function Mc(t){return be(t,"iterate",B(t)?"length":It),Reflect.ownKeys(t)}const Io={get:Tc,set:Ac,deleteProperty:Pc,has:kc,ownKeys:Mc},Nc={get:Sc,set(t,e){return!0},deleteProperty(t,e){return!0}},Dc=pe({},Io,{get:Rc,set:Oc}),Ss=t=>t,br=t=>Reflect.getPrototypeOf(t);function $n(t,e,n=!1,r=!1){t=t.__v_raw;const s=K(t),i=K(e);n||(e!==i&&be(s,"get",e),be(s,"get",i));const{has:o}=br(s),a=r?Ss:n?Os:_n;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Hn(t,e=!1){const n=this.__v_raw,r=K(n),s=K(t);return e||(t!==s&&be(r,"has",t),be(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function jn(t,e=!1){return t=t.__v_raw,!e&&be(K(t),"iterate",It),Reflect.get(t,"size",t)}function ei(t){t=K(t);const e=K(this);return br(e).has.call(e,t)||(e.add(t),Ye(e,"add",t,t)),this}function ti(t,e){e=K(e);const n=K(this),{has:r,get:s}=br(n);let i=r.call(n,t);i||(t=K(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?mn(e,o)&&Ye(n,"set",t,e):Ye(n,"add",t,e),this}function ni(t){const e=K(this),{has:n,get:r}=br(e);let s=n.call(e,t);s||(t=K(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Ye(e,"delete",t,void 0),i}function ri(){const t=K(this),e=t.size!==0,n=t.clear();return e&&Ye(t,"clear",void 0,void 0),n}function Wn(t,e){return function(r,s){const i=this,o=i.__v_raw,a=K(o),c=e?Ss:t?Os:_n;return!t&&be(a,"iterate",It),o.forEach((l,f)=>r.call(s,c(l),c(f),i))}}function Vn(t,e,n){return function(...r){const s=this.__v_raw,i=K(s),o=fn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),f=n?Ss:e?Os:_n;return!e&&be(i,"iterate",c?Yr:It),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:a?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function et(t){return function(...e){return t==="delete"?!1:this}}function xc(){const t={get(i){return $n(this,i)},get size(){return jn(this)},has:Hn,add:ei,set:ti,delete:ni,clear:ri,forEach:Wn(!1,!1)},e={get(i){return $n(this,i,!1,!0)},get size(){return jn(this)},has:Hn,add:ei,set:ti,delete:ni,clear:ri,forEach:Wn(!1,!0)},n={get(i){return $n(this,i,!0)},get size(){return jn(this,!0)},has(i){return Hn.call(this,i,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:Wn(!0,!1)},r={get(i){return $n(this,i,!0,!0)},get size(){return jn(this,!0)},has(i){return Hn.call(this,i,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:Wn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Vn(i,!1,!1),n[i]=Vn(i,!0,!1),e[i]=Vn(i,!1,!0),r[i]=Vn(i,!0,!0)}),[t,n,e,r]}const[Lc,Uc,Fc,Bc]=xc();function Cs(t,e){const n=e?t?Bc:Fc:t?Uc:Lc;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(W(n,s)&&s in r?n:r,s,i)}const $c={get:Cs(!1,!1)},Hc={get:Cs(!1,!0)},jc={get:Cs(!0,!1)},Eo=new WeakMap,wo=new WeakMap,To=new WeakMap,Wc=new WeakMap;function Vc(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zc(t){return t.__v_skip||!Object.isExtensible(t)?0:Vc(pc(t))}function On(t){return zt(t)?t:As(t,!1,Io,$c,Eo)}function Kc(t){return As(t,!1,Dc,Hc,wo)}function Ro(t){return As(t,!0,Nc,jc,To)}function As(t,e,n,r,s){if(!re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=zc(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Bt(t){return zt(t)?Bt(t.__v_raw):!!(t&&t.__v_isReactive)}function zt(t){return!!(t&&t.__v_isReadonly)}function ir(t){return!!(t&&t.__v_isShallow)}function So(t){return Bt(t)||zt(t)}function K(t){const e=t&&t.__v_raw;return e?K(e):t}function Co(t){return sr(t,"__v_skip",!0),t}const _n=t=>re(t)?On(t):t,Os=t=>re(t)?Ro(t):t;function Ao(t){lt&&Re&&(t=K(t),vo(t.dep||(t.dep=ws())))}function Oo(t,e){t=K(t),t.dep&&Xr(t.dep)}function ue(t){return!!(t&&t.__v_isRef===!0)}function Po(t){return ko(t,!1)}function qc(t){return ko(t,!0)}function ko(t,e){return ue(t)?t:new Gc(t,e)}class Gc{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:K(e),this._value=n?e:_n(e)}get value(){return Ao(this),this._value}set value(e){const n=this.__v_isShallow||ir(e)||zt(e);e=n?e:K(e),mn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:_n(e),Oo(this))}}function Se(t){return ue(t)?t.value:t}const Jc={get:(t,e,n)=>Se(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ue(s)&&!ue(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Mo(t){return Bt(t)?t:new Proxy(t,Jc)}var No;class Yc{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[No]=!1,this._dirty=!0,this.effect=new Ts(e,()=>{this._dirty||(this._dirty=!0,Oo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=K(this);return Ao(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}No="__v_isReadonly";function Xc(t,e,n=!1){let r,s;const i=$(t);return i?(r=t,s=Ae):(r=t.get,s=t.set),new Yc(r,s,i||!s,n)}function ut(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){yr(i,e,n)}return s}function Oe(t,e,n,r){if($(t)){const i=ut(t,e,n,r);return i&&ho(i)&&i.catch(o=>{yr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Oe(t[i],e,n,r));return s}function yr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){ut(c,null,10,[t,o,a]);return}}Qc(t,n,s,r)}function Qc(t,e,n,r=!0){console.error(t)}let vn=!1,Qr=!1;const ce=[];let Be=0;const $t=[];let Ke=null,vt=0;const Do=Promise.resolve();let Ps=null;function xo(t){const e=Ps||Do;return t?e.then(this?t.bind(this):t):e}function Zc(t){let e=Be+1,n=ce.length;for(;e<n;){const r=e+n>>>1;bn(ce[r])<t?e=r+1:n=r}return e}function ks(t){(!ce.length||!ce.includes(t,vn&&t.allowRecurse?Be+1:Be))&&(t.id==null?ce.push(t):ce.splice(Zc(t.id),0,t),Lo())}function Lo(){!vn&&!Qr&&(Qr=!0,Ps=Do.then(Fo))}function el(t){const e=ce.indexOf(t);e>Be&&ce.splice(e,1)}function tl(t){B(t)?$t.push(...t):(!Ke||!Ke.includes(t,t.allowRecurse?vt+1:vt))&&$t.push(t),Lo()}function si(t,e=vn?Be+1:0){for(;e<ce.length;e++){const n=ce[e];n&&n.pre&&(ce.splice(e,1),e--,n())}}function Uo(t){if($t.length){const e=[...new Set($t)];if($t.length=0,Ke){Ke.push(...e);return}for(Ke=e,Ke.sort((n,r)=>bn(n)-bn(r)),vt=0;vt<Ke.length;vt++)Ke[vt]();Ke=null,vt=0}}const bn=t=>t.id==null?1/0:t.id,nl=(t,e)=>{const n=bn(t)-bn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Fo(t){Qr=!1,vn=!0,ce.sort(nl);const e=Ae;try{for(Be=0;Be<ce.length;Be++){const n=ce[Be];n&&n.active!==!1&&ut(n,null,14)}}finally{Be=0,ce.length=0,Uo(),vn=!1,Ps=null,(ce.length||$t.length)&&Fo()}}function rl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Q;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[f]||Q;p&&(s=n.map(_=>_.trim())),h&&(s=n.map(qr))}let a,c=r[a=Mr(e)]||r[a=Mr(Vt(e))];!c&&i&&(c=r[a=Mr(Xt(e))]),c&&Oe(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Oe(l,t,6,s)}}function Bo(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!$(t)){const c=l=>{const f=Bo(l,e,!0);f&&(a=!0,pe(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(re(t)&&r.set(t,null),null):(B(i)?i.forEach(c=>o[c]=null):pe(o,i),re(t)&&r.set(t,o),o)}function Ir(t,e){return!t||!mr(e)?!1:(e=e.slice(2).replace(/Once$/,""),W(t,e[0].toLowerCase()+e.slice(1))||W(t,Xt(e))||W(t,e))}let $e=null,$o=null;function or(t){const e=$e;return $e=t,$o=t&&t.type.__scopeId||null,e}function an(t,e=$e,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&hi(-1);const i=or(e),o=t(...s);return or(i),r._d&&hi(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Nr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:f,renderCache:h,data:p,setupState:_,ctx:S,inheritAttrs:U}=t;let A,C;const x=or(t);try{if(n.shapeFlag&4){const z=s||r;A=Fe(f.call(z,z,h,i,_,p,S)),C=c}else{const z=e;A=Fe(z.length>1?z(i,{attrs:c,slots:a,emit:l}):z(i,null)),C=e.props?c:sl(c)}}catch(z){dn.length=0,yr(z,t,1),A=ae(yn)}let j=A;if(C&&U!==!1){const z=Object.keys(C),{shapeFlag:ie}=j;z.length&&ie&7&&(o&&z.some(bs)&&(C=il(C,o)),j=Kt(j,C))}return n.dirs&&(j=Kt(j),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),A=j,or(x),A}const sl=t=>{let e;for(const n in t)(n==="class"||n==="style"||mr(n))&&((e||(e={}))[n]=t[n]);return e},il=(t,e)=>{const n={};for(const r in t)(!bs(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ol(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ii(r,o,l):!!o;if(c&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==r[p]&&!Ir(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ii(r,o,l):!0:!!o;return!1}function ii(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ir(n,i))return!0}return!1}function al({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const cl=t=>t.__isSuspense;function ll(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):tl(t)}function Gn(t,e){if(le){let n=le.provides;const r=le.parent&&le.parent.provides;r===n&&(n=le.provides=Object.create(r)),n[t]=e}}function Je(t,e,n=!1){const r=le||$e;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&$(e)?e.call(r.proxy):e}}const oi={};function Jn(t,e,n){return Ho(t,e,n)}function Ho(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Q){const a=le;let c,l=!1,f=!1;if(ue(t)?(c=()=>t.value,l=ir(t)):Bt(t)?(c=()=>t,r=!0):B(t)?(f=!0,l=t.some(C=>Bt(C)||ir(C)),c=()=>t.map(C=>{if(ue(C))return C.value;if(Bt(C))return yt(C);if($(C))return ut(C,a,2)})):$(t)?e?c=()=>ut(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Oe(t,a,3,[p])}:c=Ae,e&&r){const C=c;c=()=>yt(C())}let h,p=C=>{h=A.onStop=()=>{ut(C,a,4)}};if(En)return p=Ae,e?n&&Oe(e,a,3,[c(),f?[]:void 0,p]):c(),Ae;let _=f?[]:oi;const S=()=>{if(!!A.active)if(e){const C=A.run();(r||l||(f?C.some((x,j)=>mn(x,_[j])):mn(C,_)))&&(h&&h(),Oe(e,a,3,[C,_===oi?void 0:_,p]),_=C)}else A.run()};S.allowRecurse=!!e;let U;s==="sync"?U=S:s==="post"?U=()=>me(S,a&&a.suspense):(S.pre=!0,a&&(S.id=a.uid),U=()=>ks(S));const A=new Ts(c,U);return e?n?S():_=A.run():s==="post"?me(A.run.bind(A),a&&a.suspense):A.run(),()=>{A.stop(),a&&a.scope&&ys(a.scope.effects,A)}}function ul(t,e,n){const r=this.proxy,s=fe(t)?t.includes(".")?jo(r,t):()=>r[t]:t.bind(r,r);let i;$(e)?i=e:(i=e.handler,n=e);const o=le;qt(this);const a=Ho(s,i.bind(r),n);return o?qt(o):Et(),a}function jo(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function yt(t,e){if(!re(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ue(t))yt(t.value,e);else if(B(t))for(let n=0;n<t.length;n++)yt(t[n],e);else if(dc(t)||fn(t))t.forEach(n=>{yt(n,e)});else if(gc(t))for(const n in t)yt(t[n],e);return t}function Wo(t){return $(t)?{setup:t,name:t.name}:t}const Yn=t=>!!t.type.__asyncLoader,Vo=t=>t.type.__isKeepAlive;function fl(t,e){zo(t,"a",e)}function dl(t,e){zo(t,"da",e)}function zo(t,e,n=le){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Er(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Vo(s.parent.vnode)&&hl(r,e,n,s),s=s.parent}}function hl(t,e,n,r){const s=Er(e,t,r,!0);Ko(()=>{ys(r[e],s)},n)}function Er(t,e,n=le,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Qt(),qt(n);const a=Oe(e,n,t,o);return Et(),Zt(),a});return r?s.unshift(i):s.push(i),i}}const Qe=t=>(e,n=le)=>(!En||t==="sp")&&Er(t,e,n),pl=Qe("bm"),gl=Qe("m"),ml=Qe("bu"),_l=Qe("u"),vl=Qe("bum"),Ko=Qe("um"),bl=Qe("sp"),yl=Qe("rtg"),Il=Qe("rtc");function El(t,e=le){Er("ec",t,e)}function lg(t,e){const n=$e;if(n===null)return t;const r=Tr(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Q]=e[i];$(o)&&(o={mounted:o,updated:o}),o.deep&&yt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function pt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Qt(),Oe(c,n,8,[t.el,a,t,e]),Zt())}}const wl=Symbol(),Zr=t=>t?na(t)?Tr(t)||t.proxy:Zr(t.parent):null,ar=pe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Zr(t.parent),$root:t=>Zr(t.root),$emit:t=>t.emit,$options:t=>Ms(t),$forceUpdate:t=>t.f||(t.f=()=>ks(t.update)),$nextTick:t=>t.n||(t.n=xo.bind(t.proxy)),$watch:t=>ul.bind(t)}),Tl={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==Q&&W(r,e))return o[e]=1,r[e];if(s!==Q&&W(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&W(l,e))return o[e]=3,i[e];if(n!==Q&&W(n,e))return o[e]=4,n[e];es&&(o[e]=0)}}const f=ar[e];let h,p;if(f)return e==="$attrs"&&be(t,"get",e),f(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Q&&W(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,W(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==Q&&W(s,e)?(s[e]=n,!0):r!==Q&&W(r,e)?(r[e]=n,!0):W(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Q&&W(t,o)||e!==Q&&W(e,o)||(a=i[0])&&W(a,o)||W(r,o)||W(ar,o)||W(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:W(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let es=!0;function Rl(t){const e=Ms(t),n=t.proxy,r=t.ctx;es=!1,e.beforeCreate&&ai(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:f,beforeMount:h,mounted:p,beforeUpdate:_,updated:S,activated:U,deactivated:A,beforeDestroy:C,beforeUnmount:x,destroyed:j,unmounted:z,render:ie,renderTracked:oe,renderTriggered:ye,errorCaptured:Ze,serverPrefetch:ge,expose:Me,inheritAttrs:We,components:we,directives:At,filters:Ot}=e;if(l&&Sl(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Z in o){const J=o[Z];$(J)&&(r[Z]=J.bind(n))}if(s){const Z=s.call(n,n);re(Z)&&(t.data=On(Z))}if(es=!0,i)for(const Z in i){const J=i[Z],_e=$(J)?J.bind(n,n):$(J.get)?J.get.bind(n,n):Ae,kt=!$(J)&&$(J.set)?J.set.bind(n):Ae,Ve=Ee({get:_e,set:kt});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>Ve.value,set:Ne=>Ve.value=Ne})}if(a)for(const Z in a)qo(a[Z],r,n,Z);if(c){const Z=$(c)?c.call(n):c;Reflect.ownKeys(Z).forEach(J=>{Gn(J,Z[J])})}f&&ai(f,t,"c");function se(Z,J){B(J)?J.forEach(_e=>Z(_e.bind(n))):J&&Z(J.bind(n))}if(se(pl,h),se(gl,p),se(ml,_),se(_l,S),se(fl,U),se(dl,A),se(El,Ze),se(Il,oe),se(yl,ye),se(vl,x),se(Ko,z),se(bl,ge),B(Me))if(Me.length){const Z=t.exposed||(t.exposed={});Me.forEach(J=>{Object.defineProperty(Z,J,{get:()=>n[J],set:_e=>n[J]=_e})})}else t.exposed||(t.exposed={});ie&&t.render===Ae&&(t.render=ie),We!=null&&(t.inheritAttrs=We),we&&(t.components=we),At&&(t.directives=At)}function Sl(t,e,n=Ae,r=!1){B(t)&&(t=ts(t));for(const s in t){const i=t[s];let o;re(i)?"default"in i?o=Je(i.from||s,i.default,!0):o=Je(i.from||s):o=Je(i),ue(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function ai(t,e,n){Oe(B(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function qo(t,e,n,r){const s=r.includes(".")?jo(n,r):()=>n[r];if(fe(t)){const i=e[t];$(i)&&Jn(s,i)}else if($(t))Jn(s,t.bind(n));else if(re(t))if(B(t))t.forEach(i=>qo(i,e,n,r));else{const i=$(t.handler)?t.handler.bind(n):e[t.handler];$(i)&&Jn(s,i,t)}}function Ms(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>cr(c,l,o,!0)),cr(c,e,o)),re(e)&&i.set(e,c),c}function cr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&cr(t,i,n,!0),s&&s.forEach(o=>cr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Cl[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Cl={data:ci,props:mt,emits:mt,methods:mt,computed:mt,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:mt,directives:mt,watch:Ol,provide:ci,inject:Al};function ci(t,e){return e?t?function(){return pe($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function Al(t,e){return mt(ts(t),ts(e))}function ts(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function he(t,e){return t?[...new Set([].concat(t,e))]:e}function mt(t,e){return t?pe(pe(Object.create(null),t),e):e}function Ol(t,e){if(!t)return e;if(!e)return t;const n=pe(Object.create(null),t);for(const r in e)n[r]=he(t[r],e[r]);return n}function Pl(t,e,n,r=!1){const s={},i={};sr(i,wr,1),t.propsDefaults=Object.create(null),Go(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Kc(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function kl(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=K(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(Ir(t.emitsOptions,p))continue;const _=e[p];if(c)if(W(i,p))_!==i[p]&&(i[p]=_,l=!0);else{const S=Vt(p);s[S]=ns(c,a,S,_,t,!1)}else _!==i[p]&&(i[p]=_,l=!0)}}}else{Go(t,e,s,i)&&(l=!0);let f;for(const h in a)(!e||!W(e,h)&&((f=Xt(h))===h||!W(e,f)))&&(c?n&&(n[h]!==void 0||n[f]!==void 0)&&(s[h]=ns(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!W(e,h)&&!0)&&(delete i[h],l=!0)}l&&Ye(t,"set","$attrs")}function Go(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Kn(c))continue;const l=e[c];let f;s&&W(s,f=Vt(c))?!i||!i.includes(f)?n[f]=l:(a||(a={}))[f]=l:Ir(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=K(n),l=a||Q;for(let f=0;f<i.length;f++){const h=i[f];n[h]=ns(s,c,h,l[h],t,!W(l,h))}}return o}function ns(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=W(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&$(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(qt(s),r=l[n]=c.call(null,e),Et())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Xt(n))&&(r=!0))}return r}function Jo(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!$(t)){const f=h=>{c=!0;const[p,_]=Jo(h,e,!0);pe(o,p),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return re(t)&&r.set(t,Ft),Ft;if(B(i))for(let f=0;f<i.length;f++){const h=Vt(i[f]);li(h)&&(o[h]=Q)}else if(i)for(const f in i){const h=Vt(f);if(li(h)){const p=i[f],_=o[h]=B(p)||$(p)?{type:p}:p;if(_){const S=di(Boolean,_.type),U=di(String,_.type);_[0]=S>-1,_[1]=U<0||S<U,(S>-1||W(_,"default"))&&a.push(h)}}}const l=[o,a];return re(t)&&r.set(t,l),l}function li(t){return t[0]!=="$"}function ui(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function fi(t,e){return ui(t)===ui(e)}function di(t,e){return B(e)?e.findIndex(n=>fi(n,t)):$(e)&&fi(e,t)?0:-1}const Yo=t=>t[0]==="_"||t==="$stable",Ns=t=>B(t)?t.map(Fe):[Fe(t)],Ml=(t,e,n)=>{if(e._n)return e;const r=an((...s)=>Ns(e(...s)),n);return r._c=!1,r},Xo=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Yo(s))continue;const i=t[s];if($(i))e[s]=Ml(s,i,r);else if(i!=null){const o=Ns(i);e[s]=()=>o}}},Qo=(t,e)=>{const n=Ns(e);t.slots.default=()=>n},Nl=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=K(e),sr(e,"_",n)):Xo(e,t.slots={})}else t.slots={},e&&Qo(t,e);sr(t.slots,wr,1)},Dl=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Q;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(pe(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Xo(e,s)),o=e}else e&&(Qo(t,e),o={default:1});if(i)for(const a in s)!Yo(a)&&!(a in o)&&delete s[a]};function Zo(){return{app:null,config:{isNativeTag:lc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xl=0;function Ll(t,e){return function(r,s=null){$(r)||(r=Object.assign({},r)),s!=null&&!re(s)&&(s=null);const i=Zo(),o=new Set;let a=!1;const c=i.app={_uid:xl++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:eu,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&$(l.install)?(o.add(l),l.install(c,...f)):$(l)&&(o.add(l),l(c,...f))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,f){return f?(i.components[l]=f,c):i.components[l]},directive(l,f){return f?(i.directives[l]=f,c):i.directives[l]},mount(l,f,h){if(!a){const p=ae(r,s);return p.appContext=i,f&&e?e(p,l):t(p,l,h),a=!0,c._container=l,l.__vue_app__=c,Tr(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,f){return i.provides[l]=f,c}};return c}}function rs(t,e,n,r,s=!1){if(B(t)){t.forEach((p,_)=>rs(p,e&&(B(e)?e[_]:e),n,r,s));return}if(Yn(r)&&!s)return;const i=r.shapeFlag&4?Tr(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,f=a.refs===Q?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(fe(l)?(f[l]=null,W(h,l)&&(h[l]=null)):ue(l)&&(l.value=null)),$(c))ut(c,a,12,[o,f]);else{const p=fe(c),_=ue(c);if(p||_){const S=()=>{if(t.f){const U=p?f[c]:c.value;s?B(U)&&ys(U,i):B(U)?U.includes(i)||U.push(i):p?(f[c]=[i],W(h,c)&&(h[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else p?(f[c]=o,W(h,c)&&(h[c]=o)):_&&(c.value=o,t.k&&(f[t.k]=o))};o?(S.id=-1,me(S,n)):S()}}}const me=ll;function Ul(t){return Fl(t)}function Fl(t,e){const n=vc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:f,parentNode:h,nextSibling:p,setScopeId:_=Ae,cloneNode:S,insertStaticContent:U}=t,A=(u,d,g,b=null,v=null,E=null,R=!1,I=null,w=!!d.dynamicChildren)=>{if(u===d)return;u&&!rn(u,d)&&(b=k(u),Ie(u,v,E,!0),u=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:y,ref:M,shapeFlag:O}=d;switch(y){case Ds:C(u,d,g,b);break;case yn:x(u,d,g,b);break;case Dr:u==null&&j(d,g,b,R);break;case Ue:At(u,d,g,b,v,E,R,I,w);break;default:O&1?oe(u,d,g,b,v,E,R,I,w):O&6?Ot(u,d,g,b,v,E,R,I,w):(O&64||O&128)&&y.process(u,d,g,b,v,E,R,I,w,ee)}M!=null&&v&&rs(M,u&&u.ref,E,d||u,!d)},C=(u,d,g,b)=>{if(u==null)r(d.el=a(d.children),g,b);else{const v=d.el=u.el;d.children!==u.children&&l(v,d.children)}},x=(u,d,g,b)=>{u==null?r(d.el=c(d.children||""),g,b):d.el=u.el},j=(u,d,g,b)=>{[u.el,u.anchor]=U(u.children,d,g,b,u.el,u.anchor)},z=({el:u,anchor:d},g,b)=>{let v;for(;u&&u!==d;)v=p(u),r(u,g,b),u=v;r(d,g,b)},ie=({el:u,anchor:d})=>{let g;for(;u&&u!==d;)g=p(u),s(u),u=g;s(d)},oe=(u,d,g,b,v,E,R,I,w)=>{R=R||d.type==="svg",u==null?ye(d,g,b,v,E,R,I,w):Me(u,d,v,E,R,I,w)},ye=(u,d,g,b,v,E,R,I)=>{let w,y;const{type:M,props:O,shapeFlag:N,transition:L,patchFlag:V,dirs:Y}=u;if(u.el&&S!==void 0&&V===-1)w=u.el=S(u.el);else{if(w=u.el=o(u.type,E,O&&O.is,O),N&8?f(w,u.children):N&16&&ge(u.children,w,null,b,v,E&&M!=="foreignObject",R,I),Y&&pt(u,null,b,"created"),O){for(const ne in O)ne!=="value"&&!Kn(ne)&&i(w,ne,null,O[ne],E,u.children,b,v,T);"value"in O&&i(w,"value",null,O.value),(y=O.onVnodeBeforeMount)&&xe(y,b,u)}Ze(w,u,u.scopeId,R,b)}Y&&pt(u,null,b,"beforeMount");const X=(!v||v&&!v.pendingBranch)&&L&&!L.persisted;X&&L.beforeEnter(w),r(w,d,g),((y=O&&O.onVnodeMounted)||X||Y)&&me(()=>{y&&xe(y,b,u),X&&L.enter(w),Y&&pt(u,null,b,"mounted")},v)},Ze=(u,d,g,b,v)=>{if(g&&_(u,g),b)for(let E=0;E<b.length;E++)_(u,b[E]);if(v){let E=v.subTree;if(d===E){const R=v.vnode;Ze(u,R,R.scopeId,R.slotScopeIds,v.parent)}}},ge=(u,d,g,b,v,E,R,I,w=0)=>{for(let y=w;y<u.length;y++){const M=u[y]=I?rt(u[y]):Fe(u[y]);A(null,M,d,g,b,v,E,R,I)}},Me=(u,d,g,b,v,E,R)=>{const I=d.el=u.el;let{patchFlag:w,dynamicChildren:y,dirs:M}=d;w|=u.patchFlag&16;const O=u.props||Q,N=d.props||Q;let L;g&&gt(g,!1),(L=N.onVnodeBeforeUpdate)&&xe(L,g,d,u),M&&pt(d,u,g,"beforeUpdate"),g&&gt(g,!0);const V=v&&d.type!=="foreignObject";if(y?We(u.dynamicChildren,y,I,g,b,V,E):R||_e(u,d,I,null,g,b,V,E,!1),w>0){if(w&16)we(I,d,O,N,g,b,v);else if(w&2&&O.class!==N.class&&i(I,"class",null,N.class,v),w&4&&i(I,"style",O.style,N.style,v),w&8){const Y=d.dynamicProps;for(let X=0;X<Y.length;X++){const ne=Y[X],Te=O[ne],Mt=N[ne];(Mt!==Te||ne==="value")&&i(I,ne,Te,Mt,v,u.children,g,b,T)}}w&1&&u.children!==d.children&&f(I,d.children)}else!R&&y==null&&we(I,d,O,N,g,b,v);((L=N.onVnodeUpdated)||M)&&me(()=>{L&&xe(L,g,d,u),M&&pt(d,u,g,"updated")},b)},We=(u,d,g,b,v,E,R)=>{for(let I=0;I<d.length;I++){const w=u[I],y=d[I],M=w.el&&(w.type===Ue||!rn(w,y)||w.shapeFlag&70)?h(w.el):g;A(w,y,M,null,b,v,E,R,!0)}},we=(u,d,g,b,v,E,R)=>{if(g!==b){for(const I in b){if(Kn(I))continue;const w=b[I],y=g[I];w!==y&&I!=="value"&&i(u,I,y,w,R,d.children,v,E,T)}if(g!==Q)for(const I in g)!Kn(I)&&!(I in b)&&i(u,I,g[I],null,R,d.children,v,E,T);"value"in b&&i(u,"value",g.value,b.value)}},At=(u,d,g,b,v,E,R,I,w)=>{const y=d.el=u?u.el:a(""),M=d.anchor=u?u.anchor:a("");let{patchFlag:O,dynamicChildren:N,slotScopeIds:L}=d;L&&(I=I?I.concat(L):L),u==null?(r(y,g,b),r(M,g,b),ge(d.children,g,M,v,E,R,I,w)):O>0&&O&64&&N&&u.dynamicChildren?(We(u.dynamicChildren,N,g,v,E,R,I),(d.key!=null||v&&d===v.subTree)&&ea(u,d,!0)):_e(u,d,g,M,v,E,R,I,w)},Ot=(u,d,g,b,v,E,R,I,w)=>{d.slotScopeIds=I,u==null?d.shapeFlag&512?v.ctx.activate(d,g,b,R,w):Pt(d,g,b,v,E,R,w):se(u,d,w)},Pt=(u,d,g,b,v,E,R)=>{const I=u.component=Gl(u,b,v);if(Vo(u)&&(I.ctx.renderer=ee),Jl(I),I.asyncDep){if(v&&v.registerDep(I,Z),!u.el){const w=I.subTree=ae(yn);x(null,w,d,g)}return}Z(I,u,d,g,v,E,R)},se=(u,d,g)=>{const b=d.component=u.component;if(ol(u,d,g))if(b.asyncDep&&!b.asyncResolved){J(b,d,g);return}else b.next=d,el(b.update),b.update();else d.el=u.el,b.vnode=d},Z=(u,d,g,b,v,E,R)=>{const I=()=>{if(u.isMounted){let{next:M,bu:O,u:N,parent:L,vnode:V}=u,Y=M,X;gt(u,!1),M?(M.el=V.el,J(u,M,R)):M=V,O&&qn(O),(X=M.props&&M.props.onVnodeBeforeUpdate)&&xe(X,L,M,V),gt(u,!0);const ne=Nr(u),Te=u.subTree;u.subTree=ne,A(Te,ne,h(Te.el),k(Te),u,v,E),M.el=ne.el,Y===null&&al(u,ne.el),N&&me(N,v),(X=M.props&&M.props.onVnodeUpdated)&&me(()=>xe(X,L,M,V),v)}else{let M;const{el:O,props:N}=d,{bm:L,m:V,parent:Y}=u,X=Yn(d);if(gt(u,!1),L&&qn(L),!X&&(M=N&&N.onVnodeBeforeMount)&&xe(M,Y,d),gt(u,!0),O&&F){const ne=()=>{u.subTree=Nr(u),F(O,u.subTree,u,v,null)};X?d.type.__asyncLoader().then(()=>!u.isUnmounted&&ne()):ne()}else{const ne=u.subTree=Nr(u);A(null,ne,g,b,u,v,E),d.el=ne.el}if(V&&me(V,v),!X&&(M=N&&N.onVnodeMounted)){const ne=d;me(()=>xe(M,Y,ne),v)}(d.shapeFlag&256||Y&&Yn(Y.vnode)&&Y.vnode.shapeFlag&256)&&u.a&&me(u.a,v),u.isMounted=!0,d=g=b=null}},w=u.effect=new Ts(I,()=>ks(y),u.scope),y=u.update=()=>w.run();y.id=u.uid,gt(u,!0),y()},J=(u,d,g)=>{d.component=u;const b=u.vnode.props;u.vnode=d,u.next=null,kl(u,d.props,b,g),Dl(u,d.children,g),Qt(),si(),Zt()},_e=(u,d,g,b,v,E,R,I,w=!1)=>{const y=u&&u.children,M=u?u.shapeFlag:0,O=d.children,{patchFlag:N,shapeFlag:L}=d;if(N>0){if(N&128){Ve(y,O,g,b,v,E,R,I,w);return}else if(N&256){kt(y,O,g,b,v,E,R,I,w);return}}L&8?(M&16&&T(y,v,E),O!==y&&f(g,O)):M&16?L&16?Ve(y,O,g,b,v,E,R,I,w):T(y,v,E,!0):(M&8&&f(g,""),L&16&&ge(O,g,b,v,E,R,I,w))},kt=(u,d,g,b,v,E,R,I,w)=>{u=u||Ft,d=d||Ft;const y=u.length,M=d.length,O=Math.min(y,M);let N;for(N=0;N<O;N++){const L=d[N]=w?rt(d[N]):Fe(d[N]);A(u[N],L,g,null,v,E,R,I,w)}y>M?T(u,v,E,!0,!1,O):ge(d,g,b,v,E,R,I,w,O)},Ve=(u,d,g,b,v,E,R,I,w)=>{let y=0;const M=d.length;let O=u.length-1,N=M-1;for(;y<=O&&y<=N;){const L=u[y],V=d[y]=w?rt(d[y]):Fe(d[y]);if(rn(L,V))A(L,V,g,null,v,E,R,I,w);else break;y++}for(;y<=O&&y<=N;){const L=u[O],V=d[N]=w?rt(d[N]):Fe(d[N]);if(rn(L,V))A(L,V,g,null,v,E,R,I,w);else break;O--,N--}if(y>O){if(y<=N){const L=N+1,V=L<M?d[L].el:b;for(;y<=N;)A(null,d[y]=w?rt(d[y]):Fe(d[y]),g,V,v,E,R,I,w),y++}}else if(y>N)for(;y<=O;)Ie(u[y],v,E,!0),y++;else{const L=y,V=y,Y=new Map;for(y=V;y<=N;y++){const ve=d[y]=w?rt(d[y]):Fe(d[y]);ve.key!=null&&Y.set(ve.key,y)}let X,ne=0;const Te=N-V+1;let Mt=!1,qs=0;const nn=new Array(Te);for(y=0;y<Te;y++)nn[y]=0;for(y=L;y<=O;y++){const ve=u[y];if(ne>=Te){Ie(ve,v,E,!0);continue}let De;if(ve.key!=null)De=Y.get(ve.key);else for(X=V;X<=N;X++)if(nn[X-V]===0&&rn(ve,d[X])){De=X;break}De===void 0?Ie(ve,v,E,!0):(nn[De-V]=y+1,De>=qs?qs=De:Mt=!0,A(ve,d[De],g,null,v,E,R,I,w),ne++)}const Gs=Mt?Bl(nn):Ft;for(X=Gs.length-1,y=Te-1;y>=0;y--){const ve=V+y,De=d[ve],Js=ve+1<M?d[ve+1].el:b;nn[y]===0?A(null,De,g,Js,v,E,R,I,w):Mt&&(X<0||y!==Gs[X]?Ne(De,g,Js,2):X--)}}},Ne=(u,d,g,b,v=null)=>{const{el:E,type:R,transition:I,children:w,shapeFlag:y}=u;if(y&6){Ne(u.component.subTree,d,g,b);return}if(y&128){u.suspense.move(d,g,b);return}if(y&64){R.move(u,d,g,ee);return}if(R===Ue){r(E,d,g);for(let O=0;O<w.length;O++)Ne(w[O],d,g,b);r(u.anchor,d,g);return}if(R===Dr){z(u,d,g);return}if(b!==2&&y&1&&I)if(b===0)I.beforeEnter(E),r(E,d,g),me(()=>I.enter(E),v);else{const{leave:O,delayLeave:N,afterLeave:L}=I,V=()=>r(E,d,g),Y=()=>{O(E,()=>{V(),L&&L()})};N?N(E,V,Y):Y()}else r(E,d,g)},Ie=(u,d,g,b=!1,v=!1)=>{const{type:E,props:R,ref:I,children:w,dynamicChildren:y,shapeFlag:M,patchFlag:O,dirs:N}=u;if(I!=null&&rs(I,null,g,u,!0),M&256){d.ctx.deactivate(u);return}const L=M&1&&N,V=!Yn(u);let Y;if(V&&(Y=R&&R.onVnodeBeforeUnmount)&&xe(Y,d,u),M&6)P(u.component,g,b);else{if(M&128){u.suspense.unmount(g,b);return}L&&pt(u,null,d,"beforeUnmount"),M&64?u.type.remove(u,d,g,v,ee,b):y&&(E!==Ue||O>0&&O&64)?T(y,d,g,!1,!0):(E===Ue&&O&384||!v&&M&16)&&T(w,d,g),b&&tn(u)}(V&&(Y=R&&R.onVnodeUnmounted)||L)&&me(()=>{Y&&xe(Y,d,u),L&&pt(u,null,d,"unmounted")},g)},tn=u=>{const{type:d,el:g,anchor:b,transition:v}=u;if(d===Ue){m(g,b);return}if(d===Dr){ie(u);return}const E=()=>{s(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(u.shapeFlag&1&&v&&!v.persisted){const{leave:R,delayLeave:I}=v,w=()=>R(g,E);I?I(u.el,E,w):w()}else E()},m=(u,d)=>{let g;for(;u!==d;)g=p(u),s(u),u=g;s(d)},P=(u,d,g)=>{const{bum:b,scope:v,update:E,subTree:R,um:I}=u;b&&qn(b),v.stop(),E&&(E.active=!1,Ie(R,u,d,g)),I&&me(I,d),me(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},T=(u,d,g,b=!1,v=!1,E=0)=>{for(let R=E;R<u.length;R++)Ie(u[R],d,g,b,v)},k=u=>u.shapeFlag&6?k(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),q=(u,d,g)=>{u==null?d._vnode&&Ie(d._vnode,null,null,!0):A(d._vnode||null,u,d,null,null,null,g),si(),Uo(),d._vnode=u},ee={p:A,um:Ie,m:Ne,r:tn,mt:Pt,mc:ge,pc:_e,pbc:We,n:k,o:t};let H,F;return e&&([H,F]=e(ee)),{render:q,hydrate:H,createApp:Ll(q,H)}}function gt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ea(t,e,n=!1){const r=t.children,s=e.children;if(B(r)&&B(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=rt(s[i]),a.el=o.el),n||ea(o,a))}}function Bl(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const $l=t=>t.__isTeleport,Ue=Symbol(void 0),Ds=Symbol(void 0),yn=Symbol(void 0),Dr=Symbol(void 0),dn=[];let Ce=null;function Xn(t=!1){dn.push(Ce=t?null:[])}function Hl(){dn.pop(),Ce=dn[dn.length-1]||null}let In=1;function hi(t){In+=t}function jl(t){return t.dynamicChildren=In>0?Ce||Ft:null,Hl(),In>0&&Ce&&Ce.push(t),t}function Qn(t,e,n,r,s,i){return jl(Lt(t,e,n,r,s,i,!0))}function ss(t){return t?t.__v_isVNode===!0:!1}function rn(t,e){return t.type===e.type&&t.key===e.key}const wr="__vInternal",ta=({key:t})=>t!=null?t:null,Zn=({ref:t,ref_key:e,ref_for:n})=>t!=null?fe(t)||ue(t)||$(t)?{i:$e,r:t,k:e,f:!!n}:t:null;function Lt(t,e=null,n=null,r=0,s=null,i=t===Ue?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ta(e),ref:e&&Zn(e),scopeId:$o,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(xs(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=fe(n)?8:16),In>0&&!o&&Ce&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ce.push(c),c}const ae=Wl;function Wl(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===wl)&&(t=yn),ss(t)){const a=Kt(t,e,!0);return n&&xs(a,n),In>0&&!i&&Ce&&(a.shapeFlag&6?Ce[Ce.indexOf(t)]=a:Ce.push(a)),a.patchFlag|=-2,a}if(Zl(t)&&(t=t.__vccOpts),e){e=Vl(e);let{class:a,style:c}=e;a&&!fe(a)&&(e.class=vs(a)),re(c)&&(So(c)&&!B(c)&&(c=pe({},c)),e.style=_s(c))}const o=fe(t)?1:cl(t)?128:$l(t)?64:re(t)?4:$(t)?2:0;return Lt(t,e,n,r,s,o,i,!0)}function Vl(t){return t?So(t)||wr in t?pe({},t):t:null}function Kt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?zl(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&ta(a),ref:e&&e.ref?n&&s?B(s)?s.concat(Zn(e)):[s,Zn(e)]:Zn(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ue?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Kt(t.ssContent),ssFallback:t.ssFallback&&Kt(t.ssFallback),el:t.el,anchor:t.anchor}}function Pn(t=" ",e=0){return ae(Ds,null,t,e)}function Fe(t){return t==null||typeof t=="boolean"?ae(yn):B(t)?ae(Ue,null,t.slice()):typeof t=="object"?rt(t):ae(Ds,null,String(t))}function rt(t){return t.el===null||t.memo?t:Kt(t)}function xs(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),xs(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(wr in e)?e._ctx=$e:s===3&&$e&&($e.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:$e},n=32):(e=String(e),r&64?(n=16,e=[Pn(e)]):n=8);t.children=e,t.shapeFlag|=n}function zl(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=vs([e.class,r.class]));else if(s==="style")e.style=_s([e.style,r.style]);else if(mr(s)){const i=e[s],o=r[s];o&&i!==o&&!(B(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function xe(t,e,n,r=null){Oe(t,e,7,[n,r])}const Kl=Zo();let ql=0;function Gl(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Kl,i={uid:ql++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new bc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jo(r,s),emitsOptions:Bo(r,s),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:r.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=rl.bind(null,i),t.ce&&t.ce(i),i}let le=null;const qt=t=>{le=t,t.scope.on()},Et=()=>{le&&le.scope.off(),le=null};function na(t){return t.vnode.shapeFlag&4}let En=!1;function Jl(t,e=!1){En=e;const{props:n,children:r}=t.vnode,s=na(t);Pl(t,n,s,e),Nl(t,r);const i=s?Yl(t,e):void 0;return En=!1,i}function Yl(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Co(new Proxy(t.ctx,Tl));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Ql(t):null;qt(t),Qt();const i=ut(r,t,0,[t.props,s]);if(Zt(),Et(),ho(i)){if(i.then(Et,Et),e)return i.then(o=>{pi(t,o,e)}).catch(o=>{yr(o,t,0)});t.asyncDep=i}else pi(t,i,e)}else ra(t,e)}function pi(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:re(e)&&(t.setupState=Mo(e)),ra(t,n)}let gi;function ra(t,e,n){const r=t.type;if(!t.render){if(!e&&gi&&!r.render){const s=r.template||Ms(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=pe(pe({isCustomElement:i,delimiters:a},o),c);r.render=gi(s,l)}}t.render=r.render||Ae}qt(t),Qt(),Rl(t),Zt(),Et()}function Xl(t){return new Proxy(t.attrs,{get(e,n){return be(t,"get","$attrs"),e[n]}})}function Ql(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Xl(t))},slots:t.slots,emit:t.emit,expose:e}}function Tr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Mo(Co(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ar)return ar[n](t)}}))}function Zl(t){return $(t)&&"__vccOpts"in t}const Ee=(t,e)=>Xc(t,e,En);function sa(t,e,n){const r=arguments.length;return r===2?re(e)&&!B(e)?ss(e)?ae(t,null,[e]):ae(t,e):ae(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ss(n)&&(n=[n]),ae(t,e,n))}const eu="3.2.39",tu="http://www.w3.org/2000/svg",bt=typeof document<"u"?document:null,mi=bt&&bt.createElement("template"),nu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?bt.createElementNS(tu,t):bt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>bt.createTextNode(t),createComment:t=>bt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>bt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{mi.innerHTML=r?`<svg>${t}</svg>`:t;const a=mi.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function ru(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function su(t,e,n){const r=t.style,s=fe(n);if(n&&!s){for(const i in n)is(r,i,n[i]);if(e&&!fe(e))for(const i in e)n[i]==null&&is(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const _i=/\s*!important$/;function is(t,e,n){if(B(n))n.forEach(r=>is(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=iu(t,e);_i.test(n)?t.setProperty(Xt(r),n.replace(_i,""),"important"):t[r]=n}}const vi=["Webkit","Moz","ms"],xr={};function iu(t,e){const n=xr[e];if(n)return n;let r=Vt(e);if(r!=="filter"&&r in t)return xr[e]=r;r=po(r);for(let s=0;s<vi.length;s++){const i=vi[s]+r;if(i in t)return xr[e]=i}return e}const bi="http://www.w3.org/1999/xlink";function ou(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(bi,e.slice(6,e.length)):t.setAttributeNS(bi,e,n);else{const i=ic(e);n==null||i&&!fo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function au(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=fo(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[ia,cu]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let os=0;const lu=Promise.resolve(),uu=()=>{os=0},fu=()=>os||(lu.then(uu),os=ia());function Dt(t,e,n,r){t.addEventListener(e,n,r)}function du(t,e,n,r){t.removeEventListener(e,n,r)}function hu(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=pu(e);if(r){const l=i[e]=gu(r,s);Dt(t,a,l,c)}else o&&(du(t,a,o,c),i[e]=void 0)}}const yi=/(?:Once|Passive|Capture)$/;function pu(t){let e;if(yi.test(t)){e={};let r;for(;r=t.match(yi);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Xt(t.slice(2)),e]}function gu(t,e){const n=r=>{const s=r.timeStamp||ia();(cu||s>=n.attached-1)&&Oe(mu(r,n.value),e,5,[r])};return n.value=t,n.attached=fu(),n}function mu(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ii=/^on[a-z]/,_u=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?ru(t,r,s):e==="style"?su(t,n,r):mr(e)?bs(e)||hu(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):vu(t,e,r,s))?au(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ou(t,e,r,s))};function vu(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Ii.test(e)&&$(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ii.test(e)&&fe(n)?!1:e in t}const Ei=t=>{const e=t.props["onUpdate:modelValue"]||!1;return B(e)?n=>qn(e,n):e};function bu(t){t.target.composing=!0}function wi(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ug={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Ei(s);const i=r||s.props&&s.props.type==="number";Dt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=qr(a)),t._assign(a)}),n&&Dt(t,"change",()=>{t.value=t.value.trim()}),e||(Dt(t,"compositionstart",bu),Dt(t,"compositionend",wi),Dt(t,"change",wi))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Ei(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&qr(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},yu=pe({patchProp:_u},nu);let Ti;function Iu(){return Ti||(Ti=Ul(yu))}const Eu=(...t)=>{const e=Iu().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=wu(r);if(!s)return;const i=e._component;!$(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function wu(t){return fe(t)?document.querySelector(t):t}/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const xt=typeof window<"u";function Tu(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const G=Object.assign;function Lr(t,e){const n={};for(const r in e){const s=e[r];n[r]=Pe(s)?s.map(t):t(s)}return n}const hn=()=>{},Pe=Array.isArray,Ru=/\/$/,Su=t=>t.replace(Ru,"");function Ur(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Pu(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Cu(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ri(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Au(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Gt(e.matched[r],n.matched[s])&&oa(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Gt(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function oa(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Ou(t[n],e[n]))return!1;return!0}function Ou(t,e){return Pe(t)?Si(t,e):Pe(e)?Si(e,t):t===e}function Si(t,e){return Pe(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Pu(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var wn;(function(t){t.pop="pop",t.push="push"})(wn||(wn={}));var pn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(pn||(pn={}));function ku(t){if(!t)if(xt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Su(t)}const Mu=/^[^#]+#/;function Nu(t,e){return t.replace(Mu,"#")+e}function Du(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Rr=()=>({left:window.pageXOffset,top:window.pageYOffset});function xu(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Du(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ci(t,e){return(history.state?history.state.position-e:-1)+t}const as=new Map;function Lu(t,e){as.set(t,e)}function Uu(t){const e=as.get(t);return as.delete(t),e}let Fu=()=>location.protocol+"//"+location.host;function aa(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Ri(c,"")}return Ri(n,t)+r+s}function Bu(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const _=aa(t,location),S=n.value,U=e.value;let A=0;if(p){if(n.value=_,e.value=p,o&&o===S){o=null;return}A=U?p.position-U.position:0}else r(_);s.forEach(C=>{C(n.value,S,{delta:A,type:wn.pop,direction:A?A>0?pn.forward:pn.back:pn.unknown})})};function c(){o=n.value}function l(p){s.push(p);const _=()=>{const S=s.indexOf(p);S>-1&&s.splice(S,1)};return i.push(_),_}function f(){const{history:p}=window;!p.state||p.replaceState(G({},p.state,{scroll:Rr()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f),{pauseListeners:c,listen:l,destroy:h}}function Ai(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Rr():null}}function $u(t){const{history:e,location:n}=window,r={value:aa(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Fu()+t+c;try{e[f?"replaceState":"pushState"](l,"",p),s.value=l}catch(_){console.error(_),n[f?"replace":"assign"](p)}}function o(c,l){const f=G({},e.state,Ai(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,f,!0),r.value=c}function a(c,l){const f=G({},s.value,e.state,{forward:c,scroll:Rr()});i(f.current,f,!0);const h=G({},Ai(r.value,c,null),{position:f.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Hu(t){t=ku(t);const e=$u(t),n=Bu(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=G({location:"",base:t,go:r,createHref:Nu.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function ju(t){return typeof t=="string"||t&&typeof t=="object"}function ca(t){return typeof t=="string"||typeof t=="symbol"}const tt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},la=Symbol("");var Oi;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Oi||(Oi={}));function Jt(t,e){return G(new Error,{type:t,[la]:!0},e)}function ze(t,e){return t instanceof Error&&la in t&&(e==null||!!(t.type&e))}const Pi="[^/]+?",Wu={sensitive:!1,strict:!1,start:!0,end:!0},Vu=/[.+*?^${}()[\]/\\]/g;function zu(t,e){const n=G({},Wu,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const p=l[h];let _=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(Vu,"\\$&"),_+=40;else if(p.type===1){const{value:S,repeatable:U,optional:A,regexp:C}=p;i.push({name:S,repeatable:U,optional:A});const x=C||Pi;if(x!==Pi){_+=10;try{new RegExp(`(${x})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${S}" (${x}): `+z.message)}}let j=U?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;h||(j=A&&l.length<2?`(?:/${j})`:"/"+j),A&&(j+="?"),s+=j,_+=20,A&&(_+=-8),U&&(_+=-20),x===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const f=l.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const _=f[p]||"",S=i[p-1];h[S.name]=_&&S.repeatable?_.split("/"):_}return h}function c(l){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const _ of p)if(_.type===0)f+=_.value;else if(_.type===1){const{value:S,repeatable:U,optional:A}=_,C=S in l?l[S]:"";if(Pe(C)&&!U)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const x=Pe(C)?C.join("/"):C;if(!x)if(A)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${S}"`);f+=x}}return f||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Ku(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function qu(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Ku(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ki(r))return 1;if(ki(s))return-1}return s.length-r.length}function ki(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Gu={type:0,value:""},Ju=/[a-zA-Z0-9_]/;function Yu(t){if(!t)return[[]];if(t==="/")return[[Gu]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${l}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",f="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Ju.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Xu(t,e,n){const r=zu(Yu(t.path),n),s=G(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Qu(t,e){const n=[],r=new Map;e=Di({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,h,p){const _=!p,S=Zu(f);S.aliasOf=p&&p.record;const U=Di(e,f),A=[S];if("alias"in f){const j=typeof f.alias=="string"?[f.alias]:f.alias;for(const z of j)A.push(G({},S,{components:p?p.record.components:S.components,path:z,aliasOf:p?p.record:S}))}let C,x;for(const j of A){const{path:z}=j;if(h&&z[0]!=="/"){const ie=h.record.path,oe=ie[ie.length-1]==="/"?"":"/";j.path=h.record.path+(z&&oe+z)}if(C=Xu(j,h,U),p?p.alias.push(C):(x=x||C,x!==C&&x.alias.push(C),_&&f.name&&!Ni(C)&&o(f.name)),S.children){const ie=S.children;for(let oe=0;oe<ie.length;oe++)i(ie[oe],C,p&&p.children[oe])}p=p||C,c(C)}return x?()=>{o(x)}:hn}function o(f){if(ca(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){let h=0;for(;h<n.length&&qu(f,n[h])>=0&&(f.record.path!==n[h].record.path||!ua(f,n[h]));)h++;n.splice(h,0,f),f.record.name&&!Ni(f)&&r.set(f.record.name,f)}function l(f,h){let p,_={},S,U;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw Jt(1,{location:f});U=p.record.name,_=G(Mi(h.params,p.keys.filter(x=>!x.optional).map(x=>x.name)),f.params&&Mi(f.params,p.keys.map(x=>x.name))),S=p.stringify(_)}else if("path"in f)S=f.path,p=n.find(x=>x.re.test(S)),p&&(_=p.parse(S),U=p.record.name);else{if(p=h.name?r.get(h.name):n.find(x=>x.re.test(h.path)),!p)throw Jt(1,{location:f,currentLocation:h});U=p.record.name,_=G({},h.params,f.params),S=p.stringify(_)}const A=[];let C=p;for(;C;)A.unshift(C.record),C=C.parent;return{name:U,path:S,params:_,matched:A,meta:tf(A)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Mi(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Zu(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ef(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function ef(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Ni(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function tf(t){return t.reduce((e,n)=>G(e,n.meta),{})}function Di(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ua(t,e){return e.children.some(n=>n===t||ua(t,n))}const fa=/#/g,nf=/&/g,rf=/\//g,sf=/=/g,of=/\?/g,da=/\+/g,af=/%5B/g,cf=/%5D/g,ha=/%5E/g,lf=/%60/g,pa=/%7B/g,uf=/%7C/g,ga=/%7D/g,ff=/%20/g;function Ls(t){return encodeURI(""+t).replace(uf,"|").replace(af,"[").replace(cf,"]")}function df(t){return Ls(t).replace(pa,"{").replace(ga,"}").replace(ha,"^")}function cs(t){return Ls(t).replace(da,"%2B").replace(ff,"+").replace(fa,"%23").replace(nf,"%26").replace(lf,"`").replace(pa,"{").replace(ga,"}").replace(ha,"^")}function hf(t){return cs(t).replace(sf,"%3D")}function pf(t){return Ls(t).replace(fa,"%23").replace(of,"%3F")}function gf(t){return t==null?"":pf(t).replace(rf,"%2F")}function lr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function mf(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(da," "),o=i.indexOf("="),a=lr(o<0?i:i.slice(0,o)),c=o<0?null:lr(i.slice(o+1));if(a in e){let l=e[a];Pe(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function xi(t){let e="";for(let n in t){const r=t[n];if(n=hf(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Pe(r)?r.map(i=>i&&cs(i)):[r&&cs(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function _f(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Pe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const vf=Symbol(""),Li=Symbol(""),Sr=Symbol(""),ma=Symbol(""),ls=Symbol("");function sn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function st(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Jt(4,{from:n,to:e})):h instanceof Error?a(h):ju(h)?a(Jt(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let f=Promise.resolve(l);t.length<3&&(f=f.then(c)),f.catch(h=>a(h))})}function Fr(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(bf(a)){const l=(a.__vccOpts||a)[e];l&&s.push(st(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=Tu(l)?l.default:l;i.components[o]=f;const p=(f.__vccOpts||f)[e];return p&&st(p,n,r,i,o)()}))}}return s}function bf(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ui(t){const e=Je(Sr),n=Je(ma),r=Ee(()=>e.resolve(Se(t.to))),s=Ee(()=>{const{matched:c}=r.value,{length:l}=c,f=c[l-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(Gt.bind(null,f));if(p>-1)return p;const _=Fi(c[l-2]);return l>1&&Fi(f)===_&&h[h.length-1].path!==_?h.findIndex(Gt.bind(null,c[l-2])):p}),i=Ee(()=>s.value>-1&&Ef(n.params,r.value.params)),o=Ee(()=>s.value>-1&&s.value===n.matched.length-1&&oa(n.params,r.value.params));function a(c={}){return If(c)?e[Se(t.replace)?"replace":"push"](Se(t.to)).catch(hn):Promise.resolve()}return{route:r,href:Ee(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const yf=Wo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ui,setup(t,{slots:e}){const n=On(Ui(t)),{options:r}=Je(Sr),s=Ee(()=>({[Bi(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Bi(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:sa("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),cn=yf;function If(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Ef(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Pe(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Fi(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Bi=(t,e,n)=>t!=null?t:e!=null?e:n,wf=Wo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Je(ls),s=Ee(()=>t.route||r.value),i=Je(Li,0),o=Ee(()=>{let l=Se(i);const{matched:f}=s.value;let h;for(;(h=f[l])&&!h.components;)l++;return l}),a=Ee(()=>s.value.matched[o.value]);Gn(Li,Ee(()=>o.value+1)),Gn(vf,a),Gn(ls,s);const c=Po();return Jn(()=>[c.value,a.value,t.name],([l,f,h],[p,_,S])=>{f&&(f.instances[h]=l,_&&_!==f&&l&&l===p&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),l&&f&&(!_||!Gt(f,_)||!p)&&(f.enterCallbacks[h]||[]).forEach(U=>U(l))},{flush:"post"}),()=>{const l=s.value,f=t.name,h=a.value,p=h&&h.components[f];if(!p)return $i(n.default,{Component:p,route:l});const _=h.props[f],S=_?_===!0?l.params:typeof _=="function"?_(l):_:null,A=sa(p,G({},S,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(h.instances[f]=null)},ref:c}));return $i(n.default,{Component:A,route:l})||A}}});function $i(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const _a=wf;function Tf(t){const e=Qu(t.routes,t),n=t.parseQuery||mf,r=t.stringifyQuery||xi,s=t.history,i=sn(),o=sn(),a=sn(),c=qc(tt);let l=tt;xt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Lr.bind(null,m=>""+m),h=Lr.bind(null,gf),p=Lr.bind(null,lr);function _(m,P){let T,k;return ca(m)?(T=e.getRecordMatcher(m),k=P):k=m,e.addRoute(k,T)}function S(m){const P=e.getRecordMatcher(m);P&&e.removeRoute(P)}function U(){return e.getRoutes().map(m=>m.record)}function A(m){return!!e.getRecordMatcher(m)}function C(m,P){if(P=G({},P||c.value),typeof m=="string"){const F=Ur(n,m,P.path),u=e.resolve({path:F.path},P),d=s.createHref(F.fullPath);return G(F,u,{params:p(u.params),hash:lr(F.hash),redirectedFrom:void 0,href:d})}let T;if("path"in m)T=G({},m,{path:Ur(n,m.path,P.path).path});else{const F=G({},m.params);for(const u in F)F[u]==null&&delete F[u];T=G({},m,{params:h(m.params)}),P.params=h(P.params)}const k=e.resolve(T,P),q=m.hash||"";k.params=f(p(k.params));const ee=Cu(r,G({},m,{hash:df(q),path:k.path})),H=s.createHref(ee);return G({fullPath:ee,hash:q,query:r===xi?_f(m.query):m.query||{}},k,{redirectedFrom:void 0,href:H})}function x(m){return typeof m=="string"?Ur(n,m,c.value.path):G({},m)}function j(m,P){if(l!==m)return Jt(8,{from:P,to:m})}function z(m){return ye(m)}function ie(m){return z(G(x(m),{replace:!0}))}function oe(m){const P=m.matched[m.matched.length-1];if(P&&P.redirect){const{redirect:T}=P;let k=typeof T=="function"?T(m):T;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=x(k):{path:k},k.params={}),G({query:m.query,hash:m.hash,params:"path"in k?{}:m.params},k)}}function ye(m,P){const T=l=C(m),k=c.value,q=m.state,ee=m.force,H=m.replace===!0,F=oe(T);if(F)return ye(G(x(F),{state:typeof F=="object"?G({},q,F.state):q,force:ee,replace:H}),P||T);const u=T;u.redirectedFrom=P;let d;return!ee&&Au(r,k,T)&&(d=Jt(16,{to:u,from:k}),kt(k,k,!0,!1)),(d?Promise.resolve(d):ge(u,k)).catch(g=>ze(g)?ze(g,2)?g:_e(g):Z(g,u,k)).then(g=>{if(g){if(ze(g,2))return ye(G({replace:H},x(g.to),{state:typeof g.to=="object"?G({},q,g.to.state):q,force:ee}),P||u)}else g=We(u,k,!0,H,q);return Me(u,k,g),g})}function Ze(m,P){const T=j(m,P);return T?Promise.reject(T):Promise.resolve()}function ge(m,P){let T;const[k,q,ee]=Rf(m,P);T=Fr(k.reverse(),"beforeRouteLeave",m,P);for(const F of k)F.leaveGuards.forEach(u=>{T.push(st(u,m,P))});const H=Ze.bind(null,m,P);return T.push(H),Nt(T).then(()=>{T=[];for(const F of i.list())T.push(st(F,m,P));return T.push(H),Nt(T)}).then(()=>{T=Fr(q,"beforeRouteUpdate",m,P);for(const F of q)F.updateGuards.forEach(u=>{T.push(st(u,m,P))});return T.push(H),Nt(T)}).then(()=>{T=[];for(const F of m.matched)if(F.beforeEnter&&!P.matched.includes(F))if(Pe(F.beforeEnter))for(const u of F.beforeEnter)T.push(st(u,m,P));else T.push(st(F.beforeEnter,m,P));return T.push(H),Nt(T)}).then(()=>(m.matched.forEach(F=>F.enterCallbacks={}),T=Fr(ee,"beforeRouteEnter",m,P),T.push(H),Nt(T))).then(()=>{T=[];for(const F of o.list())T.push(st(F,m,P));return T.push(H),Nt(T)}).catch(F=>ze(F,8)?F:Promise.reject(F))}function Me(m,P,T){for(const k of a.list())k(m,P,T)}function We(m,P,T,k,q){const ee=j(m,P);if(ee)return ee;const H=P===tt,F=xt?history.state:{};T&&(k||H?s.replace(m.fullPath,G({scroll:H&&F&&F.scroll},q)):s.push(m.fullPath,q)),c.value=m,kt(m,P,T,H),_e()}let we;function At(){we||(we=s.listen((m,P,T)=>{if(!tn.listening)return;const k=C(m),q=oe(k);if(q){ye(G(q,{replace:!0}),k).catch(hn);return}l=k;const ee=c.value;xt&&Lu(Ci(ee.fullPath,T.delta),Rr()),ge(k,ee).catch(H=>ze(H,12)?H:ze(H,2)?(ye(H.to,k).then(F=>{ze(F,20)&&!T.delta&&T.type===wn.pop&&s.go(-1,!1)}).catch(hn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),Z(H,k,ee))).then(H=>{H=H||We(k,ee,!1),H&&(T.delta&&!ze(H,8)?s.go(-T.delta,!1):T.type===wn.pop&&ze(H,20)&&s.go(-1,!1)),Me(k,ee,H)}).catch(hn)}))}let Ot=sn(),Pt=sn(),se;function Z(m,P,T){_e(m);const k=Pt.list();return k.length?k.forEach(q=>q(m,P,T)):console.error(m),Promise.reject(m)}function J(){return se&&c.value!==tt?Promise.resolve():new Promise((m,P)=>{Ot.add([m,P])})}function _e(m){return se||(se=!m,At(),Ot.list().forEach(([P,T])=>m?T(m):P()),Ot.reset()),m}function kt(m,P,T,k){const{scrollBehavior:q}=t;if(!xt||!q)return Promise.resolve();const ee=!T&&Uu(Ci(m.fullPath,0))||(k||!T)&&history.state&&history.state.scroll||null;return xo().then(()=>q(m,P,ee)).then(H=>H&&xu(H)).catch(H=>Z(H,m,P))}const Ve=m=>s.go(m);let Ne;const Ie=new Set,tn={currentRoute:c,listening:!0,addRoute:_,removeRoute:S,hasRoute:A,getRoutes:U,resolve:C,options:t,push:z,replace:ie,go:Ve,back:()=>Ve(-1),forward:()=>Ve(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Pt.add,isReady:J,install(m){const P=this;m.component("RouterLink",cn),m.component("RouterView",_a),m.config.globalProperties.$router=P,Object.defineProperty(m.config.globalProperties,"$route",{enumerable:!0,get:()=>Se(c)}),xt&&!Ne&&c.value===tt&&(Ne=!0,z(s.location).catch(q=>{}));const T={};for(const q in tt)T[q]=Ee(()=>c.value[q]);m.provide(Sr,P),m.provide(ma,On(T)),m.provide(ls,c);const k=m.unmount;Ie.add(m),m.unmount=function(){Ie.delete(m),Ie.size<1&&(l=tt,we&&we(),we=null,c.value=tt,Ne=!1,se=!1),k()}}};return tn}function Nt(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Rf(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Gt(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Gt(l,c))||s.push(c))}return[n,r,s]}function Sf(){return Je(Sr)}/**
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
 */const va=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Cf=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ba={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,f=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,_=l&63;c||(_=64,o||(p=64)),r.push(n[f],n[h],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(va(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Cf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const p=i<<2|a>>4;if(r.push(p),l!==64){const _=a<<4&240|l>>2;if(r.push(_),h!==64){const S=l<<6&192|h;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Af=function(t){const e=va(t);return ba.encodeByteArray(e,!0)},ya=function(t){return Af(t).replace(/\./g,"")},Of=function(t){try{return ba.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class Pf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function de(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(de())}function Mf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Nf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Df(){const t=de();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xf(){return typeof indexedDB=="object"}function Lf(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Uf="FirebaseError";class ht extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Uf,Object.setPrototypeOf(this,ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kn.prototype.create)}}class kn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Ff(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ht(s,a,r)}}function Ff(t,e){return t.replace(Bf,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Bf=/\{\$([^}]+)}/g;function $f(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ur(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Hi(i)&&Hi(o)){if(!ur(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Hi(t){return t!==null&&typeof t=="object"}/**
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
 */function Mn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ln(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function un(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Hf(t,e){const n=new jf(t,e);return n.subscribe.bind(n)}class jf{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Wf(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Br),s.error===void 0&&(s.error=Br),s.complete===void 0&&(s.complete=Br);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Wf(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Br(){}/**
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
 */function Nn(t){return t&&t._delegate?t._delegate:t}class Yt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const _t="[DEFAULT]";/**
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
 */class Vf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Pf;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Kf(e))try{this.getOrInitializeService({instanceIdentifier:_t})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=_t){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_t){return this.instances.has(e)}getOptions(e=_t){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zf(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_t){return this.component?this.component.multipleInstances?e:_t:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zf(t){return t===_t?void 0:t}function Kf(t){return t.instantiationMode==="EAGER"}/**
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
 */class qf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Vf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const Gf={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},Jf=te.INFO,Yf={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},Xf=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Yf[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ia{constructor(e){this.name=e,this._logLevel=Jf,this._logHandler=Xf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Gf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const Qf=(t,e)=>e.some(n=>t instanceof n);let ji,Wi;function Zf(){return ji||(ji=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ed(){return Wi||(Wi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ea=new WeakMap,us=new WeakMap,wa=new WeakMap,$r=new WeakMap,Us=new WeakMap;function td(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ft(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ea.set(n,t)}).catch(()=>{}),Us.set(e,t),e}function nd(t){if(us.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});us.set(t,e)}let fs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return us.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wa.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ft(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rd(t){fs=t(fs)}function sd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Hr(this),e,...n);return wa.set(r,e.sort?e.sort():[e]),ft(r)}:ed().includes(t)?function(...e){return t.apply(Hr(this),e),ft(Ea.get(this))}:function(...e){return ft(t.apply(Hr(this),e))}}function id(t){return typeof t=="function"?sd(t):(t instanceof IDBTransaction&&nd(t),Qf(t,Zf())?new Proxy(t,fs):t)}function ft(t){if(t instanceof IDBRequest)return td(t);if($r.has(t))return $r.get(t);const e=id(t);return e!==t&&($r.set(t,e),Us.set(e,t)),e}const Hr=t=>Us.get(t);function od(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=ft(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ft(o.result),c.oldVersion,c.newVersion,ft(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const ad=["get","getKey","getAll","getAllKeys","count"],cd=["put","add","delete","clear"],jr=new Map;function Vi(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(jr.get(e))return jr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=cd.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ad.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return jr.set(e,i),i}rd(t=>({...t,get:(e,n,r)=>Vi(e,n)||t.get(e,n,r),has:(e,n)=>!!Vi(e,n)||t.has(e,n)}));/**
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
 */class ld{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ud(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ud(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ds="@firebase/app",zi="0.7.33";/**
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
 */const Tt=new Ia("@firebase/app"),fd="@firebase/app-compat",dd="@firebase/analytics-compat",hd="@firebase/analytics",pd="@firebase/app-check-compat",gd="@firebase/app-check",md="@firebase/auth",_d="@firebase/auth-compat",vd="@firebase/database",bd="@firebase/database-compat",yd="@firebase/functions",Id="@firebase/functions-compat",Ed="@firebase/installations",wd="@firebase/installations-compat",Td="@firebase/messaging",Rd="@firebase/messaging-compat",Sd="@firebase/performance",Cd="@firebase/performance-compat",Ad="@firebase/remote-config",Od="@firebase/remote-config-compat",Pd="@firebase/storage",kd="@firebase/storage-compat",Md="@firebase/firestore",Nd="@firebase/firestore-compat",Dd="firebase",xd="9.10.0";/**
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
 */const Ta="[DEFAULT]",Ld={[ds]:"fire-core",[fd]:"fire-core-compat",[hd]:"fire-analytics",[dd]:"fire-analytics-compat",[gd]:"fire-app-check",[pd]:"fire-app-check-compat",[md]:"fire-auth",[_d]:"fire-auth-compat",[vd]:"fire-rtdb",[bd]:"fire-rtdb-compat",[yd]:"fire-fn",[Id]:"fire-fn-compat",[Ed]:"fire-iid",[wd]:"fire-iid-compat",[Td]:"fire-fcm",[Rd]:"fire-fcm-compat",[Sd]:"fire-perf",[Cd]:"fire-perf-compat",[Ad]:"fire-rc",[Od]:"fire-rc-compat",[Pd]:"fire-gcs",[kd]:"fire-gcs-compat",[Md]:"fire-fst",[Nd]:"fire-fst-compat","fire-js":"fire-js",[Dd]:"fire-js-all"};/**
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
 */const fr=new Map,hs=new Map;function Ud(t,e){try{t.container.addComponent(e)}catch(n){Tt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Tn(t){const e=t.name;if(hs.has(e))return Tt.debug(`There were multiple attempts to register component ${e}.`),!1;hs.set(e,t);for(const n of fr.values())Ud(n,t);return!0}function Ra(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Fd={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Rt=new kn("app","Firebase",Fd);/**
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
 */class Bd{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rt.create("app-deleted",{appName:this._name})}}/**
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
 */const Cr=xd;function $d(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ta,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Rt.create("bad-app-name",{appName:String(r)});const s=fr.get(r);if(s){if(ur(t,s.options)&&ur(n,s.config))return s;throw Rt.create("duplicate-app",{appName:r})}const i=new qf(r);for(const a of hs.values())i.addComponent(a);const o=new Bd(t,n,i);return fr.set(r,o),o}function Hd(t=Ta){const e=fr.get(t);if(!e)throw Rt.create("no-app",{appName:t});return e}function Ht(t,e,n){var r;let s=(r=Ld[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tt.warn(a.join(" "));return}Tn(new Yt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const jd="firebase-heartbeat-database",Wd=1,Rn="firebase-heartbeat-store";let Wr=null;function Sa(){return Wr||(Wr=od(jd,Wd,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Rn)}}}).catch(t=>{throw Rt.create("idb-open",{originalErrorMessage:t.message})})),Wr}async function Vd(t){var e;try{return(await Sa()).transaction(Rn).objectStore(Rn).get(Ca(t))}catch(n){if(n instanceof ht)Tt.warn(n.message);else{const r=Rt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Tt.warn(r.message)}}}async function Ki(t,e){var n;try{const s=(await Sa()).transaction(Rn,"readwrite");return await s.objectStore(Rn).put(e,Ca(t)),s.done}catch(r){if(r instanceof ht)Tt.warn(r.message);else{const s=Rt.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Tt.warn(s.message)}}}function Ca(t){return`${t.name}!${t.options.appId}`}/**
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
 */const zd=1024,Kd=30*24*60*60*1e3;class qd{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Jd(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=qi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Kd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=qi(),{heartbeatsToSend:n,unsentEntries:r}=Gd(this._heartbeatsCache.heartbeats),s=ya(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function qi(){return new Date().toISOString().substring(0,10)}function Gd(t,e=zd){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Gi(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Gi(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Jd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xf()?Lf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Vd(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ki(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ki(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Gi(t){return ya(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Yd(t){Tn(new Yt("platform-logger",e=>new ld(e),"PRIVATE")),Tn(new Yt("heartbeat",e=>new qd(e),"PRIVATE")),Ht(ds,zi,t),Ht(ds,zi,"esm2017"),Ht("fire-js","")}Yd("");function Fs(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Aa(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Xd=Aa,Oa=new kn("auth","Firebase",Aa());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji=new Ia("@firebase/auth");function er(t,...e){Ji.logLevel<=te.ERROR&&Ji.error(`Auth (${Cr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(t,...e){throw Bs(t,...e)}function He(t,...e){return Bs(t,...e)}function Qd(t,e,n){const r=Object.assign(Object.assign({},Xd()),{[e]:n});return new kn("auth","Firebase",r).create(e,{appName:t.name})}function Bs(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Oa.create(t,...e)}function D(t,e,...n){if(!t)throw Bs(e,...n)}function qe(t){const e="INTERNAL ASSERTION FAILED: "+t;throw er(e),new Error(e)}function Xe(t,e){t||qe(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi=new Map;function Ge(t){Xe(t instanceof Function,"Expected a class definition");let e=Yi.get(t);return e?(Xe(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Yi.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(t,e){const n=Ra(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ur(i,e!=null?e:{}))return s;ke(s,"already-initialized")}return n.initialize({options:e})}function eh(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ge);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function th(){return Xi()==="http:"||Xi()==="https:"}function Xi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(th()||Mf()||"connection"in navigator)?navigator.onLine:!0}function rh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xe(n>e,"Short delay should be less than long delay!"),this.isMobile=kf()||Nf()}get(){return nh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(t,e){Xe(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;qe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;qe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;qe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih=new Dn(3e4,6e4);function xn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ln(t,e,n,r,s={}){return ka(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Mn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Pa.fetch()(Ma(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function ka(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},sh),e);try{const s=new oh(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw zn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw zn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw zn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw zn(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Qd(t,f,l);ke(t,f)}}catch(s){if(s instanceof ht)throw s;ke(t,"network-request-failed")}}async function Un(t,e,n,r,s={}){const i=await Ln(t,e,n,r,s);return"mfaPendingCredential"in i&&ke(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Ma(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?$s(t.config,s):`${t.config.apiScheme}://${s}`}class oh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(He(this.auth,"network-request-failed")),ih.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function zn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=He(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ah(t,e){return Ln(t,"POST","/v1/accounts:delete",e)}async function ch(t,e){return Ln(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lh(t,e=!1){const n=Nn(t),r=await n.getIdToken(e),s=Hs(r);D(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:gn(Vr(s.auth_time)),issuedAtTime:gn(Vr(s.iat)),expirationTime:gn(Vr(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Vr(t){return Number(t)*1e3}function Hs(t){var e;const[n,r,s]=t.split(".");if(n===void 0||r===void 0||s===void 0)return er("JWT malformed, contained fewer than 3 sections"),null;try{const i=Of(r);return i?JSON.parse(i):(er("Failed to decode base64 JWT payload"),null)}catch(i){return er("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function uh(t){const e=Hs(t);return D(e,"internal-error"),D(typeof e.exp<"u","internal-error"),D(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ht&&fh(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function fh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=gn(this.lastLoginAt),this.creationTime=gn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function dr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Sn(t,ch(n,{idToken:r}));D(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?gh(i.providerUserInfo):[],a=ph(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),f=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Na(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function hh(t){const e=Nn(t);await dr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ph(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function gh(t){return t.map(e=>{var{providerId:n}=e,r=Fs(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mh(t,e){const n=await ka(t,{},async()=>{const r=Mn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Ma(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Pa.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken<"u","internal-error"),D(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return D(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await mh(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Cn;return r&&(D(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(D(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(D(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cn,this.toJSON())}_performRefresh(){return qe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t,e){D(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class wt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Fs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Na(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Sn(this,this.stsTokenManager.getToken(this.auth,e));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lh(this,e)}reload(){return hh(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new wt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await dr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Sn(this,ah(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,U=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=n.createdAt)!==null&&l!==void 0?l:void 0,x=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:j,emailVerified:z,isAnonymous:ie,providerData:oe,stsTokenManager:ye}=n;D(j&&ye,e,"internal-error");const Ze=Cn.fromJSON(this.name,ye);D(typeof j=="string",e,"internal-error"),nt(h,e.name),nt(p,e.name),D(typeof z=="boolean",e,"internal-error"),D(typeof ie=="boolean",e,"internal-error"),nt(_,e.name),nt(S,e.name),nt(U,e.name),nt(A,e.name),nt(C,e.name),nt(x,e.name);const ge=new wt({uid:j,auth:e,email:p,emailVerified:z,displayName:h,isAnonymous:ie,photoURL:S,phoneNumber:_,tenantId:U,stsTokenManager:Ze,createdAt:C,lastLoginAt:x});return oe&&Array.isArray(oe)&&(ge.providerData=oe.map(Me=>Object.assign({},Me))),A&&(ge._redirectEventId=A),ge}static async _fromIdTokenResponse(e,n,r=!1){const s=new Cn;s.updateFromServerResponse(n);const i=new wt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await dr(i),i}}/**
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
 */class Da{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Da.type="NONE";const Qi=Da;/**
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
 */function tr(t,e,n){return`firebase:${t}:${e}:${n}`}class jt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=tr(this.userKey,s.apiKey,i),this.fullPersistenceKey=tr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?wt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new jt(Ge(Qi),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Ge(Qi);const o=tr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const f=await l._get(o);if(f){const h=wt._fromJSON(e,f);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new jt(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new jt(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ua(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xa(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ba(e))return"Blackberry";if($a(e))return"Webos";if(js(e))return"Safari";if((e.includes("chrome/")||La(e))&&!e.includes("edge/"))return"Chrome";if(Fa(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function xa(t=de()){return/firefox\//i.test(t)}function js(t=de()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function La(t=de()){return/crios\//i.test(t)}function Ua(t=de()){return/iemobile/i.test(t)}function Fa(t=de()){return/android/i.test(t)}function Ba(t=de()){return/blackberry/i.test(t)}function $a(t=de()){return/webos/i.test(t)}function Ar(t=de()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function _h(t=de()){var e;return Ar(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vh(){return Df()&&document.documentMode===10}function Ha(t=de()){return Ar(t)||Fa(t)||$a(t)||Ba(t)||/windows phone/i.test(t)||Ua(t)}function bh(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(t,e=[]){let n;switch(t){case"Browser":n=Zi(de());break;case"Worker":n=`${Zi(de())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Cr}/${r}`}/**
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
 */class yh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eo(this),this.idTokenSubscription=new eo(this),this.beforeStateQueue=new yh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Oa,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ge(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await jt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await dr(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Nn(e):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ge(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new kn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ge(e)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await jt.create(this,[Ge(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return D(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ja(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Or(t){return Nn(t)}class eo{constructor(e){this.auth=e,this.observer=null,this.addObserver=Hf(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qe("not implemented")}_getIdTokenResponse(e){return qe("not implemented")}_linkToIdToken(e,n){return qe("not implemented")}_getReauthenticationResolver(e){return qe("not implemented")}}async function Eh(t,e){return Ln(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wh(t,e){return Un(t,"POST","/v1/accounts:signInWithPassword",xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Th(t,e){return Un(t,"POST","/v1/accounts:signInWithEmailLink",xn(t,e))}async function Rh(t,e){return Un(t,"POST","/v1/accounts:signInWithEmailLink",xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends Ws{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new An(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new An(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return wh(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Th(e,{email:this._email,oobCode:this._password});default:ke(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Eh(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Rh(e,{idToken:n,email:this._email,oobCode:this._password});default:ke(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wt(t,e){return Un(t,"POST","/v1/accounts:signInWithIdp",xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh="http://localhost";class St extends Ws{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new St(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ke("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Fs(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new St(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Wt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Wt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Wt(e,n)}buildRequest(){const e={requestUri:Sh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Mn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ah(t){const e=ln(un(t)).link,n=e?ln(un(e)).deep_link_id:null,r=ln(un(t)).deep_link_id;return(r?ln(un(r)).link:null)||r||n||e||t}class Vs{constructor(e){var n,r,s,i,o,a;const c=ln(un(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,h=Ch((s=c.mode)!==null&&s!==void 0?s:null);D(l&&f&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Ah(e);try{return new Vs(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(){this.providerId=en.PROVIDER_ID}static credential(e,n){return An._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Vs.parseLink(n);return D(r,"argument-error"),An._fromEmailAndCode(e,r.code,r.tenantId)}}en.PROVIDER_ID="password";en.EMAIL_PASSWORD_SIGN_IN_METHOD="password";en.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fn extends Wa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends Fn{constructor(){super("facebook.com")}static credential(e){return St._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return it.credential(e.oauthAccessToken)}catch{return null}}}it.FACEBOOK_SIGN_IN_METHOD="facebook.com";it.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends Fn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return St._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ot.credential(n,r)}catch{return null}}}ot.GOOGLE_SIGN_IN_METHOD="google.com";ot.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends Fn{constructor(){super("github.com")}static credential(e){return St._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return at.credential(e.oauthAccessToken)}catch{return null}}}at.GITHUB_SIGN_IN_METHOD="github.com";at.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends Fn{constructor(){super("twitter.com")}static credential(e,n){return St._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ct.credential(n,r)}catch{return null}}}ct.TWITTER_SIGN_IN_METHOD="twitter.com";ct.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oh(t,e){return Un(t,"POST","/v1/accounts:signUp",xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await wt._fromIdTokenResponse(e,r,s),o=to(r);return new Ct({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=to(r);return new Ct({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function to(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends ht{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,hr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new hr(e,n,r,s)}}function Va(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?hr._fromErrorAndOperation(t,i,e,r):i})}async function Ph(t,e,n=!1){const r=await Sn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ct._forOperation(t,"link",r)}/**
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
 */async function kh(t,e,n=!1){var r;const{auth:s}=t,i="reauthenticate";try{const o=await Sn(t,Va(s,i,e,t),n);D(o.idToken,s,"internal-error");const a=Hs(o.idToken);D(a,s,"internal-error");const{sub:c}=a;return D(t.uid===c,s,"user-mismatch"),Ct._forOperation(t,i,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&ke(s,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function za(t,e,n=!1){const r="signIn",s=await Va(t,r,e),i=await Ct._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Mh(t,e){return za(Or(t),e)}async function fg(t,e,n){const r=Or(t),s=await Oh(r,{returnSecureToken:!0,email:e,password:n}),i=await Ct._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function dg(t,e,n){return Mh(Nn(t),en.credential(e,n))}const pr="__sak";/**
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
 */class Ka{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(pr,"1"),this.storage.removeItem(pr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(){const t=de();return js(t)||Ar(t)}const Dh=1e3,xh=10;class qa extends Ka{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Nh()&&bh(),this.fallbackToPolling=Ha(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);vh()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,xh):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Dh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qa.type="LOCAL";const Lh=qa;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga extends Ka{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ga.type="SESSION";const Ja=Ga;/**
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
 */function Uh(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Pr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Pr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Uh(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Fh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=zs("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return window}function Bh(t){je().location.href=t}/**
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
 */function Ya(){return typeof je().WorkerGlobalScope<"u"&&typeof je().importScripts=="function"}async function $h(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Hh(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function jh(){return Ya()?self:null}/**
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
 */const Xa="firebaseLocalStorageDb",Wh=1,gr="firebaseLocalStorage",Qa="fbase_key";class Bn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kr(t,e){return t.transaction([gr],e?"readwrite":"readonly").objectStore(gr)}function Vh(){const t=indexedDB.deleteDatabase(Xa);return new Bn(t).toPromise()}function gs(){const t=indexedDB.open(Xa,Wh);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(gr,{keyPath:Qa})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(gr)?e(r):(r.close(),await Vh(),e(await gs()))})})}async function no(t,e,n){const r=kr(t,!0).put({[Qa]:e,value:n});return new Bn(r).toPromise()}async function zh(t,e){const n=kr(t,!1).get(e),r=await new Bn(n).toPromise();return r===void 0?null:r.value}function ro(t,e){const n=kr(t,!0).delete(e);return new Bn(n).toPromise()}const Kh=800,qh=3;class Za{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gs(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>qh)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ya()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pr._getInstance(jh()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $h(),!this.activeServiceWorker)return;this.sender=new Fh(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Hh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gs();return await no(e,pr,"1"),await ro(e,pr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>no(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>zh(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ro(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=kr(s,!1).getAll();return new Bn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Kh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Za.type="LOCAL";const Gh=Za;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Yh(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=He("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Jh().appendChild(r)})}function Xh(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Dn(3e4,6e4);/**
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
 */function Qh(t,e){return e?Ge(e):(D(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ks extends Ws{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Wt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Wt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Zh(t){return za(t.auth,new Ks(t),t.bypassAuthState)}function ep(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),kh(n,new Ks(t),t.bypassAuthState)}async function tp(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),Ph(n,new Ks(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Zh;case"linkViaPopup":case"linkViaRedirect":return tp;case"reauthViaPopup":case"reauthViaRedirect":return ep;default:ke(this.auth,"internal-error")}}resolve(e){Xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np=new Dn(2e3,1e4);class Ut extends ec{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ut.currentPopupAction&&Ut.currentPopupAction.cancel(),Ut.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){Xe(this.filter.length===1,"Popup operations only handle one event");const e=zs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(He(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(He(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ut.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(He(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,np.get())};e()}}Ut.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp="pendingRedirect",nr=new Map;class sp extends ec{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=nr.get(this.auth._key());if(!e){try{const r=await ip(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}nr.set(this.auth._key(),e)}return this.bypassAuthState||nr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ip(t,e){const n=cp(e),r=ap(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function op(t,e){nr.set(t._key(),e)}function ap(t){return Ge(t._redirectPersistence)}function cp(t){return tr(rp,t.config.apiKey,t.name)}async function lp(t,e,n=!1){const r=Or(t),s=Qh(r,e),o=await new sp(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up=10*60*1e3;class fp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dp(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!tc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(He(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=up&&this.cachedEventUids.clear(),this.cachedEventUids.has(so(e))}saveEventToCache(e){this.cachedEventUids.add(so(e)),this.lastProcessedEventTime=Date.now()}}function so(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function tc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function dp(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hp(t,e={}){return Ln(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gp=/^https?/;async function mp(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hp(t);for(const n of e)try{if(_p(n))return}catch{}ke(t,"unauthorized-domain")}function _p(t){const e=ps(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!gp.test(n))return!1;if(pp.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const vp=new Dn(3e4,6e4);function io(){const t=je().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function bp(t){return new Promise((e,n)=>{var r,s,i;function o(){io(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{io(),n(He(t,"network-request-failed"))},timeout:vp.get()})}if(!((s=(r=je().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=je().gapi)===null||i===void 0)&&i.load)o();else{const a=Xh("iframefcb");return je()[a]=()=>{gapi.load?o():n(He(t,"network-request-failed"))},Yh(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw rr=null,e})}let rr=null;function yp(t){return rr=rr||bp(t),rr}/**
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
 */const Ip=new Dn(5e3,15e3),Ep="__/auth/iframe",wp="emulator/auth/iframe",Tp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Rp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Sp(t){const e=t.config;D(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$s(e,wp):`https://${t.config.authDomain}/${Ep}`,r={apiKey:e.apiKey,appName:t.name,v:Cr},s=Rp.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Mn(r).slice(1)}`}async function Cp(t){const e=await yp(t),n=je().gapi;return D(n,t,"internal-error"),e.open({where:document.body,url:Sp(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Tp,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=He(t,"network-request-failed"),a=je().setTimeout(()=>{i(o)},Ip.get());function c(){je().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Ap={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Op=500,Pp=600,kp="_blank",Mp="http://localhost";class oo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Np(t,e,n,r=Op,s=Pp){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Ap),{width:r.toString(),height:s.toString(),top:i,left:o}),l=de().toLowerCase();n&&(a=La(l)?kp:n),xa(l)&&(e=e||Mp,c.scrollbars="yes");const f=Object.entries(c).reduce((p,[_,S])=>`${p}${_}=${S},`,"");if(_h(l)&&a!=="_self")return Dp(e||"",a),new oo(null);const h=window.open(e||"",a,f);D(h,t,"popup-blocked");try{h.focus()}catch{}return new oo(h)}function Dp(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const xp="__/auth/handler",Lp="emulator/auth/handler";function ao(t,e,n,r,s,i){D(t.config.authDomain,t,"auth-domain-config-required"),D(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Cr,eventId:s};if(e instanceof Wa){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",$f(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Fn){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Up(t)}?${Mn(a).slice(1)}`}function Up({config:t}){return t.emulator?$s(t,Lp):`https://${t.authDomain}/${xp}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="webStorageSupport";class Fp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ja,this._completeRedirectFn=lp,this._overrideRedirectResult=op}async _openPopup(e,n,r,s){var i;Xe((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=ao(e,n,r,ps(),s);return Np(e,o,zs())}async _openRedirect(e,n,r,s){return await this._originValidation(e),Bh(ao(e,n,r,ps(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Xe(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Cp(e),r=new fp(e);return n.register("authEvent",s=>(D(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zr,{type:zr},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[zr];o!==void 0&&n(!!o),ke(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mp(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ha()||js()||Ar()}}const Bp=Fp;var co="@firebase/auth",lo="0.20.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function jp(t){Tn(new Yt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{D(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),D(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ja(t)},f=new Ih(a,c,l);return eh(f,n),f})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Tn(new Yt("auth-internal",e=>{const n=Or(e.getProvider("auth").getImmediate());return(r=>new $p(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ht(co,lo,Hp(t)),Ht(co,lo,"esm2017")}/**
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
 */function Wp(t=Hd()){const e=Ra(t,"auth");return e.isInitialized()?e.getImmediate():Zd(t,{popupRedirectResolver:Bp,persistence:[Gh,Lh,Ja]})}jp("Browser");const nc=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Vp={class:"wrapper"},zp=Pn("Home"),Kp=Pn("About"),qp={key:0},Gp={key:1},Jp=Pn("Login"),Yp=Pn("Register"),Xp={__name:"App",setup(t){const e=Sf(),n=Po(!1),r=Wp();r.onAuthStateChanged(i=>{i?n.value=!0:n.value=!1});function s(){r.signOut(),e.push("/")}return(i,o)=>(Xn(),Qn(Ue,null,[Lt("header",null,[Lt("div",Vp,[Lt("nav",null,[ae(Se(cn),{to:"/"},{default:an(()=>[zp]),_:1}),ae(Se(cn),{to:"/about"},{default:an(()=>[Kp]),_:1}),n.value?(Xn(),Qn("span",qp,[Lt("button",{onClick:s},"Logout")])):(Xn(),Qn("span",Gp,[ae(Se(cn),{to:"/sign-in"},{default:an(()=>[Jp]),_:1}),ae(Se(cn),{to:"/register"},{default:an(()=>[Yp]),_:1})]))])])]),ae(Se(_a))],64))}},Qp=nc(Xp,[["__scopeId","data-v-d7ab07c2"]]),Zp="modulepreload",eg=function(t){return"/"+t},uo={},Kr=function(e,n,r){return!n||n.length===0?e():Promise.all(n.map(s=>{if(s=eg(s),s in uo)return;uo[s]=!0;const i=s.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":Zp,i||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),i)return new Promise((c,l)=>{a.addEventListener("load",c),a.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},tg={};function ng(t,e){return null}const rg=nc(tg,[["render",ng]]),sg={__name:"HomeView",setup(t){return(e,n)=>(Xn(),Qn("main",null,[ae(rg)]))}},ig=Tf({history:Hu("/"),routes:[{path:"/",name:"home",component:sg},{path:"/about",name:"about",component:()=>Kr(()=>import("./AboutView.271e1215.js"),["assets/AboutView.271e1215.js","assets/AboutView.e3b0c442.css"])},{path:"/sign-in",name:"sign-in",component:()=>Kr(()=>import("./SignInView.894a8497.js"),[])},{path:"/register",name:"register",component:()=>Kr(()=>import("./RegisterView.14c61397.js"),[])}]});var og="firebase",ag="9.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ht(og,ag,"app");const cg={apiKey:"AIzaSyAEkx5h_H_jYYiA5zv-SaziecBXeDwxPJ4",authDomain:"bookclub-58f19.firebaseapp.com",projectId:"bookclub-58f19",storageBucket:"bookclub-58f19.appspot.com",messagingSenderId:"1068291885693",appId:"1:1068291885693:web:8961261fdcabbaab2d7f14",measurementId:"G-ZHW6J2Q0PG"};$d(cg);const rc=Eu(Qp);rc.use(ig);rc.mount("#app");export{Ue as F,nc as _,Lt as a,fg as b,Qn as c,Wp as g,Xn as o,Po as r,dg as s,Sf as u,ug as v,lg as w};
