var F=Object.defineProperty;var i=(r,e)=>F(r,"name",{value:e,configurable:!0});import{a6 as t}from"./iframe-BW6sNfUG.js";import{S as m}from"./SelectDateFilter-BJHlE3YW.js";import{t as s}from"./example.data-DgEJmBbZ.js";import{a as l}from"./example.hooks-C8ngUtG_.js";import{T as p,a as c}from"./Toolbar-D6qimzgG.js";import"./preload-helper-Cc2_yIPf.js";import"./MenuListItem-BekZrZTE.js";import"./MenuItem-C4PV3Kj2.js";import"./CheckboxUncheckedIcon-D8b9z956.js";import"./RadioUncheckedIcon-BmM-W-GL.js";import"./ItemMedia-C8rbfA3l.js";import"./Avatar-C64BSSKk.js";import"./AvatarGroup-Ccq8C8ES.js";import"./ItemLabel-Dcm3mA4k.js";import"./Heading-DZSCY0dD.js";import"./useHighlightedText-Dx6jhFuL.js";import"./ItemControls-Bqaen0yJ.js";import"./Badge-CSeOMfHV.js";import"./Tooltip-CNbHjlA7.js";import"./ChevronRight-DCXIgdRg.js";import"./ArrowUndo-gaLA-SPG.js";import"./MenuListDivider-Bd4QDS3f.js";import"./Fieldset-DUAqT7Qu.js";import"./Field-BCzysLpY.js";import"./Label-xW9KovlB.js";import"./Input-gnkfXNcC.js";import"./SearchField--GRE4W__.js";import"./MagnifyingGlass-Drdd_pqG.js";import"./FieldBase-CiEo5wf3.js";import"./Typography-DluWU8As.js";import"./useMenu-uJdjEIIP.js";import"./InformationSquare-1mOGr1dD.js";import"./Paperclip-CSajDkLH.js";import"./Eye-0jNHdSmc.js";import"./MenuHamburger-DnvsbnfP.js";import"./useDropdownMenuController-BlHO4qrZ.js";import"./Dropdown-bOP-opo8.js";import"./Plus-CdPXJ-Lc.js";import"./ButtonGroup-CkPO8wDs.js";import"./ButtonGroupDivider-CS_mNJWU.js";import"./ChevronUpDown-BC_Hbppl.js";import"./ToolbarMenu-B2LBYM88.js";import"./ToolbarSearch-hDsJFPue.js";const ot={title:"Toolbar/SelectDateFilter",component:m,parameters:{},args:{}},o=i(()=>{const r=l({filters:[{...s,as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"Datepicker"),n=i(()=>{const r=l({filters:[{...s,as:m,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"RemovableDatepicker"),a=i(()=>{const r=s.items.map(d=>({...d,name:"date"})),e=l({filters:[{...s,items:r,name:"date",as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...e})}),t.jsx("hr",{}),JSON.stringify(e.filterState)]})},"CustomName"),nt=["Datepicker","RemovableDatepicker","CustomName"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
