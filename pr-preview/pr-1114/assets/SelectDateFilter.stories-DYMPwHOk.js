import{j as t}from"./iframe-bdb8MxAl.js";import{S as a}from"./SelectDateFilter-CHVQYKsx.js";import{u as m,t as n}from"./example.hooks-BbjCe2nu.js";import{T as s,a as l}from"./Toolbar-axYd7Hfl.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-IV-u59mp.js";import"./useId-m2lwd_Ct.js";import"./Datepicker-DNttD5Oy.js";import"./index-p3wA3m8m.js";import"./ChevronRight-Cnln8IKV.js";import"./Button-CmmCg_X2.js";import"./button-riuqcLff.js";import"./use-merge-refs-Xyc_Uo3E.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-CqjGn-MF.js";import"./MenuItem-CkSmk6Ko.js";import"./ItemMedia-Bzsndyr0.js";import"./XMark-ml8n1JcF.js";import"./Avatar-Di5f2hN1.js";import"./Skeleton-BMmeChMq.js";import"./AvatarGroup-DeyVKu-1.js";import"./Icon-DDIx0qrc.js";import"./Checkmark-YAJv3o3m.js";import"./Heading-BV-bgYII.js";import"./useHighlightedText-BZip2xbp.js";import"./ItemControls-CoqYqtfq.js";import"./Badge-CZZ-T3gy.js";import"./MenuListHeading-DgV7uPAe.js";import"./Fieldset-2cmOdguu.js";import"./index-Bm_5QTlm.js";import"./Label-DBSC-MMD.js";import"./Input-ClF74fUz.js";import"./input-ATX54hdE.js";import"./SearchField-Q9bTEqZH.js";import"./MagnifyingGlass-CUUYZIQ1.js";import"./FieldBase-DvRhg6xr.js";import"./Typography-BHyeW1q-.js";import"./useMenu-Dc6Nz6rI.js";import"./InformationSquare-nixk64HR.js";import"./Paperclip-CKCmzp7v.js";import"./Eye-BAVJ6LcY.js";import"./MenuHamburger-_0XpI-Lc.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-CBF1KoVv.js";import"./Plus-B7BchYDv.js";import"./Dropdown-B41Ltmad.js";import"./ChevronUpDown-DUHc-x24.js";import"./ButtonGroup-BdDqNtW_.js";import"./ButtonGroupDivider-CZhGnBHU.js";import"./Tooltip-C9AV6ve2.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-BPcwkdao.js";import"./ToolbarSearch-BeZpFf7j.js";const dt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const Ft=["Datepicker","RemovableDatepicker","CustomName"];export{o as CustomName,e as Datepicker,i as RemovableDatepicker,Ft as __namedExportsOrder,dt as default};
