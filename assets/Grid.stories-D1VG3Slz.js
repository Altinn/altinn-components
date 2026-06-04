import{a7 as t,aa as a}from"./iframe-CDUjh_2z.js";import{G as m}from"./Grid-D52IKNYg.js";import{c as i}from"./categoryItems-BbKHWJgB.js";import{L as o}from"./ListItem-DX5jQm4y.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-ZnWYPJ_r.js";import"./Truck-BhqX8kZg.js";import"./TeddyBear-8UhxSXXL.js";import"./Buildings2-BCItUeY7.js";import"./Input-CyWHlPcl.js";import"./Avatar-CxwAqCY2.js";import"./AvatarGroup-BYI_T_-3.js";import"./Badge-9wdqlOC-.js";import"./Tooltip-rnvLebTi.js";import"./Heading-DX7LPsCl.js";import"./useHighlightedText-DcMy2tkL.js";import"./ChevronUp-B_5rOd5t.js";import"./ChevronDown-BUU9mFY7.js";import"./ChevronRight-CG3NwLwQ.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
