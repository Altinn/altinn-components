import{j as c,r as m}from"./iframe-CZMLD2fe.js";import{S as e,a as n}from"./SnackbarItem-BcPwVhyR.js";import{F as p}from"./Flex-oWhCvzqt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-iGjPLQV7.js";import"./useId-Dmu9AgSD.js";import"./XMark-BBRiAlI8.js";import"./Icon-CbE8dCFV.js";import"./Skeleton-D52MvI5U.js";import"./Button-z0ZioQWK.js";import"./button-CZknkFMR.js";import"./use-merge-refs-BZH6UNTX.js";import"./lite-DaUVFjkg.js";const C={title:"Layout/Snackbar/SnackbarItem",component:e,tags:["autodocs"],parameters:{},args:{message:"A message to you."}},r={args:{}},o=s=>{const t=Object.keys(n);return c.jsx(p,{direction:"col",spacing:3,children:t.map(a=>m.createElement(e,{...s,color:a,key:a}))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: SnackbarItemProps) => {
  const colors = Object.keys(SnackbarColorEnum) as SnackbarColor[];
  return <Flex direction="col" spacing={3}>
      {colors.map(color => <SnackbarItem {...args} color={color} key={color} />)}
    </Flex>;
}`,...o.parameters?.docs?.source}}};const F=["Default","Colors"];export{o as Colors,r as Default,F as __namedExportsOrder,C as default};
