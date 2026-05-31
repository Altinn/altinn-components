import{p as e,s}from"./iframe-HmDeAVAp.js";import{G as a}from"./Grid-CMplBQo2.js";import{c as o}from"./categoryItems-BIdERiYa.js";import{L as m}from"./ListItem-u6nNWWO6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CDtevUxF.js";import"./useId-BNhfXdUV.js";import"./HardHat-CAguIbUL.js";import"./Truck-xPJpVwph.js";import"./TeddyBear-DhJblC7z.js";import"./Buildings2-C4jzAZ1_.js";import"./Button-SB9AH0kY.js";import"./tooltip-DaXe8rKK.js";import"./Input-Dd7kdPyi.js";import"./XMark-DFSmJjac.js";import"./Icon-DE5JaAj2.js";import"./Skeleton-C_Dxe6ID.js";import"./Avatar-CUX9SLHz.js";import"./AvatarGroup-CpvcYsvD.js";import"./Badge-DVsrmVw9.js";import"./Tooltip-DFVNjhLt.js";import"./Heading-CYuK0FXt.js";import"./useHighlightedText-CVbcsWEJ.js";import"./ChevronUp-DWlUIEYm.js";import"./ChevronDown-D8XmQ_JM.js";import"./ChevronRight-Cqfpq8PE.js";const R={title:"Page/Grid",component:a,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:e.jsx(e.Fragment,{children:o?.map(t=>s.createElement(m,{...t,key:t?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:e.jsx(e.Fragment,{children:o?.map(t=>s.createElement(m,{...t,title:{children:t.title,size:"md",weight:"bold"},variant:"subtle",key:t?.href,linkIcon:!0}))})}},i={args:{cols:4,size:"sm",children:e.jsx(e.Fragment,{children:o?.map(t=>s.createElement(m,{...t,title:t.title,variant:"subtle",key:t?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    cols: 4,
    size: 'sm',
    children: <>
        {categoryItems?.map(item => <ListItem {...item as ListItemProps} title={item.title} variant="subtle" key={item?.href} linkIcon={true} />)}
      </>
  }
}`,...i.parameters?.docs?.source}}};const q=["Large","Small"];export{r as Large,i as Small,q as __namedExportsOrder,R as default};
