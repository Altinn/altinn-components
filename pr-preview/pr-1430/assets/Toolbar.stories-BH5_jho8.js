var P=Object.defineProperty;var t=(r,l)=>P(r,"name",{value:l,configurable:!0});import{a7 as e,aa as d,c as W,T as _,l as E}from"./iframe-C320xpwq.js";import{i as g}from"./example.data-Ddineaz7.js";import{b as V,a as f,u as z}from"./example.hooks-CaHKWHHP.js";import{T as s,a as S}from"./Toolbar-ENmDMeOW.js";import{S as H}from"./Bookmark-Bz47rNmZ.js";import{T as x}from"./ToolbarMenu-DBfahwsA.js";import{T as k}from"./ToolbarSearch-Cv5W9lo-.js";import{S as N}from"./Switch-CWssEnQq.js";import{Q as y}from"./QueryLabel-BkUAtmuj.js";import"./preload-helper-Cc2_yIPf.js";import"./InformationSquare-BVSTZ5OZ.js";import"./Paperclip-Dmu98igW.js";import"./Eye-CjG8fDMz.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-CkyOXOBY.js";import"./useDropdownMenuController-sAJd3n4N.js";import"./Dropdown-DOQP5U0B.js";import"./SearchField-BvARDiuT.js";import"./MagnifyingGlass-BNq1j2pw.js";import"./MenuListItem-BqKoFA4P.js";import"./MenuListHeading-BpIk0QC_.js";import"./MenuItem-RBRvsnc4.js";import"./ItemMedia-DXXjb0Ql.js";import"./Avatar-DiTaWPNi.js";import"./AvatarGroup-C3ZQ77zA.js";import"./Checkmark-DXZzi-ZC.js";import"./ItemLabel-DED-sXIi.js";import"./Heading-C_k6PbIN.js";import"./useHighlightedText-DSoWCMjQ.js";import"./ItemControls-PDJ9i9Cv.js";import"./Badge-CKNKkFIN.js";import"./Tooltip-CJNSgf5y.js";import"./ChevronRight-0obYraG7.js";import"./FieldBase-CS4MYGp7.js";import"./Typography-DeOYXGTy.js";import"./Field-WScL1nVe.js";import"./Label-CArvchbl.js";import"./Input-Butkrn3v.js";import"./useMenu-CNq5BiUb.js";import"./MenuListDivider-DFJO6x9b.js";import"./Plus-ZWKQtzTH.js";import"./ButtonGroup-BhnnwPdG.js";import"./ButtonGroupDivider-B_8ggyEP.js";import"./ChevronUpDown-DQPbDjfy.js";const{userEvent:K,within:U}=__STORYBOOK_MODULE_TEST__,Be={title:"Toolbar/Toolbar",component:s,parameters:{},decorators:[(r,l)=>{const n={backgroundColor:"var(--ds-color-background-tinted)",padding:".5em"};return e.jsx("div",{style:n,children:e.jsx(r,{})})}],args:{}},I=t(()=>e.jsxs(s,{children:[e.jsx(x,{items:[{title:"MenuItem 1"},{title:"MenuItem 2"},{title:"MenuItem 3"}],label:"Menu"}),e.jsx(k,{name:"search",placeholder:"Search"}),e.jsx(S,{filterState:{},filters:[{label:"Filter 1",name:"f1",items:[{role:"radio",name:"1",value:"1",label:"Filter 1"},{role:"radio",name:"2",value:"2",label:"Filter 2"},{role:"radio",name:"3",value:"3",label:"Filter 3"}]},{label:"Filter 2",name:"f2",items:[{role:"checkbox",name:"1",value:"1",label:"Filter 1"},{role:"checkbox",name:"2",value:"2",label:"Filter 2"},{role:"checkbox",name:"3",value:"3",label:"Filter 3"}]}]})]}),"Composition"),j=t(()=>e.jsxs(s,{children:[e.jsx(x,{label:"Menu",htmlTitle:"Velg en handling fra menyen",items:[{title:"MenuItem 1"},{title:"MenuItem 2"},{title:"MenuItem 3"}]}),e.jsx(k,{name:"search",placeholder:"Search",htmlTitle:"Søk i innboksen"}),e.jsx(S,{filterState:{},filters:[{label:"Filter 1",name:"f1",htmlTitle:"Filtrer på alternativ",items:[{role:"radio",name:"f1",htmlTitle:"valg 1",value:"1",label:"Filter 1"},{role:"radio",name:"f1",value:"2",htmlTitle:"valg 2",label:"Filter 2"}]},{label:"Filter 2",name:"f2",htmlTitle:"Filtrer på flere alternativer",removable:!0,items:[{role:"checkbox",name:"f2",value:"1",label:"Filter 1"},{role:"checkbox",name:"f2",value:"2",label:"Filter 2"}]}]})]}),"WithHtmlTitle"),A=t(()=>e.jsxs(s,{children:[e.jsx(k,{name:"search",placeholder:"Search"}),e.jsx(S,{virtualized:!0,filterState:{},filters:[{label:"Filter 1",name:"f1",items:[{role:"radio",name:"f1",value:"1",label:"Filter 1"},{role:"radio",name:"f1",value:"2",label:"Filter 2"},{role:"radio",name:"f1",value:"3",label:"Filter 3"}]},{label:"Filter 2",name:"f2",items:[{role:"checkbox",name:"f2",value:"1",label:"Filter 1"},{role:"checkbox",name:"f2",value:"2",label:"Filter 2"},{role:"checkbox",name:"f2",value:"3",label:"Filter 3"}]}]})]}),"SearchAndFilter"),C=t(()=>{const[r,l]=d.useState({fruit:[]});return e.jsxs(s,{children:[e.jsx(k,{name:"search",placeholder:"Search"}),e.jsx(S,{filterState:r,onFilterStateChange:l,getFilterLabel:t((n,o)=>!o?.length&&n==="fruit"?"Select Fruit":!o?.length&&n==="plan"?"Select plans":o?.join(","),"getFilterLabel"),filters:[{virtualized:!0,id:"fruit",label:"Choose a fruit",name:"fruit",items:[{groupId:"citrus",role:"radio",name:"fruit",value:"Orange",label:"Orange"},{groupId:"other",role:"radio",name:"fruit",value:"Apple",label:"Apple"},{groupId:"other",role:"radio",name:"fruit",value:"Kiwi",label:"Kiwi"}]},{id:"plan",label:"Choose plans",name:"plan",searchable:!0,groupId:"what-todo",groups:{"what-todo":{title:"What to do?"},other:{title:"Other"}},items:[{groupId:"what-todo",role:"checkbox",name:"plan",value:"Fishing",label:"Fishing",searchWords:["Fishing","guttastemning"]},{groupId:"what-todo",role:"checkbox",name:"plan",value:"Working",label:"Working",searchWords:["working","nine-to-five"]},{groupId:"other",role:"checkbox",name:"plan",value:"Sleeping",label:"Sleeping",searchWords:["Sleeping","zzz"]}]}]}),e.jsx(N,{label:"Switch",size:"sm"})]})},"SearchAndSwitch"),M=t(()=>{const r=f({filters:g?.map(l=>({...l}))});return e.jsx(s,{filter:r})},"StaticFilters"),w=t(()=>{const r=f({filters:g});return e.jsxs(E.TriggerContext,{children:[e.jsx(E.Trigger,{children:"Open Dialog"}),e.jsx(E,{style:{height:"20rem"},children:e.jsx(s,{filter:r})})]})},"StaticFiltersInDialog"),L=t(()=>{const r=f({filters:g?.map(l=>({...l,removable:!0}))});return e.jsx(s,{filter:r})},"RemovableFilters"),D=t(()=>{const{menus:r}=V(),l=f({filters:g?.map(n=>({...n,removable:!0}))});return e.jsx(s,{menus:r,filter:l})},"AccountMenuAndFilters"),R=t(()=>{const{menus:r,search:l}=V(),n=f({filters:g?.map(o=>({...o,removable:!0}))});return e.jsx(s,{menus:r,search:{...l,collapsible:!0},filter:n})},"AccountMenuAndSearch"),Q=t(()=>{const{menus:r}=V(),l=f({filters:g?.map(a=>({...a,removable:!0}))}),[n,o]=d.useState(""),i=[{groupId:"1",title:"Nytt søk",label:e.jsx(y,{params:[{type:"search",value:n,label:n}]}),linkIcon:!0,onClick:t(()=>{console.info("Search for new query:")},"onClick")},{groupId:"1",title:"Søk + filter",label:e.jsx(y,{params:[{type:"search",value:n,label:n},{type:"filter",value:"Test",label:"2 filter"}]}),linkIcon:!0,onClick:t(()=>{console.info("Search for new query + filters")},"onClick")}],u={open:n.length>=1,onClose:t(()=>{console.log("Close")},"onClose"),groups:{1:{title:""},2:{title:"Lagrede søk"}},items:[...i,{groupId:"2",title:"Lagret søk 1",label:e.jsx(y,{params:[{type:"search",value:n,label:"Skattemelding"},{type:"filter",value:"Test",label:"2 filter"}]}),linkIcon:!0},{groupId:"2","aria-label":"Lagret søk 2",label:e.jsx(y,{params:[{type:"filter",value:"Test",label:"Skatteetaten"}]}),linkIcon:!0}]},b={value:n,onChange:t(a=>o(a.target.value),"onChange"),onClear:t(()=>o(""),"onClear"),placeholder:"Søk",collapsible:!0,minLength:3,menu:u},h=t(()=>{o(""),l.onFilterStateChange?.({})},"handleReset"),c=n||Object.values(l?.filterState??{}).some(a=>a?.length);return e.jsx(s,{menus:r,search:b,filter:{...l,showResetButton:!1},children:c&&e.jsxs(e.Fragment,{children:[e.jsxs(W,{onClick:h,variant:"ghost",children:[e.jsx(_,{"aria-hidden":"true"}),e.jsx("span",{children:"Nullstill"})]}),e.jsxs(W,{onClick:t(()=>alert("Lagre søk"),"onClick"),variant:"ghost",children:[e.jsx(H,{"aria-hidden":"true"}),e.jsx("span",{children:"Lagre"})]})]})})},"AccountMenuAndSearchAutocomplete"),O=t(()=>{const r=z("aa-1"),n=r.items?.find(a=>a.selected)?.icon?.isParent,o=f({filters:g?.map(a=>({...a,removable:!0}))}),i=o?.filterState,u=t(a=>{const m=a.target.type,p=a.target.value;m==="radio"?o?.onFilterStateChange?.({...i,subaccount:[p]}):i?.subaccount?.includes(p)?o?.onFilterStateChange?.({...i,subaccount:[...i?.subaccount?.filter(v=>v!==p)||[]]}):o?.onFilterStateChange?.({...i,subaccount:[...i?.subaccount?.filter(v=>v!=="all")||[],p]})},"onSubAccountChange"),b=[{id:"1",groupId:"2",title:"Hovedenhet",description:"Org nr.",value:"hoved",name:"subaccount",role:"checkbox"},{id:"2",groupId:"2",title:"Underenhet",description:"Org nr.",name:"subaccount",value:"under",role:"checkbox"}].map(a=>({...a,checked:i?.subaccount?.includes(a.value),onChange:u})),h=[{id:"all",groupId:"1",title:"Alle enheter",name:"subaccount",value:"all",role:"radio",checked:i?.subaccount?.includes("all")||!i?.subaccount?.length,onChange:u},...b],c=t(()=>{const a=b?.filter(m=>i?.subaccount?.includes(m.value))?.length;return a===1?b?.find(m=>i?.subaccount?.includes(m.value))?.title:a?`${a} enheter`:`${b?.length} enheter`},"getSubAccountLabel");return e.jsxs(s,{children:[e.jsx(x,{...r}),n&&e.jsx(x,{id:"subaccounts",items:h,label:c(),virtualized:!0}),e.jsx(S,{...o})]})},"AccountMenuAndSubmenu"),q=t(()=>{const r=z("aa-1"),l=f({filters:g?.map(c=>({...c,removable:!0}))}),[n,o]=d.useState("");function i(c,a){const[m,p]=d.useState(c);return d.useEffect(()=>{const v=setTimeout(()=>{p(c)},a);return()=>{clearTimeout(v)}},[c,a]),m}t(i,"useDebounce");const u=i(n,500),h=n!==u;return d.useEffect(()=>{u&&console.log("Fetching data for:",u)},[u]),e.jsxs(s,{children:[e.jsx(x,{...r}),e.jsx(k,{value:n,loading:h,onChange:t(c=>o(c.target.value),"onChange"),onClear:t(()=>o(""),"onClear")}),e.jsx(S,{...l})]})},"DebouncedQuery"),$=[{id:"skattemelding",title:"Skattemelding",owner:"Skatteetaten"},{id:"mva-melding",title:"MVA-melding",owner:"Skatteetaten"},{id:"a-melding",title:"A-melding",owner:"Skatteetaten"},{id:"inntektsmelding",title:"Inntektsmelding",owner:"NAV"},{id:"sykepenger",title:"Refusjon av sykepenger",owner:"NAV"},{id:"arsregnskap",title:"Årsregnskap",owner:"Brønnøysundregistrene"}],T={args:{delay:2e3,loadingCount:3,searchable:!0},argTypes:{delay:{control:{type:"range",min:500,max:1e4,step:500}},loadingCount:{control:{type:"range",min:1,max:8,step:1}}},parameters:{screenshot:{skip:!0}},render:t(function({delay:l,loadingCount:n,searchable:o}){const[i,u]=d.useState({}),[b,h]=d.useState(!1),[c,a]=d.useState([]),m=d.useRef(void 0),p="Tjenester";d.useEffect(()=>()=>clearTimeout(m.current),[]);const v=t(()=>{h(!0),clearTimeout(m.current),m.current=setTimeout(()=>{a($),h(!1)},l)},"fetchServices"),B={name:"service",label:"Tjeneste",title:"Velg tjeneste",searchable:o,search:{name:"service-search",placeholder:"Søk etter tjeneste"},loading:b,loadingCount:n,loadingTitle:p,loadingLabel:"Henter tjenester …",groups:{services:{title:p}},items:c.map(F=>({id:F.id,groupId:"services",role:"checkbox",name:"service",value:F.id,title:F.title,description:F.owner})),onOpenChange:t(F=>F&&v(),"onOpenChange")};return e.jsx(s,{children:e.jsx(S,{filters:[B],filterState:i,onFilterStateChange:u})})},"Render"),play:t(async({canvasElement:r})=>{const l=U(r);await K.click(await l.findByRole("button",{name:/Tjeneste/i}))},"play")};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
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
}`,...I.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
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
}`,...j.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
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
}`,...C.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const staticFilters = useInboxFilter({
    filters: inboxFilters?.map(item => ({
      ...item
    }))
  });
  return <Toolbar filter={staticFilters} />;
}`,...M.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
}`,...w.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const removableFilter = useInboxFilter({
    filters: inboxFilters?.map(item => ({
      ...item,
      removable: true
    }))
  });
  return <Toolbar filter={removableFilter} />;
}`,...L.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
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
}`,...D.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
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
}`,...R.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
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
}`,...Q.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
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
}`,...O.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
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
}`,...q.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    delay: 2000,
    loadingCount: 3,
    searchable: true
  },
  argTypes: {
    delay: {
      control: {
        type: 'range',
        min: 500,
        max: 10000,
        step: 500
      }
    },
    loadingCount: {
      control: {
        type: 'range',
        min: 1,
        max: 8,
        step: 1
      }
    }
  },
  parameters: {
    // can't screenshot test, the result depends on a timer
    screenshot: {
      skip: true
    }
  },
  render: function Render({
    delay,
    loadingCount,
    searchable
  }) {
    const [filterState, setFilterState] = useState<FilterState>({});
    const [loading, setLoading] = useState(false);
    const [loadedServices, setLoadedServices] = useState<typeof services>([]);
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);
    const groupTitle = 'Tjenester';
    useEffect(() => () => clearTimeout(timeoutRef.current), []);

    /** Stands in for the call to Dialogporten */
    const fetchServices = () => {
      setLoading(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setLoadedServices(services);
        setLoading(false);
      }, delay);
    };
    const serviceFilter: FilterProps = {
      name: 'service',
      label: 'Tjeneste',
      title: 'Velg tjeneste',
      searchable,
      search: {
        name: 'service-search',
        placeholder: 'Søk etter tjeneste'
      },
      loading,
      loadingCount,
      loadingTitle: groupTitle,
      loadingLabel: 'Henter tjenester …',
      groups: {
        services: {
          title: groupTitle
        }
      },
      items: loadedServices.map(service => ({
        id: service.id,
        groupId: 'services',
        role: 'checkbox',
        name: 'service',
        value: service.id,
        title: service.title,
        description: service.owner
      })),
      onOpenChange: open => open && fetchServices()
    };
    return <Toolbar>
        <ToolbarFilter filters={[serviceFilter]} filterState={filterState} onFilterStateChange={setFilterState} />
      </Toolbar>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByRole('button', {
      name: /Tjeneste/i
    }));
  }
}`,...T.parameters?.docs?.source},description:{story:"A toolbar filter that fetches its options every time it opens. `onOpenChange` tells the consumer\nwhen the filter opens, so it can start fetching and set `loading` until the options arrive.",...T.parameters?.docs?.description}}};const Pe=["Composition","WithHtmlTitle","SearchAndFilter","SearchAndSwitch","StaticFilters","StaticFiltersInDialog","RemovableFilters","AccountMenuAndFilters","AccountMenuAndSearch","AccountMenuAndSearchAutocomplete","AccountMenuAndSubmenu","DebouncedQuery","FilterLoading"];export{D as AccountMenuAndFilters,R as AccountMenuAndSearch,Q as AccountMenuAndSearchAutocomplete,O as AccountMenuAndSubmenu,I as Composition,q as DebouncedQuery,T as FilterLoading,L as RemovableFilters,A as SearchAndFilter,C as SearchAndSwitch,M as StaticFilters,w as StaticFiltersInDialog,j as WithHtmlTitle,Pe as __namedExportsOrder,Be as default};
