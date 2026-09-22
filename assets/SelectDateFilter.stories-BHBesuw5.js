import{a7 as t}from"./iframe-Ca4u80-y.js";import{S as a}from"./SelectDateFilter-D2EtSi_X.js";import{t as n}from"./example.data-DeUwQLY4.js";import{a as s}from"./example.hooks-DJlamFd4.js";import{T as m,a as l}from"./Toolbar-BBERRx06.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-qhNnPASD.js";import"./MenuListItem-MwOjEGoN.js";import"./MenuItem-BYM3QzRG.js";import"./ItemMedia-33czU3Hl.js";import"./Avatar-D0Cbhk4B.js";import"./AvatarGroup-ChCS9Nw5.js";import"./Checkmark-DdyDkuo2.js";import"./ItemLabel-DrPryDvn.js";import"./Heading-DWBFau_k.js";import"./useHighlightedText-DqjIK10c.js";import"./ItemControls-EuOl9yJJ.js";import"./Badge-nrZ8AGCl.js";import"./Tooltip-BqzPqZJ1.js";import"./ChevronRight-eVASrmJg.js";import"./ArrowUndo-DOf__dU6.js";import"./MenuListDivider-R2CXinbT.js";import"./Fieldset-DIzeyMyA.js";import"./Field-CaS5A3Xo.js";import"./Label-dGJaogAG.js";import"./Input-BzcsSDVe.js";import"./Datepicker-CgNu2cE2.js";import"./SearchField-VyNSBwjR.js";import"./MagnifyingGlass-ePzGqa9d.js";import"./FieldBase-BaoqxAAt.js";import"./Typography-DWDEZq_R.js";import"./useMenu-D83_Vp30.js";import"./MenuListHeading-B4K-woqM.js";import"./InformationSquare-C5WU0eyN.js";import"./Paperclip-Ck1kHMdS.js";import"./Eye-DePIxeVK.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-D2oXTqoK.js";import"./useDropdownMenuController-BCGdba1O.js";import"./Dropdown-CqSqE0dA.js";import"./Plus-Oh3Xr98D.js";import"./ButtonGroup-DxWQp11R.js";import"./ButtonGroupDivider-lZfdxe4t.js";import"./ChevronUpDown-D7s4rO6j.js";import"./ToolbarMenu-NSIS5DTX.js";import"./ToolbarSearch-B76M7lyM.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
