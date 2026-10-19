import{a7 as t,aa as a}from"./iframe-uBWg0zsp.js";import{G as m}from"./Grid-DFKar6vF.js";import{c as i}from"./categoryItems-BbEf2u3z.js";import{L as o}from"./ListItem-DZSp_PZG.js";import"./preload-helper-Cc2_yIPf.js";import"./HardHat-DrYmnunq.js";import"./Truck-C_jHsHk5.js";import"./TeddyBear-CrXtcalO.js";import"./Buildings2-BFEb8cPA.js";import"./Input-BX-kD412.js";import"./Avatar-B2zjqVbH.js";import"./AvatarGroup-X4pMTDtc.js";import"./Badge-DNaQuN8i.js";import"./Tooltip-wSNkhPxH.js";import"./Heading-B2wyz-tz.js";import"./useHighlightedText-SyZl2q2q.js";import"./ChevronUp-BLeJynbN.js";import"./ChevronDown-DVkqLj7d.js";import"./ChevronRight-Ci7fQup2.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
