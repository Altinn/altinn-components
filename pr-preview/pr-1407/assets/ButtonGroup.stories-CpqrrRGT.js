var B=Object.defineProperty;var r=(p,c)=>B(p,"name",{value:c,configurable:!0});import{a5 as t,b as n,Q as d}from"./iframe-CmcSEjvS.js";import{S as m}from"./SearchField-DQeX1ZYV.js";import{B as o}from"./ButtonGroup-Cpml5GDI.js";import{B as a}from"./ButtonGroupDivider-BTw_i8uf.js";import{S as l}from"./ChevronUpDown-DU_qA88P.js";import{S as x}from"./Plus-DVOeMTJ7.js";import{S as h}from"./Bookmark-fmnCZLUz.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-C2kDbxXn.js";import"./MenuListItem-BL-id_u-.js";import"./MenuListHeading-BKPqFrC5.js";import"./MenuItem-BJhn9r_O.js";import"./CheckboxUncheckedIcon-BBoJFSSq.js";import"./RadioUncheckedIcon-VgJlolIv.js";import"./ItemMedia-BefRyocx.js";import"./Avatar-e7KasoHp.js";import"./AvatarGroup-CK0XwNSh.js";import"./ItemLabel-s_xPF5R8.js";import"./Heading-vmMoflPs.js";import"./useHighlightedText-DJAL4JcK.js";import"./ItemControls-YGZP0Vjk.js";import"./Badge-DDzGMVSy.js";import"./Tooltip-BzKHjYiv.js";import"./ChevronRight-B5wtiA4y.js";import"./FieldBase-C-IkhlpM.js";import"./Typography-sASlV-kd.js";import"./Field-00i3_VLV.js";import"./Label-C2oW91xs.js";import"./Input-C0nOO2ZR.js";import"./useMenu-C4pen0si.js";import"./MenuListDivider-wZXMjqHS.js";import"./InformationSquare-6xY-3cyl.js";const V={title:"Button/ButtonGroup",component:o,parameters:{},args:{children:"Button"}},e=r(()=>t.jsxs(o,{children:[t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"}),t.jsx(n,{children:"Button"})]}),"Default"),u=r(()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(n,{children:"Button 2"}),t.jsx(n,{children:"Button 3"})]}),"Connected"),s=r(()=>t.jsxs(o,{connected:!0,children:[t.jsx(n,{children:"Button 1"}),t.jsx(a,{}),t.jsx(n,{children:"Button 2"}),t.jsx(a,{}),t.jsx(n,{children:"Button 3"})]}),"WithDivider"),i=r(()=>t.jsxs(o,{size:"xs",children:[t.jsxs(n,{children:[t.jsx("span",{children:"Menu"}),t.jsx(l,{})]}),t.jsx(m,{placeholder:"Search"}),t.jsxs(o,{connected:!0,variant:"tinted",children:[t.jsx(n,{variant:"tinted",children:"Filter"}),t.jsx(a,{variant:"tinted"}),t.jsx(n,{variant:"tinted",children:t.jsx(d,{})})]}),t.jsxs(n,{variant:"outline",children:[t.jsx(x,{}),t.jsx("span",{children:"Add"})]}),t.jsxs(n,{variant:"ghost",children:[t.jsx(h,{}),t.jsx("span",{children:"Save"})]})]}),"Toolbar"),Y=["Default","Connected","WithDivider","Toolbar"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};export{u as Connected,e as Default,i as Toolbar,s as WithDivider,Y as __namedExportsOrder,V as default};
