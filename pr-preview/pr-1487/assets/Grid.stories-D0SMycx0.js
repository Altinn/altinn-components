import{a6 as t,a9 as i}from"./iframe-DwHkmT0f.js";import{G as m}from"./Grid-CuRzkwW0.js";import{c as a}from"./categoryItems-BzjCDHse.js";import{L as o}from"./ListItem-Bk8TBf_Z.js";import"./preload-helper-Cc2_yIPf.js";import"./HardHat-BiWN4GsB.js";import"./Truck-uWuwqn1C.js";import"./TeddyBear-Cg0zvzih.js";import"./Buildings2-CFScrem9.js";import"./Input-D6xvIcky.js";import"./Avatar-S5z4qvLu.js";import"./AvatarGroup-Cl1VUjUq.js";import"./Badge-na_CnfyR.js";import"./Tooltip-DjcFah2J.js";import"./Heading-FTp623yO.js";import"./useHighlightedText-DRj0X6ck.js";import"./ChevronUp-CXBen__p.js";import"./ChevronDown-DRHOaSZs.js";import"./ChevronRight-B3vSh-CA.js";const S={title:"Page/Grid",component:m,tags:["autodocs"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:a?.map(e=>i.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:a?.map(e=>i.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:a?.map(e=>i.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}},F=["Large","Small"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};export{r as Large,s as Small,F as __namedExportsOrder,S as default};
