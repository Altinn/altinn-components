var B=Object.defineProperty;var r=(p,c)=>B(p,"name",{value:c,configurable:!0});import{a6 as t,c as n,T as d}from"./iframe-HroKCH1i.js";import{S as m}from"./SearchField-DdJVtzp5.js";import{B as o}from"./ButtonGroup-Ds7x4PTq.js";import{B as a}from"./ButtonGroupDivider-BvjKoALv.js";import{S as l}from"./ChevronUpDown-CVsm6Wf1.js";import{S as x}from"./Plus-CnaATfP4.js";import{S as h}from"./Bookmark-DaEaxFpU.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-GwJB8-P4.js";import"./MenuListItem-DW9PJpJL.js";import"./MenuListDivider-DtrGkUUW.js";import"./MenuItem-CIYGtEiF.js";import"./CheckboxUncheckedIcon-HP_EJry3.js";import"./RadioUncheckedIcon-Ds8PcFs2.js";import"./ItemMedia-BGnaafVo.js";import"./Avatar-DknIY_wN.js";import"./AvatarGroup-CajaM-Bn.js";import"./ItemLabel-BExOJJ8K.js";import"./Heading-ButwX4Fz.js";import"./useHighlightedText-BR2lgM5a.js";import"./ItemControls-P_AZ0k9Y.js";import"./Badge-6DoOsqKK.js";import"./Tooltip-3zva_1pJ.js";import"./ChevronRight-CnU_-vpz.js";import"./FieldBase-Dy7F34xJ.js";import"./Typography-mUXdli5h.js";import"./Field-A9TpZ5Q4.js";import"./Label-3I9SdFhT.js";import"./Input-KntdUcqG.js";import"./useMenu-DLxClmSr.js";import"./InformationSquare-uPdk22J8.js";const Q={title:"Button/ButtonGroup",component:o,parameters:{},args:{children:"Button"}},e=r(()=>t.jsxs(o,{children:[t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"})]}),"Default"),u=r(()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(n,{children:"Button 2"}),t.jsx(n,{children:"Button 3"})]}),"Connected"),s=r(()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(a,{}),t.jsx(n,{children:"Button 2"}),t.jsx(a,{}),t.jsx(n,{children:"Button 3"})]}),"WithDivider"),i=r(()=>t.jsxs(o,{size:"xs",children:[t.jsxs(n,{children:[t.jsx("span",{children:"Menu"}),t.jsx(l,{})]}),t.jsx(m,{placeholder:"Search"}),t.jsxs(o,{connected:!0,variant:"tinted",children:[t.jsx(n,{variant:"tinted",children:"Filter"}),t.jsx(a,{variant:"tinted"}),t.jsx(n,{variant:"tinted",children:t.jsx(d,{})})]}),t.jsxs(n,{variant:"outline",children:[t.jsx(x,{}),t.jsx("span",{children:"Add"})]}),t.jsxs(n,{variant:"ghost",children:[t.jsx(h,{}),t.jsx("span",{children:"Save"})]})]}),"Toolbar"),V=["Default","Connected","WithDivider","Toolbar"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
