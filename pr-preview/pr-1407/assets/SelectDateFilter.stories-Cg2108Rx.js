import{a7 as t}from"./iframe-CsUY_6Pm.js";import{S as a}from"./SelectDateFilter-DzoFmL7z.js";import{t as n}from"./example.data-7dXQV4y2.js";import{a as m}from"./example.hooks-DCPPAEFU.js";import{T as s,a as l}from"./Toolbar-Ct24gl9B.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-ElI9jTJU.js";import"./MenuListItem-B8CvvGsY.js";import"./MenuItem-CpFCHI6p.js";import"./CheckboxUncheckedIcon-Cm3qK4Qn.js";import"./RadioUncheckedIcon-YUw-sVNU.js";import"./ItemMedia-B6mVrqKC.js";import"./Avatar-CSJo9Is0.js";import"./AvatarGroup-YQCApjdS.js";import"./ItemLabel-CCNLeNoZ.js";import"./Heading-DbOWCbW_.js";import"./useHighlightedText-CEZnR4nZ.js";import"./ItemControls-BSDhx_cJ.js";import"./Badge-BOHDhK-I.js";import"./Tooltip-C1hkokj-.js";import"./ChevronRight-JfwdXccy.js";import"./ArrowUndo-BxC8gcYi.js";import"./MenuListDivider-MGuOTVtf.js";import"./Fieldset-DMfzwd9R.js";import"./Field-BAiQ3Kmu.js";import"./Label-Dkp18zGC.js";import"./Input-DQsW0xWY.js";import"./Datepicker-DixXJtHC.js";import"./SearchField-R79aEMhJ.js";import"./MagnifyingGlass-CUSCYlwB.js";import"./FieldBase-Bxx9Lpmm.js";import"./Typography-DW6BWOsI.js";import"./useMenu-C86uaFsI.js";import"./MenuListHeading-Y7mmwOXd.js";import"./InformationSquare-DR0XxH_N.js";import"./Paperclip-ocfEm49n.js";import"./Eye-o_1ZzJ4p.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-DJzN0Krn.js";import"./useDropdownMenuController-wpJ_VJBg.js";import"./Dropdown-v8qBzdyM.js";import"./Plus-BIbNWuxu.js";import"./ButtonGroup-BnfYb0Ol.js";import"./ButtonGroupDivider-B6ldKUoe.js";import"./ChevronUpDown-jcMUlXO8.js";import"./ToolbarMenu-wuIiyaem.js";import"./ToolbarSearch-2A_oz84O.js";const at={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const mt=["Datepicker","RemovableDatepicker","CustomName"];export{o as CustomName,e as Datepicker,i as RemovableDatepicker,mt as __namedExportsOrder,at as default};
