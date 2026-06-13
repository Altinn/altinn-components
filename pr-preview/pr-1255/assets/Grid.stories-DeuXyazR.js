import{a7 as t,aa as a}from"./iframe-CTaNoWWa.js";import{G as m}from"./Grid-HPqq369u.js";import{c as i}from"./categoryItems-DfFCQ7QC.js";import{L as o}from"./ListItem-bITmjQKl.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-CXFmG4Ix.js";import"./Truck-CNHXd_Wi.js";import"./TeddyBear-SjB12Uei.js";import"./Buildings2-Dagpcldt.js";import"./Input-CTz4y9O9.js";import"./Avatar-Jcwep2-d.js";import"./AvatarGroup-BYP40V--.js";import"./Badge-Dtect8U8.js";import"./Tooltip-ClBwCS6W.js";import"./Heading-C1mUjHlh.js";import"./useHighlightedText-B1ZF3HFO.js";import"./ChevronUp-0PuCoJui.js";import"./ChevronDown-BHW7W_eE.js";import"./ChevronRight-CohjqIQG.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    cols: 4,
    size: 'sm',
    children: <>
        {categoryItems?.map(item => <ListItem {...item as ListItemProps} title={item.title} variant="subtle" key={item?.href} linkIcon={true} />)}
      </>
  }
}`,...s.parameters?.docs?.source}}};const F=["Large","Small"];export{r as Large,s as Small,F as __namedExportsOrder,S as default};
