import{l as lt,a6 as pt,a7 as xe,d as ct,a8 as Be,J as dt,ac as Mt,ad as St,b as J,c as Q,$ as Me,j as ye,t as Se,O as Le,r as be,o as Lt,ao as Rt,ab as Wt,n as oe,g as Ht,w as tt,e as je,f as Pe,F as Nt,a4 as Vt,Z as zt,T as Ft}from"./B0GTSHLG.js";import{a as qt,u as vt}from"./BpbIXC35.js";import{b as rt}from"./BskYD0Oz.js";const Ut={base:"inline-flex items-center justify-center text-gray-900 dark:text-white",padding:"px-1",size:{xs:"h-4 min-w-[16px] text-[10px]",sm:"h-5 min-w-[20px] text-[11px]",md:"h-6 min-w-[24px] text-[12px]"},rounded:"rounded",font:"font-medium font-sans",background:"bg-gray-100 dark:bg-gray-800",ring:"ring-1 ring-gray-300 dark:ring-gray-700 ring-inset",default:{size:"sm"}},Xt={wrapper:"relative inline-flex",container:"z-20 group",width:"max-w-xs",background:"bg-white dark:bg-gray-900",color:"text-gray-900 dark:text-white",shadow:"shadow",rounded:"rounded",ring:"ring-1 ring-gray-200 dark:ring-gray-800",base:"[@media(pointer:coarse)]:hidden h-6 px-2 py-1 text-xs font-normal truncate relative",shortcuts:"hidden md:inline-flex flex-shrink-0 gap-0.5",middot:"mx-1 text-gray-700 dark:text-gray-200",transition:{enterActiveClass:"transition ease-out duration-200",enterFromClass:"opacity-0 translate-y-1",enterToClass:"opacity-100 translate-y-0",leaveActiveClass:"transition ease-in duration-150",leaveFromClass:"opacity-100 translate-y-0",leaveToClass:"opacity-0 translate-y-1"},popper:{strategy:"fixed"},default:{openDelay:0,closeDelay:0},arrow:{...qt,base:"[@media(pointer:coarse)]:hidden invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2"}},Ce=pt(xe.ui.strategy,xe.ui.kbd,Ut),It=ct({inheritAttrs:!1,props:{value:{type:String,default:null},size:{type:String,default:()=>Ce.default.size,validator(e){return Object.keys(Ce.size).includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:r}=vt("kbd",Be(e,"ui"),Ce),a=dt(()=>Mt(St(t.value.base,t.value.size[e.size],t.value.padding,t.value.rounded,t.value.font,t.value.background,t.value.ring),e.class));return{ui:t,attrs:r,kbdClass:a}}});function Yt(e,t,r,a,n,s){return J(),Q("kbd",Le({class:e.kbdClass},e.attrs),[Me(e.$slots,"default",{},()=>[ye(Se(e.value),1)])],16)}const mt=lt(It,[["render",Yt]]);function B(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function G(e){var t=B(e).Element;return e instanceof t||e instanceof Element}function M(e){var t=B(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function He(e){if(typeof ShadowRoot>"u")return!1;var t=B(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var K=Math.max,Oe=Math.min,_=Math.round;function Re(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function gt(){return!/^((?!chrome|android).)*safari/i.test(Re())}function ee(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var a=e.getBoundingClientRect(),n=1,s=1;t&&M(e)&&(n=e.offsetWidth>0&&_(a.width)/e.offsetWidth||1,s=e.offsetHeight>0&&_(a.height)/e.offsetHeight||1);var f=G(e)?B(e):window,o=f.visualViewport,i=!gt()&&r,l=(a.left+(i&&o?o.offsetLeft:0))/n,u=(a.top+(i&&o?o.offsetTop:0))/s,m=a.width/n,g=a.height/s;return{width:m,height:g,top:u,right:l+m,bottom:u+g,left:l,x:l,y:u}}function Ne(e){var t=B(e),r=t.pageXOffset,a=t.pageYOffset;return{scrollLeft:r,scrollTop:a}}function Jt(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Kt(e){return e===B(e)||!M(e)?Ne(e):Jt(e)}function N(e){return e?(e.nodeName||"").toLowerCase():null}function F(e){return((G(e)?e.ownerDocument:e.document)||window.document).documentElement}function Ve(e){return ee(F(e)).left+Ne(e).scrollLeft}function V(e){return B(e).getComputedStyle(e)}function ze(e){var t=V(e),r=t.overflow,a=t.overflowX,n=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+n+a)}function Gt(e){var t=e.getBoundingClientRect(),r=_(t.width)/e.offsetWidth||1,a=_(t.height)/e.offsetHeight||1;return r!==1||a!==1}function Zt(e,t,r){r===void 0&&(r=!1);var a=M(t),n=M(t)&&Gt(t),s=F(t),f=ee(e,n,r),o={scrollLeft:0,scrollTop:0},i={x:0,y:0};return(a||!a&&!r)&&((N(t)!=="body"||ze(s))&&(o=Kt(t)),M(t)?(i=ee(t,!0),i.x+=t.clientLeft,i.y+=t.clientTop):s&&(i.x=Ve(s))),{x:f.left+o.scrollLeft-i.x,y:f.top+o.scrollTop-i.y,width:f.width,height:f.height}}function Fe(e){var t=ee(e),r=e.offsetWidth,a=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-a)<=1&&(a=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:a}}function Ae(e){return N(e)==="html"?e:e.assignedSlot||e.parentNode||(He(e)?e.host:null)||F(e)}function ht(e){return["html","body","#document"].indexOf(N(e))>=0?e.ownerDocument.body:M(e)&&ze(e)?e:ht(Ae(e))}function se(e,t){var r;t===void 0&&(t=[]);var a=ht(e),n=a===((r=e.ownerDocument)==null?void 0:r.body),s=B(a),f=n?[s].concat(s.visualViewport||[],ze(a)?a:[]):a,o=t.concat(f);return n?o:o.concat(se(Ae(f)))}function Qt(e){return["table","td","th"].indexOf(N(e))>=0}function at(e){return!M(e)||V(e).position==="fixed"?null:e.offsetParent}function _t(e){var t=/firefox/i.test(Re()),r=/Trident/i.test(Re());if(r&&M(e)){var a=V(e);if(a.position==="fixed")return null}var n=Ae(e);for(He(n)&&(n=n.host);M(n)&&["html","body"].indexOf(N(n))<0;){var s=V(n);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||t&&s.willChange==="filter"||t&&s.filter&&s.filter!=="none")return n;n=n.parentNode}return null}function le(e){for(var t=B(e),r=at(e);r&&Qt(r)&&V(r).position==="static";)r=at(r);return r&&(N(r)==="html"||N(r)==="body"&&V(r).position==="static")?t:r||_t(e)||t}var C="top",R="bottom",W="right",T="left",qe="auto",pe=[C,R,W,T],te="start",ue="end",er="clippingParents",yt="viewport",ie="popper",tr="reference",nt=pe.reduce(function(e,t){return e.concat([t+"-"+te,t+"-"+ue])},[]),bt=[].concat(pe,[qe]).reduce(function(e,t){return e.concat([t,t+"-"+te,t+"-"+ue])},[]),rr="beforeRead",ar="read",nr="afterRead",or="beforeMain",ir="main",sr="afterMain",fr="beforeWrite",ur="write",lr="afterWrite",pr=[rr,ar,nr,or,ir,sr,fr,ur,lr];function cr(e){var t=new Map,r=new Set,a=[];e.forEach(function(s){t.set(s.name,s)});function n(s){r.add(s.name);var f=[].concat(s.requires||[],s.requiresIfExists||[]);f.forEach(function(o){if(!r.has(o)){var i=t.get(o);i&&n(i)}}),a.push(s)}return e.forEach(function(s){r.has(s.name)||n(s)}),a}function dr(e){var t=cr(e);return pr.reduce(function(r,a){return r.concat(t.filter(function(n){return n.phase===a}))},[])}function vr(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function mr(e){var t=e.reduce(function(r,a){var n=r[a.name];return r[a.name]=n?Object.assign({},n,a,{options:Object.assign({},n.options,a.options),data:Object.assign({},n.data,a.data)}):a,r},{});return Object.keys(t).map(function(r){return t[r]})}function gr(e,t){var r=B(e),a=F(e),n=r.visualViewport,s=a.clientWidth,f=a.clientHeight,o=0,i=0;if(n){s=n.width,f=n.height;var l=gt();(l||!l&&t==="fixed")&&(o=n.offsetLeft,i=n.offsetTop)}return{width:s,height:f,x:o+Ve(e),y:i}}function hr(e){var t,r=F(e),a=Ne(e),n=(t=e.ownerDocument)==null?void 0:t.body,s=K(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),f=K(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),o=-a.scrollLeft+Ve(e),i=-a.scrollTop;return V(n||r).direction==="rtl"&&(o+=K(r.clientWidth,n?n.clientWidth:0)-s),{width:s,height:f,x:o,y:i}}function wt(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&He(r)){var a=t;do{if(a&&e.isSameNode(a))return!0;a=a.parentNode||a.host}while(a)}return!1}function We(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function yr(e,t){var r=ee(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function ot(e,t,r){return t===yt?We(gr(e,r)):G(t)?yr(t,r):We(hr(F(e)))}function br(e){var t=se(Ae(e)),r=["absolute","fixed"].indexOf(V(e).position)>=0,a=r&&M(e)?le(e):e;return G(a)?t.filter(function(n){return G(n)&&wt(n,a)&&N(n)!=="body"}):[]}function wr(e,t,r,a){var n=t==="clippingParents"?br(e):[].concat(t),s=[].concat(n,[r]),f=s[0],o=s.reduce(function(i,l){var u=ot(e,l,a);return i.top=K(u.top,i.top),i.right=Oe(u.right,i.right),i.bottom=Oe(u.bottom,i.bottom),i.left=K(u.left,i.left),i},ot(e,f,a));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function H(e){return e.split("-")[0]}function re(e){return e.split("-")[1]}function Ue(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function xt(e){var t=e.reference,r=e.element,a=e.placement,n=a?H(a):null,s=a?re(a):null,f=t.x+t.width/2-r.width/2,o=t.y+t.height/2-r.height/2,i;switch(n){case C:i={x:f,y:t.y-r.height};break;case R:i={x:f,y:t.y+t.height};break;case W:i={x:t.x+t.width,y:o};break;case T:i={x:t.x-r.width,y:o};break;default:i={x:t.x,y:t.y}}var l=n?Ue(n):null;if(l!=null){var u=l==="y"?"height":"width";switch(s){case te:i[l]=i[l]-(t[u]/2-r[u]/2);break;case ue:i[l]=i[l]+(t[u]/2-r[u]/2);break}}return i}function Ot(){return{top:0,right:0,bottom:0,left:0}}function At(e){return Object.assign({},Ot(),e)}function Et(e,t){return t.reduce(function(r,a){return r[a]=e,r},{})}function Xe(e,t){t===void 0&&(t={});var r=t,a=r.placement,n=a===void 0?e.placement:a,s=r.strategy,f=s===void 0?e.strategy:s,o=r.boundary,i=o===void 0?er:o,l=r.rootBoundary,u=l===void 0?yt:l,m=r.elementContext,g=m===void 0?ie:m,p=r.altBoundary,h=p===void 0?!1:p,v=r.padding,d=v===void 0?0:v,y=At(typeof d!="number"?d:Et(d,pe)),x=g===ie?tr:ie,A=e.rects.popper,c=e.elements[h?x:g],b=wr(G(c)?c:c.contextElement||F(e.elements.popper),i,u,f),w=ee(e.elements.reference),O=xt({reference:w,element:A,strategy:"absolute",placement:n}),$=We(Object.assign({},A,O)),k=g===ie?$:w,E={top:b.top-k.top+y.top,bottom:k.bottom-b.bottom+y.bottom,left:b.left-k.left+y.left,right:k.right-b.right+y.right},D=e.modifiersData.offset;if(g===ie&&D){var S=D[n];Object.keys(E).forEach(function(j){var q=[W,R].indexOf(j)>=0?1:-1,U=[C,R].indexOf(j)>=0?"y":"x";E[j]+=S[U]*q})}return E}var it={placement:"bottom",modifiers:[],strategy:"absolute"};function st(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(a){return!(a&&typeof a.getBoundingClientRect=="function")})}function xr(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,a=r===void 0?[]:r,n=t.defaultOptions,s=n===void 0?it:n;return function(o,i,l){l===void 0&&(l=s);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},it,s),modifiersData:{},elements:{reference:o,popper:i},attributes:{},styles:{}},m=[],g=!1,p={state:u,setOptions:function(y){var x=typeof y=="function"?y(u.options):y;v(),u.options=Object.assign({},s,u.options,x),u.scrollParents={reference:G(o)?se(o):o.contextElement?se(o.contextElement):[],popper:se(i)};var A=dr(mr([].concat(a,u.options.modifiers)));return u.orderedModifiers=A.filter(function(c){return c.enabled}),h(),p.update()},forceUpdate:function(){if(!g){var y=u.elements,x=y.reference,A=y.popper;if(st(x,A)){u.rects={reference:Zt(x,le(A),u.options.strategy==="fixed"),popper:Fe(A)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(E){return u.modifiersData[E.name]=Object.assign({},E.data)});for(var c=0;c<u.orderedModifiers.length;c++){if(u.reset===!0){u.reset=!1,c=-1;continue}var b=u.orderedModifiers[c],w=b.fn,O=b.options,$=O===void 0?{}:O,k=b.name;typeof w=="function"&&(u=w({state:u,options:$,name:k,instance:p})||u)}}}},update:vr(function(){return new Promise(function(d){p.forceUpdate(),d(u)})}),destroy:function(){v(),g=!0}};if(!st(o,i))return p;p.setOptions(l).then(function(d){!g&&l.onFirstUpdate&&l.onFirstUpdate(d)});function h(){u.orderedModifiers.forEach(function(d){var y=d.name,x=d.options,A=x===void 0?{}:x,c=d.effect;if(typeof c=="function"){var b=c({state:u,name:y,instance:p,options:A}),w=function(){};m.push(b||w)}})}function v(){m.forEach(function(d){return d()}),m=[]}return p}}var he={passive:!0};function Or(e){var t=e.state,r=e.instance,a=e.options,n=a.scroll,s=n===void 0?!0:n,f=a.resize,o=f===void 0?!0:f,i=B(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&l.forEach(function(u){u.addEventListener("scroll",r.update,he)}),o&&i.addEventListener("resize",r.update,he),function(){s&&l.forEach(function(u){u.removeEventListener("scroll",r.update,he)}),o&&i.removeEventListener("resize",r.update,he)}}const kt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Or,data:{}};function Ar(e){var t=e.state,r=e.name;t.modifiersData[r]=xt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Er={name:"popperOffsets",enabled:!0,phase:"read",fn:Ar,data:{}};var kr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function $r(e,t){var r=e.x,a=e.y,n=t.devicePixelRatio||1;return{x:_(r*n)/n||0,y:_(a*n)/n||0}}function ft(e){var t,r=e.popper,a=e.popperRect,n=e.placement,s=e.variation,f=e.offsets,o=e.position,i=e.gpuAcceleration,l=e.adaptive,u=e.roundOffsets,m=e.isFixed,g=f.x,p=g===void 0?0:g,h=f.y,v=h===void 0?0:h,d=typeof u=="function"?u({x:p,y:v}):{x:p,y:v};p=d.x,v=d.y;var y=f.hasOwnProperty("x"),x=f.hasOwnProperty("y"),A=T,c=C,b=window;if(l){var w=le(r),O="clientHeight",$="clientWidth";if(w===B(r)&&(w=F(r),V(w).position!=="static"&&o==="absolute"&&(O="scrollHeight",$="scrollWidth")),w=w,n===C||(n===T||n===W)&&s===ue){c=R;var k=m&&w===b&&b.visualViewport?b.visualViewport.height:w[O];v-=k-a.height,v*=i?1:-1}if(n===T||(n===C||n===R)&&s===ue){A=W;var E=m&&w===b&&b.visualViewport?b.visualViewport.width:w[$];p-=E-a.width,p*=i?1:-1}}var D=Object.assign({position:o},l&&kr),S=u===!0?$r({x:p,y:v},B(r)):{x:p,y:v};if(p=S.x,v=S.y,i){var j;return Object.assign({},D,(j={},j[c]=x?"0":"",j[A]=y?"0":"",j.transform=(b.devicePixelRatio||1)<=1?"translate("+p+"px, "+v+"px)":"translate3d("+p+"px, "+v+"px, 0)",j))}return Object.assign({},D,(t={},t[c]=x?v+"px":"",t[A]=y?p+"px":"",t.transform="",t))}function Dr(e){var t=e.state,r=e.options,a=r.gpuAcceleration,n=a===void 0?!0:a,s=r.adaptive,f=s===void 0?!0:s,o=r.roundOffsets,i=o===void 0?!0:o,l={placement:H(t.placement),variation:re(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,ft(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:f,roundOffsets:i})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,ft(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:i})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const $t={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Dr,data:{}};function jr(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var a=t.styles[r]||{},n=t.attributes[r]||{},s=t.elements[r];!M(s)||!N(s)||(Object.assign(s.style,a),Object.keys(n).forEach(function(f){var o=n[f];o===!1?s.removeAttribute(f):s.setAttribute(f,o===!0?"":o)}))})}function Pr(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(a){var n=t.elements[a],s=t.attributes[a]||{},f=Object.keys(t.styles.hasOwnProperty(a)?t.styles[a]:r[a]),o=f.reduce(function(i,l){return i[l]="",i},{});!M(n)||!N(n)||(Object.assign(n.style,o),Object.keys(s).forEach(function(i){n.removeAttribute(i)}))})}}const Cr={name:"applyStyles",enabled:!0,phase:"write",fn:jr,effect:Pr,requires:["computeStyles"]};var Tr=[kt,Er,$t,Cr],Br={left:"right",right:"left",bottom:"top",top:"bottom"};function we(e){return e.replace(/left|right|bottom|top/g,function(t){return Br[t]})}var Mr={start:"end",end:"start"};function ut(e){return e.replace(/start|end/g,function(t){return Mr[t]})}function Sr(e,t){t===void 0&&(t={});var r=t,a=r.placement,n=r.boundary,s=r.rootBoundary,f=r.padding,o=r.flipVariations,i=r.allowedAutoPlacements,l=i===void 0?bt:i,u=re(a),m=u?o?nt:nt.filter(function(h){return re(h)===u}):pe,g=m.filter(function(h){return l.indexOf(h)>=0});g.length===0&&(g=m);var p=g.reduce(function(h,v){return h[v]=Xe(e,{placement:v,boundary:n,rootBoundary:s,padding:f})[H(v)],h},{});return Object.keys(p).sort(function(h,v){return p[h]-p[v]})}function Lr(e){if(H(e)===qe)return[];var t=we(e);return[ut(e),t,ut(t)]}function Rr(e){var t=e.state,r=e.options,a=e.name;if(!t.modifiersData[a]._skip){for(var n=r.mainAxis,s=n===void 0?!0:n,f=r.altAxis,o=f===void 0?!0:f,i=r.fallbackPlacements,l=r.padding,u=r.boundary,m=r.rootBoundary,g=r.altBoundary,p=r.flipVariations,h=p===void 0?!0:p,v=r.allowedAutoPlacements,d=t.options.placement,y=H(d),x=y===d,A=i||(x||!h?[we(d)]:Lr(d)),c=[d].concat(A).reduce(function(Z,z){return Z.concat(H(z)===qe?Sr(t,{placement:z,boundary:u,rootBoundary:m,padding:l,flipVariations:h,allowedAutoPlacements:v}):z)},[]),b=t.rects.reference,w=t.rects.popper,O=new Map,$=!0,k=c[0],E=0;E<c.length;E++){var D=c[E],S=H(D),j=re(D)===te,q=[C,R].indexOf(S)>=0,U=q?"width":"height",P=Xe(t,{placement:D,boundary:u,rootBoundary:m,altBoundary:g,padding:l}),L=q?j?W:T:j?R:C;b[U]>w[U]&&(L=we(L));var ce=we(L),X=[];if(s&&X.push(P[S]<=0),o&&X.push(P[L]<=0,P[ce]<=0),X.every(function(Z){return Z})){k=D,$=!1;break}O.set(D,X)}if($)for(var de=h?3:1,Ee=function(z){var ne=c.find(function(me){var I=O.get(me);if(I)return I.slice(0,z).every(function(ke){return ke})});if(ne)return k=ne,"break"},ae=de;ae>0;ae--){var ve=Ee(ae);if(ve==="break")break}t.placement!==k&&(t.modifiersData[a]._skip=!0,t.placement=k,t.reset=!0)}}const Wr={name:"flip",enabled:!0,phase:"main",fn:Rr,requiresIfExists:["offset"],data:{_skip:!1}};function Hr(e,t,r){var a=H(e),n=[T,C].indexOf(a)>=0?-1:1,s=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,f=s[0],o=s[1];return f=f||0,o=(o||0)*n,[T,W].indexOf(a)>=0?{x:o,y:f}:{x:f,y:o}}function Nr(e){var t=e.state,r=e.options,a=e.name,n=r.offset,s=n===void 0?[0,0]:n,f=bt.reduce(function(u,m){return u[m]=Hr(m,t.rects,s),u},{}),o=f[t.placement],i=o.x,l=o.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=i,t.modifiersData.popperOffsets.y+=l),t.modifiersData[a]=f}const Vr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Nr};function zr(e){return e==="x"?"y":"x"}function fe(e,t,r){return K(e,Oe(t,r))}function Fr(e,t,r){var a=fe(e,t,r);return a>r?r:a}function qr(e){var t=e.state,r=e.options,a=e.name,n=r.mainAxis,s=n===void 0?!0:n,f=r.altAxis,o=f===void 0?!1:f,i=r.boundary,l=r.rootBoundary,u=r.altBoundary,m=r.padding,g=r.tether,p=g===void 0?!0:g,h=r.tetherOffset,v=h===void 0?0:h,d=Xe(t,{boundary:i,rootBoundary:l,padding:m,altBoundary:u}),y=H(t.placement),x=re(t.placement),A=!x,c=Ue(y),b=zr(c),w=t.modifiersData.popperOffsets,O=t.rects.reference,$=t.rects.popper,k=typeof v=="function"?v(Object.assign({},t.rects,{placement:t.placement})):v,E=typeof k=="number"?{mainAxis:k,altAxis:k}:Object.assign({mainAxis:0,altAxis:0},k),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,S={x:0,y:0};if(w){if(s){var j,q=c==="y"?C:T,U=c==="y"?R:W,P=c==="y"?"height":"width",L=w[c],ce=L+d[q],X=L-d[U],de=p?-$[P]/2:0,Ee=x===te?O[P]:$[P],ae=x===te?-$[P]:-O[P],ve=t.elements.arrow,Z=p&&ve?Fe(ve):{width:0,height:0},z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Ot(),ne=z[q],me=z[U],I=fe(0,O[P],Z[P]),ke=A?O[P]/2-de-I-ne-E.mainAxis:Ee-I-ne-E.mainAxis,Dt=A?-O[P]/2+de+I+me+E.mainAxis:ae+I+me+E.mainAxis,$e=t.elements.arrow&&le(t.elements.arrow),jt=$e?c==="y"?$e.clientTop||0:$e.clientLeft||0:0,Ie=(j=D==null?void 0:D[c])!=null?j:0,Pt=L+ke-Ie-jt,Ct=L+Dt-Ie,Ye=fe(p?Oe(ce,Pt):ce,L,p?K(X,Ct):X);w[c]=Ye,S[c]=Ye-L}if(o){var Je,Tt=c==="x"?C:T,Bt=c==="x"?R:W,Y=w[b],ge=b==="y"?"height":"width",Ke=Y+d[Tt],Ge=Y-d[Bt],De=[C,T].indexOf(y)!==-1,Ze=(Je=D==null?void 0:D[b])!=null?Je:0,Qe=De?Ke:Y-O[ge]-$[ge]-Ze+E.altAxis,_e=De?Y+O[ge]+$[ge]-Ze-E.altAxis:Ge,et=p&&De?Fr(Qe,Y,_e):fe(p?Qe:Ke,Y,p?_e:Ge);w[b]=et,S[b]=et-Y}t.modifiersData[a]=S}}const Ur={name:"preventOverflow",enabled:!0,phase:"main",fn:qr,requiresIfExists:["offset"]};var Xr=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,At(typeof t!="number"?t:Et(t,pe))};function Ir(e){var t,r=e.state,a=e.name,n=e.options,s=r.elements.arrow,f=r.modifiersData.popperOffsets,o=H(r.placement),i=Ue(o),l=[T,W].indexOf(o)>=0,u=l?"height":"width";if(!(!s||!f)){var m=Xr(n.padding,r),g=Fe(s),p=i==="y"?C:T,h=i==="y"?R:W,v=r.rects.reference[u]+r.rects.reference[i]-f[i]-r.rects.popper[u],d=f[i]-r.rects.reference[i],y=le(s),x=y?i==="y"?y.clientHeight||0:y.clientWidth||0:0,A=v/2-d/2,c=m[p],b=x-g[u]-m[h],w=x/2-g[u]/2+A,O=fe(c,w,b),$=i;r.modifiersData[a]=(t={},t[$]=O,t.centerOffset=O-w,t)}}function Yr(e){var t=e.state,r=e.options,a=r.element,n=a===void 0?"[data-popper-arrow]":a;n!=null&&(typeof n=="string"&&(n=t.elements.popper.querySelector(n),!n)||wt(t.elements.popper,n)&&(t.elements.arrow=n))}const Jr={name:"arrow",enabled:!0,phase:"main",fn:Ir,effect:Yr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},Kr=xr({defaultModifiers:[...Tr,Vr,Wr,Ur,$t,kt,Jr]});function Gr({locked:e=!1,overflowPadding:t=8,offsetDistance:r=8,offsetSkid:a=0,gpuAcceleration:n=!0,adaptive:s=!0,scroll:f=!0,resize:o=!0,arrow:i=!1,placement:l,strategy:u},m){const g=be(null),p=be(null),h=be(null);return Lt(()=>{Rt(v=>{if(!p.value||!g.value&&!(m!=null&&m.value))return;const d=rt(p),y=rt(g);if(!(d instanceof HTMLElement)||!y)return;const x={modifiers:[{name:"flip",enabled:!e},{name:"preventOverflow",options:{padding:t}},{name:"offset",options:{offset:[a,r]}},{name:"computeStyles",options:{adaptive:s,gpuAcceleration:n}},{name:"eventListeners",options:{scroll:f,resize:o}},{name:"arrow",enabled:i}]};l&&(x.placement=l),u&&(x.strategy=u),h.value=Kr(y,d,x),v(h.value.destroy)})}),[g,p,h]}const Te=pt(xe.ui.strategy,xe.ui.tooltip,Xt),Zr=ct({components:{UKbd:mt},inheritAttrs:!1,props:{text:{type:String,default:null},prevent:{type:Boolean,default:!1},shortcuts:{type:Array,default:()=>[]},openDelay:{type:Number,default:()=>Te.default.openDelay},closeDelay:{type:Number,default:()=>Te.default.closeDelay},popper:{type:Object,default:()=>({})},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:r}=vt("tooltip",Be(e,"ui"),Te,Be(e,"class")),a=dt(()=>Wt({},e.popper,t.value.popper)),[n,s]=Gr(a.value),f=be(!1);let o=null,i=null;function l(){i&&(clearTimeout(i),i=null),!f.value&&(o=o||setTimeout(()=>{f.value=!0,o=null},e.openDelay))}function u(){o&&(clearTimeout(o),o=null),f.value&&(i=i||setTimeout(()=>{f.value=!1,i=null},e.closeDelay))}return{ui:t,attrs:r,popper:a,trigger:n,container:s,open:f,onMouseEnter:l,onMouseLeave:u}}});function Qr(e,t,r,a,n,s){const f=mt;return J(),Q("div",Le({ref:"trigger",class:e.ui.wrapper},e.attrs,{onMouseenter:t[0]||(t[0]=(...o)=>e.onMouseEnter&&e.onMouseEnter(...o)),onMouseleave:t[1]||(t[1]=(...o)=>e.onMouseLeave&&e.onMouseLeave(...o))}),[Me(e.$slots,"default",{open:e.open},()=>[ye(" Hover ")]),e.open&&!e.prevent?(J(),Q("div",{key:0,ref:"container",class:oe([e.ui.container,e.ui.width])},[Ht(Ft,Le({appear:""},e.ui.transition),{default:tt(()=>{var o;return[je("div",null,[e.popper.arrow?(J(),Q("div",{key:0,"data-popper-arrow":"",class:oe(Object.values(e.ui.arrow))},null,2)):Pe("",!0),je("div",{class:oe([e.ui.base,e.ui.background,e.ui.color,e.ui.rounded,e.ui.shadow,e.ui.ring])},[Me(e.$slots,"text",{},()=>[ye(Se(e.text),1)]),(o=e.shortcuts)!=null&&o.length?(J(),Q("span",{key:0,class:oe(e.ui.shortcuts)},[je("span",{class:oe(e.ui.middot)},"·",2),(J(!0),Q(Nt,null,Vt(e.shortcuts,i=>(J(),zt(f,{key:i,size:"xs"},{default:tt(()=>[ye(Se(i),1)]),_:2},1024))),128))],2)):Pe("",!0)],2)])]}),_:3},16)],2)):Pe("",!0)],16)}const ra=lt(Zr,[["render",Qr]]);export{ra as _};