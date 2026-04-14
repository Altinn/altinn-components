import{j as e,r as h}from"./iframe-gnB9S1An.js";import{B as O}from"./Badge-D2lHyQ6d.js";import{b as S,L as U}from"./ListItem-9SoGvFex.js";import{S as j}from"./Eye-CG3xDgEv.js";import{S as N}from"./Trash-R2DUJthc.js";import{L as i}from"./List-CTy1OnCl.js";import{C as z}from"./ContextMenu-lyfY76oB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C4jL9APw.js";import"./Button-Cf61aO7p.js";import"./button-CCpZP8rq.js";import"./use-merge-refs-W_EFMAqs.js";import"./lite-DaUVFjkg.js";import"./Input-9fyov3Km.js";import"./input-DqrOL1yx.js";import"./XMark-F0lxfgWB.js";import"./useId-B9nFNwMW.js";import"./Icon-CL2c9__7.js";import"./Skeleton-_K166C5F.js";import"./Avatar-otyGg43a.js";import"./AvatarGroup-CYAQOWwZ.js";import"./Heading-uoQ4E1Gx.js";import"./useHighlightedText-BAP0b8E_.js";import"./ChevronUp-C8nzXkEI.js";import"./ChevronDown-CiJH-Uj-.js";import"./ChevronRight-CmdeYhPT.js";import"./Flex-Dhq417nc.js";import"./useDropdownMenuController-4NcEcuey.js";import"./Dropdown-C0Ynf067.js";import"./Tooltip-D-gwYEuh.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-D2vAb7CX.js";import"./SearchField-CW2AroNW.js";import"./MagnifyingGlass-LdJ8MC-9.js";import"./FieldBase-BbR80WA9.js";import"./Typography-uy1P5_7q.js";import"./Label-Bqs-eWs1.js";import"./index-DXeuHUJe.js";import"./MenuListItem-Cw2vF4tQ.js";import"./MenuListHeading-BN0bXZhY.js";import"./MenuItem-DVF0RjTG.js";import"./ItemMedia-B78XDhUs.js";import"./Checkmark-D8iTH_Nd.js";import"./ItemControls-0hV_6Ao9.js";import"./useMenu-DEo-iQ-R.js";import"./InformationSquare-CRWfnij7.js";const A="_badges_1xfrv_1",C="_label_1xfrv_12",f={badges:A,label:C},t=({name:s,type:r,description:n,roleNames:g,titleAs:b="h3",subUnit:x=!1,loading:u=!1,deleted:k=!1,...o})=>{const I={name:s,type:r,isParent:r==="company"&&!x,isDeleted:k},L=!u&&g?e.jsx("div",{className:f.badges,children:g.map(y=>e.jsx(O,{label:y,color:o.color,children:y},y))}):void 0,v=e.jsxs("div",{className:f.label,"data-size":o.size,children:[e.jsx(S,{title:{children:s,as:b},description:n,size:o.size,loading:u}),L]});return e.jsx(U,{icon:I,ariaLabel:s,label:v,description:n,loading:u,...o})},Oe={title:"Access/UserListItem",component:t,tags:["autodocs","beta"],parameters:{},args:{id:"user-1",size:"md",loading:!1,name:"Julie Josefine Beritsen",description:"født 01.02.1993",type:"person",roleNames:["Styrets leder"],shadow:"sm",linkIcon:!1,collapsible:!1,as:"div",interactive:!0,subUnit:!1,deleted:!1,titleAs:"h3",border:"none",color:"company",expanded:!1,children:e.jsx("p",{children:"Custom content"})},argTypes:{size:{options:["xs","sm","md","lg","xl"],control:{type:"inline-radio"}},shadow:{options:["none","xs","sm","md","lg"],control:{type:"inline-radio"}},type:{options:["person","company","system"],control:{type:"inline-radio"}},as:{options:["div","button","a","span"],control:{type:"select"}},titleAs:{options:["h1","h2","h3","h4","h5","h6","p","div","span"],control:{type:"select"}},border:{options:["none","solid","dotted"],control:{type:"inline-radio"}},color:{options:["inherit","company","person","neutral"],control:{type:"select"}},loading:{control:{type:"boolean"}},interactive:{control:{type:"boolean"}},linkIcon:{control:{type:"boolean"}},collapsible:{control:{type:"boolean"}},expanded:{control:{type:"boolean"}},subUnit:{control:{type:"boolean"}},deleted:{control:{type:"boolean"}},children:{control:!1},onClick:{control:!1},controls:{control:!1},id:{control:!1}}},a=s=>e.jsx(i,{children:e.jsx(t,{...s,onClick:()=>alert("You clicked me - yay!")})}),l=s=>e.jsx(i,{children:e.jsx(t,{...s,name:"Narvesen AS",type:"company",description:"Org.nr.: 123456789",roleNames:["Regnskapsfører","Klientadministrator","Hovedadministrator"],interactive:!0,linkIcon:!0,onClick:()=>alert("You clicked the link - yay!"),as:"a"})}),c=s=>{const[r,n]=h.useState(!1);return e.jsx(i,{children:e.jsx(t,{...s,name:"Narvesen AS",type:"company",description:void 0,roleNames:["Regnskapsfører"],expanded:r,collapsible:!0,onClick:()=>n(!r),as:"button",children:e.jsx("div",{style:{padding:"0.5rem 0 0.5rem 1rem"},children:e.jsxs(i,{spacing:"sm",children:[e.jsx(t,{id:"subunit1",name:"Narvesen AS",type:"company",size:"xs",description:"Org.nr. 987654321",roleNames:["Regnskapsfører"],interactive:!1,shadow:"none"}),e.jsx(t,{id:"subunit2",name:"Narvesen AS",type:"company",size:"xs",description:"↳ Org.nr. 987654322, underenhet",shadow:"none",interactive:!1,subUnit:!0}),e.jsx(t,{id:"subunit3",name:"Dattersen AS",type:"company",size:"xs",description:"↳ Org.nr. 987654323, underenhet",interactive:!1,shadow:"none",subUnit:!0})]})})})})},m=s=>{const[r,n]=h.useState(!1);return e.jsx(i,{children:e.jsx(t,{...s,name:"Byggebedriftens mestere NO",roleNames:["Regnskapsfører"],type:"company",description:void 0,expanded:r,collapsible:!0,onClick:()=>n(!r),as:"button",children:e.jsx("div",{style:{padding:"0.5rem 0 0.5rem 1rem"},children:e.jsxs(i,{spacing:"sm",children:[e.jsx(t,{id:"subunit1",name:"Byggebedriftens mestere NO",roleNames:["Regnskapsfører"],type:"company",size:"xs",description:"Org.nr. 987654321",interactive:!1,shadow:"none"}),e.jsx(t,{id:"subunit2",name:"Mina Daglig Lederås",type:"person",size:"xs",description:"Født: 01.01.2000 | Daglig leder i Byggebedriftens mestere NO",shadow:"none",interactive:!1,subUnit:!0}),e.jsx(t,{id:"subunit3",name:"Johannes Styrledersen",type:"person",size:"xs",description:"Født: 01.01.1990 | Styrets leder, Daglig leder i Byggebedriftens mestere NO",interactive:!1,shadow:"none",subUnit:!0})]})})})})},p=s=>e.jsxs(i,{children:[e.jsx(t,{...s,name:"XLarge h1 org",type:"company",description:"Org.nr. 123456680",interactive:!1,titleAs:"h1",size:"xl"}),e.jsx(t,{...s,name:"Large h2 org",type:"company",description:"Org.nr. 123456669",interactive:!1,titleAs:"h2",size:"lg"}),e.jsx(t,{...s,name:"Medium h3 org (default)",type:"company",description:"Org.nr. 123456670",interactive:!1,size:"md"}),e.jsx(t,{...s,name:"Small h4 org",type:"company",description:"Org.nr. 123456641",interactive:!1,size:"sm",titleAs:"h4"}),e.jsx(t,{...s,name:"Xsmall h5 org",type:"company",description:"Org.nr. 123456621",interactive:!1,size:"xs",titleAs:"h5"})]}),d=s=>{const r=n=>e.jsx(z,{id:"menu"+n,items:[{id:"settings"+n,title:"See accesses",icon:j},{id:"delete"+n,title:"Delete user",icon:N}]});return e.jsxs(i,{children:[e.jsx(t,{...s,name:"Ådne Makrussen",roleNames:["Styrets leder"],controls:r("1"),linkIcon:!0,onClick:()=>alert("You clicked the link - yay!"),as:"button"}),e.jsx(t,{...s,name:"Jack Ripper",roleNames:void 0,controls:r("2"),linkIcon:!0,onClick:()=>alert("You clicked the link - yay!"),as:"button"}),e.jsx(t,{...s,name:"Bankmarked AS",type:"company",description:"Org.nr.: 987654321",roleNames:["Regnskapsfører"],controls:r("3"),linkIcon:!0,onClick:()=>alert("You clicked the link - yay!"),as:"button"}),e.jsx(t,{...s,name:"Hal 9000",type:"system",description:"fra Odyssey Inc.",roleNames:["System"],controls:r("4"),linkIcon:!0,onClick:()=>alert("I'm afraid I can't let you do that, Dave."),as:"button"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: UserListItemProps) => {
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
}`,...d.parameters?.docs?.source}}};const Se=["Default","MultipleRoles","WithSubUnits","WithInheritingParties","DifferentHeadingLevelsAndSizes","WithControls"];export{a as Default,p as DifferentHeadingLevelsAndSizes,l as MultipleRoles,d as WithControls,m as WithInheritingParties,c as WithSubUnits,Se as __namedExportsOrder,Oe as default};
