import{j as c,r as m}from"./iframe-V8BRfBgT.js";import{S as e,a as n}from"./SnackbarItem-BRTdmptJ.js";import{F as p}from"./Flex-Cr7oVI5u.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dg3z2A9f.js";import"./useId-Cpax_hNq.js";import"./XMark-C45HvrEl.js";import"./Icon-BWOTtVf8.js";import"./Skeleton-BQtaEJM-.js";import"./Button-BlxzDMPI.js";import"./button-2-meUg78.js";import"./use-merge-refs--fAMpcSQ.js";import"./lite-DaUVFjkg.js";const C={title:"Layout/Snackbar/SnackbarItem",component:e,tags:["autodocs"],parameters:{},args:{message:"A message to you."}},r={args:{}},o=s=>{const t=Object.keys(n);return c.jsx(p,{direction:"col",spacing:3,children:t.map(a=>m.createElement(e,{...s,color:a,key:a}))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: SnackbarItemProps) => {
  const colors = Object.keys(SnackbarColorEnum) as SnackbarColor[];
  return <Flex direction="col" spacing={3}>
      {colors.map(color => <SnackbarItem {...args} color={color} key={color} />)}
    </Flex>;
}`,...o.parameters?.docs?.source}}};const F=["Default","Colors"];export{o as Colors,r as Default,F as __namedExportsOrder,C as default};
