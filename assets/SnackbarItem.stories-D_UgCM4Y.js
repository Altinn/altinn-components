import{j as c,r as m}from"./iframe-DgiLb7Jh.js";import{S as e,a as n}from"./SnackbarItem-1MjY3wmo.js";import{F as p}from"./Flex-BfnRV8tR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CzzvqmNv.js";import"./useId-6J1VG5PF.js";import"./XMark-DE16CL-6.js";import"./Icon-uoDJWBW9.js";import"./Skeleton-CjXkBVSw.js";import"./Button-D7CoEZHH.js";import"./button-2pQtb28r.js";import"./use-merge-refs-CpvzIuY-.js";import"./lite-DaUVFjkg.js";const C={title:"Layout/Snackbar/SnackbarItem",component:e,tags:["autodocs"],parameters:{},args:{message:"A message to you."}},r={args:{}},o=s=>{const t=Object.keys(n);return c.jsx(p,{direction:"col",spacing:3,children:t.map(a=>m.createElement(e,{...s,color:a,key:a}))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: SnackbarItemProps) => {
  const colors = Object.keys(SnackbarColorEnum) as SnackbarColor[];
  return <Flex direction="col" spacing={3}>
      {colors.map(color => <SnackbarItem {...args} color={color} key={color} />)}
    </Flex>;
}`,...o.parameters?.docs?.source}}};const F=["Default","Colors"];export{o as Colors,r as Default,F as __namedExportsOrder,C as default};
