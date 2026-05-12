"use client";import{r as s,j as t}from"./iframe-CU9tIbvZ.js";import{A as xe}from"./alert-Cxk_hbBa.js";import{B as $,u as be,S as ve}from"./button-DfPuT9nv.js";import{H as oe}from"./heading-HMF_CCjH.js";import{F as De,L as Ce,V as de,P as ee}from"./index-ByNurdCO.js";import{c as T}from"./lite-DaUVFjkg.js";import{I as ie}from"./input-BB0Zu-vu.js";import{u as I,S as P,a as Pe}from"./use-merge-refs-BZYQG8M3.js";import{D as ne}from"./index-C8r4g2bF.js";import{D as re}from"./index-0dlQGuvf.js";import{L as ye}from"./link-BaSLnPYp.js";import{a as je,c as Te,o as Se,f as ke,s as Re}from"./floating-ui.dom-DCpi3RTt.js";import"./preload-helper-PPVm8Dsz.js";const ue=s.createContext({elements:{current:new Map},getOrderedItems:()=>[],setFocusableValue:()=>{},onShiftTab:()=>{},focusableValue:null,orientation:"horizontal"}),Be=s.forwardRef(({activeValue:a,asChild:n,orientation:e="horizontal",onBlur:r,onFocus:i,...o},l)=>{const d=n?P:"div",c=a??null,[u,h]=s.useState(c),[m,f]=s.useState(!1),p=s.useRef(new Map),C=s.useRef(null),L=I([l,C]),S=()=>{if(!C.current)return[];const b=Array.from(C.current.querySelectorAll("[data-roving-tabindex-item]"));return Array.from(p.current).sort((g,x)=>b.indexOf(g[1])-b.indexOf(x[1])).map(([g,x])=>({value:g,element:x}))};return s.useEffect(()=>{h(c)},[c]),t.jsx(ue.Provider,{value:{elements:p,getOrderedItems:S,focusableValue:u,setFocusableValue:h,onShiftTab:()=>{f(!0)},orientation:e},children:t.jsx(d,{...o,tabIndex:m?-1:0,onBlur:b=>{r?.(b),f(!1),h(a??null)},onFocus:b=>{if(i?.(b),b.target!==b.currentTarget)return;const g=S();g.length!==0&&(u!=null?p.current.get(u)?.focus():a!=null?p.current.get(a)?.focus():g.at(0)?.element.focus())},ref:L})})}),we=a=>{const{elements:n,getOrderedItems:e,setFocusableValue:r,focusableValue:i,onShiftTab:o,orientation:l}=s.useContext(ue);return{getOrderedItems:e,isFocusable:i===a,orientation:l,getRovingProps:d=>({...d,ref:c=>{c?n.current.set(a,c):n.current.delete(a)},onKeyDown:c=>{if(d?.onKeyDown?.(c),c.shiftKey&&c.key==="Tab"){o();return}},onFocus:c=>{d?.onFocus?.(c),r(a)},"data-roving-tabindex-item":!0,tabIndex:i===a?0:-1})}};function ae(a,n){const e=a.findIndex(r=>r.value===n);return a.at(e===a.length-1?0:e+1)}function se(a,n){const e=a.findIndex(r=>r.value===n);return a.at(e===0?-1:e-1)}const Ie=s.forwardRef(({value:a,asChild:n,...e},r)=>{const i=n?P:"div",o=a??(typeof e.children=="string"?e.children:""),{getOrderedItems:l,getRovingProps:d,orientation:c}=we(o),u=d({onKeyDown:m=>{e?.onKeyDown?.(m);const f=l();let p;switch(c){case"horizontal":m.key==="ArrowRight"&&(p=ae(f,o)),m.key==="ArrowLeft"&&(p=se(f,o));break;case"vertical":m.key==="ArrowDown"&&(p=ae(f,o)),m.key==="ArrowUp"&&(p=se(f,o));break;case"ambiguous":["ArrowRight","ArrowDown"].includes(m.key)&&(p=ae(f,o)),["ArrowLeft","ArrowUp"].includes(m.key)&&(p=se(f,o))}m.key==="Home"&&(p=f[0]),m.key==="End"&&(p=f[f.length-1]),p&&(m.preventDefault(),p.element.focus())}}),h=I([r,u.ref]);return t.jsx(i,{...e,...u,ref:h,children:e.children})}),Le=(a,n,e)=>{const r=(e-1)/2,i=Math.max(1,Math.min(Math.max(a-Math.floor(r),1),n-e+1)),o=Math.min(Math.max(a+Math.ceil(r),e),n),l=Array.from({length:o+1-i},(d,c)=>c+i);return e>4&&i>1&&l.splice(0,2,1,0),e>3&&o<n&&l.splice(-2,2,0,n),l},Ne=({currentPage:a=1,setCurrentPage:n,onChange:e,totalPages:r=1,showPages:i=7})=>s.useMemo(()=>{const o=a<r,l=a!==1,d=c=>u=>{if(c<1||c>r)return u.preventDefault();e?.(u,c),u.defaultPrevented||n?.(c)};return{pages:Le(a,r,i).map((c,u)=>({page:c||"ellipsis",itemKey:c?`page-${c}`:`ellipsis-${u}`,buttonProps:c?{"aria-current":c===a?"page":void 0,onClick:d(c),variant:c===a?"primary":"tertiary"}:null})),prevButtonProps:{"aria-hidden":!l,onClick:d(a-1),variant:"tertiary"},nextButtonProps:{"aria-hidden":!o,onClick:d(a+1),variant:"tertiary"},hasPrev:l,hasNext:o}},[a,r,i]),$e=s.forwardRef(function({className:n,count:e,maxCount:r,variant:i="base",...o},l){return t.jsx("span",{className:T("ds-badge",n),"data-count":e&&r&&e>r?`${r}+`:e,"data-variant":i,ref:l,...o})}),Me=s.forwardRef(function({className:n,overlap:e="rectangle",placement:r="top-right",...i},o){return t.jsx("span",{className:T("ds-badge--position",n),"data-overlap":e,"data-placement":r,ref:o,...i})}),pe=Object.assign($e,{Position:Me});pe.Position.displayName="Badge.Position";const Ae=(a,n)=>{const e=a.value;a.value=n;const r=a._valueTracker;typeof r<"u"&&r.setValue(e),a.dispatchEvent(new Event("change",{bubbles:!0}))},me=s.forwardRef(function({asChild:n,className:e,...r},i){const o=n?P:"button";return t.jsx(o,{className:T("ds-chip",e),type:n?void 0:"button",ref:i,...r})}),Ee=s.forwardRef(function(n,e){return t.jsx(me,{"data-removable":!0,ref:e,...n})}),fe=s.forwardRef(function({asChild:n,children:e,className:r,"data-size":i,"data-color":o,...l},d){const c=l.type??"checkbox",u=n?P:"label";return t.jsxs(u,{className:T("ds-chip",r),"data-size":i,"data-color":o,ref:d,children:[t.jsx(ie,{...l,type:c}),t.jsx(Pe,{children:e})]})}),Oe=s.forwardRef(function(n,e){return t.jsx(fe,{ref:e,type:"radio",...n})}),k={Button:me,Checkbox:fe,Radio:Oe,Removable:Ee};k.Button.displayName="Chip.Button";k.Checkbox.displayName="Chip.Checkbox";k.Radio.displayName="Chip.Radio";k.Removable.displayName="Chip.Removable";const Ve=s.forwardRef(function({"data-size":n,className:e,style:r,children:i,label:o,description:l,error:d,...c},u){return t.jsxs(De,{"data-size":n,className:e,style:r,children:[t.jsx(ie,{type:"checkbox",ref:u,...c}),!!o&&t.jsx(Ce,{weight:"regular",children:o}),!!l&&t.jsx("div",{"data-field":"description",children:l}),!!d&&t.jsx(de,{children:d})]})}),ge=({children:a})=>{const n=s.useId(),[e,r]=s.useState(n);return t.jsx(ce.Provider,{value:{popoverId:e,setPopoverId:r},children:a})};ge.displayName="PopoverTriggerContext";const ce=s.createContext({}),Fe=s.forwardRef(function({id:n,className:e,onClose:r,onOpen:i,open:o,variant:l="default",placement:d="top",autoPlacement:c=!0,asChild:u=!1,...h},m){const f=u?P:"div",p=s.useRef(null),C=I([p,m]),{popoverId:L,setPopoverId:S}=s.useContext(ce),[b,g]=s.useState(!1),x=o??b;return s.useEffect(()=>{const y=p.current,B=j=>{const le=j.target,M=le?.closest?.(`[popovertarget="${y?.id}"]`),he=!M&&!y?.contains(le);M&&j.preventDefault(),x&&(M||he)?(g(!1),r?.()):!x&&M&&(g(!0),i?.())},w=j=>{j.key!=="Escape"||!x||(j.preventDefault(),g(!1),r?.())};return y?.togglePopover?.(x),document.addEventListener("click",B,!0),document.addEventListener("keydown",w),()=>{document.removeEventListener("click",B,!0),document.removeEventListener("keydown",w)}},[x]),s.useEffect(()=>{const y=p.current,B=document.querySelector(`[popovertarget="${y?.id}"]`);if(y&&B&&x)return je(B,y,()=>{Te(B,y,{placement:d,strategy:"fixed",middleware:[Se(w=>{const j=getComputedStyle(w.elements.floating,"::before");return parseFloat(j.height)}),...c?[ke({fallbackAxisSideDirection:"start"}),Re()]:[],He]}).then(({x:w,y:j})=>{y.style.translate=`${Math.round(w)}px ${Math.round(j)}px`})})},[x,d,n,c]),s.useEffect(()=>{n&&S?.(n)},[n]),t.jsx(f,{className:T("ds-popover",e),id:n||L,popover:"manual","data-variant":l,ref:C,...h})}),He={name:"ArrowPseudoElement",fn(a){const{elements:n,rects:e,placement:r}=a;let i=`${Math.round(e.reference.width/2+e.reference.x-a.x)}px`,o=`${Math.round(e.reference.height/2+e.reference.y-a.y)}px`;switch(e.reference.width>e.floating.width&&(i=`${Math.round(e.floating.width/2)}px`),e.reference.height>e.floating.height&&(o=`${Math.round(e.floating.height/2)}px`),r.split("-")[0]){case"top":o="100%";break;case"right":i="0";break;case"bottom":o="0";break;case"left":i="100%";break}return n.floating.setAttribute("data-placement",r.split("-")[0]),n.floating.style.setProperty("--ds-popover-arrow-x",i),n.floating.style.setProperty("--ds-popover-arrow-y",o),a}},ze=s.forwardRef(function({id:n,inline:e,asChild:r,...i},o){const{popoverId:l}=s.useContext(ce),d=r?P:e?"button":$,c=Object.assign({[s.version.startsWith("19")?"popoverTarget":"popovertarget"]:l,...e?{"data-popover":"inline"}:{}},i);return t.jsx(d,{ref:o,...c})}),Ke=s.forwardRef(function({"aria-label":n="Sidenavigering",asChild:e,className:r,...i},o){const l=e?P:"nav";return t.jsx(l,{"aria-label":n,className:T("ds-pagination",r),ref:o,...i})}),qe=s.forwardRef(function(n,e){return t.jsx($,{ref:e,...n})}),_e=s.forwardRef(function({asChild:n,className:e,...r},i){const o=n?P:"li";return t.jsx(o,{ref:i,...r})}),Ue=s.forwardRef(function({asChild:n,...e},r){const i=n?P:"ul";return t.jsx(i,{ref:r,...e})}),v=Object.assign(Ke,{List:Ue,Item:_e,Button:qe});v.List.displayName="Pagination.List";v.Item.displayName="Pagination.Item";v.Button.displayName="Pagination.Button";const N=Object.assign(Fe,{TriggerContext:ge,Trigger:ze});N.TriggerContext.displayName="Popover.TriggerContext";N.Trigger.displayName="Popover.Trigger";const We=s.forwardRef(function({className:n,...e},r){return t.jsx("div",{ref:r,className:T("ds-search",n),...e})}),Xe=s.forwardRef(function({children:n="Søk",...e},r){return t.jsx($,{ref:r,type:"submit",...e,children:n})}),Ye=s.forwardRef(function({"aria-label":n="Tøm",onClick:e,...r},i){const o=l=>{const d=l.target;let c=null;if(d instanceof HTMLElement&&(c=d.closest(".ds-search")?.querySelector("input")),!c)throw new Error("Input is missing");if(!(c instanceof HTMLInputElement))throw new Error("Input is not an input element");l.preventDefault(),Ae(c,""),c.focus(),e?.(l)};return t.jsx($,{ref:i,variant:"tertiary",type:"reset","aria-label":n,onClick:o,icon:!0,...r})}),Ge=s.forwardRef(function({...n},e){return t.jsx(ie,{ref:e,type:"search",placeholder:"",...n})}),R=Object.assign(We,{Clear:Ye,Button:Xe,Input:Ge});R.Clear.displayName="Search.Clear";R.Button.displayName="Search.Button";R.Input.displayName="Search.Input";const A=s.forwardRef(function({asChild:n,className:e,height:r,style:i,variant:o="rectangle",width:l,...d},c){const u=n?P:"span",h=o==="text",m=be("ds-skeleton-opacity-fade"),f=I([m,c]);return t.jsx(u,{"aria-hidden":"true",className:T("ds-skeleton",e),"data-text":h?"-".repeat(Number(l)||1):void 0,"data-variant":o,ref:f,style:h?i:{width:l,height:r,...i},...d})}),te=s.createContext({}),Je=s.forwardRef(function({value:n,defaultValue:e,className:r,onChange:i,...o},l){const d=s.useRef(null),c=n!==void 0,[u,h]=s.useState(e),[m,f]=s.useState(new Map);let p=i;return c||(p=C=>{h(C),i?.(C)},n=u),t.jsx(te.Provider,{value:{value:n,defaultValue:e,onChange:p,tablistRef:d,panelButtonMap:m,setPanelButtonMap:f},children:t.jsx("div",{className:T("ds-tabs",r),ref:l,...o})})}),Qe=s.forwardRef(function({children:n,...e},r){const{value:i,tablistRef:o}=s.useContext(te),l=I([r,o]);return t.jsx(Be,{role:"tablist",activeValue:i,orientation:"ambiguous",ref:l,...e,children:n})}),Ze=s.forwardRef(function({children:n,value:e,id:r,...i},o){const{value:l,tablistRef:d,setPanelButtonMap:c}=s.useContext(te),u=e===l,h=s.useId(),m=r??`tabpanel-${h}`,[f,p]=s.useState(!1),[C,L]=s.useState(void 0),S=s.useRef(null),b=I([o,S]);return s.useEffect(()=>{if(!S.current)return;const g=S.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');p(g.length>0)},[n]),s.useEffect(()=>{if(!d)return;const g=d.current?.querySelector(`[role="tab"][data-value="${e}"]`);L(g?g.id:void 0),g&&c?.(x=>new Map(x).set(g.id,m))},[d]),t.jsx("div",{ref:b,id:m,role:"tabpanel",tabIndex:f?void 0:0,"aria-labelledby":C,hidden:!u,...i,children:n})}),et=s.forwardRef(function({value:n,id:e,onClick:r,...i},o){const l=s.useContext(te),d=s.useId(),c=e??`tab-${d}`;return t.jsx(Ie,{value:n,...i,asChild:!0,children:t.jsx("button",{ref:o,id:c,"aria-selected":l.value===n,"data-value":n,role:"tab",type:"button",onClick:u=>{l.onChange?.(n),r?.(u)},"aria-controls":l.panelButtonMap?.get(c),...i})})}),D=Object.assign(Je,{List:Qe,Tab:et,Panel:Ze});D.Tab.displayName="Tabs.Tab";D.List.displayName="Tabs.List";D.Panel.displayName="Tabs.Panel";const ft={title:"Atoms/DsComponents",tags:["autodocs"]},E={render:()=>t.jsx(xe,{children:"This is an alert"})},O={render:()=>t.jsx($,{children:"Click me"})},V={render:()=>t.jsx(oe,{children:"Sample Heading"})},F={render:()=>t.jsx(ee,{children:"Sample paragraph text"})},H={render:()=>t.jsx(pe,{count:15,maxCount:9})},z={render:()=>t.jsx(ve,{"aria-label":"Loading..."})},K={render:()=>t.jsx(Ve,{label:"Accept terms and conditions"})},q={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[t.jsx(k.Radio,{name:"my-chip",defaultChecked:!0,children:"Chip Radio"}),t.jsx(k.Checkbox,{name:"my-chip",defaultChecked:!0,children:"Chip Checkbox"}),t.jsx(k.Removable,{children:"Chip Removable"}),t.jsx(k.Button,{children:"Chip Button"})]})},_={render:()=>t.jsxs(ne,{children:[t.jsx(ne.Summary,{children:"Details summary"}),t.jsx(ne.Content,{children:"Details content"})]})},U={render:()=>t.jsxs(re.TriggerContext,{children:[t.jsx(re.Trigger,{children:"Open Dialog"}),t.jsxs(re,{children:[t.jsx(oe,{style:{marginBottom:"var(--ds-size-2)"},children:"Dialog header"}),t.jsx(ee,{style:{marginBottom:"var(--ds-size-2)"},children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque obcaecati assumenda odio ducimus sunt et."}),t.jsx(ee,{"data-size":"sm",children:"Dialog footer"})]})]})},W={render:()=>t.jsx(ye,{href:"#",target:"_",children:"Sample Link"})},X={render:()=>{const{pages:a,prevButtonProps:n,nextButtonProps:e}=Ne({totalPages:10,showPages:7,currentPage:1});return t.jsx(v,{children:t.jsxs(v.List,{children:[t.jsx(v.Item,{children:t.jsx(v.Button,{"aria-label":"Forrige side",...n,children:"Forrige"})}),a.map(({page:r,itemKey:i,buttonProps:o})=>t.jsx(v.Item,{children:typeof r=="number"&&t.jsx(v.Button,{...o,"aria-label":`Side ${r}`,children:r})},i)),t.jsx(v.Item,{children:t.jsx(v.Button,{"aria-label":"Neste side",...e,children:"Neste"})})]})})}},Y={render:()=>t.jsxs(N.TriggerContext,{children:[t.jsx(N.Trigger,{children:"Open Popover"}),t.jsxs(N,{children:[t.jsx(oe,{children:"Popover header"}),t.jsx(ee,{children:"Popover content"})]})]})},G={render:()=>t.jsxs(R,{children:[t.jsx(R.Input,{"aria-label":"Søk"}),t.jsx(R.Clear,{}),t.jsx(R.Button,{})]})},J={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[t.jsx(A,{}),t.jsx(A,{width:"100px"}),t.jsx(A,{height:"20px"}),t.jsx(A,{width:"200px",height:"50px"})]})},Q={render:()=>t.jsxs(D,{defaultValue:"value1",children:[t.jsxs(D.List,{children:[t.jsx(D.Tab,{value:"value1",children:"Tab 1"}),t.jsx(D.Tab,{value:"value2",children:"Tab 2"}),t.jsx(D.Tab,{value:"value3",children:"Tab 3"})]}),t.jsx(D.Panel,{value:"value1",children:"content 1"}),t.jsx(D.Panel,{value:"value2",children:"content 2"}),t.jsx(D.Panel,{value:"value3",children:"content 3"})]})},Z={render:()=>t.jsx(de,{children:"Validation message content"})};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <DsAlert>This is an alert</DsAlert>
}`,...E.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <DsButton>Click me</DsButton>
}`,...O.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <DsHeading>Sample Heading</DsHeading>
}`,...V.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <DsParagraph>Sample paragraph text</DsParagraph>
}`,...F.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <DsBadge count={15} maxCount={9} />
}`,...H.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <DsSpinner aria-label="Loading..." />
}`,...z.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <DsCheckbox label="Accept terms and conditions" />
}`,...K.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <DsDetails>
      <DsDetails.Summary>Details summary</DsDetails.Summary>
      <DsDetails.Content>Details content</DsDetails.Content>
    </DsDetails>
}`,..._.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <DsLink href="#" target="_">
      Sample Link
    </DsLink>
}`,...W.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <DsPopover.TriggerContext>
      <DsPopover.Trigger>Open Popover</DsPopover.Trigger>
      <DsPopover>
        <DsHeading>Popover header</DsHeading>
        <DsParagraph>Popover content</DsParagraph>
      </DsPopover>
    </DsPopover.TriggerContext>
}`,...Y.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <DsSearch>
      <DsSearch.Input aria-label="Søk" />
      <DsSearch.Clear />
      <DsSearch.Button />
    </DsSearch>
}`,...G.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <DsValidationMessage>Validation message content</DsValidationMessage>
}`,...Z.parameters?.docs?.source}}};const gt=["Alert","Button","Heading","Paragraph","Badge","Spinner","Checkbox","Chip","Details","Dialog","Link","Pagination","Popover","Search","Skeleton","Tabs","ValidationMessage"];export{E as Alert,H as Badge,O as Button,K as Checkbox,q as Chip,_ as Details,U as Dialog,V as Heading,W as Link,X as Pagination,F as Paragraph,Y as Popover,G as Search,J as Skeleton,z as Spinner,Q as Tabs,Z as ValidationMessage,gt as __namedExportsOrder,ft as default};
