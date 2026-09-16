import{a7 as t}from"./iframe-DK26OyRD.js";import{S as a}from"./SelectDateFilter-C9Z0NM8I.js";import{t as n}from"./example.data-BTOaaFNL.js";import{a as s}from"./example.hooks-BsqesKS0.js";import{T as m,a as l}from"./Toolbar-qYkONhEF.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-BQlnN9zB.js";import"./MenuListItem-CCTq2KJp.js";import"./MenuItem-X5ltzLjc.js";import"./ItemMedia-eL3WoD14.js";import"./Avatar-BffuF9Fo.js";import"./AvatarGroup-jikhFLm8.js";import"./Checkmark-CX2TKrXP.js";import"./ItemLabel-DbTlGETX.js";import"./Heading-KMM5EtCs.js";import"./useHighlightedText-dRdWwo97.js";import"./ItemControls-DNRsDyv1.js";import"./Badge-DJCWLgdY.js";import"./Tooltip-FdBCCTre.js";import"./ChevronRight-CgtnVZss.js";import"./ArrowUndo-zT6R2bHq.js";import"./MenuListDivider-DYsLXAeP.js";import"./Fieldset-CsuJmZZK.js";import"./Field-CP0Ba6gq.js";import"./Label-BicRbD_9.js";import"./Input-DpIg0EIy.js";import"./Datepicker-5c1B5dca.js";import"./SearchField-Mgah0vbC.js";import"./MagnifyingGlass-BHP7DrS9.js";import"./FieldBase-BNgybH8j.js";import"./Typography-DLY6k0s2.js";import"./useMenu-0kp9W_Tl.js";import"./MenuListHeading-BjuGDozt.js";import"./InformationSquare-f4aulv5D.js";import"./Paperclip-BQLfYgq_.js";import"./Eye-B7taC5ur.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-C6_sJYu4.js";import"./useDropdownMenuController-3-_gSr8-.js";import"./Dropdown-DKc7uAuj.js";import"./Plus-BMnL1FI5.js";import"./ButtonGroup-3GFoI2vi.js";import"./ButtonGroupDivider-DQquDaG5.js";import"./ChevronUpDown-rA6JKQ-i.js";import"./ToolbarMenu-BoazhCS_.js";import"./ToolbarSearch-B7D7KXDK.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
