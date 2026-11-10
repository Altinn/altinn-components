var B=Object.defineProperty;var r=(p,c)=>B(p,"name",{value:c,configurable:!0});import{a6 as t,c as n,T as d}from"./iframe-CFooeFlc.js";import{S as m}from"./SearchField-vc2j7DYW.js";import{B as o}from"./ButtonGroup-B1Q8fC_M.js";import{B as a}from"./ButtonGroupDivider-CNEu50cf.js";import{S as l}from"./ChevronUpDown-B5XyDIBr.js";import{S as x}from"./Plus-uOOnNtuS.js";import{S as h}from"./Bookmark-Ddp9wjen.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-BeyjX3_h.js";import"./MenuListItem-lDH_nIX2.js";import"./MenuListDivider-DbxP2E3y.js";import"./MenuItem-Bf8xgsdL.js";import"./CheckboxUncheckedIcon-BUUPFL_h.js";import"./RadioUncheckedIcon-SM_w6gXN.js";import"./ItemMedia-BiITU9Jf.js";import"./Avatar-BMLgJvdJ.js";import"./AvatarGroup-O59IIMZ1.js";import"./ItemLabel-uOYlRqGI.js";import"./Heading-BvwzGhlC.js";import"./useHighlightedText-CSeb_EVo.js";import"./ItemControls-a2iPy1rh.js";import"./Badge-4L7pEK9S.js";import"./Tooltip-Dsu4-yLP.js";import"./ChevronRight-Pp6aFK2W.js";import"./FieldBase--dF0uMSe.js";import"./Typography-DZMMTX6d.js";import"./Field-XgzC0Js-.js";import"./Label-BITGJPso.js";import"./Input-CijTBA3T.js";import"./useMenu-Bq9-gO9j.js";import"./InformationSquare-CkGSwppR.js";const Q={title:"Button/ButtonGroup",component:o,parameters:{},args:{children:"Button"}},e=r(()=>t.jsxs(o,{children:[t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"})]}),"Default"),u=r(()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(n,{children:"Button 2"}),t.jsx(n,{children:"Button 3"})]}),"Connected"),s=r(()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(a,{}),t.jsx(n,{children:"Button 2"}),t.jsx(a,{}),t.jsx(n,{children:"Button 3"})]}),"WithDivider"),i=r(()=>t.jsxs(o,{size:"xs",children:[t.jsxs(n,{children:[t.jsx("span",{children:"Menu"}),t.jsx(l,{})]}),t.jsx(m,{placeholder:"Search"}),t.jsxs(o,{connected:!0,variant:"tinted",children:[t.jsx(n,{variant:"tinted",children:"Filter"}),t.jsx(a,{variant:"tinted"}),t.jsx(n,{variant:"tinted",children:t.jsx(d,{})})]}),t.jsxs(n,{variant:"outline",children:[t.jsx(x,{}),t.jsx("span",{children:"Add"})]}),t.jsxs(n,{variant:"ghost",children:[t.jsx(h,{}),t.jsx("span",{children:"Save"})]})]}),"Toolbar"),V=["Default","Connected","WithDivider","Toolbar"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
