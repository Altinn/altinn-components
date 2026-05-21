import{j as t}from"./iframe-BDpWuaMs.js";import{S as a}from"./SelectDateFilter-BSXSplQn.js";import{u as m,t as n}from"./example.hooks-DlucJHwt.js";import{T as s,a as l}from"./Toolbar-pR_aG4Pb.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-B7yB7xi-.js";import"./useId-BKmV9YxM.js";import"./Datepicker-8fAwqIgE.js";import"./index-DVPUayQ0.js";import"./ChevronRight-BJTZ2o3o.js";import"./Button-m_FXpHGO.js";import"./tooltip-DLcd2lCg.js";import"./MenuListItem-Cx4K7HTt.js";import"./MenuItem-BH8ygUTz.js";import"./ItemMedia-CHwsaJTx.js";import"./XMark-Cx5Omj8e.js";import"./Avatar-CT8r-oMP.js";import"./Skeleton-DC_TZb2p.js";import"./AvatarGroup-C5RQzawa.js";import"./Icon-4_NTN6mD.js";import"./Checkmark-DDYvLrrH.js";import"./Heading-D4nA4ZwT.js";import"./useHighlightedText-B13W4IFy.js";import"./ItemControls-BtUdj5a9.js";import"./Badge-DPODtVho.js";import"./Tooltip-X0E0nlNG.js";import"./MenuListHeading-XsWTeeVe.js";import"./Fieldset-DcdEioN4.js";import"./Label-7jR2lGh9.js";import"./Input-BoCHA0_0.js";import"./SearchField-D16JUOzv.js";import"./MagnifyingGlass-ItUM1KfV.js";import"./FieldBase-CGSHeWph.js";import"./Typography-DZRyPYmV.js";import"./useMenu-CniiHJSE.js";import"./index-BHwG3h0W.js";import"./InformationSquare-CS8D_BUZ.js";import"./Paperclip-Dm-BZpbK.js";import"./Eye-CswPk-T8.js";import"./MenuHamburger-B-lY5jCd.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-P2ixjEDe.js";import"./Plus-CPPR_4GW.js";import"./Dropdown-COTBq4xu.js";import"./ChevronUpDown-DV5kcrkO.js";import"./ButtonGroup-DdOFFFWL.js";import"./ButtonGroupDivider-koOAE-Up.js";import"./ToolbarMenu-DPri2kgb.js";import"./ToolbarSearch-BoGKCEjI.js";const st={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
