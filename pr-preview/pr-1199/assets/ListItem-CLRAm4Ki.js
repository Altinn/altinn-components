import{j as e,M as a,P as t,C as n,a as d}from"./iframe-D-ID03Ik.js";import{useMDXComponents as r}from"./index-D77CybYZ.js";import{e as c,I as l,A as p,a as m,O as h,b as x,d as j,B as u,c as g,L as b,C as f,S as v,D as y}from"./ListItem.stories-yMUgU3ND.js";import"./preload-helper-PPVm8Dsz.js";import"./TeddyBear-CjGRGi9D.js";import"./useId-DxZoCrQU.js";import"./Cog-DOaUSyoh.js";import"./ClockDashed-DmoSeQJX.js";import"./Pencil-BM-DRb1F.js";import"./ListItem-x7s3DQfA.js";import"./index-DpFyEq-2.js";import"./Button-CO1zFGa4.js";import"./tooltip-CH7-mov_.js";import"./Input-BflTpPuJ.js";import"./XMark-DAr8sgUQ.js";import"./Icon-CER3YkDn.js";import"./Skeleton--3bwKnDN.js";import"./Avatar-CUF81_T9.js";import"./AvatarGroup-ZBmyex5T.js";import"./Badge-BH60Kfyy.js";import"./Tooltip-DuVvkEGb.js";import"./Heading-BD0s_Obx.js";import"./useHighlightedText-Db1ksA0v.js";import"./ChevronUp-BM7sC8IQ.js";import"./ChevronDown-_u2ch-6C.js";import"./ChevronRight-CxM-6AgC.js";import"./List-C-la8QZt.js";import"./Flex-pOoXofWS.js";import"./Section-Df_v2ciX.js";import"./ContextMenu-CNtum_0S.js";import"./useDropdownMenuController-CvvhEQZ7.js";import"./Dropdown-CPTBx2eu.js";import"./MenuElipsisHorizontal-aZjOJxtA.js";import"./SearchField-D--HBqax.js";import"./MagnifyingGlass-DWkFIUI5.js";import"./FieldBase-DmpPz6xV.js";import"./Typography-COzCTzPW.js";import"./Label-DsF9mxAr.js";import"./MenuListItem-Ba7wKRG_.js";import"./MenuListHeading-D9YSE4Po.js";import"./MenuItem-Czug_8v9.js";import"./ItemMedia-BTzF80jS.js";import"./Checkmark-WbwQiDGB.js";import"./ItemControls-Bpd8WrWV.js";import"./useMenu-OLkOIIh8.js";import"./index-B-QoLJUi.js";import"./InformationSquare-BLDef__3.js";import"./Switch-BD5e0ry_.js";function s(i){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:c}),`
`,e.jsx(o.h1,{id:"listitem",children:"ListItem"}),`
`,e.jsxs(o.p,{children:["A ",e.jsx(o.code,{children:"ListItem"})," represents a piece of content; a page, person or an object."]}),`
`,e.jsx(t,{}),`
`,e.jsx(o.h2,{id:"how-to-use",children:"How to use"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import { ListItem } from "@altinn/altinn-components";
import { TeddyBearIcon } from "@navikt/aksel-icons";

<ListItem
  title="Title"
  icon={{ theme: "surface", svgElement: TeddyBearIcon }}
  badge={{ theme: "subtle", label: "2 av 3" }}
  linkIcon
/>;
`})}),`
`,e.jsx(o.h2,{id:"using-icons-or-avatars",children:"Using icons or avatars"}),`
`,e.jsxs(o.p,{children:["Add an icon using the ",e.jsx(o.code,{children:"icon"})," prop. Icons can be references by name or using IconProps, making it possible to add an optional ",e.jsx(o.code,{children:"color"})," and ",e.jsx(o.code,{children:"theme"}),"."]}),`
`,e.jsx(n,{of:l}),`
`,e.jsxs(o.p,{children:["Add an avatar using the ",e.jsx(o.code,{children:"avatar"})," prop."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsxs(o.p,{children:["Add an avatar group using the ",e.jsx(o.code,{children:"avatarGroup"})," prop."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsxs(o.p,{children:["If you need a custom icon you can override it by adding your own component as ",e.jsx(o.code,{children:"icon"}),":"]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(o.h2,{id:"using-labels",children:"Using labels"}),`
`,e.jsxs(o.p,{children:["By default labels are built up of a ",e.jsx(o.code,{children:"badge"})," and an optional ",e.jsx(o.code,{children:"description"}),". You can override both using the ",e.jsx(o.code,{children:"label"})," prop:"]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(o.h2,{id:"collapsibleexpanded",children:"Collapsible/expanded"}),`
`,e.jsxs(o.p,{children:["Make items collapsible by adding the ",e.jsx(o.code,{children:"collapsible"})," prop. Adding the ",e.jsx(o.code,{children:"expanded"})," prop will expose the ",e.jsx(o.code,{children:"children"})," of the list item."]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(o.h2,{id:"arrow-and-badges",children:"Arrow and badges"}),`
`,e.jsxs(o.p,{children:["Use the ",e.jsx(o.code,{children:"linkIcon"})," prop to indicate to the user that your item is a link. The ",e.jsx(o.code,{children:"badge"})," prop is also useful for informing the user of what to expect when interacting with the item. For example if the item is collapsable."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsxs(o.p,{children:["Badge can be replaced with your own component unsing the ",e.jsx(o.code,{children:"badge"})," prop:"]}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(o.h2,{id:"loading-state",children:"Loading state"}),`
`,e.jsxs(o.p,{children:["Add the ",e.jsx(o.code,{children:"loading"})," prop to represent that a list item is loading ."]}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(o.h2,{id:"custom-controls",children:"Custom controls"}),`
`,e.jsxs(o.p,{children:["Add custom controls using the ",e.jsx(o.code,{children:"controls"})," prop."]}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(o.p,{children:"When adding controls, list item interaction is split from controls and default badges are moved next to the label."}),`
`,e.jsx(o.h2,{id:"selectable",children:"Selectable"}),`
`,e.jsxs(o.p,{children:["Make items selectable by using the ",e.jsx(o.code,{children:"select"})," prop. Add ",e.jsx(o.code,{children:"selected"})," to select the whole element."]}),`
`,e.jsx(n,{of:v}),`
`,e.jsx(o.h2,{id:"props",children:"Props"}),`
`,e.jsx(t,{}),`
`,e.jsx(d,{of:y})]})}function ue(i={}){const{wrapper:o}={...r(),...i.components};return o?e.jsx(o,{...i,children:e.jsx(s,{...i})}):s(i)}export{ue as default};
