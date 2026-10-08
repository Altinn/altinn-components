import{a7 as t,aa as a}from"./iframe-BKcGtkf2.js";import{G as m}from"./Grid-Drv6DlPU.js";import{c as i}from"./categoryItems-CAv7Hw3N.js";import{L as o}from"./ListItem-EWMGi19r.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-CUm3GEdd.js";import"./Truck-CTASshB-.js";import"./TeddyBear-D_eaSpz-.js";import"./Buildings2-Bo1BVeUl.js";import"./Input-C7NN4jQM.js";import"./Avatar-BD71BIVo.js";import"./AvatarGroup-Chghs2c1.js";import"./Badge-CPABd3pg.js";import"./Tooltip-PYsK9SJI.js";import"./Heading-iI-qniD3.js";import"./useHighlightedText-Qdo-jqVR.js";import"./ChevronUp-DoWxH2Yl.js";import"./ChevronDown-Jc6dKi_G.js";import"./ChevronRight-Bik0Rfts.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
