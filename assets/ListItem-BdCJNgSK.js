import{t as e}from"./jsx-runtime-DwqL_Y-t.js";import{c as t,i as n,n as r,s as i}from"./blocks-BFztilWw.js";import{n as a}from"./lib-BuGdZX6V.js";import{AvatarGroups as o,Avatars as s,Badges as c,Collapsible as l,CustomControls as u,Default as d,IconTypes as f,LoadingState as p,OverridingBadge as m,OverridingIcon as h,OverridingLabel as g,Selectable as _,t as v}from"./ListItem.stories-60PusYjw.js";var y=e();function b(e){let b={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...a(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(i,{of:v}),`
`,(0,y.jsx)(b.h1,{id:`listitem`,children:`ListItem`}),`
`,(0,y.jsxs)(b.p,{children:[`A `,(0,y.jsx)(b.code,{children:`ListItem`}),` represents a piece of content; a page, person or an object.`]}),`
`,(0,y.jsx)(t,{}),`
`,(0,y.jsx)(b.h2,{id:`how-to-use`,children:`How to use`}),`
`,(0,y.jsx)(b.pre,{children:(0,y.jsx)(b.code,{className:`language-tsx`,children:`import { ListItem } from "@altinn/altinn-components";
import { TeddyBearIcon } from "@navikt/aksel-icons";

<ListItem
  title="Title"
  icon={{ theme: "surface", svgElement: TeddyBearIcon }}
  badge={{ theme: "subtle", label: "2 av 3" }}
  linkIcon
/>;
`})}),`
`,(0,y.jsx)(b.h2,{id:`using-icons-or-avatars`,children:`Using icons or avatars`}),`
`,(0,y.jsxs)(b.p,{children:[`Add an icon using the `,(0,y.jsx)(b.code,{children:`icon`}),` prop. Icons can be references by name or using IconProps, making it possible to add an optional `,(0,y.jsx)(b.code,{children:`color`}),` and `,(0,y.jsx)(b.code,{children:`theme`}),`.`]}),`
`,(0,y.jsx)(r,{of:f}),`
`,(0,y.jsxs)(b.p,{children:[`Add an avatar using the `,(0,y.jsx)(b.code,{children:`avatar`}),` prop.`]}),`
`,(0,y.jsx)(r,{of:s}),`
`,(0,y.jsxs)(b.p,{children:[`Add an avatar group using the `,(0,y.jsx)(b.code,{children:`avatarGroup`}),` prop.`]}),`
`,(0,y.jsx)(r,{of:o}),`
`,(0,y.jsxs)(b.p,{children:[`If you need a custom icon you can override it by adding your own component as `,(0,y.jsx)(b.code,{children:`icon`}),`:`]}),`
`,(0,y.jsx)(r,{of:h}),`
`,(0,y.jsx)(b.h2,{id:`using-labels`,children:`Using labels`}),`
`,(0,y.jsxs)(b.p,{children:[`By default labels are built up of a `,(0,y.jsx)(b.code,{children:`badge`}),` and an optional `,(0,y.jsx)(b.code,{children:`description`}),`. You can override both using the `,(0,y.jsx)(b.code,{children:`label`}),` prop:`]}),`
`,(0,y.jsx)(r,{of:g}),`
`,(0,y.jsx)(b.h2,{id:`collapsibleexpanded`,children:`Collapsible/expanded`}),`
`,(0,y.jsxs)(b.p,{children:[`Make items collapsible by adding the `,(0,y.jsx)(b.code,{children:`collapsible`}),` prop. Adding the `,(0,y.jsx)(b.code,{children:`expanded`}),` prop will expose the `,(0,y.jsx)(b.code,{children:`children`}),` of the list item.`]}),`
`,(0,y.jsx)(r,{of:l}),`
`,(0,y.jsx)(b.h2,{id:`arrow-and-badges`,children:`Arrow and badges`}),`
`,(0,y.jsxs)(b.p,{children:[`Use the `,(0,y.jsx)(b.code,{children:`linkIcon`}),` prop to indicate to the user that your item is a link. The `,(0,y.jsx)(b.code,{children:`badge`}),` prop is also useful for informing the user of what to expect when interacting with the item. For example if the item is collapsable.`]}),`
`,(0,y.jsx)(r,{of:c}),`
`,(0,y.jsxs)(b.p,{children:[`Badge can be replaced with your own component unsing the `,(0,y.jsx)(b.code,{children:`badge`}),` prop:`]}),`
`,(0,y.jsx)(r,{of:m}),`
`,(0,y.jsx)(b.h2,{id:`loading-state`,children:`Loading state`}),`
`,(0,y.jsxs)(b.p,{children:[`Add the `,(0,y.jsx)(b.code,{children:`loading`}),` prop to represent that a list item is loading .`]}),`
`,(0,y.jsx)(r,{of:p}),`
`,(0,y.jsx)(b.h2,{id:`custom-controls`,children:`Custom controls`}),`
`,(0,y.jsxs)(b.p,{children:[`Add custom controls using the `,(0,y.jsx)(b.code,{children:`controls`}),` prop.`]}),`
`,(0,y.jsx)(r,{of:u}),`
`,(0,y.jsx)(b.p,{children:`When adding controls, list item interaction is split from controls and default badges are moved next to the label.`}),`
`,(0,y.jsx)(b.h2,{id:`selectable`,children:`Selectable`}),`
`,(0,y.jsxs)(b.p,{children:[`Make items selectable by using the `,(0,y.jsx)(b.code,{children:`select`}),` prop. Add `,(0,y.jsx)(b.code,{children:`selected`}),` to select the whole element.`]}),`
`,(0,y.jsx)(r,{of:_}),`
`,(0,y.jsx)(b.h2,{id:`props`,children:`Props`}),`
`,(0,y.jsx)(t,{}),`
`,(0,y.jsx)(n,{of:d})]})}function x(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(b,{...e})}):b(e)}export{x as default};