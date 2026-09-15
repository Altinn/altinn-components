import{a7 as t}from"./iframe-C-THn91T.js";import{S as a}from"./SelectDateFilter-vG5JK0lU.js";import{t as n}from"./example.data-CWLSYxVZ.js";import{a as s}from"./example.hooks-BiQr4fdR.js";import{T as m,a as l}from"./Toolbar-CIlcvG9j.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-BY_739pp.js";import"./MenuListItem-BtLexDfB.js";import"./MenuItem-B98ufrdD.js";import"./ItemMedia-DiPL1djx.js";import"./Avatar-CLhHIcAr.js";import"./AvatarGroup-FJy6c_cG.js";import"./Checkmark-CKSWNkLN.js";import"./ItemLabel-DD7gOu3Q.js";import"./Heading-Bt4tEn1t.js";import"./useHighlightedText-LohBehUX.js";import"./ItemControls-AJskvBhb.js";import"./Badge-lAjlx4fW.js";import"./Tooltip-DrV4DRir.js";import"./ChevronRight-SDiRgKYv.js";import"./ArrowUndo-_3NlNhzo.js";import"./MenuListDivider-C2y_tXgh.js";import"./Fieldset-BiZ5NkwF.js";import"./Field-BN4IysmT.js";import"./Label-Cj2m8vPc.js";import"./Input-DSL2dtsJ.js";import"./Datepicker-BHlRg3qe.js";import"./SearchField-3MMOEmrN.js";import"./MagnifyingGlass-DcHLZgKH.js";import"./FieldBase-3tu8AQku.js";import"./Typography-BHSdNY0l.js";import"./useMenu-CEKxQFuP.js";import"./MenuListHeading-Djui1q9T.js";import"./InformationSquare-DjaHtlyP.js";import"./Paperclip-CsdFHAca.js";import"./Eye-O-0k6PYr.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-DEQ-9aGN.js";import"./useDropdownMenuController-CYkklUYZ.js";import"./Dropdown-DGlWBLGp.js";import"./Plus-CP2q7sax.js";import"./ButtonGroup-CfikcDtR.js";import"./ButtonGroupDivider-DgRXATze.js";import"./ChevronUpDown-WJVhX2g4.js";import"./ToolbarMenu-0H_I-5xh.js";import"./ToolbarSearch-D7dNHVel.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
