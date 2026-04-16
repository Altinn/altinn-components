import{j as c,r as m}from"./iframe-qDHSBZ_X.js";import{S as e,a as n}from"./SnackbarItem-9Y8xzHFh.js";import{F as p}from"./Flex-BTOiCOb2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DTh2bawh.js";import"./useId-DLE_nI5l.js";import"./XMark-D8iHP3Cp.js";import"./Icon-BDVkMuHy.js";import"./Skeleton-CJ3n2_6V.js";import"./Button-DJMfIG2l.js";import"./button-CfQ7EAt1.js";import"./use-merge-refs-BMfrfQuo.js";import"./lite-DaUVFjkg.js";const C={title:"Layout/Snackbar/SnackbarItem",component:e,tags:["autodocs"],parameters:{},args:{message:"A message to you."}},r={args:{}},o=s=>{const t=Object.keys(n);return c.jsx(p,{direction:"col",spacing:3,children:t.map(a=>m.createElement(e,{...s,color:a,key:a}))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: SnackbarItemProps) => {
  const colors = Object.keys(SnackbarColorEnum) as SnackbarColor[];
  return <Flex direction="col" spacing={3}>
      {colors.map(color => <SnackbarItem {...args} color={color} key={color} />)}
    </Flex>;
}`,...o.parameters?.docs?.source}}};const F=["Default","Colors"];export{o as Colors,r as Default,F as __namedExportsOrder,C as default};
