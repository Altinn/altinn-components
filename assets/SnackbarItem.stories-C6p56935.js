import{j as c,r as m}from"./iframe-xsOFb0qB.js";import{S as e,a as n}from"./SnackbarItem-C-sQC3aN.js";import{F as p}from"./Flex-D9aEciRT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C2Njje4x.js";import"./useId-BSkX16Wf.js";import"./XMark-CIyVPbna.js";import"./Icon-Bfs0jdaJ.js";import"./Skeleton-DBfNAA4T.js";import"./Button-BpTRR-R2.js";import"./button-_KGDSi7k.js";import"./use-merge-refs-CVCJxog4.js";import"./lite-DaUVFjkg.js";const C={title:"Layout/Snackbar/SnackbarItem",component:e,tags:["autodocs"],parameters:{},args:{message:"A message to you."}},r={args:{}},o=s=>{const t=Object.keys(n);return c.jsx(p,{direction:"col",spacing:3,children:t.map(a=>m.createElement(e,{...s,color:a,key:a}))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: SnackbarItemProps) => {
  const colors = Object.keys(SnackbarColorEnum) as SnackbarColor[];
  return <Flex direction="col" spacing={3}>
      {colors.map(color => <SnackbarItem {...args} color={color} key={color} />)}
    </Flex>;
}`,...o.parameters?.docs?.source}}};const F=["Default","Colors"];export{o as Colors,r as Default,F as __namedExportsOrder,C as default};
