import{j as r,r as o}from"./iframe-V8BRfBgT.js";import{G as a}from"./Grid-C3wDmXPn.js";import{c as m}from"./categoryItems-DK0deZxJ.js";import{L as s}from"./ListItem-BYbxtLr3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dg3z2A9f.js";import"./useId-Cpax_hNq.js";import"./HardHat-dZ1MLc4e.js";import"./Truck-CteKzbUV.js";import"./TeddyBear-DRZxrpzJ.js";import"./Buildings2-jLJeRhKN.js";import"./Button-BlxzDMPI.js";import"./button-2-meUg78.js";import"./use-merge-refs--fAMpcSQ.js";import"./lite-DaUVFjkg.js";import"./Input-zOuJx9ZS.js";import"./input-1VpPOyjR.js";import"./XMark-C45HvrEl.js";import"./Icon-BWOTtVf8.js";import"./Skeleton-BQtaEJM-.js";import"./Avatar-BDDvrYzF.js";import"./AvatarGroup-KHWc8S2T.js";import"./Badge-Bf3suXAP.js";import"./Tooltip-D0XBkrvV.js";import"./floating-ui.dom-DCpi3RTt.js";import"./Heading-CGSCg4GY.js";import"./useHighlightedText-DnT87ATC.js";import"./ChevronUp-DYD-_Lcf.js";import"./ChevronDown-Dj082slW.js";import"./ChevronRight-Cz_uty1S.js";const C={title:"Page/Grid",component:a,tags:["autodocs","beta"],parameters:{},args:{as:"ul",children:r.jsx(r.Fragment,{children:m?.map(t=>o.createElement(s,{...t,key:t?.href,linkIcon:!0}))})}},e={args:{cols:3,size:"lg",children:r.jsx(r.Fragment,{children:m?.map(t=>o.createElement(s,{...t,title:{children:t.title,size:"md",weight:"bold"},variant:"subtle",key:t?.href,linkIcon:!0}))})}},i={args:{cols:4,size:"sm",children:r.jsx(r.Fragment,{children:m?.map(t=>o.createElement(s,{...t,title:t.title,variant:"subtle",key:t?.href,linkIcon:!0}))})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    cols: 4,
    size: 'sm',
    children: <>
        {categoryItems?.map(item => <ListItem {...item as ListItemProps} title={item.title} variant="subtle" key={item?.href} linkIcon={true} />)}
      </>
  }
}`,...i.parameters?.docs?.source}}};const D=["Large","Small"];export{e as Large,i as Small,D as __namedExportsOrder,C as default};
