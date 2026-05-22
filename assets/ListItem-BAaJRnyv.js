import{j as e,M as a,P as t,C as n,a as d}from"./iframe-BM6RZuQM.js";import{useMDXComponents as r}from"./index-DP3NQFcB.js";import{e as c,I as l,A as p,a as m,O as h,b as x,d as j,B as u,c as g,L as b,C as f,S as v,D as y}from"./ListItem.stories-DGMn1tSs.js";import"./preload-helper-PPVm8Dsz.js";import"./TeddyBear-DBHlmWOt.js";import"./useId-BYt_OYJh.js";import"./Cog-ZcPMYDbZ.js";import"./ClockDashed-sGix1zSO.js";import"./Pencil-_eyGXsJC.js";import"./ListItem-BBnKBFME.js";import"./index-DAnedVDn.js";import"./Button-DhtPu9_Y.js";import"./tooltip-DKLQ4JCb.js";import"./Input-DsxiHlOc.js";import"./XMark-EbOSJv8a.js";import"./Icon-m3ZEAfHU.js";import"./Skeleton-DWzjK3h6.js";import"./Avatar-P_Ikblul.js";import"./AvatarGroup-pynF50Va.js";import"./Badge-QT5oZygk.js";import"./Tooltip-BxiimWqz.js";import"./Heading-aHWaPGZz.js";import"./useHighlightedText-Ctq_ta7p.js";import"./ChevronUp-CLlFINM4.js";import"./ChevronDown-DYIPhVz6.js";import"./ChevronRight-B7KHdEb3.js";import"./List-6_Ms0xCG.js";import"./Flex-DCHL4VAz.js";import"./Section-h9TGEdkh.js";import"./ContextMenu-CTWKr_fC.js";import"./useDropdownMenuController-ChtSiN5l.js";import"./Dropdown-Cm6GAKAK.js";import"./MenuElipsisHorizontal-Bs3D9CID.js";import"./SearchField-BgkLBjBi.js";import"./MagnifyingGlass-D8QlnKcL.js";import"./FieldBase-lFVyN1xh.js";import"./Typography-CXaseqiH.js";import"./Label-C7IFl0uM.js";import"./MenuListItem-CFW9Qx09.js";import"./MenuListHeading-DdL3Lhhp.js";import"./MenuItem-CZgTJUho.js";import"./ItemMedia-qdtGx-k7.js";import"./Checkmark-CVccove_.js";import"./ItemControls-DdRx042_.js";import"./useMenu-DmjwUxq0.js";import"./index-CvxbdxgD.js";import"./InformationSquare-sR-zXHjU.js";import"./Switch-D6evj3r2.js";function s(i){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:c}),`
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
