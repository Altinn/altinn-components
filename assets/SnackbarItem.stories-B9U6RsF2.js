import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-CpyhhMkF.js";import{t as n}from"./jsx-runtime-DwqL_Y-t.js";import{n as r,t as i}from"./SnackbarItem-BKvrCBQ1.js";import{t as a}from"./Flex-SBjIXoOg.js";var o=e(t(),1),s=n(),c={title:`Layout/Snackbar/SnackbarItem`,component:r,tags:[`autodocs`],parameters:{},args:{message:`A message to you.`}},l={args:{}},u=e=>(0,s.jsx)(a,{direction:`col`,spacing:3,children:Object.keys(i).map(t=>(0,o.createElement)(r,{...e,color:t,key:t}))});l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(args: SnackbarItemProps) => {
  const colors = Object.keys(SnackbarColorEnum) as SnackbarColor[];
  return <Flex direction="col" spacing={3}>
      {colors.map(color => <SnackbarItem {...args} color={color} key={color} />)}
    </Flex>;
}`,...u.parameters?.docs?.source}}};var d=[`Default`,`Colors`];export{u as Colors,l as Default,d as __namedExportsOrder,c as default};