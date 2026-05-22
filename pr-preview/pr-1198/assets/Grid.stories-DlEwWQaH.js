import{j as e,r as s}from"./iframe-C6Awlou2.js";import{G as a}from"./Grid-Bm1Y2bXo.js";import{c as o}from"./categoryItems-Dg-qV7wF.js";import{L as m}from"./ListItem-B4a0Y9mW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DlBZqmFk.js";import"./useId-InpKFtFj.js";import"./HardHat-C1AtU7sI.js";import"./Truck-CxKk3kpY.js";import"./TeddyBear-CbXexFuV.js";import"./Buildings2-w19VRbAZ.js";import"./Button-xDUaTd0f.js";import"./tooltip-wBWP-9p3.js";import"./Input-DYyIZxUH.js";import"./XMark-BEbAfGHw.js";import"./Icon-DNxmTYNY.js";import"./Skeleton-Dzw9idTE.js";import"./Avatar-CJAvXADO.js";import"./AvatarGroup-CCkWNWoM.js";import"./Badge-4PTsP983.js";import"./Tooltip-CsuAugEU.js";import"./Heading-CwC0m1gc.js";import"./useHighlightedText-BOeqc4_T.js";import"./ChevronUp-CFyLtqTc.js";import"./ChevronDown-BaaUSGet.js";import"./ChevronRight-BPFGJ1iV.js";const R={title:"Page/Grid",component:a,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:e.jsx(e.Fragment,{children:o?.map(t=>s.createElement(m,{...t,key:t?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:e.jsx(e.Fragment,{children:o?.map(t=>s.createElement(m,{...t,title:{children:t.title,size:"md",weight:"bold"},variant:"subtle",key:t?.href,linkIcon:!0}))})}},i={args:{cols:4,size:"sm",children:e.jsx(e.Fragment,{children:o?.map(t=>s.createElement(m,{...t,title:t.title,variant:"subtle",key:t?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
