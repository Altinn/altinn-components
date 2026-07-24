import{a7 as t,aa as a}from"./iframe-Byxtd80g.js";import{G as m}from"./Grid-B5LIOEDZ.js";import{c as i}from"./categoryItems-Vo1f-LFK.js";import{L as o}from"./ListItem-NChXZGPS.js";import"./preload-helper-PPVm8Dsz.js";import"./HardHat-DML6-y4X.js";import"./Truck-9XUy-KPS.js";import"./TeddyBear-yQwUnbIs.js";import"./Buildings2-DE1ScjU0.js";import"./Input-De6ZM0cy.js";import"./Avatar-DhukG_GJ.js";import"./AvatarGroup-CWET-veu.js";import"./Badge-Cs7_cxSC.js";import"./Tooltip-9Wvrat9n.js";import"./Heading-MBvMqbLo.js";import"./useHighlightedText-Cf3y_8YK.js";import"./ChevronUp-DVYZxjEC.js";import"./ChevronDown-Bl8PHeKm.js";import"./ChevronRight-Cr__dFRw.js";const S={title:"Page/Grid",component:m,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,key:e?.href,linkIcon:!0}))})}},r={args:{cols:3,size:"lg",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:{children:e.title,size:"md",weight:"bold"},variant:"subtle",key:e?.href,linkIcon:!0}))})}},s={args:{cols:4,size:"sm",children:t.jsx(t.Fragment,{children:i?.map(e=>a.createElement(o,{...e,title:e.title,variant:"subtle",key:e?.href,linkIcon:!0}))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
