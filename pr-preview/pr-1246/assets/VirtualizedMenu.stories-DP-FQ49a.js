import{aa as l,a7 as g}from"./iframe-D6Pw3lmv.js";import{M as I}from"./SearchField-EcYIPpv0.js";import{F as v}from"./Flex-CRGRbwD2.js";import{T as R}from"./ToolbarMenu-Ct8b7bjn.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-xEXh01wv.js";import"./FieldBase-q3f36oGg.js";import"./Typography-bPKdoJNM.js";import"./useHighlightedText-iOuYupmt.js";import"./Field-FWJUOm-g.js";import"./Label-DQDgnIdR.js";import"./Input-BPiAPMWI.js";import"./useMenu-AaKLsWFm.js";import"./MenuListItem-CdJ_uFA7.js";import"./MenuListHeading-CMCHjdRB.js";import"./MenuItem-4x07-Z8Y.js";import"./ItemMedia-BWttq_aD.js";import"./Avatar-BMlUzpXZ.js";import"./AvatarGroup-AckQ-RzX.js";import"./Checkmark-CdsVcBub.js";import"./ItemLabel-BLZeZ0XA.js";import"./Heading-Bsu5tLR0.js";import"./ItemControls-DN7HEIDI.js";import"./Badge-CVXUfZnL.js";import"./Tooltip-BRKe6VnT.js";import"./ChevronRight-DrJyRyMs.js";import"./index-CjPQDnhT.js";import"./InformationSquare-D2Bd0bEl.js";import"./useDropdownMenuController-NInAg9dA.js";import"./ChevronUpDown-CFSIs9pS.js";import"./Dropdown-DnYymeta.js";const z=(r=10)=>{const s=["Nordic","Global","Norwegian","Alpha","Beta","Gamma","Rapid","Smart","Green","Future"],h=["Solutions","Logistics","Systems","Consulting","Bakery","Tech","Holdings","Ventures","Media","Group"],M=["AS","ASA","AB","Inc","Ltd","Corp"],a=e=>e[Math.floor(Math.random()*e.length)],f=()=>Math.floor(1e8+Math.random()*9e8).toString(),S=(e=>{const i=[],u=[];for(let o=0;o<e;o++){const t=`company-${o}`,d=`${a(s)} ${a(h)} ${a(M)}`,n=d.charAt(0).toLowerCase(),b=o>0&&Math.random()<.5?u[Math.floor(Math.random()*u.length)]:void 0;i.push({id:t,groupId:n,name:d,orgNumber:f(),parentId:b}),u.push(t)}return i.sort((o,t)=>o.name.localeCompare(t.name))})(r),A=[{id:"user",groupId:"favourites",name:"Kari Nordmann",birthdate:"03037712345"},...S].map(e=>{const i=[e.name,e.orgNumber,e.birthdate];if(e.birthdate)return{...e,searchWords:i,title:e.name,description:"Født: "+e.birthdate,icon:{type:"person",name:e.name}};function u(t){if(!t)return"";const d=t.length,n=Math.ceil(d/3),C=t.slice(0,n),b=t.slice(n,n*2),y=t.slice(n*2);return[C,b,y].join(" ")}const o="Org. nr. "+u(e?.orgNumber);return{id:e.id,groupId:e?.parentId||e.id,title:e.name,description:o,searchWords:i,icon:{type:"company",name:e.name,isParent:!!e.parentId}}}),x=A.find(e=>e.icon.type==="company")?.groupId||"aa",N={favourites:{title:"Favoritter"},[x]:{title:"Alle virksomheter"},search:{title:"{count} treff"}};return{items:A,groups:N}},ue={title:"Menu/VirtualizedMenu",component:I,parameters:{layout:"fullscreen"},args:{variant:"default"}},c=()=>{const{items:r,groups:s}=l.useMemo(()=>z(10),[]);return g.jsx(I,{searchable:!0,items:r,groups:s,size:"md"})};c.parameters={screenshot:{skip:!0}};const m=()=>{const{items:r,groups:s}=l.useMemo(()=>z(1e4),[]);return g.jsx(I,{virtualized:!0,searchable:!0,items:r,groups:s,size:"md"})};m.parameters={screenshot:{skip:!0}};const p=()=>{const{items:r,groups:s}=l.useMemo(()=>z(1e4),[]),[h,M]=l.useState(""),a=r.find(f=>f.id===h)?.title;return g.jsx(v,{padding:3,children:g.jsx(R,{size:"md",items:r,groups:s,virtualized:!0,searchable:!0,title:"Title",onSelectId:M,label:a??"Select account"})})};p.parameters={screenshot:{skip:!0}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
