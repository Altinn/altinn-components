import{j as e,M as a,P as t,C as n,a as d}from"./iframe-CdkbiINU.js";import{useMDXComponents as r}from"./index-D6-AVsu5.js";import{e as c,I as l,A as p,a as m,O as h,b as x,d as j,B as u,c as g,L as b,C as f,S as v,D as y}from"./ListItem.stories-DBPBwZPQ.js";import"./preload-helper-PPVm8Dsz.js";import"./TeddyBear-C_Hc3Sug.js";import"./useId-BBNwfwR-.js";import"./Cog-D2TdgDK8.js";import"./ClockDashed-Da5zW20o.js";import"./Pencil-D7lUFaES.js";import"./ListItem-CivujPX4.js";import"./index-ClUlC5r_.js";import"./Button-DbqBa2Ra.js";import"./tooltip-ClrKYCC2.js";import"./Input-CXgAq3E9.js";import"./XMark-CXTea0I2.js";import"./Icon-Cn1mWE7M.js";import"./Skeleton-DNrLKFK9.js";import"./Avatar-Dqj4y4ce.js";import"./AvatarGroup-XhgZMwS_.js";import"./Badge-Nnj4VnpH.js";import"./Tooltip-CkfZKf5K.js";import"./Heading-pV_B_Yzg.js";import"./useHighlightedText-Z8eL_Nst.js";import"./ChevronUp-zAhIBGoC.js";import"./ChevronDown-DqPtLl_G.js";import"./ChevronRight-WcqCaCSB.js";import"./List-aGBfRfyr.js";import"./Flex-B60SO79o.js";import"./Section-CxpgG4VY.js";import"./ContextMenu-DKrW1DIT.js";import"./useDropdownMenuController-DY23hdKX.js";import"./Dropdown-B3ZWUXYU.js";import"./MenuElipsisHorizontal-Drry6q8X.js";import"./SearchField-D9zkHyRI.js";import"./MagnifyingGlass-MF_Zjyww.js";import"./FieldBase-CADFK9ds.js";import"./Typography-CbNgqrog.js";import"./Label-DOiiUdXJ.js";import"./MenuListItem-CwD3vAur.js";import"./MenuListHeading-DRaOclWG.js";import"./MenuItem-DuLXc_4R.js";import"./ItemMedia-Mj1KUH0F.js";import"./Checkmark-B8HStk1Z.js";import"./ItemControls-2WNlOUKw.js";import"./useMenu-Cw7IEDma.js";import"./index-D4P432Vi.js";import"./InformationSquare-lXhFqiHS.js";import"./Switch-Cw7IuUMn.js";function s(i){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:c}),`
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
