import{j as c,r as m}from"./iframe-0B_Yudin.js";import{S as e,a as n}from"./SnackbarItem-DkXanLdj.js";import{F as p}from"./Flex-CcsVAtXA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-bzqtFzN_.js";import"./useId-BUxMg0Ir.js";import"./XMark-4vnuAWTz.js";import"./Icon-CbCRlB_g.js";import"./Skeleton-CCW5QxrE.js";import"./Button-CFVlP8iN.js";import"./button-B4QTcVhB.js";import"./use-merge-refs-ymJsCjoB.js";import"./lite-DaUVFjkg.js";const C={title:"Layout/Snackbar/SnackbarItem",component:e,tags:["autodocs"],parameters:{},args:{message:"A message to you."}},r={args:{}},o=s=>{const t=Object.keys(n);return c.jsx(p,{direction:"col",spacing:3,children:t.map(a=>m.createElement(e,{...s,color:a,key:a}))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: SnackbarItemProps) => {
  const colors = Object.keys(SnackbarColorEnum) as SnackbarColor[];
  return <Flex direction="col" spacing={3}>
      {colors.map(color => <SnackbarItem {...args} color={color} key={color} />)}
    </Flex>;
}`,...o.parameters?.docs?.source}}};const F=["Default","Colors"];export{o as Colors,r as Default,F as __namedExportsOrder,C as default};
