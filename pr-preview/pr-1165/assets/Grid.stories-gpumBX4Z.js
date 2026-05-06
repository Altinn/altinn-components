import{j as r,r as o}from"./iframe-BakMcPB9.js";import{G as a}from"./Grid-ByrNWaLf.js";import{c as m}from"./categoryItems-C_GsGOXr.js";import{L as s}from"./ListItem-xf55yvbN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DAwqyEdM.js";import"./useId-Btw-Kuqp.js";import"./HardHat-BJHqT1Qm.js";import"./Truck-B0t_MKjA.js";import"./TeddyBear-ThDzPleD.js";import"./Buildings2-AdE5hB6g.js";import"./Button-BJ-P2q8B.js";import"./button-Dqq-cscz.js";import"./use-merge-refs-CJ9f1t94.js";import"./lite-DaUVFjkg.js";import"./Input-Csjd-e9P.js";import"./input-DNwUo5r_.js";import"./XMark-D8cLqedS.js";import"./Icon-D4ysQTre.js";import"./Skeleton-CIZGLt5B.js";import"./Avatar-bwZt4czp.js";import"./AvatarGroup-DgPgqKip.js";import"./Badge-ChbpCNVq.js";import"./Tooltip-CQ3DXIuJ.js";import"./floating-ui.dom-DCpi3RTt.js";import"./Heading-Dpm-6zaj.js";import"./useHighlightedText-nzhiVGnc.js";import"./ChevronUp-D-5UFsw8.js";import"./ChevronDown-DMRBxZop.js";import"./ChevronRight-C2TalX8u.js";const C={title:"Page/Grid",component:a,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:r.jsx(r.Fragment,{children:m?.map(t=>o.createElement(s,{...t,key:t?.href,linkIcon:!0}))})}},e={args:{cols:3,size:"lg",children:r.jsx(r.Fragment,{children:m?.map(t=>o.createElement(s,{...t,title:{children:t.title,size:"md",weight:"bold"},variant:"subtle",key:t?.href,linkIcon:!0}))})}},i={args:{cols:4,size:"sm",children:r.jsx(r.Fragment,{children:m?.map(t=>o.createElement(s,{...t,title:t.title,variant:"subtle",key:t?.href,linkIcon:!0}))})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
