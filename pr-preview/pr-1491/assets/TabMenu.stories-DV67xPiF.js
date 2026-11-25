var d=Object.defineProperty;var c=(r,e)=>d(r,"name",{value:e,configurable:!0});import{a6 as t}from"./iframe-CZm9Z2L_.js";import{M as p}from"./MenuItem-BBEZ09Ze.js";import{S as u}from"./MenuGrid-lFBl4Ujw.js";import{S as l}from"./MenuHamburger-DLVH7hi6.js";import"./preload-helper-Cc2_yIPf.js";import"./CheckboxUncheckedIcon-B2FVZ7uO.js";import"./RadioUncheckedIcon-BajGCIeL.js";import"./ItemMedia-CpjA7nnT.js";import"./Avatar-BfR_UP2W.js";import"./AvatarGroup-z1q2Yw0e.js";import"./ItemLabel-B3mLAUUV.js";import"./Heading-CGvkj5VV.js";import"./useHighlightedText-0BBntNc4.js";import"./ItemControls-1WPti-Pt.js";import"./Badge-DcBwCaoO.js";import"./Tooltip-CnehfAFo.js";import"./ChevronRight-MmDri0bt.js";const g="_menu_1k5u6_1",_="_item_1k5u6_28",k="_link_1k5u6_41",m={menu:g,item:_,link:k},x=c(({items:r=[],variant:e="default",size:n="sm"})=>t.jsx("ul",{className:m.menu,"data-variant":e,children:r?.map(i=>t.jsx("li",{className:m.item,"data-selected":i.selected,children:t.jsx(p,{...i,className:m.link,variant:e,size:n})},i.id))}),"TabMenu"),R={title:"Menu/TabMenu",component:x,parameters:{},decorators:[(r,{args:e})=>{const n={backgroundColor:e?.variant==="tinted"?"var(--ds-color-background-tinted)":"",padding:".5em"};return t.jsx("div",{style:n,children:t.jsx(r,{})})}],args:{variant:"default",items:[{id:"1",icon:u,title:"Tab 1"},{id:"2",icon:l,title:"Tab 2",selected:!0}]}},s={args:{size:"lg"}},a={args:{variant:"tinted",size:"md"}},o={args:{size:"sm"}},q=["Large","MediumTinted","Small"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
