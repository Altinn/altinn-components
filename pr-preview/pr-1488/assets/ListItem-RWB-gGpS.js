var d=Object.defineProperty;var s=(i,n)=>d(i,"name",{value:n,configurable:!0});import{ag as a,a6 as e,r as c,v as t,C as o,i as l}from"./iframe-Cb83cNHz.js";import{L as p,I as h,a as m,A as x,d as j,e as u,C as g,B as b,O as f,c as v,b as y,S as I,D as w}from"./ListItem.stories-Cee-FuGW.js";import"./preload-helper-Cc2_yIPf.js";import"./TeddyBear-BqbKNvD5.js";import"./Cog-CWhaXMgq.js";import"./ClockDashed-CdLFcCzb.js";import"./Pencil-BT4WtC0b.js";import"./ListItem-DCX5xInW.js";import"./Input-DdatSh7d.js";import"./Avatar-CO1wzsxc.js";import"./AvatarGroup-DvuSBfuR.js";import"./Badge-DGYSahl0.js";import"./Tooltip-Bacli5fs.js";import"./Heading-I2bz7uBQ.js";import"./useHighlightedText-DXF5vSCe.js";import"./ChevronUp-BCG2x0JT.js";import"./ChevronDown-CvYcy6of.js";import"./ChevronRight-C-6CVVq7.js";import"./List-_fktTtX7.js";import"./Flex-mAUGJKsG.js";import"./Section-ClBUDaq7.js";import"./ContextMenu-BmqCqerS.js";import"./useDropdownMenuController-Q85VC5Dx.js";import"./Dropdown-ANdQRx3c.js";import"./SearchField-HWu0obAx.js";import"./MagnifyingGlass-C02McN1l.js";import"./MenuListItem-Ddq1rF2u.js";import"./MenuListDivider-CU0QYw1K.js";import"./MenuItem-D8XMh2RI.js";import"./CheckboxUncheckedIcon-DNQ5ph0B.js";import"./RadioUncheckedIcon-CIyf3y8X.js";import"./ItemMedia-DqOX_qxk.js";import"./ItemLabel-BEqC8Tjb.js";import"./ItemControls-B2ksNOht.js";import"./FieldBase-DBBKjPwf.js";import"./Typography-BPADIB9F.js";import"./Field-SexvxzIl.js";import"./Label-CzmEce_d.js";import"./useMenu-D3abljbA.js";import"./InformationSquare-BiO92rri.js";import"./Switch-DIW_Z6WH.js";function r(i){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:p}),`
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
`,e.jsx(l,{of:w})]})}s(r,"_createMdxContent");function he(i={}){const{wrapper:n}={...a(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}s(he,"MDXContent");export{he as default};
