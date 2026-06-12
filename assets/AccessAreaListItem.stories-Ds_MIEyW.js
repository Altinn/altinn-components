import{a7 as e,R as x}from"./iframe-DWR_BPge.js";import{a as A,A as L}from"./accesspackages-B91f1q3N.js";import{L as S}from"./ListItem-DKhaVzxg.js";import{L as c}from"./List-CSRccNVp.js";import{A as y}from"./AvatarGroup-CXLQt8Ir.js";import"./preload-helper-PPVm8Dsz.js";import"./Package-CANfi22A.js";import"./Input-_0Vw9ldu.js";import"./Avatar-Cok-GZxK.js";import"./Badge-DkIfMZHe.js";import"./Tooltip-DTF1wjLo.js";import"./Heading-DZv3ITVf.js";import"./useHighlightedText-CxSGKcWS.js";import"./ChevronUp-B_nN6-rE.js";import"./ChevronDown-DyMHpH4k.js";import"./ChevronRight-Byhvri5k.js";import"./Flex-6ZJb0CGr.js";const E="_content_7hk0i_1",P={content:E},d=({name:s,icon:t,iconUrl:r,size:n="md",children:a,expanded:o=!1,onClick:b,badge:I,colorTheme:f,loading:u,titleAs:k="h3",...v})=>{const T={svgElement:t,iconUrl:r,theme:"subtle",color:f,altText:""};return e.jsx(S,{as:"button",icon:T,title:{children:s,as:k},ariaLabel:s,size:n,collapsible:!u,expanded:o,onClick:b,badge:I,loading:u,...v,children:o&&e.jsx("div",{className:P.content,children:a})})},i=A[1].areas[1],g=(s,t)=>e.jsxs(e.Fragment,{children:[i.description&&e.jsx("p",{children:i.description}),e.jsx(c,{spacing:2,children:i.packages.map((r,n)=>e.jsx(L,{id:r.id,name:r.name,color:n<2?s:"neutral",badge:t?e.jsx(y,{items:j}):void 0},r.id))})]}),J={title:"Access/AccessAreaListItem",component:d,tags:["autodocs","beta"],args:{id:i.id,size:"md",name:i.name,titleAs:"h3",iconUrl:i.icon,badge:{label:"2 of 7"},colorTheme:"company",loading:!1,shadow:"sm",border:"none"},argTypes:{expanded:{control:{type:"boolean"}},size:{options:["xs","sm","md","lg","xl"],control:{type:"inline-radio"}},colorTheme:{options:["neutral","company","person"],control:{type:"select"}},shadow:{options:["none","xs","sm","md","lg"],control:{type:"inline-radio"}},border:{options:["none","solid","dotted"],control:{type:"select"}},titleAs:{options:["p","h1","h2","h3","h4","h5","h6","div","span"],control:{type:"select"}}}},p={render:s=>e.jsx(c,{children:e.jsx(d,{...s,children:g(s.colorTheme)})})},j=[{name:"Linda Lavhøy",type:"person"},{name:"Digdir",type:"company"},{name:"Kari Nordmann",type:"person"},{name:"Test AS",type:"company"},{name:"Kjell Hansen",type:"person"}],m=s=>{const[t,r]=x.useState(!1);return e.jsx(c,{spacing:2,children:e.jsx(d,{...s,colorTheme:"company",expanded:t,onClick:()=>r(!t),badge:{label:`2 of ${i.packages.length}`},children:g(s.colorTheme)})})},l=s=>{const[t,r]=x.useState(!1);return e.jsx(c,{spacing:2,children:e.jsx(d,{...s,colorTheme:"company",expanded:t,onClick:()=>r(!t),badge:e.jsx(y,{maxItemsCount:4,items:j}),children:g(s.colorTheme,!0)})})},h=s=>{const[t,r]=x.useState(null);return e.jsx("div",{children:A.map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx("h2",{children:n.name}),e.jsx("p",{children:n.description}),e.jsx(c,{spacing:2,children:n.areas.map(a=>e.jsxs(d,{id:a.id,name:a.name,iconUrl:a.icon,colorTheme:"neutral",size:s.size,expanded:t===a.id,onClick:()=>r(o=>o===a.id?null:a.id),badge:{label:`0 of ${a.packages.length}`},shadow:"sm",children:[a.description&&e.jsx("p",{children:a.description}),e.jsx(c,{spacing:2,children:a.packages.map(o=>e.jsx(L,{id:o.id,name:o.name},o.id))})]},a.id))})]},n.id))})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const M=["AreaListItemStory","AreaWithPackages","AreaWithPermissions","AllAreas"];export{h as AllAreas,p as AreaListItemStory,m as AreaWithPackages,l as AreaWithPermissions,M as __namedExportsOrder,J as default};
