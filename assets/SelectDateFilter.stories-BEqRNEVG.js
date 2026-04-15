import{j as t}from"./iframe-Bka3lqwZ.js";import{S as a}from"./SelectDateFilter-DvTMRnCZ.js";import{u as m,t as n}from"./example.hooks-CrWKXXXr.js";import{T as s,a as l}from"./Toolbar-DhjLmBa8.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-DmOTw-PR.js";import"./useId-BOUKUp4S.js";import"./Datepicker-0qEwfsgW.js";import"./index-97QH58ax.js";import"./ChevronRight-1C-HJkAE.js";import"./Button-DIVYOCsY.js";import"./button-CqWrgnGb.js";import"./use-merge-refs-CTw0OEaY.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-DQuvdYRk.js";import"./MenuItem-CQZjBmzk.js";import"./ItemMedia-Ca3m8l5m.js";import"./XMark-BopKFElT.js";import"./Avatar-DUWR3kRV.js";import"./Skeleton-ECUY2hPc.js";import"./AvatarGroup-mAK5Ma76.js";import"./Icon-DoXRGO_6.js";import"./Checkmark-Bf4nZE-q.js";import"./Heading-BxCaPg4n.js";import"./useHighlightedText-DGjnrdw2.js";import"./ItemControls-abhSx9yX.js";import"./Badge-Dr-ny6rj.js";import"./MenuListHeading-g29dlFn5.js";import"./Fieldset-CsRJap2-.js";import"./index-CQEQ6FSB.js";import"./Label-Bo_SdTne.js";import"./Input-tSTkuC7Q.js";import"./input-Dit64xtC.js";import"./SearchField-CSZgV0pa.js";import"./MagnifyingGlass-ohRS00MN.js";import"./FieldBase-BlSXl2oz.js";import"./Typography-CMwGEMpO.js";import"./useMenu-Cu8ej4cj.js";import"./InformationSquare-BNmERE6I.js";import"./Paperclip-D_7uE9LG.js";import"./Eye-1G-XdHUO.js";import"./MenuHamburger-Jx8psQzX.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-DQoP6UHy.js";import"./Plus-Cr5OOVFj.js";import"./Dropdown-BPOECmw-.js";import"./ChevronUpDown-BuMNK9b7.js";import"./ButtonGroup-DnIZGAD0.js";import"./ButtonGroupDivider-CRf9txov.js";import"./Tooltip-tPkJ6t7_.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-DxiQcjG0.js";import"./ToolbarSearch-uDp7PokP.js";const dt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
