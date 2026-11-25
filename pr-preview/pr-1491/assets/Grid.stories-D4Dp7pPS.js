import{a6 as t,a9 as i}from"./iframe-CjTVLX0J.js";import{G as m}from"./Grid-4vf9bVhf.js";import{c as a}from"./categoryItems-C40LDxVs.js";import{L as o}from"./ListItem-BsQLulwX.js";import"./preload-helper-Cc2_yIPf.js";import"./HardHat-DYWy51xs.js";import"./Truck-CrbU8Z0U.js";import"./TeddyBear-aZLffFSD.js";import"./Buildings2-DbrN1Cg2.js";import"./Input-B0rqselK.js";import"./Avatar-Bte94cY6.js";import"./AvatarGroup-C543ATGD.js";import"./Badge-5qYmbB4A.js";import"./Tooltip-D-ZO89_f.js";import"./Heading-iGdZKzrq.js";import"./useHighlightedText-DSpkTug-.js";import"./ChevronUp-BaW30cb9.js";import"./ChevronDown-mX34rd4T.js";import"./ChevronRight-B7WfXeCo.js";const S={title:"Page/Grid",component:m,tags:["autodocs"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:a?.map(e=>i.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:a?.map(e=>i.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:a?.map(e=>i.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}},F=["Large","Small"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
