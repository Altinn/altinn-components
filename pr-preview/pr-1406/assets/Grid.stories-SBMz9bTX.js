import{a7 as t,aa as a}from"./iframe-CH8mgD3C.js";import{G as m}from"./Grid-DhGvOw66.js";import{c as i}from"./categoryItems-BWn3EoDV.js";import{L as o}from"./ListItem-C_SsF7OJ.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-Bk0uZ43x.js";import"./Truck-Dbvgj6x2.js";import"./TeddyBear-B1ZRO278.js";import"./Buildings2-C_eOnXb4.js";import"./Input-Sz2FhcYy.js";import"./Avatar-DpRxDHCs.js";import"./AvatarGroup-B9kdZ47G.js";import"./Badge-CSoF9iVN.js";import"./Tooltip-CT6ipS0w.js";import"./Heading-Yz0Kaix4.js";import"./useHighlightedText-B_wEJ_uI.js";import"./ChevronUp-BTM5yc0u.js";import"./ChevronDown-Cn-stDPP.js";import"./ChevronRight-CQGN_WtL.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
