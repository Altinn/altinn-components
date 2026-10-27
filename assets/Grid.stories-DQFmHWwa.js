import{a5 as t,a8 as a}from"./iframe-CplFPuE2.js";import{G as m}from"./Grid-B-3Vd5pL.js";import{c as i}from"./categoryItems-CNRmoVPA.js";import{L as o}from"./ListItem-BTgrhjIM.js";import"./preload-helper-Cc2_yIPf.js";import"./HardHat-CJHIjU3_.js";import"./Truck-C14gdsf-.js";import"./TeddyBear-DwYzlkqA.js";import"./Buildings2-BYsgmedO.js";import"./Input-BNktXmCP.js";import"./Avatar-B3ASgMQL.js";import"./AvatarGroup-B9EoMI2b.js";import"./Badge-BWoGIkg0.js";import"./Tooltip-Dh3mcs7O.js";import"./Heading-H6e_lYEN.js";import"./useHighlightedText-BpzjnQwF.js";import"./ChevronUp-Dm28ImCZ.js";import"./ChevronDown-DzeGgGZr.js";import"./ChevronRight-44eUUhYn.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}},F=["Large","Small"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
