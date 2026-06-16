import{a7 as t,aa as a}from"./iframe-Dai1liu3.js";import{G as m}from"./Grid-BCxUNT-n.js";import{c as i}from"./categoryItems-CL5Vxtll.js";import{L as o}from"./ListItem-GmGusVG_.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-DCy5XyOg.js";import"./Truck-BqPjVaER.js";import"./TeddyBear-Bi0I8ROl.js";import"./Buildings2-DZT2vpBy.js";import"./Input-4lJD8g37.js";import"./Avatar-BHjgyLeH.js";import"./AvatarGroup-BdaWfTQE.js";import"./Badge-CiXuPxpG.js";import"./Tooltip-Cf7V9gL4.js";import"./Heading-DmQEE02y.js";import"./useHighlightedText-DBCcFNzk.js";import"./ChevronUp-BdWuuKpV.js";import"./ChevronDown-BKPL2jIp.js";import"./ChevronRight-B3RrQIZJ.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
