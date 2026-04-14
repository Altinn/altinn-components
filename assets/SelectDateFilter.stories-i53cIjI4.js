import{j as t}from"./iframe-DolAyTrH.js";import{S as a}from"./SelectDateFilter-w_dvAADZ.js";import{u as m,t as n}from"./example.hooks-3-1UdGlW.js";import{T as s,a as l}from"./Toolbar-Q6Cuss0u.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-C7YcKz4U.js";import"./useId-CHjpN4lF.js";import"./Datepicker-XJoareLN.js";import"./index-BGgdxP5s.js";import"./ChevronRight-Duke-dAu.js";import"./Button-BnKV4VN-.js";import"./button-DvTcN5eG.js";import"./use-merge-refs-D0JupAUo.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-V7gZGQwh.js";import"./MenuItem-BC8KVIYh.js";import"./ItemMedia-feu0z7mp.js";import"./XMark-DTdVjjyM.js";import"./Avatar-koXMFN1u.js";import"./Skeleton-CgJZAB6S.js";import"./AvatarGroup-B7A0z_e3.js";import"./Icon-DyTdluPS.js";import"./Checkmark-CMV0hymD.js";import"./Heading-ytdfVfHq.js";import"./useHighlightedText-DjzGplEp.js";import"./ItemControls-B_Hdv8nx.js";import"./Badge-XZ4zcUXX.js";import"./MenuListHeading-ktY8lirO.js";import"./Fieldset-VDMCFkLM.js";import"./index-Bcer_oBx.js";import"./Label-B4hULeup.js";import"./Input-CbO5ihcQ.js";import"./input-BNW4iEHl.js";import"./SearchField-O-g-s0at.js";import"./MagnifyingGlass-D6ZngSzY.js";import"./FieldBase-Cd7L_EtW.js";import"./Typography-BxahTxrH.js";import"./useMenu-BNSqPiQU.js";import"./InformationSquare-B_X3Ih6E.js";import"./Paperclip-QEXeBZFB.js";import"./Eye-je_CUsR4.js";import"./MenuHamburger-vJW3XQDF.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-Bq_IdB92.js";import"./Plus-J7cjNzSf.js";import"./Dropdown-ByKasinV.js";import"./ChevronUpDown-IW27C65d.js";import"./ButtonGroup-D7dkSlZP.js";import"./ButtonGroupDivider-oAJG58yN.js";import"./Tooltip-kZb4i6VJ.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-CfsUc7jD.js";import"./ToolbarSearch-dNxgL2uN.js";const dt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const Ft=["Datepicker","RemovableDatepicker","CustomName"];export{o as CustomName,e as Datepicker,i as RemovableDatepicker,Ft as __namedExportsOrder,dt as default};
