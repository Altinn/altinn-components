import{j as e,M as a,P as t,C as n,b as d}from"./iframe-DxKlu2kD.js";import{useMDXComponents as r}from"./index-xnwFrkNa.js";import{e as c,I as l,A as p,a as m,O as h,b as x,d as j,B as u,c as g,L as b,C as f,S as v,D as y}from"./ListItem.stories-Sr6IU6kL.js";import"./preload-helper-PPVm8Dsz.js";import"./TeddyBear-CYrA0JBO.js";import"./useId-_YfdAmsW.js";import"./Cog-Cx2BvUXf.js";import"./ClockDashed-D0rwVTqN.js";import"./Pencil-CJFXQ6QR.js";import"./ListItem-BFQ5Iogs.js";import"./index-BWCSYHeO.js";import"./Button-D78I7hWM.js";import"./button-B-2CHja_.js";import"./use-merge-refs-CvQTDNhp.js";import"./lite-DaUVFjkg.js";import"./Input-3npG3_R_.js";import"./input-BTAyJhby.js";import"./XMark-C1fx_pyo.js";import"./Icon-CrZKj0Yv.js";import"./Skeleton-niSIm0IT.js";import"./Avatar-BwF2spoI.js";import"./AvatarGroup-D_QmYd99.js";import"./Badge-4TJDD2P9.js";import"./Heading-m7XVygop.js";import"./useHighlightedText-DHBtHLKn.js";import"./ChevronUp-CoEIha6w.js";import"./ChevronDown-C5m-qI-T.js";import"./ChevronRight-DCeYx28-.js";import"./List-C5g4_qse.js";import"./Flex-CFZAXqgp.js";import"./Section-5cGBq3ET.js";import"./ContextMenu-BRoNLVIW.js";import"./useDropdownMenuController-cNOqav4I.js";import"./Dropdown-BlFnr1UG.js";import"./Tooltip-DFu8-nHR.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-Brj3vs9F.js";import"./SearchField-yItf8ktv.js";import"./MagnifyingGlass-BSd0JI5p.js";import"./FieldBase-DR6_g4FH.js";import"./Typography-iC77LYkz.js";import"./Label-DPRrgAAI.js";import"./index-sO6KcVLH.js";import"./MenuListItem-BTPFJyFs.js";import"./MenuListHeading-BCVqt4go.js";import"./MenuItem-kNYALtyW.js";import"./ItemMedia-BBqBVaQK.js";import"./Checkmark-C9NR0hmL.js";import"./useMenu-DwMeQcTX.js";import"./InformationSquare-D9H1eLzz.js";import"./Switch-BzdDuGzs.js";function s(i){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:c}),`
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
`,e.jsx(d,{of:y})]})}function fe(i={}){const{wrapper:o}={...r(),...i.components};return o?e.jsx(o,{...i,children:e.jsx(s,{...i})}):s(i)}export{fe as default};
