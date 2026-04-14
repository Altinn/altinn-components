import{j as n,r as m}from"./iframe-gnB9S1An.js";import{S as c}from"./InboxFill-CWq5Q3Xh.js";import{I as o}from"./Icon-CL2c9__7.js";import{F as i}from"./Flex-Dhq417nc.js";import{S as p}from"./size-dYc9b3N-.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B9nFNwMW.js";import"./index-C4jL9APw.js";import"./Skeleton-_K166C5F.js";const I={title:"Components/Icon",component:o,tags:["autodocs"],parameters:{},args:{svgElement:c}},e={args:{}},r={args:{loading:!0}},s=t=>n.jsx(i,{spacing:2,align:"end",children:Object.keys(p).map(a=>m.createElement(o,{...t,size:a,theme:"tinted",key:a}))});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: IconProps) => {
  return <Flex spacing={2} align="end">
      {Object.keys(SizeEnum).map(size => {
      return <Icon {...args} size={size as IconSize} theme="tinted" key={size} />;
    })}
    </Flex>;
}`,...s.parameters?.docs?.source}}};const j=["Default","Loading","Sizes"];export{e as Default,r as Loading,s as Sizes,j as __namedExportsOrder,I as default};
