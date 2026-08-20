import{a7 as t}from"./iframe-DklMp8b9.js";import{S as a}from"./SelectDateFilter-D10akyA7.js";import{t as n}from"./example.data-DsI0A4Mj.js";import{a as s}from"./example.hooks-DU16Drfy.js";import{T as m,a as l}from"./Toolbar-C8-Jd-cq.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-BWI3MnXv.js";import"./MenuListItem-CtNgIUPP.js";import"./MenuItem-DGElsCwp.js";import"./ItemMedia-DvKDb3Qz.js";import"./Avatar-CX9IOnsl.js";import"./AvatarGroup-BeC5BXf9.js";import"./Checkmark-BxHTLnPH.js";import"./ItemLabel-zm8XuDpe.js";import"./Heading-C5vDV6s5.js";import"./useHighlightedText-CQ5194gO.js";import"./ItemControls-o8s7abF_.js";import"./Badge-DxwSJzJK.js";import"./Tooltip-BmOBzKTd.js";import"./ChevronRight-D0aoAfw5.js";import"./ArrowUndo-XGcYnPEb.js";import"./MenuListDivider-DdHQwvZL.js";import"./Fieldset-DrLiPtYq.js";import"./Field-Ba2e4qFa.js";import"./Label-BvOr9MHZ.js";import"./Input-DDvcPBDR.js";import"./Datepicker-ByUjHT1F.js";import"./SearchField-1BQmUb8n.js";import"./MagnifyingGlass-XA6lr3C7.js";import"./FieldBase-nXdK7v3U.js";import"./Typography-CuZWB-pA.js";import"./useMenu-Dcu-XksR.js";import"./MenuListHeading-vYUhz8ky.js";import"./InformationSquare-D2eEvTI2.js";import"./Paperclip-BYUVZW70.js";import"./Eye-C_iLEKH7.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-D1P7yy_p.js";import"./useDropdownMenuController-DMmUICAl.js";import"./Dropdown-DhZusmq8.js";import"./Plus-K4OeXXOA.js";import"./ButtonGroup-Vwrh_ftH.js";import"./ButtonGroupDivider-BOXjjJyl.js";import"./ChevronUpDown-II9kNhKC.js";import"./ToolbarMenu-DUoLHXRj.js";import"./ToolbarSearch-2wWLrilH.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
