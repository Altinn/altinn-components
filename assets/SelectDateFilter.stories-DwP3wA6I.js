import{a7 as t}from"./iframe-DE6S9aZ4.js";import{S as a}from"./SelectDateFilter-DAmwzF3T.js";import{t as n}from"./example.data-BKqxyXwA.js";import{a as s}from"./example.hooks-CF-w1vF2.js";import{T as m,a as l}from"./Toolbar-D1BVDX7P.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-DnTy3mGD.js";import"./MenuListItem-CLQjAJhf.js";import"./MenuItem-DIQqnyL7.js";import"./ItemMedia-CpnAVdfr.js";import"./Avatar-CNN7KBYB.js";import"./AvatarGroup-kG5dzOiP.js";import"./Checkmark-DE4sJMpI.js";import"./ItemLabel-BuYlysP4.js";import"./Heading-BDklncvD.js";import"./useHighlightedText-C20f3R5e.js";import"./ItemControls-BOAqxChM.js";import"./Badge-BKORQsmw.js";import"./Tooltip-B3xZNbnc.js";import"./ChevronRight-CaR2K8Z7.js";import"./ArrowUndo-0nTHxWEP.js";import"./MenuListDivider-TgKUiY6a.js";import"./Fieldset-HdYVAI7A.js";import"./Field-CqVl0h_R.js";import"./Label-MWSbEF7h.js";import"./Input-DHBuxbkq.js";import"./Datepicker-Cr4T6R4y.js";import"./SearchField-DLpVp_NL.js";import"./MagnifyingGlass-Cw9dgxbo.js";import"./FieldBase-Dqt8MJKx.js";import"./Typography-Cfn_aMgf.js";import"./useMenu-BnFUnl7r.js";import"./MenuListHeading-C_U_JJdE.js";import"./InformationSquare-BoTINEEI.js";import"./Paperclip-C68VP6sp.js";import"./Eye-BUunqYKB.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-DXcMtlZO.js";import"./useDropdownMenuController-DjzmpwyV.js";import"./Dropdown-CtTBKP-C.js";import"./Plus-CwXksV0j.js";import"./ButtonGroup-DMo1vjo2.js";import"./ButtonGroupDivider-po33QuJn.js";import"./ChevronUpDown-lBSY9Yc1.js";import"./ToolbarMenu-CONiVHip.js";import"./ToolbarSearch-BiB9Ceyc.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
