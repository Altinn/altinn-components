var B=Object.defineProperty;var r=(p,c)=>B(p,"name",{value:c,configurable:!0});import{a6 as t,c as n,T as d}from"./iframe-DmXJhoHi.js";import{S as m}from"./SearchField-CmQy5YNq.js";import{B as o}from"./ButtonGroup-BIAjr8pe.js";import{B as a}from"./ButtonGroupDivider-fZuIdyGO.js";import{S as l}from"./ChevronUpDown-CrXGIYV3.js";import{S as x}from"./Plus-B95oMHgF.js";import{S as h}from"./Bookmark-CppEiEZV.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-CDTvYECp.js";import"./MenuListItem-fE8Z_sJw.js";import"./MenuListDivider-DKZNTDIg.js";import"./MenuItem-C_9NXDrO.js";import"./CheckboxUncheckedIcon-THpi2fsF.js";import"./RadioUncheckedIcon-HRy4h_Iy.js";import"./ItemMedia-BhUDoeQn.js";import"./Avatar-Ct1BUX51.js";import"./AvatarGroup-jJ6DuwRZ.js";import"./ItemLabel-D6letihH.js";import"./Heading-DMD9BytY.js";import"./useHighlightedText-PrDe8r-L.js";import"./ItemControls-CqWny7dI.js";import"./Badge-BPEkC0lf.js";import"./Tooltip-DWnRPb8d.js";import"./ChevronRight-BBhULSEW.js";import"./FieldBase-BmJ_0UFe.js";import"./Typography-TuByLUlM.js";import"./Field-x0yE1z9d.js";import"./Label-Dmk4_kaT.js";import"./Input-BP2xOaTX.js";import"./useMenu-CAAj79LJ.js";import"./InformationSquare-Cf67cLsl.js";const Q={title:"Button/ButtonGroup",component:o,parameters:{},args:{children:"Button"}},e=r(()=>t.jsxs(o,{children:[t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"})]}),"Default"),u=r(()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(n,{children:"Button 2"}),t.jsx(n,{children:"Button 3"})]}),"Connected"),s=r(()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(a,{}),t.jsx(n,{children:"Button 2"}),t.jsx(a,{}),t.jsx(n,{children:"Button 3"})]}),"WithDivider"),i=r(()=>t.jsxs(o,{size:"xs",children:[t.jsxs(n,{children:[t.jsx("span",{children:"Menu"}),t.jsx(l,{})]}),t.jsx(m,{placeholder:"Search"}),t.jsxs(o,{connected:!0,variant:"tinted",children:[t.jsx(n,{variant:"tinted",children:"Filter"}),t.jsx(a,{variant:"tinted"}),t.jsx(n,{variant:"tinted",children:t.jsx(d,{})})]}),t.jsxs(n,{variant:"outline",children:[t.jsx(x,{}),t.jsx("span",{children:"Add"})]}),t.jsxs(n,{variant:"ghost",children:[t.jsx(h,{}),t.jsx("span",{children:"Save"})]})]}),"Toolbar"),V=["Default","Connected","WithDivider","Toolbar"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
