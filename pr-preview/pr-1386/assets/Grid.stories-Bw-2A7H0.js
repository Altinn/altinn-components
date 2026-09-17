import{a7 as t,aa as a}from"./iframe-BlyVQ5Wf.js";import{G as m}from"./Grid-DPv5CLTL.js";import{c as i}from"./categoryItems-6QYwXBHE.js";import{L as o}from"./ListItem-nb3WHA4w.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-zQV_fFyn.js";import"./Truck-BxeZvKRC.js";import"./TeddyBear-CYzAovCx.js";import"./Buildings2-CKZSXDU2.js";import"./Input-7ZkrUdZt.js";import"./Avatar-DQIgsQd2.js";import"./AvatarGroup-6IOgo5me.js";import"./Badge-BWoBgQxU.js";import"./Tooltip-DIerloK1.js";import"./Heading-hWvyrxAT.js";import"./useHighlightedText-DCg_XHxB.js";import"./ChevronUp-CFGBj1-_.js";import"./ChevronDown-Bxa_Upno.js";import"./ChevronRight-C0zIwyjD.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
