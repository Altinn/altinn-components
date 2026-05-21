import{r as c,j as t}from"./iframe-CXxOXnma.js";import{S as u}from"./SelectDateFilter-CY-sJRoF.js";import{a as s,T as m}from"./Toolbar-C_u-revV.js";import{i as l,u as p,t as b}from"./example.hooks-D2ArEn0y.js";import{B as F}from"./Button-Dot-dF6F.js";import{S}from"./Section-BI582Rxy.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowUndo-DZKfGOMJ.js";import"./useId-CYy4MNIP.js";import"./Datepicker-CuxkitQR.js";import"./index-DvzmMrBu.js";import"./ChevronRight-fDr-lddl.js";import"./MenuListItem-Coun_kyi.js";import"./MenuItem-DUKdLPhz.js";import"./ItemMedia-BJW132yJ.js";import"./XMark-DvGwYctt.js";import"./Avatar-De_JFqYW.js";import"./Skeleton-DaZzKoDP.js";import"./AvatarGroup-DdK_Ls54.js";import"./Icon-CyU2k-nr.js";import"./Checkmark-CEwGjLXr.js";import"./Heading-CD_Q6pfI.js";import"./useHighlightedText-Cggf4nMP.js";import"./ItemControls-D969--fk.js";import"./Badge-c48mXhtB.js";import"./Tooltip-CMWO30ox.js";import"./tooltip-F-8CLWbq.js";import"./MenuListHeading-C-5Y0Jxa.js";import"./Fieldset-BHpddb-0.js";import"./Label-CsbjAOhP.js";import"./Input-jSu8pVt5.js";import"./SearchField-Bi4ovUnL.js";import"./MagnifyingGlass-D50FbQFC.js";import"./FieldBase-DpHGffp6.js";import"./Typography-4yj_ylkx.js";import"./useMenu-B3yI9DRQ.js";import"./index-B9pxKBgX.js";import"./InformationSquare-C99f4nwm.js";import"./useDropdownMenuController-DJy2cdVV.js";import"./Plus-52Qbrw3J.js";import"./Dropdown-Dq-7A4eI.js";import"./ChevronUpDown-DCJNm4Na.js";import"./ButtonGroup-DA7guRJP.js";import"./ButtonGroupDivider-ChU-bpp6.js";import"./ToolbarMenu-Dgoe4v0m.js";import"./ToolbarSearch-CaCldTDV.js";import"./Paperclip-CPFBLELT.js";import"./Eye-ClEd4FCG.js";import"./MenuHamburger-Bx8_EIQG.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./Flex-Cdw8i_ge.js";const Ft={title:"Toolbar/ToolbarFilter",component:s,parameters:{},args:{}},i=()=>{const[r,e]=c.useState({});return t.jsxs(m,{children:[t.jsx(s,{getFilterLabel:o=>r?.[o]?.join(",")||"Choose "+o,filterState:r,onFilterStateChange:e,filters:l.map(o=>({...o,removable:!0}))}),t.jsx(F,{onClick:()=>e({}),children:"Reset"})]})},a=()=>{const r=p({filters:l?.map(e=>({...e,removable:!0})),defaultFilterState:{status:["requires-action"],unread:["true"]}});return t.jsx(m,{children:t.jsx(s,{...r})})},n=()=>{const r=p({filters:[{...b,as:u}],defaultFilterState:{}});return t.jsxs(m,{children:[t.jsx(s,{...r}),t.jsxs(S,{margin:"section",children:["State: ",JSON.stringify(r.filterState)]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const [filterState, setFilterState] = useState<ToolbarFilterProps['filterState']>({});
  return <Toolbar>
      <ToolbarFilter getFilterLabel={name => filterState?.[name]?.join(',') || 'Choose ' + name} filterState={filterState} onFilterStateChange={setFilterState} filters={inboxFilters.map(item => ({
      ...item,
      removable: true
    }))} />
      <Button onClick={() => setFilterState({})}>Reset</Button>
    </Toolbar>;
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const inboxFilter = useInboxFilter({
    filters: inboxFilters?.map(item => ({
      ...item,
      removable: true
    })),
    defaultFilterState: {
      status: ['requires-action'],
      unread: ['true']
    }
  });
  return <Toolbar>
      <ToolbarFilter {...inboxFilter} />
    </Toolbar>;
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const inboxFilter = useInboxFilter({
    filters: [{
      ...timeFilter,
      as: SelectDateFilter
    }],
    defaultFilterState: {}
  });
  return <Toolbar>
      <ToolbarFilter {...inboxFilter} />
      <Section margin="section">State: {JSON.stringify(inboxFilter.filterState)}</Section>
    </Toolbar>;
}`,...n.parameters?.docs?.source}}};const St=["Controlled","Removable","Datepicker"];export{i as Controlled,n as Datepicker,a as Removable,St as __namedExportsOrder,Ft as default};
