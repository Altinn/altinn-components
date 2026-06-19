import{a7 as t,aa as a}from"./iframe-DmJr8_aG.js";import{G as m}from"./Grid-BaNBt7H_.js";import{c as i}from"./categoryItems-D1cWMM8N.js";import{L as o}from"./ListItem-8cwJLY10.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-S4i2xa5y.js";import"./Truck-D2b74Tsc.js";import"./TeddyBear-CuX8XbFA.js";import"./Buildings2-D0SF9Z2H.js";import"./Input-CMjX-VJR.js";import"./Avatar-CCqY5Lgk.js";import"./AvatarGroup-DMmx4iVX.js";import"./Badge-BVYKJFB5.js";import"./Tooltip-DijYReqr.js";import"./Heading-I9-B5g1d.js";import"./useHighlightedText-CDpmDje8.js";import"./ChevronUp-C82RtbQz.js";import"./ChevronDown-hTjRae3D.js";import"./ChevronRight-kR30sXpx.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
