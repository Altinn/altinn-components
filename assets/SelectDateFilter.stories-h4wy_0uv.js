import{j as t}from"./iframe-Bk_HwK4l.js";import{S as a}from"./SelectDateFilter-CJ4l1HlR.js";import{u as m,t as n}from"./example.hooks-Crri7oQp.js";import{T as s,a as l}from"./Toolbar-DnSydSf5.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-DFEq1-Ux.js";import"./useId-WArpTTRC.js";import"./Datepicker-DanvzkQG.js";import"./index-Bj80ru-z.js";import"./ChevronRight-BEdxYQXL.js";import"./Button-DXv-zg1S.js";import"./button-DRIhbrAI.js";import"./use-merge-refs-BQmlI6PU.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-p80RBs_A.js";import"./MenuItem-BW0J3eqZ.js";import"./ItemMedia-QvgC3e5a.js";import"./XMark-BlM7H2uk.js";import"./Avatar-B1R5c004.js";import"./Skeleton-CZ4GHxMp.js";import"./AvatarGroup-CkGvw6sL.js";import"./Icon-BbsTdu7G.js";import"./Checkmark-BwmprQFp.js";import"./Heading-D6li-Zgs.js";import"./useHighlightedText-BjD5CEaG.js";import"./ItemControls-DoACt_K_.js";import"./Badge-s1Xx1f1P.js";import"./Tooltip-B6sw6IF5.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuListHeading-RVi62nau.js";import"./Fieldset-C8Kk6o8J.js";import"./index-RvDLUlZV.js";import"./Label-D1l41OtR.js";import"./Input-kPMzbuYu.js";import"./input-6lO9tGv_.js";import"./SearchField-CcfOce7B.js";import"./MagnifyingGlass-BtHw2Y5y.js";import"./FieldBase-zuKERQJx.js";import"./Typography-9_XA-VKE.js";import"./useMenu-BNIm_aif.js";import"./index-BL_SwWgZ.js";import"./InformationSquare-D1WxufmY.js";import"./Paperclip-D1BNdJQZ.js";import"./Eye-vY4zSgG6.js";import"./MenuHamburger-CKMlqnsy.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController--BMHU_Uw.js";import"./Plus-Db6y3gEP.js";import"./Dropdown-DDGzAAFH.js";import"./ChevronUpDown-xq3F75kC.js";import"./ButtonGroup-IyhiSPmN.js";import"./ButtonGroupDivider-Cky36suu.js";import"./ToolbarMenu-C9Ek9car.js";import"./ToolbarSearch-D1BZ8Hq2.js";const Ft={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const ut=["Datepicker","RemovableDatepicker","CustomName"];export{o as CustomName,e as Datepicker,i as RemovableDatepicker,ut as __namedExportsOrder,Ft as default};
