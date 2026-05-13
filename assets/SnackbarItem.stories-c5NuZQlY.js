import{j as c,r as m}from"./iframe-aW2Ivac6.js";import{S as e,a as n}from"./SnackbarItem-htoadBPz.js";import{F as p}from"./Flex-CJSQwJ4K.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DWa6FdCb.js";import"./useId-DH4aqM3h.js";import"./XMark-DUdkEKb2.js";import"./Icon-CD7MnEv7.js";import"./Skeleton-it7stJ0Q.js";import"./Button-RX-ew4zS.js";import"./button-CCQIf2kf.js";import"./use-merge-refs-CB7-Iow2.js";import"./lite-DaUVFjkg.js";const C={title:"Layout/Snackbar/SnackbarItem",component:e,tags:["autodocs"],parameters:{},args:{message:"A message to you."}},r={args:{}},o=s=>{const t=Object.keys(n);return c.jsx(p,{direction:"col",spacing:3,children:t.map(a=>m.createElement(e,{...s,color:a,key:a}))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: SnackbarItemProps) => {
  const colors = Object.keys(SnackbarColorEnum) as SnackbarColor[];
  return <Flex direction="col" spacing={3}>
      {colors.map(color => <SnackbarItem {...args} color={color} key={color} />)}
    </Flex>;
}`,...o.parameters?.docs?.source}}};const F=["Default","Colors"];export{o as Colors,r as Default,F as __namedExportsOrder,C as default};
