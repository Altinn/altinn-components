import{a7 as t,aa as a}from"./iframe-CSiNS2_t.js";import{G as m}from"./Grid-fwNkuWJn.js";import{c as i}from"./categoryItems-BR5FTSAK.js";import{L as o}from"./ListItem-B3moosZM.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-yESApiQu.js";import"./Truck-DiBOlXLI.js";import"./TeddyBear-Ckw3GDRn.js";import"./Buildings2-Bb2Esj9m.js";import"./Input-BUqwhKEV.js";import"./Avatar-BZjVPcts.js";import"./AvatarGroup-By7Dr3dC.js";import"./Badge-CCAu-QUf.js";import"./Tooltip-CTn3iU7H.js";import"./Heading-BPvQUGVy.js";import"./useHighlightedText-Cb4_TuQn.js";import"./ChevronUp-DkTPAx2G.js";import"./ChevronDown-Cyaskzrl.js";import"./ChevronRight-dChxZgZA.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
