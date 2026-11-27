var F=Object.defineProperty;var i=(r,e)=>F(r,"name",{value:e,configurable:!0});import{a6 as t}from"./iframe-qf9-WDF6.js";import{S as m}from"./SelectDateFilter-CE0YUmtV.js";import{t as s}from"./example.data-C_UCXHGI.js";import{a as l}from"./example.hooks-CoFhC0AJ.js";import{T as p,a as c}from"./Toolbar-DBfE8GuP.js";import"./preload-helper-Cc2_yIPf.js";import"./MenuListItem-DipxFI8g.js";import"./MenuItem-BwnUXeQs.js";import"./CheckboxUncheckedIcon-BFS8hvm2.js";import"./RadioUncheckedIcon-DwubkL11.js";import"./ItemMedia-Fak15njE.js";import"./Avatar--Y6TPEGR.js";import"./AvatarGroup-DIzE-PAU.js";import"./ItemLabel-99ZX_KO1.js";import"./Heading-BHDuq3TV.js";import"./useHighlightedText-CpVNHUyQ.js";import"./ItemControls-BmhBXfnl.js";import"./Badge-DOvVfylv.js";import"./Tooltip-DFjSrT0M.js";import"./ChevronRight-NAoaHsS_.js";import"./ArrowUndo-DrB_qkGV.js";import"./MenuListDivider-jbpIOTgw.js";import"./Fieldset-DIw49Njk.js";import"./Field-gppFe246.js";import"./Label-CcdUHTDK.js";import"./Input-tPq75GZ4.js";import"./SearchField-_nVMBmov.js";import"./MagnifyingGlass-Cdozzsty.js";import"./FieldBase-D7ZJbpSW.js";import"./Typography-BcM5UJCL.js";import"./useMenu-DZRK4ukY.js";import"./InformationSquare-Diuvkxkj.js";import"./Paperclip-Dwa3nhCe.js";import"./Eye-BXwEdR5X.js";import"./MenuHamburger-BHbrSeUX.js";import"./useDropdownMenuController-CAFbDRJV.js";import"./Dropdown-uPy0PMPK.js";import"./Plus-BtfN9nMF.js";import"./ButtonGroup-DXN6Nzfu.js";import"./ButtonGroupDivider-BzbYKi0l.js";import"./ChevronUpDown-C83RLQgx.js";import"./ToolbarMenu-B5A5zOjS.js";import"./ToolbarSearch-DTGKesz7.js";const ot={title:"Toolbar/SelectDateFilter",component:m,parameters:{},args:{}},o=i(()=>{const r=l({filters:[{...s,as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"Datepicker"),n=i(()=>{const r=l({filters:[{...s,as:m,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"RemovableDatepicker"),a=i(()=>{const r=s.items.map(d=>({...d,name:"date"})),e=l({filters:[{...s,items:r,name:"date",as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...e})}),t.jsx("hr",{}),JSON.stringify(e.filterState)]})},"CustomName"),nt=["Datepicker","RemovableDatepicker","CustomName"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
