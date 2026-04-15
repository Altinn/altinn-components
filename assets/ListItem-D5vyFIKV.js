import{j as e,M as a,P as t,C as n,b as d}from"./iframe-Bka3lqwZ.js";import{useMDXComponents as r}from"./index-CzEAr-GI.js";import{e as c,I as l,A as p,a as m,O as h,b as x,d as j,B as u,c as g,L as b,C as f,S as v,D as y}from"./ListItem.stories-vmw_cMc1.js";import"./preload-helper-PPVm8Dsz.js";import"./TeddyBear-u20hMOpj.js";import"./useId-BOUKUp4S.js";import"./Cog-OkpErU1S.js";import"./ClockDashed-DTJHTAOb.js";import"./Pencil-CQqiGmRF.js";import"./ListItem-CvqbKmOV.js";import"./index-97QH58ax.js";import"./Button-DIVYOCsY.js";import"./button-CqWrgnGb.js";import"./use-merge-refs-CTw0OEaY.js";import"./lite-DaUVFjkg.js";import"./Input-tSTkuC7Q.js";import"./input-Dit64xtC.js";import"./XMark-BopKFElT.js";import"./Icon-DoXRGO_6.js";import"./Skeleton-ECUY2hPc.js";import"./Avatar-DUWR3kRV.js";import"./AvatarGroup-mAK5Ma76.js";import"./Badge-Dr-ny6rj.js";import"./Heading-BxCaPg4n.js";import"./useHighlightedText-DGjnrdw2.js";import"./ChevronUp-1mXV-FY3.js";import"./ChevronDown-7HdAqi_x.js";import"./ChevronRight-1C-HJkAE.js";import"./List-DrMi80p5.js";import"./Flex-CDu7UET9.js";import"./Section-DgAAlgWN.js";import"./ContextMenu-D2ehfNYC.js";import"./useDropdownMenuController-DQoP6UHy.js";import"./Dropdown-BPOECmw-.js";import"./Tooltip-tPkJ6t7_.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-BosBpfbA.js";import"./SearchField-CSZgV0pa.js";import"./MagnifyingGlass-ohRS00MN.js";import"./FieldBase-BlSXl2oz.js";import"./Typography-CMwGEMpO.js";import"./Label-Bo_SdTne.js";import"./index-CQEQ6FSB.js";import"./MenuListItem-DQuvdYRk.js";import"./MenuListHeading-g29dlFn5.js";import"./MenuItem-CQZjBmzk.js";import"./ItemMedia-Ca3m8l5m.js";import"./Checkmark-Bf4nZE-q.js";import"./ItemControls-abhSx9yX.js";import"./useMenu-Cu8ej4cj.js";import"./InformationSquare-BNmERE6I.js";import"./Switch-BEx3_1xn.js";function s(i){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:c}),`
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
