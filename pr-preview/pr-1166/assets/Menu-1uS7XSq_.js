import{j as e,M as s,C as i}from"./iframe-BLYnYdJi.js";import{useMDXComponents as r}from"./index-D-vv9O49.js";import{Default as m,CreatingHiearchy as p,NestingItems as c}from"./Menu.stories-C1LeJzEJ.js";import"./preload-helper-PPVm8Dsz.js";import"./Paperclip-BRG3sxHl.js";import"./useId-X7maRfkh.js";import"./InformationSquare-OOV4URoX.js";import"./Eye-CdC36Qhm.js";import"./Truck-CzyQSdlX.js";import"./PersonGroup-BiAPA486.js";import"./Cog-BP1I14gn.js";import"./TeddyBear-_ZNRy_CF.js";import"./MenuGrid-DofngXnY.js";import"./Enter-v6RvFZ3i.js";import"./InboxFill-DJ5M8-wl.js";import"./PersonCircle-osD0t2d-.js";import"./Buildings2-DxfjqMPA.js";import"./Globe-DWIPGG6q.js";import"./Bell-Cb-YtyNE.js";import"./Bookmark-DwmprL4z.js";import"./ClockDashed-DbsDanPS.js";import"./Archive-CQEKpySn.js";import"./Trash-C9XX2244.js";import"./EyeClosed-BmomYdk8.js";import"./MenuHamburger-C7T2DwIu.js";import"./SearchField-BrbRKSJg.js";import"./index-B87fQ9Ty.js";import"./MagnifyingGlass-vVGrqHq4.js";import"./XMark-Df3dBUtr.js";import"./FieldBase-CvSJrP7q.js";import"./Typography-CnODk9AP.js";import"./useHighlightedText-omqdYwyr.js";import"./Skeleton-DVFvYbaO.js";import"./Label-Br4cyMgU.js";import"./index-CJAPncw7.js";import"./use-merge-refs-FLCzGq2C.js";import"./lite-DaUVFjkg.js";import"./Input-6k10kXxt.js";import"./input-D5lGbDkw.js";import"./Button-DA7PTG8V.js";import"./button-B4GPokGl.js";import"./MenuListItem-4EzyMnJz.js";import"./MenuListHeading-CHqHsXip.js";import"./MenuItem-QRksz61A.js";import"./ItemMedia-PaceHGjP.js";import"./Avatar-R2BW9KiJ.js";import"./AvatarGroup-Bj4w1IxT.js";import"./Icon-BBgjdpk7.js";import"./Checkmark-DfNuFQY9.js";import"./Heading-BbPallRO.js";import"./ItemControls-lA3CDM6n.js";import"./ChevronRight-BKn9ueoN.js";import"./Badge-C8IaAeJ7.js";import"./Tooltip-C4gqbQ4g.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-DImJoMjP.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Menu"}),`
`,e.jsx(n.h1,{id:"using-menus",children:"Using menus"}),`
`,e.jsxs(n.p,{children:["The menu component is the basis of all menus, including the ",e.jsx(n.code,{children:"GlobalMenu"}),". It is also part of ",e.jsx(n.code,{children:"Layout"})," as an optional local menu."]}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"Menu"})," by providing an array of ",e.jsx(n.code,{children:"items"})," and an optional ",e.jsx(n.code,{children:"groups"})," object. Items can be nested."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Menu } from "@altinn/altinn-components";

return (
  <Menu groups={<MenuItemGroups>} items={<MenuItemProps[]>}>
);
`})}),`
`,e.jsx(n.h2,{id:"menuitem",children:"MenuItem"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"MenuItem"})," represent a single link. It must include at least a ",e.jsx(n.code,{children:"title"})," and an ",e.jsx(n.code,{children:"id"}),". Use ",e.jsx(n.code,{children:"icon"})," to emphasise meaning."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h3,{id:"creating-hiearchy",children:"Creating hiearchy"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"groups"})," to divide the menu into logical parts which will be divided by a border."]}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"size"}),", and ",e.jsx(n.code,{children:"iconTheme"})," to create hierarchy."]}),`
`,e.jsxs(n.p,{children:["You can set defaults by using ",e.jsx(n.code,{children:"defaultItemSize"}),", and ",e.jsx(n.code,{children:"defaultIconTheme"})," on menu and groups."]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h3,{id:"nesting-items",children:"Nesting items"}),`
`,e.jsx(n.p,{children:"Items can be nested."}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h2,{id:"menu-composition",children:"Menu composition"}),`
`,e.jsx(n.p,{children:"Under the hood, menus are constructed using multiple components."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`return (
    <MenuList>
      <MenuListItem>
        <MenuItem />
      </MenuListItem>
      <MenuListItem>
        <MenuItem />
        <MenuList>
          <MenuListItem>
            <MenuItem />
          </MenuListItem>
          <MenuListItem>
            <MenuItem />
          </MenuListItem>
        </MenuList>
      </MenuListItem>
    </MenuList>
);
`})})]})}function ue(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{ue as default};
