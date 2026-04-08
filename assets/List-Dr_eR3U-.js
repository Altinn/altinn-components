import{t as e}from"./jsx-runtime-DwqL_Y-t.js";import{i as t,n,s as r}from"./blocks-BFztilWw.js";import{n as i}from"./lib-BuGdZX6V.js";import{Default as a,ListOfCategories as o,ListOfPeople as s,ListOfServices as c,MultilevelList as l}from"./List.stories-BYd8s2rZ.js";import{AvatarGroups as u,Avatars as d,Badges as f,Collapsible as p,CustomControls as m,Default as h,IconTypes as g,LoadingState as _,OverridingBadge as v,OverridingIcon as y,OverridingLabel as b,Selectable as x}from"./ListItem.stories-60PusYjw.js";var S=e();function C(e){let C={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(r,{title:`List`}),`
`,(0,S.jsx)(C.h1,{id:`using-lists`,children:`Using lists`}),`
`,(0,S.jsx)(C.p,{children:`Use lists to represent links to spesific objects, for example a list of people or a list of services.`}),`
`,(0,S.jsxs)(C.p,{children:[`Build lists using `,(0,S.jsx)(C.code,{children:`List`}),` and `,(0,S.jsx)(C.code,{children:`ListItem`}),`, or use `,(0,S.jsx)(C.code,{children:`List`}),` with `,(0,S.jsx)(C.code,{children:`items`}),` for simple, unified lists.`]}),`
`,(0,S.jsx)(C.pre,{children:(0,S.jsx)(C.code,{className:`language-tsx`,children:`import { List, ListItem } from "@altinn/altinn-components";

return (
  <List>
    <ListItem />
    <ListItem />
    <ListItem />
  </List>
);
`})}),`
`,(0,S.jsx)(C.p,{children:`While lists can be modified to represent spesific needs, we should try to establish common patterns for similar tasks across Altinn.`}),`
`,(0,S.jsx)(C.h2,{id:`simple-list`,children:`Simple list`}),`
`,(0,S.jsx)(C.p,{children:`List with icon and label.`}),`
`,(0,S.jsx)(n,{of:a}),`
`,(0,S.jsx)(C.h2,{id:`list-of-people`,children:`List of people`}),`
`,(0,S.jsx)(C.p,{children:`Lists of people, using avatars.`}),`
`,(0,S.jsx)(n,{of:s}),`
`,(0,S.jsx)(C.h2,{id:`list-of-services`,children:`List of services`}),`
`,(0,S.jsx)(C.p,{children:`Lists of services, using the service owner logo as avatar.`}),`
`,(0,S.jsx)(n,{of:c}),`
`,(0,S.jsx)(C.h2,{id:`list-of-categories`,children:`List of categories`}),`
`,(0,S.jsx)(C.p,{children:`Lists of categories, using an icon with a subtle color.`}),`
`,(0,S.jsx)(n,{of:o}),`
`,(0,S.jsx)(C.h2,{id:`expanding-multilevel-lists`,children:`Expanding, multilevel lists`}),`
`,(0,S.jsx)(C.p,{children:`An expandable multilevel list. Parent items are medium sized, children are small. Selected items are indicated using color, while unselected items are gray. Custom controls to manipulate item.`}),`
`,(0,S.jsx)(n,{of:l}),`
`,(0,S.jsx)(C.h2,{id:`listitem`,children:`ListItem`}),`
`,(0,S.jsxs)(C.p,{children:[`A `,(0,S.jsx)(C.code,{children:`ListItem`}),` represents a piece of content; a page, person or an object.`]}),`
`,(0,S.jsx)(n,{of:h}),`
`,(0,S.jsx)(C.h2,{id:`how-to-use`,children:`How to use`}),`
`,(0,S.jsx)(C.pre,{children:(0,S.jsx)(C.code,{className:`language-tsx`,children:`import { ListItem } from "@altinn/altinn-components";
import { ChevronRightIcon, TeddyBearIcon } from "@navikt/aksel-icons";

<ListItem
  title="Title"
  icon={{ theme: "surface", svgElement: TeddyBearIcon }}
  badge={{ theme: "subtle", label: "2 av 3" }}
  linkIcon
/>;
`})}),`
`,(0,S.jsx)(C.h2,{id:`using-icons-or-avatars`,children:`Using icons or avatars`}),`
`,(0,S.jsxs)(C.p,{children:[`Add an icon using the `,(0,S.jsx)(C.code,{children:`icon`}),` prop. Icons can be references by name or using IconProps, making it possible to add an optional `,(0,S.jsx)(C.code,{children:`color`}),` and `,(0,S.jsx)(C.code,{children:`theme`}),`.`]}),`
`,(0,S.jsx)(n,{of:g}),`
`,(0,S.jsxs)(C.p,{children:[`Add an avatar using the `,(0,S.jsx)(C.code,{children:`avatar`}),` prop.`]}),`
`,(0,S.jsx)(n,{of:d}),`
`,(0,S.jsxs)(C.p,{children:[`Add an avatar group using the `,(0,S.jsx)(C.code,{children:`avatarGroup`}),` prop.`]}),`
`,(0,S.jsx)(n,{of:u}),`
`,(0,S.jsxs)(C.p,{children:[`If you need a custom icon you can override it by adding your own component as `,(0,S.jsx)(C.code,{children:`icon`}),`:`]}),`
`,(0,S.jsx)(n,{of:y}),`
`,(0,S.jsx)(C.h2,{id:`using-labels`,children:`Using labels`}),`
`,(0,S.jsxs)(C.p,{children:[`By default labels are built up of a `,(0,S.jsx)(C.code,{children:`badge`}),` and an optional `,(0,S.jsx)(C.code,{children:`description`}),`. You can override both using the `,(0,S.jsx)(C.code,{children:`label`}),` prop:`]}),`
`,(0,S.jsx)(n,{of:b}),`
`,(0,S.jsx)(C.h2,{id:`using-badges`,children:`Using badges`}),`
`,(0,S.jsxs)(C.p,{children:[`By default list items will include a chevron indicating interaction. Use the `,(0,S.jsx)(C.code,{children:`badge`}),` prop to emphasise what action to expect.`]}),`
`,(0,S.jsx)(n,{of:f}),`
`,(0,S.jsxs)(C.p,{children:[`Badge can be replaced with your own component unsing the `,(0,S.jsx)(C.code,{children:`badge`}),` prop:`]}),`
`,(0,S.jsx)(n,{of:v}),`
`,(0,S.jsx)(C.h2,{id:`loading-state`,children:`Loading state`}),`
`,(0,S.jsxs)(C.p,{children:[`Add the `,(0,S.jsx)(C.code,{children:`loading`}),` prop to represent that a list item is loading .`]}),`
`,(0,S.jsx)(n,{of:_}),`
`,(0,S.jsx)(C.h2,{id:`custom-controls`,children:`Custom controls`}),`
`,(0,S.jsxs)(C.p,{children:[`Add custom controls using the `,(0,S.jsx)(C.code,{children:`controls`}),` prop.`]}),`
`,(0,S.jsx)(n,{of:m}),`
`,(0,S.jsx)(C.p,{children:`When adding controls, list item interaction is split from controls and default badges are moved next to the label.`}),`
`,(0,S.jsx)(C.h2,{id:`collapsibleexpanded`,children:`Collapsible/expanded`}),`
`,(0,S.jsxs)(C.p,{children:[`Make items collapsible by adding the `,(0,S.jsx)(C.code,{children:`collapsible`}),` prop. Adding the `,(0,S.jsx)(C.code,{children:`expanded`}),` prop will expose its `,(0,S.jsx)(C.code,{children:`children`}),`.`]}),`
`,(0,S.jsx)(n,{of:p}),`
`,(0,S.jsx)(C.h2,{id:`selectable`,children:`Selectable`}),`
`,(0,S.jsxs)(C.p,{children:[`Make items selectable by using the `,(0,S.jsx)(C.code,{children:`select`}),` prop. Add `,(0,S.jsx)(C.code,{children:`selected`}),` to select the whole element.`]}),`
`,(0,S.jsx)(n,{of:x}),`
`,(0,S.jsx)(C.h2,{id:`props`,children:`Props`}),`
`,(0,S.jsx)(C.p,{children:`List props.`}),`
`,(0,S.jsx)(n,{of:a}),`
`,(0,S.jsx)(C.p,{children:`ListItem props.`}),`
`,(0,S.jsx)(t,{of:h})]})}function w(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,S.jsx)(t,{...e,children:(0,S.jsx)(C,{...e})}):C(e)}export{w as default};