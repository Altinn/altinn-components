import{a7 as t,aa as a}from"./iframe-C3-39QZn.js";import{G as m}from"./Grid-Cha2-GuZ.js";import{c as i}from"./categoryItems-CUMyfye4.js";import{L as o}from"./ListItem-BhGiT6gr.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-BEro15JA.js";import"./Truck-DS3qSa1N.js";import"./TeddyBear-CyYmC5VC.js";import"./Buildings2-CvXVAbl-.js";import"./Input-Ck9X-Ajd.js";import"./Avatar-WM3RFSU5.js";import"./AvatarGroup-BCEXfOjH.js";import"./Badge-D3xvyoOt.js";import"./Tooltip-DTSJdaMh.js";import"./Heading-B2KBSzP-.js";import"./useHighlightedText--t_r6ff3.js";import"./ChevronUp-CNTxwGY1.js";import"./ChevronDown-C_O64CkH.js";import"./ChevronRight-C8E9q9OI.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
