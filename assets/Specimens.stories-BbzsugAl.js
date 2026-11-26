var u=Object.defineProperty;var o=(n,e)=>u(n,"name",{value:e,configurable:!0});import{a6 as t,a9 as l}from"./iframe-ZrU_khjL.js";import{S as i}from"./TeddyBear-CrnJMxd5.js";import{L as r}from"./ListItem-CX7K8M2d.js";import{L as m}from"./List-YiG15duf.js";import"./preload-helper-Cc2_yIPf.js";import"./Input-pcnWwkdM.js";import"./Avatar-Cz72QNux.js";import"./AvatarGroup-Bva3vDjZ.js";import"./Badge-CRj8wKrC.js";import"./Tooltip-Dbgfurbn.js";import"./Heading-CifG33hf.js";import"./useHighlightedText-CDx2rO1x.js";import"./ChevronUp-CSSlqESb.js";import"./ChevronDown-BB20zuC9.js";import"./ChevronRight-I-BGQZW2.js";import"./Flex-DJ1B1xxZ.js";const I=["default","subtle","tinted"],p=["xs","sm","md","lg","xl"],E={title:"List/Specimens",component:r,parameters:{},args:{id:"id",title:"Title",description:"Description"}},s=o(n=>t.jsx(m,{children:I.map(e=>t.jsx(l.Fragment,{children:t.jsx(r,{...n,icon:i,variant:e,label:e,linkIcon:!0})},e))}),"Variant"),a=o(({variant:n="default",...e})=>t.jsxs(m,{children:[t.jsx(r,{...e,icon:i,variant:n,label:n,linkIcon:!0}),t.jsx(r,{...e,icon:{theme:"tinted",svgElement:i},variant:n,title:n,description:"icon as iconProps",linkIcon:!0}),t.jsx(r,{...e,icon:{name:"Alfa",type:"company"},variant:n,title:n,description:"icon as avatarProps",linkIcon:!0}),t.jsx(r,{...e,icon:{items:[{name:"Alfa"},{name:"Beta"},{name:"Charlie"}]},variant:n,title:n,description:"icon as avatarGroupProps",linkIcon:!0}),t.jsx(r,{...e,icon:i,variant:n,title:n,description:"shadow:none",shadow:"none",linkIcon:!0}),t.jsx(r,{...e,icon:i,variant:n,title:n,description:"shadow:none, border:solid",shadow:"none",border:"solid",linkIcon:!0}),t.jsx(r,{...e,icon:i,variant:n,title:n,description:"shadow:none, border:dotted",shadow:"none",border:"dotted",linkIcon:!0})]}),"Options"),c=o(n=>t.jsx(m,{children:p.map(e=>t.jsx(l.Fragment,{children:t.jsx(r,{...n,label:e,icon:i,size:e,linkIcon:!0})},e))}),"Size"),d=o(n=>t.jsx(m,{children:p.map(e=>t.jsx("li",{children:t.jsx(s,{...n,size:e})},e))}),"VariantSize"),V=["Variant","Options","Size","VariantSize"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
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
}`,...d.parameters?.docs?.source}}};export{a as Options,c as Size,s as Variant,d as VariantSize,V as __namedExportsOrder,E as default};
