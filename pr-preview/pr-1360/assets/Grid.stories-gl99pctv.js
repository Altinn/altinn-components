import{a7 as t,aa as a}from"./iframe-BRgClhpr.js";import{G as m}from"./Grid-BDNm4kV-.js";import{c as i}from"./categoryItems-ClV-H4tw.js";import{L as o}from"./ListItem-CPBMHy8j.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-CX4_A-L1.js";import"./Truck-C2XWwk1n.js";import"./TeddyBear-1obe2pe3.js";import"./Buildings2-sOjjihNw.js";import"./Input-C7r6_Ftd.js";import"./Avatar-X_UXtw_G.js";import"./AvatarGroup-Tv1EoB7j.js";import"./Badge-DWERQKY0.js";import"./Tooltip-DwlyrKqO.js";import"./Heading-D9ujzuNV.js";import"./useHighlightedText-DTOSK592.js";import"./ChevronUp-D-x3gjGi.js";import"./ChevronDown-B8Xryl2N.js";import"./ChevronRight-BLIKQh_h.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
