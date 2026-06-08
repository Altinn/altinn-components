import{a7 as t,aa as a}from"./iframe-KbHODQgb.js";import{G as m}from"./Grid-BDGfXdQi.js";import{c as i}from"./categoryItems-ClJlt4cq.js";import{L as o}from"./ListItem-B8fUE1Gh.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-D_SnbFoN.js";import"./Truck-CXufl4wM.js";import"./TeddyBear-BgRWqJ_K.js";import"./Buildings2-B7ePRcqB.js";import"./Input-DwLHHyGz.js";import"./Avatar-DL544SyI.js";import"./AvatarGroup-CCjx5RK0.js";import"./Badge-MoiWNolG.js";import"./Tooltip-BDxQfQSw.js";import"./Heading-jxV4Y0yK.js";import"./useHighlightedText-uGguOCwY.js";import"./ChevronUp-DjGQTIt5.js";import"./ChevronDown-DDGA5gfO.js";import"./ChevronRight-wplb_UH2.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
