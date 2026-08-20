import{a7 as t}from"./iframe-CfUrJ-sW.js";import{S as a}from"./SelectDateFilter-ZeoVgXQX.js";import{t as n}from"./example.data-CVZJCMfn.js";import{a as s}from"./example.hooks-BulrGnz_.js";import{T as m,a as l}from"./Toolbar-DQtv3B0o.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-DaGlV4sE.js";import"./MenuListItem-CpLdOTrv.js";import"./MenuItem-Dw5geetP.js";import"./ItemMedia-BbdQksB6.js";import"./Avatar-CQ8_o-yu.js";import"./AvatarGroup-BJfCcue9.js";import"./Checkmark-8dE5LNjt.js";import"./ItemLabel-7ZtyJqf1.js";import"./Heading-CC1NzZuf.js";import"./useHighlightedText-DCiIYobu.js";import"./ItemControls-K0n5tZKI.js";import"./Badge-Cy4UcitB.js";import"./Tooltip-DV6u4Pgt.js";import"./ChevronRight-BQqjok9o.js";import"./ArrowUndo-B07mJyDj.js";import"./MenuListDivider-BCZC89qs.js";import"./Fieldset-DcqTRWQi.js";import"./Field-6dtFYXL2.js";import"./Label-sGHyqM38.js";import"./Input-CJlrdXWO.js";import"./Datepicker-xxQSSCVD.js";import"./SearchField-D230b6Yn.js";import"./MagnifyingGlass-DeqXe_2Y.js";import"./FieldBase-CrwLGD3E.js";import"./Typography-CAlmT_0b.js";import"./useMenu-VNE_nv00.js";import"./MenuListHeading-C_KnsA5D.js";import"./InformationSquare-BZJWkHLO.js";import"./Paperclip-CxVl8ATV.js";import"./Eye-BzDbDA4w.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-HF5Rvs2-.js";import"./useDropdownMenuController-BagG9o2A.js";import"./Dropdown-Dwhf6SNg.js";import"./Plus-hdfH71QK.js";import"./ButtonGroup-9eoCQEvr.js";import"./ButtonGroupDivider-BBlyq7nZ.js";import"./ChevronUpDown-CuHYzhSe.js";import"./ToolbarMenu-CJYOognW.js";import"./ToolbarSearch-DErDtCpx.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
