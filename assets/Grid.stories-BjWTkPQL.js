import{j as r,r as o}from"./iframe-CU9tIbvZ.js";import{G as a}from"./Grid-C-W5h0kq.js";import{c as m}from"./categoryItems-CG6Hu0lT.js";import{L as s}from"./ListItem-CfMUAyha.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bd_n44R2.js";import"./useId-BEikXtHv.js";import"./HardHat-D3WLfLvB.js";import"./Truck-BBcL6kJu.js";import"./TeddyBear-BxL-3fjt.js";import"./Buildings2-CD4MDmYA.js";import"./Button-DwluG-LJ.js";import"./button-DfPuT9nv.js";import"./use-merge-refs-BZYQG8M3.js";import"./lite-DaUVFjkg.js";import"./Input-C4CEDonn.js";import"./input-BB0Zu-vu.js";import"./XMark-DTYd927G.js";import"./Icon-BBvHNxu7.js";import"./Skeleton-WB8_C3gk.js";import"./Avatar-CPYUWVLR.js";import"./AvatarGroup-D82OEK4D.js";import"./Badge-C-yjP1nL.js";import"./Tooltip-Gn5m6ZxQ.js";import"./floating-ui.dom-DCpi3RTt.js";import"./Heading-DKJvmFhb.js";import"./useHighlightedText-okRrJvjD.js";import"./ChevronUp-C9A9ysE-.js";import"./ChevronDown-D1kreZKO.js";import"./ChevronRight-XlyxhDjC.js";const C={title:"Page/Grid",component:a,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:r.jsx(r.Fragment,{children:m?.map(t=>o.createElement(s,{...t,key:t?.href,linkIcon:!0}))})}},e={args:{cols:3,size:"lg",children:r.jsx(r.Fragment,{children:m?.map(t=>o.createElement(s,{...t,title:{children:t.title,size:"md",weight:"bold"},variant:"subtle",key:t?.href,linkIcon:!0}))})}},i={args:{cols:4,size:"sm",children:r.jsx(r.Fragment,{children:m?.map(t=>o.createElement(s,{...t,title:t.title,variant:"subtle",key:t?.href,linkIcon:!0}))})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
