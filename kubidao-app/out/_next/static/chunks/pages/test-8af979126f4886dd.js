(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5378],{14045:function(e,l,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test",function(){return r(78039)}])},78039:function(e,l,r){"use strict";r.r(l);var t=r(85893),n=r(67294),i=r(57747),a=r(85970),s=r(5418),u=r(33090),o=r(57169),c=r(41731),d=r(14225),m=r(93104),h=r(74907);l.default=()=>{let{createEduModule:e,checkIsExecutive:l}=(0,m.Z)(),{educationHubAddress:r,nftMembershipContractAddress:f,address:x}=(0,h.f)(),[p,v]=(0,n.useState)(""),[b,j]=(0,n.useState)(""),[_,y]=(0,n.useState)(""),[N,g]=(0,n.useState)(["","","",""]),[C,k]=(0,n.useState)(""),[I,S]=(0,n.useState)(!1),F=(e,l)=>{let r=[...N];r[l]=e.target.value,g(r)},q=async l=>{if(l.preventDefault(),!p||!b||!_||N.some(e=>!e)||""===C){alert("Please fill in all fields");return}try{await e(r,p,b,_,N,C),alert("Module created successfully!")}catch(e){console.error("Error creating module:",e),alert("Failed to create module")}},w=async()=>{try{let e=await l(f,"0x1310cEdD03Cc8F6aE50F2Fb93848070FACB042b8");S(e),alert("Is user executive? ".concat(e))}catch(e){console.error("Error checking executive status:",e)}};return(0,t.jsxs)(i.xu,{p:6,children:[(0,t.jsxs)("form",{onSubmit:q,children:[(0,t.jsxs)(a.NI,{isRequired:!0,mb:4,children:[(0,t.jsx)(s.l,{children:"Module Title"}),(0,t.jsx)(u.I,{value:p,onChange:e=>v(e.target.value),placeholder:"Enter module title"})]}),(0,t.jsxs)(a.NI,{isRequired:!0,mb:4,children:[(0,t.jsx)(s.l,{children:"Module Description"}),(0,t.jsx)(o.g,{value:b,onChange:e=>j(e.target.value),placeholder:"Enter module description"})]}),(0,t.jsxs)(a.NI,{isRequired:!0,mb:4,children:[(0,t.jsx)(s.l,{children:"Payout"}),(0,t.jsx)(u.I,{value:_,onChange:e=>y(e.target.value),placeholder:"Enter payout amount (e.g. in ETH)"})]}),N.map((e,l)=>(0,t.jsxs)(a.NI,{isRequired:!0,mb:4,children:[(0,t.jsxs)(s.l,{children:["Answer ",l+1]}),(0,t.jsx)(u.I,{value:e,onChange:e=>F(e,l),placeholder:"Enter answer ".concat(l+1)})]},l)),(0,t.jsxs)(a.NI,{isRequired:!0,mb:4,children:[(0,t.jsx)(s.l,{children:"Select Correct Answer"}),(0,t.jsx)(c.P,{placeholder:"Select correct answer",value:C,onChange:e=>k(e.target.value),children:N.map((e,l)=>(0,t.jsxs)("option",{value:e,children:["Answer ",l+1,": ",e]},l))})]}),(0,t.jsx)(d.z,{type:"submit",colorScheme:"blue",mb:4,children:"Create Module"})]}),(0,t.jsx)(d.z,{onClick:w,colorScheme:"teal",children:"Check Executive Status"})]})}},28912:function(e,l,r){"use strict";r.d(l,{Y:function(){return i}});var t=r(85970),n=r(25432);function i(e){let{isDisabled:l,isInvalid:r,isReadOnly:i,isRequired:a,...s}=function(e){var l,r,i;let a=(0,t.NJ)(),{id:s,disabled:u,readOnly:o,required:c,isRequired:d,isInvalid:m,isReadOnly:h,isDisabled:f,onFocus:x,onBlur:p,...v}=e,b=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==a?void 0:a.hasFeedbackText)&&(null==a?void 0:a.isInvalid)&&b.push(a.feedbackId),(null==a?void 0:a.hasHelpText)&&b.push(a.helpTextId),{...v,"aria-describedby":b.join(" ")||void 0,id:null!=s?s:null==a?void 0:a.id,isDisabled:null!=(l=null!=u?u:f)?l:null==a?void 0:a.isDisabled,isReadOnly:null!=(r=null!=o?o:h)?r:null==a?void 0:a.isReadOnly,isRequired:null!=(i=null!=c?c:d)?i:null==a?void 0:a.isRequired,isInvalid:null!=m?m:null==a?void 0:a.isInvalid,onFocus:(0,n.v0)(null==a?void 0:a.onFocus,x),onBlur:(0,n.v0)(null==a?void 0:a.onBlur,p)}}(e);return{...s,disabled:l,readOnly:i,required:a,"aria-invalid":(0,n.Qm)(r),"aria-required":(0,n.Qm)(a),"aria-readonly":(0,n.Qm)(i)}}},85970:function(e,l,r){"use strict";r.d(l,{NI:function(){return p},NJ:function(){return x},e:function(){return h}});var t=r(55227),n=r(81103),i=r(16554),a=r(77030),s=r(33179),u=r(16914),o=r(25432),c=r(67294),d=r(85893),[m,h]=(0,t.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[f,x]=(0,t.k)({strict:!1,name:"FormControlContext"}),p=(0,i.G)(function(e,l){let r=(0,a.jC)("Form",e),{getRootProps:t,htmlProps:i,...h}=function(e){let{id:l,isRequired:r,isInvalid:t,isDisabled:i,isReadOnly:a,...s}=e,u=(0,c.useId)(),d=l||`field-${u}`,m=`${d}-label`,h=`${d}-feedback`,f=`${d}-helptext`,[x,p]=(0,c.useState)(!1),[v,b]=(0,c.useState)(!1),[j,_]=(0,c.useState)(!1),y=(0,c.useCallback)((e={},l=null)=>({id:f,...e,ref:(0,n.lq)(l,e=>{e&&b(!0)})}),[f]),N=(0,c.useCallback)((e={},l=null)=>({...e,ref:l,"data-focus":(0,o.PB)(j),"data-disabled":(0,o.PB)(i),"data-invalid":(0,o.PB)(t),"data-readonly":(0,o.PB)(a),id:void 0!==e.id?e.id:m,htmlFor:void 0!==e.htmlFor?e.htmlFor:d}),[d,i,j,t,a,m]),g=(0,c.useCallback)((e={},l=null)=>({id:h,...e,ref:(0,n.lq)(l,e=>{e&&p(!0)}),"aria-live":"polite"}),[h]),C=(0,c.useCallback)((e={},l=null)=>({...e,...s,ref:l,role:"group","data-focus":(0,o.PB)(j),"data-disabled":(0,o.PB)(i),"data-invalid":(0,o.PB)(t),"data-readonly":(0,o.PB)(a)}),[s,i,j,t,a]);return{isRequired:!!r,isInvalid:!!t,isReadOnly:!!a,isDisabled:!!i,isFocused:!!j,onFocus:()=>_(!0),onBlur:()=>_(!1),hasFeedbackText:x,setHasFeedbackText:p,hasHelpText:v,setHasHelpText:b,id:d,labelId:m,feedbackId:h,helpTextId:f,htmlProps:s,getHelpTextProps:y,getErrorMessageProps:g,getRootProps:C,getLabelProps:N,getRequiredIndicatorProps:(0,c.useCallback)((e={},l=null)=>({...e,ref:l,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[])}}((0,s.Lr)(e)),x=(0,o.cx)("chakra-form-control",e.className);return(0,d.jsx)(f,{value:h,children:(0,d.jsx)(m,{value:r,children:(0,d.jsx)(u.m.div,{...t({},l),className:x,__css:r.container})})})});p.displayName="FormControl",(0,i.G)(function(e,l){let r=x(),t=h(),n=(0,o.cx)("chakra-form__helper-text",e.className);return(0,d.jsx)(u.m.div,{...null==r?void 0:r.getHelpTextProps(e,l),__css:t.helperText,className:n})}).displayName="FormHelperText"},5418:function(e,l,r){"use strict";r.d(l,{l:function(){return c}});var t=r(85970),n=r(16554),i=r(77030),a=r(33179),s=r(16914),u=r(25432),o=r(85893),c=(0,n.G)(function(e,l){var r;let n=(0,i.mq)("FormLabel",e),c=(0,a.Lr)(e),{className:m,children:h,requiredIndicator:f=(0,o.jsx)(d,{}),optionalIndicator:x=null,...p}=c,v=(0,t.NJ)(),b=null!=(r=null==v?void 0:v.getLabelProps(p,l))?r:{ref:l,...p};return(0,o.jsxs)(s.m.label,{...b,className:(0,u.cx)("chakra-form__label",c.className),__css:{display:"block",textAlign:"start",...n},children:[h,(null==v?void 0:v.isRequired)?f:x]})});c.displayName="FormLabel";var d=(0,n.G)(function(e,l){let r=(0,t.NJ)(),n=(0,t.e)();if(!(null==r?void 0:r.isRequired))return null;let i=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,o.jsx)(s.m.span,{...null==r?void 0:r.getRequiredIndicatorProps(e,l),__css:n.requiredIndicator,className:i})});d.displayName="RequiredIndicator"},33090:function(e,l,r){"use strict";r.d(l,{I:function(){return c}});var t=r(28912),n=r(16554),i=r(77030),a=r(33179),s=r(16914),u=r(25432),o=r(85893),c=(0,n.G)(function(e,l){let{htmlSize:r,...n}=e,c=(0,i.jC)("Input",n),d=(0,a.Lr)(n),m=(0,t.Y)(d),h=(0,u.cx)("chakra-input",e.className);return(0,o.jsx)(s.m.input,{size:r,...m,__css:c.field,ref:l,className:h})});c.displayName="Input",c.id="Input"},57747:function(e,l,r){"use strict";r.d(l,{xu:function(){return a}});var t=r(16914),n=r(16554),i=r(85893),a=(0,t.m)("div");a.displayName="Box";var s=(0,n.G)(function(e,l){let{size:r,centerContent:t=!0,...n}=e;return(0,i.jsx)(a,{ref:l,boxSize:r,__css:{...t?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...n})});s.displayName="Square",(0,n.G)(function(e,l){let{size:r,...t}=e;return(0,i.jsx)(s,{size:r,ref:l,borderRadius:"9999px",...t})}).displayName="Circle"},41731:function(e,l,r){"use strict";r.d(l,{P:function(){return m}});var t=r(25432),n=r(16554),i=r(16914),a=r(85893),s=(0,n.G)(function(e,l){let{children:r,placeholder:n,className:s,...u}=e;return(0,a.jsxs)(i.m.select,{...u,ref:l,className:(0,t.cx)("chakra-select",s),children:[n&&(0,a.jsx)("option",{value:"",children:n}),r]})});s.displayName="SelectField";var u=r(28912),o=r(77030),c=r(33179),d=r(67294),m=(0,n.G)((e,l)=>{var r;let n=(0,o.jC)("Select",e),{rootProps:d,placeholder:m,icon:h,color:f,height:p,h:v,minH:b,minHeight:j,iconColor:_,iconSize:y,...N}=(0,c.Lr)(e),[g,C]=function(e,l){let r={},t={};for(let[n,i]of Object.entries(e))l.includes(n)?r[n]=i:t[n]=i;return[r,t]}(N,c.oE),k=(0,u.Y)(C),I={paddingEnd:"2rem",...n.field,_focus:{zIndex:"unset",...null==(r=n.field)?void 0:r._focus}};return(0,a.jsxs)(i.m.div,{className:"chakra-select__wrapper",__css:{width:"100%",height:"fit-content",position:"relative",color:f},...g,...d,children:[(0,a.jsx)(s,{ref:l,height:null!=v?v:p,minH:null!=b?b:j,placeholder:m,...k,__css:I,children:e.children}),(0,a.jsx)(x,{"data-disabled":(0,t.PB)(k.disabled),...(_||f)&&{color:_||f},__css:n.icon,...y&&{fontSize:y},children:h})]})});m.displayName="Select";var h=e=>(0,a.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,a.jsx)("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})}),f=(0,i.m)("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),x=e=>{let{children:l=(0,a.jsx)(h,{}),...r}=e,t=(0,d.cloneElement)(l,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return(0,a.jsx)(f,{...r,className:"chakra-select__icon-wrapper",children:(0,d.isValidElement)(l)?t:null})};x.displayName="SelectIcon"},57169:function(e,l,r){"use strict";r.d(l,{g:function(){return d}});var t=r(28912),n=r(16554),i=r(77030),a=r(33179),s=r(16914),u=r(25432),o=r(85893),c=["h","minH","height","minHeight"],d=(0,n.G)((e,l)=>{let r=(0,i.mq)("Textarea",e),{className:n,rows:d,...m}=(0,a.Lr)(e),h=(0,t.Y)(m),f=d?function(e,l=[]){let r=Object.assign({},e);for(let e of l)e in r&&delete r[e];return r}(r,c):r;return(0,o.jsx)(s.m.textarea,{ref:l,rows:d,...h,className:(0,u.cx)("chakra-textarea",n),__css:f})});d.displayName="Textarea"}},function(e){e.O(0,[2888,9774,179],function(){return e(e.s=14045)}),_N_E=e.O()}]);