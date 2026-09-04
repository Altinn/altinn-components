import{a7 as t,c as n,T as c}from"./iframe-qmQCxFa-.js";import{S as p}from"./SearchField-yI2IHctk.js";import{B as o}from"./ButtonGroup-_CfbD1Th.js";import{B as a}from"./ButtonGroupDivider-Q5Oe8DbS.js";import{S as B}from"./ChevronUpDown-DgWKinzw.js";import{S as d}from"./Plus-CuimFGeS.js";import{S as m}from"./Bookmark-D42G2HHb.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-BEFsIwDK.js";import"./FieldBase-uaodyCSq.js";import"./Typography-CwhPNAxM.js";import"./useHighlightedText-DvW-80BF.js";import"./Field-CR7g45g-.js";import"./Label-p7H0Mohi.js";import"./Input-UWmslA08.js";import"./useMenu-BTzsKN7O.js";import"./MenuListItem-BJU-5Qr1.js";import"./MenuListDivider-lNR4js8T.js";import"./MenuListHeading-DI3xzslm.js";import"./MenuItem-BJ0MSgwv.js";import"./ItemMedia-Ch0GCbf9.js";import"./Avatar-GyPerWGw.js";import"./AvatarGroup-DMtwNmnR.js";import"./Checkmark-Dr10MfLv.js";import"./ItemLabel-DQygMXqb.js";import"./Heading-BfhEliS6.js";import"./ItemControls-BNv7LYwf.js";import"./Badge-B_bsLQj9.js";import"./Tooltip-B9panzD0.js";import"./ChevronRight-D4PJikp-.js";import"./InformationSquare-dfx4dBae.js";const J={title:"Button/ButtonGroup",component:o,parameters:{},args:{children:"Button"}},r=()=>t.jsxs(o,{children:[t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"})]}),e=()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(n,{children:"Button 2"}),t.jsx(n,{children:"Button 3"})]}),u=()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(a,{}),t.jsx(n,{children:"Button 2"}),t.jsx(a,{}),t.jsx(n,{children:"Button 3"})]}),s=()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(a,{}),t.jsx(n,{children:t.jsx(c,{})})]}),i=()=>t.jsxs(o,{size:"xs",children:[t.jsxs(n,{children:[t.jsx("span",{children:"Menu"}),t.jsx(B,{})]}),t.jsx(p,{placeholder:"Search"}),t.jsxs(o,{connected:!0,variant:"tinted",children:[t.jsx(n,{variant:"tinted",children:"Filter"}),t.jsx(a,{variant:"tinted"}),t.jsx(n,{variant:"tinted",children:t.jsx(c,{})})]}),t.jsxs(n,{variant:"outline",children:[t.jsx(d,{}),t.jsx("span",{children:"Add"})]}),t.jsxs(n,{variant:"ghost",children:[t.jsx(m,{}),t.jsx("span",{children:"Save"})]})]});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
