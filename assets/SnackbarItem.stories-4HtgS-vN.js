import{j as c,r as m}from"./iframe-CK12xbO6.js";import{S as e,a as n}from"./SnackbarItem-lehD5V9o.js";import{F as p}from"./Flex-DQqIzFyb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DS2SSX1f.js";import"./useId-CIOYGEMY.js";import"./XMark-MadrIoK8.js";import"./Icon-BHUPQGzt.js";import"./Skeleton-CLQkeaUO.js";import"./Button-DTrhNbku.js";import"./button-D6lkouap.js";import"./use-merge-refs-D5gu3XYQ.js";import"./lite-DaUVFjkg.js";const C={title:"Layout/Snackbar/SnackbarItem",component:e,tags:["autodocs"],parameters:{},args:{message:"A message to you."}},r={args:{}},o=s=>{const t=Object.keys(n);return c.jsx(p,{direction:"col",spacing:3,children:t.map(a=>m.createElement(e,{...s,color:a,key:a}))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: SnackbarItemProps) => {
  const colors = Object.keys(SnackbarColorEnum) as SnackbarColor[];
  return <Flex direction="col" spacing={3}>
      {colors.map(color => <SnackbarItem {...args} color={color} key={color} />)}
    </Flex>;
}`,...o.parameters?.docs?.source}}};const F=["Default","Colors"];export{o as Colors,r as Default,F as __namedExportsOrder,C as default};
