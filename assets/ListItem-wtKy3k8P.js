import{ag as r,a7 as e,r as a,v as s,C as o,i as d}from"./iframe-5uZaoZDv.js";import{L as c,I as l,a as p,A as h,d as m,e as x,C as j,B as u,O as g,c as b,b as f,S as v,D as y}from"./ListItem.stories-GhpZ_s32.js";import"./preload-helper-PPVm8Dsz.js";import"./TeddyBear-K0a-flnn.js";import"./Cog-DCYnPJTu.js";import"./ClockDashed-D9mjhE8V.js";import"./Pencil-LLi1GE-R.js";import"./ListItem-BXdKg3lG.js";import"./Input-C9_VoQpt.js";import"./Avatar-YMRiiHHf.js";import"./AvatarGroup-BGXl6ZDr.js";import"./Badge-CJMAUuOr.js";import"./Tooltip-BCm3h_Ql.js";import"./Heading-B0bYr3fv.js";import"./useHighlightedText-SumDRzv0.js";import"./ChevronUp-DyiUf01B.js";import"./ChevronDown-WcynsFDk.js";import"./ChevronRight-Bm7ufgRx.js";import"./List-CGkmFa0n.js";import"./Flex-n4FQi775.js";import"./Section-BAWmKTu0.js";import"./ContextMenu-B6BhHYA_.js";import"./useDropdownMenuController-CpFfsyiJ.js";import"./Dropdown-CDWM3_3M.js";import"./SearchField-BHTg7ejP.js";import"./MagnifyingGlass-BhHVps8f.js";import"./FieldBase-D-wimfjV.js";import"./Typography-DIry-l26.js";import"./Field-CjiYvts-.js";import"./Label-DkLrq_fL.js";import"./useMenu-ihj2gTIo.js";import"./MenuListItem-BbZ2xvN5.js";import"./MenuListDivider-BVxqYtLY.js";import"./MenuListHeading-gwVAdWe6.js";import"./MenuItem-CHpnlanL.js";import"./ItemMedia-CTN7-8P7.js";import"./Checkmark-j8exHh37.js";import"./ItemLabel-DdCL01OT.js";import"./ItemControls-DqscoWhH.js";import"./InformationSquare-DVWbDPiI.js";import"./MenuElipsisHorizontal-BtmouW_1.js";import"./Switch-DtoW_28_.js";function t(i){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:c}),`
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
