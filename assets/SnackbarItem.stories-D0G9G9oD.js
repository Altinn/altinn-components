import{j as c,r as m}from"./iframe-GJv3-kpe.js";import{S as e,a as n}from"./SnackbarItem-D8dQeZXH.js";import{F as p}from"./Flex-CxS25VqD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D19pPnAw.js";import"./useId-B1GQrjht.js";import"./XMark-D7blLnze.js";import"./Icon-DKgAzIsH.js";import"./Skeleton-dVNdeapn.js";import"./Button-XgEODhFb.js";import"./button-5jjXov6B.js";import"./use-merge-refs-oF7p1rqv.js";import"./lite-DaUVFjkg.js";const C={title:"Layout/Snackbar/SnackbarItem",component:e,tags:["autodocs"],parameters:{},args:{message:"A message to you."}},r={args:{}},o=s=>{const t=Object.keys(n);return c.jsx(p,{direction:"col",spacing:3,children:t.map(a=>m.createElement(e,{...s,color:a,key:a}))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: SnackbarItemProps) => {
  const colors = Object.keys(SnackbarColorEnum) as SnackbarColor[];
  return <Flex direction="col" spacing={3}>
      {colors.map(color => <SnackbarItem {...args} color={color} key={color} />)}
    </Flex>;
}`,...o.parameters?.docs?.source}}};const F=["Default","Colors"];export{o as Colors,r as Default,F as __namedExportsOrder,C as default};
