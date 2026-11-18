import{a6 as t,a9 as i}from"./iframe-Cf4UALw8.js";import{G as m}from"./Grid-Ik0V-sVg.js";import{c as a}from"./categoryItems-BQAnXOyo.js";import{L as o}from"./ListItem-BdmDs4G2.js";import"./preload-helper-Cc2_yIPf.js";import"./HardHat-Cer2dYI_.js";import"./Truck-d0SRSTPu.js";import"./TeddyBear-Dclfo2rQ.js";import"./Buildings2-C5pfq8or.js";import"./Input-OKh8JSaI.js";import"./Avatar-DPyI2gzd.js";import"./AvatarGroup-C1FgnCDS.js";import"./Badge-A8SwLO0m.js";import"./Tooltip-vDvnT1in.js";import"./Heading-B2LEqvTq.js";import"./useHighlightedText-BGOVKO4Q.js";import"./ChevronUp-BKdDwASh.js";import"./ChevronDown-B_UJ6uJ_.js";import"./ChevronRight-DcM2grMN.js";const S={title:"Page/Grid",component:m,tags:["autodocs"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:a?.map(e=>i.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:a?.map(e=>i.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:a?.map(e=>i.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}},F=["Large","Small"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
