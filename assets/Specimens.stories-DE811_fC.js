var u=Object.defineProperty;var o=(e,t)=>u(e,"name",{value:t,configurable:!0});import{a7 as n,aa as l}from"./iframe-ITS-2hJr.js";import{S as i}from"./TeddyBear-CH2de-DA.js";import{L as r}from"./ListItem-5Rr0WNcR.js";import{L as m}from"./List-B0u74Cjz.js";import"./preload-helper-Cc2_yIPf.js";import"./Input-eieVqTh_.js";import"./Avatar-BB-8uFGa.js";import"./AvatarGroup-BWnxkhGl.js";import"./Badge-BVHpVrLu.js";import"./Tooltip-4yQO3AdC.js";import"./Heading-Bdv6LYG9.js";import"./useHighlightedText-B2HymlD1.js";import"./ChevronUp-fEa8K7DU.js";import"./ChevronDown-Ca0tEUL8.js";import"./ChevronRight-DGdpC6SO.js";import"./Flex-D_HsLLCq.js";const I=["default","subtle","tinted"],p=["xs","sm","md","lg","xl"],E={title:"List/Specimens",component:r,parameters:{},args:{id:"id",title:"Title",description:"Description"}},s=o(e=>n.jsx(m,{children:I.map(t=>n.jsx(l.Fragment,{children:n.jsx(r,{...e,icon:i,variant:t,label:t,linkIcon:!0})},t))}),"Variant"),a=o(({variant:e="default",...t})=>n.jsxs(m,{children:[n.jsx(r,{...t,icon:i,variant:e,label:e,linkIcon:!0}),n.jsx(r,{...t,icon:{theme:"tinted",svgElement:i},variant:e,title:e,description:"icon as iconProps",linkIcon:!0}),n.jsx(r,{...t,icon:{name:"Alfa",type:"company"},variant:e,title:e,description:"icon as avatarProps",linkIcon:!0}),n.jsx(r,{...t,icon:{items:[{name:"Alfa"},{name:"Beta"},{name:"Charlie"}]},variant:e,title:e,description:"icon as avatarGroupProps",linkIcon:!0}),n.jsx(r,{...t,icon:i,variant:e,title:e,description:"shadow:none",shadow:"none",linkIcon:!0}),n.jsx(r,{...t,icon:i,variant:e,title:e,description:"shadow:none, border:solid",shadow:"none",border:"solid",linkIcon:!0}),n.jsx(r,{...t,icon:i,variant:e,title:e,description:"shadow:none, border:dotted",shadow:"none",border:"dotted",linkIcon:!0})]}),"Options"),c=o(e=>n.jsx(m,{children:p.map(t=>n.jsx(l.Fragment,{children:n.jsx(r,{...e,label:t,icon:i,size:t,linkIcon:!0})},t))}),"Size"),d=o(e=>n.jsx(m,{children:p.map(t=>n.jsx("li",{children:n.jsx(s,{...e,size:t})},t))}),"VariantSize");s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
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
