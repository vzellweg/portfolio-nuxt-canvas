import{d as k,V as v,J as C,a8 as y,b as d,c as u,g as c,w as _,F as L,a1 as S,e as t,n as F,G as m,t as s,aK as I,r as T,X as z,m as B,$ as N,p as V,i as E,l as K}from"./D6B-QCHv.js";import{a as U,_ as A}from"./BxGTA-rC.js";import{_ as D}from"./CW_LuDWt.js";import{u as G}from"./BqM5IiDV.js";import{d as H,c as h}from"./DlJVeQT6.js";import{F as w}from"./BB0N4noo.js";import"./D_jHehrB.js";import"./CtydIJf3.js";import"./-8R_g2p9.js";import"./B45Q0slv.js";import"./BOgCj9B-.js";import"./hzpOWrdD.js";const J={class:"z-99 flex items-center gap-3 rounded-lg border border-white/10 bg-zinc-900/90 px-3 py-1 backdrop-blur-xl"},O=["onClick"],R=t("div",{class:"h-2 w-5"},null,-1),X=k({__name:"LanguageToggle",setup(i){const{locale:e,setLocaleCookie:r}=v(),l=[{code:"en",name:"English"},{code:"fr",name:"Français"}],p=C(()=>l.find(o=>o.code===e.value));return y(e,o=>{r(o)}),(o,n)=>{const f=U;return d(),u("div",J,[c(f,null,{fallback:_(()=>[R]),default:_(()=>[(d(),u(L,null,S(l,a=>t("div",{key:a,class:"cursor-pointer select-none",onClick:x=>o.$i18n.locale=a.code},[t("span",{class:F(["font-semibold",a.code===m(p).code?"text-white":"text-gray-500"])},s(a.code),3)],8,O)),64))]),_:1})])}}}),g=i=>(V("data-v-f5452034"),i=i(),E(),i),j=g(()=>t("span",{class:"i-lucide-arrow-left size-4"},null,-1)),q={class:"text-sm font-light"},M={class:"writing prose mx-auto px-4 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl"},P={class:"info-section mt-1 flex flex-col gap-2 sm:flex-row sm:gap-4"},Q=g(()=>t("p",{class:"hidden sm:block"}," | ",-1)),W=g(()=>t("p",{class:"hidden sm:block"}," | ",-1)),Y=k({__name:"article",setup(i){const{page:e}=I(),{t:r}=v();G(e);const l=B(),p=T(`${l.public.siteUrl}${e.value._path}`);function o(){h(p.value),w.success(r("global.article_link_copied"))}return H({meta_k:{usingInput:!0,handler:()=>{h(p.value),w.success(r("global.article_link_copied"))}}}),(n,f)=>{const a=N,x=X,b=A,$=D;return d(),u("div",null,[t("div",null,[c(a,{to:"/writing",class:"mx-auto my-8 flex cursor-pointer items-center gap-2 px-4 text-muted transition-colors duration-200 hover:text-main sm:max-w-2xl md:max-w-3xl lg:max-w-4xl"},{default:_(()=>[j,t("span",q,s(n.$t("navigation.writing")),1)]),_:1}),c(x,{class:"fixed bottom-4 right-4 sm:bottom-4"}),t("article",M,[t("h1",null,s(m(e).title),1),t("div",P,[t("p",null,s(m(e).date),1),Q,t("p",null,s(m(e).readingTime)+" "+s(n.$t("writing.readingTime")),1),W,c(b,{text:n.$t("writing.copy_link"),shortcuts:["⌘","K"]},{default:_(()=>[t("p",{class:"flex cursor-pointer items-center gap-1 transition-colors duration-200 hover:text-main",onClick:o},s(n.$t("writing.share")),1)]),_:1},8,["text"])]),z(n.$slots,"default",{},void 0,!0)]),c($,{class:"pt-6"})])])}}}),mt=K(Y,[["__scopeId","data-v-f5452034"]]);export{mt as default};