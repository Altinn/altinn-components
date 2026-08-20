import{a7 as t,aa as a}from"./iframe-DklMp8b9.js";import{G as m}from"./Grid-C_CTqiUD.js";import{c as i}from"./categoryItems-Dlml7V0v.js";import{L as o}from"./ListItem-CrAQg8rM.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-5_71_Abu.js";import"./Truck-CU_b4mUr.js";import"./TeddyBear-sbHijtK0.js";import"./Buildings2-DnG6HWVX.js";import"./Input-DDvcPBDR.js";import"./Avatar-CX9IOnsl.js";import"./AvatarGroup-BeC5BXf9.js";import"./Badge-DxwSJzJK.js";import"./Tooltip-BmOBzKTd.js";import"./Heading-C5vDV6s5.js";import"./useHighlightedText-CQ5194gO.js";import"./ChevronUp-ImWxnNDU.js";import"./ChevronDown-C8-zew9t.js";import"./ChevronRight-D0aoAfw5.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
