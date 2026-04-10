import{j as e,r as o}from"./iframe-CfpleAaJ.js";import{G as a}from"./Grid-BqMnOIgh.js";import{c as s}from"./categoryItems-B__A4vFo.js";import{L as m}from"./ListItem-BnFFeCbH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C-ZlSrx2.js";import"./useId-CRfl8v3D.js";import"./HardHat-CMhJPSA8.js";import"./Truck-FTQeeQc4.js";import"./TeddyBear-Cp9dcNav.js";import"./Buildings2-dioGEkgK.js";import"./Button-DKJP6EaO.js";import"./button-bjClnooE.js";import"./use-merge-refs-0CqQhLRb.js";import"./lite-DaUVFjkg.js";import"./Input-B030prVc.js";import"./input-DZJGjPia.js";import"./XMark-Mr05NtnF.js";import"./Icon-DFklvQ48.js";import"./Skeleton-mkQz_xZ6.js";import"./Avatar-BBkC-qEC.js";import"./AvatarGroup-vSwCjNL5.js";import"./Badge-BZbseZdr.js";import"./Heading-SalYmhoh.js";import"./useHighlightedText-Cf92T70c.js";import"./ChevronUp-C1m4sJ12.js";import"./ChevronDown-QoYlkrAl.js";import"./ChevronRight-F6vNJ-SN.js";const A={title:"Page/Grid",component:a,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:e.jsx(e.Fragment,{children:s?.map(t=>o.createElement(m,{...t,key:t?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:e.jsx(e.Fragment,{children:s?.map(t=>o.createElement(m,{...t,title:{children:t.title,size:"md",weight:"bold"},variant:"subtle",key:t?.href,linkIcon:!0}))})}},i={args:{cols:4,size:"sm",children:e.jsx(e.Fragment,{children:s?.map(t=>o.createElement(m,{...t,title:t.title,variant:"subtle",key:t?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
