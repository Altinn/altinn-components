import{j as t}from"./iframe-BqnZkKPi.js";import{S as a}from"./SelectDateFilter-DSelMJak.js";import{u as m,t as n}from"./example.hooks-D5-O-WJs.js";import{T as s,a as l}from"./Toolbar-BMYgF2JI.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-DUL77TcE.js";import"./useId-9kVvsXig.js";import"./Datepicker-BKERqzuO.js";import"./index-DAuAfjpD.js";import"./ChevronRight-DE1wtPln.js";import"./Button-BhHmd_Fm.js";import"./button-CeqU6--G.js";import"./use-merge-refs-Dh9pzmOc.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-AlO17G_F.js";import"./MenuItem-kT58Bpcm.js";import"./ItemMedia-BIsU1ixF.js";import"./XMark-Y2_85_oc.js";import"./Avatar-DNgE8Mou.js";import"./Skeleton-1qnYSSLw.js";import"./AvatarGroup-CjT1qNUB.js";import"./Icon-CnWjusVH.js";import"./Checkmark-BnBY066L.js";import"./Heading-BxNd6ZSD.js";import"./useHighlightedText-Clj8nPui.js";import"./ItemControls-CZQ275uO.js";import"./Badge-wAZ__xuM.js";import"./MenuListHeading-CYx60jB_.js";import"./Fieldset-Cg5MupaB.js";import"./index-wnzGLxld.js";import"./Label-CWCdrO7p.js";import"./Input-C33ZQCyq.js";import"./input-xJWBoVha.js";import"./SearchField-ufWryraF.js";import"./MagnifyingGlass-BqeXJqhd.js";import"./FieldBase-BELBUfOz.js";import"./Typography-DM76If-Q.js";import"./useMenu-b_BS_LFk.js";import"./InformationSquare-BrOKqXok.js";import"./Paperclip-BNaRk59O.js";import"./Eye-BjK7HgG_.js";import"./MenuHamburger-CS_46M_p.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-C-uznlxU.js";import"./Plus-7ff66Hwu.js";import"./Dropdown-hZuchDzz.js";import"./ChevronUpDown-5tAc1KRM.js";import"./ButtonGroup-DF4p7rG3.js";import"./ButtonGroupDivider-CAMhuJv0.js";import"./Tooltip-DKFSfnhf.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ToolbarMenu-DmfDcC0J.js";import"./ToolbarSearch-osdkSdWZ.js";const dt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
