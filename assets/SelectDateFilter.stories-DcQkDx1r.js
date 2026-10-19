var F=Object.defineProperty;var i=(r,e)=>F(r,"name",{value:e,configurable:!0});import{a7 as t}from"./iframe-BhbNl8M-.js";import{S as m}from"./SelectDateFilter-BoDa5Iro.js";import{t as s}from"./example.data-DB_QxykC.js";import{a as l}from"./example.hooks-PEICMzLN.js";import{T as p,a as c}from"./Toolbar-Cd-nnA0c.js";import"./preload-helper-Cc2_yIPf.js";import"./DatepickerFilter-BVAJ0jKv.js";import"./MenuListItem-CmOECRgU.js";import"./MenuItem-C2AE0J9V.js";import"./ItemMedia-1lh8-vEh.js";import"./Avatar-BNyDKZi7.js";import"./AvatarGroup-B4pMcHMh.js";import"./Checkmark-CzAA5vNN.js";import"./ItemLabel-BJSi7rzf.js";import"./Heading-Cykhux0L.js";import"./useHighlightedText-LhTntwcL.js";import"./ItemControls-Enh4UL9O.js";import"./Badge-np8uN8Yi.js";import"./Tooltip-8dIP2lk7.js";import"./ChevronRight-DG59p-Nv.js";import"./ArrowUndo-D9tJ-Erq.js";import"./MenuListDivider-DzxdVQ89.js";import"./Fieldset-jGHBVSiP.js";import"./Field-Qg24LC8p.js";import"./Label-BJPwmzpN.js";import"./Input-jGspNcB3.js";import"./Datepicker-Dq6K6wyH.js";import"./SearchField-ClYBiZmS.js";import"./MagnifyingGlass-CzKquxqQ.js";import"./FieldBase--SCvu2WQ.js";import"./Typography-DcyIPmTi.js";import"./useMenu-6KerkDf-.js";import"./MenuListHeading-DAQ9yky2.js";import"./InformationSquare-9qL3pT6L.js";import"./Paperclip-5XsvK0HN.js";import"./Eye-DNiUrCQs.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-DEHtIGqF.js";import"./useDropdownMenuController-BrJ75r99.js";import"./Dropdown--p27U_G_.js";import"./Plus-BcmDIJkz.js";import"./ButtonGroup-Tx5tOZpy.js";import"./ButtonGroupDivider-DzYj1AlG.js";import"./ChevronUpDown-DD9NYfqC.js";import"./ToolbarMenu-CGZc-SL-.js";import"./ToolbarSearch-Dh0sqSUB.js";const mt={title:"Toolbar/SelectDateFilter",component:m,parameters:{},args:{}},o=i(()=>{const r=l({filters:[{...s,as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"Datepicker"),n=i(()=>{const r=l({filters:[{...s,as:m,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"RemovableDatepicker"),a=i(()=>{const r=s.items.map(d=>({...d,name:"date"})),e=l({filters:[{...s,items:r,name:"date",as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...e})}),t.jsx("hr",{}),JSON.stringify(e.filterState)]})},"CustomName");o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...a.parameters?.docs?.source}}};const lt=["Datepicker","RemovableDatepicker","CustomName"];export{a as CustomName,o as Datepicker,n as RemovableDatepicker,lt as __namedExportsOrder,mt as default};
