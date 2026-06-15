import{O as e,a7 as c,aa as n,N as m}from"./iframe-Dr1YYpI1.js";import{F as l}from"./Flex-DPnodwFD.js";import"./preload-helper-PPVm8Dsz.js";const d={title:"Layout/Snackbar/SnackbarItem",component:e,tags:["autodocs"],parameters:{},args:{message:"A message to you."}},r={args:{}},a=s=>{const t=Object.keys(m);return c.jsx(l,{direction:"col",spacing:3,children:t.map(o=>n.createElement(e,{...s,color:o,key:o}))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: SnackbarItemProps) => {
  const colors = Object.keys(SnackbarColorEnum) as SnackbarColor[];
  return <Flex direction="col" spacing={3}>
      {colors.map(color => <SnackbarItem {...args} color={color} key={color} />)}
    </Flex>;
}`,...a.parameters?.docs?.source}}};const g=["Default","Colors"];export{a as Colors,r as Default,g as __namedExportsOrder,d as default};
