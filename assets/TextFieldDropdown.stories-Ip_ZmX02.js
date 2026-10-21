"use client";var G=Object.defineProperty;var u=(o,s)=>G(o,"name",{value:s,configurable:!0});import{aa as a,a7 as r,a3 as J,I as K}from"./iframe-CHdTRX1S.js";import{u as F}from"./useClickOutside-B7tjtUuG.js";import{B as Q}from"./Badge-ZdmE6gaR.js";import{M as X}from"./MenuItem-C43FNrfh.js";import{F as Y}from"./FieldBase-CkHB3870.js";import{I as Z}from"./Input-CiIWWSBU.js";import{S as ee}from"./ChevronUp-Bc1dDmk3.js";import{S as ae}from"./ChevronDown-BTY70Kvu.js";import{M as re,a as se}from"./MenuListItem-BuMUeh0I.js";import"./preload-helper-Cc2_yIPf.js";import"./Tooltip-CYLMyUyD.js";import"./ItemMedia-BQC5N1RJ.js";import"./Avatar-BgVv4jsI.js";import"./AvatarGroup-C6qZoOIR.js";import"./Checkmark-BvCukKJy.js";import"./ItemLabel-BnULnKGe.js";import"./Heading-CWEvYxPf.js";import"./useHighlightedText-HQpCSNf5.js";import"./ItemControls-D53PO9xK.js";import"./ChevronRight-h2GXZqhR.js";import"./Typography-6g7ttECm.js";import"./Field-8ZiKnfLQ.js";import"./Label-CJ7sG7Qi.js";const oe="_dropdown_fqgmt_1",le={dropdown:oe},te=u(({layout:o,size:s="auto",placement:i="left",padding:g=!0,open:v=!1,className:x,children:c,onClose:d,as:E="div"})=>{const w=a.useRef(null);F(w,d);const R=E;return r.jsx(R,{ref:w,className:J(le.dropdown,x),"data-layout":o,"data-theme":"default","data-shadow":"md","data-size":s,"data-placement":i,"data-padding":g,"data-expanded":v,children:c})},"DropdownBase"),ne="_container_8jcxe_1",ie="_input_8jcxe_7",de="_badge_8jcxe_15",ce="_dropdownTrigger_8jcxe_36",pe="_dropdown_8jcxe_36",h={container:ne,input:ie,badge:de,dropdownTrigger:ce,dropdown:pe},P=u(({label:o,helperText:s,value:i="",onChange:g,options:v,validate:x,badge:c,disabled:d,size:E,color:w,className:R,...L})=>{const f=a.useId(),[t,p]=a.useState(!1),[n,V]=a.useState(i),[D,B]=a.useState(-1),[S,U]=a.useState(null),W=a.useRef(null),M=a.useRef(null),q=a.useRef(null);F(W,()=>{t&&(p(!1),B(-1))});const m=a.useMemo(()=>n?v.filter(e=>e.label.toLowerCase().includes(n.toLowerCase())):v,[n,v]);a.useEffect(()=>{V(i)},[i]),a.useEffect(()=>{if(!x)return;const e=setTimeout(()=>{const l=x(n);U(typeof l=="string"?l:l?null:"Invalid value")},300);return()=>clearTimeout(e)},[n,x]),a.useEffect(()=>{if(d||!n)return;const e=m.some(l=>l.label.toLowerCase()===n.toLowerCase());m.length>0&&!e&&!t?p(!0):t&&m.length===0&&p(!1)},[n,m,t,d]);const A=a.useCallback(e=>{const l=e.target.value;V(l),g?.(l)},[g]),H=a.useCallback(e=>{V(e.label),g?.(e.value),p(!1),B(-1),M.current?.focus()},[g]),z=a.useCallback(()=>{d||(t?(p(!1),B(-1)):m.length>0&&p(!0))},[d,t,m.length]),N=S?"danger":w;return r.jsx(Y,{size:E,color:N,label:o,helperText:S||s,className:R,children:r.jsxs("div",{className:h.container,ref:W,children:[r.jsx(Z,{...L,ref:M,value:n,onChange:A,disabled:d,size:E,color:N,className:h.input,role:"combobox","aria-expanded":t,"aria-controls":f,"aria-autocomplete":"list","aria-activedescendant":D>=0?`${f}-option-${D}`:void 0,"aria-invalid":!!S,"aria-describedby":S?`${f}-error`:void 0,"data-has-badge":!!c}),c&&r.jsx("span",{className:h.badge,children:r.jsx(Q,{label:c.label,color:c.color,variant:c.variant||"subtle",size:"sm"})}),r.jsx("button",{type:"button",className:h.dropdownTrigger,onClick:z,disabled:d,"aria-label":t?"Close dropdown":"Open dropdown",tabIndex:-1,children:r.jsx(K,{svgElement:t?ee:ae})}),r.jsx(te,{open:t,onClose:u(()=>p(!1),"onClose"),as:"div",className:h.dropdown,children:r.jsx("div",{id:f,ref:q,role:"listbox",children:r.jsx(re,{role:"group",children:m.map((e,l)=>r.jsx(se,{children:r.jsx(X,{id:`${f}-option-${l}`,role:"option","aria-selected":e.value===i,"data-active":D===l,onClick:u(()=>!e.disabled&&H(e),"onClick"),disabled:e.disabled,as:"div",title:e.label,badge:e.badge})},e.value))})})})]})})},"TextFieldDropdown"),We={title:"Forms/TextFieldDropdown",component:P,parameters:{layout:"padded"},tags:["autodocs"]},b=[{value:"john@example.com",label:"john@example.com"},{value:"jane@example.com",label:"jane@example.com"},{value:"bob@example.com",label:"bob@example.com"},{value:"alice@company.com",label:"alice@company.com"},{value:"matias@gmail.com",label:"matias@gmail.com"}],T={args:{label:"E-postadresse",placeholder:"Enter email",options:b}},j={args:{label:"E-postadresse",value:"matias@gmail.com",options:b,badge:{label:"Verifisert",color:"success",variant:"subtle"}}},_={args:{label:"E-postadresse",placeholder:"Select or enter email",options:[{value:"verified@example.com",label:"verified@example.com",badge:{label:"Verified",color:"success",variant:"subtle"}},{value:"unverified@example.com",label:"unverified@example.com",badge:{label:"Unverified",color:"warning",variant:"subtle"}},{value:"blocked@example.com",label:"blocked@example.com",badge:{label:"Blocked",color:"danger",variant:"subtle"}},{value:"pending@example.com",label:"pending@example.com",badge:{label:"Pending",color:"info",variant:"subtle"}}]}},C={args:{label:"E-postadresse",placeholder:"Enter valid email",options:b,helperText:"Please enter a valid email address",validate:u(o=>o?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o)?!0:"Please enter a valid email address":"Email is required","validate")}},O=u(o=>{const[s,i]=a.useState("");return r.jsxs("div",{children:[r.jsx(P,{...o,value:s,onChange:i,label:"E-postadresse",placeholder:"Select or enter email",options:b,helperText:`Current value: ${s||"none"}`}),r.jsxs("div",{style:{marginTop:"1rem",padding:"1rem",background:"#f5f5f5",borderRadius:"4px"},children:[r.jsx("strong",{children:"Selected value:"})," ",s||"none"]})]})},"Controlled"),y={args:{label:"E-postadresse",value:"user@example.com",options:b,disabled:!0,helperText:"This field is disabled"}},I={args:{label:"E-postadresse",placeholder:"Enter or select email",options:b,helperText:"We will send a verification email to this address"}},$={args:{label:"E-postadresse",placeholder:"Enter email",options:[],helperText:"No suggestions available - enter your email address"}},k={args:{label:"Select User",placeholder:"Search users",options:Array.from({length:50},(o,s)=>({value:`user${s}@example.com`,label:`user${s}@example.com`})),helperText:"Scroll through the dropdown to see all options"}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`(args: TextFieldDropdownProps) => {
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
}`,...O.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'E-postadresse',
    value: 'user@example.com',
    options: emailOptions,
    disabled: true,
    helperText: 'This field is disabled'
  }
}`,...y.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'E-postadresse',
    placeholder: 'Enter or select email',
    options: emailOptions,
    helperText: 'We will send a verification email to this address'
  }
}`,...I.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'E-postadresse',
    placeholder: 'Enter email',
    options: [],
    helperText: 'No suggestions available - enter your email address'
  }
}`,...$.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};const Me=["Default","WithBadge","WithOptionBadges","WithValidation","Controlled","Disabled","WithHelperText","EmptyOptions","ManyOptions"];export{O as Controlled,T as Default,y as Disabled,$ as EmptyOptions,k as ManyOptions,j as WithBadge,I as WithHelperText,_ as WithOptionBadges,C as WithValidation,Me as __namedExportsOrder,We as default};
