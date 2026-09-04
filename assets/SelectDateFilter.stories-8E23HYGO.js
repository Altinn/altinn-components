import{a7 as t}from"./iframe-qmQCxFa-.js";import{S as a}from"./SelectDateFilter-CpP1Rqjm.js";import{t as n}from"./example.data-BYJHr0BE.js";import{a as s}from"./example.hooks-DGNHiW6j.js";import{T as m,a as l}from"./Toolbar-BL2LkXuC.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-Bd57rLAi.js";import"./MenuListItem-BJU-5Qr1.js";import"./MenuItem-BJ0MSgwv.js";import"./ItemMedia-Ch0GCbf9.js";import"./Avatar-GyPerWGw.js";import"./AvatarGroup-DMtwNmnR.js";import"./Checkmark-Dr10MfLv.js";import"./ItemLabel-DQygMXqb.js";import"./Heading-BfhEliS6.js";import"./useHighlightedText-DvW-80BF.js";import"./ItemControls-BNv7LYwf.js";import"./Badge-B_bsLQj9.js";import"./Tooltip-B9panzD0.js";import"./ChevronRight-D4PJikp-.js";import"./ArrowUndo-D_qzoLkT.js";import"./MenuListDivider-lNR4js8T.js";import"./Fieldset-CbQCH3wO.js";import"./Field-CR7g45g-.js";import"./Label-p7H0Mohi.js";import"./Input-UWmslA08.js";import"./Datepicker-pCKsqU9m.js";import"./SearchField-yI2IHctk.js";import"./MagnifyingGlass-BEFsIwDK.js";import"./FieldBase-uaodyCSq.js";import"./Typography-CwhPNAxM.js";import"./useMenu-BTzsKN7O.js";import"./MenuListHeading-DI3xzslm.js";import"./InformationSquare-dfx4dBae.js";import"./Paperclip-CI5w_XIV.js";import"./Eye-BxDxGbvo.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-Ctdi4oJ4.js";import"./useDropdownMenuController-D_F6_m9G.js";import"./Dropdown-Bfr6s4KY.js";import"./Plus-CuimFGeS.js";import"./ButtonGroup-_CfbD1Th.js";import"./ButtonGroupDivider-Q5Oe8DbS.js";import"./ChevronUpDown-DgWKinzw.js";import"./ToolbarMenu-B9iU3iDq.js";import"./ToolbarSearch-CpY2Nqk4.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
