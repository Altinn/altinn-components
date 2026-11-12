var d=Object.defineProperty;var s=(i,n)=>d(i,"name",{value:n,configurable:!0});import{ah as a,a7 as e,r as c,v as t,C as o,i as l}from"./iframe-D6r7-MD4.js";import{L as p,I as h,a as m,A as x,d as j,e as u,C as g,B as b,O as f,c as v,b as y,S as I,D as w}from"./ListItem.stories-tcoVtS64.js";import"./preload-helper-Cc2_yIPf.js";import"./TeddyBear-D7KCgy9_.js";import"./Cog-C4m3l1LF.js";import"./ClockDashed-8bhbX2BH.js";import"./Pencil-Dl5wJ2cx.js";import"./ListItem-gXA8ij5k.js";import"./Input-CtcmBtOO.js";import"./Avatar-DRH-z-Xj.js";import"./AvatarGroup-Ba2zvAJ7.js";import"./Badge-CP83yfsu.js";import"./Tooltip-CXVzZfKB.js";import"./Heading-BBX9eyEy.js";import"./useHighlightedText-ByiYciR_.js";import"./ChevronUp-o2c5iYOu.js";import"./ChevronDown-CA3F-CAN.js";import"./ChevronRight-B-ItEsH6.js";import"./List-CNLkXZoG.js";import"./Flex-BbelGz4F.js";import"./Section-CZyWrzO9.js";import"./ContextMenu-B9oz4ZZo.js";import"./useDropdownMenuController-BwhWyrgf.js";import"./useIsDesktop-EdoKGz01.js";import"./Dropdown-C-gLDO5J.js";import"./SearchField-xJmrCU7q.js";import"./commonTexts-CG1mkCQM.js";import"./MagnifyingGlass-Bj8AyQob.js";import"./MenuListItem-BIaSNRVF.js";import"./MenuListDivider-DoLEaBRc.js";import"./MenuItem-CVg-Aq96.js";import"./CheckboxUncheckedIcon-B9mzN8fM.js";import"./RadioUncheckedIcon-CaPqnsDK.js";import"./ItemMedia-CeccNKOc.js";import"./ItemLabel-CjCW6exE.js";import"./ItemControls-Cgg9ynEC.js";import"./FieldBase-BsGJArhX.js";import"./Typography-CHbDBJK8.js";import"./Field-Des1xs_L.js";import"./Label-C4LgoAnx.js";import"./useMenu-BVbqxAfY.js";import"./InformationSquare-Rb80un_D.js";import"./Switch-Tw7A9AdD.js";function r(i){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:p}),`
`,e.jsx(n.h1,{id:"listitem",children:"ListItem"}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.code,{children:"ListItem"})," represents a piece of content; a page, person or an object."]}),`
`,e.jsx(t,{}),`
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
`,e.jsx(o,{of:h}),`
`,e.jsxs(n.p,{children:["Add an avatar using the ",e.jsx(n.code,{children:"avatar"})," prop."]}),`
`,e.jsx(o,{of:m}),`
`,e.jsxs(n.p,{children:["Add an avatar group using the ",e.jsx(n.code,{children:"avatarGroup"})," prop."]}),`
`,e.jsx(o,{of:x}),`
`,e.jsxs(n.p,{children:["If you need a custom icon you can override it by adding your own component as ",e.jsx(n.code,{children:"icon"}),":"]}),`
`,e.jsx(o,{of:j}),`
`,e.jsx(n.h2,{id:"using-labels",children:"Using labels"}),`
`,e.jsxs(n.p,{children:["By default labels are built up of a ",e.jsx(n.code,{children:"badge"})," and an optional ",e.jsx(n.code,{children:"description"}),". You can override both using the ",e.jsx(n.code,{children:"label"})," prop:"]}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(n.h2,{id:"collapsibleexpanded",children:"Collapsible/expanded"}),`
`,e.jsxs(n.p,{children:["Make items collapsible by adding the ",e.jsx(n.code,{children:"collapsible"})," prop. Adding the ",e.jsx(n.code,{children:"expanded"})," prop will expose the ",e.jsx(n.code,{children:"children"})," of the list item."]}),`
`,e.jsx(o,{of:g}),`
`,e.jsx(n.h2,{id:"arrow-and-badges",children:"Arrow and badges"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"linkIcon"})," prop to indicate to the user that your item is a link. The ",e.jsx(n.code,{children:"badge"})," prop is also useful for informing the user of what to expect when interacting with the item. For example if the item is collapsable."]}),`
`,e.jsx(o,{of:b}),`
`,e.jsxs(n.p,{children:["Badge can be replaced with your own component unsing the ",e.jsx(n.code,{children:"badge"})," prop:"]}),`
`,e.jsx(o,{of:f}),`
`,e.jsx(n.h2,{id:"loading-state",children:"Loading state"}),`
`,e.jsxs(n.p,{children:["Add the ",e.jsx(n.code,{children:"loading"})," prop to represent that a list item is loading ."]}),`
`,e.jsx(o,{of:v}),`
`,e.jsx(n.h2,{id:"custom-controls",children:"Custom controls"}),`
`,e.jsxs(n.p,{children:["Add custom controls using the ",e.jsx(n.code,{children:"controls"})," prop."]}),`
`,e.jsx(o,{of:y}),`
`,e.jsx(n.p,{children:"When adding controls, list item interaction is split from controls and default badges are moved next to the label."}),`
`,e.jsx(n.h2,{id:"selectable",children:"Selectable"}),`
`,e.jsxs(n.p,{children:["Make items selectable by using the ",e.jsx(n.code,{children:"select"})," prop. Add ",e.jsx(n.code,{children:"selected"})," to select the whole element."]}),`
`,e.jsx(o,{of:I}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(t,{}),`
`,e.jsx(l,{of:w})]})}s(r,"_createMdxContent");function xe(i={}){const{wrapper:n}={...a(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}s(xe,"MDXContent");export{xe as default};
