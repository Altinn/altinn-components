import{j as t}from"./iframe-CXxOXnma.js";import{S as a}from"./SelectDateFilter-CY-sJRoF.js";import{u as m,t as n}from"./example.hooks-D2ArEn0y.js";import{T as s,a as l}from"./Toolbar-C_u-revV.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-DZKfGOMJ.js";import"./useId-CYy4MNIP.js";import"./Datepicker-CuxkitQR.js";import"./index-DvzmMrBu.js";import"./ChevronRight-fDr-lddl.js";import"./Button-Dot-dF6F.js";import"./tooltip-F-8CLWbq.js";import"./MenuListItem-Coun_kyi.js";import"./MenuItem-DUKdLPhz.js";import"./ItemMedia-BJW132yJ.js";import"./XMark-DvGwYctt.js";import"./Avatar-De_JFqYW.js";import"./Skeleton-DaZzKoDP.js";import"./AvatarGroup-DdK_Ls54.js";import"./Icon-CyU2k-nr.js";import"./Checkmark-CEwGjLXr.js";import"./Heading-CD_Q6pfI.js";import"./useHighlightedText-Cggf4nMP.js";import"./ItemControls-D969--fk.js";import"./Badge-c48mXhtB.js";import"./Tooltip-CMWO30ox.js";import"./MenuListHeading-C-5Y0Jxa.js";import"./Fieldset-BHpddb-0.js";import"./Label-CsbjAOhP.js";import"./Input-jSu8pVt5.js";import"./SearchField-Bi4ovUnL.js";import"./MagnifyingGlass-D50FbQFC.js";import"./FieldBase-DpHGffp6.js";import"./Typography-4yj_ylkx.js";import"./useMenu-B3yI9DRQ.js";import"./index-B9pxKBgX.js";import"./InformationSquare-C99f4nwm.js";import"./Paperclip-CPFBLELT.js";import"./Eye-ClEd4FCG.js";import"./MenuHamburger-Bx8_EIQG.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-DJy2cdVV.js";import"./Plus-52Qbrw3J.js";import"./Dropdown-Dq-7A4eI.js";import"./ChevronUpDown-DCJNm4Na.js";import"./ButtonGroup-DA7guRJP.js";import"./ButtonGroupDivider-ChU-bpp6.js";import"./ToolbarMenu-Dgoe4v0m.js";import"./ToolbarSearch-CaCldTDV.js";const st={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
