import{j as t}from"./iframe-C5YDQF8t.js";import{S as a}from"./SelectDateFilter-ushNxWKl.js";import{u as m,t as n}from"./example.hooks-DSUGvcOm.js";import{T as s,a as l}from"./Toolbar-CTeUhJlX.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-CoYWG19L.js";import"./useId-D8_RB8wa.js";import"./Datepicker-CLsIJF3I.js";import"./index-Wv9BNi45.js";import"./ChevronRight-N4TcqxLw.js";import"./Button-BZAGm3c0.js";import"./button-CCJ82TCy.js";import"./use-merge-refs-C8sdFhVy.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-Dn26XcpH.js";import"./MenuItem-WQ9gCGs0.js";import"./ItemMedia-FRtQjDq_.js";import"./XMark-DdTqeOk-.js";import"./Avatar-BGjXXmrj.js";import"./Skeleton-Drx-E9Fo.js";import"./AvatarGroup-DQC0T1Vh.js";import"./Icon-CecLgcvt.js";import"./Checkmark-B_9eKN07.js";import"./Heading-DpfkgbSv.js";import"./useHighlightedText-n06FiY88.js";import"./ItemControls-B4P5BjHw.js";import"./Badge-BloMeVT9.js";import"./Tooltip-BhYnScUh.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuListHeading-b0m4AzBM.js";import"./Fieldset-CdSmZIIj.js";import"./index-B1UWFYtY.js";import"./Label-DtjEPZjV.js";import"./Input-CBT5zBbT.js";import"./input-D6WzUQ9f.js";import"./SearchField-DhRNQpTW.js";import"./MagnifyingGlass-CEZChhW1.js";import"./FieldBase-BeNWnE8F.js";import"./Typography-yp9Qf0rT.js";import"./useMenu-BhI6CQre.js";import"./InformationSquare-BnjsTJI5.js";import"./Paperclip-CumVX6Ac.js";import"./Eye-C7fKJvBF.js";import"./MenuHamburger-CzLGV6Fr.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-BRCJdC3F.js";import"./Plus-Dly6Qmjb.js";import"./Dropdown-r5WY9yG7.js";import"./ChevronUpDown-DdGlDybH.js";import"./ButtonGroup-Z2Cev14m.js";import"./ButtonGroupDivider-7keb6YJA.js";import"./ToolbarMenu-De6HvAf9.js";import"./ToolbarSearch-CnP_5iK4.js";const dt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
