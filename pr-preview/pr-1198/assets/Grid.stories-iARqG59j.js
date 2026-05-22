import{j as e,r as s}from"./iframe-CbC-fLaY.js";import{G as a}from"./Grid-CAgOikJM.js";import{c as o}from"./categoryItems-DxYSrsLO.js";import{L as m}from"./ListItem-CnbC7rOU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ds9VDGIC.js";import"./useId-C2JQsT24.js";import"./HardHat-BtuRmdEH.js";import"./Truck-BgSSwdhE.js";import"./TeddyBear-BggMGtyM.js";import"./Buildings2-BODn5oQY.js";import"./Button-B0m1rUs2.js";import"./tooltip-BtbQ4KG6.js";import"./Input-BNbo7Vjn.js";import"./XMark-DvUzU3_h.js";import"./Icon-DW3Nd0-m.js";import"./Skeleton-D8kEQByH.js";import"./Avatar-CmrLTlqi.js";import"./AvatarGroup-CtTcTi_X.js";import"./Badge-BwpPXd0u.js";import"./Tooltip-BulSRtpn.js";import"./Heading-Bl7p7Gle.js";import"./useHighlightedText-BssbQrxH.js";import"./ChevronUp-CU6zrkOY.js";import"./ChevronDown-abcxRNtY.js";import"./ChevronRight-CThQJEOF.js";const R={title:"Page/Grid",component:a,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:e.jsx(e.Fragment,{children:o?.map(t=>s.createElement(m,{...t,key:t?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:e.jsx(e.Fragment,{children:o?.map(t=>s.createElement(m,{...t,title:{children:t.title,size:"md",weight:"bold"},variant:"subtle",key:t?.href,linkIcon:!0}))})}},i={args:{cols:4,size:"sm",children:e.jsx(e.Fragment,{children:o?.map(t=>s.createElement(m,{...t,title:t.title,variant:"subtle",key:t?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    cols: 4,
    size: 'sm',
    children: <>
        {categoryItems?.map(item => <ListItem {...item as ListItemProps} title={item.title} variant="subtle" key={item?.href} linkIcon={true} />)}
      </>
  }
}`,...i.parameters?.docs?.source}}};const q=["Large","Small"];export{r as Large,i as Small,q as __namedExportsOrder,R as default};
