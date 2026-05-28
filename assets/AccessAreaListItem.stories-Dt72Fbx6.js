import{p as e,R as x}from"./iframe-43_RSSTf.js";import{a as A,A as L}from"./accesspackages-CQIhDtrr.js";import{L as S}from"./ListItem-DsTKnjuo.js";import{L as c}from"./List-CB81-vLr.js";import{A as y}from"./AvatarGroup-vsY4p1Py.js";import"./preload-helper-PPVm8Dsz.js";import"./Package-BUQNKCwp.js";import"./useId-BLkk23cI.js";import"./index-D9XEmR3s.js";import"./Button-B83AdZGF.js";import"./tooltip-CaRi0lSN.js";import"./Input-B-eeYerN.js";import"./XMark-Baw5EL5c.js";import"./Icon-DxaOlqJE.js";import"./Skeleton-C5aNvb_u.js";import"./Avatar-B5wzfTza.js";import"./Badge-CLU8wZww.js";import"./Tooltip-DwmHlyIr.js";import"./Heading-2vQl8tBj.js";import"./useHighlightedText-CH9gApkX.js";import"./ChevronUp-DrEXLnbF.js";import"./ChevronDown-DzTSEYyg.js";import"./ChevronRight-DXBQR3xu.js";import"./Flex-CbLPS6D2.js";const E="_content_7hk0i_1",P={content:E},d=({name:s,icon:t,iconUrl:r,size:o="md",children:a,expanded:n=!1,onClick:b,badge:I,colorTheme:f,loading:u,titleAs:k="h3",...v})=>{const T={svgElement:t,iconUrl:r,theme:"subtle",color:f,altText:""};return e.jsx(S,{as:"button",icon:T,title:{children:s,as:k},ariaLabel:s,size:o,collapsible:!u,expanded:n,onClick:b,badge:I,loading:u,...v,children:n&&e.jsx("div",{className:P.content,children:a})})},i=A[1].areas[1],g=(s,t)=>e.jsxs(e.Fragment,{children:[i.description&&e.jsx("p",{children:i.description}),e.jsx(c,{spacing:2,children:i.packages.map((r,o)=>e.jsx(L,{id:r.id,name:r.name,color:o<2?s:"neutral",badge:t?e.jsx(y,{items:j}):void 0},r.id))})]}),ee={title:"Access/AccessAreaListItem",component:d,tags:["autodocs","beta"],args:{id:i.id,size:"md",name:i.name,titleAs:"h3",iconUrl:i.icon,badge:{label:"2 of 7"},colorTheme:"company",loading:!1,shadow:"sm",border:"none"},argTypes:{expanded:{control:{type:"boolean"}},size:{options:["xs","sm","md","lg","xl"],control:{type:"inline-radio"}},colorTheme:{options:["neutral","company","person"],control:{type:"select"}},shadow:{options:["none","xs","sm","md","lg"],control:{type:"inline-radio"}},border:{options:["none","solid","dotted"],control:{type:"select"}},titleAs:{options:["p","h1","h2","h3","h4","h5","h6","div","span"],control:{type:"select"}}}},p={render:s=>e.jsx(c,{children:e.jsx(d,{...s,children:g(s.colorTheme)})})},j=[{name:"Linda Lavhøy",type:"person"},{name:"Digdir",type:"company"},{name:"Kari Nordmann",type:"person"},{name:"Test AS",type:"company"},{name:"Kjell Hansen",type:"person"}],m=s=>{const[t,r]=x.useState(!1);return e.jsx(c,{spacing:2,children:e.jsx(d,{...s,colorTheme:"company",expanded:t,onClick:()=>r(!t),badge:{label:`2 of ${i.packages.length}`},children:g(s.colorTheme)})})},l=s=>{const[t,r]=x.useState(!1);return e.jsx(c,{spacing:2,children:e.jsx(d,{...s,colorTheme:"company",expanded:t,onClick:()=>r(!t),badge:e.jsx(y,{maxItemsCount:4,items:j}),children:g(s.colorTheme,!0)})})},h=s=>{const[t,r]=x.useState(null);return e.jsx("div",{children:A.map(o=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx("h2",{children:o.name}),e.jsx("p",{children:o.description}),e.jsx(c,{spacing:2,children:o.areas.map(a=>e.jsxs(d,{id:a.id,name:a.name,iconUrl:a.icon,colorTheme:"neutral",size:s.size,expanded:t===a.id,onClick:()=>r(n=>n===a.id?null:a.id),badge:{label:`0 of ${a.packages.length}`},shadow:"sm",children:[a.description&&e.jsx("p",{children:a.description}),e.jsx(c,{spacing:2,children:a.packages.map(n=>e.jsx(L,{id:n.id,name:n.name},n.id))})]},a.id))})]},o.id))})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <List>
      <AccessAreaListItem {...args}>{children(args.colorTheme)}</AccessAreaListItem>
    </List>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: AccessAreaListItemProps) => {
  const [expanded, setExpanded] = React.useState<boolean>(false);
  return <List spacing={2}>
      <AccessAreaListItem {...args} colorTheme="company" expanded={expanded} onClick={() => setExpanded(!expanded)} badge={{
      label: \`2 of \${testArea.packages.length}\`
    }}>
        {children(args.colorTheme)}
      </AccessAreaListItem>
    </List>;
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: AccessAreaListItemProps) => {
  const [expanded, setExpanded] = React.useState<boolean>(false);
  return <List spacing={2}>
      <AccessAreaListItem {...args} colorTheme="company" expanded={expanded} onClick={() => setExpanded(!expanded)} badge={<AvatarGroup maxItemsCount={4} items={avatarItems as AvatarGroupProps['items']} />}>
        {children(args.colorTheme, true)}
      </AccessAreaListItem>
    </List>;
}`,...l.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`(args: AccessAreaListItemProps) => {
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
}`,...h.parameters?.docs?.source}}};const se=["AreaListItemStory","AreaWithPackages","AreaWithPermissions","AllAreas"];export{h as AllAreas,p as AreaListItemStory,m as AreaWithPackages,l as AreaWithPermissions,se as __namedExportsOrder,ee as default};
