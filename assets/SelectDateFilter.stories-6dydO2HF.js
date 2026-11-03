var F=Object.defineProperty;var i=(r,e)=>F(r,"name",{value:e,configurable:!0});import{a5 as t}from"./iframe-C2TXN9Gt.js";import{S as m}from"./SelectDateFilter-C9BPDeXc.js";import{t as s}from"./example.data-CTnAE6Rd.js";import{a as l}from"./example.hooks-BCOeNpim.js";import{T as p,a as c}from"./Toolbar-BrgKDmLN.js";import"./preload-helper-Cc2_yIPf.js";import"./DatepickerFilter-C32AO9Wo.js";import"./MenuListItem-BZm8a22V.js";import"./MenuItem-fN7KVjMo.js";import"./CheckboxUncheckedIcon-DbFdcG4a.js";import"./RadioUncheckedIcon-BGT6n-0U.js";import"./ItemMedia-DvL0nIvI.js";import"./Avatar-FtVJWfDO.js";import"./AvatarGroup-Dp8bZnxk.js";import"./ItemLabel-zq6K58HK.js";import"./Heading-DUZOSHF_.js";import"./useHighlightedText-rpsh5ryi.js";import"./ItemControls-BNQjxOXY.js";import"./Badge-BBkduo-x.js";import"./Tooltip-DGaFfrCO.js";import"./ChevronRight-B3qMZH3P.js";import"./ArrowUndo-DzLQVWV6.js";import"./MenuListDivider-DUsmtn09.js";import"./Fieldset-CLVQO_9S.js";import"./Field-B9ILzcp7.js";import"./Label-C63o_NPU.js";import"./Input-DCxTW5af.js";import"./Datepicker-C8vMH9RI.js";import"./SearchField-BhmsKdsU.js";import"./MagnifyingGlass-yE6CRZNo.js";import"./MenuListHeading-KNqUpgh4.js";import"./FieldBase-RJLhkwbG.js";import"./Typography-DMeULRXh.js";import"./useMenu-PLj8_L9k.js";import"./InformationSquare-CbcqUQld.js";import"./Paperclip-CsMFdJqH.js";import"./Eye-J-HTiEIt.js";import"./MenuHamburger-C2-afPRI.js";import"./useDropdownMenuController-DrcWKor_.js";import"./Dropdown-ClxCQ_oE.js";import"./Plus-B0fUlCfQ.js";import"./ButtonGroup-BxGjQybR.js";import"./ButtonGroupDivider-CvcVcX9T.js";import"./ChevronUpDown-B3bkzlBg.js";import"./ToolbarMenu-PlMmn1Tj.js";import"./ToolbarSearch-Cqu5RvvX.js";const st={title:"Toolbar/SelectDateFilter",component:m,parameters:{},args:{}},o=i(()=>{const r=l({filters:[{...s,as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"Datepicker"),n=i(()=>{const r=l({filters:[{...s,as:m,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"RemovableDatepicker"),a=i(()=>{const r=s.items.map(d=>({...d,name:"date"})),e=l({filters:[{...s,items:r,name:"date",as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...e})}),t.jsx("hr",{}),JSON.stringify(e.filterState)]})},"CustomName"),mt=["Datepicker","RemovableDatepicker","CustomName"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...a.parameters?.docs?.source}}};export{a as CustomName,o as Datepicker,n as RemovableDatepicker,mt as __namedExportsOrder,st as default};
