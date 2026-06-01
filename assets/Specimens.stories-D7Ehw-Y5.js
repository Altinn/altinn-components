import{a7 as n,aa as m}from"./iframe-cf7ESM3q.js";import{S as i}from"./TeddyBear-C3XYx_4J.js";import{L as r}from"./ListItem-CXqD_edS.js";import{L as d}from"./List-8ewPRx_4.js";import"./preload-helper-PPVm8Dsz.js";import"./Input-DT4mbTp0.js";import"./Avatar-0G-pd6NH.js";import"./AvatarGroup-Y1BTiBK0.js";import"./Badge-CCa-9q1v.js";import"./Tooltip-B9_Ir4Cy.js";import"./Heading-CpNWi06X.js";import"./useHighlightedText-D_wbJNXZ.js";import"./ChevronUp-B_u4FtrM.js";import"./ChevronDown-DOXFb4Ko.js";import"./ChevronRight-Dy1T7Tgm.js";import"./Flex-BG_p9pKV.js";const p=["default","subtle","tinted"],l=["xs","sm","md","lg","xl"],P={title:"List/Specimens",component:r,parameters:{},args:{id:"id",title:"Title",description:"Description"}},o=e=>n.jsx(d,{children:p.map(t=>n.jsx(m.Fragment,{children:n.jsx(r,{...e,icon:i,variant:t,label:t,linkIcon:!0})},t))}),s=({variant:e="default",...t})=>n.jsxs(d,{children:[n.jsx(r,{...t,icon:i,variant:e,label:e,linkIcon:!0}),n.jsx(r,{...t,icon:{theme:"tinted",svgElement:i},variant:e,title:e,description:"icon as iconProps",linkIcon:!0}),n.jsx(r,{...t,icon:{name:"Alfa",type:"company"},variant:e,title:e,description:"icon as avatarProps",linkIcon:!0}),n.jsx(r,{...t,icon:{items:[{name:"Alfa"},{name:"Beta"},{name:"Charlie"}]},variant:e,title:e,description:"icon as avatarGroupProps",linkIcon:!0}),n.jsx(r,{...t,icon:i,variant:e,title:e,description:"shadow:none",shadow:"none",linkIcon:!0}),n.jsx(r,{...t,icon:i,variant:e,title:e,description:"shadow:none, border:solid",shadow:"none",border:"solid",linkIcon:!0}),n.jsx(r,{...t,icon:i,variant:e,title:e,description:"shadow:none, border:dotted",shadow:"none",border:"dotted",linkIcon:!0})]}),a=e=>n.jsx(d,{children:l.map(t=>n.jsx(m.Fragment,{children:n.jsx(r,{...e,label:t,icon:i,size:t,linkIcon:!0})},t))}),c=e=>n.jsx(d,{children:l.map(t=>n.jsx("li",{children:n.jsx(o,{...e,size:t})},t))});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
  return <List>
      {variants.map(variant => {
      return <Fragment key={variant}>
            <ListItem {...args} icon={TeddyBearIcon} variant={variant} label={variant} linkIcon />
          </Fragment>;
    })}
    </List>;
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
  return <List>
      {sizes.map(size => {
      return <Fragment key={size}>
            <ListItem {...args} label={size} icon={TeddyBearIcon} size={size} linkIcon />
          </Fragment>;
    })}
    </List>;
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
  return <List>
      {sizes.map(size => {
      return <li key={size}>
            <Variant {...args} size={size} />
          </li>;
    })}
    </List>;
}`,...c.parameters?.docs?.source}}};const T=["Variant","Options","Size","VariantSize"];export{s as Options,a as Size,o as Variant,c as VariantSize,T as __namedExportsOrder,P as default};
