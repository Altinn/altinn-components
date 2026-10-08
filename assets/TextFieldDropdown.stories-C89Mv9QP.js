"use client";import{aa as a,a7 as r,a3 as z,I as G}from"./iframe-BKcGtkf2.js";import{u as N}from"./useClickOutside-BxwJggxE.js";import{B as J}from"./Badge-CPABd3pg.js";import{M as K}from"./MenuItem-BPSVutJE.js";import{F as Q}from"./FieldBase-kOxFDexg.js";import{I as X}from"./Input-C7NN4jQM.js";import{S as Y}from"./ChevronUp-DoWxH2Yl.js";import{S as Z}from"./ChevronDown-Jc6dKi_G.js";import{M as ee,a as ae}from"./MenuListItem-q_h-S_lZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-PYsK9SJI.js";import"./ItemMedia-DmxCD2ZI.js";import"./Avatar-BD71BIVo.js";import"./AvatarGroup-Chghs2c1.js";import"./Checkmark-57W1Byq3.js";import"./ItemLabel-DZ6-a4p7.js";import"./Heading-iI-qniD3.js";import"./useHighlightedText-Qdo-jqVR.js";import"./ItemControls-sjDYc_Mm.js";import"./ChevronRight-Bik0Rfts.js";import"./Typography-CpSlwMZW.js";import"./Field-DGa34R2s.js";import"./Label-D5VJqQJd.js";const re="_dropdown_fqgmt_1",se={dropdown:re},oe=({layout:t,size:s="auto",placement:i="left",padding:u=!0,open:b=!1,className:v,children:c,onClose:d,as:h="div"})=>{const E=a.useRef(null);N(E,d);const k=h;return r.jsx(k,{ref:E,className:z(se.dropdown,v),"data-layout":t,"data-theme":"default","data-shadow":"md","data-size":s,"data-placement":i,"data-padding":u,"data-expanded":b,children:c})},le="_container_8jcxe_1",te="_input_8jcxe_7",ne="_badge_8jcxe_15",ie="_dropdownTrigger_8jcxe_36",de="_dropdown_8jcxe_36",f={container:le,input:te,badge:ne,dropdownTrigger:ie,dropdown:de},F=({label:t,helperText:s,value:i="",onChange:u,options:b,validate:v,badge:c,disabled:d,size:h,color:E,className:k,...P})=>{const x=a.useId(),[l,p]=a.useState(!1),[n,R]=a.useState(i),[V,D]=a.useState(-1),[w,L]=a.useState(null),B=a.useRef(null),W=a.useRef(null),U=a.useRef(null);N(B,()=>{l&&(p(!1),D(-1))});const m=a.useMemo(()=>n?b.filter(e=>e.label.toLowerCase().includes(n.toLowerCase())):b,[n,b]);a.useEffect(()=>{R(i)},[i]),a.useEffect(()=>{if(!v)return;const e=setTimeout(()=>{const o=v(n);L(typeof o=="string"?o:o?null:"Invalid value")},300);return()=>clearTimeout(e)},[n,v]),a.useEffect(()=>{if(d||!n)return;const e=m.some(o=>o.label.toLowerCase()===n.toLowerCase());m.length>0&&!e&&!l?p(!0):l&&m.length===0&&p(!1)},[n,m,l,d]);const q=a.useCallback(e=>{const o=e.target.value;R(o),u?.(o)},[u]),A=a.useCallback(e=>{R(e.label),u?.(e.value),p(!1),D(-1),W.current?.focus()},[u]),H=a.useCallback(()=>{d||(l?(p(!1),D(-1)):m.length>0&&p(!0))},[d,l,m.length]),M=w?"danger":E;return r.jsx(Q,{size:h,color:M,label:t,helperText:w||s,className:k,children:r.jsxs("div",{className:f.container,ref:B,children:[r.jsx(X,{...P,ref:W,value:n,onChange:q,disabled:d,size:h,color:M,className:f.input,role:"combobox","aria-expanded":l,"aria-controls":x,"aria-autocomplete":"list","aria-activedescendant":V>=0?`${x}-option-${V}`:void 0,"aria-invalid":!!w,"aria-describedby":w?`${x}-error`:void 0,"data-has-badge":!!c}),c&&r.jsx("span",{className:f.badge,children:r.jsx(J,{label:c.label,color:c.color,variant:c.variant||"subtle",size:"sm"})}),r.jsx("button",{type:"button",className:f.dropdownTrigger,onClick:H,disabled:d,"aria-label":l?"Close dropdown":"Open dropdown",tabIndex:-1,children:r.jsx(G,{svgElement:l?Y:Z})}),r.jsx(oe,{open:l,onClose:()=>p(!1),as:"div",className:f.dropdown,children:r.jsx("div",{id:x,ref:U,role:"listbox",children:r.jsx(ee,{role:"group",children:m.map((e,o)=>r.jsx(ae,{children:r.jsx(K,{id:`${x}-option-${o}`,role:"option","aria-selected":e.value===i,"data-active":V===o,onClick:()=>!e.disabled&&A(e),disabled:e.disabled,as:"div",title:e.label,badge:e.badge})},e.value))})})})]})})},Ve={title:"Forms/TextFieldDropdown",component:F,parameters:{layout:"padded"},tags:["autodocs"]},g=[{value:"john@example.com",label:"john@example.com"},{value:"jane@example.com",label:"jane@example.com"},{value:"bob@example.com",label:"bob@example.com"},{value:"alice@company.com",label:"alice@company.com"},{value:"matias@gmail.com",label:"matias@gmail.com"}],S={args:{label:"E-postadresse",placeholder:"Enter email",options:g}},T={args:{label:"E-postadresse",value:"matias@gmail.com",options:g,badge:{label:"Verifisert",color:"success",variant:"subtle"}}},j={args:{label:"E-postadresse",placeholder:"Select or enter email",options:[{value:"verified@example.com",label:"verified@example.com",badge:{label:"Verified",color:"success",variant:"subtle"}},{value:"unverified@example.com",label:"unverified@example.com",badge:{label:"Unverified",color:"warning",variant:"subtle"}},{value:"blocked@example.com",label:"blocked@example.com",badge:{label:"Blocked",color:"danger",variant:"subtle"}},{value:"pending@example.com",label:"pending@example.com",badge:{label:"Pending",color:"info",variant:"subtle"}}]}},_={args:{label:"E-postadresse",placeholder:"Enter valid email",options:g,helperText:"Please enter a valid email address",validate:t=>t?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)?!0:"Please enter a valid email address":"Email is required"}},C=t=>{const[s,i]=a.useState("");return r.jsxs("div",{children:[r.jsx(F,{...t,value:s,onChange:i,label:"E-postadresse",placeholder:"Select or enter email",options:g,helperText:`Current value: ${s||"none"}`}),r.jsxs("div",{style:{marginTop:"1rem",padding:"1rem",background:"#f5f5f5",borderRadius:"4px"},children:[r.jsx("strong",{children:"Selected value:"})," ",s||"none"]})]})},O={args:{label:"E-postadresse",value:"user@example.com",options:g,disabled:!0,helperText:"This field is disabled"}},y={args:{label:"E-postadresse",placeholder:"Enter or select email",options:g,helperText:"We will send a verification email to this address"}},I={args:{label:"E-postadresse",placeholder:"Enter email",options:[],helperText:"No suggestions available - enter your email address"}},$={args:{label:"Select User",placeholder:"Search users",options:Array.from({length:50},(t,s)=>({value:`user${s}@example.com`,label:`user${s}@example.com`})),helperText:"Scroll through the dropdown to see all options"}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'E-postadresse',
    placeholder: 'Enter email',
    options: emailOptions
  }
}`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`(args: TextFieldDropdownProps) => {
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
}`,...C.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'E-postadresse',
    value: 'user@example.com',
    options: emailOptions,
    disabled: true,
    helperText: 'This field is disabled'
  }
}`,...O.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'E-postadresse',
    placeholder: 'Enter or select email',
    options: emailOptions,
    helperText: 'We will send a verification email to this address'
  }
}`,...y.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};const De=["Default","WithBadge","WithOptionBadges","WithValidation","Controlled","Disabled","WithHelperText","EmptyOptions","ManyOptions"];export{C as Controlled,S as Default,O as Disabled,I as EmptyOptions,$ as ManyOptions,T as WithBadge,y as WithHelperText,j as WithOptionBadges,_ as WithValidation,De as __namedExportsOrder,Ve as default};
