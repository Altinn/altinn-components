import{j as t}from"./iframe-CU9tIbvZ.js";import{S as a}from"./SelectDateFilter-BuNdUykd.js";import{u as m,t as n}from"./example.hooks-icaOX6OY.js";import{T as s,a as l}from"./Toolbar-DLn5d2hq.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-C5gTjs_w.js";import"./useId-BEikXtHv.js";import"./Datepicker-dOzptF7O.js";import"./index-Bd_n44R2.js";import"./ChevronRight-XlyxhDjC.js";import"./Button-DwluG-LJ.js";import"./button-DfPuT9nv.js";import"./use-merge-refs-BZYQG8M3.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-DwYyHEmE.js";import"./MenuItem-B01BWq_H.js";import"./ItemMedia-DuuCC0AM.js";import"./XMark-DTYd927G.js";import"./Avatar-CPYUWVLR.js";import"./Skeleton-WB8_C3gk.js";import"./AvatarGroup-D82OEK4D.js";import"./Icon-BBvHNxu7.js";import"./Checkmark-DOBFSC3X.js";import"./Heading-DKJvmFhb.js";import"./useHighlightedText-okRrJvjD.js";import"./ItemControls-BgF8Asgd.js";import"./Badge-C-yjP1nL.js";import"./Tooltip-Gn5m6ZxQ.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuListHeading-kMHXlGu4.js";import"./Fieldset-DDJhEhLX.js";import"./index-ByNurdCO.js";import"./Label-BURQuXSo.js";import"./Input-C4CEDonn.js";import"./input-BB0Zu-vu.js";import"./SearchField-CWeqUa0W.js";import"./MagnifyingGlass-CpZlhX9q.js";import"./FieldBase-Bc5lvX-i.js";import"./Typography-w6SEqUo0.js";import"./useMenu-CLh8gMuU.js";import"./index-DdmkzICU.js";import"./InformationSquare-Dq6QQdGV.js";import"./Paperclip-ClDtZHFp.js";import"./Eye-DXAmrRzZ.js";import"./MenuHamburger-Cl0yoDLg.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-DyTNGBZv.js";import"./Plus-3VXDUyQo.js";import"./Dropdown-DgULA5TZ.js";import"./ChevronUpDown-BkTcHWzp.js";import"./ButtonGroup-Bc7spR1E.js";import"./ButtonGroupDivider-Dbxz7H96.js";import"./ToolbarMenu-DNG-wyC8.js";import"./ToolbarSearch-DpBsUYzd.js";const Ft={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
