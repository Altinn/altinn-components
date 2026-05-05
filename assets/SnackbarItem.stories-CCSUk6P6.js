import{j as c,r as m}from"./iframe-0tjTS8nX.js";import{S as e,a as n}from"./SnackbarItem-D_E30x2J.js";import{F as p}from"./Flex-BjLBa1JB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BHkRJabC.js";import"./useId-DNFZveVv.js";import"./XMark-C6HGzv3s.js";import"./Icon-CEoRGh9j.js";import"./Skeleton-CiSYBb75.js";import"./Button-CyTdDQsP.js";import"./button-Cld0y5Q3.js";import"./use-merge-refs-C-O5ch3n.js";import"./lite-DaUVFjkg.js";const C={title:"Layout/Snackbar/SnackbarItem",component:e,tags:["autodocs"],parameters:{},args:{message:"A message to you."}},r={args:{}},o=s=>{const t=Object.keys(n);return c.jsx(p,{direction:"col",spacing:3,children:t.map(a=>m.createElement(e,{...s,color:a,key:a}))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: SnackbarItemProps) => {
  const colors = Object.keys(SnackbarColorEnum) as SnackbarColor[];
  return <Flex direction="col" spacing={3}>
      {colors.map(color => <SnackbarItem {...args} color={color} key={color} />)}
    </Flex>;
}`,...o.parameters?.docs?.source}}};const F=["Default","Colors"];export{o as Colors,r as Default,F as __namedExportsOrder,C as default};
