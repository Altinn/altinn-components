import{a7 as t,aa as a}from"./iframe-C_3qWz8U.js";import{G as m}from"./Grid-DivFhvZ9.js";import{c as i}from"./categoryItems-v4cGNTV9.js";import{L as o}from"./ListItem-CEzqSoAw.js";import"./preload-helper-Cc2_yIPf.js";import"./HardHat-C_8Og667.js";import"./Truck-CM4oKHfP.js";import"./TeddyBear-BUCWn8l5.js";import"./Buildings2-DI2Qx4qD.js";import"./Input-BnIvU9G4.js";import"./Avatar-DoTE2KMY.js";import"./AvatarGroup-CYCsQlmU.js";import"./Badge-BBubxNU6.js";import"./Tooltip-oYeDkYvf.js";import"./Heading-mFc3Xe1m.js";import"./useHighlightedText-ChiMW-L8.js";import"./ChevronUp-CK8aUJr_.js";import"./ChevronDown-Du2hGOu_.js";import"./ChevronRight-Cfc1KVT6.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
