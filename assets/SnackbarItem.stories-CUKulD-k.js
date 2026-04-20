import{j as c,r as m}from"./iframe-CULgtZWU.js";import{S as e,a as n}from"./SnackbarItem-6aSQbeC7.js";import{F as p}from"./Flex-CmyJ6DZP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BvBdYXxj.js";import"./useId-COk2q28h.js";import"./XMark-BCb0_aBA.js";import"./Icon-G4wS9E1h.js";import"./Skeleton-B_F13Udl.js";import"./Button-EDUaKVqz.js";import"./button-DZmMky1p.js";import"./use-merge-refs-BFFvRczq.js";import"./lite-DaUVFjkg.js";const C={title:"Layout/Snackbar/SnackbarItem",component:e,tags:["autodocs"],parameters:{},args:{message:"A message to you."}},r={args:{}},o=s=>{const t=Object.keys(n);return c.jsx(p,{direction:"col",spacing:3,children:t.map(a=>m.createElement(e,{...s,color:a,key:a}))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: SnackbarItemProps) => {
  const colors = Object.keys(SnackbarColorEnum) as SnackbarColor[];
  return <Flex direction="col" spacing={3}>
      {colors.map(color => <SnackbarItem {...args} color={color} key={color} />)}
    </Flex>;
}`,...o.parameters?.docs?.source}}};const F=["Default","Colors"];export{o as Colors,r as Default,F as __namedExportsOrder,C as default};
