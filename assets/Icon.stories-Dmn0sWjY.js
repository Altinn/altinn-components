import{j as n,r as m}from"./iframe-qDHSBZ_X.js";import{S as c}from"./InboxFill-B6eVCR7Z.js";import{I as o}from"./Icon-BDVkMuHy.js";import{F as i}from"./Flex-BTOiCOb2.js";import{S as p}from"./size-dYc9b3N-.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DLE_nI5l.js";import"./index-DTh2bawh.js";import"./Skeleton-CJ3n2_6V.js";const I={title:"Components/Icon",component:o,tags:["autodocs"],parameters:{},args:{svgElement:c}},e={args:{}},r={args:{loading:!0}},s=t=>n.jsx(i,{spacing:2,align:"end",children:Object.keys(p).map(a=>m.createElement(o,{...t,size:a,theme:"tinted",key:a}))});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
