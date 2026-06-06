import{a7 as t,aa as a}from"./iframe-azCfu0oF.js";import{G as m}from"./Grid-5vSap_OT.js";import{c as i}from"./categoryItems-B2KapmoT.js";import{L as o}from"./ListItem-BaYTZi8Y.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-B1cuhkzg.js";import"./Truck-BpqcAMVb.js";import"./TeddyBear-BSnGPadB.js";import"./Buildings2-vZnco-8R.js";import"./Input-B4WsPqAp.js";import"./Avatar-B6mgyHuO.js";import"./AvatarGroup-BFb9xeKa.js";import"./Badge-CtmzFrHa.js";import"./Tooltip-DFhjbzqi.js";import"./Heading-BxIru1wm.js";import"./useHighlightedText-BA5UWeOm.js";import"./ChevronUp-_1tTwlgk.js";import"./ChevronDown-D-2Ujwox.js";import"./ChevronRight-DmbA9yvG.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
