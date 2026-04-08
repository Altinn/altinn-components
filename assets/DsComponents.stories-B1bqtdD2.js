"use client";import{r as o,j as t}from"./iframe-BaUVsogD.js";import{A as Ce}from"./alert-CLtgNVha.js";import{B as L,u as ye,S as Pe}from"./button-BfXez8v8.js";import{H as ce}from"./heading-PzoCxHBq.js";import{F as je,L as Te,V as pe,P as ne}from"./index-D4SJX6je.js";import{c as P}from"./lite-DaUVFjkg.js";import{I as le}from"./input-C1CvvkMg.js";import{u as N,S as D,a as Se}from"./use-merge-refs-BV0MipOU.js";import{D as oe}from"./index-Co-boAfE.js";import{a as ke,c as Re,o as we,f as Be,s as Ie}from"./floating-ui.dom-DCpi3RTt.js";import"./preload-helper-PPVm8Dsz.js";const me=o.createContext({elements:{current:new Map},getOrderedItems:()=>[],setFocusableValue:()=>{},onShiftTab:()=>{},focusableValue:null,orientation:"horizontal"}),Le=o.forwardRef(({activeValue:a,asChild:n,orientation:e="horizontal",onBlur:r,onFocus:s,...i},l)=>{const d=n?D:"div",c=a??null,[p,v]=o.useState(c),[g,h]=o.useState(!1),m=o.useRef(new Map),y=o.useRef(null),B=N([l,y]),S=()=>{if(!y.current)return[];const u=Array.from(y.current.querySelectorAll("[data-roving-tabindex-item]"));return Array.from(m.current).sort((f,b)=>u.indexOf(f[1])-u.indexOf(b[1])).map(([f,b])=>({value:f,element:b}))};return o.useEffect(()=>{v(c)},[c]),t.jsx(me.Provider,{value:{elements:m,getOrderedItems:S,focusableValue:p,setFocusableValue:v,onShiftTab:()=>{h(!0)},orientation:e},children:t.jsx(d,{...i,tabIndex:g?-1:0,onBlur:u=>{r?.(u),h(!1),v(a??null)},onFocus:u=>{if(s?.(u),u.target!==u.currentTarget)return;const f=S();f.length!==0&&(p!=null?m.current.get(p)?.focus():a!=null?m.current.get(a)?.focus():f.at(0)?.element.focus())},ref:B})})}),Ne=a=>{const{elements:n,getOrderedItems:e,setFocusableValue:r,focusableValue:s,onShiftTab:i,orientation:l}=o.useContext(me);return{getOrderedItems:e,isFocusable:s===a,orientation:l,getRovingProps:d=>({...d,ref:c=>{c?n.current.set(a,c):n.current.delete(a)},onKeyDown:c=>{if(d?.onKeyDown?.(c),c.shiftKey&&c.key==="Tab"){i();return}},onFocus:c=>{d?.onFocus?.(c),r(a)},"data-roving-tabindex-item":!0,tabIndex:s===a?0:-1})}};function se(a,n){const e=a.findIndex(r=>r.value===n);return a.at(e===a.length-1?0:e+1)}function ie(a,n){const e=a.findIndex(r=>r.value===n);return a.at(e===0?-1:e-1)}const Ee=o.forwardRef(({value:a,asChild:n,...e},r)=>{const s=n?D:"div",i=a??(typeof e.children=="string"?e.children:""),{getOrderedItems:l,getRovingProps:d,orientation:c}=Ne(i),p=d({onKeyDown:g=>{e?.onKeyDown?.(g);const h=l();let m;switch(c){case"horizontal":g.key==="ArrowRight"&&(m=se(h,i)),g.key==="ArrowLeft"&&(m=ie(h,i));break;case"vertical":g.key==="ArrowDown"&&(m=se(h,i)),g.key==="ArrowUp"&&(m=ie(h,i));break;case"ambiguous":["ArrowRight","ArrowDown"].includes(g.key)&&(m=se(h,i)),["ArrowLeft","ArrowUp"].includes(g.key)&&(m=ie(h,i))}g.key==="Home"&&(m=h[0]),g.key==="End"&&(m=h[h.length-1]),m&&(g.preventDefault(),m.element.focus())}}),v=N([r,p.ref]);return t.jsx(s,{...e,...p,ref:v,children:e.children})}),$e=(a,n,e)=>{const r=(e-1)/2,s=Math.max(1,Math.min(Math.max(a-Math.floor(r),1),n-e+1)),i=Math.min(Math.max(a+Math.ceil(r),e),n),l=Array.from({length:i+1-s},(d,c)=>c+s);return e>4&&s>1&&l.splice(0,2,1,0),e>3&&i<n&&l.splice(-2,2,0,n),l},Me=({currentPage:a=1,setCurrentPage:n,onChange:e,totalPages:r=1,showPages:s=7})=>o.useMemo(()=>{const i=a<r,l=a!==1,d=c=>p=>{if(c<1||c>r)return p.preventDefault();e?.(p,c),p.defaultPrevented||n?.(c)};return{pages:$e(a,r,s).map((c,p)=>({page:c||"ellipsis",itemKey:c?`page-${c}`:`ellipsis-${p}`,buttonProps:c?{"aria-current":c===a?"page":void 0,onClick:d(c),variant:c===a?"primary":"tertiary"}:null})),prevButtonProps:{"aria-hidden":!l,onClick:d(a-1),variant:"tertiary"},nextButtonProps:{"aria-hidden":!i,onClick:d(a+1),variant:"tertiary"},hasPrev:l,hasNext:i}},[a,r,s]),Ae=o.forwardRef(function({className:n,count:e,maxCount:r,variant:s="base",...i},l){return t.jsx("span",{className:P("ds-badge",n),"data-count":e&&r&&e>r?`${r}+`:e,"data-variant":s,ref:l,...i})}),Oe=o.forwardRef(function({className:n,overlap:e="rectangle",placement:r="top-right",...s},i){return t.jsx("span",{className:P("ds-badge--position",n),"data-overlap":e,"data-placement":r,ref:i,...s})}),fe=Object.assign(Ae,{Position:Oe});fe.Position.displayName="Badge.Position";const ge=o.forwardRef(({asChild:a,className:n,...e},r)=>{const s=a?D:"a";return t.jsx(s,{className:P("ds-link",n),ref:r,...e})});ge.displayName="Link";const Ve=(a,n)=>{const e=a.value;a.value=n;const r=a._valueTracker;typeof r<"u"&&r.setValue(e),a.dispatchEvent(new Event("change",{bubbles:!0}))},he=o.forwardRef(function({asChild:n,className:e,...r},s){const i=n?D:"button";return t.jsx(i,{className:P("ds-chip",e),type:n?void 0:"button",ref:s,...r})}),Fe=o.forwardRef(function(n,e){return t.jsx(he,{"data-removable":!0,ref:e,...n})}),xe=o.forwardRef(function({asChild:n,children:e,className:r,"data-size":s,"data-color":i,...l},d){const c=l.type??"checkbox",p=n?D:"label";return t.jsxs(p,{className:P("ds-chip",r),"data-size":s,"data-color":i,ref:d,children:[t.jsx(le,{...l,type:c}),t.jsx(Se,{children:e})]})}),He=o.forwardRef(function(n,e){return t.jsx(xe,{ref:e,type:"radio",...n})}),w={Button:he,Checkbox:xe,Radio:He,Removable:Fe};w.Button.displayName="Chip.Button";w.Checkbox.displayName="Chip.Checkbox";w.Radio.displayName="Chip.Radio";w.Removable.displayName="Chip.Removable";const ze=o.forwardRef(function({"data-size":n,className:e,style:r,children:s,label:i,description:l,error:d,...c},p){return t.jsxs(je,{"data-size":n,className:e,style:r,children:[t.jsx(le,{type:"checkbox",ref:p,...c}),!!i&&t.jsx(Te,{weight:"regular",children:i}),!!l&&t.jsx("div",{"data-field":"description",children:l}),!!d&&t.jsx(pe,{children:d})]})}),de=o.createContext({current:null}),be=({children:a})=>{const n=o.useRef(null);return t.jsx(de.Provider,{value:n,children:a})};be.displayName="DialogTriggerContext";const Ke=o.forwardRef(function({asChild:n,children:e,className:r,placement:s="center",closeButton:i="Lukk dialogvindu",closedby:l="closerequest",modal:d=!0,onClose:c,open:p,...v},g){const h=o.useContext(de),m=o.useRef(null),y=n?D:"dialog",B=N([h,g,m]),S=d?"showModal":"show";return o.useEffect(()=>m.current?.[p?S:"close"](),[p]),o.useEffect(()=>{const u=m.current,f=x=>{if(x.defaultPrevented)return;const{clientY:k,clientX:R,target:C}=x;if(C instanceof Element&&x.type==="click"&&C.closest('[data-command="close"]'))return u?.close();if(!(u&&"closedBy"in u)){if(x instanceof KeyboardEvent)return l==="none"&&x.key==="Escape"&&x.preventDefault();if(!window.getSelection()?.toString()&&u&&C===u&&l==="any"){const{top:M,left:E,right:ae,bottom:De}=u.getBoundingClientRect();M<=k&&k<=De&&E<=R&&R<=ae||u?.close()}}},b=()=>{const x=u?.querySelector("[autofocus]");document.activeElement!==x&&x?.focus()};return u?.addEventListener("animationend",b),u?.addEventListener("click",f),u?.addEventListener("keydown",f),()=>{u?.removeEventListener("animationend",b),u?.removeEventListener("click",f),u?.removeEventListener("keydown",f)}},[l]),o.useEffect(()=>{const u=b=>c?.(b),f=m.current;return f?.addEventListener("close",u),()=>f?.removeEventListener("close",u)},[c]),t.jsxs(y,{className:P("ds-dialog",r),ref:B,"data-placement":s,"data-modal":d,closedby:l,...v,children:[i!==!1&&t.jsx(L,{"aria-label":i,"data-color":"neutral",icon:!0,variant:"tertiary","data-command":"close"}),e]})}),qe=o.forwardRef(function({asChild:n,className:e,...r},s){const i=n?D:"div";return t.jsx(i,{className:P("ds-dialog__block",e),ref:s,...r})}),_e=o.forwardRef(function({asChild:n,...e},r){const s=o.useContext(de),i=n?D:L,l=()=>{s.current?.getAttribute("data-modal")==="true"?s.current?.showModal():s.current?.show()};return t.jsx(i,{"aria-haspopup":"dialog",onClick:l,ref:r,...e})}),$=Object.assign(Ke,{Block:qe,TriggerContext:be,Trigger:_e});$.Block.displayName="Dialog.Block";$.TriggerContext.displayName="Dialog.TriggerContext";$.Trigger.displayName="Dialog.Trigger";const ve=({children:a})=>{const n=o.useId(),[e,r]=o.useState(n);return t.jsx(ue.Provider,{value:{popoverId:e,setPopoverId:r},children:a})};ve.displayName="PopoverTriggerContext";const ue=o.createContext({}),Ue=o.forwardRef(function({id:n,className:e,onClose:r,onOpen:s,open:i,variant:l="default",placement:d="top",autoPlacement:c=!0,asChild:p=!1,...v},g){const h=p?D:"div",m=o.useRef(null),y=N([m,g]),{popoverId:B,setPopoverId:S}=o.useContext(ue),[u,f]=o.useState(!1),b=i??u;return o.useEffect(()=>{const x=m.current,k=C=>{const M=C.target,E=M?.closest?.(`[popovertarget="${x?.id}"]`),ae=!E&&!x?.contains(M);E&&C.preventDefault(),b&&(E||ae)?(f(!1),r?.()):!b&&E&&(f(!0),s?.())},R=C=>{C.key!=="Escape"||!b||(C.preventDefault(),f(!1),r?.())};return x?.togglePopover?.(b),document.addEventListener("click",k,!0),document.addEventListener("keydown",R),()=>{document.removeEventListener("click",k,!0),document.removeEventListener("keydown",R)}},[b]),o.useEffect(()=>{const x=m.current,k=document.querySelector(`[popovertarget="${x?.id}"]`);if(x&&k&&b)return ke(k,x,()=>{Re(k,x,{placement:d,strategy:"fixed",middleware:[we(R=>{const C=getComputedStyle(R.elements.floating,"::before");return parseFloat(C.height)}),...c?[Be({fallbackAxisSideDirection:"start"}),Ie()]:[],Xe]}).then(({x:R,y:C})=>{x.style.translate=`${Math.round(R)}px ${Math.round(C)}px`})})},[b,d,n,c]),o.useEffect(()=>{n&&S?.(n)},[n]),t.jsx(h,{className:P("ds-popover",e),id:n||B,popover:"manual","data-variant":l,ref:y,...v})}),Xe={name:"ArrowPseudoElement",fn(a){const{elements:n,rects:e,placement:r}=a;let s=`${Math.round(e.reference.width/2+e.reference.x-a.x)}px`,i=`${Math.round(e.reference.height/2+e.reference.y-a.y)}px`;switch(e.reference.width>e.floating.width&&(s=`${Math.round(e.floating.width/2)}px`),e.reference.height>e.floating.height&&(i=`${Math.round(e.floating.height/2)}px`),r.split("-")[0]){case"top":i="100%";break;case"right":s="0";break;case"bottom":i="0";break;case"left":s="100%";break}return n.floating.setAttribute("data-placement",r.split("-")[0]),n.floating.style.setProperty("--ds-popover-arrow-x",s),n.floating.style.setProperty("--ds-popover-arrow-y",i),a}},Ye=o.forwardRef(function({id:n,inline:e,asChild:r,...s},i){const{popoverId:l}=o.useContext(ue),d=r?D:e?"button":L,c=Object.assign({[o.version.startsWith("19")?"popoverTarget":"popovertarget"]:l,...e?{"data-popover":"inline"}:{}},s);return t.jsx(d,{ref:i,...c})}),We=o.forwardRef(function({"aria-label":n="Sidenavigering",asChild:e,className:r,...s},i){const l=e?D:"nav";return t.jsx(l,{"aria-label":n,className:P("ds-pagination",r),ref:i,...s})}),Ge=o.forwardRef(function(n,e){return t.jsx(L,{ref:e,...n})}),Je=o.forwardRef(function({asChild:n,className:e,...r},s){const i=n?D:"li";return t.jsx(i,{ref:s,...r})}),Qe=o.forwardRef(function({asChild:n,...e},r){const s=n?D:"ul";return t.jsx(s,{ref:r,...e})}),j=Object.assign(We,{List:Qe,Item:Je,Button:Ge});j.List.displayName="Pagination.List";j.Item.displayName="Pagination.Item";j.Button.displayName="Pagination.Button";const A=Object.assign(Ue,{TriggerContext:ve,Trigger:Ye});A.TriggerContext.displayName="Popover.TriggerContext";A.Trigger.displayName="Popover.Trigger";const Ze=o.forwardRef(function({className:n,...e},r){return t.jsx("div",{ref:r,className:P("ds-search",n),...e})}),et=o.forwardRef(function({children:n="Søk",...e},r){return t.jsx(L,{ref:r,type:"submit",...e,children:n})}),tt=o.forwardRef(function({"aria-label":n="Tøm",onClick:e,...r},s){const i=l=>{const d=l.target;let c=null;if(d instanceof HTMLElement&&(c=d.closest(".ds-search")?.querySelector("input")),!c)throw new Error("Input is missing");if(!(c instanceof HTMLInputElement))throw new Error("Input is not an input element");l.preventDefault(),Ve(c,""),c.focus(),e?.(l)};return t.jsx(L,{ref:s,variant:"tertiary",type:"reset","aria-label":n,onClick:i,icon:!0,...r})}),nt=o.forwardRef(function({...n},e){return t.jsx(le,{ref:e,type:"search",placeholder:"",...n})}),I=Object.assign(Ze,{Clear:tt,Button:et,Input:nt});I.Clear.displayName="Search.Clear";I.Button.displayName="Search.Button";I.Input.displayName="Search.Input";const O=o.forwardRef(function({asChild:n,className:e,height:r,style:s,variant:i="rectangle",width:l,...d},c){const p=n?D:"span",v=i==="text",g=ye("ds-skeleton-opacity-fade"),h=N([g,c]);return t.jsx(p,{"aria-hidden":"true",className:P("ds-skeleton",e),"data-text":v?"-".repeat(Number(l)||1):void 0,"data-variant":i,ref:h,style:v?s:{width:l,height:r,...s},...d})}),re=o.createContext({}),rt=o.forwardRef(function({value:n,defaultValue:e,className:r,onChange:s,...i},l){const d=o.useRef(null),c=n!==void 0,[p,v]=o.useState(e),[g,h]=o.useState(new Map);let m=s;return c||(m=y=>{v(y),s?.(y)},n=p),t.jsx(re.Provider,{value:{value:n,defaultValue:e,onChange:m,tablistRef:d,panelButtonMap:g,setPanelButtonMap:h},children:t.jsx("div",{className:P("ds-tabs",r),ref:l,...i})})}),at=o.forwardRef(function({children:n,...e},r){const{value:s,tablistRef:i}=o.useContext(re),l=N([r,i]);return t.jsx(Le,{role:"tablist",activeValue:s,orientation:"ambiguous",ref:l,...e,children:n})}),ot=o.forwardRef(function({children:n,value:e,id:r,...s},i){const{value:l,tablistRef:d,setPanelButtonMap:c}=o.useContext(re),p=e===l,v=o.useId(),g=r??`tabpanel-${v}`,[h,m]=o.useState(!1),[y,B]=o.useState(void 0),S=o.useRef(null),u=N([i,S]);return o.useEffect(()=>{if(!S.current)return;const f=S.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');m(f.length>0)},[n]),o.useEffect(()=>{if(!d)return;const f=d.current?.querySelector(`[role="tab"][data-value="${e}"]`);B(f?f.id:void 0),f&&c?.(b=>new Map(b).set(f.id,g))},[d]),t.jsx("div",{ref:u,id:g,role:"tabpanel",tabIndex:h?void 0:0,"aria-labelledby":y,hidden:!p,...s,children:n})}),st=o.forwardRef(function({value:n,id:e,onClick:r,...s},i){const l=o.useContext(re),d=o.useId(),c=e??`tab-${d}`;return t.jsx(Ee,{value:n,...s,asChild:!0,children:t.jsx("button",{ref:i,id:c,"aria-selected":l.value===n,"data-value":n,role:"tab",type:"button",onClick:p=>{l.onChange?.(n),r?.(p)},"aria-controls":l.panelButtonMap?.get(c),...s})})}),T=Object.assign(rt,{List:at,Tab:st,Panel:ot});T.Tab.displayName="Tabs.Tab";T.List.displayName="Tabs.List";T.Panel.displayName="Tabs.Panel";const vt={title:"Atoms/DsComponents",tags:["autodocs"]},V={render:()=>t.jsx(Ce,{children:"This is an alert"})},F={render:()=>t.jsx(L,{children:"Click me"})},H={render:()=>t.jsx(ce,{children:"Sample Heading"})},z={render:()=>t.jsx(ne,{children:"Sample paragraph text"})},K={render:()=>t.jsx(fe,{count:15,maxCount:9})},q={render:()=>t.jsx(Pe,{"aria-label":"Loading..."})},_={render:()=>t.jsx(ze,{label:"Accept terms and conditions"})},U={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[t.jsx(w.Radio,{name:"my-chip",defaultChecked:!0,children:"Chip Radio"}),t.jsx(w.Checkbox,{name:"my-chip",defaultChecked:!0,children:"Chip Checkbox"}),t.jsx(w.Removable,{children:"Chip Removable"}),t.jsx(w.Button,{children:"Chip Button"})]})},X={render:()=>t.jsxs(oe,{children:[t.jsx(oe.Summary,{children:"Details summary"}),t.jsx(oe.Content,{children:"Details content"})]})},Y={render:()=>t.jsxs($.TriggerContext,{children:[t.jsx($.Trigger,{children:"Open Dialog"}),t.jsxs($,{children:[t.jsx(ce,{style:{marginBottom:"var(--ds-size-2)"},children:"Dialog header"}),t.jsx(ne,{style:{marginBottom:"var(--ds-size-2)"},children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati assumenda odio ducimus sunt et."}),t.jsx(ne,{"data-size":"sm",children:"Dialog footer"})]})]})},W={render:()=>t.jsx(ge,{href:"#",target:"_",children:"Sample Link"})},G={render:()=>{const{pages:a,prevButtonProps:n,nextButtonProps:e}=Me({totalPages:10,showPages:7,currentPage:1});return t.jsx(j,{children:t.jsxs(j.List,{children:[t.jsx(j.Item,{children:t.jsx(j.Button,{"aria-label":"Forrige side",...n,children:"Forrige"})}),a.map(({page:r,itemKey:s,buttonProps:i})=>t.jsx(j.Item,{children:typeof r=="number"&&t.jsx(j.Button,{...i,"aria-label":`Side ${r}`,children:r})},s)),t.jsx(j.Item,{children:t.jsx(j.Button,{"aria-label":"Neste side",...e,children:"Neste"})})]})})}},J={render:()=>t.jsxs(A.TriggerContext,{children:[t.jsx(A.Trigger,{children:"Open Popover"}),t.jsxs(A,{children:[t.jsx(ce,{children:"Popover header"}),t.jsx(ne,{children:"Popover content"})]})]})},Q={render:()=>t.jsxs(I,{children:[t.jsx(I.Input,{"aria-label":"Søk"}),t.jsx(I.Clear,{}),t.jsx(I.Button,{})]})},Z={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[t.jsx(O,{}),t.jsx(O,{width:"100px"}),t.jsx(O,{height:"20px"}),t.jsx(O,{width:"200px",height:"50px"})]})},ee={render:()=>t.jsxs(T,{defaultValue:"value1",children:[t.jsxs(T.List,{children:[t.jsx(T.Tab,{value:"value1",children:"Tab 1"}),t.jsx(T.Tab,{value:"value2",children:"Tab 2"}),t.jsx(T.Tab,{value:"value3",children:"Tab 3"})]}),t.jsx(T.Panel,{value:"value1",children:"content 1"}),t.jsx(T.Panel,{value:"value2",children:"content 2"}),t.jsx(T.Panel,{value:"value3",children:"content 3"})]})},te={render:()=>t.jsx(pe,{children:"Validation message content"})};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <DsAlert>This is an alert</DsAlert>
}`,...V.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <DsButton>Click me</DsButton>
}`,...F.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <DsHeading>Sample Heading</DsHeading>
}`,...H.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <DsParagraph>Sample paragraph text</DsParagraph>
}`,...z.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <DsBadge count={15} maxCount={9} />
}`,...K.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <DsSpinner aria-label="Loading..." />
}`,...q.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <DsCheckbox label="Accept terms and conditions" />
}`,..._.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <DsDetails>
      <DsDetails.Summary>Details summary</DsDetails.Summary>
      <DsDetails.Content>Details content</DsDetails.Content>
    </DsDetails>
}`,...X.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <DsLink href="#" target="_">
      Sample Link
    </DsLink>
}`,...W.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <DsPopover.TriggerContext>
      <DsPopover.Trigger>Open Popover</DsPopover.Trigger>
      <DsPopover>
        <DsHeading>Popover header</DsHeading>
        <DsParagraph>Popover content</DsParagraph>
      </DsPopover>
    </DsPopover.TriggerContext>
}`,...J.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <DsSearch>
      <DsSearch.Input aria-label="Søk" />
      <DsSearch.Clear />
      <DsSearch.Button />
    </DsSearch>
}`,...Q.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
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
}`,...ee.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  render: () => <DsValidationMessage>Validation message content</DsValidationMessage>
}`,...te.parameters?.docs?.source}}};const Dt=["Alert","Button","Heading","Paragraph","Badge","Spinner","Checkbox","Chip","Details","Dialog","Link","Pagination","Popover","Search","Skeleton","Tabs","ValidationMessage"];export{V as Alert,K as Badge,F as Button,_ as Checkbox,U as Chip,X as Details,Y as Dialog,H as Heading,W as Link,G as Pagination,z as Paragraph,J as Popover,Q as Search,Z as Skeleton,q as Spinner,ee as Tabs,te as ValidationMessage,Dt as __namedExportsOrder,vt as default};
