import{j as c,r as m}from"./iframe-CFpZEpOT.js";import{S as e,a as n}from"./SnackbarItem-6mWTi9Db.js";import{F as p}from"./Flex-LzaqVov5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CMCH-iYZ.js";import"./useId-Bpa1--zZ.js";import"./XMark-DsxdrTa7.js";import"./Icon-CcpuJg5J.js";import"./Skeleton-BxeTCVQ2.js";import"./Button-C0rUC1sb.js";import"./button-DcOM5j_b.js";import"./use-merge-refs-DZRIBNsE.js";import"./lite-DaUVFjkg.js";const C={title:"Layout/Snackbar/SnackbarItem",component:e,tags:["autodocs"],parameters:{},args:{message:"A message to you."}},r={args:{}},o=s=>{const t=Object.keys(n);return c.jsx(p,{direction:"col",spacing:3,children:t.map(a=>m.createElement(e,{...s,color:a,key:a}))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: SnackbarItemProps) => {
  const colors = Object.keys(SnackbarColorEnum) as SnackbarColor[];
  return <Flex direction="col" spacing={3}>
      {colors.map(color => <SnackbarItem {...args} color={color} key={color} />)}
    </Flex>;
}`,...o.parameters?.docs?.source}}};const F=["Default","Colors"];export{o as Colors,r as Default,F as __namedExportsOrder,C as default};
