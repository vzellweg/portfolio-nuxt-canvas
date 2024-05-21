import{d as He,r as se,o as pt,R as St,c as K,l as ct,a2 as dt,a3 as xe,a4 as Be,J as vt,a9 as Lt,aa as Rt,b as J,X as Me,j as be,t as Se,O as Le,af as Wt,a7 as Ht,n as oe,g as Nt,w as rt,e as je,f as Ce,F as Vt,a1 as zt,W as Ft,T as Xt}from"./C2UVrCmB.js";import{a as qt,u as mt}from"./DV0Eimfn.js";import{c as at}from"./9ftdkNMz.js";const Ut={base:"inline-flex items-center justify-center text-gray-900 dark:text-white",padding:"px-1",size:{xs:"h-4 min-w-[16px] text-[10px]",sm:"h-5 min-w-[20px] text-[11px]",md:"h-6 min-w-[24px] text-[12px]"},rounded:"rounded",font:"font-medium font-sans",background:"bg-gray-100 dark:bg-gray-800",ring:"ring-1 ring-gray-300 dark:ring-gray-700 ring-inset",default:{size:"sm"}},It={wrapper:"relative inline-flex",container:"z-20 group",width:"max-w-xs",background:"bg-white dark:bg-gray-900",color:"text-gray-900 dark:text-white",shadow:"shadow",rounded:"rounded",ring:"ring-1 ring-gray-200 dark:ring-gray-800",base:"[@media(pointer:coarse)]:hidden h-6 px-2 py-1 text-xs font-normal truncate relative",shortcuts:"hidden md:inline-flex flex-shrink-0 gap-0.5",middot:"mx-1 text-gray-700 dark:text-gray-200",transition:{enterActiveClass:"transition ease-out duration-200",enterFromClass:"opacity-0 translate-y-1",enterToClass:"opacity-100 translate-y-0",leaveActiveClass:"transition ease-in duration-150",leaveFromClass:"opacity-100 translate-y-0",leaveToClass:"opacity-0 translate-y-1"},popper:{strategy:"fixed"},default:{openDelay:0,closeDelay:0},arrow:{...qt,base:"[@media(pointer:coarse)]:hidden invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2"}},Yt=Symbol.for("nuxt:client-only"),na=He({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:t,attrs:r}){const a=se(!1);return pt(()=>{a.value=!0}),St(Yt,!0),n=>{var i;if(a.value)return(i=t.default)==null?void 0:i.call(t);const s=t.fallback||t.placeholder;if(s)return s();const f=n.fallback||n.placeholder||"",o=n.fallbackTag||n.placeholderTag||"span";return K(o,r,f)}}}),Pe=dt(xe.ui.strategy,xe.ui.kbd,Ut),Jt=He({inheritAttrs:!1,props:{value:{type:String,default:null},size:{type:String,default:()=>Pe.default.size,validator(e){return Object.keys(Pe.size).includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:r}=mt("kbd",Be(e,"ui"),Pe),a=vt(()=>Lt(Rt(t.value.base,t.value.size[e.size],t.value.padding,t.value.rounded,t.value.font,t.value.background,t.value.ring),e.class));return{ui:t,attrs:r,kbdClass:a}}});function Kt(e,t,r,a,n,s){return J(),K("kbd",Le({class:e.kbdClass},e.attrs),[Me(e.$slots,"default",{},()=>[be(Se(e.value),1)])],16)}const gt=ct(Jt,[["render",Kt]]);function B(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Q(e){var t=B(e).Element;return e instanceof t||e instanceof Element}function M(e){var t=B(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Ne(e){if(typeof ShadowRoot>"u")return!1;var t=B(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var G=Math.max,Oe=Math.min,_=Math.round;function Re(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function ht(){return!/^((?!chrome|android).)*safari/i.test(Re())}function ee(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var a=e.getBoundingClientRect(),n=1,s=1;t&&M(e)&&(n=e.offsetWidth>0&&_(a.width)/e.offsetWidth||1,s=e.offsetHeight>0&&_(a.height)/e.offsetHeight||1);var f=Q(e)?B(e):window,o=f.visualViewport,i=!ht()&&r,u=(a.left+(i&&o?o.offsetLeft:0))/n,l=(a.top+(i&&o?o.offsetTop:0))/s,m=a.width/n,g=a.height/s;return{width:m,height:g,top:l,right:u+m,bottom:l+g,left:u,x:u,y:l}}function Ve(e){var t=B(e),r=t.pageXOffset,a=t.pageYOffset;return{scrollLeft:r,scrollTop:a}}function Gt(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Qt(e){return e===B(e)||!M(e)?Ve(e):Gt(e)}function N(e){return e?(e.nodeName||"").toLowerCase():null}function F(e){return((Q(e)?e.ownerDocument:e.document)||window.document).documentElement}function ze(e){return ee(F(e)).left+Ve(e).scrollLeft}function V(e){return B(e).getComputedStyle(e)}function Fe(e){var t=V(e),r=t.overflow,a=t.overflowX,n=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+n+a)}function Zt(e){var t=e.getBoundingClientRect(),r=_(t.width)/e.offsetWidth||1,a=_(t.height)/e.offsetHeight||1;return r!==1||a!==1}function _t(e,t,r){r===void 0&&(r=!1);var a=M(t),n=M(t)&&Zt(t),s=F(t),f=ee(e,n,r),o={scrollLeft:0,scrollTop:0},i={x:0,y:0};return(a||!a&&!r)&&((N(t)!=="body"||Fe(s))&&(o=Qt(t)),M(t)?(i=ee(t,!0),i.x+=t.clientLeft,i.y+=t.clientTop):s&&(i.x=ze(s))),{x:f.left+o.scrollLeft-i.x,y:f.top+o.scrollTop-i.y,width:f.width,height:f.height}}function Xe(e){var t=ee(e),r=e.offsetWidth,a=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-a)<=1&&(a=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:a}}function ke(e){return N(e)==="html"?e:e.assignedSlot||e.parentNode||(Ne(e)?e.host:null)||F(e)}function yt(e){return["html","body","#document"].indexOf(N(e))>=0?e.ownerDocument.body:M(e)&&Fe(e)?e:yt(ke(e))}function fe(e,t){var r;t===void 0&&(t=[]);var a=yt(e),n=a===((r=e.ownerDocument)==null?void 0:r.body),s=B(a),f=n?[s].concat(s.visualViewport||[],Fe(a)?a:[]):a,o=t.concat(f);return n?o:o.concat(fe(ke(f)))}function er(e){return["table","td","th"].indexOf(N(e))>=0}function nt(e){return!M(e)||V(e).position==="fixed"?null:e.offsetParent}function tr(e){var t=/firefox/i.test(Re()),r=/Trident/i.test(Re());if(r&&M(e)){var a=V(e);if(a.position==="fixed")return null}var n=ke(e);for(Ne(n)&&(n=n.host);M(n)&&["html","body"].indexOf(N(n))<0;){var s=V(n);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||t&&s.willChange==="filter"||t&&s.filter&&s.filter!=="none")return n;n=n.parentNode}return null}function pe(e){for(var t=B(e),r=nt(e);r&&er(r)&&V(r).position==="static";)r=nt(r);return r&&(N(r)==="html"||N(r)==="body"&&V(r).position==="static")?t:r||tr(e)||t}var P="top",R="bottom",W="right",T="left",qe="auto",ce=[P,R,W,T],te="start",ue="end",rr="clippingParents",bt="viewport",ie="popper",ar="reference",ot=ce.reduce(function(e,t){return e.concat([t+"-"+te,t+"-"+ue])},[]),wt=[].concat(ce,[qe]).reduce(function(e,t){return e.concat([t,t+"-"+te,t+"-"+ue])},[]),nr="beforeRead",or="read",ir="afterRead",sr="beforeMain",fr="main",lr="afterMain",ur="beforeWrite",pr="write",cr="afterWrite",dr=[nr,or,ir,sr,fr,lr,ur,pr,cr];function vr(e){var t=new Map,r=new Set,a=[];e.forEach(function(s){t.set(s.name,s)});function n(s){r.add(s.name);var f=[].concat(s.requires||[],s.requiresIfExists||[]);f.forEach(function(o){if(!r.has(o)){var i=t.get(o);i&&n(i)}}),a.push(s)}return e.forEach(function(s){r.has(s.name)||n(s)}),a}function mr(e){var t=vr(e);return dr.reduce(function(r,a){return r.concat(t.filter(function(n){return n.phase===a}))},[])}function gr(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function hr(e){var t=e.reduce(function(r,a){var n=r[a.name];return r[a.name]=n?Object.assign({},n,a,{options:Object.assign({},n.options,a.options),data:Object.assign({},n.data,a.data)}):a,r},{});return Object.keys(t).map(function(r){return t[r]})}function yr(e,t){var r=B(e),a=F(e),n=r.visualViewport,s=a.clientWidth,f=a.clientHeight,o=0,i=0;if(n){s=n.width,f=n.height;var u=ht();(u||!u&&t==="fixed")&&(o=n.offsetLeft,i=n.offsetTop)}return{width:s,height:f,x:o+ze(e),y:i}}function br(e){var t,r=F(e),a=Ve(e),n=(t=e.ownerDocument)==null?void 0:t.body,s=G(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),f=G(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),o=-a.scrollLeft+ze(e),i=-a.scrollTop;return V(n||r).direction==="rtl"&&(o+=G(r.clientWidth,n?n.clientWidth:0)-s),{width:s,height:f,x:o,y:i}}function xt(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Ne(r)){var a=t;do{if(a&&e.isSameNode(a))return!0;a=a.parentNode||a.host}while(a)}return!1}function We(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function wr(e,t){var r=ee(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function it(e,t,r){return t===bt?We(yr(e,r)):Q(t)?wr(t,r):We(br(F(e)))}function xr(e){var t=fe(ke(e)),r=["absolute","fixed"].indexOf(V(e).position)>=0,a=r&&M(e)?pe(e):e;return Q(a)?t.filter(function(n){return Q(n)&&xt(n,a)&&N(n)!=="body"}):[]}function Or(e,t,r,a){var n=t==="clippingParents"?xr(e):[].concat(t),s=[].concat(n,[r]),f=s[0],o=s.reduce(function(i,u){var l=it(e,u,a);return i.top=G(l.top,i.top),i.right=Oe(l.right,i.right),i.bottom=Oe(l.bottom,i.bottom),i.left=G(l.left,i.left),i},it(e,f,a));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function H(e){return e.split("-")[0]}function re(e){return e.split("-")[1]}function Ue(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Ot(e){var t=e.reference,r=e.element,a=e.placement,n=a?H(a):null,s=a?re(a):null,f=t.x+t.width/2-r.width/2,o=t.y+t.height/2-r.height/2,i;switch(n){case P:i={x:f,y:t.y-r.height};break;case R:i={x:f,y:t.y+t.height};break;case W:i={x:t.x+t.width,y:o};break;case T:i={x:t.x-r.width,y:o};break;default:i={x:t.x,y:t.y}}var u=n?Ue(n):null;if(u!=null){var l=u==="y"?"height":"width";switch(s){case te:i[u]=i[u]-(t[l]/2-r[l]/2);break;case ue:i[u]=i[u]+(t[l]/2-r[l]/2);break}}return i}function kt(){return{top:0,right:0,bottom:0,left:0}}function At(e){return Object.assign({},kt(),e)}function Et(e,t){return t.reduce(function(r,a){return r[a]=e,r},{})}function Ie(e,t){t===void 0&&(t={});var r=t,a=r.placement,n=a===void 0?e.placement:a,s=r.strategy,f=s===void 0?e.strategy:s,o=r.boundary,i=o===void 0?rr:o,u=r.rootBoundary,l=u===void 0?bt:u,m=r.elementContext,g=m===void 0?ie:m,p=r.altBoundary,h=p===void 0?!1:p,v=r.padding,d=v===void 0?0:v,y=At(typeof d!="number"?d:Et(d,ce)),x=g===ie?ar:ie,k=e.rects.popper,c=e.elements[h?x:g],b=Or(Q(c)?c:c.contextElement||F(e.elements.popper),i,l,f),w=ee(e.elements.reference),O=Ot({reference:w,element:k,strategy:"absolute",placement:n}),$=We(Object.assign({},k,O)),E=g===ie?$:w,A={top:b.top-E.top+y.top,bottom:E.bottom-b.bottom+y.bottom,left:b.left-E.left+y.left,right:E.right-b.right+y.right},D=e.modifiersData.offset;if(g===ie&&D){var S=D[n];Object.keys(A).forEach(function(j){var X=[W,R].indexOf(j)>=0?1:-1,q=[P,R].indexOf(j)>=0?"y":"x";A[j]+=S[q]*X})}return A}var st={placement:"bottom",modifiers:[],strategy:"absolute"};function ft(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(a){return!(a&&typeof a.getBoundingClientRect=="function")})}function kr(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,a=r===void 0?[]:r,n=t.defaultOptions,s=n===void 0?st:n;return function(o,i,u){u===void 0&&(u=s);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},st,s),modifiersData:{},elements:{reference:o,popper:i},attributes:{},styles:{}},m=[],g=!1,p={state:l,setOptions:function(y){var x=typeof y=="function"?y(l.options):y;v(),l.options=Object.assign({},s,l.options,x),l.scrollParents={reference:Q(o)?fe(o):o.contextElement?fe(o.contextElement):[],popper:fe(i)};var k=mr(hr([].concat(a,l.options.modifiers)));return l.orderedModifiers=k.filter(function(c){return c.enabled}),h(),p.update()},forceUpdate:function(){if(!g){var y=l.elements,x=y.reference,k=y.popper;if(ft(x,k)){l.rects={reference:_t(x,pe(k),l.options.strategy==="fixed"),popper:Xe(k)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(A){return l.modifiersData[A.name]=Object.assign({},A.data)});for(var c=0;c<l.orderedModifiers.length;c++){if(l.reset===!0){l.reset=!1,c=-1;continue}var b=l.orderedModifiers[c],w=b.fn,O=b.options,$=O===void 0?{}:O,E=b.name;typeof w=="function"&&(l=w({state:l,options:$,name:E,instance:p})||l)}}}},update:gr(function(){return new Promise(function(d){p.forceUpdate(),d(l)})}),destroy:function(){v(),g=!0}};if(!ft(o,i))return p;p.setOptions(u).then(function(d){!g&&u.onFirstUpdate&&u.onFirstUpdate(d)});function h(){l.orderedModifiers.forEach(function(d){var y=d.name,x=d.options,k=x===void 0?{}:x,c=d.effect;if(typeof c=="function"){var b=c({state:l,name:y,instance:p,options:k}),w=function(){};m.push(b||w)}})}function v(){m.forEach(function(d){return d()}),m=[]}return p}}var ye={passive:!0};function Ar(e){var t=e.state,r=e.instance,a=e.options,n=a.scroll,s=n===void 0?!0:n,f=a.resize,o=f===void 0?!0:f,i=B(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&u.forEach(function(l){l.addEventListener("scroll",r.update,ye)}),o&&i.addEventListener("resize",r.update,ye),function(){s&&u.forEach(function(l){l.removeEventListener("scroll",r.update,ye)}),o&&i.removeEventListener("resize",r.update,ye)}}const $t={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Ar,data:{}};function Er(e){var t=e.state,r=e.name;t.modifiersData[r]=Ot({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const $r={name:"popperOffsets",enabled:!0,phase:"read",fn:Er,data:{}};var Dr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function jr(e,t){var r=e.x,a=e.y,n=t.devicePixelRatio||1;return{x:_(r*n)/n||0,y:_(a*n)/n||0}}function lt(e){var t,r=e.popper,a=e.popperRect,n=e.placement,s=e.variation,f=e.offsets,o=e.position,i=e.gpuAcceleration,u=e.adaptive,l=e.roundOffsets,m=e.isFixed,g=f.x,p=g===void 0?0:g,h=f.y,v=h===void 0?0:h,d=typeof l=="function"?l({x:p,y:v}):{x:p,y:v};p=d.x,v=d.y;var y=f.hasOwnProperty("x"),x=f.hasOwnProperty("y"),k=T,c=P,b=window;if(u){var w=pe(r),O="clientHeight",$="clientWidth";if(w===B(r)&&(w=F(r),V(w).position!=="static"&&o==="absolute"&&(O="scrollHeight",$="scrollWidth")),w=w,n===P||(n===T||n===W)&&s===ue){c=R;var E=m&&w===b&&b.visualViewport?b.visualViewport.height:w[O];v-=E-a.height,v*=i?1:-1}if(n===T||(n===P||n===R)&&s===ue){k=W;var A=m&&w===b&&b.visualViewport?b.visualViewport.width:w[$];p-=A-a.width,p*=i?1:-1}}var D=Object.assign({position:o},u&&Dr),S=l===!0?jr({x:p,y:v},B(r)):{x:p,y:v};if(p=S.x,v=S.y,i){var j;return Object.assign({},D,(j={},j[c]=x?"0":"",j[k]=y?"0":"",j.transform=(b.devicePixelRatio||1)<=1?"translate("+p+"px, "+v+"px)":"translate3d("+p+"px, "+v+"px, 0)",j))}return Object.assign({},D,(t={},t[c]=x?v+"px":"",t[k]=y?p+"px":"",t.transform="",t))}function Cr(e){var t=e.state,r=e.options,a=r.gpuAcceleration,n=a===void 0?!0:a,s=r.adaptive,f=s===void 0?!0:s,o=r.roundOffsets,i=o===void 0?!0:o,u={placement:H(t.placement),variation:re(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,lt(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:f,roundOffsets:i})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,lt(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:i})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Dt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Cr,data:{}};function Pr(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var a=t.styles[r]||{},n=t.attributes[r]||{},s=t.elements[r];!M(s)||!N(s)||(Object.assign(s.style,a),Object.keys(n).forEach(function(f){var o=n[f];o===!1?s.removeAttribute(f):s.setAttribute(f,o===!0?"":o)}))})}function Tr(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(a){var n=t.elements[a],s=t.attributes[a]||{},f=Object.keys(t.styles.hasOwnProperty(a)?t.styles[a]:r[a]),o=f.reduce(function(i,u){return i[u]="",i},{});!M(n)||!N(n)||(Object.assign(n.style,o),Object.keys(s).forEach(function(i){n.removeAttribute(i)}))})}}const Br={name:"applyStyles",enabled:!0,phase:"write",fn:Pr,effect:Tr,requires:["computeStyles"]};var Mr=[$t,$r,Dt,Br],Sr={left:"right",right:"left",bottom:"top",top:"bottom"};function we(e){return e.replace(/left|right|bottom|top/g,function(t){return Sr[t]})}var Lr={start:"end",end:"start"};function ut(e){return e.replace(/start|end/g,function(t){return Lr[t]})}function Rr(e,t){t===void 0&&(t={});var r=t,a=r.placement,n=r.boundary,s=r.rootBoundary,f=r.padding,o=r.flipVariations,i=r.allowedAutoPlacements,u=i===void 0?wt:i,l=re(a),m=l?o?ot:ot.filter(function(h){return re(h)===l}):ce,g=m.filter(function(h){return u.indexOf(h)>=0});g.length===0&&(g=m);var p=g.reduce(function(h,v){return h[v]=Ie(e,{placement:v,boundary:n,rootBoundary:s,padding:f})[H(v)],h},{});return Object.keys(p).sort(function(h,v){return p[h]-p[v]})}function Wr(e){if(H(e)===qe)return[];var t=we(e);return[ut(e),t,ut(t)]}function Hr(e){var t=e.state,r=e.options,a=e.name;if(!t.modifiersData[a]._skip){for(var n=r.mainAxis,s=n===void 0?!0:n,f=r.altAxis,o=f===void 0?!0:f,i=r.fallbackPlacements,u=r.padding,l=r.boundary,m=r.rootBoundary,g=r.altBoundary,p=r.flipVariations,h=p===void 0?!0:p,v=r.allowedAutoPlacements,d=t.options.placement,y=H(d),x=y===d,k=i||(x||!h?[we(d)]:Wr(d)),c=[d].concat(k).reduce(function(Z,z){return Z.concat(H(z)===qe?Rr(t,{placement:z,boundary:l,rootBoundary:m,padding:u,flipVariations:h,allowedAutoPlacements:v}):z)},[]),b=t.rects.reference,w=t.rects.popper,O=new Map,$=!0,E=c[0],A=0;A<c.length;A++){var D=c[A],S=H(D),j=re(D)===te,X=[P,R].indexOf(S)>=0,q=X?"width":"height",C=Ie(t,{placement:D,boundary:l,rootBoundary:m,altBoundary:g,padding:u}),L=X?j?W:T:j?R:P;b[q]>w[q]&&(L=we(L));var de=we(L),U=[];if(s&&U.push(C[S]<=0),o&&U.push(C[L]<=0,C[de]<=0),U.every(function(Z){return Z})){E=D,$=!1;break}O.set(D,U)}if($)for(var ve=h?3:1,Ae=function(z){var ne=c.find(function(ge){var I=O.get(ge);if(I)return I.slice(0,z).every(function(Ee){return Ee})});if(ne)return E=ne,"break"},ae=ve;ae>0;ae--){var me=Ae(ae);if(me==="break")break}t.placement!==E&&(t.modifiersData[a]._skip=!0,t.placement=E,t.reset=!0)}}const Nr={name:"flip",enabled:!0,phase:"main",fn:Hr,requiresIfExists:["offset"],data:{_skip:!1}};function Vr(e,t,r){var a=H(e),n=[T,P].indexOf(a)>=0?-1:1,s=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,f=s[0],o=s[1];return f=f||0,o=(o||0)*n,[T,W].indexOf(a)>=0?{x:o,y:f}:{x:f,y:o}}function zr(e){var t=e.state,r=e.options,a=e.name,n=r.offset,s=n===void 0?[0,0]:n,f=wt.reduce(function(l,m){return l[m]=Vr(m,t.rects,s),l},{}),o=f[t.placement],i=o.x,u=o.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=i,t.modifiersData.popperOffsets.y+=u),t.modifiersData[a]=f}const Fr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:zr};function Xr(e){return e==="x"?"y":"x"}function le(e,t,r){return G(e,Oe(t,r))}function qr(e,t,r){var a=le(e,t,r);return a>r?r:a}function Ur(e){var t=e.state,r=e.options,a=e.name,n=r.mainAxis,s=n===void 0?!0:n,f=r.altAxis,o=f===void 0?!1:f,i=r.boundary,u=r.rootBoundary,l=r.altBoundary,m=r.padding,g=r.tether,p=g===void 0?!0:g,h=r.tetherOffset,v=h===void 0?0:h,d=Ie(t,{boundary:i,rootBoundary:u,padding:m,altBoundary:l}),y=H(t.placement),x=re(t.placement),k=!x,c=Ue(y),b=Xr(c),w=t.modifiersData.popperOffsets,O=t.rects.reference,$=t.rects.popper,E=typeof v=="function"?v(Object.assign({},t.rects,{placement:t.placement})):v,A=typeof E=="number"?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,S={x:0,y:0};if(w){if(s){var j,X=c==="y"?P:T,q=c==="y"?R:W,C=c==="y"?"height":"width",L=w[c],de=L+d[X],U=L-d[q],ve=p?-$[C]/2:0,Ae=x===te?O[C]:$[C],ae=x===te?-$[C]:-O[C],me=t.elements.arrow,Z=p&&me?Xe(me):{width:0,height:0},z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:kt(),ne=z[X],ge=z[q],I=le(0,O[C],Z[C]),Ee=k?O[C]/2-ve-I-ne-A.mainAxis:Ae-I-ne-A.mainAxis,jt=k?-O[C]/2+ve+I+ge+A.mainAxis:ae+I+ge+A.mainAxis,$e=t.elements.arrow&&pe(t.elements.arrow),Ct=$e?c==="y"?$e.clientTop||0:$e.clientLeft||0:0,Ye=(j=D==null?void 0:D[c])!=null?j:0,Pt=L+Ee-Ye-Ct,Tt=L+jt-Ye,Je=le(p?Oe(de,Pt):de,L,p?G(U,Tt):U);w[c]=Je,S[c]=Je-L}if(o){var Ke,Bt=c==="x"?P:T,Mt=c==="x"?R:W,Y=w[b],he=b==="y"?"height":"width",Ge=Y+d[Bt],Qe=Y-d[Mt],De=[P,T].indexOf(y)!==-1,Ze=(Ke=D==null?void 0:D[b])!=null?Ke:0,_e=De?Ge:Y-O[he]-$[he]-Ze+A.altAxis,et=De?Y+O[he]+$[he]-Ze-A.altAxis:Qe,tt=p&&De?qr(_e,Y,et):le(p?_e:Ge,Y,p?et:Qe);w[b]=tt,S[b]=tt-Y}t.modifiersData[a]=S}}const Ir={name:"preventOverflow",enabled:!0,phase:"main",fn:Ur,requiresIfExists:["offset"]};var Yr=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,At(typeof t!="number"?t:Et(t,ce))};function Jr(e){var t,r=e.state,a=e.name,n=e.options,s=r.elements.arrow,f=r.modifiersData.popperOffsets,o=H(r.placement),i=Ue(o),u=[T,W].indexOf(o)>=0,l=u?"height":"width";if(!(!s||!f)){var m=Yr(n.padding,r),g=Xe(s),p=i==="y"?P:T,h=i==="y"?R:W,v=r.rects.reference[l]+r.rects.reference[i]-f[i]-r.rects.popper[l],d=f[i]-r.rects.reference[i],y=pe(s),x=y?i==="y"?y.clientHeight||0:y.clientWidth||0:0,k=v/2-d/2,c=m[p],b=x-g[l]-m[h],w=x/2-g[l]/2+k,O=le(c,w,b),$=i;r.modifiersData[a]=(t={},t[$]=O,t.centerOffset=O-w,t)}}function Kr(e){var t=e.state,r=e.options,a=r.element,n=a===void 0?"[data-popper-arrow]":a;n!=null&&(typeof n=="string"&&(n=t.elements.popper.querySelector(n),!n)||xt(t.elements.popper,n)&&(t.elements.arrow=n))}const Gr={name:"arrow",enabled:!0,phase:"main",fn:Jr,effect:Kr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},Qr=kr({defaultModifiers:[...Mr,Fr,Nr,Ir,Dt,$t,Gr]});function Zr({locked:e=!1,overflowPadding:t=8,offsetDistance:r=8,offsetSkid:a=0,gpuAcceleration:n=!0,adaptive:s=!0,scroll:f=!0,resize:o=!0,arrow:i=!1,placement:u,strategy:l},m){const g=se(null),p=se(null),h=se(null);return pt(()=>{Wt(v=>{if(!p.value||!g.value&&!(m!=null&&m.value))return;const d=at(p),y=at(g);if(!(d instanceof HTMLElement)||!y)return;const x={modifiers:[{name:"flip",enabled:!e},{name:"preventOverflow",options:{padding:t}},{name:"offset",options:{offset:[a,r]}},{name:"computeStyles",options:{adaptive:s,gpuAcceleration:n}},{name:"eventListeners",options:{scroll:f,resize:o}},{name:"arrow",enabled:i}]};u&&(x.placement=u),l&&(x.strategy=l),h.value=Qr(y,d,x),v(h.value.destroy)})}),[g,p,h]}const Te=dt(xe.ui.strategy,xe.ui.tooltip,It),_r=He({components:{UKbd:gt},inheritAttrs:!1,props:{text:{type:String,default:null},prevent:{type:Boolean,default:!1},shortcuts:{type:Array,default:()=>[]},openDelay:{type:Number,default:()=>Te.default.openDelay},closeDelay:{type:Number,default:()=>Te.default.closeDelay},popper:{type:Object,default:()=>({})},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:r}=mt("tooltip",Be(e,"ui"),Te,Be(e,"class")),a=vt(()=>Ht({},e.popper,t.value.popper)),[n,s]=Zr(a.value),f=se(!1);let o=null,i=null;function u(){i&&(clearTimeout(i),i=null),!f.value&&(o=o||setTimeout(()=>{f.value=!0,o=null},e.openDelay))}function l(){o&&(clearTimeout(o),o=null),f.value&&(i=i||setTimeout(()=>{f.value=!1,i=null},e.closeDelay))}return{ui:t,attrs:r,popper:a,trigger:n,container:s,open:f,onMouseEnter:u,onMouseLeave:l}}});function ea(e,t,r,a,n,s){const f=gt;return J(),K("div",Le({ref:"trigger",class:e.ui.wrapper},e.attrs,{onMouseenter:t[0]||(t[0]=(...o)=>e.onMouseEnter&&e.onMouseEnter(...o)),onMouseleave:t[1]||(t[1]=(...o)=>e.onMouseLeave&&e.onMouseLeave(...o))}),[Me(e.$slots,"default",{open:e.open},()=>[be(" Hover ")]),e.open&&!e.prevent?(J(),K("div",{key:0,ref:"container",class:oe([e.ui.container,e.ui.width])},[Nt(Xt,Le({appear:""},e.ui.transition),{default:rt(()=>{var o;return[je("div",null,[e.popper.arrow?(J(),K("div",{key:0,"data-popper-arrow":"",class:oe(Object.values(e.ui.arrow))},null,2)):Ce("",!0),je("div",{class:oe([e.ui.base,e.ui.background,e.ui.color,e.ui.rounded,e.ui.shadow,e.ui.ring])},[Me(e.$slots,"text",{},()=>[be(Se(e.text),1)]),(o=e.shortcuts)!=null&&o.length?(J(),K("span",{key:0,class:oe(e.ui.shortcuts)},[je("span",{class:oe(e.ui.middot)},"·",2),(J(!0),K(Vt,null,zt(e.shortcuts,i=>(J(),Ft(f,{key:i,size:"xs"},{default:rt(()=>[be(Se(i),1)]),_:2},1024))),128))],2)):Ce("",!0)],2)])]}),_:3},16)],2)):Ce("",!0)],16)}const oa=ct(_r,[["render",ea]]);export{oa as _,na as a,Yt as c};
