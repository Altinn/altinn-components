var F=Object.defineProperty;var i=(r,e)=>F(r,"name",{value:e,configurable:!0});import{a6 as t}from"./iframe-Cf4UALw8.js";import{S as m}from"./SelectDateFilter-D0hNj62l.js";import{t as s}from"./example.data-DLDeyLEo.js";import{a as l}from"./example.hooks-BtPo9NIB.js";import{T as p,a as c}from"./Toolbar-D6KQC90D.js";import"./preload-helper-Cc2_yIPf.js";import"./MenuListItem-btKh04Ui.js";import"./MenuItem-CaK55ag2.js";import"./CheckboxUncheckedIcon-DFhHVdqs.js";import"./RadioUncheckedIcon-BM_T1ETq.js";import"./ItemMedia-BhGUpV92.js";import"./Avatar-DPyI2gzd.js";import"./AvatarGroup-C1FgnCDS.js";import"./ItemLabel-C9vfNdbz.js";import"./Heading-B2LEqvTq.js";import"./useHighlightedText-BGOVKO4Q.js";import"./ItemControls-C74k2R8j.js";import"./Badge-A8SwLO0m.js";import"./Tooltip-vDvnT1in.js";import"./ChevronRight-DcM2grMN.js";import"./ArrowUndo-ucfdJHsw.js";import"./MenuListDivider-CFCegYqH.js";import"./Fieldset-CpxHlq1s.js";import"./Field-t2hlVRTC.js";import"./Label-COfT1-eu.js";import"./Input-OKh8JSaI.js";import"./SearchField-CpDf3EHS.js";import"./MagnifyingGlass-Ckn3gk3A.js";import"./FieldBase-DSaLFDie.js";import"./Typography-CsGx0b_o.js";import"./useMenu-CfWidWjC.js";import"./InformationSquare-uRwoVJB-.js";import"./Paperclip-BlcRCygn.js";import"./Eye-BeIULvpA.js";import"./MenuHamburger-DwSFJE3g.js";import"./useDropdownMenuController-DWWF3mOW.js";import"./Dropdown-BbrYcScL.js";import"./Plus-sEq00D2Y.js";import"./ButtonGroup-Cw0djEV1.js";import"./ButtonGroupDivider-rSZ8QcFs.js";import"./ChevronUpDown-CYoTR3YM.js";import"./ToolbarMenu-BtMtO618.js";import"./ToolbarSearch-BNcqwGAT.js";const ot={title:"Toolbar/SelectDateFilter",component:m,parameters:{},args:{}},o=i(()=>{const r=l({filters:[{...s,as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"Datepicker"),n=i(()=>{const r=l({filters:[{...s,as:m,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"RemovableDatepicker"),a=i(()=>{const r=s.items.map(d=>({...d,name:"date"})),e=l({filters:[{...s,items:r,name:"date",as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...e})}),t.jsx("hr",{}),JSON.stringify(e.filterState)]})},"CustomName"),nt=["Datepicker","RemovableDatepicker","CustomName"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
