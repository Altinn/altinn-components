import{j as r,r as d}from"./iframe-DkQPO9ro.js";import{S as i}from"./TeddyBear-R0sOz7tP.js";import{L as n}from"./ListItem-BiMhvfk_.js";import{L as m}from"./List-DQSHYer2.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CwF4wxTL.js";import"./index-BrTdOUlk.js";import"./Button-OKMeorO5.js";import"./button-Byovksc3.js";import"./use-merge-refs-B1oKProt.js";import"./lite-DaUVFjkg.js";import"./Input-CFLvjpxG.js";import"./input-BwL9rXep.js";import"./XMark-5G2rqhrX.js";import"./Icon-Dao4TSf9.js";import"./Skeleton-8DklmnzK.js";import"./Avatar-DlrsSRUv.js";import"./AvatarGroup-DkXzBnSr.js";import"./Badge-cGEpqNqN.js";import"./Tooltip-DHQ9pKqw.js";import"./floating-ui.dom-DCpi3RTt.js";import"./Heading-Otl-Ib-S.js";import"./useHighlightedText-BlkM7iRt.js";import"./ChevronUp-1RXiKLsv.js";import"./ChevronDown-CbPk4DLa.js";import"./ChevronRight-Ddmldm4v.js";import"./Flex-Cy28VffD.js";const l=["default","subtle","tinted"],p=["xs","sm","md","lg","xl"],R={title:"List/Specimens",component:n,parameters:{},args:{id:"id",title:"Title",description:"Description"}},o=e=>r.jsx(m,{children:l.map(t=>r.jsx(d.Fragment,{children:r.jsx(n,{...e,icon:i,variant:t,label:t,linkIcon:!0})},t))}),s=({variant:e="default",...t})=>r.jsxs(m,{children:[r.jsx(n,{...t,icon:i,variant:e,label:e,linkIcon:!0}),r.jsx(n,{...t,icon:{theme:"tinted",svgElement:i},variant:e,title:e,description:"icon as iconProps",linkIcon:!0}),r.jsx(n,{...t,icon:{name:"Alfa",type:"company"},variant:e,title:e,description:"icon as avatarProps",linkIcon:!0}),r.jsx(n,{...t,icon:{items:[{name:"Alfa"},{name:"Beta"},{name:"Charlie"}]},variant:e,title:e,description:"icon as avatarGroupProps",linkIcon:!0}),r.jsx(n,{...t,icon:i,variant:e,title:e,description:"shadow:none",shadow:"none",linkIcon:!0}),r.jsx(n,{...t,icon:i,variant:e,title:e,description:"shadow:none, border:solid",shadow:"none",border:"solid",linkIcon:!0}),r.jsx(n,{...t,icon:i,variant:e,title:e,description:"shadow:none, border:dotted",shadow:"none",border:"dotted",linkIcon:!0})]}),a=e=>r.jsx(m,{children:p.map(t=>r.jsx(d.Fragment,{children:r.jsx(n,{...e,label:t,icon:i,size:t,linkIcon:!0})},t))}),c=e=>r.jsx(m,{children:p.map(t=>r.jsx("li",{children:r.jsx(o,{...e,size:t})},t))});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: ListItemProps) => {
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
