import{a7 as t,aa as a}from"./iframe-CAjSv_nS.js";import{G as m}from"./Grid-Cw2PTOke.js";import{c as i}from"./categoryItems-BVHjApdT.js";import{L as o}from"./ListItem-tV3UUBFk.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-Y6Ne3skb.js";import"./Truck-CD2pmY1f.js";import"./TeddyBear-CgSamqks.js";import"./Buildings2-B2Sj8eeu.js";import"./Input-BnE3VUoY.js";import"./Avatar-CgMczA0n.js";import"./AvatarGroup-ujKKLt3E.js";import"./Badge-Dlsqw5tH.js";import"./Tooltip-DmTt27sC.js";import"./Heading-Dl2CB_qz.js";import"./useHighlightedText-BhVVUcDt.js";import"./ChevronUp-CiQ1vTJ_.js";import"./ChevronDown-DV1YpklV.js";import"./ChevronRight-DBCR3hzH.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
