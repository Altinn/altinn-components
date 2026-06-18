import{a7 as t,aa as a}from"./iframe-DK-3qaH3.js";import{G as m}from"./Grid-B5LDn5-b.js";import{c as i}from"./categoryItems-DW9cNB3W.js";import{L as o}from"./ListItem-DtUr0D4a.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-DG-6FM1Z.js";import"./Truck-CXd7bbH4.js";import"./TeddyBear-BpzfsVyh.js";import"./Buildings2-KVjXbMSL.js";import"./Input-DJCzCnsD.js";import"./Avatar-CnYovcQa.js";import"./AvatarGroup-I06FKcbI.js";import"./Badge-D651myBu.js";import"./Tooltip-D_qaPfeL.js";import"./Heading-DNUoGPcg.js";import"./useHighlightedText-aZdhyhaW.js";import"./ChevronUp-Clh2aWfB.js";import"./ChevronDown-DHOBL84L.js";import"./ChevronRight-DR_DMSPj.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
