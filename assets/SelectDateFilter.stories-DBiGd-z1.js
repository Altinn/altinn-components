import{j as t}from"./iframe-xsOFb0qB.js";import{S as a}from"./SelectDateFilter-Dcap-DmE.js";import{u as m,t as n}from"./example.hooks-DwBSne0_.js";import{T as s,a as l}from"./Toolbar-CDDewou6.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-Bgr0ttn6.js";import"./useId-BSkX16Wf.js";import"./Datepicker-B0DGXccs.js";import"./index-C2Njje4x.js";import"./ChevronRight-C-KQY4Ee.js";import"./Button-BpTRR-R2.js";import"./button-_KGDSi7k.js";import"./use-merge-refs-CVCJxog4.js";import"./lite-DaUVFjkg.js";import"./MenuListItem-CT4_zUWw.js";import"./MenuItem-Dd-G4Q8o.js";import"./ItemMedia-J6PAjnJS.js";import"./XMark-CIyVPbna.js";import"./Avatar-n4A0Yiev.js";import"./Skeleton-DBfNAA4T.js";import"./AvatarGroup-D3a3Cvdg.js";import"./Icon-Bfs0jdaJ.js";import"./Checkmark-Bxt0Ippd.js";import"./Heading-CKV0OzUJ.js";import"./useHighlightedText-DlnkJmvJ.js";import"./ItemControls-a4lEiOE5.js";import"./Badge-BNd15I-A.js";import"./Tooltip-O5uJJY5C.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuListHeading-DQRtBG1I.js";import"./Fieldset-DgXA1yP2.js";import"./index-CZjeF-Ef.js";import"./Label-CiIlYW7w.js";import"./Input-CKQ98Ns6.js";import"./input-WCOpszOV.js";import"./SearchField-CkGqv4yc.js";import"./MagnifyingGlass--8bC5kd2.js";import"./FieldBase-CVHmMMmY.js";import"./Typography-Bx2c3_US.js";import"./useMenu-Cuq0hoPZ.js";import"./index-D7qBukkQ.js";import"./InformationSquare-DdLgqmyX.js";import"./Paperclip-7kfbi6pN.js";import"./Eye-DEFvM6nm.js";import"./MenuHamburger-C-E3l7C-.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-B1fyKvdT.js";import"./Plus-CO7gw69x.js";import"./Dropdown-DSeVnfau.js";import"./ChevronUpDown-C9PCSFtE.js";import"./ButtonGroup-C6oYdo0U.js";import"./ButtonGroupDivider-Di2QHo3H.js";import"./ToolbarMenu-tkAvaKQM.js";import"./ToolbarSearch-B_S7wHi8.js";const Ft={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
