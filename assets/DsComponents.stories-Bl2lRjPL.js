"use client";import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-CpyhhMkF.js";import{t as n}from"./jsx-runtime-DwqL_Y-t.js";import{n as r,r as i,t as a}from"./use-merge-refs-C9Va2EMf.js";import{i as o,n as s,r as c,t as l}from"./field-BTDyCfBO.js";import{n as u,r as d,t as f}from"./button-BGI11366.js";import{t as p}from"./lite-Bi5SuAl9.js";import{t as m}from"./alert-DqLqWV1C.js";import{a as h,i as g,n as _,r as v,t as ee}from"./floating-ui.dom-CcdE1Adh.js";import{t as y}from"./input-MzJ4xW3r.js";import{t as b}from"./details-BVUCORVF.js";import{t as x}from"./heading-BXBl6J3v.js";var S=n(),C=e(t(),1),w=(0,C.createContext)({elements:{current:new Map},getOrderedItems:()=>[],setFocusableValue:()=>{},onShiftTab:()=>{},focusableValue:null,orientation:`horizontal`}),te=(0,C.forwardRef)(({activeValue:e,asChild:t,orientation:n=`horizontal`,onBlur:i,onFocus:o,...s},c)=>{let l=t?r:`div`,u=e??null,[d,f]=(0,C.useState)(u),[p,m]=(0,C.useState)(!1),h=(0,C.useRef)(new Map),g=(0,C.useRef)(null),_=a([c,g]),v=()=>{if(!g.current)return[];let e=Array.from(g.current.querySelectorAll(`[data-roving-tabindex-item]`));return Array.from(h.current).sort((t,n)=>e.indexOf(t[1])-e.indexOf(n[1])).map(([e,t])=>({value:e,element:t}))};return(0,C.useEffect)(()=>{f(u)},[u]),(0,S.jsx)(w.Provider,{value:{elements:h,getOrderedItems:v,focusableValue:d,setFocusableValue:f,onShiftTab:()=>{m(!0)},orientation:n},children:(0,S.jsx)(l,{...s,tabIndex:p?-1:0,onBlur:t=>{i?.(t),m(!1),f(e??null)},onFocus:t=>{if(o?.(t),t.target!==t.currentTarget)return;let n=v();n.length!==0&&(d==null?e==null?n.at(0)?.element.focus():h.current.get(e)?.focus():h.current.get(d)?.focus())},ref:_})})}),T=e=>{let{elements:t,getOrderedItems:n,setFocusableValue:r,focusableValue:i,onShiftTab:a,orientation:o}=(0,C.useContext)(w);return{getOrderedItems:n,isFocusable:i===e,orientation:o,getRovingProps:n=>({...n,ref:n=>{n?t.current.set(e,n):t.current.delete(e)},onKeyDown:e=>{if(n?.onKeyDown?.(e),e.shiftKey&&e.key===`Tab`){a();return}},onFocus:t=>{n?.onFocus?.(t),r(e)},"data-roving-tabindex-item":!0,tabIndex:i===e?0:-1})}};function E(e,t){let n=e.findIndex(e=>e.value===t);return e.at(n===e.length-1?0:n+1)}function D(e,t){let n=e.findIndex(e=>e.value===t);return e.at(n===0?-1:n-1)}var ne=(0,C.forwardRef)(({value:e,asChild:t,...n},i)=>{let o=t?r:`div`,s=e??(typeof n.children==`string`?n.children:``),{getOrderedItems:c,getRovingProps:l,orientation:u}=T(s),d=l({onKeyDown:e=>{n?.onKeyDown?.(e);let t=c(),r;switch(u){case`horizontal`:e.key===`ArrowRight`&&(r=E(t,s)),e.key===`ArrowLeft`&&(r=D(t,s));break;case`vertical`:e.key===`ArrowDown`&&(r=E(t,s)),e.key===`ArrowUp`&&(r=D(t,s));break;case`ambiguous`:[`ArrowRight`,`ArrowDown`].includes(e.key)&&(r=E(t,s)),[`ArrowLeft`,`ArrowUp`].includes(e.key)&&(r=D(t,s))}e.key===`Home`&&(r=t[0]),e.key===`End`&&(r=t[t.length-1]),r&&(e.preventDefault(),r.element.focus())}}),f=a([i,d.ref]);return(0,S.jsx)(o,{...n,...d,ref:f,children:n.children})}),re=(e,t,n)=>{let r=(n-1)/2,i=Math.max(1,Math.min(Math.max(e-Math.floor(r),1),t-n+1)),a=Math.min(Math.max(e+Math.ceil(r),n),t),o=Array.from({length:a+1-i},(e,t)=>t+i);return n>4&&i>1&&o.splice(0,2,1,0),n>3&&a<t&&o.splice(-2,2,0,t),o},ie=({currentPage:e=1,setCurrentPage:t,onChange:n,totalPages:r=1,showPages:i=7})=>(0,C.useMemo)(()=>{let a=e<r,o=e!==1,s=e=>i=>{if(e<1||e>r)return i.preventDefault();n?.(i,e),i.defaultPrevented||t?.(e)};return{pages:re(e,r,i).map((t,n)=>({page:t||`ellipsis`,itemKey:t?`page-${t}`:`ellipsis-${n}`,buttonProps:t?{"aria-current":t===e?`page`:void 0,onClick:s(t),variant:t===e?`primary`:`tertiary`}:null})),prevButtonProps:{"aria-hidden":!o,onClick:s(e-1),variant:`tertiary`},nextButtonProps:{"aria-hidden":!a,onClick:s(e+1),variant:`tertiary`},hasPrev:o,hasNext:a}},[e,r,i]),ae=(0,C.forwardRef)(function({className:e,count:t,maxCount:n,variant:r=`base`,...i},a){return(0,S.jsx)(`span`,{className:p(`ds-badge`,e),"data-count":t&&n&&t>n?`${n}+`:t,"data-variant":r,ref:a,...i})}),oe=(0,C.forwardRef)(function({className:e,overlap:t=`rectangle`,placement:n=`top-right`,...r},i){return(0,S.jsx)(`span`,{className:p(`ds-badge--position`,e),"data-overlap":t,"data-placement":n,ref:i,...r})}),se=Object.assign(ae,{Position:oe});se.Position.displayName=`Badge.Position`;var ce=(0,C.forwardRef)(({asChild:e,className:t,...n},i)=>(0,S.jsx)(e?r:`a`,{className:p(`ds-link`,t),ref:i,...n}));ce.displayName=`Link`;var le=(e,t)=>{let n=e.value;e.value=t;let r=e._valueTracker;r!==void 0&&r.setValue(n),e.dispatchEvent(new Event(`change`,{bubbles:!0}))},ue=(0,C.forwardRef)(function({asChild:e,className:t,...n},i){return(0,S.jsx)(e?r:`button`,{className:p(`ds-chip`,t),type:e?void 0:`button`,ref:i,...n})}),de=(0,C.forwardRef)(function(e,t){return(0,S.jsx)(ue,{"data-removable":!0,ref:t,...e})}),fe=(0,C.forwardRef)(function({asChild:e,children:t,className:n,"data-size":a,"data-color":o,...s},c){let l=s.type??`checkbox`;return(0,S.jsxs)(e?r:`label`,{className:p(`ds-chip`,n),"data-size":a,"data-color":o,ref:c,children:[(0,S.jsx)(y,{...s,type:l}),(0,S.jsx)(i,{children:t})]})}),O={Button:ue,Checkbox:fe,Radio:(0,C.forwardRef)(function(e,t){return(0,S.jsx)(fe,{ref:t,type:`radio`,...e})}),Removable:de};O.Button.displayName=`Chip.Button`,O.Checkbox.displayName=`Chip.Checkbox`,O.Radio.displayName=`Chip.Radio`,O.Removable.displayName=`Chip.Removable`;var pe=(0,C.forwardRef)(function({"data-size":e,className:t,style:n,children:r,label:i,description:a,error:s,...u},d){return(0,S.jsxs)(l,{"data-size":e,className:t,style:n,children:[(0,S.jsx)(y,{type:`checkbox`,ref:d,...u}),!!i&&(0,S.jsx)(o,{weight:`regular`,children:i}),!!a&&(0,S.jsx)(`div`,{"data-field":`description`,children:a}),!!s&&(0,S.jsx)(c,{children:s})]})}),me=(0,C.createContext)({current:null}),he=({children:e})=>{let t=(0,C.useRef)(null);return(0,S.jsx)(me.Provider,{value:t,children:e})};he.displayName=`DialogTriggerContext`;var ge=(0,C.forwardRef)(function({asChild:e,children:t,className:n,placement:i=`center`,closeButton:o=`Lukk dialogvindu`,closedby:s=`closerequest`,modal:c=!0,onClose:l,open:u,...d},m){let h=(0,C.useContext)(me),g=(0,C.useRef)(null),_=e?r:`dialog`,v=a([h,m,g]),ee=c?`showModal`:`show`;return(0,C.useEffect)(()=>g.current?.[u?ee:`close`](),[u]),(0,C.useEffect)(()=>{let e=g.current,t=t=>{if(t.defaultPrevented)return;let{clientY:n,clientX:r,target:i}=t;if(i instanceof Element&&t.type===`click`&&i.closest(`[data-command="close"]`))return e?.close();if(!(e&&`closedBy`in e)){if(t instanceof KeyboardEvent)return s===`none`&&t.key===`Escape`&&t.preventDefault();if(!window.getSelection()?.toString()&&e&&i===e&&s===`any`){let{top:t,left:i,right:a,bottom:o}=e.getBoundingClientRect();t<=n&&n<=o&&i<=r&&r<=a||e?.close()}}},n=()=>{let t=e?.querySelector(`[autofocus]`);document.activeElement!==t&&t?.focus()};return e?.addEventListener(`animationend`,n),e?.addEventListener(`click`,t),e?.addEventListener(`keydown`,t),()=>{e?.removeEventListener(`animationend`,n),e?.removeEventListener(`click`,t),e?.removeEventListener(`keydown`,t)}},[s]),(0,C.useEffect)(()=>{let e=e=>l?.(e),t=g.current;return t?.addEventListener(`close`,e),()=>t?.removeEventListener(`close`,e)},[l]),(0,S.jsxs)(_,{className:p(`ds-dialog`,n),ref:v,"data-placement":i,"data-modal":c,closedby:s,...d,children:[o!==!1&&(0,S.jsx)(f,{"aria-label":o,"data-color":`neutral`,icon:!0,variant:`tertiary`,"data-command":`close`}),t]})}),_e=(0,C.forwardRef)(function({asChild:e,className:t,...n},i){return(0,S.jsx)(e?r:`div`,{className:p(`ds-dialog__block`,t),ref:i,...n})}),ve=(0,C.forwardRef)(function({asChild:e,...t},n){let i=(0,C.useContext)(me),a=e?r:f;return(0,S.jsx)(a,{"aria-haspopup":`dialog`,onClick:()=>{i.current?.getAttribute(`data-modal`)===`true`?i.current?.showModal():i.current?.show()},ref:n,...t})}),k=Object.assign(ge,{Block:_e,TriggerContext:he,Trigger:ve});k.Block.displayName=`Dialog.Block`,k.TriggerContext.displayName=`Dialog.TriggerContext`,k.Trigger.displayName=`Dialog.Trigger`;var ye=({children:e})=>{let[t,n]=(0,C.useState)((0,C.useId)());return(0,S.jsx)(A.Provider,{value:{popoverId:t,setPopoverId:n},children:e})};ye.displayName=`PopoverTriggerContext`;var A=(0,C.createContext)({}),be=(0,C.forwardRef)(function({id:e,className:t,onClose:n,onOpen:i,open:o,variant:s=`default`,placement:c=`top`,autoPlacement:l=!0,asChild:u=!1,...d},f){let m=u?r:`div`,y=(0,C.useRef)(null),b=a([y,f]),{popoverId:x,setPopoverId:w}=(0,C.useContext)(A),[te,T]=(0,C.useState)(!1),E=o??te;return(0,C.useEffect)(()=>{let e=y.current,t=t=>{let r=t.target,a=r?.closest?.(`[popovertarget="${e?.id}"]`),o=!a&&!e?.contains(r);a&&t.preventDefault(),E&&(a||o)?(T(!1),n?.()):!E&&a&&(T(!0),i?.())},r=e=>{e.key!==`Escape`||!E||(e.preventDefault(),T(!1),n?.())};return e?.togglePopover?.(E),document.addEventListener(`click`,t,!0),document.addEventListener(`keydown`,r),()=>{document.removeEventListener(`click`,t,!0),document.removeEventListener(`keydown`,r)}},[E]),(0,C.useEffect)(()=>{let e=y.current,t=document.querySelector(`[popovertarget="${e?.id}"]`);if(e&&t&&E)return ee(t,e,()=>{_(t,e,{placement:c,strategy:`fixed`,middleware:[g(e=>{let t=getComputedStyle(e.elements.floating,`::before`);return parseFloat(t.height)}),...l?[v({fallbackAxisSideDirection:`start`}),h()]:[],xe]}).then(({x:t,y:n})=>{e.style.translate=`${Math.round(t)}px ${Math.round(n)}px`})})},[E,c,e,l]),(0,C.useEffect)(()=>{e&&w?.(e)},[e]),(0,S.jsx)(m,{className:p(`ds-popover`,t),id:e||x,popover:`manual`,"data-variant":s,ref:b,...d})}),xe={name:`ArrowPseudoElement`,fn(e){let{elements:t,rects:n,placement:r}=e,i=`${Math.round(n.reference.width/2+n.reference.x-e.x)}px`,a=`${Math.round(n.reference.height/2+n.reference.y-e.y)}px`;switch(n.reference.width>n.floating.width&&(i=`${Math.round(n.floating.width/2)}px`),n.reference.height>n.floating.height&&(a=`${Math.round(n.floating.height/2)}px`),r.split(`-`)[0]){case`top`:a=`100%`;break;case`right`:i=`0`;break;case`bottom`:a=`0`;break;case`left`:i=`100%`;break}return t.floating.setAttribute(`data-placement`,r.split(`-`)[0]),t.floating.style.setProperty(`--ds-popover-arrow-x`,i),t.floating.style.setProperty(`--ds-popover-arrow-y`,a),e}},Se=(0,C.forwardRef)(function({id:e,inline:t,asChild:n,...i},a){let{popoverId:o}=(0,C.useContext)(A);return(0,S.jsx)(n?r:t?`button`:f,{ref:a,...Object.assign({[C.version.startsWith(`19`)?`popoverTarget`:`popovertarget`]:o,...t?{"data-popover":`inline`}:{}},i)})}),Ce=(0,C.forwardRef)(function({"aria-label":e=`Sidenavigering`,asChild:t,className:n,...i},a){return(0,S.jsx)(t?r:`nav`,{"aria-label":e,className:p(`ds-pagination`,n),ref:a,...i})}),we=(0,C.forwardRef)(function(e,t){return(0,S.jsx)(f,{ref:t,...e})}),Te=(0,C.forwardRef)(function({asChild:e,className:t,...n},i){return(0,S.jsx)(e?r:`li`,{ref:i,...n})}),Ee=(0,C.forwardRef)(function({asChild:e,...t},n){return(0,S.jsx)(e?r:`ul`,{ref:n,...t})}),j=Object.assign(Ce,{List:Ee,Item:Te,Button:we});j.List.displayName=`Pagination.List`,j.Item.displayName=`Pagination.Item`,j.Button.displayName=`Pagination.Button`;var M=Object.assign(be,{TriggerContext:ye,Trigger:Se});M.TriggerContext.displayName=`Popover.TriggerContext`,M.Trigger.displayName=`Popover.Trigger`;var De=(0,C.forwardRef)(function({className:e,...t},n){return(0,S.jsx)(`div`,{ref:n,className:p(`ds-search`,e),...t})}),Oe=(0,C.forwardRef)(function({children:e=`Søk`,...t},n){return(0,S.jsx)(f,{ref:n,type:`submit`,...t,children:e})}),ke=(0,C.forwardRef)(function({"aria-label":e=`Tøm`,onClick:t,...n},r){return(0,S.jsx)(f,{ref:r,variant:`tertiary`,type:`reset`,"aria-label":e,onClick:e=>{let n=e.target,r=null;if(n instanceof HTMLElement&&(r=n.closest(`.ds-search`)?.querySelector(`input`)),!r)throw Error(`Input is missing`);if(!(r instanceof HTMLInputElement))throw Error(`Input is not an input element`);e.preventDefault(),le(r,``),r.focus(),t?.(e)},icon:!0,...n})}),Ae=(0,C.forwardRef)(function({...e},t){return(0,S.jsx)(y,{ref:t,type:`search`,placeholder:``,...e})}),N=Object.assign(De,{Clear:ke,Button:Oe,Input:Ae});N.Clear.displayName=`Search.Clear`,N.Button.displayName=`Search.Button`,N.Input.displayName=`Search.Input`;var P=(0,C.forwardRef)(function({asChild:e,className:t,height:n,style:i,variant:o=`rectangle`,width:s,...c},l){let u=e?r:`span`,f=o===`text`,m=a([d(`ds-skeleton-opacity-fade`),l]);return(0,S.jsx)(u,{"aria-hidden":`true`,className:p(`ds-skeleton`,t),"data-text":f?`-`.repeat(Number(s)||1):void 0,"data-variant":o,ref:m,style:f?i:{width:s,height:n,...i},...c})}),F=(0,C.createContext)({}),je=(0,C.forwardRef)(function({value:e,defaultValue:t,className:n,onChange:r,...i},a){let o=(0,C.useRef)(null),s=e!==void 0,[c,l]=(0,C.useState)(t),[u,d]=(0,C.useState)(new Map),f=r;return s||(f=e=>{l(e),r?.(e)},e=c),(0,S.jsx)(F.Provider,{value:{value:e,defaultValue:t,onChange:f,tablistRef:o,panelButtonMap:u,setPanelButtonMap:d},children:(0,S.jsx)(`div`,{className:p(`ds-tabs`,n),ref:a,...i})})}),Me=(0,C.forwardRef)(function({children:e,...t},n){let{value:r,tablistRef:i}=(0,C.useContext)(F);return(0,S.jsx)(te,{role:`tablist`,activeValue:r,orientation:`ambiguous`,ref:a([n,i]),...t,children:e})}),Ne=(0,C.forwardRef)(function({children:e,value:t,id:n,...r},i){let{value:o,tablistRef:s,setPanelButtonMap:c}=(0,C.useContext)(F),l=t===o,u=(0,C.useId)(),d=n??`tabpanel-${u}`,[f,p]=(0,C.useState)(!1),[m,h]=(0,C.useState)(void 0),g=(0,C.useRef)(null),_=a([i,g]);return(0,C.useEffect)(()=>{g.current&&p(g.current.querySelectorAll(`button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])`).length>0)},[e]),(0,C.useEffect)(()=>{if(!s)return;let e=s.current?.querySelector(`[role="tab"][data-value="${t}"]`);h(e?e.id:void 0),e&&c?.(t=>new Map(t).set(e.id,d))},[s]),(0,S.jsx)(`div`,{ref:_,id:d,role:`tabpanel`,tabIndex:f?void 0:0,"aria-labelledby":m,hidden:!l,...r,children:e})}),Pe=(0,C.forwardRef)(function({value:e,id:t,onClick:n,...r},i){let a=(0,C.useContext)(F),o=(0,C.useId)(),s=t??`tab-${o}`;return(0,S.jsx)(ne,{value:e,...r,asChild:!0,children:(0,S.jsx)(`button`,{ref:i,id:s,"aria-selected":a.value===e,"data-value":e,role:`tab`,type:`button`,onClick:t=>{a.onChange?.(e),n?.(t)},"aria-controls":a.panelButtonMap?.get(s),...r})})}),I=Object.assign(je,{List:Me,Tab:Pe,Panel:Ne});I.Tab.displayName=`Tabs.Tab`,I.List.displayName=`Tabs.List`,I.Panel.displayName=`Tabs.Panel`;var Fe={title:`Atoms/DsComponents`,tags:[`autodocs`]},L={render:()=>(0,S.jsx)(m,{children:`This is an alert`})},R={render:()=>(0,S.jsx)(f,{children:`Click me`})},z={render:()=>(0,S.jsx)(x,{children:`Sample Heading`})},B={render:()=>(0,S.jsx)(s,{children:`Sample paragraph text`})},V={render:()=>(0,S.jsx)(se,{count:15,maxCount:9})},H={render:()=>(0,S.jsx)(u,{"aria-label":`Loading...`})},U={render:()=>(0,S.jsx)(pe,{label:`Accept terms and conditions`})},W={render:()=>(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,S.jsx)(O.Radio,{name:`my-chip`,defaultChecked:!0,children:`Chip Radio`}),(0,S.jsx)(O.Checkbox,{name:`my-chip`,defaultChecked:!0,children:`Chip Checkbox`}),(0,S.jsx)(O.Removable,{children:`Chip Removable`}),(0,S.jsx)(O.Button,{children:`Chip Button`})]})},G={render:()=>(0,S.jsxs)(b,{children:[(0,S.jsx)(b.Summary,{children:`Details summary`}),(0,S.jsx)(b.Content,{children:`Details content`})]})},K={render:()=>(0,S.jsxs)(k.TriggerContext,{children:[(0,S.jsx)(k.Trigger,{children:`Open Dialog`}),(0,S.jsxs)(k,{children:[(0,S.jsx)(x,{style:{marginBottom:`var(--ds-size-2)`},children:`Dialog header`}),(0,S.jsx)(s,{style:{marginBottom:`var(--ds-size-2)`},children:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati assumenda odio ducimus sunt et.`}),(0,S.jsx)(s,{"data-size":`sm`,children:`Dialog footer`})]})]})},q={render:()=>(0,S.jsx)(ce,{href:`#`,target:`_`,children:`Sample Link`})},J={render:()=>{let{pages:e,prevButtonProps:t,nextButtonProps:n}=ie({totalPages:10,showPages:7,currentPage:1});return(0,S.jsx)(j,{children:(0,S.jsxs)(j.List,{children:[(0,S.jsx)(j.Item,{children:(0,S.jsx)(j.Button,{"aria-label":`Forrige side`,...t,children:`Forrige`})}),e.map(({page:e,itemKey:t,buttonProps:n})=>(0,S.jsx)(j.Item,{children:typeof e==`number`&&(0,S.jsx)(j.Button,{...n,"aria-label":`Side ${e}`,children:e})},t)),(0,S.jsx)(j.Item,{children:(0,S.jsx)(j.Button,{"aria-label":`Neste side`,...n,children:`Neste`})})]})})}},Y={render:()=>(0,S.jsxs)(M.TriggerContext,{children:[(0,S.jsx)(M.Trigger,{children:`Open Popover`}),(0,S.jsxs)(M,{children:[(0,S.jsx)(x,{children:`Popover header`}),(0,S.jsx)(s,{children:`Popover content`})]})]})},X={render:()=>(0,S.jsxs)(N,{children:[(0,S.jsx)(N.Input,{"aria-label":`Søk`}),(0,S.jsx)(N.Clear,{}),(0,S.jsx)(N.Button,{})]})},Z={render:()=>(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[(0,S.jsx)(P,{}),(0,S.jsx)(P,{width:`100px`}),(0,S.jsx)(P,{height:`20px`}),(0,S.jsx)(P,{width:`200px`,height:`50px`})]})},Q={render:()=>(0,S.jsxs)(I,{defaultValue:`value1`,children:[(0,S.jsxs)(I.List,{children:[(0,S.jsx)(I.Tab,{value:`value1`,children:`Tab 1`}),(0,S.jsx)(I.Tab,{value:`value2`,children:`Tab 2`}),(0,S.jsx)(I.Tab,{value:`value3`,children:`Tab 3`})]}),(0,S.jsx)(I.Panel,{value:`value1`,children:`content 1`}),(0,S.jsx)(I.Panel,{value:`value2`,children:`content 2`}),(0,S.jsx)(I.Panel,{value:`value3`,children:`content 3`})]})},$={render:()=>(0,S.jsx)(c,{children:`Validation message content`})};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <DsAlert>This is an alert</DsAlert>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <DsButton>Click me</DsButton>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <DsHeading>Sample Heading</DsHeading>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <DsParagraph>Sample paragraph text</DsParagraph>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <DsBadge count={15} maxCount={9} />
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <DsSpinner aria-label="Loading..." />
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <DsCheckbox label="Accept terms and conditions" />
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      <DsChip.Radio name="my-chip" defaultChecked>
        Chip Radio
      </DsChip.Radio>
      <DsChip.Checkbox name="my-chip" defaultChecked>
        Chip Checkbox
      </DsChip.Checkbox>
      <DsChip.Removable>Chip Removable</DsChip.Removable>
      <DsChip.Button>Chip Button</DsChip.Button>
    </div>
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <DsDetails>
      <DsDetails.Summary>Details summary</DsDetails.Summary>
      <DsDetails.Content>Details content</DsDetails.Content>
    </DsDetails>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <DsDialog.TriggerContext>
      <DsDialog.Trigger>Open Dialog</DsDialog.Trigger>
      <DsDialog>
        <DsHeading style={{
        marginBottom: 'var(--ds-size-2)'
      }}>
          Dialog header
        </DsHeading>
        <DsParagraph style={{
        marginBottom: 'var(--ds-size-2)'
      }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati assumenda odio
          ducimus sunt et.
        </DsParagraph>
        <DsParagraph data-size="sm">Dialog footer</DsParagraph>
      </DsDialog>
    </DsDialog.TriggerContext>
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <DsLink href="#" target="_">
      Sample Link
    </DsLink>
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      pages,
      prevButtonProps,
      nextButtonProps
    } = useDsPagination({
      totalPages: 10,
      showPages: 7,
      currentPage: 1
    });
    return <DsPagination>
        <DsPagination.List>
          <DsPagination.Item>
            <DsPagination.Button aria-label="Forrige side" {...prevButtonProps}>
              Forrige
            </DsPagination.Button>
          </DsPagination.Item>
          {pages.map(({
          page,
          itemKey,
          buttonProps
        }) => <DsPagination.Item key={itemKey}>
              {typeof page === 'number' && <DsPagination.Button {...buttonProps} aria-label={\`Side \${page}\`}>
                  {page}
                </DsPagination.Button>}
            </DsPagination.Item>)}
          <DsPagination.Item>
            <DsPagination.Button aria-label="Neste side" {...nextButtonProps}>
              Neste
            </DsPagination.Button>
          </DsPagination.Item>
        </DsPagination.List>
      </DsPagination>;
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <DsPopover.TriggerContext>
      <DsPopover.Trigger>Open Popover</DsPopover.Trigger>
      <DsPopover>
        <DsHeading>Popover header</DsHeading>
        <DsParagraph>Popover content</DsParagraph>
      </DsPopover>
    </DsPopover.TriggerContext>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <DsSearch>
      <DsSearch.Input aria-label="Søk" />
      <DsSearch.Clear />
      <DsSearch.Button />
    </DsSearch>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      <DsSkeleton />
      <DsSkeleton width="100px" />
      <DsSkeleton height="20px" />
      <DsSkeleton width="200px" height="50px" />
    </div>
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <DsTabs defaultValue="value1">
      <DsTabs.List>
        <DsTabs.Tab value="value1">Tab 1</DsTabs.Tab>
        <DsTabs.Tab value="value2">Tab 2</DsTabs.Tab>
        <DsTabs.Tab value="value3">Tab 3</DsTabs.Tab>
      </DsTabs.List>
      <DsTabs.Panel value="value1">content 1</DsTabs.Panel>
      <DsTabs.Panel value="value2">content 2</DsTabs.Panel>
      <DsTabs.Panel value="value3">content 3</DsTabs.Panel>
    </DsTabs>
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <DsValidationMessage>Validation message content</DsValidationMessage>
}`,...$.parameters?.docs?.source}}};var Ie=[`Alert`,`Button`,`Heading`,`Paragraph`,`Badge`,`Spinner`,`Checkbox`,`Chip`,`Details`,`Dialog`,`Link`,`Pagination`,`Popover`,`Search`,`Skeleton`,`Tabs`,`ValidationMessage`];export{L as Alert,V as Badge,R as Button,U as Checkbox,W as Chip,G as Details,K as Dialog,z as Heading,q as Link,J as Pagination,B as Paragraph,Y as Popover,X as Search,Z as Skeleton,H as Spinner,Q as Tabs,$ as ValidationMessage,Ie as __namedExportsOrder,Fe as default};