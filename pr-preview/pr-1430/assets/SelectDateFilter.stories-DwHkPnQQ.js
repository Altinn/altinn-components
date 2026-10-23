var F=Object.defineProperty;var i=(r,e)=>F(r,"name",{value:e,configurable:!0});import{a7 as t}from"./iframe-C320xpwq.js";import{S as m}from"./SelectDateFilter-bEhG5BYh.js";import{t as s}from"./example.data-Ddineaz7.js";import{a as l}from"./example.hooks-CaHKWHHP.js";import{T as p,a as c}from"./Toolbar-ENmDMeOW.js";import"./preload-helper-Cc2_yIPf.js";import"./DatepickerFilter-OOEU9ore.js";import"./MenuListItem-BqKoFA4P.js";import"./MenuItem-RBRvsnc4.js";import"./ItemMedia-DXXjb0Ql.js";import"./Avatar-DiTaWPNi.js";import"./AvatarGroup-C3ZQ77zA.js";import"./Checkmark-DXZzi-ZC.js";import"./ItemLabel-DED-sXIi.js";import"./Heading-C_k6PbIN.js";import"./useHighlightedText-DSoWCMjQ.js";import"./ItemControls-PDJ9i9Cv.js";import"./Badge-CKNKkFIN.js";import"./Tooltip-CJNSgf5y.js";import"./ChevronRight-0obYraG7.js";import"./ArrowUndo-DyZTn8wI.js";import"./MenuListDivider-DFJO6x9b.js";import"./Fieldset-CvKtF-g0.js";import"./Field-WScL1nVe.js";import"./Label-CArvchbl.js";import"./Input-Butkrn3v.js";import"./Datepicker-DGel50BG.js";import"./SearchField-BvARDiuT.js";import"./MagnifyingGlass-BNq1j2pw.js";import"./MenuListHeading-BpIk0QC_.js";import"./FieldBase-CS4MYGp7.js";import"./Typography-DeOYXGTy.js";import"./useMenu-CNq5BiUb.js";import"./InformationSquare-BVSTZ5OZ.js";import"./Paperclip-Dmu98igW.js";import"./Eye-CjG8fDMz.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-CkyOXOBY.js";import"./useDropdownMenuController-sAJd3n4N.js";import"./Dropdown-DOQP5U0B.js";import"./Plus-ZWKQtzTH.js";import"./ButtonGroup-BhnnwPdG.js";import"./ButtonGroupDivider-B_8ggyEP.js";import"./ChevronUpDown-DQPbDjfy.js";import"./ToolbarMenu-DBfahwsA.js";import"./ToolbarSearch-Cv5W9lo-.js";const mt={title:"Toolbar/SelectDateFilter",component:m,parameters:{},args:{}},o=i(()=>{const r=l({filters:[{...s,as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"Datepicker"),n=i(()=>{const r=l({filters:[{...s,as:m,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"RemovableDatepicker"),a=i(()=>{const r=s.items.map(d=>({...d,name:"date"})),e=l({filters:[{...s,items:r,name:"date",as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...e})}),t.jsx("hr",{}),JSON.stringify(e.filterState)]})},"CustomName");o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
}`,...a.parameters?.docs?.source}}};const lt=["Datepicker","RemovableDatepicker","CustomName"];export{a as CustomName,o as Datepicker,n as RemovableDatepicker,lt as __namedExportsOrder,mt as default};
