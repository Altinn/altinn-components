import{a7 as t,aa as a}from"./iframe-vkxhbe5D.js";import{G as m}from"./Grid-DwqsYF8w.js";import{c as i}from"./categoryItems-PkQz9oAd.js";import{L as o}from"./ListItem-CZ_cmVNu.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-BVBrloV0.js";import"./Truck-WsDrlW3I.js";import"./TeddyBear-DxCL01x-.js";import"./Buildings2-CK9mox5t.js";import"./Input-B9GDLkmV.js";import"./Avatar-DCCKPKpG.js";import"./AvatarGroup-73OlPczV.js";import"./Badge-B0jqz-MR.js";import"./Tooltip-BAvCNtSf.js";import"./Heading-BheO61Dl.js";import"./useHighlightedText-DzpG-WJS.js";import"./ChevronUp-BTS4WsVi.js";import"./ChevronDown-CQjb94KI.js";import"./ChevronRight-BjSUzT6t.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
