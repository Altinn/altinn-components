import{j as r,r as o}from"./iframe-DDirkHus.js";import{G as a}from"./Grid-cZD7eVQq.js";import{c as m}from"./categoryItems-DVRJ919f.js";import{L as s}from"./ListItem-CNfUb6zi.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B2YDfdyU.js";import"./useId-CVUrh2ea.js";import"./HardHat-B_tD3JvH.js";import"./Truck-Dsp3fUqd.js";import"./TeddyBear-BlwyndsT.js";import"./Buildings2-CD5n5Krw.js";import"./Button-CdMyOsNo.js";import"./button-CnVt3gpj.js";import"./use-merge-refs-CIAaUVpb.js";import"./lite-DaUVFjkg.js";import"./Input-C9yDHhzX.js";import"./input-CQTkCXgP.js";import"./XMark-DldqIUES.js";import"./Icon-Cv1R39O2.js";import"./Skeleton-0VOrezcL.js";import"./Avatar-DMl0Fglw.js";import"./AvatarGroup-CxNYw_3L.js";import"./Badge-BMZjltw3.js";import"./Tooltip-Di80zHO_.js";import"./floating-ui.dom-DCpi3RTt.js";import"./Heading-s9P5sHvn.js";import"./useHighlightedText-CWfqHJQe.js";import"./ChevronUp-CfXo5p6V.js";import"./ChevronDown-BujCn4TJ.js";import"./ChevronRight-BUOZMhwy.js";const C={title:"Page/Grid",component:a,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:r.jsx(r.Fragment,{children:m?.map(t=>o.createElement(s,{...t,key:t?.href,linkIcon:!0}))})}},e={args:{cols:3,size:"lg",children:r.jsx(r.Fragment,{children:m?.map(t=>o.createElement(s,{...t,title:{children:t.title,size:"md",weight:"bold"},variant:"subtle",key:t?.href,linkIcon:!0}))})}},i={args:{cols:4,size:"sm",children:r.jsx(r.Fragment,{children:m?.map(t=>o.createElement(s,{...t,title:t.title,variant:"subtle",key:t?.href,linkIcon:!0}))})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
