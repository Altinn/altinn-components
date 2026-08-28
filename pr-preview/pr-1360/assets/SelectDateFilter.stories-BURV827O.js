import{a7 as t}from"./iframe-BKPYfBaP.js";import{S as a}from"./SelectDateFilter-B-SzwvmL.js";import{t as n}from"./example.data-B46sAo-q.js";import{a as s}from"./example.hooks-D2IL6Zi9.js";import{T as m,a as l}from"./Toolbar-BGxc1toz.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-CU50_JRW.js";import"./MenuListItem-Dox6r-gI.js";import"./MenuItem-Bx6H1W-Q.js";import"./ItemMedia-CfPfvhkB.js";import"./Avatar-CBzwnIR6.js";import"./AvatarGroup-C3fpFOg5.js";import"./Checkmark-CamERl7S.js";import"./ItemLabel-CAfmR_Xk.js";import"./Heading-BlMy4Ad2.js";import"./useHighlightedText-BNKt0Eyh.js";import"./ItemControls-MYYKbbE3.js";import"./Badge-MDs50kx6.js";import"./Tooltip-BCY8jcz2.js";import"./ChevronRight-CfHO682k.js";import"./ArrowUndo-CbmIsveB.js";import"./MenuListDivider-Br9qCroM.js";import"./Fieldset-Bicpx1ya.js";import"./Field-DD7IzQnc.js";import"./Label-TLLhNVMu.js";import"./Input-CHWt3Nk0.js";import"./Datepicker-OZvwmeKX.js";import"./SearchField-BEBaG6GH.js";import"./MagnifyingGlass-BcIgrRKJ.js";import"./FieldBase-BZsWcTUs.js";import"./Typography-Cdqx97qL.js";import"./useMenu-BEKNpnot.js";import"./MenuListHeading-DETCOsyl.js";import"./InformationSquare-BcX77Iuf.js";import"./Paperclip-Bb_xnbxZ.js";import"./Eye-BpzoXZL1.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-BprZ1BzR.js";import"./useDropdownMenuController-BCeELClC.js";import"./Dropdown-BaK7GwBJ.js";import"./Plus-3k5Jqwe2.js";import"./ButtonGroup-CQeTBn3N.js";import"./ButtonGroupDivider-BMGjWlQi.js";import"./ChevronUpDown-BrFQGHzL.js";import"./ToolbarMenu-CRWcjhoA.js";import"./ToolbarSearch-RJ7X-8dT.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
