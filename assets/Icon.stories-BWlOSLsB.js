var c=Object.defineProperty;var t=(o,e)=>c(o,"name",{value:e,configurable:!0});import{I as n,a7 as m,aa as i}from"./iframe-BaqLtPTs.js";import{S as p}from"./InboxFill-D6lYg80m.js";import{F as d}from"./Flex-DAfEpjHq.js";import{S as u}from"./size-dYc9b3N-.js";import"./preload-helper-Cc2_yIPf.js";const E={title:"Components/Icon",component:n,tags:["autodocs"],parameters:{},args:{svgElement:p}},r={args:{}},s={args:{loading:!0}},a=t(o=>m.jsx(d,{spacing:2,align:"end",children:Object.keys(u).map(e=>i.createElement(n,{...o,size:e,theme:"tinted",key:e}))}),"Sizes");r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: IconProps) => {
  return <Flex spacing={2} align="end">
      {Object.keys(SizeEnum).map(size => {
      return <Icon {...args} size={size as IconSize} theme="tinted" key={size} />;
    })}
    </Flex>;
}`,...a.parameters?.docs?.source}}};const I=["Default","Loading","Sizes"];export{r as Default,s as Loading,a as Sizes,I as __namedExportsOrder,E as default};
