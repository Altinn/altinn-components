import{a7 as t}from"./iframe-BZiA3Dc9.js";import{S as a}from"./SelectDateFilter-C8wKDCGD.js";import{t as n}from"./example.data-BGLN7GEK.js";import{a as s}from"./example.hooks-BRHfnALd.js";import{T as m,a as l}from"./Toolbar-BZOC5y4s.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-BCRq5kyq.js";import"./MenuListItem-D6cNKdUH.js";import"./MenuItem-C8RiqVeE.js";import"./ItemMedia-DZA-TM72.js";import"./Avatar-DghTGFEI.js";import"./AvatarGroup-DPv09ZzM.js";import"./Checkmark-4XKWnN3Z.js";import"./ItemLabel-CJWHWa7G.js";import"./Heading-DduTyBY0.js";import"./useHighlightedText-gnIxErVs.js";import"./ItemControls-D3kvfvc9.js";import"./Badge-9d5TUG_K.js";import"./Tooltip-9A_N-nl8.js";import"./ChevronRight-CRJJFvsY.js";import"./ArrowUndo-DmjPkDTA.js";import"./MenuListDivider-BVEnRF-b.js";import"./Fieldset-DZ6fee6O.js";import"./Field-BBiYs4sk.js";import"./Label-DzltmVQl.js";import"./Input-F50qI-5v.js";import"./Datepicker-qPNrnNVU.js";import"./SearchField-CjnwN1Qm.js";import"./MagnifyingGlass-CA7TYkUz.js";import"./FieldBase-ueusd3rP.js";import"./Typography-HNFVi96c.js";import"./useMenu-S-ctNtGP.js";import"./MenuListHeading-BOV_GCdf.js";import"./InformationSquare-mZWip9WA.js";import"./Paperclip-D662rRmV.js";import"./Eye--89b7rat.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-CH0SCgCh.js";import"./useDropdownMenuController-DhlN8Ngn.js";import"./Dropdown-B6vO-ibc.js";import"./Plus-DuB6ksxl.js";import"./ButtonGroup-CQ4JbS4J.js";import"./ButtonGroupDivider-CyCQJaDt.js";import"./ChevronUpDown-DVPIS2tN.js";import"./ToolbarMenu-DvNQ0jha.js";import"./ToolbarSearch-D5I768Wa.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const inboxFilter = useInboxFilter({
    filters: [{
      ...timeFilter,
      as: SelectDateFilter
    }],
    defaultFilterState: {}
  });
  return <div>
      <Toolbar>
        <ToolbarFilter {...inboxFilter} />
      </Toolbar>
      <hr />
      {JSON.stringify(inboxFilter.filterState)}
    </div>;
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const inboxFilter = useInboxFilter({
    filters: [{
      ...timeFilter,
      as: SelectDateFilter,
      removable: true
    }],
    defaultFilterState: {}
  });
  return <div>
      <Toolbar>
        <ToolbarFilter {...inboxFilter} />
      </Toolbar>
      <hr />
      {JSON.stringify(inboxFilter.filterState)}
    </div>;
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const items = timeFilter.items.map(item => {
    return {
      ...item,
      name: 'date'
    };
  });
  const inboxFilter = useInboxFilter({
    filters: [{
      ...timeFilter,
      items,
      name: 'date',
      as: SelectDateFilter
    }],
    defaultFilterState: {}
  });
  return <div>
      <Toolbar>
        <ToolbarFilter {...inboxFilter} />
      </Toolbar>
      <hr />
      {JSON.stringify(inboxFilter.filterState)}
    </div>;
}`,...o.parameters?.docs?.source}}};const at=["Datepicker","RemovableDatepicker","CustomName"];export{o as CustomName,e as Datepicker,i as RemovableDatepicker,at as __namedExportsOrder,nt as default};
