import{j as c,r as m}from"./iframe-C6Awlou2.js";import{S as e,a as n}from"./SnackbarItem-DdxfNBL2.js";import{F as p}from"./Flex-CdwLgxBs.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DlBZqmFk.js";import"./useId-InpKFtFj.js";import"./XMark-BEbAfGHw.js";import"./Icon-DNxmTYNY.js";import"./Skeleton-Dzw9idTE.js";import"./Button-xDUaTd0f.js";import"./tooltip-wBWP-9p3.js";const E={title:"Layout/Snackbar/SnackbarItem",component:e,tags:["autodocs"],parameters:{},args:{message:"A message to you."}},r={args:{}},o=s=>{const t=Object.keys(n);return c.jsx(p,{direction:"col",spacing:3,children:t.map(a=>m.createElement(e,{...s,color:a,key:a}))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: SnackbarItemProps) => {
  const colors = Object.keys(SnackbarColorEnum) as SnackbarColor[];
  return <Flex direction="col" spacing={3}>
      {colors.map(color => <SnackbarItem {...args} color={color} key={color} />)}
    </Flex>;
}`,...o.parameters?.docs?.source}}};const j=["Default","Colors"];export{o as Colors,r as Default,j as __namedExportsOrder,E as default};
