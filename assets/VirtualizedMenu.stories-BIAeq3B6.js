import{aa as l,a7 as g}from"./iframe-cf7ESM3q.js";import{M as I}from"./SearchField-B1yhNL-S.js";import{F as v}from"./Flex-BG_p9pKV.js";import{T as R}from"./ToolbarMenu-Blr6fS0j.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-BpT1SLqI.js";import"./FieldBase-D5M9JHnI.js";import"./Typography-C5h-r7_j.js";import"./useHighlightedText-D_wbJNXZ.js";import"./Field-DXqmeB6L.js";import"./Label-8tLoYVxb.js";import"./Input-DT4mbTp0.js";import"./useMenu-_swqW8No.js";import"./MenuListItem-DNMoEwuU.js";import"./MenuListHeading-0GDPIxXY.js";import"./MenuItem-CoaVEq9r.js";import"./ItemMedia-AVOIN5K1.js";import"./Avatar-0G-pd6NH.js";import"./AvatarGroup-Y1BTiBK0.js";import"./Checkmark-DdKsblJH.js";import"./ItemLabel-DJAOCnpM.js";import"./Heading-CpNWi06X.js";import"./ItemControls-D6SRHxpV.js";import"./Badge-CCa-9q1v.js";import"./Tooltip-B9_Ir4Cy.js";import"./ChevronRight-Dy1T7Tgm.js";import"./index-BVMz6Wm9.js";import"./InformationSquare-DtaIp5wP.js";import"./useDropdownMenuController-BITRw-0y.js";import"./ChevronUpDown-hVantTNu.js";import"./Dropdown-pCaEySNe.js";const z=(r=10)=>{const s=["Nordic","Global","Norwegian","Alpha","Beta","Gamma","Rapid","Smart","Green","Future"],h=["Solutions","Logistics","Systems","Consulting","Bakery","Tech","Holdings","Ventures","Media","Group"],M=["AS","ASA","AB","Inc","Ltd","Corp"],a=e=>e[Math.floor(Math.random()*e.length)],f=()=>Math.floor(1e8+Math.random()*9e8).toString(),S=(e=>{const i=[],u=[];for(let o=0;o<e;o++){const t=`company-${o}`,d=`${a(s)} ${a(h)} ${a(M)}`,n=d.charAt(0).toLowerCase(),b=o>0&&Math.random()<.5?u[Math.floor(Math.random()*u.length)]:void 0;i.push({id:t,groupId:n,name:d,orgNumber:f(),parentId:b}),u.push(t)}return i.sort((o,t)=>o.name.localeCompare(t.name))})(r),A=[{id:"user",groupId:"favourites",name:"Kari Nordmann",birthdate:"03037712345"},...S].map(e=>{const i=[e.name,e.orgNumber,e.birthdate];if(e.birthdate)return{...e,searchWords:i,title:e.name,description:"Født: "+e.birthdate,icon:{type:"person",name:e.name}};function u(t){if(!t)return"";const d=t.length,n=Math.ceil(d/3),C=t.slice(0,n),b=t.slice(n,n*2),y=t.slice(n*2);return[C,b,y].join(" ")}const o="Org. nr. "+u(e?.orgNumber);return{id:e.id,groupId:e?.parentId||e.id,title:e.name,description:o,searchWords:i,icon:{type:"company",name:e.name,isParent:!!e.parentId}}}),x=A.find(e=>e.icon.type==="company")?.groupId||"aa",N={favourites:{title:"Favoritter"},[x]:{title:"Alle virksomheter"},search:{title:"{count} treff"}};return{items:A,groups:N}},ue={title:"Menu/VirtualizedMenu",component:I,parameters:{layout:"fullscreen"},args:{variant:"default"}},c=()=>{const{items:r,groups:s}=l.useMemo(()=>z(10),[]);return g.jsx(I,{searchable:!0,items:r,groups:s,size:"md"})};c.parameters={screenshot:{skip:!0}};const m=()=>{const{items:r,groups:s}=l.useMemo(()=>z(1e4),[]);return g.jsx(I,{virtualized:!0,searchable:!0,items:r,groups:s,size:"md"})};m.parameters={screenshot:{skip:!0}};const p=()=>{const{items:r,groups:s}=l.useMemo(()=>z(1e4),[]),[h,M]=l.useState(""),a=r.find(f=>f.id===h)?.title;return g.jsx(v,{padding:3,children:g.jsx(R,{size:"md",items:r,groups:s,virtualized:!0,searchable:!0,title:"Title",onSelectId:M,label:a??"Select account"})})};p.parameters={screenshot:{skip:!0}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const {
    items,
    groups
  } = useMemo(() => useRandomMenuItems(10), []);
  return <Menu searchable items={items as MenuItemProps[]} groups={groups} size="md" />;
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const {
    items,
    groups
  } = useMemo(() => useRandomMenuItems(10000), []);
  return <Menu virtualized searchable items={items as MenuItemProps[]} groups={groups} size="md" />;
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const {
    items,
    groups
  } = useMemo(() => useRandomMenuItems(10000), []);
  const [currentAccount, setCurrentAccount] = useState<string>('');
  const currentAccountName = items.find(item => item.id === currentAccount)?.title;
  return <Flex padding={3}>
      <ToolbarMenu size="md" items={items} groups={groups} virtualized searchable title="Title" onSelectId={setCurrentAccount} label={currentAccountName ?? 'Select account'} />
    </Flex>;
}`,...p.parameters?.docs?.source}}};const ce=["NotVirtualized","Virtualized","ToolbarVirtualizedMenu"];export{c as NotVirtualized,p as ToolbarVirtualizedMenu,m as Virtualized,ce as __namedExportsOrder,ue as default};
