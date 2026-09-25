import{a7 as t}from"./iframe-C7-WWuUz.js";import{S as a}from"./SelectDateFilter-DS9P8mug.js";import{t as n}from"./example.data-CY7RP43-.js";import{a as s}from"./example.hooks-BZ0e7cqT.js";import{T as m,a as l}from"./Toolbar-DageSG6F.js";import"./preload-helper-PPVm8Dsz.js";import"./DatepickerFilter-ErFAdS97.js";import"./MenuListItem-DIEDNnJ4.js";import"./MenuItem-kril0LwU.js";import"./ItemMedia-CBTlpYQC.js";import"./Avatar-DglSEPrl.js";import"./AvatarGroup-BEa8YAn4.js";import"./Checkmark-CVmHJGo_.js";import"./ItemLabel-IzbVhm7b.js";import"./Heading-Fd09NSi6.js";import"./useHighlightedText-DgrX0qZ_.js";import"./ItemControls-Bq7352tZ.js";import"./Badge-BbkNQ9iQ.js";import"./Tooltip-Bvj4CCJp.js";import"./ChevronRight-C0CFQIi6.js";import"./ArrowUndo-DA-0LlcY.js";import"./MenuListDivider-FRFmhjs8.js";import"./Fieldset-C__nCW3E.js";import"./Field-D-AdTR5I.js";import"./Label-BjNI2Oja.js";import"./Input-DA__wV57.js";import"./Datepicker-BBxkvArV.js";import"./SearchField-B35ZfRWV.js";import"./MagnifyingGlass-DZeq_z0m.js";import"./FieldBase-V8CxIyK2.js";import"./Typography-BeOUX7s0.js";import"./useMenu-pD-uRv9Z.js";import"./MenuListHeading-BO147Bx-.js";import"./InformationSquare-B8uck3iJ.js";import"./Paperclip-D9xvKaGA.js";import"./Eye-Cl-bFUJe.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-C7i5GpCo.js";import"./useDropdownMenuController-CONOWsYf.js";import"./Dropdown-3ZYKEzsd.js";import"./Plus-0EP1hD2t.js";import"./ButtonGroup-Bf7xvvo6.js";import"./ButtonGroupDivider-BWgufaqK.js";import"./ChevronUpDown-DEQPPOZD.js";import"./ToolbarMenu-BnxiGlFu.js";import"./ToolbarSearch-DFXmwmLe.js";const nt={title:"Toolbar/SelectDateFilter",component:a,parameters:{},args:{}},e=()=>{const r=s({filters:[{...n,as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},i=()=>{const r=s({filters:[{...n,as:a,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},o=()=>{const r=n.items.map(c=>({...c,name:"date"})),p=s({filters:[{...n,items:r,name:"date",as:a}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(m,{children:t.jsx(l,{...p})}),t.jsx("hr",{}),JSON.stringify(p.filterState)]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
