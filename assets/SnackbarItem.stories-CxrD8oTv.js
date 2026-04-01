import{j as c,r as m}from"./iframe-DxxW_Hah.js";import{S as e,a as n}from"./SnackbarItem-CgVUD-4x.js";import{F as p}from"./Flex-CRmH3H-L.js";import"./preload-helper-PPVm8Dsz.js";import"./index-pOAXHZ6n.js";import"./useId-CckRU7I8.js";import"./XMark-ChXBbXGN.js";import"./Icon-Cf03fdWw.js";import"./Skeleton-DiRARuJ9.js";import"./Button-CcwbSiKg.js";import"./button-BBYE_PPH.js";import"./use-merge-refs-BbTz5JXs.js";import"./lite-DaUVFjkg.js";const C={title:"Layout/Snackbar/SnackbarItem",component:e,tags:["autodocs"],parameters:{},args:{message:"A message to you."}},r={args:{}},o=s=>{const t=Object.keys(n);return c.jsx(p,{direction:"col",spacing:3,children:t.map(a=>m.createElement(e,{...s,color:a,key:a}))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: SnackbarItemProps) => {
  const colors = Object.keys(SnackbarColorEnum) as SnackbarColor[];
  return <Flex direction="col" spacing={3}>
      {colors.map(color => <SnackbarItem {...args} color={color} key={color} />)}
    </Flex>;
}`,...o.parameters?.docs?.source}}};const F=["Default","Colors"];export{o as Colors,r as Default,F as __namedExportsOrder,C as default};
