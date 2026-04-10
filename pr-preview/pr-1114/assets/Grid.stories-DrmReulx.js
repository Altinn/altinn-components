import{j as e,r as o}from"./iframe-BmFIVBn_.js";import{G as a}from"./Grid-CJ04n8bp.js";import{c as s}from"./categoryItems-CGYkkClz.js";import{L as m}from"./ListItem-CaiNUw8w.js";import"./preload-helper-PPVm8Dsz.js";import"./index-3BUTcXKg.js";import"./useId-ClegSKnE.js";import"./HardHat-DVWubgnp.js";import"./Truck-Dg1Ov44o.js";import"./TeddyBear-BFFH_Plg.js";import"./Buildings2-Bp7D6pSC.js";import"./Button-qEoy6ct0.js";import"./button-DKdxIprw.js";import"./use-merge-refs-C8jIJdDy.js";import"./lite-DaUVFjkg.js";import"./Input-D2BG68i3.js";import"./input-DVOXybW4.js";import"./XMark-DPeWQ31a.js";import"./Icon-zZDqlwOf.js";import"./Skeleton-DRn19mA6.js";import"./Avatar-Zvdkk7EN.js";import"./AvatarGroup-DqX7R4kJ.js";import"./Badge-DoiHwmxA.js";import"./Heading-D2Zb4ZMb.js";import"./useHighlightedText-Dq-XqtYP.js";import"./ChevronUp-DNi3P42Z.js";import"./ChevronDown-B_BWwBHT.js";import"./ChevronRight-DcRWf4tm.js";const A={title:"Page/Grid",component:a,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:e.jsx(e.Fragment,{children:s?.map(t=>o.createElement(m,{...t,key:t?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:e.jsx(e.Fragment,{children:s?.map(t=>o.createElement(m,{...t,title:{children:t.title,size:"md",weight:"bold"},variant:"subtle",key:t?.href,linkIcon:!0}))})}},i={args:{cols:4,size:"sm",children:e.jsx(e.Fragment,{children:s?.map(t=>o.createElement(m,{...t,title:t.title,variant:"subtle",key:t?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
