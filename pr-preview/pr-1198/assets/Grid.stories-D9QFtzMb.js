import{j as e,r as s}from"./iframe-DXwGEFZf.js";import{G as a}from"./Grid-Bk8YevG6.js";import{c as o}from"./categoryItems-DGqHM4iT.js";import{L as m}from"./ListItem-C3blsWJZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DpQTH4Pc.js";import"./useId-Df52yuGg.js";import"./HardHat-BF0llYR2.js";import"./Truck-iIl5ekR1.js";import"./TeddyBear-C6xbGXLZ.js";import"./Buildings2-QgXuVD1-.js";import"./Button-BcOfKjgE.js";import"./tooltip-OQNLf2nv.js";import"./Input-CjRvyA41.js";import"./XMark-BspkucHC.js";import"./Icon-DEVqj2eM.js";import"./Skeleton-CD7VUCi3.js";import"./Avatar-OxvpOCq4.js";import"./AvatarGroup-vB7eodsE.js";import"./Badge-CBgj_4MY.js";import"./Tooltip-DxtRZp3O.js";import"./Heading-D1SypAUR.js";import"./useHighlightedText-NV3gg9HW.js";import"./ChevronUp-CJwhEbs5.js";import"./ChevronDown-Cc2tQRQQ.js";import"./ChevronRight-B7NrC3Rp.js";const R={title:"Page/Grid",component:a,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:e.jsx(e.Fragment,{children:o?.map(t=>s.createElement(m,{...t,key:t?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:e.jsx(e.Fragment,{children:o?.map(t=>s.createElement(m,{...t,title:{children:t.title,size:"md",weight:"bold"},variant:"subtle",key:t?.href,linkIcon:!0}))})}},i={args:{cols:4,size:"sm",children:e.jsx(e.Fragment,{children:o?.map(t=>s.createElement(m,{...t,title:t.title,variant:"subtle",key:t?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
