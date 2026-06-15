import{a7 as t,aa as a}from"./iframe-B7zm1HIO.js";import{G as m}from"./Grid-Dr9sK--T.js";import{c as i}from"./categoryItems-DnEZ9ISf.js";import{L as o}from"./ListItem-CiWjvc3C.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-DpTaj3wN.js";import"./Truck-KI-8s2EO.js";import"./TeddyBear-CJPBSTWo.js";import"./Buildings2-7HqIq_go.js";import"./Input-w1DANTSA.js";import"./Avatar-moSMPGHi.js";import"./AvatarGroup-BaLNA_5N.js";import"./Badge-C4nIiofZ.js";import"./Tooltip-Cey7ITFK.js";import"./Heading-C4G9hOYj.js";import"./useHighlightedText-DWzAFf8R.js";import"./ChevronUp-Drwzt9gE.js";import"./ChevronDown-D45B7h4T.js";import"./ChevronRight-BItcH0VL.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
