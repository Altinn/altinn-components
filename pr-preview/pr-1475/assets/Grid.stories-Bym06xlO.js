import{a6 as t,a9 as i}from"./iframe-DV5agHf5.js";import{G as m}from"./Grid-5x6EoREg.js";import{c as a}from"./categoryItems-BvNc543C.js";import{L as o}from"./ListItem-C8NpJCoV.js";import"./preload-helper-Cc2_yIPf.js";import"./HardHat-C_kHk7gF.js";import"./Truck-CtWkg872.js";import"./TeddyBear-CgvYe0D0.js";import"./Buildings2-JRf2It2a.js";import"./Input-CfHBGeL6.js";import"./Avatar-BEN4tDyT.js";import"./AvatarGroup-DhvypAS5.js";import"./Badge-Pb0_Mmmt.js";import"./Tooltip-BJCyjCNp.js";import"./Heading-Ct7f5Viq.js";import"./useHighlightedText-D74GV1fZ.js";import"./ChevronUp-CkyCCeXo.js";import"./ChevronDown-Brg3C2rz.js";import"./ChevronRight-DdV1IRY7.js";const S={title:"Page/Grid",component:m,tags:["autodocs"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:a?.map(e=>i.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:a?.map(e=>i.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:a?.map(e=>i.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}},F=["Large","Small"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
