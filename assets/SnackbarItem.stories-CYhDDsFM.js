import{j as c,r as m}from"./iframe-DDirkHus.js";import{S as e,a as n}from"./SnackbarItem-DAVgAj_r.js";import{F as p}from"./Flex-CKMYHSxr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B2YDfdyU.js";import"./useId-CVUrh2ea.js";import"./XMark-DldqIUES.js";import"./Icon-Cv1R39O2.js";import"./Skeleton-0VOrezcL.js";import"./Button-CdMyOsNo.js";import"./button-CnVt3gpj.js";import"./use-merge-refs-CIAaUVpb.js";import"./lite-DaUVFjkg.js";const C={title:"Layout/Snackbar/SnackbarItem",component:e,tags:["autodocs"],parameters:{},args:{message:"A message to you."}},r={args:{}},o=s=>{const t=Object.keys(n);return c.jsx(p,{direction:"col",spacing:3,children:t.map(a=>m.createElement(e,{...s,color:a,key:a}))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: SnackbarItemProps) => {
  const colors = Object.keys(SnackbarColorEnum) as SnackbarColor[];
  return <Flex direction="col" spacing={3}>
      {colors.map(color => <SnackbarItem {...args} color={color} key={color} />)}
    </Flex>;
}`,...o.parameters?.docs?.source}}};const F=["Default","Colors"];export{o as Colors,r as Default,F as __namedExportsOrder,C as default};
