import{a5 as t,a8 as a}from"./iframe-BenRi1VF.js";import{G as m}from"./Grid-C410wPml.js";import{c as i}from"./categoryItems-D4rStXhy.js";import{L as o}from"./ListItem-DZ4jGznm.js";import"./preload-helper-Cc2_yIPf.js";import"./HardHat-B9fzD0l3.js";import"./Truck-FGh3cqgq.js";import"./TeddyBear-BHVCWfNY.js";import"./Buildings2-C5awSUTB.js";import"./Input-CYuEMmfW.js";import"./Avatar-DXBUAkUc.js";import"./AvatarGroup-BAohrV6V.js";import"./Badge-3MbQAaWj.js";import"./Tooltip-BQW8S8Bj.js";import"./Heading-kdzgZTGG.js";import"./useHighlightedText-lRrcJCDS.js";import"./ChevronUp-BbUZTqMr.js";import"./ChevronDown-CnLj0wQZ.js";import"./ChevronRight-B0Rwz_dW.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}},F=["Large","Small"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
