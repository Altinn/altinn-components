import{j as t}from"./iframe-CFpZEpOT.js";import{S as a}from"./SelectDateFilter-DrbLPKLu.js";import{u as m,t as n}from"./example.hooks-muB-ZRJ8.js";import{T as s,a as l}from"./Toolbar-B8d2PW4V.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-C9-6H0l6.js";import"./useId-Bpa1--zZ.js";import"./Datepicker-CZGkcVgy.js";import"./index-CMCH-iYZ.js";import"./ChevronRight-Ca_cSWgJ.js";import"./Button-C0rUC1sb.js";import"./button-DcOM5j_b.js";import"./use-merge-refs-DZRIBNsE.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-DCTPpMWv.js";import"./MenuItem-BNeTh361.js";import"./ItemMedia-DMrQkYiw.js";import"./XMark-DsxdrTa7.js";import"./Avatar-BgJ1eR8E.js";import"./Skeleton-BxeTCVQ2.js";import"./AvatarGroup-CCJxayqM.js";import"./Icon-CcpuJg5J.js";import"./Checkmark-DLdUb-vP.js";import"./Heading-Biv3WsI7.js";import"./useHighlightedText-DHCy4ZgC.js";import"./Badge-CiO-ESqG.js";import"./MenuListHeading-BZULpIAa.js";import"./Fieldset-C3KeG6M-.js";import"./index-CBNpaYnn.js";import"./Label-CTb5NEuA.js";import"./Input-D08OnHI6.js";import"./input-BOf7pxRD.js";import"./SearchField-7ltHAmFU.js";import"./MagnifyingGlass-C_OdGmS9.js";import"./FieldBase-BKE2EVCO.js";import"./Typography-CFFVnqbI.js";import"./useMenu-BHNp1hvr.js";import"./InformationSquare-DvM0m3_a.js";import"./Paperclip-DlUMDrUD.js";import"./Eye-D5FY-E5s.js";import"./MenuHamburger-DtdWoRM-.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-e-RIKU4l.js";import"./Plus-BvInV0-S.js";import"./Dropdown-CxnqCSsD.js";import"./ChevronUpDown-B9L9cM3W.js";import"./ButtonGroup-ix1R0MqJ.js";import"./ButtonGroupDivider-BWSKwXfh.js";import"./Tooltip-D1tApwsv.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-XSpB5bAa.js";import"./ToolbarSearch-Dq1H2eUj.js";const ct={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const dt=["Datepicker","RemovableDatepicker","CustomName"];export{o as CustomName,e as Datepicker,i as RemovableDatepicker,dt as __namedExportsOrder,ct as default};
