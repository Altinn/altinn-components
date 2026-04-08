import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-CpyhhMkF.js";import{t as n}from"./jsx-runtime-DwqL_Y-t.js";import{t as r}from"./ToolbarSearch-CCN1tOTa.js";var i=e(t(),1),a=n(),o={title:`Toolbar/ToolbarSearch`,component:r,tags:[`autodocs`],parameters:{},decorators:[(e,t)=>(0,a.jsx)(`div`,{style:{backgroundColor:`var(--ds-color-background-tinted)`,padding:`.5em`},children:(0,a.jsx)(e,{})})],args:{name:`search`}},s={args:{}},c=()=>{let[e,t]=(0,i.useState)(``);return(0,a.jsx)(r,{name:`search`,value:e,onChange:e=>t(e.target.value),onClear:()=>t(``)})},l=()=>{let[e,t]=(0,i.useState)(``);return(0,a.jsx)(r,{collapsible:!0,name:`search`,value:e,onChange:e=>t(e.target.value),onClear:()=>t(``)})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const [q, setQ] = useState('');
  return <ToolbarSearch name="search" value={q} onChange={e => setQ(e.target.value)} onClear={() => setQ('')} />;
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const [q, setQ] = useState('');
  return <ToolbarSearch collapsible name="search" value={q} onChange={e => setQ(e.target.value)} onClear={() => setQ('')} />;
}`,...l.parameters?.docs?.source}}};var u=[`Default`,`Controlled`,`Collapsible`];export{l as Collapsible,c as Controlled,s as Default,u as __namedExportsOrder,o as default};