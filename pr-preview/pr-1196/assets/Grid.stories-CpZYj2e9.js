import{j as e,r as s}from"./iframe-BDpWuaMs.js";import{G as a}from"./Grid-Dyfrc0XS.js";import{c as o}from"./categoryItems-CV29xSOf.js";import{L as m}from"./ListItem-mkIEbDJT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DVPUayQ0.js";import"./useId-BKmV9YxM.js";import"./HardHat-_frd8hPk.js";import"./Truck-BzWEPcK3.js";import"./TeddyBear-UzA7WSmT.js";import"./Buildings2-Dvc17tW1.js";import"./Button-m_FXpHGO.js";import"./tooltip-DLcd2lCg.js";import"./Input-BoCHA0_0.js";import"./XMark-Cx5Omj8e.js";import"./Icon-4_NTN6mD.js";import"./Skeleton-DC_TZb2p.js";import"./Avatar-CT8r-oMP.js";import"./AvatarGroup-C5RQzawa.js";import"./Badge-DPODtVho.js";import"./Tooltip-X0E0nlNG.js";import"./Heading-D4nA4ZwT.js";import"./useHighlightedText-B13W4IFy.js";import"./ChevronUp-CUbZcbs3.js";import"./ChevronDown-Bc_cVxBY.js";import"./ChevronRight-BJTZ2o3o.js";const R={title:"Page/Grid",component:a,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:e.jsx(e.Fragment,{children:o?.map(t=>s.createElement(m,{...t,key:t?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:e.jsx(e.Fragment,{children:o?.map(t=>s.createElement(m,{...t,title:{children:t.title,size:"md",weight:"bold"},variant:"subtle",key:t?.href,linkIcon:!0}))})}},i={args:{cols:4,size:"sm",children:e.jsx(e.Fragment,{children:o?.map(t=>s.createElement(m,{...t,title:t.title,variant:"subtle",key:t?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
