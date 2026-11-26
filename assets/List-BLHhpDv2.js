var a=Object.defineProperty;var t=(n,s)=>a(n,"name",{value:s,configurable:!0});import{ag as d,a6 as e,r as c,C as i,i as p}from"./iframe-Dhr5kNpI.js";import{Default as o,ListOfPeople as h,ListOfServices as m,ListOfCategories as x,MultilevelList as j}from"./List.stories-h4_B5Y91.js";import{D as r,I as u,a as g,A as f,d as b,e as v,B as L,O as I,c as w,b as y,C,S as A}from"./ListItem.stories-C-qAk-Ws.js";import"./preload-helper-Cc2_yIPf.js";import"./Database-Bp5SCsko.js";import"./TeddyBear-BX2GJNzx.js";import"./skatt-Eb53q4vT.js";import"./brreg-2IRVVnCD.js";import"./Package-BJNLeHUj.js";import"./List-CfCaM-vI.js";import"./Flex-CQB0dbJh.js";import"./ListItem-DNrY8OXn.js";import"./Input-jpu5auKu.js";import"./Avatar-DFghK3As.js";import"./AvatarGroup-DUSzafHi.js";import"./Badge-DkiOJ260.js";import"./Tooltip-w2q6vIcA.js";import"./Heading-DmbuxGS8.js";import"./useHighlightedText-D3bt4yNA.js";import"./ChevronUp-CnX9Oj5-.js";import"./ChevronDown-CRBE2Pft.js";import"./ChevronRight-BnrL2uT7.js";import"./categoryItems-DgxRbNXd.js";import"./HardHat-CUzcgi8n.js";import"./Truck-C4tOLy64.js";import"./Buildings2-Zdf-PMQF.js";import"./Section-xZgyq4QZ.js";import"./Typography-CiPthQfi.js";import"./ContextMenu-BSYfi7oi.js";import"./useDropdownMenuController-CYf_FFxY.js";import"./Dropdown-CYaHmHFx.js";import"./SearchField-Daiwk--y.js";import"./MagnifyingGlass-qp743Sh-.js";import"./MenuListItem-DSvu2y_O.js";import"./MenuListDivider-BDnQXOa-.js";import"./MenuItem-B7bCDHld.js";import"./CheckboxUncheckedIcon-CniL-5fW.js";import"./RadioUncheckedIcon-DgOCQagW.js";import"./ItemMedia-C0ReNhrI.js";import"./ItemLabel-D7TXcLH5.js";import"./ItemControls-CiyO-qr-.js";import"./FieldBase-C_75hFZi.js";import"./Field-BxmDkK6m.js";import"./Label-DR9BIR4K.js";import"./useMenu-BGMvW90K.js";import"./InformationSquare-B4yRDNra.js";import"./Cog-20I_Kd7F.js";import"./ClockDashed-CsZP5RVc.js";import"./Pencil-pzOsxDSV.js";import"./Switch-DrTa1vix.js";function l(n){const s={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"List"}),`
`,e.jsx(s.h1,{id:"using-lists",children:"Using lists"}),`
`,e.jsx(s.p,{children:"Use lists to represent links to spesific objects, for example a list of people or a list of services."}),`
`,e.jsxs(s.p,{children:["Build lists using ",e.jsx(s.code,{children:"List"})," and ",e.jsx(s.code,{children:"ListItem"}),", or use ",e.jsx(s.code,{children:"List"})," with ",e.jsx(s.code,{children:"items"})," for simple, unified lists."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { List, ListItem } from "@altinn/altinn-components";

return (
  <List>
    <ListItem />
    <ListItem />
    <ListItem />
  </List>
);
`})}),`
`,e.jsx(s.p,{children:"While lists can be modified to represent spesific needs, we should try to establish common patterns for similar tasks across Altinn."}),`
`,e.jsx(s.h2,{id:"simple-list",children:"Simple list"}),`
`,e.jsx(s.p,{children:"List with icon and label."}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(s.h2,{id:"list-of-people",children:"List of people"}),`
`,e.jsx(s.p,{children:"Lists of people, using avatars."}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(s.h2,{id:"list-of-services",children:"List of services"}),`
`,e.jsx(s.p,{children:"Lists of services, using the service owner logo as avatar."}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(s.h2,{id:"list-of-categories",children:"List of categories"}),`
`,e.jsx(s.p,{children:"Lists of categories, using an icon with a subtle color."}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(s.h2,{id:"expanding-multilevel-lists",children:"Expanding, multilevel lists"}),`
`,e.jsx(s.p,{children:"An expandable multilevel list. Parent items are medium sized, children are small. Selected items are indicated using color, while unselected items are gray. Custom controls to manipulate item."}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(s.h2,{id:"listitem",children:"ListItem"}),`
`,e.jsxs(s.p,{children:["A ",e.jsx(s.code,{children:"ListItem"})," represents a piece of content; a page, person or an object."]}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(s.h2,{id:"how-to-use",children:"How to use"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { ListItem } from "@altinn/altinn-components";
import { ChevronRightIcon, TeddyBearIcon } from "@navikt/aksel-icons";

<ListItem
  title="Title"
  icon={{ theme: "surface", svgElement: TeddyBearIcon }}
  badge={{ theme: "subtle", label: "2 av 3" }}
  linkIcon
/>;
`})}),`
`,e.jsx(s.h2,{id:"using-icons-or-avatars",children:"Using icons or avatars"}),`
`,e.jsxs(s.p,{children:["Add an icon using the ",e.jsx(s.code,{children:"icon"})," prop. Icons can be references by name or using IconProps, making it possible to add an optional ",e.jsx(s.code,{children:"color"})," and ",e.jsx(s.code,{children:"theme"}),"."]}),`
`,e.jsx(i,{of:u}),`
`,e.jsxs(s.p,{children:["Add an avatar using the ",e.jsx(s.code,{children:"avatar"})," prop."]}),`
`,e.jsx(i,{of:g}),`
`,e.jsxs(s.p,{children:["Add an avatar group using the ",e.jsx(s.code,{children:"avatarGroup"})," prop."]}),`
`,e.jsx(i,{of:f}),`
`,e.jsxs(s.p,{children:["If you need a custom icon you can override it by adding your own component as ",e.jsx(s.code,{children:"icon"}),":"]}),`
`,e.jsx(i,{of:b}),`
`,e.jsx(s.h2,{id:"using-labels",children:"Using labels"}),`
`,e.jsxs(s.p,{children:["By default labels are built up of a ",e.jsx(s.code,{children:"badge"})," and an optional ",e.jsx(s.code,{children:"description"}),". You can override both using the ",e.jsx(s.code,{children:"label"})," prop:"]}),`
`,e.jsx(i,{of:v}),`
`,e.jsx(s.h2,{id:"using-badges",children:"Using badges"}),`
`,e.jsxs(s.p,{children:["By default list items will include a chevron indicating interaction. Use the ",e.jsx(s.code,{children:"badge"})," prop to emphasise what action to expect."]}),`
`,e.jsx(i,{of:L}),`
`,e.jsxs(s.p,{children:["Badge can be replaced with your own component unsing the ",e.jsx(s.code,{children:"badge"})," prop:"]}),`
`,e.jsx(i,{of:I}),`
`,e.jsx(s.h2,{id:"loading-state",children:"Loading state"}),`
`,e.jsxs(s.p,{children:["Add the ",e.jsx(s.code,{children:"loading"})," prop to represent that a list item is loading ."]}),`
`,e.jsx(i,{of:w}),`
`,e.jsx(s.h2,{id:"custom-controls",children:"Custom controls"}),`
`,e.jsxs(s.p,{children:["Add custom controls using the ",e.jsx(s.code,{children:"controls"})," prop."]}),`
`,e.jsx(i,{of:y}),`
`,e.jsx(s.p,{children:"When adding controls, list item interaction is split from controls and default badges are moved next to the label."}),`
`,e.jsx(s.h2,{id:"collapsibleexpanded",children:"Collapsible/expanded"}),`
`,e.jsxs(s.p,{children:["Make items collapsible by adding the ",e.jsx(s.code,{children:"collapsible"})," prop. Adding the ",e.jsx(s.code,{children:"expanded"})," prop will expose its ",e.jsx(s.code,{children:"children"}),"."]}),`
`,e.jsx(i,{of:C}),`
`,e.jsx(s.h2,{id:"selectable",children:"Selectable"}),`
`,e.jsxs(s.p,{children:["Make items selectable by using the ",e.jsx(s.code,{children:"select"})," prop. Add ",e.jsx(s.code,{children:"selected"})," to select the whole element."]}),`
`,e.jsx(i,{of:A}),`
`,e.jsx(s.h2,{id:"props",children:"Props"}),`
`,e.jsx(s.p,{children:"List props."}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(s.p,{children:"ListItem props."}),`
`,e.jsx(p,{of:r})]})}t(l,"_createMdxContent");function ye(n={}){const{wrapper:s}={...d(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(l,{...n})}):l(n)}t(ye,"MDXContent");export{ye as default};
