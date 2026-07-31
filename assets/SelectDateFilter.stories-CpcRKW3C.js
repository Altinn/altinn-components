import{a7 as t}from"./iframe-CAjSv_nS.js";import{S as a}from"./SelectDateFilter-BGuifk_8.js";import{t as n}from"./example.data-Blv1zU9R.js";import{a as s}from"./example.hooks-C0Zu8iV2.js";import{T as m,a as l}from"./Toolbar-BfqPKzCx.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-CdN28WM3.js";import"./MenuListItem-Cr3RaesB.js";import"./MenuItem-C500ZIIj.js";import"./ItemMedia-DCE7hmVr.js";import"./Avatar-CgMczA0n.js";import"./AvatarGroup-ujKKLt3E.js";import"./Checkmark-Da_1rBde.js";import"./ItemLabel-JZ_7_TI1.js";import"./Heading-Dl2CB_qz.js";import"./useHighlightedText-BhVVUcDt.js";import"./ItemControls-C86-eNC3.js";import"./Badge-Dlsqw5tH.js";import"./Tooltip-DmTt27sC.js";import"./ChevronRight-DBCR3hzH.js";import"./ArrowUndo-Dk2uggSE.js";import"./MenuListDivider-Cl5vSJ7C.js";import"./Fieldset-qE_JUP-E.js";import"./Field-D8Qe0uka.js";import"./Label-CjI2CUCN.js";import"./Input-BnE3VUoY.js";import"./Datepicker-aQnZ2Ti4.js";import"./SearchField-BeyrM52L.js";import"./MagnifyingGlass-BZEvKjAk.js";import"./FieldBase-B3aukQxa.js";import"./Typography-CP4EAHNP.js";import"./useMenu-DNlZtc9u.js";import"./MenuListHeading-DK632LaI.js";import"./InformationSquare-CA9knMPH.js";import"./Paperclip-C798-5-B.js";import"./Eye-CGQWJv-o.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-BbzPLYJ2.js";import"./useDropdownMenuController-13HA63ON.js";import"./Dropdown-CFFHqeqH.js";import"./Plus-BAe7a_fr.js";import"./ButtonGroup-CHaM1dTc.js";import"./ButtonGroupDivider-CHEKOlvW.js";import"./ChevronUpDown-pCQGyX3P.js";import"./ToolbarMenu-BZ58RiB_.js";import"./ToolbarSearch-CrDYY0to.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
