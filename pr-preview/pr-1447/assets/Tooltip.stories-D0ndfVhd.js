var a=Object.defineProperty;var r=(i,s)=>a(i,"name",{value:s,configurable:!0});import{a5 as t,b as n}from"./iframe-zDfzPjQ-.js";import{T as e}from"./Tooltip-B0sYZQl4.js";import{B as u}from"./ButtonGroup-DS66Ru9T.js";import{S as p}from"./MenuElipsisHorizontal-BZuKIlkb.js";import"./preload-helper-Cc2_yIPf.js";const v={title:"Next/Tooltip",component:e,tags:["autodocs"],parameters:{},args:{}},o=r(()=>t.jsxs(u,{size:"xs",children:[t.jsx(n,{variant:"outline",children:"Edit"}),t.jsx(e,{content:"Flere valg",children:t.jsx(n,{rounded:!0,icon:!0,variant:"tertiary",children:t.jsx(p,{})})})]}),"ButtonTooltip"),T=["ButtonTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <ButtonGroup size="xs">
      <Button variant="outline">Edit</Button>
      <Tooltip content="Flere valg">
        <Button rounded icon variant="tertiary">
          <MenuElipsisHorizontalIcon />
        </Button>
      </Tooltip>
    </ButtonGroup>;
}`,...o.parameters?.docs?.source}}};export{o as ButtonTooltip,T as __namedExportsOrder,v as default};
