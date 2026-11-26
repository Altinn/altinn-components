var F=Object.defineProperty;var i=(r,e)=>F(r,"name",{value:e,configurable:!0});import{a6 as t}from"./iframe-ZrU_khjL.js";import{S as m}from"./SelectDateFilter-c_UGBckt.js";import{t as s}from"./example.data-DWL09qyM.js";import{a as l}from"./example.hooks-MyRtGcbF.js";import{T as p,a as c}from"./Toolbar-CQ34NIIN.js";import"./preload-helper-Cc2_yIPf.js";import"./MenuListItem-UylFm72-.js";import"./MenuItem-Cnq3lS8W.js";import"./CheckboxUncheckedIcon-D5_rz1Ju.js";import"./RadioUncheckedIcon-DY3mbg0B.js";import"./ItemMedia-RrQv9WL4.js";import"./Avatar-Cz72QNux.js";import"./AvatarGroup-Bva3vDjZ.js";import"./ItemLabel-Dkx3E56O.js";import"./Heading-CifG33hf.js";import"./useHighlightedText-CDx2rO1x.js";import"./ItemControls-BPrmzCX9.js";import"./Badge-CRj8wKrC.js";import"./Tooltip-Dbgfurbn.js";import"./ChevronRight-I-BGQZW2.js";import"./ArrowUndo-DApzQjif.js";import"./MenuListDivider-Frk75rx_.js";import"./Fieldset-CU6TXOhl.js";import"./Field-DiIDUIXB.js";import"./Label-C-OC1u9M.js";import"./Input-pcnWwkdM.js";import"./SearchField-BKf2_wz5.js";import"./MagnifyingGlass-Daj1V0tq.js";import"./FieldBase-Bti6f0lr.js";import"./Typography-FbkShcFO.js";import"./useMenu-D1AoRPPj.js";import"./InformationSquare-v_Dcjud5.js";import"./Paperclip-CUXuu9KH.js";import"./Eye-BngehXyN.js";import"./MenuHamburger-Bmp7ovD_.js";import"./useDropdownMenuController-BciGPL7q.js";import"./Dropdown-CeljIqa3.js";import"./Plus-DonfkQJy.js";import"./ButtonGroup-5s3aXo0U.js";import"./ButtonGroupDivider-BU9C7KH5.js";import"./ChevronUpDown-CE-Sc-55.js";import"./ToolbarMenu-CyEZ65ux.js";import"./ToolbarSearch-BeAEDhwm.js";const ot={title:"Toolbar/SelectDateFilter",component:m,parameters:{},args:{}},o=i(()=>{const r=l({filters:[{...s,as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"Datepicker"),n=i(()=>{const r=l({filters:[{...s,as:m,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"RemovableDatepicker"),a=i(()=>{const r=s.items.map(d=>({...d,name:"date"})),e=l({filters:[{...s,items:r,name:"date",as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...e})}),t.jsx("hr",{}),JSON.stringify(e.filterState)]})},"CustomName"),nt=["Datepicker","RemovableDatepicker","CustomName"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
