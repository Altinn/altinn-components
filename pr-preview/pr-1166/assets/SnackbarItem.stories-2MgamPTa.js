import{j as c,r as m}from"./iframe-u1jxS1Oq.js";import{S as e,a as n}from"./SnackbarItem-CNyFYmPK.js";import{F as p}from"./Flex-CjSLdTf-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CuIYfQx6.js";import"./useId-MxiBxM6f.js";import"./XMark-Bsujigqn.js";import"./Icon-DjXLk3vD.js";import"./Skeleton-vSjDGrjA.js";import"./Button-BY9-KzE0.js";import"./button-CanOz9MC.js";import"./use-merge-refs-DeN80SPN.js";import"./lite-DaUVFjkg.js";const C={title:"Layout/Snackbar/SnackbarItem",component:e,tags:["autodocs"],parameters:{},args:{message:"A message to you."}},r={args:{}},o=s=>{const t=Object.keys(n);return c.jsx(p,{direction:"col",spacing:3,children:t.map(a=>m.createElement(e,{...s,color:a,key:a}))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: SnackbarItemProps) => {
  const colors = Object.keys(SnackbarColorEnum) as SnackbarColor[];
  return <Flex direction="col" spacing={3}>
      {colors.map(color => <SnackbarItem {...args} color={color} key={color} />)}
    </Flex>;
}`,...o.parameters?.docs?.source}}};const F=["Default","Colors"];export{o as Colors,r as Default,F as __namedExportsOrder,C as default};
