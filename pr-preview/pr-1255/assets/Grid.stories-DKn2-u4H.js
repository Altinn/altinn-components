import{a7 as t,aa as a}from"./iframe-B2qSCuzl.js";import{G as m}from"./Grid-BDl8nuOP.js";import{c as i}from"./categoryItems-F5emln9y.js";import{L as o}from"./ListItem-DsEnLTXV.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-DC_L7jQb.js";import"./Truck-DL9AjHtL.js";import"./TeddyBear-Bn1hQTsr.js";import"./Buildings2-CSa0Fj3k.js";import"./Input-BEYjfhLL.js";import"./Avatar-BRPRyGzj.js";import"./AvatarGroup-BepXVr5f.js";import"./Badge-DVZKO9ha.js";import"./Tooltip-DOfER3P6.js";import"./Heading-BraOiwz9.js";import"./useHighlightedText-BGZ3rca6.js";import"./ChevronUp-DsaXlzpU.js";import"./ChevronDown-MLEeMvzz.js";import"./ChevronRight-CE-Naqr7.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
