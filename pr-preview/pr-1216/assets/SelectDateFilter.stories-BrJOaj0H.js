import{p as t}from"./iframe-B0raGbVc.js";import{S as a}from"./SelectDateFilter-8bO5CPXZ.js";import{t as n,a as m}from"./example.hooks-DFpfAUIK.js";import{T as s,a as l}from"./Toolbar-6EUbBPiv.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-Cqp8gCsN.js";import"./index-BFPoepm_.js";import"./MenuItem-CO5pm5KV.js";import"./ItemMedia-vIK6hHXj.js";import"./XMark-Vu63tlKp.js";import"./useId-DjmMrSjF.js";import"./Avatar-C_p7vVVJ.js";import"./Skeleton-Bie46BNt.js";import"./AvatarGroup-CCFl7ITU.js";import"./Icon-CkGS8ofh.js";import"./Checkmark-w1Y8-xSD.js";import"./ItemLabel-WiIVldH2.js";import"./Heading-HwRbtbil.js";import"./useHighlightedText-Cy927kZm.js";import"./ItemControls-0LHp_bwC.js";import"./Badge-LVeKbEwp.js";import"./Tooltip-drcV-Psw.js";import"./tooltip-C563LrpG.js";import"./ChevronRight-B1cS3dE4.js";import"./ArrowUndo-Chz8G1hW.js";import"./MenuListHeading-BOiM7js_.js";import"./Fieldset-DDHpvEYt.js";import"./Label-BU6sA0x8.js";import"./Input-DWL065bb.js";import"./Datepicker-BCp-QZA8.js";import"./Button-DaZ5Xj9O.js";import"./SearchField-x-7DN5Df.js";import"./MagnifyingGlass-M1myOHdK.js";import"./FieldBase-COYRg4qt.js";import"./Typography-aMX_Xall.js";import"./useMenu-DBDHaupH.js";import"./index-BdK8fp8H.js";import"./InformationSquare-C1Z5-XLz.js";import"./Paperclip-DwprE3KU.js";import"./Eye-DEeNlDrF.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-Dba65Zbz.js";import"./useDropdownMenuController-CZGIg3GD.js";import"./Dropdown-XaITxOJ1.js";import"./Plus-Ddu_AJ6f.js";import"./ButtonGroup-DlKQjFoe.js";import"./ButtonGroupDivider-CTCa-xOS.js";import"./ChevronUpDown-qlXOm32U.js";import"./ToolbarMenu-Cu99lGNg.js";import"./ToolbarSearch-2vQT56rz.js";const lt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const pt=["Datepicker","RemovableDatepicker","CustomName"];export{o as CustomName,e as Datepicker,i as RemovableDatepicker,pt as __namedExportsOrder,lt as default};
