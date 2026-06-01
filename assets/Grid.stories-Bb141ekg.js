import{a7 as t,aa as a}from"./iframe-CAfDO4Rw.js";import{G as m}from"./Grid-B3DIje3P.js";import{c as i}from"./categoryItems-D3UA-1ei.js";import{L as o}from"./ListItem-B4Cw7EmV.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-BOt3nV9p.js";import"./Truck-BHqcfwQn.js";import"./TeddyBear-BOjRCC0t.js";import"./Buildings2-DzKODHh0.js";import"./Input-xoXFTL9F.js";import"./Avatar-CgZyFHuO.js";import"./AvatarGroup-wzegiK4S.js";import"./Badge-2r7QR-Ea.js";import"./Tooltip-CnjxI-as.js";import"./Heading-YvXsCKAz.js";import"./useHighlightedText-D1Egz4xv.js";import"./ChevronUp-Drx-r-2C.js";import"./ChevronDown-BlOuVwd9.js";import"./ChevronRight-CMD5YJ4n.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
