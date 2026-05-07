import{j as c,r as m}from"./iframe-BakMcPB9.js";import{S as e,a as n}from"./SnackbarItem-B8kWeQVc.js";import{F as p}from"./Flex-73Lku4Kd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DAwqyEdM.js";import"./useId-Btw-Kuqp.js";import"./XMark-D8cLqedS.js";import"./Icon-D4ysQTre.js";import"./Skeleton-CIZGLt5B.js";import"./Button-BJ-P2q8B.js";import"./button-Dqq-cscz.js";import"./use-merge-refs-CJ9f1t94.js";import"./lite-DaUVFjkg.js";const C={title:"Layout/Snackbar/SnackbarItem",component:e,tags:["autodocs"],parameters:{},args:{message:"A message to you."}},r={args:{}},o=s=>{const t=Object.keys(n);return c.jsx(p,{direction:"col",spacing:3,children:t.map(a=>m.createElement(e,{...s,color:a,key:a}))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: SnackbarItemProps) => {
  const colors = Object.keys(SnackbarColorEnum) as SnackbarColor[];
  return <Flex direction="col" spacing={3}>
      {colors.map(color => <SnackbarItem {...args} color={color} key={color} />)}
    </Flex>;
}`,...o.parameters?.docs?.source}}};const F=["Default","Colors"];export{o as Colors,r as Default,F as __namedExportsOrder,C as default};
