import{j as c,r as m}from"./iframe-Nkxls2w0.js";import{S as e,a as n}from"./SnackbarItem-BLKpIP8k.js";import{F as p}from"./Flex-BbiGghB8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-M4TkGQLb.js";import"./useId-C8J5yFeN.js";import"./XMark-D-ALqV0n.js";import"./Icon-qDX4JAC4.js";import"./Skeleton-DNS4c1Rp.js";import"./Button-Ds9vuGVD.js";import"./button-CK59nDyy.js";import"./use-merge-refs-NASGeav9.js";import"./lite-DaUVFjkg.js";const C={title:"Layout/Snackbar/SnackbarItem",component:e,tags:["autodocs"],parameters:{},args:{message:"A message to you."}},r={args:{}},o=s=>{const t=Object.keys(n);return c.jsx(p,{direction:"col",spacing:3,children:t.map(a=>m.createElement(e,{...s,color:a,key:a}))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: SnackbarItemProps) => {
  const colors = Object.keys(SnackbarColorEnum) as SnackbarColor[];
  return <Flex direction="col" spacing={3}>
      {colors.map(color => <SnackbarItem {...args} color={color} key={color} />)}
    </Flex>;
}`,...o.parameters?.docs?.source}}};const F=["Default","Colors"];export{o as Colors,r as Default,F as __namedExportsOrder,C as default};
