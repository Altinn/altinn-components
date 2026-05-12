import{j as t}from"./iframe-aFNUvxii.js";import{S as a}from"./SelectDateFilter-Q0ejds9M.js";import{u as m,t as n}from"./example.hooks-BWnZHl05.js";import{T as s,a as l}from"./Toolbar-T05afgFJ.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-CI1maQ0_.js";import"./useId-W_OLMGMd.js";import"./Datepicker-DYgTKv7d.js";import"./index-DmNdTbFH.js";import"./ChevronRight-B0RIPM-U.js";import"./Button-cD6HSwip.js";import"./button-CWls7pzR.js";import"./use-merge-refs-C-1ExRDf.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-DkdKLAWt.js";import"./MenuItem-BFBnyLEl.js";import"./ItemMedia-Di01sVY_.js";import"./XMark-BNsj9R6R.js";import"./Avatar-DUHlMNex.js";import"./Skeleton-Cd5GNeeI.js";import"./AvatarGroup-GPJvZ4ub.js";import"./Icon-DC5Qp50u.js";import"./Checkmark-CrF1sW3U.js";import"./Heading-F0__TKrp.js";import"./useHighlightedText-DGtjyph8.js";import"./ItemControls-BgCWQjxP.js";import"./Badge-Di-Vgiqx.js";import"./Tooltip-e1n-OWVf.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuListHeading-Bej_UvLn.js";import"./Fieldset-CjLDDJeI.js";import"./index-BLgLADsA.js";import"./Label-CFD6MxAu.js";import"./Input-KxxUuxk7.js";import"./input-Dq8WBvBp.js";import"./SearchField-CnqR4pyv.js";import"./MagnifyingGlass-D9TxgtgQ.js";import"./FieldBase-Bx4PyUkS.js";import"./Typography-Co9p8t4Z.js";import"./useMenu-Cpxr8t1F.js";import"./index-BwJjPBKb.js";import"./InformationSquare-WTyA5DCk.js";import"./Paperclip-CY9V8ZeY.js";import"./Eye-CQBeI3AO.js";import"./MenuHamburger-CgxLJfBy.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-MoNgRnPR.js";import"./Plus-BzMVfyBN.js";import"./Dropdown-C8yUJUHT.js";import"./ChevronUpDown-sl0ayiQO.js";import"./ButtonGroup-Cv-I5W75.js";import"./ButtonGroupDivider-BWsibbzd.js";import"./ToolbarMenu-BAz5qz2T.js";import"./ToolbarSearch-BNmVcsKD.js";const Ft={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const ut=["Datepicker","RemovableDatepicker","CustomName"];export{o as CustomName,e as Datepicker,i as RemovableDatepicker,ut as __namedExportsOrder,Ft as default};
