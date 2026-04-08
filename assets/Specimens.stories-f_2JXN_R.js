import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-CpyhhMkF.js";import{t as n}from"./jsx-runtime-DwqL_Y-t.js";import{t as r}from"./TeddyBear-BOWHyBXM.js";import{t as i}from"./ListItem-DAJg57C2.js";import{t as a}from"./List-BNjZuxCc.js";var o=e(t(),1),s=n(),c=[`default`,`subtle`,`tinted`],l=[`xs`,`sm`,`md`,`lg`,`xl`],u={title:`List/Specimens`,component:i,parameters:{},args:{id:`id`,title:`Title`,description:`Description`}},d=e=>(0,s.jsx)(a,{children:c.map(t=>(0,s.jsx)(o.Fragment,{children:(0,s.jsx)(i,{...e,icon:r,variant:t,label:t,linkIcon:!0})},t))}),f=({variant:e=`default`,...t})=>(0,s.jsxs)(a,{children:[(0,s.jsx)(i,{...t,icon:r,variant:e,label:e,linkIcon:!0}),(0,s.jsx)(i,{...t,icon:{theme:`tinted`,svgElement:r},variant:e,title:e,description:`icon as iconProps`,linkIcon:!0}),(0,s.jsx)(i,{...t,icon:{name:`Alfa`,type:`company`},variant:e,title:e,description:`icon as avatarProps`,linkIcon:!0}),(0,s.jsx)(i,{...t,icon:{items:[{name:`Alfa`},{name:`Beta`},{name:`Charlie`}]},variant:e,title:e,description:`icon as avatarGroupProps`,linkIcon:!0}),(0,s.jsx)(i,{...t,icon:r,variant:e,title:e,description:`shadow:none`,shadow:`none`,linkIcon:!0}),(0,s.jsx)(i,{...t,icon:r,variant:e,title:e,description:`shadow:none, border:solid`,shadow:`none`,border:`solid`,linkIcon:!0}),(0,s.jsx)(i,{...t,icon:r,variant:e,title:e,description:`shadow:none, border:dotted`,shadow:`none`,border:`dotted`,linkIcon:!0})]}),p=e=>(0,s.jsx)(a,{children:l.map(t=>(0,s.jsx)(o.Fragment,{children:(0,s.jsx)(i,{...e,label:t,icon:r,size:t,linkIcon:!0})},t))}),m=e=>(0,s.jsx)(a,{children:l.map(t=>(0,s.jsx)(`li`,{children:(0,s.jsx)(d,{...e,size:t})},t))});d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
  return <List>
      {variants.map(variant => {
      return <Fragment key={variant}>
            <ListItem {...args} icon={TeddyBearIcon} variant={variant} label={variant} linkIcon />
          </Fragment>;
    })}
    </List>;
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`({
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
  return <List>
      {sizes.map(size => {
      return <Fragment key={size}>
            <ListItem {...args} label={size} icon={TeddyBearIcon} size={size} linkIcon />
          </Fragment>;
    })}
    </List>;
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
  return <List>
      {sizes.map(size => {
      return <li key={size}>
            <Variant {...args} size={size} />
          </li>;
    })}
    </List>;
}`,...m.parameters?.docs?.source}}};var h=[`Variant`,`Options`,`Size`,`VariantSize`];export{f as Options,p as Size,d as Variant,m as VariantSize,h as __namedExportsOrder,u as default};