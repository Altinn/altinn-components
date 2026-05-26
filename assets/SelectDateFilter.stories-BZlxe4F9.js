import{p as t}from"./iframe-Ca1pxjCh.js";import{S as a}from"./SelectDateFilter-C3N_hWhf.js";import{t as n,a as m}from"./example.hooks-zn4ljd05.js";import{T as s,a as l}from"./Toolbar-DwUNvZ3c.js";import"./preload-helper-PPVm8Dsz.js";import"./MenuListItem-ChEwMlMz.js";import"./index-qsemo-NB.js";import"./MenuItem-LhE1AhKQ.js";import"./ItemMedia-B1dbthGB.js";import"./XMark-D_G5yHBr.js";import"./useId-DKdvhqLE.js";import"./Avatar-D6lLgCNX.js";import"./Skeleton-CjJRr45L.js";import"./AvatarGroup-DbBgQl7c.js";import"./Icon-DX2teY26.js";import"./Checkmark-BNq65g6F.js";import"./Heading-BWtrIkld.js";import"./useHighlightedText-B4z3dUTF.js";import"./ItemControls-CcgtvJvT.js";import"./Badge-B7pvghgv.js";import"./Tooltip-CUaFdea7.js";import"./tooltip-DBInG_0S.js";import"./ChevronRight-Dx7-HhpA.js";import"./ArrowUndo-DzsN0CWU.js";import"./MenuListHeading-CfNBOaKJ.js";import"./Fieldset-Pq_bUFFC.js";import"./Label-Dpkw0Wq9.js";import"./Input-CnEzvrKf.js";import"./Datepicker-CV2m2IbV.js";import"./Button-BUoYLOjU.js";import"./SearchField-CQtbSmEr.js";import"./MagnifyingGlass-DvaQ8jq-.js";import"./FieldBase-B_jWg1W2.js";import"./Typography-B47euKof.js";import"./useMenu-CVV4ErAO.js";import"./index-C_HyNp1D.js";import"./InformationSquare-vAQpVtYs.js";import"./Paperclip-Dpwn8Tkx.js";import"./Eye-hNVApuei.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-B57Oky4-.js";import"./useDropdownMenuController-D-Vc94VJ.js";import"./Dropdown-mQdbulVM.js";import"./Plus-C2mGPGYW.js";import"./ButtonGroup-Bt3kIkZr.js";import"./ButtonGroupDivider-BSgO7uL3.js";import"./ChevronUpDown-CtvN4UUP.js";import"./ToolbarMenu-BOs_syWP.js";import"./ToolbarSearch-D3IsrQwv.js";const st={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
