var B=Object.defineProperty;var r=(p,c)=>B(p,"name",{value:c,configurable:!0});import{a6 as t,c as n,T as d}from"./iframe-Cb83cNHz.js";import{S as m}from"./SearchField-HWu0obAx.js";import{B as o}from"./ButtonGroup-BwzWu-pA.js";import{B as a}from"./ButtonGroupDivider-C8hWvas3.js";import{S as l}from"./ChevronUpDown-BJhYzIIl.js";import{S as x}from"./Plus-DTEoGbp7.js";import{S as h}from"./Bookmark-CQ14dnwq.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-C02McN1l.js";import"./MenuListItem-Ddq1rF2u.js";import"./MenuListDivider-CU0QYw1K.js";import"./MenuItem-D8XMh2RI.js";import"./CheckboxUncheckedIcon-DNQ5ph0B.js";import"./RadioUncheckedIcon-CIyf3y8X.js";import"./ItemMedia-DqOX_qxk.js";import"./Avatar-CO1wzsxc.js";import"./AvatarGroup-DvuSBfuR.js";import"./ItemLabel-BEqC8Tjb.js";import"./Heading-I2bz7uBQ.js";import"./useHighlightedText-DXF5vSCe.js";import"./ItemControls-B2ksNOht.js";import"./Badge-DGYSahl0.js";import"./Tooltip-Bacli5fs.js";import"./ChevronRight-C-6CVVq7.js";import"./FieldBase-DBBKjPwf.js";import"./Typography-BPADIB9F.js";import"./Field-SexvxzIl.js";import"./Label-CzmEce_d.js";import"./Input-DdatSh7d.js";import"./useMenu-D3abljbA.js";import"./InformationSquare-BiO92rri.js";const Q={title:"Button/ButtonGroup",component:o,parameters:{},args:{children:"Button"}},e=r(()=>t.jsxs(o,{children:[t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"})]}),"Default"),u=r(()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(n,{children:"Button 2"}),t.jsx(n,{children:"Button 3"})]}),"Connected"),s=r(()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(a,{}),t.jsx(n,{children:"Button 2"}),t.jsx(a,{}),t.jsx(n,{children:"Button 3"})]}),"WithDivider"),i=r(()=>t.jsxs(o,{size:"xs",children:[t.jsxs(n,{children:[t.jsx("span",{children:"Menu"}),t.jsx(l,{})]}),t.jsx(m,{placeholder:"Search"}),t.jsxs(o,{connected:!0,variant:"tinted",children:[t.jsx(n,{variant:"tinted",children:"Filter"}),t.jsx(a,{variant:"tinted"}),t.jsx(n,{variant:"tinted",children:t.jsx(d,{})})]}),t.jsxs(n,{variant:"outline",children:[t.jsx(x,{}),t.jsx("span",{children:"Add"})]}),t.jsxs(n,{variant:"ghost",children:[t.jsx(h,{}),t.jsx("span",{children:"Save"})]})]}),"Toolbar"),V=["Default","Connected","WithDivider","Toolbar"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};export{u as Connected,e as Default,i as Toolbar,s as WithDivider,V as __namedExportsOrder,Q as default};
