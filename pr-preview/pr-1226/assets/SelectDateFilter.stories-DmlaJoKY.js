import{a7 as t}from"./iframe-DTEeNdyk.js";import{S as a}from"./SelectDateFilter-H2xlmMWU.js";import{t as n,a as s}from"./example.hooks-p-G0IfQ2.js";import{T as m,a as l}from"./Toolbar-M8shq0Yp.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-DQq69WCb.js";import"./MenuItem-CveCSlsE.js";import"./ItemMedia-BWl2RL2w.js";import"./Avatar-vmGSBU3d.js";import"./AvatarGroup-Sicw8XeK.js";import"./Checkmark-BHFJ8diG.js";import"./ItemLabel-CiRGygZk.js";import"./Heading-DUvNz5de.js";import"./useHighlightedText-D9AI5Zbv.js";import"./ItemControls-BKFWWzHw.js";import"./Badge-CRnEe1Vv.js";import"./Tooltip-Oh_JH-x_.js";import"./ChevronRight-DC0APSAK.js";import"./ArrowUndo-Cnbp38kB.js";import"./MenuListHeading-vODo-CbQ.js";import"./Fieldset-desO2eeR.js";import"./Field-IhE5_Jjk.js";import"./Label-B-q4Hdcy.js";import"./Input-BxybDda_.js";import"./Datepicker-CQ-Nf-mi.js";import"./SearchField-BDcWIDhP.js";import"./MagnifyingGlass-Q_O4EtL2.js";import"./FieldBase-DjxBgQLC.js";import"./Typography-CqVDEuXx.js";import"./useMenu-CTNN937Q.js";import"./index-szorRtVx.js";import"./InformationSquare-W352tleo.js";import"./Paperclip-BadgBNh_.js";import"./Eye-CE5nKeLC.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-CcnTvTdx.js";import"./useDropdownMenuController-BMwPFGHP.js";import"./Dropdown-JTdvFb7I.js";import"./Plus-DS0hvWVt.js";import"./ButtonGroup-C9iOkEQW.js";import"./ButtonGroupDivider-Di14ILkk.js";import"./ChevronUpDown-BLJXwOj1.js";import"./ToolbarMenu-CEz0KR_X.js";import"./ToolbarSearch-BlQ29bx8.js";const it={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const ot=["Datepicker","RemovableDatepicker","CustomName"];export{o as CustomName,e as Datepicker,i as RemovableDatepicker,ot as __namedExportsOrder,it as default};
