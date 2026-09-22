import{a7 as t}from"./iframe-B1m5YS-z.js";import{S as a}from"./SelectDateFilter-CmQx-n2O.js";import{t as n}from"./example.data-B8Fvs1Jr.js";import{a as s}from"./example.hooks-CTb9pz68.js";import{T as m,a as l}from"./Toolbar-CuAz5sVZ.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-h8G4iD5t.js";import"./MenuListItem-ePeSws84.js";import"./MenuItem-D8A8Uy-E.js";import"./ItemMedia-CbRgbp9l.js";import"./Avatar-Xyg1H9P0.js";import"./AvatarGroup-DadNExt3.js";import"./Checkmark-O1YGJ3w1.js";import"./ItemLabel-CGVzYdTz.js";import"./Heading-Bdg559v2.js";import"./useHighlightedText-BJ6Snog5.js";import"./ItemControls-DSpZnzMx.js";import"./Badge-D748IrqG.js";import"./Tooltip-3MKLVI5w.js";import"./ChevronRight-JufomwYQ.js";import"./ArrowUndo-BPOEUuun.js";import"./MenuListDivider-l5hHlt1S.js";import"./Fieldset-Cc82T6Mv.js";import"./Field-3FnhLs8Z.js";import"./Label-Cd3ICTIz.js";import"./Input-DTp0ac3P.js";import"./Datepicker-C_-UEANo.js";import"./SearchField-txQSfSgU.js";import"./MagnifyingGlass-DOC044bk.js";import"./FieldBase-DF02WocK.js";import"./Typography-D-hgdwYf.js";import"./useMenu-Bzazr0mK.js";import"./MenuListHeading-BVCzBY5R.js";import"./InformationSquare-CbKMIE6G.js";import"./Paperclip-B_IjWUSF.js";import"./Eye-DLz3Vi9z.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-J5IpwwPp.js";import"./useDropdownMenuController-C9-W595w.js";import"./Dropdown-cC7dM-DJ.js";import"./Plus-yML150nC.js";import"./ButtonGroup-K8bkOi3q.js";import"./ButtonGroupDivider-D__YWNER.js";import"./ChevronUpDown-DM35aNN9.js";import"./ToolbarMenu-hf7W5wCR.js";import"./ToolbarSearch-B-1oJTYr.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const at=["Datepicker","RemovableDatepicker","CustomName"];export{o as CustomName,e as Datepicker,i as RemovableDatepicker,at as __namedExportsOrder,nt as default};
