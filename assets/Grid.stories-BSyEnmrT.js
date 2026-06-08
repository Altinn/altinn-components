import{a7 as t,aa as a}from"./iframe-BkdCVhNa.js";import{G as m}from"./Grid-rvRwn8E5.js";import{c as i}from"./categoryItems-CdJs8PwN.js";import{L as o}from"./ListItem-jGe2QiZx.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-CuC8L7oz.js";import"./Truck-DuZuTucc.js";import"./TeddyBear-CLbuEA_c.js";import"./Buildings2-BkRGM6p9.js";import"./Input-Bk6KAWUZ.js";import"./Avatar-BIkq-2V8.js";import"./AvatarGroup-M5GjbKZV.js";import"./Badge-Do4_FWGT.js";import"./Tooltip-wNk76VVd.js";import"./Heading-CYb_rmks.js";import"./useHighlightedText-THgW7xGA.js";import"./ChevronUp-5uVavT__.js";import"./ChevronDown-DHl1_IXJ.js";import"./ChevronRight-BWpY3hyQ.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
