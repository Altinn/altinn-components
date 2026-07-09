import{a7 as t,aa as a}from"./iframe-BZiA3Dc9.js";import{G as m}from"./Grid-CJVQoUvH.js";import{c as i}from"./categoryItems-C4YbNMZe.js";import{L as o}from"./ListItem-C4FhKt55.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-DHq7_8JL.js";import"./Truck-T-lqwI9K.js";import"./TeddyBear-CuoAQB8Y.js";import"./Buildings2-BRuUUWGZ.js";import"./Input-F50qI-5v.js";import"./Avatar-DghTGFEI.js";import"./AvatarGroup-DPv09ZzM.js";import"./Badge-9d5TUG_K.js";import"./Tooltip-9A_N-nl8.js";import"./Heading-DduTyBY0.js";import"./useHighlightedText-gnIxErVs.js";import"./ChevronUp-BGK37JKw.js";import"./ChevronDown-CNxF5VIu.js";import"./ChevronRight-CRJJFvsY.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    cols: 3,
    size: 'lg',
    children: <>
        {categoryItems?.map(item => <ListItem {...item as ListItemProps} title={{
        children: item.title as string,
        size: 'md',
        weight: 'bold'
      }} variant="subtle" key={item?.href} linkIcon={true} />)}
      </>
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    cols: 4,
    size: 'sm',
    children: <>
        {categoryItems?.map(item => <ListItem {...item as ListItemProps} title={item.title} variant="subtle" key={item?.href} linkIcon={true} />)}
      </>
  }
}`,...s.parameters?.docs?.source}}};const F=["Large","Small"];export{r as Large,s as Small,F as __namedExportsOrder,S as default};
