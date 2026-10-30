var F=Object.defineProperty;var i=(r,e)=>F(r,"name",{value:e,configurable:!0});import{a5 as t}from"./iframe-BenRi1VF.js";import{S as m}from"./SelectDateFilter-DX1Gff-x.js";import{t as s}from"./example.data-6oeH5NB3.js";import{a as l}from"./example.hooks-Co8i2f9B.js";import{T as p,a as c}from"./Toolbar-rm-H9COF.js";import"./preload-helper-Cc2_yIPf.js";import"./DatepickerFilter-TD965VvU.js";import"./MenuListItem-B2_-lc8x.js";import"./MenuItem-BzrbgLmX.js";import"./CheckboxUncheckedIcon-DGOw9jdP.js";import"./RadioUncheckedIcon-BIRg52Rg.js";import"./ItemMedia-BMPM4W1l.js";import"./Avatar-DXBUAkUc.js";import"./AvatarGroup-BAohrV6V.js";import"./ItemLabel-lIFyccob.js";import"./Heading-kdzgZTGG.js";import"./useHighlightedText-lRrcJCDS.js";import"./ItemControls-C62YDQLR.js";import"./Badge-3MbQAaWj.js";import"./Tooltip-BQW8S8Bj.js";import"./ChevronRight-B0Rwz_dW.js";import"./ArrowUndo-CMj0IFjQ.js";import"./MenuListDivider-v6fvRPAn.js";import"./Fieldset-BF_j--iQ.js";import"./Field-C3B81q5y.js";import"./Label-Dp2L8TH9.js";import"./Input-CYuEMmfW.js";import"./Datepicker-BGjPHAZg.js";import"./SearchField-BPBX14Ku.js";import"./MagnifyingGlass-DuDF4CwQ.js";import"./MenuListHeading-BcNWVjjO.js";import"./FieldBase-Blf3tEjx.js";import"./Typography-CY6bfOBd.js";import"./useMenu-DrYFOky6.js";import"./InformationSquare-g2viFsxF.js";import"./Paperclip-BXp6QEyX.js";import"./Eye-DVrqDlUx.js";import"./MenuHamburger-ByVQVVUg.js";import"./useDropdownMenuController-chWbBTBL.js";import"./Dropdown-CC6-2lKu.js";import"./Plus-EZwUhJBV.js";import"./ButtonGroup-DfExJwTd.js";import"./ButtonGroupDivider-Dgzv1WfP.js";import"./ChevronUpDown-C0PtXqfc.js";import"./ToolbarMenu-BlQft7A6.js";import"./ToolbarSearch-B5v2bacy.js";const st={title:"Toolbar/SelectDateFilter",component:m,parameters:{},args:{}},o=i(()=>{const r=l({filters:[{...s,as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"Datepicker"),n=i(()=>{const r=l({filters:[{...s,as:m,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"RemovableDatepicker"),a=i(()=>{const r=s.items.map(d=>({...d,name:"date"})),e=l({filters:[{...s,items:r,name:"date",as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...e})}),t.jsx("hr",{}),JSON.stringify(e.filterState)]})},"CustomName"),mt=["Datepicker","RemovableDatepicker","CustomName"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...a.parameters?.docs?.source}}};export{a as CustomName,o as Datepicker,n as RemovableDatepicker,mt as __namedExportsOrder,st as default};
