import{a6 as t,a9 as i}from"./iframe-Cb83cNHz.js";import{G as m}from"./Grid-3vQuS2xK.js";import{c as a}from"./categoryItems-BpXXHH8x.js";import{L as o}from"./ListItem-DCX5xInW.js";import"./preload-helper-Cc2_yIPf.js";import"./HardHat-CTMLhDJJ.js";import"./Truck-WEwqThHv.js";import"./TeddyBear-BqbKNvD5.js";import"./Buildings2-CMW_rwWI.js";import"./Input-DdatSh7d.js";import"./Avatar-CO1wzsxc.js";import"./AvatarGroup-DvuSBfuR.js";import"./Badge-DGYSahl0.js";import"./Tooltip-Bacli5fs.js";import"./Heading-I2bz7uBQ.js";import"./useHighlightedText-DXF5vSCe.js";import"./ChevronUp-BCG2x0JT.js";import"./ChevronDown-CvYcy6of.js";import"./ChevronRight-C-6CVVq7.js";const S={title:"Page/Grid",component:m,tags:["autodocs"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:a?.map(e=>i.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:a?.map(e=>i.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:a?.map(e=>i.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}},F=["Large","Small"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};export{r as Large,s as Small,F as __namedExportsOrder,S as default};
