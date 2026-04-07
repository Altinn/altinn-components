import{j as t}from"./iframe-B1AqnzaQ.js";import{S as a}from"./SelectDateFilter-DOTXS8NX.js";import{u as m,t as n}from"./example.hooks-BhbiHell.js";import{T as s,a as l}from"./Toolbar-Dx8Mk40W.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-Co9BHkhM.js";import"./useId-D3sFZbtB.js";import"./Datepicker-Bq0PIoA0.js";import"./index-Ddi2Dmvi.js";import"./ChevronRight-BOPTtlba.js";import"./Button-7DVHhPF2.js";import"./button-HgPz3r79.js";import"./use-merge-refs-BdRYIeb-.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-D8LYIepd.js";import"./MenuItem-DJwKVNs9.js";import"./ItemMedia-D13Mes1V.js";import"./XMark-COJVLPGF.js";import"./Avatar-Dhw0Atsj.js";import"./Skeleton-6Posg2tf.js";import"./AvatarGroup-CFlzbLYZ.js";import"./Icon-68Gi_xA8.js";import"./Checkmark-Ci7lq5dQ.js";import"./Heading-Rbp_06UC.js";import"./useHighlightedText-D6JE0bc4.js";import"./Badge-DUhzLQsC.js";import"./MenuListHeading-DjQ5LdsQ.js";import"./Fieldset-RuWcFVb6.js";import"./index-DvbpjXY1.js";import"./Label-CufZoml2.js";import"./Input-DvVIUV_H.js";import"./input-CzzL8SnL.js";import"./SearchField-BEy1JMqM.js";import"./MagnifyingGlass-CXhi_3qD.js";import"./FieldBase-BfQZNQHG.js";import"./Typography-lvuy6SF3.js";import"./useMenu-5Lc1jfY6.js";import"./InformationSquare-DK3EJIq8.js";import"./Paperclip-BC4CQte1.js";import"./Eye-oWBsEYVn.js";import"./MenuHamburger-lneezgpH.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-BCLdmaKN.js";import"./Plus-DnGMnLWk.js";import"./Dropdown-CFvQqfeA.js";import"./ChevronUpDown-By7A9_Yz.js";import"./ButtonGroup-Kwyl4wzf.js";import"./ButtonGroupDivider-DeeJoG6r.js";import"./Tooltip-CmJVhKqX.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-E66ZXYok.js";import"./ToolbarSearch-BAP8C2qn.js";const ct={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const dt=["Datepicker","RemovableDatepicker","CustomName"];export{o as CustomName,e as Datepicker,i as RemovableDatepicker,dt as __namedExportsOrder,ct as default};
