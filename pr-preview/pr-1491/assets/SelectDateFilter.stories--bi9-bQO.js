var F=Object.defineProperty;var i=(r,e)=>F(r,"name",{value:e,configurable:!0});import{a6 as t}from"./iframe-CjTVLX0J.js";import{S as m}from"./SelectDateFilter-D8Zw6F8r.js";import{t as s}from"./example.data-Ccl8KMWu.js";import{a as l}from"./example.hooks-BOQlBPAd.js";import{T as p,a as c}from"./Toolbar-BmRWpMAQ.js";import"./preload-helper-Cc2_yIPf.js";import"./MenuListItem-Db90m9cT.js";import"./MenuItem-BHJaEqQ5.js";import"./CheckboxUncheckedIcon-BI8H0dji.js";import"./RadioUncheckedIcon-BkjXdcpz.js";import"./ItemMedia-DnpNAz5S.js";import"./Avatar-Bte94cY6.js";import"./AvatarGroup-C543ATGD.js";import"./ItemLabel-QKtbke7Z.js";import"./Heading-iGdZKzrq.js";import"./useHighlightedText-DSpkTug-.js";import"./ItemControls-DdDcRIJg.js";import"./Badge-5qYmbB4A.js";import"./Tooltip-D-ZO89_f.js";import"./ChevronRight-B7WfXeCo.js";import"./ArrowUndo-ButKzzqn.js";import"./MenuListDivider-D1F-iYgs.js";import"./Fieldset-DeyNQN1g.js";import"./Field-DCjNXD15.js";import"./Label-em-S6i9n.js";import"./Input-B0rqselK.js";import"./SearchField-BoWCGyO9.js";import"./MagnifyingGlass-DkbBbRdW.js";import"./FieldBase-C5zYRo5L.js";import"./Typography-D5LJyQSI.js";import"./useMenu-DyQl0UH7.js";import"./InformationSquare-DA1l9Dlv.js";import"./Paperclip-Ddrby9yx.js";import"./Eye-D4M1Uy1l.js";import"./MenuHamburger-BrSo9lJ8.js";import"./useDropdownMenuController-D0Z68xmE.js";import"./Dropdown-Dh6j_cOd.js";import"./Plus-DW7oopwP.js";import"./ButtonGroup-CI4WR3eO.js";import"./ButtonGroupDivider-DmDtKYBM.js";import"./ChevronUpDown-BCSooCPs.js";import"./ToolbarMenu-CSRoeiOS.js";import"./ToolbarSearch-CDK1e_qT.js";const ot={title:"Toolbar/SelectDateFilter",component:m,parameters:{},args:{}},o=i(()=>{const r=l({filters:[{...s,as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"Datepicker"),n=i(()=>{const r=l({filters:[{...s,as:m,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"RemovableDatepicker"),a=i(()=>{const r=s.items.map(d=>({...d,name:"date"})),e=l({filters:[{...s,items:r,name:"date",as:m}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(p,{children:t.jsx(c,{...e})}),t.jsx("hr",{}),JSON.stringify(e.filterState)]})},"CustomName"),nt=["Datepicker","RemovableDatepicker","CustomName"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
