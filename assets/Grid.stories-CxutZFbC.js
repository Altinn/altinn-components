import{a7 as t,aa as a}from"./iframe-CD11FhkO.js";import{G as m}from"./Grid-Dd7sRVt2.js";import{c as i}from"./categoryItems-eun30YeS.js";import{L as o}from"./ListItem-BwiGPcXr.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-DI8EeEBl.js";import"./Truck-EN1JHF6F.js";import"./TeddyBear-BwRzIP3t.js";import"./Buildings2-OONJku9z.js";import"./Input-By1HeiMt.js";import"./Avatar-DnWg8nkP.js";import"./AvatarGroup-D_FMhzL-.js";import"./Badge-C4mu-w43.js";import"./Tooltip-DHKVNtVP.js";import"./Heading-DRFiIxuE.js";import"./useHighlightedText-BLIWo84c.js";import"./ChevronUp-BuZXJZ6x.js";import"./ChevronDown-Z-rCEWMI.js";import"./ChevronRight-DorAbKkm.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
