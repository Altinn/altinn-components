import{a7 as t,aa as a}from"./iframe-DH0sUlof.js";import{G as m}from"./Grid-Cc6QinXc.js";import{c as i}from"./categoryItems-BNG2Chu2.js";import{L as o}from"./ListItem-B0cRuGOu.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-BGzZf3AN.js";import"./Truck-Xif_aOn-.js";import"./TeddyBear-Brm8rK4G.js";import"./Buildings2-C60OJ9SJ.js";import"./Input-CNoKo11u.js";import"./Avatar-FXELAR9V.js";import"./AvatarGroup-CNi2rl48.js";import"./Badge-DYSW2mf5.js";import"./Tooltip-2QW0kgPy.js";import"./Heading-CPu50xm5.js";import"./useHighlightedText-DycG_gS6.js";import"./ChevronUp-B3owS6FK.js";import"./ChevronDown-CrGho0Pn.js";import"./ChevronRight-CNDn15vN.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
