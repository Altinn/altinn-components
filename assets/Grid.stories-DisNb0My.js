import{a6 as t,a9 as i}from"./iframe-Dhr5kNpI.js";import{G as m}from"./Grid-D0helmbP.js";import{c as a}from"./categoryItems-DgxRbNXd.js";import{L as o}from"./ListItem-DNrY8OXn.js";import"./preload-helper-Cc2_yIPf.js";import"./HardHat-CUzcgi8n.js";import"./Truck-C4tOLy64.js";import"./TeddyBear-BX2GJNzx.js";import"./Buildings2-Zdf-PMQF.js";import"./Input-jpu5auKu.js";import"./Avatar-DFghK3As.js";import"./AvatarGroup-DUSzafHi.js";import"./Badge-DkiOJ260.js";import"./Tooltip-w2q6vIcA.js";import"./Heading-DmbuxGS8.js";import"./useHighlightedText-D3bt4yNA.js";import"./ChevronUp-CnX9Oj5-.js";import"./ChevronDown-CRBE2Pft.js";import"./ChevronRight-BnrL2uT7.js";const S={title:"Page/Grid",component:m,tags:["autodocs"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:a?.map(e=>i.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:a?.map(e=>i.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:a?.map(e=>i.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}},F=["Large","Small"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
