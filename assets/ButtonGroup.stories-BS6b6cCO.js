import{j as t}from"./iframe-V8BRfBgT.js";import{S as c}from"./SearchField-D2AXVYp0.js";import{B as n}from"./Button-BlxzDMPI.js";import{B as o}from"./ButtonGroup-GmtwjaC0.js";import{B as a}from"./ButtonGroupDivider-DCIj-SRz.js";import{S as p}from"./XMark-C45HvrEl.js";import{S as B}from"./ChevronUpDown-CFkX2GwM.js";import{S as m}from"./Plus-DYqQ5ZW1.js";import{S as d}from"./Bookmark-CfrDm0KI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dg3z2A9f.js";import"./MagnifyingGlass-DvXaPbUD.js";import"./useId-Cpax_hNq.js";import"./FieldBase-DENJ-wBn.js";import"./Typography-BiIpQq_S.js";import"./useHighlightedText-DnT87ATC.js";import"./Skeleton-BQtaEJM-.js";import"./Label-DdQ1zxpY.js";import"./index-ByKBsU4r.js";import"./use-merge-refs--fAMpcSQ.js";import"./lite-DaUVFjkg.js";import"./Input-zOuJx9ZS.js";import"./input-1VpPOyjR.js";import"./MenuListItem-Ckqn-jsk.js";import"./MenuListHeading-nXDmyZ7G.js";import"./MenuItem-DQUORZa0.js";import"./ItemMedia-C3tA4Zzy.js";import"./Avatar-BDDvrYzF.js";import"./AvatarGroup-KHWc8S2T.js";import"./Icon-BWOTtVf8.js";import"./Checkmark-BKwfqVUb.js";import"./Heading-CGSCg4GY.js";import"./ItemControls-BctCfWNT.js";import"./ChevronRight-Cz_uty1S.js";import"./Badge-Bf3suXAP.js";import"./Tooltip-D0XBkrvV.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-D2cFOQcG.js";import"./index-84oeY8HP.js";import"./InformationSquare-Bxq9CYlT.js";import"./button-2-meUg78.js";const nt={title:"Button/ButtonGroup",component:o,parameters:{},args:{children:"Button"}},r=()=>t.jsxs(o,{children:[t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"})]}),e=()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(n,{children:"Button 2"}),t.jsx(n,{children:"Button 3"})]}),u=()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(a,{}),t.jsx(n,{children:"Button 2"}),t.jsx(a,{}),t.jsx(n,{children:"Button 3"})]}),s=()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(a,{}),t.jsx(n,{children:t.jsx(p,{})})]}),i=()=>t.jsxs(o,{size:"xs",children:[t.jsxs(n,{children:[t.jsx("span",{children:"Menu"}),t.jsx(B,{})]}),t.jsx(c,{placeholder:"Search"}),t.jsxs(o,{connected:!0,variant:"tinted",children:[t.jsx(n,{variant:"tinted",children:"Filter"}),t.jsx(a,{variant:"tinted"}),t.jsx(n,{variant:"tinted",children:t.jsx(p,{})})]}),t.jsxs(n,{variant:"outline",children:[t.jsx(m,{}),t.jsx("span",{children:"Add"})]}),t.jsxs(n,{variant:"ghost",children:[t.jsx(d,{}),t.jsx("span",{children:"Save"})]})]});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};const ot=["Default","Connected","WithDivider","ComboButton","Toolbar"];export{s as ComboButton,e as Connected,r as Default,i as Toolbar,u as WithDivider,ot as __namedExportsOrder,nt as default};
