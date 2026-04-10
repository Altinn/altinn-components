import{j as e,M as a,P as t,C as n,b as d}from"./iframe-DpqvNfuX.js";import{useMDXComponents as r}from"./index-DMMzqXxg.js";import{e as c,I as l,A as p,a as m,O as h,b as x,d as j,B as u,c as g,L as b,C as f,S as v,D as y}from"./ListItem.stories-AScfuPYb.js";import"./preload-helper-PPVm8Dsz.js";import"./TeddyBear-Cgcmqtuv.js";import"./useId-BXmkKvJa.js";import"./Cog-CAv7R9JI.js";import"./ClockDashed-CuVHX12c.js";import"./Pencil-DTNAW_BZ.js";import"./ListItem-CCCiwYYh.js";import"./index-Ct2h27FF.js";import"./Button-2gJDIHFD.js";import"./button-B0qBlS1p.js";import"./use-merge-refs-C3UJEavz.js";import"./lite-DaUVFjkg.js";import"./Input-CtghcgQm.js";import"./input-AC6H3fN5.js";import"./XMark-D5GqdRxj.js";import"./Icon-DaddCVMS.js";import"./Skeleton-CUXlhXSK.js";import"./Avatar-BnDDwZQL.js";import"./AvatarGroup-fDT9dP8b.js";import"./Badge-DH_aKElc.js";import"./Heading-CsYSWfhV.js";import"./useHighlightedText-CsoqNVCh.js";import"./ChevronUp-Dxkuhvvs.js";import"./ChevronDown-wC2GJNFy.js";import"./ChevronRight-l4sUB0S3.js";import"./List-CLF93S-1.js";import"./Flex-BVIzbH2w.js";import"./Section-CtbhQhiL.js";import"./ContextMenu-BR8rSsRr.js";import"./useDropdownMenuController-BsIinftt.js";import"./Dropdown-g5xLWPPm.js";import"./Tooltip-BWGqnLO5.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-DhZAoCcg.js";import"./SearchField-B4PsSxTf.js";import"./MagnifyingGlass-oMKY7BYp.js";import"./FieldBase-CwbZRzDX.js";import"./Typography-7MtHaiXa.js";import"./Label-DGyVWTo1.js";import"./index-C4Ss_iIN.js";import"./MenuListItem-ydSncMmo.js";import"./MenuListHeading-C8YiegkQ.js";import"./MenuItem-DsVjpCyh.js";import"./ItemMedia-UuJJBLbY.js";import"./Checkmark-B0EPfKD4.js";import"./useMenu-CL8JxMzd.js";import"./InformationSquare-x_nyg8Lo.js";import"./Switch-CXVa32Re.js";function s(i){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:c}),`
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
