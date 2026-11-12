var a=Object.defineProperty;var t=(n,i)=>a(n,"name",{value:i,configurable:!0});import{ag as d,a6 as e,r as c,C as s,i as p}from"./iframe-M-0W2Kc9.js";import{Default as o,ListOfPeople as h,ListOfServices as m,ListOfCategories as x,MultilevelList as j}from"./List.stories-B2-llJh9.js";import{D as r,I as u,a as g,A as f,d as b,e as v,B as L,O as I,c as w,b as y,C,S as A}from"./ListItem.stories-BjaZJkPH.js";import"./preload-helper-Cc2_yIPf.js";import"./Database-C3XukllD.js";import"./TeddyBear-DVxK5Nio.js";import"./skatt-Eb53q4vT.js";import"./brreg-2IRVVnCD.js";import"./Package-D8JfkOJq.js";import"./List-DiNCcd8p.js";import"./Flex-CvQqYnnc.js";import"./ListItem-Cy-G_cYd.js";import"./Input-PR-EPUfC.js";import"./Avatar-DT58NR7U.js";import"./AvatarGroup-CiVqxcXe.js";import"./Badge-CbVFcrSF.js";import"./Tooltip-CQEIh06C.js";import"./Heading-BiiiOHzW.js";import"./useHighlightedText-DPRacH3N.js";import"./ChevronUp-D7bAfZe9.js";import"./ChevronDown-oFv1HZMB.js";import"./ChevronRight-e5zm3v6Y.js";import"./categoryItems-BMbDztkT.js";import"./HardHat-CocVQ35i.js";import"./Truck-CAHNQCEf.js";import"./Buildings2-YNhXlUod.js";import"./Section-BRRFv94H.js";import"./Typography-xHph4zf_.js";import"./ContextMenu-BvjrPqZd.js";import"./useDropdownMenuController-B592g0FD.js";import"./useIsDesktop-Cn7t9tR4.js";import"./Dropdown-DeOVVvS3.js";import"./SearchField-IrO9fkpT.js";import"./MagnifyingGlass-BCQWJszI.js";import"./MenuListItem-liqRqbPT.js";import"./MenuListDivider-5CZ-K279.js";import"./MenuItem-Bm0vldGL.js";import"./CheckboxUncheckedIcon-D1N0JUmQ.js";import"./RadioUncheckedIcon-DihvZmzM.js";import"./ItemMedia-BNntQAQS.js";import"./ItemLabel-lDW_MVeZ.js";import"./ItemControls-CUY2SrAL.js";import"./FieldBase-Bv-PdLp_.js";import"./Field-CJDObndh.js";import"./Label-BfAsqjGj.js";import"./useMenu-D1I6Xbj7.js";import"./InformationSquare-DDYjH-iE.js";import"./Cog-De_PprxQ.js";import"./ClockDashed-CE3rKYo4.js";import"./Pencil-Dz6DWnFL.js";import"./Switch-rSPs52No.js";function l(n){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"List"}),`
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
`,e.jsx(s,{of:o}),`
`,e.jsx(i.h2,{id:"list-of-people",children:"List of people"}),`
`,e.jsx(i.p,{children:"Lists of people, using avatars."}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(i.h2,{id:"list-of-services",children:"List of services"}),`
`,e.jsx(i.p,{children:"Lists of services, using the service owner logo as avatar."}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(i.h2,{id:"list-of-categories",children:"List of categories"}),`
`,e.jsx(i.p,{children:"Lists of categories, using an icon with a subtle color."}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(i.h2,{id:"expanding-multilevel-lists",children:"Expanding, multilevel lists"}),`
`,e.jsx(i.p,{children:"An expandable multilevel list. Parent items are medium sized, children are small. Selected items are indicated using color, while unselected items are gray. Custom controls to manipulate item."}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(i.h2,{id:"listitem",children:"ListItem"}),`
`,e.jsxs(i.p,{children:["A ",e.jsx(i.code,{children:"ListItem"})," represents a piece of content; a page, person or an object."]}),`
`,e.jsx(s,{of:r}),`
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
`,e.jsx(s,{of:u}),`
`,e.jsxs(i.p,{children:["Add an avatar using the ",e.jsx(i.code,{children:"avatar"})," prop."]}),`
`,e.jsx(s,{of:g}),`
`,e.jsxs(i.p,{children:["Add an avatar group using the ",e.jsx(i.code,{children:"avatarGroup"})," prop."]}),`
`,e.jsx(s,{of:f}),`
`,e.jsxs(i.p,{children:["If you need a custom icon you can override it by adding your own component as ",e.jsx(i.code,{children:"icon"}),":"]}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(i.h2,{id:"using-labels",children:"Using labels"}),`
`,e.jsxs(i.p,{children:["By default labels are built up of a ",e.jsx(i.code,{children:"badge"})," and an optional ",e.jsx(i.code,{children:"description"}),". You can override both using the ",e.jsx(i.code,{children:"label"})," prop:"]}),`
`,e.jsx(s,{of:v}),`
`,e.jsx(i.h2,{id:"using-badges",children:"Using badges"}),`
`,e.jsxs(i.p,{children:["By default list items will include a chevron indicating interaction. Use the ",e.jsx(i.code,{children:"badge"})," prop to emphasise what action to expect."]}),`
`,e.jsx(s,{of:L}),`
`,e.jsxs(i.p,{children:["Badge can be replaced with your own component unsing the ",e.jsx(i.code,{children:"badge"})," prop:"]}),`
`,e.jsx(s,{of:I}),`
`,e.jsx(i.h2,{id:"loading-state",children:"Loading state"}),`
`,e.jsxs(i.p,{children:["Add the ",e.jsx(i.code,{children:"loading"})," prop to represent that a list item is loading ."]}),`
`,e.jsx(s,{of:w}),`
`,e.jsx(i.h2,{id:"custom-controls",children:"Custom controls"}),`
`,e.jsxs(i.p,{children:["Add custom controls using the ",e.jsx(i.code,{children:"controls"})," prop."]}),`
`,e.jsx(s,{of:y}),`
`,e.jsx(i.p,{children:"When adding controls, list item interaction is split from controls and default badges are moved next to the label."}),`
`,e.jsx(i.h2,{id:"collapsibleexpanded",children:"Collapsible/expanded"}),`
`,e.jsxs(i.p,{children:["Make items collapsible by adding the ",e.jsx(i.code,{children:"collapsible"})," prop. Adding the ",e.jsx(i.code,{children:"expanded"})," prop will expose its ",e.jsx(i.code,{children:"children"}),"."]}),`
`,e.jsx(s,{of:C}),`
`,e.jsx(i.h2,{id:"selectable",children:"Selectable"}),`
`,e.jsxs(i.p,{children:["Make items selectable by using the ",e.jsx(i.code,{children:"select"})," prop. Add ",e.jsx(i.code,{children:"selected"})," to select the whole element."]}),`
`,e.jsx(s,{of:A}),`
`,e.jsx(i.h2,{id:"props",children:"Props"}),`
`,e.jsx(i.p,{children:"List props."}),`
`,e.jsx(s,{of:o}),`
`,e.jsx(i.p,{children:"ListItem props."}),`
`,e.jsx(p,{of:r})]})}t(l,"_createMdxContent");function Ce(n={}){const{wrapper:i}={...d(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(l,{...n})}):l(n)}t(Ce,"MDXContent");export{Ce as default};
