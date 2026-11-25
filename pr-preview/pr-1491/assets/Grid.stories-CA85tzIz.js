import{a6 as t,a9 as i}from"./iframe-CZm9Z2L_.js";import{G as m}from"./Grid-jPNsJzps.js";import{c as a}from"./categoryItems-DXhMHrgr.js";import{L as o}from"./ListItem-DzMq7FBw.js";import"./preload-helper-Cc2_yIPf.js";import"./HardHat-BOKtJ5Go.js";import"./Truck-B04wRGeP.js";import"./TeddyBear-D_-Tswtc.js";import"./Buildings2-BTINRXJL.js";import"./Input-BcwXpX3S.js";import"./Avatar-BfR_UP2W.js";import"./AvatarGroup-z1q2Yw0e.js";import"./Badge-DcBwCaoO.js";import"./Tooltip-CnehfAFo.js";import"./Heading-CGvkj5VV.js";import"./useHighlightedText-0BBntNc4.js";import"./ChevronUp-CIHpYQBC.js";import"./ChevronDown-Bb4C_BOJ.js";import"./ChevronRight-MmDri0bt.js";const S={title:"Page/Grid",component:m,tags:["autodocs"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:a?.map(e=>i.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:a?.map(e=>i.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:a?.map(e=>i.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}},F=["Large","Small"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
