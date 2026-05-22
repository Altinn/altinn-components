import{j as t}from"./iframe-D-ID03Ik.js";import{S as p}from"./SearchField-D--HBqax.js";import{B as n}from"./Button-CO1zFGa4.js";import{B as o}from"./ButtonGroup-vd8KP0y5.js";import{B as a}from"./ButtonGroupDivider-DHMyJatP.js";import{S as c}from"./XMark-DAr8sgUQ.js";import{S as B}from"./ChevronUpDown-BHEUhOzV.js";import{S as d}from"./Plus-DTGwq1FZ.js";import{S as m}from"./Bookmark-DSqUk3x4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DpFyEq-2.js";import"./MagnifyingGlass-DWkFIUI5.js";import"./useId-DxZoCrQU.js";import"./FieldBase-DmpPz6xV.js";import"./Typography-COzCTzPW.js";import"./useHighlightedText-Db1ksA0v.js";import"./Skeleton--3bwKnDN.js";import"./Label-DsF9mxAr.js";import"./tooltip-CH7-mov_.js";import"./Input-BflTpPuJ.js";import"./MenuListItem-Ba7wKRG_.js";import"./MenuListHeading-D9YSE4Po.js";import"./MenuItem-Czug_8v9.js";import"./ItemMedia-BTzF80jS.js";import"./Avatar-CUF81_T9.js";import"./AvatarGroup-ZBmyex5T.js";import"./Icon-CER3YkDn.js";import"./Checkmark-WbwQiDGB.js";import"./Heading-BD0s_Obx.js";import"./ItemControls-Bpd8WrWV.js";import"./ChevronRight-CxM-6AgC.js";import"./Badge-BH60Kfyy.js";import"./Tooltip-DuVvkEGb.js";import"./useMenu-OLkOIIh8.js";import"./index-B-QoLJUi.js";import"./InformationSquare-BLDef__3.js";const V={title:"Button/ButtonGroup",component:o,parameters:{},args:{children:"Button"}},r=()=>t.jsxs(o,{children:[t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"})]}),e=()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(n,{children:"Button 2"}),t.jsx(n,{children:"Button 3"})]}),u=()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(a,{}),t.jsx(n,{children:"Button 2"}),t.jsx(a,{}),t.jsx(n,{children:"Button 3"})]}),s=()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(a,{}),t.jsx(n,{children:t.jsx(c,{})})]}),i=()=>t.jsxs(o,{size:"xs",children:[t.jsxs(n,{children:[t.jsx("span",{children:"Menu"}),t.jsx(B,{})]}),t.jsx(p,{placeholder:"Search"}),t.jsxs(o,{connected:!0,variant:"tinted",children:[t.jsx(n,{variant:"tinted",children:"Filter"}),t.jsx(a,{variant:"tinted"}),t.jsx(n,{variant:"tinted",children:t.jsx(c,{})})]}),t.jsxs(n,{variant:"outline",children:[t.jsx(d,{}),t.jsx("span",{children:"Add"})]}),t.jsxs(n,{variant:"ghost",children:[t.jsx(m,{}),t.jsx("span",{children:"Save"})]})]});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};const Y=["Default","Connected","WithDivider","ComboButton","Toolbar"];export{s as ComboButton,e as Connected,r as Default,i as Toolbar,u as WithDivider,Y as __namedExportsOrder,V as default};
