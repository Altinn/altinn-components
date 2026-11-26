var F=Object.defineProperty;var i=(r,e)=>F(r,"name",{value:e,configurable:!0});import{a6 as t}from"./iframe-Dhr5kNpI.js";import{S as m}from"./SelectDateFilter-ix2CiD55.js";import{t as s}from"./example.data-ogxW_Zf8.js";import{a as l}from"./example.hooks-CBmREjd1.js";import{T as p,a as c}from"./Toolbar-DHeeC9bw.js";import"./preload-helper-Cc2_yIPf.js";import"./MenuListItem-DSvu2y_O.js";import"./MenuItem-B7bCDHld.js";import"./CheckboxUncheckedIcon-CniL-5fW.js";import"./RadioUncheckedIcon-DgOCQagW.js";import"./ItemMedia-C0ReNhrI.js";import"./Avatar-DFghK3As.js";import"./AvatarGroup-DUSzafHi.js";import"./ItemLabel-D7TXcLH5.js";import"./Heading-DmbuxGS8.js";import"./useHighlightedText-D3bt4yNA.js";import"./ItemControls-CiyO-qr-.js";import"./Badge-DkiOJ260.js";import"./Tooltip-w2q6vIcA.js";import"./ChevronRight-BnrL2uT7.js";import"./ArrowUndo-Cco96Qbs.js";import"./MenuListDivider-BDnQXOa-.js";import"./Fieldset-CYesrPaA.js";import"./Field-BxmDkK6m.js";import"./Label-DR9BIR4K.js";import"./Input-jpu5auKu.js";import"./SearchField-Daiwk--y.js";import"./MagnifyingGlass-qp743Sh-.js";import"./FieldBase-C_75hFZi.js";import"./Typography-CiPthQfi.js";import"./useMenu-BGMvW90K.js";import"./InformationSquare-B4yRDNra.js";import"./Paperclip-BfqrsLsb.js";import"./Eye-82Qs17rD.js";import"./MenuHamburger-CsHjEoZC.js";import"./useDropdownMenuController-CYf_FFxY.js";import"./Dropdown-CYaHmHFx.js";import"./Plus-CJyVTS1m.js";import"./ButtonGroup-DjJP_8QL.js";import"./ButtonGroupDivider-xXSQP4fw.js";import"./ChevronUpDown-ClFjd4Wf.js";import"./ToolbarMenu-4nusd3Gy.js";import"./ToolbarSearch-Cs9or_Ii.js";const ot={title:"Toolbar/SelectDateFilter",component:m,parameters:{},args:{}},o=i(()=>{const r=l({filters:[{...s,as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"Datepicker"),n=i(()=>{const r=l({filters:[{...s,as:m,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"RemovableDatepicker"),a=i(()=>{const r=s.items.map(d=>({...d,name:"date"})),e=l({filters:[{...s,items:r,name:"date",as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...e})}),t.jsx("hr",{}),JSON.stringify(e.filterState)]})},"CustomName"),nt=["Datepicker","RemovableDatepicker","CustomName"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
