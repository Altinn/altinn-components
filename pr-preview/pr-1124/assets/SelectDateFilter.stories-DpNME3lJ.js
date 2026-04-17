import{j as t}from"./iframe-C30XMp4u.js";import{S as a}from"./SelectDateFilter-B7BM-lIb.js";import{u as m,t as n}from"./example.hooks-d98w33kK.js";import{T as s,a as l}from"./Toolbar-qbT0YoZ4.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-DCkDtO0Z.js";import"./useId-k4Xjw1TB.js";import"./Datepicker-BtGlYbX3.js";import"./index-Dfjgmy9H.js";import"./ChevronRight-cMtudnfA.js";import"./Button-DDYo0e3Y.js";import"./button-vIDiYGt4.js";import"./use-merge-refs-DdAPjJhd.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-Dweo6pop.js";import"./MenuItem-BItckqMb.js";import"./ItemMedia-DZiSht8H.js";import"./XMark-ZCF0kQw6.js";import"./Avatar-md5Lcy6_.js";import"./Skeleton-DYu3bsVd.js";import"./AvatarGroup-BxUIiam6.js";import"./Icon-BW7eZq3t.js";import"./Checkmark-BHVaOMRl.js";import"./Heading-r7KrHQRq.js";import"./useHighlightedText-BcdufPkD.js";import"./ItemControls-XLXkfke2.js";import"./Badge-BL5WZhsc.js";import"./MenuListHeading-0U1jptlM.js";import"./Fieldset-DDNOg6Y7.js";import"./index-MPuYdx8K.js";import"./Label-CZ9Sm67x.js";import"./Input-BZkkYvOZ.js";import"./input-BbRzGenc.js";import"./SearchField-GqHOGaRS.js";import"./MagnifyingGlass-BcLoywmE.js";import"./FieldBase-Cg7qaDyY.js";import"./Typography-C7Aiwmst.js";import"./useMenu-HLwWT2ab.js";import"./InformationSquare-Cu6RA9m9.js";import"./Paperclip-BzWyAbZP.js";import"./Eye-CAhWVSdJ.js";import"./MenuHamburger-C7Jlfysl.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-BEzXPzCy.js";import"./Plus-zIuJSXr8.js";import"./Dropdown-MMgMxLyt.js";import"./ChevronUpDown-7yy58H4K.js";import"./ButtonGroup-B8wqqWfc.js";import"./ButtonGroupDivider-BoJnk5BU.js";import"./Tooltip-BkHTwdrx.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-C0WyX5iw.js";import"./ToolbarSearch-wO_rsMns.js";const dt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const Ft=["Datepicker","RemovableDatepicker","CustomName"];export{o as CustomName,e as Datepicker,i as RemovableDatepicker,Ft as __namedExportsOrder,dt as default};
