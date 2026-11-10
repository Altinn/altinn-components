var d=Object.defineProperty;var c=(r,e)=>d(r,"name",{value:e,configurable:!0});import{a6 as t}from"./iframe-DV5agHf5.js";import{M as p}from"./MenuItem-0aaQQHkL.js";import{S as u}from"./MenuGrid-BRhDAza_.js";import{S as l}from"./MenuHamburger-sep3wvC_.js";import"./preload-helper-Cc2_yIPf.js";import"./CheckboxUncheckedIcon-B-IeYfRG.js";import"./RadioUncheckedIcon-DnY8WA8D.js";import"./ItemMedia-K3xyGGVD.js";import"./Avatar-BEN4tDyT.js";import"./AvatarGroup-DhvypAS5.js";import"./ItemLabel-DMcOnD30.js";import"./Heading-Ct7f5Viq.js";import"./useHighlightedText-D74GV1fZ.js";import"./ItemControls-Dpr02RM6.js";import"./Badge-Pb0_Mmmt.js";import"./Tooltip-BJCyjCNp.js";import"./ChevronRight-DdV1IRY7.js";const g="_menu_1k5u6_1",_="_item_1k5u6_28",k="_link_1k5u6_41",m={menu:g,item:_,link:k},x=c(({items:r=[],variant:e="default",size:n="sm"})=>t.jsx("ul",{className:m.menu,"data-variant":e,children:r?.map(i=>t.jsx("li",{className:m.item,"data-selected":i.selected,children:t.jsx(p,{...i,className:m.link,variant:e,size:n})},i.id))}),"TabMenu"),R={title:"Menu/TabMenu",component:x,parameters:{},decorators:[(r,{args:e})=>{const n={backgroundColor:e?.variant==="tinted"?"var(--ds-color-background-tinted)":"",padding:".5em"};return t.jsx("div",{style:n,children:t.jsx(r,{})})}],args:{variant:"default",items:[{id:"1",icon:u,title:"Tab 1"},{id:"2",icon:l,title:"Tab 2",selected:!0}]}},s={args:{size:"lg"}},a={args:{variant:"tinted",size:"md"}},o={args:{size:"sm"}},q=["Large","MediumTinted","Small"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'tinted',
    size: 'md'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...o.parameters?.docs?.source}}};export{s as Large,a as MediumTinted,o as Small,q as __namedExportsOrder,R as default};
