var F=Object.defineProperty;var i=(r,e)=>F(r,"name",{value:e,configurable:!0});import{a6 as t}from"./iframe-DwHkmT0f.js";import{S as m}from"./SelectDateFilter-BHYM_aMo.js";import{t as s}from"./example.data-C2DvXdHN.js";import{a as l}from"./example.hooks-zEn5BG6s.js";import{T as p,a as c}from"./Toolbar-BF0fcXVK.js";import"./preload-helper-Cc2_yIPf.js";import"./MenuListItem-CtEoku_b.js";import"./MenuItem-CZxJMuiO.js";import"./CheckboxUncheckedIcon-CVogy-dq.js";import"./RadioUncheckedIcon-DD-mj64d.js";import"./ItemMedia-CVGrPGLV.js";import"./Avatar-S5z4qvLu.js";import"./AvatarGroup-Cl1VUjUq.js";import"./ItemLabel-hjkm06Ot.js";import"./Heading-FTp623yO.js";import"./useHighlightedText-DRj0X6ck.js";import"./ItemControls-CCH_CI8A.js";import"./Badge-na_CnfyR.js";import"./Tooltip-DjcFah2J.js";import"./ChevronRight-B3vSh-CA.js";import"./ArrowUndo-COZnsPlQ.js";import"./MenuListDivider-CROwDY0z.js";import"./Fieldset-tjXBpqdb.js";import"./Field-BDHCaXkr.js";import"./Label-B7Jjr_ur.js";import"./Input-D6xvIcky.js";import"./SearchField-BE9AHyrE.js";import"./MagnifyingGlass-BwHWlmqj.js";import"./FieldBase-CpcKIkx4.js";import"./Typography-BKrXxvhH.js";import"./useMenu-D8t-dYWs.js";import"./InformationSquare-CaoePqPY.js";import"./Paperclip-DY0uJU8B.js";import"./Eye-VigAgyF8.js";import"./MenuHamburger-Cqjxk-FQ.js";import"./useDropdownMenuController-CWhiY6a5.js";import"./Dropdown-C_Uvx9iV.js";import"./Plus-Ridmc-ni.js";import"./ButtonGroup-DYVDsbWZ.js";import"./ButtonGroupDivider-nx6LDsuT.js";import"./ChevronUpDown-DfuKOSo-.js";import"./ToolbarMenu-BoysZjSy.js";import"./ToolbarSearch-CazkYMmT.js";const ot={title:"Toolbar/SelectDateFilter",component:m,parameters:{},args:{}},o=i(()=>{const r=l({filters:[{...s,as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"Datepicker"),n=i(()=>{const r=l({filters:[{...s,as:m,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"RemovableDatepicker"),a=i(()=>{const r=s.items.map(d=>({...d,name:"date"})),e=l({filters:[{...s,items:r,name:"date",as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...e})}),t.jsx("hr",{}),JSON.stringify(e.filterState)]})},"CustomName"),nt=["Datepicker","RemovableDatepicker","CustomName"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
