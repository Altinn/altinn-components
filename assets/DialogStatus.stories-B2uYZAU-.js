import{a7 as e}from"./iframe-DymAqe7-.js";import{D as a,a as i}from"./DialogStatus-CdCYnJjl.js";import{M as u}from"./MetaBase-kHGXUzgN.js";import"./preload-helper-PPVm8Dsz.js";import"./Badge-FB3xbQux.js";import"./Tooltip-BfF0ydp0.js";const b={title:"Inbox/Dialog/DialogStatus",component:a,tags:["autodocsi","beta"],parameters:{},argTypes:{value:{options:Object.keys(i)}},args:{}},r=()=>e.jsxs(u,{children:[e.jsx(a,{value:"draft",label:"Utkast"}),e.jsx(a,{value:"requires-attention",label:"Krever handling"}),e.jsx(a,{value:"awaiting",label:"Avventer"}),e.jsx(a,{value:"in-progress",label:"Under arbeid"}),e.jsx(a,{value:"completed",label:"Avsluttet"})]}),t={args:{value:"draft",label:"Utkast"}},s={args:{value:"awaiting",label:"Avventer"}},n={args:{value:"requires-attention",label:"Krever handling"}},o={args:{value:"in-progress",label:"Under arbeid"}},l={args:{value:"completed",label:"Avsluttet"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}};const D=["Default","Draft","Awaiting","RequiresAttention","InProgress","Completed"];export{s as Awaiting,l as Completed,r as Default,t as Draft,o as InProgress,n as RequiresAttention,D as __namedExportsOrder,b as default};
