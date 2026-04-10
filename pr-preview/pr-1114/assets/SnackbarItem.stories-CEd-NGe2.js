import{j as c,r as m}from"./iframe-bdb8MxAl.js";import{S as e,a as n}from"./SnackbarItem-Dtd5x7zz.js";import{F as p}from"./Flex-7ZoZ5Zdr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-p3wA3m8m.js";import"./useId-m2lwd_Ct.js";import"./XMark-ml8n1JcF.js";import"./Icon-DDIx0qrc.js";import"./Skeleton-BMmeChMq.js";import"./Button-CmmCg_X2.js";import"./button-riuqcLff.js";import"./use-merge-refs-Xyc_Uo3E.js";import"./lite-DaUVFjkg.js";const C={title:"Layout/Snackbar/SnackbarItem",component:e,tags:["autodocs"],parameters:{},args:{message:"A message to you."}},r={args:{}},o=s=>{const t=Object.keys(n);return c.jsx(p,{direction:"col",spacing:3,children:t.map(a=>m.createElement(e,{...s,color:a,key:a}))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: SnackbarItemProps) => {
  const colors = Object.keys(SnackbarColorEnum) as SnackbarColor[];
  return <Flex direction="col" spacing={3}>
      {colors.map(color => <SnackbarItem {...args} color={color} key={color} />)}
    </Flex>;
}`,...o.parameters?.docs?.source}}};const F=["Default","Colors"];export{o as Colors,r as Default,F as __namedExportsOrder,C as default};
