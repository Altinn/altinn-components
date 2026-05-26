import{j as t}from"./iframe-CdkbiINU.js";import{S as a}from"./SelectDateFilter-RS0uOGqb.js";import{u as m,t as n}from"./example.hooks-DCHacmuk.js";import{T as s,a as l}from"./Toolbar-FEoFjgSu.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-C2yeCY3h.js";import"./useId-BBNwfwR-.js";import"./Datepicker-Dx6uf6xx.js";import"./index-ClUlC5r_.js";import"./ChevronRight-WcqCaCSB.js";import"./Button-DbqBa2Ra.js";import"./tooltip-ClrKYCC2.js";import"./MenuListItem-CwD3vAur.js";import"./MenuItem-DuLXc_4R.js";import"./ItemMedia-Mj1KUH0F.js";import"./XMark-CXTea0I2.js";import"./Avatar-Dqj4y4ce.js";import"./Skeleton-DNrLKFK9.js";import"./AvatarGroup-XhgZMwS_.js";import"./Icon-Cn1mWE7M.js";import"./Checkmark-B8HStk1Z.js";import"./Heading-pV_B_Yzg.js";import"./useHighlightedText-Z8eL_Nst.js";import"./ItemControls-2WNlOUKw.js";import"./Badge-Nnj4VnpH.js";import"./Tooltip-CkfZKf5K.js";import"./MenuListHeading-DRaOclWG.js";import"./Fieldset-CiaDAd-z.js";import"./Label-DOiiUdXJ.js";import"./Input-CXgAq3E9.js";import"./SearchField-D9zkHyRI.js";import"./MagnifyingGlass-MF_Zjyww.js";import"./FieldBase-CADFK9ds.js";import"./Typography-CbNgqrog.js";import"./useMenu-Cw7IEDma.js";import"./index-D4P432Vi.js";import"./InformationSquare-lXhFqiHS.js";import"./Paperclip-BlHBNGLa.js";import"./Eye-CfgAd0P-.js";import"./MenuHamburger-CYCqXYse.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-DY23hdKX.js";import"./Plus-BlZ2V0ro.js";import"./Dropdown-B3ZWUXYU.js";import"./ChevronUpDown-B4AZ7UWd.js";import"./ButtonGroup-rFZEcV2R.js";import"./ButtonGroupDivider-Buidn4Ls.js";import"./ToolbarMenu-Bc9cebGQ.js";import"./ToolbarSearch-DGxkCR-N.js";const st={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
