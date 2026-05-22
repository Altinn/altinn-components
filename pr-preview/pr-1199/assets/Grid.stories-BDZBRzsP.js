import{j as e,r as s}from"./iframe-D-ID03Ik.js";import{G as a}from"./Grid-qh7DUNgo.js";import{c as o}from"./categoryItems-BY4GxpdR.js";import{L as m}from"./ListItem-x7s3DQfA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DpFyEq-2.js";import"./useId-DxZoCrQU.js";import"./HardHat-B9K9VO1f.js";import"./Truck-8qNyQ2lG.js";import"./TeddyBear-CjGRGi9D.js";import"./Buildings2-C_ZFJYly.js";import"./Button-CO1zFGa4.js";import"./tooltip-CH7-mov_.js";import"./Input-BflTpPuJ.js";import"./XMark-DAr8sgUQ.js";import"./Icon-CER3YkDn.js";import"./Skeleton--3bwKnDN.js";import"./Avatar-CUF81_T9.js";import"./AvatarGroup-ZBmyex5T.js";import"./Badge-BH60Kfyy.js";import"./Tooltip-DuVvkEGb.js";import"./Heading-BD0s_Obx.js";import"./useHighlightedText-Db1ksA0v.js";import"./ChevronUp-BM7sC8IQ.js";import"./ChevronDown-_u2ch-6C.js";import"./ChevronRight-CxM-6AgC.js";const R={title:"Page/Grid",component:a,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:e.jsx(e.Fragment,{children:o?.map(t=>s.createElement(m,{...t,key:t?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:e.jsx(e.Fragment,{children:o?.map(t=>s.createElement(m,{...t,title:{children:t.title,size:"md",weight:"bold"},variant:"subtle",key:t?.href,linkIcon:!0}))})}},i={args:{cols:4,size:"sm",children:e.jsx(e.Fragment,{children:o?.map(t=>s.createElement(m,{...t,title:t.title,variant:"subtle",key:t?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
