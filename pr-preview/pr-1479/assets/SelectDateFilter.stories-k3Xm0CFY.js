var F=Object.defineProperty;var i=(r,e)=>F(r,"name",{value:e,configurable:!0});import{a6 as t}from"./iframe-CJbVApVd.js";import{S as m}from"./SelectDateFilter-Dk1aHW37.js";import{t as s}from"./example.data-C9q_hQnU.js";import{a as l}from"./example.hooks-C3JtqxfB.js";import{T as p,a as c}from"./Toolbar-Bragk--_.js";import"./preload-helper-Cc2_yIPf.js";import"./MenuListItem-DZuqWt2h.js";import"./MenuItem-BZ7Fkp32.js";import"./CheckboxUncheckedIcon-mEYYc7FR.js";import"./RadioUncheckedIcon-BYKV7woP.js";import"./ItemMedia-zelbGl6j.js";import"./Avatar-D6kT48yy.js";import"./AvatarGroup-CEwn4f1y.js";import"./ItemLabel-BQOKZEUY.js";import"./Heading-DPlNKJG2.js";import"./useHighlightedText-ClD__BkG.js";import"./ItemControls-BlgjQohZ.js";import"./Badge-B0Oy6sks.js";import"./Tooltip-0Tcl_NyY.js";import"./ChevronRight-27VbzC_5.js";import"./ArrowUndo-s8spIZZt.js";import"./MenuListDivider-DHbKRw1S.js";import"./Fieldset-Fn3QHldD.js";import"./Field-YyxArrP0.js";import"./Label-BJanEfkF.js";import"./Input-DjgPtg5S.js";import"./SearchField-v7apZWbj.js";import"./MagnifyingGlass-ByOH_q-F.js";import"./FieldBase-DPozPxXp.js";import"./Typography-YiefWcUe.js";import"./useMenu-Le6NyqAV.js";import"./InformationSquare-COAmcV_p.js";import"./Paperclip-tR5UvI1V.js";import"./Eye-CPwzt_6h.js";import"./MenuHamburger-Drn1nU86.js";import"./useDropdownMenuController-B6bebHA9.js";import"./Dropdown-F7ryxq5F.js";import"./Plus-C_JJ1fS4.js";import"./ButtonGroup-Ban15m4A.js";import"./ButtonGroupDivider-BEoSbrb-.js";import"./ChevronUpDown-CYzCA8Zj.js";import"./ToolbarMenu-BnWSZSo7.js";import"./ToolbarSearch-BOc9sO_2.js";const ot={title:"Toolbar/SelectDateFilter",component:m,parameters:{},args:{}},o=i(()=>{const r=l({filters:[{...s,as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"Datepicker"),n=i(()=>{const r=l({filters:[{...s,as:m,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"RemovableDatepicker"),a=i(()=>{const r=s.items.map(d=>({...d,name:"date"})),e=l({filters:[{...s,items:r,name:"date",as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...e})}),t.jsx("hr",{}),JSON.stringify(e.filterState)]})},"CustomName"),nt=["Datepicker","RemovableDatepicker","CustomName"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...a.parameters?.docs?.source}}};export{a as CustomName,o as Datepicker,n as RemovableDatepicker,nt as __namedExportsOrder,ot as default};
