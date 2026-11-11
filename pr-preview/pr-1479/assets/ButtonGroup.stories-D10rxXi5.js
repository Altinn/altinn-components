var B=Object.defineProperty;var r=(p,c)=>B(p,"name",{value:c,configurable:!0});import{a6 as t,c as n,T as d}from"./iframe-CJbVApVd.js";import{S as m}from"./SearchField-v7apZWbj.js";import{B as o}from"./ButtonGroup-Ban15m4A.js";import{B as a}from"./ButtonGroupDivider-BEoSbrb-.js";import{S as l}from"./ChevronUpDown-CYzCA8Zj.js";import{S as x}from"./Plus-C_JJ1fS4.js";import{S as h}from"./Bookmark-C9de6O7D.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-ByOH_q-F.js";import"./MenuListItem-DZuqWt2h.js";import"./MenuListDivider-DHbKRw1S.js";import"./MenuItem-BZ7Fkp32.js";import"./CheckboxUncheckedIcon-mEYYc7FR.js";import"./RadioUncheckedIcon-BYKV7woP.js";import"./ItemMedia-zelbGl6j.js";import"./Avatar-D6kT48yy.js";import"./AvatarGroup-CEwn4f1y.js";import"./ItemLabel-BQOKZEUY.js";import"./Heading-DPlNKJG2.js";import"./useHighlightedText-ClD__BkG.js";import"./ItemControls-BlgjQohZ.js";import"./Badge-B0Oy6sks.js";import"./Tooltip-0Tcl_NyY.js";import"./ChevronRight-27VbzC_5.js";import"./FieldBase-DPozPxXp.js";import"./Typography-YiefWcUe.js";import"./Field-YyxArrP0.js";import"./Label-BJanEfkF.js";import"./Input-DjgPtg5S.js";import"./useMenu-Le6NyqAV.js";import"./InformationSquare-COAmcV_p.js";const Q={title:"Button/ButtonGroup",component:o,parameters:{},args:{children:"Button"}},e=r(()=>t.jsxs(o,{children:[t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"})]}),"Default"),u=r(()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(n,{children:"Button 2"}),t.jsx(n,{children:"Button 3"})]}),"Connected"),s=r(()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(a,{}),t.jsx(n,{children:"Button 2"}),t.jsx(a,{}),t.jsx(n,{children:"Button 3"})]}),"WithDivider"),i=r(()=>t.jsxs(o,{size:"xs",children:[t.jsxs(n,{children:[t.jsx("span",{children:"Menu"}),t.jsx(l,{})]}),t.jsx(m,{placeholder:"Search"}),t.jsxs(o,{connected:!0,variant:"tinted",children:[t.jsx(n,{variant:"tinted",children:"Filter"}),t.jsx(a,{variant:"tinted"}),t.jsx(n,{variant:"tinted",children:t.jsx(d,{})})]}),t.jsxs(n,{variant:"outline",children:[t.jsx(x,{}),t.jsx("span",{children:"Add"})]}),t.jsxs(n,{variant:"ghost",children:[t.jsx(h,{}),t.jsx("span",{children:"Save"})]})]}),"Toolbar"),V=["Default","Connected","WithDivider","Toolbar"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
