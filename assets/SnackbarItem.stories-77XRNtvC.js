import{p as c,s as m}from"./iframe-BBbEwSaq.js";import{a as e,S as n}from"./SnackbarItem-36yFbf1n.js";import{F as p}from"./Flex-Cc0Ueohf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-awH0sXcw.js";import"./Icon-Cx6QAjG2.js";import"./Skeleton-DFF9p8Mx.js";import"./useId-DZp72-eX.js";import"./XMark-Dw8JSfSd.js";import"./Button-DpW4Pu6O.js";import"./tooltip-D3G3Ewte.js";const E={title:"Layout/Snackbar/SnackbarItem",component:e,tags:["autodocs"],parameters:{},args:{message:"A message to you."}},r={args:{}},o=s=>{const t=Object.keys(n);return c.jsx(p,{direction:"col",spacing:3,children:t.map(a=>m.createElement(e,{...s,color:a,key:a}))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: SnackbarItemProps) => {
  const colors = Object.keys(SnackbarColorEnum) as SnackbarColor[];
  return <Flex direction="col" spacing={3}>
      {colors.map(color => <SnackbarItem {...args} color={color} key={color} />)}
    </Flex>;
}`,...o.parameters?.docs?.source}}};const C=["Default","Colors"];export{o as Colors,r as Default,C as __namedExportsOrder,E as default};
