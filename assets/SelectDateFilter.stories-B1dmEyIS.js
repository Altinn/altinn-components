import{a7 as t}from"./iframe-Byxtd80g.js";import{S as a}from"./SelectDateFilter-GTy_2L90.js";import{t as n}from"./example.data-B_L6gym6.js";import{a as s}from"./example.hooks-ByXp6-AV.js";import{T as m,a as l}from"./Toolbar-p-vHRlWD.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-r9ECCA1E.js";import"./MenuListItem-rQlT5DX8.js";import"./MenuItem-BIjlfqyX.js";import"./ItemMedia-DRrUuj39.js";import"./Avatar-DhukG_GJ.js";import"./AvatarGroup-CWET-veu.js";import"./Checkmark-oERC_EvH.js";import"./ItemLabel--xs2hbXq.js";import"./Heading-MBvMqbLo.js";import"./useHighlightedText-Cf3y_8YK.js";import"./ItemControls-DrAhbY6n.js";import"./Badge-Cs7_cxSC.js";import"./Tooltip-9Wvrat9n.js";import"./ChevronRight-Cr__dFRw.js";import"./ArrowUndo-gwde95g9.js";import"./MenuListDivider-CDp90hQ9.js";import"./Fieldset-CNAZ_-62.js";import"./Field-D8NU1WP1.js";import"./Label-BN9gSRd7.js";import"./Input-De6ZM0cy.js";import"./Datepicker-CsvvVk5Q.js";import"./SearchField-BrxR5w_Y.js";import"./MagnifyingGlass-DByXWuC9.js";import"./FieldBase-BpV90x03.js";import"./Typography-B9U7pBH4.js";import"./useMenu-ClfrC7iO.js";import"./MenuListHeading-laWT1ysP.js";import"./InformationSquare-CfrYT55Z.js";import"./Paperclip-CyfpQaVT.js";import"./Eye-BJUZ9eMd.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-Djtct37j.js";import"./useDropdownMenuController-Ci6S68lA.js";import"./Dropdown-BDuW_1gv.js";import"./Plus-Baef_WWy.js";import"./ButtonGroup-DCrOTCLv.js";import"./ButtonGroupDivider-Bm1ON_jD.js";import"./ChevronUpDown-CEdUpTfr.js";import"./ToolbarMenu-BlHb-4HL.js";import"./ToolbarSearch-CEPHdN_N.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
