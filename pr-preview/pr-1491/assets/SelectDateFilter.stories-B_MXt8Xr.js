var F=Object.defineProperty;var i=(r,e)=>F(r,"name",{value:e,configurable:!0});import{a6 as t}from"./iframe-HroKCH1i.js";import{S as m}from"./SelectDateFilter-B42VW9wa.js";import{t as s}from"./example.data-BdNlgO1O.js";import{a as l}from"./example.hooks-BSipjsvZ.js";import{T as p,a as c}from"./Toolbar-q2RlUkvL.js";import"./preload-helper-Cc2_yIPf.js";import"./MenuListItem-DW9PJpJL.js";import"./MenuItem-CIYGtEiF.js";import"./CheckboxUncheckedIcon-HP_EJry3.js";import"./RadioUncheckedIcon-Ds8PcFs2.js";import"./ItemMedia-BGnaafVo.js";import"./Avatar-DknIY_wN.js";import"./AvatarGroup-CajaM-Bn.js";import"./ItemLabel-BExOJJ8K.js";import"./Heading-ButwX4Fz.js";import"./useHighlightedText-BR2lgM5a.js";import"./ItemControls-P_AZ0k9Y.js";import"./Badge-6DoOsqKK.js";import"./Tooltip-3zva_1pJ.js";import"./ChevronRight-CnU_-vpz.js";import"./ArrowUndo-D_aPg2Cn.js";import"./MenuListDivider-DtrGkUUW.js";import"./Fieldset-BR5GrdZp.js";import"./Field-A9TpZ5Q4.js";import"./Label-3I9SdFhT.js";import"./Input-KntdUcqG.js";import"./SearchField-DdJVtzp5.js";import"./MagnifyingGlass-GwJB8-P4.js";import"./FieldBase-Dy7F34xJ.js";import"./Typography-mUXdli5h.js";import"./useMenu-DLxClmSr.js";import"./InformationSquare-uPdk22J8.js";import"./Paperclip-Cn9mYfrM.js";import"./Eye-tR40NEX_.js";import"./MenuHamburger-Ca2SrZOe.js";import"./useDropdownMenuController-Ba1nZRew.js";import"./Dropdown-CxvfuUHz.js";import"./Plus-CnaATfP4.js";import"./ButtonGroup-Ds7x4PTq.js";import"./ButtonGroupDivider-BvjKoALv.js";import"./ChevronUpDown-CVsm6Wf1.js";import"./ToolbarMenu-BBQDHJW0.js";import"./ToolbarSearch-T6sZw5mR.js";const ot={title:"Toolbar/SelectDateFilter",component:m,parameters:{},args:{}},o=i(()=>{const r=l({filters:[{...s,as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"Datepicker"),n=i(()=>{const r=l({filters:[{...s,as:m,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"RemovableDatepicker"),a=i(()=>{const r=s.items.map(d=>({...d,name:"date"})),e=l({filters:[{...s,items:r,name:"date",as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...e})}),t.jsx("hr",{}),JSON.stringify(e.filterState)]})},"CustomName"),nt=["Datepicker","RemovableDatepicker","CustomName"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
