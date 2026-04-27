import{j as e,M as d,C as s,b as c}from"./iframe-B56t8i7v.js";import{useMDXComponents as l}from"./index-D2y4v_6X.js";import{Default as t,ListOfPeople as a,ListOfServices as p,ListOfCategories as m,MultilevelList as h}from"./List.stories-AVZRRX6K.js";import{D as o,I as x,A as j,a as u,O as g,b as f,B as b,c as L,L as v,C as I,d as w,S as y}from"./ListItem.stories-tc3-w-a4.js";import"./preload-helper-PPVm8Dsz.js";import"./Database-DegDU5T9.js";import"./useId-Ce_44NzT.js";import"./TeddyBear-D0qKMGJZ.js";import"./nav-Cq5UszUX.js";import"./Package-C2ERqMhi.js";import"./List-Cf0-_oGc.js";import"./index-CHgNdXFp.js";import"./Flex-BSViFEWJ.js";import"./ListItem-DXm9Ifb4.js";import"./Button-x4ugPYkx.js";import"./button-BSGP1CSM.js";import"./use-merge-refs-CJ3sV19d.js";import"./lite-DaUVFjkg.js";import"./Input-DqVNSGAW.js";import"./input-CtI4L4z7.js";import"./XMark-CQR84vCO.js";import"./Icon-CgN9F-ql.js";import"./Skeleton-Cer98cLN.js";import"./Avatar-_1995Z8x.js";import"./AvatarGroup-kqIJtB4O.js";import"./Badge-DuKldjFD.js";import"./Tooltip-uv_ZTnws.js";import"./floating-ui.dom-DCpi3RTt.js";import"./Heading-B0k14T1s.js";import"./useHighlightedText-YMvuFtwb.js";import"./ChevronUp-DZyTk36P.js";import"./ChevronDown-DuvcSheB.js";import"./ChevronRight-VYKVaZtU.js";import"./skatt-Eb53q4vT.js";import"./brreg-2IRVVnCD.js";import"./categoryItems-BdgiDDFx.js";import"./HardHat-FKTZm-YJ.js";import"./Truck-D5nSD8x0.js";import"./Buildings2-Cmz8iX3m.js";import"./Section-DXg-mnVx.js";import"./Typography-C36VcWyw.js";import"./ContextMenu-WzTnKvto.js";import"./useDropdownMenuController-C8fBo27X.js";import"./Dropdown-CjWcilfw.js";import"./MenuElipsisHorizontal-CC_TKBZM.js";import"./SearchField-BtQfQfgA.js";import"./MagnifyingGlass-U17pnqdh.js";import"./FieldBase-BkGCBc8B.js";import"./Label-Bx5THtMF.js";import"./index-pNH6Tvi1.js";import"./MenuListItem-D1jjv5iI.js";import"./MenuListHeading-B46vfCnX.js";import"./MenuItem-CtKw3GMz.js";import"./ItemMedia-DJxakqLL.js";import"./Checkmark-cFLQXWmW.js";import"./ItemControls-DurpuKFn.js";import"./useMenu-Bz8Gr0jh.js";import"./InformationSquare-TMwz5OzD.js";import"./Cog-QyfP42ZQ.js";import"./ClockDashed-wryP5gNL.js";import"./Pencil-2DT9n4xE.js";import"./Switch-Ch_BWUCO.js";function r(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"List"}),`
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
`,e.jsx(s,{of:a}),`
`,e.jsx(i.h2,{id:"list-of-services",children:"List of services"}),`
`,e.jsx(i.p,{children:"Lists of services, using the service owner logo as avatar."}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(i.h2,{id:"list-of-categories",children:"List of categories"}),`
`,e.jsx(i.p,{children:"Lists of categories, using an icon with a subtle color."}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(i.h2,{id:"expanding-multilevel-lists",children:"Expanding, multilevel lists"}),`
`,e.jsx(i.p,{children:"An expandable multilevel list. Parent items are medium sized, children are small. Selected items are indicated using color, while unselected items are gray. Custom controls to manipulate item."}),`
`,e.jsx(s,{of:h}),`
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
`,e.jsx(s,{of:L}),`
`,e.jsx(i.h2,{id:"loading-state",children:"Loading state"}),`
`,e.jsxs(i.p,{children:["Add the ",e.jsx(i.code,{children:"loading"})," prop to represent that a list item is loading ."]}),`
`,e.jsx(s,{of:v}),`
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
`,e.jsx(c,{of:o})]})}function Ue(n={}){const{wrapper:i}={...l(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(r,{...n})}):r(n)}export{Ue as default};
