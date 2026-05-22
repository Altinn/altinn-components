import{j as c,r as m}from"./iframe-DXwGEFZf.js";import{S as e,a as n}from"./SnackbarItem-CfHaBwkd.js";import{F as p}from"./Flex-U6liI5ZR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DpQTH4Pc.js";import"./useId-Df52yuGg.js";import"./XMark-BspkucHC.js";import"./Icon-DEVqj2eM.js";import"./Skeleton-CD7VUCi3.js";import"./Button-BcOfKjgE.js";import"./tooltip-OQNLf2nv.js";const E={title:"Layout/Snackbar/SnackbarItem",component:e,tags:["autodocs"],parameters:{},args:{message:"A message to you."}},r={args:{}},o=s=>{const t=Object.keys(n);return c.jsx(p,{direction:"col",spacing:3,children:t.map(a=>m.createElement(e,{...s,color:a,key:a}))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: SnackbarItemProps) => {
  const colors = Object.keys(SnackbarColorEnum) as SnackbarColor[];
  return <Flex direction="col" spacing={3}>
      {colors.map(color => <SnackbarItem {...args} color={color} key={color} />)}
    </Flex>;
}`,...o.parameters?.docs?.source}}};const j=["Default","Colors"];export{o as Colors,r as Default,j as __namedExportsOrder,E as default};
