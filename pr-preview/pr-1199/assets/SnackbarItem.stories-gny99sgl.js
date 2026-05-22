import{j as c,r as m}from"./iframe-D-ID03Ik.js";import{S as e,a as n}from"./SnackbarItem-CArz5sKl.js";import{F as p}from"./Flex-pOoXofWS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DpFyEq-2.js";import"./useId-DxZoCrQU.js";import"./XMark-DAr8sgUQ.js";import"./Icon-CER3YkDn.js";import"./Skeleton--3bwKnDN.js";import"./Button-CO1zFGa4.js";import"./tooltip-CH7-mov_.js";const E={title:"Layout/Snackbar/SnackbarItem",component:e,tags:["autodocs"],parameters:{},args:{message:"A message to you."}},r={args:{}},o=s=>{const t=Object.keys(n);return c.jsx(p,{direction:"col",spacing:3,children:t.map(a=>m.createElement(e,{...s,color:a,key:a}))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: SnackbarItemProps) => {
  const colors = Object.keys(SnackbarColorEnum) as SnackbarColor[];
  return <Flex direction="col" spacing={3}>
      {colors.map(color => <SnackbarItem {...args} color={color} key={color} />)}
    </Flex>;
}`,...o.parameters?.docs?.source}}};const j=["Default","Colors"];export{o as Colors,r as Default,j as __namedExportsOrder,E as default};
