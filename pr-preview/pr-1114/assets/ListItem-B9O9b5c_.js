import{j as e,M as a,P as t,C as n,b as d}from"./iframe-BmFIVBn_.js";import{useMDXComponents as r}from"./index-DxKwZgsl.js";import{e as c,I as l,A as p,a as m,O as h,b as x,d as j,B as u,c as g,L as b,C as f,S as v,D as y}from"./ListItem.stories-BImIaSxP.js";import"./preload-helper-PPVm8Dsz.js";import"./TeddyBear-BFFH_Plg.js";import"./useId-ClegSKnE.js";import"./Cog-B6LLrtyj.js";import"./ClockDashed-D19_5m9-.js";import"./Pencil-CFPT9nVE.js";import"./ListItem-CaiNUw8w.js";import"./index-3BUTcXKg.js";import"./Button-qEoy6ct0.js";import"./button-DKdxIprw.js";import"./use-merge-refs-C8jIJdDy.js";import"./lite-DaUVFjkg.js";import"./Input-D2BG68i3.js";import"./input-DVOXybW4.js";import"./XMark-DPeWQ31a.js";import"./Icon-zZDqlwOf.js";import"./Skeleton-DRn19mA6.js";import"./Avatar-Zvdkk7EN.js";import"./AvatarGroup-DqX7R4kJ.js";import"./Badge-DoiHwmxA.js";import"./Heading-D2Zb4ZMb.js";import"./useHighlightedText-Dq-XqtYP.js";import"./ChevronUp-DNi3P42Z.js";import"./ChevronDown-B_BWwBHT.js";import"./ChevronRight-DcRWf4tm.js";import"./List-DKOvmWxK.js";import"./Flex-CFezmhlL.js";import"./Section-8wZRyHWu.js";import"./ContextMenu-BSs9gTuy.js";import"./useDropdownMenuController-D8IQ0jaC.js";import"./Dropdown-OBdyljPV.js";import"./Tooltip-B1Uxs2J8.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-1g4ibsMX.js";import"./SearchField-BQQnPaDG.js";import"./MagnifyingGlass-B0C_9vni.js";import"./FieldBase-Cx6yKeh2.js";import"./Typography-CMiy0gec.js";import"./Label-D7uBca_a.js";import"./index-32OlLxJ9.js";import"./MenuListItem-INuSyNfv.js";import"./MenuListHeading-D4ZyNWhk.js";import"./MenuItem-BvPBRlig.js";import"./ItemMedia-CCYQNyqL.js";import"./Checkmark-DWNi5SDl.js";import"./ItemControls-B2xjI1HN.js";import"./useMenu-BRAeQdeQ.js";import"./InformationSquare-Ct2wAfNF.js";import"./Switch-72xu8gyc.js";function s(i){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:c}),`
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
