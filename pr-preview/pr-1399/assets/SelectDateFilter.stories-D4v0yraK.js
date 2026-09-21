import{a7 as t}from"./iframe-Bjjt_sJ1.js";import{S as a}from"./SelectDateFilter-BbgT77XH.js";import{t as n}from"./example.data-D9UBHtS0.js";import{a as s}from"./example.hooks-DUxp0bUe.js";import{T as m,a as l}from"./Toolbar-CkN2tF10.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-CJ0Fi3Pq.js";import"./MenuListItem-CebbbonR.js";import"./MenuItem-Cqr4SOJp.js";import"./ItemMedia-cRp9TeR0.js";import"./Avatar-DUGxJuve.js";import"./AvatarGroup-Bt2kizFo.js";import"./Checkmark-BJpweToD.js";import"./ItemLabel-C7-OFrDm.js";import"./Heading-BHJvhrmD.js";import"./useHighlightedText-BPKtv5Uu.js";import"./ItemControls-Cf0gBB0S.js";import"./Badge-Dlcy0_mS.js";import"./Tooltip-CYcMXzzg.js";import"./ChevronRight-MBNaUHNp.js";import"./ArrowUndo-Cp2tx0-P.js";import"./MenuListDivider-CP2Z2JTV.js";import"./Fieldset-CcnYfaDA.js";import"./Field-Cv6yJUU5.js";import"./Label-DSP8_VuM.js";import"./Input-PLxdr44a.js";import"./Datepicker-CKmwYhdP.js";import"./SearchField-CN96vdWl.js";import"./MagnifyingGlass-B6DdP_wu.js";import"./FieldBase-xSixxw66.js";import"./Typography-D6uVUzG3.js";import"./useMenu-CfDnO3tS.js";import"./MenuListHeading-NxhgYwSy.js";import"./InformationSquare-BBRKQU3y.js";import"./Paperclip-B9jawDMs.js";import"./Eye-L945VvwS.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-eRZMUoq9.js";import"./useDropdownMenuController-zn5n7TQt.js";import"./Dropdown-CeLlk6Ua.js";import"./Plus-Bfa-1JFY.js";import"./ButtonGroup-uHmrofaO.js";import"./ButtonGroupDivider-C-f0tc_z.js";import"./ChevronUpDown-CC8nga9c.js";import"./ToolbarMenu-D5mnaT4o.js";import"./ToolbarSearch-D_Q1dE5-.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
