import{a5 as t,a8 as a}from"./iframe-BfD7syly.js";import{G as m}from"./Grid-DMgp28Z-.js";import{c as i}from"./categoryItems-BePXec6o.js";import{L as o}from"./ListItem-CBQXcdIJ.js";import"./preload-helper-Cc2_yIPf.js";import"./HardHat-DXPutjya.js";import"./Truck-KHP5OjIW.js";import"./TeddyBear-BIvdbLb0.js";import"./Buildings2-BGyMsCbz.js";import"./Input-BppbGARe.js";import"./Avatar-DzXDYKXO.js";import"./AvatarGroup-x9OrqdJM.js";import"./Badge-tM6hClJt.js";import"./Tooltip-BbiC_D-U.js";import"./Heading-M_gD0nhY.js";import"./useHighlightedText-BiU1Xaf8.js";import"./ChevronUp-Di_vjPCQ.js";import"./ChevronDown-CFgXCL2X.js";import"./ChevronRight-DeJMnotn.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}},F=["Large","Small"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
