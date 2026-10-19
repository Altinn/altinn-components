var p=Object.defineProperty;var i=(u,c)=>p(u,"name",{value:c,configurable:!0});import{a7 as e}from"./iframe-C_3qWz8U.js";import{D as a,a as d}from"./DialogStatus-Cb4q9o8J.js";import{M as m}from"./MetaBase-BoExebNS.js";import"./preload-helper-Cc2_yIPf.js";import"./Badge-BBubxNU6.js";import"./Tooltip-oYeDkYvf.js";const x={title:"Inbox/Dialog/DialogStatus",component:a,tags:["autodocsi","beta"],parameters:{},argTypes:{value:{options:Object.keys(d)}},args:{}},r=i(()=>e.jsxs(m,{children:[e.jsx(a,{value:"draft",label:"Utkast"}),e.jsx(a,{value:"requires-attention",label:"Krever handling"}),e.jsx(a,{value:"awaiting",label:"Avventer"}),e.jsx(a,{value:"in-progress",label:"Under arbeid"}),e.jsx(a,{value:"completed",label:"Avsluttet"})]}),"Default"),t={args:{value:"draft",label:"Utkast"}},s={args:{value:"awaiting",label:"Avventer"}},n={args:{value:"requires-attention",label:"Krever handling"}},o={args:{value:"in-progress",label:"Under arbeid"}},l={args:{value:"completed",label:"Avsluttet"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <MetaBase>
      <DialogStatus value="draft" label="Utkast" />
      <DialogStatus value="requires-attention" label="Krever handling" />
      <DialogStatus value="awaiting" label="Avventer" />
      <DialogStatus value="in-progress" label="Under arbeid" />
      <DialogStatus value="completed" label="Avsluttet" />
    </MetaBase>;
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'draft',
    label: 'Utkast'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'awaiting',
    label: 'Avventer'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'requires-attention',
    label: 'Krever handling'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'in-progress',
    label: 'Under arbeid'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'completed',
    label: 'Avsluttet'
  }
}`,...l.parameters?.docs?.source}}};const j=["Default","Draft","Awaiting","RequiresAttention","InProgress","Completed"];export{s as Awaiting,l as Completed,r as Default,t as Draft,o as InProgress,n as RequiresAttention,j as __namedExportsOrder,x as default};
