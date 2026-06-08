import{a7 as t}from"./iframe-BkdCVhNa.js";import{S as a}from"./SelectDateFilter-DZalDsQa.js";import{t as n,a as s}from"./example.hooks-D7tXAtoJ.js";import{T as m,a as l}from"./Toolbar-B10IL9NB.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-pRWVrCNm.js";import"./MenuItem-DLDMkBQ4.js";import"./ItemMedia-ZGWW7sv6.js";import"./Avatar-BIkq-2V8.js";import"./AvatarGroup-M5GjbKZV.js";import"./Checkmark-ChhRzFzd.js";import"./ItemLabel-DCGYjoAC.js";import"./Heading-CYb_rmks.js";import"./useHighlightedText-THgW7xGA.js";import"./ItemControls-Bpk8CkC-.js";import"./Badge-Do4_FWGT.js";import"./Tooltip-wNk76VVd.js";import"./ChevronRight-BWpY3hyQ.js";import"./ArrowUndo-BT2qWUsa.js";import"./MenuListHeading-ITzk-OYW.js";import"./Fieldset-fTfNvo7o.js";import"./Field-nzKcMOXI.js";import"./Label-DHWqz8jc.js";import"./Input-Bk6KAWUZ.js";import"./Datepicker-C4hTVi3v.js";import"./SearchField-ClkEO99z.js";import"./MagnifyingGlass-Dy-txje3.js";import"./FieldBase-DIosJ8GZ.js";import"./Typography-BbYlnfM1.js";import"./useMenu-Dy3YaaUo.js";import"./index-CvtktNDj.js";import"./InformationSquare-D9_tzfnx.js";import"./Paperclip-NMLrrGRJ.js";import"./Eye-BO3KOX7j.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-C33_VoLZ.js";import"./useDropdownMenuController-fgAyTcqj.js";import"./Dropdown-CAWWJNvU.js";import"./Plus-1oHAiQB4.js";import"./ButtonGroup-BeLY82P-.js";import"./ButtonGroupDivider-DDdfhEZd.js";import"./ChevronUpDown-CBG_zYJo.js";import"./ToolbarMenu-dcLUQQlo.js";import"./ToolbarSearch-DSW05ZOw.js";const it={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
