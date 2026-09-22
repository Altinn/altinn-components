import{a7 as t,c as n,T as c}from"./iframe-Ca4u80-y.js";import{S as p}from"./SearchField-VyNSBwjR.js";import{B as o}from"./ButtonGroup-DxWQp11R.js";import{B as a}from"./ButtonGroupDivider-lZfdxe4t.js";import{S as B}from"./ChevronUpDown-D7s4rO6j.js";import{S as d}from"./Plus-Oh3Xr98D.js";import{S as m}from"./Bookmark-CYSv2imE.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-ePzGqa9d.js";import"./FieldBase-BaoqxAAt.js";import"./Typography-DWDEZq_R.js";import"./useHighlightedText-DqjIK10c.js";import"./Field-CaS5A3Xo.js";import"./Label-dGJaogAG.js";import"./Input-BzcsSDVe.js";import"./useMenu-D83_Vp30.js";import"./MenuListItem-MwOjEGoN.js";import"./MenuListDivider-R2CXinbT.js";import"./MenuListHeading-B4K-woqM.js";import"./MenuItem-BYM3QzRG.js";import"./ItemMedia-33czU3Hl.js";import"./Avatar-D0Cbhk4B.js";import"./AvatarGroup-ChCS9Nw5.js";import"./Checkmark-DdyDkuo2.js";import"./ItemLabel-DrPryDvn.js";import"./Heading-DWBFau_k.js";import"./ItemControls-EuOl9yJJ.js";import"./Badge-nrZ8AGCl.js";import"./Tooltip-BqzPqZJ1.js";import"./ChevronRight-eVASrmJg.js";import"./InformationSquare-C5WU0eyN.js";const J={title:"Button/ButtonGroup",component:o,parameters:{},args:{children:"Button"}},r=()=>t.jsxs(o,{children:[t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"})]}),e=()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(n,{children:"Button 2"}),t.jsx(n,{children:"Button 3"})]}),u=()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(a,{}),t.jsx(n,{children:"Button 2"}),t.jsx(a,{}),t.jsx(n,{children:"Button 3"})]}),s=()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(a,{}),t.jsx(n,{children:t.jsx(c,{})})]}),i=()=>t.jsxs(o,{size:"xs",children:[t.jsxs(n,{children:[t.jsx("span",{children:"Menu"}),t.jsx(B,{})]}),t.jsx(p,{placeholder:"Search"}),t.jsxs(o,{connected:!0,variant:"tinted",children:[t.jsx(n,{variant:"tinted",children:"Filter"}),t.jsx(a,{variant:"tinted"}),t.jsx(n,{variant:"tinted",children:t.jsx(c,{})})]}),t.jsxs(n,{variant:"outline",children:[t.jsx(d,{}),t.jsx("span",{children:"Add"})]}),t.jsxs(n,{variant:"ghost",children:[t.jsx(m,{}),t.jsx("span",{children:"Save"})]})]});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
