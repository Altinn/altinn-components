import{p as t}from"./iframe-WHERbRNQ.js";import{S as c}from"./SearchField-CjOGKjR9.js";import{B as n}from"./Button-DkTjWAj1.js";import{B as o}from"./ButtonGroup-BZN8TM8O.js";import{B as a}from"./ButtonGroupDivider-B8E39iWl.js";import{S as p}from"./XMark-5kXogJ_J.js";import{S as B}from"./ChevronUpDown-DVQYeyQk.js";import{S as d}from"./Plus-CNY0bkRi.js";import{S as m}from"./Bookmark-WSvH4AZu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CPQpJFkN.js";import"./MagnifyingGlass-DkwRxD0r.js";import"./useId-BfbJ7PbP.js";import"./FieldBase-9wEEVFHi.js";import"./Typography-CVWBmure.js";import"./useHighlightedText-CCsQk8zm.js";import"./Skeleton-rNcUZaAx.js";import"./Label-DoBAei1C.js";import"./tooltip-C7TGaz5I.js";import"./Input-D2AEap14.js";import"./useMenu-DdbFwnvU.js";import"./MenuListItem-Gq-dCZ2a.js";import"./MenuListHeading-B72ED6_O.js";import"./MenuItem-BN2QDxa4.js";import"./ItemMedia-CZ4j0uoG.js";import"./Avatar-BsRLrsxS.js";import"./AvatarGroup-Bo3l1p7S.js";import"./Icon-jpLauUO9.js";import"./Checkmark-DwlfhjiK.js";import"./ItemLabel-CGpASln7.js";import"./Heading-POmwd9W2.js";import"./ItemControls-CXMEe70O.js";import"./Badge-DPxfDcUM.js";import"./Tooltip-C3iERcDF.js";import"./ChevronRight-HD9xUhWG.js";import"./index-Cy4S4a6-.js";import"./InformationSquare-DqU7vShm.js";const Y={title:"Button/ButtonGroup",component:o,parameters:{},args:{children:"Button"}},r=()=>t.jsxs(o,{children:[t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"})]}),e=()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(n,{children:"Button 2"}),t.jsx(n,{children:"Button 3"})]}),u=()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(a,{}),t.jsx(n,{children:"Button 2"}),t.jsx(a,{}),t.jsx(n,{children:"Button 3"})]}),s=()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(a,{}),t.jsx(n,{children:t.jsx(p,{})})]}),i=()=>t.jsxs(o,{size:"xs",children:[t.jsxs(n,{children:[t.jsx("span",{children:"Menu"}),t.jsx(B,{})]}),t.jsx(c,{placeholder:"Search"}),t.jsxs(o,{connected:!0,variant:"tinted",children:[t.jsx(n,{variant:"tinted",children:"Filter"}),t.jsx(a,{variant:"tinted"}),t.jsx(n,{variant:"tinted",children:t.jsx(p,{})})]}),t.jsxs(n,{variant:"outline",children:[t.jsx(d,{}),t.jsx("span",{children:"Add"})]}),t.jsxs(n,{variant:"ghost",children:[t.jsx(m,{}),t.jsx("span",{children:"Save"})]})]});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
