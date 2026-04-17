import{j as c,r as m}from"./iframe-C30XMp4u.js";import{S as e,a as n}from"./SnackbarItem-DHA53BMQ.js";import{F as p}from"./Flex-Olz8YtsP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dfjgmy9H.js";import"./useId-k4Xjw1TB.js";import"./XMark-ZCF0kQw6.js";import"./Icon-BW7eZq3t.js";import"./Skeleton-DYu3bsVd.js";import"./Button-DDYo0e3Y.js";import"./button-vIDiYGt4.js";import"./use-merge-refs-DdAPjJhd.js";import"./lite-DaUVFjkg.js";const C={title:"Layout/Snackbar/SnackbarItem",component:e,tags:["autodocs"],parameters:{},args:{message:"A message to you."}},r={args:{}},o=s=>{const t=Object.keys(n);return c.jsx(p,{direction:"col",spacing:3,children:t.map(a=>m.createElement(e,{...s,color:a,key:a}))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: SnackbarItemProps) => {
  const colors = Object.keys(SnackbarColorEnum) as SnackbarColor[];
  return <Flex direction="col" spacing={3}>
      {colors.map(color => <SnackbarItem {...args} color={color} key={color} />)}
    </Flex>;
}`,...o.parameters?.docs?.source}}};const F=["Default","Colors"];export{o as Colors,r as Default,F as __namedExportsOrder,C as default};
