"use client";import{r as a,j as r}from"./iframe-BmFIVBn_.js";import{u as H}from"./useClickOutside-DEjsvD2U.js";import{B as z}from"./Badge-DoiHwmxA.js";import{D as G}from"./DropdownBase-BLNkKCkf.js";import{I as J}from"./Icon-zZDqlwOf.js";import{M as K}from"./MenuItem-BvPBRlig.js";import{F as Q}from"./FieldBase-Cx6yKeh2.js";import{I as X}from"./Input-D2BG68i3.js";import{S as Y}from"./ChevronUp-DNi3P42Z.js";import{S as Z}from"./ChevronDown-B_BWwBHT.js";import{M as ee,a as ae}from"./MenuListItem-INuSyNfv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-3BUTcXKg.js";import"./Skeleton-DRn19mA6.js";import"./ItemMedia-CCYQNyqL.js";import"./XMark-DPeWQ31a.js";import"./useId-ClegSKnE.js";import"./Avatar-Zvdkk7EN.js";import"./AvatarGroup-DqX7R4kJ.js";import"./Checkmark-DWNi5SDl.js";import"./Heading-D2Zb4ZMb.js";import"./useHighlightedText-Dq-XqtYP.js";import"./ItemControls-B2xjI1HN.js";import"./ChevronRight-DcRWf4tm.js";import"./Typography-CMiy0gec.js";import"./Label-D7uBca_a.js";import"./index-32OlLxJ9.js";import"./use-merge-refs-C8jIJdDy.js";import"./lite-DaUVFjkg.js";import"./input-DVOXybW4.js";const re="_container_8jcxe_1",oe="_input_8jcxe_7",se="_badge_8jcxe_15",le="_dropdownTrigger_8jcxe_36",te="_dropdown_8jcxe_36",b={container:re,input:oe,badge:se,dropdownTrigger:le,dropdown:te},W=({label:n,helperText:l,value:d="",onChange:v,options:_,validate:y,badge:u,disabled:p,size:V,color:M,className:F,...N})=>{const g=a.useId(),[s,i]=a.useState(!1),[t,I]=a.useState(d),[k,R]=a.useState(-1),[x,P]=a.useState(null),$=a.useRef(null),D=a.useRef(null),L=a.useRef(null);H($,()=>{s&&(i(!1),R(-1))});const c=a.useMemo(()=>t?_.filter(e=>e.label.toLowerCase().includes(t.toLowerCase())):_,[t,_]);a.useEffect(()=>{I(d)},[d]),a.useEffect(()=>{if(!y)return;const e=setTimeout(()=>{const o=y(t);P(typeof o=="string"?o:o?null:"Invalid value")},300);return()=>clearTimeout(e)},[t,y]),a.useEffect(()=>{if(p||!t)return;const e=c.some(o=>o.label.toLowerCase()===t.toLowerCase());c.length>0&&!e&&!s?i(!0):s&&c.length===0&&i(!1)},[t,c,s,p]);const U=a.useCallback(e=>{const o=e.target.value;I(o),v?.(o)},[v]),A=a.useCallback(e=>{I(e.label),v?.(e.value),i(!1),R(-1),D.current?.focus()},[v]),q=a.useCallback(()=>{p||(s?(i(!1),R(-1)):c.length>0&&i(!0))},[p,s,c.length]),B=x?"danger":M;return r.jsx(Q,{size:V,color:B,label:n,helperText:x||l,className:F,children:r.jsxs("div",{className:b.container,ref:$,children:[r.jsx(X,{...N,ref:D,value:t,onChange:U,disabled:p,size:V,color:B,className:b.input,role:"combobox","aria-expanded":s,"aria-controls":g,"aria-autocomplete":"list","aria-activedescendant":k>=0?`${g}-option-${k}`:void 0,"aria-invalid":!!x,"aria-describedby":x?`${g}-error`:void 0,"data-has-badge":!!u}),u&&r.jsx("span",{className:b.badge,children:r.jsx(z,{label:u.label,color:u.color,variant:u.variant||"subtle",size:"sm"})}),r.jsx("button",{type:"button",className:b.dropdownTrigger,onClick:q,disabled:p,"aria-label":s?"Close dropdown":"Open dropdown",tabIndex:-1,children:r.jsx(J,{svgElement:s?Y:Z})}),r.jsx(G,{open:s,onClose:()=>i(!1),as:"div",className:b.dropdown,children:r.jsx("div",{id:g,ref:L,role:"listbox",children:r.jsx(ee,{role:"group",children:c.map((e,o)=>r.jsx(ae,{children:r.jsx(K,{id:`${g}-option-${o}`,role:"option","aria-selected":e.value===d,"data-active":k===o,onClick:()=>!e.disabled&&A(e),disabled:e.disabled,as:"div",title:e.label,badge:e.badge})},e.value))})})})]})})},Me={title:"Forms/TextFieldDropdown",component:W,parameters:{layout:"padded"},tags:["autodocs"]},m=[{value:"john@example.com",label:"john@example.com"},{value:"jane@example.com",label:"jane@example.com"},{value:"bob@example.com",label:"bob@example.com"},{value:"alice@company.com",label:"alice@company.com"},{value:"matias@gmail.com",label:"matias@gmail.com"}],f={args:{label:"E-postadresse",placeholder:"Enter email",options:m}},h={args:{label:"E-postadresse",value:"matias@gmail.com",options:m,badge:{label:"Verifisert",color:"success",variant:"subtle"}}},E={args:{label:"E-postadresse",placeholder:"Select or enter email",options:[{value:"verified@example.com",label:"verified@example.com",badge:{label:"Verified",color:"success",variant:"subtle"}},{value:"unverified@example.com",label:"unverified@example.com",badge:{label:"Unverified",color:"warning",variant:"subtle"}},{value:"blocked@example.com",label:"blocked@example.com",badge:{label:"Blocked",color:"danger",variant:"subtle"}},{value:"pending@example.com",label:"pending@example.com",badge:{label:"Pending",color:"info",variant:"subtle"}}]}},S={args:{label:"E-postadresse",placeholder:"Enter valid email",options:m,helperText:"Please enter a valid email address",validate:n=>n?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)?!0:"Please enter a valid email address":"Email is required"}},w=n=>{const[l,d]=a.useState("");return r.jsxs("div",{children:[r.jsx(W,{...n,value:l,onChange:d,label:"E-postadresse",placeholder:"Select or enter email",options:m,helperText:`Current value: ${l||"none"}`}),r.jsxs("div",{style:{marginTop:"1rem",padding:"1rem",background:"#f5f5f5",borderRadius:"4px"},children:[r.jsx("strong",{children:"Selected value:"})," ",l||"none"]})]})},T={args:{label:"E-postadresse",value:"user@example.com",options:m,disabled:!0,helperText:"This field is disabled"}},j={args:{label:"E-postadresse",placeholder:"Enter or select email",options:m,helperText:"We will send a verification email to this address"}},O={args:{label:"E-postadresse",placeholder:"Enter email",options:[],helperText:"No suggestions available - enter your email address"}},C={args:{label:"Select User",placeholder:"Search users",options:Array.from({length:50},(n,l)=>({value:`user${l}@example.com`,label:`user${l}@example.com`})),helperText:"Scroll through the dropdown to see all options"}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'E-postadresse',
    placeholder: 'Enter email',
    options: emailOptions
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`(args: TextFieldDropdownProps) => {
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
}`,...w.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'E-postadresse',
    value: 'user@example.com',
    options: emailOptions,
    disabled: true,
    helperText: 'This field is disabled'
  }
}`,...T.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'E-postadresse',
    placeholder: 'Enter or select email',
    options: emailOptions,
    helperText: 'We will send a verification email to this address'
  }
}`,...j.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'E-postadresse',
    placeholder: 'Enter email',
    options: [],
    helperText: 'No suggestions available - enter your email address'
  }
}`,...O.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};const Fe=["Default","WithBadge","WithOptionBadges","WithValidation","Controlled","Disabled","WithHelperText","EmptyOptions","ManyOptions"];export{w as Controlled,f as Default,T as Disabled,O as EmptyOptions,C as ManyOptions,h as WithBadge,j as WithHelperText,E as WithOptionBadges,S as WithValidation,Fe as __namedExportsOrder,Me as default};
