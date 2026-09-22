import{a7 as t,aa as a}from"./iframe-COBbWeA3.js";import{G as m}from"./Grid-BuPjxH2L.js";import{c as i}from"./categoryItems-Bf6E6aQD.js";import{L as o}from"./ListItem-CFne46Z7.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-C0LOBfeB.js";import"./Truck-B9RXoOnh.js";import"./TeddyBear-DUYyvgMk.js";import"./Buildings2-BdJoNvxN.js";import"./Input-BuLWJ9G8.js";import"./Avatar-DxGMGD7I.js";import"./AvatarGroup-AOdZQtKF.js";import"./Badge-0q-IE2XW.js";import"./Tooltip-DupjxGOM.js";import"./Heading-Cmg-mUrR.js";import"./useHighlightedText-CaUkEEvw.js";import"./ChevronUp-BDeeV8M4.js";import"./ChevronDown-DuT6TpEz.js";import"./ChevronRight-gAwtmJAo.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
