import{a7 as t,aa as a}from"./iframe-F_FB4Yxl.js";import{G as m}from"./Grid-BILvxMZc.js";import{c as i}from"./categoryItems-CmBAH-tx.js";import{L as o}from"./ListItem-QexinWWd.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-4pT4LG0V.js";import"./Truck-DTm3oZVx.js";import"./TeddyBear-BJ4rcYSD.js";import"./Buildings2-BJinqt1L.js";import"./Input-CADZ4I-X.js";import"./Avatar-DE7K7igg.js";import"./AvatarGroup-B7Qf-EGM.js";import"./Badge-C_852a7b.js";import"./Tooltip-B803JVqh.js";import"./Heading-Cj7rgSGX.js";import"./useHighlightedText-CJsPbXHy.js";import"./ChevronUp-BmFZO6Yq.js";import"./ChevronDown-CmhX0LZg.js";import"./ChevronRight-f1WSa4_L.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
