import{a7 as t,c as n,T as c}from"./iframe-Ci8DJ-6R.js";import{S as p}from"./SearchField-BI6hQSM3.js";import{B as o}from"./ButtonGroup-BYverAEg.js";import{B as a}from"./ButtonGroupDivider-CbGS_QDF.js";import{S as B}from"./ChevronUpDown-B2xWlDPi.js";import{S as d}from"./Plus-5W3QRt0z.js";import{S as m}from"./Bookmark-BWpxLimZ.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass--VnpSKzI.js";import"./FieldBase-CJmJ_FUR.js";import"./Typography-C-nn41yV.js";import"./useHighlightedText-CMND7wU2.js";import"./Field-C7mGyyvw.js";import"./Label-BZiKx0Le.js";import"./Input-DWxDHqSK.js";import"./useMenu-7RMszhcf.js";import"./MenuListItem-Cpkt8LLi.js";import"./MenuListHeading-CkHpUapY.js";import"./MenuItem-CLCRatEV.js";import"./ItemMedia-D2PQb4gS.js";import"./Avatar-D3AIreGS.js";import"./AvatarGroup-D3N3OV8x.js";import"./Checkmark-V7YKXO-0.js";import"./ItemLabel-D6hw0WzI.js";import"./Heading-CWZTf72r.js";import"./ItemControls-DXMoT8B2.js";import"./Badge-CVr9GptX.js";import"./Tooltip-CGvNbStB.js";import"./ChevronRight-BEnuMmPo.js";import"./index-dwvgmSh8.js";import"./InformationSquare-CEM0wkOI.js";const J={title:"Button/ButtonGroup",component:o,parameters:{},args:{children:"Button"}},r=()=>t.jsxs(o,{children:[t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"})]}),e=()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(n,{children:"Button 2"}),t.jsx(n,{children:"Button 3"})]}),u=()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(a,{}),t.jsx(n,{children:"Button 2"}),t.jsx(a,{}),t.jsx(n,{children:"Button 3"})]}),s=()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(a,{}),t.jsx(n,{children:t.jsx(c,{})})]}),i=()=>t.jsxs(o,{size:"xs",children:[t.jsxs(n,{children:[t.jsx("span",{children:"Menu"}),t.jsx(B,{})]}),t.jsx(p,{placeholder:"Search"}),t.jsxs(o,{connected:!0,variant:"tinted",children:[t.jsx(n,{variant:"tinted",children:"Filter"}),t.jsx(a,{variant:"tinted"}),t.jsx(n,{variant:"tinted",children:t.jsx(c,{})})]}),t.jsxs(n,{variant:"outline",children:[t.jsx(d,{}),t.jsx("span",{children:"Add"})]}),t.jsxs(n,{variant:"ghost",children:[t.jsx(m,{}),t.jsx("span",{children:"Save"})]})]});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <ButtonGroup>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </ButtonGroup>;
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  return <ButtonGroup connected>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>;
}`,...e.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <ButtonGroup connected>
      <Button>Button 1</Button>
      <ButtonGroupDivider />
      <Button>Button 2</Button>
      <ButtonGroupDivider />
      <Button>Button 3</Button>
    </ButtonGroup>;
}`,...u.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <ButtonGroup connected>
      <Button>Button 1</Button>
      <ButtonGroupDivider />
      <Button>
        <XMarkIcon />
      </Button>
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
}`,...i.parameters?.docs?.source}}};const K=["Default","Connected","WithDivider","ComboButton","Toolbar"];export{s as ComboButton,e as Connected,r as Default,i as Toolbar,u as WithDivider,K as __namedExportsOrder,J as default};
