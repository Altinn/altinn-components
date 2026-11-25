var a=Object.defineProperty;var t=(n,s)=>a(n,"name",{value:s,configurable:!0});import{ag as d,a6 as e,r as c,C as i,i as p}from"./iframe-CmRPDbOf.js";import{Default as o,ListOfPeople as h,ListOfServices as m,ListOfCategories as x,MultilevelList as j}from"./List.stories-DMQQZ7vd.js";import{D as r,I as u,a as g,A as f,d as b,e as v,B as L,O as I,c as w,b as y,C,S as A}from"./ListItem.stories-CvMdHmfP.js";import"./preload-helper-Cc2_yIPf.js";import"./Database-DWZkaKzo.js";import"./TeddyBear-uIye0GTc.js";import"./skatt-Eb53q4vT.js";import"./brreg-2IRVVnCD.js";import"./Package-DPNRqSdR.js";import"./List-Dcrfn7hV.js";import"./Flex-CHIj3aXb.js";import"./ListItem-DMNi5z0u.js";import"./Input-SsfERmB5.js";import"./Avatar-CwlqlX3p.js";import"./AvatarGroup-CLRHdYA5.js";import"./Badge-v2cVTzHM.js";import"./Tooltip-68erwe8G.js";import"./Heading-Bga8Ehqe.js";import"./useHighlightedText-DjvNujh0.js";import"./ChevronUp-Du7zJIj-.js";import"./ChevronDown-DDaXyD9m.js";import"./ChevronRight-DUgz5ktQ.js";import"./categoryItems-CEBAMNk2.js";import"./HardHat-VRk6WN9h.js";import"./Truck-DvJ3kVei.js";import"./Buildings2-N07gQ7vJ.js";import"./Section-BoLEShm2.js";import"./Typography-3Ni-pGxm.js";import"./ContextMenu-Cbf9vWrX.js";import"./useDropdownMenuController-D9mdepVV.js";import"./Dropdown-B1dfaL3E.js";import"./SearchField-DPxFOcjN.js";import"./MagnifyingGlass-CwhdRafK.js";import"./MenuListItem-DYZsrCFE.js";import"./MenuListDivider-USarlITZ.js";import"./MenuItem-CP9JLIOX.js";import"./CheckboxUncheckedIcon-Dld9bvaz.js";import"./RadioUncheckedIcon-zMkD8-D_.js";import"./ItemMedia-BANum1kS.js";import"./ItemLabel-S9If7Ew0.js";import"./ItemControls-CjzJ0cx0.js";import"./FieldBase-uTfpYKlO.js";import"./Field-BGZ86hwn.js";import"./Label-DME-k-qs.js";import"./useMenu-Dthlol8g.js";import"./InformationSquare-CWm2kkCA.js";import"./Cog-DpnaWjbl.js";import"./ClockDashed-DoZCcm3C.js";import"./Pencil-Df8AjcYs.js";import"./Switch-ClafsxpZ.js";function l(n){const s={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"List"}),`
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
