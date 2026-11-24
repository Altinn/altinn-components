var F=Object.defineProperty;var i=(r,e)=>F(r,"name",{value:e,configurable:!0});import{a6 as t}from"./iframe-Cb83cNHz.js";import{S as m}from"./SelectDateFilter-cyB0nNb7.js";import{t as s}from"./example.data-p4Dr1B-h.js";import{a as l}from"./example.hooks-Bk3o4-Mo.js";import{T as p,a as c}from"./Toolbar-B_gii49B.js";import"./preload-helper-Cc2_yIPf.js";import"./MenuListItem-Ddq1rF2u.js";import"./MenuItem-D8XMh2RI.js";import"./CheckboxUncheckedIcon-DNQ5ph0B.js";import"./RadioUncheckedIcon-CIyf3y8X.js";import"./ItemMedia-DqOX_qxk.js";import"./Avatar-CO1wzsxc.js";import"./AvatarGroup-DvuSBfuR.js";import"./ItemLabel-BEqC8Tjb.js";import"./Heading-I2bz7uBQ.js";import"./useHighlightedText-DXF5vSCe.js";import"./ItemControls-B2ksNOht.js";import"./Badge-DGYSahl0.js";import"./Tooltip-Bacli5fs.js";import"./ChevronRight-C-6CVVq7.js";import"./ArrowUndo-B-nYNH6F.js";import"./MenuListDivider-CU0QYw1K.js";import"./Fieldset-DKemD4C3.js";import"./Field-SexvxzIl.js";import"./Label-CzmEce_d.js";import"./Input-DdatSh7d.js";import"./SearchField-HWu0obAx.js";import"./MagnifyingGlass-C02McN1l.js";import"./FieldBase-DBBKjPwf.js";import"./Typography-BPADIB9F.js";import"./useMenu-D3abljbA.js";import"./InformationSquare-BiO92rri.js";import"./Paperclip-DIwapK62.js";import"./Eye-BoHdkO3C.js";import"./MenuHamburger-CnSpXwtX.js";import"./useDropdownMenuController-Q85VC5Dx.js";import"./Dropdown-ANdQRx3c.js";import"./Plus-DTEoGbp7.js";import"./ButtonGroup-BwzWu-pA.js";import"./ButtonGroupDivider-C8hWvas3.js";import"./ChevronUpDown-BJhYzIIl.js";import"./ToolbarMenu-C-UhfqZn.js";import"./ToolbarSearch-z6Bkm9UK.js";const ot={title:"Toolbar/SelectDateFilter",component:m,parameters:{},args:{}},o=i(()=>{const r=l({filters:[{...s,as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"Datepicker"),n=i(()=>{const r=l({filters:[{...s,as:m,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"RemovableDatepicker"),a=i(()=>{const r=s.items.map(d=>({...d,name:"date"})),e=l({filters:[{...s,items:r,name:"date",as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...e})}),t.jsx("hr",{}),JSON.stringify(e.filterState)]})},"CustomName"),nt=["Datepicker","RemovableDatepicker","CustomName"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
