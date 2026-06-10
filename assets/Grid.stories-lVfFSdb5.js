import{a7 as t,aa as a}from"./iframe-B8reGtNb.js";import{G as m}from"./Grid-DoueG1uo.js";import{c as i}from"./categoryItems-D9QFcpFb.js";import{L as o}from"./ListItem-_2ccN9iY.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-A-I9T2Ol.js";import"./Truck-Df-3kDUS.js";import"./TeddyBear-RU5slmET.js";import"./Buildings2-yXpbPS2f.js";import"./Input-DOKzz0Tj.js";import"./Avatar-DjLw-5ab.js";import"./AvatarGroup-CBquJS0s.js";import"./Badge-DzttLmt8.js";import"./Tooltip-fMVkBgtC.js";import"./Heading-Cybus3jr.js";import"./useHighlightedText-ZBcygk0-.js";import"./ChevronUp-B4Qw2TyU.js";import"./ChevronDown-Cin8-QCk.js";import"./ChevronRight-BRSkVVAW.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
