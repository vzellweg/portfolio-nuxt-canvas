import{_ as q}from"./Cwtg202a.js";import{H as b,r as j,J as t,R as Z,o as T,a as G,ak as p,l as _,a2 as P,a3 as z,d as x,a4 as w,a7 as ee,a9 as ae,aa as y,b as S,c as N,e as le,O as ne,X as O,n as I,g as M,f as A,ab as ie}from"./C2UVrCmB.js";import{i as te,u as ue}from"./DV0Eimfn.js";import{u as de}from"./APiR_8JS.js";const oe=(e,n)=>{const o=b("form-events",void 0),a=b("form-group",void 0),r=b("form-inputs",void 0);a&&(e!=null&&e.id&&(a.inputId.value=e==null?void 0:e.id),r&&(r.value[a.name.value]=a.inputId.value));const l=j(!1);function d(u,f){o&&o.emit({type:u,path:f})}function s(){d("blur",a==null?void 0:a.name.value),l.value=!0}function C(){d("change",a==null?void 0:a.name.value)}const h=de(()=>{(l.value||a!=null&&a.eagerValidation.value)&&d("input",a==null?void 0:a.name.value)},300);return{inputId:t(()=>(e==null?void 0:e.id)??(a==null?void 0:a.inputId.value)),name:t(()=>(e==null?void 0:e.name)??(a==null?void 0:a.name.value)),size:t(()=>{var f;const u=n.size[a==null?void 0:a.size.value]?a==null?void 0:a.size.value:null;return(e==null?void 0:e.size)??u??((f=n==null?void 0:n.default)==null?void 0:f.size)}),color:t(()=>{var u;return(u=a==null?void 0:a.error)!=null&&u.value?"red":e==null?void 0:e.color}),emitFormBlur:s,emitFormInput:h,emitFormChange:C}};function re({ui:e,props:n}){const o=p();if(Z("ButtonGroupContextConsumer",!0),b("ButtonGroupContextConsumer",!1))return{size:t(()=>n.size),rounded:t(()=>e.value.rounded)};let r=o.parent,l;for(;r&&!l;){if(r.type.name==="ButtonGroup"){l=b(`group-${r.uid}`);break}r=r.parent}const d=t(()=>l==null?void 0:l.value.children.indexOf(o));return T(()=>{l==null||l.value.register(o)}),G(()=>{l==null||l.value.unregister(o)}),{size:t(()=>(l==null?void 0:l.value.size)||n.size),rounded:t(()=>!l||d.value===-1?e.value.rounded:l.value.children.length===1?l.value.ui.rounded:d.value===0?l.value.rounded.start:d.value===l.value.children.length-1?l.value.rounded.end:"rounded-none")}}const c=P(z.ui.strategy,z.ui.input,te),se=x({components:{UIcon:q},inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},type:{type:String,default:"text"},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>c.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(c.size).includes(e)}},color:{type:String,default:()=>c.default.color,validator(e){return[...z.ui.colors,...Object.keys(c.color)].includes(e)}},variant:{type:String,default:()=>c.default.variant,validator(e){return[...Object.keys(c.variant),...Object.values(c.color).flatMap(n=>Object.keys(n))].includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur","change"],setup(e,{emit:n,slots:o}){const{ui:a,attrs:r}=ue("input",w(e,"ui"),c,w(e,"class")),{size:l,rounded:d}=re({ui:a,props:e}),{emitFormBlur:s,emitFormInput:C,size:h,color:u,inputId:f,name:U}=oe(e,c),v=t(()=>l.value||h.value),m=j(ee({},e.modelModifiers,{trim:!1,lazy:!1,number:!1})),k=j(null),W=()=>{var i;e.autofocus&&((i=k.value)==null||i.focus())},F=i=>{m.value.trim&&(i=i.trim()),(m.value.number||e.type==="number")&&(i=ie(i)),n("update:modelValue",i),C()},D=i=>{m.value.lazy||F(i.target.value)},E=i=>{if(e.type==="file"){const g=i.target.files;n("change",g)}else{const g=i.target.value;n("change",g),m.value.lazy&&F(g),m.value.trim&&(i.target.value=g.trim())}},J=i=>{s(),n("blur",i)};T(()=>{setTimeout(()=>{W()},e.autofocusDelay)});const L=t(()=>{var g,V;const i=((V=(g=a.value.color)==null?void 0:g[u.value])==null?void 0:V[e.variant])||a.value.variant[e.variant];return ae(y(a.value.base,a.value.form,d.value,a.value.placeholder,e.type==="file"&&a.value.file.base,a.value.size[v.value],e.padded?a.value.padding[v.value]:"p-0",i==null?void 0:i.replaceAll("{color}",u.value),(B.value||o.leading)&&a.value.leading.padding[v.value],($.value||o.trailing)&&a.value.trailing.padding[v.value]),e.inputClass)}),B=t(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),$=t(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),R=t(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),H=t(()=>e.loading&&!B.value?e.loadingIcon:e.trailingIcon||e.icon),X=t(()=>y(a.value.icon.leading.wrapper,a.value.icon.leading.pointer,a.value.icon.leading.padding[v.value])),K=t(()=>y(a.value.icon.base,u.value&&z.ui.colors.includes(u.value)&&a.value.icon.color.replaceAll("{color}",u.value),a.value.icon.size[v.value],e.loading&&a.value.icon.loading)),Q=t(()=>y(a.value.icon.trailing.wrapper,a.value.icon.trailing.pointer,a.value.icon.trailing.padding[v.value])),Y=t(()=>y(a.value.icon.base,u.value&&z.ui.colors.includes(u.value)&&a.value.icon.color.replaceAll("{color}",u.value),a.value.icon.size[v.value],e.loading&&!B.value&&a.value.icon.loading));return{ui:a,attrs:r,name:U,inputId:f,input:k,isLeading:B,isTrailing:$,inputClass:L,leadingIconName:R,leadingIconClass:K,leadingWrapperIconClass:X,trailingIconName:H,trailingIconClass:Y,trailingWrapperIconClass:Q,onInput:D,onChange:E,onBlur:J}}}),ce=["id","name","value","type","required","placeholder","disabled"];function ve(e,n,o,a,r,l){const d=q;return S(),N("div",{class:I(e.ui.wrapper)},[le("input",ne({id:e.inputId,ref:"input",name:e.name,value:e.modelValue,type:e.type,required:e.required,placeholder:e.placeholder,disabled:e.disabled,class:e.inputClass},e.attrs,{onInput:n[0]||(n[0]=(...s)=>e.onInput&&e.onInput(...s)),onBlur:n[1]||(n[1]=(...s)=>e.onBlur&&e.onBlur(...s)),onChange:n[2]||(n[2]=(...s)=>e.onChange&&e.onChange(...s))}),null,16,ce),O(e.$slots,"default"),e.isLeading&&e.leadingIconName||e.$slots.leading?(S(),N("span",{key:0,class:I(e.leadingWrapperIconClass)},[O(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[M(d,{name:e.leadingIconName,class:I(e.leadingIconClass)},null,8,["name","class"])])],2)):A("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(S(),N("span",{key:1,class:I(e.trailingWrapperIconClass)},[O(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[M(d,{name:e.trailingIconName,class:I(e.trailingIconClass)},null,8,["name","class"])])],2)):A("",!0)],2)}const Ie=_(se,[["render",ve]]);export{Ie as _,re as a,oe as u};
