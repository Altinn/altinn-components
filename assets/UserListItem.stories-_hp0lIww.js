import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-CpyhhMkF.js";import{t as n}from"./jsx-runtime-DwqL_Y-t.js";import{t as r}from"./Eye-BipOFo4Q.js";import{t as i}from"./Trash-CA--6OQp.js";import{t as a}from"./Badge-BYXOeMxo.js";import{r as o,t as s}from"./ListItem-DAJg57C2.js";import{t as c}from"./ContextMenu-BispZrd8.js";import{t as l}from"./List-BNjZuxCc.js";var u=e(t(),1),d={badges:`_badges_1xfrv_1`,label:`_label_1xfrv_12`,description:`_description_1xfrv_42`},f=n(),p=({name:e,type:t,description:n,roleNames:r,titleAs:i=`h3`,subUnit:c=!1,loading:l=!1,deleted:u=!1,...p})=>{let m={name:e,type:t,isParent:t===`company`&&!c,isDeleted:u},h=!l&&r?(0,f.jsx)(`div`,{className:d.badges,children:r.map(e=>(0,f.jsx)(a,{label:e,color:p.color,children:e},e))}):void 0;return(0,f.jsx)(s,{icon:m,ariaLabel:e,label:(0,f.jsxs)(`div`,{className:d.label,"data-size":p.size,children:[(0,f.jsx)(o,{title:{children:e,as:i},description:n,size:p.size,loading:l}),h]}),description:n,loading:l,...p})},m={title:`Access/UserListItem`,component:p,tags:[`autodocs`,`beta`],parameters:{},args:{id:`user-1`,size:`md`,loading:!1,name:`Julie Josefine Beritsen`,description:`født 01.02.1993`,type:`person`,roleNames:[`Styrets leder`],shadow:`sm`,linkIcon:!1,collapsible:!1,as:`div`,interactive:!0,subUnit:!1,deleted:!1,titleAs:`h3`,border:`none`,color:`company`,expanded:!1,children:(0,f.jsx)(`p`,{children:`Custom content`})},argTypes:{size:{options:[`xs`,`sm`,`md`,`lg`,`xl`],control:{type:`inline-radio`}},shadow:{options:[`none`,`xs`,`sm`,`md`,`lg`],control:{type:`inline-radio`}},type:{options:[`person`,`company`,`system`],control:{type:`inline-radio`}},as:{options:[`div`,`button`,`a`,`span`],control:{type:`select`}},titleAs:{options:[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`,`p`,`div`,`span`],control:{type:`select`}},border:{options:[`none`,`solid`,`dotted`],control:{type:`inline-radio`}},color:{options:[`inherit`,`company`,`person`,`neutral`],control:{type:`select`}},loading:{control:{type:`boolean`}},interactive:{control:{type:`boolean`}},linkIcon:{control:{type:`boolean`}},collapsible:{control:{type:`boolean`}},expanded:{control:{type:`boolean`}},subUnit:{control:{type:`boolean`}},deleted:{control:{type:`boolean`}},children:{control:!1},onClick:{control:!1},controls:{control:!1},id:{control:!1}}},h=e=>(0,f.jsx)(l,{children:(0,f.jsx)(p,{...e,onClick:()=>alert(`You clicked me - yay!`)})}),g=e=>(0,f.jsx)(l,{children:(0,f.jsx)(p,{...e,name:`Narvesen AS`,type:`company`,description:`Org.nr.: 123456789`,roleNames:[`Regnskapsfører`,`Klientadministrator`,`Hovedadministrator`],interactive:!0,linkIcon:!0,onClick:()=>alert(`You clicked the link - yay!`),as:`a`})}),_=e=>{let[t,n]=(0,u.useState)(!1);return(0,f.jsx)(l,{children:(0,f.jsx)(p,{...e,name:`Narvesen AS`,type:`company`,description:void 0,roleNames:[`Regnskapsfører`],expanded:t,collapsible:!0,onClick:()=>n(!t),as:`button`,children:(0,f.jsx)(`div`,{style:{padding:`0.5rem 0 0.5rem 1rem`},children:(0,f.jsxs)(l,{spacing:`sm`,children:[(0,f.jsx)(p,{id:`subunit1`,name:`Narvesen AS`,type:`company`,size:`xs`,description:`Org.nr. 987654321`,roleNames:[`Regnskapsfører`],interactive:!1,shadow:`none`}),(0,f.jsx)(p,{id:`subunit2`,name:`Narvesen AS`,type:`company`,size:`xs`,description:`↳ Org.nr. 987654322, underenhet`,shadow:`none`,interactive:!1,subUnit:!0}),(0,f.jsx)(p,{id:`subunit3`,name:`Dattersen AS`,type:`company`,size:`xs`,description:`↳ Org.nr. 987654323, underenhet`,interactive:!1,shadow:`none`,subUnit:!0})]})})})})},v=e=>{let[t,n]=(0,u.useState)(!1);return(0,f.jsx)(l,{children:(0,f.jsx)(p,{...e,name:`Byggebedriftens mestere NO`,roleNames:[`Regnskapsfører`],type:`company`,description:void 0,expanded:t,collapsible:!0,onClick:()=>n(!t),as:`button`,children:(0,f.jsx)(`div`,{style:{padding:`0.5rem 0 0.5rem 1rem`},children:(0,f.jsxs)(l,{spacing:`sm`,children:[(0,f.jsx)(p,{id:`subunit1`,name:`Byggebedriftens mestere NO`,roleNames:[`Regnskapsfører`],type:`company`,size:`xs`,description:`Org.nr. 987654321`,interactive:!1,shadow:`none`}),(0,f.jsx)(p,{id:`subunit2`,name:`Mina Daglig Lederås`,type:`person`,size:`xs`,description:`Født: 01.01.2000 | Daglig leder i Byggebedriftens mestere NO`,shadow:`none`,interactive:!1,subUnit:!0}),(0,f.jsx)(p,{id:`subunit3`,name:`Johannes Styrledersen`,type:`person`,size:`xs`,description:`Født: 01.01.1990 | Styrets leder, Daglig leder i Byggebedriftens mestere NO`,interactive:!1,shadow:`none`,subUnit:!0})]})})})})},y=e=>(0,f.jsxs)(l,{children:[(0,f.jsx)(p,{...e,name:`XLarge h1 org`,type:`company`,description:`Org.nr. 123456680`,interactive:!1,titleAs:`h1`,size:`xl`}),(0,f.jsx)(p,{...e,name:`Large h2 org`,type:`company`,description:`Org.nr. 123456669`,interactive:!1,titleAs:`h2`,size:`lg`}),(0,f.jsx)(p,{...e,name:`Medium h3 org (default)`,type:`company`,description:`Org.nr. 123456670`,interactive:!1,size:`md`}),(0,f.jsx)(p,{...e,name:`Small h4 org`,type:`company`,description:`Org.nr. 123456641`,interactive:!1,size:`sm`,titleAs:`h4`}),(0,f.jsx)(p,{...e,name:`Xsmall h5 org`,type:`company`,description:`Org.nr. 123456621`,interactive:!1,size:`xs`,titleAs:`h5`})]}),b=e=>{let t=e=>(0,f.jsx)(c,{id:`menu`+e,items:[{id:`settings`+e,title:`See accesses`,icon:r},{id:`delete`+e,title:`Delete user`,icon:i}]});return(0,f.jsxs)(l,{children:[(0,f.jsx)(p,{...e,name:`Ådne Makrussen`,roleNames:[`Styrets leder`],controls:t(`1`),linkIcon:!0,onClick:()=>alert(`You clicked the link - yay!`),as:`button`}),(0,f.jsx)(p,{...e,name:`Jack Ripper`,roleNames:void 0,controls:t(`2`),linkIcon:!0,onClick:()=>alert(`You clicked the link - yay!`),as:`button`}),(0,f.jsx)(p,{...e,name:`Bankmarked AS`,type:`company`,description:`Org.nr.: 987654321`,roleNames:[`Regnskapsfører`],controls:t(`3`),linkIcon:!0,onClick:()=>alert(`You clicked the link - yay!`),as:`button`}),(0,f.jsx)(p,{...e,name:`Hal 9000`,type:`system`,description:`fra Odyssey Inc.`,roleNames:[`System`],controls:t(`4`),linkIcon:!0,onClick:()=>alert(`I'm afraid I can't let you do that, Dave.`),as:`button`})]})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`(args: UserListItemProps) => {
  return <List>
      <UserListItem {...args} onClick={() => alert(\`You clicked me - yay!\`)} />
    </List>;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`(args: UserListItemProps) => {
  return <List>
      <UserListItem {...args} name="Narvesen AS" type="company" description="Org.nr.: 123456789" roleNames={['Regnskapsfører', 'Klientadministrator', 'Hovedadministrator']} interactive={true} linkIcon={true} onClick={() => alert(\`You clicked the link - yay!\`)} as={'a'} />
    </List>;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`(args: UserListItemProps) => {
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`(args: UserListItemProps) => {
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`(args: UserListItemProps) => {
  return <List>
      <UserListItem {...args} name="XLarge h1 org" type="company" description="Org.nr. 123456680" interactive={false} titleAs="h1" size="xl" />
      <UserListItem {...args} name="Large h2 org" type="company" description="Org.nr. 123456669" interactive={false} titleAs="h2" size="lg" />
      <UserListItem {...args} name="Medium h3 org (default)" type="company" description="Org.nr. 123456670" interactive={false} size="md" />
      <UserListItem {...args} name="Small h4 org" type="company" description="Org.nr. 123456641" interactive={false} size="sm" titleAs="h4" />
      <UserListItem {...args} name="Xsmall h5 org" type="company" description="Org.nr. 123456621" interactive={false} size="xs" titleAs="h5" />
    </List>;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`(args: UserListItemProps) => {
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
}`,...b.parameters?.docs?.source}}};var x=[`Default`,`MultipleRoles`,`WithSubUnits`,`WithInheritingParties`,`DifferentHeadingLevelsAndSizes`,`WithControls`];export{h as Default,y as DifferentHeadingLevelsAndSizes,g as MultipleRoles,b as WithControls,v as WithInheritingParties,_ as WithSubUnits,x as __namedExportsOrder,m as default};