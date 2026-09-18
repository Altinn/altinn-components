import{a7 as t,aa as a}from"./iframe-CId_qj2z.js";import{G as m}from"./Grid-Dk6qiw_S.js";import{c as i}from"./categoryItems-Bj8_Mj7z.js";import{L as o}from"./ListItem-UVHT4kno.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-B4P1g2Ld.js";import"./Truck-BibHR-p3.js";import"./TeddyBear-C7519YFm.js";import"./Buildings2-D30IHXtp.js";import"./Input-qq9zM3Qu.js";import"./Avatar-qewy70Fx.js";import"./AvatarGroup-DDqOMRUz.js";import"./Badge-DHd56Np2.js";import"./Tooltip-B4yZ0kY7.js";import"./Heading-sNyVbkrk.js";import"./useHighlightedText-B-8pDdyK.js";import"./ChevronUp-7fsujl90.js";import"./ChevronDown-D4kQ2fb9.js";import"./ChevronRight-CD2F4Mmq.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
