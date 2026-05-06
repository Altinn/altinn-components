import{j as r,r as o}from"./iframe-0B_Yudin.js";import{G as a}from"./Grid-C0J4kYmo.js";import{c as m}from"./categoryItems-BDAPUgs1.js";import{L as s}from"./ListItem-DnHiZFTT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-bzqtFzN_.js";import"./useId-BUxMg0Ir.js";import"./HardHat-CokC7EBR.js";import"./Truck-011sao1X.js";import"./TeddyBear-Dj9NiVei.js";import"./Buildings2-6vsd0VXE.js";import"./Button-CFVlP8iN.js";import"./button-B4QTcVhB.js";import"./use-merge-refs-ymJsCjoB.js";import"./lite-DaUVFjkg.js";import"./Input-B4vKKvBG.js";import"./input-P8iU2s3c.js";import"./XMark-4vnuAWTz.js";import"./Icon-CbCRlB_g.js";import"./Skeleton-CCW5QxrE.js";import"./Avatar-BGwRUT15.js";import"./AvatarGroup-VvayKp3V.js";import"./Badge-BFzKrsnu.js";import"./Tooltip-BPVsTrTk.js";import"./floating-ui.dom-DCpi3RTt.js";import"./Heading-iCNnL7gN.js";import"./useHighlightedText-1P3axs8E.js";import"./ChevronUp-CRY6Xdys.js";import"./ChevronDown-DyrNm3cx.js";import"./ChevronRight-D1gjYegd.js";const C={title:"Page/Grid",component:a,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:r.jsx(r.Fragment,{children:m?.map(t=>o.createElement(s,{...t,key:t?.href,linkIcon:!0}))})}},e={args:{cols:3,size:"lg",children:r.jsx(r.Fragment,{children:m?.map(t=>o.createElement(s,{...t,title:{children:t.title,size:"md",weight:"bold"},variant:"subtle",key:t?.href,linkIcon:!0}))})}},i={args:{cols:4,size:"sm",children:r.jsx(r.Fragment,{children:m?.map(t=>o.createElement(s,{...t,title:t.title,variant:"subtle",key:t?.href,linkIcon:!0}))})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
