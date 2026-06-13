import{a7 as t,aa as a}from"./iframe-2h8IP8d3.js";import{G as m}from"./Grid-Cs3JYE5K.js";import{c as i}from"./categoryItems-B2Wt_NaA.js";import{L as o}from"./ListItem-Cu2B-552.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-D08_ftdp.js";import"./Truck-D-7H5Bck.js";import"./TeddyBear-Ce_Xeyq8.js";import"./Buildings2-BG0DPNVQ.js";import"./Input-CcSuNkw7.js";import"./Avatar-C_KS8ezx.js";import"./AvatarGroup-ChTLLSw-.js";import"./Badge-Pn_S1ZTN.js";import"./Tooltip-D08FTuVb.js";import"./Heading-DXu-0NAz.js";import"./useHighlightedText-CelzCUqF.js";import"./ChevronUp-BQbblg8y.js";import"./ChevronDown-D2-mCLBn.js";import"./ChevronRight-Bz8Cr0I4.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
