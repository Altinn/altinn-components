import{j as e,M as a,P as t,C as n,a as d}from"./iframe-0tjTS8nX.js";import{useMDXComponents as r}from"./index-Do5sMaSl.js";import{e as c,I as l,A as p,a as m,O as h,b as x,d as j,B as u,c as g,L as b,C as f,S as v,D as y}from"./ListItem.stories-BoghU4qc.js";import"./preload-helper-PPVm8Dsz.js";import"./TeddyBear-BTFAfvmM.js";import"./useId-DNFZveVv.js";import"./Cog-Fcu0CSva.js";import"./ClockDashed-Dt4Rg0dq.js";import"./Pencil-DXqeRT14.js";import"./ListItem-BchTOoTJ.js";import"./index-BHkRJabC.js";import"./Button-CyTdDQsP.js";import"./button-Cld0y5Q3.js";import"./use-merge-refs-C-O5ch3n.js";import"./lite-DaUVFjkg.js";import"./Input-CT0ouBbN.js";import"./input-Ce5YvKqZ.js";import"./XMark-C6HGzv3s.js";import"./Icon-CEoRGh9j.js";import"./Skeleton-CiSYBb75.js";import"./Avatar-DBihd_YJ.js";import"./AvatarGroup-Cy536atj.js";import"./Badge-CK8WzVFg.js";import"./Tooltip-B5-oR0O6.js";import"./floating-ui.dom-DCpi3RTt.js";import"./Heading-KoSbgrW3.js";import"./useHighlightedText-D9Q4aeek.js";import"./ChevronUp-DEUjkNQ0.js";import"./ChevronDown-OiQKbBEs.js";import"./ChevronRight-DKBz6hgL.js";import"./List-lf1yby5Z.js";import"./Flex-BjLBa1JB.js";import"./Section-CVxfq1Zs.js";import"./ContextMenu-fefVb9IK.js";import"./useDropdownMenuController-DtWTzaBl.js";import"./Dropdown-Cwwtm8XG.js";import"./MenuElipsisHorizontal-C3l-dan1.js";import"./SearchField-AyG5Put8.js";import"./MagnifyingGlass-Djl9xGro.js";import"./FieldBase-B4LLLb6y.js";import"./Typography-dEwOKrOW.js";import"./Label-DeD3NEAn.js";import"./index-BkdSX7Id.js";import"./MenuListItem-B43Ld8oT.js";import"./MenuListHeading-BfXt7Oa1.js";import"./MenuItem-Dq38BSWn.js";import"./ItemMedia-DYrXvlN2.js";import"./Checkmark-DcFVdWi8.js";import"./ItemControls-C9C9Xohr.js";import"./useMenu-DGQxaY-L.js";import"./InformationSquare-j6Jk7iQg.js";import"./Switch-B0wE7TCS.js";function s(i){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:c}),`
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
`,e.jsx(d,{of:y})]})}function ve(i={}){const{wrapper:o}={...r(),...i.components};return o?e.jsx(o,{...i,children:e.jsx(s,{...i})}):s(i)}export{ve as default};
