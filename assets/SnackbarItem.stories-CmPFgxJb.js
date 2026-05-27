import{p as c,s as m}from"./iframe-WHERbRNQ.js";import{a as e,S as n}from"./SnackbarItem-BnQp3cRa.js";import{F as p}from"./Flex-DJNl6q2s.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CPQpJFkN.js";import"./Icon-jpLauUO9.js";import"./Skeleton-rNcUZaAx.js";import"./useId-BfbJ7PbP.js";import"./XMark-5kXogJ_J.js";import"./Button-DkTjWAj1.js";import"./tooltip-C7TGaz5I.js";const E={title:"Layout/Snackbar/SnackbarItem",component:e,tags:["autodocs"],parameters:{},args:{message:"A message to you."}},r={args:{}},o=s=>{const t=Object.keys(n);return c.jsx(p,{direction:"col",spacing:3,children:t.map(a=>m.createElement(e,{...s,color:a,key:a}))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: SnackbarItemProps) => {
  const colors = Object.keys(SnackbarColorEnum) as SnackbarColor[];
  return <Flex direction="col" spacing={3}>
      {colors.map(color => <SnackbarItem {...args} color={color} key={color} />)}
    </Flex>;
}`,...o.parameters?.docs?.source}}};const C=["Default","Colors"];export{o as Colors,r as Default,C as __namedExportsOrder,E as default};
