var E=Object.defineProperty;var r=(s,a)=>E(s,"name",{value:a,configurable:!0});import{a5 as e,R as g}from"./iframe-BenRi1VF.js";import{a as L,A as y}from"./accesspackages-D3_FGRhM.js";import{L as P}from"./ListItem-DZ4jGznm.js";import{L as d}from"./List-4vc_1Wif.js";import{A as j}from"./AvatarGroup-BAohrV6V.js";import"./preload-helper-Cc2_yIPf.js";import"./Package-Cqn6CMlw.js";import"./Input-CYuEMmfW.js";import"./Avatar-DXBUAkUc.js";import"./Badge-3MbQAaWj.js";import"./Tooltip-BQW8S8Bj.js";import"./Heading-kdzgZTGG.js";import"./useHighlightedText-lRrcJCDS.js";import"./ChevronUp-BbUZTqMr.js";import"./ChevronDown-CnLj0wQZ.js";import"./ChevronRight-B0Rwz_dW.js";import"./Flex-BtqRQeFd.js";const C="_content_7hk0i_1",z={content:C},p=r(({name:s,icon:a,iconUrl:t,size:o="md",children:n,expanded:i=!1,onClick:b,badge:f,colorTheme:k,loading:A,titleAs:v="h3",...T})=>{const S={svgElement:a,iconUrl:t,theme:"subtle",color:k,altText:""};return e.jsx(P,{as:"button",icon:S,title:{children:s,as:v},size:o,collapsible:!A,expanded:i,onClick:b,badge:f,loading:A,...T,children:i&&e.jsx("div",{className:z.content,children:n})})},"AccessAreaListItem"),c=L[1].areas[1],u=r((s,a)=>e.jsxs(e.Fragment,{children:[c.description&&e.jsx("p",{children:c.description}),e.jsx(d,{spacing:2,children:c.packages.map((t,o)=>e.jsx(y,{id:t.id,name:t.name,color:o<2?s:"neutral",badge:a?e.jsx(j,{items:I}):void 0},t.id))})]}),"children"),V={title:"Access/AccessAreaListItem",component:p,tags:["autodocs","beta"],args:{id:c.id,size:"md",name:c.name,titleAs:"h3",iconUrl:c.icon,badge:{label:"2 of 7"},colorTheme:"company",loading:!1,shadow:"sm",border:"none"},argTypes:{expanded:{control:{type:"boolean"}},size:{options:["xs","sm","md","lg","xl"],control:{type:"inline-radio"}},colorTheme:{options:["neutral","company","person"],control:{type:"select"}},shadow:{options:["none","xs","sm","md","lg"],control:{type:"inline-radio"}},border:{options:["none","solid","dotted"],control:{type:"select"}},titleAs:{options:["p","h1","h2","h3","h4","h5","h6","div","span"],control:{type:"select"}}}},m={render:r(s=>e.jsx(d,{children:e.jsx(p,{...s,children:u(s.colorTheme)})}),"render")},I=[{name:"Linda Lavhøy",type:"person"},{name:"Digdir",type:"company"},{name:"Kari Nordmann",type:"person"},{name:"Test AS",type:"company"},{name:"Kjell Hansen",type:"person"}],l=r(s=>{const[a,t]=g.useState(!1);return e.jsx(d,{spacing:2,children:e.jsx(p,{...s,colorTheme:"company",expanded:a,onClick:r(()=>t(!a),"onClick"),badge:{label:`2 of ${c.packages.length}`},children:u(s.colorTheme)})})},"AreaWithPackages"),h=r(s=>{const[a,t]=g.useState(!1);return e.jsx(d,{spacing:2,children:e.jsx(p,{...s,colorTheme:"company",expanded:a,onClick:r(()=>t(!a),"onClick"),badge:e.jsx(j,{maxItemsCount:4,items:I}),children:u(s.colorTheme,!0)})})},"AreaWithPermissions"),x=r(s=>{const[a,t]=g.useState(null);return e.jsx("div",{children:L.map(o=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx("h2",{children:o.name}),e.jsx("p",{children:o.description}),e.jsx(d,{spacing:2,children:o.areas.map(n=>e.jsxs(p,{id:n.id,name:n.name,iconUrl:n.icon,colorTheme:"neutral",size:s.size,expanded:a===n.id,onClick:r(()=>t(i=>i===n.id?null:n.id),"onClick"),badge:{label:`0 of ${n.packages.length}`},shadow:"sm",children:[n.description&&e.jsx("p",{children:n.description}),e.jsx(d,{spacing:2,children:n.packages.map(i=>e.jsx(y,{id:i.id,name:i.name},i.id))})]},n.id))})]},o.id))})},"AllAreas"),X=["AreaListItemStory","AreaWithPackages","AreaWithPermissions","AllAreas"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <List>
      <AccessAreaListItem {...args}>{children(args.colorTheme)}</AccessAreaListItem>
    </List>
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: AccessAreaListItemProps) => {
  const [expanded, setExpanded] = React.useState<boolean>(false);
  return <List spacing={2}>
      <AccessAreaListItem {...args} colorTheme="company" expanded={expanded} onClick={() => setExpanded(!expanded)} badge={{
      label: \`2 of \${testArea.packages.length}\`
    }}>
        {children(args.colorTheme)}
      </AccessAreaListItem>
    </List>;
}`,...l.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`(args: AccessAreaListItemProps) => {
  const [expanded, setExpanded] = React.useState<boolean>(false);
  return <List spacing={2}>
      <AccessAreaListItem {...args} colorTheme="company" expanded={expanded} onClick={() => setExpanded(!expanded)} badge={<AvatarGroup maxItemsCount={4} items={avatarItems as AvatarGroupProps['items']} />}>
        {children(args.colorTheme, true)}
      </AccessAreaListItem>
    </List>;
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`(args: AccessAreaListItemProps) => {
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
}`,...x.parameters?.docs?.source}}};export{x as AllAreas,m as AreaListItemStory,l as AreaWithPackages,h as AreaWithPermissions,X as __namedExportsOrder,V as default};
