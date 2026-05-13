import{j as t}from"./iframe-DkQPO9ro.js";import{S as a}from"./SelectDateFilter-BPod2Ykq.js";import{u as m,t as n}from"./example.hooks-GhZcElQY.js";import{T as s,a as l}from"./Toolbar-DGgwFwWk.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-CchR6_Y_.js";import"./useId-CwF4wxTL.js";import"./Datepicker-D7SDyIeL.js";import"./index-BrTdOUlk.js";import"./ChevronRight-Ddmldm4v.js";import"./Button-OKMeorO5.js";import"./button-Byovksc3.js";import"./use-merge-refs-B1oKProt.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-BEjobN4X.js";import"./MenuItem-BCrg9AvC.js";import"./ItemMedia-CHWY5IG3.js";import"./XMark-5G2rqhrX.js";import"./Avatar-DlrsSRUv.js";import"./Skeleton-8DklmnzK.js";import"./AvatarGroup-DkXzBnSr.js";import"./Icon-Dao4TSf9.js";import"./Checkmark-JWLDNW8H.js";import"./Heading-Otl-Ib-S.js";import"./useHighlightedText-BlkM7iRt.js";import"./ItemControls-Czqw_jtP.js";import"./Badge-cGEpqNqN.js";import"./Tooltip-DHQ9pKqw.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuListHeading-DNdWEvDL.js";import"./Fieldset-CcK7G4vk.js";import"./index-BCCMT4X2.js";import"./Label-DNmTNqvr.js";import"./Input-CFLvjpxG.js";import"./input-BwL9rXep.js";import"./SearchField-BFSdJUV0.js";import"./MagnifyingGlass-DLwDZfMD.js";import"./FieldBase-BPqKon2e.js";import"./Typography-cgJeIGtL.js";import"./useMenu-BKpTfeOo.js";import"./index-DaA-2TAn.js";import"./InformationSquare-DS3QJ89x.js";import"./Paperclip-C9Fsh0Rf.js";import"./Eye-Dd_FvVr9.js";import"./MenuHamburger-CDbgLMEh.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-tv24Gc_I.js";import"./Plus-DTlIM-KK.js";import"./Dropdown-DDoGMqNi.js";import"./ChevronUpDown-CVYa19Ee.js";import"./ButtonGroup-3KQzrPQQ.js";import"./ButtonGroupDivider-ff9B_AjZ.js";import"./ToolbarMenu-BM3yaZDN.js";import"./ToolbarSearch-6B-Iqxad.js";const Ft={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
