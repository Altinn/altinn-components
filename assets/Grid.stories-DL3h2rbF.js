import{a7 as t,aa as a}from"./iframe-CH-Rf2AI.js";import{G as m}from"./Grid-9BBxc4iD.js";import{c as i}from"./categoryItems-eU94FKv8.js";import{L as o}from"./ListItem-CmAPlNYB.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-DWO11ukG.js";import"./Truck-Bnicoqp6.js";import"./TeddyBear-Dm8mHfa4.js";import"./Buildings2-DK48JhGB.js";import"./Input-CCpKfFu1.js";import"./Avatar-BTqkjvF0.js";import"./AvatarGroup-l96vnRcp.js";import"./Badge-D-8o5byA.js";import"./Tooltip-DbXMT4Wm.js";import"./Heading-BVqV7FRe.js";import"./useHighlightedText-DIHcSE2r.js";import"./ChevronUp-COzX9VRs.js";import"./ChevronDown-D_JnpA4f.js";import"./ChevronRight-uifDbL9f.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
