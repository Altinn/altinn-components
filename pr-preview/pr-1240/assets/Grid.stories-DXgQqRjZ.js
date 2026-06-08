import{a7 as t,aa as a}from"./iframe-B0WoJH5H.js";import{G as m}from"./Grid-CIUwHbr3.js";import{c as i}from"./categoryItems-CddpHrQ4.js";import{L as o}from"./ListItem-BtMv5Egs.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-DfosM25R.js";import"./Truck-DFtZfhji.js";import"./TeddyBear-DzDaZGHr.js";import"./Buildings2-CqbLLczn.js";import"./Input-CGgDhHHk.js";import"./Avatar-DoqQG8m_.js";import"./AvatarGroup-CareQQNx.js";import"./Badge-D2udDyy3.js";import"./Tooltip-KSMOwJOX.js";import"./Heading-DxONre_z.js";import"./useHighlightedText-BkoAp9J_.js";import"./ChevronUp-DUEhyOAc.js";import"./ChevronDown-BDG9HWsL.js";import"./ChevronRight-DJgUHhg2.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
