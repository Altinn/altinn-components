import{a7 as t,aa as a}from"./iframe-CeD8DZF_.js";import{G as m}from"./Grid-Djz4JmaQ.js";import{c as i}from"./categoryItems-C4G5p9cV.js";import{L as o}from"./ListItem-DB5KLH66.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-DWbtZ5wd.js";import"./Truck-Cl935sRA.js";import"./TeddyBear-k8M07RXy.js";import"./Buildings2-BA18tGco.js";import"./Input-B6Hxr8dW.js";import"./Avatar-D8aGqJlF.js";import"./AvatarGroup-fNYoTzyx.js";import"./Badge-BzMsK0Kj.js";import"./Tooltip-DJy5VenJ.js";import"./Heading-CqEhdWlY.js";import"./useHighlightedText-qfj7RnMw.js";import"./ChevronUp-CcrHqtW6.js";import"./ChevronDown-y5t2TNH2.js";import"./ChevronRight-B8wcZ9md.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
