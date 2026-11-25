var F=Object.defineProperty;var i=(r,e)=>F(r,"name",{value:e,configurable:!0});import{a6 as t}from"./iframe-Df5nkPs8.js";import{S as m}from"./SelectDateFilter-cZKRcJ0S.js";import{t as s}from"./example.data-DFMMwSIU.js";import{a as l}from"./example.hooks-BHCXDYE0.js";import{T as p,a as c}from"./Toolbar-DCmKrXGS.js";import"./preload-helper-Cc2_yIPf.js";import"./MenuListItem-C4bbk3e4.js";import"./MenuItem-9AmdLb1n.js";import"./CheckboxUncheckedIcon-DFwabWeH.js";import"./RadioUncheckedIcon-CNGez86b.js";import"./ItemMedia-B1kmhXWg.js";import"./Avatar-CUeqTW6a.js";import"./AvatarGroup-CtyhIC1k.js";import"./ItemLabel-DuyLbrJx.js";import"./Heading-CPiHedua.js";import"./useHighlightedText-BM0MIdsX.js";import"./ItemControls-Bd_Lnueh.js";import"./Badge-m24uQYgz.js";import"./Tooltip-KOhXDwFj.js";import"./ChevronRight-DJP358BJ.js";import"./ArrowUndo-BBF4w0in.js";import"./MenuListDivider-BMCtCld-.js";import"./Fieldset-BA1tDqKw.js";import"./Field-DfhUv83u.js";import"./Label-D4wdB9xq.js";import"./Input-B9TaRlMe.js";import"./SearchField-C0Yxe_69.js";import"./MagnifyingGlass-3vGCvjJD.js";import"./FieldBase-C4nTzDS1.js";import"./Typography-W78b6WhV.js";import"./useMenu-gk-Zv7NC.js";import"./InformationSquare-CXwkU926.js";import"./Paperclip-Y7ewBKuG.js";import"./Eye-CdnVhqKD.js";import"./MenuHamburger-BHNimgxZ.js";import"./useDropdownMenuController-DC3QZLRb.js";import"./Dropdown-DRbHVqgW.js";import"./Plus-BaDdjZ6L.js";import"./ButtonGroup-C09nr3gY.js";import"./ButtonGroupDivider-DI05vaV_.js";import"./ChevronUpDown-BtgQLPpc.js";import"./ToolbarMenu-COF1T52x.js";import"./ToolbarSearch-CYkSODkX.js";const ot={title:"Toolbar/SelectDateFilter",component:m,parameters:{},args:{}},o=i(()=>{const r=l({filters:[{...s,as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"Datepicker"),n=i(()=>{const r=l({filters:[{...s,as:m,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"RemovableDatepicker"),a=i(()=>{const r=s.items.map(d=>({...d,name:"date"})),e=l({filters:[{...s,items:r,name:"date",as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...e})}),t.jsx("hr",{}),JSON.stringify(e.filterState)]})},"CustomName"),nt=["Datepicker","RemovableDatepicker","CustomName"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
}`,...a.parameters?.docs?.source}}};export{a as CustomName,o as Datepicker,n as RemovableDatepicker,nt as __namedExportsOrder,ot as default};
