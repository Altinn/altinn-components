import{j as r,r as o}from"./iframe-BLYnYdJi.js";import{G as a}from"./Grid-q27RNPOG.js";import{c as m}from"./categoryItems-BXuqTWVE.js";import{L as s}from"./ListItem-Bj5rSe3Q.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B87fQ9Ty.js";import"./useId-X7maRfkh.js";import"./HardHat-Cg5U08Gp.js";import"./Truck-CzyQSdlX.js";import"./TeddyBear-_ZNRy_CF.js";import"./Buildings2-DxfjqMPA.js";import"./Button-DA7PTG8V.js";import"./button-B4GPokGl.js";import"./use-merge-refs-FLCzGq2C.js";import"./lite-DaUVFjkg.js";import"./Input-6k10kXxt.js";import"./input-D5lGbDkw.js";import"./XMark-Df3dBUtr.js";import"./Icon-BBgjdpk7.js";import"./Skeleton-DVFvYbaO.js";import"./Avatar-R2BW9KiJ.js";import"./AvatarGroup-Bj4w1IxT.js";import"./Badge-C8IaAeJ7.js";import"./Tooltip-C4gqbQ4g.js";import"./floating-ui.dom-DCpi3RTt.js";import"./Heading-BbPallRO.js";import"./useHighlightedText-omqdYwyr.js";import"./ChevronUp-B2zncOUr.js";import"./ChevronDown-2Zea4dpX.js";import"./ChevronRight-BKn9ueoN.js";const C={title:"Page/Grid",component:a,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:r.jsx(r.Fragment,{children:m?.map(t=>o.createElement(s,{...t,key:t?.href,linkIcon:!0}))})}},e={args:{cols:3,size:"lg",children:r.jsx(r.Fragment,{children:m?.map(t=>o.createElement(s,{...t,title:{children:t.title,size:"md",weight:"bold"},variant:"subtle",key:t?.href,linkIcon:!0}))})}},i={args:{cols:4,size:"sm",children:r.jsx(r.Fragment,{children:m?.map(t=>o.createElement(s,{...t,title:t.title,variant:"subtle",key:t?.href,linkIcon:!0}))})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    cols: 4,
    size: 'sm',
    children: <>
        {categoryItems?.map(item => <ListItem {...item as ListItemProps} title={item.title} variant="subtle" key={item?.href} linkIcon={true} />)}
      </>
  }
}`,...i.parameters?.docs?.source}}};const D=["Large","Small"];export{e as Large,i as Small,D as __namedExportsOrder,C as default};
