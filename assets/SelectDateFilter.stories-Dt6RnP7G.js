import{j as t}from"./iframe-Dj7Cj6th.js";import{S as a}from"./SelectDateFilter-BdHiSIf7.js";import{u as m,t as n}from"./example.hooks-CzkhgRfi.js";import{T as s,a as l}from"./Toolbar-PeLOXVy6.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-BweBUO2a.js";import"./useId-ByPI58ip.js";import"./Datepicker-C8RPueCa.js";import"./index-CddsnUaU.js";import"./ChevronRight-DoyD_DMf.js";import"./Button-CSjIyK1w.js";import"./button-BKLxmUvr.js";import"./use-merge-refs-YImFlbky.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-DHv3z0ag.js";import"./MenuItem-jJDtIeVN.js";import"./ItemMedia-ClCn_Pwn.js";import"./XMark-CFOHUWx0.js";import"./Avatar-BthLZDba.js";import"./Skeleton-D2EJPpRT.js";import"./AvatarGroup-CKpZaMLG.js";import"./Icon-ClXNgiA2.js";import"./Checkmark-BGb3abOV.js";import"./Heading-CYqNNVt0.js";import"./useHighlightedText-BEM-o_8x.js";import"./ItemControls-Dm3s3qCz.js";import"./Badge-CSrzMhOz.js";import"./Tooltip-DHRUZs7M.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuListHeading-BcZUdaLF.js";import"./Fieldset-5pp9MIr3.js";import"./index-DyfHnAhP.js";import"./Label-knK18nOg.js";import"./Input-xlo_b8Ui.js";import"./input-Dg3xXmgC.js";import"./SearchField-IAcAy2TF.js";import"./MagnifyingGlass-CkAWdXLw.js";import"./FieldBase-1wPahpAR.js";import"./Typography-NJpqcBZB.js";import"./useMenu-CZ8hjrPb.js";import"./InformationSquare-BF5i3vGC.js";import"./Paperclip-DnvKAF-u.js";import"./Eye-j3RHtwGN.js";import"./MenuHamburger-B1BfC5RA.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-BLxYI4kb.js";import"./Plus-CoZtisp_.js";import"./Dropdown-DRhtJuEv.js";import"./ChevronUpDown-B9vT5o0M.js";import"./ButtonGroup-FtWKGzEG.js";import"./ButtonGroupDivider-BXtv9C3u.js";import"./ToolbarMenu-DolwSrkD.js";import"./ToolbarSearch-wYmwOicS.js";const dt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
