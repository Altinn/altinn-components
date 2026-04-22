import{j as n,r as m}from"./iframe-Bs6hWG43.js";import{S as c}from"./InboxFill-BK04Il4-.js";import{I as o}from"./Icon-DjH00Hl5.js";import{F as i}from"./Flex-DYzITT_K.js";import{S as p}from"./size-dYc9b3N-.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-eW1Sa_eP.js";import"./index-DbNSDn3W.js";import"./Skeleton-7NyHq6Da.js";const I={title:"Components/Icon",component:o,tags:["autodocs"],parameters:{},args:{svgElement:c}},e={args:{}},r={args:{loading:!0}},s=t=>n.jsx(i,{spacing:2,align:"end",children:Object.keys(p).map(a=>m.createElement(o,{...t,size:a,theme:"tinted",key:a}))});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
