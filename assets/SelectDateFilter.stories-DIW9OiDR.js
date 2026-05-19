import{j as t}from"./iframe-GJv3-kpe.js";import{S as a}from"./SelectDateFilter-B26Puc_f.js";import{u as m,t as n}from"./example.hooks-NIblRq6L.js";import{T as s,a as l}from"./Toolbar-CyofLDtD.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-DCdXG6nd.js";import"./useId-B1GQrjht.js";import"./Datepicker-Lv0-DNws.js";import"./index-D19pPnAw.js";import"./ChevronRight-C3wqtQo3.js";import"./Button-XgEODhFb.js";import"./button-5jjXov6B.js";import"./use-merge-refs-oF7p1rqv.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-BuleDevk.js";import"./MenuItem-CRhKMxAm.js";import"./ItemMedia-45ogcwRE.js";import"./XMark-D7blLnze.js";import"./Avatar-CGv-fnY8.js";import"./Skeleton-dVNdeapn.js";import"./AvatarGroup-DxuzyW4n.js";import"./Icon-DKgAzIsH.js";import"./Checkmark-DXLqUvZZ.js";import"./Heading-CiHDuood.js";import"./useHighlightedText-ClfYglU-.js";import"./ItemControls-3C4JbZ3m.js";import"./Badge-CyLczarF.js";import"./Tooltip-Dv6bEDCe.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuListHeading-w-EtPB4c.js";import"./Fieldset-Dcg2wbOC.js";import"./index-OoPsm9QB.js";import"./Label-Bx3ShTJ6.js";import"./Input-WbVs78EM.js";import"./input-B1NrCnvc.js";import"./SearchField-D4OrqN5V.js";import"./MagnifyingGlass-a5jU8Ia_.js";import"./FieldBase-D2hpNZAE.js";import"./Typography-XN79jGlV.js";import"./useMenu-D_O6qRR4.js";import"./index-CNHiDjij.js";import"./InformationSquare-Crm3l9Sr.js";import"./Paperclip-BmatJD4L.js";import"./Eye-DOWoVlQV.js";import"./MenuHamburger-5Bxt9Ko4.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-CTnnTueZ.js";import"./Plus-9DzdC6C4.js";import"./Dropdown-CFn-KtHz.js";import"./ChevronUpDown-BiWl0_hb.js";import"./ButtonGroup-CkGxccE7.js";import"./ButtonGroupDivider-DWQ-x5Lg.js";import"./ToolbarMenu-dhwcTxdK.js";import"./ToolbarSearch-D4YvEV4z.js";const Ft={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
