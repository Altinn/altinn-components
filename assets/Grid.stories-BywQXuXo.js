import{a7 as t,aa as a}from"./iframe-BhbNl8M-.js";import{G as m}from"./Grid-DMuBi__v.js";import{c as i}from"./categoryItems-Cd8vm0rQ.js";import{L as o}from"./ListItem-BZwC__IQ.js";import"./preload-helper-Cc2_yIPf.js";import"./HardHat-SDvNzD0E.js";import"./Truck-DcApN0Av.js";import"./TeddyBear-DGOfjC8q.js";import"./Buildings2-4YKnHmoY.js";import"./Input-jGspNcB3.js";import"./Avatar-BNyDKZi7.js";import"./AvatarGroup-B4pMcHMh.js";import"./Badge-np8uN8Yi.js";import"./Tooltip-8dIP2lk7.js";import"./Heading-Cykhux0L.js";import"./useHighlightedText-LhTntwcL.js";import"./ChevronUp-Dq4__2Sc.js";import"./ChevronDown-FDOS9kby.js";import"./ChevronRight-DG59p-Nv.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
