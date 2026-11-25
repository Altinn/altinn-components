var F=Object.defineProperty;var i=(r,e)=>F(r,"name",{value:e,configurable:!0});import{a6 as t}from"./iframe-C0_zUbkp.js";import{S as m}from"./SelectDateFilter-D5BVRPNa.js";import{t as s}from"./example.data-BpdvR9OP.js";import{a as l}from"./example.hooks-BVxSKNkT.js";import{T as p,a as c}from"./Toolbar-YAHp1rd8.js";import"./preload-helper-Cc2_yIPf.js";import"./MenuListItem-CH7aCagC.js";import"./MenuItem-DJSb-Ysu.js";import"./CheckboxUncheckedIcon-TiK1Utdf.js";import"./RadioUncheckedIcon-BOm3YJdr.js";import"./ItemMedia-Dqx0ptul.js";import"./Avatar-DKE26PJw.js";import"./AvatarGroup-BwefBp_5.js";import"./ItemLabel-9fWKgY8j.js";import"./Heading-DLwaSr_O.js";import"./useHighlightedText-BFDvP_rA.js";import"./ItemControls-DWFJyhPy.js";import"./Badge-SiuoHNvy.js";import"./Tooltip-IMKx06Nx.js";import"./ChevronRight-C6nH0agV.js";import"./ArrowUndo-BzebLQMk.js";import"./MenuListDivider-BiU_kXeA.js";import"./Fieldset-quLYDJJO.js";import"./Field-ze6C9QpL.js";import"./Label-BRVQ__pE.js";import"./Input-CmIpmweJ.js";import"./SearchField-DNtOxHfE.js";import"./MagnifyingGlass-CzEj6Uz6.js";import"./FieldBase-BHBKFAe2.js";import"./Typography-CXAuaEKv.js";import"./useMenu-DkMnEsls.js";import"./InformationSquare-CG3sxIst.js";import"./Paperclip-C2QTbLXa.js";import"./Eye-D-l7J9cH.js";import"./MenuHamburger-I_0J1-VZ.js";import"./useDropdownMenuController-XzV301bD.js";import"./Dropdown-DC94zabz.js";import"./Plus-D_VIpiu1.js";import"./ButtonGroup-Bj12kkXU.js";import"./ButtonGroupDivider-CfkOgorX.js";import"./ChevronUpDown-BOxYI2QB.js";import"./ToolbarMenu-CjNRZyG9.js";import"./ToolbarSearch-PMZG_9sd.js";const ot={title:"Toolbar/SelectDateFilter",component:m,parameters:{},args:{}},o=i(()=>{const r=l({filters:[{...s,as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"Datepicker"),n=i(()=>{const r=l({filters:[{...s,as:m,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"RemovableDatepicker"),a=i(()=>{const r=s.items.map(d=>({...d,name:"date"})),e=l({filters:[{...s,items:r,name:"date",as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...e})}),t.jsx("hr",{}),JSON.stringify(e.filterState)]})},"CustomName"),nt=["Datepicker","RemovableDatepicker","CustomName"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
