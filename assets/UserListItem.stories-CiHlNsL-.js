import{j as e,r as h}from"./iframe-BFO1Hsm7.js";import{B as O}from"./Badge-DsEojOp1.js";import{b as S,L as U}from"./ListItem-Dt0yZNNU.js";import{S as j}from"./Eye-BpkaW8HI.js";import{S as N}from"./Trash-BNKVyqtr.js";import{L as i}from"./List-CuiWAA-k.js";import{C as z}from"./ContextMenu-0mdRRQji.js";import"./preload-helper-PPVm8Dsz.js";import"./index-q4P8UESO.js";import"./Tooltip-rGuNyqhX.js";import"./tooltip-DUJ67ouq.js";import"./Button-D67YnkXJ.js";import"./Input-D60Cokb5.js";import"./XMark-DHT-JiZe.js";import"./useId-Bk4Ffxqs.js";import"./Icon-B4PZu81w.js";import"./Skeleton-BRac3_14.js";import"./Avatar-KSmNIbNE.js";import"./AvatarGroup-V6EVtbEK.js";import"./Heading-BaJonbem.js";import"./useHighlightedText-BBNMb3RU.js";import"./ChevronUp-DlVSDhFe.js";import"./ChevronDown-zCo1cSZK.js";import"./ChevronRight-CdUbwk3C.js";import"./Flex-QSO1QCFn.js";import"./useDropdownMenuController-CDJC1UYs.js";import"./Dropdown-DNakKmHK.js";import"./MenuElipsisHorizontal-0YAAkQrN.js";import"./SearchField-BsaRMZXP.js";import"./MagnifyingGlass-BT5t3YH7.js";import"./FieldBase-BLwJwwaJ.js";import"./Typography-Bd9N_lP-.js";import"./Label-D5tsUrXq.js";import"./MenuListItem-DzO3mXQV.js";import"./MenuListHeading-D6MF194z.js";import"./MenuItem-C9MWQovM.js";import"./ItemMedia-C5bbkB29.js";import"./Checkmark-BeWey6nu.js";import"./ItemControls-Dko-TfIa.js";import"./useMenu-kKDgIapy.js";import"./index-CzpMp7Co.js";import"./InformationSquare-Csa1evZE.js";const A="_badges_1xfrv_1",C="_label_1xfrv_12",f={badges:A,label:C},t=({name:s,type:r,description:n,roleNames:g,titleAs:b="h3",subUnit:x=!1,loading:u=!1,deleted:k=!1,...o})=>{const I={name:s,type:r,isParent:r==="company"&&!x,isDeleted:k},v=!u&&g?e.jsx("div",{className:f.badges,children:g.map(y=>e.jsx(O,{label:y,color:o.color,children:y},y))}):void 0,L=e.jsxs("div",{className:f.label,"data-size":o.size,children:[e.jsx(S,{title:{children:s,as:b},description:n,size:o.size,loading:u}),v]});return e.jsx(U,{icon:I,ariaLabel:s,label:L,description:n,loading:u,...o})},ke={title:"Access/UserListItem",component:t,tags:["autodocs","beta"],parameters:{},args:{id:"user-1",size:"md",loading:!1,name:"Julie Josefine Beritsen",description:"født 01.02.1993",type:"person",roleNames:["Styrets leder"],shadow:"sm",linkIcon:!1,collapsible:!1,as:"div",containerAs:"li",interactive:!0,subUnit:!1,deleted:!1,titleAs:"h3",border:"none",color:"company",expanded:!1,children:e.jsx("p",{children:"Custom content"})},argTypes:{size:{options:["xs","sm","md","lg","xl"],control:{type:"inline-radio"}},shadow:{options:["none","xs","sm","md","lg"],control:{type:"inline-radio"}},type:{options:["person","company","system"],control:{type:"inline-radio"}},as:{options:["div","button","a","span"],control:{type:"select"}},containerAs:{options:["li","div"],control:{type:"select"}},titleAs:{options:["h1","h2","h3","h4","h5","h6","p","div","span"],control:{type:"select"}},border:{options:["none","solid","dotted"],control:{type:"inline-radio"}},color:{options:["inherit","company","person","neutral"],control:{type:"select"}},loading:{control:{type:"boolean"}},interactive:{control:{type:"boolean"}},linkIcon:{control:{type:"boolean"}},collapsible:{control:{type:"boolean"}},expanded:{control:{type:"boolean"}},subUnit:{control:{type:"boolean"}},deleted:{control:{type:"boolean"}},children:{control:!1},onClick:{control:!1},controls:{control:!1},id:{control:!1}}},a=s=>e.jsx(i,{children:e.jsx(t,{...s,onClick:()=>alert("You clicked me - yay!")})}),l=s=>e.jsx(i,{children:e.jsx(t,{...s,name:"Narvesen AS",type:"company",description:"Org.nr.: 123456789",roleNames:["Regnskapsfører","Klientadministrator","Hovedadministrator"],interactive:!0,linkIcon:!0,onClick:()=>alert("You clicked the link - yay!"),as:"a"})}),c=s=>{const[r,n]=h.useState(!1);return e.jsx(i,{children:e.jsx(t,{...s,name:"Narvesen AS",type:"company",description:void 0,roleNames:["Regnskapsfører"],expanded:r,collapsible:!0,onClick:()=>n(!r),as:"button",children:e.jsx("div",{style:{padding:"0.5rem 0 0.5rem 1rem"},children:e.jsxs(i,{spacing:"sm",children:[e.jsx(t,{id:"subunit1",name:"Narvesen AS",type:"company",size:"xs",description:"Org.nr. 987654321",roleNames:["Regnskapsfører"],interactive:!1,shadow:"none"}),e.jsx(t,{id:"subunit2",name:"Narvesen AS",type:"company",size:"xs",description:"↳ Org.nr. 987654322, underenhet",shadow:"none",interactive:!1,subUnit:!0}),e.jsx(t,{id:"subunit3",name:"Dattersen AS",type:"company",size:"xs",description:"↳ Org.nr. 987654323, underenhet",interactive:!1,shadow:"none",subUnit:!0})]})})})})},m=s=>{const[r,n]=h.useState(!1);return e.jsx(i,{children:e.jsx(t,{...s,name:"Byggebedriftens mestere NO",roleNames:["Regnskapsfører"],type:"company",description:void 0,expanded:r,collapsible:!0,onClick:()=>n(!r),as:"button",children:e.jsx("div",{style:{padding:"0.5rem 0 0.5rem 1rem"},children:e.jsxs(i,{spacing:"sm",children:[e.jsx(t,{id:"subunit1",name:"Byggebedriftens mestere NO",roleNames:["Regnskapsfører"],type:"company",size:"xs",description:"Org.nr. 987654321",interactive:!1,shadow:"none"}),e.jsx(t,{id:"subunit2",name:"Mina Daglig Lederås",type:"person",size:"xs",description:"Født: 01.01.2000 | Daglig leder i Byggebedriftens mestere NO",shadow:"none",interactive:!1,subUnit:!0}),e.jsx(t,{id:"subunit3",name:"Johannes Styrledersen",type:"person",size:"xs",description:"Født: 01.01.1990 | Styrets leder, Daglig leder i Byggebedriftens mestere NO",interactive:!1,shadow:"none",subUnit:!0})]})})})})},p=s=>e.jsxs(i,{children:[e.jsx(t,{...s,name:"XLarge h1 org",type:"company",description:"Org.nr. 123456680",interactive:!1,titleAs:"h1",size:"xl"}),e.jsx(t,{...s,name:"Large h2 org",type:"company",description:"Org.nr. 123456669",interactive:!1,titleAs:"h2",size:"lg"}),e.jsx(t,{...s,name:"Medium h3 org (default)",type:"company",description:"Org.nr. 123456670",interactive:!1,size:"md"}),e.jsx(t,{...s,name:"Small h4 org",type:"company",description:"Org.nr. 123456641",interactive:!1,size:"sm",titleAs:"h4"}),e.jsx(t,{...s,name:"Xsmall h5 org",type:"company",description:"Org.nr. 123456621",interactive:!1,size:"xs",titleAs:"h5"})]}),d=s=>{const r=n=>e.jsx(z,{id:"menu"+n,items:[{id:"settings"+n,title:"See accesses",icon:j},{id:"delete"+n,title:"Delete user",icon:N}]});return e.jsxs(i,{children:[e.jsx(t,{...s,name:"Ådne Makrussen",roleNames:["Styrets leder"],controls:r("1"),linkIcon:!0,onClick:()=>alert("You clicked the link - yay!"),as:"button"}),e.jsx(t,{...s,name:"Jack Ripper",roleNames:void 0,controls:r("2"),linkIcon:!0,onClick:()=>alert("You clicked the link - yay!"),as:"button"}),e.jsx(t,{...s,name:"Bankmarked AS",type:"company",description:"Org.nr.: 987654321",roleNames:["Regnskapsfører"],controls:r("3"),linkIcon:!0,onClick:()=>alert("You clicked the link - yay!"),as:"button"}),e.jsx(t,{...s,name:"Hal 9000",type:"system",description:"fra Odyssey Inc.",roleNames:["System"],controls:r("4"),linkIcon:!0,onClick:()=>alert("I'm afraid I can't let you do that, Dave."),as:"button"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: UserListItemProps) => {
  return <List>
      <UserListItem {...args} onClick={() => alert(\`You clicked me - yay!\`)} />
    </List>;
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: UserListItemProps) => {
  return <List>
      <UserListItem {...args} name="Narvesen AS" type="company" description="Org.nr.: 123456789" roleNames={['Regnskapsfører', 'Klientadministrator', 'Hovedadministrator']} interactive={true} linkIcon={true} onClick={() => alert(\`You clicked the link - yay!\`)} as={'a'} />
    </List>;
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: UserListItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return <List>
      <UserListItem {...args} name="Narvesen AS" type="company" description={undefined} roleNames={['Regnskapsfører']} expanded={isOpen} collapsible={true} onClick={() => setIsOpen(!isOpen)} as={'button'}>
        <div style={{
        padding: '0.5rem 0 0.5rem 1rem'
      }}>
          <List spacing={'sm'}>
            <UserListItem id="subunit1" name="Narvesen AS" type="company" size="xs" description="Org.nr. 987654321" roleNames={['Regnskapsfører']} interactive={false} shadow="none" />
            <UserListItem id="subunit2" name="Narvesen AS" type="company" size="xs" description="↳ Org.nr. 987654322, underenhet" shadow="none" interactive={false} subUnit={true} />
            <UserListItem id="subunit3" name="Dattersen AS" type="company" size="xs" description="↳ Org.nr. 987654323, underenhet" interactive={false} shadow="none" subUnit={true} />
          </List>
        </div>
      </UserListItem>
    </List>;
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: UserListItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return <List>
      <UserListItem {...args} name="Byggebedriftens mestere NO" roleNames={['Regnskapsfører']} type="company" description={undefined} expanded={isOpen} collapsible={true} onClick={() => setIsOpen(!isOpen)} as={'button'}>
        <div style={{
        padding: '0.5rem 0 0.5rem 1rem'
      }}>
          <List spacing={'sm'}>
            <UserListItem id="subunit1" name="Byggebedriftens mestere NO" roleNames={['Regnskapsfører']} type="company" size="xs" description="Org.nr. 987654321" interactive={false} shadow="none" />
            <UserListItem id="subunit2" name="Mina Daglig Lederås" type="person" size="xs" description="Født: 01.01.2000 | Daglig leder i Byggebedriftens mestere NO" shadow="none" interactive={false} subUnit={true} />
            <UserListItem id="subunit3" name="Johannes Styrledersen" type="person" size="xs" description="Født: 01.01.1990 | Styrets leder, Daglig leder i Byggebedriftens mestere NO" interactive={false} shadow="none" subUnit={true} />
          </List>
        </div>
      </UserListItem>
    </List>;
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(args: UserListItemProps) => {
  return <List>
      <UserListItem {...args} name="XLarge h1 org" type="company" description="Org.nr. 123456680" interactive={false} titleAs="h1" size="xl" />
      <UserListItem {...args} name="Large h2 org" type="company" description="Org.nr. 123456669" interactive={false} titleAs="h2" size="lg" />
      <UserListItem {...args} name="Medium h3 org (default)" type="company" description="Org.nr. 123456670" interactive={false} size="md" />
      <UserListItem {...args} name="Small h4 org" type="company" description="Org.nr. 123456641" interactive={false} size="sm" titleAs="h4" />
      <UserListItem {...args} name="Xsmall h5 org" type="company" description="Org.nr. 123456621" interactive={false} size="xs" titleAs="h5" />
    </List>;
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: UserListItemProps) => {
  const menu = (menuId: string) => <ContextMenu id={'menu' + menuId} items={[{
    id: 'settings' + menuId,
    title: 'See accesses',
    icon: EyeIcon
  }, {
    id: 'delete' + menuId,
    title: 'Delete user',
    icon: TrashIcon
  }]} />;
  return <List>
      <UserListItem {...args} name="Ådne Makrussen" roleNames={['Styrets leder']} controls={menu('1')} linkIcon={true} onClick={() => alert(\`You clicked the link - yay!\`)} as={'button'} />
      <UserListItem {...args} name="Jack Ripper" roleNames={undefined} controls={menu('2')} linkIcon={true} onClick={() => alert(\`You clicked the link - yay!\`)} as={'button'} />
      <UserListItem {...args} name="Bankmarked AS" type="company" description="Org.nr.: 987654321" roleNames={['Regnskapsfører']} controls={menu('3')} linkIcon={true} onClick={() => alert(\`You clicked the link - yay!\`)} as={'button'} />
      <UserListItem {...args} name="Hal 9000" type="system" description="fra Odyssey Inc." roleNames={['System']} controls={menu('4')} linkIcon={true} onClick={() => alert(\`I'm afraid I can't let you do that, Dave.\`)} as={'button'} />
    </List>;
}`,...d.parameters?.docs?.source}}};const Ie=["Default","MultipleRoles","WithSubUnits","WithInheritingParties","DifferentHeadingLevelsAndSizes","WithControls"];export{a as Default,p as DifferentHeadingLevelsAndSizes,l as MultipleRoles,d as WithControls,m as WithInheritingParties,c as WithSubUnits,Ie as __namedExportsOrder,ke as default};
