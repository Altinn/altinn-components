import{a7 as t,aa as a}from"./iframe-cf7ESM3q.js";import{G as m}from"./Grid-BcKb2MrK.js";import{c as i}from"./categoryItems-BCkSM6Fl.js";import{L as o}from"./ListItem-CXqD_edS.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-IchpfpgW.js";import"./Truck-CP23KWmX.js";import"./TeddyBear-C3XYx_4J.js";import"./Buildings2-CkZ7T4sb.js";import"./Input-DT4mbTp0.js";import"./Avatar-0G-pd6NH.js";import"./AvatarGroup-Y1BTiBK0.js";import"./Badge-CCa-9q1v.js";import"./Tooltip-B9_Ir4Cy.js";import"./Heading-CpNWi06X.js";import"./useHighlightedText-D_wbJNXZ.js";import"./ChevronUp-B_u4FtrM.js";import"./ChevronDown-DOXFb4Ko.js";import"./ChevronRight-Dy1T7Tgm.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
