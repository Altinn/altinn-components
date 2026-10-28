import{a5 as t,a8 as a}from"./iframe-zDfzPjQ-.js";import{G as m}from"./Grid-C15L1Qag.js";import{c as i}from"./categoryItems-Ds3VqfuK.js";import{L as o}from"./ListItem-Ch60BFaY.js";import"./preload-helper-Cc2_yIPf.js";import"./HardHat-xudvyl3g.js";import"./Truck-Buc3QGBo.js";import"./TeddyBear-CvojJWnA.js";import"./Buildings2-Cmv8W-Bb.js";import"./Input-Cng2zass.js";import"./Avatar-D3LaL2hn.js";import"./AvatarGroup-CvMpJghk.js";import"./Badge-aBFHXHYf.js";import"./Tooltip-B0sYZQl4.js";import"./Heading-CKFRzaKs.js";import"./useHighlightedText-BKf3y1mD.js";import"./ChevronUp-0LePS4pY.js";import"./ChevronDown-D8vGjyTz.js";import"./ChevronRight-NBomJvaL.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}},F=["Large","Small"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
