import{j as c,r as m}from"./iframe-BJEbXdzo.js";import{S as e,a as n}from"./SnackbarItem-tB11vlo-.js";import{F as p}from"./Flex-DRE_amb0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ChGHkNNv.js";import"./useId-DgrNWXh_.js";import"./XMark-sTHnj54s.js";import"./Icon-msEkDcFf.js";import"./Skeleton-DWcIZ1wH.js";import"./Button-DNsjk1zC.js";import"./button-3a31VMtF.js";import"./use-merge-refs-BwmZcoLX.js";import"./lite-DaUVFjkg.js";const C={title:"Layout/Snackbar/SnackbarItem",component:e,tags:["autodocs"],parameters:{},args:{message:"A message to you."}},r={args:{}},o=s=>{const t=Object.keys(n);return c.jsx(p,{direction:"col",spacing:3,children:t.map(a=>m.createElement(e,{...s,color:a,key:a}))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: SnackbarItemProps) => {
  const colors = Object.keys(SnackbarColorEnum) as SnackbarColor[];
  return <Flex direction="col" spacing={3}>
      {colors.map(color => <SnackbarItem {...args} color={color} key={color} />)}
    </Flex>;
}`,...o.parameters?.docs?.source}}};const F=["Default","Colors"];export{o as Colors,r as Default,F as __namedExportsOrder,C as default};
