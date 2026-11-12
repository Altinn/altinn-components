var n=Object.defineProperty;var c=(e,o)=>n(e,"name",{value:o,configurable:!0});import{O as t,a7 as m,aa as l,N as p}from"./iframe-SD2JkkBx.js";import{F as i}from"./Flex-BqyCauEo.js";import"./preload-helper-Cc2_yIPf.js";const b={title:"Feedback/Snackbar/SnackbarItem",component:t,tags:["autodocs"],parameters:{},args:{message:"A message to you."}},r={args:{}},a=c(e=>{const o=Object.keys(p);return m.jsx(i,{direction:"col",spacing:3,children:o.map(s=>l.createElement(t,{...e,color:s,key:s}))})},"Colors"),S=["Default","Colors"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: SnackbarItemProps) => {
  const colors = Object.keys(SnackbarColorEnum) as SnackbarColor[];
  return <Flex direction="col" spacing={3}>
      {colors.map(color => <SnackbarItem {...args} color={color} key={color} />)}
    </Flex>;
}`,...a.parameters?.docs?.source}}};export{a as Colors,r as Default,S as __namedExportsOrder,b as default};
