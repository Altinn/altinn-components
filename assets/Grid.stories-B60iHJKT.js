import{j as r,r as o}from"./iframe-CpLxKnDM.js";import{G as a}from"./Grid-CbZC7lmf.js";import{c as m}from"./categoryItems-Ci0RQLmK.js";import{L as s}from"./ListItem-S3K-THCc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BZrYlxzi.js";import"./useId-Dk2QO8VQ.js";import"./HardHat-BygJ0hBu.js";import"./Truck-CpSx_n1T.js";import"./TeddyBear--wEPU4hx.js";import"./Buildings2-CpGh8O8D.js";import"./Button-DKJNFoHr.js";import"./button-DZ9B7a50.js";import"./use-merge-refs-g_590vId.js";import"./lite-DaUVFjkg.js";import"./Input-Cnu7Dubv.js";import"./input-CwcuNrJh.js";import"./XMark-BkFwP2BW.js";import"./Icon-xH6stteC.js";import"./Skeleton-B2kLb9z1.js";import"./Avatar-Bh6xe4Ys.js";import"./AvatarGroup-DwxSIihj.js";import"./Badge-BprayW1R.js";import"./Tooltip-BKj7GKZF.js";import"./floating-ui.dom-DCpi3RTt.js";import"./Heading-Dmt1Hp0l.js";import"./useHighlightedText-De1FlINf.js";import"./ChevronUp-CGssbGWN.js";import"./ChevronDown-_hDUIJMX.js";import"./ChevronRight-16z1B_cb.js";const C={title:"Page/Grid",component:a,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:r.jsx(r.Fragment,{children:m?.map(t=>o.createElement(s,{...t,key:t?.href,linkIcon:!0}))})}},e={args:{cols:3,size:"lg",children:r.jsx(r.Fragment,{children:m?.map(t=>o.createElement(s,{...t,title:{children:t.title,size:"md",weight:"bold"},variant:"subtle",key:t?.href,linkIcon:!0}))})}},i={args:{cols:4,size:"sm",children:r.jsx(r.Fragment,{children:m?.map(t=>o.createElement(s,{...t,title:t.title,variant:"subtle",key:t?.href,linkIcon:!0}))})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
