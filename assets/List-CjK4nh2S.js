import{j as e,M as d,C as s,a}from"./iframe-CPVbSj3C.js";import{useMDXComponents as l}from"./index-C-bkg60x.js";import{Default as t,ListOfPeople as c,ListOfServices as p,ListOfCategories as m,MultilevelList as h}from"./List.stories-BhDTFcin.js";import{D as o,I as x,A as j,a as u,O as g,b as f,B as b,c as L,L as v,C as I,d as w,S as y}from"./ListItem.stories-BBQ6S31q.js";import"./preload-helper-PPVm8Dsz.js";import"./Database-BNi5bb01.js";import"./useId-CeU55pH0.js";import"./TeddyBear-0ey-TDkX.js";import"./nav-Cq5UszUX.js";import"./Package-Cqm_Ziii.js";import"./List-B1jbPhNU.js";import"./index-B-yq3MoC.js";import"./Flex-DcepQHCt.js";import"./ListItem-PZZV2dBV.js";import"./Button-D-Q0AT9s.js";import"./button-ChrWDnnK.js";import"./use-merge-refs-14k-yabz.js";import"./lite-DaUVFjkg.js";import"./Input-BYE1y6gH.js";import"./input-fAELYQ1t.js";import"./XMark-DWjKCZtX.js";import"./Icon-DFTXBWnL.js";import"./Skeleton-O-y9i0gG.js";import"./Avatar-Ctx52zko.js";import"./AvatarGroup-Dg-4Llzy.js";import"./Badge-DYvIbN7v.js";import"./Tooltip-B8o2LWCL.js";import"./floating-ui.dom-DCpi3RTt.js";import"./Heading-Bxz0tryo.js";import"./useHighlightedText-cpJ8B6bV.js";import"./ChevronUp-26jjNeZQ.js";import"./ChevronDown-Dne2Ro5q.js";import"./ChevronRight-D8cN60Uo.js";import"./skatt-Eb53q4vT.js";import"./brreg-2IRVVnCD.js";import"./categoryItems-CN4-ujFo.js";import"./HardHat-ZPEh148Z.js";import"./Truck-DLyU9Gqq.js";import"./Buildings2-DTyd86gG.js";import"./Section-D88C7V2M.js";import"./Typography-CiUpHFvi.js";import"./ContextMenu-BpEtaE5j.js";import"./useDropdownMenuController-D8Yozs_o.js";import"./Dropdown-CWKVFS9V.js";import"./MenuElipsisHorizontal-2MdITEPY.js";import"./SearchField-B-nnAALe.js";import"./MagnifyingGlass-BOvUZuLn.js";import"./FieldBase-COzHnWja.js";import"./Label-VN1m6SC8.js";import"./index-DZJ03fJe.js";import"./MenuListItem-BWz4VDTU.js";import"./MenuListHeading-2OJeU36d.js";import"./MenuItem-CBTlmB_y.js";import"./ItemMedia-C5hW-xxB.js";import"./Checkmark-D2vzhSBC.js";import"./ItemControls-DA5Yy7AS.js";import"./useMenu-CE-qOAep.js";import"./index-B7mUU4Rd.js";import"./InformationSquare-y17ZYOyi.js";import"./Cog-IJaZaMLR.js";import"./ClockDashed-CXAa2KHW.js";import"./Pencil-BX-ws17f.js";import"./Switch-kADCV8Cm.js";function r(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"List"}),`
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
`,e.jsx(a,{of:o})]})}function Pe(n={}){const{wrapper:i}={...l(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(r,{...n})}):r(n)}export{Pe as default};
