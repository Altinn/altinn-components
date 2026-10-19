var R=Object.defineProperty;var t=(l,n)=>R(l,"name",{value:n,configurable:!0});import{a7 as e,aa as g,c as z,T as P,l as O}from"./iframe-BhbNl8M-.js";import{i as m}from"./example.data-DB_QxykC.js";import{b as W,a as b,u as E}from"./example.hooks-PEICMzLN.js";import{T as s,a as f}from"./Toolbar-Cd-nnA0c.js";import{S as V}from"./Bookmark-fWw4PRdh.js";import{T as S}from"./ToolbarMenu-CGZc-SL-.js";import{T as x}from"./ToolbarSearch-Dh0sqSUB.js";import{S as B}from"./Switch-HPZGYIQM.js";import{Q as T}from"./QueryLabel-y5wveDgK.js";import"./preload-helper-Cc2_yIPf.js";import"./InformationSquare-9qL3pT6L.js";import"./Paperclip-5XsvK0HN.js";import"./Eye-DNiUrCQs.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-DEHtIGqF.js";import"./useDropdownMenuController-BrJ75r99.js";import"./Dropdown--p27U_G_.js";import"./SearchField-ClYBiZmS.js";import"./MagnifyingGlass-CzKquxqQ.js";import"./FieldBase--SCvu2WQ.js";import"./Typography-DcyIPmTi.js";import"./useHighlightedText-LhTntwcL.js";import"./Field-Qg24LC8p.js";import"./Label-BJPwmzpN.js";import"./Input-jGspNcB3.js";import"./useMenu-6KerkDf-.js";import"./MenuListItem-CmOECRgU.js";import"./MenuListDivider-DzxdVQ89.js";import"./MenuListHeading-DAQ9yky2.js";import"./MenuItem-C2AE0J9V.js";import"./ItemMedia-1lh8-vEh.js";import"./Avatar-BNyDKZi7.js";import"./AvatarGroup-B4pMcHMh.js";import"./Checkmark-CzAA5vNN.js";import"./ItemLabel-BJSi7rzf.js";import"./Heading-Cykhux0L.js";import"./ItemControls-Enh4UL9O.js";import"./Badge-np8uN8Yi.js";import"./Tooltip-8dIP2lk7.js";import"./ChevronRight-DG59p-Nv.js";import"./Plus-BcmDIJkz.js";import"./ButtonGroup-Tx5tOZpy.js";import"./ButtonGroupDivider-DzYj1AlG.js";import"./ChevronUpDown-DD9NYfqC.js";const Oe={title:"Toolbar/Toolbar",component:s,parameters:{},decorators:[(l,n)=>{const r={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return e.jsx("div",{style:r,children:e.jsx(l,{})})}],args:{}},k=t(()=>e.jsxs(s,{children:[e.jsx(S,{items:[{title:"MenuItem 1"},{title:"MenuItem 2"},{title:"MenuItem 3"}],label:"Menu"}),e.jsx(x,{name:"search",placeholder:"Search"}),e.jsx(f,{filterState:{},filters:[{label:"Filter 1",name:"f1",items:[{role:"radio",name:"1",value:"1",label:"Filter 1"},{role:"radio",name:"2",value:"2",label:"Filter 2"},{role:"radio",name:"3",value:"3",label:"Filter 3"}]},{label:"Filter 2",name:"f2",items:[{role:"checkbox",name:"1",value:"1",label:"Filter 1"},{role:"checkbox",name:"2",value:"2",label:"Filter 2"},{role:"checkbox",name:"3",value:"3",label:"Filter 3"}]}]})]}),"Composition"),I=t(()=>e.jsxs(s,{children:[e.jsx(S,{label:"Menu",htmlTitle:"Velg en handling fra menyen",items:[{title:"MenuItem 1"},{title:"MenuItem 2"},{title:"MenuItem 3"}]}),e.jsx(x,{name:"search",placeholder:"Search",htmlTitle:"Søk i innboksen"}),e.jsx(f,{filterState:{},filters:[{label:"Filter 1",name:"f1",htmlTitle:"Filtrer på alternativ",items:[{role:"radio",name:"f1",htmlTitle:"valg 1",value:"1",label:"Filter 1"},{role:"radio",name:"f1",value:"2",htmlTitle:"valg 2",label:"Filter 2"}]},{label:"Filter 2",name:"f2",htmlTitle:"Filtrer på flere alternativer",removable:!0,items:[{role:"checkbox",name:"f2",value:"1",label:"Filter 1"},{role:"checkbox",name:"f2",value:"2",label:"Filter 2"}]}]})]}),"WithHtmlTitle"),A=t(()=>e.jsxs(s,{children:[e.jsx(x,{name:"search",placeholder:"Search"}),e.jsx(f,{virtualized:!0,filterState:{},filters:[{label:"Filter 1",name:"f1",items:[{role:"radio",name:"f1",value:"1",label:"Filter 1"},{role:"radio",name:"f1",value:"2",label:"Filter 2"},{role:"radio",name:"f1",value:"3",label:"Filter 3"}]},{label:"Filter 2",name:"f2",items:[{role:"checkbox",name:"f2",value:"1",label:"Filter 1"},{role:"checkbox",name:"f2",value:"2",label:"Filter 2"},{role:"checkbox",name:"f2",value:"3",label:"Filter 3"}]}]})]}),"SearchAndFilter"),C=t(()=>{const[l,n]=g.useState({fruit:[]});return e.jsxs(s,{children:[e.jsx(x,{name:"search",placeholder:"Search"}),e.jsx(f,{filterState:l,onFilterStateChange:n,getFilterLabel:t((r,o)=>!o?.length&&r==="fruit"?"Select Fruit":!o?.length&&r==="plan"?"Select plans":o?.join(","),"getFilterLabel"),filters:[{virtualized:!0,id:"fruit",label:"Choose a fruit",name:"fruit",items:[{groupId:"citrus",role:"radio",name:"fruit",value:"Orange",label:"Orange"},{groupId:"other",role:"radio",name:"fruit",value:"Apple",label:"Apple"},{groupId:"other",role:"radio",name:"fruit",value:"Kiwi",label:"Kiwi"}]},{id:"plan",label:"Choose plans",name:"plan",searchable:!0,groupId:"what-todo",groups:{"what-todo":{title:"What to do?"},other:{title:"Other"}},items:[{groupId:"what-todo",role:"checkbox",name:"plan",value:"Fishing",label:"Fishing",searchWords:["Fishing","guttastemning"]},{groupId:"what-todo",role:"checkbox",name:"plan",value:"Working",label:"Working",searchWords:["working","nine-to-five"]},{groupId:"other",role:"checkbox",name:"plan",value:"Sleeping",label:"Sleeping",searchWords:["Sleeping","zzz"]}]}]}),e.jsx(B,{label:"Switch",size:"sm"})]})},"SearchAndSwitch"),j=t(()=>{const l=b({filters:m?.map(n=>({...n}))});return e.jsx(s,{filter:l})},"StaticFilters"),y=t(()=>{const l=b({filters:m});return e.jsxs(O.TriggerContext,{children:[e.jsx(O.Trigger,{children:"Open Dialog"}),e.jsx(O,{style:{height:"20rem"},children:e.jsx(s,{filter:l})})]})},"StaticFiltersInDialog"),M=t(()=>{const l=b({filters:m?.map(n=>({...n,removable:!0}))});return e.jsx(s,{filter:l})},"RemovableFilters"),w=t(()=>{const{menus:l}=W(),n=b({filters:m?.map(r=>({...r,removable:!0}))});return e.jsx(s,{menus:l,filter:n})},"AccountMenuAndFilters"),D=t(()=>{const{menus:l,search:n}=W(),r=b({filters:m?.map(o=>({...o,removable:!0}))});return e.jsx(s,{menus:l,search:{...n,collapsible:!0},filter:r})},"AccountMenuAndSearch"),L=t(()=>{const{menus:l}=W(),n=b({filters:m?.map(a=>({...a,removable:!0}))}),[r,o]=g.useState(""),i=[{groupId:"1",title:"Nytt søk",label:e.jsx(T,{params:[{type:"search",value:r,label:r}]}),linkIcon:!0,onClick:t(()=>{console.info("Search for new query:")},"onClick")},{groupId:"1",title:"Søk + filter",label:e.jsx(T,{params:[{type:"search",value:r,label:r},{type:"filter",value:"Test",label:"2 filter"}]}),linkIcon:!0,onClick:t(()=>{console.info("Search for new query + filters")},"onClick")}],u={open:r.length>=1,onClose:t(()=>{console.log("Close")},"onClose"),groups:{1:{title:""},2:{title:"Lagrede søk"}},items:[...i,{groupId:"2",title:"Lagret søk 1",label:e.jsx(T,{params:[{type:"search",value:r,label:"Skattemelding"},{type:"filter",value:"Test",label:"2 filter"}]}),linkIcon:!0},{groupId:"2","aria-label":"Lagret søk 2",label:e.jsx(T,{params:[{type:"filter",value:"Test",label:"Skatteetaten"}]}),linkIcon:!0}]},d={value:r,onChange:t(a=>o(a.target.value),"onChange"),onClear:t(()=>o(""),"onClear"),placeholder:"Søk",collapsible:!0,minLength:3,menu:u},v=t(()=>{o(""),n.onFilterStateChange?.({})},"handleReset"),c=r||Object.values(n?.filterState??{}).some(a=>a?.length);return e.jsx(s,{menus:l,search:d,filter:{...n,showResetButton:!1},children:c&&e.jsxs(e.Fragment,{children:[e.jsxs(z,{onClick:v,variant:"ghost",children:[e.jsx(P,{"aria-hidden":"true"}),e.jsx("span",{children:"Nullstill"})]}),e.jsxs(z,{onClick:t(()=>alert("Lagre søk"),"onClick"),variant:"ghost",children:[e.jsx(V,{"aria-hidden":"true"}),e.jsx("span",{children:"Lagre"})]})]})})},"AccountMenuAndSearchAutocomplete"),Q=t(()=>{const l=E("aa-1"),r=l.items?.find(a=>a.selected)?.icon?.isParent,o=b({filters:m?.map(a=>({...a,removable:!0}))}),i=o?.filterState,u=t(a=>{const p=a.target.type,h=a.target.value;p==="radio"?o?.onFilterStateChange?.({...i,subaccount:[h]}):i?.subaccount?.includes(h)?o?.onFilterStateChange?.({...i,subaccount:[...i?.subaccount?.filter(F=>F!==h)||[]]}):o?.onFilterStateChange?.({...i,subaccount:[...i?.subaccount?.filter(F=>F!=="all")||[],h]})},"onSubAccountChange"),d=[{id:"1",groupId:"2",title:"Hovedenhet",description:"Org nr.",value:"hoved",name:"subaccount",role:"checkbox"},{id:"2",groupId:"2",title:"Underenhet",description:"Org nr.",name:"subaccount",value:"under",role:"checkbox"}].map(a=>({...a,checked:i?.subaccount?.includes(a.value),onChange:u})),v=[{id:"all",groupId:"1",title:"Alle enheter",name:"subaccount",value:"all",role:"radio",checked:i?.subaccount?.includes("all")||!i?.subaccount?.length,onChange:u},...d],c=t(()=>{const a=d?.filter(p=>i?.subaccount?.includes(p.value))?.length;return a===1?d?.find(p=>i?.subaccount?.includes(p.value))?.title:a?`${a} enheter`:`${d?.length} enheter`},"getSubAccountLabel");return e.jsxs(s,{children:[e.jsx(S,{...l}),r&&e.jsx(S,{id:"subaccounts",items:v,label:c(),virtualized:!0}),e.jsx(f,{...o})]})},"AccountMenuAndSubmenu"),q=t(()=>{const l=E("aa-1"),n=b({filters:m?.map(c=>({...c,removable:!0}))}),[r,o]=g.useState("");function i(c,a){const[p,h]=g.useState(c);return g.useEffect(()=>{const F=setTimeout(()=>{h(c)},a);return()=>{clearTimeout(F)}},[c,a]),p}t(i,"useDebounce");const u=i(r,500),v=r!==u;return g.useEffect(()=>{u&&console.log("Fetching data for:",u)},[u]),e.jsxs(s,{children:[e.jsx(S,{...l}),e.jsx(x,{value:r,loading:v,onChange:t(c=>o(c.target.value),"onChange"),onClear:t(()=>o(""),"onClear")}),e.jsx(f,{...n})]})},"DebouncedQuery");k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  return <Toolbar>
      <ToolbarMenu items={[{
      title: 'MenuItem 1'
    }, {
      title: 'MenuItem 2'
    }, {
      title: 'MenuItem 3'
    }]} label="Menu" />
      <ToolbarSearch name="search" placeholder="Search" />
      <ToolbarFilter filterState={{}} filters={[{
      label: 'Filter 1',
      name: 'f1',
      items: [{
        role: 'radio',
        name: '1',
        value: '1',
        label: 'Filter 1'
      }, {
        role: 'radio',
        name: '2',
        value: '2',
        label: 'Filter 2'
      }, {
        role: 'radio',
        name: '3',
        value: '3',
        label: 'Filter 3'
      }]
    }, {
      label: 'Filter 2',
      name: 'f2',
      items: [{
        role: 'checkbox',
        name: '1',
        value: '1',
        label: 'Filter 1'
      }, {
        role: 'checkbox',
        name: '2',
        value: '2',
        label: 'Filter 2'
      }, {
        role: 'checkbox',
        name: '3',
        value: '3',
        label: 'Filter 3'
      }]
    }]} />
    </Toolbar>;
}`,...k.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  return <Toolbar>
      <ToolbarMenu label="Menu" htmlTitle="Velg en handling fra menyen" items={[{
      title: 'MenuItem 1'
    }, {
      title: 'MenuItem 2'
    }, {
      title: 'MenuItem 3'
    }]} />
      <ToolbarSearch name="search" placeholder="Search" htmlTitle="Søk i innboksen" />
      <ToolbarFilter filterState={{}} filters={[{
      label: 'Filter 1',
      name: 'f1',
      htmlTitle: 'Filtrer på alternativ',
      items: [{
        role: 'radio',
        name: 'f1',
        htmlTitle: 'valg 1',
        value: '1',
        label: 'Filter 1'
      }, {
        role: 'radio',
        name: 'f1',
        value: '2',
        htmlTitle: 'valg 2',
        label: 'Filter 2'
      }]
    }, {
      label: 'Filter 2',
      name: 'f2',
      htmlTitle: 'Filtrer på flere alternativer',
      removable: true,
      items: [{
        role: 'checkbox',
        name: 'f2',
        value: '1',
        label: 'Filter 1'
      }, {
        role: 'checkbox',
        name: 'f2',
        value: '2',
        label: 'Filter 2'
      }]
    }]} />
    </Toolbar>;
}`,...I.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  return <Toolbar>
      <ToolbarSearch name="search" placeholder="Search" />
      <ToolbarFilter virtualized filterState={{}} filters={[{
      label: 'Filter 1',
      name: 'f1',
      items: [{
        role: 'radio',
        name: 'f1',
        value: '1',
        label: 'Filter 1'
      }, {
        role: 'radio',
        name: 'f1',
        value: '2',
        label: 'Filter 2'
      }, {
        role: 'radio',
        name: 'f1',
        value: '3',
        label: 'Filter 3'
      }]
    }, {
      label: 'Filter 2',
      name: 'f2',
      items: [{
        role: 'checkbox',
        name: 'f2',
        value: '1',
        label: 'Filter 1'
      }, {
        role: 'checkbox',
        name: 'f2',
        value: '2',
        label: 'Filter 2'
      }, {
        role: 'checkbox',
        name: 'f2',
        value: '3',
        label: 'Filter 3'
      }]
    }]} />
    </Toolbar>;
}`,...A.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const [filterState, setFilterState] = useState<ToolbarFilterProps['filterState']>({
    fruit: []
  });
  return <Toolbar>
      <ToolbarSearch name="search" placeholder="Search" />
      <ToolbarFilter filterState={filterState} onFilterStateChange={setFilterState} getFilterLabel={(name, filterValues) => {
      if (!filterValues?.length && name === 'fruit') return 'Select Fruit';
      if (!filterValues?.length && name === 'plan') return 'Select plans';
      return filterValues?.join(',');
    }} filters={[{
      virtualized: true,
      id: 'fruit',
      label: 'Choose a fruit',
      name: 'fruit',
      items: [{
        groupId: 'citrus',
        role: 'radio',
        name: 'fruit',
        value: 'Orange',
        label: 'Orange'
      }, {
        groupId: 'other',
        role: 'radio',
        name: 'fruit',
        value: 'Apple',
        label: 'Apple'
      }, {
        groupId: 'other',
        role: 'radio',
        name: 'fruit',
        value: 'Kiwi',
        label: 'Kiwi'
      }]
    }, {
      id: 'plan',
      label: 'Choose plans',
      name: 'plan',
      searchable: true,
      groupId: 'what-todo',
      groups: {
        'what-todo': {
          title: 'What to do?'
        },
        other: {
          title: 'Other'
        }
      },
      items: [{
        groupId: 'what-todo',
        role: 'checkbox',
        name: 'plan',
        value: 'Fishing',
        label: 'Fishing',
        searchWords: ['Fishing', 'guttastemning']
      }, {
        groupId: 'what-todo',
        role: 'checkbox',
        name: 'plan',
        value: 'Working',
        label: 'Working',
        searchWords: ['working', 'nine-to-five']
      }, {
        groupId: 'other',
        role: 'checkbox',
        name: 'plan',
        value: 'Sleeping',
        label: 'Sleeping',
        searchWords: ['Sleeping', 'zzz']
      }]
    }]} />
      <Switch label="Switch" size="sm" />
    </Toolbar>;
}`,...C.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const staticFilters = useInboxFilter({
    filters: inboxFilters?.map(item => ({
      ...item
    }))
  });
  return <Toolbar filter={staticFilters} />;
}`,...j.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const staticFilters = useInboxFilter({
    filters: inboxFilters
  });
  return <DsDialog.TriggerContext>
      <DsDialog.Trigger>Open Dialog</DsDialog.Trigger>
      <DsDialog style={{
      height: '20rem'
    }}>
        <Toolbar filter={staticFilters} />
      </DsDialog>
    </DsDialog.TriggerContext>;
}`,...y.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const removableFilter = useInboxFilter({
    filters: inboxFilters?.map(item => ({
      ...item,
      removable: true
    }))
  });
  return <Toolbar filter={removableFilter} />;
}`,...M.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const {
    menus
  } = useInboxToolbar();
  const removableFilter = useInboxFilter({
    filters: inboxFilters?.map(item => ({
      ...item,
      removable: true
    }))
  });
  return <Toolbar menus={menus} filter={removableFilter} />;
}`,...w.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const {
    menus,
    search
  } = useInboxToolbar();
  const removableFilter = useInboxFilter({
    filters: inboxFilters?.map(item => ({
      ...item,
      removable: true
    }))
  });
  return <Toolbar menus={menus} search={{
    ...search,
    collapsible: true
  }} filter={removableFilter} />;
}`,...D.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const {
    menus
  } = useInboxToolbar();
  const removableFilter = useInboxFilter({
    filters: inboxFilters?.map(item => ({
      ...item,
      removable: true
    }))
  });
  const [q, setQ] = useState('');
  const suggestions = [{
    groupId: '1',
    title: 'Nytt søk',
    label: <QueryLabel params={[{
      type: 'search',
      value: q,
      label: q
    }]} />,
    linkIcon: true,
    onClick: () => {
      console.info('Search for new query:');
    }
  }, {
    groupId: '1',
    title: 'Søk + filter',
    label: <QueryLabel params={[{
      type: 'search',
      value: q,
      label: q
    }, {
      type: 'filter',
      value: 'Test',
      label: '2 filter'
    }]} />,
    linkIcon: true,
    onClick: () => {
      console.info('Search for new query + filters');
    }
  }];
  const menu = {
    open: q.length >= 1,
    onClose: () => {
      console.log('Close');
    },
    groups: {
      '1': {
        title: ''
      },
      '2': {
        title: 'Lagrede søk'
      }
    },
    items: [...suggestions, {
      groupId: '2',
      title: 'Lagret søk 1',
      label: <QueryLabel params={[{
        type: 'search',
        value: q,
        label: 'Skattemelding'
      }, {
        type: 'filter',
        value: 'Test',
        label: '2 filter'
      }]} />,
      linkIcon: true
    }, {
      groupId: '2',
      'aria-label': 'Lagret søk 2',
      label: <QueryLabel params={[{
        type: 'filter',
        value: 'Test',
        label: 'Skatteetaten'
      }]} />,
      linkIcon: true
    }]
  };
  const search = {
    value: q,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setQ(e.target.value),
    onClear: () => setQ(''),
    placeholder: 'Søk',
    collapsible: true,
    minLength: 3,
    menu
  };
  const handleReset = () => {
    setQ('');
    removableFilter.onFilterStateChange?.({});
  };
  const hasFilters = q || Object.values(removableFilter?.filterState ?? {}).some(v => v?.length);
  return <Toolbar menus={menus} search={search} filter={{
    ...removableFilter,
    showResetButton: false
  }}>
      {hasFilters && <>
          <Button onClick={handleReset} variant="ghost">
            <XMarkIcon aria-hidden="true" />
            <span>Nullstill</span>
          </Button>
          <Button onClick={() => alert('Lagre søk')} variant="ghost">
            <BookmarkIcon aria-hidden="true" />
            <span>Lagre</span>
          </Button>
        </>}
    </Toolbar>;
}`,...L.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
  const accountMenu = useAccountMenu('aa-1');
  const selectedAccount = accountMenu.items?.find(item => item.selected);
  const selectedIsParent = selectedAccount?.icon?.isParent;
  const removableFilter = useInboxFilter({
    filters: inboxFilters?.map(item => ({
      ...item,
      removable: true
    }))
  });
  const filterState = removableFilter?.filterState;
  const onSubAccountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const type = e.target.type;
    const value = e.target.value;
    if (type === 'radio') {
      removableFilter?.onFilterStateChange?.({
        ...filterState,
        subaccount: [value]
      });
    } else {
      if (filterState?.subaccount?.includes(value)) {
        removableFilter?.onFilterStateChange?.({
          ...filterState,
          subaccount: [...(filterState?.subaccount?.filter(v => v !== value) || [])]
        });
      } else {
        removableFilter?.onFilterStateChange?.({
          ...filterState,
          subaccount: [...(filterState?.subaccount?.filter(v => v !== 'all') || []), value]
        });
      }
    }
  };
  const subAccounts = [{
    id: '1',
    groupId: '2',
    title: 'Hovedenhet',
    description: 'Org nr.',
    value: 'hoved',
    name: 'subaccount',
    role: 'checkbox'
  }, {
    id: '2',
    groupId: '2',
    title: 'Underenhet',
    description: 'Org nr.',
    name: 'subaccount',
    value: 'under',
    role: 'checkbox'
  }]?.map(item => {
    return {
      ...item,
      checked: filterState?.subaccount?.includes(item.value),
      onChange: onSubAccountChange
    };
  });
  const subAccountsAndAll = [{
    id: 'all',
    groupId: '1',
    title: 'Alle enheter',
    name: 'subaccount',
    value: 'all',
    role: 'radio',
    checked: filterState?.subaccount?.includes('all') || !filterState?.subaccount?.length,
    onChange: onSubAccountChange
  }, ...subAccounts];
  const getSubAccountLabel = () => {
    const count = subAccounts?.filter(item => filterState?.subaccount?.includes(item.value))?.length;
    if (count === 1) {
      return subAccounts?.find(item => filterState?.subaccount?.includes(item.value))?.title;
    }
    if (count) {
      return \`\${count} enheter\`;
    }
    return \`\${subAccounts?.length} enheter\`;
  };
  return <Toolbar>
      <ToolbarMenu {...accountMenu as ToolbarMenuProps} />
      {selectedIsParent && <ToolbarMenu id="subaccounts" items={subAccountsAndAll} label={getSubAccountLabel()} virtualized />}
      <ToolbarFilter {...removableFilter} />
    </Toolbar>;
}`,...Q.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  const accountMenu = useAccountMenu('aa-1');
  const removableFilter = useInboxFilter({
    filters: inboxFilters?.map(item => ({
      ...item,
      removable: true
    }))
  });
  const [q, setQ] = useState('');
  function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      // Cancel previous timeout if value changes
      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);
    return debouncedValue;
  }
  const debouncedQuery = useDebounce(q, 500);

  // We are "loading" if the current text hasn't caught up to the debounced text
  // OR if an actual API call is in progress (args.loading)
  const isTyping = q !== debouncedQuery;
  const loading = isTyping;
  useEffect(() => {
    if (debouncedQuery) {
      console.log('Fetching data for:', debouncedQuery);
      // Simulate API call
      // setTimeout(() => {
      //   console.log('Data fetched for:', debouncedQuery);
      // }, 1000);
    }
  }, [debouncedQuery]);
  return <Toolbar>
      <ToolbarMenu {...accountMenu as ToolbarMenuProps} />
      <ToolbarSearch value={q} loading={loading} onChange={e => setQ(e.target.value)} onClear={() => setQ('')} />
      <ToolbarFilter {...removableFilter} />
    </Toolbar>;
}`,...q.parameters?.docs?.source}}};const We=["Composition","WithHtmlTitle","SearchAndFilter","SearchAndSwitch","StaticFilters","StaticFiltersInDialog","RemovableFilters","AccountMenuAndFilters","AccountMenuAndSearch","AccountMenuAndSearchAutocomplete","AccountMenuAndSubmenu","DebouncedQuery"];export{w as AccountMenuAndFilters,D as AccountMenuAndSearch,L as AccountMenuAndSearchAutocomplete,Q as AccountMenuAndSubmenu,k as Composition,q as DebouncedQuery,M as RemovableFilters,A as SearchAndFilter,C as SearchAndSwitch,j as StaticFilters,y as StaticFiltersInDialog,I as WithHtmlTitle,We as __namedExportsOrder,Oe as default};
