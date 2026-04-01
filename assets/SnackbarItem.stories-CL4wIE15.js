import{j as c,r as m}from"./iframe-DxKlu2kD.js";import{S as e,a as n}from"./SnackbarItem-CfRCEjO8.js";import{F as p}from"./Flex-CFZAXqgp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BWCSYHeO.js";import"./useId-_YfdAmsW.js";import"./XMark-C1fx_pyo.js";import"./Icon-CrZKj0Yv.js";import"./Skeleton-niSIm0IT.js";import"./Button-D78I7hWM.js";import"./button-B-2CHja_.js";import"./use-merge-refs-CvQTDNhp.js";import"./lite-DaUVFjkg.js";const C={title:"Layout/Snackbar/SnackbarItem",component:e,tags:["autodocs"],parameters:{},args:{message:"A message to you."}},r={args:{}},o=s=>{const t=Object.keys(n);return c.jsx(p,{direction:"col",spacing:3,children:t.map(a=>m.createElement(e,{...s,color:a,key:a}))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: SnackbarItemProps) => {
  const colors = Object.keys(SnackbarColorEnum) as SnackbarColor[];
  return <Flex direction="col" spacing={3}>
      {colors.map(color => <SnackbarItem {...args} color={color} key={color} />)}
    </Flex>;
}`,...o.parameters?.docs?.source}}};const F=["Default","Colors"];export{o as Colors,r as Default,F as __namedExportsOrder,C as default};
