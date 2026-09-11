import{a7 as t,aa as a}from"./iframe-O8cJNgnH.js";import{G as m}from"./Grid-B0eM0PDK.js";import{c as i}from"./categoryItems-DYJ84h_R.js";import{L as o}from"./ListItem-DE6V7Ob0.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-BRgBbmXq.js";import"./Truck-BdHmV4vS.js";import"./TeddyBear-C7R3FSHe.js";import"./Buildings2-mGqV0IWF.js";import"./Input-BfEZmvKD.js";import"./Avatar-D8-vsJJv.js";import"./AvatarGroup-Ra_TR9_v.js";import"./Badge-BEBeTMrY.js";import"./Tooltip-BrWx-R_c.js";import"./Heading-BdhLm3SL.js";import"./useHighlightedText-CnUjn7TA.js";import"./ChevronUp-C3suJ612.js";import"./ChevronDown-D0blAyPo.js";import"./ChevronRight-U0ooHRaY.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
