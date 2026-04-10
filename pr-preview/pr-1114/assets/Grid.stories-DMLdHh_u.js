import{j as e,r as o}from"./iframe-CEV_bE_y.js";import{G as a}from"./Grid-8GyI5KB6.js";import{c as s}from"./categoryItems-DVgZE23F.js";import{L as m}from"./ListItem-CqKn_y3x.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CGpVDQnA.js";import"./useId-BHfJgDBc.js";import"./HardHat-BC-NCrPf.js";import"./Truck-BzCeoAPs.js";import"./TeddyBear-CannDpUO.js";import"./Buildings2-DLWHFsKX.js";import"./Button-Camg-mBZ.js";import"./button-B-6jfb5R.js";import"./use-merge-refs-Dqc3iuE1.js";import"./lite-DaUVFjkg.js";import"./Input-DQ-BJxC0.js";import"./input-CUhDKlWL.js";import"./XMark-ByuttVGc.js";import"./Icon-BwPDmLy2.js";import"./Skeleton-cNOPtI7P.js";import"./Avatar-Cf5aI0ZG.js";import"./AvatarGroup-DHx4XjXe.js";import"./Badge-BVMw9Rw0.js";import"./Heading-CjHEKkoD.js";import"./useHighlightedText-DdOlAfmT.js";import"./ChevronUp-BgDvj3-f.js";import"./ChevronDown--HTcc5lI.js";import"./ChevronRight-Dck0Zh1j.js";const A={title:"Page/Grid",component:a,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:e.jsx(e.Fragment,{children:s?.map(t=>o.createElement(m,{...t,key:t?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:e.jsx(e.Fragment,{children:s?.map(t=>o.createElement(m,{...t,title:{children:t.title,size:"md",weight:"bold"},variant:"subtle",key:t?.href,linkIcon:!0}))})}},i={args:{cols:4,size:"sm",children:e.jsx(e.Fragment,{children:s?.map(t=>o.createElement(m,{...t,title:t.title,variant:"subtle",key:t?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const B=["Large","Small"];export{r as Large,i as Small,B as __namedExportsOrder,A as default};
