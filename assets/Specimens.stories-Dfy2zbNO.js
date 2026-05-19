import{j as r,r as d}from"./iframe-GJv3-kpe.js";import{S as i}from"./TeddyBear-DEU1NZyD.js";import{L as n}from"./ListItem-D03tI2LI.js";import{L as m}from"./List-4WWtcier.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B1GQrjht.js";import"./index-D19pPnAw.js";import"./Button-XgEODhFb.js";import"./button-5jjXov6B.js";import"./use-merge-refs-oF7p1rqv.js";import"./lite-DaUVFjkg.js";import"./Input-WbVs78EM.js";import"./input-B1NrCnvc.js";import"./XMark-D7blLnze.js";import"./Icon-DKgAzIsH.js";import"./Skeleton-dVNdeapn.js";import"./Avatar-CGv-fnY8.js";import"./AvatarGroup-DxuzyW4n.js";import"./Badge-CyLczarF.js";import"./Tooltip-Dv6bEDCe.js";import"./floating-ui.dom-DCpi3RTt.js";import"./Heading-CiHDuood.js";import"./useHighlightedText-ClfYglU-.js";import"./ChevronUp-DpWMs-eZ.js";import"./ChevronDown-DZsHrJjp.js";import"./ChevronRight-C3wqtQo3.js";import"./Flex-CxS25VqD.js";const l=["default","subtle","tinted"],p=["xs","sm","md","lg","xl"],R={title:"List/Specimens",component:n,parameters:{},args:{id:"id",title:"Title",description:"Description"}},o=e=>r.jsx(m,{children:l.map(t=>r.jsx(d.Fragment,{children:r.jsx(n,{...e,icon:i,variant:t,label:t,linkIcon:!0})},t))}),s=({variant:e="default",...t})=>r.jsxs(m,{children:[r.jsx(n,{...t,icon:i,variant:e,label:e,linkIcon:!0}),r.jsx(n,{...t,icon:{theme:"tinted",svgElement:i},variant:e,title:e,description:"icon as iconProps",linkIcon:!0}),r.jsx(n,{...t,icon:{name:"Alfa",type:"company"},variant:e,title:e,description:"icon as avatarProps",linkIcon:!0}),r.jsx(n,{...t,icon:{items:[{name:"Alfa"},{name:"Beta"},{name:"Charlie"}]},variant:e,title:e,description:"icon as avatarGroupProps",linkIcon:!0}),r.jsx(n,{...t,icon:i,variant:e,title:e,description:"shadow:none",shadow:"none",linkIcon:!0}),r.jsx(n,{...t,icon:i,variant:e,title:e,description:"shadow:none, border:solid",shadow:"none",border:"solid",linkIcon:!0}),r.jsx(n,{...t,icon:i,variant:e,title:e,description:"shadow:none, border:dotted",shadow:"none",border:"dotted",linkIcon:!0})]}),a=e=>r.jsx(m,{children:p.map(t=>r.jsx(d.Fragment,{children:r.jsx(n,{...e,label:t,icon:i,size:t,linkIcon:!0})},t))}),c=e=>r.jsx(m,{children:p.map(t=>r.jsx("li",{children:r.jsx(o,{...e,size:t})},t))});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
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
}`,...c.parameters?.docs?.source}}};const q=["Variant","Options","Size","VariantSize"];export{s as Options,a as Size,o as Variant,c as VariantSize,q as __namedExportsOrder,R as default};
