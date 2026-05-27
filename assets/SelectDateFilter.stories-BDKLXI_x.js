import{p as t}from"./iframe-WHERbRNQ.js";import{S as a}from"./SelectDateFilter-CKoNPJ9U.js";import{t as n,a as m}from"./example.hooks-BuyIo-WP.js";import{T as s,a as l}from"./Toolbar-CbThJBzB.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-Gq-dCZ2a.js";import"./index-CPQpJFkN.js";import"./MenuItem-BN2QDxa4.js";import"./ItemMedia-CZ4j0uoG.js";import"./XMark-5kXogJ_J.js";import"./useId-BfbJ7PbP.js";import"./Avatar-BsRLrsxS.js";import"./Skeleton-rNcUZaAx.js";import"./AvatarGroup-Bo3l1p7S.js";import"./Icon-jpLauUO9.js";import"./Checkmark-DwlfhjiK.js";import"./ItemLabel-CGpASln7.js";import"./Heading-POmwd9W2.js";import"./useHighlightedText-CCsQk8zm.js";import"./ItemControls-CXMEe70O.js";import"./Badge-DPxfDcUM.js";import"./Tooltip-C3iERcDF.js";import"./tooltip-C7TGaz5I.js";import"./ChevronRight-HD9xUhWG.js";import"./ArrowUndo-C_T3lMra.js";import"./MenuListHeading-B72ED6_O.js";import"./Fieldset-P-4sGzUV.js";import"./Label-DoBAei1C.js";import"./Input-D2AEap14.js";import"./Datepicker-BjGmarcU.js";import"./Button-DkTjWAj1.js";import"./SearchField-CjOGKjR9.js";import"./MagnifyingGlass-DkwRxD0r.js";import"./FieldBase-9wEEVFHi.js";import"./Typography-CVWBmure.js";import"./useMenu-DdbFwnvU.js";import"./index-Cy4S4a6-.js";import"./InformationSquare-DqU7vShm.js";import"./Paperclip-BEqO3Wfb.js";import"./Eye-CdP9e7BO.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-bKOv5Y63.js";import"./useDropdownMenuController-BgP7AVfL.js";import"./Dropdown-BvAU1fs3.js";import"./Plus-CNY0bkRi.js";import"./ButtonGroup-BZN8TM8O.js";import"./ButtonGroupDivider-B8E39iWl.js";import"./ChevronUpDown-DVQYeyQk.js";import"./ToolbarMenu-BLQwX8jB.js";import"./ToolbarSearch-vndqWzs1.js";const lt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const pt=["Datepicker","RemovableDatepicker","CustomName"];export{o as CustomName,e as Datepicker,i as RemovableDatepicker,pt as __namedExportsOrder,lt as default};
