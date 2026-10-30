import{a5 as t,a8 as a}from"./iframe-CmcSEjvS.js";import{G as m}from"./Grid-CIcyE-eq.js";import{c as i}from"./categoryItems-C5bIUznL.js";import{L as o}from"./ListItem-CGdPgfN9.js";import"./preload-helper-Cc2_yIPf.js";import"./HardHat--Jkksx69.js";import"./Truck-CSuuh0C3.js";import"./TeddyBear-6cvqr_zk.js";import"./Buildings2-BSYY2HHr.js";import"./Input-C0nOO2ZR.js";import"./Avatar-e7KasoHp.js";import"./AvatarGroup-CK0XwNSh.js";import"./Badge-DDzGMVSy.js";import"./Tooltip-BzKHjYiv.js";import"./Heading-vmMoflPs.js";import"./useHighlightedText-DJAL4JcK.js";import"./ChevronUp-DVy7WPfM.js";import"./ChevronDown-CI4G7sPT.js";import"./ChevronRight-B5wtiA4y.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}},F=["Large","Small"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
