import{j as t}from"./iframe-CfpleAaJ.js";import{S as c}from"./SearchField-DaxLmgu-.js";import{B as n}from"./Button-DKJP6EaO.js";import{B as o}from"./ButtonGroup-BCc6e8WW.js";import{B as a}from"./ButtonGroupDivider-C4vvU_mH.js";import{S as p}from"./XMark-Mr05NtnF.js";import{S as B}from"./ChevronUpDown-Cbzggt2f.js";import{S as d}from"./Plus-Bt3Z18iu.js";import{S as m}from"./Bookmark-FXH6tBKj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C-ZlSrx2.js";import"./MagnifyingGlass-BxOwsnNq.js";import"./useId-CRfl8v3D.js";import"./FieldBase-CjTWVBCf.js";import"./Typography-KZreLO9a.js";import"./useHighlightedText-Cf92T70c.js";import"./Skeleton-mkQz_xZ6.js";import"./Label-BNnaJGt0.js";import"./index-CyGYnAy8.js";import"./use-merge-refs-0CqQhLRb.js";import"./lite-DaUVFjkg.js";import"./Input-B030prVc.js";import"./input-DZJGjPia.js";import"./MenuListItem-Brl922Zx.js";import"./MenuListHeading-BxaazMkW.js";import"./MenuItem-BvkuTBxq.js";import"./ItemMedia-BjhAIHdo.js";import"./Avatar-BBkC-qEC.js";import"./AvatarGroup-vSwCjNL5.js";import"./Icon-DFklvQ48.js";import"./Checkmark-CwtLsQnH.js";import"./Heading-SalYmhoh.js";import"./ChevronRight-F6vNJ-SN.js";import"./Badge-BZbseZdr.js";import"./useMenu-DmjfRwxC.js";import"./InformationSquare-H_9f907d.js";import"./button-bjClnooE.js";const Y={title:"Button/ButtonGroup",component:o,parameters:{},args:{children:"Button"}},r=()=>t.jsxs(o,{children:[t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"})]}),e=()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(n,{children:"Button 2"}),t.jsx(n,{children:"Button 3"})]}),u=()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(a,{}),t.jsx(n,{children:"Button 2"}),t.jsx(a,{}),t.jsx(n,{children:"Button 3"})]}),s=()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(a,{}),t.jsx(n,{children:t.jsx(p,{})})]}),i=()=>t.jsxs(o,{size:"xs",children:[t.jsxs(n,{children:[t.jsx("span",{children:"Menu"}),t.jsx(B,{})]}),t.jsx(c,{placeholder:"Search"}),t.jsxs(o,{connected:!0,variant:"tinted",children:[t.jsx(n,{variant:"tinted",children:"Filter"}),t.jsx(a,{variant:"tinted"}),t.jsx(n,{variant:"tinted",children:t.jsx(p,{})})]}),t.jsxs(n,{variant:"outline",children:[t.jsx(d,{}),t.jsx("span",{children:"Add"})]}),t.jsxs(n,{variant:"ghost",children:[t.jsx(m,{}),t.jsx("span",{children:"Save"})]})]});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};const Z=["Default","Connected","WithDivider","ComboButton","Toolbar"];export{s as ComboButton,e as Connected,r as Default,i as Toolbar,u as WithDivider,Z as __namedExportsOrder,Y as default};
