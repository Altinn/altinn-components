var n=Object.defineProperty;var t=(o,e)=>n(o,"name",{value:e,configurable:!0});import{O as c,a7 as m,aa as l,N as p}from"./iframe-BhbNl8M-.js";import{F as u}from"./Flex-ywhhAUvJ.js";import"./preload-helper-Cc2_yIPf.js";const b={title:"Layout/Snackbar/SnackbarItem",component:c,tags:["autodocs"],parameters:{},args:{message:"A message to you."}},r={args:{}},a=t(o=>{const e=Object.keys(p);return m.jsx(u,{direction:"col",spacing:3,children:e.map(s=>l.createElement(c,{...o,color:s,key:s}))})},"Colors");r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: SnackbarItemProps) => {
  const colors = Object.keys(SnackbarColorEnum) as SnackbarColor[];
  return <Flex direction="col" spacing={3}>
      {colors.map(color => <SnackbarItem {...args} color={color} key={color} />)}
    </Flex>;
}`,...a.parameters?.docs?.source}}};const S=["Default","Colors"];export{a as Colors,r as Default,S as __namedExportsOrder,b as default};
