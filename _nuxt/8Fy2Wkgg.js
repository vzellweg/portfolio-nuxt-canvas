import"./BkI4cO--.js";import{_ as ue}from"./BFxxNM2s.js";import{u as de,a as ce,_ as fe}from"./MvAAtVs1.js";import{u as ge,_ as me}from"./iRXIqg59.js";import{u as X,t as be}from"./DV0Eimfn.js";import{l as J,a2 as Z,a3 as U,d as G,a4 as R,H as pe,J as m,r as V,R as ve,b as n,c as v,e as d,n as h,X as k,a5 as N,O as z,F as L,j as P,t as x,f as T,a6 as K,a7 as ye,o as _,a8 as he,Q as ke,a9 as te,aa as H,ab as $e,W as D,w as C,Z as we,P as Se,ac as Ce,$ as le,y as ze,V as Be,g,ad as Ie,G as j,ae as M}from"./C2UVrCmB.js";import{_ as re}from"./Cwtg202a.js";import{_ as je}from"./DNDNM5ry.js";import{F as ee}from"./B0Q1zcYY.js";import{r as ae}from"./D7IEJsQc.js";import"./Dnd51l0P.js";import"./APiR_8JS.js";import"./1rgnrZAp.js";import"./-du98d8E.js";import"./BQkc-AXV.js";import"./9ftdkNMz.js";const Y={to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1}},qe=e=>Object.keys(Y).reduce((a,i)=>(e[i]!==void 0&&(a[i]=e[i]),a),{}),Ve={base:"focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0",font:"font-medium",rounded:"rounded-md",truncate:"text-left break-all line-clamp-1",block:"w-full flex justify-center items-center",inline:"inline-flex items-center",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},square:{"2xs":"p-1",xs:"p-1.5",sm:"p-1.5",md:"p-2",lg:"p-2.5",xl:"p-2.5"},color:{white:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},gray:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},black:{solid:"shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"}},variant:{solid:"shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",outline:"ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",soft:"text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",ghost:"text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",link:"text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"},icon:{base:"flex-shrink-0",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"}},default:{size:"sm",variant:"solid",color:"primary",loadingIcon:"i-heroicons-arrow-path-20-solid"}},xe={wrapper:"",inner:"",label:{wrapper:"flex content-center items-center justify-between",base:"block font-medium text-gray-700 dark:text-gray-200",required:"after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400"},size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},container:"mt-1 relative",description:"text-gray-500 dark:text-gray-400",hint:"text-gray-500 dark:text-gray-400",help:"mt-2 text-gray-500 dark:text-gray-400",error:"mt-2 text-red-500 dark:text-red-400",default:{size:"sm"}},W=Z(U.ui.strategy,U.ui.formGroup,xe),Oe=G({inheritAttrs:!1,props:{name:{type:String,default:null},size:{type:String,default:null,validator(e){return Object.keys(W.size).includes(e)}},label:{type:String,default:null},description:{type:String,default:null},required:{type:Boolean,default:!1},help:{type:String,default:null},error:{type:[String,Boolean],default:null},hint:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},eagerValidation:{type:Boolean,default:!1}},setup(e){const{ui:t,attrs:a}=X("formGroup",R(e,"ui"),W,R(e,"class")),i=pe("form-errors",null),o=m(()=>{var f,b;return e.error&&typeof e.error=="string"||typeof e.error=="boolean"?e.error:(b=(f=i==null?void 0:i.value)==null?void 0:f.find(I=>I.path===e.name))==null?void 0:b.message}),c=m(()=>t.value.size[e.size??W.default.size]),l=V(ge("$K7dDJpdOWE"));return ve("form-group",{error:o,inputId:l,name:m(()=>e.name),size:m(()=>e.size),eagerValidation:m(()=>e.eagerValidation)}),{ui:t,attrs:a,inputId:l,size:c,error:o}}}),Ne=["for"];function Ue(e,t,a,i,o,c){return n(),v("div",z({class:e.ui.wrapper},e.attrs),[d("div",{class:h(e.ui.inner)},[e.label||e.$slots.label?(n(),v("div",{key:0,class:h([e.ui.label.wrapper,e.size])},[d("label",{for:e.inputId,class:h([e.ui.label.base,e.required?e.ui.label.required:""])},[e.$slots.label?k(e.$slots,"label",N(z({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(n(),v(L,{key:1},[P(x(e.label),1)],64))],10,Ne),e.hint||e.$slots.hint?(n(),v("span",{key:0,class:h([e.ui.hint])},[e.$slots.hint?k(e.$slots,"hint",N(z({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(n(),v(L,{key:1},[P(x(e.hint),1)],64))],2)):T("",!0)],2)):T("",!0),e.description||e.$slots.description?(n(),v("p",{key:1,class:h([e.ui.description,e.size])},[e.$slots.description?k(e.$slots,"description",N(z({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(n(),v(L,{key:1},[P(x(e.description),1)],64))],2)):T("",!0)],2),d("div",{class:h([e.label?e.ui.container:""])},[k(e.$slots,"default",N(K({error:e.error}))),typeof e.error=="string"&&e.error||e.$slots.error?(n(),v("p",{key:0,class:h([e.ui.error,e.size])},[e.$slots.error?k(e.$slots,"error",N(z({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(n(),v(L,{key:1},[P(x(e.error),1)],64))],2)):e.help||e.$slots.help?(n(),v("p",{key:1,class:h([e.ui.help,e.size])},[e.$slots.help?k(e.$slots,"help",N(z({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(n(),v(L,{key:1},[P(x(e.help),1)],64))],2)):T("",!0)],2)],16)}const Pe=J(Oe,[["render",Ue]]),O=Z(U.ui.strategy,U.ui.textarea,be),Te=G({inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},rows:{type:Number,default:3},maxrows:{type:Number,default:0},autoresize:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},resize:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(O.size).includes(e)}},color:{type:String,default:()=>O.default.color,validator(e){return[...U.ui.colors,...Object.keys(O.color)].includes(e)}},variant:{type:String,default:()=>O.default.variant,validator(e){return[...Object.keys(O.variant),...Object.values(O.color).flatMap(t=>Object.keys(t))].includes(e)}},textareaClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur","change"],setup(e,{emit:t}){const{ui:a,attrs:i}=X("textarea",R(e,"ui"),O,R(e,"class")),{emitFormBlur:o,emitFormInput:c,inputId:l,color:f,size:b,name:I}=de(e,O),$=V(ye({},e.modelModifiers,{trim:!1,lazy:!1,number:!1})),s=V(null),u=()=>{var r;e.autofocus&&((r=s.value)==null||r.focus())},w=()=>{if(e.autoresize){if(!s.value)return;s.value.rows=e.rows;const r=window.getComputedStyle(s.value),B=parseInt(r.paddingTop),p=parseInt(r.paddingBottom),oe=B+p,ne=parseInt(r.lineHeight),{scrollHeight:se}=s.value,Q=(se-oe)/ne;Q>e.rows&&(s.value.rows=e.maxrows?Math.min(Q,e.maxrows):Q)}},S=r=>{$.value.trim&&(r=r.trim()),$.value.number&&(r=$e(r)),t("update:modelValue",r),c()},y=r=>{w(),$.value.lazy||S(r.target.value)},A=r=>{const B=r.target.value;t("change",B),$.value.lazy&&S(B),$.value.trim&&(r.target.value=B.trim())},F=r=>{t("blur",r),o()};_(()=>{setTimeout(()=>{u()},e.autofocusDelay)}),he(()=>e.modelValue,()=>{ke(w)}),_(()=>{setTimeout(()=>{u(),w()},100)});const E=m(()=>{var B,p;const r=((p=(B=a.value.color)==null?void 0:B[f.value])==null?void 0:p[e.variant])||a.value.variant[e.variant];return te(H(a.value.base,a.value.form,a.value.rounded,a.value.placeholder,a.value.size[b.value],e.padded?a.value.padding[b.value]:"p-0",r==null?void 0:r.replaceAll("{color}",f.value),!e.resize&&"resize-none"),e.textareaClass)});return{ui:a,attrs:i,name:I,inputId:l,textarea:s,textareaClass:E,onInput:y,onChange:A,onBlur:F}}}),Ae=["id","value","name","rows","required","disabled","placeholder"];function Fe(e,t,a,i,o,c){return n(),v("div",{class:h(e.ui.wrapper)},[d("textarea",z({id:e.inputId,ref:"textarea",value:e.modelValue,name:e.name,rows:e.rows,required:e.required,disabled:e.disabled,placeholder:e.placeholder,class:e.textareaClass},e.attrs,{onInput:t[0]||(t[0]=(...l)=>e.onInput&&e.onInput(...l)),onBlur:t[1]||(t[1]=(...l)=>e.onBlur&&e.onBlur(...l)),onChange:t[2]||(t[2]=(...l)=>e.onChange&&e.onChange(...l))}),null,16,Ae),k(e.$slots,"default")],2)}const Le=J(Te,[["render",Fe]]),Me=G({inheritAttrs:!1,props:{...Y,as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function t(a,i,{isActive:o,isExactActive:c}){return e.exactQuery&&!Ce(a.query,i.query)||e.exactHash&&a.hash!==i.hash?e.inactiveClass:e.exact&&c||!e.exact&&o?e.activeClass:e.inactiveClass}return{resolveLinkClass:t}}}),De=["href","aria-disabled","role","rel","target","onClick"];function Re(e,t,a,i,o,c){const l=le;return e.to?(n(),D(l,z({key:1},e.$props,{custom:""}),{default:C(({route:f,href:b,target:I,rel:$,navigate:s,isActive:u,isExactActive:w,isExternal:S})=>[d("a",z(e.$attrs,{href:e.disabled?void 0:b,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:$,target:I,class:e.active!==void 0?e.active?e.activeClass:e.inactiveClass:e.resolveLinkClass(f,e._.provides[Se]||e.$route,{isActive:u,isExactActive:w}),onClick:y=>!S&&!e.disabled&&s(y)}),[k(e.$slots,"default",N(K({isActive:e.active!==void 0?e.active:e.exact?w:u})))],16,De)]),_:3},16)):(n(),D(we(e.as),z({key:0,type:e.type,disabled:e.disabled},e.$attrs,{class:e.active?e.activeClass:e.inactiveClass}),{default:C(()=>[k(e.$slots,"default",N(K({isActive:e.active})))]),_:3},16,["type","disabled","class"]))}const ie=J(Me,[["render",Re]]),q=Z(U.ui.strategy,U.ui.button,Ve),Ge=G({components:{UIcon:re,ULink:ie},inheritAttrs:!1,props:{...Y,type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>q.default.size,validator(e){return Object.keys(q.size).includes(e)}},color:{type:String,default:()=>q.default.color,validator(e){return[...U.ui.colors,...Object.keys(q.color)].includes(e)}},variant:{type:String,default:()=>q.default.variant,validator(e){return[...Object.keys(q.variant),...Object.values(q.color).flatMap(t=>Object.keys(t))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>q.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:t}){const{ui:a,attrs:i}=X("button",R(e,"ui"),q),{size:o,rounded:c}=ce({ui:a,props:e}),l=m(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),f=m(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),b=m(()=>e.square||!t.default&&!e.label),I=m(()=>{var A,F;const y=((F=(A=a.value.color)==null?void 0:A[e.color])==null?void 0:F[e.variant])||a.value.variant[e.variant];return te(H(a.value.base,a.value.font,c.value,a.value.size[o.value],a.value.gap[o.value],e.padded&&a.value[b.value?"square":"padding"][o.value],y==null?void 0:y.replaceAll("{color}",e.color),e.block?a.value.block:a.value.inline),e.class)}),$=m(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),s=m(()=>e.loading&&!l.value?e.loadingIcon:e.trailingIcon||e.icon),u=m(()=>H(a.value.icon.base,a.value.icon.size[o.value],e.loading&&a.value.icon.loading)),w=m(()=>H(a.value.icon.base,a.value.icon.size[o.value],e.loading&&!l.value&&a.value.icon.loading)),S=m(()=>qe(e));return{ui:a,attrs:i,isLeading:l,isTrailing:f,isSquare:b,buttonClass:I,leadingIconName:$,trailingIconName:s,leadingIconClass:u,trailingIconClass:w,linkProps:S}}});function He(e,t,a,i,o,c){const l=re,f=ie;return n(),D(f,z({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},{...e.linkProps,...e.attrs}),{default:C(()=>[k(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(n(),D(l,{key:0,name:e.leadingIconName,class:h(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):T("",!0)]),k(e.$slots,"default",{},()=>[e.label?(n(),v("span",{key:0,class:h([e.truncate?e.ui.truncate:""])},x(e.label),3)):T("",!0)]),k(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(n(),D(l,{key:0,name:e.trailingIconName,class:h(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):T("",!0)])]),_:3},16,["type","disabled","class"])}const Je=J(Ge,[["render",He]]),Ee={class:"mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20"},Qe={class:"font-testimonial text-white-shadow text-center text-4xl font-bold"},We={class:"text-center text-lg font-light italic text-muted"},Ke={class:"flex flex-col sm:items-center sm:justify-between"},Xe={class:"flex justify-center"},Ze={class:"flex w-full flex-col items-center justify-between gap-4 sm:flex-row"},Ye={class:"flex flex-col gap-3"},_e={class:"flex items-center gap-3 text-gray-400"},ea=d("span",{class:"i-heroicons-phone size-6","aria-hidden":"true"},null,-1),aa={class:"flex items-center gap-3 text-gray-400"},ta=d("span",{class:"i-heroicons-envelope size-6","aria-hidden":"true"},null,-1),ha=G({__name:"Contact",setup(e){const t=ze(),{t:a}=Be(),i=V(""),o=V(""),c=V(""),l=V(""),f=V(""),b=V(!1),I=m(()=>({email:i.value,message:o.value,phone:c.value,fullname:l.value,subject:f.value}));async function $(){b.value=!0;try{await $fetch("/api/sendEmail",{method:"POST",body:I.value}),i.value="",o.value="",c.value="",l.value="",f.value="",ee.success(a("contact.success"))}catch{ee.error(a("contact.error"))}b.value=!1}return(s,u)=>{const w=ue,S=fe,y=Pe,A=Le,F=Je,E=le,r=je,B=me;return n(),v("section",Ee,[d("h1",Qe,[ae(s.$slots,"title")]),d("h2",We,[ae(s.$slots,"subtitle")]),g(w,{class:"mb-8 mt-2"}),d("div",Ke,[d("form",{class:"flex w-full max-w-[40rem] flex-col gap-3",onSubmit:Ie($,["prevent"])},[g(y,{label:"Fullname",required:""},{default:C(()=>[g(S,{id:"full-name",modelValue:j(l),"onUpdate:modelValue":u[0]||(u[0]=p=>M(l)?l.value=p:null),type:"text",required:"",name:"fullname",autocomplete:"name",variant:"none",placeholder:"John Doe"},null,8,["modelValue"])]),_:1}),g(y,{label:"Email",required:""},{default:C(()=>[g(S,{id:"email",modelValue:j(i),"onUpdate:modelValue":u[1]||(u[1]=p=>M(i)?i.value=p:null),type:"email",required:"",name:"email",autocomplete:"email",variant:"none",placeholder:"john.doe@gmail.com"},null,8,["modelValue"])]),_:1}),g(y,{label:"Phone"},{default:C(()=>[g(S,{id:"phone",modelValue:j(c),"onUpdate:modelValue":u[2]||(u[2]=p=>M(c)?c.value=p:null),type:"text",name:"phone",autocomplete:"tel",variant:"none",placeholder:"123-456-7890"},null,8,["modelValue"])]),_:1}),g(y,{label:"Subject",required:""},{default:C(()=>[g(S,{id:"subject",modelValue:j(f),"onUpdate:modelValue":u[3]||(u[3]=p=>M(f)?f.value=p:null),variant:"none",type:"text",name:"subject",placeholder:s.$t("contact.subject")},null,8,["modelValue","placeholder"])]),_:1}),g(y,{label:"Message",required:""},{default:C(()=>[g(A,{id:"message",modelValue:j(o),"onUpdate:modelValue":u[4]||(u[4]=p=>M(o)?o.value=p:null),autoresize:"",variant:"none",required:"",name:"message",rows:4,placeholder:"Lets work together!"},null,8,["modelValue"])]),_:1}),d("div",Xe,[g(F,{loading:j(b),type:"submit",color:"gray","loading-icon":"i-lucide-loader",block:""},{default:C(()=>[P(x(s.$t("contact.submit")),1)]),_:1},8,["loading"])])],32),g(w,{class:"my-10"}),d("div",Ze,[d("div",Ye,[d("dd",_e,[ea,d("span",null,x(j(t).phone),1)]),d("dd",aa,[ta,g(r,{text:s.$t("global.email"),shortcuts:["⌘","O"]},{default:C(()=>[g(E,{to:`mailto:${j(t).email}`,class:"cursor-pointer transition-colors duration-300 hover:text-main"},{default:C(()=>[P(x(j(t).email),1)]),_:1},8,["to"])]),_:1},8,["text"])])]),d("div",null,[g(B)])])])])}}});export{ha as default};
