import{j as t}from"./iframe-BUZW8AMM.js";import{S as a}from"./SelectDateFilter-DEHVKV6y.js";import{u as m,t as n}from"./example.hooks-DyAg_4Hr.js";import{T as s,a as l}from"./Toolbar-44ANOcfq.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-DP3wQisr.js";import"./useId-CoMggIDA.js";import"./Datepicker-BZxP-CcT.js";import"./index-DDG5Qp_D.js";import"./ChevronRight-Be2F8dIE.js";import"./Button-gpqpzK6E.js";import"./button-Bzfkec0d.js";import"./use-merge-refs-Cq-TarIz.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-DOB3vVPI.js";import"./MenuItem-B9Qpze_W.js";import"./ItemMedia-lV46z_8W.js";import"./XMark-N_5CtkVA.js";import"./Avatar-VmI9f2FC.js";import"./Skeleton-2WT-jYKy.js";import"./AvatarGroup-BSpRcNGO.js";import"./Icon-pO_LYxKU.js";import"./Checkmark-B1cvuYYq.js";import"./Heading-BBJzhiZm.js";import"./useHighlightedText-Df1F8nSN.js";import"./ItemControls-CILw3fe6.js";import"./Badge-CcUYqUUV.js";import"./Tooltip-4HkvDlDY.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuListHeading-BbGKJ44d.js";import"./Fieldset-D6j_8XE-.js";import"./index-BxrYGQ_D.js";import"./Label-EV3PcI6g.js";import"./Input-xWxScOYP.js";import"./input-Dl9c_xvZ.js";import"./SearchField-DOgIBcSC.js";import"./MagnifyingGlass-e5Ddvpo2.js";import"./FieldBase-D0VPfoZq.js";import"./Typography-DPxU9lqg.js";import"./useMenu-DzfOGhde.js";import"./index-B1N1jCNu.js";import"./InformationSquare-D87nn8LZ.js";import"./Paperclip-DiBOowVE.js";import"./Eye-DQI7Yw7a.js";import"./MenuHamburger-BwbXv_3L.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-ocgtyANg.js";import"./Plus-BWMMx9bM.js";import"./Dropdown-B9D2leTq.js";import"./ChevronUpDown-DyYbhZIM.js";import"./ButtonGroup-BdRMlEte.js";import"./ButtonGroupDivider-DSjna6gU.js";import"./ToolbarMenu-1Q9tH7De.js";import"./ToolbarSearch-D2snndR4.js";const Ft={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const ut=["Datepicker","RemovableDatepicker","CustomName"];export{o as CustomName,e as Datepicker,i as RemovableDatepicker,ut as __namedExportsOrder,Ft as default};
