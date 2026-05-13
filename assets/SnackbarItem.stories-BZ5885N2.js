import{j as c,r as m}from"./iframe-CpLxKnDM.js";import{S as e,a as n}from"./SnackbarItem-CvyHTtrX.js";import{F as p}from"./Flex-DdRay9SF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BZrYlxzi.js";import"./useId-Dk2QO8VQ.js";import"./XMark-BkFwP2BW.js";import"./Icon-xH6stteC.js";import"./Skeleton-B2kLb9z1.js";import"./Button-DKJNFoHr.js";import"./button-DZ9B7a50.js";import"./use-merge-refs-g_590vId.js";import"./lite-DaUVFjkg.js";const C={title:"Layout/Snackbar/SnackbarItem",component:e,tags:["autodocs"],parameters:{},args:{message:"A message to you."}},r={args:{}},o=s=>{const t=Object.keys(n);return c.jsx(p,{direction:"col",spacing:3,children:t.map(a=>m.createElement(e,{...s,color:a,key:a}))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: SnackbarItemProps) => {
  const colors = Object.keys(SnackbarColorEnum) as SnackbarColor[];
  return <Flex direction="col" spacing={3}>
      {colors.map(color => <SnackbarItem {...args} color={color} key={color} />)}
    </Flex>;
}`,...o.parameters?.docs?.source}}};const F=["Default","Colors"];export{o as Colors,r as Default,F as __namedExportsOrder,C as default};
