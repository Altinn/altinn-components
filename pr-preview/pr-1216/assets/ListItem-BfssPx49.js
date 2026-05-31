import{w as r,p as e,c as a,d as t,C as n,b as d}from"./iframe-B0raGbVc.js";import{L as c,I as l,a as p,A as h,d as m,e as x,C as j,B as u,O as g,c as b,b as f,S as v,D as y}from"./ListItem.stories-D7r1Yz3C.js";import"./preload-helper-PPVm8Dsz.js";import"./TeddyBear-RIZgwR6w.js";import"./useId-DjmMrSjF.js";import"./Cog-v9q-1Ou-.js";import"./ClockDashed-BnA4tYuQ.js";import"./Pencil-DS7stHdl.js";import"./ListItem-CBFwejwW.js";import"./index-BFPoepm_.js";import"./Button-DaZ5Xj9O.js";import"./tooltip-C563LrpG.js";import"./Input-DWL065bb.js";import"./XMark-Vu63tlKp.js";import"./Icon-CkGS8ofh.js";import"./Skeleton-Bie46BNt.js";import"./Avatar-C_p7vVVJ.js";import"./AvatarGroup-CCFl7ITU.js";import"./Badge-LVeKbEwp.js";import"./Tooltip-drcV-Psw.js";import"./Heading-HwRbtbil.js";import"./useHighlightedText-Cy927kZm.js";import"./ChevronUp-Cz4MSlUQ.js";import"./ChevronDown-CNqUwOXO.js";import"./ChevronRight-B1cS3dE4.js";import"./List-BUxiMRhB.js";import"./Flex-DAM9Vgpa.js";import"./Section-DlNTQI-0.js";import"./ContextMenu-BVVWzEzP.js";import"./useDropdownMenuController-CZGIg3GD.js";import"./Dropdown-XaITxOJ1.js";import"./SearchField-x-7DN5Df.js";import"./MagnifyingGlass-M1myOHdK.js";import"./FieldBase-COYRg4qt.js";import"./Typography-aMX_Xall.js";import"./Label-BU6sA0x8.js";import"./useMenu-DBDHaupH.js";import"./MenuListItem-Cqp8gCsN.js";import"./MenuListHeading-BOiM7js_.js";import"./MenuItem-CO5pm5KV.js";import"./ItemMedia-vIK6hHXj.js";import"./Checkmark-w1Y8-xSD.js";import"./ItemLabel-WiIVldH2.js";import"./ItemControls-0LHp_bwC.js";import"./index-BdK8fp8H.js";import"./InformationSquare-C1Z5-XLz.js";import"./MenuElipsisHorizontal-1hmmtM6d.js";import"./Switch-CQ1PRon6.js";function s(i){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:c}),`
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
`,e.jsx(n,{of:h}),`
`,e.jsxs(o.p,{children:["If you need a custom icon you can override it by adding your own component as ",e.jsx(o.code,{children:"icon"}),":"]}),`
`,e.jsx(n,{of:m}),`
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
