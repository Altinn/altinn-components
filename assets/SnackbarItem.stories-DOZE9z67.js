import{j as c,r as m}from"./iframe-Dip44woq.js";import{S as e,a as n}from"./SnackbarItem-Ss6G254L.js";import{F as p}from"./Flex-DHvZRHuw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B24kaf2B.js";import"./useId-CMLjH0Fx.js";import"./XMark-CynTM0oO.js";import"./Icon-B7B4bUSp.js";import"./Skeleton-CxN7sZWy.js";import"./Button-afp2Zwog.js";import"./button-CZ5tfceY.js";import"./use-merge-refs-BdW2KKDT.js";import"./lite-DaUVFjkg.js";const C={title:"Layout/Snackbar/SnackbarItem",component:e,tags:["autodocs"],parameters:{},args:{message:"A message to you."}},r={args:{}},o=s=>{const t=Object.keys(n);return c.jsx(p,{direction:"col",spacing:3,children:t.map(a=>m.createElement(e,{...s,color:a,key:a}))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: SnackbarItemProps) => {
  const colors = Object.keys(SnackbarColorEnum) as SnackbarColor[];
  return <Flex direction="col" spacing={3}>
      {colors.map(color => <SnackbarItem {...args} color={color} key={color} />)}
    </Flex>;
}`,...o.parameters?.docs?.source}}};const F=["Default","Colors"];export{o as Colors,r as Default,F as __namedExportsOrder,C as default};
