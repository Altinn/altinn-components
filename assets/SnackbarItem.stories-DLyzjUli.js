import{j as c,r as m}from"./iframe-yBEatwQ0.js";import{S as e,a as n}from"./SnackbarItem-BcxOXcEI.js";import{F as p}from"./Flex-Co0GST2J.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B7J_eA84.js";import"./useId-DyCIbqyR.js";import"./XMark-DRdfunCf.js";import"./Icon-m6GSRHhZ.js";import"./Skeleton-D2AOT5bt.js";import"./Button-Du_F5DdO.js";import"./button-DDduZyu8.js";import"./use-merge-refs-BCyRe6aJ.js";import"./lite-DaUVFjkg.js";const C={title:"Layout/Snackbar/SnackbarItem",component:e,tags:["autodocs"],parameters:{},args:{message:"A message to you."}},r={args:{}},o=s=>{const t=Object.keys(n);return c.jsx(p,{direction:"col",spacing:3,children:t.map(a=>m.createElement(e,{...s,color:a,key:a}))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: SnackbarItemProps) => {
  const colors = Object.keys(SnackbarColorEnum) as SnackbarColor[];
  return <Flex direction="col" spacing={3}>
      {colors.map(color => <SnackbarItem {...args} color={color} key={color} />)}
    </Flex>;
}`,...o.parameters?.docs?.source}}};const F=["Default","Colors"];export{o as Colors,r as Default,F as __namedExportsOrder,C as default};
