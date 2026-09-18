import{a7 as t}from"./iframe-IRVPXNFV.js";import{S as a}from"./SelectDateFilter-B48uTcp5.js";import{t as n}from"./example.data-BRYiSMgs.js";import{a as s}from"./example.hooks-DZ6VGNIf.js";import{T as m,a as l}from"./Toolbar-BsBUJiMr.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-CakP2Dch.js";import"./MenuListItem-DCSMARma.js";import"./MenuItem-CiVcHyvu.js";import"./ItemMedia-DU76sJ68.js";import"./Avatar-drWAMmf1.js";import"./AvatarGroup-Caex7Tu5.js";import"./Checkmark-D5V-_R2S.js";import"./ItemLabel-CfB3mva_.js";import"./Heading-DjAzNFDQ.js";import"./useHighlightedText-CG_8__up.js";import"./ItemControls-Bn-WW8C9.js";import"./Badge-CAyEKJhq.js";import"./Tooltip-D0XSM2S5.js";import"./ChevronRight-Bn5bOelp.js";import"./ArrowUndo-BMZdAc_2.js";import"./MenuListDivider-DU-lQLUQ.js";import"./Fieldset-BoFG5vA3.js";import"./Field-DlQFxQyh.js";import"./Label-Di1y72qz.js";import"./Input-CgzWa5OM.js";import"./Datepicker-DQTWnP28.js";import"./SearchField-Bpwou897.js";import"./MagnifyingGlass-C_Mjm1Zn.js";import"./FieldBase-DMT9IhQO.js";import"./Typography-B61DVKU1.js";import"./useMenu-Z61iJGID.js";import"./MenuListHeading-C_D2K51_.js";import"./InformationSquare-Bchi5e6i.js";import"./Paperclip-DvyyiXzu.js";import"./Eye-Bhgny55P.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-CB8eJRYC.js";import"./useDropdownMenuController-DopJQueH.js";import"./Dropdown-DwPiUxwC.js";import"./Plus-0ZWJqdTS.js";import"./ButtonGroup-BVNMP4FP.js";import"./ButtonGroupDivider-U6X8ZaTX.js";import"./ChevronUpDown-Dxm9K6l6.js";import"./ToolbarMenu-BZkuahLe.js";import"./ToolbarSearch-B8SeISb7.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
