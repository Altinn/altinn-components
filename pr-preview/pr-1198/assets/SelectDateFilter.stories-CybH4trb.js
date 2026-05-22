import{j as t}from"./iframe-DXwGEFZf.js";import{S as a}from"./SelectDateFilter-BncS65u4.js";import{u as m,t as n}from"./example.hooks-Dl8Q3EH_.js";import{T as s,a as l}from"./Toolbar-BV3vLwx2.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-BcOnJrBl.js";import"./useId-Df52yuGg.js";import"./Datepicker-CvmQWJ5_.js";import"./index-DpQTH4Pc.js";import"./ChevronRight-B7NrC3Rp.js";import"./Button-BcOfKjgE.js";import"./tooltip-OQNLf2nv.js";import"./MenuListItem-BMkFPPC3.js";import"./MenuItem-COBQQf6N.js";import"./ItemMedia-C0bSIjdI.js";import"./XMark-BspkucHC.js";import"./Avatar-OxvpOCq4.js";import"./Skeleton-CD7VUCi3.js";import"./AvatarGroup-vB7eodsE.js";import"./Icon-DEVqj2eM.js";import"./Checkmark-DpC6lRZL.js";import"./Heading-D1SypAUR.js";import"./useHighlightedText-NV3gg9HW.js";import"./ItemControls-DXxKFox6.js";import"./Badge-CBgj_4MY.js";import"./Tooltip-DxtRZp3O.js";import"./MenuListHeading-G6YR-18r.js";import"./Fieldset-Cy33GwGY.js";import"./Label-ChoE5xRO.js";import"./Input-CjRvyA41.js";import"./SearchField-BCjbtpiQ.js";import"./MagnifyingGlass-CllD3bzP.js";import"./FieldBase-BwCMZAv_.js";import"./Typography-CegVoZkA.js";import"./useMenu-DnVZQPIX.js";import"./index-BmZUBcCg.js";import"./InformationSquare-CathhXXw.js";import"./Paperclip-DhRJlu28.js";import"./Eye-DCromwe3.js";import"./MenuHamburger-DYibhKnt.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./useDropdownMenuController-3S7tUMR-.js";import"./Plus-6DEjvg57.js";import"./Dropdown-BZOF64eO.js";import"./ChevronUpDown-DoaPnXHw.js";import"./ButtonGroup-BgmjkJuw.js";import"./ButtonGroupDivider-Cg8WMtdf.js";import"./ToolbarMenu-DYrFr0_m.js";import"./ToolbarSearch-DigZ9geU.js";const st={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=m({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=m({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=m({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(s,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
