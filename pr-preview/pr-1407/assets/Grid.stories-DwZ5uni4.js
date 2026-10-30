import{a5 as t,a8 as a}from"./iframe-k-5ppgch.js";import{G as m}from"./Grid-UcB1jhss.js";import{c as i}from"./categoryItems-BZLL2eBi.js";import{L as o}from"./ListItem-BtyqlbRy.js";import"./preload-helper-Cc2_yIPf.js";import"./HardHat-CALbbS7f.js";import"./Truck-CslV2KJe.js";import"./TeddyBear-DRMHsDl_.js";import"./Buildings2-BK3EZ0ZK.js";import"./Input-fDrubqKv.js";import"./Avatar-Bkj70cv6.js";import"./AvatarGroup-CF7XuR93.js";import"./Badge-GfdRI08Y.js";import"./Tooltip-tkuEOqTN.js";import"./Heading-DFDwpHPM.js";import"./useHighlightedText-DchtrGpj.js";import"./ChevronUp-gL_c1moU.js";import"./ChevronDown-l3Tycs4Q.js";import"./ChevronRight-CDNE03o8.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}},F=["Large","Small"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
