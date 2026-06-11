import{ag as l,a7 as e,r as d,C as s,i as a}from"./iframe-CvGAoPsc.js";import{Default as t,ListOfPeople as c,ListOfServices as p,ListOfCategories as h,MultilevelList as m}from"./List.stories-Ch6urHvc.js";import{D as o,I as x,a as j,A as u,d as g,e as f,B as b,O as v,c as L,b as I,C as w,S as y}from"./ListItem.stories-DLMsKGTg.js";import"./preload-helper-PPVm8Dsz.js";import"./Database-D7lYyDfc.js";import"./TeddyBear-z-tIoFu4.js";import"./skatt-Eb53q4vT.js";import"./brreg-2IRVVnCD.js";import"./nav-Cq5UszUX.js";import"./Package-B7KZJrDu.js";import"./List-DsJgCFOz.js";import"./Flex-DO5C4y-8.js";import"./ListItem-CuEPEVad.js";import"./Input-CQ0xvTw5.js";import"./Avatar-Bjc-Jmrn.js";import"./AvatarGroup-_sxbmMl3.js";import"./Badge-C_wE1QB8.js";import"./Tooltip-BfnkAeey.js";import"./Heading--2u1ER42.js";import"./useHighlightedText-9vbrUFu0.js";import"./ChevronUp-BlXkTO7h.js";import"./ChevronDown-CQ4dl58P.js";import"./ChevronRight-CMCEl43v.js";import"./categoryItems-B5jJpii2.js";import"./HardHat-ee3ioBTS.js";import"./Truck-DR2dfjfD.js";import"./Buildings2-BpnIx9_g.js";import"./Section-25rkGJ0B.js";import"./Typography-BnX3Du0Y.js";import"./ContextMenu-XF95haZj.js";import"./useDropdownMenuController-DHE3Yfxx.js";import"./Dropdown-wMqb1yc7.js";import"./SearchField-BnKKet4K.js";import"./MagnifyingGlass-B5EFcWq7.js";import"./FieldBase-DoX_7GiJ.js";import"./Field-jyfGm65f.js";import"./Label-CufJDrgK.js";import"./useMenu-CZTVrDBq.js";import"./MenuListItem-CG5q7PCk.js";import"./MenuListHeading-CgytQ4SA.js";import"./MenuItem-CixWxF6L.js";import"./ItemMedia-CdB4UUVE.js";import"./Checkmark-Db10x7b8.js";import"./ItemLabel-BBQQw1-7.js";import"./ItemControls-CFHaIVdN.js";import"./index-CRXgSDNk.js";import"./InformationSquare-DmU_7K9H.js";import"./MenuElipsisHorizontal-BGx_HU9M.js";import"./Cog-zNRM3TA-.js";import"./ClockDashed-BesnLeVl.js";import"./Pencil-UIXs5vM8.js";import"./Switch-CooEQBmn.js";function r(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"List"}),`
`,e.jsx(i.h1,{id:"using-lists",children:"Using lists"}),`
`,e.jsx(i.p,{children:"Use lists to represent links to spesific objects, for example a list of people or a list of services."}),`
`,e.jsxs(i.p,{children:["Build lists using ",e.jsx(i.code,{children:"List"})," and ",e.jsx(i.code,{children:"ListItem"}),", or use ",e.jsx(i.code,{children:"List"})," with ",e.jsx(i.code,{children:"items"})," for simple, unified lists."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import { List, ListItem } from "@altinn/altinn-components";

return (
  <List>
    <ListItem />
    <ListItem />
    <ListItem />
  </List>
);
`})}),`
`,e.jsx(i.p,{children:"While lists can be modified to represent spesific needs, we should try to establish common patterns for similar tasks across Altinn."}),`
`,e.jsx(i.h2,{id:"simple-list",children:"Simple list"}),`
`,e.jsx(i.p,{children:"List with icon and label."}),`
`,e.jsx(s,{of:t}),`
`,e.jsx(i.h2,{id:"list-of-people",children:"List of people"}),`
`,e.jsx(i.p,{children:"Lists of people, using avatars."}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(i.h2,{id:"list-of-services",children:"List of services"}),`
`,e.jsx(i.p,{children:"Lists of services, using the service owner logo as avatar."}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(i.h2,{id:"list-of-categories",children:"List of categories"}),`
`,e.jsx(i.p,{children:"Lists of categories, using an icon with a subtle color."}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(i.h2,{id:"expanding-multilevel-lists",children:"Expanding, multilevel lists"}),`
`,e.jsx(i.p,{children:"An expandable multilevel list. Parent items are medium sized, children are small. Selected items are indicated using color, while unselected items are gray. Custom controls to manipulate item."}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(i.h2,{id:"listitem",children:"ListItem"}),`
`,e.jsxs(i.p,{children:["A ",e.jsx(i.code,{children:"ListItem"})," represents a piece of content; a page, person or an object."]}),`
`,e.jsx(s,{of:o}),`
`,e.jsx(i.h2,{id:"how-to-use",children:"How to use"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import { ListItem } from "@altinn/altinn-components";
import { ChevronRightIcon, TeddyBearIcon } from "@navikt/aksel-icons";

<ListItem
  title="Title"
  icon={{ theme: "surface", svgElement: TeddyBearIcon }}
  badge={{ theme: "subtle", label: "2 av 3" }}
  linkIcon
/>;
`})}),`
`,e.jsx(i.h2,{id:"using-icons-or-avatars",children:"Using icons or avatars"}),`
`,e.jsxs(i.p,{children:["Add an icon using the ",e.jsx(i.code,{children:"icon"})," prop. Icons can be references by name or using IconProps, making it possible to add an optional ",e.jsx(i.code,{children:"color"})," and ",e.jsx(i.code,{children:"theme"}),"."]}),`
`,e.jsx(s,{of:x}),`
`,e.jsxs(i.p,{children:["Add an avatar using the ",e.jsx(i.code,{children:"avatar"})," prop."]}),`
`,e.jsx(s,{of:j}),`
`,e.jsxs(i.p,{children:["Add an avatar group using the ",e.jsx(i.code,{children:"avatarGroup"})," prop."]}),`
`,e.jsx(s,{of:u}),`
`,e.jsxs(i.p,{children:["If you need a custom icon you can override it by adding your own component as ",e.jsx(i.code,{children:"icon"}),":"]}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(i.h2,{id:"using-labels",children:"Using labels"}),`
`,e.jsxs(i.p,{children:["By default labels are built up of a ",e.jsx(i.code,{children:"badge"})," and an optional ",e.jsx(i.code,{children:"description"}),". You can override both using the ",e.jsx(i.code,{children:"label"})," prop:"]}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(i.h2,{id:"using-badges",children:"Using badges"}),`
`,e.jsxs(i.p,{children:["By default list items will include a chevron indicating interaction. Use the ",e.jsx(i.code,{children:"badge"})," prop to emphasise what action to expect."]}),`
`,e.jsx(s,{of:b}),`
`,e.jsxs(i.p,{children:["Badge can be replaced with your own component unsing the ",e.jsx(i.code,{children:"badge"})," prop:"]}),`
`,e.jsx(s,{of:v}),`
`,e.jsx(i.h2,{id:"loading-state",children:"Loading state"}),`
`,e.jsxs(i.p,{children:["Add the ",e.jsx(i.code,{children:"loading"})," prop to represent that a list item is loading ."]}),`
`,e.jsx(s,{of:L}),`
`,e.jsx(i.h2,{id:"custom-controls",children:"Custom controls"}),`
`,e.jsxs(i.p,{children:["Add custom controls using the ",e.jsx(i.code,{children:"controls"})," prop."]}),`
`,e.jsx(s,{of:I}),`
`,e.jsx(i.p,{children:"When adding controls, list item interaction is split from controls and default badges are moved next to the label."}),`
`,e.jsx(i.h2,{id:"collapsibleexpanded",children:"Collapsible/expanded"}),`
`,e.jsxs(i.p,{children:["Make items collapsible by adding the ",e.jsx(i.code,{children:"collapsible"})," prop. Adding the ",e.jsx(i.code,{children:"expanded"})," prop will expose its ",e.jsx(i.code,{children:"children"}),"."]}),`
`,e.jsx(s,{of:w}),`
`,e.jsx(i.h2,{id:"selectable",children:"Selectable"}),`
`,e.jsxs(i.p,{children:["Make items selectable by using the ",e.jsx(i.code,{children:"select"})," prop. Add ",e.jsx(i.code,{children:"selected"})," to select the whole element."]}),`
`,e.jsx(s,{of:y}),`
`,e.jsx(i.h2,{id:"props",children:"Props"}),`
`,e.jsx(i.p,{children:"List props."}),`
`,e.jsx(s,{of:t}),`
`,e.jsx(i.p,{children:"ListItem props."}),`
`,e.jsx(a,{of:o})]})}function we(n={}){const{wrapper:i}={...l(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(r,{...n})}):r(n)}export{we as default};
