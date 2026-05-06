import{j as c,r as m}from"./iframe-Cppd0qv6.js";import{S as e,a as n}from"./SnackbarItem-C6bi_OCY.js";import{F as p}from"./Flex-BPZu7a_-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BRImx9w3.js";import"./useId-BBgZM5Xr.js";import"./XMark-xtLLERRk.js";import"./Icon-DYZqEJGr.js";import"./Skeleton-DZL_2b5i.js";import"./Button-DZtlkh8w.js";import"./button-DXqTFqXv.js";import"./use-merge-refs-BVudX8AY.js";import"./lite-DaUVFjkg.js";const C={title:"Layout/Snackbar/SnackbarItem",component:e,tags:["autodocs"],parameters:{},args:{message:"A message to you."}},r={args:{}},o=s=>{const t=Object.keys(n);return c.jsx(p,{direction:"col",spacing:3,children:t.map(a=>m.createElement(e,{...s,color:a,key:a}))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: SnackbarItemProps) => {
  const colors = Object.keys(SnackbarColorEnum) as SnackbarColor[];
  return <Flex direction="col" spacing={3}>
      {colors.map(color => <SnackbarItem {...args} color={color} key={color} />)}
    </Flex>;
}`,...o.parameters?.docs?.source}}};const F=["Default","Colors"];export{o as Colors,r as Default,F as __namedExportsOrder,C as default};
