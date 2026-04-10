import{j as t}from"./iframe-DRbAvM8B.js";import{S as a}from"./SelectDateFilter-DBY_ime1.js";import{u as m,t as n}from"./example.hooks-XPoSgkwp.js";import{T as s,a as l}from"./Toolbar-C_9YDRG2.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-HRSWa3P-.js";import"./useId-p3Uu13R2.js";import"./Datepicker-B55e0e9V.js";import"./index-Dpt5RUeZ.js";import"./ChevronRight-BIwAZUpi.js";import"./Button-DXRH0CtL.js";import"./button-DB6SpB_q.js";import"./use-merge-refs-BRHMCtFk.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-CLLuPs6D.js";import"./MenuItem-GZbX5NAK.js";import"./ItemMedia-DLqoeXZM.js";import"./XMark-BeNK6Eym.js";import"./Avatar-DHw0Umd5.js";import"./Skeleton-C6w0Fovi.js";import"./AvatarGroup-BZTkgKpW.js";import"./Icon-BB196-C1.js";import"./Checkmark-BwvmX3W_.js";import"./Heading-aiLobBhZ.js";import"./useHighlightedText-DaUYVTi5.js";import"./Badge-B0bOgxTq.js";import"./MenuListHeading-DYidFrGe.js";import"./Fieldset-DWXEpDF1.js";import"./index-Vs8aUpKw.js";import"./Label-Zr8dB_9-.js";import"./Input-Cez8McI8.js";import"./input-DR5YebMy.js";import"./SearchField-Q4hKdicz.js";import"./MagnifyingGlass-Byb6dLEO.js";import"./FieldBase-_93TCpK5.js";import"./Typography-Da6zx1kt.js";import"./useMenu-BNYBCPCQ.js";import"./InformationSquare-Lr6VUhuh.js";import"./Paperclip-BUnfw_md.js";import"./Eye-Dtm3rmmu.js";import"./MenuHamburger-BigbFIZ4.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-OmQMIEvc.js";import"./Plus-frPGag5G.js";import"./Dropdown-VBO2OC6w.js";import"./ChevronUpDown-Zah_l3Hs.js";import"./ButtonGroup-r6m6YA7P.js";import"./ButtonGroupDivider-Bl0yWe10.js";import"./Tooltip-CJtJf-6I.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-BYSdvxKQ.js";import"./ToolbarSearch-BG9uhSKV.js";const ct={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
