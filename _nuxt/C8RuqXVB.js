import{n as g,i as M,t as h,a as b,b as R}from"./CvKM-CuI.js";import{a8 as y,r as A,J as E,o as _,ak as z}from"./CDc-FNtf.js";function p(e){var n;const t=h(e);return(n=t==null?void 0:t.$el)!=null?n:t}const m=R?window:void 0;function w(...e){let n,t,o,a;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,o,a]=e,n=m):[n,t,o,a]=e,!n)return g;Array.isArray(t)||(t=[t]),Array.isArray(o)||(o=[o]);const r=[],c=()=>{r.forEach(i=>i()),r.length=0},l=(i,u,f,v)=>(i.addEventListener(u,f,v),()=>i.removeEventListener(u,f,v)),d=y(()=>[p(n),h(a)],([i,u])=>{if(c(),!i)return;const f=M(u)?{...u}:u;r.push(...t.flatMap(v=>o.map(O=>l(i,v,O,f))))},{immediate:!0,flush:"post"}),s=()=>{d(),c()};return b(s),s}function D(e={}){var n;const{window:t=m,deep:o=!0}=e,a=(n=e.document)!=null?n:t==null?void 0:t.document,r=()=>{var d;let s=a==null?void 0:a.activeElement;if(o)for(;s!=null&&s.shadowRoot;)s=(d=s==null?void 0:s.shadowRoot)==null?void 0:d.activeElement;return s},c=A(),l=()=>{c.value=r()};return t&&(w(t,"blur",d=>{d.relatedTarget===null&&l()},!0),w(t,"focus",l,!0)),l(),c}function C(){const e=A(!1),n=z();return n&&_(()=>{e.value=!0},n),e}function L(e){const n=C();return E(()=>(n.value,!!e()))}function j(e,n,t={}){const{window:o=m,...a}=t;let r;const c=L(()=>o&&"ResizeObserver"in o),l=()=>{r&&(r.disconnect(),r=void 0)},d=E(()=>Array.isArray(e)?e.map(u=>p(u)):[p(e)]),s=y(d,u=>{if(l(),c.value&&o){r=new ResizeObserver(n);for(const f of u)f&&r.observe(f,a)}},{immediate:!0,flush:"post"}),i=()=>{l(),s()};return b(i),{isSupported:c,stop:i}}export{D as a,w as b,p as c,j as u};