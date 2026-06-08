import{a7 as e}from"./iframe-BkdCVhNa.js";import{D as a,M as i,a as u}from"./DialogStatus-B_wtUZ7x.js";import"./preload-helper-PPVm8Dsz.js";import"./Badge-Do4_FWGT.js";import"./Tooltip-wNk76VVd.js";const v={title:"Inbox/Dialog/DialogStatus",component:a,tags:["autodocsi","beta"],parameters:{},argTypes:{value:{options:Object.keys(u)}},args:{}},r=()=>e.jsxs(i,{children:[e.jsx(a,{value:"draft",label:"Utkast"}),e.jsx(a,{value:"requires-attention",label:"Krever handling"}),e.jsx(a,{value:"awaiting",label:"Avventer"}),e.jsx(a,{value:"in-progress",label:"Under arbeid"}),e.jsx(a,{value:"completed",label:"Avsluttet"})]}),t={args:{value:"draft",label:"Utkast"}},s={args:{value:"awaiting",label:"Avventer"}},n={args:{value:"requires-attention",label:"Krever handling"}},l={args:{value:"in-progress",label:"Under arbeid"}},o={args:{value:"completed",label:"Avsluttet"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'in-progress',
    label: 'Under arbeid'
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'completed',
    label: 'Avsluttet'
  }
}`,...o.parameters?.docs?.source}}};const b=["Default","Draft","Awaiting","RequiresAttention","InProgress","Completed"];export{s as Awaiting,o as Completed,r as Default,t as Draft,l as InProgress,n as RequiresAttention,b as __namedExportsOrder,v as default};
