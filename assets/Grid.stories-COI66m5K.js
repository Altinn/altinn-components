import{a7 as t,aa as a}from"./iframe-CHdTRX1S.js";import{G as m}from"./Grid-XXJ2jaBq.js";import{c as i}from"./categoryItems-DbQPY7Fl.js";import{L as o}from"./ListItem-sXsJE6ar.js";import"./preload-helper-Cc2_yIPf.js";import"./HardHat-4951jwWs.js";import"./Truck-DLhw8PXD.js";import"./TeddyBear-CHgFg8DA.js";import"./Buildings2-CyFQwsFF.js";import"./Input-CiIWWSBU.js";import"./Avatar-BgVv4jsI.js";import"./AvatarGroup-C6qZoOIR.js";import"./Badge-ZdmE6gaR.js";import"./Tooltip-CYLMyUyD.js";import"./Heading-CWEvYxPf.js";import"./useHighlightedText-HQpCSNf5.js";import"./ChevronUp-Bc1dDmk3.js";import"./ChevronDown-BTY70Kvu.js";import"./ChevronRight-h2GXZqhR.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
