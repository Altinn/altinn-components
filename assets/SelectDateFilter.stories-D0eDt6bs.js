import{j as t}from"./iframe-BbAJh2l_.js";import{S as a}from"./SelectDateFilter-7lafazA5.js";import{u as m,t as n}from"./example.hooks-BbT7utNT.js";import{T as s,a as l}from"./Toolbar-DckTjw6O.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-pVsY4qWr.js";import"./useId-DlaeWOGU.js";import"./Datepicker-AFLKcv8r.js";import"./index-D4eFSvt3.js";import"./ChevronRight-C-emBdlp.js";import"./Button-MneWcYDg.js";import"./button-BOk0ljv4.js";import"./use-merge-refs-B0vn2eeh.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-DT3pt1_M.js";import"./MenuItem-CGPdVF_D.js";import"./ItemMedia-Cdf2Y2Gw.js";import"./XMark-CBD09dy-.js";import"./Avatar-j2CMQG5s.js";import"./Skeleton-DCAPmpFX.js";import"./AvatarGroup-D7oFGG3U.js";import"./Icon-BPIDnrjf.js";import"./Checkmark-DCzlJj3W.js";import"./Heading-DtMkhgFU.js";import"./useHighlightedText-Dxl-Q7I2.js";import"./ItemControls-B5jsMXbN.js";import"./Badge-Bayw0f9c.js";import"./MenuListHeading-CDqxI5H7.js";import"./Fieldset-CFvQhJLA.js";import"./index-BNnwLbXZ.js";import"./Label-BPdBz656.js";import"./Input-3cVAucaE.js";import"./input-nlSK42jH.js";import"./SearchField-DsP_4HyY.js";import"./MagnifyingGlass-DGbwovi2.js";import"./FieldBase-DPxwAUyD.js";import"./Typography-Dc6esLAJ.js";import"./useMenu-YgVQ1Cwa.js";import"./InformationSquare-ina-Qzjq.js";import"./Paperclip-DUfsEKsS.js";import"./Eye-DLDyRtc6.js";import"./MenuHamburger-DD5Albkt.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-C3VaoHjC.js";import"./Plus-Db8QMMb0.js";import"./Dropdown-oBR_mdc3.js";import"./ChevronUpDown-CYRKV1V8.js";import"./ButtonGroup-CfWicBai.js";import"./ButtonGroupDivider-BKjt-F_a.js";import"./Tooltip-C777j_wE.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-d4Qk3RQU.js";import"./ToolbarSearch-BxmfpA3n.js";const dt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
