import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-CpyhhMkF.js";import{t as n}from"./jsx-runtime-DwqL_Y-t.js";import{n as r}from"./SearchField-Bjd6cmAs.js";import{t as i}from"./ToolbarMenu-AiiKAr17.js";import{t as a}from"./Flex-SBjIXoOg.js";var o=e(t(),1),s=(e=10)=>{let t=[`Nordic`,`Global`,`Norwegian`,`Alpha`,`Beta`,`Gamma`,`Rapid`,`Smart`,`Green`,`Future`],n=[`Solutions`,`Logistics`,`Systems`,`Consulting`,`Bakery`,`Tech`,`Holdings`,`Ventures`,`Media`,`Group`],r=[`AS`,`ASA`,`AB`,`Inc`,`Ltd`,`Corp`],i=e=>e[Math.floor(Math.random()*e.length)],a=()=>Math.floor(1e8+Math.random()*9e8).toString(),o=[{id:`user`,groupId:`favourites`,name:`Kari Nordmann`,birthdate:`03037712345`},...(e=>{let o=[],s=[];for(let c=0;c<e;c++){let e=`company-${c}`,l=`${i(t)} ${i(n)} ${i(r)}`,u=l.charAt(0).toLowerCase(),d=c>0&&Math.random()<.5?s[Math.floor(Math.random()*s.length)]:void 0;o.push({id:e,groupId:u,name:l,orgNumber:a(),parentId:d}),s.push(e)}return o.sort((e,t)=>e.name.localeCompare(t.name))})(e)].map(e=>{let t=[e.name,e.orgNumber,e.birthdate];if(e.birthdate)return{...e,searchWords:t,title:e.name,description:`Født: `+e.birthdate,icon:{type:`person`,name:e.name}};function n(e){if(!e)return``;let t=e.length,n=Math.ceil(t/3);return[e.slice(0,n),e.slice(n,n*2),e.slice(n*2)].join(`\xA0`)}let r=`Org. nr. `+n(e?.orgNumber);return{id:e.id,groupId:e?.parentId||e.id,title:e.name,description:r,searchWords:t,icon:{type:`company`,name:e.name,isParent:!!e.parentId}}});return{items:o,groups:{favourites:{title:`Favoritter`},[o.find(e=>e.icon.type===`company`)?.groupId||`aa`]:{title:`Alle virksomheter`},search:{title:`{count} treff`}}}},c=n(),l={title:`Menu/VirtualizedMenu`,component:r,parameters:{layout:`fullscreen`},args:{variant:`default`}},u=()=>{let{items:e,groups:t}=(0,o.useMemo)(()=>s(10),[]);return(0,c.jsx)(r,{searchable:!0,items:e,groups:t,size:`md`})};u.parameters={screenshot:{skip:!0}};var d=()=>{let{items:e,groups:t}=(0,o.useMemo)(()=>s(1e4),[]);return(0,c.jsx)(r,{virtualized:!0,searchable:!0,items:e,groups:t,size:`md`})};d.parameters={screenshot:{skip:!0}};var f=()=>{let{items:e,groups:t}=(0,o.useMemo)(()=>s(1e4),[]),[n,r]=(0,o.useState)(``),l=e.find(e=>e.id===n)?.title;return(0,c.jsx)(a,{padding:3,children:(0,c.jsx)(i,{size:`md`,items:e,groups:t,virtualized:!0,searchable:!0,title:`Title`,onSelectId:r,label:l??`Select account`})})};f.parameters={screenshot:{skip:!0}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const {
    items,
    groups
  } = useMemo(() => useRandomMenuItems(10), []);
  return <Menu searchable items={items as MenuItemProps[]} groups={groups} size="md" />;
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const {
    items,
    groups
  } = useMemo(() => useRandomMenuItems(10000), []);
  return <Menu virtualized searchable items={items as MenuItemProps[]} groups={groups} size="md" />;
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const {
    items,
    groups
  } = useMemo(() => useRandomMenuItems(10000), []);
  const [currentAccount, setCurrentAccount] = useState<string>('');
  const currentAccountName = items.find(item => item.id === currentAccount)?.title;
  return <Flex padding={3}>
      <ToolbarMenu size="md" items={items} groups={groups} virtualized searchable title="Title" onSelectId={setCurrentAccount} label={currentAccountName ?? 'Select account'} />
    </Flex>;
}`,...f.parameters?.docs?.source}}};var p=[`NotVirtualized`,`Virtualized`,`ToolbarVirtualizedMenu`];export{u as NotVirtualized,f as ToolbarVirtualizedMenu,d as Virtualized,p as __namedExportsOrder,l as default};