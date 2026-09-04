import{a7 as t,aa as a}from"./iframe-Bg-ykIGY.js";import{G as m}from"./Grid-C3qqoHhF.js";import{c as i}from"./categoryItems-pkCXc7NP.js";import{L as o}from"./ListItem-TtjgHak_.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-B69r4-p0.js";import"./Truck-C09dqmcG.js";import"./TeddyBear-DRGK-53R.js";import"./Buildings2-B9RAII3-.js";import"./Input-DE7Whw6H.js";import"./Avatar-DcnAq-Om.js";import"./AvatarGroup-BOIk740D.js";import"./Badge-DsOcGMcG.js";import"./Tooltip-DQBCcEkE.js";import"./Heading-BKVhZ0mC.js";import"./useHighlightedText-pfd0QjZv.js";import"./ChevronUp-C-UrHs7h.js";import"./ChevronDown-30JTV7H0.js";import"./ChevronRight-BubW3AYp.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
