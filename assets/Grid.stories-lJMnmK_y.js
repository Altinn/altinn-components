import{a7 as t,aa as a}from"./iframe-BOq385O8.js";import{G as m}from"./Grid-BrP67Bcy.js";import{c as i}from"./categoryItems-DpQQhUgY.js";import{L as o}from"./ListItem-2JfbVmNX.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-Dfepxs3r.js";import"./Truck-nYXRTwN9.js";import"./TeddyBear-D1_BENwn.js";import"./Buildings2-D7iJzXxT.js";import"./Input-B8j-6nyc.js";import"./Avatar-DGnXzkTF.js";import"./AvatarGroup-C-pwgfnB.js";import"./Badge-IhlpDjWl.js";import"./Tooltip-HwSyglqV.js";import"./Heading-BGbBHiZX.js";import"./useHighlightedText-COTrDIB8.js";import"./ChevronUp-DtZBQ8_H.js";import"./ChevronDown-ByPuuZmk.js";import"./ChevronRight-8gth-Lkl.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
