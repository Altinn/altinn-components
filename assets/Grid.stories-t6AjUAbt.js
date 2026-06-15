import{a7 as t,aa as a}from"./iframe-Dr1YYpI1.js";import{G as m}from"./Grid-CPTOx7bd.js";import{c as i}from"./categoryItems-LsongjAZ.js";import{L as o}from"./ListItem-BNw8VTGu.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-DA5eMy9N.js";import"./Truck-Dk7WQPt_.js";import"./TeddyBear-DD2EY32j.js";import"./Buildings2-C2Nx_xcz.js";import"./Input-Brt0jiez.js";import"./Avatar-5MYoUnaT.js";import"./AvatarGroup-qKVf7nyJ.js";import"./Badge-DlA625G6.js";import"./Tooltip-CpSJxiAh.js";import"./Heading-BD9oLNEa.js";import"./useHighlightedText-BV18x4ez.js";import"./ChevronUp-B_Smx25I.js";import"./ChevronDown-BBfddSx6.js";import"./ChevronRight-F0aXUvpz.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
