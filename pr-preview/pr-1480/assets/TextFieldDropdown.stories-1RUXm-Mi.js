"use client";var G=Object.defineProperty;var p=(s,o)=>G(s,"name",{value:o,configurable:!0});import{aa as a,a7 as r,a2 as J,I as K}from"./iframe-DdPcKG0O.js";import{B as Q}from"./Badge-BzZwcsiz.js";import{M as X}from"./MenuItem-BOFr4MJg.js";import{F as Y}from"./FieldBase-V879Q4R4.js";import{I as Z}from"./Input-RBXxlYal.js";import{S as ee}from"./ChevronUp-DhLREmKD.js";import{S as ae}from"./ChevronDown-Bg2scdYv.js";import{M as re,a as se}from"./MenuListItem-DT2WooyF.js";import"./preload-helper-Cc2_yIPf.js";import"./Tooltip-wlipxmMb.js";import"./CheckboxUncheckedIcon-BsqpIyxr.js";import"./RadioUncheckedIcon-DgOrjSnU.js";import"./ItemMedia-BsdmKVrj.js";import"./Avatar-Dfz4UezB.js";import"./AvatarGroup-BtZlCnKI.js";import"./ItemLabel-vi7acRQa.js";import"./Heading-BJje4zKM.js";import"./useHighlightedText-BvQbOG8T.js";import"./ItemControls-Bf5MqGaN.js";import"./ChevronRight-Cmdt4Cn7.js";import"./Typography-D4dRQ14t.js";import"./Field-DKeS0ieC.js";import"./Label-BJbtrgL_.js";const N=p((s,o)=>(a.useEffect(()=>{const t=p(d=>{const l=d.target;l.closest("button[data-context-menu-trigger]")||l.closest(".context-menu-trigger")||l.closest("button")||l.closest('[role="button"]')||s.current&&!s.current.contains(d.target)&&o?.()},"handleClickOutside");return document.addEventListener("mouseup",t),document.addEventListener("touchend",t),()=>{document.removeEventListener("mouseup",t),document.removeEventListener("touchend",t)}},[o,s]),s),"useClickOutside"),oe="_dropdown_fqgmt_1",te={dropdown:oe},ne=p(({layout:s,size:o="auto",placement:t="left",padding:d=!0,open:l=!1,className:v,children:u,onClose:m,as:E="div"})=>{const w=a.useRef(null);N(w,m);const R=E;return r.jsx(R,{ref:w,className:J(te.dropdown,v),"data-layout":s,"data-theme":"default","data-shadow":"md","data-size":o,"data-placement":t,"data-padding":d,"data-expanded":l,children:u})},"DropdownBase"),le="_container_8jcxe_1",ie="_input_8jcxe_7",de="_badge_8jcxe_15",ce="_dropdownTrigger_8jcxe_36",pe="_dropdown_8jcxe_36",h={container:le,input:ie,badge:de,dropdownTrigger:ce,dropdown:pe},F=p(({label:s,helperText:o,value:t="",onChange:d,options:l,validate:v,badge:u,disabled:m,size:E,color:w,className:R,...P})=>{const f=a.useId(),[i,g]=a.useState(!1),[c,V]=a.useState(t),[B,D]=a.useState(-1),[S,U]=a.useState(null),L=a.useRef(null),W=a.useRef(null),q=a.useRef(null);N(L,()=>{i&&(g(!1),D(-1))});const b=a.useMemo(()=>c?l.filter(e=>e.label.toLowerCase().includes(c.toLowerCase())):l,[c,l]);a.useEffect(()=>{V(t)},[t]),a.useEffect(()=>{if(!v)return;const e=setTimeout(()=>{const n=v(c);U(typeof n=="string"?n:n?null:"Invalid value")},300);return()=>clearTimeout(e)},[c,v]),a.useEffect(()=>{if(m||!c)return;const e=b.some(n=>n.label.toLowerCase()===c.toLowerCase());b.length>0&&!e&&!i?g(!0):i&&b.length===0&&g(!1)},[c,b,i,m]);const A=a.useCallback(e=>{const n=e.target.value;V(n),d?.(n)},[d]),H=a.useCallback(e=>{V(e.label),d?.(e.value),g(!1),D(-1),W.current?.focus()},[d]),z=a.useCallback(()=>{m||(i?(g(!1),D(-1)):b.length>0&&g(!0))},[m,i,b.length]),M=S?"danger":w;return r.jsx(Y,{size:E,color:M,label:s,helperText:S||o,className:R,children:r.jsxs("div",{className:h.container,ref:L,children:[r.jsx(Z,{...P,ref:W,value:c,onChange:A,disabled:m,size:E,color:M,className:h.input,role:"combobox","aria-expanded":i,"aria-controls":f,"aria-autocomplete":"list","aria-activedescendant":B>=0?`${f}-option-${B}`:void 0,"aria-invalid":!!S,"aria-describedby":S?`${f}-error`:void 0,"data-has-badge":!!u}),u&&r.jsx("span",{className:h.badge,children:r.jsx(Q,{label:u.label,color:u.color,variant:u.variant||"subtle",size:"sm"})}),r.jsx("button",{type:"button",className:h.dropdownTrigger,onClick:z,disabled:m,"aria-label":i?"Close dropdown":"Open dropdown",tabIndex:-1,children:r.jsx(K,{svgElement:i?ee:ae})}),r.jsx(ne,{open:i,onClose:p(()=>g(!1),"onClose"),as:"div",className:h.dropdown,children:r.jsx("div",{id:f,ref:q,role:"listbox",children:r.jsx(re,{role:"group",children:b.map((e,n)=>r.jsx(se,{children:r.jsx(X,{id:`${f}-option-${n}`,role:"option","aria-selected":e.value===t,"data-active":B===n,onClick:p(()=>!e.disabled&&H(e),"onClick"),disabled:e.disabled,as:"div",title:e.label,badge:e.badge})},e.value))})})})]})})},"TextFieldDropdown"),Le={title:"Forms/TextFieldDropdown",component:F,parameters:{layout:"padded"},tags:["autodocs"]},x=[{value:"john@example.com",label:"john@example.com"},{value:"jane@example.com",label:"jane@example.com"},{value:"bob@example.com",label:"bob@example.com"},{value:"alice@company.com",label:"alice@company.com"},{value:"matias@gmail.com",label:"matias@gmail.com"}],T={args:{label:"E-postadresse",placeholder:"Enter email",options:x}},j={args:{label:"E-postadresse",value:"matias@gmail.com",options:x,badge:{label:"Verifisert",color:"success",variant:"subtle"}}},C={args:{label:"E-postadresse",placeholder:"Select or enter email",options:[{value:"verified@example.com",label:"verified@example.com",badge:{label:"Verified",color:"success",variant:"subtle"}},{value:"unverified@example.com",label:"unverified@example.com",badge:{label:"Unverified",color:"warning",variant:"subtle"}},{value:"blocked@example.com",label:"blocked@example.com",badge:{label:"Blocked",color:"danger",variant:"subtle"}},{value:"pending@example.com",label:"pending@example.com",badge:{label:"Pending",color:"info",variant:"subtle"}}]}},O={args:{label:"E-postadresse",placeholder:"Enter valid email",options:x,helperText:"Please enter a valid email address",validate:p(s=>s?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)?!0:"Please enter a valid email address":"Email is required","validate")}},_=p(s=>{const[o,t]=a.useState("");return r.jsxs("div",{children:[r.jsx(F,{...s,value:o,onChange:t,label:"E-postadresse",placeholder:"Select or enter email",options:x,helperText:`Current value: ${o||"none"}`}),r.jsxs("div",{style:{marginTop:"1rem",padding:"1rem",background:"#f5f5f5",borderRadius:"4px"},children:[r.jsx("strong",{children:"Selected value:"})," ",o||"none"]})]})},"Controlled"),y={args:{label:"E-postadresse",value:"user@example.com",options:x,disabled:!0,helperText:"This field is disabled"}},k={args:{label:"E-postadresse",placeholder:"Enter or select email",options:x,helperText:"We will send a verification email to this address"}},I={args:{label:"E-postadresse",placeholder:"Enter email",options:[],helperText:"No suggestions available - enter your email address"}},$={args:{label:"Select User",placeholder:"Search users",options:Array.from({length:50},(s,o)=>({value:`user${o}@example.com`,label:`user${o}@example.com`})),helperText:"Scroll through the dropdown to see all options"}},We=["Default","WithBadge","WithOptionBadges","WithValidation","Controlled","Disabled","WithHelperText","EmptyOptions","ManyOptions"];T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'E-postadresse',
    placeholder: 'Enter email',
    options: emailOptions
  }
}`,...T.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'E-postadresse',
    value: 'matias@gmail.com',
    options: emailOptions,
    badge: {
      label: 'Verifisert',
      color: 'success',
      variant: 'subtle'
    }
  }
}`,...j.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'E-postadresse',
    placeholder: 'Select or enter email',
    options: [{
      value: 'verified@example.com',
      label: 'verified@example.com',
      badge: {
        label: 'Verified',
        color: 'success',
        variant: 'subtle'
      }
    }, {
      value: 'unverified@example.com',
      label: 'unverified@example.com',
      badge: {
        label: 'Unverified',
        color: 'warning',
        variant: 'subtle'
      }
    }, {
      value: 'blocked@example.com',
      label: 'blocked@example.com',
      badge: {
        label: 'Blocked',
        color: 'danger',
        variant: 'subtle'
      }
    }, {
      value: 'pending@example.com',
      label: 'pending@example.com',
      badge: {
        label: 'Pending',
        color: 'info',
        variant: 'subtle'
      }
    }]
  }
}`,...C.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'E-postadresse',
    placeholder: 'Enter valid email',
    options: emailOptions,
    helperText: 'Please enter a valid email address',
    validate: (value: string) => {
      if (!value) return 'Email is required';
      const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      return emailRegex.test(value) ? true : 'Please enter a valid email address';
    }
  }
}`,...O.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`(args: TextFieldDropdownProps) => {
  const [value, setValue] = useState('');
  return <div>
      <TextFieldDropdown {...args} value={value} onChange={setValue} label="E-postadresse" placeholder="Select or enter email" options={emailOptions} helperText={\`Current value: \${value || 'none'}\`} />
      <div style={{
      marginTop: '1rem',
      padding: '1rem',
      background: '#f5f5f5',
      borderRadius: '4px'
    }}>
        <strong>Selected value:</strong> {value || 'none'}
      </div>
    </div>;
}`,..._.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'E-postadresse',
    value: 'user@example.com',
    options: emailOptions,
    disabled: true,
    helperText: 'This field is disabled'
  }
}`,...y.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'E-postadresse',
    placeholder: 'Enter or select email',
    options: emailOptions,
    helperText: 'We will send a verification email to this address'
  }
}`,...k.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'E-postadresse',
    placeholder: 'Enter email',
    options: [],
    helperText: 'No suggestions available - enter your email address'
  }
}`,...I.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select User',
    placeholder: 'Search users',
    options: Array.from({
      length: 50
    }, (_, i) => ({
      value: \`user\${i}@example.com\`,
      label: \`user\${i}@example.com\`
    })),
    helperText: 'Scroll through the dropdown to see all options'
  }
}`,...$.parameters?.docs?.source}}};export{_ as Controlled,T as Default,y as Disabled,I as EmptyOptions,$ as ManyOptions,j as WithBadge,k as WithHelperText,C as WithOptionBadges,O as WithValidation,We as __namedExportsOrder,Le as default};
