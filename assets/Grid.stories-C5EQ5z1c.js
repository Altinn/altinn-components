import{a7 as t,aa as a}from"./iframe-D-JzFSbn.js";import{G as m}from"./Grid-CKboBmH2.js";import{c as i}from"./categoryItems-Kztsj3zu.js";import{L as o}from"./ListItem-fagiPH4A.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-CPQz62FR.js";import"./Truck-CMiw5Ztf.js";import"./TeddyBear-DSiaCyBU.js";import"./Buildings2-D0k5b2lr.js";import"./Input--gXn6N4P.js";import"./Avatar-CPNNDSUm.js";import"./AvatarGroup-DlAxwCWG.js";import"./Badge-DZcjaRxr.js";import"./Tooltip-CY73UMt9.js";import"./Heading-BuD5A-91.js";import"./useHighlightedText-kVudreWZ.js";import"./ChevronUp-CRCnff2F.js";import"./ChevronDown-CDDvyffK.js";import"./ChevronRight-CnTD3zzq.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
