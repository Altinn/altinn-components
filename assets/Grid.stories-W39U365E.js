import{p as e,s}from"./iframe-D7BK96qe.js";import{G as a}from"./Grid-Dwwpopkp.js";import{c as o}from"./categoryItems-SrlgUNe3.js";import{L as m}from"./ListItem-BwjNTMuN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CL9j6gFH.js";import"./useId-B1IjdNvC.js";import"./HardHat-D0WRfyD7.js";import"./Truck-BZZzF5-R.js";import"./TeddyBear-PP7CKWSw.js";import"./Buildings2-De8pexF1.js";import"./Button-UbmuloFB.js";import"./tooltip-B8elfXS-.js";import"./Input-wwG44gvy.js";import"./XMark-DKvmykI8.js";import"./Icon-CXOWvudR.js";import"./Skeleton-C-TQnNEe.js";import"./Avatar-BzaJ_tLr.js";import"./AvatarGroup-BXGOcJTt.js";import"./Badge-CP0to2q5.js";import"./Tooltip-BXZ0f-e8.js";import"./Heading-Q-ep_pj6.js";import"./useHighlightedText-C3262gRX.js";import"./ChevronUp-CmwigBl7.js";import"./ChevronDown-RBr9MJP5.js";import"./ChevronRight-B2Fr_XJI.js";const R={title:"Page/Grid",component:a,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:e.jsx(e.Fragment,{children:o?.map(t=>s.createElement(m,{...t,key:t?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:e.jsx(e.Fragment,{children:o?.map(t=>s.createElement(m,{...t,title:{children:t.title,size:"md",weight:"bold"},variant:"subtle",key:t?.href,linkIcon:!0}))})}},i={args:{cols:4,size:"sm",children:e.jsx(e.Fragment,{children:o?.map(t=>s.createElement(m,{...t,title:t.title,variant:"subtle",key:t?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    cols: 4,
    size: 'sm',
    children: <>
        {categoryItems?.map(item => <ListItem {...item as ListItemProps} title={item.title} variant="subtle" key={item?.href} linkIcon={true} />)}
      </>
  }
}`,...i.parameters?.docs?.source}}};const q=["Large","Small"];export{r as Large,i as Small,q as __namedExportsOrder,R as default};
