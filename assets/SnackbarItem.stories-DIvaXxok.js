import{p as c,s as m}from"./iframe-D7BK96qe.js";import{a as e,S as n}from"./SnackbarItem-D0jeSPba.js";import{F as p}from"./Flex-DKrdkBVD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CL9j6gFH.js";import"./Icon-CXOWvudR.js";import"./Skeleton-C-TQnNEe.js";import"./useId-B1IjdNvC.js";import"./XMark-DKvmykI8.js";import"./Button-UbmuloFB.js";import"./tooltip-B8elfXS-.js";const E={title:"Layout/Snackbar/SnackbarItem",component:e,tags:["autodocs"],parameters:{},args:{message:"A message to you."}},r={args:{}},o=s=>{const t=Object.keys(n);return c.jsx(p,{direction:"col",spacing:3,children:t.map(a=>m.createElement(e,{...s,color:a,key:a}))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: SnackbarItemProps) => {
  const colors = Object.keys(SnackbarColorEnum) as SnackbarColor[];
  return <Flex direction="col" spacing={3}>
      {colors.map(color => <SnackbarItem {...args} color={color} key={color} />)}
    </Flex>;
}`,...o.parameters?.docs?.source}}};const C=["Default","Colors"];export{o as Colors,r as Default,C as __namedExportsOrder,E as default};
