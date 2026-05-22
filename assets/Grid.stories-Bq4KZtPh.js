import{j as e,r as s}from"./iframe-BM6RZuQM.js";import{G as a}from"./Grid-D0AZoB8p.js";import{c as o}from"./categoryItems-Bm2I_9WE.js";import{L as m}from"./ListItem-BBnKBFME.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DAnedVDn.js";import"./useId-BYt_OYJh.js";import"./HardHat-tItw7pTN.js";import"./Truck-ClEJLcx4.js";import"./TeddyBear-DBHlmWOt.js";import"./Buildings2-DPJaWJUP.js";import"./Button-DhtPu9_Y.js";import"./tooltip-DKLQ4JCb.js";import"./Input-DsxiHlOc.js";import"./XMark-EbOSJv8a.js";import"./Icon-m3ZEAfHU.js";import"./Skeleton-DWzjK3h6.js";import"./Avatar-P_Ikblul.js";import"./AvatarGroup-pynF50Va.js";import"./Badge-QT5oZygk.js";import"./Tooltip-BxiimWqz.js";import"./Heading-aHWaPGZz.js";import"./useHighlightedText-Ctq_ta7p.js";import"./ChevronUp-CLlFINM4.js";import"./ChevronDown-DYIPhVz6.js";import"./ChevronRight-B7KHdEb3.js";const R={title:"Page/Grid",component:a,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:e.jsx(e.Fragment,{children:o?.map(t=>s.createElement(m,{...t,key:t?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:e.jsx(e.Fragment,{children:o?.map(t=>s.createElement(m,{...t,title:{children:t.title,size:"md",weight:"bold"},variant:"subtle",key:t?.href,linkIcon:!0}))})}},i={args:{cols:4,size:"sm",children:e.jsx(e.Fragment,{children:o?.map(t=>s.createElement(m,{...t,title:t.title,variant:"subtle",key:t?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
