import{a7 as t,aa as a}from"./iframe-Bv9y2YZF.js";import{G as m}from"./Grid-CriasFVy.js";import{c as i}from"./categoryItems-BijBMiPm.js";import{L as o}from"./ListItem-C6mw7NGu.js";import"./preload-helper-Cc2_yIPf.js";import"./HardHat-Dk_mHMzg.js";import"./Truck-qmWzVyDf.js";import"./TeddyBear-BKXydhEi.js";import"./Buildings2-BeaWmSSV.js";import"./Input-C95LaLCm.js";import"./Avatar-CJwf9igj.js";import"./AvatarGroup-DorKIyuC.js";import"./Badge-PIp_WKNx.js";import"./Tooltip-DATtufsq.js";import"./Heading-CDZ3_iYV.js";import"./useHighlightedText-B3SRW8uR.js";import"./ChevronUp-5Z-Nijsh.js";import"./ChevronDown-CAvQitey.js";import"./ChevronRight-B_ztNHmN.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
