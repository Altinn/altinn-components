import{a7 as t,c as n,T as c}from"./iframe-BtrieXtc.js";import{S as p}from"./SearchField-Du6Gz1k6.js";import{B as o}from"./ButtonGroup-CVtevVNY.js";import{B as a}from"./ButtonGroupDivider-DgYHqz8l.js";import{S as B}from"./ChevronUpDown-XBntiFIi.js";import{S as d}from"./Plus-AauV6il6.js";import{S as m}from"./Bookmark-6BWihtUE.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-C5aguymI.js";import"./FieldBase-CTDBNJ5K.js";import"./Typography-BRa08Jyj.js";import"./useHighlightedText-B6dVubhR.js";import"./Field-D8_JVLdM.js";import"./Label-ERyazbFa.js";import"./Input-BbNTIeCv.js";import"./useMenu-BNfzuibe.js";import"./MenuListItem-BMqPUKCV.js";import"./MenuListHeading-D0-5HT2_.js";import"./MenuItem-CHl6gjJ7.js";import"./ItemMedia-eBYq579p.js";import"./Avatar-CpJVuKGv.js";import"./AvatarGroup-B_fE5muE.js";import"./Checkmark-W3qwARKA.js";import"./ItemLabel-5cZaNnaj.js";import"./Heading-CdtnAJEW.js";import"./ItemControls-DyiOoqOz.js";import"./Badge-BaL1X3jx.js";import"./Tooltip-CavTLnec.js";import"./ChevronRight-DjbS-LPA.js";import"./index-DyGDkSgg.js";import"./InformationSquare-BnFcng2B.js";const J={title:"Button/ButtonGroup",component:o,parameters:{},args:{children:"Button"}},r=()=>t.jsxs(o,{children:[t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"})]}),e=()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(n,{children:"Button 2"}),t.jsx(n,{children:"Button 3"})]}),u=()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(a,{}),t.jsx(n,{children:"Button 2"}),t.jsx(a,{}),t.jsx(n,{children:"Button 3"})]}),s=()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(a,{}),t.jsx(n,{children:t.jsx(c,{})})]}),i=()=>t.jsxs(o,{size:"xs",children:[t.jsxs(n,{children:[t.jsx("span",{children:"Menu"}),t.jsx(B,{})]}),t.jsx(p,{placeholder:"Search"}),t.jsxs(o,{connected:!0,variant:"tinted",children:[t.jsx(n,{variant:"tinted",children:"Filter"}),t.jsx(a,{variant:"tinted"}),t.jsx(n,{variant:"tinted",children:t.jsx(c,{})})]}),t.jsxs(n,{variant:"outline",children:[t.jsx(d,{}),t.jsx("span",{children:"Add"})]}),t.jsxs(n,{variant:"ghost",children:[t.jsx(m,{}),t.jsx("span",{children:"Save"})]})]});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
