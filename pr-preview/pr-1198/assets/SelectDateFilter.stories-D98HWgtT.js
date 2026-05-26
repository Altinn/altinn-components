import{j as t}from"./iframe-DU0n7__8.js";import{S as a}from"./SelectDateFilter-jZ0D60ln.js";import{u as m,t as n}from"./example.hooks-D7CzRhMv.js";import{T as s,a as l}from"./Toolbar-qFeKz95G.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-Bx0cXSI_.js";import"./useId-DCXiBgwp.js";import"./Datepicker-Dv0LBvwU.js";import"./index-sAFX08uI.js";import"./ChevronRight-B4fDZY6k.js";import"./Button-pXyw-iqn.js";import"./tooltip-UENHGvJl.js";import"./MenuListItem-C1_3DGyN.js";import"./MenuItem--8QkhFJ4.js";import"./ItemMedia-yH6oBbwQ.js";import"./XMark-DGVnrVrT.js";import"./Avatar-Bsgd2iIp.js";import"./Skeleton-etbnaSOo.js";import"./AvatarGroup-BpsuUsFp.js";import"./Icon-Dg7nJLrw.js";import"./Checkmark-CCpN8hs9.js";import"./Heading-BrrIdLRc.js";import"./useHighlightedText-Wa_y882s.js";import"./ItemControls-BwQhe1K-.js";import"./Badge-DWaei4kj.js";import"./Tooltip-DMnOwjPw.js";import"./MenuListHeading-iogtqFYg.js";import"./Fieldset-CU0WOUwA.js";import"./Label-DSFEyVbW.js";import"./Input-Cjh3ClWU.js";import"./SearchField-B4KuSSyF.js";import"./MagnifyingGlass-COVfkIqf.js";import"./FieldBase-BIV16XC5.js";import"./Typography-DOUoXZCv.js";import"./useMenu-CrvHU43k.js";import"./index-Cyw62YTk.js";import"./InformationSquare-Bfq2NTGF.js";import"./Paperclip-vQzd0cK8.js";import"./Eye-rXBIJWK8.js";import"./MenuHamburger--Lo7F4E1.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-BCWUKN9Y.js";import"./Plus-BxZePwQm.js";import"./Dropdown-Bvq9VpIR.js";import"./ChevronUpDown-DOKppJjP.js";import"./ButtonGroup-rBVDnBd_.js";import"./ButtonGroupDivider-B64rjX68.js";import"./ToolbarMenu-DIvagWDA.js";import"./ToolbarSearch-DkHlFmo7.js";const st={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const lt=["Datepicker","RemovableDatepicker","CustomName"];export{o as CustomName,e as Datepicker,i as RemovableDatepicker,lt as __namedExportsOrder,st as default};
