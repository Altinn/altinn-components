import{j as t}from"./iframe-BM6RZuQM.js";import{S as a}from"./SelectDateFilter-CqF4z2QW.js";import{u as m,t as n}from"./example.hooks-axL-CLro.js";import{T as s,a as l}from"./Toolbar-jAy78YnB.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-Bmn4Nzqn.js";import"./useId-BYt_OYJh.js";import"./Datepicker-BkJPC1Si.js";import"./index-DAnedVDn.js";import"./ChevronRight-B7KHdEb3.js";import"./Button-DhtPu9_Y.js";import"./tooltip-DKLQ4JCb.js";import"./MenuListItem-CFW9Qx09.js";import"./MenuItem-CZgTJUho.js";import"./ItemMedia-qdtGx-k7.js";import"./XMark-EbOSJv8a.js";import"./Avatar-P_Ikblul.js";import"./Skeleton-DWzjK3h6.js";import"./AvatarGroup-pynF50Va.js";import"./Icon-m3ZEAfHU.js";import"./Checkmark-CVccove_.js";import"./Heading-aHWaPGZz.js";import"./useHighlightedText-Ctq_ta7p.js";import"./ItemControls-DdRx042_.js";import"./Badge-QT5oZygk.js";import"./Tooltip-BxiimWqz.js";import"./MenuListHeading-DdL3Lhhp.js";import"./Fieldset-N-D1ZQgj.js";import"./Label-C7IFl0uM.js";import"./Input-DsxiHlOc.js";import"./SearchField-BgkLBjBi.js";import"./MagnifyingGlass-D8QlnKcL.js";import"./FieldBase-lFVyN1xh.js";import"./Typography-CXaseqiH.js";import"./useMenu-DmjwUxq0.js";import"./index-CvxbdxgD.js";import"./InformationSquare-sR-zXHjU.js";import"./Paperclip-x0PjbURb.js";import"./Eye-D4DJj3ga.js";import"./MenuHamburger-BcfCqF_o.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-ChtSiN5l.js";import"./Plus-DESzxFez.js";import"./Dropdown-Cm6GAKAK.js";import"./ChevronUpDown-DfgLRSTr.js";import"./ButtonGroup-DLPKqiPP.js";import"./ButtonGroupDivider-BOAkNbb9.js";import"./ToolbarMenu-DB1ESAM1.js";import"./ToolbarSearch-es-DLOxw.js";const st={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const lt=["Datepicker","RemovableDatepicker","CustomName"];export{o as CustomName,e as Datepicker,i as RemovableDatepicker,lt as __namedExportsOrder,st as default};
