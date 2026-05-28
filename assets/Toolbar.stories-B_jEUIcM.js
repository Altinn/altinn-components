import{p as e,s as h}from"./iframe-BBbEwSaq.js";import{b as q,a as u,i as m,u as z}from"./example.hooks-Dm6optpP.js";import{T as s,a as v}from"./Toolbar-Bjujq1Yn.js";import{S as W}from"./XMark-Dw8JSfSd.js";import{S as E}from"./Bookmark-CREc3UJh.js";import{T as D}from"./ToolbarMenu-lZoPJ6OZ.js";import{T as L}from"./ToolbarSearch-aJlGHfoZ.js";import{S as R}from"./Switch-CtGtmSJw.js";import{f as Q}from"./tooltip-D3G3Ewte.js";import{B as O}from"./Button-DpW4Pu6O.js";import{Q as F}from"./QueryLabel-CCla4rNK.js";import"./preload-helper-PPVm8Dsz.js";import"./InformationSquare-BNlJiT0G.js";import"./useId-DZp72-eX.js";import"./Paperclip-CTYUfIdt.js";import"./Eye-DjmH3mmf.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-CaVnn13l.js";import"./index-awH0sXcw.js";import"./useDropdownMenuController-e_G_Gi4i.js";import"./Dropdown-CQPIYrWf.js";import"./SearchField-D1R32ak6.js";import"./MagnifyingGlass-B6FIAadU.js";import"./FieldBase-CbyxT5SM.js";import"./Typography-41mT2wo8.js";import"./useHighlightedText-DORd4ETJ.js";import"./Skeleton-DFF9p8Mx.js";import"./Label-DdMEJ83A.js";import"./Input-lqau07kD.js";import"./useMenu-CP6B3JUk.js";import"./MenuListItem-UbII8Q2r.js";import"./MenuListHeading-C7xt4T8q.js";import"./MenuItem-CL2l3rp8.js";import"./ItemMedia-DR-yuWlq.js";import"./Avatar-RSQnlVTq.js";import"./AvatarGroup-DM7mpZJM.js";import"./Icon-Cx6QAjG2.js";import"./Checkmark-BcTHEh83.js";import"./ItemLabel-B9gTJ9up.js";import"./Heading-DDkqEyV3.js";import"./ItemControls-DaNsbzwN.js";import"./Badge-CZZB9VpQ.js";import"./Tooltip-BL1y86OR.js";import"./ChevronRight-Bj8DUJ8P.js";import"./index-BBId2cwS.js";import"./Plus-CmpsnneT.js";import"./ButtonGroup-oq7iIeFJ.js";import"./ButtonGroupDivider-DFu7SRn8.js";import"./ChevronUpDown-qfg5q5aR.js";const ze={title:"Toolbar/Toolbar",component:s,parameters:{},decorators:[(a,o)=>{const t={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return e.jsx("div",{style:t,children:e.jsx(a,{})})}],args:{}},S=()=>e.jsxs(s,{children:[e.jsx(D,{items:[{title:"MenuItem 1"},{title:"MenuItem 2"},{title:"MenuItem 3"}],label:"Menu"}),e.jsx(L,{name:"search",placeholder:"Search"}),e.jsx(v,{filterState:{},filters:[{label:"Filter 1",name:"f1",items:[{role:"radio",name:"1",value:"1",label:"Filter 1"},{role:"radio",name:"2",value:"2",label:"Filter 2"},{role:"radio",name:"3",value:"3",label:"Filter 3"}]},{label:"Filter 2",name:"f2",items:[{role:"checkbox",name:"1",value:"1",label:"Filter 1"},{role:"checkbox",name:"2",value:"2",label:"Filter 2"},{role:"checkbox",name:"3",value:"3",label:"Filter 3"}]}]})]}),x=()=>e.jsxs(s,{children:[e.jsx(L,{name:"search",placeholder:"Search"}),e.jsx(v,{virtualized:!0,filterState:{},filters:[{label:"Filter 1",name:"f1",items:[{role:"radio",name:"f1",value:"1",label:"Filter 1"},{role:"radio",name:"f1",value:"2",label:"Filter 2"},{role:"radio",name:"f1",value:"3",label:"Filter 3"}]},{label:"Filter 2",name:"f2",items:[{role:"checkbox",name:"f2",value:"1",label:"Filter 1"},{role:"checkbox",name:"f2",value:"2",label:"Filter 2"},{role:"checkbox",name:"f2",value:"3",label:"Filter 3"}]}]})]}),k=()=>{const[a,o]=h.useState({fruit:[]});return e.jsxs(s,{children:[e.jsx(L,{name:"search",placeholder:"Search"}),e.jsx(v,{filterState:a,onFilterStateChange:o,getFilterLabel:(t,l)=>!l?.length&&t==="fruit"?"Select Fruit":!l?.length&&t==="plan"?"Select plans":l?.join(","),filters:[{virtualized:!0,id:"fruit",label:"Choose a fruit",name:"fruit",items:[{groupId:"citrus",role:"radio",name:"fruit",value:"Orange",label:"Orange"},{groupId:"other",role:"radio",name:"fruit",value:"Apple",label:"Apple"},{groupId:"other",role:"radio",name:"fruit",value:"Kiwi",label:"Kiwi"}]},{id:"plan",label:"Choose plans",name:"plan",searchable:!0,groupId:"what-todo",groups:{"what-todo":{title:"What to do?"},other:{title:"Other"}},items:[{groupId:"what-todo",role:"checkbox",name:"plan",value:"Fishing",label:"Fishing",searchWords:["Fishing","guttastemning"]},{groupId:"what-todo",role:"checkbox",name:"plan",value:"Working",label:"Working",searchWords:["working","nine-to-five"]},{groupId:"other",role:"checkbox",name:"plan",value:"Sleeping",label:"Sleeping",searchWords:["Sleeping","zzz"]}]}]}),e.jsx(R,{label:"Switch",size:"sm"})]})},T=()=>{const a=u({filters:m?.map(o=>({...o}))});return e.jsx(s,{filter:a})},I=()=>{const a=u({filters:m});return e.jsxs(Q.TriggerContext,{children:[e.jsx(Q.Trigger,{children:"Open Dialog"}),e.jsx(Q,{style:{height:"20rem"},children:e.jsx(s,{filter:a})})]})},A=()=>{const a=u({filters:m?.map(o=>({...o,removable:!0}))});return e.jsx(s,{filter:a})},C=()=>{const{menus:a}=q(),o=u({filters:m?.map(t=>({...t,removable:!0}))});return e.jsx(s,{menus:a,filter:o})},y=()=>{const{menus:a,search:o}=q(),t=u({filters:m?.map(l=>({...l,removable:!0}))});return e.jsx(s,{menus:a,search:{...o,collapsible:!0},filter:t})},j=()=>{const{menus:a}=q(),o=u({filters:m?.map(r=>({...r,removable:!0}))}),[t,l]=h.useState(""),n=[{groupId:"1",title:"Nytt søk",label:e.jsx(F,{params:[{type:"search",value:t,label:t}]}),linkIcon:!0,onClick:()=>{console.info("Search for new query:")}},{groupId:"1",title:"Søk + filter",label:e.jsx(F,{params:[{type:"search",value:t,label:t},{type:"filter",value:"Test",label:"2 filter"}]}),linkIcon:!0,onClick:()=>{console.info("Search for new query + filters")}}],c={open:t.length>=1,onClose:()=>{console.log("Close")},groups:{1:{title:""},2:{title:"Lagrede søk"}},items:[...n,{groupId:"2",title:"Lagret søk 1",label:e.jsx(F,{params:[{type:"search",value:t,label:"Skattemelding"},{type:"filter",value:"Test",label:"2 filter"}]}),linkIcon:!0},{groupId:"2","aria-label":"Lagret søk 2",label:e.jsx(F,{params:[{type:"filter",value:"Test",label:"Skatteetaten"}]}),linkIcon:!0}]},b={value:t,onChange:r=>l(r.target.value),onClear:()=>l(""),placeholder:"Søk",collapsible:!0,minLength:3,menu:c},g=()=>{l(""),o.onFilterStateChange?.({})},i=t||Object.values(o?.filterState??{}).some(r=>r?.length);return e.jsx(s,{menus:a,search:b,filter:{...o,showResetButton:!1},children:i&&e.jsxs(e.Fragment,{children:[e.jsxs(O,{onClick:g,variant:"ghost",children:[e.jsx(W,{"aria-hidden":"true"}),e.jsx("span",{children:"Nullstill"})]}),e.jsxs(O,{onClick:()=>alert("Lagre søk"),variant:"ghost",children:[e.jsx(E,{"aria-hidden":"true"}),e.jsx("span",{children:"Lagre"})]})]})})},M=()=>{const a=z("aa-1"),t=a.items?.find(r=>r.selected)?.icon?.isParent,l=u({filters:m?.map(r=>({...r,removable:!0}))}),n=l?.filterState,c=r=>{const d=r.target.type,p=r.target.value;d==="radio"?l?.onFilterStateChange?.({...n,subaccount:[p]}):n?.subaccount?.includes(p)?l?.onFilterStateChange?.({...n,subaccount:[...n?.subaccount?.filter(f=>f!==p)||[]]}):l?.onFilterStateChange?.({...n,subaccount:[...n?.subaccount?.filter(f=>f!=="all")||[],p]})},b=[{id:"1",groupId:"2",title:"Hovedenhet",description:"Org nr.",value:"hoved",name:"subaccount",role:"checkbox"},{id:"2",groupId:"2",title:"Underenhet",description:"Org nr.",name:"subaccount",value:"under",role:"checkbox"}].map(r=>({...r,checked:n?.subaccount?.includes(r.value),onChange:c})),g=[{id:"all",groupId:"1",title:"Alle enheter",name:"subaccount",value:"all",role:"radio",checked:n?.subaccount?.includes("all")||!n?.subaccount?.length,onChange:c},...b],i=()=>{const r=b?.filter(d=>n?.subaccount?.includes(d.value))?.length;return r===1?b?.find(d=>n?.subaccount?.includes(d.value))?.title:r?`${r} enheter`:`${b?.length} enheter`};return e.jsxs(s,{children:[e.jsx(D,{...a}),t&&e.jsx(D,{id:"subaccounts",items:g,label:i(),virtualized:!0}),e.jsx(v,{...l})]})},w=()=>{const a=z("aa-1"),o=u({filters:m?.map(i=>({...i,removable:!0}))}),[t,l]=h.useState("");function n(i,r){const[d,p]=h.useState(i);return h.useEffect(()=>{const f=setTimeout(()=>{p(i)},r);return()=>{clearTimeout(f)}},[i,r]),d}const c=n(t,500),g=t!==c;return h.useEffect(()=>{c&&console.log("Fetching data for:",c)},[c]),e.jsxs(s,{children:[e.jsx(D,{...a}),e.jsx(L,{value:t,loading:g,onChange:i=>l(i.target.value),onClear:()=>l("")}),e.jsx(v,{...o})]})};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
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
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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
}`,...x.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
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
}`,...k.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const staticFilters = useInboxFilter({
    filters: inboxFilters?.map(item => ({
      ...item
    }))
  });
  return <Toolbar filter={staticFilters} />;
}`,...T.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
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
}`,...I.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const removableFilter = useInboxFilter({
    filters: inboxFilters?.map(item => ({
      ...item,
      removable: true
    }))
  });
  return <Toolbar filter={removableFilter} />;
}`,...A.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
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
}`,...C.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
}`,...y.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
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
}`,...j.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
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
}`,...M.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
}`,...w.parameters?.docs?.source}}};const We=["Composition","SearchAndFilter","SearchAndSwitch","StaticFilters","StaticFiltersInDialog","RemovableFilters","AccountMenuAndFilters","AccountMenuAndSearch","AccountMenuAndSearchAutocomplete","AccountMenuAndSubmenu","DebouncedQuery"];export{C as AccountMenuAndFilters,y as AccountMenuAndSearch,j as AccountMenuAndSearchAutocomplete,M as AccountMenuAndSubmenu,S as Composition,w as DebouncedQuery,A as RemovableFilters,x as SearchAndFilter,k as SearchAndSwitch,T as StaticFilters,I as StaticFiltersInDialog,We as __namedExportsOrder,ze as default};
