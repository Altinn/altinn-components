import{j as n,r as m}from"./iframe-DDirkHus.js";import{S as c}from"./InboxFill-jQHA7TdX.js";import{I as o}from"./Icon-Cv1R39O2.js";import{F as i}from"./Flex-CKMYHSxr.js";import{S as p}from"./size-dYc9b3N-.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CVUrh2ea.js";import"./index-B2YDfdyU.js";import"./Skeleton-0VOrezcL.js";const I={title:"Components/Icon",component:o,tags:["autodocs"],parameters:{},args:{svgElement:c}},e={args:{}},r={args:{loading:!0}},s=t=>n.jsx(i,{spacing:2,align:"end",children:Object.keys(p).map(a=>m.createElement(o,{...t,size:a,theme:"tinted",key:a}))});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
