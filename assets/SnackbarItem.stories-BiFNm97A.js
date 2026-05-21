import{j as c,r as m}from"./iframe-CXxOXnma.js";import{S as e,a as n}from"./SnackbarItem-DVhX9DPT.js";import{F as p}from"./Flex-Cdw8i_ge.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DvzmMrBu.js";import"./useId-CYy4MNIP.js";import"./XMark-DvGwYctt.js";import"./Icon-CyU2k-nr.js";import"./Skeleton-DaZzKoDP.js";import"./Button-Dot-dF6F.js";import"./tooltip-F-8CLWbq.js";const E={title:"Layout/Snackbar/SnackbarItem",component:e,tags:["autodocs"],parameters:{},args:{message:"A message to you."}},r={args:{}},o=s=>{const t=Object.keys(n);return c.jsx(p,{direction:"col",spacing:3,children:t.map(a=>m.createElement(e,{...s,color:a,key:a}))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: SnackbarItemProps) => {
  const colors = Object.keys(SnackbarColorEnum) as SnackbarColor[];
  return <Flex direction="col" spacing={3}>
      {colors.map(color => <SnackbarItem {...args} color={color} key={color} />)}
    </Flex>;
}`,...o.parameters?.docs?.source}}};const j=["Default","Colors"];export{o as Colors,r as Default,j as __namedExportsOrder,E as default};
