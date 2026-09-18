import{ag as r,a7 as e,r as a,v as s,C as o,i as d}from"./iframe-CId_qj2z.js";import{L as c,I as l,a as p,A as h,d as m,e as x,C as j,B as u,O as g,c as b,b as f,S as v,D as y}from"./ListItem.stories-Cok19n2a.js";import"./preload-helper-PPVm8Dsz.js";import"./TeddyBear-C7519YFm.js";import"./Cog-DTPqv6Pk.js";import"./ClockDashed-CqHp2ni-.js";import"./Pencil-Dc-4Qphu.js";import"./ListItem-UVHT4kno.js";import"./Input-qq9zM3Qu.js";import"./Avatar-qewy70Fx.js";import"./AvatarGroup-DDqOMRUz.js";import"./Badge-DHd56Np2.js";import"./Tooltip-B4yZ0kY7.js";import"./Heading-sNyVbkrk.js";import"./useHighlightedText-B-8pDdyK.js";import"./ChevronUp-7fsujl90.js";import"./ChevronDown-D4kQ2fb9.js";import"./ChevronRight-CD2F4Mmq.js";import"./List-DXvLeeCM.js";import"./Flex-CPV4Eexm.js";import"./Section-B4HJGPR6.js";import"./ContextMenu-Cr3y-cbT.js";import"./useDropdownMenuController-B3cgP-Sn.js";import"./Dropdown-C5rYnJno.js";import"./SearchField-CLqhaeqA.js";import"./MagnifyingGlass-C7MrVWIP.js";import"./FieldBase-BhNxXsJd.js";import"./Typography-DeDqtkyf.js";import"./Field-C9CrCSTd.js";import"./Label-Bri1HqH-.js";import"./useMenu-CkWSpni-.js";import"./MenuListItem-Bza4K3Vz.js";import"./MenuListDivider-CndLXr4L.js";import"./MenuListHeading-Dgk_gmcd.js";import"./MenuItem-D69ypsbK.js";import"./ItemMedia-DATZMrih.js";import"./Checkmark-CV_uUhR-.js";import"./ItemLabel-ezryvk3W.js";import"./ItemControls-s3x5r9Y_.js";import"./InformationSquare-DbymG94h.js";import"./MenuElipsisHorizontal-DurHs02G.js";import"./Switch-Jy7pPJYw.js";function t(i){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:c}),`
`,e.jsx(n.h1,{id:"listitem",children:"ListItem"}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.code,{children:"ListItem"})," represents a piece of content; a page, person or an object."]}),`
`,e.jsx(s,{}),`
`,e.jsx(n.h2,{id:"how-to-use",children:"How to use"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ListItem } from "@altinn/altinn-components";
import { TeddyBearIcon } from "@navikt/aksel-icons";

<ListItem
  title="Title"
  icon={{ theme: "surface", svgElement: TeddyBearIcon }}
  badge={{ theme: "subtle", label: "2 av 3" }}
  linkIcon
/>;
`})}),`
`,e.jsx(n.h2,{id:"using-icons-or-avatars",children:"Using icons or avatars"}),`
`,e.jsxs(n.p,{children:["Add an icon using the ",e.jsx(n.code,{children:"icon"})," prop. Icons can be references by name or using IconProps, making it possible to add an optional ",e.jsx(n.code,{children:"color"})," and ",e.jsx(n.code,{children:"theme"}),"."]}),`
`,e.jsx(o,{of:l}),`
`,e.jsxs(n.p,{children:["Add an avatar using the ",e.jsx(n.code,{children:"avatar"})," prop."]}),`
`,e.jsx(o,{of:p}),`
`,e.jsxs(n.p,{children:["Add an avatar group using the ",e.jsx(n.code,{children:"avatarGroup"})," prop."]}),`
`,e.jsx(o,{of:h}),`
`,e.jsxs(n.p,{children:["If you need a custom icon you can override it by adding your own component as ",e.jsx(n.code,{children:"icon"}),":"]}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(n.h2,{id:"using-labels",children:"Using labels"}),`
`,e.jsxs(n.p,{children:["By default labels are built up of a ",e.jsx(n.code,{children:"badge"})," and an optional ",e.jsx(n.code,{children:"description"}),". You can override both using the ",e.jsx(n.code,{children:"label"})," prop:"]}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(n.h2,{id:"collapsibleexpanded",children:"Collapsible/expanded"}),`
`,e.jsxs(n.p,{children:["Make items collapsible by adding the ",e.jsx(n.code,{children:"collapsible"})," prop. Adding the ",e.jsx(n.code,{children:"expanded"})," prop will expose the ",e.jsx(n.code,{children:"children"})," of the list item."]}),`
`,e.jsx(o,{of:j}),`
`,e.jsx(n.h2,{id:"arrow-and-badges",children:"Arrow and badges"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"linkIcon"})," prop to indicate to the user that your item is a link. The ",e.jsx(n.code,{children:"badge"})," prop is also useful for informing the user of what to expect when interacting with the item. For example if the item is collapsable."]}),`
`,e.jsx(o,{of:u}),`
`,e.jsxs(n.p,{children:["Badge can be replaced with your own component unsing the ",e.jsx(n.code,{children:"badge"})," prop:"]}),`
`,e.jsx(o,{of:g}),`
`,e.jsx(n.h2,{id:"loading-state",children:"Loading state"}),`
`,e.jsxs(n.p,{children:["Add the ",e.jsx(n.code,{children:"loading"})," prop to represent that a list item is loading ."]}),`
`,e.jsx(o,{of:b}),`
`,e.jsx(n.h2,{id:"custom-controls",children:"Custom controls"}),`
`,e.jsxs(n.p,{children:["Add custom controls using the ",e.jsx(n.code,{children:"controls"})," prop."]}),`
`,e.jsx(o,{of:f}),`
`,e.jsx(n.p,{children:"When adding controls, list item interaction is split from controls and default badges are moved next to the label."}),`
`,e.jsx(n.h2,{id:"selectable",children:"Selectable"}),`
`,e.jsxs(n.p,{children:["Make items selectable by using the ",e.jsx(n.code,{children:"select"})," prop. Add ",e.jsx(n.code,{children:"selected"})," to select the whole element."]}),`
`,e.jsx(o,{of:v}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(s,{}),`
`,e.jsx(d,{of:y})]})}function le(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{le as default};
