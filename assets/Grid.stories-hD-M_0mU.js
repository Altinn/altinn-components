import{a7 as t,aa as a}from"./iframe-Cj7V21km.js";import{G as m}from"./Grid-DB2ZCdHZ.js";import{c as i}from"./categoryItems-B_aaJ697.js";import{L as o}from"./ListItem-iMDmyxkq.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-Dv8Tz9vy.js";import"./Truck-DL201Yci.js";import"./TeddyBear-BnUnAcPU.js";import"./Buildings2-56fcZ__k.js";import"./Input-DnU3MXtK.js";import"./Avatar-D_h-dTDE.js";import"./AvatarGroup-WUTqusx8.js";import"./Badge-DmpmaSED.js";import"./Tooltip-D-lEMjLJ.js";import"./Heading-BRQOSuW8.js";import"./useHighlightedText-gdz5u-yJ.js";import"./ChevronUp-d_RO8MoQ.js";import"./ChevronDown-SIqR4dbe.js";import"./ChevronRight-DWxpnRfX.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
