import{j as t}from"./iframe-CbC-fLaY.js";import{S as a}from"./SelectDateFilter-DgCzfX1L.js";import{u as m,t as n}from"./example.hooks-B3iXDVBk.js";import{T as s,a as l}from"./Toolbar-CFq1284o.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-CJcERi05.js";import"./useId-C2JQsT24.js";import"./Datepicker-D3wyvF8V.js";import"./index-Ds9VDGIC.js";import"./ChevronRight-CThQJEOF.js";import"./Button-B0m1rUs2.js";import"./tooltip-BtbQ4KG6.js";import"./MenuListItem-DBiuOcpf.js";import"./MenuItem-BUq3aL73.js";import"./ItemMedia-CsSXB_1W.js";import"./XMark-DvUzU3_h.js";import"./Avatar-CmrLTlqi.js";import"./Skeleton-D8kEQByH.js";import"./AvatarGroup-CtTcTi_X.js";import"./Icon-DW3Nd0-m.js";import"./Checkmark-8GuDUS8U.js";import"./Heading-Bl7p7Gle.js";import"./useHighlightedText-BssbQrxH.js";import"./ItemControls-gQT1qCQ5.js";import"./Badge-BwpPXd0u.js";import"./Tooltip-BulSRtpn.js";import"./MenuListHeading-C1HjQPPY.js";import"./Fieldset-CJX25waV.js";import"./Label-DN-jQPwh.js";import"./Input-BNbo7Vjn.js";import"./SearchField-yE8KzlZV.js";import"./MagnifyingGlass-CyeXkGZ3.js";import"./FieldBase-D2jwyGQb.js";import"./Typography-BWnrNFau.js";import"./useMenu-a79SM2ar.js";import"./index-DDRVeLeZ.js";import"./InformationSquare-CQq7uvJQ.js";import"./Paperclip-BgCIsMPj.js";import"./Eye-BQcT7gvw.js";import"./MenuHamburger-CSe5Jiwx.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-B89zAjpv.js";import"./Plus-BGo0JvDh.js";import"./Dropdown-5e6GLlMG.js";import"./ChevronUpDown-r1RoSoyE.js";import"./ButtonGroup-BE0BnYMw.js";import"./ButtonGroupDivider-Bt-Y-uw7.js";import"./ToolbarMenu-DpWlAcTs.js";import"./ToolbarSearch-BzaPO5IS.js";const st={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
