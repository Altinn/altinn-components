var F=Object.defineProperty;var i=(r,e)=>F(r,"name",{value:e,configurable:!0});import{a6 as t}from"./iframe-ucBQ5HcJ.js";import{S as m}from"./SelectDateFilter-IeSmILTx.js";import{t as s}from"./example.data-BBt38s0Y.js";import{a as l}from"./example.hooks-D0xAX5P_.js";import{T as p,a as c}from"./Toolbar-t4aF6vsr.js";import"./preload-helper-Cc2_yIPf.js";import"./MenuListItem-BGVKEzIM.js";import"./MenuItem-DSDVSdKL.js";import"./CheckboxUncheckedIcon-Bxf-Z0Ny.js";import"./RadioUncheckedIcon-D7Forzmr.js";import"./ItemMedia-BkaFl7YX.js";import"./Avatar-D5ejQC2L.js";import"./AvatarGroup-pZn7_Hnk.js";import"./ItemLabel-CZZsCEBi.js";import"./Heading-B62YbUQ8.js";import"./useHighlightedText-DrXs5ARP.js";import"./ItemControls-DxZwYBlC.js";import"./Badge-DakQ_ooc.js";import"./Tooltip-CfIbxb_W.js";import"./ChevronRight-Vb4FEV6b.js";import"./ArrowUndo-DNTrsBCI.js";import"./MenuListDivider-B7GAi5Kj.js";import"./Fieldset-sXNhNTeG.js";import"./Field-Do9LfNoA.js";import"./Label-Ch2cl7wL.js";import"./Input-CVLmoyI4.js";import"./SearchField-0Y9a3sbc.js";import"./MagnifyingGlass-asWGm_ME.js";import"./FieldBase-BybGrojy.js";import"./Typography-z9HgrCC2.js";import"./useMenu-zMhFd5Ju.js";import"./InformationSquare-BC6md9kr.js";import"./Paperclip-gps_cfs6.js";import"./Eye-BmVwOnct.js";import"./MenuHamburger-C-aSHA5_.js";import"./useDropdownMenuController-Dj95a6Yf.js";import"./Dropdown-CPSoxfyr.js";import"./Plus-DM17n_Wh.js";import"./ButtonGroup-57G882s-.js";import"./ButtonGroupDivider-n1BDx0p9.js";import"./ChevronUpDown-BnwOmR_z.js";import"./ToolbarMenu-D8eVNYGZ.js";import"./ToolbarSearch-DvZbf6bx.js";const ot={title:"Toolbar/SelectDateFilter",component:m,parameters:{},args:{}},o=i(()=>{const r=l({filters:[{...s,as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"Datepicker"),n=i(()=>{const r=l({filters:[{...s,as:m,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"RemovableDatepicker"),a=i(()=>{const r=s.items.map(d=>({...d,name:"date"})),e=l({filters:[{...s,items:r,name:"date",as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...e})}),t.jsx("hr",{}),JSON.stringify(e.filterState)]})},"CustomName"),nt=["Datepicker","RemovableDatepicker","CustomName"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
