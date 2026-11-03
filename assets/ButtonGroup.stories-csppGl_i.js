var B=Object.defineProperty;var r=(p,c)=>B(p,"name",{value:c,configurable:!0});import{a5 as t,b as n,Q as d}from"./iframe-C2TXN9Gt.js";import{S as m}from"./SearchField-BhmsKdsU.js";import{B as o}from"./ButtonGroup-BxGjQybR.js";import{B as a}from"./ButtonGroupDivider-CvcVcX9T.js";import{S as l}from"./ChevronUpDown-B3bkzlBg.js";import{S as x}from"./Plus-B0fUlCfQ.js";import{S as h}from"./Bookmark-CvOGkY20.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-yE6CRZNo.js";import"./MenuListItem-BZm8a22V.js";import"./MenuListHeading-KNqUpgh4.js";import"./MenuItem-fN7KVjMo.js";import"./CheckboxUncheckedIcon-DbFdcG4a.js";import"./RadioUncheckedIcon-BGT6n-0U.js";import"./ItemMedia-DvL0nIvI.js";import"./Avatar-FtVJWfDO.js";import"./AvatarGroup-Dp8bZnxk.js";import"./ItemLabel-zq6K58HK.js";import"./Heading-DUZOSHF_.js";import"./useHighlightedText-rpsh5ryi.js";import"./ItemControls-BNQjxOXY.js";import"./Badge-BBkduo-x.js";import"./Tooltip-DGaFfrCO.js";import"./ChevronRight-B3qMZH3P.js";import"./FieldBase-RJLhkwbG.js";import"./Typography-DMeULRXh.js";import"./Field-B9ILzcp7.js";import"./Label-C63o_NPU.js";import"./Input-DCxTW5af.js";import"./useMenu-PLj8_L9k.js";import"./MenuListDivider-DUsmtn09.js";import"./InformationSquare-CbcqUQld.js";const V={title:"Button/ButtonGroup",component:o,parameters:{},args:{children:"Button"}},e=r(()=>t.jsxs(o,{children:[t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"})]}),"Default"),u=r(()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(n,{children:"Button 2"}),t.jsx(n,{children:"Button 3"})]}),"Connected"),s=r(()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(a,{}),t.jsx(n,{children:"Button 2"}),t.jsx(a,{}),t.jsx(n,{children:"Button 3"})]}),"WithDivider"),i=r(()=>t.jsxs(o,{size:"xs",children:[t.jsxs(n,{children:[t.jsx("span",{children:"Menu"}),t.jsx(l,{})]}),t.jsx(m,{placeholder:"Search"}),t.jsxs(o,{connected:!0,variant:"tinted",children:[t.jsx(n,{variant:"tinted",children:"Filter"}),t.jsx(a,{variant:"tinted"}),t.jsx(n,{variant:"tinted",children:t.jsx(d,{})})]}),t.jsxs(n,{variant:"outline",children:[t.jsx(x,{}),t.jsx("span",{children:"Add"})]}),t.jsxs(n,{variant:"ghost",children:[t.jsx(h,{}),t.jsx("span",{children:"Save"})]})]}),"Toolbar"),Y=["Default","Connected","WithDivider","Toolbar"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  return <ButtonGroup>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </ButtonGroup>;
}`,...e.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <ButtonGroup connected>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>;
}`,...u.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <ButtonGroup connected>
      <Button>Button 1</Button>
      <ButtonGroupDivider />
      <Button>Button 2</Button>
      <ButtonGroupDivider />
      <Button>Button 3</Button>
    </ButtonGroup>;
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <ButtonGroup size="xs">
      <Button>
        <span>Menu</span>
        <ChevronUpDownIcon />
      </Button>
      <SearchField placeholder="Search" />
      <ButtonGroup connected variant="tinted">
        <Button variant="tinted">Filter</Button>
        <ButtonGroupDivider variant="tinted" />
        <Button variant="tinted">
          <XMarkIcon />
        </Button>
      </ButtonGroup>
      <Button variant="outline">
        <PlusIcon />
        <span>Add</span>
      </Button>
      <Button variant="ghost">
        <BookmarkIcon />
        <span>Save</span>
      </Button>
    </ButtonGroup>;
}`,...i.parameters?.docs?.source}}};export{u as Connected,e as Default,i as Toolbar,s as WithDivider,Y as __namedExportsOrder,V as default};
