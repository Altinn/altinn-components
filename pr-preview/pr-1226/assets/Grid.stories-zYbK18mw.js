import{a7 as t,aa as a}from"./iframe-Ci8DJ-6R.js";import{G as m}from"./Grid-CO1Sr_Io.js";import{c as i}from"./categoryItems-v6cG3_NK.js";import{L as o}from"./ListItem-BArpZyYp.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-CBuyp8nY.js";import"./Truck-BbvCdMxw.js";import"./TeddyBear-8XzJrhFT.js";import"./Buildings2-D7agrZxu.js";import"./Input-DWxDHqSK.js";import"./Avatar-D3AIreGS.js";import"./AvatarGroup-D3N3OV8x.js";import"./Badge-CVr9GptX.js";import"./Tooltip-CGvNbStB.js";import"./Heading-CWZTf72r.js";import"./useHighlightedText-CMND7wU2.js";import"./ChevronUp-aSivYnb8.js";import"./ChevronDown-DepqY6FK.js";import"./ChevronRight-BEnuMmPo.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
