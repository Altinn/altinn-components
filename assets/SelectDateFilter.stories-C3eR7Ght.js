import{j as t}from"./iframe-BFO1Hsm7.js";import{S as a}from"./SelectDateFilter-BCmpe1jv.js";import{u as m,t as n}from"./example.hooks-CwOwHjlV.js";import{T as s,a as l}from"./Toolbar-eYS2EjXg.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-CSUnA5tv.js";import"./useId-Bk4Ffxqs.js";import"./Datepicker-DcxHZcwO.js";import"./index-q4P8UESO.js";import"./ChevronRight-CdUbwk3C.js";import"./Button-D67YnkXJ.js";import"./tooltip-DUJ67ouq.js";import"./MenuListItem-DzO3mXQV.js";import"./MenuItem-C9MWQovM.js";import"./ItemMedia-C5bbkB29.js";import"./XMark-DHT-JiZe.js";import"./Avatar-KSmNIbNE.js";import"./Skeleton-BRac3_14.js";import"./AvatarGroup-V6EVtbEK.js";import"./Icon-B4PZu81w.js";import"./Checkmark-BeWey6nu.js";import"./Heading-BaJonbem.js";import"./useHighlightedText-BBNMb3RU.js";import"./ItemControls-Dko-TfIa.js";import"./Badge-DsEojOp1.js";import"./Tooltip-rGuNyqhX.js";import"./MenuListHeading-D6MF194z.js";import"./Fieldset-DYYh48wP.js";import"./Label-D5tsUrXq.js";import"./Input-D60Cokb5.js";import"./SearchField-BsaRMZXP.js";import"./MagnifyingGlass-BT5t3YH7.js";import"./FieldBase-BLwJwwaJ.js";import"./Typography-Bd9N_lP-.js";import"./useMenu-kKDgIapy.js";import"./index-CzpMp7Co.js";import"./InformationSquare-Csa1evZE.js";import"./Paperclip-dS4z7Edu.js";import"./Eye-BpkaW8HI.js";import"./MenuHamburger-rt2ExzIR.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-CDJC1UYs.js";import"./Plus-CzDIu3KD.js";import"./Dropdown-DNakKmHK.js";import"./ChevronUpDown-X5lIP4sr.js";import"./ButtonGroup-VRxYnWM6.js";import"./ButtonGroupDivider-uQMX6KWa.js";import"./ToolbarMenu-BHkHtwFy.js";import"./ToolbarSearch-Dyliippy.js";const st={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const lt=["Datepicker","RemovableDatepicker","CustomName"];export{o as CustomName,e as Datepicker,i as RemovableDatepicker,lt as __namedExportsOrder,st as default};
