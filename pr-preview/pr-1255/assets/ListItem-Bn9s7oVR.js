import{ag as r,a7 as e,r as a,v as s,C as o,i as d}from"./iframe-2h8IP8d3.js";import{L as c,I as l,a as p,A as h,d as m,e as x,C as j,B as u,O as g,c as b,b as f,S as v,D as y}from"./ListItem.stories-DNskbVNq.js";import"./preload-helper-PPVm8Dsz.js";import"./TeddyBear-Ce_Xeyq8.js";import"./Cog-B8qGeiMV.js";import"./ClockDashed-Cv4GmxbJ.js";import"./Pencil-x_uSjeU0.js";import"./ListItem-Cu2B-552.js";import"./Input-CcSuNkw7.js";import"./Avatar-C_KS8ezx.js";import"./AvatarGroup-ChTLLSw-.js";import"./Badge-Pn_S1ZTN.js";import"./Tooltip-D08FTuVb.js";import"./Heading-DXu-0NAz.js";import"./useHighlightedText-CelzCUqF.js";import"./ChevronUp-BQbblg8y.js";import"./ChevronDown-D2-mCLBn.js";import"./ChevronRight-Bz8Cr0I4.js";import"./List-BAuO8R5u.js";import"./Flex-CMEhZHn2.js";import"./Section-CJtHgorM.js";import"./ContextMenu-JRPx45pc.js";import"./useDropdownMenuController--HjFekig.js";import"./Dropdown-BKTHH5xT.js";import"./SearchField-_MN_HrdV.js";import"./MagnifyingGlass-CI0_p9bj.js";import"./FieldBase-DGYDbbnf.js";import"./Typography-DY06DO0f.js";import"./Field-BxD7Ql4y.js";import"./Label-ZzFKhgKK.js";import"./useMenu-DBT0rzRb.js";import"./MenuListItem-Bu8N3gRa.js";import"./MenuListDivider-C4ZS-zxE.js";import"./MenuListHeading-CFPiwF83.js";import"./MenuItem-Cg_2HM56.js";import"./ItemMedia-F0nN_YEB.js";import"./Checkmark-kZsld0tw.js";import"./ItemLabel-DAuWzgED.js";import"./ItemControls-F7yjZiAX.js";import"./index-CQmnZsg3.js";import"./InformationSquare-DAAIm6NS.js";import"./MenuElipsisHorizontal-CeM94VAc.js";import"./Switch-CggvXl6Z.js";function t(i){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:c}),`
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
`,e.jsx(d,{of:y})]})}function pe(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{pe as default};
