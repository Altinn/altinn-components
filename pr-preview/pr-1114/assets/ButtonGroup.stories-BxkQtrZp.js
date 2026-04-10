import{j as t}from"./iframe-BmFIVBn_.js";import{S as c}from"./SearchField-BQQnPaDG.js";import{B as n}from"./Button-qEoy6ct0.js";import{B as o}from"./ButtonGroup-DOYzKGQP.js";import{B as a}from"./ButtonGroupDivider-J3W78A7-.js";import{S as p}from"./XMark-DPeWQ31a.js";import{S as B}from"./ChevronUpDown-iLgQoNlh.js";import{S as d}from"./Plus-DVwzyLY6.js";import{S as m}from"./Bookmark-Bo5gTdE7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-3BUTcXKg.js";import"./MagnifyingGlass-B0C_9vni.js";import"./useId-ClegSKnE.js";import"./FieldBase-Cx6yKeh2.js";import"./Typography-CMiy0gec.js";import"./useHighlightedText-Dq-XqtYP.js";import"./Skeleton-DRn19mA6.js";import"./Label-D7uBca_a.js";import"./index-32OlLxJ9.js";import"./use-merge-refs-C8jIJdDy.js";import"./lite-DaUVFjkg.js";import"./Input-D2BG68i3.js";import"./input-DVOXybW4.js";import"./MenuListItem-INuSyNfv.js";import"./MenuListHeading-D4ZyNWhk.js";import"./MenuItem-BvPBRlig.js";import"./ItemMedia-CCYQNyqL.js";import"./Avatar-Zvdkk7EN.js";import"./AvatarGroup-DqX7R4kJ.js";import"./Icon-zZDqlwOf.js";import"./Checkmark-DWNi5SDl.js";import"./Heading-D2Zb4ZMb.js";import"./ItemControls-B2xjI1HN.js";import"./ChevronRight-DcRWf4tm.js";import"./Badge-DoiHwmxA.js";import"./useMenu-BRAeQdeQ.js";import"./InformationSquare-Ct2wAfNF.js";import"./button-DKdxIprw.js";const Z={title:"Button/ButtonGroup",component:o,parameters:{},args:{children:"Button"}},r=()=>t.jsxs(o,{children:[t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"})]}),e=()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(n,{children:"Button 2"}),t.jsx(n,{children:"Button 3"})]}),u=()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(a,{}),t.jsx(n,{children:"Button 2"}),t.jsx(a,{}),t.jsx(n,{children:"Button 3"})]}),s=()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(a,{}),t.jsx(n,{children:t.jsx(p,{})})]}),i=()=>t.jsxs(o,{size:"xs",children:[t.jsxs(n,{children:[t.jsx("span",{children:"Menu"}),t.jsx(B,{})]}),t.jsx(c,{placeholder:"Search"}),t.jsxs(o,{connected:!0,variant:"tinted",children:[t.jsx(n,{variant:"tinted",children:"Filter"}),t.jsx(a,{variant:"tinted"}),t.jsx(n,{variant:"tinted",children:t.jsx(p,{})})]}),t.jsxs(n,{variant:"outline",children:[t.jsx(d,{}),t.jsx("span",{children:"Add"})]}),t.jsxs(n,{variant:"ghost",children:[t.jsx(m,{}),t.jsx("span",{children:"Save"})]})]});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};const $=["Default","Connected","WithDivider","ComboButton","Toolbar"];export{s as ComboButton,e as Connected,r as Default,i as Toolbar,u as WithDivider,$ as __namedExportsOrder,Z as default};
