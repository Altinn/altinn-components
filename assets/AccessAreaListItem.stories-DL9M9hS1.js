import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-CpyhhMkF.js";import{t as n}from"./jsx-runtime-DwqL_Y-t.js";import{t as r}from"./AvatarGroup-ChzQcDti.js";import{t as i}from"./ListItem-DAJg57C2.js";import{t as a}from"./List-BNjZuxCc.js";import{n as o,t as s}from"./accesspackages-CqmcyLRc.js";var c=e(t(),1),l={content:`_content_7hk0i_1`},u=n(),d=({name:e,icon:t,iconUrl:n,size:r=`md`,children:a,expanded:o=!1,onClick:s,badge:c,colorTheme:d,loading:f,titleAs:p=`h3`,...m})=>(0,u.jsx)(i,{as:`button`,icon:{svgElement:t,iconUrl:n,theme:`subtle`,color:d,altText:``},title:{children:e,as:p},ariaLabel:e,size:r,collapsible:!f,expanded:o,onClick:s,badge:c,loading:f,...m,children:o&&(0,u.jsx)(`div`,{className:l.content,children:a})}),f=s[1].areas[1],p=(e,t)=>(0,u.jsxs)(u.Fragment,{children:[f.description&&(0,u.jsx)(`p`,{children:f.description}),(0,u.jsx)(a,{spacing:2,children:f.packages.map((n,i)=>(0,u.jsx)(o,{id:n.id,name:n.name,color:i<2?e:`neutral`,badge:t?(0,u.jsx)(r,{items:g}):void 0},n.id))})]}),m={title:`Access/AccessAreaListItem`,component:d,tags:[`autodocs`,`beta`],args:{id:f.id,size:`md`,name:f.name,titleAs:`h3`,iconUrl:f.icon,badge:{label:`2 of 7`},colorTheme:`company`,loading:!1,shadow:`sm`,border:`none`},argTypes:{expanded:{control:{type:`boolean`}},size:{options:[`xs`,`sm`,`md`,`lg`,`xl`],control:{type:`inline-radio`}},colorTheme:{options:[`neutral`,`company`,`person`],control:{type:`select`}},shadow:{options:[`none`,`xs`,`sm`,`md`,`lg`],control:{type:`inline-radio`}},border:{options:[`none`,`solid`,`dotted`],control:{type:`select`}},titleAs:{options:[`p`,`h1`,`h2`,`h3`,`h4`,`h5`,`h6`,`div`,`span`],control:{type:`select`}}}},h={render:e=>(0,u.jsx)(a,{children:(0,u.jsx)(d,{...e,children:p(e.colorTheme)})})},g=[{name:`Linda Lavhøy`,type:`person`},{name:`Digdir`,type:`company`},{name:`Kari Nordmann`,type:`person`},{name:`Test AS`,type:`company`},{name:`Kjell Hansen`,type:`person`}],_=e=>{let[t,n]=c.useState(!1);return(0,u.jsx)(a,{spacing:2,children:(0,u.jsx)(d,{...e,colorTheme:`company`,expanded:t,onClick:()=>n(!t),badge:{label:`2 of ${f.packages.length}`},children:p(e.colorTheme)})})},v=e=>{let[t,n]=c.useState(!1);return(0,u.jsx)(a,{spacing:2,children:(0,u.jsx)(d,{...e,colorTheme:`company`,expanded:t,onClick:()=>n(!t),badge:(0,u.jsx)(r,{maxItemsCount:4,items:g}),children:p(e.colorTheme,!0)})})},y=e=>{let[t,n]=c.useState(null);return(0,u.jsx)(`div`,{children:s.map(r=>(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,u.jsx)(`h2`,{children:r.name}),(0,u.jsx)(`p`,{children:r.description}),(0,u.jsx)(a,{spacing:2,children:r.areas.map(r=>(0,u.jsxs)(d,{id:r.id,name:r.name,iconUrl:r.icon,colorTheme:`neutral`,size:e.size,expanded:t===r.id,onClick:()=>n(e=>e===r.id?null:r.id),badge:{label:`0 of ${r.packages.length}`},shadow:`sm`,children:[r.description&&(0,u.jsx)(`p`,{children:r.description}),(0,u.jsx)(a,{spacing:2,children:r.packages.map(e=>(0,u.jsx)(o,{id:e.id,name:e.name},e.id))})]},r.id))})]},r.id))})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <List>
      <AccessAreaListItem {...args}>{children(args.colorTheme)}</AccessAreaListItem>
    </List>
}`,...h.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`(args: AccessAreaListItemProps) => {
  const [expanded, setExpanded] = React.useState<boolean>(false);
  return <List spacing={2}>
      <AccessAreaListItem {...args} colorTheme="company" expanded={expanded} onClick={() => setExpanded(!expanded)} badge={{
      label: \`2 of \${testArea.packages.length}\`
    }}>
        {children(args.colorTheme)}
      </AccessAreaListItem>
    </List>;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`(args: AccessAreaListItemProps) => {
  const [expanded, setExpanded] = React.useState<boolean>(false);
  return <List spacing={2}>
      <AccessAreaListItem {...args} colorTheme="company" expanded={expanded} onClick={() => setExpanded(!expanded)} badge={<AvatarGroup maxItemsCount={4} items={avatarItems as AvatarGroupProps['items']} />}>
        {children(args.colorTheme, true)}
      </AccessAreaListItem>
    </List>;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`(args: AccessAreaListItemProps) => {
  const [expanded, setExpanded] = React.useState<string | null>(null);
  return <div>
      {areaGroups.map(group => <div key={group.id} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }}>
          <h2>{group.name}</h2>
          <p>{group.description}</p>
          <List spacing={2}>
            {group.areas.map(area => <AccessAreaListItem id={area.id} key={area.id} name={area.name} iconUrl={area.icon} colorTheme="neutral" size={args.size} expanded={expanded === area.id} onClick={() => setExpanded(prev => prev === area.id ? null : area.id)} badge={{
          label: \`0 of \${area.packages.length}\`
        }} shadow="sm">
                {area.description && <p>{area.description}</p>}
                <List spacing={2}>
                  {area.packages.map(pkg => <AccessPackageListItem id={pkg.id} key={pkg.id} name={pkg.name} />)}
                </List>
              </AccessAreaListItem>)}
          </List>
        </div>)}
    </div>;
}`,...y.parameters?.docs?.source}}};var b=[`AreaListItemStory`,`AreaWithPackages`,`AreaWithPermissions`,`AllAreas`];export{y as AllAreas,h as AreaListItemStory,_ as AreaWithPackages,v as AreaWithPermissions,b as __namedExportsOrder,m as default};