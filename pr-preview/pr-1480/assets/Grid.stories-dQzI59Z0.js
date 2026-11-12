import{a7 as t,aa as a}from"./iframe-xlSYDLmX.js";import{G as m}from"./Grid-D8SXJ86s.js";import{c as i}from"./categoryItems-C8LmtkUC.js";import{L as o}from"./ListItem-B7QDJ_pJ.js";import"./preload-helper-Cc2_yIPf.js";import"./HardHat-CN2ZikjP.js";import"./Truck-DI5T97H9.js";import"./TeddyBear-DqxIYJLl.js";import"./Buildings2-B9C4Wpww.js";import"./Input-r4bRN1Qy.js";import"./Avatar-DElWOLnF.js";import"./AvatarGroup-Dx8NgiU3.js";import"./Badge-xtJTwQdy.js";import"./Tooltip-DtRHHtRs.js";import"./Heading-DK8bpf-l.js";import"./useHighlightedText-CTgwY4NQ.js";import"./ChevronUp-SNqOJLK8.js";import"./ChevronDown-BV4f9W92.js";import"./ChevronRight-WLOtysjI.js";const S={title:"Page/Grid",component:m,tags:["autodocs"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}},F=["Large","Small"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};export{r as Large,s as Small,F as __namedExportsOrder,S as default};
