import{j as e,r as o}from"./iframe-BqnZkKPi.js";import{G as a}from"./Grid-C7n7PF46.js";import{c as s}from"./categoryItems-DmM9NvAk.js";import{L as m}from"./ListItem-C4Du7a0f.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DAuAfjpD.js";import"./useId-9kVvsXig.js";import"./HardHat-BoZetEkd.js";import"./Truck-BjBvxdxm.js";import"./TeddyBear-Bt5RromD.js";import"./Buildings2-CX0IGr76.js";import"./Button-BhHmd_Fm.js";import"./button-CeqU6--G.js";import"./use-merge-refs-Dh9pzmOc.js";import"./lite-DaUVFjkg.js";import"./Input-C33ZQCyq.js";import"./input-xJWBoVha.js";import"./XMark-Y2_85_oc.js";import"./Icon-CnWjusVH.js";import"./Skeleton-1qnYSSLw.js";import"./Avatar-DNgE8Mou.js";import"./AvatarGroup-CjT1qNUB.js";import"./Badge-wAZ__xuM.js";import"./Heading-BxNd6ZSD.js";import"./useHighlightedText-Clj8nPui.js";import"./ChevronUp-Df6M1VDr.js";import"./ChevronDown-CoVqqo9t.js";import"./ChevronRight-DE1wtPln.js";const A={title:"Page/Grid",component:a,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:e.jsx(e.Fragment,{children:s?.map(t=>o.createElement(m,{...t,key:t?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:e.jsx(e.Fragment,{children:s?.map(t=>o.createElement(m,{...t,title:{children:t.title,size:"md",weight:"bold"},variant:"subtle",key:t?.href,linkIcon:!0}))})}},i={args:{cols:4,size:"sm",children:e.jsx(e.Fragment,{children:s?.map(t=>o.createElement(m,{...t,title:t.title,variant:"subtle",key:t?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
