import{a7 as t,aa as a}from"./iframe-CENvAP26.js";import{G as m}from"./Grid-BhnFq-fD.js";import{c as i}from"./categoryItems-rK2kAl4b.js";import{L as o}from"./ListItem-DghPxNCy.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-B23Cj8Qu.js";import"./Truck-YhZa7gBn.js";import"./TeddyBear-tu8MLGRj.js";import"./Buildings2-Cx_FQqS5.js";import"./Input-CMkEMAO8.js";import"./Avatar-D1pW8xSr.js";import"./AvatarGroup-CTCyh_uW.js";import"./Badge-DDGgDt_B.js";import"./Tooltip-B6qNZOKm.js";import"./Heading-mra_L4pQ.js";import"./useHighlightedText-BwOLK-i3.js";import"./ChevronUp-BFUCM25K.js";import"./ChevronDown-88nFsQYK.js";import"./ChevronRight-CqCnB5Zg.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
