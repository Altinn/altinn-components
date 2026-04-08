import{t as e}from"./jsx-runtime-DwqL_Y-t.js";import{n as t,r as n,t as r}from"./DialogStatus-DZMpk9-m.js";var i=e(),a={title:`Inbox/Dialog/DialogStatus`,component:r,tags:[`autodocsi`,`beta`],parameters:{},argTypes:{value:{options:Object.keys(t)}},args:{}},o=()=>(0,i.jsxs)(n,{children:[(0,i.jsx)(r,{value:`draft`,label:`Utkast`}),(0,i.jsx)(r,{value:`requires-attention`,label:`Krever handling`}),(0,i.jsx)(r,{value:`awaiting`,label:`Avventer`}),(0,i.jsx)(r,{value:`in-progress`,label:`Under arbeid`}),(0,i.jsx)(r,{value:`completed`,label:`Avsluttet`})]}),s={args:{value:`draft`,label:`Utkast`}},c={args:{value:`awaiting`,label:`Avventer`}},l={args:{value:`requires-attention`,label:`Krever handling`}},u={args:{value:`in-progress`,label:`Under arbeid`}},d={args:{value:`completed`,label:`Avsluttet`}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <MetaBase>
      <DialogStatus value="draft" label="Utkast" />
      <DialogStatus value="requires-attention" label="Krever handling" />
      <DialogStatus value="awaiting" label="Avventer" />
      <DialogStatus value="in-progress" label="Under arbeid" />
      <DialogStatus value="completed" label="Avsluttet" />
    </MetaBase>;
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'draft',
    label: 'Utkast'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'awaiting',
    label: 'Avventer'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'requires-attention',
    label: 'Krever handling'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'in-progress',
    label: 'Under arbeid'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'completed',
    label: 'Avsluttet'
  }
}`,...d.parameters?.docs?.source}}};var f=[`Default`,`Draft`,`Awaiting`,`RequiresAttention`,`InProgress`,`Completed`];export{c as Awaiting,d as Completed,o as Default,s as Draft,u as InProgress,l as RequiresAttention,f as __namedExportsOrder,a as default};