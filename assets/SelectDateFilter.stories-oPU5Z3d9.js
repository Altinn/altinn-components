import{p as t}from"./iframe-BBbEwSaq.js";import{S as a}from"./SelectDateFilter-CtwON2Ch.js";import{t as n,a as m}from"./example.hooks-Dm6optpP.js";import{T as s,a as l}from"./Toolbar-Bjujq1Yn.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-UbII8Q2r.js";import"./index-awH0sXcw.js";import"./MenuItem-CL2l3rp8.js";import"./ItemMedia-DR-yuWlq.js";import"./XMark-Dw8JSfSd.js";import"./useId-DZp72-eX.js";import"./Avatar-RSQnlVTq.js";import"./Skeleton-DFF9p8Mx.js";import"./AvatarGroup-DM7mpZJM.js";import"./Icon-Cx6QAjG2.js";import"./Checkmark-BcTHEh83.js";import"./ItemLabel-B9gTJ9up.js";import"./Heading-DDkqEyV3.js";import"./useHighlightedText-DORd4ETJ.js";import"./ItemControls-DaNsbzwN.js";import"./Badge-CZZB9VpQ.js";import"./Tooltip-BL1y86OR.js";import"./tooltip-D3G3Ewte.js";import"./ChevronRight-Bj8DUJ8P.js";import"./ArrowUndo-B9HC4bPd.js";import"./MenuListHeading-C7xt4T8q.js";import"./Fieldset-D2PHhPJw.js";import"./Label-DdMEJ83A.js";import"./Input-lqau07kD.js";import"./Datepicker-DXwSPiN3.js";import"./Button-DpW4Pu6O.js";import"./SearchField-D1R32ak6.js";import"./MagnifyingGlass-B6FIAadU.js";import"./FieldBase-CbyxT5SM.js";import"./Typography-41mT2wo8.js";import"./useMenu-CP6B3JUk.js";import"./index-BBId2cwS.js";import"./InformationSquare-BNlJiT0G.js";import"./Paperclip-CTYUfIdt.js";import"./Eye-DjmH3mmf.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-CaVnn13l.js";import"./useDropdownMenuController-e_G_Gi4i.js";import"./Dropdown-CQPIYrWf.js";import"./Plus-CmpsnneT.js";import"./ButtonGroup-oq7iIeFJ.js";import"./ButtonGroupDivider-DFu7SRn8.js";import"./ChevronUpDown-qfg5q5aR.js";import"./ToolbarMenu-lZoPJ6OZ.js";import"./ToolbarSearch-aJlGHfoZ.js";const lt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const pt=["Datepicker","RemovableDatepicker","CustomName"];export{o as CustomName,e as Datepicker,i as RemovableDatepicker,pt as __namedExportsOrder,lt as default};
