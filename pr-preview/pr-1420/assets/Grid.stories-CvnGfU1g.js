import{a7 as t,aa as a}from"./iframe-BidFzEoe.js";import{G as m}from"./Grid-BytN74UT.js";import{c as i}from"./categoryItems-Dr_tkSFn.js";import{L as o}from"./ListItem-CBUxCLcG.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-CQPsEyzt.js";import"./Truck-BRsWs1gk.js";import"./TeddyBear-CPPfP3oO.js";import"./Buildings2-iagZ2VSt.js";import"./Input-D8eTVnZO.js";import"./Avatar-BEQBdv4x.js";import"./AvatarGroup-D1zH3sob.js";import"./Badge-mEF_BcRe.js";import"./Tooltip-CttrX-ml.js";import"./Heading-XBMlN0kz.js";import"./useHighlightedText-B2dzt3_l.js";import"./ChevronUp-CbJE0St5.js";import"./ChevronDown-7vjdyvrh.js";import"./ChevronRight-B3flyXKQ.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
