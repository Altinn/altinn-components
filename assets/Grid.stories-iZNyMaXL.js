import{a7 as t,aa as a}from"./iframe-DE6S9aZ4.js";import{G as m}from"./Grid-CB5nPu4Y.js";import{c as i}from"./categoryItems-DSRGjhYX.js";import{L as o}from"./ListItem-DYxFGUfM.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-CwMJhQlW.js";import"./Truck-ArNrtFqv.js";import"./TeddyBear-B0Ja4RMS.js";import"./Buildings2-gHtbheYR.js";import"./Input-DHBuxbkq.js";import"./Avatar-CNN7KBYB.js";import"./AvatarGroup-kG5dzOiP.js";import"./Badge-BKORQsmw.js";import"./Tooltip-B3xZNbnc.js";import"./Heading-BDklncvD.js";import"./useHighlightedText-C20f3R5e.js";import"./ChevronUp-DiUn2hCV.js";import"./ChevronDown-BW8AfmI4.js";import"./ChevronRight-CaR2K8Z7.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
