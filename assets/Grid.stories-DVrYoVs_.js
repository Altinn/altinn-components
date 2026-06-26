import{a7 as t,aa as a}from"./iframe-C2dzRmjh.js";import{G as m}from"./Grid-1vKAVQd_.js";import{c as i}from"./categoryItems-6u8GtyZU.js";import{L as o}from"./ListItem-bz9Nyb5P.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-CwJsKDIH.js";import"./Truck-BRoJ3NHS.js";import"./TeddyBear-AfG_EuW8.js";import"./Buildings2-CK7NFVn3.js";import"./Input-DA-lDvIm.js";import"./Avatar-JufbU_Wx.js";import"./AvatarGroup-Dco4ceHR.js";import"./Badge-BtitS9Rx.js";import"./Tooltip-yHxi1dML.js";import"./Heading-CfKKA19E.js";import"./useHighlightedText-DV4hS6Cx.js";import"./ChevronUp-DhNGyOn8.js";import"./ChevronDown-DT113Xv8.js";import"./ChevronRight-DtjNYNu3.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
