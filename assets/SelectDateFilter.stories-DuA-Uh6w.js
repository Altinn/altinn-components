import{a7 as t}from"./iframe-DmJr8_aG.js";import{S as a}from"./SelectDateFilter-kBC8MhYl.js";import{t as n}from"./example.data-DWKtXyiU.js";import{a as s}from"./example.hooks-sTVmDTSd.js";import{T as m,a as l}from"./Toolbar-Ow0gw22j.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-ByaWH-ma.js";import"./MenuListItem-CfwtrDuI.js";import"./MenuItem-BAlZe3i8.js";import"./ItemMedia-BAIJH8U4.js";import"./Avatar-CCqY5Lgk.js";import"./AvatarGroup-DMmx4iVX.js";import"./Checkmark-DdnTh1PT.js";import"./ItemLabel-BZFwI3Qg.js";import"./Heading-I9-B5g1d.js";import"./useHighlightedText-CDpmDje8.js";import"./ItemControls-C3FVXvI0.js";import"./Badge-BVYKJFB5.js";import"./Tooltip-DijYReqr.js";import"./ChevronRight-kR30sXpx.js";import"./ArrowUndo-oxrOyorJ.js";import"./MenuListDivider-DxYIfIoZ.js";import"./Fieldset-DGWXTvMx.js";import"./Field-z2_rHtRr.js";import"./Label-C9gCQCNv.js";import"./Input-CMjX-VJR.js";import"./Datepicker-B-gyiEND.js";import"./SearchField-DIEgnIKm.js";import"./MagnifyingGlass-CtP3bCTw.js";import"./FieldBase-B-b_vsUI.js";import"./Typography-B5vyFnSY.js";import"./useMenu-DCAZlAYS.js";import"./MenuListHeading-D4ODluyz.js";import"./InformationSquare-BDz-_K2o.js";import"./Paperclip-DJ1TOqbh.js";import"./Eye-Do4L6uio.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-EwCvIS65.js";import"./useDropdownMenuController-C3IF3Z6L.js";import"./Dropdown-CSc8TyC7.js";import"./Plus-CfdwKNmJ.js";import"./ButtonGroup-ps_HIdpu.js";import"./ButtonGroupDivider-Cq1pylXQ.js";import"./ChevronUpDown-7NIglTvp.js";import"./ToolbarMenu-BNi9oIII.js";import"./ToolbarSearch-_x_uSUqx.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
