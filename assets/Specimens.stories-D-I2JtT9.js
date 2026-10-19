var u=Object.defineProperty;var o=(e,t)=>u(e,"name",{value:t,configurable:!0});import{a7 as n,aa as l}from"./iframe-BhbNl8M-.js";import{S as i}from"./TeddyBear-DGOfjC8q.js";import{L as r}from"./ListItem-BZwC__IQ.js";import{L as m}from"./List-CK1afVUo.js";import"./preload-helper-Cc2_yIPf.js";import"./Input-jGspNcB3.js";import"./Avatar-BNyDKZi7.js";import"./AvatarGroup-B4pMcHMh.js";import"./Badge-np8uN8Yi.js";import"./Tooltip-8dIP2lk7.js";import"./Heading-Cykhux0L.js";import"./useHighlightedText-LhTntwcL.js";import"./ChevronUp-Dq4__2Sc.js";import"./ChevronDown-FDOS9kby.js";import"./ChevronRight-DG59p-Nv.js";import"./Flex-ywhhAUvJ.js";const I=["default","subtle","tinted"],p=["xs","sm","md","lg","xl"],E={title:"List/Specimens",component:r,parameters:{},args:{id:"id",title:"Title",description:"Description"}},s=o(e=>n.jsx(m,{children:I.map(t=>n.jsx(l.Fragment,{children:n.jsx(r,{...e,icon:i,variant:t,label:t,linkIcon:!0})},t))}),"Variant"),a=o(({variant:e="default",...t})=>n.jsxs(m,{children:[n.jsx(r,{...t,icon:i,variant:e,label:e,linkIcon:!0}),n.jsx(r,{...t,icon:{theme:"tinted",svgElement:i},variant:e,title:e,description:"icon as iconProps",linkIcon:!0}),n.jsx(r,{...t,icon:{name:"Alfa",type:"company"},variant:e,title:e,description:"icon as avatarProps",linkIcon:!0}),n.jsx(r,{...t,icon:{items:[{name:"Alfa"},{name:"Beta"},{name:"Charlie"}]},variant:e,title:e,description:"icon as avatarGroupProps",linkIcon:!0}),n.jsx(r,{...t,icon:i,variant:e,title:e,description:"shadow:none",shadow:"none",linkIcon:!0}),n.jsx(r,{...t,icon:i,variant:e,title:e,description:"shadow:none, border:solid",shadow:"none",border:"solid",linkIcon:!0}),n.jsx(r,{...t,icon:i,variant:e,title:e,description:"shadow:none, border:dotted",shadow:"none",border:"dotted",linkIcon:!0})]}),"Options"),c=o(e=>n.jsx(m,{children:p.map(t=>n.jsx(l.Fragment,{children:n.jsx(r,{...e,label:t,icon:i,size:t,linkIcon:!0})},t))}),"Size"),d=o(e=>n.jsx(m,{children:p.map(t=>n.jsx("li",{children:n.jsx(s,{...e,size:t})},t))}),"VariantSize");s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
  return <List>
      {variants.map(variant => {
      return <Fragment key={variant}>
            <ListItem {...args} icon={TeddyBearIcon} variant={variant} label={variant} linkIcon />
          </Fragment>;
    })}
    </List>;
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  variant = 'default',
  ...args
}: ListItemProps) => {
  return <List>
      <ListItem {...args} icon={TeddyBearIcon} variant={variant} label={variant} linkIcon />
      <ListItem {...args} icon={{
      theme: 'tinted',
      svgElement: TeddyBearIcon
    }} variant={variant} title={variant} description="icon as iconProps" linkIcon />
      <ListItem {...args} icon={{
      name: 'Alfa',
      type: 'company'
    }} variant={variant} title={variant} description="icon as avatarProps" linkIcon />
      <ListItem {...args} icon={{
      items: [{
        name: 'Alfa'
      }, {
        name: 'Beta'
      }, {
        name: 'Charlie'
      }]
    }} variant={variant} title={variant} description="icon as avatarGroupProps" linkIcon />
      <ListItem {...args} icon={TeddyBearIcon} variant={variant} title={variant} description="shadow:none" shadow="none" linkIcon />
      <ListItem {...args} icon={TeddyBearIcon} variant={variant} title={variant} description="shadow:none, border:solid" shadow="none" border="solid" linkIcon />
      <ListItem {...args} icon={TeddyBearIcon} variant={variant} title={variant} description="shadow:none, border:dotted" shadow="none" border="dotted" linkIcon />
    </List>;
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
  return <List>
      {sizes.map(size => {
      return <Fragment key={size}>
            <ListItem {...args} label={size} icon={TeddyBearIcon} size={size} linkIcon />
          </Fragment>;
    })}
    </List>;
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
  return <List>
      {sizes.map(size => {
      return <li key={size}>
            <Variant {...args} size={size} />
          </li>;
    })}
    </List>;
}`,...d.parameters?.docs?.source}}};const V=["Variant","Options","Size","VariantSize"];export{a as Options,c as Size,s as Variant,d as VariantSize,V as __namedExportsOrder,E as default};
