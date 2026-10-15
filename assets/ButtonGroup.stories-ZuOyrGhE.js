var B=Object.defineProperty;var r=(p,c)=>B(p,"name",{value:c,configurable:!0});import{a7 as t,c as n,T as d}from"./iframe-BaqLtPTs.js";import{S as m}from"./SearchField-BCMYwn2Y.js";import{B as o}from"./ButtonGroup-BJPVaBTK.js";import{B as a}from"./ButtonGroupDivider-B_4k_KaA.js";import{S as l}from"./ChevronUpDown-BFdCo8HA.js";import{S as x}from"./Plus-C5MYAhCf.js";import{S as h}from"./Bookmark-Dwo9t8XR.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-D84zuplr.js";import"./FieldBase-BEQqqs0u.js";import"./Typography-DwSVJfAa.js";import"./useHighlightedText-sWqW6aCW.js";import"./Field-D5dVA89M.js";import"./Label-Wvr4cn-z.js";import"./Input-BbFz6Lbp.js";import"./useMenu-C1bmwhZm.js";import"./MenuListItem-sXMtvpJ-.js";import"./MenuListDivider-iw10_T6H.js";import"./MenuListHeading-Cp83ODWk.js";import"./MenuItem-D9hVuXrM.js";import"./ItemMedia-CLNTwl7K.js";import"./Avatar-DvYNusc4.js";import"./AvatarGroup-BUa5IcMK.js";import"./Checkmark-B7wTOCbv.js";import"./ItemLabel-D68tVwEb.js";import"./Heading-CDNNIgnR.js";import"./ItemControls-BPS_hDHQ.js";import"./Badge-Dh4HGE2C.js";import"./Tooltip-DfSLGLjy.js";import"./ChevronRight-Dg4XRKaD.js";import"./InformationSquare-DB9gl9c1.js";const Q={title:"Button/ButtonGroup",component:o,parameters:{},args:{children:"Button"}},e=r(()=>t.jsxs(o,{children:[t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"})]}),"Default"),u=r(()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(n,{children:"Button 2"}),t.jsx(n,{children:"Button 3"})]}),"Connected"),s=r(()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(a,{}),t.jsx(n,{children:"Button 2"}),t.jsx(a,{}),t.jsx(n,{children:"Button 3"})]}),"WithDivider"),i=r(()=>t.jsxs(o,{size:"xs",children:[t.jsxs(n,{children:[t.jsx("span",{children:"Menu"}),t.jsx(l,{})]}),t.jsx(m,{placeholder:"Search"}),t.jsxs(o,{connected:!0,variant:"tinted",children:[t.jsx(n,{variant:"tinted",children:"Filter"}),t.jsx(a,{variant:"tinted"}),t.jsx(n,{variant:"tinted",children:t.jsx(d,{})})]}),t.jsxs(n,{variant:"outline",children:[t.jsx(x,{}),t.jsx("span",{children:"Add"})]}),t.jsxs(n,{variant:"ghost",children:[t.jsx(h,{}),t.jsx("span",{children:"Save"})]})]}),"Toolbar");e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};const V=["Default","Connected","WithDivider","Toolbar"];export{u as Connected,e as Default,i as Toolbar,s as WithDivider,V as __namedExportsOrder,Q as default};
