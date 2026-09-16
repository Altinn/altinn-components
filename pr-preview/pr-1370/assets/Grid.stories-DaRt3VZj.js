import{a7 as t,aa as a}from"./iframe-DJnynaCo.js";import{G as m}from"./Grid-DjXqmbPu.js";import{c as i}from"./categoryItems-B0BivjAL.js";import{L as o}from"./ListItem-B8Ai6_1A.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-n8ffSjEA.js";import"./Truck-B8YL-bcy.js";import"./TeddyBear-Dlsk-NzG.js";import"./Buildings2-pksubvZz.js";import"./Input-BYb8Xo7l.js";import"./Avatar-BkXKEErw.js";import"./AvatarGroup-C7fA72SD.js";import"./Badge-CnaY1St8.js";import"./Tooltip-D6A63mE4.js";import"./Heading-DlyjjAZZ.js";import"./useHighlightedText-CYNOolzk.js";import"./ChevronUp-BZfYUYCO.js";import"./ChevronDown-CYeA95Pw.js";import"./ChevronRight-C7aaNXCF.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
