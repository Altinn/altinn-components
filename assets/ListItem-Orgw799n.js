import{ag as r,a7 as e,r as a,v as s,C as o,i as d}from"./iframe-DklMp8b9.js";import{L as c,I as l,a as p,A as h,d as m,e as x,C as j,B as u,O as g,c as b,b as f,S as v,D as y}from"./ListItem.stories-Y75wkdF8.js";import"./preload-helper-PPVm8Dsz.js";import"./TeddyBear-sbHijtK0.js";import"./Cog-BYsG48i_.js";import"./ClockDashed-D_U4WlsX.js";import"./Pencil-D_LVI6ol.js";import"./ListItem-CrAQg8rM.js";import"./Input-DDvcPBDR.js";import"./Avatar-CX9IOnsl.js";import"./AvatarGroup-BeC5BXf9.js";import"./Badge-DxwSJzJK.js";import"./Tooltip-BmOBzKTd.js";import"./Heading-C5vDV6s5.js";import"./useHighlightedText-CQ5194gO.js";import"./ChevronUp-ImWxnNDU.js";import"./ChevronDown-C8-zew9t.js";import"./ChevronRight-D0aoAfw5.js";import"./List-CVcEBF4a.js";import"./Flex-CsvoEycQ.js";import"./Section-DuAEz57j.js";import"./ContextMenu-gGcdLnQv.js";import"./useDropdownMenuController-DMmUICAl.js";import"./Dropdown-DhZusmq8.js";import"./SearchField-1BQmUb8n.js";import"./MagnifyingGlass-XA6lr3C7.js";import"./FieldBase-nXdK7v3U.js";import"./Typography-CuZWB-pA.js";import"./Field-Ba2e4qFa.js";import"./Label-BvOr9MHZ.js";import"./useMenu-Dcu-XksR.js";import"./MenuListItem-CtNgIUPP.js";import"./MenuListDivider-DdHQwvZL.js";import"./MenuListHeading-vYUhz8ky.js";import"./MenuItem-DGElsCwp.js";import"./ItemMedia-DvKDb3Qz.js";import"./Checkmark-BxHTLnPH.js";import"./ItemLabel-zm8XuDpe.js";import"./ItemControls-o8s7abF_.js";import"./InformationSquare-D2eEvTI2.js";import"./MenuElipsisHorizontal-BvtZk3Yv.js";import"./Switch-U5XtUBKg.js";function t(i){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:c}),`
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
