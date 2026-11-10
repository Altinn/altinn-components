var F=Object.defineProperty;var i=(r,e)=>F(r,"name",{value:e,configurable:!0});import{a6 as t}from"./iframe-CfESZwGq.js";import{S as m}from"./SelectDateFilter-D8e0ZU8P.js";import{t as s}from"./example.data-B0bLx0CA.js";import{a as l}from"./example.hooks-DsUls3gQ.js";import{T as p,a as c}from"./Toolbar-ClShfmlT.js";import"./preload-helper-Cc2_yIPf.js";import"./MenuListItem-DFvxTJo7.js";import"./MenuItem-DfUUgYTt.js";import"./CheckboxUncheckedIcon-8mxNE8Kh.js";import"./RadioUncheckedIcon-BTuDB-oi.js";import"./ItemMedia-av47GhhR.js";import"./Avatar-DD7mVb1C.js";import"./AvatarGroup-BU05kps4.js";import"./ItemLabel-Bf911ckJ.js";import"./Heading-BMVjBYv7.js";import"./useHighlightedText-DZWCzlXV.js";import"./ItemControls-m0GxRmTW.js";import"./Badge-pBqwugki.js";import"./Tooltip-DUaFgqyq.js";import"./ChevronRight-B74pzmXz.js";import"./ArrowUndo-Ds3qFIs3.js";import"./MenuListDivider-PhbjEgIJ.js";import"./Fieldset-BU2pUu9Y.js";import"./Field-B6D7FR_A.js";import"./Label-C598VR2I.js";import"./Input-C1qnV1Va.js";import"./SearchField-Dzjcb6Jc.js";import"./MagnifyingGlass-CdYCPvzC.js";import"./FieldBase-B5R0NBwO.js";import"./Typography-DtLS48Hu.js";import"./useMenu-DCL6y2xK.js";import"./InformationSquare-BWZxY-Ir.js";import"./Paperclip-C-DJh7Uj.js";import"./Eye-B-byf9Tb.js";import"./MenuHamburger-Dm7Id1b9.js";import"./useDropdownMenuController-COgknKdL.js";import"./Dropdown-BfcDJKeS.js";import"./Plus-C15azGMz.js";import"./ButtonGroup-B_R5r7Ky.js";import"./ButtonGroupDivider-Li1M8dtA.js";import"./ChevronUpDown-D6O2HcLJ.js";import"./ToolbarMenu-Cd0RVmSQ.js";import"./ToolbarSearch-KAv3ICTy.js";const ot={title:"Toolbar/SelectDateFilter",component:m,parameters:{},args:{}},o=i(()=>{const r=l({filters:[{...s,as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"Datepicker"),n=i(()=>{const r=l({filters:[{...s,as:m,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"RemovableDatepicker"),a=i(()=>{const r=s.items.map(d=>({...d,name:"date"})),e=l({filters:[{...s,items:r,name:"date",as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...e})}),t.jsx("hr",{}),JSON.stringify(e.filterState)]})},"CustomName"),nt=["Datepicker","RemovableDatepicker","CustomName"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
