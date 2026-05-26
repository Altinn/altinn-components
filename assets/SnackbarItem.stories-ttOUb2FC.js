import{p as c,s as m}from"./iframe-Ca1pxjCh.js";import{a as e,S as n}from"./SnackbarItem-DR0d2s3W.js";import{F as p}from"./Flex-CU26bbCS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-qsemo-NB.js";import"./Icon-DX2teY26.js";import"./Skeleton-CjJRr45L.js";import"./useId-DKdvhqLE.js";import"./XMark-D_G5yHBr.js";import"./Button-BUoYLOjU.js";import"./tooltip-DBInG_0S.js";const E={title:"Layout/Snackbar/SnackbarItem",component:e,tags:["autodocs"],parameters:{},args:{message:"A message to you."}},r={args:{}},o=s=>{const t=Object.keys(n);return c.jsx(p,{direction:"col",spacing:3,children:t.map(a=>m.createElement(e,{...s,color:a,key:a}))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: SnackbarItemProps) => {
  const colors = Object.keys(SnackbarColorEnum) as SnackbarColor[];
  return <Flex direction="col" spacing={3}>
      {colors.map(color => <SnackbarItem {...args} color={color} key={color} />)}
    </Flex>;
}`,...o.parameters?.docs?.source}}};const C=["Default","Colors"];export{o as Colors,r as Default,C as __namedExportsOrder,E as default};
