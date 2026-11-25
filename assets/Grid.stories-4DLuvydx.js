import{a6 as t,a9 as i}from"./iframe-BW6sNfUG.js";import{G as m}from"./Grid-Cw89jUKK.js";import{c as a}from"./categoryItems-DlAfxp-3.js";import{L as o}from"./ListItem-sjVLqN5k.js";import"./preload-helper-Cc2_yIPf.js";import"./HardHat-CLz13xd7.js";import"./Truck-B_dcdKN9.js";import"./TeddyBear-Csp6ddA3.js";import"./Buildings2-1YBn2wwl.js";import"./Input-gnkfXNcC.js";import"./Avatar-C64BSSKk.js";import"./AvatarGroup-Ccq8C8ES.js";import"./Badge-CSeOMfHV.js";import"./Tooltip-CNbHjlA7.js";import"./Heading-DZSCY0dD.js";import"./useHighlightedText-Dx6jhFuL.js";import"./ChevronUp-D9Lqz4C3.js";import"./ChevronDown-CGVF_s9R.js";import"./ChevronRight-DCXIgdRg.js";const S={title:"Page/Grid",component:m,tags:["autodocs"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:a?.map(e=>i.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:a?.map(e=>i.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:a?.map(e=>i.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}},F=["Large","Small"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
