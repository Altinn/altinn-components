import{j as e,r as o}from"./iframe-D8UVhXtj.js";import{G as a}from"./Grid-DFtAJPnZ.js";import{c as s}from"./categoryItems-DE7HxImn.js";import{L as m}from"./ListItem-BMdkWFBB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DZ6CWLt4.js";import"./useId-B_5z_sER.js";import"./HardHat-B3jXWOVn.js";import"./Truck-D3p21TI9.js";import"./TeddyBear-DR4858uD.js";import"./Buildings2-DUmQJdLd.js";import"./Button-C1dDhU4f.js";import"./button-BAeX-ygn.js";import"./use-merge-refs-PJHuZtY5.js";import"./lite-DaUVFjkg.js";import"./Input-CeOaqFsx.js";import"./input-Dh6CJXOW.js";import"./XMark-RzwOtF1Q.js";import"./Icon-DPTwfvyC.js";import"./Skeleton-DuOqXwDT.js";import"./Avatar-DcRqiXhT.js";import"./AvatarGroup-DAqs7ZMl.js";import"./Badge-FbSzRhwU.js";import"./Heading-BAduz1Vr.js";import"./useHighlightedText-CniNcpSk.js";import"./ChevronUp-ceXuKviy.js";import"./ChevronDown-B-wfcPIe.js";import"./ChevronRight-BBMrC_JJ.js";const A={title:"Page/Grid",component:a,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:e.jsx(e.Fragment,{children:s?.map(t=>o.createElement(m,{...t,key:t?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:e.jsx(e.Fragment,{children:s?.map(t=>o.createElement(m,{...t,title:{children:t.title,size:"md",weight:"bold"},variant:"subtle",key:t?.href,linkIcon:!0}))})}},i={args:{cols:4,size:"sm",children:e.jsx(e.Fragment,{children:s?.map(t=>o.createElement(m,{...t,title:t.title,variant:"subtle",key:t?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
